(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{74:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c,r,o,i,a=n(0),l=n(17),s=n.n(l),j=n(9),b=n(16),h=n(3),u=n(10),d=n(11),O=d.a.div(c||(c=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100vh;\n"]))),m=d.a.button(r||(r=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 25rem;\n    height: 13rem;\n    border: none;\n    font-size: 31px;\n    font-weight: 700;\n    cursor: pointer;\n    color: #000;\n    background-color: #ffd300;\n\n    &:focus {\n        outline-color: #ffd300;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 45rem;\n        height: 20rem;\n        font-size: 55px;\n    }\n"]))),p=n(1),f=function(){return Object(p.jsxs)(O,{children:[Object(p.jsx)(b.b,{to:"/login",style:{marginBottom:"2rem"},children:Object(p.jsx)(m,{children:"\ub85c\uadf8\uc778\ud558\ub7ec \uac00\uae30"})}),Object(p.jsx)(b.b,{to:"/signup",children:Object(p.jsx)(m,{children:"\ud68c\uc6d0\uac00\uc785\ud558\ub7ec \uac00\uae30"})})]})},x=function(){return Object(p.jsxs)(O,{children:[Object(p.jsx)(m,{children:"\ub85c\uadf8\uc778\uc774"}),Object(p.jsx)(m,{children:"\ub41c \uc0c1\ud0dc"})]})},g=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useCallback)((function(e){c(e.target.value)}),[n]);return Object(p.jsxs)(O,{children:[Object(p.jsx)("h1",{children:"\ub85c\uadf8\uc778"}),Object(p.jsx)("label",{htmlFor:"phone",style:{display:"inline-block",marginBottom:"0.5rem",fontSize:"2rem",color:"#ffd300"},children:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(p.jsx)("input",{type:"text",id:"phone",value:n,autoFocus:!0,onChange:r,placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}",maxLength:"13",title:"010-0000-0000 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"5rem",fontSize:"2.4rem"}})]})},v=n(24),y=n.n(v),w=n(41),S=n(18),k=n(43),C=n.n(k),_=n(26),E={role:"nondeveloper",phone:""},z="REGISTER_USER",F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return console.log(t.data),Object(_.a)(Object(_.a)({},e),{},{role:t.data.role,phone:t.data.phone});default:return e}},T=d.a.div(o||(o=Object(u.a)(["\n    width: 30rem;\n    font-size: 2rem;\n    color: red;\n"]))),B=d.a.div(i||(i=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    width: 30rem;\n    margin-bottom: 3rem;\n\n    & > input {\n        width: 4rem;\n        height: 4rem;\n        margin-right: 2.7rem;\n    }\n\n    & > label {\n        font-size: 4rem;\n        color: #ffd300;\n    }\n"]))),D=function(){(function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.a.get("http://localhost:8080/users"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var e=Object(S.b)(),t=Object(a.useState)("nondeveloper"),n=Object(j.a)(t,2),c=n[0],r=n[1],o=Object(a.useCallback)((function(e){e.target.checked?r("developer"):r("nondeveloper")}),[c]),i=Object(a.useState)(""),l=Object(j.a)(i,2),s=l[0],b=l[1],h=Object(a.useCallback)((function(e){b(e.target.value)}),[s]),u=Object(a.useState)(!1),d=Object(j.a)(u,2),f=d[0],x=d[1],g=function(){x(!0)},v=Object(a.useState)(!1),k=Object(j.a)(v,2),_=k[0],E=k[1],F=Object(a.useCallback)((function(){return _?Object(p.jsx)(m,{type:"submit",onClick:g,style:{width:"30rem",height:"6rem",fontSize:"3rem",backgroundColor:"rgba(255,211,0,0.5)"},disabled:!0,children:"\ud68c\uc6d0\uac00\uc785\ud558\uae30"}):Object(p.jsx)(m,{type:"submit",onClick:g,style:{width:"30rem",height:"6rem",fontSize:"3rem"},children:"\ud68c\uc6d0\uac00\uc785\ud558\uae30"})}),[_]),D=Object(a.useCallback)((function(){if(f)return E(!0);var t;e((t={role:c,phone:s},console.log(t),{type:z,data:t}))}),[c,s]);return Object(p.jsx)(O,{children:Object(p.jsxs)("form",{onSubmit:D,"aria-label":"\ud68c\uc6d0\uac00\uc785 \ud3fc\uc785\ub2c8\ub2e4.",children:[Object(p.jsxs)(B,{children:[Object(p.jsx)("input",{type:"checkbox",id:"role",value:c,onClick:o}),Object(p.jsx)("label",{htmlFor:"role",children:"\uac1c\ubc1c\uc790\ub77c\uba74 \ud074\ub9ad\ud574\uc8fc\uc138\uc694."})]}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"30rem",marginBottom:"3rem"},children:[Object(p.jsx)("label",{htmlFor:"phone",style:{display:"inline-block",marginBottom:"0.5rem",fontSize:"2rem",color:"#ffd300"},children:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(p.jsx)("input",{type:"text",id:"phone",value:s,autoFocus:!0,onChange:h,placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}",maxLength:"13",title:"010-0000-0000 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"5rem",fontSize:"2.4rem"}}),_&&Object(p.jsx)(T,{children:"\uc774\ubbf8 \ub4f1\ub85d\ub41c \uc804\ud654\ubc88\ud638\uc785\ub2c8\ub2e4."})]}),F()]})})},L=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0];t[1];return Object(p.jsx)(b.a,{children:Object(p.jsxs)(h.c,{children:[n?Object(p.jsx)(h.a,{exact:!0,path:"/",component:x}):Object(p.jsx)(h.a,{exact:!0,path:"/",component:f}),Object(p.jsx)(h.a,{exact:!0,path:"/login",component:g}),Object(p.jsx)(h.a,{exact:!0,path:"/signup",component:D})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))},R=(n(74),n(14)),N=Object(R.c)({user:F}),X=n(44),U=n.n(X),J=n(45),P=Object(R.a)(U.a,J.a)(R.d);s.a.render(Object(p.jsx)(S.a,{store:P(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),children:Object(p.jsx)(L,{})}),document.getElementById("root")),I()}},[[79,1,2]]]);
//# sourceMappingURL=main.fc548c1c.chunk.js.map