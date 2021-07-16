(this.webpackJsonpSyncAlyzer=this.webpackJsonpSyncAlyzer||[]).push([[5],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c}));var l=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2}),a=["","K","M","B","T"],r={format:function(e,t){if(null===e||0===e)return"0";t=!t||t<0?0:t;var n=e.toPrecision(2).split("e"),r=1===n.length?0:Math.floor(Math.min(parseInt(n[1].slice(1),10),14)/3),o=(r<0?r:Math.abs(r))<1?e.toFixed(0+t):(e/Math.pow(10,3*r)).toFixed(1+t);return"".concat(l.format(o)).concat(a[r])}},o=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2,minimumFractionDigits:2}),s=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:3,minimumFractionDigits:3}),c=new window.Intl.NumberFormat(void 0,{maximumFractionDigits:2,minimumFractionDigits:2,style:"percent"})},132:function(e,t,n){},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var l=n(1),a=n(6),r=n(25),o=n(21),s=n(37),c=n(140),i=n.n(c);function m(e){var t=l.useState(!1),n=Object(s.a)(t,2),r=n[0],o=n[1],c=l.useRef(null);return l.createElement("div",{className:"card"},l.createElement("div",{className:"card-body"},l.createElement(a.e,{action:"/api",method:"post",onSubmit:function(t){t.preventDefault();var n=i()(t.currentTarget,{hash:!0});e.onAddSymbol&&e.onAddSymbol(n),null!=c.current&&c.current.reset()},innerRef:c},l.createElement(a.f,null,l.createElement(a.h,{for:"symbol"},"Symbol"),l.createElement(a.g,{autoComplete:"off",bsSize:"sm",id:"symbol",name:"symbol",required:!0})),r?l.createElement(a.f,null,l.createElement(a.a,{color:"link",onClick:function(){o(!1)},size:"sm",type:"button"},"- Remove transaction data")):l.createElement(a.f,null,l.createElement(a.a,{color:"link",onClick:function(){o(!0)},size:"sm",type:"button"},"+ Add transaction data")),l.createElement(a.c,{isOpen:r},l.createElement(a.f,null,l.createElement(a.h,{for:"type"},"Type"),l.createElement(a.g,{bsSize:"sm",className:"form-control",disabled:!r,id:"type",name:"type",required:!0,type:"select"},l.createElement("option",null,"Buy"),l.createElement("option",null,"Sell"))),l.createElement(a.f,null,l.createElement(a.h,{for:"shares"},"Shares"),l.createElement(a.g,{bsSize:"sm",disabled:!r,id:"shares",min:"0",name:"shares",required:!0,step:".001",type:"number"})),l.createElement(a.f,null,l.createElement(a.h,{for:"price"},"Price/Amount"),l.createElement(a.g,{bsSize:"sm",disabled:!r,id:"price",min:"0",name:"price",step:".01",type:"number"})),l.createElement(a.f,null,l.createElement(a.h,{for:"date"},"Date ",l.createElement("small",{className:"text-secondary"},"(Optional)")),l.createElement(a.g,{bsSize:"sm",disabled:!r,id:"date",name:"date",type:"date"})),l.createElement(a.f,null,l.createElement(a.h,{for:"commission"},"Commission ",l.createElement("small",{className:"text-secondary"},"(Optional)")),l.createElement(a.g,{bsSize:"sm",disabled:!r,id:"commission",min:"0",name:"commission",step:".01",type:"number"}))),l.createElement(a.f,{style:{marginBottom:0}},l.createElement(a.a,{color:"primary",disabled:e.isLoading,size:"sm",type:"submit"},"Add to portfolio")))))}function u(e){return l.createElement(a.b,{className:"text-right"},l.createElement(a.a,{color:"link",size:"sm",type:"button"},l.createElement(a.h,{className:"label-button"},l.createElement(a.g,{accept:"text/csv",hidden:!0,onChange:function(t){var n=t.currentTarget,l=n.files;null!=l&&0!==l.length&&(e.onImportPortfolio(l[0]),n.value="")},type:"file"}),"Import transactions")),"|",l.createElement(a.a,{color:"link",onClick:e.onDeletePortfolio,size:"sm",type:"button"},"Delete portfolio"),"|",l.createElement(a.a,{color:"link",onClick:e.onDownloadPortfolio,size:"sm",type:"button"},"Download to spreadsheet"))}n(132);var d=n(29);function b(){return l.createElement("div",{className:"bg-light shadow-sm nav-scroller"},l.createElement(a.l,{className:"nav-portfolio",role:"navigation"},l.createElement(a.m,null,l.createElement(d.c,{className:"nav-link",exact:!0,to:"/"},"Overview")),l.createElement(a.m,null,l.createElement(d.c,{className:"nav-link",to:"/performance"},"Performance")),l.createElement(a.m,null,l.createElement(d.c,{className:"nav-link",to:"/transactions"},"Transactions")),l.createElement(a.m,null,l.createElement(d.c,{className:"nav-link",to:"./components/accountBox/loginForm.jsx"},"Login")),l.createElement(a.m,null,l.createElement(d.c,{className:"nav-link",to:"./components/accountBox/signupForm.jsx"},"signup"))))}function h(e){var t=e.children,n=e.deleteDisabled,s=e.onDelete,c=Object(o.c)(),i=Object(o.d)((function(e){return e.isFetchingCount>0}));return l.createElement(l.Fragment,null,l.createElement(b,null),l.createElement(a.d,{fluid:!0},l.createElement(a.q,{className:"mb-3 mt-3"},l.createElement(a.b,null,l.createElement(a.a,{color:n?"secondary":"danger",disabled:n,onClick:s,outline:!0,size:"sm"},"Delete")),l.createElement(u,{onDeletePortfolio:function(){window.confirm("Are you sure you want to delete the entire portfolio? This is irreversible.")&&c(Object(r.c)())},onDownloadPortfolio:function(){c(Object(r.f)())},onImportPortfolio:function(e){c(Object(r.j)(e))}})),t),l.createElement(a.d,{className:"mb-4"},l.createElement(a.q,null,l.createElement(a.b,{md:"6"},l.createElement(m,{isLoading:i,onAddSymbol:function(e){var t={cashValue:null,commission:parseFloat(e.commission)||0,date:e.date,id:-1,notes:null,price:parseFloat(e.price)||0,shares:parseFloat(e.shares)||0,symbol:e.symbol.toUpperCase(),type:e.type||"Buy"};c(Object(r.a)(t)),c(Object(r.h)())}})))))}},262:function(e,t,n){"use strict";n.r(t);var l=n(139),a=n(49),r=n(50),o=n(52),s=n(51),c=n(1),i=n(6),m=n(129),u=n(25),d=n(29),b=n(134),h=n(143),f=n(21),p=n(2),g=n.n(p),y=n(141),v=n.n(y)()(h.a);function E(e){return g()("text-right",{"text-danger":null!=e&&e<0,"text-success":null!=e&&e>=0})}var S=[{accessor:"companyName",Cell:function(e){return null==e.value?"...":e.value},Footer:c.createElement("strong",null,"Portfolio value:"),Header:"Name",headerClassName:"text-left"},{accessor:"symbol",Cell:function(e){return c.createElement(d.b,{to:"/stocks/".concat(e.value)},e.value)},Header:"Symbol",headerClassName:"text-left"},{accessor:"latestPrice",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":m.b.format(e.value))},Header:"Last Price",headerClassName:"text-right"},{accessor:"change.change",Cell:function(e){var t=e.original.change;return c.createElement("div",{className:E(e.value)},null==t.change?"...":"".concat(t.change>=0?"+":"").concat(m.b.format(t.change)," (").concat(t.changePercent>=0?"+":"").concat(m.d.format(t.changePercent),")"))},Header:"Change",headerClassName:"text-right"},{accessor:"marketCap",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":m.a.format(e.value))},Header:"Mkt. Cap",headerClassName:"text-right"},{accessor:"latestVolume",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":m.a.format(e.value))},Header:"Volume",headerClassName:"text-right"},{accessor:"open",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":m.b.format(e.value))},Header:"Open",headerClassName:"text-right"},{accessor:"high",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":m.b.format(e.value))},Header:"High",headerClassName:"text-right"},{accessor:"low",Cell:function(e){return c.createElement("div",{className:"text-right"},null==e.value?"...":m.b.format(e.value))},Header:"Low",headerClassName:"text-right"},{accessor:"daysGain",Cell:function(e){return c.createElement("div",{className:E(e.value)},null==e.value?"...":"".concat(e.value>=0?"+":"").concat(m.b.format(e.value)))},Footer:function(e){var t=e.data.reduce((function(e,t){return e+t.daysGain}),0);return c.createElement("div",{className:E(t)},t>=0?"+":"",m.b.format(t))},Header:"Day's gain",headerClassName:"text-right"}],N=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).handleDeleteSelectedSymbols=function(){l.props.dispatch(Object(u.d)(Array.from(l.state.selectedSymbols)))},l.handlePageSizeChange=function(e){l.props.dispatch(Object(u.b)(e))},l.handleToggleAllSymbols=function(e){l.isAllSymbolsSelected()?l.setState({selectedSymbols:new Set}):l.setState({selectedSymbols:new Set(l.props.symbols)})},l.handleToggleSymbolSelected=function(e){var t=e.replace(/^select-/,"");l.isSymbolSelected(t)?l.state.selectedSymbols.delete(t):l.state.selectedSymbols.add(t),l.forceUpdate()},l.isAllSymbolsSelected=function(){return l.state.selectedSymbols.size===l.props.symbols.length},l.isSymbolSelected=function(e){return l.state.selectedSymbols.has(e)},l.state={selectedSymbols:new Set},l}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props.symbols.map((function(t){var n=e.props.quotes[t],l=e.props.transactions.filter((function(e){return e.symbol===t})).reduce((function(e,t){return e+t.shares}),0);return{change:{change:null==n?null:n.change,changePercent:null==n?null:n.changePercent},companyName:null==n?null:n.companyName,daysGain:null==n||0===l?null:n.change*l,high:null==n?null:n.high,latestPrice:null==n?null:n.latestPrice,latestVolume:null==n?null:n.latestVolume,low:null==n?null:n.low,marketCap:null==n?null:n.marketCap,open:null==n?null:n.open,symbol:t}})),n=0===this.props.symbols.length||0===this.state.selectedSymbols.size;return c.createElement(b.a,{deleteDisabled:n,onDelete:this.handleDeleteSelectedSymbols},c.createElement(i.q,{className:"mb-4"},c.createElement(i.b,null,c.createElement(v,{columns:S,data:t,defaultSorted:[{desc:!1,id:"symbol"}],getPaginationProps:function(){return{className:"pt-2",NextComponent:function(e){return c.createElement(i.a,Object.assign({className:"btn-sm",outline:!0},e))},PreviousComponent:function(e){return c.createElement(i.a,Object.assign({className:"btn-sm",outline:!0},e))},showPageJump:!1}},isSelected:this.isSymbolSelected,keyField:"symbol",noDataText:"No symbols yet. Add one using the form below.",onPageSizeChange:this.handlePageSizeChange,pageSize:this.props.appSettings.pageSize,selectAll:this.isAllSymbolsSelected(),selectType:"checkbox",toggleAll:this.handleToggleAllSymbols,toggleSelection:this.handleToggleSymbolSelected}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n,a=!1,r=new Set(e.symbols),o=new Set,s=Object(l.a)(t.selectedSymbols);try{for(s.s();!(n=s.n()).done;){var c=n.value;r.has(c)?o.add(c):a=!0}}catch(i){s.e(i)}finally{s.f()}return a?{selectedSymbols:o}:null}}]),n}(c.Component);t.default=Object(f.b)((function(e){return{appSettings:e.appSettings,quotes:e.quotes,symbols:e.symbols,transactions:e.transactions}}))(N)}}]);
//# sourceMappingURL=5.c9e1e0a5.chunk.js.map