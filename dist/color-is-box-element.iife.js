var ColorIsBoxElement=(()=>{var xe=Object.defineProperty;var Ze=Object.getOwnPropertyDescriptor;var Ye=Object.getOwnPropertyNames;var Qe=Object.prototype.hasOwnProperty;var Je=(e,o)=>()=>(e&&(o=e(e=0)),o);var Re=(e,o)=>{for(var n in o)xe(e,n,{get:o[n],enumerable:!0})},qe=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of Ye(o))!Qe.call(e,r)&&r!==n&&xe(e,r,{get:()=>o[r],enumerable:!(t=Ze(o,r))||t.enumerable});return e};var eo=e=>qe(xe({},"__esModule",{value:!0}),e);var Ke={};Re(Ke,{createControls:()=>po});function Ne(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Ue(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function po(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=f=>{let g=document.createElement("button");return g.textContent=f.toUpperCase(),g.addEventListener("click",()=>o.switchMode(f)),t.appendChild(g),g},l=r("oklch"),c=r("rgb"),s=r("hsb"),a=()=>{let f=o.mode();c.classList.toggle("active",f==="rgb"),s.classList.toggle("active",f==="hsb"),l.classList.toggle("active",f==="oklch")};a();let h=o.switchMode;o._markActive=a,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let g=t.value;/^#?[0-9a-f]{6}$/i.test(g)?o.onHexInput(g):o.onHexInput("")}),t.addEventListener("click",()=>{Ne(o.getRgbForCopy()?"#"+xo(o.getRgbForCopy()):"#ffffff"),Ue(t)});let r=document.createElement("div");r.className="box-picker-channels";let l=[],c=[],s=["R","G","B"];for(let g=0;g<3;g++){let C=document.createElement("div");C.className="box-picker-channel";let m=document.createElement("label");m.textContent=s[g];let v=document.createElement("input");v.type="text",v.inputMode="numeric",C.appendChild(m),C.appendChild(v),r.appendChild(C),l.push(v),c.push(m),v.addEventListener("change",()=>{let L=parseFloat(v.value);isNaN(L)||o.onChannelInput(g,L,255)}),v.addEventListener("click",()=>{let L=o.getRgbForCopy();Ne(`${L.r}, ${L.g}, ${L.b}`),Ue(v)})}let a=document.createElement("div");a.className="box-picker-hexrow";let h=document.createElement("div");h.className="box-picker-hexwrap";let f=document.createElement("label");f.textContent="Hex",h.appendChild(f),h.appendChild(t),a.appendChild(r),a.appendChild(h),e.appendChild(a),e._inputs={hexInput:t,inputs:l,labels:c}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let l=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);o.onRandom({r:l,g:c,b:s})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function xo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Xe=Je(()=>{});var Co={};Re(Co,{ColorIsBoxElement:()=>be,createBoxColorPicker:()=>je,createColorPicker:()=>ke,default:()=>Mo,setBoxInvert:()=>Me});var de={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ve={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Z(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),l=Math.min(o,n,t),c=r-l,s=0;c!==0&&(r===o?s=((n-t)/c+6)%6:r===n?s=(t-o)/c+2:s=(o-n)/c+4,s*=60);let a=r===0?0:c/r*100,h=r*100;return{h:s,s:a,b:h}}function se(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,l=r*(1-Math.abs(o/60%2-1)),c=t-r,s,a,h;return o<60?(s=r,a=l,h=0):o<120?(s=l,a=r,h=0):o<180?(s=0,a=r,h=l):o<240?(s=0,a=l,h=r):o<300?(s=l,a=0,h=r):(s=r,a=0,h=l),{r:Math.round((s+c)*255),g:Math.round((a+c)*255),b:Math.round((h+c)*255)}}function ye(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ve(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function oo(e){let o=ye(e.r/255),n=ye(e.g/255),t=ye(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,l=.2119034982*o+.6806995451*n+.1073969566*t,c=.0883024619*o+.2817188376*n+.6299787005*t,s=Math.cbrt(r),a=Math.cbrt(l),h=Math.cbrt(c);return{L:.2104542553*s+.793617785*a-.0040720468*h,a:1.9779984951*s-2.428592205*a+.4505937099*h,b:.0259040371*s+.7827717662*a-.808675766*h}}function to(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,l=e-.0894841775*o-1.291485548*n,c=t*t*t,s=r*r*r,a=l*l*l,h=4.0767416621*c-3.3077115913*s+.2309699292*a,f=-1.2684380046*c+2.6097574011*s-.3413193965*a,g=-.0041960863*c-.7034186147*s+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,ve(h)))*255),g:Math.round(Math.max(0,Math.min(1,ve(f)))*255),b:Math.round(Math.max(0,Math.min(1,ve(g)))*255)}}function ne(e){let o=oo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function ie(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return to(e.l,n,t)}function no(e,o,n){let t=ie({l:e,c:o,h:n});if(Ee(t))return{l:e,c:o,h:n};let r=0,l=o;for(let c=0;c<20;c++){let s=(r+l)/2;t=ie({l:e,c:s,h:n}),Ee(t)?r=s:l=s}return{l:e,c:r,h:n}}function Ee(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function Y(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function re(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var He=.4;function K(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return se({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*He,r=e.z*359,l=no(n,t,r);return ie(l)}}function q(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Z(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ne(e);return{x:n.l,y:Math.min(n.c/He,1),z:n.h/359}}}function Se(e,o){let n=Ve[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ze(e,o,n,t,r,l=!1){let c;e===0?c={x:t,y:o,z:n}:e===1?c={x:o,y:t,z:n}:c={x:o,y:n,z:t};let s=K(c,r);return l?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var Ie=Math.PI/6,ro=Math.cos(Ie),ao=Math.sin(Ie),le=!1;function Me(e){le=e}function H(e,o,n){return{x:n.x+(e.y-e.x)*ro*o,y:n.y+e.z*o-(e.x+e.y)*ao*o}}function io(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var G=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],so=64,Fe={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function De(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Pe(e,o,n,t,r,l,c=!0,s=null){let{ctx:a,scale:h,center:f,width:g,height:C}=e;a.save(),a.clearRect(0,0,g,C);let m=io(o).map(v=>H(v,h,f));if(co(a,h,f,r),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,uo(a,m,o,r),a.restore(),c&&bo(a,r,h,f),t>=0){let v=K(n,r),L=le?{r:255-v.r,g:255-v.g,b:255-v.b}:v,T=H(n,h,f);s&&s.active&&fo(a,T,s.rgb,s.alpha),go(a,T,L)}a.restore()}var lo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function co(e,o,n,t){let r=H({x:0,y:0,z:0},o,n),l=[H({x:1,y:0,z:0},o,n),H({x:0,y:1,z:0},o,n),H({x:0,y:0,z:1},o,n)],c=lo[t];e.lineWidth=1.5;for(let s=0;s<l.length;s++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(l[s].x,l[s].y),e.strokeStyle=c[s],e.stroke()}function uo(e,o,n,t){let r=[n.x,n.y,n.z];for(let l=0;l<G.length;l++){let c=G[l],s=r[c.fixedAxis],a=r[c.uAxis],h=r[c.vAxis];if(a<.002&&h<.002)continue;let f=c.quad.map(g=>o[g]);ho(e,f,c.fixedAxis,s,a,h,t)}}function ho(e,o,n,t,r,l,c){let s=so,a=document.createElement("canvas");a.width=s,a.height=s;let h=a.getContext("2d"),f=h.createImageData(s,s),g=f.data;for(let D=0;D<s;D++)for(let F=0;F<s;F++){let ee=F/(s-1)*r,X=D/(s-1)*l,B=ze(n,ee,X,t,c,le),_=(D*s+F)*4;g[_]=B.r,g[_+1]=B.g,g[_+2]=B.b,g[_+3]=255}h.putImageData(f,0,0);let C=o[0],m=o[1],v=o[2],L=o[3],T=m.x-C.x,x=m.y-C.y,V=L.x-C.x,S=L.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(m.x,m.y),e.lineTo(v.x,v.y),e.lineTo(L.x,L.y),e.closePath(),e.clip();let E=2/s,P=C.x-T*E-V*E,$=C.y-x*E-S*E,w=1+2*E,I=1+2*E;e.transform(T*w/s,x*w/s,V*I/s,S*I/s,P,$),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function bo(e,o,n,t){let r=de[o],l=le?[H({x:0,y:1,z:1},n,t),H({x:1,y:0,z:1},n,t),H({x:1,y:1,z:0},n,t)]:[H({x:1,y:0,z:0},n,t),H({x:0,y:1,z:0},n,t),H({x:0,y:0,z:1},n,t)],c=le?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let s=0;s<3;s++){let a=l[s].x+c[s].x,h=l[s].y+c[s].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[s],a,h)}e.globalAlpha=1,e.restore()}var N=30,Q=13;function fo(e,o,n,t){let r=(N+Q)/2,l=5,c=Math.floor(o.x/l)*l,s=Math.floor(o.y/l)*l,a=N*2+l*2,h=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,N,0,Math.PI*2),e.arc(o.x,o.y,Q,0,Math.PI*2,!0),e.clip();for(let T=-1;T*l<=a;T++)for(let x=-1;x*l<=a;x++)e.fillStyle=(T+x)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+T*l,s+x*l,l,l);let f="rgba("+n.r+","+n.g+","+n.b+",0)",g="rgba("+n.r+","+n.g+","+n.b+",1)",C=e;if(typeof C.createConicGradient=="function"){let T=C.createConicGradient(-Math.PI/2,o.x,o.y);T.addColorStop(0,f),T.addColorStop(1,g),e.fillStyle=T,e.fillRect(c-N,s-N,a,a)}else for(let x=0;x<36;x++){let V=-Math.PI/2+x/36*Math.PI*2,S=-Math.PI/2+(x+1)/36*Math.PI*2,E=(x+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(V)*Q,o.y+Math.sin(V)*Q),e.arc(o.x,o.y,N,V,S),e.arc(o.x,o.y,Q,S,V,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+E.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,N,0,Math.PI*2),e.arc(o.x,o.y,Q,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-N-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let m=h*Math.PI*2,v=o.x+r*Math.sin(m),L=o.y-r*Math.cos(m);e.beginPath(),e.arc(v,L,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function go(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Be(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return H(r[e],n,t)}function Ce(){let e={x:0,y:0};return[H({x:1,y:0,z:0},1,e),H({x:0,y:1,z:0},1,e),H({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function ae(e,o,n,t,r){let l=G[e],c=[n.x,n.y,n.z],s=c[l.uAxis],a=c[l.vAxis];if(s<.002||a<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[l.fixedAxis]]=c[l.fixedAxis];let g={...h};g[f[l.uAxis]]=s;let C={...h};C[f[l.vAxis]]=a;let m=H(h,t,r),v=H(g,t,r),L=H(C,t,r),T=v.x-m.x,x=v.y-m.y,V=L.x-m.x,S=L.y-m.y,E=T*S-x*V;if(Math.abs(E)<1e-6)return null;let P=o.x-m.x,$=o.y-m.y,w=(P*S-$*V)/E,I=($*T-P*x)/E;return w<-.05||w>1.05||I<-.05||I>1.05?null:{s:Math.max(0,Math.min(1,w)),t:Math.max(0,Math.min(1,I))}}function $e(e,o,n,t,r){let l=G[e],c=[n.x,n.y,n.z],s=c[l.uAxis],a=c[l.vAxis];if(s<.002||a<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[l.fixedAxis]]=c[l.fixedAxis];let g={...h};g[f[l.uAxis]]=s;let C={...h};C[f[l.vAxis]]=a;let m=H(h,t,r),v=H(g,t,r),L=H(C,t,r),T=v.x-m.x,x=v.y-m.y,V=L.x-m.x,S=L.y-m.y,E=T*S-x*V;if(Math.abs(E)<1e-6)return null;let P=o.x-m.x,$=o.y-m.y,w=(P*S-$*V)/E,I=($*T-P*x)/E;return{s:Math.max(0,Math.min(1,w)),t:Math.max(0,Math.min(1,I))}}var Oe=22;function _e(e,o,n,t,r,l,c,s,a,h,f,g,C){let m={...Fe};function v(d){let p=!1,A=9;function i(y){let R=C();return Math.hypot(y.x-R.x,y.y-R.y)}function u(y){let R=C();return(Math.atan2(y.x-R.x,-(y.y-R.y))+Math.PI*2)%(Math.PI*2)}function b(y){f(u(y)/(Math.PI*2)),a()}function M(y){let R=i(y);return R>=Q-4&&R<=N+6}let k=e.getBoundingClientRect();return{x:d.clientX-k.left,y:d.clientY-k.top}}function L(d){let p=o(),A=c(),i=s();for(let u=0;u<3;u++){let b=Be(u,p,A,i),M=d.x-b.x,k=d.y-b.y;if(M*M+k*k<=Oe*Oe)return u}return-1}function T(d){let p=o(),A=c(),i=s();for(let u=G.length-1;u>=0;u--){let b=ae(u,d,p,A,i);if(b)return{faceIndex:u,...b}}return null}let x=-1,V={x:0,y:0},S=0;function E(d,p){x=d,V=p,S=o()[["x","y","z"][d]],m.draggingAxisHandle=d,e.style.cursor="grabbing",a()}function P(d){if(x<0)return;let p=d.x-V.x,A=d.y-V.y,u=Ce()[x],b=c(),k=(p*u.x+A*u.y)/b,y=Math.max(0,Math.min(1,S+k)),R=o(),z=["x","y","z"],W={...R,[z[x]]:y};n(W);let j=t(),U=l(),Le=U>=0?G[U]:null,pe={...j};Le&&x===Le.fixedAxis?pe[z[x]]=y:pe[z[x]]=Math.min(j[z[x]],y),r(pe,l()),a()}function $(){x=-1,m.draggingAxisHandle=-1}let w=-1,I=null,D=null,F=!1;function ee(d,p,A,i){w=d,m.draggingFace=d,I=null,D=null,F=!1,i&&(F=!0,D={s:p,t:A}),B(d,p,A),e.style.cursor="crosshair",a()}function X(d,p,A){if(w<0)return;let i=o(),u=c(),b=s(),M=ae(w,d,i,u,b),k=w;if(!M&&!A){for(let z=G.length-1;z>=0;z--)if(z!==w&&(M=ae(z,d,i,u,b),M)){k=z;break}}if(!M&&A&&(M=$e(w,d,i,u,b),k=w),!M){a();return}k!==w&&(w=k,m.draggingFace=k,I=null,F=!1,D=null);let{s:y,t:R}=M;if(p&&D){if(F){let z=Math.abs(y-D.s),W=Math.abs(R-D.t),j=.02;(z>j||W>j)&&(I=z>=W?"u":"v",F=!1)}I==="u"?R=D.t:I==="v"&&(y=D.s)}else p||(I=null,F=!1,D=null);B(k,y,R),a()}function B(d,p,A){let i=G[d],u=o(),b=["x","y","z"],M={...t()};M[b[i.uAxis]]=p*u[b[i.uAxis]],M[b[i.vAxis]]=A*u[b[i.vAxis]],M[b[i.fixedAxis]]=u[b[i.fixedAxis]],r(M,d)}function _(){w=-1,m.draggingFace=-1,I=null,F=!1,D=null}function oe(d){let p=v(d);if(h()){if(m.alphaMode){if(distToDot(p)<=DOT_HIT_R){m.alphaMode=!1,a();return}if(inAlphaRing(p)){d.preventDefault(),alphaDragging=!0,applyAlphaFromPoint(p);return}m.alphaMode=!1,a();return}if(distToDot(p)<=DOT_HIT_R){d.preventDefault(),m.alphaMode=!0,a();return}}let A=L(p);if(A>=0){d.preventDefault(),E(A,p);return}let i=T(p);i&&(d.preventDefault(),ee(i.faceIndex,i.s,i.t,d.shiftKey))}function te(d){let p=v(d);if(alphaDragging){d.preventDefault(),applyAlphaFromPoint(p);return}if(x>=0){d.preventDefault(),P(p);return}if(w>=0){d.preventDefault(),X(p,d.shiftKey,d.altKey);return}let A=L(p),i=T(p),u=A,b=A>=0?-1:i?i.faceIndex:-1;(u!==m.hoveredAxisHandle||b!==m.hoveredFace)&&(m.hoveredAxisHandle=u,m.hoveredFace=b,e.style.cursor=u>=0?"grab":b>=0?"crosshair":"default",a())}function ce(d){alphaDragging=!1;let p=x>=0||w>=0;$(),_(),p&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",a())}function fe(d){if(d.touches.length!==1)return;let p=v(d.touches[0]);if(h()){if(m.alphaMode){if(distToDot(p)<=DOT_HIT_R){m.alphaMode=!1,a();return}if(inAlphaRing(p)){d.preventDefault(),alphaDragging=!0,applyAlphaFromPoint(p);return}m.alphaMode=!1,a();return}if(distToDot(p)<=DOT_HIT_R){d.preventDefault(),m.alphaMode=!0,a();return}}let A=L(p);if(A>=0){d.preventDefault(),E(A,p);return}let i=T(p);i&&(d.preventDefault(),ee(i.faceIndex,i.s,i.t,!1))}function ge(d){if(d.touches.length!==1)return;let p=v(d.touches[0]);alphaDragging?(d.preventDefault(),applyAlphaFromPoint(p)):x>=0?(d.preventDefault(),P(p)):w>=0&&(d.preventDefault(),X(p,!1,!1))}function J(d){alphaDragging=!1,$(),_(),a()}function O(d){if(m.alphaMode){if(d.key==="Escape"){m.alphaMode=!1,a();return}if(d.key==="ArrowUp"||d.key==="ArrowRight"){d.preventDefault(),f(Math.min(1,g()+(d.shiftKey?.08:.02))),a();return}if(d.key==="ArrowDown"||d.key==="ArrowLeft"){d.preventDefault(),f(Math.max(0,g()-(d.shiftKey?.08:.02))),a();return}}let p=d.shiftKey?.04:.004,A=t(),i=o(),u=Ce(),b=0,M=0;switch(d.key){case"ArrowRight":b=1;break;case"ArrowLeft":b=-1;break;case"ArrowUp":M=-1;break;case"ArrowDown":M=1;break;default:return}d.preventDefault();let k={...A},y=["x","y","z"];for(let R=0;R<3;R++){let z=b*u[R].x+M*u[R].y;if(Math.abs(z)>.3){let W=A[y[R]]+p*Math.sign(z);k[y[R]]=Math.max(0,Math.min(i[y[R]],W))}}r(k,l()),a()}e.addEventListener("mousedown",oe),window.addEventListener("mousemove",te),window.addEventListener("mouseup",ce),e.addEventListener("touchstart",fe,{passive:!1}),e.addEventListener("touchmove",ge,{passive:!1}),e.addEventListener("touchend",J),e.addEventListener("keydown",O),e.setAttribute("tabindex","0");function me(){e.removeEventListener("mousedown",oe),window.removeEventListener("mousemove",te),window.removeEventListener("mouseup",ce),e.removeEventListener("touchstart",fe),e.removeEventListener("touchmove",ge),e.removeEventListener("touchend",J),e.removeEventListener("keydown",O)}return{state:m,destroy:me}}var Ge=`.box-picker {\r
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
`;var ke=je,We=!1;function yo(){if(We||typeof document>"u")return;We=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ge,document.head.appendChild(e)}function je(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,l=o.showModeToggle??!1,c=o.showCorners??!1,s={mode:()=>a,switchMode:i=>D(i),onHexInput:i=>{let u=re(i);u?(g=q(w?{r:255-u.r,g:255-u.g,b:255-u.b}:u,a),f={x:Math.max(f.x,g.x),y:Math.max(f.y,g.y),z:Math.max(f.z,g.z)},d(),O(),B()):O()},onChannelInput:(i,u,b)=>{let M=Math.max(0,Math.min(b,u)),k=["x","y","z"],y=M/b;if(w){let R={...g,[k[i]]:y},z=K(R,a);g=q({r:255-z.r,g:255-z.g,b:255-z.b},a)}else g={...g,[k[i]]:y};y>f[k[i]]&&(f={...f,[k[i]]:y}),d(),O(),B()},getRgbForCopy:()=>K(g,a),onRandom:i=>A(i),onReset:()=>A({r:0,g:0,b:0})},a=o.mode??"rgb",h=o.initialColor?q(o.initialColor,a):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},g={...h},C=0,m=()=>o.alpha!==void 0,v=Math.max(0,Math.min(1,o.alpha??1));function L(i){let u=Math.max(0,Math.min(1,i));u!==v&&(v=u,d(),O(),B())}let T=new Set;yo();let x=document.createElement("div");x.className="box-picker";let V=document.createElement("canvas");V.style.cursor="grab",x.appendChild(V);let S=De(V,n),E=null,P=document.createElement("div");P.className="box-picker-controls",E=document.createElement("div"),E.className="box-picker-swatch",P.appendChild(E),x.appendChild(P),(r||l||c)&&Promise.resolve().then(()=>(Xe(),Ke)).then(i=>{i.createControls(P,s,{showInputs:r,showModeToggle:l,showCorners:c})}).catch(()=>{}),e.appendChild(x);let $=_e(V,()=>f,i=>{f=i},()=>g,(i,u)=>{g=i,C=u,d(),O()},()=>C,()=>S.scale,()=>S.center,B,m,L,()=>v,()=>H(g,S.scale,S.center)),w=!1,I=!0;V.addEventListener("mouseenter",()=>{I=!0,B()}),V.addEventListener("mouseleave",()=>{I=!1,B()}),V.addEventListener("dblclick",()=>{w=!w,Me(w),d(),O(),B()});function D(i){if(i===a)return;let u=K(g,a),b={...g},M={...f};a=i;let k=q(u,a),y={x:1,y:1,z:1};g=k,f=y,ee(b,k,M,y,300),O()}let F=null;function ee(i,u,b,M,k){F!==null&&cancelAnimationFrame(F);let y=performance.now();function R(z){let W=z-y,j=Math.min(1,W/k),U=1-Math.pow(1-j,3);g={x:i.x+(u.x-i.x)*U,y:i.y+(u.y-i.y)*U,z:i.z+(u.z-i.z)*U},f={x:b.x+(M.x-b.x)*U,y:b.y+(M.y-b.y)*U,z:b.z+(M.z-b.z)*U},_(),d(),j<1?F=requestAnimationFrame(R):F=null}F=requestAnimationFrame(R)}let X=!1;function B(){X||(X=!0,requestAnimationFrame(()=>{X=!1,_()}))}function _(){Pe(S,f,g,C,a,$.state,I,{active:$.state.alphaMode,alpha:v,rgb:J()})}function oe(i,u,b){return Math.round(i+(u-i)*b)}function te(i,u){let b=u>0?255:0,M=Math.abs(u);return Y({r:oe(i.r,b,M),g:oe(i.g,b,M),b:oe(i.b,b,M)})}function ce(i,u){let b=re(u)||{r:128,g:128,b:128},M=te(b,.35),k=te(b,0),y=te(b,-.35);i.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${M}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${k}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${y}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,i.style.backgroundColor="transparent"}function fe(i){try{navigator.clipboard.writeText(i).catch(()=>{})}catch{}}function ge(i){i&&(i.style.borderColor="#4ade80",i.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{i.style.borderColor="",i.style.boxShadow=""},500))}function J(){let i=K(g,a);return w?{r:255-i.r,g:255-i.g,b:255-i.b}:i}function O(){if(!t)return;let i=J(),u=Y(i);E&&ce(E,u);let b=x.querySelector(".box-picker-hex");b&&(b.value=u),me(),x._updateModeButtons&&x._updateModeButtons()}function me(){if(!t)return;let i=de[a],u=w?q(J(),a):g,b=Se(u,a),M=x.querySelectorAll(".box-picker-channel input"),k=x.querySelectorAll(".box-picker-channel label");for(let y=0;y<M.length;y++)k[y].textContent=i[y],k[y].style.color="",k[y].style.textShadow="none",M[y].value=String(b[y])}function d(){let i=J(),u={rgb:i,hsb:Z(i),oklch:ne(i),hex:Y(i),alpha:v};for(let b of T)b(u)}function p(){let i=K(g,a);return{rgb:i,hsb:Z(i),oklch:ne(i),hex:Y(i)}}O(),_();let A=i=>{g=q(i,a),f={x:Math.max(f.x,g.x),y:Math.max(f.y,g.y),z:Math.max(f.z,g.z)};let u=H(g,S.scale,S.center);C=-1;for(let b=G.length-1;b>=0;b--)if(ae(b,u,f,S.scale,S.center)){C=b;break}d(),O(),B()};return{getColor:p,getMode:()=>a,setColor:A,setAlpha:L,getAlpha:()=>v,setMode(i){D(i)},on(i,u){T.add(u)},off(i,u){T.delete(u)},destroy(){$.destroy(),F!==null&&cancelAnimationFrame(F),e.removeChild(x)}}}function Te(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:re(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=re(t[1]),l=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:l}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ae(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ae(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?se({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:se({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:ie({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ae(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:se({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function ue(e,o,n=1){if(o==="hex")return Y(e);if(o==="hex-alpha")return Y(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=we(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=we(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=Z(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=Z(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=we(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=Z(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=ne(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ae(e,o,n){let t=o/100,r=n/100,l=(1-Math.abs(2*r-1))*t,c=l*(1-Math.abs(e/60%2-1)),s=r-l/2,a=0,h=0,f=0;return e<60?(a=l,h=c):e<120?(a=c,h=l):e<180?(h=l,f=c):e<240?(h=c,f=l):e<300?(a=c,f=l):(a=l,f=c),{r:Math.round((a+s)*255),g:Math.round((h+s)*255),b:Math.round((f+s)*255)}}function we(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),l=Math.min(o,n,t),c=(r+l)/2;if(r===l)return{h:0,s:0,l:c*100};let s=r-l,a=c>.5?s/(2-r-l):s/(r+l),h=0;return r===o?h=((n-t)/s+(n<t?6:0))*60:r===n?h=((t-o)/s+2)*60:h=((o-n)/s+4)*60,{h,s:a*100,l:c*100}}var he=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?Te(t,this.model):null;this.alpha=r?.alpha??1;let l=r?.rgb??{r:255,g:255,b:255},c=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=ke(this.holder,{initialColor:l,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...c.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",s=>{this.internal||(this.internal=!0,this.alpha=s.alpha,this.setAttribute("value",ue(s.rgb,this.model,s.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:s})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ue(s.rgb,this.model,s.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=Te(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||ue({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},be=class extends he{constructor(){super("hex")}},vo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of vo)customElements.get(e)||customElements.define(e,class extends he{constructor(){super(o)}});var Mo=be;return eo(Co);})();
