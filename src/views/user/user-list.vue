<template>
  <div class="app-container">
    <el-row class="filter-container" :gutter="10">
      <el-col :sm="4">
        <el-input v-model="listQuery.mobile" size="small" prefix-icon="el-icon-search" placeholder="输入手机号码搜索" clearable
          @keyup.enter.native="handleFilter" />
      </el-col>
      <el-col :sm="4">
        <el-input v-model="listQuery.nickname" size="small" prefix-icon="el-icon-search" placeholder="输入昵称搜索" clearable
          @keyup.enter.native="handleFilter" />
      </el-col>
      <el-col :sm="3">
        <el-select v-model="listQuery.is_pusher" placeholder="是否成为推手" size="small" clearable>
          <el-option v-for="item in pusherOptions" :key="item.key" :label="item.name" :value="item.key" />
        </el-select>
      </el-col>
      <el-col :sm="6">
        <el-date-picker v-model="listQuery.date_range" type="daterange" align="right" size="small" unlink-panels
          range-separator="-" start-placeholder="注册开始日期" end-placeholder="注册结束日期" :picker-options="pickerOptions"
          value-format="yyyy-MM-dd" format="yyyy年 MM月 dd日" style="width: 100%;" />
      </el-col>
      <el-col :sm="5">
        <el-button v-waves type="primary" icon="el-icon-search" size="small" @click="handleFilter">
          搜索
        </el-button>
      </el-col>
    </el-row>
    <div class="table-container">
      <el-table v-loading="listLoading" :data="list" border fit highlight-current-row size="mini" style="font-size: 14px;">
        <el-table-column label="用户编号" width="150">
          <template slot-scope="{row}">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column label="手机号码" width="150">
          <template slot-scope="{row}">
            <span class="link-type" @click="handleView(row.id)">{{ row.mobile }}</span>
          </template>
        </el-table-column>

        <el-table-column label="昵称" width="150">
          <template slot-scope="{row}">
            <span>{{ row.nickname }}</span>
          </template>
        </el-table-column>

        <el-table-column label="账户余额" width="150">
          <template slot-scope="{row}">
            <span>{{ row.remain_money }}</span>
          </template>
        </el-table-column>

        <el-table-column label="注册时间" width="180">
          <template slot-scope="{row}">
            <span>{{ row.created_at }}</span>
          </template>
        </el-table-column>

        <el-table-column label="是否是推手" width="120">
          <template slot-scope="{row}">
            <span>{{ row.is_pusher == 1 ? '已成为推手' : '不是推手' }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作" fixed="right" min-width="230" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button v-waves v-permission="['role/edit-role']" type="primary" size="mini" @click="handleView(row)">
              查看
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
    getList,
    changeStatus,
    edit
  } from '@/api/member'
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
        pusherOptions: [{
            name: '是推手',
            key: 1
          },
          {
            name: '不是推手',
            key: 2
          }
        ],
        dialogFormVisible: false,
        dialogStatus: '',
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
      sortChange(data) {
        const {
          prop,
          order
        } = data
        if (order === 'ascending') {
          this.listQuery.sort = '+' + prop
        } else {
          this.listQuery.sort = '-' + prop
        }
        this.handleFilter()
      },
      getList() {
        this.listLoading = true
        getList(this.listQuery).then(response => {
          this.list = response.data.list
          this.total = response.data.total
          this.listLoading = false
        })
      },

      handleFilter() {
        this.listQuery.page = 1
        this.getList()
      },

      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {

        })
      },

      handleView(id) {
        this.userId = id
        this.infoVisible = true
      },

      handleUpdate(row) {
        this.temp = {
          id: row.id,
          nickname: row.nickname,
          mobile: row.mobile,
          password: '',
          status: row.status === 1 ? '1' : '2',
          prefer: row.prefer
        }
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {

        })
      },

      updateData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            edit(this.temp).then(response => {
              this.getList()
              this.dialogFormVisible = false
              this.$notify({
                title: '成功',
                message: '保存用户信息成功',
                type: 'success',
                duration: 2000
              })
            })
          }
        })
      },

      resetTemp() {
        this.temp = {
          id: 0,
          status: '1',
          password: '',
          nickname: '',
          mobile: '',
          prefer: 3
        }
      },

      handleChangeStatus(row, status) {
        var message = status === 1 ? '用户启用成功' : '用户禁用成功'
        changeStatus({
          id: row.id,
          status: status
        }).then(response => {
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

</style>
