var ne={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},be={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function te(e){let o=e.r/255,n=e.g/255,a=e.b/255,c=Math.max(o,n,a),d=Math.min(o,n,a),b=c-d,r=0;b!==0&&(c===o?r=((n-a)/b+6)%6:c===n?r=(a-o)/b+2:r=(o-n)/b+4,r*=60);let i=c===0?0:b/c*100,x=c*100;return{h:r,s:i,b:x}}function Te(e){let o=e.h,n=e.s/100,a=e.b/100,c=a*n,d=c*(1-Math.abs(o/60%2-1)),b=a-c,r,i,x;return o<60?(r=c,i=d,x=0):o<120?(r=d,i=c,x=0):o<180?(r=0,i=c,x=d):o<240?(r=0,i=d,x=c):o<300?(r=d,i=0,x=c):(r=c,i=0,x=d),{r:Math.round((r+b)*255),g:Math.round((i+b)*255),b:Math.round((x+b)*255)}}function ce(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function se(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Re(e){let o=ce(e.r/255),n=ce(e.g/255),a=ce(e.b/255),c=.4122214708*o+.5363325363*n+.0514459929*a,d=.2119034982*o+.6806995451*n+.1073969566*a,b=.0883024619*o+.2817188376*n+.6299787005*a,r=Math.cbrt(c),i=Math.cbrt(d),x=Math.cbrt(b);return{L:.2104542553*r+.793617785*i-.0040720468*x,a:1.9779984951*r-2.428592205*i+.4505937099*x,b:.0259040371*r+.7827717662*i-.808675766*x}}function Le(e,o,n){let a=e+.3963377774*o+.2158037573*n,c=e-.1055613458*o-.0638541728*n,d=e-.0894841775*o-1.291485548*n,b=a*a*a,r=c*c*c,i=d*d*d,x=4.0767416621*b-3.3077115913*r+.2309699292*i,m=-1.2684380046*b+2.6097574011*r-.3413193965*i,l=-.0041960863*b-.7034186147*r+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,se(x)))*255),g:Math.round(Math.max(0,Math.min(1,se(m)))*255),b:Math.round(Math.max(0,Math.min(1,se(l)))*255)}}function re(e){let o=Re(e),n=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:n,h:n<1e-4?0:a}}function le(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),a=e.c*Math.sin(o);return Le(e.l,n,a)}function Se(e,o,n){let a=le({l:e,c:o,h:n});if(xe(a))return{l:e,c:o,h:n};let c=0,d=o;for(let b=0;b<20;b++){let r=(c+d)/2;a=le({l:e,c:r,h:n}),xe(a)?c=r:d=r}return{l:e,c,h:n}}function xe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function j(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function de(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var fe=.4;function U(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Te({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,a=e.y*fe,c=e.z*359,d=Se(n,a,c);return le(d)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=te(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=re(e);return{x:n.l,y:Math.min(n.c/fe,1),z:n.h/359}}}function he(e,o){let n=be[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function me(e,o,n,a,c,d=!1){let b;e===0?b={x:a,y:o,z:n}:e===1?b={x:o,y:a,z:n}:b={x:o,y:n,z:a};let r=U(b,c);return d?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var ge=Math.PI/6,He=Math.cos(ge),Ee=Math.sin(ge),Q=!1;function pe(e){Q=e}function R(e,o,n){return{x:n.x+(e.y-e.x)*He*o,y:n.y+e.z*o-(e.x+e.y)*Ee*o}}function Fe(e){let{x:o,y:n,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:a},{x:o,y:n,z:0},{x:o,y:0,z:a},{x:0,y:n,z:a},{x:o,y:n,z:a}]}var X=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Be=128,ye={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ve(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(n,n),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ce(e,o,n,a,c,d,b=!0){let{ctx:r,scale:i,center:x,width:m,height:l}=e;r.save(),r.clearRect(0,0,m,l);let A=Fe(o).map(h=>R(h,i,x));if(De(r,i,x,c),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,Oe(r,A,o,c),r.restore(),b&&_e(r,c,i,x),a>=0){let h=U(n,c),w=Q?{r:255-h.r,g:255-h.g,b:255-h.b}:h,z=R(n,i,x);Ge(r,z,w)}r.restore()}var Ie={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function De(e,o,n,a){let c=R({x:0,y:0,z:0},o,n),d=[R({x:1,y:0,z:0},o,n),R({x:0,y:1,z:0},o,n),R({x:0,y:0,z:1},o,n)],b=Ie[a];e.lineWidth=1.5;for(let r=0;r<d.length;r++)e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(d[r].x,d[r].y),e.strokeStyle=b[r],e.stroke()}function Oe(e,o,n,a){let c=[n.x,n.y,n.z];for(let d=0;d<X.length;d++){let b=X[d],r=c[b.fixedAxis],i=c[b.uAxis],x=c[b.vAxis];if(i<.002&&x<.002)continue;let m=b.quad.map(l=>o[l]);Pe(e,m,b.fixedAxis,r,i,x,a)}}function Pe(e,o,n,a,c,d,b){let r=Be,i=document.createElement("canvas");i.width=r,i.height=r;let x=i.getContext("2d"),m=x.createImageData(r,r),l=m.data;for(let O=0;O<r;O++)for(let I=0;I<r;I++){let q=I/(r-1)*c,N=O/(r-1)*d,K=me(n,q,N,a,b,Q),P=(O*r+I)*4;l[P]=K.r,l[P+1]=K.g,l[P+2]=K.b,l[P+3]=255}x.putImageData(m,0,0);let A=o[0],h=o[1],w=o[2],z=o[3],S=h.x-A.x,E=h.y-A.y,F=z.x-A.x,T=z.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(h.x,h.y),e.lineTo(w.x,w.y),e.lineTo(z.x,z.y),e.closePath(),e.clip();let k=2/r,L=A.x-S*k-F*k,B=A.y-E*k-T*k,H=1+2*k,D=1+2*k;e.transform(S*H/r,E*H/r,F*D/r,T*D/r,L,B),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function _e(e,o,n,a){let c=ne[o],d=Q?[R({x:0,y:1,z:1},n,a),R({x:1,y:0,z:1},n,a),R({x:1,y:1,z:0},n,a)]:[R({x:1,y:0,z:0},n,a),R({x:0,y:1,z:0},n,a),R({x:0,y:0,z:1},n,a)],b=Q?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],i=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(l=>j(U(l,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let x={rgb:[],hsb:[2],oklch:[0]},m=performance.now()/1e3;for(let l=0;l<3;l++){let A=d[l].x+b[l].x,h=d[l].y+b[l].y,w=m*1.8+l*2.1,z=.62+.38*(.5+.5*Math.sin(w)),S=11+Math.round(1.6*(.5+.5*Math.sin(w)));e.globalAlpha=z,e.font=`bold ${S}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let F=x[o].includes(l)?"#888888":i[l];e.fillStyle=F,e.fillText(c[l],A,h)}e.globalAlpha=1,e.restore()}function Ge(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function ke(e,o,n,a){let c=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(c[e],n,a)}function ue(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(n=>{let a=Math.sqrt(n.x*n.x+n.y*n.y);return a>0?{x:n.x/a,y:n.y/a}:{x:0,y:0}})}function Y(e,o,n,a,c){let d=X[e],b=[n.x,n.y,n.z],r=b[d.uAxis],i=b[d.vAxis];if(r<.002||i<.002)return null;let x={x:0,y:0,z:0},m=["x","y","z"];x[m[d.fixedAxis]]=b[d.fixedAxis];let l={...x};l[m[d.uAxis]]=r;let A={...x};A[m[d.vAxis]]=i;let h=R(x,a,c),w=R(l,a,c),z=R(A,a,c),S=w.x-h.x,E=w.y-h.y,F=z.x-h.x,T=z.y-h.y,k=S*T-E*F;if(Math.abs(k)<1e-6)return null;let L=o.x-h.x,B=o.y-h.y,H=(L*T-B*F)/k,D=(B*S-L*E)/k;return H<-.05||H>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,D))}}function Me(e,o,n,a,c){let d=X[e],b=[n.x,n.y,n.z],r=b[d.uAxis],i=b[d.vAxis];if(r<.002||i<.002)return null;let x={x:0,y:0,z:0},m=["x","y","z"];x[m[d.fixedAxis]]=b[d.fixedAxis];let l={...x};l[m[d.uAxis]]=r;let A={...x};A[m[d.vAxis]]=i;let h=R(x,a,c),w=R(l,a,c),z=R(A,a,c),S=w.x-h.x,E=w.y-h.y,F=z.x-h.x,T=z.y-h.y,k=S*T-E*F;if(Math.abs(k)<1e-6)return null;let L=o.x-h.x,B=o.y-h.y,H=(L*T-B*F)/k,D=(B*S-L*E)/k;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,D))}}var Ae=22;function we(e,o,n,a,c,d,b,r,i){let x={...ye};function m(s){let g=e.getBoundingClientRect();return{x:s.clientX-g.left,y:s.clientY-g.top}}function l(s){let g=o(),v=b(),y=r();for(let C=0;C<3;C++){let t=ke(C,g,v,y),u=s.x-t.x,f=s.y-t.y;if(u*u+f*f<=Ae*Ae)return C}return-1}function A(s){let g=o(),v=b(),y=r();for(let C=X.length-1;C>=0;C--){let t=Y(C,s,g,v,y);if(t)return{faceIndex:C,...t}}return null}let h=-1,w={x:0,y:0},z=0;function S(s,g){h=s,w=g,z=o()[["x","y","z"][s]],x.draggingAxisHandle=s,e.style.cursor="grabbing",i()}function E(s){if(h<0)return;let g=s.x-w.x,v=s.y-w.y,C=ue()[h],t=b(),f=(g*C.x+v*C.y)/t,V=Math.max(0,Math.min(1,z+f)),M=o(),p=["x","y","z"],_={...M,[p[h]]:V};n(_);let G=a(),oe=d(),J=oe>=0?X[oe]:null,$={...G};J&&h===J.fixedAxis?$[p[h]]=V:$[p[h]]=Math.min(G[p[h]],V),c($,d()),i()}function F(){h=-1,x.draggingAxisHandle=-1}let T=-1,k=null,L=null,B=!1;function H(s,g,v,y){T=s,x.draggingFace=s,k=null,L=null,B=!1,y&&(B=!0,L={s:g,t:v}),O(s,g,v),e.style.cursor="crosshair",i()}function D(s,g,v){if(T<0)return;let y=o(),C=b(),t=r(),u=Y(T,s,y,C,t),f=T;if(!u&&!v){for(let p=X.length-1;p>=0;p--)if(p!==T&&(u=Y(p,s,y,C,t),u)){f=p;break}}if(!u&&v&&(u=Me(T,s,y,C,t),f=T),!u){i();return}f!==T&&(T=f,x.draggingFace=f,k=null,B=!1,L=null);let{s:V,t:M}=u;if(g&&L){if(B){let p=Math.abs(V-L.s),_=Math.abs(M-L.t),G=.02;(p>G||_>G)&&(k=p>=_?"u":"v",B=!1)}k==="u"?M=L.t:k==="v"&&(V=L.s)}else g||(k=null,B=!1,L=null);O(f,V,M),i()}function O(s,g,v){let y=X[s],C=o(),t=["x","y","z"],u={...a()};u[t[y.uAxis]]=g*C[t[y.uAxis]],u[t[y.vAxis]]=v*C[t[y.vAxis]],u[t[y.fixedAxis]]=C[t[y.fixedAxis]],c(u,s)}function I(){T=-1,x.draggingFace=-1,k=null,B=!1,L=null}function q(s){let g=m(s),v=l(g);if(v>=0){s.preventDefault(),S(v,g);return}let y=A(g);y&&(s.preventDefault(),H(y.faceIndex,y.s,y.t,s.shiftKey))}function N(s){let g=m(s);if(h>=0){s.preventDefault(),E(g);return}if(T>=0){s.preventDefault(),D(g,s.shiftKey,s.altKey);return}let v=l(g),y=A(g),C=v,t=v>=0?-1:y?y.faceIndex:-1;(C!==x.hoveredAxisHandle||t!==x.hoveredFace)&&(x.hoveredAxisHandle=C,x.hoveredFace=t,e.style.cursor=C>=0?"grab":t>=0?"crosshair":"default",i())}function K(s){let g=h>=0||T>=0;F(),I(),g&&(x.hoveredAxisHandle=-1,x.hoveredFace=-1,e.style.cursor="default",i())}function P(s){if(s.touches.length!==1)return;let g=m(s.touches[0]),v=l(g);if(v>=0){s.preventDefault(),S(v,g);return}let y=A(g);y&&(s.preventDefault(),H(y.faceIndex,y.s,y.t,!1))}function ee(s){if(s.touches.length!==1)return;let g=m(s.touches[0]);h>=0?(s.preventDefault(),E(g)):T>=0&&(s.preventDefault(),D(g,!1,!1))}function ae(s){F(),I(),i()}function ie(s){let g=s.shiftKey?.04:.004,v=a(),y=o(),C=ue(),t=0,u=0;switch(s.key){case"ArrowRight":t=1;break;case"ArrowLeft":t=-1;break;case"ArrowUp":u=-1;break;case"ArrowDown":u=1;break;default:return}s.preventDefault();let f={...v},V=["x","y","z"];for(let M=0;M<3;M++){let p=t*C[M].x+u*C[M].y;if(Math.abs(p)>.3){let _=v[V[M]]+g*Math.sign(p);f[V[M]]=Math.max(0,Math.min(y[V[M]],_))}}c(f,d()),i()}e.addEventListener("mousedown",q),window.addEventListener("mousemove",N),window.addEventListener("mouseup",K),e.addEventListener("touchstart",P,{passive:!1}),e.addEventListener("touchmove",ee,{passive:!1}),e.addEventListener("touchend",ae),e.addEventListener("keydown",ie),e.setAttribute("tabindex","0");function Z(){e.removeEventListener("mousedown",q),window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",K),e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",ee),e.removeEventListener("touchend",ae),e.removeEventListener("keydown",ie)}return{state:x,destroy:Z}}var Ve=`.box-picker {\r
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
`;var io=$e,ze=!1;function Ke(){if(ze||typeof document>"u")return;ze=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ve,document.head.appendChild(e)}function $e(e,o={}){let n=o.size??300,a=o.controls??!0,c=o.showInputs??!1,d=o.showModeToggle??!1,b=o.showCorners??!1,r={mode:()=>i,switchMode:t=>B(t),onHexInput:t=>{let u=de(t);u?(l=W(k?{r:255-u.r,g:255-u.g,b:255-u.b}:u,i),m={x:Math.max(m.x,l.x),y:Math.max(m.y,l.y),z:Math.max(m.z,l.z)},v(),s(),I()):s()},onChannelInput:(t,u,f)=>{let V=Math.max(0,Math.min(f,u)),M=["x","y","z"],p=V/f;if(k){let _={...l,[M[t]]:p},G=U(_,i);l=W({r:255-G.r,g:255-G.g,b:255-G.b},i)}else l={...l,[M[t]]:p};p>m[M[t]]&&(m={...m,[M[t]]:p}),v(),s(),I()},getRgbForCopy:()=>U(l,i),onRandom:t=>C(t),onReset:()=>C({r:0,g:0,b:0})},i=o.mode??"rgb",x=o.initialColor?W(o.initialColor,i):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},l={...x},A=0,h=new Set;Ke();let w=document.createElement("div");w.className="box-picker";let z=document.createElement("canvas");z.style.cursor="grab",w.appendChild(z);let S=ve(z,n),E=null,F=document.createElement("div");F.className="box-picker-controls",E=document.createElement("div"),E.className="box-picker-swatch",F.appendChild(E),w.appendChild(F),(c||d||b)&&import("./controls-VBFXR3DH.js").then(t=>{t.createControls(F,r,{showInputs:c,showModeToggle:d,showCorners:b})}).catch(()=>{}),e.appendChild(w);let T=we(z,()=>m,t=>{m=t},()=>l,(t,u)=>{l=t,A=u,v(),s()},()=>A,()=>S.scale,()=>S.center,I),k=!1,L=!0;z.addEventListener("mouseenter",()=>{L=Math.random()<.5,I()}),z.addEventListener("mouseleave",()=>{L=Math.random()<.5,I()}),z.addEventListener("dblclick",()=>{k=!k,pe(k),v(),s(),I()});function B(t){if(t===i)return;let u=U(l,i),f={...l},V={...m};i=t;let M=W(u,i),p={x:1,y:1,z:1};l=M,m=p,D(f,M,V,p,300),s()}let H=null;function D(t,u,f,V,M){H!==null&&cancelAnimationFrame(H);let p=performance.now();function _(G){let oe=G-p,J=Math.min(1,oe/M),$=1-Math.pow(1-J,3);l={x:t.x+(u.x-t.x)*$,y:t.y+(u.y-t.y)*$,z:t.z+(u.z-t.z)*$},m={x:f.x+(V.x-f.x)*$,y:f.y+(V.y-f.y)*$,z:f.z+(V.z-f.z)*$},N(),v(),J<1?H=requestAnimationFrame(_):H=null}H=requestAnimationFrame(_)}let O=!1;function I(){O||(O=!0,requestAnimationFrame(()=>{O=!1,N()}))}let q=!0;(function t(){q&&(I(),requestAnimationFrame(t))})();function N(){Ce(S,m,l,A,i,T.state,L)}function K(t,u,f){return Math.round(t+(u-t)*f)}function P(t,u){let f=u>0?255:0,V=Math.abs(u);return j({r:K(t.r,f,V),g:K(t.g,f,V),b:K(t.b,f,V)})}function ee(t,u){let f=de(u)||{r:128,g:128,b:128},V=P(f,.35),M=P(f,0),p=P(f,-.35);t.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${M}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${p}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,t.style.backgroundColor="transparent"}function ae(t){try{navigator.clipboard.writeText(t).catch(()=>{})}catch{}}function ie(t){t&&(t.style.borderColor="#4ade80",t.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{t.style.borderColor="",t.style.boxShadow=""},500))}function Z(){let t=U(l,i);return k?{r:255-t.r,g:255-t.g,b:255-t.b}:t}function s(){if(!a)return;let t=Z(),u=j(t);E&&ee(E,u);let f=w.querySelector(".box-picker-hex");f&&(f.value=u),g(),w._updateModeButtons&&w._updateModeButtons()}function g(){if(!a)return;let t=ne[i],u=k?W(Z(),i):l,f=he(u,i),V=w.querySelectorAll(".box-picker-channel input"),M=w.querySelectorAll(".box-picker-channel label");for(let p=0;p<V.length;p++)M[p].textContent=t[p],M[p].style.color="",M[p].style.textShadow="none",V[p].value=String(f[p])}function v(){let t=Z(),u={rgb:t,hsb:te(t),oklch:re(t),hex:j(t)};for(let f of h)f(u)}function y(){let t=U(l,i);return{rgb:t,hsb:te(t),oklch:re(t),hex:j(t)}}s(),N();let C=t=>{l=W(t,i),m={x:Math.max(m.x,l.x),y:Math.max(m.y,l.y),z:Math.max(m.z,l.z)};let u=R(l,S.scale,S.center);A=-1;for(let f=X.length-1;f>=0;f--)if(Y(f,u,m,S.scale,S.center)){A=f;break}v(),s(),I()};return{getColor:y,getMode:()=>i,setColor:C,setMode(t){B(t)},on(t,u){h.add(u)},off(t,u){h.delete(u)},destroy(){q=!1,T.destroy(),H!==null&&cancelAnimationFrame(H),e.removeChild(w)}}}export{$e as createBoxColorPicker,io as createColorPicker,pe as setBoxInvert};
