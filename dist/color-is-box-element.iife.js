var ColorIsBoxElement=(()=>{var He=Object.defineProperty;var Co=Object.getOwnPropertyDescriptor;var ko=Object.getOwnPropertyNames;var Ao=Object.prototype.hasOwnProperty;var wo=(e,o)=>()=>(e&&(o=e(e=0)),o);var qe=(e,o)=>{for(var n in o)He(e,n,{get:o[n],enumerable:!0})},To=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of ko(o))!Ao.call(e,r)&&r!==n&&He(e,r,{get:()=>o[r],enumerable:!(t=Co(o,r))||t.enumerable});return e};var Ro=e=>To(He({},"__esModule",{value:!0}),e);var po={};qe(po,{createControls:()=>Ko});function mo(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function go(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Ko(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=m=>{let f=document.createElement("button");return f.textContent=m.toUpperCase(),f.addEventListener("click",()=>o.switchMode(m)),t.appendChild(f),f},s=r("oklch"),c=r("rgb"),a=r("hsb"),i=()=>{let m=o.mode();c.classList.toggle("active",m==="rgb"),a.classList.toggle("active",m==="hsb"),s.classList.toggle("active",m==="oklch")};i();let l=o.switchMode;o._markActive=i,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let f=t.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),t.addEventListener("click",()=>{mo(o.getRgbForCopy()?"#"+Xo(o.getRgbForCopy()):"#ffffff"),go(t)});let r=document.createElement("div");r.className="box-picker-channels";let s=[],c=[],a=["R","G","B"];for(let f=0;f<3;f++){let y=document.createElement("div");y.className="box-picker-channel";let v=document.createElement("label");v.textContent=a[f];let A=document.createElement("input");A.type="text",A.inputMode="numeric",y.appendChild(v),y.appendChild(A),r.appendChild(y),s.push(A),c.push(v),A.addEventListener("change",()=>{let b=parseFloat(A.value);isNaN(b)||o.onChannelInput(f,b,255)}),A.addEventListener("click",()=>{let b=o.getRgbForCopy();mo(`${b.r}, ${b.g}, ${b.b}`),go(A)})}let i=document.createElement("div");i.className="box-picker-hexrow";let l=document.createElement("div");l.className="box-picker-hexwrap";let m=document.createElement("label");m.textContent="Hex",l.appendChild(m),l.appendChild(t),i.appendChild(r),i.appendChild(l),e.appendChild(i),e._inputs={hexInput:t,inputs:s,labels:c}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:s,g:c,b:a})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function Xo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var xo=wo(()=>{});var Yo={};qe(Yo,{ColorIsBoxElement:()=>ze,createBoxColorPicker:()=>vo,createColorPicker:()=>$e,default:()=>Zo,setBoxInvert:()=>De});var Le={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},eo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Z(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),c=r-s,a=0;c!==0&&(r===o?a=((n-t)/c+6)%6:r===n?a=(t-o)/c+2:a=(o-n)/c+4,a*=60);let i=r===0?0:c/r*100,l=r*100;return{h:a,s:i,b:l}}function ie(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,s=r*(1-Math.abs(o/60%2-1)),c=t-r,a,i,l;return o<60?(a=r,i=s,l=0):o<120?(a=s,i=r,l=0):o<180?(a=0,i=r,l=s):o<240?(a=0,i=s,l=r):o<300?(a=s,i=0,l=r):(a=r,i=0,l=s),{r:Math.round((a+c)*255),g:Math.round((i+c)*255),b:Math.round((l+c)*255)}}function Pe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Fe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Lo(e){let o=Pe(e.r/255),n=Pe(e.g/255),t=Pe(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,c=.0883024619*o+.2817188376*n+.6299787005*t,a=Math.cbrt(r),i=Math.cbrt(s),l=Math.cbrt(c);return{L:.2104542553*a+.793617785*i-.0040720468*l,a:1.9779984951*a-2.428592205*i+.4505937099*l,b:.0259040371*a+.7827717662*i-.808675766*l}}function Vo(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,c=t*t*t,a=r*r*r,i=s*s*s,l=4.0767416621*c-3.3077115913*a+.2309699292*i,m=-1.2684380046*c+2.6097574011*a-.3413193965*i,f=-.0041960863*c-.7034186147*a+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,Fe(l)))*255),g:Math.round(Math.max(0,Math.min(1,Fe(m)))*255),b:Math.round(Math.max(0,Math.min(1,Fe(f)))*255)}}function pe(e){let o=Lo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Ae(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return Vo(e.l,n,t)}function So(e,o,n){let t=Ae({l:e,c:o,h:n});if(oo(t))return{l:e,c:o,h:n};let r=0,s=o;for(let c=0;c<20;c++){let a=(r+s)/2;t=Ae({l:e,c:a,h:n}),oo(t)?r=a:s=a}return{l:e,c:r,h:n}}function oo(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function xe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var to=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ie({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*to,r=e.z*359,s=So(n,t,r);return Ae(s)}}function me(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Z(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=pe(e);return{x:n.l,y:Math.min(n.c/to,1),z:n.h/359}}}function no(e,o){let n=eo[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ro(e,o,n,t,r,s=!1){let c;e===0?c={x:t,y:o,z:n}:e===1?c={x:o,y:t,z:n}:c={x:o,y:n,z:t};let a=re(c,r);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var ao=Math.PI/6,zo=Math.cos(ao),Eo=Math.sin(ao),we=!1;function De(e){we=e}var ce=0,de=0;function Be(e,o){ce=e,de=o}function Oe(){return{yaw:ce,pitch:de}}function Io(e){if(ce===0&&de===0)return e;let o=Math.cos(ce),n=Math.sin(ce),t=Math.cos(de),r=Math.sin(de),s=e.x*o+e.z*n,c=e.y,a=-e.x*n+e.z*o,i=c*t-a*r,l=c*r+a*t;return{x:s,y:i,z:l}}function Ho(e){if(ce===0&&de===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(ce),t=Math.sin(ce),r=Math.cos(de),s=Math.sin(de),c=o.x*n+o.z*t,a=o.y,i=-o.x*t+o.z*n,l=a*r-i*s,m=a*s+i*r;return{x:c+.5,y:l+.5,z:m+.5}}function I(e,o,n){let t=Ho(e);return{x:n.x+(t.y-t.x)*zo*o,y:n.y+t.z*o-(t.x+t.y)*Eo*o}}function Po(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var J=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Fo=64,io={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function so(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function lo(e,o,n,t,r,s,c=!0,a=null,i=null){let{ctx:l,scale:m,center:f,width:y,height:v}=e;l.save(),l.clearRect(0,0,y,v);let A=Po(o),b=A.map(x=>I(x,m,f));if(l.save(),l.globalAlpha=s.viewRotating?.32:1,Bo(l,m,f,r),l.restore(),l.save(),l.shadowColor="rgba(0,0,0,0.35)",l.shadowBlur=8,l.shadowOffsetX=0,l.shadowOffsetY=2,Oo(l,b,A,o,r,s.viewRotating),l.restore(),c&&(l.save(),l.globalAlpha=s.viewRotating?.5:1,$o(l,r,m,f),l.restore()),t>=0){let x=re(n,r),w=we?{r:255-x.r,g:255-x.g,b:255-x.b}:x,T=I(n,m,f);a&&a.active&&Go(l,T,a.rgb,a.alpha),No(l,T,w)}l.restore()}var Do={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Bo(e,o,n,t){let r=I({x:0,y:0,z:0},o,n),s=[I({x:1,y:0,z:0},o,n),I({x:0,y:1,z:0},o,n),I({x:0,y:0,z:1},o,n)],c=Do[t];e.lineWidth=1.5;for(let a=0;a<s.length;a++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(s[a].x,s[a].y),e.strokeStyle=c[a],e.stroke()}function Oo(e,o,n,t,r,s){let c=[t.x,t.y,t.z],a=s?.7:1;for(let i=0;i<J.length;i++){let l=J[i],m=c[l.fixedAxis],f=c[l.uAxis],y=c[l.vAxis];if(f<.002&&y<.002)continue;let v=Io(l.normal),A=v.x+v.y+v.z>0,b=l.quad.map(x=>o[x]);if(A)e.save(),e.globalAlpha=a,_o(e,b,l.fixedAxis,m,f,y,r),e.restore();else{e.save(),e.globalAlpha=s?.14:0,e.beginPath(),e.moveTo(b[0].x,b[0].y);for(let x=1;x<4;x++)e.lineTo(b[x].x,b[x].y);e.closePath(),e.fillStyle="#ffffff",e.fill(),e.restore()}}}function _o(e,o,n,t,r,s,c){let a=Fo,i=document.createElement("canvas");i.width=a,i.height=a;let l=i.getContext("2d"),m=l.createImageData(a,a),f=m.data;for(let Y=0;Y<a;Y++)for(let oe=0;oe<a;oe++){let G=oe/(a-1)*r,ve=Y/(a-1)*s,K=ro(n,G,ve,t,c,we),B=(Y*a+oe)*4;f[B]=K.r,f[B+1]=K.g,f[B+2]=K.b,f[B+3]=255}l.putImageData(m,0,0);let y=o[0],v=o[1],A=o[2],b=o[3],x=v.x-y.x,w=v.y-y.y,T=b.x-y.x,P=b.y-y.y;e.save(),e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(v.x,v.y),e.lineTo(A.x,A.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let M=2/a,L=y.x-x*M-T*M,$=y.y-w*M-P*M,F=1+2*M,D=1+2*M;e.transform(x*F/a,w*F/a,T*D/a,P*D/a,L,$),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function $o(e,o,n,t){let r=Le[o],s=we?[I({x:0,y:1,z:1},n,t),I({x:1,y:0,z:1},n,t),I({x:1,y:1,z:0},n,t)]:[I({x:1,y:0,z:0},n,t),I({x:0,y:1,z:0},n,t),I({x:0,y:0,z:1},n,t)],c=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let i=s[a].x+c[a].x,l=s[a].y+c[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[a],i,l)}e.globalAlpha=1,e.restore()}var ee=30,le=13;function Go(e,o,n,t){let r=(ee+le)/2,s=5,c=Math.floor(o.x/s)*s,a=Math.floor(o.y/s)*s,i=ee*2+s*2,l=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let x=-1;x*s<=i;x++)for(let w=-1;w*s<=i;w++)e.fillStyle=(x+w)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+x*s,a+w*s,s,s);let m="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",y=e;if(typeof y.createConicGradient=="function"){let x=y.createConicGradient(-Math.PI/2,o.x,o.y);x.addColorStop(0,m),x.addColorStop(1,f),e.fillStyle=x,e.fillRect(c-ee,a-ee,i,i)}else for(let w=0;w<36;w++){let T=-Math.PI/2+w/36*Math.PI*2,P=-Math.PI/2+(w+1)/36*Math.PI*2,M=(w+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*le,o.y+Math.sin(T)*le),e.arc(o.x,o.y,ee,T,P),e.arc(o.x,o.y,le,P,T,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+M.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let v=l*Math.PI*2,A=o.x+r*Math.sin(v),b=o.y-r*Math.cos(v);e.beginPath(),e.arc(A,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function No(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function co(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return I(r[e],n,t)}function _e(){let e={x:0,y:0};return[I({x:1,y:0,z:0},1,e),I({x:0,y:1,z:0},1,e),I({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function ye(e,o,n,t,r){let s=J[e],c=[n.x,n.y,n.z],a=c[s.uAxis],i=c[s.vAxis];if(a<.002||i<.002)return null;let l={x:0,y:0,z:0},m=["x","y","z"];l[m[s.fixedAxis]]=c[s.fixedAxis];let f={...l};f[m[s.uAxis]]=a;let y={...l};y[m[s.vAxis]]=i;let v=I(l,t,r),A=I(f,t,r),b=I(y,t,r),x=A.x-v.x,w=A.y-v.y,T=b.x-v.x,P=b.y-v.y,M=x*P-w*T;if(Math.abs(M)<1e-6)return null;let L=o.x-v.x,$=o.y-v.y,F=(L*P-$*T)/M,D=($*x-L*w)/M;return F<-.05||F>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}function uo(e,o,n,t,r){let s=J[e],c=[n.x,n.y,n.z],a=c[s.uAxis],i=c[s.vAxis];if(a<.002||i<.002)return null;let l={x:0,y:0,z:0},m=["x","y","z"];l[m[s.fixedAxis]]=c[s.fixedAxis];let f={...l};f[m[s.uAxis]]=a;let y={...l};y[m[s.vAxis]]=i;let v=I(l,t,r),A=I(f,t,r),b=I(y,t,r),x=A.x-v.x,w=A.y-v.y,T=b.x-v.x,P=b.y-v.y,M=x*P-w*T;if(Math.abs(M)<1e-6)return null;let L=o.x-v.x,$=o.y-v.y,F=(L*P-$*T)/M,D=($*x-L*w)/M;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}var ho=22;function bo(e,o,n,t,r,s,c,a,i,l,m,f,y,v,A){let b={...io};function x(d){let h=e.getBoundingClientRect();return{x:d.clientX-h.left,y:d.clientY-h.top}}let w=!1,T=!1,P=!1,M=!1,L=null,$=600,F=null;function D(){Y(),F=setTimeout(oe,$)}function Y(){F!==null&&(clearTimeout(F),F=null)}function oe(){F=null,b.alphaMode=!1,fe(),p(),M=!0,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.3),L=null,i()}let G=9,ve=1e3,K=null;function B(){q(),K=setTimeout(Me,ve)}function q(){K!==null&&(clearTimeout(K),K=null),Y()}function Me(){K=null,b.alphaMode=!0,p(),fe(),i()}function te(d){let h=y();return Math.hypot(d.x-h.x,d.y-h.y)}function Ee(d){let h=y();return(Math.atan2(d.x-h.x,-(d.y-h.y))+Math.PI*2)%(Math.PI*2)}function ue(d){m(Ee(d)/(Math.PI*2)),i()}function Ce(d){let h=te(d);return h>=le-4&&h<=ee+6}function j(d){let h=o(),R=c(),k=a();for(let C=0;C<3;C++){let E=co(C,h,R,k),H=d.x-E.x,O=d.y-E.y;if(H*H+O*O<=ho*ho)return C}return-1}function X(d){let h=o(),R=c(),k=a();for(let C=J.length-1;C>=0;C--){let E=ye(C,d,h,R,k);if(E)return{faceIndex:C,...E}}return null}let N=-1,Q={x:0,y:0},Te=0;function he(d,h){N=d,Q=h,Te=o()[["x","y","z"][d]],b.draggingAxisHandle=d,e.style.cursor="grabbing",i()}function u(d){if(q(),N<0)return;let h=d.x-Q.x,R=d.y-Q.y,C=_e()[N],E=c(),O=(h*C.x+R*C.y)/E,U=Math.max(0,Math.min(1,Te+O)),W=o(),_=["x","y","z"],ge={...W,[_[N]]:U};n(ge);let ke=t(),Qe=s(),Je=Qe>=0?J[Qe]:null,Ie={...ke};Je&&N===Je.fixedAxis?Ie[_[N]]=U:Ie[_[N]]=Math.min(ke[_[N]],U),r(Ie,s()),i()}function p(){N=-1,b.draggingAxisHandle=-1}let g=-1,V=null,z=null,S=!1;function be(d,h,R,k){g=d,b.draggingFace=d,V=null,z=null,S=!1,k&&(S=!0,z={s:h,t:R}),Re(d,h,R),e.style.cursor="crosshair",i()}function ae(d,h,R){if(q(),g<0)return;let k=o(),C=c(),E=a(),H=ye(g,d,k,C,E),O=g;if(!H&&!R){for(let _=J.length-1;_>=0;_--)if(_!==g&&(H=ye(_,d,k,C,E),H)){O=_;break}}if(!H&&R&&(H=uo(g,d,k,C,E),O=g),!H){i();return}O!==g&&(g=O,b.draggingFace=O,V=null,S=!1,z=null);let{s:U,t:W}=H;if(h&&z){if(S){let _=Math.abs(U-z.s),ge=Math.abs(W-z.t),ke=.02;(_>ke||ge>ke)&&(V=_>=ge?"u":"v",S=!1)}V==="u"?W=z.t:V==="v"&&(U=z.s)}else h||(V=null,S=!1,z=null);Re(O,U,W),i()}function Re(d,h,R){let k=J[d],C=o(),E=["x","y","z"],H={...t()};H[E[k.uAxis]]=h*C[E[k.uAxis]],H[E[k.vAxis]]=R*C[E[k.vAxis]],H[E[k.fixedAxis]]=C[E[k.fixedAxis]],r(H,d)}function fe(){g=-1,b.draggingFace=-1,V=null,S=!1,z=null}function ne(d){T=!0;let h=x(d);if(l()){if(b.alphaMode){if(te(h)<=G){b.alphaMode=!1,i();return}if(Ce(h)){d.preventDefault(),w=!0,ue(h);return}b.alphaMode=!1,i();return}te(h)<=G&&B()}let R=j(h);if(R>=0){d.preventDefault(),he(R,h);return}let k=X(h);if(k){d.preventDefault(),be(k.faceIndex,k.s,k.t,d.shiftKey),D();return}let C=a();Math.hypot(h.x-C.x,h.y-C.y)>c()+20&&(d.preventDefault(),M=!0,L=h,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),i())}function Ke(d){let h=x(d);if(w){d.preventDefault(),ue(h);return}if(M){if(d.preventDefault(),!L){L=h;return}let H=h.x-L.x,O=h.y-L.y,U=Oe();Be(Math.max(-60,Math.min(60,U.yaw+H*.12)),Math.max(-60,Math.min(60,U.pitch+O*.12))),H!==0&&v(Math.max(0,Math.min(1,A()+H*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),L=h,i();return}if(T&&b.alphaMode&&Ce(h)){d.preventDefault(),w=!0,ue(h);return}if(N>=0){d.preventDefault(),u(h);return}if(g>=0){d.preventDefault(),ae(h,d.shiftKey,d.altKey);return}let R=j(h),k=X(h),C=R,E=R>=0?-1:k?k.faceIndex:-1;(C!==b.hoveredAxisHandle||E!==b.hoveredFace)&&(b.hoveredAxisHandle=C,b.hoveredFace=E,e.style.cursor=C>=0?"grab":E>=0?"crosshair":"default",i())}function Xe(d){q(),T=!1,w=!1,M&&(M=!1,b.viewRotating=!1,b.ringAlpha=0,L=null,i());let h=N>=0||g>=0;p(),fe(),h&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",i())}function We(d){if(d.touches.length!==1)return;P=!0;let h=x(d.touches[0]);if(l()){if(b.alphaMode){if(te(h)<=G){b.alphaMode=!1,i();return}if(Ce(h)){d.preventDefault(),w=!0,ue(h);return}b.alphaMode=!1,i();return}te(h)<=G&&B()}let R=j(h);if(R>=0){d.preventDefault(),he(R,h);return}let k=X(h);if(k){d.preventDefault(),be(k.faceIndex,k.s,k.t,!1),D();return}let C=a();Math.hypot(h.x-C.x,h.y-C.y)>c()+20&&(d.preventDefault(),M=!0,L=h,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),i())}function je(d){if(d.touches.length!==1)return;let h=x(d.touches[0]);if(w)d.preventDefault(),ue(h);else if(P&&b.alphaMode&&Ce(h))d.preventDefault(),w=!0,ue(h);else if(N>=0)d.preventDefault(),u(h);else if(M){if(d.preventDefault(),!L){L=h;return}let R=h.x-L.x,k=h.y-L.y,C=Oe();Be(Math.max(-60,Math.min(60,C.yaw+R*.12)),Math.max(-60,Math.min(60,C.pitch+k*.12))),R!==0&&v(Math.max(0,Math.min(1,A()+R*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),L=h,i()}else g>=0&&(d.preventDefault(),ae(h,!1,!1))}function Ze(d){q(),P=!1,w=!1,M&&(M=!1,b.viewRotating=!1,b.ringAlpha=0,L=null,i()),p(),fe(),i()}function Ye(d){if(b.alphaMode){if(d.key==="Escape"){b.alphaMode=!1,i();return}if(d.key==="ArrowUp"||d.key==="ArrowRight"){d.preventDefault(),m(Math.min(1,f()+(d.shiftKey?.08:.02))),i();return}if(d.key==="ArrowDown"||d.key==="ArrowLeft"){d.preventDefault(),m(Math.max(0,f()-(d.shiftKey?.08:.02))),i();return}}let h=d.shiftKey?.04:.004,R=t(),k=o(),C=_e(),E=0,H=0;switch(d.key){case"ArrowRight":E=1;break;case"ArrowLeft":E=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}d.preventDefault();let O={...R},U=["x","y","z"];for(let W=0;W<3;W++){let _=E*C[W].x+H*C[W].y;if(Math.abs(_)>.3){let ge=R[U[W]]+h*Math.sign(_);O[U[W]]=Math.max(0,Math.min(k[U[W]],ge))}}r(O,s()),i()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",Xe),e.addEventListener("touchstart",We,{passive:!1}),e.addEventListener("touchmove",je,{passive:!1}),e.addEventListener("touchend",Ze),e.addEventListener("keydown",Ye),e.setAttribute("tabindex","0");function Mo(){q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",Xe),e.removeEventListener("touchstart",We),e.removeEventListener("touchmove",je),e.removeEventListener("touchend",Ze),e.removeEventListener("keydown",Ye)}return{state:b,destroy:Mo}}var fo=`.box-picker {\r
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
`;var $e=vo,yo=!1;function Wo(){if(yo||typeof document>"u")return;yo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=fo,document.head.appendChild(e)}function vo(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,s=o.showModeToggle??!1,c=o.showCorners??!1,a={mode:()=>i,switchMode:u=>oe(u),onHexInput:u=>{let p=xe(u);p?(f=me(D?{r:255-p.r,g:255-p.g,b:255-p.b}:p,i),m={x:Math.max(m.x,f.x),y:Math.max(m.y,f.y),z:Math.max(m.z,f.z)},Q(),X(),B()):X()},onChannelInput:(u,p,g)=>{let V=Math.max(0,Math.min(g,p)),z=["x","y","z"],S=V/g;if(D){let be={...f,[z[u]]:S},ae=re(be,i);f=me({r:255-ae.r,g:255-ae.g,b:255-ae.b},i)}else f={...f,[z[u]]:S};S>m[z[u]]&&(m={...m,[z[u]]:S}),Q(),X(),B()},getRgbForCopy:()=>re(f,i),onRandom:u=>he(u),onReset:()=>he({r:0,g:0,b:0})},i=o.mode??"rgb",l=o.initialColor?me(o.initialColor,i):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},f={...l},y=0,v=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function b(u){let p=Math.max(0,Math.min(1,u));p!==A&&(A=p,Q(),X(),B())}function x(u){let p=j(),g=Z(p);g.s=Math.max(0,Math.min(100,u*100));let V=ie(g);he(D?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let w=new Set;Wo();let T=document.createElement("div");T.className="box-picker";let P=document.createElement("canvas");P.style.cursor="grab",T.appendChild(P);let M=so(P,n),L=null,$=document.createElement("div");$.className="box-picker-controls",L=document.createElement("div"),L.className="box-picker-swatch",$.appendChild(L),T.appendChild($),(r||s||c)&&Promise.resolve().then(()=>(xo(),po)).then(u=>{u.createControls($,a,{showInputs:r,showModeToggle:s,showCorners:c})}).catch(()=>{}),e.appendChild(T);let F=bo(P,()=>m,u=>{m=u},()=>f,(u,p)=>{f=u,y=p,Q(),X()},()=>y,()=>M.scale,()=>M.center,B,v,b,()=>A,()=>I(f,M.scale,M.center),x,()=>Z(j()).s/100),D=!1,Y=!0;P.addEventListener("mouseenter",()=>{Y=!0,B()}),P.addEventListener("mouseleave",()=>{Y=!1,B()}),P.addEventListener("dblclick",()=>{D=!D,De(D),Q(),X(),B()});function oe(u){if(u===i)return;let p=re(f,i),g={...f},V={...m};i=u;let z=me(p,i),S={x:1,y:1,z:1};f=z,m=S,ve(g,z,V,S,300),X()}let G=null;function ve(u,p,g,V,z){G!==null&&cancelAnimationFrame(G);let S=performance.now();function be(ae){let Re=ae-S,fe=Math.min(1,Re/z),ne=1-Math.pow(1-fe,3);f={x:u.x+(p.x-u.x)*ne,y:u.y+(p.y-u.y)*ne,z:u.z+(p.z-u.z)*ne},m={x:g.x+(V.x-g.x)*ne,y:g.y+(V.y-g.y)*ne,z:g.z+(V.z-g.z)*ne},q(),Q(),fe<1?G=requestAnimationFrame(be):G=null}G=requestAnimationFrame(be)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,q()}))}function q(){lo(M,m,f,y,i,F.state,Y,{active:F.state.alphaMode,alpha:A,rgb:j()},{active:F.state.viewRotating||F.state.ringAlpha>0,sat:Z(j()).s/100,rgb:ie({h:Z(j()).h,s:100,b:100})})}function Me(u,p,g){return Math.round(u+(p-u)*g)}function te(u,p){let g=p>0?255:0,V=Math.abs(p);return se({r:Me(u.r,g,V),g:Me(u.g,g,V),b:Me(u.b,g,V)})}function Ee(u,p){let g=xe(p)||{r:128,g:128,b:128},V=te(g,.35),z=te(g,0),S=te(g,-.35);u.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${z}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,u.style.backgroundColor="transparent"}function ue(u){try{navigator.clipboard.writeText(u).catch(()=>{})}catch{}}function Ce(u){u&&(u.style.borderColor="#4ade80",u.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{u.style.borderColor="",u.style.boxShadow=""},500))}function j(){let u=re(f,i);return D?{r:255-u.r,g:255-u.g,b:255-u.b}:u}function X(){if(!t)return;let u=j(),p=se(u);L&&Ee(L,p);let g=T.querySelector(".box-picker-hex");g&&(g.value=p),N(),T._updateModeButtons&&T._updateModeButtons()}function N(){if(!t)return;let u=Le[i],p=D?me(j(),i):f,g=no(p,i),V=T.querySelectorAll(".box-picker-channel input"),z=T.querySelectorAll(".box-picker-channel label");for(let S=0;S<V.length;S++)z[S].textContent=u[S],z[S].style.color="",z[S].style.textShadow="none",V[S].value=String(g[S])}function Q(){let u=j(),p={rgb:u,hsb:Z(u),oklch:pe(u),hex:se(u),alpha:A};for(let g of w)g(p)}function Te(){let u=re(f,i);return{rgb:u,hsb:Z(u),oklch:pe(u),hex:se(u)}}X(),q();let he=u=>{f=me(u,i),m={x:Math.max(m.x,f.x),y:Math.max(m.y,f.y),z:Math.max(m.z,f.z)};let p=I(f,M.scale,M.center);y=-1;for(let g=J.length-1;g>=0;g--)if(ye(g,p,m,M.scale,M.center)){y=g;break}Q(),X(),B()};return{getColor:Te,getMode:()=>i,setColor:he,setAlpha:b,getAlpha:()=>A,setMode(u){oe(u)},on(u,p){w.add(p)},off(u,p){w.delete(p)},destroy(){F.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(T)}}}function Ue(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:xe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=xe(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ge(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ie({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Ae({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Ve(e,o,n=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=Z(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=Z(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Ne(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=Z(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=pe(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ge(e,o,n){let t=o/100,r=n/100,s=(1-Math.abs(2*r-1))*t,c=s*(1-Math.abs(e/60%2-1)),a=r-s/2,i=0,l=0,m=0;return e<60?(i=s,l=c):e<120?(i=c,l=s):e<180?(l=s,m=c):e<240?(l=c,m=s):e<300?(i=c,m=s):(i=s,m=c),{r:Math.round((i+a)*255),g:Math.round((l+a)*255),b:Math.round((m+a)*255)}}function Ne(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),c=(r+s)/2;if(r===s)return{h:0,s:0,l:c*100};let a=r-s,i=c>.5?a/(2-r-s):a/(r+s),l=0;return r===o?l=((n-t)/a+(n<t?6:0))*60:r===n?l=((t-o)/a+2)*60:l=((o-n)/a+4)*60,{h:l,s:i*100,l:c*100}}var Se=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?Ue(t,this.model):null;this.alpha=r?.alpha??1;let s=r?.rgb??{r:255,g:255,b:255},c=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=$e(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...c.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",a=>{this.internal||(this.internal=!0,this.alpha=a.alpha,this.setAttribute("value",Ve(a.rgb,this.model,a.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:a})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Ve(a.rgb,this.model,a.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=Ue(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Ve({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ze=class extends Se{constructor(){super("hex")}},jo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of jo)customElements.get(e)||customElements.define(e,class extends Se{constructor(){super(o)}});var Zo=ze;return Ro(Yo);})();
