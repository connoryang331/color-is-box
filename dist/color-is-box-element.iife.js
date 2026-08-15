var ColorIsBoxElement=(()=>{var Pe=Object.defineProperty;var po=Object.getOwnPropertyDescriptor;var xo=Object.getOwnPropertyNames;var yo=Object.prototype.hasOwnProperty;var vo=(e,o)=>()=>(e&&(o=e(e=0)),o);var je=(e,o)=>{for(var n in o)Pe(e,n,{get:o[n],enumerable:!0})},Mo=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of xo(o))!yo.call(e,r)&&r!==n&&Pe(e,r,{get:()=>o[r],enumerable:!(t=po(o,r))||t.enumerable});return e};var Co=e=>Mo(Pe({},"__esModule",{value:!0}),e);var ho={};je(ho,{createControls:()=>Go});function co(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function uo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Go(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=b=>{let f=document.createElement("button");return f.textContent=b.toUpperCase(),f.addEventListener("click",()=>o.switchMode(b)),t.appendChild(f),f},s=r("oklch"),l=r("rgb"),a=r("hsb"),i=()=>{let b=o.mode();l.classList.toggle("active",b==="rgb"),a.classList.toggle("active",b==="hsb"),s.classList.toggle("active",b==="oklch")};i();let c=o.switchMode;o._markActive=i,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let f=t.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),t.addEventListener("click",()=>{co(o.getRgbForCopy()?"#"+No(o.getRgbForCopy()):"#ffffff"),uo(t)});let r=document.createElement("div");r.className="box-picker-channels";let s=[],l=[],a=["R","G","B"];for(let f=0;f<3;f++){let y=document.createElement("div");y.className="box-picker-channel";let A=document.createElement("label");A.textContent=a[f];let T=document.createElement("input");T.type="text",T.inputMode="numeric",y.appendChild(A),y.appendChild(T),r.appendChild(y),s.push(T),l.push(A),T.addEventListener("change",()=>{let m=parseFloat(T.value);isNaN(m)||o.onChannelInput(f,m,255)}),T.addEventListener("click",()=>{let m=o.getRgbForCopy();co(`${m.r}, ${m.g}, ${m.b}`),uo(T)})}let i=document.createElement("div");i.className="box-picker-hexrow";let c=document.createElement("div");c.className="box-picker-hexwrap";let b=document.createElement("label");b.textContent="Hex",c.appendChild(b),c.appendChild(t),i.appendChild(r),i.appendChild(c),e.appendChild(i),e._inputs={hexInput:t,inputs:s,labels:l}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:s,g:l,b:a})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function No(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var bo=vo(()=>{});var Wo={};je(Wo,{ColorIsBoxElement:()=>ze,createBoxColorPicker:()=>mo,createColorPicker:()=>_e,default:()=>Xo,setBoxInvert:()=>Be});var Se={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ye={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Y(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),l=r-s,a=0;l!==0&&(r===o?a=((n-t)/l+6)%6:r===n?a=(t-o)/l+2:a=(o-n)/l+4,a*=60);let i=r===0?0:l/r*100,c=r*100;return{h:a,s:i,b:c}}function le(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,s=r*(1-Math.abs(o/60%2-1)),l=t-r,a,i,c;return o<60?(a=r,i=s,c=0):o<120?(a=s,i=r,c=0):o<180?(a=0,i=r,c=s):o<240?(a=0,i=s,c=r):o<300?(a=s,i=0,c=r):(a=r,i=0,c=s),{r:Math.round((a+l)*255),g:Math.round((i+l)*255),b:Math.round((c+l)*255)}}function Fe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function De(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function ko(e){let o=Fe(e.r/255),n=Fe(e.g/255),t=Fe(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,l=.0883024619*o+.2817188376*n+.6299787005*t,a=Math.cbrt(r),i=Math.cbrt(s),c=Math.cbrt(l);return{L:.2104542553*a+.793617785*i-.0040720468*c,a:1.9779984951*a-2.428592205*i+.4505937099*c,b:.0259040371*a+.7827717662*i-.808675766*c}}function Ao(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,l=t*t*t,a=r*r*r,i=s*s*s,c=4.0767416621*l-3.3077115913*a+.2309699292*i,b=-1.2684380046*l+2.6097574011*a-.3413193965*i,f=-.0041960863*l-.7034186147*a+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,De(c)))*255),g:Math.round(Math.max(0,Math.min(1,De(b)))*255),b:Math.round(Math.max(0,Math.min(1,De(f)))*255)}}function ge(e){let o=ko(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function ke(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return Ao(e.l,n,t)}function wo(e,o,n){let t=ke({l:e,c:o,h:n});if(Ze(t))return{l:e,c:o,h:n};let r=0,s=o;for(let l=0;l<20;l++){let a=(r+s)/2;t=ke({l:e,c:a,h:n}),Ze(t)?r=a:s=a}return{l:e,c:r,h:n}}function Ze(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ce(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Qe=.4;function ae(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return le({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Qe,r=e.z*359,s=wo(n,t,r);return ke(s)}}function fe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Y(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ge(e);return{x:n.l,y:Math.min(n.c/Qe,1),z:n.h/359}}}function Je(e,o){let n=Ye[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function qe(e,o,n,t,r,s=!1){let l;e===0?l={x:t,y:o,z:n}:e===1?l={x:o,y:t,z:n}:l={x:o,y:n,z:t};let a=ae(l,r);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var eo=Math.PI/6,To=Math.cos(eo),Ro=Math.sin(eo),Te=!1;function Be(e){Te=e}var Ae=0,we=0;function Oe(e,o){Ae=e,we=o}function xe(){return{yaw:Ae,pitch:we}}function R(e,o,n){let t=e;if(Ae!==0||we!==0){let r={x:e.x-.5,y:e.y-.5,z:e.z-.5},s=Math.cos(Ae),l=Math.sin(Ae),a=Math.cos(we),i=Math.sin(we),c=r.x*s+r.z*l,b=r.y,f=-r.x*l+r.z*s,y=b*a-f*i,A=b*i+f*a;t={x:c+.5,y:y+.5,z:A+.5}}return{x:n.x+(t.y-t.x)*To*o,y:n.y+t.z*o-(t.x+t.y)*Ro*o}}function Lo(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],So=64,oo={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function to(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function no(e,o,n,t,r,s,l=!0,a=null,i=null){let{ctx:c,scale:b,center:f,width:y,height:A}=e;c.save(),c.clearRect(0,0,y,A);let T=Lo(o).map(C=>R(C,b,f));Eo(c,b,f,r),c.save(),c.shadowColor="rgba(0,0,0,0.35)",c.shadowBlur=8,c.shadowOffsetX=0,c.shadowOffsetY=2,zo(c,T,o,r),c.restore(),l&&Ho(c,r,b,f);let{yaw:m,pitch:L}=xe(),M=Math.max(0,Math.min(1,1-Math.max(Math.abs(m),Math.abs(L))/10));if(M>.02&&Do(c,b,f,M),i&&i.active&&s.ringAlpha>.01&&Bo(c,f,i.rgb,i.sat,s.ringAlpha),t>=0){let C=ae(n,r),E=Te?{r:255-C.r,g:255-C.g,b:255-C.b}:C,x=R(n,b,f);a&&a.active&&Oo(c,x,a.rgb,a.alpha),$o(c,x,E)}c.restore()}var Vo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Eo(e,o,n,t){let r=R({x:0,y:0,z:0},o,n),s=[R({x:1,y:0,z:0},o,n),R({x:0,y:1,z:0},o,n),R({x:0,y:0,z:1},o,n)],l=Vo[t];e.lineWidth=1.5;for(let a=0;a<s.length;a++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(s[a].x,s[a].y),e.strokeStyle=l[a],e.stroke()}function zo(e,o,n,t){let r=[n.x,n.y,n.z];for(let s=0;s<q.length;s++){let l=q[s],a=r[l.fixedAxis],i=r[l.uAxis],c=r[l.vAxis];if(i<.002&&c<.002)continue;let b=l.quad.map(f=>o[f]);Io(e,b,l.fixedAxis,a,i,c,t)}}function Io(e,o,n,t,r,s,l){let a=So,i=document.createElement("canvas");i.width=a,i.height=a;let c=i.getContext("2d"),b=c.createImageData(a,a),f=b.data;for(let Z=0;Z<a;Z++)for(let U=0;U<a;U++){let Q=U/(a-1)*r,oe=Z/(a-1)*s,te=qe(n,Q,oe,t,l,Te),D=(Z*a+U)*4;f[D]=te.r,f[D+1]=te.g,f[D+2]=te.b,f[D+3]=255}c.putImageData(b,0,0);let y=o[0],A=o[1],T=o[2],m=o[3],L=A.x-y.x,M=A.y-y.y,C=m.x-y.x,E=m.y-y.y;e.save(),e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(A.x,A.y),e.lineTo(T.x,T.y),e.lineTo(m.x,m.y),e.closePath(),e.clip();let x=2/a,S=y.x-L*x-C*x,O=y.y-M*x-E*x,$=1+2*x,H=1+2*x;e.transform(L*$/a,M*$/a,C*H/a,E*H/a,S,O),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function Ho(e,o,n,t){let r=Se[o],s=Te?[R({x:0,y:1,z:1},n,t),R({x:1,y:0,z:1},n,t),R({x:1,y:1,z:0},n,t)]:[R({x:1,y:0,z:0},n,t),R({x:0,y:1,z:0},n,t),R({x:0,y:0,z:1},n,t)],l=Te?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let i=s[a].x+l[a].x,c=s[a].y+l[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[a],i,c)}e.globalAlpha=1,e.restore()}var Po=.48,Fo=.33;function Do(e,o,n,t){let r=[{x:1,y:0,z:0},{x:1,y:1,z:0},{x:0,y:1,z:0},{x:0,y:1,z:1},{x:0,y:0,z:1},{x:1,y:0,z:1}],s=["R","Y","G","C","B","M"],l=["#ff1744","#ffeb3b","#00e676","#00bcd4","#2962ff","#f50057"];e.save(),e.globalAlpha=t;for(let a of[.25,.5,.75,1]){e.setLineDash(a===1?[]:[3,5]),e.strokeStyle=a===1?"rgba(30,41,59,.5)":"rgba(148,163,184,.55)",e.lineWidth=a===1?1.4:1,e.beginPath();for(let i=0;i<=6;i++){let c=r[i%6],b=R({x:c.x*a,y:c.y*a,z:c.z*a},o,n);i===0?e.moveTo(b.x,b.y):e.lineTo(b.x,b.y)}e.closePath(),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(148,163,184,.4)",e.lineWidth=1;for(let a of r){let i=R(a,o,n);e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(i.x,i.y),e.stroke()}e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="left";for(let a of[.25,.5,.75]){let i=R({x:a,y:a,z:0},o,n);e.fillText(Math.round(a*100)+"%",i.x+5,i.y-4)}e.font="bold 11px sans-serif",e.fillStyle="#334155",e.textAlign="center";for(let a=0;a<6;a++){let i=R(r[a],o,n),c=i.x>n.x+10?14:i.x<n.x-10?-14:0,b=i.y<n.y-10?-10:14;e.fillText(s[a],i.x+c,i.y+b)}e.beginPath(),e.arc(n.x,n.y,3.5,0,Math.PI*2),e.fillStyle="#111",e.fill(),e.restore()}function Bo(e,o,n,t,r,s){let l=o*Po,a=o*Fo,i=Math.max(0,Math.min(1,r));e.save(),e.globalAlpha=s,e.beginPath(),e.arc(n.x,n.y,l,0,Math.PI*2),e.arc(n.x,n.y,a,0,Math.PI*2,!0),e.clip();let c=e.createRadialGradient(n.x,n.y,a,n.x,n.y,l);c.addColorStop(0,"#e7e7e7"),c.addColorStop(1,"rgb("+t.r+","+t.g+","+t.b+")"),e.fillStyle=c,e.fillRect(n.x-l,n.y-l,l*2,l*2),e.restore(),e.beginPath(),e.arc(n.x,n.y,l,0,Math.PI*2),e.arc(n.x,n.y,a,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let f of[.25,.5,.75]){let y=a+(l-a)*f;e.fillText(Math.round(f*100)+"%",n.x+y+10,n.y-4)}let b=a+(l-a)*i;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(n.x,n.y-a),e.lineTo(n.x,n.y-b),e.stroke(),e.restore(),e.beginPath(),e.arc(n.x,n.y-b,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var ee=30,de=13;function Oo(e,o,n,t){let r=(ee+de)/2,s=5,l=Math.floor(o.x/s)*s,a=Math.floor(o.y/s)*s,i=ee*2+s*2,c=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,de,0,Math.PI*2,!0),e.clip();for(let L=-1;L*s<=i;L++)for(let M=-1;M*s<=i;M++)e.fillStyle=(L+M)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+L*s,a+M*s,s,s);let b="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",y=e;if(typeof y.createConicGradient=="function"){let L=y.createConicGradient(-Math.PI/2,o.x,o.y);L.addColorStop(0,b),L.addColorStop(1,f),e.fillStyle=L,e.fillRect(l-ee,a-ee,i,i)}else for(let M=0;M<36;M++){let C=-Math.PI/2+M/36*Math.PI*2,E=-Math.PI/2+(M+1)/36*Math.PI*2,x=(M+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(C)*de,o.y+Math.sin(C)*de),e.arc(o.x,o.y,ee,C,E),e.arc(o.x,o.y,de,E,C,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+x.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,de,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=c*Math.PI*2,T=o.x+r*Math.sin(A),m=o.y-r*Math.cos(A);e.beginPath(),e.arc(T,m,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function $o(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function ro(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(r[e],n,t)}function $e(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function ye(e,o,n,t,r){let s=q[e],l=[n.x,n.y,n.z],a=l[s.uAxis],i=l[s.vAxis];if(a<.002||i<.002)return null;let c={x:0,y:0,z:0},b=["x","y","z"];c[b[s.fixedAxis]]=l[s.fixedAxis];let f={...c};f[b[s.uAxis]]=a;let y={...c};y[b[s.vAxis]]=i;let A=R(c,t,r),T=R(f,t,r),m=R(y,t,r),L=T.x-A.x,M=T.y-A.y,C=m.x-A.x,E=m.y-A.y,x=L*E-M*C;if(Math.abs(x)<1e-6)return null;let S=o.x-A.x,O=o.y-A.y,$=(S*E-O*C)/x,H=(O*L-S*M)/x;return $<-.05||$>1.05||H<-.05||H>1.05?null:{s:Math.max(0,Math.min(1,$)),t:Math.max(0,Math.min(1,H))}}function ao(e,o,n,t,r){let s=q[e],l=[n.x,n.y,n.z],a=l[s.uAxis],i=l[s.vAxis];if(a<.002||i<.002)return null;let c={x:0,y:0,z:0},b=["x","y","z"];c[b[s.fixedAxis]]=l[s.fixedAxis];let f={...c};f[b[s.uAxis]]=a;let y={...c};y[b[s.vAxis]]=i;let A=R(c,t,r),T=R(f,t,r),m=R(y,t,r),L=T.x-A.x,M=T.y-A.y,C=m.x-A.x,E=m.y-A.y,x=L*E-M*C;if(Math.abs(x)<1e-6)return null;let S=o.x-A.x,O=o.y-A.y,$=(S*E-O*C)/x,H=(O*L-S*M)/x;return{s:Math.max(0,Math.min(1,$)),t:Math.max(0,Math.min(1,H))}}var io=22;function so(e,o,n,t,r,s,l,a,i,c,b,f,y,A,T){let m={...oo};function L(u){let h=e.getBoundingClientRect();return{x:u.clientX-h.left,y:u.clientY-h.top}}let M=!1,C=!1,E=!1,x=!1,S=null,O=9,$=1e3,H=null;function Z(){U(),H=setTimeout(Q,$)}function U(){H!==null&&(clearTimeout(H),H=null)}function Q(){H=null,m.alphaMode=!0,ve(),B(),i()}function oe(u){let h=y();return Math.hypot(u.x-h.x,u.y-h.y)}function te(u){let h=y();return(Math.atan2(u.x-h.x,-(u.y-h.y))+Math.PI*2)%(Math.PI*2)}function D(u){b(te(u)/(Math.PI*2)),i()}function ie(u){let h=oe(u);return h>=de-4&&h<=ee+6}function ue(u){let h=o(),w=l(),k=a();for(let v=0;v<3;v++){let V=ro(v,h,w,k),I=u.x-V.x,_=u.y-V.y;if(I*I+_*_<=io*io)return v}return-1}function he(u){let h=o(),w=l(),k=a();for(let v=q.length-1;v>=0;v--){let V=ye(v,u,h,w,k);if(V)return{faceIndex:v,...V}}return null}let K=-1,Re={x:0,y:0},Ie=0;function J(u,h){K=u,Re=h,Ie=o()[["x","y","z"][u]],m.draggingAxisHandle=u,e.style.cursor="grabbing",i()}function j(u){if(U(),K<0)return;let h=u.x-Re.x,w=u.y-Re.y,v=$e()[K],V=l(),_=(h*v.x+w*v.y)/V,X=Math.max(0,Math.min(1,Ie+_)),W=o(),G=["x","y","z"],me={...W,[G[K]]:X};n(me);let Ce=t(),Xe=s(),We=Xe>=0?q[Xe]:null,He={...Ce};We&&K===We.fixedAxis?He[G[K]]=X:He[G[K]]=Math.min(Ce[G[K]],X),r(He,s()),i()}function ve(){K=-1,m.draggingAxisHandle=-1}let F=-1,ne=null,N=null,d=!1;function g(u,h,w,k){F=u,m.draggingFace=u,ne=null,N=null,d=!1,k&&(d=!0,N={s:h,t:w}),z(u,h,w),e.style.cursor="crosshair",i()}function p(u,h,w){if(U(),F<0)return;let k=o(),v=l(),V=a(),I=ye(F,u,k,v,V),_=F;if(!I&&!w){for(let G=q.length-1;G>=0;G--)if(G!==F&&(I=ye(G,u,k,v,V),I)){_=G;break}}if(!I&&w&&(I=ao(F,u,k,v,V),_=F),!I){i();return}_!==F&&(F=_,m.draggingFace=_,ne=null,d=!1,N=null);let{s:X,t:W}=I;if(h&&N){if(d){let G=Math.abs(X-N.s),me=Math.abs(W-N.t),Ce=.02;(G>Ce||me>Ce)&&(ne=G>=me?"u":"v",d=!1)}ne==="u"?W=N.t:ne==="v"&&(X=N.s)}else h||(ne=null,d=!1,N=null);z(_,X,W),i()}function z(u,h,w){let k=q[u],v=o(),V=["x","y","z"],I={...t()};I[V[k.uAxis]]=h*v[V[k.uAxis]],I[V[k.vAxis]]=w*v[V[k.vAxis]],I[V[k.fixedAxis]]=v[V[k.fixedAxis]],r(I,u)}function B(){F=-1,m.draggingFace=-1,ne=null,d=!1,N=null}function P(u){C=!0;let h=L(u);if(c()){if(m.alphaMode){if(oe(h)<=O){m.alphaMode=!1,i();return}if(ie(h)){u.preventDefault(),M=!0,D(h);return}m.alphaMode=!1,i();return}oe(h)<=O&&Z()}let w=ue(h);if(w>=0){u.preventDefault(),J(w,h);return}let k=he(h);if(k){u.preventDefault(),g(k.faceIndex,k.s,k.t,u.shiftKey);return}let v=a();Math.hypot(h.x-v.x,h.y-v.y)>l()+20&&(u.preventDefault(),x=!0,S=h,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.25),i())}function be(u){let h=L(u);if(M){u.preventDefault(),D(h);return}if(x&&S){u.preventDefault();let I=h.x-S.x,_=h.y-S.y,X=xe();Oe(Math.max(-60,Math.min(60,X.yaw+I*.12)),Math.max(-60,Math.min(60,X.pitch+_*.12))),I!==0&&A(Math.max(0,Math.min(1,T()+I*.002))),m.ringAlpha=Math.min(1,m.ringAlpha+.12),S=h,i();return}if(C&&m.alphaMode&&ie(h)){u.preventDefault(),M=!0,D(h);return}if(K>=0){u.preventDefault(),j(h);return}if(F>=0){u.preventDefault(),p(h,u.shiftKey,u.altKey);return}let w=ue(h),k=he(h),v=w,V=w>=0?-1:k?k.faceIndex:-1;(v!==m.hoveredAxisHandle||V!==m.hoveredFace)&&(m.hoveredAxisHandle=v,m.hoveredFace=V,e.style.cursor=v>=0?"grab":V>=0?"crosshair":"default",i())}function se(u){if(U(),C=!1,M=!1,x){x=!1,m.viewRotating=!1;let w=xe();Math.max(Math.abs(w.yaw),Math.abs(w.pitch))>5&&(m.ringAlpha=0),S=null,i()}let h=K>=0||F>=0;ve(),B(),h&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",i())}function Le(u){if(u.touches.length!==1)return;E=!0;let h=L(u.touches[0]);if(c()){if(m.alphaMode){if(oe(h)<=O){m.alphaMode=!1,i();return}if(ie(h)){u.preventDefault(),M=!0,D(h);return}m.alphaMode=!1,i();return}oe(h)<=O&&Z()}let w=ue(h);if(w>=0){u.preventDefault(),J(w,h);return}let k=he(h);if(k){u.preventDefault(),g(k.faceIndex,k.s,k.t,!1);return}let v=a();Math.hypot(h.x-v.x,h.y-v.y)>l()+20&&(u.preventDefault(),x=!0,S=h,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.25),i())}function Me(u){if(u.touches.length!==1)return;let h=L(u.touches[0]);if(M)u.preventDefault(),D(h);else if(E&&m.alphaMode&&ie(h))u.preventDefault(),M=!0,D(h);else if(K>=0)u.preventDefault(),j(h);else if(x&&S){u.preventDefault();let w=h.x-S.x,k=h.y-S.y,v=xe();Oe(Math.max(-60,Math.min(60,v.yaw+w*.12)),Math.max(-60,Math.min(60,v.pitch+k*.12))),w!==0&&A(Math.max(0,Math.min(1,T()+w*.002))),m.ringAlpha=Math.min(1,m.ringAlpha+.12),S=h,i()}else F>=0&&(u.preventDefault(),p(h,!1,!1))}function re(u){if(U(),E=!1,M=!1,x){x=!1,m.viewRotating=!1;let h=xe();Math.max(Math.abs(h.yaw),Math.abs(h.pitch))>5&&(m.ringAlpha=0),S=null,i()}ve(),B(),i()}function Ke(u){if(m.alphaMode){if(u.key==="Escape"){m.alphaMode=!1,i();return}if(u.key==="ArrowUp"||u.key==="ArrowRight"){u.preventDefault(),b(Math.min(1,f()+(u.shiftKey?.08:.02))),i();return}if(u.key==="ArrowDown"||u.key==="ArrowLeft"){u.preventDefault(),b(Math.max(0,f()-(u.shiftKey?.08:.02))),i();return}}let h=u.shiftKey?.04:.004,w=t(),k=o(),v=$e(),V=0,I=0;switch(u.key){case"ArrowRight":V=1;break;case"ArrowLeft":V=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}u.preventDefault();let _={...w},X=["x","y","z"];for(let W=0;W<3;W++){let G=V*v[W].x+I*v[W].y;if(Math.abs(G)>.3){let me=w[X[W]]+h*Math.sign(G);_[X[W]]=Math.max(0,Math.min(k[X[W]],me))}}r(_,s()),i()}e.addEventListener("mousedown",P),window.addEventListener("mousemove",be),window.addEventListener("mouseup",se),e.addEventListener("touchstart",Le,{passive:!1}),e.addEventListener("touchmove",Me,{passive:!1}),e.addEventListener("touchend",re),e.addEventListener("keydown",Ke),e.setAttribute("tabindex","0");function go(){U(),e.removeEventListener("mousedown",P),window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",se),e.removeEventListener("touchstart",Le),e.removeEventListener("touchmove",Me),e.removeEventListener("touchend",re),e.removeEventListener("keydown",Ke)}return{state:m,destroy:go}}var lo=`.box-picker {\r
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
`;var _e=mo,fo=!1;function Uo(){if(fo||typeof document>"u")return;fo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=lo,document.head.appendChild(e)}function mo(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,s=o.showModeToggle??!1,l=o.showCorners??!1,a={mode:()=>i,switchMode:d=>U(d),onHexInput:d=>{let g=pe(d);g?(f=fe(H?{r:255-g.r,g:255-g.g,b:255-g.b}:g,i),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)},F(),j(),D()):j()},onChannelInput:(d,g,p)=>{let z=Math.max(0,Math.min(p,g)),B=["x","y","z"],P=z/p;if(H){let be={...f,[B[d]]:P},se=ae(be,i);f=fe({r:255-se.r,g:255-se.g,b:255-se.b},i)}else f={...f,[B[d]]:P};P>b[B[d]]&&(b={...b,[B[d]]:P}),F(),j(),D()},getRgbForCopy:()=>ae(f,i),onRandom:d=>N(d),onReset:()=>N({r:0,g:0,b:0})},i=o.mode??"rgb",c=o.initialColor?fe(o.initialColor,i):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},f={...c},y=0,A=()=>o.alpha!==void 0,T=Math.max(0,Math.min(1,o.alpha??1));function m(d){let g=Math.max(0,Math.min(1,d));g!==T&&(T=g,F(),j(),D())}function L(d){let g=J(),p=Y(g);p.s=Math.max(0,Math.min(100,d*100));let z=le(p);N(H?{r:255-z.r,g:255-z.g,b:255-z.b}:z)}let M=new Set;Uo();let C=document.createElement("div");C.className="box-picker";let E=document.createElement("canvas");E.style.cursor="grab",C.appendChild(E);let x=to(E,n),S=null,O=document.createElement("div");O.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",O.appendChild(S),C.appendChild(O),(r||s||l)&&Promise.resolve().then(()=>(bo(),ho)).then(d=>{d.createControls(O,a,{showInputs:r,showModeToggle:s,showCorners:l})}).catch(()=>{}),e.appendChild(C);let $=so(E,()=>b,d=>{b=d},()=>f,(d,g)=>{f=d,y=g,F(),j()},()=>y,()=>x.scale,()=>x.center,D,A,m,()=>T,()=>R(f,x.scale,x.center),L,()=>Y(J()).s/100),H=!1,Z=!0;E.addEventListener("mouseenter",()=>{Z=!0,D()}),E.addEventListener("mouseleave",()=>{Z=!1,D()}),E.addEventListener("dblclick",()=>{H=!H,Be(H),F(),j(),D()});function U(d){if(d===i)return;let g=ae(f,i),p={...f},z={...b};i=d;let B=fe(g,i),P={x:1,y:1,z:1};f=B,b=P,oe(p,B,z,P,300),j()}let Q=null;function oe(d,g,p,z,B){Q!==null&&cancelAnimationFrame(Q);let P=performance.now();function be(se){let Le=se-P,Me=Math.min(1,Le/B),re=1-Math.pow(1-Me,3);f={x:d.x+(g.x-d.x)*re,y:d.y+(g.y-d.y)*re,z:d.z+(g.z-d.z)*re},b={x:p.x+(z.x-p.x)*re,y:p.y+(z.y-p.y)*re,z:p.z+(z.z-p.z)*re},ie(),F(),Me<1?Q=requestAnimationFrame(be):Q=null}Q=requestAnimationFrame(be)}let te=!1;function D(){te||(te=!0,requestAnimationFrame(()=>{te=!1,ie()}))}function ie(){no(x,b,f,y,i,$.state,Z,{active:$.state.alphaMode,alpha:T,rgb:J()},{active:$.state.viewRotating||$.state.ringAlpha>0,sat:Y(J()).s/100,rgb:le({h:Y(J()).h,s:100,b:100})})}function ue(d,g,p){return Math.round(d+(g-d)*p)}function he(d,g){let p=g>0?255:0,z=Math.abs(g);return ce({r:ue(d.r,p,z),g:ue(d.g,p,z),b:ue(d.b,p,z)})}function K(d,g){let p=pe(g)||{r:128,g:128,b:128},z=he(p,.35),B=he(p,0),P=he(p,-.35);d.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${z}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${B}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${P}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,d.style.backgroundColor="transparent"}function Re(d){try{navigator.clipboard.writeText(d).catch(()=>{})}catch{}}function Ie(d){d&&(d.style.borderColor="#4ade80",d.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{d.style.borderColor="",d.style.boxShadow=""},500))}function J(){let d=ae(f,i);return H?{r:255-d.r,g:255-d.g,b:255-d.b}:d}function j(){if(!t)return;let d=J(),g=ce(d);S&&K(S,g);let p=C.querySelector(".box-picker-hex");p&&(p.value=g),ve(),C._updateModeButtons&&C._updateModeButtons()}function ve(){if(!t)return;let d=Se[i],g=H?fe(J(),i):f,p=Je(g,i),z=C.querySelectorAll(".box-picker-channel input"),B=C.querySelectorAll(".box-picker-channel label");for(let P=0;P<z.length;P++)B[P].textContent=d[P],B[P].style.color="",B[P].style.textShadow="none",z[P].value=String(p[P])}function F(){let d=J(),g={rgb:d,hsb:Y(d),oklch:ge(d),hex:ce(d),alpha:T};for(let p of M)p(g)}function ne(){let d=ae(f,i);return{rgb:d,hsb:Y(d),oklch:ge(d),hex:ce(d)}}j(),ie();let N=d=>{f=fe(d,i),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)};let g=R(f,x.scale,x.center);y=-1;for(let p=q.length-1;p>=0;p--)if(ye(p,g,b,x.scale,x.center)){y=p;break}F(),j(),D()};return{getColor:ne,getMode:()=>i,setColor:N,setAlpha:m,getAlpha:()=>T,setMode(d){U(d)},on(d,g){M.add(g)},off(d,g){M.delete(g)},destroy(){$.destroy(),Q!==null&&cancelAnimationFrame(Q),e.removeChild(C)}}}function Ue(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:pe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=pe(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ge(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?le({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:le({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:ke({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:le({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Ve(e,o,n=1){if(o==="hex")return ce(e);if(o==="hex-alpha")return ce(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=Y(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=Y(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Ne(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=Y(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=ge(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ge(e,o,n){let t=o/100,r=n/100,s=(1-Math.abs(2*r-1))*t,l=s*(1-Math.abs(e/60%2-1)),a=r-s/2,i=0,c=0,b=0;return e<60?(i=s,c=l):e<120?(i=l,c=s):e<180?(c=s,b=l):e<240?(c=l,b=s):e<300?(i=l,b=s):(i=s,b=l),{r:Math.round((i+a)*255),g:Math.round((c+a)*255),b:Math.round((b+a)*255)}}function Ne(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),l=(r+s)/2;if(r===s)return{h:0,s:0,l:l*100};let a=r-s,i=l>.5?a/(2-r-s):a/(r+s),c=0;return r===o?c=((n-t)/a+(n<t?6:0))*60:r===n?c=((t-o)/a+2)*60:c=((o-n)/a+4)*60,{h:c,s:i*100,l:l*100}}var Ee=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?Ue(t,this.model):null;this.alpha=r?.alpha??1;let s=r?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=_e(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",a=>{this.internal||(this.internal=!0,this.alpha=a.alpha,this.setAttribute("value",Ve(a.rgb,this.model,a.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:a})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Ve(a.rgb,this.model,a.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=Ue(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Ve({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ze=class extends Ee{constructor(){super("hex")}},Ko=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Ko)customElements.get(e)||customElements.define(e,class extends Ee{constructor(){super(o)}});var Xo=ze;return Co(Wo);})();
