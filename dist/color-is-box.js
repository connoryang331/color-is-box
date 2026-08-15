var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ke={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ae(e){let o=e.r/255,t=e.g/255,a=e.b/255,d=Math.max(o,t,a),c=Math.min(o,t,a),b=d-c,r=0;b!==0&&(d===o?r=((t-a)/b+6)%6:d===t?r=(a-o)/b+2:r=(o-t)/b+4,r*=60);let n=d===0?0:b/d*100,u=d*100;return{h:r,s:n,b:u}}function we(e){let o=e.h,t=e.s/100,a=e.b/100,d=a*t,c=d*(1-Math.abs(o/60%2-1)),b=a-d,r,n,u;return o<60?(r=d,n=c,u=0):o<120?(r=c,n=d,u=0):o<180?(r=0,n=d,u=c):o<240?(r=0,n=c,u=d):o<300?(r=c,n=0,u=d):(r=d,n=0,u=c),{r:Math.round((r+b)*255),g:Math.round((n+b)*255),b:Math.round((u+b)*255)}}function Se(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ze(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function so(e){let o=Se(e.r/255),t=Se(e.g/255),a=Se(e.b/255),d=.4122214708*o+.5363325363*t+.0514459929*a,c=.2119034982*o+.6806995451*t+.1073969566*a,b=.0883024619*o+.2817188376*t+.6299787005*a,r=Math.cbrt(d),n=Math.cbrt(c),u=Math.cbrt(b);return{L:.2104542553*r+.793617785*n-.0040720468*u,a:1.9779984951*r-2.428592205*n+.4505937099*u,b:.0259040371*r+.7827717662*n-.808675766*u}}function lo(e,o,t){let a=e+.3963377774*o+.2158037573*t,d=e-.1055613458*o-.0638541728*t,c=e-.0894841775*o-1.291485548*t,b=a*a*a,r=d*d*d,n=c*c*c,u=4.0767416621*b-3.3077115913*r+.2309699292*n,m=-1.2684380046*b+2.6097574011*r-.3413193965*n,h=-.0041960863*b-.7034186147*r+1.707614701*n;return{r:Math.round(Math.max(0,Math.min(1,ze(u)))*255),g:Math.round(Math.max(0,Math.min(1,ze(m)))*255),b:Math.round(Math.max(0,Math.min(1,ze(h)))*255)}}function Te(e){let o=so(e),t=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:t,h:t<1e-4?0:a}}function Le(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),a=e.c*Math.sin(o);return lo(e.l,t,a)}function co(e,o,t){let a=Le({l:e,c:o,h:t});if(Xe(a))return{l:e,c:o,h:t};let d=0,c=o;for(let b=0;b<20;b++){let r=(d+c)/2;a=Le({l:e,c:r,h:t}),Xe(a)?d=r:c=r}return{l:e,c:d,h:t}}function Xe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function pe(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var $e=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return we({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,a=e.y*$e,d=e.z*359,c=co(t,a,d);return Le(c)}}function ue(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ae(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Te(e);return{x:t.l,y:Math.min(t.c/$e,1),z:t.h/359}}}function We(e,o){let t=Ke[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function je(e,o,t,a,d,c=!1){let b;e===0?b={x:a,y:o,z:t}:e===1?b={x:o,y:a,z:t}:b={x:o,y:t,z:a};let r=ne(b,d);return c?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var Ye=Math.PI/6,uo=Math.cos(Ye),bo=Math.sin(Ye),Me=!1;function Ze(e){Me=e}var ye=0,ve=0;function Ie(e,o){ye=e,ve=o}function He(){return{yaw:ye,pitch:ve}}function P(e,o,t){let a=e;if(ye!==0||ve!==0){let d={x:e.x-.5,y:e.y-.5,z:e.z-.5},c=Math.cos(ye),b=Math.sin(ye),r=Math.cos(ve),n=Math.sin(ve),u=d.x*c+d.z*b,m=d.y,h=-d.x*b+d.z*c,A=m*r-h*n,w=m*n+h*r;a={x:u+.5,y:A+.5,z:w+.5}}return{x:t.x+(a.y-a.x)*uo*o,y:t.y+a.z*o-(a.x+a.y)*bo*o}}function fo(e){let{x:o,y:t,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:a},{x:o,y:t,z:0},{x:o,y:0,z:a},{x:0,y:t,z:a},{x:o,y:t,z:a}]}var J=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],ho=64,Je={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Qe(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(t,t),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function qe(e,o,t,a,d,c,b=!0,r=null,n=null){let{ctx:u,scale:m,center:h,width:A,height:w}=e;u.save(),u.clearRect(0,0,A,w);let E=fo(o).map(C=>P(C,m,h)),f=c.viewRotating?.32:1;if(u.save(),u.globalAlpha=f,mo(u,m,h,d),u.restore(),u.save(),u.shadowColor="rgba(0,0,0,0.35)",u.shadowBlur=8,u.shadowOffsetX=0,u.shadowOffsetY=2,u.globalAlpha=c.viewRotating?.22:1,go(u,E,o,d),u.restore(),b&&(u.save(),u.globalAlpha=c.viewRotating?.5:1,yo(u,d,m,h),u.restore()),a>=0){let C=ne(t,d),M=Me?{r:255-C.r,g:255-C.g,b:255-C.b}:C,k=P(t,m,h);r&&r.active&&vo(u,k,r.rgb,r.alpha),Mo(u,k,M)}u.restore()}var xo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function mo(e,o,t,a){let d=P({x:0,y:0,z:0},o,t),c=[P({x:1,y:0,z:0},o,t),P({x:0,y:1,z:0},o,t),P({x:0,y:0,z:1},o,t)],b=xo[a];e.lineWidth=1.5;for(let r=0;r<c.length;r++)e.beginPath(),e.moveTo(d.x,d.y),e.lineTo(c[r].x,c[r].y),e.strokeStyle=b[r],e.stroke()}function go(e,o,t,a){let d=[t.x,t.y,t.z];for(let c=0;c<J.length;c++){let b=J[c],r=d[b.fixedAxis],n=d[b.uAxis],u=d[b.vAxis];if(n<.002&&u<.002)continue;let m=b.quad.map(h=>o[h]);po(e,m,b.fixedAxis,r,n,u,a)}}function po(e,o,t,a,d,c,b){let r=ho,n=document.createElement("canvas");n.width=r,n.height=r;let u=n.getContext("2d"),m=u.createImageData(r,r),h=m.data;for(let Y=0;Y<r;Y++)for(let ee=0;ee<r;ee++){let U=ee/(r-1)*d,he=Y/(r-1)*c,X=je(t,U,he,a,b,Me),B=(Y*r+ee)*4;h[B]=X.r,h[B+1]=X.g,h[B+2]=X.b,h[B+3]=255}u.putImageData(m,0,0);let A=o[0],w=o[1],E=o[2],f=o[3],C=w.x-A.x,M=w.y-A.y,k=f.x-A.x,H=f.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(w.x,w.y),e.lineTo(E.x,E.y),e.lineTo(f.x,f.y),e.closePath(),e.clip();let p=2/r,R=A.x-C*p-k*p,G=A.y-M*p-H*p,D=1+2*p,F=1+2*p;e.transform(C*D/r,M*D/r,k*F/r,H*F/r,R,G),e.imageSmoothingEnabled=!0,e.drawImage(n,0,0),e.restore()}function yo(e,o,t,a){let d=Ae[o],c=Me?[P({x:0,y:1,z:1},t,a),P({x:1,y:0,z:1},t,a),P({x:1,y:1,z:0},t,a)]:[P({x:1,y:0,z:0},t,a),P({x:0,y:1,z:0},t,a),P({x:0,y:0,z:1},t,a)],b=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let r=0;r<3;r++){let n=c[r].x+b[r].x,u=c[r].y+b[r].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(d[r],n,u)}e.globalAlpha=1,e.restore()}var q=30,ie=13;function vo(e,o,t,a){let d=(q+ie)/2,c=5,b=Math.floor(o.x/c)*c,r=Math.floor(o.y/c)*c,n=q*2+c*2,u=Math.max(0,Math.min(1,a));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let C=-1;C*c<=n;C++)for(let M=-1;M*c<=n;M++)e.fillStyle=(C+M)%2===0?"#ffffff":"#d9d9d9",e.fillRect(b+C*c,r+M*c,c,c);let m="rgba("+t.r+","+t.g+","+t.b+",0)",h="rgba("+t.r+","+t.g+","+t.b+",1)",A=e;if(typeof A.createConicGradient=="function"){let C=A.createConicGradient(-Math.PI/2,o.x,o.y);C.addColorStop(0,m),C.addColorStop(1,h),e.fillStyle=C,e.fillRect(b-q,r-q,n,n)}else for(let M=0;M<36;M++){let k=-Math.PI/2+M/36*Math.PI*2,H=-Math.PI/2+(M+1)/36*Math.PI*2,p=(M+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(k)*ie,o.y+Math.sin(k)*ie),e.arc(o.x,o.y,q,k,H),e.arc(o.x,o.y,ie,H,k,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+p.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let w=u*Math.PI*2,E=o.x+d*Math.sin(w),f=o.y-d*Math.cos(w);e.beginPath(),e.arc(E,f,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Mo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function eo(e,o,t,a){let d=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return P(d[e],t,a)}function Ee(){let e={x:0,y:0};return[P({x:1,y:0,z:0},1,e),P({x:0,y:1,z:0},1,e),P({x:0,y:0,z:1},1,e)].map(t=>{let a=Math.sqrt(t.x*t.x+t.y*t.y);return a>0?{x:t.x/a,y:t.y/a}:{x:0,y:0}})}function fe(e,o,t,a,d){let c=J[e],b=[t.x,t.y,t.z],r=b[c.uAxis],n=b[c.vAxis];if(r<.002||n<.002)return null;let u={x:0,y:0,z:0},m=["x","y","z"];u[m[c.fixedAxis]]=b[c.fixedAxis];let h={...u};h[m[c.uAxis]]=r;let A={...u};A[m[c.vAxis]]=n;let w=P(u,a,d),E=P(h,a,d),f=P(A,a,d),C=E.x-w.x,M=E.y-w.y,k=f.x-w.x,H=f.y-w.y,p=C*H-M*k;if(Math.abs(p)<1e-6)return null;let R=o.x-w.x,G=o.y-w.y,D=(R*H-G*k)/p,F=(G*C-R*M)/p;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function oo(e,o,t,a,d){let c=J[e],b=[t.x,t.y,t.z],r=b[c.uAxis],n=b[c.vAxis];if(r<.002||n<.002)return null;let u={x:0,y:0,z:0},m=["x","y","z"];u[m[c.fixedAxis]]=b[c.fixedAxis];let h={...u};h[m[c.uAxis]]=r;let A={...u};A[m[c.vAxis]]=n;let w=P(u,a,d),E=P(h,a,d),f=P(A,a,d),C=E.x-w.x,M=E.y-w.y,k=f.x-w.x,H=f.y-w.y,p=C*H-M*k;if(Math.abs(p)<1e-6)return null;let R=o.x-w.x,G=o.y-w.y,D=(R*H-G*k)/p,F=(G*C-R*M)/p;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var to=22;function no(e,o,t,a,d,c,b,r,n,u,m,h,A,w,E){let f={...Je};function C(i){let l=e.getBoundingClientRect();return{x:i.clientX-l.left,y:i.clientY-l.top}}let M=!1,k=!1,H=!1,p=!1,R=null,G=600,D=null;function F(){Y(),D=setTimeout(ee,G)}function Y(){D!==null&&(clearTimeout(D),D=null)}function ee(){D=null,f.alphaMode=!1,de(),g(),p=!0,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.3),R=null,n()}let U=9,he=1e3,X=null;function B(){Q(),X=setTimeout(xe,he)}function Q(){X!==null&&(clearTimeout(X),X=null),Y()}function xe(){X=null,f.alphaMode=!0,g(),de(),n()}function oe(i){let l=A();return Math.hypot(i.x-l.x,i.y-l.y)}function Re(i){let l=A();return(Math.atan2(i.x-l.x,-(i.y-l.y))+Math.PI*2)%(Math.PI*2)}function se(i){m(Re(i)/(Math.PI*2)),n()}function me(i){let l=oe(i);return l>=ie-4&&l<=q+6}function j(i){let l=o(),T=b(),v=r();for(let y=0;y<3;y++){let L=eo(y,l,T,v),I=i.x-L.x,O=i.y-L.y;if(I*I+O*O<=to*to)return y}return-1}function $(i){let l=o(),T=b(),v=r();for(let y=J.length-1;y>=0;y--){let L=fe(y,i,l,T,v);if(L)return{faceIndex:y,...L}}return null}let N=-1,Z={x:0,y:0},Ce=0;function le(i,l){N=i,Z=l,Ce=o()[["x","y","z"][i]],f.draggingAxisHandle=i,e.style.cursor="grabbing",n()}function s(i){if(Q(),N<0)return;let l=i.x-Z.x,T=i.y-Z.y,y=Ee()[N],L=b(),O=(l*y.x+T*y.y)/L,K=Math.max(0,Math.min(1,Ce+O)),W=o(),_=["x","y","z"],be={...W,[_[N]]:K};t(be);let ge=a(),Ue=c(),Ne=Ue>=0?J[Ue]:null,Ve={...ge};Ne&&N===Ne.fixedAxis?Ve[_[N]]=K:Ve[_[N]]=Math.min(ge[_[N]],K),d(Ve,c()),n()}function g(){N=-1,f.draggingAxisHandle=-1}let x=-1,V=null,z=null,S=!1;function ce(i,l,T,v){x=i,f.draggingFace=i,V=null,z=null,S=!1,v&&(S=!0,z={s:l,t:T}),ke(i,l,T),e.style.cursor="crosshair",n()}function re(i,l,T){if(Q(),x<0)return;let v=o(),y=b(),L=r(),I=fe(x,i,v,y,L),O=x;if(!I&&!T){for(let _=J.length-1;_>=0;_--)if(_!==x&&(I=fe(_,i,v,y,L),I)){O=_;break}}if(!I&&T&&(I=oo(x,i,v,y,L),O=x),!I){n();return}O!==x&&(x=O,f.draggingFace=O,V=null,S=!1,z=null);let{s:K,t:W}=I;if(l&&z){if(S){let _=Math.abs(K-z.s),be=Math.abs(W-z.t),ge=.02;(_>ge||be>ge)&&(V=_>=be?"u":"v",S=!1)}V==="u"?W=z.t:V==="v"&&(K=z.s)}else l||(V=null,S=!1,z=null);ke(O,K,W),n()}function ke(i,l,T){let v=J[i],y=o(),L=["x","y","z"],I={...a()};I[L[v.uAxis]]=l*y[L[v.uAxis]],I[L[v.vAxis]]=T*y[L[v.vAxis]],I[L[v.fixedAxis]]=y[L[v.fixedAxis]],d(I,i)}function de(){x=-1,f.draggingFace=-1,V=null,S=!1,z=null}function te(i){k=!0;let l=C(i);if(u()){if(f.alphaMode){if(oe(l)<=U){f.alphaMode=!1,n();return}if(me(l)){i.preventDefault(),M=!0,se(l);return}f.alphaMode=!1,n();return}oe(l)<=U&&B()}let T=j(l);if(T>=0){i.preventDefault(),le(T,l);return}let v=$(l);if(v){i.preventDefault(),ce(v.faceIndex,v.s,v.t,i.shiftKey),F();return}let y=r();Math.hypot(l.x-y.x,l.y-y.y)>b()+20&&(i.preventDefault(),p=!0,R=l,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.25),n())}function De(i){let l=C(i);if(M){i.preventDefault(),se(l);return}if(p){if(i.preventDefault(),!R){R=l;return}let I=l.x-R.x,O=l.y-R.y,K=He();Ie(Math.max(-60,Math.min(60,K.yaw+I*.12)),Math.max(-60,Math.min(60,K.pitch+O*.12))),I!==0&&w(Math.max(0,Math.min(1,E()+I*.002))),f.ringAlpha=Math.min(1,f.ringAlpha+.12),R=l,n();return}if(k&&f.alphaMode&&me(l)){i.preventDefault(),M=!0,se(l);return}if(N>=0){i.preventDefault(),s(l);return}if(x>=0){i.preventDefault(),re(l,i.shiftKey,i.altKey);return}let T=j(l),v=$(l),y=T,L=T>=0?-1:v?v.faceIndex:-1;(y!==f.hoveredAxisHandle||L!==f.hoveredFace)&&(f.hoveredAxisHandle=y,f.hoveredFace=L,e.style.cursor=y>=0?"grab":L>=0?"crosshair":"default",n())}function Fe(i){Q(),k=!1,M=!1,p&&(p=!1,f.viewRotating=!1,f.ringAlpha=0,R=null,n());let l=N>=0||x>=0;g(),de(),l&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",n())}function Be(i){if(i.touches.length!==1)return;H=!0;let l=C(i.touches[0]);if(u()){if(f.alphaMode){if(oe(l)<=U){f.alphaMode=!1,n();return}if(me(l)){i.preventDefault(),M=!0,se(l);return}f.alphaMode=!1,n();return}oe(l)<=U&&B()}let T=j(l);if(T>=0){i.preventDefault(),le(T,l);return}let v=$(l);if(v){i.preventDefault(),ce(v.faceIndex,v.s,v.t,!1),F();return}let y=r();Math.hypot(l.x-y.x,l.y-y.y)>b()+20&&(i.preventDefault(),p=!0,R=l,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.25),n())}function Oe(i){if(i.touches.length!==1)return;let l=C(i.touches[0]);if(M)i.preventDefault(),se(l);else if(H&&f.alphaMode&&me(l))i.preventDefault(),M=!0,se(l);else if(N>=0)i.preventDefault(),s(l);else if(p){if(i.preventDefault(),!R){R=l;return}let T=l.x-R.x,v=l.y-R.y,y=He();Ie(Math.max(-60,Math.min(60,y.yaw+T*.12)),Math.max(-60,Math.min(60,y.pitch+v*.12))),T!==0&&w(Math.max(0,Math.min(1,E()+T*.002))),f.ringAlpha=Math.min(1,f.ringAlpha+.12),R=l,n()}else x>=0&&(i.preventDefault(),re(l,!1,!1))}function _e(i){Q(),H=!1,M=!1,p&&(p=!1,f.viewRotating=!1,f.ringAlpha=0,R=null,n()),g(),de(),n()}function Ge(i){if(f.alphaMode){if(i.key==="Escape"){f.alphaMode=!1,n();return}if(i.key==="ArrowUp"||i.key==="ArrowRight"){i.preventDefault(),m(Math.min(1,h()+(i.shiftKey?.08:.02))),n();return}if(i.key==="ArrowDown"||i.key==="ArrowLeft"){i.preventDefault(),m(Math.max(0,h()-(i.shiftKey?.08:.02))),n();return}}let l=i.shiftKey?.04:.004,T=a(),v=o(),y=Ee(),L=0,I=0;switch(i.key){case"ArrowRight":L=1;break;case"ArrowLeft":L=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}i.preventDefault();let O={...T},K=["x","y","z"];for(let W=0;W<3;W++){let _=L*y[W].x+I*y[W].y;if(Math.abs(_)>.3){let be=T[K[W]]+l*Math.sign(_);O[K[W]]=Math.max(0,Math.min(v[K[W]],be))}}d(O,c()),n()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",De),window.addEventListener("mouseup",Fe),e.addEventListener("touchstart",Be,{passive:!1}),e.addEventListener("touchmove",Oe,{passive:!1}),e.addEventListener("touchend",_e),e.addEventListener("keydown",Ge),e.setAttribute("tabindex","0");function io(){Q(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",Fe),e.removeEventListener("touchstart",Be),e.removeEventListener("touchmove",Oe),e.removeEventListener("touchend",_e),e.removeEventListener("keydown",Ge)}return{state:f,destroy:io}}var ro=`.box-picker {\r
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
`;var Go=Ao,ao=!1;function ko(){if(ao||typeof document>"u")return;ao=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ro,document.head.appendChild(e)}function Ao(e,o={}){let t=o.size??300,a=o.controls??!0,d=o.showInputs??!1,c=o.showModeToggle??!1,b=o.showCorners??!1,r={mode:()=>n,switchMode:s=>ee(s),onHexInput:s=>{let g=Pe(s);g?(h=ue(F?{r:255-g.r,g:255-g.g,b:255-g.b}:g,n),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)},Z(),$(),B()):$()},onChannelInput:(s,g,x)=>{let V=Math.max(0,Math.min(x,g)),z=["x","y","z"],S=V/x;if(F){let ce={...h,[z[s]]:S},re=ne(ce,n);h=ue({r:255-re.r,g:255-re.g,b:255-re.b},n)}else h={...h,[z[s]]:S};S>m[z[s]]&&(m={...m,[z[s]]:S}),Z(),$(),B()},getRgbForCopy:()=>ne(h,n),onRandom:s=>le(s),onReset:()=>le({r:0,g:0,b:0})},n=o.mode??"rgb",u=o.initialColor?ue(o.initialColor,n):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},h={...u},A=0,w=()=>o.alpha!==void 0,E=Math.max(0,Math.min(1,o.alpha??1));function f(s){let g=Math.max(0,Math.min(1,s));g!==E&&(E=g,Z(),$(),B())}function C(s){let g=j(),x=ae(g);x.s=Math.max(0,Math.min(100,s*100));let V=we(x);le(F?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let M=new Set;ko();let k=document.createElement("div");k.className="box-picker";let H=document.createElement("canvas");H.style.cursor="grab",k.appendChild(H);let p=Qe(H,t),R=null,G=document.createElement("div");G.className="box-picker-controls",R=document.createElement("div"),R.className="box-picker-swatch",G.appendChild(R),k.appendChild(G),(d||c||b)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(G,r,{showInputs:d,showModeToggle:c,showCorners:b})}).catch(()=>{}),e.appendChild(k);let D=no(H,()=>m,s=>{m=s},()=>h,(s,g)=>{h=s,A=g,Z(),$()},()=>A,()=>p.scale,()=>p.center,B,w,f,()=>E,()=>P(h,p.scale,p.center),C,()=>ae(j()).s/100),F=!1,Y=!0;H.addEventListener("mouseenter",()=>{Y=!0,B()}),H.addEventListener("mouseleave",()=>{Y=!1,B()}),H.addEventListener("dblclick",()=>{F=!F,Ze(F),Z(),$(),B()});function ee(s){if(s===n)return;let g=ne(h,n),x={...h},V={...m};n=s;let z=ue(g,n),S={x:1,y:1,z:1};h=z,m=S,he(x,z,V,S,300),$()}let U=null;function he(s,g,x,V,z){U!==null&&cancelAnimationFrame(U);let S=performance.now();function ce(re){let ke=re-S,de=Math.min(1,ke/z),te=1-Math.pow(1-de,3);h={x:s.x+(g.x-s.x)*te,y:s.y+(g.y-s.y)*te,z:s.z+(g.z-s.z)*te},m={x:x.x+(V.x-x.x)*te,y:x.y+(V.y-x.y)*te,z:x.z+(V.z-x.z)*te},Q(),Z(),de<1?U=requestAnimationFrame(ce):U=null}U=requestAnimationFrame(ce)}let X=!1;function B(){X||(X=!0,requestAnimationFrame(()=>{X=!1,Q()}))}function Q(){qe(p,m,h,A,n,D.state,Y,{active:D.state.alphaMode,alpha:E,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:ae(j()).s/100,rgb:we({h:ae(j()).h,s:100,b:100})})}function xe(s,g,x){return Math.round(s+(g-s)*x)}function oe(s,g){let x=g>0?255:0,V=Math.abs(g);return pe({r:xe(s.r,x,V),g:xe(s.g,x,V),b:xe(s.b,x,V)})}function Re(s,g){let x=Pe(g)||{r:128,g:128,b:128},V=oe(x,.35),z=oe(x,0),S=oe(x,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${z}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function se(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function me(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function j(){let s=ne(h,n);return F?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function $(){if(!a)return;let s=j(),g=pe(s);R&&Re(R,g);let x=k.querySelector(".box-picker-hex");x&&(x.value=g),N(),k._updateModeButtons&&k._updateModeButtons()}function N(){if(!a)return;let s=Ae[n],g=F?ue(j(),n):h,x=We(g,n),V=k.querySelectorAll(".box-picker-channel input"),z=k.querySelectorAll(".box-picker-channel label");for(let S=0;S<V.length;S++)z[S].textContent=s[S],z[S].style.color="",z[S].style.textShadow="none",V[S].value=String(x[S])}function Z(){let s=j(),g={rgb:s,hsb:ae(s),oklch:Te(s),hex:pe(s),alpha:E};for(let x of M)x(g)}function Ce(){let s=ne(h,n);return{rgb:s,hsb:ae(s),oklch:Te(s),hex:pe(s)}}$(),Q();let le=s=>{h=ue(s,n),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)};let g=P(h,p.scale,p.center);A=-1;for(let x=J.length-1;x>=0;x--)if(fe(x,g,m,p.scale,p.center)){A=x;break}Z(),$(),B()};return{getColor:Ce,getMode:()=>n,setColor:le,setAlpha:f,getAlpha:()=>E,setMode(s){ee(s)},on(s,g){M.add(g)},off(s,g){M.delete(g)},destroy(){D.destroy(),U!==null&&cancelAnimationFrame(U),e.removeChild(k)}}}export{Ao as createBoxColorPicker,Go as createColorPicker,Ze as setBoxInvert};
