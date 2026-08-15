var ColorIsBoxElement=(()=>{var Re=Object.defineProperty;var so=Object.getOwnPropertyDescriptor;var io=Object.getOwnPropertyNames;var lo=Object.prototype.hasOwnProperty;var co=(e,o)=>()=>(e&&(o=e(e=0)),o);var De=(e,o)=>{for(var n in o)Re(e,n,{get:o[n],enumerable:!0})},uo=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of io(o))!lo.call(e,r)&&r!==n&&Re(e,r,{get:()=>o[r],enumerable:!(t=so(o,r))||t.enumerable});return e};var ho=e=>uo(Re({},"__esModule",{value:!0}),e);var to={};De(to,{createControls:()=>Ro});function eo(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function oo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Ro(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=h=>{let b=document.createElement("button");return b.textContent=h.toUpperCase(),b.addEventListener("click",()=>o.switchMode(h)),t.appendChild(b),b},i=r("oklch"),l=r("rgb"),s=r("hsb"),a=()=>{let h=o.mode();l.classList.toggle("active",h==="rgb"),s.classList.toggle("active",h==="hsb"),i.classList.toggle("active",h==="oklch")};a();let u=o.switchMode;o._markActive=a,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let b=t.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),t.addEventListener("click",()=>{eo(o.getRgbForCopy()?"#"+Eo(o.getRgbForCopy()):"#ffffff"),oo(t)});let r=document.createElement("div");r.className="box-picker-channels";let i=[],l=[],s=["R","G","B"];for(let b=0;b<3;b++){let y=document.createElement("div");y.className="box-picker-channel";let m=document.createElement("label");m.textContent=s[b];let x=document.createElement("input");x.type="text",x.inputMode="numeric",y.appendChild(m),y.appendChild(x),r.appendChild(y),i.push(x),l.push(m),x.addEventListener("change",()=>{let k=parseFloat(x.value);isNaN(k)||o.onChannelInput(b,k,255)}),x.addEventListener("click",()=>{let k=o.getRgbForCopy();eo(`${k.r}, ${k.g}, ${k.b}`),oo(x)})}let a=document.createElement("div");a.className="box-picker-hexrow";let u=document.createElement("div");u.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",u.appendChild(h),u.appendChild(t),a.appendChild(r),a.appendChild(u),e.appendChild(a),e._inputs={hexInput:t,inputs:i,labels:l}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let i=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);o.onRandom({r:i,g:l,b:s})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function Eo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var no=co(()=>{});var zo={};De(zo,{ColorIsBoxElement:()=>Te,createBoxColorPicker:()=>ao,createColorPicker:()=>ze,default:()=>Ho,setBoxInvert:()=>Se});var ke={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Oe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function te(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),i=Math.min(o,n,t),l=r-i,s=0;l!==0&&(r===o?s=((n-t)/l+6)%6:r===n?s=(t-o)/l+2:s=(o-n)/l+4,s*=60);let a=r===0?0:l/r*100,u=r*100;return{h:s,s:a,b:u}}function ye(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,i=r*(1-Math.abs(o/60%2-1)),l=t-r,s,a,u;return o<60?(s=r,a=i,u=0):o<120?(s=i,a=r,u=0):o<180?(s=0,a=r,u=i):o<240?(s=0,a=i,u=r):o<300?(s=i,a=0,u=r):(s=r,a=0,u=i),{r:Math.round((s+l)*255),g:Math.round((a+l)*255),b:Math.round((u+l)*255)}}function Ee(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ve(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function bo(e){let o=Ee(e.r/255),n=Ee(e.g/255),t=Ee(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,i=.2119034982*o+.6806995451*n+.1073969566*t,l=.0883024619*o+.2817188376*n+.6299787005*t,s=Math.cbrt(r),a=Math.cbrt(i),u=Math.cbrt(l);return{L:.2104542553*s+.793617785*a-.0040720468*u,a:1.9779984951*s-2.428592205*a+.4505937099*u,b:.0259040371*s+.7827717662*a-.808675766*u}}function fo(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,i=e-.0894841775*o-1.291485548*n,l=t*t*t,s=r*r*r,a=i*i*i,u=4.0767416621*l-3.3077115913*s+.2309699292*a,h=-1.2684380046*l+2.6097574011*s-.3413193965*a,b=-.0041960863*l-.7034186147*s+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,Ve(u)))*255),g:Math.round(Math.max(0,Math.min(1,Ve(h)))*255),b:Math.round(Math.max(0,Math.min(1,Ve(b)))*255)}}function be(e){let o=bo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function pe(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return fo(e.l,n,t)}function mo(e,o,n){let t=pe({l:e,c:o,h:n});if(_e(t))return{l:e,c:o,h:n};let r=0,i=o;for(let l=0;l<20;l++){let s=(r+i)/2;t=pe({l:e,c:s,h:n}),_e(t)?r=s:i=s}return{l:e,c:r,h:n}}function _e(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ne(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function fe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ge=.4;function ee(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ye({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Ge,r=e.z*359,i=mo(n,t,r);return pe(i)}}function ce(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=te(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=be(e);return{x:n.l,y:Math.min(n.c/Ge,1),z:n.h/359}}}function Ne(e,o){let n=Oe[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Ue(e,o,n,t,r,i=!1){let l;e===0?l={x:t,y:o,z:n}:e===1?l={x:o,y:t,z:n}:l={x:o,y:n,z:t};let s=ee(l,r);return i?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var Ke=Math.PI/6,go=Math.cos(Ke),xo=Math.sin(Ke),ve=!1;function Se(e){ve=e}function E(e,o,n){return{x:n.x+(e.y-e.x)*go*o,y:n.y+e.z*o-(e.x+e.y)*xo*o}}function po(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],yo=64,Xe={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function We(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function je(e,o,n,t,r,i,l=!0,s=null){let{ctx:a,scale:u,center:h,width:b,height:y}=e;a.save(),a.clearRect(0,0,b,y);let m=po(o).map(x=>E(x,u,h));if(Mo(a,u,h,r),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,Co(a,m,o,r),a.restore(),l&&Ao(a,r,u,h),t>=0){let x=ee(n,r),k=ve?{r:255-x.r,g:255-x.g,b:255-x.b}:x,A=E(n,u,h);s&&s.active&&wo(a,A,s.rgb,s.alpha),To(a,A,k)}a.restore()}var vo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Mo(e,o,n,t){let r=E({x:0,y:0,z:0},o,n),i=[E({x:1,y:0,z:0},o,n),E({x:0,y:1,z:0},o,n),E({x:0,y:0,z:1},o,n)],l=vo[t];e.lineWidth=1.5;for(let s=0;s<i.length;s++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(i[s].x,i[s].y),e.strokeStyle=l[s],e.stroke()}function Co(e,o,n,t){let r=[n.x,n.y,n.z];for(let i=0;i<Y.length;i++){let l=Y[i],s=r[l.fixedAxis],a=r[l.uAxis],u=r[l.vAxis];if(a<.002&&u<.002)continue;let h=l.quad.map(b=>o[b]);ko(e,h,l.fixedAxis,s,a,u,t)}}function ko(e,o,n,t,r,i,l){let s=yo,a=document.createElement("canvas");a.width=s,a.height=s;let u=a.getContext("2d"),h=u.createImageData(s,s),b=h.data;for(let Q=0;Q<s;Q++)for(let O=0;O<s;O++){let ae=O/(s-1)*r,F=Q/(s-1)*i,_=Ue(n,ae,F,t,l,ve),j=(Q*s+O)*4;b[j]=_.r,b[j+1]=_.g,b[j+2]=_.b,b[j+3]=255}u.putImageData(h,0,0);let y=o[0],m=o[1],x=o[2],k=o[3],A=m.x-y.x,C=m.y-y.y,T=k.x-y.x,V=k.y-y.y;e.save(),e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(m.x,m.y),e.lineTo(x.x,x.y),e.lineTo(k.x,k.y),e.closePath(),e.clip();let w=2/s,U=y.x-A*w-T*w,B=y.y-C*w-V*w,I=1+2*w,$=1+2*w;e.transform(A*I/s,C*I/s,T*$/s,V*$/s,U,B),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function Ao(e,o,n,t){let r=ke[o],i=ve?[E({x:0,y:1,z:1},n,t),E({x:1,y:0,z:1},n,t),E({x:1,y:1,z:0},n,t)]:[E({x:1,y:0,z:0},n,t),E({x:0,y:1,z:0},n,t),E({x:0,y:0,z:1},n,t)],l=ve?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let s=0;s<3;s++){let a=i[s].x+l[s].x,u=i[s].y+l[s].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[s],a,u)}e.globalAlpha=1,e.restore()}var q=30,re=13;function wo(e,o,n,t){let r=(q+re)/2,i=5,l=Math.floor(o.x/i)*i,s=Math.floor(o.y/i)*i,a=q*2+i*2,u=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,re,0,Math.PI*2,!0),e.clip();for(let A=-1;A*i<=a;A++)for(let C=-1;C*i<=a;C++)e.fillStyle=(A+C)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+A*i,s+C*i,i,i);let h="rgba("+n.r+","+n.g+","+n.b+",0)",b="rgba("+n.r+","+n.g+","+n.b+",1)",y=e;if(typeof y.createConicGradient=="function"){let A=y.createConicGradient(-Math.PI/2,o.x,o.y);A.addColorStop(0,h),A.addColorStop(1,b),e.fillStyle=A,e.fillRect(l-q,s-q,a,a)}else for(let C=0;C<36;C++){let T=-Math.PI/2+C/36*Math.PI*2,V=-Math.PI/2+(C+1)/36*Math.PI*2,w=(C+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*re,o.y+Math.sin(T)*re),e.arc(o.x,o.y,q,T,V),e.arc(o.x,o.y,re,V,T,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+w.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,re,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let m=u*Math.PI*2,x=o.x+r*Math.sin(m),k=o.y-r*Math.cos(m);e.beginPath(),e.arc(x,k,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function To(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Ze(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return E(r[e],n,t)}function He(){let e={x:0,y:0};return[E({x:1,y:0,z:0},1,e),E({x:0,y:1,z:0},1,e),E({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function me(e,o,n,t,r){let i=Y[e],l=[n.x,n.y,n.z],s=l[i.uAxis],a=l[i.vAxis];if(s<.002||a<.002)return null;let u={x:0,y:0,z:0},h=["x","y","z"];u[h[i.fixedAxis]]=l[i.fixedAxis];let b={...u};b[h[i.uAxis]]=s;let y={...u};y[h[i.vAxis]]=a;let m=E(u,t,r),x=E(b,t,r),k=E(y,t,r),A=x.x-m.x,C=x.y-m.y,T=k.x-m.x,V=k.y-m.y,w=A*V-C*T;if(Math.abs(w)<1e-6)return null;let U=o.x-m.x,B=o.y-m.y,I=(U*V-B*T)/w,$=(B*A-U*C)/w;return I<-.05||I>1.05||$<-.05||$>1.05?null:{s:Math.max(0,Math.min(1,I)),t:Math.max(0,Math.min(1,$))}}function Ye(e,o,n,t,r){let i=Y[e],l=[n.x,n.y,n.z],s=l[i.uAxis],a=l[i.vAxis];if(s<.002||a<.002)return null;let u={x:0,y:0,z:0},h=["x","y","z"];u[h[i.fixedAxis]]=l[i.fixedAxis];let b={...u};b[h[i.uAxis]]=s;let y={...u};y[h[i.vAxis]]=a;let m=E(u,t,r),x=E(b,t,r),k=E(y,t,r),A=x.x-m.x,C=x.y-m.y,T=k.x-m.x,V=k.y-m.y,w=A*V-C*T;if(Math.abs(w)<1e-6)return null;let U=o.x-m.x,B=o.y-m.y,I=(U*V-B*T)/w,$=(B*A-U*C)/w;return{s:Math.max(0,Math.min(1,I)),t:Math.max(0,Math.min(1,$))}}var Qe=22;function Je(e,o,n,t,r,i,l,s,a,u,h,b,y){let m={...Xe};function x(c){let f=e.getBoundingClientRect();return{x:c.clientX-f.left,y:c.clientY-f.top}}let k=!1,A=9,C=1e3,T=null;function V(){w(),T=setTimeout(U,C)}function w(){T!==null&&(clearTimeout(T),T=null)}function U(){T=null,m.alphaMode=!0,ge(),se(),a()}function B(c){let f=y();return Math.hypot(c.x-f.x,c.y-f.y)}function I(c){let f=y();return(Math.atan2(c.x-f.x,-(c.y-f.y))+Math.PI*2)%(Math.PI*2)}function $(c){h(I(c)/(Math.PI*2)),a()}function Q(c){let f=B(c);return f>=re-4&&f<=q+6}function O(c){let f=o(),v=l(),M=s();for(let L=0;L<3;L++){let R=Ze(L,f,v,M),H=c.x-R.x,X=c.y-R.y;if(H*H+X*X<=Qe*Qe)return L}return-1}function ae(c){let f=o(),v=l(),M=s();for(let L=Y.length-1;L>=0;L--){let R=me(L,c,f,v,M);if(R)return{faceIndex:L,...R}}return null}let F=-1,_={x:0,y:0},j=0;function de(c,f){F=c,_=f,j=o()[["x","y","z"][c]],m.draggingAxisHandle=c,e.style.cursor="grabbing",a()}function ue(c){if(w(),F<0)return;let f=c.x-_.x,v=c.y-_.y,L=He()[F],R=l(),X=(f*L.x+v*L.y)/R,Z=Math.max(0,Math.min(1,j+X)),W=o(),G=["x","y","z"],he={...W,[G[F]]:Z};n(he);let xe=t(),Be=i(),$e=Be>=0?Y[Be]:null,Le={...xe};$e&&F===$e.fixedAxis?Le[G[F]]=Z:Le[G[F]]=Math.min(xe[G[F]],Z),r(Le,i()),a()}function ge(){F=-1,m.draggingAxisHandle=-1}let K=-1,oe=null,N=null,D=!1;function Me(c,f,v,M){K=c,m.draggingFace=c,oe=null,N=null,D=!1,M&&(D=!0,N={s:f,t:v}),Ce(c,f,v),e.style.cursor="crosshair",a()}function J(c,f,v){if(w(),K<0)return;let M=o(),L=l(),R=s(),H=me(K,c,M,L,R),X=K;if(!H&&!v){for(let G=Y.length-1;G>=0;G--)if(G!==K&&(H=me(G,c,M,L,R),H)){X=G;break}}if(!H&&v&&(H=Ye(K,c,M,L,R),X=K),!H){a();return}X!==K&&(K=X,m.draggingFace=X,oe=null,D=!1,N=null);let{s:Z,t:W}=H;if(f&&N){if(D){let G=Math.abs(Z-N.s),he=Math.abs(W-N.t),xe=.02;(G>xe||he>xe)&&(oe=G>=he?"u":"v",D=!1)}oe==="u"?W=N.t:oe==="v"&&(Z=N.s)}else f||(oe=null,D=!1,N=null);Ce(X,Z,W),a()}function Ce(c,f,v){let M=Y[c],L=o(),R=["x","y","z"],H={...t()};H[R[M.uAxis]]=f*L[R[M.uAxis]],H[R[M.vAxis]]=v*L[R[M.vAxis]],H[R[M.fixedAxis]]=L[R[M.fixedAxis]],r(H,c)}function se(){K=-1,m.draggingFace=-1,oe=null,D=!1,N=null}function d(c){let f=x(c);if(u()){if(m.alphaMode){if(B(f)<=A){m.alphaMode=!1,a();return}if(Q(f)){c.preventDefault(),k=!0,$(f);return}m.alphaMode=!1,a();return}B(f)<=A&&V()}let v=O(f);if(v>=0){c.preventDefault(),de(v,f);return}let M=ae(f);M&&(c.preventDefault(),Me(M.faceIndex,M.s,M.t,c.shiftKey))}function g(c){let f=x(c);if(k){c.preventDefault(),$(f);return}if(F>=0){c.preventDefault(),ue(f);return}if(K>=0){c.preventDefault(),J(f,c.shiftKey,c.altKey);return}let v=O(f),M=ae(f),L=v,R=v>=0?-1:M?M.faceIndex:-1;(L!==m.hoveredAxisHandle||R!==m.hoveredFace)&&(m.hoveredAxisHandle=L,m.hoveredFace=R,e.style.cursor=L>=0?"grab":R>=0?"crosshair":"default",a())}function p(c){w(),k=!1;let f=F>=0||K>=0;ge(),se(),f&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",a())}function z(c){if(c.touches.length!==1)return;let f=x(c.touches[0]);if(u()){if(m.alphaMode){if(B(f)<=A){m.alphaMode=!1,a();return}if(Q(f)){c.preventDefault(),k=!0,$(f);return}m.alphaMode=!1,a();return}B(f)<=A&&V()}let v=O(f);if(v>=0){c.preventDefault(),de(v,f);return}let M=ae(f);M&&(c.preventDefault(),Me(M.faceIndex,M.s,M.t,!1))}function P(c){if(c.touches.length!==1)return;let f=x(c.touches[0]);k?(c.preventDefault(),$(f)):F>=0?(c.preventDefault(),ue(f)):K>=0&&(c.preventDefault(),J(f,!1,!1))}function S(c){w(),k=!1,ge(),se(),a()}function ie(c){if(m.alphaMode){if(c.key==="Escape"){m.alphaMode=!1,a();return}if(c.key==="ArrowUp"||c.key==="ArrowRight"){c.preventDefault(),h(Math.min(1,b()+(c.shiftKey?.08:.02))),a();return}if(c.key==="ArrowDown"||c.key==="ArrowLeft"){c.preventDefault(),h(Math.max(0,b()-(c.shiftKey?.08:.02))),a();return}}let f=c.shiftKey?.04:.004,v=t(),M=o(),L=He(),R=0,H=0;switch(c.key){case"ArrowRight":R=1;break;case"ArrowLeft":R=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}c.preventDefault();let X={...v},Z=["x","y","z"];for(let W=0;W<3;W++){let G=R*L[W].x+H*L[W].y;if(Math.abs(G)>.3){let he=v[Z[W]]+f*Math.sign(G);X[Z[W]]=Math.max(0,Math.min(M[Z[W]],he))}}r(X,i()),a()}e.addEventListener("mousedown",d),window.addEventListener("mousemove",g),window.addEventListener("mouseup",p),e.addEventListener("touchstart",z,{passive:!1}),e.addEventListener("touchmove",P,{passive:!1}),e.addEventListener("touchend",S),e.addEventListener("keydown",ie),e.setAttribute("tabindex","0");function le(){w(),e.removeEventListener("mousedown",d),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",p),e.removeEventListener("touchstart",z),e.removeEventListener("touchmove",P),e.removeEventListener("touchend",S),e.removeEventListener("keydown",ie)}return{state:m,destroy:le}}var qe=`.box-picker {\r
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
`;var ze=ao,ro=!1;function Vo(){if(ro||typeof document>"u")return;ro=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=qe,document.head.appendChild(e)}function ao(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,i=o.showModeToggle??!1,l=o.showCorners??!1,s={mode:()=>a,switchMode:d=>Q(d),onHexInput:d=>{let g=fe(d);g?(b=ce(I?{r:255-g.r,g:255-g.g,b:255-g.b}:g,a),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)},J(),D(),_()):D()},onChannelInput:(d,g,p)=>{let z=Math.max(0,Math.min(p,g)),P=["x","y","z"],S=z/p;if(I){let ie={...b,[P[d]]:S},le=ee(ie,a);b=ce({r:255-le.r,g:255-le.g,b:255-le.b},a)}else b={...b,[P[d]]:S};S>h[P[d]]&&(h={...h,[P[d]]:S}),J(),D(),_()},getRgbForCopy:()=>ee(b,a),onRandom:d=>se(d),onReset:()=>se({r:0,g:0,b:0})},a=o.mode??"rgb",u=o.initialColor?ce(o.initialColor,a):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},b={...u},y=0,m=()=>o.alpha!==void 0,x=Math.max(0,Math.min(1,o.alpha??1));function k(d){let g=Math.max(0,Math.min(1,d));g!==x&&(x=g,J(),D(),_())}let A=new Set;Vo();let C=document.createElement("div");C.className="box-picker";let T=document.createElement("canvas");T.style.cursor="grab",C.appendChild(T);let V=We(T,n),w=null,U=document.createElement("div");U.className="box-picker-controls",w=document.createElement("div"),w.className="box-picker-swatch",U.appendChild(w),C.appendChild(U),(r||i||l)&&Promise.resolve().then(()=>(no(),to)).then(d=>{d.createControls(U,s,{showInputs:r,showModeToggle:i,showCorners:l})}).catch(()=>{}),e.appendChild(C);let B=Je(T,()=>h,d=>{h=d},()=>b,(d,g)=>{b=d,y=g,J(),D()},()=>y,()=>V.scale,()=>V.center,_,m,k,()=>x,()=>E(b,V.scale,V.center)),I=!1,$=!0;T.addEventListener("mouseenter",()=>{$=!0,_()}),T.addEventListener("mouseleave",()=>{$=!1,_()}),T.addEventListener("dblclick",()=>{I=!I,Se(I),J(),D(),_()});function Q(d){if(d===a)return;let g=ee(b,a),p={...b},z={...h};a=d;let P=ce(g,a),S={x:1,y:1,z:1};b=P,h=S,ae(p,P,z,S,300),D()}let O=null;function ae(d,g,p,z,P){O!==null&&cancelAnimationFrame(O);let S=performance.now();function ie(le){let c=le-S,f=Math.min(1,c/P),v=1-Math.pow(1-f,3);b={x:d.x+(g.x-d.x)*v,y:d.y+(g.y-d.y)*v,z:d.z+(g.z-d.z)*v},h={x:p.x+(z.x-p.x)*v,y:p.y+(z.y-p.y)*v,z:p.z+(z.z-p.z)*v},j(),J(),f<1?O=requestAnimationFrame(ie):O=null}O=requestAnimationFrame(ie)}let F=!1;function _(){F||(F=!0,requestAnimationFrame(()=>{F=!1,j()}))}function j(){je(V,h,b,y,a,B.state,$,{active:B.state.alphaMode,alpha:x,rgb:N()})}function de(d,g,p){return Math.round(d+(g-d)*p)}function ue(d,g){let p=g>0?255:0,z=Math.abs(g);return ne({r:de(d.r,p,z),g:de(d.g,p,z),b:de(d.b,p,z)})}function ge(d,g){let p=fe(g)||{r:128,g:128,b:128},z=ue(p,.35),P=ue(p,0),S=ue(p,-.35);d.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${z}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${P}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,d.style.backgroundColor="transparent"}function K(d){try{navigator.clipboard.writeText(d).catch(()=>{})}catch{}}function oe(d){d&&(d.style.borderColor="#4ade80",d.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{d.style.borderColor="",d.style.boxShadow=""},500))}function N(){let d=ee(b,a);return I?{r:255-d.r,g:255-d.g,b:255-d.b}:d}function D(){if(!t)return;let d=N(),g=ne(d);w&&ge(w,g);let p=C.querySelector(".box-picker-hex");p&&(p.value=g),Me(),C._updateModeButtons&&C._updateModeButtons()}function Me(){if(!t)return;let d=ke[a],g=I?ce(N(),a):b,p=Ne(g,a),z=C.querySelectorAll(".box-picker-channel input"),P=C.querySelectorAll(".box-picker-channel label");for(let S=0;S<z.length;S++)P[S].textContent=d[S],P[S].style.color="",P[S].style.textShadow="none",z[S].value=String(p[S])}function J(){let d=N(),g={rgb:d,hsb:te(d),oklch:be(d),hex:ne(d),alpha:x};for(let p of A)p(g)}function Ce(){let d=ee(b,a);return{rgb:d,hsb:te(d),oklch:be(d),hex:ne(d)}}D(),j();let se=d=>{b=ce(d,a),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)};let g=E(b,V.scale,V.center);y=-1;for(let p=Y.length-1;p>=0;p--)if(me(p,g,h,V.scale,V.center)){y=p;break}J(),D(),_()};return{getColor:Ce,getMode:()=>a,setColor:se,setAlpha:k,getAlpha:()=>x,setMode(d){Q(d)},on(d,g){A.add(g)},off(d,g){A.delete(g)},destroy(){B.destroy(),O!==null&&cancelAnimationFrame(O),e.removeChild(C)}}}function Pe(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:fe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=fe(t[1]),i=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:i}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ie(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ie(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ye({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ye({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:pe({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ie(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ye({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Ae(e,o,n=1){if(o==="hex")return ne(e);if(o==="hex-alpha")return ne(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Fe(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Fe(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=te(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=te(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Fe(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=te(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=be(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ie(e,o,n){let t=o/100,r=n/100,i=(1-Math.abs(2*r-1))*t,l=i*(1-Math.abs(e/60%2-1)),s=r-i/2,a=0,u=0,h=0;return e<60?(a=i,u=l):e<120?(a=l,u=i):e<180?(u=i,h=l):e<240?(u=l,h=i):e<300?(a=l,h=i):(a=i,h=l),{r:Math.round((a+s)*255),g:Math.round((u+s)*255),b:Math.round((h+s)*255)}}function Fe(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),i=Math.min(o,n,t),l=(r+i)/2;if(r===i)return{h:0,s:0,l:l*100};let s=r-i,a=l>.5?s/(2-r-i):s/(r+i),u=0;return r===o?u=((n-t)/s+(n<t?6:0))*60:r===n?u=((t-o)/s+2)*60:u=((o-n)/s+4)*60,{h:u,s:a*100,l:l*100}}var we=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?Pe(t,this.model):null;this.alpha=r?.alpha??1;let i=r?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=ze(this.holder,{initialColor:i,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",s=>{this.internal||(this.internal=!0,this.alpha=s.alpha,this.setAttribute("value",Ae(s.rgb,this.model,s.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:s})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Ae(s.rgb,this.model,s.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=Pe(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Ae({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Te=class extends we{constructor(){super("hex")}},So=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of So)customElements.get(e)||customElements.define(e,class extends we{constructor(){super(o)}});var Ho=Te;return ho(zo);})();
