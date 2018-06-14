/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='stencil-components']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,e,n,o){"use strict";function i(t){return{t:t[0],e:t[1],n:!!t[2],o:!!t[3],i:!!t[4]}}function c(t,e){if(A(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||3===t)return"false"!==e&&(""===e||!!e);if(t===Number||4===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function r(t,e,n,o){const i=t.c.get(e);i&&((o=i["s-ld"]||i.$activeLoading)&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.c.delete(e))}function s(t,e,n){let o,i,c=null,r=!1,s=!1;for(var f=arguments.length;f-- >2;)R.push(arguments[f]);for(;R.length>0;)if((n=R.pop())&&void 0!==n.pop)for(f=n.length;f--;)R.push(n[f]);else"boolean"==typeof n&&(n=null),(s="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(s=!1)),s&&r?c[c.length-1].r+=n:null===c?c=[s?{r:n}:n]:c.push(s?{r:n}:n),r=s;if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(f in e.class)e.class[f]&&R.push(f);e.class=R.join(" "),R.length=0}null!=e.key&&(o=e.key),null!=e.name&&(i=e.name)}return"function"==typeof t?t(Object.assign({},e,{children:c}),L):{s:t,f:c,r:void 0,l:e,u:o,a:i,p:void 0,d:!1}}function f(t,e,n,o){e.split(" ").forEach(e=>{t[e]=!0,n&&(t[`${e}-${n}`]=!0,o&&(t[`${e}-${n}-${o}`]=t[`${e}-${o}`]=!0))})}function l(t,e){t.m.has(e)||(t.m.set(e,!0),t.b?t.queue.write(()=>u(t,e)):t.queue.tick(()=>u(t,e)))}function u(t,e,n,o,i,c){if(t.m.delete(e),!t.v.has(e)){if(o=t.y.get(e),n=!o){if((i=t.c.get(e))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{u(t,e)}),void(i.$onRender=i["s-rc"]);o=function r(t,e,n,o,i,c,s){try{(function f(t,e,n,o,i,c,r){for(r in t.w.set(o,n),t.g.has(n)||t.g.set(n,{}),(c=Object.assign({color:{type:String}},e.properties)).mode={type:String},c)p(t,c[r],n,o,r,i)})(t,i=t.k(e).M,e,o=new i,n),function l(t,e,n){if(e){const o=t.w.get(n);e.forEach(e=>{n[e.method]={emit:n=>{t.j(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}}})}}(t,i.events,o);try{if(c=t.C.get(e)){for(s=0;s<c.length;s+=2)o[c[s]](c[s+1]);t.C.delete(e)}}catch(n){t.O(n,2,e)}}catch(n){o={},t.O(n,7,e,!0)}return t.y.set(e,o),o}(t,e,t.W.get(e));try{o.componentWillLoad&&(c=o.componentWillLoad())}catch(n){t.O(n,3,e)}}else try{o.componentWillUpdate&&(c=o.componentWillUpdate())}catch(n){t.O(n,5,e)}c&&c.then?c.then(()=>a(t,e,o,n)):a(t,e,o,n)}}function a(t,e,n,o){(function i(t,e,n,o){try{const i=e.M.host,c=e.M.encapsulation,r="shadow"===c&&t.N.x;let l,u;if(l=function i(t,e,n){return t&&Object.keys(t).forEach(o=>{t[o].reflectToAttr&&((n=n||{})[o]=e[o])}),n}(e.M.properties,o),u=r?n.shadowRoot:n,o.render||o.hostData||i||l){t.S=!0;const e=o.render&&o.render();let a;a=o.hostData&&o.hostData(),l&&(a=a?Object.assign(a,l):l),t.S=!1,i&&(a=function c(t,e,n){return t=t||{},Object.keys(e).forEach(o=>{"theme"===o?f(t.class=t.class||{},e[o],n.mode,n.color):"class"===o?f(t[o]=t[o]||{},e[o]):t[o]=e[o]}),t}(a,i,o));const p=t.A.get(n)||{};p.p=u;const d=s(null,a,e);d.d=!0,t.A.set(n,t.render(n,p,d,r,c))}t.P(t,t.N,e,o.mode,n),n["s-rn"]=!0,n.$onRender&&(n["s-rc"]=n.$onRender),n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.S=!1,t.O(e,8,n,!0)}})(t,t.k(e),e,n);try{o?e["s-init"]():(n.componentDidUpdate&&n.componentDidUpdate(),g(t.A.get(e)))}catch(n){t.O(n,6,e,!0)}}function p(t,e,n,o,i,r,s,f){if(e.type||e.state){const l=t.g.get(n);e.state||(!e.attr||void 0!==l[i]&&""!==l[i]||(s=r&&r.T)&&A(f=s[e.attr])&&(l[i]=c(e.type,f)),n.hasOwnProperty(i)&&(void 0===l[i]&&(l[i]=c(e.type,n[i])),delete n[i])),o.hasOwnProperty(i)&&void 0===l[i]&&(l[i]=o[i]),e.watchCallbacks&&(l[q+i]=e.watchCallbacks.slice()),b(o,i,function l(e){return(e=t.g.get(t.w.get(this)))&&e[i]},function u(n,o){(o=t.w.get(this))&&(e.state||e.mutable)&&d(t,o,i,n)})}else if(e.elementRef)m(o,i,n);else if(e.method)m(n,i,o[i].bind(o));else if(e.context){const c=t.R(e.context);void 0!==c&&m(o,i,c.L&&c.L(n)||c)}else e.connect&&m(o,i,t.q(e.connect))}function d(t,e,n,o,i,c,r){(i=t.g.get(e))||t.g.set(e,i={});const s=i[n];if(o!==s&&(i[n]=o,c=t.y.get(e))){if(r=i[q+n])for(let t=0;t<r.length;t++)try{c[r[t]].call(c,o,s,n)}catch(t){}!t.S&&e["s-rn"]&&l(t,e)}}function m(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function b(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function h(t,e,n,o,i){const c=e!==(e=e.replace(/^xlink\:?/,"")),r=B[e]||o;r&&(!n||"false"===n)||i?c?t.removeAttributeNS(D,P(e)):t.removeAttribute(e):"function"!=typeof n&&(r&&(n=""),c?t.setAttributeNS(D,P(e),n):t.setAttribute(e,n))}function v(t,e,n,o,i,c,r,s,f,l){if("class"!==n||c)if("style"===n){for(s in o=o||N,i=i||N,o)i[s]||(e.style[s]="");for(s in i)i[s]!==o[s]&&(e.style[s]=i[s])}else"o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e?"list"!==n&&"type"!==n&&!c&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)?(l=t.k(e))&&l.B&&l.B[n]?(y(e,n,i),r&&l.B[n].D&&h(e,l.B[n].H,i,3===l.B[n].I,null==i)):"ref"!==n&&(y(e,n,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(n)):null!=i&&"key"!==n?h(e,n,i):!c||null!=i&&!1!==i||t.N.F(e,n):(n=P(n)in e?P(n.substring(2)):P(n[2])+n.substring(3),i?i!==o&&t.N.U(e,n,i):t.N.z(e,n));else if(o!==i){const t=null==o||""===o?E:o.trim().split(/\s+/),n=null==i||""===i?E:i.trim().split(/\s+/);let c=null==e.className||""===e.className?E:e.className.trim().split(/\s+/);for(s=0,f=t.length;s<f;s++)-1===n.indexOf(t[s])&&(c=c.filter(e=>e!==t[s]));for(s=0,f=n.length;s<f;s++)-1===t.indexOf(n[s])&&(c=[...c,n[s]]);e.className=c.join(" ")}}function y(t,e,n){try{t[e]=n}catch(t){}}function $(t,e,n,o,i){const c=11===n.p.nodeType&&n.p.host?n.p.host:n.p,r=e&&e.l||N,s=n.l||N;for(i in r)s&&null!=s[i]||null==r[i]||v(t,c,i,r[i],void 0,o,n.d);for(i in s)i in r&&s[i]===("value"===i||"checked"===i?c[i]:r[i])||v(t,c,i,r[i],s[i],o,n.d)}function w(t,e){function n(i,c,r,s,f,l,d,v,y){if(v=c.f[r],u||(m=!0,"slot"===v.s&&(p&&e.Q(s,p+"-slot",""),v.f?v.Z=!0:v.G=!0)),A(v.r))v.p=e.J(v.r);else if(v.G)v.p=e.J("");else{if(l=v.p=H||"svg"===v.s?e.K("http://www.w3.org/2000/svg",v.s):e.V(v.Z?"slot-fb":v.s),H="svg"===v.s||"foreignObject"!==v.s&&H,$(t,null,v,H),A(p)&&l["s-si"]!==p&&e.Q(l,l["s-si"]=p,""),A(a)&&e.Q(l,W,a+"."+r+(function t(e){if(e)for(var n=0;n<e.length;n++)if("slot"!==e[n].s||t(e[n].f))return!0;return!1}(v.f)?"":".")),v.f)for(f=0;f<v.f.length;++f)(d=n(i,v,f,l))&&(A(a)&&3===d.nodeType&&!d["s-cr"]&&e.X(l,e.Y("s."+a+"."+f)),e.X(l,d),A(a)&&3===d.nodeType&&!d["s-cr"]&&(e.X(l,e.Y("/")),e.X(l,e.J(" "))));"svg"===v.s&&(H=!1)}return v.p["s-hn"]=b,(v.Z||v.G)&&(v.p["s-sr"]=!0,v.p["s-cr"]=h,v.p["s-sn"]=v.a||"",(y=i&&i.f&&i.f[r])&&y.s===v.s&&i.p&&o(i.p)),v.p}function o(n,i,c,r){t._=!0;const l=e.tt(n);for(c=l.length-1;c>=0;c--)(r=l[c])["s-hn"]!==b&&r["s-ol"]&&(e.et(r),e.nt(f(r),r,s(r)),e.et(r["s-ol"]),r["s-ol"]=null,m=!0),i&&o(r,i);t._=!1}function i(t,o,i,c,r,f,l,u){const a=t["s-cr"]||t.$defaultHolder;for((l=a&&e.ot(a)||t).shadowRoot&&(l=l.shadowRoot);r<=f;++r)c[r]&&(u=A(c[r].r)?e.J(c[r].r):n(null,i,r,t))&&(c[r].p=u,e.nt(l,u,s(o)))}function c(t,n,i,c){for(;n<=i;++n)A(t[n])&&(c=t[n].p,d=!0,c["s-ol"]?e.et(c["s-ol"]):o(c,!0),e.et(c))}function r(t,e){return t.s===e.s&&t.u===e.u&&("slot"!==t.s||t.a===e.a)}function s(t){return t&&t["s-ol"]?t["s-ol"]:t}function f(t){return e.ot(t["s-ol"]?t["s-ol"]:t)}const l=[];let u,a,p,d,m,b,h;return function v(y,w,g,M,k,j,C,W,x,N,E,S){if(b=e.it(y),h=y["s-cr"],u=M,a="shadow"!==k?j:null,p=y["s-sc"],m=d=!1,function l(u,a,p){const d=a.p=u.p,m=u.f,b=a.f;H=a.p&&A(e.ct(a.p))&&void 0!==a.p.ownerSVGElement,H="svg"===a.s||"foreignObject"!==a.s&&H,A(a.r)?(p=d["s-cr"]||d.$defaultHolder)?e.rt(e.ot(p),a.r):u.r!==a.r&&e.rt(d,a.r):("slot"!==a.s&&$(t,u,a,H),A(m)&&A(b)?function h(t,u,a,p,d,m,b,v){let y=0,$=0,w=u.length-1,g=u[0],M=u[w],k=p.length-1,j=p[0],C=p[k];for(;y<=w&&$<=k;)if(null==g)g=u[++y];else if(null==M)M=u[--w];else if(null==j)j=p[++$];else if(null==C)C=p[--k];else if(r(g,j))l(g,j),g=u[++y],j=p[++$];else if(r(M,C))l(M,C),M=u[--w],C=p[--k];else if(r(g,C))"slot"!==g.s&&"slot"!==C.s||o(e.ot(g.p)),l(g,C),e.nt(t,g.p,e.st(M.p)),g=u[++y],C=p[--k];else if(r(M,j))"slot"!==g.s&&"slot"!==C.s||o(e.ot(M.p)),l(M,j),e.nt(t,M.p,g.p),M=u[--w],j=p[++$];else{for(d=null,m=y;m<=w;++m)if(u[m]&&A(u[m].u)&&u[m].u===j.u){d=m;break}A(d)?((v=u[d]).s!==j.s?b=n(u&&u[$],a,d,t):(l(v,j),u[d]=void 0,b=v.p),j=p[++$]):(b=n(u&&u[$],a,$,t),j=p[++$]),b&&e.nt(f(g.p),b,s(g.p))}y>w?i(t,null==p[k+1]?null:p[k+1].p,a,p,$,k):$>k&&c(u,y,w)}(d,m,a,b):A(b)?(A(u.r)&&e.rt(d,""),i(d,null,a,b,0,b.length-1)):A(m)&&c(m,0,m.length-1)),H&&"svg"===a.s&&(H=!1)}(w,g),A(a)&&e.Q(w.p,O,a),m){for(function t(n,o,i,c,r,s,f,u,a,p){for(r=0,s=(o=e.tt(n)).length;r<s;r++){if((i=o[r])["s-sr"]&&(c=i["s-cr"]))for(u=e.tt(e.ot(c)),a=i["s-sn"],f=u.length-1;f>=0;f--)(c=u[f])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(p=e.ft(c))||8===p)&&""===a||1===p&&null===e.lt(c,"slot")&&""===a||1===p&&e.lt(c,"slot")===a)&&(l.some(t=>t.ut===c)||(d=!0,c["s-sn"]=a,l.push({at:i,ut:c})));1===e.ft(i)&&t(i)}}(g.p),C=0;C<l.length;C++)(W=l[C]).ut["s-ol"]||((x=e.J(""))["s-nr"]=W.ut,e.nt(e.ot(W.ut),W.ut["s-ol"]=x,W.ut));for(t._=!0,C=0;C<l.length;C++){for(W=l[C],E=e.ot(W.at),S=e.st(W.at),x=W.ut["s-ol"];x=e.pt(x);)if((N=x["s-nr"])&&N&&N["s-sn"]===W.ut["s-sn"]&&E===e.ot(N)&&(N=e.st(N))&&N&&!N["s-nr"]){S=N;break}(!S&&E!==e.ot(W.ut)||e.st(W.ut)!==S)&&W.ut!==S&&(e.et(W.ut),e.nt(E,W.ut,S))}t._=!1}return d&&function t(n,o,i,c,r,s,f,l){for(c=0,r=(i=e.tt(n)).length;c<r;c++)if(o=i[c],1===e.ft(o)){if(o["s-sr"])for(f=o["s-sn"],o.hidden=!1,s=0;s<r;s++)if(i[s]["s-hn"]!==o["s-hn"])if(l=e.ft(i[s]),""!==f){if(1===l&&f===e.lt(i[s],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==e.dt(i[s]).trim()){o.hidden=!0;break}t(o)}}(g.p),l.length=0,g}}function g(t,e){t&&(t.l&&t.l.ref&&t.l.ref(e?null:t.p),t.f&&t.f.forEach(t=>{g(t,e)}))}function M(t,e,n,o,i){const c=t.ft(e);let r,s,f,l;if(i&&1===c){(s=t.lt(e,W))&&(f=s.split("."))[0]===o&&((l={}).s=t.it(l.p=e),n.f||(n.f=[]),n.f[f[1]]=l,n=l,i=""!==f[2]);for(let c=0;c<e.childNodes.length;c++)M(t,e.childNodes[c],n,o,i)}else 3===c&&(r=e.previousSibling)&&8===t.ft(r)&&"s"===(f=t.dt(r).split("."))[0]&&f[1]===o&&((l={r:t.dt(e)}).p=e,n.f||(n.f=[]),n.f[f[2]]=l)}function k(t,e){const n={tagName:e},o=t.k(n);if(!o||!o.M)return Promise.resolve(null);const i=o.M,c=function r(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];let i;const c={name:n};if(o.state)i="states",c.mt=o.watchCallbacks||[];else if(o.elementRef)i="elements";else if(o.method)i="methods";else{i="props";let t="any";o.type&&(t=o.type,"function"==typeof o.type&&(t=o.type.name)),c.type=t.toLowerCase(),c.mutable=o.mutable||!1,c.connect=o.connect||"-",c.context=o.connect||"-",c.mt=o.watchCallbacks||[]}return e[i].push(c),e},{bt:[],ht:[],vt:[],yt:[]})}(i.properties||{}),s=(o.$t||[]).map(t=>({wt:t.t,capture:t.i,disabled:t.n,passive:t.o,method:t.e})),f=i.events||[],l=Object.assign({gt:i.is,Mt:o.kt||"unknown",encapsulation:i.encapsulation||"none"},c,{events:{jt:f,listeners:s}});return Promise.resolve(l)}function j(t,e,n,o){n.connectedCallback=function(){(function n(t,e,o){t.Ct.has(o)||(t.Ct.set(o,!0),function i(t,e){const n=t.k(e);n.$t&&n.$t.forEach(n=>{n.n||t.N.U(e,n.t,function o(t,e,n,i){return o=>{(i=t.y.get(e))?i[n](o):((i=t.C.get(e)||[]).push(n,o),t.C.set(e,i))}}(t,e,n.e),n.i,n.o)})}(t,o)),t.v.delete(o),t.Ot.has(o)||(t.Ot.set(o,!0),o["s-id"]||(o["s-id"]=t.Wt()),function c(t,e,n){for(n=e;n=t.N.ct(n);)if(t.xt(n)){t.Nt.has(e)||(t.c.set(e,n),n.$activeLoading&&(n["s-ld"]=n.$activeLoading),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>t.Et(e,o,function n(t,e,o,i,c){return o["s-cr"]||t.lt(o,O)||t.x&&1===e.encapsulation||(o["s-cr"]=t.J(""),o["s-cr"]["s-cn"]=!0,t.nt(o,o["s-cr"],t.tt(o)[0])),t.x||1!==e.encapsulation||"shadowRoot"in HTMLElement.prototype||(o.shadowRoot=o),(2===e.encapsulation||1===e.encapsulation&&!t.x)&&t.Q(o,(o["s-sc"]="data-"+e.St)+"-host",""),1===e.encapsulation&&t.x&&(o.shadowRoot,t.At(o,{mode:"open"})),i={Pt:o["s-id"],T:{}},e.B&&Object.keys(e.B).forEach(n=>{(c=e.B[n].H)&&(i.T[c]=t.lt(o,c))}),i}(t.N,e,o))))})(t,e,this)},n.attributeChangedCallback=function(t,n,o){(function i(t,e,n,o,r,s,f){if(t&&o!==r)for(s in t)if((f=t[s]).H&&P(f.H)===P(n)){e[s]=c(f.I,r);break}})(e.B,this,t,n,o)},n.disconnectedCallback=function(){(function e(t,n,o){!t._&&function i(t,e){for(;e;){if(!t.ot(e))return 9!==t.ft(e);e=t.ot(e)}}(t.N,n)&&(t.v.set(n,!0),r(t,n),g(t.A.get(n),!0),t.N.z(n),t.Ct.delete(n),(o=t.y.get(n))&&o.componentDidUnload&&o.componentDidUnload(),[t.c,t.Tt,t.W].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c){if(!t.Nt.has(n)&&(i=t.y.get(n))&&!t.v.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){delete n["s-ld"],t.Nt.set(n,!0);try{g(t.A.get(n)),(c=t.Tt.get(n))&&(c.forEach(t=>t(n)),t.Tt.delete(n)),i.componentDidLoad&&i.componentDidLoad()}catch(e){t.O(e,4,n)}n.classList.add(o),r(t,n)}})(t,this,o)},n.forceUpdate=function(){l(t,this)},function i(t,e,n){e&&Object.keys(e).forEach(o=>{const i=e[o],r=i.Rt;1===r||2===r?b(n,o,function e(){return(t.g.get(this)||{})[o]},function e(n){d(t,this,o,c(i.I,n))}):6===r&&m(n,o,T)})}(t,e.B,n)}function C(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){let o=e[n];return o||(o=t.Lt.querySelector(n)),o||(o=e[n]=t.V(n),t.X(t.Lt,o)),o.componentOnReady()}(t,e,n).then(t=>t[o].apply(t,i))}}const O="data-ssrv",W="data-ssrc",x="$",N={},E=[],S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},A=t=>null!=t,P=t=>t.toLowerCase(),T=()=>{},R=[],L={getAttributes:t=>t.l,replaceAttributes:(t,e)=>t.l=e},q="wc-",B={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},D="http://www.w3.org/1999/xlink";let H=!1;(function I(t,e,n,o,c,r,f){function u(t,e){if(!n.customElements.get(t.St)){j(y,a[t.St]=t,e.prototype,r);{const n=e.observedAttributes=[];for(const e in t.B)t.B[e].H&&n.push(t.B[e].H)}n.customElements.define(t.St,e)}}const a={html:{}},p={},d=n[t]=n[t]||{},m=function b(t,e,n){t.qt||(t.qt=((t,e,n,o)=>t.addEventListener(e,n,o)),t.Bt=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={Dt:n.documentElement,Ht:n.head,Lt:n.body,It:!1,ft:t=>t.nodeType,V:t=>n.createElement(t),K:(t,e)=>n.createElementNS(t,e),J:t=>n.createTextNode(t),Y:t=>n.createComment(t),nt:(t,e,n)=>t.insertBefore(e,n),et:t=>t.remove(),X:(t,e)=>t.appendChild(e),tt:t=>t.childNodes,ot:t=>t.parentNode,st:t=>t.nextSibling,pt:t=>t.previousSibling,it:t=>P(t.nodeName),dt:t=>t.textContent,rt:(t,e)=>t.textContent=e,lt:(t,e)=>t.getAttribute(e),Q:(t,e,n)=>t.setAttribute(e,n),Ft:(t,e,n,o)=>t.setAttributeNS(e,n,o),F:(t,e)=>t.removeAttribute(e),Ut:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.ct(t):"body"===o?i.Lt:"document"===o?n:"window"===o?e:t,U:(e,n,c,r,s,f,l,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof f?p=i.Ut(e,f):"object"==typeof f?p=f:(u=n.split(":")).length>1&&(p=i.Ut(e,u[0]),n=u[1]),!p)return;let m=c;(u=n.split(".")).length>1&&(n=u[0],m=(t=>{t.keyCode===S[u[1]]&&c(t)})),l=i.It?{capture:!!r,passive:!!s}:!!r,t.qt(p,n,m,l),d||o.set(e,d={}),d[a]=(()=>{p&&t.Bt(p,n,m,l),d[a]=null})},z:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},At:(t,e)=>t.attachShadow(e)};i.x=!!i.Dt.attachShadow,e.location.search.indexOf("shadow=false")>0&&(i.x=!1),i.zt=((t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o)));try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.It=!0}))}catch(t){}return i.ct=((t,e)=>(e=i.ot(t))&&11===i.ft(e)?e.host:e),i}(d,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=c,e.enableListener=((t,e,n,o,i)=>(function c(t,e,n,o,i,r){if(e){const c=t.w.get(e),s=t.k(c);if(s&&s.$t)if(o){const o=s.$t.find(t=>t.t===n);o&&t.N.U(c,n,t=>e[o.e](t),o.i,void 0===r?o.o:!!r,i)}else t.N.z(c,n)}})(y,t,e,n,o,i)),e.emit=((t,n,o)=>m.zt(t,e.eventNameFn?e.eventNameFn(n):n,o)),d.h=s,d.Context=e;const h=n["s-defined"]=n.$definedCmps=n["s-defined"]||n.$definedCmps||{};let v=0;const y={N:m,Qt:u,j:e.emit,k:t=>a[m.it(t)],R:t=>e[t],isClient:!0,xt:t=>!(!h[m.it(t)]&&!y.k(t)),Wt:()=>t+v++,O:(t,e,n)=>void 0,q:t=>(function e(t,n,o){return{create:C(t,n,o,"create"),componentOnReady:C(t,n,o,"componentOnReady")}})(m,p,t),queue:e.queue=function $(t,e){function n(t){for(let e=0;e<t.length;e++)try{t[e]()}catch(t){}t.length=0}function o(t,e){let n=0;for(;n<t.length&&c()<e;)try{t[n++]()}catch(t){}n===t.length?t.length=0:0!==n&&t.splice(0,n)}function i(){a++,n(f);const e=c()+7*Math.ceil(a*(1/22));o(l,e),o(u,e),l.length>0&&(u.push(...l),l.length=0),(p=f.length+l.length+u.length>0)?t.raf(i):a=0}const c=()=>e.performance.now(),r=Promise.resolve(),s=[],f=[],l=[],u=[];let a=0,p=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){s.push(t),1===s.length&&r.then(()=>n(s))},read(e){f.push(e),p||(p=!0,t.raf(i))},write(e){l.push(e),p||(p=!0,t.raf(i))}}}(d,n),Et:function g(t,n){if(n.mode||(n.mode=m.lt(n,"mode")||e.mode),t.M)l(y,n);else{const e="string"==typeof t.kt?t.kt:t.kt[n.mode],o=2===t.encapsulation||1===t.encapsulation&&!m.x;import(c+e+(o?".sc":"")+".js").then(e=>{try{(function o(t,e,n){const o=n.style;if(o){const i=n.is+(n.styleMode||x);if(!e[i]){const n=t.V("template");e[i]=n,t.Q(n,"data-tmpl-style-id",i),n.innerHTML=`<style data-style-id="${i}">${o}</style>`,t.X(t.Ht,n)}}})(m,t,t.M=e[(t=>P(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.St)])}catch(e){t.M=class{}}l(y,n)}).catch(t=>void 0)}},c:new WeakMap,Zt:new WeakMap,Ot:new WeakMap,Ct:new WeakMap,Nt:new WeakMap,w:new WeakMap,W:new WeakMap,y:new WeakMap,v:new WeakMap,m:new WeakMap,Tt:new WeakMap,C:new WeakMap,A:new WeakMap,g:new WeakMap};y.render=w(y,m);const W=m.Dt;W["s-ld"]=[],W["s-rn"]=!0,W["s-init"]=(()=>{y.Nt.set(W,d.loaded=y.b=!0),m.zt(n,"appload",{detail:{namespace:t}})}),function N(t,e,n){const o=n.querySelectorAll(`[${O}]`),i=o.length;let c,r,s,f,l,u;if(i>0)for(t.Nt.set(n,!0),f=0;f<i;f++)for(c=o[f],r=e.lt(c,O),(s={}).s=e.it(s.p=c),t.A.set(c,s),l=0,u=c.childNodes.length;l<u;l++)M(e,c.childNodes[l],s,r,!0)}(y,m,W),f&&f.Gt(),y.P=((t,e,n,o,i)=>{(function c(t,e,n,o,i,r,s){let f=n.St+(o||x),l=n[f];if(l||(l=n[f=n.St+x]),l){let o=e.Ht;if(e.x)if(1===n.encapsulation)o=i.shadowRoot;else for(;i=e.ot(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=t.Zt.get(o)||{};if(!c[f]){s=l.content.cloneNode(!0);const n=o.querySelectorAll("[data-styles]");e.nt(o,s,n.length&&n[n.length-1].nextSibling||o.firstChild),c[f]=!0,t.Zt.set(o,c)}}})(t,e,n,o,i)}),function E(t,e,n,o){const i=n.Jt=n.Jt||{};return i.Kt=i.Kt||[],i.Kt.push(function c(t,e,n){return{namespace:e,Vt:t=>t&&t.tagName?Promise.all([k(n,t.tagName),function e(t,n){return Promise.resolve(t.y.get(n))}(n,t)]).then(t=>t[0]&&t[1]?{Xt:t[0],Yt:t[1]}:null):Promise.resolve(null),_t:t=>k(n,t),te:()=>Promise.all(t.components.map(t=>k(n,t[0]))).then(t=>t.filter(t=>t))}}(t,e,o)),i.Vt||(i.Vt=(t=>Promise.all(i.Kt.map(e=>e.Vt(t))).then(t=>t.find(t=>!!t)))),i.te||(i.te=(()=>{const t=[];return i.Kt.forEach(e=>{t.push(e.te())}),Promise.all(t).then(t=>{const e=[];return t.forEach(t=>{t.forEach(t=>{e.push(t)})}),e})})),i}(d,t,n,y),(d.components||[]).map(t=>{const e=function n(t,e,o){const c={St:t[0],B:{color:{H:"color"}}};c.kt=t[1];const r=t[3];if(r)for(e=0;e<r.length;e++)o=r[e],c.B[o[0]]={Rt:o[1],D:!!o[2],H:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,I:o[4]};return c.encapsulation=t[4],t[5]&&(c.$t=t[5].map(i)),c}(t);return a[e.St]=e}).forEach(t=>u(t,class extends HTMLElement{})),function A(t,e,n,o,i,c){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.k(e);if(o)if(t.Nt.has(e))n(e);else{const o=t.Tt.get(e)||[];o.push(n),t.Tt.set(e,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)e.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!n[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(y,d,n,n["s-apps"],n["s-cr"]),d.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"StencilComponents","hydrated");