var we={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Xe={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function xe(e){let o=e.r/255,n=e.g/255,r=e.b/255,d=Math.max(o,n,r),l=Math.min(o,n,r),f=d-l,a=0;f!==0&&(d===o?a=((n-r)/f+6)%6:d===n?a=(r-o)/f+2:a=(o-n)/f+4,a*=60);let t=d===0?0:f/d*100,b=d*100;return{h:a,s:t,b}}function Pe(e){let o=e.h,n=e.s/100,r=e.b/100,d=r*n,l=d*(1-Math.abs(o/60%2-1)),f=r-d,a,t,b;return o<60?(a=d,t=l,b=0):o<120?(a=l,t=d,b=0):o<180?(a=0,t=d,b=l):o<240?(a=0,t=l,b=d):o<300?(a=l,t=0,b=d):(a=d,t=0,b=l),{r:Math.round((a+f)*255),g:Math.round((t+f)*255),b:Math.round((b+f)*255)}}function Se(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Re(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function lo(e){let o=Se(e.r/255),n=Se(e.g/255),r=Se(e.b/255),d=.4122214708*o+.5363325363*n+.0514459929*r,l=.2119034982*o+.6806995451*n+.1073969566*r,f=.0883024619*o+.2817188376*n+.6299787005*r,a=Math.cbrt(d),t=Math.cbrt(l),b=Math.cbrt(f);return{L:.2104542553*a+.793617785*t-.0040720468*b,a:1.9779984951*a-2.428592205*t+.4505937099*b,b:.0259040371*a+.7827717662*t-.808675766*b}}function uo(e,o,n){let r=e+.3963377774*o+.2158037573*n,d=e-.1055613458*o-.0638541728*n,l=e-.0894841775*o-1.291485548*n,f=r*r*r,a=d*d*d,t=l*l*l,b=4.0767416621*f-3.3077115913*a+.2309699292*t,x=-1.2684380046*f+2.6097574011*a-.3413193965*t,m=-.0041960863*f-.7034186147*a+1.707614701*t;return{r:Math.round(Math.max(0,Math.min(1,Re(b)))*255),g:Math.round(Math.max(0,Math.min(1,Re(x)))*255),b:Math.round(Math.max(0,Math.min(1,Re(m)))*255)}}function ze(e){let o=lo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:n,h:n<1e-4?0:r}}function Le(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),r=e.c*Math.sin(o);return uo(e.l,n,r)}function fo(e,o,n){let r=Le({l:e,c:o,h:n});if(Ne(r))return{l:e,c:o,h:n};let d=0,l=o;for(let f=0;f<20;f++){let a=(d+l)/2;r=Le({l:e,c:a,h:n}),Ne(r)?d=a:l=a}return{l:e,c:d,h:n}}function Ne(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ve(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function He(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var $e=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Pe({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,r=e.y*$e,d=e.z*359,l=fo(n,r,d);return Le(l)}}function fe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=xe(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ze(e);return{x:n.l,y:Math.min(n.c/$e,1),z:n.h/359}}}function We(e,o){let n=Xe[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function je(e,o,n,r,d,l=!1){let f;e===0?f={x:r,y:o,z:n}:e===1?f={x:o,y:r,z:n}:f={x:o,y:n,z:r};let a=ne(f,d);return l?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var Ze=Math.PI/6,bo=Math.cos(Ze),xo=Math.sin(Ze),Me=!1;function Je(e){Me=e}var re=0,ae=0;function Ce(e,o){re=e,ae=o}function Ie(){return{yaw:re,pitch:ae}}function Qe(){re=0,ae=0}function ho(e){if(re===0&&ae===0)return e;let o=Math.cos(re),n=Math.sin(re),r=Math.cos(ae),d=Math.sin(ae),l=e.x*o+e.z*n,f=e.y,a=-e.x*n+e.z*o,t=f*r-a*d,b=f*d+a*r;return{x:l,y:t,z:b}}function mo(e){if(re===0&&ae===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(re),r=Math.sin(re),d=Math.cos(ae),l=Math.sin(ae),f=o.x*n+o.z*r,a=o.y,t=-o.x*r+o.z*n,b=a*d-t*l,x=a*l+t*d;return{x:f+.5,y:b+.5,z:x+.5}}function R(e,o,n){let r=mo(e);return{x:n.x+(r.y-r.x)*bo*o,y:n.y+r.z*o-(r.x+r.y)*xo*o}}function po(e){let{x:o,y:n,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:r},{x:o,y:n,z:0},{x:o,y:0,z:r},{x:0,y:n,z:r},{x:o,y:n,z:r}]}var Z=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],go=64,qe={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function eo(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let r=e.getContext("2d");return r.scale(n,n),{ctx:r,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function oo(e,o,n,r,d,l,f=!0,a=null){let{ctx:t,scale:b,center:x,width:m,height:k}=e;t.save(),t.clearRect(0,0,m,k);let A=po(o),H=A.map(u=>R(u,b,x));if(vo(t,b,x,d),t.save(),t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=8,t.shadowOffsetX=0,t.shadowOffsetY=2,Mo(t,H,A,o,d,l.viewRotating),t.restore(),f&&!l.viewRotating&&Co(t,d,b,x),l.viewRotating){let u=R({x:0,y:0,z:0},b,x),y=R({x:1,y:1,z:1},b,x);t.beginPath(),t.arc(u.x,u.y,7,0,Math.PI*2),t.fillStyle="#000",t.fill(),t.strokeStyle="rgba(255,255,255,.9)",t.lineWidth=1.5,t.stroke(),t.beginPath(),t.arc(y.x,y.y,7,0,Math.PI*2),t.fillStyle="#fff",t.fill(),t.strokeStyle="rgba(0,0,0,.55)",t.lineWidth=1.2,t.stroke(),t.font="9px monospace",t.fillStyle="rgba(51,65,85,.85)",t.textAlign="left",t.fillText("0",u.x+10,u.y+12),t.fillText("255,255,255",y.x+10,y.y+12)}if(l.viewRotating){let u=[{p:{x:0,y:0,z:0},c:"#000000",r:7},{p:{x:1,y:1,z:1},c:"#ffffff",r:7},{p:{x:1,y:0,z:0},c:"#ff0000",r:5},{p:{x:0,y:1,z:0},c:"#00cc00",r:5},{p:{x:0,y:0,z:1},c:"#0000ff",r:5},{p:{x:1,y:1,z:0},c:"#ffff00",r:5},{p:{x:0,y:1,z:1},c:"#00dddd",r:5},{p:{x:1,y:0,z:1},c:"#ff00aa",r:5}];for(let y of u){let g=R(y.p,b,x);t.beginPath(),t.arc(g.x,g.y,y.r,0,Math.PI*2),t.fillStyle=y.c,t.fill(),t.strokeStyle=y.c==="#000000"?"rgba(255,255,255,.9)":"rgba(0,0,0,.45)",t.lineWidth=1.2,t.stroke()}}if(r>=0){let u=ne(n,d),y=Me?{r:255-u.r,g:255-u.g,b:255-u.b}:u,g=R(n,b,x);a&&a.active&&ko(t,g,a.rgb,a.alpha),Ao(t,g,y)}t.restore()}var yo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function vo(e,o,n,r){let d=R({x:0,y:0,z:0},o,n),l=[R({x:1,y:0,z:0},o,n),R({x:0,y:1,z:0},o,n),R({x:0,y:0,z:1},o,n)],f=yo[r];e.lineWidth=1.5;for(let a=0;a<l.length;a++)e.beginPath(),e.moveTo(d.x,d.y),e.lineTo(l[a].x,l[a].y),e.strokeStyle=f[a],e.stroke()}function Mo(e,o,n,r,d,l){let f=[r.x,r.y,r.z];for(let a=0;a<Z.length;a++){let t=Z[a],b=f[t.fixedAxis],x=f[t.uAxis],m=f[t.vAxis];if(x<.002&&m<.002)continue;let k=ho(t.normal),A=k.x+k.y+k.z>0,H=t.quad.map(u=>o[u]);A?Ye(e,H,t.fixedAxis,b,x,m,d):(e.save(),e.globalAlpha=0,Ye(e,H,t.fixedAxis,b,x,m,d),e.restore())}}function Ye(e,o,n,r,d,l,f){let a=go,t=document.createElement("canvas");t.width=a,t.height=a;let b=t.getContext("2d"),x=b.createImageData(a,a),m=x.data;for(let j=0;j<a;j++)for(let ee=0;ee<a;ee++){let K=ee/(a-1)*d,me=j/(a-1)*l,N=je(n,K,me,r,f,Me),B=(j*a+ee)*4;m[B]=N.r,m[B+1]=N.g,m[B+2]=N.b,m[B+3]=255}b.putImageData(x,0,0);let k=o[0],A=o[1],H=o[2],u=o[3],y=A.x-k.x,g=A.y-k.y,T=u.x-k.x,E=u.y-k.y;e.save(),e.beginPath(),e.moveTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(H.x,H.y),e.lineTo(u.x,u.y),e.closePath(),e.clip();let v=2/a,z=k.x-y*v-T*v,G=k.y-g*v-E*v,F=1+2*v,D=1+2*v;e.transform(y*F/a,g*F/a,T*D/a,E*D/a,z,G),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}function Co(e,o,n,r){let d=we[o],l=Me?[R({x:0,y:1,z:1},n,r),R({x:1,y:0,z:1},n,r),R({x:1,y:1,z:0},n,r)]:[R({x:1,y:0,z:0},n,r),R({x:0,y:1,z:0},n,r),R({x:0,y:0,z:1},n,r)],f=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let t=l[a].x+f[a].x,b=l[a].y+f[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(d[a],t,b)}e.globalAlpha=1,e.restore()}var q=30,se=13;function ko(e,o,n,r){let d=(q+se)/2,l=5,f=Math.floor(o.x/l)*l,a=Math.floor(o.y/l)*l,t=q*2+l*2,b=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,se,0,Math.PI*2,!0),e.clip();for(let y=-1;y*l<=t;y++)for(let g=-1;g*l<=t;g++)e.fillStyle=(y+g)%2===0?"#ffffff":"#d9d9d9",e.fillRect(f+y*l,a+g*l,l,l);let x="rgba("+n.r+","+n.g+","+n.b+",0)",m="rgba("+n.r+","+n.g+","+n.b+",1)",k=e;if(typeof k.createConicGradient=="function"){let y=k.createConicGradient(-Math.PI/2,o.x,o.y);y.addColorStop(0,x),y.addColorStop(1,m),e.fillStyle=y,e.fillRect(f-q,a-q,t,t)}else for(let g=0;g<36;g++){let T=-Math.PI/2+g/36*Math.PI*2,E=-Math.PI/2+(g+1)/36*Math.PI*2,v=(g+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*se,o.y+Math.sin(T)*se),e.arc(o.x,o.y,q,T,E),e.arc(o.x,o.y,se,E,T,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+v.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,se,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=b*Math.PI*2,H=o.x+d*Math.sin(A),u=o.y-d*Math.cos(A);e.beginPath(),e.arc(H,u,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Ao(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function to(e,o,n,r){let d=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(d[e],n,r)}function Ee(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(n=>{let r=Math.sqrt(n.x*n.x+n.y*n.y);return r>0?{x:n.x/r,y:n.y/r}:{x:0,y:0}})}function he(e,o,n,r,d){let l=Z[e],f=[n.x,n.y,n.z],a=f[l.uAxis],t=f[l.vAxis];if(a<.002||t<.002)return null;let b={x:0,y:0,z:0},x=["x","y","z"];b[x[l.fixedAxis]]=f[l.fixedAxis];let m={...b};m[x[l.uAxis]]=a;let k={...b};k[x[l.vAxis]]=t;let A=R(b,r,d),H=R(m,r,d),u=R(k,r,d),y=H.x-A.x,g=H.y-A.y,T=u.x-A.x,E=u.y-A.y,v=y*E-g*T;if(Math.abs(v)<1e-6)return null;let z=o.x-A.x,G=o.y-A.y,F=(z*E-G*T)/v,D=(G*y-z*g)/v;return F<-.05||F>1.05||D<-.05||D>1.05?null:{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}function no(e,o,n,r,d){let l=Z[e],f=[n.x,n.y,n.z],a=f[l.uAxis],t=f[l.vAxis];if(a<.002||t<.002)return null;let b={x:0,y:0,z:0},x=["x","y","z"];b[x[l.fixedAxis]]=f[l.fixedAxis];let m={...b};m[x[l.uAxis]]=a;let k={...b};k[x[l.vAxis]]=t;let A=R(b,r,d),H=R(m,r,d),u=R(k,r,d),y=H.x-A.x,g=H.y-A.y,T=u.x-A.x,E=u.y-A.y,v=y*E-g*T;if(Math.abs(v)<1e-6)return null;let z=o.x-A.x,G=o.y-A.y,F=(z*E-G*T)/v,D=(G*y-z*g)/v;return{s:Math.max(0,Math.min(1,F)),t:Math.max(0,Math.min(1,D))}}var ro=22;function ao(e,o,n,r,d,l,f,a,t,b,x,m,k,A,H){let u={...qe};function y(i){let c=e.getBoundingClientRect();return{x:i.clientX-c.left,y:i.clientY-c.top}}let g=!1,T=!1,E=!1,v=!1,z=null,G=600,F=null;function D(){j(),F=setTimeout(ee,G)}function j(){F!==null&&(clearTimeout(F),F=null)}function ee(){F=null,u.alphaMode=!1,ue(),p(),v=!0,u.viewRotating=!0,z=null,t()}let K=9,me=1e3,N=null;function B(){J(),N=setTimeout(pe,me)}function J(){N!==null&&(clearTimeout(N),N=null),j()}function pe(){N=null,u.alphaMode=!0,p(),ue(),t()}function oe(i){let c=k();return Math.hypot(i.x-c.x,i.y-c.y)}function Ve(i){let c=k();return(Math.atan2(i.x-c.x,-(i.y-c.y))+Math.PI*2)%(Math.PI*2)}function ce(i){x(Ve(i)/(Math.PI*2)),t()}function ge(i){let c=oe(i);return c>=se-4&&c<=q+6}function Q(i){let c=o(),w=f(),C=a();for(let M=0;M<3;M++){let P=to(M,c,w,C),I=i.x-P.x,O=i.y-P.y;if(I*I+O*O<=ro*ro)return M}return-1}function $(i){let c=o(),w=f(),C=a();for(let M=Z.length-1;M>=0;M--){let P=he(M,i,c,w,C);if(P)return{faceIndex:M,...P}}return null}let U=-1,Y={x:0,y:0},ke=0;function le(i,c){U=i,Y=c,ke=o()[["x","y","z"][i]],u.draggingAxisHandle=i,e.style.cursor="grabbing",t()}function s(i){if(J(),U<0)return;let c=i.x-Y.x,w=i.y-Y.y,M=Ee()[U],P=f(),O=(c*M.x+w*M.y)/P,X=Math.max(0,Math.min(1,ke+O)),W=o(),_=["x","y","z"],be={...W,[_[U]]:X};n(be);let ye=r(),Ke=l(),Ue=Ke>=0?Z[Ke]:null,Te={...ye};Ue&&U===Ue.fixedAxis?Te[_[U]]=X:Te[_[U]]=Math.min(ye[_[U]],X),d(Te,l()),t()}function p(){U=-1,u.draggingAxisHandle=-1}let h=-1,V=null,L=null,S=!1;function de(i,c,w,C){h=i,u.draggingFace=i,V=null,L=null,S=!1,C&&(S=!0,L={s:c,t:w}),Ae(i,c,w),e.style.cursor="crosshair",t()}function ie(i,c,w){if(J(),h<0)return;let C=o(),M=f(),P=a(),I=he(h,i,C,M,P),O=h;if(!I&&!w){for(let _=Z.length-1;_>=0;_--)if(_!==h&&(I=he(_,i,C,M,P),I)){O=_;break}}if(!I&&w&&(I=no(h,i,C,M,P),O=h),!I){t();return}O!==h&&(h=O,u.draggingFace=O,V=null,S=!1,L=null);let{s:X,t:W}=I;if(c&&L){if(S){let _=Math.abs(X-L.s),be=Math.abs(W-L.t),ye=.02;(_>ye||be>ye)&&(V=_>=be?"u":"v",S=!1)}V==="u"?W=L.t:V==="v"&&(X=L.s)}else c||(V=null,S=!1,L=null);Ae(O,X,W),t()}function Ae(i,c,w){let C=Z[i],M=o(),P=["x","y","z"],I={...r()};I[P[C.uAxis]]=c*M[P[C.uAxis]],I[P[C.vAxis]]=w*M[P[C.vAxis]],I[P[C.fixedAxis]]=M[P[C.fixedAxis]],d(I,i)}function ue(){h=-1,u.draggingFace=-1,V=null,S=!1,L=null}function te(i){T=!0;let c=y(i);if(b()){if(u.alphaMode){if(oe(c)<=K){u.alphaMode=!1,t();return}if(ge(c)){i.preventDefault(),g=!0,ce(c);return}u.alphaMode=!1,t();return}oe(c)<=K&&B()}let w=Q(c);if(w>=0){i.preventDefault(),le(w,c);return}let C=$(c);if(C){i.preventDefault(),de(C.faceIndex,C.s,C.t,i.shiftKey),u.alphaMode||D();return}let M=a();Math.hypot(c.x-M.x,c.y-M.y)>f()+20&&(i.preventDefault(),v=!0,z=c,u.viewRotating=!0,t())}function De(i){let c=y(i);if(g){i.preventDefault(),ce(c);return}if(v){if(i.preventDefault(),!z){z=c;return}let I=c.x-z.x,O=c.y-z.y,X=Ie();Ce(Math.max(-60,Math.min(60,X.yaw+I*.12)),Math.max(-60,Math.min(60,X.pitch+O*.12))),I!==0&&A(Math.max(0,Math.min(1,H()+I*.002))),z=c,t();return}if(T&&u.alphaMode&&ge(c)){i.preventDefault(),g=!0,ce(c);return}if(U>=0){i.preventDefault(),s(c);return}if(h>=0){i.preventDefault(),ie(c,i.shiftKey,i.altKey);return}let w=Q(c),C=$(c),M=w,P=w>=0?-1:C?C.faceIndex:-1;(M!==u.hoveredAxisHandle||P!==u.hoveredFace)&&(u.hoveredAxisHandle=M,u.hoveredFace=P,e.style.cursor=M>=0?"grab":P>=0?"crosshair":"default",t())}function Fe(i){J(),T=!1,g=!1,v&&(v=!1,u.viewRotating=!1,z=null,t());let c=U>=0||h>=0;p(),ue(),c&&(u.hoveredAxisHandle=-1,u.hoveredFace=-1,e.style.cursor="default",t())}function Be(i){if(i.touches.length!==1)return;E=!0;let c=y(i.touches[0]);if(b()){if(u.alphaMode){if(oe(c)<=K){u.alphaMode=!1,t();return}if(ge(c)){i.preventDefault(),g=!0,ce(c);return}u.alphaMode=!1,t();return}oe(c)<=K&&B()}let w=Q(c);if(w>=0){i.preventDefault(),le(w,c);return}let C=$(c);if(C){i.preventDefault(),de(C.faceIndex,C.s,C.t,!1),u.alphaMode||D();return}let M=a();Math.hypot(c.x-M.x,c.y-M.y)>f()+20&&(i.preventDefault(),v=!0,z=c,u.viewRotating=!0,t())}function Oe(i){if(i.touches.length!==1)return;let c=y(i.touches[0]);if(g)i.preventDefault(),ce(c);else if(E&&u.alphaMode&&ge(c))i.preventDefault(),g=!0,ce(c);else if(U>=0)i.preventDefault(),s(c);else if(v){if(i.preventDefault(),!z){z=c;return}let w=c.x-z.x,C=c.y-z.y,M=Ie();Ce(Math.max(-60,Math.min(60,M.yaw+w*.12)),Math.max(-60,Math.min(60,M.pitch+C*.12))),w!==0&&A(Math.max(0,Math.min(1,H()+w*.002))),z=c,t()}else h>=0&&(i.preventDefault(),ie(c,!1,!1))}function _e(i){J(),E=!1,g=!1,v&&(v=!1,u.viewRotating=!1,z=null,t()),p(),ue(),t()}function Ge(i){if(i.key==="1"){Ce(Math.PI/4,0),t();return}if(i.key==="0"){Qe(),t();return}if(i.key==="2"){Ce(.95,-.54),t();return}if(u.alphaMode){if(i.key==="Escape"){u.alphaMode=!1,t();return}if(i.key==="ArrowUp"||i.key==="ArrowRight"){i.preventDefault(),x(Math.min(1,m()+(i.shiftKey?.08:.02))),t();return}if(i.key==="ArrowDown"||i.key==="ArrowLeft"){i.preventDefault(),x(Math.max(0,m()-(i.shiftKey?.08:.02))),t();return}}let c=i.shiftKey?.04:.004,w=r(),C=o(),M=Ee(),P=0,I=0;switch(i.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}i.preventDefault();let O={...w},X=["x","y","z"];for(let W=0;W<3;W++){let _=P*M[W].x+I*M[W].y;if(Math.abs(_)>.3){let be=w[X[W]]+c*Math.sign(_);O[X[W]]=Math.max(0,Math.min(C[X[W]],be))}}d(O,l()),t()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",De),window.addEventListener("mouseup",Fe),e.addEventListener("touchstart",Be,{passive:!1}),e.addEventListener("touchmove",Oe,{passive:!1}),e.addEventListener("touchend",_e),e.addEventListener("keydown",Ge),e.setAttribute("tabindex","0");function co(){J(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",Fe),e.removeEventListener("touchstart",Be),e.removeEventListener("touchmove",Oe),e.removeEventListener("touchend",_e),e.removeEventListener("keydown",Ge)}return{state:u,destroy:co}}var io=`.box-picker {\r
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
`;var Xo=Vo,so=!1;function zo(){if(so||typeof document>"u")return;so=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=io,document.head.appendChild(e)}function Vo(e,o={}){let n=o.size??300,r=o.controls??!0,d=o.showInputs??!1,l=o.showModeToggle??!1,f=o.showCorners??!1,a={mode:()=>t,switchMode:s=>ee(s),onHexInput:s=>{let p=He(s);p?(m=fe(D?{r:255-p.r,g:255-p.g,b:255-p.b}:p,t),x={x:Math.max(x.x,m.x),y:Math.max(x.y,m.y),z:Math.max(x.z,m.z)},Y(),$(),B()):$()},onChannelInput:(s,p,h)=>{let V=Math.max(0,Math.min(h,p)),L=["x","y","z"],S=V/h;if(D){let de={...m,[L[s]]:S},ie=ne(de,t);m=fe({r:255-ie.r,g:255-ie.g,b:255-ie.b},t)}else m={...m,[L[s]]:S};S>x[L[s]]&&(x={...x,[L[s]]:S}),Y(),$(),B()},getRgbForCopy:()=>ne(m,t),onRandom:s=>le(s),onReset:()=>le({r:0,g:0,b:0})},t=o.mode??"rgb",b=o.initialColor?fe(o.initialColor,t):{x:.7,y:.4,z:.85},x={x:1,y:1,z:1},m={...b},k=0,A=()=>o.alpha!==void 0,H=Math.max(0,Math.min(1,o.alpha??1));function u(s){let p=Math.max(0,Math.min(1,s));p!==H&&(H=p,Y(),$(),B())}function y(s){let p=Q(),h=xe(p);h.s=Math.max(0,Math.min(100,s*100));let V=Pe(h);le(D?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let g=new Set;zo();let T=document.createElement("div");T.className="box-picker";let E=document.createElement("canvas");E.style.cursor="grab",T.appendChild(E);let v=eo(E,n),z=null,G=document.createElement("div");G.className="box-picker-controls",z=document.createElement("div"),z.className="box-picker-swatch",G.appendChild(z),T.appendChild(G),(d||l||f)&&import("./controls-VBFXR3DH.js").then(s=>{s.createControls(G,a,{showInputs:d,showModeToggle:l,showCorners:f})}).catch(()=>{}),e.appendChild(T);let F=ao(E,()=>x,s=>{x=s},()=>m,(s,p)=>{m=s,k=p,Y(),$()},()=>k,()=>v.scale,()=>v.center,B,A,u,()=>H,()=>R(m,v.scale,v.center),y,()=>xe(Q()).s/100),D=!1,j=!0;E.addEventListener("mouseenter",()=>{j=!0,B()}),E.addEventListener("mouseleave",()=>{j=!1,B()}),E.addEventListener("dblclick",()=>{D=!D,Je(D),Y(),$(),B()});function ee(s){if(s===t)return;let p=ne(m,t),h={...m},V={...x};t=s;let L=fe(p,t),S={x:1,y:1,z:1};m=L,x=S,me(h,L,V,S,300),$()}let K=null;function me(s,p,h,V,L){K!==null&&cancelAnimationFrame(K);let S=performance.now();function de(ie){let Ae=ie-S,ue=Math.min(1,Ae/L),te=1-Math.pow(1-ue,3);m={x:s.x+(p.x-s.x)*te,y:s.y+(p.y-s.y)*te,z:s.z+(p.z-s.z)*te},x={x:h.x+(V.x-h.x)*te,y:h.y+(V.y-h.y)*te,z:h.z+(V.z-h.z)*te},J(),Y(),ue<1?K=requestAnimationFrame(de):K=null}K=requestAnimationFrame(de)}let N=!1;function B(){N||(N=!0,requestAnimationFrame(()=>{N=!1,J()}))}function J(){oo(v,x,m,k,t,F.state,j,{active:F.state.alphaMode,alpha:H,rgb:Q()})}function pe(s,p,h){return Math.round(s+(p-s)*h)}function oe(s,p){let h=p>0?255:0,V=Math.abs(p);return ve({r:pe(s.r,h,V),g:pe(s.g,h,V),b:pe(s.b,h,V)})}function Ve(s,p){let h=He(p)||{r:128,g:128,b:128},V=oe(h,.35),L=oe(h,0),S=oe(h,-.35);s.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,s.style.backgroundColor="transparent"}function ce(s){try{navigator.clipboard.writeText(s).catch(()=>{})}catch{}}function ge(s){s&&(s.style.borderColor="#4ade80",s.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},500))}function Q(){let s=ne(m,t);return D?{r:255-s.r,g:255-s.g,b:255-s.b}:s}function $(){if(!r)return;let s=Q(),p=ve(s);z&&Ve(z,p);let h=T.querySelector(".box-picker-hex");h&&(h.value=p),U(),T._updateModeButtons&&T._updateModeButtons()}function U(){if(!r)return;let s=we[t],p=D?fe(Q(),t):m,h=We(p,t),V=T.querySelectorAll(".box-picker-channel input"),L=T.querySelectorAll(".box-picker-channel label");for(let S=0;S<V.length;S++)L[S].textContent=s[S],L[S].style.color="",L[S].style.textShadow="none",V[S].value=String(h[S])}function Y(){let s=Q(),p={rgb:s,hsb:xe(s),oklch:ze(s),hex:ve(s),alpha:H};for(let h of g)h(p)}function ke(){let s=ne(m,t);return{rgb:s,hsb:xe(s),oklch:ze(s),hex:ve(s)}}$(),J();let le=s=>{m=fe(s,t),x={x:Math.max(x.x,m.x),y:Math.max(x.y,m.y),z:Math.max(x.z,m.z)};let p=R(m,v.scale,v.center);k=-1;for(let h=Z.length-1;h>=0;h--)if(he(h,p,x,v.scale,v.center)){k=h;break}Y(),$(),B()};return{getColor:ke,getMode:()=>t,setColor:le,setAlpha:u,getAlpha:()=>H,setMode(s){ee(s)},on(s,p){g.add(p)},off(s,p){g.delete(p)},destroy(){F.destroy(),K!==null&&cancelAnimationFrame(K),e.removeChild(T)}}}export{Vo as createBoxColorPicker,Xo as createColorPicker,Je as setBoxInvert};
