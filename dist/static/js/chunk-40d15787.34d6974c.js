(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40d15787"],{"1c64":function(e,t,n){},"1cc6":function(e,t,n){"use strict";var i=n("1c64"),a=n.n(i);a.a},"333d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},a=[];n("c5f6");Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,n){var i=o(),a=e-i,l=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=l;var o=Math.easeInOutQuad(u,i,a,t);s(o),u<t?r(e):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(n("1cc6"),n("2877")),p=Object(d["a"])(c,i,a,!1,null,"f3b72548",null);t["a"]=p.exports},3476:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-row",{staticClass:"filter-container",attrs:{gutter:10}},[n("el-col",{attrs:{sm:4}},[n("el-input",{attrs:{size:"small","prefix-icon":"el-icon-search",placeholder:"输入昵称搜索",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.mobile,callback:function(t){e.$set(e.listQuery,"mobile",t)},expression:"listQuery.mobile"}})],1),e._v(" "),n("el-col",{attrs:{sm:3}},[n("el-select",{attrs:{placeholder:"用户状态",size:"small",clearable:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e){return n("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),e._v(" "),n("el-col",{attrs:{sm:6}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"-","start-placeholder":"注册开始日期","end-placeholder":"注册结束日期","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd",format:"yyyy年 MM月 dd日"},model:{value:e.listQuery.date_range,callback:function(t){e.$set(e.listQuery,"date_range",t)},expression:"listQuery.date_range"}})],1),e._v(" "),n("el-col",{attrs:{sm:5}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:e.handleFilter}},[e._v("\n        搜索\n      ")])],1)],1),e._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{"font-size":"14px"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":"",size:"mini"}},[n("el-table-column",{attrs:{label:"用户编号",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",{staticClass:"link-type",on:{click:function(t){return e.handleView(i.id)}}},[e._v(e._s(i.id))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"昵称",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.nickname))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"注册时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.created_at))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"是否是推手",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(1==i.is_pusher?"已成为推手":"不是推手"))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"用户状态",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("el-tag",{attrs:{type:1==i.status?"":"danger",size:"small"}},[n("span",[e._v(e._s(1==i.status?"正常":"禁止登录"))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:["role/edit-role"],expression:"['role/edit-role']"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v("\n            编辑\n          ")]),e._v(" "),1==i.status?n("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:["role/change-status"],expression:"['role/change-status']"}],attrs:{size:"mini",type:"warning"},on:{click:function(t){return e.handleChangeStatus(i,2)}}},[e._v("\n            禁用\n          ")]):n("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:["role/change-status"],expression:"['role/change-status']"}],attrs:{size:"mini",type:"success"},on:{click:function(t){return e.handleChangeStatus(i,1)}}},[e._v("\n            启用\n          ")])]}}])})],1)],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),n("user-info",{attrs:{"user-id":e.userId,"info-visible":e.infoVisible},on:{"update:infoVisible":function(t){e.infoVisible=t},"update:info-visible":function(t){e.infoVisible=t}}}),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],width:"700px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"550px","margin-left":"50px"},attrs:{model:e.temp,"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"手机号码"}},[n("el-input",{attrs:{placeholder:"请填写用户手机号码",disabled:e.temp.id>0},model:{value:e.temp.mobile,callback:function(t){e.$set(e.temp,"mobile",t)},expression:"temp.mobile"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"用户姓名"}},[n("el-input",{attrs:{placeholder:"请填写用户姓名"},model:{value:e.temp.nickname,callback:function(t){e.$set(e.temp,"nickname",t)},expression:"temp.nickname"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"注册倾向"}},e._l(e.preferOptions,function(t){return n("el-radio",{key:t.name,attrs:{label:t.key,border:"",size:"medium"},model:{value:e.temp.prefer,callback:function(t){e.$set(e.temp,"prefer",t)},expression:"temp.prefer"}},[e._v(e._s(t.name))])}),1),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("div",[n("el-radio",{attrs:{label:"1",border:"",size:"medium"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},[e._v("正常")]),e._v(" "),n("el-radio",{attrs:{label:"2",border:"",size:"medium"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},[e._v("禁止登录")])],1)]),e._v(" "),n("el-form-item",{attrs:{label:"登录密码"}},[n("el-input",{attrs:{placeholder:"不需要帮助用户修改密码时请勿填写"},model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer",align:"center"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateData()}}},[e._v("\n        确认\n      ")])],1)],1)],1)},a=[],r=n("8194"),s=n("6724"),o=n("4381"),l=n("333d"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-drawer",{attrs:{title:"用户详细信息",size:"65%",visible:e.infoVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.infoVisible=t},open:e.handleOpen}},[n("span",[e._v("我来啦!")])])],1)},c=[],d={name:"UserInfo",props:["infoVisible","userId"],data:function(){return{info:{}}},methods:{handleClose:function(){this.$emit("update:infoVisible",!1)},handleOpen:function(){this.getInfo()},getInfo:function(){var e=this;Object(r["c"])({id:this.userId}).then(function(t){e.info=t.data})}}},p=d,f=n("2877"),m=Object(f["a"])(p,u,c,!1,null,null,null),v=m.exports,h={components:{Pagination:l["a"],UserInfo:v},directives:{waves:s["a"],permission:o["a"]},data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}}]},statusOptions:[{name:"正常",key:1},{name:"禁止登录",key:2}],vipOptions:[{name:"普通用户",key:0},{name:"基础店",key:1},{name:"黄金店",key:2},{name:"钻石店",key:3},{name:"皇冠店",key:4}],preferOptions:[{name:"解决方",key:1},{name:"需求方",key:2},{name:"未确认",key:3}],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"修改密码",create:"新增用户"},list:[],total:0,listLoading:!0,listQuery:{page:1,limit:10,sort:"-id"},infoVisible:!1,temp:{},userId:0}},created:function(){this.getList()},methods:{sortChange:function(e){var t=e.prop,n=e.order;this.listQuery.sort="ascending"===n?"+"+t:"-"+t,this.handleFilter()},getList:function(){var e=this;this.listLoading=!0,Object(r["d"])(this.listQuery).then(function(t){e.list=t.data.list,e.total=t.data.total,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){})},handleView:function(e){this.userId=e,this.infoVisible=!0},handleUpdate:function(e){this.temp={id:e.id,nickname:e.nickname,mobile:e.mobile,password:"",status:1===e.status?"1":"2",prefer:e.prefer},this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){})},updateData:function(){var e=this;this.$refs["dataForm"].validate(function(t){t&&Object(r["b"])(e.temp).then(function(t){e.getList(),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"保存用户信息成功",type:"success",duration:2e3})})})},resetTemp:function(){this.temp={id:0,status:"1",password:"",nickname:"",mobile:"",prefer:3}},handleChangeStatus:function(e,t){var n=this,i=1===t?"用户启用成功":"用户禁用成功";Object(r["a"])({id:e.id,status:t}).then(function(e){n.$notify({title:"成功",message:i,type:"success",duration:2e3}),n.getList()})}}},g=h,b=Object(f["a"])(g,i,a,!1,null,null,null);t["default"]=b.exports},4381:function(e,t,n){"use strict";n("6762"),n("2fdb");var i=n("4360"),a={inserted:function(e,t,n){var a=t.value,r=i["a"].getters&&i["a"].getters.roles;if(!(a&&a instanceof Array&&a.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var s=a,o=r.some(function(e){return!!r.includes("super_admin")||s.includes(e)});o||e.parentNode&&e.parentNode.removeChild(e)}},r=function(e){e.directive("permission",a)};window.Vue&&(window["permission"]=a,Vue.use(r)),a.install=r;t["a"]=a},"5dbc":function(e,t,n){var i=n("d3f4"),a=n("8b97").set;e.exports=function(e,t,n){var r,s=t.constructor;return s!==n&&"function"==typeof s&&(r=s.prototype)!==n.prototype&&i(r)&&a&&a(e,r),e}},6724:function(e,t,n){"use strict";n("8d41");var i="@@wavesContext";function a(e,t){function n(n){var i=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),r=a.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",r.appendChild(o)),a.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(n.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(n.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=a.color,o.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=n:e[i]={removeHandle:n},n}var r={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},s=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(s)),r.install=s;t["a"]=r},8194:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return l}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return c});var i=n("b775"),a="/user";function r(e){return Object(i["a"])({url:a+"/index",method:"get",params:e})}function s(e){return Object(i["a"])({url:a+"/edit",method:"post",data:e})}function o(e){return Object(i["a"])({url:a+"/change-status",method:"post",data:e})}function l(e){return Object(i["a"])({url:a+"/info",method:"get",params:e})}function u(e){return Object(i["a"])({url:a+"/pushers",method:"get",params:e})}function c(e){return Object(i["a"])({url:a+"/pusher-add",method:"post",data:e})}},"8b97":function(e,t,n){var i=n("d3f4"),a=n("cb7c"),r=function(e,t){if(a(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,n){return r(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:r}},"8d41":function(e,t,n){},aa77:function(e,t,n){var i=n("5ca1"),a=n("be13"),r=n("79e5"),s=n("fdef"),o="["+s+"]",l="​",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(e,t,n){var a={},o=r(function(){return!!s[e]()||l[e]()!=l}),u=a[e]=o?t(p):s[e];n&&(a[n]=u),i(i.P+i.F*o,"String",a)},p=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},c5f6:function(e,t,n){"use strict";var i=n("7726"),a=n("69a8"),r=n("2d95"),s=n("5dbc"),o=n("6a99"),l=n("79e5"),u=n("9093").f,c=n("11e9").f,d=n("86cc").f,p=n("aa77").trim,f="Number",m=i[f],v=m,h=m.prototype,g=r(n("2aeb")(h))==f,b="trim"in String.prototype,y=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():p(t,3);var n,i,a,r=t.charCodeAt(0);if(43===r||45===r){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+t}for(var s,l=t.slice(2),u=0,c=l.length;u<c;u++)if(s=l.charCodeAt(u),s<48||s>a)return NaN;return parseInt(l,i)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(g?l(function(){h.valueOf.call(n)}):r(n)!=f)?s(new v(y(t)),n,m):y(t)};for(var w,_=n("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;_.length>k;k++)a(v,w=_[k])&&!a(m,w)&&d(m,w,c(v,w));m.prototype=h,h.constructor=m,n("2aba")(i,f,m)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);