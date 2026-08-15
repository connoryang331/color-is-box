var ColorIsBox=(()=>{var se=Object.defineProperty;var Ie=Object.getOwnPropertyDescriptor;var Be=Object.getOwnPropertyNames;var Oe=Object.prototype.hasOwnProperty;var De=(e,o)=>()=>(e&&(o=e(e=0)),o);var fe=(e,o)=>{for(var t in o)se(e,t,{get:o[t],enumerable:!0})},Pe=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of Be(o))!Oe.call(e,i)&&i!==t&&se(e,i,{get:()=>o[i],enumerable:!(n=Ie(o,i))||n.enumerable});return e};var _e=e=>Pe(se({},"__esModule",{value:!0}),e);var ze={};fe(ze,{createControls:()=>to});function Re(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Ee(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function to(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let i=u=>{let b=document.createElement("button");return b.textContent=u.toUpperCase(),b.addEventListener("click",()=>o.switchMode(u)),n.appendChild(b),b},c=i("oklch"),d=i("rgb"),a=i("hsb"),s=()=>{let u=o.mode();d.classList.toggle("active",u==="rgb"),a.classList.toggle("active",u==="hsb"),c.classList.toggle("active",u==="oklch")};s();let x=o.switchMode;o._markActive=s,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let b=n.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),n.addEventListener("click",()=>{Re(o.getRgbForCopy()?"#"+no(o.getRgbForCopy()):"#ffffff"),Ee(n)});let i=document.createElement("div");i.className="box-picker-channels";let c=[],d=[],a=["R","G","B"];for(let b=0;b<3;b++){let C=document.createElement("div");C.className="box-picker-channel";let m=document.createElement("label");m.textContent=a[b];let y=document.createElement("input");y.type="text",y.inputMode="numeric",C.appendChild(m),C.appendChild(y),i.appendChild(C),c.push(y),d.push(m),y.addEventListener("change",()=>{let M=parseFloat(y.value);isNaN(M)||o.onChannelInput(b,M,255)}),y.addEventListener("click",()=>{let M=o.getRgbForCopy();Re(`${M.r}, ${M.g}, ${M.b}`),Ee(y)})}let s=document.createElement("div");s.className="box-picker-hexrow";let x=document.createElement("div");x.className="box-picker-hexwrap";let u=document.createElement("label");u.textContent="Hex",x.appendChild(u),x.appendChild(n),s.appendChild(i),s.appendChild(x),e.appendChild(s),e._inputs={hexInput:n,inputs:c,labels:d}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:c,g:d,b:a})}),e.appendChild(n);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function no(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var He=De(()=>{});var io={};fe(io,{createBoxColorPicker:()=>Fe,createColorPicker:()=>ro,setBoxInvert:()=>be});var oe={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},he={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function te(e){let o=e.r/255,t=e.g/255,n=e.b/255,i=Math.max(o,t,n),c=Math.min(o,t,n),d=i-c,a=0;d!==0&&(i===o?a=((t-n)/d+6)%6:i===t?a=(n-o)/d+2:a=(o-t)/d+4,a*=60);let s=i===0?0:d/i*100,x=i*100;return{h:a,s,b:x}}function Ge(e){let o=e.h,t=e.s/100,n=e.b/100,i=n*t,c=i*(1-Math.abs(o/60%2-1)),d=n-i,a,s,x;return o<60?(a=i,s=c,x=0):o<120?(a=c,s=i,x=0):o<180?(a=0,s=i,x=c):o<240?(a=0,s=c,x=i):o<300?(a=c,s=0,x=i):(a=i,s=0,x=c),{r:Math.round((a+d)*255),g:Math.round((s+d)*255),b:Math.round((x+d)*255)}}function ce(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function le(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Ne(e){let o=ce(e.r/255),t=ce(e.g/255),n=ce(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*n,c=.2119034982*o+.6806995451*t+.1073969566*n,d=.0883024619*o+.2817188376*t+.6299787005*n,a=Math.cbrt(i),s=Math.cbrt(c),x=Math.cbrt(d);return{L:.2104542553*a+.793617785*s-.0040720468*x,a:1.9779984951*a-2.428592205*s+.4505937099*x,b:.0259040371*a+.7827717662*s-.808675766*x}}function Xe(e,o,t){let n=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,d=n*n*n,a=i*i*i,s=c*c*c,x=4.0767416621*d-3.3077115913*a+.2309699292*s,u=-1.2684380046*d+2.6097574011*a-.3413193965*s,b=-.0041960863*d-.7034186147*a+1.707614701*s;return{r:Math.round(Math.max(0,Math.min(1,le(x)))*255),g:Math.round(Math.max(0,Math.min(1,le(u)))*255),b:Math.round(Math.max(0,Math.min(1,le(b)))*255)}}function ne(e){let o=Ne(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function de(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return Xe(e.l,t,n)}function $e(e,o,t){let n=de({l:e,c:o,h:t});if(me(n))return{l:e,c:o,h:t};let i=0,c=o;for(let d=0;d<20;d++){let a=(i+c)/2;n=de({l:e,c:a,h:t}),me(n)?i=a:c=a}return{l:e,c:i,h:t}}function me(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function W(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ue(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ge=.4;function X(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Ge({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*ge,i=e.z*359,c=$e(t,n,i);return de(c)}}function Z(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=te(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=ne(e);return{x:t.l,y:Math.min(t.c/ge,1),z:t.h/359}}}function pe(e,o){let t=he[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function ye(e,o,t,n,i,c=!1){let d;e===0?d={x:n,y:o,z:t}:e===1?d={x:o,y:n,z:t}:d={x:o,y:t,z:n};let a=X(d,i);return c?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var ve=Math.PI/6,Ke=Math.cos(ve),Ue=Math.sin(ve),ee=!1;function be(e){ee=e}function V(e,o,t){return{x:t.x+(e.y-e.x)*Ke*o,y:t.y+e.z*o-(e.x+e.y)*Ue*o}}function je(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var _=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],qe=64,Ce={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ke(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Me(e,o,t,n,i,c,d=!0){let{ctx:a,scale:s,center:x,width:u,height:b}=e;a.save(),a.clearRect(0,0,u,b);let C=je(o).map(m=>V(m,s,x));if(Ze(a,s,x,i),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,Ye(a,C,o,i),a.restore(),d&&Je(a,i,s,x),n>=0){let m=X(t,i),y=ee?{r:255-m.r,g:255-m.g,b:255-m.b}:m,M=V(t,s,x);eo(a,M,y)}a.restore()}var We={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Ze(e,o,t,n){let i=V({x:0,y:0,z:0},o,t),c=[V({x:1,y:0,z:0},o,t),V({x:0,y:1,z:0},o,t),V({x:0,y:0,z:1},o,t)],d=We[n];e.lineWidth=1.5;for(let a=0;a<c.length;a++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(c[a].x,c[a].y),e.strokeStyle=d[a],e.stroke()}function Ye(e,o,t,n){let i=[t.x,t.y,t.z];for(let c=0;c<_.length;c++){let d=_[c],a=i[d.fixedAxis],s=i[d.uAxis],x=i[d.vAxis];if(s<.002&&x<.002)continue;let u=d.quad.map(b=>o[b]);Qe(e,u,d.fixedAxis,a,s,x,n)}}function Qe(e,o,t,n,i,c,d){let a=qe,s=document.createElement("canvas");s.width=a,s.height=a;let x=s.getContext("2d"),u=x.createImageData(a,a),b=u.data;for(let P=0;P<a;P++)for(let B=0;B<a;B++){let U=B/(a-1)*i,j=P/(a-1)*c,G=ye(t,U,j,n,d,ee),$=(P*a+B)*4;b[$]=G.r,b[$+1]=G.g,b[$+2]=G.b,b[$+3]=255}x.putImageData(u,0,0);let C=o[0],m=o[1],y=o[2],M=o[3],z=m.x-C.x,F=m.y-C.y,I=M.x-C.x,T=M.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(m.x,m.y),e.lineTo(y.x,y.y),e.lineTo(M.x,M.y),e.closePath(),e.clip();let w=2/a,R=C.x-z*w-I*w,S=C.y-F*w-T*w,H=1+2*w,O=1+2*w;e.transform(z*H/a,F*H/a,I*O/a,T*O/a,R,S),e.imageSmoothingEnabled=!0,e.drawImage(s,0,0),e.restore()}function Je(e,o,t,n){let i=oe[o],c=ee?[V({x:0,y:1,z:1},t,n),V({x:1,y:0,z:1},t,n),V({x:1,y:1,z:0},t,n)]:[V({x:1,y:0,z:0},t,n),V({x:0,y:1,z:0},t,n),V({x:0,y:0,z:1},t,n)],d=ee?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],s=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(u=>W(X(u,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let x={rgb:[],hsb:[2],oklch:[0]};for(let u=0;u<3;u++){let b=c[u].x+d[u].x,C=c[u].y+d[u].y;e.globalAlpha=.8,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';let m=isGray?"#888888":s[u];e.fillStyle=m,e.fillText(i[u],b,C)}e.globalAlpha=1,e.restore()}function eo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function we(e,o,t,n){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return V(i[e],t,n)}function xe(){let e={x:0,y:0};return[V({x:1,y:0,z:0},1,e),V({x:0,y:1,z:0},1,e),V({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function Q(e,o,t,n,i){let c=_[e],d=[t.x,t.y,t.z],a=d[c.uAxis],s=d[c.vAxis];if(a<.002||s<.002)return null;let x={x:0,y:0,z:0},u=["x","y","z"];x[u[c.fixedAxis]]=d[c.fixedAxis];let b={...x};b[u[c.uAxis]]=a;let C={...x};C[u[c.vAxis]]=s;let m=V(x,n,i),y=V(b,n,i),M=V(C,n,i),z=y.x-m.x,F=y.y-m.y,I=M.x-m.x,T=M.y-m.y,w=z*T-F*I;if(Math.abs(w)<1e-6)return null;let R=o.x-m.x,S=o.y-m.y,H=(R*T-S*I)/w,O=(S*z-R*F)/w;return H<-.05||H>1.05||O<-.05||O>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}function Ae(e,o,t,n,i){let c=_[e],d=[t.x,t.y,t.z],a=d[c.uAxis],s=d[c.vAxis];if(a<.002||s<.002)return null;let x={x:0,y:0,z:0},u=["x","y","z"];x[u[c.fixedAxis]]=d[c.fixedAxis];let b={...x};b[u[c.uAxis]]=a;let C={...x};C[u[c.vAxis]]=s;let m=V(x,n,i),y=V(b,n,i),M=V(C,n,i),z=y.x-m.x,F=y.y-m.y,I=M.x-m.x,T=M.y-m.y,w=z*T-F*I;if(Math.abs(w)<1e-6)return null;let R=o.x-m.x,S=o.y-m.y,H=(R*T-S*I)/w,O=(S*z-R*F)/w;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}var Le=22;function Te(e,o,t,n,i,c,d,a,s){let x={...Ce};function u(f){let g=e.getBoundingClientRect();return{x:f.clientX-g.left,y:f.clientY-g.top}}function b(f){let g=o(),A=d(),p=a();for(let r=0;r<3;r++){let l=we(r,g,A,p),h=f.x-l.x,k=f.y-l.y;if(h*h+k*k<=Le*Le)return r}return-1}function C(f){let g=o(),A=d(),p=a();for(let r=_.length-1;r>=0;r--){let l=Q(r,f,g,A,p);if(l)return{faceIndex:r,...l}}return null}let m=-1,y={x:0,y:0},M=0;function z(f,g){m=f,y=g,M=o()[["x","y","z"][f]],x.draggingAxisHandle=f,e.style.cursor="grabbing",s()}function F(f){if(m<0)return;let g=f.x-y.x,A=f.y-y.y,r=xe()[m],l=d(),k=(g*r.x+A*r.y)/l,L=Math.max(0,Math.min(1,M+k)),v=o(),E=["x","y","z"],D={...v,[E[m]]:L};t(D);let q=n(),J=c(),K=J>=0?_[J]:null,ie={...q};K&&m===K.fixedAxis?ie[E[m]]=L:ie[E[m]]=Math.min(q[E[m]],L),i(ie,c()),s()}function I(){m=-1,x.draggingAxisHandle=-1}let T=-1,w=null,R=null,S=!1;function H(f,g,A,p){T=f,x.draggingFace=f,w=null,R=null,S=!1,p&&(S=!0,R={s:g,t:A}),P(f,g,A),e.style.cursor="crosshair",s()}function O(f,g,A){if(T<0)return;let p=o(),r=d(),l=a(),h=Q(T,f,p,r,l),k=T;if(!h&&!A){for(let E=_.length-1;E>=0;E--)if(E!==T&&(h=Q(E,f,p,r,l),h)){k=E;break}}if(!h&&A&&(h=Ae(T,f,p,r,l),k=T),!h){s();return}k!==T&&(T=k,x.draggingFace=k,w=null,S=!1,R=null);let{s:L,t:v}=h;if(g&&R){if(S){let E=Math.abs(L-R.s),D=Math.abs(v-R.t),q=.02;(E>q||D>q)&&(w=E>=D?"u":"v",S=!1)}w==="u"?v=R.t:w==="v"&&(L=R.s)}else g||(w=null,S=!1,R=null);P(k,L,v),s()}function P(f,g,A){let p=_[f],r=o(),l=["x","y","z"],h={...n()};h[l[p.uAxis]]=g*r[l[p.uAxis]],h[l[p.vAxis]]=A*r[l[p.vAxis]],h[l[p.fixedAxis]]=r[l[p.fixedAxis]],i(h,f)}function B(){T=-1,x.draggingFace=-1,w=null,S=!1,R=null}function U(f){let g=u(f),A=b(g);if(A>=0){f.preventDefault(),z(A,g);return}let p=C(g);p&&(f.preventDefault(),H(p.faceIndex,p.s,p.t,f.shiftKey))}function j(f){let g=u(f);if(m>=0){f.preventDefault(),F(g);return}if(T>=0){f.preventDefault(),O(g,f.shiftKey,f.altKey);return}let A=b(g),p=C(g),r=A,l=A>=0?-1:p?p.faceIndex:-1;(r!==x.hoveredAxisHandle||l!==x.hoveredFace)&&(x.hoveredAxisHandle=r,x.hoveredFace=l,e.style.cursor=r>=0?"grab":l>=0?"crosshair":"default",s())}function G(f){let g=m>=0||T>=0;I(),B(),g&&(x.hoveredAxisHandle=-1,x.hoveredFace=-1,e.style.cursor="default",s())}function $(f){if(f.touches.length!==1)return;let g=u(f.touches[0]),A=b(g);if(A>=0){f.preventDefault(),z(A,g);return}let p=C(g);p&&(f.preventDefault(),H(p.faceIndex,p.s,p.t,!1))}function re(f){if(f.touches.length!==1)return;let g=u(f.touches[0]);m>=0?(f.preventDefault(),F(g)):T>=0&&(f.preventDefault(),O(g,!1,!1))}function ae(f){I(),B(),s()}function Y(f){let g=f.shiftKey?.04:.004,A=n(),p=o(),r=xe(),l=0,h=0;switch(f.key){case"ArrowRight":l=1;break;case"ArrowLeft":l=-1;break;case"ArrowUp":h=-1;break;case"ArrowDown":h=1;break;default:return}f.preventDefault();let k={...A},L=["x","y","z"];for(let v=0;v<3;v++){let E=l*r[v].x+h*r[v].y;if(Math.abs(E)>.3){let D=A[L[v]]+g*Math.sign(E);k[L[v]]=Math.max(0,Math.min(p[L[v]],D))}}i(k,c()),s()}e.addEventListener("mousedown",U),window.addEventListener("mousemove",j),window.addEventListener("mouseup",G),e.addEventListener("touchstart",$,{passive:!1}),e.addEventListener("touchmove",re,{passive:!1}),e.addEventListener("touchend",ae),e.addEventListener("keydown",Y),e.setAttribute("tabindex","0");function N(){e.removeEventListener("mousedown",U),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",G),e.removeEventListener("touchstart",$),e.removeEventListener("touchmove",re),e.removeEventListener("touchend",ae),e.removeEventListener("keydown",Y)}return{state:x,destroy:N}}var Ve=`.box-picker {\r
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
`;var ro=Fe,Se=!1;function ao(){if(Se||typeof document>"u")return;Se=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ve,document.head.appendChild(e)}function Fe(e,o={}){let t=o.size??300,n=o.controls??!0,i=o.showInputs??!1,c=o.showModeToggle??!1,d=o.showCorners??!1,a={mode:()=>s,switchMode:r=>S(r),onHexInput:r=>{let l=ue(r);l?(b=Z(w?{r:255-l.r,g:255-l.g,b:255-l.b}:l,s),u={x:Math.max(u.x,b.x),y:Math.max(u.y,b.y),z:Math.max(u.z,b.z)},g(),N(),B()):N()},onChannelInput:(r,l,h)=>{let k=Math.max(0,Math.min(h,l)),L=["x","y","z"],v=k/h;if(w){let E={...b,[L[r]]:v},D=X(E,s);b=Z({r:255-D.r,g:255-D.g,b:255-D.b},s)}else b={...b,[L[r]]:v};v>u[L[r]]&&(u={...u,[L[r]]:v}),g(),N(),B()},getRgbForCopy:()=>X(b,s),onRandom:r=>p(r),onReset:()=>p({r:0,g:0,b:0})},s=o.mode??"rgb",x=o.initialColor?Z(o.initialColor,s):{x:.7,y:.4,z:.85},u={x:1,y:1,z:1},b={...x},C=0,m=new Set;ao();let y=document.createElement("div");y.className="box-picker";let M=document.createElement("canvas");M.style.cursor="grab",y.appendChild(M);let z=ke(M,t),F=null,I=document.createElement("div");I.className="box-picker-controls",F=document.createElement("div"),F.className="box-picker-swatch",I.appendChild(F),y.appendChild(I),(i||c||d)&&Promise.resolve().then(()=>(He(),ze)).then(r=>{r.createControls(I,a,{showInputs:i,showModeToggle:c,showCorners:d})}).catch(()=>{}),e.appendChild(y);let T=Te(M,()=>u,r=>{u=r},()=>b,(r,l)=>{b=r,C=l,g(),N()},()=>C,()=>z.scale,()=>z.center,B),w=!1,R=!0;M.addEventListener("mouseenter",()=>{R=!0,B()}),M.addEventListener("mouseleave",()=>{R=!1,B()}),M.addEventListener("dblclick",()=>{w=!w,be(w),g(),N(),B()});function S(r){if(r===s)return;let l=X(b,s),h={...b},k={...u};s=r;let L=Z(l,s),v={x:1,y:1,z:1};b=L,u=v,O(h,L,k,v,300),N()}let H=null;function O(r,l,h,k,L){H!==null&&cancelAnimationFrame(H);let v=performance.now();function E(D){let q=D-v,J=Math.min(1,q/L),K=1-Math.pow(1-J,3);b={x:r.x+(l.x-r.x)*K,y:r.y+(l.y-r.y)*K,z:r.z+(l.z-r.z)*K},u={x:h.x+(k.x-h.x)*K,y:h.y+(k.y-h.y)*K,z:h.z+(k.z-h.z)*K},U(),g(),J<1?H=requestAnimationFrame(E):H=null}H=requestAnimationFrame(E)}let P=!1;function B(){P||(P=!0,requestAnimationFrame(()=>{P=!1,U()}))}function U(){Me(z,u,b,C,s,T.state,R)}function j(r,l,h){return Math.round(r+(l-r)*h)}function G(r,l){let h=l>0?255:0,k=Math.abs(l);return W({r:j(r.r,h,k),g:j(r.g,h,k),b:j(r.b,h,k)})}function $(r,l){let h=ue(l)||{r:128,g:128,b:128},k=G(h,.35),L=G(h,0),v=G(h,-.35);r.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${k}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${v}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,r.style.backgroundColor="transparent"}function re(r){try{navigator.clipboard.writeText(r).catch(()=>{})}catch{}}function ae(r){r&&(r.style.borderColor="#4ade80",r.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{r.style.borderColor="",r.style.boxShadow=""},500))}function Y(){let r=X(b,s);return w?{r:255-r.r,g:255-r.g,b:255-r.b}:r}function N(){if(!n)return;let r=Y(),l=W(r);F&&$(F,l);let h=y.querySelector(".box-picker-hex");h&&(h.value=l),f(),y._updateModeButtons&&y._updateModeButtons()}function f(){if(!n)return;let r=oe[s],l=w?Z(Y(),s):b,h=pe(l,s),k=y.querySelectorAll(".box-picker-channel input"),L=y.querySelectorAll(".box-picker-channel label");for(let v=0;v<k.length;v++)L[v].textContent=r[v],L[v].style.color="",L[v].style.textShadow="none",k[v].value=String(h[v])}function g(){let r=Y(),l={rgb:r,hsb:te(r),oklch:ne(r),hex:W(r)};for(let h of m)h(l)}function A(){let r=X(b,s);return{rgb:r,hsb:te(r),oklch:ne(r),hex:W(r)}}N(),U();let p=r=>{b=Z(r,s),u={x:Math.max(u.x,b.x),y:Math.max(u.y,b.y),z:Math.max(u.z,b.z)};let l=V(b,z.scale,z.center);C=-1;for(let h=_.length-1;h>=0;h--)if(Q(h,l,u,z.scale,z.center)){C=h;break}g(),N(),B()};return{getColor:A,getMode:()=>s,setColor:p,setMode(r){S(r)},on(r,l){m.add(l)},off(r,l){m.delete(l)},destroy(){T.destroy(),H!==null&&cancelAnimationFrame(H),e.removeChild(y)}}}return _e(io);})();
