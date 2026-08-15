var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ke={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ae(e){let o=e.r/255,t=e.g/255,a=e.b/255,c=Math.max(o,t,a),d=Math.min(o,t,a),b=c-d,r=0;b!==0&&(c===o?r=((t-a)/b+6)%6:c===t?r=(a-o)/b+2:r=(o-t)/b+4,r*=60);let n=c===0?0:b/c*100,f=c*100;return{h:r,s:n,b:f}}function we(e){let o=e.h,t=e.s/100,a=e.b/100,c=a*t,d=c*(1-Math.abs(o/60%2-1)),b=a-c,r,n,f;return o<60?(r=c,n=d,f=0):o<120?(r=d,n=c,f=0):o<180?(r=0,n=c,f=d):o<240?(r=0,n=d,f=c):o<300?(r=d,n=0,f=c):(r=c,n=0,f=d),{r:Math.round((r+b)*255),g:Math.round((n+b)*255),b:Math.round((f+b)*255)}}function Se(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ze(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function so(e){let o=Se(e.r/255),t=Se(e.g/255),a=Se(e.b/255),c=.4122214708*o+.5363325363*t+.0514459929*a,d=.2119034982*o+.6806995451*t+.1073969566*a,b=.0883024619*o+.2817188376*t+.6299787005*a,r=Math.cbrt(c),n=Math.cbrt(d),f=Math.cbrt(b);return{L:.2104542553*r+.793617785*n-.0040720468*f,a:1.9779984951*r-2.428592205*n+.4505937099*f,b:.0259040371*r+.7827717662*n-.808675766*f}}function lo(e,o,t){let a=e+.3963377774*o+.2158037573*t,c=e-.1055613458*o-.0638541728*t,d=e-.0894841775*o-1.291485548*t,b=a*a*a,r=c*c*c,n=d*d*d,f=4.0767416621*b-3.3077115913*r+.2309699292*n,m=-1.2684380046*b+2.6097574011*r-.3413193965*n,h=-.0041960863*b-.7034186147*r+1.707614701*n;return{r:Math.round(Math.max(0,Math.min(1,ze(f)))*255),g:Math.round(Math.max(0,Math.min(1,ze(m)))*255),b:Math.round(Math.max(0,Math.min(1,ze(h)))*255)}}function Te(e){let o=so(e),t=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:t,h:t<1e-4?0:a}}function Le(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),a=e.c*Math.sin(o);return lo(e.l,t,a)}function co(e,o,t){let a=Le({l:e,c:o,h:t});if(Xe(a))return{l:e,c:o,h:t};let c=0,d=o;for(let b=0;b<20;b++){let r=(c+d)/2;a=Le({l:e,c:r,h:t}),Xe(a)?c=r:d=r}return{l:e,c,h:t}}function Xe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function pe(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var $e=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return we({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,a=e.y*$e,c=e.z*359,d=co(t,a,c);return Le(d)}}function ue(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ae(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Te(e);return{x:t.l,y:Math.min(t.c/$e,1),z:t.h/359}}}function We(e,o){let t=Ke[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function je(e,o,t,a,c,d=!1){let b;e===0?b={x:a,y:o,z:t}:e===1?b={x:o,y:a,z:t}:b={x:o,y:t,z:a};let r=ne(b,c);return d?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var Ye=Math.PI/6,uo=Math.cos(Ye),bo=Math.sin(Ye),Me=!1;function Ze(e){Me=e}var ye=0,ve=0;function Ie(e,o){ye=e,ve=o}function He(){return{yaw:ye,pitch:ve}}function P(e,o,t){let a=e;if(ye!==0||ve!==0){let c={x:e.x-.5,y:e.y-.5,z:e.z-.5},d=Math.cos(ye),b=Math.sin(ye),r=Math.cos(ve),n=Math.sin(ve),f=c.x*d+c.z*b,m=c.y,h=-c.x*b+c.z*d,C=m*r-h*n,k=m*n+h*r;a={x:f+.5,y:C+.5,z:k+.5}}return{x:t.x+(a.y-a.x)*uo*o,y:t.y+a.z*o-(a.x+a.y)*bo*o}}function fo(e){let{x:o,y:t,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:a},{x:o,y:t,z:0},{x:o,y:0,z:a},{x:0,y:t,z:a},{x:o,y:t,z:a}]}var J=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],ho=64,Je={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Qe(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(t,t),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function qe(e,o,t,a,c,d,b=!0,r=null,n=null){let{ctx:f,scale:m,center:h,width:C,height:k}=e;f.save(),f.clearRect(0,0,C,k);let E=fo(o).map(u=>P(u,m,h));if(mo(f,m,h,c),f.save(),f.shadowColor="rgba(0,0,0,0.35)",f.shadowBlur=8,f.shadowOffsetX=0,f.shadowOffsetY=2,go(f,E,o,c),f.restore(),b&&yo(f,c,m,h),a>=0){let u=ne(t,c),S=Me?{r:255-u.r,g:255-u.g,b:255-u.b}:u,v=P(t,m,h);r&&r.active&&vo(f,v,r.rgb,r.alpha),Mo(f,v,S)}f.restore()}var xo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function mo(e,o,t,a){let c=P({x:0,y:0,z:0},o,t),d=[P({x:1,y:0,z:0},o,t),P({x:0,y:1,z:0},o,t),P({x:0,y:0,z:1},o,t)],b=xo[a];e.lineWidth=1.5;for(let r=0;r<d.length;r++)e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(d[r].x,d[r].y),e.strokeStyle=b[r],e.stroke()}function go(e,o,t,a){let c=[t.x,t.y,t.z];for(let d=0;d<J.length;d++){let b=J[d],r=c[b.fixedAxis],n=c[b.uAxis],f=c[b.vAxis];if(n<.002&&f<.002)continue;let m=b.quad.map(h=>o[h]);po(e,m,b.fixedAxis,r,n,f,a)}}function po(e,o,t,a,c,d,b){let r=ho,n=document.createElement("canvas");n.width=r,n.height=r;let f=n.getContext("2d"),m=f.createImageData(r,r),h=m.data;for(let Y=0;Y<r;Y++)for(let ee=0;ee<r;ee++){let U=ee/(r-1)*c,he=Y/(r-1)*d,X=je(t,U,he,a,b,Me),B=(Y*r+ee)*4;h[B]=X.r,h[B+1]=X.g,h[B+2]=X.b,h[B+3]=255}f.putImageData(m,0,0);let C=o[0],k=o[1],E=o[2],u=o[3],S=k.x-C.x,v=k.y-C.y,R=u.x-C.x,H=u.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(k.x,k.y),e.lineTo(E.x,E.y),e.lineTo(u.x,u.y),e.closePath(),e.clip();let p=2/r,w=C.x-S*p-R*p,G=C.y-v*p-H*p,D=1+2*p,F=1+2*p;e.transform(S*D/r,v*D/r,R*F/r,H*F/r,w,G),e.imageSmoothingEnabled=!0,e.drawImage(n,0,0),e.restore()}function yo(e,o,t,a){let c=Ae[o],d=Me?[P({x:0,y:1,z:1},t,a),P({x:1,y:0,z:1},t,a),P({x:1,y:1,z:0},t,a)]:[P({x:1,y:0,z:0},t,a),P({x:0,y:1,z:0},t,a),P({x:0,y:0,z:1},t,a)],b=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let r=0;r<3;r++){let n=d[r].x+b[r].x,f=d[r].y+b[r].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(c[r],n,f)}e.globalAlpha=1,e.restore()}var q=30,ie=13;function vo(e,o,t,a){let c=(q+ie)/2,d=5,b=Math.floor(o.x/d)*d,r=Math.floor(o.y/d)*d,n=q*2+d*2,f=Math.max(0,Math.min(1,a));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let S=-1;S*d<=n;S++)for(let v=-1;v*d<=n;v++)e.fillStyle=(S+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(b+S*d,r+v*d,d,d);let m="rgba("+t.r+","+t.g+","+t.b+",0)",h="rgba("+t.r+","+t.g+","+t.b+",1)",C=e;if(typeof C.createConicGradient=="function"){let S=C.createConicGradient(-Math.PI/2,o.x,o.y);S.addColorStop(0,m),S.addColorStop(1,h),e.fillStyle=S,e.fillRect(b-q,r-q,n,n)}else for(let v=0;v<36;v++){let R=-Math.PI/2+v/36*Math.PI*2,H=-Math.PI/2+(v+1)/36*Math.PI*2,p=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(R)*ie,o.y+Math.sin(R)*ie),e.arc(o.x,o.y,q,R,H),e.arc(o.x,o.y,ie,H,R,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+p.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=f*Math.PI*2,E=o.x+c*Math.sin(k),u=o.y-c*Math.cos(k);e.beginPath(),e.arc(E,u,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Mo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function eo(e,o,t,a){let c=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return P(c[e],t,a)}function Ee(){let e={x:0,y:0};return[P({x:1,y:0,z:0},1,e),P({x:0,y:1,z:0},1,e),P({x:0,y:0,z:1},1,e)].map(t=>{let a=Math.sqrt(t.x*t.x+t.y*t.y);return a>0?{x:t.x/a,y:t.y/a}:{x:0,y:0}})}function fe(e,o,t,a,c){let d=J[e],b=[t.x,t.y,t.z],r=b[d.uAxis],n=b[d.vAxis];if(r<.002||n<.002)return null;let f={x:0,y:0,z:0},m=["x","y","z"];f[m[d.fixedAxis]]=b[d.fixedAxis];let h={...f};h[m[d.uAxis]]=r;let C={...f};C[m[d.vAxis]]=n;let k=P(f,a,c),E=P(h,a,c),u=P(C,a,c),S=E.x-k.x,v=E.y-k.y,R=u.x-k.x,H=u.y-k.y,p=S*H-v*R;if(Math.abs(p)<1e-6)return null;let w=o.x-k.x,G=o.y-k.y,D=(w*H-G*R)/p,F=(G*S-w*v)/p;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function oo(e,o,t,a,c){let d=J[e],b=[t.x,t.y,t.z],r=b[d.uAxis],n=b[d.vAxis];if(r<.002||n<.002)return null;let f={x:0,y:0,z:0},m=["x","y","z"];f[m[d.fixedAxis]]=b[d.fixedAxis];let h={...f};h[m[d.uAxis]]=r;let C={...f};C[m[d.vAxis]]=n;let k=P(f,a,c),E=P(h,a,c),u=P(C,a,c),S=E.x-k.x,v=E.y-k.y,R=u.x-k.x,H=u.y-k.y,p=S*H-v*R;if(Math.abs(p)<1e-6)return null;let w=o.x-k.x,G=o.y-k.y,D=(w*H-G*R)/p,F=(G*S-w*v)/p;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var to=22;function no(e,o,t,a,c,d,b,r,n,f,m,h,C,k,E){let u={...Je};function S(i){let l=e.getBoundingClientRect();return{x:i.clientX-l.left,y:i.clientY-l.top}}let v=!1,R=!1,H=!1,p=!1,w=null,G=600,D=null;function F(){Y(),D=setTimeout(ee,G)}function Y(){D!==null&&(clearTimeout(D),D=null)}function ee(){D=null,de(),g(),p=!0,u.viewRotating=!0,u.ringAlpha=Math.min(1,u.ringAlpha+.3),w=null,n()}let U=9,he=1e3,X=null;function B(){Q(),X=setTimeout(xe,he)}function Q(){X!==null&&(clearTimeout(X),X=null),Y()}function xe(){X=null,u.alphaMode=!0,g(),de(),n()}function oe(i){let l=C();return Math.hypot(i.x-l.x,i.y-l.y)}function Re(i){let l=C();return(Math.atan2(i.x-l.x,-(i.y-l.y))+Math.PI*2)%(Math.PI*2)}function se(i){m(Re(i)/(Math.PI*2)),n()}function me(i){let l=oe(i);return l>=ie-4&&l<=q+6}function j(i){let l=o(),A=b(),M=r();for(let y=0;y<3;y++){let L=eo(y,l,A,M),I=i.x-L.x,O=i.y-L.y;if(I*I+O*O<=to*to)return y}return-1}function $(i){let l=o(),A=b(),M=r();for(let y=J.length-1;y>=0;y--){let L=fe(y,i,l,A,M);if(L)return{faceIndex:y,...L}}return null}let N=-1,Z={x:0,y:0},Ce=0;function le(i,l){N=i,Z=l,Ce=o()[["x","y","z"][i]],u.draggingAxisHandle=i,e.style.cursor="grabbing",n()}function s(i){if(Q(),N<0)return;let l=i.x-Z.x,A=i.y-Z.y,y=Ee()[N],L=b(),O=(l*y.x+A*y.y)/L,K=Math.max(0,Math.min(1,Ce+O)),W=o(),_=["x","y","z"],be={...W,[_[N]]:K};t(be);let ge=a(),Ue=d(),Ne=Ue>=0?J[Ue]:null,Ve={...ge};Ne&&N===Ne.fixedAxis?Ve[_[N]]=K:Ve[_[N]]=Math.min(ge[_[N]],K),c(Ve,d()),n()}function g(){N=-1,u.draggingAxisHandle=-1}let x=-1,T=null,z=null,V=!1;function ce(i,l,A,M){x=i,u.draggingFace=i,T=null,z=null,V=!1,M&&(V=!0,z={s:l,t:A}),ke(i,l,A),e.style.cursor="crosshair",n()}function re(i,l,A){if(Q(),x<0)return;let M=o(),y=b(),L=r(),I=fe(x,i,M,y,L),O=x;if(!I&&!A){for(let _=J.length-1;_>=0;_--)if(_!==x&&(I=fe(_,i,M,y,L),I)){O=_;break}}if(!I&&A&&(I=oo(x,i,M,y,L),O=x),!I){n();return}O!==x&&(x=O,u.draggingFace=O,T=null,V=!1,z=null);let{s:K,t:W}=I;if(l&&z){if(V){let _=Math.abs(K-z.s),be=Math.abs(W-z.t),ge=.02;(_>ge||be>ge)&&(T=_>=be?"u":"v",V=!1)}T==="u"?W=z.t:T==="v"&&(K=z.s)}else l||(T=null,V=!1,z=null);ke(O,K,W),n()}function ke(i,l,A){let M=J[i],y=o(),L=["x","y","z"],I={...a()};I[L[M.uAxis]]=l*y[L[M.uAxis]],I[L[M.vAxis]]=A*y[L[M.vAxis]],I[L[M.fixedAxis]]=y[L[M.fixedAxis]],c(I,i)}function de(){x=-1,u.draggingFace=-1,T=null,V=!1,z=null}function te(i){R=!0;let l=S(i);if(f()){if(u.alphaMode){if(oe(l)<=U){u.alphaMode=!1,n();return}if(me(l)){i.preventDefault(),v=!0,se(l);return}u.alphaMode=!1,n();return}oe(l)<=U&&B()}let A=j(l);if(A>=0){i.preventDefault(),le(A,l);return}let M=$(l);if(M){i.preventDefault(),ce(M.faceIndex,M.s,M.t,i.shiftKey),F();return}let y=r();Math.hypot(l.x-y.x,l.y-y.y)>b()+20&&(i.preventDefault(),p=!0,w=l,u.viewRotating=!0,u.ringAlpha=Math.min(1,u.ringAlpha+.25),n())}function De(i){let l=S(i);if(v){i.preventDefault(),se(l);return}if(p){if(i.preventDefault(),!w){w=l;return}let I=l.x-w.x,O=l.y-w.y,K=He();Ie(Math.max(-60,Math.min(60,K.yaw+I*.12)),Math.max(-60,Math.min(60,K.pitch+O*.12))),I!==0&&k(Math.max(0,Math.min(1,E()+I*.002))),u.ringAlpha=Math.min(1,u.ringAlpha+.12),w=l,n();return}if(R&&u.alphaMode&&me(l)){i.preventDefault(),v=!0,se(l);return}if(N>=0){i.preventDefault(),s(l);return}if(x>=0){i.preventDefault(),re(l,i.shiftKey,i.altKey);return}let A=j(l),M=$(l),y=A,L=A>=0?-1:M?M.faceIndex:-1;(y!==u.hoveredAxisHandle||L!==u.hoveredFace)&&(u.hoveredAxisHandle=y,u.hoveredFace=L,e.style.cursor=y>=0?"grab":L>=0?"crosshair":"default",n())}function Fe(i){Q(),R=!1,v=!1,p&&(p=!1,u.viewRotating=!1,u.ringAlpha=0,w=null,n());let l=N>=0||x>=0;g(),de(),l&&(u.hoveredAxisHandle=-1,u.hoveredFace=-1,e.style.cursor="default",n())}function Be(i){if(i.touches.length!==1)return;H=!0;let l=S(i.touches[0]);if(f()){if(u.alphaMode){if(oe(l)<=U){u.alphaMode=!1,n();return}if(me(l)){i.preventDefault(),v=!0,se(l);return}u.alphaMode=!1,n();return}oe(l)<=U&&B()}let A=j(l);if(A>=0){i.preventDefault(),le(A,l);return}let M=$(l);if(M){i.preventDefault(),ce(M.faceIndex,M.s,M.t,!1),F();return}let y=r();Math.hypot(l.x-y.x,l.y-y.y)>b()+20&&(i.preventDefault(),p=!0,w=l,u.viewRotating=!0,u.ringAlpha=Math.min(1,u.ringAlpha+.25),n())}function Oe(i){if(i.touches.length!==1)return;let l=S(i.touches[0]);if(v)i.preventDefault(),se(l);else if(H&&u.alphaMode&&me(l))i.preventDefault(),v=!0,se(l);else if(N>=0)i.preventDefault(),s(l);else if(p){if(i.preventDefault(),!w){w=l;return}let A=l.x-w.x,M=l.y-w.y,y=He();Ie(Math.max(-60,Math.min(60,y.yaw+A*.12)),Math.max(-60,Math.min(60,y.pitch+M*.12))),A!==0&&k(Math.max(0,Math.min(1,E()+A*.002))),u.ringAlpha=Math.min(1,u.ringAlpha+.12),w=l,n()}else x>=0&&(i.preventDefault(),re(l,!1,!1))}function _e(i){Q(),H=!1,v=!1,p&&(p=!1,u.viewRotating=!1,u.ringAlpha=0,w=null,n()),g(),de(),n()}function Ge(i){if(u.alphaMode){if(i.key==="Escape"){u.alphaMode=!1,n();return}if(i.key==="ArrowUp"||i.key==="ArrowRight"){i.preventDefault(),m(Math.min(1,h()+(i.shiftKey?.08:.02))),n();return}if(i.key==="ArrowDown"||i.key==="ArrowLeft"){i.preventDefault(),m(Math.max(0,h()-(i.shiftKey?.08:.02))),n();return}}let l=i.shiftKey?.04:.004,A=a(),M=o(),y=Ee(),L=0,I=0;switch(i.key){case"ArrowRight":L=1;break;case"ArrowLeft":L=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}i.preventDefault();let O={...A},K=["x","y","z"];for(let W=0;W<3;W++){let _=L*y[W].x+I*y[W].y;if(Math.abs(_)>.3){let be=A[K[W]]+l*Math.sign(_);O[K[W]]=Math.max(0,Math.min(M[K[W]],be))}}c(O,d()),n()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",De),window.addEventListener("mouseup",Fe),e.addEventListener("touchstart",Be,{passive:!1}),e.addEventListener("touchmove",Oe,{passive:!1}),e.addEventListener("touchend",_e),e.addEventListener("keydown",Ge),e.setAttribute("tabindex","0");function io(){Q(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",Fe),e.removeEventListener("touchstart",Be),e.removeEventListener("touchmove",Oe),e.removeEventListener("touchend",_e),e.removeEventListener("keydown",Ge)}return{state:u,destroy:io}}var ro=`.box-picker {\r
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
`;var Go=Ao,ao=!1;function ko(){if(ao||typeof document>"u")return;ao=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ro,document.head.appendChild(e)}function Ao(e,o={}){let t=o.size??300,a=o.controls??!0,c=o.showInputs??!1,d=o.showModeToggle??!1,b=o.showCorners??!1,r={mode:()=>n,switchMode:s=>ee(s),onHexInput:s=>{let g=Pe(s);g?(h=ue(F?{r:255-g.r,g:255-g.g,b:255-g.b}:g,n),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)},Z(),$(),B()):$()},onChannelInput:(s,g,x)=>{let T=Math.max(0,Math.min(x,g)),z=["x","y","z"],V=T/x;if(F){let ce={...h,[z[s]]:V},re=ne(ce,n);h=ue({r:255-re.r,g:255-re.g,b:255-re.b},n)}else h={...h,[z[s]]:V};V>m[z[s]]&&(m={...m,[z[s]]:V}),Z(),$(),B()},getRgbForCopy:()=>ne(h,n),onRandom:s=>le(s),onReset:()=>le({r:0,g:0,b:0})},n=o.mode??"rgb",f=o.initialColor?ue(o.initialColor,n):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},h={...f},C=0,k=()=>o.alpha!==void 0,E=Math.max(0,Math.min(1,o.alpha??1));function u(s){let g=Math.max(0,Math.min(1,s));g!==E&&(E=g,Z(),$(),B())}function S(s){let g=j(),x=ae(g);x.s=Math.max(0,Math.min(100,s*100));let T=we(x);le(F?{r:255-T.r,g:255-T.g,b:255-T.b}:T)}let v=new Set;ko();let R=document.createElement("div");R.className="box-picker";let H=document.createElement("canvas");H.style.cursor="grab",R.appendChild(H);let p=Qe(H,t),w=null,G=document.createElement("div");G.className="box-picker-controls",w=document.createElement("div"),w.className="box-picker-swatch",G.appendChild(w),R.appendChild(G),(c||d||b)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(G,r,{showInputs:c,showModeToggle:d,showCorners:b})}).catch(()=>{}),e.appendChild(R);let D=no(H,()=>m,s=>{m=s},()=>h,(s,g)=>{h=s,C=g,Z(),$()},()=>C,()=>p.scale,()=>p.center,B,k,u,()=>E,()=>P(h,p.scale,p.center),S,()=>ae(j()).s/100),F=!1,Y=!0;H.addEventListener("mouseenter",()=>{Y=!0,B()}),H.addEventListener("mouseleave",()=>{Y=!1,B()}),H.addEventListener("dblclick",()=>{F=!F,Ze(F),Z(),$(),B()});function ee(s){if(s===n)return;let g=ne(h,n),x={...h},T={...m};n=s;let z=ue(g,n),V={x:1,y:1,z:1};h=z,m=V,he(x,z,T,V,300),$()}let U=null;function he(s,g,x,T,z){U!==null&&cancelAnimationFrame(U);let V=performance.now();function ce(re){let ke=re-V,de=Math.min(1,ke/z),te=1-Math.pow(1-de,3);h={x:s.x+(g.x-s.x)*te,y:s.y+(g.y-s.y)*te,z:s.z+(g.z-s.z)*te},m={x:x.x+(T.x-x.x)*te,y:x.y+(T.y-x.y)*te,z:x.z+(T.z-x.z)*te},Q(),Z(),de<1?U=requestAnimationFrame(ce):U=null}U=requestAnimationFrame(ce)}let X=!1;function B(){X||(X=!0,requestAnimationFrame(()=>{X=!1,Q()}))}function Q(){qe(p,m,h,C,n,D.state,Y,{active:D.state.alphaMode,alpha:E,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:ae(j()).s/100,rgb:we({h:ae(j()).h,s:100,b:100})})}function xe(s,g,x){return Math.round(s+(g-s)*x)}function oe(s,g){let x=g>0?255:0,T=Math.abs(g);return pe({r:xe(s.r,x,T),g:xe(s.g,x,T),b:xe(s.b,x,T)})}function Re(s,g){let x=Pe(g)||{r:128,g:128,b:128},T=oe(x,.35),z=oe(x,0),V=oe(x,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${T}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${z}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${V}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function se(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function me(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function j(){let s=ne(h,n);return F?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function $(){if(!a)return;let s=j(),g=pe(s);w&&Re(w,g);let x=R.querySelector(".box-picker-hex");x&&(x.value=g),N(),R._updateModeButtons&&R._updateModeButtons()}function N(){if(!a)return;let s=Ae[n],g=F?ue(j(),n):h,x=We(g,n),T=R.querySelectorAll(".box-picker-channel input"),z=R.querySelectorAll(".box-picker-channel label");for(let V=0;V<T.length;V++)z[V].textContent=s[V],z[V].style.color="",z[V].style.textShadow="none",T[V].value=String(x[V])}function Z(){let s=j(),g={rgb:s,hsb:ae(s),oklch:Te(s),hex:pe(s),alpha:E};for(let x of v)x(g)}function Ce(){let s=ne(h,n);return{rgb:s,hsb:ae(s),oklch:Te(s),hex:pe(s)}}$(),Q();let le=s=>{h=ue(s,n),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)};let g=P(h,p.scale,p.center);C=-1;for(let x=J.length-1;x>=0;x--)if(fe(x,g,m,p.scale,p.center)){C=x;break}Z(),$(),B()};return{getColor:Ce,getMode:()=>n,setColor:le,setAlpha:u,getAlpha:()=>E,setMode(s){ee(s)},on(s,g){v.add(g)},off(s,g){v.delete(g)},destroy(){D.destroy(),U!==null&&cancelAnimationFrame(U),e.removeChild(R)}}}export{Ao as createBoxColorPicker,Go as createColorPicker,Ze as setBoxInvert};
