var ColorIsBoxElement=(()=>{var Ve=Object.defineProperty;var lo=Object.getOwnPropertyDescriptor;var co=Object.getOwnPropertyNames;var uo=Object.prototype.hasOwnProperty;var ho=(e,o)=>()=>(e&&(o=e(e=0)),o);var _e=(e,o)=>{for(var n in o)Ve(e,n,{get:o[n],enumerable:!0})},bo=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of co(o))!uo.call(e,r)&&r!==n&&Ve(e,r,{get:()=>o[r],enumerable:!(t=lo(o,r))||t.enumerable});return e};var fo=e=>bo(Ve({},"__esModule",{value:!0}),e);var ro={};_e(ro,{createControls:()=>Vo});function to(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function no(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Vo(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=b=>{let f=document.createElement("button");return f.textContent=b.toUpperCase(),f.addEventListener("click",()=>o.switchMode(b)),t.appendChild(f),f},i=r("oklch"),c=r("rgb"),s=r("hsb"),a=()=>{let b=o.mode();c.classList.toggle("active",b==="rgb"),s.classList.toggle("active",b==="hsb"),i.classList.toggle("active",b==="oklch")};a();let u=o.switchMode;o._markActive=a,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let f=t.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),t.addEventListener("click",()=>{to(o.getRgbForCopy()?"#"+So(o.getRgbForCopy()):"#ffffff"),no(t)});let r=document.createElement("div");r.className="box-picker-channels";let i=[],c=[],s=["R","G","B"];for(let f=0;f<3;f++){let v=document.createElement("div");v.className="box-picker-channel";let m=document.createElement("label");m.textContent=s[f];let p=document.createElement("input");p.type="text",p.inputMode="numeric",v.appendChild(m),v.appendChild(p),r.appendChild(v),i.push(p),c.push(m),p.addEventListener("change",()=>{let M=parseFloat(p.value);isNaN(M)||o.onChannelInput(f,M,255)}),p.addEventListener("click",()=>{let M=o.getRgbForCopy();to(`${M.r}, ${M.g}, ${M.b}`),no(p)})}let a=document.createElement("div");a.className="box-picker-hexrow";let u=document.createElement("div");u.className="box-picker-hexwrap";let b=document.createElement("label");b.textContent="Hex",u.appendChild(b),u.appendChild(t),a.appendChild(r),a.appendChild(u),e.appendChild(a),e._inputs={hexInput:t,inputs:i,labels:c}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let i=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);o.onRandom({r:i,g:c,b:s})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function So(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var ao=ho(()=>{});var Fo={};_e(Fo,{ColorIsBoxElement:()=>Le,createBoxColorPicker:()=>io,createColorPicker:()=>Fe,default:()=>Io,setBoxInvert:()=>ze});var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ge={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ne(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),i=Math.min(o,n,t),c=r-i,s=0;c!==0&&(r===o?s=((n-t)/c+6)%6:r===n?s=(t-o)/c+2:s=(o-n)/c+4,s*=60);let a=r===0?0:c/r*100,u=r*100;return{h:s,s:a,b:u}}function pe(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,i=r*(1-Math.abs(o/60%2-1)),c=t-r,s,a,u;return o<60?(s=r,a=i,u=0):o<120?(s=i,a=r,u=0):o<180?(s=0,a=r,u=i):o<240?(s=0,a=i,u=r):o<300?(s=i,a=0,u=r):(s=r,a=0,u=i),{r:Math.round((s+c)*255),g:Math.round((a+c)*255),b:Math.round((u+c)*255)}}function Se(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function He(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function mo(e){let o=Se(e.r/255),n=Se(e.g/255),t=Se(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,i=.2119034982*o+.6806995451*n+.1073969566*t,c=.0883024619*o+.2817188376*n+.6299787005*t,s=Math.cbrt(r),a=Math.cbrt(i),u=Math.cbrt(c);return{L:.2104542553*s+.793617785*a-.0040720468*u,a:1.9779984951*s-2.428592205*a+.4505937099*u,b:.0259040371*s+.7827717662*a-.808675766*u}}function go(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,i=e-.0894841775*o-1.291485548*n,c=t*t*t,s=r*r*r,a=i*i*i,u=4.0767416621*c-3.3077115913*s+.2309699292*a,b=-1.2684380046*c+2.6097574011*s-.3413193965*a,f=-.0041960863*c-.7034186147*s+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,He(u)))*255),g:Math.round(Math.max(0,Math.min(1,He(b)))*255),b:Math.round(Math.max(0,Math.min(1,He(f)))*255)}}function he(e){let o=mo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function ge(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return go(e.l,n,t)}function po(e,o,n){let t=ge({l:e,c:o,h:n});if(Ne(t))return{l:e,c:o,h:n};let r=0,i=o;for(let c=0;c<20;c++){let s=(r+i)/2;t=ge({l:e,c:s,h:n}),Ne(t)?r=s:i=s}return{l:e,c:r,h:n}}function Ne(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function re(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function be(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ue=.4;function ee(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return pe({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Ue,r=e.z*359,i=po(n,t,r);return ge(i)}}function le(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ne(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=he(e);return{x:n.l,y:Math.min(n.c/Ue,1),z:n.h/359}}}function Ke(e,o){let n=Ge[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Xe(e,o,n,t,r,i=!1){let c;e===0?c={x:t,y:o,z:n}:e===1?c={x:o,y:t,z:n}:c={x:o,y:n,z:t};let s=ee(c,r);return i?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var We=Math.PI/6,xo=Math.cos(We),yo=Math.sin(We),xe=!1;function ze(e){xe=e}function E(e,o,n){return{x:n.x+(e.y-e.x)*xo*o,y:n.y+e.z*o-(e.x+e.y)*yo*o}}function vo(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Mo=64,je={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function Ze(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ye(e,o,n,t,r,i,c=!0,s=null){let{ctx:a,scale:u,center:b,width:f,height:v}=e;a.save(),a.clearRect(0,0,f,v);let m=vo(o).map(p=>E(p,u,b));if(ko(a,u,b,r),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,Ao(a,m,o,r),a.restore(),c&&To(a,r,u,b),t>=0){let p=ee(n,r),M=xe?{r:255-p.r,g:255-p.g,b:255-p.b}:p,k=E(n,u,b);s&&s.active&&Lo(a,k,s.rgb,s.alpha),Ro(a,k,M)}a.restore()}var Co={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function ko(e,o,n,t){let r=E({x:0,y:0,z:0},o,n),i=[E({x:1,y:0,z:0},o,n),E({x:0,y:1,z:0},o,n),E({x:0,y:0,z:1},o,n)],c=Co[t];e.lineWidth=1.5;for(let s=0;s<i.length;s++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(i[s].x,i[s].y),e.strokeStyle=c[s],e.stroke()}function Ao(e,o,n,t){let r=[n.x,n.y,n.z];for(let i=0;i<Y.length;i++){let c=Y[i],s=r[c.fixedAxis],a=r[c.uAxis],u=r[c.vAxis];if(a<.002&&u<.002)continue;let b=c.quad.map(f=>o[f]);wo(e,b,c.fixedAxis,s,a,u,t)}}function wo(e,o,n,t,r,i,c){let s=Mo,a=document.createElement("canvas");a.width=s,a.height=s;let u=a.getContext("2d"),b=u.createImageData(s,s),f=b.data;for(let J=0;J<s;J++)for(let I=0;I<s;I++){let oe=I/(s-1)*r,q=J/(s-1)*i,G=Xe(n,oe,q,t,c,xe),H=(J*s+I)*4;f[H]=G.r,f[H+1]=G.g,f[H+2]=G.b,f[H+3]=255}u.putImageData(b,0,0);let v=o[0],m=o[1],p=o[2],M=o[3],k=m.x-v.x,y=m.y-v.y,T=M.x-v.x,V=M.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(m.x,m.y),e.lineTo(p.x,p.y),e.lineTo(M.x,M.y),e.closePath(),e.clip();let A=2/s,U=v.x-k*A-T*A,P=v.y-y*A-V*A,B=1+2*A,D=1+2*A;e.transform(k*B/s,y*B/s,T*D/s,V*D/s,U,P),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function To(e,o,n,t){let r=Ae[o],i=xe?[E({x:0,y:1,z:1},n,t),E({x:1,y:0,z:1},n,t),E({x:1,y:1,z:0},n,t)]:[E({x:1,y:0,z:0},n,t),E({x:0,y:1,z:0},n,t),E({x:0,y:0,z:1},n,t)],c=xe?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let s=0;s<3;s++){let a=i[s].x+c[s].x,u=i[s].y+c[s].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[s],a,u)}e.globalAlpha=1,e.restore()}var Q=30,ae=13;function Lo(e,o,n,t){let r=(Q+ae)/2,i=5,c=Math.floor(o.x/i)*i,s=Math.floor(o.y/i)*i,a=Q*2+i*2,u=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,Q,0,Math.PI*2),e.arc(o.x,o.y,ae,0,Math.PI*2,!0),e.clip();for(let k=-1;k*i<=a;k++)for(let y=-1;y*i<=a;y++)e.fillStyle=(k+y)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+k*i,s+y*i,i,i);let b="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",v=e;if(typeof v.createConicGradient=="function"){let k=v.createConicGradient(-Math.PI/2,o.x,o.y);k.addColorStop(0,b),k.addColorStop(1,f),e.fillStyle=k,e.fillRect(c-Q,s-Q,a,a)}else for(let y=0;y<36;y++){let T=-Math.PI/2+y/36*Math.PI*2,V=-Math.PI/2+(y+1)/36*Math.PI*2,A=(y+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*ae,o.y+Math.sin(T)*ae),e.arc(o.x,o.y,Q,T,V),e.arc(o.x,o.y,ae,V,T,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+A.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,Q,0,Math.PI*2),e.arc(o.x,o.y,ae,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-Q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let m=u*Math.PI*2,p=o.x+r*Math.sin(m),M=o.y-r*Math.cos(m);e.beginPath(),e.arc(p,M,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Ro(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Qe(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return E(r[e],n,t)}function Ie(){let e={x:0,y:0};return[E({x:1,y:0,z:0},1,e),E({x:0,y:1,z:0},1,e),E({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function fe(e,o,n,t,r){let i=Y[e],c=[n.x,n.y,n.z],s=c[i.uAxis],a=c[i.vAxis];if(s<.002||a<.002)return null;let u={x:0,y:0,z:0},b=["x","y","z"];u[b[i.fixedAxis]]=c[i.fixedAxis];let f={...u};f[b[i.uAxis]]=s;let v={...u};v[b[i.vAxis]]=a;let m=E(u,t,r),p=E(f,t,r),M=E(v,t,r),k=p.x-m.x,y=p.y-m.y,T=M.x-m.x,V=M.y-m.y,A=k*V-y*T;if(Math.abs(A)<1e-6)return null;let U=o.x-m.x,P=o.y-m.y,B=(U*V-P*T)/A,D=(P*k-U*y)/A;return B<-.05||B>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,D))}}function Je(e,o,n,t,r){let i=Y[e],c=[n.x,n.y,n.z],s=c[i.uAxis],a=c[i.vAxis];if(s<.002||a<.002)return null;let u={x:0,y:0,z:0},b=["x","y","z"];u[b[i.fixedAxis]]=c[i.fixedAxis];let f={...u};f[b[i.uAxis]]=s;let v={...u};v[b[i.vAxis]]=a;let m=E(u,t,r),p=E(f,t,r),M=E(v,t,r),k=p.x-m.x,y=p.y-m.y,T=M.x-m.x,V=M.y-m.y,A=k*V-y*T;if(Math.abs(A)<1e-6)return null;let U=o.x-m.x,P=o.y-m.y,B=(U*V-P*T)/A,D=(P*k-U*y)/A;return{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,D))}}var qe=22;function eo(e,o,n,t,r,i,c,s,a,u,b,f,v){let m={...je};function p(l){let h=e.getBoundingClientRect();return{x:l.clientX-h.left,y:l.clientY-h.top}}let M=!1,k=!1,y=!1,T=9,V=1e3,A=null;function U(){P(),A=setTimeout(B,V)}function P(){A!==null&&(clearTimeout(A),A=null)}function B(){A=null,m.alphaMode=!0,ve(),g(),a()}function D(l){let h=v();return Math.hypot(l.x-h.x,l.y-h.y)}function J(l){let h=v();return(Math.atan2(l.x-h.x,-(l.y-h.y))+Math.PI*2)%(Math.PI*2)}function I(l){b(J(l)/(Math.PI*2)),a()}function oe(l){let h=D(l);return h>=ae-4&&h<=Q+6}function q(l){let h=o(),L=c(),C=s();for(let w=0;w<3;w++){let R=Qe(w,h,L,C),z=l.x-R.x,X=l.y-R.y;if(z*z+X*X<=qe*qe)return w}return-1}function G(l){let h=o(),L=c(),C=s();for(let w=Y.length-1;w>=0;w--){let R=fe(w,l,h,L,C);if(R)return{faceIndex:w,...R}}return null}let H=-1,se={x:0,y:0},ce=0;function ye(l,h){H=l,se=h,ce=o()[["x","y","z"][l]],m.draggingAxisHandle=l,e.style.cursor="grabbing",a()}function Re(l){if(P(),H<0)return;let h=l.x-se.x,L=l.y-se.y,w=Ie()[H],R=c(),X=(h*w.x+L*w.y)/R,Z=Math.max(0,Math.min(1,ce+X)),W=o(),N=["x","y","z"],ue={...W,[N[H]]:Z};n(ue);let me=t(),$e=i(),Oe=$e>=0?Y[$e]:null,Ee={...me};Oe&&H===Oe.fixedAxis?Ee[N[H]]=Z:Ee[N[H]]=Math.min(me[N[H]],Z),r(Ee,i()),a()}function ve(){H=-1,m.draggingAxisHandle=-1}let $=-1,_=null,j=null,K=!1;function Me(l,h,L,C){$=l,m.draggingFace=l,_=null,j=null,K=!1,C&&(K=!0,j={s:h,t:L}),d(l,h,L),e.style.cursor="crosshair",a()}function de(l,h,L){if(P(),$<0)return;let C=o(),w=c(),R=s(),z=fe($,l,C,w,R),X=$;if(!z&&!L){for(let N=Y.length-1;N>=0;N--)if(N!==$&&(z=fe(N,l,C,w,R),z)){X=N;break}}if(!z&&L&&(z=Je($,l,C,w,R),X=$),!z){a();return}X!==$&&($=X,m.draggingFace=X,_=null,K=!1,j=null);let{s:Z,t:W}=z;if(h&&j){if(K){let N=Math.abs(Z-j.s),ue=Math.abs(W-j.t),me=.02;(N>me||ue>me)&&(_=N>=ue?"u":"v",K=!1)}_==="u"?W=j.t:_==="v"&&(Z=j.s)}else h||(_=null,K=!1,j=null);d(X,Z,W),a()}function d(l,h,L){let C=Y[l],w=o(),R=["x","y","z"],z={...t()};z[R[C.uAxis]]=h*w[R[C.uAxis]],z[R[C.vAxis]]=L*w[R[C.vAxis]],z[R[C.fixedAxis]]=w[R[C.fixedAxis]],r(z,l)}function g(){$=-1,m.draggingFace=-1,_=null,K=!1,j=null}function x(l){k=!0;let h=p(l);if(u()){if(m.alphaMode){if(D(h)<=T){m.alphaMode=!1,a();return}if(oe(h)){l.preventDefault(),M=!0,I(h);return}m.alphaMode=!1,a();return}D(h)<=T&&U()}let L=q(h);if(L>=0){l.preventDefault(),ye(L,h);return}let C=G(h);C&&(l.preventDefault(),Me(C.faceIndex,C.s,C.t,l.shiftKey))}function F(l){let h=p(l);if(M){l.preventDefault(),I(h);return}if(k&&m.alphaMode&&oe(h)){l.preventDefault(),M=!0,I(h);return}if(H>=0){l.preventDefault(),Re(h);return}if($>=0){l.preventDefault(),de(h,l.shiftKey,l.altKey);return}let L=q(h),C=G(h),w=L,R=L>=0?-1:C?C.faceIndex:-1;(w!==m.hoveredAxisHandle||R!==m.hoveredFace)&&(m.hoveredAxisHandle=w,m.hoveredFace=R,e.style.cursor=w>=0?"grab":R>=0?"crosshair":"default",a())}function O(l){P(),k=!1,M=!1;let h=H>=0||$>=0;ve(),g(),h&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",a())}function S(l){if(l.touches.length!==1)return;y=!0;let h=p(l.touches[0]);if(u()){if(m.alphaMode){if(D(h)<=T){m.alphaMode=!1,a();return}if(oe(h)){l.preventDefault(),M=!0,I(h);return}m.alphaMode=!1,a();return}D(h)<=T&&U()}let L=q(h);if(L>=0){l.preventDefault(),ye(L,h);return}let C=G(h);C&&(l.preventDefault(),Me(C.faceIndex,C.s,C.t,!1))}function ie(l){if(l.touches.length!==1)return;let h=p(l.touches[0]);M?(l.preventDefault(),I(h)):y&&m.alphaMode&&oe(h)?(l.preventDefault(),M=!0,I(h)):H>=0?(l.preventDefault(),Re(h)):$>=0&&(l.preventDefault(),de(h,!1,!1))}function te(l){P(),y=!1,M=!1,ve(),g(),a()}function Ce(l){if(m.alphaMode){if(l.key==="Escape"){m.alphaMode=!1,a();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),b(Math.min(1,f()+(l.shiftKey?.08:.02))),a();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),b(Math.max(0,f()-(l.shiftKey?.08:.02))),a();return}}let h=l.shiftKey?.04:.004,L=t(),C=o(),w=Ie(),R=0,z=0;switch(l.key){case"ArrowRight":R=1;break;case"ArrowLeft":R=-1;break;case"ArrowUp":z=-1;break;case"ArrowDown":z=1;break;default:return}l.preventDefault();let X={...L},Z=["x","y","z"];for(let W=0;W<3;W++){let N=R*w[W].x+z*w[W].y;if(Math.abs(N)>.3){let ue=L[Z[W]]+h*Math.sign(N);X[Z[W]]=Math.max(0,Math.min(C[Z[W]],ue))}}r(X,i()),a()}e.addEventListener("mousedown",x),window.addEventListener("mousemove",F),window.addEventListener("mouseup",O),e.addEventListener("touchstart",S,{passive:!1}),e.addEventListener("touchmove",ie,{passive:!1}),e.addEventListener("touchend",te),e.addEventListener("keydown",Ce),e.setAttribute("tabindex","0");function ke(){P(),e.removeEventListener("mousedown",x),window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",O),e.removeEventListener("touchstart",S),e.removeEventListener("touchmove",ie),e.removeEventListener("touchend",te),e.removeEventListener("keydown",Ce)}return{state:m,destroy:ke}}var oo=`.box-picker {\r
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
`;var Fe=io,so=!1;function Ho(){if(so||typeof document>"u")return;so=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=oo,document.head.appendChild(e)}function io(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,i=o.showModeToggle??!1,c=o.showCorners??!1,s={mode:()=>a,switchMode:d=>J(d),onHexInput:d=>{let g=be(d);g?(f=le(B?{r:255-g.r,g:255-g.g,b:255-g.b}:g,a),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)},K(),_(),G()):_()},onChannelInput:(d,g,x)=>{let F=Math.max(0,Math.min(x,g)),O=["x","y","z"],S=F/x;if(B){let ie={...f,[O[d]]:S},te=ee(ie,a);f=le({r:255-te.r,g:255-te.g,b:255-te.b},a)}else f={...f,[O[d]]:S};S>b[O[d]]&&(b={...b,[O[d]]:S}),K(),_(),G()},getRgbForCopy:()=>ee(f,a),onRandom:d=>de(d),onReset:()=>de({r:0,g:0,b:0})},a=o.mode??"rgb",u=o.initialColor?le(o.initialColor,a):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},f={...u},v=0,m=()=>o.alpha!==void 0,p=Math.max(0,Math.min(1,o.alpha??1));function M(d){let g=Math.max(0,Math.min(1,d));g!==p&&(p=g,K(),_(),G())}let k=new Set;Ho();let y=document.createElement("div");y.className="box-picker";let T=document.createElement("canvas");T.style.cursor="grab",y.appendChild(T);let V=Ze(T,n),A=null,U=document.createElement("div");U.className="box-picker-controls",A=document.createElement("div"),A.className="box-picker-swatch",U.appendChild(A),y.appendChild(U),(r||i||c)&&Promise.resolve().then(()=>(ao(),ro)).then(d=>{d.createControls(U,s,{showInputs:r,showModeToggle:i,showCorners:c})}).catch(()=>{}),e.appendChild(y);let P=eo(T,()=>b,d=>{b=d},()=>f,(d,g)=>{f=d,v=g,K(),_()},()=>v,()=>V.scale,()=>V.center,G,m,M,()=>p,()=>E(f,V.scale,V.center)),B=!1,D=!0;T.addEventListener("mouseenter",()=>{D=!0,G()}),T.addEventListener("mouseleave",()=>{D=!1,G()}),T.addEventListener("dblclick",()=>{B=!B,ze(B),K(),_(),G()});function J(d){if(d===a)return;let g=ee(f,a),x={...f},F={...b};a=d;let O=le(g,a),S={x:1,y:1,z:1};f=O,b=S,oe(x,O,F,S,300),_()}let I=null;function oe(d,g,x,F,O){I!==null&&cancelAnimationFrame(I);let S=performance.now();function ie(te){let Ce=te-S,ke=Math.min(1,Ce/O),l=1-Math.pow(1-ke,3);f={x:d.x+(g.x-d.x)*l,y:d.y+(g.y-d.y)*l,z:d.z+(g.z-d.z)*l},b={x:x.x+(F.x-x.x)*l,y:x.y+(F.y-x.y)*l,z:x.z+(F.z-x.z)*l},H(),K(),ke<1?I=requestAnimationFrame(ie):I=null}I=requestAnimationFrame(ie)}let q=!1;function G(){q||(q=!0,requestAnimationFrame(()=>{q=!1,H()}))}function H(){Ye(V,b,f,v,a,P.state,D,{active:P.state.alphaMode,alpha:p,rgb:$()})}function se(d,g,x){return Math.round(d+(g-d)*x)}function ce(d,g){let x=g>0?255:0,F=Math.abs(g);return re({r:se(d.r,x,F),g:se(d.g,x,F),b:se(d.b,x,F)})}function ye(d,g){let x=be(g)||{r:128,g:128,b:128},F=ce(x,.35),O=ce(x,0),S=ce(x,-.35);d.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${F}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${O}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,d.style.backgroundColor="transparent"}function Re(d){try{navigator.clipboard.writeText(d).catch(()=>{})}catch{}}function ve(d){d&&(d.style.borderColor="#4ade80",d.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{d.style.borderColor="",d.style.boxShadow=""},500))}function $(){let d=ee(f,a);return B?{r:255-d.r,g:255-d.g,b:255-d.b}:d}function _(){if(!t)return;let d=$(),g=re(d);A&&ye(A,g);let x=y.querySelector(".box-picker-hex");x&&(x.value=g),j(),y._updateModeButtons&&y._updateModeButtons()}function j(){if(!t)return;let d=Ae[a],g=B?le($(),a):f,x=Ke(g,a),F=y.querySelectorAll(".box-picker-channel input"),O=y.querySelectorAll(".box-picker-channel label");for(let S=0;S<F.length;S++)O[S].textContent=d[S],O[S].style.color="",O[S].style.textShadow="none",F[S].value=String(x[S])}function K(){let d=$(),g={rgb:d,hsb:ne(d),oklch:he(d),hex:re(d),alpha:p};for(let x of k)x(g)}function Me(){let d=ee(f,a);return{rgb:d,hsb:ne(d),oklch:he(d),hex:re(d)}}_(),H();let de=d=>{f=le(d,a),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)};let g=E(f,V.scale,V.center);v=-1;for(let x=Y.length-1;x>=0;x--)if(fe(x,g,b,V.scale,V.center)){v=x;break}K(),_(),G()};return{getColor:Me,getMode:()=>a,setColor:de,setAlpha:M,getAlpha:()=>p,setMode(d){J(d)},on(d,g){k.add(g)},off(d,g){k.delete(g)},destroy(){P.destroy(),I!==null&&cancelAnimationFrame(I),e.removeChild(y)}}}function De(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:be(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=be(t[1]),i=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:i}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Pe(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Pe(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?pe({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:pe({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:ge({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Pe(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:pe({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function we(e,o,n=1){if(o==="hex")return re(e);if(o==="hex-alpha")return re(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Be(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Be(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Be(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=ne(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=he(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Pe(e,o,n){let t=o/100,r=n/100,i=(1-Math.abs(2*r-1))*t,c=i*(1-Math.abs(e/60%2-1)),s=r-i/2,a=0,u=0,b=0;return e<60?(a=i,u=c):e<120?(a=c,u=i):e<180?(u=i,b=c):e<240?(u=c,b=i):e<300?(a=c,b=i):(a=i,b=c),{r:Math.round((a+s)*255),g:Math.round((u+s)*255),b:Math.round((b+s)*255)}}function Be(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),i=Math.min(o,n,t),c=(r+i)/2;if(r===i)return{h:0,s:0,l:c*100};let s=r-i,a=c>.5?s/(2-r-i):s/(r+i),u=0;return r===o?u=((n-t)/s+(n<t?6:0))*60:r===n?u=((t-o)/s+2)*60:u=((o-n)/s+4)*60,{h:u,s:a*100,l:c*100}}var Te=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?De(t,this.model):null;this.alpha=r?.alpha??1;let i=r?.rgb??{r:255,g:255,b:255},c=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=Fe(this.holder,{initialColor:i,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...c.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",s=>{this.internal||(this.internal=!0,this.alpha=s.alpha,this.setAttribute("value",we(s.rgb,this.model,s.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:s})),this.dispatchEvent(new CustomEvent("color-changed",{detail:we(s.rgb,this.model,s.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=De(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||we({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Le=class extends Te{constructor(){super("hex")}},zo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of zo)customElements.get(e)||customElements.define(e,class extends Te{constructor(){super(o)}});var Io=Le;return fo(Fo);})();
