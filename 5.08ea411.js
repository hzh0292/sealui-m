webpackJsonp([5,10],{108:function(t,e,a){a(109);var s=a(9)(a(111),a(112),"data-v-408da694",null);t.exports=s.exports},109:function(t,e,a){var s=a(110);"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);a(7)("4bb1b77a",s,!0)},110:function(t,e,a){e=t.exports=a(6)(),e.push([t.id,".page-msg[data-v-408da694]{padding:0}.page-msg .page-msg__group[data-v-408da694]{margin-bottom:.3rem}",""])},111:function(t,e){"use strict";e.__esModule=!0,e.default={name:"page-msg",data:function(){return{title:"无法完成操作",desc:"内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href='javascript:void(0);'>文字链接</a>",icon:"warn",buttons:[{type:"primary",text:"确 定",onClick:this.clickTip},{type:"default",text:"取 消",link:"/demos/msg"}]}},mounted:function(){},methods:{clickTip:function(){this.$seal.alert("点击了确定")}}}},112:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-msg"},[a("div",{staticClass:"page-msg__group"},[a("seal-msg",{attrs:{title:t.title,desc:t.desc,icon:t.icon,buttons:t.buttons}})],1)])},staticRenderFns:[]}}});