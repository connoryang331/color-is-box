var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ke={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ae(e){let o=e.r/255,t=e.g/255,i=e.b/255,b=Math.max(o,t,i),l=Math.min(o,t,i),u=b-l,r=0;u!==0&&(b===o?r=((t-i)/u+6)%6:b===t?r=(i-o)/u+2:r=(o-t)/u+4,r*=60);let a=b===0?0:u/b*100,n=b*100;return{h:r,s:a,b:n}}function we(e){let o=e.h,t=e.s/100,i=e.b/100,b=i*t,l=b*(1-Math.abs(o/60%2-1)),u=i-b,r,a,n;return o<60?(r=b,a=l,n=0):o<120?(r=l,a=b,n=0):o<180?(r=0,a=b,n=l):o<240?(r=0,a=l,n=b):o<300?(r=l,a=0,n=b):(r=b,a=0,n=l),{r:Math.round((r+u)*255),g:Math.round((a+u)*255),b:Math.round((n+u)*255)}}function Se(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Re(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function so(e){let o=Se(e.r/255),t=Se(e.g/255),i=Se(e.b/255),b=.4122214708*o+.5363325363*t+.0514459929*i,l=.2119034982*o+.6806995451*t+.1073969566*i,u=.0883024619*o+.2817188376*t+.6299787005*i,r=Math.cbrt(b),a=Math.cbrt(l),n=Math.cbrt(u);return{L:.2104542553*r+.793617785*a-.0040720468*n,a:1.9779984951*r-2.428592205*a+.4505937099*n,b:.0259040371*r+.7827717662*a-.808675766*n}}function lo(e,o,t){let i=e+.3963377774*o+.2158037573*t,b=e-.1055613458*o-.0638541728*t,l=e-.0894841775*o-1.291485548*t,u=i*i*i,r=b*b*b,a=l*l*l,n=4.0767416621*u-3.3077115913*r+.2309699292*a,x=-1.2684380046*u+2.6097574011*r-.3413193965*a,h=-.0041960863*u-.7034186147*r+1.707614701*a;return{r:Math.round(Math.max(0,Math.min(1,Re(n)))*255),g:Math.round(Math.max(0,Math.min(1,Re(x)))*255),b:Math.round(Math.max(0,Math.min(1,Re(h)))*255)}}function Te(e){let o=so(e),t=Math.sqrt(o.a*o.a+o.b*o.b),i=Math.atan2(o.b,o.a)*(180/Math.PI);return i<0&&(i+=360),{l:o.L,c:t,h:t<1e-4?0:i}}function Pe(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),i=e.c*Math.sin(o);return lo(e.l,t,i)}function co(e,o,t){let i=Pe({l:e,c:o,h:t});if(Xe(i))return{l:e,c:o,h:t};let b=0,l=o;for(let u=0;u<20;u++){let r=(b+l)/2;i=Pe({l:e,c:r,h:t}),Xe(i)?b=r:l=r}return{l:e,c:b,h:t}}function Xe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ve(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Le(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var We=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return we({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,i=e.y*We,b=e.z*359,l=co(t,i,b);return Pe(l)}}function fe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ae(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Te(e);return{x:t.l,y:Math.min(t.c/We,1),z:t.h/359}}}function $e(e,o){let t=Ke[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function je(e,o,t,i,b,l=!1){let u;e===0?u={x:i,y:o,z:t}:e===1?u={x:o,y:i,z:t}:u={x:o,y:t,z:i};let r=ne(u,b);return l?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var Ye=Math.PI/6,uo=Math.cos(Ye),bo=Math.sin(Ye),Me=!1;function Ze(e){Me=e}var se=0,le=0;function Ie(e,o){se=e,le=o}function He(){return{yaw:se,pitch:le}}function fo(e){if(se===0&&le===0)return e;let o=Math.cos(se),t=Math.sin(se),i=Math.cos(le),b=Math.sin(le),l=e.x*o+e.z*t,u=e.y,r=-e.x*t+e.z*o,a=u*i-r*b,n=u*b+r*i;return{x:l,y:a,z:n}}function ho(e){if(se===0&&le===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},t=Math.cos(se),i=Math.sin(se),b=Math.cos(le),l=Math.sin(le),u=o.x*t+o.z*i,r=o.y,a=-o.x*i+o.z*t,n=r*b-a*l,x=r*l+a*b;return{x:u+.5,y:n+.5,z:x+.5}}function R(e,o,t){let i=ho(e);return{x:t.x+(i.y-i.x)*uo*o,y:t.y+i.z*o-(i.x+i.y)*bo*o}}function xo(e){let{x:o,y:t,z:i}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:i},{x:o,y:t,z:0},{x:o,y:0,z:i},{x:0,y:t,z:i},{x:o,y:t,z:i}]}var J=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],mo=64,Je={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Qe(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let i=e.getContext("2d");return i.scale(t,t),{ctx:i,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function qe(e,o,t,i,b,l,u=!0,r=null,a=null){let{ctx:n,scale:x,center:h,width:k,height:A}=e;n.save(),n.clearRect(0,0,k,A);let I=xo(o),f=I.map(g=>R(g,x,h));if(n.save(),n.globalAlpha=l.viewRotating?.32:1,po(n,x,h,b),n.restore(),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,yo(n,f,I,o,b,l.viewRotating),n.restore(),u&&(n.save(),n.globalAlpha=l.viewRotating?.5:1,Mo(n,b,x,h),n.restore()),a&&a.active&&l.ringAlpha>.01&&Ao(n,x,h,a.rgb,a.sat,l.ringAlpha),l.viewRotating){let g=R({x:0,y:0,z:0},x,h),y=R({x:1,y:1,z:1},x,h);n.save(),n.setLineDash([6,5]),n.strokeStyle="rgba(107,114,128,.75)",n.lineWidth=1.6,n.beginPath(),n.moveTo(g.x,g.y),n.lineTo(y.x,y.y),n.stroke(),n.restore(),n.beginPath(),n.arc(g.x,g.y,5,0,Math.PI*2),n.fillStyle="#111",n.fill(),n.strokeStyle="rgba(0,0,0,.45)",n.lineWidth=1,n.stroke(),n.beginPath(),n.arc(y.x,y.y,5,0,Math.PI*2),n.fillStyle="#fff",n.fill(),n.strokeStyle="rgba(0,0,0,.5)",n.lineWidth=1,n.stroke(),n.font="9px monospace",n.fillStyle="rgba(51,65,85,.85)",n.textAlign="left",n.fillText("0",g.x+9,g.y+12),n.fillText("255,255,255",y.x+9,y.y+12)}if(i>=0){let g=ne(t,b),y=Me?{r:255-g.r,g:255-g.g,b:255-g.b}:g,w=R(t,x,h);r&&r.active&&wo(n,w,r.rgb,r.alpha),To(n,w,y)}n.restore()}var go={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function po(e,o,t,i){let b=R({x:0,y:0,z:0},o,t),l=[R({x:1,y:0,z:0},o,t),R({x:0,y:1,z:0},o,t),R({x:0,y:0,z:1},o,t)],u=go[i];e.lineWidth=1.5;for(let r=0;r<l.length;r++)e.beginPath(),e.moveTo(b.x,b.y),e.lineTo(l[r].x,l[r].y),e.strokeStyle=u[r],e.stroke()}function yo(e,o,t,i,b,l){let u=[i.x,i.y,i.z],r=l?.7:1;for(let a=0;a<J.length;a++){let n=J[a],x=u[n.fixedAxis],h=u[n.uAxis],k=u[n.vAxis];if(h<.002&&k<.002)continue;let A=fo(n.normal),I=A.x+A.y+A.z>0,f=n.quad.map(g=>o[g]);if(I)e.save(),e.globalAlpha=r,vo(e,f,n.fixedAxis,x,h,k,b),e.restore();else{e.save(),e.globalAlpha=l?.14:0,e.beginPath(),e.moveTo(f[0].x,f[0].y);for(let g=1;g<4;g++)e.lineTo(f[g].x,f[g].y);e.closePath(),e.fillStyle="#ffffff",e.fill(),e.restore()}}}function vo(e,o,t,i,b,l,u){let r=mo,a=document.createElement("canvas");a.width=r,a.height=r;let n=a.getContext("2d"),x=n.createImageData(r,r),h=x.data;for(let Y=0;Y<r;Y++)for(let ee=0;ee<r;ee++){let U=ee/(r-1)*b,me=Y/(r-1)*l,X=je(t,U,me,i,u,Me),O=(Y*r+ee)*4;h[O]=X.r,h[O+1]=X.g,h[O+2]=X.b,h[O+3]=255}n.putImageData(x,0,0);let k=o[0],A=o[1],I=o[2],f=o[3],g=A.x-k.x,y=A.y-k.y,w=f.x-k.x,D=f.y-k.y;e.save(),e.beginPath(),e.moveTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(I.x,I.y),e.lineTo(f.x,f.y),e.closePath(),e.clip();let v=2/r,V=k.x-g*v-w*v,G=k.y-y*v-D*v,E=1+2*v,F=1+2*v;e.transform(g*E/r,y*E/r,w*F/r,D*F/r,V,G),e.imageSmoothingEnabled=!0,e.drawImage(a,0,0),e.restore()}function Mo(e,o,t,i){let b=Ae[o],l=Me?[R({x:0,y:1,z:1},t,i),R({x:1,y:0,z:1},t,i),R({x:1,y:1,z:0},t,i)]:[R({x:1,y:0,z:0},t,i),R({x:0,y:1,z:0},t,i),R({x:0,y:0,z:1},t,i)],u=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let r=0;r<3;r++){let a=l[r].x+u[r].x,n=l[r].y+u[r].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(b[r],a,n)}e.globalAlpha=1,e.restore()}var Co=.48,ko=.33;function Ao(e,o,t,i,b,l){let u=o*Co,r=o*ko,a=Math.max(0,Math.min(1,b));e.save(),e.globalAlpha=l,e.beginPath(),e.arc(t.x,t.y,u,0,Math.PI*2),e.arc(t.x,t.y,r,0,Math.PI*2,!0),e.clip();let n=e.createRadialGradient(t.x,t.y,r,t.x,t.y,u);n.addColorStop(0,"#e7e7e7"),n.addColorStop(1,"rgb("+i.r+","+i.g+","+i.b+")"),e.fillStyle=n,e.fillRect(t.x-u,t.y-u,u*2,u*2),e.restore(),e.beginPath(),e.arc(t.x,t.y,u,0,Math.PI*2),e.arc(t.x,t.y,r,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let h of[.25,.5,.75]){let k=r+(u-r)*h;e.fillText(Math.round(h*100)+"%",t.x+k+10,t.y-4)}let x=r+(u-r)*a;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(t.x,t.y-r),e.lineTo(t.x,t.y-x),e.stroke(),e.restore(),e.beginPath(),e.arc(t.x,t.y-x,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var q=30,ie=13;function wo(e,o,t,i){let b=(q+ie)/2,l=5,u=Math.floor(o.x/l)*l,r=Math.floor(o.y/l)*l,a=q*2+l*2,n=Math.max(0,Math.min(1,i));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let g=-1;g*l<=a;g++)for(let y=-1;y*l<=a;y++)e.fillStyle=(g+y)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+g*l,r+y*l,l,l);let x="rgba("+t.r+","+t.g+","+t.b+",0)",h="rgba("+t.r+","+t.g+","+t.b+",1)",k=e;if(typeof k.createConicGradient=="function"){let g=k.createConicGradient(-Math.PI/2,o.x,o.y);g.addColorStop(0,x),g.addColorStop(1,h),e.fillStyle=g,e.fillRect(u-q,r-q,a,a)}else for(let y=0;y<36;y++){let w=-Math.PI/2+y/36*Math.PI*2,D=-Math.PI/2+(y+1)/36*Math.PI*2,v=(y+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(w)*ie,o.y+Math.sin(w)*ie),e.arc(o.x,o.y,q,w,D),e.arc(o.x,o.y,ie,D,w,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+v.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=n*Math.PI*2,I=o.x+b*Math.sin(A),f=o.y-b*Math.cos(A);e.beginPath(),e.arc(I,f,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function To(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function eo(e,o,t,i){let b=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return R(b[e],t,i)}function De(){let e={x:0,y:0};return[R({x:1,y:0,z:0},1,e),R({x:0,y:1,z:0},1,e),R({x:0,y:0,z:1},1,e)].map(t=>{let i=Math.sqrt(t.x*t.x+t.y*t.y);return i>0?{x:t.x/i,y:t.y/i}:{x:0,y:0}})}function xe(e,o,t,i,b){let l=J[e],u=[t.x,t.y,t.z],r=u[l.uAxis],a=u[l.vAxis];if(r<.002||a<.002)return null;let n={x:0,y:0,z:0},x=["x","y","z"];n[x[l.fixedAxis]]=u[l.fixedAxis];let h={...n};h[x[l.uAxis]]=r;let k={...n};k[x[l.vAxis]]=a;let A=R(n,i,b),I=R(h,i,b),f=R(k,i,b),g=I.x-A.x,y=I.y-A.y,w=f.x-A.x,D=f.y-A.y,v=g*D-y*w;if(Math.abs(v)<1e-6)return null;let V=o.x-A.x,G=o.y-A.y,E=(V*D-G*w)/v,F=(G*g-V*y)/v;return E<-.05||E>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,E)),t:Math.max(0,Math.min(1,F))}}function oo(e,o,t,i,b){let l=J[e],u=[t.x,t.y,t.z],r=u[l.uAxis],a=u[l.vAxis];if(r<.002||a<.002)return null;let n={x:0,y:0,z:0},x=["x","y","z"];n[x[l.fixedAxis]]=u[l.fixedAxis];let h={...n};h[x[l.uAxis]]=r;let k={...n};k[x[l.vAxis]]=a;let A=R(n,i,b),I=R(h,i,b),f=R(k,i,b),g=I.x-A.x,y=I.y-A.y,w=f.x-A.x,D=f.y-A.y,v=g*D-y*w;if(Math.abs(v)<1e-6)return null;let V=o.x-A.x,G=o.y-A.y,E=(V*D-G*w)/v,F=(G*g-V*y)/v;return{s:Math.max(0,Math.min(1,E)),t:Math.max(0,Math.min(1,F))}}var to=22;function no(e,o,t,i,b,l,u,r,a,n,x,h,k,A,I){let f={...Je};function g(s){let d=e.getBoundingClientRect();return{x:s.clientX-d.left,y:s.clientY-d.top}}let y=!1,w=!1,D=!1,v=!1,V=null,G=600,E=null;function F(){Y(),E=setTimeout(ee,G)}function Y(){E!==null&&(clearTimeout(E),E=null)}function ee(){E=null,f.alphaMode=!1,be(),p(),v=!0,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.3),V=null,a()}let U=9,me=1e3,X=null;function O(){Q(),X=setTimeout(ge,me)}function Q(){X!==null&&(clearTimeout(X),X=null),Y()}function ge(){X=null,f.alphaMode=!0,p(),be(),a()}function oe(s){let d=k();return Math.hypot(s.x-d.x,s.y-d.y)}function Ve(s){let d=k();return(Math.atan2(s.x-d.x,-(s.y-d.y))+Math.PI*2)%(Math.PI*2)}function ce(s){x(Ve(s)/(Math.PI*2)),a()}function pe(s){let d=oe(s);return d>=ie-4&&d<=q+6}function j(s){let d=o(),T=u(),C=r();for(let M=0;M<3;M++){let L=eo(M,d,T,C),H=s.x-L.x,B=s.y-L.y;if(H*H+B*B<=to*to)return M}return-1}function W(s){let d=o(),T=u(),C=r();for(let M=J.length-1;M>=0;M--){let L=xe(M,s,d,T,C);if(L)return{faceIndex:M,...L}}return null}let N=-1,Z={x:0,y:0},Ce=0;function de(s,d){N=s,Z=d,Ce=o()[["x","y","z"][s]],f.draggingAxisHandle=s,e.style.cursor="grabbing",a()}function c(s){if(Q(),N<0)return;let d=s.x-Z.x,T=s.y-Z.y,M=De()[N],L=u(),B=(d*M.x+T*M.y)/L,K=Math.max(0,Math.min(1,Ce+B)),$=o(),_=["x","y","z"],he={...$,[_[N]]:K};t(he);let ye=i(),Ue=l(),Ne=Ue>=0?J[Ue]:null,ze={...ye};Ne&&N===Ne.fixedAxis?ze[_[N]]=K:ze[_[N]]=Math.min(ye[_[N]],K),b(ze,l()),a()}function p(){N=-1,f.draggingAxisHandle=-1}let m=-1,z=null,P=null,S=!1;function ue(s,d,T,C){m=s,f.draggingFace=s,z=null,P=null,S=!1,C&&(S=!0,P={s:d,t:T}),ke(s,d,T),e.style.cursor="crosshair",a()}function re(s,d,T){if(Q(),m<0)return;let C=o(),M=u(),L=r(),H=xe(m,s,C,M,L),B=m;if(!H&&!T){for(let _=J.length-1;_>=0;_--)if(_!==m&&(H=xe(_,s,C,M,L),H)){B=_;break}}if(!H&&T&&(H=oo(m,s,C,M,L),B=m),!H){a();return}B!==m&&(m=B,f.draggingFace=B,z=null,S=!1,P=null);let{s:K,t:$}=H;if(d&&P){if(S){let _=Math.abs(K-P.s),he=Math.abs($-P.t),ye=.02;(_>ye||he>ye)&&(z=_>=he?"u":"v",S=!1)}z==="u"?$=P.t:z==="v"&&(K=P.s)}else d||(z=null,S=!1,P=null);ke(B,K,$),a()}function ke(s,d,T){let C=J[s],M=o(),L=["x","y","z"],H={...i()};H[L[C.uAxis]]=d*M[L[C.uAxis]],H[L[C.vAxis]]=T*M[L[C.vAxis]],H[L[C.fixedAxis]]=M[L[C.fixedAxis]],b(H,s)}function be(){m=-1,f.draggingFace=-1,z=null,S=!1,P=null}function te(s){w=!0;let d=g(s);if(n()){if(f.alphaMode){if(oe(d)<=U){f.alphaMode=!1,a();return}if(pe(d)){s.preventDefault(),y=!0,ce(d);return}f.alphaMode=!1,a();return}oe(d)<=U&&O()}let T=j(d);if(T>=0){s.preventDefault(),de(T,d);return}let C=W(d);if(C){s.preventDefault(),ue(C.faceIndex,C.s,C.t,s.shiftKey),F();return}let M=r();Math.hypot(d.x-M.x,d.y-M.y)>u()+20&&(s.preventDefault(),v=!0,V=d,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.25),a())}function Ee(s){let d=g(s);if(y){s.preventDefault(),ce(d);return}if(v){if(s.preventDefault(),!V){V=d;return}let H=d.x-V.x,B=d.y-V.y,K=He();Ie(Math.max(-60,Math.min(60,K.yaw+H*.12)),Math.max(-60,Math.min(60,K.pitch+B*.12))),H!==0&&A(Math.max(0,Math.min(1,I()+H*.002))),f.ringAlpha=Math.min(1,f.ringAlpha+.12),V=d,a();return}if(w&&f.alphaMode&&pe(d)){s.preventDefault(),y=!0,ce(d);return}if(N>=0){s.preventDefault(),c(d);return}if(m>=0){s.preventDefault(),re(d,s.shiftKey,s.altKey);return}let T=j(d),C=W(d),M=T,L=T>=0?-1:C?C.faceIndex:-1;(M!==f.hoveredAxisHandle||L!==f.hoveredFace)&&(f.hoveredAxisHandle=M,f.hoveredFace=L,e.style.cursor=M>=0?"grab":L>=0?"crosshair":"default",a())}function Fe(s){Q(),w=!1,y=!1,v&&(v=!1,f.viewRotating=!1,f.ringAlpha=0,V=null,a());let d=N>=0||m>=0;p(),be(),d&&(f.hoveredAxisHandle=-1,f.hoveredFace=-1,e.style.cursor="default",a())}function Oe(s){if(s.touches.length!==1)return;D=!0;let d=g(s.touches[0]);if(n()){if(f.alphaMode){if(oe(d)<=U){f.alphaMode=!1,a();return}if(pe(d)){s.preventDefault(),y=!0,ce(d);return}f.alphaMode=!1,a();return}oe(d)<=U&&O()}let T=j(d);if(T>=0){s.preventDefault(),de(T,d);return}let C=W(d);if(C){s.preventDefault(),ue(C.faceIndex,C.s,C.t,!1),F();return}let M=r();Math.hypot(d.x-M.x,d.y-M.y)>u()+20&&(s.preventDefault(),v=!0,V=d,f.viewRotating=!0,f.ringAlpha=Math.min(1,f.ringAlpha+.25),a())}function Be(s){if(s.touches.length!==1)return;let d=g(s.touches[0]);if(y)s.preventDefault(),ce(d);else if(D&&f.alphaMode&&pe(d))s.preventDefault(),y=!0,ce(d);else if(N>=0)s.preventDefault(),c(d);else if(v){if(s.preventDefault(),!V){V=d;return}let T=d.x-V.x,C=d.y-V.y,M=He();Ie(Math.max(-60,Math.min(60,M.yaw+T*.12)),Math.max(-60,Math.min(60,M.pitch+C*.12))),T!==0&&A(Math.max(0,Math.min(1,I()+T*.002))),f.ringAlpha=Math.min(1,f.ringAlpha+.12),V=d,a()}else m>=0&&(s.preventDefault(),re(d,!1,!1))}function _e(s){Q(),D=!1,y=!1,v&&(v=!1,f.viewRotating=!1,f.ringAlpha=0,V=null,a()),p(),be(),a()}function Ge(s){if(f.alphaMode){if(s.key==="Escape"){f.alphaMode=!1,a();return}if(s.key==="ArrowUp"||s.key==="ArrowRight"){s.preventDefault(),x(Math.min(1,h()+(s.shiftKey?.08:.02))),a();return}if(s.key==="ArrowDown"||s.key==="ArrowLeft"){s.preventDefault(),x(Math.max(0,h()-(s.shiftKey?.08:.02))),a();return}}let d=s.shiftKey?.04:.004,T=i(),C=o(),M=De(),L=0,H=0;switch(s.key){case"ArrowRight":L=1;break;case"ArrowLeft":L=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}s.preventDefault();let B={...T},K=["x","y","z"];for(let $=0;$<3;$++){let _=L*M[$].x+H*M[$].y;if(Math.abs(_)>.3){let he=T[K[$]]+d*Math.sign(_);B[K[$]]=Math.max(0,Math.min(C[K[$]],he))}}b(B,l()),a()}e.addEventListener("mousedown",te),window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",Fe),e.addEventListener("touchstart",Oe,{passive:!1}),e.addEventListener("touchmove",Be,{passive:!1}),e.addEventListener("touchend",_e),e.addEventListener("keydown",Ge),e.setAttribute("tabindex","0");function io(){Q(),e.removeEventListener("mousedown",te),window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",Fe),e.removeEventListener("touchstart",Oe),e.removeEventListener("touchmove",Be),e.removeEventListener("touchend",_e),e.removeEventListener("keydown",Ge)}return{state:f,destroy:io}}var ro=`.box-picker {\r
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
`;var Wo=So,ao=!1;function zo(){if(ao||typeof document>"u")return;ao=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ro,document.head.appendChild(e)}function So(e,o={}){let t=o.size??300,i=o.controls??!0,b=o.showInputs??!1,l=o.showModeToggle??!1,u=o.showCorners??!1,r={mode:()=>a,switchMode:c=>ee(c),onHexInput:c=>{let p=Le(c);p?(h=fe(F?{r:255-p.r,g:255-p.g,b:255-p.b}:p,a),x={x:Math.max(x.x,h.x),y:Math.max(x.y,h.y),z:Math.max(x.z,h.z)},Z(),W(),O()):W()},onChannelInput:(c,p,m)=>{let z=Math.max(0,Math.min(m,p)),P=["x","y","z"],S=z/m;if(F){let ue={...h,[P[c]]:S},re=ne(ue,a);h=fe({r:255-re.r,g:255-re.g,b:255-re.b},a)}else h={...h,[P[c]]:S};S>x[P[c]]&&(x={...x,[P[c]]:S}),Z(),W(),O()},getRgbForCopy:()=>ne(h,a),onRandom:c=>de(c),onReset:()=>de({r:0,g:0,b:0})},a=o.mode??"rgb",n=o.initialColor?fe(o.initialColor,a):{x:.7,y:.4,z:.85},x={x:1,y:1,z:1},h={...n},k=0,A=()=>o.alpha!==void 0,I=Math.max(0,Math.min(1,o.alpha??1));function f(c){let p=Math.max(0,Math.min(1,c));p!==I&&(I=p,Z(),W(),O())}function g(c){let p=j(),m=ae(p);m.s=Math.max(0,Math.min(100,c*100));let z=we(m);de(F?{r:255-z.r,g:255-z.g,b:255-z.b}:z)}let y=new Set;zo();let w=document.createElement("div");w.className="box-picker";let D=document.createElement("canvas");D.style.cursor="grab",w.appendChild(D);let v=Qe(D,t),V=null,G=document.createElement("div");G.className="box-picker-controls",V=document.createElement("div"),V.className="box-picker-swatch",G.appendChild(V),w.appendChild(G),(b||l||u)&&import("./controls-VBFXR3DH.js").then(c=>{c.createControls(G,r,{showInputs:b,showModeToggle:l,showCorners:u})}).catch(()=>{}),e.appendChild(w);let E=no(D,()=>x,c=>{x=c},()=>h,(c,p)=>{h=c,k=p,Z(),W()},()=>k,()=>v.scale,()=>v.center,O,A,f,()=>I,()=>R(h,v.scale,v.center),g,()=>ae(j()).s/100),F=!1,Y=!0;D.addEventListener("mouseenter",()=>{Y=!0,O()}),D.addEventListener("mouseleave",()=>{Y=!1,O()}),D.addEventListener("dblclick",()=>{F=!F,Ze(F),Z(),W(),O()});function ee(c){if(c===a)return;let p=ne(h,a),m={...h},z={...x};a=c;let P=fe(p,a),S={x:1,y:1,z:1};h=P,x=S,me(m,P,z,S,300),W()}let U=null;function me(c,p,m,z,P){U!==null&&cancelAnimationFrame(U);let S=performance.now();function ue(re){let ke=re-S,be=Math.min(1,ke/P),te=1-Math.pow(1-be,3);h={x:c.x+(p.x-c.x)*te,y:c.y+(p.y-c.y)*te,z:c.z+(p.z-c.z)*te},x={x:m.x+(z.x-m.x)*te,y:m.y+(z.y-m.y)*te,z:m.z+(z.z-m.z)*te},Q(),Z(),be<1?U=requestAnimationFrame(ue):U=null}U=requestAnimationFrame(ue)}let X=!1;function O(){X||(X=!0,requestAnimationFrame(()=>{X=!1,Q()}))}function Q(){qe(v,x,h,k,a,E.state,Y,{active:E.state.alphaMode,alpha:I,rgb:j()},{active:E.state.viewRotating||E.state.ringAlpha>0,sat:ae(j()).s/100,rgb:we({h:ae(j()).h,s:100,b:100})})}function ge(c,p,m){return Math.round(c+(p-c)*m)}function oe(c,p){let m=p>0?255:0,z=Math.abs(p);return ve({r:ge(c.r,m,z),g:ge(c.g,m,z),b:ge(c.b,m,z)})}function Ve(c,p){let m=Le(p)||{r:128,g:128,b:128},z=oe(m,.35),P=oe(m,0),S=oe(m,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${z}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${P}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function ce(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function pe(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function j(){let c=ne(h,a);return F?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function W(){if(!i)return;let c=j(),p=ve(c);V&&Ve(V,p);let m=w.querySelector(".box-picker-hex");m&&(m.value=p),N(),w._updateModeButtons&&w._updateModeButtons()}function N(){if(!i)return;let c=Ae[a],p=F?fe(j(),a):h,m=$e(p,a),z=w.querySelectorAll(".box-picker-channel input"),P=w.querySelectorAll(".box-picker-channel label");for(let S=0;S<z.length;S++)P[S].textContent=c[S],P[S].style.color="",P[S].style.textShadow="none",z[S].value=String(m[S])}function Z(){let c=j(),p={rgb:c,hsb:ae(c),oklch:Te(c),hex:ve(c),alpha:I};for(let m of y)m(p)}function Ce(){let c=ne(h,a);return{rgb:c,hsb:ae(c),oklch:Te(c),hex:ve(c)}}W(),Q();let de=c=>{h=fe(c,a),x={x:Math.max(x.x,h.x),y:Math.max(x.y,h.y),z:Math.max(x.z,h.z)};let p=R(h,v.scale,v.center);k=-1;for(let m=J.length-1;m>=0;m--)if(xe(m,p,x,v.scale,v.center)){k=m;break}Z(),W(),O()};return{getColor:Ce,getMode:()=>a,setColor:de,setAlpha:f,getAlpha:()=>I,setMode(c){ee(c)},on(c,p){y.add(p)},off(c,p){y.delete(p)},destroy(){E.destroy(),U!==null&&cancelAnimationFrame(U),e.removeChild(w)}}}export{So as createBoxColorPicker,Wo as createColorPicker,Ze as setBoxInvert};
