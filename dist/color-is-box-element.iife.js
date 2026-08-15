var ColorIsBoxElement=(()=>{var Pe=Object.defineProperty;var Ct=Object.getOwnPropertyDescriptor;var kt=Object.getOwnPropertyNames;var wt=Object.prototype.hasOwnProperty;var At=(e,t)=>()=>(e&&(t=e(e=0)),t);var qe=(e,t)=>{for(var r in t)Pe(e,r,{get:t[r],enumerable:!0})},Tt=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of kt(t))!wt.call(e,a)&&a!==r&&Pe(e,a,{get:()=>t[a],enumerable:!(o=Ct(t,a))||o.enumerable});return e};var Rt=e=>Tt(Pe({},"__esModule",{value:!0}),e);var pt={};qe(pt,{createControls:()=>Ut});function xt(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function mt(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Ut(e,t,r){if(r.showModeToggle){let o=document.createElement("div");o.className="box-picker-mode-toggle";let a=f=>{let x=document.createElement("button");return x.textContent=f.toUpperCase(),x.addEventListener("click",()=>t.switchMode(f)),o.appendChild(x),x},s=a("oklch"),l=a("rgb"),i=a("hsb"),n=()=>{let f=t.mode();l.classList.toggle("active",f==="rgb"),i.classList.toggle("active",f==="hsb"),s.classList.toggle("active",f==="oklch")};n();let b=t.switchMode;t._markActive=n,e.appendChild(o)}if(r.showInputs){let o=document.createElement("input");o.className="box-picker-hex",o.type="text",o.spellcheck=!1,o.addEventListener("change",()=>{let x=o.value;/^#?[0-9a-f]{6}$/i.test(x)?t.onHexInput(x):t.onHexInput("")}),o.addEventListener("click",()=>{xt(t.getRgbForCopy()?"#"+Kt(t.getRgbForCopy()):"#ffffff"),mt(o)});let a=document.createElement("div");a.className="box-picker-channels";let s=[],l=[],i=["R","G","B"];for(let x=0;x<3;x++){let M=document.createElement("div");M.className="box-picker-channel";let k=document.createElement("label");k.textContent=i[x];let A=document.createElement("input");A.type="text",A.inputMode="numeric",M.appendChild(k),M.appendChild(A),a.appendChild(M),s.push(A),l.push(k),A.addEventListener("change",()=>{let h=parseFloat(A.value);isNaN(h)||t.onChannelInput(x,h,255)}),A.addEventListener("click",()=>{let h=t.getRgbForCopy();xt(`${h.r}, ${h.g}, ${h.b}`),mt(A)})}let n=document.createElement("div");n.className="box-picker-hexrow";let b=document.createElement("div");b.className="box-picker-hexwrap";let f=document.createElement("label");f.textContent="Hex",b.appendChild(f),b.appendChild(o),n.appendChild(a),n.appendChild(b),e.appendChild(n),e._inputs={hexInput:o,inputs:s,labels:l}}if(r.showCorners){let o=document.createElement("button");o.className="box-corner-btn box-corner-left",o.title="Random color",o.setAttribute("aria-label","Random color"),o.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',o.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);t.onRandom({r:s,g:l,b:i})}),e.appendChild(o);let a=document.createElement("button");a.className="box-corner-btn box-corner-right",a.title="Reset",a.setAttribute("aria-label","Reset"),a.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',a.addEventListener("click",()=>t.onReset()),e.appendChild(a)}}function Kt(e){let t=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0");return t(e.r)+t(e.g)+t(e.b)}var gt=At(()=>{});var Zt={};qe(Zt,{ColorIsBoxElement:()=>Se,createBoxColorPicker:()=>vt,createColorPicker:()=>_e,default:()=>jt,setBoxInvert:()=>De});var Le={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},et={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function q(e){let t=e.r/255,r=e.g/255,o=e.b/255,a=Math.max(t,r,o),s=Math.min(t,r,o),l=a-s,i=0;l!==0&&(a===t?i=((r-o)/l+6)%6:a===r?i=(o-t)/l+2:i=(t-r)/l+4,i*=60);let n=a===0?0:l/a*100,b=a*100;return{h:i,s:n,b}}function fe(e){let t=e.h,r=e.s/100,o=e.b/100,a=o*r,s=a*(1-Math.abs(t/60%2-1)),l=o-a,i,n,b;return t<60?(i=a,n=s,b=0):t<120?(i=s,n=a,b=0):t<180?(i=0,n=a,b=s):t<240?(i=0,n=s,b=a):t<300?(i=s,n=0,b=a):(i=a,n=0,b=s),{r:Math.round((i+l)*255),g:Math.round((n+l)*255),b:Math.round((b+l)*255)}}function Ie(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Fe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Lt(e){let t=Ie(e.r/255),r=Ie(e.g/255),o=Ie(e.b/255),a=.4122214708*t+.5363325363*r+.0514459929*o,s=.2119034982*t+.6806995451*r+.1073969566*o,l=.0883024619*t+.2817188376*r+.6299787005*o,i=Math.cbrt(a),n=Math.cbrt(s),b=Math.cbrt(l);return{L:.2104542553*i+.793617785*n-.0040720468*b,a:1.9779984951*i-2.428592205*n+.4505937099*b,b:.0259040371*i+.7827717662*n-.808675766*b}}function zt(e,t,r){let o=e+.3963377774*t+.2158037573*r,a=e-.1055613458*t-.0638541728*r,s=e-.0894841775*t-1.291485548*r,l=o*o*o,i=a*a*a,n=s*s*s,b=4.0767416621*l-3.3077115913*i+.2309699292*n,f=-1.2684380046*l+2.6097574011*i-.3413193965*n,x=-.0041960863*l-.7034186147*i+1.707614701*n;return{r:Math.round(Math.max(0,Math.min(1,Fe(b)))*255),g:Math.round(Math.max(0,Math.min(1,Fe(f)))*255),b:Math.round(Math.max(0,Math.min(1,Fe(x)))*255)}}function pe(e){let t=Lt(e),r=Math.sqrt(t.a*t.a+t.b*t.b),o=Math.atan2(t.b,t.a)*(180/Math.PI);return o<0&&(o+=360),{l:t.L,c:r,h:r<1e-4?0:o}}function we(e){let t=e.h*(Math.PI/180),r=e.c*Math.cos(t),o=e.c*Math.sin(t);return zt(e.l,r,o)}function Vt(e,t,r){let o=we({l:e,c:t,h:r});if(tt(o))return{l:e,c:t,h:r};let a=0,s=t;for(let l=0;l<20;l++){let i=(a+s)/2;o=we({l:e,c:i,h:r}),tt(o)?a=i:s=i}return{l:e,c:a,h:r}}function tt(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ie(e){let t=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0");return`#${t(e.r)}${t(e.g)}${t(e.b)}`}function ge(e){let t=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}var ot=.4;function re(e,t){if(t==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(t==="hsb")return fe({h:e.x*359,s:e.y*100,b:e.z*100});{let r=e.x,o=e.y*ot,a=e.z*359,s=Vt(r,o,a);return we(s)}}function xe(e,t){if(t==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(t==="hsb"){let r=q(e);return{x:r.h/359,y:r.s/100,z:r.b/100}}else{let r=pe(e);return{x:r.l,y:Math.min(r.c/ot,1),z:r.h/359}}}function nt(e,t){let r=et[t];return[Math.round(e.x*r[0]),Math.round(e.y*r[1]),Math.round(e.z*r[2])]}function rt(e,t,r,o,a,s=!1){let l;e===0?l={x:o,y:t,z:r}:e===1?l={x:t,y:o,z:r}:l={x:t,y:r,z:o};let i=re(l,a);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var it=Math.PI/6,St=Math.cos(it),Et=Math.sin(it),Ae=!1;function De(e){Ae=e}var le=0,ce=0;function Be(e,t){le=e,ce=t}function $e(){return{yaw:le,pitch:ce}}function Ht(e){if(le===0&&ce===0)return e;let t=Math.cos(le),r=Math.sin(le),o=Math.cos(ce),a=Math.sin(ce),s=e.x*t+e.z*r,l=e.y,i=-e.x*r+e.z*t,n=l*o-i*a,b=l*a+i*o;return{x:s,y:n,z:b}}function Pt(e){if(le===0&&ce===0)return e;let t={x:e.x-.5,y:e.y-.5,z:e.z-.5},r=Math.cos(le),o=Math.sin(le),a=Math.cos(ce),s=Math.sin(ce),l=t.x*r+t.z*o,i=t.y,n=-t.x*o+t.z*r,b=i*a-n*s,f=i*s+n*a;return{x:l+.5,y:b+.5,z:f+.5}}function E(e,t,r){let o=Pt(e);return{x:r.x+(o.y-o.x)*St*t,y:r.y+o.z*t-(o.x+o.y)*Et*t}}function It(e){let{x:t,y:r,z:o}=e;return[{x:0,y:0,z:0},{x:t,y:0,z:0},{x:0,y:r,z:0},{x:0,y:0,z:o},{x:t,y:r,z:0},{x:t,y:0,z:o},{x:0,y:r,z:o},{x:t,y:r,z:o}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Ft=64,st={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function lt(e,t){let r=window.devicePixelRatio||1;e.width=t*r,e.height=t*.84*r,e.style.width=`${t}px`,e.style.height=`${t*.84}px`;let o=e.getContext("2d");return o.scale(r,r),{ctx:o,scale:t*.32,center:{x:t/2,y:t*.4},width:t,height:t*.84}}function ct(e,t,r,o,a,s,l=!0,i=null){let{ctx:n,scale:b,center:f,width:x,height:M}=e;n.save(),n.clearRect(0,0,x,M);let k=It(t),A=k.map(h=>E(h,b,f));if(Bt(n,b,f,a),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,$t(n,A,k,t,a,s.viewRotating),n.restore(),l&&!s.viewRotating&&Ot(n,a,b,f),s.viewRotating){let h=E({x:0,y:0,z:0},b,f),v=E({x:1,y:1,z:1},b,f),g=n.createLinearGradient(v.x,v.y,h.x,h.y);g.addColorStop(0,"#ffffff"),g.addColorStop(1,"#000000"),n.save(),n.strokeStyle=g,n.globalAlpha=.18,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(v.x,v.y),n.stroke(),n.restore(),n.save(),n.strokeStyle=g,n.lineWidth=2,n.lineCap="round",n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(v.x,v.y),n.stroke(),n.restore();let R=[{p:{x:0,y:0,z:0},c:"#111111"},{p:{x:1,y:1,z:1},c:"#ffffff"},{p:{x:1,y:0,z:0},c:"#ff0000"},{p:{x:0,y:1,z:0},c:"#00cc00"},{p:{x:0,y:0,z:1},c:"#0000ff"},{p:{x:1,y:1,z:0},c:"#ffff00"},{p:{x:0,y:1,z:1},c:"#00dddd"},{p:{x:1,y:0,z:1},c:"#ff00aa"}];for(let z of R){let y=E(z.p,b,f),T=z.c==="#111111"||z.c==="#ffffff";n.beginPath(),n.arc(y.x,y.y,T?7:4.5,0,Math.PI*2),n.fillStyle=z.c,n.fill(),n.strokeStyle=z.c==="#111111"?"rgba(255,255,255,.8)":"rgba(0,0,0,.45)",n.lineWidth=1.2,n.stroke()}n.beginPath(),n.arc(h.x,h.y,7,0,Math.PI*2),n.fillStyle="#000",n.fill(),n.strokeStyle="rgba(255,255,255,.9)",n.lineWidth=1.5,n.stroke(),n.beginPath(),n.arc(v.x,v.y,7,0,Math.PI*2),n.fillStyle="#fff",n.fill(),n.strokeStyle="rgba(0,0,0,.55)",n.lineWidth=1.2,n.stroke(),n.font="9px monospace",n.fillStyle="rgba(51,65,85,.85)",n.textAlign="left",n.fillText("0",h.x+9,h.y+12),n.fillText("255,255,255",v.x+9,v.y+12)}if(o>=0){let h=re(r,a),v=Ae?{r:255-h.r,g:255-h.g,b:255-h.b}:h,g=E(r,b,f);i&&i.active&&_t(n,g,i.rgb,i.alpha),Gt(n,g,v)}n.restore()}var Dt={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Bt(e,t,r,o){let a=E({x:0,y:0,z:0},t,r),s=[E({x:1,y:0,z:0},t,r),E({x:0,y:1,z:0},t,r),E({x:0,y:0,z:1},t,r)],l=Dt[o];e.lineWidth=1.5;for(let i=0;i<s.length;i++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s[i].x,s[i].y),e.strokeStyle=l[i],e.stroke()}function $t(e,t,r,o,a,s){let l=[o.x,o.y,o.z];for(let i=0;i<Y.length;i++){let n=Y[i],b=l[n.fixedAxis],f=l[n.uAxis],x=l[n.vAxis];if(f<.002&&x<.002)continue;let M=Ht(n.normal),k=M.x+M.y+M.z>0,A=n.quad.map(h=>t[h]);k?at(e,A,n.fixedAxis,b,f,x,a):(e.save(),e.globalAlpha=s?.28:0,at(e,A,n.fixedAxis,b,f,x,a),e.restore())}}function at(e,t,r,o,a,s,l){let i=Ft,n=document.createElement("canvas");n.width=i,n.height=i;let b=n.getContext("2d"),f=b.createImageData(i,i),x=f.data;for(let j=0;j<i;j++)for(let te=0;te<i;te++){let G=te/(i-1)*a,ve=j/(i-1)*s,K=rt(r,G,ve,o,l,Ae),B=(j*i+te)*4;x[B]=K.r,x[B+1]=K.g,x[B+2]=K.b,x[B+3]=255}b.putImageData(f,0,0);let M=t[0],k=t[1],A=t[2],h=t[3],v=k.x-M.x,g=k.y-M.y,R=h.x-M.x,z=h.y-M.y;e.save(),e.beginPath(),e.moveTo(M.x,M.y),e.lineTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(h.x,h.y),e.closePath(),e.clip();let y=2/i,T=M.x-v*y-R*y,_=M.y-g*y-z*y,D=1+2*y,F=1+2*y;e.transform(v*D/i,g*D/i,R*F/i,z*F/i,T,_),e.imageSmoothingEnabled=!0,e.drawImage(n,0,0),e.restore()}function Ot(e,t,r,o){let a=Le[t],s=Ae?[E({x:0,y:1,z:1},r,o),E({x:1,y:0,z:1},r,o),E({x:1,y:1,z:0},r,o)]:[E({x:1,y:0,z:0},r,o),E({x:0,y:1,z:0},r,o),E({x:0,y:0,z:1},r,o)],l=Ae?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let n=s[i].x+l[i].x,b=s[i].y+l[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(a[i],n,b)}e.globalAlpha=1,e.restore()}var ee=30,se=13;function _t(e,t,r,o){let a=(ee+se)/2,s=5,l=Math.floor(t.x/s)*s,i=Math.floor(t.y/s)*s,n=ee*2+s*2,b=Math.max(0,Math.min(1,o));e.save(),e.beginPath(),e.arc(t.x,t.y,ee,0,Math.PI*2),e.arc(t.x,t.y,se,0,Math.PI*2,!0),e.clip();for(let v=-1;v*s<=n;v++)for(let g=-1;g*s<=n;g++)e.fillStyle=(v+g)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+v*s,i+g*s,s,s);let f="rgba("+r.r+","+r.g+","+r.b+",0)",x="rgba("+r.r+","+r.g+","+r.b+",1)",M=e;if(typeof M.createConicGradient=="function"){let v=M.createConicGradient(-Math.PI/2,t.x,t.y);v.addColorStop(0,f),v.addColorStop(1,x),e.fillStyle=v,e.fillRect(l-ee,i-ee,n,n)}else for(let g=0;g<36;g++){let R=-Math.PI/2+g/36*Math.PI*2,z=-Math.PI/2+(g+1)/36*Math.PI*2,y=(g+.5)/36;e.beginPath(),e.moveTo(t.x+Math.cos(R)*se,t.y+Math.sin(R)*se),e.arc(t.x,t.y,ee,R,z),e.arc(t.x,t.y,se,z,R,!0),e.closePath(),e.fillStyle="rgba("+r.r+","+r.g+","+r.b+","+y.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(t.x,t.y,ee,0,Math.PI*2),e.arc(t.x,t.y,se,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(t.x,t.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=b*Math.PI*2,A=t.x+a*Math.sin(k),h=t.y-a*Math.cos(k);e.beginPath(),e.arc(A,h,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Gt(e,t,r){e.beginPath(),e.arc(t.x,t.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(t.x,t.y,6,0,Math.PI*2),e.fillStyle=`rgb(${r.r},${r.g},${r.b})`,e.fill()}function dt(e,t,r,o){let a=[{x:t.x,y:0,z:0},{x:0,y:t.y,z:0},{x:0,y:0,z:t.z}];return E(a[e],r,o)}function Oe(){let e={x:0,y:0};return[E({x:1,y:0,z:0},1,e),E({x:0,y:1,z:0},1,e),E({x:0,y:0,z:1},1,e)].map(r=>{let o=Math.sqrt(r.x*r.x+r.y*r.y);return o>0?{x:r.x/o,y:r.y/o}:{x:0,y:0}})}function ye(e,t,r,o,a){let s=Y[e],l=[r.x,r.y,r.z],i=l[s.uAxis],n=l[s.vAxis];if(i<.002||n<.002)return null;let b={x:0,y:0,z:0},f=["x","y","z"];b[f[s.fixedAxis]]=l[s.fixedAxis];let x={...b};x[f[s.uAxis]]=i;let M={...b};M[f[s.vAxis]]=n;let k=E(b,o,a),A=E(x,o,a),h=E(M,o,a),v=A.x-k.x,g=A.y-k.y,R=h.x-k.x,z=h.y-k.y,y=v*z-g*R;if(Math.abs(y)<1e-6)return null;let T=t.x-k.x,_=t.y-k.y,D=(T*z-_*R)/y,F=(_*v-T*g)/y;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function ut(e,t,r,o,a){let s=Y[e],l=[r.x,r.y,r.z],i=l[s.uAxis],n=l[s.vAxis];if(i<.002||n<.002)return null;let b={x:0,y:0,z:0},f=["x","y","z"];b[f[s.fixedAxis]]=l[s.fixedAxis];let x={...b};x[f[s.uAxis]]=i;let M={...b};M[f[s.vAxis]]=n;let k=E(b,o,a),A=E(x,o,a),h=E(M,o,a),v=A.x-k.x,g=A.y-k.y,R=h.x-k.x,z=h.y-k.y,y=v*z-g*R;if(Math.abs(y)<1e-6)return null;let T=t.x-k.x,_=t.y-k.y,D=(T*z-_*R)/y,F=(_*v-T*g)/y;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var ht=22;function bt(e,t,r,o,a,s,l,i,n,b,f,x,M,k,A){let h={...st};function v(c){let u=e.getBoundingClientRect();return{x:c.clientX-u.left,y:c.clientY-u.top}}let g=!1,R=!1,z=!1,y=!1,T=null,_=600,D=null;function F(){j(),D=setTimeout(te,_)}function j(){D!==null&&(clearTimeout(D),D=null)}function te(){D=null,h.alphaMode=!1,be(),p(),y=!0,h.viewRotating=!0,T=null,n()}let G=9,ve=1e3,K=null;function B(){Q(),K=setTimeout(Me,ve)}function Q(){K!==null&&(clearTimeout(K),K=null),j()}function Me(){K=null,h.alphaMode=!0,p(),be(),n()}function oe(c){let u=M();return Math.hypot(c.x-u.x,c.y-u.y)}function Ee(c){let u=M();return(Math.atan2(c.x-u.x,-(c.y-u.y))+Math.PI*2)%(Math.PI*2)}function de(c){f(Ee(c)/(Math.PI*2)),n()}function Ce(c){let u=oe(c);return u>=se-4&&u<=ee+6}function J(c){let u=t(),L=l(),w=i();for(let C=0;C<3;C++){let P=dt(C,u,L,w),I=c.x-P.x,$=c.y-P.y;if(I*I+$*$<=ht*ht)return C}return-1}function X(c){let u=t(),L=l(),w=i();for(let C=Y.length-1;C>=0;C--){let P=ye(C,c,u,L,w);if(P)return{faceIndex:C,...P}}return null}let N=-1,Z={x:0,y:0},Te=0;function ue(c,u){N=c,Z=u,Te=t()[["x","y","z"][c]],h.draggingAxisHandle=c,e.style.cursor="grabbing",n()}function d(c){if(Q(),N<0)return;let u=c.x-Z.x,L=c.y-Z.y,C=Oe()[N],P=l(),$=(u*C.x+L*C.y)/P,U=Math.max(0,Math.min(1,Te+$)),W=t(),O=["x","y","z"],me={...W,[O[N]]:U};r(me);let ke=o(),Qe=s(),Je=Qe>=0?Y[Qe]:null,He={...ke};Je&&N===Je.fixedAxis?He[O[N]]=U:He[O[N]]=Math.min(ke[O[N]],U),a(He,s()),n()}function p(){N=-1,h.draggingAxisHandle=-1}let m=-1,V=null,H=null,S=!1;function he(c,u,L,w){m=c,h.draggingFace=c,V=null,H=null,S=!1,w&&(S=!0,H={s:u,t:L}),Re(c,u,L),e.style.cursor="crosshair",n()}function ae(c,u,L){if(Q(),m<0)return;let w=t(),C=l(),P=i(),I=ye(m,c,w,C,P),$=m;if(!I&&!L){for(let O=Y.length-1;O>=0;O--)if(O!==m&&(I=ye(O,c,w,C,P),I)){$=O;break}}if(!I&&L&&(I=ut(m,c,w,C,P),$=m),!I){n();return}$!==m&&(m=$,h.draggingFace=$,V=null,S=!1,H=null);let{s:U,t:W}=I;if(u&&H){if(S){let O=Math.abs(U-H.s),me=Math.abs(W-H.t),ke=.02;(O>ke||me>ke)&&(V=O>=me?"u":"v",S=!1)}V==="u"?W=H.t:V==="v"&&(U=H.s)}else u||(V=null,S=!1,H=null);Re($,U,W),n()}function Re(c,u,L){let w=Y[c],C=t(),P=["x","y","z"],I={...o()};I[P[w.uAxis]]=u*C[P[w.uAxis]],I[P[w.vAxis]]=L*C[P[w.vAxis]],I[P[w.fixedAxis]]=C[P[w.fixedAxis]],a(I,c)}function be(){m=-1,h.draggingFace=-1,V=null,S=!1,H=null}function ne(c){R=!0;let u=v(c);if(b()){if(h.alphaMode){if(oe(u)<=G){h.alphaMode=!1,n();return}if(Ce(u)){c.preventDefault(),g=!0,de(u);return}h.alphaMode=!1,n();return}oe(u)<=G&&B()}let L=J(u);if(L>=0){c.preventDefault(),ue(L,u);return}let w=X(u);if(w){c.preventDefault(),he(w.faceIndex,w.s,w.t,c.shiftKey),h.alphaMode||F();return}let C=i();Math.hypot(u.x-C.x,u.y-C.y)>l()+20&&(c.preventDefault(),y=!0,T=u,h.viewRotating=!0,n())}function Ke(c){let u=v(c);if(g){c.preventDefault(),de(u);return}if(y){if(c.preventDefault(),!T){T=u;return}let I=u.x-T.x,$=u.y-T.y,U=$e();Be(Math.max(-60,Math.min(60,U.yaw+I*.12)),Math.max(-60,Math.min(60,U.pitch+$*.12))),I!==0&&k(Math.max(0,Math.min(1,A()+I*.002))),T=u,n();return}if(R&&h.alphaMode&&Ce(u)){c.preventDefault(),g=!0,de(u);return}if(N>=0){c.preventDefault(),d(u);return}if(m>=0){c.preventDefault(),ae(u,c.shiftKey,c.altKey);return}let L=J(u),w=X(u),C=L,P=L>=0?-1:w?w.faceIndex:-1;(C!==h.hoveredAxisHandle||P!==h.hoveredFace)&&(h.hoveredAxisHandle=C,h.hoveredFace=P,e.style.cursor=C>=0?"grab":P>=0?"crosshair":"default",n())}function Xe(c){Q(),R=!1,g=!1,y&&(y=!1,h.viewRotating=!1,T=null,n());let u=N>=0||m>=0;p(),be(),u&&(h.hoveredAxisHandle=-1,h.hoveredFace=-1,e.style.cursor="default",n())}function We(c){if(c.touches.length!==1)return;z=!0;let u=v(c.touches[0]);if(b()){if(h.alphaMode){if(oe(u)<=G){h.alphaMode=!1,n();return}if(Ce(u)){c.preventDefault(),g=!0,de(u);return}h.alphaMode=!1,n();return}oe(u)<=G&&B()}let L=J(u);if(L>=0){c.preventDefault(),ue(L,u);return}let w=X(u);if(w){c.preventDefault(),he(w.faceIndex,w.s,w.t,!1),h.alphaMode||F();return}let C=i();Math.hypot(u.x-C.x,u.y-C.y)>l()+20&&(c.preventDefault(),y=!0,T=u,h.viewRotating=!0,n())}function je(c){if(c.touches.length!==1)return;let u=v(c.touches[0]);if(g)c.preventDefault(),de(u);else if(z&&h.alphaMode&&Ce(u))c.preventDefault(),g=!0,de(u);else if(N>=0)c.preventDefault(),d(u);else if(y){if(c.preventDefault(),!T){T=u;return}let L=u.x-T.x,w=u.y-T.y,C=$e();Be(Math.max(-60,Math.min(60,C.yaw+L*.12)),Math.max(-60,Math.min(60,C.pitch+w*.12))),L!==0&&k(Math.max(0,Math.min(1,A()+L*.002))),T=u,n()}else m>=0&&(c.preventDefault(),ae(u,!1,!1))}function Ze(c){Q(),z=!1,g=!1,y&&(y=!1,h.viewRotating=!1,T=null,n()),p(),be(),n()}function Ye(c){if(h.alphaMode){if(c.key==="Escape"){h.alphaMode=!1,n();return}if(c.key==="ArrowUp"||c.key==="ArrowRight"){c.preventDefault(),f(Math.min(1,x()+(c.shiftKey?.08:.02))),n();return}if(c.key==="ArrowDown"||c.key==="ArrowLeft"){c.preventDefault(),f(Math.max(0,x()-(c.shiftKey?.08:.02))),n();return}}let u=c.shiftKey?.04:.004,L=o(),w=t(),C=Oe(),P=0,I=0;switch(c.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}c.preventDefault();let $={...L},U=["x","y","z"];for(let W=0;W<3;W++){let O=P*C[W].x+I*C[W].y;if(Math.abs(O)>.3){let me=L[U[W]]+u*Math.sign(O);$[U[W]]=Math.max(0,Math.min(w[U[W]],me))}}a($,s()),n()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",Xe),e.addEventListener("touchstart",We,{passive:!1}),e.addEventListener("touchmove",je,{passive:!1}),e.addEventListener("touchend",Ze),e.addEventListener("keydown",Ye),e.setAttribute("tabindex","0");function Mt(){Q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",Xe),e.removeEventListener("touchstart",We),e.removeEventListener("touchmove",je),e.removeEventListener("touchend",Ze),e.removeEventListener("keydown",Ye)}return{state:h,destroy:Mt}}var ft=`.box-picker {\r
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
`;var _e=vt,yt=!1;function Xt(){if(yt||typeof document>"u")return;yt=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ft,document.head.appendChild(e)}function vt(e,t={}){let r=t.size??300,o=t.controls??!0,a=t.showInputs??!1,s=t.showModeToggle??!1,l=t.showCorners??!1,i={mode:()=>n,switchMode:d=>te(d),onHexInput:d=>{let p=ge(d);p?(x=xe(F?{r:255-p.r,g:255-p.g,b:255-p.b}:p,n),f={x:Math.max(f.x,x.x),y:Math.max(f.y,x.y),z:Math.max(f.z,x.z)},Z(),X(),B()):X()},onChannelInput:(d,p,m)=>{let V=Math.max(0,Math.min(m,p)),H=["x","y","z"],S=V/m;if(F){let he={...x,[H[d]]:S},ae=re(he,n);x=xe({r:255-ae.r,g:255-ae.g,b:255-ae.b},n)}else x={...x,[H[d]]:S};S>f[H[d]]&&(f={...f,[H[d]]:S}),Z(),X(),B()},getRgbForCopy:()=>re(x,n),onRandom:d=>ue(d),onReset:()=>ue({r:0,g:0,b:0})},n=t.mode??"rgb",b=t.initialColor?xe(t.initialColor,n):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},x={...b},M=0,k=()=>t.alpha!==void 0,A=Math.max(0,Math.min(1,t.alpha??1));function h(d){let p=Math.max(0,Math.min(1,d));p!==A&&(A=p,Z(),X(),B())}function v(d){let p=J(),m=q(p);m.s=Math.max(0,Math.min(100,d*100));let V=fe(m);ue(F?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let g=new Set;Xt();let R=document.createElement("div");R.className="box-picker";let z=document.createElement("canvas");z.style.cursor="grab",R.appendChild(z);let y=lt(z,r),T=null,_=document.createElement("div");_.className="box-picker-controls",T=document.createElement("div"),T.className="box-picker-swatch",_.appendChild(T),R.appendChild(_),(a||s||l)&&Promise.resolve().then(()=>(gt(),pt)).then(d=>{d.createControls(_,i,{showInputs:a,showModeToggle:s,showCorners:l})}).catch(()=>{}),e.appendChild(R);let D=bt(z,()=>f,d=>{f=d},()=>x,(d,p)=>{x=d,M=p,Z(),X()},()=>M,()=>y.scale,()=>y.center,B,k,h,()=>A,()=>E(x,y.scale,y.center),v,()=>q(J()).s/100),F=!1,j=!0;z.addEventListener("mouseenter",()=>{j=!0,B()}),z.addEventListener("mouseleave",()=>{j=!1,B()}),z.addEventListener("dblclick",()=>{F=!F,De(F),Z(),X(),B()});function te(d){if(d===n)return;let p=re(x,n),m={...x},V={...f};n=d;let H=xe(p,n),S={x:1,y:1,z:1};x=H,f=S,ve(m,H,V,S,300),X()}let G=null;function ve(d,p,m,V,H){G!==null&&cancelAnimationFrame(G);let S=performance.now();function he(ae){let Re=ae-S,be=Math.min(1,Re/H),ne=1-Math.pow(1-be,3);x={x:d.x+(p.x-d.x)*ne,y:d.y+(p.y-d.y)*ne,z:d.z+(p.z-d.z)*ne},f={x:m.x+(V.x-m.x)*ne,y:m.y+(V.y-m.y)*ne,z:m.z+(V.z-m.z)*ne},Q(),Z(),be<1?G=requestAnimationFrame(he):G=null}G=requestAnimationFrame(he)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,Q()}))}function Q(){ct(y,f,x,M,n,D.state,j,{active:D.state.alphaMode,alpha:A,rgb:J()})}function Me(d,p,m){return Math.round(d+(p-d)*m)}function oe(d,p){let m=p>0?255:0,V=Math.abs(p);return ie({r:Me(d.r,m,V),g:Me(d.g,m,V),b:Me(d.b,m,V)})}function Ee(d,p){let m=ge(p)||{r:128,g:128,b:128},V=oe(m,.35),H=oe(m,0),S=oe(m,-.35);d.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${H}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,d.style.backgroundColor="transparent"}function de(d){try{navigator.clipboard.writeText(d).catch(()=>{})}catch{}}function Ce(d){d&&(d.style.borderColor="#4ade80",d.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{d.style.borderColor="",d.style.boxShadow=""},500))}function J(){let d=re(x,n);return F?{r:255-d.r,g:255-d.g,b:255-d.b}:d}function X(){if(!o)return;let d=J(),p=ie(d);T&&Ee(T,p);let m=R.querySelector(".box-picker-hex");m&&(m.value=p),N(),R._updateModeButtons&&R._updateModeButtons()}function N(){if(!o)return;let d=Le[n],p=F?xe(J(),n):x,m=nt(p,n),V=R.querySelectorAll(".box-picker-channel input"),H=R.querySelectorAll(".box-picker-channel label");for(let S=0;S<V.length;S++)H[S].textContent=d[S],H[S].style.color="",H[S].style.textShadow="none",V[S].value=String(m[S])}function Z(){let d=J(),p={rgb:d,hsb:q(d),oklch:pe(d),hex:ie(d),alpha:A};for(let m of g)m(p)}function Te(){let d=re(x,n);return{rgb:d,hsb:q(d),oklch:pe(d),hex:ie(d)}}X(),Q();let ue=d=>{x=xe(d,n),f={x:Math.max(f.x,x.x),y:Math.max(f.y,x.y),z:Math.max(f.z,x.z)};let p=E(x,y.scale,y.center);M=-1;for(let m=Y.length-1;m>=0;m--)if(ye(m,p,f,y.scale,y.center)){M=m;break}Z(),X(),B()};return{getColor:Te,getMode:()=>n,setColor:ue,setAlpha:h,getAlpha:()=>A,setMode(d){te(d)},on(d,p){g.add(p)},off(d,p){g.delete(p)},destroy(){D.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(R)}}}function Ue(e,t){if(!e)return null;let r=e.trim();try{if(t==="hex")return{rgb:ge(r),alpha:1};if(t==="hex-alpha"){let o=r.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!o)return null;let a=ge(o[1]),s=o[2]?parseInt(o[2],16)/255:1;return{rgb:a,alpha:s}}if(t==="rgb"){let o=r.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return o?{r:+o[1],g:+o[2],b:+o[3]}:null}if(t==="rgba"){let o=r.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return o?{rgb:{r:+o[1],g:+o[2],b:+o[3]},alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsl"){let o=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return o?Ge(+o[1],+o[2],+o[3]):null}if(t==="hsla"){let o=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return o?{rgb:Ge(+o[1],+o[2],+o[3]),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsv"){let o=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return o?fe({h:+o[1],s:+o[2],b:+o[3]}):null}if(t==="hsva"){let o=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return o?{rgb:fe({h:+o[1],s:+o[2],b:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="oklch"||t==="oklcha"){let o=r.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return o?{rgb:we({l:+o[1],c:+o[2],h:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="rgba-string"){let o=r.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:{r:+o[1],g:+o[2],b:+o[3]},alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsla-string"){let o=r.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:Ge(+o[1],+o[2],+o[3]),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsva-string"){let o=r.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:fe({h:+o[1],s:+o[2],b:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}}catch{}return null}function ze(e,t,r=1){if(t==="hex")return ie(e);if(t==="hex-alpha")return ie(e)+(r<1?Math.round(r*255).toString(16).padStart(2,"0"):"");if(t==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(t==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+r.toFixed(3)}`;if(t==="hsl"){let a=Ne(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%`}if(t==="hsla"){let a=Ne(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+r.toFixed(3)}`}if(t==="hsv"){let a=q(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%`}if(t==="hsva"){let a=q(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+r.toFixed(3)}`}if(t==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+r.toFixed(3)})`;if(t==="hsla-string"){let a=Ne(e);return`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+r.toFixed(3)})`}if(t==="hsva-string"){let a=q(e);return`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+r.toFixed(3)})`}let o=pe(e);return`${o.l.toFixed(3)}, ${o.c.toFixed(3)}, ${o.h.toFixed(1)}`}function Ge(e,t,r){let o=t/100,a=r/100,s=(1-Math.abs(2*a-1))*o,l=s*(1-Math.abs(e/60%2-1)),i=a-s/2,n=0,b=0,f=0;return e<60?(n=s,b=l):e<120?(n=l,b=s):e<180?(b=s,f=l):e<240?(b=l,f=s):e<300?(n=l,f=s):(n=s,f=l),{r:Math.round((n+i)*255),g:Math.round((b+i)*255),b:Math.round((f+i)*255)}}function Ne(e){let t=e.r/255,r=e.g/255,o=e.b/255,a=Math.max(t,r,o),s=Math.min(t,r,o),l=(a+s)/2;if(a===s)return{h:0,s:0,l:l*100};let i=a-s,n=l>.5?i/(2-a-s):i/(a+s),b=0;return a===t?b=((r-o)/i+(r<o?6:0))*60:a===r?b=((o-t)/i+2)*60:b=((t-r)/i+4)*60,{h:b,s:n*100,l:l*100}}var Ve=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(t){super(),this.model=t}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let t=parseInt(this.getAttribute("size")||"280",10),r=this.getAttribute("mode")||"rgb",o=this.getAttribute("value"),a=o?Ue(o,this.model):null;this.alpha=a?.alpha??1;let s=a?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=_e(this.holder,{initialColor:s,size:t,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",ze(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ze(i.rgb,this.model,i.alpha)})))}),r&&this.picker.setMode(r)}attributeChangedCallback(t,r,o){if(!(!this.picker||!o||this.internal))if(t==="value"){let a=Ue(o,this.model);a&&(this.alpha=a.alpha,this.picker.setColor(a.rgb),this.picker.setAlpha(a.alpha))}else t==="mode"&&this.picker.setMode(o)}get value(){return this.getAttribute("value")||ze({r:255,g:255,b:255},this.model,1)}set value(t){this.setAttribute("value",t)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(t){this.setAttribute("mode",t)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Se=class extends Ve{constructor(){super("hex")}},Wt=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,t]of Wt)customElements.get(e)||customElements.define(e,class extends Ve{constructor(){super(t)}});var jt=Se;return Rt(Zt);})();
