var ColorIsBox=(()=>{var se=Object.defineProperty;var Ie=Object.getOwnPropertyDescriptor;var Be=Object.getOwnPropertyNames;var Oe=Object.prototype.hasOwnProperty;var De=(e,o)=>()=>(e&&(o=e(e=0)),o);var fe=(e,o)=>{for(var t in o)se(e,t,{get:o[t],enumerable:!0})},Pe=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of Be(o))!Oe.call(e,i)&&i!==t&&se(e,i,{get:()=>o[i],enumerable:!(n=Ie(o,i))||n.enumerable});return e};var _e=e=>Pe(se({},"__esModule",{value:!0}),e);var ze={};fe(ze,{createControls:()=>to});function Re(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Ee(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function to(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let i=h=>{let b=document.createElement("button");return b.textContent=h.toUpperCase(),b.addEventListener("click",()=>o.switchMode(h)),n.appendChild(b),b},c=i("oklch"),d=i("rgb"),a=i("hsb"),s=()=>{let h=o.mode();d.classList.toggle("active",h==="rgb"),a.classList.toggle("active",h==="hsb"),c.classList.toggle("active",h==="oklch")};s();let u=o.switchMode;o._markActive=s,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let b=n.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),n.addEventListener("click",()=>{Re(o.getRgbForCopy()?"#"+no(o.getRgbForCopy()):"#ffffff"),Ee(n)});let i=document.createElement("div");i.className="box-picker-channels";let c=[],d=[],a=["R","G","B"];for(let b=0;b<3;b++){let C=document.createElement("div");C.className="box-picker-channel";let m=document.createElement("label");m.textContent=a[b];let y=document.createElement("input");y.type="text",y.inputMode="numeric",C.appendChild(m),C.appendChild(y),i.appendChild(C),c.push(y),d.push(m),y.addEventListener("change",()=>{let M=parseFloat(y.value);isNaN(M)||o.onChannelInput(b,M,255)}),y.addEventListener("click",()=>{let M=o.getRgbForCopy();Re(`${M.r}, ${M.g}, ${M.b}`),Ee(y)})}let s=document.createElement("div");s.className="box-picker-hexrow";let u=document.createElement("div");u.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",u.appendChild(h),u.appendChild(n),s.appendChild(i),s.appendChild(u),e.appendChild(s),e._inputs={hexInput:n,inputs:c,labels:d}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:c,g:d,b:a})}),e.appendChild(n);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function no(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var He=De(()=>{});var io={};fe(io,{createBoxColorPicker:()=>Fe,createColorPicker:()=>ro,setBoxInvert:()=>be});var oe={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},he={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function te(e){let o=e.r/255,t=e.g/255,n=e.b/255,i=Math.max(o,t,n),c=Math.min(o,t,n),d=i-c,a=0;d!==0&&(i===o?a=((t-n)/d+6)%6:i===t?a=(n-o)/d+2:a=(o-t)/d+4,a*=60);let s=i===0?0:d/i*100,u=i*100;return{h:a,s,b:u}}function Ge(e){let o=e.h,t=e.s/100,n=e.b/100,i=n*t,c=i*(1-Math.abs(o/60%2-1)),d=n-i,a,s,u;return o<60?(a=i,s=c,u=0):o<120?(a=c,s=i,u=0):o<180?(a=0,s=i,u=c):o<240?(a=0,s=c,u=i):o<300?(a=c,s=0,u=i):(a=i,s=0,u=c),{r:Math.round((a+d)*255),g:Math.round((s+d)*255),b:Math.round((u+d)*255)}}function ce(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function le(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Ne(e){let o=ce(e.r/255),t=ce(e.g/255),n=ce(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*n,c=.2119034982*o+.6806995451*t+.1073969566*n,d=.0883024619*o+.2817188376*t+.6299787005*n,a=Math.cbrt(i),s=Math.cbrt(c),u=Math.cbrt(d);return{L:.2104542553*a+.793617785*s-.0040720468*u,a:1.9779984951*a-2.428592205*s+.4505937099*u,b:.0259040371*a+.7827717662*s-.808675766*u}}function $e(e,o,t){let n=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,d=n*n*n,a=i*i*i,s=c*c*c,u=4.0767416621*d-3.3077115913*a+.2309699292*s,h=-1.2684380046*d+2.6097574011*a-.3413193965*s,b=-.0041960863*d-.7034186147*a+1.707614701*s;return{r:Math.round(Math.max(0,Math.min(1,le(u)))*255),g:Math.round(Math.max(0,Math.min(1,le(h)))*255),b:Math.round(Math.max(0,Math.min(1,le(b)))*255)}}function ne(e){let o=Ne(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function de(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return $e(e.l,t,n)}function Xe(e,o,t){let n=de({l:e,c:o,h:t});if(me(n))return{l:e,c:o,h:t};let i=0,c=o;for(let d=0;d<20;d++){let a=(i+c)/2;n=de({l:e,c:a,h:t}),me(n)?i=a:c=a}return{l:e,c:i,h:t}}function me(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function J(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ue(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ge=.4;function K(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Ge({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*ge,i=e.z*359,c=Xe(t,n,i);return de(c)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=te(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=ne(e);return{x:t.l,y:Math.min(t.c/ge,1),z:t.h/359}}}function pe(e,o){let t=he[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function ye(e,o,t,n,i,c=!1){let d;e===0?d={x:n,y:o,z:t}:e===1?d={x:o,y:n,z:t}:d={x:o,y:t,z:n};let a=K(d,i);return c?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var ve=Math.PI/6,Ke=Math.cos(ve),Ue=Math.sin(ve),ee=!1;function be(e){ee=e}function V(e,o,t){return{x:t.x+(e.y-e.x)*Ke*o,y:t.y+e.z*o-(e.x+e.y)*Ue*o}}function je(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var _=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],qe=64,Ce={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ke(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Me(e,o,t,n,i,c,d=!0){let{ctx:a,scale:s,center:u,width:h,height:b}=e;a.save(),a.clearRect(0,0,h,b);let C=je(o).map(m=>V(m,s,u));if(Ze(a,s,u,i),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,Ye(a,C,o,i),a.restore(),d&&Je(a,i,s,u),n>=0){let m=K(t,i),y=ee?{r:255-m.r,g:255-m.g,b:255-m.b}:m,M=V(t,s,u);eo(a,M,y)}a.restore()}var We={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Ze(e,o,t,n){let i=V({x:0,y:0,z:0},o,t),c=[V({x:1,y:0,z:0},o,t),V({x:0,y:1,z:0},o,t),V({x:0,y:0,z:1},o,t)],d=We[n];e.lineWidth=1.5;for(let a=0;a<c.length;a++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(c[a].x,c[a].y),e.strokeStyle=d[a],e.stroke()}function Ye(e,o,t,n){let i=[t.x,t.y,t.z];for(let c=0;c<_.length;c++){let d=_[c],a=i[d.fixedAxis],s=i[d.uAxis],u=i[d.vAxis];if(s<.002&&u<.002)continue;let h=d.quad.map(b=>o[b]);Qe(e,h,d.fixedAxis,a,s,u,n)}}function Qe(e,o,t,n,i,c,d){let a=qe,s=document.createElement("canvas");s.width=a,s.height=a;let u=s.getContext("2d"),h=u.createImageData(a,a),b=h.data;for(let P=0;P<a;P++)for(let B=0;B<a;B++){let U=B/(a-1)*i,j=P/(a-1)*c,G=ye(t,U,j,n,d,ee),$=(P*a+B)*4;b[$]=G.r,b[$+1]=G.g,b[$+2]=G.b,b[$+3]=255}u.putImageData(h,0,0);let C=o[0],m=o[1],y=o[2],M=o[3],z=m.x-C.x,F=m.y-C.y,I=M.x-C.x,T=M.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(m.x,m.y),e.lineTo(y.x,y.y),e.lineTo(M.x,M.y),e.closePath(),e.clip();let w=2/a,R=C.x-z*w-I*w,S=C.y-F*w-T*w,H=1+2*w,O=1+2*w;e.transform(z*H/a,F*H/a,I*O/a,T*O/a,R,S),e.imageSmoothingEnabled=!0,e.drawImage(s,0,0),e.restore()}function Je(e,o,t,n){let i=oe[o],c=ee?[V({x:0,y:1,z:1},t,n),V({x:1,y:0,z:1},t,n),V({x:1,y:1,z:0},t,n)]:[V({x:1,y:0,z:0},t,n),V({x:0,y:1,z:0},t,n),V({x:0,y:0,z:1},t,n)],d=ee?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let s=c[a].x+d[a].x,u=c[a].y+d[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(i[a],s,u)}e.globalAlpha=1,e.restore()}function eo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function we(e,o,t,n){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return V(i[e],t,n)}function xe(){let e={x:0,y:0};return[V({x:1,y:0,z:0},1,e),V({x:0,y:1,z:0},1,e),V({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function Y(e,o,t,n,i){let c=_[e],d=[t.x,t.y,t.z],a=d[c.uAxis],s=d[c.vAxis];if(a<.002||s<.002)return null;let u={x:0,y:0,z:0},h=["x","y","z"];u[h[c.fixedAxis]]=d[c.fixedAxis];let b={...u};b[h[c.uAxis]]=a;let C={...u};C[h[c.vAxis]]=s;let m=V(u,n,i),y=V(b,n,i),M=V(C,n,i),z=y.x-m.x,F=y.y-m.y,I=M.x-m.x,T=M.y-m.y,w=z*T-F*I;if(Math.abs(w)<1e-6)return null;let R=o.x-m.x,S=o.y-m.y,H=(R*T-S*I)/w,O=(S*z-R*F)/w;return H<-.05||H>1.05||O<-.05||O>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}function Ae(e,o,t,n,i){let c=_[e],d=[t.x,t.y,t.z],a=d[c.uAxis],s=d[c.vAxis];if(a<.002||s<.002)return null;let u={x:0,y:0,z:0},h=["x","y","z"];u[h[c.fixedAxis]]=d[c.fixedAxis];let b={...u};b[h[c.uAxis]]=a;let C={...u};C[h[c.vAxis]]=s;let m=V(u,n,i),y=V(b,n,i),M=V(C,n,i),z=y.x-m.x,F=y.y-m.y,I=M.x-m.x,T=M.y-m.y,w=z*T-F*I;if(Math.abs(w)<1e-6)return null;let R=o.x-m.x,S=o.y-m.y,H=(R*T-S*I)/w,O=(S*z-R*F)/w;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}var Le=22;function Te(e,o,t,n,i,c,d,a,s){let u={...Ce};function h(x){let g=e.getBoundingClientRect();return{x:x.clientX-g.left,y:x.clientY-g.top}}function b(x){let g=o(),A=d(),p=a();for(let r=0;r<3;r++){let l=we(r,g,A,p),f=x.x-l.x,k=x.y-l.y;if(f*f+k*k<=Le*Le)return r}return-1}function C(x){let g=o(),A=d(),p=a();for(let r=_.length-1;r>=0;r--){let l=Y(r,x,g,A,p);if(l)return{faceIndex:r,...l}}return null}let m=-1,y={x:0,y:0},M=0;function z(x,g){m=x,y=g,M=o()[["x","y","z"][x]],u.draggingAxisHandle=x,e.style.cursor="grabbing",s()}function F(x){if(m<0)return;let g=x.x-y.x,A=x.y-y.y,r=xe()[m],l=d(),k=(g*r.x+A*r.y)/l,L=Math.max(0,Math.min(1,M+k)),v=o(),E=["x","y","z"],D={...v,[E[m]]:L};t(D);let q=n(),Q=c(),X=Q>=0?_[Q]:null,ie={...q};X&&m===X.fixedAxis?ie[E[m]]=L:ie[E[m]]=Math.min(q[E[m]],L),i(ie,c()),s()}function I(){m=-1,u.draggingAxisHandle=-1}let T=-1,w=null,R=null,S=!1;function H(x,g,A,p){T=x,u.draggingFace=x,w=null,R=null,S=!1,p&&(S=!0,R={s:g,t:A}),P(x,g,A),e.style.cursor="crosshair",s()}function O(x,g,A){if(T<0)return;let p=o(),r=d(),l=a(),f=Y(T,x,p,r,l),k=T;if(!f&&!A){for(let E=_.length-1;E>=0;E--)if(E!==T&&(f=Y(E,x,p,r,l),f)){k=E;break}}if(!f&&A&&(f=Ae(T,x,p,r,l),k=T),!f){s();return}k!==T&&(T=k,u.draggingFace=k,w=null,S=!1,R=null);let{s:L,t:v}=f;if(g&&R){if(S){let E=Math.abs(L-R.s),D=Math.abs(v-R.t),q=.02;(E>q||D>q)&&(w=E>=D?"u":"v",S=!1)}w==="u"?v=R.t:w==="v"&&(L=R.s)}else g||(w=null,S=!1,R=null);P(k,L,v),s()}function P(x,g,A){let p=_[x],r=o(),l=["x","y","z"],f={...n()};f[l[p.uAxis]]=g*r[l[p.uAxis]],f[l[p.vAxis]]=A*r[l[p.vAxis]],f[l[p.fixedAxis]]=r[l[p.fixedAxis]],i(f,x)}function B(){T=-1,u.draggingFace=-1,w=null,S=!1,R=null}function U(x){let g=h(x),A=b(g);if(A>=0){x.preventDefault(),z(A,g);return}let p=C(g);p&&(x.preventDefault(),H(p.faceIndex,p.s,p.t,x.shiftKey))}function j(x){let g=h(x);if(m>=0){x.preventDefault(),F(g);return}if(T>=0){x.preventDefault(),O(g,x.shiftKey,x.altKey);return}let A=b(g),p=C(g),r=A,l=A>=0?-1:p?p.faceIndex:-1;(r!==u.hoveredAxisHandle||l!==u.hoveredFace)&&(u.hoveredAxisHandle=r,u.hoveredFace=l,e.style.cursor=r>=0?"grab":l>=0?"crosshair":"default",s())}function G(x){let g=m>=0||T>=0;I(),B(),g&&(u.hoveredAxisHandle=-1,u.hoveredFace=-1,e.style.cursor="default",s())}function $(x){if(x.touches.length!==1)return;let g=h(x.touches[0]),A=b(g);if(A>=0){x.preventDefault(),z(A,g);return}let p=C(g);p&&(x.preventDefault(),H(p.faceIndex,p.s,p.t,!1))}function re(x){if(x.touches.length!==1)return;let g=h(x.touches[0]);m>=0?(x.preventDefault(),F(g)):T>=0&&(x.preventDefault(),O(g,!1,!1))}function ae(x){I(),B(),s()}function Z(x){let g=x.shiftKey?.04:.004,A=n(),p=o(),r=xe(),l=0,f=0;switch(x.key){case"ArrowRight":l=1;break;case"ArrowLeft":l=-1;break;case"ArrowUp":f=-1;break;case"ArrowDown":f=1;break;default:return}x.preventDefault();let k={...A},L=["x","y","z"];for(let v=0;v<3;v++){let E=l*r[v].x+f*r[v].y;if(Math.abs(E)>.3){let D=A[L[v]]+g*Math.sign(E);k[L[v]]=Math.max(0,Math.min(p[L[v]],D))}}i(k,c()),s()}e.addEventListener("mousedown",U),window.addEventListener("mousemove",j),window.addEventListener("mouseup",G),e.addEventListener("touchstart",$,{passive:!1}),e.addEventListener("touchmove",re,{passive:!1}),e.addEventListener("touchend",ae),e.addEventListener("keydown",Z),e.setAttribute("tabindex","0");function N(){e.removeEventListener("mousedown",U),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",G),e.removeEventListener("touchstart",$),e.removeEventListener("touchmove",re),e.removeEventListener("touchend",ae),e.removeEventListener("keydown",Z)}return{state:u,destroy:N}}var Ve=`.box-picker {\r
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
`;var ro=Fe,Se=!1;function ao(){if(Se||typeof document>"u")return;Se=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ve,document.head.appendChild(e)}function Fe(e,o={}){let t=o.size??300,n=o.controls??!0,i=o.showInputs??!1,c=o.showModeToggle??!1,d=o.showCorners??!1,a={mode:()=>s,switchMode:r=>S(r),onHexInput:r=>{let l=ue(r);l?(b=W(w?{r:255-l.r,g:255-l.g,b:255-l.b}:l,s),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)},g(),N(),B()):N()},onChannelInput:(r,l,f)=>{let k=Math.max(0,Math.min(f,l)),L=["x","y","z"],v=k/f;if(w){let E={...b,[L[r]]:v},D=K(E,s);b=W({r:255-D.r,g:255-D.g,b:255-D.b},s)}else b={...b,[L[r]]:v};v>h[L[r]]&&(h={...h,[L[r]]:v}),g(),N(),B()},getRgbForCopy:()=>K(b,s),onRandom:r=>p(r),onReset:()=>p({r:0,g:0,b:0})},s=o.mode??"rgb",u=o.initialColor?W(o.initialColor,s):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},b={...u},C=0,m=new Set;ao();let y=document.createElement("div");y.className="box-picker";let M=document.createElement("canvas");M.style.cursor="grab",y.appendChild(M);let z=ke(M,t),F=null,I=document.createElement("div");I.className="box-picker-controls",F=document.createElement("div"),F.className="box-picker-swatch",I.appendChild(F),y.appendChild(I),(i||c||d)&&Promise.resolve().then(()=>(He(),ze)).then(r=>{r.createControls(I,a,{showInputs:i,showModeToggle:c,showCorners:d})}).catch(()=>{}),e.appendChild(y);let T=Te(M,()=>h,r=>{h=r},()=>b,(r,l)=>{b=r,C=l,g(),N()},()=>C,()=>z.scale,()=>z.center,B),w=!1,R=!0;M.addEventListener("mouseenter",()=>{R=!0,B()}),M.addEventListener("mouseleave",()=>{R=!1,B()}),M.addEventListener("dblclick",()=>{w=!w,be(w),g(),N(),B()});function S(r){if(r===s)return;let l=K(b,s),f={...b},k={...h};s=r;let L=W(l,s),v={x:1,y:1,z:1};b=L,h=v,O(f,L,k,v,300),N()}let H=null;function O(r,l,f,k,L){H!==null&&cancelAnimationFrame(H);let v=performance.now();function E(D){let q=D-v,Q=Math.min(1,q/L),X=1-Math.pow(1-Q,3);b={x:r.x+(l.x-r.x)*X,y:r.y+(l.y-r.y)*X,z:r.z+(l.z-r.z)*X},h={x:f.x+(k.x-f.x)*X,y:f.y+(k.y-f.y)*X,z:f.z+(k.z-f.z)*X},U(),g(),Q<1?H=requestAnimationFrame(E):H=null}H=requestAnimationFrame(E)}let P=!1;function B(){P||(P=!0,requestAnimationFrame(()=>{P=!1,U()}))}function U(){Me(z,h,b,C,s,T.state,R)}function j(r,l,f){return Math.round(r+(l-r)*f)}function G(r,l){let f=l>0?255:0,k=Math.abs(l);return J({r:j(r.r,f,k),g:j(r.g,f,k),b:j(r.b,f,k)})}function $(r,l){let f=ue(l)||{r:128,g:128,b:128},k=G(f,.35),L=G(f,0),v=G(f,-.35);r.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${k}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${v}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,r.style.backgroundColor="transparent"}function re(r){try{navigator.clipboard.writeText(r).catch(()=>{})}catch{}}function ae(r){r&&(r.style.borderColor="#4ade80",r.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{r.style.borderColor="",r.style.boxShadow=""},500))}function Z(){let r=K(b,s);return w?{r:255-r.r,g:255-r.g,b:255-r.b}:r}function N(){if(!n)return;let r=Z(),l=J(r);F&&$(F,l);let f=y.querySelector(".box-picker-hex");f&&(f.value=l),x(),y._updateModeButtons&&y._updateModeButtons()}function x(){if(!n)return;let r=oe[s],l=w?W(Z(),s):b,f=pe(l,s),k=y.querySelectorAll(".box-picker-channel input"),L=y.querySelectorAll(".box-picker-channel label");for(let v=0;v<k.length;v++)L[v].textContent=r[v],L[v].style.color="",L[v].style.textShadow="none",k[v].value=String(f[v])}function g(){let r=Z(),l={rgb:r,hsb:te(r),oklch:ne(r),hex:J(r)};for(let f of m)f(l)}function A(){let r=K(b,s);return{rgb:r,hsb:te(r),oklch:ne(r),hex:J(r)}}N(),U();let p=r=>{b=W(r,s),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)};let l=V(b,z.scale,z.center);C=-1;for(let f=_.length-1;f>=0;f--)if(Y(f,l,h,z.scale,z.center)){C=f;break}g(),N(),B()};return{getColor:A,getMode:()=>s,setColor:p,setMode(r){S(r)},on(r,l){m.add(l)},off(r,l){m.delete(l)},destroy(){T.destroy(),H!==null&&cancelAnimationFrame(H),e.removeChild(y)}}}return _e(io);})();
