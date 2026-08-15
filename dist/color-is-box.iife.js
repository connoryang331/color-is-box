var ColorIsBox=(()=>{var Se=Object.defineProperty;var mo=Object.getOwnPropertyDescriptor;var xo=Object.getOwnPropertyNames;var po=Object.prototype.hasOwnProperty;var go=(e,o)=>()=>(e&&(o=e(e=0)),o);var We=(e,o)=>{for(var t in o)Se(e,t,{get:o[t],enumerable:!0})},yo=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of xo(o))!po.call(e,s)&&s!==t&&Se(e,s,{get:()=>o[s],enumerable:!(n=mo(o,s))||n.enumerable});return e};var vo=e=>yo(Se({},"__esModule",{value:!0}),e);var co={};We(co,{createControls:()=>Go});function so(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function lo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Go(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let s=m=>{let h=document.createElement("button");return h.textContent=m.toUpperCase(),h.addEventListener("click",()=>o.switchMode(m)),n.appendChild(h),h},l=s("oklch"),d=s("rgb"),a=s("hsb"),i=()=>{let m=o.mode();d.classList.toggle("active",m==="rgb"),a.classList.toggle("active",m==="hsb"),l.classList.toggle("active",m==="oklch")};i();let r=o.switchMode;o._markActive=i,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let h=n.value;/^#?[0-9a-f]{6}$/i.test(h)?o.onHexInput(h):o.onHexInput("")}),n.addEventListener("click",()=>{so(o.getRgbForCopy()?"#"+No(o.getRgbForCopy()):"#ffffff"),lo(n)});let s=document.createElement("div");s.className="box-picker-channels";let l=[],d=[],a=["R","G","B"];for(let h=0;h<3;h++){let v=document.createElement("div");v.className="box-picker-channel";let M=document.createElement("label");M.textContent=a[h];let w=document.createElement("input");w.type="text",w.inputMode="numeric",v.appendChild(M),v.appendChild(w),s.appendChild(v),l.push(w),d.push(M),w.addEventListener("change",()=>{let f=parseFloat(w.value);isNaN(f)||o.onChannelInput(h,f,255)}),w.addEventListener("click",()=>{let f=o.getRgbForCopy();so(`${f.r}, ${f.g}, ${f.b}`),lo(w)})}let i=document.createElement("div");i.className="box-picker-hexrow";let r=document.createElement("div");r.className="box-picker-hexwrap";let m=document.createElement("label");m.textContent="Hex",r.appendChild(m),r.appendChild(n),i.appendChild(s),i.appendChild(r),e.appendChild(i),e._inputs={hexInput:n,inputs:l,labels:d}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let l=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:l,g:d,b:a})}),e.appendChild(n);let s=document.createElement("button");s.className="box-corner-btn box-corner-right",s.title="Reset",s.setAttribute("aria-label","Reset"),s.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',s.addEventListener("click",()=>o.onReset()),e.appendChild(s)}}function No(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var uo=go(()=>{});var Ko={};We(Ko,{createBoxColorPicker:()=>fo,createColorPicker:()=>Uo,setBoxInvert:()=>Ie});var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Xe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ae(e){let o=e.r/255,t=e.g/255,n=e.b/255,s=Math.max(o,t,n),l=Math.min(o,t,n),d=s-l,a=0;d!==0&&(s===o?a=((t-n)/d+6)%6:s===t?a=(n-o)/d+2:a=(o-t)/d+4,a*=60);let i=s===0?0:d/s*100,r=s*100;return{h:a,s:i,b:r}}function we(e){let o=e.h,t=e.s/100,n=e.b/100,s=n*t,l=s*(1-Math.abs(o/60%2-1)),d=n-s,a,i,r;return o<60?(a=s,i=l,r=0):o<120?(a=l,i=s,r=0):o<180?(a=0,i=s,r=l):o<240?(a=0,i=l,r=s):o<300?(a=l,i=0,r=s):(a=s,i=0,r=l),{r:Math.round((a+d)*255),g:Math.round((i+d)*255),b:Math.round((r+d)*255)}}function Ve(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ze(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Mo(e){let o=Ve(e.r/255),t=Ve(e.g/255),n=Ve(e.b/255),s=.4122214708*o+.5363325363*t+.0514459929*n,l=.2119034982*o+.6806995451*t+.1073969566*n,d=.0883024619*o+.2817188376*t+.6299787005*n,a=Math.cbrt(s),i=Math.cbrt(l),r=Math.cbrt(d);return{L:.2104542553*a+.793617785*i-.0040720468*r,a:1.9779984951*a-2.428592205*i+.4505937099*r,b:.0259040371*a+.7827717662*i-.808675766*r}}function Co(e,o,t){let n=e+.3963377774*o+.2158037573*t,s=e-.1055613458*o-.0638541728*t,l=e-.0894841775*o-1.291485548*t,d=n*n*n,a=s*s*s,i=l*l*l,r=4.0767416621*d-3.3077115913*a+.2309699292*i,m=-1.2684380046*d+2.6097574011*a-.3413193965*i,h=-.0041960863*d-.7034186147*a+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,ze(r)))*255),g:Math.round(Math.max(0,Math.min(1,ze(m)))*255),b:Math.round(Math.max(0,Math.min(1,ze(h)))*255)}}function Te(e){let o=Mo(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function Ee(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return Co(e.l,t,n)}function ko(e,o,t){let n=Ee({l:e,c:o,h:t});if(je(n))return{l:e,c:o,h:t};let s=0,l=o;for(let d=0;d<20;d++){let a=(s+l)/2;n=Ee({l:e,c:a,h:t}),je(n)?s=a:l=a}return{l:e,c:s,h:t}}function je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ve(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ze=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return we({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*Ze,s=e.z*359,l=ko(t,n,s);return Ee(l)}}function fe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ae(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Te(e);return{x:t.l,y:Math.min(t.c/Ze,1),z:t.h/359}}}function Ye(e,o){let t=Xe[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Qe(e,o,t,n,s,l=!1){let d;e===0?d={x:n,y:o,z:t}:e===1?d={x:o,y:n,z:t}:d={x:o,y:t,z:n};let a=ne(d,s);return l?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Je=Math.PI/6,Ao=Math.cos(Je),wo=Math.sin(Je),Me=!1;function Ie(e){Me=e}var se=0,le=0;function He(e,o){se=e,le=o}function De(){return{yaw:se,pitch:le}}function To(e){if(se===0&&le===0)return e;let o=Math.cos(se),t=Math.sin(se),n=Math.cos(le),s=Math.sin(le),l=e.x*o+e.z*t,d=e.y,a=-e.x*t+e.z*o,i=d*n-a*s,r=d*s+a*n;return{x:l,y:i,z:r}}function Ro(e){if(se===0&&le===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},t=Math.cos(se),n=Math.sin(se),s=Math.cos(le),l=Math.sin(le),d=o.x*t+o.z*n,a=o.y,i=-o.x*n+o.z*t,r=a*s-i*l,m=a*l+i*s;return{x:d+.5,y:r+.5,z:m+.5}}function z(e,o,t){let n=Ro(e);return{x:t.x+(n.y-n.x)*Ao*o,y:t.y+n.z*o-(n.x+n.y)*wo*o}}function Lo(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var Q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],So=64,qe={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function eo(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function oo(e,o,t,n,s,l,d=!0,a=null,i=null){let{ctx:r,scale:m,center:h,width:v,height:M}=e;r.save(),r.clearRect(0,0,v,M);let w=Lo(o),f=w.map(p=>z(p,m,h));if(r.save(),r.globalAlpha=l.viewRotating?.32:1,zo(r,m,h,s),r.restore(),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,Eo(r,f,w,o,s,l.viewRotating),r.restore(),d&&(r.save(),r.globalAlpha=l.viewRotating?.5:1,Io(r,s,m,h),r.restore()),i&&i.active&&l.ringAlpha>.01&&Fo(r,m,h,i.rgb,i.sat,l.ringAlpha),l.viewRotating){let p=z({x:0,y:0,z:0},m,h),y=z({x:1,y:1,z:1},m,h);r.save(),r.setLineDash([6,5]),r.strokeStyle="rgba(107,114,128,.75)",r.lineWidth=1.6,r.beginPath(),r.moveTo(p.x,p.y),r.lineTo(y.x,y.y),r.stroke(),r.restore(),r.beginPath(),r.arc(p.x,p.y,5,0,Math.PI*2),r.fillStyle="#111",r.fill(),r.strokeStyle="rgba(0,0,0,.45)",r.lineWidth=1,r.stroke(),r.beginPath(),r.arc(y.x,y.y,5,0,Math.PI*2),r.fillStyle="#fff",r.fill(),r.strokeStyle="rgba(0,0,0,.5)",r.lineWidth=1,r.stroke(),r.font="9px monospace",r.fillStyle="rgba(51,65,85,.85)",r.textAlign="left",r.fillText("0",p.x+9,p.y+12),r.fillText("255,255,255",y.x+9,y.y+12)}if(n>=0){let p=ne(t,s),y=Me?{r:255-p.r,g:255-p.g,b:255-p.b}:p,T=z(t,m,h);a&&a.active&&Bo(r,T,a.rgb,a.alpha),Oo(r,T,y)}r.restore()}var Vo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function zo(e,o,t,n){let s=z({x:0,y:0,z:0},o,t),l=[z({x:1,y:0,z:0},o,t),z({x:0,y:1,z:0},o,t),z({x:0,y:0,z:1},o,t)],d=Vo[n];e.lineWidth=1.5;for(let a=0;a<l.length;a++)e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(l[a].x,l[a].y),e.strokeStyle=d[a],e.stroke()}function Eo(e,o,t,n,s,l){let d=[n.x,n.y,n.z],a=l?.7:1;for(let i=0;i<Q.length;i++){let r=Q[i],m=d[r.fixedAxis],h=d[r.uAxis],v=d[r.vAxis];if(h<.002&&v<.002)continue;let M=To(r.normal),w=M.x+M.y+M.z>0,f=r.quad.map(p=>o[p]);if(w)e.save(),e.globalAlpha=a,Po(e,f,r.fixedAxis,m,h,v,s),e.restore();else{e.save(),e.globalAlpha=l?.14:0,e.beginPath(),e.moveTo(f[0].x,f[0].y);for(let p=1;p<4;p++)e.lineTo(f[p].x,f[p].y);e.closePath(),e.fillStyle="#ffffff",e.fill(),e.restore()}}}function Po(e,o,t,n,s,l,d){let a=So,i=document.createElement("canvas");i.width=a,i.height=a;let r=i.getContext("2d"),m=r.createImageData(a,a),h=m.data;for(let Z=0;Z<a;Z++)for(let ee=0;ee<a;ee++){let N=ee/(a-1)*s,xe=Z/(a-1)*l,K=Qe(t,N,xe,n,d,Me),B=(Z*a+ee)*4;h[B]=K.r,h[B+1]=K.g,h[B+2]=K.b,h[B+3]=255}r.putImageData(m,0,0);let v=o[0],M=o[1],w=o[2],f=o[3],p=M.x-v.x,y=M.y-v.y,T=f.x-v.x,H=f.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(M.x,M.y),e.lineTo(w.x,w.y),e.lineTo(f.x,f.y),e.closePath(),e.clip();let C=2/a,L=v.x-p*C-T*C,G=v.y-y*C-H*C,D=1+2*C,F=1+2*C;e.transform(p*D/a,y*D/a,T*F/a,H*F/a,L,G),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function Io(e,o,t,n){let s=Ae[o],l=Me?[z({x:0,y:1,z:1},t,n),z({x:1,y:0,z:1},t,n),z({x:1,y:1,z:0},t,n)]:[z({x:1,y:0,z:0},t,n),z({x:0,y:1,z:0},t,n),z({x:0,y:0,z:1},t,n)],d=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let i=l[a].x+d[a].x,r=l[a].y+d[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(s[a],i,r)}e.globalAlpha=1,e.restore()}var Ho=.48,Do=.33;function Fo(e,o,t,n,s,l){let d=o*Ho,a=o*Do,i=Math.max(0,Math.min(1,s));e.save(),e.globalAlpha=l,e.beginPath(),e.arc(t.x,t.y,d,0,Math.PI*2),e.arc(t.x,t.y,a,0,Math.PI*2,!0),e.clip();let r=e.createRadialGradient(t.x,t.y,a,t.x,t.y,d);r.addColorStop(0,"#e7e7e7"),r.addColorStop(1,"rgb("+n.r+","+n.g+","+n.b+")"),e.fillStyle=r,e.fillRect(t.x-d,t.y-d,d*2,d*2),e.restore(),e.beginPath(),e.arc(t.x,t.y,d,0,Math.PI*2),e.arc(t.x,t.y,a,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let h of[.25,.5,.75]){let v=a+(d-a)*h;e.fillText(Math.round(h*100)+"%",t.x+v+10,t.y-4)}let m=a+(d-a)*i;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(t.x,t.y-a),e.lineTo(t.x,t.y-m),e.stroke(),e.restore(),e.beginPath(),e.arc(t.x,t.y-m,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var q=30,ie=13;function Bo(e,o,t,n){let s=(q+ie)/2,l=5,d=Math.floor(o.x/l)*l,a=Math.floor(o.y/l)*l,i=q*2+l*2,r=Math.max(0,Math.min(1,n));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let p=-1;p*l<=i;p++)for(let y=-1;y*l<=i;y++)e.fillStyle=(p+y)%2===0?"#ffffff":"#d9d9d9",e.fillRect(d+p*l,a+y*l,l,l);let m="rgba("+t.r+","+t.g+","+t.b+",0)",h="rgba("+t.r+","+t.g+","+t.b+",1)",v=e;if(typeof v.createConicGradient=="function"){let p=v.createConicGradient(-Math.PI/2,o.x,o.y);p.addColorStop(0,m),p.addColorStop(1,h),e.fillStyle=p,e.fillRect(d-q,a-q,i,i)}else for(let y=0;y<36;y++){let T=-Math.PI/2+y/36*Math.PI*2,H=-Math.PI/2+(y+1)/36*Math.PI*2,C=(y+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*ie,o.y+Math.sin(T)*ie),e.arc(o.x,o.y,q,T,H),e.arc(o.x,o.y,ie,H,T,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+C.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let M=r*Math.PI*2,w=o.x+s*Math.sin(M),f=o.y-s*Math.cos(M);e.beginPath(),e.arc(w,f,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Oo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function to(e,o,t,n){let s=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return z(s[e],t,n)}function Fe(){let e={x:0,y:0};return[z({x:1,y:0,z:0},1,e),z({x:0,y:1,z:0},1,e),z({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function me(e,o,t,n,s){let l=Q[e],d=[t.x,t.y,t.z],a=d[l.uAxis],i=d[l.vAxis];if(a<.002||i<.002)return null;let r={x:0,y:0,z:0},m=["x","y","z"];r[m[l.fixedAxis]]=d[l.fixedAxis];let h={...r};h[m[l.uAxis]]=a;let v={...r};v[m[l.vAxis]]=i;let M=z(r,n,s),w=z(h,n,s),f=z(v,n,s),p=w.x-M.x,y=w.y-M.y,T=f.x-M.x,H=f.y-M.y,C=p*H-y*T;if(Math.abs(C)<1e-6)return null;let L=o.x-M.x,G=o.y-M.y,D=(L*H-G*T)/C,F=(G*p-L*y)/C;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function no(e,o,t,n,s){let l=Q[e],d=[t.x,t.y,t.z],a=d[l.uAxis],i=d[l.vAxis];if(a<.002||i<.002)return null;let r={x:0,y:0,z:0},m=["x","y","z"];r[m[l.fixedAxis]]=d[l.fixedAxis];let h={...r};h[m[l.uAxis]]=a;let v={...r};v[m[l.vAxis]]=i;let M=z(r,n,s),w=z(h,n,s),f=z(v,n,s),p=w.x-M.x,y=w.y-M.y,T=f.x-M.x,H=f.y-M.y,C=p*H-y*T;if(Math.abs(C)<1e-6)return null;let L=o.x-M.x,G=o.y-M.y,D=(L*H-G*T)/C,F=(G*p-L*y)/C;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var ro=22;function ao(e,o,t,n,s,l,d,a,i,r,m,h,v,M,w){let f={...qe};function p(c){let b=e.getBoundingClientRect();return{x:c.clientX-b.left,y:c.clientY-b.top}}let y=!1,T=!1,H=!1,C=!1,L=null,G=600,D=null;function F(){Z(),D=setTimeout(ee,G)}function Z(){D!==null&&(clearTimeout(D),D=null)}function ee(){D=null,f.alphaMode=!1,be(),g(),C=!0,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.3),L=null,i()}let N=9,xe=1e3,K=null;function B(){J(),K=setTimeout(pe,xe)}function J(){K!==null&&(clearTimeout(K),K=null),Z()}function pe(){K=null,f.alphaMode=!0,g(),be(),i()}function oe(c){let b=v();return Math.hypot(c.x-b.x,c.y-b.y)}function Re(c){let b=v();return(Math.atan2(c.x-b.x,-(c.y-b.y))+Math.PI*2)%(Math.PI*2)}function ce(c){m(Re(c)/(Math.PI*2)),i()}function ge(c){let b=oe(c);return b>=ie-4&&b<=q+6}function j(c){let b=o(),R=d(),A=a();for(let k=0;k<3;k++){let P=to(k,b,R,A),I=c.x-P.x,O=c.y-P.y;if(I*I+O*O<=ro*ro)return k}return-1}function W(c){let b=o(),R=d(),A=a();for(let k=Q.length-1;k>=0;k--){let P=me(k,c,b,R,A);if(P)return{faceIndex:k,...P}}return null}let U=-1,Y={x:0,y:0},Ce=0;function de(c,b){U=c,Y=b,Ce=o()[["x","y","z"][c]],f.draggingAxisHandle=c,e.style.cursor="grabbing",i()}function u(c){if(J(),U<0)return;let b=c.x-Y.x,R=c.y-Y.y,k=Fe()[U],P=d(),O=(b*k.x+R*k.y)/P,$=Math.max(0,Math.min(1,Ce+O)),X=o(),_=["x","y","z"],he={...X,[_[U]]:$};t(he);let ye=n(),$e=l(),Ke=$e>=0?Q[$e]:null,Le={...ye};Ke&&U===Ke.fixedAxis?Le[_[U]]=$:Le[_[U]]=Math.min(ye[_[U]],$),s(Le,l()),i()}function g(){U=-1,f.draggingAxisHandle=-1}let x=-1,S=null,E=null,V=!1;function ue(c,b,R,A){x=c,f.draggingFace=c,S=null,E=null,V=!1,A&&(V=!0,E={s:b,t:R}),ke(c,b,R),e.style.cursor="crosshair",i()}function re(c,b,R){if(J(),x<0)return;let A=o(),k=d(),P=a(),I=me(x,c,A,k,P),O=x;if(!I&&!R){for(let _=Q.length-1;_>=0;_--)if(_!==x&&(I=me(_,c,A,k,P),I)){O=_;break}}if(!I&&R&&(I=no(x,c,A,k,P),O=x),!I){i();return}O!==x&&(x=O,f.draggingFace=O,S=null,V=!1,E=null);let{s:$,t:X}=I;if(b&&E){if(V){let _=Math.abs($-E.s),he=Math.abs(X-E.t),ye=.02;(_>ye||he>ye)&&(S=_>=he?"u":"v",V=!1)}S==="u"?X=E.t:S==="v"&&($=E.s)}else b||(S=null,V=!1,E=null);ke(O,$,X),i()}function ke(c,b,R){let A=Q[c],k=o(),P=["x","y","z"],I={...n()};I[P[A.uAxis]]=b*k[P[A.uAxis]],I[P[A.vAxis]]=R*k[P[A.vAxis]],I[P[A.fixedAxis]]=k[P[A.fixedAxis]],s(I,c)}function be(){x=-1,f.draggingFace=-1,S=null,V=!1,E=null}function te(c){T=!0;let b=p(c);if(r()){if(f.alphaMode){if(oe(b)<=N){f.alphaMode=!1,i();return}if(ge(b)){c.preventDefault(),y=!0,ce(b);return}f.alphaMode=!1,i();return}oe(b)<=N&&B()}let R=j(b);if(R>=0){c.preventDefault(),de(R,b);return}let A=W(b);if(A){c.preventDefault(),ue(A.faceIndex,A.s,A.t,c.shiftKey),F();return}let k=a();Math.hypot(b.x-k.x,b.y-k.y)>d()+20&&(c.preventDefault(),C=!0,L=b,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.25),i())}function Be(c){let b=p(c);if(y){c.preventDefault(),ce(b);return}if(C){if(c.preventDefault(),!L){L=b;return}let I=b.x-L.x,O=b.y-L.y,$=De();He(Math.max(-60,Math.min(60,$.yaw+I*.12)),Math.max(-60,Math.min(60,$.pitch+O*.12))),I!==0&&M(Math.max(0,Math.min(1,w()+I*.002))),f.ringAlpha=Math.min(1,f.ringAlpha+.12),L=b,i();return}if(T&&f.alphaMode&&ge(b)){c.preventDefault(),y=!0,ce(b);return}if(U>=0){c.preventDefault(),u(b);return}if(x>=0){c.preventDefault(),re(b,c.shiftKey,c.altKey);return}let R=j(b),A=W(b),k=R,P=R>=0?-1:A?A.faceIndex:-1;(k!==f.hoveredAxisHandle||P!==f.hoveredFace)&&(f.hoveredAxisHandle=k,f.hoveredFace=P,e.style.cursor=k>=0?"grab":P>=0?"crosshair":"default",i())}function Oe(c){J(),T=!1,y=!1,C&&(C=!1,f.viewRotating=!1,f.ringAlpha=0,L=null,i());let b=U>=0||x>=0;g(),be(),b&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",i())}function _e(c){if(c.touches.length!==1)return;H=!0;let b=p(c.touches[0]);if(r()){if(f.alphaMode){if(oe(b)<=N){f.alphaMode=!1,i();return}if(ge(b)){c.preventDefault(),y=!0,ce(b);return}f.alphaMode=!1,i();return}oe(b)<=N&&B()}let R=j(b);if(R>=0){c.preventDefault(),de(R,b);return}let A=W(b);if(A){c.preventDefault(),ue(A.faceIndex,A.s,A.t,!1),F();return}let k=a();Math.hypot(b.x-k.x,b.y-k.y)>d()+20&&(c.preventDefault(),C=!0,L=b,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.25),i())}function Ge(c){if(c.touches.length!==1)return;let b=p(c.touches[0]);if(y)c.preventDefault(),ce(b);else if(H&&f.alphaMode&&ge(b))c.preventDefault(),y=!0,ce(b);else if(U>=0)c.preventDefault(),u(b);else if(C){if(c.preventDefault(),!L){L=b;return}let R=b.x-L.x,A=b.y-L.y,k=De();He(Math.max(-60,Math.min(60,k.yaw+R*.12)),Math.max(-60,Math.min(60,k.pitch+A*.12))),R!==0&&M(Math.max(0,Math.min(1,w()+R*.002))),f.ringAlpha=Math.min(1,f.ringAlpha+.12),L=b,i()}else x>=0&&(c.preventDefault(),re(b,!1,!1))}function Ne(c){J(),H=!1,y=!1,C&&(C=!1,f.viewRotating=!1,f.ringAlpha=0,L=null,i()),g(),be(),i()}function Ue(c){if(f.alphaMode){if(c.key==="Escape"){f.alphaMode=!1,i();return}if(c.key==="ArrowUp"||c.key==="ArrowRight"){c.preventDefault(),m(Math.min(1,h()+(c.shiftKey?.08:.02))),i();return}if(c.key==="ArrowDown"||c.key==="ArrowLeft"){c.preventDefault(),m(Math.max(0,h()-(c.shiftKey?.08:.02))),i();return}}let b=c.shiftKey?.04:.004,R=n(),A=o(),k=Fe(),P=0,I=0;switch(c.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}c.preventDefault();let O={...R},$=["x","y","z"];for(let X=0;X<3;X++){let _=P*k[X].x+I*k[X].y;if(Math.abs(_)>.3){let he=R[$[X]]+b*Math.sign(_);O[$[X]]=Math.max(0,Math.min(A[$[X]],he))}}s(O,l()),i()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",Be),window.addEventListener("mouseup",Oe),e.addEventListener("touchstart",_e,{passive:!1}),e.addEventListener("touchmove",Ge,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",Ue),e.setAttribute("tabindex","0");function ho(){J(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",Oe),e.removeEventListener("touchstart",_e),e.removeEventListener("touchmove",Ge),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",Ue)}return{state:f,destroy:ho}}var io=`.box-picker {\r
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
`;var Uo=fo,bo=!1;function $o(){if(bo||typeof document>"u")return;bo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=io,document.head.appendChild(e)}function fo(e,o={}){let t=o.size??300,n=o.controls??!0,s=o.showInputs??!1,l=o.showModeToggle??!1,d=o.showCorners??!1,a={mode:()=>i,switchMode:u=>ee(u),onHexInput:u=>{let g=Pe(u);g?(h=fe(F?{r:255-g.r,g:255-g.g,b:255-g.b}:g,i),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)},Y(),W(),B()):W()},onChannelInput:(u,g,x)=>{let S=Math.max(0,Math.min(x,g)),E=["x","y","z"],V=S/x;if(F){let ue={...h,[E[u]]:V},re=ne(ue,i);h=fe({r:255-re.r,g:255-re.g,b:255-re.b},i)}else h={...h,[E[u]]:V};V>m[E[u]]&&(m={...m,[E[u]]:V}),Y(),W(),B()},getRgbForCopy:()=>ne(h,i),onRandom:u=>de(u),onReset:()=>de({r:0,g:0,b:0})},i=o.mode??"rgb",r=o.initialColor?fe(o.initialColor,i):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},h={...r},v=0,M=()=>o.alpha!==void 0,w=Math.max(0,Math.min(1,o.alpha??1));function f(u){let g=Math.max(0,Math.min(1,u));g!==w&&(w=g,Y(),W(),B())}function p(u){let g=j(),x=ae(g);x.s=Math.max(0,Math.min(100,u*100));let S=we(x);de(F?{r:255-S.r,g:255-S.g,b:255-S.b}:S)}let y=new Set;$o();let T=document.createElement("div");T.className="box-picker";let H=document.createElement("canvas");H.style.cursor="grab",T.appendChild(H);let C=eo(H,t),L=null,G=document.createElement("div");G.className="box-picker-controls",L=document.createElement("div"),L.className="box-picker-swatch",G.appendChild(L),T.appendChild(G),(s||l||d)&&Promise.resolve().then(()=>(uo(),co)).then(u=>{u.createControls(G,a,{showInputs:s,showModeToggle:l,showCorners:d})}).catch(()=>{}),e.appendChild(T);let D=ao(H,()=>m,u=>{m=u},()=>h,(u,g)=>{h=u,v=g,Y(),W()},()=>v,()=>C.scale,()=>C.center,B,M,f,()=>w,()=>z(h,C.scale,C.center),p,()=>ae(j()).s/100),F=!1,Z=!0;H.addEventListener("mouseenter",()=>{Z=!0,B()}),H.addEventListener("mouseleave",()=>{Z=!1,B()}),H.addEventListener("dblclick",()=>{F=!F,Ie(F),Y(),W(),B()});function ee(u){if(u===i)return;let g=ne(h,i),x={...h},S={...m};i=u;let E=fe(g,i),V={x:1,y:1,z:1};h=E,m=V,xe(x,E,S,V,300),W()}let N=null;function xe(u,g,x,S,E){N!==null&&cancelAnimationFrame(N);let V=performance.now();function ue(re){let ke=re-V,be=Math.min(1,ke/E),te=1-Math.pow(1-be,3);h={x:u.x+(g.x-u.x)*te,y:u.y+(g.y-u.y)*te,z:u.z+(g.z-u.z)*te},m={x:x.x+(S.x-x.x)*te,y:x.y+(S.y-x.y)*te,z:x.z+(S.z-x.z)*te},J(),Y(),be<1?N=requestAnimationFrame(ue):N=null}N=requestAnimationFrame(ue)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,J()}))}function J(){oo(C,m,h,v,i,D.state,Z,{active:D.state.alphaMode,alpha:w,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:ae(j()).s/100,rgb:we({h:ae(j()).h,s:100,b:100})})}function pe(u,g,x){return Math.round(u+(g-u)*x)}function oe(u,g){let x=g>0?255:0,S=Math.abs(g);return ve({r:pe(u.r,x,S),g:pe(u.g,x,S),b:pe(u.b,x,S)})}function Re(u,g){let x=Pe(g)||{r:128,g:128,b:128},S=oe(x,.35),E=oe(x,0),V=oe(x,-.35);u.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${S}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${E}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${V}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,u.style.backgroundColor="transparent"}function ce(u){try{navigator.clipboard.writeText(u).catch(()=>{})}catch{}}function ge(u){u&&(u.style.borderColor="#4ade80",u.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{u.style.borderColor="",u.style.boxShadow=""},500))}function j(){let u=ne(h,i);return F?{r:255-u.r,g:255-u.g,b:255-u.b}:u}function W(){if(!n)return;let u=j(),g=ve(u);L&&Re(L,g);let x=T.querySelector(".box-picker-hex");x&&(x.value=g),U(),T._updateModeButtons&&T._updateModeButtons()}function U(){if(!n)return;let u=Ae[i],g=F?fe(j(),i):h,x=Ye(g,i),S=T.querySelectorAll(".box-picker-channel input"),E=T.querySelectorAll(".box-picker-channel label");for(let V=0;V<S.length;V++)E[V].textContent=u[V],E[V].style.color="",E[V].style.textShadow="none",S[V].value=String(x[V])}function Y(){let u=j(),g={rgb:u,hsb:ae(u),oklch:Te(u),hex:ve(u),alpha:w};for(let x of y)x(g)}function Ce(){let u=ne(h,i);return{rgb:u,hsb:ae(u),oklch:Te(u),hex:ve(u)}}W(),J();let de=u=>{h=fe(u,i),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)};let g=z(h,C.scale,C.center);v=-1;for(let x=Q.length-1;x>=0;x--)if(me(x,g,m,C.scale,C.center)){v=x;break}Y(),W(),B()};return{getColor:Ce,getMode:()=>i,setColor:de,setAlpha:f,getAlpha:()=>w,setMode(u){ee(u)},on(u,g){y.add(g)},off(u,g){y.delete(g)},destroy(){D.destroy(),N!==null&&cancelAnimationFrame(N),e.removeChild(T)}}}return vo(Ko);})();
