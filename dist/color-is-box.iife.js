var ColorIsBox=(()=>{var he=Object.defineProperty;var Ge=Object.getOwnPropertyDescriptor;var Ne=Object.getOwnPropertyNames;var Xe=Object.prototype.hasOwnProperty;var $e=(e,o)=>{for(var t in o)he(e,t,{get:o[t],enumerable:!0})},Ke=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Ne(o))!Xe.call(e,c)&&c!==t&&he(e,c,{get:()=>o[c],enumerable:!(a=Ge(o,c))||a.enumerable});return e};var Ue=e=>Ke(he({},"__esModule",{value:!0}),e);var uo={};$e(uo,{createBoxColorPicker:()=>Oe,createColorPicker:()=>so,setBoxInvert:()=>ve});var de={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},ue={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function be(e){let o=e.r/255,t=e.g/255,a=e.b/255,c=Math.max(o,t,a),l=Math.min(o,t,a),d=c-l,n=0;d!==0&&(c===o?n=((t-a)/d+6)%6:c===t?n=(a-o)/d+2:n=(o-t)/d+4,n*=60);let f=c===0?0:d/c*100,i=c*100;return{h:n,s:f,b:i}}function We(e){let o=e.h,t=e.s/100,a=e.b/100,c=a*t,l=c*(1-Math.abs(o/60%2-1)),d=a-c,n,f,i;return o<60?(n=c,f=l,i=0):o<120?(n=l,f=c,i=0):o<180?(n=0,f=c,i=l):o<240?(n=0,f=l,i=c):o<300?(n=l,f=0,i=c):(n=c,f=0,i=l),{r:Math.round((n+d)*255),g:Math.round((f+d)*255),b:Math.round((i+d)*255)}}function me(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ge(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function je(e){let o=me(e.r/255),t=me(e.g/255),a=me(e.b/255),c=.4122214708*o+.5363325363*t+.0514459929*a,l=.2119034982*o+.6806995451*t+.1073969566*a,d=.0883024619*o+.2817188376*t+.6299787005*a,n=Math.cbrt(c),f=Math.cbrt(l),i=Math.cbrt(d);return{L:.2104542553*n+.793617785*f-.0040720468*i,a:1.9779984951*n-2.428592205*f+.4505937099*i,b:.0259040371*n+.7827717662*f-.808675766*i}}function qe(e,o,t){let a=e+.3963377774*o+.2158037573*t,c=e-.1055613458*o-.0638541728*t,l=e-.0894841775*o-1.291485548*t,d=a*a*a,n=c*c*c,f=l*l*l,i=4.0767416621*d-3.3077115913*n+.2309699292*f,h=-1.2684380046*d+2.6097574011*n-.3413193965*f,y=-.0041960863*d-.7034186147*n+1.707614701*f;return{r:Math.round(Math.max(0,Math.min(1,ge(i)))*255),g:Math.round(Math.max(0,Math.min(1,ge(h)))*255),b:Math.round(Math.max(0,Math.min(1,ge(y)))*255)}}function xe(e){let o=je(e),t=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:t,h:t<1e-4?0:a}}function pe(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),a=e.c*Math.sin(o);return qe(e.l,t,a)}function Ze(e,o,t){let a=pe({l:e,c:o,h:t});if(we(a))return{l:e,c:o,h:t};let c=0,l=o;for(let d=0;d<20;d++){let n=(c+l)/2;a=pe({l:e,c:n,h:t}),we(a)?c=n:l=n}return{l:e,c,h:t}}function we(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function Y(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ye(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ae=.4;function X(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return We({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,a=e.y*Ae,c=e.z*359,l=Ze(t,a,c);return pe(l)}}function J(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=be(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=xe(e);return{x:t.l,y:Math.min(t.c/Ae,1),z:t.h/359}}}function Le(e,o){let t=ue[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Ve(e,o,t,a,c,l=!1){let d;e===0?d={x:a,y:o,z:t}:e===1?d={x:o,y:a,z:t}:d={x:o,y:t,z:a};let n=X(d,c);return l?{r:255-n.r,g:255-n.g,b:255-n.b}:n}var Te=Math.PI/6,Ye=Math.cos(Te),Qe=Math.sin(Te),re=!1;function ve(e){re=e}function R(e,o,t){return{x:t.x+(e.y-e.x)*Ye*o,y:t.y+e.z*o-(e.x+e.y)*Qe*o}}function Je(e){let{x:o,y:t,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:a},{x:o,y:t,z:0},{x:o,y:0,z:a},{x:0,y:t,z:a},{x:o,y:t,z:a}]}var $=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],eo=128,ze={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Ee(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(t,t),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Re(e,o,t,a,c,l,d=!0){let{ctx:n,scale:f,center:i,width:h,height:y}=e;n.save(),n.clearRect(0,0,h,y);let A=Je(o).map(b=>R(b,f,i));if(to(n,f,i,c),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,no(n,A,o,c),n.restore(),d&&ao(n,c,f,i),a>=0){let b=X(t,c),V=re?{r:255-b.r,g:255-b.g,b:255-b.b}:b,T=R(t,f,i);io(n,T,V)}n.restore()}var oo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function to(e,o,t,a){let c=R({x:0,y:0,z:0},o,t),l=[R({x:1,y:0,z:0},o,t),R({x:0,y:1,z:0},o,t),R({x:0,y:0,z:1},o,t)],d=oo[a];e.lineWidth=1.5;for(let n=0;n<l.length;n++)e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(l[n].x,l[n].y),e.strokeStyle=d[n],e.stroke()}function no(e,o,t,a){let c=[t.x,t.y,t.z];for(let l=0;l<$.length;l++){let d=$[l],n=c[d.fixedAxis],f=c[d.uAxis],i=c[d.vAxis];if(f<.002&&i<.002)continue;let h=d.quad.map(y=>o[y]);ro(e,h,d.fixedAxis,n,f,i,a)}}function ro(e,o,t,a,c,l,d){let n=eo,f=document.createElement("canvas");f.width=n,f.height=n;let i=f.getContext("2d"),h=i.createImageData(n,n),y=h.data;for(let U=0;U<n;U++)for(let G=0;G<n;G++){let _=G/(n-1)*c,Q=U/(n-1)*l,K=Ve(t,_,Q,a,d,re),N=(U*n+G)*4;y[N]=K.r,y[N+1]=K.g,y[N+2]=K.b,y[N+3]=255}i.putImageData(h,0,0);let A=o[0],b=o[1],V=o[2],T=o[3],S=b.x-A.x,E=b.y-A.y,I=T.x-A.x,w=T.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(b.x,b.y),e.lineTo(V.x,V.y),e.lineTo(T.x,T.y),e.closePath(),e.clip();let z=2/n,L=A.x-S*z-I*z,B=A.y-E*z-w*z,O=1+2*z,F=1+2*z;e.transform(S*O/n,E*O/n,I*F/n,w*F/n,L,B),e.imageSmoothingEnabled=!0,e.drawImage(f,0,0),e.restore()}function ao(e,o,t,a){let c=de[o],l=re?[R({x:0,y:1,z:1},t,a),R({x:1,y:0,z:1},t,a),R({x:1,y:1,z:0},t,a)]:[R({x:1,y:0,z:0},t,a),R({x:0,y:1,z:0},t,a),R({x:0,y:0,z:1},t,a)],d=re?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],f=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(y=>Y(X(y,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let i={rgb:[],hsb:[2],oklch:[0]},h=performance.now()/1e3;for(let y=0;y<3;y++){let A=l[y].x+d[y].x,b=l[y].y+d[y].y,V=h*1.8+y*2.1,T=.62+.38*(.5+.5*Math.sin(V)),S=11+Math.round(1.6*(.5+.5*Math.sin(V)));e.globalAlpha=T,e.font=`bold ${S}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let I=i[o].includes(y)?"#888888":f[y];e.fillStyle=I,e.fillText(c[y],A,b)}e.globalAlpha=1,e.restore()}function io(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function He(e,o,t,a){let c=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(c[e],t,a)}function Ce(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(t=>{let a=Math.sqrt(t.x*t.x+t.y*t.y);return a>0?{x:t.x/a,y:t.y/a}:{x:0,y:0}})}function te(e,o,t,a,c){let l=$[e],d=[t.x,t.y,t.z],n=d[l.uAxis],f=d[l.vAxis];if(n<.002||f<.002)return null;let i={x:0,y:0,z:0},h=["x","y","z"];i[h[l.fixedAxis]]=d[l.fixedAxis];let y={...i};y[h[l.uAxis]]=n;let A={...i};A[h[l.vAxis]]=f;let b=R(i,a,c),V=R(y,a,c),T=R(A,a,c),S=V.x-b.x,E=V.y-b.y,I=T.x-b.x,w=T.y-b.y,z=S*w-E*I;if(Math.abs(z)<1e-6)return null;let L=o.x-b.x,B=o.y-b.y,O=(L*w-B*I)/z,F=(B*S-L*E)/z;return O<-.05||O>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,O)),t:Math.max(0,Math.min(1,F))}}function Se(e,o,t,a,c){let l=$[e],d=[t.x,t.y,t.z],n=d[l.uAxis],f=d[l.vAxis];if(n<.002||f<.002)return null;let i={x:0,y:0,z:0},h=["x","y","z"];i[h[l.fixedAxis]]=d[l.fixedAxis];let y={...i};y[h[l.uAxis]]=n;let A={...i};A[h[l.vAxis]]=f;let b=R(i,a,c),V=R(y,a,c),T=R(A,a,c),S=V.x-b.x,E=V.y-b.y,I=T.x-b.x,w=T.y-b.y,z=S*w-E*I;if(Math.abs(z)<1e-6)return null;let L=o.x-b.x,B=o.y-b.y,O=(L*w-B*I)/z,F=(B*S-L*E)/z;return{s:Math.max(0,Math.min(1,O)),t:Math.max(0,Math.min(1,F))}}var Be=22;function Fe(e,o,t,a,c,l,d,n,f){let i={...ze};function h(s){let m=e.getBoundingClientRect();return{x:s.clientX-m.left,y:s.clientY-m.top}}function y(s){let m=o(),M=d(),p=n();for(let C=0;C<3;C++){let v=He(C,m,M,p),r=s.x-v.x,u=s.y-v.y;if(r*r+u*u<=Be*Be)return C}return-1}function A(s){let m=o(),M=d(),p=n();for(let C=$.length-1;C>=0;C--){let v=te(C,s,m,M,p);if(v)return{faceIndex:C,...v}}return null}let b=-1,V={x:0,y:0},T=0;function S(s,m){b=s,V=m,T=o()[["x","y","z"][s]],i.draggingAxisHandle=s,e.style.cursor="grabbing",f()}function E(s){if(b<0)return;let m=s.x-V.x,M=s.y-V.y,C=Ce()[b],v=d(),u=(m*C.x+M*C.y)/v,x=Math.max(0,Math.min(1,T+u)),g=o(),k=["x","y","z"],D={...g,[k[b]]:x};t(D);let H=a(),W=l(),j=W>=0?$[W]:null,q={...H};j&&b===j.fixedAxis?q[k[b]]=x:q[k[b]]=Math.min(H[k[b]],x),c(q,l()),f()}function I(){b=-1,i.draggingAxisHandle=-1}let w=-1,z=null,L=null,B=!1;function O(s,m,M,p){w=s,i.draggingFace=s,z=null,L=null,B=!1,p&&(B=!0,L={s:m,t:M}),U(s,m,M),e.style.cursor="crosshair",f()}function F(s,m,M){if(w<0)return;let p=o(),C=d(),v=n(),r=te(w,s,p,C,v),u=w;if(!r&&!M){for(let k=$.length-1;k>=0;k--)if(k!==w&&(r=te(k,s,p,C,v),r)){u=k;break}}if(!r&&M&&(r=Se(w,s,p,C,v),u=w),!r){f();return}u!==w&&(w=u,i.draggingFace=u,z=null,B=!1,L=null);let{s:x,t:g}=r;if(m&&L){if(B){let k=Math.abs(x-L.s),D=Math.abs(g-L.t),H=.02;(k>H||D>H)&&(z=k>=D?"u":"v",B=!1)}z==="u"?g=L.t:z==="v"&&(x=L.s)}else m||(z=null,B=!1,L=null);U(u,x,g),f()}function U(s,m,M){let p=$[s],C=o(),v=["x","y","z"],r={...a()};r[v[p.uAxis]]=m*C[v[p.uAxis]],r[v[p.vAxis]]=M*C[v[p.vAxis]],r[v[p.fixedAxis]]=C[v[p.fixedAxis]],c(r,s)}function G(){w=-1,i.draggingFace=-1,z=null,B=!1,L=null}function _(s){let m=h(s),M=y(m);if(M>=0){s.preventDefault(),S(M,m);return}let p=A(m);p&&(s.preventDefault(),O(p.faceIndex,p.s,p.t,s.shiftKey))}function Q(s){let m=h(s);if(b>=0){s.preventDefault(),E(m);return}if(w>=0){s.preventDefault(),F(m,s.shiftKey,s.altKey);return}let M=y(m),p=A(m),C=M,v=M>=0?-1:p?p.faceIndex:-1;(C!==i.hoveredAxisHandle||v!==i.hoveredFace)&&(i.hoveredAxisHandle=C,i.hoveredFace=v,e.style.cursor=C>=0?"grab":v>=0?"crosshair":"default",f())}function K(s){let m=b>=0||w>=0;I(),G(),m&&(i.hoveredAxisHandle=-1,i.hoveredFace=-1,e.style.cursor="default",f())}function N(s){if(s.touches.length!==1)return;let m=h(s.touches[0]),M=y(m);if(M>=0){s.preventDefault(),S(M,m);return}let p=A(m);p&&(s.preventDefault(),O(p.faceIndex,p.s,p.t,!1))}function ee(s){if(s.touches.length!==1)return;let m=h(s.touches[0]);b>=0?(s.preventDefault(),E(m)):w>=0&&(s.preventDefault(),F(m,!1,!1))}function ae(s){I(),G(),f()}function ne(s){let m=s.shiftKey?.04:.004,M=a(),p=o(),C=Ce(),v=0,r=0;switch(s.key){case"ArrowRight":v=1;break;case"ArrowLeft":v=-1;break;case"ArrowUp":r=-1;break;case"ArrowDown":r=1;break;default:return}s.preventDefault();let u={...M},x=["x","y","z"];for(let g=0;g<3;g++){let k=v*C[g].x+r*C[g].y;if(Math.abs(k)>.3){let D=M[x[g]]+m*Math.sign(k);u[x[g]]=Math.max(0,Math.min(p[x[g]],D))}}c(u,l()),f()}e.addEventListener("mousedown",_),window.addEventListener("mousemove",Q),window.addEventListener("mouseup",K),e.addEventListener("touchstart",N,{passive:!1}),e.addEventListener("touchmove",ee,{passive:!1}),e.addEventListener("touchend",ae),e.addEventListener("keydown",ne),e.setAttribute("tabindex","0");function ie(){e.removeEventListener("mousedown",_),window.removeEventListener("mousemove",Q),window.removeEventListener("mouseup",K),e.removeEventListener("touchstart",N),e.removeEventListener("touchmove",ee),e.removeEventListener("touchend",ae),e.removeEventListener("keydown",ne)}return{state:i,destroy:ie}}var Ie=`.box-picker {\r
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
.osheet-tb-box:hover .box-corner-left, .box-picker:hover .box-corner-left, .box-corner-left:hover { opacity: 1; }\r
.osheet-tb-box:hover .box-corner-right, .box-picker:hover .box-corner-right, .box-corner-right:hover { opacity: 1; }\r
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
`;var so=Oe,De=!1;function lo(){if(De||typeof document>"u")return;De=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ie,document.head.appendChild(e)}function Oe(e,o={}){let t=o.size??300,a=o.controls??!0,c=o.showInputs??!1,l=o.showModeToggle??!1,d=o.showCorners??!1,n=o.mode??"rgb",f=o.initialColor?J(o.initialColor,n):{x:.7,y:.4,z:.85},i={x:1,y:1,z:1},h={...f},y=0,A=new Set;lo();let b=document.createElement("div");b.className="box-picker";let V=document.createElement("canvas");V.style.cursor="grab",b.appendChild(V);let T=Ee(V,t),S=null,E=null,I=[],w=[];if(a){let r=document.createElement("div");if(r.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",E=document.createElement("input"),E.className="box-picker-hex",E.type="text",E.spellcheck=!1,l){let x=document.createElement("div");x.className="box-picker-mode-toggle";let g=document.createElement("button");g.textContent="RGB";let k=document.createElement("button");k.textContent="HSB";let D=document.createElement("button");if(D.textContent="OKLCH",x.appendChild(D),x.appendChild(g),x.appendChild(k),g.addEventListener("click",()=>O("rgb")),k.addEventListener("click",()=>O("hsb")),D.addEventListener("click",()=>O("oklch")),E.addEventListener("change",()=>{let H=ye(E.value);H?(h=J(L?{r:255-H.r,g:255-H.g,b:255-H.b}:H,n),i={x:Math.max(i.x,h.x),y:Math.max(i.y,h.y),z:Math.max(i.z,h.z)},p(),m(),_()):m()}),E.addEventListener("click",()=>{let H=X(h,n);ne(Y(H)||"#ffffff"),ie(E)}),c){let H=document.createElement("div");H.className="box-picker-channels";for(let P=0;P<3;P++){let ce=document.createElement("div");ce.className="box-picker-channel";let ke=document.createElement("label"),Z=document.createElement("input");Z.type="text",Z.inputMode="numeric",ce.appendChild(ke),ce.appendChild(Z),H.appendChild(ce),I.push(Z),w.push(ke),Z.addEventListener("change",()=>{let oe=ue[n],Me=parseFloat(Z.value);if(isNaN(Me)){m();return}let Pe=Math.max(0,Math.min(oe[P],Me)),se=["x","y","z"],le=Pe/oe[P];if(L){let _e={...h,[se[P]]:le},fe=X(_e,n);h=J({r:255-fe.r,g:255-fe.g,b:255-fe.b},n)}else h={...h,[se[P]]:le};le>i[se[P]]&&(i={...i,[se[P]]:le}),p(),m(),_()}),Z.addEventListener("click",()=>{let oe=X(h,n);ne(`${oe.r}, ${oe.g}, ${oe.b}`),ie(Z)})}r.appendChild(S);let W=document.createElement("div");W.className="box-picker-hexrow";let j=document.createElement("div");j.className="box-picker-hexwrap";let q=document.createElement("label");q.textContent="Hex",j.appendChild(q),j.appendChild(E),W.appendChild(H),W.appendChild(j),r.appendChild(W)}r.appendChild(x)}b.appendChild(r);try{let x=r.querySelector(".box-picker-mode-toggle"),g=()=>{x&&x.offsetWidth>0&&(hexRow.style.width=x.offsetWidth+"px")};g(),requestAnimationFrame(()=>g())}catch{}let u=()=>{rgbBtn.classList.toggle("active",n==="rgb"),hsbBtn.classList.toggle("active",n==="hsb"),oklchBtn.classList.toggle("active",n==="oklch")};u(),b._updateModeButtons=u}e.appendChild(b);let z=Fe(V,()=>i,r=>{i=r},()=>h,(r,u)=>{h=r,y=u,p(),m()},()=>y,()=>T.scale,()=>T.center,_),L=!1,B=!0;V.addEventListener("mouseenter",()=>{B=Math.random()<.5,_()}),V.addEventListener("mouseleave",()=>{B=Math.random()<.5,_()}),V.addEventListener("dblclick",()=>{L=!L,ve(L),p(),m(),_()});function O(r){if(r===n)return;let u=X(h,n),x={...h},g={...i};n=r;let k=J(u,n),D={x:1,y:1,z:1};h=k,i=D,U(x,k,g,D,300),m()}let F=null;function U(r,u,x,g,k){F!==null&&cancelAnimationFrame(F);let D=performance.now();function H(W){let j=W-D,q=Math.min(1,j/k),P=1-Math.pow(1-q,3);h={x:r.x+(u.x-r.x)*P,y:r.y+(u.y-r.y)*P,z:r.z+(u.z-r.z)*P},i={x:x.x+(g.x-x.x)*P,y:x.y+(g.y-x.y)*P,z:x.z+(g.z-x.z)*P},K(),p(),q<1?F=requestAnimationFrame(H):F=null}F=requestAnimationFrame(H)}let G=!1;function _(){G||(G=!0,requestAnimationFrame(()=>{G=!1,K()}))}let Q=!0;(function r(){Q&&(_(),requestAnimationFrame(r))})();function K(){Re(T,i,h,y,n,z.state,B)}function N(r,u,x){return Math.round(r+(u-r)*x)}function ee(r,u){let x=u>0?255:0,g=Math.abs(u);return Y({r:N(r.r,x,g),g:N(r.g,x,g),b:N(r.b,x,g)})}function ae(r,u){let x=ye(u)||{r:128,g:128,b:128},g=ee(x,.35),k=ee(x,0),D=ee(x,-.35);r.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${g}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${k}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${D}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,r.style.backgroundColor="transparent"}function ne(r){try{navigator.clipboard.writeText(r).catch(()=>{})}catch{}}function ie(r){r&&(r.style.borderColor="#4ade80",r.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{r.style.borderColor="",r.style.boxShadow=""},500))}function s(){let r=X(h,n);return L?{r:255-r.r,g:255-r.g,b:255-r.b}:r}function m(){if(!a)return;let r=s(),u=Y(r);S&&ae(S,u),E&&(E.value=u),M(),b._updateModeButtons&&b._updateModeButtons()}function M(){if(!a)return;let r=de[n],u=L?J(s(),n):h,x=Le(u,n);for(let g=0;g<I.length;g++)w[g].textContent=r[g],w[g].style.color="",w[g].style.textShadow="none",I[g].value=String(x[g])}function p(){let r=s(),u={rgb:r,hsb:be(r),oklch:xe(r),hex:Y(r)};for(let x of A)x(u)}function C(){let r=X(h,n);return{rgb:r,hsb:be(r),oklch:xe(r),hex:Y(r)}}m(),K();let v=r=>{h=J(r,n),i={x:Math.max(i.x,h.x),y:Math.max(i.y,h.y),z:Math.max(i.z,h.z)};let u=R(h,T.scale,T.center);y=-1;for(let x=$.length-1;x>=0;x--)if(te(x,u,i,T.scale,T.center)){y=x;break}p(),m(),_()};if(d){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let x=Math.floor(Math.random()*256),g=Math.floor(Math.random()*256),k=Math.floor(Math.random()*256);v({r:x,g,b:k})}),b.appendChild(r);let u=document.createElement("button");u.className="box-corner-btn box-corner-right",u.title="Reset",u.setAttribute("aria-label","Reset"),u.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',u.addEventListener("click",()=>{v({r:0,g:0,b:0})}),b.appendChild(u)}return{getColor:C,getMode:()=>n,setColor:v,setMode(r){O(r)},on(r,u){A.add(u)},off(r,u){A.delete(u)},destroy(){Q=!1,z.destroy(),F!==null&&cancelAnimationFrame(F),e.removeChild(b)}}}return Ue(uo);})();
