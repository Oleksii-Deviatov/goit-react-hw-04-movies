(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{33:function(t,e,r){"use strict";r.d(e,"e",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return l})),r.d(e,"c",(function(){return f}));var n=r(35),a=r.n(n),c=r(36),u=r(37),s=r.n(u);s.a.defaults.baseURL="https://api.themoviedb.org/3/",s.a.defaults.params={api_key:"ab913aab0cc65677a88cac6e0bf2cdf4",language:"en-US"};var o=function(){var t=Object(c.a)(a.a.mark((function t(){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("trending/movie/day");case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:return t.prev=8,t.t0=t.catch(0),console.log("error",{error:t.t0}),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("search/movie",{params:{query:e,include_adult:!1,page:1}});case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 8:return t.prev=8,t.t0=t.catch(0),console.log("error",{error:t.t0}),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("movie/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),console.log("error",{error:t.t0}),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("movie/".concat(e,"/credits"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),console.log("error",{error:t.t0}),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("movie/".concat(e,"/reviews"),{params:{page:1}});case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 8:return t.prev=8,t.t0=t.catch(0),console.log("error",{error:t.t0}),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},38:function(t,e,r){t.exports={list:"styles_list__1eSHg",listItem:"styles_listItem__2EHff",link:"styles_link__2_KVq"}},39:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(0);var n=r(2),a=r(8),c=r(38),u=r.n(c),s=r(1),o=function(t){var e=t.movies,r=Object(n.h)().pathname,c=Object(n.h)().search;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("ul",{className:u.a.list,children:e.map((function(t){var e=t.id,n=t.title;return Object(s.jsx)("li",{className:u.a.listItem,children:Object(s.jsx)(a.b,{className:u.a.link,to:{pathname:"/movies/".concat(e),state:{from:r,search:c}},children:n})},e)}))})})}},68:function(t,e,r){t.exports={input:"styles_input__14NOg"}},76:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return f}));var n=r(34),a=r(0),c=r(39),u=r(33),s=r(2),o=r(15),i=r(68),p=r.n(i),l=r(1),f=function(){var t=Object(s.h)(),e=Object(s.g)(),r=Object(a.useState)(t.search.slice(7)),i=Object(n.a)(r,2),f=i[0],v=i[1],h=Object(a.useState)([]),b=Object(n.a)(h,2),d=b[0],m=b[1];return Object(a.useEffect)((function(){f.length>0?(Object(u.d)(f).then((function(t){return m(t)})),e.push({search:"query=".concat(f)})):m([])}),[f]),Object(l.jsxs)(o.a,{children:[Object(l.jsx)("input",{className:p.a.input,placeholder:"Search",value:f,onChange:function(t){var e=t.target.value;v(e)}}),Object(l.jsx)(c.a,{movies:d})]})}}}]);
//# sourceMappingURL=MoviesPage.d6138282.chunk.js.map