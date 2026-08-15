var ColorIsBox=(()=>{var Ve=Object.defineProperty;var mo=Object.getOwnPropertyDescriptor;var po=Object.getOwnPropertyNames;var xo=Object.prototype.hasOwnProperty;var go=(e,o)=>()=>(e&&(o=e(e=0)),o);var Xe=(e,o)=>{for(var t in o)Ve(e,t,{get:o[t],enumerable:!0})},yo=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of po(o))!xo.call(e,a)&&a!==t&&Ve(e,a,{get:()=>o[a],enumerable:!(n=mo(o,a))||n.enumerable});return e};var vo=e=>yo(Ve({},"__esModule",{value:!0}),e);var co={};Xe(co,{createControls:()=>Do});function so(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function lo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Do(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let a=m=>{let f=document.createElement("button");return f.textContent=m.toUpperCase(),f.addEventListener("click",()=>o.switchMode(m)),n.appendChild(f),f},s=a("oklch"),b=a("rgb"),i=a("hsb"),r=()=>{let m=o.mode();b.classList.toggle("active",m==="rgb"),i.classList.toggle("active",m==="hsb"),s.classList.toggle("active",m==="oklch")};r();let u=o.switchMode;o._markActive=r,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let f=n.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),n.addEventListener("click",()=>{so(o.getRgbForCopy()?"#"+Fo(o.getRgbForCopy()):"#ffffff"),lo(n)});let a=document.createElement("div");a.className="box-picker-channels";let s=[],b=[],i=["R","G","B"];for(let f=0;f<3;f++){let v=document.createElement("div");v.className="box-picker-channel";let C=document.createElement("label");C.textContent=i[f];let w=document.createElement("input");w.type="text",w.inputMode="numeric",v.appendChild(C),v.appendChild(w),a.appendChild(v),s.push(w),b.push(C),w.addEventListener("change",()=>{let h=parseFloat(w.value);isNaN(h)||o.onChannelInput(f,h,255)}),w.addEventListener("click",()=>{let h=o.getRgbForCopy();so(`${h.r}, ${h.g}, ${h.b}`),lo(w)})}let r=document.createElement("div");r.className="box-picker-hexrow";let u=document.createElement("div");u.className="box-picker-hexwrap";let m=document.createElement("label");m.textContent="Hex",u.appendChild(m),u.appendChild(n),r.appendChild(a),r.appendChild(u),e.appendChild(r),e._inputs={hexInput:n,inputs:s,labels:b}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),b=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);o.onRandom({r:s,g:b,b:i})}),e.appendChild(n);let a=document.createElement("button");a.className="box-corner-btn box-corner-right",a.title="Reset",a.setAttribute("aria-label","Reset"),a.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',a.addEventListener("click",()=>o.onReset()),e.appendChild(a)}}function Fo(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var uo=go(()=>{});var Oo={};Xe(Oo,{createBoxColorPicker:()=>fo,createColorPicker:()=>Bo,setBoxInvert:()=>He});var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},We={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ae(e){let o=e.r/255,t=e.g/255,n=e.b/255,a=Math.max(o,t,n),s=Math.min(o,t,n),b=a-s,i=0;b!==0&&(a===o?i=((t-n)/b+6)%6:a===t?i=(n-o)/b+2:i=(o-t)/b+4,i*=60);let r=a===0?0:b/a*100,u=a*100;return{h:i,s:r,b:u}}function we(e){let o=e.h,t=e.s/100,n=e.b/100,a=n*t,s=a*(1-Math.abs(o/60%2-1)),b=n-a,i,r,u;return o<60?(i=a,r=s,u=0):o<120?(i=s,r=a,u=0):o<180?(i=0,r=a,u=s):o<240?(i=0,r=s,u=a):o<300?(i=s,r=0,u=a):(i=a,r=0,u=s),{r:Math.round((i+b)*255),g:Math.round((r+b)*255),b:Math.round((u+b)*255)}}function Se(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ee(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Mo(e){let o=Se(e.r/255),t=Se(e.g/255),n=Se(e.b/255),a=.4122214708*o+.5363325363*t+.0514459929*n,s=.2119034982*o+.6806995451*t+.1073969566*n,b=.0883024619*o+.2817188376*t+.6299787005*n,i=Math.cbrt(a),r=Math.cbrt(s),u=Math.cbrt(b);return{L:.2104542553*i+.793617785*r-.0040720468*u,a:1.9779984951*i-2.428592205*r+.4505937099*u,b:.0259040371*i+.7827717662*r-.808675766*u}}function Co(e,o,t){let n=e+.3963377774*o+.2158037573*t,a=e-.1055613458*o-.0638541728*t,s=e-.0894841775*o-1.291485548*t,b=n*n*n,i=a*a*a,r=s*s*s,u=4.0767416621*b-3.3077115913*i+.2309699292*r,m=-1.2684380046*b+2.6097574011*i-.3413193965*r,f=-.0041960863*b-.7034186147*i+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Ee(u)))*255),g:Math.round(Math.max(0,Math.min(1,Ee(m)))*255),b:Math.round(Math.max(0,Math.min(1,Ee(f)))*255)}}function Re(e){let o=Mo(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function Ie(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return Co(e.l,t,n)}function ko(e,o,t){let n=Ie({l:e,c:o,h:t});if(je(n))return{l:e,c:o,h:t};let a=0,s=o;for(let b=0;b<20;b++){let i=(a+s)/2;n=Ie({l:e,c:i,h:t}),je(n)?a=i:s=i}return{l:e,c:a,h:t}}function je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ge(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ze(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ze=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return we({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*Ze,a=e.z*359,s=ko(t,n,a);return Ie(s)}}function ue(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ae(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Re(e);return{x:t.l,y:Math.min(t.c/Ze,1),z:t.h/359}}}function Ye(e,o){let t=We[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Qe(e,o,t,n,a,s=!1){let b;e===0?b={x:n,y:o,z:t}:e===1?b={x:o,y:n,z:t}:b={x:o,y:t,z:n};let i=ne(b,a);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var Je=Math.PI/6,Ao=Math.cos(Je),wo=Math.sin(Je),Me=!1;function He(e){Me=e}var ye=0,ve=0;function Pe(e,o){ye=e,ve=o}function De(){return{yaw:ye,pitch:ve}}function z(e,o,t){let n=e;if(ye!==0||ve!==0){let a={x:e.x-.5,y:e.y-.5,z:e.z-.5},s=Math.cos(ye),b=Math.sin(ye),i=Math.cos(ve),r=Math.sin(ve),u=a.x*s+a.z*b,m=a.y,f=-a.x*b+a.z*s,v=m*i-f*r,C=m*r+f*i;n={x:u+.5,y:v+.5,z:C+.5}}return{x:t.x+(n.y-n.x)*Ao*o,y:t.y+n.z*o-(n.x+n.y)*wo*o}}function Ro(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var Q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],To=64,qe={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function eo(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function oo(e,o,t,n,a,s,b=!0,i=null,r=null){let{ctx:u,scale:m,center:f,width:v,height:C}=e;u.save(),u.clearRect(0,0,v,C);let w=Ro(o).map(A=>z(A,m,f)),h=s.viewRotating?.32:1;if(u.save(),u.globalAlpha=h,Vo(u,m,f,a),u.restore(),u.save(),u.shadowColor="rgba(0,0,0,0.35)",u.shadowBlur=8,u.shadowOffsetX=0,u.shadowOffsetY=2,u.globalAlpha=s.viewRotating?.22:1,So(u,w,o,a),u.restore(),b&&(u.save(),u.globalAlpha=s.viewRotating?.5:1,Io(u,a,m,f),u.restore()),n>=0){let A=ne(t,a),k=Me?{r:255-A.r,g:255-A.g,b:255-A.b}:A,R=z(t,m,f);i&&i.active&&zo(u,R,i.rgb,i.alpha),Ho(u,R,k)}u.restore()}var Lo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Vo(e,o,t,n){let a=z({x:0,y:0,z:0},o,t),s=[z({x:1,y:0,z:0},o,t),z({x:0,y:1,z:0},o,t),z({x:0,y:0,z:1},o,t)],b=Lo[n];e.lineWidth=1.5;for(let i=0;i<s.length;i++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s[i].x,s[i].y),e.strokeStyle=b[i],e.stroke()}function So(e,o,t,n){let a=[t.x,t.y,t.z];for(let s=0;s<Q.length;s++){let b=Q[s],i=a[b.fixedAxis],r=a[b.uAxis],u=a[b.vAxis];if(r<.002&&u<.002)continue;let m=b.quad.map(f=>o[f]);Eo(e,m,b.fixedAxis,i,r,u,n)}}function Eo(e,o,t,n,a,s,b){let i=To,r=document.createElement("canvas");r.width=i,r.height=i;let u=r.getContext("2d"),m=u.createImageData(i,i),f=m.data;for(let Z=0;Z<i;Z++)for(let ee=0;ee<i;ee++){let N=ee/(i-1)*a,he=Z/(i-1)*s,K=Qe(t,N,he,n,b,Me),B=(Z*i+ee)*4;f[B]=K.r,f[B+1]=K.g,f[B+2]=K.b,f[B+3]=255}u.putImageData(m,0,0);let v=o[0],C=o[1],w=o[2],h=o[3],A=C.x-v.x,k=C.y-v.y,R=h.x-v.x,P=h.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(C.x,C.y),e.lineTo(w.x,w.y),e.lineTo(h.x,h.y),e.closePath(),e.clip();let g=2/i,L=v.x-A*g-R*g,G=v.y-k*g-P*g,D=1+2*g,F=1+2*g;e.transform(A*D/i,k*D/i,R*F/i,P*F/i,L,G),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function Io(e,o,t,n){let a=Ae[o],s=Me?[z({x:0,y:1,z:1},t,n),z({x:1,y:0,z:1},t,n),z({x:1,y:1,z:0},t,n)]:[z({x:1,y:0,z:0},t,n),z({x:0,y:1,z:0},t,n),z({x:0,y:0,z:1},t,n)],b=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let r=s[i].x+b[i].x,u=s[i].y+b[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(a[i],r,u)}e.globalAlpha=1,e.restore()}var q=30,ie=13;function zo(e,o,t,n){let a=(q+ie)/2,s=5,b=Math.floor(o.x/s)*s,i=Math.floor(o.y/s)*s,r=q*2+s*2,u=Math.max(0,Math.min(1,n));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let A=-1;A*s<=r;A++)for(let k=-1;k*s<=r;k++)e.fillStyle=(A+k)%2===0?"#ffffff":"#d9d9d9",e.fillRect(b+A*s,i+k*s,s,s);let m="rgba("+t.r+","+t.g+","+t.b+",0)",f="rgba("+t.r+","+t.g+","+t.b+",1)",v=e;if(typeof v.createConicGradient=="function"){let A=v.createConicGradient(-Math.PI/2,o.x,o.y);A.addColorStop(0,m),A.addColorStop(1,f),e.fillStyle=A,e.fillRect(b-q,i-q,r,r)}else for(let k=0;k<36;k++){let R=-Math.PI/2+k/36*Math.PI*2,P=-Math.PI/2+(k+1)/36*Math.PI*2,g=(k+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(R)*ie,o.y+Math.sin(R)*ie),e.arc(o.x,o.y,q,R,P),e.arc(o.x,o.y,ie,P,R,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+g.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let C=u*Math.PI*2,w=o.x+a*Math.sin(C),h=o.y-a*Math.cos(C);e.beginPath(),e.arc(w,h,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Ho(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function to(e,o,t,n){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return z(a[e],t,n)}function Fe(){let e={x:0,y:0};return[z({x:1,y:0,z:0},1,e),z({x:0,y:1,z:0},1,e),z({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function fe(e,o,t,n,a){let s=Q[e],b=[t.x,t.y,t.z],i=b[s.uAxis],r=b[s.vAxis];if(i<.002||r<.002)return null;let u={x:0,y:0,z:0},m=["x","y","z"];u[m[s.fixedAxis]]=b[s.fixedAxis];let f={...u};f[m[s.uAxis]]=i;let v={...u};v[m[s.vAxis]]=r;let C=z(u,n,a),w=z(f,n,a),h=z(v,n,a),A=w.x-C.x,k=w.y-C.y,R=h.x-C.x,P=h.y-C.y,g=A*P-k*R;if(Math.abs(g)<1e-6)return null;let L=o.x-C.x,G=o.y-C.y,D=(L*P-G*R)/g,F=(G*A-L*k)/g;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function no(e,o,t,n,a){let s=Q[e],b=[t.x,t.y,t.z],i=b[s.uAxis],r=b[s.vAxis];if(i<.002||r<.002)return null;let u={x:0,y:0,z:0},m=["x","y","z"];u[m[s.fixedAxis]]=b[s.fixedAxis];let f={...u};f[m[s.uAxis]]=i;let v={...u};v[m[s.vAxis]]=r;let C=z(u,n,a),w=z(f,n,a),h=z(v,n,a),A=w.x-C.x,k=w.y-C.y,R=h.x-C.x,P=h.y-C.y,g=A*P-k*R;if(Math.abs(g)<1e-6)return null;let L=o.x-C.x,G=o.y-C.y,D=(L*P-G*R)/g,F=(G*A-L*k)/g;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var ro=22;function ao(e,o,t,n,a,s,b,i,r,u,m,f,v,C,w){let h={...qe};function A(l){let d=e.getBoundingClientRect();return{x:l.clientX-d.left,y:l.clientY-d.top}}let k=!1,R=!1,P=!1,g=!1,L=null,G=600,D=null;function F(){Z(),D=setTimeout(ee,G)}function Z(){D!==null&&(clearTimeout(D),D=null)}function ee(){D=null,h.alphaMode=!1,de(),x(),g=!0,h.viewRotating=!0,h.ringAlpha=Math.min(1,h.ringAlpha+.3),L=null,r()}let N=9,he=1e3,K=null;function B(){J(),K=setTimeout(me,he)}function J(){K!==null&&(clearTimeout(K),K=null),Z()}function me(){K=null,h.alphaMode=!0,x(),de(),r()}function oe(l){let d=v();return Math.hypot(l.x-d.x,l.y-d.y)}function Te(l){let d=v();return(Math.atan2(l.x-d.x,-(l.y-d.y))+Math.PI*2)%(Math.PI*2)}function se(l){m(Te(l)/(Math.PI*2)),r()}function pe(l){let d=oe(l);return d>=ie-4&&d<=q+6}function j(l){let d=o(),T=b(),M=i();for(let y=0;y<3;y++){let I=to(y,d,T,M),H=l.x-I.x,_=l.y-I.y;if(H*H+_*_<=ro*ro)return y}return-1}function X(l){let d=o(),T=b(),M=i();for(let y=Q.length-1;y>=0;y--){let I=fe(y,l,d,T,M);if(I)return{faceIndex:y,...I}}return null}let U=-1,Y={x:0,y:0},Ce=0;function le(l,d){U=l,Y=d,Ce=o()[["x","y","z"][l]],h.draggingAxisHandle=l,e.style.cursor="grabbing",r()}function c(l){if(J(),U<0)return;let d=l.x-Y.x,T=l.y-Y.y,y=Fe()[U],I=b(),_=(d*y.x+T*y.y)/I,$=Math.max(0,Math.min(1,Ce+_)),W=o(),O=["x","y","z"],be={...W,[O[U]]:$};t(be);let xe=n(),$e=s(),Ke=$e>=0?Q[$e]:null,Le={...xe};Ke&&U===Ke.fixedAxis?Le[O[U]]=$:Le[O[U]]=Math.min(xe[O[U]],$),a(Le,s()),r()}function x(){U=-1,h.draggingAxisHandle=-1}let p=-1,V=null,E=null,S=!1;function ce(l,d,T,M){p=l,h.draggingFace=l,V=null,E=null,S=!1,M&&(S=!0,E={s:d,t:T}),ke(l,d,T),e.style.cursor="crosshair",r()}function re(l,d,T){if(J(),p<0)return;let M=o(),y=b(),I=i(),H=fe(p,l,M,y,I),_=p;if(!H&&!T){for(let O=Q.length-1;O>=0;O--)if(O!==p&&(H=fe(O,l,M,y,I),H)){_=O;break}}if(!H&&T&&(H=no(p,l,M,y,I),_=p),!H){r();return}_!==p&&(p=_,h.draggingFace=_,V=null,S=!1,E=null);let{s:$,t:W}=H;if(d&&E){if(S){let O=Math.abs($-E.s),be=Math.abs(W-E.t),xe=.02;(O>xe||be>xe)&&(V=O>=be?"u":"v",S=!1)}V==="u"?W=E.t:V==="v"&&($=E.s)}else d||(V=null,S=!1,E=null);ke(_,$,W),r()}function ke(l,d,T){let M=Q[l],y=o(),I=["x","y","z"],H={...n()};H[I[M.uAxis]]=d*y[I[M.uAxis]],H[I[M.vAxis]]=T*y[I[M.vAxis]],H[I[M.fixedAxis]]=y[I[M.fixedAxis]],a(H,l)}function de(){p=-1,h.draggingFace=-1,V=null,S=!1,E=null}function te(l){R=!0;let d=A(l);if(u()){if(h.alphaMode){if(oe(d)<=N){h.alphaMode=!1,r();return}if(pe(d)){l.preventDefault(),k=!0,se(d);return}h.alphaMode=!1,r();return}oe(d)<=N&&B()}let T=j(d);if(T>=0){l.preventDefault(),le(T,d);return}let M=X(d);if(M){l.preventDefault(),ce(M.faceIndex,M.s,M.t,l.shiftKey),F();return}let y=i();Math.hypot(d.x-y.x,d.y-y.y)>b()+20&&(l.preventDefault(),g=!0,L=d,h.viewRotating=!0,h.ringAlpha=Math.min(1,h.ringAlpha+.25),r())}function Be(l){let d=A(l);if(k){l.preventDefault(),se(d);return}if(g){if(l.preventDefault(),!L){L=d;return}let H=d.x-L.x,_=d.y-L.y,$=De();Pe(Math.max(-60,Math.min(60,$.yaw+H*.12)),Math.max(-60,Math.min(60,$.pitch+_*.12))),H!==0&&C(Math.max(0,Math.min(1,w()+H*.002))),h.ringAlpha=Math.min(1,h.ringAlpha+.12),L=d,r();return}if(R&&h.alphaMode&&pe(d)){l.preventDefault(),k=!0,se(d);return}if(U>=0){l.preventDefault(),c(d);return}if(p>=0){l.preventDefault(),re(d,l.shiftKey,l.altKey);return}let T=j(d),M=X(d),y=T,I=T>=0?-1:M?M.faceIndex:-1;(y!==h.hoveredAxisHandle||I!==h.hoveredFace)&&(h.hoveredAxisHandle=y,h.hoveredFace=I,e.style.cursor=y>=0?"grab":I>=0?"crosshair":"default",r())}function _e(l){J(),R=!1,k=!1,g&&(g=!1,h.viewRotating=!1,h.ringAlpha=0,L=null,r());let d=U>=0||p>=0;x(),de(),d&&(h.hoveredAxisHandle=-1,h.hoveredFace=-1,e.style.cursor="default",r())}function Oe(l){if(l.touches.length!==1)return;P=!0;let d=A(l.touches[0]);if(u()){if(h.alphaMode){if(oe(d)<=N){h.alphaMode=!1,r();return}if(pe(d)){l.preventDefault(),k=!0,se(d);return}h.alphaMode=!1,r();return}oe(d)<=N&&B()}let T=j(d);if(T>=0){l.preventDefault(),le(T,d);return}let M=X(d);if(M){l.preventDefault(),ce(M.faceIndex,M.s,M.t,!1),F();return}let y=i();Math.hypot(d.x-y.x,d.y-y.y)>b()+20&&(l.preventDefault(),g=!0,L=d,h.viewRotating=!0,h.ringAlpha=Math.min(1,h.ringAlpha+.25),r())}function Ge(l){if(l.touches.length!==1)return;let d=A(l.touches[0]);if(k)l.preventDefault(),se(d);else if(P&&h.alphaMode&&pe(d))l.preventDefault(),k=!0,se(d);else if(U>=0)l.preventDefault(),c(d);else if(g){if(l.preventDefault(),!L){L=d;return}let T=d.x-L.x,M=d.y-L.y,y=De();Pe(Math.max(-60,Math.min(60,y.yaw+T*.12)),Math.max(-60,Math.min(60,y.pitch+M*.12))),T!==0&&C(Math.max(0,Math.min(1,w()+T*.002))),h.ringAlpha=Math.min(1,h.ringAlpha+.12),L=d,r()}else p>=0&&(l.preventDefault(),re(d,!1,!1))}function Ne(l){J(),P=!1,k=!1,g&&(g=!1,h.viewRotating=!1,h.ringAlpha=0,L=null,r()),x(),de(),r()}function Ue(l){if(h.alphaMode){if(l.key==="Escape"){h.alphaMode=!1,r();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),m(Math.min(1,f()+(l.shiftKey?.08:.02))),r();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),m(Math.max(0,f()-(l.shiftKey?.08:.02))),r();return}}let d=l.shiftKey?.04:.004,T=n(),M=o(),y=Fe(),I=0,H=0;switch(l.key){case"ArrowRight":I=1;break;case"ArrowLeft":I=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}l.preventDefault();let _={...T},$=["x","y","z"];for(let W=0;W<3;W++){let O=I*y[W].x+H*y[W].y;if(Math.abs(O)>.3){let be=T[$[W]]+d*Math.sign(O);_[$[W]]=Math.max(0,Math.min(M[$[W]],be))}}a(_,s()),r()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",Be),window.addEventListener("mouseup",_e),e.addEventListener("touchstart",Oe,{passive:!1}),e.addEventListener("touchmove",Ge,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",Ue),e.setAttribute("tabindex","0");function ho(){J(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",_e),e.removeEventListener("touchstart",Oe),e.removeEventListener("touchmove",Ge),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",Ue)}return{state:h,destroy:ho}}var io=`.box-picker {\r
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
`;var Bo=fo,bo=!1;function _o(){if(bo||typeof document>"u")return;bo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=io,document.head.appendChild(e)}function fo(e,o={}){let t=o.size??300,n=o.controls??!0,a=o.showInputs??!1,s=o.showModeToggle??!1,b=o.showCorners??!1,i={mode:()=>r,switchMode:c=>ee(c),onHexInput:c=>{let x=ze(c);x?(f=ue(F?{r:255-x.r,g:255-x.g,b:255-x.b}:x,r),m={x:Math.max(m.x,f.x),y:Math.max(m.y,f.y),z:Math.max(m.z,f.z)},Y(),X(),B()):X()},onChannelInput:(c,x,p)=>{let V=Math.max(0,Math.min(p,x)),E=["x","y","z"],S=V/p;if(F){let ce={...f,[E[c]]:S},re=ne(ce,r);f=ue({r:255-re.r,g:255-re.g,b:255-re.b},r)}else f={...f,[E[c]]:S};S>m[E[c]]&&(m={...m,[E[c]]:S}),Y(),X(),B()},getRgbForCopy:()=>ne(f,r),onRandom:c=>le(c),onReset:()=>le({r:0,g:0,b:0})},r=o.mode??"rgb",u=o.initialColor?ue(o.initialColor,r):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},f={...u},v=0,C=()=>o.alpha!==void 0,w=Math.max(0,Math.min(1,o.alpha??1));function h(c){let x=Math.max(0,Math.min(1,c));x!==w&&(w=x,Y(),X(),B())}function A(c){let x=j(),p=ae(x);p.s=Math.max(0,Math.min(100,c*100));let V=we(p);le(F?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let k=new Set;_o();let R=document.createElement("div");R.className="box-picker";let P=document.createElement("canvas");P.style.cursor="grab",R.appendChild(P);let g=eo(P,t),L=null,G=document.createElement("div");G.className="box-picker-controls",L=document.createElement("div"),L.className="box-picker-swatch",G.appendChild(L),R.appendChild(G),(a||s||b)&&Promise.resolve().then(()=>(uo(),co)).then(c=>{c.createControls(G,i,{showInputs:a,showModeToggle:s,showCorners:b})}).catch(()=>{}),e.appendChild(R);let D=ao(P,()=>m,c=>{m=c},()=>f,(c,x)=>{f=c,v=x,Y(),X()},()=>v,()=>g.scale,()=>g.center,B,C,h,()=>w,()=>z(f,g.scale,g.center),A,()=>ae(j()).s/100),F=!1,Z=!0;P.addEventListener("mouseenter",()=>{Z=!0,B()}),P.addEventListener("mouseleave",()=>{Z=!1,B()}),P.addEventListener("dblclick",()=>{F=!F,He(F),Y(),X(),B()});function ee(c){if(c===r)return;let x=ne(f,r),p={...f},V={...m};r=c;let E=ue(x,r),S={x:1,y:1,z:1};f=E,m=S,he(p,E,V,S,300),X()}let N=null;function he(c,x,p,V,E){N!==null&&cancelAnimationFrame(N);let S=performance.now();function ce(re){let ke=re-S,de=Math.min(1,ke/E),te=1-Math.pow(1-de,3);f={x:c.x+(x.x-c.x)*te,y:c.y+(x.y-c.y)*te,z:c.z+(x.z-c.z)*te},m={x:p.x+(V.x-p.x)*te,y:p.y+(V.y-p.y)*te,z:p.z+(V.z-p.z)*te},J(),Y(),de<1?N=requestAnimationFrame(ce):N=null}N=requestAnimationFrame(ce)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,J()}))}function J(){oo(g,m,f,v,r,D.state,Z,{active:D.state.alphaMode,alpha:w,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:ae(j()).s/100,rgb:we({h:ae(j()).h,s:100,b:100})})}function me(c,x,p){return Math.round(c+(x-c)*p)}function oe(c,x){let p=x>0?255:0,V=Math.abs(x);return ge({r:me(c.r,p,V),g:me(c.g,p,V),b:me(c.b,p,V)})}function Te(c,x){let p=ze(x)||{r:128,g:128,b:128},V=oe(p,.35),E=oe(p,0),S=oe(p,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${E}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function se(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function pe(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function j(){let c=ne(f,r);return F?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function X(){if(!n)return;let c=j(),x=ge(c);L&&Te(L,x);let p=R.querySelector(".box-picker-hex");p&&(p.value=x),U(),R._updateModeButtons&&R._updateModeButtons()}function U(){if(!n)return;let c=Ae[r],x=F?ue(j(),r):f,p=Ye(x,r),V=R.querySelectorAll(".box-picker-channel input"),E=R.querySelectorAll(".box-picker-channel label");for(let S=0;S<V.length;S++)E[S].textContent=c[S],E[S].style.color="",E[S].style.textShadow="none",V[S].value=String(p[S])}function Y(){let c=j(),x={rgb:c,hsb:ae(c),oklch:Re(c),hex:ge(c),alpha:w};for(let p of k)p(x)}function Ce(){let c=ne(f,r);return{rgb:c,hsb:ae(c),oklch:Re(c),hex:ge(c)}}X(),J();let le=c=>{f=ue(c,r),m={x:Math.max(m.x,f.x),y:Math.max(m.y,f.y),z:Math.max(m.z,f.z)};let x=z(f,g.scale,g.center);v=-1;for(let p=Q.length-1;p>=0;p--)if(fe(p,x,m,g.scale,g.center)){v=p;break}Y(),X(),B()};return{getColor:Ce,getMode:()=>r,setColor:le,setAlpha:h,getAlpha:()=>w,setMode(c){ee(c)},on(c,x){k.add(x)},off(c,x){k.delete(x)},destroy(){D.destroy(),N!==null&&cancelAnimationFrame(N),e.removeChild(R)}}}return vo(Oo);})();
