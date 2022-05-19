(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),s=(n(17),n(8)),i=n(2),r=n(1),l=(n(18),n(0)),o=function(e){var t="Card "+e.className;return Object(l.jsx)("div",{className:t,children:e.children})},j=(n(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(l.jsxs)("div",{className:"expense-date",children:[Object(l.jsx)("div",{className:"expense-date__month",children:t}),Object(l.jsx)("div",{className:"expense-date__day",children:n}),Object(l.jsx)("div",{className:"expense-date__year",children:c})]})}),u=(n(21),function(e){var t=Object(r.useState)(e.title),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(l.jsxs)(o,{className:"expense-item",children:[Object(l.jsx)(j,{date:e.date}),Object(l.jsxs)("div",{className:"expense-item__description",children:[Object(l.jsxs)("h2",{children:[" ",c]}),Object(l.jsxs)("div",{className:"expense-item__price",children:[" $",e.price," "]})]}),Object(l.jsx)("button",{onClick:function(){a("new Title")},children:" update "})]})}),d=(n(22),n(23),function(e){var t=Object(r.useState)(2019),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(l.jsxs)("form",{className:".expenses-filter",children:[Object(l.jsxs)("div",{className:".expenses-filter__control",children:[Object(l.jsx)("label",{className:"expenses-filter label",children:"Filter By Year"}),Object(l.jsxs)("select",{name:"selectYear",onChange:function(t){a(t.target.value),e.selectYear(t.target.value)},value:c,children:[Object(l.jsx)("option",{value:"2019",children:"2019"}),Object(l.jsx)("option",{value:"2020",children:"2020"}),Object(l.jsx)("option",{value:"2021",children:"2021"}),Object(l.jsx)("option",{value:"2022",children:"2022"})]})]}),Object(l.jsx)("div",{})]})}),b=(n(24),function(e){var t=Math.round(e.value/e.totalValue*100)+"%";return Object(l.jsxs)("div",{className:"chart-bar",children:[Object(l.jsx)("div",{className:"chart-bar__inner",children:Object(l.jsx)("div",{className:"chart-bar__fill",style:{height:t},children:" "})}),Object(l.jsxs)("div",{className:"chart-bar__label",children:[" ",e.month," "]})]})}),x=(n(25),function(e){var t=[{value:0,month:"Jan"},{value:0,month:"Feb"},{value:0,month:"Mar"},{value:0,month:"Apr"},{value:0,month:"May"},{value:0,month:"Jun"},{value:0,month:"Jul"},{value:0,month:"Aug"},{value:0,month:"Sep"},{value:0,month:"Oct"},{value:0,month:"Nov"},{value:0,month:"Dec"}];return Object(l.jsx)("div",{className:"chart",children:function(){var n=0;return e.items.forEach((function(e){t[e.date.getMonth()].value+=Number(e.price),n+=Number(e.price)})),t.map((function(e){return Object(l.jsx)(b,{totalValue:n,value:e.value,month:e.month},e.month)}))}()})}),h=function(e){var t=Object(r.useState)("2019"),n=Object(i.a)(t,2),c=n[0],a=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(l.jsxs)(o,{className:"expense-block",children:[Object(l.jsx)(x,{items:s}),Object(l.jsx)(d,{selectYear:function(e){a(e)}}),s.length>0?Object(l.jsx)("li",{className:"expenses-list",children:s.map((function(e){return Object(l.jsx)(u,{title:e.title,price:e.price,date:e.date},e.id)}))}):Object(l.jsx)("p",{className:"expenses-list__fallback",children:"No Expenses Found!"})]})},O=n(3),m=(n(26),function(e){var t=Object(r.useState)({setTitle:"",setPrice:"",setDate:""}),n=Object(i.a)(t,2),c=n[0],a=n[1],s=function(e){a((function(t){return Object(O.a)(Object(O.a)({},t),{},{setTitle:"text"===e.target.type?e.target.value:c.setTitle,setPrice:"number"===e.target.type?e.target.value:c.setPrice,setDate:"date"===e.target.type?e.target.value:c.setDate})}))},o=function(){a((function(){return{setTitle:"",setPrice:"",setDate:""}}))};return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c.setTitle,price:c.setPrice,date:new Date(c.setDate)};e.onSubnmitExpense(n),o()},children:[Object(l.jsxs)("div",{className:"new-expense__controls",children:[Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("div",{children:" Title "}),Object(l.jsx)("input",{type:"text",value:c.setTitle,onChange:s})]}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("div",{children:" Price "}),Object(l.jsx)("input",{type:"number",value:c.setPrice,min:0,onChange:s})]}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("div",{children:" Date "}),Object(l.jsx)("input",{type:"date",value:c.setDate,onChange:s})]})]}),Object(l.jsxs)("div",{className:"new-expense__actions",children:[Object(l.jsx)("button",{onClick:e.onCancleAddNewExpense,children:"Cancel"}),Object(l.jsx)("button",{type:"submit",children:" Add "})]})]})}),p=(n(27),function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],a=n[1],s=function(t){var n=Object(O.a)(Object(O.a)({},t),{},{id:"test"});e.onAddExpense(n),a(!1)},o=function(){a(!0)},j=function(){a(!1)};return Object(l.jsx)("div",{className:"new-expense",children:c?Object(l.jsx)(m,{onSubnmitExpense:s,onCancelAddNewExpense:j}):Object(l.jsx)("button",{className:"new-expense__actions",onClick:o,children:"Add New Expense"})})});var v=function(){var e=Object(r.useState)([{id:"e1",title:"Toilet Paper",price:94.12,date:new Date(2020,7,14)},{id:"e2",title:"Toilet",price:94.12,date:new Date(2019,7,14)},{id:"e3",title:"Toilet",price:20,date:new Date(2019,3,13)}]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{onAddExpense:function(e){c((function(t){return[].concat(Object(s.a)(t),[{id:e.id,title:e.title,price:e.price.toString(),date:new Date(e.date)}])}))}}),Object(l.jsx)(h,{items:n})]})};a.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(v,{}))}],[[28,1,2]]]);
//# sourceMappingURL=main.c977bfc5.chunk.js.map