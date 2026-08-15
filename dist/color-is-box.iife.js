var ColorIsBox=(()=>{var pe=Object.defineProperty;var We=Object.getOwnPropertyDescriptor;var je=Object.getOwnPropertyNames;var Ze=Object.prototype.hasOwnProperty;var Ye=(e,o)=>()=>(e&&(o=e(e=0)),o);var Le=(e,o)=>{for(var t in o)pe(e,t,{get:o[t],enumerable:!0})},Qe=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of je(o))!Ze.call(e,s)&&s!==t&&pe(e,s,{get:()=>o[s],enumerable:!(n=We(o,s))||n.enumerable});return e};var Je=e=>Qe(pe({},"__esModule",{value:!0}),e);var Ue={};Le(Ue,{createControls:()=>xo});function Ge(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Ne(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function xo(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let s=f=>{let b=document.createElement("button");return b.textContent=f.toUpperCase(),b.addEventListener("click",()=>o.switchMode(f)),n.appendChild(b),b},c=s("oklch"),u=s("rgb"),i=s("hsb"),r=()=>{let f=o.mode();u.classList.toggle("active",f==="rgb"),i.classList.toggle("active",f==="hsb"),c.classList.toggle("active",f==="oklch")};r();let h=o.switchMode;o._markActive=r,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let b=n.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),n.addEventListener("click",()=>{Ge(o.getRgbForCopy()?"#"+po(o.getRgbForCopy()):"#ffffff"),Ne(n)});let s=document.createElement("div");s.className="box-picker-channels";let c=[],u=[],i=["R","G","B"];for(let b=0;b<3;b++){let M=document.createElement("div");M.className="box-picker-channel";let m=document.createElement("label");m.textContent=i[b];let g=document.createElement("input");g.type="text",g.inputMode="numeric",M.appendChild(m),M.appendChild(g),s.appendChild(M),c.push(g),u.push(m),g.addEventListener("change",()=>{let A=parseFloat(g.value);isNaN(A)||o.onChannelInput(b,A,255)}),g.addEventListener("click",()=>{let A=o.getRgbForCopy();Ge(`${A.r}, ${A.g}, ${A.b}`),Ne(g)})}let r=document.createElement("div");r.className="box-picker-hexrow";let h=document.createElement("div");h.className="box-picker-hexwrap";let f=document.createElement("label");f.textContent="Hex",h.appendChild(f),h.appendChild(n),r.appendChild(s),r.appendChild(h),e.appendChild(r),e._inputs={hexInput:n,inputs:c,labels:u}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),u=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);o.onRandom({r:c,g:u,b:i})}),e.appendChild(n);let s=document.createElement("button");s.className="box-corner-btn box-corner-right",s.title="Reset",s.setAttribute("aria-label","Reset"),s.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',s.addEventListener("click",()=>o.onReset()),e.appendChild(s)}}function po(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var $e=Ye(()=>{});var vo={};Le(vo,{createBoxColorPicker:()=>Xe,createColorPicker:()=>go,setBoxInvert:()=>Me});var ue={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Te={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function be(e){let o=e.r/255,t=e.g/255,n=e.b/255,s=Math.max(o,t,n),c=Math.min(o,t,n),u=s-c,i=0;u!==0&&(s===o?i=((t-n)/u+6)%6:s===t?i=(n-o)/u+2:i=(o-t)/u+4,i*=60);let r=s===0?0:u/s*100,h=s*100;return{h:i,s:r,b:h}}function qe(e){let o=e.h,t=e.s/100,n=e.b/100,s=n*t,c=s*(1-Math.abs(o/60%2-1)),u=n-s,i,r,h;return o<60?(i=s,r=c,h=0):o<120?(i=c,r=s,h=0):o<180?(i=0,r=s,h=c):o<240?(i=0,r=c,h=s):o<300?(i=c,r=0,h=s):(i=s,r=0,h=c),{r:Math.round((i+u)*255),g:Math.round((r+u)*255),b:Math.round((h+u)*255)}}function ge(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ye(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function eo(e){let o=ge(e.r/255),t=ge(e.g/255),n=ge(e.b/255),s=.4122214708*o+.5363325363*t+.0514459929*n,c=.2119034982*o+.6806995451*t+.1073969566*n,u=.0883024619*o+.2817188376*t+.6299787005*n,i=Math.cbrt(s),r=Math.cbrt(c),h=Math.cbrt(u);return{L:.2104542553*i+.793617785*r-.0040720468*h,a:1.9779984951*i-2.428592205*r+.4505937099*h,b:.0259040371*i+.7827717662*r-.808675766*h}}function oo(e,o,t){let n=e+.3963377774*o+.2158037573*t,s=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,u=n*n*n,i=s*s*s,r=c*c*c,h=4.0767416621*u-3.3077115913*i+.2309699292*r,f=-1.2684380046*u+2.6097574011*i-.3413193965*r,b=-.0041960863*u-.7034186147*i+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,ye(h)))*255),g:Math.round(Math.max(0,Math.min(1,ye(f)))*255),b:Math.round(Math.max(0,Math.min(1,ye(b)))*255)}}function fe(e){let o=eo(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function ve(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return oo(e.l,t,n)}function to(e,o,t){let n=ve({l:e,c:o,h:t});if(Ve(n))return{l:e,c:o,h:t};let s=0,c=o;for(let u=0;u<20;u++){let i=(s+c)/2;n=ve({l:e,c:i,h:t}),Ve(n)?s=i:c=i}return{l:e,c:s,h:t}}function Ve(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ie(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Ce(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ee=.4;function Y(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return qe({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*Ee,s=e.z*359,c=to(t,n,s);return ve(c)}}function ee(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=be(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=fe(e);return{x:t.l,y:Math.min(t.c/Ee,1),z:t.h/359}}}function Re(e,o){let t=Te[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Se(e,o,t,n,s,c=!1){let u;e===0?u={x:n,y:o,z:t}:e===1?u={x:o,y:n,z:t}:u={x:o,y:t,z:n};let i=Y(u,s);return c?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var He=Math.PI/6,no=Math.cos(He),ro=Math.sin(He),se=!1;function Me(e){se=e}function S(e,o,t){return{x:t.x+(e.y-e.x)*no*o,y:t.y+e.z*o-(e.x+e.y)*ro*o}}function ao(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var X=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],io=64,ze={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function Ie(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Pe(e,o,t,n,s,c,u=!0,i=null){let{ctx:r,scale:h,center:f,width:b,height:M}=e;r.save(),r.clearRect(0,0,b,M);let m=ao(o).map(g=>S(g,h,f));if(co(r,h,f,s),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,lo(r,m,o,s),r.restore(),u&&bo(r,s,h,f),n>=0){let g=Y(t,s),A=se?{r:255-g.r,g:255-g.g,b:255-g.b}:g,w=S(t,h,f);i&&i.active&&fo(r,w,i.rgb,i.alpha),ho(r,w,A)}r.restore()}var so={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function co(e,o,t,n){let s=S({x:0,y:0,z:0},o,t),c=[S({x:1,y:0,z:0},o,t),S({x:0,y:1,z:0},o,t),S({x:0,y:0,z:1},o,t)],u=so[n];e.lineWidth=1.5;for(let i=0;i<c.length;i++)e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(c[i].x,c[i].y),e.strokeStyle=u[i],e.stroke()}function lo(e,o,t,n){let s=[t.x,t.y,t.z];for(let c=0;c<X.length;c++){let u=X[c],i=s[u.fixedAxis],r=s[u.uAxis],h=s[u.vAxis];if(r<.002&&h<.002)continue;let f=u.quad.map(b=>o[b]);uo(e,f,u.fixedAxis,i,r,h,n)}}function uo(e,o,t,n,s,c,u){let i=io,r=document.createElement("canvas");r.width=i,r.height=i;let h=r.getContext("2d"),f=h.createImageData(i,i),b=f.data;for(let W=0;W<i;W++)for(let _=0;_<i;_++){let oe=_/(i-1)*s,Q=W/(i-1)*c,E=Se(t,oe,Q,n,u,se),B=(W*i+_)*4;b[B]=E.r,b[B+1]=E.g,b[B+2]=E.b,b[B+3]=255}h.putImageData(f,0,0);let M=o[0],m=o[1],g=o[2],A=o[3],w=m.x-M.x,v=m.y-M.y,H=A.x-M.x,V=A.y-M.y;e.save(),e.beginPath(),e.moveTo(M.x,M.y),e.lineTo(m.x,m.y),e.lineTo(g.x,g.y),e.lineTo(A.x,A.y),e.closePath(),e.clip();let R=2/i,P=M.x-w*R-H*R,O=M.y-v*R-V*R,L=1+2*R,F=1+2*R;e.transform(w*L/i,v*L/i,H*F/i,V*F/i,P,O),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function bo(e,o,t,n){let s=ue[o],c=se?[S({x:0,y:1,z:1},t,n),S({x:1,y:0,z:1},t,n),S({x:1,y:1,z:0},t,n)]:[S({x:1,y:0,z:0},t,n),S({x:0,y:1,z:0},t,n),S({x:0,y:0,z:1},t,n)],u=se?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let r=c[i].x+u[i].x,h=c[i].y+u[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(s[i],r,h)}e.globalAlpha=1,e.restore()}var Z=30,J=13;function fo(e,o,t,n){let s=(Z+J)/2,c=5,u=Math.floor(o.x/c)*c,i=Math.floor(o.y/c)*c,r=Z*2+c*2,h=Math.max(0,Math.min(1,n));e.save(),e.beginPath(),e.arc(o.x,o.y,Z,0,Math.PI*2),e.arc(o.x,o.y,J,0,Math.PI*2,!0),e.clip();for(let w=-1;w*c<=r;w++)for(let v=-1;v*c<=r;v++)e.fillStyle=(w+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+w*c,i+v*c,c,c);let f="rgba("+t.r+","+t.g+","+t.b+",0)",b="rgba("+t.r+","+t.g+","+t.b+",1)",M=e;if(typeof M.createConicGradient=="function"){let w=M.createConicGradient(-Math.PI/2,o.x,o.y);w.addColorStop(0,f),w.addColorStop(1,b),e.fillStyle=w,e.fillRect(u-Z,i-Z,r,r)}else for(let v=0;v<36;v++){let H=-Math.PI/2+v/36*Math.PI*2,V=-Math.PI/2+(v+1)/36*Math.PI*2,R=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(H)*J,o.y+Math.sin(H)*J),e.arc(o.x,o.y,Z,H,V),e.arc(o.x,o.y,J,V,H,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+R.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,Z,0,Math.PI*2),e.arc(o.x,o.y,J,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-Z-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let m=h*Math.PI*2,g=o.x+s*Math.sin(m),A=o.y-s*Math.cos(m);e.beginPath(),e.arc(g,A,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function ho(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Fe(e,o,t,n){let s=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(s[e],t,n)}function ke(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function re(e,o,t,n,s){let c=X[e],u=[t.x,t.y,t.z],i=u[c.uAxis],r=u[c.vAxis];if(i<.002||r<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[c.fixedAxis]]=u[c.fixedAxis];let b={...h};b[f[c.uAxis]]=i;let M={...h};M[f[c.vAxis]]=r;let m=S(h,n,s),g=S(b,n,s),A=S(M,n,s),w=g.x-m.x,v=g.y-m.y,H=A.x-m.x,V=A.y-m.y,R=w*V-v*H;if(Math.abs(R)<1e-6)return null;let P=o.x-m.x,O=o.y-m.y,L=(P*V-O*H)/R,F=(O*w-P*v)/R;return L<-.05||L>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,L)),t:Math.max(0,Math.min(1,F))}}function Be(e,o,t,n,s){let c=X[e],u=[t.x,t.y,t.z],i=u[c.uAxis],r=u[c.vAxis];if(i<.002||r<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[c.fixedAxis]]=u[c.fixedAxis];let b={...h};b[f[c.uAxis]]=i;let M={...h};M[f[c.vAxis]]=r;let m=S(h,n,s),g=S(b,n,s),A=S(M,n,s),w=g.x-m.x,v=g.y-m.y,H=A.x-m.x,V=A.y-m.y,R=w*V-v*H;if(Math.abs(R)<1e-6)return null;let P=o.x-m.x,O=o.y-m.y,L=(P*V-O*H)/R,F=(O*w-P*v)/R;return{s:Math.max(0,Math.min(1,L)),t:Math.max(0,Math.min(1,F))}}var De=22;function Oe(e,o,t,n,s,c,u,i,r,h,f,b,M){let m={...ze};function g(a){let d=e.getBoundingClientRect();return{x:a.clientX-d.left,y:a.clientY-d.top}}let A=!1,w=9;function v(a){let d=M();return Math.hypot(a.x-d.x,a.y-d.y)}function H(a){let d=M();return(Math.atan2(a.x-d.x,-(a.y-d.y))+Math.PI*2)%(Math.PI*2)}function V(a){f(H(a)/(Math.PI*2)),r()}function R(a){let d=v(a);return d>=J-4&&d<=Z+6}function P(a){let d=o(),x=u(),y=i();for(let k=0;k<3;k++){let T=Fe(k,d,x,y),z=a.x-T.x,I=a.y-T.y;if(z*z+I*I<=De*De)return k}return-1}function O(a){let d=o(),x=u(),y=i();for(let k=X.length-1;k>=0;k--){let T=re(k,a,d,x,y);if(T)return{faceIndex:k,...T}}return null}let L=-1,F={x:0,y:0},W=0;function _(a,d){L=a,F=d,W=o()[["x","y","z"][a]],m.draggingAxisHandle=a,e.style.cursor="grabbing",r()}function oe(a){if(L<0)return;let d=a.x-F.x,x=a.y-F.y,k=ke()[L],T=u(),I=(d*k.x+x*k.y)/T,K=Math.max(0,Math.min(1,W+I)),N=o(),D=["x","y","z"],ne={...N,[D[L]]:K};t(ne);let ae=n(),Ae=c(),we=Ae>=0?X[Ae]:null,xe={...ae};we&&L===we.fixedAxis?xe[D[L]]=K:xe[D[L]]=Math.min(ae[D[L]],K),s(xe,c()),r()}function Q(){L=-1,m.draggingAxisHandle=-1}let E=-1,B=null,G=null,$=!1;function ce(a,d,x,y){E=a,m.draggingFace=a,B=null,G=null,$=!1,y&&($=!0,G={s:d,t:x}),me(a,d,x),e.style.cursor="crosshair",r()}function he(a,d,x){if(E<0)return;let y=o(),k=u(),T=i(),z=re(E,a,y,k,T),I=E;if(!z&&!x){for(let D=X.length-1;D>=0;D--)if(D!==E&&(z=re(D,a,y,k,T),z)){I=D;break}}if(!z&&x&&(z=Be(E,a,y,k,T),I=E),!z){r();return}I!==E&&(E=I,m.draggingFace=I,B=null,$=!1,G=null);let{s:K,t:N}=z;if(d&&G){if($){let D=Math.abs(K-G.s),ne=Math.abs(N-G.t),ae=.02;(D>ae||ne>ae)&&(B=D>=ne?"u":"v",$=!1)}B==="u"?N=G.t:B==="v"&&(K=G.s)}else d||(B=null,$=!1,G=null);me(I,K,N),r()}function me(a,d,x){let y=X[a],k=o(),T=["x","y","z"],z={...n()};z[T[y.uAxis]]=d*k[T[y.uAxis]],z[T[y.vAxis]]=x*k[T[y.vAxis]],z[T[y.fixedAxis]]=k[T[y.fixedAxis]],s(z,a)}function q(){E=-1,m.draggingFace=-1,B=null,$=!1,G=null}function U(a){let d=g(a);if(h()){if(m.alphaMode){if(v(d)<=w){m.alphaMode=!1,r();return}if(R(d)){a.preventDefault(),A=!0,V(d);return}m.alphaMode=!1,r();return}if(v(d)<=w){a.preventDefault(),m.alphaMode=!0,r();return}}let x=P(d);if(x>=0){a.preventDefault(),_(x,d);return}let y=O(d);y&&(a.preventDefault(),ce(y.faceIndex,y.s,y.t,a.shiftKey))}function le(a){let d=g(a);if(A){a.preventDefault(),V(d);return}if(L>=0){a.preventDefault(),oe(d);return}if(E>=0){a.preventDefault(),he(d,a.shiftKey,a.altKey);return}let x=P(d),y=O(d),k=x,T=x>=0?-1:y?y.faceIndex:-1;(k!==m.hoveredAxisHandle||T!==m.hoveredFace)&&(m.hoveredAxisHandle=k,m.hoveredFace=T,e.style.cursor=k>=0?"grab":T>=0?"crosshair":"default",r())}function j(a){A=!1;let d=L>=0||E>=0;Q(),q(),d&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",r())}function de(a){if(a.touches.length!==1)return;let d=g(a.touches[0]);if(h()){if(m.alphaMode){if(v(d)<=w){m.alphaMode=!1,r();return}if(R(d)){a.preventDefault(),A=!0,V(d);return}m.alphaMode=!1,r();return}if(v(d)<=w){a.preventDefault(),m.alphaMode=!0,r();return}}let x=P(d);if(x>=0){a.preventDefault(),_(x,d);return}let y=O(d);y&&(a.preventDefault(),ce(y.faceIndex,y.s,y.t,!1))}function te(a){if(a.touches.length!==1)return;let d=g(a.touches[0]);A?(a.preventDefault(),V(d)):L>=0?(a.preventDefault(),oe(d)):E>=0&&(a.preventDefault(),he(d,!1,!1))}function l(a){A=!1,Q(),q(),r()}function p(a){if(m.alphaMode){if(a.key==="Escape"){m.alphaMode=!1,r();return}if(a.key==="ArrowUp"||a.key==="ArrowRight"){a.preventDefault(),f(Math.min(1,b()+(a.shiftKey?.08:.02))),r();return}if(a.key==="ArrowDown"||a.key==="ArrowLeft"){a.preventDefault(),f(Math.max(0,b()-(a.shiftKey?.08:.02))),r();return}}let d=a.shiftKey?.04:.004,x=n(),y=o(),k=ke(),T=0,z=0;switch(a.key){case"ArrowRight":T=1;break;case"ArrowLeft":T=-1;break;case"ArrowUp":z=-1;break;case"ArrowDown":z=1;break;default:return}a.preventDefault();let I={...x},K=["x","y","z"];for(let N=0;N<3;N++){let D=T*k[N].x+z*k[N].y;if(Math.abs(D)>.3){let ne=x[K[N]]+d*Math.sign(D);I[K[N]]=Math.max(0,Math.min(y[K[N]],ne))}}s(I,c()),r()}e.addEventListener("mousedown",U),window.addEventListener("mousemove",le),window.addEventListener("mouseup",j),e.addEventListener("touchstart",de,{passive:!1}),e.addEventListener("touchmove",te,{passive:!1}),e.addEventListener("touchend",l),e.addEventListener("keydown",p),e.setAttribute("tabindex","0");function C(){e.removeEventListener("mousedown",U),window.removeEventListener("mousemove",le),window.removeEventListener("mouseup",j),e.removeEventListener("touchstart",de),e.removeEventListener("touchmove",te),e.removeEventListener("touchend",l),e.removeEventListener("keydown",p)}return{state:m,destroy:C}}var _e=`.box-picker {\r
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
`;var go=Xe,Ke=!1;function yo(){if(Ke||typeof document>"u")return;Ke=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=_e,document.head.appendChild(e)}function Xe(e,o={}){let t=o.size??300,n=o.controls??!0,s=o.showInputs??!1,c=o.showModeToggle??!1,u=o.showCorners??!1,i={mode:()=>r,switchMode:l=>W(l),onHexInput:l=>{let p=Ce(l);p?(b=ee(L?{r:255-p.r,g:255-p.g,b:255-p.b}:p,r),f={x:Math.max(f.x,b.x),y:Math.max(f.y,b.y),z:Math.max(f.z,b.z)},j(),U(),E()):U()},onChannelInput:(l,p,C)=>{let a=Math.max(0,Math.min(C,p)),d=["x","y","z"],x=a/C;if(L){let y={...b,[d[l]]:x},k=Y(y,r);b=ee({r:255-k.r,g:255-k.g,b:255-k.b},r)}else b={...b,[d[l]]:x};x>f[d[l]]&&(f={...f,[d[l]]:x}),j(),U(),E()},getRgbForCopy:()=>Y(b,r),onRandom:l=>te(l),onReset:()=>te({r:0,g:0,b:0})},r=o.mode??"rgb",h=o.initialColor?ee(o.initialColor,r):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},b={...h},M=0,m=()=>o.alpha!==void 0,g=Math.max(0,Math.min(1,o.alpha??1));function A(l){let p=Math.max(0,Math.min(1,l));p!==g&&(g=p,j(),U(),E())}let w=new Set;yo();let v=document.createElement("div");v.className="box-picker";let H=document.createElement("canvas");H.style.cursor="grab",v.appendChild(H);let V=Ie(H,t),R=null,P=document.createElement("div");P.className="box-picker-controls",R=document.createElement("div"),R.className="box-picker-swatch",P.appendChild(R),v.appendChild(P),(s||c||u)&&Promise.resolve().then(()=>($e(),Ue)).then(l=>{l.createControls(P,i,{showInputs:s,showModeToggle:c,showCorners:u})}).catch(()=>{}),e.appendChild(v);let O=Oe(H,()=>f,l=>{f=l},()=>b,(l,p)=>{b=l,M=p,j(),U()},()=>M,()=>V.scale,()=>V.center,E,m,A,()=>g,()=>S(b,V.scale,V.center)),L=!1,F=!0;H.addEventListener("mouseenter",()=>{F=!0,E()}),H.addEventListener("mouseleave",()=>{F=!1,E()}),H.addEventListener("dblclick",()=>{L=!L,Me(L),j(),U(),E()});function W(l){if(l===r)return;let p=Y(b,r),C={...b},a={...f};r=l;let d=ee(p,r),x={x:1,y:1,z:1};b=d,f=x,oe(C,d,a,x,300),U()}let _=null;function oe(l,p,C,a,d){_!==null&&cancelAnimationFrame(_);let x=performance.now();function y(k){let T=k-x,z=Math.min(1,T/d),I=1-Math.pow(1-z,3);b={x:l.x+(p.x-l.x)*I,y:l.y+(p.y-l.y)*I,z:l.z+(p.z-l.z)*I},f={x:C.x+(a.x-C.x)*I,y:C.y+(a.y-C.y)*I,z:C.z+(a.z-C.z)*I},B(),j(),z<1?_=requestAnimationFrame(y):_=null}_=requestAnimationFrame(y)}let Q=!1;function E(){Q||(Q=!0,requestAnimationFrame(()=>{Q=!1,B()}))}function B(){Pe(V,f,b,M,r,O.state,F,{active:O.state.alphaMode,alpha:g,rgb:q()})}function G(l,p,C){return Math.round(l+(p-l)*C)}function $(l,p){let C=p>0?255:0,a=Math.abs(p);return ie({r:G(l.r,C,a),g:G(l.g,C,a),b:G(l.b,C,a)})}function ce(l,p){let C=Ce(p)||{r:128,g:128,b:128},a=$(C,.35),d=$(C,0),x=$(C,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${a}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${d}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${x}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function he(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function me(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function q(){let l=Y(b,r);return L?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function U(){if(!n)return;let l=q(),p=ie(l);R&&ce(R,p);let C=v.querySelector(".box-picker-hex");C&&(C.value=p),le(),v._updateModeButtons&&v._updateModeButtons()}function le(){if(!n)return;let l=ue[r],p=L?ee(q(),r):b,C=Re(p,r),a=v.querySelectorAll(".box-picker-channel input"),d=v.querySelectorAll(".box-picker-channel label");for(let x=0;x<a.length;x++)d[x].textContent=l[x],d[x].style.color="",d[x].style.textShadow="none",a[x].value=String(C[x])}function j(){let l=q(),p={rgb:l,hsb:be(l),oklch:fe(l),hex:ie(l),alpha:g};for(let C of w)C(p)}function de(){let l=Y(b,r);return{rgb:l,hsb:be(l),oklch:fe(l),hex:ie(l)}}U(),B();let te=l=>{b=ee(l,r),f={x:Math.max(f.x,b.x),y:Math.max(f.y,b.y),z:Math.max(f.z,b.z)};let p=S(b,V.scale,V.center);M=-1;for(let C=X.length-1;C>=0;C--)if(re(C,p,f,V.scale,V.center)){M=C;break}j(),U(),E()};return{getColor:de,getMode:()=>r,setColor:te,setAlpha:A,getAlpha:()=>g,setMode(l){W(l)},on(l,p){w.add(p)},off(l,p){w.delete(p)},destroy(){O.destroy(),_!==null&&cancelAnimationFrame(_),e.removeChild(v)}}}return Je(vo);})();
