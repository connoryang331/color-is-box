var ColorIsBoxElement=(()=>{var Pe=Object.defineProperty;var wo=Object.getOwnPropertyDescriptor;var Ao=Object.getOwnPropertyNames;var To=Object.prototype.hasOwnProperty;var Ro=(e,o)=>()=>(e&&(o=e(e=0)),o);var qe=(e,o)=>{for(var n in o)Pe(e,n,{get:o[n],enumerable:!0})},Lo=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of Ao(o))!To.call(e,r)&&r!==n&&Pe(e,r,{get:()=>o[r],enumerable:!(t=wo(o,r))||t.enumerable});return e};var Vo=e=>Lo(Pe({},"__esModule",{value:!0}),e);var yo={};qe(yo,{createControls:()=>Xo});function go(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function po(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Xo(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=b=>{let x=document.createElement("button");return x.textContent=b.toUpperCase(),x.addEventListener("click",()=>o.switchMode(b)),t.appendChild(x),x},s=r("oklch"),c=r("rgb"),i=r("hsb"),a=()=>{let b=o.mode();c.classList.toggle("active",b==="rgb"),i.classList.toggle("active",b==="hsb"),s.classList.toggle("active",b==="oklch")};a();let h=o.switchMode;o._markActive=a,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let x=t.value;/^#?[0-9a-f]{6}$/i.test(x)?o.onHexInput(x):o.onHexInput("")}),t.addEventListener("click",()=>{go(o.getRgbForCopy()?"#"+Wo(o.getRgbForCopy()):"#ffffff"),po(t)});let r=document.createElement("div");r.className="box-picker-channels";let s=[],c=[],i=["R","G","B"];for(let x=0;x<3;x++){let p=document.createElement("div");p.className="box-picker-channel";let M=document.createElement("label");M.textContent=i[x];let w=document.createElement("input");w.type="text",w.inputMode="numeric",p.appendChild(M),p.appendChild(w),r.appendChild(p),s.push(w),c.push(M),w.addEventListener("change",()=>{let f=parseFloat(w.value);isNaN(f)||o.onChannelInput(x,f,255)}),w.addEventListener("click",()=>{let f=o.getRgbForCopy();go(`${f.r}, ${f.g}, ${f.b}`),po(w)})}let a=document.createElement("div");a.className="box-picker-hexrow";let h=document.createElement("div");h.className="box-picker-hexwrap";let b=document.createElement("label");b.textContent="Hex",h.appendChild(b),h.appendChild(t),a.appendChild(r),a.appendChild(h),e.appendChild(a),e._inputs={hexInput:t,inputs:s,labels:c}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);o.onRandom({r:s,g:c,b:i})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function Wo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var vo=Ro(()=>{});var Qo={};qe(Qo,{ColorIsBoxElement:()=>Se,createBoxColorPicker:()=>Co,createColorPicker:()=>_e,default:()=>Yo,setBoxInvert:()=>Be});var Ve={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},eo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function q(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),c=r-s,i=0;c!==0&&(r===o?i=((n-t)/c+6)%6:r===n?i=(t-o)/c+2:i=(o-n)/c+4,i*=60);let a=r===0?0:c/r*100,h=r*100;return{h:i,s:a,b:h}}function fe(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,s=r*(1-Math.abs(o/60%2-1)),c=t-r,i,a,h;return o<60?(i=r,a=s,h=0):o<120?(i=s,a=r,h=0):o<180?(i=0,a=r,h=s):o<240?(i=0,a=s,h=r):o<300?(i=s,a=0,h=r):(i=r,a=0,h=s),{r:Math.round((i+c)*255),g:Math.round((a+c)*255),b:Math.round((h+c)*255)}}function Fe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function De(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function zo(e){let o=Fe(e.r/255),n=Fe(e.g/255),t=Fe(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,c=.0883024619*o+.2817188376*n+.6299787005*t,i=Math.cbrt(r),a=Math.cbrt(s),h=Math.cbrt(c);return{L:.2104542553*i+.793617785*a-.0040720468*h,a:1.9779984951*i-2.428592205*a+.4505937099*h,b:.0259040371*i+.7827717662*a-.808675766*h}}function Eo(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,c=t*t*t,i=r*r*r,a=s*s*s,h=4.0767416621*c-3.3077115913*i+.2309699292*a,b=-1.2684380046*c+2.6097574011*i-.3413193965*a,x=-.0041960863*c-.7034186147*i+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,De(h)))*255),g:Math.round(Math.max(0,Math.min(1,De(b)))*255),b:Math.round(Math.max(0,Math.min(1,De(x)))*255)}}function ge(e){let o=zo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function we(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return Eo(e.l,n,t)}function So(e,o,n){let t=we({l:e,c:o,h:n});if(oo(t))return{l:e,c:o,h:n};let r=0,s=o;for(let c=0;c<20;c++){let i=(r+s)/2;t=we({l:e,c:i,h:n}),oo(t)?r=i:s=i}return{l:e,c:r,h:n}}function oo(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function le(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var to=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return fe({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*to,r=e.z*359,s=So(n,t,r);return we(s)}}function xe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=q(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ge(e);return{x:n.l,y:Math.min(n.c/to,1),z:n.h/359}}}function no(e,o){let n=eo[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ro(e,o,n,t,r,s=!1){let c;e===0?c={x:t,y:o,z:n}:e===1?c={x:o,y:t,z:n}:c={x:o,y:n,z:t};let i=re(c,r);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var io=Math.PI/6,Ho=Math.cos(io),Io=Math.sin(io),Ae=!1;function Be(e){Ae=e}var ae=0,ie=0;function Te(e,o){ae=e,ie=o}function $e(){return{yaw:ae,pitch:ie}}function so(){ae=0,ie=0}function Po(e){if(ae===0&&ie===0)return e;let o=Math.cos(ae),n=Math.sin(ae),t=Math.cos(ie),r=Math.sin(ie),s=e.x*o+e.z*n,c=e.y,i=-e.x*n+e.z*o,a=c*t-i*r,h=c*r+i*t;return{x:s,y:a,z:h}}function Fo(e){if(ae===0&&ie===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(ae),t=Math.sin(ae),r=Math.cos(ie),s=Math.sin(ie),c=o.x*n+o.z*t,i=o.y,a=-o.x*t+o.z*n,h=i*r-a*s,b=i*s+a*r;return{x:c+.5,y:h+.5,z:b+.5}}function H(e,o,n){let t=Fo(e);return{x:n.x+(t.y-t.x)*Ho*o,y:n.y+t.z*o-(t.x+t.y)*Io*o}}function Do(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Bo=64,lo={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function co(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function uo(e,o,n,t,r,s,c=!0,i=null){let{ctx:a,scale:h,center:b,width:x,height:p}=e;a.save(),a.clearRect(0,0,x,p);let M=Do(o),w=M.map(f=>H(f,h,b));if(Oo(a,h,b,r),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,_o(a,w,M,o,r,s.viewRotating),a.restore(),c&&!s.viewRotating&&Go(a,r,h,b),t>=0){let f=re(n,r),z=Ae?{r:255-f.r,g:255-f.g,b:255-f.b}:f,C=H(n,h,b);i&&i.active&&No(a,C,i.rgb,i.alpha),Uo(a,C,z)}a.restore()}var $o={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Oo(e,o,n,t){let r=H({x:0,y:0,z:0},o,n),s=[H({x:1,y:0,z:0},o,n),H({x:0,y:1,z:0},o,n),H({x:0,y:0,z:1},o,n)],c=$o[t];e.lineWidth=1.5;for(let i=0;i<s.length;i++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(s[i].x,s[i].y),e.strokeStyle=c[i],e.stroke()}function _o(e,o,n,t,r,s){let c=[t.x,t.y,t.z];for(let i=0;i<Y.length;i++){let a=Y[i],h=c[a.fixedAxis],b=c[a.uAxis],x=c[a.vAxis];if(b<.002&&x<.002)continue;let p=Po(a.normal),M=p.x+p.y+p.z>0,w=a.quad.map(f=>o[f]);M?ao(e,w,a.fixedAxis,h,b,x,r):(e.save(),e.globalAlpha=s?.5:0,ao(e,w,a.fixedAxis,h,b,x,r),e.restore())}}function ao(e,o,n,t,r,s,c){let i=Bo,a=document.createElement("canvas");a.width=i,a.height=i;let h=a.getContext("2d"),b=h.createImageData(i,i),x=b.data;for(let j=0;j<i;j++)for(let oe=0;oe<i;oe++){let G=oe/(i-1)*r,ve=j/(i-1)*s,K=ro(n,G,ve,t,c,Ae),B=(j*i+oe)*4;x[B]=K.r,x[B+1]=K.g,x[B+2]=K.b,x[B+3]=255}h.putImageData(b,0,0);let p=o[0],M=o[1],w=o[2],f=o[3],z=M.x-p.x,C=M.y-p.y,L=f.x-p.x,P=f.y-p.y;e.save(),e.beginPath(),e.moveTo(p.x,p.y),e.lineTo(M.x,M.y),e.lineTo(w.x,w.y),e.lineTo(f.x,f.y),e.closePath(),e.clip();let y=2/i,T=p.x-z*y-L*y,_=p.y-C*y-P*y,D=1+2*y,F=1+2*y;e.transform(z*D/i,C*D/i,L*F/i,P*F/i,T,_),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function Go(e,o,n,t){let r=Ve[o],s=Ae?[H({x:0,y:1,z:1},n,t),H({x:1,y:0,z:1},n,t),H({x:1,y:1,z:0},n,t)]:[H({x:1,y:0,z:0},n,t),H({x:0,y:1,z:0},n,t),H({x:0,y:0,z:1},n,t)],c=Ae?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let a=s[i].x+c[i].x,h=s[i].y+c[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[i],a,h)}e.globalAlpha=1,e.restore()}var ee=30,ce=13;function No(e,o,n,t){let r=(ee+ce)/2,s=5,c=Math.floor(o.x/s)*s,i=Math.floor(o.y/s)*s,a=ee*2+s*2,h=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,ce,0,Math.PI*2,!0),e.clip();for(let z=-1;z*s<=a;z++)for(let C=-1;C*s<=a;C++)e.fillStyle=(z+C)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+z*s,i+C*s,s,s);let b="rgba("+n.r+","+n.g+","+n.b+",0)",x="rgba("+n.r+","+n.g+","+n.b+",1)",p=e;if(typeof p.createConicGradient=="function"){let z=p.createConicGradient(-Math.PI/2,o.x,o.y);z.addColorStop(0,b),z.addColorStop(1,x),e.fillStyle=z,e.fillRect(c-ee,i-ee,a,a)}else for(let C=0;C<36;C++){let L=-Math.PI/2+C/36*Math.PI*2,P=-Math.PI/2+(C+1)/36*Math.PI*2,y=(C+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(L)*ce,o.y+Math.sin(L)*ce),e.arc(o.x,o.y,ee,L,P),e.arc(o.x,o.y,ce,P,L,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+y.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,ce,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let M=h*Math.PI*2,w=o.x+r*Math.sin(M),f=o.y-r*Math.cos(M);e.beginPath(),e.arc(w,f,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Uo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function ho(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return H(r[e],n,t)}function Oe(){let e={x:0,y:0};return[H({x:1,y:0,z:0},1,e),H({x:0,y:1,z:0},1,e),H({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function ye(e,o,n,t,r){let s=Y[e],c=[n.x,n.y,n.z],i=c[s.uAxis],a=c[s.vAxis];if(i<.002||a<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[s.fixedAxis]]=c[s.fixedAxis];let x={...h};x[b[s.uAxis]]=i;let p={...h};p[b[s.vAxis]]=a;let M=H(h,t,r),w=H(x,t,r),f=H(p,t,r),z=w.x-M.x,C=w.y-M.y,L=f.x-M.x,P=f.y-M.y,y=z*P-C*L;if(Math.abs(y)<1e-6)return null;let T=o.x-M.x,_=o.y-M.y,D=(T*P-_*L)/y,F=(_*z-T*C)/y;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function bo(e,o,n,t,r){let s=Y[e],c=[n.x,n.y,n.z],i=c[s.uAxis],a=c[s.vAxis];if(i<.002||a<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[s.fixedAxis]]=c[s.fixedAxis];let x={...h};x[b[s.uAxis]]=i;let p={...h};p[b[s.vAxis]]=a;let M=H(h,t,r),w=H(x,t,r),f=H(p,t,r),z=w.x-M.x,C=w.y-M.y,L=f.x-M.x,P=f.y-M.y,y=z*P-C*L;if(Math.abs(y)<1e-6)return null;let T=o.x-M.x,_=o.y-M.y,D=(T*P-_*L)/y,F=(_*z-T*C)/y;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var fo=22;function xo(e,o,n,t,r,s,c,i,a,h,b,x,p,M,w){let f={...lo};function z(l){let u=e.getBoundingClientRect();return{x:l.clientX-u.left,y:l.clientY-u.top}}let C=!1,L=!1,P=!1,y=!1,T=null,_=600,D=null;function F(){j(),D=setTimeout(oe,_)}function j(){D!==null&&(clearTimeout(D),D=null)}function oe(){D=null,f.alphaMode=!1,be(),g(),y=!0,f.viewRotating=!0,T=null,a()}let G=9,ve=1e3,K=null;function B(){Q(),K=setTimeout(Me,ve)}function Q(){K!==null&&(clearTimeout(K),K=null),j()}function Me(){K=null,f.alphaMode=!0,g(),be(),a()}function te(l){let u=p();return Math.hypot(l.x-u.x,l.y-u.y)}function He(l){let u=p();return(Math.atan2(l.x-u.x,-(l.y-u.y))+Math.PI*2)%(Math.PI*2)}function de(l){b(He(l)/(Math.PI*2)),a()}function Ce(l){let u=te(l);return u>=ce-4&&u<=ee+6}function J(l){let u=o(),A=c(),k=i();for(let v=0;v<3;v++){let S=ho(v,u,A,k),I=l.x-S.x,$=l.y-S.y;if(I*I+$*$<=fo*fo)return v}return-1}function X(l){let u=o(),A=c(),k=i();for(let v=Y.length-1;v>=0;v--){let S=ye(v,l,u,A,k);if(S)return{faceIndex:v,...S}}return null}let N=-1,Z={x:0,y:0},Re=0;function ue(l,u){N=l,Z=u,Re=o()[["x","y","z"][l]],f.draggingAxisHandle=l,e.style.cursor="grabbing",a()}function d(l){if(Q(),N<0)return;let u=l.x-Z.x,A=l.y-Z.y,v=Oe()[N],S=c(),$=(u*v.x+A*v.y)/S,U=Math.max(0,Math.min(1,Re+$)),W=o(),O=["x","y","z"],me={...W,[O[N]]:U};n(me);let ke=t(),Qe=s(),Je=Qe>=0?Y[Qe]:null,Ie={...ke};Je&&N===Je.fixedAxis?Ie[O[N]]=U:Ie[O[N]]=Math.min(ke[O[N]],U),r(Ie,s()),a()}function g(){N=-1,f.draggingAxisHandle=-1}let m=-1,R=null,E=null,V=!1;function he(l,u,A,k){m=l,f.draggingFace=l,R=null,E=null,V=!1,k&&(V=!0,E={s:u,t:A}),Le(l,u,A),e.style.cursor="crosshair",a()}function se(l,u,A){if(Q(),m<0)return;let k=o(),v=c(),S=i(),I=ye(m,l,k,v,S),$=m;if(!I&&!A){for(let O=Y.length-1;O>=0;O--)if(O!==m&&(I=ye(O,l,k,v,S),I)){$=O;break}}if(!I&&A&&(I=bo(m,l,k,v,S),$=m),!I){a();return}$!==m&&(m=$,f.draggingFace=$,R=null,V=!1,E=null);let{s:U,t:W}=I;if(u&&E){if(V){let O=Math.abs(U-E.s),me=Math.abs(W-E.t),ke=.02;(O>ke||me>ke)&&(R=O>=me?"u":"v",V=!1)}R==="u"?W=E.t:R==="v"&&(U=E.s)}else u||(R=null,V=!1,E=null);Le($,U,W),a()}function Le(l,u,A){let k=Y[l],v=o(),S=["x","y","z"],I={...t()};I[S[k.uAxis]]=u*v[S[k.uAxis]],I[S[k.vAxis]]=A*v[S[k.vAxis]],I[S[k.fixedAxis]]=v[S[k.fixedAxis]],r(I,l)}function be(){m=-1,f.draggingFace=-1,R=null,V=!1,E=null}function ne(l){L=!0;let u=z(l);if(h()){if(f.alphaMode){if(te(u)<=G){f.alphaMode=!1,a();return}if(Ce(u)){l.preventDefault(),C=!0,de(u);return}f.alphaMode=!1,a();return}te(u)<=G&&B()}let A=J(u);if(A>=0){l.preventDefault(),ue(A,u);return}let k=X(u);if(k){l.preventDefault(),he(k.faceIndex,k.s,k.t,l.shiftKey),f.alphaMode||F();return}let v=i();Math.hypot(u.x-v.x,u.y-v.y)>c()+20&&(l.preventDefault(),y=!0,T=u,f.viewRotating=!0,a())}function Ke(l){let u=z(l);if(C){l.preventDefault(),de(u);return}if(y){if(l.preventDefault(),!T){T=u;return}let I=u.x-T.x,$=u.y-T.y,U=$e();Te(Math.max(-60,Math.min(60,U.yaw+I*.12)),Math.max(-60,Math.min(60,U.pitch+$*.12))),I!==0&&M(Math.max(0,Math.min(1,w()+I*.002))),T=u,a();return}if(L&&f.alphaMode&&Ce(u)){l.preventDefault(),C=!0,de(u);return}if(N>=0){l.preventDefault(),d(u);return}if(m>=0){l.preventDefault(),se(u,l.shiftKey,l.altKey);return}let A=J(u),k=X(u),v=A,S=A>=0?-1:k?k.faceIndex:-1;(v!==f.hoveredAxisHandle||S!==f.hoveredFace)&&(f.hoveredAxisHandle=v,f.hoveredFace=S,e.style.cursor=v>=0?"grab":S>=0?"crosshair":"default",a())}function Xe(l){Q(),L=!1,C=!1,y&&(y=!1,f.viewRotating=!1,T=null,a());let u=N>=0||m>=0;g(),be(),u&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",a())}function We(l){if(l.touches.length!==1)return;P=!0;let u=z(l.touches[0]);if(h()){if(f.alphaMode){if(te(u)<=G){f.alphaMode=!1,a();return}if(Ce(u)){l.preventDefault(),C=!0,de(u);return}f.alphaMode=!1,a();return}te(u)<=G&&B()}let A=J(u);if(A>=0){l.preventDefault(),ue(A,u);return}let k=X(u);if(k){l.preventDefault(),he(k.faceIndex,k.s,k.t,!1),f.alphaMode||F();return}let v=i();Math.hypot(u.x-v.x,u.y-v.y)>c()+20&&(l.preventDefault(),y=!0,T=u,f.viewRotating=!0,a())}function je(l){if(l.touches.length!==1)return;let u=z(l.touches[0]);if(C)l.preventDefault(),de(u);else if(P&&f.alphaMode&&Ce(u))l.preventDefault(),C=!0,de(u);else if(N>=0)l.preventDefault(),d(u);else if(y){if(l.preventDefault(),!T){T=u;return}let A=u.x-T.x,k=u.y-T.y,v=$e();Te(Math.max(-60,Math.min(60,v.yaw+A*.12)),Math.max(-60,Math.min(60,v.pitch+k*.12))),A!==0&&M(Math.max(0,Math.min(1,w()+A*.002))),T=u,a()}else m>=0&&(l.preventDefault(),se(u,!1,!1))}function Ze(l){Q(),P=!1,C=!1,y&&(y=!1,f.viewRotating=!1,T=null,a()),g(),be(),a()}function Ye(l){if(l.key==="1"){Te(Math.PI/4,0),a();return}if(l.key==="0"){so(),a();return}if(l.key==="2"){Te(.95,-.54),a();return}if(f.alphaMode){if(l.key==="Escape"){f.alphaMode=!1,a();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),b(Math.min(1,x()+(l.shiftKey?.08:.02))),a();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),b(Math.max(0,x()-(l.shiftKey?.08:.02))),a();return}}let u=l.shiftKey?.04:.004,A=t(),k=o(),v=Oe(),S=0,I=0;switch(l.key){case"ArrowRight":S=1;break;case"ArrowLeft":S=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}l.preventDefault();let $={...A},U=["x","y","z"];for(let W=0;W<3;W++){let O=S*v[W].x+I*v[W].y;if(Math.abs(O)>.3){let me=A[U[W]]+u*Math.sign(O);$[U[W]]=Math.max(0,Math.min(k[U[W]],me))}}r($,s()),a()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",Xe),e.addEventListener("touchstart",We,{passive:!1}),e.addEventListener("touchmove",je,{passive:!1}),e.addEventListener("touchend",Ze),e.addEventListener("keydown",Ye),e.setAttribute("tabindex","0");function ko(){Q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",Xe),e.removeEventListener("touchstart",We),e.removeEventListener("touchmove",je),e.removeEventListener("touchend",Ze),e.removeEventListener("keydown",Ye)}return{state:f,destroy:ko}}var mo=`.box-picker {\r
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
`;var _e=Co,Mo=!1;function jo(){if(Mo||typeof document>"u")return;Mo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=mo,document.head.appendChild(e)}function Co(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,s=o.showModeToggle??!1,c=o.showCorners??!1,i={mode:()=>a,switchMode:d=>oe(d),onHexInput:d=>{let g=pe(d);g?(x=xe(F?{r:255-g.r,g:255-g.g,b:255-g.b}:g,a),b={x:Math.max(b.x,x.x),y:Math.max(b.y,x.y),z:Math.max(b.z,x.z)},Z(),X(),B()):X()},onChannelInput:(d,g,m)=>{let R=Math.max(0,Math.min(m,g)),E=["x","y","z"],V=R/m;if(F){let he={...x,[E[d]]:V},se=re(he,a);x=xe({r:255-se.r,g:255-se.g,b:255-se.b},a)}else x={...x,[E[d]]:V};V>b[E[d]]&&(b={...b,[E[d]]:V}),Z(),X(),B()},getRgbForCopy:()=>re(x,a),onRandom:d=>ue(d),onReset:()=>ue({r:0,g:0,b:0})},a=o.mode??"rgb",h=o.initialColor?xe(o.initialColor,a):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},x={...h},p=0,M=()=>o.alpha!==void 0,w=Math.max(0,Math.min(1,o.alpha??1));function f(d){let g=Math.max(0,Math.min(1,d));g!==w&&(w=g,Z(),X(),B())}function z(d){let g=J(),m=q(g);m.s=Math.max(0,Math.min(100,d*100));let R=fe(m);ue(F?{r:255-R.r,g:255-R.g,b:255-R.b}:R)}let C=new Set;jo();let L=document.createElement("div");L.className="box-picker";let P=document.createElement("canvas");P.style.cursor="grab",L.appendChild(P);let y=co(P,n),T=null,_=document.createElement("div");_.className="box-picker-controls",T=document.createElement("div"),T.className="box-picker-swatch",_.appendChild(T),L.appendChild(_),(r||s||c)&&Promise.resolve().then(()=>(vo(),yo)).then(d=>{d.createControls(_,i,{showInputs:r,showModeToggle:s,showCorners:c})}).catch(()=>{}),e.appendChild(L);let D=xo(P,()=>b,d=>{b=d},()=>x,(d,g)=>{x=d,p=g,Z(),X()},()=>p,()=>y.scale,()=>y.center,B,M,f,()=>w,()=>H(x,y.scale,y.center),z,()=>q(J()).s/100),F=!1,j=!0;P.addEventListener("mouseenter",()=>{j=!0,B()}),P.addEventListener("mouseleave",()=>{j=!1,B()}),P.addEventListener("dblclick",()=>{F=!F,Be(F),Z(),X(),B()});function oe(d){if(d===a)return;let g=re(x,a),m={...x},R={...b};a=d;let E=xe(g,a),V={x:1,y:1,z:1};x=E,b=V,ve(m,E,R,V,300),X()}let G=null;function ve(d,g,m,R,E){G!==null&&cancelAnimationFrame(G);let V=performance.now();function he(se){let Le=se-V,be=Math.min(1,Le/E),ne=1-Math.pow(1-be,3);x={x:d.x+(g.x-d.x)*ne,y:d.y+(g.y-d.y)*ne,z:d.z+(g.z-d.z)*ne},b={x:m.x+(R.x-m.x)*ne,y:m.y+(R.y-m.y)*ne,z:m.z+(R.z-m.z)*ne},Q(),Z(),be<1?G=requestAnimationFrame(he):G=null}G=requestAnimationFrame(he)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,Q()}))}function Q(){uo(y,b,x,p,a,D.state,j,{active:D.state.alphaMode,alpha:w,rgb:J()})}function Me(d,g,m){return Math.round(d+(g-d)*m)}function te(d,g){let m=g>0?255:0,R=Math.abs(g);return le({r:Me(d.r,m,R),g:Me(d.g,m,R),b:Me(d.b,m,R)})}function He(d,g){let m=pe(g)||{r:128,g:128,b:128},R=te(m,.35),E=te(m,0),V=te(m,-.35);d.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${R}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${E}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${V}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,d.style.backgroundColor="transparent"}function de(d){try{navigator.clipboard.writeText(d).catch(()=>{})}catch{}}function Ce(d){d&&(d.style.borderColor="#4ade80",d.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{d.style.borderColor="",d.style.boxShadow=""},500))}function J(){let d=re(x,a);return F?{r:255-d.r,g:255-d.g,b:255-d.b}:d}function X(){if(!t)return;let d=J(),g=le(d);T&&He(T,g);let m=L.querySelector(".box-picker-hex");m&&(m.value=g),N(),L._updateModeButtons&&L._updateModeButtons()}function N(){if(!t)return;let d=Ve[a],g=F?xe(J(),a):x,m=no(g,a),R=L.querySelectorAll(".box-picker-channel input"),E=L.querySelectorAll(".box-picker-channel label");for(let V=0;V<R.length;V++)E[V].textContent=d[V],E[V].style.color="",E[V].style.textShadow="none",R[V].value=String(m[V])}function Z(){let d=J(),g={rgb:d,hsb:q(d),oklch:ge(d),hex:le(d),alpha:w};for(let m of C)m(g)}function Re(){let d=re(x,a);return{rgb:d,hsb:q(d),oklch:ge(d),hex:le(d)}}X(),Q();let ue=d=>{x=xe(d,a),b={x:Math.max(b.x,x.x),y:Math.max(b.y,x.y),z:Math.max(b.z,x.z)};let g=H(x,y.scale,y.center);p=-1;for(let m=Y.length-1;m>=0;m--)if(ye(m,g,b,y.scale,y.center)){p=m;break}Z(),X(),B()};return{getColor:Re,getMode:()=>a,setColor:ue,setAlpha:f,getAlpha:()=>w,setMode(d){oe(d)},on(d,g){C.add(g)},off(d,g){C.delete(g)},destroy(){D.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(L)}}}function Ue(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:pe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=pe(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ge(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?fe({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:fe({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:we({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:fe({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function ze(e,o,n=1){if(o==="hex")return le(e);if(o==="hex-alpha")return le(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=q(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=q(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Ne(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=q(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=ge(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ge(e,o,n){let t=o/100,r=n/100,s=(1-Math.abs(2*r-1))*t,c=s*(1-Math.abs(e/60%2-1)),i=r-s/2,a=0,h=0,b=0;return e<60?(a=s,h=c):e<120?(a=c,h=s):e<180?(h=s,b=c):e<240?(h=c,b=s):e<300?(a=c,b=s):(a=s,b=c),{r:Math.round((a+i)*255),g:Math.round((h+i)*255),b:Math.round((b+i)*255)}}function Ne(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),c=(r+s)/2;if(r===s)return{h:0,s:0,l:c*100};let i=r-s,a=c>.5?i/(2-r-s):i/(r+s),h=0;return r===o?h=((n-t)/i+(n<t?6:0))*60:r===n?h=((t-o)/i+2)*60:h=((o-n)/i+4)*60,{h,s:a*100,l:c*100}}var Ee=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?Ue(t,this.model):null;this.alpha=r?.alpha??1;let s=r?.rgb??{r:255,g:255,b:255},c=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=_e(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...c.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",ze(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ze(i.rgb,this.model,i.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=Ue(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||ze({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Se=class extends Ee{constructor(){super("hex")}},Zo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Zo)customElements.get(e)||customElements.define(e,class extends Ee{constructor(){super(o)}});var Yo=Se;return Vo(Qo);})();
