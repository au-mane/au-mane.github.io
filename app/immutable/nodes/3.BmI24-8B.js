import{s as H,o as I,n as N}from"../chunks/scheduler.tWunq22O.js";import{S as T,i as D,s as k,c as w,h as M,d as u,f as x,g as S,o as y,p as C,a as d,v as P,t as $,u as j,w as V,e as g,j as v,k as F,l as q,n as h,q as b}from"../chunks/index.D1IaOjsH.js";import{H as z,N as A}from"../chunks/Header.BqiE_G_J.js";import{F as L}from"../chunks/Footer.VfzGBgCF.js";import{L as O}from"../chunks/Loading.nA382lqV.js";import{g as W}from"../chunks/app.state.O36-A5CO.js";const B=!0,te=Object.freeze(Object.defineProperty({__proto__:null,prerender:B},Symbol.toStringTag,{value:"Module"}));function G(_){let a,o,n,t,r,s,m="Home Page Svelte Component here",f;return t=new A({}),{c(){a=g("main"),o=g("div"),n=g("div"),w(t.$$.fragment),r=k(),s=g("div"),s.textContent=m,this.h()},l(i){a=v(i,"MAIN",{class:!0});var l=F(a);o=v(l,"DIV",{class:!0});var p=F(o);n=v(p,"DIV",{class:!0});var e=F(n);S(t.$$.fragment,e),e.forEach(u),r=x(p),s=v(p,"DIV",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-4top65"&&(s.textContent=m),p.forEach(u),l.forEach(u),this.h()},h(){h(n,"class","col-xl-2 col-lg-2 d-none d-xl-flex d-lg-flex justify-content-end"),h(s,"class","col-xl-10 col-lg-10 col-md-12 col-sm-12 d-flex flex-column gap-2 mt-4"),h(o,"class","row"),h(a,"class","container")},m(i,l){y(i,a,l),b(a,o),b(o,n),C(t,n,null),b(o,r),b(o,s),f=!0},p:N,i(i){f||($(t.$$.fragment,i),f=!0)},o(i){d(t.$$.fragment,i),f=!1},d(i){i&&u(a),j(t)}}}function J(_){let a,o;return a=new O({props:{message:_[1]}}),{c(){w(a.$$.fragment)},l(n){S(a.$$.fragment,n)},m(n,t){C(a,n,t),o=!0},p(n,t){const r={};t&2&&(r.message=n[1]),a.$set(r)},i(n){o||($(a.$$.fragment,n),o=!0)},o(n){d(a.$$.fragment,n),o=!1},d(n){j(a,n)}}}function K(_){let a,o,n,t,r,s,m,f;o=new z({});const i=[J,G],l=[];function p(e,c){return e[0]?0:1}return t=p(_),r=l[t]=i[t](_),m=new L({}),{c(){a=k(),w(o.$$.fragment),n=k(),r.c(),s=k(),w(m.$$.fragment),this.h()},l(e){M("svelte-zf80gi",document.head).forEach(u),a=x(e),S(o.$$.fragment,e),n=x(e),r.l(e),s=x(e),S(m.$$.fragment,e),this.h()},h(){document.title="Financial Tracker | Home"},m(e,c){y(e,a,c),C(o,e,c),y(e,n,c),l[t].m(e,c),y(e,s,c),C(m,e,c),f=!0},p(e,[c]){let E=t;t=p(e),t===E?l[t].p(e,c):(V(),d(l[E],1,1,()=>{l[E]=null}),P(),r=l[t],r?r.p(e,c):(r=l[t]=i[t](e),r.c()),$(r,1),r.m(s.parentNode,s))},i(e){f||($(o.$$.fragment,e),$(r),$(m.$$.fragment,e),f=!0)},o(e){d(o.$$.fragment,e),d(r),d(m.$$.fragment,e),f=!1},d(e){e&&(u(a),u(n),u(s)),j(o,e),l[t].d(e),j(m,e)}}}function Q(_,a,o){const{actions:{init:n}}=W();let t=!0,r="Welcome to Financial Tracker Website ...";return I(()=>{n(),setTimeout(()=>{o(1,r=""),o(0,t=!1)},800)}),[t,r]}class ne extends T{constructor(a){super(),D(this,a,Q,K,H,{})}}export{ne as component,te as universal};
