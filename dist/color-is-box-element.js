var se={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},me={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function J(e){let o=e.r/255,t=e.g/255,r=e.b/255,s=Math.max(o,t,r),c=Math.min(o,t,r),d=s-c,n=0;d!==0&&(s===o?n=((t-r)/d+6)%6:s===t?n=(r-o)/d+2:n=(o-t)/d+4,n*=60);let a=s===0?0:d/s*100,l=s*100;return{h:n,s:a,b:l}}function he(e){let o=e.h,t=e.s/100,r=e.b/100,s=r*t,c=s*(1-Math.abs(o/60%2-1)),d=r-s,n,a,l;return o<60?(n=s,a=c,l=0):o<120?(n=c,a=s,l=0):o<180?(n=0,a=s,l=c):o<240?(n=0,a=c,l=s):o<300?(n=c,a=0,l=s):(n=s,a=0,l=c),{r:Math.round((n+d)*255),g:Math.round((a+d)*255),b:Math.round((l+d)*255)}}function ue(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function be(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Fe(e){let o=ue(e.r/255),t=ue(e.g/255),r=ue(e.b/255),s=.4122214708*o+.5363325363*t+.0514459929*r,c=.2119034982*o+.6806995451*t+.1073969566*r,d=.0883024619*o+.2817188376*t+.6299787005*r,n=Math.cbrt(s),a=Math.cbrt(c),l=Math.cbrt(d);return{L:.2104542553*n+.793617785*a-.0040720468*l,a:1.9779984951*n-2.428592205*a+.4505937099*l,b:.0259040371*n+.7827717662*a-.808675766*l}}function Be(e,o,t){let r=e+.3963377774*o+.2158037573*t,s=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,d=r*r*r,n=s*s*s,a=c*c*c,l=4.0767416621*d-3.3077115913*n+.2309699292*a,f=-1.2684380046*d+2.6097574011*n-.3413193965*a,x=-.0041960863*d-.7034186147*n+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,be(l)))*255),g:Math.round(Math.max(0,Math.min(1,be(f)))*255),b:Math.round(Math.max(0,Math.min(1,be(x)))*255)}}function Q(e){let o=Fe(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function re(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return Be(e.l,t,r)}function Ie(e,o,t){let r=re({l:e,c:o,h:t});if(pe(r))return{l:e,c:o,h:t};let s=0,c=o;for(let d=0;d<20;d++){let n=(s+c)/2;r=re({l:e,c:n,h:t}),pe(r)?s=n:c=n}return{l:e,c:s,h:t}}function pe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function q(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ee(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ye=.4;function U(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return he({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*ye,s=e.z*359,c=Ie(t,r,s);return re(c)}}function Y(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=J(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Q(e);return{x:t.l,y:Math.min(t.c/ye,1),z:t.h/359}}}function ve(e,o){let t=me[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Ce(e,o,t,r,s,c=!1){let d;e===0?d={x:r,y:o,z:t}:e===1?d={x:o,y:r,z:t}:d={x:o,y:t,z:r};let n=U(d,s);return c?{r:255-n.r,g:255-n.g,b:255-n.b}:n}var Me=Math.PI/6,De=Math.cos(Me),Oe=Math.sin(Me),ne=!1;function ke(e){ne=e}function T(e,o,t){return{x:t.x+(e.y-e.x)*De*o,y:t.y+e.z*o-(e.x+e.y)*Oe*o}}function Pe(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var G=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Ge=64,Ae={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function we(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ve(e,o,t,r,s,c,d=!0){let{ctx:n,scale:a,center:l,width:f,height:x}=e;n.save(),n.clearRect(0,0,f,x);let A=Pe(o).map(m=>T(m,a,l));if($e(n,a,l,s),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,Xe(n,A,o,s),n.restore(),d&&Ue(n,s,a,l),r>=0){let m=U(t,s),w=ne?{r:255-m.r,g:255-m.g,b:255-m.b}:m,z=T(t,a,l);Ne(n,z,w)}n.restore()}var _e={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function $e(e,o,t,r){let s=T({x:0,y:0,z:0},o,t),c=[T({x:1,y:0,z:0},o,t),T({x:0,y:1,z:0},o,t),T({x:0,y:0,z:1},o,t)],d=_e[r];e.lineWidth=1.5;for(let n=0;n<c.length;n++)e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(c[n].x,c[n].y),e.strokeStyle=d[n],e.stroke()}function Xe(e,o,t,r){let s=[t.x,t.y,t.z];for(let c=0;c<G.length;c++){let d=G[c],n=s[d.fixedAxis],a=s[d.uAxis],l=s[d.vAxis];if(a<.002&&l<.002)continue;let f=d.quad.map(x=>o[x]);Ke(e,f,d.fixedAxis,n,a,l,r)}}function Ke(e,o,t,r,s,c,d){let n=Ge,a=document.createElement("canvas");a.width=n,a.height=n;let l=a.getContext("2d"),f=l.createImageData(n,n),x=f.data;for(let P=0;P<n;P++)for(let I=0;I<n;I++){let N=I/(n-1)*s,j=P/(n-1)*c,_=Ce(t,N,j,r,d,ne),X=(P*n+I)*4;x[X]=_.r,x[X+1]=_.g,x[X+2]=_.b,x[X+3]=255}l.putImageData(f,0,0);let A=o[0],m=o[1],w=o[2],z=o[3],S=m.x-A.x,F=m.y-A.y,B=z.x-A.x,V=z.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(m.x,m.y),e.lineTo(w.x,w.y),e.lineTo(z.x,z.y),e.closePath(),e.clip();let C=2/n,L=A.x-S*C-B*C,E=A.y-F*C-V*C,H=1+2*C,D=1+2*C;e.transform(S*H/n,F*H/n,B*D/n,V*D/n,L,E),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function Ue(e,o,t,r){let s=se[o],c=ne?[T({x:0,y:1,z:1},t,r),T({x:1,y:0,z:1},t,r),T({x:1,y:1,z:0},t,r)]:[T({x:1,y:0,z:0},t,r),T({x:0,y:1,z:0},t,r),T({x:0,y:0,z:1},t,r)],d=ne?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let n=0;n<3;n++){let a=c[n].x+d[n].x,l=c[n].y+d[n].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(s[n],a,l)}e.globalAlpha=1,e.restore()}function Ne(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Te(e,o,t,r){let s=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return T(s[e],t,r)}function fe(){let e={x:0,y:0};return[T({x:1,y:0,z:0},1,e),T({x:0,y:1,z:0},1,e),T({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function oe(e,o,t,r,s){let c=G[e],d=[t.x,t.y,t.z],n=d[c.uAxis],a=d[c.vAxis];if(n<.002||a<.002)return null;let l={x:0,y:0,z:0},f=["x","y","z"];l[f[c.fixedAxis]]=d[c.fixedAxis];let x={...l};x[f[c.uAxis]]=n;let A={...l};A[f[c.vAxis]]=a;let m=T(l,r,s),w=T(x,r,s),z=T(A,r,s),S=w.x-m.x,F=w.y-m.y,B=z.x-m.x,V=z.y-m.y,C=S*V-F*B;if(Math.abs(C)<1e-6)return null;let L=o.x-m.x,E=o.y-m.y,H=(L*V-E*B)/C,D=(E*S-L*F)/C;return H<-.05||H>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,D))}}function ze(e,o,t,r,s){let c=G[e],d=[t.x,t.y,t.z],n=d[c.uAxis],a=d[c.vAxis];if(n<.002||a<.002)return null;let l={x:0,y:0,z:0},f=["x","y","z"];l[f[c.fixedAxis]]=d[c.fixedAxis];let x={...l};x[f[c.uAxis]]=n;let A={...l};A[f[c.vAxis]]=a;let m=T(l,r,s),w=T(x,r,s),z=T(A,r,s),S=w.x-m.x,F=w.y-m.y,B=z.x-m.x,V=z.y-m.y,C=S*V-F*B;if(Math.abs(C)<1e-6)return null;let L=o.x-m.x,E=o.y-m.y,H=(L*V-E*B)/C,D=(E*S-L*F)/C;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,D))}}var Le=22;function Re(e,o,t,r,s,c,d,n,a){let l={...Ae};function f(b){let g=e.getBoundingClientRect();return{x:b.clientX-g.left,y:b.clientY-g.top}}function x(b){let g=o(),M=d(),p=n();for(let i=0;i<3;i++){let u=Te(i,g,M,p),h=b.x-u.x,v=b.y-u.y;if(h*h+v*v<=Le*Le)return i}return-1}function A(b){let g=o(),M=d(),p=n();for(let i=G.length-1;i>=0;i--){let u=oe(i,b,g,M,p);if(u)return{faceIndex:i,...u}}return null}let m=-1,w={x:0,y:0},z=0;function S(b,g){m=b,w=g,z=o()[["x","y","z"][b]],l.draggingAxisHandle=b,e.style.cursor="grabbing",a()}function F(b){if(m<0)return;let g=b.x-w.x,M=b.y-w.y,i=fe()[m],u=d(),v=(g*i.x+M*i.y)/u,k=Math.max(0,Math.min(1,z+v)),y=o(),R=["x","y","z"],O={...y,[R[m]]:k};t(O);let W=r(),te=c(),K=te>=0?G[te]:null,de={...W};K&&m===K.fixedAxis?de[R[m]]=k:de[R[m]]=Math.min(W[R[m]],k),s(de,c()),a()}function B(){m=-1,l.draggingAxisHandle=-1}let V=-1,C=null,L=null,E=!1;function H(b,g,M,p){V=b,l.draggingFace=b,C=null,L=null,E=!1,p&&(E=!0,L={s:g,t:M}),P(b,g,M),e.style.cursor="crosshair",a()}function D(b,g,M){if(V<0)return;let p=o(),i=d(),u=n(),h=oe(V,b,p,i,u),v=V;if(!h&&!M){for(let R=G.length-1;R>=0;R--)if(R!==V&&(h=oe(R,b,p,i,u),h)){v=R;break}}if(!h&&M&&(h=ze(V,b,p,i,u),v=V),!h){a();return}v!==V&&(V=v,l.draggingFace=v,C=null,E=!1,L=null);let{s:k,t:y}=h;if(g&&L){if(E){let R=Math.abs(k-L.s),O=Math.abs(y-L.t),W=.02;(R>W||O>W)&&(C=R>=O?"u":"v",E=!1)}C==="u"?y=L.t:C==="v"&&(k=L.s)}else g||(C=null,E=!1,L=null);P(v,k,y),a()}function P(b,g,M){let p=G[b],i=o(),u=["x","y","z"],h={...r()};h[u[p.uAxis]]=g*i[u[p.uAxis]],h[u[p.vAxis]]=M*i[u[p.vAxis]],h[u[p.fixedAxis]]=i[u[p.fixedAxis]],s(h,b)}function I(){V=-1,l.draggingFace=-1,C=null,E=!1,L=null}function N(b){let g=f(b),M=x(g);if(M>=0){b.preventDefault(),S(M,g);return}let p=A(g);p&&(b.preventDefault(),H(p.faceIndex,p.s,p.t,b.shiftKey))}function j(b){let g=f(b);if(m>=0){b.preventDefault(),F(g);return}if(V>=0){b.preventDefault(),D(g,b.shiftKey,b.altKey);return}let M=x(g),p=A(g),i=M,u=M>=0?-1:p?p.faceIndex:-1;(i!==l.hoveredAxisHandle||u!==l.hoveredFace)&&(l.hoveredAxisHandle=i,l.hoveredFace=u,e.style.cursor=i>=0?"grab":u>=0?"crosshair":"default",a())}function _(b){let g=m>=0||V>=0;B(),I(),g&&(l.hoveredAxisHandle=-1,l.hoveredFace=-1,e.style.cursor="default",a())}function X(b){if(b.touches.length!==1)return;let g=f(b.touches[0]),M=x(g);if(M>=0){b.preventDefault(),S(M,g);return}let p=A(g);p&&(b.preventDefault(),H(p.faceIndex,p.s,p.t,!1))}function ce(b){if(b.touches.length!==1)return;let g=f(b.touches[0]);m>=0?(b.preventDefault(),F(g)):V>=0&&(b.preventDefault(),D(g,!1,!1))}function le(b){B(),I(),a()}function Z(b){let g=b.shiftKey?.04:.004,M=r(),p=o(),i=fe(),u=0,h=0;switch(b.key){case"ArrowRight":u=1;break;case"ArrowLeft":u=-1;break;case"ArrowUp":h=-1;break;case"ArrowDown":h=1;break;default:return}b.preventDefault();let v={...M},k=["x","y","z"];for(let y=0;y<3;y++){let R=u*i[y].x+h*i[y].y;if(Math.abs(R)>.3){let O=M[k[y]]+g*Math.sign(R);v[k[y]]=Math.max(0,Math.min(p[k[y]],O))}}s(v,c()),a()}e.addEventListener("mousedown",N),window.addEventListener("mousemove",j),window.addEventListener("mouseup",_),e.addEventListener("touchstart",X,{passive:!1}),e.addEventListener("touchmove",ce,{passive:!1}),e.addEventListener("touchend",le),e.addEventListener("keydown",Z),e.setAttribute("tabindex","0");function $(){e.removeEventListener("mousedown",N),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",_),e.removeEventListener("touchstart",X),e.removeEventListener("touchmove",ce),e.removeEventListener("touchend",le),e.removeEventListener("keydown",Z)}return{state:l,destroy:$}}var Se=`.box-picker {\r
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
`;var Ee=We,He=!1;function qe(){if(He||typeof document>"u")return;He=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Se,document.head.appendChild(e)}function We(e,o={}){let t=o.size??300,r=o.controls??!0,s=o.showInputs??!1,c=o.showModeToggle??!1,d=o.showCorners??!1,n={mode:()=>a,switchMode:i=>E(i),onHexInput:i=>{let u=ee(i);u?(x=Y(C?{r:255-u.r,g:255-u.g,b:255-u.b}:u,a),f={x:Math.max(f.x,x.x),y:Math.max(f.y,x.y),z:Math.max(f.z,x.z)},g(),$(),I()):$()},onChannelInput:(i,u,h)=>{let v=Math.max(0,Math.min(h,u)),k=["x","y","z"],y=v/h;if(C){let R={...x,[k[i]]:y},O=U(R,a);x=Y({r:255-O.r,g:255-O.g,b:255-O.b},a)}else x={...x,[k[i]]:y};y>f[k[i]]&&(f={...f,[k[i]]:y}),g(),$(),I()},getRgbForCopy:()=>U(x,a),onRandom:i=>p(i),onReset:()=>p({r:0,g:0,b:0})},a=o.mode??"rgb",l=o.initialColor?Y(o.initialColor,a):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},x={...l},A=0,m=new Set;qe();let w=document.createElement("div");w.className="box-picker";let z=document.createElement("canvas");z.style.cursor="grab",w.appendChild(z);let S=we(z,t),F=null,B=document.createElement("div");B.className="box-picker-controls",F=document.createElement("div"),F.className="box-picker-swatch",B.appendChild(F),w.appendChild(B),(s||c||d)&&import("./controls-VBFXR3DH.js").then(i=>{i.createControls(B,n,{showInputs:s,showModeToggle:c,showCorners:d})}).catch(()=>{}),e.appendChild(w);let V=Re(z,()=>f,i=>{f=i},()=>x,(i,u)=>{x=i,A=u,g(),$()},()=>A,()=>S.scale,()=>S.center,I),C=!1,L=!0;z.addEventListener("mouseenter",()=>{L=!0,I()}),z.addEventListener("mouseleave",()=>{L=!1,I()}),z.addEventListener("dblclick",()=>{C=!C,ke(C),g(),$(),I()});function E(i){if(i===a)return;let u=U(x,a),h={...x},v={...f};a=i;let k=Y(u,a),y={x:1,y:1,z:1};x=k,f=y,D(h,k,v,y,300),$()}let H=null;function D(i,u,h,v,k){H!==null&&cancelAnimationFrame(H);let y=performance.now();function R(O){let W=O-y,te=Math.min(1,W/k),K=1-Math.pow(1-te,3);x={x:i.x+(u.x-i.x)*K,y:i.y+(u.y-i.y)*K,z:i.z+(u.z-i.z)*K},f={x:h.x+(v.x-h.x)*K,y:h.y+(v.y-h.y)*K,z:h.z+(v.z-h.z)*K},N(),g(),te<1?H=requestAnimationFrame(R):H=null}H=requestAnimationFrame(R)}let P=!1;function I(){P||(P=!0,requestAnimationFrame(()=>{P=!1,N()}))}function N(){Ve(S,f,x,A,a,V.state,L)}function j(i,u,h){return Math.round(i+(u-i)*h)}function _(i,u){let h=u>0?255:0,v=Math.abs(u);return q({r:j(i.r,h,v),g:j(i.g,h,v),b:j(i.b,h,v)})}function X(i,u){let h=ee(u)||{r:128,g:128,b:128},v=_(h,.35),k=_(h,0),y=_(h,-.35);i.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${v}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${k}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${y}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,i.style.backgroundColor="transparent"}function ce(i){try{navigator.clipboard.writeText(i).catch(()=>{})}catch{}}function le(i){i&&(i.style.borderColor="#4ade80",i.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{i.style.borderColor="",i.style.boxShadow=""},500))}function Z(){let i=U(x,a);return C?{r:255-i.r,g:255-i.g,b:255-i.b}:i}function $(){if(!r)return;let i=Z(),u=q(i);F&&X(F,u);let h=w.querySelector(".box-picker-hex");h&&(h.value=u),b(),w._updateModeButtons&&w._updateModeButtons()}function b(){if(!r)return;let i=se[a],u=C?Y(Z(),a):x,h=ve(u,a),v=w.querySelectorAll(".box-picker-channel input"),k=w.querySelectorAll(".box-picker-channel label");for(let y=0;y<v.length;y++)k[y].textContent=i[y],k[y].style.color="",k[y].style.textShadow="none",v[y].value=String(h[y])}function g(){let i=Z(),u={rgb:i,hsb:J(i),oklch:Q(i),hex:q(i)};for(let h of m)h(u)}function M(){let i=U(x,a);return{rgb:i,hsb:J(i),oklch:Q(i),hex:q(i)}}$(),N();let p=i=>{x=Y(i,a),f={x:Math.max(f.x,x.x),y:Math.max(f.y,x.y),z:Math.max(f.z,x.z)};let u=T(x,S.scale,S.center);A=-1;for(let h=G.length-1;h>=0;h--)if(oe(h,u,f,S.scale,S.center)){A=h;break}g(),$(),I()};return{getColor:M,getMode:()=>a,setColor:p,setMode(i){E(i)},on(i,u){m.add(u)},off(i,u){m.delete(u)},destroy(){V.destroy(),H!==null&&cancelAnimationFrame(H),e.removeChild(w)}}}function xe(e,o){if(!e)return null;let t=e.trim();try{if(o==="hex")return{rgb:ee(t),alpha:1};if(o==="hex-alpha"){let r=t.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!r)return null;let s=ee(r[1]),c=r[2]?parseInt(r[2],16)/255:1;return{rgb:s,alpha:c}}if(o==="rgb"){let r=t.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return r?{r:+r[1],g:+r[2],b:+r[3]}:null}if(o==="hsl"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return r?Ye(+r[1],+r[2],+r[3]):null}if(o==="hsv"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return r?he({h:+r[1],s:+r[2],b:+r[3]}):null}if(o==="oklch"||o==="oklcha"){let r=t.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return r?{rgb:re({l:+r[1],c:+r[2],h:+r[3]}),alpha:r[4]!==void 0?Math.min(1,+r[4]):1}:null}}catch{}return null}function ie(e,o,t=1){if(o==="hex")return q(e);if(o==="hex-alpha")return q(e)+(t<1?Math.round(t*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="hsl"){let s=Ze(e);return`${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%`}if(o==="hsv"){let s=J(e);return`${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.b)}%`}let r=Q(e);return`${r.l.toFixed(3)}, ${r.c.toFixed(3)}, ${r.h.toFixed(1)}`}function Ye(e,o,t){let r=o/100,s=t/100,c=(1-Math.abs(2*s-1))*r,d=c*(1-Math.abs(e/60%2-1)),n=s-c/2,a=0,l=0,f=0;return e<60?(a=c,l=d):e<120?(a=d,l=c):e<180?(l=c,f=d):e<240?(l=d,f=c):e<300?(a=d,f=c):(a=c,f=d),{r:Math.round((a+n)*255),g:Math.round((l+n)*255),b:Math.round((f+n)*255)}}function Ze(e){let o=e.r/255,t=e.g/255,r=e.b/255,s=Math.max(o,t,r),c=Math.min(o,t,r),d=(s+c)/2;if(s===c)return{h:0,s:0,l:d*100};let n=s-c,a=d>.5?n/(2-s-c):n/(s+c),l=0;return s===o?l=((t-r)/n+(t<r?6:0))*60:s===t?l=((r-o)/n+2)*60:l=((o-t)/n+4)*60,{h:l,s:a*100,l:d*100}}var ae=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),t=this.getAttribute("mode")||"rgb",r=this.getAttribute("value"),s=r?xe(r,this.model):null;this.alpha=s?.alpha??1;let c=s?.rgb??{r:255,g:255,b:255};if(this.picker=Ee(this.holder,{initialColor:c,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",n=>{this.internal||(this.internal=!0,this.setAttribute("value",ie(n.rgb,this.model,this.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:n})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ie(n.rgb,this.model,this.alpha)})))}),t&&this.picker.setMode(t),new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]).has(this.model)){let n=document.createElement("input");n.type="range",n.min="0",n.max="100",n.value=String(Math.round(this.alpha*100)),n.style.cssText="width:100%;margin-top:8px;accent-color:#007AFF;",n.setAttribute("aria-label","Alpha"),n.addEventListener("input",()=>{this.alpha=+n.value/100;try{let a=this.picker?.getColor().rgb??{r:255,g:255,b:255},l=ie(a,this.model,this.alpha);this.setAttribute("value",l),this.dispatchEvent(new CustomEvent("color-changed",{detail:l}))}catch{}}),this.appendChild(n)}}attributeChangedCallback(o,t,r){if(!(!this.picker||!r||this.internal))if(o==="value"){let s=xe(r,this.model);s&&(this.alpha=s.alpha,this.picker.setColor(s.rgb))}else o==="mode"&&this.picker.setMode(r)}get value(){return this.getAttribute("value")||ie({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ge=class extends ae{constructor(){super("hex")}},Je=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Je)customElements.get(e)||customElements.define(e,class extends ae{constructor(){super(o)}});var Co=ge;export{ge as ColorIsBoxElement,We as createBoxColorPicker,Ee as createColorPicker,Co as default,ke as setBoxInvert};
