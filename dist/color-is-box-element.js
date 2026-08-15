var ke={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Fe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function te(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),d=r-s,i=0;d!==0&&(r===o?i=((n-t)/d+6)%6:r===n?i=(t-o)/d+2:i=(o-n)/d+4,i*=60);let a=r===0?0:d/r*100,h=r*100;return{h:i,s:a,b:h}}function ye(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,s=r*(1-Math.abs(o/60%2-1)),d=t-r,i,a,h;return o<60?(i=r,a=s,h=0):o<120?(i=s,a=r,h=0):o<180?(i=0,a=r,h=s):o<240?(i=0,a=s,h=r):o<300?(i=s,a=0,h=r):(i=r,a=0,h=s),{r:Math.round((i+d)*255),g:Math.round((a+d)*255),b:Math.round((h+d)*255)}}function Ve(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Se(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function qe(e){let o=Ve(e.r/255),n=Ve(e.g/255),t=Ve(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,d=.0883024619*o+.2817188376*n+.6299787005*t,i=Math.cbrt(r),a=Math.cbrt(s),h=Math.cbrt(d);return{L:.2104542553*i+.793617785*a-.0040720468*h,a:1.9779984951*i-2.428592205*a+.4505937099*h,b:.0259040371*i+.7827717662*a-.808675766*h}}function eo(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,d=t*t*t,i=r*r*r,a=s*s*s,h=4.0767416621*d-3.3077115913*i+.2309699292*a,b=-1.2684380046*d+2.6097574011*i-.3413193965*a,f=-.0041960863*d-.7034186147*i+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,Se(h)))*255),g:Math.round(Math.max(0,Math.min(1,Se(b)))*255),b:Math.round(Math.max(0,Math.min(1,Se(f)))*255)}}function be(e){let o=qe(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function pe(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return eo(e.l,n,t)}function oo(e,o,n){let t=pe({l:e,c:o,h:n});if(De(t))return{l:e,c:o,h:n};let r=0,s=o;for(let d=0;d<20;d++){let i=(r+s)/2;t=pe({l:e,c:i,h:n}),De(t)?r=i:s=i}return{l:e,c:r,h:n}}function De(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ne(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function fe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Be=.4;function ee(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ye({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Be,r=e.z*359,s=oo(n,t,r);return pe(s)}}function ce(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=te(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=be(e);return{x:n.l,y:Math.min(n.c/Be,1),z:n.h/359}}}function $e(e,o){let n=Fe[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Oe(e,o,n,t,r,s=!1){let d;e===0?d={x:t,y:o,z:n}:e===1?d={x:o,y:t,z:n}:d={x:o,y:n,z:t};let i=ee(d,r);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var Ge=Math.PI/6,to=Math.cos(Ge),no=Math.sin(Ge),ve=!1;function _e(e){ve=e}function S(e,o,n){return{x:n.x+(e.y-e.x)*to*o,y:n.y+e.z*o-(e.x+e.y)*no*o}}function ro(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Z=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],ao=64,Ke={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function Ue(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Xe(e,o,n,t,r,s,d=!0,i=null){let{ctx:a,scale:h,center:b,width:f,height:A}=e;a.save(),a.clearRect(0,0,f,A);let x=ro(o).map(C=>S(C,h,b));if(so(a,h,b,r),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,lo(a,x,o,r),a.restore(),d&&uo(a,r,h,b),t>=0){let C=ee(n,r),L=ve?{r:255-C.r,g:255-C.g,b:255-C.b}:C,M=S(n,h,b);i&&i.active&&ho(a,M,i.rgb,i.alpha),bo(a,M,L)}a.restore()}var io={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function so(e,o,n,t){let r=S({x:0,y:0,z:0},o,n),s=[S({x:1,y:0,z:0},o,n),S({x:0,y:1,z:0},o,n),S({x:0,y:0,z:1},o,n)],d=io[t];e.lineWidth=1.5;for(let i=0;i<s.length;i++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(s[i].x,s[i].y),e.strokeStyle=d[i],e.stroke()}function lo(e,o,n,t){let r=[n.x,n.y,n.z];for(let s=0;s<Z.length;s++){let d=Z[s],i=r[d.fixedAxis],a=r[d.uAxis],h=r[d.vAxis];if(a<.002&&h<.002)continue;let b=d.quad.map(f=>o[f]);co(e,b,d.fixedAxis,i,a,h,t)}}function co(e,o,n,t,r,s,d){let i=ao,a=document.createElement("canvas");a.width=i,a.height=i;let h=a.getContext("2d"),b=h.createImageData(i,i),f=b.data;for(let J=0;J<i;J++)for(let O=0;O<i;O++){let ae=O/(i-1)*r,I=J/(i-1)*s,G=Oe(n,ae,I,t,d,ve),W=(J*i+O)*4;f[W]=G.r,f[W+1]=G.g,f[W+2]=G.b,f[W+3]=255}h.putImageData(b,0,0);let A=o[0],x=o[1],C=o[2],L=o[3],M=x.x-A.x,v=x.y-A.y,w=L.x-A.x,R=L.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(x.x,x.y),e.lineTo(C.x,C.y),e.lineTo(L.x,L.y),e.closePath(),e.clip();let k=2/i,U=A.x-M*k-w*k,D=A.y-v*k-R*k,P=1+2*k,B=1+2*k;e.transform(M*P/i,v*P/i,w*B/i,R*B/i,U,D),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function uo(e,o,n,t){let r=ke[o],s=ve?[S({x:0,y:1,z:1},n,t),S({x:1,y:0,z:1},n,t),S({x:1,y:1,z:0},n,t)]:[S({x:1,y:0,z:0},n,t),S({x:0,y:1,z:0},n,t),S({x:0,y:0,z:1},n,t)],d=ve?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let a=s[i].x+d[i].x,h=s[i].y+d[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[i],a,h)}e.globalAlpha=1,e.restore()}var q=30,re=13;function ho(e,o,n,t){let r=(q+re)/2,s=5,d=Math.floor(o.x/s)*s,i=Math.floor(o.y/s)*s,a=q*2+s*2,h=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,re,0,Math.PI*2,!0),e.clip();for(let M=-1;M*s<=a;M++)for(let v=-1;v*s<=a;v++)e.fillStyle=(M+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(d+M*s,i+v*s,s,s);let b="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",A=e;if(typeof A.createConicGradient=="function"){let M=A.createConicGradient(-Math.PI/2,o.x,o.y);M.addColorStop(0,b),M.addColorStop(1,f),e.fillStyle=M,e.fillRect(d-q,i-q,a,a)}else for(let v=0;v<36;v++){let w=-Math.PI/2+v/36*Math.PI*2,R=-Math.PI/2+(v+1)/36*Math.PI*2,k=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(w)*re,o.y+Math.sin(w)*re),e.arc(o.x,o.y,q,w,R),e.arc(o.x,o.y,re,R,w,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+k.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,re,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let x=h*Math.PI*2,C=o.x+r*Math.sin(x),L=o.y-r*Math.cos(x);e.beginPath(),e.arc(C,L,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function bo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Ne(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(r[e],n,t)}function Le(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function xe(e,o,n,t,r){let s=Z[e],d=[n.x,n.y,n.z],i=d[s.uAxis],a=d[s.vAxis];if(i<.002||a<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[s.fixedAxis]]=d[s.fixedAxis];let f={...h};f[b[s.uAxis]]=i;let A={...h};A[b[s.vAxis]]=a;let x=S(h,t,r),C=S(f,t,r),L=S(A,t,r),M=C.x-x.x,v=C.y-x.y,w=L.x-x.x,R=L.y-x.y,k=M*R-v*w;if(Math.abs(k)<1e-6)return null;let U=o.x-x.x,D=o.y-x.y,P=(U*R-D*w)/k,B=(D*M-U*v)/k;return P<-.05||P>1.05||B<-.05||B>1.05?null:{s:Math.max(0,Math.min(1,P)),t:Math.max(0,Math.min(1,B))}}function je(e,o,n,t,r){let s=Z[e],d=[n.x,n.y,n.z],i=d[s.uAxis],a=d[s.vAxis];if(i<.002||a<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[s.fixedAxis]]=d[s.fixedAxis];let f={...h};f[b[s.uAxis]]=i;let A={...h};A[b[s.vAxis]]=a;let x=S(h,t,r),C=S(f,t,r),L=S(A,t,r),M=C.x-x.x,v=C.y-x.y,w=L.x-x.x,R=L.y-x.y,k=M*R-v*w;if(Math.abs(k)<1e-6)return null;let U=o.x-x.x,D=o.y-x.y,P=(U*R-D*w)/k,B=(D*M-U*v)/k;return{s:Math.max(0,Math.min(1,P)),t:Math.max(0,Math.min(1,B))}}var We=22;function Ye(e,o,n,t,r,s,d,i,a,h,b,f,A){let x={...Ke};function C(l){let u=e.getBoundingClientRect();return{x:l.clientX-u.left,y:l.clientY-u.top}}let L=!1,M=9,v=1e3,w=null;function R(){k(),w=setTimeout(U,v)}function k(){w!==null&&(clearTimeout(w),w=null)}function U(){w=null,x.alphaMode=!0,ge(),ie(),a()}function D(l){let u=A();return Math.hypot(l.x-u.x,l.y-u.y)}function P(l){let u=A();return(Math.atan2(l.x-u.x,-(l.y-u.y))+Math.PI*2)%(Math.PI*2)}function B(l){b(P(l)/(Math.PI*2)),a()}function J(l){let u=D(l);return u>=re-4&&u<=q+6}function O(l){let u=o(),p=d(),y=i();for(let T=0;T<3;T++){let V=Ne(T,u,p,y),H=l.x-V.x,N=l.y-V.y;if(H*H+N*N<=We*We)return T}return-1}function ae(l){let u=o(),p=d(),y=i();for(let T=Z.length-1;T>=0;T--){let V=xe(T,l,u,p,y);if(V)return{faceIndex:T,...V}}return null}let I=-1,G={x:0,y:0},W=0;function de(l,u){I=l,G=u,W=o()[["x","y","z"][l]],x.draggingAxisHandle=l,e.style.cursor="grabbing",a()}function ue(l){if(k(),I<0)return;let u=l.x-G.x,p=l.y-G.y,T=Le()[I],V=d(),N=(u*T.x+p*T.y)/V,Y=Math.max(0,Math.min(1,W+N)),j=o(),_=["x","y","z"],he={...j,[_[I]]:Y};n(he);let me=t(),Pe=s(),Ie=Pe>=0?Z[Pe]:null,Te={...me};Ie&&I===Ie.fixedAxis?Te[_[I]]=Y:Te[_[I]]=Math.min(me[_[I]],Y),r(Te,s()),a()}function ge(){I=-1,x.draggingAxisHandle=-1}let X=-1,oe=null,K=null,$=!1;function Me(l,u,p,y){X=l,x.draggingFace=l,oe=null,K=null,$=!1,y&&($=!0,K={s:u,t:p}),Ce(l,u,p),e.style.cursor="crosshair",a()}function Q(l,u,p){if(k(),X<0)return;let y=o(),T=d(),V=i(),H=xe(X,l,y,T,V),N=X;if(!H&&!p){for(let _=Z.length-1;_>=0;_--)if(_!==X&&(H=xe(_,l,y,T,V),H)){N=_;break}}if(!H&&p&&(H=je(X,l,y,T,V),N=X),!H){a();return}N!==X&&(X=N,x.draggingFace=N,oe=null,$=!1,K=null);let{s:Y,t:j}=H;if(u&&K){if($){let _=Math.abs(Y-K.s),he=Math.abs(j-K.t),me=.02;(_>me||he>me)&&(oe=_>=he?"u":"v",$=!1)}oe==="u"?j=K.t:oe==="v"&&(Y=K.s)}else u||(oe=null,$=!1,K=null);Ce(N,Y,j),a()}function Ce(l,u,p){let y=Z[l],T=o(),V=["x","y","z"],H={...t()};H[V[y.uAxis]]=u*T[V[y.uAxis]],H[V[y.vAxis]]=p*T[V[y.vAxis]],H[V[y.fixedAxis]]=T[V[y.fixedAxis]],r(H,l)}function ie(){X=-1,x.draggingFace=-1,oe=null,$=!1,K=null}function c(l){let u=C(l);if(h()){if(x.alphaMode){if(D(u)<=M){x.alphaMode=!1,a();return}if(J(u)){l.preventDefault(),L=!0,B(u);return}x.alphaMode=!1,a();return}D(u)<=M&&R()}let p=O(u);if(p>=0){l.preventDefault(),de(p,u);return}let y=ae(u);y&&(l.preventDefault(),Me(y.faceIndex,y.s,y.t,l.shiftKey))}function g(l){let u=C(l);if(L){l.preventDefault(),B(u);return}if(I>=0){l.preventDefault(),ue(u);return}if(X>=0){l.preventDefault(),Q(u,l.shiftKey,l.altKey);return}let p=O(u),y=ae(u),T=p,V=p>=0?-1:y?y.faceIndex:-1;(T!==x.hoveredAxisHandle||V!==x.hoveredFace)&&(x.hoveredAxisHandle=T,x.hoveredFace=V,e.style.cursor=T>=0?"grab":V>=0?"crosshair":"default",a())}function m(l){k(),L=!1;let u=I>=0||X>=0;ge(),ie(),u&&(x.hoveredAxisHandle=-1,x.hoveredFace=-1,e.style.cursor="default",a())}function E(l){if(l.touches.length!==1)return;let u=C(l.touches[0]);if(h()){if(x.alphaMode){if(D(u)<=M){x.alphaMode=!1,a();return}if(J(u)){l.preventDefault(),L=!0,B(u);return}x.alphaMode=!1,a();return}D(u)<=M&&R()}let p=O(u);if(p>=0){l.preventDefault(),de(p,u);return}let y=ae(u);y&&(l.preventDefault(),Me(y.faceIndex,y.s,y.t,!1))}function F(l){if(l.touches.length!==1)return;let u=C(l.touches[0]);L?(l.preventDefault(),B(u)):I>=0?(l.preventDefault(),ue(u)):X>=0&&(l.preventDefault(),Q(u,!1,!1))}function z(l){k(),L=!1,ge(),ie(),a()}function se(l){if(x.alphaMode){if(l.key==="Escape"){x.alphaMode=!1,a();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),b(Math.min(1,f()+(l.shiftKey?.08:.02))),a();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),b(Math.max(0,f()-(l.shiftKey?.08:.02))),a();return}}let u=l.shiftKey?.04:.004,p=t(),y=o(),T=Le(),V=0,H=0;switch(l.key){case"ArrowRight":V=1;break;case"ArrowLeft":V=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}l.preventDefault();let N={...p},Y=["x","y","z"];for(let j=0;j<3;j++){let _=V*T[j].x+H*T[j].y;if(Math.abs(_)>.3){let he=p[Y[j]]+u*Math.sign(_);N[Y[j]]=Math.max(0,Math.min(y[Y[j]],he))}}r(N,s()),a()}e.addEventListener("mousedown",c),window.addEventListener("mousemove",g),window.addEventListener("mouseup",m),e.addEventListener("touchstart",E,{passive:!1}),e.addEventListener("touchmove",F,{passive:!1}),e.addEventListener("touchend",z),e.addEventListener("keydown",se),e.setAttribute("tabindex","0");function le(){k(),e.removeEventListener("mousedown",c),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",m),e.removeEventListener("touchstart",E),e.removeEventListener("touchmove",F),e.removeEventListener("touchend",z),e.removeEventListener("keydown",se)}return{state:x,destroy:le}}var Ze=`.box-picker {\r
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
`;var Qe=go,Je=!1;function xo(){if(Je||typeof document>"u")return;Je=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ze,document.head.appendChild(e)}function go(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,s=o.showModeToggle??!1,d=o.showCorners??!1,i={mode:()=>a,switchMode:c=>J(c),onHexInput:c=>{let g=fe(c);g?(f=ce(P?{r:255-g.r,g:255-g.g,b:255-g.b}:g,a),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)},Q(),$(),G()):$()},onChannelInput:(c,g,m)=>{let E=Math.max(0,Math.min(m,g)),F=["x","y","z"],z=E/m;if(P){let se={...f,[F[c]]:z},le=ee(se,a);f=ce({r:255-le.r,g:255-le.g,b:255-le.b},a)}else f={...f,[F[c]]:z};z>b[F[c]]&&(b={...b,[F[c]]:z}),Q(),$(),G()},getRgbForCopy:()=>ee(f,a),onRandom:c=>ie(c),onReset:()=>ie({r:0,g:0,b:0})},a=o.mode??"rgb",h=o.initialColor?ce(o.initialColor,a):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},f={...h},A=0,x=()=>o.alpha!==void 0,C=Math.max(0,Math.min(1,o.alpha??1));function L(c){let g=Math.max(0,Math.min(1,c));g!==C&&(C=g,Q(),$(),G())}let M=new Set;xo();let v=document.createElement("div");v.className="box-picker";let w=document.createElement("canvas");w.style.cursor="grab",v.appendChild(w);let R=Ue(w,n),k=null,U=document.createElement("div");U.className="box-picker-controls",k=document.createElement("div"),k.className="box-picker-swatch",U.appendChild(k),v.appendChild(U),(r||s||d)&&import("./controls-VBFXR3DH.js").then(c=>{c.createControls(U,i,{showInputs:r,showModeToggle:s,showCorners:d})}).catch(()=>{}),e.appendChild(v);let D=Ye(w,()=>b,c=>{b=c},()=>f,(c,g)=>{f=c,A=g,Q(),$()},()=>A,()=>R.scale,()=>R.center,G,x,L,()=>C,()=>S(f,R.scale,R.center)),P=!1,B=!0;w.addEventListener("mouseenter",()=>{B=!0,G()}),w.addEventListener("mouseleave",()=>{B=!1,G()}),w.addEventListener("dblclick",()=>{P=!P,_e(P),Q(),$(),G()});function J(c){if(c===a)return;let g=ee(f,a),m={...f},E={...b};a=c;let F=ce(g,a),z={x:1,y:1,z:1};f=F,b=z,ae(m,F,E,z,300),$()}let O=null;function ae(c,g,m,E,F){O!==null&&cancelAnimationFrame(O);let z=performance.now();function se(le){let l=le-z,u=Math.min(1,l/F),p=1-Math.pow(1-u,3);f={x:c.x+(g.x-c.x)*p,y:c.y+(g.y-c.y)*p,z:c.z+(g.z-c.z)*p},b={x:m.x+(E.x-m.x)*p,y:m.y+(E.y-m.y)*p,z:m.z+(E.z-m.z)*p},W(),Q(),u<1?O=requestAnimationFrame(se):O=null}O=requestAnimationFrame(se)}let I=!1;function G(){I||(I=!0,requestAnimationFrame(()=>{I=!1,W()}))}function W(){Xe(R,b,f,A,a,D.state,B,{active:D.state.alphaMode,alpha:C,rgb:K()})}function de(c,g,m){return Math.round(c+(g-c)*m)}function ue(c,g){let m=g>0?255:0,E=Math.abs(g);return ne({r:de(c.r,m,E),g:de(c.g,m,E),b:de(c.b,m,E)})}function ge(c,g){let m=fe(g)||{r:128,g:128,b:128},E=ue(m,.35),F=ue(m,0),z=ue(m,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${E}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${F}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${z}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function X(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function oe(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function K(){let c=ee(f,a);return P?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function $(){if(!t)return;let c=K(),g=ne(c);k&&ge(k,g);let m=v.querySelector(".box-picker-hex");m&&(m.value=g),Me(),v._updateModeButtons&&v._updateModeButtons()}function Me(){if(!t)return;let c=ke[a],g=P?ce(K(),a):f,m=$e(g,a),E=v.querySelectorAll(".box-picker-channel input"),F=v.querySelectorAll(".box-picker-channel label");for(let z=0;z<E.length;z++)F[z].textContent=c[z],F[z].style.color="",F[z].style.textShadow="none",E[z].value=String(m[z])}function Q(){let c=K(),g={rgb:c,hsb:te(c),oklch:be(c),hex:ne(c),alpha:C};for(let m of M)m(g)}function Ce(){let c=ee(f,a);return{rgb:c,hsb:te(c),oklch:be(c),hex:ne(c)}}$(),W();let ie=c=>{f=ce(c,a),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)};let g=S(f,R.scale,R.center);A=-1;for(let m=Z.length-1;m>=0;m--)if(xe(m,g,b,R.scale,R.center)){A=m;break}Q(),$(),G()};return{getColor:Ce,getMode:()=>a,setColor:ie,setAlpha:L,getAlpha:()=>C,setMode(c){J(c)},on(c,g){M.add(g)},off(c,g){M.delete(g)},destroy(){D.destroy(),O!==null&&cancelAnimationFrame(O),e.removeChild(v)}}}function He(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:fe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=fe(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Re(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Re(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ye({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ye({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:pe({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Re(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ye({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Ae(e,o,n=1){if(o==="hex")return ne(e);if(o==="hex-alpha")return ne(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=ze(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=ze(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=te(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=te(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=ze(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=te(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=be(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Re(e,o,n){let t=o/100,r=n/100,s=(1-Math.abs(2*r-1))*t,d=s*(1-Math.abs(e/60%2-1)),i=r-s/2,a=0,h=0,b=0;return e<60?(a=s,h=d):e<120?(a=d,h=s):e<180?(h=s,b=d):e<240?(h=d,b=s):e<300?(a=d,b=s):(a=s,b=d),{r:Math.round((a+i)*255),g:Math.round((h+i)*255),b:Math.round((b+i)*255)}}function ze(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),d=(r+s)/2;if(r===s)return{h:0,s:0,l:d*100};let i=r-s,a=d>.5?i/(2-r-s):i/(r+s),h=0;return r===o?h=((n-t)/i+(n<t?6:0))*60:r===n?h=((t-o)/i+2)*60:h=((o-n)/i+4)*60,{h,s:a*100,l:d*100}}var we=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?He(t,this.model):null;this.alpha=r?.alpha??1;let s=r?.rgb??{r:255,g:255,b:255},d=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=Qe(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...d.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",Ae(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Ae(i.rgb,this.model,i.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=He(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Ae({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Ee=class extends we{constructor(){super("hex")}},mo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of mo)customElements.get(e)||customElements.define(e,class extends we{constructor(){super(o)}});var $o=Ee;export{Ee as ColorIsBoxElement,go as createBoxColorPicker,Qe as createColorPicker,$o as default,_e as setBoxInvert};
