(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{257:function(t,e,n){t.exports=n(449)},262:function(t,e,n){},449:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(42),i=n.n(c),o=(n(262),n(35)),s=n(36),u=n(19),l=n(37),p=n(20),d=n(463),f=n(464),h=n(465),m=n(32),b=n.n(m),v=n(38),O=n(33),y=n(34),g=n(40),j=n.n(g),w=n(450),E=n(461),x=n(223),k=(n(290),n(458));function C(){var t=Object(O.a)(["\n  &&&{\n    height: 115px;\n  }\n"]);return C=function(){return t},t}function S(){var t=Object(O.a)(["\n  padding-top:100px;\n  padding-bottom:50px;\n  display:flex;\n  justify-content: space-evenly;\n"]);return S=function(){return t},t}function P(){var t=Object(O.a)(["\n  background: #f1f1f1;\n"]);return P=function(){return t},t}function D(){var t=Object(O.a)(["\n height: 50.5vw;\n background-color:black;\n"]);return D=function(){return t},t}function N(){var t=Object(O.a)(["\n  font-weight: bold;\n  font-style: italic;\n  position: absolute;\n  font-size:150px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  opacity: 0.8;\n"]);return N=function(){return t},t}var M=y.a.div(N()),A=y.a.img(D()),I=y.a.div(P()),_=y.a.div(S()),T=Object(y.a)(w.a)(C()),B=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={cities:[]},n.componentDidMount=Object(v.a)(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.fetchCities();case 2:case"end":return t.stop()}},t,this)})),n.fetchCities=Object(v.a)(b.a.mark(function t(){var e;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("api/cities");case 2:e=t.sent,n.setState({cities:e.data});case 4:case"end":return t.stop()}},t,this)})),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state.cities.map(function(t,e){return r.a.createElement("div",{key:e},r.a.createElement(k.a,{to:"/cities/".concat(t.id)},r.a.createElement(E.a,null,r.a.createElement(T,{src:t.img}),r.a.createElement(E.a.Content,null,r.a.createElement(E.a.Header,null,t.name)))))});return r.a.createElement(I,null,r.a.createElement(x.Carousel,{dynamicHeight:!0,autoPlay:!0,showThumbs:!1,showIndicators:!1,showStatus:!1,interval:8e3,infiniteLoop:!0,transitionTime:2e3},r.a.createElement("div",null,r.a.createElement(A,null)),r.a.createElement("div",null,r.a.createElement(A,{src:"https://i.imgur.com/ryX9LiT.jpg"})),r.a.createElement("div",null,r.a.createElement(A,{src:"https://i.imgur.com/EwfNdxu.jpg"})),r.a.createElement("div",null,r.a.createElement(A,{src:"https://i.imgur.com/vKlbMZD.jpg"}))),r.a.createElement(M,null,"Vagabond"),r.a.createElement(_,null,t))}}]),e}(a.Component);function z(){var t=Object(O.a)(["\n&&&{\n  font: 14px 'Noto Sans', sans-serif;\n  align-self: center;\n  padding-right: 20px;\n  color:white;\n}\n  "]);return z=function(){return t},t}function H(){var t=Object(O.a)(["\n  font: 30px 'Noto Sans', sans-serif;\n  font-weight: bold;\n  font-style: italic;\n  align-self: flex-start;\n  padding-left: 20px;\n"]);return H=function(){return t},t}function J(){var t=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  /* border-bottom: 1px solid black; */\n  background: grey;\n  color: #f1f1f1;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n"]);return J=function(){return t},t}var L=y.a.div(J()),V=y.a.div(H()),W=Object(y.a)(k.a)(z()),Y=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(L,null,r.a.createElement(V,null,"Vagabond"),r.a.createElement(W,{to:"/signin"},"|Sign in|"))}}]),e}(a.Component),K=n(104),U=n.n(K),X=n(462),Z=n(94),$=n(460),q=n(459),F=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(c)))).state={post:{title:"",body:""},modalOpen:!1},n.handleChange=function(t){var e=Object(Z.a)({},n.state.post);e[t.target.name]=t.target.value,n.setState({post:e})},n.handleSubmit=function(){var t=Object(v.a)(b.a.mark(function t(e){var a,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.props.cityId,r=n.props.postId,e.preventDefault(),t.next=5,j.a.put("/api/cities/".concat(a,"/posts/").concat(r),n.state.post);case 5:return n.props.push("/cities/".concat(a,"/posts/").concat(r)),n.setState({modalOpen:!1}),t.next=9,n.props.fetchData;case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n.handleOpen=function(){return n.setState({modalOpen:!0})},n.editPostModal=function(){return r.a.createElement($.a,{trigger:r.a.createElement(X.a,{onClick:n.handleOpen},"Edit"),open:n.state.modalOpen},r.a.createElement($.a.Content,{form:!0},r.a.createElement(q.a,{onSubmit:n.handleSubmit},"Title:",r.a.createElement("input",{type:"text",name:"title",value:n.state.post.title,onChange:n.handleChange}),"Body:",r.a.createElement("input",{type:"text",name:"body",value:n.state.post.body,onChange:n.handleChange}),r.a.createElement(X.a,{type:"submit",value:"Update Post"},"Submit"))))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return this.editPostModal()}}]),e}(a.Component);function G(){var t=Object(O.a)(["\n   padding: 100px;\n"]);return G=function(){return t},t}var Q=y.a.div(G()),R=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={city:{},post:{}},n.fetchData=Object(v.a)(b.a.mark(function t(){var e,a,r,c;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.props.match.params.city_id,a=n.props.match.params.id,t.next=4,j.a.get("/api/cities/".concat(e));case 4:return r=t.sent,t.next=7,j.a.get("/api/cities/".concat(e,"/posts/").concat(a));case 7:c=t.sent,n.setState({city:r.data,post:c.data});case 9:case"end":return t.stop()}},t,this)})),n.handleDelete=function(){var t=Object(v.a)(b.a.mark(function t(e){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:U()({title:"Are You Sure You want to Delete ".concat(n.state.post.title," ?"),icon:"warning",buttons:!0,dangerMode:!0}).then(function(t){t?U()("Success!",{icon:"success"}).then(Object(v.a)(b.a.mark(function t(){var a;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.props.match.params.city_id,t.next=3,j.a.delete("/api/cities/".concat(a,"/posts/").concat(e));case 3:n.props.history.push("/cities/".concat(a));case 4:case"end":return t.stop()}},t,this)}))):U()("Successfully Cancelled")});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=Object(v.a)(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.fetchData();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.city,n=this.state.post;return r.a.createElement(Q,null,r.a.createElement("h2",null,e.name),r.a.createElement("h1",null,n.title),r.a.createElement("p",null,n.body),r.a.createElement(F,{cityId:this.props.match.params.city_id,postId:this.props.match.params.id,push:this.props.history.push,fetchData:this.fetchData()}),r.a.createElement(X.a,{onClick:function(){return t.handleDelete(n.id)}},"Delete"))}}]),e}(a.Component);function tt(){var t=Object(O.a)(["\n    &&& {\n        width: 30vw; \n        margin:auto;   \n    }\n"]);return tt=function(){return t},t}var et=Object(y.a)(q.a)(tt()),nt=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(c)))).state={newPost:{title:"",body:""},modalOpen:!1},n.handleOpen=function(){return n.setState({modalOpen:!0})},n.handleChange=function(t){var e=Object(Z.a)({},n.state.newPost);e[t.target.name]=t.target.value,n.setState({newPost:e})},n.handleSubmit=function(t){t.preventDefault();var e=Object(Z.a)({},n.state.newPost);n.props.addNewPost(e),n.setState({newPost:{title:"",body:""}}),n.setState({modalOpen:!1})},n.addNewPostModal=function(){return r.a.createElement($.a,{trigger:r.a.createElement(X.a,{onClick:n.handleOpen},"Add New Post"),open:n.state.modalOpen},r.a.createElement($.a.Content,{form:!0},r.a.createElement(et,{onSubmit:n.handleSubmit},r.a.createElement("input",{onChange:n.handleChange,type:"text",name:"title",value:n.state.newPost.title,placeholder:"Title"}),r.a.createElement("input",{onChange:n.handleChange,type:"text",name:"body",value:n.state.newPost.body,placeholder:"Body",height:"50%"}),r.a.createElement(X.a,{className:"update",type:"submit",value:"Add Post"},"Submit"))))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return this.addNewPostModal()}}]),e}(a.Component);function at(){var t=Object(O.a)(["\n    &&&{\n        width: 600px;\n    }\n"]);return at=function(){return t},t}function rt(){var t=Object(O.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    padding: 30px;\n    background: #f1f1f1;\n"]);return rt=function(){return t},t}function ct(){var t=Object(O.a)(["\n    padding-left: 30px;\n    padding-top: 20px;\n    width: 100vw;\n    display: block;\n    justify-content: center;\n    align-items: baseline;\n    background: #f1f1f1;\n"]);return ct=function(){return t},t}function it(){var t=Object(O.a)(["\n    color: white;\n    font-size: 50px;\n    left: 0;\n    position:absolute;\n    text-align:center;\n    top: 20px;\n    width: 100%;\n    font-family: 'Noto Sans', sans-serif;\n    font-style: italic;\n"]);return it=function(){return t},t}function ot(){var t=Object(O.a)(["\n    width: 100vw;\n    padding-top: 60px;\n    position: relative;\n"]);return ot=function(){return t},t}function st(){var t=Object(O.a)(["\n    margin: auto;\n    background: #f1f1f1;\n"]);return st=function(){return t},t}var ut=y.a.div(st()),lt=y.a.img(ot()),pt=y.a.div(it()),dt=y.a.div(ct()),ft=y.a.div(rt()),ht=Object(y.a)(E.a)(at()),mt=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={city:{},posts:[]},n.fetchData=Object(v.a)(b.a.mark(function t(){var e,a,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.props.match.params.id,t.next=3,j.a.get("/api/cities/".concat(e));case 3:return a=t.sent,t.next=6,j.a.get("/api/cities/".concat(e,"/posts"));case 6:r=t.sent,n.setState({posts:r.data,city:a.data});case 8:case"end":return t.stop()}},t,this)})),n.addNewPost=function(){var t=Object(v.a)(b.a.mark(function t(e){var a;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.props.match.params.id,t.next=3,j.a.post("/api/cities/".concat(a,"/posts"),e);case 3:n.fetchData();case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=Object(v.a)(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.fetchData();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.city,e=this.state.posts.map(function(t,e){return r.a.createElement(k.a,{to:"/cities/".concat(t.city_id,"/posts/").concat(t.id)},r.a.createElement(ht,{key:e},r.a.createElement(E.a.Content,{header:t.title}),r.a.createElement(E.a.Content,{description:t.body}),r.a.createElement(E.a.Content,{extra:!0},t.created_at)))});return r.a.createElement(ut,null,r.a.createElement(lt,{src:t.img,alt:t.name}),r.a.createElement(pt,null,t.name),r.a.createElement(dt,null,r.a.createElement(nt,{addNewPost:this.addNewPost})),r.a.createElement(ft,null,e.reverse()))}}]),e}(a.Component);function bt(){var t=Object(O.a)(["\n    padding:60px;\n    font-size: 60px;\n"]);return bt=function(){return t},t}var vt=y.a.div(bt()),Ot=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(vt,null,"Coming Soon")}}]),e}(a.Component),yt=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement(f.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:B}),r.a.createElement(h.a,{exact:!0,path:"/signin",component:Ot}),r.a.createElement(h.a,{exact:!0,path:"/cities/:id",component:mt}),r.a.createElement(h.a,{exact:!0,path:"/cities/:city_id/posts/:id",component:R}))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(yt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[257,2,1]]]);
//# sourceMappingURL=main.b500c32c.chunk.js.map