var ColorIsBox=(()=>{var Ve=Object.defineProperty;var mo=Object.getOwnPropertyDescriptor;var po=Object.getOwnPropertyNames;var xo=Object.prototype.hasOwnProperty;var go=(e,o)=>()=>(e&&(o=e(e=0)),o);var Xe=(e,o)=>{for(var t in o)Ve(e,t,{get:o[t],enumerable:!0})},yo=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of po(o))!xo.call(e,i)&&i!==t&&Ve(e,i,{get:()=>o[i],enumerable:!(n=mo(o,i))||n.enumerable});return e};var vo=e=>yo(Ve({},"__esModule",{value:!0}),e);var co={};Xe(co,{createControls:()=>Bo});function so(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function lo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Bo(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let i=m=>{let h=document.createElement("button");return h.textContent=m.toUpperCase(),h.addEventListener("click",()=>o.switchMode(m)),n.appendChild(h),h},s=i("oklch"),f=i("rgb"),a=i("hsb"),r=()=>{let m=o.mode();f.classList.toggle("active",m==="rgb"),a.classList.toggle("active",m==="hsb"),s.classList.toggle("active",m==="oklch")};r();let c=o.switchMode;o._markActive=r,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let h=n.value;/^#?[0-9a-f]{6}$/i.test(h)?o.onHexInput(h):o.onHexInput("")}),n.addEventListener("click",()=>{so(o.getRgbForCopy()?"#"+_o(o.getRgbForCopy()):"#ffffff"),lo(n)});let i=document.createElement("div");i.className="box-picker-channels";let s=[],f=[],a=["R","G","B"];for(let h=0;h<3;h++){let y=document.createElement("div");y.className="box-picker-channel";let v=document.createElement("label");v.textContent=a[h];let A=document.createElement("input");A.type="text",A.inputMode="numeric",y.appendChild(v),y.appendChild(A),i.appendChild(y),s.push(A),f.push(v),A.addEventListener("change",()=>{let b=parseFloat(A.value);isNaN(b)||o.onChannelInput(h,b,255)}),A.addEventListener("click",()=>{let b=o.getRgbForCopy();so(`${b.r}, ${b.g}, ${b.b}`),lo(A)})}let r=document.createElement("div");r.className="box-picker-hexrow";let c=document.createElement("div");c.className="box-picker-hexwrap";let m=document.createElement("label");m.textContent="Hex",c.appendChild(m),c.appendChild(n),r.appendChild(i),r.appendChild(c),e.appendChild(r),e._inputs={hexInput:n,inputs:s,labels:f}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),f=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:s,g:f,b:a})}),e.appendChild(n);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function _o(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var uo=go(()=>{});var No={};Xe(No,{createBoxColorPicker:()=>fo,createColorPicker:()=>Oo,setBoxInvert:()=>Pe});var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},We={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ae(e){let o=e.r/255,t=e.g/255,n=e.b/255,i=Math.max(o,t,n),s=Math.min(o,t,n),f=i-s,a=0;f!==0&&(i===o?a=((t-n)/f+6)%6:i===t?a=(n-o)/f+2:a=(o-t)/f+4,a*=60);let r=i===0?0:f/i*100,c=i*100;return{h:a,s:r,b:c}}function we(e){let o=e.h,t=e.s/100,n=e.b/100,i=n*t,s=i*(1-Math.abs(o/60%2-1)),f=n-i,a,r,c;return o<60?(a=i,r=s,c=0):o<120?(a=s,r=i,c=0):o<180?(a=0,r=i,c=s):o<240?(a=0,r=s,c=i):o<300?(a=s,r=0,c=i):(a=i,r=0,c=s),{r:Math.round((a+f)*255),g:Math.round((r+f)*255),b:Math.round((c+f)*255)}}function Se(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ze(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Mo(e){let o=Se(e.r/255),t=Se(e.g/255),n=Se(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*n,s=.2119034982*o+.6806995451*t+.1073969566*n,f=.0883024619*o+.2817188376*t+.6299787005*n,a=Math.cbrt(i),r=Math.cbrt(s),c=Math.cbrt(f);return{L:.2104542553*a+.793617785*r-.0040720468*c,a:1.9779984951*a-2.428592205*r+.4505937099*c,b:.0259040371*a+.7827717662*r-.808675766*c}}function Co(e,o,t){let n=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,s=e-.0894841775*o-1.291485548*t,f=n*n*n,a=i*i*i,r=s*s*s,c=4.0767416621*f-3.3077115913*a+.2309699292*r,m=-1.2684380046*f+2.6097574011*a-.3413193965*r,h=-.0041960863*f-.7034186147*a+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,ze(c)))*255),g:Math.round(Math.max(0,Math.min(1,ze(m)))*255),b:Math.round(Math.max(0,Math.min(1,ze(h)))*255)}}function Te(e){let o=Mo(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function Ee(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return Co(e.l,t,n)}function ko(e,o,t){let n=Ee({l:e,c:o,h:t});if(je(n))return{l:e,c:o,h:t};let i=0,s=o;for(let f=0;f<20;f++){let a=(i+s)/2;n=Ee({l:e,c:a,h:t}),je(n)?i=a:s=a}return{l:e,c:i,h:t}}function je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ve(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Ie(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ze=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return we({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*Ze,i=e.z*359,s=ko(t,n,i);return Ee(s)}}function fe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ae(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Te(e);return{x:t.l,y:Math.min(t.c/Ze,1),z:t.h/359}}}function Ye(e,o){let t=We[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Qe(e,o,t,n,i,s=!1){let f;e===0?f={x:n,y:o,z:t}:e===1?f={x:o,y:n,z:t}:f={x:o,y:t,z:n};let a=ne(f,i);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Je=Math.PI/6,Ao=Math.cos(Je),wo=Math.sin(Je),Me=!1;function Pe(e){Me=e}var se=0,le=0;function He(e,o){se=e,le=o}function De(){return{yaw:se,pitch:le}}function To(e){if(se===0&&le===0)return e;let o=Math.cos(se),t=Math.sin(se),n=Math.cos(le),i=Math.sin(le),s=e.x*o+e.z*t,f=e.y,a=-e.x*t+e.z*o,r=f*n-a*i,c=f*i+a*n;return{x:s,y:r,z:c}}function Ro(e){if(se===0&&le===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},t=Math.cos(se),n=Math.sin(se),i=Math.cos(le),s=Math.sin(le),f=o.x*t+o.z*n,a=o.y,r=-o.x*n+o.z*t,c=a*i-r*s,m=a*s+r*i;return{x:f+.5,y:c+.5,z:m+.5}}function I(e,o,t){let n=Ro(e);return{x:t.x+(n.y-n.x)*Ao*o,y:t.y+n.z*o-(n.x+n.y)*wo*o}}function Lo(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var Q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Vo=64,qe={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function eo(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function oo(e,o,t,n,i,s,f=!0,a=null,r=null){let{ctx:c,scale:m,center:h,width:y,height:v}=e;c.save(),c.clearRect(0,0,y,v);let A=Lo(o),b=A.map(g=>I(g,m,h));if(c.save(),c.globalAlpha=s.viewRotating?.32:1,zo(c,m,h,i),c.restore(),c.save(),c.shadowColor="rgba(0,0,0,0.35)",c.shadowBlur=8,c.shadowOffsetX=0,c.shadowOffsetY=2,Eo(c,b,A,o,i,s.viewRotating),c.restore(),f&&(c.save(),c.globalAlpha=s.viewRotating?.5:1,Po(c,i,m,h),c.restore()),n>=0){let g=ne(t,i),w=Me?{r:255-g.r,g:255-g.g,b:255-g.b}:g,T=I(t,m,h);a&&a.active&&Ho(c,T,a.rgb,a.alpha),Do(c,T,w)}c.restore()}var So={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function zo(e,o,t,n){let i=I({x:0,y:0,z:0},o,t),s=[I({x:1,y:0,z:0},o,t),I({x:0,y:1,z:0},o,t),I({x:0,y:0,z:1},o,t)],f=So[n];e.lineWidth=1.5;for(let a=0;a<s.length;a++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(s[a].x,s[a].y),e.strokeStyle=f[a],e.stroke()}function Eo(e,o,t,n,i,s){let f=[n.x,n.y,n.z],a=s?.7:1;for(let r=0;r<Q.length;r++){let c=Q[r],m=f[c.fixedAxis],h=f[c.uAxis],y=f[c.vAxis];if(h<.002&&y<.002)continue;let v=To(c.normal),A=v.x+v.y+v.z>0,b=c.quad.map(g=>o[g]);if(A)e.save(),e.globalAlpha=a,Io(e,b,c.fixedAxis,m,h,y,i),e.restore();else{e.save(),e.globalAlpha=s?.14:0,e.beginPath(),e.moveTo(b[0].x,b[0].y);for(let g=1;g<4;g++)e.lineTo(b[g].x,b[g].y);e.closePath(),e.fillStyle="#ffffff",e.fill(),e.restore()}}}function Io(e,o,t,n,i,s,f){let a=Vo,r=document.createElement("canvas");r.width=a,r.height=a;let c=r.getContext("2d"),m=c.createImageData(a,a),h=m.data;for(let Z=0;Z<a;Z++)for(let ee=0;ee<a;ee++){let N=ee/(a-1)*i,pe=Z/(a-1)*s,K=Qe(t,N,pe,n,f,Me),B=(Z*a+ee)*4;h[B]=K.r,h[B+1]=K.g,h[B+2]=K.b,h[B+3]=255}c.putImageData(m,0,0);let y=o[0],v=o[1],A=o[2],b=o[3],g=v.x-y.x,w=v.y-y.y,T=b.x-y.x,H=b.y-y.y;e.save(),e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(v.x,v.y),e.lineTo(A.x,A.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let M=2/a,L=y.x-g*M-T*M,G=y.y-w*M-H*M,D=1+2*M,F=1+2*M;e.transform(g*D/a,w*D/a,T*F/a,H*F/a,L,G),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function Po(e,o,t,n){let i=Ae[o],s=Me?[I({x:0,y:1,z:1},t,n),I({x:1,y:0,z:1},t,n),I({x:1,y:1,z:0},t,n)]:[I({x:1,y:0,z:0},t,n),I({x:0,y:1,z:0},t,n),I({x:0,y:0,z:1},t,n)],f=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let r=s[a].x+f[a].x,c=s[a].y+f[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(i[a],r,c)}e.globalAlpha=1,e.restore()}var q=30,ie=13;function Ho(e,o,t,n){let i=(q+ie)/2,s=5,f=Math.floor(o.x/s)*s,a=Math.floor(o.y/s)*s,r=q*2+s*2,c=Math.max(0,Math.min(1,n));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let g=-1;g*s<=r;g++)for(let w=-1;w*s<=r;w++)e.fillStyle=(g+w)%2===0?"#ffffff":"#d9d9d9",e.fillRect(f+g*s,a+w*s,s,s);let m="rgba("+t.r+","+t.g+","+t.b+",0)",h="rgba("+t.r+","+t.g+","+t.b+",1)",y=e;if(typeof y.createConicGradient=="function"){let g=y.createConicGradient(-Math.PI/2,o.x,o.y);g.addColorStop(0,m),g.addColorStop(1,h),e.fillStyle=g,e.fillRect(f-q,a-q,r,r)}else for(let w=0;w<36;w++){let T=-Math.PI/2+w/36*Math.PI*2,H=-Math.PI/2+(w+1)/36*Math.PI*2,M=(w+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*ie,o.y+Math.sin(T)*ie),e.arc(o.x,o.y,q,T,H),e.arc(o.x,o.y,ie,H,T,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+M.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let v=c*Math.PI*2,A=o.x+i*Math.sin(v),b=o.y-i*Math.cos(v);e.beginPath(),e.arc(A,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Do(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function to(e,o,t,n){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return I(i[e],t,n)}function Fe(){let e={x:0,y:0};return[I({x:1,y:0,z:0},1,e),I({x:0,y:1,z:0},1,e),I({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function me(e,o,t,n,i){let s=Q[e],f=[t.x,t.y,t.z],a=f[s.uAxis],r=f[s.vAxis];if(a<.002||r<.002)return null;let c={x:0,y:0,z:0},m=["x","y","z"];c[m[s.fixedAxis]]=f[s.fixedAxis];let h={...c};h[m[s.uAxis]]=a;let y={...c};y[m[s.vAxis]]=r;let v=I(c,n,i),A=I(h,n,i),b=I(y,n,i),g=A.x-v.x,w=A.y-v.y,T=b.x-v.x,H=b.y-v.y,M=g*H-w*T;if(Math.abs(M)<1e-6)return null;let L=o.x-v.x,G=o.y-v.y,D=(L*H-G*T)/M,F=(G*g-L*w)/M;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function no(e,o,t,n,i){let s=Q[e],f=[t.x,t.y,t.z],a=f[s.uAxis],r=f[s.vAxis];if(a<.002||r<.002)return null;let c={x:0,y:0,z:0},m=["x","y","z"];c[m[s.fixedAxis]]=f[s.fixedAxis];let h={...c};h[m[s.uAxis]]=a;let y={...c};y[m[s.vAxis]]=r;let v=I(c,n,i),A=I(h,n,i),b=I(y,n,i),g=A.x-v.x,w=A.y-v.y,T=b.x-v.x,H=b.y-v.y,M=g*H-w*T;if(Math.abs(M)<1e-6)return null;let L=o.x-v.x,G=o.y-v.y,D=(L*H-G*T)/M,F=(G*g-L*w)/M;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var ro=22;function ao(e,o,t,n,i,s,f,a,r,c,m,h,y,v,A){let b={...qe};function g(l){let u=e.getBoundingClientRect();return{x:l.clientX-u.left,y:l.clientY-u.top}}let w=!1,T=!1,H=!1,M=!1,L=null,G=600,D=null;function F(){Z(),D=setTimeout(ee,G)}function Z(){D!==null&&(clearTimeout(D),D=null)}function ee(){D=null,b.alphaMode=!1,be(),x(),M=!0,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.3),L=null,r()}let N=9,pe=1e3,K=null;function B(){J(),K=setTimeout(xe,pe)}function J(){K!==null&&(clearTimeout(K),K=null),Z()}function xe(){K=null,b.alphaMode=!0,x(),be(),r()}function oe(l){let u=y();return Math.hypot(l.x-u.x,l.y-u.y)}function Re(l){let u=y();return(Math.atan2(l.x-u.x,-(l.y-u.y))+Math.PI*2)%(Math.PI*2)}function ce(l){m(Re(l)/(Math.PI*2)),r()}function ge(l){let u=oe(l);return u>=ie-4&&u<=q+6}function j(l){let u=o(),R=f(),k=a();for(let C=0;C<3;C++){let E=to(C,u,R,k),P=l.x-E.x,_=l.y-E.y;if(P*P+_*_<=ro*ro)return C}return-1}function X(l){let u=o(),R=f(),k=a();for(let C=Q.length-1;C>=0;C--){let E=me(C,l,u,R,k);if(E)return{faceIndex:C,...E}}return null}let U=-1,Y={x:0,y:0},Ce=0;function de(l,u){U=l,Y=u,Ce=o()[["x","y","z"][l]],b.draggingAxisHandle=l,e.style.cursor="grabbing",r()}function d(l){if(J(),U<0)return;let u=l.x-Y.x,R=l.y-Y.y,C=Fe()[U],E=f(),_=(u*C.x+R*C.y)/E,$=Math.max(0,Math.min(1,Ce+_)),W=o(),O=["x","y","z"],he={...W,[O[U]]:$};t(he);let ye=n(),$e=s(),Ke=$e>=0?Q[$e]:null,Le={...ye};Ke&&U===Ke.fixedAxis?Le[O[U]]=$:Le[O[U]]=Math.min(ye[O[U]],$),i(Le,s()),r()}function x(){U=-1,b.draggingAxisHandle=-1}let p=-1,V=null,z=null,S=!1;function ue(l,u,R,k){p=l,b.draggingFace=l,V=null,z=null,S=!1,k&&(S=!0,z={s:u,t:R}),ke(l,u,R),e.style.cursor="crosshair",r()}function re(l,u,R){if(J(),p<0)return;let k=o(),C=f(),E=a(),P=me(p,l,k,C,E),_=p;if(!P&&!R){for(let O=Q.length-1;O>=0;O--)if(O!==p&&(P=me(O,l,k,C,E),P)){_=O;break}}if(!P&&R&&(P=no(p,l,k,C,E),_=p),!P){r();return}_!==p&&(p=_,b.draggingFace=_,V=null,S=!1,z=null);let{s:$,t:W}=P;if(u&&z){if(S){let O=Math.abs($-z.s),he=Math.abs(W-z.t),ye=.02;(O>ye||he>ye)&&(V=O>=he?"u":"v",S=!1)}V==="u"?W=z.t:V==="v"&&($=z.s)}else u||(V=null,S=!1,z=null);ke(_,$,W),r()}function ke(l,u,R){let k=Q[l],C=o(),E=["x","y","z"],P={...n()};P[E[k.uAxis]]=u*C[E[k.uAxis]],P[E[k.vAxis]]=R*C[E[k.vAxis]],P[E[k.fixedAxis]]=C[E[k.fixedAxis]],i(P,l)}function be(){p=-1,b.draggingFace=-1,V=null,S=!1,z=null}function te(l){T=!0;let u=g(l);if(c()){if(b.alphaMode){if(oe(u)<=N){b.alphaMode=!1,r();return}if(ge(u)){l.preventDefault(),w=!0,ce(u);return}b.alphaMode=!1,r();return}oe(u)<=N&&B()}let R=j(u);if(R>=0){l.preventDefault(),de(R,u);return}let k=X(u);if(k){l.preventDefault(),ue(k.faceIndex,k.s,k.t,l.shiftKey),F();return}let C=a();Math.hypot(u.x-C.x,u.y-C.y)>f()+20&&(l.preventDefault(),M=!0,L=u,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),r())}function Be(l){let u=g(l);if(w){l.preventDefault(),ce(u);return}if(M){if(l.preventDefault(),!L){L=u;return}let P=u.x-L.x,_=u.y-L.y,$=De();He(Math.max(-60,Math.min(60,$.yaw+P*.12)),Math.max(-60,Math.min(60,$.pitch+_*.12))),P!==0&&v(Math.max(0,Math.min(1,A()+P*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),L=u,r();return}if(T&&b.alphaMode&&ge(u)){l.preventDefault(),w=!0,ce(u);return}if(U>=0){l.preventDefault(),d(u);return}if(p>=0){l.preventDefault(),re(u,l.shiftKey,l.altKey);return}let R=j(u),k=X(u),C=R,E=R>=0?-1:k?k.faceIndex:-1;(C!==b.hoveredAxisHandle||E!==b.hoveredFace)&&(b.hoveredAxisHandle=C,b.hoveredFace=E,e.style.cursor=C>=0?"grab":E>=0?"crosshair":"default",r())}function _e(l){J(),T=!1,w=!1,M&&(M=!1,b.viewRotating=!1,b.ringAlpha=0,L=null,r());let u=U>=0||p>=0;x(),be(),u&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",r())}function Oe(l){if(l.touches.length!==1)return;H=!0;let u=g(l.touches[0]);if(c()){if(b.alphaMode){if(oe(u)<=N){b.alphaMode=!1,r();return}if(ge(u)){l.preventDefault(),w=!0,ce(u);return}b.alphaMode=!1,r();return}oe(u)<=N&&B()}let R=j(u);if(R>=0){l.preventDefault(),de(R,u);return}let k=X(u);if(k){l.preventDefault(),ue(k.faceIndex,k.s,k.t,!1),F();return}let C=a();Math.hypot(u.x-C.x,u.y-C.y)>f()+20&&(l.preventDefault(),M=!0,L=u,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),r())}function Ge(l){if(l.touches.length!==1)return;let u=g(l.touches[0]);if(w)l.preventDefault(),ce(u);else if(H&&b.alphaMode&&ge(u))l.preventDefault(),w=!0,ce(u);else if(U>=0)l.preventDefault(),d(u);else if(M){if(l.preventDefault(),!L){L=u;return}let R=u.x-L.x,k=u.y-L.y,C=De();He(Math.max(-60,Math.min(60,C.yaw+R*.12)),Math.max(-60,Math.min(60,C.pitch+k*.12))),R!==0&&v(Math.max(0,Math.min(1,A()+R*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),L=u,r()}else p>=0&&(l.preventDefault(),re(u,!1,!1))}function Ne(l){J(),H=!1,w=!1,M&&(M=!1,b.viewRotating=!1,b.ringAlpha=0,L=null,r()),x(),be(),r()}function Ue(l){if(b.alphaMode){if(l.key==="Escape"){b.alphaMode=!1,r();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),m(Math.min(1,h()+(l.shiftKey?.08:.02))),r();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),m(Math.max(0,h()-(l.shiftKey?.08:.02))),r();return}}let u=l.shiftKey?.04:.004,R=n(),k=o(),C=Fe(),E=0,P=0;switch(l.key){case"ArrowRight":E=1;break;case"ArrowLeft":E=-1;break;case"ArrowUp":P=-1;break;case"ArrowDown":P=1;break;default:return}l.preventDefault();let _={...R},$=["x","y","z"];for(let W=0;W<3;W++){let O=E*C[W].x+P*C[W].y;if(Math.abs(O)>.3){let he=R[$[W]]+u*Math.sign(O);_[$[W]]=Math.max(0,Math.min(k[$[W]],he))}}i(_,s()),r()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",Be),window.addEventListener("mouseup",_e),e.addEventListener("touchstart",Oe,{passive:!1}),e.addEventListener("touchmove",Ge,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",Ue),e.setAttribute("tabindex","0");function ho(){J(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",_e),e.removeEventListener("touchstart",Oe),e.removeEventListener("touchmove",Ge),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",Ue)}return{state:b,destroy:ho}}var io=`.box-picker {\r
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
`;var Oo=fo,bo=!1;function Go(){if(bo||typeof document>"u")return;bo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=io,document.head.appendChild(e)}function fo(e,o={}){let t=o.size??300,n=o.controls??!0,i=o.showInputs??!1,s=o.showModeToggle??!1,f=o.showCorners??!1,a={mode:()=>r,switchMode:d=>ee(d),onHexInput:d=>{let x=Ie(d);x?(h=fe(F?{r:255-x.r,g:255-x.g,b:255-x.b}:x,r),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)},Y(),X(),B()):X()},onChannelInput:(d,x,p)=>{let V=Math.max(0,Math.min(p,x)),z=["x","y","z"],S=V/p;if(F){let ue={...h,[z[d]]:S},re=ne(ue,r);h=fe({r:255-re.r,g:255-re.g,b:255-re.b},r)}else h={...h,[z[d]]:S};S>m[z[d]]&&(m={...m,[z[d]]:S}),Y(),X(),B()},getRgbForCopy:()=>ne(h,r),onRandom:d=>de(d),onReset:()=>de({r:0,g:0,b:0})},r=o.mode??"rgb",c=o.initialColor?fe(o.initialColor,r):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},h={...c},y=0,v=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function b(d){let x=Math.max(0,Math.min(1,d));x!==A&&(A=x,Y(),X(),B())}function g(d){let x=j(),p=ae(x);p.s=Math.max(0,Math.min(100,d*100));let V=we(p);de(F?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let w=new Set;Go();let T=document.createElement("div");T.className="box-picker";let H=document.createElement("canvas");H.style.cursor="grab",T.appendChild(H);let M=eo(H,t),L=null,G=document.createElement("div");G.className="box-picker-controls",L=document.createElement("div"),L.className="box-picker-swatch",G.appendChild(L),T.appendChild(G),(i||s||f)&&Promise.resolve().then(()=>(uo(),co)).then(d=>{d.createControls(G,a,{showInputs:i,showModeToggle:s,showCorners:f})}).catch(()=>{}),e.appendChild(T);let D=ao(H,()=>m,d=>{m=d},()=>h,(d,x)=>{h=d,y=x,Y(),X()},()=>y,()=>M.scale,()=>M.center,B,v,b,()=>A,()=>I(h,M.scale,M.center),g,()=>ae(j()).s/100),F=!1,Z=!0;H.addEventListener("mouseenter",()=>{Z=!0,B()}),H.addEventListener("mouseleave",()=>{Z=!1,B()}),H.addEventListener("dblclick",()=>{F=!F,Pe(F),Y(),X(),B()});function ee(d){if(d===r)return;let x=ne(h,r),p={...h},V={...m};r=d;let z=fe(x,r),S={x:1,y:1,z:1};h=z,m=S,pe(p,z,V,S,300),X()}let N=null;function pe(d,x,p,V,z){N!==null&&cancelAnimationFrame(N);let S=performance.now();function ue(re){let ke=re-S,be=Math.min(1,ke/z),te=1-Math.pow(1-be,3);h={x:d.x+(x.x-d.x)*te,y:d.y+(x.y-d.y)*te,z:d.z+(x.z-d.z)*te},m={x:p.x+(V.x-p.x)*te,y:p.y+(V.y-p.y)*te,z:p.z+(V.z-p.z)*te},J(),Y(),be<1?N=requestAnimationFrame(ue):N=null}N=requestAnimationFrame(ue)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,J()}))}function J(){oo(M,m,h,y,r,D.state,Z,{active:D.state.alphaMode,alpha:A,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:ae(j()).s/100,rgb:we({h:ae(j()).h,s:100,b:100})})}function xe(d,x,p){return Math.round(d+(x-d)*p)}function oe(d,x){let p=x>0?255:0,V=Math.abs(x);return ve({r:xe(d.r,p,V),g:xe(d.g,p,V),b:xe(d.b,p,V)})}function Re(d,x){let p=Ie(x)||{r:128,g:128,b:128},V=oe(p,.35),z=oe(p,0),S=oe(p,-.35);d.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${z}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,d.style.backgroundColor="transparent"}function ce(d){try{navigator.clipboard.writeText(d).catch(()=>{})}catch{}}function ge(d){d&&(d.style.borderColor="#4ade80",d.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{d.style.borderColor="",d.style.boxShadow=""},500))}function j(){let d=ne(h,r);return F?{r:255-d.r,g:255-d.g,b:255-d.b}:d}function X(){if(!n)return;let d=j(),x=ve(d);L&&Re(L,x);let p=T.querySelector(".box-picker-hex");p&&(p.value=x),U(),T._updateModeButtons&&T._updateModeButtons()}function U(){if(!n)return;let d=Ae[r],x=F?fe(j(),r):h,p=Ye(x,r),V=T.querySelectorAll(".box-picker-channel input"),z=T.querySelectorAll(".box-picker-channel label");for(let S=0;S<V.length;S++)z[S].textContent=d[S],z[S].style.color="",z[S].style.textShadow="none",V[S].value=String(p[S])}function Y(){let d=j(),x={rgb:d,hsb:ae(d),oklch:Te(d),hex:ve(d),alpha:A};for(let p of w)p(x)}function Ce(){let d=ne(h,r);return{rgb:d,hsb:ae(d),oklch:Te(d),hex:ve(d)}}X(),J();let de=d=>{h=fe(d,r),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)};let x=I(h,M.scale,M.center);y=-1;for(let p=Q.length-1;p>=0;p--)if(me(p,x,m,M.scale,M.center)){y=p;break}Y(),X(),B()};return{getColor:Ce,getMode:()=>r,setColor:de,setAlpha:b,getAlpha:()=>A,setMode(d){ee(d)},on(d,x){w.add(x)},off(d,x){w.delete(x)},destroy(){D.destroy(),N!==null&&cancelAnimationFrame(N),e.removeChild(T)}}}return vo(No);})();
