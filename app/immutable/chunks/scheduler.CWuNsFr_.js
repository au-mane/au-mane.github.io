function H(){}function C(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function q(t){return t()}function it(){return Object.create(null)}function B(t){t.forEach(q)}function G(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let d;function ct(t,e){return t===e?!0:(d||(d=document.createElement("a")),d.href=e,t===d.href)}function lt(t){return Object.keys(t).length===0}function S(t,...e){if(t==null){for(const i of e)i(void 0);return H}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function rt(t){let e;return S(t,n=>e=n)(),e}function ot(t,e,n){t.$$.on_destroy.push(S(e,n))}function ut(t,e,n,i){if(t){const s=j(t,e,n,i);return t[0](s)}}function j(t,e,n,i){return t[1]&&i?C(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function ft(t,e,n,i,s,r){if(s){const c=j(e,n,i,r);t.p(c,s)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function dt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function mt(t){return t&&G(t.destroy)?t.destroy:H}let p=!1;function pt(){p=!0}function yt(){p=!1}function I(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(s>0&&e[n[s]].claim_order<=u?s+1:I(1,s,O=>e[n[O]].claim_order,u))-1;i[l]=n[a]+1;const N=a+1;n[N]=l,s=Math.max(N,s)}const r=[],c=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);r.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<r.length&&c[l].claim_order>=r[u].claim_order;)u++;const a=u<r.length?r[u]:null;t.insertBefore(c[l],a)}}function z(t,e){if(p){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function F(t,e,n){t.insertBefore(e,n||null)}function U(t,e,n){p&&!n?z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function L(t){return document.createElement(t)}function W(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function gt(){return w(" ")}function xt(){return w("")}function Et(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function J(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const K=["width","height"];function vt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&K.indexOf(i)===-1?t[i]=e[i]:J(t,i,e[i])}function Tt(t){return t.dataset.svelteH}function wt(t){return t===""?null:+t}function Nt(t){return Array.from(t.childNodes)}function M(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,s=!1){M(t);const r=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function Q(t,e,n,i){return D(t,s=>s.nodeName===e,s=>{const r=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||r.push(o.name)}r.forEach(c=>s.removeAttribute(c))},()=>i(e))}function At(t,e,n){return Q(t,e,n,L)}function V(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function kt(t){return V(t," ")}function A(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Ht(t,e){const n=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);M(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const r=s.slice(1,s.length-1);if(r.length===0)return new b(e);for(const c of r)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,r)}function St(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e){t.value=e??""}function Lt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Mt(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Dt(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function Pt(t){const e=t.querySelector(":checked");return e&&e.__value}function Ot(t,e,n){t.classList.toggle(e,!!n)}function X(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ct(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const r=s.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(s)):r===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Y{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=W(n.nodeName):this.e=L(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)F(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class b extends Y{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],e)}}function qt(t,e){return new t(e)}let m;function g(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Bt(t){y().$$.on_mount.push(t)}function Gt(t){y().$$.after_update.push(t)}function It(t){y().$$.on_destroy.push(t)}function Rt(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=X(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,r)}),!r.defaultPrevented}return!0}}function zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],k=[];let _=[];const v=[],P=Promise.resolve();let T=!1;function Z(){T||(T=!0,P.then(tt))}function Ft(){return Z(),P}function $(t){_.push(t)}function Ut(t){v.push(t)}const x=new Set;let f=0;function tt(){if(f!==0)return;const t=m;do{try{for(;f<h.length;){const e=h[f];f++,g(e),et(e.$$)}}catch(e){throw h.length=0,f=0,e}for(g(null),h.length=0,f=0;k.length;)k.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];x.has(n)||(x.add(n),n())}_.length=0}while(h.length);for(;v.length;)v.pop()();T=!1,x.clear(),g(t)}function et(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function Wt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{ht as $,xt as A,ct as B,Gt as C,Lt as D,Ft as E,k as F,qt as G,Et as H,jt as I,mt as J,bt as K,Ot as L,g as M,it as N,tt as O,lt as P,$ as Q,Wt as R,m as S,q as T,h as U,Z as V,pt as W,yt as X,Rt as Y,dt as Z,C as _,at as a,vt as a0,Dt as a1,Mt as a2,b as a3,Ht as a4,Pt as a5,Ut as a6,It as a7,nt as a8,y as a9,zt as aa,wt as ab,rt as b,ut as c,gt as d,L as e,E as f,_t as g,Ct as h,kt as i,At as j,Nt as k,Tt as l,V as m,J as n,U as o,z as p,St as q,ot as r,st as s,w as t,ft as u,Bt as v,H as w,S as x,B as y,G as z};
