var Ve={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ze={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Y(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),d=r-s,a=0;d!==0&&(r===o?a=((n-t)/d+6)%6:r===n?a=(t-o)/d+2:a=(o-n)/d+4,a*=60);let i=r===0?0:d/r*100,c=r*100;return{h:a,s:i,b:c}}function ie(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,s=r*(1-Math.abs(o/60%2-1)),d=t-r,a,i,c;return o<60?(a=r,i=s,c=0):o<120?(a=s,i=r,c=0):o<180?(a=0,i=r,c=s):o<240?(a=0,i=s,c=r):o<300?(a=s,i=0,c=r):(a=r,i=0,c=s),{r:Math.round((a+d)*255),g:Math.round((i+d)*255),b:Math.round((c+d)*255)}}function Ie(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function He(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function go(e){let o=Ie(e.r/255),n=Ie(e.g/255),t=Ie(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,d=.0883024619*o+.2817188376*n+.6299787005*t,a=Math.cbrt(r),i=Math.cbrt(s),c=Math.cbrt(d);return{L:.2104542553*a+.793617785*i-.0040720468*c,a:1.9779984951*a-2.428592205*i+.4505937099*c,b:.0259040371*a+.7827717662*i-.808675766*c}}function mo(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,d=t*t*t,a=r*r*r,i=s*s*s,c=4.0767416621*d-3.3077115913*a+.2309699292*i,f=-1.2684380046*d+2.6097574011*a-.3413193965*i,g=-.0041960863*d-.7034186147*a+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,He(c)))*255),g:Math.round(Math.max(0,Math.min(1,He(f)))*255),b:Math.round(Math.max(0,Math.min(1,He(g)))*255)}}function xe(e){let o=go(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Ae(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return mo(e.l,n,t)}function xo(e,o,n){let t=Ae({l:e,c:o,h:n});if(Je(t))return{l:e,c:o,h:n};let r=0,s=o;for(let d=0;d<20;d++){let a=(r+s)/2;t=Ae({l:e,c:a,h:n}),Je(t)?r=a:s=a}return{l:e,c:r,h:n}}function Je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Qe=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ie({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Qe,r=e.z*359,s=xo(n,t,r);return Ae(s)}}function ge(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Y(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=xe(e);return{x:n.l,y:Math.min(n.c/Qe,1),z:n.h/359}}}function qe(e,o){let n=Ze[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function eo(e,o,n,t,r,s=!1){let d;e===0?d={x:t,y:o,z:n}:e===1?d={x:o,y:t,z:n}:d={x:o,y:n,z:t};let a=re(d,r);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var oo=Math.PI/6,po=Math.cos(oo),yo=Math.sin(oo),we=!1;function to(e){we=e}var ce=0,ue=0;function Ee(e,o){ce=e,ue=o}function De(){return{yaw:ce,pitch:ue}}function vo(e){if(ce===0&&ue===0)return e;let o=Math.cos(ce),n=Math.sin(ce),t=Math.cos(ue),r=Math.sin(ue),s=e.x*o+e.z*n,d=e.y,a=-e.x*n+e.z*o,i=d*t-a*r,c=d*r+a*t;return{x:s,y:i,z:c}}function Mo(e){if(ce===0&&ue===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(ce),t=Math.sin(ce),r=Math.cos(ue),s=Math.sin(ue),d=o.x*n+o.z*t,a=o.y,i=-o.x*t+o.z*n,c=a*r-i*s,f=a*s+i*r;return{x:d+.5,y:c+.5,z:f+.5}}function I(e,o,n){let t=Mo(e);return{x:n.x+(t.y-t.x)*po*o,y:n.y+t.z*o-(t.x+t.y)*yo*o}}function Co(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],ko=64,no={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ro(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function ao(e,o,n,t,r,s,d=!0,a=null,i=null){let{ctx:c,scale:f,center:g,width:A,height:k}=e;c.save(),c.clearRect(0,0,A,k);let P=Co(o),b=P.map(p=>I(p,f,g));if(c.save(),c.globalAlpha=s.viewRotating?.32:1,wo(c,f,g,r),c.restore(),c.save(),c.shadowColor="rgba(0,0,0,0.35)",c.shadowBlur=8,c.shadowOffsetX=0,c.shadowOffsetY=2,To(c,b,P,o,r,s.viewRotating),c.restore(),d&&(c.save(),c.globalAlpha=s.viewRotating?.5:1,Vo(c,r,f,g),c.restore()),t>=0){let p=re(n,r),C=we?{r:255-p.r,g:255-p.g,b:255-p.b}:p,w=I(n,f,g);a&&a.active&&zo(c,w,a.rgb,a.alpha),So(c,w,C)}c.restore()}var Ao={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function wo(e,o,n,t){let r=I({x:0,y:0,z:0},o,n),s=[I({x:1,y:0,z:0},o,n),I({x:0,y:1,z:0},o,n),I({x:0,y:0,z:1},o,n)],d=Ao[t];e.lineWidth=1.5;for(let a=0;a<s.length;a++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(s[a].x,s[a].y),e.strokeStyle=d[a],e.stroke()}function To(e,o,n,t,r,s){let d=[t.x,t.y,t.z],a=s?.7:1;for(let i=0;i<Q.length;i++){let c=Q[i],f=d[c.fixedAxis],g=d[c.uAxis],A=d[c.vAxis];if(g<.002&&A<.002)continue;let k=vo(c.normal),P=k.x+k.y+k.z>0,b=c.quad.map(p=>o[p]);if(P)e.save(),e.globalAlpha=a,Ro(e,b,c.fixedAxis,f,g,A,r),e.restore();else{e.save(),e.globalAlpha=s?.14:0,e.beginPath(),e.moveTo(b[0].x,b[0].y);for(let p=1;p<4;p++)e.lineTo(b[p].x,b[p].y);e.closePath(),e.fillStyle="#ffffff",e.fill(),e.restore()}}}function Ro(e,o,n,t,r,s,d){let a=ko,i=document.createElement("canvas");i.width=a,i.height=a;let c=i.getContext("2d"),f=c.createImageData(a,a),g=f.data;for(let Z=0;Z<a;Z++)for(let oe=0;oe<a;oe++){let G=oe/(a-1)*r,ve=Z/(a-1)*s,K=eo(n,G,ve,t,d,we),B=(Z*a+oe)*4;g[B]=K.r,g[B+1]=K.g,g[B+2]=K.b,g[B+3]=255}c.putImageData(f,0,0);let A=o[0],k=o[1],P=o[2],b=o[3],p=k.x-A.x,C=k.y-A.y,w=b.x-A.x,E=b.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(k.x,k.y),e.lineTo(P.x,P.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let y=2/a,R=A.x-p*y-w*y,$=A.y-C*y-E*y,D=1+2*y,F=1+2*y;e.transform(p*D/a,C*D/a,w*F/a,E*F/a,R,$),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function Vo(e,o,n,t){let r=Ve[o],s=we?[I({x:0,y:1,z:1},n,t),I({x:1,y:0,z:1},n,t),I({x:1,y:1,z:0},n,t)]:[I({x:1,y:0,z:0},n,t),I({x:0,y:1,z:0},n,t),I({x:0,y:0,z:1},n,t)],d=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let i=s[a].x+d[a].x,c=s[a].y+d[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[a],i,c)}e.globalAlpha=1,e.restore()}var ee=30,le=13;function zo(e,o,n,t){let r=(ee+le)/2,s=5,d=Math.floor(o.x/s)*s,a=Math.floor(o.y/s)*s,i=ee*2+s*2,c=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let p=-1;p*s<=i;p++)for(let C=-1;C*s<=i;C++)e.fillStyle=(p+C)%2===0?"#ffffff":"#d9d9d9",e.fillRect(d+p*s,a+C*s,s,s);let f="rgba("+n.r+","+n.g+","+n.b+",0)",g="rgba("+n.r+","+n.g+","+n.b+",1)",A=e;if(typeof A.createConicGradient=="function"){let p=A.createConicGradient(-Math.PI/2,o.x,o.y);p.addColorStop(0,f),p.addColorStop(1,g),e.fillStyle=p,e.fillRect(d-ee,a-ee,i,i)}else for(let C=0;C<36;C++){let w=-Math.PI/2+C/36*Math.PI*2,E=-Math.PI/2+(C+1)/36*Math.PI*2,y=(C+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(w)*le,o.y+Math.sin(w)*le),e.arc(o.x,o.y,ee,w,E),e.arc(o.x,o.y,le,E,w,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+y.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=c*Math.PI*2,P=o.x+r*Math.sin(k),b=o.y-r*Math.cos(k);e.beginPath(),e.arc(P,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function So(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function io(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return I(r[e],n,t)}function Fe(){let e={x:0,y:0};return[I({x:1,y:0,z:0},1,e),I({x:0,y:1,z:0},1,e),I({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function ye(e,o,n,t,r){let s=Q[e],d=[n.x,n.y,n.z],a=d[s.uAxis],i=d[s.vAxis];if(a<.002||i<.002)return null;let c={x:0,y:0,z:0},f=["x","y","z"];c[f[s.fixedAxis]]=d[s.fixedAxis];let g={...c};g[f[s.uAxis]]=a;let A={...c};A[f[s.vAxis]]=i;let k=I(c,t,r),P=I(g,t,r),b=I(A,t,r),p=P.x-k.x,C=P.y-k.y,w=b.x-k.x,E=b.y-k.y,y=p*E-C*w;if(Math.abs(y)<1e-6)return null;let R=o.x-k.x,$=o.y-k.y,D=(R*E-$*w)/y,F=($*p-R*C)/y;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function so(e,o,n,t,r){let s=Q[e],d=[n.x,n.y,n.z],a=d[s.uAxis],i=d[s.vAxis];if(a<.002||i<.002)return null;let c={x:0,y:0,z:0},f=["x","y","z"];c[f[s.fixedAxis]]=d[s.fixedAxis];let g={...c};g[f[s.uAxis]]=a;let A={...c};A[f[s.vAxis]]=i;let k=I(c,t,r),P=I(g,t,r),b=I(A,t,r),p=P.x-k.x,C=P.y-k.y,w=b.x-k.x,E=b.y-k.y,y=p*E-C*w;if(Math.abs(y)<1e-6)return null;let R=o.x-k.x,$=o.y-k.y,D=(R*E-$*w)/y,F=($*p-R*C)/y;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var lo=22;function co(e,o,n,t,r,s,d,a,i,c,f,g,A,k,P){let b={...no};function p(l){let h=e.getBoundingClientRect();return{x:l.clientX-h.left,y:l.clientY-h.top}}let C=!1,w=!1,E=!1,y=!1,R=null,$=600,D=null;function F(){Z(),D=setTimeout(oe,$)}function Z(){D!==null&&(clearTimeout(D),D=null)}function oe(){D=null,b.alphaMode=!1,fe(),x(),y=!0,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.3),R=null,i()}let G=9,ve=1e3,K=null;function B(){q(),K=setTimeout(Me,ve)}function q(){K!==null&&(clearTimeout(K),K=null),Z()}function Me(){K=null,b.alphaMode=!0,x(),fe(),i()}function te(l){let h=A();return Math.hypot(l.x-h.x,l.y-h.y)}function Le(l){let h=A();return(Math.atan2(l.x-h.x,-(l.y-h.y))+Math.PI*2)%(Math.PI*2)}function de(l){f(Le(l)/(Math.PI*2)),i()}function Ce(l){let h=te(l);return h>=le-4&&h<=ee+6}function j(l){let h=o(),T=d(),M=a();for(let v=0;v<3;v++){let L=io(v,h,T,M),H=l.x-L.x,O=l.y-L.y;if(H*H+O*O<=lo*lo)return v}return-1}function X(l){let h=o(),T=d(),M=a();for(let v=Q.length-1;v>=0;v--){let L=ye(v,l,h,T,M);if(L)return{faceIndex:v,...L}}return null}let U=-1,J={x:0,y:0},Te=0;function he(l,h){U=l,J=h,Te=o()[["x","y","z"][l]],b.draggingAxisHandle=l,e.style.cursor="grabbing",i()}function u(l){if(q(),U<0)return;let h=l.x-J.x,T=l.y-J.y,v=Fe()[U],L=d(),O=(h*v.x+T*v.y)/L,N=Math.max(0,Math.min(1,Te+O)),W=o(),_=["x","y","z"],me={...W,[_[U]]:N};n(me);let ke=t(),je=s(),Ye=je>=0?Q[je]:null,Pe={...ke};Ye&&U===Ye.fixedAxis?Pe[_[U]]=N:Pe[_[U]]=Math.min(ke[_[U]],N),r(Pe,s()),i()}function x(){U=-1,b.draggingAxisHandle=-1}let m=-1,V=null,S=null,z=!1;function be(l,h,T,M){m=l,b.draggingFace=l,V=null,S=null,z=!1,M&&(z=!0,S={s:h,t:T}),Re(l,h,T),e.style.cursor="crosshair",i()}function ae(l,h,T){if(q(),m<0)return;let M=o(),v=d(),L=a(),H=ye(m,l,M,v,L),O=m;if(!H&&!T){for(let _=Q.length-1;_>=0;_--)if(_!==m&&(H=ye(_,l,M,v,L),H)){O=_;break}}if(!H&&T&&(H=so(m,l,M,v,L),O=m),!H){i();return}O!==m&&(m=O,b.draggingFace=O,V=null,z=!1,S=null);let{s:N,t:W}=H;if(h&&S){if(z){let _=Math.abs(N-S.s),me=Math.abs(W-S.t),ke=.02;(_>ke||me>ke)&&(V=_>=me?"u":"v",z=!1)}V==="u"?W=S.t:V==="v"&&(N=S.s)}else h||(V=null,z=!1,S=null);Re(O,N,W),i()}function Re(l,h,T){let M=Q[l],v=o(),L=["x","y","z"],H={...t()};H[L[M.uAxis]]=h*v[L[M.uAxis]],H[L[M.vAxis]]=T*v[L[M.vAxis]],H[L[M.fixedAxis]]=v[L[M.fixedAxis]],r(H,l)}function fe(){m=-1,b.draggingFace=-1,V=null,z=!1,S=null}function ne(l){w=!0;let h=p(l);if(c()){if(b.alphaMode){if(te(h)<=G){b.alphaMode=!1,i();return}if(Ce(h)){l.preventDefault(),C=!0,de(h);return}b.alphaMode=!1,i();return}te(h)<=G&&B()}let T=j(h);if(T>=0){l.preventDefault(),he(T,h);return}let M=X(h);if(M){l.preventDefault(),be(M.faceIndex,M.s,M.t,l.shiftKey),F();return}let v=a();Math.hypot(h.x-v.x,h.y-v.y)>d()+20&&(l.preventDefault(),y=!0,R=h,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),i())}function Ge(l){let h=p(l);if(C){l.preventDefault(),de(h);return}if(y){if(l.preventDefault(),!R){R=h;return}let H=h.x-R.x,O=h.y-R.y,N=De();Ee(Math.max(-60,Math.min(60,N.yaw+H*.12)),Math.max(-60,Math.min(60,N.pitch+O*.12))),H!==0&&k(Math.max(0,Math.min(1,P()+H*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),R=h,i();return}if(w&&b.alphaMode&&Ce(h)){l.preventDefault(),C=!0,de(h);return}if(U>=0){l.preventDefault(),u(h);return}if(m>=0){l.preventDefault(),ae(h,l.shiftKey,l.altKey);return}let T=j(h),M=X(h),v=T,L=T>=0?-1:M?M.faceIndex:-1;(v!==b.hoveredAxisHandle||L!==b.hoveredFace)&&(b.hoveredAxisHandle=v,b.hoveredFace=L,e.style.cursor=v>=0?"grab":L>=0?"crosshair":"default",i())}function Ue(l){q(),w=!1,C=!1,y&&(y=!1,b.viewRotating=!1,b.ringAlpha=0,R=null,i());let h=U>=0||m>=0;x(),fe(),h&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",i())}function Ne(l){if(l.touches.length!==1)return;E=!0;let h=p(l.touches[0]);if(c()){if(b.alphaMode){if(te(h)<=G){b.alphaMode=!1,i();return}if(Ce(h)){l.preventDefault(),C=!0,de(h);return}b.alphaMode=!1,i();return}te(h)<=G&&B()}let T=j(h);if(T>=0){l.preventDefault(),he(T,h);return}let M=X(h);if(M){l.preventDefault(),be(M.faceIndex,M.s,M.t,!1),F();return}let v=a();Math.hypot(h.x-v.x,h.y-v.y)>d()+20&&(l.preventDefault(),y=!0,R=h,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),i())}function Ke(l){if(l.touches.length!==1)return;let h=p(l.touches[0]);if(C)l.preventDefault(),de(h);else if(E&&b.alphaMode&&Ce(h))l.preventDefault(),C=!0,de(h);else if(U>=0)l.preventDefault(),u(h);else if(y){if(l.preventDefault(),!R){R=h;return}let T=h.x-R.x,M=h.y-R.y,v=De();Ee(Math.max(-60,Math.min(60,v.yaw+T*.12)),Math.max(-60,Math.min(60,v.pitch+M*.12))),T!==0&&k(Math.max(0,Math.min(1,P()+T*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),R=h,i()}else m>=0&&(l.preventDefault(),ae(h,!1,!1))}function Xe(l){q(),E=!1,C=!1,y&&(y=!1,b.viewRotating=!1,b.ringAlpha=0,R=null,i()),x(),fe(),i()}function We(l){if(b.alphaMode){if(l.key==="Escape"){b.alphaMode=!1,i();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),f(Math.min(1,g()+(l.shiftKey?.08:.02))),i();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),f(Math.max(0,g()-(l.shiftKey?.08:.02))),i();return}}let h=l.shiftKey?.04:.004,T=t(),M=o(),v=Fe(),L=0,H=0;switch(l.key){case"ArrowRight":L=1;break;case"ArrowLeft":L=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}l.preventDefault();let O={...T},N=["x","y","z"];for(let W=0;W<3;W++){let _=L*v[W].x+H*v[W].y;if(Math.abs(_)>.3){let me=T[N[W]]+h*Math.sign(_);O[N[W]]=Math.max(0,Math.min(M[N[W]],me))}}r(O,s()),i()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Ue),e.addEventListener("touchstart",Ne,{passive:!1}),e.addEventListener("touchmove",Ke,{passive:!1}),e.addEventListener("touchend",Xe),e.addEventListener("keydown",We),e.setAttribute("tabindex","0");function fo(){q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Ue),e.removeEventListener("touchstart",Ne),e.removeEventListener("touchmove",Ke),e.removeEventListener("touchend",Xe),e.removeEventListener("keydown",We)}return{state:b,destroy:fo}}var uo=`.box-picker {\r
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
`;var bo=Io,ho=!1;function Po(){if(ho||typeof document>"u")return;ho=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=uo,document.head.appendChild(e)}function Io(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,s=o.showModeToggle??!1,d=o.showCorners??!1,a={mode:()=>i,switchMode:u=>oe(u),onHexInput:u=>{let x=pe(u);x?(g=ge(F?{r:255-x.r,g:255-x.g,b:255-x.b}:x,i),f={x:Math.max(f.x,g.x),y:Math.max(f.y,g.y),z:Math.max(f.z,g.z)},J(),X(),B()):X()},onChannelInput:(u,x,m)=>{let V=Math.max(0,Math.min(m,x)),S=["x","y","z"],z=V/m;if(F){let be={...g,[S[u]]:z},ae=re(be,i);g=ge({r:255-ae.r,g:255-ae.g,b:255-ae.b},i)}else g={...g,[S[u]]:z};z>f[S[u]]&&(f={...f,[S[u]]:z}),J(),X(),B()},getRgbForCopy:()=>re(g,i),onRandom:u=>he(u),onReset:()=>he({r:0,g:0,b:0})},i=o.mode??"rgb",c=o.initialColor?ge(o.initialColor,i):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},g={...c},A=0,k=()=>o.alpha!==void 0,P=Math.max(0,Math.min(1,o.alpha??1));function b(u){let x=Math.max(0,Math.min(1,u));x!==P&&(P=x,J(),X(),B())}function p(u){let x=j(),m=Y(x);m.s=Math.max(0,Math.min(100,u*100));let V=ie(m);he(F?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let C=new Set;Po();let w=document.createElement("div");w.className="box-picker";let E=document.createElement("canvas");E.style.cursor="grab",w.appendChild(E);let y=ro(E,n),R=null,$=document.createElement("div");$.className="box-picker-controls",R=document.createElement("div"),R.className="box-picker-swatch",$.appendChild(R),w.appendChild($),(r||s||d)&&import("./controls-VBFXR3DH.js").then(u=>{u.createControls($,a,{showInputs:r,showModeToggle:s,showCorners:d})}).catch(()=>{}),e.appendChild(w);let D=co(E,()=>f,u=>{f=u},()=>g,(u,x)=>{g=u,A=x,J(),X()},()=>A,()=>y.scale,()=>y.center,B,k,b,()=>P,()=>I(g,y.scale,y.center),p,()=>Y(j()).s/100),F=!1,Z=!0;E.addEventListener("mouseenter",()=>{Z=!0,B()}),E.addEventListener("mouseleave",()=>{Z=!1,B()}),E.addEventListener("dblclick",()=>{F=!F,to(F),J(),X(),B()});function oe(u){if(u===i)return;let x=re(g,i),m={...g},V={...f};i=u;let S=ge(x,i),z={x:1,y:1,z:1};g=S,f=z,ve(m,S,V,z,300),X()}let G=null;function ve(u,x,m,V,S){G!==null&&cancelAnimationFrame(G);let z=performance.now();function be(ae){let Re=ae-z,fe=Math.min(1,Re/S),ne=1-Math.pow(1-fe,3);g={x:u.x+(x.x-u.x)*ne,y:u.y+(x.y-u.y)*ne,z:u.z+(x.z-u.z)*ne},f={x:m.x+(V.x-m.x)*ne,y:m.y+(V.y-m.y)*ne,z:m.z+(V.z-m.z)*ne},q(),J(),fe<1?G=requestAnimationFrame(be):G=null}G=requestAnimationFrame(be)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,q()}))}function q(){ao(y,f,g,A,i,D.state,Z,{active:D.state.alphaMode,alpha:P,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:Y(j()).s/100,rgb:ie({h:Y(j()).h,s:100,b:100})})}function Me(u,x,m){return Math.round(u+(x-u)*m)}function te(u,x){let m=x>0?255:0,V=Math.abs(x);return se({r:Me(u.r,m,V),g:Me(u.g,m,V),b:Me(u.b,m,V)})}function Le(u,x){let m=pe(x)||{r:128,g:128,b:128},V=te(m,.35),S=te(m,0),z=te(m,-.35);u.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${S}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${z}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,u.style.backgroundColor="transparent"}function de(u){try{navigator.clipboard.writeText(u).catch(()=>{})}catch{}}function Ce(u){u&&(u.style.borderColor="#4ade80",u.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{u.style.borderColor="",u.style.boxShadow=""},500))}function j(){let u=re(g,i);return F?{r:255-u.r,g:255-u.g,b:255-u.b}:u}function X(){if(!t)return;let u=j(),x=se(u);R&&Le(R,x);let m=w.querySelector(".box-picker-hex");m&&(m.value=x),U(),w._updateModeButtons&&w._updateModeButtons()}function U(){if(!t)return;let u=Ve[i],x=F?ge(j(),i):g,m=qe(x,i),V=w.querySelectorAll(".box-picker-channel input"),S=w.querySelectorAll(".box-picker-channel label");for(let z=0;z<V.length;z++)S[z].textContent=u[z],S[z].style.color="",S[z].style.textShadow="none",V[z].value=String(m[z])}function J(){let u=j(),x={rgb:u,hsb:Y(u),oklch:xe(u),hex:se(u),alpha:P};for(let m of C)m(x)}function Te(){let u=re(g,i);return{rgb:u,hsb:Y(u),oklch:xe(u),hex:se(u)}}X(),q();let he=u=>{g=ge(u,i),f={x:Math.max(f.x,g.x),y:Math.max(f.y,g.y),z:Math.max(f.z,g.z)};let x=I(g,y.scale,y.center);A=-1;for(let m=Q.length-1;m>=0;m--)if(ye(m,x,f,y.scale,y.center)){A=m;break}J(),X(),B()};return{getColor:Te,getMode:()=>i,setColor:he,setAlpha:b,getAlpha:()=>P,setMode(u){oe(u)},on(u,x){C.add(x)},off(u,x){C.delete(x)},destroy(){D.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(w)}}}function _e(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:pe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=pe(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Be(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Be(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ie({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Ae({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Be(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function ze(e,o,n=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Oe(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Oe(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=Y(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=Y(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Oe(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=Y(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=xe(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Be(e,o,n){let t=o/100,r=n/100,s=(1-Math.abs(2*r-1))*t,d=s*(1-Math.abs(e/60%2-1)),a=r-s/2,i=0,c=0,f=0;return e<60?(i=s,c=d):e<120?(i=d,c=s):e<180?(c=s,f=d):e<240?(c=d,f=s):e<300?(i=d,f=s):(i=s,f=d),{r:Math.round((i+a)*255),g:Math.round((c+a)*255),b:Math.round((f+a)*255)}}function Oe(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),s=Math.min(o,n,t),d=(r+s)/2;if(r===s)return{h:0,s:0,l:d*100};let a=r-s,i=d>.5?a/(2-r-s):a/(r+s),c=0;return r===o?c=((n-t)/a+(n<t?6:0))*60:r===n?c=((t-o)/a+2)*60:c=((o-n)/a+4)*60,{h:c,s:i*100,l:d*100}}var Se=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?_e(t,this.model):null;this.alpha=r?.alpha??1;let s=r?.rgb??{r:255,g:255,b:255},d=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=bo(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...d.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",a=>{this.internal||(this.internal=!0,this.alpha=a.alpha,this.setAttribute("value",ze(a.rgb,this.model,a.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:a})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ze(a.rgb,this.model,a.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=_e(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||ze({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},$e=class extends Se{constructor(){super("hex")}},Ho=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Ho)customElements.get(e)||customElements.define(e,class extends Se{constructor(){super(o)}});var tt=$e;export{$e as ColorIsBoxElement,Io as createBoxColorPicker,bo as createColorPicker,tt as default,to as setBoxInvert};
