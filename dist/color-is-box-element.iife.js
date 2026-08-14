var ColorIsBoxElement=(()=>{var me=Object.defineProperty;var $e=Object.getOwnPropertyDescriptor;var Xe=Object.getOwnPropertyNames;var Ke=Object.prototype.hasOwnProperty;var Ue=(e,o)=>{for(var t in o)me(e,t,{get:o[t],enumerable:!0})},We=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of Xe(o))!Ke.call(e,s)&&s!==t&&me(e,s,{get:()=>o[s],enumerable:!(a=$e(o,s))||a.enumerable});return e};var je=e=>We(me({},"__esModule",{value:!0}),e);var ho={};Ue(ho,{ColorIsBoxElement:()=>ae,default:()=>fo});var ue={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},be={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function fe(e){let o=e.r/255,t=e.g/255,a=e.b/255,s=Math.max(o,t,a),l=Math.min(o,t,a),d=s-l,n=0;d!==0&&(s===o?n=((t-a)/d+6)%6:s===t?n=(a-o)/d+2:n=(o-t)/d+4,n*=60);let h=s===0?0:d/s*100,i=s*100;return{h:n,s:h,b:i}}function qe(e){let o=e.h,t=e.s/100,a=e.b/100,s=a*t,l=s*(1-Math.abs(o/60%2-1)),d=a-s,n,h,i;return o<60?(n=s,h=l,i=0):o<120?(n=l,h=s,i=0):o<180?(n=0,h=s,i=l):o<240?(n=0,h=l,i=s):o<300?(n=l,h=0,i=s):(n=s,h=0,i=l),{r:Math.round((n+d)*255),g:Math.round((h+d)*255),b:Math.round((i+d)*255)}}function ge(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function pe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Ze(e){let o=ge(e.r/255),t=ge(e.g/255),a=ge(e.b/255),s=.4122214708*o+.5363325363*t+.0514459929*a,l=.2119034982*o+.6806995451*t+.1073969566*a,d=.0883024619*o+.2817188376*t+.6299787005*a,n=Math.cbrt(s),h=Math.cbrt(l),i=Math.cbrt(d);return{L:.2104542553*n+.793617785*h-.0040720468*i,a:1.9779984951*n-2.428592205*h+.4505937099*i,b:.0259040371*n+.7827717662*h-.808675766*i}}function Ye(e,o,t){let a=e+.3963377774*o+.2158037573*t,s=e-.1055613458*o-.0638541728*t,l=e-.0894841775*o-1.291485548*t,d=a*a*a,n=s*s*s,h=l*l*l,i=4.0767416621*d-3.3077115913*n+.2309699292*h,x=-1.2684380046*d+2.6097574011*n-.3413193965*h,y=-.0041960863*d-.7034186147*n+1.707614701*h;return{r:Math.round(Math.max(0,Math.min(1,pe(i)))*255),g:Math.round(Math.max(0,Math.min(1,pe(x)))*255),b:Math.round(Math.max(0,Math.min(1,pe(y)))*255)}}function he(e){let o=Ze(e),t=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:t,h:t<1e-4?0:a}}function ye(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),a=e.c*Math.sin(o);return Ye(e.l,t,a)}function Qe(e,o,t){let a=ye({l:e,c:o,h:t});if(we(a))return{l:e,c:o,h:t};let s=0,l=o;for(let d=0;d<20;d++){let n=(s+l)/2;a=ye({l:e,c:n,h:t}),we(a)?s=n:l=n}return{l:e,c:s,h:t}}function we(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function Y(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ve(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ae=.4;function $(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return qe({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,a=e.y*Ae,s=e.z*359,l=Qe(t,a,s);return ye(l)}}function J(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=fe(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=he(e);return{x:t.l,y:Math.min(t.c/Ae,1),z:t.h/359}}}function Le(e,o){let t=be[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Ee(e,o,t,a,s,l=!1){let d;e===0?d={x:a,y:o,z:t}:e===1?d={x:o,y:a,z:t}:d={x:o,y:t,z:a};let n=$(d,s);return l?{r:255-n.r,g:255-n.g,b:255-n.b}:n}var Te=Math.PI/6,Je=Math.cos(Te),eo=Math.sin(Te),re=!1;function Ve(e){re=e}function R(e,o,t){return{x:t.x+(e.y-e.x)*Je*o,y:t.y+e.z*o-(e.x+e.y)*eo*o}}function oo(e){let{x:o,y:t,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:a},{x:o,y:t,z:0},{x:o,y:0,z:a},{x:0,y:t,z:a},{x:o,y:t,z:a}]}var X=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],to=128,ze={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Re(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(t,t),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function He(e,o,t,a,s,l,d=!0){let{ctx:n,scale:h,center:i,width:x,height:y}=e;n.save(),n.clearRect(0,0,x,y);let A=oo(o).map(b=>R(b,h,i));if(ro(n,h,i,s),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,ao(n,A,o,s),n.restore(),d&&so(n,s,h,i),a>=0){let b=$(t,s),E=re?{r:255-b.r,g:255-b.g,b:255-b.b}:b,T=R(t,h,i);co(n,T,E)}n.restore()}var no={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function ro(e,o,t,a){let s=R({x:0,y:0,z:0},o,t),l=[R({x:1,y:0,z:0},o,t),R({x:0,y:1,z:0},o,t),R({x:0,y:0,z:1},o,t)],d=no[a];e.lineWidth=1.5;for(let n=0;n<l.length;n++)e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(l[n].x,l[n].y),e.strokeStyle=d[n],e.stroke()}function ao(e,o,t,a){let s=[t.x,t.y,t.z];for(let l=0;l<X.length;l++){let d=X[l],n=s[d.fixedAxis],h=s[d.uAxis],i=s[d.vAxis];if(h<.002&&i<.002)continue;let x=d.quad.map(y=>o[y]);io(e,x,d.fixedAxis,n,h,i,a)}}function io(e,o,t,a,s,l,d){let n=to,h=document.createElement("canvas");h.width=n,h.height=n;let i=h.getContext("2d"),x=i.createImageData(n,n),y=x.data;for(let U=0;U<n;U++)for(let G=0;G<n;G++){let _=G/(n-1)*s,Q=U/(n-1)*l,K=Ee(t,_,Q,a,d,re),N=(U*n+G)*4;y[N]=K.r,y[N+1]=K.g,y[N+2]=K.b,y[N+3]=255}i.putImageData(x,0,0);let A=o[0],b=o[1],E=o[2],T=o[3],S=b.x-A.x,z=b.y-A.y,I=T.x-A.x,w=T.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(b.x,b.y),e.lineTo(E.x,E.y),e.lineTo(T.x,T.y),e.closePath(),e.clip();let V=2/n,L=A.x-S*V-I*V,B=A.y-z*V-w*V,O=1+2*V,F=1+2*V;e.transform(S*O/n,z*O/n,I*F/n,w*F/n,L,B),e.imageSmoothingEnabled=!0,e.drawImage(h,0,0),e.restore()}function so(e,o,t,a){let s=ue[o],l=re?[R({x:0,y:1,z:1},t,a),R({x:1,y:0,z:1},t,a),R({x:1,y:1,z:0},t,a)]:[R({x:1,y:0,z:0},t,a),R({x:0,y:1,z:0},t,a),R({x:0,y:0,z:1},t,a)],d=re?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],h=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(y=>Y($(y,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let i={rgb:[],hsb:[2],oklch:[0]},x=performance.now()/1e3;for(let y=0;y<3;y++){let A=l[y].x+d[y].x,b=l[y].y+d[y].y,E=x*1.8+y*2.1,T=.62+.38*(.5+.5*Math.sin(E)),S=11+Math.round(1.6*(.5+.5*Math.sin(E)));e.globalAlpha=T,e.font=`bold ${S}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let I=i[o].includes(y)?"#888888":h[y];e.fillStyle=I,e.fillText(s[y],A,b)}e.globalAlpha=1,e.restore()}function co(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Se(e,o,t,a){let s=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(s[e],t,a)}function Ce(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(t=>{let a=Math.sqrt(t.x*t.x+t.y*t.y);return a>0?{x:t.x/a,y:t.y/a}:{x:0,y:0}})}function te(e,o,t,a,s){let l=X[e],d=[t.x,t.y,t.z],n=d[l.uAxis],h=d[l.vAxis];if(n<.002||h<.002)return null;let i={x:0,y:0,z:0},x=["x","y","z"];i[x[l.fixedAxis]]=d[l.fixedAxis];let y={...i};y[x[l.uAxis]]=n;let A={...i};A[x[l.vAxis]]=h;let b=R(i,a,s),E=R(y,a,s),T=R(A,a,s),S=E.x-b.x,z=E.y-b.y,I=T.x-b.x,w=T.y-b.y,V=S*w-z*I;if(Math.abs(V)<1e-6)return null;let L=o.x-b.x,B=o.y-b.y,O=(L*w-B*I)/V,F=(B*S-L*z)/V;return O<-.05||O>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,O)),t:Math.max(0,Math.min(1,F))}}function Be(e,o,t,a,s){let l=X[e],d=[t.x,t.y,t.z],n=d[l.uAxis],h=d[l.vAxis];if(n<.002||h<.002)return null;let i={x:0,y:0,z:0},x=["x","y","z"];i[x[l.fixedAxis]]=d[l.fixedAxis];let y={...i};y[x[l.uAxis]]=n;let A={...i};A[x[l.vAxis]]=h;let b=R(i,a,s),E=R(y,a,s),T=R(A,a,s),S=E.x-b.x,z=E.y-b.y,I=T.x-b.x,w=T.y-b.y,V=S*w-z*I;if(Math.abs(V)<1e-6)return null;let L=o.x-b.x,B=o.y-b.y,O=(L*w-B*I)/V,F=(B*S-L*z)/V;return{s:Math.max(0,Math.min(1,O)),t:Math.max(0,Math.min(1,F))}}var Fe=22;function Ie(e,o,t,a,s,l,d,n,h){let i={...ze};function x(c){let m=e.getBoundingClientRect();return{x:c.clientX-m.left,y:c.clientY-m.top}}function y(c){let m=o(),M=d(),p=n();for(let C=0;C<3;C++){let v=Se(C,m,M,p),r=c.x-v.x,u=c.y-v.y;if(r*r+u*u<=Fe*Fe)return C}return-1}function A(c){let m=o(),M=d(),p=n();for(let C=X.length-1;C>=0;C--){let v=te(C,c,m,M,p);if(v)return{faceIndex:C,...v}}return null}let b=-1,E={x:0,y:0},T=0;function S(c,m){b=c,E=m,T=o()[["x","y","z"][c]],i.draggingAxisHandle=c,e.style.cursor="grabbing",h()}function z(c){if(b<0)return;let m=c.x-E.x,M=c.y-E.y,C=Ce()[b],v=d(),u=(m*C.x+M*C.y)/v,f=Math.max(0,Math.min(1,T+u)),g=o(),k=["x","y","z"],D={...g,[k[b]]:f};t(D);let H=a(),W=l(),j=W>=0?X[W]:null,q={...H};j&&b===j.fixedAxis?q[k[b]]=f:q[k[b]]=Math.min(H[k[b]],f),s(q,l()),h()}function I(){b=-1,i.draggingAxisHandle=-1}let w=-1,V=null,L=null,B=!1;function O(c,m,M,p){w=c,i.draggingFace=c,V=null,L=null,B=!1,p&&(B=!0,L={s:m,t:M}),U(c,m,M),e.style.cursor="crosshair",h()}function F(c,m,M){if(w<0)return;let p=o(),C=d(),v=n(),r=te(w,c,p,C,v),u=w;if(!r&&!M){for(let k=X.length-1;k>=0;k--)if(k!==w&&(r=te(k,c,p,C,v),r)){u=k;break}}if(!r&&M&&(r=Be(w,c,p,C,v),u=w),!r){h();return}u!==w&&(w=u,i.draggingFace=u,V=null,B=!1,L=null);let{s:f,t:g}=r;if(m&&L){if(B){let k=Math.abs(f-L.s),D=Math.abs(g-L.t),H=.02;(k>H||D>H)&&(V=k>=D?"u":"v",B=!1)}V==="u"?g=L.t:V==="v"&&(f=L.s)}else m||(V=null,B=!1,L=null);U(u,f,g),h()}function U(c,m,M){let p=X[c],C=o(),v=["x","y","z"],r={...a()};r[v[p.uAxis]]=m*C[v[p.uAxis]],r[v[p.vAxis]]=M*C[v[p.vAxis]],r[v[p.fixedAxis]]=C[v[p.fixedAxis]],s(r,c)}function G(){w=-1,i.draggingFace=-1,V=null,B=!1,L=null}function _(c){let m=x(c),M=y(m);if(M>=0){c.preventDefault(),S(M,m);return}let p=A(m);p&&(c.preventDefault(),O(p.faceIndex,p.s,p.t,c.shiftKey))}function Q(c){let m=x(c);if(b>=0){c.preventDefault(),z(m);return}if(w>=0){c.preventDefault(),F(m,c.shiftKey,c.altKey);return}let M=y(m),p=A(m),C=M,v=M>=0?-1:p?p.faceIndex:-1;(C!==i.hoveredAxisHandle||v!==i.hoveredFace)&&(i.hoveredAxisHandle=C,i.hoveredFace=v,e.style.cursor=C>=0?"grab":v>=0?"crosshair":"default",h())}function K(c){let m=b>=0||w>=0;I(),G(),m&&(i.hoveredAxisHandle=-1,i.hoveredFace=-1,e.style.cursor="default",h())}function N(c){if(c.touches.length!==1)return;let m=x(c.touches[0]),M=y(m);if(M>=0){c.preventDefault(),S(M,m);return}let p=A(m);p&&(c.preventDefault(),O(p.faceIndex,p.s,p.t,!1))}function ee(c){if(c.touches.length!==1)return;let m=x(c.touches[0]);b>=0?(c.preventDefault(),z(m)):w>=0&&(c.preventDefault(),F(m,!1,!1))}function ie(c){I(),G(),h()}function ne(c){let m=c.shiftKey?.04:.004,M=a(),p=o(),C=Ce(),v=0,r=0;switch(c.key){case"ArrowRight":v=1;break;case"ArrowLeft":v=-1;break;case"ArrowUp":r=-1;break;case"ArrowDown":r=1;break;default:return}c.preventDefault();let u={...M},f=["x","y","z"];for(let g=0;g<3;g++){let k=v*C[g].x+r*C[g].y;if(Math.abs(k)>.3){let D=M[f[g]]+m*Math.sign(k);u[f[g]]=Math.max(0,Math.min(p[f[g]],D))}}s(u,l()),h()}e.addEventListener("mousedown",_),window.addEventListener("mousemove",Q),window.addEventListener("mouseup",K),e.addEventListener("touchstart",N,{passive:!1}),e.addEventListener("touchmove",ee,{passive:!1}),e.addEventListener("touchend",ie),e.addEventListener("keydown",ne),e.setAttribute("tabindex","0");function se(){e.removeEventListener("mousedown",_),window.removeEventListener("mousemove",Q),window.removeEventListener("mouseup",K),e.removeEventListener("touchstart",N),e.removeEventListener("touchmove",ee),e.removeEventListener("touchend",ie),e.removeEventListener("keydown",ne)}return{state:i,destroy:se}}var De=`.box-picker {\r
  /* vanilla-colorful style theme variables */\r
  --cib-accent: #007AFF;\r
  --cib-accent-hover: #0071EB;\r
  --cib-bg: var(--background-primary, #ffffff);\r
  --cib-surface: var(--background-secondary, #f2f3f5);\r
  --cib-border: var(--background-modifier-border, #d0d7de);\r
  --cib-text: var(--text-normal, #333333);\r
  --cib-muted: var(--text-muted, #666666);\r
\r
  display: inline-flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 10px;\r
  position: relative;\r
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\r
  color: #e0e0e0;\r
}\r
\r
.box-picker canvas {\r
  display: block;\r
  touch-action: none; /* mobile-friendly drag */\r
  border-radius: 8px;\r
  outline: none;\r
}\r
\r
.box-corner-btn {\r
  position: absolute;\r
  bottom: 0;\r
  width: 42px;\r
  height: 42px;\r
  border: none;\r
  background: transparent;\r
  display: block;\r
  cursor: pointer;\r
  padding: 0;\r
  z-index: 5;\r
  border-radius: 8px;\r
  opacity: 0; /* \u9ED8\u8BA4\u4E0E\u80CC\u666F\u540C\u8272\uFF08\u878D\u5165\uFF09\uFF0Chover \u624D\u663E\u793A */\r
  transition: opacity 0.15s, background 0.15s;\r
}\r
.box-corner-btn svg { width: 42px; height: 42px; fill: var(--interactive-accent, #7B8CDE); } /* \u8DDF\u968F Obsidian \u4E3B\u9898\u5F3A\u8C03\u8272 */ /* \u975B\u84DD\u6C34\u6EF4\uFF08\u53C2\u8003\u56FE\u6837\u5F0F\uFF09 */\r
/* \u5F39\u5C42\u6574\u4F53 hover \u65F6\u89D2\u6309\u94AE\u5373\u6D6E\u73B0\uFF08\u65E0\u9700\u7CBE\u786E\u60AC\u505C\u6309\u94AE\u672C\u8EAB\uFF09 */\r
/* \u5404\u81EA\u89D2 hover \u624D\u51FA\u73B0\uFF1Ahover \u53F3\u4E0B\u89D2 \u2192 \u53F3\u4E0B\u6309\u94AE\uFF1Bhover \u5DE6\u4E0B\u89D2 \u2192 \u5DE6\u4E0B\u6309\u94AE\uFF08\u4E0D\u6574\u4F53\u540C\u65F6\u51FA\u73B0\uFF09 */\r
.box-corner-left, .box-picker:hover .box-corner-left, .box-corner-left:hover { opacity: 1; }\r
.box-corner-right, .box-picker:hover .box-corner-right, .box-corner-right:hover { opacity: 1; }\r
.box-corner-btn:hover { opacity: 1; background: var(--background-modifier-hover, rgba(0,0,0,0.07)); }\r
.box-corner-btn:hover svg { fill: var(--interactive-accent-hover, #5A6CC8); }\r
.box-corner-btn, .box-corner-btn:hover, .box-corner-btn:focus, .box-corner-btn:active {\r
  border: none !important;\r
  background: transparent !important;\r
  outline: none !important;\r
  box-shadow: none !important;\r
}\r
.box-corner-left { left: -2px; bottom: -2px; } /* \u8D34\u8FB9\u6846\u8FB9\u7F18\uFF0C\u65E0\u7F1D\u9699 */\r
.box-corner-right { right: -2px; bottom: -2px; }\r
\r
.box-picker-controls {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 10px;\r
  padding-bottom: 12px; /* \u6A21\u5F0F\u6309\u94AE\u4E0E\u5E95\u90E8\u4FDD\u6301\u8FB9\u8DDD */\r
}\r
.box-picker-hexrow {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  width: 100%;\r
}\r
.box-picker-hexwrap {\r
  display: flex;\r
  flex: 1;\r
  min-width: 0;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 2px;\r
}\r
\r
.box-picker-hexwrap label {\r
  font-size: 10px;\r
  text-transform: uppercase;\r
  color: var(--text-faint, #999);\r
}\r
\r
.box-picker-swatch {\r
  width: 64px;\r
  height: 64px;\r
  border: none;\r
  flex-shrink: 0;\r
}\r
\r
.box-picker-hex {\r
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;\r
  font-size: 12px;\r
  background: var(--background-secondary, rgba(0,0,0,0.04));\r
  border: 1px solid var(--background-modifier-border, #d0d7de);\r
  border-radius: 6px;\r
  color: var(--text-normal, #333);\r
  height: 30px;\r
  box-sizing: border-box;\r
  padding: 0 4px;\r
  width: 100%;\r
  text-align: center;\r
  outline: none;\r
  transition: border-color 0.15s, box-shadow 0.15s;\r
}\r
\r
.box-picker-hex:focus {\r
  border-color: #007AFF;\r
  box-shadow: 0 0 0 3px rgba(0,122,255,0.22);\r
}\r
\r
.box-picker-channels {\r
  display: flex;\r
  flex: 2;\r
  min-width: 0;\r
  gap: 6px;\r
  font-size: 12px;\r
  color: var(--text-muted, #666);\r
}\r
\r
.box-picker-channel {\r
  display: flex;\r
  flex: 1;\r
  min-width: 0;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 2px;\r
}\r
\r
.box-picker-channel label {\r
  font-size: 10px;\r
  text-transform: uppercase;\r
  color: var(--text-faint, #999);\r
}\r
\r
.box-picker-channel input {\r
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;\r
  font-size: 12px;\r
  background: var(--background-secondary, rgba(0,0,0,0.04));\r
  border: 1px solid var(--background-modifier-border, #d0d7de);\r
  border-radius: 6px;\r
  color: var(--text-normal, #333);\r
  height: 30px;\r
  box-sizing: border-box;\r
  padding: 0 4px;\r
  width: 100%;\r
  text-align: center;\r
  outline: none;\r
  transition: border-color 0.15s, box-shadow 0.15s;\r
}\r
\r
.box-picker-channel input:focus {\r
  border-color: #007AFF;\r
  box-shadow: 0 0 0 3px rgba(0,122,255,0.22);\r
}\r
\r
\r
\r
.box-picker-mode-toggle {\r
  display: flex;\r
  width: fit-content;\r
  margin: 0 auto;\r
  border-radius: 8px;\r
  overflow: hidden;\r
  border: 1px solid var(--background-modifier-border, #d0d7de);\r
  background: var(--background-secondary, rgba(0,0,0,0.04));\r
}\r
\r
.box-picker-mode-toggle button {\r
  flex: none;\r
  width: 64px;\r
  height: 30px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  box-sizing: border-box;\r
  background: transparent;\r
  border: none;\r
  color: var(--text-muted, #666);\r
  padding: 0;\r
  font-size: 11px;\r
  font-weight: 500;\r
  cursor: pointer;\r
  transition: background 0.15s, color 0.15s;\r
}\r
\r
.box-picker-mode-toggle button.active {\r
  background: #007AFF;\r
  color: #fff;\r
}\r
\r
.box-picker-mode-toggle button:not(:last-child) {\r
  border-right: 1px solid rgba(255,255,255,0.1);\r
}\r
\r
\r
/* ==== Obsidian \u4E3B\u9898\u9002\u914D\uFF08\u8986\u76D6\u6DF1\u8272\u9ED8\u8BA4\uFF1B\u7528 Obsidian \u53D8\u91CF\uFF0C\u81EA\u9002\u5E94\u6D45/\u6DF1\u4E3B\u9898\uFF09 ==== */\r
.box-picker {\r
  /* vanilla-colorful style theme variables */\r
  --cib-accent: #007AFF;\r
  --cib-accent-hover: #0071EB;\r
  --cib-bg: var(--background-primary, #ffffff);\r
  --cib-surface: var(--background-secondary, #f2f3f5);\r
  --cib-border: var(--background-modifier-border, #d0d7de);\r
  --cib-text: var(--text-normal, #333333);\r
  --cib-muted: var(--text-muted, #666666);\r
 color: var(--text-normal, #1a1a1a); }\r
.box-picker-swatch { border-color: var(--background-modifier-border, #d0d7de); }\r
.box-picker-hex {\r
  background: var(--background-primary, #fff);\r
  border-color: var(--background-modifier-border, #d0d7de);\r
  color: var(--text-normal, #1a1a1a);\r
}\r
.box-picker-hex:focus { border-color: var(--interactive-accent, #2b6de8); }\r
.box-picker-channels { color: var(--text-muted, #666); }\r
.box-picker-channel label { color: var(--text-faint, #999); }\r
.box-picker-channel input {\r
  background: var(--background-primary, #fff);\r
  border-color: var(--background-modifier-border, #d0d7de);\r
  color: var(--text-normal, #1a1a1a);\r
}\r
.box-picker-channel input:focus { border-color: var(--interactive-accent, #2b6de8); }\r
/* copy removed */\r
  background: var(--background-secondary, #f2f3f5);\r
  border-color: var(--background-modifier-border, #d0d7de);\r
  color: var(--text-muted, #666);\r
}\r
/* copy hover removed */ { background: var(--background-modifier-hover, #e8e8e8); color: var(--text-normal, #1a1a1a); }\r
.box-picker-mode-toggle { border-color: var(--background-modifier-border, #d0d7de); }\r
.box-picker-mode-toggle button { background: var(--background-secondary, #f2f3f5); color: var(--text-muted, #666); }\r
.box-picker-mode-toggle button:hover { color: var(--text-normal, #1a1a1a); }\r
.box-picker-mode-toggle button.active { background: var(--interactive-accent, #2b6de8); color: #fff; }\r
.box-picker-mode-toggle button:not(:last-child) { border-right-color: var(--background-modifier-border, #d0d7de); }\r
\r
/* \u901A\u9053\u6570\u503C\u5F3A\u5236\u53EF\u8BFB\uFF08!important \u9632 Obsidian \u5168\u5C40 input \u6837\u5F0F\u5E72\u6270\uFF09 */\r
.box-picker-channel input {\r
  color: var(--text-normal, #1a1a1a) !important;\r
  background: var(--background-primary, #fff) !important;\r
  border-color: var(--background-modifier-border, #d0d7de) !important;\r
  font-size: 13px !important;\r
  opacity: 1 !important;\r
}\r
.box-picker-channel label { color: var(--text-muted, #666) !important; }\r
.box-picker-hexwrap label { color: var(--text-muted, #666) !important; }\r
`;var Pe=bo,Oe=!1;function uo(){if(Oe||typeof document>"u")return;Oe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=De,document.head.appendChild(e)}function bo(e,o={}){let t=o.size??300,a=o.controls??!0,s=o.showInputs??!1,l=o.showModeToggle??!1,d=o.showCorners??!1,n=o.mode??"rgb",h=o.initialColor?J(o.initialColor,n):{x:.7,y:.4,z:.85},i={x:1,y:1,z:1},x={...h},y=0,A=new Set;uo();let b=document.createElement("div");b.className="box-picker";let E=document.createElement("canvas");E.style.cursor="grab",b.appendChild(E);let T=Re(E,t),S=null,z=null,I=[],w=[];if(a){let r=document.createElement("div");if(r.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",z=document.createElement("input"),z.className="box-picker-hex",z.type="text",z.spellcheck=!1,l){let f=document.createElement("div");f.className="box-picker-mode-toggle";let g=document.createElement("button");g.textContent="RGB";let k=document.createElement("button");k.textContent="HSB";let D=document.createElement("button");if(D.textContent="OKLCH",f.appendChild(D),f.appendChild(g),f.appendChild(k),g.addEventListener("click",()=>O("rgb")),k.addEventListener("click",()=>O("hsb")),D.addEventListener("click",()=>O("oklch")),z.addEventListener("change",()=>{let H=ve(z.value);H?(x=J(L?{r:255-H.r,g:255-H.g,b:255-H.b}:H,n),i={x:Math.max(i.x,x.x),y:Math.max(i.y,x.y),z:Math.max(i.z,x.z)},p(),m(),_()):m()}),z.addEventListener("click",()=>{let H=$(x,n);ne(Y(H)||"#ffffff"),se(z)}),s){let H=document.createElement("div");H.className="box-picker-channels";for(let P=0;P<3;P++){let ce=document.createElement("div");ce.className="box-picker-channel";let ke=document.createElement("label"),Z=document.createElement("input");Z.type="text",Z.inputMode="numeric",ce.appendChild(ke),ce.appendChild(Z),H.appendChild(ce),I.push(Z),w.push(ke),Z.addEventListener("change",()=>{let oe=be[n],Me=parseFloat(Z.value);if(isNaN(Me)){m();return}let Ge=Math.max(0,Math.min(oe[P],Me)),le=["x","y","z"],de=Ge/oe[P];if(L){let Ne={...x,[le[P]]:de},xe=$(Ne,n);x=J({r:255-xe.r,g:255-xe.g,b:255-xe.b},n)}else x={...x,[le[P]]:de};de>i[le[P]]&&(i={...i,[le[P]]:de}),p(),m(),_()}),Z.addEventListener("click",()=>{let oe=$(x,n);ne(`${oe.r}, ${oe.g}, ${oe.b}`),se(Z)})}r.appendChild(S);let W=document.createElement("div");W.className="box-picker-hexrow";let j=document.createElement("div");j.className="box-picker-hexwrap";let q=document.createElement("label");q.textContent="Hex",j.appendChild(q),j.appendChild(z),W.appendChild(H),W.appendChild(j),r.appendChild(W)}r.appendChild(f)}b.appendChild(r);try{let f=r.querySelector(".box-picker-mode-toggle"),g=()=>{f&&f.offsetWidth>0&&(hexRow.style.width=f.offsetWidth+"px")};g(),requestAnimationFrame(()=>g())}catch{}let u=()=>{rgbBtn.classList.toggle("active",n==="rgb"),hsbBtn.classList.toggle("active",n==="hsb"),oklchBtn.classList.toggle("active",n==="oklch")};u(),b._updateModeButtons=u}e.appendChild(b);let V=Ie(E,()=>i,r=>{i=r},()=>x,(r,u)=>{x=r,y=u,p(),m()},()=>y,()=>T.scale,()=>T.center,_),L=!1,B=!0;E.addEventListener("mouseenter",()=>{B=Math.random()<.5,_()}),E.addEventListener("mouseleave",()=>{B=Math.random()<.5,_()}),E.addEventListener("dblclick",()=>{L=!L,Ve(L),p(),m(),_()});function O(r){if(r===n)return;let u=$(x,n),f={...x},g={...i};n=r;let k=J(u,n),D={x:1,y:1,z:1};x=k,i=D,U(f,k,g,D,300),m()}let F=null;function U(r,u,f,g,k){F!==null&&cancelAnimationFrame(F);let D=performance.now();function H(W){let j=W-D,q=Math.min(1,j/k),P=1-Math.pow(1-q,3);x={x:r.x+(u.x-r.x)*P,y:r.y+(u.y-r.y)*P,z:r.z+(u.z-r.z)*P},i={x:f.x+(g.x-f.x)*P,y:f.y+(g.y-f.y)*P,z:f.z+(g.z-f.z)*P},K(),p(),q<1?F=requestAnimationFrame(H):F=null}F=requestAnimationFrame(H)}let G=!1;function _(){G||(G=!0,requestAnimationFrame(()=>{G=!1,K()}))}let Q=!0;(function r(){Q&&(_(),requestAnimationFrame(r))})();function K(){He(T,i,x,y,n,V.state,B)}function N(r,u,f){return Math.round(r+(u-r)*f)}function ee(r,u){let f=u>0?255:0,g=Math.abs(u);return Y({r:N(r.r,f,g),g:N(r.g,f,g),b:N(r.b,f,g)})}function ie(r,u){let f=ve(u)||{r:128,g:128,b:128},g=ee(f,.35),k=ee(f,0),D=ee(f,-.35);r.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${g}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${k}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${D}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,r.style.backgroundColor="transparent"}function ne(r){try{navigator.clipboard.writeText(r).catch(()=>{})}catch{}}function se(r){r&&(r.style.borderColor="#4ade80",r.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{r.style.borderColor="",r.style.boxShadow=""},500))}function c(){let r=$(x,n);return L?{r:255-r.r,g:255-r.g,b:255-r.b}:r}function m(){if(!a)return;let r=c(),u=Y(r);S&&ie(S,u),z&&(z.value=u),M(),b._updateModeButtons&&b._updateModeButtons()}function M(){if(!a)return;let r=ue[n],u=L?J(c(),n):x,f=Le(u,n);for(let g=0;g<I.length;g++)w[g].textContent=r[g],w[g].style.color="",w[g].style.textShadow="none",I[g].value=String(f[g])}function p(){let r=c(),u={rgb:r,hsb:fe(r),oklch:he(r),hex:Y(r)};for(let f of A)f(u)}function C(){let r=$(x,n);return{rgb:r,hsb:fe(r),oklch:he(r),hex:Y(r)}}m(),K();let v=r=>{x=J(r,n),i={x:Math.max(i.x,x.x),y:Math.max(i.y,x.y),z:Math.max(i.z,x.z)};let u=R(x,T.scale,T.center);y=-1;for(let f=X.length-1;f>=0;f--)if(te(f,u,i,T.scale,T.center)){y=f;break}p(),m(),_()};if(d){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let f=Math.floor(Math.random()*256),g=Math.floor(Math.random()*256),k=Math.floor(Math.random()*256);v({r:f,g,b:k})}),b.appendChild(r);let u=document.createElement("button");u.className="box-corner-btn box-corner-right",u.title="Reset",u.setAttribute("aria-label","Reset"),u.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',u.addEventListener("click",()=>{v({r:0,g:0,b:0})}),b.appendChild(u)}return{getColor:C,getMode:()=>n,setColor:v,setMode(r){O(r)},on(r,u){A.add(u)},off(r,u){A.delete(u)},destroy(){Q=!1,V.destroy(),F!==null&&cancelAnimationFrame(F),e.removeChild(b)}}}function _e(e){let o=e.match(/^#?([0-9a-f]{6})$/i);if(!o)return{r:255,g:255,b:255};let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}var ae=class extends HTMLElement{holder=null;picker=null;internal=!1;static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10);this.picker=Pe(this.holder,{initialColor:_e(this.getAttribute("value")||"#ffffff"),size:o,controls:!0,showInputs:!0,showModeToggle:!0,showCorners:!0}),this.picker.on("change",a=>{this.internal||(this.internal=!0,this.setAttribute("value",a.hex),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:a})),this.dispatchEvent(new CustomEvent("color-changed",{detail:a.hex})))});let t=this.getAttribute("mode");t&&this.picker.setMode(t)}attributeChangedCallback(o,t,a){!this.picker||!a||this.internal||(o==="value"?this.picker.setColor(_e(a)):o==="mode"&&this.picker.setMode(a))}get value(){return this.getAttribute("value")||"#ffffff"}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}};customElements.get("color-is-box")||customElements.define("color-is-box",ae);var fo=ae;return je(ho);})();
