webpackJsonp([6,10],{88:function(t,e,s){s(89);var a=s(9)(s(91),s(92),"data-v-d43a0df0",null);t.exports=a.exports},89:function(t,e,s){var a=s(90);"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);s(7)("6ad442e8",a,!0)},90:function(t,e,s){e=t.exports=s(6)(),e.push([t.id,".page-msg[data-v-d43a0df0]{padding:0}.page-msg .page-msg__group[data-v-d43a0df0]{margin-bottom:.3rem}",""])},91:function(t,e){"use strict";e.__esModule=!0,e.default={name:"page-msg",data:function(){return{title:"失败",desc:"内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href='javascript:void(0);'>文字链接</a>",icon:"error",buttons:[{type:"primary",text:"确 定",onClick:this.clickTip},{type:"default",text:"取 消",link:"/demos/msg"}]}},mounted:function(){},methods:{clickTip:function(){this.$seal.alert("点击了确定")}}}},92:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-msg"},[s("div",{staticClass:"page-msg__group"},[s("seal-msg",{attrs:{title:t.title,desc:t.desc,icon:t.icon,buttons:t.buttons}})],1)])},staticRenderFns:[]}}});