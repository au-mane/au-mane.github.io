import{s as H,b as P,o as V,n as q}from"../chunks/scheduler.DyivmMiW.js";import{S as F,i as L,s as I,v as D,h as O,d as u,f as N,o as k,a as d,w as z,t as $,x as C,c as g,e as x,g as h,j as E,k as M,n as S,p as v,q as j,u as b}from"../chunks/index.BqK79KpI.js";import{H as B,N as G}from"../chunks/supabase-config.DGP-irWd.js";import{F as J}from"../chunks/Footer.CcPKN1-c.js";import{L as K}from"../chunks/Loading.Do7G-gm4.js";import{g as Q}from"../chunks/app.state.DIzCX3o3.js";import{T as R}from"../chunks/TransactionsPage.BmYxhTbA.js";const U=!0,ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:U},Symbol.toStringTag,{value:"Module"}));function W(_){let a,t,e,s,o,l,i,c,n,f,m,y;return a=new B({}),l=new G({}),n=new R({}),m=new J({}),{c(){g(a.$$.fragment),t=I(),e=x("main"),s=x("div"),o=x("div"),g(l.$$.fragment),i=I(),c=x("div"),g(n.$$.fragment),f=I(),g(m.$$.fragment),this.h()},l(r){h(a.$$.fragment,r),t=N(r),e=E(r,"MAIN",{class:!0});var p=M(e);s=E(p,"DIV",{class:!0});var w=M(s);o=E(w,"DIV",{class:!0});var T=M(o);h(l.$$.fragment,T),T.forEach(u),i=N(w),c=E(w,"DIV",{class:!0});var A=M(c);h(n.$$.fragment,A),A.forEach(u),w.forEach(u),p.forEach(u),f=N(r),h(m.$$.fragment,r),this.h()},h(){S(o,"class","col-xl-2 col-lg-2 d-none d-xl-flex d-lg-flex justify-content-end"),S(c,"class","col-xl-10 col-lg-10 col-md-12 col-sm-12 d-flex flex-column gap-2 mt-4"),S(s,"class","row"),S(e,"class","container")},m(r,p){v(a,r,p),k(r,t,p),k(r,e,p),j(e,s),j(s,o),v(l,o,null),j(s,i),j(s,c),v(n,c,null),k(r,f,p),v(m,r,p),y=!0},p:q,i(r){y||($(a.$$.fragment,r),$(l.$$.fragment,r),$(n.$$.fragment,r),$(m.$$.fragment,r),y=!0)},o(r){d(a.$$.fragment,r),d(l.$$.fragment,r),d(n.$$.fragment,r),d(m.$$.fragment,r),y=!1},d(r){r&&(u(t),u(e),u(f)),b(a,r),b(l),b(n),b(m,r)}}}function X(_){let a,t;return a=new K({props:{message:_[1]}}),{c(){g(a.$$.fragment)},l(e){h(a.$$.fragment,e)},m(e,s){v(a,e,s),t=!0},p(e,s){const o={};s&2&&(o.message=e[1]),a.$set(o)},i(e){t||($(a.$$.fragment,e),t=!0)},o(e){d(a.$$.fragment,e),t=!1},d(e){b(a,e)}}}function Y(_){let a,t,e,s,o;const l=[X,W],i=[];function c(n,f){return n[0]?0:n[2]?1:-1}return~(t=c(_))&&(e=i[t]=l[t](_)),{c(){a=I(),e&&e.c(),s=D(),this.h()},l(n){O("svelte-14yvwss",document.head).forEach(u),a=N(n),e&&e.l(n),s=D(),this.h()},h(){document.title="Au Mane | Home"},m(n,f){k(n,a,f),~t&&i[t].m(n,f),k(n,s,f),o=!0},p(n,[f]){let m=t;t=c(n),t===m?~t&&i[t].p(n,f):(e&&(C(),d(i[m],1,1,()=>{i[m]=null}),z()),~t?(e=i[t],e?e.p(n,f):(e=i[t]=l[t](n),e.c()),$(e,1),e.m(s.parentNode,s)):e=null)},i(n){o||($(e),o=!0)},o(n){d(e),o=!1},d(n){n&&(u(a),u(s)),~t&&i[t].d(n)}}}function Z(_,a,t){let e;const{stores:{authenticated:s},actions:{init:o}}=Q();P(_,s,c=>t(2,e=c));let l=!0,i="Mauri";return V(()=>{o(),setTimeout(()=>{t(1,i=""),t(0,l=!1)},800)}),[l,i,e,s]}class le extends F{constructor(a){super(),L(this,a,Z,Y,H,{})}}export{le as component,ie as universal};
