var Ve={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ze={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function Y(e){let o=e.r/255,t=e.g/255,n=e.b/255,a=Math.max(o,t,n),s=Math.min(o,t,n),l=a-s,r=0;l!==0&&(a===o?r=((t-n)/l+6)%6:a===t?r=(n-o)/l+2:r=(o-t)/l+4,r*=60);let i=a===0?0:l/a*100,d=a*100;return{h:r,s:i,b:d}}function ie(e){let o=e.h,t=e.s/100,n=e.b/100,a=n*t,s=a*(1-Math.abs(o/60%2-1)),l=n-a,r,i,d;return o<60?(r=a,i=s,d=0):o<120?(r=s,i=a,d=0):o<180?(r=0,i=a,d=s):o<240?(r=0,i=s,d=a):o<300?(r=s,i=0,d=a):(r=a,i=0,d=s),{r:Math.round((r+l)*255),g:Math.round((i+l)*255),b:Math.round((d+l)*255)}}function Ee(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function He(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function go(e){let o=Ee(e.r/255),t=Ee(e.g/255),n=Ee(e.b/255),a=.4122214708*o+.5363325363*t+.0514459929*n,s=.2119034982*o+.6806995451*t+.1073969566*n,l=.0883024619*o+.2817188376*t+.6299787005*n,r=Math.cbrt(a),i=Math.cbrt(s),d=Math.cbrt(l);return{L:.2104542553*r+.793617785*i-.0040720468*d,a:1.9779984951*r-2.428592205*i+.4505937099*d,b:.0259040371*r+.7827717662*i-.808675766*d}}function mo(e,o,t){let n=e+.3963377774*o+.2158037573*t,a=e-.1055613458*o-.0638541728*t,s=e-.0894841775*o-1.291485548*t,l=n*n*n,r=a*a*a,i=s*s*s,d=4.0767416621*l-3.3077115913*r+.2309699292*i,b=-1.2684380046*l+2.6097574011*r-.3413193965*i,f=-.0041960863*l-.7034186147*r+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,He(d)))*255),g:Math.round(Math.max(0,Math.min(1,He(b)))*255),b:Math.round(Math.max(0,Math.min(1,He(f)))*255)}}function ge(e){let o=go(e),t=Math.sqrt(o.a*o.a+o.b*o.b),n=Math.atan2(o.b,o.a)*(180/Math.PI);return n<0&&(n+=360),{l:o.L,c:t,h:t<1e-4?0:n}}function Ce(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),n=e.c*Math.sin(o);return mo(e.l,t,n)}function xo(e,o,t){let n=Ce({l:e,c:o,h:t});if(Je(n))return{l:e,c:o,h:t};let a=0,s=o;for(let l=0;l<20;l++){let r=(a+s)/2;n=Ce({l:e,c:r,h:t}),Je(n)?a=r:s=r}return{l:e,c:a,h:t}}function Je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function me(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Qe=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return ie({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,n=e.y*Qe,a=e.z*359,s=xo(t,n,a);return Ce(s)}}function be(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=Y(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=ge(e);return{x:t.l,y:Math.min(t.c/Qe,1),z:t.h/359}}}function qe(e,o){let t=Ze[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function eo(e,o,t,n,a,s=!1){let l;e===0?l={x:n,y:o,z:t}:e===1?l={x:o,y:n,z:t}:l={x:o,y:t,z:n};let r=re(l,a);return s?{r:255-r.r,g:255-r.g,b:255-r.b}:r}var oo=Math.PI/6,po=Math.cos(oo),yo=Math.sin(oo),we=!1;function to(e){we=e}var ke=0,Ae=0;function De(e,o){ke=e,Ae=o}function Se(){return{yaw:ke,pitch:Ae}}function V(e,o,t){let n=e;if(ke!==0||Ae!==0){let a={x:e.x-.5,y:e.y-.5,z:e.z-.5},s=Math.cos(ke),l=Math.sin(ke),r=Math.cos(Ae),i=Math.sin(Ae),d=a.x*s+a.z*l,b=a.y,f=-a.x*l+a.z*s,k=b*r-f*i,A=b*i+f*r;n={x:d+.5,y:k+.5,z:A+.5}}return{x:t.x+(n.y-n.x)*po*o,y:t.y+n.z*o-(n.x+n.y)*yo*o}}function vo(e){let{x:o,y:t,z:n}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:n},{x:o,y:t,z:0},{x:o,y:0,z:n},{x:0,y:t,z:n},{x:o,y:t,z:n}]}var Q=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2}],Mo=64,no={alphaMode:!1,viewRotating:!1,ringAlpha:0,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ro(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*.84*t,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let n=e.getContext("2d");return n.scale(t,t),{ctx:n,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function ao(e,o,t,n,a,s,l=!0,r=null,i=null){let{ctx:d,scale:b,center:f,width:k,height:A}=e;d.save(),d.clearRect(0,0,k,A);let H=vo(o).map(M=>V(M,b,f));ko(d,b,f,a),d.save(),d.shadowColor="rgba(0,0,0,0.35)",d.shadowBlur=8,d.shadowOffsetX=0,d.shadowOffsetY=2,Ao(d,H,o,a),d.restore(),l&&To(d,a,b,f);let{yaw:g,pitch:z}=Se(),v=Math.max(0,Math.min(1,1-Math.max(Math.abs(g),Math.abs(z))/10));if(v>.02&&!s.viewRotating&&So(d,b,f,v*.45),i&&i.active&&s.ringAlpha>.01&&zo(d,f,i.rgb,i.sat,s.ringAlpha),n>=0){let M=re(t,a),I=we?{r:255-M.r,g:255-M.g,b:255-M.b}:M,p=V(t,b,f);r&&r.active&&Po(d,p,r.rgb,r.alpha),Lo(d,p,I)}d.restore()}var Co={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function ko(e,o,t,n){let a=V({x:0,y:0,z:0},o,t),s=[V({x:1,y:0,z:0},o,t),V({x:0,y:1,z:0},o,t),V({x:0,y:0,z:1},o,t)],l=Co[n];e.lineWidth=1.5;for(let r=0;r<s.length;r++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s[r].x,s[r].y),e.strokeStyle=l[r],e.stroke()}function Ao(e,o,t,n){let a=[t.x,t.y,t.z];for(let s=0;s<Q.length;s++){let l=Q[s],r=a[l.fixedAxis],i=a[l.uAxis],d=a[l.vAxis];if(i<.002&&d<.002)continue;let b=l.quad.map(f=>o[f]);wo(e,b,l.fixedAxis,r,i,d,n)}}function wo(e,o,t,n,a,s,l){let r=Mo,i=document.createElement("canvas");i.width=r,i.height=r;let d=i.getContext("2d"),b=d.createImageData(r,r),f=b.data;for(let Z=0;Z<r;Z++)for(let oe=0;oe<r;oe++){let G=oe/(r-1)*a,pe=Z/(r-1)*s,K=eo(t,G,pe,n,l,we),B=(Z*r+oe)*4;f[B]=K.r,f[B+1]=K.g,f[B+2]=K.b,f[B+3]=255}d.putImageData(b,0,0);let k=o[0],A=o[1],H=o[2],g=o[3],z=A.x-k.x,v=A.y-k.y,M=g.x-k.x,I=g.y-k.y;e.save(),e.beginPath(),e.moveTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(H.x,H.y),e.lineTo(g.x,g.y),e.closePath(),e.clip();let p=2/r,T=k.x-z*p-M*p,$=k.y-v*p-I*p,D=1+2*p,F=1+2*p;e.transform(z*D/r,v*D/r,M*F/r,I*F/r,T,$),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}function To(e,o,t,n){let a=Ve[o],s=we?[V({x:0,y:1,z:1},t,n),V({x:1,y:0,z:1},t,n),V({x:1,y:1,z:0},t,n)]:[V({x:1,y:0,z:0},t,n),V({x:0,y:1,z:0},t,n),V({x:0,y:0,z:1},t,n)],l=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let r=0;r<3;r++){let i=s[r].x+l[r].x,d=s[r].y+l[r].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(a[r],i,d)}e.globalAlpha=1,e.restore()}var Ro=.48,Vo=.33;function So(e,o,t,n){let a=[{x:1,y:0,z:0},{x:1,y:1,z:0},{x:0,y:1,z:0},{x:0,y:1,z:1},{x:0,y:0,z:1},{x:1,y:0,z:1}],s=["R","Y","G","C","B","M"],l=["#ff1744","#ffeb3b","#00e676","#00bcd4","#2962ff","#f50057"];e.save(),e.globalAlpha=n;for(let r of[.25,.5,.75,1]){e.setLineDash(r===1?[]:[3,5]),e.strokeStyle=r===1?"rgba(30,41,59,.5)":"rgba(148,163,184,.55)",e.lineWidth=r===1?1.4:1,e.beginPath();for(let i=0;i<=6;i++){let d=a[i%6],b=V({x:d.x*r,y:d.y*r,z:d.z*r},o,t);i===0?e.moveTo(b.x,b.y):e.lineTo(b.x,b.y)}e.closePath(),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(148,163,184,.4)",e.lineWidth=1;for(let r of a){let i=V(r,o,t);e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(i.x,i.y),e.stroke()}e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="left";for(let r of[.25,.5,.75]){let i=V({x:r,y:r,z:0},o,t);e.fillText(Math.round(r*100)+"%",i.x+5,i.y-4)}e.font="bold 11px sans-serif",e.fillStyle="#334155",e.textAlign="center";for(let r=0;r<6;r++){let i=V(a[r],o,t),d=i.x>t.x+10?14:i.x<t.x-10?-14:0,b=i.y<t.y-10?-10:14;e.fillText(s[r],i.x+d,i.y+b)}e.beginPath(),e.arc(t.x,t.y,3.5,0,Math.PI*2),e.fillStyle="#111",e.fill(),e.restore()}function zo(e,o,t,n,a,s){let l=o*Ro,r=o*Vo,i=Math.max(0,Math.min(1,a));e.save(),e.globalAlpha=s,e.beginPath(),e.arc(t.x,t.y,l,0,Math.PI*2),e.arc(t.x,t.y,r,0,Math.PI*2,!0),e.clip();let d=e.createRadialGradient(t.x,t.y,r,t.x,t.y,l);d.addColorStop(0,"#e7e7e7"),d.addColorStop(1,"rgb("+n.r+","+n.g+","+n.b+")"),e.fillStyle=d,e.fillRect(t.x-l,t.y-l,l*2,l*2),e.restore(),e.beginPath(),e.arc(t.x,t.y,l,0,Math.PI*2),e.arc(t.x,t.y,r,0,Math.PI*2,!0),e.strokeStyle="rgba(15,23,42,.35)",e.lineWidth=1.2,e.stroke(),e.font="10px monospace",e.fillStyle="#64748b",e.textAlign="center";for(let f of[.25,.5,.75]){let k=r+(l-r)*f;e.fillText(Math.round(f*100)+"%",t.x+k+10,t.y-4)}let b=r+(l-r)*i;e.save(),e.setLineDash([3,4]),e.strokeStyle="rgba(100,116,139,.6)",e.lineWidth=1,e.beginPath(),e.moveTo(t.x,t.y-r),e.lineTo(t.x,t.y-b),e.stroke(),e.restore(),e.beginPath(),e.arc(t.x,t.y-b,6.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(15,23,42,.55)",e.lineWidth=1.4,e.stroke(),e.restore()}var ee=30,le=13;function Po(e,o,t,n){let a=(ee+le)/2,s=5,l=Math.floor(o.x/s)*s,r=Math.floor(o.y/s)*s,i=ee*2+s*2,d=Math.max(0,Math.min(1,n));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let z=-1;z*s<=i;z++)for(let v=-1;v*s<=i;v++)e.fillStyle=(z+v)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+z*s,r+v*s,s,s);let b="rgba("+t.r+","+t.g+","+t.b+",0)",f="rgba("+t.r+","+t.g+","+t.b+",1)",k=e;if(typeof k.createConicGradient=="function"){let z=k.createConicGradient(-Math.PI/2,o.x,o.y);z.addColorStop(0,b),z.addColorStop(1,f),e.fillStyle=z,e.fillRect(l-ee,r-ee,i,i)}else for(let v=0;v<36;v++){let M=-Math.PI/2+v/36*Math.PI*2,I=-Math.PI/2+(v+1)/36*Math.PI*2,p=(v+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(M)*le,o.y+Math.sin(M)*le),e.arc(o.x,o.y,ee,M,I),e.arc(o.x,o.y,le,I,M,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+p.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=d*Math.PI*2,H=o.x+a*Math.sin(A),g=o.y-a*Math.cos(A);e.beginPath(),e.arc(H,g,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Lo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function io(e,o,t,n){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return V(a[e],t,n)}function Fe(){let e={x:0,y:0};return[V({x:1,y:0,z:0},1,e),V({x:0,y:1,z:0},1,e),V({x:0,y:0,z:1},1,e)].map(t=>{let n=Math.sqrt(t.x*t.x+t.y*t.y);return n>0?{x:t.x/n,y:t.y/n}:{x:0,y:0}})}function xe(e,o,t,n,a){let s=Q[e],l=[t.x,t.y,t.z],r=l[s.uAxis],i=l[s.vAxis];if(r<.002||i<.002)return null;let d={x:0,y:0,z:0},b=["x","y","z"];d[b[s.fixedAxis]]=l[s.fixedAxis];let f={...d};f[b[s.uAxis]]=r;let k={...d};k[b[s.vAxis]]=i;let A=V(d,n,a),H=V(f,n,a),g=V(k,n,a),z=H.x-A.x,v=H.y-A.y,M=g.x-A.x,I=g.y-A.y,p=z*I-v*M;if(Math.abs(p)<1e-6)return null;let T=o.x-A.x,$=o.y-A.y,D=(T*I-$*M)/p,F=($*z-T*v)/p;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function so(e,o,t,n,a){let s=Q[e],l=[t.x,t.y,t.z],r=l[s.uAxis],i=l[s.vAxis];if(r<.002||i<.002)return null;let d={x:0,y:0,z:0},b=["x","y","z"];d[b[s.fixedAxis]]=l[s.fixedAxis];let f={...d};f[b[s.uAxis]]=r;let k={...d};k[b[s.vAxis]]=i;let A=V(d,n,a),H=V(f,n,a),g=V(k,n,a),z=H.x-A.x,v=H.y-A.y,M=g.x-A.x,I=g.y-A.y,p=z*I-v*M;if(Math.abs(p)<1e-6)return null;let T=o.x-A.x,$=o.y-A.y,D=(T*I-$*M)/p,F=($*z-T*v)/p;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var lo=22;function co(e,o,t,n,a,s,l,r,i,d,b,f,k,A,H){let g={...no};function z(c){let h=e.getBoundingClientRect();return{x:c.clientX-h.left,y:c.clientY-h.top}}let v=!1,M=!1,I=!1,p=!1,T=null,$=600,D=null;function F(){Z(),D=setTimeout(oe,$)}function Z(){D!==null&&(clearTimeout(D),D=null)}function oe(){D=null,he(),x(),p=!0,g.viewRotating=!0,g.ringAlpha=Math.min(1,g.ringAlpha+.3),T=null,i()}let G=9,pe=1e3,K=null;function B(){q(),K=setTimeout(ye,pe)}function q(){K!==null&&(clearTimeout(K),K=null),Z()}function ye(){K=null,g.alphaMode=!0,x(),he(),i()}function te(c){let h=k();return Math.hypot(c.x-h.x,c.y-h.y)}function Le(c){let h=k();return(Math.atan2(c.x-h.x,-(c.y-h.y))+Math.PI*2)%(Math.PI*2)}function ce(c){b(Le(c)/(Math.PI*2)),i()}function ve(c){let h=te(c);return h>=le-4&&h<=ee+6}function j(c){let h=o(),w=l(),C=r();for(let y=0;y<3;y++){let L=io(y,h,w,C),E=c.x-L.x,O=c.y-L.y;if(E*E+O*O<=lo*lo)return y}return-1}function X(c){let h=o(),w=l(),C=r();for(let y=Q.length-1;y>=0;y--){let L=xe(y,c,h,w,C);if(L)return{faceIndex:y,...L}}return null}let N=-1,J={x:0,y:0},Te=0;function de(c,h){N=c,J=h,Te=o()[["x","y","z"][c]],g.draggingAxisHandle=c,e.style.cursor="grabbing",i()}function u(c){if(q(),N<0)return;let h=c.x-J.x,w=c.y-J.y,y=Fe()[N],L=l(),O=(h*y.x+w*y.y)/L,U=Math.max(0,Math.min(1,Te+O)),W=o(),_=["x","y","z"],fe={...W,[_[N]]:U};t(fe);let Me=n(),je=s(),Ye=je>=0?Q[je]:null,Ie={...Me};Ye&&N===Ye.fixedAxis?Ie[_[N]]=U:Ie[_[N]]=Math.min(Me[_[N]],U),a(Ie,s()),i()}function x(){N=-1,g.draggingAxisHandle=-1}let m=-1,R=null,P=null,S=!1;function ue(c,h,w,C){m=c,g.draggingFace=c,R=null,P=null,S=!1,C&&(S=!0,P={s:h,t:w}),Re(c,h,w),e.style.cursor="crosshair",i()}function ae(c,h,w){if(q(),m<0)return;let C=o(),y=l(),L=r(),E=xe(m,c,C,y,L),O=m;if(!E&&!w){for(let _=Q.length-1;_>=0;_--)if(_!==m&&(E=xe(_,c,C,y,L),E)){O=_;break}}if(!E&&w&&(E=so(m,c,C,y,L),O=m),!E){i();return}O!==m&&(m=O,g.draggingFace=O,R=null,S=!1,P=null);let{s:U,t:W}=E;if(h&&P){if(S){let _=Math.abs(U-P.s),fe=Math.abs(W-P.t),Me=.02;(_>Me||fe>Me)&&(R=_>=fe?"u":"v",S=!1)}R==="u"?W=P.t:R==="v"&&(U=P.s)}else h||(R=null,S=!1,P=null);Re(O,U,W),i()}function Re(c,h,w){let C=Q[c],y=o(),L=["x","y","z"],E={...n()};E[L[C.uAxis]]=h*y[L[C.uAxis]],E[L[C.vAxis]]=w*y[L[C.vAxis]],E[L[C.fixedAxis]]=y[L[C.fixedAxis]],a(E,c)}function he(){m=-1,g.draggingFace=-1,R=null,S=!1,P=null}function ne(c){M=!0;let h=z(c);if(d()){if(g.alphaMode){if(te(h)<=G){g.alphaMode=!1,i();return}if(ve(h)){c.preventDefault(),v=!0,ce(h);return}g.alphaMode=!1,i();return}te(h)<=G&&B()}let w=j(h);if(w>=0){c.preventDefault(),de(w,h);return}let C=X(h);if(C){c.preventDefault(),ue(C.faceIndex,C.s,C.t,c.shiftKey),F();return}let y=r();Math.hypot(h.x-y.x,h.y-y.y)>l()+20&&(c.preventDefault(),p=!0,T=h,g.viewRotating=!0,g.ringAlpha=Math.min(1,g.ringAlpha+.25),i())}function Ge(c){let h=z(c);if(v){c.preventDefault(),ce(h);return}if(p){if(c.preventDefault(),!T){T=h;return}let E=h.x-T.x,O=h.y-T.y,U=Se();De(Math.max(-60,Math.min(60,U.yaw+E*.12)),Math.max(-60,Math.min(60,U.pitch+O*.12))),E!==0&&A(Math.max(0,Math.min(1,H()+E*.002))),g.ringAlpha=Math.min(1,g.ringAlpha+.12),T=h,i();return}if(M&&g.alphaMode&&ve(h)){c.preventDefault(),v=!0,ce(h);return}if(N>=0){c.preventDefault(),u(h);return}if(m>=0){c.preventDefault(),ae(h,c.shiftKey,c.altKey);return}let w=j(h),C=X(h),y=w,L=w>=0?-1:C?C.faceIndex:-1;(y!==g.hoveredAxisHandle||L!==g.hoveredFace)&&(g.hoveredAxisHandle=y,g.hoveredFace=L,e.style.cursor=y>=0?"grab":L>=0?"crosshair":"default",i())}function Ne(c){q(),M=!1,v=!1,p&&(p=!1,g.viewRotating=!1,g.ringAlpha=0,T=null,i());let h=N>=0||m>=0;x(),he(),h&&(g.hoveredAxisHandle=-1,g.hoveredFace=-1,e.style.cursor="default",i())}function Ue(c){if(c.touches.length!==1)return;I=!0;let h=z(c.touches[0]);if(d()){if(g.alphaMode){if(te(h)<=G){g.alphaMode=!1,i();return}if(ve(h)){c.preventDefault(),v=!0,ce(h);return}g.alphaMode=!1,i();return}te(h)<=G&&B()}let w=j(h);if(w>=0){c.preventDefault(),de(w,h);return}let C=X(h);if(C){c.preventDefault(),ue(C.faceIndex,C.s,C.t,!1),F();return}let y=r();Math.hypot(h.x-y.x,h.y-y.y)>l()+20&&(c.preventDefault(),p=!0,T=h,g.viewRotating=!0,g.ringAlpha=Math.min(1,g.ringAlpha+.25),i())}function Ke(c){if(c.touches.length!==1)return;let h=z(c.touches[0]);if(v)c.preventDefault(),ce(h);else if(I&&g.alphaMode&&ve(h))c.preventDefault(),v=!0,ce(h);else if(N>=0)c.preventDefault(),u(h);else if(p){if(c.preventDefault(),!T){T=h;return}let w=h.x-T.x,C=h.y-T.y,y=Se();De(Math.max(-60,Math.min(60,y.yaw+w*.12)),Math.max(-60,Math.min(60,y.pitch+C*.12))),w!==0&&A(Math.max(0,Math.min(1,H()+w*.002))),g.ringAlpha=Math.min(1,g.ringAlpha+.12),T=h,i()}else m>=0&&(c.preventDefault(),ae(h,!1,!1))}function Xe(c){q(),I=!1,v=!1,p&&(p=!1,g.viewRotating=!1,g.ringAlpha=0,T=null,i()),x(),he(),i()}function We(c){if(g.alphaMode){if(c.key==="Escape"){g.alphaMode=!1,i();return}if(c.key==="ArrowUp"||c.key==="ArrowRight"){c.preventDefault(),b(Math.min(1,f()+(c.shiftKey?.08:.02))),i();return}if(c.key==="ArrowDown"||c.key==="ArrowLeft"){c.preventDefault(),b(Math.max(0,f()-(c.shiftKey?.08:.02))),i();return}}let h=c.shiftKey?.04:.004,w=n(),C=o(),y=Fe(),L=0,E=0;switch(c.key){case"ArrowRight":L=1;break;case"ArrowLeft":L=-1;break;case"ArrowUp":E=-1;break;case"ArrowDown":E=1;break;default:return}c.preventDefault();let O={...w},U=["x","y","z"];for(let W=0;W<3;W++){let _=L*y[W].x+E*y[W].y;if(Math.abs(_)>.3){let fe=w[U[W]]+h*Math.sign(_);O[U[W]]=Math.max(0,Math.min(C[U[W]],fe))}}a(O,s()),i()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Ne),e.addEventListener("touchstart",Ue,{passive:!1}),e.addEventListener("touchmove",Ke,{passive:!1}),e.addEventListener("touchend",Xe),e.addEventListener("keydown",We),e.setAttribute("tabindex","0");function fo(){q(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Ne),e.removeEventListener("touchstart",Ue),e.removeEventListener("touchmove",Ke),e.removeEventListener("touchend",Xe),e.removeEventListener("keydown",We)}return{state:g,destroy:fo}}var uo=`.box-picker {\r
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
`;var bo=Ho,ho=!1;function Eo(){if(ho||typeof document>"u")return;ho=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=uo,document.head.appendChild(e)}function Ho(e,o={}){let t=o.size??300,n=o.controls??!0,a=o.showInputs??!1,s=o.showModeToggle??!1,l=o.showCorners??!1,r={mode:()=>i,switchMode:u=>oe(u),onHexInput:u=>{let x=me(u);x?(f=be(F?{r:255-x.r,g:255-x.g,b:255-x.b}:x,i),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)},J(),X(),B()):X()},onChannelInput:(u,x,m)=>{let R=Math.max(0,Math.min(m,x)),P=["x","y","z"],S=R/m;if(F){let ue={...f,[P[u]]:S},ae=re(ue,i);f=be({r:255-ae.r,g:255-ae.g,b:255-ae.b},i)}else f={...f,[P[u]]:S};S>b[P[u]]&&(b={...b,[P[u]]:S}),J(),X(),B()},getRgbForCopy:()=>re(f,i),onRandom:u=>de(u),onReset:()=>de({r:0,g:0,b:0})},i=o.mode??"rgb",d=o.initialColor?be(o.initialColor,i):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},f={...d},k=0,A=()=>o.alpha!==void 0,H=Math.max(0,Math.min(1,o.alpha??1));function g(u){let x=Math.max(0,Math.min(1,u));x!==H&&(H=x,J(),X(),B())}function z(u){let x=j(),m=Y(x);m.s=Math.max(0,Math.min(100,u*100));let R=ie(m);de(F?{r:255-R.r,g:255-R.g,b:255-R.b}:R)}let v=new Set;Eo();let M=document.createElement("div");M.className="box-picker";let I=document.createElement("canvas");I.style.cursor="grab",M.appendChild(I);let p=ro(I,t),T=null,$=document.createElement("div");$.className="box-picker-controls",T=document.createElement("div"),T.className="box-picker-swatch",$.appendChild(T),M.appendChild($),(a||s||l)&&import("./controls-VBFXR3DH.js").then(u=>{u.createControls($,r,{showInputs:a,showModeToggle:s,showCorners:l})}).catch(()=>{}),e.appendChild(M);let D=co(I,()=>b,u=>{b=u},()=>f,(u,x)=>{f=u,k=x,J(),X()},()=>k,()=>p.scale,()=>p.center,B,A,g,()=>H,()=>V(f,p.scale,p.center),z,()=>Y(j()).s/100),F=!1,Z=!0;I.addEventListener("mouseenter",()=>{Z=!0,B()}),I.addEventListener("mouseleave",()=>{Z=!1,B()}),I.addEventListener("dblclick",()=>{F=!F,to(F),J(),X(),B()});function oe(u){if(u===i)return;let x=re(f,i),m={...f},R={...b};i=u;let P=be(x,i),S={x:1,y:1,z:1};f=P,b=S,pe(m,P,R,S,300),X()}let G=null;function pe(u,x,m,R,P){G!==null&&cancelAnimationFrame(G);let S=performance.now();function ue(ae){let Re=ae-S,he=Math.min(1,Re/P),ne=1-Math.pow(1-he,3);f={x:u.x+(x.x-u.x)*ne,y:u.y+(x.y-u.y)*ne,z:u.z+(x.z-u.z)*ne},b={x:m.x+(R.x-m.x)*ne,y:m.y+(R.y-m.y)*ne,z:m.z+(R.z-m.z)*ne},q(),J(),he<1?G=requestAnimationFrame(ue):G=null}G=requestAnimationFrame(ue)}let K=!1;function B(){K||(K=!0,requestAnimationFrame(()=>{K=!1,q()}))}function q(){ao(p,b,f,k,i,D.state,Z,{active:D.state.alphaMode,alpha:H,rgb:j()},{active:D.state.viewRotating||D.state.ringAlpha>0,sat:Y(j()).s/100,rgb:ie({h:Y(j()).h,s:100,b:100})})}function ye(u,x,m){return Math.round(u+(x-u)*m)}function te(u,x){let m=x>0?255:0,R=Math.abs(x);return se({r:ye(u.r,m,R),g:ye(u.g,m,R),b:ye(u.b,m,R)})}function Le(u,x){let m=me(x)||{r:128,g:128,b:128},R=te(m,.35),P=te(m,0),S=te(m,-.35);u.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${R}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${P}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,u.style.backgroundColor="transparent"}function ce(u){try{navigator.clipboard.writeText(u).catch(()=>{})}catch{}}function ve(u){u&&(u.style.borderColor="#4ade80",u.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{u.style.borderColor="",u.style.boxShadow=""},500))}function j(){let u=re(f,i);return F?{r:255-u.r,g:255-u.g,b:255-u.b}:u}function X(){if(!n)return;let u=j(),x=se(u);T&&Le(T,x);let m=M.querySelector(".box-picker-hex");m&&(m.value=x),N(),M._updateModeButtons&&M._updateModeButtons()}function N(){if(!n)return;let u=Ve[i],x=F?be(j(),i):f,m=qe(x,i),R=M.querySelectorAll(".box-picker-channel input"),P=M.querySelectorAll(".box-picker-channel label");for(let S=0;S<R.length;S++)P[S].textContent=u[S],P[S].style.color="",P[S].style.textShadow="none",R[S].value=String(m[S])}function J(){let u=j(),x={rgb:u,hsb:Y(u),oklch:ge(u),hex:se(u),alpha:H};for(let m of v)m(x)}function Te(){let u=re(f,i);return{rgb:u,hsb:Y(u),oklch:ge(u),hex:se(u)}}X(),q();let de=u=>{f=be(u,i),b={x:Math.max(b.x,f.x),y:Math.max(b.y,f.y),z:Math.max(b.z,f.z)};let x=V(f,p.scale,p.center);k=-1;for(let m=Q.length-1;m>=0;m--)if(xe(m,x,b,p.scale,p.center)){k=m;break}J(),X(),B()};return{getColor:Te,getMode:()=>i,setColor:de,setAlpha:g,getAlpha:()=>H,setMode(u){oe(u)},on(u,x){v.add(x)},off(u,x){v.delete(x)},destroy(){D.destroy(),G!==null&&cancelAnimationFrame(G),e.removeChild(M)}}}function _e(e,o){if(!e)return null;let t=e.trim();try{if(o==="hex")return{rgb:me(t),alpha:1};if(o==="hex-alpha"){let n=t.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!n)return null;let a=me(n[1]),s=n[2]?parseInt(n[2],16)/255:1;return{rgb:a,alpha:s}}if(o==="rgb"){let n=t.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return n?{r:+n[1],g:+n[2],b:+n[3]}:null}if(o==="rgba"){let n=t.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return n?{rgb:{r:+n[1],g:+n[2],b:+n[3]},alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="hsl"){let n=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return n?Be(+n[1],+n[2],+n[3]):null}if(o==="hsla"){let n=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return n?{rgb:Be(+n[1],+n[2],+n[3]),alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="hsv"){let n=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return n?ie({h:+n[1],s:+n[2],b:+n[3]}):null}if(o==="hsva"){let n=t.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return n?{rgb:ie({h:+n[1],s:+n[2],b:+n[3]}),alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="oklch"||o==="oklcha"){let n=t.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return n?{rgb:Ce({l:+n[1],c:+n[2],h:+n[3]}),alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="rgba-string"){let n=t.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return n?{rgb:{r:+n[1],g:+n[2],b:+n[3]},alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="hsla-string"){let n=t.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return n?{rgb:Be(+n[1],+n[2],+n[3]),alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}if(o==="hsva-string"){let n=t.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return n?{rgb:ie({h:+n[1],s:+n[2],b:+n[3]}),alpha:n[4]!==void 0?Math.min(1,+n[4]):1}:null}}catch{}return null}function ze(e,o,t=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(t<1?Math.round(t*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+t.toFixed(3)}`;if(o==="hsl"){let a=Oe(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%`}if(o==="hsla"){let a=Oe(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+t.toFixed(3)}`}if(o==="hsv"){let a=Y(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%`}if(o==="hsva"){let a=Y(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+t.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+t.toFixed(3)})`;if(o==="hsla-string"){let a=Oe(e);return`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+t.toFixed(3)})`}if(o==="hsva-string"){let a=Y(e);return`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+t.toFixed(3)})`}let n=ge(e);return`${n.l.toFixed(3)}, ${n.c.toFixed(3)}, ${n.h.toFixed(1)}`}function Be(e,o,t){let n=o/100,a=t/100,s=(1-Math.abs(2*a-1))*n,l=s*(1-Math.abs(e/60%2-1)),r=a-s/2,i=0,d=0,b=0;return e<60?(i=s,d=l):e<120?(i=l,d=s):e<180?(d=s,b=l):e<240?(d=l,b=s):e<300?(i=l,b=s):(i=s,b=l),{r:Math.round((i+r)*255),g:Math.round((d+r)*255),b:Math.round((b+r)*255)}}function Oe(e){let o=e.r/255,t=e.g/255,n=e.b/255,a=Math.max(o,t,n),s=Math.min(o,t,n),l=(a+s)/2;if(a===s)return{h:0,s:0,l:l*100};let r=a-s,i=l>.5?r/(2-a-s):r/(a+s),d=0;return a===o?d=((t-n)/r+(t<n?6:0))*60:a===t?d=((n-o)/r+2)*60:d=((o-t)/r+4)*60,{h:d,s:i*100,l:l*100}}var Pe=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),t=this.getAttribute("mode")||"rgb",n=this.getAttribute("value"),a=n?_e(n,this.model):null;this.alpha=a?.alpha??1;let s=a?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=bo(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",r=>{this.internal||(this.internal=!0,this.alpha=r.alpha,this.setAttribute("value",ze(r.rgb,this.model,r.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:r})),this.dispatchEvent(new CustomEvent("color-changed",{detail:ze(r.rgb,this.model,r.alpha)})))}),t&&this.picker.setMode(t)}attributeChangedCallback(o,t,n){if(!(!this.picker||!n||this.internal))if(o==="value"){let a=_e(n,this.model);a&&(this.alpha=a.alpha,this.picker.setColor(a.rgb),this.picker.setAlpha(a.alpha))}else o==="mode"&&this.picker.setMode(n)}get value(){return this.getAttribute("value")||ze({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},$e=class extends Pe{constructor(){super("hex")}},Do=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Do)customElements.get(e)||customElements.define(e,class extends Pe{constructor(){super(o)}});var rt=$e;export{$e as ColorIsBoxElement,Ho as createBoxColorPicker,bo as createColorPicker,rt as default,to as setBoxInvert};
