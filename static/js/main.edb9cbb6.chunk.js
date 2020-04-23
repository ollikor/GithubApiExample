(this["webpackJsonpgithub-api-example"]=this["webpackJsonpgithub-api-example"]||[]).push([[0],{28:function(e,t,a){e.exports=a(43)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(24),s=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(16),i=a(25),l=a(19),m=a(8),u=a(9),p=a(13),h=a(10),f=a(14),d=a(12),v=a(5),E=a(11),b={"header-title":"Github API Example","search-label":"Search repositories with username","user-error":"Set a username","repository-error":"No repositories","no-internet":"No internet connection",repository:"Repository",committed:"Committed on"};var g=function(){return n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"Header-content"},n.a.createElement("p",{className:"Header-title"},b["header-title"]),n.a.createElement(E.a,{className:"Header-logo",icon:["fab","github"]})))},y=a(15),w=a.n(y),N=function(){return n.a.createElement("div",{className:"Small-loader"})},x=function(){return n.a.createElement("div",{className:"Big-loader"})};function S(e){if(!e.ok)throw Error(e.statusText);return e}function k(e){if(!1===window.navigator.onLine)throw new Error("No internet connection");return fetch(e).then(S).then((function(e){return e.json()}))}function j(e){return k("https://api.github.com/users/".concat(e.username,"/repos"))}function O(e){return k("https://api.github.com/repos/".concat(e.owner,"/").concat(e.repository,"/commits?per_page=10"))}var C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={inputText:"",error:"",loading:!1},a.handleSubmit=function(e){var t,r,n,o;return w.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.setState({error:""}),a.props.repositories([]),e.preventDefault(),""!==a.state.inputText){s.next=7;break}a.setState({error:b["user-error"]}),s.next=22;break;case 7:return a.setState({loading:!0}),t=a.state.inputText,r={username:t},s.prev=10,s.next=13,w.a.awrap(j(r));case 13:n=s.sent,o=n.length?"":b["repository-error"],a.setState({error:o,loading:!1}),a.props.repositories(n),s.next=22;break;case 19:s.prev=19,s.t0=s.catch(10),a.setState({error:s.t0.message,loading:!1});case 22:case"end":return s.stop()}}),null,null,[[10,19]])},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Search"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("label",null,b["search-label"]),n.a.createElement("input",{className:"Search-input",onFocus:function(e){return e.target.select()},placeholder:"username",onChange:function(t){return e.setState({inputText:t.target.value})},value:this.state.inputText}),n.a.createElement("button",{className:"Search-button"},this.state.loading?n.a.createElement(N,null):n.a.createElement(E.a,{icon:"search"})),this.state.error?n.a.createElement("p",{className:"Error"},this.state.error):null))}}]),t}(r.Component);var A=function(e){function t(e){return e%2===0?{backgroundColor:"#737373",color:"#ffffff"}:{backgroundColor:"#ffffff",color:"#737373"}}return n.a.createElement("ul",null,e.repositories.map((function(e,a){return n.a.createElement("li",{key:a,style:t(a),className:"Repositories"},n.a.createElement(d.b,{style:t(a),className:"Repositories-link",to:"/".concat(e.owner.login,"/").concat(e.name)},e.name))})))},R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={commits:[],repository:"",loading:!0,error:""},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,r;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return this.setState({error:""}),e=this.props.match.params.owner,t=this.props.match.params.repository,a={owner:e,repository:t},n.prev=4,n.next=7,w.a.awrap(O(a));case 7:r=n.sent,this.setState({commits:r,repository:t,loading:!1}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),this.setState({error:n.t0.message,loading:!1});case 14:case"end":return n.stop()}}),null,this,[[4,11]])}},{key:"render",value:function(){return n.a.createElement("div",{className:"Repository-content"},this.state.loading?n.a.createElement(x,null):n.a.createElement("div",null,n.a.createElement(d.b,{to:"/"},n.a.createElement(E.a,{className:"back",icon:"long-arrow-alt-left"})),this.state.error?n.a.createElement("p",{className:"Error"},this.state.error):n.a.createElement("div",null,n.a.createElement("p",{className:"Repository-title"},b.repository,": ",this.state.repository),this.state.commits.map((function(e,t){var a=new Date(e.commit.author.date);return n.a.createElement("div",{key:t,className:"Commit-container"},n.a.createElement("p",{className:"commit-text"},e.commit.message),null!==e.author?n.a.createElement("img",{className:"Commit-avatar",src:e.author.avatar_url,alt:"avatar"}):null,n.a.createElement("p",{className:"Commit-item"},e.commit.author.name),n.a.createElement("p",{className:"Commit-item"},b.committed," ",a.toLocaleDateString()))})))))}}]),t}(r.Component),T=Object(v.f)(R),D=(a(41),function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={repositories:[]},a.handleRepositories=function(e){a.setState({repositories:e})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement("div",{className:"App-container"},n.a.createElement("div",{className:"App-content"},n.a.createElement(d.a,{basename:"/"},n.a.createElement(v.c,null,n.a.createElement(v.a,{path:"/",exact:!0},n.a.createElement(C,{repositories:function(t){return e.handleRepositories(t)}}),n.a.createElement(A,{repositories:this.state.repositories})),n.a.createElement(v.a,{path:"/:owner/:repository"},n.a.createElement(T,null)))))))}}]),t}(r.Component));a(42);c.b.add(i.a,l.b,l.a),s.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.edb9cbb6.chunk.js.map