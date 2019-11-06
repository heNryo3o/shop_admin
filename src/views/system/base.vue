<template>
  <div style="padding: 30px;">
    <el-form ref="postForm" :model="info" class="form-container">
      <div style="font-size: 17px;font-weight: 600;margin-bottom: 20px;">
        平台抽成比例（%）
      </div>
      <el-input v-model="info.rate" style="width: 200px;margin-bottom: 20px;"></el-input>

      <div style="font-size: 17px;font-weight: 600;margin-bottom: 20px;">
        推手提现客服微信
      </div>
      <el-input v-model="info.kefu" style="width: 200px;margin-bottom: 20px;"></el-input>

      <div style="font-size: 17px;font-weight: 600;margin-bottom: 20px;">
        首页banner图(宽高比3:1)
      </div>
      <el-row>
        <div style="margin-top: 10px;margin-bottom: 20px;">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <el-button v-waves size="mini" type="success" @click="handleAddBanner">
                添加banner
              </el-button>
            </div>
            <div v-for="(item,index) in info.banners" :key="index">
              <div style="margin-bottom: 10px;">
                <span style="font-size: 17px;font-weight: 600;">banner{{index+1}}</span>
                <el-button v-waves size="mini" type="danger" style="margin-left: 20px;" @click="handleDelBanner(index)">
                  删除banner
                </el-button>
              </div>
              <el-form-item label="跳转类型：" label-width="100px">
                <el-select v-model="item.type" placeholder="请选择">
                  <el-option key="1" label="线上商家" value="1"></el-option>
                  <el-option key="2" label="线下商家" value="2"></el-option>
                  <el-option key="3" label="线上商品" value="3"></el-option>
                  <el-option key="4" label="线下商品" value="4"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="编号：" label-width="100px">
                <el-input v-model="item.target_id" placeholder="请填写跳转编号" style="width: 300px;" />
              </el-form-item>
              <el-form-item label="上传图片：" label-width="100px" v-if="index == 0">
                <el-upload class="avatar-uploader" v-model="banner0" :action="uploadUrl" :show-file-list="false"
                  :on-success="handleUploadBannerSuccess0">
                  <img v-if="banner0" :src="banner0" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-form-item label="上传图片：" label-width="100px" v-if="index == 1">
                <el-upload class="avatar-uploader" v-model="banner1" :action="uploadUrl" :show-file-list="false"
                  :on-success="handleUploadBannerSuccess1">
                  <img v-if="banner1" :src="banner1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-form-item label="上传图片：" label-width="100px" v-if="index == 2">
                <el-upload class="avatar-uploader" v-model="banner2" :action="uploadUrl" :show-file-list="false"
                  :on-success="handleUploadBannerSuccess2">
                  <img v-if="banner2" :src="banner2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-form-item label="上传图片：" label-width="100px" v-if="index == 3">
                <el-upload class="avatar-uploader" v-model="banner3" :action="uploadUrl" :show-file-list="false"
                  :on-success="handleUploadBannerSuccess3">
                  <img v-if="banner3" :src="banner3" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-form-item label="上传图片：" label-width="100px" v-if="index == 4">
                <el-upload class="avatar-uploader" v-model="banner4" :action="uploadUrl" :show-file-list="false"
                  :on-success="handleUploadBannerSuccess4">
                  <img v-if="banner4" :src="banner4" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-form-item label="上传图片：" label-width="100px" v-if="index == 5">
                <el-upload class="avatar-uploader" v-model="banner5" :action="uploadUrl" :show-file-list="false"
                  :on-success="handleUploadBannerSuccess5">
                  <img v-if="banner5" :src="banner5" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
            </div>
          </el-card>
        </div>
      </el-row>
      <div style="font-size: 17px;font-weight: 600;margin-bottom: 20px;margin-top: 20px;">
        首页广告图(宽高比4:1)
      </div>
      <el-form-item label="跳转类型：" label-width="100px">
        <el-select v-model="info.ad_type" placeholder="请选择">
          <el-option key="1" label="线上商家" value="1"></el-option>
          <el-option key="2" label="线下商家" value="2"></el-option>
          <el-option key="3" label="线上商品" value="3"></el-option>
          <el-option key="4" label="线下商品" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="编号：" label-width="100px">
        <el-input v-model="info.ad_target_id" placeholder="请填写跳转编号" style="width: 300px;" />
      </el-form-item>
      <el-form-item label="上传图片：" label-width="100px">
        <el-upload class="avatar-uploader" v-model="info.ad_pic" :action="uploadUrl" :show-file-list="false" :on-success="handleUploadSuccess">
          <img v-if="info.ad_pic" :src="info.ad_pic" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <div style="font-size: 17px;font-weight: 600;margin-top: 20px;">
        充值金额设定
      </div>
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

      <div style="margin-top: 40px;text-align: center;">
        <el-button @click="handleSave()" type="primary">保存</el-button>
      </div>
    </el-form>
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
        banners: [],
        banner0: '',
        banner1: '',
        banner2: '',
        banner3: '',
        banner4: '',
        banner5: ''
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
      handleDelBanner(index) {
        this.info.banners.splice(index, 1)
      },
      handleAddSku() {
        this.info.deposits.push({
          deposit_money: '',
          give_money: ''
        })
      },
      handleAddBanner() {
        if (this.info.banners.length > 5) {
          this.$notify({
            title: '失败',
            message: '最多上传6个banner',
            type: 'failed',
            duration: 2000
          })
        } else {
          this.info.banners.push({
            pic: '',
            type: '',
            target_id: ''
          })
        }
      },
      getSetting() {
        getInfo().then(response => {
          this.info = response.data
          this.banners = this.info.banners
          this.banner0 = this.info.banners[0] ? this.info.banners[0].pic : ''
          this.banner1 = this.info.banners[1] ? this.info.banners[1].pic : ''
          this.banner2 = this.info.banners[2] ? this.info.banners[2].pic : ''
          this.banner3 = this.info.banners[3] ? this.info.banners[3].pic : ''
          this.banner4 = this.info.banners[4] ? this.info.banners[4].pic : ''
          this.banner5 = this.info.banners[5] ? this.info.banners[5].pic : ''
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
      handleUploadBannerSuccess0(res) {
        this.banner0 = res.data.preview_url
        this.info.banners[0].pic = res.data.preview_url
      },
      handleUploadBannerSuccess1(res) {
        this.banner1 = res.data.preview_url
        this.info.banners[1].pic = res.data.preview_url
      },
      handleUploadBannerSuccess2(res) {
        this.banner2 = res.data.preview_url
        this.info.banners[2].pic = res.data.preview_url
      },
      handleUploadBannerSuccess3(res) {
        this.banner3 = res.data.preview_url
        this.info.banners[3].pic = res.data.preview_url
      },
      handleUploadBannerSuccess4(res) {
        this.banner4 = res.data.preview_url
        this.info.banners[4].pic = res.data.preview_url
      },
      handleUploadBannerSuccess5(res) {
        this.banner5 = res.data.preview_url
        this.info.banners[5].pic = res.data.preview_url
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
          deposits: this.info.deposits,
          ad_target_id: this.info.ad_target_id,
          ad_type: this.info.ad_type
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
