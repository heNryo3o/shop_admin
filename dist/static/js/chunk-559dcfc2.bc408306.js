(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-559dcfc2"],{"0feb":function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"d",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"f",function(){return c}),n.d(t,"g",function(){return p});var i=n("b775"),a="/permission";function r(e){return Object(i["a"])({url:a+"/index",method:"get",params:e})}function s(e){return Object(i["a"])({url:a+"/edit",method:"post",data:e})}function o(e){return Object(i["a"])({url:a+"/create",method:"post",data:e})}function l(e){return Object(i["a"])({url:a+"/change-status",method:"post",data:e})}function u(e){return Object(i["a"])({url:a+"/destroy",method:"post",data:e})}function c(){return Object(i["a"])({url:a+"/permission-options",method:"get"})}function p(){return Object(i["a"])({url:a+"/parent-options",method:"get"})}},"1c64":function(e,t,n){},"1cc6":function(e,t,n){"use strict";var i=n("1c64"),a=n.n(i);a.a},2768:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-row",{staticClass:"filter-container",attrs:{gutter:10}},[n("el-col",{attrs:{sm:4}},[n("el-input",{attrs:{size:"medium","prefix-icon":"el-icon-search",placeholder:"输入权限名称搜索"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),e._v(" "),n("el-col",{attrs:{sm:3}},[n("el-select",{attrs:{size:"medium",placeholder:"父级权限",clearable:""},model:{value:e.listQuery.parent,callback:function(t){e.$set(e.listQuery,"parent",t)},expression:"listQuery.parent"}},e._l(e.permissionParentOptions,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),n("el-col",{attrs:{sm:3}},[n("el-select",{attrs:{size:"medium",clearable:"",placeholder:"归属角色"},model:{value:e.listQuery.role_id,callback:function(t){e.$set(e.listQuery,"role_id",t)},expression:"listQuery.role_id"}},e._l(e.roleOptions,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),n("el-col",{attrs:{sm:3}},[n("el-select",{attrs:{size:"medium",placeholder:"权限状态",clearable:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e){return n("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}),1)],1),e._v(" "),n("el-col",{attrs:{sm:11}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"medium",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n        搜索\n      ")]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:["permission/permission-list"],expression:"['permission/permission-list']"}],attrs:{type:"success",size:"medium",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n        新增权限\n      ")])],1)],1),e._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{"font-size":"14px"},attrs:{"sort-change":"handleSortChange",data:e.list,border:"",fit:"","highlight-current-row":"",size:"mini"},on:{"sort-change":e.sortChange}},[n("el-table-column",{attrs:{label:"权限名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"权限键值",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.key))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"所属角色",width:"380"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return e._l(i.roles_name,function(t){return n("el-tag",{key:t,staticClass:"tags-in-table",attrs:{type:"info",size:"small"}},[e._v("\n            "+e._s(t)+"\n          ")])})}}])}),e._v(" "),n("el-table-column",{attrs:{label:"添加时间",width:"210"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v("\n          "+e._s(n.created_at)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"当前状态",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[1==i.status?n("div",[n("el-tag",{attrs:{size:"small"}},[n("span",[e._v("启用中")])])],1):n("div",[n("el-tag",{attrs:{size:"small",type:"danger"}},[n("span",[e._v("已禁用")])])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center","min-width":"300",fixed:"right","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:["permission/edit-permission"],expression:"['permission/edit-permission']"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v("\n            编辑\n          ")]),e._v(" "),1==i.status?n("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:["permission/change-status"],expression:"['permission/change-status']"}],attrs:{size:"mini",type:"warning"},on:{click:function(t){return e.handleChangeStatus(i,2)}}},[e._v("\n            禁用\n          ")]):n("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:["permission/change-status"],expression:"['permission/change-status']"}],attrs:{size:"mini",type:"success"},on:{click:function(t){return e.handleChangeStatus(i,1)}}},[e._v("\n            启用\n          ")]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:["permission/delete-permission"],expression:"['permission/delete-permission']"}],attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(i)}}},[e._v("\n            删除\n          ")])]}}])})],1)],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],width:"700px",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"450px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"权限名称",prop:"name"}},[n("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"权限键值",prop:"key"}},[n("el-input",{model:{value:e.temp.key,callback:function(t){e.$set(e.temp,"key",t)},expression:"temp.key"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("div",[n("el-radio",{attrs:{label:"1",border:"",size:"small"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},[e._v("启用")]),e._v(" "),n("el-radio",{attrs:{label:"2",border:"",size:"small"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},[e._v("禁用")])],1)]),e._v(" "),n("el-form-item",{attrs:{label:"父级权限",prop:"parent_id"}},[n("div",[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"父级权限",clearable:""},model:{value:e.temp.parent_id,callback:function(t){e.$set(e.temp,"parent_id",t)},expression:"temp.parent_id"}},e._l(e.permissionParentOptions,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)]),e._v(" "),n("el-form-item",{attrs:{label:"归属角色",prop:"roles"}},[n("div",[n("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"归属角色",clearable:""},model:{value:e.temp.roles,callback:function(t){e.$set(e.temp,"roles",t)},expression:"temp.roles"}},e._l(e.roleOptions,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)])],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer",align:"center"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),e.temp.id>0?n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateData()}}},[e._v("\n        确认\n      ")]):n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.createData()}}},[e._v("\n        确认\n      ")])],1)],1)],1)},a=[],r=(n("a481"),n("0feb")),s=n("cc5e"),o=n("6724"),l=n("4381"),u=n("333d"),c={name:"ComplexTable",components:{Pagination:u["a"]},directives:{waves:o["a"],permission:l["a"]},data:function(){var e=function(e,t,n){if(!t)return n(new Error("手机号不能为空"));var i=/^1\d{10}$/;if(!i.test(t))return n(new Error("请输入正确的手机号"));n()};return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10,sort:"-id"},multipleSelection:[],permissionParentOptions:[],statusOptions:[{name:"启用中",key:1},{name:"已禁用",key:2}],showReviewer:!1,temp:{},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑权限",create:"新增权限"},dialogPvVisible:!1,rules:{company:[{required:!0,message:"请填写公司名称",trigger:"change"}],phone:[{required:!0,validator:e,message:"请检查手机号码是否正确填写",trigger:"blur"}]},downloadLoading:!1,roleOptions:[]}},created:function(){this.getList(),this.getPermissionParentOptions(),this.getRoleOptions()},methods:{number:function(){this.temp.mobile=this.temp.mobile.replace(/[^\.\d]/g,""),this.temp.mobile=this.temp.mobile.replace(".","")},sortChange:function(e){var t=e.prop,n=e.order;this.listQuery.sort="ascending"===n?"+"+t:"-"+t,this.handleFilter()},getList:function(){var e=this;this.listLoading=!0,Object(r["e"])(this.listQuery).then(function(t){e.list=t.data.list,e.total=t.data.total,e.listLoading=!1})},getPermissionParentOptions:function(){var e=this;Object(r["g"])().then(function(t){e.permissionParentOptions=t.data.options})},getRoleOptions:function(){var e=this;Object(s["f"])().then(function(t){e.roleOptions=t.data.options})},handleFilter:function(){this.listQuery.page=1,this.getList()},resetTemp:function(){this.temp={status:"1"}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.temp.status=1===this.temp.status?"1":"2",this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},createData:function(){var e=this;this.$refs["dataForm"].validate(function(t){t&&Object(r["b"])(e.temp).then(function(t){e.getList(),e.getPermissionParentOptions(),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建新权限成功",type:"success",duration:2e3})})})},updateData:function(){var e=this;this.$refs["dataForm"].validate(function(t){t&&Object(r["d"])(e.temp).then(function(t){e.getList(),e.getPermissionParentOptions(),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"修改权限信息成功",type:"success",duration:2e3})})})},handleChangeStatus:function(e,t){var n=this,i=1===t?"权限启用成功":"权限禁用成功";Object(r["a"])({id:e.id,status:t}).then(function(e){n.$notify({title:"成功",message:i,type:"success",duration:2e3}),n.getList()})},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该权限, 是否继续?","删除权限提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r["c"])({id:e.id}).then(function(e){t.$notify({title:"成功",message:"已成功删除权限项",type:"success",duration:2e3}),t.getList()})}).catch(function(){})}}},p=c,d=(n("333e"),n("2877")),m=Object(d["a"])(p,i,a,!1,null,null,null);t["default"]=m.exports},"333d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},a=[];n("c5f6");Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,n){var i=o(),a=e-i,l=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=l;var o=Math.easeInOutQuad(u,i,a,t);s(o),u<t?r(e):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,p=(n("1cc6"),n("2877")),d=Object(p["a"])(c,i,a,!1,null,"f3b72548",null);t["a"]=d.exports},"333e":function(e,t,n){"use strict";var i=n("8e88"),a=n.n(i);a.a},4381:function(e,t,n){"use strict";n("6762"),n("2fdb");var i=n("4360"),a={inserted:function(e,t,n){var a=t.value,r=i["a"].getters&&i["a"].getters.roles;if(!(a&&a instanceof Array&&a.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var s=a,o=r.some(function(e){return!!r.includes("super_admin")||s.includes(e)});o||e.parentNode&&e.parentNode.removeChild(e)}},r=function(e){e.directive("permission",a)};window.Vue&&(window["permission"]=a,Vue.use(r)),a.install=r;t["a"]=a},"5dbc":function(e,t,n){var i=n("d3f4"),a=n("8b97").set;e.exports=function(e,t,n){var r,s=t.constructor;return s!==n&&"function"==typeof s&&(r=s.prototype)!==n.prototype&&i(r)&&a&&a(e,r),e}},6724:function(e,t,n){"use strict";n("8d41");var i="@@wavesContext";function a(e,t){function n(n){var i=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),r=a.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",r.appendChild(o)),a.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(n.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(n.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=a.color,o.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=n:e[i]={removeHandle:n},n}var r={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},s=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(s)),r.install=s;t["a"]=r},"8b97":function(e,t,n){var i=n("d3f4"),a=n("cb7c"),r=function(e,t){if(a(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,n){return r(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:r}},"8d41":function(e,t,n){},"8e88":function(e,t,n){},aa77:function(e,t,n){var i=n("5ca1"),a=n("be13"),r=n("79e5"),s=n("fdef"),o="["+s+"]",l="​",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),p=function(e,t,n){var a={},o=r(function(){return!!s[e]()||l[e]()!=l}),u=a[e]=o?t(d):s[e];n&&(a[n]=u),i(i.P+i.F*o,"String",a)},d=p.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(c,"")),e};e.exports=p},c5f6:function(e,t,n){"use strict";var i=n("7726"),a=n("69a8"),r=n("2d95"),s=n("5dbc"),o=n("6a99"),l=n("79e5"),u=n("9093").f,c=n("11e9").f,p=n("86cc").f,d=n("aa77").trim,m="Number",f=i[m],v=f,h=f.prototype,g=r(n("2aeb")(h))==m,b="trim"in String.prototype,y=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():d(t,3);var n,i,a,r=t.charCodeAt(0);if(43===r||45===r){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+t}for(var s,l=t.slice(2),u=0,c=l.length;u<c;u++)if(s=l.charCodeAt(u),s<48||s>a)return NaN;return parseInt(l,i)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof f&&(g?l(function(){h.valueOf.call(n)}):r(n)!=m)?s(new v(y(t)),n,f):y(t)};for(var w,_=n("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;_.length>k;k++)a(v,w=_[k])&&!a(f,w)&&p(f,w,c(v,w));f.prototype=h,h.constructor=f,n("2aba")(i,m,f)}},cc5e:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"d",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"f",function(){return c});var i=n("b775"),a="/role";function r(e){return Object(i["a"])({url:a+"/index",method:"get",params:e})}function s(e){return Object(i["a"])({url:a+"/edit",method:"post",data:e})}function o(e){return Object(i["a"])({url:a+"/create",method:"post",data:e})}function l(e){return Object(i["a"])({url:a+"/change-status",method:"post",data:e})}function u(e){return Object(i["a"])({url:a+"/destroy",method:"post",data:e})}function c(){return Object(i["a"])({url:a+"/role-options",method:"get"})}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);