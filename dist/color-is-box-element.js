var Re={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ze={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function q(e){let o=e.r/255,n=e.g/255,t=e.b/255,a=Math.max(o,n,t),s=Math.min(o,n,t),u=a-s,i=0;u!==0&&(a===o?i=((n-t)/u+6)%6:a===n?i=(t-o)/u+2:i=(o-n)/u+4,i*=60);let r=a===0?0:u/a*100,h=a*100;return{h:i,s:r,b:h}}function be(e){let o=e.h,n=e.s/100,t=e.b/100,a=t*n,s=a*(1-Math.abs(o/60%2-1)),u=t-a,i,r,h;return o<60?(i=a,r=s,h=0):o<120?(i=s,r=a,h=0):o<180?(i=0,r=a,h=s):o<240?(i=0,r=s,h=a):o<300?(i=s,r=0,h=a):(i=a,r=0,h=s),{r:Math.round((i+u)*255),g:Math.round((r+u)*255),b:Math.round((h+u)*255)}}function Ee(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ie(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function mo(e){let o=Ee(e.r/255),n=Ee(e.g/255),t=Ee(e.b/255),a=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,u=.0883024619*o+.2817188376*n+.6299787005*t,i=Math.cbrt(a),r=Math.cbrt(s),h=Math.cbrt(u);return{L:.2104542553*i+.793617785*r-.0040720468*h,a:1.9779984951*i-2.428592205*r+.4505937099*h,b:.0259040371*i+.7827717662*r-.808675766*h}}function po(e,o,n){let t=e+.3963377774*o+.2158037573*n,a=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,u=t*t*t,i=a*a*a,r=s*s*s,h=4.0767416621*u-3.3077115913*i+.2309699292*r,b=-1.2684380046*u+2.6097574011*i-.3413193965*r,g=-.0041960863*u-.7034186147*i+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Ie(h)))*255),g:Math.round(Math.max(0,Math.min(1,Ie(b)))*255),b:Math.round(Math.max(0,Math.min(1,Ie(g)))*255)}}function me(e){let o=mo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Ae(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return po(e.l,n,t)}function yo(e,o,n){let t=Ae({l:e,c:o,h:n});if(Je(t))return{l:e,c:o,h:n};let a=0,s=o;for(let u=0;u<20;u++){let i=(a+s)/2;t=Ae({l:e,c:i,h:n}),Je(t)?a=i:s=i}return{l:e,c:a,h:n}}function Je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function le(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Qe=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return be({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Qe,a=e.z*359,s=yo(n,t,a);return Ae(s)}}function xe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=q(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=me(e);return{x:n.l,y:Math.min(n.c/Qe,1),z:n.h/359}}}function qe(e,o){let n=Ze[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function eo(e,o,n,t,a,s=!1){let u;e===0?u={x:t,y:o,z:n}:e===1?u={x:o,y:t,z:n}:u={x:o,y:n,z:t};let i=re(u,a);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var to=Math.PI/6,vo=Math.cos(to),Mo=Math.sin(to),we=!1;function no(e){we=e}var ae=0,ie=0;function Ve(e,o){ae=e,ie=o}function Fe(){return{yaw:ae,pitch:ie}}function ro(){ae=0,ie=0}function Co(e){if(ae===0&&ie===0)return e;let o=Math.cos(ae),n=Math.sin(ae),t=Math.cos(ie),a=Math.sin(ie),s=e.x*o+e.z*n,u=e.y,i=-e.x*n+e.z*o,r=u*t-i*a,h=u*a+i*t;return{x:s,y:r,z:h}}function ko(e){if(ae===0&&ie===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(ae),t=Math.sin(ae),a=Math.cos(ie),s=Math.sin(ie),u=o.x*n+o.z*t,i=o.y,r=-o.x*t+o.z*n,h=i*a-r*s,b=i*s+r*a;return{x:u+.5,y:h+.5,z:b+.5}}function S(e,o,n){let t=ko(e);return{x:n.x+(t.y-t.x)*vo*o,y:n.y+t.z*o-(t.x+t.y)*Mo*o}}function Ao(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Z=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],wo=64,ao={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function io(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function so(e,o,n,t,a,s,u=!0,i=null){let{ctx:r,scale:h,center:b,width:g,height:k}=e;r.save(),r.clearRect(0,0,g,k);let A=Ao(o),H=A.map(f=>S(f,h,b));if(zo(r,h,b,a),r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,To(r,H,A,o,a,s.viewRotating),r.restore(),u&&!s.viewRotating&&Ro(r,a,h,b),s.viewRotating){let f=S({x:0,y:0,z:0},h,b),y=S({x:1,y:1,z:1},h,b);r.beginPath(),r.arc(f.x,f.y,7,0,Math.PI*2),r.fillStyle="#000",r.fill(),r.strokeStyle="rgba(255,255,255,.9)",r.lineWidth=1.5,r.stroke(),r.beginPath(),r.arc(y.x,y.y,7,0,Math.PI*2),r.fillStyle="#fff",r.fill(),r.strokeStyle="rgba(0,0,0,.55)",r.lineWidth=1.2,r.stroke(),r.font="9px monospace",r.fillStyle="rgba(51,65,85,.85)",r.textAlign="left",r.fillText("0",f.x+10,f.y+12),r.fillText("255,255,255",y.x+10,y.y+12)}if(s.viewRotating){let f=[{p:{x:0,y:0,z:0},c:"#000000",r:7},{p:{x:1,y:1,z:1},c:"#ffffff",r:7},{p:{x:1,y:0,z:0},c:"#ff0000",r:5},{p:{x:0,y:1,z:0},c:"#00cc00",r:5},{p:{x:0,y:0,z:1},c:"#0000ff",r:5},{p:{x:1,y:1,z:0},c:"#ffff00",r:5},{p:{x:0,y:1,z:1},c:"#00dddd",r:5},{p:{x:1,y:0,z:1},c:"#ff00aa",r:5}];for(let y of f){let p=S(y.p,h,b);r.beginPath(),r.arc(p.x,p.y,y.r,0,Math.PI*2),r.fillStyle=y.c,r.fill(),r.strokeStyle=y.c==="#000000"?"rgba(255,255,255,.9)":"rgba(0,0,0,.45)",r.lineWidth=1.2,r.stroke()}}if(t>=0){let f=re(n,a),y=we?{r:255-f.r,g:255-f.g,b:255-f.b}:f,p=S(n,h,b);i&&i.active&&So(r,p,i.rgb,i.alpha),Lo(r,p,y)}r.restore()}var Vo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function zo(e,o,n,t){let a=S({x:0,y:0,z:0},o,n),s=[S({x:1,y:0,z:0},o,n),S({x:0,y:1,z:0},o,n),S({x:0,y:0,z:1},o,n)],u=Vo[t];e.lineWidth=1.5;for(let i=0;i<s.length;i++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s[i].x,s[i].y),e.strokeStyle=u[i],e.stroke()}function To(e,o,n,t,a,s){let u=[t.x,t.y,t.z];for(let i=0;i<Z.length;i++){let r=Z[i],h=u[r.fixedAxis],b=u[r.uAxis],g=u[r.vAxis];if(b<.002&&g<.002)continue;let k=Co(r.normal),A=k.x+k.y+k.z>0,H=r.quad.map(f=>o[f]);A?oo(e,H,r.fixedAxis,h,b,g,a):(e.save(),e.globalAlpha=0,oo(e,H,r.fixedAxis,h,b,g,a),e.restore())}}function oo(e,o,n,t,a,s,u){let i=wo,r=document.createElement("canvas");r.width=i,r.height=i;let h=r.getContext("2d"),b=h.createImageData(i,i),g=b.data;for(let j=0;j<i;j++)for(let oe=0;oe<i;oe++){let G=oe/(i-1)*a,ve=j/(i-1)*s,X=eo(n,G,ve,t,u,we),B=(j*i+oe)*4;g[B]=X.r,g[B+1]=X.g,g[B+2]=X.b,g[B+3]=255}h.putImageData(b,0,0);let k=o[0],A=o[1],H=o[2],f=o[3],y=A.x-k.x,p=A.y-k.y,T=f.x-k.x,I=f.y-k.y;e.save(),e.beginPath(),e.moveTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(H.x,H.y),e.lineTo(f.x,f.y),e.closePath(),e.clip();let v=2/i,V=k.x-y*v-T*v,_=k.y-p*v-I*v,D=1+2*v,F=1+2*v;e.transform(y*D/i,p*D/i,T*F/i,I*F/i,V,_),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function Ro(e,o,n,t){let a=Re[o],s=we?[S({x:0,y:1,z:1},n,t),S({x:1,y:0,z:1},n,t),S({x:1,y:1,z:0},n,t)]:[S({x:1,y:0,z:0},n,t),S({x:0,y:1,z:0},n,t),S({x:0,y:0,z:1},n,t)],u=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let r=s[i].x+u[i].x,h=s[i].y+u[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(a[i],r,h)}e.globalAlpha=1,e.restore()}var ee=30,ce=13;function So(e,o,n,t){let a=(ee+ce)/2,s=5,u=Math.floor(o.x/s)*s,i=Math.floor(o.y/s)*s,r=ee*2+s*2,h=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,ce,0,Math.PI*2,!0),e.clip();for(let y=-1;y*s<=r;y++)for(let p=-1;p*s<=r;p++)e.fillStyle=(y+p)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+y*s,i+p*s,s,s);let b="rgba("+n.r+","+n.g+","+n.b+",0)",g="rgba("+n.r+","+n.g+","+n.b+",1)",k=e;if(typeof k.createConicGradient=="function"){let y=k.createConicGradient(-Math.PI/2,o.x,o.y);y.addColorStop(0,b),y.addColorStop(1,g),e.fillStyle=y,e.fillRect(u-ee,i-ee,r,r)}else for(let p=0;p<36;p++){let T=-Math.PI/2+p/36*Math.PI*2,I=-Math.PI/2+(p+1)/36*Math.PI*2,v=(p+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*ce,o.y+Math.sin(T)*ce),e.arc(o.x,o.y,ee,T,I),e.arc(o.x,o.y,ce,I,T,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+v.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,ce,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=h*Math.PI*2,H=o.x+a*Math.sin(A),f=o.y-a*Math.cos(A);e.beginPath(),e.arc(H,f,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Lo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function lo(e,o,n,t){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(a[e],n,t)}function De(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function ye(e,o,n,t,a){let s=Z[e],u=[n.x,n.y,n.z],i=u[s.uAxis],r=u[s.vAxis];if(i<.002||r<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[s.fixedAxis]]=u[s.fixedAxis];let g={...h};g[b[s.uAxis]]=i;let k={...h};k[b[s.vAxis]]=r;let A=S(h,t,a),H=S(g,t,a),f=S(k,t,a),y=H.x-A.x,p=H.y-A.y,T=f.x-A.x,I=f.y-A.y,v=y*I-p*T;if(Math.abs(v)<1e-6)return null;let V=o.x-A.x,_=o.y-A.y,D=(V*I-_*T)/v,F=(_*y-V*p)/v;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function co(e,o,n,t,a){let s=Z[e],u=[n.x,n.y,n.z],i=u[s.uAxis],r=u[s.vAxis];if(i<.002||r<.002)return null;let h={x:0,y:0,z:0},b=["x","y","z"];h[b[s.fixedAxis]]=u[s.fixedAxis];let g={...h};g[b[s.uAxis]]=i;let k={...h};k[b[s.vAxis]]=r;let A=S(h,t,a),H=S(g,t,a),f=S(k,t,a),y=H.x-A.x,p=H.y-A.y,T=f.x-A.x,I=f.y-A.y,v=y*I-p*T;if(Math.abs(v)<1e-6)return null;let V=o.x-A.x,_=o.y-A.y,D=(V*I-_*T)/v,F=(_*y-V*p)/v;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var uo=22;function ho(e,o,n,t,a,s,u,i,r,h,b,g,k,A,H){let f={...ao};function y(l){let d=e.getBoundingClientRect();return{x:l.clientX-d.left,y:l.clientY-d.top}}let p=!1,T=!1,I=!1,v=!1,V=null,_=600,D=null;function F(){j(),D=setTimeout(oe,_)}function j(){D!==null&&(clearTimeout(D),D=null)}function oe(){D=null,f.alphaMode=!1,fe(),m(),v=!0,f.viewRotating=!0,V=null,r()}let G=9,ve=1e3,X=null;function B(){J(),X=setTimeout(Me,ve)}function J(){X!==null&&(clearTimeout(X),X=null),j()}function Me(){X=null,f.alphaMode=!0,m(),fe(),r()}function te(l){let d=k();return Math.hypot(l.x-d.x,l.y-d.y)}function Pe(l){let d=k();return(Math.atan2(l.x-d.x,-(l.y-d.y))+Math.PI*2)%(Math.PI*2)}function ue(l){b(Pe(l)/(Math.PI*2)),r()}function Ce(l){let d=te(l);return d>=ce-4&&d<=ee+6}function Q(l){let d=o(),w=u(),C=i();for(let M=0;M<3;M++){let P=lo(M,d,w,C),E=l.x-P.x,O=l.y-P.y;if(E*E+O*O<=uo*uo)return M}return-1}function N(l){let d=o(),w=u(),C=i();for(let M=Z.length-1;M>=0;M--){let P=ye(M,l,d,w,C);if(P)return{faceIndex:M,...P}}return null}let K=-1,Y={x:0,y:0},ze=0;function de(l,d){K=l,Y=d,ze=o()[["x","y","z"][l]],f.draggingAxisHandle=l,e.style.cursor="grabbing",r()}function c(l){if(J(),K<0)return;let d=l.x-Y.x,w=l.y-Y.y,M=De()[K],P=u(),O=(d*M.x+w*M.y)/P,U=Math.max(0,Math.min(1,ze+O)),W=o(),$=["x","y","z"],ge={...W,[$[K]]:U};n(ge);let ke=t(),je=s(),Ye=je>=0?Z[je]:null,He={...ke};Ye&&K===Ye.fixedAxis?He[$[K]]=U:He[$[K]]=Math.min(ke[$[K]],U),a(He,s()),r()}function m(){K=-1,f.draggingAxisHandle=-1}let x=-1,z=null,L=null,R=!1;function he(l,d,w,C){x=l,f.draggingFace=l,z=null,L=null,R=!1,C&&(R=!0,L={s:d,t:w}),Te(l,d,w),e.style.cursor="crosshair",r()}function se(l,d,w){if(J(),x<0)return;let C=o(),M=u(),P=i(),E=ye(x,l,C,M,P),O=x;if(!E&&!w){for(let $=Z.length-1;$>=0;$--)if($!==x&&(E=ye($,l,C,M,P),E)){O=$;break}}if(!E&&w&&(E=co(x,l,C,M,P),O=x),!E){r();return}O!==x&&(x=O,f.draggingFace=O,z=null,R=!1,L=null);let{s:U,t:W}=E;if(d&&L){if(R){let $=Math.abs(U-L.s),ge=Math.abs(W-L.t),ke=.02;($>ke||ge>ke)&&(z=$>=ge?"u":"v",R=!1)}z==="u"?W=L.t:z==="v"&&(U=L.s)}else d||(z=null,R=!1,L=null);Te(O,U,W),r()}function Te(l,d,w){let C=Z[l],M=o(),P=["x","y","z"],E={...t()};E[P[C.uAxis]]=d*M[P[C.uAxis]],E[P[C.vAxis]]=w*M[P[C.vAxis]],E[P[C.fixedAxis]]=M[P[C.fixedAxis]],a(E,l)}function fe(){x=-1,f.draggingFace=-1,z=null,R=!1,L=null}function ne(l){T=!0;let d=y(l);if(h()){if(f.alphaMode){if(te(d)<=G){f.alphaMode=!1,r();return}if(Ce(d)){l.preventDefault(),p=!0,ue(d);return}f.alphaMode=!1,r();return}te(d)<=G&&B()}let w=Q(d);if(w>=0){l.preventDefault(),de(w,d);return}let C=N(d);if(C){l.preventDefault(),he(C.faceIndex,C.s,C.t,l.shiftKey),f.alphaMode||F();return}let M=i();Math.hypot(d.x-M.x,d.y-M.y)>u()+20&&(l.preventDefault(),v=!0,V=d,f.viewRotating=!0,r())}function Ge(l){let d=y(l);if(p){l.preventDefault(),ue(d);return}if(v){if(l.preventDefault(),!V){V=d;return}let E=d.x-V.x,O=d.y-V.y,U=Fe();Ve(Math.max(-60,Math.min(60,U.yaw+E*.12)),Math.max(-60,Math.min(60,U.pitch+O*.12))),E!==0&&A(Math.max(0,Math.min(1,H()+E*.002))),V=d,r();return}if(T&&f.alphaMode&&Ce(d)){l.preventDefault(),p=!0,ue(d);return}if(K>=0){l.preventDefault(),c(d);return}if(x>=0){l.preventDefault(),se(d,l.shiftKey,l.altKey);return}let w=Q(d),C=N(d),M=w,P=w>=0?-1:C?C.faceIndex:-1;(M!==f.hoveredAxisHandle||P!==f.hoveredFace)&&(f.hoveredAxisHandle=M,f.hoveredFace=P,e.style.cursor=M>=0?"grab":P>=0?"crosshair":"default",r())}function Ke(l){J(),T=!1,p=!1,v&&(v=!1,f.viewRotating=!1,V=null,r());let d=K>=0||x>=0;m(),fe(),d&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",r())}function Ue(l){if(l.touches.length!==1)return;I=!0;let d=y(l.touches[0]);if(h()){if(f.alphaMode){if(te(d)<=G){f.alphaMode=!1,r();return}if(Ce(d)){l.preventDefault(),p=!0,ue(d);return}f.alphaMode=!1,r();return}te(d)<=G&&B()}let w=Q(d);if(w>=0){l.preventDefault(),de(w,d);return}let C=N(d);if(C){l.preventDefault(),he(C.faceIndex,C.s,C.t,!1),f.alphaMode||F();return}let M=i();Math.hypot(d.x-M.x,d.y-M.y)>u()+20&&(l.preventDefault(),v=!0,V=d,f.viewRotating=!0,r())}function Xe(l){if(l.touches.length!==1)return;let d=y(l.touches[0]);if(p)l.preventDefault(),ue(d);else if(I&&f.alphaMode&&Ce(d))l.preventDefault(),p=!0,ue(d);else if(K>=0)l.preventDefault(),c(d);else if(v){if(l.preventDefault(),!V){V=d;return}let w=d.x-V.x,C=d.y-V.y,M=Fe();Ve(Math.max(-60,Math.min(60,M.yaw+w*.12)),Math.max(-60,Math.min(60,M.pitch+C*.12))),w!==0&&A(Math.max(0,Math.min(1,H()+w*.002))),V=d,r()}else x>=0&&(l.preventDefault(),se(d,!1,!1))}function Ne(l){J(),I=!1,p=!1,v&&(v=!1,f.viewRotating=!1,V=null,r()),m(),fe(),r()}function We(l){if(l.key==="1"){Ve(Math.PI/4,0),r();return}if(l.key==="0"){ro(),r();return}if(l.key==="2"){Ve(.95,-.54),r();return}if(f.alphaMode){if(l.key==="Escape"){f.alphaMode=!1,r();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),b(Math.min(1,g()+(l.shiftKey?.08:.02))),r();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),b(Math.max(0,g()-(l.shiftKey?.08:.02))),r();return}}let d=l.shiftKey?.04:.004,w=t(),C=o(),M=De(),P=0,E=0;switch(l.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":E=-1;break;case"ArrowDown":E=1;break;default:return}l.preventDefault();let O={...w},U=["x","y","z"];for(let W=0;W<3;W++){let $=P*M[W].x+E*M[W].y;if(Math.abs($)>.3){let ge=w[U[W]]+d*Math.sign($);O[U[W]]=Math.max(0,Math.min(C[U[W]],ge))}}a(O,s()),r()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Ke),e.addEventListener("touchstart",Ue,{passive:!1}),e.addEventListener("touchmove",Xe,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",We),e.setAttribute("tabindex","0");function go(){J(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Ke),e.removeEventListener("touchstart",Ue),e.removeEventListener("touchmove",Xe),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",We)}return{state:f,destroy:go}}var fo=`.box-picker {\r
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
`;var xo=Eo,bo=!1;function Ho(){if(bo||typeof document>"u")return;bo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=fo,document.head.appendChild(e)}function Eo(e,o={}){let n=o.size??300,t=o.controls??!0,a=o.showInputs??!1,s=o.showModeToggle??!1,u=o.showCorners??!1,i={mode:()=>r,switchMode:c=>oe(c),onHexInput:c=>{let m=pe(c);m?(g=xe(F?{r:255-m.r,g:255-m.g,b:255-m.b}:m,r),b={x:Math.max(b.x,g.x),y:Math.max(b.y,g.y),z:Math.max(b.z,g.z)},Y(),N(),B()):N()},onChannelInput:(c,m,x)=>{let z=Math.max(0,Math.min(x,m)),L=["x","y","z"],R=z/x;if(F){let he={...g,[L[c]]:R},se=re(he,r);g=xe({r:255-se.r,g:255-se.g,b:255-se.b},r)}else g={...g,[L[c]]:R};R>b[L[c]]&&(b={...b,[L[c]]:R}),Y(),N(),B()},getRgbForCopy:()=>re(g,r),onRandom:c=>de(c),onReset:()=>de({r:0,g:0,b:0})},r=o.mode??"rgb",h=o.initialColor?xe(o.initialColor,r):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},g={...h},k=0,A=()=>o.alpha!==void 0,H=Math.max(0,Math.min(1,o.alpha??1));function f(c){let m=Math.max(0,Math.min(1,c));m!==H&&(H=m,Y(),N(),B())}function y(c){let m=Q(),x=q(m);x.s=Math.max(0,Math.min(100,c*100));let z=be(x);de(F?{r:255-z.r,g:255-z.g,b:255-z.b}:z)}let p=new Set;Ho();let T=document.createElement("div");T.className="box-picker";let I=document.createElement("canvas");I.style.cursor="grab",T.appendChild(I);let v=io(I,n),V=null,_=document.createElement("div");_.className="box-picker-controls",V=document.createElement("div"),V.className="box-picker-swatch",_.appendChild(V),T.appendChild(_),(a||s||u)&&import("./controls-VBFXR3DH.js").then(c=>{c.createControls(_,i,{showInputs:a,showModeToggle:s,showCorners:u})}).catch(()=>{}),e.appendChild(T);let D=ho(I,()=>b,c=>{b=c},()=>g,(c,m)=>{g=c,k=m,Y(),N()},()=>k,()=>v.scale,()=>v.center,B,A,f,()=>H,()=>S(g,v.scale,v.center),y,()=>q(Q()).s/100),F=!1,j=!0;I.addEventListener("mouseenter",()=>{j=!0,B()}),I.addEventListener("mouseleave",()=>{j=!1,B()}),I.addEventListener("dblclick",()=>{F=!F,no(F),Y(),N(),B()});function oe(c){if(c===r)return;let m=re(g,r),x={...g},z={...b};r=c;let L=xe(m,r),R={x:1,y:1,z:1};g=L,b=R,ve(x,L,z,R,300),N()}let G=null;function ve(c,m,x,z,L){G!==null&&cancelAnimationFrame(G);let R=performance.now();function he(se){let Te=se-R,fe=Math.min(1,Te/L),ne=1-Math.pow(1-fe,3);g={x:c.x+(m.x-c.x)*ne,y:c.y+(m.y-c.y)*ne,z:c.z+(m.z-c.z)*ne},b={x:x.x+(z.x-x.x)*ne,y:x.y+(z.y-x.y)*ne,z:x.z+(z.z-x.z)*ne},J(),Y(),fe<1?G=requestAnimationFrame(he):G=null}G=requestAnimationFrame(he)}let X=!1;function B(){X||(X=!0,requestAnimationFrame(()=>{X=!1,J()}))}function J(){so(v,b,g,k,r,D.state,j,{active:D.state.alphaMode,alpha:H,rgb:Q()})}function Me(c,m,x){return Math.round(c+(m-c)*x)}function te(c,m){let x=m>0?255:0,z=Math.abs(m);return le({r:Me(c.r,x,z),g:Me(c.g,x,z),b:Me(c.b,x,z)})}function Pe(c,m){let x=pe(m)||{r:128,g:128,b:128},z=te(x,.35),L=te(x,0),R=te(x,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${z}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${R}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function ue(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function Ce(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function Q(){let c=re(g,r);return F?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function N(){if(!t)return;let c=Q(),m=le(c);V&&Pe(V,m);let x=T.querySelector(".box-picker-hex");x&&(x.value=m),K(),T._updateModeButtons&&T._updateModeButtons()}function K(){if(!t)return;let c=Re[r],m=F?xe(Q(),r):g,x=qe(m,r),z=T.querySelectorAll(".box-picker-channel input"),L=T.querySelectorAll(".box-picker-channel label");for(let R=0;R<z.length;R++)L[R].textContent=c[R],L[R].style.color="",L[R].style.textShadow="none",z[R].value=String(x[R])}function Y(){let c=Q(),m={rgb:c,hsb:q(c),oklch:me(c),hex:le(c),alpha:H};for(let x of p)x(m)}function ze(){let c=re(g,r);return{rgb:c,hsb:q(c),oklch:me(c),hex:le(c)}}N(),J();let de=c=>{g=xe(c,r),b={x:Math.max(b.x,g.x),y:Math.max(b.y,g.y),z:Math.max(b.z,g.z)};let m=S(g,v.scale,v.center);k=-1;for(let x=Z.length-1;x>=0;x--)if(ye(x,m,b,v.scale,v.center)){k=x;break}Y(),N(),B()};return{getColor:ze,getMode:()=>r,setColor:de,setAlpha:f,getAlpha:()=>H,setMode(c){oe(c)},on(c,m){p.add(m)},off(c,m){p.delete(m)},destroy(){D.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(T)}}}function $e(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:pe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let a=pe(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:a,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Be(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Be(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?be({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:be({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Ae({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Be(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:be({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Se(e,o,n=1){if(o==="hex")return le(e);if(o==="hex-alpha")return le(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let a=Oe(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%`}if(o==="hsla"){let a=Oe(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let a=q(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%`}if(o==="hsva"){let a=q(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let a=Oe(e);return`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let a=q(e);return`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+n.toFixed(3)})`}let t=me(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Be(e,o,n){let t=o/100,a=n/100,s=(1-Math.abs(2*a-1))*t,u=s*(1-Math.abs(e/60%2-1)),i=a-s/2,r=0,h=0,b=0;return e<60?(r=s,h=u):e<120?(r=u,h=s):e<180?(h=s,b=u):e<240?(h=u,b=s):e<300?(r=u,b=s):(r=s,b=u),{r:Math.round((r+i)*255),g:Math.round((h+i)*255),b:Math.round((b+i)*255)}}function Oe(e){let o=e.r/255,n=e.g/255,t=e.b/255,a=Math.max(o,n,t),s=Math.min(o,n,t),u=(a+s)/2;if(a===s)return{h:0,s:0,l:u*100};let i=a-s,r=u>.5?i/(2-a-s):i/(a+s),h=0;return a===o?h=((n-t)/i+(n<t?6:0))*60:a===n?h=((t-o)/i+2)*60:h=((o-n)/i+4)*60,{h,s:r*100,l:u*100}}var Le=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),a=t?$e(t,this.model):null;this.alpha=a?.alpha??1;let s=a?.rgb??{r:255,g:255,b:255},u=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=xo(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...u.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",Se(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Se(i.rgb,this.model,i.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let a=$e(t,this.model);a&&(this.alpha=a.alpha,this.picker.setColor(a.rgb),this.picker.setAlpha(a.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Se({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},_e=class extends Le{constructor(){super("hex")}},Io=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Io)customElements.get(e)||customElements.define(e,class extends Le{constructor(){super(o)}});var nt=_e;export{_e as ColorIsBoxElement,Eo as createBoxColorPicker,xo as createColorPicker,nt as default,no as setBoxInvert};
