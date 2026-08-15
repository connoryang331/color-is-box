var de={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},we={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Y(e){let o=e.r/255,r=e.g/255,t=e.b/255,n=Math.max(o,r,t),l=Math.min(o,r,t),d=n-l,s=0;d!==0&&(n===o?s=((r-t)/d+6)%6:n===r?s=(t-o)/d+2:s=(o-r)/d+4,s*=60);let i=n===0?0:d/n*100,b=n*100;return{h:s,s:i,b}}function se(e){let o=e.h,r=e.s/100,t=e.b/100,n=t*r,l=n*(1-Math.abs(o/60%2-1)),d=t-n,s,i,b;return o<60?(s=n,i=l,b=0):o<120?(s=l,i=n,b=0):o<180?(s=0,i=n,b=l):o<240?(s=0,i=l,b=n):o<300?(s=l,i=0,b=n):(s=n,i=0,b=l),{r:Math.round((s+d)*255),g:Math.round((i+d)*255),b:Math.round((b+d)*255)}}function me(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function pe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Ge(e){let o=me(e.r/255),r=me(e.g/255),t=me(e.b/255),n=.4122214708*o+.5363325363*r+.0514459929*t,l=.2119034982*o+.6806995451*r+.1073969566*t,d=.0883024619*o+.2817188376*r+.6299787005*t,s=Math.cbrt(n),i=Math.cbrt(l),b=Math.cbrt(d);return{L:.2104542553*s+.793617785*i-.0040720468*b,a:1.9779984951*s-2.428592205*i+.4505937099*b,b:.0259040371*s+.7827717662*i-.808675766*b}}function Ke(e,o,r){let t=e+.3963377774*o+.2158037573*r,n=e-.1055613458*o-.0638541728*r,l=e-.0894841775*o-1.291485548*r,d=t*t*t,s=n*n*n,i=l*l*l,b=4.0767416621*d-3.3077115913*s+.2309699292*i,f=-1.2684380046*d+2.6097574011*s-.3413193965*i,m=-.0041960863*d-.7034186147*s+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,pe(b)))*255),g:Math.round(Math.max(0,Math.min(1,pe(f)))*255),b:Math.round(Math.max(0,Math.min(1,pe(m)))*255)}}function re(e){let o=Ge(e),r=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:r,h:r<1e-4?0:t}}function ie(e){let o=e.h*(Math.PI/180),r=e.c*Math.cos(o),t=e.c*Math.sin(o);return Ke(e.l,r,t)}function Ue(e,o,r){let t=ie({l:e,c:o,h:r});if(Te(t))return{l:e,c:o,h:r};let n=0,l=o;for(let d=0;d<20;d++){let s=(n+l)/2;t=ie({l:e,c:s,h:r}),Te(t)?n=s:l=s}return{l:e,c:n,h:r}}function Te(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function Z(e){let o=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ne(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ve=.4;function X(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return se({h:e.x*359,s:e.y*100,b:e.z*100});{let r=e.x,t=e.y*Ve,n=e.z*359,l=Ue(r,t,n);return ie(l)}}function q(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let r=Y(e);return{x:r.h/359,y:r.s/100,z:r.b/100}}else{let r=re(e);return{x:r.l,y:Math.min(r.c/Ve,1),z:r.h/359}}}function Re(e,o){let r=we[o];return[Math.round(e.x*r[0]),Math.round(e.y*r[1]),Math.round(e.z*r[2])]}function Se(e,o,r,t,n,l=!1){let d;e===0?d={x:t,y:o,z:r}:e===1?d={x:o,y:t,z:r}:d={x:o,y:r,z:t};let s=X(d,n);return l?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var Le=Math.PI/6,Xe=Math.cos(Le),Ne=Math.sin(Le),le=!1;function ze(e){le=e}function L(e,o,r){return{x:r.x+(e.y-e.x)*Xe*o,y:r.y+e.z*o-(e.x+e.y)*Ne*o}}function je(e){let{x:o,y:r,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:r,z:0},{x:0,y:0,z:t},{x:o,y:r,z:0},{x:o,y:0,z:t},{x:0,y:r,z:t},{x:o,y:r,z:t}]}var G=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],We=64,He={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function De(e,o){let r=window.devicePixelRatio||1;e.width=o*r,e.height=o*.84*r,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(r,r),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ee(e,o,r,t,n,l,d=!0,s=null){let{ctx:i,scale:b,center:f,width:m,height:T}=e;i.save(),i.clearRect(0,0,m,T);let g=je(o).map(A=>L(A,b,f));if(Ze(i,b,f,n),i.save(),i.shadowColor="rgba(0,0,0,0.35)",i.shadowBlur=8,i.shadowOffsetX=0,i.shadowOffsetY=2,Je(i,g,o,n),i.restore(),d&&qe(i,n,b,f),t>=0){let A=X(r,n),D=le?{r:255-A.r,g:255-A.g,b:255-A.b}:A,w=L(r,b,f);s&&s.active&&eo(i,w,s.rgb,s.alpha),oo(i,w,D)}i.restore()}var Ye={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Ze(e,o,r,t){let n=L({x:0,y:0,z:0},o,r),l=[L({x:1,y:0,z:0},o,r),L({x:0,y:1,z:0},o,r),L({x:0,y:0,z:1},o,r)],d=Ye[t];e.lineWidth=1.5;for(let s=0;s<l.length;s++)e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(l[s].x,l[s].y),e.strokeStyle=d[s],e.stroke()}function Je(e,o,r,t){let n=[r.x,r.y,r.z];for(let l=0;l<G.length;l++){let d=G[l],s=n[d.fixedAxis],i=n[d.uAxis],b=n[d.vAxis];if(i<.002&&b<.002)continue;let f=d.quad.map(m=>o[m]);Qe(e,f,d.fixedAxis,s,i,b,t)}}function Qe(e,o,r,t,n,l,d){let s=We,i=document.createElement("canvas");i.width=s,i.height=s;let b=i.getContext("2d"),f=b.createImageData(s,s),m=f.data;for(let P=0;P<s;P++)for(let I=0;I<s;I++){let ee=I/(s-1)*n,N=P/(s-1)*l,B=Se(r,ee,N,t,d,le),_=(P*s+I)*4;m[_]=B.r,m[_+1]=B.g,m[_+2]=B.b,m[_+3]=255}b.putImageData(f,0,0);let T=o[0],g=o[1],A=o[2],D=o[3],w=g.x-T.x,p=g.y-T.y,R=D.x-T.x,z=D.y-T.y;e.save(),e.beginPath(),e.moveTo(T.x,T.y),e.lineTo(g.x,g.y),e.lineTo(A.x,A.y),e.lineTo(D.x,D.y),e.closePath(),e.clip();let S=2/s,F=T.x-w*S-R*S,O=T.y-p*S-z*S,k=1+2*S,E=1+2*S;e.transform(w*k/s,p*k/s,R*E/s,z*E/s,F,O),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function qe(e,o,r,t){let n=de[o],l=le?[L({x:0,y:1,z:1},r,t),L({x:1,y:0,z:1},r,t),L({x:1,y:1,z:0},r,t)]:[L({x:1,y:0,z:0},r,t),L({x:0,y:1,z:0},r,t),L({x:0,y:0,z:1},r,t)],d=le?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let s=0;s<3;s++){let i=l[s].x+d[s].x,b=l[s].y+d[s].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(n[s],i,b)}e.globalAlpha=1,e.restore()}var K=30,J=13;function eo(e,o,r,t){let n=(K+J)/2,l=5,d=Math.floor(o.x/l)*l,s=Math.floor(o.y/l)*l,i=K*2+l*2,b=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,K,0,Math.PI*2),e.arc(o.x,o.y,J,0,Math.PI*2,!0),e.clip();for(let w=-1;w*l<=i;w++)for(let p=-1;p*l<=i;p++)e.fillStyle=(w+p)%2===0?"#ffffff":"#d9d9d9",e.fillRect(d+w*l,s+p*l,l,l);let f="rgba("+r.r+","+r.g+","+r.b+",0)",m="rgba("+r.r+","+r.g+","+r.b+",1)",T=e;if(typeof T.createConicGradient=="function"){let w=T.createConicGradient(-Math.PI/2,o.x,o.y);w.addColorStop(0,f),w.addColorStop(1,m),e.fillStyle=w,e.fillRect(d-K,s-K,i,i)}else for(let p=0;p<36;p++){let R=-Math.PI/2+p/36*Math.PI*2,z=-Math.PI/2+(p+1)/36*Math.PI*2,S=(p+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(R)*J,o.y+Math.sin(R)*J),e.arc(o.x,o.y,K,R,z),e.arc(o.x,o.y,J,z,R,!0),e.closePath(),e.fillStyle="rgba("+r.r+","+r.g+","+r.b+","+S.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,K,0,Math.PI*2),e.arc(o.x,o.y,J,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-K-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let g=b*Math.PI*2,A=o.x+n*Math.sin(g),D=o.y-n*Math.cos(g);e.beginPath(),e.arc(A,D,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function oo(e,o,r){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${r.r},${r.g},${r.b})`,e.fill()}function Ie(e,o,r,t){let n=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return L(n[e],r,t)}function ye(){let e={x:0,y:0};return[L({x:1,y:0,z:0},1,e),L({x:0,y:1,z:0},1,e),L({x:0,y:0,z:1},1,e)].map(r=>{let t=Math.sqrt(r.x*r.x+r.y*r.y);return t>0?{x:r.x/t,y:r.y/t}:{x:0,y:0}})}function ae(e,o,r,t,n){let l=G[e],d=[r.x,r.y,r.z],s=d[l.uAxis],i=d[l.vAxis];if(s<.002||i<.002)return null;let b={x:0,y:0,z:0},f=["x","y","z"];b[f[l.fixedAxis]]=d[l.fixedAxis];let m={...b};m[f[l.uAxis]]=s;let T={...b};T[f[l.vAxis]]=i;let g=L(b,t,n),A=L(m,t,n),D=L(T,t,n),w=A.x-g.x,p=A.y-g.y,R=D.x-g.x,z=D.y-g.y,S=w*z-p*R;if(Math.abs(S)<1e-6)return null;let F=o.x-g.x,O=o.y-g.y,k=(F*z-O*R)/S,E=(O*w-F*p)/S;return k<-.05||k>1.05||E<-.05||E>1.05?null:{s:Math.max(0,Math.min(1,k)),t:Math.max(0,Math.min(1,E))}}function Pe(e,o,r,t,n){let l=G[e],d=[r.x,r.y,r.z],s=d[l.uAxis],i=d[l.vAxis];if(s<.002||i<.002)return null;let b={x:0,y:0,z:0},f=["x","y","z"];b[f[l.fixedAxis]]=d[l.fixedAxis];let m={...b};m[f[l.uAxis]]=s;let T={...b};T[f[l.vAxis]]=i;let g=L(b,t,n),A=L(m,t,n),D=L(T,t,n),w=A.x-g.x,p=A.y-g.y,R=D.x-g.x,z=D.y-g.y,S=w*z-p*R;if(Math.abs(S)<1e-6)return null;let F=o.x-g.x,O=o.y-g.y,k=(F*z-O*R)/S,E=(O*w-F*p)/S;return{s:Math.max(0,Math.min(1,k)),t:Math.max(0,Math.min(1,E))}}var Fe=22;function Be(e,o,r,t,n,l,d,s,i,b,f,m,T){let g={...He};function A(c){let x=!1,C=9;function a(y){let V=T();return Math.hypot(y.x-V.x,y.y-V.y)}function u(y){let V=T();return(Math.atan2(y.x-V.x,-(y.y-V.y))+Math.PI*2)%(Math.PI*2)}function h(y){f(u(y)/(Math.PI*2)),i()}function v(y){let V=a(y);return V>=J-4&&V<=K+6}let M=e.getBoundingClientRect();return{x:c.clientX-M.left,y:c.clientY-M.top}}function D(c){let x=o(),C=d(),a=s();for(let u=0;u<3;u++){let h=Ie(u,x,C,a),v=c.x-h.x,M=c.y-h.y;if(v*v+M*M<=Fe*Fe)return u}return-1}function w(c){let x=o(),C=d(),a=s();for(let u=G.length-1;u>=0;u--){let h=ae(u,c,x,C,a);if(h)return{faceIndex:u,...h}}return null}let p=-1,R={x:0,y:0},z=0;function S(c,x){p=c,R=x,z=o()[["x","y","z"][c]],g.draggingAxisHandle=c,e.style.cursor="grabbing",i()}function F(c){if(p<0)return;let x=c.x-R.x,C=c.y-R.y,u=ye()[p],h=d(),M=(x*u.x+C*u.y)/h,y=Math.max(0,Math.min(1,z+M)),V=o(),H=["x","y","z"],j={...V,[H[p]]:y};r(j);let W=t(),U=l(),Ae=U>=0?G[U]:null,xe={...W};Ae&&p===Ae.fixedAxis?xe[H[p]]=y:xe[H[p]]=Math.min(W[H[p]],y),n(xe,l()),i()}function O(){p=-1,g.draggingAxisHandle=-1}let k=-1,E=null,P=null,I=!1;function ee(c,x,C,a){k=c,g.draggingFace=c,E=null,P=null,I=!1,a&&(I=!0,P={s:x,t:C}),B(c,x,C),e.style.cursor="crosshair",i()}function N(c,x,C){if(k<0)return;let a=o(),u=d(),h=s(),v=ae(k,c,a,u,h),M=k;if(!v&&!C){for(let H=G.length-1;H>=0;H--)if(H!==k&&(v=ae(H,c,a,u,h),v)){M=H;break}}if(!v&&C&&(v=Pe(k,c,a,u,h),M=k),!v){i();return}M!==k&&(k=M,g.draggingFace=M,E=null,I=!1,P=null);let{s:y,t:V}=v;if(x&&P){if(I){let H=Math.abs(y-P.s),j=Math.abs(V-P.t),W=.02;(H>W||j>W)&&(E=H>=j?"u":"v",I=!1)}E==="u"?V=P.t:E==="v"&&(y=P.s)}else x||(E=null,I=!1,P=null);B(M,y,V),i()}function B(c,x,C){let a=G[c],u=o(),h=["x","y","z"],v={...t()};v[h[a.uAxis]]=x*u[h[a.uAxis]],v[h[a.vAxis]]=C*u[h[a.vAxis]],v[h[a.fixedAxis]]=u[h[a.fixedAxis]],n(v,c)}function _(){k=-1,g.draggingFace=-1,E=null,I=!1,P=null}function oe(c){let x=A(c);if(b()){if(g.alphaMode){if(distToDot(x)<=DOT_HIT_R){g.alphaMode=!1,i();return}if(inAlphaRing(x)){c.preventDefault(),alphaDragging=!0,applyAlphaFromPoint(x);return}g.alphaMode=!1,i();return}if(distToDot(x)<=DOT_HIT_R){c.preventDefault(),g.alphaMode=!0,i();return}}let C=D(x);if(C>=0){c.preventDefault(),S(C,x);return}let a=w(x);a&&(c.preventDefault(),ee(a.faceIndex,a.s,a.t,c.shiftKey))}function te(c){let x=A(c);if(alphaDragging){c.preventDefault(),applyAlphaFromPoint(x);return}if(p>=0){c.preventDefault(),F(x);return}if(k>=0){c.preventDefault(),N(x,c.shiftKey,c.altKey);return}let C=D(x),a=w(x),u=C,h=C>=0?-1:a?a.faceIndex:-1;(u!==g.hoveredAxisHandle||h!==g.hoveredFace)&&(g.hoveredAxisHandle=u,g.hoveredFace=h,e.style.cursor=u>=0?"grab":h>=0?"crosshair":"default",i())}function ce(c){alphaDragging=!1;let x=p>=0||k>=0;O(),_(),x&&(g.hoveredAxisHandle=-1,g.hoveredFace=-1,e.style.cursor="default",i())}function be(c){if(c.touches.length!==1)return;let x=A(c.touches[0]);if(b()){if(g.alphaMode){if(distToDot(x)<=DOT_HIT_R){g.alphaMode=!1,i();return}if(inAlphaRing(x)){c.preventDefault(),alphaDragging=!0,applyAlphaFromPoint(x);return}g.alphaMode=!1,i();return}if(distToDot(x)<=DOT_HIT_R){c.preventDefault(),g.alphaMode=!0,i();return}}let C=D(x);if(C>=0){c.preventDefault(),S(C,x);return}let a=w(x);a&&(c.preventDefault(),ee(a.faceIndex,a.s,a.t,!1))}function fe(c){if(c.touches.length!==1)return;let x=A(c.touches[0]);alphaDragging?(c.preventDefault(),applyAlphaFromPoint(x)):p>=0?(c.preventDefault(),F(x)):k>=0&&(c.preventDefault(),N(x,!1,!1))}function Q(c){alphaDragging=!1,O(),_(),i()}function $(c){if(g.alphaMode){if(c.key==="Escape"){g.alphaMode=!1,i();return}if(c.key==="ArrowUp"||c.key==="ArrowRight"){c.preventDefault(),f(Math.min(1,m()+(c.shiftKey?.08:.02))),i();return}if(c.key==="ArrowDown"||c.key==="ArrowLeft"){c.preventDefault(),f(Math.max(0,m()-(c.shiftKey?.08:.02))),i();return}}let x=c.shiftKey?.04:.004,C=t(),a=o(),u=ye(),h=0,v=0;switch(c.key){case"ArrowRight":h=1;break;case"ArrowLeft":h=-1;break;case"ArrowUp":v=-1;break;case"ArrowDown":v=1;break;default:return}c.preventDefault();let M={...C},y=["x","y","z"];for(let V=0;V<3;V++){let H=h*u[V].x+v*u[V].y;if(Math.abs(H)>.3){let j=C[y[V]]+x*Math.sign(H);M[y[V]]=Math.max(0,Math.min(a[y[V]],j))}}n(M,l()),i()}e.addEventListener("mousedown",oe),window.addEventListener("mousemove",te),window.addEventListener("mouseup",ce),e.addEventListener("touchstart",be,{passive:!1}),e.addEventListener("touchmove",fe,{passive:!1}),e.addEventListener("touchend",Q),e.addEventListener("keydown",$),e.setAttribute("tabindex","0");function ge(){e.removeEventListener("mousedown",oe),window.removeEventListener("mousemove",te),window.removeEventListener("mouseup",ce),e.removeEventListener("touchstart",be),e.removeEventListener("touchmove",fe),e.removeEventListener("touchend",Q),e.removeEventListener("keydown",$)}return{state:g,destroy:ge}}var Oe=`.box-picker {\r
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
`;var _e=no,$e=!1;function ro(){if($e||typeof document>"u")return;$e=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Oe,document.head.appendChild(e)}function no(e,o={}){let r=o.size??300,t=o.controls??!0,n=o.showInputs??!1,l=o.showModeToggle??!1,d=o.showCorners??!1,s={mode:()=>i,switchMode:a=>P(a),onHexInput:a=>{let u=ne(a);u?(m=q(k?{r:255-u.r,g:255-u.g,b:255-u.b}:u,i),f={x:Math.max(f.x,m.x),y:Math.max(f.y,m.y),z:Math.max(f.z,m.z)},c(),$(),B()):$()},onChannelInput:(a,u,h)=>{let v=Math.max(0,Math.min(h,u)),M=["x","y","z"],y=v/h;if(k){let V={...m,[M[a]]:y},H=X(V,i);m=q({r:255-H.r,g:255-H.g,b:255-H.b},i)}else m={...m,[M[a]]:y};y>f[M[a]]&&(f={...f,[M[a]]:y}),c(),$(),B()},getRgbForCopy:()=>X(m,i),onRandom:a=>C(a),onReset:()=>C({r:0,g:0,b:0})},i=o.mode??"rgb",b=o.initialColor?q(o.initialColor,i):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},m={...b},T=0,g=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function D(a){let u=Math.max(0,Math.min(1,a));u!==A&&(A=u,c(),$(),B())}let w=new Set;ro();let p=document.createElement("div");p.className="box-picker";let R=document.createElement("canvas");R.style.cursor="grab",p.appendChild(R);let z=De(R,r),S=null,F=document.createElement("div");F.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",F.appendChild(S),p.appendChild(F),(n||l||d)&&import("./controls-VBFXR3DH.js").then(a=>{a.createControls(F,s,{showInputs:n,showModeToggle:l,showCorners:d})}).catch(()=>{}),e.appendChild(p);let O=Be(R,()=>f,a=>{f=a},()=>m,(a,u)=>{m=a,T=u,c(),$()},()=>T,()=>z.scale,()=>z.center,B,g,D,()=>A,()=>L(m,z.scale,z.center)),k=!1,E=!0;R.addEventListener("mouseenter",()=>{E=!0,B()}),R.addEventListener("mouseleave",()=>{E=!1,B()}),R.addEventListener("dblclick",()=>{k=!k,ze(k),c(),$(),B()});function P(a){if(a===i)return;let u=X(m,i),h={...m},v={...f};i=a;let M=q(u,i),y={x:1,y:1,z:1};m=M,f=y,ee(h,M,v,y,300),$()}let I=null;function ee(a,u,h,v,M){I!==null&&cancelAnimationFrame(I);let y=performance.now();function V(H){let j=H-y,W=Math.min(1,j/M),U=1-Math.pow(1-W,3);m={x:a.x+(u.x-a.x)*U,y:a.y+(u.y-a.y)*U,z:a.z+(u.z-a.z)*U},f={x:h.x+(v.x-h.x)*U,y:h.y+(v.y-h.y)*U,z:h.z+(v.z-h.z)*U},_(),c(),W<1?I=requestAnimationFrame(V):I=null}I=requestAnimationFrame(V)}let N=!1;function B(){N||(N=!0,requestAnimationFrame(()=>{N=!1,_()}))}function _(){Ee(z,f,m,T,i,O.state,E,{active:O.state.alphaMode,alpha:A,rgb:Q()})}function oe(a,u,h){return Math.round(a+(u-a)*h)}function te(a,u){let h=u>0?255:0,v=Math.abs(u);return Z({r:oe(a.r,h,v),g:oe(a.g,h,v),b:oe(a.b,h,v)})}function ce(a,u){let h=ne(u)||{r:128,g:128,b:128},v=te(h,.35),M=te(h,0),y=te(h,-.35);a.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${v}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${M}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${y}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,a.style.backgroundColor="transparent"}function be(a){try{navigator.clipboard.writeText(a).catch(()=>{})}catch{}}function fe(a){a&&(a.style.borderColor="#4ade80",a.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{a.style.borderColor="",a.style.boxShadow=""},500))}function Q(){let a=X(m,i);return k?{r:255-a.r,g:255-a.g,b:255-a.b}:a}function $(){if(!t)return;let a=Q(),u=Z(a);S&&ce(S,u);let h=p.querySelector(".box-picker-hex");h&&(h.value=u),ge(),p._updateModeButtons&&p._updateModeButtons()}function ge(){if(!t)return;let a=de[i],u=k?q(Q(),i):m,h=Re(u,i),v=p.querySelectorAll(".box-picker-channel input"),M=p.querySelectorAll(".box-picker-channel label");for(let y=0;y<v.length;y++)M[y].textContent=a[y],M[y].style.color="",M[y].style.textShadow="none",v[y].value=String(h[y])}function c(){let a=Q(),u={rgb:a,hsb:Y(a),oklch:re(a),hex:Z(a),alpha:A};for(let h of w)h(u)}function x(){let a=X(m,i);return{rgb:a,hsb:Y(a),oklch:re(a),hex:Z(a)}}$(),_();let C=a=>{m=q(a,i),f={x:Math.max(f.x,m.x),y:Math.max(f.y,m.y),z:Math.max(f.z,m.z)};let u=L(m,z.scale,z.center);T=-1;for(let h=G.length-1;h>=0;h--)if(ae(h,u,f,z.scale,z.center)){T=h;break}c(),$(),B()};return{getColor:x,getMode:()=>i,setColor:C,setAlpha:D,getAlpha:()=>A,setMode(a){P(a)},on(a,u){w.add(u)},off(a,u){w.delete(u)},destroy(){O.destroy(),I!==null&&cancelAnimationFrame(I),e.removeChild(p)}}}function Ce(e,o){if(!e)return null;let r=e.trim();try{if(o==="hex")return{rgb:ne(r),alpha:1};if(o==="hex-alpha"){let t=r.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let n=ne(t[1]),l=t[2]?parseInt(t[2],16)/255:1;return{rgb:n,alpha:l}}if(o==="rgb"){let t=r.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=r.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ve(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ve(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?se({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:se({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:ie({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=r.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=r.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ve(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=r.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:se({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function ue(e,o,r=1){if(o==="hex")return Z(e);if(o==="hex-alpha")return Z(e)+(r<1?Math.round(r*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+r.toFixed(3)}`;if(o==="hsl"){let n=Me(e);return`${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%`}if(o==="hsla"){let n=Me(e);return`${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${+r.toFixed(3)}`}if(o==="hsv"){let n=Y(e);return`${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.b)}%`}if(o==="hsva"){let n=Y(e);return`${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.b)}%, ${+r.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+r.toFixed(3)})`;if(o==="hsla-string"){let n=Me(e);return`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${+r.toFixed(3)})`}if(o==="hsva-string"){let n=Y(e);return`hsva(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.b)}%, ${+r.toFixed(3)})`}let t=re(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function ve(e,o,r){let t=o/100,n=r/100,l=(1-Math.abs(2*n-1))*t,d=l*(1-Math.abs(e/60%2-1)),s=n-l/2,i=0,b=0,f=0;return e<60?(i=l,b=d):e<120?(i=d,b=l):e<180?(b=l,f=d):e<240?(b=d,f=l):e<300?(i=d,f=l):(i=l,f=d),{r:Math.round((i+s)*255),g:Math.round((b+s)*255),b:Math.round((f+s)*255)}}function Me(e){let o=e.r/255,r=e.g/255,t=e.b/255,n=Math.max(o,r,t),l=Math.min(o,r,t),d=(n+l)/2;if(n===l)return{h:0,s:0,l:d*100};let s=n-l,i=d>.5?s/(2-n-l):s/(n+l),b=0;return n===o?b=((r-t)/s+(r<t?6:0))*60:n===r?b=((t-o)/s+2)*60:b=((o-r)/s+4)*60,{h:b,s:i*100,l:d*100}}var he=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),r=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),n=t?Ce(t,this.model):null;this.alpha=n?.alpha??1;let l=n?.rgb??{r:255,g:255,b:255},d=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=_e(this.holder,{initialColor:l,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...d.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",s=>{this.internal||(this.internal=!0,this.alpha=s.alpha,this.setAttribute("value",ue(s.rgb,this.model,s.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:s})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ue(s.rgb,this.model,s.alpha)})))}),r&&this.picker.setMode(r)}attributeChangedCallback(o,r,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let n=Ce(t,this.model);n&&(this.alpha=n.alpha,this.picker.setColor(n.rgb),this.picker.setAlpha(n.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||ue({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},ke=class extends he{constructor(){super("hex")}},ao=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of ao)customElements.get(e)||customElements.define(e,class extends he{constructor(){super(o)}});var Ro=ke;export{ke as ColorIsBoxElement,no as createBoxColorPicker,_e as createColorPicker,Ro as default,ze as setBoxInvert};
