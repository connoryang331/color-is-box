var ColorIsBoxElement=(()=>{var be=Object.defineProperty;var Ge=Object.getOwnPropertyDescriptor;var $e=Object.getOwnPropertyNames;var Ne=Object.prototype.hasOwnProperty;var Xe=(e,o)=>()=>(e&&(o=e(e=0)),o);var ve=(e,o)=>{for(var n in o)be(e,n,{get:o[n],enumerable:!0})},Ke=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of $e(o))!Ne.call(e,r)&&r!==n&&be(e,r,{get:()=>o[r],enumerable:!(t=Ge(o,r))||t.enumerable});return e};var Ue=e=>Ke(be({},"__esModule",{value:!0}),e);var Oe={};ve(Oe,{createControls:()=>io});function Ie(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Be(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function io(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=h=>{let u=document.createElement("button");return u.textContent=h.toUpperCase(),u.addEventListener("click",()=>o.switchMode(h)),t.appendChild(u),u},c=r("oklch"),d=r("rgb"),a=r("hsb"),i=()=>{let h=o.mode();d.classList.toggle("active",h==="rgb"),a.classList.toggle("active",h==="hsb"),c.classList.toggle("active",h==="oklch")};i();let l=o.switchMode;o._markActive=i,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let u=t.value;/^#?[0-9a-f]{6}$/i.test(u)?o.onHexInput(u):o.onHexInput("")}),t.addEventListener("click",()=>{Ie(o.getRgbForCopy()?"#"+co(o.getRgbForCopy()):"#ffffff"),Be(t)});let r=document.createElement("div");r.className="box-picker-channels";let c=[],d=[],a=["R","G","B"];for(let u=0;u<3;u++){let C=document.createElement("div");C.className="box-picker-channel";let x=document.createElement("label");x.textContent=a[u];let p=document.createElement("input");p.type="text",p.inputMode="numeric",C.appendChild(x),C.appendChild(p),r.appendChild(C),c.push(p),d.push(x),p.addEventListener("change",()=>{let k=parseFloat(p.value);isNaN(k)||o.onChannelInput(u,k,255)}),p.addEventListener("click",()=>{let k=o.getRgbForCopy();Ie(`${k.r}, ${k.g}, ${k.b}`),Be(p)})}let i=document.createElement("div");i.className="box-picker-hexrow";let l=document.createElement("div");l.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",l.appendChild(h),l.appendChild(t),i.appendChild(r),i.appendChild(l),e.appendChild(i),e._inputs={hexInput:t,inputs:c,labels:d}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:c,g:d,b:a})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function co(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var De=Xe(()=>{});var xo={};ve(xo,{ColorIsBoxElement:()=>le,createBoxColorPicker:()=>_e,createColorPicker:()=>pe,default:()=>fo,setBoxInvert:()=>me});var ie={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ce={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Z(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),c=Math.min(o,n,t),d=r-c,a=0;d!==0&&(r===o?a=((n-t)/d+6)%6:r===n?a=(t-o)/d+2:a=(o-n)/d+4,a*=60);let i=r===0?0:d/r*100,l=r*100;return{h:a,s:i,b:l}}function xe(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,c=r*(1-Math.abs(o/60%2-1)),d=t-r,a,i,l;return o<60?(a=r,i=c,l=0):o<120?(a=c,i=r,l=0):o<180?(a=0,i=r,l=c):o<240?(a=0,i=c,l=r):o<300?(a=c,i=0,l=r):(a=r,i=0,l=c),{r:Math.round((a+d)*255),g:Math.round((i+d)*255),b:Math.round((l+d)*255)}}function he(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function fe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function qe(e){let o=he(e.r/255),n=he(e.g/255),t=he(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,c=.2119034982*o+.6806995451*n+.1073969566*t,d=.0883024619*o+.2817188376*n+.6299787005*t,a=Math.cbrt(r),i=Math.cbrt(c),l=Math.cbrt(d);return{L:.2104542553*a+.793617785*i-.0040720468*l,a:1.9779984951*a-2.428592205*i+.4505937099*l,b:.0259040371*a+.7827717662*i-.808675766*l}}function je(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,c=e-.0894841775*o-1.291485548*n,d=t*t*t,a=r*r*r,i=c*c*c,l=4.0767416621*d-3.3077115913*a+.2309699292*i,h=-1.2684380046*d+2.6097574011*a-.3413193965*i,u=-.0041960863*d-.7034186147*a+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,fe(l)))*255),g:Math.round(Math.max(0,Math.min(1,fe(h)))*255),b:Math.round(Math.max(0,Math.min(1,fe(u)))*255)}}function Y(e){let o=qe(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function te(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return je(e.l,n,t)}function We(e,o,n){let t=te({l:e,c:o,h:n});if(Me(t))return{l:e,c:o,h:n};let r=0,c=o;for(let d=0;d<20;d++){let a=(r+c)/2;t=te({l:e,c:a,h:n}),Me(t)?r=a:c=a}return{l:e,c:r,h:n}}function Me(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function K(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Q(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ke=.4;function U(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return xe({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*ke,r=e.z*359,c=We(n,t,r);return te(c)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Z(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Y(e);return{x:n.l,y:Math.min(n.c/ke,1),z:n.h/359}}}function Ae(e,o){let n=Ce[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function we(e,o,n,t,r,c=!1){let d;e===0?d={x:t,y:o,z:n}:e===1?d={x:o,y:t,z:n}:d={x:o,y:n,z:t};let a=U(d,r);return c?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Te=Math.PI/6,Ze=Math.cos(Te),Ye=Math.sin(Te),ne=!1;function me(e){ne=e}function R(e,o,n){return{x:n.x+(e.y-e.x)*Ze*o,y:n.y+e.z*o-(e.x+e.y)*Ye*o}}function Qe(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var $=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Je=128,Le={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Ee(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Re(e,o,n,t,r,c,d=!0){let{ctx:a,scale:i,center:l,width:h,height:u}=e;a.save(),a.clearRect(0,0,h,u);let C=Qe(o).map(x=>R(x,i,l));if(oo(a,i,l,r),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,to(a,C,o,r),a.restore(),d&&ro(a,r,i,l),t>=0){let x=U(n,r),p=ne?{r:255-x.r,g:255-x.g,b:255-x.b}:x,k=R(n,i,l);ao(a,k,p)}a.restore()}var eo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function oo(e,o,n,t){let r=R({x:0,y:0,z:0},o,n),c=[R({x:1,y:0,z:0},o,n),R({x:0,y:1,z:0},o,n),R({x:0,y:0,z:1},o,n)],d=eo[t];e.lineWidth=1.5;for(let a=0;a<c.length;a++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(c[a].x,c[a].y),e.strokeStyle=d[a],e.stroke()}function to(e,o,n,t){let r=[n.x,n.y,n.z];for(let c=0;c<$.length;c++){let d=$[c],a=r[d.fixedAxis],i=r[d.uAxis],l=r[d.vAxis];if(i<.002&&l<.002)continue;let h=d.quad.map(u=>o[u]);no(e,h,d.fixedAxis,a,i,l,t)}}function no(e,o,n,t,r,c,d){let a=Je,i=document.createElement("canvas");i.width=a,i.height=a;let l=i.getContext("2d"),h=l.createImageData(a,a),u=h.data;for(let D=0;D<a;D++)for(let B=0;B<a;B++){let j=B/(a-1)*r,q=D/(a-1)*c,N=we(n,j,q,t,d,ne),P=(D*a+B)*4;u[P]=N.r,u[P+1]=N.g,u[P+2]=N.b,u[P+3]=255}l.putImageData(h,0,0);let C=o[0],x=o[1],p=o[2],k=o[3],z=x.x-C.x,S=x.y-C.y,F=k.x-C.x,E=k.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(x.x,x.y),e.lineTo(p.x,p.y),e.lineTo(k.x,k.y),e.closePath(),e.clip();let w=2/a,V=C.x-z*w-F*w,I=C.y-S*w-E*w,H=1+2*w,O=1+2*w;e.transform(z*H/a,S*H/a,F*O/a,E*O/a,V,I),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function ro(e,o,n,t){let r=ie[o],c=ne?[R({x:0,y:1,z:1},n,t),R({x:1,y:0,z:1},n,t),R({x:1,y:1,z:0},n,t)]:[R({x:1,y:0,z:0},n,t),R({x:0,y:1,z:0},n,t),R({x:0,y:0,z:1},n,t)],d=ne?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],i=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(u=>K(U(u,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let l={rgb:[],hsb:[2],oklch:[0]},h=performance.now()/1e3;for(let u=0;u<3;u++){let C=c[u].x+d[u].x,x=c[u].y+d[u].y,p=h*1.8+u*2.1,k=.62+.38*(.5+.5*Math.sin(p)),z=11+Math.round(1.6*(.5+.5*Math.sin(p)));e.globalAlpha=k,e.font=`bold ${z}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let F=l[o].includes(u)?"#888888":i[u];e.fillStyle=F,e.fillText(r[u],C,x)}e.globalAlpha=1,e.restore()}function ao(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Ve(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(r[e],n,t)}function ge(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function J(e,o,n,t,r){let c=$[e],d=[n.x,n.y,n.z],a=d[c.uAxis],i=d[c.vAxis];if(a<.002||i<.002)return null;let l={x:0,y:0,z:0},h=["x","y","z"];l[h[c.fixedAxis]]=d[c.fixedAxis];let u={...l};u[h[c.uAxis]]=a;let C={...l};C[h[c.vAxis]]=i;let x=R(l,t,r),p=R(u,t,r),k=R(C,t,r),z=p.x-x.x,S=p.y-x.y,F=k.x-x.x,E=k.y-x.y,w=z*E-S*F;if(Math.abs(w)<1e-6)return null;let V=o.x-x.x,I=o.y-x.y,H=(V*E-I*F)/w,O=(I*z-V*S)/w;return H<-.05||H>1.05||O<-.05||O>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}function ze(e,o,n,t,r){let c=$[e],d=[n.x,n.y,n.z],a=d[c.uAxis],i=d[c.vAxis];if(a<.002||i<.002)return null;let l={x:0,y:0,z:0},h=["x","y","z"];l[h[c.fixedAxis]]=d[c.fixedAxis];let u={...l};u[h[c.uAxis]]=a;let C={...l};C[h[c.vAxis]]=i;let x=R(l,t,r),p=R(u,t,r),k=R(C,t,r),z=p.x-x.x,S=p.y-x.y,F=k.x-x.x,E=k.y-x.y,w=z*E-S*F;if(Math.abs(w)<1e-6)return null;let V=o.x-x.x,I=o.y-x.y,H=(V*E-I*F)/w,O=(I*z-V*S)/w;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}var He=22;function Se(e,o,n,t,r,c,d,a,i){let l={...Le};function h(b){let g=e.getBoundingClientRect();return{x:b.clientX-g.left,y:b.clientY-g.top}}function u(b){let g=o(),M=d(),v=a();for(let A=0;A<3;A++){let s=Ve(A,g,M,v),f=b.x-s.x,m=b.y-s.y;if(f*f+m*m<=He*He)return A}return-1}function C(b){let g=o(),M=d(),v=a();for(let A=$.length-1;A>=0;A--){let s=J(A,b,g,M,v);if(s)return{faceIndex:A,...s}}return null}let x=-1,p={x:0,y:0},k=0;function z(b,g){x=b,p=g,k=o()[["x","y","z"][b]],l.draggingAxisHandle=b,e.style.cursor="grabbing",i()}function S(b){if(x<0)return;let g=b.x-p.x,M=b.y-p.y,A=ge()[x],s=d(),m=(g*A.x+M*A.y)/s,L=Math.max(0,Math.min(1,k+m)),T=o(),y=["x","y","z"],_={...T,[y[x]]:L};n(_);let G=t(),se=c(),oe=se>=0?$[se]:null,X={...G};oe&&x===oe.fixedAxis?X[y[x]]=L:X[y[x]]=Math.min(G[y[x]],L),r(X,c()),i()}function F(){x=-1,l.draggingAxisHandle=-1}let E=-1,w=null,V=null,I=!1;function H(b,g,M,v){E=b,l.draggingFace=b,w=null,V=null,I=!1,v&&(I=!0,V={s:g,t:M}),D(b,g,M),e.style.cursor="crosshair",i()}function O(b,g,M){if(E<0)return;let v=o(),A=d(),s=a(),f=J(E,b,v,A,s),m=E;if(!f&&!M){for(let y=$.length-1;y>=0;y--)if(y!==E&&(f=J(y,b,v,A,s),f)){m=y;break}}if(!f&&M&&(f=ze(E,b,v,A,s),m=E),!f){i();return}m!==E&&(E=m,l.draggingFace=m,w=null,I=!1,V=null);let{s:L,t:T}=f;if(g&&V){if(I){let y=Math.abs(L-V.s),_=Math.abs(T-V.t),G=.02;(y>G||_>G)&&(w=y>=_?"u":"v",I=!1)}w==="u"?T=V.t:w==="v"&&(L=V.s)}else g||(w=null,I=!1,V=null);D(m,L,T),i()}function D(b,g,M){let v=$[b],A=o(),s=["x","y","z"],f={...t()};f[s[v.uAxis]]=g*A[s[v.uAxis]],f[s[v.vAxis]]=M*A[s[v.vAxis]],f[s[v.fixedAxis]]=A[s[v.fixedAxis]],r(f,b)}function B(){E=-1,l.draggingFace=-1,w=null,I=!1,V=null}function j(b){let g=h(b),M=u(g);if(M>=0){b.preventDefault(),z(M,g);return}let v=C(g);v&&(b.preventDefault(),H(v.faceIndex,v.s,v.t,b.shiftKey))}function q(b){let g=h(b);if(x>=0){b.preventDefault(),S(g);return}if(E>=0){b.preventDefault(),O(g,b.shiftKey,b.altKey);return}let M=u(g),v=C(g),A=M,s=M>=0?-1:v?v.faceIndex:-1;(A!==l.hoveredAxisHandle||s!==l.hoveredFace)&&(l.hoveredAxisHandle=A,l.hoveredFace=s,e.style.cursor=A>=0?"grab":s>=0?"crosshair":"default",i())}function N(b){let g=x>=0||E>=0;F(),B(),g&&(l.hoveredAxisHandle=-1,l.hoveredFace=-1,e.style.cursor="default",i())}function P(b){if(b.touches.length!==1)return;let g=h(b.touches[0]),M=u(g);if(M>=0){b.preventDefault(),z(M,g);return}let v=C(g);v&&(b.preventDefault(),H(v.faceIndex,v.s,v.t,!1))}function ae(b){if(b.touches.length!==1)return;let g=h(b.touches[0]);x>=0?(b.preventDefault(),S(g)):E>=0&&(b.preventDefault(),O(g,!1,!1))}function de(b){F(),B(),i()}function ue(b){let g=b.shiftKey?.04:.004,M=t(),v=o(),A=ge(),s=0,f=0;switch(b.key){case"ArrowRight":s=1;break;case"ArrowLeft":s=-1;break;case"ArrowUp":f=-1;break;case"ArrowDown":f=1;break;default:return}b.preventDefault();let m={...M},L=["x","y","z"];for(let T=0;T<3;T++){let y=s*A[T].x+f*A[T].y;if(Math.abs(y)>.3){let _=M[L[T]]+g*Math.sign(y);m[L[T]]=Math.max(0,Math.min(v[L[T]],_))}}r(m,c()),i()}e.addEventListener("mousedown",j),window.addEventListener("mousemove",q),window.addEventListener("mouseup",N),e.addEventListener("touchstart",P,{passive:!1}),e.addEventListener("touchmove",ae,{passive:!1}),e.addEventListener("touchend",de),e.addEventListener("keydown",ue),e.setAttribute("tabindex","0");function ee(){e.removeEventListener("mousedown",j),window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",N),e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",ae),e.removeEventListener("touchend",de),e.removeEventListener("keydown",ue)}return{state:l,destroy:ee}}var Fe=`.box-picker {\r
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
`;var pe=_e,Pe=!1;function lo(){if(Pe||typeof document>"u")return;Pe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Fe,document.head.appendChild(e)}function _e(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,c=o.showModeToggle??!1,d=o.showCorners??!1,a={mode:()=>i,switchMode:s=>I(s),onHexInput:s=>{let f=Q(s);f?(u=W(w?{r:255-f.r,g:255-f.g,b:255-f.b}:f,i),h={x:Math.max(h.x,u.x),y:Math.max(h.y,u.y),z:Math.max(h.z,u.z)},M(),b(),B()):b()},onChannelInput:(s,f,m)=>{let L=Math.max(0,Math.min(m,f)),T=["x","y","z"],y=L/m;if(w){let _={...u,[T[s]]:y},G=U(_,i);u=W({r:255-G.r,g:255-G.g,b:255-G.b},i)}else u={...u,[T[s]]:y};y>h[T[s]]&&(h={...h,[T[s]]:y}),M(),b(),B()},getRgbForCopy:()=>U(u,i),onRandom:s=>A(s),onReset:()=>A({r:0,g:0,b:0})},i=o.mode??"rgb",l=o.initialColor?W(o.initialColor,i):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},u={...l},C=0,x=new Set;lo();let p=document.createElement("div");p.className="box-picker";let k=document.createElement("canvas");k.style.cursor="grab",p.appendChild(k);let z=Ee(k,n),S=null,F=document.createElement("div");F.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",F.appendChild(S),p.appendChild(F),(r||c||d)&&Promise.resolve().then(()=>(De(),Oe)).then(s=>{s.createControls(F,a,{showInputs:r,showModeToggle:c,showCorners:d})}).catch(()=>{}),e.appendChild(p);let E=Se(k,()=>h,s=>{h=s},()=>u,(s,f)=>{u=s,C=f,M(),b()},()=>C,()=>z.scale,()=>z.center,B),w=!1,V=!0;k.addEventListener("mouseenter",()=>{V=Math.random()<.5,B()}),k.addEventListener("mouseleave",()=>{V=Math.random()<.5,B()}),k.addEventListener("dblclick",()=>{w=!w,me(w),M(),b(),B()});function I(s){if(s===i)return;let f=U(u,i),m={...u},L={...h};i=s;let T=W(f,i),y={x:1,y:1,z:1};u=T,h=y,O(m,T,L,y,300),b()}let H=null;function O(s,f,m,L,T){H!==null&&cancelAnimationFrame(H);let y=performance.now();function _(G){let se=G-y,oe=Math.min(1,se/T),X=1-Math.pow(1-oe,3);u={x:s.x+(f.x-s.x)*X,y:s.y+(f.y-s.y)*X,z:s.z+(f.z-s.z)*X},h={x:m.x+(L.x-m.x)*X,y:m.y+(L.y-m.y)*X,z:m.z+(L.z-m.z)*X},q(),M(),oe<1?H=requestAnimationFrame(_):H=null}H=requestAnimationFrame(_)}let D=!1;function B(){D||(D=!0,requestAnimationFrame(()=>{D=!1,q()}))}let j=!0;(function s(){j&&(B(),requestAnimationFrame(s))})();function q(){Re(z,h,u,C,i,E.state,V)}function N(s,f,m){return Math.round(s+(f-s)*m)}function P(s,f){let m=f>0?255:0,L=Math.abs(f);return K({r:N(s.r,m,L),g:N(s.g,m,L),b:N(s.b,m,L)})}function ae(s,f){let m=Q(f)||{r:128,g:128,b:128},L=P(m,.35),T=P(m,0),y=P(m,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${L}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${T}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${y}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function de(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function ue(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function ee(){let s=U(u,i);return w?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function b(){if(!t)return;let s=ee(),f=K(s);S&&ae(S,f);let m=p.querySelector(".box-picker-hex");m&&(m.value=f),g(),p._updateModeButtons&&p._updateModeButtons()}function g(){if(!t)return;let s=ie[i],f=w?W(ee(),i):u,m=Ae(f,i),L=p.querySelectorAll(".box-picker-channel input"),T=p.querySelectorAll(".box-picker-channel label");for(let y=0;y<L.length;y++)T[y].textContent=s[y],T[y].style.color="",T[y].style.textShadow="none",L[y].value=String(m[y])}function M(){let s=ee(),f={rgb:s,hsb:Z(s),oklch:Y(s),hex:K(s)};for(let m of x)m(f)}function v(){let s=U(u,i);return{rgb:s,hsb:Z(s),oklch:Y(s),hex:K(s)}}b(),q();let A=s=>{u=W(s,i),h={x:Math.max(h.x,u.x),y:Math.max(h.y,u.y),z:Math.max(h.z,u.z)};let f=R(u,z.scale,z.center);C=-1;for(let m=$.length-1;m>=0;m--)if(J(m,f,h,z.scale,z.center)){C=m;break}M(),b(),B()};return{getColor:v,getMode:()=>i,setColor:A,setMode(s){I(s)},on(s,f){x.add(f)},off(s,f){x.delete(f)},destroy(){j=!1,E.destroy(),H!==null&&cancelAnimationFrame(H),e.removeChild(p)}}}function ye(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:Q(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=Q(t[1]),c=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:c}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?uo(+t[1],+t[2],+t[3]):null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?xe({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\\d.]+)[,\\s]+([\\d.]+)[,\\s]+([\\d.]+)(?:[,\\s]+([\\d.]+))?/);return t?{rgb:te({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function re(e,o,n=1){if(o==="hex")return K(e);if(o==="hex-alpha")return K(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="hsl"){let r=bo(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsv"){let r=Z(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}let t=Y(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function uo(e,o,n){let t=o/100,r=n/100,c=(1-Math.abs(2*r-1))*t,d=c*(1-Math.abs(e/60%2-1)),a=r-c/2,i=0,l=0,h=0;return e<60?(i=c,l=d):e<120?(i=d,l=c):e<180?(l=c,h=d):e<240?(l=d,h=c):e<300?(i=d,h=c):(i=c,h=d),{r:Math.round((i+a)*255),g:Math.round((l+a)*255),b:Math.round((h+a)*255)}}function bo(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),c=Math.min(o,n,t),d=(r+c)/2;if(r===c)return{h:0,s:0,l:d*100};let a=r-c,i=d>.5?a/(2-r-c):a/(r+c),l=0;return r===o?l=((n-t)/a+(n<t?6:0))*60:r===n?l=((t-o)/a+2)*60:l=((o-n)/a+4)*60,{h:l,s:i*100,l:d*100}}var ce=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?ye(t,this.model):null;this.alpha=r?.alpha??1;let c=r?.rgb??{r:255,g:255,b:255};if(this.picker=pe(this.holder,{initialColor:c,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",a=>{this.internal||(this.internal=!0,this.setAttribute("value",re(a.rgb,this.model,this.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:a})),this.dispatchEvent(new CustomEvent("color-changed",{detail:re(a.rgb,this.model,this.alpha)})))}),n&&this.picker.setMode(n),new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]).has(this.model)){let a=document.createElement("input");a.type="range",a.min="0",a.max="100",a.value=String(Math.round(this.alpha*100)),a.style.cssText="width:100%;margin-top:8px;accent-color:#007AFF;",a.setAttribute("aria-label","Alpha"),a.addEventListener("input",()=>{this.alpha=+a.value/100;try{let i=this.picker?.getColor().rgb??{r:255,g:255,b:255},l=re(i,this.model,this.alpha);this.setAttribute("value",l),this.dispatchEvent(new CustomEvent("color-changed",{detail:l}))}catch{}}),this.appendChild(a)}}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=ye(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||re({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},le=class extends ce{constructor(){super("hex")}},ho=[["color-is-box","hex"],["hex-color-picker","hex"],["hex-alpha-color-picker","hex-alpha"],["rgb-color-picker","rgb"],["rgb-string-color-picker","rgb-string"],["rgba-color-picker","rgba"],["rgba-string-color-picker","rgba-string"],["hsl-color-picker","hsl"],["hsl-string-color-picker","hsl-string"],["hsla-color-picker","hsla"],["hsla-string-color-picker","hsla-string"],["hsv-color-picker","hsv"],["hsv-string-color-picker","hsv-string"],["oklch-color-picker","oklch"],["oklcha-color-picker","oklcha"],["hsva-color-picker","hsva"],["hsva-string-color-picker","hsva-string"]];for(let[e,o]of ho)customElements.get(e)||customElements.define(e,class extends ce{constructor(){super(o)}});var fo=le;return Ue(xo);})();
