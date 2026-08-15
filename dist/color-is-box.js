var oe={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},be={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ne(e){let o=e.r/255,n=e.g/255,a=e.b/255,c=Math.max(o,n,a),l=Math.min(o,n,a),d=c-l,r=0;d!==0&&(c===o?r=((n-a)/d+6)%6:c===n?r=(a-o)/d+2:r=(o-n)/d+4,r*=60);let i=c===0?0:d/c*100,x=c*100;return{h:r,s:i,b:x}}function Te(e){let o=e.h,n=e.s/100,a=e.b/100,c=a*n,l=c*(1-Math.abs(o/60%2-1)),d=a-c,r,i,x;return o<60?(r=c,i=l,x=0):o<120?(r=l,i=c,x=0):o<180?(r=0,i=c,x=l):o<240?(r=0,i=l,x=c):o<300?(r=l,i=0,x=c):(r=c,i=0,x=l),{r:Math.round((r+d)*255),g:Math.round((i+d)*255),b:Math.round((x+d)*255)}}function ce(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function se(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Le(e){let o=ce(e.r/255),n=ce(e.g/255),a=ce(e.b/255),c=.4122214708*o+.5363325363*n+.0514459929*a,l=.2119034982*o+.6806995451*n+.1073969566*a,d=.0883024619*o+.2817188376*n+.6299787005*a,r=Math.cbrt(c),i=Math.cbrt(l),x=Math.cbrt(d);return{L:.2104542553*r+.793617785*i-.0040720468*x,a:1.9779984951*r-2.428592205*i+.4505937099*x,b:.0259040371*r+.7827717662*i-.808675766*x}}function Re(e,o,n){let a=e+.3963377774*o+.2158037573*n,c=e-.1055613458*o-.0638541728*n,l=e-.0894841775*o-1.291485548*n,d=a*a*a,r=c*c*c,i=l*l*l,x=4.0767416621*d-3.3077115913*r+.2309699292*i,f=-1.2684380046*d+2.6097574011*r-.3413193965*i,h=-.0041960863*d-.7034186147*r+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,se(x)))*255),g:Math.round(Math.max(0,Math.min(1,se(f)))*255),b:Math.round(Math.max(0,Math.min(1,se(h)))*255)}}function te(e){let o=Le(e),n=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:n,h:n<1e-4?0:a}}function le(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),a=e.c*Math.sin(o);return Re(e.l,n,a)}function Se(e,o,n){let a=le({l:e,c:o,h:n});if(xe(a))return{l:e,c:o,h:n};let c=0,l=o;for(let d=0;d<20;d++){let r=(c+l)/2;a=le({l:e,c:r,h:n}),xe(a)?c=r:l=r}return{l:e,c,h:n}}function xe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function W(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function de(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var fe=.4;function K(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Te({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,a=e.y*fe,c=e.z*359,l=Se(n,a,c);return le(l)}}function Y(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ne(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=te(e);return{x:n.l,y:Math.min(n.c/fe,1),z:n.h/359}}}function he(e,o){let n=be[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function me(e,o,n,a,c,l=!1){let d;e===0?d={x:a,y:o,z:n}:e===1?d={x:o,y:a,z:n}:d={x:o,y:n,z:a};let r=K(d,c);return l?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var ge=Math.PI/6,He=Math.cos(ge),Ee=Math.sin(ge),ee=!1;function pe(e){ee=e}function z(e,o,n){return{x:n.x+(e.y-e.x)*He*o,y:n.y+e.z*o-(e.x+e.y)*Ee*o}}function Fe(e){let{x:o,y:n,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:a},{x:o,y:n,z:0},{x:o,y:0,z:a},{x:0,y:n,z:a},{x:o,y:n,z:a}]}var _=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Be=64,ye={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ve(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(n,n),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ce(e,o,n,a,c,l,d=!0){let{ctx:r,scale:i,center:x,width:f,height:h}=e;r.save(),r.clearRect(0,0,f,h);let k=Fe(o).map(g=>z(g,i,x));if(De(r,i,x,c),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,Oe(r,k,o,c),r.restore(),d&&_e(r,c,i,x),a>=0){let g=K(n,c),w=ee?{r:255-g.r,g:255-g.g,b:255-g.b}:g,T=z(n,i,x);Ge(r,T,w)}r.restore()}var Ie={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function De(e,o,n,a){let c=z({x:0,y:0,z:0},o,n),l=[z({x:1,y:0,z:0},o,n),z({x:0,y:1,z:0},o,n),z({x:0,y:0,z:1},o,n)],d=Ie[a];e.lineWidth=1.5;for(let r=0;r<l.length;r++)e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(l[r].x,l[r].y),e.strokeStyle=d[r],e.stroke()}function Oe(e,o,n,a){let c=[n.x,n.y,n.z];for(let l=0;l<_.length;l++){let d=_[l],r=c[d.fixedAxis],i=c[d.uAxis],x=c[d.vAxis];if(i<.002&&x<.002)continue;let f=d.quad.map(h=>o[h]);Pe(e,f,d.fixedAxis,r,i,x,a)}}function Pe(e,o,n,a,c,l,d){let r=Be,i=document.createElement("canvas");i.width=r,i.height=r;let x=i.getContext("2d"),f=x.createImageData(r,r),h=f.data;for(let P=0;P<r;P++)for(let I=0;I<r;I++){let N=I/(r-1)*c,j=P/(r-1)*l,G=me(n,N,j,a,d,ee),U=(P*r+I)*4;h[U]=G.r,h[U+1]=G.g,h[U+2]=G.b,h[U+3]=255}x.putImageData(f,0,0);let k=o[0],g=o[1],w=o[2],T=o[3],S=g.x-k.x,F=g.y-k.y,B=T.x-k.x,V=T.y-k.y;e.save(),e.beginPath(),e.moveTo(k.x,k.y),e.lineTo(g.x,g.y),e.lineTo(w.x,w.y),e.lineTo(T.x,T.y),e.closePath(),e.clip();let C=2/r,L=k.x-S*C-B*C,E=k.y-F*C-V*C,H=1+2*C,D=1+2*C;e.transform(S*H/r,F*H/r,B*D/r,V*D/r,L,E),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function _e(e,o,n,a){let c=oe[o],l=ee?[z({x:0,y:1,z:1},n,a),z({x:1,y:0,z:1},n,a),z({x:1,y:1,z:0},n,a)]:[z({x:1,y:0,z:0},n,a),z({x:0,y:1,z:0},n,a),z({x:0,y:0,z:1},n,a)],d=ee?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],i=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(f=>W(K(f,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let x={rgb:[],hsb:[2],oklch:[0]};for(let f=0;f<3;f++){let h=l[f].x+d[f].x,k=l[f].y+d[f].y;e.globalAlpha=.8,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';let g=isGray?"#888888":i[f];e.fillStyle=g,e.fillText(c[f],h,k)}e.globalAlpha=1,e.restore()}function Ge(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function ke(e,o,n,a){let c=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return z(c[e],n,a)}function ue(){let e={x:0,y:0};return[z({x:1,y:0,z:0},1,e),z({x:0,y:1,z:0},1,e),z({x:0,y:0,z:1},1,e)].map(n=>{let a=Math.sqrt(n.x*n.x+n.y*n.y);return a>0?{x:n.x/a,y:n.y/a}:{x:0,y:0}})}function J(e,o,n,a,c){let l=_[e],d=[n.x,n.y,n.z],r=d[l.uAxis],i=d[l.vAxis];if(r<.002||i<.002)return null;let x={x:0,y:0,z:0},f=["x","y","z"];x[f[l.fixedAxis]]=d[l.fixedAxis];let h={...x};h[f[l.uAxis]]=r;let k={...x};k[f[l.vAxis]]=i;let g=z(x,a,c),w=z(h,a,c),T=z(k,a,c),S=w.x-g.x,F=w.y-g.y,B=T.x-g.x,V=T.y-g.y,C=S*V-F*B;if(Math.abs(C)<1e-6)return null;let L=o.x-g.x,E=o.y-g.y,H=(L*V-E*B)/C,D=(E*S-L*F)/C;return H<-.05||H>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,D))}}function Me(e,o,n,a,c){let l=_[e],d=[n.x,n.y,n.z],r=d[l.uAxis],i=d[l.vAxis];if(r<.002||i<.002)return null;let x={x:0,y:0,z:0},f=["x","y","z"];x[f[l.fixedAxis]]=d[l.fixedAxis];let h={...x};h[f[l.uAxis]]=r;let k={...x};k[f[l.vAxis]]=i;let g=z(x,a,c),w=z(h,a,c),T=z(k,a,c),S=w.x-g.x,F=w.y-g.y,B=T.x-g.x,V=T.y-g.y,C=S*V-F*B;if(Math.abs(C)<1e-6)return null;let L=o.x-g.x,E=o.y-g.y,H=(L*V-E*B)/C,D=(E*S-L*F)/C;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,D))}}var Ae=22;function we(e,o,n,a,c,l,d,r,i){let x={...ye};function f(u){let m=e.getBoundingClientRect();return{x:u.clientX-m.left,y:u.clientY-m.top}}function h(u){let m=o(),M=d(),p=r();for(let t=0;t<3;t++){let s=ke(t,m,M,p),b=u.x-s.x,v=u.y-s.y;if(b*b+v*v<=Ae*Ae)return t}return-1}function k(u){let m=o(),M=d(),p=r();for(let t=_.length-1;t>=0;t--){let s=J(t,u,m,M,p);if(s)return{faceIndex:t,...s}}return null}let g=-1,w={x:0,y:0},T=0;function S(u,m){g=u,w=m,T=o()[["x","y","z"][u]],x.draggingAxisHandle=u,e.style.cursor="grabbing",i()}function F(u){if(g<0)return;let m=u.x-w.x,M=u.y-w.y,t=ue()[g],s=d(),v=(m*t.x+M*t.y)/s,A=Math.max(0,Math.min(1,T+v)),y=o(),R=["x","y","z"],O={...y,[R[g]]:A};n(O);let q=a(),Q=l(),$=Q>=0?_[Q]:null,ie={...q};$&&g===$.fixedAxis?ie[R[g]]=A:ie[R[g]]=Math.min(q[R[g]],A),c(ie,l()),i()}function B(){g=-1,x.draggingAxisHandle=-1}let V=-1,C=null,L=null,E=!1;function H(u,m,M,p){V=u,x.draggingFace=u,C=null,L=null,E=!1,p&&(E=!0,L={s:m,t:M}),P(u,m,M),e.style.cursor="crosshair",i()}function D(u,m,M){if(V<0)return;let p=o(),t=d(),s=r(),b=J(V,u,p,t,s),v=V;if(!b&&!M){for(let R=_.length-1;R>=0;R--)if(R!==V&&(b=J(R,u,p,t,s),b)){v=R;break}}if(!b&&M&&(b=Me(V,u,p,t,s),v=V),!b){i();return}v!==V&&(V=v,x.draggingFace=v,C=null,E=!1,L=null);let{s:A,t:y}=b;if(m&&L){if(E){let R=Math.abs(A-L.s),O=Math.abs(y-L.t),q=.02;(R>q||O>q)&&(C=R>=O?"u":"v",E=!1)}C==="u"?y=L.t:C==="v"&&(A=L.s)}else m||(C=null,E=!1,L=null);P(v,A,y),i()}function P(u,m,M){let p=_[u],t=o(),s=["x","y","z"],b={...a()};b[s[p.uAxis]]=m*t[s[p.uAxis]],b[s[p.vAxis]]=M*t[s[p.vAxis]],b[s[p.fixedAxis]]=t[s[p.fixedAxis]],c(b,u)}function I(){V=-1,x.draggingFace=-1,C=null,E=!1,L=null}function N(u){let m=f(u),M=h(m);if(M>=0){u.preventDefault(),S(M,m);return}let p=k(m);p&&(u.preventDefault(),H(p.faceIndex,p.s,p.t,u.shiftKey))}function j(u){let m=f(u);if(g>=0){u.preventDefault(),F(m);return}if(V>=0){u.preventDefault(),D(m,u.shiftKey,u.altKey);return}let M=h(m),p=k(m),t=M,s=M>=0?-1:p?p.faceIndex:-1;(t!==x.hoveredAxisHandle||s!==x.hoveredFace)&&(x.hoveredAxisHandle=t,x.hoveredFace=s,e.style.cursor=t>=0?"grab":s>=0?"crosshair":"default",i())}function G(u){let m=g>=0||V>=0;B(),I(),m&&(x.hoveredAxisHandle=-1,x.hoveredFace=-1,e.style.cursor="default",i())}function U(u){if(u.touches.length!==1)return;let m=f(u.touches[0]),M=h(m);if(M>=0){u.preventDefault(),S(M,m);return}let p=k(m);p&&(u.preventDefault(),H(p.faceIndex,p.s,p.t,!1))}function re(u){if(u.touches.length!==1)return;let m=f(u.touches[0]);g>=0?(u.preventDefault(),F(m)):V>=0&&(u.preventDefault(),D(m,!1,!1))}function ae(u){B(),I(),i()}function Z(u){let m=u.shiftKey?.04:.004,M=a(),p=o(),t=ue(),s=0,b=0;switch(u.key){case"ArrowRight":s=1;break;case"ArrowLeft":s=-1;break;case"ArrowUp":b=-1;break;case"ArrowDown":b=1;break;default:return}u.preventDefault();let v={...M},A=["x","y","z"];for(let y=0;y<3;y++){let R=s*t[y].x+b*t[y].y;if(Math.abs(R)>.3){let O=M[A[y]]+m*Math.sign(R);v[A[y]]=Math.max(0,Math.min(p[A[y]],O))}}c(v,l()),i()}e.addEventListener("mousedown",N),window.addEventListener("mousemove",j),window.addEventListener("mouseup",G),e.addEventListener("touchstart",U,{passive:!1}),e.addEventListener("touchmove",re,{passive:!1}),e.addEventListener("touchend",ae),e.addEventListener("keydown",Z),e.setAttribute("tabindex","0");function X(){e.removeEventListener("mousedown",N),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",G),e.removeEventListener("touchstart",U),e.removeEventListener("touchmove",re),e.removeEventListener("touchend",ae),e.removeEventListener("keydown",Z)}return{state:x,destroy:X}}var Ve=`.box-picker {\r
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
`;var io=Ue,ze=!1;function Ke(){if(ze||typeof document>"u")return;ze=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ve,document.head.appendChild(e)}function Ue(e,o={}){let n=o.size??300,a=o.controls??!0,c=o.showInputs??!1,l=o.showModeToggle??!1,d=o.showCorners??!1,r={mode:()=>i,switchMode:t=>E(t),onHexInput:t=>{let s=de(t);s?(h=Y(C?{r:255-s.r,g:255-s.g,b:255-s.b}:s,i),f={x:Math.max(f.x,h.x),y:Math.max(f.y,h.y),z:Math.max(f.z,h.z)},m(),X(),I()):X()},onChannelInput:(t,s,b)=>{let v=Math.max(0,Math.min(b,s)),A=["x","y","z"],y=v/b;if(C){let R={...h,[A[t]]:y},O=K(R,i);h=Y({r:255-O.r,g:255-O.g,b:255-O.b},i)}else h={...h,[A[t]]:y};y>f[A[t]]&&(f={...f,[A[t]]:y}),m(),X(),I()},getRgbForCopy:()=>K(h,i),onRandom:t=>p(t),onReset:()=>p({r:0,g:0,b:0})},i=o.mode??"rgb",x=o.initialColor?Y(o.initialColor,i):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},h={...x},k=0,g=new Set;Ke();let w=document.createElement("div");w.className="box-picker";let T=document.createElement("canvas");T.style.cursor="grab",w.appendChild(T);let S=ve(T,n),F=null,B=document.createElement("div");B.className="box-picker-controls",F=document.createElement("div"),F.className="box-picker-swatch",B.appendChild(F),w.appendChild(B),(c||l||d)&&import("./controls-VBFXR3DH.js").then(t=>{t.createControls(B,r,{showInputs:c,showModeToggle:l,showCorners:d})}).catch(()=>{}),e.appendChild(w);let V=we(T,()=>f,t=>{f=t},()=>h,(t,s)=>{h=t,k=s,m(),X()},()=>k,()=>S.scale,()=>S.center,I),C=!1,L=!0;T.addEventListener("mouseenter",()=>{L=!0,I()}),T.addEventListener("mouseleave",()=>{L=!1,I()}),T.addEventListener("dblclick",()=>{C=!C,pe(C),m(),X(),I()});function E(t){if(t===i)return;let s=K(h,i),b={...h},v={...f};i=t;let A=Y(s,i),y={x:1,y:1,z:1};h=A,f=y,D(b,A,v,y,300),X()}let H=null;function D(t,s,b,v,A){H!==null&&cancelAnimationFrame(H);let y=performance.now();function R(O){let q=O-y,Q=Math.min(1,q/A),$=1-Math.pow(1-Q,3);h={x:t.x+(s.x-t.x)*$,y:t.y+(s.y-t.y)*$,z:t.z+(s.z-t.z)*$},f={x:b.x+(v.x-b.x)*$,y:b.y+(v.y-b.y)*$,z:b.z+(v.z-b.z)*$},N(),m(),Q<1?H=requestAnimationFrame(R):H=null}H=requestAnimationFrame(R)}let P=!1;function I(){P||(P=!0,requestAnimationFrame(()=>{P=!1,N()}))}function N(){Ce(S,f,h,k,i,V.state,L)}function j(t,s,b){return Math.round(t+(s-t)*b)}function G(t,s){let b=s>0?255:0,v=Math.abs(s);return W({r:j(t.r,b,v),g:j(t.g,b,v),b:j(t.b,b,v)})}function U(t,s){let b=de(s)||{r:128,g:128,b:128},v=G(b,.35),A=G(b,0),y=G(b,-.35);t.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${v}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${A}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${y}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,t.style.backgroundColor="transparent"}function re(t){try{navigator.clipboard.writeText(t).catch(()=>{})}catch{}}function ae(t){t&&(t.style.borderColor="#4ade80",t.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{t.style.borderColor="",t.style.boxShadow=""},500))}function Z(){let t=K(h,i);return C?{r:255-t.r,g:255-t.g,b:255-t.b}:t}function X(){if(!a)return;let t=Z(),s=W(t);F&&U(F,s);let b=w.querySelector(".box-picker-hex");b&&(b.value=s),u(),w._updateModeButtons&&w._updateModeButtons()}function u(){if(!a)return;let t=oe[i],s=C?Y(Z(),i):h,b=he(s,i),v=w.querySelectorAll(".box-picker-channel input"),A=w.querySelectorAll(".box-picker-channel label");for(let y=0;y<v.length;y++)A[y].textContent=t[y],A[y].style.color="",A[y].style.textShadow="none",v[y].value=String(b[y])}function m(){let t=Z(),s={rgb:t,hsb:ne(t),oklch:te(t),hex:W(t)};for(let b of g)b(s)}function M(){let t=K(h,i);return{rgb:t,hsb:ne(t),oklch:te(t),hex:W(t)}}X(),N();let p=t=>{h=Y(t,i),f={x:Math.max(f.x,h.x),y:Math.max(f.y,h.y),z:Math.max(f.z,h.z)};let s=z(h,S.scale,S.center);k=-1;for(let b=_.length-1;b>=0;b--)if(J(b,s,f,S.scale,S.center)){k=b;break}m(),X(),I()};return{getColor:M,getMode:()=>i,setColor:p,setMode(t){E(t)},on(t,s){g.add(s)},off(t,s){g.delete(s)},destroy(){V.destroy(),H!==null&&cancelAnimationFrame(H),e.removeChild(w)}}}export{Ue as createBoxColorPicker,io as createColorPicker,pe as setBoxInvert};
