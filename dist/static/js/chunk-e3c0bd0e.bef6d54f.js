(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3c0bd0e"],{"184b":function(e,t,n){},4381:function(e,t,n){"use strict";n("6762"),n("2fdb");var i=n("4360"),a={inserted:function(e,t,n){var a=t.value,o=i["a"].getters&&i["a"].getters.roles;if(!(a&&a instanceof Array&&a.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var s=a,l=o.some(function(e){return!!o.includes("super_admin")||s.includes(e)});l||e.parentNode&&e.parentNode.removeChild(e)}},o=function(e){e.directive("permission",a)};window.Vue&&(window["permission"]=a,Vue.use(o)),a.install=o;t["a"]=a},"5d62":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"30px"}},[n("div",{staticStyle:{"font-size":"17px","font-weight":"600","margin-bottom":"20px"}},[e._v("\n    平台抽成比例（%）\n  ")]),e._v(" "),n("el-input",{staticStyle:{width:"200px","margin-bottom":"20px"},model:{value:e.info.rate,callback:function(t){e.$set(e.info,"rate",t)},expression:"info.rate"}}),e._v(" "),n("div",{staticStyle:{"font-size":"17px","font-weight":"600","margin-bottom":"20px"}},[e._v("\n    推手提现客服微信\n  ")]),e._v(" "),n("el-input",{staticStyle:{width:"200px","margin-bottom":"20px"},model:{value:e.info.kefu,callback:function(t){e.$set(e.info,"kefu",t)},expression:"info.kefu"}}),e._v(" "),n("div",{staticStyle:{"font-size":"17px","font-weight":"600","margin-bottom":"20px"}},[e._v("\n    首页banner图\n  ")]),e._v(" "),n("el-upload",{attrs:{action:e.uploadUrl,"list-type":"picture-card","on-preview":e.handlePictureCardPreview,"file-list":e.banners,"on-remove":e.handleRemove,"on-success":e.handleAttachSuccess}},[n("i",{staticClass:"el-icon-plus"})]),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogVisible,modal:!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})]),e._v(" "),n("div",{staticStyle:{"font-size":"17px","font-weight":"600","margin-bottom":"20px","margin-top":"20px"}},[e._v("\n    首页广告图\n  ")]),e._v(" "),n("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,"on-success":e.handleUploadSuccess},model:{value:e.info.ad_pic,callback:function(t){e.$set(e.info,"ad_pic",t)},expression:"info.ad_pic"}},[e.info.ad_pic?n("img",{staticClass:"avatar",attrs:{src:e.info.ad_pic}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),n("div",{staticStyle:{"font-size":"17px","font-weight":"600","margin-top":"20px"}},[e._v("\n    充值金额设定\n  ")]),e._v(" "),n("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.info}},[n("el-row",[n("div",{staticStyle:{"margin-top":"30px","margin-bottom":"20px"}},[n("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"success"},on:{click:e.handleAddSku}},[e._v("\n            添加新档位\n          ")])],1),e._v(" "),e._l(e.info.deposits,function(t,i){return n("div",{key:i},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("span",{staticStyle:{"font-size":"17px","font-weight":"600"}},[e._v("档位"+e._s(i+1))]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{"margin-left":"20px"},attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelSku(i)}}},[e._v("\n              删除档位\n            ")])],1),e._v(" "),n("el-form-item",{attrs:{label:"充值金额：","label-width":"100px"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请填写充值金额"},model:{value:t.deposit_money,callback:function(n){e.$set(t,"deposit_money",n)},expression:"item.deposit_money"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"赠送金额：","label-width":"100px"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请填写赠送金额"},model:{value:t.give_money,callback:function(n){e.$set(t,"give_money",n)},expression:"item.give_money"}})],1)],1)})],2)],1)])],1),e._v(" "),n("div",{staticStyle:{"margin-top":"40px","text-align":"center"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSave()}}},[e._v("保存")])],1)],1)},a=[],o=(n("7f7f"),n("6724")),s=n("4381"),l=n("8593"),r={data:function(){return{dialogImageUrl:"",dialogVisible:!1,uploadUrl:"https://api.jiangsulezhong.com/admin/system/upload",info:{banners:[],ad_pic:""},banners:[]}},directives:{waves:o["a"],permission:s["a"]},created:function(){this.getSetting()},methods:{handleDelSku:function(e){this.info.deposits.splice(e,1)},handleAddSku:function(){this.info.deposits.push({deposit_money:"",give_money:""})},getSetting:function(){var e=this;Object(l["b"])().then(function(t){e.info=t.data,e.banners=e.info.banners})},handleRemove:function(e,t){this.fileChange(t)},handleAttachSuccess:function(e,t,n){this.fileChange(n)},fileChange:function(e){var t=[];if(e.length>0)for(var n=0;n<e.length;n++)console.log(e[n]),t[n]={name:e[n].name,url:e[n].response?e[n].response.data.preview_url:e[n].url};this.info.banners=t},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleUploadSuccess:function(e){this.info.ad_pic=e.data.preview_url},handleSave:function(){var e=this;Object(l["c"])({banners:this.info.banners,ad_pic:this.info.ad_pic,rate:this.info.rate,kefu:this.info.kefu,deposits:this.info.deposits}).then(function(t){e.$notify({title:"保存成功",message:"成功",type:"success",duration:2e3})})}}},c=r,d=(n("dee4"),n("2877")),u=Object(d["a"])(c,i,a,!1,null,null,null);t["default"]=u.exports},6724:function(e,t,n){"use strict";n("8d41");var i="@@wavesContext";function a(e,t){function n(n){var i=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),o=a.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var s=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",o.appendChild(l)),a.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(n.pageY-s.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(n.pageX-s.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=a.color,l.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=n:e[i]={removeHandle:n},n}var o={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},s=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(s)),o.install=s;t["a"]=o},8593:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return s});var i=n("b775");function a(e){return Object(i["a"])({url:"/upload/index",method:"get",params:e})}function o(){return Object(i["a"])({url:"/system/info",method:"get"})}function s(e){return Object(i["a"])({url:"/system/save-banner",method:"post",data:e})}},"8d41":function(e,t,n){},dee4:function(e,t,n){"use strict";var i=n("184b"),a=n.n(i);a.a}}]);