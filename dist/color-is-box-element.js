var Se={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ke={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Y(e){let o=e.r/255,t=e.g/255,n=e.b/255,a=Math.max(o,t,n),s=Math.min(o,t,n),l=a-s,r=0;l!==0&&(a===o?r=((t-n)/l+6)%6:a===t?r=(n-o)/l+2:r=(o-t)/l+4,r*=60);let i=a===0?0:l/a*100,u=a*100;return{h:r,s:i,b:u}}function le(e){let o=e.h,t=e.s/100,n=e.b/100,a=n*t,s=a*(1-Math.abs(o/60%2-1)),l=n-a,r,i,u;return o<60?(r=a,i=s,u=0):o<120?(r=s,i=a,u=0):o<180?(r=0,i=a,u=s):o<240?(r=0,i=s,u=a):o<300?(r=s,i=0,u=a):(r=a,i=0,u=s),{r:Math.round((r+l)*255),g:Math.round((i+l)*255),b:Math.round((u+l)*255)}}function He(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ee(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function co(e){let o=He(e.r/255),t=He(e.g/255),n=He(e.b/255),a=.4122214708*o+.5363325363*t+.0514459929*n,s=.2119034982*o+.6806995451*t+.1073969566*n,l=.0883024619*o+.2817188376*t+.6299787005*n,r=Math.cbrt(a),i=Math.cbrt(s),u=Math.cbrt(l);return{L:.2104542553*r+.793617785*i-.0040720468*u,a:1.9779984951*r-2.428592205*i+.4505937099*u,b:.0259040371*r+.7827717662*i-.808675766*u}}function uo(e,o,t){let n=e+.3963377774*o+.2158037573*t,a=e-.1055613458*o-.0638541728*t,s=e-.0894841775*o-1.291485548*t,l=n*n*n,r=a*a*a,i=s*s*s,u=4.0767416621*l-3.3077115913*r+.2309699292*i,b=-1.2684380046*l+2.6097574011*r-.3413193965*i,f=-.0041960863*l-.7034186147*r+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,Ee(u)))*255),g:Math.round(Math.max(0,Math.min(1,Ee(b)))*255),b:Math.round(Math.max(0,Math.min(1,Ee(f)))*255)}}function me(e){let o=co(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function ke(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return uo(e.l,t,n)}function ho(e,o,t){let n=ke({l:e,c:o,h:t});if(Xe(n))return{l:e,c:o,h:t};let a=0,s=o;for(let l=0;l<20;l++){let r=(a+s)/2;n=ke({l:e,c:r,h:t}),Xe(n)?a=r:s=r}return{l:e,c:a,h:t}}function Xe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ce(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function xe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var We=.4;function ae(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return le({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*We,a=e.z*359,s=ho(t,n,a);return ke(s)}}function fe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=Y(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=me(e);return{x:t.l,y:Math.min(t.c/We,1),z:t.h/359}}}function je(e,o){let t=Ke[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function Ye(e,o,t,n,a,s=!1){let l;e===0?l={x:n,y:o,z:t}:e===1?l={x:o,y:n,z:t}:l={x:o,y:t,z:n};let r=ae(l,a);return s?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var Ze=Math.PI/6,bo=Math.cos(Ze),fo=Math.sin(Ze),Te=!1;function Je(e){Te=e}var Ae=0,we=0;function De(e,o){Ae=e,we=o}function pe(){return{yaw:Ae,pitch:we}}function T(e,o,t){let n=e;if(Ae!==0||we!==0){let a={x:e.x-.5,y:e.y-.5,z:e.z-.5},s=Math.cos(Ae),l=Math.sin(Ae),r=Math.cos(we),i=Math.sin(we),u=a.x*s+a.z*l,b=a.y,f=-a.x*l+a.z*s,A=b*r-f*i,w=b*i+f*r;n={x:u+.5,y:A+.5,z:w+.5}}return{x:t.x+(n.y-n.x)*bo*o,y:t.y+n.z*o-(n.x+n.y)*fo*o}}function go(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],mo=64,Qe={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function qe(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function eo(e,o,t,n,a,s,l=!0,r=null,i=null){let{ctx:u,scale:b,center:f,width:A,height:w}=e;u.save(),u.clearRect(0,0,A,w);let E=go(o).map(M=>T(M,b,f));po(u,b,f,a),u.save(),u.shadowColor="rgba(0,0,0,0.35)",u.shadowBlur=8,u.shadowOffsetX=0,u.shadowOffsetY=2,yo(u,E,o,a),u.restore(),l&&Mo(u,a,b,f);let{yaw:g,pitch:V}=pe(),v=Math.max(0,Math.min(1,1-Math.max(Math.abs(g),Math.abs(V))/10));if(v>.02&&Ao(u,b,f,v),i&&i.active&&s.ringAlpha>.01&&wo(u,f,i.rgb,i.sat,s.ringAlpha),n>=0){let M=ae(t,a),z=Te?{r:255-M.r,g:255-M.g,b:255-M.b}:M,p=T(t,b,f);r&&r.active&&To(u,p,r.rgb,r.alpha),Vo(u,p,z)}u.restore()}var xo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function po(e,o,t,n){let a=T({x:0,y:0,z:0},o,t),s=[T({x:1,y:0,z:0},o,t),T({x:0,y:1,z:0},o,t),T({x:0,y:0,z:1},o,t)],l=xo[n];e.lineWidth=1.5;for(let r=0;r<s.length;r++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s[r].x,s[r].y),e.strokeStyle=l[r],e.stroke()}function yo(e,o,t,n){let a=[t.x,t.y,t.z];for(let s=0;s<q.length;s++){let l=q[s],r=a[l.fixedAxis],i=a[l.uAxis],u=a[l.vAxis];if(i<.002&&u<.002)continue;let b=l.quad.map(f=>o[f]);vo(e,b,l.fixedAxis,r,i,u,n)}}function vo(e,o,t,n,a,s,l){let r=mo,i=document.createElement("canvas");i.width=r,i.height=r;let u=i.getContext("2d"),b=u.createImageData(r,r),f=b.data;for(let Z=0;Z<r;Z++)for(let U=0;U<r;U++){let J=U/(r-1)*a,oe=Z/(r-1)*s,te=Ye(t,J,oe,n,l,Te),F=(Z*r+U)*4;f[F]=te.r,f[F+1]=te.g,f[F+2]=te.b,f[F+3]=255}u.putImageData(b,0,0);let A=o[0],w=o[1],E=o[2],g=o[3],V=w.x-A.x,v=w.y-A.y,M=g.x-A.x,z=g.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(w.x,w.y),e.lineTo(E.x,E.y),e.lineTo(g.x,g.y),e.closePath(),e.clip();let p=2/r,R=A.x-V*p-M*p,O=A.y-v*p-z*p,_=1+2*p,I=1+2*p;e.transform(V*_/r,v*_/r,M*I/r,z*I/r,R,O),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function Mo(e,o,t,n){let a=Se[o],s=Te?[T({x:0,y:1,z:1},t,n),T({x:1,y:0,z:1},t,n),T({x:1,y:1,z:0},t,n)]:[T({x:1,y:0,z:0},t,n),T({x:0,y:1,z:0},t,n),T({x:0,y:0,z:1},t,n)],l=Te?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let r=0;r<3;r++){let i=s[r].x+l[r].x,u=s[r].y+l[r].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(a[r],i,u)}e.globalAlpha=1,e.restore()}var Co=.48,ko=.33;function Ao(e,o,t,n){let a=[{x:1,y:0,z:0},{x:1,y:1,z:0},{x:0,y:1,z:0},{x:0,y:1,z:1},{x:0,y:0,z:1},{x:1,y:0,z:1}],s=["R","Y","G","C","B","M"],l=["#ff1744","#ffeb3b","#00e676","#00bcd4","#2962ff","#f50057"];e.save(),e.globalAlpha=n;for(let r of[.25,.5,.75,1]){e.setLineDash(r===1?[]:[3,5]),e.strokeStyle=r===1?"rgba(30,41,59,.5)":"rgba(148,163,184,.55)",e.lineWidth=r===1?1.4:1,e.beginPath();for(let i=0;i<=6;i++){let u=a[i%6],b=T({x:u.x*r,y:u.y*r,z:u.z*r},o,t);i===0?e.moveTo(b.x,b.y):e.lineTo(b.x,b.y)}e.closePath(),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(148,163,184,.4)",e.lineWidth=1;for(let r of a){let i=T(r,o,t);e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(i.x,i.y),e.stroke()}e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="left";for(let r of[.25,.5,.75]){let i=T({x:r,y:r,z:0},o,t);e.fillText(Math.round(r*100)+"%",i.x+5,i.y-4)}e.font="bold 11px sans-serif",e.fillStyle="#334155",e.textAlign="center";for(let r=0;r<6;r++){let i=T(a[r],o,t),u=i.x>t.x+10?14:i.x<t.x-10?-14:0,b=i.y<t.y-10?-10:14;e.fillText(s[r],i.x+u,i.y+b)}e.beginPath(),e.arc(t.x,t.y,3.5,0,Math.PI*2),e.fillStyle="#111",e.fill(),e.restore()}function wo(e,o,t,n,a,s){let l=o*Co,r=o*ko,i=Math.max(0,Math.min(1,a));e.save(),e.globalAlpha=s,e.beginPath(),e.arc(t.x,t.y,l,0,Math.PI*2),e.arc(t.x,t.y,r,0,Math.PI*2,!0),e.clip();let u=e.createRadialGradient(t.x,t.y,r,t.x,t.y,l);u.addColorStop(0,"#e7e7e7"),u.addColorStop(1,"rgb("+n.r+","+n.g+","+n.b+")"),e.fillStyle=u,e.fillRect(t.x-l,t.y-l,l*2,l*2),e.restore(),e.beginPath(),e.arc(t.x,t.y,l,0,Math.PI*2),e.arc(t.x,t.y,r,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let f of[.25,.5,.75]){let A=r+(l-r)*f;e.fillText(Math.round(f*100)+"%",t.x+A+10,t.y-4)}let b=r+(l-r)*i;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(t.x,t.y-r),e.lineTo(t.x,t.y-b),e.stroke(),e.restore(),e.beginPath(),e.arc(t.x,t.y-b,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var ee=30,de=13;function To(e,o,t,n){let a=(ee+de)/2,s=5,l=Math.floor(o.x/s)*s,r=Math.floor(o.y/s)*s,i=ee*2+s*2,u=Math.max(0,Math.min(1,n));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,de,0,Math.PI*2,!0),e.clip();for(let V=-1;V*s<=i;V++)for(let v=-1;v*s<=i;v++)e.fillStyle=(V+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+V*s,r+v*s,s,s);let b="rgba("+t.r+","+t.g+","+t.b+",0)",f="rgba("+t.r+","+t.g+","+t.b+",1)",A=e;if(typeof A.createConicGradient=="function"){let V=A.createConicGradient(-Math.PI/2,o.x,o.y);V.addColorStop(0,b),V.addColorStop(1,f),e.fillStyle=V,e.fillRect(l-ee,r-ee,i,i)}else for(let v=0;v<36;v++){let M=-Math.PI/2+v/36*Math.PI*2,z=-Math.PI/2+(v+1)/36*Math.PI*2,p=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(M)*de,o.y+Math.sin(M)*de),e.arc(o.x,o.y,ee,M,z),e.arc(o.x,o.y,de,z,M,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+p.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,de,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let w=u*Math.PI*2,E=o.x+a*Math.sin(w),g=o.y-a*Math.cos(w);e.beginPath(),e.arc(E,g,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Vo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function oo(e,o,t,n){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return T(a[e],t,n)}function Fe(){let e={x:0,y:0};return[T({x:1,y:0,z:0},1,e),T({x:0,y:1,z:0},1,e),T({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function ye(e,o,t,n,a){let s=q[e],l=[t.x,t.y,t.z],r=l[s.uAxis],i=l[s.vAxis];if(r<.002||i<.002)return null;let u={x:0,y:0,z:0},b=["x","y","z"];u[b[s.fixedAxis]]=l[s.fixedAxis];let f={...u};f[b[s.uAxis]]=r;let A={...u};A[b[s.vAxis]]=i;let w=T(u,n,a),E=T(f,n,a),g=T(A,n,a),V=E.x-w.x,v=E.y-w.y,M=g.x-w.x,z=g.y-w.y,p=V*z-v*M;if(Math.abs(p)<1e-6)return null;let R=o.x-w.x,O=o.y-w.y,_=(R*z-O*M)/p,I=(O*V-R*v)/p;return _<-.05||_>1.05||I<-.05||I>1.05?null:{s:Math.max(0,Math.min(1,_)),t:Math.max(0,Math.min(1,I))}}function to(e,o,t,n,a){let s=q[e],l=[t.x,t.y,t.z],r=l[s.uAxis],i=l[s.vAxis];if(r<.002||i<.002)return null;let u={x:0,y:0,z:0},b=["x","y","z"];u[b[s.fixedAxis]]=l[s.fixedAxis];let f={...u};f[b[s.uAxis]]=r;let A={...u};A[b[s.vAxis]]=i;let w=T(u,n,a),E=T(f,n,a),g=T(A,n,a),V=E.x-w.x,v=E.y-w.y,M=g.x-w.x,z=g.y-w.y,p=V*z-v*M;if(Math.abs(p)<1e-6)return null;let R=o.x-w.x,O=o.y-w.y,_=(R*z-O*M)/p,I=(O*V-R*v)/p;return{s:Math.max(0,Math.min(1,_)),t:Math.max(0,Math.min(1,I))}}var no=22;function ro(e,o,t,n,a,s,l,r,i,u,b,f,A,w,E){let g={...Qe};function V(d){let h=e.getBoundingClientRect();return{x:d.clientX-h.left,y:d.clientY-h.top}}let v=!1,M=!1,z=!1,p=!1,R=null,O=9,_=1e3,I=null;function Z(){U(),I=setTimeout(J,_)}function U(){I!==null&&(clearTimeout(I),I=null)}function J(){I=null,g.alphaMode=!0,ve(),B(),i()}function oe(d){let h=A();return Math.hypot(d.x-h.x,d.y-h.y)}function te(d){let h=A();return(Math.atan2(d.x-h.x,-(d.y-h.y))+Math.PI*2)%(Math.PI*2)}function F(d){b(te(d)/(Math.PI*2)),i()}function ie(d){let h=oe(d);return h>=de-4&&h<=ee+6}function ue(d){let h=o(),k=l(),C=r();for(let y=0;y<3;y++){let S=oo(y,h,k,C),P=d.x-S.x,$=d.y-S.y;if(P*P+$*$<=no*no)return y}return-1}function he(d){let h=o(),k=l(),C=r();for(let y=q.length-1;y>=0;y--){let S=ye(y,d,h,k,C);if(S)return{faceIndex:y,...S}}return null}let K=-1,Ve={x:0,y:0},Pe=0;function Q(d,h){K=d,Ve=h,Pe=o()[["x","y","z"][d]],g.draggingAxisHandle=d,e.style.cursor="grabbing",i()}function j(d){if(U(),K<0)return;let h=d.x-Ve.x,k=d.y-Ve.y,y=Fe()[K],S=l(),$=(h*y.x+k*y.y)/S,X=Math.max(0,Math.min(1,Pe+$)),W=o(),G=["x","y","z"],ge={...W,[G[K]]:X};t(ge);let Ce=n(),Ne=s(),Ue=Ne>=0?q[Ne]:null,Ie={...Ce};Ue&&K===Ue.fixedAxis?Ie[G[K]]=X:Ie[G[K]]=Math.min(Ce[G[K]],X),a(Ie,s()),i()}function ve(){K=-1,g.draggingAxisHandle=-1}let D=-1,ne=null,N=null,c=!1;function m(d,h,k,C){D=d,g.draggingFace=d,ne=null,N=null,c=!1,C&&(c=!0,N={s:h,t:k}),L(d,h,k),e.style.cursor="crosshair",i()}function x(d,h,k){if(U(),D<0)return;let C=o(),y=l(),S=r(),P=ye(D,d,C,y,S),$=D;if(!P&&!k){for(let G=q.length-1;G>=0;G--)if(G!==D&&(P=ye(G,d,C,y,S),P)){$=G;break}}if(!P&&k&&(P=to(D,d,C,y,S),$=D),!P){i();return}$!==D&&(D=$,g.draggingFace=$,ne=null,c=!1,N=null);let{s:X,t:W}=P;if(h&&N){if(c){let G=Math.abs(X-N.s),ge=Math.abs(W-N.t),Ce=.02;(G>Ce||ge>Ce)&&(ne=G>=ge?"u":"v",c=!1)}ne==="u"?W=N.t:ne==="v"&&(X=N.s)}else h||(ne=null,c=!1,N=null);L($,X,W),i()}function L(d,h,k){let C=q[d],y=o(),S=["x","y","z"],P={...n()};P[S[C.uAxis]]=h*y[S[C.uAxis]],P[S[C.vAxis]]=k*y[S[C.vAxis]],P[S[C.fixedAxis]]=y[S[C.fixedAxis]],a(P,d)}function B(){D=-1,g.draggingFace=-1,ne=null,c=!1,N=null}function H(d){M=!0;let h=V(d);if(u()){if(g.alphaMode){if(oe(h)<=O){g.alphaMode=!1,i();return}if(ie(h)){d.preventDefault(),v=!0,F(h);return}g.alphaMode=!1,i();return}oe(h)<=O&&Z()}let k=ue(h);if(k>=0){d.preventDefault(),Q(k,h);return}let C=he(h);if(C){d.preventDefault(),m(C.faceIndex,C.s,C.t,d.shiftKey);return}let y=r();Math.hypot(h.x-y.x,h.y-y.y)>l()+20&&(d.preventDefault(),p=!0,R=h,g.viewRotating=!0,g.ringAlpha=Math.min(1,g.ringAlpha+.25),i())}function be(d){let h=V(d);if(v){d.preventDefault(),F(h);return}if(p&&R){d.preventDefault();let P=h.x-R.x,$=h.y-R.y,X=pe();De(Math.max(-60,Math.min(60,X.yaw+P*.12)),Math.max(-60,Math.min(60,X.pitch+$*.12))),P!==0&&w(Math.max(0,Math.min(1,E()+P*.002))),g.ringAlpha=Math.min(1,g.ringAlpha+.12),R=h,i();return}if(M&&g.alphaMode&&ie(h)){d.preventDefault(),v=!0,F(h);return}if(K>=0){d.preventDefault(),j(h);return}if(D>=0){d.preventDefault(),x(h,d.shiftKey,d.altKey);return}let k=ue(h),C=he(h),y=k,S=k>=0?-1:C?C.faceIndex:-1;(y!==g.hoveredAxisHandle||S!==g.hoveredFace)&&(g.hoveredAxisHandle=y,g.hoveredFace=S,e.style.cursor=y>=0?"grab":S>=0?"crosshair":"default",i())}function se(d){if(U(),M=!1,v=!1,p){p=!1,g.viewRotating=!1;let k=pe();Math.max(Math.abs(k.yaw),Math.abs(k.pitch))>5&&(g.ringAlpha=0),R=null,i()}let h=K>=0||D>=0;ve(),B(),h&&(g.hoveredAxisHandle=-1,g.hoveredFace=-1,e.style.cursor="default",i())}function Re(d){if(d.touches.length!==1)return;z=!0;let h=V(d.touches[0]);if(u()){if(g.alphaMode){if(oe(h)<=O){g.alphaMode=!1,i();return}if(ie(h)){d.preventDefault(),v=!0,F(h);return}g.alphaMode=!1,i();return}oe(h)<=O&&Z()}let k=ue(h);if(k>=0){d.preventDefault(),Q(k,h);return}let C=he(h);if(C){d.preventDefault(),m(C.faceIndex,C.s,C.t,!1);return}let y=r();Math.hypot(h.x-y.x,h.y-y.y)>l()+20&&(d.preventDefault(),p=!0,R=h,g.viewRotating=!0,g.ringAlpha=Math.min(1,g.ringAlpha+.25),i())}function Me(d){if(d.touches.length!==1)return;let h=V(d.touches[0]);if(v)d.preventDefault(),F(h);else if(z&&g.alphaMode&&ie(h))d.preventDefault(),v=!0,F(h);else if(K>=0)d.preventDefault(),j(h);else if(p&&R){d.preventDefault();let k=h.x-R.x,C=h.y-R.y,y=pe();De(Math.max(-60,Math.min(60,y.yaw+k*.12)),Math.max(-60,Math.min(60,y.pitch+C*.12))),k!==0&&w(Math.max(0,Math.min(1,E()+k*.002))),g.ringAlpha=Math.min(1,g.ringAlpha+.12),R=h,i()}else D>=0&&(d.preventDefault(),x(h,!1,!1))}function re(d){if(U(),z=!1,v=!1,p){p=!1,g.viewRotating=!1;let h=pe();Math.max(Math.abs(h.yaw),Math.abs(h.pitch))>5&&(g.ringAlpha=0),R=null,i()}ve(),B(),i()}function Ge(d){if(g.alphaMode){if(d.key==="Escape"){g.alphaMode=!1,i();return}if(d.key==="ArrowUp"||d.key==="ArrowRight"){d.preventDefault(),b(Math.min(1,f()+(d.shiftKey?.08:.02))),i();return}if(d.key==="ArrowDown"||d.key==="ArrowLeft"){d.preventDefault(),b(Math.max(0,f()-(d.shiftKey?.08:.02))),i();return}}let h=d.shiftKey?.04:.004,k=n(),C=o(),y=Fe(),S=0,P=0;switch(d.key){case"ArrowRight":S=1;break;case"ArrowLeft":S=-1;break;case"ArrowUp":P=-1;break;case"ArrowDown":P=1;break;default:return}d.preventDefault();let $={...k},X=["x","y","z"];for(let W=0;W<3;W++){let G=S*y[W].x+P*y[W].y;if(Math.abs(G)>.3){let ge=k[X[W]]+h*Math.sign(G);$[X[W]]=Math.max(0,Math.min(C[X[W]],ge))}}a($,s()),i()}e.addEventListener("mousedown",H),window.addEventListener("mousemove",be),window.addEventListener("mouseup",se),e.addEventListener("touchstart",Re,{passive:!1}),e.addEventListener("touchmove",Me,{passive:!1}),e.addEventListener("touchend",re),e.addEventListener("keydown",Ge),e.setAttribute("tabindex","0");function lo(){U(),e.removeEventListener("mousedown",H),window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",se),e.removeEventListener("touchstart",Re),e.removeEventListener("touchmove",Me),e.removeEventListener("touchend",re),e.removeEventListener("keydown",Ge)}return{state:g,destroy:lo}}var ao=`.box-picker {\r
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
`;var so=zo,io=!1;function So(){if(io||typeof document>"u")return;io=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ao,document.head.appendChild(e)}function zo(e,o={}){let t=o.size??300,n=o.controls??!0,a=o.showInputs??!1,s=o.showModeToggle??!1,l=o.showCorners??!1,r={mode:()=>i,switchMode:c=>U(c),onHexInput:c=>{let m=xe(c);m?(f=fe(I?{r:255-m.r,g:255-m.g,b:255-m.b}:m,i),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)},D(),j(),F()):j()},onChannelInput:(c,m,x)=>{let L=Math.max(0,Math.min(x,m)),B=["x","y","z"],H=L/x;if(I){let be={...f,[B[c]]:H},se=ae(be,i);f=fe({r:255-se.r,g:255-se.g,b:255-se.b},i)}else f={...f,[B[c]]:H};H>b[B[c]]&&(b={...b,[B[c]]:H}),D(),j(),F()},getRgbForCopy:()=>ae(f,i),onRandom:c=>N(c),onReset:()=>N({r:0,g:0,b:0})},i=o.mode??"rgb",u=o.initialColor?fe(o.initialColor,i):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},f={...u},A=0,w=()=>o.alpha!==void 0,E=Math.max(0,Math.min(1,o.alpha??1));function g(c){let m=Math.max(0,Math.min(1,c));m!==E&&(E=m,D(),j(),F())}function V(c){let m=Q(),x=Y(m);x.s=Math.max(0,Math.min(100,c*100));let L=le(x);N(I?{r:255-L.r,g:255-L.g,b:255-L.b}:L)}let v=new Set;So();let M=document.createElement("div");M.className="box-picker";let z=document.createElement("canvas");z.style.cursor="grab",M.appendChild(z);let p=qe(z,t),R=null,O=document.createElement("div");O.className="box-picker-controls",R=document.createElement("div"),R.className="box-picker-swatch",O.appendChild(R),M.appendChild(O),(a||s||l)&&import("./controls-VBFXR3DH.js").then(c=>{c.createControls(O,r,{showInputs:a,showModeToggle:s,showCorners:l})}).catch(()=>{}),e.appendChild(M);let _=ro(z,()=>b,c=>{b=c},()=>f,(c,m)=>{f=c,A=m,D(),j()},()=>A,()=>p.scale,()=>p.center,F,w,g,()=>E,()=>T(f,p.scale,p.center),V,()=>Y(Q()).s/100),I=!1,Z=!0;z.addEventListener("mouseenter",()=>{Z=!0,F()}),z.addEventListener("mouseleave",()=>{Z=!1,F()}),z.addEventListener("dblclick",()=>{I=!I,Je(I),D(),j(),F()});function U(c){if(c===i)return;let m=ae(f,i),x={...f},L={...b};i=c;let B=fe(m,i),H={x:1,y:1,z:1};f=B,b=H,oe(x,B,L,H,300),j()}let J=null;function oe(c,m,x,L,B){J!==null&&cancelAnimationFrame(J);let H=performance.now();function be(se){let Re=se-H,Me=Math.min(1,Re/B),re=1-Math.pow(1-Me,3);f={x:c.x+(m.x-c.x)*re,y:c.y+(m.y-c.y)*re,z:c.z+(m.z-c.z)*re},b={x:x.x+(L.x-x.x)*re,y:x.y+(L.y-x.y)*re,z:x.z+(L.z-x.z)*re},ie(),D(),Me<1?J=requestAnimationFrame(be):J=null}J=requestAnimationFrame(be)}let te=!1;function F(){te||(te=!0,requestAnimationFrame(()=>{te=!1,ie()}))}function ie(){eo(p,b,f,A,i,_.state,Z,{active:_.state.alphaMode,alpha:E,rgb:Q()},{active:_.state.viewRotating||_.state.ringAlpha>0,sat:Y(Q()).s/100,rgb:le({h:Y(Q()).h,s:100,b:100})})}function ue(c,m,x){return Math.round(c+(m-c)*x)}function he(c,m){let x=m>0?255:0,L=Math.abs(m);return ce({r:ue(c.r,x,L),g:ue(c.g,x,L),b:ue(c.b,x,L)})}function K(c,m){let x=xe(m)||{r:128,g:128,b:128},L=he(x,.35),B=he(x,0),H=he(x,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${L}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${B}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${H}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function Ve(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function Pe(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function Q(){let c=ae(f,i);return I?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function j(){if(!n)return;let c=Q(),m=ce(c);R&&K(R,m);let x=M.querySelector(".box-picker-hex");x&&(x.value=m),ve(),M._updateModeButtons&&M._updateModeButtons()}function ve(){if(!n)return;let c=Se[i],m=I?fe(Q(),i):f,x=je(m,i),L=M.querySelectorAll(".box-picker-channel input"),B=M.querySelectorAll(".box-picker-channel label");for(let H=0;H<L.length;H++)B[H].textContent=c[H],B[H].style.color="",B[H].style.textShadow="none",L[H].value=String(x[H])}function D(){let c=Q(),m={rgb:c,hsb:Y(c),oklch:me(c),hex:ce(c),alpha:E};for(let x of v)x(m)}function ne(){let c=ae(f,i);return{rgb:c,hsb:Y(c),oklch:me(c),hex:ce(c)}}j(),ie();let N=c=>{f=fe(c,i),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)};let m=T(f,p.scale,p.center);A=-1;for(let x=q.length-1;x>=0;x--)if(ye(x,m,b,p.scale,p.center)){A=x;break}D(),j(),F()};return{getColor:ne,getMode:()=>i,setColor:N,setAlpha:g,getAlpha:()=>E,setMode(c){U(c)},on(c,m){v.add(m)},off(c,m){v.delete(m)},destroy(){_.destroy(),J!==null&&cancelAnimationFrame(J),e.removeChild(M)}}}function _e(e,o){if(!e)return null;let t=e.trim();try{if(o==="hex")return{rgb:xe(t),alpha:1};if(o==="hex-alpha"){let n=t.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!n)return null;let a=xe(n[1]),s=n[2]?parseInt(n[2],16)/255:1;return{rgb:a,alpha:s}}if(o==="rgb"){let n=t.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return n?{r:+n[1],g:+n[2],b:+n[3]}:null}if(o==="rgba"){let n=t.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return n?{rgb:{r:+n[1],g:+n[2],b:+n[3]},alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="hsl"){let n=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return n?Be(+n[1],+n[2],+n[3]):null}if(o==="hsla"){let n=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return n?{rgb:Be(+n[1],+n[2],+n[3]),alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="hsv"){let n=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return n?le({h:+n[1],s:+n[2],b:+n[3]}):null}if(o==="hsva"){let n=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return n?{rgb:le({h:+n[1],s:+n[2],b:+n[3]}),alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="oklch"||o==="oklcha"){let n=t.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return n?{rgb:ke({l:+n[1],c:+n[2],h:+n[3]}),alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="rgba-string"){let n=t.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return n?{rgb:{r:+n[1],g:+n[2],b:+n[3]},alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="hsla-string"){let n=t.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return n?{rgb:Be(+n[1],+n[2],+n[3]),alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="hsva-string"){let n=t.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return n?{rgb:le({h:+n[1],s:+n[2],b:+n[3]}),alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}}catch{}return null}function ze(e,o,t=1){if(o==="hex")return ce(e);if(o==="hex-alpha")return ce(e)+(t<1?Math.round(t*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+t.toFixed(3)}`;if(o==="hsl"){let a=Oe(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%`}if(o==="hsla"){let a=Oe(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+t.toFixed(3)}`}if(o==="hsv"){let a=Y(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%`}if(o==="hsva"){let a=Y(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+t.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+t.toFixed(3)})`;if(o==="hsla-string"){let a=Oe(e);return`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+t.toFixed(3)})`}if(o==="hsva-string"){let a=Y(e);return`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+t.toFixed(3)})`}let n=me(e);return`${n.l.toFixed(3)}, ${n.c.toFixed(3)}, ${n.h.toFixed(1)}`}function Be(e,o,t){let n=o/100,a=t/100,s=(1-Math.abs(2*a-1))*n,l=s*(1-Math.abs(e/60%2-1)),r=a-s/2,i=0,u=0,b=0;return e<60?(i=s,u=l):e<120?(i=l,u=s):e<180?(u=s,b=l):e<240?(u=l,b=s):e<300?(i=l,b=s):(i=s,b=l),{r:Math.round((i+r)*255),g:Math.round((u+r)*255),b:Math.round((b+r)*255)}}function Oe(e){let o=e.r/255,t=e.g/255,n=e.b/255,a=Math.max(o,t,n),s=Math.min(o,t,n),l=(a+s)/2;if(a===s)return{h:0,s:0,l:l*100};let r=a-s,i=l>.5?r/(2-a-s):r/(a+s),u=0;return a===o?u=((t-n)/r+(t<n?6:0))*60:a===t?u=((n-o)/r+2)*60:u=((o-t)/r+4)*60,{h:u,s:i*100,l:l*100}}var Le=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),t=this.getAttribute("mode")||"rgb",n=this.getAttribute("value"),a=n?_e(n,this.model):null;this.alpha=a?.alpha??1;let s=a?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=so(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",r=>{this.internal||(this.internal=!0,this.alpha=r.alpha,this.setAttribute("value",ze(r.rgb,this.model,r.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:r})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ze(r.rgb,this.model,r.alpha)})))}),t&&this.picker.setMode(t)}attributeChangedCallback(o,t,n){if(!(!this.picker||!n||this.internal))if(o==="value"){let a=_e(n,this.model);a&&(this.alpha=a.alpha,this.picker.setColor(a.rgb),this.picker.setAlpha(a.alpha))}else o==="mode"&&this.picker.setMode(n)}get value(){return this.getAttribute("value")||ze({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},$e=class extends Le{constructor(){super("hex")}},Lo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Lo)customElements.get(e)||customElements.define(e,class extends Le{constructor(){super(o)}});var qo=$e;export{$e as ColorIsBoxElement,zo as createBoxColorPicker,so as createColorPicker,qo as default,Je as setBoxInvert};
