(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(2),o=a.n(s),c=a(8),r=a.n(c),i=(a(14),a(3)),u=a(1),l=a(5),d=(a(15),a(16),function(e){var t=e.navItems,a=e.fixNavItem,s=e.toggleNav,o=t.sort((function(e,t){return e.id-t.id})).map((function(e){var t="nav__item";return e.id===a&&(t+=" nav__item-active"),Object(n.jsx)("li",{className:t,onClick:function(){s(e.id)},children:e.name},e.id)}));return Object(n.jsx)("nav",{className:"nav",children:Object(n.jsx)("ul",{className:"nav__items",children:o})})});a(17);function m(e,t){var a=new Date(e);return a.setTime(a.getTime()+864e5*t),a}function f(e){var t=e.getDay()||7;return 1===t?e:m(e,-1*(t-1))}function h(e){var t=e.getDay()||7;return 7===t?e:m(e,7-t)}function j(e){var t=new Date(e.getTime());return t.setDate(1),t}function b(e){var t=new Date(e.getTime()),a=t.getMonth();return 1===a?t=m(t.setMonth(2,1),-1):0===a||2===a||4===a||6===a||7===a||9===a||11===a?t.setDate(31):t.setDate(30),t}function N(e){var t=new Date(e.getTime());return t.setMonth(0,1),t}function x(e){var t=new Date(e.getTime());return t.setMonth(11,31),t}function k(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var a=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-a.getTime())/864e5-3+(a.getDay()+6)%7)/7)}function v(e){var t=e.dateStart,a=e.dateEnd,s=e.period,o=e.toglePeriod,c=function(e,t){var a=[{fullName:"January",shortName:"Jan"},{fullName:"February",shortName:"Feb"},{fullName:"March",shortName:"Mar"},{fullName:"April",shortName:"Apr"},{fullName:"May",shortName:"May"},{fullName:"June",shortName:"Jun"},{fullName:"July",shortName:"Jul"},{fullName:"August",shortName:"Aug"},{fullName:"September",shortName:"Sep"},{fullName:"October",shortName:"Oct"},{fullName:"November",shortName:"Nov"},{fullName:"December",shortName:"Dec"}],n=[{fullName:"Sunday",shortName:"Sun"},{fullName:"Monday",shortName:"Mon"},{fullName:"Tuesday",shortName:"Tue"},{fullName:"Wednesday",shortName:"Wed"},{fullName:"Thursday",shortName:"Thu"},{fullName:"Friday",shortName:"Fri"},{fullName:"Saturday",shortName:"Sat"}];switch(arguments.length>2&&void 0!==arguments[2]?arguments[2]:1){case 1:return{header:n[e.getDay()].fullName,subheader:"".concat(a[e.getMonth()].shortName," ").concat(e.getDate(),", ").concat(e.getFullYear())};case 2:return{header:"".concat(k(e)," week of ").concat(e.getFullYear()),subheader:"".concat(a[e.getMonth()].shortName," ").concat(e.getDate()," - ").concat(a[t.getMonth()].shortName," ").concat(t.getDate())};case 3:return{header:"".concat(a[e.getMonth()].fullName,", ").concat(e.getFullYear()),subheader:"".concat(a[e.getMonth()].shortName," ").concat(e.getDate(),", ").concat(n[e.getDay()].shortName," - ").concat(a[t.getMonth()].shortName," ").concat(t.getDate(),", ").concat(n[t.getDay()].shortName)};case 4:return{header:e.getFullYear(),subheader:"".concat(a[e.getMonth()].shortName," ").concat(e.getDate(),", ").concat(n[e.getDay()].shortName," - ").concat(a[t.getMonth()].shortName," ").concat(t.getDate(),", ").concat(n[t.getDay()].shortName)};default:return{header:"",subheader:""}}}(t,a,s);return Object(n.jsxs)("div",{className:"date",children:[Object(n.jsx)("i",{className:"fas fa-angle-left date_slide",onClick:function(){return o("prev")}}),Object(n.jsxs)("div",{className:"date_caption",children:[Object(n.jsx)("h2",{className:"date__header",children:c.header}),Object(n.jsx)("h3",{className:"date__subheader",children:c.subheader})]}),Object(n.jsx)("i",{className:"fas fa-angle-right date_slide",onClick:function(){return o("next")}})]})}a(18);function O(e){var t=e.enterNewTask;return Object(n.jsxs)("div",{className:"newtask",children:[Object(n.jsx)("i",{className:"fas fa-align-left newtask__icon"}),Object(n.jsx)("input",{className:"newtask__input",type:"text",placeholder:"Add a task...",onKeyDown:function(e){"Enter"===e.key&&(t(e.target.value),e.target.value="")}})]})}a(19),a(20);function g(e){var t=e.setContextMenu,a=e.togleTaskPin,o=e.deleteTask,c=e.task_id,r=e.pinned,i=e.memo,u=Object(s.useRef)(null);function l(e){u.current&&!u.current.contains(e.target)&&t({toDoId:c,showContext:!1,showMemo:!1})}function d(){document.addEventListener("click",l)}function m(){document.removeEventListener("click",l)}return Object(s.useEffect)((function(){return d(),function(){m()}}),[]),Object(n.jsxs)("div",{className:"menu",ref:u,children:[Object(n.jsxs)("div",{className:"menu__item",onClick:function(){t({toDoId:c,showContext:!1,showMemo:!1}),m(),a(c)},children:[Object(n.jsx)("i",{className:"fas fa-thumbtack menu__icon"}),Object(n.jsx)("span",{className:"menu__caption",children:r?"Unpin from top":"Pin on the top"})]}),Object(n.jsxs)("div",{className:"menu__item",onClick:function(){t({toDoId:c,showContext:!1,showMemo:!0}),m()},children:[Object(n.jsx)("i",{className:"far fa-sticky-note menu__icon"}),Object(n.jsx)("span",{className:"menu__caption",children:i?"Edit memo":"Ad a memo"})]}),Object(n.jsxs)("div",{className:"menu__item",onClick:function(){t({toDoId:c,showContext:!1,showMemo:!1}),m(),o(c)},children:[Object(n.jsx)("i",{className:"far fa-trash-alt menu__icon"}),Object(n.jsx)("span",{className:"menu__caption",children:"Delete"})]})]})}a(21);function D(e){var t=e.setContextMenu,a=e.task_id,o=e.editTaskMemo,c=e.memo,r=Object(s.useState)(c),i=Object(l.a)(r,2),u=i[0],d=i[1];return Object(n.jsxs)("div",{className:"memo",children:[Object(n.jsx)("input",{className:"memo__input",type:"text",placeholder:"Add memo for task...",onChange:function(e){d(e.target.value)},value:u}),Object(n.jsx)("button",{className:"memo__button",children:Object(n.jsx)("i",{className:"fas fa-check",onClick:function(){o(a,u),t({toDoId:a,showContext:!1,showMemo:!1})}})}),Object(n.jsx)("button",{className:"memo__button",children:Object(n.jsx)("i",{className:"fas fa-times",onClick:function(){t({toDoId:a,showContext:!1,showMemo:!1})}})})]})}function p(e){var t,a,s=e.task,o=e.togleTaskDone,c=e.togleTaskPin,r=e.deleteTask,i=e.showContextMenu,u=e.showMemoMenu,l=e.setContextMenu,d=e.editTaskMemo,m=s.id,f=s.done,h=s.pinned,j=s.text,b=s.memo,N="task";return h&&(N+=" task--pinned"),i&&(t=Object(n.jsx)(g,{setContextMenu:l,togleTaskPin:c,deleteTask:r,task_id:m,pinned:h,memo:b})),u&&(a=Object(n.jsx)(D,{task_id:m,setContextMenu:l,editTaskMemo:d,memo:b})),Object(n.jsxs)("div",{className:N,children:[Object(n.jsxs)("div",{className:"task__inner",children:[Object(n.jsx)("input",{type:"checkbox",className:"custom-checkbox",id:m,name:"taskstatus",value:"yes",defaultChecked:f,onChange:function(){return o(m)}}),Object(n.jsx)("label",{className:"task__desription",htmlFor:m,children:j}),Object(n.jsx)("i",{className:"fas fa-ellipsis-h task__menu",onClick:function(){l({toDoId:m,showContext:!i,showMemo:!1})}})]}),Object(n.jsx)("p",{className:"task__memo",children:!u&&b}),t,a]})}function T(e){var t=e.tasks,a=e.togleTaskDone,s=e.togleTaskPin,o=e.deleteTask,c=e.contextMenu,r=e.setContextMenu,i=e.editTaskMemo,u=e.showDate,l=c.toDoId,d=c.showContext,m=c.showMemo,f=t.map((function(e){var t=e.date,c=[],f=[];e.todos.forEach((function(e){var t=Object(n.jsx)(p,{task:e,togleTaskDone:a,togleTaskPin:s,deleteTask:o,setContextMenu:r,showContextMenu:l===e.id&&d,showMemoMenu:l===e.id&&m,editTaskMemo:i},e.id);(e.pinned?c:f).push(t)}));var h=null;c.length>0&&(h=Object(n.jsx)("div",{className:"tasks tasks--pinned",children:c}));var j=null;return u&&(j=Object(n.jsx)("p",{className:"tasks__date",children:t})),Object(n.jsxs)("div",{children:[j,h,Object(n.jsx)("div",{className:"tasks",children:f})]},t)}));return Object(n.jsx)(n.Fragment,{children:f})}var _=a(24),w="todoApp.todoData";var M=function(){var e,t,a,o=Object(s.useState)({fixNavItem:1,fixInterval:{dateStart:new Date,dateEnd:new Date},toDoTasks:[]}),c=Object(l.a)(o,2),r=c[0],k=c[1],g=Object(s.useState)({toDoId:"b2a90b85-20e1-4097-a867-7b2692afeb2a",showContext:!1,showMemo:!1}),D=Object(l.a)(g,2),p=D[0],M=D[1];function I(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),s=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[s,a,n].join(".")}return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem(w),(function(e,t){return"dateStart"===e||"dateEnd"===e?new Date(t):t}))||{fixNavItem:1,fixInterval:{dateStart:new Date,dateEnd:new Date},toDoTasks:[]};k(e)}),[]),Object(s.useEffect)((function(){localStorage.setItem(w,JSON.stringify(r))}),[r]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)(d,{navItems:[{id:1,name:"Day"},{id:2,name:"Week"},{id:3,name:"Month"},{id:4,name:"Year"}],fixNavItem:r.fixNavItem,toggleNav:function(e){var t=new Date,a=new Date;switch(e){case 2:t=f(t),a=h(a);break;case 3:t=j(t),a=b(t);break;case 4:t=N(t),a=x(t)}k((function(n){return Object(u.a)(Object(u.a)({},n),{},{fixNavItem:e,fixInterval:{dateStart:t,dateEnd:a}})}))}})}),Object(n.jsx)(v,{dateStart:r.fixInterval.dateStart,dateEnd:r.fixInterval.dateEnd,period:r.fixNavItem,toglePeriod:function(e){var t=r.fixInterval,a=t.dateStart,n=t.dateEnd;switch(r.fixNavItem){case 1:a=m(a,"next"===e?1:-1),n=a;break;case 2:"next"===e?(a=m(n,1),n=h(a)):(n=m(a,-1),a=f(n));break;case 3:"next"===e?(a=m(n,1),n=b(a)):(n=m(a,-1),a=j(n));break;case 4:"next"===e?(a=m(n,1),n=x(a)):(n=m(a,-1),a=N(n))}k((function(e){return Object(u.a)(Object(u.a)({},e),{},{fixInterval:{dateStart:a,dateEnd:n}})}))}}),Object(n.jsxs)("div",{className:"taskswrapper",children:[Object(n.jsx)(O,{enterNewTask:function(e){var t={id:Object(_.a)(),done:!1,pinned:!1,text:e,date:r.fixInterval.dateStart};k((function(e){return Object(u.a)(Object(u.a)({},e),{},{toDoTasks:[].concat(Object(i.a)(e.toDoTasks),[t])})}))}}),Object(n.jsx)(T,{tasks:function(e){var t=[];return e.forEach((function(e){var a=I(e.date),n=t.find((function(e){return e.date===a}));n?n.todos.push(e):t.push({date:a,todos:[e]})})),t}((e=r.toDoTasks,t=r.fixInterval.dateStart,a=r.fixInterval.dateEnd,e.filter((function(e){var n=I(e.date),s=n.localeCompare(I(t)),o=n.localeCompare(I(a));return s>=0&&o<=0})))),togleTaskDone:function(e){k((function(t){var a=t.toDoTasks.findIndex((function(t){return t.id===e})),n=t.toDoTasks[a],s=Object(u.a)(Object(u.a)({},n),{},{done:!n.done});return Object(u.a)(Object(u.a)({},t),{},{toDoTasks:[].concat(Object(i.a)(t.toDoTasks.slice(0,a)),[s],Object(i.a)(t.toDoTasks.slice(a+1)))})}))},togleTaskPin:function(e){k((function(t){var a=t.toDoTasks.findIndex((function(t){return t.id===e})),n=t.toDoTasks[a],s=Object(u.a)(Object(u.a)({},n),{},{pinned:!n.pinned});return Object(u.a)(Object(u.a)({},t),{},{toDoTasks:[].concat(Object(i.a)(t.toDoTasks.slice(0,a)),[s],Object(i.a)(t.toDoTasks.slice(a+1)))})}))},deleteTask:function(e){k((function(t){var a=t.toDoTasks.findIndex((function(t){return t.id===e}));return Object(u.a)(Object(u.a)({},t),{},{toDoTasks:[].concat(Object(i.a)(t.toDoTasks.slice(0,a)),Object(i.a)(t.toDoTasks.slice(a+1)))})}))},contextMenu:p,setContextMenu:M,editTaskMemo:function(e,t){k((function(a){var n=a.toDoTasks.findIndex((function(t){return t.id===e})),s=a.toDoTasks[n],o=Object(u.a)(Object(u.a)({},s),{},{memo:t});return Object(u.a)(Object(u.a)({},a),{},{toDoTasks:[].concat(Object(i.a)(a.toDoTasks.slice(0,n)),[o],Object(i.a)(a.toDoTasks.slice(n+1)))})}))},showDate:1!==r.fixNavItem})]})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),o(e),c(e)}))};r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),I()}],[[22,1,2]]]);
//# sourceMappingURL=main.45cd5f14.chunk.js.map