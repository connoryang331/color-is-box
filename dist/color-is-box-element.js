var ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},me={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Y(e){let o=e.r/255,t=e.g/255,r=e.b/255,i=Math.max(o,t,r),c=Math.min(o,t,r),d=i-c,n=0;d!==0&&(i===o?n=((t-r)/d+6)%6:i===t?n=(r-o)/d+2:n=(o-t)/d+4,n*=60);let a=i===0?0:d/i*100,l=i*100;return{h:n,s:a,b:l}}function he(e){let o=e.h,t=e.s/100,r=e.b/100,i=r*t,c=i*(1-Math.abs(o/60%2-1)),d=r-i,n,a,l;return o<60?(n=i,a=c,l=0):o<120?(n=c,a=i,l=0):o<180?(n=0,a=i,l=c):o<240?(n=0,a=c,l=i):o<300?(n=c,a=0,l=i):(n=i,a=0,l=c),{r:Math.round((n+d)*255),g:Math.round((a+d)*255),b:Math.round((l+d)*255)}}function ue(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function be(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Fe(e){let o=ue(e.r/255),t=ue(e.g/255),r=ue(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*r,c=.2119034982*o+.6806995451*t+.1073969566*r,d=.0883024619*o+.2817188376*t+.6299787005*r,n=Math.cbrt(i),a=Math.cbrt(c),l=Math.cbrt(d);return{L:.2104542553*n+.793617785*a-.0040720468*l,a:1.9779984951*n-2.428592205*a+.4505937099*l,b:.0259040371*n+.7827717662*a-.808675766*l}}function Be(e,o,t){let r=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,d=r*r*r,n=i*i*i,a=c*c*c,l=4.0767416621*d-3.3077115913*n+.2309699292*a,f=-1.2684380046*d+2.6097574011*n-.3413193965*a,b=-.0041960863*d-.7034186147*n+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,be(l)))*255),g:Math.round(Math.max(0,Math.min(1,be(f)))*255),b:Math.round(Math.max(0,Math.min(1,be(b)))*255)}}function Z(e){let o=Fe(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function te(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return Be(e.l,t,r)}function Ie(e,o,t){let r=te({l:e,c:o,h:t});if(pe(r))return{l:e,c:o,h:t};let i=0,c=o;for(let d=0;d<20;d++){let n=(i+c)/2;r=te({l:e,c:n,h:t}),pe(r)?i=n:c=n}return{l:e,c:i,h:t}}function pe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function U(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function J(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ye=.4;function N(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return he({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*ye,i=e.z*359,c=Ie(t,r,i);return te(c)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=Y(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Z(e);return{x:t.l,y:Math.min(t.c/ye,1),z:t.h/359}}}function ve(e,o){let t=me[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Ce(e,o,t,r,i,c=!1){let d;e===0?d={x:r,y:o,z:t}:e===1?d={x:o,y:r,z:t}:d={x:o,y:t,z:r};let n=N(d,i);return c?{r:255-n.r,g:255-n.g,b:255-n.b}:n}var Me=Math.PI/6,De=Math.cos(Me),Oe=Math.sin(Me),re=!1;function ke(e){re=e}function R(e,o,t){return{x:t.x+(e.y-e.x)*De*o,y:t.y+e.z*o-(e.x+e.y)*Oe*o}}function Pe(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var $=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Ge=128,Ae={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function we(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Te(e,o,t,r,i,c,d=!0){let{ctx:n,scale:a,center:l,width:f,height:b}=e;n.save(),n.clearRect(0,0,f,b);let A=Pe(o).map(g=>R(g,a,l));if($e(n,a,l,i),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,Xe(n,A,o,i),n.restore(),d&&Ue(n,i,a,l),r>=0){let g=N(t,i),w=re?{r:255-g.r,g:255-g.g,b:255-g.b}:g,V=R(t,a,l);Ne(n,V,w)}n.restore()}var _e={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function $e(e,o,t,r){let i=R({x:0,y:0,z:0},o,t),c=[R({x:1,y:0,z:0},o,t),R({x:0,y:1,z:0},o,t),R({x:0,y:0,z:1},o,t)],d=_e[r];e.lineWidth=1.5;for(let n=0;n<c.length;n++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(c[n].x,c[n].y),e.strokeStyle=d[n],e.stroke()}function Xe(e,o,t,r){let i=[t.x,t.y,t.z];for(let c=0;c<$.length;c++){let d=$[c],n=i[d.fixedAxis],a=i[d.uAxis],l=i[d.vAxis];if(a<.002&&l<.002)continue;let f=d.quad.map(b=>o[b]);Ke(e,f,d.fixedAxis,n,a,l,r)}}function Ke(e,o,t,r,i,c,d){let n=Ge,a=document.createElement("canvas");a.width=n,a.height=n;let l=a.getContext("2d"),f=l.createImageData(n,n),b=f.data;for(let O=0;O<n;O++)for(let I=0;I<n;I++){let j=I/(n-1)*i,q=O/(n-1)*c,X=Ce(t,j,q,r,d,re),P=(O*n+I)*4;b[P]=X.r,b[P+1]=X.g,b[P+2]=X.b,b[P+3]=255}l.putImageData(f,0,0);let A=o[0],g=o[1],w=o[2],V=o[3],S=g.x-A.x,H=g.y-A.y,F=V.x-A.x,z=V.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(g.x,g.y),e.lineTo(w.x,w.y),e.lineTo(V.x,V.y),e.closePath(),e.clip();let M=2/n,L=A.x-S*M-F*M,B=A.y-H*M-z*M,E=1+2*M,D=1+2*M;e.transform(S*E/n,H*E/n,F*D/n,z*D/n,L,B),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function Ue(e,o,t,r){let i=ae[o],c=re?[R({x:0,y:1,z:1},t,r),R({x:1,y:0,z:1},t,r),R({x:1,y:1,z:0},t,r)]:[R({x:1,y:0,z:0},t,r),R({x:0,y:1,z:0},t,r),R({x:0,y:0,z:1},t,r)],d=re?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],a=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(b=>U(N(b,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let l={rgb:[],hsb:[2],oklch:[0]},f=performance.now()/1e3;for(let b=0;b<3;b++){let A=c[b].x+d[b].x,g=c[b].y+d[b].y,w=f*1.8+b*2.1,V=.62+.38*(.5+.5*Math.sin(w)),S=11+Math.round(1.6*(.5+.5*Math.sin(w)));e.globalAlpha=V,e.font=`bold ${S}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let F=l[o].includes(b)?"#888888":a[b];e.fillStyle=F,e.fillText(i[b],A,g)}e.globalAlpha=1,e.restore()}function Ne(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Ve(e,o,t,r){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(i[e],t,r)}function fe(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function Q(e,o,t,r,i){let c=$[e],d=[t.x,t.y,t.z],n=d[c.uAxis],a=d[c.vAxis];if(n<.002||a<.002)return null;let l={x:0,y:0,z:0},f=["x","y","z"];l[f[c.fixedAxis]]=d[c.fixedAxis];let b={...l};b[f[c.uAxis]]=n;let A={...l};A[f[c.vAxis]]=a;let g=R(l,r,i),w=R(b,r,i),V=R(A,r,i),S=w.x-g.x,H=w.y-g.y,F=V.x-g.x,z=V.y-g.y,M=S*z-H*F;if(Math.abs(M)<1e-6)return null;let L=o.x-g.x,B=o.y-g.y,E=(L*z-B*F)/M,D=(B*S-L*H)/M;return E<-.05||E>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,E)),t:Math.max(0,Math.min(1,D))}}function ze(e,o,t,r,i){let c=$[e],d=[t.x,t.y,t.z],n=d[c.uAxis],a=d[c.vAxis];if(n<.002||a<.002)return null;let l={x:0,y:0,z:0},f=["x","y","z"];l[f[c.fixedAxis]]=d[c.fixedAxis];let b={...l};b[f[c.uAxis]]=n;let A={...l};A[f[c.vAxis]]=a;let g=R(l,r,i),w=R(b,r,i),V=R(A,r,i),S=w.x-g.x,H=w.y-g.y,F=V.x-g.x,z=V.y-g.y,M=S*z-H*F;if(Math.abs(M)<1e-6)return null;let L=o.x-g.x,B=o.y-g.y,E=(L*z-B*F)/M,D=(B*S-L*H)/M;return{s:Math.max(0,Math.min(1,E)),t:Math.max(0,Math.min(1,D))}}var Re=22;function Le(e,o,t,r,i,c,d,n,a){let l={...Ae};function f(u){let m=e.getBoundingClientRect();return{x:u.clientX-m.left,y:u.clientY-m.top}}function b(u){let m=o(),v=d(),y=n();for(let C=0;C<3;C++){let s=Ve(C,m,v,y),h=u.x-s.x,x=u.y-s.y;if(h*h+x*x<=Re*Re)return C}return-1}function A(u){let m=o(),v=d(),y=n();for(let C=$.length-1;C>=0;C--){let s=Q(C,u,m,v,y);if(s)return{faceIndex:C,...s}}return null}let g=-1,w={x:0,y:0},V=0;function S(u,m){g=u,w=m,V=o()[["x","y","z"][u]],l.draggingAxisHandle=u,e.style.cursor="grabbing",a()}function H(u){if(g<0)return;let m=u.x-w.x,v=u.y-w.y,C=fe()[g],s=d(),x=(m*C.x+v*C.y)/s,T=Math.max(0,Math.min(1,V+x)),k=o(),p=["x","y","z"],G={...k,[p[g]]:T};t(G);let _=r(),ie=c(),oe=ie>=0?$[ie]:null,K={..._};oe&&g===oe.fixedAxis?K[p[g]]=T:K[p[g]]=Math.min(_[p[g]],T),i(K,c()),a()}function F(){g=-1,l.draggingAxisHandle=-1}let z=-1,M=null,L=null,B=!1;function E(u,m,v,y){z=u,l.draggingFace=u,M=null,L=null,B=!1,y&&(B=!0,L={s:m,t:v}),O(u,m,v),e.style.cursor="crosshair",a()}function D(u,m,v){if(z<0)return;let y=o(),C=d(),s=n(),h=Q(z,u,y,C,s),x=z;if(!h&&!v){for(let p=$.length-1;p>=0;p--)if(p!==z&&(h=Q(p,u,y,C,s),h)){x=p;break}}if(!h&&v&&(h=ze(z,u,y,C,s),x=z),!h){a();return}x!==z&&(z=x,l.draggingFace=x,M=null,B=!1,L=null);let{s:T,t:k}=h;if(m&&L){if(B){let p=Math.abs(T-L.s),G=Math.abs(k-L.t),_=.02;(p>_||G>_)&&(M=p>=G?"u":"v",B=!1)}M==="u"?k=L.t:M==="v"&&(T=L.s)}else m||(M=null,B=!1,L=null);O(x,T,k),a()}function O(u,m,v){let y=$[u],C=o(),s=["x","y","z"],h={...r()};h[s[y.uAxis]]=m*C[s[y.uAxis]],h[s[y.vAxis]]=v*C[s[y.vAxis]],h[s[y.fixedAxis]]=C[s[y.fixedAxis]],i(h,u)}function I(){z=-1,l.draggingFace=-1,M=null,B=!1,L=null}function j(u){let m=f(u),v=b(m);if(v>=0){u.preventDefault(),S(v,m);return}let y=A(m);y&&(u.preventDefault(),E(y.faceIndex,y.s,y.t,u.shiftKey))}function q(u){let m=f(u);if(g>=0){u.preventDefault(),H(m);return}if(z>=0){u.preventDefault(),D(m,u.shiftKey,u.altKey);return}let v=b(m),y=A(m),C=v,s=v>=0?-1:y?y.faceIndex:-1;(C!==l.hoveredAxisHandle||s!==l.hoveredFace)&&(l.hoveredAxisHandle=C,l.hoveredFace=s,e.style.cursor=C>=0?"grab":s>=0?"crosshair":"default",a())}function X(u){let m=g>=0||z>=0;F(),I(),m&&(l.hoveredAxisHandle=-1,l.hoveredFace=-1,e.style.cursor="default",a())}function P(u){if(u.touches.length!==1)return;let m=f(u.touches[0]),v=b(m);if(v>=0){u.preventDefault(),S(v,m);return}let y=A(m);y&&(u.preventDefault(),E(y.faceIndex,y.s,y.t,!1))}function se(u){if(u.touches.length!==1)return;let m=f(u.touches[0]);g>=0?(u.preventDefault(),H(m)):z>=0&&(u.preventDefault(),D(m,!1,!1))}function le(u){F(),I(),a()}function de(u){let m=u.shiftKey?.04:.004,v=r(),y=o(),C=fe(),s=0,h=0;switch(u.key){case"ArrowRight":s=1;break;case"ArrowLeft":s=-1;break;case"ArrowUp":h=-1;break;case"ArrowDown":h=1;break;default:return}u.preventDefault();let x={...v},T=["x","y","z"];for(let k=0;k<3;k++){let p=s*C[k].x+h*C[k].y;if(Math.abs(p)>.3){let G=v[T[k]]+m*Math.sign(p);x[T[k]]=Math.max(0,Math.min(y[T[k]],G))}}i(x,c()),a()}e.addEventListener("mousedown",j),window.addEventListener("mousemove",q),window.addEventListener("mouseup",X),e.addEventListener("touchstart",P,{passive:!1}),e.addEventListener("touchmove",se,{passive:!1}),e.addEventListener("touchend",le),e.addEventListener("keydown",de),e.setAttribute("tabindex","0");function ee(){e.removeEventListener("mousedown",j),window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",X),e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",se),e.removeEventListener("touchend",le),e.removeEventListener("keydown",de)}return{state:l,destroy:ee}}var Se=`.box-picker {\r
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
`;var He=We,Ee=!1;function je(){if(Ee||typeof document>"u")return;Ee=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Se,document.head.appendChild(e)}function We(e,o={}){let t=o.size??300,r=o.controls??!0,i=o.showInputs??!1,c=o.showModeToggle??!1,d=o.showCorners??!1,n={mode:()=>a,switchMode:s=>B(s),onHexInput:s=>{let h=J(s);h?(b=W(M?{r:255-h.r,g:255-h.g,b:255-h.b}:h,a),f={x:Math.max(f.x,b.x),y:Math.max(f.y,b.y),z:Math.max(f.z,b.z)},v(),u(),I()):u()},onChannelInput:(s,h,x)=>{let T=Math.max(0,Math.min(x,h)),k=["x","y","z"],p=T/x;if(M){let G={...b,[k[s]]:p},_=N(G,a);b=W({r:255-_.r,g:255-_.g,b:255-_.b},a)}else b={...b,[k[s]]:p};p>f[k[s]]&&(f={...f,[k[s]]:p}),v(),u(),I()},getRgbForCopy:()=>N(b,a),onRandom:s=>C(s),onReset:()=>C({r:0,g:0,b:0})},a=o.mode??"rgb",l=o.initialColor?W(o.initialColor,a):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},b={...l},A=0,g=new Set;je();let w=document.createElement("div");w.className="box-picker";let V=document.createElement("canvas");V.style.cursor="grab",w.appendChild(V);let S=we(V,t),H=null,F=document.createElement("div");F.className="box-picker-controls",H=document.createElement("div"),H.className="box-picker-swatch",F.appendChild(H),w.appendChild(F),(i||c||d)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(F,n,{showInputs:i,showModeToggle:c,showCorners:d})}).catch(()=>{}),e.appendChild(w);let z=Le(V,()=>f,s=>{f=s},()=>b,(s,h)=>{b=s,A=h,v(),u()},()=>A,()=>S.scale,()=>S.center,I),M=!1,L=!0;V.addEventListener("mouseenter",()=>{L=Math.random()<.5,I()}),V.addEventListener("mouseleave",()=>{L=Math.random()<.5,I()}),V.addEventListener("dblclick",()=>{M=!M,ke(M),v(),u(),I()});function B(s){if(s===a)return;let h=N(b,a),x={...b},T={...f};a=s;let k=W(h,a),p={x:1,y:1,z:1};b=k,f=p,D(x,k,T,p,300),u()}let E=null;function D(s,h,x,T,k){E!==null&&cancelAnimationFrame(E);let p=performance.now();function G(_){let ie=_-p,oe=Math.min(1,ie/k),K=1-Math.pow(1-oe,3);b={x:s.x+(h.x-s.x)*K,y:s.y+(h.y-s.y)*K,z:s.z+(h.z-s.z)*K},f={x:x.x+(T.x-x.x)*K,y:x.y+(T.y-x.y)*K,z:x.z+(T.z-x.z)*K},q(),v(),oe<1?E=requestAnimationFrame(G):E=null}E=requestAnimationFrame(G)}let O=!1;function I(){O||(O=!0,requestAnimationFrame(()=>{O=!1,q()}))}let j=!0;(function s(){j&&(I(),requestAnimationFrame(s))})();function q(){Te(S,f,b,A,a,z.state,L)}function X(s,h,x){return Math.round(s+(h-s)*x)}function P(s,h){let x=h>0?255:0,T=Math.abs(h);return U({r:X(s.r,x,T),g:X(s.g,x,T),b:X(s.b,x,T)})}function se(s,h){let x=J(h)||{r:128,g:128,b:128},T=P(x,.35),k=P(x,0),p=P(x,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${T}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${k}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${p}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function le(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function de(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function ee(){let s=N(b,a);return M?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function u(){if(!r)return;let s=ee(),h=U(s);H&&se(H,h);let x=w.querySelector(".box-picker-hex");x&&(x.value=h),m(),w._updateModeButtons&&w._updateModeButtons()}function m(){if(!r)return;let s=ae[a],h=M?W(ee(),a):b,x=ve(h,a),T=w.querySelectorAll(".box-picker-channel input"),k=w.querySelectorAll(".box-picker-channel label");for(let p=0;p<T.length;p++)k[p].textContent=s[p],k[p].style.color="",k[p].style.textShadow="none",T[p].value=String(x[p])}function v(){let s=ee(),h={rgb:s,hsb:Y(s),oklch:Z(s),hex:U(s)};for(let x of g)x(h)}function y(){let s=N(b,a);return{rgb:s,hsb:Y(s),oklch:Z(s),hex:U(s)}}u(),q();let C=s=>{b=W(s,a),f={x:Math.max(f.x,b.x),y:Math.max(f.y,b.y),z:Math.max(f.z,b.z)};let h=R(b,S.scale,S.center);A=-1;for(let x=$.length-1;x>=0;x--)if(Q(x,h,f,S.scale,S.center)){A=x;break}v(),u(),I()};return{getColor:y,getMode:()=>a,setColor:C,setMode(s){B(s)},on(s,h){g.add(h)},off(s,h){g.delete(h)},destroy(){j=!1,z.destroy(),E!==null&&cancelAnimationFrame(E),e.removeChild(w)}}}function xe(e,o){if(!e)return null;let t=e.trim();try{if(o==="hex")return{rgb:J(t),alpha:1};if(o==="hex-alpha"){let r=t.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!r)return null;let i=J(r[1]),c=r[2]?parseInt(r[2],16)/255:1;return{rgb:i,alpha:c}}if(o==="rgb"){let r=t.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return r?{r:+r[1],g:+r[2],b:+r[3]}:null}if(o==="hsl"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return r?Ye(+r[1],+r[2],+r[3]):null}if(o==="hsv"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return r?he({h:+r[1],s:+r[2],b:+r[3]}):null}if(o==="oklch"||o==="oklcha"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return r?{rgb:te({l:+r[1],c:+r[2],h:+r[3]}),alpha:r[4]!==void 0?Math.min(1,+r[4]):1}:null}}catch{}return null}function ne(e,o,t=1){if(o==="hex")return U(e);if(o==="hex-alpha")return U(e)+(t<1?Math.round(t*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="hsl"){let i=Ze(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%`}if(o==="hsv"){let i=Y(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.b)}%`}let r=Z(e);return`${r.l.toFixed(3)}, ${r.c.toFixed(3)}, ${r.h.toFixed(1)}`}function Ye(e,o,t){let r=o/100,i=t/100,c=(1-Math.abs(2*i-1))*r,d=c*(1-Math.abs(e/60%2-1)),n=i-c/2,a=0,l=0,f=0;return e<60?(a=c,l=d):e<120?(a=d,l=c):e<180?(l=c,f=d):e<240?(l=d,f=c):e<300?(a=d,f=c):(a=c,f=d),{r:Math.round((a+n)*255),g:Math.round((l+n)*255),b:Math.round((f+n)*255)}}function Ze(e){let o=e.r/255,t=e.g/255,r=e.b/255,i=Math.max(o,t,r),c=Math.min(o,t,r),d=(i+c)/2;if(i===c)return{h:0,s:0,l:d*100};let n=i-c,a=d>.5?n/(2-i-c):n/(i+c),l=0;return i===o?l=((t-r)/n+(t<r?6:0))*60:i===t?l=((r-o)/n+2)*60:l=((o-t)/n+4)*60,{h:l,s:a*100,l:d*100}}var ce=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),t=this.getAttribute("mode")||"rgb",r=this.getAttribute("value"),i=r?xe(r,this.model):null;this.alpha=i?.alpha??1;let c=i?.rgb??{r:255,g:255,b:255};if(this.picker=He(this.holder,{initialColor:c,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",n=>{this.internal||(this.internal=!0,this.setAttribute("value",ne(n.rgb,this.model,this.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:n})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ne(n.rgb,this.model,this.alpha)})))}),t&&this.picker.setMode(t),new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]).has(this.model)){let n=document.createElement("input");n.type="range",n.min="0",n.max="100",n.value=String(Math.round(this.alpha*100)),n.style.cssText="width:100%;margin-top:8px;accent-color:#007AFF;",n.setAttribute("aria-label","Alpha"),n.addEventListener("input",()=>{this.alpha=+n.value/100;try{let a=this.picker?.getColor().rgb??{r:255,g:255,b:255},l=ne(a,this.model,this.alpha);this.setAttribute("value",l),this.dispatchEvent(new CustomEvent("color-changed",{detail:l}))}catch{}}),this.appendChild(n)}}attributeChangedCallback(o,t,r){if(!(!this.picker||!r||this.internal))if(o==="value"){let i=xe(r,this.model);i&&(this.alpha=i.alpha,this.picker.setColor(i.rgb))}else o==="mode"&&this.picker.setMode(r)}get value(){return this.getAttribute("value")||ne({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ge=class extends ce{constructor(){super("hex")}},Je=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Je)customElements.get(e)||customElements.define(e,class extends ce{constructor(){super(o)}});var vo=ge;export{ge as ColorIsBoxElement,We as createBoxColorPicker,He as createColorPicker,vo as default,ke as setBoxInvert};
