var ColorIsBox=(()=>{var Re=Object.defineProperty;var mo=Object.getOwnPropertyDescriptor;var po=Object.getOwnPropertyNames;var go=Object.prototype.hasOwnProperty;var yo=(e,o)=>()=>(e&&(o=e(e=0)),o);var Xe=(e,o)=>{for(var n in o)Re(e,n,{get:o[n],enumerable:!0})},vo=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of po(o))!go.call(e,i)&&i!==n&&Re(e,i,{get:()=>o[i],enumerable:!(r=mo(o,i))||r.enumerable});return e};var Mo=e=>vo(Re({},"__esModule",{value:!0}),e);var uo={};Xe(uo,{createControls:()=>Bo});function co(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function lo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Bo(e,o,n){if(n.showModeToggle){let r=document.createElement("div");r.className="box-picker-mode-toggle";let i=h=>{let f=document.createElement("button");return f.textContent=h.toUpperCase(),f.addEventListener("click",()=>o.switchMode(h)),r.appendChild(f),f},s=i("oklch"),b=i("rgb"),a=i("hsb"),t=()=>{let h=o.mode();b.classList.toggle("active",h==="rgb"),a.classList.toggle("active",h==="hsb"),s.classList.toggle("active",h==="oklch")};t();let x=o.switchMode;o._markActive=t,e.appendChild(r)}if(n.showInputs){let r=document.createElement("input");r.className="box-picker-hex",r.type="text",r.spellcheck=!1,r.addEventListener("change",()=>{let f=r.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),r.addEventListener("click",()=>{co(o.getRgbForCopy()?"#"+Oo(o.getRgbForCopy()):"#ffffff"),lo(r)});let i=document.createElement("div");i.className="box-picker-channels";let s=[],b=[],a=["R","G","B"];for(let f=0;f<3;f++){let g=document.createElement("div");g.className="box-picker-channel";let M=document.createElement("label");M.textContent=a[f];let w=document.createElement("input");w.type="text",w.inputMode="numeric",g.appendChild(M),g.appendChild(w),i.appendChild(g),s.push(w),b.push(M),w.addEventListener("change",()=>{let u=parseFloat(w.value);isNaN(u)||o.onChannelInput(f,u,255)}),w.addEventListener("click",()=>{let u=o.getRgbForCopy();co(`${u.r}, ${u.g}, ${u.b}`),lo(w)})}let t=document.createElement("div");t.className="box-picker-hexrow";let x=document.createElement("div");x.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",x.appendChild(h),x.appendChild(r),t.appendChild(i),t.appendChild(x),e.appendChild(t),e._inputs={hexInput:r,inputs:s,labels:b}}if(n.showCorners){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),b=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:s,g:b,b:a})}),e.appendChild(r);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function Oo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var bo=yo(()=>{});var No={};Xe(No,{createBoxColorPicker:()=>ho,createColorPicker:()=>_o,setBoxInvert:()=>Pe});var we={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},We={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function he(e){let o=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(o,n,r),s=Math.min(o,n,r),b=i-s,a=0;b!==0&&(i===o?a=((n-r)/b+6)%6:i===n?a=(r-o)/b+2:a=(o-n)/b+4,a*=60);let t=i===0?0:b/i*100,x=i*100;return{h:a,s:t,b:x}}function Ee(e){let o=e.h,n=e.s/100,r=e.b/100,i=r*n,s=i*(1-Math.abs(o/60%2-1)),b=r-i,a,t,x;return o<60?(a=i,t=s,x=0):o<120?(a=s,t=i,x=0):o<180?(a=0,t=i,x=s):o<240?(a=0,t=s,x=i):o<300?(a=s,t=0,x=i):(a=i,t=0,x=s),{r:Math.round((a+b)*255),g:Math.round((t+b)*255),b:Math.round((x+b)*255)}}function Ve(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ze(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Co(e){let o=Ve(e.r/255),n=Ve(e.g/255),r=Ve(e.b/255),i=.4122214708*o+.5363325363*n+.0514459929*r,s=.2119034982*o+.6806995451*n+.1073969566*r,b=.0883024619*o+.2817188376*n+.6299787005*r,a=Math.cbrt(i),t=Math.cbrt(s),x=Math.cbrt(b);return{L:.2104542553*a+.793617785*t-.0040720468*x,a:1.9779984951*a-2.428592205*t+.4505937099*x,b:.0259040371*a+.7827717662*t-.808675766*x}}function ko(e,o,n){let r=e+.3963377774*o+.2158037573*n,i=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,b=r*r*r,a=i*i*i,t=s*s*s,x=4.0767416621*b-3.3077115913*a+.2309699292*t,h=-1.2684380046*b+2.6097574011*a-.3413193965*t,f=-.0041960863*b-.7034186147*a+1.707614701*t;return{r:Math.round(Math.max(0,Math.min(1,ze(x)))*255),g:Math.round(Math.max(0,Math.min(1,ze(h)))*255),b:Math.round(Math.max(0,Math.min(1,ze(f)))*255)}}function Ae(e){let o=Co(e),n=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:n,h:n<1e-4?0:r}}function Se(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),r=e.c*Math.sin(o);return ko(e.l,n,r)}function wo(e,o,n){let r=Se({l:e,c:o,h:n});if(je(r))return{l:e,c:o,h:n};let i=0,s=o;for(let b=0;b<20;b++){let a=(i+s)/2;r=Se({l:e,c:a,h:n}),je(r)?i=a:s=a}return{l:e,c:i,h:n}}function je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ve(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function He(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ze=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Ee({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,r=e.y*Ze,i=e.z*359,s=wo(n,r,i);return Se(s)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=he(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Ae(e);return{x:n.l,y:Math.min(n.c/Ze,1),z:n.h/359}}}function Ye(e,o){let n=We[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Qe(e,o,n,r,i,s=!1){let b;e===0?b={x:r,y:o,z:n}:e===1?b={x:o,y:r,z:n}:b={x:o,y:n,z:r};let a=ne(b,i);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var qe=Math.PI/6,Ao=Math.cos(qe),To=Math.sin(qe),Me=!1;function Pe(e){Me=e}var ie=0,se=0;function Ie(e,o){ie=e,se=o}function De(){return{yaw:ie,pitch:se}}function Lo(e){if(ie===0&&se===0)return e;let o=Math.cos(ie),n=Math.sin(ie),r=Math.cos(se),i=Math.sin(se),s=e.x*o+e.z*n,b=e.y,a=-e.x*n+e.z*o,t=b*r-a*i,x=b*i+a*r;return{x:s,y:t,z:x}}function Ro(e){if(ie===0&&se===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(ie),r=Math.sin(ie),i=Math.cos(se),s=Math.sin(se),b=o.x*n+o.z*r,a=o.y,t=-o.x*r+o.z*n,x=a*i-t*s,h=a*s+t*i;return{x:b+.5,y:x+.5,z:h+.5}}function S(e,o,n){let r=Ro(e);return{x:n.x+(r.y-r.x)*Ao*o,y:n.y+r.z*o-(r.x+r.y)*To*o}}function Vo(e){let{x:o,y:n,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:r},{x:o,y:n,z:0},{x:o,y:0,z:r},{x:0,y:n,z:r},{x:o,y:n,z:r}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],zo=64,eo={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function oo(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(n,n),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function to(e,o,n,r,i,s,b=!0,a=null){let{ctx:t,scale:x,center:h,width:f,height:g}=e;t.save(),t.clearRect(0,0,f,g);let M=Vo(o),w=M.map(u=>S(u,x,h));if(Eo(t,x,h,i),t.save(),t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=8,t.shadowOffsetX=0,t.shadowOffsetY=2,Ho(t,w,M,o,i,s.viewRotating),t.restore(),b&&!s.viewRotating&&Po(t,i,x,h),s.viewRotating){let u=S({x:0,y:0,z:0},x,h),A=S({x:1,y:1,z:1},x,h);t.save(),t.setLineDash([6,5]),t.strokeStyle="rgba(107,114,128,.75)",t.lineWidth=1.6,t.beginPath(),t.moveTo(u.x,u.y),t.lineTo(A.x,A.y),t.stroke(),t.restore(),t.beginPath(),t.arc(u.x,u.y,5,0,Math.PI*2),t.fillStyle="#111",t.fill(),t.strokeStyle="rgba(0,0,0,.45)",t.lineWidth=1,t.stroke(),t.beginPath(),t.arc(A.x,A.y,5,0,Math.PI*2),t.fillStyle="#fff",t.fill(),t.strokeStyle="rgba(0,0,0,.5)",t.lineWidth=1,t.stroke(),t.font="9px monospace",t.fillStyle="rgba(51,65,85,.85)",t.textAlign="left",t.fillText("0",u.x+9,u.y+12),t.fillText("255,255,255",A.x+9,A.y+12)}if(r>=0){let u=ne(n,i),A=Me?{r:255-u.r,g:255-u.g,b:255-u.b}:u,C=S(n,x,h);a&&a.active&&Io(t,C,a.rgb,a.alpha),Do(t,C,A)}t.restore()}var So={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Eo(e,o,n,r){let i=S({x:0,y:0,z:0},o,n),s=[S({x:1,y:0,z:0},o,n),S({x:0,y:1,z:0},o,n),S({x:0,y:0,z:1},o,n)],b=So[r];e.lineWidth=1.5;for(let a=0;a<s.length;a++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(s[a].x,s[a].y),e.strokeStyle=b[a],e.stroke()}function Ho(e,o,n,r,i,s){let b=[r.x,r.y,r.z];for(let a=0;a<Y.length;a++){let t=Y[a],x=b[t.fixedAxis],h=b[t.uAxis],f=b[t.vAxis];if(h<.002&&f<.002)continue;let g=Lo(t.normal),M=g.x+g.y+g.z>0,w=t.quad.map(u=>o[u]);M?Je(e,w,t.fixedAxis,x,h,f,i):(e.save(),e.globalAlpha=s?.28:0,Je(e,w,t.fixedAxis,x,h,f,i),e.restore())}}function Je(e,o,n,r,i,s,b){let a=zo,t=document.createElement("canvas");t.width=a,t.height=a;let x=t.getContext("2d"),h=x.createImageData(a,a),f=h.data;for(let j=0;j<a;j++)for(let ee=0;ee<a;ee++){let N=ee/(a-1)*i,me=j/(a-1)*s,K=Qe(n,N,me,r,b,Me),B=(j*a+ee)*4;f[B]=K.r,f[B+1]=K.g,f[B+2]=K.b,f[B+3]=255}x.putImageData(h,0,0);let g=o[0],M=o[1],w=o[2],u=o[3],A=M.x-g.x,C=M.y-g.y,V=u.x-g.x,I=u.y-g.y;e.save(),e.beginPath(),e.moveTo(g.x,g.y),e.lineTo(M.x,M.y),e.lineTo(w.x,w.y),e.lineTo(u.x,u.y),e.closePath(),e.clip();let y=2/a,L=g.x-A*y-V*y,G=g.y-C*y-I*y,F=1+2*y,D=1+2*y;e.transform(A*F/a,C*F/a,V*D/a,I*D/a,L,G),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}function Po(e,o,n,r){let i=we[o],s=Me?[S({x:0,y:1,z:1},n,r),S({x:1,y:0,z:1},n,r),S({x:1,y:1,z:0},n,r)]:[S({x:1,y:0,z:0},n,r),S({x:0,y:1,z:0},n,r),S({x:0,y:0,z:1},n,r)],b=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let t=s[a].x+b[a].x,x=s[a].y+b[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(i[a],t,x)}e.globalAlpha=1,e.restore()}var q=30,ae=13;function Io(e,o,n,r){let i=(q+ae)/2,s=5,b=Math.floor(o.x/s)*s,a=Math.floor(o.y/s)*s,t=q*2+s*2,x=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ae,0,Math.PI*2,!0),e.clip();for(let A=-1;A*s<=t;A++)for(let C=-1;C*s<=t;C++)e.fillStyle=(A+C)%2===0?"#ffffff":"#d9d9d9",e.fillRect(b+A*s,a+C*s,s,s);let h="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",g=e;if(typeof g.createConicGradient=="function"){let A=g.createConicGradient(-Math.PI/2,o.x,o.y);A.addColorStop(0,h),A.addColorStop(1,f),e.fillStyle=A,e.fillRect(b-q,a-q,t,t)}else for(let C=0;C<36;C++){let V=-Math.PI/2+C/36*Math.PI*2,I=-Math.PI/2+(C+1)/36*Math.PI*2,y=(C+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(V)*ae,o.y+Math.sin(V)*ae),e.arc(o.x,o.y,q,V,I),e.arc(o.x,o.y,ae,I,V,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+y.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ae,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let M=x*Math.PI*2,w=o.x+i*Math.sin(M),u=o.y-i*Math.cos(M);e.beginPath(),e.arc(w,u,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Do(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function no(e,o,n,r){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(i[e],n,r)}function Fe(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(n=>{let r=Math.sqrt(n.x*n.x+n.y*n.y);return r>0?{x:n.x/r,y:n.y/r}:{x:0,y:0}})}function xe(e,o,n,r,i){let s=Y[e],b=[n.x,n.y,n.z],a=b[s.uAxis],t=b[s.vAxis];if(a<.002||t<.002)return null;let x={x:0,y:0,z:0},h=["x","y","z"];x[h[s.fixedAxis]]=b[s.fixedAxis];let f={...x};f[h[s.uAxis]]=a;let g={...x};g[h[s.vAxis]]=t;let M=S(x,r,i),w=S(f,r,i),u=S(g,r,i),A=w.x-M.x,C=w.y-M.y,V=u.x-M.x,I=u.y-M.y,y=A*I-C*V;if(Math.abs(y)<1e-6)return null;let L=o.x-M.x,G=o.y-M.y,F=(L*I-G*V)/y,D=(G*A-L*C)/y;return F<-.05||F>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}function ro(e,o,n,r,i){let s=Y[e],b=[n.x,n.y,n.z],a=b[s.uAxis],t=b[s.vAxis];if(a<.002||t<.002)return null;let x={x:0,y:0,z:0},h=["x","y","z"];x[h[s.fixedAxis]]=b[s.fixedAxis];let f={...x};f[h[s.uAxis]]=a;let g={...x};g[h[s.vAxis]]=t;let M=S(x,r,i),w=S(f,r,i),u=S(g,r,i),A=w.x-M.x,C=w.y-M.y,V=u.x-M.x,I=u.y-M.y,y=A*I-C*V;if(Math.abs(y)<1e-6)return null;let L=o.x-M.x,G=o.y-M.y,F=(L*I-G*V)/y,D=(G*A-L*C)/y;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}var ao=22;function io(e,o,n,r,i,s,b,a,t,x,h,f,g,M,w){let u={...eo};function A(c){let d=e.getBoundingClientRect();return{x:c.clientX-d.left,y:c.clientY-d.top}}let C=!1,V=!1,I=!1,y=!1,L=null,G=600,F=null;function D(){j(),F=setTimeout(ee,G)}function j(){F!==null&&(clearTimeout(F),F=null)}function ee(){F=null,u.alphaMode=!1,ue(),p(),y=!0,u.viewRotating=!0,L=null,t()}let N=9,me=1e3,K=null;function B(){Q(),K=setTimeout(pe,me)}function Q(){K!==null&&(clearTimeout(K),K=null),j()}function pe(){K=null,u.alphaMode=!0,p(),ue(),t()}function oe(c){let d=g();return Math.hypot(c.x-d.x,c.y-d.y)}function Te(c){let d=g();return(Math.atan2(c.x-d.x,-(c.y-d.y))+Math.PI*2)%(Math.PI*2)}function ce(c){h(Te(c)/(Math.PI*2)),t()}function ge(c){let d=oe(c);return d>=ae-4&&d<=q+6}function J(c){let d=o(),T=b(),k=a();for(let v=0;v<3;v++){let H=no(v,d,T,k),P=c.x-H.x,O=c.y-H.y;if(P*P+O*O<=ao*ao)return v}return-1}function X(c){let d=o(),T=b(),k=a();for(let v=Y.length-1;v>=0;v--){let H=xe(v,c,d,T,k);if(H)return{faceIndex:v,...H}}return null}let U=-1,Z={x:0,y:0},Ce=0;function le(c,d){U=c,Z=d,Ce=o()[["x","y","z"][c]],u.draggingAxisHandle=c,e.style.cursor="grabbing",t()}function l(c){if(Q(),U<0)return;let d=c.x-Z.x,T=c.y-Z.y,v=Fe()[U],H=b(),O=(d*v.x+T*v.y)/H,$=Math.max(0,Math.min(1,Ce+O)),W=o(),_=["x","y","z"],fe={...W,[_[U]]:$};n(fe);let ye=r(),$e=s(),Ke=$e>=0?Y[$e]:null,Le={...ye};Ke&&U===Ke.fixedAxis?Le[_[U]]=$:Le[_[U]]=Math.min(ye[_[U]],$),i(Le,s()),t()}function p(){U=-1,u.draggingAxisHandle=-1}let m=-1,R=null,E=null,z=!1;function de(c,d,T,k){m=c,u.draggingFace=c,R=null,E=null,z=!1,k&&(z=!0,E={s:d,t:T}),ke(c,d,T),e.style.cursor="crosshair",t()}function re(c,d,T){if(Q(),m<0)return;let k=o(),v=b(),H=a(),P=xe(m,c,k,v,H),O=m;if(!P&&!T){for(let _=Y.length-1;_>=0;_--)if(_!==m&&(P=xe(_,c,k,v,H),P)){O=_;break}}if(!P&&T&&(P=ro(m,c,k,v,H),O=m),!P){t();return}O!==m&&(m=O,u.draggingFace=O,R=null,z=!1,E=null);let{s:$,t:W}=P;if(d&&E){if(z){let _=Math.abs($-E.s),fe=Math.abs(W-E.t),ye=.02;(_>ye||fe>ye)&&(R=_>=fe?"u":"v",z=!1)}R==="u"?W=E.t:R==="v"&&($=E.s)}else d||(R=null,z=!1,E=null);ke(O,$,W),t()}function ke(c,d,T){let k=Y[c],v=o(),H=["x","y","z"],P={...r()};P[H[k.uAxis]]=d*v[H[k.uAxis]],P[H[k.vAxis]]=T*v[H[k.vAxis]],P[H[k.fixedAxis]]=v[H[k.fixedAxis]],i(P,c)}function ue(){m=-1,u.draggingFace=-1,R=null,z=!1,E=null}function te(c){V=!0;let d=A(c);if(x()){if(u.alphaMode){if(oe(d)<=N){u.alphaMode=!1,t();return}if(ge(d)){c.preventDefault(),C=!0,ce(d);return}u.alphaMode=!1,t();return}oe(d)<=N&&B()}let T=J(d);if(T>=0){c.preventDefault(),le(T,d);return}let k=X(d);if(k){c.preventDefault(),de(k.faceIndex,k.s,k.t,c.shiftKey),u.alphaMode||D();return}let v=a();Math.hypot(d.x-v.x,d.y-v.y)>b()+20&&(c.preventDefault(),y=!0,L=d,u.viewRotating=!0,t())}function Be(c){let d=A(c);if(C){c.preventDefault(),ce(d);return}if(y){if(c.preventDefault(),!L){L=d;return}let P=d.x-L.x,O=d.y-L.y,$=De();Ie(Math.max(-60,Math.min(60,$.yaw+P*.12)),Math.max(-60,Math.min(60,$.pitch+O*.12))),P!==0&&M(Math.max(0,Math.min(1,w()+P*.002))),L=d,t();return}if(V&&u.alphaMode&&ge(d)){c.preventDefault(),C=!0,ce(d);return}if(U>=0){c.preventDefault(),l(d);return}if(m>=0){c.preventDefault(),re(d,c.shiftKey,c.altKey);return}let T=J(d),k=X(d),v=T,H=T>=0?-1:k?k.faceIndex:-1;(v!==u.hoveredAxisHandle||H!==u.hoveredFace)&&(u.hoveredAxisHandle=v,u.hoveredFace=H,e.style.cursor=v>=0?"grab":H>=0?"crosshair":"default",t())}function Oe(c){Q(),V=!1,C=!1,y&&(y=!1,u.viewRotating=!1,L=null,t());let d=U>=0||m>=0;p(),ue(),d&&(u.hoveredAxisHandle=-1,u.hoveredFace=-1,e.style.cursor="default",t())}function _e(c){if(c.touches.length!==1)return;I=!0;let d=A(c.touches[0]);if(x()){if(u.alphaMode){if(oe(d)<=N){u.alphaMode=!1,t();return}if(ge(d)){c.preventDefault(),C=!0,ce(d);return}u.alphaMode=!1,t();return}oe(d)<=N&&B()}let T=J(d);if(T>=0){c.preventDefault(),le(T,d);return}let k=X(d);if(k){c.preventDefault(),de(k.faceIndex,k.s,k.t,!1),u.alphaMode||D();return}let v=a();Math.hypot(d.x-v.x,d.y-v.y)>b()+20&&(c.preventDefault(),y=!0,L=d,u.viewRotating=!0,t())}function Ge(c){if(c.touches.length!==1)return;let d=A(c.touches[0]);if(C)c.preventDefault(),ce(d);else if(I&&u.alphaMode&&ge(d))c.preventDefault(),C=!0,ce(d);else if(U>=0)c.preventDefault(),l(d);else if(y){if(c.preventDefault(),!L){L=d;return}let T=d.x-L.x,k=d.y-L.y,v=De();Ie(Math.max(-60,Math.min(60,v.yaw+T*.12)),Math.max(-60,Math.min(60,v.pitch+k*.12))),T!==0&&M(Math.max(0,Math.min(1,w()+T*.002))),L=d,t()}else m>=0&&(c.preventDefault(),re(d,!1,!1))}function Ne(c){Q(),I=!1,C=!1,y&&(y=!1,u.viewRotating=!1,L=null,t()),p(),ue(),t()}function Ue(c){if(u.alphaMode){if(c.key==="Escape"){u.alphaMode=!1,t();return}if(c.key==="ArrowUp"||c.key==="ArrowRight"){c.preventDefault(),h(Math.min(1,f()+(c.shiftKey?.08:.02))),t();return}if(c.key==="ArrowDown"||c.key==="ArrowLeft"){c.preventDefault(),h(Math.max(0,f()-(c.shiftKey?.08:.02))),t();return}}let d=c.shiftKey?.04:.004,T=r(),k=o(),v=Fe(),H=0,P=0;switch(c.key){case"ArrowRight":H=1;break;case"ArrowLeft":H=-1;break;case"ArrowUp":P=-1;break;case"ArrowDown":P=1;break;default:return}c.preventDefault();let O={...T},$=["x","y","z"];for(let W=0;W<3;W++){let _=H*v[W].x+P*v[W].y;if(Math.abs(_)>.3){let fe=T[$[W]]+d*Math.sign(_);O[$[W]]=Math.max(0,Math.min(k[$[W]],fe))}}i(O,s()),t()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",Be),window.addEventListener("mouseup",Oe),e.addEventListener("touchstart",_e,{passive:!1}),e.addEventListener("touchmove",Ge,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",Ue),e.setAttribute("tabindex","0");function xo(){Q(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",Oe),e.removeEventListener("touchstart",_e),e.removeEventListener("touchmove",Ge),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",Ue)}return{state:u,destroy:xo}}var so=`.box-picker {\r
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
`;var _o=ho,fo=!1;function Go(){if(fo||typeof document>"u")return;fo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=so,document.head.appendChild(e)}function ho(e,o={}){let n=o.size??300,r=o.controls??!0,i=o.showInputs??!1,s=o.showModeToggle??!1,b=o.showCorners??!1,a={mode:()=>t,switchMode:l=>ee(l),onHexInput:l=>{let p=He(l);p?(f=be(D?{r:255-p.r,g:255-p.g,b:255-p.b}:p,t),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)},Z(),X(),B()):X()},onChannelInput:(l,p,m)=>{let R=Math.max(0,Math.min(m,p)),E=["x","y","z"],z=R/m;if(D){let de={...f,[E[l]]:z},re=ne(de,t);f=be({r:255-re.r,g:255-re.g,b:255-re.b},t)}else f={...f,[E[l]]:z};z>h[E[l]]&&(h={...h,[E[l]]:z}),Z(),X(),B()},getRgbForCopy:()=>ne(f,t),onRandom:l=>le(l),onReset:()=>le({r:0,g:0,b:0})},t=o.mode??"rgb",x=o.initialColor?be(o.initialColor,t):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},f={...x},g=0,M=()=>o.alpha!==void 0,w=Math.max(0,Math.min(1,o.alpha??1));function u(l){let p=Math.max(0,Math.min(1,l));p!==w&&(w=p,Z(),X(),B())}function A(l){let p=J(),m=he(p);m.s=Math.max(0,Math.min(100,l*100));let R=Ee(m);le(D?{r:255-R.r,g:255-R.g,b:255-R.b}:R)}let C=new Set;Go();let V=document.createElement("div");V.className="box-picker";let I=document.createElement("canvas");I.style.cursor="grab",V.appendChild(I);let y=oo(I,n),L=null,G=document.createElement("div");G.className="box-picker-controls",L=document.createElement("div"),L.className="box-picker-swatch",G.appendChild(L),V.appendChild(G),(i||s||b)&&Promise.resolve().then(()=>(bo(),uo)).then(l=>{l.createControls(G,a,{showInputs:i,showModeToggle:s,showCorners:b})}).catch(()=>{}),e.appendChild(V);let F=io(I,()=>h,l=>{h=l},()=>f,(l,p)=>{f=l,g=p,Z(),X()},()=>g,()=>y.scale,()=>y.center,B,M,u,()=>w,()=>S(f,y.scale,y.center),A,()=>he(J()).s/100),D=!1,j=!0;I.addEventListener("mouseenter",()=>{j=!0,B()}),I.addEventListener("mouseleave",()=>{j=!1,B()}),I.addEventListener("dblclick",()=>{D=!D,Pe(D),Z(),X(),B()});function ee(l){if(l===t)return;let p=ne(f,t),m={...f},R={...h};t=l;let E=be(p,t),z={x:1,y:1,z:1};f=E,h=z,me(m,E,R,z,300),X()}let N=null;function me(l,p,m,R,E){N!==null&&cancelAnimationFrame(N);let z=performance.now();function de(re){let ke=re-z,ue=Math.min(1,ke/E),te=1-Math.pow(1-ue,3);f={x:l.x+(p.x-l.x)*te,y:l.y+(p.y-l.y)*te,z:l.z+(p.z-l.z)*te},h={x:m.x+(R.x-m.x)*te,y:m.y+(R.y-m.y)*te,z:m.z+(R.z-m.z)*te},Q(),Z(),ue<1?N=requestAnimationFrame(de):N=null}N=requestAnimationFrame(de)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,Q()}))}function Q(){to(y,h,f,g,t,F.state,j,{active:F.state.alphaMode,alpha:w,rgb:J()})}function pe(l,p,m){return Math.round(l+(p-l)*m)}function oe(l,p){let m=p>0?255:0,R=Math.abs(p);return ve({r:pe(l.r,m,R),g:pe(l.g,m,R),b:pe(l.b,m,R)})}function Te(l,p){let m=He(p)||{r:128,g:128,b:128},R=oe(m,.35),E=oe(m,0),z=oe(m,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${R}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${E}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${z}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function ce(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function ge(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function J(){let l=ne(f,t);return D?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function X(){if(!r)return;let l=J(),p=ve(l);L&&Te(L,p);let m=V.querySelector(".box-picker-hex");m&&(m.value=p),U(),V._updateModeButtons&&V._updateModeButtons()}function U(){if(!r)return;let l=we[t],p=D?be(J(),t):f,m=Ye(p,t),R=V.querySelectorAll(".box-picker-channel input"),E=V.querySelectorAll(".box-picker-channel label");for(let z=0;z<R.length;z++)E[z].textContent=l[z],E[z].style.color="",E[z].style.textShadow="none",R[z].value=String(m[z])}function Z(){let l=J(),p={rgb:l,hsb:he(l),oklch:Ae(l),hex:ve(l),alpha:w};for(let m of C)m(p)}function Ce(){let l=ne(f,t);return{rgb:l,hsb:he(l),oklch:Ae(l),hex:ve(l)}}X(),Q();let le=l=>{f=be(l,t),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)};let p=S(f,y.scale,y.center);g=-1;for(let m=Y.length-1;m>=0;m--)if(xe(m,p,h,y.scale,y.center)){g=m;break}Z(),X(),B()};return{getColor:Ce,getMode:()=>t,setColor:le,setAlpha:u,getAlpha:()=>w,setMode(l){ee(l)},on(l,p){C.add(p)},off(l,p){C.delete(p)},destroy(){F.destroy(),N!==null&&cancelAnimationFrame(N),e.removeChild(V)}}}return Mo(No);})();
