import{s as A,d as D,o as P,n as V}from"../chunks/scheduler.CgjAsyDf.js";import{S as q,i as F,s as w,v as N,h as L,d as u,f as S,o as $,a as d,w as O,t as g,x as T,c as C,e as b,g as M,j as k,k as H,l as z,n as x,p as j,q as y,u as E}from"../chunks/index.B-nT1WAI.js";import{H as B,N as G}from"../chunks/Header.D88Nxveg.js";import{F as J}from"../chunks/Footer.Bh3VD4E0.js";import{L as K}from"../chunks/Loading._N7n0iSs.js";import{g as Q}from"../chunks/app.state.CGsguzWb.js";const R=!0,ae=Object.freeze(Object.defineProperty({__proto__:null,prerender:R},Symbol.toStringTag,{value:"Module"}));function U(_){let n,t,e,o,r,i,l,f,a="Home Page Svelte Component here",c,m,h;return n=new B({}),i=new G({}),m=new J({}),{c(){C(n.$$.fragment),t=w(),e=b("main"),o=b("div"),r=b("div"),C(i.$$.fragment),l=w(),f=b("div"),f.textContent=a,c=w(),C(m.$$.fragment),this.h()},l(s){M(n.$$.fragment,s),t=S(s),e=k(s,"MAIN",{class:!0});var p=H(e);o=k(p,"DIV",{class:!0});var v=H(o);r=k(v,"DIV",{class:!0});var I=H(r);M(i.$$.fragment,I),I.forEach(u),l=S(v),f=k(v,"DIV",{class:!0,"data-svelte-h":!0}),z(f)!=="svelte-4top65"&&(f.textContent=a),v.forEach(u),p.forEach(u),c=S(s),M(m.$$.fragment,s),this.h()},h(){x(r,"class","col-xl-2 col-lg-2 d-none d-xl-flex d-lg-flex justify-content-end"),x(f,"class","col-xl-10 col-lg-10 col-md-12 col-sm-12 d-flex flex-column gap-2 mt-4"),x(o,"class","row"),x(e,"class","container")},m(s,p){j(n,s,p),$(s,t,p),$(s,e,p),y(e,o),y(o,r),j(i,r,null),y(o,l),y(o,f),$(s,c,p),j(m,s,p),h=!0},p:V,i(s){h||(g(n.$$.fragment,s),g(i.$$.fragment,s),g(m.$$.fragment,s),h=!0)},o(s){d(n.$$.fragment,s),d(i.$$.fragment,s),d(m.$$.fragment,s),h=!1},d(s){s&&(u(t),u(e),u(c)),E(n,s),E(i),E(m,s)}}}function W(_){let n,t;return n=new K({props:{message:_[1]}}),{c(){C(n.$$.fragment)},l(e){M(n.$$.fragment,e)},m(e,o){j(n,e,o),t=!0},p(e,o){const r={};o&2&&(r.message=e[1]),n.$set(r)},i(e){t||(g(n.$$.fragment,e),t=!0)},o(e){d(n.$$.fragment,e),t=!1},d(e){E(n,e)}}}function X(_){let n,t,e,o,r;const i=[W,U],l=[];function f(a,c){return a[0]?0:a[2]?1:-1}return~(t=f(_))&&(e=l[t]=i[t](_)),{c(){n=w(),e&&e.c(),o=N(),this.h()},l(a){L("svelte-14yvwss",document.head).forEach(u),n=S(a),e&&e.l(a),o=N(),this.h()},h(){document.title="Au Mane | Home"},m(a,c){$(a,n,c),~t&&l[t].m(a,c),$(a,o,c),r=!0},p(a,[c]){let m=t;t=f(a),t===m?~t&&l[t].p(a,c):(e&&(T(),d(l[m],1,1,()=>{l[m]=null}),O()),~t?(e=l[t],e?e.p(a,c):(e=l[t]=i[t](a),e.c()),g(e,1),e.m(o.parentNode,o)):e=null)},i(a){r||(g(e),r=!0)},o(a){d(e),r=!1},d(a){a&&(u(n),u(o)),~t&&l[t].d(a)}}}function Y(_,n,t){let e;const{stores:{authenticated:o},actions:{init:r}}=Q();D(_,o,f=>t(2,e=f));let i=!0,l="Mauri";return P(()=>{r(),setTimeout(()=>{t(1,l=""),t(0,i=!1)},800)}),[i,l,e,o]}class re extends q{constructor(n){super(),F(this,n,Y,X,A,{})}}export{re as component,ae as universal};