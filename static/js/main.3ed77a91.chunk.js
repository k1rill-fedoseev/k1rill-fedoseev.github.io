(this.webpackJsonpde_ass=this.webpackJsonpde_ass||[]).push([[0],{28:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32),_Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),Expression=function(){function Expression(e){Object(_Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Expression),this.expr=void 0,this.expr=e}return Object(_Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Expression,[{key:"evaluate",value:function evaluate(params){var importStr="const sin = Math.sin; const cos = Math.cos; const exp = Math.exp; const e = Math.E; const pi = Math.PI; const sqrt = Math.sqrt;",paramsInitStr=Object.entries(params).reduce((function(e,t){var r=Object(_Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(t,2),n=r[0],a=r[1];return"".concat(e,"let ").concat(n," = ").concat(a,";")}),"");try{return eval("".concat(importStr," ").concat(paramsInitStr," ").concat(this.expr))}catch(e){throw Error("Failed to substitute parameters")}}}]),Expression}();__webpack_exports__.a=Expression},37:function(e,t,r){e.exports=r(51)},42:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(11),i=r.n(o),c=(r(42),r(13)),s=r(6),u=r(7),l=r(9),p=r(8),m=r(10),h=r(28),b=function e(t){Object(s.a)(this,e),this.expr=void 0,this.expr=new h.a(t)},_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"evaluate",value:function(e,t){return this.expr.evaluate({x:e,y:t})}}]),t}(b),v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"evaluate",value:function(e,t){return this.expr.evaluate({c:e,x:t})}}]),t}(b),y=function(){function e(t,r){Object(s.a)(this,e),this.name="Exact solution",this.func=void 0,this.c=void 0,this.func=t,this.c=r}return Object(u.a)(e,[{key:"solveIVP",value:function(e,t,r,n){for(var a=(r-e)/n,o={x:[],y:[]},i=this.c.evaluate(e,t),c=0,s=e;c<=n;c++,s+=a)o.x.push(s),o.y.push(this.func.evaluate(i,s));return o}}]),e}(),f=function(){function e(t){Object(s.a)(this,e),this.name=void 0,this.func=void 0,this.func=t}return Object(u.a)(e,[{key:"solveIVP",value:function(e,t,r,n){for(var a=(r-e)/n,o={x:[],y:[]},i=0,c=e,s=t;i<=n;i++,c+=a)o.x.push(c),o.y.push(s),s=this.calculateNewY(c,s,a);return o}},{key:"localErrors",value:function(e,t,r,n,a){for(var o=(r-e)/n,i={x:[e],y:[0]},c=a.c.evaluate(e,t),s=e+o,u=t;s<=e+o*n;s+=o){i.x.push(s);var l=a.func.evaluate(c,s-o);u=this.calculateNewY(s-o,l,o),i.y.push(Math.abs(u-a.func.evaluate(c,s)))}return i}},{key:"globalErrors",value:function(e,t,r,n,a,o){for(var i={x:[],y:[]},c=n;c<=a;c++){i.x.push(c);for(var s=this.solveIVP(e,t,r,c),u=o.solveIVP(e,t,r,c),l=0,p=0;p<s.y.length;p++)l=Math.max(l,Math.abs(u.y[p]-s.y[p]));i.y.push(l)}return i}}]),e}(),d=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).name="Euler solution",r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"calculateNewY",value:function(e,t,r){return t+this.func.evaluate(e,t)*r}}]),t}(f),O=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).name="Runge-Kutte solution",r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"calculateNewY",value:function(e,t,r){var n=this.func.evaluate(e,t),a=this.func.evaluate(e+r/2,t+r*n/2),o=this.func.evaluate(e+r/2,t+r*a/2);return t+(n+2*a+2*o+this.func.evaluate(e+r,t+r*o))*r/6}}]),t}(f),j=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).name="Improved euler solution",r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"calculateNewY",value:function(e,t,r){var n=this.func.evaluate(e,t);return t+(n+this.func.evaluate(e+r,t+r*n))*r/2}}]),t}(f),x=r(76),E=r(79),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,r=e.onChangeFunc,n=e.N,o=e.X,i=e.x0,c=e.y0,s=e.startN,u=e.endN,l=e.yPrime,p=e.y,m=e.c;return a.a.createElement(x.a,{container:!0},a.a.createElement("h3",null,"Input functions here:"),a.a.createElement(x.a,{container:!0},a.a.createElement(x.a,{item:!0,xs:3},a.a.createElement(E.a,{id:"outlined-number",label:"y'=f(x,y)",value:l,onChange:r("yPrime"),type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(x.a,{item:!0,xs:3},a.a.createElement(E.a,{id:"outlined-number",label:"y=f(x)",value:p,onChange:r("y"),type:"text",margin:"normal",variant:"outlined"})),a.a.createElement(x.a,{item:!0,xs:3},a.a.createElement(E.a,{id:"outlined-number",label:"c=f(x,y)",value:m,onChange:r("c"),type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}))),a.a.createElement("h3",null,"Input grid size, IVP and maximum x here:"),a.a.createElement(x.a,{container:!0},a.a.createElement(x.a,{item:!0,xs:3},a.a.createElement(E.a,{id:"outlined-number",label:"N",value:n,onChange:t(!0,"N"),type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(x.a,{item:!0,xs:3},a.a.createElement(E.a,{id:"outlined-number",label:"x0",value:i,onChange:t(!1,"x0"),type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(x.a,{item:!0,xs:3},a.a.createElement(E.a,{id:"outlined-number",label:"y0",value:c,onChange:t(!1,"y0"),type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(x.a,{item:!0,xs:3},a.a.createElement(E.a,{id:"outlined-number",label:"X",value:o,onChange:t(!1,"X"),type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}))),a.a.createElement("h3",null,"Input grid range here:"),a.a.createElement(x.a,{container:!0},a.a.createElement(x.a,{item:!0,xs:3},a.a.createElement(E.a,{id:"outlined-number",label:"startN",value:s,onChange:t(!0,"startN"),type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(x.a,{item:!0,xs:3},a.a.createElement(E.a,{id:"outlined-number",label:"endN",value:u,onChange:t(!0,"endN"),type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}))))}}]),t}(a.a.Component),P=r(31),w=r.n(P),k=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={dimensions:{width:0}},r.container=void 0,r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({dimensions:{width:this.container.offsetWidth}})}},{key:"renderContent",value:function(){var e=this.props,t=e.graphs,r=e.title,n=e.xTitle,o=e.yTitle,i=this.state.dimensions,c=t.map((function(e){return{x:e.x,y:e.y,name:e.name,type:"scatter",line:{shape:"spline"},mode:"lines",marker:{color:e.color}}}));return a.a.createElement(w.a,{data:c,layout:{width:i.width,title:r,autosize:!0,legend:{orientation:"h"},annotations:[{xref:"paper",yref:"paper",x:0,xanchor:"center",y:1.01,font:{size:18},yanchor:"bottom",text:o,showarrow:!1},{xref:"paper",yref:"paper",x:1.01,xanchor:"left",y:0,font:{size:18},yanchor:"center",text:n,showarrow:!1}]},config:{showTips:!1,displaylogo:!1,autosizable:!0,modeBarButtonsToRemove:["toggleSpikelines","toImage"]}})}},{key:"render",value:function(){var e=this,t=this.state.dimensions;return a.a.createElement("div",{ref:function(t){return e.container=t}},t&&this.renderContent())}}]),t}(a.a.Component);function N(e){switch(e){case"Exact solution":return"green";case"Euler solution":return"red";case"Improved euler solution":return"orange";case"Runge-Kutte solution":return"blue";default:return"black"}}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var C=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"evaluateGraphs",value:function(){var e=this.props,t=e.solutions,r=e.x0,n=e.y0,a=e.N,o=e.X;if(a>0&&o>r)try{return t.map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.solveIVP(r,n,o,a),{name:e.name,color:N(e.name)})}))}catch(i){return[]}return[]}},{key:"render",value:function(){return a.a.createElement(k,{title:"Solutions",xTitle:"x",yTitle:"y",graphs:this.evaluateGraphs()})}}]),t}(a.a.Component);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var D=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"evaluateLocalErrors",value:function(){var e=this.props,t=e.x0,r=e.y0,n=e.X,a=e.N,o=e.solutions,i=e.exactSolution;if(a>0&&n>t)try{return o.map((function(e,o){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.localErrors(t,r,n,a,i),{name:e.name,color:N(e.name)})}))}catch(s){return[]}return[]}},{key:"render",value:function(){return a.a.createElement(k,{title:"Local errors",xTitle:"x",yTitle:"LE",graphs:this.evaluateLocalErrors()})}}]),t}(a.a.Component);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"evaluateGlobalErrors",value:function(){var e=this.props,t=e.x0,r=e.y0,n=e.X,a=e.solutions,o=e.startN,i=e.endN,s=e.exactSolution;if(i>o&&n>t)try{return a.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.globalErrors(t,r,n,o,i,s),{name:e.name,color:N(e.name)})}))}catch(u){return[]}return[]}},{key:"shouldComponentUpdate",value:function(e,t,r){return this.props.x0!==e.x0||this.props.y0!==e.y0||this.props.X!==e.X||this.props.endN!==e.endN||this.props.startN!==e.startN||this.props.solutions!==e.solutions||this.props.exactSolution!==e.exactSolution}},{key:"render",value:function(){return a.a.createElement(k,{title:"Global errors",xTitle:"n",yTitle:"GE",graphs:this.evaluateGlobalErrors()})}}]),t}(a.a.Component);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).derivative=void 0,r.analyticalSolution=void 0,r.exact=void 0,r.euler=void 0,r.improvedEuler=void 0,r.rungeKutte=void 0,r.numericalSolutions=void 0,r.solutions=void 0,r.derivative=new _("2*x*(x**2+y)"),r.analyticalSolution=new v("c*exp(x**2)-x**2-1"),r.exact=new y(r.analyticalSolution,new _("(y+x**2+1)/exp(x**2)")),r.euler=new d(r.derivative),r.improvedEuler=new j(r.derivative),r.rungeKutte=new O(r.derivative),r.numericalSolutions=[r.euler,r.improvedEuler,r.rungeKutte],r.solutions=[r.exact].concat(r.numericalSolutions),r.state={yPrime:"2*x*(x**2+y)",y:"c*exp(x**2)-x**2-1",c:"(y+x**2+1)/exp(x**2)",N:50,startN:5,endN:60,X:3,x0:0,y0:0},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"change",value:function(e,t){var r=this;return function(n){var a=(e?parseInt:parseFloat)(n.target.value);r.setState((function(e){return X({},e,Object(c.a)({},t,a))}))}}},{key:"changeFunc",value:function(e){var t=this;return function(r){var n=r.target.value;t.derivative=new _("yPrime"===e?n:t.state.yPrime),t.analyticalSolution=new v("y"===e?n:t.state.y),t.exact=new y(t.analyticalSolution,new _("c"===e?n:t.state.c)),t.euler=new d(t.derivative),t.improvedEuler=new j(t.derivative),t.rungeKutte=new O(t.derivative),t.numericalSolutions=[t.euler,t.improvedEuler,t.rungeKutte],t.solutions=[t.exact].concat(t.numericalSolutions),t.setState((function(t){return X({},t,Object(c.a)({},e,n))}))}}},{key:"render",value:function(){var e=this.state,t=e.x0,r=e.y0,n=e.X,o=e.N,i=e.startN,c=e.endN,s=e.yPrime,u=e.y,l=e.c;return a.a.createElement("div",{className:"App"},a.a.createElement(x.a,{container:!0,spacing:2},a.a.createElement(x.a,{item:!0,md:12,lg:6},a.a.createElement(C,{x0:t,y0:r,N:o,X:n,solutions:this.solutions})),a.a.createElement(x.a,{item:!0,md:12,lg:6},a.a.createElement(D,{x0:t,y0:r,N:o,X:n,solutions:this.numericalSolutions,exactSolution:this.exact})),a.a.createElement(x.a,{item:!0,md:12,lg:6},a.a.createElement(L,{x0:t,y0:r,startN:i,endN:c,X:n,solutions:this.numericalSolutions,exactSolution:this.exact})),a.a.createElement(x.a,{item:!0,md:12,lg:6},a.a.createElement(g,{startN:i,endN:c,N:o,X:n,x0:t,y0:r,yPrime:s,y:u,c:l,onChange:this.change.bind(this),onChangeFunc:this.changeFunc.bind(this)}))))}}]),t}(a.a.Component);i.a.render(a.a.createElement(A,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.3ed77a91.chunk.js.map