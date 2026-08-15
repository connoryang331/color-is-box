var Ve={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Ze={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function q(e){let o=e.r/255,r=e.g/255,t=e.b/255,a=Math.max(o,r,t),s=Math.min(o,r,t),d=a-s,i=0;d!==0&&(a===o?i=((r-t)/d+6)%6:a===r?i=(t-o)/d+2:i=(o-r)/d+4,i*=60);let n=a===0?0:d/a*100,f=a*100;return{h:i,s:n,b:f}}function be(e){let o=e.h,r=e.s/100,t=e.b/100,a=t*r,s=a*(1-Math.abs(o/60%2-1)),d=t-a,i,n,f;return o<60?(i=a,n=s,f=0):o<120?(i=s,n=a,f=0):o<180?(i=0,n=a,f=s):o<240?(i=0,n=s,f=a):o<300?(i=s,n=0,f=a):(i=a,n=0,f=s),{r:Math.round((i+d)*255),g:Math.round((n+d)*255),b:Math.round((f+d)*255)}}function Ee(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function He(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function go(e){let o=Ee(e.r/255),r=Ee(e.g/255),t=Ee(e.b/255),a=.4122214708*o+.5363325363*r+.0514459929*t,s=.2119034982*o+.6806995451*r+.1073969566*t,d=.0883024619*o+.2817188376*r+.6299787005*t,i=Math.cbrt(a),n=Math.cbrt(s),f=Math.cbrt(d);return{L:.2104542553*i+.793617785*n-.0040720468*f,a:1.9779984951*i-2.428592205*n+.4505937099*f,b:.0259040371*i+.7827717662*n-.808675766*f}}function mo(e,o,r){let t=e+.3963377774*o+.2158037573*r,a=e-.1055613458*o-.0638541728*r,s=e-.0894841775*o-1.291485548*r,d=t*t*t,i=a*a*a,n=s*s*s,f=4.0767416621*d-3.3077115913*i+.2309699292*n,b=-1.2684380046*d+2.6097574011*i-.3413193965*n,g=-.0041960863*d-.7034186147*i+1.707614701*n;return{r:Math.round(Math.max(0,Math.min(1,He(f)))*255),g:Math.round(Math.max(0,Math.min(1,He(b)))*255),b:Math.round(Math.max(0,Math.min(1,He(g)))*255)}}function me(e){let o=go(e),r=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:r,h:r<1e-4?0:t}}function Ae(e){let o=e.h*(Math.PI/180),r=e.c*Math.cos(o),t=e.c*Math.sin(o);return mo(e.l,r,t)}function po(e,o,r){let t=Ae({l:e,c:o,h:r});if(Je(t))return{l:e,c:o,h:r};let a=0,s=o;for(let d=0;d<20;d++){let i=(a+s)/2;t=Ae({l:e,c:i,h:r}),Je(t)?a=i:s=i}return{l:e,c:a,h:r}}function Je(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function ie(e){let o=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function pe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var Qe=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return be({h:e.x*359,s:e.y*100,b:e.z*100});{let r=e.x,t=e.y*Qe,a=e.z*359,s=po(r,t,a);return Ae(s)}}function xe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let r=q(e);return{x:r.h/359,y:r.s/100,z:r.b/100}}else{let r=me(e);return{x:r.l,y:Math.min(r.c/Qe,1),z:r.h/359}}}function qe(e,o){let r=Ze[o];return[Math.round(e.x*r[0]),Math.round(e.y*r[1]),Math.round(e.z*r[2])]}function eo(e,o,r,t,a,s=!1){let d;e===0?d={x:t,y:o,z:r}:e===1?d={x:o,y:t,z:r}:d={x:o,y:r,z:t};let i=re(d,a);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var to=Math.PI/6,yo=Math.cos(to),vo=Math.sin(to),we=!1;function no(e){we=e}var le=0,ce=0;function Ie(e,o){le=e,ce=o}function Fe(){return{yaw:le,pitch:ce}}function Mo(e){if(le===0&&ce===0)return e;let o=Math.cos(le),r=Math.sin(le),t=Math.cos(ce),a=Math.sin(ce),s=e.x*o+e.z*r,d=e.y,i=-e.x*r+e.z*o,n=d*t-i*a,f=d*a+i*t;return{x:s,y:n,z:f}}function Co(e){if(le===0&&ce===0)return e;let o={x:e.x-.5,y:e.y-.5,z:e.z-.5},r=Math.cos(le),t=Math.sin(le),a=Math.cos(ce),s=Math.sin(ce),d=o.x*r+o.z*t,i=o.y,n=-o.x*t+o.z*r,f=i*a-n*s,b=i*s+n*a;return{x:d+.5,y:f+.5,z:b+.5}}function L(e,o,r){let t=Co(e);return{x:r.x+(t.y-t.x)*yo*o,y:r.y+t.z*o-(t.x+t.y)*vo*o}}function ko(e){let{x:o,y:r,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:r,z:0},{x:0,y:0,z:t},{x:o,y:r,z:0},{x:o,y:0,z:t},{x:0,y:r,z:t},{x:o,y:r,z:t}]}var Z=[{quad:[3,5,7,6],fixedAxis:2,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,2,4,1],fixedAxis:2,uAxis:1,vAxis:0,normal:{x:0,y:0,z:-1}},{quad:[0,3,6,2],fixedAxis:0,uAxis:2,vAxis:1,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Ao=64,ro={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ao(e,o){let r=window.devicePixelRatio||1;e.width=o*r,e.height=o*.84*r,e.style.width=`${o}px`,e.style.height=`${o*.84}px`;let t=e.getContext("2d");return t.scale(r,r),{ctx:t,scale:o*.32,center:{x:o/2,y:o*.4},width:o,height:o*.84}}function io(e,o,r,t,a,s,d=!0,i=null){let{ctx:n,scale:f,center:b,width:g,height:k}=e;n.save(),n.clearRect(0,0,g,k);let A=ko(o),H=A.map(h=>L(h,f,b));if(To(n,f,b,a),n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,zo(n,H,A,o,a,s.viewRotating),n.restore(),d&&!s.viewRotating&&Vo(n,a,f,b),s.viewRotating){let h=L({x:0,y:0,z:0},f,b),v=L({x:1,y:1,z:1},f,b),p=n.createLinearGradient(v.x,v.y,h.x,h.y);p.addColorStop(0,"#ffffff"),p.addColorStop(1,"#000000"),n.save(),n.strokeStyle=p,n.globalAlpha=.18,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(v.x,v.y),n.stroke(),n.restore(),n.save(),n.strokeStyle=p,n.lineWidth=2,n.lineCap="round",n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(v.x,v.y),n.stroke(),n.restore();let T=[{p:{x:0,y:0,z:0},c:"#111111"},{p:{x:1,y:1,z:1},c:"#ffffff"},{p:{x:1,y:0,z:0},c:"#ff0000"},{p:{x:0,y:1,z:0},c:"#00cc00"},{p:{x:0,y:0,z:1},c:"#0000ff"},{p:{x:1,y:1,z:0},c:"#ffff00"},{p:{x:0,y:1,z:1},c:"#00dddd"},{p:{x:1,y:0,z:1},c:"#ff00aa"}];for(let V of T){let y=L(V.p,f,b),w=V.c==="#111111"||V.c==="#ffffff";n.beginPath(),n.arc(y.x,y.y,w?7:4.5,0,Math.PI*2),n.fillStyle=V.c,n.fill(),n.strokeStyle=V.c==="#111111"?"rgba(255,255,255,.8)":"rgba(0,0,0,.45)",n.lineWidth=1.2,n.stroke()}n.beginPath(),n.arc(h.x,h.y,7,0,Math.PI*2),n.fillStyle="#000",n.fill(),n.strokeStyle="rgba(255,255,255,.9)",n.lineWidth=1.5,n.stroke(),n.beginPath(),n.arc(v.x,v.y,7,0,Math.PI*2),n.fillStyle="#fff",n.fill(),n.strokeStyle="rgba(0,0,0,.55)",n.lineWidth=1.2,n.stroke(),n.font="9px monospace",n.fillStyle="rgba(51,65,85,.85)",n.textAlign="left",n.fillText("0",h.x+9,h.y+12),n.fillText("255,255,255",v.x+9,v.y+12)}if(t>=0){let h=re(r,a),v=we?{r:255-h.r,g:255-h.g,b:255-h.b}:h,p=L(r,f,b);i&&i.active&&Ro(n,p,i.rgb,i.alpha),So(n,p,v)}n.restore()}var wo={rgb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],hsb:["rgba(255,100,100,0.4)","rgba(100,255,100,0.4)","rgba(100,150,255,0.4)"],oklch:["rgba(220,220,220,0.4)","rgba(255,180,60,0.4)","rgba(180,120,255,0.4)"]};function To(e,o,r,t){let a=L({x:0,y:0,z:0},o,r),s=[L({x:1,y:0,z:0},o,r),L({x:0,y:1,z:0},o,r),L({x:0,y:0,z:1},o,r)],d=wo[t];e.lineWidth=1.5;for(let i=0;i<s.length;i++)e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(s[i].x,s[i].y),e.strokeStyle=d[i],e.stroke()}function zo(e,o,r,t,a,s){let d=[t.x,t.y,t.z];for(let i=0;i<Z.length;i++){let n=Z[i],f=d[n.fixedAxis],b=d[n.uAxis],g=d[n.vAxis];if(b<.002&&g<.002)continue;let k=Mo(n.normal),A=k.x+k.y+k.z>0,H=n.quad.map(h=>o[h]);A?oo(e,H,n.fixedAxis,f,b,g,a):(e.save(),e.globalAlpha=s?.28:0,oo(e,H,n.fixedAxis,f,b,g,a),e.restore())}}function oo(e,o,r,t,a,s,d){let i=Ao,n=document.createElement("canvas");n.width=i,n.height=i;let f=n.getContext("2d"),b=f.createImageData(i,i),g=b.data;for(let j=0;j<i;j++)for(let oe=0;oe<i;oe++){let _=oe/(i-1)*a,ve=j/(i-1)*s,X=eo(r,_,ve,t,d,we),B=(j*i+oe)*4;g[B]=X.r,g[B+1]=X.g,g[B+2]=X.b,g[B+3]=255}f.putImageData(b,0,0);let k=o[0],A=o[1],H=o[2],h=o[3],v=A.x-k.x,p=A.y-k.y,T=h.x-k.x,V=h.y-k.y;e.save(),e.beginPath(),e.moveTo(k.x,k.y),e.lineTo(A.x,A.y),e.lineTo(H.x,H.y),e.lineTo(h.x,h.y),e.closePath(),e.clip();let y=2/i,w=k.x-v*y-T*y,G=k.y-p*y-V*y,D=1+2*y,F=1+2*y;e.transform(v*D/i,p*D/i,T*F/i,V*F/i,w,G),e.imageSmoothingEnabled=!0,e.drawImage(n,0,0),e.restore()}function Vo(e,o,r,t){let a=Ve[o],s=we?[L({x:0,y:1,z:1},r,t),L({x:1,y:0,z:1},r,t),L({x:1,y:1,z:0},r,t)]:[L({x:1,y:0,z:0},r,t),L({x:0,y:1,z:0},r,t),L({x:0,y:0,z:1},r,t)],d=we?[{x:14,y:6},{x:-14,y:6},{x:0,y:-10}]:[{x:-16,y:-6},{x:16,y:-6},{x:0,y:12}];e.textAlign="center",e.textBaseline="middle",e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=3,e.shadowOffsetX=1,e.shadowOffsetY=1;for(let i=0;i<3;i++){let n=s[i].x+d[i].x,f=s[i].y+d[i].y;e.globalAlpha=.9,e.font='bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.fillStyle="#888888",e.fillText(a[i],n,f)}e.globalAlpha=1,e.restore()}var ee=30,se=13;function Ro(e,o,r,t){let a=(ee+se)/2,s=5,d=Math.floor(o.x/s)*s,i=Math.floor(o.y/s)*s,n=ee*2+s*2,f=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,se,0,Math.PI*2,!0),e.clip();for(let v=-1;v*s<=n;v++)for(let p=-1;p*s<=n;p++)e.fillStyle=(v+p)%2===0?"#ffffff":"#d9d9d9",e.fillRect(d+v*s,i+p*s,s,s);let b="rgba("+r.r+","+r.g+","+r.b+",0)",g="rgba("+r.r+","+r.g+","+r.b+",1)",k=e;if(typeof k.createConicGradient=="function"){let v=k.createConicGradient(-Math.PI/2,o.x,o.y);v.addColorStop(0,b),v.addColorStop(1,g),e.fillStyle=v,e.fillRect(d-ee,i-ee,n,n)}else for(let p=0;p<36;p++){let T=-Math.PI/2+p/36*Math.PI*2,V=-Math.PI/2+(p+1)/36*Math.PI*2,y=(p+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(T)*se,o.y+Math.sin(T)*se),e.arc(o.x,o.y,ee,T,V),e.arc(o.x,o.y,se,V,T,!0),e.closePath(),e.fillStyle="rgba("+r.r+","+r.g+","+r.b+","+y.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ee,0,Math.PI*2),e.arc(o.x,o.y,se,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ee-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let A=f*Math.PI*2,H=o.x+a*Math.sin(A),h=o.y-a*Math.cos(A);e.beginPath(),e.arc(H,h,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function So(e,o,r){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${r.r},${r.g},${r.b})`,e.fill()}function so(e,o,r,t){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return L(a[e],r,t)}function De(){let e={x:0,y:0};return[L({x:1,y:0,z:0},1,e),L({x:0,y:1,z:0},1,e),L({x:0,y:0,z:1},1,e)].map(r=>{let t=Math.sqrt(r.x*r.x+r.y*r.y);return t>0?{x:r.x/t,y:r.y/t}:{x:0,y:0}})}function ye(e,o,r,t,a){let s=Z[e],d=[r.x,r.y,r.z],i=d[s.uAxis],n=d[s.vAxis];if(i<.002||n<.002)return null;let f={x:0,y:0,z:0},b=["x","y","z"];f[b[s.fixedAxis]]=d[s.fixedAxis];let g={...f};g[b[s.uAxis]]=i;let k={...f};k[b[s.vAxis]]=n;let A=L(f,t,a),H=L(g,t,a),h=L(k,t,a),v=H.x-A.x,p=H.y-A.y,T=h.x-A.x,V=h.y-A.y,y=v*V-p*T;if(Math.abs(y)<1e-6)return null;let w=o.x-A.x,G=o.y-A.y,D=(w*V-G*T)/y,F=(G*v-w*p)/y;return D<-.05||D>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}function lo(e,o,r,t,a){let s=Z[e],d=[r.x,r.y,r.z],i=d[s.uAxis],n=d[s.vAxis];if(i<.002||n<.002)return null;let f={x:0,y:0,z:0},b=["x","y","z"];f[b[s.fixedAxis]]=d[s.fixedAxis];let g={...f};g[b[s.uAxis]]=i;let k={...f};k[b[s.vAxis]]=n;let A=L(f,t,a),H=L(g,t,a),h=L(k,t,a),v=H.x-A.x,p=H.y-A.y,T=h.x-A.x,V=h.y-A.y,y=v*V-p*T;if(Math.abs(y)<1e-6)return null;let w=o.x-A.x,G=o.y-A.y,D=(w*V-G*T)/y,F=(G*v-w*p)/y;return{s:Math.max(0,Math.min(1,D)),t:Math.max(0,Math.min(1,F))}}var co=22;function uo(e,o,r,t,a,s,d,i,n,f,b,g,k,A,H){let h={...ro};function v(l){let u=e.getBoundingClientRect();return{x:l.clientX-u.left,y:l.clientY-u.top}}let p=!1,T=!1,V=!1,y=!1,w=null,G=600,D=null;function F(){j(),D=setTimeout(oe,G)}function j(){D!==null&&(clearTimeout(D),D=null)}function oe(){D=null,h.alphaMode=!1,fe(),m(),y=!0,h.viewRotating=!0,w=null,n()}let _=9,ve=1e3,X=null;function B(){J(),X=setTimeout(Me,ve)}function J(){X!==null&&(clearTimeout(X),X=null),j()}function Me(){X=null,h.alphaMode=!0,m(),fe(),n()}function te(l){let u=k();return Math.hypot(l.x-u.x,l.y-u.y)}function Le(l){let u=k();return(Math.atan2(l.x-u.x,-(l.y-u.y))+Math.PI*2)%(Math.PI*2)}function de(l){b(Le(l)/(Math.PI*2)),n()}function Ce(l){let u=te(l);return u>=se-4&&u<=ee+6}function Q(l){let u=o(),z=d(),C=i();for(let M=0;M<3;M++){let E=so(M,u,z,C),I=l.x-E.x,O=l.y-E.y;if(I*I+O*O<=co*co)return M}return-1}function N(l){let u=o(),z=d(),C=i();for(let M=Z.length-1;M>=0;M--){let E=ye(M,l,u,z,C);if(E)return{faceIndex:M,...E}}return null}let K=-1,Y={x:0,y:0},Te=0;function ue(l,u){K=l,Y=u,Te=o()[["x","y","z"][l]],h.draggingAxisHandle=l,e.style.cursor="grabbing",n()}function c(l){if(J(),K<0)return;let u=l.x-Y.x,z=l.y-Y.y,M=De()[K],E=d(),O=(u*M.x+z*M.y)/E,U=Math.max(0,Math.min(1,Te+O)),W=o(),$=["x","y","z"],ge={...W,[$[K]]:U};r(ge);let ke=t(),je=s(),Ye=je>=0?Z[je]:null,Pe={...ke};Ye&&K===Ye.fixedAxis?Pe[$[K]]=U:Pe[$[K]]=Math.min(ke[$[K]],U),a(Pe,s()),n()}function m(){K=-1,h.draggingAxisHandle=-1}let x=-1,R=null,P=null,S=!1;function he(l,u,z,C){x=l,h.draggingFace=l,R=null,P=null,S=!1,C&&(S=!0,P={s:u,t:z}),ze(l,u,z),e.style.cursor="crosshair",n()}function ae(l,u,z){if(J(),x<0)return;let C=o(),M=d(),E=i(),I=ye(x,l,C,M,E),O=x;if(!I&&!z){for(let $=Z.length-1;$>=0;$--)if($!==x&&(I=ye($,l,C,M,E),I)){O=$;break}}if(!I&&z&&(I=lo(x,l,C,M,E),O=x),!I){n();return}O!==x&&(x=O,h.draggingFace=O,R=null,S=!1,P=null);let{s:U,t:W}=I;if(u&&P){if(S){let $=Math.abs(U-P.s),ge=Math.abs(W-P.t),ke=.02;($>ke||ge>ke)&&(R=$>=ge?"u":"v",S=!1)}R==="u"?W=P.t:R==="v"&&(U=P.s)}else u||(R=null,S=!1,P=null);ze(O,U,W),n()}function ze(l,u,z){let C=Z[l],M=o(),E=["x","y","z"],I={...t()};I[E[C.uAxis]]=u*M[E[C.uAxis]],I[E[C.vAxis]]=z*M[E[C.vAxis]],I[E[C.fixedAxis]]=M[E[C.fixedAxis]],a(I,l)}function fe(){x=-1,h.draggingFace=-1,R=null,S=!1,P=null}function ne(l){T=!0;let u=v(l);if(f()){if(h.alphaMode){if(te(u)<=_){h.alphaMode=!1,n();return}if(Ce(u)){l.preventDefault(),p=!0,de(u);return}h.alphaMode=!1,n();return}te(u)<=_&&B()}let z=Q(u);if(z>=0){l.preventDefault(),ue(z,u);return}let C=N(u);if(C){l.preventDefault(),he(C.faceIndex,C.s,C.t,l.shiftKey),h.alphaMode||F();return}let M=i();Math.hypot(u.x-M.x,u.y-M.y)>d()+20&&(l.preventDefault(),y=!0,w=u,h.viewRotating=!0,n())}function _e(l){let u=v(l);if(p){l.preventDefault(),de(u);return}if(y){if(l.preventDefault(),!w){w=u;return}let I=u.x-w.x,O=u.y-w.y,U=Fe();Ie(Math.max(-60,Math.min(60,U.yaw+I*.12)),Math.max(-60,Math.min(60,U.pitch+O*.12))),I!==0&&A(Math.max(0,Math.min(1,H()+I*.002))),w=u,n();return}if(T&&h.alphaMode&&Ce(u)){l.preventDefault(),p=!0,de(u);return}if(K>=0){l.preventDefault(),c(u);return}if(x>=0){l.preventDefault(),ae(u,l.shiftKey,l.altKey);return}let z=Q(u),C=N(u),M=z,E=z>=0?-1:C?C.faceIndex:-1;(M!==h.hoveredAxisHandle||E!==h.hoveredFace)&&(h.hoveredAxisHandle=M,h.hoveredFace=E,e.style.cursor=M>=0?"grab":E>=0?"crosshair":"default",n())}function Ke(l){J(),T=!1,p=!1,y&&(y=!1,h.viewRotating=!1,w=null,n());let u=K>=0||x>=0;m(),fe(),u&&(h.hoveredAxisHandle=-1,h.hoveredFace=-1,e.style.cursor="default",n())}function Ue(l){if(l.touches.length!==1)return;V=!0;let u=v(l.touches[0]);if(f()){if(h.alphaMode){if(te(u)<=_){h.alphaMode=!1,n();return}if(Ce(u)){l.preventDefault(),p=!0,de(u);return}h.alphaMode=!1,n();return}te(u)<=_&&B()}let z=Q(u);if(z>=0){l.preventDefault(),ue(z,u);return}let C=N(u);if(C){l.preventDefault(),he(C.faceIndex,C.s,C.t,!1),h.alphaMode||F();return}let M=i();Math.hypot(u.x-M.x,u.y-M.y)>d()+20&&(l.preventDefault(),y=!0,w=u,h.viewRotating=!0,n())}function Xe(l){if(l.touches.length!==1)return;let u=v(l.touches[0]);if(p)l.preventDefault(),de(u);else if(V&&h.alphaMode&&Ce(u))l.preventDefault(),p=!0,de(u);else if(K>=0)l.preventDefault(),c(u);else if(y){if(l.preventDefault(),!w){w=u;return}let z=u.x-w.x,C=u.y-w.y,M=Fe();Ie(Math.max(-60,Math.min(60,M.yaw+z*.12)),Math.max(-60,Math.min(60,M.pitch+C*.12))),z!==0&&A(Math.max(0,Math.min(1,H()+z*.002))),w=u,n()}else x>=0&&(l.preventDefault(),ae(u,!1,!1))}function Ne(l){J(),V=!1,p=!1,y&&(y=!1,h.viewRotating=!1,w=null,n()),m(),fe(),n()}function We(l){if(h.alphaMode){if(l.key==="Escape"){h.alphaMode=!1,n();return}if(l.key==="ArrowUp"||l.key==="ArrowRight"){l.preventDefault(),b(Math.min(1,g()+(l.shiftKey?.08:.02))),n();return}if(l.key==="ArrowDown"||l.key==="ArrowLeft"){l.preventDefault(),b(Math.max(0,g()-(l.shiftKey?.08:.02))),n();return}}let u=l.shiftKey?.04:.004,z=t(),C=o(),M=De(),E=0,I=0;switch(l.key){case"ArrowRight":E=1;break;case"ArrowLeft":E=-1;break;case"ArrowUp":I=-1;break;case"ArrowDown":I=1;break;default:return}l.preventDefault();let O={...z},U=["x","y","z"];for(let W=0;W<3;W++){let $=E*M[W].x+I*M[W].y;if(Math.abs($)>.3){let ge=z[U[W]]+u*Math.sign($);O[U[W]]=Math.max(0,Math.min(C[U[W]],ge))}}a(O,s()),n()}e.addEventListener("mousedown",ne),window.addEventListener("mousemove",_e),window.addEventListener("mouseup",Ke),e.addEventListener("touchstart",Ue,{passive:!1}),e.addEventListener("touchmove",Xe,{passive:!1}),e.addEventListener("touchend",Ne),e.addEventListener("keydown",We),e.setAttribute("tabindex","0");function xo(){J(),e.removeEventListener("mousedown",ne),window.removeEventListener("mousemove",_e),window.removeEventListener("mouseup",Ke),e.removeEventListener("touchstart",Ue),e.removeEventListener("touchmove",Xe),e.removeEventListener("touchend",Ne),e.removeEventListener("keydown",We)}return{state:h,destroy:xo}}var ho=`.box-picker {\r
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
`;var bo=Eo,fo=!1;function Po(){if(fo||typeof document>"u")return;fo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=ho,document.head.appendChild(e)}function Eo(e,o={}){let r=o.size??300,t=o.controls??!0,a=o.showInputs??!1,s=o.showModeToggle??!1,d=o.showCorners??!1,i={mode:()=>n,switchMode:c=>oe(c),onHexInput:c=>{let m=pe(c);m?(g=xe(F?{r:255-m.r,g:255-m.g,b:255-m.b}:m,n),b={x:Math.max(b.x,g.x),y:Math.max(b.y,g.y),z:Math.max(b.z,g.z)},Y(),N(),B()):N()},onChannelInput:(c,m,x)=>{let R=Math.max(0,Math.min(x,m)),P=["x","y","z"],S=R/x;if(F){let he={...g,[P[c]]:S},ae=re(he,n);g=xe({r:255-ae.r,g:255-ae.g,b:255-ae.b},n)}else g={...g,[P[c]]:S};S>b[P[c]]&&(b={...b,[P[c]]:S}),Y(),N(),B()},getRgbForCopy:()=>re(g,n),onRandom:c=>ue(c),onReset:()=>ue({r:0,g:0,b:0})},n=o.mode??"rgb",f=o.initialColor?xe(o.initialColor,n):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},g={...f},k=0,A=()=>o.alpha!==void 0,H=Math.max(0,Math.min(1,o.alpha??1));function h(c){let m=Math.max(0,Math.min(1,c));m!==H&&(H=m,Y(),N(),B())}function v(c){let m=Q(),x=q(m);x.s=Math.max(0,Math.min(100,c*100));let R=be(x);ue(F?{r:255-R.r,g:255-R.g,b:255-R.b}:R)}let p=new Set;Po();let T=document.createElement("div");T.className="box-picker";let V=document.createElement("canvas");V.style.cursor="grab",T.appendChild(V);let y=ao(V,r),w=null,G=document.createElement("div");G.className="box-picker-controls",w=document.createElement("div"),w.className="box-picker-swatch",G.appendChild(w),T.appendChild(G),(a||s||d)&&import("./controls-VBFXR3DH.js").then(c=>{c.createControls(G,i,{showInputs:a,showModeToggle:s,showCorners:d})}).catch(()=>{}),e.appendChild(T);let D=uo(V,()=>b,c=>{b=c},()=>g,(c,m)=>{g=c,k=m,Y(),N()},()=>k,()=>y.scale,()=>y.center,B,A,h,()=>H,()=>L(g,y.scale,y.center),v,()=>q(Q()).s/100),F=!1,j=!0;V.addEventListener("mouseenter",()=>{j=!0,B()}),V.addEventListener("mouseleave",()=>{j=!1,B()}),V.addEventListener("dblclick",()=>{F=!F,no(F),Y(),N(),B()});function oe(c){if(c===n)return;let m=re(g,n),x={...g},R={...b};n=c;let P=xe(m,n),S={x:1,y:1,z:1};g=P,b=S,ve(x,P,R,S,300),N()}let _=null;function ve(c,m,x,R,P){_!==null&&cancelAnimationFrame(_);let S=performance.now();function he(ae){let ze=ae-S,fe=Math.min(1,ze/P),ne=1-Math.pow(1-fe,3);g={x:c.x+(m.x-c.x)*ne,y:c.y+(m.y-c.y)*ne,z:c.z+(m.z-c.z)*ne},b={x:x.x+(R.x-x.x)*ne,y:x.y+(R.y-x.y)*ne,z:x.z+(R.z-x.z)*ne},J(),Y(),fe<1?_=requestAnimationFrame(he):_=null}_=requestAnimationFrame(he)}let X=!1;function B(){X||(X=!0,requestAnimationFrame(()=>{X=!1,J()}))}function J(){io(y,b,g,k,n,D.state,j,{active:D.state.alphaMode,alpha:H,rgb:Q()})}function Me(c,m,x){return Math.round(c+(m-c)*x)}function te(c,m){let x=m>0?255:0,R=Math.abs(m);return ie({r:Me(c.r,x,R),g:Me(c.g,x,R),b:Me(c.b,x,R)})}function Le(c,m){let x=pe(m)||{r:128,g:128,b:128},R=te(x,.35),P=te(x,0),S=te(x,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${R}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${P}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function de(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function Ce(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function Q(){let c=re(g,n);return F?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function N(){if(!t)return;let c=Q(),m=ie(c);w&&Le(w,m);let x=T.querySelector(".box-picker-hex");x&&(x.value=m),K(),T._updateModeButtons&&T._updateModeButtons()}function K(){if(!t)return;let c=Ve[n],m=F?xe(Q(),n):g,x=qe(m,n),R=T.querySelectorAll(".box-picker-channel input"),P=T.querySelectorAll(".box-picker-channel label");for(let S=0;S<R.length;S++)P[S].textContent=c[S],P[S].style.color="",P[S].style.textShadow="none",R[S].value=String(x[S])}function Y(){let c=Q(),m={rgb:c,hsb:q(c),oklch:me(c),hex:ie(c),alpha:H};for(let x of p)x(m)}function Te(){let c=re(g,n);return{rgb:c,hsb:q(c),oklch:me(c),hex:ie(c)}}N(),J();let ue=c=>{g=xe(c,n),b={x:Math.max(b.x,g.x),y:Math.max(b.y,g.y),z:Math.max(b.z,g.z)};let m=L(g,y.scale,y.center);k=-1;for(let x=Z.length-1;x>=0;x--)if(ye(x,m,b,y.scale,y.center)){k=x;break}Y(),N(),B()};return{getColor:Te,getMode:()=>n,setColor:ue,setAlpha:h,getAlpha:()=>H,setMode(c){oe(c)},on(c,m){p.add(m)},off(c,m){p.delete(m)},destroy(){D.destroy(),_!==null&&cancelAnimationFrame(_),e.removeChild(T)}}}function $e(e,o){if(!e)return null;let r=e.trim();try{if(o==="hex")return{rgb:pe(r),alpha:1};if(o==="hex-alpha"){let t=r.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let a=pe(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:a,alpha:s}}if(o==="rgb"){let t=r.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=r.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Be(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Be(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?be({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:be({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=r.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Ae({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=r.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=r.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Be(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=r.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:be({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Re(e,o,r=1){if(o==="hex")return ie(e);if(o==="hex-alpha")return ie(e)+(r<1?Math.round(r*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+r.toFixed(3)}`;if(o==="hsl"){let a=Oe(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%`}if(o==="hsla"){let a=Oe(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+r.toFixed(3)}`}if(o==="hsv"){let a=q(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%`}if(o==="hsva"){let a=q(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+r.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+r.toFixed(3)})`;if(o==="hsla-string"){let a=Oe(e);return`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+r.toFixed(3)})`}if(o==="hsva-string"){let a=q(e);return`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+r.toFixed(3)})`}let t=me(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Be(e,o,r){let t=o/100,a=r/100,s=(1-Math.abs(2*a-1))*t,d=s*(1-Math.abs(e/60%2-1)),i=a-s/2,n=0,f=0,b=0;return e<60?(n=s,f=d):e<120?(n=d,f=s):e<180?(f=s,b=d):e<240?(f=d,b=s):e<300?(n=d,b=s):(n=s,b=d),{r:Math.round((n+i)*255),g:Math.round((f+i)*255),b:Math.round((b+i)*255)}}function Oe(e){let o=e.r/255,r=e.g/255,t=e.b/255,a=Math.max(o,r,t),s=Math.min(o,r,t),d=(a+s)/2;if(a===s)return{h:0,s:0,l:d*100};let i=a-s,n=d>.5?i/(2-a-s):i/(a+s),f=0;return a===o?f=((r-t)/i+(r<t?6:0))*60:a===r?f=((t-o)/i+2)*60:f=((o-r)/i+4)*60,{h:f,s:n*100,l:d*100}}var Se=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),r=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),a=t?$e(t,this.model):null;this.alpha=a?.alpha??1;let s=a?.rgb??{r:255,g:255,b:255},d=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=bo(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...d.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",Re(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Re(i.rgb,this.model,i.alpha)})))}),r&&this.picker.setMode(r)}attributeChangedCallback(o,r,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let a=$e(t,this.model);a&&(this.alpha=a.alpha,this.picker.setColor(a.rgb),this.picker.setAlpha(a.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Re({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Ge=class extends Se{constructor(){super("hex")}},Ho=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of Ho)customElements.get(e)||customElements.define(e,class extends Se{constructor(){super(o)}});var tt=Ge;export{Ge as ColorIsBoxElement,Eo as createBoxColorPicker,bo as createColorPicker,tt as default,no as setBoxInvert};
