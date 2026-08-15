var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Be={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ne(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),d=r-s,i=0;d!==0&&(r===o?i=((n-t)/d+6)%6:r===n?i=(t-o)/d+2:i=(o-n)/d+4,i*=60);let a=r===0?0:d/r*100,h=r*100;return{h:i,s:a,b:h}}function me(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,s=r*(1-Math.abs(o/60%2-1)),d=t-r,i,a,h;return o<60?(i=r,a=s,h=0):o<120?(i=s,a=r,h=0):o<180?(i=0,a=r,h=s):o<240?(i=0,a=s,h=r):o<300?(i=s,a=0,h=r):(i=r,a=0,h=s),{r:Math.round((i+d)*255),g:Math.round((a+d)*255),b:Math.round((h+d)*255)}}function Le(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Re(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function oo(e){let o=Le(e.r/255),n=Le(e.g/255),t=Le(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,d=.0883024619*o+.2817188376*n+.6299787005*t,i=Math.cbrt(r),a=Math.cbrt(s),h=Math.cbrt(d);return{L:.2104542553*i+.793617785*a-.0040720468*h,a:1.9779984951*i-2.428592205*a+.4505937099*h,b:.0259040371*i+.7827717662*a-.808675766*h}}function to(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,d=t*t*t,i=r*r*r,a=s*s*s,h=4.0767416621*d-3.3077115913*i+.2309699292*a,b=-1.2684380046*d+2.6097574011*i-.3413193965*a,x=-.0041960863*d-.7034186147*i+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,Re(h)))*255),g:Math.round(Math.max(0,Math.min(1,Re(b)))*255),b:Math.round(Math.max(0,Math.min(1,Re(x)))*255)}}function he(e){let o=oo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function ge(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return to(e.l,n,t)}function no(e,o,n){let t=ge({l:e,c:o,h:n});if($e(t))return{l:e,c:o,h:n};let r=0,s=o;for(let d=0;d<20;d++){let i=(r+s)/2;t=ge({l:e,c:i,h:n}),$e(t)?r=i:s=i}return{l:e,c:r,h:n}}function $e(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function re(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function be(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Oe=.4;function ee(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return me({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Oe,r=e.z*359,s=no(n,t,r);return ge(s)}}function le(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ne(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=he(e);return{x:n.l,y:Math.min(n.c/Oe,1),z:n.h/359}}}function Ge(e,o){let n=Be[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function _e(e,o,n,t,r,s=!1){let d;e===0?d={x:t,y:o,z:n}:e===1?d={x:o,y:t,z:n}:d={x:o,y:n,z:t};let i=ee(d,r);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var Ke=Math.PI/6,ro=Math.cos(Ke),ao=Math.sin(Ke),pe=!1;function Ue(e){pe=e}function L(e,o,n){return{x:n.x+(e.y-e.x)*ro*o,y:n.y+e.z*o-(e.x+e.y)*ao*o}}function io(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Z=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],so=64,Xe={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function Ne(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function je(e,o,n,t,r,s,d=!0,i=null){let{ctx:a,scale:h,center:b,width:x,height:C}=e;a.save(),a.clearRect(0,0,x,C);let f=io(o).map(v=>L(v,h,b));if(co(a,h,b,r),a.save(),a.shadowColor="rgba(0,0,0,0.35)",a.shadowBlur=8,a.shadowOffsetX=0,a.shadowOffsetY=2,uo(a,f,o,r),a.restore(),d&&bo(a,r,h,b),t>=0){let v=ee(n,r),w=pe?{r:255-v.r,g:255-v.g,b:255-v.b}:v,M=L(n,h,b);i&&i.active&&fo(a,M,i.rgb,i.alpha),xo(a,M,w)}a.restore()}var lo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function co(e,o,n,t){let r=L({x:0,y:0,z:0},o,n),s=[L({x:1,y:0,z:0},o,n),L({x:0,y:1,z:0},o,n),L({x:0,y:0,z:1},o,n)],d=lo[t];e.lineWidth=1.5;for(let i=0;i<s.length;i++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(s[i].x,s[i].y),e.strokeStyle=d[i],e.stroke()}function uo(e,o,n,t){let r=[n.x,n.y,n.z];for(let s=0;s<Z.length;s++){let d=Z[s],i=r[d.fixedAxis],a=r[d.uAxis],h=r[d.vAxis];if(a<.002&&h<.002)continue;let b=d.quad.map(x=>o[x]);ho(e,b,d.fixedAxis,i,a,h,t)}}function ho(e,o,n,t,r,s,d){let i=so,a=document.createElement("canvas");a.width=i,a.height=i;let h=a.getContext("2d"),b=h.createImageData(i,i),x=b.data;for(let Q=0;Q<i;Q++)for(let P=0;P<i;P++){let oe=P/(i-1)*r,q=Q/(i-1)*s,_=_e(n,oe,q,t,d,pe),H=(Q*i+P)*4;x[H]=_.r,x[H+1]=_.g,x[H+2]=_.b,x[H+3]=255}h.putImageData(b,0,0);let C=o[0],f=o[1],v=o[2],w=o[3],M=f.x-C.x,p=f.y-C.y,T=w.x-C.x,R=w.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(f.x,f.y),e.lineTo(v.x,v.y),e.lineTo(w.x,w.y),e.closePath(),e.clip();let k=2/i,U=C.x-M*k-T*k,F=C.y-p*k-R*k,D=1+2*k,B=1+2*k;e.transform(M*D/i,p*D/i,T*B/i,R*B/i,U,F),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function bo(e,o,n,t){let r=Ae[o],s=pe?[L({x:0,y:1,z:1},n,t),L({x:1,y:0,z:1},n,t),L({x:1,y:1,z:0},n,t)]:[L({x:1,y:0,z:0},n,t),L({x:0,y:1,z:0},n,t),L({x:0,y:0,z:1},n,t)],d=pe?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let a=s[i].x+d[i].x,h=s[i].y+d[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[i],a,h)}e.globalAlpha=1,e.restore()}var J=30,ae=13;function fo(e,o,n,t){let r=(J+ae)/2,s=5,d=Math.floor(o.x/s)*s,i=Math.floor(o.y/s)*s,a=J*2+s*2,h=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,J,0,Math.PI*2),e.arc(o.x,o.y,ae,0,Math.PI*2,!0),e.clip();for(let M=-1;M*s<=a;M++)for(let p=-1;p*s<=a;p++)e.fillStyle=(M+p)%2===0?"#ffffff":"#d9d9d9",e.fillRect(d+M*s,i+p*s,s,s);let b="rgba("+n.r+","+n.g+","+n.b+",0)",x="rgba("+n.r+","+n.g+","+n.b+",1)",C=e;if(typeof C.createConicGradient=="function"){let M=C.createConicGradient(-Math.PI/2,o.x,o.y);M.addColorStop(0,b),M.addColorStop(1,x),e.fillStyle=M,e.fillRect(d-J,i-J,a,a)}else for(let p=0;p<36;p++){let T=-Math.PI/2+p/36*Math.PI*2,R=-Math.PI/2+(p+1)/36*Math.PI*2,k=(p+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*ae,o.y+Math.sin(T)*ae),e.arc(o.x,o.y,J,T,R),e.arc(o.x,o.y,ae,R,T,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+k.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,J,0,Math.PI*2),e.arc(o.x,o.y,ae,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-J-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let f=h*Math.PI*2,v=o.x+r*Math.sin(f),w=o.y-r*Math.cos(f);e.beginPath(),e.arc(v,w,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function xo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function We(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return L(r[e],n,t)}function ze(){let e={x:0,y:0};return[L({x:1,y:0,z:0},1,e),L({x:0,y:1,z:0},1,e),L({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function fe(e,o,n,t,r){let s=Z[e],d=[n.x,n.y,n.z],i=d[s.uAxis],a=d[s.vAxis];if(i<.002||a<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[s.fixedAxis]]=d[s.fixedAxis];let x={...h};x[b[s.uAxis]]=i;let C={...h};C[b[s.vAxis]]=a;let f=L(h,t,r),v=L(x,t,r),w=L(C,t,r),M=v.x-f.x,p=v.y-f.y,T=w.x-f.x,R=w.y-f.y,k=M*R-p*T;if(Math.abs(k)<1e-6)return null;let U=o.x-f.x,F=o.y-f.y,D=(U*R-F*T)/k,B=(F*M-U*p)/k;return D<-.05||D>1.05||B<-.05||B>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,B))}}function Ye(e,o,n,t,r){let s=Z[e],d=[n.x,n.y,n.z],i=d[s.uAxis],a=d[s.vAxis];if(i<.002||a<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[s.fixedAxis]]=d[s.fixedAxis];let x={...h};x[b[s.uAxis]]=i;let C={...h};C[b[s.vAxis]]=a;let f=L(h,t,r),v=L(x,t,r),w=L(C,t,r),M=v.x-f.x,p=v.y-f.y,T=w.x-f.x,R=w.y-f.y,k=M*R-p*T;if(Math.abs(k)<1e-6)return null;let U=o.x-f.x,F=o.y-f.y,D=(U*R-F*T)/k,B=(F*M-U*p)/k;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,B))}}var Ze=22;function Je(e,o,n,t,r,s,d,i,a,h,b,x,C){let f={...Xe};function v(l){let u=e.getBoundingClientRect();return{x:l.clientX-u.left,y:l.clientY-u.top}}let w=!1,M=!1,p=!1,T=9,R=1e3,k=null;function U(){F(),k=setTimeout(D,R)}function F(){k!==null&&(clearTimeout(k),k=null)}function D(){k=null,f.alphaMode=!0,ve(),g(),a()}function B(l){let u=C();return Math.hypot(l.x-u.x,l.y-u.y)}function Q(l){let u=C();return(Math.atan2(l.x-u.x,-(l.y-u.y))+Math.PI*2)%(Math.PI*2)}function P(l){b(Q(l)/(Math.PI*2)),a()}function oe(l){let u=B(l);return u>=ae-4&&u<=J+6}function q(l){let u=o(),V=d(),y=i();for(let A=0;A<3;A++){let S=We(A,u,V,y),E=l.x-S.x,N=l.y-S.y;if(E*E+N*N<=Ze*Ze)return A}return-1}function _(l){let u=o(),V=d(),y=i();for(let A=Z.length-1;A>=0;A--){let S=fe(A,l,u,V,y);if(S)return{faceIndex:A,...S}}return null}let H=-1,ie={x:0,y:0},ce=0;function ye(l,u){H=l,ie=u,ce=o()[["x","y","z"][l]],f.draggingAxisHandle=l,e.style.cursor="grabbing",a()}function Ve(l){if(F(),H<0)return;let u=l.x-ie.x,V=l.y-ie.y,A=ze()[H],S=d(),N=(u*A.x+V*A.y)/S,Y=Math.max(0,Math.min(1,ce+N)),j=o(),K=["x","y","z"],ue={...j,[K[H]]:Y};n(ue);let xe=t(),Fe=s(),De=Fe>=0?Z[Fe]:null,Se={...xe};De&&H===De.fixedAxis?Se[K[H]]=Y:Se[K[H]]=Math.min(xe[K[H]],Y),r(Se,s()),a()}function ve(){H=-1,f.draggingAxisHandle=-1}let $=-1,G=null,W=null,X=!1;function Me(l,u,V,y){$=l,f.draggingFace=l,G=null,W=null,X=!1,y&&(X=!0,W={s:u,t:V}),c(l,u,V),e.style.cursor="crosshair",a()}function de(l,u,V){if(F(),$<0)return;let y=o(),A=d(),S=i(),E=fe($,l,y,A,S),N=$;if(!E&&!V){for(let K=Z.length-1;K>=0;K--)if(K!==$&&(E=fe(K,l,y,A,S),E)){N=K;break}}if(!E&&V&&(E=Ye($,l,y,A,S),N=$),!E){a();return}N!==$&&($=N,f.draggingFace=N,G=null,X=!1,W=null);let{s:Y,t:j}=E;if(u&&W){if(X){let K=Math.abs(Y-W.s),ue=Math.abs(j-W.t),xe=.02;(K>xe||ue>xe)&&(G=K>=ue?"u":"v",X=!1)}G==="u"?j=W.t:G==="v"&&(Y=W.s)}else u||(G=null,X=!1,W=null);c(N,Y,j),a()}function c(l,u,V){let y=Z[l],A=o(),S=["x","y","z"],E={...t()};E[S[y.uAxis]]=u*A[S[y.uAxis]],E[S[y.vAxis]]=V*A[S[y.vAxis]],E[S[y.fixedAxis]]=A[S[y.fixedAxis]],r(E,l)}function g(){$=-1,f.draggingFace=-1,G=null,X=!1,W=null}function m(l){M=!0;let u=v(l);if(h()){if(f.alphaMode){if(B(u)<=T){f.alphaMode=!1,a();return}if(oe(u)){l.preventDefault(),w=!0,P(u);return}f.alphaMode=!1,a();return}B(u)<=T&&U()}let V=q(u);if(V>=0){l.preventDefault(),ye(V,u);return}let y=_(u);y&&(l.preventDefault(),Me(y.faceIndex,y.s,y.t,l.shiftKey))}function I(l){let u=v(l);if(w){l.preventDefault(),P(u);return}if(M&&f.alphaMode&&oe(u)){l.preventDefault(),w=!0,P(u);return}if(H>=0){l.preventDefault(),Ve(u);return}if($>=0){l.preventDefault(),de(u,l.shiftKey,l.altKey);return}let V=q(u),y=_(u),A=V,S=V>=0?-1:y?y.faceIndex:-1;(A!==f.hoveredAxisHandle||S!==f.hoveredFace)&&(f.hoveredAxisHandle=A,f.hoveredFace=S,e.style.cursor=A>=0?"grab":S>=0?"crosshair":"default",a())}function O(l){F(),M=!1,w=!1;let u=H>=0||$>=0;ve(),g(),u&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",a())}function z(l){if(l.touches.length!==1)return;p=!0;let u=v(l.touches[0]);if(h()){if(f.alphaMode){if(B(u)<=T){f.alphaMode=!1,a();return}if(oe(u)){l.preventDefault(),w=!0,P(u);return}f.alphaMode=!1,a();return}B(u)<=T&&U()}let V=q(u);if(V>=0){l.preventDefault(),ye(V,u);return}let y=_(u);y&&(l.preventDefault(),Me(y.faceIndex,y.s,y.t,!1))}function se(l){if(l.touches.length!==1)return;let u=v(l.touches[0]);w?(l.preventDefault(),P(u)):p&&f.alphaMode&&oe(u)?(l.preventDefault(),w=!0,P(u)):H>=0?(l.preventDefault(),Ve(u)):$>=0&&(l.preventDefault(),de(u,!1,!1))}function te(l){F(),p=!1,w=!1,ve(),g(),a()}function Ce(l){if(f.alphaMode){if(l.key==="Escape"){f.alphaMode=!1,a();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),b(Math.min(1,x()+(l.shiftKey?.08:.02))),a();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),b(Math.max(0,x()-(l.shiftKey?.08:.02))),a();return}}let u=l.shiftKey?.04:.004,V=t(),y=o(),A=ze(),S=0,E=0;switch(l.key){case"ArrowRight":S=1;break;case"ArrowLeft":S=-1;break;case"ArrowUp":E=-1;break;case"ArrowDown":E=1;break;default:return}l.preventDefault();let N={...V},Y=["x","y","z"];for(let j=0;j<3;j++){let K=S*A[j].x+E*A[j].y;if(Math.abs(K)>.3){let ue=V[Y[j]]+u*Math.sign(K);N[Y[j]]=Math.max(0,Math.min(y[Y[j]],ue))}}r(N,s()),a()}e.addEventListener("mousedown",m),window.addEventListener("mousemove",I),window.addEventListener("mouseup",O),e.addEventListener("touchstart",z,{passive:!1}),e.addEventListener("touchmove",se,{passive:!1}),e.addEventListener("touchend",te),e.addEventListener("keydown",Ce),e.setAttribute("tabindex","0");function ke(){F(),e.removeEventListener("mousedown",m),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",O),e.removeEventListener("touchstart",z),e.removeEventListener("touchmove",se),e.removeEventListener("touchend",te),e.removeEventListener("keydown",Ce)}return{state:f,destroy:ke}}var Qe=`.box-picker {\r
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
`;var eo=po,qe=!1;function mo(){if(qe||typeof document>"u")return;qe=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Qe,document.head.appendChild(e)}function po(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,s=o.showModeToggle??!1,d=o.showCorners??!1,i={mode:()=>a,switchMode:c=>Q(c),onHexInput:c=>{let g=be(c);g?(x=le(D?{r:255-g.r,g:255-g.g,b:255-g.b}:g,a),b={x:Math.max(b.x,x.x),y:Math.max(b.y,x.y),z:Math.max(b.z,x.z)},X(),G(),_()):G()},onChannelInput:(c,g,m)=>{let I=Math.max(0,Math.min(m,g)),O=["x","y","z"],z=I/m;if(D){let se={...x,[O[c]]:z},te=ee(se,a);x=le({r:255-te.r,g:255-te.g,b:255-te.b},a)}else x={...x,[O[c]]:z};z>b[O[c]]&&(b={...b,[O[c]]:z}),X(),G(),_()},getRgbForCopy:()=>ee(x,a),onRandom:c=>de(c),onReset:()=>de({r:0,g:0,b:0})},a=o.mode??"rgb",h=o.initialColor?le(o.initialColor,a):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},x={...h},C=0,f=()=>o.alpha!==void 0,v=Math.max(0,Math.min(1,o.alpha??1));function w(c){let g=Math.max(0,Math.min(1,c));g!==v&&(v=g,X(),G(),_())}let M=new Set;mo();let p=document.createElement("div");p.className="box-picker";let T=document.createElement("canvas");T.style.cursor="grab",p.appendChild(T);let R=Ne(T,n),k=null,U=document.createElement("div");U.className="box-picker-controls",k=document.createElement("div"),k.className="box-picker-swatch",U.appendChild(k),p.appendChild(U),(r||s||d)&&import("./controls-VBFXR3DH.js").then(c=>{c.createControls(U,i,{showInputs:r,showModeToggle:s,showCorners:d})}).catch(()=>{}),e.appendChild(p);let F=Je(T,()=>b,c=>{b=c},()=>x,(c,g)=>{x=c,C=g,X(),G()},()=>C,()=>R.scale,()=>R.center,_,f,w,()=>v,()=>L(x,R.scale,R.center)),D=!1,B=!0;T.addEventListener("mouseenter",()=>{B=!0,_()}),T.addEventListener("mouseleave",()=>{B=!1,_()}),T.addEventListener("dblclick",()=>{D=!D,Ue(D),X(),G(),_()});function Q(c){if(c===a)return;let g=ee(x,a),m={...x},I={...b};a=c;let O=le(g,a),z={x:1,y:1,z:1};x=O,b=z,oe(m,O,I,z,300),G()}let P=null;function oe(c,g,m,I,O){P!==null&&cancelAnimationFrame(P);let z=performance.now();function se(te){let Ce=te-z,ke=Math.min(1,Ce/O),l=1-Math.pow(1-ke,3);x={x:c.x+(g.x-c.x)*l,y:c.y+(g.y-c.y)*l,z:c.z+(g.z-c.z)*l},b={x:m.x+(I.x-m.x)*l,y:m.y+(I.y-m.y)*l,z:m.z+(I.z-m.z)*l},H(),X(),ke<1?P=requestAnimationFrame(se):P=null}P=requestAnimationFrame(se)}let q=!1;function _(){q||(q=!0,requestAnimationFrame(()=>{q=!1,H()}))}function H(){je(R,b,x,C,a,F.state,B,{active:F.state.alphaMode,alpha:v,rgb:$()})}function ie(c,g,m){return Math.round(c+(g-c)*m)}function ce(c,g){let m=g>0?255:0,I=Math.abs(g);return re({r:ie(c.r,m,I),g:ie(c.g,m,I),b:ie(c.b,m,I)})}function ye(c,g){let m=be(g)||{r:128,g:128,b:128},I=ce(m,.35),O=ce(m,0),z=ce(m,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${I}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${O}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${z}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function Ve(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function ve(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function $(){let c=ee(x,a);return D?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function G(){if(!t)return;let c=$(),g=re(c);k&&ye(k,g);let m=p.querySelector(".box-picker-hex");m&&(m.value=g),W(),p._updateModeButtons&&p._updateModeButtons()}function W(){if(!t)return;let c=Ae[a],g=D?le($(),a):x,m=Ge(g,a),I=p.querySelectorAll(".box-picker-channel input"),O=p.querySelectorAll(".box-picker-channel label");for(let z=0;z<I.length;z++)O[z].textContent=c[z],O[z].style.color="",O[z].style.textShadow="none",I[z].value=String(m[z])}function X(){let c=$(),g={rgb:c,hsb:ne(c),oklch:he(c),hex:re(c),alpha:v};for(let m of M)m(g)}function Me(){let c=ee(x,a);return{rgb:c,hsb:ne(c),oklch:he(c),hex:re(c)}}G(),H();let de=c=>{x=le(c,a),b={x:Math.max(b.x,x.x),y:Math.max(b.y,x.y),z:Math.max(b.z,x.z)};let g=L(x,R.scale,R.center);C=-1;for(let m=Z.length-1;m>=0;m--)if(fe(m,g,b,R.scale,R.center)){C=m;break}X(),G(),_()};return{getColor:Me,getMode:()=>a,setColor:de,setAlpha:w,getAlpha:()=>v,setMode(c){Q(c)},on(c,g){M.add(g)},off(c,g){M.delete(g)},destroy(){F.destroy(),P!==null&&cancelAnimationFrame(P),e.removeChild(p)}}}function Pe(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:be(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=be(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?He(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:He(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?me({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:me({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:ge({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:He(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:me({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function we(e,o,n=1){if(o==="hex")return re(e);if(o==="hex-alpha")return re(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Ee(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Ee(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=ne(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Ee(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=ne(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=he(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function He(e,o,n){let t=o/100,r=n/100,s=(1-Math.abs(2*r-1))*t,d=s*(1-Math.abs(e/60%2-1)),i=r-s/2,a=0,h=0,b=0;return e<60?(a=s,h=d):e<120?(a=d,h=s):e<180?(h=s,b=d):e<240?(h=d,b=s):e<300?(a=d,b=s):(a=s,b=d),{r:Math.round((a+i)*255),g:Math.round((h+i)*255),b:Math.round((b+i)*255)}}function Ee(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),d=(r+s)/2;if(r===s)return{h:0,s:0,l:d*100};let i=r-s,a=d>.5?i/(2-r-s):i/(r+s),h=0;return r===o?h=((n-t)/i+(n<t?6:0))*60:r===n?h=((t-o)/i+2)*60:h=((o-n)/i+4)*60,{h,s:a*100,l:d*100}}var Te=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?Pe(t,this.model):null;this.alpha=r?.alpha??1;let s=r?.rgb??{r:255,g:255,b:255},d=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=eo(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...d.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",we(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:we(i.rgb,this.model,i.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=Pe(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||we({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Ie=class extends Te{constructor(){super("hex")}},yo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of yo)customElements.get(e)||customElements.define(e,class extends Te{constructor(){super(o)}});var Go=Ie;export{Ie as ColorIsBoxElement,po as createBoxColorPicker,eo as createColorPicker,Go as default,Ue as setBoxInvert};
