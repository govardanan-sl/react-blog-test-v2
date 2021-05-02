(this["webpackJsonpsocial-media"]=this["webpackJsonpsocial-media"]||[]).push([[0],{22:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var r=s(1),o=s.n(r),n=s(23),a=s.n(n),c=(s(29),s(30),s(3)),i=s(20),l=s(6),h=s(7),d=s(9),j=s(8),u=s(0),b=Object(r.createContext)(),p=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={isLoggedIn:!1,profile_id:null,accessToken:null},e.LoggedIn=function(t){e.setState({isLoggedIn:!0,profile_id:t})},e.Loggout=function(){e.setState({isLoggedIn:!1,profile_id:null,accessToken:null})},e.SetAccessToken=function(t,s){e.setState({isLoggedIn:!0,profile_id:s,accessToken:t})},e}return Object(h.a)(s,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("UserProfileData"));e?this.setState(e):this.setState({isLoggedIn:!1,profile_id:null,accessToken:null})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("UserProfileData",JSON.stringify(this.state))}},{key:"render",value:function(){return Object(u.jsx)(b.Provider,{value:Object(i.a)(Object(i.a)({},this.state),{},{LoggedIn:this.LoggedIn,Loggout:this.Loggout,SetAccessToken:this.SetAccessToken}),children:this.props.children})}}]),s}(r.Component),O=function(){var e=Object(r.useContext)(b),t=e.profile_id,s=e.isLoggedIn,o=e.Loggout;return Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)(c.b,{to:"/react-blog-test-v2",children:Object(u.jsx)("h1",{children:"The Social Media App"})}),Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)(c.b,{to:"/react-blog-test-v2",children:"Home"}),Object(u.jsx)(c.b,{to:"/profile",children:"Profile"}),Object(u.jsx)(c.b,{to:"/",children:"About"}),s&&Object(u.jsx)(c.b,{to:"/create",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"New Post"}),!s&&Object(u.jsx)(c.b,{to:"/login",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Login"}),t&&Object(u.jsx)(c.b,{to:"#",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},onClick:o,children:"Logout"})]})]})},f=function(e){var t=e.posts,s=e.title;return Object(u.jsxs)("div",{className:"post-list",children:[Object(u.jsx)("h2",{children:s}),t.map((function(e){return Object(u.jsx)("div",{onClick:function(){return window.open("/posts/".concat(e.id))},children:Object(u.jsxs)("div",{className:"post-preview",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsx)("p",{children:e.body}),Object(u.jsxs)("p",{children:["by ",Object(u.jsx)(c.b,{to:"/profile/".concat(e.author_id),className:"link-highlight",children:e.author})]})]})},e.id)}))]})},g=s(4),m=function(e,t){var s=Object(r.useState)(null),o=Object(g.a)(s,2),n=o[0],a=o[1],c=Object(r.useState)(!0),i=Object(g.a)(c,2),l=i[0],h=i[1],d=Object(r.useState)(null),j=Object(g.a)(d,2),u=j[0],b=j[1];return Object(r.useEffect)((function(){var s=new AbortController,r=t,o=t.headers;return o.append("signal",s.signal),r.headers=o,fetch(e,r).then((function(e){if(!e.ok)throw Error("Could not Fetch data");return e.json()})).then((function(e){a(e),h(!1),b(null)})).catch((function(e){"AbortError"===e.name?console.log("Fetch Aborted"):(console.log(e.message),b(e.message))})),function(){return s.abort()}}),[e,t]),{data:n,isLoading:l,isError:u}},x=function(){var e=m("https://backend-react-json-server.herokuapp.com/posts",{headers:new Headers}),t=e.data,s=e.isLoading,r=e.isError;return Object(u.jsxs)("div",{className:"Home",children:[Object(u.jsxs)("div",{className:"moved-out",style:{marginBottom:"1rem"},children:[Object(u.jsx)("h2",{style:{color:"#ff003cf0",margin:"1rem"},children:"This Page is Depreciated"}),Object(u.jsx)(c.b,{to:"/react-blog-test-v2",className:"link-highlight",children:"Click Here "}),"to Move to New Home Page"]}),!r&&s&&Object(u.jsx)("div",{children:"Loading...."}),r&&Object(u.jsx)("div",{children:Object(u.jsx)("h2",{style:{color:"#ff003cf0"},children:r})}),t&&Object(u.jsx)(f,{posts:t,title:"All Posts"}),t&&Object(u.jsx)(f,{posts:t.filter((function(e){return"bruce"===e.author})),title:"My Posts"})]})},v=s(2),k=function(){var e=Object(r.useContext)(b),t=e.profile_id,s=e.accessToken,o=Object(r.useState)(""),n=Object(g.a)(o,2),a=n[0],c=n[1],i=Object(r.useState)(""),l=Object(g.a)(i,2),h=l[0],d=l[1],j=Object(r.useState)(""),p=Object(g.a)(j,2),O=p[0],f=p[1],m=Object(r.useState)(!1),x=Object(g.a)(m,2),k=x[0],y=x[1],E=Object(r.useState)(!1),w=Object(g.a)(E,2),L=w[0],C=w[1],S=Object(v.f)(),N=Object(r.useRef)();Object(r.useEffect)((function(){N.current.focus()}),[N]);return Object(u.jsxs)("div",{className:"create",children:[Object(u.jsx)("h2",{children:"New Post"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r={title:a,body:h,author:O,author_id:t};y(!0);var o=new Headers;o.append("Authorization","Bearer "+s),o.append("Content-Type","application/json");var n={method:"POST",Authorization:"Bearer "+s,headers:o,body:JSON.stringify(r)};fetch("https://backend-react-json-server-auth.herokuapp.com/posts",n).then((function(e){if(201!==e.status)throw Error(e.statusText);console.log("Posted"),y(!1),S.push("/react-blog-test-v2")})).catch((function(e){console.log(e.message),C(!0),y(!1)}))},children:[Object(u.jsx)("label",{children:"Post Title : "}),Object(u.jsx)("input",{type:"text",required:!0,value:a,onChange:function(e){return c(e.target.value)},ref:N}),Object(u.jsx)("label",{children:"Post Body : "}),Object(u.jsx)("textarea",{value:h,onChange:function(e){return d(e.target.value)},required:!0}),Object(u.jsx)("label",{children:"Author Name : "}),Object(u.jsx)("input",{value:O,onChange:function(e){return f(e.target.value)},type:"text",required:!0}),t&&!k&&!L&&Object(u.jsx)("button",{type:"submit",children:"Post"}),L&&Object(u.jsx)("h2",{className:"error",children:"Login Expired"}),k&&Object(u.jsx)("button",{disabled:!0,children:"Please Wait..."}),!t&&Object(u.jsx)("h2",{className:"error",children:"Login to Post"})]})]})},y=s(15),E=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var r;return Object(l.a)(this,s),(r=t.call(this,e)).abortController=new window.AbortController,r.handleDelete=function(){var e=r.props.match.params.id,t=new Headers,s=r.context.accessToken;t.append("Authorization","Bearer "+s),t.append("signal",r.abortController.signal),fetch("https://backend-react-json-server-auth.herokuapp.com/posts/"+e,{method:"DELETE",headers:t,redirect:"follow"}).then((function(){console.log("Deleted Successfully");var e=r.props.history;e&&e.push("/react-blog-test-v2")})).catch((function(e){console.log(e)}))},r.state={postData:null,isLoading:!0,isError:null},r.handleDelete=r.handleDelete.bind(Object(y.a)(r)),r}return Object(h.a)(s,[{key:"fetchPosts",value:function(e){var t=this,s=this.context.accessToken,r="https://backend-react-json-server-auth.herokuapp.com/posts/"+e,o=new Headers;o.append("Authorization","Bearer "+s),o.append("signal",this.abortController.signal),fetch(r,{method:"GET",headers:o,redirect:"follow"}).then((function(e){if(401===e.status)return e.json();if(!e.ok)throw Error("Could not Fetch data");return e.json()})).then((function(e){if("Access token not provided"===e.message)throw t.setState({postData:null,isLoading:!1,isError:"Login Expired"}),Error("Login Expired");t.setState({postData:e,isLoading:!1,isError:!1})})).catch((function(e){"AbortError"===e.name?console.log("Fetch Aborted"):(console.log(e.message),t.setState({isError:e.message}))}))}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.context.accessToken&&this.fetchPosts(e)}},{key:"componentWillUnmount",value:function(){this.abortController.abort()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"post-details",children:[!this.state.isError&&this.state.isLoading&&Object(u.jsx)("div",{children:"Loading Post..."}),this.state.isError&&Object(u.jsxs)("div",{className:"error",children:[this.state.isError,"!!",Object(u.jsx)("br",{})]}),this.state.postData&&Object(u.jsxs)("article",{children:[Object(u.jsx)("h2",{children:this.state.postData.title}),Object(u.jsxs)("p",{children:["posted by ",Object(u.jsx)(c.b,{className:"link-highlight",to:"/profile/".concat(this.state.postData.author_id),children:this.state.postData.author})]}),Object(u.jsx)("div",{children:this.state.postData.body}),Object(u.jsx)("button",{onClick:this.handleDelete,children:"Delete"})]})]})}}]),s}(r.Component);E.contextType=b;var w=Object(v.g)(E),L=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"not-found",children:[Object(u.jsx)("h2",{children:"Broken Link"}),Object(u.jsx)("p",{children:"The Page you requested not found"}),Object(u.jsx)(c.b,{to:"/react-blog-test-v2",className:"link-highlight",children:"Home"})]})}}]),s}(r.Component),C=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var r;return Object(l.a)(this,s),(r=t.call(this,e)).abortController=new window.AbortController,r.state={profileData:null,isLoading:!0,isError:null},r}return Object(h.a)(s,[{key:"fetchPosts",value:function(e){var t=this,s=this.context.accessToken,r="https://backend-react-json-server-auth.herokuapp.com/profile/"+e,o=new Headers;o.append("Authorization","Bearer "+s),o.append("signal",this.abortController.signal),fetch(r,{method:"GET",headers:o,redirect:"follow"}).then((function(e){if(401===e.status)return e.json();if(!e.ok)throw Error("Could not Fetch data");return e.json()})).then((function(e){if("Access token not provided"===e.message)throw t.setState({profileData:null,isLoading:!1,isError:"Login Expired"}),Error("Login Expired");t.setState({profileData:e,isLoading:!1,isError:!1})})).catch((function(e){"AbortError"===e.name?console.log("Fetch Aborted"):(console.log(e.message),t.setState({isError:e.message}))}))}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.context.accessToken&&this.fetchPosts(e)}},{key:"componentWillUnmount",value:function(){this.abortController.abort()}},{key:"render",value:function(){var e=this.context.accessToken;return Object(u.jsxs)("div",{className:"profile-container",children:[e&&!this.state.isError&&this.state.isLoading&&Object(u.jsx)("div",{children:"Loading Profile..."}),e&&this.state.isError&&Object(u.jsxs)("div",{className:"error",children:[this.state.isError,"!!",Object(u.jsx)("br",{}),"Profile not found"]}),this.state.profileData&&Object(u.jsxs)("div",{className:"profile-data",children:[Object(u.jsxs)("h2",{children:["Name : ",this.state.profileData.name]}),Object(u.jsxs)("p",{children:["Email : ",this.state.profileData.email]})]}),!e&&Object(u.jsx)("h1",{className:"error",children:"Please Login"})]})}}]),s}(r.Component);C.contextType=b;var S=Object(v.g)(C),N=s.p+"static/media/login.103b30a1.svg",T=(s(22),function(){var e=Object(r.useContext)(b),t=e.isLoggedIn,s=e.SetAccessToken,o=Object(r.useState)(""),n=Object(g.a)(o,2),a=n[0],i=n[1],l=Object(r.useState)(""),h=Object(g.a)(l,2),d=h[0],j=h[1],p=Object(r.useState)(!1),O=Object(g.a)(p,2),f=O[0],m=O[1],x=Object(r.useState)(!1),k=Object(g.a)(x,2),y=k[0],E=k[1],w=Object(v.f)();return Object(u.jsxs)("div",{className:"base-container",children:[Object(u.jsx)("div",{className:"header",children:"Login"}),!t&&Object(u.jsxs)("div",{className:"content",children:[y&&Object(u.jsx)("h2",{className:"error",children:"Invalid Username or Password"}),Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:N,alt:"just a decoration"})}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:a,password:d};m(!0);var r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://backend-react-json-server-auth.herokuapp.com/auth/login",r).then((function(e){if(401===e.status&&E(!0),200!==e.status)throw Error(e.statusText);return console.log("Verified successfully"),e.json()})).then((function(e){s(e.access_token,e.id),console.log("Logged In successfully"),w.push("/react-blog-test-v2")})).catch((function(e){console.log(e.message),m(!1)}))},children:[Object(u.jsxs)("div",{className:"form",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"password",value:d,onChange:function(e){return j(e.target.value)}})]})]}),!t&&!f&&Object(u.jsx)("button",{type:"submit",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px",width:"7rem",height:"3rem"},children:"Login"})]}),Object(u.jsx)(c.b,{to:"/register",style:{color:"#333",marginTop:"1rem",fontSize:"1.2rem"},children:"Don't Have an account?? Register!!"})]}),t&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{style:{margin:"1rem"},children:"You are already Logged In"}),Object(u.jsx)("br",{}),"Click Here To Go ",Object(u.jsx)(c.b,{to:"/react-blog-test-v2",className:"link-highlight",children:"To Home"})]})]})}),P=function(){var e=Object(r.useContext)(b),t=e.isLoggedIn,s=e.SetAccessToken,o=Object(r.useState)(""),n=Object(g.a)(o,2),a=n[0],c=n[1],i=Object(r.useState)(""),l=Object(g.a)(i,2),h=l[0],d=l[1],j=Object(r.useState)(""),p=Object(g.a)(j,2),O=p[0],f=p[1],m=Object(r.useState)(!1),x=Object(g.a)(m,2),k=x[0],y=x[1],E=Object(v.f)();return Object(u.jsxs)("div",{className:"base-container",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h2",{children:"Register"})}),!t&&Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:N,alt:"just a decoration"})}),Object(u.jsxs)("form",{onSubmit:function(e){var t=!1,r=null;e.preventDefault();var o={email:h,password:O},n={name:a,email:h};y(!0);var c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},i="https://backend-react-json-server-auth.herokuapp.com/auth/register";fetch(i,c).then((function(e){if(200!==e.status)throw t=!0,Error(e.statusText);return console.log("New User Added"),e.json()})).then((function(e){if(r=e.access_token,!t){var o=new Headers;o.append("Authorization","Bearer "+r),o.append("Content-Type","application/json"),c={method:"POST",headers:o,body:JSON.stringify(n)},i="https://backend-react-json-server-auth.herokuapp.com/profile/",fetch(i,c).then((function(e){if(201!==e.status)throw Error(e.statusText);return console.log("New Profile Added"),y(!1),e.json()})).then((function(e){s(r,e.id),console.log("Registered Successfully"),E.push("/react-blog-test-v2")})).catch((function(e){console.log(e.message),y(!1)}))}})).catch((function(e){console.log(e.message),y(!1)}))},children:[Object(u.jsxs)("div",{className:"form",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"username",value:a,onChange:function(e){return c(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"email",value:h,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"password",value:O,onChange:function(e){return f(e.target.value)},required:!0})]})]}),!t&&!k&&Object(u.jsx)("button",{type:"submit",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px",width:"7rem",height:"3rem",borderBlockColor:"pinks"},children:"Register"})]})]}),t&&Object(u.jsx)("h1",{children:"You already have an account!! You Are Logged In"})]})},A=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var r;return Object(l.a)(this,s),(r=t.call(this,e)).abortController=new window.AbortController,r.state={posts:[],isLoading:!0,isError:null},r}return Object(h.a)(s,[{key:"fetchPosts",value:function(){var e=this,t=this.context.accessToken,s=new Headers;s.append("Authorization","Bearer "+t),s.append("signal",this.abortController.signal),fetch("https://backend-react-json-server-auth.herokuapp.com/posts",{method:"GET",headers:s,redirect:"follow"}).then((function(e){if(401===e.status)return e.json();if(!e.ok)throw Error("Could not Fetch data");return e.json()})).then((function(t){if("Access token not provided"===t.message)throw e.setState({posts:null,isLoading:!1,isError:"Login Expired"}),Error("Login Expired");e.setState({posts:t,isLoading:!1,isError:!1})})).catch((function(t){"AbortError"===t.name?console.log("Fetch Aborted"):(console.log(t.message),e.setState({isError:t.message,isLoading:!1}))}))}},{key:"componentDidMount",value:function(){this.context.accessToken&&this.fetchPosts()}},{key:"componentWillUnmount",value:function(){this.abortController.abort()}},{key:"render",value:function(){var e=this.context,t=e.isLoggedIn,s=e.profile_id,r=e.accessToken;return Object(u.jsxs)("div",{className:"home",children:[t&&Object(u.jsx)("h2",{children:"Welcome Back"}),Object(u.jsx)("h1",{children:"Home Page"}),!this.state.isError&&this.state.isLoading&&r&&Object(u.jsx)("div",{children:"Loading...."}),this.state.isError&&Object(u.jsx)("div",{children:Object(u.jsx)("h2",{style:{color:"#ff003cf0"},children:this.state.isError})}),this.state.posts&&Object(u.jsx)(f,{posts:this.state.posts,title:"All Posts"}),s&&this.state.posts&&Object(u.jsx)(f,{posts:this.state.posts.filter((function(e){return e.author_id===s})),title:"My Posts"}),!r&&Object(u.jsx)("h1",{className:"error",children:"Please Login"})]})}}]),s}(r.Component);A.contextType=b;var D=A,F=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var r;return Object(l.a)(this,s),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(s,[{key:"componentDidCatch",value:function(e,t){console.log(e),console.log(t)}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Something Went Wrong"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),s}(r.Component),I=(s(37),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var r;return Object(l.a)(this,s),(r=t.call(this,e)).abortController=new window.AbortController,r.state={profileData:null,isLoading:!0,isError:null},r}return Object(h.a)(s,[{key:"fetchPosts",value:function(){var e=this,t=this.context,s=t.accessToken,r="https://backend-react-json-server-auth.herokuapp.com/profile/"+t.profile_id,o=new Headers;o.append("Authorization","Bearer "+s),o.append("signal",this.abortController.signal),fetch(r,{method:"GET",headers:o,redirect:"follow"}).then((function(e){if(401===e.status)return e.json();if(!e.ok)throw Error("Could not Fetch data");return e.json()})).then((function(t){if("Access token not provided"===t.message)throw e.setState({profileData:null,isLoading:!1,isError:"Login Expired"}),Error("Login Expired");e.setState({profileData:t,isLoading:!1,isError:!1})})).catch((function(t){"AbortError"===t.name?console.log("Fetch Aborted"):(console.log(t.message),e.setState({isError:t.message}))}))}},{key:"componentDidMount",value:function(){this.context.accessToken&&this.fetchPosts()}},{key:"componentWillUnmount",value:function(){this.abortController.abort()}},{key:"render",value:function(){var e=this.context.profile_id;return Object(u.jsxs)("div",{className:"",children:[!e&&Object(u.jsx)("h1",{children:Object(u.jsx)(c.b,{to:"/login",className:"link-highlight",children:"Please Login"})}),e&&this.state.isError&&Object(u.jsx)("h2",{className:"error",children:this.state.isError}),e&&this.state.isLoading&&Object(u.jsx)("h2",{children:"Loading!!..."}),Object(u.jsx)("h2",{children:"Profile"}),e&&Object(u.jsx)("div",{className:"container center",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h2",{children:"Profile"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("p",{children:[" Name : ",!this.state.isError&&this.state.profileData&&this.state.profileData.name]}),Object(u.jsx)("p",{children:" Status : "})]})})]})}}]),s}(r.Component));I.contextType=b;var H=I;var _=function(){return Object(u.jsx)(c.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(p,{children:[Object(u.jsx)(O,{}),Object(u.jsx)("div",{className:"content",children:Object(u.jsx)(F,{children:Object(u.jsxs)(v.c,{children:[Object(u.jsx)(v.a,{exact:!0,path:"/",children:Object(u.jsx)(D,{})}),Object(u.jsx)(v.a,{exact:!0,path:"/react-blog-test-v2",children:Object(u.jsx)(D,{})}),Object(u.jsx)(v.a,{path:"/login",children:Object(u.jsx)(T,{})}),Object(u.jsx)(v.a,{path:"/register",children:Object(u.jsx)(P,{})}),Object(u.jsx)(v.a,{path:"/create",children:Object(u.jsx)(k,{})}),Object(u.jsx)(v.a,{exact:!0,path:"/profile",children:Object(u.jsx)(H,{})}),Object(u.jsx)(v.a,{exact:!0,path:"/profile/:id",children:Object(u.jsx)(S,{})}),Object(u.jsx)(v.a,{path:"/posts/:id",children:Object(u.jsx)(w,{})}),Object(u.jsx)(v.a,{path:"/old-home",children:Object(u.jsx)(x,{})}),Object(u.jsx)(v.a,{path:"*",children:Object(u.jsx)(L,{})})]})})})]})})})},B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,r=t.getFID,o=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),r(e),o(e),n(e),a(e)}))};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),B()}},[[38,1,2]]]);
//# sourceMappingURL=main.4a55e674.chunk.js.map