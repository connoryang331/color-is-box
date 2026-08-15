var we={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Oe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function se(e){let o=e.r/255,n=e.g/255,a=e.b/255,l=Math.max(o,n,a),c=Math.min(o,n,a),u=l-c,t=0;u!==0&&(l===o?t=((n-a)/u+6)%6:l===n?t=(a-o)/u+2:t=(o-n)/u+4,t*=60);let r=l===0?0:u/l*100,b=l*100;return{h:t,s:r,b}}function Te(e){let o=e.h,n=e.s/100,a=e.b/100,l=a*n,c=l*(1-Math.abs(o/60%2-1)),u=a-l,t,r,b;return o<60?(t=l,r=c,b=0):o<120?(t=c,r=l,b=0):o<180?(t=0,r=l,b=c):o<240?(t=0,r=c,b=l):o<300?(t=c,r=0,b=l):(t=l,r=0,b=c),{r:Math.round((t+u)*255),g:Math.round((r+u)*255),b:Math.round((b+u)*255)}}function Re(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Le(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function no(e){let o=Re(e.r/255),n=Re(e.g/255),a=Re(e.b/255),l=.4122214708*o+.5363325363*n+.0514459929*a,c=.2119034982*o+.6806995451*n+.1073969566*a,u=.0883024619*o+.2817188376*n+.6299787005*a,t=Math.cbrt(l),r=Math.cbrt(c),b=Math.cbrt(u);return{L:.2104542553*t+.793617785*r-.0040720468*b,a:1.9779984951*t-2.428592205*r+.4505937099*b,b:.0259040371*t+.7827717662*r-.808675766*b}}function to(e,o,n){let a=e+.3963377774*o+.2158037573*n,l=e-.1055613458*o-.0638541728*n,c=e-.0894841775*o-1.291485548*n,u=a*a*a,t=l*l*l,r=c*c*c,b=4.0767416621*u-3.3077115913*t+.2309699292*r,f=-1.2684380046*u+2.6097574011*t-.3413193965*r,h=-.0041960863*u-.7034186147*t+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Le(b)))*255),g:Math.round(Math.max(0,Math.min(1,Le(f)))*255),b:Math.round(Math.max(0,Math.min(1,Le(h)))*255)}}function Ve(e){let o=no(e),n=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:n,h:n<1e-4?0:a}}function Pe(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),a=e.c*Math.sin(o);return to(e.l,n,a)}function ro(e,o,n){let a=Pe({l:e,c:o,h:n});if(_e(a))return{l:e,c:o,h:n};let l=0,c=o;for(let u=0;u<20;u++){let t=(l+c)/2;a=Pe({l:e,c:t,h:n}),_e(a)?l=t:c=t}return{l:e,c:l,h:n}}function _e(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ye(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Ie(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Ge=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Te({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,a=e.y*Ge,l=e.z*359,c=ro(n,a,l);return Pe(c)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=se(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Ve(e);return{x:n.l,y:Math.min(n.c/Ge,1),z:n.h/359}}}function Ne(e,o){let n=Oe[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Ue(e,o,n,a,l,c=!1){let u;e===0?u={x:a,y:o,z:n}:e===1?u={x:o,y:a,z:n}:u={x:o,y:n,z:a};let t=re(u,l);return c?{r:255-t.r,g:255-t.g,b:255-t.b}:t}var Ke=Math.PI/6,ao=Math.cos(Ke),io=Math.sin(Ke),Ce=!1;function Xe(e){Ce=e}var ve=0,Me=0;function He(e,o){ve=e,Me=o}function he(){return{yaw:ve,pitch:Me}}function T(e,o,n){let a=e;if(ve!==0||Me!==0){let l={x:e.x-.5,y:e.y-.5,z:e.z-.5},c=Math.cos(ve),u=Math.sin(ve),t=Math.cos(Me),r=Math.sin(Me),b=l.x*c+l.z*u,f=l.y,h=-l.x*u+l.z*c,A=f*t-h*r,w=f*r+h*t;a={x:b+.5,y:A+.5,z:w+.5}}return{x:n.x+(a.y-a.x)*ao*o,y:n.y+a.z*o-(a.x+a.y)*io*o}}function so(e){let{x:o,y:n,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:a},{x:o,y:n,z:0},{x:o,y:0,z:a},{x:0,y:n,z:a},{x:o,y:n,z:a}]}var Q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],lo=64,$e={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function We(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(n,n),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function je(e,o,n,a,l,c,u=!0,t=null,r=null){let{ctx:b,scale:f,center:h,width:A,height:w}=e;b.save(),b.clearRect(0,0,A,w);let D=so(o).map(M=>T(M,f,h));uo(b,f,h,l),b.save(),b.shadowColor="rgba(0,0,0,0.35)",b.shadowBlur=8,b.shadowOffsetX=0,b.shadowOffsetY=2,bo(b,D,o,l),b.restore(),u&&ho(b,l,f,h);let{yaw:x,pitch:V}=he(),v=Math.max(0,Math.min(1,1-Math.max(Math.abs(x),Math.abs(V))/10));if(v>.02&&go(b,f,h,v),r&&r.active&&c.ringAlpha>.01&&po(b,h,r.rgb,r.sat,c.ringAlpha),a>=0){let M=re(n,l),R=Ce?{r:255-M.r,g:255-M.g,b:255-M.b}:M,p=T(n,f,h);t&&t.active&&yo(b,p,t.rgb,t.alpha),vo(b,p,R)}b.restore()}var co={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function uo(e,o,n,a){let l=T({x:0,y:0,z:0},o,n),c=[T({x:1,y:0,z:0},o,n),T({x:0,y:1,z:0},o,n),T({x:0,y:0,z:1},o,n)],u=co[a];e.lineWidth=1.5;for(let t=0;t<c.length;t++)e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(c[t].x,c[t].y),e.strokeStyle=u[t],e.stroke()}function bo(e,o,n,a){let l=[n.x,n.y,n.z];for(let c=0;c<Q.length;c++){let u=Q[c],t=l[u.fixedAxis],r=l[u.uAxis],b=l[u.vAxis];if(r<.002&&b<.002)continue;let f=u.quad.map(h=>o[h]);fo(e,f,u.fixedAxis,t,r,b,a)}}function fo(e,o,n,a,l,c,u){let t=lo,r=document.createElement("canvas");r.width=t,r.height=t;let b=r.getContext("2d"),f=b.createImageData(t,t),h=f.data;for(let Y=0;Y<t;Y++)for(let K=0;K<t;K++){let Z=K/(t-1)*l,ee=Y/(t-1)*c,oe=Ue(n,Z,ee,a,u,Ce),F=(Y*t+K)*4;h[F]=oe.r,h[F+1]=oe.g,h[F+2]=oe.b,h[F+3]=255}b.putImageData(f,0,0);let A=o[0],w=o[1],D=o[2],x=o[3],V=w.x-A.x,v=w.y-A.y,M=x.x-A.x,R=x.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(w.x,w.y),e.lineTo(D.x,D.y),e.lineTo(x.x,x.y),e.closePath(),e.clip();let p=2/t,S=A.x-V*p-M*p,O=A.y-v*p-R*p,_=1+2*p,I=1+2*p;e.transform(V*_/t,v*_/t,M*I/t,R*I/t,S,O),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function ho(e,o,n,a){let l=we[o],c=Ce?[T({x:0,y:1,z:1},n,a),T({x:1,y:0,z:1},n,a),T({x:1,y:1,z:0},n,a)]:[T({x:1,y:0,z:0},n,a),T({x:0,y:1,z:0},n,a),T({x:0,y:0,z:1},n,a)],u=Ce?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let t=0;t<3;t++){let r=c[t].x+u[t].x,b=c[t].y+u[t].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(l[t],r,b)}e.globalAlpha=1,e.restore()}var xo=.48,mo=.33;function go(e,o,n,a){let l=[{x:1,y:0,z:0},{x:1,y:1,z:0},{x:0,y:1,z:0},{x:0,y:1,z:1},{x:0,y:0,z:1},{x:1,y:0,z:1}],c=["R","Y","G","C","B","M"],u=["#ff1744","#ffeb3b","#00e676","#00bcd4","#2962ff","#f50057"];e.save(),e.globalAlpha=a;for(let t of[.25,.5,.75,1]){e.setLineDash(t===1?[]:[3,5]),e.strokeStyle=t===1?"rgba(30,41,59,.5)":"rgba(148,163,184,.55)",e.lineWidth=t===1?1.4:1,e.beginPath();for(let r=0;r<=6;r++){let b=l[r%6],f=T({x:b.x*t,y:b.y*t,z:b.z*t},o,n);r===0?e.moveTo(f.x,f.y):e.lineTo(f.x,f.y)}e.closePath(),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(148,163,184,.4)",e.lineWidth=1;for(let t of l){let r=T(t,o,n);e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(r.x,r.y),e.stroke()}e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="left";for(let t of[.25,.5,.75]){let r=T({x:t,y:t,z:0},o,n);e.fillText(Math.round(t*100)+"%",r.x+5,r.y-4)}e.font="bold 11px sans-serif",e.fillStyle="#334155",e.textAlign="center";for(let t=0;t<6;t++){let r=T(l[t],o,n),b=r.x>n.x+10?14:r.x<n.x-10?-14:0,f=r.y<n.y-10?-10:14;e.fillText(c[t],r.x+b,r.y+f)}e.beginPath(),e.arc(n.x,n.y,3.5,0,Math.PI*2),e.fillStyle="#111",e.fill(),e.restore()}function po(e,o,n,a,l,c){let u=o*xo,t=o*mo,r=Math.max(0,Math.min(1,l));e.save(),e.globalAlpha=c,e.beginPath(),e.arc(n.x,n.y,u,0,Math.PI*2),e.arc(n.x,n.y,t,0,Math.PI*2,!0),e.clip();let b=e.createRadialGradient(n.x,n.y,t,n.x,n.y,u);b.addColorStop(0,"#e7e7e7"),b.addColorStop(1,"rgb("+a.r+","+a.g+","+a.b+")"),e.fillStyle=b,e.fillRect(n.x-u,n.y-u,u*2,u*2),e.restore(),e.beginPath(),e.arc(n.x,n.y,u,0,Math.PI*2),e.arc(n.x,n.y,t,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let h of[.25,.5,.75]){let A=t+(u-t)*h;e.fillText(Math.round(h*100)+"%",n.x+A+10,n.y-4)}let f=t+(u-t)*r;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(n.x,n.y-t),e.lineTo(n.x,n.y-f),e.stroke(),e.restore(),e.beginPath(),e.arc(n.x,n.y-f,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var q=30,le=13;function yo(e,o,n,a){let l=(q+le)/2,c=5,u=Math.floor(o.x/c)*c,t=Math.floor(o.y/c)*c,r=q*2+c*2,b=Math.max(0,Math.min(1,a));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let V=-1;V*c<=r;V++)for(let v=-1;v*c<=r;v++)e.fillStyle=(V+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+V*c,t+v*c,c,c);let f="rgba("+n.r+","+n.g+","+n.b+",0)",h="rgba("+n.r+","+n.g+","+n.b+",1)",A=e;if(typeof A.createConicGradient=="function"){let V=A.createConicGradient(-Math.PI/2,o.x,o.y);V.addColorStop(0,f),V.addColorStop(1,h),e.fillStyle=V,e.fillRect(u-q,t-q,r,r)}else for(let v=0;v<36;v++){let M=-Math.PI/2+v/36*Math.PI*2,R=-Math.PI/2+(v+1)/36*Math.PI*2,p=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(M)*le,o.y+Math.sin(M)*le),e.arc(o.x,o.y,q,M,R),e.arc(o.x,o.y,le,R,M,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+p.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let w=b*Math.PI*2,D=o.x+l*Math.sin(w),x=o.y-l*Math.cos(w);e.beginPath(),e.arc(D,x,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function vo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Ye(e,o,n,a){let l=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return T(l[e],n,a)}function De(){let e={x:0,y:0};return[T({x:1,y:0,z:0},1,e),T({x:0,y:1,z:0},1,e),T({x:0,y:0,z:1},1,e)].map(n=>{let a=Math.sqrt(n.x*n.x+n.y*n.y);return a>0?{x:n.x/a,y:n.y/a}:{x:0,y:0}})}function xe(e,o,n,a,l){let c=Q[e],u=[n.x,n.y,n.z],t=u[c.uAxis],r=u[c.vAxis];if(t<.002||r<.002)return null;let b={x:0,y:0,z:0},f=["x","y","z"];b[f[c.fixedAxis]]=u[c.fixedAxis];let h={...b};h[f[c.uAxis]]=t;let A={...b};A[f[c.vAxis]]=r;let w=T(b,a,l),D=T(h,a,l),x=T(A,a,l),V=D.x-w.x,v=D.y-w.y,M=x.x-w.x,R=x.y-w.y,p=V*R-v*M;if(Math.abs(p)<1e-6)return null;let S=o.x-w.x,O=o.y-w.y,_=(S*R-O*M)/p,I=(O*V-S*v)/p;return _<-.05||_>1.05||I<-.05||I>1.05?null:{s:Math.max(0,Math.min(1,_)),t:Math.max(0,Math.min(1,I))}}function Ze(e,o,n,a,l){let c=Q[e],u=[n.x,n.y,n.z],t=u[c.uAxis],r=u[c.vAxis];if(t<.002||r<.002)return null;let b={x:0,y:0,z:0},f=["x","y","z"];b[f[c.fixedAxis]]=u[c.fixedAxis];let h={...b};h[f[c.uAxis]]=t;let A={...b};A[f[c.vAxis]]=r;let w=T(b,a,l),D=T(h,a,l),x=T(A,a,l),V=D.x-w.x,v=D.y-w.y,M=x.x-w.x,R=x.y-w.y,p=V*R-v*M;if(Math.abs(p)<1e-6)return null;let S=o.x-w.x,O=o.y-w.y,_=(S*R-O*M)/p,I=(O*V-S*v)/p;return{s:Math.max(0,Math.min(1,_)),t:Math.max(0,Math.min(1,I))}}var Je=22;function Qe(e,o,n,a,l,c,u,t,r,b,f,h,A,w,D){let x={...$e};function V(s){let d=e.getBoundingClientRect();return{x:s.clientX-d.left,y:s.clientY-d.top}}let v=!1,M=!1,R=!1,p=!1,S=null,O=9,_=1e3,I=null;function Y(){K(),I=setTimeout(Z,_)}function K(){I!==null&&(clearTimeout(I),I=null)}function Z(){I=null,x.alphaMode=!0,me(),B(),r()}function ee(s){let d=A();return Math.hypot(s.x-d.x,s.y-d.y)}function oe(s){let d=A();return(Math.atan2(s.x-d.x,-(s.y-d.y))+Math.PI*2)%(Math.PI*2)}function F(s){f(oe(s)/(Math.PI*2)),r()}function ae(s){let d=ee(s);return d>=le-4&&d<=q+6}function ce(s){let d=o(),k=u(),C=t();for(let y=0;y<3;y++){let z=Ye(y,d,k,C),P=s.x-z.x,G=s.y-z.y;if(P*P+G*G<=Je*Je)return y}return-1}function de(s){let d=o(),k=u(),C=t();for(let y=Q.length-1;y>=0;y--){let z=xe(y,s,d,k,C);if(z)return{faceIndex:y,...z}}return null}let X=-1,ke={x:0,y:0},Se=0;function J(s,d){X=s,ke=d,Se=o()[["x","y","z"][s]],x.draggingAxisHandle=s,e.style.cursor="grabbing",r()}function j(s){if(K(),X<0)return;let d=s.x-ke.x,k=s.y-ke.y,y=De()[X],z=u(),G=(d*y.x+k*y.y)/z,$=Math.max(0,Math.min(1,Se+G)),W=o(),N=["x","y","z"],fe={...W,[N[X]]:$};n(fe);let pe=a(),Fe=c(),Be=Fe>=0?Q[Fe]:null,ze={...pe};Be&&X===Be.fixedAxis?ze[N[X]]=$:ze[N[X]]=Math.min(pe[N[X]],$),l(ze,c()),r()}function me(){X=-1,x.draggingAxisHandle=-1}let E=-1,ne=null,U=null,i=!1;function m(s,d,k,C){E=s,x.draggingFace=s,ne=null,U=null,i=!1,C&&(i=!0,U={s:d,t:k}),L(s,d,k),e.style.cursor="crosshair",r()}function g(s,d,k){if(K(),E<0)return;let C=o(),y=u(),z=t(),P=xe(E,s,C,y,z),G=E;if(!P&&!k){for(let N=Q.length-1;N>=0;N--)if(N!==E&&(P=xe(N,s,C,y,z),P)){G=N;break}}if(!P&&k&&(P=Ze(E,s,C,y,z),G=E),!P){r();return}G!==E&&(E=G,x.draggingFace=G,ne=null,i=!1,U=null);let{s:$,t:W}=P;if(d&&U){if(i){let N=Math.abs($-U.s),fe=Math.abs(W-U.t),pe=.02;(N>pe||fe>pe)&&(ne=N>=fe?"u":"v",i=!1)}ne==="u"?W=U.t:ne==="v"&&($=U.s)}else d||(ne=null,i=!1,U=null);L(G,$,W),r()}function L(s,d,k){let C=Q[s],y=o(),z=["x","y","z"],P={...a()};P[z[C.uAxis]]=d*y[z[C.uAxis]],P[z[C.vAxis]]=k*y[z[C.vAxis]],P[z[C.fixedAxis]]=y[z[C.fixedAxis]],l(P,s)}function B(){E=-1,x.draggingFace=-1,ne=null,i=!1,U=null}function H(s){M=!0;let d=V(s);if(b()){if(x.alphaMode){if(ee(d)<=O){x.alphaMode=!1,r();return}if(ae(d)){s.preventDefault(),v=!0,F(d);return}x.alphaMode=!1,r();return}ee(d)<=O&&Y()}let k=ce(d);if(k>=0){s.preventDefault(),J(k,d);return}let C=de(d);if(C){s.preventDefault(),m(C.faceIndex,C.s,C.t,s.shiftKey);return}let y=t();Math.hypot(d.x-y.x,d.y-y.y)>u()+20&&(s.preventDefault(),p=!0,S=d,x.viewRotating=!0,x.ringAlpha=Math.min(1,x.ringAlpha+.25),r())}function ue(s){let d=V(s);if(v){s.preventDefault(),F(d);return}if(p&&S){s.preventDefault();let P=d.x-S.x,G=d.y-S.y,$=he();He(Math.max(-60,Math.min(60,$.yaw+P*.12)),Math.max(-60,Math.min(60,$.pitch+G*.12))),P!==0&&w(Math.max(0,Math.min(1,D()+P*.002))),x.ringAlpha=Math.min(1,x.ringAlpha+.12),S=d,r();return}if(M&&x.alphaMode&&ae(d)){s.preventDefault(),v=!0,F(d);return}if(X>=0){s.preventDefault(),j(d);return}if(E>=0){s.preventDefault(),g(d,s.shiftKey,s.altKey);return}let k=ce(d),C=de(d),y=k,z=k>=0?-1:C?C.faceIndex:-1;(y!==x.hoveredAxisHandle||z!==x.hoveredFace)&&(x.hoveredAxisHandle=y,x.hoveredFace=z,e.style.cursor=y>=0?"grab":z>=0?"crosshair":"default",r())}function ie(s){if(K(),M=!1,v=!1,p){p=!1,x.viewRotating=!1;let k=he();Math.max(Math.abs(k.yaw),Math.abs(k.pitch))>5&&(x.ringAlpha=0),S=null,r()}let d=X>=0||E>=0;me(),B(),d&&(x.hoveredAxisHandle=-1,x.hoveredFace=-1,e.style.cursor="default",r())}function Ae(s){if(s.touches.length!==1)return;R=!0;let d=V(s.touches[0]);if(b()){if(x.alphaMode){if(ee(d)<=O){x.alphaMode=!1,r();return}if(ae(d)){s.preventDefault(),v=!0,F(d);return}x.alphaMode=!1,r();return}ee(d)<=O&&Y()}let k=ce(d);if(k>=0){s.preventDefault(),J(k,d);return}let C=de(d);if(C){s.preventDefault(),m(C.faceIndex,C.s,C.t,!1);return}let y=t();Math.hypot(d.x-y.x,d.y-y.y)>u()+20&&(s.preventDefault(),p=!0,S=d,x.viewRotating=!0,x.ringAlpha=Math.min(1,x.ringAlpha+.25),r())}function ge(s){if(s.touches.length!==1)return;let d=V(s.touches[0]);if(v)s.preventDefault(),F(d);else if(R&&x.alphaMode&&ae(d))s.preventDefault(),v=!0,F(d);else if(X>=0)s.preventDefault(),j(d);else if(p&&S){s.preventDefault();let k=d.x-S.x,C=d.y-S.y,y=he();He(Math.max(-60,Math.min(60,y.yaw+k*.12)),Math.max(-60,Math.min(60,y.pitch+C*.12))),k!==0&&w(Math.max(0,Math.min(1,D()+k*.002))),x.ringAlpha=Math.min(1,x.ringAlpha+.12),S=d,r()}else E>=0&&(s.preventDefault(),g(d,!1,!1))}function te(s){if(K(),R=!1,v=!1,p){p=!1,x.viewRotating=!1;let d=he();Math.max(Math.abs(d.yaw),Math.abs(d.pitch))>5&&(x.ringAlpha=0),S=null,r()}me(),B(),r()}function Ee(s){if(x.alphaMode){if(s.key==="Escape"){x.alphaMode=!1,r();return}if(s.key==="ArrowUp"||s.key==="ArrowRight"){s.preventDefault(),f(Math.min(1,h()+(s.shiftKey?.08:.02))),r();return}if(s.key==="ArrowDown"||s.key==="ArrowLeft"){s.preventDefault(),f(Math.max(0,h()-(s.shiftKey?.08:.02))),r();return}}let d=s.shiftKey?.04:.004,k=a(),C=o(),y=De(),z=0,P=0;switch(s.key){case"ArrowRight":z=1;break;case"ArrowLeft":z=-1;break;case"ArrowUp":P=-1;break;case"ArrowDown":P=1;break;default:return}s.preventDefault();let G={...k},$=["x","y","z"];for(let W=0;W<3;W++){let N=z*y[W].x+P*y[W].y;if(Math.abs(N)>.3){let fe=k[$[W]]+d*Math.sign(N);G[$[W]]=Math.max(0,Math.min(C[$[W]],fe))}}l(G,c()),r()}e.addEventListener("mousedown",H),window.addEventListener("mousemove",ue),window.addEventListener("mouseup",ie),e.addEventListener("touchstart",Ae,{passive:!1}),e.addEventListener("touchmove",ge,{passive:!1}),e.addEventListener("touchend",te),e.addEventListener("keydown",Ee),e.setAttribute("tabindex","0");function oo(){K(),e.removeEventListener("mousedown",H),window.removeEventListener("mousemove",ue),window.removeEventListener("mouseup",ie),e.removeEventListener("touchstart",Ae),e.removeEventListener("touchmove",ge),e.removeEventListener("touchend",te),e.removeEventListener("keydown",Ee)}return{state:x,destroy:oo}}var qe=`.box-picker {\r
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
`;var _o=ko,eo=!1;function Co(){if(eo||typeof document>"u")return;eo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=qe,document.head.appendChild(e)}function ko(e,o={}){let n=o.size??300,a=o.controls??!0,l=o.showInputs??!1,c=o.showModeToggle??!1,u=o.showCorners??!1,t={mode:()=>r,switchMode:i=>K(i),onHexInput:i=>{let m=Ie(i);m?(h=be(I?{r:255-m.r,g:255-m.g,b:255-m.b}:m,r),f={x:Math.max(f.x,h.x),y:Math.max(f.y,h.y),z:Math.max(f.z,h.z)},E(),j(),F()):j()},onChannelInput:(i,m,g)=>{let L=Math.max(0,Math.min(g,m)),B=["x","y","z"],H=L/g;if(I){let ue={...h,[B[i]]:H},ie=re(ue,r);h=be({r:255-ie.r,g:255-ie.g,b:255-ie.b},r)}else h={...h,[B[i]]:H};H>f[B[i]]&&(f={...f,[B[i]]:H}),E(),j(),F()},getRgbForCopy:()=>re(h,r),onRandom:i=>U(i),onReset:()=>U({r:0,g:0,b:0})},r=o.mode??"rgb",b=o.initialColor?be(o.initialColor,r):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},h={...b},A=0,w=()=>o.alpha!==void 0,D=Math.max(0,Math.min(1,o.alpha??1));function x(i){let m=Math.max(0,Math.min(1,i));m!==D&&(D=m,E(),j(),F())}function V(i){let m=J(),g=se(m);g.s=Math.max(0,Math.min(100,i*100));let L=Te(g);U(I?{r:255-L.r,g:255-L.g,b:255-L.b}:L)}let v=new Set;Co();let M=document.createElement("div");M.className="box-picker";let R=document.createElement("canvas");R.style.cursor="grab",M.appendChild(R);let p=We(R,n),S=null,O=document.createElement("div");O.className="box-picker-controls",S=document.createElement("div"),S.className="box-picker-swatch",O.appendChild(S),M.appendChild(O),(l||c||u)&&import("./controls-VBFXR3DH.js").then(i=>{i.createControls(O,t,{showInputs:l,showModeToggle:c,showCorners:u})}).catch(()=>{}),e.appendChild(M);let _=Qe(R,()=>f,i=>{f=i},()=>h,(i,m)=>{h=i,A=m,E(),j()},()=>A,()=>p.scale,()=>p.center,F,w,x,()=>D,()=>T(h,p.scale,p.center),V,()=>se(J()).s/100),I=!1,Y=!0;R.addEventListener("mouseenter",()=>{Y=!0,F()}),R.addEventListener("mouseleave",()=>{Y=!1,F()}),R.addEventListener("dblclick",()=>{I=!I,Xe(I),E(),j(),F()});function K(i){if(i===r)return;let m=re(h,r),g={...h},L={...f};r=i;let B=be(m,r),H={x:1,y:1,z:1};h=B,f=H,ee(g,B,L,H,300),j()}let Z=null;function ee(i,m,g,L,B){Z!==null&&cancelAnimationFrame(Z);let H=performance.now();function ue(ie){let Ae=ie-H,ge=Math.min(1,Ae/B),te=1-Math.pow(1-ge,3);h={x:i.x+(m.x-i.x)*te,y:i.y+(m.y-i.y)*te,z:i.z+(m.z-i.z)*te},f={x:g.x+(L.x-g.x)*te,y:g.y+(L.y-g.y)*te,z:g.z+(L.z-g.z)*te},ae(),E(),ge<1?Z=requestAnimationFrame(ue):Z=null}Z=requestAnimationFrame(ue)}let oe=!1;function F(){oe||(oe=!0,requestAnimationFrame(()=>{oe=!1,ae()}))}function ae(){je(p,f,h,A,r,_.state,Y,{active:_.state.alphaMode,alpha:D,rgb:J()},{active:_.state.viewRotating||_.state.ringAlpha>0,sat:se(J()).s/100,rgb:Te({h:se(J()).h,s:100,b:100})})}function ce(i,m,g){return Math.round(i+(m-i)*g)}function de(i,m){let g=m>0?255:0,L=Math.abs(m);return ye({r:ce(i.r,g,L),g:ce(i.g,g,L),b:ce(i.b,g,L)})}function X(i,m){let g=Ie(m)||{r:128,g:128,b:128},L=de(g,.35),B=de(g,0),H=de(g,-.35);i.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${L}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${B}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${H}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,i.style.backgroundColor="transparent"}function ke(i){try{navigator.clipboard.writeText(i).catch(()=>{})}catch{}}function Se(i){i&&(i.style.borderColor="#4ade80",i.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{i.style.borderColor="",i.style.boxShadow=""},500))}function J(){let i=re(h,r);return I?{r:255-i.r,g:255-i.g,b:255-i.b}:i}function j(){if(!a)return;let i=J(),m=ye(i);S&&X(S,m);let g=M.querySelector(".box-picker-hex");g&&(g.value=m),me(),M._updateModeButtons&&M._updateModeButtons()}function me(){if(!a)return;let i=we[r],m=I?be(J(),r):h,g=Ne(m,r),L=M.querySelectorAll(".box-picker-channel input"),B=M.querySelectorAll(".box-picker-channel label");for(let H=0;H<L.length;H++)B[H].textContent=i[H],B[H].style.color="",B[H].style.textShadow="none",L[H].value=String(g[H])}function E(){let i=J(),m={rgb:i,hsb:se(i),oklch:Ve(i),hex:ye(i),alpha:D};for(let g of v)g(m)}function ne(){let i=re(h,r);return{rgb:i,hsb:se(i),oklch:Ve(i),hex:ye(i)}}j(),ae();let U=i=>{h=be(i,r),f={x:Math.max(f.x,h.x),y:Math.max(f.y,h.y),z:Math.max(f.z,h.z)};let m=T(h,p.scale,p.center);A=-1;for(let g=Q.length-1;g>=0;g--)if(xe(g,m,f,p.scale,p.center)){A=g;break}E(),j(),F()};return{getColor:ne,getMode:()=>r,setColor:U,setAlpha:x,getAlpha:()=>D,setMode(i){K(i)},on(i,m){v.add(m)},off(i,m){v.delete(m)},destroy(){_.destroy(),Z!==null&&cancelAnimationFrame(Z),e.removeChild(M)}}}export{ko as createBoxColorPicker,_o as createColorPicker,Xe as setBoxInvert};
