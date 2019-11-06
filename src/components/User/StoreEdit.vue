<template>
  <div>
    <el-drawer title="店铺信息" size="65%" :visible.sync="infoVisible" :before-close="handleClose" @open="handleOpen">
      <el-card class="box-card user-wrapper">
        <div>
          <el-card class="box-card mb-30" shadow="hover">
            <div slot="header" class="clearfix">
              <span style="font-weight: bold;">基本信息</span>
            </div>
            <el-form ref="form" :model="form" label-width="140px" :rules="rules">
              <el-row>
                <el-col :sm="12">
                  <el-form-item label="商家名称：" prop="name">
                    <el-input v-model="form.name" placeholder="请填写商家名称" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :sm="15">
                  <el-form-item label="行业选择：" prop="category">
                    <el-cascader v-model="form.category" :options="categoryOptions" style="width: 360px;" placeholder="请选择行业" class="full-width" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :sm="12">
                  <el-form-item label="店铺logo：" prop="logo">
                    <el-upload v-model="form.logo" class="avatar-uploader" :action="uploadUrl" :headers="uploadHeaders"
                      :show-file-list="false" :on-success="handleUploadLogoSuccess" :before-upload="beforeUpload">
                      <img v-if="form.logo" :src="form.logo" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon" />
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col :sm="12">
                  <el-form-item label="店铺封面图：" prop="thumb">
                    <el-upload v-model="form.thumb" class="avatar-uploader" :action="uploadUrl" :headers="uploadHeaders"
                      :show-file-list="false" :on-success="handleUploadThumbSuccess" :before-upload="beforeUpload">
                      <img v-if="form.thumb" :src="form.thumb" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon" />
                    </el-upload>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row v-if="form.is_online == 2">
                <el-col :sm="12">
                  <el-form-item label="所属商圈：" prop="shangquan">
                    <el-input v-model="form.shangquan" placeholder="请填写所属商圈" />
                  </el-form-item>
                </el-col>
                <el-col :sm="12">
                  <el-form-item label="人均消费(元)：" prop="average_cost">
                    <el-input v-model="form.average_cost" placeholder="请填写人均消费金额" />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row v-if="form.is_online == 2">
                <el-col :sm="12">
                  <el-form-item label="营业时间：" prop="open_time">
                    <el-input v-model="form.open_time" placeholder="请填写营业时间,如 9:00AM - 8:30PM" />
                  </el-form-item>
                </el-col>
                <el-col :sm="12">
                  <el-form-item label="店内福利：" prop="fuli">
                    <el-checkbox-group v-model="form.fuli">
                      <el-checkbox v-for="item in fuliOptions" :label="item" :key="item">{{item}}</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :offset="9" :sm="2">
                  <el-form-item style="text-align: center;">
                    <el-button type="primary" @click="submit">保存</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-card>
        </div>
      </el-card>
    </el-drawer>
  </div>
</template>

<script>
  import areaOptions from '@/assets/area.json'
  import {
    getInfo,
    edit
  } from '@/api/store'
  import {
    getParentOptions
  } from '@/api/category.js'
  export default {
    name: 'StoreEdit',
    props: [
      'infoVisible', 'storeId'
    ],
    data() {
      return {
        areaOptions: areaOptions,
        categoryOptions: [],
        fuliOptions: ['免费wifi', '免费停车'],
        form: {},
        uploadUrl: process.env.VUE_APP_BASE_API + '/system/upload',
        uploadHeaders: {},
        rules: {
          name: [{
            required: true,
            message: '请填写商家名称',
            trigger: 'blur'
          }],
          logo: [{
            required: true,
            message: '请上传店铺logo',
            trigger: 'blur'
          }],
          thumb: [{
            required: true,
            message: '请上传店铺封面图',
            trigger: 'blur'
          }],
          shangquan: [{
            required: true,
            message: '请填写所属商圈',
            trigger: 'blur'
          }],
          average_cost: [{
            required: true,
            message: '请填写人均消费金额',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      handleClose() {
        this.$emit('update:infoVisible', false)
      },
      getCategory(is_online) {
        getParentOptions({
          is_online: is_online
        }).then(response => {
          this.categoryOptions = response.data.options
        })
      },
      handleOpen() {
        this.getInfo()
      },
      handleUploadThumbSuccess(res) {
        this.form.thumb = res.data.preview_url
      },
      handleUploadLogoSuccess(res) {
        this.form.logo = res.data.preview_url
      },
      beforeUpload() {

      },
      handlePreview(url) {
        this.previewImageUrl = url
        this.previewVisible = true
      },
      submit() {
        this.$refs['form'].validate((valid) => {
          console.log(valid)
          if (valid) {
            edit(this.form).then(response => {
              this.$notify({
                title: '保存成功',
                message: '成功',
                type: 'success',
                duration: 2000
              })
              this.$emit('getList')
              this.$emit('update:infoVisible', false)
            })
          } else {
            this.$message({
              message: '请先填写必填项，再进行提交',
              type: 'error'
            })
          }
        })
      },
      getInfo() {
        getInfo({
          id: this.storeId
        }).then(response => {
          this.form = response.data
          this.getCategory(response.data.is_online)
        })
      }
    }
  }
</script>

<style>
  .user-wrapper {
    width: 94%;
    margin: auto;
    font-size: 15px;
  }

  .id-card-image {
    height: 160px;
  }

  .licence-image {
    height: 240px;
  }

  .service-table-expand {
    font-size: 0;
  }

  .service-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .service-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .el-drawer__body {
    overflow-y: scroll;
  }

  .info-col {
    margin-bottom: 20px;
  }

  .form-card {
    width: 80%;
    margin: auto;
    margin-top: 40px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
