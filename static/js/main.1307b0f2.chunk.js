(this["webpackJsonpkaraoke-front"]=this["webpackJsonpkaraoke-front"]||[]).push([[0],{184:function(e,t,n){},185:function(e,t,n){},202:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(23),s=n.n(r),i=n(88),o=n(33),u=n(32),l=n(13),d=n(5),j=n(11),b=n.n(j),g=n(25),f=n(79),O=n(34),p=n.n(O),m=new function e(t){var n=this;Object(f.a)(this,e),this.instance=void 0,this.get=function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.instance.get(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",Promise.reject());case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),console.log("baseURL",t),this.instance=p.a.create({baseURL:t})}("https://karaoke-back.herokuapp.com/"),h=n(6),v=n(27),x=n(49),y=n(80),_=n.n(y),k=n(3),C=function(e){var t=e.imageSrc,n=e.title,c=e.focused,a=e.id,r=e.index,s=Object(d.f)();return Object(k.jsx)(h.Card,{focused:c,className:_.a.song_card,scaleOnFocus:!0,onClick:function(){s.push("/song/".concat(a))},children:Object(k.jsxs)(h.CardBody,{children:[Object(k.jsx)(h.CardMedia,{src:t,alt:n,ratio:"1/1"}),Object(k.jsx)(h.CardContent,{children:Object(k.jsxs)(h.CardHeadline2,{children:[r,".\xa0",n]})})]})})};C.defaultProps={};var S=C,w=n(8),R=(n(58),n(35));function N(e){var t=Object(w.a)({},e);return{actions:Object.keys(t).reduce((function(e,t){return Object(w.a)(Object(w.a)({},e),{},Object(R.a)({},t,(n=t,function(e){return{type:n,payload:e}})));var n}),{}),reducer:function(e,n){return t[n.type](e,n.payload)}}}var B=N({setSongs:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{songs:t})}}),P=B.actions,F=B.reducer,I=Object(c.memo)((function(e){var t=e.dispatch,n=e.appState.songs,a=P.setSongs;Object(c.useEffect)((function(){(function(){var e=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/songs");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){var n=e.data;t(a(n))}))}),[]);var r=Object(x.isSberBox)(),s=r?300:30,i=r?1500:150,o=Object(h.useRemoteHandlers)({initialIndex:0,axis:"x",delay:s,longDelay:i,min:0,max:n.length-1}),u=Object(l.a)(o,2),d=u[0],j=u[1];return Object(k.jsx)(h.Container,{children:Object(k.jsx)(h.CarouselGridWrapper,{children:Object(k.jsx)(h.Carousel,{as:v.Row,axis:"x",index:d,animatedScrollByIndex:!0,scrollSnapType:"proximity",detectActive:!0,detectThreshold:.5,onIndexChange:function(e){j(e)},paddingStart:"50%",paddingEnd:"50%",style:{paddingTop:"5rem",paddingBottom:"2rem"},scrollAlign:"center",children:n.map((function(e,t){return Object(k.jsx)(h.CarouselCol,{scrollSnapAlign:"start",size:4,children:Object(k.jsx)(S,{index:t+1,title:e.title,focused:t===d,imageSrc:e.image_link,id:e._id},"item:".concat(t))})}))})})})})),L=(n(184),n(85)),E=(n(185),n.p+"static/media/volume.c9c7706f.svg"),A={song:{audio_link:"",image_link:"",lyrics:"",title:"",_id:""},isLoading:!0,isPlaying:!1,volume:.5},T=N({setSong:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{song:t})},setPlayingFlag:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{isPlaying:t})},setLoadingFlag:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{isLoading:t})},setVolume:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{volume:t})}}),D=T.actions,H=T.reducer,J=function(e){var t=e.assistantRef,n=Object(d.g)().songId,a=Object(c.useRef)(null),r=Object(c.useRef)(null),s=Object(c.useRef)(),i=D.setSong,o=D.setPlayingFlag,u=D.setLoadingFlag,j=D.setVolume,f=Object(c.useReducer)(H,A),O=Object(l.a)(f,2),p=O[0],v=O[1],x=p.song,y=p.isPlaying,_=p.isLoading,C=p.volume;Object(c.useEffect)((function(){v(u(!0)),function(){var e=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(t=n,m.get("/songs/".concat(t))));case 1:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(e){var t=e.data;v(i(t))})).finally((function(){v(u(!1))}))}),[]);var S=x.audio_link,w=x.image_link,R=x.lyrics;Object(c.useEffect)((function(){a.current&&r.current&&(s.current=new L.a(r.current,a.current),s.current.setLyrics(R.replaceAll("\\n","\n")))}),[x]);var N=y?function(){a.current&&(a.current.pause(),v(o(!1)))}:function(){a.current&&(a.current.play(),v(o(!0)))},B=y?"pause_button":"play_button",P={background:"url(".concat(w,") center / cover no-repeat")};return Object(k.jsxs)("div",{className:"song_page",children:[_?Object(k.jsx)("div",{className:"spinner_wrapper",children:Object(k.jsx)(h.Spinner,{})}):Object(k.jsxs)("div",{className:"controls",children:[Object(k.jsxs)("div",{className:"volume",children:[Object(k.jsx)(h.Stepper,{showRemove:!0,value:10*C,step:1,min:0,max:10,disabled:!1,onChange:function(e){if(a.current){var t=e/10;a.current.volume=t,v(j(t))}},onRemove:function(){},className:"volume_control"}),Object(k.jsx)("img",{className:"volume_icon",src:E,alt:"volume",width:20,height:20})]}),Object(k.jsxs)(h.Card,{tabIndex:-1,outlined:!0,className:"image_container",onClick:N,children:[Object(k.jsx)("div",{className:"song_image",style:P}),Object(k.jsx)("div",{className:B})]})]}),Object(k.jsx)(h.Card,{className:"lyrics_card",children:Object(k.jsx)(h.CardBody,{children:Object(k.jsxs)(h.CardContent,{children:[S&&Object(k.jsx)("audio",{id:"audio-1",ref:a,onEnded:function(){v(o(!1)),console.log("heeel"),t&&(console.log("hello"),t.sendData({action:{action_id:"songEnded"}}))},children:Object(k.jsx)("source",{src:S,type:"audio/mpeg"})}),Object(k.jsx)("div",{id:"lyrics-1",className:"rabbit-lyrics","data-media":"#audio-1",ref:r,"data-view-mode":"mini",children:R})]})})})]})};J.defaultProps={};var G=J,M=n(89);var U,V=function(){var e,t,n=Object(c.useReducer)(F,{songs:[]}),a=Object(l.a)(n,2),r=a[0],s=a[1],i=Object(c.useRef)(),o=Object(c.useRef)(),u=Object(d.f)();Object(c.useEffect)((function(){var e;o.current=(e=function(){return i.current},Object(M.a)({getState:e})),o.current.on("data",(function(e){var t,n=e.action,c=e.interaction,a=(e.navigation,e.system);if("BACK"===(null===a||void 0===a?void 0:a.command)&&u.goBack(),c&&(null===c||void 0===c?void 0:c.payload))return t=c.payload,void u.push("/song/".concat(t));n&&s(n)}))}),[]),Object(c.useEffect)((function(){i.current={item_selector:{items:r.songs.map((function(e,t){var n=e._id;e.title;return{number:t+1,id:n,title:"".concat(t+1)}}))}}}),[r]);var j=Object(d.h)("/song/:songId"),b=Boolean(j),g=null===j||void 0===j||null===(e=j.params)||void 0===e?void 0:e.songId,f=null===(t=r.songs.find((function(e){return e._id===g})))||void 0===t?void 0:t.title;return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(h.Container,{className:"container",children:[b?Object(k.jsx)(h.Header,{back:!0,title:f||"\u041f\u0435\u0441\u043d\u044f",onBackClick:function(){u.push("/")}}):Object(k.jsx)(h.Header,{back:!1,title:"\u041a\u0430\u0440\u0430\u043e\u043a\u0435"}),Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{path:"/song/:songId",component:G,children:Object(k.jsx)(G,{dispatch:s,appState:r,assistantRef:o.current})}),Object(k.jsx)(d.a,{path:"/",exact:!0,component:I,children:Object(k.jsx)(I,{dispatch:s,appState:r})})]})]})})},z=n(87),K=n(1),W=n(2),Y=Object(K.createGlobalStyle)(U||(U=Object(z.a)(["\n    html:root {\n        min-height: 100vh;\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n    }\n"])),W.text,W.background,W.gradient),q=Object(K.createGlobalStyle)(o.darkSber),Q=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Y,{}),Object(k.jsx)(q,{})]})},X=(n(202),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))});s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsxs)(i.DeviceThemeProvider,{theme:o.lightJoy,children:[Object(k.jsx)(Q,{}),Object(k.jsx)(u.a,{children:Object(k.jsx)(V,{})})]})}),document.getElementById("root")),X()},80:function(e,t,n){e.exports={song_card:"styles_song_card__JdSnD",song_card__img:"styles_song_card__img__1-ujY"}}},[[204,1,2]]]);
//# sourceMappingURL=main.1307b0f2.chunk.js.map