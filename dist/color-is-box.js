var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ke={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ae(e){let o=e.r/255,n=e.g/255,t=e.b/255,d=Math.max(o,n,t),l=Math.min(o,n,t),f=d-l,a=0;f!==0&&(d===o?a=((n-t)/f+6)%6:d===n?a=(t-o)/f+2:a=(o-n)/f+4,a*=60);let r=d===0?0:f/d*100,u=d*100;return{h:a,s:r,b:u}}function we(e){let o=e.h,n=e.s/100,t=e.b/100,d=t*n,l=d*(1-Math.abs(o/60%2-1)),f=t-d,a,r,u;return o<60?(a=d,r=l,u=0):o<120?(a=l,r=d,u=0):o<180?(a=0,r=d,u=l):o<240?(a=0,r=l,u=d):o<300?(a=l,r=0,u=d):(a=d,r=0,u=l),{r:Math.round((a+f)*255),g:Math.round((r+f)*255),b:Math.round((u+f)*255)}}function ze(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Se(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function so(e){let o=ze(e.r/255),n=ze(e.g/255),t=ze(e.b/255),d=.4122214708*o+.5363325363*n+.0514459929*t,l=.2119034982*o+.6806995451*n+.1073969566*t,f=.0883024619*o+.2817188376*n+.6299787005*t,a=Math.cbrt(d),r=Math.cbrt(l),u=Math.cbrt(f);return{L:.2104542553*a+.793617785*r-.0040720468*u,a:1.9779984951*a-2.428592205*r+.4505937099*u,b:.0259040371*a+.7827717662*r-.808675766*u}}function lo(e,o,n){let t=e+.3963377774*o+.2158037573*n,d=e-.1055613458*o-.0638541728*n,l=e-.0894841775*o-1.291485548*n,f=t*t*t,a=d*d*d,r=l*l*l,u=4.0767416621*f-3.3077115913*a+.2309699292*r,m=-1.2684380046*f+2.6097574011*a-.3413193965*r,h=-.0041960863*f-.7034186147*a+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Se(u)))*255),g:Math.round(Math.max(0,Math.min(1,Se(m)))*255),b:Math.round(Math.max(0,Math.min(1,Se(h)))*255)}}function Te(e){let o=so(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Pe(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return lo(e.l,n,t)}function co(e,o,n){let t=Pe({l:e,c:o,h:n});if(Xe(t))return{l:e,c:o,h:n};let d=0,l=o;for(let f=0;f<20;f++){let a=(d+l)/2;t=Pe({l:e,c:a,h:n}),Xe(t)?d=a:l=a}return{l:e,c:d,h:n}}function Xe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ve(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Le(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var $e=.4;function te(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return we({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*$e,d=e.z*359,l=co(n,t,d);return Pe(l)}}function fe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ae(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Te(e);return{x:n.l,y:Math.min(n.c/$e,1),z:n.h/359}}}function We(e,o){let n=Ke[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function je(e,o,n,t,d,l=!1){let f;e===0?f={x:t,y:o,z:n}:e===1?f={x:o,y:t,z:n}:f={x:o,y:n,z:t};let a=te(f,d);return l?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Ye=Math.PI/6,uo=Math.cos(Ye),bo=Math.sin(Ye),Me=!1;function Ze(e){Me=e}var se=0,le=0;function Ie(e,o){se=e,le=o}function He(){return{yaw:se,pitch:le}}function fo(e){if(se===0&&le===0)return e;let o=Math.cos(se),n=Math.sin(se),t=Math.cos(le),d=Math.sin(le),l=e.x*o+e.z*n,f=e.y,a=-e.x*n+e.z*o,r=f*t-a*d,u=f*d+a*t;return{x:l,y:r,z:u}}function ho(e){if(se===0&&le===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(se),t=Math.sin(se),d=Math.cos(le),l=Math.sin(le),f=o.x*n+o.z*t,a=o.y,r=-o.x*t+o.z*n,u=a*d-r*l,m=a*l+r*d;return{x:f+.5,y:u+.5,z:m+.5}}function I(e,o,n){let t=ho(e);return{x:n.x+(t.y-t.x)*uo*o,y:n.y+t.z*o-(t.x+t.y)*bo*o}}function xo(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var J=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],mo=64,Je={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Qe(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function qe(e,o,n,t,d,l,f=!0,a=null,r=null){let{ctx:u,scale:m,center:h,width:A,height:k}=e;u.save(),u.clearRect(0,0,A,k);let L=xo(o),b=L.map(p=>I(p,m,h));if(u.save(),u.globalAlpha=l.viewRotating?.32:1,po(u,m,h,d),u.restore(),u.save(),u.shadowColor="rgba(0,0,0,0.35)",u.shadowBlur=8,u.shadowOffsetX=0,u.shadowOffsetY=2,yo(u,b,L,o,d,l.viewRotating),u.restore(),f&&(u.save(),u.globalAlpha=l.viewRotating?.5:1,Mo(u,d,m,h),u.restore()),t>=0){let p=te(n,d),C=Me?{r:255-p.r,g:255-p.g,b:255-p.b}:p,w=I(n,m,h);a&&a.active&&Co(u,w,a.rgb,a.alpha),ko(u,w,C)}u.restore()}var go={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function po(e,o,n,t){let d=I({x:0,y:0,z:0},o,n),l=[I({x:1,y:0,z:0},o,n),I({x:0,y:1,z:0},o,n),I({x:0,y:0,z:1},o,n)],f=go[t];e.lineWidth=1.5;for(let a=0;a<l.length;a++)e.beginPath(),e.moveTo(d.x,d.y),e.lineTo(l[a].x,l[a].y),e.strokeStyle=f[a],e.stroke()}function yo(e,o,n,t,d,l){let f=[t.x,t.y,t.z],a=l?.7:1;for(let r=0;r<J.length;r++){let u=J[r],m=f[u.fixedAxis],h=f[u.uAxis],A=f[u.vAxis];if(h<.002&&A<.002)continue;let k=fo(u.normal),L=k.x+k.y+k.z>0,b=u.quad.map(p=>o[p]);if(L)e.save(),e.globalAlpha=a,vo(e,b,u.fixedAxis,m,h,A,d),e.restore();else{e.save(),e.globalAlpha=l?.14:0,e.beginPath(),e.moveTo(b[0].x,b[0].y);for(let p=1;p<4;p++)e.lineTo(b[p].x,b[p].y);e.closePath(),e.fillStyle="#ffffff",e.fill(),e.restore()}}}function vo(e,o,n,t,d,l,f){let a=mo,r=document.createElement("canvas");r.width=a,r.height=a;let u=r.getContext("2d"),m=u.createImageData(a,a),h=m.data;for(let Y=0;Y<a;Y++)for(let ee=0;ee<a;ee++){let U=ee/(a-1)*d,me=Y/(a-1)*l,X=je(n,U,me,t,f,Me),B=(Y*a+ee)*4;h[B]=X.r,h[B+1]=X.g,h[B+2]=X.b,h[B+3]=255}u.putImageData(m,0,0);let A=o[0],k=o[1],L=o[2],b=o[3],p=k.x-A.x,C=k.y-A.y,w=b.x-A.x,E=b.y-A.y;e.save(),e.beginPath(),e.moveTo(A.x,A.y),e.lineTo(k.x,k.y),e.lineTo(L.x,L.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let y=2/a,V=A.x-p*y-w*y,G=A.y-C*y-E*y,D=1+2*y,F=1+2*y;e.transform(p*D/a,C*D/a,w*F/a,E*F/a,V,G),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function Mo(e,o,n,t){let d=Ae[o],l=Me?[I({x:0,y:1,z:1},n,t),I({x:1,y:0,z:1},n,t),I({x:1,y:1,z:0},n,t)]:[I({x:1,y:0,z:0},n,t),I({x:0,y:1,z:0},n,t),I({x:0,y:0,z:1},n,t)],f=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let r=l[a].x+f[a].x,u=l[a].y+f[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(d[a],r,u)}e.globalAlpha=1,e.restore()}var q=30,ie=13;function Co(e,o,n,t){let d=(q+ie)/2,l=5,f=Math.floor(o.x/l)*l,a=Math.floor(o.y/l)*l,r=q*2+l*2,u=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let p=-1;p*l<=r;p++)for(let C=-1;C*l<=r;C++)e.fillStyle=(p+C)%2===0?"#ffffff":"#d9d9d9",e.fillRect(f+p*l,a+C*l,l,l);let m="rgba("+n.r+","+n.g+","+n.b+",0)",h="rgba("+n.r+","+n.g+","+n.b+",1)",A=e;if(typeof A.createConicGradient=="function"){let p=A.createConicGradient(-Math.PI/2,o.x,o.y);p.addColorStop(0,m),p.addColorStop(1,h),e.fillStyle=p,e.fillRect(f-q,a-q,r,r)}else for(let C=0;C<36;C++){let w=-Math.PI/2+C/36*Math.PI*2,E=-Math.PI/2+(C+1)/36*Math.PI*2,y=(C+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(w)*ie,o.y+Math.sin(w)*ie),e.arc(o.x,o.y,q,w,E),e.arc(o.x,o.y,ie,E,w,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+y.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=u*Math.PI*2,L=o.x+d*Math.sin(k),b=o.y-d*Math.cos(k);e.beginPath(),e.arc(L,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function ko(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function eo(e,o,n,t){let d=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return I(d[e],n,t)}function Ee(){let e={x:0,y:0};return[I({x:1,y:0,z:0},1,e),I({x:0,y:1,z:0},1,e),I({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function xe(e,o,n,t,d){let l=J[e],f=[n.x,n.y,n.z],a=f[l.uAxis],r=f[l.vAxis];if(a<.002||r<.002)return null;let u={x:0,y:0,z:0},m=["x","y","z"];u[m[l.fixedAxis]]=f[l.fixedAxis];let h={...u};h[m[l.uAxis]]=a;let A={...u};A[m[l.vAxis]]=r;let k=I(u,t,d),L=I(h,t,d),b=I(A,t,d),p=L.x-k.x,C=L.y-k.y,w=b.x-k.x,E=b.y-k.y,y=p*E-C*w;if(Math.abs(y)<1e-6)return null;let V=o.x-k.x,G=o.y-k.y,D=(V*E-G*w)/y,F=(G*p-V*C)/y;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function oo(e,o,n,t,d){let l=J[e],f=[n.x,n.y,n.z],a=f[l.uAxis],r=f[l.vAxis];if(a<.002||r<.002)return null;let u={x:0,y:0,z:0},m=["x","y","z"];u[m[l.fixedAxis]]=f[l.fixedAxis];let h={...u};h[m[l.uAxis]]=a;let A={...u};A[m[l.vAxis]]=r;let k=I(u,t,d),L=I(h,t,d),b=I(A,t,d),p=L.x-k.x,C=L.y-k.y,w=b.x-k.x,E=b.y-k.y,y=p*E-C*w;if(Math.abs(y)<1e-6)return null;let V=o.x-k.x,G=o.y-k.y,D=(V*E-G*w)/y,F=(G*p-V*C)/y;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var no=22;function to(e,o,n,t,d,l,f,a,r,u,m,h,A,k,L){let b={...Je};function p(i){let c=e.getBoundingClientRect();return{x:i.clientX-c.left,y:i.clientY-c.top}}let C=!1,w=!1,E=!1,y=!1,V=null,G=600,D=null;function F(){Y(),D=setTimeout(ee,G)}function Y(){D!==null&&(clearTimeout(D),D=null)}function ee(){D=null,b.alphaMode=!1,be(),g(),y=!0,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.3),V=null,r()}let U=9,me=1e3,X=null;function B(){Q(),X=setTimeout(ge,me)}function Q(){X!==null&&(clearTimeout(X),X=null),Y()}function ge(){X=null,b.alphaMode=!0,g(),be(),r()}function oe(i){let c=A();return Math.hypot(i.x-c.x,i.y-c.y)}function Ve(i){let c=A();return(Math.atan2(i.x-c.x,-(i.y-c.y))+Math.PI*2)%(Math.PI*2)}function ce(i){m(Ve(i)/(Math.PI*2)),r()}function pe(i){let c=oe(i);return c>=ie-4&&c<=q+6}function j(i){let c=o(),T=f(),M=a();for(let v=0;v<3;v++){let P=eo(v,c,T,M),H=i.x-P.x,O=i.y-P.y;if(H*H+O*O<=no*no)return v}return-1}function $(i){let c=o(),T=f(),M=a();for(let v=J.length-1;v>=0;v--){let P=xe(v,i,c,T,M);if(P)return{faceIndex:v,...P}}return null}let N=-1,Z={x:0,y:0},Ce=0;function de(i,c){N=i,Z=c,Ce=o()[["x","y","z"][i]],b.draggingAxisHandle=i,e.style.cursor="grabbing",r()}function s(i){if(Q(),N<0)return;let c=i.x-Z.x,T=i.y-Z.y,v=Ee()[N],P=f(),O=(c*v.x+T*v.y)/P,K=Math.max(0,Math.min(1,Ce+O)),W=o(),_=["x","y","z"],he={...W,[_[N]]:K};n(he);let ye=t(),Ue=l(),Ne=Ue>=0?J[Ue]:null,Re={...ye};Ne&&N===Ne.fixedAxis?Re[_[N]]=K:Re[_[N]]=Math.min(ye[_[N]],K),d(Re,l()),r()}function g(){N=-1,b.draggingAxisHandle=-1}let x=-1,R=null,S=null,z=!1;function ue(i,c,T,M){x=i,b.draggingFace=i,R=null,S=null,z=!1,M&&(z=!0,S={s:c,t:T}),ke(i,c,T),e.style.cursor="crosshair",r()}function re(i,c,T){if(Q(),x<0)return;let M=o(),v=f(),P=a(),H=xe(x,i,M,v,P),O=x;if(!H&&!T){for(let _=J.length-1;_>=0;_--)if(_!==x&&(H=xe(_,i,M,v,P),H)){O=_;break}}if(!H&&T&&(H=oo(x,i,M,v,P),O=x),!H){r();return}O!==x&&(x=O,b.draggingFace=O,R=null,z=!1,S=null);let{s:K,t:W}=H;if(c&&S){if(z){let _=Math.abs(K-S.s),he=Math.abs(W-S.t),ye=.02;(_>ye||he>ye)&&(R=_>=he?"u":"v",z=!1)}R==="u"?W=S.t:R==="v"&&(K=S.s)}else c||(R=null,z=!1,S=null);ke(O,K,W),r()}function ke(i,c,T){let M=J[i],v=o(),P=["x","y","z"],H={...t()};H[P[M.uAxis]]=c*v[P[M.uAxis]],H[P[M.vAxis]]=T*v[P[M.vAxis]],H[P[M.fixedAxis]]=v[P[M.fixedAxis]],d(H,i)}function be(){x=-1,b.draggingFace=-1,R=null,z=!1,S=null}function ne(i){w=!0;let c=p(i);if(u()){if(b.alphaMode){if(oe(c)<=U){b.alphaMode=!1,r();return}if(pe(c)){i.preventDefault(),C=!0,ce(c);return}b.alphaMode=!1,r();return}oe(c)<=U&&B()}let T=j(c);if(T>=0){i.preventDefault(),de(T,c);return}let M=$(c);if(M){i.preventDefault(),ue(M.faceIndex,M.s,M.t,i.shiftKey),F();return}let v=a();Math.hypot(c.x-v.x,c.y-v.y)>f()+20&&(i.preventDefault(),y=!0,V=c,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),r())}function De(i){let c=p(i);if(C){i.preventDefault(),ce(c);return}if(y){if(i.preventDefault(),!V){V=c;return}let H=c.x-V.x,O=c.y-V.y,K=He();Ie(Math.max(-60,Math.min(60,K.yaw+H*.12)),Math.max(-60,Math.min(60,K.pitch+O*.12))),H!==0&&k(Math.max(0,Math.min(1,L()+H*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),V=c,r();return}if(w&&b.alphaMode&&pe(c)){i.preventDefault(),C=!0,ce(c);return}if(N>=0){i.preventDefault(),s(c);return}if(x>=0){i.preventDefault(),re(c,i.shiftKey,i.altKey);return}let T=j(c),M=$(c),v=T,P=T>=0?-1:M?M.faceIndex:-1;(v!==b.hoveredAxisHandle||P!==b.hoveredFace)&&(b.hoveredAxisHandle=v,b.hoveredFace=P,e.style.cursor=v>=0?"grab":P>=0?"crosshair":"default",r())}function Fe(i){Q(),w=!1,C=!1,y&&(y=!1,b.viewRotating=!1,b.ringAlpha=0,V=null,r());let c=N>=0||x>=0;g(),be(),c&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",r())}function Be(i){if(i.touches.length!==1)return;E=!0;let c=p(i.touches[0]);if(u()){if(b.alphaMode){if(oe(c)<=U){b.alphaMode=!1,r();return}if(pe(c)){i.preventDefault(),C=!0,ce(c);return}b.alphaMode=!1,r();return}oe(c)<=U&&B()}let T=j(c);if(T>=0){i.preventDefault(),de(T,c);return}let M=$(c);if(M){i.preventDefault(),ue(M.faceIndex,M.s,M.t,!1),F();return}let v=a();Math.hypot(c.x-v.x,c.y-v.y)>f()+20&&(i.preventDefault(),y=!0,V=c,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),r())}function Oe(i){if(i.touches.length!==1)return;let c=p(i.touches[0]);if(C)i.preventDefault(),ce(c);else if(E&&b.alphaMode&&pe(c))i.preventDefault(),C=!0,ce(c);else if(N>=0)i.preventDefault(),s(c);else if(y){if(i.preventDefault(),!V){V=c;return}let T=c.x-V.x,M=c.y-V.y,v=He();Ie(Math.max(-60,Math.min(60,v.yaw+T*.12)),Math.max(-60,Math.min(60,v.pitch+M*.12))),T!==0&&k(Math.max(0,Math.min(1,L()+T*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),V=c,r()}else x>=0&&(i.preventDefault(),re(c,!1,!1))}function _e(i){Q(),E=!1,C=!1,y&&(y=!1,b.viewRotating=!1,b.ringAlpha=0,V=null,r()),g(),be(),r()}function Ge(i){if(b.alphaMode){if(i.key==="Escape"){b.alphaMode=!1,r();return}if(i.key==="ArrowUp"||i.key==="ArrowRight"){i.preventDefault(),m(Math.min(1,h()+(i.shiftKey?.08:.02))),r();return}if(i.key==="ArrowDown"||i.key==="ArrowLeft"){i.preventDefault(),m(Math.max(0,h()-(i.shiftKey?.08:.02))),r();return}}let c=i.shiftKey?.04:.004,T=t(),M=o(),v=Ee(),P=0,H=0;switch(i.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}i.preventDefault();let O={...T},K=["x","y","z"];for(let W=0;W<3;W++){let _=P*v[W].x+H*v[W].y;if(Math.abs(_)>.3){let he=T[K[W]]+c*Math.sign(_);O[K[W]]=Math.max(0,Math.min(M[K[W]],he))}}d(O,l()),r()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",De),window.addEventListener("mouseup",Fe),e.addEventListener("touchstart",Be,{passive:!1}),e.addEventListener("touchmove",Oe,{passive:!1}),e.addEventListener("touchend",_e),e.addEventListener("keydown",Ge),e.setAttribute("tabindex","0");function io(){Q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",Fe),e.removeEventListener("touchstart",Be),e.removeEventListener("touchmove",Oe),e.removeEventListener("touchend",_e),e.removeEventListener("keydown",Ge)}return{state:b,destroy:io}}var ro=`.box-picker {\r
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
`;var No=To,ao=!1;function wo(){if(ao||typeof document>"u")return;ao=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ro,document.head.appendChild(e)}function To(e,o={}){let n=o.size??300,t=o.controls??!0,d=o.showInputs??!1,l=o.showModeToggle??!1,f=o.showCorners??!1,a={mode:()=>r,switchMode:s=>ee(s),onHexInput:s=>{let g=Le(s);g?(h=fe(F?{r:255-g.r,g:255-g.g,b:255-g.b}:g,r),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)},Z(),$(),B()):$()},onChannelInput:(s,g,x)=>{let R=Math.max(0,Math.min(x,g)),S=["x","y","z"],z=R/x;if(F){let ue={...h,[S[s]]:z},re=te(ue,r);h=fe({r:255-re.r,g:255-re.g,b:255-re.b},r)}else h={...h,[S[s]]:z};z>m[S[s]]&&(m={...m,[S[s]]:z}),Z(),$(),B()},getRgbForCopy:()=>te(h,r),onRandom:s=>de(s),onReset:()=>de({r:0,g:0,b:0})},r=o.mode??"rgb",u=o.initialColor?fe(o.initialColor,r):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},h={...u},A=0,k=()=>o.alpha!==void 0,L=Math.max(0,Math.min(1,o.alpha??1));function b(s){let g=Math.max(0,Math.min(1,s));g!==L&&(L=g,Z(),$(),B())}function p(s){let g=j(),x=ae(g);x.s=Math.max(0,Math.min(100,s*100));let R=we(x);de(F?{r:255-R.r,g:255-R.g,b:255-R.b}:R)}let C=new Set;wo();let w=document.createElement("div");w.className="box-picker";let E=document.createElement("canvas");E.style.cursor="grab",w.appendChild(E);let y=Qe(E,n),V=null,G=document.createElement("div");G.className="box-picker-controls",V=document.createElement("div"),V.className="box-picker-swatch",G.appendChild(V),w.appendChild(G),(d||l||f)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(G,a,{showInputs:d,showModeToggle:l,showCorners:f})}).catch(()=>{}),e.appendChild(w);let D=to(E,()=>m,s=>{m=s},()=>h,(s,g)=>{h=s,A=g,Z(),$()},()=>A,()=>y.scale,()=>y.center,B,k,b,()=>L,()=>I(h,y.scale,y.center),p,()=>ae(j()).s/100),F=!1,Y=!0;E.addEventListener("mouseenter",()=>{Y=!0,B()}),E.addEventListener("mouseleave",()=>{Y=!1,B()}),E.addEventListener("dblclick",()=>{F=!F,Ze(F),Z(),$(),B()});function ee(s){if(s===r)return;let g=te(h,r),x={...h},R={...m};r=s;let S=fe(g,r),z={x:1,y:1,z:1};h=S,m=z,me(x,S,R,z,300),$()}let U=null;function me(s,g,x,R,S){U!==null&&cancelAnimationFrame(U);let z=performance.now();function ue(re){let ke=re-z,be=Math.min(1,ke/S),ne=1-Math.pow(1-be,3);h={x:s.x+(g.x-s.x)*ne,y:s.y+(g.y-s.y)*ne,z:s.z+(g.z-s.z)*ne},m={x:x.x+(R.x-x.x)*ne,y:x.y+(R.y-x.y)*ne,z:x.z+(R.z-x.z)*ne},Q(),Z(),be<1?U=requestAnimationFrame(ue):U=null}U=requestAnimationFrame(ue)}let X=!1;function B(){X||(X=!0,requestAnimationFrame(()=>{X=!1,Q()}))}function Q(){qe(y,m,h,A,r,D.state,Y,{active:D.state.alphaMode,alpha:L,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:ae(j()).s/100,rgb:we({h:ae(j()).h,s:100,b:100})})}function ge(s,g,x){return Math.round(s+(g-s)*x)}function oe(s,g){let x=g>0?255:0,R=Math.abs(g);return ve({r:ge(s.r,x,R),g:ge(s.g,x,R),b:ge(s.b,x,R)})}function Ve(s,g){let x=Le(g)||{r:128,g:128,b:128},R=oe(x,.35),S=oe(x,0),z=oe(x,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${R}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${S}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${z}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function ce(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function pe(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function j(){let s=te(h,r);return F?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function $(){if(!t)return;let s=j(),g=ve(s);V&&Ve(V,g);let x=w.querySelector(".box-picker-hex");x&&(x.value=g),N(),w._updateModeButtons&&w._updateModeButtons()}function N(){if(!t)return;let s=Ae[r],g=F?fe(j(),r):h,x=We(g,r),R=w.querySelectorAll(".box-picker-channel input"),S=w.querySelectorAll(".box-picker-channel label");for(let z=0;z<R.length;z++)S[z].textContent=s[z],S[z].style.color="",S[z].style.textShadow="none",R[z].value=String(x[z])}function Z(){let s=j(),g={rgb:s,hsb:ae(s),oklch:Te(s),hex:ve(s),alpha:L};for(let x of C)x(g)}function Ce(){let s=te(h,r);return{rgb:s,hsb:ae(s),oklch:Te(s),hex:ve(s)}}$(),Q();let de=s=>{h=fe(s,r),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)};let g=I(h,y.scale,y.center);A=-1;for(let x=J.length-1;x>=0;x--)if(xe(x,g,m,y.scale,y.center)){A=x;break}Z(),$(),B()};return{getColor:Ce,getMode:()=>r,setColor:de,setAlpha:b,getAlpha:()=>L,setMode(s){ee(s)},on(s,g){C.add(g)},off(s,g){C.delete(g)},destroy(){D.destroy(),U!==null&&cancelAnimationFrame(U),e.removeChild(w)}}}export{To as createBoxColorPicker,No as createColorPicker,Ze as setBoxInvert};
