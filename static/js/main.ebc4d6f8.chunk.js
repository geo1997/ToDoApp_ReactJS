(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{69:function(e,t,a){e.exports=a(79)},74:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),o=(a(74),a(44)),c=a(43),m=a(32),d=a(33),s=a(27),u=a(37),h=a(39),f=a(112),p=a(127),I=a(116),E=a(40),v=a(55),b=a.n(v),g=a(36),k=a.n(g),y=a(117),w={edit:{width:"40%",marginLeft:270,background:"#76ff03"},add:{width:"40%",marginLeft:270,background:"#18ffff",size:"large"},root:{minHeight:210}},j=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={errorState:!1},e.validateItem=function(t){e.props.addItem(t),e.setState({errorState:!e.props.newItem})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.newItem,a=e.handleInput,n=e.updateItem;return i.a.createElement("div",null,i.a.createElement(I.a,{maxWidth:"md"},i.a.createElement(E.a,{component:"div",style:{borderColor:"#00c853"}},i.a.createElement(y.a,{style:w.root},i.a.createElement(E.a,{variant:"overline",color:"secondary",style:{fontFamily:"Roboto",margin:10}},"All about your needs"),i.a.createElement("form",{onSubmit:this.validateItem,autoComplete:"off"},i.a.createElement(p.a,{id:"outlined-full-width",label:"Input",style:{width:"90%",marginTop:30,marginLeft:40},placeholder:"Add A Todo Item ",margin:"normal",InputLabelProps:{shrink:!0},error:this.state.errorState,helperText:this.state.errorState&&"Item name can't be blank",size:"large",variant:"outlined",value:t,onChange:a}),n?i.a.createElement(f.a,{type:"submit",variant:"contained",color:"inherit",style:w.edit,fontsize:"inherit",startIcon:i.a.createElement(k.a,null)},"Edit Item"):i.a.createElement(f.a,{type:"submit",variant:"contained",color:"inherit",fontsize:"inherit",style:w.add,startIcon:i.a.createElement(b.a,null)},"Add Item"))))))}}]),a}(n.Component),C=a(119),S=a(120),O=a(121),x=a(42),T=a.n(x),L=function(){return i.a.createElement("div",null,i.a.createElement(C.a,{position:"static",style:{background:"#263238"}},i.a.createElement(S.a,null,i.a.createElement(O.a,{container:!0,direction:"row",justify:"center"},i.a.createElement(O.a,{item:!0},i.a.createElement(T.a,null)),i.a.createElement(O.a,{item:!0},i.a.createElement(E.a,{variant:"title"},"To Do Application"))))))},A=a(58),z=a(122),B=a(57),D=a.n(B),W=a(118),H=a(123),J=a(124),M=a(125),N=a(56),F=a.n(N),P=a(126),R=Object(z.a)((function(e){return{demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)},root:{minHeight:170}}})),$=function(e){var t=R(),a=i.a.useState(!1),n=Object(A.a)(a,1)[0],r=e.clearList,l=e.items,o=e.deleteItem,c=e.updateItem,m=e.handleClick;return i.a.createElement("div",null,i.a.createElement(O.a,{container:!0,justify:"center",alignContent:"center"},i.a.createElement(O.a,{item:!0,xs:12,md:6},i.a.createElement(E.a,{variant:"h5",className:t.title,gutterBottom:!0},"To do List  ",i.a.createElement(E.a,{variant:"caption"},"Click on an Item to Complete")),i.a.createElement("div",{className:t.demo},i.a.createElement(W.a,{dense:n},l.map((function(e){return i.a.createElement(H.a,{key:e.id,button:!0,id:e.id,style:{textDecoration:e.isStriked?"line-through":"initial"},onClick:function(){return t=e.id,void m(t);var t},divider:!0},i.a.createElement(J.a,{primary:(t=e,i.a.createElement("div",{key:t.id},t.itemText))}),i.a.createElement(M.a,null,i.a.createElement(P.a,{onClick:function(){return c(e.id)},edge:"end","aria-label":"edit",style:{color:"#76ff03"}},i.a.createElement(k.a,null)),i.a.createElement(P.a,{onClick:function(){return o(e.id)},edge:"end","aria-label":"delete",style:{color:"#d50000"}},i.a.createElement(F.a,null))));var t})))),i.a.createElement(f.a,{variant:"text",color:"inherit",style:{background:"#d50000",width:"100%",color:"white"},fontsize:"inherit",onClick:r,startIcon:i.a.createElement(D.a,null)},"Clear All"))),i.a.createElement("br",null))},q=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState({newItem:{id:1+Math.random(),itemText:e.target.value}})},n.addItem=function(e){e.preventDefault();var t=n.state.newItem;if(""!==t.itemText){var a=[Object(o.a)({},t,{isStriked:!1})].concat(Object(c.a)(n.state.items));n.setState({items:a,newItem:{id:"",itemText:""},updateItem:!1})}},n.clearList=function(){n.setState({items:[]})},n.deleteItem=function(e){var t=n.state.items.filter((function(t){return t.id!==e}));n.setState({items:t})},n.updateItem=function(e){var t=n.state.items.filter((function(t){return t.id!==e})),a=n.state.items.find((function(t){return t.id===e}));n.setState({items:t,newItem:{itemText:a.itemText},updateItem:!0,id:e})},n.handleClick=function(e){var t=n.state.items.find((function(t){return t.id===e}));!1===t.isStriked&&n.setState({items:[].concat(Object(c.a)(n.state.items.filter((function(t){return t.id!==e}))),[Object(o.a)({},t,{isStriked:!0})])})},n.state={items:[],newItem:{id:"",itemText:""},updateItem:!1},n.handleInput=n.handleInput.bind(Object(s.a)(n)),n.addItem=n.addItem.bind(Object(s.a)(n)),n}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(L,null),i.a.createElement(j,{newItem:this.state.newItem.itemText,addItem:this.addItem,handleInput:this.handleInput,updateItem:this.state.updateItem}),i.a.createElement($,{items:this.state.items,clearList:this.clearList,deleteItem:this.deleteItem,updateItem:this.updateItem,handleClick:this.handleClick}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.ebc4d6f8.chunk.js.map