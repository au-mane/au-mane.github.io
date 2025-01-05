import{s as G,n as V,o as et}from"../chunks/scheduler.CgjAsyDf.js";import{S as J,i as K,e as m,s as y,v as z,j as p,l as w,f as E,n as B,o as M,d as h,k as v,q as u,A as at,b as H,m as j,r as x,c as Q,g as U,p as W,t as X,a as Z,u as tt}from"../chunks/index.BKiGU3dl.js";import{P as lt}from"../chunks/PageLayout.DfxDb874.js";import{e as N}from"../chunks/Header.BakSs_e7.js";import{g as nt}from"../chunks/budget.api.VqpLw7L0.js";const st=!0,pt=Object.freeze(Object.defineProperty({__proto__:null,prerender:st},Symbol.toStringTag,{value:"Module"}));function R(f,t,a){const e=f.slice();return e[1]=t[a],e}function Y(f){let t,a,e,i='<tr><th scope="col">ID</th> <th scope="col">Start</th> <th scope="col">End</th> <th scope="col">Max Limit</th> <th scope="col"></th></tr>',s,l,c=N(f[0]),r=[];for(let o=0;o<c.length;o+=1)r[o]=F(R(f,c,o));return{c(){t=m("div"),a=m("table"),e=m("thead"),e.innerHTML=i,s=y(),l=m("tbody");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){t=p(o,"DIV",{class:!0});var _=v(t);a=p(_,"TABLE",{class:!0});var n=v(a);e=p(n,"THEAD",{"data-svelte-h":!0}),w(e)!=="svelte-1m2l7hm"&&(e.innerHTML=i),s=E(n),l=p(n,"TBODY",{});var g=v(l);for(let $=0;$<r.length;$+=1)r[$].l(g);g.forEach(h),n.forEach(h),_.forEach(h),this.h()},h(){B(a,"class","table"),B(t,"class","table-responsive")},m(o,_){M(o,t,_),u(t,a),u(a,e),u(a,s),u(a,l);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(l,null)},p(o,_){if(_&1){c=N(o[0]);let n;for(n=0;n<c.length;n+=1){const g=R(o,c,n);r[n]?r[n].p(g,_):(r[n]=F(g),r[n].c(),r[n].m(l,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=c.length}},d(o){o&&h(t),at(r,o)}}}function F(f){let t,a,e=f[1].id+"",i,s,l,c=f[1].start_at+"",r,o,_,n=f[1].end_at+"",g,$,D,L=f[1]?.settings?.max_spend_limit+"",k,P,T,A='<button class="btn btn-sm btn-primary"><i class="bi bi-pencil"></i></button>',S;return{c(){t=m("tr"),a=m("td"),i=H(e),s=y(),l=m("td"),r=H(c),o=y(),_=m("td"),g=H(n),$=y(),D=m("td"),k=H(L),P=y(),T=m("td"),T.innerHTML=A,S=y(),this.h()},l(b){t=p(b,"TR",{});var d=v(t);a=p(d,"TD",{});var C=v(a);i=j(C,e),C.forEach(h),s=E(d),l=p(d,"TD",{});var I=v(l);r=j(I,c),I.forEach(h),o=E(d),_=p(d,"TD",{});var O=v(_);g=j(O,n),O.forEach(h),$=E(d),D=p(d,"TD",{});var q=v(D);k=j(q,L),q.forEach(h),P=E(d),T=p(d,"TD",{class:!0,"data-svelte-h":!0}),w(T)!=="svelte-kctraj"&&(T.innerHTML=A),S=E(d),d.forEach(h),this.h()},h(){B(T,"class","d-flex justify-content-end")},m(b,d){M(b,t,d),u(t,a),u(a,i),u(t,s),u(t,l),u(l,r),u(t,o),u(t,_),u(_,g),u(t,$),u(t,D),u(D,k),u(t,P),u(t,T),u(t,S)},p(b,d){d&1&&e!==(e=b[1].id+"")&&x(i,e),d&1&&c!==(c=b[1].start_at+"")&&x(r,c),d&1&&n!==(n=b[1].end_at+"")&&x(g,n),d&1&&L!==(L=b[1]?.settings?.max_spend_limit+"")&&x(k,L)},d(b){b&&h(t)}}}function rt(f){let t,a='<button class="btn btn-sm btn-primary"><i class="bi bi-plus"></i></button>',e,i,s=f[0].length&&Y(f);return{c(){t=m("div"),t.innerHTML=a,e=y(),s&&s.c(),i=z(),this.h()},l(l){t=p(l,"DIV",{class:!0,"data-svelte-h":!0}),w(t)!=="svelte-1bwv5dg"&&(t.innerHTML=a),e=E(l),s&&s.l(l),i=z(),this.h()},h(){B(t,"class","d-flex justify-content-end")},m(l,c){M(l,t,c),M(l,e,c),s&&s.m(l,c),M(l,i,c)},p(l,[c]){l[0].length?s?s.p(l,c):(s=Y(l),s.c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null)},i:V,o:V,d(l){l&&(h(t),h(e),h(i)),s&&s.d(l)}}}function ot(f,t,a){let e=[];return et(async()=>{a(0,e=await nt())}),[e]}class it extends J{constructor(t){super(),K(this,t,ot,rt,G,{})}}function ct(f){let t,a;return t=new it({}),{c(){Q(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,i){W(t,e,i),a=!0},i(e){a||(X(t.$$.fragment,e),a=!0)},o(e){Z(t.$$.fragment,e),a=!1},d(e){tt(t,e)}}}function ft(f){let t,a;return t=new lt({props:{pageTitle:"Budgets",$$slots:{default:[ct]},$$scope:{ctx:f}}}),{c(){Q(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,i){W(t,e,i),a=!0},p(e,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){a||(X(t.$$.fragment,e),a=!0)},o(e){Z(t.$$.fragment,e),a=!1},d(e){tt(t,e)}}}class gt extends J{constructor(t){super(),K(this,t,null,ft,G,{})}}export{gt as component,pt as universal};
