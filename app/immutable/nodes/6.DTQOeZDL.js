import{s as $,b as l,f as _,n as d,d as b,r as S}from"../chunks/scheduler.D0aYECZP.js";import{S as y,i as L,c as i,b as p,m as f,t as g,a as u,d as c}from"../chunks/index.DKSt-8--.js";import{g as v}from"../chunks/app.state.B6C7TYHP.js";import{g as h}from"../chunks/entry.Bj92Oa8O.js";import{L as j}from"../chunks/Loading.Dr_kdv6O.js";import{F as w}from"../chunks/Footer.CEjltOZe.js";const x=!0,N=Object.freeze(Object.defineProperty({__proto__:null,prerender:x},Symbol.toStringTag,{value:"Module"}));function A(s){let e,n,o,a;return e=new j({props:{message:s[0]}}),o=new w({}),{c(){i(e.$$.fragment),n=l(),i(o.$$.fragment)},l(t){p(e.$$.fragment,t),n=_(t),p(o.$$.fragment,t)},m(t,r){f(e,t,r),d(t,n,r),f(o,t,r),a=!0},p(t,[r]){const m={};r&1&&(m.message=t[0]),e.$set(m)},i(t){a||(g(e.$$.fragment,t),g(o.$$.fragment,t),a=!0)},o(t){u(e.$$.fragment,t),u(o.$$.fragment,t),a=!1},d(t){t&&b(n),c(e,t),c(o,t)}}}function F(s,e,n){const{actions:{logout:o},stores:{pageName:a}}=v();let t="";return S(()=>{a.set("Auth - Logout ..."),n(0,t="Logging out ..."),o(),h("/auth/login")}),[t]}class T extends y{constructor(e){super(),L(this,e,F,A,$,{})}}export{T as component,N as universal};
