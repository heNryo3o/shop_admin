<template>
  <div class="app-container">
    <el-row class="filter-container" :gutter="10">
      <el-col :sm="4">
        <el-input v-model="listQuery.mobile" size="small" prefix-icon="el-icon-search" placeholder="输入手机号码搜索" clearable
          @keyup.enter.native="handleFilter" />
      </el-col>
      <el-col :sm="3">
        <el-select v-model="listQuery.status" placeholder="状态" size="small" clearable>
          <el-option v-for="item in statusOptions" :key="item.key" :label="item.name" :value="item.key" />
        </el-select>
      </el-col>
      <el-col :sm="6">
        <el-date-picker v-model="listQuery.date_range" type="daterange" align="right" size="small" unlink-panels
          range-separator="-" start-placeholder="申请开始日期" end-placeholder="申请结束日期" :picker-options="pickerOptions"
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
        <el-table-column label="编号" width="100">
          <template slot-scope="{row}">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column label="商家名称" width="130">
          <template slot-scope="{row}">
            <span>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号码" width="150">
          <template slot-scope="{row}">
            <span class="link-type" @click="handleViewStore(row.id)">{{ row.mobile }}</span>
          </template>
        </el-table-column>

        <el-table-column label="分类" width="120">
          <template slot-scope="{row}">
            <span>{{ row.category_name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="地区" width="200">
          <template slot-scope="{row}">
            <span>{{ row.area_name }} {{row.address}}</span>
          </template>
        </el-table-column>

        <el-table-column label="状态" width="120">
          <template slot-scope="{row}">
            <el-tag size="small"><span>{{ row.state }}</span></el-tag>
          </template>
        </el-table-column>

        <el-table-column label="申请时间" width="180">
          <template slot-scope="{row}">
            <span>{{ row.created_at }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作" fixed="right" min-width="280" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button v-waves v-permission="['role/edit-role']" type="primary" size="mini" @click="handleViewStore(row.id)">
              查看
            </el-button>
            <el-button v-waves v-permission="['role/edit-role']" type="warning" size="mini" @click="handleEditStore(row.id)">
              编辑
            </el-button>
            <el-button v-waves type="success" size="mini" @click="dealAudit(row)">
              审核信息
            </el-button>
            <el-button v-if="row.status == 4" v-waves v-permission="['role/change-status']" size="mini" type="warning"
              @click="handleChangeStatus(row,5)">
              禁用
            </el-button>
            <el-button v-else-if="row.status == 5" v-waves v-permission="['role/change-status']" size="mini" type="success"
              @click="handleChangeStatus(row,4)">
              启用
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <store-info :store-id="storeId" :info-visible.sync="storeInfoVisible" />

    <store-edit :store-id="storeId" :info-visible.sync="storeEditVisible" @getList="getList()" />

    <el-dialog title="审核信息" width="950px" :visible.sync="storeAuditVisible">
      <div class="preview-container">
        <div class="licence-pic" style="margin-bottom: 20px;">
          <el-image :src="temp.licence" fit="contain" style="width: 250px;max-height: 500px;margin-left: 20px;" />
          <el-image :src="temp.id_card" fit="contain" style="width: 250px;max-height: 500px;margin-left: 20px;" />
          <el-image :src="temp.id_card_back" fit="contain" style="width: 250px;max-height: 500px;" />
        </div>
        <p>
          商家名称: {{ temp.name }}
        </p>
        <p>
          手机号码: {{ temp.mobile }}
        </p>
        <p>
          地区: {{ temp.area_name }} {{temp.address}}
        </p>
        <p>
          行业: {{ temp.category_name }}
        </p>
        <p>
          银行卡号: {{ temp.bank_card }}
        </p>
      </div>

      <div slot="footer" class="dialog-footer" align="center">
        <el-button size="small" @click="storeAuditVisible = false">
          取消
        </el-button>
        <el-button v-if="temp.status == 1" type="success" size="small" @click="handleChangeStatus(temp,2)">
          通过审核
        </el-button>
        <el-button v-if="temp.status == 1" type="danger" size="small" @click="handleChangeStatus(temp,3)">
          驳回审核
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
    getList,
    changeStatus,
    edit
  } from '@/api/store'
  import waves from '@/directive/waves' // waves directive
  import permission from '@/directive/permission'
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination
  import StoreInfo from '@/components/User/StoreInfo'
  import StoreEdit from '@/components/User/StoreEdit'

  export default {
    components: {
      Pagination,
      StoreInfo,
      StoreEdit
    },
    directives: {
      waves,
      permission
    },
    data() {
      return {
        storeAuditId: 0,
        storeAuditVisible: false,
        storeInfoVisible: false,
        storeId: 0,
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
            name: '待完善信息',
            key: 2
          },
          {
            name: '审核未通过',
            key: 3
          },
          {
            name: '已完善信息',
            key: 4
          },
          {
            name: '已下架',
            key: 5
          }
        ],
        list: [],
        total: 0,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10,
          sort: '-id'
        },
        infoVisible: false,
        storeEditVisible: false,
        temp: {},
        userId: 0
      }
    },
    created() {
      this.getList()
    },

    methods: {
      handleEditStore(id) {
        this.storeId = id
        this.storeEditVisible = true
      },
      handleViewStore(id) {
        this.storeId = id
        this.storeInfoVisible = true
      },
      dealAudit(row) {
        this.temp = row
        this.storeAuditVisible = true
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
      handlePreview(row) {
        this.temp = row
        this.dialogVisible = true
      },
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
        var message = '修改成功'
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
          this.storeAuditVisible = false
          this.getList()
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
