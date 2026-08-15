var Ae={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ke={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ae(e){let o=e.r/255,n=e.g/255,a=e.b/255,l=Math.max(o,n,a),s=Math.min(o,n,a),u=l-s,t=0;u!==0&&(l===o?t=((n-a)/u+6)%6:l===n?t=(a-o)/u+2:t=(o-n)/u+4,t*=60);let r=l===0?0:u/l*100,b=l*100;return{h:t,s:r,b}}function we(e){let o=e.h,n=e.s/100,a=e.b/100,l=a*n,s=l*(1-Math.abs(o/60%2-1)),u=a-l,t,r,b;return o<60?(t=l,r=s,b=0):o<120?(t=s,r=l,b=0):o<180?(t=0,r=l,b=s):o<240?(t=0,r=s,b=l):o<300?(t=s,r=0,b=l):(t=l,r=0,b=s),{r:Math.round((t+u)*255),g:Math.round((r+u)*255),b:Math.round((b+u)*255)}}function ze(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Pe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function so(e){let o=ze(e.r/255),n=ze(e.g/255),a=ze(e.b/255),l=.4122214708*o+.5363325363*n+.0514459929*a,s=.2119034982*o+.6806995451*n+.1073969566*a,u=.0883024619*o+.2817188376*n+.6299787005*a,t=Math.cbrt(l),r=Math.cbrt(s),b=Math.cbrt(u);return{L:.2104542553*t+.793617785*r-.0040720468*b,a:1.9779984951*t-2.428592205*r+.4505937099*b,b:.0259040371*t+.7827717662*r-.808675766*b}}function lo(e,o,n){let a=e+.3963377774*o+.2158037573*n,l=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,u=a*a*a,t=l*l*l,r=s*s*s,b=4.0767416621*u-3.3077115913*t+.2309699292*r,f=-1.2684380046*u+2.6097574011*t-.3413193965*r,h=-.0041960863*u-.7034186147*t+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Pe(b)))*255),g:Math.round(Math.max(0,Math.min(1,Pe(f)))*255),b:Math.round(Math.max(0,Math.min(1,Pe(h)))*255)}}function Te(e){let o=so(e),n=Math.sqrt(o.a*o.a+o.b*o.b),a=Math.atan2(o.b,o.a)*(180/Math.PI);return a<0&&(a+=360),{l:o.L,c:n,h:n<1e-4?0:a}}function Le(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),a=e.c*Math.sin(o);return lo(e.l,n,a)}function co(e,o,n){let a=Le({l:e,c:o,h:n});if(Xe(a))return{l:e,c:o,h:n};let l=0,s=o;for(let u=0;u<20;u++){let t=(l+s)/2;a=Le({l:e,c:t,h:n}),Xe(a)?l=t:s=t}return{l:e,c:l,h:n}}function Xe(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function pe(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Ie(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var $e=.4;function te(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return we({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,a=e.y*$e,l=e.z*359,s=co(n,a,l);return Le(s)}}function ue(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ae(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Te(e);return{x:n.l,y:Math.min(n.c/$e,1),z:n.h/359}}}function We(e,o){let n=Ke[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function je(e,o,n,a,l,s=!1){let u;e===0?u={x:a,y:o,z:n}:e===1?u={x:o,y:a,z:n}:u={x:o,y:n,z:a};let t=te(u,l);return s?{r:255-t.r,g:255-t.g,b:255-t.b}:t}var Ye=Math.PI/6,uo=Math.cos(Ye),bo=Math.sin(Ye),Me=!1;function Ze(e){Me=e}var ye=0,ve=0;function He(e,o){ye=e,ve=o}function Ve(){return{yaw:ye,pitch:ve}}function S(e,o,n){let a=e;if(ye!==0||ve!==0){let l={x:e.x-.5,y:e.y-.5,z:e.z-.5},s=Math.cos(ye),u=Math.sin(ye),t=Math.cos(ve),r=Math.sin(ve),b=l.x*s+l.z*u,f=l.y,h=-l.x*u+l.z*s,k=f*t-h*r,A=f*r+h*t;a={x:b+.5,y:k+.5,z:A+.5}}return{x:n.x+(a.y-a.x)*uo*o,y:n.y+a.z*o-(a.x+a.y)*bo*o}}function fo(e){let{x:o,y:n,z:a}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:a},{x:o,y:n,z:0},{x:o,y:0,z:a},{x:0,y:n,z:a},{x:o,y:n,z:a}]}var J=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],ho=64,Je={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Qe(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let a=e.getContext("2d");return a.scale(n,n),{ctx:a,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function qe(e,o,n,a,l,s,u=!0,t=null,r=null){let{ctx:b,scale:f,center:h,width:k,height:A}=e;b.save(),b.clearRect(0,0,k,A);let E=fo(o).map(M=>S(M,f,h));xo(b,f,h,l),b.save(),b.shadowColor="rgba(0,0,0,0.35)",b.shadowBlur=8,b.shadowOffsetX=0,b.shadowOffsetY=2,go(b,E,o,l),b.restore(),u&&yo(b,l,f,h);let{yaw:m,pitch:z}=Ve(),v=Math.max(0,Math.min(1,1-Math.max(Math.abs(m),Math.abs(z))/10));if(v>.02&&!s.viewRotating&&Co(b,f,h,v*.45),r&&r.active&&s.ringAlpha>.01&&ko(b,h,r.rgb,r.sat,s.ringAlpha),a>=0){let M=te(n,l),I=Me?{r:255-M.r,g:255-M.g,b:255-M.b}:M,p=S(n,f,h);t&&t.active&&Ao(b,p,t.rgb,t.alpha),wo(b,p,I)}b.restore()}var mo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function xo(e,o,n,a){let l=S({x:0,y:0,z:0},o,n),s=[S({x:1,y:0,z:0},o,n),S({x:0,y:1,z:0},o,n),S({x:0,y:0,z:1},o,n)],u=mo[a];e.lineWidth=1.5;for(let t=0;t<s.length;t++)e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(s[t].x,s[t].y),e.strokeStyle=u[t],e.stroke()}function go(e,o,n,a){let l=[n.x,n.y,n.z];for(let s=0;s<J.length;s++){let u=J[s],t=l[u.fixedAxis],r=l[u.uAxis],b=l[u.vAxis];if(r<.002&&b<.002)continue;let f=u.quad.map(h=>o[h]);po(e,f,u.fixedAxis,t,r,b,a)}}function po(e,o,n,a,l,s,u){let t=ho,r=document.createElement("canvas");r.width=t,r.height=t;let b=r.getContext("2d"),f=b.createImageData(t,t),h=f.data;for(let Y=0;Y<t;Y++)for(let ee=0;ee<t;ee++){let N=ee/(t-1)*l,he=Y/(t-1)*s,X=je(n,N,he,a,u,Me),B=(Y*t+ee)*4;h[B]=X.r,h[B+1]=X.g,h[B+2]=X.b,h[B+3]=255}b.putImageData(f,0,0);let k=o[0],A=o[1],E=o[2],m=o[3],z=A.x-k.x,v=A.y-k.y,M=m.x-k.x,I=m.y-k.y;e.save(),e.beginPath(),e.moveTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(E.x,E.y),e.lineTo(m.x,m.y),e.closePath(),e.clip();let p=2/t,T=k.x-z*p-M*p,G=k.y-v*p-I*p,D=1+2*p,F=1+2*p;e.transform(z*D/t,v*D/t,M*F/t,I*F/t,T,G),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}function yo(e,o,n,a){let l=Ae[o],s=Me?[S({x:0,y:1,z:1},n,a),S({x:1,y:0,z:1},n,a),S({x:1,y:1,z:0},n,a)]:[S({x:1,y:0,z:0},n,a),S({x:0,y:1,z:0},n,a),S({x:0,y:0,z:1},n,a)],u=Me?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let t=0;t<3;t++){let r=s[t].x+u[t].x,b=s[t].y+u[t].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(l[t],r,b)}e.globalAlpha=1,e.restore()}var vo=.48,Mo=.33;function Co(e,o,n,a){let l=[{x:1,y:0,z:0},{x:1,y:1,z:0},{x:0,y:1,z:0},{x:0,y:1,z:1},{x:0,y:0,z:1},{x:1,y:0,z:1}],s=["R","Y","G","C","B","M"],u=["#ff1744","#ffeb3b","#00e676","#00bcd4","#2962ff","#f50057"];e.save(),e.globalAlpha=a;for(let t of[.25,.5,.75,1]){e.setLineDash(t===1?[]:[3,5]),e.strokeStyle=t===1?"rgba(30,41,59,.5)":"rgba(148,163,184,.55)",e.lineWidth=t===1?1.4:1,e.beginPath();for(let r=0;r<=6;r++){let b=l[r%6],f=S({x:b.x*t,y:b.y*t,z:b.z*t},o,n);r===0?e.moveTo(f.x,f.y):e.lineTo(f.x,f.y)}e.closePath(),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(148,163,184,.4)",e.lineWidth=1;for(let t of l){let r=S(t,o,n);e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(r.x,r.y),e.stroke()}e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="left";for(let t of[.25,.5,.75]){let r=S({x:t,y:t,z:0},o,n);e.fillText(Math.round(t*100)+"%",r.x+5,r.y-4)}e.font="bold 11px sans-serif",e.fillStyle="#334155",e.textAlign="center";for(let t=0;t<6;t++){let r=S(l[t],o,n),b=r.x>n.x+10?14:r.x<n.x-10?-14:0,f=r.y<n.y-10?-10:14;e.fillText(s[t],r.x+b,r.y+f)}e.beginPath(),e.arc(n.x,n.y,3.5,0,Math.PI*2),e.fillStyle="#111",e.fill(),e.restore()}function ko(e,o,n,a,l,s){let u=o*vo,t=o*Mo,r=Math.max(0,Math.min(1,l));e.save(),e.globalAlpha=s,e.beginPath(),e.arc(n.x,n.y,u,0,Math.PI*2),e.arc(n.x,n.y,t,0,Math.PI*2,!0),e.clip();let b=e.createRadialGradient(n.x,n.y,t,n.x,n.y,u);b.addColorStop(0,"#e7e7e7"),b.addColorStop(1,"rgb("+a.r+","+a.g+","+a.b+")"),e.fillStyle=b,e.fillRect(n.x-u,n.y-u,u*2,u*2),e.restore(),e.beginPath(),e.arc(n.x,n.y,u,0,Math.PI*2),e.arc(n.x,n.y,t,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let h of[.25,.5,.75]){let k=t+(u-t)*h;e.fillText(Math.round(h*100)+"%",n.x+k+10,n.y-4)}let f=t+(u-t)*r;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(n.x,n.y-t),e.lineTo(n.x,n.y-f),e.stroke(),e.restore(),e.beginPath(),e.arc(n.x,n.y-f,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var q=30,ie=13;function Ao(e,o,n,a){let l=(q+ie)/2,s=5,u=Math.floor(o.x/s)*s,t=Math.floor(o.y/s)*s,r=q*2+s*2,b=Math.max(0,Math.min(1,a));e.save(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let z=-1;z*s<=r;z++)for(let v=-1;v*s<=r;v++)e.fillStyle=(z+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+z*s,t+v*s,s,s);let f="rgba("+n.r+","+n.g+","+n.b+",0)",h="rgba("+n.r+","+n.g+","+n.b+",1)",k=e;if(typeof k.createConicGradient=="function"){let z=k.createConicGradient(-Math.PI/2,o.x,o.y);z.addColorStop(0,f),z.addColorStop(1,h),e.fillStyle=z,e.fillRect(u-q,t-q,r,r)}else for(let v=0;v<36;v++){let M=-Math.PI/2+v/36*Math.PI*2,I=-Math.PI/2+(v+1)/36*Math.PI*2,p=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(M)*ie,o.y+Math.sin(M)*ie),e.arc(o.x,o.y,q,M,I),e.arc(o.x,o.y,ie,I,M,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+p.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,q,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-q-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=b*Math.PI*2,E=o.x+l*Math.sin(A),m=o.y-l*Math.cos(A);e.beginPath(),e.arc(E,m,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function wo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function eo(e,o,n,a){let l=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return S(l[e],n,a)}function Ee(){let e={x:0,y:0};return[S({x:1,y:0,z:0},1,e),S({x:0,y:1,z:0},1,e),S({x:0,y:0,z:1},1,e)].map(n=>{let a=Math.sqrt(n.x*n.x+n.y*n.y);return a>0?{x:n.x/a,y:n.y/a}:{x:0,y:0}})}function fe(e,o,n,a,l){let s=J[e],u=[n.x,n.y,n.z],t=u[s.uAxis],r=u[s.vAxis];if(t<.002||r<.002)return null;let b={x:0,y:0,z:0},f=["x","y","z"];b[f[s.fixedAxis]]=u[s.fixedAxis];let h={...b};h[f[s.uAxis]]=t;let k={...b};k[f[s.vAxis]]=r;let A=S(b,a,l),E=S(h,a,l),m=S(k,a,l),z=E.x-A.x,v=E.y-A.y,M=m.x-A.x,I=m.y-A.y,p=z*I-v*M;if(Math.abs(p)<1e-6)return null;let T=o.x-A.x,G=o.y-A.y,D=(T*I-G*M)/p,F=(G*z-T*v)/p;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function oo(e,o,n,a,l){let s=J[e],u=[n.x,n.y,n.z],t=u[s.uAxis],r=u[s.vAxis];if(t<.002||r<.002)return null;let b={x:0,y:0,z:0},f=["x","y","z"];b[f[s.fixedAxis]]=u[s.fixedAxis];let h={...b};h[f[s.uAxis]]=t;let k={...b};k[f[s.vAxis]]=r;let A=S(b,a,l),E=S(h,a,l),m=S(k,a,l),z=E.x-A.x,v=E.y-A.y,M=m.x-A.x,I=m.y-A.y,p=z*I-v*M;if(Math.abs(p)<1e-6)return null;let T=o.x-A.x,G=o.y-A.y,D=(T*I-G*M)/p,F=(G*z-T*v)/p;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var no=22;function to(e,o,n,a,l,s,u,t,r,b,f,h,k,A,E){let m={...Je};function z(i){let d=e.getBoundingClientRect();return{x:i.clientX-d.left,y:i.clientY-d.top}}let v=!1,M=!1,I=!1,p=!1,T=null,G=600,D=null;function F(){Y(),D=setTimeout(ee,G)}function Y(){D!==null&&(clearTimeout(D),D=null)}function ee(){D=null,de(),g(),p=!0,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.3),T=null,r()}let N=9,he=1e3,X=null;function B(){Q(),X=setTimeout(me,he)}function Q(){X!==null&&(clearTimeout(X),X=null),Y()}function me(){X=null,m.alphaMode=!0,g(),de(),r()}function oe(i){let d=k();return Math.hypot(i.x-d.x,i.y-d.y)}function Se(i){let d=k();return(Math.atan2(i.x-d.x,-(i.y-d.y))+Math.PI*2)%(Math.PI*2)}function se(i){f(Se(i)/(Math.PI*2)),r()}function xe(i){let d=oe(i);return d>=ie-4&&d<=q+6}function j(i){let d=o(),w=u(),C=t();for(let y=0;y<3;y++){let L=eo(y,d,w,C),H=i.x-L.x,O=i.y-L.y;if(H*H+O*O<=no*no)return y}return-1}function $(i){let d=o(),w=u(),C=t();for(let y=J.length-1;y>=0;y--){let L=fe(y,i,d,w,C);if(L)return{faceIndex:y,...L}}return null}let U=-1,Z={x:0,y:0},Ce=0;function le(i,d){U=i,Z=d,Ce=o()[["x","y","z"][i]],m.draggingAxisHandle=i,e.style.cursor="grabbing",r()}function c(i){if(Q(),U<0)return;let d=i.x-Z.x,w=i.y-Z.y,y=Ee()[U],L=u(),O=(d*y.x+w*y.y)/L,K=Math.max(0,Math.min(1,Ce+O)),W=o(),_=["x","y","z"],be={...W,[_[U]]:K};n(be);let ge=a(),Ne=s(),Ue=Ne>=0?J[Ne]:null,Re={...ge};Ue&&U===Ue.fixedAxis?Re[_[U]]=K:Re[_[U]]=Math.min(ge[_[U]],K),l(Re,s()),r()}function g(){U=-1,m.draggingAxisHandle=-1}let x=-1,V=null,P=null,R=!1;function ce(i,d,w,C){x=i,m.draggingFace=i,V=null,P=null,R=!1,C&&(R=!0,P={s:d,t:w}),ke(i,d,w),e.style.cursor="crosshair",r()}function re(i,d,w){if(Q(),x<0)return;let C=o(),y=u(),L=t(),H=fe(x,i,C,y,L),O=x;if(!H&&!w){for(let _=J.length-1;_>=0;_--)if(_!==x&&(H=fe(_,i,C,y,L),H)){O=_;break}}if(!H&&w&&(H=oo(x,i,C,y,L),O=x),!H){r();return}O!==x&&(x=O,m.draggingFace=O,V=null,R=!1,P=null);let{s:K,t:W}=H;if(d&&P){if(R){let _=Math.abs(K-P.s),be=Math.abs(W-P.t),ge=.02;(_>ge||be>ge)&&(V=_>=be?"u":"v",R=!1)}V==="u"?W=P.t:V==="v"&&(K=P.s)}else d||(V=null,R=!1,P=null);ke(O,K,W),r()}function ke(i,d,w){let C=J[i],y=o(),L=["x","y","z"],H={...a()};H[L[C.uAxis]]=d*y[L[C.uAxis]],H[L[C.vAxis]]=w*y[L[C.vAxis]],H[L[C.fixedAxis]]=y[L[C.fixedAxis]],l(H,i)}function de(){x=-1,m.draggingFace=-1,V=null,R=!1,P=null}function ne(i){M=!0;let d=z(i);if(b()){if(m.alphaMode){if(oe(d)<=N){m.alphaMode=!1,r();return}if(xe(d)){i.preventDefault(),v=!0,se(d);return}m.alphaMode=!1,r();return}oe(d)<=N&&B()}let w=j(d);if(w>=0){i.preventDefault(),le(w,d);return}let C=$(d);if(C){i.preventDefault(),ce(C.faceIndex,C.s,C.t,i.shiftKey),F();return}let y=t();Math.hypot(d.x-y.x,d.y-y.y)>u()+20&&(i.preventDefault(),p=!0,T=d,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.25),r())}function De(i){let d=z(i);if(v){i.preventDefault(),se(d);return}if(p){if(i.preventDefault(),!T){T=d;return}let H=d.x-T.x,O=d.y-T.y,K=Ve();He(Math.max(-60,Math.min(60,K.yaw+H*.12)),Math.max(-60,Math.min(60,K.pitch+O*.12))),H!==0&&A(Math.max(0,Math.min(1,E()+H*.002))),m.ringAlpha=Math.min(1,m.ringAlpha+.12),T=d,r();return}if(M&&m.alphaMode&&xe(d)){i.preventDefault(),v=!0,se(d);return}if(U>=0){i.preventDefault(),c(d);return}if(x>=0){i.preventDefault(),re(d,i.shiftKey,i.altKey);return}let w=j(d),C=$(d),y=w,L=w>=0?-1:C?C.faceIndex:-1;(y!==m.hoveredAxisHandle||L!==m.hoveredFace)&&(m.hoveredAxisHandle=y,m.hoveredFace=L,e.style.cursor=y>=0?"grab":L>=0?"crosshair":"default",r())}function Fe(i){Q(),M=!1,v=!1,p&&(p=!1,m.viewRotating=!1,m.ringAlpha=0,T=null,r());let d=U>=0||x>=0;g(),de(),d&&(m.hoveredAxisHandle=-1,m.hoveredFace=-1,e.style.cursor="default",r())}function Be(i){if(i.touches.length!==1)return;I=!0;let d=z(i.touches[0]);if(b()){if(m.alphaMode){if(oe(d)<=N){m.alphaMode=!1,r();return}if(xe(d)){i.preventDefault(),v=!0,se(d);return}m.alphaMode=!1,r();return}oe(d)<=N&&B()}let w=j(d);if(w>=0){i.preventDefault(),le(w,d);return}let C=$(d);if(C){i.preventDefault(),ce(C.faceIndex,C.s,C.t,!1),F();return}let y=t();Math.hypot(d.x-y.x,d.y-y.y)>u()+20&&(i.preventDefault(),p=!0,T=d,m.viewRotating=!0,m.ringAlpha=Math.min(1,m.ringAlpha+.25),r())}function Oe(i){if(i.touches.length!==1)return;let d=z(i.touches[0]);if(v)i.preventDefault(),se(d);else if(I&&m.alphaMode&&xe(d))i.preventDefault(),v=!0,se(d);else if(U>=0)i.preventDefault(),c(d);else if(p){if(i.preventDefault(),!T){T=d;return}let w=d.x-T.x,C=d.y-T.y,y=Ve();He(Math.max(-60,Math.min(60,y.yaw+w*.12)),Math.max(-60,Math.min(60,y.pitch+C*.12))),w!==0&&A(Math.max(0,Math.min(1,E()+w*.002))),m.ringAlpha=Math.min(1,m.ringAlpha+.12),T=d,r()}else x>=0&&(i.preventDefault(),re(d,!1,!1))}function _e(i){Q(),I=!1,v=!1,p&&(p=!1,m.viewRotating=!1,m.ringAlpha=0,T=null,r()),g(),de(),r()}function Ge(i){if(m.alphaMode){if(i.key==="Escape"){m.alphaMode=!1,r();return}if(i.key==="ArrowUp"||i.key==="ArrowRight"){i.preventDefault(),f(Math.min(1,h()+(i.shiftKey?.08:.02))),r();return}if(i.key==="ArrowDown"||i.key==="ArrowLeft"){i.preventDefault(),f(Math.max(0,h()-(i.shiftKey?.08:.02))),r();return}}let d=i.shiftKey?.04:.004,w=a(),C=o(),y=Ee(),L=0,H=0;switch(i.key){case"ArrowRight":L=1;break;case"ArrowLeft":L=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}i.preventDefault();let O={...w},K=["x","y","z"];for(let W=0;W<3;W++){let _=L*y[W].x+H*y[W].y;if(Math.abs(_)>.3){let be=w[K[W]]+d*Math.sign(_);O[K[W]]=Math.max(0,Math.min(C[K[W]],be))}}l(O,s()),r()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",De),window.addEventListener("mouseup",Fe),e.addEventListener("touchstart",Be,{passive:!1}),e.addEventListener("touchmove",Oe,{passive:!1}),e.addEventListener("touchend",_e),e.addEventListener("keydown",Ge),e.setAttribute("tabindex","0");function io(){Q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",Fe),e.removeEventListener("touchstart",Be),e.removeEventListener("touchmove",Oe),e.removeEventListener("touchend",_e),e.removeEventListener("keydown",Ge)}return{state:m,destroy:io}}var ro=`.box-picker {\r
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
`;var Xo=So,ao=!1;function Vo(){if(ao||typeof document>"u")return;ao=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ro,document.head.appendChild(e)}function So(e,o={}){let n=o.size??300,a=o.controls??!0,l=o.showInputs??!1,s=o.showModeToggle??!1,u=o.showCorners??!1,t={mode:()=>r,switchMode:c=>ee(c),onHexInput:c=>{let g=Ie(c);g?(h=ue(F?{r:255-g.r,g:255-g.g,b:255-g.b}:g,r),f={x:Math.max(f.x,h.x),y:Math.max(f.y,h.y),z:Math.max(f.z,h.z)},Z(),$(),B()):$()},onChannelInput:(c,g,x)=>{let V=Math.max(0,Math.min(x,g)),P=["x","y","z"],R=V/x;if(F){let ce={...h,[P[c]]:R},re=te(ce,r);h=ue({r:255-re.r,g:255-re.g,b:255-re.b},r)}else h={...h,[P[c]]:R};R>f[P[c]]&&(f={...f,[P[c]]:R}),Z(),$(),B()},getRgbForCopy:()=>te(h,r),onRandom:c=>le(c),onReset:()=>le({r:0,g:0,b:0})},r=o.mode??"rgb",b=o.initialColor?ue(o.initialColor,r):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},h={...b},k=0,A=()=>o.alpha!==void 0,E=Math.max(0,Math.min(1,o.alpha??1));function m(c){let g=Math.max(0,Math.min(1,c));g!==E&&(E=g,Z(),$(),B())}function z(c){let g=j(),x=ae(g);x.s=Math.max(0,Math.min(100,c*100));let V=we(x);le(F?{r:255-V.r,g:255-V.g,b:255-V.b}:V)}let v=new Set;Vo();let M=document.createElement("div");M.className="box-picker";let I=document.createElement("canvas");I.style.cursor="grab",M.appendChild(I);let p=Qe(I,n),T=null,G=document.createElement("div");G.className="box-picker-controls",T=document.createElement("div"),T.className="box-picker-swatch",G.appendChild(T),M.appendChild(G),(l||s||u)&&import("./controls-VBFXR3DH.js").then(c=>{c.createControls(G,t,{showInputs:l,showModeToggle:s,showCorners:u})}).catch(()=>{}),e.appendChild(M);let D=to(I,()=>f,c=>{f=c},()=>h,(c,g)=>{h=c,k=g,Z(),$()},()=>k,()=>p.scale,()=>p.center,B,A,m,()=>E,()=>S(h,p.scale,p.center),z,()=>ae(j()).s/100),F=!1,Y=!0;I.addEventListener("mouseenter",()=>{Y=!0,B()}),I.addEventListener("mouseleave",()=>{Y=!1,B()}),I.addEventListener("dblclick",()=>{F=!F,Ze(F),Z(),$(),B()});function ee(c){if(c===r)return;let g=te(h,r),x={...h},V={...f};r=c;let P=ue(g,r),R={x:1,y:1,z:1};h=P,f=R,he(x,P,V,R,300),$()}let N=null;function he(c,g,x,V,P){N!==null&&cancelAnimationFrame(N);let R=performance.now();function ce(re){let ke=re-R,de=Math.min(1,ke/P),ne=1-Math.pow(1-de,3);h={x:c.x+(g.x-c.x)*ne,y:c.y+(g.y-c.y)*ne,z:c.z+(g.z-c.z)*ne},f={x:x.x+(V.x-x.x)*ne,y:x.y+(V.y-x.y)*ne,z:x.z+(V.z-x.z)*ne},Q(),Z(),de<1?N=requestAnimationFrame(ce):N=null}N=requestAnimationFrame(ce)}let X=!1;function B(){X||(X=!0,requestAnimationFrame(()=>{X=!1,Q()}))}function Q(){qe(p,f,h,k,r,D.state,Y,{active:D.state.alphaMode,alpha:E,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:ae(j()).s/100,rgb:we({h:ae(j()).h,s:100,b:100})})}function me(c,g,x){return Math.round(c+(g-c)*x)}function oe(c,g){let x=g>0?255:0,V=Math.abs(g);return pe({r:me(c.r,x,V),g:me(c.g,x,V),b:me(c.b,x,V)})}function Se(c,g){let x=Ie(g)||{r:128,g:128,b:128},V=oe(x,.35),P=oe(x,0),R=oe(x,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${V}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${P}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${R}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function se(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function xe(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function j(){let c=te(h,r);return F?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function $(){if(!a)return;let c=j(),g=pe(c);T&&Se(T,g);let x=M.querySelector(".box-picker-hex");x&&(x.value=g),U(),M._updateModeButtons&&M._updateModeButtons()}function U(){if(!a)return;let c=Ae[r],g=F?ue(j(),r):h,x=We(g,r),V=M.querySelectorAll(".box-picker-channel input"),P=M.querySelectorAll(".box-picker-channel label");for(let R=0;R<V.length;R++)P[R].textContent=c[R],P[R].style.color="",P[R].style.textShadow="none",V[R].value=String(x[R])}function Z(){let c=j(),g={rgb:c,hsb:ae(c),oklch:Te(c),hex:pe(c),alpha:E};for(let x of v)x(g)}function Ce(){let c=te(h,r);return{rgb:c,hsb:ae(c),oklch:Te(c),hex:pe(c)}}$(),Q();let le=c=>{h=ue(c,r),f={x:Math.max(f.x,h.x),y:Math.max(f.y,h.y),z:Math.max(f.z,h.z)};let g=S(h,p.scale,p.center);k=-1;for(let x=J.length-1;x>=0;x--)if(fe(x,g,f,p.scale,p.center)){k=x;break}Z(),$(),B()};return{getColor:Ce,getMode:()=>r,setColor:le,setAlpha:m,getAlpha:()=>E,setMode(c){ee(c)},on(c,g){v.add(g)},off(c,g){v.delete(g)},destroy(){D.destroy(),N!==null&&cancelAnimationFrame(N),e.removeChild(M)}}}export{So as createBoxColorPicker,Xo as createColorPicker,Ze as setBoxInvert};
