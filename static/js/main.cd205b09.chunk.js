(this["webpackJsonpkaraoke-front"]=this["webpackJsonpkaraoke-front"]||[]).push([[0],{184:function(e,t,n){},185:function(e,t,n){},202:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(23),i=n.n(r),s=n(88),o=n(33),u=n(32),d=n(13),l=n(5),j=n(11),b=n.n(j),f=n(25),g=n(79),p=n(34),O=n.n(p),m=new function e(t){var n=this;Object(g.a)(this,e),this.instance=void 0,this.get=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.instance.get(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",Promise.reject());case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),console.log("baseURL",t),this.instance=O.a.create({baseURL:t})}("https://karaoke-back.herokuapp.com/"),h=n(6),v=n(27),x=n(49),y=n(80),_=n.n(y),k=n(3),C=function(e){var t=e.imageSrc,n=e.title,c=e.focused,a=e.id,r=e.index,i=e.onSongChoose,s=Object(l.f)();return Object(k.jsx)(h.Card,{focused:c,className:_.a.song_card,scaleOnFocus:!0,onClick:function(){s.push("/song/".concat(a)),i()},children:Object(k.jsxs)(h.CardBody,{children:[Object(k.jsx)(h.CardMedia,{src:t,alt:n,ratio:"1/1"}),Object(k.jsx)(h.CardContent,{children:Object(k.jsxs)(h.CardHeadline2,{children:[r,".\xa0",n]})})]})})};C.defaultProps={};var S=C,w=n(8),R=(n(58),n(35));function E(e){var t=Object(w.a)({},e);return{actions:Object.keys(t).reduce((function(e,t){return Object(w.a)(Object(w.a)({},e),{},Object(R.a)({},t,(n=t,function(e){return{type:n,payload:e}})));var n}),{}),reducer:function(e,n){return t[n.type](e,n.payload)}}}var N=E({setSongs:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{songs:t})}}),P=N.actions,L=N.reducer,B=Object(c.memo)((function(e){var t=e.dispatch,n=e.appState,a=e.assistantRef,r=n.songs,i=P.setSongs;Object(c.useEffect)((function(){(function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/songs");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){var n=e.data;t(i(n))}))}),[]);var s=Object(x.isSberBox)(),o=s?300:30,u=s?1500:150,l=Object(h.useRemoteHandlers)({initialIndex:0,axis:"x",delay:o,longDelay:u,min:0,max:r.length-1}),j=Object(d.a)(l,2),g=j[0],p=j[1],O=function(){a&&a.sendData({action:{action_id:"songChosen"}})};return Object(k.jsx)(h.Container,{children:Object(k.jsx)(h.CarouselGridWrapper,{children:Object(k.jsx)(h.Carousel,{as:v.Row,axis:"x",index:g,animatedScrollByIndex:!0,scrollSnapType:"proximity",detectActive:!0,detectThreshold:.5,onIndexChange:function(e){p(e)},paddingStart:"50%",paddingEnd:"50%",style:{paddingTop:"5rem",paddingBottom:"2rem"},scrollAlign:"center",children:r.map((function(e,t){return Object(k.jsx)(h.CarouselCol,{scrollSnapAlign:"start",size:4,children:Object(k.jsx)(S,{index:t+1,title:e.title,focused:t===g,imageSrc:e.image_link,id:e._id,onSongChoose:O})},"item:".concat(t))}))})})})})),F=(n(184),n(85)),I=(n(185),n.p+"static/media/volume.c9c7706f.svg"),A="interaction";function T(e){Object(c.useEffect)((function(){return window.addEventListener(A,e),function(){window.removeEventListener(A,e)}}),[e])}var D={song:{audio_link:"",image_link:"",lyrics:"",title:"",_id:""},isLoading:!0,isPlaying:!1,volume:.5},H=E({setSong:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{song:t})},setPlayingFlag:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{isPlaying:t})},setLoadingFlag:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{isLoading:t})},setVolume:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{volume:t})}}),J=H.actions,G=H.reducer,M=function(e){var t=e.assistantRef,n=Object(l.g)().songId,a=Object(c.useRef)(null),r=Object(c.useRef)(null),i=Object(c.useRef)(),s=J.setSong,o=J.setPlayingFlag,u=J.setLoadingFlag,j=J.setVolume,g=Object(c.useReducer)(G,D),p=Object(d.a)(g,2),O=p[0],v=p[1],x=O.song,y=O.isPlaying,_=O.isLoading,C=O.volume,S=function(){a.current&&(a.current.play(),v(o(!0)))},w=function(){a.current&&(a.current.pause(),v(o(!1)))};T((function(e){var t=e.detail.type;"playAgain"===t?function(){var e;v(o(!0)),a.current&&(a.current.currentTime=0,null===(e=a.current)||void 0===e||e.play())}():"pausePlaying"===t?w():"startPlaying"===t&&S()})),Object(c.useEffect)((function(){v(u(!0)),function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(t=n,m.get("/songs/".concat(t))));case 1:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(e){var t=e.data;v(s(t))})).finally((function(){v(u(!1)),S()}))}),[]);var R=x.audio_link,E=x.image_link,N=x.lyrics;Object(c.useEffect)((function(){a.current&&r.current&&(i.current=new F.a(r.current,a.current),i.current.setLyrics(N.replaceAll("\\n","\n")))}),[x]);var P=y?w:S,L=y?"pause_button":"play_button",B={background:"url(".concat(E,") center / cover no-repeat")};return Object(k.jsxs)("div",{className:"song_page",children:[_?Object(k.jsx)("div",{className:"spinner_wrapper",children:Object(k.jsx)(h.Spinner,{})}):Object(k.jsxs)("div",{className:"controls",children:[Object(k.jsxs)("div",{className:"volume",children:[Object(k.jsx)(h.Stepper,{showRemove:!0,value:10*C,step:1,min:0,max:10,disabled:!1,onChange:function(e){if(a.current){var t=e/10;a.current.volume=t,v(j(t))}},onRemove:function(){},className:"volume_control"}),Object(k.jsx)("img",{className:"volume_icon",src:I,alt:"volume",width:20,height:20})]}),Object(k.jsxs)(h.Card,{tabIndex:-1,outlined:!0,className:"image_container",onClick:P,children:[Object(k.jsx)("div",{className:"song_image",style:B}),Object(k.jsx)("div",{className:L})]})]}),Object(k.jsx)(h.Card,{className:"lyrics_card",children:Object(k.jsx)(h.CardBody,{children:Object(k.jsxs)(h.CardContent,{children:[R&&Object(k.jsx)("audio",{id:"audio-1",ref:a,onEnded:function(){v(o(!1)),t&&t.sendData({action:{action_id:"songEnded"}})},children:Object(k.jsx)("source",{src:R,type:"audio/mpeg"})}),Object(k.jsx)("div",{id:"lyrics-1",className:"rabbit-lyrics","data-media":"#audio-1",ref:r,"data-view-mode":"mini",children:N})]})})})]})};M.defaultProps={};var U=M,V=n(89);var z,K=function(){var e,t,n=Object(c.useReducer)(L,{songs:[]}),a=Object(d.a)(n,2),r=a[0],i=a[1],s=Object(c.useRef)(),o=Object(c.useRef)(),u=Object(l.f)();Object(c.useEffect)((function(){var e;o.current=(e=function(){return s.current},Object(V.a)({getState:e})),o.current.on("data",(function(e){var t=e.action,n=e.interaction,c=(e.navigation,e.system);"BACK"!==(null===c||void 0===c?void 0:c.command)?n?function(e){dispatchEvent(new CustomEvent(A,{detail:e}))}(n):t&&i(t):u.goBack()}))}),[]),T((function(e){var t,n=e.detail,c=n.type,a=n.payload;"chooseSong"===c&&(t=a,u.push("/song/".concat(t)))})),Object(c.useEffect)((function(){s.current={item_selector:{items:r.songs.map((function(e,t){var n=e._id;e.title;return{number:t+1,id:n,title:"".concat(t+1)}}))}}}),[r]);var j=Object(l.h)("/song/:songId"),b=Boolean(j),f=null===j||void 0===j||null===(e=j.params)||void 0===e?void 0:e.songId,g=null===(t=r.songs.find((function(e){return e._id===f})))||void 0===t?void 0:t.title;return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(h.Container,{className:"container",children:[b?Object(k.jsx)(h.Header,{back:!0,title:g||"\u041f\u0435\u0441\u043d\u044f",onBackClick:function(){u.push("/")}}):Object(k.jsx)(h.Header,{back:!1,title:"\u041a\u0430\u0440\u0430\u043e\u043a\u0435"}),Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{path:"/song/:songId",component:U,children:Object(k.jsx)(U,{dispatch:i,appState:r,assistantRef:o.current})}),Object(k.jsx)(l.a,{path:"/",exact:!0,component:B,children:Object(k.jsx)(B,{dispatch:i,appState:r,assistantRef:o.current})})]})]})})},W=n(87),Y=n(1),q=n(2),Q=Object(Y.createGlobalStyle)(z||(z=Object(W.a)(["\n    html:root {\n        min-height: 100vh;\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n    }\n"])),q.text,q.background,q.gradient),X=Object(Y.createGlobalStyle)(o.darkSber),Z=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Q,{}),Object(k.jsx)(X,{})]})},$=(n(202),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))});i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsxs)(s.DeviceThemeProvider,{theme:o.lightJoy,children:[Object(k.jsx)(Z,{}),Object(k.jsx)(u.a,{children:Object(k.jsx)(K,{})})]})}),document.getElementById("root")),$()},80:function(e,t,n){e.exports={song_card:"styles_song_card__JdSnD",song_card__img:"styles_song_card__img__1-ujY"}}},[[204,1,2]]]);
//# sourceMappingURL=main.cd205b09.chunk.js.map