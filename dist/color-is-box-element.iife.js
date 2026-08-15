var ColorIsBoxElement=(()=>{var ke=Object.defineProperty;var oo=Object.getOwnPropertyDescriptor;var to=Object.getOwnPropertyNames;var no=Object.prototype.hasOwnProperty;var ro=(e,o)=>()=>(e&&(o=e(e=0)),o);var Ie=(e,o)=>{for(var n in o)ke(e,n,{get:o[n],enumerable:!0})},ao=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of to(o))!no.call(e,r)&&r!==n&&ke(e,r,{get:()=>o[r],enumerable:!(t=oo(o,r))||t.enumerable});return e};var so=e=>ao(ke({},"__esModule",{value:!0}),e);var Qe={};Ie(Qe,{createControls:()=>ko});function Ze(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Ye(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function ko(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=b=>{let f=document.createElement("button");return f.textContent=b.toUpperCase(),f.addEventListener("click",()=>o.switchMode(b)),t.appendChild(f),f},i=r("oklch"),c=r("rgb"),s=r("hsb"),a=()=>{let b=o.mode();c.classList.toggle("active",b==="rgb"),s.classList.toggle("active",b==="hsb"),i.classList.toggle("active",b==="oklch")};a();let h=o.switchMode;o._markActive=a,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let f=t.value;/^#?[0-9a-f]{6}$/i.test(f)?o.onHexInput(f):o.onHexInput("")}),t.addEventListener("click",()=>{Ze(o.getRgbForCopy()?"#"+Ao(o.getRgbForCopy()):"#ffffff"),Ye(t)});let r=document.createElement("div");r.className="box-picker-channels";let i=[],c=[],s=["R","G","B"];for(let f=0;f<3;f++){let C=document.createElement("div");C.className="box-picker-channel";let m=document.createElement("label");m.textContent=s[f];let p=document.createElement("input");p.type="text",p.inputMode="numeric",C.appendChild(m),C.appendChild(p),r.appendChild(C),i.push(p),c.push(m),p.addEventListener("change",()=>{let A=parseFloat(p.value);isNaN(A)||o.onChannelInput(f,A,255)}),p.addEventListener("click",()=>{let A=o.getRgbForCopy();Ze(`${A.r}, ${A.g}, ${A.b}`),Ye(p)})}let a=document.createElement("div");a.className="box-picker-hexrow";let h=document.createElement("div");h.className="box-picker-hexwrap";let b=document.createElement("label");b.textContent="Hex",h.appendChild(b),h.appendChild(t),a.appendChild(r),a.appendChild(h),e.appendChild(a),e._inputs={hexInput:t,inputs:i,labels:c}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let i=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);o.onRandom({r:i,g:c,b:s})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function Ao(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Je=ro(()=>{});var Vo={};Ie(Vo,{ColorIsBoxElement:()=>ye,createBoxColorPicker:()=>eo,createColorPicker:()=>Ve,default:()=>Lo,setBoxInvert:()=>Te});var ge={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Fe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function J(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),i=Math.min(o,n,t),c=r-i,s=0;c!==0&&(r===o?s=((n-t)/c+6)%6:r===n?s=(t-o)/c+2:s=(o-n)/c+4,s*=60);let a=r===0?0:c/r*100,h=r*100;return{h:s,s:a,b:h}}function ue(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,i=r*(1-Math.abs(o/60%2-1)),c=t-r,s,a,h;return o<60?(s=r,a=i,h=0):o<120?(s=i,a=r,h=0):o<180?(s=0,a=r,h=i):o<240?(s=0,a=i,h=r):o<300?(s=i,a=0,h=r):(s=r,a=0,h=i),{r:Math.round((s+c)*255),g:Math.round((a+c)*255),b:Math.round((h+c)*255)}}function Ae(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function we(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function io(e){let o=Ae(e.r/255),n=Ae(e.g/255),t=Ae(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,i=.2119034982*o+.6806995451*n+.1073969566*t,c=.0883024619*o+.2817188376*n+.6299787005*t,s=Math.cbrt(r),a=Math.cbrt(i),h=Math.cbrt(c);return{L:.2104542553*s+.793617785*a-.0040720468*h,a:1.9779984951*s-2.428592205*a+.4505937099*h,b:.0259040371*s+.7827717662*a-.808675766*h}}function lo(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,i=e-.0894841775*o-1.291485548*n,c=t*t*t,s=r*r*r,a=i*i*i,h=4.0767416621*c-3.3077115913*s+.2309699292*a,b=-1.2684380046*c+2.6097574011*s-.3413193965*a,f=-.0041960863*c-.7034186147*s+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,we(h)))*255),g:Math.round(Math.max(0,Math.min(1,we(b)))*255),b:Math.round(Math.max(0,Math.min(1,we(f)))*255)}}function se(e){let o=io(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function de(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return lo(e.l,n,t)}function co(e,o,n){let t=de({l:e,c:o,h:n});if(Pe(t))return{l:e,c:o,h:n};let r=0,i=o;for(let c=0;c<20;c++){let s=(r+i)/2;t=de({l:e,c:s,h:n}),Pe(t)?r=s:i=s}return{l:e,c:r,h:n}}function Pe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function q(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ie(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Be=.4;function Y(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ue({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Be,r=e.z*359,i=co(n,t,r);return de(i)}}function te(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=J(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=se(e);return{x:n.l,y:Math.min(n.c/Be,1),z:n.h/359}}}function De(e,o){let n=Fe[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function $e(e,o,n,t,r,i=!1){let c;e===0?c={x:t,y:o,z:n}:e===1?c={x:o,y:t,z:n}:c={x:o,y:n,z:t};let s=Y(c,r);return i?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var Oe=Math.PI/6,uo=Math.cos(Oe),ho=Math.sin(Oe),he=!1;function Te(e){he=e}function S(e,o,n){return{x:n.x+(e.y-e.x)*uo*o,y:n.y+e.z*o-(e.x+e.y)*ho*o}}function bo(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var X=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],fo=64,Ge={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function _e(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ne(e,o,n,t,r,i,c=!0,s=null){let{ctx:a,scale:h,center:b,width:f,height:C}=e;a.save(),a.clearRect(0,0,f,C);let m=bo(o).map(p=>S(p,h,b));if(go(a,h,b,r),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,xo(a,m,o,r),a.restore(),c&&yo(a,r,h,b),t>=0){let p=Y(n,r),A=he?{r:255-p.r,g:255-p.g,b:255-p.b}:p,w=S(n,h,b);s&&s.active&&vo(a,w,s.rgb,s.alpha),Mo(a,w,A)}a.restore()}var mo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function go(e,o,n,t){let r=S({x:0,y:0,z:0},o,n),i=[S({x:1,y:0,z:0},o,n),S({x:0,y:1,z:0},o,n),S({x:0,y:0,z:1},o,n)],c=mo[t];e.lineWidth=1.5;for(let s=0;s<i.length;s++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(i[s].x,i[s].y),e.strokeStyle=c[s],e.stroke()}function xo(e,o,n,t){let r=[n.x,n.y,n.z];for(let i=0;i<X.length;i++){let c=X[i],s=r[c.fixedAxis],a=r[c.uAxis],h=r[c.vAxis];if(a<.002&&h<.002)continue;let b=c.quad.map(f=>o[f]);po(e,b,c.fixedAxis,s,a,h,t)}}function po(e,o,n,t,r,i,c){let s=fo,a=document.createElement("canvas");a.width=s,a.height=s;let h=a.getContext("2d"),b=h.createImageData(s,s),f=b.data;for(let W=0;W<s;W++)for(let O=0;O<s;O++){let ne=O/(s-1)*r,Q=W/(s-1)*i,E=$e(n,ne,Q,t,c,he),B=(W*s+O)*4;f[B]=E.r,f[B+1]=E.g,f[B+2]=E.b,f[B+3]=255}h.putImageData(b,0,0);let C=o[0],m=o[1],p=o[2],A=o[3],w=m.x-C.x,v=m.y-C.y,H=A.x-C.x,V=A.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(m.x,m.y),e.lineTo(p.x,p.y),e.lineTo(A.x,A.y),e.closePath(),e.clip();let R=2/s,F=C.x-w*R-H*R,$=C.y-v*R-V*R,T=1+2*R,P=1+2*R;e.transform(w*T/s,v*T/s,H*P/s,V*P/s,F,$),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function yo(e,o,n,t){let r=ge[o],i=he?[S({x:0,y:1,z:1},n,t),S({x:1,y:0,z:1},n,t),S({x:1,y:1,z:0},n,t)]:[S({x:1,y:0,z:0},n,t),S({x:0,y:1,z:0},n,t),S({x:0,y:0,z:1},n,t)],c=he?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let s=0;s<3;s++){let a=i[s].x+c[s].x,h=i[s].y+c[s].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[s],a,h)}e.globalAlpha=1,e.restore()}var Z=30,ee=13;function vo(e,o,n,t){let r=(Z+ee)/2,i=5,c=Math.floor(o.x/i)*i,s=Math.floor(o.y/i)*i,a=Z*2+i*2,h=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,Z,0,Math.PI*2),e.arc(o.x,o.y,ee,0,Math.PI*2,!0),e.clip();for(let w=-1;w*i<=a;w++)for(let v=-1;v*i<=a;v++)e.fillStyle=(w+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+w*i,s+v*i,i,i);let b="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",C=e;if(typeof C.createConicGradient=="function"){let w=C.createConicGradient(-Math.PI/2,o.x,o.y);w.addColorStop(0,b),w.addColorStop(1,f),e.fillStyle=w,e.fillRect(c-Z,s-Z,a,a)}else for(let v=0;v<36;v++){let H=-Math.PI/2+v/36*Math.PI*2,V=-Math.PI/2+(v+1)/36*Math.PI*2,R=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(H)*ee,o.y+Math.sin(H)*ee),e.arc(o.x,o.y,Z,H,V),e.arc(o.x,o.y,ee,V,H,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+R.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,Z,0,Math.PI*2),e.arc(o.x,o.y,ee,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-Z-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let m=h*Math.PI*2,p=o.x+r*Math.sin(m),A=o.y-r*Math.cos(m);e.beginPath(),e.arc(p,A,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Mo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Ue(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(r[e],n,t)}function Le(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function le(e,o,n,t,r){let i=X[e],c=[n.x,n.y,n.z],s=c[i.uAxis],a=c[i.vAxis];if(s<.002||a<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[i.fixedAxis]]=c[i.fixedAxis];let f={...h};f[b[i.uAxis]]=s;let C={...h};C[b[i.vAxis]]=a;let m=S(h,t,r),p=S(f,t,r),A=S(C,t,r),w=p.x-m.x,v=p.y-m.y,H=A.x-m.x,V=A.y-m.y,R=w*V-v*H;if(Math.abs(R)<1e-6)return null;let F=o.x-m.x,$=o.y-m.y,T=(F*V-$*H)/R,P=($*w-F*v)/R;return T<-.05||T>1.05||P<-.05||P>1.05?null:{s:Math.max(0,Math.min(1,T)),t:Math.max(0,Math.min(1,P))}}function Ke(e,o,n,t,r){let i=X[e],c=[n.x,n.y,n.z],s=c[i.uAxis],a=c[i.vAxis];if(s<.002||a<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[i.fixedAxis]]=c[i.fixedAxis];let f={...h};f[b[i.uAxis]]=s;let C={...h};C[b[i.vAxis]]=a;let m=S(h,t,r),p=S(f,t,r),A=S(C,t,r),w=p.x-m.x,v=p.y-m.y,H=A.x-m.x,V=A.y-m.y,R=w*V-v*H;if(Math.abs(R)<1e-6)return null;let F=o.x-m.x,$=o.y-m.y,T=(F*V-$*H)/R,P=($*w-F*v)/R;return{s:Math.max(0,Math.min(1,T)),t:Math.max(0,Math.min(1,P))}}var Xe=22;function We(e,o,n,t,r,i,c,s,a,h,b,f,C){let m={...Ge};function p(l){let u=e.getBoundingClientRect();return{x:l.clientX-u.left,y:l.clientY-u.top}}let A=!1,w=9;function v(l){let u=C();return Math.hypot(l.x-u.x,l.y-u.y)}function H(l){let u=C();return(Math.atan2(l.x-u.x,-(l.y-u.y))+Math.PI*2)%(Math.PI*2)}function V(l){b(H(l)/(Math.PI*2)),a()}function R(l){let u=v(l);return u>=ee-4&&u<=Z+6}function F(l){let u=o(),g=c(),y=s();for(let k=0;k<3;k++){let L=Ue(k,u,g,y),z=l.x-L.x,I=l.y-L.y;if(z*z+I*I<=Xe*Xe)return k}return-1}function $(l){let u=o(),g=c(),y=s();for(let k=X.length-1;k>=0;k--){let L=le(k,l,u,g,y);if(L)return{faceIndex:k,...L}}return null}let T=-1,P={x:0,y:0},W=0;function O(l,u){T=l,P=u,W=o()[["x","y","z"][l]],m.draggingAxisHandle=l,e.style.cursor="grabbing",a()}function ne(l){if(T<0)return;let u=l.x-P.x,g=l.y-P.y,k=Le()[T],L=c(),I=(u*k.x+g*k.y)/L,K=Math.max(0,Math.min(1,W+I)),_=o(),D=["x","y","z"],ae={..._,[D[T]]:K};n(ae);let ce=t(),He=i(),ze=He>=0?X[He]:null,Ce={...ce};ze&&T===ze.fixedAxis?Ce[D[T]]=K:Ce[D[T]]=Math.min(ce[D[T]],K),r(Ce,i()),a()}function Q(){T=-1,m.draggingAxisHandle=-1}let E=-1,B=null,G=null,U=!1;function be(l,u,g,y){E=l,m.draggingFace=l,B=null,G=null,U=!1,y&&(U=!0,G={s:u,t:g}),Me(l,u,g),e.style.cursor="crosshair",a()}function ve(l,u,g){if(E<0)return;let y=o(),k=c(),L=s(),z=le(E,l,y,k,L),I=E;if(!z&&!g){for(let D=X.length-1;D>=0;D--)if(D!==E&&(z=le(D,l,y,k,L),z)){I=D;break}}if(!z&&g&&(z=Ke(E,l,y,k,L),I=E),!z){a();return}I!==E&&(E=I,m.draggingFace=I,B=null,U=!1,G=null);let{s:K,t:_}=z;if(u&&G){if(U){let D=Math.abs(K-G.s),ae=Math.abs(_-G.t),ce=.02;(D>ce||ae>ce)&&(B=D>=ae?"u":"v",U=!1)}B==="u"?_=G.t:B==="v"&&(K=G.s)}else u||(B=null,U=!1,G=null);Me(I,K,_),a()}function Me(l,u,g){let y=X[l],k=o(),L=["x","y","z"],z={...t()};z[L[y.uAxis]]=u*k[L[y.uAxis]],z[L[y.vAxis]]=g*k[L[y.vAxis]],z[L[y.fixedAxis]]=k[L[y.fixedAxis]],r(z,l)}function oe(){E=-1,m.draggingFace=-1,B=null,U=!1,G=null}function N(l){let u=p(l);if(h()){if(m.alphaMode){if(v(u)<=w){m.alphaMode=!1,a();return}if(R(u)){l.preventDefault(),A=!0,V(u);return}m.alphaMode=!1,a();return}if(v(u)<=w){l.preventDefault(),m.alphaMode=!0,a();return}}let g=F(u);if(g>=0){l.preventDefault(),O(g,u);return}let y=$(u);y&&(l.preventDefault(),be(y.faceIndex,y.s,y.t,l.shiftKey))}function fe(l){let u=p(l);if(A){l.preventDefault(),V(u);return}if(T>=0){l.preventDefault(),ne(u);return}if(E>=0){l.preventDefault(),ve(u,l.shiftKey,l.altKey);return}let g=F(u),y=$(u),k=g,L=g>=0?-1:y?y.faceIndex:-1;(k!==m.hoveredAxisHandle||L!==m.hoveredFace)&&(m.hoveredAxisHandle=k,m.hoveredFace=L,e.style.cursor=k>=0?"grab":L>=0?"crosshair":"default",a())}function j(l){A=!1;let u=T>=0||E>=0;Q(),oe(),u&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",a())}function me(l){if(l.touches.length!==1)return;let u=p(l.touches[0]);if(h()){if(m.alphaMode){if(v(u)<=w){m.alphaMode=!1,a();return}if(R(u)){l.preventDefault(),A=!0,V(u);return}m.alphaMode=!1,a();return}if(v(u)<=w){l.preventDefault(),m.alphaMode=!0,a();return}}let g=F(u);if(g>=0){l.preventDefault(),O(g,u);return}let y=$(u);y&&(l.preventDefault(),be(y.faceIndex,y.s,y.t,!1))}function re(l){if(l.touches.length!==1)return;let u=p(l.touches[0]);A?(l.preventDefault(),V(u)):T>=0?(l.preventDefault(),ne(u)):E>=0&&(l.preventDefault(),ve(u,!1,!1))}function d(l){A=!1,Q(),oe(),a()}function x(l){if(m.alphaMode){if(l.key==="Escape"){m.alphaMode=!1,a();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),b(Math.min(1,f()+(l.shiftKey?.08:.02))),a();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),b(Math.max(0,f()-(l.shiftKey?.08:.02))),a();return}}let u=l.shiftKey?.04:.004,g=t(),y=o(),k=Le(),L=0,z=0;switch(l.key){case"ArrowRight":L=1;break;case"ArrowLeft":L=-1;break;case"ArrowUp":z=-1;break;case"ArrowDown":z=1;break;default:return}l.preventDefault();let I={...g},K=["x","y","z"];for(let _=0;_<3;_++){let D=L*k[_].x+z*k[_].y;if(Math.abs(D)>.3){let ae=g[K[_]]+u*Math.sign(D);I[K[_]]=Math.max(0,Math.min(y[K[_]],ae))}}r(I,i()),a()}e.addEventListener("mousedown",N),window.addEventListener("mousemove",fe),window.addEventListener("mouseup",j),e.addEventListener("touchstart",me,{passive:!1}),e.addEventListener("touchmove",re,{passive:!1}),e.addEventListener("touchend",d),e.addEventListener("keydown",x),e.setAttribute("tabindex","0");function M(){e.removeEventListener("mousedown",N),window.removeEventListener("mousemove",fe),window.removeEventListener("mouseup",j),e.removeEventListener("touchstart",me),e.removeEventListener("touchmove",re),e.removeEventListener("touchend",d),e.removeEventListener("keydown",x)}return{state:m,destroy:M}}var je=`.box-picker {\r
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
`;var Ve=eo,qe=!1;function wo(){if(qe||typeof document>"u")return;qe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=je,document.head.appendChild(e)}function eo(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,i=o.showModeToggle??!1,c=o.showCorners??!1,s={mode:()=>a,switchMode:d=>W(d),onHexInput:d=>{let x=ie(d);x?(f=te(T?{r:255-x.r,g:255-x.g,b:255-x.b}:x,a),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)},j(),N(),E()):N()},onChannelInput:(d,x,M)=>{let l=Math.max(0,Math.min(M,x)),u=["x","y","z"],g=l/M;if(T){let y={...f,[u[d]]:g},k=Y(y,a);f=te({r:255-k.r,g:255-k.g,b:255-k.b},a)}else f={...f,[u[d]]:g};g>b[u[d]]&&(b={...b,[u[d]]:g}),j(),N(),E()},getRgbForCopy:()=>Y(f,a),onRandom:d=>re(d),onReset:()=>re({r:0,g:0,b:0})},a=o.mode??"rgb",h=o.initialColor?te(o.initialColor,a):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},f={...h},C=0,m=()=>o.alpha!==void 0,p=Math.max(0,Math.min(1,o.alpha??1));function A(d){let x=Math.max(0,Math.min(1,d));x!==p&&(p=x,j(),N(),E())}let w=new Set;wo();let v=document.createElement("div");v.className="box-picker";let H=document.createElement("canvas");H.style.cursor="grab",v.appendChild(H);let V=_e(H,n),R=null,F=document.createElement("div");F.className="box-picker-controls",R=document.createElement("div"),R.className="box-picker-swatch",F.appendChild(R),v.appendChild(F),(r||i||c)&&Promise.resolve().then(()=>(Je(),Qe)).then(d=>{d.createControls(F,s,{showInputs:r,showModeToggle:i,showCorners:c})}).catch(()=>{}),e.appendChild(v);let $=We(H,()=>b,d=>{b=d},()=>f,(d,x)=>{f=d,C=x,j(),N()},()=>C,()=>V.scale,()=>V.center,E,m,A,()=>p,()=>S(f,V.scale,V.center)),T=!1,P=!0;H.addEventListener("mouseenter",()=>{P=!0,E()}),H.addEventListener("mouseleave",()=>{P=!1,E()}),H.addEventListener("dblclick",()=>{T=!T,Te(T),j(),N(),E()});function W(d){if(d===a)return;let x=Y(f,a),M={...f},l={...b};a=d;let u=te(x,a),g={x:1,y:1,z:1};f=u,b=g,ne(M,u,l,g,300),N()}let O=null;function ne(d,x,M,l,u){O!==null&&cancelAnimationFrame(O);let g=performance.now();function y(k){let L=k-g,z=Math.min(1,L/u),I=1-Math.pow(1-z,3);f={x:d.x+(x.x-d.x)*I,y:d.y+(x.y-d.y)*I,z:d.z+(x.z-d.z)*I},b={x:M.x+(l.x-M.x)*I,y:M.y+(l.y-M.y)*I,z:M.z+(l.z-M.z)*I},B(),j(),z<1?O=requestAnimationFrame(y):O=null}O=requestAnimationFrame(y)}let Q=!1;function E(){Q||(Q=!0,requestAnimationFrame(()=>{Q=!1,B()}))}function B(){Ne(V,b,f,C,a,$.state,P,{active:$.state.alphaMode,alpha:p,rgb:oe()})}function G(d,x,M){return Math.round(d+(x-d)*M)}function U(d,x){let M=x>0?255:0,l=Math.abs(x);return q({r:G(d.r,M,l),g:G(d.g,M,l),b:G(d.b,M,l)})}function be(d,x){let M=ie(x)||{r:128,g:128,b:128},l=U(M,.35),u=U(M,0),g=U(M,-.35);d.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${l}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${u}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${g}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,d.style.backgroundColor="transparent"}function ve(d){try{navigator.clipboard.writeText(d).catch(()=>{})}catch{}}function Me(d){d&&(d.style.borderColor="#4ade80",d.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{d.style.borderColor="",d.style.boxShadow=""},500))}function oe(){let d=Y(f,a);return T?{r:255-d.r,g:255-d.g,b:255-d.b}:d}function N(){if(!t)return;let d=oe(),x=q(d);R&&be(R,x);let M=v.querySelector(".box-picker-hex");M&&(M.value=x),fe(),v._updateModeButtons&&v._updateModeButtons()}function fe(){if(!t)return;let d=ge[a],x=T?te(oe(),a):f,M=De(x,a),l=v.querySelectorAll(".box-picker-channel input"),u=v.querySelectorAll(".box-picker-channel label");for(let g=0;g<l.length;g++)u[g].textContent=d[g],u[g].style.color="",u[g].style.textShadow="none",l[g].value=String(M[g])}function j(){let d=oe(),x={rgb:d,hsb:J(d),oklch:se(d),hex:q(d),alpha:p};for(let M of w)M(x)}function me(){let d=Y(f,a);return{rgb:d,hsb:J(d),oklch:se(d),hex:q(d)}}N(),B();let re=d=>{f=te(d,a),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)};let x=S(f,V.scale,V.center);C=-1;for(let M=X.length-1;M>=0;M--)if(le(M,x,b,V.scale,V.center)){C=M;break}j(),N(),E()};return{getColor:me,getMode:()=>a,setColor:re,setAlpha:A,getAlpha:()=>p,setMode(d){W(d)},on(d,x){w.add(x)},off(d,x){w.delete(x)},destroy(){$.destroy(),O!==null&&cancelAnimationFrame(O),e.removeChild(v)}}}function Se(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:ie(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=ie(t[1]),i=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:i}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ee(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ee(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ue({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ue({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:de({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ee(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ue({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function xe(e,o,n=1){if(o==="hex")return q(e);if(o==="hex-alpha")return q(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Re(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Re(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=J(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=J(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Re(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=J(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=se(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ee(e,o,n){let t=o/100,r=n/100,i=(1-Math.abs(2*r-1))*t,c=i*(1-Math.abs(e/60%2-1)),s=r-i/2,a=0,h=0,b=0;return e<60?(a=i,h=c):e<120?(a=c,h=i):e<180?(h=i,b=c):e<240?(h=c,b=i):e<300?(a=c,b=i):(a=i,b=c),{r:Math.round((a+s)*255),g:Math.round((h+s)*255),b:Math.round((b+s)*255)}}function Re(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),i=Math.min(o,n,t),c=(r+i)/2;if(r===i)return{h:0,s:0,l:c*100};let s=r-i,a=c>.5?s/(2-r-i):s/(r+i),h=0;return r===o?h=((n-t)/s+(n<t?6:0))*60:r===n?h=((t-o)/s+2)*60:h=((o-n)/s+4)*60,{h,s:a*100,l:c*100}}var pe=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?Se(t,this.model):null;this.alpha=r?.alpha??1;let i=r?.rgb??{r:255,g:255,b:255},c=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=Ve(this.holder,{initialColor:i,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...c.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",s=>{this.internal||(this.internal=!0,this.alpha=s.alpha,this.setAttribute("value",xe(s.rgb,this.model,s.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:s})),this.dispatchEvent(new CustomEvent("color-changed",{detail:xe(s.rgb,this.model,s.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=Se(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||xe({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ye=class extends pe{constructor(){super("hex")}},To=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of To)customElements.get(e)||customElements.define(e,class extends pe{constructor(){super(o)}});var Lo=ye;return so(Vo);})();
