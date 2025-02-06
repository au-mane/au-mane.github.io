import{s as R,F as X,a6 as Q,M as re,A as B,o as O,f as v,e as I,d as V,j as C,k as A,i as P,n as F,p as k,t as j,m as q,K as oe,q as Z,H as se,r as G,v as ie,a7 as ce,w as ue}from"../chunks/scheduler.BCfJoXAU.js";import{S as U,i as Y,f as W,c as T,b as E,m as S,t as h,a as b,d as D,g as M,e as z}from"../chunks/index.CXmuTnoX.js";import{P as fe}from"../chunks/PageLayout.JCq68uuh.js";import{B as J,c as de,D as ge,F as me}from"../chunks/FormSkeleton.DxANlUgC.js";import{T as _e,S as pe,g as K,d as he}from"../chunks/SelectField.ChufMBg4.js";import{e as x}from"../chunks/Header.PPgXQXh9.js";const ve=!0,et=Object.freeze(Object.defineProperty({__proto__:null,prerender:ve},Symbol.toStringTag,{value:"Module"}));function $e(r){let e,n,t;function l(a){r[7](a)}let i={label:"Name",name:"account-name-field",placeholder:"",helperText:r[3],loading:r[1],required:!0,isInvalid:r[2]};return r[0]!==void 0&&(i.value=r[0]),e=new _e({props:i}),X.push(()=>W(e,"value",l)),e.$on("valueChanged",r[4]),{c(){T(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,o){S(e,a,o),t=!0},p(a,[o]){const s={};o&8&&(s.helperText=a[3]),o&2&&(s.loading=a[1]),o&4&&(s.isInvalid=a[2]),!n&&o&1&&(n=!0,s.value=a[0],Q(()=>n=!1)),e.$set(s)},i(a){t||(h(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){D(e,a)}}}const be="Account name i.e. Chase, American Express, America First",ke="This field is required";function we(r,e,n){let t,l,{value:i}=e,{loading:a}=e;async function o(){return new Promise(g=>{setTimeout(()=>{n(6,d=!0),g(d&&!i.trim())})})}const s=re(),u=()=>{s("valueChanged",{value:i}),n(6,d=!0)};let d=!1;function w(g){i=g,n(0,i)}return r.$$set=g=>{"value"in g&&n(0,i=g.value),"loading"in g&&n(1,a=g.loading)},r.$$.update=()=>{r.$$.dirty&65&&n(2,t=d&&!i.trim()),r.$$.dirty&4&&n(3,l=t?ke:be)},[i,a,t,l,u,o,d,w]}class Ie extends U{constructor(e){super(),Y(this,e,we,$e,R,{value:0,loading:1,validateFieldIsInvalid:5})}get validateFieldIsInvalid(){return this.$$.ctx[5]}}const Ce={creditCard:{label:"Credit Card",value:"credit-card",sort_order:0},checkings:{label:"Checkings",value:"checkings",sort_order:1},savings:{label:"Savings",value:"savings",sort_order:2},cash:{label:"Cash",value:"cash",sort_order:3},check:{label:"Check",value:"check",sort_order:4},other:{label:"Other",value:"other",sort_order:5}},Ae=Object.values(Ce).sort((r,e)=>r.sort_order-e.sort_order).map(r=>({key:r.label,value:r.value}));function Te(r){let e,n,t;function l(a){r[4](a)}let i={label:"Account type",name:"account-type",helperText:Ee,loading:r[1],required:!0,isInvalid:!1,disabled:!1,options:r[3]};return r[0]!==void 0&&(i.value=r[0]),e=new pe({props:i}),X.push(()=>W(e,"value",l)),e.$on("change",r[2]),{c(){T(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,o){S(e,a,o),t=!0},p(a,[o]){const s={};o&2&&(s.loading=a[1]),!n&&o&1&&(n=!0,s.value=a[0],Q(()=>n=!1)),e.$set(s)},i(a){t||(h(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){D(e,a)}}}const Ee="Specify the account type as follows Credit Card, Savings, Checking etc";function Se(r,e,n){let{value:t}=e,{loading:l}=e;const i=re(),a=()=>{i("valueChanged",{value:t})},o=Ae;function s(u){t=u,n(0,t)}return r.$$set=u=>{"value"in u&&n(0,t=u.value),"loading"in u&&n(1,l=u.loading)},[t,l,a,o,s]}class De extends U{constructor(e){super(),Y(this,e,Se,Te,R,{value:0,loading:1})}}function ee(r){let e,n,t,l,i,a,o,s,u,d,w,g,m,_={loading:r[0],value:r[1].name};n=new Ie({props:_}),r[10](n),n.$on("valueChanged",r[11]),l=new De({props:{loading:r[0],value:r[1].type}}),l.$on("valueChanged",r[12]);let p=r[1].id&&te(r);return d=new J({props:{loading:r[0],variant:"secondary",$$slots:{default:[Fe]},$$scope:{ctx:r}}}),d.$on("click",r[4]),g=new J({props:{loading:r[0],variant:"primary",$$slots:{default:[Oe]},$$scope:{ctx:r}}}),g.$on("click",r[5]),{c(){e=I("div"),T(n.$$.fragment),t=V(),T(l.$$.fragment),i=V(),a=I("div"),o=I("div"),p&&p.c(),s=V(),u=I("div"),T(d.$$.fragment),w=V(),T(g.$$.fragment),this.h()},l(c){e=C(c,"DIV",{class:!0});var f=A(e);E(n.$$.fragment,f),t=P(f),E(l.$$.fragment,f),i=P(f),a=C(f,"DIV",{class:!0});var $=A(a);o=C($,"DIV",{});var y=A(o);p&&p.l(y),y.forEach(v),s=P($),u=C($,"DIV",{});var N=A(u);E(d.$$.fragment,N),w=P(N),E(g.$$.fragment,N),N.forEach(v),$.forEach(v),f.forEach(v),this.h()},h(){F(a,"class","d-flex justify-content-between"),F(e,"class","d-flex flex-column gap-3")},m(c,f){O(c,e,f),S(n,e,null),k(e,t),S(l,e,null),k(e,i),k(e,a),k(a,o),p&&p.m(o,null),k(a,s),k(a,u),S(d,u,null),k(u,w),S(g,u,null),m=!0},p(c,f){const $={};f&1&&($.loading=c[0]),f&2&&($.value=c[1].name),n.$set($);const y={};f&1&&(y.loading=c[0]),f&2&&(y.value=c[1].type),l.$set(y),c[1].id?p?(p.p(c,f),f&2&&h(p,1)):(p=te(c),p.c(),h(p,1),p.m(o,null)):p&&(M(),b(p,1,1,()=>{p=null}),z());const N={};f&1&&(N.loading=c[0]),f&8192&&(N.$$scope={dirty:f,ctx:c}),d.$set(N);const L={};f&1&&(L.loading=c[0]),f&8192&&(L.$$scope={dirty:f,ctx:c}),g.$set(L)},i(c){m||(h(n.$$.fragment,c),h(l.$$.fragment,c),h(p),h(d.$$.fragment,c),h(g.$$.fragment,c),m=!0)},o(c){b(n.$$.fragment,c),b(l.$$.fragment,c),b(p),b(d.$$.fragment,c),b(g.$$.fragment,c),m=!1},d(c){c&&v(e),r[10](null),D(n),D(l),p&&p.d(),D(d),D(g)}}}function te(r){let e,n;return e=new J({props:{loading:r[0],variant:"danger",$$slots:{default:[ye]},$$scope:{ctx:r}}}),e.$on("click",r[6]),{c(){T(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){S(e,t,l),n=!0},p(t,l){const i={};l&1&&(i.loading=t[0]),l&8192&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function ye(r){let e;return{c(){e=j("Delete")},l(n){e=q(n,"Delete")},m(n,t){O(n,e,t)},d(n){n&&v(e)}}}function Fe(r){let e;return{c(){e=j("Cancel")},l(n){e=q(n,"Cancel")},m(n,t){O(n,e,t)},d(n){n&&v(e)}}}function Oe(r){let e;return{c(){e=j("Save")},l(n){e=q(n,"Save")},m(n,t){O(n,e,t)},d(n){n&&v(e)}}}function Ne(r){let e,n,t=r[1]&&ee(r);return{c(){t&&t.c(),e=B()},l(l){t&&t.l(l),e=B()},m(l,i){t&&t.m(l,i),O(l,e,i),n=!0},p(l,[i]){l[1]?t?(t.p(l,i),i&2&&h(t,1)):(t=ee(l),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(M(),b(t,1,1,()=>{t=null}),z())},i(l){n||(h(t),n=!0)},o(l){b(t),n=!1},d(l){l&&v(e),t&&t.d(l)}}}function Ve(r,e,n){let{loading:t=!1}=e,{account:l}=e,{drawerId:i}=e,a=0,o={name:"",type:"credit-card",sort_index:1},s;const u=(c,f)=>{const{value:$}=c.detail;if(o)switch(f){case"name":n(1,o.name=$,o);break;case"type":n(1,o.type=$,o);break;case"sort_index":n(1,o.sort_index=$,o);break}},d=()=>{const c=`[data-bs-target="#${i}"]`,f=document.querySelector(c);f&&(f.click(),n(7,l=void 0),n(9,a=void 0),n(1,o={name:"",type:"credit-card",sort_index:1}))},w=async()=>{if(await s.validateFieldIsInvalid())return;const{actions:{reload:f,createAccount:$,updateAccount:y}}=K();o.id?await y(o.id,o):await $(o),await f(),d()},g=async()=>{if(!o?.id)return;const{actions:{reload:c,deleteAccount:f}}=K();de({title:"Delete Confirmation",message:"Are you sure you want to do this?  You won't be able to undo this.",confirmButtonLabel:"Yes",confirmButtonCSS:"btn-danger",callback:async $=>{o?.id&&($&&await f(o.id),await c(),d())}})};function m(c){X[c?"unshift":"push"](()=>{s=c,n(2,s)})}const _=c=>u(c,"name"),p=c=>u(c,"type");return r.$$set=c=>{"loading"in c&&n(0,t=c.loading),"account"in c&&n(7,l=c.account),"drawerId"in c&&n(8,i=c.drawerId)},r.$$.update=()=>{r.$$.dirty&642&&(!l||a!==l?.id)&&(n(1,o=l?{...o,...l}:o),n(9,a=l?.id))},[t,o,s,u,d,w,g,l,i,a,m,_,p]}class Pe extends U{constructor(e){super(),Y(this,e,Ve,Ne,R,{loading:0,account:7,drawerId:8})}}function ne(r,e,n){const t=r.slice();return t[6]=e[n],t}function ae(r){let e,n,t=x(r[0]),l=[];for(let a=0;a<t.length;a+=1)l[a]=le(ne(r,t,a));const i=a=>b(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=B()},l(a){for(let o=0;o<l.length;o+=1)l[o].l(a);e=B()},m(a,o){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(a,o);O(a,e,o),n=!0},p(a,o){if(o&7){t=x(a[0]);let s;for(s=0;s<t.length;s+=1){const u=ne(a,t,s);l[s]?(l[s].p(u,o),h(l[s],1)):(l[s]=le(u),l[s].c(),h(l[s],1),l[s].m(e.parentNode,e))}for(M(),s=t.length;s<l.length;s+=1)i(s);z()}},i(a){if(!n){for(let o=0;o<t.length;o+=1)h(l[o]);n=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)b(l[o]);n=!1},d(a){a&&v(e),oe(l,a)}}}function Be(r){let e;return{c(){e=j("edit")},l(n){e=q(n,"edit")},m(n,t){O(n,e,t)},d(n){n&&v(e)}}}function le(r){let e,n,t=r[6].name+"",l,i,a,o,s,u=r[6].type+"",d,w,g,m,_;function p(){return r[3](r[6])}return g=new J({props:{cssClassArray:["pe-0"],variant:"link",size:"md","data-bs-toggle":"offcanvas","data-bs-target":"#"+r[1],"aria-controls":r[1],$$slots:{default:[Be]},$$scope:{ctx:r}}}),g.$on("click",p),{c(){e=I("div"),n=I("div"),l=j(t),i=V(),a=I("div"),o=I("div"),s=I("div"),d=j(u),w=V(),T(g.$$.fragment),m=V(),this.h()},l(c){e=C(c,"DIV",{});var f=A(e);n=C(f,"DIV",{class:!0});var $=A(n);l=q($,t),$.forEach(v),i=P(f),a=C(f,"DIV",{class:!0});var y=A(a);o=C(y,"DIV",{class:!0});var N=A(o);s=C(N,"DIV",{class:!0});var L=A(s);d=q(L,u),L.forEach(v),N.forEach(v),w=P(y),E(g.$$.fragment,y),y.forEach(v),m=P(f),f.forEach(v),this.h()},h(){F(n,"class","fw-bold"),F(s,"class","fw-light"),F(o,"class","small"),F(a,"class","d-flex justify-content-between")},m(c,f){O(c,e,f),k(e,n),k(n,l),k(e,i),k(e,a),k(a,o),k(o,s),k(s,d),k(a,w),S(g,a,null),k(e,m),_=!0},p(c,f){r=c,(!_||f&1)&&t!==(t=r[6].name+"")&&Z(l,t),(!_||f&1)&&u!==(u=r[6].type+"")&&Z(d,u);const $={};f&2&&($["data-bs-target"]="#"+r[1]),f&2&&($["aria-controls"]=r[1]),f&512&&($.$$scope={dirty:f,ctx:r}),g.$set($)},i(c){_||(h(g.$$.fragment,c),_=!0)},o(c){b(g.$$.fragment,c),_=!1},d(c){c&&v(e),D(g)}}}function Le(r){let e,n,t=r[0].length&&ae(r);return{c(){t&&t.c(),e=B()},l(l){t&&t.l(l),e=B()},m(l,i){t&&t.m(l,i),O(l,e,i),n=!0},p(l,[i]){l[0].length?t?(t.p(l,i),i&1&&h(t,1)):(t=ae(l),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(M(),b(t,1,1,()=>{t=null}),z())},i(l){n||(h(t),n=!0)},o(l){b(t),n=!1},d(l){l&&v(e),t&&t.d(l)}}}function je(r,e,n){let{data:t=[]}=e,{drawerId:l=""}=e;const{stores:{targetAccount:i,loading:a}}=K(),o=u=>{a.set(!0),setTimeout(()=>{i.set(u),a.set(!1)},800)},s=u=>o(u);return r.$$set=u=>{"data"in u&&n(0,t=u.data),"drawerId"in u&&n(1,l=u.drawerId)},[t,l,o,s]}class qe extends U{constructor(e){super(),Y(this,e,je,Le,R,{data:0,drawerId:1})}}function Re(r){let e,n;return e=new me({}),{c(){T(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){S(e,t,l),n=!0},p:ue,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ue(r){let e,n,t;function l(a){r[8](a)}let i={account:r[0],drawerId:H};return r[2]!==void 0&&(i.loading=r[2]),e=new Pe({props:i}),X.push(()=>W(e,"loading",l)),{c(){T(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,o){S(e,a,o),t=!0},p(a,o){const s={};o&1&&(s.account=a[0]),!n&&o&4&&(n=!0,s.loading=a[2],Q(()=>n=!1)),e.$set(s)},i(a){t||(h(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){D(e,a)}}}function Ye(r){let e,n,t,l;const i=[Ue,Re],a=[];function o(s,u){return s[2]?1:0}return e=o(r),n=a[e]=i[e](r),{c(){n.c(),t=B()},l(s){n.l(s),t=B()},m(s,u){a[e].m(s,u),O(s,t,u),l=!0},p(s,u){let d=e;e=o(s),e===d?a[e].p(s,u):(M(),b(a[d],1,1,()=>{a[d]=null}),z(),n=a[e],n?n.p(s,u):(n=a[e]=i[e](s),n.c()),h(n,1),n.m(t.parentNode,t))},i(s){l||(h(n),l=!0)},o(s){b(n),l=!1},d(s){s&&v(t),a[e].d(s)}}}function He(r){let e,n,t,l,i,a,o,s,u,d,w,g;return e=new ge({props:{title:r[1],id:H,$$slots:{default:[Ye]},$$scope:{ctx:r}}}),u=new qe({props:{drawerId:H,data:r[3]}}),{c(){T(e.$$.fragment),n=V(),t=I("div"),l=I("div"),i=I("div"),a=I("button"),o=I("i"),s=V(),T(u.$$.fragment),this.h()},l(m){E(e.$$.fragment,m),n=P(m),t=C(m,"DIV",{class:!0});var _=A(t);l=C(_,"DIV",{class:!0});var p=A(l);i=C(p,"DIV",{});var c=A(i);a=C(c,"BUTTON",{class:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var f=A(a);o=C(f,"I",{class:!0}),A(o).forEach(v),f.forEach(v),c.forEach(v),p.forEach(v),s=P(_),E(u.$$.fragment,_),_.forEach(v),this.h()},h(){F(o,"class","bi bi-plus"),F(a,"class","btn btn-sm btn-secondary"),F(a,"data-bs-toggle","offcanvas"),F(a,"data-bs-target","#"+H),F(a,"aria-controls",H),F(l,"class","d-flex justify-content-between align-items-center"),F(t,"class","d-flex flex-column gap-3")},m(m,_){S(e,m,_),O(m,n,_),O(m,t,_),k(t,l),k(l,i),k(i,a),k(a,o),k(t,s),S(u,t,null),d=!0,w||(g=se(a,"click",r[7]),w=!0)},p(m,[_]){const p={};_&2&&(p.title=m[1]),_&2053&&(p.$$scope={dirty:_,ctx:m}),e.$set(p);const c={};_&8&&(c.data=m[3]),u.$set(c)},i(m){d||(h(e.$$.fragment,m),h(u.$$.fragment,m),d=!0)},o(m){b(e.$$.fragment,m),b(u.$$.fragment,m),d=!1},d(m){m&&(v(n),v(t)),D(e,m),D(u),w=!1,g()}}}const H="account-form";function Me(r,e,n){let t,l,i,a;const{stores:{data:o,targetAccount:s,loading:u},actions:{reload:d}}=K();G(r,o,_=>n(3,a=_)),G(r,s,_=>n(0,l=_)),G(r,u,_=>n(2,i=_));const w={name:"",type:"credit-card",sort_index:1},g=()=>{u.set(!0),setTimeout(()=>{s.set(w),u.set(!1)},1500)};ie(d),ce(he);function m(_){i=_,u.set(i)}return r.$$.update=()=>{r.$$.dirty&1&&n(1,t=l?.id?"Edit Account":"Create Account")},[l,t,i,a,o,s,u,g,m]}class ze extends U{constructor(e){super(),Y(this,e,Me,He,R,{})}}function Je(r){let e,n;return e=new ze({}),{c(){T(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){S(e,t,l),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ke(r){let e,n;return e=new fe({props:{pageTitle:"Accounts",$$slots:{default:[Je]},$$scope:{ctx:r}}}),{c(){T(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){S(e,t,l),n=!0},p(t,[l]){const i={};l&1&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}class tt extends U{constructor(e){super(),Y(this,e,null,Ke,R,{})}}export{tt as component,et as universal};
