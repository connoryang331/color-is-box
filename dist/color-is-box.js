var pe={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Le={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ye(e){let o=e.r/255,n=e.g/255,a=e.b/255,l=Math.max(o,n,a),c=Math.min(o,n,a),u=l-c,r=0;u!==0&&(l===o?r=((n-a)/u+6)%6:l===n?r=(a-o)/u+2:r=(o-n)/u+4,r*=60);let t=l===0?0:u/l*100,h=l*100;return{h:r,s:t,b:h}}function Ne(e){let o=e.h,n=e.s/100,a=e.b/100,l=a*n,c=l*(1-Math.abs(o/60%2-1)),u=a-l,r,t,h;return o<60?(r=l,t=c,h=0):o<120?(r=c,t=l,h=0):o<180?(r=0,t=l,h=c):o<240?(r=0,t=c,h=l):o<300?(r=c,t=0,h=l):(r=l,t=0,h=c),{r:Math.round((r+u)*255),g:Math.round((t+u)*255),b:Math.round((h+u)*255)}}function Ce(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ke(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function $e(e){let o=Ce(e.r/255),n=Ce(e.g/255),a=Ce(e.b/255),l=.4122214708*o+.5363325363*n+.0514459929*a,c=.2119034982*o+.6806995451*n+.1073969566*a,u=.0883024619*o+.2817188376*n+.6299787005*a,r=Math.cbrt(l),t=Math.cbrt(c),h=Math.cbrt(u);return{L:.2104542553*r+.793617785*t-.0040720468*h,a:1.9779984951*r-2.428592205*t+.4505937099*h,b:.0259040371*r+.7827717662*t-.808675766*h}}function je(e,o,n){let a=e+.3963377774*o+.2158037573*n,l=e-.1055613458*o-.0638541728*n,c=e-.0894841775*o-1.291485548*n,u=a*a*a,r=l*l*l,t=c*c*c,h=4.0767416621*u-3.3077115913*r+.2309699292*t,x=-1.2684380046*u+2.6097574011*r-.3413193965*t,b=-.0041960863*u-.7034186147*r+1.707614701*t;return{r:Math.round(Math.max(0,Math.min(1,ke(h)))*255),g:Math.round(Math.max(0,Math.min(1,ke(x)))*255),b:Math.round(Math.max(0,Math.min(1,ke(b)))*255)}}function ve(e){let o=$e(e),n=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:n,h:n<1e-4?0:a}}function Ae(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),a=e.c*Math.sin(o);return je(e.l,n,a)}function We(e,o,n){let a=Ae({l:e,c:o,h:n});if(ze(a))return{l:e,c:o,h:n};let l=0,c=o;for(let u=0;u<20;u++){let r=(l+c)/2;a=Ae({l:e,c:r,h:n}),ze(a)?l=r:c=r}return{l:e,c:l,h:n}}function ze(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function he(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function we(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Re=.4;function ee(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Ne({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,a=e.y*Re,l=e.z*359,c=We(n,a,l);return Ae(c)}}function se(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ye(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ve(e);return{x:n.l,y:Math.min(n.c/Re,1),z:n.h/359}}}function He(e,o){let n=Le[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Pe(e,o,n,a,l,c=!1){let u;e===0?u={x:a,y:o,z:n}:e===1?u={x:o,y:a,z:n}:u={x:o,y:n,z:a};let r=ee(u,l);return c?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var Ie=Math.PI/6,Ye=Math.cos(Ie),Ze=Math.sin(Ie),xe=!1;function Ee(e){xe=e}function S(e,o,n){return{x:n.x+(e.y-e.x)*Ye*o,y:n.y+e.z*o-(e.x+e.y)*Ze*o}}function Je(e){let{x:o,y:n,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:a},{x:o,y:n,z:0},{x:o,y:0,z:a},{x:0,y:n,z:a},{x:o,y:n,z:a}]}var Z=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Qe=64,Fe={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function De(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(n,n),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Be(e,o,n,a,l,c,u=!0,r=null){let{ctx:t,scale:h,center:x,width:b,height:A}=e;t.save(),t.clearRect(0,0,b,A);let f=Je(o).map(C=>S(C,h,x));if(eo(t,h,x,l),t.save(),t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=8,t.shadowOffsetX=0,t.shadowOffsetY=2,oo(t,f,o,l),t.restore(),u&&to(t,l,h,x),a>=0){let C=ee(n,l),L=xe?{r:255-C.r,g:255-C.g,b:255-C.b}:C,M=S(n,h,x);r&&r.active&&ro(t,M,r.rgb,r.alpha),ao(t,M,L)}t.restore()}var qe={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function eo(e,o,n,a){let l=S({x:0,y:0,z:0},o,n),c=[S({x:1,y:0,z:0},o,n),S({x:0,y:1,z:0},o,n),S({x:0,y:0,z:1},o,n)],u=qe[a];e.lineWidth=1.5;for(let r=0;r<c.length;r++)e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(c[r].x,c[r].y),e.strokeStyle=u[r],e.stroke()}function oo(e,o,n,a){let l=[n.x,n.y,n.z];for(let c=0;c<Z.length;c++){let u=Z[c],r=l[u.fixedAxis],t=l[u.uAxis],h=l[u.vAxis];if(t<.002&&h<.002)continue;let x=u.quad.map(b=>o[b]);no(e,x,u.fixedAxis,r,t,h,a)}}function no(e,o,n,a,l,c,u){let r=Qe,t=document.createElement("canvas");t.width=r,t.height=r;let h=t.getContext("2d"),x=h.createImageData(r,r),b=x.data;for(let J=0;J<r;J++)for(let _=0;_<r;_++){let te=_/(r-1)*l,E=J/(r-1)*c,G=Pe(n,te,E,a,u,xe),W=(J*r+_)*4;b[W]=G.r,b[W+1]=G.g,b[W+2]=G.b,b[W+3]=255}h.putImageData(x,0,0);let A=o[0],f=o[1],C=o[2],L=o[3],M=f.x-A.x,v=f.y-A.y,w=L.x-A.x,z=L.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(f.x,f.y),e.lineTo(C.x,C.y),e.lineTo(L.x,L.y),e.closePath(),e.clip();let k=2/r,X=A.x-M*k-w*k,D=A.y-v*k-z*k,I=1+2*k,B=1+2*k;e.transform(M*I/r,v*I/r,w*B/r,z*B/r,X,D),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}function to(e,o,n,a){let l=pe[o],c=xe?[S({x:0,y:1,z:1},n,a),S({x:1,y:0,z:1},n,a),S({x:1,y:1,z:0},n,a)]:[S({x:1,y:0,z:0},n,a),S({x:0,y:1,z:0},n,a),S({x:0,y:0,z:1},n,a)],u=xe?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let r=0;r<3;r++){let t=c[r].x+u[r].x,h=c[r].y+u[r].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(l[r],t,h)}e.globalAlpha=1,e.restore()}var q=30,ne=13;function ro(e,o,n,a){let l=(q+ne)/2,c=5,u=Math.floor(o.x/c)*c,r=Math.floor(o.y/c)*c,t=q*2+c*2,h=Math.max(0,Math.min(1,a));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ne,0,Math.PI*2,!0),e.clip();for(let M=-1;M*c<=t;M++)for(let v=-1;v*c<=t;v++)e.fillStyle=(M+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+M*c,r+v*c,c,c);let x="rgba("+n.r+","+n.g+","+n.b+",0)",b="rgba("+n.r+","+n.g+","+n.b+",1)",A=e;if(typeof A.createConicGradient=="function"){let M=A.createConicGradient(-Math.PI/2,o.x,o.y);M.addColorStop(0,x),M.addColorStop(1,b),e.fillStyle=M,e.fillRect(u-q,r-q,t,t)}else for(let v=0;v<36;v++){let w=-Math.PI/2+v/36*Math.PI*2,z=-Math.PI/2+(v+1)/36*Math.PI*2,k=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(w)*ne,o.y+Math.sin(w)*ne),e.arc(o.x,o.y,q,w,z),e.arc(o.x,o.y,ne,z,w,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+k.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ne,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let f=h*Math.PI*2,C=o.x+l*Math.sin(f),L=o.y-l*Math.cos(f);e.beginPath(),e.arc(C,L,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function ao(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Oe(e,o,n,a){let l=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(l[e],n,a)}function Ve(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(n=>{let a=Math.sqrt(n.x*n.x+n.y*n.y);return a>0?{x:n.x/a,y:n.y/a}:{x:0,y:0}})}function ue(e,o,n,a,l){let c=Z[e],u=[n.x,n.y,n.z],r=u[c.uAxis],t=u[c.vAxis];if(r<.002||t<.002)return null;let h={x:0,y:0,z:0},x=["x","y","z"];h[x[c.fixedAxis]]=u[c.fixedAxis];let b={...h};b[x[c.uAxis]]=r;let A={...h};A[x[c.vAxis]]=t;let f=S(h,a,l),C=S(b,a,l),L=S(A,a,l),M=C.x-f.x,v=C.y-f.y,w=L.x-f.x,z=L.y-f.y,k=M*z-v*w;if(Math.abs(k)<1e-6)return null;let X=o.x-f.x,D=o.y-f.y,I=(X*z-D*w)/k,B=(D*M-X*v)/k;return I<-.05||I>1.05||B<-.05||B>1.05?null:{s:Math.max(0,Math.min(1,I)),t:Math.max(0,Math.min(1,B))}}function _e(e,o,n,a,l){let c=Z[e],u=[n.x,n.y,n.z],r=u[c.uAxis],t=u[c.vAxis];if(r<.002||t<.002)return null;let h={x:0,y:0,z:0},x=["x","y","z"];h[x[c.fixedAxis]]=u[c.fixedAxis];let b={...h};b[x[c.uAxis]]=r;let A={...h};A[x[c.vAxis]]=t;let f=S(h,a,l),C=S(b,a,l),L=S(A,a,l),M=C.x-f.x,v=C.y-f.y,w=L.x-f.x,z=L.y-f.y,k=M*z-v*w;if(Math.abs(k)<1e-6)return null;let X=o.x-f.x,D=o.y-f.y,I=(X*z-D*w)/k,B=(D*M-X*v)/k;return{s:Math.max(0,Math.min(1,I)),t:Math.max(0,Math.min(1,B))}}var Ge=22;function Ke(e,o,n,a,l,c,u,r,t,h,x,b,A){let f={...Fe};function C(i){let d=e.getBoundingClientRect();return{x:i.clientX-d.left,y:i.clientY-d.top}}let L=!1,M=9,v=1e3,w=null;function z(){k(),w=setTimeout(X,v)}function k(){w!==null&&(clearTimeout(w),w=null)}function X(){w=null,f.alphaMode=!0,be(),re(),t()}function D(i){let d=A();return Math.hypot(i.x-d.x,i.y-d.y)}function I(i){let d=A();return(Math.atan2(i.x-d.x,-(i.y-d.y))+Math.PI*2)%(Math.PI*2)}function B(i){x(I(i)/(Math.PI*2)),t()}function J(i){let d=D(i);return d>=ne-4&&d<=q+6}function _(i){let d=o(),p=u(),y=r();for(let V=0;V<3;V++){let T=Oe(V,d,p,y),H=i.x-T.x,$=i.y-T.y;if(H*H+$*$<=Ge*Ge)return V}return-1}function te(i){let d=o(),p=u(),y=r();for(let V=Z.length-1;V>=0;V--){let T=ue(V,i,d,p,y);if(T)return{faceIndex:V,...T}}return null}let E=-1,G={x:0,y:0},W=0;function ce(i,d){E=i,G=d,W=o()[["x","y","z"][i]],f.draggingAxisHandle=i,e.style.cursor="grabbing",t()}function le(i){if(k(),E<0)return;let d=i.x-G.x,p=i.y-G.y,V=Ve()[E],T=u(),$=(d*V.x+p*V.y)/T,Y=Math.max(0,Math.min(1,W+$)),j=o(),K=["x","y","z"],de={...j,[K[E]]:Y};n(de);let fe=a(),Te=c(),Se=Te>=0?Z[Te]:null,Me={...fe};Se&&E===Se.fixedAxis?Me[K[E]]=Y:Me[K[E]]=Math.min(fe[K[E]],Y),l(Me,c()),t()}function be(){E=-1,f.draggingAxisHandle=-1}let N=-1,oe=null,U=null,O=!1;function me(i,d,p,y){N=i,f.draggingFace=i,oe=null,U=null,O=!1,y&&(O=!0,U={s:d,t:p}),ge(i,d,p),e.style.cursor="crosshair",t()}function Q(i,d,p){if(k(),N<0)return;let y=o(),V=u(),T=r(),H=ue(N,i,y,V,T),$=N;if(!H&&!p){for(let K=Z.length-1;K>=0;K--)if(K!==N&&(H=ue(K,i,y,V,T),H)){$=K;break}}if(!H&&p&&(H=_e(N,i,y,V,T),$=N),!H){t();return}$!==N&&(N=$,f.draggingFace=$,oe=null,O=!1,U=null);let{s:Y,t:j}=H;if(d&&U){if(O){let K=Math.abs(Y-U.s),de=Math.abs(j-U.t),fe=.02;(K>fe||de>fe)&&(oe=K>=de?"u":"v",O=!1)}oe==="u"?j=U.t:oe==="v"&&(Y=U.s)}else d||(oe=null,O=!1,U=null);ge($,Y,j),t()}function ge(i,d,p){let y=Z[i],V=o(),T=["x","y","z"],H={...a()};H[T[y.uAxis]]=d*V[T[y.uAxis]],H[T[y.vAxis]]=p*V[T[y.vAxis]],H[T[y.fixedAxis]]=V[T[y.fixedAxis]],l(H,i)}function re(){N=-1,f.draggingFace=-1,oe=null,O=!1,U=null}function s(i){let d=C(i);if(h()){if(f.alphaMode){if(D(d)<=M){f.alphaMode=!1,t();return}if(J(d)){i.preventDefault(),L=!0,B(d);return}f.alphaMode=!1,t();return}D(d)<=M&&z()}let p=_(d);if(p>=0){i.preventDefault(),ce(p,d);return}let y=te(d);y&&(i.preventDefault(),me(y.faceIndex,y.s,y.t,i.shiftKey))}function m(i){let d=C(i);if(L){i.preventDefault(),B(d);return}if(E>=0){i.preventDefault(),le(d);return}if(N>=0){i.preventDefault(),Q(d,i.shiftKey,i.altKey);return}let p=_(d),y=te(d),V=p,T=p>=0?-1:y?y.faceIndex:-1;(V!==f.hoveredAxisHandle||T!==f.hoveredFace)&&(f.hoveredAxisHandle=V,f.hoveredFace=T,e.style.cursor=V>=0?"grab":T>=0?"crosshair":"default",t())}function g(i){k(),L=!1;let d=E>=0||N>=0;be(),re(),d&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",t())}function P(i){if(i.touches.length!==1)return;let d=C(i.touches[0]);if(h()){if(f.alphaMode){if(D(d)<=M){f.alphaMode=!1,t();return}if(J(d)){i.preventDefault(),L=!0,B(d);return}f.alphaMode=!1,t();return}D(d)<=M&&z()}let p=_(d);if(p>=0){i.preventDefault(),ce(p,d);return}let y=te(d);y&&(i.preventDefault(),me(y.faceIndex,y.s,y.t,!1))}function F(i){if(i.touches.length!==1)return;let d=C(i.touches[0]);L?(i.preventDefault(),B(d)):E>=0?(i.preventDefault(),le(d)):N>=0&&(i.preventDefault(),Q(d,!1,!1))}function R(i){k(),L=!1,be(),re(),t()}function ae(i){if(f.alphaMode){if(i.key==="Escape"){f.alphaMode=!1,t();return}if(i.key==="ArrowUp"||i.key==="ArrowRight"){i.preventDefault(),x(Math.min(1,b()+(i.shiftKey?.08:.02))),t();return}if(i.key==="ArrowDown"||i.key==="ArrowLeft"){i.preventDefault(),x(Math.max(0,b()-(i.shiftKey?.08:.02))),t();return}}let d=i.shiftKey?.04:.004,p=a(),y=o(),V=Ve(),T=0,H=0;switch(i.key){case"ArrowRight":T=1;break;case"ArrowLeft":T=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}i.preventDefault();let $={...p},Y=["x","y","z"];for(let j=0;j<3;j++){let K=T*V[j].x+H*V[j].y;if(Math.abs(K)>.3){let de=p[Y[j]]+d*Math.sign(K);$[Y[j]]=Math.max(0,Math.min(y[Y[j]],de))}}l($,c()),t()}e.addEventListener("mousedown",s),window.addEventListener("mousemove",m),window.addEventListener("mouseup",g),e.addEventListener("touchstart",P,{passive:!1}),e.addEventListener("touchmove",F,{passive:!1}),e.addEventListener("touchend",R),e.addEventListener("keydown",ae),e.setAttribute("tabindex","0");function ie(){k(),e.removeEventListener("mousedown",s),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",g),e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",F),e.removeEventListener("touchend",R),e.removeEventListener("keydown",ae)}return{state:f,destroy:ie}}var Ue=`.box-picker {\r
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
`;var Vo=co,Xe=!1;function so(){if(Xe||typeof document>"u")return;Xe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ue,document.head.appendChild(e)}function co(e,o={}){let n=o.size??300,a=o.controls??!0,l=o.showInputs??!1,c=o.showModeToggle??!1,u=o.showCorners??!1,r={mode:()=>t,switchMode:s=>J(s),onHexInput:s=>{let m=we(s);m?(b=se(I?{r:255-m.r,g:255-m.g,b:255-m.b}:m,t),x={x:Math.max(x.x,b.x),y:Math.max(x.y,b.y),z:Math.max(x.z,b.z)},Q(),O(),G()):O()},onChannelInput:(s,m,g)=>{let P=Math.max(0,Math.min(g,m)),F=["x","y","z"],R=P/g;if(I){let ae={...b,[F[s]]:R},ie=ee(ae,t);b=se({r:255-ie.r,g:255-ie.g,b:255-ie.b},t)}else b={...b,[F[s]]:R};R>x[F[s]]&&(x={...x,[F[s]]:R}),Q(),O(),G()},getRgbForCopy:()=>ee(b,t),onRandom:s=>re(s),onReset:()=>re({r:0,g:0,b:0})},t=o.mode??"rgb",h=o.initialColor?se(o.initialColor,t):{x:.7,y:.4,z:.85},x={x:1,y:1,z:1},b={...h},A=0,f=()=>o.alpha!==void 0,C=Math.max(0,Math.min(1,o.alpha??1));function L(s){let m=Math.max(0,Math.min(1,s));m!==C&&(C=m,Q(),O(),G())}let M=new Set;so();let v=document.createElement("div");v.className="box-picker";let w=document.createElement("canvas");w.style.cursor="grab",v.appendChild(w);let z=De(w,n),k=null,X=document.createElement("div");X.className="box-picker-controls",k=document.createElement("div"),k.className="box-picker-swatch",X.appendChild(k),v.appendChild(X),(l||c||u)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(X,r,{showInputs:l,showModeToggle:c,showCorners:u})}).catch(()=>{}),e.appendChild(v);let D=Ke(w,()=>x,s=>{x=s},()=>b,(s,m)=>{b=s,A=m,Q(),O()},()=>A,()=>z.scale,()=>z.center,G,f,L,()=>C,()=>S(b,z.scale,z.center)),I=!1,B=!0;w.addEventListener("mouseenter",()=>{B=!0,G()}),w.addEventListener("mouseleave",()=>{B=!1,G()}),w.addEventListener("dblclick",()=>{I=!I,Ee(I),Q(),O(),G()});function J(s){if(s===t)return;let m=ee(b,t),g={...b},P={...x};t=s;let F=se(m,t),R={x:1,y:1,z:1};b=F,x=R,te(g,F,P,R,300),O()}let _=null;function te(s,m,g,P,F){_!==null&&cancelAnimationFrame(_);let R=performance.now();function ae(ie){let i=ie-R,d=Math.min(1,i/F),p=1-Math.pow(1-d,3);b={x:s.x+(m.x-s.x)*p,y:s.y+(m.y-s.y)*p,z:s.z+(m.z-s.z)*p},x={x:g.x+(P.x-g.x)*p,y:g.y+(P.y-g.y)*p,z:g.z+(P.z-g.z)*p},W(),Q(),d<1?_=requestAnimationFrame(ae):_=null}_=requestAnimationFrame(ae)}let E=!1;function G(){E||(E=!0,requestAnimationFrame(()=>{E=!1,W()}))}function W(){Be(z,x,b,A,t,D.state,B,{active:D.state.alphaMode,alpha:C,rgb:U()})}function ce(s,m,g){return Math.round(s+(m-s)*g)}function le(s,m){let g=m>0?255:0,P=Math.abs(m);return he({r:ce(s.r,g,P),g:ce(s.g,g,P),b:ce(s.b,g,P)})}function be(s,m){let g=we(m)||{r:128,g:128,b:128},P=le(g,.35),F=le(g,0),R=le(g,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${P}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${F}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${R}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function N(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function oe(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function U(){let s=ee(b,t);return I?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function O(){if(!a)return;let s=U(),m=he(s);k&&be(k,m);let g=v.querySelector(".box-picker-hex");g&&(g.value=m),me(),v._updateModeButtons&&v._updateModeButtons()}function me(){if(!a)return;let s=pe[t],m=I?se(U(),t):b,g=He(m,t),P=v.querySelectorAll(".box-picker-channel input"),F=v.querySelectorAll(".box-picker-channel label");for(let R=0;R<P.length;R++)F[R].textContent=s[R],F[R].style.color="",F[R].style.textShadow="none",P[R].value=String(g[R])}function Q(){let s=U(),m={rgb:s,hsb:ye(s),oklch:ve(s),hex:he(s),alpha:C};for(let g of M)g(m)}function ge(){let s=ee(b,t);return{rgb:s,hsb:ye(s),oklch:ve(s),hex:he(s)}}O(),W();let re=s=>{b=se(s,t),x={x:Math.max(x.x,b.x),y:Math.max(x.y,b.y),z:Math.max(x.z,b.z)};let m=S(b,z.scale,z.center);A=-1;for(let g=Z.length-1;g>=0;g--)if(ue(g,m,x,z.scale,z.center)){A=g;break}Q(),O(),G()};return{getColor:ge,getMode:()=>t,setColor:re,setAlpha:L,getAlpha:()=>C,setMode(s){J(s)},on(s,m){M.add(m)},off(s,m){M.delete(m)},destroy(){D.destroy(),_!==null&&cancelAnimationFrame(_),e.removeChild(v)}}}export{co as createBoxColorPicker,Vo as createColorPicker,Ee as setBoxInvert};
