(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},i=[];function r(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"db580bd7"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(e);var c=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,a[1](c)}s[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("router-view")],1)},i=[],r={name:"App",components:{},data:function(){return{}}},o=r,l=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),p=Object(l["a"])(o,s,i,!1,null,null,null),h=p.exports;d()(p,{VApp:u["a"]});a("d3b7");var g=a("5530"),m=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[e._l(e.items,(function(t){return[t.heading?a("v-row",{key:t.heading,attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[t.heading?a("v-subheader",[e._v(e._s(t.heading))]):e._e()],1),a("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[a("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[e._v("EDIT")])])],1):t.children?a("v-list-group",{key:t.text,attrs:{"prepend-icon":t.model?t.icon:t["icon-alt"],"append-icon":""},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.text))])],1)]},proxy:!0}],null,!0),model:{value:t.model,callback:function(a){e.$set(t,"model",a)},expression:"item.model"}},e._l(t.children,(function(n,s){return a("v-list-item",{key:s,attrs:{link:""},on:{click:function(t){return e.$router.push(n.value)}}},[n.icon?a("v-list-item-action",[a("v-icon",{style:e.$route.path=="/"+t.value?"color:rgba(44, 130, 201, 1)":""},[e._v(e._s(n.icon))])],1):e._e(),a("v-list-item-content",[a("v-list-item-title",{style:e.$route.path=="/"+t.value?"color:rgba(44, 130, 201, 1)":""},[e._v(e._s(n.text))])],1)],1)})),1):a("v-list-item",{key:t.text,attrs:{link:""},on:{click:function(a){return e.$router.push({name:t.value,params:{categoryId:t.categoryId}})}}},[a("v-list-item-action",[a("v-icon",{style:e.$route.path=="/"+t.value?"color:rgba(44, 130, 201, 1)":""},[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[a("span",{style:e.$route.path=="/"+t.value?"color:rgba(44, 130, 201, 1)":""},[e._v(" "+e._s(t.text))])])],1)],1)]}))],2)],1),a("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[a("span",{staticClass:"hidden-sm-and-down"},[e._v("My Blog")])]),a("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"}}),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:e.changeCardsMode}},[a("v-icon",[e._v("mdi-apps")])],1),a("v-switch",{attrs:{"hide-details":"",inset:"",label:"Theme Dark"},model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}}),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-plus")])],1),a("v-btn",{attrs:{icon:"",large:""}},[a("v-avatar",{attrs:{size:"32px",item:""}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/logos/logo.svg",alt:"Vuetify"}})],1)],1)],1),a("v-content",[a("v-container",[a("router-view",{key:e.$route.path})],1)],1),a("v-btn",{attrs:{bottom:"",color:"orange",dark:"",fab:"",fixed:"",right:""},on:{click:function(t){e.dialog=!e.dialog}}},[a("v-icon",[e._v("mdi-comment-text")])],1),a("v-dialog",{attrs:{width:"800px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"yellow darken-3"},[e._v("Give a Feedback")]),a("v-container",[a("v-row",{staticClass:"mx-2"},[a("v-col",{staticClass:"align-center justify-space-between",attrs:{cols:"12"}},[a("v-row",{staticClass:"mr-0",attrs:{align:"center"}},[a("v-avatar",{staticClass:"mx-3",attrs:{size:"40px"}},[a("img",{attrs:{src:"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",alt:""}})]),a("v-text-field",{attrs:{placeholder:"Name",color:"orange darken-3"}})],1)],1),a("v-col",{attrs:{cols:"4"}}),a("v-col",{attrs:{cols:"6"}},[a("v-rating",{attrs:{"background-color":"orange darken-3",color:"orange"},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{outlined:"",label:"Comment",color:"orange darken-3"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"orange darken-3"},on:{click:function(t){e.dialog=!1}}},[e._v("Send")])],1)],1)],1)],1)},A=[],y={name:"Home",props:{source:String},data:function(){return{theme:!1,dialog:!1,drawer:null,rating:null,items:[{icon:"mdi-home",text:"Home",value:"Main",categoryId:"111"},{icon:"mdi-cellphone-link",text:"App downloads",value:"Category1",categoryId:"222"},{icon:"mdi-cog",text:"Settings",value:"Category2",categoryId:"333"},{icon:"mdi-help-circle",text:"Help",value:"Category3",categoryId:"444"},{icon:"mdi-chevron-up","icon-alt":"mdi-chevron-down",text:"More",model:!1,children:[{icon:" mdi-check-all",text:"Import"},{icon:"mdi-airballoon",text:"Undo changes"},{icon:"mdi-video",text:"Other contacts"}]},{icon:"mdi-contacts",text:"Contacts"}]}},methods:{changeCardsMode:function(){this.$store.commit("changeCardsMode")}},mounted:function(){this.$vuetify.theme.isDark="dark"==localStorage.theme},watch:{theme:function(){this.$vuetify.theme.isDark="dark"!=localStorage.theme,localStorage.theme="dark"==localStorage.theme?"light":"dark"}},created:function(){console.log("localStorage.grid11111",localStorage.grid)}},b=y,v=a("40dc"),I=a("5bc1"),k=a("8212"),j=a("8336"),Q=a("b0af"),C=a("99d9"),E=a("62ad"),S=a("a523"),w=a("a75b"),x=a("169a"),B=a("132d"),L=a("adda"),R=a("8860"),W=a("56b0"),N=a("da13"),O=a("1800"),V=a("5d23"),U=a("f774"),D=a("1d4d"),J=a("0fd9"),z=a("2fa4"),G=a("e0c7"),M=a("b73d"),P=a("8654"),T=a("a844"),K=a("2a7f"),F=Object(l["a"])(b,f,A,!1,null,null,null),_=F.exports;d()(F,{VApp:u["a"],VAppBar:v["a"],VAppBarNavIcon:I["a"],VAvatar:k["a"],VBtn:j["a"],VCard:Q["a"],VCardActions:C["a"],VCardTitle:C["d"],VCol:E["a"],VContainer:S["a"],VContent:w["a"],VDialog:x["a"],VIcon:B["a"],VImg:L["a"],VList:R["a"],VListGroup:W["a"],VListItem:N["a"],VListItemAction:O["a"],VListItemContent:V["a"],VListItemTitle:V["b"],VNavigationDrawer:U["a"],VRating:D["a"],VRow:J["a"],VSpacer:z["a"],VSubheader:G["a"],VSwitch:M["a"],VTextField:P["a"],VTextarea:T["a"],VToolbarTitle:K["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e.grid?e._e():a("div",e._l(e.articles,(function(e){return a("div",{key:e.id},[a("Card",{attrs:{article:e}})],1)})),0),e.grid?a("v-row",e._l(e.articles,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"4"}},[a("Card",{attrs:{article:e}})],1)})),1):e._e(),a("br"),a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:6},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1)},q=[],H=a("53ca"),Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"340px",src:e.article.img}},[a("v-card-title",[e._v(e._s(e.article.title))])],1),a("v-card-subtitle",{staticClass:"pb-0"},[e._v(e._s(e._f("dateToDayMonthYear")(e.article.date)))]),a("v-card-text",{staticClass:"text--primary"},[a("div",[e._v(e._s(e.article.header))])]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange",text:""},on:{click:e.goTo}},[e._v("Details")])],1)],1)],1)},X=[],$={name:"HelloWorld",props:{article:{title:null}},data:function(){return{}},created:function(){console.log("in card",this.article)},methods:{goTo:function(){console.log("this.$router.path",this.$route.path,this.article.id),this.$router.push({path:this.$route.path+"/"+this.article.id,params:{article:this.article.body}})}}},ee=$,te=Object(l["a"])(ee,Z,X,!1,null,null,null),ae=te.exports;d()(te,{VBtn:j["a"],VCard:Q["a"],VCardActions:C["a"],VCardSubtitle:C["b"],VCardText:C["c"],VCardTitle:C["d"],VContainer:S["a"],VImg:L["a"]});var ne={name:"HelloWorld",components:{Card:ae},props:["categoryId"],data:function(){return{articles:[],page:1}},computed:{grid:function(){return console.log("this.$store.state.grid",Object(H["a"])(this.$store.state.grid)),this.$store.state.grid}},created:function(){console.log("aaaaaaaaaaaaaaaaaaa",this.categoryId),this.articles.push({body:"ArticleArticleArticleArticleArticleArticleArticleArticleArticle",id:1,title:"test title",date:new Date,header:"Whitsunday Island, WhitsundayWhitsunday Whitsunday Whitsunday Whitsunday  Islands",img:"https://webdesignerwall.com/wp-content/uploads/2014/05/animated-backgrounds.jpg"},{body:"ArticleArticleArticleArticleArticleArticleArticleArticleArticle",id:2,title:"test title",date:new Date,header:"Whitsunday Island, WhitsundayWhitsunday Whitsunday Whitsunday Whitsunday  Islands",img:"data:image/jpeg;base64,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"},{id:222,title:"test title",date:new Date,header:"Whitsunday Island, WhitsundayWhitsunday Whitsunday Whitsunday Whitsunday  Islands",body:"ArticleArticleArticleArticleArticleArticleArticleArticleArticle",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEmJIR0yQxjX-R1wJrQn4bL4VLSAZSeA3OS2EIEVxSLYGzntke&usqp=CAU"},{body:"ArticleArticleArticleArticleArticleArticleArticleArticleArticle",id:333,title:"test title",date:new Date,header:"Whitsunday Island, WhitsundayWhitsunday Whitsunday Whitsunday Whitsunday  Islands",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoNLNCBsdvph0a7TmlGMBc_on5YNbrNQr534t5wN0HL9hCeGK7&usqp=CAU"},{body:"ArticleArticleArticleArticleArticleArticleArticleArticleArticle",id:334,title:"test title",date:new Date,header:"Whitsunday Island, WhitsundayWhitsunday Whitsunday Whitsunday Whitsunday  Islands",img:"https://isaacsesi.com/wp-content/uploads/2017/10/shape-bg-04.jpg"},{body:"ArticleArticleArticleArticleArticleArticleArticleArticleArticle",id:12,title:"test title",date:new Date,header:"Whitsunday Island, WhitsundayWhitsunday Whitsunday Whitsunday Whitsunday  Islands",img:"https://www.color-hex.com/palettes/87006.png"},{body:"ArticleArticleArticleArticleArticleArticleArticleArticleArticle",id:22,title:"test title",date:new Date,header:"Whitsunday Island, WhitsundayWhitsunday Whitsunday Whitsunday Whitsunday  Islands",img:"https://www.color-hex.com/palettes/85118.png"},{body:"ArticleArticleArticleArticleArticleArticleArticleArticleArticle",id:3,title:"test title",date:new Date,header:"Whitsunday Island, WhitsundayWhitsunday Whitsunday Whitsunday Whitsunday  Islands",img:"https://i.pinimg.com/736x/70/79/48/70794809ac1ad01280d5b30860d7829d.jpg"})}},se=ne,ie=a("891e"),re=Object(l["a"])(se,Y,q,!1,null,null,null),oe=re.exports;d()(re,{VCol:E["a"],VContainer:S["a"],VPagination:ie["a"],VRow:J["a"]});var le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Editor")],1)},ce=[],de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",{staticClass:"editorx_body"},[a("pre",[e._v(e._s(e.value))])])])},ue=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editorx_body"},[a("div",{attrs:{id:"codex-editor"}})])}],pe=(a("4160"),a("159b"),a("96cf"),a("1da1")),he=a("9336"),ge=a.n(he),me=a("3ecd"),fe=a.n(me),Ae=a("7c5e"),ye=a.n(Ae),be=a("71c0"),ve=a.n(be),Ie=a("b391"),ke=a.n(Ie),je=a("eb16"),Qe=a.n(je),Ce=a("1c50"),Ee=a.n(Ce),Se={name:"Editor",data:function(){return{value:null}},created:function(){var e=this;return Object(pe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.myEditor();case 2:e.onReady();case 3:case"end":return t.stop()}}),t)})))()},methods:{divClick:function(){console.log("divClick")},onReady:function(){console.log(" onReadyonReadyonReadyonReady");var e=document.querySelectorAll("[contenteditable=true]");e.forEach((function(e){return e.removeAttribute("contenteditable")}));var t=document.querySelectorAll(".ce-toolbar__settings-btn");t.forEach((function(e){return e.remove()}));var a=document.querySelectorAll(".ce-toolbar__plus");a.forEach((function(e){return e.remove()}))},save:function(){var e=this;editor.save().then((function(t){e.onReady(),console.log("aaaaaaaaaaa",JSON.stringify(t)),e.value=t}))},myEditor:function(){var e=this;window.editor=new ge.a({data:JSON.parse('{"time":1593848557548,"blocks":[{"type":"header","data":{"text":"1914 translation by H. Rackham","level":2}},{"type":"paragraph","data":{"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}},{"type":"delimiter","data":{}},{"type":"list","data":{"style":"ordered","items":["choose1","choose2","choose3"]}},{"type":"paragraph","data":{"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}},{"type":"paragraph","data":{"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}},{"type":"delimiter","data":{}},{"type":"header","data":{"text":"The standard Lorem Ipsum passage, used since the 1500s","level":2}},{"type":"paragraph","data":{"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}},{"type":"paragraph","data":{"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}},{"type":"paragraph","data":{"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}}],"version":"2.18.0"}'),holder:"codex-editor",autofocus:!0,initialBlock:"paragraph",tools:{linkTool:{class:Ee.a},image:{class:Qe.a},delimiter:ke.a,header:{class:fe.a,data:{text:"Hello Vue/Editor.js",level:2}},list:{class:ve.a},paragraph:{class:ye.a,data:{text:"aaaaaaaaaaaas        assssssssssss"}}},onReady:function(){console.log("ready"),e.onReady()},onChange:function(){console.log("change"),e.onReady()}})}},mounted:function(){}},we=Se,xe=Object(l["a"])(we,de,ue,!1,null,"24b96e12",null),Be=xe.exports,Le={name:"Article",components:{Editor:Be},props:["id","article","dd"],data:function(){return{initData:{time:1554508385558,blocks:[{type:"header",data:{text:"Hello Vue/Editor.js",level:2}},{type:"list",data:{style:"ordered",items:["Learn Vue.js<br>","Learn Editor.js"]}},{type:"quote",data:{text:"This is awesome block based editor.<br>",caption:"",alignment:"left"}},{type:"delimiter",data:{}},{type:"warning",data:{title:"Warning",message:"Open Development Tools console"}},{type:"delimiter",data:{}}],version:"2.12.3"}}},created:function(){console.log("this.$refs.editor",this.$refs.editor)},methods:{save:function(){console.log(this.$refs.editor)},onSave:function(e){console.log(JSON.stringify(e))},onReady:function(){console.log("ready")},onChange:function(){console.log("changed")}}},Re=Le,We=Object(l["a"])(Re,le,ce,!1,null,null,null),Ne=We.exports;n["a"].use(m["a"]);var Oe=[{path:"/",redirect:"/home"},{path:"/home",component:_,props:function(e){return Object(g["a"])({},e.params)},children:[{path:"/",redirect:"/Main",props:function(e){return Object(g["a"])({},e.params)}},{path:"/Main",name:"Main",component:oe,props:function(e){return Object(g["a"])({},e.params)}},{path:"/Main/:id",name:"MainDetails",component:Ne,props:function(e){return Object(g["a"])({},e.params)}},{path:"/Category1",name:"Category1",component:oe,props:function(e){return Object(g["a"])({},e.params)}},{path:"/Category1/:id",name:"Category1Details",component:Ne,props:function(e){return Object(g["a"])({},e.params)}},{path:"/Category2",name:"Category2",component:oe,props:function(e){return Object(g["a"])({},e.params)}},{path:"/Category2/:id",name:"Category2Details",component:Ne,props:function(e){return Object(g["a"])({},e.params)}},{path:"/Category3",name:"Category3",component:oe,props:function(e){return Object(g["a"])({},e.params)}},{path:"/Category3/:id",name:"Category3Details",component:Ne,props:function(e){return Object(g["a"])({},e.params)}}]},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Ve=new m["a"]({routes:Oe}),Ue=Ve,De=a("f309");n["a"].use(De["a"]);var Je=new De["a"]({}),ze=a("c1df"),Ge=a.n(ze),Me=a("2f62");n["a"].use(Me["a"]);var Pe=new Me["a"].Store({state:{grid:"true"===localStorage.grid},mutations:{changeCardsMode:function(e){console.log("state.grid",e.grid),console.log("localStorage.grid",Object(H["a"])(!localStorage.grid)),e.grid=!e.grid,localStorage.grid=e.grid,console.log("localStorage.grid",localStorage.grid)}},actions:{},modules:{}}),Te=a("1503");n["a"].use(Te["a"]),n["a"].config.productionTip=!1,n["a"].filter("dateToDayMonthYear",(function(e){if(e){var t=Ge()(e,"YYYY-MM-DDTHH:mm:ss.SSSS");return t.isValid()?t.format("DD-MM-YYYY "):null}})),new n["a"]({router:Ue,store:Pe,vuetify:Je,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.85afc959.js.map