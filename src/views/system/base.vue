<template>
  <div style="padding: 30px;">
    <div style="font-size: 17px;font-weight: 600;margin-bottom: 20px;">
      平台抽成比例（%）
    </div>
    <el-input v-model="info.rate" style="width: 200px;margin-bottom: 20px;"></el-input>

    <div style="font-size: 17px;font-weight: 600;margin-bottom: 20px;">
      推手提现客服微信
    </div>
    <el-input v-model="info.kefu" style="width: 200px;margin-bottom: 20px;"></el-input>

    <div style="font-size: 17px;font-weight: 600;margin-bottom: 20px;">
      首页banner图
    </div>
    <el-upload :action="uploadUrl" list-type="picture-card" :on-preview="handlePictureCardPreview" :file-list="banners"
      :on-remove="handleRemove" :on-success="handleAttachSuccess">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" :modal="false">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <div style="font-size: 17px;font-weight: 600;margin-bottom: 20px;margin-top: 20px;">
      首页广告图
    </div>
    <el-upload class="avatar-uploader" v-model="info.ad_pic" :action="uploadUrl" :show-file-list="false" :on-success="handleUploadSuccess">
      <img v-if="info.ad_pic" :src="info.ad_pic" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon" />
    </el-upload>
    <div style="font-size: 17px;font-weight: 600;margin-top: 20px;">
      充值金额设定
    </div>
    <el-form ref="postForm" :model="info" class="form-container">
    <el-row>
      <div style="margin-top: 30px;margin-bottom: 20px;">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <el-button v-waves size="mini" type="success" @click="handleAddSku">
              添加新档位
            </el-button>
          </div>
          <div v-for="(item,index) in info.deposits" :key="index">
            <div style="margin-bottom: 10px;">
              <span style="font-size: 17px;font-weight: 600;">档位{{index+1}}</span>
              <el-button v-waves size="mini" type="danger" style="margin-left: 20px;" @click="handleDelSku(index)">
                删除档位
              </el-button>
            </div>
            <el-form-item label="充值金额：" label-width="100px">
              <el-input v-model="item.deposit_money" placeholder="请填写充值金额" style="width: 300px;" />
            </el-form-item>
            <el-form-item label="赠送金额：" label-width="100px">
              <el-input v-model="item.give_money" placeholder="请填写赠送金额" style="width: 300px;" />
            </el-form-item>
          </div>
        </el-card>
      </div>
    </el-row>
    </el-form>
    <div style="margin-top: 40px;text-align: center;">
      <el-button @click="handleSave()" type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
  import waves from '@/directive/waves' // waves directive
  import permission from '@/directive/permission' // permission directive
  import {
    getInfo,
    saveBanner
  } from '@/api/system'
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        uploadUrl: process.env.VUE_APP_BASE_API + '/system/upload',
        info: {
          banners: [],
          ad_pic: ''
        },
        banners: []
      }
    },
    directives: {
      waves,
      permission
    },
    created() {
      this.getSetting()
    },
    methods: {
      handleDelSku(index) {
        this.info.deposits.splice(index, 1)
      },
      handleAddSku() {
        this.info.deposits.push({
          deposit_money: '',
          give_money: ''
        })
      },
      getSetting() {
        getInfo().then(response => {
          this.info = response.data
          this.banners = this.info.banners
        })
      },
      handleRemove(file, fileList) {
        this.fileChange(fileList)
      },
      handleAttachSuccess(response, file, fileList) {
        this.fileChange(fileList)
      },
      fileChange(fileList) {
        const attaches = []
        if (fileList.length > 0) {
          for (let i = 0; i < fileList.length; i++) {
            console.log(fileList[i])
            attaches[i] = {
              name: fileList[i].name,
              url: fileList[i].response ? fileList[i].response.data.preview_url : fileList[i].url
            }
          }
        }
        this.info.banners = attaches
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      handleUploadSuccess(res) {
        this.info.ad_pic = res.data.preview_url
      },
      handleSave() {
        saveBanner({
          banners: this.info.banners,
          ad_pic: this.info.ad_pic,
          rate: this.info.rate,
          kefu: this.info.kefu,
          deposits: this.info.deposits
        }).then(response => {
          this.$notify({
            title: '保存成功',
            message: '成功',
            type: 'success',
            duration: 2000
          })
        })
      }
    }
  }
</script>

<style>
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
