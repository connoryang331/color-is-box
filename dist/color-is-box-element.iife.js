var ColorIsBoxElement=(()=>{var ce=Object.defineProperty;var De=Object.getOwnPropertyDescriptor;var Pe=Object.getOwnPropertyNames;var _e=Object.prototype.hasOwnProperty;var Ge=(e,o)=>()=>(e&&(o=e(e=0)),o);var me=(e,o)=>{for(var t in o)ce(e,t,{get:o[t],enumerable:!0})},Ne=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of Pe(o))!_e.call(e,a)&&a!==t&&ce(e,a,{get:()=>o[a],enumerable:!(n=De(o,a))||n.enumerable});return e};var $e=e=>Ne(ce({},"__esModule",{value:!0}),e);var Se={};me(Se,{createControls:()=>io});function ze(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function He(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function io(e,o,t){if(t.showModeToggle){let n=document.createElement("div");n.className="box-picker-mode-toggle";let a=f=>{let c=document.createElement("button");return c.textContent=f.toUpperCase(),c.addEventListener("click",()=>o.switchMode(f)),n.appendChild(c),c},l=a("oklch"),d=a("rgb"),i=a("hsb"),s=()=>{let f=o.mode();d.classList.toggle("active",f==="rgb"),i.classList.toggle("active",f==="hsb"),l.classList.toggle("active",f==="oklch")};s();let b=o.switchMode;o._markActive=s,e.appendChild(n)}if(t.showInputs){let n=document.createElement("input");n.className="box-picker-hex",n.type="text",n.spellcheck=!1,n.addEventListener("change",()=>{let c=n.value;/^#?[0-9a-f]{6}$/i.test(c)?o.onHexInput(c):o.onHexInput("")}),n.addEventListener("click",()=>{ze(o.getRgbForCopy()?"#"+ao(o.getRgbForCopy()):"#ffffff"),He(n)});let a=document.createElement("div");a.className="box-picker-channels";let l=[],d=[],i=["R","G","B"];for(let c=0;c<3;c++){let C=document.createElement("div");C.className="box-picker-channel";let x=document.createElement("label");x.textContent=i[c];let p=document.createElement("input");p.type="text",p.inputMode="numeric",C.appendChild(x),C.appendChild(p),a.appendChild(C),l.push(p),d.push(x),p.addEventListener("change",()=>{let M=parseFloat(p.value);isNaN(M)||o.onChannelInput(c,M,255)}),p.addEventListener("click",()=>{let M=o.getRgbForCopy();ze(`${M.r}, ${M.g}, ${M.b}`),He(p)})}let s=document.createElement("div");s.className="box-picker-hexrow";let b=document.createElement("div");b.className="box-picker-hexwrap";let f=document.createElement("label");f.textContent="Hex",b.appendChild(f),b.appendChild(n),s.appendChild(a),s.appendChild(b),e.appendChild(s),e._inputs={hexInput:n,inputs:l,labels:d}}if(t.showCorners){let n=document.createElement("button");n.className="box-corner-btn box-corner-left",n.title="Random color",n.setAttribute("aria-label","Random color"),n.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',n.addEventListener("click",()=>{let l=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);o.onRandom({r:l,g:d,b:i})}),e.appendChild(n);let a=document.createElement("button");a.className="box-corner-btn box-corner-right",a.title="Reset",a.setAttribute("aria-label","Reset"),a.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',a.addEventListener("click",()=>o.onReset()),e.appendChild(a)}}function ao(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Ie=Ge(()=>{});var lo={};me(lo,{ColorIsBoxElement:()=>ee,createBoxColorPicker:()=>Be,createColorPicker:()=>xe,default:()=>co,setBoxInvert:()=>he});var ne={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},ge={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function re(e){let o=e.r/255,t=e.g/255,n=e.b/255,a=Math.max(o,t,n),l=Math.min(o,t,n),d=a-l,i=0;d!==0&&(a===o?i=((t-n)/d+6)%6:a===t?i=(n-o)/d+2:i=(o-t)/d+4,i*=60);let s=a===0?0:d/a*100,b=a*100;return{h:i,s,b}}function Xe(e){let o=e.h,t=e.s/100,n=e.b/100,a=n*t,l=a*(1-Math.abs(o/60%2-1)),d=n-a,i,s,b;return o<60?(i=a,s=l,b=0):o<120?(i=l,s=a,b=0):o<180?(i=0,s=a,b=l):o<240?(i=0,s=l,b=a):o<300?(i=l,s=0,b=a):(i=a,s=0,b=l),{r:Math.round((i+d)*255),g:Math.round((s+d)*255),b:Math.round((b+d)*255)}}function le(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function de(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Ke(e){let o=le(e.r/255),t=le(e.g/255),n=le(e.b/255),a=.4122214708*o+.5363325363*t+.0514459929*n,l=.2119034982*o+.6806995451*t+.1073969566*n,d=.0883024619*o+.2817188376*t+.6299787005*n,i=Math.cbrt(a),s=Math.cbrt(l),b=Math.cbrt(d);return{L:.2104542553*i+.793617785*s-.0040720468*b,a:1.9779984951*i-2.428592205*s+.4505937099*b,b:.0259040371*i+.7827717662*s-.808675766*b}}function Ue(e,o,t){let n=e+.3963377774*o+.2158037573*t,a=e-.1055613458*o-.0638541728*t,l=e-.0894841775*o-1.291485548*t,d=n*n*n,i=a*a*a,s=l*l*l,b=4.0767416621*d-3.3077115913*i+.2309699292*s,f=-1.2684380046*d+2.6097574011*i-.3413193965*s,c=-.0041960863*d-.7034186147*i+1.707614701*s;return{r:Math.round(Math.max(0,Math.min(1,de(b)))*255),g:Math.round(Math.max(0,Math.min(1,de(f)))*255),b:Math.round(Math.max(0,Math.min(1,de(c)))*255)}}function ie(e){let o=Ke(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function ue(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return Ue(e.l,t,n)}function qe(e,o,t){let n=ue({l:e,c:o,h:t});if(pe(n))return{l:e,c:o,h:t};let a=0,l=o;for(let d=0;d<20;d++){let i=(a+l)/2;n=ue({l:e,c:i,h:t}),pe(n)?a=i:l=i}return{l:e,c:a,h:t}}function pe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function j(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function be(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ye=.4;function K(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Xe({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*ye,a=e.z*359,l=qe(t,n,a);return ue(l)}}function W(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=re(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=ie(e);return{x:t.l,y:Math.min(t.c/ye,1),z:t.h/359}}}function ve(e,o){let t=ge[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Ce(e,o,t,n,a,l=!1){let d;e===0?d={x:n,y:o,z:t}:e===1?d={x:o,y:n,z:t}:d={x:o,y:t,z:n};let i=K(d,a);return l?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var ke=Math.PI/6,je=Math.cos(ke),We=Math.sin(ke),J=!1;function he(e){J=e}function R(e,o,t){return{x:t.x+(e.y-e.x)*je*o,y:t.y+e.z*o-(e.x+e.y)*We*o}}function Ze(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var N=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Ye=128,Me={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function we(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ae(e,o,t,n,a,l,d=!0){let{ctx:i,scale:s,center:b,width:f,height:c}=e;i.save(),i.clearRect(0,0,f,c);let C=Ze(o).map(x=>R(x,s,b));if(Je(i,s,b,a),i.save(),i.shadowColor="rgba(0,0,0,0.35)",i.shadowBlur=8,i.shadowOffsetX=0,i.shadowOffsetY=2,eo(i,C,o,a),i.restore(),d&&to(i,a,s,b),n>=0){let x=K(t,a),p=J?{r:255-x.r,g:255-x.g,b:255-x.b}:x,M=R(t,s,b);no(i,M,p)}i.restore()}var Qe={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Je(e,o,t,n){let a=R({x:0,y:0,z:0},o,t),l=[R({x:1,y:0,z:0},o,t),R({x:0,y:1,z:0},o,t),R({x:0,y:0,z:1},o,t)],d=Qe[n];e.lineWidth=1.5;for(let i=0;i<l.length;i++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(l[i].x,l[i].y),e.strokeStyle=d[i],e.stroke()}function eo(e,o,t,n){let a=[t.x,t.y,t.z];for(let l=0;l<N.length;l++){let d=N[l],i=a[d.fixedAxis],s=a[d.uAxis],b=a[d.vAxis];if(s<.002&&b<.002)continue;let f=d.quad.map(c=>o[c]);oo(e,f,d.fixedAxis,i,s,b,n)}}function oo(e,o,t,n,a,l,d){let i=Ye,s=document.createElement("canvas");s.width=i,s.height=i;let b=s.getContext("2d"),f=b.createImageData(i,i),c=f.data;for(let D=0;D<i;D++)for(let B=0;B<i;B++){let q=B/(i-1)*a,U=D/(i-1)*l,$=Ce(t,q,U,n,d,J),P=(D*i+B)*4;c[P]=$.r,c[P+1]=$.g,c[P+2]=$.b,c[P+3]=255}b.putImageData(f,0,0);let C=o[0],x=o[1],p=o[2],M=o[3],z=x.x-C.x,S=x.y-C.y,I=M.x-C.x,E=M.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(x.x,x.y),e.lineTo(p.x,p.y),e.lineTo(M.x,M.y),e.closePath(),e.clip();let A=2/i,V=C.x-z*A-I*A,F=C.y-S*A-E*A,H=1+2*A,O=1+2*A;e.transform(z*H/i,S*H/i,I*O/i,E*O/i,V,F),e.imageSmoothingEnabled=!0,e.drawImage(s,0,0),e.restore()}function to(e,o,t,n){let a=ne[o],l=J?[R({x:0,y:1,z:1},t,n),R({x:1,y:0,z:1},t,n),R({x:1,y:1,z:0},t,n)]:[R({x:1,y:0,z:0},t,n),R({x:0,y:1,z:0},t,n),R({x:0,y:0,z:1},t,n)],d=J?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}],s=[{x:1,y:0,z:0},{x:0,y:1,z:0},{x:0,y:0,z:1}].map(c=>j(K(c,o)));e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;let b={rgb:[],hsb:[2],oklch:[0]},f=performance.now()/1e3;for(let c=0;c<3;c++){let C=l[c].x+d[c].x,x=l[c].y+d[c].y,p=f*1.8+c*2.1,M=.62+.38*(.5+.5*Math.sin(p)),z=11+Math.round(1.6*(.5+.5*Math.sin(p)));e.globalAlpha=M,e.font=`bold ${z}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let I=b[o].includes(c)?"#888888":s[c];e.fillStyle=I,e.fillText(a[c],C,x)}e.globalAlpha=1,e.restore()}function no(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Le(e,o,t,n){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(a[e],t,n)}function fe(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function Z(e,o,t,n,a){let l=N[e],d=[t.x,t.y,t.z],i=d[l.uAxis],s=d[l.vAxis];if(i<.002||s<.002)return null;let b={x:0,y:0,z:0},f=["x","y","z"];b[f[l.fixedAxis]]=d[l.fixedAxis];let c={...b};c[f[l.uAxis]]=i;let C={...b};C[f[l.vAxis]]=s;let x=R(b,n,a),p=R(c,n,a),M=R(C,n,a),z=p.x-x.x,S=p.y-x.y,I=M.x-x.x,E=M.y-x.y,A=z*E-S*I;if(Math.abs(A)<1e-6)return null;let V=o.x-x.x,F=o.y-x.y,H=(V*E-F*I)/A,O=(F*z-V*S)/A;return H<-.05||H>1.05||O<-.05||O>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}function Te(e,o,t,n,a){let l=N[e],d=[t.x,t.y,t.z],i=d[l.uAxis],s=d[l.vAxis];if(i<.002||s<.002)return null;let b={x:0,y:0,z:0},f=["x","y","z"];b[f[l.fixedAxis]]=d[l.fixedAxis];let c={...b};c[f[l.uAxis]]=i;let C={...b};C[f[l.vAxis]]=s;let x=R(b,n,a),p=R(c,n,a),M=R(C,n,a),z=p.x-x.x,S=p.y-x.y,I=M.x-x.x,E=M.y-x.y,A=z*E-S*I;if(Math.abs(A)<1e-6)return null;let V=o.x-x.x,F=o.y-x.y,H=(V*E-F*I)/A,O=(F*z-V*S)/A;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,O))}}var Ee=22;function Re(e,o,t,n,a,l,d,i,s){let b={...Me};function f(u){let g=e.getBoundingClientRect();return{x:u.clientX-g.left,y:u.clientY-g.top}}function c(u){let g=o(),k=d(),v=i();for(let w=0;w<3;w++){let r=Le(w,g,k,v),h=u.x-r.x,m=u.y-r.y;if(h*h+m*m<=Ee*Ee)return w}return-1}function C(u){let g=o(),k=d(),v=i();for(let w=N.length-1;w>=0;w--){let r=Z(w,u,g,k,v);if(r)return{faceIndex:w,...r}}return null}let x=-1,p={x:0,y:0},M=0;function z(u,g){x=u,p=g,M=o()[["x","y","z"][u]],b.draggingAxisHandle=u,e.style.cursor="grabbing",s()}function S(u){if(x<0)return;let g=u.x-p.x,k=u.y-p.y,w=fe()[x],r=d(),m=(g*w.x+k*w.y)/r,T=Math.max(0,Math.min(1,M+m)),L=o(),y=["x","y","z"],_={...L,[y[x]]:T};t(_);let G=n(),te=l(),Q=te>=0?N[te]:null,X={...G};Q&&x===Q.fixedAxis?X[y[x]]=T:X[y[x]]=Math.min(G[y[x]],T),a(X,l()),s()}function I(){x=-1,b.draggingAxisHandle=-1}let E=-1,A=null,V=null,F=!1;function H(u,g,k,v){E=u,b.draggingFace=u,A=null,V=null,F=!1,v&&(F=!0,V={s:g,t:k}),D(u,g,k),e.style.cursor="crosshair",s()}function O(u,g,k){if(E<0)return;let v=o(),w=d(),r=i(),h=Z(E,u,v,w,r),m=E;if(!h&&!k){for(let y=N.length-1;y>=0;y--)if(y!==E&&(h=Z(y,u,v,w,r),h)){m=y;break}}if(!h&&k&&(h=Te(E,u,v,w,r),m=E),!h){s();return}m!==E&&(E=m,b.draggingFace=m,A=null,F=!1,V=null);let{s:T,t:L}=h;if(g&&V){if(F){let y=Math.abs(T-V.s),_=Math.abs(L-V.t),G=.02;(y>G||_>G)&&(A=y>=_?"u":"v",F=!1)}A==="u"?L=V.t:A==="v"&&(T=V.s)}else g||(A=null,F=!1,V=null);D(m,T,L),s()}function D(u,g,k){let v=N[u],w=o(),r=["x","y","z"],h={...n()};h[r[v.uAxis]]=g*w[r[v.uAxis]],h[r[v.vAxis]]=k*w[r[v.vAxis]],h[r[v.fixedAxis]]=w[r[v.fixedAxis]],a(h,u)}function B(){E=-1,b.draggingFace=-1,A=null,F=!1,V=null}function q(u){let g=f(u),k=c(g);if(k>=0){u.preventDefault(),z(k,g);return}let v=C(g);v&&(u.preventDefault(),H(v.faceIndex,v.s,v.t,u.shiftKey))}function U(u){let g=f(u);if(x>=0){u.preventDefault(),S(g);return}if(E>=0){u.preventDefault(),O(g,u.shiftKey,u.altKey);return}let k=c(g),v=C(g),w=k,r=k>=0?-1:v?v.faceIndex:-1;(w!==b.hoveredAxisHandle||r!==b.hoveredFace)&&(b.hoveredAxisHandle=w,b.hoveredFace=r,e.style.cursor=w>=0?"grab":r>=0?"crosshair":"default",s())}function $(u){let g=x>=0||E>=0;I(),B(),g&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",s())}function P(u){if(u.touches.length!==1)return;let g=f(u.touches[0]),k=c(g);if(k>=0){u.preventDefault(),z(k,g);return}let v=C(g);v&&(u.preventDefault(),H(v.faceIndex,v.s,v.t,!1))}function oe(u){if(u.touches.length!==1)return;let g=f(u.touches[0]);x>=0?(u.preventDefault(),S(g)):E>=0&&(u.preventDefault(),O(g,!1,!1))}function ae(u){I(),B(),s()}function se(u){let g=u.shiftKey?.04:.004,k=n(),v=o(),w=fe(),r=0,h=0;switch(u.key){case"ArrowRight":r=1;break;case"ArrowLeft":r=-1;break;case"ArrowUp":h=-1;break;case"ArrowDown":h=1;break;default:return}u.preventDefault();let m={...k},T=["x","y","z"];for(let L=0;L<3;L++){let y=r*w[L].x+h*w[L].y;if(Math.abs(y)>.3){let _=k[T[L]]+g*Math.sign(y);m[T[L]]=Math.max(0,Math.min(v[T[L]],_))}}a(m,l()),s()}e.addEventListener("mousedown",q),window.addEventListener("mousemove",U),window.addEventListener("mouseup",$),e.addEventListener("touchstart",P,{passive:!1}),e.addEventListener("touchmove",oe,{passive:!1}),e.addEventListener("touchend",ae),e.addEventListener("keydown",se),e.setAttribute("tabindex","0");function Y(){e.removeEventListener("mousedown",q),window.removeEventListener("mousemove",U),window.removeEventListener("mouseup",$),e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",oe),e.removeEventListener("touchend",ae),e.removeEventListener("keydown",se)}return{state:b,destroy:Y}}var Ve=`.box-picker {\r
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
`;var xe=Be,Fe=!1;function so(){if(Fe||typeof document>"u")return;Fe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ve,document.head.appendChild(e)}function Be(e,o={}){let t=o.size??300,n=o.controls??!0,a=o.showInputs??!1,l=o.showModeToggle??!1,d=o.showCorners??!1,i={mode:()=>s,switchMode:r=>F(r),onHexInput:r=>{let h=be(r);h?(c=W(A?{r:255-h.r,g:255-h.g,b:255-h.b}:h,s),f={x:Math.max(f.x,c.x),y:Math.max(f.y,c.y),z:Math.max(f.z,c.z)},k(),u(),B()):u()},onChannelInput:(r,h,m)=>{let T=Math.max(0,Math.min(m,h)),L=["x","y","z"],y=T/m;if(A){let _={...c,[L[r]]:y},G=K(_,s);c=W({r:255-G.r,g:255-G.g,b:255-G.b},s)}else c={...c,[L[r]]:y};y>f[L[r]]&&(f={...f,[L[r]]:y}),k(),u(),B()},getRgbForCopy:()=>K(c,s),onRandom:r=>w(r),onReset:()=>w({r:0,g:0,b:0})},s=o.mode??"rgb",b=o.initialColor?W(o.initialColor,s):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},c={...b},C=0,x=new Set;so();let p=document.createElement("div");p.className="box-picker";let M=document.createElement("canvas");M.style.cursor="grab",p.appendChild(M);let z=we(M,t),S=null,I=document.createElement("div");I.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",I.appendChild(S),p.appendChild(I),(a||l||d)&&Promise.resolve().then(()=>(Ie(),Se)).then(r=>{r.createControls(I,i,{showInputs:a,showModeToggle:l,showCorners:d})}).catch(()=>{}),e.appendChild(p);let E=Re(M,()=>f,r=>{f=r},()=>c,(r,h)=>{c=r,C=h,k(),u()},()=>C,()=>z.scale,()=>z.center,B),A=!1,V=!0;M.addEventListener("mouseenter",()=>{V=Math.random()<.5,B()}),M.addEventListener("mouseleave",()=>{V=Math.random()<.5,B()}),M.addEventListener("dblclick",()=>{A=!A,he(A),k(),u(),B()});function F(r){if(r===s)return;let h=K(c,s),m={...c},T={...f};s=r;let L=W(h,s),y={x:1,y:1,z:1};c=L,f=y,O(m,L,T,y,300),u()}let H=null;function O(r,h,m,T,L){H!==null&&cancelAnimationFrame(H);let y=performance.now();function _(G){let te=G-y,Q=Math.min(1,te/L),X=1-Math.pow(1-Q,3);c={x:r.x+(h.x-r.x)*X,y:r.y+(h.y-r.y)*X,z:r.z+(h.z-r.z)*X},f={x:m.x+(T.x-m.x)*X,y:m.y+(T.y-m.y)*X,z:m.z+(T.z-m.z)*X},U(),k(),Q<1?H=requestAnimationFrame(_):H=null}H=requestAnimationFrame(_)}let D=!1;function B(){D||(D=!0,requestAnimationFrame(()=>{D=!1,U()}))}let q=!0;(function r(){q&&(B(),requestAnimationFrame(r))})();function U(){Ae(z,f,c,C,s,E.state,V)}function $(r,h,m){return Math.round(r+(h-r)*m)}function P(r,h){let m=h>0?255:0,T=Math.abs(h);return j({r:$(r.r,m,T),g:$(r.g,m,T),b:$(r.b,m,T)})}function oe(r,h){let m=be(h)||{r:128,g:128,b:128},T=P(m,.35),L=P(m,0),y=P(m,-.35);r.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${T}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${y}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,r.style.backgroundColor="transparent"}function ae(r){try{navigator.clipboard.writeText(r).catch(()=>{})}catch{}}function se(r){r&&(r.style.borderColor="#4ade80",r.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{r.style.borderColor="",r.style.boxShadow=""},500))}function Y(){let r=K(c,s);return A?{r:255-r.r,g:255-r.g,b:255-r.b}:r}function u(){if(!n)return;let r=Y(),h=j(r);S&&oe(S,h);let m=p.querySelector(".box-picker-hex");m&&(m.value=h),g(),p._updateModeButtons&&p._updateModeButtons()}function g(){if(!n)return;let r=ne[s],h=A?W(Y(),s):c,m=ve(h,s),T=p.querySelectorAll(".box-picker-channel input"),L=p.querySelectorAll(".box-picker-channel label");for(let y=0;y<T.length;y++)L[y].textContent=r[y],L[y].style.color="",L[y].style.textShadow="none",T[y].value=String(m[y])}function k(){let r=Y(),h={rgb:r,hsb:re(r),oklch:ie(r),hex:j(r)};for(let m of x)m(h)}function v(){let r=K(c,s);return{rgb:r,hsb:re(r),oklch:ie(r),hex:j(r)}}u(),U();let w=r=>{c=W(r,s),f={x:Math.max(f.x,c.x),y:Math.max(f.y,c.y),z:Math.max(f.z,c.z)};let h=R(c,z.scale,z.center);C=-1;for(let m=N.length-1;m>=0;m--)if(Z(m,h,f,z.scale,z.center)){C=m;break}k(),u(),B()};return{getColor:v,getMode:()=>s,setColor:w,setMode(r){F(r)},on(r,h){x.add(h)},off(r,h){x.delete(h)},destroy(){q=!1,E.destroy(),H!==null&&cancelAnimationFrame(H),e.removeChild(p)}}}function Oe(e){let o=e.match(/^#?([0-9a-f]{6})$/i);if(!o)return{r:255,g:255,b:255};let t=parseInt(o[1],16);return{r:t>>16&255,g:t>>8&255,b:t&255}}var ee=class extends HTMLElement{holder=null;picker=null;internal=!1;static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10);this.picker=xe(this.holder,{initialColor:Oe(this.getAttribute("value")||"#ffffff"),size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true"}),this.picker.on("change",n=>{this.internal||(this.internal=!0,this.setAttribute("value",n.hex),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:n})),this.dispatchEvent(new CustomEvent("color-changed",{detail:n.hex})))});let t=this.getAttribute("mode");t&&this.picker.setMode(t)}attributeChangedCallback(o,t,n){!this.picker||!n||this.internal||(o==="value"?this.picker.setColor(Oe(n)):o==="mode"&&this.picker.setMode(n))}get value(){return this.getAttribute("value")||"#ffffff"}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}};customElements.get("color-is-box")||customElements.define("color-is-box",ee);var co=ee;return $e(lo);})();
