var ColorIsBoxElement=(()=>{var Ie=Object.defineProperty;var kt=Object.getOwnPropertyDescriptor;var wt=Object.getOwnPropertyNames;var At=Object.prototype.hasOwnProperty;var Tt=(e,t)=>()=>(e&&(t=e(e=0)),t);var qe=(e,t)=>{for(var n in t)Ie(e,n,{get:t[n],enumerable:!0})},Rt=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of wt(t))!At.call(e,a)&&a!==n&&Ie(e,a,{get:()=>t[a],enumerable:!(o=kt(t,a))||o.enumerable});return e};var Lt=e=>Rt(Ie({},"__esModule",{value:!0}),e);var pt={};qe(pt,{createControls:()=>Kt});function mt(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function gt(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Kt(e,t,n){if(n.showModeToggle){let o=document.createElement("div");o.className="box-picker-mode-toggle";let a=f=>{let x=document.createElement("button");return x.textContent=f.toUpperCase(),x.addEventListener("click",()=>t.switchMode(f)),o.appendChild(x),x},s=a("oklch"),c=a("rgb"),i=a("hsb"),r=()=>{let f=t.mode();c.classList.toggle("active",f==="rgb"),i.classList.toggle("active",f==="hsb"),s.classList.toggle("active",f==="oklch")};r();let h=t.switchMode;t._markActive=r,e.appendChild(o)}if(n.showInputs){let o=document.createElement("input");o.className="box-picker-hex",o.type="text",o.spellcheck=!1,o.addEventListener("change",()=>{let x=o.value;/^#?[0-9a-f]{6}$/i.test(x)?t.onHexInput(x):t.onHexInput("")}),o.addEventListener("click",()=>{mt(t.getRgbForCopy()?"#"+Xt(t.getRgbForCopy()):"#ffffff"),gt(o)});let a=document.createElement("div");a.className="box-picker-channels";let s=[],c=[],i=["R","G","B"];for(let x=0;x<3;x++){let p=document.createElement("div");p.className="box-picker-channel";let M=document.createElement("label");M.textContent=i[x];let w=document.createElement("input");w.type="text",w.inputMode="numeric",p.appendChild(M),p.appendChild(w),a.appendChild(p),s.push(w),c.push(M),w.addEventListener("change",()=>{let b=parseFloat(w.value);isNaN(b)||t.onChannelInput(x,b,255)}),w.addEventListener("click",()=>{let b=t.getRgbForCopy();mt(`${b.r}, ${b.g}, ${b.b}`),gt(w)})}let r=document.createElement("div");r.className="box-picker-hexrow";let h=document.createElement("div");h.className="box-picker-hexwrap";let f=document.createElement("label");f.textContent="Hex",h.appendChild(f),h.appendChild(o),r.appendChild(a),r.appendChild(h),e.appendChild(r),e._inputs={hexInput:o,inputs:s,labels:c}}if(n.showCorners){let o=document.createElement("button");o.className="box-corner-btn box-corner-left",o.title="Random color",o.setAttribute("aria-label","Random color"),o.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',o.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);t.onRandom({r:s,g:c,b:i})}),e.appendChild(o);let a=document.createElement("button");a.className="box-corner-btn box-corner-right",a.title="Reset",a.setAttribute("aria-label","Reset"),a.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',a.addEventListener("click",()=>t.onReset()),e.appendChild(a)}}function Xt(e){let t=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return t(e.r)+t(e.g)+t(e.b)}var yt=Tt(()=>{});var Yt={};qe(Yt,{ColorIsBoxElement:()=>Se,createBoxColorPicker:()=>Mt,createColorPicker:()=>_e,default:()=>Zt,setBoxInvert:()=>Be});var Ve={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},et={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function q(e){let t=e.r/255,n=e.g/255,o=e.b/255,a=Math.max(t,n,o),s=Math.min(t,n,o),c=a-s,i=0;c!==0&&(a===t?i=((n-o)/c+6)%6:a===n?i=(o-t)/c+2:i=(t-n)/c+4,i*=60);let r=a===0?0:c/a*100,h=a*100;return{h:i,s:r,b:h}}function fe(e){let t=e.h,n=e.s/100,o=e.b/100,a=o*n,s=a*(1-Math.abs(t/60%2-1)),c=o-a,i,r,h;return t<60?(i=a,r=s,h=0):t<120?(i=s,r=a,h=0):t<180?(i=0,r=a,h=s):t<240?(i=0,r=s,h=a):t<300?(i=s,r=0,h=a):(i=a,r=0,h=s),{r:Math.round((i+c)*255),g:Math.round((r+c)*255),b:Math.round((h+c)*255)}}function Fe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function De(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Vt(e){let t=Fe(e.r/255),n=Fe(e.g/255),o=Fe(e.b/255),a=.4122214708*t+.5363325363*n+.0514459929*o,s=.2119034982*t+.6806995451*n+.1073969566*o,c=.0883024619*t+.2817188376*n+.6299787005*o,i=Math.cbrt(a),r=Math.cbrt(s),h=Math.cbrt(c);return{L:.2104542553*i+.793617785*r-.0040720468*h,a:1.9779984951*i-2.428592205*r+.4505937099*h,b:.0259040371*i+.7827717662*r-.808675766*h}}function zt(e,t,n){let o=e+.3963377774*t+.2158037573*n,a=e-.1055613458*t-.0638541728*n,s=e-.0894841775*t-1.291485548*n,c=o*o*o,i=a*a*a,r=s*s*s,h=4.0767416621*c-3.3077115913*i+.2309699292*r,f=-1.2684380046*c+2.6097574011*i-.3413193965*r,x=-.0041960863*c-.7034186147*i+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,De(h)))*255),g:Math.round(Math.max(0,Math.min(1,De(f)))*255),b:Math.round(Math.max(0,Math.min(1,De(x)))*255)}}function ge(e){let t=Vt(e),n=Math.sqrt(t.a*t.a+t.b*t.b),o=Math.atan2(t.b,t.a)*(180/Math.PI);return o<0&&(o+=360),{l:t.L,c:n,h:n<1e-4?0:o}}function we(e){let t=e.h*(Math.PI/180),n=e.c*Math.cos(t),o=e.c*Math.sin(t);return zt(e.l,n,o)}function Et(e,t,n){let o=we({l:e,c:t,h:n});if(tt(o))return{l:e,c:t,h:n};let a=0,s=t;for(let c=0;c<20;c++){let i=(a+s)/2;o=we({l:e,c:i,h:n}),tt(o)?a=i:s=i}return{l:e,c:a,h:n}}function tt(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function le(e){let t=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${t(e.r)}${t(e.g)}${t(e.b)}`}function pe(e){let t=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}var ot=.4;function re(e,t){if(t==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(t==="hsb")return fe({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,o=e.y*ot,a=e.z*359,s=Et(n,o,a);return we(s)}}function xe(e,t){if(t==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(t==="hsb"){let n=q(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ge(e);return{x:n.l,y:Math.min(n.c/ot,1),z:n.h/359}}}function nt(e,t){let n=et[t];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function rt(e,t,n,o,a,s=!1){let c;e===0?c={x:o,y:t,z:n}:e===1?c={x:t,y:o,z:n}:c={x:t,y:n,z:o};let i=re(c,a);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var it=Math.PI/6,St=Math.cos(it),Ht=Math.sin(it),Ae=!1;function Be(e){Ae=e}var ae=-40*Math.PI/180,ie=25*Math.PI/180;function Te(e,t){ae=e,ie=t}function $e(){return{yaw:ae,pitch:ie}}function st(){ae=0,ie=0}function Pt(e){if(ae===0&&ie===0)return e;let t=Math.cos(ae),n=Math.sin(ae),o=Math.cos(ie),a=Math.sin(ie),s=e.x*t+e.z*n,c=e.y,i=-e.x*n+e.z*t,r=c*o-i*a,h=c*a+i*o;return{x:s,y:r,z:h}}function It(e){if(ae===0&&ie===0)return e;let t={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(ae),o=Math.sin(ae),a=Math.cos(ie),s=Math.sin(ie),c=t.x*n+t.z*o,i=t.y,r=-t.x*o+t.z*n,h=i*a-r*s,f=i*s+r*a;return{x:c+.5,y:h+.5,z:f+.5}}function E(e,t,n){let o=It(e);return{x:n.x+(o.y-o.x)*St*t,y:n.y+o.z*t-(o.x+o.y)*Ht*t}}function Ft(e){let{x:t,y:n,z:o}=e;return[{x:0,y:0,z:0},{x:t,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:o},{x:t,y:n,z:0},{x:t,y:0,z:o},{x:0,y:n,z:o},{x:t,y:n,z:o}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Dt=64,lt={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ct(e,t){let n=window.devicePixelRatio||1;e.width=t*n,e.height=t*.84*n,e.style.width=`${t}px`,e.style.height=`${t*.84}px`;let o=e.getContext("2d");return o.scale(n,n),{ctx:o,scale:t*.32,center:{x:t/2,y:t*.4},width:t,height:t*.84}}function dt(e,t,n,o,a,s,c=!0,i=null){let{ctx:r,scale:h,center:f,width:x,height:p}=e;r.save(),r.clearRect(0,0,x,p);let M=Ft(t),w=M.map(b=>E(b,h,f));if($t(r,h,f,a),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,Ot(r,w,M,t,a,s.viewRotating),r.restore(),c&&!s.viewRotating&&_t(r,a,h,f),s.viewRotating){let b=E({x:0,y:0,z:0},h,f),A=E({x:1,y:1,z:1},h,f);r.beginPath(),r.arc(b.x,b.y,7,0,Math.PI*2),r.fillStyle="#000",r.fill(),r.strokeStyle="rgba(255,255,255,.9)",r.lineWidth=1.5,r.stroke(),r.beginPath(),r.arc(A.x,A.y,7,0,Math.PI*2),r.fillStyle="#fff",r.fill(),r.strokeStyle="rgba(0,0,0,.55)",r.lineWidth=1.2,r.stroke(),r.font="9px monospace",r.fillStyle="rgba(51,65,85,.85)",r.textAlign="left",r.fillText("0",b.x+10,b.y+12),r.fillText("255,255,255",A.x+10,A.y+12)}if(o>=0){let b=re(n,a),A=Ae?{r:255-b.r,g:255-b.g,b:255-b.b}:b,C=E(n,h,f);i&&i.active&&Gt(r,C,i.rgb,i.alpha),Nt(r,C,A)}r.restore()}var Bt={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function $t(e,t,n,o){let a=E({x:0,y:0,z:0},t,n),s=[E({x:1,y:0,z:0},t,n),E({x:0,y:1,z:0},t,n),E({x:0,y:0,z:1},t,n)],c=Bt[o];e.lineWidth=1.5;for(let i=0;i<s.length;i++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s[i].x,s[i].y),e.strokeStyle=c[i],e.stroke()}function Ot(e,t,n,o,a,s){let c=[o.x,o.y,o.z];for(let i=0;i<Y.length;i++){let r=Y[i],h=c[r.fixedAxis],f=c[r.uAxis],x=c[r.vAxis];if(f<.002&&x<.002)continue;let p=Pt(r.normal),M=p.x+p.y+p.z>0,w=r.quad.map(b=>t[b]);M?at(e,w,r.fixedAxis,h,f,x,a):(e.save(),e.globalAlpha=0,at(e,w,r.fixedAxis,h,f,x,a),e.restore())}}function at(e,t,n,o,a,s,c){let i=Dt,r=document.createElement("canvas");r.width=i,r.height=i;let h=r.getContext("2d"),f=h.createImageData(i,i),x=f.data;for(let j=0;j<i;j++)for(let te=0;te<i;te++){let G=te/(i-1)*a,ve=j/(i-1)*s,K=rt(n,G,ve,o,c,Ae),B=(j*i+te)*4;x[B]=K.r,x[B+1]=K.g,x[B+2]=K.b,x[B+3]=255}h.putImageData(f,0,0);let p=t[0],M=t[1],w=t[2],b=t[3],A=M.x-p.x,C=M.y-p.y,V=b.x-p.x,I=b.y-p.y;e.save(),e.beginPath(),e.moveTo(p.x,p.y),e.lineTo(M.x,M.y),e.lineTo(w.x,w.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let y=2/i,R=p.x-A*y-V*y,_=p.y-C*y-I*y,D=1+2*y,F=1+2*y;e.transform(A*D/i,C*D/i,V*F/i,I*F/i,R,_),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function _t(e,t,n,o){let a=Ve[t],s=Ae?[E({x:0,y:1,z:1},n,o),E({x:1,y:0,z:1},n,o),E({x:1,y:1,z:0},n,o)]:[E({x:1,y:0,z:0},n,o),E({x:0,y:1,z:0},n,o),E({x:0,y:0,z:1},n,o)],c=Ae?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let r=s[i].x+c[i].x,h=s[i].y+c[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(a[i],r,h)}e.globalAlpha=1,e.restore()}var ee=30,ce=13;function Gt(e,t,n,o){let a=(ee+ce)/2,s=5,c=Math.floor(t.x/s)*s,i=Math.floor(t.y/s)*s,r=ee*2+s*2,h=Math.max(0,Math.min(1,o));e.save(),e.beginPath(),e.arc(t.x,t.y,ee,0,Math.PI*2),e.arc(t.x,t.y,ce,0,Math.PI*2,!0),e.clip();for(let A=-1;A*s<=r;A++)for(let C=-1;C*s<=r;C++)e.fillStyle=(A+C)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+A*s,i+C*s,s,s);let f="rgba("+n.r+","+n.g+","+n.b+",0)",x="rgba("+n.r+","+n.g+","+n.b+",1)",p=e;if(typeof p.createConicGradient=="function"){let A=p.createConicGradient(-Math.PI/2,t.x,t.y);A.addColorStop(0,f),A.addColorStop(1,x),e.fillStyle=A,e.fillRect(c-ee,i-ee,r,r)}else for(let C=0;C<36;C++){let V=-Math.PI/2+C/36*Math.PI*2,I=-Math.PI/2+(C+1)/36*Math.PI*2,y=(C+.5)/36;e.beginPath(),e.moveTo(t.x+Math.cos(V)*ce,t.y+Math.sin(V)*ce),e.arc(t.x,t.y,ee,V,I),e.arc(t.x,t.y,ce,I,V,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+y.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(t.x,t.y,ee,0,Math.PI*2),e.arc(t.x,t.y,ce,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(t.x,t.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let M=h*Math.PI*2,w=t.x+a*Math.sin(M),b=t.y-a*Math.cos(M);e.beginPath(),e.arc(w,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Nt(e,t,n){e.beginPath(),e.arc(t.x,t.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(t.x,t.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function ut(e,t,n,o){let a=[{x:t.x,y:0,z:0},{x:0,y:t.y,z:0},{x:0,y:0,z:t.z}];return E(a[e],n,o)}function Oe(){let e={x:0,y:0};return[E({x:1,y:0,z:0},1,e),E({x:0,y:1,z:0},1,e),E({x:0,y:0,z:1},1,e)].map(n=>{let o=Math.sqrt(n.x*n.x+n.y*n.y);return o>0?{x:n.x/o,y:n.y/o}:{x:0,y:0}})}function ye(e,t,n,o,a){let s=Y[e],c=[n.x,n.y,n.z],i=c[s.uAxis],r=c[s.vAxis];if(i<.002||r<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[s.fixedAxis]]=c[s.fixedAxis];let x={...h};x[f[s.uAxis]]=i;let p={...h};p[f[s.vAxis]]=r;let M=E(h,o,a),w=E(x,o,a),b=E(p,o,a),A=w.x-M.x,C=w.y-M.y,V=b.x-M.x,I=b.y-M.y,y=A*I-C*V;if(Math.abs(y)<1e-6)return null;let R=t.x-M.x,_=t.y-M.y,D=(R*I-_*V)/y,F=(_*A-R*C)/y;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function ht(e,t,n,o,a){let s=Y[e],c=[n.x,n.y,n.z],i=c[s.uAxis],r=c[s.vAxis];if(i<.002||r<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[s.fixedAxis]]=c[s.fixedAxis];let x={...h};x[f[s.uAxis]]=i;let p={...h};p[f[s.vAxis]]=r;let M=E(h,o,a),w=E(x,o,a),b=E(p,o,a),A=w.x-M.x,C=w.y-M.y,V=b.x-M.x,I=b.y-M.y,y=A*I-C*V;if(Math.abs(y)<1e-6)return null;let R=t.x-M.x,_=t.y-M.y,D=(R*I-_*V)/y,F=(_*A-R*C)/y;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var bt=22;function ft(e,t,n,o,a,s,c,i,r,h,f,x,p,M,w){let b={...lt};function A(l){let u=e.getBoundingClientRect();return{x:l.clientX-u.left,y:l.clientY-u.top}}let C=!1,V=!1,I=!1,y=!1,R=null,_=600,D=null;function F(){j(),D=setTimeout(te,_)}function j(){D!==null&&(clearTimeout(D),D=null)}function te(){D=null,b.alphaMode=!1,be(),g(),y=!0,b.viewRotating=!0,R=null,r()}let G=9,ve=1e3,K=null;function B(){Q(),K=setTimeout(Me,ve)}function Q(){K!==null&&(clearTimeout(K),K=null),j()}function Me(){K=null,b.alphaMode=!0,g(),be(),r()}function oe(l){let u=p();return Math.hypot(l.x-u.x,l.y-u.y)}function He(l){let u=p();return(Math.atan2(l.x-u.x,-(l.y-u.y))+Math.PI*2)%(Math.PI*2)}function de(l){f(He(l)/(Math.PI*2)),r()}function Ce(l){let u=oe(l);return u>=ce-4&&u<=ee+6}function J(l){let u=t(),T=c(),k=i();for(let v=0;v<3;v++){let H=ut(v,u,T,k),P=l.x-H.x,$=l.y-H.y;if(P*P+$*$<=bt*bt)return v}return-1}function X(l){let u=t(),T=c(),k=i();for(let v=Y.length-1;v>=0;v--){let H=ye(v,l,u,T,k);if(H)return{faceIndex:v,...H}}return null}let N=-1,Z={x:0,y:0},Re=0;function ue(l,u){N=l,Z=u,Re=t()[["x","y","z"][l]],b.draggingAxisHandle=l,e.style.cursor="grabbing",r()}function d(l){if(Q(),N<0)return;let u=l.x-Z.x,T=l.y-Z.y,v=Oe()[N],H=c(),$=(u*v.x+T*v.y)/H,U=Math.max(0,Math.min(1,Re+$)),W=t(),O=["x","y","z"],me={...W,[O[N]]:U};n(me);let ke=o(),Qe=s(),Je=Qe>=0?Y[Qe]:null,Pe={...ke};Je&&N===Je.fixedAxis?Pe[O[N]]=U:Pe[O[N]]=Math.min(ke[O[N]],U),a(Pe,s()),r()}function g(){N=-1,b.draggingAxisHandle=-1}let m=-1,L=null,S=null,z=!1;function he(l,u,T,k){m=l,b.draggingFace=l,L=null,S=null,z=!1,k&&(z=!0,S={s:u,t:T}),Le(l,u,T),e.style.cursor="crosshair",r()}function se(l,u,T){if(Q(),m<0)return;let k=t(),v=c(),H=i(),P=ye(m,l,k,v,H),$=m;if(!P&&!T){for(let O=Y.length-1;O>=0;O--)if(O!==m&&(P=ye(O,l,k,v,H),P)){$=O;break}}if(!P&&T&&(P=ht(m,l,k,v,H),$=m),!P){r();return}$!==m&&(m=$,b.draggingFace=$,L=null,z=!1,S=null);let{s:U,t:W}=P;if(u&&S){if(z){let O=Math.abs(U-S.s),me=Math.abs(W-S.t),ke=.02;(O>ke||me>ke)&&(L=O>=me?"u":"v",z=!1)}L==="u"?W=S.t:L==="v"&&(U=S.s)}else u||(L=null,z=!1,S=null);Le($,U,W),r()}function Le(l,u,T){let k=Y[l],v=t(),H=["x","y","z"],P={...o()};P[H[k.uAxis]]=u*v[H[k.uAxis]],P[H[k.vAxis]]=T*v[H[k.vAxis]],P[H[k.fixedAxis]]=v[H[k.fixedAxis]],a(P,l)}function be(){m=-1,b.draggingFace=-1,L=null,z=!1,S=null}function ne(l){V=!0;let u=A(l);if(h()){if(b.alphaMode){if(oe(u)<=G){b.alphaMode=!1,r();return}if(Ce(u)){l.preventDefault(),C=!0,de(u);return}b.alphaMode=!1,r();return}oe(u)<=G&&B()}let T=J(u);if(T>=0){l.preventDefault(),ue(T,u);return}let k=X(u);if(k){l.preventDefault(),he(k.faceIndex,k.s,k.t,l.shiftKey),b.alphaMode||F();return}let v=i();Math.hypot(u.x-v.x,u.y-v.y)>c()+20&&(l.preventDefault(),y=!0,R=u,b.viewRotating=!0,r())}function Ke(l){let u=A(l);if(C){l.preventDefault(),de(u);return}if(y){if(l.preventDefault(),!R){R=u;return}let P=u.x-R.x,$=u.y-R.y,U=$e();Te(Math.max(-60,Math.min(60,U.yaw+P*.12)),Math.max(-60,Math.min(60,U.pitch+$*.12))),P!==0&&M(Math.max(0,Math.min(1,w()+P*.002))),R=u,r();return}if(V&&b.alphaMode&&Ce(u)){l.preventDefault(),C=!0,de(u);return}if(N>=0){l.preventDefault(),d(u);return}if(m>=0){l.preventDefault(),se(u,l.shiftKey,l.altKey);return}let T=J(u),k=X(u),v=T,H=T>=0?-1:k?k.faceIndex:-1;(v!==b.hoveredAxisHandle||H!==b.hoveredFace)&&(b.hoveredAxisHandle=v,b.hoveredFace=H,e.style.cursor=v>=0?"grab":H>=0?"crosshair":"default",r())}function Xe(l){Q(),V=!1,C=!1,y&&(y=!1,b.viewRotating=!1,R=null,r());let u=N>=0||m>=0;g(),be(),u&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",r())}function We(l){if(l.touches.length!==1)return;I=!0;let u=A(l.touches[0]);if(h()){if(b.alphaMode){if(oe(u)<=G){b.alphaMode=!1,r();return}if(Ce(u)){l.preventDefault(),C=!0,de(u);return}b.alphaMode=!1,r();return}oe(u)<=G&&B()}let T=J(u);if(T>=0){l.preventDefault(),ue(T,u);return}let k=X(u);if(k){l.preventDefault(),he(k.faceIndex,k.s,k.t,!1),b.alphaMode||F();return}let v=i();Math.hypot(u.x-v.x,u.y-v.y)>c()+20&&(l.preventDefault(),y=!0,R=u,b.viewRotating=!0,r())}function je(l){if(l.touches.length!==1)return;let u=A(l.touches[0]);if(C)l.preventDefault(),de(u);else if(I&&b.alphaMode&&Ce(u))l.preventDefault(),C=!0,de(u);else if(N>=0)l.preventDefault(),d(u);else if(y){if(l.preventDefault(),!R){R=u;return}let T=u.x-R.x,k=u.y-R.y,v=$e();Te(Math.max(-60,Math.min(60,v.yaw+T*.12)),Math.max(-60,Math.min(60,v.pitch+k*.12))),T!==0&&M(Math.max(0,Math.min(1,w()+T*.002))),R=u,r()}else m>=0&&(l.preventDefault(),se(u,!1,!1))}function Ze(l){Q(),I=!1,C=!1,y&&(y=!1,b.viewRotating=!1,R=null,r()),g(),be(),r()}function Ye(l){if(l.key==="1"){Te(Math.PI/4,0),r();return}if(l.key==="0"){st(),r();return}if(l.key==="2"){Te(.95,-.54),r();return}if(b.alphaMode){if(l.key==="Escape"){b.alphaMode=!1,r();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),f(Math.min(1,x()+(l.shiftKey?.08:.02))),r();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),f(Math.max(0,x()-(l.shiftKey?.08:.02))),r();return}}let u=l.shiftKey?.04:.004,T=o(),k=t(),v=Oe(),H=0,P=0;switch(l.key){case"ArrowRight":H=1;break;case"ArrowLeft":H=-1;break;case"ArrowUp":P=-1;break;case"ArrowDown":P=1;break;default:return}l.preventDefault();let $={...T},U=["x","y","z"];for(let W=0;W<3;W++){let O=H*v[W].x+P*v[W].y;if(Math.abs(O)>.3){let me=T[U[W]]+u*Math.sign(O);$[U[W]]=Math.max(0,Math.min(k[U[W]],me))}}a($,s()),r()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",Xe),e.addEventListener("touchstart",We,{passive:!1}),e.addEventListener("touchmove",je,{passive:!1}),e.addEventListener("touchend",Ze),e.addEventListener("keydown",Ye),e.setAttribute("tabindex","0");function Ct(){Q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",Xe),e.removeEventListener("touchstart",We),e.removeEventListener("touchmove",je),e.removeEventListener("touchend",Ze),e.removeEventListener("keydown",Ye)}return{state:b,destroy:Ct}}var xt=`.box-picker {\r
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
`;var _e=Mt,vt=!1;function Wt(){if(vt||typeof document>"u")return;vt=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=xt,document.head.appendChild(e)}function Mt(e,t={}){let n=t.size??300,o=t.controls??!0,a=t.showInputs??!1,s=t.showModeToggle??!1,c=t.showCorners??!1,i={mode:()=>r,switchMode:d=>te(d),onHexInput:d=>{let g=pe(d);g?(x=xe(F?{r:255-g.r,g:255-g.g,b:255-g.b}:g,r),f={x:Math.max(f.x,x.x),y:Math.max(f.y,x.y),z:Math.max(f.z,x.z)},Z(),X(),B()):X()},onChannelInput:(d,g,m)=>{let L=Math.max(0,Math.min(m,g)),S=["x","y","z"],z=L/m;if(F){let he={...x,[S[d]]:z},se=re(he,r);x=xe({r:255-se.r,g:255-se.g,b:255-se.b},r)}else x={...x,[S[d]]:z};z>f[S[d]]&&(f={...f,[S[d]]:z}),Z(),X(),B()},getRgbForCopy:()=>re(x,r),onRandom:d=>ue(d),onReset:()=>ue({r:0,g:0,b:0})},r=t.mode??"rgb",h=t.initialColor?xe(t.initialColor,r):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},x={...h},p=0,M=()=>t.alpha!==void 0,w=Math.max(0,Math.min(1,t.alpha??1));function b(d){let g=Math.max(0,Math.min(1,d));g!==w&&(w=g,Z(),X(),B())}function A(d){let g=J(),m=q(g);m.s=Math.max(0,Math.min(100,d*100));let L=fe(m);ue(F?{r:255-L.r,g:255-L.g,b:255-L.b}:L)}let C=new Set;Wt();let V=document.createElement("div");V.className="box-picker";let I=document.createElement("canvas");I.style.cursor="grab",V.appendChild(I);let y=ct(I,n),R=null,_=document.createElement("div");_.className="box-picker-controls",R=document.createElement("div"),R.className="box-picker-swatch",_.appendChild(R),V.appendChild(_),(a||s||c)&&Promise.resolve().then(()=>(yt(),pt)).then(d=>{d.createControls(_,i,{showInputs:a,showModeToggle:s,showCorners:c})}).catch(()=>{}),e.appendChild(V);let D=ft(I,()=>f,d=>{f=d},()=>x,(d,g)=>{x=d,p=g,Z(),X()},()=>p,()=>y.scale,()=>y.center,B,M,b,()=>w,()=>E(x,y.scale,y.center),A,()=>q(J()).s/100),F=!1,j=!0;I.addEventListener("mouseenter",()=>{j=!0,B()}),I.addEventListener("mouseleave",()=>{j=!1,B()}),I.addEventListener("dblclick",()=>{F=!F,Be(F),Z(),X(),B()});function te(d){if(d===r)return;let g=re(x,r),m={...x},L={...f};r=d;let S=xe(g,r),z={x:1,y:1,z:1};x=S,f=z,ve(m,S,L,z,300),X()}let G=null;function ve(d,g,m,L,S){G!==null&&cancelAnimationFrame(G);let z=performance.now();function he(se){let Le=se-z,be=Math.min(1,Le/S),ne=1-Math.pow(1-be,3);x={x:d.x+(g.x-d.x)*ne,y:d.y+(g.y-d.y)*ne,z:d.z+(g.z-d.z)*ne},f={x:m.x+(L.x-m.x)*ne,y:m.y+(L.y-m.y)*ne,z:m.z+(L.z-m.z)*ne},Q(),Z(),be<1?G=requestAnimationFrame(he):G=null}G=requestAnimationFrame(he)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,Q()}))}function Q(){dt(y,f,x,p,r,D.state,j,{active:D.state.alphaMode,alpha:w,rgb:J()})}function Me(d,g,m){return Math.round(d+(g-d)*m)}function oe(d,g){let m=g>0?255:0,L=Math.abs(g);return le({r:Me(d.r,m,L),g:Me(d.g,m,L),b:Me(d.b,m,L)})}function He(d,g){let m=pe(g)||{r:128,g:128,b:128},L=oe(m,.35),S=oe(m,0),z=oe(m,-.35);d.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${L}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${S}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${z}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,d.style.backgroundColor="transparent"}function de(d){try{navigator.clipboard.writeText(d).catch(()=>{})}catch{}}function Ce(d){d&&(d.style.borderColor="#4ade80",d.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{d.style.borderColor="",d.style.boxShadow=""},500))}function J(){let d=re(x,r);return F?{r:255-d.r,g:255-d.g,b:255-d.b}:d}function X(){if(!o)return;let d=J(),g=le(d);R&&He(R,g);let m=V.querySelector(".box-picker-hex");m&&(m.value=g),N(),V._updateModeButtons&&V._updateModeButtons()}function N(){if(!o)return;let d=Ve[r],g=F?xe(J(),r):x,m=nt(g,r),L=V.querySelectorAll(".box-picker-channel input"),S=V.querySelectorAll(".box-picker-channel label");for(let z=0;z<L.length;z++)S[z].textContent=d[z],S[z].style.color="",S[z].style.textShadow="none",L[z].value=String(m[z])}function Z(){let d=J(),g={rgb:d,hsb:q(d),oklch:ge(d),hex:le(d),alpha:w};for(let m of C)m(g)}function Re(){let d=re(x,r);return{rgb:d,hsb:q(d),oklch:ge(d),hex:le(d)}}X(),Q();let ue=d=>{x=xe(d,r),f={x:Math.max(f.x,x.x),y:Math.max(f.y,x.y),z:Math.max(f.z,x.z)};let g=E(x,y.scale,y.center);p=-1;for(let m=Y.length-1;m>=0;m--)if(ye(m,g,f,y.scale,y.center)){p=m;break}Z(),X(),B()};return{getColor:Re,getMode:()=>r,setColor:ue,setAlpha:b,getAlpha:()=>w,setMode(d){te(d)},on(d,g){C.add(g)},off(d,g){C.delete(g)},destroy(){D.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(V)}}}function Ue(e,t){if(!e)return null;let n=e.trim();try{if(t==="hex")return{rgb:pe(n),alpha:1};if(t==="hex-alpha"){let o=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!o)return null;let a=pe(o[1]),s=o[2]?parseInt(o[2],16)/255:1;return{rgb:a,alpha:s}}if(t==="rgb"){let o=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return o?{r:+o[1],g:+o[2],b:+o[3]}:null}if(t==="rgba"){let o=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return o?{rgb:{r:+o[1],g:+o[2],b:+o[3]},alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsl"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return o?Ge(+o[1],+o[2],+o[3]):null}if(t==="hsla"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return o?{rgb:Ge(+o[1],+o[2],+o[3]),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsv"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return o?fe({h:+o[1],s:+o[2],b:+o[3]}):null}if(t==="hsva"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return o?{rgb:fe({h:+o[1],s:+o[2],b:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="oklch"||t==="oklcha"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return o?{rgb:we({l:+o[1],c:+o[2],h:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="rgba-string"){let o=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:{r:+o[1],g:+o[2],b:+o[3]},alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsla-string"){let o=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:Ge(+o[1],+o[2],+o[3]),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsva-string"){let o=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:fe({h:+o[1],s:+o[2],b:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}}catch{}return null}function ze(e,t,n=1){if(t==="hex")return le(e);if(t==="hex-alpha")return le(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(t==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(t==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(t==="hsl"){let a=Ne(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%`}if(t==="hsla"){let a=Ne(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+n.toFixed(3)}`}if(t==="hsv"){let a=q(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%`}if(t==="hsva"){let a=q(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+n.toFixed(3)}`}if(t==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(t==="hsla-string"){let a=Ne(e);return`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+n.toFixed(3)})`}if(t==="hsva-string"){let a=q(e);return`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+n.toFixed(3)})`}let o=ge(e);return`${o.l.toFixed(3)}, ${o.c.toFixed(3)}, ${o.h.toFixed(1)}`}function Ge(e,t,n){let o=t/100,a=n/100,s=(1-Math.abs(2*a-1))*o,c=s*(1-Math.abs(e/60%2-1)),i=a-s/2,r=0,h=0,f=0;return e<60?(r=s,h=c):e<120?(r=c,h=s):e<180?(h=s,f=c):e<240?(h=c,f=s):e<300?(r=c,f=s):(r=s,f=c),{r:Math.round((r+i)*255),g:Math.round((h+i)*255),b:Math.round((f+i)*255)}}function Ne(e){let t=e.r/255,n=e.g/255,o=e.b/255,a=Math.max(t,n,o),s=Math.min(t,n,o),c=(a+s)/2;if(a===s)return{h:0,s:0,l:c*100};let i=a-s,r=c>.5?i/(2-a-s):i/(a+s),h=0;return a===t?h=((n-o)/i+(n<o?6:0))*60:a===n?h=((o-t)/i+2)*60:h=((t-n)/i+4)*60,{h,s:r*100,l:c*100}}var Ee=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(t){super(),this.model=t}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let t=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",o=this.getAttribute("value"),a=o?Ue(o,this.model):null;this.alpha=a?.alpha??1;let s=a?.rgb??{r:255,g:255,b:255},c=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=_e(this.holder,{initialColor:s,size:t,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...c.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",ze(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ze(i.rgb,this.model,i.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(t,n,o){if(!(!this.picker||!o||this.internal))if(t==="value"){let a=Ue(o,this.model);a&&(this.alpha=a.alpha,this.picker.setColor(a.rgb),this.picker.setAlpha(a.alpha))}else t==="mode"&&this.picker.setMode(o)}get value(){return this.getAttribute("value")||ze({r:255,g:255,b:255},this.model,1)}set value(t){this.setAttribute("value",t)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(t){this.setAttribute("mode",t)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Se=class extends Ee{constructor(){super("hex")}},jt=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,t]of jt)customElements.get(e)||customElements.define(e,class extends Ee{constructor(){super(t)}});var Zt=Se;return Lt(Yt);})();
