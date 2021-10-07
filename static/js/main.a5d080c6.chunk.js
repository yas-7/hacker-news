(this.webpackJsonpavi=this.webpackJsonpavi||[]).push([[0],{19:function(e,t,n){e.exports={info:"Meta_info__12mF3",author:"Meta_author__1mo2x",date:"Meta_date__7j_Yj",score:"Meta_score__31DnL"}},20:function(e,t,n){e.exports={wrapper:"ListItem_wrapper__3lTIy",link:"ListItem_link__2MI1V",title:"ListItem_title__3u-_I",loadingLine:"ListItem_loadingLine__280Ar",pulse:"ListItem_pulse__odNiy"}},21:function(e,t,n){e.exports={list:"NewsList_list__xIoKS",title:"NewsList_title__1gAwg",btn:"NewsList_btn__2lM2w"}},23:function(e,t,n){e.exports={wrapper:"CommentsBlock_wrapper__1UbG0",header:"CommentsBlock_header__IEM52",title:"CommentsBlock_title__1vwP9"}},24:function(e,t,n){e.exports={wrapper:"CircleSpinner_wrapper__2M_I_",spinner:"CircleSpinner_spinner__1JX90",rotate:"CircleSpinner_rotate__5cdNN",path:"CircleSpinner_path__1yrU8",dash:"CircleSpinner_dash__16YAe"}},25:function(e,t,n){e.exports={comment:"Comment_comment__2g8Ee",text:"Comment_text__3SjaC",more:"Comment_more__214dr"}},26:function(e,t,n){e.exports={title:"NewsDetail_title__3Y6Q0",link:"NewsDetail_link__OgRKD",buttonBack:"NewsDetail_buttonBack__1E27-"}},32:function(e,t,n){e.exports={wrapper:"ErrorMessage_wrapper__3s_fR"}},34:function(e,t,n){e.exports={spinner:"Spinner_spinner__3k70y",load1:"Spinner_load1__3x6jY"}},35:function(e,t,n){e.exports={button:"Button_button__2cZ5P"}},37:function(e,t,n){e.exports={list:"Comments_list__3Y2xw"}},38:function(e,t,n){e.exports={App:"App_App__16ZpL"}},47:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(16),s=n.n(c),a=(n(47),n(17)),o=n(4),l=n(31),d=n(8),u=Object(l.a)({reducerPath:"newsApi",baseQuery:Object(d.d)({baseUrl:"https://hacker-news.firebaseio.com/v0/"}),endpoints:function(e){return{getNewStories:e.query({query:function(){return"newstories.json"}}),getItemsById:e.query({query:function(e){return"item/".concat(e,".json")}})}}}),j=u.useGetNewStoriesQuery,h=u.useGetItemsByIdQuery,b=function(e){var t=new Date(1e3*e),n=(new Date).toDateString()===t.toDateString()?"today at":t.toLocaleDateString("en-US",{month:"short",day:"2-digit"}),r=t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});return"".concat(n," ").concat(r)},m=n(19),p=n.n(m),x=n(1),_=function(e){var t=e.by,n=e.time,r=e.score;return Object(x.jsxs)("div",{className:p.a.info,children:[Object(x.jsx)("span",{className:p.a.author,children:t}),Object(x.jsx)("span",{className:p.a.date,children:b(n)}),r&&Object(x.jsx)("span",{className:p.a.score,children:r})]})},O=n(20),f=n.n(O),v=n(14);var g=n(32),w=n.n(g),N=function(e){var t=e.children,n=void 0===t?"Something went wrong. Please reload the page!":t;return Object(x.jsx)("div",{className:w.a.wrapper,children:n})},y=function(e){var t=e.id,n=Object(r.useRef)(),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",n=Object(r.useState)(!1),i=Object(v.a)(n,2),c=i[0],s=i[1];return Object(r.useEffect)((function(){var n=new IntersectionObserver((function(e){var t=Object(v.a)(e,1)[0];s(t.isIntersecting)}),{rootMargin:t});e.current&&n.observe(e.current);var r=e.current;return function(){n.unobserve(r)}}),[]),c}(n),c=h(t,{skip:!i}),s=c.data,o=c.isLoading,l=c.error,d=s||{},u=d.title,j=d.time,b=d.by,m=d.score;return Object(x.jsxs)("li",{ref:n,className:f.a.wrapper,children:[l&&Object(x.jsx)(N,{children:"Could not retrieve the news"}),o&&Object(x.jsx)("div",{className:f.a.loadingLine}),s&&Object(x.jsxs)(a.b,{to:"/news/".concat(t),className:f.a.link,children:[Object(x.jsx)(_,{by:b,score:m,time:j}),Object(x.jsx)("div",{className:f.a.title,children:u})]})]})},k=i.a.memo(y),S=n(34),C=n.n(S),I=function(){return Object(x.jsx)("div",{className:C.a.spinner,children:"Loading..."})},L=n(35),E=n.n(L),M=function(e){var t=e.children,n=e.onClick,r=e.disabled,i=e.className;return Object(x.jsx)("button",{className:"".concat(E.a.button," ").concat(i),onClick:n,disabled:r,children:t})},B=n(21),D=n.n(B),F=function(){var e=j(void 0,{pollingInterval:6e4}),t=e.data,n=e.error,r=e.isFetching,i=e.refetch;return Object(x.jsxs)("div",{className:D.a.wrapper,children:[Object(x.jsx)("h2",{className:D.a.title,children:"The last Hacker News"}),n&&Object(x.jsx)(N,{}),!t&&r&&Object(x.jsx)(I,{}),t&&0===t.length&&Object(x.jsx)("div",{children:"No news :("}),t&&t.length>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(M,{onClick:i,disabled:r,className:D.a.btn,children:"Manually refetch"}),Object(x.jsx)("ul",{className:D.a.list,children:t.slice(0,100).map((function(e){return Object(x.jsx)(k,{id:e},e)}))})]})]})},P=n(23),A=n.n(P),R=n(30),U=n.n(R),Y=n(36),q=n(6),G=n(24),H=n.n(G),Q=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,i=void 0===r?30:r,c=e.color,s=void 0===c?"#798e98":c;return Object(x.jsx)("div",{className:H.a.wrapper,children:Object(x.jsx)("svg",{className:H.a.spinner,viewBox:"0 0 50 50",width:n,height:i,children:Object(x.jsx)("circle",{className:H.a.path,cx:"25",cy:"25",r:"20",fill:"none",stroke:s,strokeWidth:"5"})})})},T=n(37),J=n.n(T),W=n(40),K={exited:{display:"none"},exiting:{position:"relative",height:0,overflow:"hidden",transition:"0.35s ease",transitionProperty:"height, visibility"},entering:{position:"relative",height:0,overflow:"hidden",transition:"0.35s ease",transitionProperty:"height, visibility"},entered:{display:"block"}},Z=function(e){var t=e.in,n=e.children,i=Object(r.useRef)(null);return Object(x.jsx)(W.a,{in:t,nodeRef:i,timeout:350,onEnter:function(){i.current.style.height="0"},onEntering:function(){i.current.style.height="".concat(i.current.scrollHeight,"px")},onEntered:function(){i.current.style.height=null},onExit:function(){i.current.style.height=i.current.offsetHeight+"px",i.current.offsetHeight},onExiting:function(){i.current.style.height="0"},mountOnEnter:!0,unmountOnExit:!0,children:function(e){return Object(x.jsx)("div",{ref:i,style:K[e],children:n})}})},V=n(25),X=n.n(V),$=function(e){var t=e.data,n=Object(r.useState)(!1),i=Object(v.a)(n,2),c=i[0],s=i[1],a=t||{},o=a.text,l=a.time,d=a.by,u=a.kids,j=Object(r.useMemo)((function(){return e=o,(new DOMParser).parseFromString(e,"text/html").documentElement.textContent;var e}),[o]);return Object(x.jsxs)("li",{className:X.a.comment,children:[Object(x.jsx)(_,{by:d,time:l}),Object(x.jsx)("div",{className:X.a.text,children:j}),u&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{className:X.a.more,onClick:function(){return s((function(e){return!e}))},children:c?"hide replies":"show replies..."}),Object(x.jsx)(Z,{in:c,children:Object(x.jsx)(te,{ids:u})})]})]})},z=n(58),ee=(n(56),function(e){var t=e.in,n=e.children;return Object(x.jsx)(z.a,{in:t,timeout:350,classNames:"fade",mountOnEnter:!0,unmountOnExit:!0,children:Object(x.jsx)("div",{children:n})})}),te=function(e){var t=e.ids,n=Object(q.d)(),i=Object(r.useState)(null),c=Object(v.a)(i,2),s=c[0],a=c[1],o=Object(r.useState)([]),l=Object(v.a)(o,2),d=l[0],j=l[1],h=Object(r.useState)(!1),b=Object(v.a)(h,2),m=b[0],p=b[1];return Object(r.useEffect)(Object(Y.a)(U.a.mark((function e(){var r,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=14;break}return p(!0),i=function(e){return n(u.endpoints.getItemsById.initiate(e))},e.prev=3,e.next=6,Promise.all(t.map(i));case 6:r=e.sent,j(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),a(e.t0);case 13:p(!1);case 14:return e.abrupt("return",(function(){r&&r.map((function(e){return e.unsubscribe()}))}));case 15:case"end":return e.stop()}}),e,null,[[3,10]])}))),[t]),s?Object(x.jsx)(N,{children:"Could not retrieve the comments"}):Object(x.jsxs)(x.Fragment,{children:[m&&Object(x.jsx)(Q,{}),Object(x.jsx)(ee,{in:!m&&d.length>0,children:Object(x.jsx)("ul",{className:J.a.list,children:d.map((function(e){return!e.data||e.data.deleted?null:Object(x.jsx)($,{data:e.data},e.data.id)}))})})]})},ne=function(e){var t=e.ids,n=e.descendants,r=e.refetch,i=e.isFetching;return Object(x.jsxs)("div",{className:A.a.wrapper,children:[Object(x.jsxs)("header",{className:A.a.header,children:[Object(x.jsx)("h2",{className:A.a.title,children:n>0&&t?"Comments: ".concat(n):"No comments"}),Object(x.jsx)(M,{onClick:r,disabled:i,children:"Manually refetch"})]}),n>0&&t&&Object(x.jsx)(te,{ids:t})]})},re=n(26),ie=n.n(re),ce=function(){var e=Object(o.h)().id,t=Object(o.g)(),n=h(e,{pollingInterval:6e4}),r=n.data,i=n.isLoading,c=n.error,s=n.refetch,a=n.isFetching,l=r||{},d=l.url,u=l.title,j=l.time,b=l.by,m=l.descendants,p=l.kids;return c?Object(x.jsx)(N,{}):i?Object(x.jsx)(I,{}):r?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(M,{className:ie.a.buttonBack,onClick:function(){t.goBack()},children:"Go back"}),Object(x.jsx)(_,{by:b,time:j}),Object(x.jsx)("h1",{className:ie.a.title,children:u}),Object(x.jsx)("a",{className:ie.a.link,href:d,target:"_blank",rel:"noreferrer",children:d}),Object(x.jsx)(ne,{ids:p,descendants:m,refetch:s,isFetching:a})]}):Object(x.jsx)(N,{children:"There is no data available (:"})},se=n(38),ae=n.n(se);var oe=function(){return Object(x.jsx)("div",{className:ae.a.App,children:Object(x.jsx)(a.a,{children:Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{exact:!0,path:"/",component:F}),Object(x.jsx)(o.b,{path:"/news/:id",component:ce}),Object(x.jsx)(o.a,{to:"/"})]})})})},le=n(39),de=n(2),ue=Object(de.a)({reducer:Object(le.a)({},u.reducerPath,u.reducer),middleware:function(e){return e().concat(u.middleware)}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(q.a,{store:ue,children:Object(x.jsx)(oe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.a5d080c6.chunk.js.map