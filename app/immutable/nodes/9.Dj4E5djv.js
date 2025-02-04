import{s as re,z as W,n as O,d as y,e as D,b as V,t as te,i as k,j as N,k as x,f as P,l as ne,m as w,B as ce,o as g,C as we,D as J,p as he,x as ht,v as Ue,F as ae,q as Fe,r as Re,N as st,X as Oe,E as Ye,a7 as pt}from"../chunks/scheduler.Ban6yQD2.js";import{S as ie,i as oe,t as E,g as ue,a as F,e as de,c as q,b as U,m as R,d as Y,f as Ae}from"../chunks/index.B0J71FU7.js";import{P as bt}from"../chunks/PageLayout.DrwRgWwh.js";import{e as Ne}from"../chunks/Header.BVCvG74Q.js";import{c as rt,D as it,F as ot,B as Le}from"../chunks/FormSkeleton.BCqY7h9s.js";import{S as vt}from"../chunks/Loading.BdZvI-bM.js";import{f as G,p as Q,D as ut,N as yt}from"../chunks/DateField.BKzqkoxn.js";import{g as dt,a as wt,u as ft,c as ct,d as gt,F as It,b as Dt}from"../chunks/feature-flag.state.BYIjP2M1.js";import{w as Me}from"../chunks/index.CRsH-7pe.js";import{t as mt,f as Ve}from"../chunks/app.state.y9_oSMyb.js";function je(a){const e=mt(a),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function He(a){const e=mt(a);return e.setDate(1),e.setHours(0,0,0,0),e}const kt=!0,$n=Object.freeze(Object.defineProperty({__proto__:null,prerender:kt},Symbol.toStringTag,{value:"Module"})),qe={start_at:G(new Date,"yyyy-MM-dd"),end_at:G(new Date,"yyyy-MM-dd"),settings:{max_spend_limit:0}};let _e=null;const Mt=()=>{const a=Me(!1),e=Me([]);return _e={stores:{loading:a,data:e},actions:{reload:async()=>{a.set(!0);const t=await dt();e.set(t),a.set(!1)}}},_e},_t=()=>_e?.stores&&Object.keys(_e.stores).length>0&&_e?.actions&&Object.keys(_e.actions).length>0?_e:Mt();function Ge(a){let e,n,t,l="Start Date*",i,s,o,r,u,m,d="End Date*",p,M,b,c,v,$,S="Max Limit*",T,_,C,f,I,B,H=a[14].message+"",j,A,me,le,se,De,pe,Z,be,z,ke,Be;se=new vt({props:{size:"xs"}});let K=a[6]&&Xe(a);function Ce(h,L){return h[6]?Bt:$t}let ve=Ce(a),ee=ve(a),X=a[15]&&Je();return{c(){e=D("div"),n=D("div"),t=D("div"),t.textContent=l,i=V(),s=D("input"),r=V(),u=D("div"),m=D("div"),m.textContent=d,p=V(),M=D("input"),c=V(),v=D("div"),$=D("div"),$.textContent=S,T=V(),_=D("input"),f=V(),I=D("div"),B=D("small"),j=te(H),me=V(),le=D("span"),q(se.$$.fragment),De=V(),K&&K.c(),pe=V(),Z=D("button"),ee.c(),be=V(),X&&X.c(),this.h()},l(h){e=k(h,"DIV",{class:!0});var L=N(e);n=k(L,"DIV",{class:!0});var ye=N(n);t=k(ye,"DIV",{"data-svelte-h":!0}),x(t)!=="svelte-172ibe4"&&(t.textContent=l),i=P(ye),s=k(ye,"INPUT",{name:!0,type:!0,class:!0}),ye.forEach(y),r=P(L),u=k(L,"DIV",{class:!0});var Ee=N(u);m=k(Ee,"DIV",{"data-svelte-h":!0}),x(m)!=="svelte-1iotazt"&&(m.textContent=d),p=P(Ee),M=k(Ee,"INPUT",{name:!0,type:!0,class:!0}),Ee.forEach(y),c=P(L),v=k(L,"DIV",{class:!0});var Te=N(v);$=k(Te,"DIV",{"data-svelte-h":!0}),x($)!=="svelte-16dil7f"&&($.textContent=S),T=P(Te),_=k(Te,"INPUT",{name:!0,type:!0,class:!0}),Te.forEach(y),f=P(L),I=k(L,"DIV",{class:!0});var fe=N(I);B=k(fe,"SMALL",{class:!0});var ze=N(B);j=ne(ze,H),ze.forEach(y),me=P(fe),le=k(fe,"SPAN",{});var Ke=N(le);U(se.$$.fragment,Ke),Ke.forEach(y),De=P(fe),K&&K.l(fe),pe=P(fe),Z=k(fe,"BUTTON",{class:!0});var Se=N(Z);ee.l(Se),be=P(Se),X&&X.l(Se),Se.forEach(y),fe.forEach(y),L.forEach(y),this.h()},h(){w(s,"name",o=a[1]+"-start-date"),w(s,"type","date"),w(s,"class","form-control"),s.disabled=a[10],s.required=!0,ce(s,"is-invalid",a[8]),w(n,"class","d-flex flex-column gap-2"),w(M,"name",b=a[1]+"-end-date"),w(M,"type","date"),w(M,"class","form-control"),M.disabled=a[10],M.required=!0,ce(M,"is-invalid",a[7]),w(u,"class","d-flex flex-column gap-2"),w(_,"name",C=a[1]+"-max-limit"),w(_,"type","text"),w(_,"class","form-control text-end"),_.disabled=a[10],_.required=!0,ce(_,"is-invalid",a[9]),w(v,"class","d-flex flex-column gap-2"),w(B,"class",A="fw-lighter fst-italic text-"+a[14].type),ce(le,"d-none",!a[10]),w(Z,"class","btn btn-primary position-relative"),w(I,"class","d-flex justify-content-end align-items-center gap-2 flex-row"),w(e,"class","d-flex flex-column gap-4")},m(h,L){O(h,e,L),g(e,n),g(n,t),g(n,i),g(n,s),a[21](s),we(s,a[2]),g(e,r),g(e,u),g(u,m),g(u,p),g(u,M),a[25](M),we(M,a[3]),g(e,c),g(e,v),g(v,$),g(v,T),g(v,_),a[29](_),we(_,a[4]),g(e,f),g(e,I),g(I,B),g(B,j),g(I,me),g(I,le),R(se,le,null),g(I,De),K&&K.m(I,null),g(I,pe),g(I,Z),ee.m(Z,null),g(Z,be),X&&X.m(Z,null),z=!0,ke||(Be=[J(s,"focus",a[22]),J(s,"keyup",a[23]),J(s,"input",a[24]),J(M,"focus",a[26]),J(M,"keyup",a[27]),J(M,"input",a[28]),J(_,"focus",a[30]),J(_,"keyup",a[31]),J(_,"input",a[32]),J(Z,"click",a[17])],ke=!0)},p(h,L){(!z||L[0]&2&&o!==(o=h[1]+"-start-date"))&&w(s,"name",o),(!z||L[0]&1024)&&(s.disabled=h[10]),L[0]&4&&we(s,h[2]),(!z||L[0]&256)&&ce(s,"is-invalid",h[8]),(!z||L[0]&2&&b!==(b=h[1]+"-end-date"))&&w(M,"name",b),(!z||L[0]&1024)&&(M.disabled=h[10]),L[0]&8&&we(M,h[3]),(!z||L[0]&128)&&ce(M,"is-invalid",h[7]),(!z||L[0]&2&&C!==(C=h[1]+"-max-limit"))&&w(_,"name",C),(!z||L[0]&1024)&&(_.disabled=h[10]),L[0]&16&&_.value!==h[4]&&we(_,h[4]),(!z||L[0]&512)&&ce(_,"is-invalid",h[9]),(!z||L[0]&16384)&&H!==(H=h[14].message+"")&&he(j,H),(!z||L[0]&16384&&A!==(A="fw-lighter fst-italic text-"+h[14].type))&&w(B,"class",A),(!z||L[0]&1024)&&ce(le,"d-none",!h[10]),h[6]?K?K.p(h,L):(K=Xe(h),K.c(),K.m(I,pe)):K&&(K.d(1),K=null),ve!==(ve=Ce(h))&&(ee.d(1),ee=ve(h),ee&&(ee.c(),ee.m(Z,be))),h[15]?X||(X=Je(),X.c(),X.m(Z,null)):X&&(X.d(1),X=null)},i(h){z||(E(se.$$.fragment,h),z=!0)},o(h){F(se.$$.fragment,h),z=!1},d(h){h&&y(e),a[21](null),a[25](null),a[29](null),Y(se),K&&K.d(),ee.d(),X&&X.d(),ke=!1,ht(Be)}}}function Xe(a){let e,n="<span>Delete</span>",t,l;return{c(){e=D("button"),e.innerHTML=n,this.h()},l(i){e=k(i,"BUTTON",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-4hjfsp"&&(e.innerHTML=n),this.h()},h(){w(e,"class","btn btn-danger position-relative")},m(i,s){O(i,e,s),t||(l=J(e,"click",a[16]),t=!0)},p:Ue,d(i){i&&y(e),t=!1,l()}}}function $t(a){let e,n="Create";return{c(){e=D("span"),e.textContent=n},l(t){e=k(t,"SPAN",{"data-svelte-h":!0}),x(e)!=="svelte-1wf0js6"&&(e.textContent=n)},m(t,l){O(t,e,l)},d(t){t&&y(e)}}}function Bt(a){let e,n="Save";return{c(){e=D("span"),e.textContent=n},l(t){e=k(t,"SPAN",{"data-svelte-h":!0}),x(e)!=="svelte-l126tb"&&(e.textContent=n)},m(t,l){O(t,e,l)},d(t){t&&y(e)}}}function Je(a){let e,n='<span class="visually-hidden">Item not saved</span>';return{c(){e=D("span"),e.innerHTML=n,this.h()},l(t){e=k(t,"SPAN",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-1sxrz4i"&&(e.innerHTML=n),this.h()},h(){w(e,"class","position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle")},m(t,l){O(t,e,l)},d(t){t&&y(e)}}}function Ct(a){let e,n,t=a[0]&&Ge(a);return{c(){t&&t.c(),e=W()},l(l){t&&t.l(l),e=W()},m(l,i){t&&t.m(l,i),O(l,e,i),n=!0},p(l,i){l[0]?t?(t.p(l,i),i[0]&1&&E(t,1)):(t=Ge(l),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(ue(),F(t,1,1,()=>{t=null}),de())},i(l){n||(E(t),n=!0)},o(l){F(t),n=!1},d(l){l&&y(e),t&&t.d(l)}}}function Et(a,e,n){let t,l,i,s,o,r,{name:u=""}=e,{drawerId:m=""}=e,{budget:d}=e;const{actions:{reload:p}}=_t(),{actions:{reload:M}}=wt();let b=!1,c,v,$,S=0,T,_,C,f={message:"",type:"info"},I,B={startDate:!1,endDate:!1,amount:!1};const H=()=>{const h=`[data-bs-target="#${m}"]`,L=document.querySelector(h);L&&L.click()},j=()=>{n(5,B={amount:!1,startDate:!1,endDate:!1}),n(0,d={...qe}),n(10,b=!1)},A=(h,L=0,ye="info")=>{n(14,f.message=h,f),n(14,f.type=ye,f),L&&setTimeout(()=>{n(14,f.message="",f)},L)},me=async()=>{if(!t){A("ID is not defined",0,"danger");return}try{await gt(t),await p(!0),setTimeout(()=>{n(10,b=!1),n(20,I={...d,id:t,start_at:Q(c,"yyyy-MM-dd",new Date).toISOString(),end_at:Q(v,"yyyy-MM-dd",new Date).toISOString()}),A("Transaction Deleted",3e3,"success"),H()},800)}catch(h){setTimeout(()=>{n(10,b=!1),console.error("Save failed:",h),A("Failed to save event. Please try again.",7e3,"danger")},800)}},le=()=>{n(10,b=!0),rt({title:"Delete Confirmation",message:"Are you sure you want to do this?  You won't be able to undo this.",confirmButtonLabel:"Yes",confirmButtonCSS:"btn-danger",callback:async h=>{h&&await me(),await p(!0),await M(!0),j()}})},se=async()=>{if(!l){A("Sorry nothing has changed, therefore, there is nothing to save.",7e3);return}if(!r){let h=[];o&&h.push("Amount is invalid"),i&&h.push("Start date is invalid"),s&&h.push("End date is invalid"),A(h.join(". ")+".  Please address accordingly.",0,"danger");return}if(!b){A("Saving ..."),n(10,b=!0);try{const h={...d,start_at:Q(c,"yyyy-MM-dd",new Date).toISOString(),end_at:Q(v,"yyyy-MM-dd",new Date).toISOString(),settings:{...d.settings,max_spend_limit:$}};t?await ft(t,h):await ct(h),await p(!0),await M(!0),setTimeout(()=>{n(10,b=!1),n(20,I={...d,id:t}),A("Saved",3e3,"success"),t||j(),H()},800)}catch(h){setTimeout(()=>{n(10,b=!1),console.error("Save failed:",h),A("Failed to save event. Please try again.",7e3,"danger"),t||j()},800)}}};function De(h){ae[h?"unshift":"push"](()=>{T=h,n(11,T)})}const pe=()=>T.select(),Z=()=>n(5,B.startDate=!0,B);function be(){c=this.value,n(2,c),n(0,d),n(19,S),n(6,t)}function z(h){ae[h?"unshift":"push"](()=>{_=h,n(12,_)})}const ke=()=>_.select(),Be=()=>n(5,B.endDate=!0,B);function K(){v=this.value,n(3,v),n(0,d),n(19,S),n(6,t)}function Ce(h){ae[h?"unshift":"push"](()=>{C=h,n(13,C)})}const ve=()=>C.select(),ee=()=>n(5,B.amount=!0,B);function X(){$=this.value,n(4,$),n(0,d),n(19,S),n(6,t)}return a.$$set=h=>{"name"in h&&n(1,u=h.name),"drawerId"in h&&n(18,m=h.drawerId),"budget"in h&&n(0,d=h.budget)},a.$$.update=()=>{a.$$.dirty[0]&1&&n(6,t=d?.id),a.$$.dirty[0]&524353&&d&&S!==t&&(n(10,b=!0),setTimeout(()=>{n(20,I={...d}),n(19,S=t),n(4,$=d.settings?.max_spend_limit??0),n(2,c=G(Q(d.start_at,"yyyy-MM-dd",new Date),"yyyy-MM-dd")),n(3,v=G(Q(d.end_at,"yyyy-MM-dd",new Date),"yyyy-MM-dd")),n(10,b=!1)},800)),a.$$.dirty[0]&1048604&&n(15,l=I?.start_at!==c||I?.end_at!==v||I?.settings?.max_spend_limit!==$),a.$$.dirty[0]&33&&n(8,i=B.startDate&&d?.start_at===""),a.$$.dirty[0]&33&&n(7,s=B.endDate&&d?.end_at===""),a.$$.dirty[0]&33&&n(9,o=B.amount&&d?.settings?.max_spend_limit===0),a.$$.dirty[0]&896&&(r=!i&&!s&&!o)},[d,u,c,v,$,B,t,s,i,o,b,T,_,C,f,l,le,se,m,S,I,De,pe,Z,be,z,ke,Be,K,Ce,ve,ee,X]}let Tt=class extends ie{constructor(e){super(),oe(this,e,Et,Ct,re,{name:1,drawerId:18,budget:0},null,[-1,-1])}};function Qe(a,e,n){const t=a.slice();return t[9]=e[n],t}function St(a){let e,n;return e=new ot({}),{c(){q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p:Ue,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Ft(a){let e,n;return e=new Tt({props:{name:"budget-form",drawerId:Ie,budget:a[0]}}),{c(){q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const i={};l&1&&(i.budget=t[0]),e.$set(i)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Nt(a){let e,n,t,l;const i=[Ft,St],s=[];function o(r,u){return r[1]?1:0}return e=o(a),n=s[e]=i[e](a),{c(){n.c(),t=W()},l(r){n.l(r),t=W()},m(r,u){s[e].m(r,u),O(r,t,u),l=!0},p(r,u){let m=e;e=o(r),e===m?s[e].p(r,u):(ue(),F(s[m],1,1,()=>{s[m]=null}),de(),n=s[e],n?n.p(r,u):(n=s[e]=i[e](r),n.c()),E(n,1),n.m(t.parentNode,t))},i(r){l||(E(n),l=!0)},o(r){F(n),l=!1},d(r){r&&y(t),s[e].d(r)}}}function We(a){let e,n,t,l='<tr><th scope="col" class="fw-light text-muted">Start</th> <th scope="col" class="fw-light text-muted">End</th> <th scope="col" class="text-end">Max Limit</th> <th scope="col"></th></tr>',i,s,o=Ne(a[3]),r=[];for(let u=0;u<o.length;u+=1)r[u]=Ze(Qe(a,o,u));return{c(){e=D("div"),n=D("table"),t=D("thead"),t.innerHTML=l,i=V(),s=D("tbody");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l(u){e=k(u,"DIV",{class:!0});var m=N(e);n=k(m,"TABLE",{class:!0});var d=N(n);t=k(d,"THEAD",{"data-svelte-h":!0}),x(t)!=="svelte-22a6sv"&&(t.innerHTML=l),i=P(d),s=k(d,"TBODY",{});var p=N(s);for(let M=0;M<r.length;M+=1)r[M].l(p);p.forEach(y),d.forEach(y),m.forEach(y),this.h()},h(){w(n,"class","table"),w(e,"class","table-responsive")},m(u,m){O(u,e,m),g(e,n),g(n,t),g(n,i),g(n,s);for(let d=0;d<r.length;d+=1)r[d]&&r[d].m(s,null)},p(u,m){if(m&40){o=Ne(u[3]);let d;for(d=0;d<o.length;d+=1){const p=Qe(u,o,d);r[d]?r[d].p(p,m):(r[d]=Ze(p),r[d].c(),r[d].m(s,null))}for(;d<r.length;d+=1)r[d].d(1);r.length=o.length}},d(u){u&&y(e),st(r,u)}}}function Ze(a){let e,n,t=G(Q(a[9].start_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"",l,i,s,o=G(Q(a[9].end_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"",r,u,m,d=Ve(a[9]?.settings?.max_spend_limit)+"",p,M,b,c,v,$,S,T;function _(){return a[7](a[9])}return{c(){e=D("tr"),n=D("td"),l=te(t),i=V(),s=D("td"),r=te(o),u=V(),m=D("td"),p=te(d),M=V(),b=D("td"),c=D("button"),v=D("i"),$=V(),this.h()},l(C){e=k(C,"TR",{});var f=N(e);n=k(f,"TD",{class:!0});var I=N(n);l=ne(I,t),I.forEach(y),i=P(f),s=k(f,"TD",{class:!0});var B=N(s);r=ne(B,o),B.forEach(y),u=P(f),m=k(f,"TD",{class:!0});var H=N(m);p=ne(H,d),H.forEach(y),M=P(f),b=k(f,"TD",{class:!0});var j=N(b);c=k(j,"BUTTON",{"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,class:!0});var A=N(c);v=k(A,"I",{class:!0}),N(v).forEach(y),A.forEach(y),j.forEach(y),$=P(f),f.forEach(y),this.h()},h(){w(n,"class","fw-light text-muted"),w(s,"class","fw-light text-muted"),w(m,"class","text-end"),w(v,"class","bi bi-pencil"),w(c,"data-bs-toggle","offcanvas"),w(c,"data-bs-target","#"+Ie),w(c,"aria-controls",Ie),w(c,"class","btn btn-sm btn-primary"),w(b,"class","d-flex justify-content-end")},m(C,f){O(C,e,f),g(e,n),g(n,l),g(e,i),g(e,s),g(s,r),g(e,u),g(e,m),g(m,p),g(e,M),g(e,b),g(b,c),g(c,v),g(e,$),S||(T=J(c,"click",_),S=!0)},p(C,f){a=C,f&8&&t!==(t=G(Q(a[9].start_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"")&&he(l,t),f&8&&o!==(o=G(Q(a[9].end_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"")&&he(r,o),f&8&&d!==(d=Ve(a[9]?.settings?.max_spend_limit)+"")&&he(p,d)},d(C){C&&y(e),S=!1,T()}}}function Lt(a){let e,n,t,l,i,s="Budgets",o,r,u,m,d,p,M;e=new it({props:{title:a[2],id:Ie,$$slots:{default:[Nt]},$$scope:{ctx:a}}});let b=a[3].length&&We(a);return{c(){q(e.$$.fragment),n=V(),t=D("div"),l=D("div"),i=D("h2"),i.textContent=s,o=V(),r=D("button"),u=D("i"),m=V(),b&&b.c(),this.h()},l(c){U(e.$$.fragment,c),n=P(c),t=k(c,"DIV",{class:!0});var v=N(t);l=k(v,"DIV",{class:!0});var $=N(l);i=k($,"H2",{"data-svelte-h":!0}),x(i)!=="svelte-b0epp8"&&(i.textContent=s),o=P($),r=k($,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var S=N(r);u=k(S,"I",{class:!0}),N(u).forEach(y),S.forEach(y),$.forEach(y),m=P(v),b&&b.l(v),v.forEach(y),this.h()},h(){w(u,"class","bi bi-plus"),w(r,"class","btn btn-sm btn-secondary"),w(r,"type","button"),w(r,"data-bs-toggle","offcanvas"),w(r,"data-bs-target","#"+Ie),w(r,"aria-controls",Ie),w(l,"class","d-flex justify-content-between align-items-center"),w(t,"class","d-flex flex-column gap-3")},m(c,v){R(e,c,v),O(c,n,v),O(c,t,v),g(t,l),g(l,i),g(l,o),g(l,r),g(r,u),g(t,m),b&&b.m(t,null),d=!0,p||(M=J(r,"click",a[6]),p=!0)},p(c,[v]){const $={};v&4&&($.title=c[2]),v&4099&&($.$$scope={dirty:v,ctx:c}),e.$set($),c[3].length?b?b.p(c,v):(b=We(c),b.c(),b.m(t,null)):b&&(b.d(1),b=null)},i(c){d||(E(e.$$.fragment,c),d=!0)},o(c){F(e.$$.fragment,c),d=!1},d(c){c&&(y(n),y(t)),Y(e,c),b&&b.d(),p=!1,M()}}}const Ie="budgets-form";function Vt(a,e,n){let t,l;const{stores:{data:i},actions:{reload:s}}=_t();Fe(a,i,p=>n(3,l=p));let o=!1,r=qe;const u=p=>{n(1,o=!0),setTimeout(()=>{n(0,r=p),n(1,o=!1)},800)};Re(()=>s(!0));const m=()=>u({...qe}),d=p=>u({...p});return a.$$.update=()=>{a.$$.dirty&1&&n(2,t=r?.id?"Edit Budget":"Create Budget")},[r,o,t,l,i,u,m,d]}class Pt extends ie{constructor(e){super(),oe(this,e,Vt,Lt,re,{})}}let ge=null;const Ot=()=>{const a=Me(!1),e=Me([]),n=Me();return ge={stores:{loading:a,targetBudget:n,data:e},actions:{reload:async()=>{a.set(!0);const o=await dt();e.set(o),a.set(!1)},createBudget:async o=>{a.set(!0);try{await ct(o)}catch(r){console.error(r)}finally{a.set(!1)}},updateBudget:async(o,r)=>{a.set(!0);try{await ft(o,r)}catch(u){console.error(u)}finally{a.set(!1)}},deleteBudget:async o=>{a.set(!0);try{await gt(o)}catch(r){console.error(r)}finally{a.set(!1)}}}},ge},Pe=()=>ge?.stores&&Object.keys(ge.stores).length>0&&ge?.actions&&Object.keys(ge.actions).length>0?ge:Ot(),At=()=>{ge=null};function jt(a){let e,n,t;function l(s){a[6](s)}let i={label:"Start Date",name:"budget-start-date",placeholder:"",helperText:"",loading:a[1],required:!0,isInvalid:a[2]};return a[0]!==void 0&&(i.value=a[0]),e=new ut({props:i}),ae.push(()=>Ae(e,"value",l)),e.$on("valueChanged",a[3]),{c(){q(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,o){R(e,s,o),t=!0},p(s,[o]){const r={};o&2&&(r.loading=s[1]),o&4&&(r.isInvalid=s[2]),!n&&o&1&&(n=!0,r.value=s[0],Oe(()=>n=!1)),e.$set(r)},i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){F(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function Ht(a,e,n){let t,{value:l}=e,{loading:i}=e;async function s(){return new Promise(d=>{setTimeout(()=>{n(5,o=!0),d(o&&(!l.trim()||l.trim()===""))})})}let o=!1;const r=Ye(),u=()=>{r("valueChanged",{value:l})};function m(d){l=d,n(0,l)}return a.$$set=d=>{"value"in d&&n(0,l=d.value),"loading"in d&&n(1,i=d.loading)},a.$$.update=()=>{a.$$.dirty&33&&n(2,t=o&&(!l.trim()||l.trim()===""))},[l,i,t,u,s,o,m]}class qt extends ie{constructor(e){super(),oe(this,e,Ht,jt,re,{value:0,loading:1,validateFieldIsInvalid:4})}get validateFieldIsInvalid(){return this.$$.ctx[4]}}function Ut(a){let e,n,t;function l(s){a[6](s)}let i={label:"End Date",name:"budget-end-date",placeholder:"",helperText:"",loading:a[1],required:!0,isInvalid:a[2]};return a[0]!==void 0&&(i.value=a[0]),e=new ut({props:i}),ae.push(()=>Ae(e,"value",l)),e.$on("valueChanged",a[3]),{c(){q(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,o){R(e,s,o),t=!0},p(s,[o]){const r={};o&2&&(r.loading=s[1]),o&4&&(r.isInvalid=s[2]),!n&&o&1&&(n=!0,r.value=s[0],Oe(()=>n=!1)),e.$set(r)},i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){F(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function Rt(a,e,n){let t,{value:l}=e,{loading:i}=e;async function s(){return new Promise(d=>{setTimeout(()=>{n(5,o=!0),d(o&&(!l.trim()||l.trim()===""))})})}let o=!1;const r=Ye(),u=()=>{r("valueChanged",{value:l})};function m(d){l=d,n(0,l)}return a.$$set=d=>{"value"in d&&n(0,l=d.value),"loading"in d&&n(1,i=d.loading)},a.$$.update=()=>{a.$$.dirty&33&&n(2,t=o&&(!l.trim()||l.trim()===""))},[l,i,t,u,s,o,m]}class Yt extends ie{constructor(e){super(),oe(this,e,Rt,Ut,re,{value:0,loading:1,validateFieldIsInvalid:4})}get validateFieldIsInvalid(){return this.$$.ctx[4]}}function zt(a){let e,n,t;function l(s){a[7](s)}let i={min:0,label:"Max Limit",name:"budget-max-limit",placeholder:"",helperText:a[3],loading:a[1],required:!0,isInvalid:a[2]};return a[0]!==void 0&&(i.value=a[0]),e=new yt({props:i}),ae.push(()=>Ae(e,"value",l)),e.$on("valueChanged",a[4]),{c(){q(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,o){R(e,s,o),t=!0},p(s,[o]){const r={};o&8&&(r.helperText=s[3]),o&2&&(r.loading=s[1]),o&4&&(r.isInvalid=s[2]),!n&&o&1&&(n=!0,r.value=s[0],Oe(()=>n=!1)),e.$set(r)},i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){F(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function Kt(a,e,n){let t,l,{value:i}=e,{loading:s}=e;async function o(){return new Promise(p=>{setTimeout(()=>{n(6,m=!0),p(m&&(!i||i===0||i>1e12))})})}const r=Ye(),u=()=>{r("valueChanged",{value:i}),n(6,m=!0)};let m=!1;function d(p){i=p,n(0,i)}return a.$$set=p=>{"value"in p&&n(0,i=p.value),"loading"in p&&n(1,s=p.loading)},a.$$.update=()=>{a.$$.dirty&65&&n(2,t=m&&(!i||i===0||i>1e12)),a.$$.dirty&4&&n(3,l=t?"Value should be greater 0":"")},[i,s,t,l,u,o,m,d]}class Gt extends ie{constructor(e){super(),oe(this,e,Kt,zt,re,{value:0,loading:1,validateFieldIsInvalid:5})}get validateFieldIsInvalid(){return this.$$.ctx[5]}}function xe(a){let e,n,t,l,i,s,o,r,u,m,d,p,M,b,c,v={loading:a[0],value:a[1].start_at};n=new qt({props:v}),a[13](n),n.$on("valueChanged",a[14]);let $={loading:a[0],value:a[1].end_at};l=new Yt({props:$}),a[15](l),l.$on("valueChanged",a[16]);let S={loading:a[0],value:a[2]};s=new Gt({props:S}),a[17](s),s.$on("valueChanged",a[18]);let T=a[1].id&&et(a);return p=new Le({props:{loading:a[0],variant:"secondary",$$slots:{default:[Jt]},$$scope:{ctx:a}}}),p.$on("click",a[7]),b=new Le({props:{loading:a[0],variant:"primary",$$slots:{default:[Qt]},$$scope:{ctx:a}}}),b.$on("click",a[8]),{c(){e=D("div"),q(n.$$.fragment),t=V(),q(l.$$.fragment),i=V(),q(s.$$.fragment),o=V(),r=D("div"),u=D("div"),T&&T.c(),m=V(),d=D("div"),q(p.$$.fragment),M=V(),q(b.$$.fragment),this.h()},l(_){e=k(_,"DIV",{class:!0});var C=N(e);U(n.$$.fragment,C),t=P(C),U(l.$$.fragment,C),i=P(C),U(s.$$.fragment,C),o=P(C),r=k(C,"DIV",{class:!0});var f=N(r);u=k(f,"DIV",{});var I=N(u);T&&T.l(I),I.forEach(y),m=P(f),d=k(f,"DIV",{});var B=N(d);U(p.$$.fragment,B),M=P(B),U(b.$$.fragment,B),B.forEach(y),f.forEach(y),C.forEach(y),this.h()},h(){w(r,"class","d-flex justify-content-between"),w(e,"class","d-flex flex-column gap-3")},m(_,C){O(_,e,C),R(n,e,null),g(e,t),R(l,e,null),g(e,i),R(s,e,null),g(e,o),g(e,r),g(r,u),T&&T.m(u,null),g(r,m),g(r,d),R(p,d,null),g(d,M),R(b,d,null),c=!0},p(_,C){const f={};C&1&&(f.loading=_[0]),C&2&&(f.value=_[1].start_at),n.$set(f);const I={};C&1&&(I.loading=_[0]),C&2&&(I.value=_[1].end_at),l.$set(I);const B={};C&1&&(B.loading=_[0]),C&4&&(B.value=_[2]),s.$set(B),_[1].id?T?(T.p(_,C),C&2&&E(T,1)):(T=et(_),T.c(),E(T,1),T.m(u,null)):T&&(ue(),F(T,1,1,()=>{T=null}),de());const H={};C&1&&(H.loading=_[0]),C&524288&&(H.$$scope={dirty:C,ctx:_}),p.$set(H);const j={};C&1&&(j.loading=_[0]),C&524288&&(j.$$scope={dirty:C,ctx:_}),b.$set(j)},i(_){c||(E(n.$$.fragment,_),E(l.$$.fragment,_),E(s.$$.fragment,_),E(T),E(p.$$.fragment,_),E(b.$$.fragment,_),c=!0)},o(_){F(n.$$.fragment,_),F(l.$$.fragment,_),F(s.$$.fragment,_),F(T),F(p.$$.fragment,_),F(b.$$.fragment,_),c=!1},d(_){_&&y(e),a[13](null),Y(n),a[15](null),Y(l),a[17](null),Y(s),T&&T.d(),Y(p),Y(b)}}}function et(a){let e,n;return e=new Le({props:{loading:a[0],variant:"danger",$$slots:{default:[Xt]},$$scope:{ctx:a}}}),e.$on("click",a[9]),{c(){q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const i={};l&1&&(i.loading=t[0]),l&524288&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function Xt(a){let e;return{c(){e=te("Delete")},l(n){e=ne(n,"Delete")},m(n,t){O(n,e,t)},d(n){n&&y(e)}}}function Jt(a){let e;return{c(){e=te("Cancel")},l(n){e=ne(n,"Cancel")},m(n,t){O(n,e,t)},d(n){n&&y(e)}}}function Qt(a){let e;return{c(){e=te("Save")},l(n){e=ne(n,"Save")},m(n,t){O(n,e,t)},d(n){n&&y(e)}}}function Wt(a){let e,n,t=a[1]&&xe(a);return{c(){t&&t.c(),e=W()},l(l){t&&t.l(l),e=W()},m(l,i){t&&t.m(l,i),O(l,e,i),n=!0},p(l,[i]){l[1]?t?(t.p(l,i),i&2&&E(t,1)):(t=xe(l),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(ue(),F(t,1,1,()=>{t=null}),de())},i(l){n||(E(t),n=!0)},o(l){F(t),n=!1},d(l){l&&y(e),t&&t.d(l)}}}function Zt(a,e,n){let{loading:t=!1}=e,{budget:l}=e,{drawerId:i}=e,s=0,o=100,r={start_at:G(He(new Date),"yyyy-MM-dd"),end_at:G(je(new Date),"yyyy-MM-dd"),settings:{max_spend_limit:o}},u,m,d;const p=(f,I)=>{const{value:B}=f.detail;if(r)switch(I){case"start-date":n(1,r.start_at=B,r);break;case"end-date":n(1,r.end_at=B,r);break;case"max-settings-max-spend-limit":n(2,o=B),n(1,r={...r,settings:{max_spend_limit:o}});break}},M=()=>{const f=`[data-bs-target="#${i}"]`,I=document.querySelector(f);I&&(I.click(),n(10,l=void 0),n(12,s=void 0),n(1,r={start_at:G(He(new Date),"yyyy-MM-dd"),end_at:G(je(new Date),"yyyy-MM-dd"),settings:{max_spend_limit:0}}))},b=async()=>{const f=await u.validateFieldIsInvalid(),I=await m.validateFieldIsInvalid(),B=await d.validateFieldIsInvalid();if(f||I||B)return;const{actions:{reload:j,createBudget:A,updateBudget:me}}=Pe();r.id?await me(r.id,r):await A(r),await j(),M()},c=async()=>{if(!r?.id)return;const{actions:{reload:f,deleteBudget:I}}=Pe();rt({title:"Delete Confirmation",message:"Are you sure you want to do this?  You won't be able to undo this.",confirmButtonLabel:"Yes",confirmButtonCSS:"btn-danger",callback:async B=>{r?.id&&(B&&await I(r.id),await f(),M())}})};function v(f){ae[f?"unshift":"push"](()=>{u=f,n(3,u)})}const $=f=>p(f,"start-date");function S(f){ae[f?"unshift":"push"](()=>{m=f,n(4,m)})}const T=f=>p(f,"end-date");function _(f){ae[f?"unshift":"push"](()=>{d=f,n(5,d)})}const C=f=>p(f,"max-settings-max-spend-limit");return a.$$set=f=>{"loading"in f&&n(0,t=f.loading),"budget"in f&&n(10,l=f.budget),"drawerId"in f&&n(11,i=f.drawerId)},a.$$.update=()=>{a.$$.dirty&5122&&(!l||s!==l?.id)&&(n(1,r=l?{...r,...l}:r),n(2,o=r?.settings?.max_spend_limit??0),n(12,s=l?.id))},[t,r,o,u,m,d,p,M,b,c,l,i,s,v,$,S,T,_,C]}class xt extends ie{constructor(e){super(),oe(this,e,Zt,Wt,re,{loading:0,budget:10,drawerId:11})}}function tt(a,e,n){const t=a.slice();return t[6]=e[n],t}function nt(a){let e,n,t=Ne(a[0]),l=[];for(let s=0;s<t.length;s+=1)l[s]=at(tt(a,t,s));const i=s=>F(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=W()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);e=W()},m(s,o){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(s,o);O(s,e,o),n=!0},p(s,o){if(o&7){t=Ne(s[0]);let r;for(r=0;r<t.length;r+=1){const u=tt(s,t,r);l[r]?(l[r].p(u,o),E(l[r],1)):(l[r]=at(u),l[r].c(),E(l[r],1),l[r].m(e.parentNode,e))}for(ue(),r=t.length;r<l.length;r+=1)i(r);de()}},i(s){if(!n){for(let o=0;o<t.length;o+=1)E(l[o]);n=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)F(l[o]);n=!1},d(s){s&&y(e),st(l,s)}}}function en(a){let e=Ve(a[6]?.settings?.max_spend_limit)+"",n;return{c(){n=te(e)},l(t){n=ne(t,e)},m(t,l){O(t,n,l)},p(t,l){l&1&&e!==(e=Ve(t[6]?.settings?.max_spend_limit)+"")&&he(n,e)},d(t){t&&y(n)}}}function at(a){let e,n,t,l,i,s="Start:",o,r=G(Q(a[6].start_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"",u,m,d,p,M="End:",b,c=G(Q(a[6].end_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"",v,$,S,T,_;function C(){return a[3](a[6])}return S=new Le({props:{cssClassArray:["pe-0"],variant:"link",size:"md","data-bs-toggle":"offcanvas","data-bs-target":"#"+a[1],"aria-controls":a[1],$$slots:{default:[en]},$$scope:{ctx:a}}}),S.$on("click",C),{c(){e=D("div"),n=D("div"),t=D("div"),l=D("div"),i=D("span"),i.textContent=s,o=V(),u=te(r),m=V(),d=D("div"),p=D("span"),p.textContent=M,b=V(),v=te(c),$=V(),q(S.$$.fragment),T=V(),this.h()},l(f){e=k(f,"DIV",{});var I=N(e);n=k(I,"DIV",{class:!0});var B=N(n);t=k(B,"DIV",{class:!0});var H=N(t);l=k(H,"DIV",{class:!0});var j=N(l);i=k(j,"SPAN",{class:!0,"data-svelte-h":!0}),x(i)!=="svelte-7dueie"&&(i.textContent=s),o=P(j),u=ne(j,r),j.forEach(y),m=P(H),d=k(H,"DIV",{class:!0});var A=N(d);p=k(A,"SPAN",{class:!0,"data-svelte-h":!0}),x(p)!=="svelte-1gnhobp"&&(p.textContent=M),b=P(A),v=ne(A,c),A.forEach(y),H.forEach(y),$=P(B),U(S.$$.fragment,B),B.forEach(y),T=P(I),I.forEach(y),this.h()},h(){w(i,"class","fw-bold"),w(l,"class","d-block d-md-inline d-lg-inline d-xl-inline"),w(p,"class","fw-bold"),w(d,"class","d-block d-md-inline d-lg-inline d-xl-inline"),w(t,"class","fw-lighter"),w(n,"class","d-flex justify-content-between")},m(f,I){O(f,e,I),g(e,n),g(n,t),g(t,l),g(l,i),g(l,o),g(l,u),g(t,m),g(t,d),g(d,p),g(d,b),g(d,v),g(n,$),R(S,n,null),g(e,T),_=!0},p(f,I){a=f,(!_||I&1)&&r!==(r=G(Q(a[6].start_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"")&&he(u,r),(!_||I&1)&&c!==(c=G(Q(a[6].end_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"")&&he(v,c);const B={};I&2&&(B["data-bs-target"]="#"+a[1]),I&2&&(B["aria-controls"]=a[1]),I&513&&(B.$$scope={dirty:I,ctx:a}),S.$set(B)},i(f){_||(E(S.$$.fragment,f),_=!0)},o(f){F(S.$$.fragment,f),_=!1},d(f){f&&y(e),Y(S)}}}function tn(a){let e,n,t=a[0].length&&nt(a);return{c(){t&&t.c(),e=W()},l(l){t&&t.l(l),e=W()},m(l,i){t&&t.m(l,i),O(l,e,i),n=!0},p(l,[i]){l[0].length?t?(t.p(l,i),i&1&&E(t,1)):(t=nt(l),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(ue(),F(t,1,1,()=>{t=null}),de())},i(l){n||(E(t),n=!0)},o(l){F(t),n=!1},d(l){l&&y(e),t&&t.d(l)}}}function nn(a,e,n){let{data:t=[]}=e,{drawerId:l=""}=e;const{stores:{targetBudget:i,loading:s}}=Pe(),o=u=>{s.set(!0),setTimeout(()=>{i.set(u),s.set(!1)},800)},r=u=>o(u);return a.$$set=u=>{"data"in u&&n(0,t=u.data),"drawerId"in u&&n(1,l=u.drawerId)},[t,l,o,r]}class an extends ie{constructor(e){super(),oe(this,e,nn,tn,re,{data:0,drawerId:1})}}function ln(a){let e,n;return e=new ot({}),{c(){q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p:Ue,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function sn(a){let e,n,t;function l(s){a[8](s)}let i={budget:a[0],drawerId:$e};return a[2]!==void 0&&(i.loading=a[2]),e=new xt({props:i}),ae.push(()=>Ae(e,"loading",l)),{c(){q(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,o){R(e,s,o),t=!0},p(s,o){const r={};o&1&&(r.budget=s[0]),!n&&o&4&&(n=!0,r.loading=s[2],Oe(()=>n=!1)),e.$set(r)},i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){F(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function rn(a){let e,n,t,l;const i=[sn,ln],s=[];function o(r,u){return r[2]?1:0}return e=o(a),n=s[e]=i[e](a),{c(){n.c(),t=W()},l(r){n.l(r),t=W()},m(r,u){s[e].m(r,u),O(r,t,u),l=!0},p(r,u){let m=e;e=o(r),e===m?s[e].p(r,u):(ue(),F(s[m],1,1,()=>{s[m]=null}),de(),n=s[e],n?n.p(r,u):(n=s[e]=i[e](r),n.c()),E(n,1),n.m(t.parentNode,t))},i(r){l||(E(n),l=!0)},o(r){F(n),l=!1},d(r){r&&y(t),s[e].d(r)}}}function lt(a){let e,n;return e=new an({props:{drawerId:$e,data:a[3]}}),{c(){q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,l){const i={};l&8&&(i.data=t[3]),e.$set(i)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function on(a){let e,n,t,l,i,s="Budgets",o,r,u,m,d,p,M,b;e=new it({props:{title:a[1],id:$e,$$slots:{default:[rn]},$$scope:{ctx:a}}});let c=a[3].length>0&&lt(a);return{c(){q(e.$$.fragment),n=V(),t=D("div"),l=D("div"),i=D("h2"),i.textContent=s,o=V(),r=D("div"),u=D("button"),m=D("i"),d=V(),c&&c.c(),this.h()},l(v){U(e.$$.fragment,v),n=P(v),t=k(v,"DIV",{class:!0});var $=N(t);l=k($,"DIV",{class:!0});var S=N(l);i=k(S,"H2",{"data-svelte-h":!0}),x(i)!=="svelte-b0epp8"&&(i.textContent=s),o=P(S),r=k(S,"DIV",{});var T=N(r);u=k(T,"BUTTON",{class:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var _=N(u);m=k(_,"I",{class:!0}),N(m).forEach(y),_.forEach(y),T.forEach(y),S.forEach(y),d=P($),c&&c.l($),$.forEach(y),this.h()},h(){w(m,"class","bi bi-plus"),w(u,"class","btn btn-sm btn-secondary"),w(u,"data-bs-toggle","offcanvas"),w(u,"data-bs-target","#"+$e),w(u,"aria-controls",$e),w(l,"class","d-flex justify-content-between align-items-center"),w(t,"class","d-flex flex-column gap-3")},m(v,$){R(e,v,$),O(v,n,$),O(v,t,$),g(t,l),g(l,i),g(l,o),g(l,r),g(r,u),g(u,m),g(t,d),c&&c.m(t,null),p=!0,M||(b=J(u,"click",a[7]),M=!0)},p(v,[$]){const S={};$&2&&(S.title=v[1]),$&2053&&(S.$$scope={dirty:$,ctx:v}),e.$set(S),v[3].length>0?c?(c.p(v,$),$&8&&E(c,1)):(c=lt(v),c.c(),E(c,1),c.m(t,null)):c&&(ue(),F(c,1,1,()=>{c=null}),de())},i(v){p||(E(e.$$.fragment,v),E(c),p=!0)},o(v){F(e.$$.fragment,v),F(c),p=!1},d(v){v&&(y(n),y(t)),Y(e,v),c&&c.d(),M=!1,b()}}}const $e="budget-form";function un(a,e,n){let t,l,i,s;const{stores:{data:o,targetBudget:r,loading:u},actions:{reload:m}}=Pe();Fe(a,o,b=>n(3,s=b)),Fe(a,r,b=>n(0,l=b)),Fe(a,u,b=>n(2,i=b));const d={start_at:G(He(new Date),"yyyy-MM-dd"),end_at:G(je(new Date),"yyyy-MM-dd"),settings:{max_spend_limit:100}},p=()=>{u.set(!0),setTimeout(()=>{r.set(d),u.set(!1)},1500)};Re(m),pt(At);function M(b){i=b,u.set(i)}return a.$$.update=()=>{a.$$.dirty&1&&n(1,t=l?.id?"Edit Budget":"Create Budget")},[l,t,i,s,o,r,u,p,M]}class dn extends ie{constructor(e){super(),oe(this,e,un,on,re,{})}}function fn(a){let e,n;return e=new Pt({}),{c(){q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function cn(a){let e,n;return e=new dn({}),{c(){q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function gn(a){let e,n,t,l;const i=[cn,fn],s=[];function o(r,u){return r[0]?0:1}return e=o(a),n=s[e]=i[e](a),{c(){n.c(),t=W()},l(r){n.l(r),t=W()},m(r,u){s[e].m(r,u),O(r,t,u),l=!0},p(r,u){let m=e;e=o(r),e!==m&&(ue(),F(s[m],1,1,()=>{s[m]=null}),de(),n=s[e],n||(n=s[e]=i[e](r),n.c()),E(n,1),n.m(t.parentNode,t))},i(r){l||(E(n),l=!0)},o(r){F(n),l=!1},d(r){r&&y(t),s[e].d(r)}}}function mn(a){let e,n;return e=new bt({props:{pageTitle:"Budgets",$$slots:{default:[gn]},$$scope:{ctx:a}}}),{c(){q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){R(e,t,l),n=!0},p(t,[l]){const i={};l&5&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function _n(a,e,n){const{actions:{featureIsEnabled:t}}=Dt();let l=!1;return Re(()=>{n(0,l=t(It.UseNewBudgetPage))}),[l]}class Cn extends ie{constructor(e){super(),oe(this,e,_n,mn,re,{})}}export{Cn as component,$n as universal};
