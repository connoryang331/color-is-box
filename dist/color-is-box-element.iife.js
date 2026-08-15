var ColorIsBoxElement=(()=>{var be=Object.defineProperty;var Ge=Object.getOwnPropertyDescriptor;var $e=Object.getOwnPropertyNames;var Ne=Object.prototype.hasOwnProperty;var Xe=(e,o)=>()=>(e&&(o=e(e=0)),o);var ve=(e,o)=>{for(var n in o)be(e,n,{get:o[n],enumerable:!0})},Ke=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of $e(o))!Ne.call(e,s)&&s!==n&&be(e,s,{get:()=>o[s],enumerable:!(t=Ge(o,s))||t.enumerable});return e};var Ue=e=>Ke(be({},"__esModule",{value:!0}),e);var Oe={};ve(Oe,{createControls:()=>io});function Ie(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Be(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function io(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let s=h=>{let b=document.createElement("button");return b.textContent=h.toUpperCase(),b.addEventListener("click",()=>o.switchMode(h)),t.appendChild(b),b},c=s("oklch"),d=s("rgb"),r=s("hsb"),i=()=>{let h=o.mode();d.classList.toggle("active",h==="rgb"),r.classList.toggle("active",h==="hsb"),c.classList.toggle("active",h==="oklch")};i();let l=o.switchMode;o._markActive=i,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let b=t.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),t.addEventListener("click",()=>{Ie(o.getRgbForCopy()?"#"+co(o.getRgbForCopy()):"#ffffff"),Be(t)});let s=document.createElement("div");s.className="box-picker-channels";let c=[],d=[],r=["R","G","B"];for(let b=0;b<3;b++){let C=document.createElement("div");C.className="box-picker-channel";let m=document.createElement("label");m.textContent=r[b];let y=document.createElement("input");y.type="text",y.inputMode="numeric",C.appendChild(m),C.appendChild(y),s.appendChild(C),c.push(y),d.push(m),y.addEventListener("change",()=>{let k=parseFloat(y.value);isNaN(k)||o.onChannelInput(b,k,255)}),y.addEventListener("click",()=>{let k=o.getRgbForCopy();Ie(`${k.r}, ${k.g}, ${k.b}`),Be(y)})}let i=document.createElement("div");i.className="box-picker-hexrow";let l=document.createElement("div");l.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",l.appendChild(h),l.appendChild(t),i.appendChild(s),i.appendChild(l),e.appendChild(i),e._inputs={hexInput:t,inputs:c,labels:d}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),r=Math.floor(Math.random()*256);o.onRandom({r:c,g:d,b:r})}),e.appendChild(t);let s=document.createElement("button");s.className="box-corner-btn box-corner-right",s.title="Reset",s.setAttribute("aria-label","Reset"),s.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',s.addEventListener("click",()=>o.onReset()),e.appendChild(s)}}function co(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var De=Xe(()=>{});var xo={};ve(xo,{ColorIsBoxElement:()=>ce,createBoxColorPicker:()=>_e,createColorPicker:()=>pe,default:()=>fo,setBoxInvert:()=>me});var ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ce={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Q(e){let o=e.r/255,n=e.g/255,t=e.b/255,s=Math.max(o,n,t),c=Math.min(o,n,t),d=s-c,r=0;d!==0&&(s===o?r=((n-t)/d+6)%6:s===n?r=(t-o)/d+2:r=(o-n)/d+4,r*=60);let i=s===0?0:d/s*100,l=s*100;return{h:r,s:i,b:l}}function xe(e){let o=e.h,n=e.s/100,t=e.b/100,s=t*n,c=s*(1-Math.abs(o/60%2-1)),d=t-s,r,i,l;return o<60?(r=s,i=c,l=0):o<120?(r=c,i=s,l=0):o<180?(r=0,i=s,l=c):o<240?(r=0,i=c,l=s):o<300?(r=c,i=0,l=s):(r=s,i=0,l=c),{r:Math.round((r+d)*255),g:Math.round((i+d)*255),b:Math.round((l+d)*255)}}function he(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function fe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function je(e){let o=he(e.r/255),n=he(e.g/255),t=he(e.b/255),s=.4122214708*o+.5363325363*n+.0514459929*t,c=.2119034982*o+.6806995451*n+.1073969566*t,d=.0883024619*o+.2817188376*n+.6299787005*t,r=Math.cbrt(s),i=Math.cbrt(c),l=Math.cbrt(d);return{L:.2104542553*r+.793617785*i-.0040720468*l,a:1.9779984951*r-2.428592205*i+.4505937099*l,b:.0259040371*r+.7827717662*i-.808675766*l}}function qe(e,o,n){let t=e+.3963377774*o+.2158037573*n,s=e-.1055613458*o-.0638541728*n,c=e-.0894841775*o-1.291485548*n,d=t*t*t,r=s*s*s,i=c*c*c,l=4.0767416621*d-3.3077115913*r+.2309699292*i,h=-1.2684380046*d+2.6097574011*r-.3413193965*i,b=-.0041960863*d-.7034186147*r+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,fe(l)))*255),g:Math.round(Math.max(0,Math.min(1,fe(h)))*255),b:Math.round(Math.max(0,Math.min(1,fe(b)))*255)}}function J(e){let o=je(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function ne(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return qe(e.l,n,t)}function We(e,o,n){let t=ne({l:e,c:o,h:n});if(Me(t))return{l:e,c:o,h:n};let s=0,c=o;for(let d=0;d<20;d++){let r=(s+c)/2;t=ne({l:e,c:r,h:n}),Me(t)?s=r:c=r}return{l:e,c:s,h:n}}function Me(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function q(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ee(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ke=.4;function K(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return xe({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*ke,s=e.z*359,c=We(n,t,s);return ne(c)}}function Z(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Q(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=J(e);return{x:n.l,y:Math.min(n.c/ke,1),z:n.h/359}}}function Ae(e,o){let n=Ce[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function we(e,o,n,t,s,c=!1){let d;e===0?d={x:t,y:o,z:n}:e===1?d={x:o,y:t,z:n}:d={x:o,y:n,z:t};let r=K(d,s);return c?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var Le=Math.PI/6,Ze=Math.cos(Le),Ye=Math.sin(Le),re=!1;function me(e){re=e}function E(e,o,n){return{x:n.x+(e.y-e.x)*Ze*o,y:n.y+e.z*o-(e.x+e.y)*Ye*o}}function Qe(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var _=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Je=64,Te={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Ee(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Re(e,o,n,t,s,c,d=!0){let{ctx:r,scale:i,center:l,width:h,height:b}=e;r.save(),r.clearRect(0,0,h,b);let C=Qe(o).map(m=>E(m,i,l));if(oo(r,i,l,s),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,to(r,C,o,s),r.restore(),d&&ro(r,s,i,l),t>=0){let m=K(n,s),y=re?{r:255-m.r,g:255-m.g,b:255-m.b}:m,k=E(n,i,l);so(r,k,y)}r.restore()}var eo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function oo(e,o,n,t){let s=E({x:0,y:0,z:0},o,n),c=[E({x:1,y:0,z:0},o,n),E({x:0,y:1,z:0},o,n),E({x:0,y:0,z:1},o,n)],d=eo[t];e.lineWidth=1.5;for(let r=0;r<c.length;r++)e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(c[r].x,c[r].y),e.strokeStyle=d[r],e.stroke()}function to(e,o,n,t){let s=[n.x,n.y,n.z];for(let c=0;c<_.length;c++){let d=_[c],r=s[d.fixedAxis],i=s[d.uAxis],l=s[d.vAxis];if(i<.002&&l<.002)continue;let h=d.quad.map(b=>o[b]);no(e,h,d.fixedAxis,r,i,l,t)}}function no(e,o,n,t,s,c,d){let r=Je,i=document.createElement("canvas");i.width=r,i.height=r;let l=i.getContext("2d"),h=l.createImageData(r,r),b=h.data;for(let P=0;P<r;P++)for(let B=0;B<r;B++){let U=B/(r-1)*s,j=P/(r-1)*c,G=we(n,U,j,t,d,re),N=(P*r+B)*4;b[N]=G.r,b[N+1]=G.g,b[N+2]=G.b,b[N+3]=255}l.putImageData(h,0,0);let C=o[0],m=o[1],y=o[2],k=o[3],H=m.x-C.x,F=m.y-C.y,I=k.x-C.x,T=k.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(m.x,m.y),e.lineTo(y.x,y.y),e.lineTo(k.x,k.y),e.closePath(),e.clip();let A=2/r,R=C.x-H*A-I*A,S=C.y-F*A-T*A,z=1+2*A,O=1+2*A;e.transform(H*z/r,F*z/r,I*O/r,T*O/r,R,S),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function ro(e,o,n,t){let s=ae[o],c=re?[E({x:0,y:1,z:1},n,t),E({x:1,y:0,z:1},n,t),E({x:1,y:1,z:0},n,t)]:[E({x:1,y:0,z:0},n,t),E({x:0,y:1,z:0},n,t),E({x:0,y:0,z:1},n,t)],d=re?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let r=0;r<3;r++){let i=c[r].x+d[r].x,l=c[r].y+d[r].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(s[r],i,l)}e.globalAlpha=1,e.restore()}function so(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Ve(e,o,n,t){let s=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return E(s[e],n,t)}function ge(){let e={x:0,y:0};return[E({x:1,y:0,z:0},1,e),E({x:0,y:1,z:0},1,e),E({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function oe(e,o,n,t,s){let c=_[e],d=[n.x,n.y,n.z],r=d[c.uAxis],i=d[c.vAxis];if(r<.002||i<.002)return null;let l={x:0,y:0,z:0},h=["x","y","z"];l[h[c.fixedAxis]]=d[c.fixedAxis];let b={...l};b[h[c.uAxis]]=r;let C={...l};C[h[c.vAxis]]=i;let m=E(l,t,s),y=E(b,t,s),k=E(C,t,s),H=y.x-m.x,F=y.y-m.y,I=k.x-m.x,T=k.y-m.y,A=H*T-F*I;if(Math.abs(A)<1e-6)return null;let R=o.x-m.x,S=o.y-m.y,z=(R*T-S*I)/A,O=(S*H-R*F)/A;return z<-.05||z>1.05||O<-.05||O>1.05?null:{s:Math.max(0,Math.min(1,z)),t:Math.max(0,Math.min(1,O))}}function He(e,o,n,t,s){let c=_[e],d=[n.x,n.y,n.z],r=d[c.uAxis],i=d[c.vAxis];if(r<.002||i<.002)return null;let l={x:0,y:0,z:0},h=["x","y","z"];l[h[c.fixedAxis]]=d[c.fixedAxis];let b={...l};b[h[c.uAxis]]=r;let C={...l};C[h[c.vAxis]]=i;let m=E(l,t,s),y=E(b,t,s),k=E(C,t,s),H=y.x-m.x,F=y.y-m.y,I=k.x-m.x,T=k.y-m.y,A=H*T-F*I;if(Math.abs(A)<1e-6)return null;let R=o.x-m.x,S=o.y-m.y,z=(R*T-S*I)/A,O=(S*H-R*F)/A;return{s:Math.max(0,Math.min(1,z)),t:Math.max(0,Math.min(1,O))}}var ze=22;function Se(e,o,n,t,s,c,d,r,i){let l={...Te};function h(f){let g=e.getBoundingClientRect();return{x:f.clientX-g.left,y:f.clientY-g.top}}function b(f){let g=o(),w=d(),p=r();for(let a=0;a<3;a++){let u=Ve(a,g,w,p),x=f.x-u.x,M=f.y-u.y;if(x*x+M*M<=ze*ze)return a}return-1}function C(f){let g=o(),w=d(),p=r();for(let a=_.length-1;a>=0;a--){let u=oe(a,f,g,w,p);if(u)return{faceIndex:a,...u}}return null}let m=-1,y={x:0,y:0},k=0;function H(f,g){m=f,y=g,k=o()[["x","y","z"][f]],l.draggingAxisHandle=f,e.style.cursor="grabbing",i()}function F(f){if(m<0)return;let g=f.x-y.x,w=f.y-y.y,a=ge()[m],u=d(),M=(g*a.x+w*a.y)/u,L=Math.max(0,Math.min(1,k+M)),v=o(),V=["x","y","z"],D={...v,[V[m]]:L};n(D);let W=t(),te=c(),X=te>=0?_[te]:null,ue={...W};X&&m===X.fixedAxis?ue[V[m]]=L:ue[V[m]]=Math.min(W[V[m]],L),s(ue,c()),i()}function I(){m=-1,l.draggingAxisHandle=-1}let T=-1,A=null,R=null,S=!1;function z(f,g,w,p){T=f,l.draggingFace=f,A=null,R=null,S=!1,p&&(S=!0,R={s:g,t:w}),P(f,g,w),e.style.cursor="crosshair",i()}function O(f,g,w){if(T<0)return;let p=o(),a=d(),u=r(),x=oe(T,f,p,a,u),M=T;if(!x&&!w){for(let V=_.length-1;V>=0;V--)if(V!==T&&(x=oe(V,f,p,a,u),x)){M=V;break}}if(!x&&w&&(x=He(T,f,p,a,u),M=T),!x){i();return}M!==T&&(T=M,l.draggingFace=M,A=null,S=!1,R=null);let{s:L,t:v}=x;if(g&&R){if(S){let V=Math.abs(L-R.s),D=Math.abs(v-R.t),W=.02;(V>W||D>W)&&(A=V>=D?"u":"v",S=!1)}A==="u"?v=R.t:A==="v"&&(L=R.s)}else g||(A=null,S=!1,R=null);P(M,L,v),i()}function P(f,g,w){let p=_[f],a=o(),u=["x","y","z"],x={...t()};x[u[p.uAxis]]=g*a[u[p.uAxis]],x[u[p.vAxis]]=w*a[u[p.vAxis]],x[u[p.fixedAxis]]=a[u[p.fixedAxis]],s(x,f)}function B(){T=-1,l.draggingFace=-1,A=null,S=!1,R=null}function U(f){let g=h(f),w=b(g);if(w>=0){f.preventDefault(),H(w,g);return}let p=C(g);p&&(f.preventDefault(),z(p.faceIndex,p.s,p.t,f.shiftKey))}function j(f){let g=h(f);if(m>=0){f.preventDefault(),F(g);return}if(T>=0){f.preventDefault(),O(g,f.shiftKey,f.altKey);return}let w=b(g),p=C(g),a=w,u=w>=0?-1:p?p.faceIndex:-1;(a!==l.hoveredAxisHandle||u!==l.hoveredFace)&&(l.hoveredAxisHandle=a,l.hoveredFace=u,e.style.cursor=a>=0?"grab":u>=0?"crosshair":"default",i())}function G(f){let g=m>=0||T>=0;I(),B(),g&&(l.hoveredAxisHandle=-1,l.hoveredFace=-1,e.style.cursor="default",i())}function N(f){if(f.touches.length!==1)return;let g=h(f.touches[0]),w=b(g);if(w>=0){f.preventDefault(),H(w,g);return}let p=C(g);p&&(f.preventDefault(),z(p.faceIndex,p.s,p.t,!1))}function le(f){if(f.touches.length!==1)return;let g=h(f.touches[0]);m>=0?(f.preventDefault(),F(g)):T>=0&&(f.preventDefault(),O(g,!1,!1))}function de(f){I(),B(),i()}function Y(f){let g=f.shiftKey?.04:.004,w=t(),p=o(),a=ge(),u=0,x=0;switch(f.key){case"ArrowRight":u=1;break;case"ArrowLeft":u=-1;break;case"ArrowUp":x=-1;break;case"ArrowDown":x=1;break;default:return}f.preventDefault();let M={...w},L=["x","y","z"];for(let v=0;v<3;v++){let V=u*a[v].x+x*a[v].y;if(Math.abs(V)>.3){let D=w[L[v]]+g*Math.sign(V);M[L[v]]=Math.max(0,Math.min(p[L[v]],D))}}s(M,c()),i()}e.addEventListener("mousedown",U),window.addEventListener("mousemove",j),window.addEventListener("mouseup",G),e.addEventListener("touchstart",N,{passive:!1}),e.addEventListener("touchmove",le,{passive:!1}),e.addEventListener("touchend",de),e.addEventListener("keydown",Y),e.setAttribute("tabindex","0");function $(){e.removeEventListener("mousedown",U),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",G),e.removeEventListener("touchstart",N),e.removeEventListener("touchmove",le),e.removeEventListener("touchend",de),e.removeEventListener("keydown",Y)}return{state:l,destroy:$}}var Fe=`.box-picker {\r
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
`;var pe=_e,Pe=!1;function lo(){if(Pe||typeof document>"u")return;Pe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Fe,document.head.appendChild(e)}function _e(e,o={}){let n=o.size??300,t=o.controls??!0,s=o.showInputs??!1,c=o.showModeToggle??!1,d=o.showCorners??!1,r={mode:()=>i,switchMode:a=>S(a),onHexInput:a=>{let u=ee(a);u?(b=Z(A?{r:255-u.r,g:255-u.g,b:255-u.b}:u,i),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)},g(),$(),B()):$()},onChannelInput:(a,u,x)=>{let M=Math.max(0,Math.min(x,u)),L=["x","y","z"],v=M/x;if(A){let V={...b,[L[a]]:v},D=K(V,i);b=Z({r:255-D.r,g:255-D.g,b:255-D.b},i)}else b={...b,[L[a]]:v};v>h[L[a]]&&(h={...h,[L[a]]:v}),g(),$(),B()},getRgbForCopy:()=>K(b,i),onRandom:a=>p(a),onReset:()=>p({r:0,g:0,b:0})},i=o.mode??"rgb",l=o.initialColor?Z(o.initialColor,i):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},b={...l},C=0,m=new Set;lo();let y=document.createElement("div");y.className="box-picker";let k=document.createElement("canvas");k.style.cursor="grab",y.appendChild(k);let H=Ee(k,n),F=null,I=document.createElement("div");I.className="box-picker-controls",F=document.createElement("div"),F.className="box-picker-swatch",I.appendChild(F),y.appendChild(I),(s||c||d)&&Promise.resolve().then(()=>(De(),Oe)).then(a=>{a.createControls(I,r,{showInputs:s,showModeToggle:c,showCorners:d})}).catch(()=>{}),e.appendChild(y);let T=Se(k,()=>h,a=>{h=a},()=>b,(a,u)=>{b=a,C=u,g(),$()},()=>C,()=>H.scale,()=>H.center,B),A=!1,R=!0;k.addEventListener("mouseenter",()=>{R=!0,B()}),k.addEventListener("mouseleave",()=>{R=!1,B()}),k.addEventListener("dblclick",()=>{A=!A,me(A),g(),$(),B()});function S(a){if(a===i)return;let u=K(b,i),x={...b},M={...h};i=a;let L=Z(u,i),v={x:1,y:1,z:1};b=L,h=v,O(x,L,M,v,300),$()}let z=null;function O(a,u,x,M,L){z!==null&&cancelAnimationFrame(z);let v=performance.now();function V(D){let W=D-v,te=Math.min(1,W/L),X=1-Math.pow(1-te,3);b={x:a.x+(u.x-a.x)*X,y:a.y+(u.y-a.y)*X,z:a.z+(u.z-a.z)*X},h={x:x.x+(M.x-x.x)*X,y:x.y+(M.y-x.y)*X,z:x.z+(M.z-x.z)*X},U(),g(),te<1?z=requestAnimationFrame(V):z=null}z=requestAnimationFrame(V)}let P=!1;function B(){P||(P=!0,requestAnimationFrame(()=>{P=!1,U()}))}function U(){Re(H,h,b,C,i,T.state,R)}function j(a,u,x){return Math.round(a+(u-a)*x)}function G(a,u){let x=u>0?255:0,M=Math.abs(u);return q({r:j(a.r,x,M),g:j(a.g,x,M),b:j(a.b,x,M)})}function N(a,u){let x=ee(u)||{r:128,g:128,b:128},M=G(x,.35),L=G(x,0),v=G(x,-.35);a.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${M}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${v}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,a.style.backgroundColor="transparent"}function le(a){try{navigator.clipboard.writeText(a).catch(()=>{})}catch{}}function de(a){a&&(a.style.borderColor="#4ade80",a.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{a.style.borderColor="",a.style.boxShadow=""},500))}function Y(){let a=K(b,i);return A?{r:255-a.r,g:255-a.g,b:255-a.b}:a}function $(){if(!t)return;let a=Y(),u=q(a);F&&N(F,u);let x=y.querySelector(".box-picker-hex");x&&(x.value=u),f(),y._updateModeButtons&&y._updateModeButtons()}function f(){if(!t)return;let a=ae[i],u=A?Z(Y(),i):b,x=Ae(u,i),M=y.querySelectorAll(".box-picker-channel input"),L=y.querySelectorAll(".box-picker-channel label");for(let v=0;v<M.length;v++)L[v].textContent=a[v],L[v].style.color="",L[v].style.textShadow="none",M[v].value=String(x[v])}function g(){let a=Y(),u={rgb:a,hsb:Q(a),oklch:J(a),hex:q(a)};for(let x of m)x(u)}function w(){let a=K(b,i);return{rgb:a,hsb:Q(a),oklch:J(a),hex:q(a)}}$(),U();let p=a=>{b=Z(a,i),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)};let u=E(b,H.scale,H.center);C=-1;for(let x=_.length-1;x>=0;x--)if(oe(x,u,h,H.scale,H.center)){C=x;break}g(),$(),B()};return{getColor:w,getMode:()=>i,setColor:p,setMode(a){S(a)},on(a,u){m.add(u)},off(a,u){m.delete(u)},destroy(){T.destroy(),z!==null&&cancelAnimationFrame(z),e.removeChild(y)}}}function ye(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:ee(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let s=ee(t[1]),c=t[2]?parseInt(t[2],16)/255:1;return{rgb:s,alpha:c}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?uo(+t[1],+t[2],+t[3]):null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?xe({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:ne({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function se(e,o,n=1){if(o==="hex")return q(e);if(o==="hex-alpha")return q(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="hsl"){let s=bo(e);return`${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%`}if(o==="hsv"){let s=Q(e);return`${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.b)}%`}let t=J(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function uo(e,o,n){let t=o/100,s=n/100,c=(1-Math.abs(2*s-1))*t,d=c*(1-Math.abs(e/60%2-1)),r=s-c/2,i=0,l=0,h=0;return e<60?(i=c,l=d):e<120?(i=d,l=c):e<180?(l=c,h=d):e<240?(l=d,h=c):e<300?(i=d,h=c):(i=c,h=d),{r:Math.round((i+r)*255),g:Math.round((l+r)*255),b:Math.round((h+r)*255)}}function bo(e){let o=e.r/255,n=e.g/255,t=e.b/255,s=Math.max(o,n,t),c=Math.min(o,n,t),d=(s+c)/2;if(s===c)return{h:0,s:0,l:d*100};let r=s-c,i=d>.5?r/(2-s-c):r/(s+c),l=0;return s===o?l=((n-t)/r+(n<t?6:0))*60:s===n?l=((t-o)/r+2)*60:l=((o-n)/r+4)*60,{h:l,s:i*100,l:d*100}}var ie=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),s=t?ye(t,this.model):null;this.alpha=s?.alpha??1;let c=s?.rgb??{r:255,g:255,b:255};if(this.picker=pe(this.holder,{initialColor:c,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",r=>{this.internal||(this.internal=!0,this.setAttribute("value",se(r.rgb,this.model,this.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:r})),this.dispatchEvent(new CustomEvent("color-changed",{detail:se(r.rgb,this.model,this.alpha)})))}),n&&this.picker.setMode(n),new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]).has(this.model)){let r=document.createElement("input");r.type="range",r.min="0",r.max="100",r.value=String(Math.round(this.alpha*100)),r.style.cssText="width:100%;margin-top:8px;accent-color:#007AFF;",r.setAttribute("aria-label","Alpha"),r.addEventListener("input",()=>{this.alpha=+r.value/100;try{let i=this.picker?.getColor().rgb??{r:255,g:255,b:255},l=se(i,this.model,this.alpha);this.setAttribute("value",l),this.dispatchEvent(new CustomEvent("color-changed",{detail:l}))}catch{}}),this.appendChild(r)}}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let s=ye(t,this.model);s&&(this.alpha=s.alpha,this.picker.setColor(s.rgb))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||se({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ce=class extends ie{constructor(){super("hex")}},ho=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of ho)customElements.get(e)||customElements.define(e,class extends ie{constructor(){super(o)}});var fo=ce;return Ue(xo);})();
