(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},"1ef7":function(t,e,a){"use strict";var i=a("b0fd"),s=a.n(i);s.a},"3c5e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("b0c0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("menubar"),a("router-view")],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{attrs:{id:"logo"}},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:a("b17e"),alt:"alessandro polverino ap logo"}})])],1),i("nav",[i("ul",{staticClass:"nav-links"},[i("li",{staticClass:"nav-link"},[i("router-link",{attrs:{to:"/"}},[t._v("home")])],1)])])])},o=[],l={name:"menuBar"},c=l,u=a("2877"),m=Object(u["a"])(c,r,o,!1,null,null,null),d=m.exports,p={name:"App",components:{menubar:d}},v=p,f=(a("034f"),Object(u["a"])(v,s,n,!1,null,null,null)),h=f.exports,g=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[t._m(0),t._m(1),t._m(2),a("projects",{staticClass:"portfolio-section",attrs:{id:"projects"}}),a("experiences",{staticClass:"portfolio-section",attrs:{id:"experiences"}})],1)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-centered landing",attrs:{id:"home"}},[a("div",{staticClass:"column is-half has-text-centered"},[a("div",{staticClass:"container",staticStyle:{"margin-top":"10%"}},[a("h1",{staticClass:"title has-text-white has-text-centered",staticStyle:{"font-size":"60px","font-weight":"900"},attrs:{id:"myname"}},[t._v("Hi, I'm Alessandro")]),a("div",{staticClass:"v-sliding-container"},[a("div",[a("span",{staticClass:"v-sliding-text"})])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns is-vcentered is-hidden-mobile",attrs:{id:"coding-container"}},[i("div",{staticClass:"column coding-column"},[i("ul",{staticClass:"social-links"},[i("li",{staticClass:"social-link"},[i("a",{attrs:{href:"https://github.com/alessandropolverino",target:"_blank"}},[t._v("GitHub")])]),i("li",{staticClass:"social-link"},[i("a",{attrs:{href:"https://www.facebook.com/alessandro.polverino.77",target:"_blank"}},[t._v("Facebook")])])])]),i("div",{staticClass:"column is-a-third has-text-centered coding-column",attrs:{id:"coding-svg-column"}},[i("img",{staticStyle:{height:"30vh"},attrs:{src:a("6988"),alt:"coding man"}})]),i("div",{staticClass:"column coding-column"},[i("ul",{staticClass:"social-links"},[i("li",{staticClass:"social-link"},[i("a",{attrs:{href:"https://www.instagram.com/alessandro__polverino/",target:"_blank"}},[t._v("Instagram")])]),i("li",{staticClass:"social-link"},[i("a",{attrs:{href:"mailto:alessandropolverino01@gmail.com",target:"_blank"}},[t._v("Email")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns is-vcentered is-hidden-tablet",attrs:{id:"coding-container"}},[i("div",{staticClass:"column is-a-third has-text-centered coding-column",attrs:{id:"coding-svg-column"}},[i("img",{staticStyle:{height:"30vh"},attrs:{src:a("6988"),alt:"coding man"}})]),i("div",{staticClass:"column coding-column"},[i("ul",{staticClass:"social-links"},[i("li",{staticClass:"social-link"},[i("a",{attrs:{href:"https://github.com/alessandropolverino",target:"_blank"}},[t._v("GitHub")])]),i("li",{staticClass:"social-link"},[i("a",{attrs:{href:"mailto:alessandropolverino01@gmail.com",target:"_blank"}},[t._v("Email")])])])]),i("div",{staticClass:"column coding-column"},[i("ul",{staticClass:"social-links"},[i("li",{staticClass:"social-link"},[i("a",{attrs:{href:"https://www.instagram.com/alessandro__polverino/",target:"_blank"}},[t._v("Instagram")])]),i("li",{staticClass:"social-link"},[i("a",{attrs:{href:"https://www.facebook.com/alessandro.polverino.77",target:"_blank"}},[t._v("Facebook")])])])])])}],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-container"},[t._m(0),a("projBoxes")],1)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-narrow has-text-centered"},[a("h1",{staticClass:"title section-title"},[t._v("PROGETTI")])])])}],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-multiline is-centered"},t._l(t.progetti,(function(t,e){return a("div",{key:e,staticClass:"column is-one-quarter-desktop is-one-third-tablet"},[a("Box",{attrs:{name:t.name,vlinkBool:t.vlinkBool,link:t.link,image:t.image}})],1)})),0)},x=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.vlinkBool?a("div",[a("router-link",{attrs:{to:t.link}},[a("div",{staticClass:"column box preview is-flex",staticStyle:{color:"white"},style:{backgroundImage:"url("+t.image+")"}},[a("div",{staticClass:"preview-name"},[t._v(t._s(t.name))])])])],1):a("div",[a("a",{attrs:{href:t.link,target:"_blank"}},[a("div",{staticClass:"column box preview is-flex",staticStyle:{color:"white"},style:{backgroundImage:"url("+t.image+")"}},[a("div",{staticClass:"preview-name"},[t._v(t._s(t.name))])])])])])},E=[],j={name:"Box",props:{name:String,vlinkBool:Boolean,link:String,image:String},data:function(){return{}}},S=j,O=Object(u["a"])(S,y,E,!1,null,null,null),B=O.exports,R={name:"projBoxes",data:function(){return{progetti:[{name:"Finger Culture",vlinkBool:!0,link:"/fingerculture",image:"https://i.imgur.com/4YqpKYT.jpg"}]}},components:{Box:B}},$=R,F=Object(u["a"])($,w,x,!1,null,null,null),I=F.exports,A={name:"projects",components:{projBoxes:I}},P=A,z=Object(u["a"])(P,C,k,!1,null,null,null),T=z.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-container"},[t._m(0),a("espBoxes")],1)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-narrow has-text-centered"},[a("h1",{staticClass:"title section-title"},[t._v("ESPERIENZE")])])])}],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-multiline is-centered"},t._l(t.esperienze,(function(t,e){return a("div",{key:e,staticClass:"column is-one-quarter-desktop is-one-third-tablet"},[a("Box",{attrs:{name:t.name,vlinkBool:t.vlinkBool,link:t.link,image:t.image}})],1)})),0)},G=[],N={name:"projBoxes",data:function(){return{esperienze:[{name:"Radiofonia - Web radio de Sanctis",vlinkBool:!0,link:"/webradio",image:"https://i.imgur.com/f491n45.jpg"}]}},components:{Box:B}},U=N,H=Object(u["a"])(U,M,G,!1,null,null,null),L=H.exports,W={name:"experiences",components:{espBoxes:L}},J=W,V=Object(u["a"])(J,q,D,!1,null,null,null),Y=V.exports,Z=(a("d3b7"),a("96cf"),a("1da1")),X=window.popmotion,Q=X.styler,K=X.keyframes;function tt(t){return new Promise((function(e){return setTimeout(e,t)}))}function et(t,e,a){return at.apply(this,arguments)}function at(){return at=Object(Z["a"])(regeneratorRuntime.mark((function t(e,a,i){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=0;case 1:if(!(s<e.length)){t.next=10;break}return i[0].innerText=e[s],n=Q(i[0]),K({values:[{y:-20,opacity:0},{y:0,opacity:1},{y:0,opacity:1},{y:20,opacity:0}],times:[0,.25,.75,1],duration:a}).start({update:n.set}),t.next=7,tt(a);case 7:s++,t.next=1;break;case 10:et(e,a,i);case 11:case"end":return t.stop()}}),t)}))),at.apply(this,arguments)}var it={name:"Index",components:{projects:T,experiences:Y},data:function(){return{words:["Junior Full Stack Web Developer","Communicator","Amatorial Video Editor"]}},mounted:function(){var t=document.getElementsByClassName("v-sliding-text");et(this.words,3e3,t)}},st=it,nt=Object(u["a"])(st,_,b,!1,null,"87e89a00",null),rt=nt.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container",staticStyle:{"margin-top":"5vh","margin-bottom":"10vh"}},[a("h1",{staticClass:"title fc-title has-text-centered"},[t._v("Finger Culture")])]),a("div",{staticClass:"container",attrs:{id:"fc-description"}},[a("h1",{staticClass:"subtitle has-text-centered"},[t._v(" Siete tra quelli che stanno sempre facendo qualcosa e non hanno mai tempo? "),a("br"),t._v("Con finger culture bastano 5 minuti per imparare una cosa nuova! ")])]),a("div",{staticClass:"container",staticStyle:{"margin-top":"6vh"},attrs:{id:"segui-text"}},[a("h1",{staticClass:"subtitle has-text-centered",staticStyle:{"font-size":"2rem","font-weight":"600"}},[t._v("Segui su:")])]),a("div",{staticClass:"columns is-multiline is-centered has-text-centered social-columns",staticStyle:{margin:"3vh 0 0 0"}},[a("a",{attrs:{href:"spotify:show:0yqraePHnqMNX0jac6F1L8",target:"_blank"}},[a("div",{staticClass:"column is-narrow podcast-social"},[a("h1",{staticClass:"subtitle social-name"},[t._v("Spotify")]),a("figure",{staticClass:"image is-128x128"},[a("img",{attrs:{src:"https://i.imgur.com/m077ahS.png"}})])])]),a("a",{attrs:{href:"https://www.podchaser.com/podcasts/finger-culture-985780",target:"_blank"}},[a("div",{staticClass:"column is-narrow podcast-social"},[a("h1",{staticClass:"subtitle social-name"},[t._v("Podcahser")]),a("figure",{staticClass:"image is-128x128"},[a("img",{attrs:{src:"https://i.imgur.com/gpOICaz.png"}})])])]),a("a",{attrs:{href:"https://podcasts.apple.com/us/podcast/finger-culture/id1496548130?uo=4",target:"_blank"}},[a("div",{staticClass:"column is-narrow podcast-social"},[a("h1",{staticClass:"subtitle social-name"},[t._v("Apple Podcasts")]),a("figure",{staticClass:"image is-128x128"},[a("img",{attrs:{src:"https://i.imgur.com/0CUxGRR.png"}})])])]),a("a",{attrs:{href:"https://www.spreaker.com/show/finger-culture",target:"_blank"}},[a("div",{staticClass:"column is-narrow podcast-social"},[a("h1",{staticClass:"subtitle social-name"},[t._v("Spreaker")]),a("figure",{staticClass:"image is-128x128"},[a("img",{attrs:{src:"https://i.imgur.com/q2XaQFk.png"}})])])]),a("a",{attrs:{href:"https://www.google.com/podcasts?feed=aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDE5ODc3NC9lcGlzb2Rlcy9mZWVk",target:"_blank"}},[a("div",{staticClass:"column is-narrow podcast-social"},[a("h1",{staticClass:"subtitle social-name"},[t._v("Google Podcasts")]),a("figure",{staticClass:"image is-128x128"},[a("img",{attrs:{src:"https://i.imgur.com/1QjhcH4.png"}})])])])])])}],ct={name:"FingerCulture"},ut=ct,mt=(a("1ef7"),Object(u["a"])(ut,ot,lt,!1,null,null,null)),dt=mt.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container",staticStyle:{"margin-top":"3vh"},attrs:{id:"title-container"}},[i("h1",{staticClass:"title has-text-centered"},[t._v("Web Radio")])]),i("div",{staticClass:"columns"},[i("div",{staticClass:"column media-container"},[i("video",{attrs:{src:a("6c1d"),autoplay:"",loop:""}}),i("p",{staticClass:"media-subtitle"},[t._v("DIRETTA RADIO AL FRU 2019 - Roma")])]),i("div",{staticClass:"column container has-text-centered text-container"},[i("p",{staticClass:"subtitle"},[t._v(" Le attività di radiofonia che ho svolto mi hanno portato a vivere esperienze magnifiche, a partire dal "),i("a",{staticStyle:{color:"#4c4981 !important"},attrs:{href:"https://www.raduni.org/format/eventi-raduni/fru-festival-delle-radio-universitarie/",target:"_blank"}},[t._v("FRU")]),t._v("(edizione 2019), tenutosi a Roma, in qualità di "),i("a",{staticStyle:{color:"#4c4981 !important"},attrs:{href:"\n      https://www.desanctiswebradio.net/post/festival-radio-universitarie-2019-roma-3",target:"_blank"}},[t._v("rappresentante della radio scolastica")]),t._v(". ")])])]),i("div",{staticClass:"columns"},[i("div",{staticClass:"column media-container"},[i("img",{attrs:{src:"https://i.imgur.com/EDxFY22.jpg",alt:"Diretta dal MEC"}}),i("p",{staticClass:"media-subtitle"},[t._v("DIRETTA RADIO AL MEC - SALERNO")])]),i("div",{staticClass:"column container has-text-centered text-container"},[i("p",{staticClass:"subtitle"},[t._v(" Un'altra esperienza formativa è stata quella del "),i("a",{staticStyle:{color:"#4c4981 !important"},attrs:{href:"https://www.facebook.com/mecxsocial/",target:"_blank"}},[t._v("MEC")]),t._v(", che mi ha permesso di entrare in contatto con molte persone, tutte legate al mondo del digitale ed intenzionate a renderlo migliore: partecipare come referente della radio ufficiale dell'evento "),i("a",{staticStyle:{color:"#4c4981 !important"},attrs:{href:"https://www.instagram.com/p/B369fkkBJ1p/?utm_source=ig_web_copy_link",target:"_blank"}},[t._v("(ecco un video)")]),t._v(" è stato stupendo! ")])])]),i("div",{staticClass:"columns"},[i("div",{staticClass:"column media-container"},[i("img",{attrs:{src:"https://i.imgur.com/cw6CV3C.jpg",alt:"Futura genova 2019"}}),i("p",{staticClass:"media-subtitle"},[t._v("FUTURA GENOVA 2019")])]),i("div",{staticClass:"column container has-text-centered text-container"},[i("p",{staticClass:"subtitle"},[t._v(' Senza dubbio spettacolare è stata la partecipazione al festival FUTURA Genova 2019, che ci ha visto vincitori nazionali nella sezione "Buone pratiche scolastiche", oltre che radio ufficiale dell\'evento. ')])])])])}],ft={name:"WebRadio"},ht=ft,gt=(a("9915"),Object(u["a"])(ht,pt,vt,!1,null,"17ff9fea",null)),_t=gt.exports;i["a"].use(g["a"]);var bt=new g["a"]({routes:[{path:"/",name:"Index",component:rt},{path:"/fingerculture",name:"FingerCulture",component:dt},{path:"/webradio",name:"WebRadio",component:_t}],scrollBehavior:function(){return{x:0,y:0}}});i["a"].config.productionTip=!1,new i["a"]({router:bt,render:function(t){return t(h)},watch:{$route:function(t){"Index"==t.name&&this.$router.go()}}}).$mount("#app")},6988:function(t,e,a){t.exports=a.p+"img/coding.3f74be73.svg"},"6c1d":function(t,e,a){t.exports=a.p+"media/fru.643aee9d.mp4"},"85ec":function(t,e,a){},9915:function(t,e,a){"use strict";var i=a("3c5e"),s=a.n(i);s.a},b0fd:function(t,e,a){},b17e:function(t,e,a){t.exports=a.p+"img/AP.09cabed4.svg"}});
//# sourceMappingURL=app.2f7ab073.js.map