var ColorIsBoxElement=(()=>{var be=Object.defineProperty;var _e=Object.getOwnPropertyDescriptor;var $e=Object.getOwnPropertyNames;var Ne=Object.prototype.hasOwnProperty;var Xe=(e,o)=>()=>(e&&(o=e(e=0)),o);var ve=(e,o)=>{for(var n in o)be(e,n,{get:o[n],enumerable:!0})},Ke=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of $e(o))!Ne.call(e,r)&&r!==n&&be(e,r,{get:()=>o[r],enumerable:!(t=_e(o,r))||t.enumerable});return e};var Ue=e=>Ke(be({},"__esModule",{value:!0}),e);var Oe={};ve(Oe,{createControls:()=>ao});function Ie(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Be(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function ao(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=h=>{let u=document.createElement("button");return u.textContent=h.toUpperCase(),u.addEventListener("click",()=>o.switchMode(h)),t.appendChild(u),u},c=r("oklch"),l=r("rgb"),s=r("hsb"),a=()=>{let h=o.mode();l.classList.toggle("active",h==="rgb"),s.classList.toggle("active",h==="hsb"),c.classList.toggle("active",h==="oklch")};a();let d=o.switchMode;o._markActive=a,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let u=t.value;/^#?[0-9a-f]{6}$/i.test(u)?o.onHexInput(u):o.onHexInput("")}),t.addEventListener("click",()=>{Ie(o.getRgbForCopy()?"#"+co(o.getRgbForCopy()):"#ffffff"),Be(t)});let r=document.createElement("div");r.className="box-picker-channels";let c=[],l=[],s=["R","G","B"];for(let u=0;u<3;u++){let C=document.createElement("div");C.className="box-picker-channel";let x=document.createElement("label");x.textContent=s[u];let p=document.createElement("input");p.type="text",p.inputMode="numeric",C.appendChild(x),C.appendChild(p),r.appendChild(C),c.push(p),l.push(x),p.addEventListener("change",()=>{let k=parseFloat(p.value);isNaN(k)||o.onChannelInput(u,k,255)}),p.addEventListener("click",()=>{let k=o.getRgbForCopy();Ie(`${k.r}, ${k.g}, ${k.b}`),Be(p)})}let a=document.createElement("div");a.className="box-picker-hexrow";let d=document.createElement("div");d.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",d.appendChild(h),d.appendChild(t),a.appendChild(r),a.appendChild(d),e.appendChild(a),e._inputs={hexInput:t,inputs:c,labels:l}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let c=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);o.onRandom({r:c,g:l,b:s})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function co(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var De=Xe(()=>{});var xo={};ve(xo,{ColorIsBoxElement:()=>le,createBoxColorPicker:()=>Ge,createColorPicker:()=>pe,default:()=>fo,setBoxInvert:()=>me});var se={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ce={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Z(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),c=Math.min(o,n,t),l=r-c,s=0;l!==0&&(r===o?s=((n-t)/l+6)%6:r===n?s=(t-o)/l+2:s=(o-n)/l+4,s*=60);let a=r===0?0:l/r*100,d=r*100;return{h:s,s:a,b:d}}function xe(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,c=r*(1-Math.abs(o/60%2-1)),l=t-r,s,a,d;return o<60?(s=r,a=c,d=0):o<120?(s=c,a=r,d=0):o<180?(s=0,a=r,d=c):o<240?(s=0,a=c,d=r):o<300?(s=c,a=0,d=r):(s=r,a=0,d=c),{r:Math.round((s+l)*255),g:Math.round((a+l)*255),b:Math.round((d+l)*255)}}function he(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function fe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function qe(e){let o=he(e.r/255),n=he(e.g/255),t=he(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,c=.2119034982*o+.6806995451*n+.1073969566*t,l=.0883024619*o+.2817188376*n+.6299787005*t,s=Math.cbrt(r),a=Math.cbrt(c),d=Math.cbrt(l);return{L:.2104542553*s+.793617785*a-.0040720468*d,a:1.9779984951*s-2.428592205*a+.4505937099*d,b:.0259040371*s+.7827717662*a-.808675766*d}}function je(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,c=e-.0894841775*o-1.291485548*n,l=t*t*t,s=r*r*r,a=c*c*c,d=4.0767416621*l-3.3077115913*s+.2309699292*a,h=-1.2684380046*l+2.6097574011*s-.3413193965*a,u=-.0041960863*l-.7034186147*s+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,fe(d)))*255),g:Math.round(Math.max(0,Math.min(1,fe(h)))*255),b:Math.round(Math.max(0,Math.min(1,fe(u)))*255)}}function Y(e){let o=qe(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function oe(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return je(e.l,n,t)}function We(e,o,n){let t=oe({l:e,c:o,h:n});if(Me(t))return{l:e,c:o,h:n};let r=0,c=o;for(let l=0;l<20;l++){let s=(r+c)/2;t=oe({l:e,c:s,h:n}),Me(t)?r=s:c=s}return{l:e,c:r,h:n}}function Me(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function U(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function te(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ke=.4;function K(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return xe({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*ke,r=e.z*359,c=We(n,t,r);return oe(c)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Z(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Y(e);return{x:n.l,y:Math.min(n.c/ke,1),z:n.h/359}}}function we(e,o){let n=Ce[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Ae(e,o,n,t,r,c=!1){let l;e===0?l={x:t,y:o,z:n}:e===1?l={x:o,y:t,z:n}:l={x:o,y:n,z:t};let s=K(l,r);return c?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var Te=Math.PI/6,Ze=Math.cos(Te),Ye=Math.sin(Te),ne=!1;function me(e){ne=e}function E(e,o,n){return{x:n.x+(e.y-e.x)*Ze*o,y:n.y+e.z*o-(e.x+e.y)*Ye*o}}function Qe(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var $=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Je=128,Le={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Re(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ee(e,o,n,t,r,c,l=!0){let{ctx:s,scale:a,center:d,width:h,height:u}=e;s.save(),s.clearRect(0,0,h,u);let C=Qe(o).map(x=>E(x,a,d));if(oo(s,a,d,r),s.save(),s.shadowColor="rgba(0,0,0,0.35)",s.shadowBlur=8,s.shadowOffsetX=0,s.shadowOffsetY=2,to(s,C,o,r),s.restore(),l&&ro(s,r,a,d),t>=0){let x=K(n,r),p=ne?{r:255-x.r,g:255-x.g,b:255-x.b}:x,k=E(n,a,d);io(s,k,p)}s.restore()}var eo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function oo(e,o,n,t){let r=E({x:0,y:0,z:0},o,n),c=[E({x:1,y:0,z:0},o,n),E({x:0,y:1,z:0},o,n),E({x:0,y:0,z:1},o,n)],l=eo[t];e.lineWidth=1.5;for(let s=0;s<c.length;s++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(c[s].x,c[s].y),e.strokeStyle=l[s],e.stroke()}function to(e,o,n,t){let r=[n.x,n.y,n.z];for(let c=0;c<$.length;c++){let l=$[c],s=r[l.fixedAxis],a=r[l.uAxis],d=r[l.vAxis];if(a<.002&&d<.002)continue;let h=l.quad.map(u=>o[u]);no(e,h,l.fixedAxis,s,a,d,t)}}function no(e,o,n,t,r,c,l){let s=Je,a=document.createElement("canvas");a.width=s,a.height=s;let d=a.getContext("2d"),h=d.createImageData(s,s),u=h.data;for(let D=0;D<s;D++)for(let B=0;B<s;B++){let j=B/(s-1)*r,q=D/(s-1)*c,N=Ae(n,j,q,t,l,ne),P=(D*s+B)*4;u[P]=N.r,u[P+1]=N.g,u[P+2]=N.b,u[P+3]=255}d.putImageData(h,0,0);let C=o[0],x=o[1],p=o[2],k=o[3],z=x.x-C.x,S=x.y-C.y,F=k.x-C.x,R=k.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(x.x,x.y),e.lineTo(p.x,p.y),e.lineTo(k.x,k.y),e.closePath(),e.clip();let A=2/s,V=C.x-z*A-F*A,I=C.y-S*A-R*A,H=1+2*A,O=1+2*A;e.transform(z*H/s,S*H/s,F*O/s,R*O/s,V,I),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function ro(e,o,n,t){let r=se[o],c=ne?[E({x:0,y:1,z:1},n,t),E({x:1,y:0,z:1},n,t),E({x:1,y:1,z:0},n,t)]:[E({x:1,y:0,z:0},n,t),E({x:0,y:1,z:0},n,t),E({x:0,y:0,z:1},n,t)],l=ne?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],a=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(u=>U(K(u,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let d={rgb:[],hsb:[2],oklch:[0]},h=performance.now()/1e3;for(let u=0;u<3;u++){let C=c[u].x+l[u].x,x=c[u].y+l[u].y,p=h*1.8+u*2.1,k=.62+.38*(.5+.5*Math.sin(p)),z=11+Math.round(1.6*(.5+.5*Math.sin(p)));e.globalAlpha=k,e.font=`bold ${z}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let F=d[o].includes(u)?"#888888":a[u];e.fillStyle=F,e.fillText(r[u],C,x)}e.globalAlpha=1,e.restore()}function io(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Ve(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return E(r[e],n,t)}function ge(){let e={x:0,y:0};return[E({x:1,y:0,z:0},1,e),E({x:0,y:1,z:0},1,e),E({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function Q(e,o,n,t,r){let c=$[e],l=[n.x,n.y,n.z],s=l[c.uAxis],a=l[c.vAxis];if(s<.002||a<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[c.fixedAxis]]=l[c.fixedAxis];let u={...d};u[h[c.uAxis]]=s;let C={...d};C[h[c.vAxis]]=a;let x=E(d,t,r),p=E(u,t,r),k=E(C,t,r),z=p.x-x.x,S=p.y-x.y,F=k.x-x.x,R=k.y-x.y,A=z*R-S*F;if(Math.abs(A)<1e-6)return null;let V=o.x-x.x,I=o.y-x.y,H=(V*R-I*F)/A,O=(I*z-V*S)/A;return H<-.05||H>1.05||O<-.05||O>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}function ze(e,o,n,t,r){let c=$[e],l=[n.x,n.y,n.z],s=l[c.uAxis],a=l[c.vAxis];if(s<.002||a<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[c.fixedAxis]]=l[c.fixedAxis];let u={...d};u[h[c.uAxis]]=s;let C={...d};C[h[c.vAxis]]=a;let x=E(d,t,r),p=E(u,t,r),k=E(C,t,r),z=p.x-x.x,S=p.y-x.y,F=k.x-x.x,R=k.y-x.y,A=z*R-S*F;if(Math.abs(A)<1e-6)return null;let V=o.x-x.x,I=o.y-x.y,H=(V*R-I*F)/A,O=(I*z-V*S)/A;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}var He=22;function Se(e,o,n,t,r,c,l,s,a){let d={...Le};function h(b){let g=e.getBoundingClientRect();return{x:b.clientX-g.left,y:b.clientY-g.top}}function u(b){let g=o(),M=l(),v=s();for(let w=0;w<3;w++){let i=Ve(w,g,M,v),f=b.x-i.x,m=b.y-i.y;if(f*f+m*m<=He*He)return w}return-1}function C(b){let g=o(),M=l(),v=s();for(let w=$.length-1;w>=0;w--){let i=Q(w,b,g,M,v);if(i)return{faceIndex:w,...i}}return null}let x=-1,p={x:0,y:0},k=0;function z(b,g){x=b,p=g,k=o()[["x","y","z"][b]],d.draggingAxisHandle=b,e.style.cursor="grabbing",a()}function S(b){if(x<0)return;let g=b.x-p.x,M=b.y-p.y,w=ge()[x],i=l(),m=(g*w.x+M*w.y)/i,L=Math.max(0,Math.min(1,k+m)),T=o(),y=["x","y","z"],G={...T,[y[x]]:L};n(G);let _=t(),ie=c(),ee=ie>=0?$[ie]:null,X={..._};ee&&x===ee.fixedAxis?X[y[x]]=L:X[y[x]]=Math.min(_[y[x]],L),r(X,c()),a()}function F(){x=-1,d.draggingAxisHandle=-1}let R=-1,A=null,V=null,I=!1;function H(b,g,M,v){R=b,d.draggingFace=b,A=null,V=null,I=!1,v&&(I=!0,V={s:g,t:M}),D(b,g,M),e.style.cursor="crosshair",a()}function O(b,g,M){if(R<0)return;let v=o(),w=l(),i=s(),f=Q(R,b,v,w,i),m=R;if(!f&&!M){for(let y=$.length-1;y>=0;y--)if(y!==R&&(f=Q(y,b,v,w,i),f)){m=y;break}}if(!f&&M&&(f=ze(R,b,v,w,i),m=R),!f){a();return}m!==R&&(R=m,d.draggingFace=m,A=null,I=!1,V=null);let{s:L,t:T}=f;if(g&&V){if(I){let y=Math.abs(L-V.s),G=Math.abs(T-V.t),_=.02;(y>_||G>_)&&(A=y>=G?"u":"v",I=!1)}A==="u"?T=V.t:A==="v"&&(L=V.s)}else g||(A=null,I=!1,V=null);D(m,L,T),a()}function D(b,g,M){let v=$[b],w=o(),i=["x","y","z"],f={...t()};f[i[v.uAxis]]=g*w[i[v.uAxis]],f[i[v.vAxis]]=M*w[i[v.vAxis]],f[i[v.fixedAxis]]=w[i[v.fixedAxis]],r(f,b)}function B(){R=-1,d.draggingFace=-1,A=null,I=!1,V=null}function j(b){let g=h(b),M=u(g);if(M>=0){b.preventDefault(),z(M,g);return}let v=C(g);v&&(b.preventDefault(),H(v.faceIndex,v.s,v.t,b.shiftKey))}function q(b){let g=h(b);if(x>=0){b.preventDefault(),S(g);return}if(R>=0){b.preventDefault(),O(g,b.shiftKey,b.altKey);return}let M=u(g),v=C(g),w=M,i=M>=0?-1:v?v.faceIndex:-1;(w!==d.hoveredAxisHandle||i!==d.hoveredFace)&&(d.hoveredAxisHandle=w,d.hoveredFace=i,e.style.cursor=w>=0?"grab":i>=0?"crosshair":"default",a())}function N(b){let g=x>=0||R>=0;F(),B(),g&&(d.hoveredAxisHandle=-1,d.hoveredFace=-1,e.style.cursor="default",a())}function P(b){if(b.touches.length!==1)return;let g=h(b.touches[0]),M=u(g);if(M>=0){b.preventDefault(),z(M,g);return}let v=C(g);v&&(b.preventDefault(),H(v.faceIndex,v.s,v.t,!1))}function re(b){if(b.touches.length!==1)return;let g=h(b.touches[0]);x>=0?(b.preventDefault(),S(g)):R>=0&&(b.preventDefault(),O(g,!1,!1))}function de(b){F(),B(),a()}function ue(b){let g=b.shiftKey?.04:.004,M=t(),v=o(),w=ge(),i=0,f=0;switch(b.key){case"ArrowRight":i=1;break;case"ArrowLeft":i=-1;break;case"ArrowUp":f=-1;break;case"ArrowDown":f=1;break;default:return}b.preventDefault();let m={...M},L=["x","y","z"];for(let T=0;T<3;T++){let y=i*w[T].x+f*w[T].y;if(Math.abs(y)>.3){let G=M[L[T]]+g*Math.sign(y);m[L[T]]=Math.max(0,Math.min(v[L[T]],G))}}r(m,c()),a()}e.addEventListener("mousedown",j),window.addEventListener("mousemove",q),window.addEventListener("mouseup",N),e.addEventListener("touchstart",P,{passive:!1}),e.addEventListener("touchmove",re,{passive:!1}),e.addEventListener("touchend",de),e.addEventListener("keydown",ue),e.setAttribute("tabindex","0");function J(){e.removeEventListener("mousedown",j),window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",N),e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",re),e.removeEventListener("touchend",de),e.removeEventListener("keydown",ue)}return{state:d,destroy:J}}var Fe=`.box-picker {\r
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
`;var pe=Ge,Pe=!1;function lo(){if(Pe||typeof document>"u")return;Pe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Fe,document.head.appendChild(e)}function Ge(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,c=o.showModeToggle??!1,l=o.showCorners??!1,s={mode:()=>a,switchMode:i=>I(i),onHexInput:i=>{let f=te(i);f?(u=W(A?{r:255-f.r,g:255-f.g,b:255-f.b}:f,a),h={x:Math.max(h.x,u.x),y:Math.max(h.y,u.y),z:Math.max(h.z,u.z)},M(),b(),B()):b()},onChannelInput:(i,f,m)=>{let L=Math.max(0,Math.min(m,f)),T=["x","y","z"],y=L/m;if(A){let G={...u,[T[i]]:y},_=K(G,a);u=W({r:255-_.r,g:255-_.g,b:255-_.b},a)}else u={...u,[T[i]]:y};y>h[T[i]]&&(h={...h,[T[i]]:y}),M(),b(),B()},getRgbForCopy:()=>K(u,a),onRandom:i=>w(i),onReset:()=>w({r:0,g:0,b:0})},a=o.mode??"rgb",d=o.initialColor?W(o.initialColor,a):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},u={...d},C=0,x=new Set;lo();let p=document.createElement("div");p.className="box-picker";let k=document.createElement("canvas");k.style.cursor="grab",p.appendChild(k);let z=Re(k,n),S=null,F=document.createElement("div");F.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",F.appendChild(S),p.appendChild(F),(r||c||l)&&Promise.resolve().then(()=>(De(),Oe)).then(i=>{i.createControls(F,s,{showInputs:r,showModeToggle:c,showCorners:l})}).catch(()=>{}),e.appendChild(p);let R=Se(k,()=>h,i=>{h=i},()=>u,(i,f)=>{u=i,C=f,M(),b()},()=>C,()=>z.scale,()=>z.center,B),A=!1,V=!0;k.addEventListener("mouseenter",()=>{V=Math.random()<.5,B()}),k.addEventListener("mouseleave",()=>{V=Math.random()<.5,B()}),k.addEventListener("dblclick",()=>{A=!A,me(A),M(),b(),B()});function I(i){if(i===a)return;let f=K(u,a),m={...u},L={...h};a=i;let T=W(f,a),y={x:1,y:1,z:1};u=T,h=y,O(m,T,L,y,300),b()}let H=null;function O(i,f,m,L,T){H!==null&&cancelAnimationFrame(H);let y=performance.now();function G(_){let ie=_-y,ee=Math.min(1,ie/T),X=1-Math.pow(1-ee,3);u={x:i.x+(f.x-i.x)*X,y:i.y+(f.y-i.y)*X,z:i.z+(f.z-i.z)*X},h={x:m.x+(L.x-m.x)*X,y:m.y+(L.y-m.y)*X,z:m.z+(L.z-m.z)*X},q(),M(),ee<1?H=requestAnimationFrame(G):H=null}H=requestAnimationFrame(G)}let D=!1;function B(){D||(D=!0,requestAnimationFrame(()=>{D=!1,q()}))}let j=!0;(function i(){j&&(B(),requestAnimationFrame(i))})();function q(){Ee(z,h,u,C,a,R.state,V)}function N(i,f,m){return Math.round(i+(f-i)*m)}function P(i,f){let m=f>0?255:0,L=Math.abs(f);return U({r:N(i.r,m,L),g:N(i.g,m,L),b:N(i.b,m,L)})}function re(i,f){let m=te(f)||{r:128,g:128,b:128},L=P(m,.35),T=P(m,0),y=P(m,-.35);i.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${L}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${T}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${y}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,i.style.backgroundColor="transparent"}function de(i){try{navigator.clipboard.writeText(i).catch(()=>{})}catch{}}function ue(i){i&&(i.style.borderColor="#4ade80",i.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{i.style.borderColor="",i.style.boxShadow=""},500))}function J(){let i=K(u,a);return A?{r:255-i.r,g:255-i.g,b:255-i.b}:i}function b(){if(!t)return;let i=J(),f=U(i);S&&re(S,f);let m=p.querySelector(".box-picker-hex");m&&(m.value=f),g(),p._updateModeButtons&&p._updateModeButtons()}function g(){if(!t)return;let i=se[a],f=A?W(J(),a):u,m=we(f,a),L=p.querySelectorAll(".box-picker-channel input"),T=p.querySelectorAll(".box-picker-channel label");for(let y=0;y<L.length;y++)T[y].textContent=i[y],T[y].style.color="",T[y].style.textShadow="none",L[y].value=String(m[y])}function M(){let i=J(),f={rgb:i,hsb:Z(i),oklch:Y(i),hex:U(i)};for(let m of x)m(f)}function v(){let i=K(u,a);return{rgb:i,hsb:Z(i),oklch:Y(i),hex:U(i)}}b(),q();let w=i=>{u=W(i,a),h={x:Math.max(h.x,u.x),y:Math.max(h.y,u.y),z:Math.max(h.z,u.z)};let f=E(u,z.scale,z.center);C=-1;for(let m=$.length-1;m>=0;m--)if(Q(m,f,h,z.scale,z.center)){C=m;break}M(),b(),B()};return{getColor:v,getMode:()=>a,setColor:w,setMode(i){I(i)},on(i,f){x.add(f)},off(i,f){x.delete(f)},destroy(){j=!1,R.destroy(),H!==null&&cancelAnimationFrame(H),e.removeChild(p)}}}function ye(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return te(n);if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?uo(+t[1],+t[2],+t[3]):null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?xe({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="oklch"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);return t?oe({l:+t[1],c:+t[2],h:+t[3]}):null}}catch{}return null}function ae(e,o){if(o==="hex")return U(e);if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="hsl"){let t=bo(e);return`${Math.round(t.h)}, ${Math.round(t.s)}%, ${Math.round(t.l)}%`}if(o==="hsv"){let t=Z(e);return`${Math.round(t.h)}, ${Math.round(t.s)}%, ${Math.round(t.b)}%`}let n=Y(e);return`${n.l.toFixed(3)}, ${n.c.toFixed(3)}, ${n.h.toFixed(1)}`}function uo(e,o,n){let t=o/100,r=n/100,c=(1-Math.abs(2*r-1))*t,l=c*(1-Math.abs(e/60%2-1)),s=r-c/2,a=0,d=0,h=0;return e<60?(a=c,d=l):e<120?(a=l,d=c):e<180?(d=c,h=l):e<240?(d=l,h=c):e<300?(a=l,h=c):(a=c,h=l),{r:Math.round((a+s)*255),g:Math.round((d+s)*255),b:Math.round((h+s)*255)}}function bo(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),c=Math.min(o,n,t),l=(r+c)/2;if(r===c)return{h:0,s:0,l:l*100};let s=r-c,a=l>.5?s/(2-r-c):s/(r+c),d=0;return r===o?d=((n-t)/s+(n<t?6:0))*60:r===n?d=((t-o)/s+2)*60:d=((o-n)/s+4)*60,{h:d,s:a*100,l:l*100}}var ce=class extends HTMLElement{holder=null;picker=null;internal=!1;model;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value")?ye(this.getAttribute("value"),this.model)??{r:255,g:255,b:255}:{r:255,g:255,b:255};this.picker=pe(this.holder,{initialColor:t,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",r=>{this.internal||(this.internal=!0,this.setAttribute("value",ae(r.rgb,this.model)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:r})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ae(r.rgb,this.model)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=ye(t,this.model);r&&this.picker.setColor(r)}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||ae({r:255,g:255,b:255},this.model)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},le=class extends ce{constructor(){super("hex")}},ho=[["color-is-box","hex"],["color-is-box-rgb","rgb"],["color-is-box-hsl","hsl"],["color-is-box-hsv","hsv"],["color-is-box-oklch","oklch"]];for(let[e,o]of ho)customElements.get(e)||customElements.define(e,class extends ce{constructor(){super(o)}});var fo=le;return Ue(xo);})();
