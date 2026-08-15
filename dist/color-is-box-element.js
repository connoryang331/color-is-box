var ce={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},pe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Q(e){let o=e.r/255,t=e.g/255,r=e.b/255,i=Math.max(o,t,r),c=Math.min(o,t,r),d=i-c,n=0;d!==0&&(i===o?n=((t-r)/d+6)%6:i===t?n=(r-o)/d+2:n=(o-t)/d+4,n*=60);let a=i===0?0:d/i*100,l=i*100;return{h:n,s:a,b:l}}function he(e){let o=e.h,t=e.s/100,r=e.b/100,i=r*t,c=i*(1-Math.abs(o/60%2-1)),d=r-i,n,a,l;return o<60?(n=i,a=c,l=0):o<120?(n=c,a=i,l=0):o<180?(n=0,a=i,l=c):o<240?(n=0,a=c,l=i):o<300?(n=c,a=0,l=i):(n=i,a=0,l=c),{r:Math.round((n+d)*255),g:Math.round((a+d)*255),b:Math.round((l+d)*255)}}function ue(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function be(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Be(e){let o=ue(e.r/255),t=ue(e.g/255),r=ue(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*r,c=.2119034982*o+.6806995451*t+.1073969566*r,d=.0883024619*o+.2817188376*t+.6299787005*r,n=Math.cbrt(i),a=Math.cbrt(c),l=Math.cbrt(d);return{L:.2104542553*n+.793617785*a-.0040720468*l,a:1.9779984951*n-2.428592205*a+.4505937099*l,b:.0259040371*n+.7827717662*a-.808675766*l}}function Ie(e,o,t){let r=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,d=r*r*r,n=i*i*i,a=c*c*c,l=4.0767416621*d-3.3077115913*n+.2309699292*a,f=-1.2684380046*d+2.6097574011*n-.3413193965*a,u=-.0041960863*d-.7034186147*n+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,be(l)))*255),g:Math.round(Math.max(0,Math.min(1,be(f)))*255),b:Math.round(Math.max(0,Math.min(1,be(u)))*255)}}function ee(e){let o=Be(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function re(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return Ie(e.l,t,r)}function De(e,o,t){let r=re({l:e,c:o,h:t});if(ye(r))return{l:e,c:o,h:t};let i=0,c=o;for(let d=0;d<20;d++){let n=(i+c)/2;r=re({l:e,c:n,h:t}),ye(r)?i=n:c=n}return{l:e,c:i,h:t}}function ye(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function K(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function oe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ve=.4;function U(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return he({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*ve,i=e.z*359,c=De(t,r,i);return re(c)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=Q(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=ee(e);return{x:t.l,y:Math.min(t.c/ve,1),z:t.h/359}}}function Ce(e,o){let t=pe[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Me(e,o,t,r,i,c=!1){let d;e===0?d={x:r,y:o,z:t}:e===1?d={x:o,y:r,z:t}:d={x:o,y:t,z:r};let n=U(d,i);return c?{r:255-n.r,g:255-n.g,b:255-n.b}:n}var ke=Math.PI/6,Oe=Math.cos(ke),Pe=Math.sin(ke),ne=!1;function Ae(e){ne=e}function L(e,o,t){return{x:t.x+(e.y-e.x)*Oe*o,y:t.y+e.z*o-(e.x+e.y)*Pe*o}}function Ge(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var _=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],_e=64,we={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Te(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ve(e,o,t,r,i,c,d=!0){let{ctx:n,scale:a,center:l,width:f,height:u}=e;n.save(),n.clearRect(0,0,f,u);let A=Ge(o).map(m=>L(m,a,l));if(Xe(n,a,l,i),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,Ke(n,A,o,i),n.restore(),d&&Ne(n,i,a,l),r>=0){let m=U(t,i),w=ne?{r:255-m.r,g:255-m.g,b:255-m.b}:m,z=L(t,a,l);qe(n,z,w)}n.restore()}var $e={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Xe(e,o,t,r){let i=L({x:0,y:0,z:0},o,t),c=[L({x:1,y:0,z:0},o,t),L({x:0,y:1,z:0},o,t),L({x:0,y:0,z:1},o,t)],d=$e[r];e.lineWidth=1.5;for(let n=0;n<c.length;n++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(c[n].x,c[n].y),e.strokeStyle=d[n],e.stroke()}function Ke(e,o,t,r){let i=[t.x,t.y,t.z];for(let c=0;c<_.length;c++){let d=_[c],n=i[d.fixedAxis],a=i[d.uAxis],l=i[d.vAxis];if(a<.002&&l<.002)continue;let f=d.quad.map(u=>o[u]);Ue(e,f,d.fixedAxis,n,a,l,r)}}function Ue(e,o,t,r,i,c,d){let n=_e,a=document.createElement("canvas");a.width=n,a.height=n;let l=a.getContext("2d"),f=l.createImageData(n,n),u=f.data;for(let P=0;P<n;P++)for(let D=0;D<n;D++){let N=D/(n-1)*i,j=P/(n-1)*c,$=Me(t,N,j,r,d,ne),G=(P*n+D)*4;u[G]=$.r,u[G+1]=$.g,u[G+2]=$.b,u[G+3]=255}l.putImageData(f,0,0);let A=o[0],m=o[1],w=o[2],z=o[3],E=m.x-A.x,F=m.y-A.y,B=z.x-A.x,R=z.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(m.x,m.y),e.lineTo(w.x,w.y),e.lineTo(z.x,z.y),e.closePath(),e.clip();let v=2/n,S=A.x-E*v-B*v,I=A.y-F*v-R*v,H=1+2*v,O=1+2*v;e.transform(E*H/n,F*H/n,B*O/n,R*O/n,S,I),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function Ne(e,o,t,r){let i=ce[o],c=ne?[L({x:0,y:1,z:1},t,r),L({x:1,y:0,z:1},t,r),L({x:1,y:1,z:0},t,r)]:[L({x:1,y:0,z:0},t,r),L({x:0,y:1,z:0},t,r),L({x:0,y:0,z:1},t,r)],d=ne?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],a=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(u=>K(U(u,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let l={rgb:[],hsb:[2],oklch:[0]},f=performance.now()/1e3;for(let u=0;u<3;u++){let A=c[u].x+d[u].x,m=c[u].y+d[u].y,w=f*1.8+u*2.1,z=.62+.38*(.5+.5*Math.sin(w)),E=11+Math.round(1.6*(.5+.5*Math.sin(w)));e.globalAlpha=z,e.font=`bold ${E}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let B=l[o].includes(u)?"#888888":a[u];e.fillStyle=B,e.fillText(i[u],A,m)}e.globalAlpha=1,e.restore()}function qe(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function ze(e,o,t,r){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return L(i[e],t,r)}function fe(){let e={x:0,y:0};return[L({x:1,y:0,z:0},1,e),L({x:0,y:1,z:0},1,e),L({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function te(e,o,t,r,i){let c=_[e],d=[t.x,t.y,t.z],n=d[c.uAxis],a=d[c.vAxis];if(n<.002||a<.002)return null;let l={x:0,y:0,z:0},f=["x","y","z"];l[f[c.fixedAxis]]=d[c.fixedAxis];let u={...l};u[f[c.uAxis]]=n;let A={...l};A[f[c.vAxis]]=a;let m=L(l,r,i),w=L(u,r,i),z=L(A,r,i),E=w.x-m.x,F=w.y-m.y,B=z.x-m.x,R=z.y-m.y,v=E*R-F*B;if(Math.abs(v)<1e-6)return null;let S=o.x-m.x,I=o.y-m.y,H=(S*R-I*B)/v,O=(I*E-S*F)/v;return H<-.05||H>1.05||O<-.05||O>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}function Re(e,o,t,r,i){let c=_[e],d=[t.x,t.y,t.z],n=d[c.uAxis],a=d[c.vAxis];if(n<.002||a<.002)return null;let l={x:0,y:0,z:0},f=["x","y","z"];l[f[c.fixedAxis]]=d[c.fixedAxis];let u={...l};u[f[c.uAxis]]=n;let A={...l};A[f[c.vAxis]]=a;let m=L(l,r,i),w=L(u,r,i),z=L(A,r,i),E=w.x-m.x,F=w.y-m.y,B=z.x-m.x,R=z.y-m.y,v=E*R-F*B;if(Math.abs(v)<1e-6)return null;let S=o.x-m.x,I=o.y-m.y,H=(S*R-I*B)/v,O=(I*E-S*F)/v;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}var Le=22;function Se(e,o,t,r,i,c,d,n,a){let l={...we};function f(b){let x=e.getBoundingClientRect();return{x:b.clientX-x.left,y:b.clientY-x.top}}function u(b){let x=o(),T=d(),p=n();for(let k=0;k<3;k++){let C=ze(k,x,T,p),s=b.x-C.x,h=b.y-C.y;if(s*s+h*h<=Le*Le)return k}return-1}function A(b){let x=o(),T=d(),p=n();for(let k=_.length-1;k>=0;k--){let C=te(k,b,x,T,p);if(C)return{faceIndex:k,...C}}return null}let m=-1,w={x:0,y:0},z=0;function E(b,x){m=b,w=x,z=o()[["x","y","z"][b]],l.draggingAxisHandle=b,e.style.cursor="grabbing",a()}function F(b){if(m<0)return;let x=b.x-w.x,T=b.y-w.y,k=fe()[m],C=d(),h=(x*k.x+T*k.y)/C,g=Math.max(0,Math.min(1,z+h)),M=o(),y=["x","y","z"],V={...M,[y[m]]:g};t(V);let X=r(),q=c(),ae=q>=0?_[q]:null,Z={...X};ae&&m===ae.fixedAxis?Z[y[m]]=g:Z[y[m]]=Math.min(X[y[m]],g),i(Z,c()),a()}function B(){m=-1,l.draggingAxisHandle=-1}let R=-1,v=null,S=null,I=!1;function H(b,x,T,p){R=b,l.draggingFace=b,v=null,S=null,I=!1,p&&(I=!0,S={s:x,t:T}),P(b,x,T),e.style.cursor="crosshair",a()}function O(b,x,T){if(R<0)return;let p=o(),k=d(),C=n(),s=te(R,b,p,k,C),h=R;if(!s&&!T){for(let y=_.length-1;y>=0;y--)if(y!==R&&(s=te(y,b,p,k,C),s)){h=y;break}}if(!s&&T&&(s=Re(R,b,p,k,C),h=R),!s){a();return}h!==R&&(R=h,l.draggingFace=h,v=null,I=!1,S=null);let{s:g,t:M}=s;if(x&&S){if(I){let y=Math.abs(g-S.s),V=Math.abs(M-S.t),X=.02;(y>X||V>X)&&(v=y>=V?"u":"v",I=!1)}v==="u"?M=S.t:v==="v"&&(g=S.s)}else x||(v=null,I=!1,S=null);P(h,g,M),a()}function P(b,x,T){let p=_[b],k=o(),C=["x","y","z"],s={...r()};s[C[p.uAxis]]=x*k[C[p.uAxis]],s[C[p.vAxis]]=T*k[C[p.vAxis]],s[C[p.fixedAxis]]=k[C[p.fixedAxis]],i(s,b)}function D(){R=-1,l.draggingFace=-1,v=null,I=!1,S=null}function N(b){let x=f(b),T=u(x);if(T>=0){b.preventDefault(),E(T,x);return}let p=A(x);p&&(b.preventDefault(),H(p.faceIndex,p.s,p.t,b.shiftKey))}function j(b){let x=f(b);if(m>=0){b.preventDefault(),F(x);return}if(R>=0){b.preventDefault(),O(x,b.shiftKey,b.altKey);return}let T=u(x),p=A(x),k=T,C=T>=0?-1:p?p.faceIndex:-1;(k!==l.hoveredAxisHandle||C!==l.hoveredFace)&&(l.hoveredAxisHandle=k,l.hoveredFace=C,e.style.cursor=k>=0?"grab":C>=0?"crosshair":"default",a())}function $(b){let x=m>=0||R>=0;B(),D(),x&&(l.hoveredAxisHandle=-1,l.hoveredFace=-1,e.style.cursor="default",a())}function G(b){if(b.touches.length!==1)return;let x=f(b.touches[0]),T=u(x);if(T>=0){b.preventDefault(),E(T,x);return}let p=A(x);p&&(b.preventDefault(),H(p.faceIndex,p.s,p.t,!1))}function Y(b){if(b.touches.length!==1)return;let x=f(b.touches[0]);m>=0?(b.preventDefault(),F(x)):R>=0&&(b.preventDefault(),O(x,!1,!1))}function ie(b){B(),D(),a()}function de(b){let x=b.shiftKey?.04:.004,T=r(),p=o(),k=fe(),C=0,s=0;switch(b.key){case"ArrowRight":C=1;break;case"ArrowLeft":C=-1;break;case"ArrowUp":s=-1;break;case"ArrowDown":s=1;break;default:return}b.preventDefault();let h={...T},g=["x","y","z"];for(let M=0;M<3;M++){let y=C*k[M].x+s*k[M].y;if(Math.abs(y)>.3){let V=T[g[M]]+x*Math.sign(y);h[g[M]]=Math.max(0,Math.min(p[g[M]],V))}}i(h,c()),a()}e.addEventListener("mousedown",N),window.addEventListener("mousemove",j),window.addEventListener("mouseup",$),e.addEventListener("touchstart",G,{passive:!1}),e.addEventListener("touchmove",Y,{passive:!1}),e.addEventListener("touchend",ie),e.addEventListener("keydown",de),e.setAttribute("tabindex","0");function me(){e.removeEventListener("mousedown",N),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",$),e.removeEventListener("touchstart",G),e.removeEventListener("touchmove",Y),e.removeEventListener("touchend",ie),e.removeEventListener("keydown",de)}return{state:l,destroy:me}}var Ee=`.box-picker {\r
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
`;var Fe=Ye,He=!1;function We(){if(He||typeof document>"u")return;He=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ee,document.head.appendChild(e)}function Ye(e,o={}){let t=o.size??300,r=o.controls??!0,i=o.showInputs??!1,c=o.showModeToggle??!1,d=o.showCorners??!1,n={mode:()=>a,switchMode:s=>I(s),onHexInput:s=>{let h=oe(s);h?(u=W(v?{r:255-h.r,g:255-h.g,b:255-h.b}:h,a),f={x:Math.max(f.x,u.x),y:Math.max(f.y,u.y),z:Math.max(f.z,u.z)},p(),x(),D()):x()},onChannelInput:(s,h,g)=>{let M=Math.max(0,Math.min(g,h)),y=["x","y","z"],V=M/g;if(v){let X={...u,[y[s]]:V},q=U(X,a);u=W({r:255-q.r,g:255-q.g,b:255-q.b},a)}else u={...u,[y[s]]:V};V>f[y[s]]&&(f={...f,[y[s]]:V}),p(),x(),D()},getRgbForCopy:()=>U(u,a),onRandom:s=>C(s),onReset:()=>C({r:0,g:0,b:0})},a=o.mode??"rgb",l=o.initialColor?W(o.initialColor,a):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},u={...l},A=0,m=new Set;We();let w=document.createElement("div");w.className="box-picker";let z=document.createElement("canvas");z.style.cursor="grab",w.appendChild(z);let E=Te(z,t),F=null,B=document.createElement("div");B.className="box-picker-controls",F=document.createElement("div"),F.className="box-picker-swatch",B.appendChild(F),w.appendChild(B),(i||c||d)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(B,n,{showInputs:i,showModeToggle:c,showCorners:d})}).catch(()=>{}),e.appendChild(w);let R=Se(z,()=>f,s=>{f=s},()=>u,(s,h)=>{u=s,A=h,p(),x()},()=>A,()=>E.scale,()=>E.center,D),v=!1,S=!0;z.addEventListener("mouseenter",()=>{S=Math.random()<.5,N=!0,D()}),z.addEventListener("mouseleave",()=>{S=Math.random()<.5,N=!1,D()}),z.addEventListener("dblclick",()=>{v=!v,Ae(v),p(),x(),D()});function I(s){if(s===a)return;let h=U(u,a),g={...u},M={...f};a=s;let y=W(h,a),V={x:1,y:1,z:1};u=y,f=V,O(g,y,M,V,300),x()}let H=null;function O(s,h,g,M,y){H!==null&&cancelAnimationFrame(H);let V=performance.now();function X(q){let ae=q-V,Z=Math.min(1,ae/y),J=1-Math.pow(1-Z,3);u={x:s.x+(h.x-s.x)*J,y:s.y+(h.y-s.y)*J,z:s.z+(h.z-s.z)*J},f={x:g.x+(M.x-g.x)*J,y:g.y+(M.y-g.y)*J,z:g.z+(M.z-g.z)*J},$(),p(),Z<1?H=requestAnimationFrame(X):H=null}H=requestAnimationFrame(X)}let P=!1;function D(){P||(P=!0,requestAnimationFrame(()=>{P=!1,$()}))}let N=!1,j=0;(function s(){if(!N)return;let h=performance.now();h-j>=66&&(j=h,D()),requestAnimationFrame(s)})();function $(){Ve(E,f,u,A,a,R.state,S)}function G(s,h,g){return Math.round(s+(h-s)*g)}function Y(s,h){let g=h>0?255:0,M=Math.abs(h);return K({r:G(s.r,g,M),g:G(s.g,g,M),b:G(s.b,g,M)})}function ie(s,h){let g=oe(h)||{r:128,g:128,b:128},M=Y(g,.35),y=Y(g,0),V=Y(g,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${M}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${y}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${V}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function de(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function me(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function b(){let s=U(u,a);return v?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function x(){if(!r)return;let s=b(),h=K(s);F&&ie(F,h);let g=w.querySelector(".box-picker-hex");g&&(g.value=h),T(),w._updateModeButtons&&w._updateModeButtons()}function T(){if(!r)return;let s=ce[a],h=v?W(b(),a):u,g=Ce(h,a),M=w.querySelectorAll(".box-picker-channel input"),y=w.querySelectorAll(".box-picker-channel label");for(let V=0;V<M.length;V++)y[V].textContent=s[V],y[V].style.color="",y[V].style.textShadow="none",M[V].value=String(g[V])}function p(){let s=b(),h={rgb:s,hsb:Q(s),oklch:ee(s),hex:K(s)};for(let g of m)g(h)}function k(){let s=U(u,a);return{rgb:s,hsb:Q(s),oklch:ee(s),hex:K(s)}}x(),$();let C=s=>{u=W(s,a),f={x:Math.max(f.x,u.x),y:Math.max(f.y,u.y),z:Math.max(f.z,u.z)};let h=L(u,E.scale,E.center);A=-1;for(let g=_.length-1;g>=0;g--)if(te(g,h,f,E.scale,E.center)){A=g;break}p(),x(),D()};return{getColor:k,getMode:()=>a,setColor:C,setMode(s){I(s)},on(s,h){m.add(h)},off(s,h){m.delete(h)},destroy(){N=!1,R.destroy(),H!==null&&cancelAnimationFrame(H),e.removeChild(w)}}}function xe(e,o){if(!e)return null;let t=e.trim();try{if(o==="hex")return{rgb:oe(t),alpha:1};if(o==="hex-alpha"){let r=t.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!r)return null;let i=oe(r[1]),c=r[2]?parseInt(r[2],16)/255:1;return{rgb:i,alpha:c}}if(o==="rgb"){let r=t.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return r?{r:+r[1],g:+r[2],b:+r[3]}:null}if(o==="hsl"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return r?Ze(+r[1],+r[2],+r[3]):null}if(o==="hsv"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return r?he({h:+r[1],s:+r[2],b:+r[3]}):null}if(o==="oklch"||o==="oklcha"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return r?{rgb:re({l:+r[1],c:+r[2],h:+r[3]}),alpha:r[4]!==void 0?Math.min(1,+r[4]):1}:null}}catch{}return null}function se(e,o,t=1){if(o==="hex")return K(e);if(o==="hex-alpha")return K(e)+(t<1?Math.round(t*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="hsl"){let i=Je(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%`}if(o==="hsv"){let i=Q(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.b)}%`}let r=ee(e);return`${r.l.toFixed(3)}, ${r.c.toFixed(3)}, ${r.h.toFixed(1)}`}function Ze(e,o,t){let r=o/100,i=t/100,c=(1-Math.abs(2*i-1))*r,d=c*(1-Math.abs(e/60%2-1)),n=i-c/2,a=0,l=0,f=0;return e<60?(a=c,l=d):e<120?(a=d,l=c):e<180?(l=c,f=d):e<240?(l=d,f=c):e<300?(a=d,f=c):(a=c,f=d),{r:Math.round((a+n)*255),g:Math.round((l+n)*255),b:Math.round((f+n)*255)}}function Je(e){let o=e.r/255,t=e.g/255,r=e.b/255,i=Math.max(o,t,r),c=Math.min(o,t,r),d=(i+c)/2;if(i===c)return{h:0,s:0,l:d*100};let n=i-c,a=d>.5?n/(2-i-c):n/(i+c),l=0;return i===o?l=((t-r)/n+(t<r?6:0))*60:i===t?l=((r-o)/n+2)*60:l=((o-t)/n+4)*60,{h:l,s:a*100,l:d*100}}var le=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),t=this.getAttribute("mode")||"rgb",r=this.getAttribute("value"),i=r?xe(r,this.model):null;this.alpha=i?.alpha??1;let c=i?.rgb??{r:255,g:255,b:255};if(this.picker=Fe(this.holder,{initialColor:c,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",n=>{this.internal||(this.internal=!0,this.setAttribute("value",se(n.rgb,this.model,this.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:n})),this.dispatchEvent(new CustomEvent("color-changed",{detail:se(n.rgb,this.model,this.alpha)})))}),t&&this.picker.setMode(t),new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]).has(this.model)){let n=document.createElement("input");n.type="range",n.min="0",n.max="100",n.value=String(Math.round(this.alpha*100)),n.style.cssText="width:100%;margin-top:8px;accent-color:#007AFF;",n.setAttribute("aria-label","Alpha"),n.addEventListener("input",()=>{this.alpha=+n.value/100;try{let a=this.picker?.getColor().rgb??{r:255,g:255,b:255},l=se(a,this.model,this.alpha);this.setAttribute("value",l),this.dispatchEvent(new CustomEvent("color-changed",{detail:l}))}catch{}}),this.appendChild(n)}}attributeChangedCallback(o,t,r){if(!(!this.picker||!r||this.internal))if(o==="value"){let i=xe(r,this.model);i&&(this.alpha=i.alpha,this.picker.setColor(i.rgb))}else o==="mode"&&this.picker.setMode(r)}get value(){return this.getAttribute("value")||se({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ge=class extends le{constructor(){super("hex")}},Qe=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Qe)customElements.get(e)||customElements.define(e,class extends le{constructor(){super(o)}});var Co=ge;export{ge as ColorIsBoxElement,Ye as createBoxColorPicker,Fe as createColorPicker,Co as default,Ae as setBoxInvert};
