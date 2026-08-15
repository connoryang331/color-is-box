var ColorIsBox=(()=>{var Re=Object.defineProperty;var po=Object.getOwnPropertyDescriptor;var go=Object.getOwnPropertyNames;var yo=Object.prototype.hasOwnProperty;var vo=(e,o)=>()=>(e&&(o=e(e=0)),o);var Xe=(e,o)=>{for(var t in o)Re(e,t,{get:o[t],enumerable:!0})},Mo=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of go(o))!yo.call(e,i)&&i!==t&&Re(e,i,{get:()=>o[i],enumerable:!(r=po(o,i))||r.enumerable});return e};var Co=e=>Mo(Re({},"__esModule",{value:!0}),e);var bo={};Xe(bo,{createControls:()=>Oo});function lo(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function uo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Oo(e,o,t){if(t.showModeToggle){let r=document.createElement("div");r.className="box-picker-mode-toggle";let i=h=>{let f=document.createElement("button");return f.textContent=h.toUpperCase(),f.addEventListener("click",()=>o.switchMode(h)),r.appendChild(f),f},c=i("oklch"),u=i("rgb"),a=i("hsb"),n=()=>{let h=o.mode();u.classList.toggle("active",h==="rgb"),a.classList.toggle("active",h==="hsb"),c.classList.toggle("active",h==="oklch")};n();let x=o.switchMode;o._markActive=n,e.appendChild(r)}if(t.showInputs){let r=document.createElement("input");r.className="box-picker-hex",r.type="text",r.spellcheck=!1,r.addEventListener("change",()=>{let f=r.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),r.addEventListener("click",()=>{lo(o.getRgbForCopy()?"#"+_o(o.getRgbForCopy()):"#ffffff"),uo(r)});let i=document.createElement("div");i.className="box-picker-channels";let c=[],u=[],a=["R","G","B"];for(let f=0;f<3;f++){let g=document.createElement("div");g.className="box-picker-channel";let M=document.createElement("label");M.textContent=a[f];let w=document.createElement("input");w.type="text",w.inputMode="numeric",g.appendChild(M),g.appendChild(w),i.appendChild(g),c.push(w),u.push(M),w.addEventListener("change",()=>{let b=parseFloat(w.value);isNaN(b)||o.onChannelInput(f,b,255)}),w.addEventListener("click",()=>{let b=o.getRgbForCopy();lo(`${b.r}, ${b.g}, ${b.b}`),uo(w)})}let n=document.createElement("div");n.className="box-picker-hexrow";let x=document.createElement("div");x.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",x.appendChild(h),x.appendChild(r),n.appendChild(i),n.appendChild(x),e.appendChild(n),e._inputs={hexInput:r,inputs:c,labels:u}}if(t.showCorners){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),u=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:c,g:u,b:a})}),e.appendChild(r);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function _o(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var fo=vo(()=>{});var Uo={};Xe(Uo,{createBoxColorPicker:()=>xo,createColorPicker:()=>Go,setBoxInvert:()=>Pe});var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},We={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function he(e){let o=e.r/255,t=e.g/255,r=e.b/255,i=Math.max(o,t,r),c=Math.min(o,t,r),u=i-c,a=0;u!==0&&(i===o?a=((t-r)/u+6)%6:i===t?a=(r-o)/u+2:a=(o-t)/u+4,a*=60);let n=i===0?0:u/i*100,x=i*100;return{h:a,s:n,b:x}}function He(e){let o=e.h,t=e.s/100,r=e.b/100,i=r*t,c=i*(1-Math.abs(o/60%2-1)),u=r-i,a,n,x;return o<60?(a=i,n=c,x=0):o<120?(a=c,n=i,x=0):o<180?(a=0,n=i,x=c):o<240?(a=0,n=c,x=i):o<300?(a=c,n=0,x=i):(a=i,n=0,x=c),{r:Math.round((a+u)*255),g:Math.round((n+u)*255),b:Math.round((x+u)*255)}}function ze(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ee(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function ko(e){let o=ze(e.r/255),t=ze(e.g/255),r=ze(e.b/255),i=.4122214708*o+.5363325363*t+.0514459929*r,c=.2119034982*o+.6806995451*t+.1073969566*r,u=.0883024619*o+.2817188376*t+.6299787005*r,a=Math.cbrt(i),n=Math.cbrt(c),x=Math.cbrt(u);return{L:.2104542553*a+.793617785*n-.0040720468*x,a:1.9779984951*a-2.428592205*n+.4505937099*x,b:.0259040371*a+.7827717662*n-.808675766*x}}function wo(e,o,t){let r=e+.3963377774*o+.2158037573*t,i=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,u=r*r*r,a=i*i*i,n=c*c*c,x=4.0767416621*u-3.3077115913*a+.2309699292*n,h=-1.2684380046*u+2.6097574011*a-.3413193965*n,f=-.0041960863*u-.7034186147*a+1.707614701*n;return{r:Math.round(Math.max(0,Math.min(1,Ee(x)))*255),g:Math.round(Math.max(0,Math.min(1,Ee(h)))*255),b:Math.round(Math.max(0,Math.min(1,Ee(f)))*255)}}function Te(e){let o=ko(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function Se(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return wo(e.l,t,r)}function Ao(e,o,t){let r=Se({l:e,c:o,h:t});if(je(r))return{l:e,c:o,h:t};let i=0,c=o;for(let u=0;u<20;u++){let a=(i+c)/2;r=Se({l:e,c:a,h:t}),je(r)?i=a:c=a}return{l:e,c:i,h:t}}function je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ve(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Ie(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ze=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return He({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*Ze,i=e.z*359,c=Ao(t,r,i);return Se(c)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=he(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Te(e);return{x:t.l,y:Math.min(t.c/Ze,1),z:t.h/359}}}function Ye(e,o){let t=We[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Qe(e,o,t,r,i,c=!1){let u;e===0?u={x:r,y:o,z:t}:e===1?u={x:o,y:r,z:t}:u={x:o,y:t,z:r};let a=ne(u,i);return c?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var qe=Math.PI/6,To=Math.cos(qe),Lo=Math.sin(qe),Me=!1;function Pe(e){Me=e}var re=0,ae=0;function Ce(e,o){re=e,ae=o}function De(){return{yaw:re,pitch:ae}}function eo(){re=0,ae=0}function Vo(e){if(re===0&&ae===0)return e;let o=Math.cos(re),t=Math.sin(re),r=Math.cos(ae),i=Math.sin(ae),c=e.x*o+e.z*t,u=e.y,a=-e.x*t+e.z*o,n=u*r-a*i,x=u*i+a*r;return{x:c,y:n,z:x}}function Ro(e){if(re===0&&ae===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},t=Math.cos(re),r=Math.sin(re),i=Math.cos(ae),c=Math.sin(ae),u=o.x*t+o.z*r,a=o.y,n=-o.x*r+o.z*t,x=a*i-n*c,h=a*c+n*i;return{x:u+.5,y:x+.5,z:h+.5}}function H(e,o,t){let r=Ro(e);return{x:t.x+(r.y-r.x)*To*o,y:t.y+r.z*o-(r.x+r.y)*Lo*o}}function zo(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Eo=64,oo={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function to(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function no(e,o,t,r,i,c,u=!0,a=null){let{ctx:n,scale:x,center:h,width:f,height:g}=e;n.save(),n.clearRect(0,0,f,g);let M=zo(o),w=M.map(b=>H(b,x,h));if(Ho(n,x,h,i),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,Io(n,w,M,o,i,c.viewRotating),n.restore(),u&&!c.viewRotating&&Po(n,i,x,h),r>=0){let b=ne(t,i),z=Me?{r:255-b.r,g:255-b.g,b:255-b.b}:b,C=H(t,x,h);a&&a.active&&Do(n,C,a.rgb,a.alpha),Fo(n,C,z)}n.restore()}var So={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Ho(e,o,t,r){let i=H({x:0,y:0,z:0},o,t),c=[H({x:1,y:0,z:0},o,t),H({x:0,y:1,z:0},o,t),H({x:0,y:0,z:1},o,t)],u=So[r];e.lineWidth=1.5;for(let a=0;a<c.length;a++)e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(c[a].x,c[a].y),e.strokeStyle=u[a],e.stroke()}function Io(e,o,t,r,i,c){let u=[r.x,r.y,r.z];for(let a=0;a<Y.length;a++){let n=Y[a],x=u[n.fixedAxis],h=u[n.uAxis],f=u[n.vAxis];if(h<.002&&f<.002)continue;let g=Vo(n.normal),M=g.x+g.y+g.z>0,w=n.quad.map(b=>o[b]);M?Je(e,w,n.fixedAxis,x,h,f,i):(e.save(),e.globalAlpha=c?.5:0,Je(e,w,n.fixedAxis,x,h,f,i),e.restore())}}function Je(e,o,t,r,i,c,u){let a=Eo,n=document.createElement("canvas");n.width=a,n.height=a;let x=n.getContext("2d"),h=x.createImageData(a,a),f=h.data;for(let j=0;j<a;j++)for(let ee=0;ee<a;ee++){let N=ee/(a-1)*i,me=j/(a-1)*c,K=Qe(t,N,me,r,u,Me),B=(j*a+ee)*4;f[B]=K.r,f[B+1]=K.g,f[B+2]=K.b,f[B+3]=255}x.putImageData(h,0,0);let g=o[0],M=o[1],w=o[2],b=o[3],z=M.x-g.x,C=M.y-g.y,V=b.x-g.x,P=b.y-g.y;e.save(),e.beginPath(),e.moveTo(g.x,g.y),e.lineTo(M.x,M.y),e.lineTo(w.x,w.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let y=2/a,T=g.x-z*y-V*y,G=g.y-C*y-P*y,F=1+2*y,D=1+2*y;e.transform(z*F/a,C*F/a,V*D/a,P*D/a,T,G),e.imageSmoothingEnabled=!0,e.drawImage(n,0,0),e.restore()}function Po(e,o,t,r){let i=Ae[o],c=Me?[H({x:0,y:1,z:1},t,r),H({x:1,y:0,z:1},t,r),H({x:1,y:1,z:0},t,r)]:[H({x:1,y:0,z:0},t,r),H({x:0,y:1,z:0},t,r),H({x:0,y:0,z:1},t,r)],u=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let n=c[a].x+u[a].x,x=c[a].y+u[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(i[a],n,x)}e.globalAlpha=1,e.restore()}var q=30,se=13;function Do(e,o,t,r){let i=(q+se)/2,c=5,u=Math.floor(o.x/c)*c,a=Math.floor(o.y/c)*c,n=q*2+c*2,x=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,se,0,Math.PI*2,!0),e.clip();for(let z=-1;z*c<=n;z++)for(let C=-1;C*c<=n;C++)e.fillStyle=(z+C)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+z*c,a+C*c,c,c);let h="rgba("+t.r+","+t.g+","+t.b+",0)",f="rgba("+t.r+","+t.g+","+t.b+",1)",g=e;if(typeof g.createConicGradient=="function"){let z=g.createConicGradient(-Math.PI/2,o.x,o.y);z.addColorStop(0,h),z.addColorStop(1,f),e.fillStyle=z,e.fillRect(u-q,a-q,n,n)}else for(let C=0;C<36;C++){let V=-Math.PI/2+C/36*Math.PI*2,P=-Math.PI/2+(C+1)/36*Math.PI*2,y=(C+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(V)*se,o.y+Math.sin(V)*se),e.arc(o.x,o.y,q,V,P),e.arc(o.x,o.y,se,P,V,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+y.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,se,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let M=x*Math.PI*2,w=o.x+i*Math.sin(M),b=o.y-i*Math.cos(M);e.beginPath(),e.arc(w,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Fo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function ro(e,o,t,r){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return H(i[e],t,r)}function Fe(){let e={x:0,y:0};return[H({x:1,y:0,z:0},1,e),H({x:0,y:1,z:0},1,e),H({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function xe(e,o,t,r,i){let c=Y[e],u=[t.x,t.y,t.z],a=u[c.uAxis],n=u[c.vAxis];if(a<.002||n<.002)return null;let x={x:0,y:0,z:0},h=["x","y","z"];x[h[c.fixedAxis]]=u[c.fixedAxis];let f={...x};f[h[c.uAxis]]=a;let g={...x};g[h[c.vAxis]]=n;let M=H(x,r,i),w=H(f,r,i),b=H(g,r,i),z=w.x-M.x,C=w.y-M.y,V=b.x-M.x,P=b.y-M.y,y=z*P-C*V;if(Math.abs(y)<1e-6)return null;let T=o.x-M.x,G=o.y-M.y,F=(T*P-G*V)/y,D=(G*z-T*C)/y;return F<-.05||F>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}function ao(e,o,t,r,i){let c=Y[e],u=[t.x,t.y,t.z],a=u[c.uAxis],n=u[c.vAxis];if(a<.002||n<.002)return null;let x={x:0,y:0,z:0},h=["x","y","z"];x[h[c.fixedAxis]]=u[c.fixedAxis];let f={...x};f[h[c.uAxis]]=a;let g={...x};g[h[c.vAxis]]=n;let M=H(x,r,i),w=H(f,r,i),b=H(g,r,i),z=w.x-M.x,C=w.y-M.y,V=b.x-M.x,P=b.y-M.y,y=z*P-C*V;if(Math.abs(y)<1e-6)return null;let T=o.x-M.x,G=o.y-M.y,F=(T*P-G*V)/y,D=(G*z-T*C)/y;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}var io=22;function so(e,o,t,r,i,c,u,a,n,x,h,f,g,M,w){let b={...oo};function z(s){let d=e.getBoundingClientRect();return{x:s.clientX-d.left,y:s.clientY-d.top}}let C=!1,V=!1,P=!1,y=!1,T=null,G=600,F=null;function D(){j(),F=setTimeout(ee,G)}function j(){F!==null&&(clearTimeout(F),F=null)}function ee(){F=null,b.alphaMode=!1,ue(),p(),y=!0,b.viewRotating=!0,T=null,n()}let N=9,me=1e3,K=null;function B(){Q(),K=setTimeout(pe,me)}function Q(){K!==null&&(clearTimeout(K),K=null),j()}function pe(){K=null,b.alphaMode=!0,p(),ue(),n()}function oe(s){let d=g();return Math.hypot(s.x-d.x,s.y-d.y)}function Le(s){let d=g();return(Math.atan2(s.x-d.x,-(s.y-d.y))+Math.PI*2)%(Math.PI*2)}function ce(s){h(Le(s)/(Math.PI*2)),n()}function ge(s){let d=oe(s);return d>=se-4&&d<=q+6}function J(s){let d=o(),A=u(),k=a();for(let v=0;v<3;v++){let S=ro(v,d,A,k),I=s.x-S.x,O=s.y-S.y;if(I*I+O*O<=io*io)return v}return-1}function X(s){let d=o(),A=u(),k=a();for(let v=Y.length-1;v>=0;v--){let S=xe(v,s,d,A,k);if(S)return{faceIndex:v,...S}}return null}let U=-1,Z={x:0,y:0},ke=0;function le(s,d){U=s,Z=d,ke=o()[["x","y","z"][s]],b.draggingAxisHandle=s,e.style.cursor="grabbing",n()}function l(s){if(Q(),U<0)return;let d=s.x-Z.x,A=s.y-Z.y,v=Fe()[U],S=u(),O=(d*v.x+A*v.y)/S,$=Math.max(0,Math.min(1,ke+O)),W=o(),_=["x","y","z"],fe={...W,[_[U]]:$};t(fe);let ye=r(),$e=c(),Ke=$e>=0?Y[$e]:null,Ve={...ye};Ke&&U===Ke.fixedAxis?Ve[_[U]]=$:Ve[_[U]]=Math.min(ye[_[U]],$),i(Ve,c()),n()}function p(){U=-1,b.draggingAxisHandle=-1}let m=-1,L=null,E=null,R=!1;function de(s,d,A,k){m=s,b.draggingFace=s,L=null,E=null,R=!1,k&&(R=!0,E={s:d,t:A}),we(s,d,A),e.style.cursor="crosshair",n()}function ie(s,d,A){if(Q(),m<0)return;let k=o(),v=u(),S=a(),I=xe(m,s,k,v,S),O=m;if(!I&&!A){for(let _=Y.length-1;_>=0;_--)if(_!==m&&(I=xe(_,s,k,v,S),I)){O=_;break}}if(!I&&A&&(I=ao(m,s,k,v,S),O=m),!I){n();return}O!==m&&(m=O,b.draggingFace=O,L=null,R=!1,E=null);let{s:$,t:W}=I;if(d&&E){if(R){let _=Math.abs($-E.s),fe=Math.abs(W-E.t),ye=.02;(_>ye||fe>ye)&&(L=_>=fe?"u":"v",R=!1)}L==="u"?W=E.t:L==="v"&&($=E.s)}else d||(L=null,R=!1,E=null);we(O,$,W),n()}function we(s,d,A){let k=Y[s],v=o(),S=["x","y","z"],I={...r()};I[S[k.uAxis]]=d*v[S[k.uAxis]],I[S[k.vAxis]]=A*v[S[k.vAxis]],I[S[k.fixedAxis]]=v[S[k.fixedAxis]],i(I,s)}function ue(){m=-1,b.draggingFace=-1,L=null,R=!1,E=null}function te(s){V=!0;let d=z(s);if(x()){if(b.alphaMode){if(oe(d)<=N){b.alphaMode=!1,n();return}if(ge(d)){s.preventDefault(),C=!0,ce(d);return}b.alphaMode=!1,n();return}oe(d)<=N&&B()}let A=J(d);if(A>=0){s.preventDefault(),le(A,d);return}let k=X(d);if(k){s.preventDefault(),de(k.faceIndex,k.s,k.t,s.shiftKey),b.alphaMode||D();return}let v=a();Math.hypot(d.x-v.x,d.y-v.y)>u()+20&&(s.preventDefault(),y=!0,T=d,b.viewRotating=!0,n())}function Be(s){let d=z(s);if(C){s.preventDefault(),ce(d);return}if(y){if(s.preventDefault(),!T){T=d;return}let I=d.x-T.x,O=d.y-T.y,$=De();Ce(Math.max(-60,Math.min(60,$.yaw+I*.12)),Math.max(-60,Math.min(60,$.pitch+O*.12))),I!==0&&M(Math.max(0,Math.min(1,w()+I*.002))),T=d,n();return}if(V&&b.alphaMode&&ge(d)){s.preventDefault(),C=!0,ce(d);return}if(U>=0){s.preventDefault(),l(d);return}if(m>=0){s.preventDefault(),ie(d,s.shiftKey,s.altKey);return}let A=J(d),k=X(d),v=A,S=A>=0?-1:k?k.faceIndex:-1;(v!==b.hoveredAxisHandle||S!==b.hoveredFace)&&(b.hoveredAxisHandle=v,b.hoveredFace=S,e.style.cursor=v>=0?"grab":S>=0?"crosshair":"default",n())}function Oe(s){Q(),V=!1,C=!1,y&&(y=!1,b.viewRotating=!1,T=null,n());let d=U>=0||m>=0;p(),ue(),d&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",n())}function _e(s){if(s.touches.length!==1)return;P=!0;let d=z(s.touches[0]);if(x()){if(b.alphaMode){if(oe(d)<=N){b.alphaMode=!1,n();return}if(ge(d)){s.preventDefault(),C=!0,ce(d);return}b.alphaMode=!1,n();return}oe(d)<=N&&B()}let A=J(d);if(A>=0){s.preventDefault(),le(A,d);return}let k=X(d);if(k){s.preventDefault(),de(k.faceIndex,k.s,k.t,!1),b.alphaMode||D();return}let v=a();Math.hypot(d.x-v.x,d.y-v.y)>u()+20&&(s.preventDefault(),y=!0,T=d,b.viewRotating=!0,n())}function Ge(s){if(s.touches.length!==1)return;let d=z(s.touches[0]);if(C)s.preventDefault(),ce(d);else if(P&&b.alphaMode&&ge(d))s.preventDefault(),C=!0,ce(d);else if(U>=0)s.preventDefault(),l(d);else if(y){if(s.preventDefault(),!T){T=d;return}let A=d.x-T.x,k=d.y-T.y,v=De();Ce(Math.max(-60,Math.min(60,v.yaw+A*.12)),Math.max(-60,Math.min(60,v.pitch+k*.12))),A!==0&&M(Math.max(0,Math.min(1,w()+A*.002))),T=d,n()}else m>=0&&(s.preventDefault(),ie(d,!1,!1))}function Ne(s){Q(),P=!1,C=!1,y&&(y=!1,b.viewRotating=!1,T=null,n()),p(),ue(),n()}function Ue(s){if(s.key==="1"){Ce(Math.PI/4,0),n();return}if(s.key==="0"){eo(),n();return}if(s.key==="2"){Ce(.95,-.54),n();return}if(b.alphaMode){if(s.key==="Escape"){b.alphaMode=!1,n();return}if(s.key==="ArrowUp"||s.key==="ArrowRight"){s.preventDefault(),h(Math.min(1,f()+(s.shiftKey?.08:.02))),n();return}if(s.key==="ArrowDown"||s.key==="ArrowLeft"){s.preventDefault(),h(Math.max(0,f()-(s.shiftKey?.08:.02))),n();return}}let d=s.shiftKey?.04:.004,A=r(),k=o(),v=Fe(),S=0,I=0;switch(s.key){case"ArrowRight":S=1;break;case"ArrowLeft":S=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}s.preventDefault();let O={...A},$=["x","y","z"];for(let W=0;W<3;W++){let _=S*v[W].x+I*v[W].y;if(Math.abs(_)>.3){let fe=A[$[W]]+d*Math.sign(_);O[$[W]]=Math.max(0,Math.min(k[$[W]],fe))}}i(O,c()),n()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",Be),window.addEventListener("mouseup",Oe),e.addEventListener("touchstart",_e,{passive:!1}),e.addEventListener("touchmove",Ge,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",Ue),e.setAttribute("tabindex","0");function mo(){Q(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",Oe),e.removeEventListener("touchstart",_e),e.removeEventListener("touchmove",Ge),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",Ue)}return{state:b,destroy:mo}}var co=`.box-picker {\r
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
`;var Go=xo,ho=!1;function No(){if(ho||typeof document>"u")return;ho=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=co,document.head.appendChild(e)}function xo(e,o={}){let t=o.size??300,r=o.controls??!0,i=o.showInputs??!1,c=o.showModeToggle??!1,u=o.showCorners??!1,a={mode:()=>n,switchMode:l=>ee(l),onHexInput:l=>{let p=Ie(l);p?(f=be(D?{r:255-p.r,g:255-p.g,b:255-p.b}:p,n),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)},Z(),X(),B()):X()},onChannelInput:(l,p,m)=>{let L=Math.max(0,Math.min(m,p)),E=["x","y","z"],R=L/m;if(D){let de={...f,[E[l]]:R},ie=ne(de,n);f=be({r:255-ie.r,g:255-ie.g,b:255-ie.b},n)}else f={...f,[E[l]]:R};R>h[E[l]]&&(h={...h,[E[l]]:R}),Z(),X(),B()},getRgbForCopy:()=>ne(f,n),onRandom:l=>le(l),onReset:()=>le({r:0,g:0,b:0})},n=o.mode??"rgb",x=o.initialColor?be(o.initialColor,n):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},f={...x},g=0,M=()=>o.alpha!==void 0,w=Math.max(0,Math.min(1,o.alpha??1));function b(l){let p=Math.max(0,Math.min(1,l));p!==w&&(w=p,Z(),X(),B())}function z(l){let p=J(),m=he(p);m.s=Math.max(0,Math.min(100,l*100));let L=He(m);le(D?{r:255-L.r,g:255-L.g,b:255-L.b}:L)}let C=new Set;No();let V=document.createElement("div");V.className="box-picker";let P=document.createElement("canvas");P.style.cursor="grab",V.appendChild(P);let y=to(P,t),T=null,G=document.createElement("div");G.className="box-picker-controls",T=document.createElement("div"),T.className="box-picker-swatch",G.appendChild(T),V.appendChild(G),(i||c||u)&&Promise.resolve().then(()=>(fo(),bo)).then(l=>{l.createControls(G,a,{showInputs:i,showModeToggle:c,showCorners:u})}).catch(()=>{}),e.appendChild(V);let F=so(P,()=>h,l=>{h=l},()=>f,(l,p)=>{f=l,g=p,Z(),X()},()=>g,()=>y.scale,()=>y.center,B,M,b,()=>w,()=>H(f,y.scale,y.center),z,()=>he(J()).s/100),D=!1,j=!0;P.addEventListener("mouseenter",()=>{j=!0,B()}),P.addEventListener("mouseleave",()=>{j=!1,B()}),P.addEventListener("dblclick",()=>{D=!D,Pe(D),Z(),X(),B()});function ee(l){if(l===n)return;let p=ne(f,n),m={...f},L={...h};n=l;let E=be(p,n),R={x:1,y:1,z:1};f=E,h=R,me(m,E,L,R,300),X()}let N=null;function me(l,p,m,L,E){N!==null&&cancelAnimationFrame(N);let R=performance.now();function de(ie){let we=ie-R,ue=Math.min(1,we/E),te=1-Math.pow(1-ue,3);f={x:l.x+(p.x-l.x)*te,y:l.y+(p.y-l.y)*te,z:l.z+(p.z-l.z)*te},h={x:m.x+(L.x-m.x)*te,y:m.y+(L.y-m.y)*te,z:m.z+(L.z-m.z)*te},Q(),Z(),ue<1?N=requestAnimationFrame(de):N=null}N=requestAnimationFrame(de)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,Q()}))}function Q(){no(y,h,f,g,n,F.state,j,{active:F.state.alphaMode,alpha:w,rgb:J()})}function pe(l,p,m){return Math.round(l+(p-l)*m)}function oe(l,p){let m=p>0?255:0,L=Math.abs(p);return ve({r:pe(l.r,m,L),g:pe(l.g,m,L),b:pe(l.b,m,L)})}function Le(l,p){let m=Ie(p)||{r:128,g:128,b:128},L=oe(m,.35),E=oe(m,0),R=oe(m,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${L}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${E}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${R}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function ce(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function ge(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function J(){let l=ne(f,n);return D?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function X(){if(!r)return;let l=J(),p=ve(l);T&&Le(T,p);let m=V.querySelector(".box-picker-hex");m&&(m.value=p),U(),V._updateModeButtons&&V._updateModeButtons()}function U(){if(!r)return;let l=Ae[n],p=D?be(J(),n):f,m=Ye(p,n),L=V.querySelectorAll(".box-picker-channel input"),E=V.querySelectorAll(".box-picker-channel label");for(let R=0;R<L.length;R++)E[R].textContent=l[R],E[R].style.color="",E[R].style.textShadow="none",L[R].value=String(m[R])}function Z(){let l=J(),p={rgb:l,hsb:he(l),oklch:Te(l),hex:ve(l),alpha:w};for(let m of C)m(p)}function ke(){let l=ne(f,n);return{rgb:l,hsb:he(l),oklch:Te(l),hex:ve(l)}}X(),Q();let le=l=>{f=be(l,n),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)};let p=H(f,y.scale,y.center);g=-1;for(let m=Y.length-1;m>=0;m--)if(xe(m,p,h,y.scale,y.center)){g=m;break}Z(),X(),B()};return{getColor:ke,getMode:()=>n,setColor:le,setAlpha:b,getAlpha:()=>w,setMode(l){ee(l)},on(l,p){C.add(p)},off(l,p){C.delete(p)},destroy(){F.destroy(),N!==null&&cancelAnimationFrame(N),e.removeChild(V)}}}return Co(Uo);})();
