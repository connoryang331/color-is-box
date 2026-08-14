var te={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},fe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ne(e){let o=e.r/255,t=e.g/255,r=e.b/255,s=Math.max(o,t,r),d=Math.min(o,t,r),b=s-d,i=0;b!==0&&(s===o?i=((t-r)/b+6)%6:s===t?i=(r-o)/b+2:i=(o-t)/b+4,i*=60);let a=s===0?0:b/s*100,f=s*100;return{h:i,s:a,b:f}}function Se(e){let o=e.h,t=e.s/100,r=e.b/100,s=r*t,d=s*(1-Math.abs(o/60%2-1)),b=r-s,i,a,f;return o<60?(i=s,a=d,f=0):o<120?(i=d,a=s,f=0):o<180?(i=0,a=s,f=d):o<240?(i=0,a=d,f=s):o<300?(i=d,a=0,f=s):(i=s,a=0,f=d),{r:Math.round((i+b)*255),g:Math.round((a+b)*255),b:Math.round((f+b)*255)}}function ce(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function le(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Ee(e){let o=ce(e.r/255),t=ce(e.g/255),r=ce(e.b/255),s=.4122214708*o+.5363325363*t+.0514459929*r,d=.2119034982*o+.6806995451*t+.1073969566*r,b=.0883024619*o+.2817188376*t+.6299787005*r,i=Math.cbrt(s),a=Math.cbrt(d),f=Math.cbrt(b);return{L:.2104542553*i+.793617785*a-.0040720468*f,a:1.9779984951*i-2.428592205*a+.4505937099*f,b:.0259040371*i+.7827717662*a-.808675766*f}}function He(e,o,t){let r=e+.3963377774*o+.2158037573*t,s=e-.1055613458*o-.0638541728*t,d=e-.0894841775*o-1.291485548*t,b=r*r*r,i=s*s*s,a=d*d*d,f=4.0767416621*b-3.3077115913*i+.2309699292*a,m=-1.2684380046*b+2.6097574011*i-.3413193965*a,l=-.0041960863*b-.7034186147*i+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,le(f)))*255),g:Math.round(Math.max(0,Math.min(1,le(m)))*255),b:Math.round(Math.max(0,Math.min(1,le(l)))*255)}}function re(e){let o=Ee(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function de(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return He(e.l,t,r)}function Fe(e,o,t){let r=de({l:e,c:o,h:t});if(xe(r))return{l:e,c:o,h:t};let s=0,d=o;for(let b=0;b<20;b++){let i=(s+d)/2;r=de({l:e,c:i,h:t}),xe(r)?s=i:d=i}return{l:e,c:s,h:t}}function xe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function j(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ue(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var he=.4;function U(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Se({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*he,s=e.z*359,d=Fe(t,r,s);return de(d)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ne(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=re(e);return{x:t.l,y:Math.min(t.c/he,1),z:t.h/359}}}function me(e,o){let t=fe[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function ge(e,o,t,r,s,d=!1){let b;e===0?b={x:r,y:o,z:t}:e===1?b={x:o,y:r,z:t}:b={x:o,y:t,z:r};let i=U(b,s);return d?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var pe=Math.PI/6,Ie=Math.cos(pe),Be=Math.sin(pe),Q=!1;function ye(e){Q=e}function R(e,o,t){return{x:t.x+(e.y-e.x)*Ie*o,y:t.y+e.z*o-(e.x+e.y)*Be*o}}function De(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var X=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Oe=128,ve={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Ce(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function ke(e,o,t,r,s,d,b=!0){let{ctx:i,scale:a,center:f,width:m,height:l}=e;i.save(),i.clearRect(0,0,m,l);let A=De(o).map(h=>R(h,a,f));if(_e(i,a,f,s),i.save(),i.shadowColor="rgba(0,0,0,0.35)",i.shadowBlur=8,i.shadowOffsetX=0,i.shadowOffsetY=2,Ge(i,A,o,s),i.restore(),b&&$e(i,s,a,f),r>=0){let h=U(t,s),w=Q?{r:255-h.r,g:255-h.g,b:255-h.b}:h,z=R(t,a,f);Ke(i,z,w)}i.restore()}var Pe={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function _e(e,o,t,r){let s=R({x:0,y:0,z:0},o,t),d=[R({x:1,y:0,z:0},o,t),R({x:0,y:1,z:0},o,t),R({x:0,y:0,z:1},o,t)],b=Pe[r];e.lineWidth=1.5;for(let i=0;i<d.length;i++)e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(d[i].x,d[i].y),e.strokeStyle=b[i],e.stroke()}function Ge(e,o,t,r){let s=[t.x,t.y,t.z];for(let d=0;d<X.length;d++){let b=X[d],i=s[b.fixedAxis],a=s[b.uAxis],f=s[b.vAxis];if(a<.002&&f<.002)continue;let m=b.quad.map(l=>o[l]);Xe(e,m,b.fixedAxis,i,a,f,r)}}function Xe(e,o,t,r,s,d,b){let i=Oe,a=document.createElement("canvas");a.width=i,a.height=i;let f=a.getContext("2d"),m=f.createImageData(i,i),l=m.data;for(let O=0;O<i;O++)for(let B=0;B<i;B++){let q=B/(i-1)*s,N=O/(i-1)*d,$=ge(t,q,N,r,b,Q),P=(O*i+B)*4;l[P]=$.r,l[P+1]=$.g,l[P+2]=$.b,l[P+3]=255}f.putImageData(m,0,0);let A=o[0],h=o[1],w=o[2],z=o[3],S=h.x-A.x,H=h.y-A.y,F=z.x-A.x,T=z.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(h.x,h.y),e.lineTo(w.x,w.y),e.lineTo(z.x,z.y),e.closePath(),e.clip();let k=2/i,L=A.x-S*k-F*k,I=A.y-H*k-T*k,E=1+2*k,D=1+2*k;e.transform(S*E/i,H*E/i,F*D/i,T*D/i,L,I),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function $e(e,o,t,r){let s=te[o],d=Q?[R({x:0,y:1,z:1},t,r),R({x:1,y:0,z:1},t,r),R({x:1,y:1,z:0},t,r)]:[R({x:1,y:0,z:0},t,r),R({x:0,y:1,z:0},t,r),R({x:0,y:0,z:1},t,r)],b=Q?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],a=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(l=>j(U(l,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let f={rgb:[],hsb:[2],oklch:[0]},m=performance.now()/1e3;for(let l=0;l<3;l++){let A=d[l].x+b[l].x,h=d[l].y+b[l].y,w=m*1.8+l*2.1,z=.62+.38*(.5+.5*Math.sin(w)),S=11+Math.round(1.6*(.5+.5*Math.sin(w)));e.globalAlpha=z,e.font=`bold ${S}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let F=f[o].includes(l)?"#888888":a[l];e.fillStyle=F,e.fillText(s[l],A,h)}e.globalAlpha=1,e.restore()}function Ke(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Me(e,o,t,r){let s=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(s[e],t,r)}function be(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function Y(e,o,t,r,s){let d=X[e],b=[t.x,t.y,t.z],i=b[d.uAxis],a=b[d.vAxis];if(i<.002||a<.002)return null;let f={x:0,y:0,z:0},m=["x","y","z"];f[m[d.fixedAxis]]=b[d.fixedAxis];let l={...f};l[m[d.uAxis]]=i;let A={...f};A[m[d.vAxis]]=a;let h=R(f,r,s),w=R(l,r,s),z=R(A,r,s),S=w.x-h.x,H=w.y-h.y,F=z.x-h.x,T=z.y-h.y,k=S*T-H*F;if(Math.abs(k)<1e-6)return null;let L=o.x-h.x,I=o.y-h.y,E=(L*T-I*F)/k,D=(I*S-L*H)/k;return E<-.05||E>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,E)),t:Math.max(0,Math.min(1,D))}}function Ae(e,o,t,r,s){let d=X[e],b=[t.x,t.y,t.z],i=b[d.uAxis],a=b[d.vAxis];if(i<.002||a<.002)return null;let f={x:0,y:0,z:0},m=["x","y","z"];f[m[d.fixedAxis]]=b[d.fixedAxis];let l={...f};l[m[d.uAxis]]=i;let A={...f};A[m[d.vAxis]]=a;let h=R(f,r,s),w=R(l,r,s),z=R(A,r,s),S=w.x-h.x,H=w.y-h.y,F=z.x-h.x,T=z.y-h.y,k=S*T-H*F;if(Math.abs(k)<1e-6)return null;let L=o.x-h.x,I=o.y-h.y,E=(L*T-I*F)/k,D=(I*S-L*H)/k;return{s:Math.max(0,Math.min(1,E)),t:Math.max(0,Math.min(1,D))}}var we=22;function Ve(e,o,t,r,s,d,b,i,a){let f={...ve};function m(c){let g=e.getBoundingClientRect();return{x:c.clientX-g.left,y:c.clientY-g.top}}function l(c){let g=o(),v=b(),y=i();for(let C=0;C<3;C++){let n=Me(C,g,v,y),u=c.x-n.x,x=c.y-n.y;if(u*u+x*x<=we*we)return C}return-1}function A(c){let g=o(),v=b(),y=i();for(let C=X.length-1;C>=0;C--){let n=Y(C,c,g,v,y);if(n)return{faceIndex:C,...n}}return null}let h=-1,w={x:0,y:0},z=0;function S(c,g){h=c,w=g,z=o()[["x","y","z"][c]],f.draggingAxisHandle=c,e.style.cursor="grabbing",a()}function H(c){if(h<0)return;let g=c.x-w.x,v=c.y-w.y,C=be()[h],n=b(),x=(g*C.x+v*C.y)/n,V=Math.max(0,Math.min(1,z+x)),M=o(),p=["x","y","z"],_={...M,[p[h]]:V};t(_);let G=r(),oe=d(),J=oe>=0?X[oe]:null,K={...G};J&&h===J.fixedAxis?K[p[h]]=V:K[p[h]]=Math.min(G[p[h]],V),s(K,d()),a()}function F(){h=-1,f.draggingAxisHandle=-1}let T=-1,k=null,L=null,I=!1;function E(c,g,v,y){T=c,f.draggingFace=c,k=null,L=null,I=!1,y&&(I=!0,L={s:g,t:v}),O(c,g,v),e.style.cursor="crosshair",a()}function D(c,g,v){if(T<0)return;let y=o(),C=b(),n=i(),u=Y(T,c,y,C,n),x=T;if(!u&&!v){for(let p=X.length-1;p>=0;p--)if(p!==T&&(u=Y(p,c,y,C,n),u)){x=p;break}}if(!u&&v&&(u=Ae(T,c,y,C,n),x=T),!u){a();return}x!==T&&(T=x,f.draggingFace=x,k=null,I=!1,L=null);let{s:V,t:M}=u;if(g&&L){if(I){let p=Math.abs(V-L.s),_=Math.abs(M-L.t),G=.02;(p>G||_>G)&&(k=p>=_?"u":"v",I=!1)}k==="u"?M=L.t:k==="v"&&(V=L.s)}else g||(k=null,I=!1,L=null);O(x,V,M),a()}function O(c,g,v){let y=X[c],C=o(),n=["x","y","z"],u={...r()};u[n[y.uAxis]]=g*C[n[y.uAxis]],u[n[y.vAxis]]=v*C[n[y.vAxis]],u[n[y.fixedAxis]]=C[n[y.fixedAxis]],s(u,c)}function B(){T=-1,f.draggingFace=-1,k=null,I=!1,L=null}function q(c){let g=m(c),v=l(g);if(v>=0){c.preventDefault(),S(v,g);return}let y=A(g);y&&(c.preventDefault(),E(y.faceIndex,y.s,y.t,c.shiftKey))}function N(c){let g=m(c);if(h>=0){c.preventDefault(),H(g);return}if(T>=0){c.preventDefault(),D(g,c.shiftKey,c.altKey);return}let v=l(g),y=A(g),C=v,n=v>=0?-1:y?y.faceIndex:-1;(C!==f.hoveredAxisHandle||n!==f.hoveredFace)&&(f.hoveredAxisHandle=C,f.hoveredFace=n,e.style.cursor=C>=0?"grab":n>=0?"crosshair":"default",a())}function $(c){let g=h>=0||T>=0;F(),B(),g&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",a())}function P(c){if(c.touches.length!==1)return;let g=m(c.touches[0]),v=l(g);if(v>=0){c.preventDefault(),S(v,g);return}let y=A(g);y&&(c.preventDefault(),E(y.faceIndex,y.s,y.t,!1))}function ee(c){if(c.touches.length!==1)return;let g=m(c.touches[0]);h>=0?(c.preventDefault(),H(g)):T>=0&&(c.preventDefault(),D(g,!1,!1))}function ae(c){F(),B(),a()}function se(c){let g=c.shiftKey?.04:.004,v=r(),y=o(),C=be(),n=0,u=0;switch(c.key){case"ArrowRight":n=1;break;case"ArrowLeft":n=-1;break;case"ArrowUp":u=-1;break;case"ArrowDown":u=1;break;default:return}c.preventDefault();let x={...v},V=["x","y","z"];for(let M=0;M<3;M++){let p=n*C[M].x+u*C[M].y;if(Math.abs(p)>.3){let _=v[V[M]]+g*Math.sign(p);x[V[M]]=Math.max(0,Math.min(y[V[M]],_))}}s(x,d()),a()}e.addEventListener("mousedown",q),window.addEventListener("mousemove",N),window.addEventListener("mouseup",$),e.addEventListener("touchstart",P,{passive:!1}),e.addEventListener("touchmove",ee,{passive:!1}),e.addEventListener("touchend",ae),e.addEventListener("keydown",se),e.setAttribute("tabindex","0");function Z(){e.removeEventListener("mousedown",q),window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",$),e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",ee),e.removeEventListener("touchend",ae),e.removeEventListener("keydown",se)}return{state:f,destroy:Z}}var ze=`.box-picker {\r
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
`;var Re=qe,Te=!1;function Ne(){if(Te||typeof document>"u")return;Te=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ze,document.head.appendChild(e)}function qe(e,o={}){let t=o.size??300,r=o.controls??!0,s=o.showInputs??!1,d=o.showModeToggle??!1,b=o.showCorners??!1,i={mode:()=>a,switchMode:n=>I(n),onHexInput:n=>{let u=ue(n);u?(l=W(k?{r:255-u.r,g:255-u.g,b:255-u.b}:u,a),m={x:Math.max(m.x,l.x),y:Math.max(m.y,l.y),z:Math.max(m.z,l.z)},v(),c(),B()):c()},onChannelInput:(n,u,x)=>{let V=Math.max(0,Math.min(x,u)),M=["x","y","z"],p=V/x;if(k){let _={...l,[M[n]]:p},G=U(_,a);l=W({r:255-G.r,g:255-G.g,b:255-G.b},a)}else l={...l,[M[n]]:p};p>m[M[n]]&&(m={...m,[M[n]]:p}),v(),c(),B()},getRgbForCopy:()=>U(l,a),onRandom:n=>C(n),onReset:()=>C({r:0,g:0,b:0})},a=o.mode??"rgb",f=o.initialColor?W(o.initialColor,a):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},l={...f},A=0,h=new Set;Ne();let w=document.createElement("div");w.className="box-picker";let z=document.createElement("canvas");z.style.cursor="grab",w.appendChild(z);let S=Ce(z,t),H=null,F=document.createElement("div");F.className="box-picker-controls",H=document.createElement("div"),H.className="box-picker-swatch",F.appendChild(H),w.appendChild(F),(s||d||b)&&import("./controls-VBFXR3DH.js").then(n=>{n.createControls(F,i,{showInputs:s,showModeToggle:d,showCorners:b})}).catch(()=>{}),e.appendChild(w);let T=Ve(z,()=>m,n=>{m=n},()=>l,(n,u)=>{l=n,A=u,v(),c()},()=>A,()=>S.scale,()=>S.center,B),k=!1,L=!0;z.addEventListener("mouseenter",()=>{L=Math.random()<.5,B()}),z.addEventListener("mouseleave",()=>{L=Math.random()<.5,B()}),z.addEventListener("dblclick",()=>{k=!k,ye(k),v(),c(),B()});function I(n){if(n===a)return;let u=U(l,a),x={...l},V={...m};a=n;let M=W(u,a),p={x:1,y:1,z:1};l=M,m=p,D(x,M,V,p,300),c()}let E=null;function D(n,u,x,V,M){E!==null&&cancelAnimationFrame(E);let p=performance.now();function _(G){let oe=G-p,J=Math.min(1,oe/M),K=1-Math.pow(1-J,3);l={x:n.x+(u.x-n.x)*K,y:n.y+(u.y-n.y)*K,z:n.z+(u.z-n.z)*K},m={x:x.x+(V.x-x.x)*K,y:x.y+(V.y-x.y)*K,z:x.z+(V.z-x.z)*K},N(),v(),J<1?E=requestAnimationFrame(_):E=null}E=requestAnimationFrame(_)}let O=!1;function B(){O||(O=!0,requestAnimationFrame(()=>{O=!1,N()}))}let q=!0;(function n(){q&&(B(),requestAnimationFrame(n))})();function N(){ke(S,m,l,A,a,T.state,L)}function $(n,u,x){return Math.round(n+(u-n)*x)}function P(n,u){let x=u>0?255:0,V=Math.abs(u);return j({r:$(n.r,x,V),g:$(n.g,x,V),b:$(n.b,x,V)})}function ee(n,u){let x=ue(u)||{r:128,g:128,b:128},V=P(x,.35),M=P(x,0),p=P(x,-.35);n.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${M}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${p}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,n.style.backgroundColor="transparent"}function ae(n){try{navigator.clipboard.writeText(n).catch(()=>{})}catch{}}function se(n){n&&(n.style.borderColor="#4ade80",n.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{n.style.borderColor="",n.style.boxShadow=""},500))}function Z(){let n=U(l,a);return k?{r:255-n.r,g:255-n.g,b:255-n.b}:n}function c(){if(!r)return;let n=Z(),u=j(n);H&&ee(H,u);let x=w.querySelector(".box-picker-hex");x&&(x.value=u),g(),w._updateModeButtons&&w._updateModeButtons()}function g(){if(!r)return;let n=te[a],u=k?W(Z(),a):l,x=me(u,a),V=w.querySelectorAll(".box-picker-channel input"),M=w.querySelectorAll(".box-picker-channel label");for(let p=0;p<V.length;p++)M[p].textContent=n[p],M[p].style.color="",M[p].style.textShadow="none",V[p].value=String(x[p])}function v(){let n=Z(),u={rgb:n,hsb:ne(n),oklch:re(n),hex:j(n)};for(let x of h)x(u)}function y(){let n=U(l,a);return{rgb:n,hsb:ne(n),oklch:re(n),hex:j(n)}}c(),N();let C=n=>{l=W(n,a),m={x:Math.max(m.x,l.x),y:Math.max(m.y,l.y),z:Math.max(m.z,l.z)};let u=R(l,S.scale,S.center);A=-1;for(let x=X.length-1;x>=0;x--)if(Y(x,u,m,S.scale,S.center)){A=x;break}v(),c(),B()};return{getColor:y,getMode:()=>a,setColor:C,setMode(n){I(n)},on(n,u){h.add(u)},off(n,u){h.delete(u)},destroy(){q=!1,T.destroy(),E!==null&&cancelAnimationFrame(E),e.removeChild(w)}}}function Le(e){let o=e.match(/^#?([0-9a-f]{6})$/i);if(!o)return{r:255,g:255,b:255};let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}var ie=class extends HTMLElement{holder=null;picker=null;internal=!1;static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10);this.picker=Re(this.holder,{initialColor:Le(this.getAttribute("value")||"#ffffff"),size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",r=>{this.internal||(this.internal=!0,this.setAttribute("value",r.hex),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:r})),this.dispatchEvent(new CustomEvent("color-changed",{detail:r.hex})))});let t=this.getAttribute("mode");t&&this.picker.setMode(t)}attributeChangedCallback(o,t,r){!this.picker||!r||this.internal||(o==="value"?this.picker.setColor(Le(r)):o==="mode"&&this.picker.setMode(r))}get value(){return this.getAttribute("value")||"#ffffff"}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}};customElements.get("color-is-box")||customElements.define("color-is-box",ie);var bo=ie;export{ie as ColorIsBoxElement,bo as default};
