var ColorIsBox=(()=>{var Ae=Object.defineProperty;var eo=Object.getOwnPropertyDescriptor;var oo=Object.getOwnPropertyNames;var to=Object.prototype.hasOwnProperty;var no=(e,o)=>()=>(e&&(o=e(e=0)),o);var ze=(e,o)=>{for(var t in o)Ae(e,t,{get:o[t],enumerable:!0})},ro=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of oo(o))!to.call(e,i)&&i!==t&&Ae(e,i,{get:()=>o[i],enumerable:!(n=eo(o,i))||n.enumerable});return e};var ao=e=>ro(Ae({},"__esModule",{value:!0}),e);var Ye={};ze(Ye,{createControls:()=>ko});function je(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Ze(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function ko(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let i=f=>{let b=document.createElement("button");return b.textContent=f.toUpperCase(),b.addEventListener("click",()=>o.switchMode(f)),n.appendChild(b),b},c=i("oklch"),d=i("rgb"),a=i("hsb"),r=()=>{let f=o.mode();d.classList.toggle("active",f==="rgb"),a.classList.toggle("active",f==="hsb"),c.classList.toggle("active",f==="oklch")};r();let m=o.switchMode;o._markActive=r,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let b=n.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),n.addEventListener("click",()=>{je(o.getRgbForCopy()?"#"+Ao(o.getRgbForCopy()):"#ffffff"),Ze(n)});let i=document.createElement("div");i.className="box-picker-channels";let c=[],d=[],a=["R","G","B"];for(let b=0;b<3;b++){let v=document.createElement("div");v.className="box-picker-channel";let h=document.createElement("label");h.textContent=a[b];let p=document.createElement("input");p.type="text",p.inputMode="numeric",v.appendChild(h),v.appendChild(p),i.appendChild(v),c.push(p),d.push(h),p.addEventListener("change",()=>{let C=parseFloat(p.value);isNaN(C)||o.onChannelInput(b,C,255)}),p.addEventListener("click",()=>{let C=o.getRgbForCopy();je(`${C.r}, ${C.g}, ${C.b}`),Ze(p)})}let r=document.createElement("div");r.className="box-picker-hexrow";let m=document.createElement("div");m.className="box-picker-hexwrap";let f=document.createElement("label");f.textContent="Hex",m.appendChild(f),m.appendChild(n),r.appendChild(i),r.appendChild(m),e.appendChild(r),e._inputs={hexInput:n,inputs:c,labels:d}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:c,g:d,b:a})}),e.appendChild(n);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function Ao(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Qe=no(()=>{});var To={};ze(To,{createBoxColorPicker:()=>qe,createColorPicker:()=>wo,setBoxInvert:()=>Ee});var ye={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ie={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ve(e){let o=e.r/255,t=e.g/255,n=e.b/255,i=Math.max(o,t,n),c=Math.min(o,t,n),d=i-c,a=0;d!==0&&(i===o?a=((t-n)/d+6)%6:i===t?a=(n-o)/d+2:a=(o-t)/d+4,a*=60);let r=i===0?0:d/i*100,m=i*100;return{h:a,s:r,b:m}}function io(e){let o=e.h,t=e.s/100,n=e.b/100,i=n*t,c=i*(1-Math.abs(o/60%2-1)),d=n-i,a,r,m;return o<60?(a=i,r=c,m=0):o<120?(a=c,r=i,m=0):o<180?(a=0,r=i,m=c):o<240?(a=0,r=c,m=i):o<300?(a=c,r=0,m=i):(a=i,r=0,m=c),{r:Math.round((a+d)*255),g:Math.round((r+d)*255),b:Math.round((m+d)*255)}}function we(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Le(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function so(e){let o=we(e.r/255),t=we(e.g/255),n=we(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*n,c=.2119034982*o+.6806995451*t+.1073969566*n,d=.0883024619*o+.2817188376*t+.6299787005*n,a=Math.cbrt(i),r=Math.cbrt(c),m=Math.cbrt(d);return{L:.2104542553*a+.793617785*r-.0040720468*m,a:1.9779984951*a-2.428592205*r+.4505937099*m,b:.0259040371*a+.7827717662*r-.808675766*m}}function co(e,o,t){let n=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,d=n*n*n,a=i*i*i,r=c*c*c,m=4.0767416621*d-3.3077115913*a+.2309699292*r,f=-1.2684380046*d+2.6097574011*a-.3413193965*r,b=-.0041960863*d-.7034186147*a+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Le(m)))*255),g:Math.round(Math.max(0,Math.min(1,Le(f)))*255),b:Math.round(Math.max(0,Math.min(1,Le(b)))*255)}}function Ce(e){let o=so(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function Te(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return co(e.l,t,n)}function lo(e,o,t){let n=Te({l:e,c:o,h:t});if(Pe(n))return{l:e,c:o,h:t};let i=0,c=o;for(let d=0;d<20;d++){let a=(i+c)/2;n=Te({l:e,c:a,h:t}),Pe(n)?i=a:c=a}return{l:e,c:i,h:t}}function Pe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function be(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Ve(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Fe=.4;function ee(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return io({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*Fe,i=e.z*359,c=lo(t,n,i);return Te(c)}}function ie(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ve(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Ce(e);return{x:t.l,y:Math.min(t.c/Fe,1),z:t.h/359}}}function Be(e,o){let t=Ie[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function De(e,o,t,n,i,c=!1){let d;e===0?d={x:n,y:o,z:t}:e===1?d={x:o,y:n,z:t}:d={x:o,y:t,z:n};let a=ee(d,i);return c?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Oe=Math.PI/6,uo=Math.cos(Oe),bo=Math.sin(Oe),fe=!1;function Ee(e){fe=e}function E(e,o,t){return{x:t.x+(e.y-e.x)*uo*o,y:t.y+e.z*o-(e.x+e.y)*bo*o}}function fo(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],ho=64,_e={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function Ge(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ne(e,o,t,n,i,c,d=!0,a=null){let{ctx:r,scale:m,center:f,width:b,height:v}=e;r.save(),r.clearRect(0,0,b,v);let h=fo(o).map(p=>E(p,m,f));if(xo(r,m,f,i),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,po(r,h,o,i),r.restore(),d&&yo(r,i,m,f),n>=0){let p=ee(t,i),C=fe?{r:255-p.r,g:255-p.g,b:255-p.b}:p,k=E(t,m,f);a&&a.active&&vo(r,k,a.rgb,a.alpha),Co(r,k,C)}r.restore()}var mo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function xo(e,o,t,n){let i=E({x:0,y:0,z:0},o,t),c=[E({x:1,y:0,z:0},o,t),E({x:0,y:1,z:0},o,t),E({x:0,y:0,z:1},o,t)],d=mo[n];e.lineWidth=1.5;for(let a=0;a<c.length;a++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(c[a].x,c[a].y),e.strokeStyle=d[a],e.stroke()}function po(e,o,t,n){let i=[t.x,t.y,t.z];for(let c=0;c<Y.length;c++){let d=Y[c],a=i[d.fixedAxis],r=i[d.uAxis],m=i[d.vAxis];if(r<.002&&m<.002)continue;let f=d.quad.map(b=>o[b]);go(e,f,d.fixedAxis,a,r,m,n)}}function go(e,o,t,n,i,c,d){let a=ho,r=document.createElement("canvas");r.width=a,r.height=a;let m=r.getContext("2d"),f=m.createImageData(a,a),b=f.data;for(let J=0;J<a;J++)for(let I=0;I<a;I++){let oe=I/(a-1)*i,q=J/(a-1)*c,N=De(t,oe,q,n,d,fe),H=(J*a+I)*4;b[H]=N.r,b[H+1]=N.g,b[H+2]=N.b,b[H+3]=255}m.putImageData(f,0,0);let v=o[0],h=o[1],p=o[2],C=o[3],k=h.x-v.x,y=h.y-v.y,L=C.x-v.x,R=C.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(h.x,h.y),e.lineTo(p.x,p.y),e.lineTo(C.x,C.y),e.closePath(),e.clip();let A=2/a,$=v.x-k*A-L*A,F=v.y-y*A-R*A,B=1+2*A,D=1+2*A;e.transform(k*B/a,y*B/a,L*D/a,R*D/a,$,F),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function yo(e,o,t,n){let i=ye[o],c=fe?[E({x:0,y:1,z:1},t,n),E({x:1,y:0,z:1},t,n),E({x:1,y:1,z:0},t,n)]:[E({x:1,y:0,z:0},t,n),E({x:0,y:1,z:0},t,n),E({x:0,y:0,z:1},t,n)],d=fe?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let r=c[a].x+d[a].x,m=c[a].y+d[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(i[a],r,m)}e.globalAlpha=1,e.restore()}var Q=30,ne=13;function vo(e,o,t,n){let i=(Q+ne)/2,c=5,d=Math.floor(o.x/c)*c,a=Math.floor(o.y/c)*c,r=Q*2+c*2,m=Math.max(0,Math.min(1,n));e.save(),e.beginPath(),e.arc(o.x,o.y,Q,0,Math.PI*2),e.arc(o.x,o.y,ne,0,Math.PI*2,!0),e.clip();for(let k=-1;k*c<=r;k++)for(let y=-1;y*c<=r;y++)e.fillStyle=(k+y)%2===0?"#ffffff":"#d9d9d9",e.fillRect(d+k*c,a+y*c,c,c);let f="rgba("+t.r+","+t.g+","+t.b+",0)",b="rgba("+t.r+","+t.g+","+t.b+",1)",v=e;if(typeof v.createConicGradient=="function"){let k=v.createConicGradient(-Math.PI/2,o.x,o.y);k.addColorStop(0,f),k.addColorStop(1,b),e.fillStyle=k,e.fillRect(d-Q,a-Q,r,r)}else for(let y=0;y<36;y++){let L=-Math.PI/2+y/36*Math.PI*2,R=-Math.PI/2+(y+1)/36*Math.PI*2,A=(y+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(L)*ne,o.y+Math.sin(L)*ne),e.arc(o.x,o.y,Q,L,R),e.arc(o.x,o.y,ne,R,L,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+A.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,Q,0,Math.PI*2),e.arc(o.x,o.y,ne,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-Q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let h=m*Math.PI*2,p=o.x+i*Math.sin(h),C=o.y-i*Math.cos(h);e.beginPath(),e.arc(p,C,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Co(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Ue(e,o,t,n){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return E(i[e],t,n)}function Re(){let e={x:0,y:0};return[E({x:1,y:0,z:0},1,e),E({x:0,y:1,z:0},1,e),E({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function de(e,o,t,n,i){let c=Y[e],d=[t.x,t.y,t.z],a=d[c.uAxis],r=d[c.vAxis];if(a<.002||r<.002)return null;let m={x:0,y:0,z:0},f=["x","y","z"];m[f[c.fixedAxis]]=d[c.fixedAxis];let b={...m};b[f[c.uAxis]]=a;let v={...m};v[f[c.vAxis]]=r;let h=E(m,n,i),p=E(b,n,i),C=E(v,n,i),k=p.x-h.x,y=p.y-h.y,L=C.x-h.x,R=C.y-h.y,A=k*R-y*L;if(Math.abs(A)<1e-6)return null;let $=o.x-h.x,F=o.y-h.y,B=($*R-F*L)/A,D=(F*k-$*y)/A;return B<-.05||B>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,D))}}function $e(e,o,t,n,i){let c=Y[e],d=[t.x,t.y,t.z],a=d[c.uAxis],r=d[c.vAxis];if(a<.002||r<.002)return null;let m={x:0,y:0,z:0},f=["x","y","z"];m[f[c.fixedAxis]]=d[c.fixedAxis];let b={...m};b[f[c.uAxis]]=a;let v={...m};v[f[c.vAxis]]=r;let h=E(m,n,i),p=E(b,n,i),C=E(v,n,i),k=p.x-h.x,y=p.y-h.y,L=C.x-h.x,R=C.y-h.y,A=k*R-y*L;if(Math.abs(A)<1e-6)return null;let $=o.x-h.x,F=o.y-h.y,B=($*R-F*L)/A,D=(F*k-$*y)/A;return{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,D))}}var Ke=22;function Xe(e,o,t,n,i,c,d,a,r,m,f,b,v){let h={..._e};function p(s){let u=e.getBoundingClientRect();return{x:s.clientX-u.left,y:s.clientY-u.top}}let C=!1,k=!1,y=!1,L=9,R=1e3,A=null;function $(){F(),A=setTimeout(B,R)}function F(){A!==null&&(clearTimeout(A),A=null)}function B(){A=null,h.alphaMode=!0,me(),x(),r()}function D(s){let u=v();return Math.hypot(s.x-u.x,s.y-u.y)}function J(s){let u=v();return(Math.atan2(s.x-u.x,-(s.y-u.y))+Math.PI*2)%(Math.PI*2)}function I(s){f(J(s)/(Math.PI*2)),r()}function oe(s){let u=D(s);return u>=ne-4&&u<=Q+6}function q(s){let u=o(),T=d(),M=a();for(let w=0;w<3;w++){let V=Ue(w,u,T,M),z=s.x-V.x,X=s.y-V.y;if(z*z+X*X<=Ke*Ke)return w}return-1}function N(s){let u=o(),T=d(),M=a();for(let w=Y.length-1;w>=0;w--){let V=de(w,s,u,T,M);if(V)return{faceIndex:w,...V}}return null}let H=-1,re={x:0,y:0},se=0;function he(s,u){H=s,re=u,se=o()[["x","y","z"][s]],h.draggingAxisHandle=s,e.style.cursor="grabbing",r()}function Me(s){if(F(),H<0)return;let u=s.x-re.x,T=s.y-re.y,w=Re()[H],V=d(),X=(u*w.x+T*w.y)/V,Z=Math.max(0,Math.min(1,se+X)),W=o(),U=["x","y","z"],le={...W,[U[H]]:Z};t(le);let ue=n(),Se=c(),He=Se>=0?Y[Se]:null,ke={...ue};He&&H===He.fixedAxis?ke[U[H]]=Z:ke[U[H]]=Math.min(ue[U[H]],Z),i(ke,c()),r()}function me(){H=-1,h.draggingAxisHandle=-1}let O=-1,G=null,j=null,K=!1;function xe(s,u,T,M){O=s,h.draggingFace=s,G=null,j=null,K=!1,M&&(K=!0,j={s:u,t:T}),l(s,u,T),e.style.cursor="crosshair",r()}function ce(s,u,T){if(F(),O<0)return;let M=o(),w=d(),V=a(),z=de(O,s,M,w,V),X=O;if(!z&&!T){for(let U=Y.length-1;U>=0;U--)if(U!==O&&(z=de(U,s,M,w,V),z)){X=U;break}}if(!z&&T&&(z=$e(O,s,M,w,V),X=O),!z){r();return}X!==O&&(O=X,h.draggingFace=X,G=null,K=!1,j=null);let{s:Z,t:W}=z;if(u&&j){if(K){let U=Math.abs(Z-j.s),le=Math.abs(W-j.t),ue=.02;(U>ue||le>ue)&&(G=U>=le?"u":"v",K=!1)}G==="u"?W=j.t:G==="v"&&(Z=j.s)}else u||(G=null,K=!1,j=null);l(X,Z,W),r()}function l(s,u,T){let M=Y[s],w=o(),V=["x","y","z"],z={...n()};z[V[M.uAxis]]=u*w[V[M.uAxis]],z[V[M.vAxis]]=T*w[V[M.vAxis]],z[V[M.fixedAxis]]=w[V[M.fixedAxis]],i(z,s)}function x(){O=-1,h.draggingFace=-1,G=null,K=!1,j=null}function g(s){k=!0;let u=p(s);if(m()){if(h.alphaMode){if(D(u)<=L){h.alphaMode=!1,r();return}if(oe(u)){s.preventDefault(),C=!0,I(u);return}h.alphaMode=!1,r();return}D(u)<=L&&$()}let T=q(u);if(T>=0){s.preventDefault(),he(T,u);return}let M=N(u);M&&(s.preventDefault(),xe(M.faceIndex,M.s,M.t,s.shiftKey))}function P(s){let u=p(s);if(C){s.preventDefault(),I(u);return}if(k&&h.alphaMode&&oe(u)){s.preventDefault(),C=!0,I(u);return}if(H>=0){s.preventDefault(),Me(u);return}if(O>=0){s.preventDefault(),ce(u,s.shiftKey,s.altKey);return}let T=q(u),M=N(u),w=T,V=T>=0?-1:M?M.faceIndex:-1;(w!==h.hoveredAxisHandle||V!==h.hoveredFace)&&(h.hoveredAxisHandle=w,h.hoveredFace=V,e.style.cursor=w>=0?"grab":V>=0?"crosshair":"default",r())}function _(s){F(),k=!1,C=!1;let u=H>=0||O>=0;me(),x(),u&&(h.hoveredAxisHandle=-1,h.hoveredFace=-1,e.style.cursor="default",r())}function S(s){if(s.touches.length!==1)return;y=!0;let u=p(s.touches[0]);if(m()){if(h.alphaMode){if(D(u)<=L){h.alphaMode=!1,r();return}if(oe(u)){s.preventDefault(),C=!0,I(u);return}h.alphaMode=!1,r();return}D(u)<=L&&$()}let T=q(u);if(T>=0){s.preventDefault(),he(T,u);return}let M=N(u);M&&(s.preventDefault(),xe(M.faceIndex,M.s,M.t,!1))}function ae(s){if(s.touches.length!==1)return;let u=p(s.touches[0]);C?(s.preventDefault(),I(u)):y&&h.alphaMode&&oe(u)?(s.preventDefault(),C=!0,I(u)):H>=0?(s.preventDefault(),Me(u)):O>=0&&(s.preventDefault(),ce(u,!1,!1))}function te(s){F(),y=!1,C=!1,me(),x(),r()}function pe(s){if(h.alphaMode){if(s.key==="Escape"){h.alphaMode=!1,r();return}if(s.key==="ArrowUp"||s.key==="ArrowRight"){s.preventDefault(),f(Math.min(1,b()+(s.shiftKey?.08:.02))),r();return}if(s.key==="ArrowDown"||s.key==="ArrowLeft"){s.preventDefault(),f(Math.max(0,b()-(s.shiftKey?.08:.02))),r();return}}let u=s.shiftKey?.04:.004,T=n(),M=o(),w=Re(),V=0,z=0;switch(s.key){case"ArrowRight":V=1;break;case"ArrowLeft":V=-1;break;case"ArrowUp":z=-1;break;case"ArrowDown":z=1;break;default:return}s.preventDefault();let X={...T},Z=["x","y","z"];for(let W=0;W<3;W++){let U=V*w[W].x+z*w[W].y;if(Math.abs(U)>.3){let le=T[Z[W]]+u*Math.sign(U);X[Z[W]]=Math.max(0,Math.min(M[Z[W]],le))}}i(X,c()),r()}e.addEventListener("mousedown",g),window.addEventListener("mousemove",P),window.addEventListener("mouseup",_),e.addEventListener("touchstart",S,{passive:!1}),e.addEventListener("touchmove",ae,{passive:!1}),e.addEventListener("touchend",te),e.addEventListener("keydown",pe),e.setAttribute("tabindex","0");function ge(){F(),e.removeEventListener("mousedown",g),window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",_),e.removeEventListener("touchstart",S),e.removeEventListener("touchmove",ae),e.removeEventListener("touchend",te),e.removeEventListener("keydown",pe)}return{state:h,destroy:ge}}var We=`.box-picker {\r
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
`;var wo=qe,Je=!1;function Lo(){if(Je||typeof document>"u")return;Je=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=We,document.head.appendChild(e)}function qe(e,o={}){let t=o.size??300,n=o.controls??!0,i=o.showInputs??!1,c=o.showModeToggle??!1,d=o.showCorners??!1,a={mode:()=>r,switchMode:l=>J(l),onHexInput:l=>{let x=Ve(l);x?(b=ie(B?{r:255-x.r,g:255-x.g,b:255-x.b}:x,r),f={x:Math.max(f.x,b.x),y:Math.max(f.y,b.y),z:Math.max(f.z,b.z)},K(),G(),N()):G()},onChannelInput:(l,x,g)=>{let P=Math.max(0,Math.min(g,x)),_=["x","y","z"],S=P/g;if(B){let ae={...b,[_[l]]:S},te=ee(ae,r);b=ie({r:255-te.r,g:255-te.g,b:255-te.b},r)}else b={...b,[_[l]]:S};S>f[_[l]]&&(f={...f,[_[l]]:S}),K(),G(),N()},getRgbForCopy:()=>ee(b,r),onRandom:l=>ce(l),onReset:()=>ce({r:0,g:0,b:0})},r=o.mode??"rgb",m=o.initialColor?ie(o.initialColor,r):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},b={...m},v=0,h=()=>o.alpha!==void 0,p=Math.max(0,Math.min(1,o.alpha??1));function C(l){let x=Math.max(0,Math.min(1,l));x!==p&&(p=x,K(),G(),N())}let k=new Set;Lo();let y=document.createElement("div");y.className="box-picker";let L=document.createElement("canvas");L.style.cursor="grab",y.appendChild(L);let R=Ge(L,t),A=null,$=document.createElement("div");$.className="box-picker-controls",A=document.createElement("div"),A.className="box-picker-swatch",$.appendChild(A),y.appendChild($),(i||c||d)&&Promise.resolve().then(()=>(Qe(),Ye)).then(l=>{l.createControls($,a,{showInputs:i,showModeToggle:c,showCorners:d})}).catch(()=>{}),e.appendChild(y);let F=Xe(L,()=>f,l=>{f=l},()=>b,(l,x)=>{b=l,v=x,K(),G()},()=>v,()=>R.scale,()=>R.center,N,h,C,()=>p,()=>E(b,R.scale,R.center)),B=!1,D=!0;L.addEventListener("mouseenter",()=>{D=!0,N()}),L.addEventListener("mouseleave",()=>{D=!1,N()}),L.addEventListener("dblclick",()=>{B=!B,Ee(B),K(),G(),N()});function J(l){if(l===r)return;let x=ee(b,r),g={...b},P={...f};r=l;let _=ie(x,r),S={x:1,y:1,z:1};b=_,f=S,oe(g,_,P,S,300),G()}let I=null;function oe(l,x,g,P,_){I!==null&&cancelAnimationFrame(I);let S=performance.now();function ae(te){let pe=te-S,ge=Math.min(1,pe/_),s=1-Math.pow(1-ge,3);b={x:l.x+(x.x-l.x)*s,y:l.y+(x.y-l.y)*s,z:l.z+(x.z-l.z)*s},f={x:g.x+(P.x-g.x)*s,y:g.y+(P.y-g.y)*s,z:g.z+(P.z-g.z)*s},H(),K(),ge<1?I=requestAnimationFrame(ae):I=null}I=requestAnimationFrame(ae)}let q=!1;function N(){q||(q=!0,requestAnimationFrame(()=>{q=!1,H()}))}function H(){Ne(R,f,b,v,r,F.state,D,{active:F.state.alphaMode,alpha:p,rgb:O()})}function re(l,x,g){return Math.round(l+(x-l)*g)}function se(l,x){let g=x>0?255:0,P=Math.abs(x);return be({r:re(l.r,g,P),g:re(l.g,g,P),b:re(l.b,g,P)})}function he(l,x){let g=Ve(x)||{r:128,g:128,b:128},P=se(g,.35),_=se(g,0),S=se(g,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${P}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${_}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function Me(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function me(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function O(){let l=ee(b,r);return B?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function G(){if(!n)return;let l=O(),x=be(l);A&&he(A,x);let g=y.querySelector(".box-picker-hex");g&&(g.value=x),j(),y._updateModeButtons&&y._updateModeButtons()}function j(){if(!n)return;let l=ye[r],x=B?ie(O(),r):b,g=Be(x,r),P=y.querySelectorAll(".box-picker-channel input"),_=y.querySelectorAll(".box-picker-channel label");for(let S=0;S<P.length;S++)_[S].textContent=l[S],_[S].style.color="",_[S].style.textShadow="none",P[S].value=String(g[S])}function K(){let l=O(),x={rgb:l,hsb:ve(l),oklch:Ce(l),hex:be(l),alpha:p};for(let g of k)g(x)}function xe(){let l=ee(b,r);return{rgb:l,hsb:ve(l),oklch:Ce(l),hex:be(l)}}G(),H();let ce=l=>{b=ie(l,r),f={x:Math.max(f.x,b.x),y:Math.max(f.y,b.y),z:Math.max(f.z,b.z)};let x=E(b,R.scale,R.center);v=-1;for(let g=Y.length-1;g>=0;g--)if(de(g,x,f,R.scale,R.center)){v=g;break}K(),G(),N()};return{getColor:xe,getMode:()=>r,setColor:ce,setAlpha:C,getAlpha:()=>p,setMode(l){J(l)},on(l,x){k.add(x)},off(l,x){k.delete(x)},destroy(){F.destroy(),I!==null&&cancelAnimationFrame(I),e.removeChild(y)}}}return ao(To);})();
