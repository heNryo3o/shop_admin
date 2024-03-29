<template>
  <div class="app-container">
    <el-row class="filter-container" :gutter="10">
      <el-col :sm="4">
        <el-input v-model="listQuery.mobile" size="medium" prefix-icon="el-icon-search" placeholder="输入手机号码搜索"
          clearable @keyup.enter.native="handleFilter" />
      </el-col>
      <el-col :sm="4">
        <el-input v-model="listQuery.nickname" size="medium" prefix-icon="el-icon-search" placeholder="输入用户昵称搜索"
          clearable @keyup.enter.native="handleFilter" />
      </el-col>
      <el-col :sm="3">
        <el-select v-model="listQuery.status" placeholder="提现状态" size="medium" clearable>
          <el-option v-for="item in statusOptions" :key="item.key" :label="item.name" :value="item.key" />
        </el-select>
      </el-col>
      <el-col :sm="6">
        <el-date-picker v-model="listQuery.date_range" type="daterange" align="right" size="medium" unlink-panels
          range-separator="-" start-placeholder="提交开始日期" end-placeholder="提交结束日期" :picker-options="pickerOptions"
          value-format="yyyy-MM-dd" format="yyyy年 MM月 dd日" style="width: 100%;" />
      </el-col>
      <el-col :sm="7">
        <el-button v-waves type="primary" icon="el-icon-search" size="medium" @click="handleFilter">
          搜索
        </el-button>
      </el-col>
    </el-row>
    <div class="table-container">
      <el-table v-loading="listLoading" :data="list" border fit highlight-current-row size="mini" style="font-size: 14px;">
        <el-table-column label="手机号码" width="150">
          <template slot-scope="{row}">
            <span class="link-type" @click="handleView(row.user_id)">{{ row.mobile }}</span>
          </template>
        </el-table-column>

        <el-table-column label="昵称" width="120">
          <template slot-scope="{row}">
            <span>{{ row.nickname }}</span>
          </template>
        </el-table-column>

        <el-table-column label="提现金额" width="120">
          <template slot-scope="{row}">
            <span>{{ row.money }}</span>
          </template>
        </el-table-column>

        <el-table-column label="申请时间" width="160">
          <template slot-scope="{row}">
            <span>{{ row.created_at }}</span>
          </template>
        </el-table-column>

        <el-table-column label="审核状态" width="120">
          <template slot-scope="{row}">
            <el-tag v-if="row.status == 1" type="warning" size="small"><span>待审核</span></el-tag>
            <el-tag v-else-if="row.status == 2" type="success" size="small"><span>已提现</span></el-tag>
            <el-tag v-else-if="row.status == 3" type="danger" size="small"><span>审核失败</span></el-tag>
          </template>
        </el-table-column>

        <el-table-column label="操作" fixed="right" min-width="180" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button v-if="row.status == 1" v-waves size="mini" type="success"
              @click="handleChangeStatus(row,2)">
              通过
            </el-button>
            <el-button v-if="row.status == 1" v-waves size="mini" type="warning"
              @click="handleChangeStatus(row,3)">
              驳回
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <user-info :user-id="userId" :info-visible.sync="infoVisible" />

  </div>
</template>

<script>
  import {
    pusherCashIndex,
    pusherCashAudit
  } from '@/api/account'
  import waves from '@/directive/waves' // waves directive
  import permission from '@/directive/permission'
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination
  import UserInfo from '@/components/User/UserInfo'

  export default {
    components: {
      Pagination,
      UserInfo
    },
    directives: {
      waves,
      permission
    },
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        statusOptions: [{
            name: '待审核',
            key: 1
          },
          {
            name: '审核通过',
            key: 2
          },
          {
            name: '审核被驳回',
            key: 3
          }
        ],
        dialogVisible: false,
        dialogStatus: '',
        textMap: {
          update: '修改密码',
          create: '新增用户'
        },
        list: [],
        total: 0,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10,
          sort: '-id'
        },
        infoVisible: false,
        temp: {},
        userId: 0
      }
    },
    created() {
      this.getList()
    },

    methods: {
      handlePreview(row) {
        this.temp = row
        this.dialogVisible = true
      },
      getList() {
        this.listLoading = true
        pusherCashIndex(this.listQuery).then(response => {
          this.list = response.data.list
          this.total = response.data.total
          this.listLoading = false
        })
      },

      handleFilter() {
        this.listQuery.page = 1
        this.getList()
      },

      handleView(id) {
        this.userId = id
        this.infoVisible = true
      },

      confirmDeny(row) {
        this.$prompt('请填写驳回审核原因', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({
          value
        }) => {
          this.handleChangeStatus(row, 3, value)
        })
      },

      handleChangeStatus(row, status, msg = '') {
        var message = status === 2 ? '通过提现申请成功' : '驳回提现申请成功'
        pusherCashAudit({
          id: row.id,
          status: status,
          msg: msg
        }).then(response => {
          this.dialogVisible = false
          this.$notify({
            title: '成功',
            message: message,
            type: 'success',
            duration: 2000
          })
          this.getList()
        })
      }
    }
  }
</script>

<style lang="scss">
  .idcard-pic {
    height: 400px;
    width: 350px;
    margin: auto;
  }
  .preview-container{
    p{
      line-height: 30px;
      font-size: 16px;
    }
  }
</style>
