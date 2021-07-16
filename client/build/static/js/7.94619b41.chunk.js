(this.webpackJsonpSyncAlyzer=this.webpackJsonpSyncAlyzer||[]).push([[7],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c}));var a=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2}),l=["","K","M","B","T"],r={format:function(e,t){if(null===e||0===e)return"0";t=!t||t<0?0:t;var n=e.toPrecision(2).split("e"),r=1===n.length?0:Math.floor(Math.min(parseInt(n[1].slice(1),10),14)/3),s=(r<0?r:Math.abs(r))<1?e.toFixed(0+t):(e/Math.pow(10,3*r)).toFixed(1+t);return"".concat(a.format(s)).concat(l[r])}},s=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2,minimumFractionDigits:2}),o=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:3,minimumFractionDigits:3}),c=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2,minimumFractionDigits:2,style:"percent"})},132:function(e,t,n){},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(1),l=n(6),r=n(25),s=n(21),o=n(37),c=n(140),i=n.n(c);function m(e){var t=a.useState(!1),n=Object(o.a)(t,2),r=n[0],s=n[1],c=a.useRef(null);return a.createElement("div",{className:"card"},a.createElement("div",{className:"card-body"},a.createElement(l.e,{action:"/api",method:"post",onSubmit:function(t){t.preventDefault();var n=i()(t.currentTarget,{hash:!0});e.onAddSymbol&&e.onAddSymbol(n),null!=c.current&&c.current.reset()},innerRef:c},a.createElement(l.f,null,a.createElement(l.h,{for:"symbol"},"Symbol"),a.createElement(l.g,{autoComplete:"off",bsSize:"sm",id:"symbol",name:"symbol",required:!0})),r?a.createElement(l.f,null,a.createElement(l.a,{color:"link",onClick:function(){s(!1)},size:"sm",type:"button"},"- Remove transaction data")):a.createElement(l.f,null,a.createElement(l.a,{color:"link",onClick:function(){s(!0)},size:"sm",type:"button"},"+ Add transaction data")),a.createElement(l.c,{isOpen:r},a.createElement(l.f,null,a.createElement(l.h,{for:"type"},"Type"),a.createElement(l.g,{bsSize:"sm",className:"form-control",disabled:!r,id:"type",name:"type",required:!0,type:"select"},a.createElement("option",null,"Buy"),a.createElement("option",null,"Sell"))),a.createElement(l.f,null,a.createElement(l.h,{for:"shares"},"Shares"),a.createElement(l.g,{bsSize:"sm",disabled:!r,id:"shares",min:"0",name:"shares",required:!0,step:".001",type:"number"})),a.createElement(l.f,null,a.createElement(l.h,{for:"price"},"Price/Amount"),a.createElement(l.g,{bsSize:"sm",disabled:!r,id:"price",min:"0",name:"price",step:".01",type:"number"})),a.createElement(l.f,null,a.createElement(l.h,{for:"date"},"Date ",a.createElement("small",{className:"text-secondary"},"(Optional)")),a.createElement(l.g,{bsSize:"sm",disabled:!r,id:"date",name:"date",type:"date"})),a.createElement(l.f,null,a.createElement(l.h,{for:"commission"},"Commission ",a.createElement("small",{className:"text-secondary"},"(Optional)")),a.createElement(l.g,{bsSize:"sm",disabled:!r,id:"commission",min:"0",name:"commission",step:".01",type:"number"}))),a.createElement(l.f,{style:{marginBottom:0}},a.createElement(l.a,{color:"primary",disabled:e.isLoading,size:"sm",type:"submit"},"Add to portfolio")))))}function u(e){return a.createElement(l.b,{className:"text-right"},a.createElement(l.a,{color:"link",size:"sm",type:"button"},a.createElement(l.h,{className:"label-button"},a.createElement(l.g,{accept:"text/csv",hidden:!0,onChange:function(t){var n=t.currentTarget,a=n.files;null!=a&&0!==a.length&&(e.onImportPortfolio(a[0]),n.value="")},type:"file"}),"Import transactions")),"|",a.createElement(l.a,{color:"link",onClick:e.onDeletePortfolio,size:"sm",type:"button"},"Delete portfolio"),"|",a.createElement(l.a,{color:"link",onClick:e.onDownloadPortfolio,size:"sm",type:"button"},"Download to spreadsheet"))}n(132);var d=n(29);function p(){return a.createElement("div",{className:"bg-light shadow-sm nav-scroller"},a.createElement(l.l,{className:"nav-portfolio",role:"navigation"},a.createElement(l.m,null,a.createElement(d.c,{className:"nav-link",exact:!0,to:"/"},"Overview")),a.createElement(l.m,null,a.createElement(d.c,{className:"nav-link",to:"/performance"},"Performance")),a.createElement(l.m,null,a.createElement(d.c,{className:"nav-link",to:"/transactions"},"Transactions")),a.createElement(l.m,null,a.createElement(d.c,{className:"nav-link",to:"./components/accountBox/loginForm.jsx"},"Login")),a.createElement(l.m,null,a.createElement(d.c,{className:"nav-link",to:"./components/accountBox/signupForm.jsx"},"signup"))))}function f(e){var t=e.children,n=e.deleteDisabled,o=e.onDelete,c=Object(s.c)(),i=Object(s.d)((function(e){return e.isFetchingCount>0}));return a.createElement(a.Fragment,null,a.createElement(p,null),a.createElement(l.d,{fluid:!0},a.createElement(l.q,{className:"mb-3 mt-3"},a.createElement(l.b,null,a.createElement(l.a,{color:n?"secondary":"danger",disabled:n,onClick:o,outline:!0,size:"sm"},"Delete")),a.createElement(u,{onDeletePortfolio:function(){window.confirm("Are you sure you want to delete the entire portfolio? This is irreversible.")&&c(Object(r.c)())},onDownloadPortfolio:function(){c(Object(r.f)())},onImportPortfolio:function(e){c(Object(r.j)(e))}})),t),a.createElement(l.d,{className:"mb-4"},a.createElement(l.q,null,a.createElement(l.b,{md:"6"},a.createElement(m,{isLoading:i,onAddSymbol:function(e){var t={cashValue:null,commission:parseFloat(e.commission)||0,date:e.date,id:-1,notes:null,price:parseFloat(e.price)||0,shares:parseFloat(e.shares)||0,symbol:e.symbol.toUpperCase(),type:e.type||"Buy"};c(Object(r.a)(t)),c(Object(r.h)())}})))))}},265:function(e,t,n){"use strict";n.r(t);var a=n(139),l=n(3),r=n(49),s=n(50),o=n(52),c=n(51),i=n(1),m=n(6),u=n(25),d=n(129),p=n(29),f=n(134),b=n(143),h=n(21),E=n(141),g=n.n(E)()(b.a),v=[{accessor:"companyName",Cell:function(e){return null==e.value?"...":e.value},Header:"Name",headerClassName:"text-left"},{accessor:"symbol",Cell:function(e){return i.createElement(p.b,{to:"/stocks/".concat(e.value)},e.value)},Header:"Symbol",headerClassName:"text-left"},{accessor:"type",Header:"Type",headerClassName:"text-left"},{accessor:"date",Cell:function(e){return i.createElement("time",null,e.value)},Header:"Date",headerClassName:"text-left"},{accessor:"shares",Cell:function(e){return i.createElement("div",{className:"text-right"},null==e.value?"...":d.c.format(e.value))},Header:"Shares",headerClassName:"text-right"},{accessor:"price",Cell:function(e){return i.createElement("div",{className:"text-right"},null==e.value?"...":d.b.format(e.value))},Header:"Price",headerClassName:"text-right"},{accessor:"commission",Cell:function(e){return i.createElement("div",{className:"text-right"},null==e.value?"...":d.b.format(e.value))},Header:"Commission",headerClassName:"text-right"}],y=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleDeleteSelectedTransactions=function(){var e=a.props.transactions.filter((function(e){return a.state.selectedTransactionIds.has(e.id)}));a.props.dispatch(Object(u.e)(e))},a.handlePageSizeChange=function(e){a.props.dispatch(Object(u.b)(e))},a.handleToggleAllTransactionIds=function(e){a.isAllTransactionIdsSelected()?a.setState({selectedTransactionIds:new Set}):a.setState({selectedTransactionIds:new Set(a.props.transactions.map((function(e){return e.id})))})},a.handleToggleTransactionIdSelected=function(e){var t=parseInt(e.replace(/^select-/,""),10);a.isTransactionIdSelected(t)?a.state.selectedTransactionIds.delete(t):a.state.selectedTransactionIds.add(t),a.forceUpdate()},a.isAllTransactionIdsSelected=function(){return a.state.selectedTransactionIds.size===a.props.transactions.length},a.isTransactionIdSelected=function(e){return a.state.selectedTransactionIds.has(e)},a.state={selectedTransactionIds:new Set},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.transactions.map((function(t){var n=e.props.quotes[t.symbol];return Object(l.a)(Object(l.a)({},t),{},{companyName:null==n?null:n.companyName})})),n=0===this.props.transactions.length||0===this.state.selectedTransactionIds.size;return i.createElement(f.a,{deleteDisabled:n,onDelete:this.handleDeleteSelectedTransactions},i.createElement(m.q,{className:"mb-3"},i.createElement(m.b,null,i.createElement(g,{columns:v,data:t,defaultSorted:[{desc:!1,id:"symbol"}],getPaginationProps:function(){return{className:"pt-2",NextComponent:function(e){return i.createElement(m.a,Object.assign({className:"btn-sm",outline:!0},e))},PreviousComponent:function(e){return i.createElement(m.a,Object.assign({className:"btn-sm",outline:!0},e))},showPageJump:!1}},isSelected:this.isTransactionIdSelected,keyField:"id",noDataText:"No transactions yet. Add one using the form below.",onPageSizeChange:this.handlePageSizeChange,pageSize:this.props.appSettings.pageSize,selectAll:this.isAllTransactionIdsSelected(),selectType:"checkbox",toggleAll:this.handleToggleAllTransactionIds,toggleSelection:this.handleToggleTransactionIdSelected}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n,l=!1,r=new Set(e.transactions.map((function(e){return e.id}))),s=new Set,o=Object(a.a)(t.selectedTransactionIds);try{for(o.s();!(n=o.n()).done;){var c=n.value;r.has(c)?s.add(c):l=!0}}catch(i){o.e(i)}finally{o.f()}return l?{selectedTransactionIds:s}:null}}]),n}(i.Component);t.default=Object(h.b)((function(e){return{appSettings:e.appSettings,quotes:e.quotes,transactions:e.transactions}}))(y)}}]);
//# sourceMappingURL=7.94619b41.chunk.js.map