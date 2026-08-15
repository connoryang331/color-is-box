var ColorIsBox=(()=>{var se=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var Oe=Object.getOwnPropertyNames;var De=Object.prototype.hasOwnProperty;var Pe=(e,o)=>()=>(e&&(o=e(e=0)),o);var he=(e,o)=>{for(var t in o)se(e,t,{get:o[t],enumerable:!0})},_e=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of Oe(o))!De.call(e,i)&&i!==t&&se(e,i,{get:()=>o[i],enumerable:!(n=Be(o,i))||n.enumerable});return e};var Ge=e=>_e(se({},"__esModule",{value:!0}),e);var He={};he(He,{createControls:()=>no});function Ee(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function ze(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function no(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let i=x=>{let c=document.createElement("button");return c.textContent=x.toUpperCase(),c.addEventListener("click",()=>o.switchMode(x)),n.appendChild(c),c},l=i("oklch"),d=i("rgb"),a=i("hsb"),s=()=>{let x=o.mode();d.classList.toggle("active",x==="rgb"),a.classList.toggle("active",x==="hsb"),l.classList.toggle("active",x==="oklch")};s();let u=o.switchMode;o._markActive=s,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let c=n.value;/^#?[0-9a-f]{6}$/i.test(c)?o.onHexInput(c):o.onHexInput("")}),n.addEventListener("click",()=>{Ee(o.getRgbForCopy()?"#"+ro(o.getRgbForCopy()):"#ffffff"),ze(n)});let i=document.createElement("div");i.className="box-picker-channels";let l=[],d=[],a=["R","G","B"];for(let c=0;c<3;c++){let v=document.createElement("div");v.className="box-picker-channel";let h=document.createElement("label");h.textContent=a[c];let y=document.createElement("input");y.type="text",y.inputMode="numeric",v.appendChild(h),v.appendChild(y),i.appendChild(v),l.push(y),d.push(h),y.addEventListener("change",()=>{let C=parseFloat(y.value);isNaN(C)||o.onChannelInput(c,C,255)}),y.addEventListener("click",()=>{let C=o.getRgbForCopy();Ee(`${C.r}, ${C.g}, ${C.b}`),ze(y)})}let s=document.createElement("div");s.className="box-picker-hexrow";let u=document.createElement("div");u.className="box-picker-hexwrap";let x=document.createElement("label");x.textContent="Hex",u.appendChild(x),u.appendChild(n),s.appendChild(i),s.appendChild(u),e.appendChild(s),e._inputs={hexInput:n,inputs:l,labels:d}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let l=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:l,g:d,b:a})}),e.appendChild(n);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function ro(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Se=Pe(()=>{});var so={};he(so,{createBoxColorPicker:()=>Ie,createColorPicker:()=>ao,setBoxInvert:()=>be});var ne={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},me={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function re(e){let o=e.r/255,t=e.g/255,n=e.b/255,i=Math.max(o,t,n),l=Math.min(o,t,n),d=i-l,a=0;d!==0&&(i===o?a=((t-n)/d+6)%6:i===t?a=(n-o)/d+2:a=(o-t)/d+4,a*=60);let s=i===0?0:d/i*100,u=i*100;return{h:a,s,b:u}}function Ne(e){let o=e.h,t=e.s/100,n=e.b/100,i=n*t,l=i*(1-Math.abs(o/60%2-1)),d=n-i,a,s,u;return o<60?(a=i,s=l,u=0):o<120?(a=l,s=i,u=0):o<180?(a=0,s=i,u=l):o<240?(a=0,s=l,u=i):o<300?(a=l,s=0,u=i):(a=i,s=0,u=l),{r:Math.round((a+d)*255),g:Math.round((s+d)*255),b:Math.round((u+d)*255)}}function ce(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function le(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function $e(e){let o=ce(e.r/255),t=ce(e.g/255),n=ce(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*n,l=.2119034982*o+.6806995451*t+.1073969566*n,d=.0883024619*o+.2817188376*t+.6299787005*n,a=Math.cbrt(i),s=Math.cbrt(l),u=Math.cbrt(d);return{L:.2104542553*a+.793617785*s-.0040720468*u,a:1.9779984951*a-2.428592205*s+.4505937099*u,b:.0259040371*a+.7827717662*s-.808675766*u}}function Xe(e,o,t){let n=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,l=e-.0894841775*o-1.291485548*t,d=n*n*n,a=i*i*i,s=l*l*l,u=4.0767416621*d-3.3077115913*a+.2309699292*s,x=-1.2684380046*d+2.6097574011*a-.3413193965*s,c=-.0041960863*d-.7034186147*a+1.707614701*s;return{r:Math.round(Math.max(0,Math.min(1,le(u)))*255),g:Math.round(Math.max(0,Math.min(1,le(x)))*255),b:Math.round(Math.max(0,Math.min(1,le(c)))*255)}}function ae(e){let o=$e(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function de(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return Xe(e.l,t,n)}function Ke(e,o,t){let n=de({l:e,c:o,h:t});if(pe(n))return{l:e,c:o,h:t};let i=0,l=o;for(let d=0;d<20;d++){let a=(i+l)/2;n=de({l:e,c:a,h:t}),pe(n)?i=a:l=a}return{l:e,c:i,h:t}}function pe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function j(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ue(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ge=.4;function X(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Ne({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*ge,i=e.z*359,l=Ke(t,n,i);return de(l)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=re(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=ae(e);return{x:t.l,y:Math.min(t.c/ge,1),z:t.h/359}}}function ye(e,o){let t=me[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function ve(e,o,t,n,i,l=!1){let d;e===0?d={x:n,y:o,z:t}:e===1?d={x:o,y:n,z:t}:d={x:o,y:t,z:n};let a=X(d,i);return l?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Ce=Math.PI/6,Ue=Math.cos(Ce),qe=Math.sin(Ce),ee=!1;function be(e){ee=e}function E(e,o,t){return{x:t.x+(e.y-e.x)*Ue*o,y:t.y+e.z*o-(e.x+e.y)*qe*o}}function je(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var G=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],We=64,Me={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ke(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function we(e,o,t,n,i,l,d=!0){let{ctx:a,scale:s,center:u,width:x,height:c}=e;a.save(),a.clearRect(0,0,x,c);let v=je(o).map(h=>E(h,s,u));if(Ye(a,s,u,i),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,Qe(a,v,o,i),a.restore(),d&&eo(a,i,s,u),n>=0){let h=X(t,i),y=ee?{r:255-h.r,g:255-h.g,b:255-h.b}:h,C=E(t,s,u);oo(a,C,y)}a.restore()}var Ze={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Ye(e,o,t,n){let i=E({x:0,y:0,z:0},o,t),l=[E({x:1,y:0,z:0},o,t),E({x:0,y:1,z:0},o,t),E({x:0,y:0,z:1},o,t)],d=Ze[n];e.lineWidth=1.5;for(let a=0;a<l.length;a++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(l[a].x,l[a].y),e.strokeStyle=d[a],e.stroke()}function Qe(e,o,t,n){let i=[t.x,t.y,t.z];for(let l=0;l<G.length;l++){let d=G[l],a=i[d.fixedAxis],s=i[d.uAxis],u=i[d.vAxis];if(s<.002&&u<.002)continue;let x=d.quad.map(c=>o[c]);Je(e,x,d.fixedAxis,a,s,u,n)}}function Je(e,o,t,n,i,l,d){let a=We,s=document.createElement("canvas");s.width=a,s.height=a;let u=s.getContext("2d"),x=u.createImageData(a,a),c=x.data;for(let P=0;P<a;P++)for(let O=0;O<a;O++){let K=O/(a-1)*i,q=P/(a-1)*l,N=ve(t,K,q,n,d,ee),_=(P*a+O)*4;c[_]=N.r,c[_+1]=N.g,c[_+2]=N.b,c[_+3]=255}u.putImageData(x,0,0);let v=o[0],h=o[1],y=o[2],C=o[3],H=h.x-v.x,F=h.y-v.y,I=C.x-v.x,V=C.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(h.x,h.y),e.lineTo(y.x,y.y),e.lineTo(C.x,C.y),e.closePath(),e.clip();let k=2/a,z=v.x-H*k-I*k,B=v.y-F*k-V*k,S=1+2*k,D=1+2*k;e.transform(H*S/a,F*S/a,I*D/a,V*D/a,z,B),e.imageSmoothingEnabled=!0,e.drawImage(s,0,0),e.restore()}function eo(e,o,t,n){let i=ne[o],l=ee?[E({x:0,y:1,z:1},t,n),E({x:1,y:0,z:1},t,n),E({x:1,y:1,z:0},t,n)]:[E({x:1,y:0,z:0},t,n),E({x:0,y:1,z:0},t,n),E({x:0,y:0,z:1},t,n)],d=ee?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],s=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(c=>j(X(c,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let u={rgb:[],hsb:[2],oklch:[0]},x=performance.now()/1e3;for(let c=0;c<3;c++){let v=l[c].x+d[c].x,h=l[c].y+d[c].y,y=x*1.8+c*2.1,C=.62+.38*(.5+.5*Math.sin(y)),H=11+Math.round(1.6*(.5+.5*Math.sin(y)));e.globalAlpha=C,e.font=`bold ${H}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let I=u[o].includes(c)?"#888888":s[c];e.fillStyle=I,e.fillText(i[c],v,h)}e.globalAlpha=1,e.restore()}function oo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Ae(e,o,t,n){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return E(i[e],t,n)}function fe(){let e={x:0,y:0};return[E({x:1,y:0,z:0},1,e),E({x:0,y:1,z:0},1,e),E({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function J(e,o,t,n,i){let l=G[e],d=[t.x,t.y,t.z],a=d[l.uAxis],s=d[l.vAxis];if(a<.002||s<.002)return null;let u={x:0,y:0,z:0},x=["x","y","z"];u[x[l.fixedAxis]]=d[l.fixedAxis];let c={...u};c[x[l.uAxis]]=a;let v={...u};v[x[l.vAxis]]=s;let h=E(u,n,i),y=E(c,n,i),C=E(v,n,i),H=y.x-h.x,F=y.y-h.y,I=C.x-h.x,V=C.y-h.y,k=H*V-F*I;if(Math.abs(k)<1e-6)return null;let z=o.x-h.x,B=o.y-h.y,S=(z*V-B*I)/k,D=(B*H-z*F)/k;return S<-.05||S>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,S)),t:Math.max(0,Math.min(1,D))}}function Le(e,o,t,n,i){let l=G[e],d=[t.x,t.y,t.z],a=d[l.uAxis],s=d[l.vAxis];if(a<.002||s<.002)return null;let u={x:0,y:0,z:0},x=["x","y","z"];u[x[l.fixedAxis]]=d[l.fixedAxis];let c={...u};c[x[l.uAxis]]=a;let v={...u};v[x[l.vAxis]]=s;let h=E(u,n,i),y=E(c,n,i),C=E(v,n,i),H=y.x-h.x,F=y.y-h.y,I=C.x-h.x,V=C.y-h.y,k=H*V-F*I;if(Math.abs(k)<1e-6)return null;let z=o.x-h.x,B=o.y-h.y,S=(z*V-B*I)/k,D=(B*H-z*F)/k;return{s:Math.max(0,Math.min(1,S)),t:Math.max(0,Math.min(1,D))}}var Te=22;function Re(e,o,t,n,i,l,d,a,s){let u={...Me};function x(b){let m=e.getBoundingClientRect();return{x:b.clientX-m.left,y:b.clientY-m.top}}function c(b){let m=o(),T=d(),g=a();for(let L=0;L<3;L++){let w=Ae(L,m,T,g),r=b.x-w.x,f=b.y-w.y;if(r*r+f*f<=Te*Te)return L}return-1}function v(b){let m=o(),T=d(),g=a();for(let L=G.length-1;L>=0;L--){let w=J(L,b,m,T,g);if(w)return{faceIndex:L,...w}}return null}let h=-1,y={x:0,y:0},C=0;function H(b,m){h=b,y=m,C=o()[["x","y","z"][b]],u.draggingAxisHandle=b,e.style.cursor="grabbing",s()}function F(b){if(h<0)return;let m=b.x-y.x,T=b.y-y.y,L=fe()[h],w=d(),f=(m*L.x+T*L.y)/w,p=Math.max(0,Math.min(1,C+f)),A=o(),M=["x","y","z"],R={...A,[M[h]]:p};t(R);let $=n(),U=l(),te=U>=0?G[U]:null,Y={...$};te&&h===te.fixedAxis?Y[M[h]]=p:Y[M[h]]=Math.min($[M[h]],p),i(Y,l()),s()}function I(){h=-1,u.draggingAxisHandle=-1}let V=-1,k=null,z=null,B=!1;function S(b,m,T,g){V=b,u.draggingFace=b,k=null,z=null,B=!1,g&&(B=!0,z={s:m,t:T}),P(b,m,T),e.style.cursor="crosshair",s()}function D(b,m,T){if(V<0)return;let g=o(),L=d(),w=a(),r=J(V,b,g,L,w),f=V;if(!r&&!T){for(let M=G.length-1;M>=0;M--)if(M!==V&&(r=J(M,b,g,L,w),r)){f=M;break}}if(!r&&T&&(r=Le(V,b,g,L,w),f=V),!r){s();return}f!==V&&(V=f,u.draggingFace=f,k=null,B=!1,z=null);let{s:p,t:A}=r;if(m&&z){if(B){let M=Math.abs(p-z.s),R=Math.abs(A-z.t),$=.02;(M>$||R>$)&&(k=M>=R?"u":"v",B=!1)}k==="u"?A=z.t:k==="v"&&(p=z.s)}else m||(k=null,B=!1,z=null);P(f,p,A),s()}function P(b,m,T){let g=G[b],L=o(),w=["x","y","z"],r={...n()};r[w[g.uAxis]]=m*L[w[g.uAxis]],r[w[g.vAxis]]=T*L[w[g.vAxis]],r[w[g.fixedAxis]]=L[w[g.fixedAxis]],i(r,b)}function O(){V=-1,u.draggingFace=-1,k=null,B=!1,z=null}function K(b){let m=x(b),T=c(m);if(T>=0){b.preventDefault(),H(T,m);return}let g=v(m);g&&(b.preventDefault(),S(g.faceIndex,g.s,g.t,b.shiftKey))}function q(b){let m=x(b);if(h>=0){b.preventDefault(),F(m);return}if(V>=0){b.preventDefault(),D(m,b.shiftKey,b.altKey);return}let T=c(m),g=v(m),L=T,w=T>=0?-1:g?g.faceIndex:-1;(L!==u.hoveredAxisHandle||w!==u.hoveredFace)&&(u.hoveredAxisHandle=L,u.hoveredFace=w,e.style.cursor=L>=0?"grab":w>=0?"crosshair":"default",s())}function N(b){let m=h>=0||V>=0;I(),O(),m&&(u.hoveredAxisHandle=-1,u.hoveredFace=-1,e.style.cursor="default",s())}function _(b){if(b.touches.length!==1)return;let m=x(b.touches[0]),T=c(m);if(T>=0){b.preventDefault(),H(T,m);return}let g=v(m);g&&(b.preventDefault(),S(g.faceIndex,g.s,g.t,!1))}function Z(b){if(b.touches.length!==1)return;let m=x(b.touches[0]);h>=0?(b.preventDefault(),F(m)):V>=0&&(b.preventDefault(),D(m,!1,!1))}function oe(b){I(),O(),s()}function ie(b){let m=b.shiftKey?.04:.004,T=n(),g=o(),L=fe(),w=0,r=0;switch(b.key){case"ArrowRight":w=1;break;case"ArrowLeft":w=-1;break;case"ArrowUp":r=-1;break;case"ArrowDown":r=1;break;default:return}b.preventDefault();let f={...T},p=["x","y","z"];for(let A=0;A<3;A++){let M=w*L[A].x+r*L[A].y;if(Math.abs(M)>.3){let R=T[p[A]]+m*Math.sign(M);f[p[A]]=Math.max(0,Math.min(g[p[A]],R))}}i(f,l()),s()}e.addEventListener("mousedown",K),window.addEventListener("mousemove",q),window.addEventListener("mouseup",N),e.addEventListener("touchstart",_,{passive:!1}),e.addEventListener("touchmove",Z,{passive:!1}),e.addEventListener("touchend",oe),e.addEventListener("keydown",ie),e.setAttribute("tabindex","0");function xe(){e.removeEventListener("mousedown",K),window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",N),e.removeEventListener("touchstart",_),e.removeEventListener("touchmove",Z),e.removeEventListener("touchend",oe),e.removeEventListener("keydown",ie)}return{state:u,destroy:xe}}var Ve=`.box-picker {\r
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
`;var ao=Ie,Fe=!1;function io(){if(Fe||typeof document>"u")return;Fe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ve,document.head.appendChild(e)}function Ie(e,o={}){let t=o.size??300,n=o.controls??!0,i=o.showInputs??!1,l=o.showModeToggle??!1,d=o.showCorners??!1,a={mode:()=>s,switchMode:r=>B(r),onHexInput:r=>{let f=ue(r);f?(c=W(k?{r:255-f.r,g:255-f.g,b:255-f.b}:f,s),x={x:Math.max(x.x,c.x),y:Math.max(x.y,c.y),z:Math.max(x.z,c.z)},g(),m(),O()):m()},onChannelInput:(r,f,p)=>{let A=Math.max(0,Math.min(p,f)),M=["x","y","z"],R=A/p;if(k){let $={...c,[M[r]]:R},U=X($,s);c=W({r:255-U.r,g:255-U.g,b:255-U.b},s)}else c={...c,[M[r]]:R};R>x[M[r]]&&(x={...x,[M[r]]:R}),g(),m(),O()},getRgbForCopy:()=>X(c,s),onRandom:r=>w(r),onReset:()=>w({r:0,g:0,b:0})},s=o.mode??"rgb",u=o.initialColor?W(o.initialColor,s):{x:.7,y:.4,z:.85},x={x:1,y:1,z:1},c={...u},v=0,h=new Set;io();let y=document.createElement("div");y.className="box-picker";let C=document.createElement("canvas");C.style.cursor="grab",y.appendChild(C);let H=ke(C,t),F=null,I=document.createElement("div");I.className="box-picker-controls",F=document.createElement("div"),F.className="box-picker-swatch",I.appendChild(F),y.appendChild(I),(i||l||d)&&Promise.resolve().then(()=>(Se(),He)).then(r=>{r.createControls(I,a,{showInputs:i,showModeToggle:l,showCorners:d})}).catch(()=>{}),e.appendChild(y);let V=Re(C,()=>x,r=>{x=r},()=>c,(r,f)=>{c=r,v=f,g(),m()},()=>v,()=>H.scale,()=>H.center,O),k=!1,z=!0;C.addEventListener("mouseenter",()=>{z=Math.random()<.5,K=!0,O()}),C.addEventListener("mouseleave",()=>{z=Math.random()<.5,K=!1,O()}),C.addEventListener("dblclick",()=>{k=!k,be(k),g(),m(),O()});function B(r){if(r===s)return;let f=X(c,s),p={...c},A={...x};s=r;let M=W(f,s),R={x:1,y:1,z:1};c=M,x=R,D(p,M,A,R,300),m()}let S=null;function D(r,f,p,A,M){S!==null&&cancelAnimationFrame(S);let R=performance.now();function $(U){let te=U-R,Y=Math.min(1,te/M),Q=1-Math.pow(1-Y,3);c={x:r.x+(f.x-r.x)*Q,y:r.y+(f.y-r.y)*Q,z:r.z+(f.z-r.z)*Q},x={x:p.x+(A.x-p.x)*Q,y:p.y+(A.y-p.y)*Q,z:p.z+(A.z-p.z)*Q},N(),g(),Y<1?S=requestAnimationFrame($):S=null}S=requestAnimationFrame($)}let P=!1;function O(){P||(P=!0,requestAnimationFrame(()=>{P=!1,N()}))}let K=!1,q=0;(function r(){if(!K)return;let f=performance.now();f-q>=66&&(q=f,O()),requestAnimationFrame(r)})();function N(){we(H,x,c,v,s,V.state,z)}function _(r,f,p){return Math.round(r+(f-r)*p)}function Z(r,f){let p=f>0?255:0,A=Math.abs(f);return j({r:_(r.r,p,A),g:_(r.g,p,A),b:_(r.b,p,A)})}function oe(r,f){let p=ue(f)||{r:128,g:128,b:128},A=Z(p,.35),M=Z(p,0),R=Z(p,-.35);r.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${A}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${M}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${R}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,r.style.backgroundColor="transparent"}function ie(r){try{navigator.clipboard.writeText(r).catch(()=>{})}catch{}}function xe(r){r&&(r.style.borderColor="#4ade80",r.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{r.style.borderColor="",r.style.boxShadow=""},500))}function b(){let r=X(c,s);return k?{r:255-r.r,g:255-r.g,b:255-r.b}:r}function m(){if(!n)return;let r=b(),f=j(r);F&&oe(F,f);let p=y.querySelector(".box-picker-hex");p&&(p.value=f),T(),y._updateModeButtons&&y._updateModeButtons()}function T(){if(!n)return;let r=ne[s],f=k?W(b(),s):c,p=ye(f,s),A=y.querySelectorAll(".box-picker-channel input"),M=y.querySelectorAll(".box-picker-channel label");for(let R=0;R<A.length;R++)M[R].textContent=r[R],M[R].style.color="",M[R].style.textShadow="none",A[R].value=String(p[R])}function g(){let r=b(),f={rgb:r,hsb:re(r),oklch:ae(r),hex:j(r)};for(let p of h)p(f)}function L(){let r=X(c,s);return{rgb:r,hsb:re(r),oklch:ae(r),hex:j(r)}}m(),N();let w=r=>{c=W(r,s),x={x:Math.max(x.x,c.x),y:Math.max(x.y,c.y),z:Math.max(x.z,c.z)};let f=E(c,H.scale,H.center);v=-1;for(let p=G.length-1;p>=0;p--)if(J(p,f,x,H.scale,H.center)){v=p;break}g(),m(),O()};return{getColor:L,getMode:()=>s,setColor:w,setMode(r){B(r)},on(r,f){h.add(f)},off(r,f){h.delete(f)},destroy(){K=!1,V.destroy(),S!==null&&cancelAnimationFrame(S),e.removeChild(y)}}}return Ge(so);})();
