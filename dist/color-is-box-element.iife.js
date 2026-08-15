var ColorIsBoxElement=(()=>{var He=Object.defineProperty;var Co=Object.getOwnPropertyDescriptor;var ko=Object.getOwnPropertyNames;var Ao=Object.prototype.hasOwnProperty;var wo=(e,o)=>()=>(e&&(o=e(e=0)),o);var qe=(e,o)=>{for(var n in o)He(e,n,{get:o[n],enumerable:!0})},To=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of ko(o))!Ao.call(e,r)&&r!==n&&He(e,r,{get:()=>o[r],enumerable:!(t=Co(o,r))||t.enumerable});return e};var Ro=e=>To(He({},"__esModule",{value:!0}),e);var po={};qe(po,{createControls:()=>No});function mo(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function go(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function No(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=m=>{let b=document.createElement("button");return b.textContent=m.toUpperCase(),b.addEventListener("click",()=>o.switchMode(m)),t.appendChild(b),b},s=r("oklch"),l=r("rgb"),a=r("hsb"),i=()=>{let m=o.mode();l.classList.toggle("active",m==="rgb"),a.classList.toggle("active",m==="hsb"),s.classList.toggle("active",m==="oklch")};i();let c=o.switchMode;o._markActive=i,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let b=t.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),t.addEventListener("click",()=>{mo(o.getRgbForCopy()?"#"+Uo(o.getRgbForCopy()):"#ffffff"),go(t)});let r=document.createElement("div");r.className="box-picker-channels";let s=[],l=[],a=["R","G","B"];for(let b=0;b<3;b++){let v=document.createElement("div");v.className="box-picker-channel";let C=document.createElement("label");C.textContent=a[b];let w=document.createElement("input");w.type="text",w.inputMode="numeric",v.appendChild(C),v.appendChild(w),r.appendChild(v),s.push(w),l.push(C),w.addEventListener("change",()=>{let f=parseFloat(w.value);isNaN(f)||o.onChannelInput(b,f,255)}),w.addEventListener("click",()=>{let f=o.getRgbForCopy();mo(`${f.r}, ${f.g}, ${f.b}`),go(w)})}let i=document.createElement("div");i.className="box-picker-hexrow";let c=document.createElement("div");c.className="box-picker-hexwrap";let m=document.createElement("label");m.textContent="Hex",c.appendChild(m),c.appendChild(t),i.appendChild(r),i.appendChild(c),e.appendChild(i),e._inputs={hexInput:t,inputs:s,labels:l}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:s,g:l,b:a})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function Uo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var xo=wo(()=>{});var jo={};qe(jo,{ColorIsBoxElement:()=>Ee,createBoxColorPicker:()=>vo,createColorPicker:()=>$e,default:()=>Wo,setBoxInvert:()=>De});var Le={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},eo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Z(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),l=r-s,a=0;l!==0&&(r===o?a=((n-t)/l+6)%6:r===n?a=(t-o)/l+2:a=(o-n)/l+4,a*=60);let i=r===0?0:l/r*100,c=r*100;return{h:a,s:i,b:c}}function ie(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,s=r*(1-Math.abs(o/60%2-1)),l=t-r,a,i,c;return o<60?(a=r,i=s,c=0):o<120?(a=s,i=r,c=0):o<180?(a=0,i=r,c=s):o<240?(a=0,i=s,c=r):o<300?(a=s,i=0,c=r):(a=r,i=0,c=s),{r:Math.round((a+l)*255),g:Math.round((i+l)*255),b:Math.round((c+l)*255)}}function Pe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Fe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Lo(e){let o=Pe(e.r/255),n=Pe(e.g/255),t=Pe(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,l=.0883024619*o+.2817188376*n+.6299787005*t,a=Math.cbrt(r),i=Math.cbrt(s),c=Math.cbrt(l);return{L:.2104542553*a+.793617785*i-.0040720468*c,a:1.9779984951*a-2.428592205*i+.4505937099*c,b:.0259040371*a+.7827717662*i-.808675766*c}}function Vo(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,l=t*t*t,a=r*r*r,i=s*s*s,c=4.0767416621*l-3.3077115913*a+.2309699292*i,m=-1.2684380046*l+2.6097574011*a-.3413193965*i,b=-.0041960863*l-.7034186147*a+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,Fe(c)))*255),g:Math.round(Math.max(0,Math.min(1,Fe(m)))*255),b:Math.round(Math.max(0,Math.min(1,Fe(b)))*255)}}function me(e){let o=Lo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Ce(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return Vo(e.l,n,t)}function So(e,o,n){let t=Ce({l:e,c:o,h:n});if(oo(t))return{l:e,c:o,h:n};let r=0,s=o;for(let l=0;l<20;l++){let a=(r+s)/2;t=Ce({l:e,c:a,h:n}),oo(t)?r=a:s=a}return{l:e,c:r,h:n}}function oo(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ge(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var to=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ie({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*to,r=e.z*359,s=So(n,t,r);return Ce(s)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Z(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=me(e);return{x:n.l,y:Math.min(n.c/to,1),z:n.h/359}}}function no(e,o){let n=eo[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ro(e,o,n,t,r,s=!1){let l;e===0?l={x:t,y:o,z:n}:e===1?l={x:o,y:t,z:n}:l={x:o,y:n,z:t};let a=re(l,r);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var ao=Math.PI/6,Eo=Math.cos(ao),zo=Math.sin(ao),we=!1;function De(e){we=e}var ke=0,Ae=0;function Be(e,o){ke=e,Ae=o}function Oe(){return{yaw:ke,pitch:Ae}}function I(e,o,n){let t=e;if(ke!==0||Ae!==0){let r={x:e.x-.5,y:e.y-.5,z:e.z-.5},s=Math.cos(ke),l=Math.sin(ke),a=Math.cos(Ae),i=Math.sin(Ae),c=r.x*s+r.z*l,m=r.y,b=-r.x*l+r.z*s,v=m*a-b*i,C=m*i+b*a;t={x:c+.5,y:v+.5,z:C+.5}}return{x:n.x+(t.y-t.x)*Eo*o,y:n.y+t.z*o-(t.x+t.y)*zo*o}}function Io(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var J=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Ho=64,io={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function so(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function lo(e,o,n,t,r,s,l=!0,a=null,i=null){let{ctx:c,scale:m,center:b,width:v,height:C}=e;c.save(),c.clearRect(0,0,v,C);let w=Io(o).map(A=>I(A,m,b)),f=s.viewRotating?.32:1;if(c.save(),c.globalAlpha=f,Fo(c,m,b,r),c.restore(),c.save(),c.shadowColor="rgba(0,0,0,0.35)",c.shadowBlur=8,c.shadowOffsetX=0,c.shadowOffsetY=2,c.globalAlpha=s.viewRotating?.22:1,Do(c,w,o,r),c.restore(),l&&(c.save(),c.globalAlpha=s.viewRotating?.5:1,Oo(c,r,m,b),c.restore()),t>=0){let A=re(n,r),k=we?{r:255-A.r,g:255-A.g,b:255-A.b}:A,T=I(n,m,b);a&&a.active&&_o(c,T,a.rgb,a.alpha),$o(c,T,k)}c.restore()}var Po={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Fo(e,o,n,t){let r=I({x:0,y:0,z:0},o,n),s=[I({x:1,y:0,z:0},o,n),I({x:0,y:1,z:0},o,n),I({x:0,y:0,z:1},o,n)],l=Po[t];e.lineWidth=1.5;for(let a=0;a<s.length;a++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(s[a].x,s[a].y),e.strokeStyle=l[a],e.stroke()}function Do(e,o,n,t){let r=[n.x,n.y,n.z];for(let s=0;s<J.length;s++){let l=J[s],a=r[l.fixedAxis],i=r[l.uAxis],c=r[l.vAxis];if(i<.002&&c<.002)continue;let m=l.quad.map(b=>o[b]);Bo(e,m,l.fixedAxis,a,i,c,t)}}function Bo(e,o,n,t,r,s,l){let a=Ho,i=document.createElement("canvas");i.width=a,i.height=a;let c=i.getContext("2d"),m=c.createImageData(a,a),b=m.data;for(let Y=0;Y<a;Y++)for(let oe=0;oe<a;oe++){let G=oe/(a-1)*r,xe=Y/(a-1)*s,K=ro(n,G,xe,t,l,we),B=(Y*a+oe)*4;b[B]=K.r,b[B+1]=K.g,b[B+2]=K.b,b[B+3]=255}c.putImageData(m,0,0);let v=o[0],C=o[1],w=o[2],f=o[3],A=C.x-v.x,k=C.y-v.y,T=f.x-v.x,P=f.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(C.x,C.y),e.lineTo(w.x,w.y),e.lineTo(f.x,f.y),e.closePath(),e.clip();let x=2/a,L=v.x-A*x-T*x,$=v.y-k*x-P*x,F=1+2*x,D=1+2*x;e.transform(A*F/a,k*F/a,T*D/a,P*D/a,L,$),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function Oo(e,o,n,t){let r=Le[o],s=we?[I({x:0,y:1,z:1},n,t),I({x:1,y:0,z:1},n,t),I({x:1,y:1,z:0},n,t)]:[I({x:1,y:0,z:0},n,t),I({x:0,y:1,z:0},n,t),I({x:0,y:0,z:1},n,t)],l=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let i=s[a].x+l[a].x,c=s[a].y+l[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[a],i,c)}e.globalAlpha=1,e.restore()}var ee=30,le=13;function _o(e,o,n,t){let r=(ee+le)/2,s=5,l=Math.floor(o.x/s)*s,a=Math.floor(o.y/s)*s,i=ee*2+s*2,c=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let A=-1;A*s<=i;A++)for(let k=-1;k*s<=i;k++)e.fillStyle=(A+k)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+A*s,a+k*s,s,s);let m="rgba("+n.r+","+n.g+","+n.b+",0)",b="rgba("+n.r+","+n.g+","+n.b+",1)",v=e;if(typeof v.createConicGradient=="function"){let A=v.createConicGradient(-Math.PI/2,o.x,o.y);A.addColorStop(0,m),A.addColorStop(1,b),e.fillStyle=A,e.fillRect(l-ee,a-ee,i,i)}else for(let k=0;k<36;k++){let T=-Math.PI/2+k/36*Math.PI*2,P=-Math.PI/2+(k+1)/36*Math.PI*2,x=(k+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*le,o.y+Math.sin(T)*le),e.arc(o.x,o.y,ee,T,P),e.arc(o.x,o.y,le,P,T,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+x.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let C=c*Math.PI*2,w=o.x+r*Math.sin(C),f=o.y-r*Math.cos(C);e.beginPath(),e.arc(w,f,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function $o(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function co(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return I(r[e],n,t)}function _e(){let e={x:0,y:0};return[I({x:1,y:0,z:0},1,e),I({x:0,y:1,z:0},1,e),I({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function pe(e,o,n,t,r){let s=J[e],l=[n.x,n.y,n.z],a=l[s.uAxis],i=l[s.vAxis];if(a<.002||i<.002)return null;let c={x:0,y:0,z:0},m=["x","y","z"];c[m[s.fixedAxis]]=l[s.fixedAxis];let b={...c};b[m[s.uAxis]]=a;let v={...c};v[m[s.vAxis]]=i;let C=I(c,t,r),w=I(b,t,r),f=I(v,t,r),A=w.x-C.x,k=w.y-C.y,T=f.x-C.x,P=f.y-C.y,x=A*P-k*T;if(Math.abs(x)<1e-6)return null;let L=o.x-C.x,$=o.y-C.y,F=(L*P-$*T)/x,D=($*A-L*k)/x;return F<-.05||F>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}function uo(e,o,n,t,r){let s=J[e],l=[n.x,n.y,n.z],a=l[s.uAxis],i=l[s.vAxis];if(a<.002||i<.002)return null;let c={x:0,y:0,z:0},m=["x","y","z"];c[m[s.fixedAxis]]=l[s.fixedAxis];let b={...c};b[m[s.uAxis]]=a;let v={...c};v[m[s.vAxis]]=i;let C=I(c,t,r),w=I(b,t,r),f=I(v,t,r),A=w.x-C.x,k=w.y-C.y,T=f.x-C.x,P=f.y-C.y,x=A*P-k*T;if(Math.abs(x)<1e-6)return null;let L=o.x-C.x,$=o.y-C.y,F=(L*P-$*T)/x,D=($*A-L*k)/x;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}var ho=22;function bo(e,o,n,t,r,s,l,a,i,c,m,b,v,C,w){let f={...io};function A(d){let h=e.getBoundingClientRect();return{x:d.clientX-h.left,y:d.clientY-h.top}}let k=!1,T=!1,P=!1,x=!1,L=null,$=600,F=null;function D(){Y(),F=setTimeout(oe,$)}function Y(){F!==null&&(clearTimeout(F),F=null)}function oe(){F=null,f.alphaMode=!1,he(),p(),x=!0,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.3),L=null,i()}let G=9,xe=1e3,K=null;function B(){q(),K=setTimeout(ye,xe)}function q(){K!==null&&(clearTimeout(K),K=null),Y()}function ye(){K=null,f.alphaMode=!0,p(),he(),i()}function te(d){let h=v();return Math.hypot(d.x-h.x,d.y-h.y)}function ze(d){let h=v();return(Math.atan2(d.x-h.x,-(d.y-h.y))+Math.PI*2)%(Math.PI*2)}function ce(d){m(ze(d)/(Math.PI*2)),i()}function ve(d){let h=te(d);return h>=le-4&&h<=ee+6}function j(d){let h=o(),R=l(),M=a();for(let y=0;y<3;y++){let z=co(y,h,R,M),H=d.x-z.x,O=d.y-z.y;if(H*H+O*O<=ho*ho)return y}return-1}function X(d){let h=o(),R=l(),M=a();for(let y=J.length-1;y>=0;y--){let z=pe(y,d,h,R,M);if(z)return{faceIndex:y,...z}}return null}let N=-1,Q={x:0,y:0},Te=0;function de(d,h){N=d,Q=h,Te=o()[["x","y","z"][d]],f.draggingAxisHandle=d,e.style.cursor="grabbing",i()}function u(d){if(q(),N<0)return;let h=d.x-Q.x,R=d.y-Q.y,y=_e()[N],z=l(),O=(h*y.x+R*y.y)/z,U=Math.max(0,Math.min(1,Te+O)),W=o(),_=["x","y","z"],fe={...W,[_[N]]:U};n(fe);let Me=t(),Qe=s(),Je=Qe>=0?J[Qe]:null,Ie={...Me};Je&&N===Je.fixedAxis?Ie[_[N]]=U:Ie[_[N]]=Math.min(Me[_[N]],U),r(Ie,s()),i()}function p(){N=-1,f.draggingAxisHandle=-1}let g=-1,V=null,E=null,S=!1;function ue(d,h,R,M){g=d,f.draggingFace=d,V=null,E=null,S=!1,M&&(S=!0,E={s:h,t:R}),Re(d,h,R),e.style.cursor="crosshair",i()}function ae(d,h,R){if(q(),g<0)return;let M=o(),y=l(),z=a(),H=pe(g,d,M,y,z),O=g;if(!H&&!R){for(let _=J.length-1;_>=0;_--)if(_!==g&&(H=pe(_,d,M,y,z),H)){O=_;break}}if(!H&&R&&(H=uo(g,d,M,y,z),O=g),!H){i();return}O!==g&&(g=O,f.draggingFace=O,V=null,S=!1,E=null);let{s:U,t:W}=H;if(h&&E){if(S){let _=Math.abs(U-E.s),fe=Math.abs(W-E.t),Me=.02;(_>Me||fe>Me)&&(V=_>=fe?"u":"v",S=!1)}V==="u"?W=E.t:V==="v"&&(U=E.s)}else h||(V=null,S=!1,E=null);Re(O,U,W),i()}function Re(d,h,R){let M=J[d],y=o(),z=["x","y","z"],H={...t()};H[z[M.uAxis]]=h*y[z[M.uAxis]],H[z[M.vAxis]]=R*y[z[M.vAxis]],H[z[M.fixedAxis]]=y[z[M.fixedAxis]],r(H,d)}function he(){g=-1,f.draggingFace=-1,V=null,S=!1,E=null}function ne(d){T=!0;let h=A(d);if(c()){if(f.alphaMode){if(te(h)<=G){f.alphaMode=!1,i();return}if(ve(h)){d.preventDefault(),k=!0,ce(h);return}f.alphaMode=!1,i();return}te(h)<=G&&B()}let R=j(h);if(R>=0){d.preventDefault(),de(R,h);return}let M=X(h);if(M){d.preventDefault(),ue(M.faceIndex,M.s,M.t,d.shiftKey),D();return}let y=a();Math.hypot(h.x-y.x,h.y-y.y)>l()+20&&(d.preventDefault(),x=!0,L=h,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.25),i())}function Ke(d){let h=A(d);if(k){d.preventDefault(),ce(h);return}if(x){if(d.preventDefault(),!L){L=h;return}let H=h.x-L.x,O=h.y-L.y,U=Oe();Be(Math.max(-60,Math.min(60,U.yaw+H*.12)),Math.max(-60,Math.min(60,U.pitch+O*.12))),H!==0&&C(Math.max(0,Math.min(1,w()+H*.002))),f.ringAlpha=Math.min(1,f.ringAlpha+.12),L=h,i();return}if(T&&f.alphaMode&&ve(h)){d.preventDefault(),k=!0,ce(h);return}if(N>=0){d.preventDefault(),u(h);return}if(g>=0){d.preventDefault(),ae(h,d.shiftKey,d.altKey);return}let R=j(h),M=X(h),y=R,z=R>=0?-1:M?M.faceIndex:-1;(y!==f.hoveredAxisHandle||z!==f.hoveredFace)&&(f.hoveredAxisHandle=y,f.hoveredFace=z,e.style.cursor=y>=0?"grab":z>=0?"crosshair":"default",i())}function Xe(d){q(),T=!1,k=!1,x&&(x=!1,f.viewRotating=!1,f.ringAlpha=0,L=null,i());let h=N>=0||g>=0;p(),he(),h&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",i())}function We(d){if(d.touches.length!==1)return;P=!0;let h=A(d.touches[0]);if(c()){if(f.alphaMode){if(te(h)<=G){f.alphaMode=!1,i();return}if(ve(h)){d.preventDefault(),k=!0,ce(h);return}f.alphaMode=!1,i();return}te(h)<=G&&B()}let R=j(h);if(R>=0){d.preventDefault(),de(R,h);return}let M=X(h);if(M){d.preventDefault(),ue(M.faceIndex,M.s,M.t,!1),D();return}let y=a();Math.hypot(h.x-y.x,h.y-y.y)>l()+20&&(d.preventDefault(),x=!0,L=h,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.25),i())}function je(d){if(d.touches.length!==1)return;let h=A(d.touches[0]);if(k)d.preventDefault(),ce(h);else if(P&&f.alphaMode&&ve(h))d.preventDefault(),k=!0,ce(h);else if(N>=0)d.preventDefault(),u(h);else if(x){if(d.preventDefault(),!L){L=h;return}let R=h.x-L.x,M=h.y-L.y,y=Oe();Be(Math.max(-60,Math.min(60,y.yaw+R*.12)),Math.max(-60,Math.min(60,y.pitch+M*.12))),R!==0&&C(Math.max(0,Math.min(1,w()+R*.002))),f.ringAlpha=Math.min(1,f.ringAlpha+.12),L=h,i()}else g>=0&&(d.preventDefault(),ae(h,!1,!1))}function Ze(d){q(),P=!1,k=!1,x&&(x=!1,f.viewRotating=!1,f.ringAlpha=0,L=null,i()),p(),he(),i()}function Ye(d){if(f.alphaMode){if(d.key==="Escape"){f.alphaMode=!1,i();return}if(d.key==="ArrowUp"||d.key==="ArrowRight"){d.preventDefault(),m(Math.min(1,b()+(d.shiftKey?.08:.02))),i();return}if(d.key==="ArrowDown"||d.key==="ArrowLeft"){d.preventDefault(),m(Math.max(0,b()-(d.shiftKey?.08:.02))),i();return}}let h=d.shiftKey?.04:.004,R=t(),M=o(),y=_e(),z=0,H=0;switch(d.key){case"ArrowRight":z=1;break;case"ArrowLeft":z=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}d.preventDefault();let O={...R},U=["x","y","z"];for(let W=0;W<3;W++){let _=z*y[W].x+H*y[W].y;if(Math.abs(_)>.3){let fe=R[U[W]]+h*Math.sign(_);O[U[W]]=Math.max(0,Math.min(M[U[W]],fe))}}r(O,s()),i()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",Xe),e.addEventListener("touchstart",We,{passive:!1}),e.addEventListener("touchmove",je,{passive:!1}),e.addEventListener("touchend",Ze),e.addEventListener("keydown",Ye),e.setAttribute("tabindex","0");function Mo(){q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",Xe),e.removeEventListener("touchstart",We),e.removeEventListener("touchmove",je),e.removeEventListener("touchend",Ze),e.removeEventListener("keydown",Ye)}return{state:f,destroy:Mo}}var fo=`.box-picker {\r
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
`;var $e=vo,yo=!1;function Ko(){if(yo||typeof document>"u")return;yo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=fo,document.head.appendChild(e)}function vo(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,s=o.showModeToggle??!1,l=o.showCorners??!1,a={mode:()=>i,switchMode:u=>oe(u),onHexInput:u=>{let p=ge(u);p?(b=be(D?{r:255-p.r,g:255-p.g,b:255-p.b}:p,i),m={x:Math.max(m.x,b.x),y:Math.max(m.y,b.y),z:Math.max(m.z,b.z)},Q(),X(),B()):X()},onChannelInput:(u,p,g)=>{let V=Math.max(0,Math.min(g,p)),E=["x","y","z"],S=V/g;if(D){let ue={...b,[E[u]]:S},ae=re(ue,i);b=be({r:255-ae.r,g:255-ae.g,b:255-ae.b},i)}else b={...b,[E[u]]:S};S>m[E[u]]&&(m={...m,[E[u]]:S}),Q(),X(),B()},getRgbForCopy:()=>re(b,i),onRandom:u=>de(u),onReset:()=>de({r:0,g:0,b:0})},i=o.mode??"rgb",c=o.initialColor?be(o.initialColor,i):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},b={...c},v=0,C=()=>o.alpha!==void 0,w=Math.max(0,Math.min(1,o.alpha??1));function f(u){let p=Math.max(0,Math.min(1,u));p!==w&&(w=p,Q(),X(),B())}function A(u){let p=j(),g=Z(p);g.s=Math.max(0,Math.min(100,u*100));let V=ie(g);de(D?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let k=new Set;Ko();let T=document.createElement("div");T.className="box-picker";let P=document.createElement("canvas");P.style.cursor="grab",T.appendChild(P);let x=so(P,n),L=null,$=document.createElement("div");$.className="box-picker-controls",L=document.createElement("div"),L.className="box-picker-swatch",$.appendChild(L),T.appendChild($),(r||s||l)&&Promise.resolve().then(()=>(xo(),po)).then(u=>{u.createControls($,a,{showInputs:r,showModeToggle:s,showCorners:l})}).catch(()=>{}),e.appendChild(T);let F=bo(P,()=>m,u=>{m=u},()=>b,(u,p)=>{b=u,v=p,Q(),X()},()=>v,()=>x.scale,()=>x.center,B,C,f,()=>w,()=>I(b,x.scale,x.center),A,()=>Z(j()).s/100),D=!1,Y=!0;P.addEventListener("mouseenter",()=>{Y=!0,B()}),P.addEventListener("mouseleave",()=>{Y=!1,B()}),P.addEventListener("dblclick",()=>{D=!D,De(D),Q(),X(),B()});function oe(u){if(u===i)return;let p=re(b,i),g={...b},V={...m};i=u;let E=be(p,i),S={x:1,y:1,z:1};b=E,m=S,xe(g,E,V,S,300),X()}let G=null;function xe(u,p,g,V,E){G!==null&&cancelAnimationFrame(G);let S=performance.now();function ue(ae){let Re=ae-S,he=Math.min(1,Re/E),ne=1-Math.pow(1-he,3);b={x:u.x+(p.x-u.x)*ne,y:u.y+(p.y-u.y)*ne,z:u.z+(p.z-u.z)*ne},m={x:g.x+(V.x-g.x)*ne,y:g.y+(V.y-g.y)*ne,z:g.z+(V.z-g.z)*ne},q(),Q(),he<1?G=requestAnimationFrame(ue):G=null}G=requestAnimationFrame(ue)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,q()}))}function q(){lo(x,m,b,v,i,F.state,Y,{active:F.state.alphaMode,alpha:w,rgb:j()},{active:F.state.viewRotating||F.state.ringAlpha>0,sat:Z(j()).s/100,rgb:ie({h:Z(j()).h,s:100,b:100})})}function ye(u,p,g){return Math.round(u+(p-u)*g)}function te(u,p){let g=p>0?255:0,V=Math.abs(p);return se({r:ye(u.r,g,V),g:ye(u.g,g,V),b:ye(u.b,g,V)})}function ze(u,p){let g=ge(p)||{r:128,g:128,b:128},V=te(g,.35),E=te(g,0),S=te(g,-.35);u.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${E}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,u.style.backgroundColor="transparent"}function ce(u){try{navigator.clipboard.writeText(u).catch(()=>{})}catch{}}function ve(u){u&&(u.style.borderColor="#4ade80",u.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{u.style.borderColor="",u.style.boxShadow=""},500))}function j(){let u=re(b,i);return D?{r:255-u.r,g:255-u.g,b:255-u.b}:u}function X(){if(!t)return;let u=j(),p=se(u);L&&ze(L,p);let g=T.querySelector(".box-picker-hex");g&&(g.value=p),N(),T._updateModeButtons&&T._updateModeButtons()}function N(){if(!t)return;let u=Le[i],p=D?be(j(),i):b,g=no(p,i),V=T.querySelectorAll(".box-picker-channel input"),E=T.querySelectorAll(".box-picker-channel label");for(let S=0;S<V.length;S++)E[S].textContent=u[S],E[S].style.color="",E[S].style.textShadow="none",V[S].value=String(g[S])}function Q(){let u=j(),p={rgb:u,hsb:Z(u),oklch:me(u),hex:se(u),alpha:w};for(let g of k)g(p)}function Te(){let u=re(b,i);return{rgb:u,hsb:Z(u),oklch:me(u),hex:se(u)}}X(),q();let de=u=>{b=be(u,i),m={x:Math.max(m.x,b.x),y:Math.max(m.y,b.y),z:Math.max(m.z,b.z)};let p=I(b,x.scale,x.center);v=-1;for(let g=J.length-1;g>=0;g--)if(pe(g,p,m,x.scale,x.center)){v=g;break}Q(),X(),B()};return{getColor:Te,getMode:()=>i,setColor:de,setAlpha:f,getAlpha:()=>w,setMode(u){oe(u)},on(u,p){k.add(p)},off(u,p){k.delete(p)},destroy(){F.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(T)}}}function Ue(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:ge(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=ge(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ge(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ie({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Ce({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ge(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Ve(e,o,n=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=Z(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=Z(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Ne(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=Z(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=me(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ge(e,o,n){let t=o/100,r=n/100,s=(1-Math.abs(2*r-1))*t,l=s*(1-Math.abs(e/60%2-1)),a=r-s/2,i=0,c=0,m=0;return e<60?(i=s,c=l):e<120?(i=l,c=s):e<180?(c=s,m=l):e<240?(c=l,m=s):e<300?(i=l,m=s):(i=s,m=l),{r:Math.round((i+a)*255),g:Math.round((c+a)*255),b:Math.round((m+a)*255)}}function Ne(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),l=(r+s)/2;if(r===s)return{h:0,s:0,l:l*100};let a=r-s,i=l>.5?a/(2-r-s):a/(r+s),c=0;return r===o?c=((n-t)/a+(n<t?6:0))*60:r===n?c=((t-o)/a+2)*60:c=((o-n)/a+4)*60,{h:c,s:i*100,l:l*100}}var Se=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?Ue(t,this.model):null;this.alpha=r?.alpha??1;let s=r?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=$e(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",a=>{this.internal||(this.internal=!0,this.alpha=a.alpha,this.setAttribute("value",Ve(a.rgb,this.model,a.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:a})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Ve(a.rgb,this.model,a.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=Ue(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Ve({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Ee=class extends Se{constructor(){super("hex")}},Xo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Xo)customElements.get(e)||customElements.define(e,class extends Se{constructor(){super(o)}});var Wo=Ee;return Ro(jo);})();
