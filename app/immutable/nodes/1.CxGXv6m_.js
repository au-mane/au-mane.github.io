import{s as E,e as b,t as _,b as S,i as f,j as d,l as g,d as c,f as q,n as u,o as h,p as v,v as $,q as x}from"../chunks/scheduler.D0aYECZP.js";import{S as j,i as y}from"../chunks/index.DKSt-8--.js";import{s as C}from"../chunks/entry.Bj92Oa8O.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function k(s){let t,r=s[0].status+"",o,n,i,p=s[0].error?.message+"",l;return{c(){t=b("h1"),o=_(r),n=S(),i=b("p"),l=_(p)},l(e){t=f(e,"H1",{});var a=d(t);o=g(a,r),a.forEach(c),n=q(e),i=f(e,"P",{});var m=d(i);l=g(m,p),m.forEach(c)},m(e,a){u(e,t,a),h(t,o),u(e,n,a),u(e,i,a),h(i,l)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&v(o,r),a&1&&p!==(p=e[0].error?.message+"")&&v(l,p)},i:$,o:$,d(e){e&&(c(t),c(n),c(i))}}}function w(s,t,r){let o;return x(s,P,n=>r(0,o=n)),[o]}let D=class extends j{constructor(t){super(),y(this,t,w,k,E,{})}};export{D as component};
