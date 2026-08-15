var ColorIsBox=(()=>{var Me=Object.defineProperty;var Je=Object.getOwnPropertyDescriptor;var qe=Object.getOwnPropertyNames;var eo=Object.prototype.hasOwnProperty;var oo=(e,o)=>()=>(e&&(o=e(e=0)),o);var Se=(e,o)=>{for(var t in o)Me(e,t,{get:o[t],enumerable:!0})},to=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of qe(o))!eo.call(e,i)&&i!==t&&Me(e,i,{get:()=>o[i],enumerable:!(n=Je(o,i))||n.enumerable});return e};var no=e=>to(Me({},"__esModule",{value:!0}),e);var je={};Se(je,{createControls:()=>Co});function Xe(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function We(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Co(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let i=f=>{let u=document.createElement("button");return u.textContent=f.toUpperCase(),u.addEventListener("click",()=>o.switchMode(f)),n.appendChild(u),u},c=i("oklch"),d=i("rgb"),a=i("hsb"),r=()=>{let f=o.mode();d.classList.toggle("active",f==="rgb"),a.classList.toggle("active",f==="hsb"),c.classList.toggle("active",f==="oklch")};r();let h=o.switchMode;o._markActive=r,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let u=n.value;/^#?[0-9a-f]{6}$/i.test(u)?o.onHexInput(u):o.onHexInput("")}),n.addEventListener("click",()=>{Xe(o.getRgbForCopy()?"#"+Mo(o.getRgbForCopy()):"#ffffff"),We(n)});let i=document.createElement("div");i.className="box-picker-channels";let c=[],d=[],a=["R","G","B"];for(let u=0;u<3;u++){let y=document.createElement("div");y.className="box-picker-channel";let m=document.createElement("label");m.textContent=a[u];let p=document.createElement("input");p.type="text",p.inputMode="numeric",y.appendChild(m),y.appendChild(p),i.appendChild(y),c.push(p),d.push(m),p.addEventListener("change",()=>{let k=parseFloat(p.value);isNaN(k)||o.onChannelInput(u,k,255)}),p.addEventListener("click",()=>{let k=o.getRgbForCopy();Xe(`${k.r}, ${k.g}, ${k.b}`),We(p)})}let r=document.createElement("div");r.className="box-picker-hexrow";let h=document.createElement("div");h.className="box-picker-hexwrap";let f=document.createElement("label");f.textContent="Hex",h.appendChild(f),h.appendChild(n),r.appendChild(i),r.appendChild(h),e.appendChild(r),e._inputs={hexInput:n,inputs:c,labels:d}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:c,g:d,b:a})}),e.appendChild(n);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function Mo(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Ze=oo(()=>{});var wo={};Se(wo,{createBoxColorPicker:()=>Qe,createColorPicker:()=>ko,setBoxInvert:()=>Te});var ge={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},He={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ye(e){let o=e.r/255,t=e.g/255,n=e.b/255,i=Math.max(o,t,n),c=Math.min(o,t,n),d=i-c,a=0;d!==0&&(i===o?a=((t-n)/d+6)%6:i===t?a=(n-o)/d+2:a=(o-t)/d+4,a*=60);let r=i===0?0:d/i*100,h=i*100;return{h:a,s:r,b:h}}function ro(e){let o=e.h,t=e.s/100,n=e.b/100,i=n*t,c=i*(1-Math.abs(o/60%2-1)),d=n-i,a,r,h;return o<60?(a=i,r=c,h=0):o<120?(a=c,r=i,h=0):o<180?(a=0,r=i,h=c):o<240?(a=0,r=c,h=i):o<300?(a=c,r=0,h=i):(a=i,r=0,h=c),{r:Math.round((a+d)*255),g:Math.round((r+d)*255),b:Math.round((h+d)*255)}}function ke(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ae(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function ao(e){let o=ke(e.r/255),t=ke(e.g/255),n=ke(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*n,c=.2119034982*o+.6806995451*t+.1073969566*n,d=.0883024619*o+.2817188376*t+.6299787005*n,a=Math.cbrt(i),r=Math.cbrt(c),h=Math.cbrt(d);return{L:.2104542553*a+.793617785*r-.0040720468*h,a:1.9779984951*a-2.428592205*r+.4505937099*h,b:.0259040371*a+.7827717662*r-.808675766*h}}function io(e,o,t){let n=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,d=n*n*n,a=i*i*i,r=c*c*c,h=4.0767416621*d-3.3077115913*a+.2309699292*r,f=-1.2684380046*d+2.6097574011*a-.3413193965*r,u=-.0041960863*d-.7034186147*a+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Ae(h)))*255),g:Math.round(Math.max(0,Math.min(1,Ae(f)))*255),b:Math.round(Math.max(0,Math.min(1,Ae(u)))*255)}}function ve(e){let o=ao(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function we(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return io(e.l,t,n)}function so(e,o,t){let n=we({l:e,c:o,h:t});if(ze(n))return{l:e,c:o,h:t};let i=0,c=o;for(let d=0;d<20;d++){let a=(i+c)/2;n=we({l:e,c:a,h:t}),ze(n)?i=a:c=a}return{l:e,c:i,h:t}}function ze(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function he(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Le(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ie=.4;function ee(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ro({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*Ie,i=e.z*359,c=so(t,n,i);return we(c)}}function se(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ye(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=ve(e);return{x:t.l,y:Math.min(t.c/Ie,1),z:t.h/359}}}function Pe(e,o){let t=He[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Fe(e,o,t,n,i,c=!1){let d;e===0?d={x:n,y:o,z:t}:e===1?d={x:o,y:n,z:t}:d={x:o,y:t,z:n};let a=ee(d,i);return c?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Be=Math.PI/6,co=Math.cos(Be),lo=Math.sin(Be),me=!1;function Te(e){me=e}function E(e,o,t){return{x:t.x+(e.y-e.x)*co*o,y:t.y+e.z*o-(e.x+e.y)*lo*o}}function uo(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],bo=64,De={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function Oe(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function _e(e,o,t,n,i,c,d=!0,a=null){let{ctx:r,scale:h,center:f,width:u,height:y}=e;r.save(),r.clearRect(0,0,u,y);let m=uo(o).map(p=>E(p,h,f));if(ho(r,h,f,i),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,mo(r,m,o,i),r.restore(),d&&po(r,i,h,f),n>=0){let p=ee(t,i),k=me?{r:255-p.r,g:255-p.g,b:255-p.b}:p,A=E(t,h,f);a&&a.active&&go(r,A,a.rgb,a.alpha),yo(r,A,k)}r.restore()}var fo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function ho(e,o,t,n){let i=E({x:0,y:0,z:0},o,t),c=[E({x:1,y:0,z:0},o,t),E({x:0,y:1,z:0},o,t),E({x:0,y:0,z:1},o,t)],d=fo[n];e.lineWidth=1.5;for(let a=0;a<c.length;a++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(c[a].x,c[a].y),e.strokeStyle=d[a],e.stroke()}function mo(e,o,t,n){let i=[t.x,t.y,t.z];for(let c=0;c<Y.length;c++){let d=Y[c],a=i[d.fixedAxis],r=i[d.uAxis],h=i[d.vAxis];if(r<.002&&h<.002)continue;let f=d.quad.map(u=>o[u]);xo(e,f,d.fixedAxis,a,r,h,n)}}function xo(e,o,t,n,i,c,d){let a=bo,r=document.createElement("canvas");r.width=a,r.height=a;let h=r.getContext("2d"),f=h.createImageData(a,a),u=f.data;for(let Q=0;Q<a;Q++)for(let _=0;_<a;_++){let ne=_/(a-1)*i,P=Q/(a-1)*c,G=Fe(t,ne,P,n,d,me),j=(Q*a+_)*4;u[j]=G.r,u[j+1]=G.g,u[j+2]=G.b,u[j+3]=255}h.putImageData(f,0,0);let y=o[0],m=o[1],p=o[2],k=o[3],A=m.x-y.x,M=m.y-y.y,L=k.x-y.x,R=k.y-y.y;e.save(),e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(m.x,m.y),e.lineTo(p.x,p.y),e.lineTo(k.x,k.y),e.closePath(),e.clip();let w=2/a,$=y.x-A*w-L*w,B=y.y-M*w-R*w,I=1+2*w,D=1+2*w;e.transform(A*I/a,M*I/a,L*D/a,R*D/a,$,B),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function po(e,o,t,n){let i=ge[o],c=me?[E({x:0,y:1,z:1},t,n),E({x:1,y:0,z:1},t,n),E({x:1,y:1,z:0},t,n)]:[E({x:1,y:0,z:0},t,n),E({x:0,y:1,z:0},t,n),E({x:0,y:0,z:1},t,n)],d=me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let r=c[a].x+d[a].x,h=c[a].y+d[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(i[a],r,h)}e.globalAlpha=1,e.restore()}var q=30,te=13;function go(e,o,t,n){let i=(q+te)/2,c=5,d=Math.floor(o.x/c)*c,a=Math.floor(o.y/c)*c,r=q*2+c*2,h=Math.max(0,Math.min(1,n));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,te,0,Math.PI*2,!0),e.clip();for(let A=-1;A*c<=r;A++)for(let M=-1;M*c<=r;M++)e.fillStyle=(A+M)%2===0?"#ffffff":"#d9d9d9",e.fillRect(d+A*c,a+M*c,c,c);let f="rgba("+t.r+","+t.g+","+t.b+",0)",u="rgba("+t.r+","+t.g+","+t.b+",1)",y=e;if(typeof y.createConicGradient=="function"){let A=y.createConicGradient(-Math.PI/2,o.x,o.y);A.addColorStop(0,f),A.addColorStop(1,u),e.fillStyle=A,e.fillRect(d-q,a-q,r,r)}else for(let M=0;M<36;M++){let L=-Math.PI/2+M/36*Math.PI*2,R=-Math.PI/2+(M+1)/36*Math.PI*2,w=(M+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(L)*te,o.y+Math.sin(L)*te),e.arc(o.x,o.y,q,L,R),e.arc(o.x,o.y,te,R,L,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+w.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,te,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let m=h*Math.PI*2,p=o.x+i*Math.sin(m),k=o.y-i*Math.cos(m);e.beginPath(),e.arc(p,k,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function yo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Ge(e,o,t,n){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return E(i[e],t,n)}function Ve(){let e={x:0,y:0};return[E({x:1,y:0,z:0},1,e),E({x:0,y:1,z:0},1,e),E({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function ue(e,o,t,n,i){let c=Y[e],d=[t.x,t.y,t.z],a=d[c.uAxis],r=d[c.vAxis];if(a<.002||r<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[c.fixedAxis]]=d[c.fixedAxis];let u={...h};u[f[c.uAxis]]=a;let y={...h};y[f[c.vAxis]]=r;let m=E(h,n,i),p=E(u,n,i),k=E(y,n,i),A=p.x-m.x,M=p.y-m.y,L=k.x-m.x,R=k.y-m.y,w=A*R-M*L;if(Math.abs(w)<1e-6)return null;let $=o.x-m.x,B=o.y-m.y,I=($*R-B*L)/w,D=(B*A-$*M)/w;return I<-.05||I>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,I)),t:Math.max(0,Math.min(1,D))}}function Ne(e,o,t,n,i){let c=Y[e],d=[t.x,t.y,t.z],a=d[c.uAxis],r=d[c.vAxis];if(a<.002||r<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[c.fixedAxis]]=d[c.fixedAxis];let u={...h};u[f[c.uAxis]]=a;let y={...h};y[f[c.vAxis]]=r;let m=E(h,n,i),p=E(u,n,i),k=E(y,n,i),A=p.x-m.x,M=p.y-m.y,L=k.x-m.x,R=k.y-m.y,w=A*R-M*L;if(Math.abs(w)<1e-6)return null;let $=o.x-m.x,B=o.y-m.y,I=($*R-B*L)/w,D=(B*A-$*M)/w;return{s:Math.max(0,Math.min(1,I)),t:Math.max(0,Math.min(1,D))}}var Ue=22;function $e(e,o,t,n,i,c,d,a,r,h,f,u,y){let m={...De};function p(s){let b=e.getBoundingClientRect();return{x:s.clientX-b.left,y:s.clientY-b.top}}let k=!1,A=9,M=1e3,L=null;function R(){w(),L=setTimeout($,M)}function w(){L!==null&&(clearTimeout(L),L=null)}function $(){L=null,m.alphaMode=!0,be(),re(),r()}function B(s){let b=y();return Math.hypot(s.x-b.x,s.y-b.y)}function I(s){let b=y();return(Math.atan2(s.x-b.x,-(s.y-b.y))+Math.PI*2)%(Math.PI*2)}function D(s){f(I(s)/(Math.PI*2)),r()}function Q(s){let b=B(s);return b>=te-4&&b<=q+6}function _(s){let b=o(),v=d(),C=a();for(let T=0;T<3;T++){let V=Ge(T,b,v,C),H=s.x-V.x,X=s.y-V.y;if(H*H+X*X<=Ue*Ue)return T}return-1}function ne(s){let b=o(),v=d(),C=a();for(let T=Y.length-1;T>=0;T--){let V=ue(T,s,b,v,C);if(V)return{faceIndex:T,...V}}return null}let P=-1,G={x:0,y:0},j=0;function ce(s,b){P=s,G=b,j=o()[["x","y","z"][s]],m.draggingAxisHandle=s,e.style.cursor="grabbing",r()}function le(s){if(w(),P<0)return;let b=s.x-G.x,v=s.y-G.y,T=Ve()[P],V=d(),X=(b*T.x+v*T.y)/V,Z=Math.max(0,Math.min(1,j+X)),W=o(),N=["x","y","z"],de={...W,[N[P]]:Z};t(de);let fe=n(),Ee=c(),Re=Ee>=0?Y[Ee]:null,Ce={...fe};Re&&P===Re.fixedAxis?Ce[N[P]]=Z:Ce[N[P]]=Math.min(fe[N[P]],Z),i(Ce,c()),r()}function be(){P=-1,m.draggingAxisHandle=-1}let K=-1,oe=null,U=null,O=!1;function xe(s,b,v,C){K=s,m.draggingFace=s,oe=null,U=null,O=!1,C&&(O=!0,U={s:b,t:v}),pe(s,b,v),e.style.cursor="crosshair",r()}function J(s,b,v){if(w(),K<0)return;let C=o(),T=d(),V=a(),H=ue(K,s,C,T,V),X=K;if(!H&&!v){for(let N=Y.length-1;N>=0;N--)if(N!==K&&(H=ue(N,s,C,T,V),H)){X=N;break}}if(!H&&v&&(H=Ne(K,s,C,T,V),X=K),!H){r();return}X!==K&&(K=X,m.draggingFace=X,oe=null,O=!1,U=null);let{s:Z,t:W}=H;if(b&&U){if(O){let N=Math.abs(Z-U.s),de=Math.abs(W-U.t),fe=.02;(N>fe||de>fe)&&(oe=N>=de?"u":"v",O=!1)}oe==="u"?W=U.t:oe==="v"&&(Z=U.s)}else b||(oe=null,O=!1,U=null);pe(X,Z,W),r()}function pe(s,b,v){let C=Y[s],T=o(),V=["x","y","z"],H={...n()};H[V[C.uAxis]]=b*T[V[C.uAxis]],H[V[C.vAxis]]=v*T[V[C.vAxis]],H[V[C.fixedAxis]]=T[V[C.fixedAxis]],i(H,s)}function re(){K=-1,m.draggingFace=-1,oe=null,O=!1,U=null}function l(s){let b=p(s);if(h()){if(m.alphaMode){if(B(b)<=A){m.alphaMode=!1,r();return}if(Q(b)){s.preventDefault(),k=!0,D(b);return}m.alphaMode=!1,r();return}B(b)<=A&&R()}let v=_(b);if(v>=0){s.preventDefault(),ce(v,b);return}let C=ne(b);C&&(s.preventDefault(),xe(C.faceIndex,C.s,C.t,s.shiftKey))}function x(s){let b=p(s);if(k){s.preventDefault(),D(b);return}if(P>=0){s.preventDefault(),le(b);return}if(K>=0){s.preventDefault(),J(b,s.shiftKey,s.altKey);return}let v=_(b),C=ne(b),T=v,V=v>=0?-1:C?C.faceIndex:-1;(T!==m.hoveredAxisHandle||V!==m.hoveredFace)&&(m.hoveredAxisHandle=T,m.hoveredFace=V,e.style.cursor=T>=0?"grab":V>=0?"crosshair":"default",r())}function g(s){w(),k=!1;let b=P>=0||K>=0;be(),re(),b&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",r())}function z(s){if(s.touches.length!==1)return;let b=p(s.touches[0]);if(h()){if(m.alphaMode){if(B(b)<=A){m.alphaMode=!1,r();return}if(Q(b)){s.preventDefault(),k=!0,D(b);return}m.alphaMode=!1,r();return}B(b)<=A&&R()}let v=_(b);if(v>=0){s.preventDefault(),ce(v,b);return}let C=ne(b);C&&(s.preventDefault(),xe(C.faceIndex,C.s,C.t,!1))}function F(s){if(s.touches.length!==1)return;let b=p(s.touches[0]);k?(s.preventDefault(),D(b)):P>=0?(s.preventDefault(),le(b)):K>=0&&(s.preventDefault(),J(b,!1,!1))}function S(s){w(),k=!1,be(),re(),r()}function ae(s){if(m.alphaMode){if(s.key==="Escape"){m.alphaMode=!1,r();return}if(s.key==="ArrowUp"||s.key==="ArrowRight"){s.preventDefault(),f(Math.min(1,u()+(s.shiftKey?.08:.02))),r();return}if(s.key==="ArrowDown"||s.key==="ArrowLeft"){s.preventDefault(),f(Math.max(0,u()-(s.shiftKey?.08:.02))),r();return}}let b=s.shiftKey?.04:.004,v=n(),C=o(),T=Ve(),V=0,H=0;switch(s.key){case"ArrowRight":V=1;break;case"ArrowLeft":V=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}s.preventDefault();let X={...v},Z=["x","y","z"];for(let W=0;W<3;W++){let N=V*T[W].x+H*T[W].y;if(Math.abs(N)>.3){let de=v[Z[W]]+b*Math.sign(N);X[Z[W]]=Math.max(0,Math.min(C[Z[W]],de))}}i(X,c()),r()}e.addEventListener("mousedown",l),window.addEventListener("mousemove",x),window.addEventListener("mouseup",g),e.addEventListener("touchstart",z,{passive:!1}),e.addEventListener("touchmove",F,{passive:!1}),e.addEventListener("touchend",S),e.addEventListener("keydown",ae),e.setAttribute("tabindex","0");function ie(){w(),e.removeEventListener("mousedown",l),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",g),e.removeEventListener("touchstart",z),e.removeEventListener("touchmove",F),e.removeEventListener("touchend",S),e.removeEventListener("keydown",ae)}return{state:m,destroy:ie}}var Ke=`.box-picker {\r
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
`;var ko=Qe,Ye=!1;function Ao(){if(Ye||typeof document>"u")return;Ye=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ke,document.head.appendChild(e)}function Qe(e,o={}){let t=o.size??300,n=o.controls??!0,i=o.showInputs??!1,c=o.showModeToggle??!1,d=o.showCorners??!1,a={mode:()=>r,switchMode:l=>Q(l),onHexInput:l=>{let x=Le(l);x?(u=se(I?{r:255-x.r,g:255-x.g,b:255-x.b}:x,r),f={x:Math.max(f.x,u.x),y:Math.max(f.y,u.y),z:Math.max(f.z,u.z)},J(),O(),G()):O()},onChannelInput:(l,x,g)=>{let z=Math.max(0,Math.min(g,x)),F=["x","y","z"],S=z/g;if(I){let ae={...u,[F[l]]:S},ie=ee(ae,r);u=se({r:255-ie.r,g:255-ie.g,b:255-ie.b},r)}else u={...u,[F[l]]:S};S>f[F[l]]&&(f={...f,[F[l]]:S}),J(),O(),G()},getRgbForCopy:()=>ee(u,r),onRandom:l=>re(l),onReset:()=>re({r:0,g:0,b:0})},r=o.mode??"rgb",h=o.initialColor?se(o.initialColor,r):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},u={...h},y=0,m=()=>o.alpha!==void 0,p=Math.max(0,Math.min(1,o.alpha??1));function k(l){let x=Math.max(0,Math.min(1,l));x!==p&&(p=x,J(),O(),G())}let A=new Set;Ao();let M=document.createElement("div");M.className="box-picker";let L=document.createElement("canvas");L.style.cursor="grab",M.appendChild(L);let R=Oe(L,t),w=null,$=document.createElement("div");$.className="box-picker-controls",w=document.createElement("div"),w.className="box-picker-swatch",$.appendChild(w),M.appendChild($),(i||c||d)&&Promise.resolve().then(()=>(Ze(),je)).then(l=>{l.createControls($,a,{showInputs:i,showModeToggle:c,showCorners:d})}).catch(()=>{}),e.appendChild(M);let B=$e(L,()=>f,l=>{f=l},()=>u,(l,x)=>{u=l,y=x,J(),O()},()=>y,()=>R.scale,()=>R.center,G,m,k,()=>p,()=>E(u,R.scale,R.center)),I=!1,D=!0;L.addEventListener("mouseenter",()=>{D=!0,G()}),L.addEventListener("mouseleave",()=>{D=!1,G()}),L.addEventListener("dblclick",()=>{I=!I,Te(I),J(),O(),G()});function Q(l){if(l===r)return;let x=ee(u,r),g={...u},z={...f};r=l;let F=se(x,r),S={x:1,y:1,z:1};u=F,f=S,ne(g,F,z,S,300),O()}let _=null;function ne(l,x,g,z,F){_!==null&&cancelAnimationFrame(_);let S=performance.now();function ae(ie){let s=ie-S,b=Math.min(1,s/F),v=1-Math.pow(1-b,3);u={x:l.x+(x.x-l.x)*v,y:l.y+(x.y-l.y)*v,z:l.z+(x.z-l.z)*v},f={x:g.x+(z.x-g.x)*v,y:g.y+(z.y-g.y)*v,z:g.z+(z.z-g.z)*v},j(),J(),b<1?_=requestAnimationFrame(ae):_=null}_=requestAnimationFrame(ae)}let P=!1;function G(){P||(P=!0,requestAnimationFrame(()=>{P=!1,j()}))}function j(){_e(R,f,u,y,r,B.state,D,{active:B.state.alphaMode,alpha:p,rgb:U()})}function ce(l,x,g){return Math.round(l+(x-l)*g)}function le(l,x){let g=x>0?255:0,z=Math.abs(x);return he({r:ce(l.r,g,z),g:ce(l.g,g,z),b:ce(l.b,g,z)})}function be(l,x){let g=Le(x)||{r:128,g:128,b:128},z=le(g,.35),F=le(g,0),S=le(g,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${z}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${F}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function K(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function oe(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function U(){let l=ee(u,r);return I?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function O(){if(!n)return;let l=U(),x=he(l);w&&be(w,x);let g=M.querySelector(".box-picker-hex");g&&(g.value=x),xe(),M._updateModeButtons&&M._updateModeButtons()}function xe(){if(!n)return;let l=ge[r],x=I?se(U(),r):u,g=Pe(x,r),z=M.querySelectorAll(".box-picker-channel input"),F=M.querySelectorAll(".box-picker-channel label");for(let S=0;S<z.length;S++)F[S].textContent=l[S],F[S].style.color="",F[S].style.textShadow="none",z[S].value=String(g[S])}function J(){let l=U(),x={rgb:l,hsb:ye(l),oklch:ve(l),hex:he(l),alpha:p};for(let g of A)g(x)}function pe(){let l=ee(u,r);return{rgb:l,hsb:ye(l),oklch:ve(l),hex:he(l)}}O(),j();let re=l=>{u=se(l,r),f={x:Math.max(f.x,u.x),y:Math.max(f.y,u.y),z:Math.max(f.z,u.z)};let x=E(u,R.scale,R.center);y=-1;for(let g=Y.length-1;g>=0;g--)if(ue(g,x,f,R.scale,R.center)){y=g;break}J(),O(),G()};return{getColor:pe,getMode:()=>r,setColor:re,setAlpha:k,getAlpha:()=>p,setMode(l){Q(l)},on(l,x){A.add(x)},off(l,x){A.delete(x)},destroy(){B.destroy(),_!==null&&cancelAnimationFrame(_),e.removeChild(M)}}}return no(wo);})();
