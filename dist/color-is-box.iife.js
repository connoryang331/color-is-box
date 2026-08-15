var ColorIsBox=(()=>{var Ve=Object.defineProperty;var po=Object.getOwnPropertyDescriptor;var go=Object.getOwnPropertyNames;var yo=Object.prototype.hasOwnProperty;var vo=(e,o)=>()=>(e&&(o=e(e=0)),o);var Xe=(e,o)=>{for(var n in o)Ve(e,n,{get:o[n],enumerable:!0})},Mo=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of go(o))!yo.call(e,i)&&i!==n&&Ve(e,i,{get:()=>o[i],enumerable:!(r=po(o,i))||r.enumerable});return e};var Co=e=>Mo(Ve({},"__esModule",{value:!0}),e);var bo={};Xe(bo,{createControls:()=>Oo});function lo(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function uo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Oo(e,o,n){if(n.showModeToggle){let r=document.createElement("div");r.className="box-picker-mode-toggle";let i=h=>{let f=document.createElement("button");return f.textContent=h.toUpperCase(),f.addEventListener("click",()=>o.switchMode(h)),r.appendChild(f),f},c=i("oklch"),b=i("rgb"),a=i("hsb"),t=()=>{let h=o.mode();b.classList.toggle("active",h==="rgb"),a.classList.toggle("active",h==="hsb"),c.classList.toggle("active",h==="oklch")};t();let x=o.switchMode;o._markActive=t,e.appendChild(r)}if(n.showInputs){let r=document.createElement("input");r.className="box-picker-hex",r.type="text",r.spellcheck=!1,r.addEventListener("change",()=>{let f=r.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),r.addEventListener("click",()=>{lo(o.getRgbForCopy()?"#"+_o(o.getRgbForCopy()):"#ffffff"),uo(r)});let i=document.createElement("div");i.className="box-picker-channels";let c=[],b=[],a=["R","G","B"];for(let f=0;f<3;f++){let y=document.createElement("div");y.className="box-picker-channel";let k=document.createElement("label");k.textContent=a[f];let A=document.createElement("input");A.type="text",A.inputMode="numeric",y.appendChild(k),y.appendChild(A),i.appendChild(y),c.push(A),b.push(k),A.addEventListener("change",()=>{let u=parseFloat(A.value);isNaN(u)||o.onChannelInput(f,u,255)}),A.addEventListener("click",()=>{let u=o.getRgbForCopy();lo(`${u.r}, ${u.g}, ${u.b}`),uo(A)})}let t=document.createElement("div");t.className="box-picker-hexrow";let x=document.createElement("div");x.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",x.appendChild(h),x.appendChild(r),t.appendChild(i),t.appendChild(x),e.appendChild(t),e._inputs={hexInput:r,inputs:c,labels:b}}if(n.showCorners){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),b=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:c,g:b,b:a})}),e.appendChild(r);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function _o(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var fo=vo(()=>{});var Uo={};Xe(Uo,{createBoxColorPicker:()=>xo,createColorPicker:()=>Go,setBoxInvert:()=>Ie});var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},We={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function he(e){let o=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(o,n,r),c=Math.min(o,n,r),b=i-c,a=0;b!==0&&(i===o?a=((n-r)/b+6)%6:i===n?a=(r-o)/b+2:a=(o-n)/b+4,a*=60);let t=i===0?0:b/i*100,x=i*100;return{h:a,s:t,b:x}}function He(e){let o=e.h,n=e.s/100,r=e.b/100,i=r*n,c=i*(1-Math.abs(o/60%2-1)),b=r-i,a,t,x;return o<60?(a=i,t=c,x=0):o<120?(a=c,t=i,x=0):o<180?(a=0,t=i,x=c):o<240?(a=0,t=c,x=i):o<300?(a=c,t=0,x=i):(a=i,t=0,x=c),{r:Math.round((a+b)*255),g:Math.round((t+b)*255),b:Math.round((x+b)*255)}}function Re(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Se(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function ko(e){let o=Re(e.r/255),n=Re(e.g/255),r=Re(e.b/255),i=.4122214708*o+.5363325363*n+.0514459929*r,c=.2119034982*o+.6806995451*n+.1073969566*r,b=.0883024619*o+.2817188376*n+.6299787005*r,a=Math.cbrt(i),t=Math.cbrt(c),x=Math.cbrt(b);return{L:.2104542553*a+.793617785*t-.0040720468*x,a:1.9779984951*a-2.428592205*t+.4505937099*x,b:.0259040371*a+.7827717662*t-.808675766*x}}function wo(e,o,n){let r=e+.3963377774*o+.2158037573*n,i=e-.1055613458*o-.0638541728*n,c=e-.0894841775*o-1.291485548*n,b=r*r*r,a=i*i*i,t=c*c*c,x=4.0767416621*b-3.3077115913*a+.2309699292*t,h=-1.2684380046*b+2.6097574011*a-.3413193965*t,f=-.0041960863*b-.7034186147*a+1.707614701*t;return{r:Math.round(Math.max(0,Math.min(1,Se(x)))*255),g:Math.round(Math.max(0,Math.min(1,Se(h)))*255),b:Math.round(Math.max(0,Math.min(1,Se(f)))*255)}}function Te(e){let o=ko(e),n=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:n,h:n<1e-4?0:r}}function Ee(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),r=e.c*Math.sin(o);return wo(e.l,n,r)}function Ao(e,o,n){let r=Ee({l:e,c:o,h:n});if(je(r))return{l:e,c:o,h:n};let i=0,c=o;for(let b=0;b<20;b++){let a=(i+c)/2;r=Ee({l:e,c:a,h:n}),je(r)?i=a:c=a}return{l:e,c:i,h:n}}function je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ve(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ze=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return He({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,r=e.y*Ze,i=e.z*359,c=Ao(n,r,i);return Ee(c)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=he(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Te(e);return{x:n.l,y:Math.min(n.c/Ze,1),z:n.h/359}}}function Ye(e,o){let n=We[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Qe(e,o,n,r,i,c=!1){let b;e===0?b={x:r,y:o,z:n}:e===1?b={x:o,y:r,z:n}:b={x:o,y:n,z:r};let a=ne(b,i);return c?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var qe=Math.PI/6,To=Math.cos(qe),zo=Math.sin(qe),Me=!1;function Ie(e){Me=e}var re=0,ae=0;function Ce(e,o){re=e,ae=o}function De(){return{yaw:re,pitch:ae}}function eo(){re=0,ae=0}function Lo(e){if(re===0&&ae===0)return e;let o=Math.cos(re),n=Math.sin(re),r=Math.cos(ae),i=Math.sin(ae),c=e.x*o+e.z*n,b=e.y,a=-e.x*n+e.z*o,t=b*r-a*i,x=b*i+a*r;return{x:c,y:t,z:x}}function Vo(e){if(re===0&&ae===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(re),r=Math.sin(re),i=Math.cos(ae),c=Math.sin(ae),b=o.x*n+o.z*r,a=o.y,t=-o.x*r+o.z*n,x=a*i-t*c,h=a*c+t*i;return{x:b+.5,y:x+.5,z:h+.5}}function S(e,o,n){let r=Vo(e);return{x:n.x+(r.y-r.x)*To*o,y:n.y+r.z*o-(r.x+r.y)*zo*o}}function Ro(e){let{x:o,y:n,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:r},{x:o,y:n,z:0},{x:o,y:0,z:r},{x:0,y:n,z:r},{x:o,y:n,z:r}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],So=64,oo={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function to(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(n,n),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function no(e,o,n,r,i,c,b=!0,a=null){let{ctx:t,scale:x,center:h,width:f,height:y}=e;t.save(),t.clearRect(0,0,f,y);let k=Ro(o),A=k.map(u=>S(u,x,h));if(Ho(t,x,h,i),t.save(),t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=8,t.shadowOffsetX=0,t.shadowOffsetY=2,Po(t,A,k,o,i,c.viewRotating),t.restore(),b&&!c.viewRotating&&Io(t,i,x,h),c.viewRotating){let u=S({x:0,y:0,z:0},x,h),v=S({x:1,y:1,z:1},x,h);t.beginPath(),t.arc(u.x,u.y,7,0,Math.PI*2),t.fillStyle="#000",t.fill(),t.strokeStyle="rgba(255,255,255,.9)",t.lineWidth=1.5,t.stroke(),t.beginPath(),t.arc(v.x,v.y,7,0,Math.PI*2),t.fillStyle="#fff",t.fill(),t.strokeStyle="rgba(0,0,0,.55)",t.lineWidth=1.2,t.stroke(),t.font="9px monospace",t.fillStyle="rgba(51,65,85,.85)",t.textAlign="left",t.fillText("0",u.x+10,u.y+12),t.fillText("255,255,255",v.x+10,v.y+12)}if(c.viewRotating){let u=[{p:{x:0,y:0,z:0},c:"#000000",r:7},{p:{x:1,y:1,z:1},c:"#ffffff",r:7},{p:{x:1,y:0,z:0},c:"#ff0000",r:5},{p:{x:0,y:1,z:0},c:"#00cc00",r:5},{p:{x:0,y:0,z:1},c:"#0000ff",r:5},{p:{x:1,y:1,z:0},c:"#ffff00",r:5},{p:{x:0,y:1,z:1},c:"#00dddd",r:5},{p:{x:1,y:0,z:1},c:"#ff00aa",r:5}];for(let v of u){let g=S(v.p,x,h);t.beginPath(),t.arc(g.x,g.y,v.r,0,Math.PI*2),t.fillStyle=v.c,t.fill(),t.strokeStyle=v.c==="#000000"?"rgba(255,255,255,.9)":"rgba(0,0,0,.45)",t.lineWidth=1.2,t.stroke()}}if(r>=0){let u=ne(n,i),v=Me?{r:255-u.r,g:255-u.g,b:255-u.b}:u,g=S(n,x,h);a&&a.active&&Do(t,g,a.rgb,a.alpha),Fo(t,g,v)}t.restore()}var Eo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Ho(e,o,n,r){let i=S({x:0,y:0,z:0},o,n),c=[S({x:1,y:0,z:0},o,n),S({x:0,y:1,z:0},o,n),S({x:0,y:0,z:1},o,n)],b=Eo[r];e.lineWidth=1.5;for(let a=0;a<c.length;a++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(c[a].x,c[a].y),e.strokeStyle=b[a],e.stroke()}function Po(e,o,n,r,i,c){let b=[r.x,r.y,r.z];for(let a=0;a<Y.length;a++){let t=Y[a],x=b[t.fixedAxis],h=b[t.uAxis],f=b[t.vAxis];if(h<.002&&f<.002)continue;let y=Lo(t.normal),k=y.x+y.y+y.z>0,A=t.quad.map(u=>o[u]);k?Je(e,A,t.fixedAxis,x,h,f,i):(e.save(),e.globalAlpha=0,Je(e,A,t.fixedAxis,x,h,f,i),e.restore())}}function Je(e,o,n,r,i,c,b){let a=So,t=document.createElement("canvas");t.width=a,t.height=a;let x=t.getContext("2d"),h=x.createImageData(a,a),f=h.data;for(let j=0;j<a;j++)for(let ee=0;ee<a;ee++){let N=ee/(a-1)*i,me=j/(a-1)*c,K=Qe(n,N,me,r,b,Me),B=(j*a+ee)*4;f[B]=K.r,f[B+1]=K.g,f[B+2]=K.b,f[B+3]=255}x.putImageData(h,0,0);let y=o[0],k=o[1],A=o[2],u=o[3],v=k.x-y.x,g=k.y-y.y,V=u.x-y.x,I=u.y-y.y;e.save(),e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(u.x,u.y),e.closePath(),e.clip();let M=2/a,z=y.x-v*M-V*M,G=y.y-g*M-I*M,F=1+2*M,D=1+2*M;e.transform(v*F/a,g*F/a,V*D/a,I*D/a,z,G),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}function Io(e,o,n,r){let i=Ae[o],c=Me?[S({x:0,y:1,z:1},n,r),S({x:1,y:0,z:1},n,r),S({x:1,y:1,z:0},n,r)]:[S({x:1,y:0,z:0},n,r),S({x:0,y:1,z:0},n,r),S({x:0,y:0,z:1},n,r)],b=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let t=c[a].x+b[a].x,x=c[a].y+b[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(i[a],t,x)}e.globalAlpha=1,e.restore()}var q=30,se=13;function Do(e,o,n,r){let i=(q+se)/2,c=5,b=Math.floor(o.x/c)*c,a=Math.floor(o.y/c)*c,t=q*2+c*2,x=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,se,0,Math.PI*2,!0),e.clip();for(let v=-1;v*c<=t;v++)for(let g=-1;g*c<=t;g++)e.fillStyle=(v+g)%2===0?"#ffffff":"#d9d9d9",e.fillRect(b+v*c,a+g*c,c,c);let h="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",y=e;if(typeof y.createConicGradient=="function"){let v=y.createConicGradient(-Math.PI/2,o.x,o.y);v.addColorStop(0,h),v.addColorStop(1,f),e.fillStyle=v,e.fillRect(b-q,a-q,t,t)}else for(let g=0;g<36;g++){let V=-Math.PI/2+g/36*Math.PI*2,I=-Math.PI/2+(g+1)/36*Math.PI*2,M=(g+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(V)*se,o.y+Math.sin(V)*se),e.arc(o.x,o.y,q,V,I),e.arc(o.x,o.y,se,I,V,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+M.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,se,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=x*Math.PI*2,A=o.x+i*Math.sin(k),u=o.y-i*Math.cos(k);e.beginPath(),e.arc(A,u,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Fo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function ro(e,o,n,r){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(i[e],n,r)}function Fe(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(n=>{let r=Math.sqrt(n.x*n.x+n.y*n.y);return r>0?{x:n.x/r,y:n.y/r}:{x:0,y:0}})}function xe(e,o,n,r,i){let c=Y[e],b=[n.x,n.y,n.z],a=b[c.uAxis],t=b[c.vAxis];if(a<.002||t<.002)return null;let x={x:0,y:0,z:0},h=["x","y","z"];x[h[c.fixedAxis]]=b[c.fixedAxis];let f={...x};f[h[c.uAxis]]=a;let y={...x};y[h[c.vAxis]]=t;let k=S(x,r,i),A=S(f,r,i),u=S(y,r,i),v=A.x-k.x,g=A.y-k.y,V=u.x-k.x,I=u.y-k.y,M=v*I-g*V;if(Math.abs(M)<1e-6)return null;let z=o.x-k.x,G=o.y-k.y,F=(z*I-G*V)/M,D=(G*v-z*g)/M;return F<-.05||F>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}function ao(e,o,n,r,i){let c=Y[e],b=[n.x,n.y,n.z],a=b[c.uAxis],t=b[c.vAxis];if(a<.002||t<.002)return null;let x={x:0,y:0,z:0},h=["x","y","z"];x[h[c.fixedAxis]]=b[c.fixedAxis];let f={...x};f[h[c.uAxis]]=a;let y={...x};y[h[c.vAxis]]=t;let k=S(x,r,i),A=S(f,r,i),u=S(y,r,i),v=A.x-k.x,g=A.y-k.y,V=u.x-k.x,I=u.y-k.y,M=v*I-g*V;if(Math.abs(M)<1e-6)return null;let z=o.x-k.x,G=o.y-k.y,F=(z*I-G*V)/M,D=(G*v-z*g)/M;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}var io=22;function so(e,o,n,r,i,c,b,a,t,x,h,f,y,k,A){let u={...oo};function v(s){let d=e.getBoundingClientRect();return{x:s.clientX-d.left,y:s.clientY-d.top}}let g=!1,V=!1,I=!1,M=!1,z=null,G=600,F=null;function D(){j(),F=setTimeout(ee,G)}function j(){F!==null&&(clearTimeout(F),F=null)}function ee(){F=null,u.alphaMode=!1,ue(),p(),M=!0,u.viewRotating=!0,z=null,t()}let N=9,me=1e3,K=null;function B(){Q(),K=setTimeout(pe,me)}function Q(){K!==null&&(clearTimeout(K),K=null),j()}function pe(){K=null,u.alphaMode=!0,p(),ue(),t()}function oe(s){let d=y();return Math.hypot(s.x-d.x,s.y-d.y)}function ze(s){let d=y();return(Math.atan2(s.x-d.x,-(s.y-d.y))+Math.PI*2)%(Math.PI*2)}function ce(s){h(ze(s)/(Math.PI*2)),t()}function ge(s){let d=oe(s);return d>=se-4&&d<=q+6}function J(s){let d=o(),T=b(),w=a();for(let C=0;C<3;C++){let H=ro(C,d,T,w),P=s.x-H.x,O=s.y-H.y;if(P*P+O*O<=io*io)return C}return-1}function X(s){let d=o(),T=b(),w=a();for(let C=Y.length-1;C>=0;C--){let H=xe(C,s,d,T,w);if(H)return{faceIndex:C,...H}}return null}let U=-1,Z={x:0,y:0},ke=0;function le(s,d){U=s,Z=d,ke=o()[["x","y","z"][s]],u.draggingAxisHandle=s,e.style.cursor="grabbing",t()}function l(s){if(Q(),U<0)return;let d=s.x-Z.x,T=s.y-Z.y,C=Fe()[U],H=b(),O=(d*C.x+T*C.y)/H,$=Math.max(0,Math.min(1,ke+O)),W=o(),_=["x","y","z"],fe={...W,[_[U]]:$};n(fe);let ye=r(),$e=c(),Ke=$e>=0?Y[$e]:null,Le={...ye};Ke&&U===Ke.fixedAxis?Le[_[U]]=$:Le[_[U]]=Math.min(ye[_[U]],$),i(Le,c()),t()}function p(){U=-1,u.draggingAxisHandle=-1}let m=-1,L=null,E=null,R=!1;function de(s,d,T,w){m=s,u.draggingFace=s,L=null,E=null,R=!1,w&&(R=!0,E={s:d,t:T}),we(s,d,T),e.style.cursor="crosshair",t()}function ie(s,d,T){if(Q(),m<0)return;let w=o(),C=b(),H=a(),P=xe(m,s,w,C,H),O=m;if(!P&&!T){for(let _=Y.length-1;_>=0;_--)if(_!==m&&(P=xe(_,s,w,C,H),P)){O=_;break}}if(!P&&T&&(P=ao(m,s,w,C,H),O=m),!P){t();return}O!==m&&(m=O,u.draggingFace=O,L=null,R=!1,E=null);let{s:$,t:W}=P;if(d&&E){if(R){let _=Math.abs($-E.s),fe=Math.abs(W-E.t),ye=.02;(_>ye||fe>ye)&&(L=_>=fe?"u":"v",R=!1)}L==="u"?W=E.t:L==="v"&&($=E.s)}else d||(L=null,R=!1,E=null);we(O,$,W),t()}function we(s,d,T){let w=Y[s],C=o(),H=["x","y","z"],P={...r()};P[H[w.uAxis]]=d*C[H[w.uAxis]],P[H[w.vAxis]]=T*C[H[w.vAxis]],P[H[w.fixedAxis]]=C[H[w.fixedAxis]],i(P,s)}function ue(){m=-1,u.draggingFace=-1,L=null,R=!1,E=null}function te(s){V=!0;let d=v(s);if(x()){if(u.alphaMode){if(oe(d)<=N){u.alphaMode=!1,t();return}if(ge(d)){s.preventDefault(),g=!0,ce(d);return}u.alphaMode=!1,t();return}oe(d)<=N&&B()}let T=J(d);if(T>=0){s.preventDefault(),le(T,d);return}let w=X(d);if(w){s.preventDefault(),de(w.faceIndex,w.s,w.t,s.shiftKey),u.alphaMode||D();return}let C=a();Math.hypot(d.x-C.x,d.y-C.y)>b()+20&&(s.preventDefault(),M=!0,z=d,u.viewRotating=!0,t())}function Be(s){let d=v(s);if(g){s.preventDefault(),ce(d);return}if(M){if(s.preventDefault(),!z){z=d;return}let P=d.x-z.x,O=d.y-z.y,$=De();Ce(Math.max(-60,Math.min(60,$.yaw+P*.12)),Math.max(-60,Math.min(60,$.pitch+O*.12))),P!==0&&k(Math.max(0,Math.min(1,A()+P*.002))),z=d,t();return}if(V&&u.alphaMode&&ge(d)){s.preventDefault(),g=!0,ce(d);return}if(U>=0){s.preventDefault(),l(d);return}if(m>=0){s.preventDefault(),ie(d,s.shiftKey,s.altKey);return}let T=J(d),w=X(d),C=T,H=T>=0?-1:w?w.faceIndex:-1;(C!==u.hoveredAxisHandle||H!==u.hoveredFace)&&(u.hoveredAxisHandle=C,u.hoveredFace=H,e.style.cursor=C>=0?"grab":H>=0?"crosshair":"default",t())}function Oe(s){Q(),V=!1,g=!1,M&&(M=!1,u.viewRotating=!1,z=null,t());let d=U>=0||m>=0;p(),ue(),d&&(u.hoveredAxisHandle=-1,u.hoveredFace=-1,e.style.cursor="default",t())}function _e(s){if(s.touches.length!==1)return;I=!0;let d=v(s.touches[0]);if(x()){if(u.alphaMode){if(oe(d)<=N){u.alphaMode=!1,t();return}if(ge(d)){s.preventDefault(),g=!0,ce(d);return}u.alphaMode=!1,t();return}oe(d)<=N&&B()}let T=J(d);if(T>=0){s.preventDefault(),le(T,d);return}let w=X(d);if(w){s.preventDefault(),de(w.faceIndex,w.s,w.t,!1),u.alphaMode||D();return}let C=a();Math.hypot(d.x-C.x,d.y-C.y)>b()+20&&(s.preventDefault(),M=!0,z=d,u.viewRotating=!0,t())}function Ge(s){if(s.touches.length!==1)return;let d=v(s.touches[0]);if(g)s.preventDefault(),ce(d);else if(I&&u.alphaMode&&ge(d))s.preventDefault(),g=!0,ce(d);else if(U>=0)s.preventDefault(),l(d);else if(M){if(s.preventDefault(),!z){z=d;return}let T=d.x-z.x,w=d.y-z.y,C=De();Ce(Math.max(-60,Math.min(60,C.yaw+T*.12)),Math.max(-60,Math.min(60,C.pitch+w*.12))),T!==0&&k(Math.max(0,Math.min(1,A()+T*.002))),z=d,t()}else m>=0&&(s.preventDefault(),ie(d,!1,!1))}function Ne(s){Q(),I=!1,g=!1,M&&(M=!1,u.viewRotating=!1,z=null,t()),p(),ue(),t()}function Ue(s){if(s.key==="1"){Ce(Math.PI/4,0),t();return}if(s.key==="0"){eo(),t();return}if(s.key==="2"){Ce(.95,-.54),t();return}if(u.alphaMode){if(s.key==="Escape"){u.alphaMode=!1,t();return}if(s.key==="ArrowUp"||s.key==="ArrowRight"){s.preventDefault(),h(Math.min(1,f()+(s.shiftKey?.08:.02))),t();return}if(s.key==="ArrowDown"||s.key==="ArrowLeft"){s.preventDefault(),h(Math.max(0,f()-(s.shiftKey?.08:.02))),t();return}}let d=s.shiftKey?.04:.004,T=r(),w=o(),C=Fe(),H=0,P=0;switch(s.key){case"ArrowRight":H=1;break;case"ArrowLeft":H=-1;break;case"ArrowUp":P=-1;break;case"ArrowDown":P=1;break;default:return}s.preventDefault();let O={...T},$=["x","y","z"];for(let W=0;W<3;W++){let _=H*C[W].x+P*C[W].y;if(Math.abs(_)>.3){let fe=T[$[W]]+d*Math.sign(_);O[$[W]]=Math.max(0,Math.min(w[$[W]],fe))}}i(O,c()),t()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",Be),window.addEventListener("mouseup",Oe),e.addEventListener("touchstart",_e,{passive:!1}),e.addEventListener("touchmove",Ge,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",Ue),e.setAttribute("tabindex","0");function mo(){Q(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",Oe),e.removeEventListener("touchstart",_e),e.removeEventListener("touchmove",Ge),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",Ue)}return{state:u,destroy:mo}}var co=`.box-picker {\r
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
`;var Go=xo,ho=!1;function No(){if(ho||typeof document>"u")return;ho=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=co,document.head.appendChild(e)}function xo(e,o={}){let n=o.size??300,r=o.controls??!0,i=o.showInputs??!1,c=o.showModeToggle??!1,b=o.showCorners??!1,a={mode:()=>t,switchMode:l=>ee(l),onHexInput:l=>{let p=Pe(l);p?(f=be(D?{r:255-p.r,g:255-p.g,b:255-p.b}:p,t),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)},Z(),X(),B()):X()},onChannelInput:(l,p,m)=>{let L=Math.max(0,Math.min(m,p)),E=["x","y","z"],R=L/m;if(D){let de={...f,[E[l]]:R},ie=ne(de,t);f=be({r:255-ie.r,g:255-ie.g,b:255-ie.b},t)}else f={...f,[E[l]]:R};R>h[E[l]]&&(h={...h,[E[l]]:R}),Z(),X(),B()},getRgbForCopy:()=>ne(f,t),onRandom:l=>le(l),onReset:()=>le({r:0,g:0,b:0})},t=o.mode??"rgb",x=o.initialColor?be(o.initialColor,t):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},f={...x},y=0,k=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function u(l){let p=Math.max(0,Math.min(1,l));p!==A&&(A=p,Z(),X(),B())}function v(l){let p=J(),m=he(p);m.s=Math.max(0,Math.min(100,l*100));let L=He(m);le(D?{r:255-L.r,g:255-L.g,b:255-L.b}:L)}let g=new Set;No();let V=document.createElement("div");V.className="box-picker";let I=document.createElement("canvas");I.style.cursor="grab",V.appendChild(I);let M=to(I,n),z=null,G=document.createElement("div");G.className="box-picker-controls",z=document.createElement("div"),z.className="box-picker-swatch",G.appendChild(z),V.appendChild(G),(i||c||b)&&Promise.resolve().then(()=>(fo(),bo)).then(l=>{l.createControls(G,a,{showInputs:i,showModeToggle:c,showCorners:b})}).catch(()=>{}),e.appendChild(V);let F=so(I,()=>h,l=>{h=l},()=>f,(l,p)=>{f=l,y=p,Z(),X()},()=>y,()=>M.scale,()=>M.center,B,k,u,()=>A,()=>S(f,M.scale,M.center),v,()=>he(J()).s/100),D=!1,j=!0;I.addEventListener("mouseenter",()=>{j=!0,B()}),I.addEventListener("mouseleave",()=>{j=!1,B()}),I.addEventListener("dblclick",()=>{D=!D,Ie(D),Z(),X(),B()});function ee(l){if(l===t)return;let p=ne(f,t),m={...f},L={...h};t=l;let E=be(p,t),R={x:1,y:1,z:1};f=E,h=R,me(m,E,L,R,300),X()}let N=null;function me(l,p,m,L,E){N!==null&&cancelAnimationFrame(N);let R=performance.now();function de(ie){let we=ie-R,ue=Math.min(1,we/E),te=1-Math.pow(1-ue,3);f={x:l.x+(p.x-l.x)*te,y:l.y+(p.y-l.y)*te,z:l.z+(p.z-l.z)*te},h={x:m.x+(L.x-m.x)*te,y:m.y+(L.y-m.y)*te,z:m.z+(L.z-m.z)*te},Q(),Z(),ue<1?N=requestAnimationFrame(de):N=null}N=requestAnimationFrame(de)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,Q()}))}function Q(){no(M,h,f,y,t,F.state,j,{active:F.state.alphaMode,alpha:A,rgb:J()})}function pe(l,p,m){return Math.round(l+(p-l)*m)}function oe(l,p){let m=p>0?255:0,L=Math.abs(p);return ve({r:pe(l.r,m,L),g:pe(l.g,m,L),b:pe(l.b,m,L)})}function ze(l,p){let m=Pe(p)||{r:128,g:128,b:128},L=oe(m,.35),E=oe(m,0),R=oe(m,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${L}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${E}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${R}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function ce(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function ge(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function J(){let l=ne(f,t);return D?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function X(){if(!r)return;let l=J(),p=ve(l);z&&ze(z,p);let m=V.querySelector(".box-picker-hex");m&&(m.value=p),U(),V._updateModeButtons&&V._updateModeButtons()}function U(){if(!r)return;let l=Ae[t],p=D?be(J(),t):f,m=Ye(p,t),L=V.querySelectorAll(".box-picker-channel input"),E=V.querySelectorAll(".box-picker-channel label");for(let R=0;R<L.length;R++)E[R].textContent=l[R],E[R].style.color="",E[R].style.textShadow="none",L[R].value=String(m[R])}function Z(){let l=J(),p={rgb:l,hsb:he(l),oklch:Te(l),hex:ve(l),alpha:A};for(let m of g)m(p)}function ke(){let l=ne(f,t);return{rgb:l,hsb:he(l),oklch:Te(l),hex:ve(l)}}X(),Q();let le=l=>{f=be(l,t),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)};let p=S(f,M.scale,M.center);y=-1;for(let m=Y.length-1;m>=0;m--)if(xe(m,p,h,M.scale,M.center)){y=m;break}Z(),X(),B()};return{getColor:ke,getMode:()=>t,setColor:le,setAlpha:u,getAlpha:()=>A,setMode(l){ee(l)},on(l,p){g.add(p)},off(l,p){g.delete(p)},destroy(){F.destroy(),N!==null&&cancelAnimationFrame(N),e.removeChild(V)}}}return Co(Uo);})();
