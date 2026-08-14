var ColorIsBoxElement=(()=>{var he=Object.defineProperty;var _e=Object.getOwnPropertyDescriptor;var Ge=Object.getOwnPropertyNames;var Ne=Object.prototype.hasOwnProperty;var $e=(e,o)=>{for(var t in o)he(e,t,{get:o[t],enumerable:!0})},Xe=(e,o,t,i)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of Ge(o))!Ne.call(e,a)&&a!==t&&he(e,a,{get:()=>o[a],enumerable:!(i=_e(o,a))||i.enumerable});return e};var Ke=e=>Xe(he({},"__esModule",{value:!0}),e);var uo={};$e(uo,{ColorIsBoxElement:()=>ie,default:()=>lo});var ce={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},le={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function de(e){let o=e.r/255,t=e.g/255,i=e.b/255,a=Math.max(o,t,i),u=Math.min(o,t,i),s=a-u,r=0;s!==0&&(a===o?r=((t-i)/s+6)%6:a===t?r=(i-o)/s+2:r=(o-t)/s+4,r*=60);let f=a===0?0:s/a*100,b=a*100;return{h:r,s:f,b}}function Ue(e){let o=e.h,t=e.s/100,i=e.b/100,a=i*t,u=a*(1-Math.abs(o/60%2-1)),s=i-a,r,f,b;return o<60?(r=a,f=u,b=0):o<120?(r=u,f=a,b=0):o<180?(r=0,f=a,b=u):o<240?(r=0,f=u,b=a):o<300?(r=u,f=0,b=a):(r=a,f=0,b=u),{r:Math.round((r+s)*255),g:Math.round((f+s)*255),b:Math.round((b+s)*255)}}function xe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function me(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function We(e){let o=xe(e.r/255),t=xe(e.g/255),i=xe(e.b/255),a=.4122214708*o+.5363325363*t+.0514459929*i,u=.2119034982*o+.6806995451*t+.1073969566*i,s=.0883024619*o+.2817188376*t+.6299787005*i,r=Math.cbrt(a),f=Math.cbrt(u),b=Math.cbrt(s);return{L:.2104542553*r+.793617785*f-.0040720468*b,a:1.9779984951*r-2.428592205*f+.4505937099*b,b:.0259040371*r+.7827717662*f-.808675766*b}}function je(e,o,t){let i=e+.3963377774*o+.2158037573*t,a=e-.1055613458*o-.0638541728*t,u=e-.0894841775*o-1.291485548*t,s=i*i*i,r=a*a*a,f=u*u*u,b=4.0767416621*s-3.3077115913*r+.2309699292*f,g=-1.2684380046*s+2.6097574011*r-.3413193965*f,m=-.0041960863*s-.7034186147*r+1.707614701*f;return{r:Math.round(Math.max(0,Math.min(1,me(b)))*255),g:Math.round(Math.max(0,Math.min(1,me(g)))*255),b:Math.round(Math.max(0,Math.min(1,me(m)))*255)}}function ue(e){let o=We(e),t=Math.sqrt(o.a*o.a+o.b*o.b),i=Math.atan2(o.b,o.a)*(180/Math.PI);return i<0&&(i+=360),{l:o.L,c:t,h:t<1e-4?0:i}}function pe(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),i=e.c*Math.sin(o);return je(e.l,t,i)}function qe(e,o,t){let i=pe({l:e,c:o,h:t});if(Ce(i))return{l:e,c:o,h:t};let a=0,u=o;for(let s=0;s<20;s++){let r=(a+u)/2;i=pe({l:e,c:r,h:t}),Ce(i)?a=r:u=r}return{l:e,c:a,h:t}}function Ce(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function Y(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ge(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ke=.4;function N(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Ue({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,i=e.y*ke,a=e.z*359,u=qe(t,i,a);return pe(u)}}function Q(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=de(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=ue(e);return{x:t.l,y:Math.min(t.c/ke,1),z:t.h/359}}}function Me(e,o){let t=le[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Ae(e,o,t,i,a,u=!1){let s;e===0?s={x:i,y:o,z:t}:e===1?s={x:o,y:i,z:t}:s={x:o,y:t,z:i};let r=N(s,a);return u?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var we=Math.PI/6,Ze=Math.cos(we),Ye=Math.sin(we),re=!1;function Le(e){re=e}function E(e,o,t){return{x:t.x+(e.y-e.x)*Ze*o,y:t.y+e.z*o-(e.x+e.y)*Ye*o}}function Qe(e){let{x:o,y:t,z:i}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:i},{x:o,y:t,z:0},{x:o,y:0,z:i},{x:0,y:t,z:i},{x:o,y:t,z:i}]}var $=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Je=128,Ee={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Ve(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let i=e.getContext("2d");return i.scale(t,t),{ctx:i,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function ze(e,o,t,i,a,u,s=!0){let{ctx:r,scale:f,center:b,width:g,height:m}=e;r.save(),r.clearRect(0,0,g,m);let y=Qe(o).map(x=>E(x,f,b));if(oo(r,f,b,a),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,to(r,y,o,a),r.restore(),s&&ro(r,a,f,b),i>=0){let x=N(t,a),k=re?{r:255-x.r,g:255-x.g,b:255-x.b}:x,R=E(t,f,b);io(r,R,k)}r.restore()}var eo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function oo(e,o,t,i){let a=E({x:0,y:0,z:0},o,t),u=[E({x:1,y:0,z:0},o,t),E({x:0,y:1,z:0},o,t),E({x:0,y:0,z:1},o,t)],s=eo[i];e.lineWidth=1.5;for(let r=0;r<u.length;r++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(u[r].x,u[r].y),e.strokeStyle=s[r],e.stroke()}function to(e,o,t,i){let a=[t.x,t.y,t.z];for(let u=0;u<$.length;u++){let s=$[u],r=a[s.fixedAxis],f=a[s.uAxis],b=a[s.vAxis];if(f<.002&&b<.002)continue;let g=s.quad.map(m=>o[m]);no(e,g,s.fixedAxis,r,f,b,i)}}function no(e,o,t,i,a,u,s){let r=Je,f=document.createElement("canvas");f.width=r,f.height=r;let b=f.getContext("2d"),g=b.createImageData(r,r),m=g.data;for(let X=0;X<r;X++)for(let P=0;P<r;P++){let W=P/(r-1)*a,j=X/(r-1)*u,q=Ae(t,W,j,i,s,re),K=(X*r+P)*4;m[K]=q.r,m[K+1]=q.g,m[K+2]=q.b,m[K+3]=255}b.putImageData(g,0,0);let y=o[0],x=o[1],k=o[2],R=o[3],B=x.x-y.x,I=x.y-y.y,H=R.x-y.x,w=R.y-y.y;e.save(),e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(x.x,x.y),e.lineTo(k.x,k.y),e.lineTo(R.x,R.y),e.closePath(),e.clip();let A=2/r,L=y.x-B*A-H*A,F=y.y-I*A-w*A,D=1+2*A,S=1+2*A;e.transform(B*D/r,I*D/r,H*S/r,w*S/r,L,F),e.imageSmoothingEnabled=!0,e.drawImage(f,0,0),e.restore()}function ro(e,o,t,i){let a=ce[o],u=re?[E({x:0,y:1,z:1},t,i),E({x:1,y:0,z:1},t,i),E({x:1,y:1,z:0},t,i)]:[E({x:1,y:0,z:0},t,i),E({x:0,y:1,z:0},t,i),E({x:0,y:0,z:1},t,i)],s=re?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],f=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(m=>Y(N(m,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let b={rgb:[],hsb:[2],oklch:[0]},g=performance.now()/1e3;for(let m=0;m<3;m++){let y=u[m].x+s[m].x,x=u[m].y+s[m].y,k=g*1.8+m*2.1,R=.62+.38*(.5+.5*Math.sin(k)),B=11+Math.round(1.6*(.5+.5*Math.sin(k)));e.globalAlpha=R,e.font=`bold ${B}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let H=b[o].includes(m)?"#888888":f[m];e.fillStyle=H,e.fillText(a[m],y,x)}e.globalAlpha=1,e.restore()}function io(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Te(e,o,t,i){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return E(a[e],t,i)}function ye(){let e={x:0,y:0};return[E({x:1,y:0,z:0},1,e),E({x:0,y:1,z:0},1,e),E({x:0,y:0,z:1},1,e)].map(t=>{let i=Math.sqrt(t.x*t.x+t.y*t.y);return i>0?{x:t.x/i,y:t.y/i}:{x:0,y:0}})}function te(e,o,t,i,a){let u=$[e],s=[t.x,t.y,t.z],r=s[u.uAxis],f=s[u.vAxis];if(r<.002||f<.002)return null;let b={x:0,y:0,z:0},g=["x","y","z"];b[g[u.fixedAxis]]=s[u.fixedAxis];let m={...b};m[g[u.uAxis]]=r;let y={...b};y[g[u.vAxis]]=f;let x=E(b,i,a),k=E(m,i,a),R=E(y,i,a),B=k.x-x.x,I=k.y-x.y,H=R.x-x.x,w=R.y-x.y,A=B*w-I*H;if(Math.abs(A)<1e-6)return null;let L=o.x-x.x,F=o.y-x.y,D=(L*w-F*H)/A,S=(F*B-L*I)/A;return D<-.05||D>1.05||S<-.05||S>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,S))}}function Re(e,o,t,i,a){let u=$[e],s=[t.x,t.y,t.z],r=s[u.uAxis],f=s[u.vAxis];if(r<.002||f<.002)return null;let b={x:0,y:0,z:0},g=["x","y","z"];b[g[u.fixedAxis]]=s[u.fixedAxis];let m={...b};m[g[u.uAxis]]=r;let y={...b};y[g[u.vAxis]]=f;let x=E(b,i,a),k=E(m,i,a),R=E(y,i,a),B=k.x-x.x,I=k.y-x.y,H=R.x-x.x,w=R.y-x.y,A=B*w-I*H;if(Math.abs(A)<1e-6)return null;let L=o.x-x.x,F=o.y-x.y,D=(L*w-F*H)/A,S=(F*B-L*I)/A;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,S))}}var He=22;function Se(e,o,t,i,a,u,s,r,f){let b={...Ee};function g(d){let p=e.getBoundingClientRect();return{x:d.clientX-p.left,y:d.clientY-p.top}}function m(d){let p=o(),v=s(),n=r();for(let c=0;c<3;c++){let l=Te(c,p,v,n),h=d.x-l.x,M=d.y-l.y;if(h*h+M*M<=He*He)return c}return-1}function y(d){let p=o(),v=s(),n=r();for(let c=$.length-1;c>=0;c--){let l=te(c,d,p,v,n);if(l)return{faceIndex:c,...l}}return null}let x=-1,k={x:0,y:0},R=0;function B(d,p){x=d,k=p,R=o()[["x","y","z"][d]],b.draggingAxisHandle=d,e.style.cursor="grabbing",f()}function I(d){if(x<0)return;let p=d.x-k.x,v=d.y-k.y,c=ye()[x],l=s(),M=(p*c.x+v*c.y)/l,z=Math.max(0,Math.min(1,R+M)),T=o(),V=["x","y","z"],_={...T,[V[x]]:z};t(_);let G=i(),C=u(),U=C>=0?$[C]:null,ee={...G};U&&x===U.fixedAxis?ee[V[x]]=z:ee[V[x]]=Math.min(G[V[x]],z),a(ee,u()),f()}function H(){x=-1,b.draggingAxisHandle=-1}let w=-1,A=null,L=null,F=!1;function D(d,p,v,n){w=d,b.draggingFace=d,A=null,L=null,F=!1,n&&(F=!0,L={s:p,t:v}),X(d,p,v),e.style.cursor="crosshair",f()}function S(d,p,v){if(w<0)return;let n=o(),c=s(),l=r(),h=te(w,d,n,c,l),M=w;if(!h&&!v){for(let V=$.length-1;V>=0;V--)if(V!==w&&(h=te(V,d,n,c,l),h)){M=V;break}}if(!h&&v&&(h=Re(w,d,n,c,l),M=w),!h){f();return}M!==w&&(w=M,b.draggingFace=M,A=null,F=!1,L=null);let{s:z,t:T}=h;if(p&&L){if(F){let V=Math.abs(z-L.s),_=Math.abs(T-L.t),G=.02;(V>G||_>G)&&(A=V>=_?"u":"v",F=!1)}A==="u"?T=L.t:A==="v"&&(z=L.s)}else p||(A=null,F=!1,L=null);X(M,z,T),f()}function X(d,p,v){let n=$[d],c=o(),l=["x","y","z"],h={...i()};h[l[n.uAxis]]=p*c[l[n.uAxis]],h[l[n.vAxis]]=v*c[l[n.vAxis]],h[l[n.fixedAxis]]=c[l[n.fixedAxis]],a(h,d)}function P(){w=-1,b.draggingFace=-1,A=null,F=!1,L=null}function W(d){let p=g(d),v=m(p);if(v>=0){d.preventDefault(),B(v,p);return}let n=y(p);n&&(d.preventDefault(),D(n.faceIndex,n.s,n.t,d.shiftKey))}function j(d){let p=g(d);if(x>=0){d.preventDefault(),I(p);return}if(w>=0){d.preventDefault(),S(p,d.shiftKey,d.altKey);return}let v=m(p),n=y(p),c=v,l=v>=0?-1:n?n.faceIndex:-1;(c!==b.hoveredAxisHandle||l!==b.hoveredFace)&&(b.hoveredAxisHandle=c,b.hoveredFace=l,e.style.cursor=c>=0?"grab":l>=0?"crosshair":"default",f())}function q(d){let p=x>=0||w>=0;H(),P(),p&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",f())}function K(d){if(d.touches.length!==1)return;let p=g(d.touches[0]),v=m(p);if(v>=0){d.preventDefault(),B(v,p);return}let n=y(p);n&&(d.preventDefault(),D(n.faceIndex,n.s,n.t,!1))}function ne(d){if(d.touches.length!==1)return;let p=g(d.touches[0]);x>=0?(d.preventDefault(),I(p)):w>=0&&(d.preventDefault(),S(p,!1,!1))}function J(d){H(),P(),f()}function O(d){let p=d.shiftKey?.04:.004,v=i(),n=o(),c=ye(),l=0,h=0;switch(d.key){case"ArrowRight":l=1;break;case"ArrowLeft":l=-1;break;case"ArrowUp":h=-1;break;case"ArrowDown":h=1;break;default:return}d.preventDefault();let M={...v},z=["x","y","z"];for(let T=0;T<3;T++){let V=l*c[T].x+h*c[T].y;if(Math.abs(V)>.3){let _=v[z[T]]+p*Math.sign(V);M[z[T]]=Math.max(0,Math.min(n[z[T]],_))}}a(M,u()),f()}e.addEventListener("mousedown",W),window.addEventListener("mousemove",j),window.addEventListener("mouseup",q),e.addEventListener("touchstart",K,{passive:!1}),e.addEventListener("touchmove",ne,{passive:!1}),e.addEventListener("touchend",J),e.addEventListener("keydown",O),e.setAttribute("tabindex","0");function be(){e.removeEventListener("mousedown",W),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",q),e.removeEventListener("touchstart",K),e.removeEventListener("touchmove",ne),e.removeEventListener("touchend",J),e.removeEventListener("keydown",O)}return{state:b,destroy:be}}var Be=`.box-picker {\r
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
`;var Ie=co,Fe=!1;function so(){if(Fe||typeof document>"u")return;Fe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Be,document.head.appendChild(e)}function co(e,o={}){let t=o.size??300,i=o.controls??!0,a=o.mode??"rgb",u=o.initialColor?Q(o.initialColor,a):{x:.7,y:.4,z:.85},s={x:1,y:1,z:1},r={...u},f=0,b=new Set;so();let g=document.createElement("div");g.className="box-picker";let m=document.createElement("canvas");m.style.cursor="grab",g.appendChild(m);let y=Ve(m,t),x=null,k=null,R=[],B=[];if(i){let n=document.createElement("div");n.className="box-picker-controls",x=document.createElement("div"),x.className="box-picker-swatch",k=document.createElement("input"),k.className="box-picker-hex",k.type="text",k.spellcheck=!1;let c=document.createElement("div");c.className="box-picker-mode-toggle";let l=document.createElement("button");l.textContent="RGB";let h=document.createElement("button");h.textContent="HSB";let M=document.createElement("button");M.textContent="OKLCH",c.appendChild(M),c.appendChild(l),c.appendChild(h),l.addEventListener("click",()=>A("rgb")),h.addEventListener("click",()=>A("hsb")),M.addEventListener("click",()=>A("oklch")),k.addEventListener("change",()=>{let C=ge(k.value);C?(r=Q(H?{r:255-C.r,g:255-C.g,b:255-C.b}:C,a),s={x:Math.max(s.x,r.x),y:Math.max(s.y,r.y),z:Math.max(s.z,r.z)},d(),O(),S()):O()}),k.addEventListener("click",()=>{let C=N(r,a);K(Y(C)||"#ffffff"),ne(k)});let z=document.createElement("div");z.className="box-picker-channels";for(let C=0;C<3;C++){let U=document.createElement("div");U.className="box-picker-channel";let ee=document.createElement("label"),Z=document.createElement("input");Z.type="text",Z.inputMode="numeric",U.appendChild(ee),U.appendChild(Z),z.appendChild(U),R.push(Z),B.push(ee),Z.addEventListener("change",()=>{let oe=le[a],ve=parseFloat(Z.value);if(isNaN(ve)){O();return}let Oe=Math.max(0,Math.min(oe[C],ve)),ae=["x","y","z"],se=Oe/oe[C];if(H){let Pe={...r,[ae[C]]:se},fe=N(Pe,a);r=Q({r:255-fe.r,g:255-fe.g,b:255-fe.b},a)}else r={...r,[ae[C]]:se};se>s[ae[C]]&&(s={...s,[ae[C]]:se}),d(),O(),S()}),Z.addEventListener("click",()=>{let oe=N(r,a);K(`${oe.r}, ${oe.g}, ${oe.b}`),ne(Z)})}n.appendChild(x);let T=document.createElement("div");T.className="box-picker-hexrow";let V=document.createElement("div");V.className="box-picker-hexwrap";let _=document.createElement("label");_.textContent="Hex",V.appendChild(_),V.appendChild(k),T.appendChild(z),T.appendChild(V),n.appendChild(T),n.appendChild(c),g.appendChild(n);try{let C=n.querySelector(".box-picker-mode-toggle"),U=()=>{C&&C.offsetWidth>0&&(T.style.width=C.offsetWidth+"px")};U(),requestAnimationFrame(()=>U())}catch{}let G=()=>{l.classList.toggle("active",a==="rgb"),h.classList.toggle("active",a==="hsb"),M.classList.toggle("active",a==="oklch")};G(),g._updateModeButtons=G}e.appendChild(g);let I=Se(m,()=>s,n=>{s=n},()=>r,(n,c)=>{r=n,f=c,d(),O()},()=>f,()=>y.scale,()=>y.center,S),H=!1,w=!0;m.addEventListener("mouseenter",()=>{w=Math.random()<.5,S()}),m.addEventListener("mouseleave",()=>{w=Math.random()<.5,S()}),m.addEventListener("dblclick",()=>{H=!H,Le(H),d(),O(),S()});function A(n){if(n===a)return;let c=N(r,a),l={...r},h={...s};a=n;let M=Q(c,a),z={x:1,y:1,z:1};r=M,s=z,F(l,M,h,z,300),O()}let L=null;function F(n,c,l,h,M){L!==null&&cancelAnimationFrame(L);let z=performance.now();function T(V){let _=V-z,G=Math.min(1,_/M),C=1-Math.pow(1-G,3);r={x:n.x+(c.x-n.x)*C,y:n.y+(c.y-n.y)*C,z:n.z+(c.z-n.z)*C},s={x:l.x+(h.x-l.x)*C,y:l.y+(h.y-l.y)*C,z:l.z+(h.z-l.z)*C},P(),d(),G<1?L=requestAnimationFrame(T):L=null}L=requestAnimationFrame(T)}let D=!1;function S(){D||(D=!0,requestAnimationFrame(()=>{D=!1,P()}))}let X=!0;(function n(){X&&(S(),requestAnimationFrame(n))})();function P(){ze(y,s,r,f,a,I.state,w)}function W(n,c,l){return Math.round(n+(c-n)*l)}function j(n,c){let l=c>0?255:0,h=Math.abs(c);return Y({r:W(n.r,l,h),g:W(n.g,l,h),b:W(n.b,l,h)})}function q(n,c){let l=ge(c)||{r:128,g:128,b:128},h=j(l,.35),M=j(l,0),z=j(l,-.35);n.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${h}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${M}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${z}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,n.style.backgroundColor="transparent"}function K(n){try{navigator.clipboard.writeText(n).catch(()=>{})}catch{}}function ne(n){n&&(n.style.borderColor="#4ade80",n.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{n.style.borderColor="",n.style.boxShadow=""},500))}function J(){let n=N(r,a);return H?{r:255-n.r,g:255-n.g,b:255-n.b}:n}function O(){if(!i)return;let n=J(),c=Y(n);x&&q(x,c),k&&(k.value=c),be(),g._updateModeButtons&&g._updateModeButtons()}function be(){if(!i)return;let n=ce[a],c=H?Q(J(),a):r,l=Me(c,a);for(let h=0;h<R.length;h++)B[h].textContent=n[h],B[h].style.color="",B[h].style.textShadow="none",R[h].value=String(l[h])}function d(){let n=J(),c={rgb:n,hsb:de(n),oklch:ue(n),hex:Y(n)};for(let l of b)l(c)}function p(){let n=N(r,a);return{rgb:n,hsb:de(n),oklch:ue(n),hex:Y(n)}}O(),P();let v=n=>{r=Q(n,a),s={x:Math.max(s.x,r.x),y:Math.max(s.y,r.y),z:Math.max(s.z,r.z)};let c=E(r,y.scale,y.center);f=-1;for(let l=$.length-1;l>=0;l--)if(te(l,c,s,y.scale,y.center)){f=l;break}d(),O(),S()};if(i){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let l=Math.floor(Math.random()*256),h=Math.floor(Math.random()*256),M=Math.floor(Math.random()*256);v({r:l,g:h,b:M})}),g.appendChild(n);let c=document.createElement("button");c.className="box-corner-btn box-corner-right",c.title="Reset",c.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',c.addEventListener("click",()=>{v({r:0,g:0,b:0})}),g.appendChild(c)}return{getColor:p,getMode:()=>a,setColor:v,setMode(n){A(n)},on(n,c){b.add(c)},off(n,c){b.delete(c)},destroy(){X=!1,I.destroy(),L!==null&&cancelAnimationFrame(L),e.removeChild(g)}}}function De(e){let o=e.match(/^#?([0-9a-f]{6})$/i);if(!o)return{r:255,g:255,b:255};let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}var ie=class extends HTMLElement{holder=null;picker=null;internal=!1;static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10);this.picker=Ie(this.holder,{initialColor:De(this.getAttribute("value")||"#ffffff"),size:o,controls:!0}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.setAttribute("value",i.hex),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:i.hex})))});let t=this.getAttribute("mode");t&&this.picker.setMode(t)}attributeChangedCallback(o,t,i){!this.picker||!i||this.internal||(o==="value"?this.picker.setColor(De(i)):o==="mode"&&this.picker.setMode(i))}get value(){return this.getAttribute("value")||"#ffffff"}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}};customElements.get("color-is-box")||customElements.define("color-is-box",ie);var lo=ie;return Ke(uo);})();
