var ye={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Re={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ve(e){let o=e.r/255,n=e.g/255,i=e.b/255,l=Math.max(o,n,i),c=Math.min(o,n,i),u=l-c,a=0;u!==0&&(l===o?a=((n-i)/u+6)%6:l===n?a=(i-o)/u+2:a=(o-n)/u+4,a*=60);let t=l===0?0:u/l*100,h=l*100;return{h:a,s:t,b:h}}function je(e){let o=e.h,n=e.s/100,i=e.b/100,l=i*n,c=l*(1-Math.abs(o/60%2-1)),u=i-l,a,t,h;return o<60?(a=l,t=c,h=0):o<120?(a=c,t=l,h=0):o<180?(a=0,t=l,h=c):o<240?(a=0,t=c,h=l):o<300?(a=c,t=0,h=l):(a=l,t=0,h=c),{r:Math.round((a+u)*255),g:Math.round((t+u)*255),b:Math.round((h+u)*255)}}function Ae(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function we(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function We(e){let o=Ae(e.r/255),n=Ae(e.g/255),i=Ae(e.b/255),l=.4122214708*o+.5363325363*n+.0514459929*i,c=.2119034982*o+.6806995451*n+.1073969566*i,u=.0883024619*o+.2817188376*n+.6299787005*i,a=Math.cbrt(l),t=Math.cbrt(c),h=Math.cbrt(u);return{L:.2104542553*a+.793617785*t-.0040720468*h,a:1.9779984951*a-2.428592205*t+.4505937099*h,b:.0259040371*a+.7827717662*t-.808675766*h}}function Ye(e,o,n){let i=e+.3963377774*o+.2158037573*n,l=e-.1055613458*o-.0638541728*n,c=e-.0894841775*o-1.291485548*n,u=i*i*i,a=l*l*l,t=c*c*c,h=4.0767416621*u-3.3077115913*a+.2309699292*t,x=-1.2684380046*u+2.6097574011*a-.3413193965*t,f=-.0041960863*u-.7034186147*a+1.707614701*t;return{r:Math.round(Math.max(0,Math.min(1,we(h)))*255),g:Math.round(Math.max(0,Math.min(1,we(x)))*255),b:Math.round(Math.max(0,Math.min(1,we(f)))*255)}}function Me(e){let o=We(e),n=Math.sqrt(o.a*o.a+o.b*o.b),i=Math.atan2(o.b,o.a)*(180/Math.PI);return i<0&&(i+=360),{l:o.L,c:n,h:n<1e-4?0:i}}function Ve(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),i=e.c*Math.sin(o);return Ye(e.l,n,i)}function Ze(e,o,n){let i=Ve({l:e,c:o,h:n});if(He(i))return{l:e,c:o,h:n};let l=0,c=o;for(let u=0;u<20;u++){let a=(l+c)/2;i=Ve({l:e,c:a,h:n}),He(i)?l=a:c=a}return{l:e,c:l,h:n}}function He(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function be(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Te(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Pe=.4;function ee(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return je({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,i=e.y*Pe,l=e.z*359,c=Ze(n,i,l);return Ve(c)}}function ie(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ve(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Me(e);return{x:n.l,y:Math.min(n.c/Pe,1),z:n.h/359}}}function Ie(e,o){let n=Re[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Ee(e,o,n,i,l,c=!1){let u;e===0?u={x:i,y:o,z:n}:e===1?u={x:o,y:i,z:n}:u={x:o,y:n,z:i};let a=ee(u,l);return c?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var De=Math.PI/6,Je=Math.cos(De),Qe=Math.sin(De),fe=!1;function Fe(e){fe=e}function L(e,o,n){return{x:n.x+(e.y-e.x)*Je*o,y:n.y+e.z*o-(e.x+e.y)*Qe*o}}function qe(e){let{x:o,y:n,z:i}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:i},{x:o,y:n,z:0},{x:o,y:0,z:i},{x:0,y:n,z:i},{x:o,y:n,z:i}]}var Z=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],eo=64,Be={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function Oe(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let i=e.getContext("2d");return i.scale(n,n),{ctx:i,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function _e(e,o,n,i,l,c,u=!0,a=null){let{ctx:t,scale:h,center:x,width:f,height:C}=e;t.save(),t.clearRect(0,0,f,C);let b=qe(o).map(v=>L(v,h,x));if(no(t,h,x,l),t.save(),t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=8,t.shadowOffsetX=0,t.shadowOffsetY=2,to(t,b,o,l),t.restore(),u&&ao(t,l,h,x),i>=0){let v=ee(n,l),w=fe?{r:255-v.r,g:255-v.g,b:255-v.b}:v,M=L(n,h,x);a&&a.active&&io(t,M,a.rgb,a.alpha),so(t,M,w)}t.restore()}var oo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function no(e,o,n,i){let l=L({x:0,y:0,z:0},o,n),c=[L({x:1,y:0,z:0},o,n),L({x:0,y:1,z:0},o,n),L({x:0,y:0,z:1},o,n)],u=oo[i];e.lineWidth=1.5;for(let a=0;a<c.length;a++)e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(c[a].x,c[a].y),e.strokeStyle=u[a],e.stroke()}function to(e,o,n,i){let l=[n.x,n.y,n.z];for(let c=0;c<Z.length;c++){let u=Z[c],a=l[u.fixedAxis],t=l[u.uAxis],h=l[u.vAxis];if(t<.002&&h<.002)continue;let x=u.quad.map(f=>o[f]);ro(e,x,u.fixedAxis,a,t,h,i)}}function ro(e,o,n,i,l,c,u){let a=eo,t=document.createElement("canvas");t.width=a,t.height=a;let h=t.getContext("2d"),x=h.createImageData(a,a),f=x.data;for(let Q=0;Q<a;Q++)for(let I=0;I<a;I++){let oe=I/(a-1)*l,q=Q/(a-1)*c,K=Ee(n,oe,q,i,u,fe),H=(Q*a+I)*4;f[H]=K.r,f[H+1]=K.g,f[H+2]=K.b,f[H+3]=255}h.putImageData(x,0,0);let C=o[0],b=o[1],v=o[2],w=o[3],M=b.x-C.x,p=b.y-C.y,V=w.x-C.x,z=w.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(b.x,b.y),e.lineTo(v.x,v.y),e.lineTo(w.x,w.y),e.closePath(),e.clip();let k=2/a,X=C.x-M*k-V*k,D=C.y-p*k-z*k,F=1+2*k,B=1+2*k;e.transform(M*F/a,p*F/a,V*B/a,z*B/a,X,D),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}function ao(e,o,n,i){let l=ye[o],c=fe?[L({x:0,y:1,z:1},n,i),L({x:1,y:0,z:1},n,i),L({x:1,y:1,z:0},n,i)]:[L({x:1,y:0,z:0},n,i),L({x:0,y:1,z:0},n,i),L({x:0,y:0,z:1},n,i)],u=fe?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let t=c[a].x+u[a].x,h=c[a].y+u[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(l[a],t,h)}e.globalAlpha=1,e.restore()}var J=30,te=13;function io(e,o,n,i){let l=(J+te)/2,c=5,u=Math.floor(o.x/c)*c,a=Math.floor(o.y/c)*c,t=J*2+c*2,h=Math.max(0,Math.min(1,i));e.save(),e.beginPath(),e.arc(o.x,o.y,J,0,Math.PI*2),e.arc(o.x,o.y,te,0,Math.PI*2,!0),e.clip();for(let M=-1;M*c<=t;M++)for(let p=-1;p*c<=t;p++)e.fillStyle=(M+p)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+M*c,a+p*c,c,c);let x="rgba("+n.r+","+n.g+","+n.b+",0)",f="rgba("+n.r+","+n.g+","+n.b+",1)",C=e;if(typeof C.createConicGradient=="function"){let M=C.createConicGradient(-Math.PI/2,o.x,o.y);M.addColorStop(0,x),M.addColorStop(1,f),e.fillStyle=M,e.fillRect(u-J,a-J,t,t)}else for(let p=0;p<36;p++){let V=-Math.PI/2+p/36*Math.PI*2,z=-Math.PI/2+(p+1)/36*Math.PI*2,k=(p+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(V)*te,o.y+Math.sin(V)*te),e.arc(o.x,o.y,J,V,z),e.arc(o.x,o.y,te,z,V,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+k.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,J,0,Math.PI*2),e.arc(o.x,o.y,te,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-J-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let b=h*Math.PI*2,v=o.x+l*Math.sin(b),w=o.y-l*Math.cos(b);e.beginPath(),e.arc(v,w,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function so(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Ge(e,o,n,i){let l=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return L(l[e],n,i)}function Se(){let e={x:0,y:0};return[L({x:1,y:0,z:0},1,e),L({x:0,y:1,z:0},1,e),L({x:0,y:0,z:1},1,e)].map(n=>{let i=Math.sqrt(n.x*n.x+n.y*n.y);return i>0?{x:n.x/i,y:n.y/i}:{x:0,y:0}})}function de(e,o,n,i,l){let c=Z[e],u=[n.x,n.y,n.z],a=u[c.uAxis],t=u[c.vAxis];if(a<.002||t<.002)return null;let h={x:0,y:0,z:0},x=["x","y","z"];h[x[c.fixedAxis]]=u[c.fixedAxis];let f={...h};f[x[c.uAxis]]=a;let C={...h};C[x[c.vAxis]]=t;let b=L(h,i,l),v=L(f,i,l),w=L(C,i,l),M=v.x-b.x,p=v.y-b.y,V=w.x-b.x,z=w.y-b.y,k=M*z-p*V;if(Math.abs(k)<1e-6)return null;let X=o.x-b.x,D=o.y-b.y,F=(X*z-D*V)/k,B=(D*M-X*p)/k;return F<-.05||F>1.05||B<-.05||B>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,B))}}function Ke(e,o,n,i,l){let c=Z[e],u=[n.x,n.y,n.z],a=u[c.uAxis],t=u[c.vAxis];if(a<.002||t<.002)return null;let h={x:0,y:0,z:0},x=["x","y","z"];h[x[c.fixedAxis]]=u[c.fixedAxis];let f={...h};f[x[c.uAxis]]=a;let C={...h};C[x[c.vAxis]]=t;let b=L(h,i,l),v=L(f,i,l),w=L(C,i,l),M=v.x-b.x,p=v.y-b.y,V=w.x-b.x,z=w.y-b.y,k=M*z-p*V;if(Math.abs(k)<1e-6)return null;let X=o.x-b.x,D=o.y-b.y,F=(X*z-D*V)/k,B=(D*M-X*p)/k;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,B))}}var Ue=22;function Xe(e,o,n,i,l,c,u,a,t,h,x,f,C){let b={...Be};function v(r){let d=e.getBoundingClientRect();return{x:r.clientX-d.left,y:r.clientY-d.top}}let w=!1,M=!1,p=!1,V=9,z=1e3,k=null;function X(){D(),k=setTimeout(F,z)}function D(){k!==null&&(clearTimeout(k),k=null)}function F(){k=null,b.alphaMode=!0,xe(),m(),t()}function B(r){let d=C();return Math.hypot(r.x-d.x,r.y-d.y)}function Q(r){let d=C();return(Math.atan2(r.x-d.x,-(r.y-d.y))+Math.PI*2)%(Math.PI*2)}function I(r){x(Q(r)/(Math.PI*2)),t()}function oe(r){let d=B(r);return d>=te-4&&d<=J+6}function q(r){let d=o(),T=u(),y=a();for(let A=0;A<3;A++){let S=Ge(A,d,T,y),P=r.x-S.x,$=r.y-S.y;if(P*P+$*$<=Ue*Ue)return A}return-1}function K(r){let d=o(),T=u(),y=a();for(let A=Z.length-1;A>=0;A--){let S=de(A,r,d,T,y);if(S)return{faceIndex:A,...S}}return null}let H=-1,re={x:0,y:0},se=0;function he(r,d){H=r,re=d,se=o()[["x","y","z"][r]],b.draggingAxisHandle=r,e.style.cursor="grabbing",t()}function Ce(r){if(D(),H<0)return;let d=r.x-re.x,T=r.y-re.y,A=Se()[H],S=u(),$=(d*A.x+T*A.y)/S,Y=Math.max(0,Math.min(1,se+$)),j=o(),U=["x","y","z"],le={...j,[U[H]]:Y};n(le);let ue=i(),Le=c(),ze=Le>=0?Z[Le]:null,ke={...ue};ze&&H===ze.fixedAxis?ke[U[H]]=Y:ke[U[H]]=Math.min(ue[U[H]],Y),l(ke,c()),t()}function xe(){H=-1,b.draggingAxisHandle=-1}let O=-1,G=null,W=null,N=!1;function me(r,d,T,y){O=r,b.draggingFace=r,G=null,W=null,N=!1,y&&(N=!0,W={s:d,t:T}),s(r,d,T),e.style.cursor="crosshair",t()}function ce(r,d,T){if(D(),O<0)return;let y=o(),A=u(),S=a(),P=de(O,r,y,A,S),$=O;if(!P&&!T){for(let U=Z.length-1;U>=0;U--)if(U!==O&&(P=de(U,r,y,A,S),P)){$=U;break}}if(!P&&T&&(P=Ke(O,r,y,A,S),$=O),!P){t();return}$!==O&&(O=$,b.draggingFace=$,G=null,N=!1,W=null);let{s:Y,t:j}=P;if(d&&W){if(N){let U=Math.abs(Y-W.s),le=Math.abs(j-W.t),ue=.02;(U>ue||le>ue)&&(G=U>=le?"u":"v",N=!1)}G==="u"?j=W.t:G==="v"&&(Y=W.s)}else d||(G=null,N=!1,W=null);s($,Y,j),t()}function s(r,d,T){let y=Z[r],A=o(),S=["x","y","z"],P={...i()};P[S[y.uAxis]]=d*A[S[y.uAxis]],P[S[y.vAxis]]=T*A[S[y.vAxis]],P[S[y.fixedAxis]]=A[S[y.fixedAxis]],l(P,r)}function m(){O=-1,b.draggingFace=-1,G=null,N=!1,W=null}function g(r){M=!0;let d=v(r);if(h()){if(b.alphaMode){if(B(d)<=V){b.alphaMode=!1,t();return}if(oe(d)){r.preventDefault(),w=!0,I(d);return}b.alphaMode=!1,t();return}B(d)<=V&&X()}let T=q(d);if(T>=0){r.preventDefault(),he(T,d);return}let y=K(d);y&&(r.preventDefault(),me(y.faceIndex,y.s,y.t,r.shiftKey))}function E(r){let d=v(r);if(w){r.preventDefault(),I(d);return}if(M&&b.alphaMode&&oe(d)){r.preventDefault(),w=!0,I(d);return}if(H>=0){r.preventDefault(),Ce(d);return}if(O>=0){r.preventDefault(),ce(d,r.shiftKey,r.altKey);return}let T=q(d),y=K(d),A=T,S=T>=0?-1:y?y.faceIndex:-1;(A!==b.hoveredAxisHandle||S!==b.hoveredFace)&&(b.hoveredAxisHandle=A,b.hoveredFace=S,e.style.cursor=A>=0?"grab":S>=0?"crosshair":"default",t())}function _(r){D(),M=!1,w=!1;let d=H>=0||O>=0;xe(),m(),d&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",t())}function R(r){if(r.touches.length!==1)return;p=!0;let d=v(r.touches[0]);if(h()){if(b.alphaMode){if(B(d)<=V){b.alphaMode=!1,t();return}if(oe(d)){r.preventDefault(),w=!0,I(d);return}b.alphaMode=!1,t();return}B(d)<=V&&X()}let T=q(d);if(T>=0){r.preventDefault(),he(T,d);return}let y=K(d);y&&(r.preventDefault(),me(y.faceIndex,y.s,y.t,!1))}function ae(r){if(r.touches.length!==1)return;let d=v(r.touches[0]);w?(r.preventDefault(),I(d)):p&&b.alphaMode&&oe(d)?(r.preventDefault(),w=!0,I(d)):H>=0?(r.preventDefault(),Ce(d)):O>=0&&(r.preventDefault(),ce(d,!1,!1))}function ne(r){D(),p=!1,w=!1,xe(),m(),t()}function ge(r){if(b.alphaMode){if(r.key==="Escape"){b.alphaMode=!1,t();return}if(r.key==="ArrowUp"||r.key==="ArrowRight"){r.preventDefault(),x(Math.min(1,f()+(r.shiftKey?.08:.02))),t();return}if(r.key==="ArrowDown"||r.key==="ArrowLeft"){r.preventDefault(),x(Math.max(0,f()-(r.shiftKey?.08:.02))),t();return}}let d=r.shiftKey?.04:.004,T=i(),y=o(),A=Se(),S=0,P=0;switch(r.key){case"ArrowRight":S=1;break;case"ArrowLeft":S=-1;break;case"ArrowUp":P=-1;break;case"ArrowDown":P=1;break;default:return}r.preventDefault();let $={...T},Y=["x","y","z"];for(let j=0;j<3;j++){let U=S*A[j].x+P*A[j].y;if(Math.abs(U)>.3){let le=T[Y[j]]+d*Math.sign(U);$[Y[j]]=Math.max(0,Math.min(y[Y[j]],le))}}l($,c()),t()}e.addEventListener("mousedown",g),window.addEventListener("mousemove",E),window.addEventListener("mouseup",_),e.addEventListener("touchstart",R,{passive:!1}),e.addEventListener("touchmove",ae,{passive:!1}),e.addEventListener("touchend",ne),e.addEventListener("keydown",ge),e.setAttribute("tabindex","0");function pe(){D(),e.removeEventListener("mousedown",g),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",_),e.removeEventListener("touchstart",R),e.removeEventListener("touchmove",ae),e.removeEventListener("touchend",ne),e.removeEventListener("keydown",ge)}return{state:b,destroy:pe}}var Ne=`.box-picker {\r
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
`;var So=uo,$e=!1;function lo(){if($e||typeof document>"u")return;$e=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ne,document.head.appendChild(e)}function uo(e,o={}){let n=o.size??300,i=o.controls??!0,l=o.showInputs??!1,c=o.showModeToggle??!1,u=o.showCorners??!1,a={mode:()=>t,switchMode:s=>Q(s),onHexInput:s=>{let m=Te(s);m?(f=ie(F?{r:255-m.r,g:255-m.g,b:255-m.b}:m,t),x={x:Math.max(x.x,f.x),y:Math.max(x.y,f.y),z:Math.max(x.z,f.z)},N(),G(),K()):G()},onChannelInput:(s,m,g)=>{let E=Math.max(0,Math.min(g,m)),_=["x","y","z"],R=E/g;if(F){let ae={...f,[_[s]]:R},ne=ee(ae,t);f=ie({r:255-ne.r,g:255-ne.g,b:255-ne.b},t)}else f={...f,[_[s]]:R};R>x[_[s]]&&(x={...x,[_[s]]:R}),N(),G(),K()},getRgbForCopy:()=>ee(f,t),onRandom:s=>ce(s),onReset:()=>ce({r:0,g:0,b:0})},t=o.mode??"rgb",h=o.initialColor?ie(o.initialColor,t):{x:.7,y:.4,z:.85},x={x:1,y:1,z:1},f={...h},C=0,b=()=>o.alpha!==void 0,v=Math.max(0,Math.min(1,o.alpha??1));function w(s){let m=Math.max(0,Math.min(1,s));m!==v&&(v=m,N(),G(),K())}let M=new Set;lo();let p=document.createElement("div");p.className="box-picker";let V=document.createElement("canvas");V.style.cursor="grab",p.appendChild(V);let z=Oe(V,n),k=null,X=document.createElement("div");X.className="box-picker-controls",k=document.createElement("div"),k.className="box-picker-swatch",X.appendChild(k),p.appendChild(X),(l||c||u)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(X,a,{showInputs:l,showModeToggle:c,showCorners:u})}).catch(()=>{}),e.appendChild(p);let D=Xe(V,()=>x,s=>{x=s},()=>f,(s,m)=>{f=s,C=m,N(),G()},()=>C,()=>z.scale,()=>z.center,K,b,w,()=>v,()=>L(f,z.scale,z.center)),F=!1,B=!0;V.addEventListener("mouseenter",()=>{B=!0,K()}),V.addEventListener("mouseleave",()=>{B=!1,K()}),V.addEventListener("dblclick",()=>{F=!F,Fe(F),N(),G(),K()});function Q(s){if(s===t)return;let m=ee(f,t),g={...f},E={...x};t=s;let _=ie(m,t),R={x:1,y:1,z:1};f=_,x=R,oe(g,_,E,R,300),G()}let I=null;function oe(s,m,g,E,_){I!==null&&cancelAnimationFrame(I);let R=performance.now();function ae(ne){let ge=ne-R,pe=Math.min(1,ge/_),r=1-Math.pow(1-pe,3);f={x:s.x+(m.x-s.x)*r,y:s.y+(m.y-s.y)*r,z:s.z+(m.z-s.z)*r},x={x:g.x+(E.x-g.x)*r,y:g.y+(E.y-g.y)*r,z:g.z+(E.z-g.z)*r},H(),N(),pe<1?I=requestAnimationFrame(ae):I=null}I=requestAnimationFrame(ae)}let q=!1;function K(){q||(q=!0,requestAnimationFrame(()=>{q=!1,H()}))}function H(){_e(z,x,f,C,t,D.state,B,{active:D.state.alphaMode,alpha:v,rgb:O()})}function re(s,m,g){return Math.round(s+(m-s)*g)}function se(s,m){let g=m>0?255:0,E=Math.abs(m);return be({r:re(s.r,g,E),g:re(s.g,g,E),b:re(s.b,g,E)})}function he(s,m){let g=Te(m)||{r:128,g:128,b:128},E=se(g,.35),_=se(g,0),R=se(g,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${E}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${_}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${R}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function Ce(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function xe(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function O(){let s=ee(f,t);return F?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function G(){if(!i)return;let s=O(),m=be(s);k&&he(k,m);let g=p.querySelector(".box-picker-hex");g&&(g.value=m),W(),p._updateModeButtons&&p._updateModeButtons()}function W(){if(!i)return;let s=ye[t],m=F?ie(O(),t):f,g=Ie(m,t),E=p.querySelectorAll(".box-picker-channel input"),_=p.querySelectorAll(".box-picker-channel label");for(let R=0;R<E.length;R++)_[R].textContent=s[R],_[R].style.color="",_[R].style.textShadow="none",E[R].value=String(g[R])}function N(){let s=O(),m={rgb:s,hsb:ve(s),oklch:Me(s),hex:be(s),alpha:v};for(let g of M)g(m)}function me(){let s=ee(f,t);return{rgb:s,hsb:ve(s),oklch:Me(s),hex:be(s)}}G(),H();let ce=s=>{f=ie(s,t),x={x:Math.max(x.x,f.x),y:Math.max(x.y,f.y),z:Math.max(x.z,f.z)};let m=L(f,z.scale,z.center);C=-1;for(let g=Z.length-1;g>=0;g--)if(de(g,m,x,z.scale,z.center)){C=g;break}N(),G(),K()};return{getColor:me,getMode:()=>t,setColor:ce,setAlpha:w,getAlpha:()=>v,setMode(s){Q(s)},on(s,m){M.add(m)},off(s,m){M.delete(m)},destroy(){D.destroy(),I!==null&&cancelAnimationFrame(I),e.removeChild(p)}}}export{uo as createBoxColorPicker,So as createColorPicker,Fe as setBoxInvert};
