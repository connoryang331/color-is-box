var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Xe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function xe(e){let o=e.r/255,n=e.g/255,r=e.b/255,d=Math.max(o,n,r),l=Math.min(o,n,r),u=d-l,a=0;u!==0&&(d===o?a=((n-r)/u+6)%6:d===n?a=(r-o)/u+2:a=(o-n)/u+4,a*=60);let t=d===0?0:u/d*100,f=d*100;return{h:a,s:t,b:f}}function Le(e){let o=e.h,n=e.s/100,r=e.b/100,d=r*n,l=d*(1-Math.abs(o/60%2-1)),u=r-d,a,t,f;return o<60?(a=d,t=l,f=0):o<120?(a=l,t=d,f=0):o<180?(a=0,t=d,f=l):o<240?(a=0,t=l,f=d):o<300?(a=l,t=0,f=d):(a=d,t=0,f=l),{r:Math.round((a+u)*255),g:Math.round((t+u)*255),b:Math.round((f+u)*255)}}function Te(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Re(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function co(e){let o=Te(e.r/255),n=Te(e.g/255),r=Te(e.b/255),d=.4122214708*o+.5363325363*n+.0514459929*r,l=.2119034982*o+.6806995451*n+.1073969566*r,u=.0883024619*o+.2817188376*n+.6299787005*r,a=Math.cbrt(d),t=Math.cbrt(l),f=Math.cbrt(u);return{L:.2104542553*a+.793617785*t-.0040720468*f,a:1.9779984951*a-2.428592205*t+.4505937099*f,b:.0259040371*a+.7827717662*t-.808675766*f}}function lo(e,o,n){let r=e+.3963377774*o+.2158037573*n,d=e-.1055613458*o-.0638541728*n,l=e-.0894841775*o-1.291485548*n,u=r*r*r,a=d*d*d,t=l*l*l,f=4.0767416621*u-3.3077115913*a+.2309699292*t,x=-1.2684380046*u+2.6097574011*a-.3413193965*t,m=-.0041960863*u-.7034186147*a+1.707614701*t;return{r:Math.round(Math.max(0,Math.min(1,Re(f)))*255),g:Math.round(Math.max(0,Math.min(1,Re(x)))*255),b:Math.round(Math.max(0,Math.min(1,Re(m)))*255)}}function we(e){let o=co(e),n=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:n,h:n<1e-4?0:r}}function Se(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),r=e.c*Math.sin(o);return lo(e.l,n,r)}function uo(e,o,n){let r=Se({l:e,c:o,h:n});if(Ne(r))return{l:e,c:o,h:n};let d=0,l=o;for(let u=0;u<20;u++){let a=(d+l)/2;r=Se({l:e,c:a,h:n}),Ne(r)?d=a:l=a}return{l:e,c:d,h:n}}function Ne(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ve(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var $e=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Le({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,r=e.y*$e,d=e.z*359,l=uo(n,r,d);return Se(l)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=xe(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=we(e);return{x:n.l,y:Math.min(n.c/$e,1),z:n.h/359}}}function We(e,o){let n=Xe[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function je(e,o,n,r,d,l=!1){let u;e===0?u={x:r,y:o,z:n}:e===1?u={x:o,y:r,z:n}:u={x:o,y:n,z:r};let a=ne(u,d);return l?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Ze=Math.PI/6,bo=Math.cos(Ze),fo=Math.sin(Ze),Me=!1;function Je(e){Me=e}var ie=0,se=0;function He(e,o){ie=e,se=o}function Ie(){return{yaw:ie,pitch:se}}function xo(e){if(ie===0&&se===0)return e;let o=Math.cos(ie),n=Math.sin(ie),r=Math.cos(se),d=Math.sin(se),l=e.x*o+e.z*n,u=e.y,a=-e.x*n+e.z*o,t=u*r-a*d,f=u*d+a*r;return{x:l,y:t,z:f}}function ho(e){if(ie===0&&se===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(ie),r=Math.sin(ie),d=Math.cos(se),l=Math.sin(se),u=o.x*n+o.z*r,a=o.y,t=-o.x*r+o.z*n,f=a*d-t*l,x=a*l+t*d;return{x:u+.5,y:f+.5,z:x+.5}}function S(e,o,n){let r=ho(e);return{x:n.x+(r.y-r.x)*bo*o,y:n.y+r.z*o-(r.x+r.y)*fo*o}}function mo(e){let{x:o,y:n,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:r},{x:o,y:n,z:0},{x:o,y:0,z:r},{x:0,y:n,z:r},{x:o,y:n,z:r}]}var Z=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],go=64,Qe={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function qe(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(n,n),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function eo(e,o,n,r,d,l,u=!0,a=null){let{ctx:t,scale:f,center:x,width:m,height:k}=e;t.save(),t.clearRect(0,0,m,k);let A=mo(o),H=A.map(b=>S(b,f,x));if(yo(t,f,x,d),t.save(),t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=8,t.shadowOffsetX=0,t.shadowOffsetY=2,vo(t,H,A,o,d,l.viewRotating),t.restore(),u&&Mo(t,d,f,x),l.viewRotating){let b=S({x:0,y:0,z:0},f,x),C=S({x:1,y:1,z:1},f,x);t.save(),t.setLineDash([6,5]),t.strokeStyle="rgba(107,114,128,.75)",t.lineWidth=1.6,t.beginPath(),t.moveTo(b.x,b.y),t.lineTo(C.x,C.y),t.stroke(),t.restore(),t.beginPath(),t.arc(b.x,b.y,5,0,Math.PI*2),t.fillStyle="#111",t.fill(),t.strokeStyle="rgba(0,0,0,.45)",t.lineWidth=1,t.stroke(),t.beginPath(),t.arc(C.x,C.y,5,0,Math.PI*2),t.fillStyle="#fff",t.fill(),t.strokeStyle="rgba(0,0,0,.5)",t.lineWidth=1,t.stroke(),t.font="9px monospace",t.fillStyle="rgba(51,65,85,.85)",t.textAlign="left",t.fillText("0",b.x+9,b.y+12),t.fillText("255,255,255",C.x+9,C.y+12)}if(r>=0){let b=ne(n,d),C=Me?{r:255-b.r,g:255-b.g,b:255-b.b}:b,v=S(n,f,x);a&&a.active&&Co(t,v,a.rgb,a.alpha),ko(t,v,C)}t.restore()}var po={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function yo(e,o,n,r){let d=S({x:0,y:0,z:0},o,n),l=[S({x:1,y:0,z:0},o,n),S({x:0,y:1,z:0},o,n),S({x:0,y:0,z:1},o,n)],u=po[r];e.lineWidth=1.5;for(let a=0;a<l.length;a++)e.beginPath(),e.moveTo(d.x,d.y),e.lineTo(l[a].x,l[a].y),e.strokeStyle=u[a],e.stroke()}function vo(e,o,n,r,d,l){let u=[r.x,r.y,r.z];for(let a=0;a<Z.length;a++){let t=Z[a],f=u[t.fixedAxis],x=u[t.uAxis],m=u[t.vAxis];if(x<.002&&m<.002)continue;let k=xo(t.normal),A=k.x+k.y+k.z>0,H=t.quad.map(b=>o[b]);A?Ye(e,H,t.fixedAxis,f,x,m,d):(e.save(),e.globalAlpha=l?.28:0,Ye(e,H,t.fixedAxis,f,x,m,d),e.restore())}}function Ye(e,o,n,r,d,l,u){let a=go,t=document.createElement("canvas");t.width=a,t.height=a;let f=t.getContext("2d"),x=f.createImageData(a,a),m=x.data;for(let j=0;j<a;j++)for(let ee=0;ee<a;ee++){let K=ee/(a-1)*d,me=j/(a-1)*l,N=je(n,K,me,r,u,Me),B=(j*a+ee)*4;m[B]=N.r,m[B+1]=N.g,m[B+2]=N.b,m[B+3]=255}f.putImageData(x,0,0);let k=o[0],A=o[1],H=o[2],b=o[3],C=A.x-k.x,v=A.y-k.y,T=b.x-k.x,E=b.y-k.y;e.save(),e.beginPath(),e.moveTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(H.x,H.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let p=2/a,V=k.x-C*p-T*p,G=k.y-v*p-E*p,F=1+2*p,D=1+2*p;e.transform(C*F/a,v*F/a,T*D/a,E*D/a,V,G),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}function Mo(e,o,n,r){let d=Ae[o],l=Me?[S({x:0,y:1,z:1},n,r),S({x:1,y:0,z:1},n,r),S({x:1,y:1,z:0},n,r)]:[S({x:1,y:0,z:0},n,r),S({x:0,y:1,z:0},n,r),S({x:0,y:0,z:1},n,r)],u=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let t=l[a].x+u[a].x,f=l[a].y+u[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(d[a],t,f)}e.globalAlpha=1,e.restore()}var q=30,ae=13;function Co(e,o,n,r){let d=(q+ae)/2,l=5,u=Math.floor(o.x/l)*l,a=Math.floor(o.y/l)*l,t=q*2+l*2,f=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ae,0,Math.PI*2,!0),e.clip();for(let C=-1;C*l<=t;C++)for(let v=-1;v*l<=t;v++)e.fillStyle=(C+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+C*l,a+v*l,l,l);let x="rgba("+n.r+","+n.g+","+n.b+",0)",m="rgba("+n.r+","+n.g+","+n.b+",1)",k=e;if(typeof k.createConicGradient=="function"){let C=k.createConicGradient(-Math.PI/2,o.x,o.y);C.addColorStop(0,x),C.addColorStop(1,m),e.fillStyle=C,e.fillRect(u-q,a-q,t,t)}else for(let v=0;v<36;v++){let T=-Math.PI/2+v/36*Math.PI*2,E=-Math.PI/2+(v+1)/36*Math.PI*2,p=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*ae,o.y+Math.sin(T)*ae),e.arc(o.x,o.y,q,T,E),e.arc(o.x,o.y,ae,E,T,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+p.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ae,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=f*Math.PI*2,H=o.x+d*Math.sin(A),b=o.y-d*Math.cos(A);e.beginPath(),e.arc(H,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function ko(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function oo(e,o,n,r){let d=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(d[e],n,r)}function Ee(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(n=>{let r=Math.sqrt(n.x*n.x+n.y*n.y);return r>0?{x:n.x/r,y:n.y/r}:{x:0,y:0}})}function he(e,o,n,r,d){let l=Z[e],u=[n.x,n.y,n.z],a=u[l.uAxis],t=u[l.vAxis];if(a<.002||t<.002)return null;let f={x:0,y:0,z:0},x=["x","y","z"];f[x[l.fixedAxis]]=u[l.fixedAxis];let m={...f};m[x[l.uAxis]]=a;let k={...f};k[x[l.vAxis]]=t;let A=S(f,r,d),H=S(m,r,d),b=S(k,r,d),C=H.x-A.x,v=H.y-A.y,T=b.x-A.x,E=b.y-A.y,p=C*E-v*T;if(Math.abs(p)<1e-6)return null;let V=o.x-A.x,G=o.y-A.y,F=(V*E-G*T)/p,D=(G*C-V*v)/p;return F<-.05||F>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}function to(e,o,n,r,d){let l=Z[e],u=[n.x,n.y,n.z],a=u[l.uAxis],t=u[l.vAxis];if(a<.002||t<.002)return null;let f={x:0,y:0,z:0},x=["x","y","z"];f[x[l.fixedAxis]]=u[l.fixedAxis];let m={...f};m[x[l.uAxis]]=a;let k={...f};k[x[l.vAxis]]=t;let A=S(f,r,d),H=S(m,r,d),b=S(k,r,d),C=H.x-A.x,v=H.y-A.y,T=b.x-A.x,E=b.y-A.y,p=C*E-v*T;if(Math.abs(p)<1e-6)return null;let V=o.x-A.x,G=o.y-A.y,F=(V*E-G*T)/p,D=(G*C-V*v)/p;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}var no=22;function ro(e,o,n,r,d,l,u,a,t,f,x,m,k,A,H){let b={...Qe};function C(i){let c=e.getBoundingClientRect();return{x:i.clientX-c.left,y:i.clientY-c.top}}let v=!1,T=!1,E=!1,p=!1,V=null,G=600,F=null;function D(){j(),F=setTimeout(ee,G)}function j(){F!==null&&(clearTimeout(F),F=null)}function ee(){F=null,b.alphaMode=!1,ue(),g(),p=!0,b.viewRotating=!0,V=null,t()}let K=9,me=1e3,N=null;function B(){J(),N=setTimeout(ge,me)}function J(){N!==null&&(clearTimeout(N),N=null),j()}function ge(){N=null,b.alphaMode=!0,g(),ue(),t()}function oe(i){let c=k();return Math.hypot(i.x-c.x,i.y-c.y)}function Ve(i){let c=k();return(Math.atan2(i.x-c.x,-(i.y-c.y))+Math.PI*2)%(Math.PI*2)}function ce(i){x(Ve(i)/(Math.PI*2)),t()}function pe(i){let c=oe(i);return c>=ae-4&&c<=q+6}function Q(i){let c=o(),w=u(),M=a();for(let y=0;y<3;y++){let P=oo(y,c,w,M),I=i.x-P.x,O=i.y-P.y;if(I*I+O*O<=no*no)return y}return-1}function $(i){let c=o(),w=u(),M=a();for(let y=Z.length-1;y>=0;y--){let P=he(y,i,c,w,M);if(P)return{faceIndex:y,...P}}return null}let U=-1,Y={x:0,y:0},Ce=0;function le(i,c){U=i,Y=c,Ce=o()[["x","y","z"][i]],b.draggingAxisHandle=i,e.style.cursor="grabbing",t()}function s(i){if(J(),U<0)return;let c=i.x-Y.x,w=i.y-Y.y,y=Ee()[U],P=u(),O=(c*y.x+w*y.y)/P,X=Math.max(0,Math.min(1,Ce+O)),W=o(),_=["x","y","z"],fe={...W,[_[U]]:X};n(fe);let ye=r(),Ke=l(),Ue=Ke>=0?Z[Ke]:null,ze={...ye};Ue&&U===Ue.fixedAxis?ze[_[U]]=X:ze[_[U]]=Math.min(ye[_[U]],X),d(ze,l()),t()}function g(){U=-1,b.draggingAxisHandle=-1}let h=-1,z=null,L=null,R=!1;function de(i,c,w,M){h=i,b.draggingFace=i,z=null,L=null,R=!1,M&&(R=!0,L={s:c,t:w}),ke(i,c,w),e.style.cursor="crosshair",t()}function re(i,c,w){if(J(),h<0)return;let M=o(),y=u(),P=a(),I=he(h,i,M,y,P),O=h;if(!I&&!w){for(let _=Z.length-1;_>=0;_--)if(_!==h&&(I=he(_,i,M,y,P),I)){O=_;break}}if(!I&&w&&(I=to(h,i,M,y,P),O=h),!I){t();return}O!==h&&(h=O,b.draggingFace=O,z=null,R=!1,L=null);let{s:X,t:W}=I;if(c&&L){if(R){let _=Math.abs(X-L.s),fe=Math.abs(W-L.t),ye=.02;(_>ye||fe>ye)&&(z=_>=fe?"u":"v",R=!1)}z==="u"?W=L.t:z==="v"&&(X=L.s)}else c||(z=null,R=!1,L=null);ke(O,X,W),t()}function ke(i,c,w){let M=Z[i],y=o(),P=["x","y","z"],I={...r()};I[P[M.uAxis]]=c*y[P[M.uAxis]],I[P[M.vAxis]]=w*y[P[M.vAxis]],I[P[M.fixedAxis]]=y[P[M.fixedAxis]],d(I,i)}function ue(){h=-1,b.draggingFace=-1,z=null,R=!1,L=null}function te(i){T=!0;let c=C(i);if(f()){if(b.alphaMode){if(oe(c)<=K){b.alphaMode=!1,t();return}if(pe(c)){i.preventDefault(),v=!0,ce(c);return}b.alphaMode=!1,t();return}oe(c)<=K&&B()}let w=Q(c);if(w>=0){i.preventDefault(),le(w,c);return}let M=$(c);if(M){i.preventDefault(),de(M.faceIndex,M.s,M.t,i.shiftKey),D();return}let y=a();Math.hypot(c.x-y.x,c.y-y.y)>u()+20&&(i.preventDefault(),p=!0,V=c,b.viewRotating=!0,t())}function De(i){let c=C(i);if(v){i.preventDefault(),ce(c);return}if(p){if(i.preventDefault(),!V){V=c;return}let I=c.x-V.x,O=c.y-V.y,X=Ie();He(Math.max(-60,Math.min(60,X.yaw+I*.12)),Math.max(-60,Math.min(60,X.pitch+O*.12))),I!==0&&A(Math.max(0,Math.min(1,H()+I*.002))),V=c,t();return}if(T&&b.alphaMode&&pe(c)){i.preventDefault(),v=!0,ce(c);return}if(U>=0){i.preventDefault(),s(c);return}if(h>=0){i.preventDefault(),re(c,i.shiftKey,i.altKey);return}let w=Q(c),M=$(c),y=w,P=w>=0?-1:M?M.faceIndex:-1;(y!==b.hoveredAxisHandle||P!==b.hoveredFace)&&(b.hoveredAxisHandle=y,b.hoveredFace=P,e.style.cursor=y>=0?"grab":P>=0?"crosshair":"default",t())}function Fe(i){J(),T=!1,v=!1,p&&(p=!1,b.viewRotating=!1,V=null,t());let c=U>=0||h>=0;g(),ue(),c&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",t())}function Be(i){if(i.touches.length!==1)return;E=!0;let c=C(i.touches[0]);if(f()){if(b.alphaMode){if(oe(c)<=K){b.alphaMode=!1,t();return}if(pe(c)){i.preventDefault(),v=!0,ce(c);return}b.alphaMode=!1,t();return}oe(c)<=K&&B()}let w=Q(c);if(w>=0){i.preventDefault(),le(w,c);return}let M=$(c);if(M){i.preventDefault(),de(M.faceIndex,M.s,M.t,!1),D();return}let y=a();Math.hypot(c.x-y.x,c.y-y.y)>u()+20&&(i.preventDefault(),p=!0,V=c,b.viewRotating=!0,t())}function Oe(i){if(i.touches.length!==1)return;let c=C(i.touches[0]);if(v)i.preventDefault(),ce(c);else if(E&&b.alphaMode&&pe(c))i.preventDefault(),v=!0,ce(c);else if(U>=0)i.preventDefault(),s(c);else if(p){if(i.preventDefault(),!V){V=c;return}let w=c.x-V.x,M=c.y-V.y,y=Ie();He(Math.max(-60,Math.min(60,y.yaw+w*.12)),Math.max(-60,Math.min(60,y.pitch+M*.12))),w!==0&&A(Math.max(0,Math.min(1,H()+w*.002))),V=c,t()}else h>=0&&(i.preventDefault(),re(c,!1,!1))}function _e(i){J(),E=!1,v=!1,p&&(p=!1,b.viewRotating=!1,V=null,t()),g(),ue(),t()}function Ge(i){if(b.alphaMode){if(i.key==="Escape"){b.alphaMode=!1,t();return}if(i.key==="ArrowUp"||i.key==="ArrowRight"){i.preventDefault(),x(Math.min(1,m()+(i.shiftKey?.08:.02))),t();return}if(i.key==="ArrowDown"||i.key==="ArrowLeft"){i.preventDefault(),x(Math.max(0,m()-(i.shiftKey?.08:.02))),t();return}}let c=i.shiftKey?.04:.004,w=r(),M=o(),y=Ee(),P=0,I=0;switch(i.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}i.preventDefault();let O={...w},X=["x","y","z"];for(let W=0;W<3;W++){let _=P*y[W].x+I*y[W].y;if(Math.abs(_)>.3){let fe=w[X[W]]+c*Math.sign(_);O[X[W]]=Math.max(0,Math.min(M[X[W]],fe))}}d(O,l()),t()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",De),window.addEventListener("mouseup",Fe),e.addEventListener("touchstart",Be,{passive:!1}),e.addEventListener("touchmove",Oe,{passive:!1}),e.addEventListener("touchend",_e),e.addEventListener("keydown",Ge),e.setAttribute("tabindex","0");function so(){J(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",Fe),e.removeEventListener("touchstart",Be),e.removeEventListener("touchmove",Oe),e.removeEventListener("touchend",_e),e.removeEventListener("keydown",Ge)}return{state:b,destroy:so}}var ao=`.box-picker {\r
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
`;var Uo=Vo,io=!1;function wo(){if(io||typeof document>"u")return;io=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ao,document.head.appendChild(e)}function Vo(e,o={}){let n=o.size??300,r=o.controls??!0,d=o.showInputs??!1,l=o.showModeToggle??!1,u=o.showCorners??!1,a={mode:()=>t,switchMode:s=>ee(s),onHexInput:s=>{let g=Pe(s);g?(m=be(D?{r:255-g.r,g:255-g.g,b:255-g.b}:g,t),x={x:Math.max(x.x,m.x),y:Math.max(x.y,m.y),z:Math.max(x.z,m.z)},Y(),$(),B()):$()},onChannelInput:(s,g,h)=>{let z=Math.max(0,Math.min(h,g)),L=["x","y","z"],R=z/h;if(D){let de={...m,[L[s]]:R},re=ne(de,t);m=be({r:255-re.r,g:255-re.g,b:255-re.b},t)}else m={...m,[L[s]]:R};R>x[L[s]]&&(x={...x,[L[s]]:R}),Y(),$(),B()},getRgbForCopy:()=>ne(m,t),onRandom:s=>le(s),onReset:()=>le({r:0,g:0,b:0})},t=o.mode??"rgb",f=o.initialColor?be(o.initialColor,t):{x:.7,y:.4,z:.85},x={x:1,y:1,z:1},m={...f},k=0,A=()=>o.alpha!==void 0,H=Math.max(0,Math.min(1,o.alpha??1));function b(s){let g=Math.max(0,Math.min(1,s));g!==H&&(H=g,Y(),$(),B())}function C(s){let g=Q(),h=xe(g);h.s=Math.max(0,Math.min(100,s*100));let z=Le(h);le(D?{r:255-z.r,g:255-z.g,b:255-z.b}:z)}let v=new Set;wo();let T=document.createElement("div");T.className="box-picker";let E=document.createElement("canvas");E.style.cursor="grab",T.appendChild(E);let p=qe(E,n),V=null,G=document.createElement("div");G.className="box-picker-controls",V=document.createElement("div"),V.className="box-picker-swatch",G.appendChild(V),T.appendChild(G),(d||l||u)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(G,a,{showInputs:d,showModeToggle:l,showCorners:u})}).catch(()=>{}),e.appendChild(T);let F=ro(E,()=>x,s=>{x=s},()=>m,(s,g)=>{m=s,k=g,Y(),$()},()=>k,()=>p.scale,()=>p.center,B,A,b,()=>H,()=>S(m,p.scale,p.center),C,()=>xe(Q()).s/100),D=!1,j=!0;E.addEventListener("mouseenter",()=>{j=!0,B()}),E.addEventListener("mouseleave",()=>{j=!1,B()}),E.addEventListener("dblclick",()=>{D=!D,Je(D),Y(),$(),B()});function ee(s){if(s===t)return;let g=ne(m,t),h={...m},z={...x};t=s;let L=be(g,t),R={x:1,y:1,z:1};m=L,x=R,me(h,L,z,R,300),$()}let K=null;function me(s,g,h,z,L){K!==null&&cancelAnimationFrame(K);let R=performance.now();function de(re){let ke=re-R,ue=Math.min(1,ke/L),te=1-Math.pow(1-ue,3);m={x:s.x+(g.x-s.x)*te,y:s.y+(g.y-s.y)*te,z:s.z+(g.z-s.z)*te},x={x:h.x+(z.x-h.x)*te,y:h.y+(z.y-h.y)*te,z:h.z+(z.z-h.z)*te},J(),Y(),ue<1?K=requestAnimationFrame(de):K=null}K=requestAnimationFrame(de)}let N=!1;function B(){N||(N=!0,requestAnimationFrame(()=>{N=!1,J()}))}function J(){eo(p,x,m,k,t,F.state,j,{active:F.state.alphaMode,alpha:H,rgb:Q()})}function ge(s,g,h){return Math.round(s+(g-s)*h)}function oe(s,g){let h=g>0?255:0,z=Math.abs(g);return ve({r:ge(s.r,h,z),g:ge(s.g,h,z),b:ge(s.b,h,z)})}function Ve(s,g){let h=Pe(g)||{r:128,g:128,b:128},z=oe(h,.35),L=oe(h,0),R=oe(h,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${z}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${R}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function ce(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function pe(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function Q(){let s=ne(m,t);return D?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function $(){if(!r)return;let s=Q(),g=ve(s);V&&Ve(V,g);let h=T.querySelector(".box-picker-hex");h&&(h.value=g),U(),T._updateModeButtons&&T._updateModeButtons()}function U(){if(!r)return;let s=Ae[t],g=D?be(Q(),t):m,h=We(g,t),z=T.querySelectorAll(".box-picker-channel input"),L=T.querySelectorAll(".box-picker-channel label");for(let R=0;R<z.length;R++)L[R].textContent=s[R],L[R].style.color="",L[R].style.textShadow="none",z[R].value=String(h[R])}function Y(){let s=Q(),g={rgb:s,hsb:xe(s),oklch:we(s),hex:ve(s),alpha:H};for(let h of v)h(g)}function Ce(){let s=ne(m,t);return{rgb:s,hsb:xe(s),oklch:we(s),hex:ve(s)}}$(),J();let le=s=>{m=be(s,t),x={x:Math.max(x.x,m.x),y:Math.max(x.y,m.y),z:Math.max(x.z,m.z)};let g=S(m,p.scale,p.center);k=-1;for(let h=Z.length-1;h>=0;h--)if(he(h,g,x,p.scale,p.center)){k=h;break}Y(),$(),B()};return{getColor:Ce,getMode:()=>t,setColor:le,setAlpha:b,getAlpha:()=>H,setMode(s){ee(s)},on(s,g){v.add(g)},off(s,g){v.delete(g)},destroy(){F.destroy(),K!==null&&cancelAnimationFrame(K),e.removeChild(T)}}}export{Vo as createBoxColorPicker,Uo as createColorPicker,Je as setBoxInvert};
