(this["webpackJsonpnews-platform"]=this["webpackJsonpnews-platform"]||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(14),c=a.n(n),o=a(3),i=a(5),l=a(1),h=function(){return Object(l.jsxs)("header",{className:"mainHeader",children:[Object(l.jsx)("h1",{children:Object(l.jsx)(i.b,{to:"/",className:"mainHeader__logo",children:"News Platform"})}),Object(l.jsxs)("nav",{className:"mainHeader__nav",children:[Object(l.jsx)(i.b,{to:"/news",className:"mainHeader__link",children:"News"}),Object(l.jsx)(i.b,{to:"/profile",className:"mainHeader__link",children:"Profile"})]})]})},d=function(){return Object(l.jsxs)("footer",{className:"mainFooter",children:[Object(l.jsx)(i.b,{className:"mainFooter__link",to:"/",children:"News platform"}),Object(l.jsx)(i.b,{className:"mainFooter__link",to:"/news",children:"News"}),Object(l.jsx)(i.b,{className:"mainFooter__link",to:"/profile",children:"Profile"})]})},j=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)("h2",{children:"Welcome to the website"}),Object(l.jsx)("article",{className:"article article_main",children:Object(l.jsxs)("div",{className:"article__body",children:[Object(l.jsxs)("p",{className:"article__paragraph",children:["This is a solution for"," ",Object(l.jsx)("a",{href:"https://vk.com/@maxpfrontend-testovoe-zadanie-1",target:"blank",children:"a test assignment (in Russian)"})," ","to check the basic skills of react, redux and react-router."]}),Object(l.jsxs)("p",{className:"article__paragraph",children:["Check"," ",Object(l.jsx)("a",{href:"https://www.youtube.com/watch?v=BMD1JjZf7WA&t=1s",target:"blank",children:"the analysis of solutions and author's solution"})," ","on Youtube"]}),Object(l.jsxs)("p",{className:"article__paragraph",children:["You can find"," ",Object(l.jsx)("a",{href:"https://vk.com/@maxpfrontend-testovoe-zadanie-2",target:"blank",children:"a second test assignment"})," ","from the same author"]}),Object(l.jsxs)("p",{className:"article__paragraph",children:[Object(l.jsx)("a",{href:"https://vk.com/@maxpfrontend-testovoe-zadanie-2",target:"blank",children:"A github repository"})," ","of this solution of the assignment"]})]})})]})},u=[{title:"The two surviving Founders of Zion",text:"The two surviving Founders of Zion were old men, old with the movement of the train, their high heels like polished hooves against the gray metal of the Villa bespeak a turning in, a denial of the bright void beyond the hull. Case felt the edge of the spherical chamber. Images formed and reformed: a flickering montage of the Sprawl\u2019s towers and ragged Fuller domes, dim figures moving toward him in the human system.",id:1},{title:"The two surviving Founders of Zion",text:"It was disturbing to think of the Flatline as a gliding cursor struck sparks from the Chinese program\u2019s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. Sexless and inhumanly patient, his primary gratification seemed to he in his capsule in some coffin hotel, his hands clawed into the nearest door and watched the other passengers as he rode.",id:2},{title:"The two surviving Founders of Zion",text:"Its hands were holograms that altered to match the convolutions of the previous century. None of that prepared him for the arena, the crowd, the tense hush, the towering puppets of light from a service hatch framed a heap of discarded fiber optics and the chassis of a heroin factory.",id:3}],b=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"News"}),u.map((function(e){return Object(l.jsxs)("article",{className:"article",children:[Object(l.jsx)("header",{className:"article__header",children:Object(l.jsx)("h2",{children:e.title})}),Object(l.jsx)("div",{className:"article__body",children:Object(l.jsx)("p",{className:"article__paragraph",children:e.text})})]},e.id)}))]})},m=a(20),f=a(9),p=function(e){return function(t){console.log("admin"===e.username.toLowerCase()),console.log("12345"===e.password),console.log(e),"admin"===e.username.toLowerCase()&&"12345"===e.password?(console.log(t),console.log("Got here"),t({type:"LOGIN_SUCCESS",payload:{username:e.username}})):t({type:"LOGIN_FAILURE",payload:{errorMsg:"There is no such a user with such a password"}})}},O=function(e){return Object(l.jsx)("p",{children:e})},g=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(""),c=Object(m.a)(n,2),i=c[0],h=c[1],d=Object(f.b)(),j=Object(o.f)(),u=Object(f.c)((function(e){return e.user})),b=u.errorMsg,g=u.username;Object(r.useEffect)((function(){g&&j.push("/profile")}),[g,j]);var x=function(e){switch(e.currentTarget.id){case"user":s(e.currentTarget.value);break;case"password":h(e.currentTarget.value)}};return Object(l.jsxs)("main",{children:[b?Object(l.jsx)(O,{msg:b}):"",Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),d(p({username:a,password:i})),s(""),h(""),e.target[0].invalid=!0,e.target[1].invalid=!0}(e)},className:"form",children:[Object(l.jsx)("input",{type:"text",placeholder:"username",id:"user",value:a,onChange:function(e){return x(e)},className:"form__input"}),Object(l.jsx)("input",{type:"password",placeholder:"password",id:"password",value:i,onChange:function(e){return x(e)},className:"form__input"}),Object(l.jsx)("button",{className:"form__button",children:"Submit"})]})]})},x=function(){var e=Object(f.c)((function(e){return e.user})).username,t=Object(o.f)();return Object(r.useEffect)((function(){e||t.push("/login")}),[t,e]),Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"Welcome to your profile"}),Object(l.jsx)("p",{children:Date().toLocaleString()})]})},w=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)("h2",{children:"Page not found"}),Object(l.jsx)(i.b,{to:"/",children:"Go to homepage"})]})};a(32);var _=function(){var e=Object(o.g)();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsxs)(o.c,{location:e,children:[Object(l.jsx)(o.a,{path:"/",exact:!0,children:Object(l.jsx)(j,{})}),Object(l.jsx)(o.a,{path:"/news",children:Object(l.jsx)(b,{})}),Object(l.jsx)(o.a,{path:"/profile",children:Object(l.jsx)(x,{})}),Object(l.jsx)(o.a,{path:"/login",children:Object(l.jsx)(g,{})}),Object(l.jsx)(o.a,{children:Object(l.jsx)(w,{})})]},e.pathname),Object(l.jsx)(d,{})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),n(e),c(e)}))},N=a(11),y=a(12),k={username:null,errorMsg:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{username:t.payload.username});case"LOGIN_FAILURE":return Object(y.a)(Object(y.a)({},e),{},{errorMsg:t.payload.errorMsg});default:return Object(y.a)({},e)}},F=Object(N.b)({user:S}),C=a(21),T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.c,E=Object(N.d)(F,T(Object(N.a)(C.a)));c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(f.a,{store:E,children:Object(l.jsx)(_,{})})})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.3576a1b4.chunk.js.map