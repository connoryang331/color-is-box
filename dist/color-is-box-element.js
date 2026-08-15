var ie={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},me={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function J(e){let o=e.r/255,t=e.g/255,r=e.b/255,i=Math.max(o,t,r),c=Math.min(o,t,r),l=i-c,n=0;l!==0&&(i===o?n=((t-r)/l+6)%6:i===t?n=(r-o)/l+2:n=(o-t)/l+4,n*=60);let a=i===0?0:l/i*100,d=i*100;return{h:n,s:a,b:d}}function he(e){let o=e.h,t=e.s/100,r=e.b/100,i=r*t,c=i*(1-Math.abs(o/60%2-1)),l=r-i,n,a,d;return o<60?(n=i,a=c,d=0):o<120?(n=c,a=i,d=0):o<180?(n=0,a=i,d=c):o<240?(n=0,a=c,d=i):o<300?(n=c,a=0,d=i):(n=i,a=0,d=c),{r:Math.round((n+l)*255),g:Math.round((a+l)*255),b:Math.round((d+l)*255)}}function ue(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function be(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Fe(e){let o=ue(e.r/255),t=ue(e.g/255),r=ue(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*r,c=.2119034982*o+.6806995451*t+.1073969566*r,l=.0883024619*o+.2817188376*t+.6299787005*r,n=Math.cbrt(i),a=Math.cbrt(c),d=Math.cbrt(l);return{L:.2104542553*n+.793617785*a-.0040720468*d,a:1.9779984951*n-2.428592205*a+.4505937099*d,b:.0259040371*n+.7827717662*a-.808675766*d}}function Be(e,o,t){let r=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,l=r*r*r,n=i*i*i,a=c*c*c,d=4.0767416621*l-3.3077115913*n+.2309699292*a,b=-1.2684380046*l+2.6097574011*n-.3413193965*a,x=-.0041960863*l-.7034186147*n+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,be(d)))*255),g:Math.round(Math.max(0,Math.min(1,be(b)))*255),b:Math.round(Math.max(0,Math.min(1,be(x)))*255)}}function Q(e){let o=Fe(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function re(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return Be(e.l,t,r)}function Ie(e,o,t){let r=re({l:e,c:o,h:t});if(pe(r))return{l:e,c:o,h:t};let i=0,c=o;for(let l=0;l<20;l++){let n=(i+c)/2;r=re({l:e,c:n,h:t}),pe(r)?i=n:c=n}return{l:e,c:i,h:t}}function pe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function X(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ee(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ye=.4;function K(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return he({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*ye,i=e.z*359,c=Ie(t,r,i);return re(c)}}function Y(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=J(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Q(e);return{x:t.l,y:Math.min(t.c/ye,1),z:t.h/359}}}function ve(e,o){let t=me[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Ce(e,o,t,r,i,c=!1){let l;e===0?l={x:r,y:o,z:t}:e===1?l={x:o,y:r,z:t}:l={x:o,y:t,z:r};let n=K(l,i);return c?{r:255-n.r,g:255-n.g,b:255-n.b}:n}var Me=Math.PI/6,De=Math.cos(Me),Oe=Math.sin(Me),ne=!1;function ke(e){ne=e}function T(e,o,t){return{x:t.x+(e.y-e.x)*De*o,y:t.y+e.z*o-(e.x+e.y)*Oe*o}}function Pe(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var _=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],_e=64,Ae={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function we(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ve(e,o,t,r,i,c,l=!0){let{ctx:n,scale:a,center:d,width:b,height:x}=e;n.save(),n.clearRect(0,0,b,x);let M=Pe(o).map(m=>T(m,a,d));if($e(n,a,d,i),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,Xe(n,M,o,i),n.restore(),l&&Ue(n,i,a,d),r>=0){let m=K(t,i),w=ne?{r:255-m.r,g:255-m.g,b:255-m.b}:m,z=T(t,a,d);Ne(n,z,w)}n.restore()}var Ge={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function $e(e,o,t,r){let i=T({x:0,y:0,z:0},o,t),c=[T({x:1,y:0,z:0},o,t),T({x:0,y:1,z:0},o,t),T({x:0,y:0,z:1},o,t)],l=Ge[r];e.lineWidth=1.5;for(let n=0;n<c.length;n++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(c[n].x,c[n].y),e.strokeStyle=l[n],e.stroke()}function Xe(e,o,t,r){let i=[t.x,t.y,t.z];for(let c=0;c<_.length;c++){let l=_[c],n=i[l.fixedAxis],a=i[l.uAxis],d=i[l.vAxis];if(a<.002&&d<.002)continue;let b=l.quad.map(x=>o[x]);Ke(e,b,l.fixedAxis,n,a,d,r)}}function Ke(e,o,t,r,i,c,l){let n=_e,a=document.createElement("canvas");a.width=n,a.height=n;let d=a.getContext("2d"),b=d.createImageData(n,n),x=b.data;for(let P=0;P<n;P++)for(let I=0;I<n;I++){let j=I/(n-1)*i,q=P/(n-1)*c,G=Ce(t,j,q,r,l,ne),U=(P*n+I)*4;x[U]=G.r,x[U+1]=G.g,x[U+2]=G.b,x[U+3]=255}d.putImageData(b,0,0);let M=o[0],m=o[1],w=o[2],z=o[3],S=m.x-M.x,F=m.y-M.y,B=z.x-M.x,V=z.y-M.y;e.save(),e.beginPath(),e.moveTo(M.x,M.y),e.lineTo(m.x,m.y),e.lineTo(w.x,w.y),e.lineTo(z.x,z.y),e.closePath(),e.clip();let C=2/n,R=M.x-S*C-B*C,H=M.y-F*C-V*C,E=1+2*C,D=1+2*C;e.transform(S*E/n,F*E/n,B*D/n,V*D/n,R,H),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function Ue(e,o,t,r){let i=ie[o],c=ne?[T({x:0,y:1,z:1},t,r),T({x:1,y:0,z:1},t,r),T({x:1,y:1,z:0},t,r)]:[T({x:1,y:0,z:0},t,r),T({x:0,y:1,z:0},t,r),T({x:0,y:0,z:1},t,r)],l=ne?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],a=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(b=>X(K(b,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let d={rgb:[],hsb:[2],oklch:[0]};for(let b=0;b<3;b++){let x=c[b].x+l[b].x,M=c[b].y+l[b].y;e.globalAlpha=.8,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';let m=isGray?"#888888":a[b];e.fillStyle=m,e.fillText(i[b],x,M)}e.globalAlpha=1,e.restore()}function Ne(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Te(e,o,t,r){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return T(i[e],t,r)}function fe(){let e={x:0,y:0};return[T({x:1,y:0,z:0},1,e),T({x:0,y:1,z:0},1,e),T({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function oe(e,o,t,r,i){let c=_[e],l=[t.x,t.y,t.z],n=l[c.uAxis],a=l[c.vAxis];if(n<.002||a<.002)return null;let d={x:0,y:0,z:0},b=["x","y","z"];d[b[c.fixedAxis]]=l[c.fixedAxis];let x={...d};x[b[c.uAxis]]=n;let M={...d};M[b[c.vAxis]]=a;let m=T(d,r,i),w=T(x,r,i),z=T(M,r,i),S=w.x-m.x,F=w.y-m.y,B=z.x-m.x,V=z.y-m.y,C=S*V-F*B;if(Math.abs(C)<1e-6)return null;let R=o.x-m.x,H=o.y-m.y,E=(R*V-H*B)/C,D=(H*S-R*F)/C;return E<-.05||E>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,E)),t:Math.max(0,Math.min(1,D))}}function ze(e,o,t,r,i){let c=_[e],l=[t.x,t.y,t.z],n=l[c.uAxis],a=l[c.vAxis];if(n<.002||a<.002)return null;let d={x:0,y:0,z:0},b=["x","y","z"];d[b[c.fixedAxis]]=l[c.fixedAxis];let x={...d};x[b[c.uAxis]]=n;let M={...d};M[b[c.vAxis]]=a;let m=T(d,r,i),w=T(x,r,i),z=T(M,r,i),S=w.x-m.x,F=w.y-m.y,B=z.x-m.x,V=z.y-m.y,C=S*V-F*B;if(Math.abs(C)<1e-6)return null;let R=o.x-m.x,H=o.y-m.y,E=(R*V-H*B)/C,D=(H*S-R*F)/C;return{s:Math.max(0,Math.min(1,E)),t:Math.max(0,Math.min(1,D))}}var Re=22;function Le(e,o,t,r,i,c,l,n,a){let d={...Ae};function b(h){let g=e.getBoundingClientRect();return{x:h.clientX-g.left,y:h.clientY-g.top}}function x(h){let g=o(),k=l(),p=n();for(let s=0;s<3;s++){let u=Te(s,g,k,p),f=h.x-u.x,v=h.y-u.y;if(f*f+v*v<=Re*Re)return s}return-1}function M(h){let g=o(),k=l(),p=n();for(let s=_.length-1;s>=0;s--){let u=oe(s,h,g,k,p);if(u)return{faceIndex:s,...u}}return null}let m=-1,w={x:0,y:0},z=0;function S(h,g){m=h,w=g,z=o()[["x","y","z"][h]],d.draggingAxisHandle=h,e.style.cursor="grabbing",a()}function F(h){if(m<0)return;let g=h.x-w.x,k=h.y-w.y,s=fe()[m],u=l(),v=(g*s.x+k*s.y)/u,A=Math.max(0,Math.min(1,z+v)),y=o(),L=["x","y","z"],O={...y,[L[m]]:A};t(O);let W=r(),te=c(),N=te>=0?_[te]:null,de={...W};N&&m===N.fixedAxis?de[L[m]]=A:de[L[m]]=Math.min(W[L[m]],A),i(de,c()),a()}function B(){m=-1,d.draggingAxisHandle=-1}let V=-1,C=null,R=null,H=!1;function E(h,g,k,p){V=h,d.draggingFace=h,C=null,R=null,H=!1,p&&(H=!0,R={s:g,t:k}),P(h,g,k),e.style.cursor="crosshair",a()}function D(h,g,k){if(V<0)return;let p=o(),s=l(),u=n(),f=oe(V,h,p,s,u),v=V;if(!f&&!k){for(let L=_.length-1;L>=0;L--)if(L!==V&&(f=oe(L,h,p,s,u),f)){v=L;break}}if(!f&&k&&(f=ze(V,h,p,s,u),v=V),!f){a();return}v!==V&&(V=v,d.draggingFace=v,C=null,H=!1,R=null);let{s:A,t:y}=f;if(g&&R){if(H){let L=Math.abs(A-R.s),O=Math.abs(y-R.t),W=.02;(L>W||O>W)&&(C=L>=O?"u":"v",H=!1)}C==="u"?y=R.t:C==="v"&&(A=R.s)}else g||(C=null,H=!1,R=null);P(v,A,y),a()}function P(h,g,k){let p=_[h],s=o(),u=["x","y","z"],f={...r()};f[u[p.uAxis]]=g*s[u[p.uAxis]],f[u[p.vAxis]]=k*s[u[p.vAxis]],f[u[p.fixedAxis]]=s[u[p.fixedAxis]],i(f,h)}function I(){V=-1,d.draggingFace=-1,C=null,H=!1,R=null}function j(h){let g=b(h),k=x(g);if(k>=0){h.preventDefault(),S(k,g);return}let p=M(g);p&&(h.preventDefault(),E(p.faceIndex,p.s,p.t,h.shiftKey))}function q(h){let g=b(h);if(m>=0){h.preventDefault(),F(g);return}if(V>=0){h.preventDefault(),D(g,h.shiftKey,h.altKey);return}let k=x(g),p=M(g),s=k,u=k>=0?-1:p?p.faceIndex:-1;(s!==d.hoveredAxisHandle||u!==d.hoveredFace)&&(d.hoveredAxisHandle=s,d.hoveredFace=u,e.style.cursor=s>=0?"grab":u>=0?"crosshair":"default",a())}function G(h){let g=m>=0||V>=0;B(),I(),g&&(d.hoveredAxisHandle=-1,d.hoveredFace=-1,e.style.cursor="default",a())}function U(h){if(h.touches.length!==1)return;let g=b(h.touches[0]),k=x(g);if(k>=0){h.preventDefault(),S(k,g);return}let p=M(g);p&&(h.preventDefault(),E(p.faceIndex,p.s,p.t,!1))}function ce(h){if(h.touches.length!==1)return;let g=b(h.touches[0]);m>=0?(h.preventDefault(),F(g)):V>=0&&(h.preventDefault(),D(g,!1,!1))}function le(h){B(),I(),a()}function Z(h){let g=h.shiftKey?.04:.004,k=r(),p=o(),s=fe(),u=0,f=0;switch(h.key){case"ArrowRight":u=1;break;case"ArrowLeft":u=-1;break;case"ArrowUp":f=-1;break;case"ArrowDown":f=1;break;default:return}h.preventDefault();let v={...k},A=["x","y","z"];for(let y=0;y<3;y++){let L=u*s[y].x+f*s[y].y;if(Math.abs(L)>.3){let O=k[A[y]]+g*Math.sign(L);v[A[y]]=Math.max(0,Math.min(p[A[y]],O))}}i(v,c()),a()}e.addEventListener("mousedown",j),window.addEventListener("mousemove",q),window.addEventListener("mouseup",G),e.addEventListener("touchstart",U,{passive:!1}),e.addEventListener("touchmove",ce,{passive:!1}),e.addEventListener("touchend",le),e.addEventListener("keydown",Z),e.setAttribute("tabindex","0");function $(){e.removeEventListener("mousedown",j),window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",G),e.removeEventListener("touchstart",U),e.removeEventListener("touchmove",ce),e.removeEventListener("touchend",le),e.removeEventListener("keydown",Z)}return{state:d,destroy:$}}var Se=`.box-picker {\r
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
`;var He=We,Ee=!1;function qe(){if(Ee||typeof document>"u")return;Ee=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Se,document.head.appendChild(e)}function We(e,o={}){let t=o.size??300,r=o.controls??!0,i=o.showInputs??!1,c=o.showModeToggle??!1,l=o.showCorners??!1,n={mode:()=>a,switchMode:s=>H(s),onHexInput:s=>{let u=ee(s);u?(x=Y(C?{r:255-u.r,g:255-u.g,b:255-u.b}:u,a),b={x:Math.max(b.x,x.x),y:Math.max(b.y,x.y),z:Math.max(b.z,x.z)},g(),$(),I()):$()},onChannelInput:(s,u,f)=>{let v=Math.max(0,Math.min(f,u)),A=["x","y","z"],y=v/f;if(C){let L={...x,[A[s]]:y},O=K(L,a);x=Y({r:255-O.r,g:255-O.g,b:255-O.b},a)}else x={...x,[A[s]]:y};y>b[A[s]]&&(b={...b,[A[s]]:y}),g(),$(),I()},getRgbForCopy:()=>K(x,a),onRandom:s=>p(s),onReset:()=>p({r:0,g:0,b:0})},a=o.mode??"rgb",d=o.initialColor?Y(o.initialColor,a):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},x={...d},M=0,m=new Set;qe();let w=document.createElement("div");w.className="box-picker";let z=document.createElement("canvas");z.style.cursor="grab",w.appendChild(z);let S=we(z,t),F=null,B=document.createElement("div");B.className="box-picker-controls",F=document.createElement("div"),F.className="box-picker-swatch",B.appendChild(F),w.appendChild(B),(i||c||l)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(B,n,{showInputs:i,showModeToggle:c,showCorners:l})}).catch(()=>{}),e.appendChild(w);let V=Le(z,()=>b,s=>{b=s},()=>x,(s,u)=>{x=s,M=u,g(),$()},()=>M,()=>S.scale,()=>S.center,I),C=!1,R=!0;z.addEventListener("mouseenter",()=>{R=Math.random()<.5,I()}),z.addEventListener("mouseleave",()=>{R=Math.random()<.5,I()}),z.addEventListener("dblclick",()=>{C=!C,ke(C),g(),$(),I()});function H(s){if(s===a)return;let u=K(x,a),f={...x},v={...b};a=s;let A=Y(u,a),y={x:1,y:1,z:1};x=A,b=y,D(f,A,v,y,300),$()}let E=null;function D(s,u,f,v,A){E!==null&&cancelAnimationFrame(E);let y=performance.now();function L(O){let W=O-y,te=Math.min(1,W/A),N=1-Math.pow(1-te,3);x={x:s.x+(u.x-s.x)*N,y:s.y+(u.y-s.y)*N,z:s.z+(u.z-s.z)*N},b={x:f.x+(v.x-f.x)*N,y:f.y+(v.y-f.y)*N,z:f.z+(v.z-f.z)*N},j(),g(),te<1?E=requestAnimationFrame(L):E=null}E=requestAnimationFrame(L)}let P=!1;function I(){P||(P=!0,requestAnimationFrame(()=>{P=!1,j()}))}function j(){Ve(S,b,x,M,a,V.state,R)}function q(s,u,f){return Math.round(s+(u-s)*f)}function G(s,u){let f=u>0?255:0,v=Math.abs(u);return X({r:q(s.r,f,v),g:q(s.g,f,v),b:q(s.b,f,v)})}function U(s,u){let f=ee(u)||{r:128,g:128,b:128},v=G(f,.35),A=G(f,0),y=G(f,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${v}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${A}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${y}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function ce(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function le(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function Z(){let s=K(x,a);return C?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function $(){if(!r)return;let s=Z(),u=X(s);F&&U(F,u);let f=w.querySelector(".box-picker-hex");f&&(f.value=u),h(),w._updateModeButtons&&w._updateModeButtons()}function h(){if(!r)return;let s=ie[a],u=C?Y(Z(),a):x,f=ve(u,a),v=w.querySelectorAll(".box-picker-channel input"),A=w.querySelectorAll(".box-picker-channel label");for(let y=0;y<v.length;y++)A[y].textContent=s[y],A[y].style.color="",A[y].style.textShadow="none",v[y].value=String(f[y])}function g(){let s=Z(),u={rgb:s,hsb:J(s),oklch:Q(s),hex:X(s)};for(let f of m)f(u)}function k(){let s=K(x,a);return{rgb:s,hsb:J(s),oklch:Q(s),hex:X(s)}}$(),j();let p=s=>{x=Y(s,a),b={x:Math.max(b.x,x.x),y:Math.max(b.y,x.y),z:Math.max(b.z,x.z)};let u=T(x,S.scale,S.center);M=-1;for(let f=_.length-1;f>=0;f--)if(oe(f,u,b,S.scale,S.center)){M=f;break}g(),$(),I()};return{getColor:k,getMode:()=>a,setColor:p,setMode(s){H(s)},on(s,u){m.add(u)},off(s,u){m.delete(u)},destroy(){V.destroy(),E!==null&&cancelAnimationFrame(E),e.removeChild(w)}}}function xe(e,o){if(!e)return null;let t=e.trim();try{if(o==="hex")return{rgb:ee(t),alpha:1};if(o==="hex-alpha"){let r=t.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!r)return null;let i=ee(r[1]),c=r[2]?parseInt(r[2],16)/255:1;return{rgb:i,alpha:c}}if(o==="rgb"){let r=t.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return r?{r:+r[1],g:+r[2],b:+r[3]}:null}if(o==="hsl"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return r?Ye(+r[1],+r[2],+r[3]):null}if(o==="hsv"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return r?he({h:+r[1],s:+r[2],b:+r[3]}):null}if(o==="oklch"||o==="oklcha"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return r?{rgb:re({l:+r[1],c:+r[2],h:+r[3]}),alpha:r[4]!==void 0?Math.min(1,+r[4]):1}:null}}catch{}return null}function se(e,o,t=1){if(o==="hex")return X(e);if(o==="hex-alpha")return X(e)+(t<1?Math.round(t*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="hsl"){let i=Ze(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%`}if(o==="hsv"){let i=J(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.b)}%`}let r=Q(e);return`${r.l.toFixed(3)}, ${r.c.toFixed(3)}, ${r.h.toFixed(1)}`}function Ye(e,o,t){let r=o/100,i=t/100,c=(1-Math.abs(2*i-1))*r,l=c*(1-Math.abs(e/60%2-1)),n=i-c/2,a=0,d=0,b=0;return e<60?(a=c,d=l):e<120?(a=l,d=c):e<180?(d=c,b=l):e<240?(d=l,b=c):e<300?(a=l,b=c):(a=c,b=l),{r:Math.round((a+n)*255),g:Math.round((d+n)*255),b:Math.round((b+n)*255)}}function Ze(e){let o=e.r/255,t=e.g/255,r=e.b/255,i=Math.max(o,t,r),c=Math.min(o,t,r),l=(i+c)/2;if(i===c)return{h:0,s:0,l:l*100};let n=i-c,a=l>.5?n/(2-i-c):n/(i+c),d=0;return i===o?d=((t-r)/n+(t<r?6:0))*60:i===t?d=((r-o)/n+2)*60:d=((o-t)/n+4)*60,{h:d,s:a*100,l:l*100}}var ae=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),t=this.getAttribute("mode")||"rgb",r=this.getAttribute("value"),i=r?xe(r,this.model):null;this.alpha=i?.alpha??1;let c=i?.rgb??{r:255,g:255,b:255};if(this.picker=He(this.holder,{initialColor:c,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",n=>{this.internal||(this.internal=!0,this.setAttribute("value",se(n.rgb,this.model,this.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:n})),this.dispatchEvent(new CustomEvent("color-changed",{detail:se(n.rgb,this.model,this.alpha)})))}),t&&this.picker.setMode(t),new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]).has(this.model)){let n=document.createElement("input");n.type="range",n.min="0",n.max="100",n.value=String(Math.round(this.alpha*100)),n.style.cssText="width:100%;margin-top:8px;accent-color:#007AFF;",n.setAttribute("aria-label","Alpha"),n.addEventListener("input",()=>{this.alpha=+n.value/100;try{let a=this.picker?.getColor().rgb??{r:255,g:255,b:255},d=se(a,this.model,this.alpha);this.setAttribute("value",d),this.dispatchEvent(new CustomEvent("color-changed",{detail:d}))}catch{}}),this.appendChild(n)}}attributeChangedCallback(o,t,r){if(!(!this.picker||!r||this.internal))if(o==="value"){let i=xe(r,this.model);i&&(this.alpha=i.alpha,this.picker.setColor(i.rgb))}else o==="mode"&&this.picker.setMode(r)}get value(){return this.getAttribute("value")||se({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ge=class extends ae{constructor(){super("hex")}},Je=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Je)customElements.get(e)||customElements.define(e,class extends ae{constructor(){super(o)}});var vo=ge;export{ge as ColorIsBoxElement,We as createBoxColorPicker,He as createColorPicker,vo as default,ke as setBoxInvert};
