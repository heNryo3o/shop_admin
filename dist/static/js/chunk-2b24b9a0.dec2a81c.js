(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b24b9a0"],{"1d49":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{padding:"30px"}},[e("div",{staticStyle:{"font-size":"17px","font-weight":"600","margin-bottom":"20px"}},[t._v("\n    首页banner图\n  ")]),t._v(" "),e("el-upload",{attrs:{action:t.uploadUrl,"list-type":"picture-card","on-preview":t.handlePictureCardPreview,"file-list":t.banners,"on-remove":t.handleRemove,"on-success":t.handleAttachSuccess}},[e("i",{staticClass:"el-icon-plus"})]),t._v(" "),e("el-dialog",{attrs:{visible:t.dialogVisible,modal:!1},on:{"update:visible":function(n){t.dialogVisible=n}}},[e("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})]),t._v(" "),e("div",{staticStyle:{"font-size":"17px","font-weight":"600","margin-bottom":"20px","margin-top":"30px"}},[t._v("\n    首页广告图\n  ")]),t._v(" "),e("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":t.handleUploadSuccess},model:{value:t.info.ad_pic,callback:function(n){t.$set(t.info,"ad_pic",n)},expression:"info.ad_pic"}},[t.info.ad_pic?e("img",{staticClass:"avatar",attrs:{src:t.info.ad_pic}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),e("div",{staticStyle:{"margin-top":"40px","text-align":"center"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.handleSave()}}},[t._v("保存")])],1)],1)},a=[],s=(e("7f7f"),e("8593")),o={data:function(){return{dialogImageUrl:"",dialogVisible:!1,uploadUrl:"http://b.dxs.wiki/api/admin/system/upload",info:{banners:[],ad_pic:""},banners:[]}},created:function(){this.getSetting()},methods:{getSetting:function(){var t=this;Object(s["b"])().then((function(n){t.info=n.data,t.banners=t.info.banners}))},handleRemove:function(t,n){this.fileChange(n)},handleAttachSuccess:function(t,n,e){this.fileChange(e)},fileChange:function(t){var n=[];if(t.length>0)for(var e=0;e<t.length;e++)console.log(t[e]),n[e]={name:t[e].name,url:t[e].response?t[e].response.data.preview_url:t[e].url};this.info.banners=n},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleUploadSuccess:function(t){this.info.ad_pic=t.data.preview_url},handleSave:function(){var t=this;Object(s["c"])({banners:this.info.banners,ad_pic:this.info.ad_pic}).then((function(n){t.$notify({title:"首页banner信息保存成功",message:"成功",type:"success",duration:2e3})}))}}},r=o,l=(e("8328"),e("2877")),c=Object(l["a"])(r,i,a,!1,null,null,null);n["default"]=c.exports},"7c88":function(t,n,e){},8328:function(t,n,e){"use strict";var i=e("7c88"),a=e.n(i);a.a},8593:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return o}));var i=e("b775");function a(t){return Object(i["a"])({url:"/upload/index",method:"get",params:t})}function s(){return Object(i["a"])({url:"/system/info",method:"get"})}function o(t){return Object(i["a"])({url:"/system/save-banner",method:"post",data:t})}}}]);