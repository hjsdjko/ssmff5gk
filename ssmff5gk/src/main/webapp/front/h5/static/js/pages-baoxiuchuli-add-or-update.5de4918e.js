(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-baoxiuchuli-add-or-update"],{5054:function(e,r,i){"use strict";var t=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("ac6a"),i("28a5"),i("96cf");var o=t(i("3b8d")),a=t(i("e2b1")),n={data:function(){return{ruleForm:{baoxiushebei:"",leixing:"",tupian:"",baoxiuriqi:"",weixiufankui:"",weixiujindu:"",gengxinriqi:"",xuehao:"",xueshengxingming:"",sushehao:"",banji:"",userid:""},weixiujinduOptions:[],weixiujinduIndex:0,user:{},ro:{baoxiushebei:!1,leixing:!1,tupian:!1,baoxiuriqi:!1,weixiufankui:!1,weixiujindu:!1,gengxinriqi:!1,xuehao:!1,xueshengxingming:!1,sushehao:!1,banji:!1,userid:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(r){var i,t,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.gengxinriqi=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:if(t=e.sent,this.user=t.data,this.weixiujinduOptions="维修中,已完成".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=15;break}return this.ruleForm.id=r.id,e.next=13,this.$api.info("baoxiuchuli",this.ruleForm.id);case 13:t=e.sent,this.ruleForm=t.data;case 15:if(!r.cross){e.next=70;break}o=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(o);case 18:if((e.t1=e.t0()).done){e.next=70;break}if(a=e.t1.value,"baoxiushebei"!=a){e.next=24;break}return this.ruleForm.baoxiushebei=o[a],this.ro.baoxiushebei=!0,e.abrupt("continue",18);case 24:if("leixing"!=a){e.next=28;break}return this.ruleForm.leixing=o[a],this.ro.leixing=!0,e.abrupt("continue",18);case 28:if("tupian"!=a){e.next=32;break}return this.ruleForm.tupian=o[a],this.ro.tupian=!0,e.abrupt("continue",18);case 32:if("baoxiuriqi"!=a){e.next=36;break}return this.ruleForm.baoxiuriqi=o[a],this.ro.baoxiuriqi=!0,e.abrupt("continue",18);case 36:if("weixiufankui"!=a){e.next=40;break}return this.ruleForm.weixiufankui=o[a],this.ro.weixiufankui=!0,e.abrupt("continue",18);case 40:if("weixiujindu"!=a){e.next=44;break}return this.ruleForm.weixiujindu=o[a],this.ro.weixiujindu=!0,e.abrupt("continue",18);case 44:if("gengxinriqi"!=a){e.next=48;break}return this.ruleForm.gengxinriqi=o[a],this.ro.gengxinriqi=!0,e.abrupt("continue",18);case 48:if("xuehao"!=a){e.next=52;break}return this.ruleForm.xuehao=o[a],this.ro.xuehao=!0,e.abrupt("continue",18);case 52:if("xueshengxingming"!=a){e.next=56;break}return this.ruleForm.xueshengxingming=o[a],this.ro.xueshengxingming=!0,e.abrupt("continue",18);case 56:if("sushehao"!=a){e.next=60;break}return this.ruleForm.sushehao=o[a],this.ro.sushehao=!0,e.abrupt("continue",18);case 60:if("banji"!=a){e.next=64;break}return this.ruleForm.banji=o[a],this.ro.banji=!0,e.abrupt("continue",18);case 64:if("userid"!=a){e.next=68;break}return this.ruleForm.userid=o[a],this.ro.userid=!0,e.abrupt("continue",18);case 68:e.next=18;break;case 70:this.styleChange();case 71:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},gengxinriqiConfirm:function(e){console.log(e),this.ruleForm.gengxinriqi=e.result,this.$forceUpdate()},weixiujinduChange:function(e){this.weixiujinduIndex=e.target.value,this.ruleForm.weixiujindu=this.weixiujinduOptions[this.weixiujinduIndex]},tupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.tupian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.id){e.next=5;break}return e.next=3,this.$api.update("baoxiuchuli",this.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,this.$api.add("baoxiuchuli",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),t=r.getMonth()+1,o=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,o=o>9?o:"0"+o,"".concat(i,"-").concat(t,"-").concat(o)},toggleTab:function(e){this.$refs[e].show()}}};r.default=n},"6ac6":function(e,r,i){"use strict";var t=i("b99e"),o=i.n(t);o.a},"73f5":function(e,r,i){var t=i("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-fa5b2ef6]{padding:%?20?%}.content[data-v-fa5b2ef6]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-fa5b2ef6]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-fa5b2ef6]{width:%?180?%}.avator[data-v-fa5b2ef6]{width:%?150?%;height:%?60?%}.right-input[data-v-fa5b2ef6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-fa5b2ef6]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-fa5b2ef6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-fa5b2ef6]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-fa5b2ef6]{border:0}.cu-form-group uni-input[data-v-fa5b2ef6]{padding:0 %?30?%}.uni-input[data-v-fa5b2ef6]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-fa5b2ef6]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-fa5b2ef6]::after{line-height:%?88?%}.select .uni-input[data-v-fa5b2ef6]{line-height:%?88?%}.input .right-input[data-v-fa5b2ef6]{line-height:%?60?%}',""]),e.exports=r},"7a59":function(e,r,i){"use strict";i.r(r);var t=i("5054"),o=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(r,e,(function(){return t[e]}))}(a);r["default"]=o.a},"86a2":function(e,r,i){"use strict";i.r(r);var t=i("ea52"),o=i("7a59");for(var a in o)"default"!==a&&function(e){i.d(r,e,(function(){return o[e]}))}(a);i("6ac6");var n,u=i("f0c5"),l=Object(u["a"])(o["default"],t["b"],t["c"],!1,null,"fa5b2ef6",null,!1,t["a"],n);r["default"]=l.exports},b99e:function(e,r,i){var t=i("73f5");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=i("4f06").default;o("187af312",t,!0,{sourceMap:!1,shadowMode:!1})},ea52:function(e,r,i){"use strict";var t={"w-picker":i("e2b1").default},o=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("报修设备")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.baoxiushebei,placeholder:"报修设备"},model:{value:e.ruleForm.baoxiushebei,callback:function(r){e.$set(e.ruleForm,"baoxiushebei",r)},expression:"ruleForm.baoxiushebei"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("类型")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.leixing,placeholder:"类型"},model:{value:e.ruleForm.leixing,callback:function(r){e.$set(e.ruleForm,"leixing",r)},expression:"ruleForm.leixing"}})],1),i("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.tupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(1, 1, 1, 1)",textAlign:"left"}},[e._v("图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.tupian?i("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:e.ruleForm.tupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("报修日期")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.baoxiuriqi,placeholder:"报修日期"},model:{value:e.ruleForm.baoxiuriqi,callback:function(r){e.$set(e.ruleForm,"baoxiuriqi",r)},expression:"ruleForm.baoxiuriqi"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("维修反馈")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.weixiufankui,placeholder:"维修反馈"},model:{value:e.ruleForm.weixiufankui,callback:function(r){e.$set(e.ruleForm,"weixiufankui",r)},expression:"ruleForm.weixiufankui"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("维修进度")]),i("v-uni-picker",{attrs:{value:e.weixiujinduIndex,range:e.weixiujinduOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.weixiujinduChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.weixiujindu?e.ruleForm.weixiujindu:"请选择维修进度"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("更新日期")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{placeholder:"更新日期"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("gengxinriqi")}},model:{value:e.ruleForm.gengxinriqi,callback:function(r){e.$set(e.ruleForm,"gengxinriqi",r)},expression:"ruleForm.gengxinriqi"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("学号")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.xuehao,placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(r){e.$set(e.ruleForm,"xuehao",r)},expression:"ruleForm.xuehao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("学生姓名")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:e.ruleForm.xueshengxingming,callback:function(r){e.$set(e.ruleForm,"xueshengxingming",r)},expression:"ruleForm.xueshengxingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("宿舍号")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.sushehao,placeholder:"宿舍号"},model:{value:e.ruleForm.sushehao,callback:function(r){e.$set(e.ruleForm,"sushehao",r)},expression:"ruleForm.sushehao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("班级")]),i("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.banji,placeholder:"班级"},model:{value:e.ruleForm.banji,callback:function(r){e.$set(e.ruleForm,"banji",r)},expression:"ruleForm.banji"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(242, 199, 68, 1)",borderColor:"rgba(57, 78, 99, 1)",borderRadius:"40rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"40%",fontSize:"28rpx",borderStyle:"solid",height:"76rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),i("w-picker",{ref:"gengxinriqi",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.gengxinriqiConfirm.apply(void 0,arguments)}}})],1)},a=[];i.d(r,"b",(function(){return o})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return t}))}}]);