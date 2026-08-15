var ColorIsBox=(()=>{var Ve=Object.defineProperty;var mo=Object.getOwnPropertyDescriptor;var po=Object.getOwnPropertyNames;var xo=Object.prototype.hasOwnProperty;var go=(e,o)=>()=>(e&&(o=e(e=0)),o);var Xe=(e,o)=>{for(var t in o)Ve(e,t,{get:o[t],enumerable:!0})},yo=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of po(o))!xo.call(e,a)&&a!==t&&Ve(e,a,{get:()=>o[a],enumerable:!(n=mo(o,a))||n.enumerable});return e};var vo=e=>yo(Ve({},"__esModule",{value:!0}),e);var co={};Xe(co,{createControls:()=>Do});function so(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function lo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Do(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let a=m=>{let f=document.createElement("button");return f.textContent=m.toUpperCase(),f.addEventListener("click",()=>o.switchMode(m)),n.appendChild(f),f},l=a("oklch"),b=a("rgb"),i=a("hsb"),r=()=>{let m=o.mode();b.classList.toggle("active",m==="rgb"),i.classList.toggle("active",m==="hsb"),l.classList.toggle("active",m==="oklch")};r();let h=o.switchMode;o._markActive=r,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let f=n.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),n.addEventListener("click",()=>{so(o.getRgbForCopy()?"#"+Fo(o.getRgbForCopy()):"#ffffff"),lo(n)});let a=document.createElement("div");a.className="box-picker-channels";let l=[],b=[],i=["R","G","B"];for(let f=0;f<3;f++){let v=document.createElement("div");v.className="box-picker-channel";let k=document.createElement("label");k.textContent=i[f];let A=document.createElement("input");A.type="text",A.inputMode="numeric",v.appendChild(k),v.appendChild(A),a.appendChild(v),l.push(A),b.push(k),A.addEventListener("change",()=>{let u=parseFloat(A.value);isNaN(u)||o.onChannelInput(f,u,255)}),A.addEventListener("click",()=>{let u=o.getRgbForCopy();so(`${u.r}, ${u.g}, ${u.b}`),lo(A)})}let r=document.createElement("div");r.className="box-picker-hexrow";let h=document.createElement("div");h.className="box-picker-hexwrap";let m=document.createElement("label");m.textContent="Hex",h.appendChild(m),h.appendChild(n),r.appendChild(a),r.appendChild(h),e.appendChild(r),e._inputs={hexInput:n,inputs:l,labels:b}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let l=Math.floor(Math.random()*256),b=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);o.onRandom({r:l,g:b,b:i})}),e.appendChild(n);let a=document.createElement("button");a.className="box-corner-btn box-corner-right",a.title="Reset",a.setAttribute("aria-label","Reset"),a.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',a.addEventListener("click",()=>o.onReset()),e.appendChild(a)}}function Fo(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var uo=go(()=>{});var Oo={};Xe(Oo,{createBoxColorPicker:()=>fo,createColorPicker:()=>Bo,setBoxInvert:()=>He});var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},We={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ae(e){let o=e.r/255,t=e.g/255,n=e.b/255,a=Math.max(o,t,n),l=Math.min(o,t,n),b=a-l,i=0;b!==0&&(a===o?i=((t-n)/b+6)%6:a===t?i=(n-o)/b+2:i=(o-t)/b+4,i*=60);let r=a===0?0:b/a*100,h=a*100;return{h:i,s:r,b:h}}function we(e){let o=e.h,t=e.s/100,n=e.b/100,a=n*t,l=a*(1-Math.abs(o/60%2-1)),b=n-a,i,r,h;return o<60?(i=a,r=l,h=0):o<120?(i=l,r=a,h=0):o<180?(i=0,r=a,h=l):o<240?(i=0,r=l,h=a):o<300?(i=l,r=0,h=a):(i=a,r=0,h=l),{r:Math.round((i+b)*255),g:Math.round((r+b)*255),b:Math.round((h+b)*255)}}function Se(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ee(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Mo(e){let o=Se(e.r/255),t=Se(e.g/255),n=Se(e.b/255),a=.4122214708*o+.5363325363*t+.0514459929*n,l=.2119034982*o+.6806995451*t+.1073969566*n,b=.0883024619*o+.2817188376*t+.6299787005*n,i=Math.cbrt(a),r=Math.cbrt(l),h=Math.cbrt(b);return{L:.2104542553*i+.793617785*r-.0040720468*h,a:1.9779984951*i-2.428592205*r+.4505937099*h,b:.0259040371*i+.7827717662*r-.808675766*h}}function Co(e,o,t){let n=e+.3963377774*o+.2158037573*t,a=e-.1055613458*o-.0638541728*t,l=e-.0894841775*o-1.291485548*t,b=n*n*n,i=a*a*a,r=l*l*l,h=4.0767416621*b-3.3077115913*i+.2309699292*r,m=-1.2684380046*b+2.6097574011*i-.3413193965*r,f=-.0041960863*b-.7034186147*i+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Ee(h)))*255),g:Math.round(Math.max(0,Math.min(1,Ee(m)))*255),b:Math.round(Math.max(0,Math.min(1,Ee(f)))*255)}}function Te(e){let o=Mo(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function Ie(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return Co(e.l,t,n)}function ko(e,o,t){let n=Ie({l:e,c:o,h:t});if(je(n))return{l:e,c:o,h:t};let a=0,l=o;for(let b=0;b<20;b++){let i=(a+l)/2;n=Ie({l:e,c:i,h:t}),je(n)?a=i:l=i}return{l:e,c:a,h:t}}function je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ge(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ze(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ze=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return we({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*Ze,a=e.z*359,l=ko(t,n,a);return Ie(l)}}function ue(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ae(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Te(e);return{x:t.l,y:Math.min(t.c/Ze,1),z:t.h/359}}}function Ye(e,o){let t=We[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Qe(e,o,t,n,a,l=!1){let b;e===0?b={x:n,y:o,z:t}:e===1?b={x:o,y:n,z:t}:b={x:o,y:t,z:n};let i=ne(b,a);return l?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var Je=Math.PI/6,Ao=Math.cos(Je),wo=Math.sin(Je),Me=!1;function He(e){Me=e}var ye=0,ve=0;function Pe(e,o){ye=e,ve=o}function De(){return{yaw:ye,pitch:ve}}function z(e,o,t){let n=e;if(ye!==0||ve!==0){let a={x:e.x-.5,y:e.y-.5,z:e.z-.5},l=Math.cos(ye),b=Math.sin(ye),i=Math.cos(ve),r=Math.sin(ve),h=a.x*l+a.z*b,m=a.y,f=-a.x*b+a.z*l,v=m*i-f*r,k=m*r+f*i;n={x:h+.5,y:v+.5,z:k+.5}}return{x:t.x+(n.y-n.x)*Ao*o,y:t.y+n.z*o-(n.x+n.y)*wo*o}}function To(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var Q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Ro=64,qe={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function eo(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function oo(e,o,t,n,a,l,b=!0,i=null,r=null){let{ctx:h,scale:m,center:f,width:v,height:k}=e;h.save(),h.clearRect(0,0,v,k);let A=To(o).map(u=>z(u,m,f));if(Vo(h,m,f,a),h.save(),h.shadowColor="rgba(0,0,0,0.35)",h.shadowBlur=8,h.shadowOffsetX=0,h.shadowOffsetY=2,So(h,A,o,a),h.restore(),b&&Io(h,a,m,f),n>=0){let u=ne(t,a),S=Me?{r:255-u.r,g:255-u.g,b:255-u.b}:u,M=z(t,m,f);i&&i.active&&zo(h,M,i.rgb,i.alpha),Ho(h,M,S)}h.restore()}var Lo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Vo(e,o,t,n){let a=z({x:0,y:0,z:0},o,t),l=[z({x:1,y:0,z:0},o,t),z({x:0,y:1,z:0},o,t),z({x:0,y:0,z:1},o,t)],b=Lo[n];e.lineWidth=1.5;for(let i=0;i<l.length;i++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(l[i].x,l[i].y),e.strokeStyle=b[i],e.stroke()}function So(e,o,t,n){let a=[t.x,t.y,t.z];for(let l=0;l<Q.length;l++){let b=Q[l],i=a[b.fixedAxis],r=a[b.uAxis],h=a[b.vAxis];if(r<.002&&h<.002)continue;let m=b.quad.map(f=>o[f]);Eo(e,m,b.fixedAxis,i,r,h,n)}}function Eo(e,o,t,n,a,l,b){let i=Ro,r=document.createElement("canvas");r.width=i,r.height=i;let h=r.getContext("2d"),m=h.createImageData(i,i),f=m.data;for(let Z=0;Z<i;Z++)for(let ee=0;ee<i;ee++){let N=ee/(i-1)*a,he=Z/(i-1)*l,K=Qe(t,N,he,n,b,Me),B=(Z*i+ee)*4;f[B]=K.r,f[B+1]=K.g,f[B+2]=K.b,f[B+3]=255}h.putImageData(m,0,0);let v=o[0],k=o[1],A=o[2],u=o[3],S=k.x-v.x,M=k.y-v.y,L=u.x-v.x,P=u.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(u.x,u.y),e.closePath(),e.clip();let g=2/i,T=v.x-S*g-L*g,G=v.y-M*g-P*g,D=1+2*g,F=1+2*g;e.transform(S*D/i,M*D/i,L*F/i,P*F/i,T,G),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function Io(e,o,t,n){let a=Ae[o],l=Me?[z({x:0,y:1,z:1},t,n),z({x:1,y:0,z:1},t,n),z({x:1,y:1,z:0},t,n)]:[z({x:1,y:0,z:0},t,n),z({x:0,y:1,z:0},t,n),z({x:0,y:0,z:1},t,n)],b=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let r=l[i].x+b[i].x,h=l[i].y+b[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(a[i],r,h)}e.globalAlpha=1,e.restore()}var q=30,ie=13;function zo(e,o,t,n){let a=(q+ie)/2,l=5,b=Math.floor(o.x/l)*l,i=Math.floor(o.y/l)*l,r=q*2+l*2,h=Math.max(0,Math.min(1,n));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let S=-1;S*l<=r;S++)for(let M=-1;M*l<=r;M++)e.fillStyle=(S+M)%2===0?"#ffffff":"#d9d9d9",e.fillRect(b+S*l,i+M*l,l,l);let m="rgba("+t.r+","+t.g+","+t.b+",0)",f="rgba("+t.r+","+t.g+","+t.b+",1)",v=e;if(typeof v.createConicGradient=="function"){let S=v.createConicGradient(-Math.PI/2,o.x,o.y);S.addColorStop(0,m),S.addColorStop(1,f),e.fillStyle=S,e.fillRect(b-q,i-q,r,r)}else for(let M=0;M<36;M++){let L=-Math.PI/2+M/36*Math.PI*2,P=-Math.PI/2+(M+1)/36*Math.PI*2,g=(M+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(L)*ie,o.y+Math.sin(L)*ie),e.arc(o.x,o.y,q,L,P),e.arc(o.x,o.y,ie,P,L,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+g.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=h*Math.PI*2,A=o.x+a*Math.sin(k),u=o.y-a*Math.cos(k);e.beginPath(),e.arc(A,u,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Ho(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function to(e,o,t,n){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return z(a[e],t,n)}function Fe(){let e={x:0,y:0};return[z({x:1,y:0,z:0},1,e),z({x:0,y:1,z:0},1,e),z({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function fe(e,o,t,n,a){let l=Q[e],b=[t.x,t.y,t.z],i=b[l.uAxis],r=b[l.vAxis];if(i<.002||r<.002)return null;let h={x:0,y:0,z:0},m=["x","y","z"];h[m[l.fixedAxis]]=b[l.fixedAxis];let f={...h};f[m[l.uAxis]]=i;let v={...h};v[m[l.vAxis]]=r;let k=z(h,n,a),A=z(f,n,a),u=z(v,n,a),S=A.x-k.x,M=A.y-k.y,L=u.x-k.x,P=u.y-k.y,g=S*P-M*L;if(Math.abs(g)<1e-6)return null;let T=o.x-k.x,G=o.y-k.y,D=(T*P-G*L)/g,F=(G*S-T*M)/g;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function no(e,o,t,n,a){let l=Q[e],b=[t.x,t.y,t.z],i=b[l.uAxis],r=b[l.vAxis];if(i<.002||r<.002)return null;let h={x:0,y:0,z:0},m=["x","y","z"];h[m[l.fixedAxis]]=b[l.fixedAxis];let f={...h};f[m[l.uAxis]]=i;let v={...h};v[m[l.vAxis]]=r;let k=z(h,n,a),A=z(f,n,a),u=z(v,n,a),S=A.x-k.x,M=A.y-k.y,L=u.x-k.x,P=u.y-k.y,g=S*P-M*L;if(Math.abs(g)<1e-6)return null;let T=o.x-k.x,G=o.y-k.y,D=(T*P-G*L)/g,F=(G*S-T*M)/g;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var ro=22;function ao(e,o,t,n,a,l,b,i,r,h,m,f,v,k,A){let u={...qe};function S(s){let d=e.getBoundingClientRect();return{x:s.clientX-d.left,y:s.clientY-d.top}}let M=!1,L=!1,P=!1,g=!1,T=null,G=600,D=null;function F(){Z(),D=setTimeout(ee,G)}function Z(){D!==null&&(clearTimeout(D),D=null)}function ee(){D=null,de(),x(),g=!0,u.viewRotating=!0,u.ringAlpha=Math.min(1,u.ringAlpha+.3),T=null,r()}let N=9,he=1e3,K=null;function B(){J(),K=setTimeout(me,he)}function J(){K!==null&&(clearTimeout(K),K=null),Z()}function me(){K=null,u.alphaMode=!0,x(),de(),r()}function oe(s){let d=v();return Math.hypot(s.x-d.x,s.y-d.y)}function Re(s){let d=v();return(Math.atan2(s.x-d.x,-(s.y-d.y))+Math.PI*2)%(Math.PI*2)}function se(s){m(Re(s)/(Math.PI*2)),r()}function pe(s){let d=oe(s);return d>=ie-4&&d<=q+6}function j(s){let d=o(),w=b(),C=i();for(let y=0;y<3;y++){let I=to(y,d,w,C),H=s.x-I.x,_=s.y-I.y;if(H*H+_*_<=ro*ro)return y}return-1}function X(s){let d=o(),w=b(),C=i();for(let y=Q.length-1;y>=0;y--){let I=fe(y,s,d,w,C);if(I)return{faceIndex:y,...I}}return null}let U=-1,Y={x:0,y:0},Ce=0;function le(s,d){U=s,Y=d,Ce=o()[["x","y","z"][s]],u.draggingAxisHandle=s,e.style.cursor="grabbing",r()}function c(s){if(J(),U<0)return;let d=s.x-Y.x,w=s.y-Y.y,y=Fe()[U],I=b(),_=(d*y.x+w*y.y)/I,$=Math.max(0,Math.min(1,Ce+_)),W=o(),O=["x","y","z"],be={...W,[O[U]]:$};t(be);let xe=n(),$e=l(),Ke=$e>=0?Q[$e]:null,Le={...xe};Ke&&U===Ke.fixedAxis?Le[O[U]]=$:Le[O[U]]=Math.min(xe[O[U]],$),a(Le,l()),r()}function x(){U=-1,u.draggingAxisHandle=-1}let p=-1,R=null,E=null,V=!1;function ce(s,d,w,C){p=s,u.draggingFace=s,R=null,E=null,V=!1,C&&(V=!0,E={s:d,t:w}),ke(s,d,w),e.style.cursor="crosshair",r()}function re(s,d,w){if(J(),p<0)return;let C=o(),y=b(),I=i(),H=fe(p,s,C,y,I),_=p;if(!H&&!w){for(let O=Q.length-1;O>=0;O--)if(O!==p&&(H=fe(O,s,C,y,I),H)){_=O;break}}if(!H&&w&&(H=no(p,s,C,y,I),_=p),!H){r();return}_!==p&&(p=_,u.draggingFace=_,R=null,V=!1,E=null);let{s:$,t:W}=H;if(d&&E){if(V){let O=Math.abs($-E.s),be=Math.abs(W-E.t),xe=.02;(O>xe||be>xe)&&(R=O>=be?"u":"v",V=!1)}R==="u"?W=E.t:R==="v"&&($=E.s)}else d||(R=null,V=!1,E=null);ke(_,$,W),r()}function ke(s,d,w){let C=Q[s],y=o(),I=["x","y","z"],H={...n()};H[I[C.uAxis]]=d*y[I[C.uAxis]],H[I[C.vAxis]]=w*y[I[C.vAxis]],H[I[C.fixedAxis]]=y[I[C.fixedAxis]],a(H,s)}function de(){p=-1,u.draggingFace=-1,R=null,V=!1,E=null}function te(s){L=!0;let d=S(s);if(h()){if(u.alphaMode){if(oe(d)<=N){u.alphaMode=!1,r();return}if(pe(d)){s.preventDefault(),M=!0,se(d);return}u.alphaMode=!1,r();return}oe(d)<=N&&B()}let w=j(d);if(w>=0){s.preventDefault(),le(w,d);return}let C=X(d);if(C){s.preventDefault(),ce(C.faceIndex,C.s,C.t,s.shiftKey),F();return}let y=i();Math.hypot(d.x-y.x,d.y-y.y)>b()+20&&(s.preventDefault(),g=!0,T=d,u.viewRotating=!0,u.ringAlpha=Math.min(1,u.ringAlpha+.25),r())}function Be(s){let d=S(s);if(M){s.preventDefault(),se(d);return}if(g){if(s.preventDefault(),!T){T=d;return}let H=d.x-T.x,_=d.y-T.y,$=De();Pe(Math.max(-60,Math.min(60,$.yaw+H*.12)),Math.max(-60,Math.min(60,$.pitch+_*.12))),H!==0&&k(Math.max(0,Math.min(1,A()+H*.002))),u.ringAlpha=Math.min(1,u.ringAlpha+.12),T=d,r();return}if(L&&u.alphaMode&&pe(d)){s.preventDefault(),M=!0,se(d);return}if(U>=0){s.preventDefault(),c(d);return}if(p>=0){s.preventDefault(),re(d,s.shiftKey,s.altKey);return}let w=j(d),C=X(d),y=w,I=w>=0?-1:C?C.faceIndex:-1;(y!==u.hoveredAxisHandle||I!==u.hoveredFace)&&(u.hoveredAxisHandle=y,u.hoveredFace=I,e.style.cursor=y>=0?"grab":I>=0?"crosshair":"default",r())}function _e(s){J(),L=!1,M=!1,g&&(g=!1,u.viewRotating=!1,u.ringAlpha=0,T=null,r());let d=U>=0||p>=0;x(),de(),d&&(u.hoveredAxisHandle=-1,u.hoveredFace=-1,e.style.cursor="default",r())}function Oe(s){if(s.touches.length!==1)return;P=!0;let d=S(s.touches[0]);if(h()){if(u.alphaMode){if(oe(d)<=N){u.alphaMode=!1,r();return}if(pe(d)){s.preventDefault(),M=!0,se(d);return}u.alphaMode=!1,r();return}oe(d)<=N&&B()}let w=j(d);if(w>=0){s.preventDefault(),le(w,d);return}let C=X(d);if(C){s.preventDefault(),ce(C.faceIndex,C.s,C.t,!1),F();return}let y=i();Math.hypot(d.x-y.x,d.y-y.y)>b()+20&&(s.preventDefault(),g=!0,T=d,u.viewRotating=!0,u.ringAlpha=Math.min(1,u.ringAlpha+.25),r())}function Ge(s){if(s.touches.length!==1)return;let d=S(s.touches[0]);if(M)s.preventDefault(),se(d);else if(P&&u.alphaMode&&pe(d))s.preventDefault(),M=!0,se(d);else if(U>=0)s.preventDefault(),c(d);else if(g){if(s.preventDefault(),!T){T=d;return}let w=d.x-T.x,C=d.y-T.y,y=De();Pe(Math.max(-60,Math.min(60,y.yaw+w*.12)),Math.max(-60,Math.min(60,y.pitch+C*.12))),w!==0&&k(Math.max(0,Math.min(1,A()+w*.002))),u.ringAlpha=Math.min(1,u.ringAlpha+.12),T=d,r()}else p>=0&&(s.preventDefault(),re(d,!1,!1))}function Ne(s){J(),P=!1,M=!1,g&&(g=!1,u.viewRotating=!1,u.ringAlpha=0,T=null,r()),x(),de(),r()}function Ue(s){if(u.alphaMode){if(s.key==="Escape"){u.alphaMode=!1,r();return}if(s.key==="ArrowUp"||s.key==="ArrowRight"){s.preventDefault(),m(Math.min(1,f()+(s.shiftKey?.08:.02))),r();return}if(s.key==="ArrowDown"||s.key==="ArrowLeft"){s.preventDefault(),m(Math.max(0,f()-(s.shiftKey?.08:.02))),r();return}}let d=s.shiftKey?.04:.004,w=n(),C=o(),y=Fe(),I=0,H=0;switch(s.key){case"ArrowRight":I=1;break;case"ArrowLeft":I=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}s.preventDefault();let _={...w},$=["x","y","z"];for(let W=0;W<3;W++){let O=I*y[W].x+H*y[W].y;if(Math.abs(O)>.3){let be=w[$[W]]+d*Math.sign(O);_[$[W]]=Math.max(0,Math.min(C[$[W]],be))}}a(_,l()),r()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",Be),window.addEventListener("mouseup",_e),e.addEventListener("touchstart",Oe,{passive:!1}),e.addEventListener("touchmove",Ge,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",Ue),e.setAttribute("tabindex","0");function ho(){J(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",_e),e.removeEventListener("touchstart",Oe),e.removeEventListener("touchmove",Ge),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",Ue)}return{state:u,destroy:ho}}var io=`.box-picker {\r
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
`;var Bo=fo,bo=!1;function _o(){if(bo||typeof document>"u")return;bo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=io,document.head.appendChild(e)}function fo(e,o={}){let t=o.size??300,n=o.controls??!0,a=o.showInputs??!1,l=o.showModeToggle??!1,b=o.showCorners??!1,i={mode:()=>r,switchMode:c=>ee(c),onHexInput:c=>{let x=ze(c);x?(f=ue(F?{r:255-x.r,g:255-x.g,b:255-x.b}:x,r),m={x:Math.max(m.x,f.x),y:Math.max(m.y,f.y),z:Math.max(m.z,f.z)},Y(),X(),B()):X()},onChannelInput:(c,x,p)=>{let R=Math.max(0,Math.min(p,x)),E=["x","y","z"],V=R/p;if(F){let ce={...f,[E[c]]:V},re=ne(ce,r);f=ue({r:255-re.r,g:255-re.g,b:255-re.b},r)}else f={...f,[E[c]]:V};V>m[E[c]]&&(m={...m,[E[c]]:V}),Y(),X(),B()},getRgbForCopy:()=>ne(f,r),onRandom:c=>le(c),onReset:()=>le({r:0,g:0,b:0})},r=o.mode??"rgb",h=o.initialColor?ue(o.initialColor,r):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},f={...h},v=0,k=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function u(c){let x=Math.max(0,Math.min(1,c));x!==A&&(A=x,Y(),X(),B())}function S(c){let x=j(),p=ae(x);p.s=Math.max(0,Math.min(100,c*100));let R=we(p);le(F?{r:255-R.r,g:255-R.g,b:255-R.b}:R)}let M=new Set;_o();let L=document.createElement("div");L.className="box-picker";let P=document.createElement("canvas");P.style.cursor="grab",L.appendChild(P);let g=eo(P,t),T=null,G=document.createElement("div");G.className="box-picker-controls",T=document.createElement("div"),T.className="box-picker-swatch",G.appendChild(T),L.appendChild(G),(a||l||b)&&Promise.resolve().then(()=>(uo(),co)).then(c=>{c.createControls(G,i,{showInputs:a,showModeToggle:l,showCorners:b})}).catch(()=>{}),e.appendChild(L);let D=ao(P,()=>m,c=>{m=c},()=>f,(c,x)=>{f=c,v=x,Y(),X()},()=>v,()=>g.scale,()=>g.center,B,k,u,()=>A,()=>z(f,g.scale,g.center),S,()=>ae(j()).s/100),F=!1,Z=!0;P.addEventListener("mouseenter",()=>{Z=!0,B()}),P.addEventListener("mouseleave",()=>{Z=!1,B()}),P.addEventListener("dblclick",()=>{F=!F,He(F),Y(),X(),B()});function ee(c){if(c===r)return;let x=ne(f,r),p={...f},R={...m};r=c;let E=ue(x,r),V={x:1,y:1,z:1};f=E,m=V,he(p,E,R,V,300),X()}let N=null;function he(c,x,p,R,E){N!==null&&cancelAnimationFrame(N);let V=performance.now();function ce(re){let ke=re-V,de=Math.min(1,ke/E),te=1-Math.pow(1-de,3);f={x:c.x+(x.x-c.x)*te,y:c.y+(x.y-c.y)*te,z:c.z+(x.z-c.z)*te},m={x:p.x+(R.x-p.x)*te,y:p.y+(R.y-p.y)*te,z:p.z+(R.z-p.z)*te},J(),Y(),de<1?N=requestAnimationFrame(ce):N=null}N=requestAnimationFrame(ce)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,J()}))}function J(){oo(g,m,f,v,r,D.state,Z,{active:D.state.alphaMode,alpha:A,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:ae(j()).s/100,rgb:we({h:ae(j()).h,s:100,b:100})})}function me(c,x,p){return Math.round(c+(x-c)*p)}function oe(c,x){let p=x>0?255:0,R=Math.abs(x);return ge({r:me(c.r,p,R),g:me(c.g,p,R),b:me(c.b,p,R)})}function Re(c,x){let p=ze(x)||{r:128,g:128,b:128},R=oe(p,.35),E=oe(p,0),V=oe(p,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${R}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${E}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${V}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function se(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function pe(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function j(){let c=ne(f,r);return F?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function X(){if(!n)return;let c=j(),x=ge(c);T&&Re(T,x);let p=L.querySelector(".box-picker-hex");p&&(p.value=x),U(),L._updateModeButtons&&L._updateModeButtons()}function U(){if(!n)return;let c=Ae[r],x=F?ue(j(),r):f,p=Ye(x,r),R=L.querySelectorAll(".box-picker-channel input"),E=L.querySelectorAll(".box-picker-channel label");for(let V=0;V<R.length;V++)E[V].textContent=c[V],E[V].style.color="",E[V].style.textShadow="none",R[V].value=String(p[V])}function Y(){let c=j(),x={rgb:c,hsb:ae(c),oklch:Te(c),hex:ge(c),alpha:A};for(let p of M)p(x)}function Ce(){let c=ne(f,r);return{rgb:c,hsb:ae(c),oklch:Te(c),hex:ge(c)}}X(),J();let le=c=>{f=ue(c,r),m={x:Math.max(m.x,f.x),y:Math.max(m.y,f.y),z:Math.max(m.z,f.z)};let x=z(f,g.scale,g.center);v=-1;for(let p=Q.length-1;p>=0;p--)if(fe(p,x,m,g.scale,g.center)){v=p;break}Y(),X(),B()};return{getColor:Ce,getMode:()=>r,setColor:le,setAlpha:u,getAlpha:()=>A,setMode(c){ee(c)},on(c,x){M.add(x)},off(c,x){M.delete(x)},destroy(){D.destroy(),N!==null&&cancelAnimationFrame(N),e.removeChild(L)}}}return vo(Oo);})();
