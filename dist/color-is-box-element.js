var Re={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ze={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Y(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),l=Math.min(o,n,t),c=r-l,a=0;c!==0&&(r===o?a=((n-t)/c+6)%6:r===n?a=(t-o)/c+2:a=(o-n)/c+4,a*=60);let s=r===0?0:c/r*100,i=r*100;return{h:a,s,b:i}}function ie(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,l=r*(1-Math.abs(o/60%2-1)),c=t-r,a,s,i;return o<60?(a=r,s=l,i=0):o<120?(a=l,s=r,i=0):o<180?(a=0,s=r,i=l):o<240?(a=0,s=l,i=r):o<300?(a=l,s=0,i=r):(a=r,s=0,i=l),{r:Math.round((a+c)*255),g:Math.round((s+c)*255),b:Math.round((i+c)*255)}}function Ie(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function He(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function go(e){let o=Ie(e.r/255),n=Ie(e.g/255),t=Ie(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,l=.2119034982*o+.6806995451*n+.1073969566*t,c=.0883024619*o+.2817188376*n+.6299787005*t,a=Math.cbrt(r),s=Math.cbrt(l),i=Math.cbrt(c);return{L:.2104542553*a+.793617785*s-.0040720468*i,a:1.9779984951*a-2.428592205*s+.4505937099*i,b:.0259040371*a+.7827717662*s-.808675766*i}}function xo(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,l=e-.0894841775*o-1.291485548*n,c=t*t*t,a=r*r*r,s=l*l*l,i=4.0767416621*c-3.3077115913*a+.2309699292*s,f=-1.2684380046*c+2.6097574011*a-.3413193965*s,g=-.0041960863*c-.7034186147*a+1.707614701*s;return{r:Math.round(Math.max(0,Math.min(1,He(i)))*255),g:Math.round(Math.max(0,Math.min(1,He(f)))*255),b:Math.round(Math.max(0,Math.min(1,He(g)))*255)}}function me(e){let o=go(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Ae(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return xo(e.l,n,t)}function mo(e,o,n){let t=Ae({l:e,c:o,h:n});if(Je(t))return{l:e,c:o,h:n};let r=0,l=o;for(let c=0;c<20;c++){let a=(r+l)/2;t=Ae({l:e,c:a,h:n}),Je(t)?r=a:l=a}return{l:e,c:r,h:n}}function Je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Qe=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ie({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*Qe,r=e.z*359,l=mo(n,t,r);return Ae(l)}}function ge(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=Y(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=me(e);return{x:n.l,y:Math.min(n.c/Qe,1),z:n.h/359}}}function qe(e,o){let n=Ze[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function eo(e,o,n,t,r,l=!1){let c;e===0?c={x:t,y:o,z:n}:e===1?c={x:o,y:t,z:n}:c={x:o,y:n,z:t};let a=re(c,r);return l?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var oo=Math.PI/6,po=Math.cos(oo),yo=Math.sin(oo),we=!1;function to(e){we=e}var ce=0,ue=0;function Ee(e,o){ce=e,ue=o}function De(){return{yaw:ce,pitch:ue}}function vo(e){if(ce===0&&ue===0)return e;let o=Math.cos(ce),n=Math.sin(ce),t=Math.cos(ue),r=Math.sin(ue),l=e.x*o+e.z*n,c=e.y,a=-e.x*n+e.z*o,s=c*t-a*r,i=c*r+a*t;return{x:l,y:s,z:i}}function Mo(e){if(ce===0&&ue===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},n=Math.cos(ce),t=Math.sin(ce),r=Math.cos(ue),l=Math.sin(ue),c=o.x*n+o.z*t,a=o.y,s=-o.x*t+o.z*n,i=a*r-s*l,f=a*l+s*r;return{x:c+.5,y:i+.5,z:f+.5}}function z(e,o,n){let t=Mo(e);return{x:n.x+(t.y-t.x)*po*o,y:n.y+t.z*o-(t.x+t.y)*yo*o}}function Co(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],ko=64,no={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ro(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*.84*n,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function ao(e,o,n,t,r,l,c=!0,a=null,s=null){let{ctx:i,scale:f,center:g,width:k,height:A}=e;i.save(),i.clearRect(0,0,k,A);let I=Co(o),b=I.map(m=>z(m,f,g));if(i.save(),i.globalAlpha=l.viewRotating?.32:1,wo(i,f,g,r),i.restore(),i.save(),i.shadowColor="rgba(0,0,0,0.35)",i.shadowBlur=8,i.shadowOffsetX=0,i.shadowOffsetY=2,To(i,b,I,o,r,l.viewRotating),i.restore(),c&&(i.save(),i.globalAlpha=l.viewRotating?.5:1,Ro(i,r,f,g),i.restore()),s&&s.active&&l.ringAlpha>.01&&Po(i,f,g,s.rgb,s.sat,l.ringAlpha),l.viewRotating){let m=z({x:0,y:0,z:0},f,g),y=z({x:1,y:1,z:1},f,g);i.save(),i.setLineDash([6,5]),i.strokeStyle="rgba(107,114,128,.75)",i.lineWidth=1.6,i.beginPath(),i.moveTo(m.x,m.y),i.lineTo(y.x,y.y),i.stroke(),i.restore(),i.beginPath(),i.arc(m.x,m.y,5,0,Math.PI*2),i.fillStyle="#111",i.fill(),i.strokeStyle="rgba(0,0,0,.45)",i.lineWidth=1,i.stroke(),i.beginPath(),i.arc(y.x,y.y,5,0,Math.PI*2),i.fillStyle="#fff",i.fill(),i.strokeStyle="rgba(0,0,0,.5)",i.lineWidth=1,i.stroke(),i.font="9px monospace",i.fillStyle="rgba(51,65,85,.85)",i.textAlign="left",i.fillText("0",m.x+9,m.y+12),i.fillText("255,255,255",y.x+9,y.y+12)}if(t>=0){let m=re(n,r),y=we?{r:255-m.r,g:255-m.g,b:255-m.b}:m,w=z(n,f,g);a&&a.active&&Lo(i,w,a.rgb,a.alpha),Io(i,w,y)}i.restore()}var Ao={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function wo(e,o,n,t){let r=z({x:0,y:0,z:0},o,n),l=[z({x:1,y:0,z:0},o,n),z({x:0,y:1,z:0},o,n),z({x:0,y:0,z:1},o,n)],c=Ao[t];e.lineWidth=1.5;for(let a=0;a<l.length;a++)e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(l[a].x,l[a].y),e.strokeStyle=c[a],e.stroke()}function To(e,o,n,t,r,l){let c=[t.x,t.y,t.z],a=l?.7:1;for(let s=0;s<Q.length;s++){let i=Q[s],f=c[i.fixedAxis],g=c[i.uAxis],k=c[i.vAxis];if(g<.002&&k<.002)continue;let A=vo(i.normal),I=A.x+A.y+A.z>0,b=i.quad.map(m=>o[m]);if(I)e.save(),e.globalAlpha=a,Vo(e,b,i.fixedAxis,f,g,k,r),e.restore();else{e.save(),e.globalAlpha=l?.14:0,e.beginPath(),e.moveTo(b[0].x,b[0].y);for(let m=1;m<4;m++)e.lineTo(b[m].x,b[m].y);e.closePath(),e.fillStyle="#ffffff",e.fill(),e.restore()}}}function Vo(e,o,n,t,r,l,c){let a=ko,s=document.createElement("canvas");s.width=a,s.height=a;let i=s.getContext("2d"),f=i.createImageData(a,a),g=f.data;for(let Z=0;Z<a;Z++)for(let oe=0;oe<a;oe++){let G=oe/(a-1)*r,ve=Z/(a-1)*l,K=eo(n,G,ve,t,c,we),O=(Z*a+oe)*4;g[O]=K.r,g[O+1]=K.g,g[O+2]=K.b,g[O+3]=255}i.putImageData(f,0,0);let k=o[0],A=o[1],I=o[2],b=o[3],m=A.x-k.x,y=A.y-k.y,w=b.x-k.x,E=b.y-k.y;e.save(),e.beginPath(),e.moveTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(I.x,I.y),e.lineTo(b.x,b.y),e.closePath(),e.clip();let v=2/a,V=k.x-m*v-w*v,$=k.y-y*v-E*v,D=1+2*v,F=1+2*v;e.transform(m*D/a,y*D/a,w*F/a,E*F/a,V,$),e.imageSmoothingEnabled=!0,e.drawImage(s,0,0),e.restore()}function Ro(e,o,n,t){let r=Re[o],l=we?[z({x:0,y:1,z:1},n,t),z({x:1,y:0,z:1},n,t),z({x:1,y:1,z:0},n,t)]:[z({x:1,y:0,z:0},n,t),z({x:0,y:1,z:0},n,t),z({x:0,y:0,z:1},n,t)],c=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let a=0;a<3;a++){let s=l[a].x+c[a].x,i=l[a].y+c[a].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(r[a],s,i)}e.globalAlpha=1,e.restore()}var So=.48,zo=.33;function Po(e,o,n,t,r,l){let c=o*So,a=o*zo,s=Math.max(0,Math.min(1,r));e.save(),e.globalAlpha=l,e.beginPath(),e.arc(n.x,n.y,c,0,Math.PI*2),e.arc(n.x,n.y,a,0,Math.PI*2,!0),e.clip();let i=e.createRadialGradient(n.x,n.y,a,n.x,n.y,c);i.addColorStop(0,"#e7e7e7"),i.addColorStop(1,"rgb("+t.r+","+t.g+","+t.b+")"),e.fillStyle=i,e.fillRect(n.x-c,n.y-c,c*2,c*2),e.restore(),e.beginPath(),e.arc(n.x,n.y,c,0,Math.PI*2),e.arc(n.x,n.y,a,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let g of[.25,.5,.75]){let k=a+(c-a)*g;e.fillText(Math.round(g*100)+"%",n.x+k+10,n.y-4)}let f=a+(c-a)*s;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(n.x,n.y-a),e.lineTo(n.x,n.y-f),e.stroke(),e.restore(),e.beginPath(),e.arc(n.x,n.y-f,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var ee=30,le=13;function Lo(e,o,n,t){let r=(ee+le)/2,l=5,c=Math.floor(o.x/l)*l,a=Math.floor(o.y/l)*l,s=ee*2+l*2,i=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let m=-1;m*l<=s;m++)for(let y=-1;y*l<=s;y++)e.fillStyle=(m+y)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+m*l,a+y*l,l,l);let f="rgba("+n.r+","+n.g+","+n.b+",0)",g="rgba("+n.r+","+n.g+","+n.b+",1)",k=e;if(typeof k.createConicGradient=="function"){let m=k.createConicGradient(-Math.PI/2,o.x,o.y);m.addColorStop(0,f),m.addColorStop(1,g),e.fillStyle=m,e.fillRect(c-ee,a-ee,s,s)}else for(let y=0;y<36;y++){let w=-Math.PI/2+y/36*Math.PI*2,E=-Math.PI/2+(y+1)/36*Math.PI*2,v=(y+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(w)*le,o.y+Math.sin(w)*le),e.arc(o.x,o.y,ee,w,E),e.arc(o.x,o.y,le,E,w,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+v.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=i*Math.PI*2,I=o.x+r*Math.sin(A),b=o.y-r*Math.cos(A);e.beginPath(),e.arc(I,b,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Io(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function io(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return z(r[e],n,t)}function Fe(){let e={x:0,y:0};return[z({x:1,y:0,z:0},1,e),z({x:0,y:1,z:0},1,e),z({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function ye(e,o,n,t,r){let l=Q[e],c=[n.x,n.y,n.z],a=c[l.uAxis],s=c[l.vAxis];if(a<.002||s<.002)return null;let i={x:0,y:0,z:0},f=["x","y","z"];i[f[l.fixedAxis]]=c[l.fixedAxis];let g={...i};g[f[l.uAxis]]=a;let k={...i};k[f[l.vAxis]]=s;let A=z(i,t,r),I=z(g,t,r),b=z(k,t,r),m=I.x-A.x,y=I.y-A.y,w=b.x-A.x,E=b.y-A.y,v=m*E-y*w;if(Math.abs(v)<1e-6)return null;let V=o.x-A.x,$=o.y-A.y,D=(V*E-$*w)/v,F=($*m-V*y)/v;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function so(e,o,n,t,r){let l=Q[e],c=[n.x,n.y,n.z],a=c[l.uAxis],s=c[l.vAxis];if(a<.002||s<.002)return null;let i={x:0,y:0,z:0},f=["x","y","z"];i[f[l.fixedAxis]]=c[l.fixedAxis];let g={...i};g[f[l.uAxis]]=a;let k={...i};k[f[l.vAxis]]=s;let A=z(i,t,r),I=z(g,t,r),b=z(k,t,r),m=I.x-A.x,y=I.y-A.y,w=b.x-A.x,E=b.y-A.y,v=m*E-y*w;if(Math.abs(v)<1e-6)return null;let V=o.x-A.x,$=o.y-A.y,D=(V*E-$*w)/v,F=($*m-V*y)/v;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var lo=22;function co(e,o,n,t,r,l,c,a,s,i,f,g,k,A,I){let b={...no};function m(u){let h=e.getBoundingClientRect();return{x:u.clientX-h.left,y:u.clientY-h.top}}let y=!1,w=!1,E=!1,v=!1,V=null,$=600,D=null;function F(){Z(),D=setTimeout(oe,$)}function Z(){D!==null&&(clearTimeout(D),D=null)}function oe(){D=null,b.alphaMode=!1,fe(),p(),v=!0,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.3),V=null,s()}let G=9,ve=1e3,K=null;function O(){q(),K=setTimeout(Me,ve)}function q(){K!==null&&(clearTimeout(K),K=null),Z()}function Me(){K=null,b.alphaMode=!0,p(),fe(),s()}function te(u){let h=k();return Math.hypot(u.x-h.x,u.y-h.y)}function Pe(u){let h=k();return(Math.atan2(u.x-h.x,-(u.y-h.y))+Math.PI*2)%(Math.PI*2)}function de(u){f(Pe(u)/(Math.PI*2)),s()}function Ce(u){let h=te(u);return h>=le-4&&h<=ee+6}function j(u){let h=o(),T=c(),C=a();for(let M=0;M<3;M++){let L=io(M,h,T,C),H=u.x-L.x,B=u.y-L.y;if(H*H+B*B<=lo*lo)return M}return-1}function X(u){let h=o(),T=c(),C=a();for(let M=Q.length-1;M>=0;M--){let L=ye(M,u,h,T,C);if(L)return{faceIndex:M,...L}}return null}let U=-1,J={x:0,y:0},Te=0;function he(u,h){U=u,J=h,Te=o()[["x","y","z"][u]],b.draggingAxisHandle=u,e.style.cursor="grabbing",s()}function d(u){if(q(),U<0)return;let h=u.x-J.x,T=u.y-J.y,M=Fe()[U],L=c(),B=(h*M.x+T*M.y)/L,N=Math.max(0,Math.min(1,Te+B)),W=o(),_=["x","y","z"],xe={...W,[_[U]]:N};n(xe);let ke=t(),je=l(),Ye=je>=0?Q[je]:null,Le={...ke};Ye&&U===Ye.fixedAxis?Le[_[U]]=N:Le[_[U]]=Math.min(ke[_[U]],N),r(Le,l()),s()}function p(){U=-1,b.draggingAxisHandle=-1}let x=-1,R=null,P=null,S=!1;function be(u,h,T,C){x=u,b.draggingFace=u,R=null,P=null,S=!1,C&&(S=!0,P={s:h,t:T}),Ve(u,h,T),e.style.cursor="crosshair",s()}function ae(u,h,T){if(q(),x<0)return;let C=o(),M=c(),L=a(),H=ye(x,u,C,M,L),B=x;if(!H&&!T){for(let _=Q.length-1;_>=0;_--)if(_!==x&&(H=ye(_,u,C,M,L),H)){B=_;break}}if(!H&&T&&(H=so(x,u,C,M,L),B=x),!H){s();return}B!==x&&(x=B,b.draggingFace=B,R=null,S=!1,P=null);let{s:N,t:W}=H;if(h&&P){if(S){let _=Math.abs(N-P.s),xe=Math.abs(W-P.t),ke=.02;(_>ke||xe>ke)&&(R=_>=xe?"u":"v",S=!1)}R==="u"?W=P.t:R==="v"&&(N=P.s)}else h||(R=null,S=!1,P=null);Ve(B,N,W),s()}function Ve(u,h,T){let C=Q[u],M=o(),L=["x","y","z"],H={...t()};H[L[C.uAxis]]=h*M[L[C.uAxis]],H[L[C.vAxis]]=T*M[L[C.vAxis]],H[L[C.fixedAxis]]=M[L[C.fixedAxis]],r(H,u)}function fe(){x=-1,b.draggingFace=-1,R=null,S=!1,P=null}function ne(u){w=!0;let h=m(u);if(i()){if(b.alphaMode){if(te(h)<=G){b.alphaMode=!1,s();return}if(Ce(h)){u.preventDefault(),y=!0,de(h);return}b.alphaMode=!1,s();return}te(h)<=G&&O()}let T=j(h);if(T>=0){u.preventDefault(),he(T,h);return}let C=X(h);if(C){u.preventDefault(),be(C.faceIndex,C.s,C.t,u.shiftKey),F();return}let M=a();Math.hypot(h.x-M.x,h.y-M.y)>c()+20&&(u.preventDefault(),v=!0,V=h,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),s())}function Ge(u){let h=m(u);if(y){u.preventDefault(),de(h);return}if(v){if(u.preventDefault(),!V){V=h;return}let H=h.x-V.x,B=h.y-V.y,N=De();Ee(Math.max(-60,Math.min(60,N.yaw+H*.12)),Math.max(-60,Math.min(60,N.pitch+B*.12))),H!==0&&A(Math.max(0,Math.min(1,I()+H*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),V=h,s();return}if(w&&b.alphaMode&&Ce(h)){u.preventDefault(),y=!0,de(h);return}if(U>=0){u.preventDefault(),d(h);return}if(x>=0){u.preventDefault(),ae(h,u.shiftKey,u.altKey);return}let T=j(h),C=X(h),M=T,L=T>=0?-1:C?C.faceIndex:-1;(M!==b.hoveredAxisHandle||L!==b.hoveredFace)&&(b.hoveredAxisHandle=M,b.hoveredFace=L,e.style.cursor=M>=0?"grab":L>=0?"crosshair":"default",s())}function Ue(u){q(),w=!1,y=!1,v&&(v=!1,b.viewRotating=!1,b.ringAlpha=0,V=null,s());let h=U>=0||x>=0;p(),fe(),h&&(b.hoveredAxisHandle=-1,b.hoveredFace=-1,e.style.cursor="default",s())}function Ne(u){if(u.touches.length!==1)return;E=!0;let h=m(u.touches[0]);if(i()){if(b.alphaMode){if(te(h)<=G){b.alphaMode=!1,s();return}if(Ce(h)){u.preventDefault(),y=!0,de(h);return}b.alphaMode=!1,s();return}te(h)<=G&&O()}let T=j(h);if(T>=0){u.preventDefault(),he(T,h);return}let C=X(h);if(C){u.preventDefault(),be(C.faceIndex,C.s,C.t,!1),F();return}let M=a();Math.hypot(h.x-M.x,h.y-M.y)>c()+20&&(u.preventDefault(),v=!0,V=h,b.viewRotating=!0,b.ringAlpha=Math.min(1,b.ringAlpha+.25),s())}function Ke(u){if(u.touches.length!==1)return;let h=m(u.touches[0]);if(y)u.preventDefault(),de(h);else if(E&&b.alphaMode&&Ce(h))u.preventDefault(),y=!0,de(h);else if(U>=0)u.preventDefault(),d(h);else if(v){if(u.preventDefault(),!V){V=h;return}let T=h.x-V.x,C=h.y-V.y,M=De();Ee(Math.max(-60,Math.min(60,M.yaw+T*.12)),Math.max(-60,Math.min(60,M.pitch+C*.12))),T!==0&&A(Math.max(0,Math.min(1,I()+T*.002))),b.ringAlpha=Math.min(1,b.ringAlpha+.12),V=h,s()}else x>=0&&(u.preventDefault(),ae(h,!1,!1))}function Xe(u){q(),E=!1,y=!1,v&&(v=!1,b.viewRotating=!1,b.ringAlpha=0,V=null,s()),p(),fe(),s()}function We(u){if(b.alphaMode){if(u.key==="Escape"){b.alphaMode=!1,s();return}if(u.key==="ArrowUp"||u.key==="ArrowRight"){u.preventDefault(),f(Math.min(1,g()+(u.shiftKey?.08:.02))),s();return}if(u.key==="ArrowDown"||u.key==="ArrowLeft"){u.preventDefault(),f(Math.max(0,g()-(u.shiftKey?.08:.02))),s();return}}let h=u.shiftKey?.04:.004,T=t(),C=o(),M=Fe(),L=0,H=0;switch(u.key){case"ArrowRight":L=1;break;case"ArrowLeft":L=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}u.preventDefault();let B={...T},N=["x","y","z"];for(let W=0;W<3;W++){let _=L*M[W].x+H*M[W].y;if(Math.abs(_)>.3){let xe=T[N[W]]+h*Math.sign(_);B[N[W]]=Math.max(0,Math.min(C[N[W]],xe))}}r(B,l()),s()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Ue),e.addEventListener("touchstart",Ne,{passive:!1}),e.addEventListener("touchmove",Ke,{passive:!1}),e.addEventListener("touchend",Xe),e.addEventListener("keydown",We),e.setAttribute("tabindex","0");function fo(){q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Ue),e.removeEventListener("touchstart",Ne),e.removeEventListener("touchmove",Ke),e.removeEventListener("touchend",Xe),e.removeEventListener("keydown",We)}return{state:b,destroy:fo}}var uo=`.box-picker {\r
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
`;var bo=Do,ho=!1;function Eo(){if(ho||typeof document>"u")return;ho=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=uo,document.head.appendChild(e)}function Do(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,l=o.showModeToggle??!1,c=o.showCorners??!1,a={mode:()=>s,switchMode:d=>oe(d),onHexInput:d=>{let p=pe(d);p?(g=ge(F?{r:255-p.r,g:255-p.g,b:255-p.b}:p,s),f={x:Math.max(f.x,g.x),y:Math.max(f.y,g.y),z:Math.max(f.z,g.z)},J(),X(),O()):X()},onChannelInput:(d,p,x)=>{let R=Math.max(0,Math.min(x,p)),P=["x","y","z"],S=R/x;if(F){let be={...g,[P[d]]:S},ae=re(be,s);g=ge({r:255-ae.r,g:255-ae.g,b:255-ae.b},s)}else g={...g,[P[d]]:S};S>f[P[d]]&&(f={...f,[P[d]]:S}),J(),X(),O()},getRgbForCopy:()=>re(g,s),onRandom:d=>he(d),onReset:()=>he({r:0,g:0,b:0})},s=o.mode??"rgb",i=o.initialColor?ge(o.initialColor,s):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},g={...i},k=0,A=()=>o.alpha!==void 0,I=Math.max(0,Math.min(1,o.alpha??1));function b(d){let p=Math.max(0,Math.min(1,d));p!==I&&(I=p,J(),X(),O())}function m(d){let p=j(),x=Y(p);x.s=Math.max(0,Math.min(100,d*100));let R=ie(x);he(F?{r:255-R.r,g:255-R.g,b:255-R.b}:R)}let y=new Set;Eo();let w=document.createElement("div");w.className="box-picker";let E=document.createElement("canvas");E.style.cursor="grab",w.appendChild(E);let v=ro(E,n),V=null,$=document.createElement("div");$.className="box-picker-controls",V=document.createElement("div"),V.className="box-picker-swatch",$.appendChild(V),w.appendChild($),(r||l||c)&&import("./controls-VBFXR3DH.js").then(d=>{d.createControls($,a,{showInputs:r,showModeToggle:l,showCorners:c})}).catch(()=>{}),e.appendChild(w);let D=co(E,()=>f,d=>{f=d},()=>g,(d,p)=>{g=d,k=p,J(),X()},()=>k,()=>v.scale,()=>v.center,O,A,b,()=>I,()=>z(g,v.scale,v.center),m,()=>Y(j()).s/100),F=!1,Z=!0;E.addEventListener("mouseenter",()=>{Z=!0,O()}),E.addEventListener("mouseleave",()=>{Z=!1,O()}),E.addEventListener("dblclick",()=>{F=!F,to(F),J(),X(),O()});function oe(d){if(d===s)return;let p=re(g,s),x={...g},R={...f};s=d;let P=ge(p,s),S={x:1,y:1,z:1};g=P,f=S,ve(x,P,R,S,300),X()}let G=null;function ve(d,p,x,R,P){G!==null&&cancelAnimationFrame(G);let S=performance.now();function be(ae){let Ve=ae-S,fe=Math.min(1,Ve/P),ne=1-Math.pow(1-fe,3);g={x:d.x+(p.x-d.x)*ne,y:d.y+(p.y-d.y)*ne,z:d.z+(p.z-d.z)*ne},f={x:x.x+(R.x-x.x)*ne,y:x.y+(R.y-x.y)*ne,z:x.z+(R.z-x.z)*ne},q(),J(),fe<1?G=requestAnimationFrame(be):G=null}G=requestAnimationFrame(be)}let K=!1;function O(){K||(K=!0,requestAnimationFrame(()=>{K=!1,q()}))}function q(){ao(v,f,g,k,s,D.state,Z,{active:D.state.alphaMode,alpha:I,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:Y(j()).s/100,rgb:ie({h:Y(j()).h,s:100,b:100})})}function Me(d,p,x){return Math.round(d+(p-d)*x)}function te(d,p){let x=p>0?255:0,R=Math.abs(p);return se({r:Me(d.r,x,R),g:Me(d.g,x,R),b:Me(d.b,x,R)})}function Pe(d,p){let x=pe(p)||{r:128,g:128,b:128},R=te(x,.35),P=te(x,0),S=te(x,-.35);d.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${R}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${P}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,d.style.backgroundColor="transparent"}function de(d){try{navigator.clipboard.writeText(d).catch(()=>{})}catch{}}function Ce(d){d&&(d.style.borderColor="#4ade80",d.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{d.style.borderColor="",d.style.boxShadow=""},500))}function j(){let d=re(g,s);return F?{r:255-d.r,g:255-d.g,b:255-d.b}:d}function X(){if(!t)return;let d=j(),p=se(d);V&&Pe(V,p);let x=w.querySelector(".box-picker-hex");x&&(x.value=p),U(),w._updateModeButtons&&w._updateModeButtons()}function U(){if(!t)return;let d=Re[s],p=F?ge(j(),s):g,x=qe(p,s),R=w.querySelectorAll(".box-picker-channel input"),P=w.querySelectorAll(".box-picker-channel label");for(let S=0;S<R.length;S++)P[S].textContent=d[S],P[S].style.color="",P[S].style.textShadow="none",R[S].value=String(x[S])}function J(){let d=j(),p={rgb:d,hsb:Y(d),oklch:me(d),hex:se(d),alpha:I};for(let x of y)x(p)}function Te(){let d=re(g,s);return{rgb:d,hsb:Y(d),oklch:me(d),hex:se(d)}}X(),q();let he=d=>{g=ge(d,s),f={x:Math.max(f.x,g.x),y:Math.max(f.y,g.y),z:Math.max(f.z,g.z)};let p=z(g,v.scale,v.center);k=-1;for(let x=Q.length-1;x>=0;x--)if(ye(x,p,f,v.scale,v.center)){k=x;break}J(),X(),O()};return{getColor:Te,getMode:()=>s,setColor:he,setAlpha:b,getAlpha:()=>I,setMode(d){oe(d)},on(d,p){y.add(p)},off(d,p){y.delete(p)},destroy(){D.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(w)}}}function _e(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:pe(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=pe(t[1]),l=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:l}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Oe(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Oe(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?ie({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Ae({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Oe(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:ie({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Se(e,o,n=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=Be(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=Be(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=Y(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=Y(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=Be(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=Y(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=me(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Oe(e,o,n){let t=o/100,r=n/100,l=(1-Math.abs(2*r-1))*t,c=l*(1-Math.abs(e/60%2-1)),a=r-l/2,s=0,i=0,f=0;return e<60?(s=l,i=c):e<120?(s=c,i=l):e<180?(i=l,f=c):e<240?(i=c,f=l):e<300?(s=c,f=l):(s=l,f=c),{r:Math.round((s+a)*255),g:Math.round((i+a)*255),b:Math.round((f+a)*255)}}function Be(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),l=Math.min(o,n,t),c=(r+l)/2;if(r===l)return{h:0,s:0,l:c*100};let a=r-l,s=c>.5?a/(2-r-l):a/(r+l),i=0;return r===o?i=((n-t)/a+(n<t?6:0))*60:r===n?i=((t-o)/a+2)*60:i=((o-n)/a+4)*60,{h:i,s:s*100,l:c*100}}var ze=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?_e(t,this.model):null;this.alpha=r?.alpha??1;let l=r?.rgb??{r:255,g:255,b:255},c=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=bo(this.holder,{initialColor:l,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...c.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",a=>{this.internal||(this.internal=!0,this.alpha=a.alpha,this.setAttribute("value",Se(a.rgb,this.model,a.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:a})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Se(a.rgb,this.model,a.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=_e(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Se({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},$e=class extends ze{constructor(){super("hex")}},Fo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Fo)customElements.get(e)||customElements.define(e,class extends ze{constructor(){super(o)}});var at=$e;export{$e as ColorIsBoxElement,Do as createBoxColorPicker,bo as createColorPicker,at as default,to as setBoxInvert};
