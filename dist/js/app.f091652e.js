(function(e){function t(t){for(var o,i,c=t[0],u=t[1],d=t[2],l=0,s=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);m&&m(t);while(s.length)s.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},i={app:0},r={app:0},a=[];function c(e){return u.p+"js/"+({add:"add",edit:"edit","home~myVideo":"home~myVideo",home:"home",myVideo:"myVideo",login:"login",msgInfo:"msgInfo",msgList:"msgList"}[e]||e)+"."+{add:"f7063822",edit:"b8254489","home~myVideo":"ce53c74f",home:"0723c66a",myVideo:"a765821e",login:"3c6254d7",msgInfo:"8d8b95f2",msgList:"22ad051d"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={add:1,edit:1,"home~myVideo":1,home:1,myVideo:1,login:1,msgInfo:1,msgList:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var o="css/"+({add:"add",edit:"edit","home~myVideo":"home~myVideo",home:"home",myVideo:"myVideo",login:"login",msgInfo:"msgInfo",msgList:"msgList"}[e]||e)+"."+{add:"a34c0f15",edit:"39dcb7bf","home~myVideo":"ce9d2c91",home:"8c9a8466",myVideo:"d17b7d92",login:"5a5009e5",msgInfo:"1ea700bf",msgList:"30bd26d7"}[e]+".css",r=u.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var d=a[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===r))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){d=s[c],l=d.getAttribute("data-href");if(l===o||l===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[e],m.parentNode.removeChild(m),n(a)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var s=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var m=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"097e":function(e,t){var n=32;function o(){var e=document.documentElement.clientWidth/750;document.documentElement.style.fontSize=n*Math.min(e,2)+"px"}o(),window.onresize=function(){o()}},1994:function(e,t,n){"use strict";var o=n("957b"),i=n.n(o);i.a},"1f95":function(e,t,n){e.exports=n.p+"img/01.492b72fa.gif"},"2eba":function(e,t,n){},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("4ee2"),{}),c=a,u=n("2877"),d=Object(u["a"])(c,i,r,!1,null,null,null),l=d.exports,s=(n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("router-view"),n("TabBar",{staticClass:"bar"})],1)},f=[],p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tab-bar"},[o("div",{on:{click:function(t){return e.addActive(0)}}},[o("router-link",{class:0==e.active?"active":"",attrs:{to:"/"}},[e._v("首页")])],1),o("div",{on:{click:function(t){return e.addActive(1)}}},[o("router-link",{class:1==e.active?"active":"",attrs:{to:"/city"}},[e._v("同城")])],1),o("div",[o("router-link",{attrs:{to:"/add"}},[o("img",{staticStyle:{width:"40px"},attrs:{src:n("1f95")}})])],1),o("div",{on:{click:function(t){return e.addActive(2)}}},[o("router-link",{class:2==e.active?"active":"",attrs:{to:"/news"}},[e._v("消息")])],1),o("div",{on:{click:function(t){return e.addActive(3)}}},[o("router-link",{class:3==e.active?"active":"",attrs:{to:"/my"}},[e._v("我")])],1)])},h=[],v={data:function(){return{active:0}},methods:{addActive:function(e){this.active=e}}},g=v,y=(n("1994"),Object(u["a"])(g,p,h,!1,null,null,null)),b=y.exports,w={components:{TabBar:b}},_=w,I=(n("a318"),Object(u["a"])(_,m,f,!1,null,null,null)),V=I.exports;o["default"].use(s["a"]);var k=[{path:"/",redirect:"/index"},{path:"/",name:"Home",component:V,children:[{path:"/index",name:"Index",component:function(){return Promise.all([n.e("home~myVideo"),n.e("home")]).then(n.bind(null,"1e4b"))}},{path:"/city",name:"City",component:function(){return Promise.all([n.e("home~myVideo"),n.e("home")]).then(n.bind(null,"b58d"))}},{path:"/news",name:"News",component:function(){return Promise.all([n.e("home~myVideo"),n.e("home")]).then(n.bind(null,"1474"))}},{path:"/my",name:"My",component:function(){return Promise.all([n.e("home~myVideo"),n.e("home")]).then(n.bind(null,"0c6f"))}}]},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"dd7b"))}},{path:"/edit",name:"Edit",component:function(){return n.e("edit").then(n.bind(null,"a2c6"))}},{path:"/add",name:"Add",component:function(){return n.e("add").then(n.bind(null,"38be"))}},{path:"/msgList",name:"MsgList",component:function(){return n.e("msgList").then(n.bind(null,"67b5"))}},{path:"/msgInfo",name:"MsgInfo",component:function(){return n.e("msgInfo").then(n.bind(null,"a6d1"))}},{path:"/myVideo",name:"MyVideo",component:function(){return Promise.all([n.e("home~myVideo"),n.e("myVideo")]).then(n.bind(null,"8bea"))}}],L=new s["a"]({base:"",routes:k});L.beforeEach((function(e,t,n){var o=window.localStorage.getItem("uname");o?n():"/my"==e.path||"/news"==e.path||"/add"==e.path||"/city"==e.path?n("/login"):n()}));var x=L,E=n("2f62");o["default"].use(E["a"]);var O=new E["a"].Store({state:{myInfo:{},num:0},mutations:{init_myInfo:function(e,t){e.myInfo=t},init_num:function(e){var t=0,n=0;for(var o in e.myInfo)n++,""!=e.myInfo[o]&&t++;e.num=parseInt(t/n*100)}},actions:{getMyInfo:function(e){o["default"].prototype.$http.get("/userInfo").then((function(t){e.commit("init_myInfo",t.data),e.commit("init_num")})).catch((function(e){console.log(e)}))}},modules:{}}),P=n("bc3a"),j=n.n(P),S=n("76a0"),A=n.n(S),C=(n("aa35"),n("be35"),n("7212")),M=n.n(C);n("097e");o["default"].use(A.a),o["default"].use(M.a),o["default"].prototype.$http=j.a,j.a.defaults.baseURL="https://www.fastmock.site/mock/6375cc318ec31f94591712e5d66c22d8/dy_api/",o["default"].config.productionTip=!1,new o["default"]({router:x,store:O,render:function(e){return e(l)}}).$mount("#app")},"957b":function(e,t,n){},a318:function(e,t,n){"use strict";var o=n("2eba"),i=n.n(o);i.a},be35:function(e,t,n){}});
//# sourceMappingURL=app.f091652e.js.map