(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5ac0a4c"],{"2ee5":function(e,t,r){"use strict";var n=r("e3fa"),s=r.n(n);s.a},"586c":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wiki-login",on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit(t)}}},[r("div",{staticClass:"wiki-login-con"},[r("div",{staticClass:"form-con"},[r("span",{staticStyle:{"font-size":"20px"}},[e._v("ApiAdmin文档中心")]),r("Form",{ref:"loginForm",staticClass:"margin-top-15",attrs:{model:e.form,rules:e.rules}},[r("FormItem",{attrs:{prop:"username"}},[r("Input",{attrs:{placeholder:"请输入AppId"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:16,type:"ios-person"}})],1)])],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",placeholder:"请输入AppSecret"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:14,type:"md-lock"}})],1)])],1),r("FormItem",{staticClass:"margin-bottom-15"},[r("Button",{attrs:{type:"primary",long:"",loading:e.loading},on:{click:e.handleSubmit}},[e._v("登录")])],1)],1),r("div",{staticClass:"wiki-login-tip"},[e._v("\n        如没有账号请联系管理员\n      ")])],1)])])},s=[],a=r("b5ba"),o=r("c276"),i={data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"AppId不能为空",trigger:"blur"}],password:[{required:!0,message:"AppSecret不能为空",trigger:"blur"}]},loading:!1}},methods:{handleSubmit:function(){var e=this;this.$refs["loginForm"].validate((function(t){t&&(e.loading=!0,Object(a["d"])(e.form).then((function(t){e.$Message.success(t.data.msg),Object(o["q"])(t.data.data.apiAuth),sessionStorage.setItem("ApiAdmin_AppInfo",t.data.data.app_id),e.$router.push({name:"wiki_list"}),e.loading=!1})).catch((function(){e.loading=!1})))}))}}},u=i,c=(r("2ee5"),r("2877")),p=Object(c["a"])(u,n,s,!1,null,null,null);t["default"]=p.exports},b5ba:function(e,t,r){"use strict";r.d(t,"c",(function(){return b})),r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return w})),r.d(t,"d",(function(){return k})),r.d(t,"e",(function(){return v}));var n=r("d225"),s=r("b0b4"),a=r("f121"),o=r("bc3a"),i=r.n(o),u=r("f825"),c=r.n(u),p=r("c276"),l=r("a18c"),d=a["a"].baseUrl.pro+"wiki/",m=function(){function e(t){Object(n["a"])(this,e),this.baseUrl=t}return Object(s["a"])(e,[{key:"interceptors",value:function(e){e.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){var t=e.data,r=e.status;if(1!==t.code)throw-14===t.code?(Object(p["q"])(""),l["a"].push({name:"wiki_login"})):c.a.Message.error(t.msg),new Error(t.msg);return{data:t,status:r}}),(function(e){return Promise.reject(e)}))}},{key:"request",value:function(e){var t=i.a.create(),r=Object(p["i"])();return e=!1===r?Object.assign({baseURL:this.baseUrl,headers:{}},e):Object.assign({baseURL:this.baseUrl,headers:{apiAuth:r}},e),this.interceptors(t),t(e)}}]),e}(),f=new m(d),g=f,b=function(){return g.request({url:"Api/errorCode",method:"get"})},h=function(){return g.request({url:"Api/groupList",method:"get"})},w=function(e){return g.request({url:"Api/detail",method:"get",params:e})},k=function(e){return g.request({url:"Api/login",method:"post",data:e})},v=function(){return g.request({url:"Api/logout",method:"get"})}},e3fa:function(e,t,r){}}]);