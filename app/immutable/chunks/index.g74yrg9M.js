import{y as $,M as m,w as _,N as x,k as S,f as b,O as E,z as w,P as O,Q as p,R as C,S as I,T as M,U as N,V as P,W as R,X as U}from"./scheduler.lCAGTMnG.js";const o=new Set;let f;function T(){f={r:0,c:[],p:f}}function W(){f.r||$(f.c),f=f.p}function V(t,e){t&&t.i&&(o.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(o.has(t))return;o.add(t),f.c.push(()=>{o.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function A(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function D(t){t&&t.c()}function F(t,e){t&&t.l(e)}function j(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),p(()=>{const d=t.$$.on_mount.map(M).filter(w);t.$$.on_destroy?t.$$.on_destroy.push(...d):$(d),t.$$.on_mount=[]}),i.forEach(p)}function z(t,e){const n=t.$$;n.fragment!==null&&(C(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){t.$$.dirty[0]===-1&&(N.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,s,i,d,c=null,v=[-1]){const u=I;m(t);const a=t.$$={fragment:null,ctx:[],props:d,update:_,not_equal:i,bound:x(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:x(),dirty:v,skip_bound:!1,root:e.target||u.$$.root};c&&c(a.root);let h=!1;if(a.ctx=n?n(t,e.props||{},(r,l,...g)=>{const y=g.length?g[0]:l;return a.ctx&&i(a.ctx[r],a.ctx[r]=y)&&(!a.skip_bound&&a.bound[r]&&a.bound[r](y),h&&B(t,r)),l}):[],a.update(),h=!0,$(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){R();const r=S(e.target);a.fragment&&a.fragment.l(r),r.forEach(b)}else a.fragment&&a.fragment.c();e.intro&&V(t.$$.fragment),j(t,e.target,e.anchor),U(),E()}m(u)}class H{$$=void 0;$$set=void 0;$destroy(){z(this,1),this.$destroy=_}$on(e,n){if(!w(n))return _;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!O(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const L="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(L);export{H as S,X as a,F as b,D as c,z as d,W as e,A as f,T as g,G as i,j as m,V as t};
