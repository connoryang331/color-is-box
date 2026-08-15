var ColorIsBoxElement=(()=>{var Ie=Object.defineProperty;var Co=Object.getOwnPropertyDescriptor;var ko=Object.getOwnPropertyNames;var Ao=Object.prototype.hasOwnProperty;var wo=(e,o)=>()=>(e&&(o=e(e=0)),o);var qe=(e,o)=>{for(var n in o)Ie(e,n,{get:o[n],enumerable:!0})},To=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of ko(o))!Ao.call(e,r)&&r!==n&&Ie(e,r,{get:()=>o[r],enumerable:!(t=Co(o,r))||t.enumerable});return e};var Ro=e=>To(Ie({},"__esModule",{value:!0}),e);var po={};qe(po,{createControls:()=>jo});function mo(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function go(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function jo(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=m=>{let f=document.createElement("button");return f.textContent=m.toUpperCase(),f.addEventListener("click",()=>o.switchMode(m)),t.appendChild(f),f},l=r("oklch"),c=r("rgb"),a=r("hsb"),s=()=>{let m=o.mode();c.classList.toggle("active",m==="rgb"),a.classList.toggle("active",m==="hsb"),l.classList.toggle("active",m==="oklch")};s();let i=o.switchMode;o._markActive=s,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let f=t.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),t.addEventListener("click",()=>{mo(o.getRgbForCopy()?"#"+Zo(o.getRgbForCopy()):"#ffffff"),go(t)});let r=document.createElement("div");r.className="box-picker-channels";let l=[],c=[],a=["R","G","B"];for(let f=0;f<3;f++){let v=document.createElement("div");v.className="box-picker-channel";let M=document.createElement("label");M.textContent=a[f];let w=document.createElement("input");w.type="text",w.inputMode="numeric",v.appendChild(M),v.appendChild(w),r.appendChild(v),l.push(w),c.push(M),w.addEventListener("change",()=>{let b=parseFloat(w.value);isNaN(b)||o.onChannelInput(f,b,255)}),w.addEventListener("click",()=>{let b=o.getRgbForCopy();mo(`${b.r}, ${b.g}, ${b.b}`),go(w)})}let s=document.createElement("div");s.className="box-picker-hexrow";let i=document.createElement("div");i.className="box-picker-hexwrap";let m=document.createElement("label");m.textContent="Hex",i.appendChild(m),i.appendChild(t),s.appendChild(r),s.appendChild(i),e.appendChild(s),e._inputs={hexInput:t,inputs:l,labels:c}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let l=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:l,g:c,b:a})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function Zo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var xo=wo(()=>{});var qo={};qe(qo,{ColorIsBoxElement:()=>ze,createBoxColorPicker:()=>vo,createColorPicker:()=>$e,default:()=>Jo,setBoxInvert:()=>De});var Le={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},eo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Z(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),l=Math.min(o,n,t),c=r-l,a=0;c!==0&&(r===o?a=((n-t)/c+6)%6:r===n?a=(t-o)/c+2:a=(o-n)/c+4,a*=60);let s=r===0?0:c/r*100,i=r*100;return{h:a,s,b:i}}function ie(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,l=r*(1-Math.abs(o/60%2-1)),c=t-r,a,s,i;return o<60?(a=r,s=l,i=0):o<120?(a=l,s=r,i=0):o<180?(a=0,s=r,i=l):o<240?(a=0,s=l,i=r):o<300?(a=l,s=0,i=r):(a=r,s=0,i=l),{r:Math.round((a+c)*255),g:Math.round((s+c)*255),b:Math.round((i+c)*255)}}function He(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Fe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Lo(e){let o=He(e.r/255),n=He(e.g/255),t=He(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,l=.2119034982*o+.6806995451*n+.1073969566*t,c=.0883024619*o+.2817188376*n+.6299787005*t,a=Math.cbrt(r),s=Math.cbrt(l),i=Math.cbrt(c);return{L:.2104542553*a+.793617785*s-.0040720468*i,a:1.9779984951*a-2.428592205*s+.4505937099*i,b:.0259040371*a+.7827717662*s-.808675766*i}}function So(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,l=e-.0894841775*o-1.291485548*n,c=t*t*t,a=r*r*r,s=l*l*l,i=4.0767416621*c-3.3077115913*a+.2309699292*s,m=-1.2684380046*c+2.6097574011*a-.3413193965*s,f=-.0041960863*c-.7034186147*a+1.707614701*s;return{r:Math.round(Math.max(0,Math.min(1,Fe(i)))*255),g:Math.round(Math.max(0,Math.min(1,Fe(m)))*255),b:Math.round(Math.max(0,Math.min(1,Fe(f)))*255)}}function pe(e){let o=Lo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Ae(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return So(e.l,n,t)}function Vo(e,o,n){let t=Ae({l:e,c:o,h:n});if(oo(t))return{l:e,c:o,h:n};let r=0,l=o;for(let c=0;c<20;c++){let a=(r+l)/2;t=Ae({l:e,c:a,h:n}),oo(t)?r=a:l=a}return{l:e,c:r,h:n}}function oo(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function xe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var to=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ie({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*to,r=e.z*359,l=Vo(n,t,r);return Ae(l)}}function me(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Z(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=pe(e);return{x:n.l,y:Math.min(n.c/to,1),z:n.h/359}}}function no(e,o){let n=eo[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ro(e,o,n,t,r,l=!1){let c;e===0?c={x:t,y:o,z:n}:e===1?c={x:o,y:t,z:n}:c={x:o,y:n,z:t};let a=re(c,r);return l?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var ao=Math.PI/6,zo=Math.cos(ao),Eo=Math.sin(ao),we=!1;function De(e){we=e}var ce=0,de=0;function Be(e,o){ce=e,de=o}function Oe(){return{yaw:ce,pitch:de}}function Po(e){if(ce===0&&de===0)return e;let o=Math.cos(ce),n=Math.sin(ce),t=Math.cos(de),r=Math.sin(de),l=e.x*o+e.z*n,c=e.y,a=-e.x*n+e.z*o,s=c*t-a*r,i=c*r+a*t;return{x:l,y:s,z:i}}function Io(e){if(ce===0&&de===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(ce),t=Math.sin(ce),r=Math.cos(de),l=Math.sin(de),c=o.x*n+o.z*t,a=o.y,s=-o.x*t+o.z*n,i=a*r-s*l,m=a*l+s*r;return{x:c+.5,y:i+.5,z:m+.5}}function z(e,o,n){let t=Io(e);return{x:n.x+(t.y-t.x)*zo*o,y:n.y+t.z*o-(t.x+t.y)*Eo*o}}function Ho(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var J=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Fo=64,io={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function so(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function lo(e,o,n,t,r,l,c=!0,a=null,s=null){let{ctx:i,scale:m,center:f,width:v,height:M}=e;i.save(),i.clearRect(0,0,v,M);let w=Ho(o),b=w.map(p=>z(p,m,f));if(i.save(),i.globalAlpha=l.viewRotating?.32:1,Bo(i,m,f,r),i.restore(),i.save(),i.shadowColor="rgba(0,0,0,0.35)",i.shadowBlur=8,i.shadowOffsetX=0,i.shadowOffsetY=2,Oo(i,b,w,o,r,l.viewRotating),i.restore(),c&&(i.save(),i.globalAlpha=l.viewRotating?.5:1,$o(i,r,m,f),i.restore()),s&&s.active&&l.ringAlpha>.01&&Uo(i,m,f,s.rgb,s.sat,l.ringAlpha),l.viewRotating){let p=z({x:0,y:0,z:0},m,f),y=z({x:1,y:1,z:1},m,f);i.save(),i.setLineDash([6,5]),i.strokeStyle="rgba(107,114,128,.75)",i.lineWidth=1.6,i.beginPath(),i.moveTo(p.x,p.y),i.lineTo(y.x,y.y),i.stroke(),i.restore(),i.beginPath(),i.arc(p.x,p.y,5,0,Math.PI*2),i.fillStyle="#111",i.fill(),i.strokeStyle="rgba(0,0,0,.45)",i.lineWidth=1,i.stroke(),i.beginPath(),i.arc(y.x,y.y,5,0,Math.PI*2),i.fillStyle="#fff",i.fill(),i.strokeStyle="rgba(0,0,0,.5)",i.lineWidth=1,i.stroke(),i.font="9px monospace",i.fillStyle="rgba(51,65,85,.85)",i.textAlign="left",i.fillText("0",p.x+9,p.y+12),i.fillText("255,255,255",y.x+9,y.y+12)}if(t>=0){let p=re(n,r),y=we?{r:255-p.r,g:255-p.g,b:255-p.b}:p,T=z(n,m,f);a&&a.active&&Ko(i,T,a.rgb,a.alpha),Wo(i,T,y)}i.restore()}var Do={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Bo(e,o,n,t){let r=z({x:0,y:0,z:0},o,n),l=[z({x:1,y:0,z:0},o,n),z({x:0,y:1,z:0},o,n),z({x:0,y:0,z:1},o,n)],c=Do[t];e.lineWidth=1.5;for(let a=0;a<l.length;a++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(l[a].x,l[a].y),e.strokeStyle=c[a],e.stroke()}function Oo(e,o,n,t,r,l){let c=[t.x,t.y,t.z],a=l?.7:1;for(let s=0;s<J.length;s++){let i=J[s],m=c[i.fixedAxis],f=c[i.uAxis],v=c[i.vAxis];if(f<.002&&v<.002)continue;let M=Po(i.normal),w=M.x+M.y+M.z>0,b=i.quad.map(p=>o[p]);if(w)e.save(),e.globalAlpha=a,_o(e,b,i.fixedAxis,m,f,v,r),e.restore();else{e.save(),e.globalAlpha=l?.14:0,e.beginPath(),e.moveTo(b[0].x,b[0].y);for(let p=1;p<4;p++)e.lineTo(b[p].x,b[p].y);e.closePath(),e.fillStyle="#ffffff",e.fill(),e.restore()}}}function _o(e,o,n,t,r,l,c){let a=Fo,s=document.createElement("canvas");s.width=a,s.height=a;let i=s.getContext("2d"),m=i.createImageData(a,a),f=m.data;for(let Y=0;Y<a;Y++)for(let oe=0;oe<a;oe++){let G=oe/(a-1)*r,ve=Y/(a-1)*l,K=ro(n,G,ve,t,c,we),B=(Y*a+oe)*4;f[B]=K.r,f[B+1]=K.g,f[B+2]=K.b,f[B+3]=255}i.putImageData(m,0,0);let v=o[0],M=o[1],w=o[2],b=o[3],p=M.x-v.x,y=M.y-v.y,T=b.x-v.x,H=b.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(M.x,M.y),e.lineTo(w.x,w.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let C=2/a,L=v.x-p*C-T*C,$=v.y-y*C-H*C,F=1+2*C,D=1+2*C;e.transform(p*F/a,y*F/a,T*D/a,H*D/a,L,$),e.imageSmoothingEnabled=!0,e.drawImage(s,0,0),e.restore()}function $o(e,o,n,t){let r=Le[o],l=we?[z({x:0,y:1,z:1},n,t),z({x:1,y:0,z:1},n,t),z({x:1,y:1,z:0},n,t)]:[z({x:1,y:0,z:0},n,t),z({x:0,y:1,z:0},n,t),z({x:0,y:0,z:1},n,t)],c=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let s=l[a].x+c[a].x,i=l[a].y+c[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[a],s,i)}e.globalAlpha=1,e.restore()}var Go=.48,No=.33;function Uo(e,o,n,t,r,l){let c=o*Go,a=o*No,s=Math.max(0,Math.min(1,r));e.save(),e.globalAlpha=l,e.beginPath(),e.arc(n.x,n.y,c,0,Math.PI*2),e.arc(n.x,n.y,a,0,Math.PI*2,!0),e.clip();let i=e.createRadialGradient(n.x,n.y,a,n.x,n.y,c);i.addColorStop(0,"#e7e7e7"),i.addColorStop(1,"rgb("+t.r+","+t.g+","+t.b+")"),e.fillStyle=i,e.fillRect(n.x-c,n.y-c,c*2,c*2),e.restore(),e.beginPath(),e.arc(n.x,n.y,c,0,Math.PI*2),e.arc(n.x,n.y,a,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let f of[.25,.5,.75]){let v=a+(c-a)*f;e.fillText(Math.round(f*100)+"%",n.x+v+10,n.y-4)}let m=a+(c-a)*s;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(n.x,n.y-a),e.lineTo(n.x,n.y-m),e.stroke(),e.restore(),e.beginPath(),e.arc(n.x,n.y-m,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var ee=30,le=13;function Ko(e,o,n,t){let r=(ee+le)/2,l=5,c=Math.floor(o.x/l)*l,a=Math.floor(o.y/l)*l,s=ee*2+l*2,i=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let p=-1;p*l<=s;p++)for(let y=-1;y*l<=s;y++)e.fillStyle=(p+y)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+p*l,a+y*l,l,l);let m="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",v=e;if(typeof v.createConicGradient=="function"){let p=v.createConicGradient(-Math.PI/2,o.x,o.y);p.addColorStop(0,m),p.addColorStop(1,f),e.fillStyle=p,e.fillRect(c-ee,a-ee,s,s)}else for(let y=0;y<36;y++){let T=-Math.PI/2+y/36*Math.PI*2,H=-Math.PI/2+(y+1)/36*Math.PI*2,C=(y+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*le,o.y+Math.sin(T)*le),e.arc(o.x,o.y,ee,T,H),e.arc(o.x,o.y,le,H,T,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+C.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let M=i*Math.PI*2,w=o.x+r*Math.sin(M),b=o.y-r*Math.cos(M);e.beginPath(),e.arc(w,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Wo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function co(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return z(r[e],n,t)}function _e(){let e={x:0,y:0};return[z({x:1,y:0,z:0},1,e),z({x:0,y:1,z:0},1,e),z({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function ye(e,o,n,t,r){let l=J[e],c=[n.x,n.y,n.z],a=c[l.uAxis],s=c[l.vAxis];if(a<.002||s<.002)return null;let i={x:0,y:0,z:0},m=["x","y","z"];i[m[l.fixedAxis]]=c[l.fixedAxis];let f={...i};f[m[l.uAxis]]=a;let v={...i};v[m[l.vAxis]]=s;let M=z(i,t,r),w=z(f,t,r),b=z(v,t,r),p=w.x-M.x,y=w.y-M.y,T=b.x-M.x,H=b.y-M.y,C=p*H-y*T;if(Math.abs(C)<1e-6)return null;let L=o.x-M.x,$=o.y-M.y,F=(L*H-$*T)/C,D=($*p-L*y)/C;return F<-.05||F>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}function uo(e,o,n,t,r){let l=J[e],c=[n.x,n.y,n.z],a=c[l.uAxis],s=c[l.vAxis];if(a<.002||s<.002)return null;let i={x:0,y:0,z:0},m=["x","y","z"];i[m[l.fixedAxis]]=c[l.fixedAxis];let f={...i};f[m[l.uAxis]]=a;let v={...i};v[m[l.vAxis]]=s;let M=z(i,t,r),w=z(f,t,r),b=z(v,t,r),p=w.x-M.x,y=w.y-M.y,T=b.x-M.x,H=b.y-M.y,C=p*H-y*T;if(Math.abs(C)<1e-6)return null;let L=o.x-M.x,$=o.y-M.y,F=(L*H-$*T)/C,D=($*p-L*y)/C;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}var ho=22;function bo(e,o,n,t,r,l,c,a,s,i,m,f,v,M,w){let b={...io};function p(d){let h=e.getBoundingClientRect();return{x:d.clientX-h.left,y:d.clientY-h.top}}let y=!1,T=!1,H=!1,C=!1,L=null,$=600,F=null;function D(){Y(),F=setTimeout(oe,$)}function Y(){F!==null&&(clearTimeout(F),F=null)}function oe(){F=null,b.alphaMode=!1,fe(),x(),C=!0,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.3),L=null,s()}let G=9,ve=1e3,K=null;function B(){q(),K=setTimeout(Me,ve)}function q(){K!==null&&(clearTimeout(K),K=null),Y()}function Me(){K=null,b.alphaMode=!0,x(),fe(),s()}function te(d){let h=v();return Math.hypot(d.x-h.x,d.y-h.y)}function Ee(d){let h=v();return(Math.atan2(d.x-h.x,-(d.y-h.y))+Math.PI*2)%(Math.PI*2)}function ue(d){m(Ee(d)/(Math.PI*2)),s()}function Ce(d){let h=te(d);return h>=le-4&&h<=ee+6}function j(d){let h=o(),R=c(),A=a();for(let k=0;k<3;k++){let P=co(k,h,R,A),I=d.x-P.x,O=d.y-P.y;if(I*I+O*O<=ho*ho)return k}return-1}function W(d){let h=o(),R=c(),A=a();for(let k=J.length-1;k>=0;k--){let P=ye(k,d,h,R,A);if(P)return{faceIndex:k,...P}}return null}let N=-1,Q={x:0,y:0},Te=0;function he(d,h){N=d,Q=h,Te=o()[["x","y","z"][d]],b.draggingAxisHandle=d,e.style.cursor="grabbing",s()}function u(d){if(q(),N<0)return;let h=d.x-Q.x,R=d.y-Q.y,k=_e()[N],P=c(),O=(h*k.x+R*k.y)/P,U=Math.max(0,Math.min(1,Te+O)),X=o(),_=["x","y","z"],ge={...X,[_[N]]:U};n(ge);let ke=t(),Qe=l(),Je=Qe>=0?J[Qe]:null,Pe={...ke};Je&&N===Je.fixedAxis?Pe[_[N]]=U:Pe[_[N]]=Math.min(ke[_[N]],U),r(Pe,l()),s()}function x(){N=-1,b.draggingAxisHandle=-1}let g=-1,S=null,E=null,V=!1;function be(d,h,R,A){g=d,b.draggingFace=d,S=null,E=null,V=!1,A&&(V=!0,E={s:h,t:R}),Re(d,h,R),e.style.cursor="crosshair",s()}function ae(d,h,R){if(q(),g<0)return;let A=o(),k=c(),P=a(),I=ye(g,d,A,k,P),O=g;if(!I&&!R){for(let _=J.length-1;_>=0;_--)if(_!==g&&(I=ye(_,d,A,k,P),I)){O=_;break}}if(!I&&R&&(I=uo(g,d,A,k,P),O=g),!I){s();return}O!==g&&(g=O,b.draggingFace=O,S=null,V=!1,E=null);let{s:U,t:X}=I;if(h&&E){if(V){let _=Math.abs(U-E.s),ge=Math.abs(X-E.t),ke=.02;(_>ke||ge>ke)&&(S=_>=ge?"u":"v",V=!1)}S==="u"?X=E.t:S==="v"&&(U=E.s)}else h||(S=null,V=!1,E=null);Re(O,U,X),s()}function Re(d,h,R){let A=J[d],k=o(),P=["x","y","z"],I={...t()};I[P[A.uAxis]]=h*k[P[A.uAxis]],I[P[A.vAxis]]=R*k[P[A.vAxis]],I[P[A.fixedAxis]]=k[P[A.fixedAxis]],r(I,d)}function fe(){g=-1,b.draggingFace=-1,S=null,V=!1,E=null}function ne(d){T=!0;let h=p(d);if(i()){if(b.alphaMode){if(te(h)<=G){b.alphaMode=!1,s();return}if(Ce(h)){d.preventDefault(),y=!0,ue(h);return}b.alphaMode=!1,s();return}te(h)<=G&&B()}let R=j(h);if(R>=0){d.preventDefault(),he(R,h);return}let A=W(h);if(A){d.preventDefault(),be(A.faceIndex,A.s,A.t,d.shiftKey),D();return}let k=a();Math.hypot(h.x-k.x,h.y-k.y)>c()+20&&(d.preventDefault(),C=!0,L=h,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),s())}function Ke(d){let h=p(d);if(y){d.preventDefault(),ue(h);return}if(C){if(d.preventDefault(),!L){L=h;return}let I=h.x-L.x,O=h.y-L.y,U=Oe();Be(Math.max(-60,Math.min(60,U.yaw+I*.12)),Math.max(-60,Math.min(60,U.pitch+O*.12))),I!==0&&M(Math.max(0,Math.min(1,w()+I*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),L=h,s();return}if(T&&b.alphaMode&&Ce(h)){d.preventDefault(),y=!0,ue(h);return}if(N>=0){d.preventDefault(),u(h);return}if(g>=0){d.preventDefault(),ae(h,d.shiftKey,d.altKey);return}let R=j(h),A=W(h),k=R,P=R>=0?-1:A?A.faceIndex:-1;(k!==b.hoveredAxisHandle||P!==b.hoveredFace)&&(b.hoveredAxisHandle=k,b.hoveredFace=P,e.style.cursor=k>=0?"grab":P>=0?"crosshair":"default",s())}function We(d){q(),T=!1,y=!1,C&&(C=!1,b.viewRotating=!1,b.ringAlpha=0,L=null,s());let h=N>=0||g>=0;x(),fe(),h&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",s())}function Xe(d){if(d.touches.length!==1)return;H=!0;let h=p(d.touches[0]);if(i()){if(b.alphaMode){if(te(h)<=G){b.alphaMode=!1,s();return}if(Ce(h)){d.preventDefault(),y=!0,ue(h);return}b.alphaMode=!1,s();return}te(h)<=G&&B()}let R=j(h);if(R>=0){d.preventDefault(),he(R,h);return}let A=W(h);if(A){d.preventDefault(),be(A.faceIndex,A.s,A.t,!1),D();return}let k=a();Math.hypot(h.x-k.x,h.y-k.y)>c()+20&&(d.preventDefault(),C=!0,L=h,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),s())}function je(d){if(d.touches.length!==1)return;let h=p(d.touches[0]);if(y)d.preventDefault(),ue(h);else if(H&&b.alphaMode&&Ce(h))d.preventDefault(),y=!0,ue(h);else if(N>=0)d.preventDefault(),u(h);else if(C){if(d.preventDefault(),!L){L=h;return}let R=h.x-L.x,A=h.y-L.y,k=Oe();Be(Math.max(-60,Math.min(60,k.yaw+R*.12)),Math.max(-60,Math.min(60,k.pitch+A*.12))),R!==0&&M(Math.max(0,Math.min(1,w()+R*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),L=h,s()}else g>=0&&(d.preventDefault(),ae(h,!1,!1))}function Ze(d){q(),H=!1,y=!1,C&&(C=!1,b.viewRotating=!1,b.ringAlpha=0,L=null,s()),x(),fe(),s()}function Ye(d){if(b.alphaMode){if(d.key==="Escape"){b.alphaMode=!1,s();return}if(d.key==="ArrowUp"||d.key==="ArrowRight"){d.preventDefault(),m(Math.min(1,f()+(d.shiftKey?.08:.02))),s();return}if(d.key==="ArrowDown"||d.key==="ArrowLeft"){d.preventDefault(),m(Math.max(0,f()-(d.shiftKey?.08:.02))),s();return}}let h=d.shiftKey?.04:.004,R=t(),A=o(),k=_e(),P=0,I=0;switch(d.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}d.preventDefault();let O={...R},U=["x","y","z"];for(let X=0;X<3;X++){let _=P*k[X].x+I*k[X].y;if(Math.abs(_)>.3){let ge=R[U[X]]+h*Math.sign(_);O[U[X]]=Math.max(0,Math.min(A[U[X]],ge))}}r(O,l()),s()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",We),e.addEventListener("touchstart",Xe,{passive:!1}),e.addEventListener("touchmove",je,{passive:!1}),e.addEventListener("touchend",Ze),e.addEventListener("keydown",Ye),e.setAttribute("tabindex","0");function Mo(){q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",We),e.removeEventListener("touchstart",Xe),e.removeEventListener("touchmove",je),e.removeEventListener("touchend",Ze),e.removeEventListener("keydown",Ye)}return{state:b,destroy:Mo}}var fo=`.box-picker {\r
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
`;var $e=vo,yo=!1;function Yo(){if(yo||typeof document>"u")return;yo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=fo,document.head.appendChild(e)}function vo(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,l=o.showModeToggle??!1,c=o.showCorners??!1,a={mode:()=>s,switchMode:u=>oe(u),onHexInput:u=>{let x=xe(u);x?(f=me(D?{r:255-x.r,g:255-x.g,b:255-x.b}:x,s),m={x:Math.max(m.x,f.x),y:Math.max(m.y,f.y),z:Math.max(m.z,f.z)},Q(),W(),B()):W()},onChannelInput:(u,x,g)=>{let S=Math.max(0,Math.min(g,x)),E=["x","y","z"],V=S/g;if(D){let be={...f,[E[u]]:V},ae=re(be,s);f=me({r:255-ae.r,g:255-ae.g,b:255-ae.b},s)}else f={...f,[E[u]]:V};V>m[E[u]]&&(m={...m,[E[u]]:V}),Q(),W(),B()},getRgbForCopy:()=>re(f,s),onRandom:u=>he(u),onReset:()=>he({r:0,g:0,b:0})},s=o.mode??"rgb",i=o.initialColor?me(o.initialColor,s):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},f={...i},v=0,M=()=>o.alpha!==void 0,w=Math.max(0,Math.min(1,o.alpha??1));function b(u){let x=Math.max(0,Math.min(1,u));x!==w&&(w=x,Q(),W(),B())}function p(u){let x=j(),g=Z(x);g.s=Math.max(0,Math.min(100,u*100));let S=ie(g);he(D?{r:255-S.r,g:255-S.g,b:255-S.b}:S)}let y=new Set;Yo();let T=document.createElement("div");T.className="box-picker";let H=document.createElement("canvas");H.style.cursor="grab",T.appendChild(H);let C=so(H,n),L=null,$=document.createElement("div");$.className="box-picker-controls",L=document.createElement("div"),L.className="box-picker-swatch",$.appendChild(L),T.appendChild($),(r||l||c)&&Promise.resolve().then(()=>(xo(),po)).then(u=>{u.createControls($,a,{showInputs:r,showModeToggle:l,showCorners:c})}).catch(()=>{}),e.appendChild(T);let F=bo(H,()=>m,u=>{m=u},()=>f,(u,x)=>{f=u,v=x,Q(),W()},()=>v,()=>C.scale,()=>C.center,B,M,b,()=>w,()=>z(f,C.scale,C.center),p,()=>Z(j()).s/100),D=!1,Y=!0;H.addEventListener("mouseenter",()=>{Y=!0,B()}),H.addEventListener("mouseleave",()=>{Y=!1,B()}),H.addEventListener("dblclick",()=>{D=!D,De(D),Q(),W(),B()});function oe(u){if(u===s)return;let x=re(f,s),g={...f},S={...m};s=u;let E=me(x,s),V={x:1,y:1,z:1};f=E,m=V,ve(g,E,S,V,300),W()}let G=null;function ve(u,x,g,S,E){G!==null&&cancelAnimationFrame(G);let V=performance.now();function be(ae){let Re=ae-V,fe=Math.min(1,Re/E),ne=1-Math.pow(1-fe,3);f={x:u.x+(x.x-u.x)*ne,y:u.y+(x.y-u.y)*ne,z:u.z+(x.z-u.z)*ne},m={x:g.x+(S.x-g.x)*ne,y:g.y+(S.y-g.y)*ne,z:g.z+(S.z-g.z)*ne},q(),Q(),fe<1?G=requestAnimationFrame(be):G=null}G=requestAnimationFrame(be)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,q()}))}function q(){lo(C,m,f,v,s,F.state,Y,{active:F.state.alphaMode,alpha:w,rgb:j()},{active:F.state.viewRotating||F.state.ringAlpha>0,sat:Z(j()).s/100,rgb:ie({h:Z(j()).h,s:100,b:100})})}function Me(u,x,g){return Math.round(u+(x-u)*g)}function te(u,x){let g=x>0?255:0,S=Math.abs(x);return se({r:Me(u.r,g,S),g:Me(u.g,g,S),b:Me(u.b,g,S)})}function Ee(u,x){let g=xe(x)||{r:128,g:128,b:128},S=te(g,.35),E=te(g,0),V=te(g,-.35);u.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${S}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${E}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${V}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,u.style.backgroundColor="transparent"}function ue(u){try{navigator.clipboard.writeText(u).catch(()=>{})}catch{}}function Ce(u){u&&(u.style.borderColor="#4ade80",u.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{u.style.borderColor="",u.style.boxShadow=""},500))}function j(){let u=re(f,s);return D?{r:255-u.r,g:255-u.g,b:255-u.b}:u}function W(){if(!t)return;let u=j(),x=se(u);L&&Ee(L,x);let g=T.querySelector(".box-picker-hex");g&&(g.value=x),N(),T._updateModeButtons&&T._updateModeButtons()}function N(){if(!t)return;let u=Le[s],x=D?me(j(),s):f,g=no(x,s),S=T.querySelectorAll(".box-picker-channel input"),E=T.querySelectorAll(".box-picker-channel label");for(let V=0;V<S.length;V++)E[V].textContent=u[V],E[V].style.color="",E[V].style.textShadow="none",S[V].value=String(g[V])}function Q(){let u=j(),x={rgb:u,hsb:Z(u),oklch:pe(u),hex:se(u),alpha:w};for(let g of y)g(x)}function Te(){let u=re(f,s);return{rgb:u,hsb:Z(u),oklch:pe(u),hex:se(u)}}W(),q();let he=u=>{f=me(u,s),m={x:Math.max(m.x,f.x),y:Math.max(m.y,f.y),z:Math.max(m.z,f.z)};let x=z(f,C.scale,C.center);v=-1;for(let g=J.length-1;g>=0;g--)if(ye(g,x,m,C.scale,C.center)){v=g;break}Q(),W(),B()};return{getColor:Te,getMode:()=>s,setColor:he,setAlpha:b,getAlpha:()=>w,setMode(u){oe(u)},on(u,x){y.add(x)},off(u,x){y.delete(x)},destroy(){F.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(T)}}}function Ue(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:xe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=xe(t[1]),l=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:l}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ge(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ie({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Ae({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Se(e,o,n=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=Z(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=Z(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Ne(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=Z(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=pe(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ge(e,o,n){let t=o/100,r=n/100,l=(1-Math.abs(2*r-1))*t,c=l*(1-Math.abs(e/60%2-1)),a=r-l/2,s=0,i=0,m=0;return e<60?(s=l,i=c):e<120?(s=c,i=l):e<180?(i=l,m=c):e<240?(i=c,m=l):e<300?(s=c,m=l):(s=l,m=c),{r:Math.round((s+a)*255),g:Math.round((i+a)*255),b:Math.round((m+a)*255)}}function Ne(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),l=Math.min(o,n,t),c=(r+l)/2;if(r===l)return{h:0,s:0,l:c*100};let a=r-l,s=c>.5?a/(2-r-l):a/(r+l),i=0;return r===o?i=((n-t)/a+(n<t?6:0))*60:r===n?i=((t-o)/a+2)*60:i=((o-n)/a+4)*60,{h:i,s:s*100,l:c*100}}var Ve=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?Ue(t,this.model):null;this.alpha=r?.alpha??1;let l=r?.rgb??{r:255,g:255,b:255},c=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=$e(this.holder,{initialColor:l,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...c.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",a=>{this.internal||(this.internal=!0,this.alpha=a.alpha,this.setAttribute("value",Se(a.rgb,this.model,a.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:a})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Se(a.rgb,this.model,a.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=Ue(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Se({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ze=class extends Ve{constructor(){super("hex")}},Qo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Qo)customElements.get(e)||customElements.define(e,class extends Ve{constructor(){super(o)}});var Jo=ze;return Ro(qo);})();
