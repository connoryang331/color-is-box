var ColorIsBox=(()=>{var be=Object.defineProperty;var Ge=Object.getOwnPropertyDescriptor;var Ne=Object.getOwnPropertyNames;var Ue=Object.prototype.hasOwnProperty;var $e=(e,o)=>()=>(e&&(o=e(e=0)),o);var ve=(e,o)=>{for(var t in o)be(e,t,{get:o[t],enumerable:!0})},Ke=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of Ne(o))!Ue.call(e,s)&&s!==t&&be(e,s,{get:()=>o[s],enumerable:!(r=Ge(o,s))||r.enumerable});return e};var Xe=e=>Ke(be({},"__esModule",{value:!0}),e);var Fe={};ve(Fe,{createControls:()=>lo});function De(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Pe(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function lo(e,o,t){if(t.showModeToggle){let r=document.createElement("div");r.className="box-picker-mode-toggle";let s=h=>{let f=document.createElement("button");return f.textContent=h.toUpperCase(),f.addEventListener("click",()=>o.switchMode(h)),r.appendChild(f),f},c=s("oklch"),u=s("rgb"),i=s("hsb"),a=()=>{let h=o.mode();u.classList.toggle("active",h==="rgb"),i.classList.toggle("active",h==="hsb"),c.classList.toggle("active",h==="oklch")};a();let m=o.switchMode;o._markActive=a,e.appendChild(r)}if(t.showInputs){let r=document.createElement("input");r.className="box-picker-hex",r.type="text",r.spellcheck=!1,r.addEventListener("change",()=>{let f=r.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),r.addEventListener("click",()=>{De(o.getRgbForCopy()?"#"+uo(o.getRgbForCopy()):"#ffffff"),Pe(r)});let s=document.createElement("div");s.className="box-picker-channels";let c=[],u=[],i=["R","G","B"];for(let f=0;f<3;f++){let M=document.createElement("div");M.className="box-picker-channel";let x=document.createElement("label");x.textContent=i[f];let v=document.createElement("input");v.type="text",v.inputMode="numeric",M.appendChild(x),M.appendChild(v),s.appendChild(M),c.push(v),u.push(x),v.addEventListener("change",()=>{let L=parseFloat(v.value);isNaN(L)||o.onChannelInput(f,L,255)}),v.addEventListener("click",()=>{let L=o.getRgbForCopy();De(`${L.r}, ${L.g}, ${L.b}`),Pe(v)})}let a=document.createElement("div");a.className="box-picker-hexrow";let m=document.createElement("div");m.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",m.appendChild(h),m.appendChild(r),a.appendChild(s),a.appendChild(m),e.appendChild(a),e._inputs={hexInput:r,inputs:c,labels:u}}if(t.showCorners){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),u=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);o.onRandom({r:c,g:u,b:i})}),e.appendChild(r);let s=document.createElement("button");s.className="box-corner-btn box-corner-right",s.title="Reset",s.setAttribute("aria-label","Reset"),s.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',s.addEventListener("click",()=>o.onReset()),e.appendChild(s)}}function uo(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Be=$e(()=>{});var ho={};ve(ho,{createBoxColorPicker:()=>_e,createColorPicker:()=>bo,setBoxInvert:()=>pe});var ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ce={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ie(e){let o=e.r/255,t=e.g/255,r=e.b/255,s=Math.max(o,t,r),c=Math.min(o,t,r),u=s-c,i=0;u!==0&&(s===o?i=((t-r)/u+6)%6:s===t?i=(r-o)/u+2:i=(o-t)/u+4,i*=60);let a=s===0?0:u/s*100,m=s*100;return{h:i,s:a,b:m}}function We(e){let o=e.h,t=e.s/100,r=e.b/100,s=r*t,c=s*(1-Math.abs(o/60%2-1)),u=r-s,i,a,m;return o<60?(i=s,a=c,m=0):o<120?(i=c,a=s,m=0):o<180?(i=0,a=s,m=c):o<240?(i=0,a=c,m=s):o<300?(i=c,a=0,m=s):(i=s,a=0,m=c),{r:Math.round((i+u)*255),g:Math.round((a+u)*255),b:Math.round((m+u)*255)}}function fe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function he(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function je(e){let o=fe(e.r/255),t=fe(e.g/255),r=fe(e.b/255),s=.4122214708*o+.5363325363*t+.0514459929*r,c=.2119034982*o+.6806995451*t+.1073969566*r,u=.0883024619*o+.2817188376*t+.6299787005*r,i=Math.cbrt(s),a=Math.cbrt(c),m=Math.cbrt(u);return{L:.2104542553*i+.793617785*a-.0040720468*m,a:1.9779984951*i-2.428592205*a+.4505937099*m,b:.0259040371*i+.7827717662*a-.808675766*m}}function Ze(e,o,t){let r=e+.3963377774*o+.2158037573*t,s=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,u=r*r*r,i=s*s*s,a=c*c*c,m=4.0767416621*u-3.3077115913*i+.2309699292*a,h=-1.2684380046*u+2.6097574011*i-.3413193965*a,f=-.0041960863*u-.7034186147*i+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,he(m)))*255),g:Math.round(Math.max(0,Math.min(1,he(h)))*255),b:Math.round(Math.max(0,Math.min(1,he(f)))*255)}}function se(e){let o=je(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function me(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return Ze(e.l,t,r)}function Ye(e,o,t){let r=me({l:e,c:o,h:t});if(Me(r))return{l:e,c:o,h:t};let s=0,c=o;for(let u=0;u<20;u++){let i=(s+c)/2;r=me({l:e,c:i,h:t}),Me(r)?s=i:c=i}return{l:e,c:s,h:t}}function Me(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function te(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function xe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ke=.4;function K(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return We({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*ke,s=e.z*359,c=Ye(t,r,s);return me(c)}}function Q(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ie(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=se(e);return{x:t.l,y:Math.min(t.c/ke,1),z:t.h/359}}}function Ae(e,o){let t=Ce[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function we(e,o,t,r,s,c=!1){let u;e===0?u={x:r,y:o,z:t}:e===1?u={x:o,y:r,z:t}:u={x:o,y:t,z:r};let i=K(u,s);return c?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var Te=Math.PI/6,Qe=Math.cos(Te),Je=Math.sin(Te),ne=!1;function pe(e){ne=e}function H(e,o,t){return{x:t.x+(e.y-e.x)*Qe*o,y:t.y+e.z*o-(e.x+e.y)*Je*o}}function qe(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var N=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],eo=64,Le={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function Ve(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Re(e,o,t,r,s,c,u=!0,i=null){let{ctx:a,scale:m,center:h,width:f,height:M}=e;a.save(),a.clearRect(0,0,f,M);let x=qe(o).map(v=>H(v,m,h));if(to(a,m,h,s),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,no(a,x,o,s),a.restore(),u&&ao(a,s,m,h),r>=0){let v=K(t,s),L=ne?{r:255-v.r,g:255-v.g,b:255-v.b}:v,T=H(t,m,h);i&&i.active&&io(a,T,i.rgb,i.alpha),so(a,T,L)}a.restore()}var oo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function to(e,o,t,r){let s=H({x:0,y:0,z:0},o,t),c=[H({x:1,y:0,z:0},o,t),H({x:0,y:1,z:0},o,t),H({x:0,y:0,z:1},o,t)],u=oo[r];e.lineWidth=1.5;for(let i=0;i<c.length;i++)e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(c[i].x,c[i].y),e.strokeStyle=u[i],e.stroke()}function no(e,o,t,r){let s=[t.x,t.y,t.z];for(let c=0;c<N.length;c++){let u=N[c],i=s[u.fixedAxis],a=s[u.uAxis],m=s[u.vAxis];if(a<.002&&m<.002)continue;let h=u.quad.map(f=>o[f]);ro(e,h,u.fixedAxis,i,a,m,r)}}function ro(e,o,t,r,s,c,u){let i=eo,a=document.createElement("canvas");a.width=i,a.height=i;let m=a.getContext("2d"),h=m.createImageData(i,i),f=h.data;for(let P=0;P<i;P++)for(let D=0;D<i;D++){let J=D/(i-1)*s,X=P/(i-1)*c,B=we(t,J,X,r,u,ne),G=(P*i+D)*4;f[G]=B.r,f[G+1]=B.g,f[G+2]=B.b,f[G+3]=255}m.putImageData(h,0,0);let M=o[0],x=o[1],v=o[2],L=o[3],T=x.x-M.x,g=x.y-M.y,R=L.x-M.x,S=L.y-M.y;e.save(),e.beginPath(),e.moveTo(M.x,M.y),e.lineTo(x.x,x.y),e.lineTo(v.x,v.y),e.lineTo(L.x,L.y),e.closePath(),e.clip();let E=2/i,F=M.x-T*E-R*E,O=M.y-g*E-S*E,w=1+2*E,z=1+2*E;e.transform(T*w/i,g*w/i,R*z/i,S*z/i,F,O),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function ao(e,o,t,r){let s=ae[o],c=ne?[H({x:0,y:1,z:1},t,r),H({x:1,y:0,z:1},t,r),H({x:1,y:1,z:0},t,r)]:[H({x:1,y:0,z:0},t,r),H({x:0,y:1,z:0},t,r),H({x:0,y:0,z:1},t,r)],u=ne?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let a=c[i].x+u[i].x,m=c[i].y+u[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(s[i],a,m)}e.globalAlpha=1,e.restore()}var U=30,Z=13;function io(e,o,t,r){let s=(U+Z)/2,c=5,u=Math.floor(o.x/c)*c,i=Math.floor(o.y/c)*c,a=U*2+c*2,m=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,U,0,Math.PI*2),e.arc(o.x,o.y,Z,0,Math.PI*2,!0),e.clip();for(let T=-1;T*c<=a;T++)for(let g=-1;g*c<=a;g++)e.fillStyle=(T+g)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+T*c,i+g*c,c,c);let h="rgba("+t.r+","+t.g+","+t.b+",0)",f="rgba("+t.r+","+t.g+","+t.b+",1)",M=e;if(typeof M.createConicGradient=="function"){let T=M.createConicGradient(-Math.PI/2,o.x,o.y);T.addColorStop(0,h),T.addColorStop(1,f),e.fillStyle=T,e.fillRect(u-U,i-U,a,a)}else for(let g=0;g<36;g++){let R=-Math.PI/2+g/36*Math.PI*2,S=-Math.PI/2+(g+1)/36*Math.PI*2,E=(g+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(R)*Z,o.y+Math.sin(R)*Z),e.arc(o.x,o.y,U,R,S),e.arc(o.x,o.y,Z,S,R,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+E.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,U,0,Math.PI*2),e.arc(o.x,o.y,Z,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-U-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let x=m*Math.PI*2,v=o.x+s*Math.sin(x),L=o.y-s*Math.cos(x);e.beginPath(),e.arc(v,L,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function so(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Ee(e,o,t,r){let s=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return H(s[e],t,r)}function ge(){let e={x:0,y:0};return[H({x:1,y:0,z:0},1,e),H({x:0,y:1,z:0},1,e),H({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function oe(e,o,t,r,s){let c=N[e],u=[t.x,t.y,t.z],i=u[c.uAxis],a=u[c.vAxis];if(i<.002||a<.002)return null;let m={x:0,y:0,z:0},h=["x","y","z"];m[h[c.fixedAxis]]=u[c.fixedAxis];let f={...m};f[h[c.uAxis]]=i;let M={...m};M[h[c.vAxis]]=a;let x=H(m,r,s),v=H(f,r,s),L=H(M,r,s),T=v.x-x.x,g=v.y-x.y,R=L.x-x.x,S=L.y-x.y,E=T*S-g*R;if(Math.abs(E)<1e-6)return null;let F=o.x-x.x,O=o.y-x.y,w=(F*S-O*R)/E,z=(O*T-F*g)/E;return w<-.05||w>1.05||z<-.05||z>1.05?null:{s:Math.max(0,Math.min(1,w)),t:Math.max(0,Math.min(1,z))}}function He(e,o,t,r,s){let c=N[e],u=[t.x,t.y,t.z],i=u[c.uAxis],a=u[c.vAxis];if(i<.002||a<.002)return null;let m={x:0,y:0,z:0},h=["x","y","z"];m[h[c.fixedAxis]]=u[c.fixedAxis];let f={...m};f[h[c.uAxis]]=i;let M={...m};M[h[c.vAxis]]=a;let x=H(m,r,s),v=H(f,r,s),L=H(M,r,s),T=v.x-x.x,g=v.y-x.y,R=L.x-x.x,S=L.y-x.y,E=T*S-g*R;if(Math.abs(E)<1e-6)return null;let F=o.x-x.x,O=o.y-x.y,w=(F*S-O*R)/E,z=(O*T-F*g)/E;return{s:Math.max(0,Math.min(1,w)),t:Math.max(0,Math.min(1,z))}}var Se=22;function Ie(e,o,t,r,s,c,u,i,a,m,h,f,M){let x={...Le};function v(l){let p=!1,A=9;function n(y){let V=M();return Math.hypot(y.x-V.x,y.y-V.y)}function d(y){let V=M();return(Math.atan2(y.x-V.x,-(y.y-V.y))+Math.PI*2)%(Math.PI*2)}function b(y){h(d(y)/(Math.PI*2)),a()}function C(y){let V=n(y);return V>=Z-4&&V<=U+6}let k=e.getBoundingClientRect();return{x:l.clientX-k.left,y:l.clientY-k.top}}function L(l){let p=o(),A=u(),n=i();for(let d=0;d<3;d++){let b=Ee(d,p,A,n),C=l.x-b.x,k=l.y-b.y;if(C*C+k*k<=Se*Se)return d}return-1}function T(l){let p=o(),A=u(),n=i();for(let d=N.length-1;d>=0;d--){let b=oe(d,l,p,A,n);if(b)return{faceIndex:d,...b}}return null}let g=-1,R={x:0,y:0},S=0;function E(l,p){g=l,R=p,S=o()[["x","y","z"][l]],x.draggingAxisHandle=l,e.style.cursor="grabbing",a()}function F(l){if(g<0)return;let p=l.x-R.x,A=l.y-R.y,d=ge()[g],b=u(),k=(p*d.x+A*d.y)/b,y=Math.max(0,Math.min(1,S+k)),V=o(),I=["x","y","z"],W={...V,[I[g]]:y};t(W);let j=r(),$=c(),ye=$>=0?N[$]:null,ue={...j};ye&&g===ye.fixedAxis?ue[I[g]]=y:ue[I[g]]=Math.min(j[I[g]],y),s(ue,c()),a()}function O(){g=-1,x.draggingAxisHandle=-1}let w=-1,z=null,P=null,D=!1;function J(l,p,A,n){w=l,x.draggingFace=l,z=null,P=null,D=!1,n&&(D=!0,P={s:p,t:A}),B(l,p,A),e.style.cursor="crosshair",a()}function X(l,p,A){if(w<0)return;let n=o(),d=u(),b=i(),C=oe(w,l,n,d,b),k=w;if(!C&&!A){for(let I=N.length-1;I>=0;I--)if(I!==w&&(C=oe(I,l,n,d,b),C)){k=I;break}}if(!C&&A&&(C=He(w,l,n,d,b),k=w),!C){a();return}k!==w&&(w=k,x.draggingFace=k,z=null,D=!1,P=null);let{s:y,t:V}=C;if(p&&P){if(D){let I=Math.abs(y-P.s),W=Math.abs(V-P.t),j=.02;(I>j||W>j)&&(z=I>=W?"u":"v",D=!1)}z==="u"?V=P.t:z==="v"&&(y=P.s)}else p||(z=null,D=!1,P=null);B(k,y,V),a()}function B(l,p,A){let n=N[l],d=o(),b=["x","y","z"],C={...r()};C[b[n.uAxis]]=p*d[b[n.uAxis]],C[b[n.vAxis]]=A*d[b[n.vAxis]],C[b[n.fixedAxis]]=d[b[n.fixedAxis]],s(C,l)}function G(){w=-1,x.draggingFace=-1,z=null,D=!1,P=null}function q(l){let p=v(l);if(m()){if(x.alphaMode){if(distToDot(p)<=DOT_HIT_R){x.alphaMode=!1,a();return}if(inAlphaRing(p)){l.preventDefault(),alphaDragging=!0,applyAlphaFromPoint(p);return}x.alphaMode=!1,a();return}if(distToDot(p)<=DOT_HIT_R){l.preventDefault(),x.alphaMode=!0,a();return}}let A=L(p);if(A>=0){l.preventDefault(),E(A,p);return}let n=T(p);n&&(l.preventDefault(),J(n.faceIndex,n.s,n.t,l.shiftKey))}function ee(l){let p=v(l);if(alphaDragging){l.preventDefault(),applyAlphaFromPoint(p);return}if(g>=0){l.preventDefault(),F(p);return}if(w>=0){l.preventDefault(),X(p,l.shiftKey,l.altKey);return}let A=L(p),n=T(p),d=A,b=A>=0?-1:n?n.faceIndex:-1;(d!==x.hoveredAxisHandle||b!==x.hoveredFace)&&(x.hoveredAxisHandle=d,x.hoveredFace=b,e.style.cursor=d>=0?"grab":b>=0?"crosshair":"default",a())}function re(l){alphaDragging=!1;let p=g>=0||w>=0;O(),G(),p&&(x.hoveredAxisHandle=-1,x.hoveredFace=-1,e.style.cursor="default",a())}function ce(l){if(l.touches.length!==1)return;let p=v(l.touches[0]);if(m()){if(x.alphaMode){if(distToDot(p)<=DOT_HIT_R){x.alphaMode=!1,a();return}if(inAlphaRing(p)){l.preventDefault(),alphaDragging=!0,applyAlphaFromPoint(p);return}x.alphaMode=!1,a();return}if(distToDot(p)<=DOT_HIT_R){l.preventDefault(),x.alphaMode=!0,a();return}}let A=L(p);if(A>=0){l.preventDefault(),E(A,p);return}let n=T(p);n&&(l.preventDefault(),J(n.faceIndex,n.s,n.t,!1))}function le(l){if(l.touches.length!==1)return;let p=v(l.touches[0]);alphaDragging?(l.preventDefault(),applyAlphaFromPoint(p)):g>=0?(l.preventDefault(),F(p)):w>=0&&(l.preventDefault(),X(p,!1,!1))}function Y(l){alphaDragging=!1,O(),G(),a()}function _(l){if(x.alphaMode){if(l.key==="Escape"){x.alphaMode=!1,a();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),h(Math.min(1,f()+(l.shiftKey?.08:.02))),a();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),h(Math.max(0,f()-(l.shiftKey?.08:.02))),a();return}}let p=l.shiftKey?.04:.004,A=r(),n=o(),d=ge(),b=0,C=0;switch(l.key){case"ArrowRight":b=1;break;case"ArrowLeft":b=-1;break;case"ArrowUp":C=-1;break;case"ArrowDown":C=1;break;default:return}l.preventDefault();let k={...A},y=["x","y","z"];for(let V=0;V<3;V++){let I=b*d[V].x+C*d[V].y;if(Math.abs(I)>.3){let W=A[y[V]]+p*Math.sign(I);k[y[V]]=Math.max(0,Math.min(n[y[V]],W))}}s(k,c()),a()}e.addEventListener("mousedown",q),window.addEventListener("mousemove",ee),window.addEventListener("mouseup",re),e.addEventListener("touchstart",ce,{passive:!1}),e.addEventListener("touchmove",le,{passive:!1}),e.addEventListener("touchend",Y),e.addEventListener("keydown",_),e.setAttribute("tabindex","0");function de(){e.removeEventListener("mousedown",q),window.removeEventListener("mousemove",ee),window.removeEventListener("mouseup",re),e.removeEventListener("touchstart",ce),e.removeEventListener("touchmove",le),e.removeEventListener("touchend",Y),e.removeEventListener("keydown",_)}return{state:x,destroy:de}}var ze=`.box-picker {\r
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
`;var bo=_e,Oe=!1;function fo(){if(Oe||typeof document>"u")return;Oe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ze,document.head.appendChild(e)}function _e(e,o={}){let t=o.size??300,r=o.controls??!0,s=o.showInputs??!1,c=o.showModeToggle??!1,u=o.showCorners??!1,i={mode:()=>a,switchMode:n=>P(n),onHexInput:n=>{let d=xe(n);d?(f=Q(w?{r:255-d.r,g:255-d.g,b:255-d.b}:d,a),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)},l(),_(),B()):_()},onChannelInput:(n,d,b)=>{let C=Math.max(0,Math.min(b,d)),k=["x","y","z"],y=C/b;if(w){let V={...f,[k[n]]:y},I=K(V,a);f=Q({r:255-I.r,g:255-I.g,b:255-I.b},a)}else f={...f,[k[n]]:y};y>h[k[n]]&&(h={...h,[k[n]]:y}),l(),_(),B()},getRgbForCopy:()=>K(f,a),onRandom:n=>A(n),onReset:()=>A({r:0,g:0,b:0})},a=o.mode??"rgb",m=o.initialColor?Q(o.initialColor,a):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},f={...m},M=0,x=()=>o.alpha!==void 0,v=Math.max(0,Math.min(1,o.alpha??1));function L(n){let d=Math.max(0,Math.min(1,n));d!==v&&(v=d,l(),_(),B())}let T=new Set;fo();let g=document.createElement("div");g.className="box-picker";let R=document.createElement("canvas");R.style.cursor="grab",g.appendChild(R);let S=Ve(R,t),E=null,F=document.createElement("div");F.className="box-picker-controls",E=document.createElement("div"),E.className="box-picker-swatch",F.appendChild(E),g.appendChild(F),(s||c||u)&&Promise.resolve().then(()=>(Be(),Fe)).then(n=>{n.createControls(F,i,{showInputs:s,showModeToggle:c,showCorners:u})}).catch(()=>{}),e.appendChild(g);let O=Ie(R,()=>h,n=>{h=n},()=>f,(n,d)=>{f=n,M=d,l(),_()},()=>M,()=>S.scale,()=>S.center,B,x,L,()=>v,()=>H(f,S.scale,S.center)),w=!1,z=!0;R.addEventListener("mouseenter",()=>{z=!0,B()}),R.addEventListener("mouseleave",()=>{z=!1,B()}),R.addEventListener("dblclick",()=>{w=!w,pe(w),l(),_(),B()});function P(n){if(n===a)return;let d=K(f,a),b={...f},C={...h};a=n;let k=Q(d,a),y={x:1,y:1,z:1};f=k,h=y,J(b,k,C,y,300),_()}let D=null;function J(n,d,b,C,k){D!==null&&cancelAnimationFrame(D);let y=performance.now();function V(I){let W=I-y,j=Math.min(1,W/k),$=1-Math.pow(1-j,3);f={x:n.x+(d.x-n.x)*$,y:n.y+(d.y-n.y)*$,z:n.z+(d.z-n.z)*$},h={x:b.x+(C.x-b.x)*$,y:b.y+(C.y-b.y)*$,z:b.z+(C.z-b.z)*$},G(),l(),j<1?D=requestAnimationFrame(V):D=null}D=requestAnimationFrame(V)}let X=!1;function B(){X||(X=!0,requestAnimationFrame(()=>{X=!1,G()}))}function G(){Re(S,h,f,M,a,O.state,z,{active:O.state.alphaMode,alpha:v,rgb:Y()})}function q(n,d,b){return Math.round(n+(d-n)*b)}function ee(n,d){let b=d>0?255:0,C=Math.abs(d);return te({r:q(n.r,b,C),g:q(n.g,b,C),b:q(n.b,b,C)})}function re(n,d){let b=xe(d)||{r:128,g:128,b:128},C=ee(b,.35),k=ee(b,0),y=ee(b,-.35);n.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${C}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${k}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${y}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,n.style.backgroundColor="transparent"}function ce(n){try{navigator.clipboard.writeText(n).catch(()=>{})}catch{}}function le(n){n&&(n.style.borderColor="#4ade80",n.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{n.style.borderColor="",n.style.boxShadow=""},500))}function Y(){let n=K(f,a);return w?{r:255-n.r,g:255-n.g,b:255-n.b}:n}function _(){if(!r)return;let n=Y(),d=te(n);E&&re(E,d);let b=g.querySelector(".box-picker-hex");b&&(b.value=d),de(),g._updateModeButtons&&g._updateModeButtons()}function de(){if(!r)return;let n=ae[a],d=w?Q(Y(),a):f,b=Ae(d,a),C=g.querySelectorAll(".box-picker-channel input"),k=g.querySelectorAll(".box-picker-channel label");for(let y=0;y<C.length;y++)k[y].textContent=n[y],k[y].style.color="",k[y].style.textShadow="none",C[y].value=String(b[y])}function l(){let n=Y(),d={rgb:n,hsb:ie(n),oklch:se(n),hex:te(n),alpha:v};for(let b of T)b(d)}function p(){let n=K(f,a);return{rgb:n,hsb:ie(n),oklch:se(n),hex:te(n)}}_(),G();let A=n=>{f=Q(n,a),h={x:Math.max(h.x,f.x),y:Math.max(h.y,f.y),z:Math.max(h.z,f.z)};let d=H(f,S.scale,S.center);M=-1;for(let b=N.length-1;b>=0;b--)if(oe(b,d,h,S.scale,S.center)){M=b;break}l(),_(),B()};return{getColor:p,getMode:()=>a,setColor:A,setAlpha:L,getAlpha:()=>v,setMode(n){P(n)},on(n,d){T.add(d)},off(n,d){T.delete(d)},destroy(){O.destroy(),D!==null&&cancelAnimationFrame(D),e.removeChild(g)}}}return Xe(ho);})();
