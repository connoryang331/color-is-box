var te={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},fe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function re(e){let o=e.r/255,n=e.g/255,a=e.b/255,c=Math.max(o,n,a),l=Math.min(o,n,a),u=c-l,r=0;u!==0&&(c===o?r=((n-a)/u+6)%6:c===n?r=(a-o)/u+2:r=(o-n)/u+4,r*=60);let i=c===0?0:u/c*100,b=c*100;return{h:r,s:i,b}}function Re(e){let o=e.h,n=e.s/100,a=e.b/100,c=a*n,l=c*(1-Math.abs(o/60%2-1)),u=a-c,r,i,b;return o<60?(r=c,i=l,b=0):o<120?(r=l,i=c,b=0):o<180?(r=0,i=c,b=l):o<240?(r=0,i=l,b=c):o<300?(r=l,i=0,b=c):(r=c,i=0,b=l),{r:Math.round((r+u)*255),g:Math.round((i+u)*255),b:Math.round((b+u)*255)}}function ce(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function se(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Le(e){let o=ce(e.r/255),n=ce(e.g/255),a=ce(e.b/255),c=.4122214708*o+.5363325363*n+.0514459929*a,l=.2119034982*o+.6806995451*n+.1073969566*a,u=.0883024619*o+.2817188376*n+.6299787005*a,r=Math.cbrt(c),i=Math.cbrt(l),b=Math.cbrt(u);return{L:.2104542553*r+.793617785*i-.0040720468*b,a:1.9779984951*r-2.428592205*i+.4505937099*b,b:.0259040371*r+.7827717662*i-.808675766*b}}function Se(e,o,n){let a=e+.3963377774*o+.2158037573*n,c=e-.1055613458*o-.0638541728*n,l=e-.0894841775*o-1.291485548*n,u=a*a*a,r=c*c*c,i=l*l*l,b=4.0767416621*u-3.3077115913*r+.2309699292*i,g=-1.2684380046*u+2.6097574011*r-.3413193965*i,s=-.0041960863*u-.7034186147*r+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,se(b)))*255),g:Math.round(Math.max(0,Math.min(1,se(g)))*255),b:Math.round(Math.max(0,Math.min(1,se(s)))*255)}}function ae(e){let o=Le(e),n=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:n,h:n<1e-4?0:a}}function le(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),a=e.c*Math.sin(o);return Se(e.l,n,a)}function He(e,o,n){let a=le({l:e,c:o,h:n});if(xe(a))return{l:e,c:o,h:n};let c=0,l=o;for(let u=0;u<20;u++){let r=(c+l)/2;a=le({l:e,c:r,h:n}),xe(a)?c=r:l=r}return{l:e,c,h:n}}function xe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function j(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function de(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var he=.4;function $(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Re({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,a=e.y*he,c=e.z*359,l=He(n,a,c);return le(l)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=re(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ae(e);return{x:n.l,y:Math.min(n.c/he,1),z:n.h/359}}}function me(e,o){let n=fe[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ge(e,o,n,a,c,l=!1){let u;e===0?u={x:a,y:o,z:n}:e===1?u={x:o,y:a,z:n}:u={x:o,y:n,z:a};let r=$(u,c);return l?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var pe=Math.PI/6,Ee=Math.cos(pe),Fe=Math.sin(pe),ee=!1;function ye(e){ee=e}function L(e,o,n){return{x:n.x+(e.y-e.x)*Ee*o,y:n.y+e.z*o-(e.x+e.y)*Fe*o}}function Be(e){let{x:o,y:n,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:a},{x:o,y:n,z:0},{x:o,y:0,z:a},{x:0,y:n,z:a},{x:o,y:n,z:a}]}var G=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Ie=64,ve={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Ce(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(n,n),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function ke(e,o,n,a,c,l,u=!0){let{ctx:r,scale:i,center:b,width:g,height:s}=e;r.save(),r.clearRect(0,0,g,s);let A=Be(o).map(m=>L(m,i,b));if(Oe(r,i,b,c),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,Pe(r,A,o,c),r.restore(),u&&Ge(r,c,i,b),a>=0){let m=$(n,c),w=ee?{r:255-m.r,g:255-m.g,b:255-m.b}:m,T=L(n,i,b);Xe(r,T,w)}r.restore()}var De={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Oe(e,o,n,a){let c=L({x:0,y:0,z:0},o,n),l=[L({x:1,y:0,z:0},o,n),L({x:0,y:1,z:0},o,n),L({x:0,y:0,z:1},o,n)],u=De[a];e.lineWidth=1.5;for(let r=0;r<l.length;r++)e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(l[r].x,l[r].y),e.strokeStyle=u[r],e.stroke()}function Pe(e,o,n,a){let c=[n.x,n.y,n.z];for(let l=0;l<G.length;l++){let u=G[l],r=c[u.fixedAxis],i=c[u.uAxis],b=c[u.vAxis];if(i<.002&&b<.002)continue;let g=u.quad.map(s=>o[s]);_e(e,g,u.fixedAxis,r,i,b,a)}}function _e(e,o,n,a,c,l,u){let r=Ie,i=document.createElement("canvas");i.width=r,i.height=r;let b=i.getContext("2d"),g=b.createImageData(r,r),s=g.data;for(let P=0;P<r;P++)for(let D=0;D<r;D++){let U=D/(r-1)*c,q=P/(r-1)*l,X=ge(n,U,q,a,u,ee),_=(P*r+D)*4;s[_]=X.r,s[_+1]=X.g,s[_+2]=X.b,s[_+3]=255}b.putImageData(g,0,0);let A=o[0],m=o[1],w=o[2],T=o[3],H=m.x-A.x,F=m.y-A.y,B=T.x-A.x,R=T.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(m.x,m.y),e.lineTo(w.x,w.y),e.lineTo(T.x,T.y),e.closePath(),e.clip();let v=2/r,S=A.x-H*v-B*v,I=A.y-F*v-R*v,E=1+2*v,O=1+2*v;e.transform(H*E/r,F*E/r,B*O/r,R*O/r,S,I),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function Ge(e,o,n,a){let c=te[o],l=ee?[L({x:0,y:1,z:1},n,a),L({x:1,y:0,z:1},n,a),L({x:1,y:1,z:0},n,a)]:[L({x:1,y:0,z:0},n,a),L({x:0,y:1,z:0},n,a),L({x:0,y:0,z:1},n,a)],u=ee?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],i=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(s=>j($(s,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let b={rgb:[],hsb:[2],oklch:[0]},g=performance.now()/1e3;for(let s=0;s<3;s++){let A=l[s].x+u[s].x,m=l[s].y+u[s].y,w=g*1.8+s*2.1,T=.62+.38*(.5+.5*Math.sin(w)),H=11+Math.round(1.6*(.5+.5*Math.sin(w)));e.globalAlpha=T,e.font=`bold ${H}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let B=b[o].includes(s)?"#888888":i[s];e.fillStyle=B,e.fillText(c[s],A,m)}e.globalAlpha=1,e.restore()}function Xe(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Me(e,o,n,a){let c=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return L(c[e],n,a)}function ue(){let e={x:0,y:0};return[L({x:1,y:0,z:0},1,e),L({x:0,y:1,z:0},1,e),L({x:0,y:0,z:1},1,e)].map(n=>{let a=Math.sqrt(n.x*n.x+n.y*n.y);return a>0?{x:n.x/a,y:n.y/a}:{x:0,y:0}})}function Q(e,o,n,a,c){let l=G[e],u=[n.x,n.y,n.z],r=u[l.uAxis],i=u[l.vAxis];if(r<.002||i<.002)return null;let b={x:0,y:0,z:0},g=["x","y","z"];b[g[l.fixedAxis]]=u[l.fixedAxis];let s={...b};s[g[l.uAxis]]=r;let A={...b};A[g[l.vAxis]]=i;let m=L(b,a,c),w=L(s,a,c),T=L(A,a,c),H=w.x-m.x,F=w.y-m.y,B=T.x-m.x,R=T.y-m.y,v=H*R-F*B;if(Math.abs(v)<1e-6)return null;let S=o.x-m.x,I=o.y-m.y,E=(S*R-I*B)/v,O=(I*H-S*F)/v;return E<-.05||E>1.05||O<-.05||O>1.05?null:{s:Math.max(0,Math.min(1,E)),t:Math.max(0,Math.min(1,O))}}function Ae(e,o,n,a,c){let l=G[e],u=[n.x,n.y,n.z],r=u[l.uAxis],i=u[l.vAxis];if(r<.002||i<.002)return null;let b={x:0,y:0,z:0},g=["x","y","z"];b[g[l.fixedAxis]]=u[l.fixedAxis];let s={...b};s[g[l.uAxis]]=r;let A={...b};A[g[l.vAxis]]=i;let m=L(b,a,c),w=L(s,a,c),T=L(A,a,c),H=w.x-m.x,F=w.y-m.y,B=T.x-m.x,R=T.y-m.y,v=H*R-F*B;if(Math.abs(v)<1e-6)return null;let S=o.x-m.x,I=o.y-m.y,E=(S*R-I*B)/v,O=(I*H-S*F)/v;return{s:Math.max(0,Math.min(1,E)),t:Math.max(0,Math.min(1,O))}}var we=22;function Ve(e,o,n,a,c,l,u,r,i){let b={...ve};function g(d){let x=e.getBoundingClientRect();return{x:d.clientX-x.left,y:d.clientY-x.top}}function s(d){let x=o(),V=u(),p=r();for(let M=0;M<3;M++){let C=Me(M,x,V,p),t=d.x-C.x,f=d.y-C.y;if(t*t+f*f<=we*we)return M}return-1}function A(d){let x=o(),V=u(),p=r();for(let M=G.length-1;M>=0;M--){let C=Q(M,d,x,V,p);if(C)return{faceIndex:M,...C}}return null}let m=-1,w={x:0,y:0},T=0;function H(d,x){m=d,w=x,T=o()[["x","y","z"][d]],b.draggingAxisHandle=d,e.style.cursor="grabbing",i()}function F(d){if(m<0)return;let x=d.x-w.x,V=d.y-w.y,M=ue()[m],C=u(),f=(x*M.x+V*M.y)/C,h=Math.max(0,Math.min(1,T+f)),k=o(),y=["x","y","z"],z={...k,[y[m]]:h};n(z);let K=a(),N=l(),ne=N>=0?G[N]:null,Z={...K};ne&&m===ne.fixedAxis?Z[y[m]]=h:Z[y[m]]=Math.min(K[y[m]],h),c(Z,l()),i()}function B(){m=-1,b.draggingAxisHandle=-1}let R=-1,v=null,S=null,I=!1;function E(d,x,V,p){R=d,b.draggingFace=d,v=null,S=null,I=!1,p&&(I=!0,S={s:x,t:V}),P(d,x,V),e.style.cursor="crosshair",i()}function O(d,x,V){if(R<0)return;let p=o(),M=u(),C=r(),t=Q(R,d,p,M,C),f=R;if(!t&&!V){for(let y=G.length-1;y>=0;y--)if(y!==R&&(t=Q(y,d,p,M,C),t)){f=y;break}}if(!t&&V&&(t=Ae(R,d,p,M,C),f=R),!t){i();return}f!==R&&(R=f,b.draggingFace=f,v=null,I=!1,S=null);let{s:h,t:k}=t;if(x&&S){if(I){let y=Math.abs(h-S.s),z=Math.abs(k-S.t),K=.02;(y>K||z>K)&&(v=y>=z?"u":"v",I=!1)}v==="u"?k=S.t:v==="v"&&(h=S.s)}else x||(v=null,I=!1,S=null);P(f,h,k),i()}function P(d,x,V){let p=G[d],M=o(),C=["x","y","z"],t={...a()};t[C[p.uAxis]]=x*M[C[p.uAxis]],t[C[p.vAxis]]=V*M[C[p.vAxis]],t[C[p.fixedAxis]]=M[C[p.fixedAxis]],c(t,d)}function D(){R=-1,b.draggingFace=-1,v=null,I=!1,S=null}function U(d){let x=g(d),V=s(x);if(V>=0){d.preventDefault(),H(V,x);return}let p=A(x);p&&(d.preventDefault(),E(p.faceIndex,p.s,p.t,d.shiftKey))}function q(d){let x=g(d);if(m>=0){d.preventDefault(),F(x);return}if(R>=0){d.preventDefault(),O(x,d.shiftKey,d.altKey);return}let V=s(x),p=A(x),M=V,C=V>=0?-1:p?p.faceIndex:-1;(M!==b.hoveredAxisHandle||C!==b.hoveredFace)&&(b.hoveredAxisHandle=M,b.hoveredFace=C,e.style.cursor=M>=0?"grab":C>=0?"crosshair":"default",i())}function X(d){let x=m>=0||R>=0;B(),D(),x&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",i())}function _(d){if(d.touches.length!==1)return;let x=g(d.touches[0]),V=s(x);if(V>=0){d.preventDefault(),H(V,x);return}let p=A(x);p&&(d.preventDefault(),E(p.faceIndex,p.s,p.t,!1))}function Y(d){if(d.touches.length!==1)return;let x=g(d.touches[0]);m>=0?(d.preventDefault(),F(x)):R>=0&&(d.preventDefault(),O(x,!1,!1))}function oe(d){B(),D(),i()}function ie(d){let x=d.shiftKey?.04:.004,V=a(),p=o(),M=ue(),C=0,t=0;switch(d.key){case"ArrowRight":C=1;break;case"ArrowLeft":C=-1;break;case"ArrowUp":t=-1;break;case"ArrowDown":t=1;break;default:return}d.preventDefault();let f={...V},h=["x","y","z"];for(let k=0;k<3;k++){let y=C*M[k].x+t*M[k].y;if(Math.abs(y)>.3){let z=V[h[k]]+x*Math.sign(y);f[h[k]]=Math.max(0,Math.min(p[h[k]],z))}}c(f,l()),i()}e.addEventListener("mousedown",U),window.addEventListener("mousemove",q),window.addEventListener("mouseup",X),e.addEventListener("touchstart",_,{passive:!1}),e.addEventListener("touchmove",Y,{passive:!1}),e.addEventListener("touchend",oe),e.addEventListener("keydown",ie),e.setAttribute("tabindex","0");function be(){e.removeEventListener("mousedown",U),window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",X),e.removeEventListener("touchstart",_),e.removeEventListener("touchmove",Y),e.removeEventListener("touchend",oe),e.removeEventListener("keydown",ie)}return{state:b,destroy:be}}var ze=`.box-picker {\r
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
`;var co=Ue,Te=!1;function $e(){if(Te||typeof document>"u")return;Te=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ze,document.head.appendChild(e)}function Ue(e,o={}){let n=o.size??300,a=o.controls??!0,c=o.showInputs??!1,l=o.showModeToggle??!1,u=o.showCorners??!1,r={mode:()=>i,switchMode:t=>I(t),onHexInput:t=>{let f=de(t);f?(s=W(v?{r:255-f.r,g:255-f.g,b:255-f.b}:f,i),g={x:Math.max(g.x,s.x),y:Math.max(g.y,s.y),z:Math.max(g.z,s.z)},p(),x(),D()):x()},onChannelInput:(t,f,h)=>{let k=Math.max(0,Math.min(h,f)),y=["x","y","z"],z=k/h;if(v){let K={...s,[y[t]]:z},N=$(K,i);s=W({r:255-N.r,g:255-N.g,b:255-N.b},i)}else s={...s,[y[t]]:z};z>g[y[t]]&&(g={...g,[y[t]]:z}),p(),x(),D()},getRgbForCopy:()=>$(s,i),onRandom:t=>C(t),onReset:()=>C({r:0,g:0,b:0})},i=o.mode??"rgb",b=o.initialColor?W(o.initialColor,i):{x:.7,y:.4,z:.85},g={x:1,y:1,z:1},s={...b},A=0,m=new Set;$e();let w=document.createElement("div");w.className="box-picker";let T=document.createElement("canvas");T.style.cursor="grab",w.appendChild(T);let H=Ce(T,n),F=null,B=document.createElement("div");B.className="box-picker-controls",F=document.createElement("div"),F.className="box-picker-swatch",B.appendChild(F),w.appendChild(B),(c||l||u)&&import("./controls-VBFXR3DH.js").then(t=>{t.createControls(B,r,{showInputs:c,showModeToggle:l,showCorners:u})}).catch(()=>{}),e.appendChild(w);let R=Ve(T,()=>g,t=>{g=t},()=>s,(t,f)=>{s=t,A=f,p(),x()},()=>A,()=>H.scale,()=>H.center,D),v=!1,S=!0;T.addEventListener("mouseenter",()=>{S=Math.random()<.5,U=!0,D()}),T.addEventListener("mouseleave",()=>{S=Math.random()<.5,U=!1,D()}),T.addEventListener("dblclick",()=>{v=!v,ye(v),p(),x(),D()});function I(t){if(t===i)return;let f=$(s,i),h={...s},k={...g};i=t;let y=W(f,i),z={x:1,y:1,z:1};s=y,g=z,O(h,y,k,z,300),x()}let E=null;function O(t,f,h,k,y){E!==null&&cancelAnimationFrame(E);let z=performance.now();function K(N){let ne=N-z,Z=Math.min(1,ne/y),J=1-Math.pow(1-Z,3);s={x:t.x+(f.x-t.x)*J,y:t.y+(f.y-t.y)*J,z:t.z+(f.z-t.z)*J},g={x:h.x+(k.x-h.x)*J,y:h.y+(k.y-h.y)*J,z:h.z+(k.z-h.z)*J},X(),p(),Z<1?E=requestAnimationFrame(K):E=null}E=requestAnimationFrame(K)}let P=!1;function D(){P||(P=!0,requestAnimationFrame(()=>{P=!1,X()}))}let U=!1,q=0;(function t(){if(!U)return;let f=performance.now();f-q>=66&&(q=f,D()),requestAnimationFrame(t)})();function X(){ke(H,g,s,A,i,R.state,S)}function _(t,f,h){return Math.round(t+(f-t)*h)}function Y(t,f){let h=f>0?255:0,k=Math.abs(f);return j({r:_(t.r,h,k),g:_(t.g,h,k),b:_(t.b,h,k)})}function oe(t,f){let h=de(f)||{r:128,g:128,b:128},k=Y(h,.35),y=Y(h,0),z=Y(h,-.35);t.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${k}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${y}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${z}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,t.style.backgroundColor="transparent"}function ie(t){try{navigator.clipboard.writeText(t).catch(()=>{})}catch{}}function be(t){t&&(t.style.borderColor="#4ade80",t.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{t.style.borderColor="",t.style.boxShadow=""},500))}function d(){let t=$(s,i);return v?{r:255-t.r,g:255-t.g,b:255-t.b}:t}function x(){if(!a)return;let t=d(),f=j(t);F&&oe(F,f);let h=w.querySelector(".box-picker-hex");h&&(h.value=f),V(),w._updateModeButtons&&w._updateModeButtons()}function V(){if(!a)return;let t=te[i],f=v?W(d(),i):s,h=me(f,i),k=w.querySelectorAll(".box-picker-channel input"),y=w.querySelectorAll(".box-picker-channel label");for(let z=0;z<k.length;z++)y[z].textContent=t[z],y[z].style.color="",y[z].style.textShadow="none",k[z].value=String(h[z])}function p(){let t=d(),f={rgb:t,hsb:re(t),oklch:ae(t),hex:j(t)};for(let h of m)h(f)}function M(){let t=$(s,i);return{rgb:t,hsb:re(t),oklch:ae(t),hex:j(t)}}x(),X();let C=t=>{s=W(t,i),g={x:Math.max(g.x,s.x),y:Math.max(g.y,s.y),z:Math.max(g.z,s.z)};let f=L(s,H.scale,H.center);A=-1;for(let h=G.length-1;h>=0;h--)if(Q(h,f,g,H.scale,H.center)){A=h;break}p(),x(),D()};return{getColor:M,getMode:()=>i,setColor:C,setMode(t){I(t)},on(t,f){m.add(f)},off(t,f){m.delete(f)},destroy(){U=!1,R.destroy(),E!==null&&cancelAnimationFrame(E),e.removeChild(w)}}}export{Ue as createBoxColorPicker,co as createColorPicker,ye as setBoxInvert};
