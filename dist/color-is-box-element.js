var ge={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Re={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Q(e){let o=e.r/255,r=e.g/255,t=e.b/255,n=Math.max(o,r,t),l=Math.min(o,r,t),u=n-l,i=0;u!==0&&(n===o?i=((r-t)/u+6)%6:n===r?i=(t-o)/u+2:i=(o-r)/u+4,i*=60);let a=n===0?0:u/n*100,h=n*100;return{h:i,s:a,b:h}}function ue(e){let o=e.h,r=e.s/100,t=e.b/100,n=t*r,l=n*(1-Math.abs(o/60%2-1)),u=t-n,i,a,h;return o<60?(i=n,a=l,h=0):o<120?(i=l,a=n,h=0):o<180?(i=0,a=n,h=l):o<240?(i=0,a=l,h=n):o<300?(i=l,a=0,h=n):(i=n,a=0,h=l),{r:Math.round((i+u)*255),g:Math.round((a+u)*255),b:Math.round((h+u)*255)}}function Ce(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ke(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function We(e){let o=Ce(e.r/255),r=Ce(e.g/255),t=Ce(e.b/255),n=.4122214708*o+.5363325363*r+.0514459929*t,l=.2119034982*o+.6806995451*r+.1073969566*t,u=.0883024619*o+.2817188376*r+.6299787005*t,i=Math.cbrt(n),a=Math.cbrt(l),h=Math.cbrt(u);return{L:.2104542553*i+.793617785*a-.0040720468*h,a:1.9779984951*i-2.428592205*a+.4505937099*h,b:.0259040371*i+.7827717662*a-.808675766*h}}function Ye(e,o,r){let t=e+.3963377774*o+.2158037573*r,n=e-.1055613458*o-.0638541728*r,l=e-.0894841775*o-1.291485548*r,u=t*t*t,i=n*n*n,a=l*l*l,h=4.0767416621*u-3.3077115913*i+.2309699292*a,b=-1.2684380046*u+2.6097574011*i-.3413193965*a,x=-.0041960863*u-.7034186147*i+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,ke(h)))*255),g:Math.round(Math.max(0,Math.min(1,ke(b)))*255),b:Math.round(Math.max(0,Math.min(1,ke(x)))*255)}}function ie(e){let o=We(e),r=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:r,h:r<1e-4?0:t}}function de(e){let o=e.h*(Math.PI/180),r=e.c*Math.cos(o),t=e.c*Math.sin(o);return Ye(e.l,r,t)}function Ze(e,o,r){let t=de({l:e,c:o,h:r});if(He(t))return{l:e,c:o,h:r};let n=0,l=o;for(let u=0;u<20;u++){let i=(n+l)/2;t=de({l:e,c:i,h:r}),He(t)?n=i:l=i}return{l:e,c:n,h:r}}function He(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function q(e){let o=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function se(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ee=.4;function Z(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ue({h:e.x*359,s:e.y*100,b:e.z*100});{let r=e.x,t=e.y*Ee,n=e.z*359,l=Ze(r,t,n);return de(l)}}function te(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let r=Q(e);return{x:r.h/359,y:r.s/100,z:r.b/100}}else{let r=ie(e);return{x:r.l,y:Math.min(r.c/Ee,1),z:r.h/359}}}function Ie(e,o){let r=Re[o];return[Math.round(e.x*r[0]),Math.round(e.y*r[1]),Math.round(e.z*r[2])]}function Pe(e,o,r,t,n,l=!1){let u;e===0?u={x:t,y:o,z:r}:e===1?u={x:o,y:t,z:r}:u={x:o,y:r,z:t};let i=Z(u,n);return l?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var Fe=Math.PI/6,Je=Math.cos(Fe),Qe=Math.sin(Fe),he=!1;function De(e){he=e}function z(e,o,r){return{x:r.x+(e.y-e.x)*Je*o,y:r.y+e.z*o-(e.x+e.y)*Qe*o}}function qe(e){let{x:o,y:r,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:r,z:0},{x:0,y:0,z:t},{x:o,y:r,z:0},{x:o,y:0,z:t},{x:0,y:r,z:t},{x:o,y:r,z:t}]}var N=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],eo=64,Be={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function $e(e,o){let r=window.devicePixelRatio||1;e.width=o*r,e.height=o*.84*r,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(r,r),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Oe(e,o,r,t,n,l,u=!0,i=null){let{ctx:a,scale:h,center:b,width:x,height:w}=e;a.save(),a.clearRect(0,0,x,w);let f=qe(o).map(k=>z(k,h,b));if(to(a,h,b,n),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,ro(a,f,o,n),a.restore(),u&&ao(a,n,h,b),t>=0){let k=Z(r,n),R=he?{r:255-k.r,g:255-k.g,b:255-k.b}:k,C=z(r,h,b);i&&i.active&&io(a,C,i.rgb,i.alpha),so(a,C,R)}a.restore()}var oo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function to(e,o,r,t){let n=z({x:0,y:0,z:0},o,r),l=[z({x:1,y:0,z:0},o,r),z({x:0,y:1,z:0},o,r),z({x:0,y:0,z:1},o,r)],u=oo[t];e.lineWidth=1.5;for(let i=0;i<l.length;i++)e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(l[i].x,l[i].y),e.strokeStyle=u[i],e.stroke()}function ro(e,o,r,t){let n=[r.x,r.y,r.z];for(let l=0;l<N.length;l++){let u=N[l],i=n[u.fixedAxis],a=n[u.uAxis],h=n[u.vAxis];if(a<.002&&h<.002)continue;let b=u.quad.map(x=>o[x]);no(e,b,u.fixedAxis,i,a,h,t)}}function no(e,o,r,t,n,l,u){let i=eo,a=document.createElement("canvas");a.width=i,a.height=i;let h=a.getContext("2d"),b=h.createImageData(i,i),x=b.data;for(let j=0;j<i;j++)for(let O=0;O<i;O++){let re=O/(i-1)*n,J=j/(i-1)*l,S=Pe(r,re,J,t,u,he),D=(j*i+O)*4;x[D]=S.r,x[D+1]=S.g,x[D+2]=S.b,x[D+3]=255}h.putImageData(b,0,0);let w=o[0],f=o[1],k=o[2],R=o[3],C=f.x-w.x,y=f.y-w.y,H=R.x-w.x,T=R.y-w.y;e.save(),e.beginPath(),e.moveTo(w.x,w.y),e.lineTo(f.x,f.y),e.lineTo(k.x,k.y),e.lineTo(R.x,R.y),e.closePath(),e.clip();let L=2/i,P=w.x-C*L-H*L,$=w.y-y*L-T*L,A=1+2*L,F=1+2*L;e.transform(C*A/i,y*A/i,H*F/i,T*F/i,P,$),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function ao(e,o,r,t){let n=ge[o],l=he?[z({x:0,y:1,z:1},r,t),z({x:1,y:0,z:1},r,t),z({x:1,y:1,z:0},r,t)]:[z({x:1,y:0,z:0},r,t),z({x:0,y:1,z:0},r,t),z({x:0,y:0,z:1},r,t)],u=he?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let a=l[i].x+u[i].x,h=l[i].y+u[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(n[i],a,h)}e.globalAlpha=1,e.restore()}var Y=30,ee=13;function io(e,o,r,t){let n=(Y+ee)/2,l=5,u=Math.floor(o.x/l)*l,i=Math.floor(o.y/l)*l,a=Y*2+l*2,h=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,Y,0,Math.PI*2),e.arc(o.x,o.y,ee,0,Math.PI*2,!0),e.clip();for(let C=-1;C*l<=a;C++)for(let y=-1;y*l<=a;y++)e.fillStyle=(C+y)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+C*l,i+y*l,l,l);let b="rgba("+r.r+","+r.g+","+r.b+",0)",x="rgba("+r.r+","+r.g+","+r.b+",1)",w=e;if(typeof w.createConicGradient=="function"){let C=w.createConicGradient(-Math.PI/2,o.x,o.y);C.addColorStop(0,b),C.addColorStop(1,x),e.fillStyle=C,e.fillRect(u-Y,i-Y,a,a)}else for(let y=0;y<36;y++){let H=-Math.PI/2+y/36*Math.PI*2,T=-Math.PI/2+(y+1)/36*Math.PI*2,L=(y+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(H)*ee,o.y+Math.sin(H)*ee),e.arc(o.x,o.y,Y,H,T),e.arc(o.x,o.y,ee,T,H,!0),e.closePath(),e.fillStyle="rgba("+r.r+","+r.g+","+r.b+","+L.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,Y,0,Math.PI*2),e.arc(o.x,o.y,ee,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-Y-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let f=h*Math.PI*2,k=o.x+n*Math.sin(f),R=o.y-n*Math.cos(f);e.beginPath(),e.arc(k,R,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function so(e,o,r){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${r.r},${r.g},${r.b})`,e.fill()}function Ge(e,o,r,t){let n=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return z(n[e],r,t)}function Ae(){let e={x:0,y:0};return[z({x:1,y:0,z:0},1,e),z({x:0,y:1,z:0},1,e),z({x:0,y:0,z:1},1,e)].map(r=>{let t=Math.sqrt(r.x*r.x+r.y*r.y);return t>0?{x:r.x/t,y:r.y/t}:{x:0,y:0}})}function le(e,o,r,t,n){let l=N[e],u=[r.x,r.y,r.z],i=u[l.uAxis],a=u[l.vAxis];if(i<.002||a<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[l.fixedAxis]]=u[l.fixedAxis];let x={...h};x[b[l.uAxis]]=i;let w={...h};w[b[l.vAxis]]=a;let f=z(h,t,n),k=z(x,t,n),R=z(w,t,n),C=k.x-f.x,y=k.y-f.y,H=R.x-f.x,T=R.y-f.y,L=C*T-y*H;if(Math.abs(L)<1e-6)return null;let P=o.x-f.x,$=o.y-f.y,A=(P*T-$*H)/L,F=($*C-P*y)/L;return A<-.05||A>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,A)),t:Math.max(0,Math.min(1,F))}}function _e(e,o,r,t,n){let l=N[e],u=[r.x,r.y,r.z],i=u[l.uAxis],a=u[l.vAxis];if(i<.002||a<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[l.fixedAxis]]=u[l.fixedAxis];let x={...h};x[b[l.uAxis]]=i;let w={...h};w[b[l.vAxis]]=a;let f=z(h,t,n),k=z(x,t,n),R=z(w,t,n),C=k.x-f.x,y=k.y-f.y,H=R.x-f.x,T=R.y-f.y,L=C*T-y*H;if(Math.abs(L)<1e-6)return null;let P=o.x-f.x,$=o.y-f.y,A=(P*T-$*H)/L,F=($*C-P*y)/L;return{s:Math.max(0,Math.min(1,A)),t:Math.max(0,Math.min(1,F))}}var Ke=22;function Ue(e,o,r,t,n,l,u,i,a,h,b,x,w){let f={...Be};function k(s){let d=e.getBoundingClientRect();return{x:s.clientX-d.left,y:s.clientY-d.top}}let R=!1,C=9;function y(s){let d=w();return Math.hypot(s.x-d.x,s.y-d.y)}function H(s){let d=w();return(Math.atan2(s.x-d.x,-(s.y-d.y))+Math.PI*2)%(Math.PI*2)}function T(s){b(H(s)/(Math.PI*2)),a()}function L(s){let d=y(s);return d>=ee-4&&d<=Y+6}function P(s){let d=o(),g=u(),p=i();for(let M=0;M<3;M++){let V=Ge(M,d,g,p),E=s.x-V.x,I=s.y-V.y;if(E*E+I*I<=Ke*Ke)return M}return-1}function $(s){let d=o(),g=u(),p=i();for(let M=N.length-1;M>=0;M--){let V=le(M,s,d,g,p);if(V)return{faceIndex:M,...V}}return null}let A=-1,F={x:0,y:0},j=0;function O(s,d){A=s,F=d,j=o()[["x","y","z"][s]],f.draggingAxisHandle=s,e.style.cursor="grabbing",a()}function re(s){if(A<0)return;let d=s.x-F.x,g=s.y-F.y,M=Ae()[A],V=u(),I=(d*M.x+g*M.y)/V,X=Math.max(0,Math.min(1,j+I)),_=o(),B=["x","y","z"],ae={..._,[B[A]]:X};r(ae);let ce=t(),Le=l(),ze=Le>=0?N[Le]:null,Me={...ce};ze&&A===ze.fixedAxis?Me[B[A]]=X:Me[B[A]]=Math.min(ce[B[A]],X),n(Me,l()),a()}function J(){A=-1,f.draggingAxisHandle=-1}let S=-1,D=null,G=null,U=!1;function be(s,d,g,p){S=s,f.draggingFace=s,D=null,G=null,U=!1,p&&(U=!0,G={s:d,t:g}),ve(s,d,g),e.style.cursor="crosshair",a()}function ye(s,d,g){if(S<0)return;let p=o(),M=u(),V=i(),E=le(S,s,p,M,V),I=S;if(!E&&!g){for(let B=N.length-1;B>=0;B--)if(B!==S&&(E=le(B,s,p,M,V),E)){I=B;break}}if(!E&&g&&(E=_e(S,s,p,M,V),I=S),!E){a();return}I!==S&&(S=I,f.draggingFace=I,D=null,U=!1,G=null);let{s:X,t:_}=E;if(d&&G){if(U){let B=Math.abs(X-G.s),ae=Math.abs(_-G.t),ce=.02;(B>ce||ae>ce)&&(D=B>=ae?"u":"v",U=!1)}D==="u"?_=G.t:D==="v"&&(X=G.s)}else d||(D=null,U=!1,G=null);ve(I,X,_),a()}function ve(s,d,g){let p=N[s],M=o(),V=["x","y","z"],E={...t()};E[V[p.uAxis]]=d*M[V[p.uAxis]],E[V[p.vAxis]]=g*M[V[p.vAxis]],E[V[p.fixedAxis]]=M[V[p.fixedAxis]],n(E,s)}function oe(){S=-1,f.draggingFace=-1,D=null,U=!1,G=null}function K(s){let d=k(s);if(h()){if(f.alphaMode){if(y(d)<=C){f.alphaMode=!1,a();return}if(L(d)){s.preventDefault(),R=!0,T(d);return}f.alphaMode=!1,a();return}if(y(d)<=C){s.preventDefault(),f.alphaMode=!0,a();return}}let g=P(d);if(g>=0){s.preventDefault(),O(g,d);return}let p=$(d);p&&(s.preventDefault(),be(p.faceIndex,p.s,p.t,s.shiftKey))}function fe(s){let d=k(s);if(R){s.preventDefault(),T(d);return}if(A>=0){s.preventDefault(),re(d);return}if(S>=0){s.preventDefault(),ye(d,s.shiftKey,s.altKey);return}let g=P(d),p=$(d),M=g,V=g>=0?-1:p?p.faceIndex:-1;(M!==f.hoveredAxisHandle||V!==f.hoveredFace)&&(f.hoveredAxisHandle=M,f.hoveredFace=V,e.style.cursor=M>=0?"grab":V>=0?"crosshair":"default",a())}function W(s){R=!1;let d=A>=0||S>=0;J(),oe(),d&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",a())}function xe(s){if(s.touches.length!==1)return;let d=k(s.touches[0]);if(h()){if(f.alphaMode){if(y(d)<=C){f.alphaMode=!1,a();return}if(L(d)){s.preventDefault(),R=!0,T(d);return}f.alphaMode=!1,a();return}if(y(d)<=C){s.preventDefault(),f.alphaMode=!0,a();return}}let g=P(d);if(g>=0){s.preventDefault(),O(g,d);return}let p=$(d);p&&(s.preventDefault(),be(p.faceIndex,p.s,p.t,!1))}function ne(s){if(s.touches.length!==1)return;let d=k(s.touches[0]);R?(s.preventDefault(),T(d)):A>=0?(s.preventDefault(),re(d)):S>=0&&(s.preventDefault(),ye(d,!1,!1))}function c(s){R=!1,J(),oe(),a()}function m(s){if(f.alphaMode){if(s.key==="Escape"){f.alphaMode=!1,a();return}if(s.key==="ArrowUp"||s.key==="ArrowRight"){s.preventDefault(),b(Math.min(1,x()+(s.shiftKey?.08:.02))),a();return}if(s.key==="ArrowDown"||s.key==="ArrowLeft"){s.preventDefault(),b(Math.max(0,x()-(s.shiftKey?.08:.02))),a();return}}let d=s.shiftKey?.04:.004,g=t(),p=o(),M=Ae(),V=0,E=0;switch(s.key){case"ArrowRight":V=1;break;case"ArrowLeft":V=-1;break;case"ArrowUp":E=-1;break;case"ArrowDown":E=1;break;default:return}s.preventDefault();let I={...g},X=["x","y","z"];for(let _=0;_<3;_++){let B=V*M[_].x+E*M[_].y;if(Math.abs(B)>.3){let ae=g[X[_]]+d*Math.sign(B);I[X[_]]=Math.max(0,Math.min(p[X[_]],ae))}}n(I,l()),a()}e.addEventListener("mousedown",K),window.addEventListener("mousemove",fe),window.addEventListener("mouseup",W),e.addEventListener("touchstart",xe,{passive:!1}),e.addEventListener("touchmove",ne,{passive:!1}),e.addEventListener("touchend",c),e.addEventListener("keydown",m),e.setAttribute("tabindex","0");function v(){e.removeEventListener("mousedown",K),window.removeEventListener("mousemove",fe),window.removeEventListener("mouseup",W),e.removeEventListener("touchstart",xe),e.removeEventListener("touchmove",ne),e.removeEventListener("touchend",c),e.removeEventListener("keydown",m)}return{state:f,destroy:v}}var Xe=`.box-picker {\r
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
`;var je=uo,Ne=!1;function co(){if(Ne||typeof document>"u")return;Ne=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Xe,document.head.appendChild(e)}function uo(e,o={}){let r=o.size??300,t=o.controls??!0,n=o.showInputs??!1,l=o.showModeToggle??!1,u=o.showCorners??!1,i={mode:()=>a,switchMode:c=>j(c),onHexInput:c=>{let m=se(c);m?(x=te(A?{r:255-m.r,g:255-m.g,b:255-m.b}:m,a),b={x:Math.max(b.x,x.x),y:Math.max(b.y,x.y),z:Math.max(b.z,x.z)},W(),K(),S()):K()},onChannelInput:(c,m,v)=>{let s=Math.max(0,Math.min(v,m)),d=["x","y","z"],g=s/v;if(A){let p={...x,[d[c]]:g},M=Z(p,a);x=te({r:255-M.r,g:255-M.g,b:255-M.b},a)}else x={...x,[d[c]]:g};g>b[d[c]]&&(b={...b,[d[c]]:g}),W(),K(),S()},getRgbForCopy:()=>Z(x,a),onRandom:c=>ne(c),onReset:()=>ne({r:0,g:0,b:0})},a=o.mode??"rgb",h=o.initialColor?te(o.initialColor,a):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},x={...h},w=0,f=()=>o.alpha!==void 0,k=Math.max(0,Math.min(1,o.alpha??1));function R(c){let m=Math.max(0,Math.min(1,c));m!==k&&(k=m,W(),K(),S())}let C=new Set;co();let y=document.createElement("div");y.className="box-picker";let H=document.createElement("canvas");H.style.cursor="grab",y.appendChild(H);let T=$e(H,r),L=null,P=document.createElement("div");P.className="box-picker-controls",L=document.createElement("div"),L.className="box-picker-swatch",P.appendChild(L),y.appendChild(P),(n||l||u)&&import("./controls-VBFXR3DH.js").then(c=>{c.createControls(P,i,{showInputs:n,showModeToggle:l,showCorners:u})}).catch(()=>{}),e.appendChild(y);let $=Ue(H,()=>b,c=>{b=c},()=>x,(c,m)=>{x=c,w=m,W(),K()},()=>w,()=>T.scale,()=>T.center,S,f,R,()=>k,()=>z(x,T.scale,T.center)),A=!1,F=!0;H.addEventListener("mouseenter",()=>{F=!0,S()}),H.addEventListener("mouseleave",()=>{F=!1,S()}),H.addEventListener("dblclick",()=>{A=!A,De(A),W(),K(),S()});function j(c){if(c===a)return;let m=Z(x,a),v={...x},s={...b};a=c;let d=te(m,a),g={x:1,y:1,z:1};x=d,b=g,re(v,d,s,g,300),K()}let O=null;function re(c,m,v,s,d){O!==null&&cancelAnimationFrame(O);let g=performance.now();function p(M){let V=M-g,E=Math.min(1,V/d),I=1-Math.pow(1-E,3);x={x:c.x+(m.x-c.x)*I,y:c.y+(m.y-c.y)*I,z:c.z+(m.z-c.z)*I},b={x:v.x+(s.x-v.x)*I,y:v.y+(s.y-v.y)*I,z:v.z+(s.z-v.z)*I},D(),W(),E<1?O=requestAnimationFrame(p):O=null}O=requestAnimationFrame(p)}let J=!1;function S(){J||(J=!0,requestAnimationFrame(()=>{J=!1,D()}))}function D(){Oe(T,b,x,w,a,$.state,F,{active:$.state.alphaMode,alpha:k,rgb:oe()})}function G(c,m,v){return Math.round(c+(m-c)*v)}function U(c,m){let v=m>0?255:0,s=Math.abs(m);return q({r:G(c.r,v,s),g:G(c.g,v,s),b:G(c.b,v,s)})}function be(c,m){let v=se(m)||{r:128,g:128,b:128},s=U(v,.35),d=U(v,0),g=U(v,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${s}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${d}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${g}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function ye(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function ve(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function oe(){let c=Z(x,a);return A?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function K(){if(!t)return;let c=oe(),m=q(c);L&&be(L,m);let v=y.querySelector(".box-picker-hex");v&&(v.value=m),fe(),y._updateModeButtons&&y._updateModeButtons()}function fe(){if(!t)return;let c=ge[a],m=A?te(oe(),a):x,v=Ie(m,a),s=y.querySelectorAll(".box-picker-channel input"),d=y.querySelectorAll(".box-picker-channel label");for(let g=0;g<s.length;g++)d[g].textContent=c[g],d[g].style.color="",d[g].style.textShadow="none",s[g].value=String(v[g])}function W(){let c=oe(),m={rgb:c,hsb:Q(c),oklch:ie(c),hex:q(c),alpha:k};for(let v of C)v(m)}function xe(){let c=Z(x,a);return{rgb:c,hsb:Q(c),oklch:ie(c),hex:q(c)}}K(),D();let ne=c=>{x=te(c,a),b={x:Math.max(b.x,x.x),y:Math.max(b.y,x.y),z:Math.max(b.z,x.z)};let m=z(x,T.scale,T.center);w=-1;for(let v=N.length-1;v>=0;v--)if(le(v,m,b,T.scale,T.center)){w=v;break}W(),K(),S()};return{getColor:xe,getMode:()=>a,setColor:ne,setAlpha:R,getAlpha:()=>k,setMode(c){j(c)},on(c,m){C.add(m)},off(c,m){C.delete(m)},destroy(){$.destroy(),O!==null&&cancelAnimationFrame(O),e.removeChild(y)}}}function Te(e,o){if(!e)return null;let r=e.trim();try{if(o==="hex")return{rgb:se(r),alpha:1};if(o==="hex-alpha"){let t=r.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let n=se(t[1]),l=t[2]?parseInt(t[2],16)/255:1;return{rgb:n,alpha:l}}if(o==="rgb"){let t=r.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=r.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?we(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:we(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ue({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ue({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:de({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=r.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=r.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:we(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=r.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ue({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function me(e,o,r=1){if(o==="hex")return q(e);if(o==="hex-alpha")return q(e)+(r<1?Math.round(r*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+r.toFixed(3)}`;if(o==="hsl"){let n=Ve(e);return`${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%`}if(o==="hsla"){let n=Ve(e);return`${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${+r.toFixed(3)}`}if(o==="hsv"){let n=Q(e);return`${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.b)}%`}if(o==="hsva"){let n=Q(e);return`${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.b)}%, ${+r.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+r.toFixed(3)})`;if(o==="hsla-string"){let n=Ve(e);return`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${+r.toFixed(3)})`}if(o==="hsva-string"){let n=Q(e);return`hsva(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.b)}%, ${+r.toFixed(3)})`}let t=ie(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function we(e,o,r){let t=o/100,n=r/100,l=(1-Math.abs(2*n-1))*t,u=l*(1-Math.abs(e/60%2-1)),i=n-l/2,a=0,h=0,b=0;return e<60?(a=l,h=u):e<120?(a=u,h=l):e<180?(h=l,b=u):e<240?(h=u,b=l):e<300?(a=u,b=l):(a=l,b=u),{r:Math.round((a+i)*255),g:Math.round((h+i)*255),b:Math.round((b+i)*255)}}function Ve(e){let o=e.r/255,r=e.g/255,t=e.b/255,n=Math.max(o,r,t),l=Math.min(o,r,t),u=(n+l)/2;if(n===l)return{h:0,s:0,l:u*100};let i=n-l,a=u>.5?i/(2-n-l):i/(n+l),h=0;return n===o?h=((r-t)/i+(r<t?6:0))*60:n===r?h=((t-o)/i+2)*60:h=((o-r)/i+4)*60,{h,s:a*100,l:u*100}}var pe=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),r=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),n=t?Te(t,this.model):null;this.alpha=n?.alpha??1;let l=n?.rgb??{r:255,g:255,b:255},u=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=je(this.holder,{initialColor:l,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...u.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",me(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:me(i.rgb,this.model,i.alpha)})))}),r&&this.picker.setMode(r)}attributeChangedCallback(o,r,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let n=Te(t,this.model);n&&(this.alpha=n.alpha,this.picker.setColor(n.rgb),this.picker.setAlpha(n.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||me({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Se=class extends pe{constructor(){super("hex")}},ho=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of ho)customElements.get(e)||customElements.define(e,class extends pe{constructor(){super(o)}});var Io=Se;export{Se as ColorIsBoxElement,uo as createBoxColorPicker,je as createColorPicker,Io as default,De as setBoxInvert};
