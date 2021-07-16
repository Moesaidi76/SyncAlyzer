(this.webpackJsonpSyncAlyzer=this.webpackJsonpSyncAlyzer||[]).push([[6],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c}));var a=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2}),l=["","K","M","B","T"],r={format:function(e,t){if(null===e||0===e)return"0";t=!t||t<0?0:t;var n=e.toPrecision(2).split("e"),r=1===n.length?0:Math.floor(Math.min(parseInt(n[1].slice(1),10),14)/3),o=(r<0?r:Math.abs(r))<1?e.toFixed(0+t):(e/Math.pow(10,3*r)).toFixed(1+t);return"".concat(a.format(o)).concat(l[r])}},o=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2,minimumFractionDigits:2}),s=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:3,minimumFractionDigits:3}),c=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2,minimumFractionDigits:2,style:"percent"})},132:function(e,t,n){},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(1),l=n(6),r=n(25),o=n(21),s=n(37),c=n(140),i=n.n(c);function m(e){var t=a.useState(!1),n=Object(s.a)(t,2),r=n[0],o=n[1],c=a.useRef(null);return a.createElement("div",{className:"card"},a.createElement("div",{className:"card-body"},a.createElement(l.e,{action:"/api",method:"post",onSubmit:function(t){t.preventDefault();var n=i()(t.currentTarget,{hash:!0});e.onAddSymbol&&e.onAddSymbol(n),null!=c.current&&c.current.reset()},innerRef:c},a.createElement(l.f,null,a.createElement(l.h,{for:"symbol"},"Symbol"),a.createElement(l.g,{autoComplete:"off",bsSize:"sm",id:"symbol",name:"symbol",required:!0})),r?a.createElement(l.f,null,a.createElement(l.a,{color:"link",onClick:function(){o(!1)},size:"sm",type:"button"},"- Remove transaction data")):a.createElement(l.f,null,a.createElement(l.a,{color:"link",onClick:function(){o(!0)},size:"sm",type:"button"},"+ Add transaction data")),a.createElement(l.c,{isOpen:r},a.createElement(l.f,null,a.createElement(l.h,{for:"type"},"Type"),a.createElement(l.g,{bsSize:"sm",className:"form-control",disabled:!r,id:"type",name:"type",required:!0,type:"select"},a.createElement("option",null,"Buy"),a.createElement("option",null,"Sell"))),a.createElement(l.f,null,a.createElement(l.h,{for:"shares"},"Shares"),a.createElement(l.g,{bsSize:"sm",disabled:!r,id:"shares",min:"0",name:"shares",required:!0,step:".001",type:"number"})),a.createElement(l.f,null,a.createElement(l.h,{for:"price"},"Price/Amount"),a.createElement(l.g,{bsSize:"sm",disabled:!r,id:"price",min:"0",name:"price",step:".01",type:"number"})),a.createElement(l.f,null,a.createElement(l.h,{for:"date"},"Date ",a.createElement("small",{className:"text-secondary"},"(Optional)")),a.createElement(l.g,{bsSize:"sm",disabled:!r,id:"date",name:"date",type:"date"})),a.createElement(l.f,null,a.createElement(l.h,{for:"commission"},"Commission ",a.createElement("small",{className:"text-secondary"},"(Optional)")),a.createElement(l.g,{bsSize:"sm",disabled:!r,id:"commission",min:"0",name:"commission",step:".01",type:"number"}))),a.createElement(l.f,{style:{marginBottom:0}},a.createElement(l.a,{color:"primary",disabled:e.isLoading,size:"sm",type:"submit"},"Add to portfolio")))))}function u(e){return a.createElement(l.b,{className:"text-right"},a.createElement(l.a,{color:"link",size:"sm",type:"button"},a.createElement(l.h,{className:"label-button"},a.createElement(l.g,{accept:"text/csv",hidden:!0,onChange:function(t){var n=t.currentTarget,a=n.files;null!=a&&0!==a.length&&(e.onImportPortfolio(a[0]),n.value="")},type:"file"}),"Import transactions")),"|",a.createElement(l.a,{color:"link",onClick:e.onDeletePortfolio,size:"sm",type:"button"},"Delete portfolio"),"|",a.createElement(l.a,{color:"link",onClick:e.onDownloadPortfolio,size:"sm",type:"button"},"Download to spreadsheet"))}n(132);var d=n(29);function f(){return a.createElement("div",{className:"bg-light shadow-sm nav-scroller"},a.createElement(l.l,{className:"nav-portfolio",role:"navigation"},a.createElement(l.m,null,a.createElement(d.c,{className:"nav-link",exact:!0,to:"/"},"Overview")),a.createElement(l.m,null,a.createElement(d.c,{className:"nav-link",to:"/performance"},"Performance")),a.createElement(l.m,null,a.createElement(d.c,{className:"nav-link",to:"/transactions"},"Transactions")),a.createElement(l.m,null,a.createElement(d.c,{className:"nav-link",to:"./components/accountBox/loginForm.jsx"},"Login")),a.createElement(l.m,null,a.createElement(d.c,{className:"nav-link",to:"./components/accountBox/signupForm.jsx"},"signup"))))}function b(e){var t=e.children,n=e.deleteDisabled,s=e.onDelete,c=Object(o.c)(),i=Object(o.d)((function(e){return e.isFetchingCount>0}));return a.createElement(a.Fragment,null,a.createElement(f,null),a.createElement(l.d,{fluid:!0},a.createElement(l.q,{className:"mb-3 mt-3"},a.createElement(l.b,null,a.createElement(l.a,{color:n?"secondary":"danger",disabled:n,onClick:s,outline:!0,size:"sm"},"Delete")),a.createElement(u,{onDeletePortfolio:function(){window.confirm("Are you sure you want to delete the entire portfolio? This is irreversible.")&&c(Object(r.c)())},onDownloadPortfolio:function(){c(Object(r.f)())},onImportPortfolio:function(e){c(Object(r.j)(e))}})),t),a.createElement(l.d,{className:"mb-4"},a.createElement(l.q,null,a.createElement(l.b,{md:"6"},a.createElement(m,{isLoading:i,onAddSymbol:function(e){var t={cashValue:null,commission:parseFloat(e.commission)||0,date:e.date,id:-1,notes:null,price:parseFloat(e.price)||0,shares:parseFloat(e.shares)||0,symbol:e.symbol.toUpperCase(),type:e.type||"Buy"};c(Object(r.a)(t)),c(Object(r.h)())}})))))}},263:function(e,t,n){"use strict";n.r(t);var a=n(139),l=n(49),r=n(50),o=n(52),s=n(51),c=n(1),i=n(6),m=n(25),u=n(129),d=n(29),f=n(134),b=n(143),h=n(21),p=n(2),g=n.n(p),y=n(141),v=n.n(y)()(b.a);function E(e){return g()("text-right",{"text-danger":null!=e&&e<0,"text-success":null!=e&&e>=0})}var S=[{accessor:"companyName",Cell:function(e){return null==e.value?"...":e.value},Footer:c.createElement("strong",null,"Portfolio value:"),Header:"Name",headerClassName:"text-left"},{accessor:"symbol",Cell:function(e){return c.createElement(d.b,{to:"/stocks/".concat(e.value)},e.value)},Header:"Symbol",headerClassName:"text-left"},{accessor:"latestPrice",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":u.b.format(e.value))},Header:"Last Price",headerClassName:"text-right"},{accessor:"change.change",Cell:function(e){var t=e.original.change;return c.createElement("div",{className:E(e.value)},null==t.change?"...":"".concat(t.change>=0?"+":"").concat(u.b.format(t.change)," (").concat(t.changePercent>=0?"+":"").concat(u.d.format(t.changePercent),")"))},Header:"Change",headerClassName:"text-right"},{accessor:"shares",Cell:function(e){return c.createElement("div",{className:"text-right"},0===e.value?"...":u.c.format(e.value))},Header:"Shares",headerClassName:"text-right"},{accessor:"costBasis",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":u.b.format(e.value))},Header:"Cost Basis",headerClassName:"text-right",Footer:function(e){return c.createElement("div",{className:"text-right"},u.b.format(e.data.reduce((function(e,t){return e+t.costBasis}),0)))}},{accessor:"marketValue",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":u.b.format(e.value))},Header:"Mkt. Value",headerClassName:"text-right",Footer:function(e){return c.createElement("div",{className:"text-right"},u.b.format(e.data.reduce((function(e,t){return e+t.marketValue}),0)))}},{accessor:"gain",Cell:function(e){return c.createElement("div",{className:E(e.value)},null==e.value?"...":"".concat(e.value>=0?"+":"").concat(u.b.format(e.value)))},Header:"Gain",headerClassName:"text-right",Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.costBasis}),0),n=e.data.reduce((function(e,t){return e+t.marketValue}),0)-t;return c.createElement("div",{className:E(n)},n>=0?"+":"",u.b.format(n))}},{accessor:"gainPercent",Cell:function(e){return c.createElement("div",{className:E(e.value)},null==e.value?"...":"".concat(e.value>=0?"+":"").concat(u.d.format(e.value)))},Header:"Gain %",headerClassName:"text-right",Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.costBasis}),0),n=e.data.reduce((function(e,t){return e+t.marketValue}),0),a=0===n?0:(n-t)/t;return c.createElement("div",{className:E(a)},a>=0?"+":"",u.d.format(a))}},{accessor:"daysGain",Cell:function(e){return c.createElement("div",{className:E(e.value)},null==e.value?"...":"".concat(e.value>=0?"+":"").concat(u.b.format(e.value)))},Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.daysGain}),0);return c.createElement("div",{className:E(t)},t>=0?"+":"",u.b.format(t))},Header:"Day's gain",headerClassName:"text-right"}],N=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleDeleteSelectedSymbols=function(){a.props.dispatch(Object(m.d)(Array.from(a.state.selectedSymbols)))},a.handlePageSizeChange=function(e){a.props.dispatch(Object(m.b)(e))},a.handleToggleAllSymbols=function(e){a.isAllSymbolsSelected()?a.setState({selectedSymbols:new Set}):a.setState({selectedSymbols:new Set(a.props.symbols)})},a.handleToggleSymbolSelected=function(e){var t=e.replace(/^select-/,"");a.isSymbolSelected(t)?a.state.selectedSymbols.delete(t):a.state.selectedSymbols.add(t),a.forceUpdate()},a.isAllSymbolsSelected=function(){return a.state.selectedSymbols.size===a.props.symbols.length},a.isSymbolSelected=function(e){return a.state.selectedSymbols.has(e)},a.state={selectedSymbols:new Set},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props.symbols.map((function(t){var n=e.props.quotes[t],a=e.props.transactions.filter((function(e){return e.symbol===t})),l=0,r=0,o=0;a.forEach((function(e){"Buy"===e.type&&(l+=e.price*e.shares,l+=e.commission,o+=e.shares,null!=n&&(r+=n.latestPrice*e.shares))}));var s=r-l,c=0;null!=n&&(c=s/l);var i=o>0&&null!=n;return{change:{change:null==n?null:n.change,changePercent:null==n?null:n.changePercent},companyName:null==n?null:n.companyName,costBasis:i?l:null,daysGain:null==n||0===o?null:n.change*o,gain:i?s:null,gainPercent:i?c:null,latestPrice:null==n?null:n.latestPrice,marketValue:i?r:null,shares:o,symbol:t}})),n=0===this.props.symbols.length||0===this.state.selectedSymbols.size;return c.createElement(f.a,{deleteDisabled:n,onDelete:this.handleDeleteSelectedSymbols},c.createElement(i.q,{className:"mb-4"},c.createElement(i.b,null,c.createElement(v,{columns:S,data:t,defaultSorted:[{desc:!1,id:"symbol"}],getPaginationProps:function(){return{NextComponent:function(e){return c.createElement(i.a,Object.assign({className:"btn-sm",outline:!0},e))},PreviousComponent:function(e){return c.createElement(i.a,Object.assign({className:"btn-sm",outline:!0},e))},className:"pt-2",showPageJump:!1}},isSelected:this.isSymbolSelected,keyField:"symbol",noDataText:"No symbols yet. Add one using the form below.",onPageSizeChange:this.handlePageSizeChange,pageSize:this.props.appSettings.pageSize,selectAll:this.isAllSymbolsSelected(),selectType:"checkbox",toggleAll:this.handleToggleAllSymbols,toggleSelection:this.handleToggleSymbolSelected}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n,l=!1,r=new Set(e.symbols),o=new Set,s=Object(a.a)(t.selectedSymbols);try{for(s.s();!(n=s.n()).done;){var c=n.value;r.has(c)?o.add(c):l=!0}}catch(i){s.e(i)}finally{s.f()}return l?{selectedSymbols:o}:null}}]),n}(c.Component);t.default=Object(h.b)((function(e){return{appSettings:e.appSettings,quotes:e.quotes,symbols:e.symbols,transactions:e.transactions}}))(N)}}]);
//# sourceMappingURL=6.091d209e.chunk.js.map