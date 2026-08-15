var ColorIsBox=(()=>{var Ve=Object.defineProperty;var mo=Object.getOwnPropertyDescriptor;var po=Object.getOwnPropertyNames;var xo=Object.prototype.hasOwnProperty;var go=(e,o)=>()=>(e&&(o=e(e=0)),o);var Xe=(e,o)=>{for(var t in o)Ve(e,t,{get:o[t],enumerable:!0})},yo=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of po(o))!xo.call(e,i)&&i!==t&&Ve(e,i,{get:()=>o[i],enumerable:!(a=mo(o,i))||a.enumerable});return e};var vo=e=>yo(Ve({},"__esModule",{value:!0}),e);var co={};Xe(co,{createControls:()=>_o});function so(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function lo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function _o(e,o,t){if(t.showModeToggle){let a=document.createElement("div");a.className="box-picker-mode-toggle";let i=h=>{let f=document.createElement("button");return f.textContent=h.toUpperCase(),f.addEventListener("click",()=>o.switchMode(h)),a.appendChild(f),f},s=i("oklch"),c=i("rgb"),n=i("hsb"),r=()=>{let h=o.mode();c.classList.toggle("active",h==="rgb"),n.classList.toggle("active",h==="hsb"),s.classList.toggle("active",h==="oklch")};r();let d=o.switchMode;o._markActive=r,e.appendChild(a)}if(t.showInputs){let a=document.createElement("input");a.className="box-picker-hex",a.type="text",a.spellcheck=!1,a.addEventListener("change",()=>{let f=a.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),a.addEventListener("click",()=>{so(o.getRgbForCopy()?"#"+Go(o.getRgbForCopy()):"#ffffff"),lo(a)});let i=document.createElement("div");i.className="box-picker-channels";let s=[],c=[],n=["R","G","B"];for(let f=0;f<3;f++){let y=document.createElement("div");y.className="box-picker-channel";let A=document.createElement("label");A.textContent=n[f];let w=document.createElement("input");w.type="text",w.inputMode="numeric",y.appendChild(A),y.appendChild(w),i.appendChild(y),s.push(w),c.push(A),w.addEventListener("change",()=>{let m=parseFloat(w.value);isNaN(m)||o.onChannelInput(f,m,255)}),w.addEventListener("click",()=>{let m=o.getRgbForCopy();so(`${m.r}, ${m.g}, ${m.b}`),lo(w)})}let r=document.createElement("div");r.className="box-picker-hexrow";let d=document.createElement("div");d.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",d.appendChild(h),d.appendChild(a),r.appendChild(i),r.appendChild(d),e.appendChild(r),e._inputs={hexInput:a,inputs:s,labels:c}}if(t.showCorners){let a=document.createElement("button");a.className="box-corner-btn box-corner-left",a.title="Random color",a.setAttribute("aria-label","Random color"),a.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',a.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),n=Math.floor(Math.random()*256);o.onRandom({r:s,g:c,b:n})}),e.appendChild(a);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function Go(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var uo=go(()=>{});var $o={};Xe($o,{createBoxColorPicker:()=>fo,createColorPicker:()=>No,setBoxInvert:()=>He});var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},We={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ae(e){let o=e.r/255,t=e.g/255,a=e.b/255,i=Math.max(o,t,a),s=Math.min(o,t,a),c=i-s,n=0;c!==0&&(i===o?n=((t-a)/c+6)%6:i===t?n=(a-o)/c+2:n=(o-t)/c+4,n*=60);let r=i===0?0:c/i*100,d=i*100;return{h:n,s:r,b:d}}function we(e){let o=e.h,t=e.s/100,a=e.b/100,i=a*t,s=i*(1-Math.abs(o/60%2-1)),c=a-i,n,r,d;return o<60?(n=i,r=s,d=0):o<120?(n=s,r=i,d=0):o<180?(n=0,r=i,d=s):o<240?(n=0,r=s,d=i):o<300?(n=s,r=0,d=i):(n=i,r=0,d=s),{r:Math.round((n+c)*255),g:Math.round((r+c)*255),b:Math.round((d+c)*255)}}function ze(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ee(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Mo(e){let o=ze(e.r/255),t=ze(e.g/255),a=ze(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*a,s=.2119034982*o+.6806995451*t+.1073969566*a,c=.0883024619*o+.2817188376*t+.6299787005*a,n=Math.cbrt(i),r=Math.cbrt(s),d=Math.cbrt(c);return{L:.2104542553*n+.793617785*r-.0040720468*d,a:1.9779984951*n-2.428592205*r+.4505937099*d,b:.0259040371*n+.7827717662*r-.808675766*d}}function Co(e,o,t){let a=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,s=e-.0894841775*o-1.291485548*t,c=a*a*a,n=i*i*i,r=s*s*s,d=4.0767416621*c-3.3077115913*n+.2309699292*r,h=-1.2684380046*c+2.6097574011*n-.3413193965*r,f=-.0041960863*c-.7034186147*n+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Ee(d)))*255),g:Math.round(Math.max(0,Math.min(1,Ee(h)))*255),b:Math.round(Math.max(0,Math.min(1,Ee(f)))*255)}}function Te(e){let o=Mo(e),t=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:t,h:t<1e-4?0:a}}function Pe(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),a=e.c*Math.sin(o);return Co(e.l,t,a)}function ko(e,o,t){let a=Pe({l:e,c:o,h:t});if(je(a))return{l:e,c:o,h:t};let i=0,s=o;for(let c=0;c<20;c++){let n=(i+s)/2;a=Pe({l:e,c:n,h:t}),je(a)?i=n:s=n}return{l:e,c:i,h:t}}function je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ge(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Ie(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ye=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return we({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,a=e.y*Ye,i=e.z*359,s=ko(t,a,i);return Pe(s)}}function ue(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ae(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Te(e);return{x:t.l,y:Math.min(t.c/Ye,1),z:t.h/359}}}function Ze(e,o){let t=We[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Qe(e,o,t,a,i,s=!1){let c;e===0?c={x:a,y:o,z:t}:e===1?c={x:o,y:a,z:t}:c={x:o,y:t,z:a};let n=ne(c,i);return s?{r:255-n.r,g:255-n.g,b:255-n.b}:n}var Je=Math.PI/6,Ao=Math.cos(Je),wo=Math.sin(Je),Me=!1;function He(e){Me=e}var ye=0,ve=0;function De(e,o){ye=e,ve=o}function Re(){return{yaw:ye,pitch:ve}}function S(e,o,t){let a=e;if(ye!==0||ve!==0){let i={x:e.x-.5,y:e.y-.5,z:e.z-.5},s=Math.cos(ye),c=Math.sin(ye),n=Math.cos(ve),r=Math.sin(ve),d=i.x*s+i.z*c,h=i.y,f=-i.x*c+i.z*s,y=h*n-f*r,A=h*r+f*n;a={x:d+.5,y:y+.5,z:A+.5}}return{x:t.x+(a.y-a.x)*Ao*o,y:t.y+a.z*o-(a.x+a.y)*wo*o}}function To(e){let{x:o,y:t,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:a},{x:o,y:t,z:0},{x:o,y:0,z:a},{x:0,y:t,z:a},{x:o,y:t,z:a}]}var Q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Ro=64,qe={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function eo(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(t,t),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function oo(e,o,t,a,i,s,c=!0,n=null,r=null){let{ctx:d,scale:h,center:f,width:y,height:A}=e;d.save(),d.clearRect(0,0,y,A);let w=To(o).map(C=>S(C,h,f));So(d,h,f,i),d.save(),d.shadowColor="rgba(0,0,0,0.35)",d.shadowBlur=8,d.shadowOffsetX=0,d.shadowOffsetY=2,Vo(d,w,o,i),d.restore(),c&&Eo(d,i,h,f);let{yaw:m,pitch:z}=Re(),M=Math.max(0,Math.min(1,1-Math.max(Math.abs(m),Math.abs(z))/10));if(M>.02&&!s.viewRotating&&Ho(d,h,f,M*.45),r&&r.active&&s.ringAlpha>.01&&Do(d,f,r.rgb,r.sat,s.ringAlpha),a>=0){let C=ne(t,i),I=Me?{r:255-C.r,g:255-C.g,b:255-C.b}:C,g=S(t,h,f);n&&n.active&&Fo(d,g,n.rgb,n.alpha),Bo(d,g,I)}d.restore()}var Lo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function So(e,o,t,a){let i=S({x:0,y:0,z:0},o,t),s=[S({x:1,y:0,z:0},o,t),S({x:0,y:1,z:0},o,t),S({x:0,y:0,z:1},o,t)],c=Lo[a];e.lineWidth=1.5;for(let n=0;n<s.length;n++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(s[n].x,s[n].y),e.strokeStyle=c[n],e.stroke()}function Vo(e,o,t,a){let i=[t.x,t.y,t.z];for(let s=0;s<Q.length;s++){let c=Q[s],n=i[c.fixedAxis],r=i[c.uAxis],d=i[c.vAxis];if(r<.002&&d<.002)continue;let h=c.quad.map(f=>o[f]);zo(e,h,c.fixedAxis,n,r,d,a)}}function zo(e,o,t,a,i,s,c){let n=Ro,r=document.createElement("canvas");r.width=n,r.height=n;let d=r.getContext("2d"),h=d.createImageData(n,n),f=h.data;for(let Y=0;Y<n;Y++)for(let ee=0;ee<n;ee++){let N=ee/(n-1)*i,he=Y/(n-1)*s,K=Qe(t,N,he,a,c,Me),B=(Y*n+ee)*4;f[B]=K.r,f[B+1]=K.g,f[B+2]=K.b,f[B+3]=255}d.putImageData(h,0,0);let y=o[0],A=o[1],w=o[2],m=o[3],z=A.x-y.x,M=A.y-y.y,C=m.x-y.x,I=m.y-y.y;e.save(),e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(A.x,A.y),e.lineTo(w.x,w.y),e.lineTo(m.x,m.y),e.closePath(),e.clip();let g=2/n,R=y.x-z*g-C*g,G=y.y-M*g-I*g,D=1+2*g,F=1+2*g;e.transform(z*D/n,M*D/n,C*F/n,I*F/n,R,G),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function Eo(e,o,t,a){let i=Ae[o],s=Me?[S({x:0,y:1,z:1},t,a),S({x:1,y:0,z:1},t,a),S({x:1,y:1,z:0},t,a)]:[S({x:1,y:0,z:0},t,a),S({x:0,y:1,z:0},t,a),S({x:0,y:0,z:1},t,a)],c=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let n=0;n<3;n++){let r=s[n].x+c[n].x,d=s[n].y+c[n].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(i[n],r,d)}e.globalAlpha=1,e.restore()}var Po=.48,Io=.33;function Ho(e,o,t,a){let i=[{x:1,y:0,z:0},{x:1,y:1,z:0},{x:0,y:1,z:0},{x:0,y:1,z:1},{x:0,y:0,z:1},{x:1,y:0,z:1}],s=["R","Y","G","C","B","M"],c=["#ff1744","#ffeb3b","#00e676","#00bcd4","#2962ff","#f50057"];e.save(),e.globalAlpha=a;for(let n of[.25,.5,.75,1]){e.setLineDash(n===1?[]:[3,5]),e.strokeStyle=n===1?"rgba(30,41,59,.5)":"rgba(148,163,184,.55)",e.lineWidth=n===1?1.4:1,e.beginPath();for(let r=0;r<=6;r++){let d=i[r%6],h=S({x:d.x*n,y:d.y*n,z:d.z*n},o,t);r===0?e.moveTo(h.x,h.y):e.lineTo(h.x,h.y)}e.closePath(),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(148,163,184,.4)",e.lineWidth=1;for(let n of i){let r=S(n,o,t);e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.stroke()}e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="left";for(let n of[.25,.5,.75]){let r=S({x:n,y:n,z:0},o,t);e.fillText(Math.round(n*100)+"%",r.x+5,r.y-4)}e.font="bold 11px sans-serif",e.fillStyle="#334155",e.textAlign="center";for(let n=0;n<6;n++){let r=S(i[n],o,t),d=r.x>t.x+10?14:r.x<t.x-10?-14:0,h=r.y<t.y-10?-10:14;e.fillText(s[n],r.x+d,r.y+h)}e.beginPath(),e.arc(t.x,t.y,3.5,0,Math.PI*2),e.fillStyle="#111",e.fill(),e.restore()}function Do(e,o,t,a,i,s){let c=o*Po,n=o*Io,r=Math.max(0,Math.min(1,i));e.save(),e.globalAlpha=s,e.beginPath(),e.arc(t.x,t.y,c,0,Math.PI*2),e.arc(t.x,t.y,n,0,Math.PI*2,!0),e.clip();let d=e.createRadialGradient(t.x,t.y,n,t.x,t.y,c);d.addColorStop(0,"#e7e7e7"),d.addColorStop(1,"rgb("+a.r+","+a.g+","+a.b+")"),e.fillStyle=d,e.fillRect(t.x-c,t.y-c,c*2,c*2),e.restore(),e.beginPath(),e.arc(t.x,t.y,c,0,Math.PI*2),e.arc(t.x,t.y,n,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let f of[.25,.5,.75]){let y=n+(c-n)*f;e.fillText(Math.round(f*100)+"%",t.x+y+10,t.y-4)}let h=n+(c-n)*r;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(t.x,t.y-n),e.lineTo(t.x,t.y-h),e.stroke(),e.restore(),e.beginPath(),e.arc(t.x,t.y-h,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var q=30,ie=13;function Fo(e,o,t,a){let i=(q+ie)/2,s=5,c=Math.floor(o.x/s)*s,n=Math.floor(o.y/s)*s,r=q*2+s*2,d=Math.max(0,Math.min(1,a));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let z=-1;z*s<=r;z++)for(let M=-1;M*s<=r;M++)e.fillStyle=(z+M)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+z*s,n+M*s,s,s);let h="rgba("+t.r+","+t.g+","+t.b+",0)",f="rgba("+t.r+","+t.g+","+t.b+",1)",y=e;if(typeof y.createConicGradient=="function"){let z=y.createConicGradient(-Math.PI/2,o.x,o.y);z.addColorStop(0,h),z.addColorStop(1,f),e.fillStyle=z,e.fillRect(c-q,n-q,r,r)}else for(let M=0;M<36;M++){let C=-Math.PI/2+M/36*Math.PI*2,I=-Math.PI/2+(M+1)/36*Math.PI*2,g=(M+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(C)*ie,o.y+Math.sin(C)*ie),e.arc(o.x,o.y,q,C,I),e.arc(o.x,o.y,ie,I,C,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+g.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=d*Math.PI*2,w=o.x+i*Math.sin(A),m=o.y-i*Math.cos(A);e.beginPath(),e.arc(w,m,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Bo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function to(e,o,t,a){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(i[e],t,a)}function Fe(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(t=>{let a=Math.sqrt(t.x*t.x+t.y*t.y);return a>0?{x:t.x/a,y:t.y/a}:{x:0,y:0}})}function fe(e,o,t,a,i){let s=Q[e],c=[t.x,t.y,t.z],n=c[s.uAxis],r=c[s.vAxis];if(n<.002||r<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[s.fixedAxis]]=c[s.fixedAxis];let f={...d};f[h[s.uAxis]]=n;let y={...d};y[h[s.vAxis]]=r;let A=S(d,a,i),w=S(f,a,i),m=S(y,a,i),z=w.x-A.x,M=w.y-A.y,C=m.x-A.x,I=m.y-A.y,g=z*I-M*C;if(Math.abs(g)<1e-6)return null;let R=o.x-A.x,G=o.y-A.y,D=(R*I-G*C)/g,F=(G*z-R*M)/g;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function no(e,o,t,a,i){let s=Q[e],c=[t.x,t.y,t.z],n=c[s.uAxis],r=c[s.vAxis];if(n<.002||r<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[s.fixedAxis]]=c[s.fixedAxis];let f={...d};f[h[s.uAxis]]=n;let y={...d};y[h[s.vAxis]]=r;let A=S(d,a,i),w=S(f,a,i),m=S(y,a,i),z=w.x-A.x,M=w.y-A.y,C=m.x-A.x,I=m.y-A.y,g=z*I-M*C;if(Math.abs(g)<1e-6)return null;let R=o.x-A.x,G=o.y-A.y,D=(R*I-G*C)/g,F=(G*z-R*M)/g;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var ro=22;function ao(e,o,t,a,i,s,c,n,r,d,h,f,y,A,w){let m={...qe};function z(l){let b=e.getBoundingClientRect();return{x:l.clientX-b.left,y:l.clientY-b.top}}let M=!1,C=!1,I=!1,g=!1,R=null,G=600,D=null;function F(){Y(),D=setTimeout(ee,G)}function Y(){D!==null&&(clearTimeout(D),D=null)}function ee(){D=null,de(),x(),g=!0,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.3),R=null,r()}let N=9,he=1e3,K=null;function B(){J(),K=setTimeout(me,he)}function J(){K!==null&&(clearTimeout(K),K=null),Y()}function me(){K=null,m.alphaMode=!0,x(),de(),r()}function oe(l){let b=y();return Math.hypot(l.x-b.x,l.y-b.y)}function Le(l){let b=y();return(Math.atan2(l.x-b.x,-(l.y-b.y))+Math.PI*2)%(Math.PI*2)}function se(l){h(Le(l)/(Math.PI*2)),r()}function pe(l){let b=oe(l);return b>=ie-4&&b<=q+6}function j(l){let b=o(),T=c(),k=n();for(let v=0;v<3;v++){let P=to(v,b,T,k),H=l.x-P.x,O=l.y-P.y;if(H*H+O*O<=ro*ro)return v}return-1}function X(l){let b=o(),T=c(),k=n();for(let v=Q.length-1;v>=0;v--){let P=fe(v,l,b,T,k);if(P)return{faceIndex:v,...P}}return null}let U=-1,Z={x:0,y:0},Ce=0;function le(l,b){U=l,Z=b,Ce=o()[["x","y","z"][l]],m.draggingAxisHandle=l,e.style.cursor="grabbing",r()}function u(l){if(J(),U<0)return;let b=l.x-Z.x,T=l.y-Z.y,v=Fe()[U],P=c(),O=(b*v.x+T*v.y)/P,$=Math.max(0,Math.min(1,Ce+O)),W=o(),_=["x","y","z"],be={...W,[_[U]]:$};t(be);let xe=a(),$e=s(),Ke=$e>=0?Q[$e]:null,Se={...xe};Ke&&U===Ke.fixedAxis?Se[_[U]]=$:Se[_[U]]=Math.min(xe[_[U]],$),i(Se,s()),r()}function x(){U=-1,m.draggingAxisHandle=-1}let p=-1,L=null,E=null,V=!1;function ce(l,b,T,k){p=l,m.draggingFace=l,L=null,E=null,V=!1,k&&(V=!0,E={s:b,t:T}),ke(l,b,T),e.style.cursor="crosshair",r()}function re(l,b,T){if(J(),p<0)return;let k=o(),v=c(),P=n(),H=fe(p,l,k,v,P),O=p;if(!H&&!T){for(let _=Q.length-1;_>=0;_--)if(_!==p&&(H=fe(_,l,k,v,P),H)){O=_;break}}if(!H&&T&&(H=no(p,l,k,v,P),O=p),!H){r();return}O!==p&&(p=O,m.draggingFace=O,L=null,V=!1,E=null);let{s:$,t:W}=H;if(b&&E){if(V){let _=Math.abs($-E.s),be=Math.abs(W-E.t),xe=.02;(_>xe||be>xe)&&(L=_>=be?"u":"v",V=!1)}L==="u"?W=E.t:L==="v"&&($=E.s)}else b||(L=null,V=!1,E=null);ke(O,$,W),r()}function ke(l,b,T){let k=Q[l],v=o(),P=["x","y","z"],H={...a()};H[P[k.uAxis]]=b*v[P[k.uAxis]],H[P[k.vAxis]]=T*v[P[k.vAxis]],H[P[k.fixedAxis]]=v[P[k.fixedAxis]],i(H,l)}function de(){p=-1,m.draggingFace=-1,L=null,V=!1,E=null}function te(l){C=!0;let b=z(l);if(d()){if(m.alphaMode){if(oe(b)<=N){m.alphaMode=!1,r();return}if(pe(b)){l.preventDefault(),M=!0,se(b);return}m.alphaMode=!1,r();return}oe(b)<=N&&B()}let T=j(b);if(T>=0){l.preventDefault(),le(T,b);return}let k=X(b);if(k){l.preventDefault(),ce(k.faceIndex,k.s,k.t,l.shiftKey),F();return}let v=n();Math.hypot(b.x-v.x,b.y-v.y)>c()+20&&(l.preventDefault(),g=!0,R=b,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.25),r())}function Be(l){let b=z(l);if(M){l.preventDefault(),se(b);return}if(g){if(l.preventDefault(),!R){R=b;return}let H=b.x-R.x,O=b.y-R.y,$=Re();De(Math.max(-60,Math.min(60,$.yaw+H*.12)),Math.max(-60,Math.min(60,$.pitch+O*.12))),H!==0&&A(Math.max(0,Math.min(1,w()+H*.002))),m.ringAlpha=Math.min(1,m.ringAlpha+.12),R=b,r();return}if(C&&m.alphaMode&&pe(b)){l.preventDefault(),M=!0,se(b);return}if(U>=0){l.preventDefault(),u(b);return}if(p>=0){l.preventDefault(),re(b,l.shiftKey,l.altKey);return}let T=j(b),k=X(b),v=T,P=T>=0?-1:k?k.faceIndex:-1;(v!==m.hoveredAxisHandle||P!==m.hoveredFace)&&(m.hoveredAxisHandle=v,m.hoveredFace=P,e.style.cursor=v>=0?"grab":P>=0?"crosshair":"default",r())}function Oe(l){J(),C=!1,M=!1,g&&(g=!1,m.viewRotating=!1,m.ringAlpha=0,R=null,r());let b=U>=0||p>=0;x(),de(),b&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",r())}function _e(l){if(l.touches.length!==1)return;I=!0;let b=z(l.touches[0]);if(d()){if(m.alphaMode){if(oe(b)<=N){m.alphaMode=!1,r();return}if(pe(b)){l.preventDefault(),M=!0,se(b);return}m.alphaMode=!1,r();return}oe(b)<=N&&B()}let T=j(b);if(T>=0){l.preventDefault(),le(T,b);return}let k=X(b);if(k){l.preventDefault(),ce(k.faceIndex,k.s,k.t,!1),F();return}let v=n();Math.hypot(b.x-v.x,b.y-v.y)>c()+20&&(l.preventDefault(),g=!0,R=b,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.25),r())}function Ge(l){if(l.touches.length!==1)return;let b=z(l.touches[0]);if(M)l.preventDefault(),se(b);else if(I&&m.alphaMode&&pe(b))l.preventDefault(),M=!0,se(b);else if(U>=0)l.preventDefault(),u(b);else if(g){if(l.preventDefault(),!R){R=b;return}let T=b.x-R.x,k=b.y-R.y,v=Re();De(Math.max(-60,Math.min(60,v.yaw+T*.12)),Math.max(-60,Math.min(60,v.pitch+k*.12))),T!==0&&A(Math.max(0,Math.min(1,w()+T*.002))),m.ringAlpha=Math.min(1,m.ringAlpha+.12),R=b,r()}else p>=0&&(l.preventDefault(),re(b,!1,!1))}function Ne(l){J(),I=!1,M=!1,g&&(g=!1,m.viewRotating=!1,m.ringAlpha=0,R=null,r()),x(),de(),r()}function Ue(l){if(m.alphaMode){if(l.key==="Escape"){m.alphaMode=!1,r();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),h(Math.min(1,f()+(l.shiftKey?.08:.02))),r();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),h(Math.max(0,f()-(l.shiftKey?.08:.02))),r();return}}let b=l.shiftKey?.04:.004,T=a(),k=o(),v=Fe(),P=0,H=0;switch(l.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}l.preventDefault();let O={...T},$=["x","y","z"];for(let W=0;W<3;W++){let _=P*v[W].x+H*v[W].y;if(Math.abs(_)>.3){let be=T[$[W]]+b*Math.sign(_);O[$[W]]=Math.max(0,Math.min(k[$[W]],be))}}i(O,s()),r()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",Be),window.addEventListener("mouseup",Oe),e.addEventListener("touchstart",_e,{passive:!1}),e.addEventListener("touchmove",Ge,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",Ue),e.setAttribute("tabindex","0");function ho(){J(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",Oe),e.removeEventListener("touchstart",_e),e.removeEventListener("touchmove",Ge),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",Ue)}return{state:m,destroy:ho}}var io=`.box-picker {\r
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
`;var No=fo,bo=!1;function Uo(){if(bo||typeof document>"u")return;bo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=io,document.head.appendChild(e)}function fo(e,o={}){let t=o.size??300,a=o.controls??!0,i=o.showInputs??!1,s=o.showModeToggle??!1,c=o.showCorners??!1,n={mode:()=>r,switchMode:u=>ee(u),onHexInput:u=>{let x=Ie(u);x?(f=ue(F?{r:255-x.r,g:255-x.g,b:255-x.b}:x,r),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)},Z(),X(),B()):X()},onChannelInput:(u,x,p)=>{let L=Math.max(0,Math.min(p,x)),E=["x","y","z"],V=L/p;if(F){let ce={...f,[E[u]]:V},re=ne(ce,r);f=ue({r:255-re.r,g:255-re.g,b:255-re.b},r)}else f={...f,[E[u]]:V};V>h[E[u]]&&(h={...h,[E[u]]:V}),Z(),X(),B()},getRgbForCopy:()=>ne(f,r),onRandom:u=>le(u),onReset:()=>le({r:0,g:0,b:0})},r=o.mode??"rgb",d=o.initialColor?ue(o.initialColor,r):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},f={...d},y=0,A=()=>o.alpha!==void 0,w=Math.max(0,Math.min(1,o.alpha??1));function m(u){let x=Math.max(0,Math.min(1,u));x!==w&&(w=x,Z(),X(),B())}function z(u){let x=j(),p=ae(x);p.s=Math.max(0,Math.min(100,u*100));let L=we(p);le(F?{r:255-L.r,g:255-L.g,b:255-L.b}:L)}let M=new Set;Uo();let C=document.createElement("div");C.className="box-picker";let I=document.createElement("canvas");I.style.cursor="grab",C.appendChild(I);let g=eo(I,t),R=null,G=document.createElement("div");G.className="box-picker-controls",R=document.createElement("div"),R.className="box-picker-swatch",G.appendChild(R),C.appendChild(G),(i||s||c)&&Promise.resolve().then(()=>(uo(),co)).then(u=>{u.createControls(G,n,{showInputs:i,showModeToggle:s,showCorners:c})}).catch(()=>{}),e.appendChild(C);let D=ao(I,()=>h,u=>{h=u},()=>f,(u,x)=>{f=u,y=x,Z(),X()},()=>y,()=>g.scale,()=>g.center,B,A,m,()=>w,()=>S(f,g.scale,g.center),z,()=>ae(j()).s/100),F=!1,Y=!0;I.addEventListener("mouseenter",()=>{Y=!0,B()}),I.addEventListener("mouseleave",()=>{Y=!1,B()}),I.addEventListener("dblclick",()=>{F=!F,He(F),Z(),X(),B()});function ee(u){if(u===r)return;let x=ne(f,r),p={...f},L={...h};r=u;let E=ue(x,r),V={x:1,y:1,z:1};f=E,h=V,he(p,E,L,V,300),X()}let N=null;function he(u,x,p,L,E){N!==null&&cancelAnimationFrame(N);let V=performance.now();function ce(re){let ke=re-V,de=Math.min(1,ke/E),te=1-Math.pow(1-de,3);f={x:u.x+(x.x-u.x)*te,y:u.y+(x.y-u.y)*te,z:u.z+(x.z-u.z)*te},h={x:p.x+(L.x-p.x)*te,y:p.y+(L.y-p.y)*te,z:p.z+(L.z-p.z)*te},J(),Z(),de<1?N=requestAnimationFrame(ce):N=null}N=requestAnimationFrame(ce)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,J()}))}function J(){oo(g,h,f,y,r,D.state,Y,{active:D.state.alphaMode,alpha:w,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:ae(j()).s/100,rgb:we({h:ae(j()).h,s:100,b:100})})}function me(u,x,p){return Math.round(u+(x-u)*p)}function oe(u,x){let p=x>0?255:0,L=Math.abs(x);return ge({r:me(u.r,p,L),g:me(u.g,p,L),b:me(u.b,p,L)})}function Le(u,x){let p=Ie(x)||{r:128,g:128,b:128},L=oe(p,.35),E=oe(p,0),V=oe(p,-.35);u.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${L}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${E}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${V}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,u.style.backgroundColor="transparent"}function se(u){try{navigator.clipboard.writeText(u).catch(()=>{})}catch{}}function pe(u){u&&(u.style.borderColor="#4ade80",u.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{u.style.borderColor="",u.style.boxShadow=""},500))}function j(){let u=ne(f,r);return F?{r:255-u.r,g:255-u.g,b:255-u.b}:u}function X(){if(!a)return;let u=j(),x=ge(u);R&&Le(R,x);let p=C.querySelector(".box-picker-hex");p&&(p.value=x),U(),C._updateModeButtons&&C._updateModeButtons()}function U(){if(!a)return;let u=Ae[r],x=F?ue(j(),r):f,p=Ze(x,r),L=C.querySelectorAll(".box-picker-channel input"),E=C.querySelectorAll(".box-picker-channel label");for(let V=0;V<L.length;V++)E[V].textContent=u[V],E[V].style.color="",E[V].style.textShadow="none",L[V].value=String(p[V])}function Z(){let u=j(),x={rgb:u,hsb:ae(u),oklch:Te(u),hex:ge(u),alpha:w};for(let p of M)p(x)}function Ce(){let u=ne(f,r);return{rgb:u,hsb:ae(u),oklch:Te(u),hex:ge(u)}}X(),J();let le=u=>{f=ue(u,r),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)};let x=S(f,g.scale,g.center);y=-1;for(let p=Q.length-1;p>=0;p--)if(fe(p,x,h,g.scale,g.center)){y=p;break}Z(),X(),B()};return{getColor:Ce,getMode:()=>r,setColor:le,setAlpha:m,getAlpha:()=>w,setMode(u){ee(u)},on(u,x){M.add(x)},off(u,x){M.delete(x)},destroy(){D.destroy(),N!==null&&cancelAnimationFrame(N),e.removeChild(C)}}}return vo($o);})();
