import{w as D}from"./index.zO33xr9C.js";import{s as y}from"./supabase-config.Y8iSvhNi.js";import{b as P,s as re,e as k,t as S,d as N,j as q,k as E,m as B,f as v,i as V,n as T,L as H,o as I,p as A,I as F,H as O,q as L,w as K,y as oe,Y as ce,F as de,A as J,Z as W,_ as G,$ as he,a0 as X,Q as _e,a1 as x,a2 as C,K as me,a3 as ge,a4 as be,a5 as ve}from"./scheduler.BFgUDm8F.js";import{S as fe,i as ue}from"./index.C_nnBD4N.js";import{e as $}from"./Header.b0Pgc6OE.js";import{g as we}from"./FormSkeleton.DZ_7keFb.js";const M=D([]);let R=!1;async function j(){if(R)return P(M);R=!0;const{data:a,error:e}=await y.from("accounts").select("*").order("name",{ascending:!0});if(e)throw e;const t=a||[];return M.set(t),R=!1,t}async function Ae(a){let e=P(M);return e.length||(await j(),e=P(M)),e.find(t=>t.id===a)}async function ye(a){const{data:e,error:t}=await y.from("accounts").insert([a]).select();if(t)throw t;return await j(),e?e[0]:void 0}async function Te(a,e){const{data:t,error:l}=await y.from("accounts").update(e).eq("id",a).select();if(l)throw l;return await j(),t?t[0]:void 0}async function ke(a){const{error:e}=await y.from("accounts").delete().eq("id",a);if(e)throw e;await j()}const Y=D([]);let Z=!1;async function U(a="",e=""){if(Z)return P(Y);Z=!0;let t=[];if(a&&e){const l=`${e}T23:59:59`,{data:n,error:f}=await y.from("transactions").select("*").gte("date",a).lte("date",l).order("date",{ascending:!1});if(f)throw f;t=n||[],Y.set(t)}else{const{data:l,error:n}=await y.from("transactions").select("*").order("date",{ascending:!1});if(n)throw n;t=l||[],Y.set(t)}return Z=!1,t}async function je(a){const{data:e,error:t}=await y.from("transactions").insert([a]).select();if(t)throw t;return await U(),e?e[0]:void 0}async function Ce(a,e){const{data:t,error:l}=await y.from("transactions").update(e).eq("id",a).select();if(l)throw l;return await U(),t?t[0]:void 0}async function Ne(a){const{error:e}=await y.from("transactions").delete().eq("id",a);if(e)throw e;await U()}const ee=D([]);let z=!1;async function Q(){if(z)return P(ee);z=!0;const{data:a,error:e}=await y.from("bills").select("*").order("created_at",{ascending:!0});if(e)throw e;const t=a||[];return ee.set(t),z=!1,t}async function Ve(a){const{data:e,error:t}=await y.from("bills").insert([a]).select();if(t)throw t;return await Q(),e?e[0]:void 0}async function He(a,e){const{data:t,error:l}=await y.from("bills").update(e).eq("id",a).select();if(l)throw l;return await Q(),t?t[0]:void 0}async function Ke(a){const{error:e}=await y.from("bills").delete().eq("id",a);if(e)throw e;await Q()}let p=null;const qe=()=>{const a=D(!1),e=D([]),t=D();return p={stores:{loading:a,targetAccount:t,data:e},actions:{reload:async()=>{a.set(!0);const o=await j();e.set(o),a.set(!1)},createAccount:async o=>{a.set(!0);try{await ye(o)}catch(i){console.error(i)}finally{a.set(!1)}},updateAccount:async(o,i)=>{a.set(!0);try{await Te(o,i)}catch(s){console.error(s)}finally{a.set(!1)}},deleteAccount:async o=>{a.set(!0);try{await ke(o)}catch(i){console.error(i)}finally{a.set(!1)}},canDeleteAccount:async o=>{a.set(!0);try{const s=(await U()).filter(_=>_.account_id===o),g=(await Q()).filter(_=>_.meta_data?.transaction?.account_id===o);return s.length>0&&g.length>0}catch(i){console.error(i)}finally{a.set(!1)}},getAccount:async o=>{a.set(!0);try{return await Ae(o)}catch(i){console.error(i)}finally{a.set(!1)}}}},p},Me=()=>p?.stores&&Object.keys(p.stores).length>0&&p?.actions&&Object.keys(p.actions).length>0?p:qe(),Ue=()=>{p=null};function te(a){let e,t;return{c(){e=k("small"),t=S(a[3]),this.h()},l(l){e=q(l,"SMALL",{class:!0});var n=E(e);t=B(n,a[3]),n.forEach(v),this.h()},h(){T(e,"class","fw-lighter fst-italic"),H(e,"text-danger",a[7])},m(l,n){I(l,e,n),A(e,t)},p(l,n){n&8&&L(t,l[3]),n&128&&H(e,"text-danger",l[7])},d(l){l&&v(e)}}}function Ee(a){let e,t,l,n,f,r,w,b,o,i=a[3]&&te(a);return{c(){e=k("div"),t=k("div"),l=S(a[1]),n=S(a[9]),f=N(),r=k("input"),w=N(),i&&i.c(),this.h()},l(s){e=q(s,"DIV",{class:!0});var d=E(e);t=q(d,"DIV",{});var g=E(t);l=B(g,a[1]),n=B(g,a[9]),g.forEach(v),f=V(d),r=q(d,"INPUT",{name:!0,type:!0,class:!0,placeholder:!0}),w=V(d),i&&i.l(d),d.forEach(v),this.h()},h(){T(r,"name",a[2]),T(r,"type","text"),T(r,"class","form-control"),T(r,"placeholder",a[4]),r.disabled=a[5],r.required=a[6],H(r,"is-invalid",a[7]),T(e,"class","d-flex flex-column gap-1")},m(s,d){I(s,e,d),A(e,t),A(t,l),A(t,n),A(e,f),A(e,r),a[11](r),F(r,a[0]),A(e,w),i&&i.m(e,null),b||(o=[O(r,"focus",a[12]),O(r,"input",a[13]),O(r,"keyup",a[10])],b=!0)},p(s,[d]){d&2&&L(l,s[1]),d&512&&L(n,s[9]),d&4&&T(r,"name",s[2]),d&16&&T(r,"placeholder",s[4]),d&32&&(r.disabled=s[5]),d&64&&(r.required=s[6]),d&1&&r.value!==s[0]&&F(r,s[0]),d&128&&H(r,"is-invalid",s[7]),s[3]?i?i.p(s,d):(i=te(s),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i:K,o:K,d(s){s&&v(e),a[11](null),i&&i.d(),b=!1,oe(o)}}}function pe(a,e,t){let l,{label:n=""}=e,{name:f=""}=e,{helperText:r=""}=e,{placeholder:w=""}=e,{value:b}=e,{loading:o}=e,{required:i}=e,{isInvalid:s}=e,d;const g=ce(),_=()=>{g("valueChanged",{value:b})};function c(h){de[h?"unshift":"push"](()=>{d=h,t(8,d)})}const u=()=>d.select();function m(){b=this.value,t(0,b)}return a.$$set=h=>{"label"in h&&t(1,n=h.label),"name"in h&&t(2,f=h.name),"helperText"in h&&t(3,r=h.helperText),"placeholder"in h&&t(4,w=h.placeholder),"value"in h&&t(0,b=h.value),"loading"in h&&t(5,o=h.loading),"required"in h&&t(6,i=h.required),"isInvalid"in h&&t(7,s=h.isInvalid)},a.$$.update=()=>{a.$$.dirty&64&&t(9,l=i?"*":"")},[b,n,f,r,w,o,i,s,d,l,_,c,u,m]}class Qe extends fe{constructor(e){super(),ue(this,e,pe,Ee,re,{label:1,name:2,helperText:3,placeholder:4,value:0,loading:5,required:6,isInvalid:7})}}function ae(a,e,t){const l=a.slice();return l[12]=e[t],l}function le(a){let e,t,l,n,f,r,w,b,o=a[1]&&ne(a),i=$(a[2]),s=[];for(let c=0;c<i.length;c+=1)s[c]=se(ae(a,i,c));let d=[a[8],{class:"form-select"},{disabled:f=a[3]||a[4]},{"aria-label":a[1]}],g={};for(let c=0;c<d.length;c+=1)g=G(g,d[c]);let _=a[5]&&ie(a);return{c(){e=k("div"),o&&o.c(),t=N(),l=k("select"),n=k("option");for(let c=0;c<s.length;c+=1)s[c].c();r=N(),_&&_.c(),this.h()},l(c){e=q(c,"DIV",{class:!0});var u=E(e);o&&o.l(u),t=V(u),l=q(u,"SELECT",{class:!0,"aria-label":!0});var m=E(l);n=q(m,"OPTION",{}),E(n).forEach(v);for(let h=0;h<s.length;h+=1)s[h].l(m);m.forEach(v),r=V(u),_&&_.l(u),u.forEach(v),this.h()},h(){n.__value="",F(n,n.__value),X(l,g),a[0]===void 0&&_e(()=>a[10].call(l)),T(e,"class","d-flex flex-column gap-1")},m(c,u){I(c,e,u),o&&o.m(e,null),A(e,t),A(e,l),A(l,n);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(l,null);"value"in g&&(g.multiple?x:C)(l,g.value),l.autofocus&&l.focus(),C(l,a[0],!0),A(e,r),_&&_.m(e,null),w||(b=[O(l,"change",a[10]),O(l,"change",a[7])],w=!0)},p(c,u){if(c[1]?o?o.p(c,u):(o=ne(c),o.c(),o.m(e,t)):o&&(o.d(1),o=null),u&4){i=$(c[2]);let m;for(m=0;m<i.length;m+=1){const h=ae(c,i,m);s[m]?s[m].p(h,u):(s[m]=se(h),s[m].c(),s[m].m(l,null))}for(;m<s.length;m+=1)s[m].d(1);s.length=i.length}X(l,g=we(d,[u&256&&c[8],{class:"form-select"},u&24&&f!==(f=c[3]||c[4])&&{disabled:f},u&2&&{"aria-label":c[1]}])),u&282&&"value"in g&&(g.multiple?x:C)(l,g.value),u&5&&C(l,c[0]),c[5]?_?_.p(c,u):(_=ie(c),_.c(),_.m(e,null)):_&&(_.d(1),_=null)},d(c){c&&v(e),o&&o.d(),me(s,c),_&&_.d(),w=!1,oe(b)}}}function ne(a){let e,t,l;return{c(){e=k("div"),t=S(a[1]),l=S(a[6])},l(n){e=q(n,"DIV",{});var f=E(e);t=B(f,a[1]),l=B(f,a[6]),f.forEach(v)},m(n,f){I(n,e,f),A(e,t),A(e,l)},p(n,f){f&2&&L(t,n[1]),f&64&&L(l,n[6])},d(n){n&&v(e)}}}function se(a){let e,t=a[12].key+"",l,n;return{c(){e=k("option"),l=S(t),this.h()},l(f){e=q(f,"OPTION",{});var r=E(e);l=B(r,t),r.forEach(v),this.h()},h(){e.__value=n=a[12].value,F(e,e.__value)},m(f,r){I(f,e,r),A(e,l)},p(f,r){r&4&&t!==(t=f[12].key+"")&&L(l,t),r&4&&n!==(n=f[12].value)&&(e.__value=n,F(e,e.__value))},d(f){f&&v(e)}}}function ie(a){let e,t;return{c(){e=k("small"),t=new ge(!1),this.h()},l(l){e=q(l,"SMALL",{class:!0});var n=E(e);t=be(n,!1),n.forEach(v),this.h()},h(){t.a=null,T(e,"class","fw-lighter fst-italic")},m(l,n){I(l,e,n),t.m(a[5],e)},p(l,n){n&32&&t.p(l[5])},d(l){l&&v(e)}}}function Ie(a){let e,t=a[2].length>0&&le(a);return{c(){t&&t.c(),e=J()},l(l){t&&t.l(l),e=J()},m(l,n){t&&t.m(l,n),I(l,e,n)},p(l,[n]){l[2].length>0?t?t.p(l,n):(t=le(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:K,o:K,d(l){l&&v(e),t&&t.d(l)}}}function De(a,e,t){let l;const n=["label","options","value","loading","required","disabled","helperText"];let f=W(e,n),{label:r=""}=e,{options:w}=e,{value:b}=e,{loading:o=!1}=e,{required:i=!1}=e,{disabled:s}=e,{helperText:d=""}=e;const g=ce(),_=()=>{g("change",{value:b})};function c(){b=ve(this),t(0,b),t(2,w)}return a.$$set=u=>{e=G(G({},e),he(u)),t(8,f=W(e,n)),"label"in u&&t(1,r=u.label),"options"in u&&t(2,w=u.options),"value"in u&&t(0,b=u.value),"loading"in u&&t(3,o=u.loading),"required"in u&&t(9,i=u.required),"disabled"in u&&t(4,s=u.disabled),"helperText"in u&&t(5,d=u.helperText)},a.$$.update=()=>{a.$$.dirty&512&&t(6,l=i?"*":"")},[b,r,w,o,s,d,l,_,f,i,c]}class Re extends fe{constructor(e){super(),ue(this,e,De,Ie,re,{label:1,options:2,value:0,loading:3,required:9,disabled:4,helperText:5})}}export{Re as S,Qe as T,U as a,Ne as b,je as c,Ue as d,Q as e,Ke as f,Me as g,Ve as h,He as i,Ce as u};
