(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{74:function(n,e,t){},79:function(n,e,t){"use strict";t.r(e);var i,r,c,a,o,s=t(0),l=t(19),d=t.n(l),b=t(9),u=t(17),m=t(3),h=t(10),j=t(11),p=j.a.div(i||(i=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100vh;\n"]))),O=j.a.button(r||(r=Object(h.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 25rem;\n    height: 13rem;\n    font-size: 3.1rem;\n    font-weight: 700;\n    cursor: pointer;\n    border-radius: 10px;\n    border-color: #ffd300;\n    color: #000;\n    background-color: #ffd300;\n\n    &:focus {\n        outline-color: #ffd300;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 45rem;\n        height: 20rem;\n        font-size: 5.5rem;\n    }\n"]))),f=t(1),x=function(){return Object(f.jsxs)(p,{children:[Object(f.jsx)(u.b,{to:"/login",style:{marginBottom:"2rem"},children:Object(f.jsx)(O,{children:"\ub85c\uadf8\uc778\ud558\ub7ec \uac00\uae30"})}),Object(f.jsx)(u.b,{to:"/signup",children:Object(f.jsx)(O,{children:"\ud68c\uc6d0\uac00\uc785\ud558\ub7ec \uac00\uae30"})})]})},g=function(){return Object(f.jsxs)(p,{children:[Object(f.jsx)(O,{children:"\ub85c\uadf8\uc778\uc774"}),Object(f.jsx)(O,{children:"\ub41c \uc0c1\ud0dc"})]})},w=t(16),k=t(28),v=t(18),y=t.n(v),S=t(27),C=t(20),z=t.n(C),_="REGISTER_USER",E="LOGIN_USER",F=function(){var n=Object(S.a)(y.a.mark((function n(e){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(function(n){z.a.post("http://localhost:8080/users",e),n(R(e))}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),R=function(n){return{type:_,data:n}},L=function(){var n=Object(S.a)(y.a.mark((function n(e){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(function(n){z.a.post("http://localhost:8080/login",e),n(T(e))}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),T=function(n){return{type:E,data:n}},I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return Object(k.a)(Object(k.a)({},n),{},{nickname:e.data.nickname,phone:e.data.phone,role:e.data.role});case E:return{nickname:e.data.nickname,phone:e.data.phone};default:return n}},D=j.a.div(c||(c=Object(h.a)(["\n    & > label {\n        display: block;\n        margin-bottom: 0.5rem;\n        font-size: 2rem;\n        color: #ffd300;\n\n        @media screen and (min-width: 768px) {\n            font-size: 3rem;\n        }\n    }\n\n    & > input {\n        width: 30rem;\n        height: 5rem;\n        margin-bottom: 3rem;\n        font-size: 2.4rem;\n        border-radius: 6px;\n\n        @media screen and (min-width: 768px) {\n            width: 50rem;\n        }\n    }\n\n    & ~ button {\n        width: 30rem;\n        height: 6rem;\n        font-size: 3rem;\n\n        @media screen and (min-width: 768px) {\n            width: 50rem;\n        }\n    }\n"]))),N=function(){var n=Object(w.b)(),e=Object(s.useState)(""),t=Object(b.a)(e,2),i=t[0],r=t[1],c=Object(s.useCallback)((function(n){r(n.target.value)}),[i]),a=Object(s.useState)(""),o=Object(b.a)(a,2),l=o[0],d=o[1],u=Object(s.useCallback)((function(n){d(n.target.value)}),[l]),m=Object(s.useCallback)((function(){n(L({nickname:i,phone:l}))}),[l]);return Object(f.jsx)(p,{children:Object(f.jsxs)("form",{onSubmit:m,"aria-label":"\ub85c\uadf8\uc778 \ud3fc\uc785\ub2c8\ub2e4.",children:[Object(f.jsxs)(D,{children:[Object(f.jsx)("label",{htmlFor:"nickname",children:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(f.jsx)("input",{type:"text",id:"nickname",value:i,onChange:c,autoFocus:!0}),Object(f.jsx)("label",{htmlFor:"phone",children:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(f.jsx)("input",{type:"text",id:"phone",value:l,onChange:u,pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}",maxLength:"13",title:"010-0000-0000 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),Object(f.jsx)(O,{type:"submit",children:"\ub85c\uadf8\uc778\ud558\uae30"})]})})},U=j.a.div(a||(a=Object(h.a)(["\n    width: 30rem;\n    font-size: 2rem;\n    color: red;\n\n    @media screen and (min-width: 768px) {\n        width: 50rem;\n        font-size: 2.5rem;\n    }\n"]))),X=j.a.div(o||(o=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    width: 30rem;\n    margin-bottom: 3rem;\n\n    @media screen and (min-width: 768px) {\n        width: 50rem;\n    }\n\n    & > input {\n        width: 4rem;\n        height: 4rem;\n        margin-right: 2.7rem;\n    }\n\n    & > label {\n        font-size: 2.1rem;\n        color: #ffd300;\n\n        @media screen and (min-width: 768px) {\n            font-size: 4rem;\n        }\n    }\n\n    & ~ div {\n        display: flex;\n        flex-direction: column;\n        width: 30rem;\n        // margin-bottom: 3rem;\n\n        @media screen and (min-width: 768px) {\n            width: 50rem;\n        }\n\n        & > label {\n            display: inline-block;\n            margin-bottom: 0.5rem;\n            font-size: 2rem;\n            color: #ffd300;\n\n            @media screen and (min-width: 768px) {\n                font-size: 3rem;\n            }\n        }\n\n        & > input {\n            margin-bottom: 3rem;\n        }\n    }\n\n    & ~ button {\n        width: 30rem;\n        height: 6rem;\n        font-size: 3rem;\n\n        @media screen and (min-width: 768px) {\n            width: 50rem;\n        }\n    }\n"]))),B=function(){var n=Object(w.b)(),e=Object(s.useState)("nondeveloper"),t=Object(b.a)(e,2),i=t[0],r=t[1],c=Object(s.useCallback)((function(n){n.target.checked?r("developer"):r("nondeveloper")}),[i]),a=Object(s.useState)(""),o=Object(b.a)(a,2),l=o[0],d=o[1],u=Object(s.useCallback)((function(n){d(n.target.value)}),[l]),m=Object(s.useState)(""),h=Object(b.a)(m,2),j=h[0],x=h[1],g=Object(s.useCallback)((function(n){x(n.target.value)}),[j]),k=Object(s.useState)(!0),v=Object(b.a)(k,2),y=(v[0],v[1]),S=function(){y(!0)},C=Object(s.useState)(!1),z=Object(b.a)(C,2),_=z[0],E=(z[1],Object(s.useCallback)((function(){return _?Object(f.jsx)(O,{type:"submit",onClick:S,style:{backgroundColor:"rgba(255,211,0,0.5)"},disabled:!0,children:"\ud68c\uc6d0\uac00\uc785\ud558\uae30"}):Object(f.jsx)(O,{type:"submit",onClick:S,children:"\ud68c\uc6d0\uac00\uc785\ud558\uae30"})}),[_]),Object(s.useCallback)((function(){n(F({role:i,phone:j,nickname:l}))}),[i,j,l]));return Object(f.jsx)(p,{children:Object(f.jsxs)("form",{onSubmit:E,"aria-label":"\ud68c\uc6d0\uac00\uc785 \ud3fc\uc785\ub2c8\ub2e4.",children:[Object(f.jsxs)(X,{children:[Object(f.jsx)("input",{type:"checkbox",id:"role",value:i,onClick:c}),Object(f.jsx)("label",{htmlFor:"role",children:"\uac1c\ubc1c\uc790\ub77c\uba74 \ud074\ub9ad\ud574\uc8fc\uc138\uc694."})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"nickname",children:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(f.jsx)("input",{type:"text",id:"nickname",value:l,onChange:u,autoFocus:!0,style:{height:"5rem",fontSize:"2.4rem",borderRadius:"6px"}}),Object(f.jsx)("label",{htmlFor:"phone",children:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(f.jsx)("input",{type:"text",id:"phone",value:j,onChange:g,pattern:"[0-9]{3}-[0-9]{4}-[0-9]{4}",maxLength:"13",title:"010-0000-0000 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"5rem",fontSize:"2.4rem",borderRadius:"6px"}}),_&&Object(f.jsx)(U,{children:"\uc774\ubbf8 \ub4f1\ub85d\ub41c \uc804\ud654\ubc88\ud638\uc785\ub2c8\ub2e4."})]}),Object(f.jsx)(O,{type:"submit",children:"\ud68c\uc6d0\uac00\uc785\ud558\uae30"})]})})},G=function(){var n=Object(s.useState)(!1),e=Object(b.a)(n,2),t=e[0];e[1];return Object(f.jsx)(u.a,{children:Object(f.jsxs)(m.c,{children:[t?Object(f.jsx)(m.a,{exact:!0,path:"/",component:g}):Object(f.jsx)(m.a,{exact:!0,path:"/",component:x}),Object(f.jsx)(m.a,{exact:!0,path:"/login",component:N}),Object(f.jsx)(m.a,{exact:!0,path:"/signup",component:B})]})})},J=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,80)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),c(n),a(n)}))},P=(t(74),t(14)),V=Object(P.c)({user:I}),q=t(44),A=t.n(q),H=t(45),K=Object(P.a)(A.a,H.a)(P.d);d.a.render(Object(f.jsx)(w.a,{store:K(V,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),children:Object(f.jsx)(G,{})}),document.getElementById("root")),J()}},[[79,1,2]]]);
//# sourceMappingURL=main.f4a80665.chunk.js.map