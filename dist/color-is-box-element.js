var Re={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ze={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function q(e){let o=e.r/255,n=e.g/255,t=e.b/255,a=Math.max(o,n,t),s=Math.min(o,n,t),u=a-s,i=0;u!==0&&(a===o?i=((n-t)/u+6)%6:a===n?i=(t-o)/u+2:i=(o-n)/u+4,i*=60);let r=a===0?0:u/a*100,h=a*100;return{h:i,s:r,b:h}}function fe(e){let o=e.h,n=e.s/100,t=e.b/100,a=t*n,s=a*(1-Math.abs(o/60%2-1)),u=t-a,i,r,h;return o<60?(i=a,r=s,h=0):o<120?(i=s,r=a,h=0):o<180?(i=0,r=a,h=s):o<240?(i=0,r=s,h=a):o<300?(i=s,r=0,h=a):(i=a,r=0,h=s),{r:Math.round((i+u)*255),g:Math.round((r+u)*255),b:Math.round((h+u)*255)}}function Ee(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ie(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function go(e){let o=Ee(e.r/255),n=Ee(e.g/255),t=Ee(e.b/255),a=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,u=.0883024619*o+.2817188376*n+.6299787005*t,i=Math.cbrt(a),r=Math.cbrt(s),h=Math.cbrt(u);return{L:.2104542553*i+.793617785*r-.0040720468*h,a:1.9779984951*i-2.428592205*r+.4505937099*h,b:.0259040371*i+.7827717662*r-.808675766*h}}function po(e,o,n){let t=e+.3963377774*o+.2158037573*n,a=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,u=t*t*t,i=a*a*a,r=s*s*s,h=4.0767416621*u-3.3077115913*i+.2309699292*r,f=-1.2684380046*u+2.6097574011*i-.3413193965*r,m=-.0041960863*u-.7034186147*i+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Ie(h)))*255),g:Math.round(Math.max(0,Math.min(1,Ie(f)))*255),b:Math.round(Math.max(0,Math.min(1,Ie(m)))*255)}}function ge(e){let o=go(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Ae(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return po(e.l,n,t)}function yo(e,o,n){let t=Ae({l:e,c:o,h:n});if(Je(t))return{l:e,c:o,h:n};let a=0,s=o;for(let u=0;u<20;u++){let i=(a+s)/2;t=Ae({l:e,c:i,h:n}),Je(t)?a=i:s=i}return{l:e,c:a,h:n}}function Je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function le(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Qe=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return fe({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Qe,a=e.z*359,s=yo(n,t,a);return Ae(s)}}function xe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=q(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ge(e);return{x:n.l,y:Math.min(n.c/Qe,1),z:n.h/359}}}function qe(e,o){let n=Ze[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function eo(e,o,n,t,a,s=!1){let u;e===0?u={x:t,y:o,z:n}:e===1?u={x:o,y:t,z:n}:u={x:o,y:n,z:t};let i=re(u,a);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var to=Math.PI/6,vo=Math.cos(to),Mo=Math.sin(to),we=!1;function no(e){we=e}var ae=0,ie=0;function Ve(e,o){ae=e,ie=o}function Fe(){return{yaw:ae,pitch:ie}}function ro(){ae=0,ie=0}function Co(e){if(ae===0&&ie===0)return e;let o=Math.cos(ae),n=Math.sin(ae),t=Math.cos(ie),a=Math.sin(ie),s=e.x*o+e.z*n,u=e.y,i=-e.x*n+e.z*o,r=u*t-i*a,h=u*a+i*t;return{x:s,y:r,z:h}}function ko(e){if(ae===0&&ie===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(ae),t=Math.sin(ae),a=Math.cos(ie),s=Math.sin(ie),u=o.x*n+o.z*t,i=o.y,r=-o.x*t+o.z*n,h=i*a-r*s,f=i*s+r*a;return{x:u+.5,y:h+.5,z:f+.5}}function H(e,o,n){let t=ko(e);return{x:n.x+(t.y-t.x)*vo*o,y:n.y+t.z*o-(t.x+t.y)*Mo*o}}function Ao(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Z=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],wo=64,ao={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function io(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function so(e,o,n,t,a,s,u=!0,i=null){let{ctx:r,scale:h,center:f,width:m,height:C}=e;r.save(),r.clearRect(0,0,m,C);let k=Ao(o),P=k.map(b=>H(b,h,f));if(To(r,h,f,a),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,zo(r,P,k,o,a,s.viewRotating),r.restore(),u&&!s.viewRotating&&Ro(r,a,h,f),t>=0){let b=re(n,a),R=we?{r:255-b.r,g:255-b.g,b:255-b.b}:b,v=H(n,h,f);i&&i.active&&So(r,v,i.rgb,i.alpha),Lo(r,v,R)}r.restore()}var Vo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function To(e,o,n,t){let a=H({x:0,y:0,z:0},o,n),s=[H({x:1,y:0,z:0},o,n),H({x:0,y:1,z:0},o,n),H({x:0,y:0,z:1},o,n)],u=Vo[t];e.lineWidth=1.5;for(let i=0;i<s.length;i++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s[i].x,s[i].y),e.strokeStyle=u[i],e.stroke()}function zo(e,o,n,t,a,s){let u=[t.x,t.y,t.z];for(let i=0;i<Z.length;i++){let r=Z[i],h=u[r.fixedAxis],f=u[r.uAxis],m=u[r.vAxis];if(f<.002&&m<.002)continue;let C=Co(r.normal),k=C.x+C.y+C.z>0,P=r.quad.map(b=>o[b]);k?oo(e,P,r.fixedAxis,h,f,m,a):(e.save(),e.globalAlpha=s?.5:0,oo(e,P,r.fixedAxis,h,f,m,a),e.restore())}}function oo(e,o,n,t,a,s,u){let i=wo,r=document.createElement("canvas");r.width=i,r.height=i;let h=r.getContext("2d"),f=h.createImageData(i,i),m=f.data;for(let W=0;W<i;W++)for(let oe=0;oe<i;oe++){let G=oe/(i-1)*a,ve=W/(i-1)*s,X=eo(n,G,ve,t,u,we),B=(W*i+oe)*4;m[B]=X.r,m[B+1]=X.g,m[B+2]=X.b,m[B+3]=255}h.putImageData(f,0,0);let C=o[0],k=o[1],P=o[2],b=o[3],R=k.x-C.x,v=k.y-C.y,T=b.x-C.x,I=b.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(k.x,k.y),e.lineTo(P.x,P.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let p=2/i,w=C.x-R*p-T*p,_=C.y-v*p-I*p,D=1+2*p,F=1+2*p;e.transform(R*D/i,v*D/i,T*F/i,I*F/i,w,_),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function Ro(e,o,n,t){let a=Re[o],s=we?[H({x:0,y:1,z:1},n,t),H({x:1,y:0,z:1},n,t),H({x:1,y:1,z:0},n,t)]:[H({x:1,y:0,z:0},n,t),H({x:0,y:1,z:0},n,t),H({x:0,y:0,z:1},n,t)],u=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let r=s[i].x+u[i].x,h=s[i].y+u[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(a[i],r,h)}e.globalAlpha=1,e.restore()}var ee=30,ce=13;function So(e,o,n,t){let a=(ee+ce)/2,s=5,u=Math.floor(o.x/s)*s,i=Math.floor(o.y/s)*s,r=ee*2+s*2,h=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,ce,0,Math.PI*2,!0),e.clip();for(let R=-1;R*s<=r;R++)for(let v=-1;v*s<=r;v++)e.fillStyle=(R+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+R*s,i+v*s,s,s);let f="rgba("+n.r+","+n.g+","+n.b+",0)",m="rgba("+n.r+","+n.g+","+n.b+",1)",C=e;if(typeof C.createConicGradient=="function"){let R=C.createConicGradient(-Math.PI/2,o.x,o.y);R.addColorStop(0,f),R.addColorStop(1,m),e.fillStyle=R,e.fillRect(u-ee,i-ee,r,r)}else for(let v=0;v<36;v++){let T=-Math.PI/2+v/36*Math.PI*2,I=-Math.PI/2+(v+1)/36*Math.PI*2,p=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*ce,o.y+Math.sin(T)*ce),e.arc(o.x,o.y,ee,T,I),e.arc(o.x,o.y,ce,I,T,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+p.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,ce,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=h*Math.PI*2,P=o.x+a*Math.sin(k),b=o.y-a*Math.cos(k);e.beginPath(),e.arc(P,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Lo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function lo(e,o,n,t){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return H(a[e],n,t)}function De(){let e={x:0,y:0};return[H({x:1,y:0,z:0},1,e),H({x:0,y:1,z:0},1,e),H({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function ye(e,o,n,t,a){let s=Z[e],u=[n.x,n.y,n.z],i=u[s.uAxis],r=u[s.vAxis];if(i<.002||r<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[s.fixedAxis]]=u[s.fixedAxis];let m={...h};m[f[s.uAxis]]=i;let C={...h};C[f[s.vAxis]]=r;let k=H(h,t,a),P=H(m,t,a),b=H(C,t,a),R=P.x-k.x,v=P.y-k.y,T=b.x-k.x,I=b.y-k.y,p=R*I-v*T;if(Math.abs(p)<1e-6)return null;let w=o.x-k.x,_=o.y-k.y,D=(w*I-_*T)/p,F=(_*R-w*v)/p;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function co(e,o,n,t,a){let s=Z[e],u=[n.x,n.y,n.z],i=u[s.uAxis],r=u[s.vAxis];if(i<.002||r<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[s.fixedAxis]]=u[s.fixedAxis];let m={...h};m[f[s.uAxis]]=i;let C={...h};C[f[s.vAxis]]=r;let k=H(h,t,a),P=H(m,t,a),b=H(C,t,a),R=P.x-k.x,v=P.y-k.y,T=b.x-k.x,I=b.y-k.y,p=R*I-v*T;if(Math.abs(p)<1e-6)return null;let w=o.x-k.x,_=o.y-k.y,D=(w*I-_*T)/p,F=(_*R-w*v)/p;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var uo=22;function ho(e,o,n,t,a,s,u,i,r,h,f,m,C,k,P){let b={...ao};function R(l){let d=e.getBoundingClientRect();return{x:l.clientX-d.left,y:l.clientY-d.top}}let v=!1,T=!1,I=!1,p=!1,w=null,_=600,D=null;function F(){W(),D=setTimeout(oe,_)}function W(){D!==null&&(clearTimeout(D),D=null)}function oe(){D=null,b.alphaMode=!1,be(),g(),p=!0,b.viewRotating=!0,w=null,r()}let G=9,ve=1e3,X=null;function B(){J(),X=setTimeout(Me,ve)}function J(){X!==null&&(clearTimeout(X),X=null),W()}function Me(){X=null,b.alphaMode=!0,g(),be(),r()}function te(l){let d=C();return Math.hypot(l.x-d.x,l.y-d.y)}function Pe(l){let d=C();return(Math.atan2(l.x-d.x,-(l.y-d.y))+Math.PI*2)%(Math.PI*2)}function ue(l){f(Pe(l)/(Math.PI*2)),r()}function Ce(l){let d=te(l);return d>=ce-4&&d<=ee+6}function Q(l){let d=o(),A=u(),M=i();for(let y=0;y<3;y++){let L=lo(y,d,A,M),E=l.x-L.x,$=l.y-L.y;if(E*E+$*$<=uo*uo)return y}return-1}function N(l){let d=o(),A=u(),M=i();for(let y=Z.length-1;y>=0;y--){let L=ye(y,l,d,A,M);if(L)return{faceIndex:y,...L}}return null}let K=-1,Y={x:0,y:0},Te=0;function de(l,d){K=l,Y=d,Te=o()[["x","y","z"][l]],b.draggingAxisHandle=l,e.style.cursor="grabbing",r()}function c(l){if(J(),K<0)return;let d=l.x-Y.x,A=l.y-Y.y,y=De()[K],L=u(),$=(d*y.x+A*y.y)/L,U=Math.max(0,Math.min(1,Te+$)),j=o(),O=["x","y","z"],me={...j,[O[K]]:U};n(me);let ke=t(),We=s(),Ye=We>=0?Z[We]:null,He={...ke};Ye&&K===Ye.fixedAxis?He[O[K]]=U:He[O[K]]=Math.min(ke[O[K]],U),a(He,s()),r()}function g(){K=-1,b.draggingAxisHandle=-1}let x=-1,V=null,S=null,z=!1;function he(l,d,A,M){x=l,b.draggingFace=l,V=null,S=null,z=!1,M&&(z=!0,S={s:d,t:A}),ze(l,d,A),e.style.cursor="crosshair",r()}function se(l,d,A){if(J(),x<0)return;let M=o(),y=u(),L=i(),E=ye(x,l,M,y,L),$=x;if(!E&&!A){for(let O=Z.length-1;O>=0;O--)if(O!==x&&(E=ye(O,l,M,y,L),E)){$=O;break}}if(!E&&A&&(E=co(x,l,M,y,L),$=x),!E){r();return}$!==x&&(x=$,b.draggingFace=$,V=null,z=!1,S=null);let{s:U,t:j}=E;if(d&&S){if(z){let O=Math.abs(U-S.s),me=Math.abs(j-S.t),ke=.02;(O>ke||me>ke)&&(V=O>=me?"u":"v",z=!1)}V==="u"?j=S.t:V==="v"&&(U=S.s)}else d||(V=null,z=!1,S=null);ze($,U,j),r()}function ze(l,d,A){let M=Z[l],y=o(),L=["x","y","z"],E={...t()};E[L[M.uAxis]]=d*y[L[M.uAxis]],E[L[M.vAxis]]=A*y[L[M.vAxis]],E[L[M.fixedAxis]]=y[L[M.fixedAxis]],a(E,l)}function be(){x=-1,b.draggingFace=-1,V=null,z=!1,S=null}function ne(l){T=!0;let d=R(l);if(h()){if(b.alphaMode){if(te(d)<=G){b.alphaMode=!1,r();return}if(Ce(d)){l.preventDefault(),v=!0,ue(d);return}b.alphaMode=!1,r();return}te(d)<=G&&B()}let A=Q(d);if(A>=0){l.preventDefault(),de(A,d);return}let M=N(d);if(M){l.preventDefault(),he(M.faceIndex,M.s,M.t,l.shiftKey),b.alphaMode||F();return}let y=i();Math.hypot(d.x-y.x,d.y-y.y)>u()+20&&(l.preventDefault(),p=!0,w=d,b.viewRotating=!0,r())}function Ge(l){let d=R(l);if(v){l.preventDefault(),ue(d);return}if(p){if(l.preventDefault(),!w){w=d;return}let E=d.x-w.x,$=d.y-w.y,U=Fe();Ve(Math.max(-60,Math.min(60,U.yaw+E*.12)),Math.max(-60,Math.min(60,U.pitch+$*.12))),E!==0&&k(Math.max(0,Math.min(1,P()+E*.002))),w=d,r();return}if(T&&b.alphaMode&&Ce(d)){l.preventDefault(),v=!0,ue(d);return}if(K>=0){l.preventDefault(),c(d);return}if(x>=0){l.preventDefault(),se(d,l.shiftKey,l.altKey);return}let A=Q(d),M=N(d),y=A,L=A>=0?-1:M?M.faceIndex:-1;(y!==b.hoveredAxisHandle||L!==b.hoveredFace)&&(b.hoveredAxisHandle=y,b.hoveredFace=L,e.style.cursor=y>=0?"grab":L>=0?"crosshair":"default",r())}function Ke(l){J(),T=!1,v=!1,p&&(p=!1,b.viewRotating=!1,w=null,r());let d=K>=0||x>=0;g(),be(),d&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",r())}function Ue(l){if(l.touches.length!==1)return;I=!0;let d=R(l.touches[0]);if(h()){if(b.alphaMode){if(te(d)<=G){b.alphaMode=!1,r();return}if(Ce(d)){l.preventDefault(),v=!0,ue(d);return}b.alphaMode=!1,r();return}te(d)<=G&&B()}let A=Q(d);if(A>=0){l.preventDefault(),de(A,d);return}let M=N(d);if(M){l.preventDefault(),he(M.faceIndex,M.s,M.t,!1),b.alphaMode||F();return}let y=i();Math.hypot(d.x-y.x,d.y-y.y)>u()+20&&(l.preventDefault(),p=!0,w=d,b.viewRotating=!0,r())}function Xe(l){if(l.touches.length!==1)return;let d=R(l.touches[0]);if(v)l.preventDefault(),ue(d);else if(I&&b.alphaMode&&Ce(d))l.preventDefault(),v=!0,ue(d);else if(K>=0)l.preventDefault(),c(d);else if(p){if(l.preventDefault(),!w){w=d;return}let A=d.x-w.x,M=d.y-w.y,y=Fe();Ve(Math.max(-60,Math.min(60,y.yaw+A*.12)),Math.max(-60,Math.min(60,y.pitch+M*.12))),A!==0&&k(Math.max(0,Math.min(1,P()+A*.002))),w=d,r()}else x>=0&&(l.preventDefault(),se(d,!1,!1))}function Ne(l){J(),I=!1,v=!1,p&&(p=!1,b.viewRotating=!1,w=null,r()),g(),be(),r()}function je(l){if(l.key==="1"){Ve(Math.PI/4,0),r();return}if(l.key==="0"){ro(),r();return}if(l.key==="2"){Ve(.95,-.54),r();return}if(b.alphaMode){if(l.key==="Escape"){b.alphaMode=!1,r();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),f(Math.min(1,m()+(l.shiftKey?.08:.02))),r();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),f(Math.max(0,m()-(l.shiftKey?.08:.02))),r();return}}let d=l.shiftKey?.04:.004,A=t(),M=o(),y=De(),L=0,E=0;switch(l.key){case"ArrowRight":L=1;break;case"ArrowLeft":L=-1;break;case"ArrowUp":E=-1;break;case"ArrowDown":E=1;break;default:return}l.preventDefault();let $={...A},U=["x","y","z"];for(let j=0;j<3;j++){let O=L*y[j].x+E*y[j].y;if(Math.abs(O)>.3){let me=A[U[j]]+d*Math.sign(O);$[U[j]]=Math.max(0,Math.min(M[U[j]],me))}}a($,s()),r()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Ke),e.addEventListener("touchstart",Ue,{passive:!1}),e.addEventListener("touchmove",Xe,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",je),e.setAttribute("tabindex","0");function mo(){J(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Ke),e.removeEventListener("touchstart",Ue),e.removeEventListener("touchmove",Xe),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",je)}return{state:b,destroy:mo}}var bo=`.box-picker {\r
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
`;var xo=Eo,fo=!1;function Ho(){if(fo||typeof document>"u")return;fo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=bo,document.head.appendChild(e)}function Eo(e,o={}){let n=o.size??300,t=o.controls??!0,a=o.showInputs??!1,s=o.showModeToggle??!1,u=o.showCorners??!1,i={mode:()=>r,switchMode:c=>oe(c),onHexInput:c=>{let g=pe(c);g?(m=xe(F?{r:255-g.r,g:255-g.g,b:255-g.b}:g,r),f={x:Math.max(f.x,m.x),y:Math.max(f.y,m.y),z:Math.max(f.z,m.z)},Y(),N(),B()):N()},onChannelInput:(c,g,x)=>{let V=Math.max(0,Math.min(x,g)),S=["x","y","z"],z=V/x;if(F){let he={...m,[S[c]]:z},se=re(he,r);m=xe({r:255-se.r,g:255-se.g,b:255-se.b},r)}else m={...m,[S[c]]:z};z>f[S[c]]&&(f={...f,[S[c]]:z}),Y(),N(),B()},getRgbForCopy:()=>re(m,r),onRandom:c=>de(c),onReset:()=>de({r:0,g:0,b:0})},r=o.mode??"rgb",h=o.initialColor?xe(o.initialColor,r):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},m={...h},C=0,k=()=>o.alpha!==void 0,P=Math.max(0,Math.min(1,o.alpha??1));function b(c){let g=Math.max(0,Math.min(1,c));g!==P&&(P=g,Y(),N(),B())}function R(c){let g=Q(),x=q(g);x.s=Math.max(0,Math.min(100,c*100));let V=fe(x);de(F?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let v=new Set;Ho();let T=document.createElement("div");T.className="box-picker";let I=document.createElement("canvas");I.style.cursor="grab",T.appendChild(I);let p=io(I,n),w=null,_=document.createElement("div");_.className="box-picker-controls",w=document.createElement("div"),w.className="box-picker-swatch",_.appendChild(w),T.appendChild(_),(a||s||u)&&import("./controls-VBFXR3DH.js").then(c=>{c.createControls(_,i,{showInputs:a,showModeToggle:s,showCorners:u})}).catch(()=>{}),e.appendChild(T);let D=ho(I,()=>f,c=>{f=c},()=>m,(c,g)=>{m=c,C=g,Y(),N()},()=>C,()=>p.scale,()=>p.center,B,k,b,()=>P,()=>H(m,p.scale,p.center),R,()=>q(Q()).s/100),F=!1,W=!0;I.addEventListener("mouseenter",()=>{W=!0,B()}),I.addEventListener("mouseleave",()=>{W=!1,B()}),I.addEventListener("dblclick",()=>{F=!F,no(F),Y(),N(),B()});function oe(c){if(c===r)return;let g=re(m,r),x={...m},V={...f};r=c;let S=xe(g,r),z={x:1,y:1,z:1};m=S,f=z,ve(x,S,V,z,300),N()}let G=null;function ve(c,g,x,V,S){G!==null&&cancelAnimationFrame(G);let z=performance.now();function he(se){let ze=se-z,be=Math.min(1,ze/S),ne=1-Math.pow(1-be,3);m={x:c.x+(g.x-c.x)*ne,y:c.y+(g.y-c.y)*ne,z:c.z+(g.z-c.z)*ne},f={x:x.x+(V.x-x.x)*ne,y:x.y+(V.y-x.y)*ne,z:x.z+(V.z-x.z)*ne},J(),Y(),be<1?G=requestAnimationFrame(he):G=null}G=requestAnimationFrame(he)}let X=!1;function B(){X||(X=!0,requestAnimationFrame(()=>{X=!1,J()}))}function J(){so(p,f,m,C,r,D.state,W,{active:D.state.alphaMode,alpha:P,rgb:Q()})}function Me(c,g,x){return Math.round(c+(g-c)*x)}function te(c,g){let x=g>0?255:0,V=Math.abs(g);return le({r:Me(c.r,x,V),g:Me(c.g,x,V),b:Me(c.b,x,V)})}function Pe(c,g){let x=pe(g)||{r:128,g:128,b:128},V=te(x,.35),S=te(x,0),z=te(x,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${S}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${z}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function ue(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function Ce(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function Q(){let c=re(m,r);return F?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function N(){if(!t)return;let c=Q(),g=le(c);w&&Pe(w,g);let x=T.querySelector(".box-picker-hex");x&&(x.value=g),K(),T._updateModeButtons&&T._updateModeButtons()}function K(){if(!t)return;let c=Re[r],g=F?xe(Q(),r):m,x=qe(g,r),V=T.querySelectorAll(".box-picker-channel input"),S=T.querySelectorAll(".box-picker-channel label");for(let z=0;z<V.length;z++)S[z].textContent=c[z],S[z].style.color="",S[z].style.textShadow="none",V[z].value=String(x[z])}function Y(){let c=Q(),g={rgb:c,hsb:q(c),oklch:ge(c),hex:le(c),alpha:P};for(let x of v)x(g)}function Te(){let c=re(m,r);return{rgb:c,hsb:q(c),oklch:ge(c),hex:le(c)}}N(),J();let de=c=>{m=xe(c,r),f={x:Math.max(f.x,m.x),y:Math.max(f.y,m.y),z:Math.max(f.z,m.z)};let g=H(m,p.scale,p.center);C=-1;for(let x=Z.length-1;x>=0;x--)if(ye(x,g,f,p.scale,p.center)){C=x;break}Y(),N(),B()};return{getColor:Te,getMode:()=>r,setColor:de,setAlpha:b,getAlpha:()=>P,setMode(c){oe(c)},on(c,g){v.add(g)},off(c,g){v.delete(g)},destroy(){D.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(T)}}}function Oe(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:pe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let a=pe(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:a,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Be(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Be(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?fe({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:fe({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Ae({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Be(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:fe({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Se(e,o,n=1){if(o==="hex")return le(e);if(o==="hex-alpha")return le(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let a=$e(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%`}if(o==="hsla"){let a=$e(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let a=q(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%`}if(o==="hsva"){let a=q(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let a=$e(e);return`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let a=q(e);return`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+n.toFixed(3)})`}let t=ge(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Be(e,o,n){let t=o/100,a=n/100,s=(1-Math.abs(2*a-1))*t,u=s*(1-Math.abs(e/60%2-1)),i=a-s/2,r=0,h=0,f=0;return e<60?(r=s,h=u):e<120?(r=u,h=s):e<180?(h=s,f=u):e<240?(h=u,f=s):e<300?(r=u,f=s):(r=s,f=u),{r:Math.round((r+i)*255),g:Math.round((h+i)*255),b:Math.round((f+i)*255)}}function $e(e){let o=e.r/255,n=e.g/255,t=e.b/255,a=Math.max(o,n,t),s=Math.min(o,n,t),u=(a+s)/2;if(a===s)return{h:0,s:0,l:u*100};let i=a-s,r=u>.5?i/(2-a-s):i/(a+s),h=0;return a===o?h=((n-t)/i+(n<t?6:0))*60:a===n?h=((t-o)/i+2)*60:h=((o-n)/i+4)*60,{h,s:r*100,l:u*100}}var Le=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),a=t?Oe(t,this.model):null;this.alpha=a?.alpha??1;let s=a?.rgb??{r:255,g:255,b:255},u=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=xo(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...u.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",Se(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Se(i.rgb,this.model,i.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let a=Oe(t,this.model);a&&(this.alpha=a.alpha,this.picker.setColor(a.rgb),this.picker.setAlpha(a.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Se({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},_e=class extends Le{constructor(){super("hex")}},Io=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Io)customElements.get(e)||customElements.define(e,class extends Le{constructor(){super(o)}});var nt=_e;export{_e as ColorIsBoxElement,Eo as createBoxColorPicker,xo as createColorPicker,nt as default,no as setBoxInvert};
