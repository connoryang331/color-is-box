var ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},ge={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Y(e){let o=e.r/255,t=e.g/255,r=e.b/255,i=Math.max(o,t,r),s=Math.min(o,t,r),l=i-s,a=0;l!==0&&(i===o?a=((t-r)/l+6)%6:i===t?a=(r-o)/l+2:a=(o-t)/l+4,a*=60);let c=i===0?0:l/i*100,d=i*100;return{h:a,s:c,b:d}}function he(e){let o=e.h,t=e.s/100,r=e.b/100,i=r*t,s=i*(1-Math.abs(o/60%2-1)),l=r-i,a,c,d;return o<60?(a=i,c=s,d=0):o<120?(a=s,c=i,d=0):o<180?(a=0,c=i,d=s):o<240?(a=0,c=s,d=i):o<300?(a=s,c=0,d=i):(a=i,c=0,d=s),{r:Math.round((a+l)*255),g:Math.round((c+l)*255),b:Math.round((d+l)*255)}}function ue(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function be(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Fe(e){let o=ue(e.r/255),t=ue(e.g/255),r=ue(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*r,s=.2119034982*o+.6806995451*t+.1073969566*r,l=.0883024619*o+.2817188376*t+.6299787005*r,a=Math.cbrt(i),c=Math.cbrt(s),d=Math.cbrt(l);return{L:.2104542553*a+.793617785*c-.0040720468*d,a:1.9779984951*a-2.428592205*c+.4505937099*d,b:.0259040371*a+.7827717662*c-.808675766*d}}function Be(e,o,t){let r=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,s=e-.0894841775*o-1.291485548*t,l=r*r*r,a=i*i*i,c=s*s*s,d=4.0767416621*l-3.3077115913*a+.2309699292*c,f=-1.2684380046*l+2.6097574011*a-.3413193965*c,b=-.0041960863*l-.7034186147*a+1.707614701*c;return{r:Math.round(Math.max(0,Math.min(1,be(d)))*255),g:Math.round(Math.max(0,Math.min(1,be(f)))*255),b:Math.round(Math.max(0,Math.min(1,be(b)))*255)}}function Z(e){let o=Fe(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function te(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return Be(e.l,t,r)}function Ie(e,o,t){let r=te({l:e,c:o,h:t});if(pe(r))return{l:e,c:o,h:t};let i=0,s=o;for(let l=0;l<20;l++){let a=(i+s)/2;r=te({l:e,c:a,h:t}),pe(r)?i=a:s=a}return{l:e,c:i,h:t}}function pe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function U(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function J(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ye=.4;function N(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return he({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*ye,i=e.z*359,s=Ie(t,r,i);return te(s)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=Y(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Z(e);return{x:t.l,y:Math.min(t.c/ye,1),z:t.h/359}}}function ve(e,o){let t=ge[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Ce(e,o,t,r,i,s=!1){let l;e===0?l={x:r,y:o,z:t}:e===1?l={x:o,y:r,z:t}:l={x:o,y:t,z:r};let a=N(l,i);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Me=Math.PI/6,De=Math.cos(Me),Oe=Math.sin(Me),re=!1;function ke(e){re=e}function R(e,o,t){return{x:t.x+(e.y-e.x)*De*o,y:t.y+e.z*o-(e.x+e.y)*Oe*o}}function Pe(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var $=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Ge=128,Ae={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function we(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ve(e,o,t,r,i,s,l=!0){let{ctx:a,scale:c,center:d,width:f,height:b}=e;a.save(),a.clearRect(0,0,f,b);let A=Pe(o).map(m=>R(m,c,d));if($e(a,c,d,i),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,Xe(a,A,o,i),a.restore(),l&&Ue(a,i,c,d),r>=0){let m=N(t,i),w=re?{r:255-m.r,g:255-m.g,b:255-m.b}:m,T=R(t,c,d);Ne(a,T,w)}a.restore()}var _e={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function $e(e,o,t,r){let i=R({x:0,y:0,z:0},o,t),s=[R({x:1,y:0,z:0},o,t),R({x:0,y:1,z:0},o,t),R({x:0,y:0,z:1},o,t)],l=_e[r];e.lineWidth=1.5;for(let a=0;a<s.length;a++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(s[a].x,s[a].y),e.strokeStyle=l[a],e.stroke()}function Xe(e,o,t,r){let i=[t.x,t.y,t.z];for(let s=0;s<$.length;s++){let l=$[s],a=i[l.fixedAxis],c=i[l.uAxis],d=i[l.vAxis];if(c<.002&&d<.002)continue;let f=l.quad.map(b=>o[b]);Ke(e,f,l.fixedAxis,a,c,d,r)}}function Ke(e,o,t,r,i,s,l){let a=Ge,c=document.createElement("canvas");c.width=a,c.height=a;let d=c.getContext("2d"),f=d.createImageData(a,a),b=f.data;for(let O=0;O<a;O++)for(let I=0;I<a;I++){let j=I/(a-1)*i,q=O/(a-1)*s,X=Ce(t,j,q,r,l,re),P=(O*a+I)*4;b[P]=X.r,b[P+1]=X.g,b[P+2]=X.b,b[P+3]=255}d.putImageData(f,0,0);let A=o[0],m=o[1],w=o[2],T=o[3],S=m.x-A.x,E=m.y-A.y,F=T.x-A.x,z=T.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(m.x,m.y),e.lineTo(w.x,w.y),e.lineTo(T.x,T.y),e.closePath(),e.clip();let M=2/a,L=A.x-S*M-F*M,B=A.y-E*M-z*M,H=1+2*M,D=1+2*M;e.transform(S*H/a,E*H/a,F*D/a,z*D/a,L,B),e.imageSmoothingEnabled=!0,e.drawImage(c,0,0),e.restore()}function Ue(e,o,t,r){let i=ae[o],s=re?[R({x:0,y:1,z:1},t,r),R({x:1,y:0,z:1},t,r),R({x:1,y:1,z:0},t,r)]:[R({x:1,y:0,z:0},t,r),R({x:0,y:1,z:0},t,r),R({x:0,y:0,z:1},t,r)],l=re?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],c=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(b=>U(N(b,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let d={rgb:[],hsb:[2],oklch:[0]},f=performance.now()/1e3;for(let b=0;b<3;b++){let A=s[b].x+l[b].x,m=s[b].y+l[b].y,w=f*1.8+b*2.1,T=.62+.38*(.5+.5*Math.sin(w)),S=11+Math.round(1.6*(.5+.5*Math.sin(w)));e.globalAlpha=T,e.font=`bold ${S}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let F=d[o].includes(b)?"#888888":c[b];e.fillStyle=F,e.fillText(i[b],A,m)}e.globalAlpha=1,e.restore()}function Ne(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Te(e,o,t,r){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(i[e],t,r)}function fe(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function Q(e,o,t,r,i){let s=$[e],l=[t.x,t.y,t.z],a=l[s.uAxis],c=l[s.vAxis];if(a<.002||c<.002)return null;let d={x:0,y:0,z:0},f=["x","y","z"];d[f[s.fixedAxis]]=l[s.fixedAxis];let b={...d};b[f[s.uAxis]]=a;let A={...d};A[f[s.vAxis]]=c;let m=R(d,r,i),w=R(b,r,i),T=R(A,r,i),S=w.x-m.x,E=w.y-m.y,F=T.x-m.x,z=T.y-m.y,M=S*z-E*F;if(Math.abs(M)<1e-6)return null;let L=o.x-m.x,B=o.y-m.y,H=(L*z-B*F)/M,D=(B*S-L*E)/M;return H<-.05||H>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,D))}}function ze(e,o,t,r,i){let s=$[e],l=[t.x,t.y,t.z],a=l[s.uAxis],c=l[s.vAxis];if(a<.002||c<.002)return null;let d={x:0,y:0,z:0},f=["x","y","z"];d[f[s.fixedAxis]]=l[s.fixedAxis];let b={...d};b[f[s.uAxis]]=a;let A={...d};A[f[s.vAxis]]=c;let m=R(d,r,i),w=R(b,r,i),T=R(A,r,i),S=w.x-m.x,E=w.y-m.y,F=T.x-m.x,z=T.y-m.y,M=S*z-E*F;if(Math.abs(M)<1e-6)return null;let L=o.x-m.x,B=o.y-m.y,H=(L*z-B*F)/M,D=(B*S-L*E)/M;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,D))}}var Re=22;function Le(e,o,t,r,i,s,l,a,c){let d={...Ae};function f(u){let g=e.getBoundingClientRect();return{x:u.clientX-g.left,y:u.clientY-g.top}}function b(u){let g=o(),v=l(),y=a();for(let C=0;C<3;C++){let n=Te(C,g,v,y),h=u.x-n.x,x=u.y-n.y;if(h*h+x*x<=Re*Re)return C}return-1}function A(u){let g=o(),v=l(),y=a();for(let C=$.length-1;C>=0;C--){let n=Q(C,u,g,v,y);if(n)return{faceIndex:C,...n}}return null}let m=-1,w={x:0,y:0},T=0;function S(u,g){m=u,w=g,T=o()[["x","y","z"][u]],d.draggingAxisHandle=u,e.style.cursor="grabbing",c()}function E(u){if(m<0)return;let g=u.x-w.x,v=u.y-w.y,C=fe()[m],n=l(),x=(g*C.x+v*C.y)/n,V=Math.max(0,Math.min(1,T+x)),k=o(),p=["x","y","z"],G={...k,[p[m]]:V};t(G);let _=r(),ie=s(),oe=ie>=0?$[ie]:null,K={..._};oe&&m===oe.fixedAxis?K[p[m]]=V:K[p[m]]=Math.min(_[p[m]],V),i(K,s()),c()}function F(){m=-1,d.draggingAxisHandle=-1}let z=-1,M=null,L=null,B=!1;function H(u,g,v,y){z=u,d.draggingFace=u,M=null,L=null,B=!1,y&&(B=!0,L={s:g,t:v}),O(u,g,v),e.style.cursor="crosshair",c()}function D(u,g,v){if(z<0)return;let y=o(),C=l(),n=a(),h=Q(z,u,y,C,n),x=z;if(!h&&!v){for(let p=$.length-1;p>=0;p--)if(p!==z&&(h=Q(p,u,y,C,n),h)){x=p;break}}if(!h&&v&&(h=ze(z,u,y,C,n),x=z),!h){c();return}x!==z&&(z=x,d.draggingFace=x,M=null,B=!1,L=null);let{s:V,t:k}=h;if(g&&L){if(B){let p=Math.abs(V-L.s),G=Math.abs(k-L.t),_=.02;(p>_||G>_)&&(M=p>=G?"u":"v",B=!1)}M==="u"?k=L.t:M==="v"&&(V=L.s)}else g||(M=null,B=!1,L=null);O(x,V,k),c()}function O(u,g,v){let y=$[u],C=o(),n=["x","y","z"],h={...r()};h[n[y.uAxis]]=g*C[n[y.uAxis]],h[n[y.vAxis]]=v*C[n[y.vAxis]],h[n[y.fixedAxis]]=C[n[y.fixedAxis]],i(h,u)}function I(){z=-1,d.draggingFace=-1,M=null,B=!1,L=null}function j(u){let g=f(u),v=b(g);if(v>=0){u.preventDefault(),S(v,g);return}let y=A(g);y&&(u.preventDefault(),H(y.faceIndex,y.s,y.t,u.shiftKey))}function q(u){let g=f(u);if(m>=0){u.preventDefault(),E(g);return}if(z>=0){u.preventDefault(),D(g,u.shiftKey,u.altKey);return}let v=b(g),y=A(g),C=v,n=v>=0?-1:y?y.faceIndex:-1;(C!==d.hoveredAxisHandle||n!==d.hoveredFace)&&(d.hoveredAxisHandle=C,d.hoveredFace=n,e.style.cursor=C>=0?"grab":n>=0?"crosshair":"default",c())}function X(u){let g=m>=0||z>=0;F(),I(),g&&(d.hoveredAxisHandle=-1,d.hoveredFace=-1,e.style.cursor="default",c())}function P(u){if(u.touches.length!==1)return;let g=f(u.touches[0]),v=b(g);if(v>=0){u.preventDefault(),S(v,g);return}let y=A(g);y&&(u.preventDefault(),H(y.faceIndex,y.s,y.t,!1))}function ne(u){if(u.touches.length!==1)return;let g=f(u.touches[0]);m>=0?(u.preventDefault(),E(g)):z>=0&&(u.preventDefault(),D(g,!1,!1))}function le(u){F(),I(),c()}function de(u){let g=u.shiftKey?.04:.004,v=r(),y=o(),C=fe(),n=0,h=0;switch(u.key){case"ArrowRight":n=1;break;case"ArrowLeft":n=-1;break;case"ArrowUp":h=-1;break;case"ArrowDown":h=1;break;default:return}u.preventDefault();let x={...v},V=["x","y","z"];for(let k=0;k<3;k++){let p=n*C[k].x+h*C[k].y;if(Math.abs(p)>.3){let G=v[V[k]]+g*Math.sign(p);x[V[k]]=Math.max(0,Math.min(y[V[k]],G))}}i(x,s()),c()}e.addEventListener("mousedown",j),window.addEventListener("mousemove",q),window.addEventListener("mouseup",X),e.addEventListener("touchstart",P,{passive:!1}),e.addEventListener("touchmove",ne,{passive:!1}),e.addEventListener("touchend",le),e.addEventListener("keydown",de),e.setAttribute("tabindex","0");function ee(){e.removeEventListener("mousedown",j),window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",X),e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",ne),e.removeEventListener("touchend",le),e.removeEventListener("keydown",de)}return{state:d,destroy:ee}}var Se=`.box-picker {\r
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
`;var Ee=We,He=!1;function je(){if(He||typeof document>"u")return;He=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Se,document.head.appendChild(e)}function We(e,o={}){let t=o.size??300,r=o.controls??!0,i=o.showInputs??!1,s=o.showModeToggle??!1,l=o.showCorners??!1,a={mode:()=>c,switchMode:n=>B(n),onHexInput:n=>{let h=J(n);h?(b=W(M?{r:255-h.r,g:255-h.g,b:255-h.b}:h,c),f={x:Math.max(f.x,b.x),y:Math.max(f.y,b.y),z:Math.max(f.z,b.z)},v(),u(),I()):u()},onChannelInput:(n,h,x)=>{let V=Math.max(0,Math.min(x,h)),k=["x","y","z"],p=V/x;if(M){let G={...b,[k[n]]:p},_=N(G,c);b=W({r:255-_.r,g:255-_.g,b:255-_.b},c)}else b={...b,[k[n]]:p};p>f[k[n]]&&(f={...f,[k[n]]:p}),v(),u(),I()},getRgbForCopy:()=>N(b,c),onRandom:n=>C(n),onReset:()=>C({r:0,g:0,b:0})},c=o.mode??"rgb",d=o.initialColor?W(o.initialColor,c):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},b={...d},A=0,m=new Set;je();let w=document.createElement("div");w.className="box-picker";let T=document.createElement("canvas");T.style.cursor="grab",w.appendChild(T);let S=we(T,t),E=null,F=document.createElement("div");F.className="box-picker-controls",E=document.createElement("div"),E.className="box-picker-swatch",F.appendChild(E),w.appendChild(F),(i||s||l)&&import("./controls-VBFXR3DH.js").then(n=>{n.createControls(F,a,{showInputs:i,showModeToggle:s,showCorners:l})}).catch(()=>{}),e.appendChild(w);let z=Le(T,()=>f,n=>{f=n},()=>b,(n,h)=>{b=n,A=h,v(),u()},()=>A,()=>S.scale,()=>S.center,I),M=!1,L=!0;T.addEventListener("mouseenter",()=>{L=Math.random()<.5,I()}),T.addEventListener("mouseleave",()=>{L=Math.random()<.5,I()}),T.addEventListener("dblclick",()=>{M=!M,ke(M),v(),u(),I()});function B(n){if(n===c)return;let h=N(b,c),x={...b},V={...f};c=n;let k=W(h,c),p={x:1,y:1,z:1};b=k,f=p,D(x,k,V,p,300),u()}let H=null;function D(n,h,x,V,k){H!==null&&cancelAnimationFrame(H);let p=performance.now();function G(_){let ie=_-p,oe=Math.min(1,ie/k),K=1-Math.pow(1-oe,3);b={x:n.x+(h.x-n.x)*K,y:n.y+(h.y-n.y)*K,z:n.z+(h.z-n.z)*K},f={x:x.x+(V.x-x.x)*K,y:x.y+(V.y-x.y)*K,z:x.z+(V.z-x.z)*K},q(),v(),oe<1?H=requestAnimationFrame(G):H=null}H=requestAnimationFrame(G)}let O=!1;function I(){O||(O=!0,requestAnimationFrame(()=>{O=!1,q()}))}let j=!0;(function n(){j&&(I(),requestAnimationFrame(n))})();function q(){Ve(S,f,b,A,c,z.state,L)}function X(n,h,x){return Math.round(n+(h-n)*x)}function P(n,h){let x=h>0?255:0,V=Math.abs(h);return U({r:X(n.r,x,V),g:X(n.g,x,V),b:X(n.b,x,V)})}function ne(n,h){let x=J(h)||{r:128,g:128,b:128},V=P(x,.35),k=P(x,0),p=P(x,-.35);n.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${k}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${p}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,n.style.backgroundColor="transparent"}function le(n){try{navigator.clipboard.writeText(n).catch(()=>{})}catch{}}function de(n){n&&(n.style.borderColor="#4ade80",n.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{n.style.borderColor="",n.style.boxShadow=""},500))}function ee(){let n=N(b,c);return M?{r:255-n.r,g:255-n.g,b:255-n.b}:n}function u(){if(!r)return;let n=ee(),h=U(n);E&&ne(E,h);let x=w.querySelector(".box-picker-hex");x&&(x.value=h),g(),w._updateModeButtons&&w._updateModeButtons()}function g(){if(!r)return;let n=ae[c],h=M?W(ee(),c):b,x=ve(h,c),V=w.querySelectorAll(".box-picker-channel input"),k=w.querySelectorAll(".box-picker-channel label");for(let p=0;p<V.length;p++)k[p].textContent=n[p],k[p].style.color="",k[p].style.textShadow="none",V[p].value=String(x[p])}function v(){let n=ee(),h={rgb:n,hsb:Y(n),oklch:Z(n),hex:U(n)};for(let x of m)x(h)}function y(){let n=N(b,c);return{rgb:n,hsb:Y(n),oklch:Z(n),hex:U(n)}}u(),q();let C=n=>{b=W(n,c),f={x:Math.max(f.x,b.x),y:Math.max(f.y,b.y),z:Math.max(f.z,b.z)};let h=R(b,S.scale,S.center);A=-1;for(let x=$.length-1;x>=0;x--)if(Q(x,h,f,S.scale,S.center)){A=x;break}v(),u(),I()};return{getColor:y,getMode:()=>c,setColor:C,setMode(n){B(n)},on(n,h){m.add(h)},off(n,h){m.delete(h)},destroy(){j=!1,z.destroy(),H!==null&&cancelAnimationFrame(H),e.removeChild(w)}}}function xe(e,o){if(!e)return null;let t=e.trim();try{if(o==="hex")return{rgb:J(t),alpha:1};if(o==="hex-alpha"){let r=t.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!r)return null;let i=J(r[1]),s=r[2]?parseInt(r[2],16)/255:1;return{rgb:i,alpha:s}}if(o==="rgb"){let r=t.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return r?{r:+r[1],g:+r[2],b:+r[3]}:null}if(o==="hsl"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return r?Ye(+r[1],+r[2],+r[3]):null}if(o==="hsv"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return r?he({h:+r[1],s:+r[2],b:+r[3]}):null}if(o==="oklch"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);return r?te({l:+r[1],c:+r[2],h:+r[3]}):null}}catch{}return null}function se(e,o,t=1){if(o==="hex")return U(e);if(o==="hex-alpha")return U(e)+(t<1?Math.round(t*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="hsl"){let i=Ze(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%`}if(o==="hsv"){let i=Y(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.b)}%`}let r=Z(e);return`${r.l.toFixed(3)}, ${r.c.toFixed(3)}, ${r.h.toFixed(1)}`}function Ye(e,o,t){let r=o/100,i=t/100,s=(1-Math.abs(2*i-1))*r,l=s*(1-Math.abs(e/60%2-1)),a=i-s/2,c=0,d=0,f=0;return e<60?(c=s,d=l):e<120?(c=l,d=s):e<180?(d=s,f=l):e<240?(d=l,f=s):e<300?(c=l,f=s):(c=s,f=l),{r:Math.round((c+a)*255),g:Math.round((d+a)*255),b:Math.round((f+a)*255)}}function Ze(e){let o=e.r/255,t=e.g/255,r=e.b/255,i=Math.max(o,t,r),s=Math.min(o,t,r),l=(i+s)/2;if(i===s)return{h:0,s:0,l:l*100};let a=i-s,c=l>.5?a/(2-i-s):a/(i+s),d=0;return i===o?d=((t-r)/a+(t<r?6:0))*60:i===t?d=((r-o)/a+2)*60:d=((o-t)/a+4)*60,{h:d,s:c*100,l:l*100}}var ce=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),t=this.getAttribute("mode")||"rgb",r=this.getAttribute("value"),i=r?xe(r,this.model):null;this.alpha=i?.alpha??1;let s=i?.rgb??{r:255,g:255,b:255};this.picker=Ee(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",l=>{this.internal||(this.internal=!0,this.setAttribute("value",se(l.rgb,this.model,this.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:l})),this.dispatchEvent(new CustomEvent("color-changed",{detail:se(l.rgb,this.model,this.alpha)})))}),t&&this.picker.setMode(t)}attributeChangedCallback(o,t,r){if(!(!this.picker||!r||this.internal))if(o==="value"){let i=xe(r,this.model);i&&(this.alpha=i.alpha,this.picker.setColor(i.rgb))}else o==="mode"&&this.picker.setMode(r)}get value(){return this.getAttribute("value")||se({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},me=class extends ce{constructor(){super("hex")}},Je=[["color-is-box","hex"],["color-is-box-rgb","rgb"],["color-is-box-hsl","hsl"],["color-is-box-hsv","hsv"],["color-is-box-oklch","oklch"],["color-is-box-hex-alpha","hex-alpha"],["color-is-box-rgba","rgba"],["color-is-box-hsla","hsla"],["color-is-box-hsva","hsva"]];for(let[e,o]of Je)customElements.get(e)||customElements.define(e,class extends ce{constructor(){super(o)}});var vo=me;export{me as ColorIsBoxElement,We as createBoxColorPicker,Ee as createColorPicker,vo as default,ke as setBoxInvert};
