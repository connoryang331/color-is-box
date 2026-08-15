var ColorIsBoxElement=(()=>{var He=Object.defineProperty;var Co=Object.getOwnPropertyDescriptor;var ko=Object.getOwnPropertyNames;var Ao=Object.prototype.hasOwnProperty;var wo=(e,o)=>()=>(e&&(o=e(e=0)),o);var qe=(e,o)=>{for(var n in o)He(e,n,{get:o[n],enumerable:!0})},To=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of ko(o))!Ao.call(e,r)&&r!==n&&He(e,r,{get:()=>o[r],enumerable:!(t=Co(o,r))||t.enumerable});return e};var Ro=e=>To(He({},"__esModule",{value:!0}),e);var po={};qe(po,{createControls:()=>Wo});function mo(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function go(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Wo(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=b=>{let f=document.createElement("button");return f.textContent=b.toUpperCase(),f.addEventListener("click",()=>o.switchMode(b)),t.appendChild(f),f},s=r("oklch"),l=r("rgb"),a=r("hsb"),i=()=>{let b=o.mode();l.classList.toggle("active",b==="rgb"),a.classList.toggle("active",b==="hsb"),s.classList.toggle("active",b==="oklch")};i();let c=o.switchMode;o._markActive=i,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let f=t.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),t.addEventListener("click",()=>{mo(o.getRgbForCopy()?"#"+jo(o.getRgbForCopy()):"#ffffff"),go(t)});let r=document.createElement("div");r.className="box-picker-channels";let s=[],l=[],a=["R","G","B"];for(let f=0;f<3;f++){let y=document.createElement("div");y.className="box-picker-channel";let A=document.createElement("label");A.textContent=a[f];let w=document.createElement("input");w.type="text",w.inputMode="numeric",y.appendChild(A),y.appendChild(w),r.appendChild(y),s.push(w),l.push(A),w.addEventListener("change",()=>{let m=parseFloat(w.value);isNaN(m)||o.onChannelInput(f,m,255)}),w.addEventListener("click",()=>{let m=o.getRgbForCopy();mo(`${m.r}, ${m.g}, ${m.b}`),go(w)})}let i=document.createElement("div");i.className="box-picker-hexrow";let c=document.createElement("div");c.className="box-picker-hexwrap";let b=document.createElement("label");b.textContent="Hex",c.appendChild(b),c.appendChild(t),i.appendChild(r),i.appendChild(c),e.appendChild(i),e._inputs={hexInput:t,inputs:s,labels:l}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:s,g:l,b:a})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function jo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var xo=wo(()=>{});var Jo={};qe(Jo,{ColorIsBoxElement:()=>ze,createBoxColorPicker:()=>vo,createColorPicker:()=>$e,default:()=>Qo,setBoxInvert:()=>Be});var Le={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},eo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Y(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),l=r-s,a=0;l!==0&&(r===o?a=((n-t)/l+6)%6:r===n?a=(t-o)/l+2:a=(o-n)/l+4,a*=60);let i=r===0?0:l/r*100,c=r*100;return{h:a,s:i,b:c}}function ie(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,s=r*(1-Math.abs(o/60%2-1)),l=t-r,a,i,c;return o<60?(a=r,i=s,c=0):o<120?(a=s,i=r,c=0):o<180?(a=0,i=r,c=s):o<240?(a=0,i=s,c=r):o<300?(a=s,i=0,c=r):(a=r,i=0,c=s),{r:Math.round((a+l)*255),g:Math.round((i+l)*255),b:Math.round((c+l)*255)}}function Fe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function De(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Lo(e){let o=Fe(e.r/255),n=Fe(e.g/255),t=Fe(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,l=.0883024619*o+.2817188376*n+.6299787005*t,a=Math.cbrt(r),i=Math.cbrt(s),c=Math.cbrt(l);return{L:.2104542553*a+.793617785*i-.0040720468*c,a:1.9779984951*a-2.428592205*i+.4505937099*c,b:.0259040371*a+.7827717662*i-.808675766*c}}function So(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,l=t*t*t,a=r*r*r,i=s*s*s,c=4.0767416621*l-3.3077115913*a+.2309699292*i,b=-1.2684380046*l+2.6097574011*a-.3413193965*i,f=-.0041960863*l-.7034186147*a+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,De(c)))*255),g:Math.round(Math.max(0,Math.min(1,De(b)))*255),b:Math.round(Math.max(0,Math.min(1,De(f)))*255)}}function me(e){let o=Lo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Ce(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return So(e.l,n,t)}function Vo(e,o,n){let t=Ce({l:e,c:o,h:n});if(oo(t))return{l:e,c:o,h:n};let r=0,s=o;for(let l=0;l<20;l++){let a=(r+s)/2;t=Ce({l:e,c:a,h:n}),oo(t)?r=a:s=a}return{l:e,c:r,h:n}}function oo(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ge(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var to=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ie({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*to,r=e.z*359,s=Vo(n,t,r);return Ce(s)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Y(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=me(e);return{x:n.l,y:Math.min(n.c/to,1),z:n.h/359}}}function no(e,o){let n=eo[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ro(e,o,n,t,r,s=!1){let l;e===0?l={x:t,y:o,z:n}:e===1?l={x:o,y:t,z:n}:l={x:o,y:n,z:t};let a=re(l,r);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var ao=Math.PI/6,Eo=Math.cos(ao),zo=Math.sin(ao),we=!1;function Be(e){we=e}var ke=0,Ae=0;function Oe(e,o){ke=e,Ae=o}function Se(){return{yaw:ke,pitch:Ae}}function S(e,o,n){let t=e;if(ke!==0||Ae!==0){let r={x:e.x-.5,y:e.y-.5,z:e.z-.5},s=Math.cos(ke),l=Math.sin(ke),a=Math.cos(Ae),i=Math.sin(Ae),c=r.x*s+r.z*l,b=r.y,f=-r.x*l+r.z*s,y=b*a-f*i,A=b*i+f*a;t={x:c+.5,y:y+.5,z:A+.5}}return{x:n.x+(t.y-t.x)*Eo*o,y:n.y+t.z*o-(t.x+t.y)*zo*o}}function Po(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var J=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Io=64,io={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function so(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function lo(e,o,n,t,r,s,l=!0,a=null,i=null){let{ctx:c,scale:b,center:f,width:y,height:A}=e;c.save(),c.clearRect(0,0,y,A);let w=Po(o).map(C=>S(C,b,f));Fo(c,b,f,r),c.save(),c.shadowColor="rgba(0,0,0,0.35)",c.shadowBlur=8,c.shadowOffsetX=0,c.shadowOffsetY=2,Do(c,w,o,r),c.restore(),l&&Oo(c,r,b,f);let{yaw:m,pitch:E}=Se(),M=Math.max(0,Math.min(1,1-Math.max(Math.abs(m),Math.abs(E))/10));if(M>.02&&!s.viewRotating&&Go(c,b,f,M*.45),i&&i.active&&s.ringAlpha>.01&&No(c,f,i.rgb,i.sat,s.ringAlpha),t>=0){let C=re(n,r),I=we?{r:255-C.r,g:255-C.g,b:255-C.b}:C,x=S(n,b,f);a&&a.active&&Uo(c,x,a.rgb,a.alpha),Ko(c,x,I)}c.restore()}var Ho={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Fo(e,o,n,t){let r=S({x:0,y:0,z:0},o,n),s=[S({x:1,y:0,z:0},o,n),S({x:0,y:1,z:0},o,n),S({x:0,y:0,z:1},o,n)],l=Ho[t];e.lineWidth=1.5;for(let a=0;a<s.length;a++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(s[a].x,s[a].y),e.strokeStyle=l[a],e.stroke()}function Do(e,o,n,t){let r=[n.x,n.y,n.z];for(let s=0;s<J.length;s++){let l=J[s],a=r[l.fixedAxis],i=r[l.uAxis],c=r[l.vAxis];if(i<.002&&c<.002)continue;let b=l.quad.map(f=>o[f]);Bo(e,b,l.fixedAxis,a,i,c,t)}}function Bo(e,o,n,t,r,s,l){let a=Io,i=document.createElement("canvas");i.width=a,i.height=a;let c=i.getContext("2d"),b=c.createImageData(a,a),f=b.data;for(let Z=0;Z<a;Z++)for(let oe=0;oe<a;oe++){let G=oe/(a-1)*r,xe=Z/(a-1)*s,K=ro(n,G,xe,t,l,we),B=(Z*a+oe)*4;f[B]=K.r,f[B+1]=K.g,f[B+2]=K.b,f[B+3]=255}c.putImageData(b,0,0);let y=o[0],A=o[1],w=o[2],m=o[3],E=A.x-y.x,M=A.y-y.y,C=m.x-y.x,I=m.y-y.y;e.save(),e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(A.x,A.y),e.lineTo(w.x,w.y),e.lineTo(m.x,m.y),e.closePath(),e.clip();let x=2/a,R=y.x-E*x-C*x,$=y.y-M*x-I*x,F=1+2*x,D=1+2*x;e.transform(E*F/a,M*F/a,C*D/a,I*D/a,R,$),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function Oo(e,o,n,t){let r=Le[o],s=we?[S({x:0,y:1,z:1},n,t),S({x:1,y:0,z:1},n,t),S({x:1,y:1,z:0},n,t)]:[S({x:1,y:0,z:0},n,t),S({x:0,y:1,z:0},n,t),S({x:0,y:0,z:1},n,t)],l=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let i=s[a].x+l[a].x,c=s[a].y+l[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[a],i,c)}e.globalAlpha=1,e.restore()}var _o=.48,$o=.33;function Go(e,o,n,t){let r=[{x:1,y:0,z:0},{x:1,y:1,z:0},{x:0,y:1,z:0},{x:0,y:1,z:1},{x:0,y:0,z:1},{x:1,y:0,z:1}],s=["R","Y","G","C","B","M"],l=["#ff1744","#ffeb3b","#00e676","#00bcd4","#2962ff","#f50057"];e.save(),e.globalAlpha=t;for(let a of[.25,.5,.75,1]){e.setLineDash(a===1?[]:[3,5]),e.strokeStyle=a===1?"rgba(30,41,59,.5)":"rgba(148,163,184,.55)",e.lineWidth=a===1?1.4:1,e.beginPath();for(let i=0;i<=6;i++){let c=r[i%6],b=S({x:c.x*a,y:c.y*a,z:c.z*a},o,n);i===0?e.moveTo(b.x,b.y):e.lineTo(b.x,b.y)}e.closePath(),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(148,163,184,.4)",e.lineWidth=1;for(let a of r){let i=S(a,o,n);e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(i.x,i.y),e.stroke()}e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="left";for(let a of[.25,.5,.75]){let i=S({x:a,y:a,z:0},o,n);e.fillText(Math.round(a*100)+"%",i.x+5,i.y-4)}e.font="bold 11px sans-serif",e.fillStyle="#334155",e.textAlign="center";for(let a=0;a<6;a++){let i=S(r[a],o,n),c=i.x>n.x+10?14:i.x<n.x-10?-14:0,b=i.y<n.y-10?-10:14;e.fillText(s[a],i.x+c,i.y+b)}e.beginPath(),e.arc(n.x,n.y,3.5,0,Math.PI*2),e.fillStyle="#111",e.fill(),e.restore()}function No(e,o,n,t,r,s){let l=o*_o,a=o*$o,i=Math.max(0,Math.min(1,r));e.save(),e.globalAlpha=s,e.beginPath(),e.arc(n.x,n.y,l,0,Math.PI*2),e.arc(n.x,n.y,a,0,Math.PI*2,!0),e.clip();let c=e.createRadialGradient(n.x,n.y,a,n.x,n.y,l);c.addColorStop(0,"#e7e7e7"),c.addColorStop(1,"rgb("+t.r+","+t.g+","+t.b+")"),e.fillStyle=c,e.fillRect(n.x-l,n.y-l,l*2,l*2),e.restore(),e.beginPath(),e.arc(n.x,n.y,l,0,Math.PI*2),e.arc(n.x,n.y,a,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let f of[.25,.5,.75]){let y=a+(l-a)*f;e.fillText(Math.round(f*100)+"%",n.x+y+10,n.y-4)}let b=a+(l-a)*i;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(n.x,n.y-a),e.lineTo(n.x,n.y-b),e.stroke(),e.restore(),e.beginPath(),e.arc(n.x,n.y-b,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var ee=30,le=13;function Uo(e,o,n,t){let r=(ee+le)/2,s=5,l=Math.floor(o.x/s)*s,a=Math.floor(o.y/s)*s,i=ee*2+s*2,c=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let E=-1;E*s<=i;E++)for(let M=-1;M*s<=i;M++)e.fillStyle=(E+M)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+E*s,a+M*s,s,s);let b="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",y=e;if(typeof y.createConicGradient=="function"){let E=y.createConicGradient(-Math.PI/2,o.x,o.y);E.addColorStop(0,b),E.addColorStop(1,f),e.fillStyle=E,e.fillRect(l-ee,a-ee,i,i)}else for(let M=0;M<36;M++){let C=-Math.PI/2+M/36*Math.PI*2,I=-Math.PI/2+(M+1)/36*Math.PI*2,x=(M+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(C)*le,o.y+Math.sin(C)*le),e.arc(o.x,o.y,ee,C,I),e.arc(o.x,o.y,le,I,C,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+x.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=c*Math.PI*2,w=o.x+r*Math.sin(A),m=o.y-r*Math.cos(A);e.beginPath(),e.arc(w,m,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Ko(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function co(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(r[e],n,t)}function _e(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function pe(e,o,n,t,r){let s=J[e],l=[n.x,n.y,n.z],a=l[s.uAxis],i=l[s.vAxis];if(a<.002||i<.002)return null;let c={x:0,y:0,z:0},b=["x","y","z"];c[b[s.fixedAxis]]=l[s.fixedAxis];let f={...c};f[b[s.uAxis]]=a;let y={...c};y[b[s.vAxis]]=i;let A=S(c,t,r),w=S(f,t,r),m=S(y,t,r),E=w.x-A.x,M=w.y-A.y,C=m.x-A.x,I=m.y-A.y,x=E*I-M*C;if(Math.abs(x)<1e-6)return null;let R=o.x-A.x,$=o.y-A.y,F=(R*I-$*C)/x,D=($*E-R*M)/x;return F<-.05||F>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}function uo(e,o,n,t,r){let s=J[e],l=[n.x,n.y,n.z],a=l[s.uAxis],i=l[s.vAxis];if(a<.002||i<.002)return null;let c={x:0,y:0,z:0},b=["x","y","z"];c[b[s.fixedAxis]]=l[s.fixedAxis];let f={...c};f[b[s.uAxis]]=a;let y={...c};y[b[s.vAxis]]=i;let A=S(c,t,r),w=S(f,t,r),m=S(y,t,r),E=w.x-A.x,M=w.y-A.y,C=m.x-A.x,I=m.y-A.y,x=E*I-M*C;if(Math.abs(x)<1e-6)return null;let R=o.x-A.x,$=o.y-A.y,F=(R*I-$*C)/x,D=($*E-R*M)/x;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}var ho=22;function bo(e,o,n,t,r,s,l,a,i,c,b,f,y,A,w){let m={...io};function E(d){let h=e.getBoundingClientRect();return{x:d.clientX-h.left,y:d.clientY-h.top}}let M=!1,C=!1,I=!1,x=!1,R=null,$=600,F=null;function D(){Z(),F=setTimeout(oe,$)}function Z(){F!==null&&(clearTimeout(F),F=null)}function oe(){F=null,he(),p(),x=!0,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.3),R=null,i()}let G=9,xe=1e3,K=null;function B(){q(),K=setTimeout(ye,xe)}function q(){K!==null&&(clearTimeout(K),K=null),Z()}function ye(){K=null,m.alphaMode=!0,p(),he(),i()}function te(d){let h=y();return Math.hypot(d.x-h.x,d.y-h.y)}function Pe(d){let h=y();return(Math.atan2(d.x-h.x,-(d.y-h.y))+Math.PI*2)%(Math.PI*2)}function ce(d){b(Pe(d)/(Math.PI*2)),i()}function ve(d){let h=te(d);return h>=le-4&&h<=ee+6}function j(d){let h=o(),T=l(),k=a();for(let v=0;v<3;v++){let P=co(v,h,T,k),H=d.x-P.x,O=d.y-P.y;if(H*H+O*O<=ho*ho)return v}return-1}function X(d){let h=o(),T=l(),k=a();for(let v=J.length-1;v>=0;v--){let P=pe(v,d,h,T,k);if(P)return{faceIndex:v,...P}}return null}let N=-1,Q={x:0,y:0},Te=0;function de(d,h){N=d,Q=h,Te=o()[["x","y","z"][d]],m.draggingAxisHandle=d,e.style.cursor="grabbing",i()}function u(d){if(q(),N<0)return;let h=d.x-Q.x,T=d.y-Q.y,v=_e()[N],P=l(),O=(h*v.x+T*v.y)/P,U=Math.max(0,Math.min(1,Te+O)),W=o(),_=["x","y","z"],fe={...W,[_[N]]:U};n(fe);let Me=t(),Qe=s(),Je=Qe>=0?J[Qe]:null,Ie={...Me};Je&&N===Je.fixedAxis?Ie[_[N]]=U:Ie[_[N]]=Math.min(Me[_[N]],U),r(Ie,s()),i()}function p(){N=-1,m.draggingAxisHandle=-1}let g=-1,L=null,z=null,V=!1;function ue(d,h,T,k){g=d,m.draggingFace=d,L=null,z=null,V=!1,k&&(V=!0,z={s:h,t:T}),Re(d,h,T),e.style.cursor="crosshair",i()}function ae(d,h,T){if(q(),g<0)return;let k=o(),v=l(),P=a(),H=pe(g,d,k,v,P),O=g;if(!H&&!T){for(let _=J.length-1;_>=0;_--)if(_!==g&&(H=pe(_,d,k,v,P),H)){O=_;break}}if(!H&&T&&(H=uo(g,d,k,v,P),O=g),!H){i();return}O!==g&&(g=O,m.draggingFace=O,L=null,V=!1,z=null);let{s:U,t:W}=H;if(h&&z){if(V){let _=Math.abs(U-z.s),fe=Math.abs(W-z.t),Me=.02;(_>Me||fe>Me)&&(L=_>=fe?"u":"v",V=!1)}L==="u"?W=z.t:L==="v"&&(U=z.s)}else h||(L=null,V=!1,z=null);Re(O,U,W),i()}function Re(d,h,T){let k=J[d],v=o(),P=["x","y","z"],H={...t()};H[P[k.uAxis]]=h*v[P[k.uAxis]],H[P[k.vAxis]]=T*v[P[k.vAxis]],H[P[k.fixedAxis]]=v[P[k.fixedAxis]],r(H,d)}function he(){g=-1,m.draggingFace=-1,L=null,V=!1,z=null}function ne(d){C=!0;let h=E(d);if(c()){if(m.alphaMode){if(te(h)<=G){m.alphaMode=!1,i();return}if(ve(h)){d.preventDefault(),M=!0,ce(h);return}m.alphaMode=!1,i();return}te(h)<=G&&B()}let T=j(h);if(T>=0){d.preventDefault(),de(T,h);return}let k=X(h);if(k){d.preventDefault(),ue(k.faceIndex,k.s,k.t,d.shiftKey),D();return}let v=a();Math.hypot(h.x-v.x,h.y-v.y)>l()+20&&(d.preventDefault(),x=!0,R=h,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.25),i())}function Ke(d){let h=E(d);if(M){d.preventDefault(),ce(h);return}if(x){if(d.preventDefault(),!R){R=h;return}let H=h.x-R.x,O=h.y-R.y,U=Se();Oe(Math.max(-60,Math.min(60,U.yaw+H*.12)),Math.max(-60,Math.min(60,U.pitch+O*.12))),H!==0&&A(Math.max(0,Math.min(1,w()+H*.002))),m.ringAlpha=Math.min(1,m.ringAlpha+.12),R=h,i();return}if(C&&m.alphaMode&&ve(h)){d.preventDefault(),M=!0,ce(h);return}if(N>=0){d.preventDefault(),u(h);return}if(g>=0){d.preventDefault(),ae(h,d.shiftKey,d.altKey);return}let T=j(h),k=X(h),v=T,P=T>=0?-1:k?k.faceIndex:-1;(v!==m.hoveredAxisHandle||P!==m.hoveredFace)&&(m.hoveredAxisHandle=v,m.hoveredFace=P,e.style.cursor=v>=0?"grab":P>=0?"crosshair":"default",i())}function Xe(d){q(),C=!1,M=!1,x&&(x=!1,m.viewRotating=!1,m.ringAlpha=0,R=null,i());let h=N>=0||g>=0;p(),he(),h&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",i())}function We(d){if(d.touches.length!==1)return;I=!0;let h=E(d.touches[0]);if(c()){if(m.alphaMode){if(te(h)<=G){m.alphaMode=!1,i();return}if(ve(h)){d.preventDefault(),M=!0,ce(h);return}m.alphaMode=!1,i();return}te(h)<=G&&B()}let T=j(h);if(T>=0){d.preventDefault(),de(T,h);return}let k=X(h);if(k){d.preventDefault(),ue(k.faceIndex,k.s,k.t,!1),D();return}let v=a();Math.hypot(h.x-v.x,h.y-v.y)>l()+20&&(d.preventDefault(),x=!0,R=h,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.25),i())}function je(d){if(d.touches.length!==1)return;let h=E(d.touches[0]);if(M)d.preventDefault(),ce(h);else if(I&&m.alphaMode&&ve(h))d.preventDefault(),M=!0,ce(h);else if(N>=0)d.preventDefault(),u(h);else if(x){if(d.preventDefault(),!R){R=h;return}let T=h.x-R.x,k=h.y-R.y,v=Se();Oe(Math.max(-60,Math.min(60,v.yaw+T*.12)),Math.max(-60,Math.min(60,v.pitch+k*.12))),T!==0&&A(Math.max(0,Math.min(1,w()+T*.002))),m.ringAlpha=Math.min(1,m.ringAlpha+.12),R=h,i()}else g>=0&&(d.preventDefault(),ae(h,!1,!1))}function Ye(d){q(),I=!1,M=!1,x&&(x=!1,m.viewRotating=!1,m.ringAlpha=0,R=null,i()),p(),he(),i()}function Ze(d){if(m.alphaMode){if(d.key==="Escape"){m.alphaMode=!1,i();return}if(d.key==="ArrowUp"||d.key==="ArrowRight"){d.preventDefault(),b(Math.min(1,f()+(d.shiftKey?.08:.02))),i();return}if(d.key==="ArrowDown"||d.key==="ArrowLeft"){d.preventDefault(),b(Math.max(0,f()-(d.shiftKey?.08:.02))),i();return}}let h=d.shiftKey?.04:.004,T=t(),k=o(),v=_e(),P=0,H=0;switch(d.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}d.preventDefault();let O={...T},U=["x","y","z"];for(let W=0;W<3;W++){let _=P*v[W].x+H*v[W].y;if(Math.abs(_)>.3){let fe=T[U[W]]+h*Math.sign(_);O[U[W]]=Math.max(0,Math.min(k[U[W]],fe))}}r(O,s()),i()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",Xe),e.addEventListener("touchstart",We,{passive:!1}),e.addEventListener("touchmove",je,{passive:!1}),e.addEventListener("touchend",Ye),e.addEventListener("keydown",Ze),e.setAttribute("tabindex","0");function Mo(){q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",Xe),e.removeEventListener("touchstart",We),e.removeEventListener("touchmove",je),e.removeEventListener("touchend",Ye),e.removeEventListener("keydown",Ze)}return{state:m,destroy:Mo}}var fo=`.box-picker {\r
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
`;var $e=vo,yo=!1;function Yo(){if(yo||typeof document>"u")return;yo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=fo,document.head.appendChild(e)}function vo(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,s=o.showModeToggle??!1,l=o.showCorners??!1,a={mode:()=>i,switchMode:u=>oe(u),onHexInput:u=>{let p=ge(u);p?(f=be(D?{r:255-p.r,g:255-p.g,b:255-p.b}:p,i),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)},Q(),X(),B()):X()},onChannelInput:(u,p,g)=>{let L=Math.max(0,Math.min(g,p)),z=["x","y","z"],V=L/g;if(D){let ue={...f,[z[u]]:V},ae=re(ue,i);f=be({r:255-ae.r,g:255-ae.g,b:255-ae.b},i)}else f={...f,[z[u]]:V};V>b[z[u]]&&(b={...b,[z[u]]:V}),Q(),X(),B()},getRgbForCopy:()=>re(f,i),onRandom:u=>de(u),onReset:()=>de({r:0,g:0,b:0})},i=o.mode??"rgb",c=o.initialColor?be(o.initialColor,i):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},f={...c},y=0,A=()=>o.alpha!==void 0,w=Math.max(0,Math.min(1,o.alpha??1));function m(u){let p=Math.max(0,Math.min(1,u));p!==w&&(w=p,Q(),X(),B())}function E(u){let p=j(),g=Y(p);g.s=Math.max(0,Math.min(100,u*100));let L=ie(g);de(D?{r:255-L.r,g:255-L.g,b:255-L.b}:L)}let M=new Set;Yo();let C=document.createElement("div");C.className="box-picker";let I=document.createElement("canvas");I.style.cursor="grab",C.appendChild(I);let x=so(I,n),R=null,$=document.createElement("div");$.className="box-picker-controls",R=document.createElement("div"),R.className="box-picker-swatch",$.appendChild(R),C.appendChild($),(r||s||l)&&Promise.resolve().then(()=>(xo(),po)).then(u=>{u.createControls($,a,{showInputs:r,showModeToggle:s,showCorners:l})}).catch(()=>{}),e.appendChild(C);let F=bo(I,()=>b,u=>{b=u},()=>f,(u,p)=>{f=u,y=p,Q(),X()},()=>y,()=>x.scale,()=>x.center,B,A,m,()=>w,()=>S(f,x.scale,x.center),E,()=>Y(j()).s/100),D=!1,Z=!0;I.addEventListener("mouseenter",()=>{Z=!0,B()}),I.addEventListener("mouseleave",()=>{Z=!1,B()}),I.addEventListener("dblclick",()=>{D=!D,Be(D),Q(),X(),B()});function oe(u){if(u===i)return;let p=re(f,i),g={...f},L={...b};i=u;let z=be(p,i),V={x:1,y:1,z:1};f=z,b=V,xe(g,z,L,V,300),X()}let G=null;function xe(u,p,g,L,z){G!==null&&cancelAnimationFrame(G);let V=performance.now();function ue(ae){let Re=ae-V,he=Math.min(1,Re/z),ne=1-Math.pow(1-he,3);f={x:u.x+(p.x-u.x)*ne,y:u.y+(p.y-u.y)*ne,z:u.z+(p.z-u.z)*ne},b={x:g.x+(L.x-g.x)*ne,y:g.y+(L.y-g.y)*ne,z:g.z+(L.z-g.z)*ne},q(),Q(),he<1?G=requestAnimationFrame(ue):G=null}G=requestAnimationFrame(ue)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,q()}))}function q(){lo(x,b,f,y,i,F.state,Z,{active:F.state.alphaMode,alpha:w,rgb:j()},{active:F.state.viewRotating||F.state.ringAlpha>0,sat:Y(j()).s/100,rgb:ie({h:Y(j()).h,s:100,b:100})})}function ye(u,p,g){return Math.round(u+(p-u)*g)}function te(u,p){let g=p>0?255:0,L=Math.abs(p);return se({r:ye(u.r,g,L),g:ye(u.g,g,L),b:ye(u.b,g,L)})}function Pe(u,p){let g=ge(p)||{r:128,g:128,b:128},L=te(g,.35),z=te(g,0),V=te(g,-.35);u.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${L}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${z}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${V}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,u.style.backgroundColor="transparent"}function ce(u){try{navigator.clipboard.writeText(u).catch(()=>{})}catch{}}function ve(u){u&&(u.style.borderColor="#4ade80",u.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{u.style.borderColor="",u.style.boxShadow=""},500))}function j(){let u=re(f,i);return D?{r:255-u.r,g:255-u.g,b:255-u.b}:u}function X(){if(!t)return;let u=j(),p=se(u);R&&Pe(R,p);let g=C.querySelector(".box-picker-hex");g&&(g.value=p),N(),C._updateModeButtons&&C._updateModeButtons()}function N(){if(!t)return;let u=Le[i],p=D?be(j(),i):f,g=no(p,i),L=C.querySelectorAll(".box-picker-channel input"),z=C.querySelectorAll(".box-picker-channel label");for(let V=0;V<L.length;V++)z[V].textContent=u[V],z[V].style.color="",z[V].style.textShadow="none",L[V].value=String(g[V])}function Q(){let u=j(),p={rgb:u,hsb:Y(u),oklch:me(u),hex:se(u),alpha:w};for(let g of M)g(p)}function Te(){let u=re(f,i);return{rgb:u,hsb:Y(u),oklch:me(u),hex:se(u)}}X(),q();let de=u=>{f=be(u,i),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)};let p=S(f,x.scale,x.center);y=-1;for(let g=J.length-1;g>=0;g--)if(pe(g,p,b,x.scale,x.center)){y=g;break}Q(),X(),B()};return{getColor:Te,getMode:()=>i,setColor:de,setAlpha:m,getAlpha:()=>w,setMode(u){oe(u)},on(u,p){M.add(p)},off(u,p){M.delete(p)},destroy(){F.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(C)}}}function Ue(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:ge(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=ge(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ge(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ie({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Ce({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Ve(e,o,n=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=Y(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=Y(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Ne(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=Y(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=me(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ge(e,o,n){let t=o/100,r=n/100,s=(1-Math.abs(2*r-1))*t,l=s*(1-Math.abs(e/60%2-1)),a=r-s/2,i=0,c=0,b=0;return e<60?(i=s,c=l):e<120?(i=l,c=s):e<180?(c=s,b=l):e<240?(c=l,b=s):e<300?(i=l,b=s):(i=s,b=l),{r:Math.round((i+a)*255),g:Math.round((c+a)*255),b:Math.round((b+a)*255)}}function Ne(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),l=(r+s)/2;if(r===s)return{h:0,s:0,l:l*100};let a=r-s,i=l>.5?a/(2-r-s):a/(r+s),c=0;return r===o?c=((n-t)/a+(n<t?6:0))*60:r===n?c=((t-o)/a+2)*60:c=((o-n)/a+4)*60,{h:c,s:i*100,l:l*100}}var Ee=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?Ue(t,this.model):null;this.alpha=r?.alpha??1;let s=r?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=$e(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",a=>{this.internal||(this.internal=!0,this.alpha=a.alpha,this.setAttribute("value",Ve(a.rgb,this.model,a.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:a})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Ve(a.rgb,this.model,a.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=Ue(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Ve({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ze=class extends Ee{constructor(){super("hex")}},Zo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Zo)customElements.get(e)||customElements.define(e,class extends Ee{constructor(){super(o)}});var Qo=ze;return Ro(Jo);})();
