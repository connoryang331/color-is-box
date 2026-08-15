var ColorIsBox=(()=>{var Ve=Object.defineProperty;var co=Object.getOwnPropertyDescriptor;var uo=Object.getOwnPropertyNames;var bo=Object.prototype.hasOwnProperty;var fo=(e,o)=>()=>(e&&(o=e(e=0)),o);var Ge=(e,o)=>{for(var t in o)Ve(e,t,{get:o[t],enumerable:!0})},ho=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of uo(o))!bo.call(e,i)&&i!==t&&Ve(e,i,{get:()=>o[i],enumerable:!(a=co(o,i))||a.enumerable});return e};var mo=e=>ho(Ve({},"__esModule",{value:!0}),e);var ro={};Ge(ro,{createControls:()=>Ho});function to(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function no(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Ho(e,o,t){if(t.showModeToggle){let a=document.createElement("div");a.className="box-picker-mode-toggle";let i=h=>{let f=document.createElement("button");return f.textContent=h.toUpperCase(),f.addEventListener("click",()=>o.switchMode(h)),a.appendChild(f),f},s=i("oklch"),d=i("rgb"),n=i("hsb"),r=()=>{let h=o.mode();d.classList.toggle("active",h==="rgb"),n.classList.toggle("active",h==="hsb"),s.classList.toggle("active",h==="oklch")};r();let u=o.switchMode;o._markActive=r,e.appendChild(a)}if(t.showInputs){let a=document.createElement("input");a.className="box-picker-hex",a.type="text",a.spellcheck=!1,a.addEventListener("change",()=>{let f=a.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),a.addEventListener("click",()=>{to(o.getRgbForCopy()?"#"+Do(o.getRgbForCopy()):"#ffffff"),no(a)});let i=document.createElement("div");i.className="box-picker-channels";let s=[],d=[],n=["R","G","B"];for(let f=0;f<3;f++){let y=document.createElement("div");y.className="box-picker-channel";let w=document.createElement("label");w.textContent=n[f];let T=document.createElement("input");T.type="text",T.inputMode="numeric",y.appendChild(w),y.appendChild(T),i.appendChild(y),s.push(T),d.push(w),T.addEventListener("change",()=>{let m=parseFloat(T.value);isNaN(m)||o.onChannelInput(f,m,255)}),T.addEventListener("click",()=>{let m=o.getRgbForCopy();to(`${m.r}, ${m.g}, ${m.b}`),no(T)})}let r=document.createElement("div");r.className="box-picker-hexrow";let u=document.createElement("div");u.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",u.appendChild(h),u.appendChild(a),r.appendChild(i),r.appendChild(u),e.appendChild(r),e._inputs={hexInput:a,inputs:s,labels:d}}if(t.showCorners){let a=document.createElement("button");a.className="box-corner-btn box-corner-left",a.title="Random color",a.setAttribute("aria-label","Random color"),a.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',a.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),n=Math.floor(Math.random()*256);o.onRandom({r:s,g:d,b:n})}),e.appendChild(a);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function Do(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var ao=fo(()=>{});var Oo={};Ge(Oo,{createBoxColorPicker:()=>so,createColorPicker:()=>Fo,setBoxInvert:()=>He});var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ne={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function se(e){let o=e.r/255,t=e.g/255,a=e.b/255,i=Math.max(o,t,a),s=Math.min(o,t,a),d=i-s,n=0;d!==0&&(i===o?n=((t-a)/d+6)%6:i===t?n=(a-o)/d+2:n=(o-t)/d+4,n*=60);let r=i===0?0:d/i*100,u=i*100;return{h:n,s:r,b:u}}function Te(e){let o=e.h,t=e.s/100,a=e.b/100,i=a*t,s=i*(1-Math.abs(o/60%2-1)),d=a-i,n,r,u;return o<60?(n=i,r=s,u=0):o<120?(n=s,r=i,u=0):o<180?(n=0,r=i,u=s):o<240?(n=0,r=s,u=i):o<300?(n=s,r=0,u=i):(n=i,r=0,u=s),{r:Math.round((n+d)*255),g:Math.round((r+d)*255),b:Math.round((u+d)*255)}}function ze(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ee(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function po(e){let o=ze(e.r/255),t=ze(e.g/255),a=ze(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*a,s=.2119034982*o+.6806995451*t+.1073969566*a,d=.0883024619*o+.2817188376*t+.6299787005*a,n=Math.cbrt(i),r=Math.cbrt(s),u=Math.cbrt(d);return{L:.2104542553*n+.793617785*r-.0040720468*u,a:1.9779984951*n-2.428592205*r+.4505937099*u,b:.0259040371*n+.7827717662*r-.808675766*u}}function xo(e,o,t){let a=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,s=e-.0894841775*o-1.291485548*t,d=a*a*a,n=i*i*i,r=s*s*s,u=4.0767416621*d-3.3077115913*n+.2309699292*r,h=-1.2684380046*d+2.6097574011*n-.3413193965*r,f=-.0041960863*d-.7034186147*n+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Ee(u)))*255),g:Math.round(Math.max(0,Math.min(1,Ee(h)))*255),b:Math.round(Math.max(0,Math.min(1,Ee(f)))*255)}}function Le(e){let o=po(e),t=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:t,h:t<1e-4?0:a}}function Ie(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),a=e.c*Math.sin(o);return xo(e.l,t,a)}function go(e,o,t){let a=Ie({l:e,c:o,h:t});if(Ue(a))return{l:e,c:o,h:t};let i=0,s=o;for(let d=0;d<20;d++){let n=(i+s)/2;a=Ie({l:e,c:n,h:t}),Ue(a)?i=n:s=n}return{l:e,c:i,h:t}}function Ue(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ye(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var $e=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Te({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,a=e.y*$e,i=e.z*359,s=go(t,a,i);return Ie(s)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=se(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Le(e);return{x:t.l,y:Math.min(t.c/$e,1),z:t.h/359}}}function Ke(e,o){let t=Ne[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Xe(e,o,t,a,i,s=!1){let d;e===0?d={x:a,y:o,z:t}:e===1?d={x:o,y:a,z:t}:d={x:o,y:t,z:a};let n=re(d,i);return s?{r:255-n.r,g:255-n.g,b:255-n.b}:n}var We=Math.PI/6,yo=Math.cos(We),vo=Math.sin(We),Ce=!1;function He(e){Ce=e}var ve=0,Me=0;function De(e,o){ve=e,Me=o}function he(){return{yaw:ve,pitch:Me}}function L(e,o,t){let a=e;if(ve!==0||Me!==0){let i={x:e.x-.5,y:e.y-.5,z:e.z-.5},s=Math.cos(ve),d=Math.sin(ve),n=Math.cos(Me),r=Math.sin(Me),u=i.x*s+i.z*d,h=i.y,f=-i.x*d+i.z*s,y=h*n-f*r,w=h*r+f*n;a={x:u+.5,y:y+.5,z:w+.5}}return{x:t.x+(a.y-a.x)*yo*o,y:t.y+a.z*o-(a.x+a.y)*vo*o}}function Mo(e){let{x:o,y:t,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:a},{x:o,y:t,z:0},{x:o,y:0,z:a},{x:0,y:t,z:a},{x:o,y:t,z:a}]}var J=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Co=64,je={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Ye(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(t,t),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ze(e,o,t,a,i,s,d=!0,n=null,r=null){let{ctx:u,scale:h,center:f,width:y,height:w}=e;u.save(),u.clearRect(0,0,y,w);let T=Mo(o).map(C=>L(C,h,f));wo(u,h,f,i),u.save(),u.shadowColor="rgba(0,0,0,0.35)",u.shadowBlur=8,u.shadowOffsetX=0,u.shadowOffsetY=2,Ao(u,T,o,i),u.restore(),d&&Lo(u,i,h,f);let{yaw:m,pitch:R}=he(),M=Math.max(0,Math.min(1,1-Math.max(Math.abs(m),Math.abs(R))/10));if(M>.02&&Vo(u,h,f,M),r&&r.active&&s.ringAlpha>.01&&zo(u,f,r.rgb,r.sat,s.ringAlpha),a>=0){let C=re(t,i),z=Ce?{r:255-C.r,g:255-C.g,b:255-C.b}:C,g=L(t,h,f);n&&n.active&&Eo(u,g,n.rgb,n.alpha),Io(u,g,z)}u.restore()}var ko={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function wo(e,o,t,a){let i=L({x:0,y:0,z:0},o,t),s=[L({x:1,y:0,z:0},o,t),L({x:0,y:1,z:0},o,t),L({x:0,y:0,z:1},o,t)],d=ko[a];e.lineWidth=1.5;for(let n=0;n<s.length;n++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(s[n].x,s[n].y),e.strokeStyle=d[n],e.stroke()}function Ao(e,o,t,a){let i=[t.x,t.y,t.z];for(let s=0;s<J.length;s++){let d=J[s],n=i[d.fixedAxis],r=i[d.uAxis],u=i[d.vAxis];if(r<.002&&u<.002)continue;let h=d.quad.map(f=>o[f]);To(e,h,d.fixedAxis,n,r,u,a)}}function To(e,o,t,a,i,s,d){let n=Co,r=document.createElement("canvas");r.width=n,r.height=n;let u=r.getContext("2d"),h=u.createImageData(n,n),f=h.data;for(let Y=0;Y<n;Y++)for(let $=0;$<n;$++){let Z=$/(n-1)*i,ee=Y/(n-1)*s,oe=Xe(t,Z,ee,a,d,Ce),F=(Y*n+$)*4;f[F]=oe.r,f[F+1]=oe.g,f[F+2]=oe.b,f[F+3]=255}u.putImageData(h,0,0);let y=o[0],w=o[1],T=o[2],m=o[3],R=w.x-y.x,M=w.y-y.y,C=m.x-y.x,z=m.y-y.y;e.save(),e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(w.x,w.y),e.lineTo(T.x,T.y),e.lineTo(m.x,m.y),e.closePath(),e.clip();let g=2/n,S=y.x-R*g-C*g,O=y.y-M*g-z*g,_=1+2*g,P=1+2*g;e.transform(R*_/n,M*_/n,C*P/n,z*P/n,S,O),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function Lo(e,o,t,a){let i=Ae[o],s=Ce?[L({x:0,y:1,z:1},t,a),L({x:1,y:0,z:1},t,a),L({x:1,y:1,z:0},t,a)]:[L({x:1,y:0,z:0},t,a),L({x:0,y:1,z:0},t,a),L({x:0,y:0,z:1},t,a)],d=Ce?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let n=0;n<3;n++){let r=s[n].x+d[n].x,u=s[n].y+d[n].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(i[n],r,u)}e.globalAlpha=1,e.restore()}var Ro=.48,So=.33;function Vo(e,o,t,a){let i=[{x:1,y:0,z:0},{x:1,y:1,z:0},{x:0,y:1,z:0},{x:0,y:1,z:1},{x:0,y:0,z:1},{x:1,y:0,z:1}],s=["R","Y","G","C","B","M"],d=["#ff1744","#ffeb3b","#00e676","#00bcd4","#2962ff","#f50057"];e.save(),e.globalAlpha=a;for(let n of[.25,.5,.75,1]){e.setLineDash(n===1?[]:[3,5]),e.strokeStyle=n===1?"rgba(30,41,59,.5)":"rgba(148,163,184,.55)",e.lineWidth=n===1?1.4:1,e.beginPath();for(let r=0;r<=6;r++){let u=i[r%6],h=L({x:u.x*n,y:u.y*n,z:u.z*n},o,t);r===0?e.moveTo(h.x,h.y):e.lineTo(h.x,h.y)}e.closePath(),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(148,163,184,.4)",e.lineWidth=1;for(let n of i){let r=L(n,o,t);e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.stroke()}e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="left";for(let n of[.25,.5,.75]){let r=L({x:n,y:n,z:0},o,t);e.fillText(Math.round(n*100)+"%",r.x+5,r.y-4)}e.font="bold 11px sans-serif",e.fillStyle="#334155",e.textAlign="center";for(let n=0;n<6;n++){let r=L(i[n],o,t),u=r.x>t.x+10?14:r.x<t.x-10?-14:0,h=r.y<t.y-10?-10:14;e.fillText(s[n],r.x+u,r.y+h)}e.beginPath(),e.arc(t.x,t.y,3.5,0,Math.PI*2),e.fillStyle="#111",e.fill(),e.restore()}function zo(e,o,t,a,i,s){let d=o*Ro,n=o*So,r=Math.max(0,Math.min(1,i));e.save(),e.globalAlpha=s,e.beginPath(),e.arc(t.x,t.y,d,0,Math.PI*2),e.arc(t.x,t.y,n,0,Math.PI*2,!0),e.clip();let u=e.createRadialGradient(t.x,t.y,n,t.x,t.y,d);u.addColorStop(0,"#e7e7e7"),u.addColorStop(1,"rgb("+a.r+","+a.g+","+a.b+")"),e.fillStyle=u,e.fillRect(t.x-d,t.y-d,d*2,d*2),e.restore(),e.beginPath(),e.arc(t.x,t.y,d,0,Math.PI*2),e.arc(t.x,t.y,n,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let f of[.25,.5,.75]){let y=n+(d-n)*f;e.fillText(Math.round(f*100)+"%",t.x+y+10,t.y-4)}let h=n+(d-n)*r;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(t.x,t.y-n),e.lineTo(t.x,t.y-h),e.stroke(),e.restore(),e.beginPath(),e.arc(t.x,t.y-h,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var q=30,le=13;function Eo(e,o,t,a){let i=(q+le)/2,s=5,d=Math.floor(o.x/s)*s,n=Math.floor(o.y/s)*s,r=q*2+s*2,u=Math.max(0,Math.min(1,a));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let R=-1;R*s<=r;R++)for(let M=-1;M*s<=r;M++)e.fillStyle=(R+M)%2===0?"#ffffff":"#d9d9d9",e.fillRect(d+R*s,n+M*s,s,s);let h="rgba("+t.r+","+t.g+","+t.b+",0)",f="rgba("+t.r+","+t.g+","+t.b+",1)",y=e;if(typeof y.createConicGradient=="function"){let R=y.createConicGradient(-Math.PI/2,o.x,o.y);R.addColorStop(0,h),R.addColorStop(1,f),e.fillStyle=R,e.fillRect(d-q,n-q,r,r)}else for(let M=0;M<36;M++){let C=-Math.PI/2+M/36*Math.PI*2,z=-Math.PI/2+(M+1)/36*Math.PI*2,g=(M+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(C)*le,o.y+Math.sin(C)*le),e.arc(o.x,o.y,q,C,z),e.arc(o.x,o.y,le,z,C,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+g.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let w=u*Math.PI*2,T=o.x+i*Math.sin(w),m=o.y-i*Math.cos(w);e.beginPath(),e.arc(T,m,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Io(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Qe(e,o,t,a){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return L(i[e],t,a)}function Fe(){let e={x:0,y:0};return[L({x:1,y:0,z:0},1,e),L({x:0,y:1,z:0},1,e),L({x:0,y:0,z:1},1,e)].map(t=>{let a=Math.sqrt(t.x*t.x+t.y*t.y);return a>0?{x:t.x/a,y:t.y/a}:{x:0,y:0}})}function me(e,o,t,a,i){let s=J[e],d=[t.x,t.y,t.z],n=d[s.uAxis],r=d[s.vAxis];if(n<.002||r<.002)return null;let u={x:0,y:0,z:0},h=["x","y","z"];u[h[s.fixedAxis]]=d[s.fixedAxis];let f={...u};f[h[s.uAxis]]=n;let y={...u};y[h[s.vAxis]]=r;let w=L(u,a,i),T=L(f,a,i),m=L(y,a,i),R=T.x-w.x,M=T.y-w.y,C=m.x-w.x,z=m.y-w.y,g=R*z-M*C;if(Math.abs(g)<1e-6)return null;let S=o.x-w.x,O=o.y-w.y,_=(S*z-O*C)/g,P=(O*R-S*M)/g;return _<-.05||_>1.05||P<-.05||P>1.05?null:{s:Math.max(0,Math.min(1,_)),t:Math.max(0,Math.min(1,P))}}function Je(e,o,t,a,i){let s=J[e],d=[t.x,t.y,t.z],n=d[s.uAxis],r=d[s.vAxis];if(n<.002||r<.002)return null;let u={x:0,y:0,z:0},h=["x","y","z"];u[h[s.fixedAxis]]=d[s.fixedAxis];let f={...u};f[h[s.uAxis]]=n;let y={...u};y[h[s.vAxis]]=r;let w=L(u,a,i),T=L(f,a,i),m=L(y,a,i),R=T.x-w.x,M=T.y-w.y,C=m.x-w.x,z=m.y-w.y,g=R*z-M*C;if(Math.abs(g)<1e-6)return null;let S=o.x-w.x,O=o.y-w.y,_=(S*z-O*C)/g,P=(O*R-S*M)/g;return{s:Math.max(0,Math.min(1,_)),t:Math.max(0,Math.min(1,P))}}var qe=22;function eo(e,o,t,a,i,s,d,n,r,u,h,f,y,w,T){let m={...je};function R(c){let b=e.getBoundingClientRect();return{x:c.clientX-b.left,y:c.clientY-b.top}}let M=!1,C=!1,z=!1,g=!1,S=null,O=9,_=1e3,P=null;function Y(){$(),P=setTimeout(Z,_)}function $(){P!==null&&(clearTimeout(P),P=null)}function Z(){P=null,m.alphaMode=!0,pe(),B(),r()}function ee(c){let b=y();return Math.hypot(c.x-b.x,c.y-b.y)}function oe(c){let b=y();return(Math.atan2(c.x-b.x,-(c.y-b.y))+Math.PI*2)%(Math.PI*2)}function F(c){h(oe(c)/(Math.PI*2)),r()}function ae(c){let b=ee(c);return b>=le-4&&b<=q+6}function ce(c){let b=o(),A=d(),k=n();for(let v=0;v<3;v++){let V=Qe(v,b,A,k),I=c.x-V.x,G=c.y-V.y;if(I*I+G*G<=qe*qe)return v}return-1}function de(c){let b=o(),A=d(),k=n();for(let v=J.length-1;v>=0;v--){let V=me(v,c,b,A,k);if(V)return{faceIndex:v,...V}}return null}let K=-1,ke={x:0,y:0},Re=0;function Q(c,b){K=c,ke=b,Re=o()[["x","y","z"][c]],m.draggingAxisHandle=c,e.style.cursor="grabbing",r()}function j(c){if($(),K<0)return;let b=c.x-ke.x,A=c.y-ke.y,v=Fe()[K],V=d(),G=(b*v.x+A*v.y)/V,X=Math.max(0,Math.min(1,Re+G)),W=o(),N=["x","y","z"],fe={...W,[N[K]]:X};t(fe);let ge=a(),Oe=s(),_e=Oe>=0?J[Oe]:null,Se={...ge};_e&&K===_e.fixedAxis?Se[N[K]]=X:Se[N[K]]=Math.min(ge[N[K]],X),i(Se,s()),r()}function pe(){K=-1,m.draggingAxisHandle=-1}let D=-1,te=null,U=null,l=!1;function p(c,b,A,k){D=c,m.draggingFace=c,te=null,U=null,l=!1,k&&(l=!0,U={s:b,t:A}),E(c,b,A),e.style.cursor="crosshair",r()}function x(c,b,A){if($(),D<0)return;let k=o(),v=d(),V=n(),I=me(D,c,k,v,V),G=D;if(!I&&!A){for(let N=J.length-1;N>=0;N--)if(N!==D&&(I=me(N,c,k,v,V),I)){G=N;break}}if(!I&&A&&(I=Je(D,c,k,v,V),G=D),!I){r();return}G!==D&&(D=G,m.draggingFace=G,te=null,l=!1,U=null);let{s:X,t:W}=I;if(b&&U){if(l){let N=Math.abs(X-U.s),fe=Math.abs(W-U.t),ge=.02;(N>ge||fe>ge)&&(te=N>=fe?"u":"v",l=!1)}te==="u"?W=U.t:te==="v"&&(X=U.s)}else b||(te=null,l=!1,U=null);E(G,X,W),r()}function E(c,b,A){let k=J[c],v=o(),V=["x","y","z"],I={...a()};I[V[k.uAxis]]=b*v[V[k.uAxis]],I[V[k.vAxis]]=A*v[V[k.vAxis]],I[V[k.fixedAxis]]=v[V[k.fixedAxis]],i(I,c)}function B(){D=-1,m.draggingFace=-1,te=null,l=!1,U=null}function H(c){C=!0;let b=R(c);if(u()){if(m.alphaMode){if(ee(b)<=O){m.alphaMode=!1,r();return}if(ae(b)){c.preventDefault(),M=!0,F(b);return}m.alphaMode=!1,r();return}ee(b)<=O&&Y()}let A=ce(b);if(A>=0){c.preventDefault(),Q(A,b);return}let k=de(b);if(k){c.preventDefault(),p(k.faceIndex,k.s,k.t,c.shiftKey);return}let v=n();Math.hypot(b.x-v.x,b.y-v.y)>d()+20&&(c.preventDefault(),g=!0,S=b,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.25),r())}function ue(c){let b=R(c);if(M){c.preventDefault(),F(b);return}if(g&&S){c.preventDefault();let I=b.x-S.x,G=b.y-S.y,X=he();De(Math.max(-60,Math.min(60,X.yaw+I*.12)),Math.max(-60,Math.min(60,X.pitch+G*.12))),I!==0&&w(Math.max(0,Math.min(1,T()+I*.002))),m.ringAlpha=Math.min(1,m.ringAlpha+.12),S=b,r();return}if(C&&m.alphaMode&&ae(b)){c.preventDefault(),M=!0,F(b);return}if(K>=0){c.preventDefault(),j(b);return}if(D>=0){c.preventDefault(),x(b,c.shiftKey,c.altKey);return}let A=ce(b),k=de(b),v=A,V=A>=0?-1:k?k.faceIndex:-1;(v!==m.hoveredAxisHandle||V!==m.hoveredFace)&&(m.hoveredAxisHandle=v,m.hoveredFace=V,e.style.cursor=v>=0?"grab":V>=0?"crosshair":"default",r())}function ie(c){if($(),C=!1,M=!1,g){g=!1,m.viewRotating=!1;let A=he();Math.max(Math.abs(A.yaw),Math.abs(A.pitch))>5&&(m.ringAlpha=0),S=null,r()}let b=K>=0||D>=0;pe(),B(),b&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",r())}function we(c){if(c.touches.length!==1)return;z=!0;let b=R(c.touches[0]);if(u()){if(m.alphaMode){if(ee(b)<=O){m.alphaMode=!1,r();return}if(ae(b)){c.preventDefault(),M=!0,F(b);return}m.alphaMode=!1,r();return}ee(b)<=O&&Y()}let A=ce(b);if(A>=0){c.preventDefault(),Q(A,b);return}let k=de(b);if(k){c.preventDefault(),p(k.faceIndex,k.s,k.t,!1);return}let v=n();Math.hypot(b.x-v.x,b.y-v.y)>d()+20&&(c.preventDefault(),g=!0,S=b,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.25),r())}function xe(c){if(c.touches.length!==1)return;let b=R(c.touches[0]);if(M)c.preventDefault(),F(b);else if(z&&m.alphaMode&&ae(b))c.preventDefault(),M=!0,F(b);else if(K>=0)c.preventDefault(),j(b);else if(g&&S){c.preventDefault();let A=b.x-S.x,k=b.y-S.y,v=he();De(Math.max(-60,Math.min(60,v.yaw+A*.12)),Math.max(-60,Math.min(60,v.pitch+k*.12))),A!==0&&w(Math.max(0,Math.min(1,T()+A*.002))),m.ringAlpha=Math.min(1,m.ringAlpha+.12),S=b,r()}else D>=0&&(c.preventDefault(),x(b,!1,!1))}function ne(c){if($(),z=!1,M=!1,g){g=!1,m.viewRotating=!1;let b=he();Math.max(Math.abs(b.yaw),Math.abs(b.pitch))>5&&(m.ringAlpha=0),S=null,r()}pe(),B(),r()}function Be(c){if(m.alphaMode){if(c.key==="Escape"){m.alphaMode=!1,r();return}if(c.key==="ArrowUp"||c.key==="ArrowRight"){c.preventDefault(),h(Math.min(1,f()+(c.shiftKey?.08:.02))),r();return}if(c.key==="ArrowDown"||c.key==="ArrowLeft"){c.preventDefault(),h(Math.max(0,f()-(c.shiftKey?.08:.02))),r();return}}let b=c.shiftKey?.04:.004,A=a(),k=o(),v=Fe(),V=0,I=0;switch(c.key){case"ArrowRight":V=1;break;case"ArrowLeft":V=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}c.preventDefault();let G={...A},X=["x","y","z"];for(let W=0;W<3;W++){let N=V*v[W].x+I*v[W].y;if(Math.abs(N)>.3){let fe=A[X[W]]+b*Math.sign(N);G[X[W]]=Math.max(0,Math.min(k[X[W]],fe))}}i(G,s()),r()}e.addEventListener("mousedown",H),window.addEventListener("mousemove",ue),window.addEventListener("mouseup",ie),e.addEventListener("touchstart",we,{passive:!1}),e.addEventListener("touchmove",xe,{passive:!1}),e.addEventListener("touchend",ne),e.addEventListener("keydown",Be),e.setAttribute("tabindex","0");function lo(){$(),e.removeEventListener("mousedown",H),window.removeEventListener("mousemove",ue),window.removeEventListener("mouseup",ie),e.removeEventListener("touchstart",we),e.removeEventListener("touchmove",xe),e.removeEventListener("touchend",ne),e.removeEventListener("keydown",Be)}return{state:m,destroy:lo}}var oo=`.box-picker {\r
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
`;var Fo=so,io=!1;function Bo(){if(io||typeof document>"u")return;io=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=oo,document.head.appendChild(e)}function so(e,o={}){let t=o.size??300,a=o.controls??!0,i=o.showInputs??!1,s=o.showModeToggle??!1,d=o.showCorners??!1,n={mode:()=>r,switchMode:l=>$(l),onHexInput:l=>{let p=Pe(l);p?(f=be(P?{r:255-p.r,g:255-p.g,b:255-p.b}:p,r),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)},D(),j(),F()):j()},onChannelInput:(l,p,x)=>{let E=Math.max(0,Math.min(x,p)),B=["x","y","z"],H=E/x;if(P){let ue={...f,[B[l]]:H},ie=re(ue,r);f=be({r:255-ie.r,g:255-ie.g,b:255-ie.b},r)}else f={...f,[B[l]]:H};H>h[B[l]]&&(h={...h,[B[l]]:H}),D(),j(),F()},getRgbForCopy:()=>re(f,r),onRandom:l=>U(l),onReset:()=>U({r:0,g:0,b:0})},r=o.mode??"rgb",u=o.initialColor?be(o.initialColor,r):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},f={...u},y=0,w=()=>o.alpha!==void 0,T=Math.max(0,Math.min(1,o.alpha??1));function m(l){let p=Math.max(0,Math.min(1,l));p!==T&&(T=p,D(),j(),F())}function R(l){let p=Q(),x=se(p);x.s=Math.max(0,Math.min(100,l*100));let E=Te(x);U(P?{r:255-E.r,g:255-E.g,b:255-E.b}:E)}let M=new Set;Bo();let C=document.createElement("div");C.className="box-picker";let z=document.createElement("canvas");z.style.cursor="grab",C.appendChild(z);let g=Ye(z,t),S=null,O=document.createElement("div");O.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",O.appendChild(S),C.appendChild(O),(i||s||d)&&Promise.resolve().then(()=>(ao(),ro)).then(l=>{l.createControls(O,n,{showInputs:i,showModeToggle:s,showCorners:d})}).catch(()=>{}),e.appendChild(C);let _=eo(z,()=>h,l=>{h=l},()=>f,(l,p)=>{f=l,y=p,D(),j()},()=>y,()=>g.scale,()=>g.center,F,w,m,()=>T,()=>L(f,g.scale,g.center),R,()=>se(Q()).s/100),P=!1,Y=!0;z.addEventListener("mouseenter",()=>{Y=!0,F()}),z.addEventListener("mouseleave",()=>{Y=!1,F()}),z.addEventListener("dblclick",()=>{P=!P,He(P),D(),j(),F()});function $(l){if(l===r)return;let p=re(f,r),x={...f},E={...h};r=l;let B=be(p,r),H={x:1,y:1,z:1};f=B,h=H,ee(x,B,E,H,300),j()}let Z=null;function ee(l,p,x,E,B){Z!==null&&cancelAnimationFrame(Z);let H=performance.now();function ue(ie){let we=ie-H,xe=Math.min(1,we/B),ne=1-Math.pow(1-xe,3);f={x:l.x+(p.x-l.x)*ne,y:l.y+(p.y-l.y)*ne,z:l.z+(p.z-l.z)*ne},h={x:x.x+(E.x-x.x)*ne,y:x.y+(E.y-x.y)*ne,z:x.z+(E.z-x.z)*ne},ae(),D(),xe<1?Z=requestAnimationFrame(ue):Z=null}Z=requestAnimationFrame(ue)}let oe=!1;function F(){oe||(oe=!0,requestAnimationFrame(()=>{oe=!1,ae()}))}function ae(){Ze(g,h,f,y,r,_.state,Y,{active:_.state.alphaMode,alpha:T,rgb:Q()},{active:_.state.viewRotating||_.state.ringAlpha>0,sat:se(Q()).s/100,rgb:Te({h:se(Q()).h,s:100,b:100})})}function ce(l,p,x){return Math.round(l+(p-l)*x)}function de(l,p){let x=p>0?255:0,E=Math.abs(p);return ye({r:ce(l.r,x,E),g:ce(l.g,x,E),b:ce(l.b,x,E)})}function K(l,p){let x=Pe(p)||{r:128,g:128,b:128},E=de(x,.35),B=de(x,0),H=de(x,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${E}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${B}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${H}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function ke(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function Re(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function Q(){let l=re(f,r);return P?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function j(){if(!a)return;let l=Q(),p=ye(l);S&&K(S,p);let x=C.querySelector(".box-picker-hex");x&&(x.value=p),pe(),C._updateModeButtons&&C._updateModeButtons()}function pe(){if(!a)return;let l=Ae[r],p=P?be(Q(),r):f,x=Ke(p,r),E=C.querySelectorAll(".box-picker-channel input"),B=C.querySelectorAll(".box-picker-channel label");for(let H=0;H<E.length;H++)B[H].textContent=l[H],B[H].style.color="",B[H].style.textShadow="none",E[H].value=String(x[H])}function D(){let l=Q(),p={rgb:l,hsb:se(l),oklch:Le(l),hex:ye(l),alpha:T};for(let x of M)x(p)}function te(){let l=re(f,r);return{rgb:l,hsb:se(l),oklch:Le(l),hex:ye(l)}}j(),ae();let U=l=>{f=be(l,r),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)};let p=L(f,g.scale,g.center);y=-1;for(let x=J.length-1;x>=0;x--)if(me(x,p,h,g.scale,g.center)){y=x;break}D(),j(),F()};return{getColor:te,getMode:()=>r,setColor:U,setAlpha:m,getAlpha:()=>T,setMode(l){$(l)},on(l,p){M.add(p)},off(l,p){M.delete(p)},destroy(){_.destroy(),Z!==null&&cancelAnimationFrame(Z),e.removeChild(C)}}}return mo(Oo);})();
