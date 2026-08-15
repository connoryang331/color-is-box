var ColorIsBoxElement=(()=>{var be=Object.defineProperty;var $e=Object.getOwnPropertyDescriptor;var Ne=Object.getOwnPropertyNames;var Xe=Object.prototype.hasOwnProperty;var Ke=(e,o)=>()=>(e&&(o=e(e=0)),o);var Ce=(e,o)=>{for(var n in o)be(e,n,{get:o[n],enumerable:!0})},Ue=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of Ne(o))!Xe.call(e,r)&&r!==n&&be(e,r,{get:()=>o[r],enumerable:!(t=$e(o,r))||t.enumerable});return e};var qe=e=>Ue(be({},"__esModule",{value:!0}),e);var De={};Ce(De,{createControls:()=>co});function Be(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Oe(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function co(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=b=>{let u=document.createElement("button");return u.textContent=b.toUpperCase(),u.addEventListener("click",()=>o.switchMode(b)),t.appendChild(u),u},c=r("oklch"),d=r("rgb"),s=r("hsb"),i=()=>{let b=o.mode();d.classList.toggle("active",b==="rgb"),s.classList.toggle("active",b==="hsb"),c.classList.toggle("active",b==="oklch")};i();let l=o.switchMode;o._markActive=i,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let u=t.value;/^#?[0-9a-f]{6}$/i.test(u)?o.onHexInput(u):o.onHexInput("")}),t.addEventListener("click",()=>{Be(o.getRgbForCopy()?"#"+lo(o.getRgbForCopy()):"#ffffff"),Oe(t)});let r=document.createElement("div");r.className="box-picker-channels";let c=[],d=[],s=["R","G","B"];for(let u=0;u<3;u++){let v=document.createElement("div");v.className="box-picker-channel";let x=document.createElement("label");x.textContent=s[u];let y=document.createElement("input");y.type="text",y.inputMode="numeric",v.appendChild(x),v.appendChild(y),r.appendChild(v),c.push(y),d.push(x),y.addEventListener("change",()=>{let C=parseFloat(y.value);isNaN(C)||o.onChannelInput(u,C,255)}),y.addEventListener("click",()=>{let C=o.getRgbForCopy();Be(`${C.r}, ${C.g}, ${C.b}`),Oe(y)})}let i=document.createElement("div");i.className="box-picker-hexrow";let l=document.createElement("div");l.className="box-picker-hexwrap";let b=document.createElement("label");b.textContent="Hex",l.appendChild(b),l.appendChild(t),i.appendChild(r),i.appendChild(l),e.appendChild(i),e._inputs={hexInput:t,inputs:c,labels:d}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);o.onRandom({r:c,g:d,b:s})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function lo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Pe=Ke(()=>{});var mo={};Ce(mo,{ColorIsBoxElement:()=>de,createBoxColorPicker:()=>Ge,createColorPicker:()=>pe,default:()=>xo,setBoxInvert:()=>me});var ce={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Me={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function J(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),c=Math.min(o,n,t),d=r-c,s=0;d!==0&&(r===o?s=((n-t)/d+6)%6:r===n?s=(t-o)/d+2:s=(o-n)/d+4,s*=60);let i=r===0?0:d/r*100,l=r*100;return{h:s,s:i,b:l}}function xe(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,c=r*(1-Math.abs(o/60%2-1)),d=t-r,s,i,l;return o<60?(s=r,i=c,l=0):o<120?(s=c,i=r,l=0):o<180?(s=0,i=r,l=c):o<240?(s=0,i=c,l=r):o<300?(s=c,i=0,l=r):(s=r,i=0,l=c),{r:Math.round((s+d)*255),g:Math.round((i+d)*255),b:Math.round((l+d)*255)}}function he(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function fe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function je(e){let o=he(e.r/255),n=he(e.g/255),t=he(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,c=.2119034982*o+.6806995451*n+.1073969566*t,d=.0883024619*o+.2817188376*n+.6299787005*t,s=Math.cbrt(r),i=Math.cbrt(c),l=Math.cbrt(d);return{L:.2104542553*s+.793617785*i-.0040720468*l,a:1.9779984951*s-2.428592205*i+.4505937099*l,b:.0259040371*s+.7827717662*i-.808675766*l}}function We(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,c=e-.0894841775*o-1.291485548*n,d=t*t*t,s=r*r*r,i=c*c*c,l=4.0767416621*d-3.3077115913*s+.2309699292*i,b=-1.2684380046*d+2.6097574011*s-.3413193965*i,u=-.0041960863*d-.7034186147*s+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,fe(l)))*255),g:Math.round(Math.max(0,Math.min(1,fe(b)))*255),b:Math.round(Math.max(0,Math.min(1,fe(u)))*255)}}function ee(e){let o=je(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function ne(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return We(e.l,n,t)}function Ze(e,o,n){let t=ne({l:e,c:o,h:n});if(ke(t))return{l:e,c:o,h:n};let r=0,c=o;for(let d=0;d<20;d++){let s=(r+c)/2;t=ne({l:e,c:s,h:n}),ke(t)?r=s:c=s}return{l:e,c:r,h:n}}function ke(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function X(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function oe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ae=.4;function K(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return xe({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Ae,r=e.z*359,c=Ze(n,t,r);return ne(c)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=J(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ee(e);return{x:n.l,y:Math.min(n.c/Ae,1),z:n.h/359}}}function we(e,o){let n=Me[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Te(e,o,n,t,r,c=!1){let d;e===0?d={x:t,y:o,z:n}:e===1?d={x:o,y:t,z:n}:d={x:o,y:n,z:t};let s=K(d,r);return c?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var Le=Math.PI/6,Ye=Math.cos(Le),Qe=Math.sin(Le),re=!1;function me(e){re=e}function V(e,o,n){return{x:n.x+(e.y-e.x)*Ye*o,y:n.y+e.z*o-(e.x+e.y)*Qe*o}}function Je(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var G=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],eo=64,Ee={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Re(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ve(e,o,n,t,r,c,d=!0){let{ctx:s,scale:i,center:l,width:b,height:u}=e;s.save(),s.clearRect(0,0,b,u);let v=Je(o).map(x=>V(x,i,l));if(to(s,i,l,r),s.save(),s.shadowColor="rgba(0,0,0,0.35)",s.shadowBlur=8,s.shadowOffsetX=0,s.shadowOffsetY=2,no(s,v,o,r),s.restore(),d&&so(s,r,i,l),t>=0){let x=K(n,r),y=re?{r:255-x.r,g:255-x.g,b:255-x.b}:x,C=V(n,i,l);ao(s,C,y)}s.restore()}var oo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function to(e,o,n,t){let r=V({x:0,y:0,z:0},o,n),c=[V({x:1,y:0,z:0},o,n),V({x:0,y:1,z:0},o,n),V({x:0,y:0,z:1},o,n)],d=oo[t];e.lineWidth=1.5;for(let s=0;s<c.length;s++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(c[s].x,c[s].y),e.strokeStyle=d[s],e.stroke()}function no(e,o,n,t){let r=[n.x,n.y,n.z];for(let c=0;c<G.length;c++){let d=G[c],s=r[d.fixedAxis],i=r[d.uAxis],l=r[d.vAxis];if(i<.002&&l<.002)continue;let b=d.quad.map(u=>o[u]);ro(e,b,d.fixedAxis,s,i,l,t)}}function ro(e,o,n,t,r,c,d){let s=eo,i=document.createElement("canvas");i.width=s,i.height=s;let l=i.getContext("2d"),b=l.createImageData(s,s),u=b.data;for(let P=0;P<s;P++)for(let O=0;O<s;O++){let U=O/(s-1)*r,j=P/(s-1)*c,$=Te(n,U,j,t,d,re),_=(P*s+O)*4;u[_]=$.r,u[_+1]=$.g,u[_+2]=$.b,u[_+3]=255}l.putImageData(b,0,0);let v=o[0],x=o[1],y=o[2],C=o[3],H=x.x-v.x,F=x.y-v.y,I=C.x-v.x,R=C.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(x.x,x.y),e.lineTo(y.x,y.y),e.lineTo(C.x,C.y),e.closePath(),e.clip();let k=2/s,z=v.x-H*k-I*k,B=v.y-F*k-R*k,S=1+2*k,D=1+2*k;e.transform(H*S/s,F*S/s,I*D/s,R*D/s,z,B),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function so(e,o,n,t){let r=ce[o],c=re?[V({x:0,y:1,z:1},n,t),V({x:1,y:0,z:1},n,t),V({x:1,y:1,z:0},n,t)]:[V({x:1,y:0,z:0},n,t),V({x:0,y:1,z:0},n,t),V({x:0,y:0,z:1},n,t)],d=re?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],i=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(u=>X(K(u,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let l={rgb:[],hsb:[2],oklch:[0]},b=performance.now()/1e3;for(let u=0;u<3;u++){let v=c[u].x+d[u].x,x=c[u].y+d[u].y,y=b*1.8+u*2.1,C=.62+.38*(.5+.5*Math.sin(y)),H=11+Math.round(1.6*(.5+.5*Math.sin(y)));e.globalAlpha=C,e.font=`bold ${H}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let I=l[o].includes(u)?"#888888":i[u];e.fillStyle=I,e.fillText(r[u],v,x)}e.globalAlpha=1,e.restore()}function ao(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function ze(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return V(r[e],n,t)}function ge(){let e={x:0,y:0};return[V({x:1,y:0,z:0},1,e),V({x:0,y:1,z:0},1,e),V({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function te(e,o,n,t,r){let c=G[e],d=[n.x,n.y,n.z],s=d[c.uAxis],i=d[c.vAxis];if(s<.002||i<.002)return null;let l={x:0,y:0,z:0},b=["x","y","z"];l[b[c.fixedAxis]]=d[c.fixedAxis];let u={...l};u[b[c.uAxis]]=s;let v={...l};v[b[c.vAxis]]=i;let x=V(l,t,r),y=V(u,t,r),C=V(v,t,r),H=y.x-x.x,F=y.y-x.y,I=C.x-x.x,R=C.y-x.y,k=H*R-F*I;if(Math.abs(k)<1e-6)return null;let z=o.x-x.x,B=o.y-x.y,S=(z*R-B*I)/k,D=(B*H-z*F)/k;return S<-.05||S>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,S)),t:Math.max(0,Math.min(1,D))}}function He(e,o,n,t,r){let c=G[e],d=[n.x,n.y,n.z],s=d[c.uAxis],i=d[c.vAxis];if(s<.002||i<.002)return null;let l={x:0,y:0,z:0},b=["x","y","z"];l[b[c.fixedAxis]]=d[c.fixedAxis];let u={...l};u[b[c.uAxis]]=s;let v={...l};v[b[c.vAxis]]=i;let x=V(l,t,r),y=V(u,t,r),C=V(v,t,r),H=y.x-x.x,F=y.y-x.y,I=C.x-x.x,R=C.y-x.y,k=H*R-F*I;if(Math.abs(k)<1e-6)return null;let z=o.x-x.x,B=o.y-x.y,S=(z*R-B*I)/k,D=(B*H-z*F)/k;return{s:Math.max(0,Math.min(1,S)),t:Math.max(0,Math.min(1,D))}}var Se=22;function Fe(e,o,n,t,r,c,d,s,i){let l={...Ee};function b(h){let m=e.getBoundingClientRect();return{x:h.clientX-m.left,y:h.clientY-m.top}}function u(h){let m=o(),L=d(),p=s();for(let T=0;T<3;T++){let A=ze(T,m,L,p),a=h.x-A.x,f=h.y-A.y;if(a*a+f*f<=Se*Se)return T}return-1}function v(h){let m=o(),L=d(),p=s();for(let T=G.length-1;T>=0;T--){let A=te(T,h,m,L,p);if(A)return{faceIndex:T,...A}}return null}let x=-1,y={x:0,y:0},C=0;function H(h,m){x=h,y=m,C=o()[["x","y","z"][h]],l.draggingAxisHandle=h,e.style.cursor="grabbing",i()}function F(h){if(x<0)return;let m=h.x-y.x,L=h.y-y.y,T=ge()[x],A=d(),f=(m*T.x+L*T.y)/A,g=Math.max(0,Math.min(1,C+f)),w=o(),M=["x","y","z"],E={...w,[M[x]]:g};n(E);let N=t(),q=c(),ie=q>=0?G[q]:null,Y={...N};ie&&x===ie.fixedAxis?Y[M[x]]=g:Y[M[x]]=Math.min(N[M[x]],g),r(Y,c()),i()}function I(){x=-1,l.draggingAxisHandle=-1}let R=-1,k=null,z=null,B=!1;function S(h,m,L,p){R=h,l.draggingFace=h,k=null,z=null,B=!1,p&&(B=!0,z={s:m,t:L}),P(h,m,L),e.style.cursor="crosshair",i()}function D(h,m,L){if(R<0)return;let p=o(),T=d(),A=s(),a=te(R,h,p,T,A),f=R;if(!a&&!L){for(let M=G.length-1;M>=0;M--)if(M!==R&&(a=te(M,h,p,T,A),a)){f=M;break}}if(!a&&L&&(a=He(R,h,p,T,A),f=R),!a){i();return}f!==R&&(R=f,l.draggingFace=f,k=null,B=!1,z=null);let{s:g,t:w}=a;if(m&&z){if(B){let M=Math.abs(g-z.s),E=Math.abs(w-z.t),N=.02;(M>N||E>N)&&(k=M>=E?"u":"v",B=!1)}k==="u"?w=z.t:k==="v"&&(g=z.s)}else m||(k=null,B=!1,z=null);P(f,g,w),i()}function P(h,m,L){let p=G[h],T=o(),A=["x","y","z"],a={...t()};a[A[p.uAxis]]=m*T[A[p.uAxis]],a[A[p.vAxis]]=L*T[A[p.vAxis]],a[A[p.fixedAxis]]=T[A[p.fixedAxis]],r(a,h)}function O(){R=-1,l.draggingFace=-1,k=null,B=!1,z=null}function U(h){let m=b(h),L=u(m);if(L>=0){h.preventDefault(),H(L,m);return}let p=v(m);p&&(h.preventDefault(),S(p.faceIndex,p.s,p.t,h.shiftKey))}function j(h){let m=b(h);if(x>=0){h.preventDefault(),F(m);return}if(R>=0){h.preventDefault(),D(m,h.shiftKey,h.altKey);return}let L=u(m),p=v(m),T=L,A=L>=0?-1:p?p.faceIndex:-1;(T!==l.hoveredAxisHandle||A!==l.hoveredFace)&&(l.hoveredAxisHandle=T,l.hoveredFace=A,e.style.cursor=T>=0?"grab":A>=0?"crosshair":"default",i())}function $(h){let m=x>=0||R>=0;I(),O(),m&&(l.hoveredAxisHandle=-1,l.hoveredFace=-1,e.style.cursor="default",i())}function _(h){if(h.touches.length!==1)return;let m=b(h.touches[0]),L=u(m);if(L>=0){h.preventDefault(),H(L,m);return}let p=v(m);p&&(h.preventDefault(),S(p.faceIndex,p.s,p.t,!1))}function Z(h){if(h.touches.length!==1)return;let m=b(h.touches[0]);x>=0?(h.preventDefault(),F(m)):R>=0&&(h.preventDefault(),D(m,!1,!1))}function ae(h){I(),O(),i()}function ue(h){let m=h.shiftKey?.04:.004,L=t(),p=o(),T=ge(),A=0,a=0;switch(h.key){case"ArrowRight":A=1;break;case"ArrowLeft":A=-1;break;case"ArrowUp":a=-1;break;case"ArrowDown":a=1;break;default:return}h.preventDefault();let f={...L},g=["x","y","z"];for(let w=0;w<3;w++){let M=A*T[w].x+a*T[w].y;if(Math.abs(M)>.3){let E=L[g[w]]+m*Math.sign(M);f[g[w]]=Math.max(0,Math.min(p[g[w]],E))}}r(f,c()),i()}e.addEventListener("mousedown",U),window.addEventListener("mousemove",j),window.addEventListener("mouseup",$),e.addEventListener("touchstart",_,{passive:!1}),e.addEventListener("touchmove",Z,{passive:!1}),e.addEventListener("touchend",ae),e.addEventListener("keydown",ue),e.setAttribute("tabindex","0");function ve(){e.removeEventListener("mousedown",U),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",$),e.removeEventListener("touchstart",_),e.removeEventListener("touchmove",Z),e.removeEventListener("touchend",ae),e.removeEventListener("keydown",ue)}return{state:l,destroy:ve}}var Ie=`.box-picker {\r
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
`;var pe=Ge,_e=!1;function uo(){if(_e||typeof document>"u")return;_e=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ie,document.head.appendChild(e)}function Ge(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,c=o.showModeToggle??!1,d=o.showCorners??!1,s={mode:()=>i,switchMode:a=>B(a),onHexInput:a=>{let f=oe(a);f?(u=W(k?{r:255-f.r,g:255-f.g,b:255-f.b}:f,i),b={x:Math.max(b.x,u.x),y:Math.max(b.y,u.y),z:Math.max(b.z,u.z)},p(),m(),O()):m()},onChannelInput:(a,f,g)=>{let w=Math.max(0,Math.min(g,f)),M=["x","y","z"],E=w/g;if(k){let N={...u,[M[a]]:E},q=K(N,i);u=W({r:255-q.r,g:255-q.g,b:255-q.b},i)}else u={...u,[M[a]]:E};E>b[M[a]]&&(b={...b,[M[a]]:E}),p(),m(),O()},getRgbForCopy:()=>K(u,i),onRandom:a=>A(a),onReset:()=>A({r:0,g:0,b:0})},i=o.mode??"rgb",l=o.initialColor?W(o.initialColor,i):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},u={...l},v=0,x=new Set;uo();let y=document.createElement("div");y.className="box-picker";let C=document.createElement("canvas");C.style.cursor="grab",y.appendChild(C);let H=Re(C,n),F=null,I=document.createElement("div");I.className="box-picker-controls",F=document.createElement("div"),F.className="box-picker-swatch",I.appendChild(F),y.appendChild(I),(r||c||d)&&Promise.resolve().then(()=>(Pe(),De)).then(a=>{a.createControls(I,s,{showInputs:r,showModeToggle:c,showCorners:d})}).catch(()=>{}),e.appendChild(y);let R=Fe(C,()=>b,a=>{b=a},()=>u,(a,f)=>{u=a,v=f,p(),m()},()=>v,()=>H.scale,()=>H.center,O),k=!1,z=!0;C.addEventListener("mouseenter",()=>{z=Math.random()<.5,U=!0,O()}),C.addEventListener("mouseleave",()=>{z=Math.random()<.5,U=!1,O()}),C.addEventListener("dblclick",()=>{k=!k,me(k),p(),m(),O()});function B(a){if(a===i)return;let f=K(u,i),g={...u},w={...b};i=a;let M=W(f,i),E={x:1,y:1,z:1};u=M,b=E,D(g,M,w,E,300),m()}let S=null;function D(a,f,g,w,M){S!==null&&cancelAnimationFrame(S);let E=performance.now();function N(q){let ie=q-E,Y=Math.min(1,ie/M),Q=1-Math.pow(1-Y,3);u={x:a.x+(f.x-a.x)*Q,y:a.y+(f.y-a.y)*Q,z:a.z+(f.z-a.z)*Q},b={x:g.x+(w.x-g.x)*Q,y:g.y+(w.y-g.y)*Q,z:g.z+(w.z-g.z)*Q},$(),p(),Y<1?S=requestAnimationFrame(N):S=null}S=requestAnimationFrame(N)}let P=!1;function O(){P||(P=!0,requestAnimationFrame(()=>{P=!1,$()}))}let U=!1,j=0;(function a(){if(!U)return;let f=performance.now();f-j>=66&&(j=f,O()),requestAnimationFrame(a)})();function $(){Ve(H,b,u,v,i,R.state,z)}function _(a,f,g){return Math.round(a+(f-a)*g)}function Z(a,f){let g=f>0?255:0,w=Math.abs(f);return X({r:_(a.r,g,w),g:_(a.g,g,w),b:_(a.b,g,w)})}function ae(a,f){let g=oe(f)||{r:128,g:128,b:128},w=Z(g,.35),M=Z(g,0),E=Z(g,-.35);a.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${w}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${M}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${E}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,a.style.backgroundColor="transparent"}function ue(a){try{navigator.clipboard.writeText(a).catch(()=>{})}catch{}}function ve(a){a&&(a.style.borderColor="#4ade80",a.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{a.style.borderColor="",a.style.boxShadow=""},500))}function h(){let a=K(u,i);return k?{r:255-a.r,g:255-a.g,b:255-a.b}:a}function m(){if(!t)return;let a=h(),f=X(a);F&&ae(F,f);let g=y.querySelector(".box-picker-hex");g&&(g.value=f),L(),y._updateModeButtons&&y._updateModeButtons()}function L(){if(!t)return;let a=ce[i],f=k?W(h(),i):u,g=we(f,i),w=y.querySelectorAll(".box-picker-channel input"),M=y.querySelectorAll(".box-picker-channel label");for(let E=0;E<w.length;E++)M[E].textContent=a[E],M[E].style.color="",M[E].style.textShadow="none",w[E].value=String(g[E])}function p(){let a=h(),f={rgb:a,hsb:J(a),oklch:ee(a),hex:X(a)};for(let g of x)g(f)}function T(){let a=K(u,i);return{rgb:a,hsb:J(a),oklch:ee(a),hex:X(a)}}m(),$();let A=a=>{u=W(a,i),b={x:Math.max(b.x,u.x),y:Math.max(b.y,u.y),z:Math.max(b.z,u.z)};let f=V(u,H.scale,H.center);v=-1;for(let g=G.length-1;g>=0;g--)if(te(g,f,b,H.scale,H.center)){v=g;break}p(),m(),O()};return{getColor:T,getMode:()=>i,setColor:A,setMode(a){B(a)},on(a,f){x.add(f)},off(a,f){x.delete(f)},destroy(){U=!1,R.destroy(),S!==null&&cancelAnimationFrame(S),e.removeChild(y)}}}function ye(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:oe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=oe(t[1]),c=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:c}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?bo(+t[1],+t[2],+t[3]):null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?xe({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:ne({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function se(e,o,n=1){if(o==="hex")return X(e);if(o==="hex-alpha")return X(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="hsl"){let r=ho(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsv"){let r=J(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}let t=ee(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function bo(e,o,n){let t=o/100,r=n/100,c=(1-Math.abs(2*r-1))*t,d=c*(1-Math.abs(e/60%2-1)),s=r-c/2,i=0,l=0,b=0;return e<60?(i=c,l=d):e<120?(i=d,l=c):e<180?(l=c,b=d):e<240?(l=d,b=c):e<300?(i=d,b=c):(i=c,b=d),{r:Math.round((i+s)*255),g:Math.round((l+s)*255),b:Math.round((b+s)*255)}}function ho(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),c=Math.min(o,n,t),d=(r+c)/2;if(r===c)return{h:0,s:0,l:d*100};let s=r-c,i=d>.5?s/(2-r-c):s/(r+c),l=0;return r===o?l=((n-t)/s+(n<t?6:0))*60:r===n?l=((t-o)/s+2)*60:l=((o-n)/s+4)*60,{h:l,s:i*100,l:d*100}}var le=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?ye(t,this.model):null;this.alpha=r?.alpha??1;let c=r?.rgb??{r:255,g:255,b:255};if(this.picker=pe(this.holder,{initialColor:c,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",s=>{this.internal||(this.internal=!0,this.setAttribute("value",se(s.rgb,this.model,this.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:s})),this.dispatchEvent(new CustomEvent("color-changed",{detail:se(s.rgb,this.model,this.alpha)})))}),n&&this.picker.setMode(n),new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]).has(this.model)){let s=document.createElement("input");s.type="range",s.min="0",s.max="100",s.value=String(Math.round(this.alpha*100)),s.style.cssText="width:100%;margin-top:8px;accent-color:#007AFF;",s.setAttribute("aria-label","Alpha"),s.addEventListener("input",()=>{this.alpha=+s.value/100;try{let i=this.picker?.getColor().rgb??{r:255,g:255,b:255},l=se(i,this.model,this.alpha);this.setAttribute("value",l),this.dispatchEvent(new CustomEvent("color-changed",{detail:l}))}catch{}}),this.appendChild(s)}}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=ye(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||se({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},de=class extends le{constructor(){super("hex")}},fo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of fo)customElements.get(e)||customElements.define(e,class extends le{constructor(){super(o)}});var xo=de;return qe(mo);})();
