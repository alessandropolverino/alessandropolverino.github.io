(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(t,e,n){var content=n(167);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("2e107364",content,!0,{sourceMap:!1})},160:function(t,e,n){t.exports=n.p+"img/3f74be7.svg"},166:function(t,e,n){"use strict";var l=n(159);n.n(l).a},167:function(t,e,n){(e=n(44)(!1)).push([t.i,".words-vslide{position:relative;font-size:1.3rem;border:1px solid transparent}.words-vslide span{position:absolute;opacity:0;top:-100%;-webkit-animation:vslide 9s infinite;animation:vslide 9s infinite;white-space:nowrap}.words-vslide span:first-child{-webkit-animation-delay:0s;animation-delay:0s}.words-vslide span:nth-child(2){-webkit-animation-delay:3s;animation-delay:3s}.words-vslide span:nth-child(3){-webkit-animation-delay:6s;animation-delay:6s}.words-vslide-container-center{width:100%;height:1.3rem;display:flex;justify-content:center}.words-vslide-container-center .words-vslide{width:500px}.words-vslide-container-center .words-vslide span{left:0;right:0}@-webkit-keyframes vslide{0%{opacity:0;top:-100%}16.66667%{opacity:1;top:0}33.33333%{opacity:0;top:100%}to{opacity:0;top:100%}}@keyframes vslide{0%{opacity:0;top:-100%}16.66667%{opacity:1;top:0}33.33333%{opacity:0;top:100%}to{opacity:0;top:100%}}",""]),t.exports=e},168:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-centered landing",attrs:{id:"home"}},[e("div",{staticClass:"column is-half has-text-centered"},[e("div",{staticClass:"container",staticStyle:{"margin-top":"10%"}},[e("h1",{staticClass:"title has-text-white has-text-centered",staticStyle:{"font-size":"60px","font-weight":"900"},attrs:{id:"myname"}},[this._v("Hi, I'm Alessandro")]),this._v(" "),e("div",{staticClass:"words-vslide-container-center"},[e("span",{staticClass:"words-vslide"},[e("span",[this._v("Junior Full Stack Web Developer")]),this._v(" "),e("span",[this._v("Communicator")]),this._v(" "),e("span",[this._v("Amatorial Video Editor")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"columns is-vcentered is-hidden-mobile",attrs:{id:"coding-container"}},[l("div",{staticClass:"column coding-column"},[l("ul",{staticClass:"social-links"},[l("li",{staticClass:"social-link"},[l("a",{attrs:{href:"https://github.com/alessandropolverino",target:"_blank"}},[t._v("GitHub")])]),t._v(" "),l("li",{staticClass:"social-link"},[l("a",{attrs:{href:"https://www.facebook.com/alessandro.polverino.77",target:"_blank"}},[t._v("Facebook")])])])]),t._v(" "),l("div",{staticClass:"column is-a-third has-text-centered coding-column",attrs:{id:"coding-svg-column"}},[l("img",{staticStyle:{height:"30vh"},attrs:{src:n(160),alt:"coding man"}})]),t._v(" "),l("div",{staticClass:"column coding-column"},[l("ul",{staticClass:"social-links"},[l("li",{staticClass:"social-link"},[l("a",{attrs:{href:"https://www.instagram.com/alessandro__polverino/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),l("li",{staticClass:"social-link"},[l("a",{attrs:{href:"mailto:alessandropolverino01@gmail.com",target:"_blank"}},[t._v("Email")])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"columns is-vcentered is-hidden-tablet",attrs:{id:"coding-container"}},[l("div",{staticClass:"column is-a-third has-text-centered coding-column",attrs:{id:"coding-svg-column"}},[l("img",{staticStyle:{height:"30vh"},attrs:{src:n(160),alt:"coding man"}})]),t._v(" "),l("div",{staticClass:"column coding-column"},[l("ul",{staticClass:"social-links"},[l("li",{staticClass:"social-link"},[l("a",{attrs:{href:"https://github.com/alessandropolverino",target:"_blank"}},[t._v("GitHub")])]),t._v(" "),l("li",{staticClass:"social-link"},[l("a",{attrs:{href:"mailto:alessandropolverino01@gmail.com",target:"_blank"}},[t._v("Email")])])])]),t._v(" "),l("div",{staticClass:"column coding-column"},[l("ul",{staticClass:"social-links"},[l("li",{staticClass:"social-link"},[l("a",{attrs:{href:"https://www.instagram.com/alessandro__polverino/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),l("li",{staticClass:"social-link"},[l("a",{attrs:{href:"https://www.facebook.com/alessandro.polverino.77",target:"_blank"}},[t._v("Facebook")])])])])])}],o={name:"Box",props:{name:String,vlinkBool:Boolean,link:String,image:String},data:function(){return{}}},r=n(14),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.vlinkBool?n("div",[n("router-link",{attrs:{to:t.link}},[n("div",{staticClass:"column box preview is-flex",staticStyle:{color:"white"},style:{backgroundImage:"url("+t.image+")"}},[n("div",{staticClass:"preview-name"},[t._v(t._s(t.name))])])])],1):n("div",[n("a",{attrs:{href:t.link,target:"_blank"}},[n("div",{staticClass:"column box preview is-flex",staticStyle:{color:"white"},style:{backgroundImage:"url("+t.image+")"}},[n("div",{staticClass:"preview-name"},[t._v(t._s(t.name))])])])])])}),[],!1,null,null,null).exports,d={name:"projBoxes",data:function(){return{progetti:[{name:"Finger Culture",vlinkBool:!0,link:"/fingerculture",image:"https://i.imgur.com/4YqpKYT.jpg"}]}},components:{Box:c}},m={name:"projects",components:{projBoxes:Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-multiline is-centered"},this._l(this.progetti,(function(t,n){return e("div",{key:n,staticClass:"column is-one-quarter-desktop is-one-third-tablet"},[e("Box",{attrs:{name:t.name,vlinkBool:t.vlinkBool,link:t.link,image:t.image}})],1)})),0)}),[],!1,null,null,null).exports}},v=Object(r.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-container"},[this._m(0),this._v(" "),e("projBoxes")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-narrow has-text-centered"},[e("h1",{staticClass:"title section-title"},[this._v("PROGETTI")])])])}],!1,null,null,null).exports,h={name:"projBoxes",data:function(){return{esperienze:[{name:"Radiofonia - Web radio de Sanctis",vlinkBool:!0,link:"/webradio",image:"https://i.imgur.com/f491n45.jpg"}]}},components:{Box:c}},_={name:"experiences",components:{espBoxes:Object(r.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-multiline is-centered"},this._l(this.esperienze,(function(t,n){return e("div",{key:n,staticClass:"column is-one-quarter-desktop is-one-third-tablet"},[e("Box",{attrs:{name:t.name,vlinkBool:t.vlinkBool,link:t.link,image:t.image}})],1)})),0)}),[],!1,null,null,null).exports}},f={name:"index",components:{projects:v,experiences:Object(r.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-container"},[this._m(0),this._v(" "),e("espBoxes")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-narrow has-text-centered"},[e("h1",{staticClass:"title section-title"},[this._v("ESPERIENZE")])])])}],!1,null,null,null).exports},computed:{},head:function(){return{title:"Alessandro Polverino - Home",meta:[{hid:"description",name:"description",content:"Alessandro Polverino's portfolio site"}]}},asyncData:function(){},methods:{},mounted:function(){}},k=(n(166),Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[this._m(0),this._v(" "),this._m(1),this._v(" "),this._m(2),this._v(" "),e("projects",{staticClass:"portfolio-section",attrs:{id:"projects"}}),this._v(" "),e("experiences",{staticClass:"portfolio-section",attrs:{id:"experiences"}})],1)}),l,!1,null,null,null));e.default=k.exports}}]);