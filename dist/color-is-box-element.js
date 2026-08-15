var Ve={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ze={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Y(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),d=r-s,a=0;d!==0&&(r===o?a=((n-t)/d+6)%6:r===n?a=(t-o)/d+2:a=(o-n)/d+4,a*=60);let i=r===0?0:d/r*100,h=r*100;return{h:a,s:i,b:h}}function ie(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,s=r*(1-Math.abs(o/60%2-1)),d=t-r,a,i,h;return o<60?(a=r,i=s,h=0):o<120?(a=s,i=r,h=0):o<180?(a=0,i=r,h=s):o<240?(a=0,i=s,h=r):o<300?(a=s,i=0,h=r):(a=r,i=0,h=s),{r:Math.round((a+d)*255),g:Math.round((i+d)*255),b:Math.round((h+d)*255)}}function Ie(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function He(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function go(e){let o=Ie(e.r/255),n=Ie(e.g/255),t=Ie(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,d=.0883024619*o+.2817188376*n+.6299787005*t,a=Math.cbrt(r),i=Math.cbrt(s),h=Math.cbrt(d);return{L:.2104542553*a+.793617785*i-.0040720468*h,a:1.9779984951*a-2.428592205*i+.4505937099*h,b:.0259040371*a+.7827717662*i-.808675766*h}}function mo(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,d=t*t*t,a=r*r*r,i=s*s*s,h=4.0767416621*d-3.3077115913*a+.2309699292*i,f=-1.2684380046*d+2.6097574011*a-.3413193965*i,g=-.0041960863*d-.7034186147*a+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,He(h)))*255),g:Math.round(Math.max(0,Math.min(1,He(f)))*255),b:Math.round(Math.max(0,Math.min(1,He(g)))*255)}}function ge(e){let o=go(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Ce(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return mo(e.l,n,t)}function xo(e,o,n){let t=Ce({l:e,c:o,h:n});if(Je(t))return{l:e,c:o,h:n};let r=0,s=o;for(let d=0;d<20;d++){let a=(r+s)/2;t=Ce({l:e,c:a,h:n}),Je(t)?r=a:s=a}return{l:e,c:r,h:n}}function Je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function me(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Qe=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ie({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Qe,r=e.z*359,s=xo(n,t,r);return Ce(s)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Y(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ge(e);return{x:n.l,y:Math.min(n.c/Qe,1),z:n.h/359}}}function qe(e,o){let n=Ze[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function eo(e,o,n,t,r,s=!1){let d;e===0?d={x:t,y:o,z:n}:e===1?d={x:o,y:t,z:n}:d={x:o,y:n,z:t};let a=re(d,r);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var oo=Math.PI/6,po=Math.cos(oo),yo=Math.sin(oo),we=!1;function to(e){we=e}var ke=0,Ae=0;function Ee(e,o){ke=e,Ae=o}function De(){return{yaw:ke,pitch:Ae}}function P(e,o,n){let t=e;if(ke!==0||Ae!==0){let r={x:e.x-.5,y:e.y-.5,z:e.z-.5},s=Math.cos(ke),d=Math.sin(ke),a=Math.cos(Ae),i=Math.sin(Ae),h=r.x*s+r.z*d,f=r.y,g=-r.x*d+r.z*s,C=f*a-g*i,k=f*i+g*a;t={x:h+.5,y:C+.5,z:k+.5}}return{x:n.x+(t.y-t.x)*po*o,y:n.y+t.z*o-(t.x+t.y)*yo*o}}function vo(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Mo=64,no={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ro(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function ao(e,o,n,t,r,s,d=!0,a=null,i=null){let{ctx:h,scale:f,center:g,width:C,height:k}=e;h.save(),h.clearRect(0,0,C,k);let E=vo(o).map(b=>P(b,f,g));if(ko(h,f,g,r),h.save(),h.shadowColor="rgba(0,0,0,0.35)",h.shadowBlur=8,h.shadowOffsetX=0,h.shadowOffsetY=2,Ao(h,E,o,r),h.restore(),d&&To(h,r,f,g),t>=0){let b=re(n,r),S=we?{r:255-b.r,g:255-b.g,b:255-b.b}:b,v=P(n,f,g);a&&a.active&&Ro(h,v,a.rgb,a.alpha),Vo(h,v,S)}h.restore()}var Co={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function ko(e,o,n,t){let r=P({x:0,y:0,z:0},o,n),s=[P({x:1,y:0,z:0},o,n),P({x:0,y:1,z:0},o,n),P({x:0,y:0,z:1},o,n)],d=Co[t];e.lineWidth=1.5;for(let a=0;a<s.length;a++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(s[a].x,s[a].y),e.strokeStyle=d[a],e.stroke()}function Ao(e,o,n,t){let r=[n.x,n.y,n.z];for(let s=0;s<Q.length;s++){let d=Q[s],a=r[d.fixedAxis],i=r[d.uAxis],h=r[d.vAxis];if(i<.002&&h<.002)continue;let f=d.quad.map(g=>o[g]);wo(e,f,d.fixedAxis,a,i,h,t)}}function wo(e,o,n,t,r,s,d){let a=Mo,i=document.createElement("canvas");i.width=a,i.height=a;let h=i.getContext("2d"),f=h.createImageData(a,a),g=f.data;for(let Z=0;Z<a;Z++)for(let oe=0;oe<a;oe++){let G=oe/(a-1)*r,pe=Z/(a-1)*s,K=eo(n,G,pe,t,d,we),B=(Z*a+oe)*4;g[B]=K.r,g[B+1]=K.g,g[B+2]=K.b,g[B+3]=255}h.putImageData(f,0,0);let C=o[0],k=o[1],E=o[2],b=o[3],S=k.x-C.x,v=k.y-C.y,R=b.x-C.x,H=b.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(k.x,k.y),e.lineTo(E.x,E.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let p=2/a,w=C.x-S*p-R*p,$=C.y-v*p-H*p,D=1+2*p,F=1+2*p;e.transform(S*D/a,v*D/a,R*F/a,H*F/a,w,$),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function To(e,o,n,t){let r=Ve[o],s=we?[P({x:0,y:1,z:1},n,t),P({x:1,y:0,z:1},n,t),P({x:1,y:1,z:0},n,t)]:[P({x:1,y:0,z:0},n,t),P({x:0,y:1,z:0},n,t),P({x:0,y:0,z:1},n,t)],d=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let i=s[a].x+d[a].x,h=s[a].y+d[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[a],i,h)}e.globalAlpha=1,e.restore()}var ee=30,le=13;function Ro(e,o,n,t){let r=(ee+le)/2,s=5,d=Math.floor(o.x/s)*s,a=Math.floor(o.y/s)*s,i=ee*2+s*2,h=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let S=-1;S*s<=i;S++)for(let v=-1;v*s<=i;v++)e.fillStyle=(S+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(d+S*s,a+v*s,s,s);let f="rgba("+n.r+","+n.g+","+n.b+",0)",g="rgba("+n.r+","+n.g+","+n.b+",1)",C=e;if(typeof C.createConicGradient=="function"){let S=C.createConicGradient(-Math.PI/2,o.x,o.y);S.addColorStop(0,f),S.addColorStop(1,g),e.fillStyle=S,e.fillRect(d-ee,a-ee,i,i)}else for(let v=0;v<36;v++){let R=-Math.PI/2+v/36*Math.PI*2,H=-Math.PI/2+(v+1)/36*Math.PI*2,p=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(R)*le,o.y+Math.sin(R)*le),e.arc(o.x,o.y,ee,R,H),e.arc(o.x,o.y,le,H,R,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+p.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=h*Math.PI*2,E=o.x+r*Math.sin(k),b=o.y-r*Math.cos(k);e.beginPath(),e.arc(E,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Vo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function io(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return P(r[e],n,t)}function Fe(){let e={x:0,y:0};return[P({x:1,y:0,z:0},1,e),P({x:0,y:1,z:0},1,e),P({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function xe(e,o,n,t,r){let s=Q[e],d=[n.x,n.y,n.z],a=d[s.uAxis],i=d[s.vAxis];if(a<.002||i<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[s.fixedAxis]]=d[s.fixedAxis];let g={...h};g[f[s.uAxis]]=a;let C={...h};C[f[s.vAxis]]=i;let k=P(h,t,r),E=P(g,t,r),b=P(C,t,r),S=E.x-k.x,v=E.y-k.y,R=b.x-k.x,H=b.y-k.y,p=S*H-v*R;if(Math.abs(p)<1e-6)return null;let w=o.x-k.x,$=o.y-k.y,D=(w*H-$*R)/p,F=($*S-w*v)/p;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function so(e,o,n,t,r){let s=Q[e],d=[n.x,n.y,n.z],a=d[s.uAxis],i=d[s.vAxis];if(a<.002||i<.002)return null;let h={x:0,y:0,z:0},f=["x","y","z"];h[f[s.fixedAxis]]=d[s.fixedAxis];let g={...h};g[f[s.uAxis]]=a;let C={...h};C[f[s.vAxis]]=i;let k=P(h,t,r),E=P(g,t,r),b=P(C,t,r),S=E.x-k.x,v=E.y-k.y,R=b.x-k.x,H=b.y-k.y,p=S*H-v*R;if(Math.abs(p)<1e-6)return null;let w=o.x-k.x,$=o.y-k.y,D=(w*H-$*R)/p,F=($*S-w*v)/p;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var lo=22;function co(e,o,n,t,r,s,d,a,i,h,f,g,C,k,E){let b={...no};function S(l){let u=e.getBoundingClientRect();return{x:l.clientX-u.left,y:l.clientY-u.top}}let v=!1,R=!1,H=!1,p=!1,w=null,$=600,D=null;function F(){Z(),D=setTimeout(oe,$)}function Z(){D!==null&&(clearTimeout(D),D=null)}function oe(){D=null,he(),x(),p=!0,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.3),w=null,i()}let G=9,pe=1e3,K=null;function B(){q(),K=setTimeout(ye,pe)}function q(){K!==null&&(clearTimeout(K),K=null),Z()}function ye(){K=null,b.alphaMode=!0,x(),he(),i()}function te(l){let u=C();return Math.hypot(l.x-u.x,l.y-u.y)}function Le(l){let u=C();return(Math.atan2(l.x-u.x,-(l.y-u.y))+Math.PI*2)%(Math.PI*2)}function ce(l){f(Le(l)/(Math.PI*2)),i()}function ve(l){let u=te(l);return u>=le-4&&u<=ee+6}function j(l){let u=o(),A=d(),M=a();for(let y=0;y<3;y++){let L=io(y,u,A,M),I=l.x-L.x,O=l.y-L.y;if(I*I+O*O<=lo*lo)return y}return-1}function X(l){let u=o(),A=d(),M=a();for(let y=Q.length-1;y>=0;y--){let L=xe(y,l,u,A,M);if(L)return{faceIndex:y,...L}}return null}let U=-1,J={x:0,y:0},Te=0;function de(l,u){U=l,J=u,Te=o()[["x","y","z"][l]],b.draggingAxisHandle=l,e.style.cursor="grabbing",i()}function c(l){if(q(),U<0)return;let u=l.x-J.x,A=l.y-J.y,y=Fe()[U],L=d(),O=(u*y.x+A*y.y)/L,N=Math.max(0,Math.min(1,Te+O)),W=o(),_=["x","y","z"],fe={...W,[_[U]]:N};n(fe);let Me=t(),je=s(),Ye=je>=0?Q[je]:null,Pe={...Me};Ye&&U===Ye.fixedAxis?Pe[_[U]]=N:Pe[_[U]]=Math.min(Me[_[U]],N),r(Pe,s()),i()}function x(){U=-1,b.draggingAxisHandle=-1}let m=-1,T=null,z=null,V=!1;function ue(l,u,A,M){m=l,b.draggingFace=l,T=null,z=null,V=!1,M&&(V=!0,z={s:u,t:A}),Re(l,u,A),e.style.cursor="crosshair",i()}function ae(l,u,A){if(q(),m<0)return;let M=o(),y=d(),L=a(),I=xe(m,l,M,y,L),O=m;if(!I&&!A){for(let _=Q.length-1;_>=0;_--)if(_!==m&&(I=xe(_,l,M,y,L),I)){O=_;break}}if(!I&&A&&(I=so(m,l,M,y,L),O=m),!I){i();return}O!==m&&(m=O,b.draggingFace=O,T=null,V=!1,z=null);let{s:N,t:W}=I;if(u&&z){if(V){let _=Math.abs(N-z.s),fe=Math.abs(W-z.t),Me=.02;(_>Me||fe>Me)&&(T=_>=fe?"u":"v",V=!1)}T==="u"?W=z.t:T==="v"&&(N=z.s)}else u||(T=null,V=!1,z=null);Re(O,N,W),i()}function Re(l,u,A){let M=Q[l],y=o(),L=["x","y","z"],I={...t()};I[L[M.uAxis]]=u*y[L[M.uAxis]],I[L[M.vAxis]]=A*y[L[M.vAxis]],I[L[M.fixedAxis]]=y[L[M.fixedAxis]],r(I,l)}function he(){m=-1,b.draggingFace=-1,T=null,V=!1,z=null}function ne(l){R=!0;let u=S(l);if(h()){if(b.alphaMode){if(te(u)<=G){b.alphaMode=!1,i();return}if(ve(u)){l.preventDefault(),v=!0,ce(u);return}b.alphaMode=!1,i();return}te(u)<=G&&B()}let A=j(u);if(A>=0){l.preventDefault(),de(A,u);return}let M=X(u);if(M){l.preventDefault(),ue(M.faceIndex,M.s,M.t,l.shiftKey),F();return}let y=a();Math.hypot(u.x-y.x,u.y-y.y)>d()+20&&(l.preventDefault(),p=!0,w=u,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),i())}function Ge(l){let u=S(l);if(v){l.preventDefault(),ce(u);return}if(p){if(l.preventDefault(),!w){w=u;return}let I=u.x-w.x,O=u.y-w.y,N=De();Ee(Math.max(-60,Math.min(60,N.yaw+I*.12)),Math.max(-60,Math.min(60,N.pitch+O*.12))),I!==0&&k(Math.max(0,Math.min(1,E()+I*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),w=u,i();return}if(R&&b.alphaMode&&ve(u)){l.preventDefault(),v=!0,ce(u);return}if(U>=0){l.preventDefault(),c(u);return}if(m>=0){l.preventDefault(),ae(u,l.shiftKey,l.altKey);return}let A=j(u),M=X(u),y=A,L=A>=0?-1:M?M.faceIndex:-1;(y!==b.hoveredAxisHandle||L!==b.hoveredFace)&&(b.hoveredAxisHandle=y,b.hoveredFace=L,e.style.cursor=y>=0?"grab":L>=0?"crosshair":"default",i())}function Ue(l){q(),R=!1,v=!1,p&&(p=!1,b.viewRotating=!1,b.ringAlpha=0,w=null,i());let u=U>=0||m>=0;x(),he(),u&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",i())}function Ne(l){if(l.touches.length!==1)return;H=!0;let u=S(l.touches[0]);if(h()){if(b.alphaMode){if(te(u)<=G){b.alphaMode=!1,i();return}if(ve(u)){l.preventDefault(),v=!0,ce(u);return}b.alphaMode=!1,i();return}te(u)<=G&&B()}let A=j(u);if(A>=0){l.preventDefault(),de(A,u);return}let M=X(u);if(M){l.preventDefault(),ue(M.faceIndex,M.s,M.t,!1),F();return}let y=a();Math.hypot(u.x-y.x,u.y-y.y)>d()+20&&(l.preventDefault(),p=!0,w=u,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),i())}function Ke(l){if(l.touches.length!==1)return;let u=S(l.touches[0]);if(v)l.preventDefault(),ce(u);else if(H&&b.alphaMode&&ve(u))l.preventDefault(),v=!0,ce(u);else if(U>=0)l.preventDefault(),c(u);else if(p){if(l.preventDefault(),!w){w=u;return}let A=u.x-w.x,M=u.y-w.y,y=De();Ee(Math.max(-60,Math.min(60,y.yaw+A*.12)),Math.max(-60,Math.min(60,y.pitch+M*.12))),A!==0&&k(Math.max(0,Math.min(1,E()+A*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),w=u,i()}else m>=0&&(l.preventDefault(),ae(u,!1,!1))}function Xe(l){q(),H=!1,v=!1,p&&(p=!1,b.viewRotating=!1,b.ringAlpha=0,w=null,i()),x(),he(),i()}function We(l){if(b.alphaMode){if(l.key==="Escape"){b.alphaMode=!1,i();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),f(Math.min(1,g()+(l.shiftKey?.08:.02))),i();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),f(Math.max(0,g()-(l.shiftKey?.08:.02))),i();return}}let u=l.shiftKey?.04:.004,A=t(),M=o(),y=Fe(),L=0,I=0;switch(l.key){case"ArrowRight":L=1;break;case"ArrowLeft":L=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}l.preventDefault();let O={...A},N=["x","y","z"];for(let W=0;W<3;W++){let _=L*y[W].x+I*y[W].y;if(Math.abs(_)>.3){let fe=A[N[W]]+u*Math.sign(_);O[N[W]]=Math.max(0,Math.min(M[N[W]],fe))}}r(O,s()),i()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Ue),e.addEventListener("touchstart",Ne,{passive:!1}),e.addEventListener("touchmove",Ke,{passive:!1}),e.addEventListener("touchend",Xe),e.addEventListener("keydown",We),e.setAttribute("tabindex","0");function fo(){q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Ue),e.removeEventListener("touchstart",Ne),e.removeEventListener("touchmove",Ke),e.removeEventListener("touchend",Xe),e.removeEventListener("keydown",We)}return{state:b,destroy:fo}}var uo=`.box-picker {\r
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
`;var bo=Lo,ho=!1;function zo(){if(ho||typeof document>"u")return;ho=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=uo,document.head.appendChild(e)}function Lo(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,s=o.showModeToggle??!1,d=o.showCorners??!1,a={mode:()=>i,switchMode:c=>oe(c),onHexInput:c=>{let x=me(c);x?(g=be(F?{r:255-x.r,g:255-x.g,b:255-x.b}:x,i),f={x:Math.max(f.x,g.x),y:Math.max(f.y,g.y),z:Math.max(f.z,g.z)},J(),X(),B()):X()},onChannelInput:(c,x,m)=>{let T=Math.max(0,Math.min(m,x)),z=["x","y","z"],V=T/m;if(F){let ue={...g,[z[c]]:V},ae=re(ue,i);g=be({r:255-ae.r,g:255-ae.g,b:255-ae.b},i)}else g={...g,[z[c]]:V};V>f[z[c]]&&(f={...f,[z[c]]:V}),J(),X(),B()},getRgbForCopy:()=>re(g,i),onRandom:c=>de(c),onReset:()=>de({r:0,g:0,b:0})},i=o.mode??"rgb",h=o.initialColor?be(o.initialColor,i):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},g={...h},C=0,k=()=>o.alpha!==void 0,E=Math.max(0,Math.min(1,o.alpha??1));function b(c){let x=Math.max(0,Math.min(1,c));x!==E&&(E=x,J(),X(),B())}function S(c){let x=j(),m=Y(x);m.s=Math.max(0,Math.min(100,c*100));let T=ie(m);de(F?{r:255-T.r,g:255-T.g,b:255-T.b}:T)}let v=new Set;zo();let R=document.createElement("div");R.className="box-picker";let H=document.createElement("canvas");H.style.cursor="grab",R.appendChild(H);let p=ro(H,n),w=null,$=document.createElement("div");$.className="box-picker-controls",w=document.createElement("div"),w.className="box-picker-swatch",$.appendChild(w),R.appendChild($),(r||s||d)&&import("./controls-VBFXR3DH.js").then(c=>{c.createControls($,a,{showInputs:r,showModeToggle:s,showCorners:d})}).catch(()=>{}),e.appendChild(R);let D=co(H,()=>f,c=>{f=c},()=>g,(c,x)=>{g=c,C=x,J(),X()},()=>C,()=>p.scale,()=>p.center,B,k,b,()=>E,()=>P(g,p.scale,p.center),S,()=>Y(j()).s/100),F=!1,Z=!0;H.addEventListener("mouseenter",()=>{Z=!0,B()}),H.addEventListener("mouseleave",()=>{Z=!1,B()}),H.addEventListener("dblclick",()=>{F=!F,to(F),J(),X(),B()});function oe(c){if(c===i)return;let x=re(g,i),m={...g},T={...f};i=c;let z=be(x,i),V={x:1,y:1,z:1};g=z,f=V,pe(m,z,T,V,300),X()}let G=null;function pe(c,x,m,T,z){G!==null&&cancelAnimationFrame(G);let V=performance.now();function ue(ae){let Re=ae-V,he=Math.min(1,Re/z),ne=1-Math.pow(1-he,3);g={x:c.x+(x.x-c.x)*ne,y:c.y+(x.y-c.y)*ne,z:c.z+(x.z-c.z)*ne},f={x:m.x+(T.x-m.x)*ne,y:m.y+(T.y-m.y)*ne,z:m.z+(T.z-m.z)*ne},q(),J(),he<1?G=requestAnimationFrame(ue):G=null}G=requestAnimationFrame(ue)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,q()}))}function q(){ao(p,f,g,C,i,D.state,Z,{active:D.state.alphaMode,alpha:E,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:Y(j()).s/100,rgb:ie({h:Y(j()).h,s:100,b:100})})}function ye(c,x,m){return Math.round(c+(x-c)*m)}function te(c,x){let m=x>0?255:0,T=Math.abs(x);return se({r:ye(c.r,m,T),g:ye(c.g,m,T),b:ye(c.b,m,T)})}function Le(c,x){let m=me(x)||{r:128,g:128,b:128},T=te(m,.35),z=te(m,0),V=te(m,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${T}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${z}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${V}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function ce(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function ve(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function j(){let c=re(g,i);return F?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function X(){if(!t)return;let c=j(),x=se(c);w&&Le(w,x);let m=R.querySelector(".box-picker-hex");m&&(m.value=x),U(),R._updateModeButtons&&R._updateModeButtons()}function U(){if(!t)return;let c=Ve[i],x=F?be(j(),i):g,m=qe(x,i),T=R.querySelectorAll(".box-picker-channel input"),z=R.querySelectorAll(".box-picker-channel label");for(let V=0;V<T.length;V++)z[V].textContent=c[V],z[V].style.color="",z[V].style.textShadow="none",T[V].value=String(m[V])}function J(){let c=j(),x={rgb:c,hsb:Y(c),oklch:ge(c),hex:se(c),alpha:E};for(let m of v)m(x)}function Te(){let c=re(g,i);return{rgb:c,hsb:Y(c),oklch:ge(c),hex:se(c)}}X(),q();let de=c=>{g=be(c,i),f={x:Math.max(f.x,g.x),y:Math.max(f.y,g.y),z:Math.max(f.z,g.z)};let x=P(g,p.scale,p.center);C=-1;for(let m=Q.length-1;m>=0;m--)if(xe(m,x,f,p.scale,p.center)){C=m;break}J(),X(),B()};return{getColor:Te,getMode:()=>i,setColor:de,setAlpha:b,getAlpha:()=>E,setMode(c){oe(c)},on(c,x){v.add(x)},off(c,x){v.delete(x)},destroy(){D.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(R)}}}function _e(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:me(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=me(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Be(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Be(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ie({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Ce({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Be(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Se(e,o,n=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Oe(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Oe(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=Y(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=Y(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Oe(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=Y(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=ge(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Be(e,o,n){let t=o/100,r=n/100,s=(1-Math.abs(2*r-1))*t,d=s*(1-Math.abs(e/60%2-1)),a=r-s/2,i=0,h=0,f=0;return e<60?(i=s,h=d):e<120?(i=d,h=s):e<180?(h=s,f=d):e<240?(h=d,f=s):e<300?(i=d,f=s):(i=s,f=d),{r:Math.round((i+a)*255),g:Math.round((h+a)*255),b:Math.round((f+a)*255)}}function Oe(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),d=(r+s)/2;if(r===s)return{h:0,s:0,l:d*100};let a=r-s,i=d>.5?a/(2-r-s):a/(r+s),h=0;return r===o?h=((n-t)/a+(n<t?6:0))*60:r===n?h=((t-o)/a+2)*60:h=((o-n)/a+4)*60,{h,s:i*100,l:d*100}}var ze=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?_e(t,this.model):null;this.alpha=r?.alpha??1;let s=r?.rgb??{r:255,g:255,b:255},d=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=bo(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...d.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",a=>{this.internal||(this.internal=!0,this.alpha=a.alpha,this.setAttribute("value",Se(a.rgb,this.model,a.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:a})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Se(a.rgb,this.model,a.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=_e(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Se({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},$e=class extends ze{constructor(){super("hex")}},Po=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Po)customElements.get(e)||customElements.define(e,class extends ze{constructor(){super(o)}});var et=$e;export{$e as ColorIsBoxElement,Lo as createBoxColorPicker,bo as createColorPicker,et as default,to as setBoxInvert};
