(this["webpackJsonpface-finder"]=this["webpackJsonpface-finder"]||[]).push([[0],{433:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n.n(a),i=n(78),c=n.n(i),r=(n(85),n(18)),o=n(19),l=n(21),d=n(20),u=(n(86),n(2)),b=function(e){return Object(u.jsx)("div",{className:"navigation-bar",children:e.children})},h=(n(88),function(e){var t=e.onRouteChange;return e.isSignedIn?Object(u.jsx)("nav",{children:Object(u.jsx)("p",{className:"f3 link dim underline pa3 pointer ",onClick:function(){return t("signout")},children:"Sign Out"})}):Object(u.jsxs)("nav",{children:[Object(u.jsx)("p",{className:"f3 link dim underline pa3 pointer ",onClick:function(){return t("signin")},children:"Sign In"}),Object(u.jsx)("p",{className:"f3 link dim underline pa3 pointer ",onClick:function(){return t("register")},children:"Register"})]})}),m=(n(89),n.p+"static/media/owl-logo.be305bd4.png"),j=n(79),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"logo ma4 mt2 ",children:Object(u.jsx)(j.a,{className:"parallax-effect",perspective:500,glareEnable:!0,glareMaxOpacity:.45,scale:1.02,children:Object(u.jsxs)("div",{className:"inner-element ba br2 bw0 b--mid-gray shadow-3 ",children:[Object(u.jsx)("div",{className:"dot shadow-2 br2"}),Object(u.jsx)("img",{className:"logo-image",src:m,alt:"Owl"})]})})})}}]),n}(a.Component),g=p,f=(n(90),function(e){var t=e.onInputChange,n=e.onPictureSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"f3",children:"The Face Finder will find faces, hidden or not, in your pictures. Give it a try."}),Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(u.jsx)("input",{className:"br2 f4 pa2 w-70 center",type:"text",onChange:t}),Object(u.jsx)("button",{className:"br2 w-30 grow f4 link ph3 pv2 dib white bg-gold",onClick:n,children:"Find"})]})})]})}),O=(n(91),function(e){var t=e.name,n=e.entries;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"white f3",children:"".concat(t,", your current rank is:")}),Object(u.jsx)("div",{className:"white f1",children:n})]})}),x=(n(92),function(e){var t=e.imageURL,n=e.boxes.map((function(e,t){return Object(u.jsx)("div",{className:"bounding-box",style:{top:e.topRow,right:e.rightColumn,bottom:e.bottomRow,left:e.leftColumn}},t)}));return Object(u.jsx)("div",{className:"center ma",children:Object(u.jsxs)("div",{className:"absolute mt2",children:[Object(u.jsx)("img",{id:"inputimage",src:t,alt:"Face",width:"500px",height:"auto"}),Object(u.jsx)("div",{className:"bounding-boxes",children:n})]})})}),v=(n(93),"https://evening-shelf-69570.herokuapp.com"),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch(v+"/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(u.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{className:"b ph3 pv2 input-reset ba b--black br2 bg-transparent grow pointer f5 dib",type:"submit",value:"Sign in",onClick:this.onSubmitSignIn})}),Object(u.jsx)("div",{className:"lh-copy mt3",children:Object(u.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(s.a.Component),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onNameChange=function(e){a.setState({name:e.target.value})},a.onSubmitSignIn=function(){fetch(v+"/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("div",{className:"measure",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(u.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("input",{className:"b ph3 pv2 input-reset ba b--black br2 bg-transparent grow pointer f5 dib",type:"submit",value:"Register",onClick:this.onSubmitSignIn})})]})})})}}]),n}(s.a.Component),C=(n(94),n(95),n(80)),y=n.n(C),S={particles:{number:{value:190,density:{enable:!1}},size:{value:6,random:!0,anim:{speed:4,size_min:.3}},color:{value:"#745da2"},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}},k={input:"",imageURL:"",boxes:[],route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onPictureSubmit=function(){e.setState({imageURL:e.state.input,boxes:[]}),fetch(v+"/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch(v+"/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch((function(e){return console.log("Error fetching the API.")})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){console.log(e)}))},e.calculateFaceLocation=function(e){var t=[],n=e.outputs[0].data.regions,a=document.getElementById("inputimage"),s=Number(a.width),i=Number(a.height);return n.map((function(e){var n=e.region_info.bounding_box;t.push({leftColumn:n.left_col*s,topRow:n.top_row*i,rightColumn:s-n.right_col*s,bottomRow:i-n.bottom_row*i})})),t},e.displayFaceBox=function(t){e.setState({boxes:t})},e.onRouteChange=function(t){"signout"!==t?("home"===t?e.setState({isSignedIn:!0}):e.setState({isSignedIn:!1}),e.setState({route:t})):e.setState(k)},e.state=k,e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.route,a=e.boxes,s=e.imageURL;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(y.a,{className:"particles",params:S}),Object(u.jsxs)(b,{children:[Object(u.jsx)(g,{}),Object(u.jsx)(h,{onRouteChange:this.onRouteChange,isSignedIn:t})]}),"home"===n?Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{name:this.state.user.name,entries:this.state.user.entries}),Object(u.jsx)(f,{onInputChange:this.onInputChange,onPictureSubmit:this.onPictureSubmit}),Object(u.jsx)(x,{boxes:a,imageURL:s})]}):"signin"===n?Object(u.jsx)(w,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(u.jsx)(N,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,434)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),R()},85:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[433,1,2]]]);
//# sourceMappingURL=main.d805fab3.chunk.js.map