var ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},pe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ie(e){let o=e.r/255,n=e.g/255,i=e.b/255,d=Math.max(o,n,i),c=Math.min(o,n,i),b=d-c,a=0;b!==0&&(d===o?a=((n-i)/b+6)%6:d===n?a=(i-o)/b+2:a=(o-n)/b+4,a*=60);let r=d===0?0:b/d*100,m=d*100;return{h:a,s:r,b:m}}function Ie(e){let o=e.h,n=e.s/100,i=e.b/100,d=i*n,c=d*(1-Math.abs(o/60%2-1)),b=i-d,a,r,m;return o<60?(a=d,r=c,m=0):o<120?(a=c,r=d,m=0):o<180?(a=0,r=d,m=c):o<240?(a=0,r=c,m=d):o<300?(a=c,r=0,m=d):(a=d,r=0,m=c),{r:Math.round((a+b)*255),g:Math.round((r+b)*255),b:Math.round((m+b)*255)}}function be(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function fe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Pe(e){let o=be(e.r/255),n=be(e.g/255),i=be(e.b/255),d=.4122214708*o+.5363325363*n+.0514459929*i,c=.2119034982*o+.6806995451*n+.1073969566*i,b=.0883024619*o+.2817188376*n+.6299787005*i,a=Math.cbrt(d),r=Math.cbrt(c),m=Math.cbrt(b);return{L:.2104542553*a+.793617785*r-.0040720468*m,a:1.9779984951*a-2.428592205*r+.4505937099*m,b:.0259040371*a+.7827717662*r-.808675766*m}}function Ee(e,o,n){let i=e+.3963377774*o+.2158037573*n,d=e-.1055613458*o-.0638541728*n,c=e-.0894841775*o-1.291485548*n,b=i*i*i,a=d*d*d,r=c*c*c,m=4.0767416621*b-3.3077115913*a+.2309699292*r,g=-1.2684380046*b+2.6097574011*a-.3413193965*r,x=-.0041960863*b-.7034186147*a+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,fe(m)))*255),g:Math.round(Math.max(0,Math.min(1,fe(g)))*255),b:Math.round(Math.max(0,Math.min(1,fe(x)))*255)}}function se(e){let o=Pe(e),n=Math.sqrt(o.a*o.a+o.b*o.b),i=Math.atan2(o.b,o.a)*(180/Math.PI);return i<0&&(i+=360),{l:o.L,c:n,h:n<1e-4?0:i}}function he(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),i=e.c*Math.sin(o);return Ee(e.l,n,i)}function Fe(e,o,n){let i=he({l:e,c:o,h:n});if(ye(i))return{l:e,c:o,h:n};let d=0,c=o;for(let b=0;b<20;b++){let a=(d+c)/2;i=he({l:e,c:a,h:n}),ye(i)?d=a:c=a}return{l:e,c:d,h:n}}function ye(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ne(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function xe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ve=.4;function $(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Ie({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,i=e.y*ve,d=e.z*359,c=Fe(n,i,d);return he(c)}}function J(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ie(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=se(e);return{x:n.l,y:Math.min(n.c/ve,1),z:n.h/359}}}function Me(e,o){let n=pe[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Ce(e,o,n,i,d,c=!1){let b;e===0?b={x:i,y:o,z:n}:e===1?b={x:o,y:i,z:n}:b={x:o,y:n,z:i};let a=$(b,d);return c?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var ke=Math.PI/6,Be=Math.cos(ke),Oe=Math.sin(ke),te=!1;function Ae(e){te=e}function L(e,o,n){return{x:n.x+(e.y-e.x)*Be*o,y:n.y+e.z*o-(e.x+e.y)*Oe*o}}function _e(e){let{x:o,y:n,z:i}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:i},{x:o,y:n,z:0},{x:o,y:0,z:i},{x:0,y:n,z:i},{x:o,y:n,z:i}]}var K=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Ge=64,we={hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1,alphaMode:!1};function Te(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let i=e.getContext("2d");return i.scale(n,n),{ctx:i,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function Ve(e,o,n,i,d,c,b=!0,a=null){let{ctx:r,scale:m,center:g,width:x,height:T}=e;r.save(),r.clearRect(0,0,x,T);let f=_e(o).map(A=>L(A,m,g));if(Ue(r,m,g,d),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,Xe(r,f,o,d),r.restore(),b&&Ne(r,d,m,g),i>=0){let A=$(n,d),D=te?{r:255-A.r,g:255-A.g,b:255-A.b}:A,w=L(n,m,g);a&&a.active&&je(r,w,a.rgb,a.alpha),We(r,w,D)}r.restore()}var Ke={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function Ue(e,o,n,i){let d=L({x:0,y:0,z:0},o,n),c=[L({x:1,y:0,z:0},o,n),L({x:0,y:1,z:0},o,n),L({x:0,y:0,z:1},o,n)],b=Ke[i];e.lineWidth=1.5;for(let a=0;a<c.length;a++)e.beginPath(),e.moveTo(d.x,d.y),e.lineTo(c[a].x,c[a].y),e.strokeStyle=b[a],e.stroke()}function Xe(e,o,n,i){let d=[n.x,n.y,n.z];for(let c=0;c<K.length;c++){let b=K[c],a=d[b.fixedAxis],r=d[b.uAxis],m=d[b.vAxis];if(r<.002&&m<.002)continue;let g=b.quad.map(x=>o[x]);$e(e,g,b.fixedAxis,a,r,m,i)}}function $e(e,o,n,i,d,c,b){let a=Ge,r=document.createElement("canvas");r.width=a,r.height=a;let m=r.getContext("2d"),g=m.createImageData(a,a),x=g.data;for(let E=0;E<a;E++)for(let P=0;P<a;P++){let Q=P/(a-1)*d,N=E/(a-1)*c,B=Ce(n,Q,N,i,b,te),G=(E*a+P)*4;x[G]=B.r,x[G+1]=B.g,x[G+2]=B.b,x[G+3]=255}m.putImageData(g,0,0);let T=o[0],f=o[1],A=o[2],D=o[3],w=f.x-T.x,p=f.y-T.y,z=D.x-T.x,R=D.y-T.y;e.save(),e.beginPath(),e.moveTo(T.x,T.y),e.lineTo(f.x,f.y),e.lineTo(A.x,A.y),e.lineTo(D.x,D.y),e.closePath(),e.clip();let S=2/a,F=T.x-w*S-z*S,O=T.y-p*S-R*S,k=1+2*S,I=1+2*S;e.transform(w*k/a,p*k/a,z*I/a,R*I/a,F,O),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function Ne(e,o,n,i){let d=ae[o],c=te?[L({x:0,y:1,z:1},n,i),L({x:1,y:0,z:1},n,i),L({x:1,y:1,z:0},n,i)]:[L({x:1,y:0,z:0},n,i),L({x:0,y:1,z:0},n,i),L({x:0,y:0,z:1},n,i)],b=te?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let r=c[a].x+b[a].x,m=c[a].y+b[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(d[a],r,m)}e.globalAlpha=1,e.restore()}var U=30,Y=13;function je(e,o,n,i){let d=(U+Y)/2,c=5,b=Math.floor(o.x/c)*c,a=Math.floor(o.y/c)*c,r=U*2+c*2,m=Math.max(0,Math.min(1,i));e.save(),e.beginPath(),e.arc(o.x,o.y,U,0,Math.PI*2),e.arc(o.x,o.y,Y,0,Math.PI*2,!0),e.clip();for(let w=-1;w*c<=r;w++)for(let p=-1;p*c<=r;p++)e.fillStyle=(w+p)%2===0?"#ffffff":"#d9d9d9",e.fillRect(b+w*c,a+p*c,c,c);let g="rgba("+n.r+","+n.g+","+n.b+",0)",x="rgba("+n.r+","+n.g+","+n.b+",1)",T=e;if(typeof T.createConicGradient=="function"){let w=T.createConicGradient(-Math.PI/2,o.x,o.y);w.addColorStop(0,g),w.addColorStop(1,x),e.fillStyle=w,e.fillRect(b-U,a-U,r,r)}else for(let p=0;p<36;p++){let z=-Math.PI/2+p/36*Math.PI*2,R=-Math.PI/2+(p+1)/36*Math.PI*2,S=(p+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(z)*Y,o.y+Math.sin(z)*Y),e.arc(o.x,o.y,U,z,R),e.arc(o.x,o.y,Y,R,z,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+S.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,U,0,Math.PI*2),e.arc(o.x,o.y,Y,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-U-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let f=m*Math.PI*2,A=o.x+d*Math.sin(f),D=o.y-d*Math.cos(f);e.beginPath(),e.arc(A,D,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function We(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function ze(e,o,n,i){let d=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return L(d[e],n,i)}function me(){let e={x:0,y:0};return[L({x:1,y:0,z:0},1,e),L({x:0,y:1,z:0},1,e),L({x:0,y:0,z:1},1,e)].map(n=>{let i=Math.sqrt(n.x*n.x+n.y*n.y);return i>0?{x:n.x/i,y:n.y/i}:{x:0,y:0}})}function oe(e,o,n,i,d){let c=K[e],b=[n.x,n.y,n.z],a=b[c.uAxis],r=b[c.vAxis];if(a<.002||r<.002)return null;let m={x:0,y:0,z:0},g=["x","y","z"];m[g[c.fixedAxis]]=b[c.fixedAxis];let x={...m};x[g[c.uAxis]]=a;let T={...m};T[g[c.vAxis]]=r;let f=L(m,i,d),A=L(x,i,d),D=L(T,i,d),w=A.x-f.x,p=A.y-f.y,z=D.x-f.x,R=D.y-f.y,S=w*R-p*z;if(Math.abs(S)<1e-6)return null;let F=o.x-f.x,O=o.y-f.y,k=(F*R-O*z)/S,I=(O*w-F*p)/S;return k<-.05||k>1.05||I<-.05||I>1.05?null:{s:Math.max(0,Math.min(1,k)),t:Math.max(0,Math.min(1,I))}}function Se(e,o,n,i,d){let c=K[e],b=[n.x,n.y,n.z],a=b[c.uAxis],r=b[c.vAxis];if(a<.002||r<.002)return null;let m={x:0,y:0,z:0},g=["x","y","z"];m[g[c.fixedAxis]]=b[c.fixedAxis];let x={...m};x[g[c.uAxis]]=a;let T={...m};T[g[c.vAxis]]=r;let f=L(m,i,d),A=L(x,i,d),D=L(T,i,d),w=A.x-f.x,p=A.y-f.y,z=D.x-f.x,R=D.y-f.y,S=w*R-p*z;if(Math.abs(S)<1e-6)return null;let F=o.x-f.x,O=o.y-f.y,k=(F*R-O*z)/S,I=(O*w-F*p)/S;return{s:Math.max(0,Math.min(1,k)),t:Math.max(0,Math.min(1,I))}}var Le=22;function Re(e,o,n,i,d,c,b,a,r,m,g,x,T){let f={...we};function A(s){let h=!1,C=9;function t(y){let V=T();return Math.hypot(y.x-V.x,y.y-V.y)}function l(y){let V=T();return(Math.atan2(y.x-V.x,-(y.y-V.y))+Math.PI*2)%(Math.PI*2)}function u(y){g(l(y)/(Math.PI*2)),r()}function v(y){let V=t(y);return V>=Y-4&&V<=U+6}let M=e.getBoundingClientRect();return{x:s.clientX-M.left,y:s.clientY-M.top}}function D(s){let h=o(),C=b(),t=a();for(let l=0;l<3;l++){let u=ze(l,h,C,t),v=s.x-u.x,M=s.y-u.y;if(v*v+M*M<=Le*Le)return l}return-1}function w(s){let h=o(),C=b(),t=a();for(let l=K.length-1;l>=0;l--){let u=oe(l,s,h,C,t);if(u)return{faceIndex:l,...u}}return null}let p=-1,z={x:0,y:0},R=0;function S(s,h){p=s,z=h,R=o()[["x","y","z"][s]],f.draggingAxisHandle=s,e.style.cursor="grabbing",r()}function F(s){if(p<0)return;let h=s.x-z.x,C=s.y-z.y,l=me()[p],u=b(),M=(h*l.x+C*l.y)/u,y=Math.max(0,Math.min(1,R+M)),V=o(),H=["x","y","z"],j={...V,[H[p]]:y};n(j);let W=i(),X=c(),ge=X>=0?K[X]:null,ue={...W};ge&&p===ge.fixedAxis?ue[H[p]]=y:ue[H[p]]=Math.min(W[H[p]],y),d(ue,c()),r()}function O(){p=-1,f.draggingAxisHandle=-1}let k=-1,I=null,E=null,P=!1;function Q(s,h,C,t){k=s,f.draggingFace=s,I=null,E=null,P=!1,t&&(P=!0,E={s:h,t:C}),B(s,h,C),e.style.cursor="crosshair",r()}function N(s,h,C){if(k<0)return;let t=o(),l=b(),u=a(),v=oe(k,s,t,l,u),M=k;if(!v&&!C){for(let H=K.length-1;H>=0;H--)if(H!==k&&(v=oe(H,s,t,l,u),v)){M=H;break}}if(!v&&C&&(v=Se(k,s,t,l,u),M=k),!v){r();return}M!==k&&(k=M,f.draggingFace=M,I=null,P=!1,E=null);let{s:y,t:V}=v;if(h&&E){if(P){let H=Math.abs(y-E.s),j=Math.abs(V-E.t),W=.02;(H>W||j>W)&&(I=H>=j?"u":"v",P=!1)}I==="u"?V=E.t:I==="v"&&(y=E.s)}else h||(I=null,P=!1,E=null);B(M,y,V),r()}function B(s,h,C){let t=K[s],l=o(),u=["x","y","z"],v={...i()};v[u[t.uAxis]]=h*l[u[t.uAxis]],v[u[t.vAxis]]=C*l[u[t.vAxis]],v[u[t.fixedAxis]]=l[u[t.fixedAxis]],d(v,s)}function G(){k=-1,f.draggingFace=-1,I=null,P=!1,E=null}function q(s){let h=A(s);if(m()){if(f.alphaMode){if(distToDot(h)<=DOT_HIT_R){f.alphaMode=!1,r();return}if(inAlphaRing(h)){s.preventDefault(),alphaDragging=!0,applyAlphaFromPoint(h);return}f.alphaMode=!1,r();return}if(distToDot(h)<=DOT_HIT_R){s.preventDefault(),f.alphaMode=!0,r();return}}let C=D(h);if(C>=0){s.preventDefault(),S(C,h);return}let t=w(h);t&&(s.preventDefault(),Q(t.faceIndex,t.s,t.t,s.shiftKey))}function ee(s){let h=A(s);if(alphaDragging){s.preventDefault(),applyAlphaFromPoint(h);return}if(p>=0){s.preventDefault(),F(h);return}if(k>=0){s.preventDefault(),N(h,s.shiftKey,s.altKey);return}let C=D(h),t=w(h),l=C,u=C>=0?-1:t?t.faceIndex:-1;(l!==f.hoveredAxisHandle||u!==f.hoveredFace)&&(f.hoveredAxisHandle=l,f.hoveredFace=u,e.style.cursor=l>=0?"grab":u>=0?"crosshair":"default",r())}function re(s){alphaDragging=!1;let h=p>=0||k>=0;O(),G(),h&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",r())}function ce(s){if(s.touches.length!==1)return;let h=A(s.touches[0]);if(m()){if(f.alphaMode){if(distToDot(h)<=DOT_HIT_R){f.alphaMode=!1,r();return}if(inAlphaRing(h)){s.preventDefault(),alphaDragging=!0,applyAlphaFromPoint(h);return}f.alphaMode=!1,r();return}if(distToDot(h)<=DOT_HIT_R){s.preventDefault(),f.alphaMode=!0,r();return}}let C=D(h);if(C>=0){s.preventDefault(),S(C,h);return}let t=w(h);t&&(s.preventDefault(),Q(t.faceIndex,t.s,t.t,!1))}function le(s){if(s.touches.length!==1)return;let h=A(s.touches[0]);alphaDragging?(s.preventDefault(),applyAlphaFromPoint(h)):p>=0?(s.preventDefault(),F(h)):k>=0&&(s.preventDefault(),N(h,!1,!1))}function Z(s){alphaDragging=!1,O(),G(),r()}function _(s){if(f.alphaMode){if(s.key==="Escape"){f.alphaMode=!1,r();return}if(s.key==="ArrowUp"||s.key==="ArrowRight"){s.preventDefault(),g(Math.min(1,x()+(s.shiftKey?.08:.02))),r();return}if(s.key==="ArrowDown"||s.key==="ArrowLeft"){s.preventDefault(),g(Math.max(0,x()-(s.shiftKey?.08:.02))),r();return}}let h=s.shiftKey?.04:.004,C=i(),t=o(),l=me(),u=0,v=0;switch(s.key){case"ArrowRight":u=1;break;case"ArrowLeft":u=-1;break;case"ArrowUp":v=-1;break;case"ArrowDown":v=1;break;default:return}s.preventDefault();let M={...C},y=["x","y","z"];for(let V=0;V<3;V++){let H=u*l[V].x+v*l[V].y;if(Math.abs(H)>.3){let j=C[y[V]]+h*Math.sign(H);M[y[V]]=Math.max(0,Math.min(t[y[V]],j))}}d(M,c()),r()}e.addEventListener("mousedown",q),window.addEventListener("mousemove",ee),window.addEventListener("mouseup",re),e.addEventListener("touchstart",ce,{passive:!1}),e.addEventListener("touchmove",le,{passive:!1}),e.addEventListener("touchend",Z),e.addEventListener("keydown",_),e.setAttribute("tabindex","0");function de(){e.removeEventListener("mousedown",q),window.removeEventListener("mousemove",ee),window.removeEventListener("mouseup",re),e.removeEventListener("touchstart",ce),e.removeEventListener("touchmove",le),e.removeEventListener("touchend",Z),e.removeEventListener("keydown",_)}return{state:f,destroy:de}}var He=`.box-picker {\r
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
`;var xo=Je,De=!1;function Ze(){if(De||typeof document>"u")return;De=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=He,document.head.appendChild(e)}function Je(e,o={}){let n=o.size??300,i=o.controls??!0,d=o.showInputs??!1,c=o.showModeToggle??!1,b=o.showCorners??!1,a={mode:()=>r,switchMode:t=>E(t),onHexInput:t=>{let l=xe(t);l?(x=J(k?{r:255-l.r,g:255-l.g,b:255-l.b}:l,r),g={x:Math.max(g.x,x.x),y:Math.max(g.y,x.y),z:Math.max(g.z,x.z)},s(),_(),B()):_()},onChannelInput:(t,l,u)=>{let v=Math.max(0,Math.min(u,l)),M=["x","y","z"],y=v/u;if(k){let V={...x,[M[t]]:y},H=$(V,r);x=J({r:255-H.r,g:255-H.g,b:255-H.b},r)}else x={...x,[M[t]]:y};y>g[M[t]]&&(g={...g,[M[t]]:y}),s(),_(),B()},getRgbForCopy:()=>$(x,r),onRandom:t=>C(t),onReset:()=>C({r:0,g:0,b:0})},r=o.mode??"rgb",m=o.initialColor?J(o.initialColor,r):{x:.7,y:.4,z:.85},g={x:1,y:1,z:1},x={...m},T=0,f=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function D(t){let l=Math.max(0,Math.min(1,t));l!==A&&(A=l,s(),_(),B())}let w=new Set;Ze();let p=document.createElement("div");p.className="box-picker";let z=document.createElement("canvas");z.style.cursor="grab",p.appendChild(z);let R=Te(z,n),S=null,F=document.createElement("div");F.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",F.appendChild(S),p.appendChild(F),(d||c||b)&&import("./controls-VBFXR3DH.js").then(t=>{t.createControls(F,a,{showInputs:d,showModeToggle:c,showCorners:b})}).catch(()=>{}),e.appendChild(p);let O=Re(z,()=>g,t=>{g=t},()=>x,(t,l)=>{x=t,T=l,s(),_()},()=>T,()=>R.scale,()=>R.center,B,f,D,()=>A,()=>L(x,R.scale,R.center)),k=!1,I=!0;z.addEventListener("mouseenter",()=>{I=!0,B()}),z.addEventListener("mouseleave",()=>{I=!1,B()}),z.addEventListener("dblclick",()=>{k=!k,Ae(k),s(),_(),B()});function E(t){if(t===r)return;let l=$(x,r),u={...x},v={...g};r=t;let M=J(l,r),y={x:1,y:1,z:1};x=M,g=y,Q(u,M,v,y,300),_()}let P=null;function Q(t,l,u,v,M){P!==null&&cancelAnimationFrame(P);let y=performance.now();function V(H){let j=H-y,W=Math.min(1,j/M),X=1-Math.pow(1-W,3);x={x:t.x+(l.x-t.x)*X,y:t.y+(l.y-t.y)*X,z:t.z+(l.z-t.z)*X},g={x:u.x+(v.x-u.x)*X,y:u.y+(v.y-u.y)*X,z:u.z+(v.z-u.z)*X},G(),s(),W<1?P=requestAnimationFrame(V):P=null}P=requestAnimationFrame(V)}let N=!1;function B(){N||(N=!0,requestAnimationFrame(()=>{N=!1,G()}))}function G(){Ve(R,g,x,T,r,O.state,I,{active:O.state.alphaMode,alpha:A,rgb:Z()})}function q(t,l,u){return Math.round(t+(l-t)*u)}function ee(t,l){let u=l>0?255:0,v=Math.abs(l);return ne({r:q(t.r,u,v),g:q(t.g,u,v),b:q(t.b,u,v)})}function re(t,l){let u=xe(l)||{r:128,g:128,b:128},v=ee(u,.35),M=ee(u,0),y=ee(u,-.35);t.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${v}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${M}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${y}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,t.style.backgroundColor="transparent"}function ce(t){try{navigator.clipboard.writeText(t).catch(()=>{})}catch{}}function le(t){t&&(t.style.borderColor="#4ade80",t.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{t.style.borderColor="",t.style.boxShadow=""},500))}function Z(){let t=$(x,r);return k?{r:255-t.r,g:255-t.g,b:255-t.b}:t}function _(){if(!i)return;let t=Z(),l=ne(t);S&&re(S,l);let u=p.querySelector(".box-picker-hex");u&&(u.value=l),de(),p._updateModeButtons&&p._updateModeButtons()}function de(){if(!i)return;let t=ae[r],l=k?J(Z(),r):x,u=Me(l,r),v=p.querySelectorAll(".box-picker-channel input"),M=p.querySelectorAll(".box-picker-channel label");for(let y=0;y<v.length;y++)M[y].textContent=t[y],M[y].style.color="",M[y].style.textShadow="none",v[y].value=String(u[y])}function s(){let t=Z(),l={rgb:t,hsb:ie(t),oklch:se(t),hex:ne(t),alpha:A};for(let u of w)u(l)}function h(){let t=$(x,r);return{rgb:t,hsb:ie(t),oklch:se(t),hex:ne(t)}}_(),G();let C=t=>{x=J(t,r),g={x:Math.max(g.x,x.x),y:Math.max(g.y,x.y),z:Math.max(g.z,x.z)};let l=L(x,R.scale,R.center);T=-1;for(let u=K.length-1;u>=0;u--)if(oe(u,l,g,R.scale,R.center)){T=u;break}s(),_(),B()};return{getColor:h,getMode:()=>r,setColor:C,setAlpha:D,getAlpha:()=>A,setMode(t){E(t)},on(t,l){w.add(l)},off(t,l){w.delete(l)},destroy(){O.destroy(),P!==null&&cancelAnimationFrame(P),e.removeChild(p)}}}export{Je as createBoxColorPicker,xo as createColorPicker,Ae as setBoxInvert};
