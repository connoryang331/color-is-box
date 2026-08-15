var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Xe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function xe(e){let o=e.r/255,t=e.g/255,r=e.b/255,d=Math.max(o,t,r),l=Math.min(o,t,r),u=d-l,a=0;u!==0&&(d===o?a=((t-r)/u+6)%6:d===t?a=(r-o)/u+2:a=(o-t)/u+4,a*=60);let n=d===0?0:u/d*100,x=d*100;return{h:a,s:n,b:x}}function Pe(e){let o=e.h,t=e.s/100,r=e.b/100,d=r*t,l=d*(1-Math.abs(o/60%2-1)),u=r-d,a,n,x;return o<60?(a=d,n=l,x=0):o<120?(a=l,n=d,x=0):o<180?(a=0,n=d,x=l):o<240?(a=0,n=l,x=d):o<300?(a=l,n=0,x=d):(a=d,n=0,x=l),{r:Math.round((a+u)*255),g:Math.round((n+u)*255),b:Math.round((x+u)*255)}}function Re(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Le(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function lo(e){let o=Re(e.r/255),t=Re(e.g/255),r=Re(e.b/255),d=.4122214708*o+.5363325363*t+.0514459929*r,l=.2119034982*o+.6806995451*t+.1073969566*r,u=.0883024619*o+.2817188376*t+.6299787005*r,a=Math.cbrt(d),n=Math.cbrt(l),x=Math.cbrt(u);return{L:.2104542553*a+.793617785*n-.0040720468*x,a:1.9779984951*a-2.428592205*n+.4505937099*x,b:.0259040371*a+.7827717662*n-.808675766*x}}function uo(e,o,t){let r=e+.3963377774*o+.2158037573*t,d=e-.1055613458*o-.0638541728*t,l=e-.0894841775*o-1.291485548*t,u=r*r*r,a=d*d*d,n=l*l*l,x=4.0767416621*u-3.3077115913*a+.2309699292*n,m=-1.2684380046*u+2.6097574011*a-.3413193965*n,h=-.0041960863*u-.7034186147*a+1.707614701*n;return{r:Math.round(Math.max(0,Math.min(1,Le(x)))*255),g:Math.round(Math.max(0,Math.min(1,Le(m)))*255),b:Math.round(Math.max(0,Math.min(1,Le(h)))*255)}}function we(e){let o=lo(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function Se(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return uo(e.l,t,r)}function bo(e,o,t){let r=Se({l:e,c:o,h:t});if(Ne(r))return{l:e,c:o,h:t};let d=0,l=o;for(let u=0;u<20;u++){let a=(d+l)/2;r=Se({l:e,c:a,h:t}),Ne(r)?d=a:l=a}return{l:e,c:d,h:t}}function Ne(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ve(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function He(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var $e=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Pe({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*$e,d=e.z*359,l=bo(t,r,d);return Se(l)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=xe(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=we(e);return{x:t.l,y:Math.min(t.c/$e,1),z:t.h/359}}}function je(e,o){let t=Xe[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function We(e,o,t,r,d,l=!1){let u;e===0?u={x:r,y:o,z:t}:e===1?u={x:o,y:r,z:t}:u={x:o,y:t,z:r};let a=ne(u,d);return l?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Ze=Math.PI/6,fo=Math.cos(Ze),xo=Math.sin(Ze),Me=!1;function Je(e){Me=e}var re=0,ae=0;function Ve(e,o){re=e,ae=o}function Ie(){return{yaw:re,pitch:ae}}function Qe(){re=0,ae=0}function ho(e){if(re===0&&ae===0)return e;let o=Math.cos(re),t=Math.sin(re),r=Math.cos(ae),d=Math.sin(ae),l=e.x*o+e.z*t,u=e.y,a=-e.x*t+e.z*o,n=u*r-a*d,x=u*d+a*r;return{x:l,y:n,z:x}}function mo(e){if(re===0&&ae===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},t=Math.cos(re),r=Math.sin(re),d=Math.cos(ae),l=Math.sin(ae),u=o.x*t+o.z*r,a=o.y,n=-o.x*r+o.z*t,x=a*d-n*l,m=a*l+n*d;return{x:u+.5,y:x+.5,z:m+.5}}function H(e,o,t){let r=mo(e);return{x:t.x+(r.y-r.x)*fo*o,y:t.y+r.z*o-(r.x+r.y)*xo*o}}function po(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var Z=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],go=64,qe={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function eo(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function oo(e,o,t,r,d,l,u=!0,a=null){let{ctx:n,scale:x,center:m,width:h,height:C}=e;n.save(),n.clearRect(0,0,h,C);let k=po(o),P=k.map(b=>H(b,x,m));if(vo(n,x,m,d),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,Mo(n,P,k,o,d,l.viewRotating),n.restore(),u&&!l.viewRotating&&Co(n,d,x,m),r>=0){let b=ne(t,d),R=Me?{r:255-b.r,g:255-b.g,b:255-b.b}:b,v=H(t,x,m);a&&a.active&&ko(n,v,a.rgb,a.alpha),Ao(n,v,R)}n.restore()}var yo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function vo(e,o,t,r){let d=H({x:0,y:0,z:0},o,t),l=[H({x:1,y:0,z:0},o,t),H({x:0,y:1,z:0},o,t),H({x:0,y:0,z:1},o,t)],u=yo[r];e.lineWidth=1.5;for(let a=0;a<l.length;a++)e.beginPath(),e.moveTo(d.x,d.y),e.lineTo(l[a].x,l[a].y),e.strokeStyle=u[a],e.stroke()}function Mo(e,o,t,r,d,l){let u=[r.x,r.y,r.z];for(let a=0;a<Z.length;a++){let n=Z[a],x=u[n.fixedAxis],m=u[n.uAxis],h=u[n.vAxis];if(m<.002&&h<.002)continue;let C=ho(n.normal),k=C.x+C.y+C.z>0,P=n.quad.map(b=>o[b]);k?Ye(e,P,n.fixedAxis,x,m,h,d):(e.save(),e.globalAlpha=l?.28:0,Ye(e,P,n.fixedAxis,x,m,h,d),e.restore())}}function Ye(e,o,t,r,d,l,u){let a=go,n=document.createElement("canvas");n.width=a,n.height=a;let x=n.getContext("2d"),m=x.createImageData(a,a),h=m.data;for(let W=0;W<a;W++)for(let ee=0;ee<a;ee++){let K=ee/(a-1)*d,me=W/(a-1)*l,N=We(t,K,me,r,u,Me),B=(W*a+ee)*4;h[B]=N.r,h[B+1]=N.g,h[B+2]=N.b,h[B+3]=255}x.putImageData(m,0,0);let C=o[0],k=o[1],P=o[2],b=o[3],R=k.x-C.x,v=k.y-C.y,z=b.x-C.x,E=b.y-C.y;e.save(),e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(k.x,k.y),e.lineTo(P.x,P.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let g=2/a,w=C.x-R*g-z*g,G=C.y-v*g-E*g,F=1+2*g,D=1+2*g;e.transform(R*F/a,v*F/a,z*D/a,E*D/a,w,G),e.imageSmoothingEnabled=!0,e.drawImage(n,0,0),e.restore()}function Co(e,o,t,r){let d=Ae[o],l=Me?[H({x:0,y:1,z:1},t,r),H({x:1,y:0,z:1},t,r),H({x:1,y:1,z:0},t,r)]:[H({x:1,y:0,z:0},t,r),H({x:0,y:1,z:0},t,r),H({x:0,y:0,z:1},t,r)],u=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let n=l[a].x+u[a].x,x=l[a].y+u[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(d[a],n,x)}e.globalAlpha=1,e.restore()}var q=30,se=13;function ko(e,o,t,r){let d=(q+se)/2,l=5,u=Math.floor(o.x/l)*l,a=Math.floor(o.y/l)*l,n=q*2+l*2,x=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,se,0,Math.PI*2,!0),e.clip();for(let R=-1;R*l<=n;R++)for(let v=-1;v*l<=n;v++)e.fillStyle=(R+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+R*l,a+v*l,l,l);let m="rgba("+t.r+","+t.g+","+t.b+",0)",h="rgba("+t.r+","+t.g+","+t.b+",1)",C=e;if(typeof C.createConicGradient=="function"){let R=C.createConicGradient(-Math.PI/2,o.x,o.y);R.addColorStop(0,m),R.addColorStop(1,h),e.fillStyle=R,e.fillRect(u-q,a-q,n,n)}else for(let v=0;v<36;v++){let z=-Math.PI/2+v/36*Math.PI*2,E=-Math.PI/2+(v+1)/36*Math.PI*2,g=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(z)*se,o.y+Math.sin(z)*se),e.arc(o.x,o.y,q,z,E),e.arc(o.x,o.y,se,E,z,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+g.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,se,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=x*Math.PI*2,P=o.x+d*Math.sin(k),b=o.y-d*Math.cos(k);e.beginPath(),e.arc(P,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Ao(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function to(e,o,t,r){let d=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return H(d[e],t,r)}function Ee(){let e={x:0,y:0};return[H({x:1,y:0,z:0},1,e),H({x:0,y:1,z:0},1,e),H({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function he(e,o,t,r,d){let l=Z[e],u=[t.x,t.y,t.z],a=u[l.uAxis],n=u[l.vAxis];if(a<.002||n<.002)return null;let x={x:0,y:0,z:0},m=["x","y","z"];x[m[l.fixedAxis]]=u[l.fixedAxis];let h={...x};h[m[l.uAxis]]=a;let C={...x};C[m[l.vAxis]]=n;let k=H(x,r,d),P=H(h,r,d),b=H(C,r,d),R=P.x-k.x,v=P.y-k.y,z=b.x-k.x,E=b.y-k.y,g=R*E-v*z;if(Math.abs(g)<1e-6)return null;let w=o.x-k.x,G=o.y-k.y,F=(w*E-G*z)/g,D=(G*R-w*v)/g;return F<-.05||F>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}function no(e,o,t,r,d){let l=Z[e],u=[t.x,t.y,t.z],a=u[l.uAxis],n=u[l.vAxis];if(a<.002||n<.002)return null;let x={x:0,y:0,z:0},m=["x","y","z"];x[m[l.fixedAxis]]=u[l.fixedAxis];let h={...x};h[m[l.uAxis]]=a;let C={...x};C[m[l.vAxis]]=n;let k=H(x,r,d),P=H(h,r,d),b=H(C,r,d),R=P.x-k.x,v=P.y-k.y,z=b.x-k.x,E=b.y-k.y,g=R*E-v*z;if(Math.abs(g)<1e-6)return null;let w=o.x-k.x,G=o.y-k.y,F=(w*E-G*z)/g,D=(G*R-w*v)/g;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}var ro=22;function ao(e,o,t,r,d,l,u,a,n,x,m,h,C,k,P){let b={...qe};function R(i){let c=e.getBoundingClientRect();return{x:i.clientX-c.left,y:i.clientY-c.top}}let v=!1,z=!1,E=!1,g=!1,w=null,G=600,F=null;function D(){W(),F=setTimeout(ee,G)}function W(){F!==null&&(clearTimeout(F),F=null)}function ee(){F=null,b.alphaMode=!1,ue(),p(),g=!0,b.viewRotating=!0,w=null,n()}let K=9,me=1e3,N=null;function B(){J(),N=setTimeout(pe,me)}function J(){N!==null&&(clearTimeout(N),N=null),W()}function pe(){N=null,b.alphaMode=!0,p(),ue(),n()}function oe(i){let c=C();return Math.hypot(i.x-c.x,i.y-c.y)}function ze(i){let c=C();return(Math.atan2(i.x-c.x,-(i.y-c.y))+Math.PI*2)%(Math.PI*2)}function ce(i){m(ze(i)/(Math.PI*2)),n()}function ge(i){let c=oe(i);return c>=se-4&&c<=q+6}function Q(i){let c=o(),A=u(),M=a();for(let y=0;y<3;y++){let S=to(y,c,A,M),I=i.x-S.x,O=i.y-S.y;if(I*I+O*O<=ro*ro)return y}return-1}function $(i){let c=o(),A=u(),M=a();for(let y=Z.length-1;y>=0;y--){let S=he(y,i,c,A,M);if(S)return{faceIndex:y,...S}}return null}let U=-1,Y={x:0,y:0},Ce=0;function le(i,c){U=i,Y=c,Ce=o()[["x","y","z"][i]],b.draggingAxisHandle=i,e.style.cursor="grabbing",n()}function s(i){if(J(),U<0)return;let c=i.x-Y.x,A=i.y-Y.y,y=Ee()[U],S=u(),O=(c*y.x+A*y.y)/S,X=Math.max(0,Math.min(1,Ce+O)),j=o(),_=["x","y","z"],fe={...j,[_[U]]:X};t(fe);let ye=r(),Ke=l(),Ue=Ke>=0?Z[Ke]:null,Te={...ye};Ue&&U===Ue.fixedAxis?Te[_[U]]=X:Te[_[U]]=Math.min(ye[_[U]],X),d(Te,l()),n()}function p(){U=-1,b.draggingAxisHandle=-1}let f=-1,V=null,L=null,T=!1;function de(i,c,A,M){f=i,b.draggingFace=i,V=null,L=null,T=!1,M&&(T=!0,L={s:c,t:A}),ke(i,c,A),e.style.cursor="crosshair",n()}function ie(i,c,A){if(J(),f<0)return;let M=o(),y=u(),S=a(),I=he(f,i,M,y,S),O=f;if(!I&&!A){for(let _=Z.length-1;_>=0;_--)if(_!==f&&(I=he(_,i,M,y,S),I)){O=_;break}}if(!I&&A&&(I=no(f,i,M,y,S),O=f),!I){n();return}O!==f&&(f=O,b.draggingFace=O,V=null,T=!1,L=null);let{s:X,t:j}=I;if(c&&L){if(T){let _=Math.abs(X-L.s),fe=Math.abs(j-L.t),ye=.02;(_>ye||fe>ye)&&(V=_>=fe?"u":"v",T=!1)}V==="u"?j=L.t:V==="v"&&(X=L.s)}else c||(V=null,T=!1,L=null);ke(O,X,j),n()}function ke(i,c,A){let M=Z[i],y=o(),S=["x","y","z"],I={...r()};I[S[M.uAxis]]=c*y[S[M.uAxis]],I[S[M.vAxis]]=A*y[S[M.vAxis]],I[S[M.fixedAxis]]=y[S[M.fixedAxis]],d(I,i)}function ue(){f=-1,b.draggingFace=-1,V=null,T=!1,L=null}function te(i){z=!0;let c=R(i);if(x()){if(b.alphaMode){if(oe(c)<=K){b.alphaMode=!1,n();return}if(ge(c)){i.preventDefault(),v=!0,ce(c);return}b.alphaMode=!1,n();return}oe(c)<=K&&B()}let A=Q(c);if(A>=0){i.preventDefault(),le(A,c);return}let M=$(c);if(M){i.preventDefault(),de(M.faceIndex,M.s,M.t,i.shiftKey),b.alphaMode||D();return}let y=a();Math.hypot(c.x-y.x,c.y-y.y)>u()+20&&(i.preventDefault(),g=!0,w=c,b.viewRotating=!0,n())}function De(i){let c=R(i);if(v){i.preventDefault(),ce(c);return}if(g){if(i.preventDefault(),!w){w=c;return}let I=c.x-w.x,O=c.y-w.y,X=Ie();Ve(Math.max(-60,Math.min(60,X.yaw+I*.12)),Math.max(-60,Math.min(60,X.pitch+O*.12))),I!==0&&k(Math.max(0,Math.min(1,P()+I*.002))),w=c,n();return}if(z&&b.alphaMode&&ge(c)){i.preventDefault(),v=!0,ce(c);return}if(U>=0){i.preventDefault(),s(c);return}if(f>=0){i.preventDefault(),ie(c,i.shiftKey,i.altKey);return}let A=Q(c),M=$(c),y=A,S=A>=0?-1:M?M.faceIndex:-1;(y!==b.hoveredAxisHandle||S!==b.hoveredFace)&&(b.hoveredAxisHandle=y,b.hoveredFace=S,e.style.cursor=y>=0?"grab":S>=0?"crosshair":"default",n())}function Fe(i){J(),z=!1,v=!1,g&&(g=!1,b.viewRotating=!1,w=null,n());let c=U>=0||f>=0;p(),ue(),c&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",n())}function Be(i){if(i.touches.length!==1)return;E=!0;let c=R(i.touches[0]);if(x()){if(b.alphaMode){if(oe(c)<=K){b.alphaMode=!1,n();return}if(ge(c)){i.preventDefault(),v=!0,ce(c);return}b.alphaMode=!1,n();return}oe(c)<=K&&B()}let A=Q(c);if(A>=0){i.preventDefault(),le(A,c);return}let M=$(c);if(M){i.preventDefault(),de(M.faceIndex,M.s,M.t,!1),b.alphaMode||D();return}let y=a();Math.hypot(c.x-y.x,c.y-y.y)>u()+20&&(i.preventDefault(),g=!0,w=c,b.viewRotating=!0,n())}function Oe(i){if(i.touches.length!==1)return;let c=R(i.touches[0]);if(v)i.preventDefault(),ce(c);else if(E&&b.alphaMode&&ge(c))i.preventDefault(),v=!0,ce(c);else if(U>=0)i.preventDefault(),s(c);else if(g){if(i.preventDefault(),!w){w=c;return}let A=c.x-w.x,M=c.y-w.y,y=Ie();Ve(Math.max(-60,Math.min(60,y.yaw+A*.12)),Math.max(-60,Math.min(60,y.pitch+M*.12))),A!==0&&k(Math.max(0,Math.min(1,P()+A*.002))),w=c,n()}else f>=0&&(i.preventDefault(),ie(c,!1,!1))}function _e(i){J(),E=!1,v=!1,g&&(g=!1,b.viewRotating=!1,w=null,n()),p(),ue(),n()}function Ge(i){if(i.key==="1"){Ve(Math.PI/4,0),n();return}if(i.key==="0"){Qe(),n();return}if(b.alphaMode){if(i.key==="Escape"){b.alphaMode=!1,n();return}if(i.key==="ArrowUp"||i.key==="ArrowRight"){i.preventDefault(),m(Math.min(1,h()+(i.shiftKey?.08:.02))),n();return}if(i.key==="ArrowDown"||i.key==="ArrowLeft"){i.preventDefault(),m(Math.max(0,h()-(i.shiftKey?.08:.02))),n();return}}let c=i.shiftKey?.04:.004,A=r(),M=o(),y=Ee(),S=0,I=0;switch(i.key){case"ArrowRight":S=1;break;case"ArrowLeft":S=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}i.preventDefault();let O={...A},X=["x","y","z"];for(let j=0;j<3;j++){let _=S*y[j].x+I*y[j].y;if(Math.abs(_)>.3){let fe=A[X[j]]+c*Math.sign(_);O[X[j]]=Math.max(0,Math.min(M[X[j]],fe))}}d(O,l()),n()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",De),window.addEventListener("mouseup",Fe),e.addEventListener("touchstart",Be,{passive:!1}),e.addEventListener("touchmove",Oe,{passive:!1}),e.addEventListener("touchend",_e),e.addEventListener("keydown",Ge),e.setAttribute("tabindex","0");function co(){J(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",Fe),e.removeEventListener("touchstart",Be),e.removeEventListener("touchmove",Oe),e.removeEventListener("touchend",_e),e.removeEventListener("keydown",Ge)}return{state:b,destroy:co}}var io=`.box-picker {\r
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
`;var Xo=zo,so=!1;function Vo(){if(so||typeof document>"u")return;so=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=io,document.head.appendChild(e)}function zo(e,o={}){let t=o.size??300,r=o.controls??!0,d=o.showInputs??!1,l=o.showModeToggle??!1,u=o.showCorners??!1,a={mode:()=>n,switchMode:s=>ee(s),onHexInput:s=>{let p=He(s);p?(h=be(D?{r:255-p.r,g:255-p.g,b:255-p.b}:p,n),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)},Y(),$(),B()):$()},onChannelInput:(s,p,f)=>{let V=Math.max(0,Math.min(f,p)),L=["x","y","z"],T=V/f;if(D){let de={...h,[L[s]]:T},ie=ne(de,n);h=be({r:255-ie.r,g:255-ie.g,b:255-ie.b},n)}else h={...h,[L[s]]:T};T>m[L[s]]&&(m={...m,[L[s]]:T}),Y(),$(),B()},getRgbForCopy:()=>ne(h,n),onRandom:s=>le(s),onReset:()=>le({r:0,g:0,b:0})},n=o.mode??"rgb",x=o.initialColor?be(o.initialColor,n):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},h={...x},C=0,k=()=>o.alpha!==void 0,P=Math.max(0,Math.min(1,o.alpha??1));function b(s){let p=Math.max(0,Math.min(1,s));p!==P&&(P=p,Y(),$(),B())}function R(s){let p=Q(),f=xe(p);f.s=Math.max(0,Math.min(100,s*100));let V=Pe(f);le(D?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let v=new Set;Vo();let z=document.createElement("div");z.className="box-picker";let E=document.createElement("canvas");E.style.cursor="grab",z.appendChild(E);let g=eo(E,t),w=null,G=document.createElement("div");G.className="box-picker-controls",w=document.createElement("div"),w.className="box-picker-swatch",G.appendChild(w),z.appendChild(G),(d||l||u)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(G,a,{showInputs:d,showModeToggle:l,showCorners:u})}).catch(()=>{}),e.appendChild(z);let F=ao(E,()=>m,s=>{m=s},()=>h,(s,p)=>{h=s,C=p,Y(),$()},()=>C,()=>g.scale,()=>g.center,B,k,b,()=>P,()=>H(h,g.scale,g.center),R,()=>xe(Q()).s/100),D=!1,W=!0;E.addEventListener("mouseenter",()=>{W=!0,B()}),E.addEventListener("mouseleave",()=>{W=!1,B()}),E.addEventListener("dblclick",()=>{D=!D,Je(D),Y(),$(),B()});function ee(s){if(s===n)return;let p=ne(h,n),f={...h},V={...m};n=s;let L=be(p,n),T={x:1,y:1,z:1};h=L,m=T,me(f,L,V,T,300),$()}let K=null;function me(s,p,f,V,L){K!==null&&cancelAnimationFrame(K);let T=performance.now();function de(ie){let ke=ie-T,ue=Math.min(1,ke/L),te=1-Math.pow(1-ue,3);h={x:s.x+(p.x-s.x)*te,y:s.y+(p.y-s.y)*te,z:s.z+(p.z-s.z)*te},m={x:f.x+(V.x-f.x)*te,y:f.y+(V.y-f.y)*te,z:f.z+(V.z-f.z)*te},J(),Y(),ue<1?K=requestAnimationFrame(de):K=null}K=requestAnimationFrame(de)}let N=!1;function B(){N||(N=!0,requestAnimationFrame(()=>{N=!1,J()}))}function J(){oo(g,m,h,C,n,F.state,W,{active:F.state.alphaMode,alpha:P,rgb:Q()})}function pe(s,p,f){return Math.round(s+(p-s)*f)}function oe(s,p){let f=p>0?255:0,V=Math.abs(p);return ve({r:pe(s.r,f,V),g:pe(s.g,f,V),b:pe(s.b,f,V)})}function ze(s,p){let f=He(p)||{r:128,g:128,b:128},V=oe(f,.35),L=oe(f,0),T=oe(f,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${T}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function ce(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function ge(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function Q(){let s=ne(h,n);return D?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function $(){if(!r)return;let s=Q(),p=ve(s);w&&ze(w,p);let f=z.querySelector(".box-picker-hex");f&&(f.value=p),U(),z._updateModeButtons&&z._updateModeButtons()}function U(){if(!r)return;let s=Ae[n],p=D?be(Q(),n):h,f=je(p,n),V=z.querySelectorAll(".box-picker-channel input"),L=z.querySelectorAll(".box-picker-channel label");for(let T=0;T<V.length;T++)L[T].textContent=s[T],L[T].style.color="",L[T].style.textShadow="none",V[T].value=String(f[T])}function Y(){let s=Q(),p={rgb:s,hsb:xe(s),oklch:we(s),hex:ve(s),alpha:P};for(let f of v)f(p)}function Ce(){let s=ne(h,n);return{rgb:s,hsb:xe(s),oklch:we(s),hex:ve(s)}}$(),J();let le=s=>{h=be(s,n),m={x:Math.max(m.x,h.x),y:Math.max(m.y,h.y),z:Math.max(m.z,h.z)};let p=H(h,g.scale,g.center);C=-1;for(let f=Z.length-1;f>=0;f--)if(he(f,p,m,g.scale,g.center)){C=f;break}Y(),$(),B()};return{getColor:Ce,getMode:()=>n,setColor:le,setAlpha:b,getAlpha:()=>P,setMode(s){ee(s)},on(s,p){v.add(p)},off(s,p){v.delete(p)},destroy(){F.destroy(),K!==null&&cancelAnimationFrame(K),e.removeChild(z)}}}export{zo as createBoxColorPicker,Xo as createColorPicker,Je as setBoxInvert};
