(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const Ge=["css","jsxLiterals","usestring","stores"],Je="0.0.22";(function(e){class t extends Error{constructor(f){super("[dreamland-js/dev] "+f),this.name="DreamlandDevError"}}function r(s){console.log("[dreamland-js/dev] "+s)}function n(s){throw new t("fatal: "+s)}function a(s,f){s||n(f)}const[i,l,c,d,y,k,x]=Array.from(Array(7),Symbol),T="dlcomponent";var R=Object.freeze({__proto__:null,IF:k,LISTENERS:y,PROXY:c,STATEHOOK:x,STEPS:d,TARGET:l,USE_COMPUTED:i,cssBoundary:T});const L={};let A;function E(){if(A)return!0;const s=document.createElement("style");s.textContent="@scope (.test) { :scope { color: red } }",document.head.appendChild(s);const f=document.createElement("div");f.className="test",document.body.appendChild(f);const P=getComputedStyle(f).color;return document.head.removeChild(s),document.body.removeChild(f),A=P=="rgb(255, 0, 0)",A}const V=50;function z(s){let f=`:not(${s}).${T}`,P=(p,u)=>`${p} *${u>V?"":`:not(${P(p+" "+(u%2==0?s:f),u+1)})`}`;return`:not(${P(f,0)})`}function _(){return`${Array(4).fill(0).map(()=>Math.floor(Math.random()*36).toString(36)).join("")}`}const W=s=>function(P,...p){let u="";for(let C of P)u+=C+(p.shift()||"");return S("dl"+_(),u,s)},O=W(!1),q=W(!0);function S(s,f,P){var w,v;let p=L[f];if(p)return p;L[f]=s;const u=document.createElement("style");document.head.appendChild(u);let C="",m="";for(f+=`
`;;){let[g,...D]=f.split(`
`);if(g.trim().endsWith("{")||(m+=g+`
`,f=D.join(`
`),!f))break}if(u.textContent=f,P){if(!E()){let D=z(`.${s}`);for(const F of u.sheet.cssRules)(w=F.selectorText)!=null&&w.startsWith(":")?F.selectorText=`.${s}${F.selectorText}`:F.selectorText=`.${s} ${F.selectorText}${D}`,C+=F.cssText+`
`;return u.textContent=`.${s} {${m}}
`+C,s}let g="";for(const D of u.sheet.cssRules)D.selectorText?(v=D.selectorText)!=null&&v.startsWith(":")?(D.selectorText=`.${s}${D.selectorText}`,g+=D.cssText):C+=D.cssText:g+=D.cssText;u.textContent=`.${s} {${m}} @scope (.${s}) to (:not(.${s}).${T} *) { ${C} } ${g}`}else{for(const g of u.sheet.cssRules)g.selectorText=`.${s} ${g.selectorText}`,C+=g.cssText;u.textContent=`.${s} {${m}}
`+C}return s}let N=document;const Y=Symbol();let B=!1;Object.defineProperty(window,"use",{get:()=>(B=!0,(s,f,...P)=>{if(s instanceof Array)return ie(s,f,...P);a(ae(s)||j(s),"a value was passed into use() that was not part of a stateful context"),B=!1;let p={get value(){return Pe(p)}};if(j(s)){let u=[...s[i]];f&&u.push(f),p[c]=s[c],p[i]=u}else p[c]=s,p[i]=f?[f]:[];return p})}),Object.defineProperty(window,"useChange",{get:()=>(B=!0,(s,f)=>{B=!1,s=s instanceof Array?s:[s];for(let P of s)a(ae(P)||j(P),"a value was passed into useChange() that was not part of a stateful context"),G(use(P),f)})});const ie=(s,...f)=>{B=!1;let P=ee({});const p=[];for(const u in s)if(p.push(s[u]),f[u]){let C=f[u];if(ae(C)&&(C=use(C)),j(C)){const m=p.length;let w;G(use(C),v=>{p[m]=String(v);let g=p.join("");g!=w&&(P.string=g),w=g})}else p.push(String(C))}return P.string=p.join(""),use(P.string)};let le=new Map;function ee(s){a($(s),"$state() requires an object"),s[y]=[],s[l]=s;let f=Symbol.toPrimitive;return new Proxy(s,{get(p,u,C){if(B){let m=Symbol(),w=new Proxy({[l]:p,[c]:C,[d]:[u],[f]:()=>m},{get(v,g){return[l,c,d,i,f].includes(g)?v[g]:(g=le.get(g)||g,v[d].push(g),w)}});return le.set(m,w),w}return Reflect.get(p,u,C)},set(p,u,C){let m=Reflect.set(p,u,C);for(let w of p[y])w(p,u,C);return p[x]&&p[x](p,u,p[u]),m}})}let $=s=>s instanceof Object,pe=s=>typeof s=="function";function ue(s){return $(s)&&y in s}function ae(s){return $(s)&&d in s}function j(s){return $(s)&&i in s}function we(s,f,P){return P??(P=N.createTextNode("")),j(s)?{[k]:s,then:f,otherwise:P}:s?f:P}function Pe(s){let f=s[c],P=f[d],p=s[i],u=f[l];for(let C of P)if(u=u[C],!$(u))break;for(let C of p)u=C(u);return u}function G(s,f){a(j(s),"handle() requires a stateful object"),a(pe(f),"handle() requires a callback function");let P=s[c],p=s[i],u,C=[];function m(){let g=P[l];for(u of C)if(g=g[u],!$(g))break;for(let D of p)g=D(g);f(g)}let w=(g,D)=>function F(Z,H,J){if(H===C[D]&&g===Z&&(m(),$(J))){let X=J[y];X&&!X.includes(F)&&X.push(w(J[l],D+1))}};for(let g in P[d]){let D=P[d][g];if($(D)&&D[l]){G(D,F=>{C[g]=F,m()});continue}C[g]=D}let v=w(P[l],0);P[l][y].push(v),v(P[l],C[0],P[l][C[0]])}function be(s,f,P){let p,u,C,m;G(s,w=>{C=u==null?void 0:u[0],C&&(p=C.previousSibling||(m=C.parentNode)),u&&u.forEach(v=>v.remove()),u=fe(P?w?P.then:P.otherwise:w,v=>{p?(m?(p.prepend(v),m=null):p.after(v),p=v):f(v)})})}let me=s=>f=>{let P=s[c],p=s[d],u=0;for(;u<p.length-1;u++)if(P=P[p[u]],!$(P))return;P[p[u]]=f};function ve(s,f,...P){if(s==Y)return P;if(typeof s=="function"){let m=ee(Object.create(s.prototype));for(let F in f){let Z=f[F];if(F.startsWith("bind:")){a(j(Z),"bind: requires a reference pointer from use");let H=me(Z[c]),J=F.substring(5);if(J=="this")H(m);else{let X=!1;G(Z,te=>{if(X){X=!1;return}X=!0,m[J]=te}),G(use(m[J]),te=>{if(X){X=!1;return}X=!0,H(te)})}delete f[F]}}Object.assign(m,f),m.children=[];for(let F of P)fe(F,m.children.push.bind(m.children));let w=s.apply(m);a(!(w instanceof Array),"Functional component cannot return a Fragment"),a(w instanceof Node,"Functional component must return a Node"),a(!("$"in w),"Functional component cannot have another functional component at root level"),w.$=m,m.root=w;let v=w.classList,g=m.css,D=s.name.replaceAll("$","-");return g&&v.add(S(`${D}-${_()}`,g,!0)),m._leak||v.add(T),w.setAttribute("data-component",s.name),typeof m.mount=="function"&&m.mount(),w}let p=f==null?void 0:f.xmlns,u=p?N.createElementNS(p,s):N.createElement(s);for(let m of P){let w=u.append.bind(u);fe(m,w)}if(!f)return u;((m,w)=>{if(!(m in f))return;let v=f[m];w(v),delete f[m]})("class",m=>{if(a(typeof m=="string"||m instanceof Array||j(m),"class must be a string or ar ray (r pointer)"),typeof m=="string"){u.setAttribute("class",m);return}if(j(m)){let w="";G(m,v=>{for(let g of w.split(" "))g&&u.classList.remove(g);for(let g of v.split(" "))g&&u.classList.add(g);w=v});return}window.dlwarnedclassarrays||(console.error("WARN: class arrays (eg, <div class={['container', 'flex']} />) are deprecated and will be REMOVED in the next release"),window.dlwarnedclassarrays=!0);for(let w of m)if(j(w)){let v=null;G(w,g=>{typeof v=="string"&&u.classList.remove(v),u.classList.add(g),v=g})}else u.classList.add(w)});for(let m in f){let w=f[m];if(m.startsWith("bind:")){a(j(w),"bind: requires a reference pointer from use");let v=m.substring(5),g=me(w[c]);v=="this"?g(u):v=="value"?(G(w,D=>u.value=D),u.addEventListener("change",()=>g(u.value))):v=="checked"&&(G(w,D=>u.checked=D),u.addEventListener("click",()=>g(u.checked))),delete f[m]}if(m.startsWith("class:")){let v=m.substring(6);j(w)?G(w,g=>{g?u.classList.add(v):u.classList.remove(v)}):w&&u.classList.add(v),delete f[m]}if(m=="style"&&$(w)&&!j(w)){for(let v in w){let g=w[v];j(g)?G(g,D=>u.style[v]=D):u.style[v]=g}delete f[m]}}for(let m in f){let w=f[m];j(w)?G(w,v=>{De(u,m,v)}):De(u,m,w)}return p&&(u.innerHTML=u.innerHTML),u}function fe(s,f){let P,p,u;if(j(s))be(s,f);else if($(s)&&k in s)be(s[k],f,s);else{if(s instanceof Node)return f(s),[s];if(s instanceof Array){p=[];for(P of s)p=p.concat(fe(P,f));return p[0]||(p=fe("",f)),p}else return s==null&&(s=""),u=N.createTextNode(s),f(u),[u]}}function De(s,f,P){if(P){if(f.startsWith("on:")){a(typeof P=="function","on: requires a function");let p=f.substring(3);for(let u of p.split("$"))s.addEventListener(u,(...C)=>{self.$el=s,P(...C)});return}s.setAttribute(f,P)}}function Fe(s,...f){s=[...s];let P="",p={};for(let m=0;m<s.length;m++){let w=s[m],v=f[m],g=f[m]instanceof Function&&/^ *\/>/.exec(s[m+1]);if(/< *$/.test(w)&&g&&(s[m+1]=s[m+1].substr(g.index+g[0].length)),P+=w,m<f.length){let D=Object.values(p).findIndex(Z=>Z===v),F;D!==-1?F=Object.keys(p)[D]:(F="h"+_(),p[F]=v),P+=F,g&&(P+=`></${F}>`)}}let u=new DOMParser().parseFromString(P,"text/html");a(u.body.children.length==1,"html builder needs exactly one child");function C(m){let w=m.nodeName.toLowerCase();if(w==="#text")return m.textContent;w in p&&(w=p[w]);let v=[...m.childNodes].map(C);for(let D=0;D<v.length;D++){let F=v[D];if(typeof F=="string")for(const[Z,H]of Object.entries(p)){if(!F)break;if(!F.includes(Z))continue;let J;[J,F]=F.split(Z),v=[...v.slice(0,D),J,H,F,...v.slice(D+1)],D+=2}}let g={};if(!m.attributes)return m;for(const D of[...m.attributes]){let F=D.nodeValue;F in p&&(F=p[F]),g[D.name]=F}return ve(w,g,v)}return C(u.body.children[0])}function Te(s,{ident:f,backing:P,autosave:p}){let u,C;if(typeof P=="string")switch(P){case"localstorage":u=()=>localStorage.getItem(f),C=(g,D)=>{localStorage.setItem(g,D)};break;default:a("Unknown store type: "+P)}else({read:u,write:C}=P);let m=()=>{console.info("[dreamland.js]: saving "+f);let g={},D=0,F=H=>{let J={stateful:ue(H),values:{}},X=D++;g[X]=J;for(let te in H){let se=H[te];if(!j(se))switch(typeof se){case"string":case"number":case"boolean":case"undefined":J.values[te]=JSON.stringify(se);break;case"object":if(se instanceof Array){J.values[te]=se.map(Ie=>typeof Ie=="object"?F(Ie):JSON.stringify(Ie));break}else a(se.__proto__===Object.prototype,"Only plain objects are supported"),J.values[te]=F(se);break;case"symbol":case"function":case"bigint":a("Unsupported type: "+typeof se);break}}return X};F(s);let Z=JSON.stringify(g);C(f,Z)},w=(g,D,F)=>{ue(F)&&(F[l][x]=w),m()},v=JSON.parse(u(f));if(v){let g={},D=F=>{if(g[F])return g[F];let Z=v[F],H={};for(let X in Z.values){let te=Z.values[X];typeof te=="string"?H[X]=JSON.parse(te):te instanceof Array?H[X]=te.map(se=>typeof se=="string"?JSON.parse(se):D(se)):H[X]=D(te)}Z.stateful&&p=="auto"&&(H[x]=w);let J=Z.stateful?ee(H):H;return g[F]=J,J};s=D(0)}switch(p){case"beforeunload":addEventListener("beforeunload",m);break;case"manual":break;case"auto":s[x]=w;break;default:a("Unknown autosave type: "+p)}return ee(s)}window.DREAMLAND_SECRET_DEV_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={...R,isDLPtrInternal:ae,handle:G},r("Version: "+Je),console.warn("This is a DEVELOPER build of dreamland.js. It is not suitable for production use."),console.info("Enabled features:",Ge.join(", ")),e.$if=we,e.$state=ee,e.$store=Te,e.Fragment=Y,e.css=O,e.h=ve,e.html=Fe,e.isDLPtr=j,e.isStateful=ue,e.scope=q})(window);let Se=[],Xe=class{constructor(t){this.root=t,this.el=h("div"),this.firstRoute=!0,window.addEventListener("popstate",()=>{this.route(Se.pop())})}render(t){return t.appendChild(this.el),this.route(location.pathname)}route(t){let r=h("a",{href:t}),n=new URL(r.href).pathname;const a=this._parse(n,this.root);return a===n?!1:a.length===0?(this._push(n,this.root),!0):a.startsWith(":")&&this.root.show?(this.root.show[a.slice(1)]=n,this._push(n,this.root),!0):this.root.children?this._route(n.replace(this.root.path,""),n,this.root.children):!1}_parse(t,r){return t.replace(r.regex?new RegExp(r.path):r.path,"")}_route(t,r,n){for(const a of n){const i=this._parse(t,a);if((!a.if||a.if())&&i!==t){if(i.length===0)return this._push(r,a),!0;if(i.startsWith(":")&&a.show)return a.show[i.slice(1)]=r,this._push(r,a),!0;if(a.children&&this._route(i,r,a.children))return!0}}return!1}_push(t,r){if(r.redirect)this.route(r.redirect);else if(r.show){this.firstRoute?this.firstRoute=!1:(Se.push(t),history.pushState({},"",t));let n=h(r.show,r.args);this.el.replaceWith(n),this.el=n}}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){return e<0?-1:e===0?0:1}function xe(e,t,r){return(1-r)*e+r*t}function Ke(e,t,r){return r<e?e:r>t?t:r}function Ce(e,t,r){return r<e?e:r>t?t:r}function Ze(e){return e=e%360,e<0&&(e=e+360),e}function _e(e,t){const r=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],n=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],a=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[r,n,a]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],Qe=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],et=[95.047,100,108.883];function Re(e,t,r){return(255<<24|(e&255)<<16|(t&255)<<8|r&255)>>>0}function Be(e){const t=de(e[0]),r=de(e[1]),n=de(e[2]);return Re(t,r,n)}function Ve(e){return e>>16&255}function qe(e){return e>>8&255}function Ye(e){return e&255}function tt(e,t,r){const n=Qe,a=n[0][0]*e+n[0][1]*t+n[0][2]*r,i=n[1][0]*e+n[1][1]*t+n[1][2]*r,l=n[2][0]*e+n[2][1]*t+n[2][2]*r,c=de(a),d=de(i),y=de(l);return Re(c,d,y)}function rt(e){const t=ye(Ve(e)),r=ye(qe(e)),n=ye(Ye(e));return _e([t,r,n],He)}function nt(e){const t=he(e),r=de(t);return Re(r,r,r)}function ze(e){const t=rt(e)[1];return 116*We(t/100)-16}function he(e){return 100*ot((e+16)/116)}function Oe(e){return We(e/100)*116-16}function ye(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function de(e){const t=e/100;let r=0;return t<=.0031308?r=t*12.92:r=1.055*Math.pow(t,1/2.4)-.055,Ke(0,255,Math.round(r*255))}function at(){return et}function We(e){const t=.008856451679035631,r=24389/27;return e>t?Math.pow(e,1/3):(r*e+16)/116}function ot(e){const t=.008856451679035631,r=24389/27,n=e*e*e;return n>t?n:(116*e-16)/r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static make(t=at(),r=200/Math.PI*he(50)/100,n=50,a=2,i=!1){const l=t,c=l[0]*.401288+l[1]*.650173+l[2]*-.051461,d=l[0]*-.250268+l[1]*1.204414+l[2]*.045854,y=l[0]*-.002079+l[1]*.048952+l[2]*.953127,k=.8+a/10,x=k>=.9?xe(.59,.69,(k-.9)*10):xe(.525,.59,(k-.8)*10);let T=i?1:k*(1-1/3.6*Math.exp((-r-42)/92));T=T>1?1:T<0?0:T;const R=k,L=[T*(100/c)+1-T,T*(100/d)+1-T,T*(100/y)+1-T],A=1/(5*r+1),E=A*A*A*A,V=1-E,z=E*r+.1*V*V*Math.cbrt(5*r),_=he(n)/t[1],W=1.48+Math.sqrt(_),O=.725/Math.pow(_,.2),q=O,S=[Math.pow(z*L[0]*c/100,.42),Math.pow(z*L[1]*d/100,.42),Math.pow(z*L[2]*y/100,.42)],N=[400*S[0]/(S[0]+27.13),400*S[1]/(S[1]+27.13),400*S[2]/(S[2]+27.13)],Y=(2*N[0]+N[1]+.05*N[2])*O;return new ce(_,Y,O,q,x,R,L,z,Math.pow(z,.25),W)}constructor(t,r,n,a,i,l,c,d,y,k){this.n=t,this.aw=r,this.nbb=n,this.ncb=a,this.c=i,this.nc=l,this.rgbD=c,this.fl=d,this.fLRoot=y,this.z=k}}ce.DEFAULT=ce.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,r,n,a,i,l,c,d,y){this.hue=t,this.chroma=r,this.j=n,this.q=a,this.m=i,this.s=l,this.jstar=c,this.astar=d,this.bstar=y}distance(t){const r=this.jstar-t.jstar,n=this.astar-t.astar,a=this.bstar-t.bstar,i=Math.sqrt(r*r+n*n+a*a);return 1.41*Math.pow(i,.63)}static fromInt(t){return oe.fromIntInViewingConditions(t,ce.DEFAULT)}static fromIntInViewingConditions(t,r){const n=(t&16711680)>>16,a=(t&65280)>>8,i=t&255,l=ye(n),c=ye(a),d=ye(i),y=.41233895*l+.35762064*c+.18051042*d,k=.2126*l+.7152*c+.0722*d,x=.01932141*l+.11916382*c+.95034478*d,T=.401288*y+.650173*k-.051461*x,R=-.250268*y+1.204414*k+.045854*x,L=-.002079*y+.048952*k+.953127*x,A=r.rgbD[0]*T,E=r.rgbD[1]*R,V=r.rgbD[2]*L,z=Math.pow(r.fl*Math.abs(A)/100,.42),_=Math.pow(r.fl*Math.abs(E)/100,.42),W=Math.pow(r.fl*Math.abs(V)/100,.42),O=re(A)*400*z/(z+27.13),q=re(E)*400*_/(_+27.13),S=re(V)*400*W/(W+27.13),N=(11*O+-12*q+S)/11,Y=(O+q-2*S)/9,B=(20*O+20*q+21*S)/20,ie=(40*O+20*q+S)/20,ee=Math.atan2(Y,N)*180/Math.PI,$=ee<0?ee+360:ee>=360?ee-360:ee,pe=$*Math.PI/180,ue=ie*r.nbb,ae=100*Math.pow(ue/r.aw,r.c*r.z),j=4/r.c*Math.sqrt(ae/100)*(r.aw+4)*r.fLRoot,we=$<20.14?$+360:$,Pe=.25*(Math.cos(we*Math.PI/180+2)+3.8),be=5e4/13*Pe*r.nc*r.ncb*Math.sqrt(N*N+Y*Y)/(B+.305),me=Math.pow(be,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),ve=me*Math.sqrt(ae/100),fe=ve*r.fLRoot,De=50*Math.sqrt(me*r.c/(r.aw+4)),Fe=(1+100*.007)*ae/(1+.007*ae),Te=1/.0228*Math.log(1+.0228*fe),s=Te*Math.cos(pe),f=Te*Math.sin(pe);return new oe($,ve,ae,j,fe,De,Fe,s,f)}static fromJch(t,r,n){return oe.fromJchInViewingConditions(t,r,n,ce.DEFAULT)}static fromJchInViewingConditions(t,r,n,a){const i=4/a.c*Math.sqrt(t/100)*(a.aw+4)*a.fLRoot,l=r*a.fLRoot,c=r/Math.sqrt(t/100),d=50*Math.sqrt(c*a.c/(a.aw+4)),y=n*Math.PI/180,k=(1+100*.007)*t/(1+.007*t),x=1/.0228*Math.log(1+.0228*l),T=x*Math.cos(y),R=x*Math.sin(y);return new oe(n,r,t,i,l,d,k,T,R)}static fromUcs(t,r,n){return oe.fromUcsInViewingConditions(t,r,n,ce.DEFAULT)}static fromUcsInViewingConditions(t,r,n,a){const i=r,l=n,c=Math.sqrt(i*i+l*l),y=(Math.exp(c*.0228)-1)/.0228/a.fLRoot;let k=Math.atan2(l,i)*(180/Math.PI);k<0&&(k+=360);const x=t/(1-(t-100)*.007);return oe.fromJchInViewingConditions(x,y,k,a)}toInt(){return this.viewed(ce.DEFAULT)}viewed(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,i=.25*(Math.cos(a+2)+3.8),l=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=i*(5e4/13)*t.nc*t.ncb,d=l/t.nbb,y=Math.sin(a),k=Math.cos(a),x=23*(d+.305)*n/(23*c+11*n*k+108*n*y),T=x*k,R=x*y,L=(460*d+451*T+288*R)/1403,A=(460*d-891*T-261*R)/1403,E=(460*d-220*T-6300*R)/1403,V=Math.max(0,27.13*Math.abs(L)/(400-Math.abs(L))),z=re(L)*(100/t.fl)*Math.pow(V,1/.42),_=Math.max(0,27.13*Math.abs(A)/(400-Math.abs(A))),W=re(A)*(100/t.fl)*Math.pow(_,1/.42),O=Math.max(0,27.13*Math.abs(E)/(400-Math.abs(E))),q=re(E)*(100/t.fl)*Math.pow(O,1/.42),S=z/t.rgbD[0],N=W/t.rgbD[1],Y=q/t.rgbD[2],B=1.86206786*S-1.01125463*N+.14918677*Y,ie=.38752654*S+.62144744*N-.00897398*Y,le=-.0158415*S-.03412294*N+1.04996444*Y;return tt(B,ie,le)}static fromXyzInViewingConditions(t,r,n,a){const i=.401288*t+.650173*r-.051461*n,l=-.250268*t+1.204414*r+.045854*n,c=-.002079*t+.048952*r+.953127*n,d=a.rgbD[0]*i,y=a.rgbD[1]*l,k=a.rgbD[2]*c,x=Math.pow(a.fl*Math.abs(d)/100,.42),T=Math.pow(a.fl*Math.abs(y)/100,.42),R=Math.pow(a.fl*Math.abs(k)/100,.42),L=re(d)*400*x/(x+27.13),A=re(y)*400*T/(T+27.13),E=re(k)*400*R/(R+27.13),V=(11*L+-12*A+E)/11,z=(L+A-2*E)/9,_=(20*L+20*A+21*E)/20,W=(40*L+20*A+E)/20,q=Math.atan2(z,V)*180/Math.PI,S=q<0?q+360:q>=360?q-360:q,N=S*Math.PI/180,Y=W*a.nbb,B=100*Math.pow(Y/a.aw,a.c*a.z),ie=4/a.c*Math.sqrt(B/100)*(a.aw+4)*a.fLRoot,le=S<20.14?S+360:S,ee=1/4*(Math.cos(le*Math.PI/180+2)+3.8),pe=5e4/13*ee*a.nc*a.ncb*Math.sqrt(V*V+z*z)/(_+.305),ue=Math.pow(pe,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),ae=ue*Math.sqrt(B/100),j=ae*a.fLRoot,we=50*Math.sqrt(ue*a.c/(a.aw+4)),Pe=(1+100*.007)*B/(1+.007*B),G=Math.log(1+.0228*j)/.0228,be=G*Math.cos(N),me=G*Math.sin(N);return new oe(S,ae,B,ie,j,we,Pe,be,me)}xyzInViewingConditions(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,i=.25*(Math.cos(a+2)+3.8),l=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=i*(5e4/13)*t.nc*t.ncb,d=l/t.nbb,y=Math.sin(a),k=Math.cos(a),x=23*(d+.305)*n/(23*c+11*n*k+108*n*y),T=x*k,R=x*y,L=(460*d+451*T+288*R)/1403,A=(460*d-891*T-261*R)/1403,E=(460*d-220*T-6300*R)/1403,V=Math.max(0,27.13*Math.abs(L)/(400-Math.abs(L))),z=re(L)*(100/t.fl)*Math.pow(V,1/.42),_=Math.max(0,27.13*Math.abs(A)/(400-Math.abs(A))),W=re(A)*(100/t.fl)*Math.pow(_,1/.42),O=Math.max(0,27.13*Math.abs(E)/(400-Math.abs(E))),q=re(E)*(100/t.fl)*Math.pow(O,1/.42),S=z/t.rgbD[0],N=W/t.rgbD[1],Y=q/t.rgbD[2],B=1.86206786*S-1.01125463*N+.14918677*Y,ie=.38752654*S+.62144744*N-.00897398*Y,le=-.0158415*S-.03412294*N+1.04996444*Y;return[B,ie,le]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const r=t/100;let n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(t){const r=Math.pow(Math.abs(t),.42);return re(t)*400*r/(r+27.13)}static hueOf(t){const r=_e(t,M.SCALED_DISCOUNT_FROM_LINRGB),n=M.chromaticAdaptation(r[0]),a=M.chromaticAdaptation(r[1]),i=M.chromaticAdaptation(r[2]),l=(11*n+-12*a+i)/11,c=(n+a-2*i)/9;return Math.atan2(c,l)}static areInCyclicOrder(t,r,n){const a=M.sanitizeRadians(r-t),i=M.sanitizeRadians(n-t);return a<i}static intercept(t,r,n){return(r-t)/(n-t)}static lerpPoint(t,r,n){return[t[0]+(n[0]-t[0])*r,t[1]+(n[1]-t[1])*r,t[2]+(n[2]-t[2])*r]}static setCoordinate(t,r,n,a){const i=M.intercept(t[a],r,n[a]);return M.lerpPoint(t,i,n)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){const n=M.Y_FROM_LINRGB[0],a=M.Y_FROM_LINRGB[1],i=M.Y_FROM_LINRGB[2],l=r%4<=1?0:100,c=r%2===0?0:100;if(r<4){const d=l,y=c,k=(t-d*a-y*i)/n;return M.isBounded(k)?[k,d,y]:[-1,-1,-1]}else if(r<8){const d=l,y=c,k=(t-y*n-d*i)/a;return M.isBounded(k)?[y,k,d]:[-1,-1,-1]}else{const d=l,y=c,k=(t-d*n-y*a)/i;return M.isBounded(k)?[d,y,k]:[-1,-1,-1]}}static bisectToSegment(t,r){let n=[-1,-1,-1],a=n,i=0,l=0,c=!1,d=!0;for(let y=0;y<12;y++){const k=M.nthVertex(t,y);if(k[0]<0)continue;const x=M.hueOf(k);if(!c){n=k,a=k,i=x,l=x,c=!0;continue}(d||M.areInCyclicOrder(i,x,l))&&(d=!1,M.areInCyclicOrder(i,r,x)?(a=k,l=x):(n=k,i=x))}return[n,a]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){const n=M.bisectToSegment(t,r);let a=n[0],i=M.hueOf(a),l=n[1];for(let c=0;c<3;c++)if(a[c]!==l[c]){let d=-1,y=255;a[c]<l[c]?(d=M.criticalPlaneBelow(M.trueDelinearized(a[c])),y=M.criticalPlaneAbove(M.trueDelinearized(l[c]))):(d=M.criticalPlaneAbove(M.trueDelinearized(a[c])),y=M.criticalPlaneBelow(M.trueDelinearized(l[c])));for(let k=0;k<8&&!(Math.abs(y-d)<=1);k++){const x=Math.floor((d+y)/2),T=M.CRITICAL_PLANES[x],R=M.setCoordinate(a,T,l,c),L=M.hueOf(R);M.areInCyclicOrder(i,r,L)?(l=R,y=x):(a=R,i=L,d=x)}}return M.midpoint(a,l)}static inverseChromaticAdaptation(t){const r=Math.abs(t),n=Math.max(0,27.13*r/(400-r));return re(t)*Math.pow(n,1/.42)}static findResultByJ(t,r,n){let a=Math.sqrt(n)*11;const i=ce.DEFAULT,l=1/Math.pow(1.64-Math.pow(.29,i.n),.73),d=.25*(Math.cos(t+2)+3.8)*(5e4/13)*i.nc*i.ncb,y=Math.sin(t),k=Math.cos(t);for(let x=0;x<5;x++){const T=a/100,R=r===0||a===0?0:r/Math.sqrt(T),L=Math.pow(R*l,1/.9),E=i.aw*Math.pow(T,1/i.c/i.z)/i.nbb,V=23*(E+.305)*L/(23*d+11*L*k+108*L*y),z=V*k,_=V*y,W=(460*E+451*z+288*_)/1403,O=(460*E-891*z-261*_)/1403,q=(460*E-220*z-6300*_)/1403,S=M.inverseChromaticAdaptation(W),N=M.inverseChromaticAdaptation(O),Y=M.inverseChromaticAdaptation(q),B=_e([S,N,Y],M.LINRGB_FROM_SCALED_DISCOUNT);if(B[0]<0||B[1]<0||B[2]<0)return 0;const ie=M.Y_FROM_LINRGB[0],le=M.Y_FROM_LINRGB[1],ee=M.Y_FROM_LINRGB[2],$=ie*B[0]+le*B[1]+ee*B[2];if($<=0)return 0;if(x===4||Math.abs($-n)<.002)return B[0]>100.01||B[1]>100.01||B[2]>100.01?0:Be(B);a=a-($-n)*a/(2*$)}return 0}static solveToInt(t,r,n){if(r<1e-4||n<1e-4||n>99.9999)return nt(n);t=Ze(t);const a=t/180*Math.PI,i=he(n),l=M.findResultByJ(a,r,i);if(l!==0)return l;const c=M.bisectToLimit(i,a);return Be(c)}static solveToCam(t,r,n){return oe.fromInt(M.solveToInt(t,r,n))}}M.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];M.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];M.Y_FROM_LINRGB=[.2126,.7152,.0722];M.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static from(t,r,n){return new ge(M.solveToInt(t,r,n))}static fromInt(t){return new ge(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(M.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(M.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(M.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const r=oe.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=ze(t),this.argb=t}setInternalState(t){const r=oe.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=ze(t),this.argb=t}inViewingConditions(t){const n=oe.fromInt(this.toInt()).xyzInViewingConditions(t),a=oe.fromXyzInViewingConditions(n[0],n[1],n[2],ce.make());return ge.from(a.hue,a.chroma,Oe(n[1]))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static ratioOfTones(t,r){return t=Ce(0,100,t),r=Ce(0,100,r),K.ratioOfYs(he(t),he(r))}static ratioOfYs(t,r){const n=t>r?t:r,a=n===r?t:r;return(n+5)/(a+5)}static lighter(t,r){if(t<0||t>100)return-1;const n=he(t),a=r*(n+5)-5,i=K.ratioOfYs(a,n),l=Math.abs(i-r);if(i<r&&l>.04)return-1;const c=Oe(a)+.4;return c<0||c>100?-1:c}static darker(t,r){if(t<0||t>100)return-1;const n=he(t),a=(n+5)/r-5,i=K.ratioOfYs(n,a),l=Math.abs(i-r);if(i<r&&l>.04)return-1;const c=Oe(a)-.4;return c<0||c>100?-1:c}static lighterUnsafe(t,r){const n=K.lighter(t,r);return n<0?100:n}static darkerUnsafe(t,r){const n=K.darker(t,r);return n<0?0:n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static isDisliked(t){const r=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,n=Math.round(t.chroma)>16,a=Math.round(t.tone)<65;return r&&n&&a}static fixIfDisliked(t){return Ee.isDisliked(t)?ge.from(t.hue,t.chroma,70):t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{static fromPalette(t){return new b(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,r,n,a,i,l,c,d){if(this.name=t,this.palette=r,this.tone=n,this.isBackground=a,this.background=i,this.secondBackground=l,this.contrastCurve=c,this.toneDeltaPair=d,this.hctCache=new Map,!i&&l)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!i&&c)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(i&&!c)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const r=this.hctCache.get(t);if(r!=null)return r;const n=this.getTone(t),a=this.palette(t).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,a),a}getTone(t){const r=t.contrastLevel<0;if(this.toneDeltaPair){const n=this.toneDeltaPair(t),a=n.roleA,i=n.roleB,l=n.delta,c=n.polarity,d=n.stayTogether,k=this.background(t).getTone(t),x=c==="nearer"||c==="lighter"&&!t.isDark||c==="darker"&&t.isDark,T=x?a:i,R=x?i:a,L=this.name===T.name,A=t.isDark?1:-1,E=T.contrastCurve.get(t.contrastLevel),V=R.contrastCurve.get(t.contrastLevel),z=T.tone(t);let _=K.ratioOfTones(k,z)>=E?z:b.foregroundTone(k,E);const W=R.tone(t);let O=K.ratioOfTones(k,W)>=V?W:b.foregroundTone(k,V);return r&&(_=b.foregroundTone(k,E),O=b.foregroundTone(k,V)),(O-_)*A>=l||(O=Ce(0,100,_+l*A),(O-_)*A>=l||(_=Ce(0,100,O-l*A))),50<=_&&_<60?A>0?(_=60,O=Math.max(O,_+l*A)):(_=49,O=Math.min(O,_+l*A)):50<=O&&O<60&&(d?A>0?(_=60,O=Math.max(O,_+l*A)):(_=49,O=Math.min(O,_+l*A)):A>0?O=60:O=49),L?_:O}else{let n=this.tone(t);if(this.background==null)return n;const a=this.background(t).getTone(t),i=this.contrastCurve.get(t.contrastLevel);if(K.ratioOfTones(a,n)>=i||(n=b.foregroundTone(a,i)),r&&(n=b.foregroundTone(a,i)),this.isBackground&&50<=n&&n<60&&(K.ratioOfTones(49,a)>=i?n=49:n=60),this.secondBackground){const[l,c]=[this.background,this.secondBackground],[d,y]=[l(t).getTone(t),c(t).getTone(t)],[k,x]=[Math.max(d,y),Math.min(d,y)];if(K.ratioOfTones(k,n)>=i&&K.ratioOfTones(x,n)>=i)return n;const T=K.lighter(k,i),R=K.darker(x,i),L=[];return T!==-1&&L.push(T),R!==-1&&L.push(R),b.tonePrefersLightForeground(d)||b.tonePrefersLightForeground(y)?T<0?100:T:L.length===1?L[0]:R<0?0:R}return n}}static foregroundTone(t,r){const n=K.lighterUnsafe(t,r),a=K.darkerUnsafe(t,r),i=K.ratioOfTones(n,t),l=K.ratioOfTones(a,t);if(b.tonePrefersLightForeground(t)){const d=Math.abs(i-l)<.1&&i<r&&l<r;return i>=r||i>=l||d?n:a}else return l>=r||l>=i?a:n}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return b.tonePrefersLightForeground(t)&&!b.toneAllowsLightForeground(t)?49:t}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,r,n,a){this.low=t,this.normal=r,this.medium=n,this.high=a}get(t){return t<=-1?this.low:t<0?xe(this.low,this.normal,(t- -1)/1):t<.5?xe(this.normal,this.medium,(t-0)/.5):t<1?xe(this.medium,this.high,(t-.5)/.5):this.high}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,r,n,a,i){this.roleA=t,this.roleB=r,this.delta=n,this.polarity=a,this.stayTogether=i}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"})(Me||(Me={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e){return e.variant===Me.FIDELITY||e.variant===Me.CONTENT}function U(e){return e.variant===Me.MONOCHROME}function st(e,t,r,n){let a=r,i=ge.from(e,t,r);if(i.chroma<t){let l=i.chroma;for(;i.chroma<t;){a+=n?-1:1;const c=ge.from(e,t,a);if(l>c.chroma||Math.abs(c.chroma-t)<.4)break;const d=Math.abs(c.chroma-t),y=Math.abs(i.chroma-t);d<y&&(i=c),l=Math.max(l,c.chroma)}}return a}class o{static highestSurface(t){return t.isDark?o.surfaceBright:o.surfaceDim}}o.contentAccentToneDelta=15;o.primaryPaletteKeyColor=b.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});o.secondaryPaletteKeyColor=b.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});o.tertiaryPaletteKeyColor=b.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});o.neutralPaletteKeyColor=b.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});o.neutralVariantPaletteKeyColor=b.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});o.background=b.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});o.onBackground=b.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>o.background,contrastCurve:new I(3,3,4.5,7)});o.surface=b.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});o.surfaceDim=b.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:new I(87,87,80,75).get(e.contrastLevel),isBackground:!0});o.surfaceBright=b.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(24,24,29,34).get(e.contrastLevel):98,isBackground:!0});o.surfaceContainerLowest=b.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(4,4,2,0).get(e.contrastLevel):100,isBackground:!0});o.surfaceContainerLow=b.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(10,10,11,12).get(e.contrastLevel):new I(96,96,96,95).get(e.contrastLevel),isBackground:!0});o.surfaceContainer=b.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(12,12,16,20).get(e.contrastLevel):new I(94,94,92,90).get(e.contrastLevel),isBackground:!0});o.surfaceContainerHigh=b.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(17,17,21,25).get(e.contrastLevel):new I(92,92,88,85).get(e.contrastLevel),isBackground:!0});o.surfaceContainerHighest=b.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(22,22,26,30).get(e.contrastLevel):new I(90,90,84,80).get(e.contrastLevel),isBackground:!0});o.onSurface=b.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>o.highestSurface(e),contrastCurve:new I(4.5,7,11,21)});o.surfaceVariant=b.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});o.onSurfaceVariant=b.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>o.highestSurface(e),contrastCurve:new I(3,4.5,7,11)});o.inverseSurface=b.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});o.inverseOnSurface=b.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>o.inverseSurface,contrastCurve:new I(4.5,7,11,21)});o.outline=b.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>o.highestSurface(e),contrastCurve:new I(1.5,3,4.5,7)});o.outlineVariant=b.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5)});o.shadow=b.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});o.scrim=b.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});o.surfaceTint=b.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});o.primary=b.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>U(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:e=>new ne(o.primaryContainer,o.primary,10,"nearer",!1)});o.onPrimary=b.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>U(e)?e.isDark?10:90:e.isDark?20:100,background:e=>o.primary,contrastCurve:new I(4.5,7,11,21)});o.primaryContainer=b.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>ke(e)?e.sourceColorHct.tone:U(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new ne(o.primaryContainer,o.primary,10,"nearer",!1)});o.onPrimaryContainer=b.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>ke(e)?b.foregroundTone(o.primaryContainer.tone(e),4.5):U(e)?e.isDark?0:100:e.isDark?90:30,background:e=>o.primaryContainer,contrastCurve:new I(3,4.5,7,11)});o.inversePrimary=b.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>o.inverseSurface,contrastCurve:new I(3,4.5,7,7)});o.secondary=b.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:e=>new ne(o.secondaryContainer,o.secondary,10,"nearer",!1)});o.onSecondary=b.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>U(e)?e.isDark?10:100:e.isDark?20:100,background:e=>o.secondary,contrastCurve:new I(4.5,7,11,21)});o.secondaryContainer=b.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;return U(e)?e.isDark?30:85:ke(e)?st(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark):t},isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new ne(o.secondaryContainer,o.secondary,10,"nearer",!1)});o.onSecondaryContainer=b.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>U(e)?e.isDark?90:10:ke(e)?b.foregroundTone(o.secondaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>o.secondaryContainer,contrastCurve:new I(3,4.5,7,11)});o.tertiary=b.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>U(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:e=>new ne(o.tertiaryContainer,o.tertiary,10,"nearer",!1)});o.onTertiary=b.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>U(e)?e.isDark?10:90:e.isDark?20:100,background:e=>o.tertiary,contrastCurve:new I(4.5,7,11,21)});o.tertiaryContainer=b.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(U(e))return e.isDark?60:49;if(!ke(e))return e.isDark?30:90;const t=e.tertiaryPalette.getHct(e.sourceColorHct.tone);return Ee.fixIfDisliked(t).tone},isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new ne(o.tertiaryContainer,o.tertiary,10,"nearer",!1)});o.onTertiaryContainer=b.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>U(e)?e.isDark?0:100:ke(e)?b.foregroundTone(o.tertiaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>o.tertiaryContainer,contrastCurve:new I(3,4.5,7,11)});o.error=b.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:e=>new ne(o.errorContainer,o.error,10,"nearer",!1)});o.onError=b.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>o.error,contrastCurve:new I(4.5,7,11,21)});o.errorContainer=b.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new ne(o.errorContainer,o.error,10,"nearer",!1)});o.onErrorContainer=b.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>U(e)?e.isDark?90:10:e.isDark?90:30,background:e=>o.errorContainer,contrastCurve:new I(3,4.5,7,11)});o.primaryFixed=b.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>U(e)?40:90,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new ne(o.primaryFixed,o.primaryFixedDim,10,"lighter",!0)});o.primaryFixedDim=b.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>U(e)?30:80,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new ne(o.primaryFixed,o.primaryFixedDim,10,"lighter",!0)});o.onPrimaryFixed=b.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>U(e)?100:10,background:e=>o.primaryFixedDim,secondBackground:e=>o.primaryFixed,contrastCurve:new I(4.5,7,11,21)});o.onPrimaryFixedVariant=b.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>U(e)?90:30,background:e=>o.primaryFixedDim,secondBackground:e=>o.primaryFixed,contrastCurve:new I(3,4.5,7,11)});o.secondaryFixed=b.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>U(e)?80:90,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new ne(o.secondaryFixed,o.secondaryFixedDim,10,"lighter",!0)});o.secondaryFixedDim=b.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>U(e)?70:80,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new ne(o.secondaryFixed,o.secondaryFixedDim,10,"lighter",!0)});o.onSecondaryFixed=b.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>o.secondaryFixedDim,secondBackground:e=>o.secondaryFixed,contrastCurve:new I(4.5,7,11,21)});o.onSecondaryFixedVariant=b.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>U(e)?25:30,background:e=>o.secondaryFixedDim,secondBackground:e=>o.secondaryFixed,contrastCurve:new I(3,4.5,7,11)});o.tertiaryFixed=b.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>U(e)?40:90,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new ne(o.tertiaryFixed,o.tertiaryFixedDim,10,"lighter",!0)});o.tertiaryFixedDim=b.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>U(e)?30:80,isBackground:!0,background:e=>o.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new ne(o.tertiaryFixed,o.tertiaryFixedDim,10,"lighter",!0)});o.onTertiaryFixed=b.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>U(e)?100:10,background:e=>o.tertiaryFixedDim,secondBackground:e=>o.tertiaryFixed,contrastCurve:new I(4.5,7,11,21)});o.onTertiaryFixedVariant=b.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>U(e)?90:30,background:e=>o.tertiaryFixedDim,secondBackground:e=>o.tertiaryFixed,contrastCurve:new I(3,4.5,7,11)});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){const t=Ve(e),r=qe(e),n=Ye(e),a=[t.toString(16),r.toString(16),n.toString(16)];for(const[i,l]of a.entries())l.length===1&&(a[i]="0"+l);return"#"+a.join("")}const $e=(e,t)=>{const r=(l,c)=>{const d=l.replace(/[A-Z]/g,T=>`-${T.toLowerCase()}`),y=c>>16&255,k=c>>8&255,x=c&255;return`--m3-scheme-${d}: ${y} ${k} ${x};`},n=Object.entries(e).map(([l,c])=>r(l,c)).join(`
`),a=Object.entries(t).map(([l,c])=>r(l,c)).join(`
`);return`
:root {
	accent-color: rgb(var(--m3-scheme-primary));
}
@media (prefers-color-scheme: light) {
	:root {
		color-scheme: light;
	}
	:root, ::backdrop {
		${n}
	}
}
@media (prefers-color-scheme: dark) {
	:root {
		color-scheme: dark;
	}
	:root, ::backdrop {
		${a}
	}
}`};typeof M3_DREAMLAND_NO_RIPPLE>"u"&&(typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches);const je=function(){return this.mount=()=>{this.root.innerHTML=this.icon.body,useChange([this.icon],()=>{this.root.innerHTML=this.icon.body})},h("svg",{width:use(this.width,e=>e||"1em"),height:use(this.height,e=>e||"1em"),viewBox:use`0 0 ${this.icon.width} ${this.icon.height}`,xmlns:"http://www.w3.org/2000/svg",...this.class?{class:this.class}:{}})},Q=[];for(let e=0;e<256;++e)Q.push((e+256).toString(16).slice(1));function it(e,t=0){return(Q[e[t+0]]+Q[e[t+1]]+Q[e[t+2]]+Q[e[t+3]]+"-"+Q[e[t+4]]+Q[e[t+5]]+"-"+Q[e[t+6]]+Q[e[t+7]]+"-"+Q[e[t+8]]+Q[e[t+9]]+"-"+Q[e[t+10]]+Q[e[t+11]]+Q[e[t+12]]+Q[e[t+13]]+Q[e[t+14]]+Q[e[t+15]]).toLowerCase()}let Ae;const lt=new Uint8Array(16);function ct(){if(!Ae){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ae=crypto.getRandomValues.bind(crypto)}return Ae(lt)}const ut=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Ue={randomUUID:ut};function ft(e,t,r){if(Ue.randomUUID&&!t&&!e)return Ue.randomUUID();e=e||{};const n=e.random||(e.rng||ct)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,it(n)}const ht=function(){this.error=this.error||!1,this.disabled=this.disabled||!1,this.required=this.required||!1,this["on:trailingclick"]=this["on:trailingclick"]||(()=>{}),this.display=this.display||"inline-flex",this.extraOptions=this.extraOptions||{},this.extraWrapperOptions=this.extraWrapperOptions||{};const e=ft(),t=css`
		--m3-textfield-filled-shape: var(--m3-util-rounding-extra-small);

		.TextField-m3-container {
			position: relative;
			align-items: center;
			height: 3.5rem;
			min-width: 15rem;
		}
		input {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			border: none;
			outline: none;
			padding: 1.5rem 1rem 0.5rem 1rem;
			border-radius: var(--m3-textfield-filled-shape) var(--m3-textfield-filled-shape) 0 0;
			background-color: rgb(var(--m3-scheme-surface-container-highest));
			color: rgb(var(--m3-scheme-on-surface));
		}
		label {
			position: absolute;
			left: 1rem;
			top: 1rem;
			color: rgb(var(--error, var(--m3-scheme-on-surface-variant)));
			pointer-events: none;
			transition:
			all 200ms,
			font-size 300ms,
			line-height 300ms,
			letter-spacing 300ms;
		}
		.TextField-layer {
			position: absolute;
			inset: 0;
			border-radius: var(--m3-textfield-filled-shape) var(--m3-textfield-filled-shape) 0 0;
			pointer-events: none;
			transition: all 200ms;
		}
		.TextField-layer::after {
			position: absolute;
			content: " ";
			display: block;
			width: 100%;
			bottom: 0;

			height: 0.0625rem;
			background-color: rgb(var(--error, var(--m3-scheme-on-surface-variant)));
			transition: all 200ms;
		}
		.TextField-m3-container svg {
			width: 1.5rem;
			height: 1.5rem;
			color: rgb(var(--m3-scheme-on-surface-variant));
			pointer-events: none;
		}
		.TextField-m3-container > .leading {
			position: relative;
			margin-left: 0.75rem;
		}
		.trailing {
			position: absolute;
			padding-left: 0.75rem;
			padding-right: 0.75rem;
			height: 100%;
			right: 0;

			display: flex;
			align-items: center;
			justify-content: center;
			border: none;
			background-color: transparent;
			border-top-right-radius: 0.25rem;
			border-bottom-right-radius: 0.25rem;

			-webkit-tap-highlight-color: transparent;
			cursor: pointer;
			transition: all 200ms;
		}
		
		input:enabled:hover ~ .TextField-layer {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.08);
		}
		input:hover ~ label {
			color: rgb(var(--error, var(--m3-scheme-on-surface)));
		}
		input:focus ~ label,
		input:not(:placeholder-shown) ~ label {
			top: 0.5rem;
			font-size: var(--m3-font-body-small-size, 0.75rem);
			line-height: var(--m3-font-body-small-height, 1rem);
			letter-spacing: var(--m3-font-body-small-tracking, 0.4);
		}
		input:focus ~ label {
			color: rgb(var(--error, var(--m3-scheme-primary)));
		}
		input:focus ~ .TextField-layer::after {
			height: 0.125rem;
			background-color: rgb(var(--error, var(--m3-scheme-primary)));
		}
		@media (hover: hover) {
			button:hover {
				background-color: rgb(var(--m3-scheme-on-surface-variant) / 0.08);
			}
		}
		button:focus-visible,
		button:active {
			background-color: rgb(var(--m3-scheme-on-surface-variant) / 0.12);
		}
		
		.leading_icon > input {
			padding-left: 3.25rem;
		}
		.leading_icon > label {
			left: 3.25rem;
		}
		.trailing-icon > input {
			padding-right: 3.25rem;
		}
		.error {
			--error: var(--m3-scheme-error);
		}
		.error > input:hover ~ label,
		.error > input:hover ~ .TextField-layer {
			--error: var(--m3-scheme-on-error-container);
		}
		input:disabled {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.04);
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		input:disabled ~ label {
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		input:disabled ~ .TextField-layer::after {
			background-color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		input:disabled ~ svg {
			color: rgb(var(--m3-scheme-on-surface) / 0.38);
		}
		
		.TextField-m3-container {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
		@media screen and (forced-colors: active) {
			input {
				background-color: field;
			}
			.TextField-layer::after,
			input:focus ~ .TextField-layer::after {
				background-color: canvastext;
			}
		}
	`;return this._leak=!0,h("span",{class:t},h("div",{class:"TextField-m3-container","class:leading_icon":use(this.leadingIcon,r=>!!r),"class:error":use(this.error),style:use`display: ${this.display}`,...this.extraWrapperOptions},h("input",{class:"m3-font-body-large",placeholder:" ","bind:value":use(this.value),id:e,disabled:use(this.disabled),required:use(this.required),...this.extraOptions}),h("label",{class:"m3-font-body-large",for:e},use(this.name)),h("div",{class:"TextField-layer"}),use(this.leadingIcon,r=>r?h(je,{icon:r,class:"leading"}):null),use(this.trailingIcon,r=>r?h("button",{"on:click":this["on:trailingclick"],class:"trailing"},h(je,{icon:r})):null)))},mt=function(){return this.gennedCssEl=h("style",[],$e(this.light,this.dark)),useChange([this.light,this.dark],()=>{this.gennedCssEl.innerText=$e(this.light,this.dark)}),this.mount=()=>{this.disableExtraStyles||this.root.appendChild(h("style",[],`
body {
	font-family: var(--m3-font-body, var(--m3-font));
	font-size: var(--m3-font-body-large-size, 1rem);
	line-height: var(--m3-font-body-large-height, 1.5rem);
	letter-spacing: var(--m3-font-body-large-tracking, 0.03125rem);
	font-weight: var(--m3-font-body-large-weight, 400);
	background-color: rgb(var(--m3-scheme-background));
	color: rgb(var(--m3-scheme-on-background));
}
			`)),this.root.appendChild(this.gennedCssEl),this.root.appendChild(h("style",[],`
/* Needed for elevation to work */
:root {
  --m3-util-elevation-0: none;
  --m3-util-elevation-1: 0px 3px 1px -2px rgb(var(--m3-scheme-shadow) / 0.2),
    0px 2px 2px 0px rgb(var(--m3-scheme-shadow) / 0.14),
    0px 1px 5px 0px rgb(var(--m3-scheme-shadow) / 0.12);
  --m3-util-elevation-2: 0px 2px 4px -1px rgb(var(--m3-scheme-shadow) / 0.2),
    0px 4px 5px 0px rgb(var(--m3-scheme-shadow) / 0.14),
    0px 1px 10px 0px rgb(var(--m3-scheme-shadow) / 0.12);
  --m3-util-elevation-3: 0px 5px 5px -3px rgb(var(--m3-scheme-shadow) / 0.2),
    0px 8px 10px 1px rgb(var(--m3-scheme-shadow) / 0.14),
    0px 3px 14px 2px rgb(var(--m3-scheme-shadow) / 0.12);
  --m3-util-elevation-4: 0px 5px 5px -3px rgb(var(--m3-scheme-shadow) / 0.2),
    0px 8px 10px 1px rgb(var(--m3-scheme-shadow) / 0.14),
    0px 3px 14px 2px rgb(var(--m3-scheme-shadow) / 0.12);
  --m3-util-elevation-5: 0px 8px 10px -6px rgb(var(--m3-scheme-shadow) / 0.2),
    0px 16px 24px 2px rgb(var(--m3-scheme-shadow) / 0.14),
    0px 6px 30px 5px rgb(var(--m3-scheme-shadow) / 0.12);
  --m3-util-bottom-offset: 0;

  /*Shape*/
  --m3-util-rounding-none: 0;
  --m3-util-rounding-extra-small: 0.25rem;
  --m3-util-rounding-small: 0.5rem;
  --m3-util-rounding-medium: 0.75rem;
  --m3-util-rounding-large: 1rem;
  --m3-util-rounding-extra-large: 1.75rem;
  --m3-util-rounding-full: 100rem;

  --m3-font: Roboto, system-ui, sans-serif;
}
.m3-font-display-large,
.m3-font-display-medium,
.m3-font-display-small {
  font-family: var(--m3-font-display, var(--m3-font));
}
.m3-font-headline-large,
.m3-font-headline-medium,
.m3-font-headline-small {
  font-family: var(--m3-font-headline, var(--m3-font));
}
.m3-font-title-large,
.m3-font-title-medium,
.m3-font-title-small {
  font-family: var(--m3-font-title, var(--m3-font));
}
.m3-font-label-large,
.m3-font-label-medium,
.m3-font-label-small {
  font-family: var(--m3-font-label, var(--m3-font));
}
.m3-font-body-large,
.m3-font-body-medium,
.m3-font-body-small {
  font-family: var(--m3-font-body, var(--m3-font));
}
/* As the largest text on the screen, display styles are reserved for short, important text or numerals. */
.m3-font-display-large {
  font-size: var(--m3-font-display-large-size, 3.5625rem);
  line-height: var(--m3-font-display-large-height, 4rem);
  letter-spacing: var(--m3-font-display-large-tracking, -0.015625rem);
  font-weight: var(--m3-font-display-large-weight, 400);
}
.m3-font-display-medium {
  font-size: var(--m3-font-display-medium-size, 2.8125rem);
  line-height: var(--m3-font-display-medium-height, 3.25rem);
  letter-spacing: var(--m3-font-display-medium-tracking, 0);
  font-weight: var(--m3-font-display-medium-weight, 400);
}
.m3-font-display-small {
  font-size: var(--m3-font-display-small-size, 2.25rem);
  line-height: var(--m3-font-display-small-height, 2.75rem);
  letter-spacing: var(--m3-font-display-small-tracking, 0);
  font-weight: var(--m3-font-display-small-weight, 400);
}
/* Headlines are best-suited for short, high-emphasis text on smaller screens. */
.m3-font-headline-large {
  font-size: var(--m3-font-headline-large-size, 2rem);
  line-height: var(--m3-font-headline-large-height, 2.5rem);
  letter-spacing: var(--m3-font-headline-large-tracking, 0);
  font-weight: var(--m3-font-headline-large-weight, 400);
}
.m3-font-headline-medium {
  font-size: var(--m3-font-headline-medium-size, 1.75rem);
  line-height: var(--m3-font-headline-medium-height, 2.25rem);
  letter-spacing: var(--m3-font-headline-medium-tracking, 0);
  font-weight: var(--m3-font-headline-medium-weight, 400);
}
.m3-font-headline-small {
  font-size: var(--m3-font-headline-small-size, 1.5rem);
  line-height: var(--m3-font-headline-small-height, 2rem);
  letter-spacing: var(--m3-font-headline-small-tracking, 0);
  font-weight: var(--m3-font-headline-small-weight, 400);
}
/* Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. */
.m3-font-title-large {
  font-size: var(--m3-font-title-large-size, 1.375rem);
  line-height: var(--m3-font-title-large-height, 1.75rem);
  letter-spacing: var(--m3-font-title-large-tracking, 0);
  font-weight: var(--m3-font-title-large-weight, 400);
}
.m3-font-title-medium {
  font-size: var(--m3-font-title-medium-size, 1rem);
  line-height: var(--m3-font-title-medium-height, 1.5rem);
  letter-spacing: var(--m3-font-title-medium-tracking, 0.009375rem);
  font-weight: var(--m3-font-title-medium-weight, 500);
}
.m3-font-title-small {
  font-size: var(--m3-font-title-small-size, 0.875rem);
  line-height: var(--m3-font-title-small-height, 1.25rem);
  letter-spacing: var(--m3-font-title-small-tracking, 0.00625rem);
  font-weight: var(--m3-font-title-small-weight, 500);
}
/* Label styles are smaller, utilitarian styles, used for things like the text inside components
or for very small text in the content body, such as captions. */
.m3-font-label-large {
  font-size: var(--m3-font-label-large-size, 0.875rem);
  line-height: var(--m3-font-label-large-height, 1.25rem);
  letter-spacing: var(--m3-font-label-large-tracking, 0.00625rem);
  font-weight: var(--m3-font-label-large-weight, 500);
}
.m3-font-label-medium {
  font-size: var(--m3-font-label-medium-size, 0.75rem);
  line-height: var(--m3-font-label-medium-height, 1rem);
  letter-spacing: var(--m3-font-label-medium-tracking, 0.03125rem);
  font-weight: var(--m3-font-label-medium-weight, 500);
}
.m3-font-label-small {
  font-size: var(--m3-font-label-small-size, 0.6875rem);
  line-height: var(--m3-font-label-small-height, 1rem);
  letter-spacing: var(--m3-font-label-small-tracking, 0.03125rem);
  font-weight: var(--m3-font-label-small-weight, 500);
}
/* Body styles are used for longer passages of text in your app. */
.m3-font-body-large {
  font-size: var(--m3-font-body-large-size, 1rem);
  line-height: var(--m3-font-body-large-height, 1.5rem);
  letter-spacing: var(--m3-font-body-large-tracking, 0.03125rem);
  font-weight: var(--m3-font-body-large-weight, 400);
}
.m3-font-body-medium {
  font-size: var(--m3-font-body-medium-size, 0.875rem);
  line-height: var(--m3-font-body-medium-height, 1.25rem);
  letter-spacing: var(--m3-font-body-medium-tracking, 0.015625rem);
  font-weight: var(--m3-font-body-medium-weight, 400);
}
.m3-font-body-small {
  font-size: var(--m3-font-body-small-size, 0.75rem);
  line-height: var(--m3-font-body-small-height, 1rem);
  letter-spacing: var(--m3-font-body-small-tracking, 0.025rem);
  font-weight: var(--m3-font-body-small-weight, 400);
}
/* Fix some browser stuff */
[class*="-m3-container"] {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
[class*="-m3-container"] a,
a[class*="-m3-container"] {
  text-decoration: none;
}
	`)),this.disableMetaThemeColor||(document.head.appendChild(h("meta",{name:"theme-color",content:use(this.light,e=>Ne(e.primary))})),document.head.appendChild(h("meta",{name:"theme-color",media:"(prefers-color-scheme: dark)",content:use(this.dark,e=>Ne(e.primary))})))},h("div",null)},Le=$store({key:""},{ident:"store",backing:"localstorage",autosave:"auto"});async function dt(e){const n=Date.now(),i=Math.trunc(n/36e5)*36e5,l=i/6e4,c=new ArrayBuffer(8);new DataView(c).setInt32(4,l,!1),console.log(Array.from(new Uint8Array(c)));const d=await crypto.subtle.importKey("raw",new TextEncoder().encode(e),{name:"HMAC",hash:"SHA-1"},!1,["sign"]),y=await crypto.subtle.sign("HMAC",d,c),k=new Uint8Array(y).slice(-1)[0]&15;console.log(k),console.log(Array.from(new Uint8Array(y)).map(E=>E.toString(16).padStart(2,"0")).join(""));const x=new DataView(y).getInt32(k,!1)&2147483647;console.log(x.toString(16));const T=x%1e6,L=i+36e5,A=Math.trunc((L-n)/1e3);return console.log(`remaining: ${Math.trunc(A/60)}:${A%60} (${A}s)`),{code:T,remaining:A}}const gt=function(){this.code={code:void 0,remaining:void 0};const e=this;return setInterval(async()=>{Le.key?e.code=await dt(Le.key):e.code={code:void 0,remaining:void 0}},1e3),this.css=`
		padding: 1em;

		.TextField-m3-container {
			width: 100%;
		}
	`,h("div",null,h("p",{class:"m3-font-headline-medium"},"Family Link Code Generator"),h("p",null,"Enter your secret below."),h(ht,{"bind:value":use(Le.key),error:!1,name:"Family Link Secret"}),h("p",null,h("p",null,"Your code:"),h("span",{class:"m3-font-display-medium"},use(this.code,t=>t.code?(""+t.code).padStart(6,"0"):"")),h("p",null,use(this.code,t=>t.remaining?`${Math.trunc(t.remaining/60)}:${(t.remaining%60).toString().padStart(2,"0")} (${t.remaining}s) remaining`:""))))},pt={path:"/",show:gt},bt=new Xe(pt),yt=function(){return this.mount=()=>{bt.render(this.renderRoot)},h("div",{id:"app"},h(mt,{light:{primary:4287450666,onPrimary:4294967295,primaryContainer:4294958026,onPrimaryContainer:4281536768,inversePrimary:4294948495,secondary:4285945928,onSecondary:4294967295,secondaryContainer:4294958026,onSecondaryContainer:4281013770,tertiary:4284768306,onTertiary:4294967295,tertiaryContainer:4293649835,onTertiaryContainer:4280163328,error:4290386458,onError:4294967295,errorContainer:4294957782,onErrorContainer:4282449922,background:4294965494,onBackground:4280424981,surface:4294965494,onSurface:4280424981,surfaceVariant:4294237908,onSurfaceVariant:4283581501,inverseSurface:4281871913,inverseOnSurface:4294962662,outline:4286936171,outlineVariant:4292330169,shadow:4278190080,scrim:4278190080,surfaceDim:4293449679,surfaceBright:4294965494,surfaceContainerLowest:4294967295,surfaceContainerLow:4294963691,surfaceContainer:4294765283,surfaceContainerHigh:4294370781,surfaceContainerHighest:4293976024,surfaceTint:4287450666},dark:{primary:4294948495,onPrimary:4283638273,primaryContainer:4285544212,onPrimaryContainer:4294958026,inversePrimary:4287450666,secondary:4293312171,onSecondary:4282592029,secondaryContainer:4284236082,onSecondaryContainer:4294958026,tertiary:4291741841,onTertiary:4281610504,tertiaryContainer:4283123741,onTertiaryContainer:4293649835,error:4294948011,onError:4285071365,errorContainer:4287823882,onErrorContainer:4294957782,background:4279898637,onBackground:4293976024,surface:4279898637,onSurface:4293976024,surfaceVariant:4283581501,onSurfaceVariant:4292330169,inverseSurface:4293976024,inverseOnSurface:4281871913,outline:4288646532,outlineVariant:4283581501,shadow:4278190080,scrim:4278190080,surfaceDim:4279898637,surfaceBright:4282464050,surfaceContainerLowest:4279503881,surfaceContainerLow:4280424981,surfaceContainer:4280753689,surfaceContainerHigh:4281477155,surfaceContainerHighest:4282200878,surfaceTint:4294948495}}),h("div",{"bind:this":use(this.renderRoot)}))};window.addEventListener("load",()=>{document.getElementById("app").replaceWith(h(yt,null))});
