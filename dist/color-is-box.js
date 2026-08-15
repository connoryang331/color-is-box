var ue={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ae={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function be(e){let o=e.r/255,n=e.g/255,i=e.b/255,d=Math.max(o,n,i),l=Math.min(o,n,i),u=d-l,a=0;u!==0&&(d===o?a=((n-i)/u+6)%6:d===n?a=(i-o)/u+2:a=(o-n)/u+4,a*=60);let r=d===0?0:u/d*100,x=d*100;return{h:a,s:r,b:x}}function _e(e){let o=e.h,n=e.s/100,i=e.b/100,d=i*n,l=d*(1-Math.abs(o/60%2-1)),u=i-d,a,r,x;return o<60?(a=d,r=l,x=0):o<120?(a=l,r=d,x=0):o<180?(a=0,r=d,x=l):o<240?(a=0,r=l,x=d):o<300?(a=l,r=0,x=d):(a=d,r=0,x=l),{r:Math.round((a+u)*255),g:Math.round((r+u)*255),b:Math.round((x+u)*255)}}function ge(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function pe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Ge(e){let o=ge(e.r/255),n=ge(e.g/255),i=ge(e.b/255),d=.4122214708*o+.5363325363*n+.0514459929*i,l=.2119034982*o+.6806995451*n+.1073969566*i,u=.0883024619*o+.2817188376*n+.6299787005*i,a=Math.cbrt(d),r=Math.cbrt(l),x=Math.cbrt(u);return{L:.2104542553*a+.793617785*r-.0040720468*x,a:1.9779984951*a-2.428592205*r+.4505937099*x,b:.0259040371*a+.7827717662*r-.808675766*x}}function Ke(e,o,n){let i=e+.3963377774*o+.2158037573*n,d=e-.1055613458*o-.0638541728*n,l=e-.0894841775*o-1.291485548*n,u=i*i*i,a=d*d*d,r=l*l*l,x=4.0767416621*u-3.3077115913*a+.2309699292*r,m=-1.2684380046*u+2.6097574011*a-.3413193965*r,f=-.0041960863*u-.7034186147*a+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,pe(x)))*255),g:Math.round(Math.max(0,Math.min(1,pe(m)))*255),b:Math.round(Math.max(0,Math.min(1,pe(f)))*255)}}function fe(e){let o=Ge(e),n=Math.sqrt(o.a*o.a+o.b*o.b),i=Math.atan2(o.b,o.a)*(180/Math.PI);return i<0&&(i+=360),{l:o.L,c:n,h:n<1e-4?0:i}}function ye(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),i=e.c*Math.sin(o);return Ke(e.l,n,i)}function Ue(e,o,n){let i=ye({l:e,c:o,h:n});if(we(i))return{l:e,c:o,h:n};let d=0,l=o;for(let u=0;u<20;u++){let a=(d+l)/2;i=ye({l:e,c:a,h:n}),we(i)?d=a:l=a}return{l:e,c:d,h:n}}function we(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ie(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ve(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ve=.4;function Z(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return _e({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,i=e.y*Ve,d=e.z*359,l=Ue(n,i,d);return ye(l)}}function ee(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=be(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=fe(e);return{x:n.l,y:Math.min(n.c/Ve,1),z:n.h/359}}}function Te(e,o){let n=Ae[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ze(e,o,n,i,d,l=!1){let u;e===0?u={x:i,y:o,z:n}:e===1?u={x:o,y:i,z:n}:u={x:o,y:n,z:i};let a=Z(u,d);return l?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Se=Math.PI/6,Xe=Math.cos(Se),$e=Math.sin(Se),se=!1;function Le(e){se=e}function L(e,o,n){return{x:n.x+(e.y-e.x)*Xe*o,y:n.y+e.z*o-(e.x+e.y)*$e*o}}function Ne(e){let{x:o,y:n,z:i}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:i},{x:o,y:n,z:0},{x:o,y:0,z:i},{x:0,y:n,z:i},{x:o,y:n,z:i}]}var N=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],je=64,Re={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function He(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let i=e.getContext("2d");return i.scale(n,n),{ctx:i,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ie(e,o,n,i,d,l,u=!0,a=null){let{ctx:r,scale:x,center:m,width:f,height:w}=e;r.save(),r.clearRect(0,0,f,w);let b=Ne(o).map(k=>L(k,x,m));if(Ye(r,x,m,d),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,Ze(r,b,o,d),r.restore(),u&&Qe(r,d,x,m),i>=0){let k=Z(n,d),R=se?{r:255-k.r,g:255-k.g,b:255-k.b}:k,C=L(n,x,m);a&&a.active&&qe(r,C,a.rgb,a.alpha),eo(r,C,R)}r.restore()}var We={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Ye(e,o,n,i){let d=L({x:0,y:0,z:0},o,n),l=[L({x:1,y:0,z:0},o,n),L({x:0,y:1,z:0},o,n),L({x:0,y:0,z:1},o,n)],u=We[i];e.lineWidth=1.5;for(let a=0;a<l.length;a++)e.beginPath(),e.moveTo(d.x,d.y),e.lineTo(l[a].x,l[a].y),e.strokeStyle=u[a],e.stroke()}function Ze(e,o,n,i){let d=[n.x,n.y,n.z];for(let l=0;l<N.length;l++){let u=N[l],a=d[u.fixedAxis],r=d[u.uAxis],x=d[u.vAxis];if(r<.002&&x<.002)continue;let m=u.quad.map(f=>o[f]);Je(e,m,u.fixedAxis,a,r,x,i)}}function Je(e,o,n,i,d,l,u){let a=je,r=document.createElement("canvas");r.width=a,r.height=a;let x=r.getContext("2d"),m=x.createImageData(a,a),f=m.data;for(let j=0;j<a;j++)for(let _=0;_<a;_++){let oe=_/(a-1)*d,J=j/(a-1)*l,z=ze(n,oe,J,i,u,se),D=(j*a+_)*4;f[D]=z.r,f[D+1]=z.g,f[D+2]=z.b,f[D+3]=255}x.putImageData(m,0,0);let w=o[0],b=o[1],k=o[2],R=o[3],C=b.x-w.x,y=b.y-w.y,H=R.x-w.x,T=R.y-w.y;e.save(),e.beginPath(),e.moveTo(w.x,w.y),e.lineTo(b.x,b.y),e.lineTo(k.x,k.y),e.lineTo(R.x,R.y),e.closePath(),e.clip();let S=2/a,E=w.x-C*S-H*S,O=w.y-y*S-T*S,A=1+2*S,F=1+2*S;e.transform(C*A/a,y*A/a,H*F/a,T*F/a,E,O),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function Qe(e,o,n,i){let d=ue[o],l=se?[L({x:0,y:1,z:1},n,i),L({x:1,y:0,z:1},n,i),L({x:1,y:1,z:0},n,i)]:[L({x:1,y:0,z:0},n,i),L({x:0,y:1,z:0},n,i),L({x:0,y:0,z:1},n,i)],u=se?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let r=l[a].x+u[a].x,x=l[a].y+u[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(d[a],r,x)}e.globalAlpha=1,e.restore()}var Y=30,Q=13;function qe(e,o,n,i){let d=(Y+Q)/2,l=5,u=Math.floor(o.x/l)*l,a=Math.floor(o.y/l)*l,r=Y*2+l*2,x=Math.max(0,Math.min(1,i));e.save(),e.beginPath(),e.arc(o.x,o.y,Y,0,Math.PI*2),e.arc(o.x,o.y,Q,0,Math.PI*2,!0),e.clip();for(let C=-1;C*l<=r;C++)for(let y=-1;y*l<=r;y++)e.fillStyle=(C+y)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+C*l,a+y*l,l,l);let m="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",w=e;if(typeof w.createConicGradient=="function"){let C=w.createConicGradient(-Math.PI/2,o.x,o.y);C.addColorStop(0,m),C.addColorStop(1,f),e.fillStyle=C,e.fillRect(u-Y,a-Y,r,r)}else for(let y=0;y<36;y++){let H=-Math.PI/2+y/36*Math.PI*2,T=-Math.PI/2+(y+1)/36*Math.PI*2,S=(y+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(H)*Q,o.y+Math.sin(H)*Q),e.arc(o.x,o.y,Y,H,T),e.arc(o.x,o.y,Q,T,H,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+S.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,Y,0,Math.PI*2),e.arc(o.x,o.y,Q,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-Y-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let b=x*Math.PI*2,k=o.x+d*Math.sin(b),R=o.y-d*Math.cos(b);e.beginPath(),e.arc(k,R,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function eo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Pe(e,o,n,i){let d=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return L(d[e],n,i)}function Me(){let e={x:0,y:0};return[L({x:1,y:0,z:0},1,e),L({x:0,y:1,z:0},1,e),L({x:0,y:0,z:1},1,e)].map(n=>{let i=Math.sqrt(n.x*n.x+n.y*n.y);return i>0?{x:n.x/i,y:n.y/i}:{x:0,y:0}})}function re(e,o,n,i,d){let l=N[e],u=[n.x,n.y,n.z],a=u[l.uAxis],r=u[l.vAxis];if(a<.002||r<.002)return null;let x={x:0,y:0,z:0},m=["x","y","z"];x[m[l.fixedAxis]]=u[l.fixedAxis];let f={...x};f[m[l.uAxis]]=a;let w={...x};w[m[l.vAxis]]=r;let b=L(x,i,d),k=L(f,i,d),R=L(w,i,d),C=k.x-b.x,y=k.y-b.y,H=R.x-b.x,T=R.y-b.y,S=C*T-y*H;if(Math.abs(S)<1e-6)return null;let E=o.x-b.x,O=o.y-b.y,A=(E*T-O*H)/S,F=(O*C-E*y)/S;return A<-.05||A>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,A)),t:Math.max(0,Math.min(1,F))}}function Ee(e,o,n,i,d){let l=N[e],u=[n.x,n.y,n.z],a=u[l.uAxis],r=u[l.vAxis];if(a<.002||r<.002)return null;let x={x:0,y:0,z:0},m=["x","y","z"];x[m[l.fixedAxis]]=u[l.fixedAxis];let f={...x};f[m[l.uAxis]]=a;let w={...x};w[m[l.vAxis]]=r;let b=L(x,i,d),k=L(f,i,d),R=L(w,i,d),C=k.x-b.x,y=k.y-b.y,H=R.x-b.x,T=R.y-b.y,S=C*T-y*H;if(Math.abs(S)<1e-6)return null;let E=o.x-b.x,O=o.y-b.y,A=(E*T-O*H)/S,F=(O*C-E*y)/S;return{s:Math.max(0,Math.min(1,A)),t:Math.max(0,Math.min(1,F))}}var Fe=22;function De(e,o,n,i,d,l,u,a,r,x,m,f,w){let b={...Re};function k(t){let c=e.getBoundingClientRect();return{x:t.clientX-c.left,y:t.clientY-c.top}}let R=!1,C=9;function y(t){let c=w();return Math.hypot(t.x-c.x,t.y-c.y)}function H(t){let c=w();return(Math.atan2(t.x-c.x,-(t.y-c.y))+Math.PI*2)%(Math.PI*2)}function T(t){m(H(t)/(Math.PI*2)),r()}function S(t){let c=y(t);return c>=Q-4&&c<=Y+6}function E(t){let c=o(),h=u(),p=a();for(let M=0;M<3;M++){let V=Pe(M,c,h,p),I=t.x-V.x,P=t.y-V.y;if(I*I+P*P<=Fe*Fe)return M}return-1}function O(t){let c=o(),h=u(),p=a();for(let M=N.length-1;M>=0;M--){let V=re(M,t,c,h,p);if(V)return{faceIndex:M,...V}}return null}let A=-1,F={x:0,y:0},j=0;function _(t,c){A=t,F=c,j=o()[["x","y","z"][t]],b.draggingAxisHandle=t,e.style.cursor="grabbing",r()}function oe(t){if(A<0)return;let c=t.x-F.x,h=t.y-F.y,M=Me()[A],V=u(),P=(c*M.x+h*M.y)/V,$=Math.max(0,Math.min(1,j+P)),K=o(),B=["x","y","z"],te={...K,[B[A]]:$};n(te);let ae=i(),Ce=l(),ke=Ce>=0?N[Ce]:null,me={...ae};ke&&A===ke.fixedAxis?me[B[A]]=$:me[B[A]]=Math.min(ae[B[A]],$),d(me,l()),r()}function J(){A=-1,b.draggingAxisHandle=-1}let z=-1,D=null,G=null,X=!1;function ce(t,c,h,p){z=t,b.draggingFace=t,D=null,G=null,X=!1,p&&(X=!0,G={s:c,t:h}),xe(t,c,h),e.style.cursor="crosshair",r()}function he(t,c,h){if(z<0)return;let p=o(),M=u(),V=a(),I=re(z,t,p,M,V),P=z;if(!I&&!h){for(let B=N.length-1;B>=0;B--)if(B!==z&&(I=re(B,t,p,M,V),I)){P=B;break}}if(!I&&h&&(I=Ee(z,t,p,M,V),P=z),!I){r();return}P!==z&&(z=P,b.draggingFace=P,D=null,X=!1,G=null);let{s:$,t:K}=I;if(c&&G){if(X){let B=Math.abs($-G.s),te=Math.abs(K-G.t),ae=.02;(B>ae||te>ae)&&(D=B>=te?"u":"v",X=!1)}D==="u"?K=G.t:D==="v"&&($=G.s)}else c||(D=null,X=!1,G=null);xe(P,$,K),r()}function xe(t,c,h){let p=N[t],M=o(),V=["x","y","z"],I={...i()};I[V[p.uAxis]]=c*M[V[p.uAxis]],I[V[p.vAxis]]=h*M[V[p.vAxis]],I[V[p.fixedAxis]]=M[V[p.fixedAxis]],d(I,t)}function q(){z=-1,b.draggingFace=-1,D=null,X=!1,G=null}function U(t){let c=k(t);if(x()){if(b.alphaMode){if(y(c)<=C){b.alphaMode=!1,r();return}if(S(c)){t.preventDefault(),R=!0,T(c);return}b.alphaMode=!1,r();return}if(y(c)<=C){t.preventDefault(),b.alphaMode=!0,r();return}}let h=E(c);if(h>=0){t.preventDefault(),_(h,c);return}let p=O(c);p&&(t.preventDefault(),ce(p.faceIndex,p.s,p.t,t.shiftKey))}function le(t){let c=k(t);if(R){t.preventDefault(),T(c);return}if(A>=0){t.preventDefault(),oe(c);return}if(z>=0){t.preventDefault(),he(c,t.shiftKey,t.altKey);return}let h=E(c),p=O(c),M=h,V=h>=0?-1:p?p.faceIndex:-1;(M!==b.hoveredAxisHandle||V!==b.hoveredFace)&&(b.hoveredAxisHandle=M,b.hoveredFace=V,e.style.cursor=M>=0?"grab":V>=0?"crosshair":"default",r())}function W(t){R=!1;let c=A>=0||z>=0;J(),q(),c&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",r())}function de(t){if(t.touches.length!==1)return;let c=k(t.touches[0]);if(x()){if(b.alphaMode){if(y(c)<=C){b.alphaMode=!1,r();return}if(S(c)){t.preventDefault(),R=!0,T(c);return}b.alphaMode=!1,r();return}if(y(c)<=C){t.preventDefault(),b.alphaMode=!0,r();return}}let h=E(c);if(h>=0){t.preventDefault(),_(h,c);return}let p=O(c);p&&(t.preventDefault(),ce(p.faceIndex,p.s,p.t,!1))}function ne(t){if(t.touches.length!==1)return;let c=k(t.touches[0]);R?(t.preventDefault(),T(c)):A>=0?(t.preventDefault(),oe(c)):z>=0&&(t.preventDefault(),he(c,!1,!1))}function s(t){R=!1,J(),q(),r()}function g(t){if(b.alphaMode){if(t.key==="Escape"){b.alphaMode=!1,r();return}if(t.key==="ArrowUp"||t.key==="ArrowRight"){t.preventDefault(),m(Math.min(1,f()+(t.shiftKey?.08:.02))),r();return}if(t.key==="ArrowDown"||t.key==="ArrowLeft"){t.preventDefault(),m(Math.max(0,f()-(t.shiftKey?.08:.02))),r();return}}let c=t.shiftKey?.04:.004,h=i(),p=o(),M=Me(),V=0,I=0;switch(t.key){case"ArrowRight":V=1;break;case"ArrowLeft":V=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}t.preventDefault();let P={...h},$=["x","y","z"];for(let K=0;K<3;K++){let B=V*M[K].x+I*M[K].y;if(Math.abs(B)>.3){let te=h[$[K]]+c*Math.sign(B);P[$[K]]=Math.max(0,Math.min(p[$[K]],te))}}d(P,l()),r()}e.addEventListener("mousedown",U),window.addEventListener("mousemove",le),window.addEventListener("mouseup",W),e.addEventListener("touchstart",de,{passive:!1}),e.addEventListener("touchmove",ne,{passive:!1}),e.addEventListener("touchend",s),e.addEventListener("keydown",g),e.setAttribute("tabindex","0");function v(){e.removeEventListener("mousedown",U),window.removeEventListener("mousemove",le),window.removeEventListener("mouseup",W),e.removeEventListener("touchstart",de),e.removeEventListener("touchmove",ne),e.removeEventListener("touchend",s),e.removeEventListener("keydown",g)}return{state:b,destroy:v}}var Be=`.box-picker {\r
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
`;var Mo=to,Oe=!1;function no(){if(Oe||typeof document>"u")return;Oe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Be,document.head.appendChild(e)}function to(e,o={}){let n=o.size??300,i=o.controls??!0,d=o.showInputs??!1,l=o.showModeToggle??!1,u=o.showCorners??!1,a={mode:()=>r,switchMode:s=>j(s),onHexInput:s=>{let g=ve(s);g?(f=ee(A?{r:255-g.r,g:255-g.g,b:255-g.b}:g,r),m={x:Math.max(m.x,f.x),y:Math.max(m.y,f.y),z:Math.max(m.z,f.z)},W(),U(),z()):U()},onChannelInput:(s,g,v)=>{let t=Math.max(0,Math.min(v,g)),c=["x","y","z"],h=t/v;if(A){let p={...f,[c[s]]:h},M=Z(p,r);f=ee({r:255-M.r,g:255-M.g,b:255-M.b},r)}else f={...f,[c[s]]:h};h>m[c[s]]&&(m={...m,[c[s]]:h}),W(),U(),z()},getRgbForCopy:()=>Z(f,r),onRandom:s=>ne(s),onReset:()=>ne({r:0,g:0,b:0})},r=o.mode??"rgb",x=o.initialColor?ee(o.initialColor,r):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},f={...x},w=0,b=()=>o.alpha!==void 0,k=Math.max(0,Math.min(1,o.alpha??1));function R(s){let g=Math.max(0,Math.min(1,s));g!==k&&(k=g,W(),U(),z())}let C=new Set;no();let y=document.createElement("div");y.className="box-picker";let H=document.createElement("canvas");H.style.cursor="grab",y.appendChild(H);let T=He(H,n),S=null,E=document.createElement("div");E.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",E.appendChild(S),y.appendChild(E),(d||l||u)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(E,a,{showInputs:d,showModeToggle:l,showCorners:u})}).catch(()=>{}),e.appendChild(y);let O=De(H,()=>m,s=>{m=s},()=>f,(s,g)=>{f=s,w=g,W(),U()},()=>w,()=>T.scale,()=>T.center,z,b,R,()=>k,()=>L(f,T.scale,T.center)),A=!1,F=!0;H.addEventListener("mouseenter",()=>{F=!0,z()}),H.addEventListener("mouseleave",()=>{F=!1,z()}),H.addEventListener("dblclick",()=>{A=!A,Le(A),W(),U(),z()});function j(s){if(s===r)return;let g=Z(f,r),v={...f},t={...m};r=s;let c=ee(g,r),h={x:1,y:1,z:1};f=c,m=h,oe(v,c,t,h,300),U()}let _=null;function oe(s,g,v,t,c){_!==null&&cancelAnimationFrame(_);let h=performance.now();function p(M){let V=M-h,I=Math.min(1,V/c),P=1-Math.pow(1-I,3);f={x:s.x+(g.x-s.x)*P,y:s.y+(g.y-s.y)*P,z:s.z+(g.z-s.z)*P},m={x:v.x+(t.x-v.x)*P,y:v.y+(t.y-v.y)*P,z:v.z+(t.z-v.z)*P},D(),W(),I<1?_=requestAnimationFrame(p):_=null}_=requestAnimationFrame(p)}let J=!1;function z(){J||(J=!0,requestAnimationFrame(()=>{J=!1,D()}))}function D(){Ie(T,m,f,w,r,O.state,F,{active:O.state.alphaMode,alpha:k,rgb:q()})}function G(s,g,v){return Math.round(s+(g-s)*v)}function X(s,g){let v=g>0?255:0,t=Math.abs(g);return ie({r:G(s.r,v,t),g:G(s.g,v,t),b:G(s.b,v,t)})}function ce(s,g){let v=ve(g)||{r:128,g:128,b:128},t=X(v,.35),c=X(v,0),h=X(v,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${t}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${c}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${h}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function he(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function xe(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function q(){let s=Z(f,r);return A?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function U(){if(!i)return;let s=q(),g=ie(s);S&&ce(S,g);let v=y.querySelector(".box-picker-hex");v&&(v.value=g),le(),y._updateModeButtons&&y._updateModeButtons()}function le(){if(!i)return;let s=ue[r],g=A?ee(q(),r):f,v=Te(g,r),t=y.querySelectorAll(".box-picker-channel input"),c=y.querySelectorAll(".box-picker-channel label");for(let h=0;h<t.length;h++)c[h].textContent=s[h],c[h].style.color="",c[h].style.textShadow="none",t[h].value=String(v[h])}function W(){let s=q(),g={rgb:s,hsb:be(s),oklch:fe(s),hex:ie(s),alpha:k};for(let v of C)v(g)}function de(){let s=Z(f,r);return{rgb:s,hsb:be(s),oklch:fe(s),hex:ie(s)}}U(),D();let ne=s=>{f=ee(s,r),m={x:Math.max(m.x,f.x),y:Math.max(m.y,f.y),z:Math.max(m.z,f.z)};let g=L(f,T.scale,T.center);w=-1;for(let v=N.length-1;v>=0;v--)if(re(v,g,m,T.scale,T.center)){w=v;break}W(),U(),z()};return{getColor:de,getMode:()=>r,setColor:ne,setAlpha:R,getAlpha:()=>k,setMode(s){j(s)},on(s,g){C.add(g)},off(s,g){C.delete(g)},destroy(){O.destroy(),_!==null&&cancelAnimationFrame(_),e.removeChild(y)}}}export{to as createBoxColorPicker,Mo as createColorPicker,Le as setBoxInvert};
