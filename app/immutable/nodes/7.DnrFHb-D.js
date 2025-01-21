import{s as Ie,r as qe,n as ze,h as we,b as Fe,o as Re}from"../chunks/scheduler.CK6sr-I7.js";import{S as Te,i as Se,v as Me,o as q,t as Z,x as Ye,a as ee,w as Ge,d as h,e as y,s as P,b as be,c as ue,j as b,k as E,l as x,f as O,m as ve,g as de,n as _,y as W,q as f,C as ae,p as fe,B as U,r as De,u as ce,D as Ke}from"../chunks/index.So660rE7.js";import{P as Je}from"../chunks/PageLayout.DXcFnRIr.js";import{e as Be}from"../chunks/Header.Bk-zzMyR.js";import{f as X,g as Qe,p as Y,c as We,u as Xe,a as Ze,d as xe,D as $e}from"../chunks/budget.api.DufGMYlp.js";import{S as et}from"../chunks/Spinner.34XJUS-f.js";import{w as Le}from"../chunks/index.CmMfxuDM.js";import{f as Ne}from"../chunks/app.state.Cj6UBLo0.js";const tt=!0,Mt=Object.freeze(Object.defineProperty({__proto__:null,prerender:tt},Symbol.toStringTag,{value:"Module"})),ke={start_at:X(new Date,"yyyy-MM-dd"),end_at:X(new Date,"yyyy-MM-dd"),settings:{max_spend_limit:0}};let $=null;const st=()=>{const n=Le(!1),e=Le([]);return $={stores:{loading:n,data:e},actions:{reload:async()=>{n.set(!0);const t=await Qe();e.set(t),n.set(!1)}}},$},He=()=>$?.stores&&Object.keys($.stores).length>0&&$?.actions&&Object.keys($.actions).length>0?$:st();function Pe(n){let e,s,t,l="Start Date*",d,i,g,p,c,v,a="End Date*",u,r,k,T,S,N,z="Max Limit*",F,I,C,w,M,j,H=n[14].message+"",A,G,re,K,J,oe,te,V,se,B,ie,me;J=new et({props:{size:"xs"}});let L=n[6]&&Oe(n);function _e(m,D){return m[6]?at:nt}let ne=_e(n),R=ne(n),o=n[15]&&Ae();return{c(){e=y("div"),s=y("div"),t=y("div"),t.textContent=l,d=P(),i=y("input"),p=P(),c=y("div"),v=y("div"),v.textContent=a,u=P(),r=y("input"),T=P(),S=y("div"),N=y("div"),N.textContent=z,F=P(),I=y("input"),w=P(),M=y("div"),j=y("small"),A=be(H),re=P(),K=y("span"),ue(J.$$.fragment),oe=P(),L&&L.c(),te=P(),V=y("button"),R.c(),se=P(),o&&o.c(),this.h()},l(m){e=b(m,"DIV",{class:!0});var D=E(e);s=b(D,"DIV",{class:!0});var pe=E(s);t=b(pe,"DIV",{"data-svelte-h":!0}),x(t)!=="svelte-172ibe4"&&(t.textContent=l),d=O(pe),i=b(pe,"INPUT",{name:!0,type:!0,class:!0}),pe.forEach(h),p=O(D),c=b(D,"DIV",{class:!0});var ge=E(c);v=b(ge,"DIV",{"data-svelte-h":!0}),x(v)!=="svelte-1iotazt"&&(v.textContent=a),u=O(ge),r=b(ge,"INPUT",{name:!0,type:!0,class:!0}),ge.forEach(h),T=O(D),S=b(D,"DIV",{class:!0});var he=E(S);N=b(he,"DIV",{"data-svelte-h":!0}),x(N)!=="svelte-16dil7f"&&(N.textContent=z),F=O(he),I=b(he,"INPUT",{name:!0,type:!0,class:!0}),he.forEach(h),w=O(D),M=b(D,"DIV",{class:!0});var Q=E(M);j=b(Q,"SMALL",{class:!0});var Ee=E(j);A=ve(Ee,H),Ee.forEach(h),re=O(Q),K=b(Q,"SPAN",{});var Ce=E(K);de(J.$$.fragment,Ce),Ce.forEach(h),oe=O(Q),L&&L.l(Q),te=O(Q),V=b(Q,"BUTTON",{class:!0});var ye=E(V);R.l(ye),se=O(ye),o&&o.l(ye),ye.forEach(h),Q.forEach(h),D.forEach(h),this.h()},h(){_(i,"name",g=n[1]+"-start-date"),_(i,"type","date"),_(i,"class","form-control"),i.disabled=n[10],i.required=!0,W(i,"is-invalid",n[8]),_(s,"class","d-flex flex-column gap-2"),_(r,"name",k=n[1]+"-end-date"),_(r,"type","date"),_(r,"class","form-control"),r.disabled=n[10],r.required=!0,W(r,"is-invalid",n[7]),_(c,"class","d-flex flex-column gap-2"),_(I,"name",C=n[1]+"-max-limit"),_(I,"type","text"),_(I,"class","form-control text-end"),I.disabled=n[10],I.required=!0,W(I,"is-invalid",n[9]),_(S,"class","d-flex flex-column gap-2"),_(j,"class",G="fw-lighter fst-italic text-"+n[14].type),W(K,"d-none",!n[10]),_(V,"class","btn btn-primary position-relative"),_(M,"class","d-flex justify-content-end align-items-center gap-2 flex-row"),_(e,"class","d-flex flex-column gap-4")},m(m,D){q(m,e,D),f(e,s),f(s,t),f(s,d),f(s,i),n[21](i),ae(i,n[2]),f(e,p),f(e,c),f(c,v),f(c,u),f(c,r),n[25](r),ae(r,n[3]),f(e,T),f(e,S),f(S,N),f(S,F),f(S,I),n[29](I),ae(I,n[4]),f(e,w),f(e,M),f(M,j),f(j,A),f(M,re),f(M,K),fe(J,K,null),f(M,oe),L&&L.m(M,null),f(M,te),f(M,V),R.m(V,null),f(V,se),o&&o.m(V,null),B=!0,ie||(me=[U(i,"focus",n[22]),U(i,"keyup",n[23]),U(i,"input",n[24]),U(r,"focus",n[26]),U(r,"keyup",n[27]),U(r,"input",n[28]),U(I,"focus",n[30]),U(I,"keyup",n[31]),U(I,"input",n[32]),U(V,"click",n[17])],ie=!0)},p(m,D){(!B||D[0]&2&&g!==(g=m[1]+"-start-date"))&&_(i,"name",g),(!B||D[0]&1024)&&(i.disabled=m[10]),D[0]&4&&ae(i,m[2]),(!B||D[0]&256)&&W(i,"is-invalid",m[8]),(!B||D[0]&2&&k!==(k=m[1]+"-end-date"))&&_(r,"name",k),(!B||D[0]&1024)&&(r.disabled=m[10]),D[0]&8&&ae(r,m[3]),(!B||D[0]&128)&&W(r,"is-invalid",m[7]),(!B||D[0]&2&&C!==(C=m[1]+"-max-limit"))&&_(I,"name",C),(!B||D[0]&1024)&&(I.disabled=m[10]),D[0]&16&&I.value!==m[4]&&ae(I,m[4]),(!B||D[0]&512)&&W(I,"is-invalid",m[9]),(!B||D[0]&16384)&&H!==(H=m[14].message+"")&&De(A,H),(!B||D[0]&16384&&G!==(G="fw-lighter fst-italic text-"+m[14].type))&&_(j,"class",G),(!B||D[0]&1024)&&W(K,"d-none",!m[10]),m[6]?L?L.p(m,D):(L=Oe(m),L.c(),L.m(M,te)):L&&(L.d(1),L=null),ne!==(ne=_e(m))&&(R.d(1),R=ne(m),R&&(R.c(),R.m(V,se))),m[15]?o||(o=Ae(),o.c(),o.m(V,null)):o&&(o.d(1),o=null)},i(m){B||(Z(J.$$.fragment,m),B=!0)},o(m){ee(J.$$.fragment,m),B=!1},d(m){m&&h(e),n[21](null),n[25](null),n[29](null),ce(J),L&&L.d(),R.d(),o&&o.d(),ie=!1,qe(me)}}}function Oe(n){let e,s="<span>Delete</span>",t,l;return{c(){e=y("button"),e.innerHTML=s,this.h()},l(d){e=b(d,"BUTTON",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-4hjfsp"&&(e.innerHTML=s),this.h()},h(){_(e,"class","btn btn-danger position-relative")},m(d,i){q(d,e,i),t||(l=U(e,"click",n[16]),t=!0)},p:ze,d(d){d&&h(e),t=!1,l()}}}function nt(n){let e,s="Create";return{c(){e=y("span"),e.textContent=s},l(t){e=b(t,"SPAN",{"data-svelte-h":!0}),x(e)!=="svelte-1wf0js6"&&(e.textContent=s)},m(t,l){q(t,e,l)},d(t){t&&h(e)}}}function at(n){let e,s="Save";return{c(){e=y("span"),e.textContent=s},l(t){e=b(t,"SPAN",{"data-svelte-h":!0}),x(e)!=="svelte-l126tb"&&(e.textContent=s)},m(t,l){q(t,e,l)},d(t){t&&h(e)}}}function Ae(n){let e,s='<span class="visually-hidden">Item not saved</span>';return{c(){e=y("span"),e.innerHTML=s,this.h()},l(t){e=b(t,"SPAN",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-1sxrz4i"&&(e.innerHTML=s),this.h()},h(){_(e,"class","position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle")},m(t,l){q(t,e,l)},d(t){t&&h(e)}}}function lt(n){let e,s,t=n[0]&&Pe(n);return{c(){t&&t.c(),e=Me()},l(l){t&&t.l(l),e=Me()},m(l,d){t&&t.m(l,d),q(l,e,d),s=!0},p(l,d){l[0]?t?(t.p(l,d),d[0]&1&&Z(t,1)):(t=Pe(l),t.c(),Z(t,1),t.m(e.parentNode,e)):t&&(Ye(),ee(t,1,1,()=>{t=null}),Ge())},i(l){s||(Z(t),s=!0)},o(l){ee(t),s=!1},d(l){l&&h(e),t&&t.d(l)}}}function rt(n,e,s){let t,l,d,i,g,p,{name:c=""}=e,{drawerId:v=""}=e,{budget:a}=e;const{actions:{reload:u}}=He();let r=!1,k,T,S,N=0,z,F,I,C={message:"",type:"info"},w,M={startDate:!1,endDate:!1,amount:!1};const j=()=>{const o=`[data-bs-target="#${v}"]`,m=document.querySelector(o);m&&m.click()},H=()=>{s(5,M={amount:!1,startDate:!1,endDate:!1}),s(0,a={...ke}),s(10,r=!1)},A=(o,m=0,D="info")=>{s(14,C.message=o,C),s(14,C.type=D,C),m&&setTimeout(()=>{s(14,C.message="",C)},m)},G=async()=>{if(!t){A("ID is not defined",0,"danger");return}try{await xe(t),await u(!0),setTimeout(()=>{s(10,r=!1),s(20,w={...a,id:t,start_at:Y(k,"yyyy-MM-dd",new Date).toISOString(),end_at:Y(T,"yyyy-MM-dd",new Date).toISOString()}),A("Transaction Deleted",3e3,"success"),j()},800)}catch(o){setTimeout(()=>{s(10,r=!1),console.error("Save failed:",o),A("Failed to save event. Please try again.",7e3,"danger")},800)}},re=()=>{s(10,r=!0),We({title:"Delete Confirmation",message:"Are you sure you want to do this?  You won't be able to undo this.",confirmButtonLabel:"Yes",confirmButtonCSS:"btn-danger",callback:async o=>{o&&await G(),await u(!0),H()}})},K=async()=>{if(!l){A("Sorry nothing has changed, therefore, there is nothing to save.",7e3);return}if(!p){let o=[];g&&o.push("Amount is invalid"),d&&o.push("Start date is invalid"),i&&o.push("End date is invalid"),A(o.join(". ")+".  Please address accordingly.",0,"danger");return}if(!r){A("Saving ..."),s(10,r=!0);try{const o={...a,start_at:Y(k,"yyyy-MM-dd",new Date).toISOString(),end_at:Y(T,"yyyy-MM-dd",new Date).toISOString(),settings:{...a.settings,max_spend_limit:S}};t?await Xe(t,o):await Ze(o),await u(!0),setTimeout(()=>{s(10,r=!1),s(20,w={...a,id:t}),A("Saved",3e3,"success"),t||H(),j()},800)}catch(o){setTimeout(()=>{s(10,r=!1),console.error("Save failed:",o),A("Failed to save event. Please try again.",7e3,"danger"),t||H()},800)}}};function J(o){we[o?"unshift":"push"](()=>{z=o,s(11,z)})}const oe=()=>z.select(),te=()=>s(5,M.startDate=!0,M);function V(){k=this.value,s(2,k),s(0,a),s(19,N),s(6,t)}function se(o){we[o?"unshift":"push"](()=>{F=o,s(12,F)})}const B=()=>F.select(),ie=()=>s(5,M.endDate=!0,M);function me(){T=this.value,s(3,T),s(0,a),s(19,N),s(6,t)}function L(o){we[o?"unshift":"push"](()=>{I=o,s(13,I)})}const _e=()=>I.select(),ne=()=>s(5,M.amount=!0,M);function R(){S=this.value,s(4,S),s(0,a),s(19,N),s(6,t)}return n.$$set=o=>{"name"in o&&s(1,c=o.name),"drawerId"in o&&s(18,v=o.drawerId),"budget"in o&&s(0,a=o.budget)},n.$$.update=()=>{n.$$.dirty[0]&1&&s(6,t=a?.id),n.$$.dirty[0]&524353&&a&&N!==t&&(s(10,r=!0),setTimeout(()=>{s(20,w={...a}),s(19,N=t),s(4,S=a.settings?.max_spend_limit??0),s(2,k=X(Y(a.start_at,"yyyy-MM-dd",new Date),"yyyy-MM-dd")),s(3,T=X(Y(a.end_at,"yyyy-MM-dd",new Date),"yyyy-MM-dd")),s(10,r=!1)},800)),n.$$.dirty[0]&1048604&&s(15,l=w?.start_at!==k||w?.end_at!==T||w?.settings?.max_spend_limit!==S),n.$$.dirty[0]&33&&s(8,d=M.startDate&&a?.start_at===""),n.$$.dirty[0]&33&&s(7,i=M.endDate&&a?.end_at===""),n.$$.dirty[0]&33&&s(9,g=M.amount&&a?.settings?.max_spend_limit===0),n.$$.dirty[0]&896&&(p=!d&&!i&&!g)},[a,c,k,T,S,M,t,i,d,g,r,z,F,I,C,l,re,K,v,N,w,J,oe,te,V,se,B,ie,me,L,_e,ne,R]}class ot extends Te{constructor(e){super(),Se(this,e,rt,lt,Ie,{name:1,drawerId:18,budget:0},null,[-1,-1])}}function je(n,e,s){const t=n.slice();return t[8]=e[s],t}function it(n){let e,s;return e=new ot({props:{name:"budget-form",drawerId:le,budget:n[0]}}),{c(){ue(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,l){fe(e,t,l),s=!0},p(t,l){const d={};l&1&&(d.budget=t[0]),e.$set(d)},i(t){s||(Z(e.$$.fragment,t),s=!0)},o(t){ee(e.$$.fragment,t),s=!1},d(t){ce(e,t)}}}function Ve(n){let e,s,t,l='<tr><th scope="col" class="fw-light text-muted">Start</th> <th scope="col" class="fw-light text-muted">End</th> <th scope="col" class="text-end">Max Limit</th> <th scope="col"></th></tr>',d,i,g=Be(n[2]),p=[];for(let c=0;c<g.length;c+=1)p[c]=Ue(je(n,g,c));return{c(){e=y("div"),s=y("table"),t=y("thead"),t.innerHTML=l,d=P(),i=y("tbody");for(let c=0;c<p.length;c+=1)p[c].c();this.h()},l(c){e=b(c,"DIV",{class:!0});var v=E(e);s=b(v,"TABLE",{class:!0});var a=E(s);t=b(a,"THEAD",{"data-svelte-h":!0}),x(t)!=="svelte-z1hzd2"&&(t.innerHTML=l),d=O(a),i=b(a,"TBODY",{});var u=E(i);for(let r=0;r<p.length;r+=1)p[r].l(u);u.forEach(h),a.forEach(h),v.forEach(h),this.h()},h(){_(s,"class","table"),_(e,"class","table-responsive")},m(c,v){q(c,e,v),f(e,s),f(s,t),f(s,d),f(s,i);for(let a=0;a<p.length;a+=1)p[a]&&p[a].m(i,null)},p(c,v){if(v&20){g=Be(c[2]);let a;for(a=0;a<g.length;a+=1){const u=je(c,g,a);p[a]?p[a].p(u,v):(p[a]=Ue(u),p[a].c(),p[a].m(i,null))}for(;a<p.length;a+=1)p[a].d(1);p.length=g.length}},d(c){c&&h(e),Ke(p,c)}}}function Ue(n){let e,s,t=X(Y(n[8].start_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"",l,d,i,g=X(Y(n[8].end_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"",p,c,v,a=Ne(n[8]?.settings?.max_spend_limit)+"",u,r,k,T,S,N,z,F;function I(){return n[6](n[8])}return{c(){e=y("tr"),s=y("td"),l=be(t),d=P(),i=y("td"),p=be(g),c=P(),v=y("td"),u=be(a),r=P(),k=y("td"),T=y("button"),S=y("i"),N=P(),this.h()},l(C){e=b(C,"TR",{});var w=E(e);s=b(w,"TD",{class:!0});var M=E(s);l=ve(M,t),M.forEach(h),d=O(w),i=b(w,"TD",{class:!0});var j=E(i);p=ve(j,g),j.forEach(h),c=O(w),v=b(w,"TD",{class:!0});var H=E(v);u=ve(H,a),H.forEach(h),r=O(w),k=b(w,"TD",{class:!0});var A=E(k);T=b(A,"BUTTON",{"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,class:!0});var G=E(T);S=b(G,"I",{class:!0}),E(S).forEach(h),G.forEach(h),A.forEach(h),N=O(w),w.forEach(h),this.h()},h(){_(s,"class","fw-light text-muted"),_(i,"class","fw-light text-muted"),_(v,"class","text-end"),_(S,"class","bi bi-pencil"),_(T,"data-bs-toggle","offcanvas"),_(T,"data-bs-target","#"+le),_(T,"aria-controls",le),_(T,"class","btn btn-sm btn-primary"),_(k,"class","d-flex justify-content-end")},m(C,w){q(C,e,w),f(e,s),f(s,l),f(e,d),f(e,i),f(i,p),f(e,c),f(e,v),f(v,u),f(e,r),f(e,k),f(k,T),f(T,S),f(e,N),z||(F=U(T,"click",I),z=!0)},p(C,w){n=C,w&4&&t!==(t=X(Y(n[8].start_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"")&&De(l,t),w&4&&g!==(g=X(Y(n[8].end_at,"yyyy-MM-dd",new Date),"dd MMM yyyy")+"")&&De(p,g),w&4&&a!==(a=Ne(n[8]?.settings?.max_spend_limit)+"")&&De(u,a)},d(C){C&&h(e),z=!1,F()}}}function ut(n){let e,s,t,l,d,i,g,p,c,v;e=new $e({props:{title:n[1],id:le,$$slots:{default:[it]},$$scope:{ctx:n}}});let a=n[2].length&&Ve(n);return{c(){ue(e.$$.fragment),s=P(),t=y("div"),l=y("button"),d=y("i"),i=P(),a&&a.c(),g=Me(),this.h()},l(u){de(e.$$.fragment,u),s=O(u),t=b(u,"DIV",{class:!0});var r=E(t);l=b(r,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var k=E(l);d=b(k,"I",{class:!0}),E(d).forEach(h),k.forEach(h),r.forEach(h),i=O(u),a&&a.l(u),g=Me(),this.h()},h(){_(d,"class","bi bi-plus"),_(l,"class","btn btn-sm btn-secondary"),_(l,"type","button"),_(l,"data-bs-toggle","offcanvas"),_(l,"data-bs-target","#"+le),_(l,"aria-controls",le),_(t,"class","d-flex justify-content-end")},m(u,r){fe(e,u,r),q(u,s,r),q(u,t,r),f(t,l),f(l,d),q(u,i,r),a&&a.m(u,r),q(u,g,r),p=!0,c||(v=U(l,"click",n[5]),c=!0)},p(u,[r]){const k={};r&2&&(k.title=u[1]),r&2049&&(k.$$scope={dirty:r,ctx:u}),e.$set(k),u[2].length?a?a.p(u,r):(a=Ve(u),a.c(),a.m(g.parentNode,g)):a&&(a.d(1),a=null)},i(u){p||(Z(e.$$.fragment,u),p=!0)},o(u){ee(e.$$.fragment,u),p=!1},d(u){u&&(h(s),h(t),h(i),h(g)),ce(e,u),a&&a.d(u),c=!1,v()}}}const le="budgets-form";function dt(n,e,s){let t,l;const{stores:{data:d},actions:{reload:i}}=He();Fe(n,d,a=>s(2,l=a));let g=ke;const p=a=>{s(0,g=a)};Re(()=>i(!0));const c=()=>p({...ke}),v=a=>p({...a});return n.$$.update=()=>{n.$$.dirty&1&&s(1,t=g?.id?"Edit Budget":"Create Budget")},[g,t,l,d,p,c,v]}class ft extends Te{constructor(e){super(),Se(this,e,dt,ut,Ie,{})}}function ct(n){let e,s;return e=new ft({}),{c(){ue(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,l){fe(e,t,l),s=!0},i(t){s||(Z(e.$$.fragment,t),s=!0)},o(t){ee(e.$$.fragment,t),s=!1},d(t){ce(e,t)}}}function mt(n){let e,s;return e=new Je({props:{pageTitle:"Budgets",$$slots:{default:[ct]},$$scope:{ctx:n}}}),{c(){ue(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,l){fe(e,t,l),s=!0},p(t,[l]){const d={};l&1&&(d.$$scope={dirty:l,ctx:t}),e.$set(d)},i(t){s||(Z(e.$$.fragment,t),s=!0)},o(t){ee(e.$$.fragment,t),s=!1},d(t){ce(e,t)}}}class wt extends Te{constructor(e){super(),Se(this,e,null,mt,Ie,{})}}export{wt as component,Mt as universal};
