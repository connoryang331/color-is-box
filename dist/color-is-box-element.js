var Ge={showVisible:!0,showHidden:!1,width:1.5,dashed:!1,color:"#ffffff",opacity:.45},Se={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,angleGuides:!0,yawArc:!0,pitchArc:!0},it={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},at={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function oe(e){let t=e.r/255,n=e.g/255,o=e.b/255,i=Math.max(t,n,o),a=Math.min(t,n,o),c=i-a,s=0;c!==0&&(i===t?s=((n-o)/c+6)%6:i===n?s=(o-t)/c+2:s=(t-n)/c+4,s*=60);let r=i===0?0:c/i*100,d=i*100;return{h:s,s:r,b:d}}function be(e){let t=e.h,n=e.s/100,o=e.b/100,i=o*n,a=i*(1-Math.abs(t/60%2-1)),c=o-i,s,r,d;return t<60?(s=i,r=a,d=0):t<120?(s=a,r=i,d=0):t<180?(s=0,r=i,d=a):t<240?(s=0,r=a,d=i):t<300?(s=a,r=0,d=i):(s=i,r=0,d=a),{r:Math.round((s+c)*255),g:Math.round((r+c)*255),b:Math.round((d+c)*255)}}function He(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Be(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Xt(e){let t=He(e.r/255),n=He(e.g/255),o=He(e.b/255),i=.4122214708*t+.5363325363*n+.0514459929*o,a=.2119034982*t+.6806995451*n+.1073969566*o,c=.0883024619*t+.2817188376*n+.6299787005*o,s=Math.cbrt(i),r=Math.cbrt(a),d=Math.cbrt(c);return{L:.2104542553*s+.793617785*r-.0040720468*d,a:1.9779984951*s-2.428592205*r+.4505937099*d,b:.0259040371*s+.7827717662*r-.808675766*d}}function Ot(e,t,n){let o=e+.3963377774*t+.2158037573*n,i=e-.1055613458*t-.0638541728*n,a=e-.0894841775*t-1.291485548*n,c=o*o*o,s=i*i*i,r=a*a*a,d=4.0767416621*c-3.3077115913*s+.2309699292*r,h=-1.2684380046*c+2.6097574011*s-.3413193965*r,b=-.0041960863*c-.7034186147*s+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Be(d)))*255),g:Math.round(Math.max(0,Math.min(1,Be(h)))*255),b:Math.round(Math.max(0,Math.min(1,Be(b)))*255)}}function ge(e){let t=Xt(e),n=Math.sqrt(t.a*t.a+t.b*t.b),o=Math.atan2(t.b,t.a)*(180/Math.PI);return o<0&&(o+=360),{l:t.L,c:n,h:n<1e-4?0:o}}function Ve(e){let t=e.h*(Math.PI/180),n=e.c*Math.cos(t),o=e.c*Math.sin(t);return Ot(e.l,n,o)}function $t(e,t,n){let o=Ve({l:e,c:t,h:n});if(st(o))return{l:e,c:t,h:n};let i=0,a=t;for(let c=0;c<20;c++){let s=(i+a)/2;o=Ve({l:e,c:s,h:n}),st(o)?i=s:a=s}return{l:e,c:i,h:n}}function st(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function de(e){let t=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${t(e.r)}${t(e.g)}${t(e.b)}`}function pe(e){let t=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}var lt=.4;function se(e,t){if(t==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(t==="hsb")return be({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,o=e.y*lt,i=e.z*359,a=$t(n,o,i);return Ve(a)}}function he(e,t){if(t==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(t==="hsb"){let n=oe(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ge(e);return{x:n.l,y:Math.min(n.c/lt,1),z:n.h/359}}}function ct(e,t){let n=at[t];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function dt(e,t,n,o,i,a=!1){let c;e===0?c={x:o,y:t,z:n}:e===1?c={x:t,y:o,z:n}:c={x:t,y:n,z:o};let s=se(c,i);return a?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var ut={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},bt={sizeX:1,sizeY:1,sizeZ:1};function _e(e,t,n){let o=(e.x-.5)*n.sizeX,i=(e.y-.5)*n.sizeY,a=(e.z-.5)*n.sizeZ,c=Math.cos(t.rotZRad),s=Math.sin(t.rotZRad),r=o*c-i*s,d=o*s+i*c,h=a,b=Math.cos(t.rotYRad),M=Math.sin(t.rotYRad),C=r*b+h*M,w=d,p=-r*M+h*b,R=Math.cos(t.rotXRad),g=Math.sin(t.rotXRad),x=C,k=p*R-w*g,A=p*g+w*R;return{x,y:k,z:A}}function Le(e,t,n,o,i){let a=_e(e,o,i);return{x:n.x+a.x*t*1.6*o.zoom,y:n.y-a.y*t*1.6*o.zoom}}var xe=["#ef4444","#22c55e","#3b82f6"];function ht(e,t,n,o,i,a){let c=g=>Le(g,t,n,o,i),s=c({x:0,y:0,z:0});e.save();let r=1.28,d=[{p:{x:r,y:0,z:0},name:"X",color:xe[0],visible:a.vertexX},{p:{x:0,y:r,z:0},name:"Y",color:xe[1],visible:a.vertexY},{p:{x:0,y:0,z:r},name:"Z",color:xe[2],visible:a.vertexZ}];for(let g=0;g<d.length;g++){if(!d[g].visible)continue;let x=c(d[g].p),k=d[g].color;e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(x.x,x.y),e.strokeStyle=k,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(x.x,x.y,3.5,0,Math.PI*2),e.fillStyle=k,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let A=x.x-s.x,T=x.y-s.y,y=Math.hypot(A,T)||1,P=12,I=x.x+A/y*P,U=x.y+T/y*P;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=k,e.fillText(d[g].name,I,U)}(a.vertexX||a.vertexY||a.vertexZ)&&(e.beginPath(),e.arc(s.x,s.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let h=c({x:.5,y:.5,z:.5}),b=.35,M=[{from:{x:-b,y:.5,z:.5},to:{x:1+b,y:.5,z:.5},color:xe[0],name:"Cx",visible:a.centerX},{from:{x:.5,y:-b,z:.5},to:{x:.5,y:1+b,z:.5},color:xe[1],name:"Cy",visible:a.centerY},{from:{x:.5,y:.5,z:-b},to:{x:.5,y:.5,z:1+b},color:xe[2],name:"Cz",visible:a.centerZ}],C=!1;for(let g=0;g<M.length;g++){if(!M[g].visible)continue;C=!0;let x=c(M[g].from),k=c(M[g].to);e.beginPath(),e.moveTo(x.x,x.y),e.lineTo(k.x,k.y),e.strokeStyle=M[g].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(x.x,x.y,3,0,Math.PI*2),e.arc(k.x,k.y,3,0,Math.PI*2),e.fillStyle=M[g].color,e.fill()}C&&(e.beginPath(),e.arc(h.x,h.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let w=a.angleGuides!==void 0?a.angleGuides:a.yawArc||a.pitchArc||!1,p=Math.round(o.rotZRad*180/Math.PI*10)/10,R=Math.round(o.rotXRad*180/Math.PI*10)/10;if(w){e.beginPath();let g=36;for(let k=0;k<=g;k++){let A=k/g*Math.PI*2,T={x:.5+Math.cos(A)*.75,y:.5+Math.sin(A)*.75,z:0},y=c(T);k===0?e.moveTo(y.x,y.y):e.lineTo(y.x,y.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.beginPath();let x=20;for(let k=0;k<=x;k++){let A=-Math.PI/2+k/x*Math.PI,T={x:.5+Math.cos(A)*.75,y:.5,z:.5+Math.sin(A)*.75},y=c(T);k===0?e.moveTo(y.x,y.y):e.lineTo(y.x,y.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${p.toFixed(1)}\xB0`,12,n.y*2-24),e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${R.toFixed(1)}\xB0`,12,n.y*2-10)}e.restore()}var Oe=!1;function ft(e){Oe=e}var G={...ut},le={...bt};function Ee(e,t){G.rotZRad=-30*(Math.PI/180)+e,G.rotXRad=20*(Math.PI/180)+t}function $e(){return{yaw:G.rotZRad- -30*(Math.PI/180),pitch:G.rotXRad-20*(Math.PI/180)}}function mt(){G.rotXRad=20*(Math.PI/180),G.rotYRad=0,G.rotZRad=-30*(Math.PI/180)}function gt(){return{rotXDeg:Math.round(G.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(G.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(G.rotZRad*180/Math.PI*10)/10}}function pt(e,t,n){G.rotXRad=e*Math.PI/180,G.rotYRad=t*Math.PI/180,G.rotZRad=n*Math.PI/180}function xt(){return{yawDeg:Math.round(G.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(G.rotXRad*180/Math.PI*10)/10}}function yt(e,t){G.rotZRad=e*Math.PI/180,G.rotXRad=t*Math.PI/180}function vt(e){G.zoom=Math.max(.1,Math.min(3,e))}function Mt(){return G.zoom}function Ct(e,t,n){le.sizeX=Math.max(.1,Math.min(2.5,e)),le.sizeY=Math.max(.1,Math.min(2.5,t)),le.sizeZ=Math.max(.1,Math.min(2.5,n))}function kt(){return{sizeX:le.sizeX,sizeY:le.sizeY,sizeZ:le.sizeZ}}function O(e,t,n){return Le(e,t,n,G,le)}function Xe(e){return _e(e,G,le)}function Zt(e){let{x:t,y:n,z:o}=e;return[{x:0,y:0,z:0},{x:t,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:o},{x:t,y:n,z:0},{x:t,y:0,z:o},{x:0,y:n,z:o},{x:t,y:n,z:o}]}var q=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Yt=64,At={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function wt(e,t){let n=window.devicePixelRatio||1;e.width=t*n,e.height=t*1*n,e.style.width=`${t}px`,e.style.height=`${t*1}px`;let o=e.getContext("2d");return o.scale(n,n),{ctx:o,scale:t*.26,center:{x:t/2,y:t*.5},width:t,height:t*1}}var De={...Ge};function Rt(e){De={...De,...e}}function Vt(){return{...De}}var Nt=[[0,1],[1,4],[4,2],[2,0],[3,5],[5,7],[7,6],[6,3],[0,3],[1,5],[4,7],[2,6]];function Ut(e,t,n,o){if(!(!o.showVisible&&!o.showHidden)){e.save(),e.lineWidth=o.width,o.dashed?e.setLineDash([4,3]):e.setLineDash([]);for(let[i,a]of Nt){let c=t[i],s=t[a],r={x:(n[i].x+n[a].x)*.5,y:(n[i].y+n[a].y)*.5,z:(n[i].z+n[a].z)*.5},h=Xe(r).z<=0;h&&o.showVisible?(e.strokeStyle=o.color,e.globalAlpha=o.opacity,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(s.x,s.y),e.stroke()):!h&&o.showHidden&&(e.strokeStyle=o.color,e.globalAlpha=o.opacity*.45,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(s.x,s.y),e.stroke())}e.restore()}}function Et(e,t,n,o,i,a,c=!0,s=null){let{ctx:r,scale:d,center:h,width:b,height:M}=e;r.save(),r.clearRect(0,0,b,M);let C=Zt(t),w=C.map(R=>O(R,d,h));if(r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,Wt(r,w,C,t,i,a.viewRotating),r.restore(),Ut(r,w,C,De),ht(r,d,h,G,le,typeof c=="boolean"?c?Se:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:c),o>=0){let R=se(n,i),g=Oe?{r:255-R.r,g:255-R.g,b:255-R.b}:R,x=O(n,d,h);s&&s.active&&Kt(r,x,s.rgb,s.alpha),Qt(r,x,g)}r.restore()}function Wt(e,t,n,o,i,a){let c=[o.x,o.y,o.z],s=[];for(let r=0;r<q.length;r++){let d=q[r],h=d.fixedValue*c[d.fixedAxis],b=c[d.uAxis],M=c[d.vAxis];if(b<.002&&M<.002)continue;let C={x:0,y:0,z:0},w=["x","y","z"];C[w[d.fixedAxis]]=h,C[w[d.uAxis]]=b*.5,C[w[d.vAxis]]=M*.5;let p=Xe(C),R={x:C.x+d.normal.x*.1,y:C.y+d.normal.y*.1,z:C.z+d.normal.z*.1};if(Xe(R).z-p.z<0){let k=d.quad.map(A=>t[A]);s.push({face:d,corners:k,fixedVal:h,uMax:b,vMax:M,depth:p.z})}}s.sort((r,d)=>d.depth-r.depth);for(let r of s)jt(e,r.corners,r.face.fixedAxis,r.fixedVal,r.uMax,r.vMax,i)}function jt(e,t,n,o,i,a,c){let s=Yt,r=document.createElement("canvas");r.width=s,r.height=s;let d=r.getContext("2d"),h=d.createImageData(s,s),b=h.data;for(let U=0;U<s;U++)for(let Q=0;Q<s;Q++){let W=Q/(s-1)*i,re=U/(s-1)*a,Z=dt(n,W,re,o,c,Oe),j=(U*s+Q)*4;b[j]=Z.r,b[j+1]=Z.g,b[j+2]=Z.b,b[j+3]=255}d.putImageData(h,0,0);let M=t[0],C=t[1],w=t[2],p=t[3],R=C.x-M.x,g=C.y-M.y,x=p.x-M.x,k=p.y-M.y;e.save(),e.beginPath(),e.moveTo(M.x,M.y),e.lineTo(C.x,C.y),e.lineTo(w.x,w.y),e.lineTo(p.x,p.y),e.closePath(),e.clip();let A=2/s,T=M.x-R*A-x*A,y=M.y-g*A-k*A,P=1+2*A,I=1+2*A;e.transform(R*P/s,g*P/s,x*I/s,k*I/s,T,y),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}var ne=30,ue=13;function Kt(e,t,n,o){let i=(ne+ue)/2,a=5,c=Math.floor(t.x/a)*a,s=Math.floor(t.y/a)*a,r=ne*2+a*2,d=Math.max(0,Math.min(1,o));e.save(),e.beginPath(),e.arc(t.x,t.y,ne,0,Math.PI*2),e.arc(t.x,t.y,ue,0,Math.PI*2,!0),e.clip();for(let R=-1;R*a<=r;R++)for(let g=-1;g*a<=r;g++)e.fillStyle=(R+g)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+R*a,s+g*a,a,a);let h="rgba("+n.r+","+n.g+","+n.b+",0)",b="rgba("+n.r+","+n.g+","+n.b+",1)",M=e;if(typeof M.createConicGradient=="function"){let R=M.createConicGradient(-Math.PI/2,t.x,t.y);R.addColorStop(0,h),R.addColorStop(1,b),e.fillStyle=R,e.fillRect(c-ne,s-ne,r,r)}else for(let g=0;g<36;g++){let x=-Math.PI/2+g/36*Math.PI*2,k=-Math.PI/2+(g+1)/36*Math.PI*2,A=(g+.5)/36;e.beginPath(),e.moveTo(t.x+Math.cos(x)*ue,t.y+Math.sin(x)*ue),e.arc(t.x,t.y,ne,x,k),e.arc(t.x,t.y,ue,k,x,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+A.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(t.x,t.y,ne,0,Math.PI*2),e.arc(t.x,t.y,ue,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(t.x,t.y-ne-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let C=d*Math.PI*2,w=t.x+i*Math.sin(C),p=t.y-i*Math.cos(C);e.beginPath(),e.arc(w,p,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Qt(e,t,n){e.beginPath(),e.arc(t.x,t.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(t.x,t.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Tt(e,t,n,o){let i=[{x:t.x,y:0,z:0},{x:0,y:t.y,z:0},{x:0,y:0,z:t.z}];return O(i[e],n,o)}function Ze(){let e={x:0,y:0};return[O({x:1,y:0,z:0},1,e),O({x:0,y:1,z:0},1,e),O({x:0,y:0,z:1},1,e)].map(n=>{let o=Math.sqrt(n.x*n.x+n.y*n.y);return o>0?{x:n.x/o,y:n.y/o}:{x:0,y:0}})}function ye(e,t,n,o,i){let a=q[e],c=[n.x,n.y,n.z],s=c[a.uAxis],r=c[a.vAxis];if(s<.002||r<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[a.fixedAxis]]=a.fixedValue*c[a.fixedAxis];let b={...d};b[h[a.uAxis]]=s;let M={...d};M[h[a.vAxis]]=r;let C=O(d,o,i),w=O(b,o,i),p=O(M,o,i),R=w.x-C.x,g=w.y-C.y,x=p.x-C.x,k=p.y-C.y,A=R*k-g*x;if(Math.abs(A)<1e-6)return null;let T=t.x-C.x,y=t.y-C.y,P=(T*k-y*x)/A,I=(y*R-T*g)/A;return P<-.05||P>1.05||I<-.05||I>1.05?null:{s:Math.max(0,Math.min(1,P)),t:Math.max(0,Math.min(1,I))}}function zt(e,t,n,o,i){let a=q[e],c=[n.x,n.y,n.z],s=c[a.uAxis],r=c[a.vAxis];if(s<.002||r<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[a.fixedAxis]]=a.fixedValue*c[a.fixedAxis];let b={...d};b[h[a.uAxis]]=s;let M={...d};M[h[a.vAxis]]=r;let C=O(d,o,i),w=O(b,o,i),p=O(M,o,i),R=w.x-C.x,g=w.y-C.y,x=p.x-C.x,k=p.y-C.y,A=R*k-g*x;if(Math.abs(A)<1e-6)return null;let T=t.x-C.x,y=t.y-C.y,P=(T*k-y*x)/A,I=(y*R-T*g)/A;return{s:Math.max(0,Math.min(1,P)),t:Math.max(0,Math.min(1,I))}}var St=22;function Lt(e,t,n,o,i,a,c,s,r,d,h,b,M,C,w){let p={...At};function R(u){let m=e.getBoundingClientRect();return{x:u.clientX-m.left,y:u.clientY-m.top}}let g=!1,x=!1,k=!1,A=!1,T=!1,y=null,P=600,I=null;function U(){Q(),I=setTimeout(W,P)}function Q(){I!==null&&(clearTimeout(I),I=null)}function W(){I=null,p.alphaMode=!1,Te(),l(),T=!0,p.viewRotating=!0,y=null,r()}let re=14,Z=800,j=null;function fe(){L(),j=setTimeout(ve,Z)}function L(){j!==null&&(clearTimeout(j),j=null),Q()}function ve(){j=null,p.alphaMode=!0,l(),Te(),x=!1,r()}function ie(u){let m=M();return Math.hypot(u.x-m.x,u.y-m.y)}function Me(u){let m=M();return(Math.atan2(u.x-m.x,-(u.y-m.y))+Math.PI*2)%(Math.PI*2)}function ce(u){h(Me(u)/(Math.PI*2)),r()}function Ce(u){let m=ie(u);return m>=ue-4&&m<=ne+6}function Bt(u){let m=t(),V=c(),S=s();for(let z=0;z<3;z++){let F=Tt(z,m,V,S),B=u.x-F.x,$=u.y-F.y;if(B*B+$*$<=St*St)return z}return-1}function ae(u){let m=t(),V=c(),S=s();for(let z=q.length-1;z>=0;z--){let F=ye(z,u,m,V,S);if(F)return{faceIndex:z,...F}}return null}let _=-1,ke={x:0,y:0},ee=0;function je(u,m){_=u,ke=m,ee=t()[["x","y","z"][u]],p.draggingAxisHandle=u,e.style.cursor="grabbing",r()}function Ae(u){if(L(),_<0)return;let m=u.x-ke.x,V=u.y-ke.y,z=Ze()[_],F=c(),$=(m*z.x+V*z.y)/F,J=Math.max(0,Math.min(1,ee+$)),N=t(),X=["x","y","z"],me={...N,[X[_]]:J};n(me);let Re=o(),nt=a(),rt=nt>=0?q[nt]:null,Fe={...Re};rt&&_===rt.fixedAxis?Fe[X[_]]=J:Fe[X[_]]=Math.min(Re[X[_]],J),i(Fe,a()),r()}function l(){_=-1,p.draggingAxisHandle=-1}let f=-1,v=null,E=null,D=!1;function H(u,m,V,S){f=u,p.draggingFace=u,v=null,E=null,D=!1,S&&(D=!0,E={s:m,t:V}),te(u,m,V),e.style.cursor="crosshair",r()}function we(u,m,V){if(L(),f<0)return;let S=t(),z=c(),F=s(),B=ye(f,u,S,z,F),$=f;if(!B&&!V){for(let X=q.length-1;X>=0;X--)if(X!==f&&(B=ye(X,u,S,z,F),B)){$=X;break}}if(!B&&V&&(B=zt(f,u,S,z,F),$=f),!B){r();return}$!==f&&(f=$,p.draggingFace=$,v=null,D=!1,E=null);let{s:J,t:N}=B;if(m&&E){if(D){let X=Math.abs(J-E.s),me=Math.abs(N-E.t),Re=.02;(X>Re||me>Re)&&(v=X>=me?"u":"v",D=!1)}v==="u"?N=E.t:v==="v"&&(J=E.s)}else m||(v=null,D=!1,E=null);te($,J,N),r()}function te(u,m,V){let S=q[u],z=t(),F=["x","y","z"],B={...o()};B[F[S.uAxis]]=m*z[F[S.uAxis]],B[F[S.vAxis]]=V*z[F[S.vAxis]],B[F[S.fixedAxis]]=S.fixedValue*z[F[S.fixedAxis]],i(B,u)}function Te(){f=-1,p.draggingFace=-1,v=null,D=!1,E=null}let ze=null,Y=!1,K=null;function Ke(u){k=!0;let m=R(u);if(ze=m,Y=!1,K=null,d()&&p.alphaMode){if(ie(m)<=re){p.alphaMode=!1,r();return}if(Ce(m)){u.preventDefault(),g=!0,ce(m);return}p.alphaMode=!1,r();return}let V=ae(m);V&&(K={faceIndex:V.faceIndex,s:V.s,t:V.t}),u.preventDefault(),T=!0,y=m,p.viewRotating=!0,d()&&ie(m)<=re&&fe(),r()}function Qe(u){let m=R(u);if(g){u.preventDefault(),ce(m);return}if(T){if(u.preventDefault(),!y){y=m;return}let V=m.x-y.x,S=m.y-y.y;Math.hypot(V,S)>2&&(Y=!0,L());let z=$e();Ee(z.yaw+V*.012,z.pitch+S*.012),y=m,r();return}if(k&&p.alphaMode&&Ce(m)){u.preventDefault(),g=!0,ce(m);return}e.style.cursor="grab"}function Je(u){L(),k=!1,g=!1,x=!1,!Y&&K&&te(K.faceIndex,K.s,K.t),T&&(T=!1,p.viewRotating=!1,y=null,r()),e.style.cursor="grab"}function qe(u){if(u.touches.length!==1)return;A=!0;let m=R(u.touches[0]);if(Y=!1,K=null,d()&&p.alphaMode){if(ie(m)<=re){p.alphaMode=!1,r();return}if(Ce(m)){u.preventDefault(),g=!0,ce(m);return}p.alphaMode=!1,r();return}let V=ae(m);V&&(K={faceIndex:V.faceIndex,s:V.s,t:V.t}),u.preventDefault(),T=!0,y=m,p.viewRotating=!0,d()&&ie(m)<=re&&fe(),r()}function et(u){if(u.touches.length!==1)return;let m=R(u.touches[0]);if(g)u.preventDefault(),ce(m);else if(A&&p.alphaMode&&Ce(m))u.preventDefault(),g=!0,ce(m);else if(T){if(u.preventDefault(),!y){y=m;return}let V=m.x-y.x,S=m.y-y.y;Math.hypot(V,S)>2&&(Y=!0,L());let z=$e();Ee(z.yaw+V*.012,z.pitch+S*.012),y=m,r()}}function tt(u){L(),A=!1,g=!1,!Y&&K&&te(K.faceIndex,K.s,K.t),T&&(T=!1,p.viewRotating=!1,y=null,r())}function ot(u){if(u.key==="1"){Ee(Math.PI/4,0),r();return}if(u.key==="0"){mt(),r();return}if(u.key==="2"){Ee(.95,-.54),r();return}if(p.alphaMode){if(u.key==="Escape"){p.alphaMode=!1,r();return}if(u.key==="ArrowUp"||u.key==="ArrowRight"){u.preventDefault(),h(Math.min(1,b()+(u.shiftKey?.08:.02))),r();return}if(u.key==="ArrowDown"||u.key==="ArrowLeft"){u.preventDefault(),h(Math.max(0,b()-(u.shiftKey?.08:.02))),r();return}}let m=u.shiftKey?.04:.004,V=o(),S=t(),z=Ze(),F=0,B=0;switch(u.key){case"ArrowRight":F=1;break;case"ArrowLeft":F=-1;break;case"ArrowUp":B=-1;break;case"ArrowDown":B=1;break;default:return}u.preventDefault();let $={...V},J=["x","y","z"];for(let N=0;N<3;N++){let X=F*z[N].x+B*z[N].y;if(Math.abs(X)>.3){let me=V[J[N]]+m*Math.sign(X);$[J[N]]=Math.max(0,Math.min(S[J[N]],me))}}i($,a()),r()}e.addEventListener("mousedown",Ke),window.addEventListener("mousemove",Qe),window.addEventListener("mouseup",Je),e.addEventListener("touchstart",qe,{passive:!1}),e.addEventListener("touchmove",et,{passive:!1}),e.addEventListener("touchend",tt),e.addEventListener("keydown",ot),e.setAttribute("tabindex","0");function _t(){L(),e.removeEventListener("mousedown",Ke),window.removeEventListener("mousemove",Qe),window.removeEventListener("mouseup",Je),e.removeEventListener("touchstart",qe),e.removeEventListener("touchmove",et),e.removeEventListener("touchend",tt),e.removeEventListener("keydown",ot)}return{state:p,destroy:_t}}function Dt(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Pt(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function It(e,t,n){if(n.showModeToggle){let o=document.createElement("div");o.className="box-picker-mode-toggle";let i=h=>{let b=document.createElement("button");return b.textContent=h.toUpperCase(),b.addEventListener("click",()=>t.switchMode(h)),o.appendChild(b),b},a=i("oklch"),c=i("rgb"),s=i("hsb"),r=()=>{let h=t.mode();c.classList.toggle("active",h==="rgb"),s.classList.toggle("active",h==="hsb"),a.classList.toggle("active",h==="oklch")};r();let d=t.switchMode;t._markActive=r,e.appendChild(o)}if(n.showInputs){let o=document.createElement("input");o.className="box-picker-hex",o.type="text",o.spellcheck=!1,o.addEventListener("change",()=>{let b=o.value;/^#?[0-9a-f]{6}$/i.test(b)?t.onHexInput(b):t.onHexInput("")}),o.addEventListener("click",()=>{Dt(t.getRgbForCopy()?"#"+Jt(t.getRgbForCopy()):"#ffffff"),Pt(o)});let i=document.createElement("div");i.className="box-picker-channels";let a=[],c=[],s=["R","G","B"];for(let b=0;b<3;b++){let M=document.createElement("div");M.className="box-picker-channel";let C=document.createElement("label");C.textContent=s[b];let w=document.createElement("input");w.type="text",w.inputMode="numeric",M.appendChild(C),M.appendChild(w),i.appendChild(M),a.push(w),c.push(C),w.addEventListener("change",()=>{let p=parseFloat(w.value);isNaN(p)||t.onChannelInput(b,p,255)}),w.addEventListener("click",()=>{let p=t.getRgbForCopy();Dt(`${p.r}, ${p.g}, ${p.b}`),Pt(w)})}let r=document.createElement("div");r.className="box-picker-hexrow";let d=document.createElement("div");d.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",d.appendChild(h),d.appendChild(o),r.appendChild(i),r.appendChild(d),e.appendChild(r),e._inputs={hexInput:o,inputs:a,labels:c}}if(n.showCorners){let o=document.createElement("button");o.className="box-corner-btn box-corner-left",o.title="Random color",o.setAttribute("aria-label","Random color"),o.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',o.addEventListener("click",()=>{let a=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);t.onRandom({r:a,g:c,b:s})}),e.appendChild(o);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>t.onReset()),e.appendChild(i)}}function Jt(e){let t=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return t(e.r)+t(e.g)+t(e.b)}var Ft=`.box-picker {\r
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
/* \u53F3\u4FA7 XYZ \u5750\u6807\u8F74\u663E\u793A/\u9690\u85CF\u6309\u94AE */\r
.box-axis-toggle-btn {\r
  position: absolute;\r
  top: 8px;\r
  right: 8px;\r
  width: 28px;\r
  height: 28px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  background: var(--background-secondary, rgba(0, 0, 0, 0.05));\r
  border: 1px solid var(--background-modifier-border, rgba(0, 0, 0, 0.1));\r
  border-radius: 6px;\r
  cursor: pointer;\r
  padding: 0;\r
  color: var(--text-muted, #888);\r
  opacity: 0.6;\r
  transition: all 0.2s ease;\r
  z-index: 10;\r
}\r
.box-axis-toggle-btn:hover {\r
  opacity: 1;\r
  color: var(--text-normal, #1a1a1a);\r
  background: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));\r
}\r
.box-axis-toggle-btn.active {\r
  opacity: 0.9;\r
  color: var(--interactive-accent, #007AFF);\r
  border-color: rgba(0, 122, 255, 0.3);\r
  background: rgba(0, 122, 255, 0.08);\r
}\r
.box-axis-toggle-btn svg {\r
  display: block;\r
}\r
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
`;var Ht=to,Gt=!1;function eo(){if(Gt||typeof document>"u")return;Gt=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ft,document.head.appendChild(e)}function to(e,t={}){let n=t.size??300,o=t.controls??!0,i=t.showInputs??!1,a=t.showModeToggle??!1,c=t.showCorners??!1,s={mode:()=>r,switchMode:l=>re(l),onHexInput:l=>{let f=pe(l);f?(b=he(W?{r:255-f.r,g:255-f.g,b:255-f.b}:f,r),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)},ee(),_(),L()):_()},onChannelInput:(l,f,v)=>{let E=Math.max(0,Math.min(v,f)),D=["x","y","z"],H=E/v;if(W){let we={...b,[D[l]]:H},te=se(we,r);b=he({r:255-te.r,g:255-te.g,b:255-te.b},r)}else b={...b,[D[l]]:H};H>h[D[l]]&&(h={...h,[D[l]]:H}),ee(),_(),L()},getRgbForCopy:()=>se(b,r),onRandom:l=>Ae(l),onReset:()=>Ae({r:0,g:0,b:0})},r=t.mode??"rgb",d=t.initialColor?he(t.initialColor,r):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},b={...d},M=0,C=()=>t.alpha!==void 0,w=Math.max(0,Math.min(1,t.alpha??1));function p(l){let f=Math.max(0,Math.min(1,l));f!==w&&(w=f,ee(),_(),L())}function R(l){let f=ae(),v=oe(f);v.s=Math.max(0,Math.min(100,l*100));let E=be(v);Ae(W?{r:255-E.r,g:255-E.g,b:255-E.b}:E)}let g=new Set;eo();let x=document.createElement("div");x.className="box-picker";let k=document.createElement("canvas");k.style.cursor="grab",x.appendChild(k);let A=wt(k,n),T={...Se},y=!0,P=document.createElement("button");P.className="box-axis-toggle-btn active",P.title="Toggle All Guides",P.setAttribute("aria-label","Toggle All Guides"),P.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 21V3"/><path d="M3 21l7-7"/><path d="M19 17l2 4-4-2"/><path d="M7 5l-4-2 2 4"/></svg>',P.addEventListener("click",l=>{l.stopPropagation(),y=!y,T={vertexX:y,vertexY:y,vertexZ:y,centerX:y,centerY:y,centerZ:y,yawArc:y,pitchArc:y},P.classList.toggle("active",y),L()}),x.appendChild(P);let I=null,U=document.createElement("div");U.className="box-picker-controls",I=document.createElement("div"),I.className="box-picker-swatch",U.appendChild(I),x.appendChild(U),(i||a||c)&&It(U,s,{showInputs:i,showModeToggle:a,showCorners:c}),e.appendChild(x);let Q=Lt(k,()=>h,l=>{h=l},()=>b,(l,f)=>{b=l,M=f,ee(),_()},()=>M,()=>A.scale,()=>A.center,L,C,p,()=>w,()=>O(b,A.scale,A.center),R,()=>oe(ae()).s/100),W=!1;k.addEventListener("dblclick",()=>{W=!W,ft(W),ee(),_(),L()});function re(l){if(l===r)return;let f=se(b,r),v={...b},E={...h};r=l;let D=he(f,r),H={x:1,y:1,z:1};b=D,h=H,j(v,D,E,H,300),_()}let Z=null;function j(l,f,v,E,D){Z!==null&&cancelAnimationFrame(Z);let H=performance.now();function we(te){let Te=te-H,ze=Math.min(1,Te/D),Y=1-Math.pow(1-ze,3);b={x:l.x+(f.x-l.x)*Y,y:l.y+(f.y-l.y)*Y,z:l.z+(f.z-l.z)*Y},h={x:v.x+(E.x-v.x)*Y,y:v.y+(E.y-v.y)*Y,z:v.z+(E.z-v.z)*Y},ve(),ee(),ze<1?Z=requestAnimationFrame(we):Z=null}Z=requestAnimationFrame(we)}let fe=!1;function L(){fe||(fe=!0,requestAnimationFrame(()=>{fe=!1,ve()}))}function ve(){Et(A,h,b,M,r,Q.state,T,{active:Q.state.alphaMode,alpha:w,rgb:ae()})}function ie(l,f,v){return Math.round(l+(f-l)*v)}function Me(l,f){let v=f>0?255:0,E=Math.abs(f);return de({r:ie(l.r,v,E),g:ie(l.g,v,E),b:ie(l.b,v,E)})}function ce(l,f){let v=pe(f)||{r:128,g:128,b:128},E=Me(v,.35),D=Me(v,0),H=Me(v,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${E}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${D}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${H}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function Ce(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function Bt(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function ae(){let l=se(b,r);return W?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function _(){if(!o)return;let l=ae(),f=de(l);I&&ce(I,f);let v=x.querySelector(".box-picker-hex");v&&(v.value=f),ke(),x._updateModeButtons&&x._updateModeButtons()}function ke(){if(!o)return;let l=it[r],f=W?he(ae(),r):b,v=ct(f,r),E=x.querySelectorAll(".box-picker-channel input"),D=x.querySelectorAll(".box-picker-channel label");for(let H=0;H<E.length;H++)D[H].textContent=l[H],D[H].style.color="",D[H].style.textShadow="none",E[H].value=String(v[H])}function ee(){let l=ae(),f={rgb:l,hsb:oe(l),oklch:ge(l),hex:de(l),alpha:w};for(let v of g)v(f)}function je(){let l=se(b,r);return{rgb:l,hsb:oe(l),oklch:ge(l),hex:de(l)}}_(),ve();let Ae=l=>{b=he(l,r),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)};let f=O(b,A.scale,A.center);M=-1;for(let v=q.length-1;v>=0;v--)if(ye(v,f,h,A.scale,A.center)){M=v;break}ee(),_(),L()};return{getColor:je,getMode:()=>r,setColor:Ae,setAlpha:p,getAlpha:()=>w,setMode(l){re(l)},getRotation:()=>xt(),setRotation:(l,f)=>{yt(l,f),L()},getAxisRotation:()=>gt(),setAxisRotation:(l,f,v)=>{pt(l,f,v),L()},getGuides:()=>({...T}),setGuides:l=>{T={...T,...l},L()},toggleAllGuides:l=>{let f=l!==void 0?l:!y;y=f,T={vertexX:f,vertexY:f,vertexZ:f,centerX:f,centerY:f,centerZ:f,yawArc:f,pitchArc:f},P.classList.toggle("active",f),L()},setZoom:l=>{vt(l),L()},getZoom:()=>Mt(),setDimensions:(l,f,v)=>{Ct(l,f,v),L()},getDimensions:()=>kt(),getEdgeStyle:()=>Vt(),setEdgeStyle:l=>{Rt(l),L()},on(l,f){g.add(f)},off(l,f){g.delete(f)},destroy(){Q.destroy(),Z!==null&&cancelAnimationFrame(Z),e.removeChild(x)}}}function Ue(e,t){if(!e)return null;let n=e.trim();try{if(t==="hex")return{rgb:pe(n),alpha:1};if(t==="hex-alpha"){let o=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!o)return null;let i=pe(o[1]),a=o[2]?parseInt(o[2],16)/255:1;return{rgb:i,alpha:a}}if(t==="rgb"){let o=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return o?{r:+o[1],g:+o[2],b:+o[3]}:null}if(t==="rgba"){let o=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return o?{rgb:{r:+o[1],g:+o[2],b:+o[3]},alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsl"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return o?Ye(+o[1],+o[2],+o[3]):null}if(t==="hsla"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return o?{rgb:Ye(+o[1],+o[2],+o[3]),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsv"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return o?be({h:+o[1],s:+o[2],b:+o[3]}):null}if(t==="hsva"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return o?{rgb:be({h:+o[1],s:+o[2],b:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="oklch"||t==="oklcha"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return o?{rgb:Ve({l:+o[1],c:+o[2],h:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="rgba-string"){let o=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:{r:+o[1],g:+o[2],b:+o[3]},alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsla-string"){let o=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:Ye(+o[1],+o[2],+o[3]),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsva-string"){let o=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:be({h:+o[1],s:+o[2],b:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}}catch{}return null}function Pe(e,t,n=1){if(t==="hex")return de(e);if(t==="hex-alpha")return de(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(t==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(t==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(t==="hsl"){let i=Ne(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%`}if(t==="hsla"){let i=Ne(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${+n.toFixed(3)}`}if(t==="hsv"){let i=oe(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.b)}%`}if(t==="hsva"){let i=oe(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.b)}%, ${+n.toFixed(3)}`}if(t==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(t==="hsla-string"){let i=Ne(e);return`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${+n.toFixed(3)})`}if(t==="hsva-string"){let i=oe(e);return`hsva(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.b)}%, ${+n.toFixed(3)})`}let o=ge(e);return`${o.l.toFixed(3)}, ${o.c.toFixed(3)}, ${o.h.toFixed(1)}`}function Ye(e,t,n){let o=t/100,i=n/100,a=(1-Math.abs(2*i-1))*o,c=a*(1-Math.abs(e/60%2-1)),s=i-a/2,r=0,d=0,h=0;return e<60?(r=a,d=c):e<120?(r=c,d=a):e<180?(d=a,h=c):e<240?(d=c,h=a):e<300?(r=c,h=a):(r=a,h=c),{r:Math.round((r+s)*255),g:Math.round((d+s)*255),b:Math.round((h+s)*255)}}function Ne(e){let t=e.r/255,n=e.g/255,o=e.b/255,i=Math.max(t,n,o),a=Math.min(t,n,o),c=(i+a)/2;if(i===a)return{h:0,s:0,l:c*100};let s=i-a,r=c>.5?s/(2-i-a):s/(i+a),d=0;return i===t?d=((n-o)/s+(n<o?6:0))*60:i===n?d=((o-t)/s+2)*60:d=((t-n)/s+4)*60,{h:d,s:r*100,l:c*100}}var Ie=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(t){super(),this.model=t}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let t=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",o=this.getAttribute("value"),i=o?Ue(o,this.model):null;this.alpha=i?.alpha??1;let a=i?.rgb??{r:255,g:255,b:255},c=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=Ht(this.holder,{initialColor:a,size:t,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...c.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",s=>{this.internal||(this.internal=!0,this.alpha=s.alpha,this.setAttribute("value",Pe(s.rgb,this.model,s.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:s})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Pe(s.rgb,this.model,s.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(t,n,o){if(!(!this.picker||!o||this.internal))if(t==="value"){let i=Ue(o,this.model);i&&(this.alpha=i.alpha,this.picker.setColor(i.rgb),this.picker.setAlpha(i.alpha))}else t==="mode"&&this.picker.setMode(o)}get value(){return this.getAttribute("value")||Pe({r:255,g:255,b:255},this.model,1)}set value(t){this.setAttribute("value",t)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(t){this.setAttribute("mode",t)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},We=class extends Ie{constructor(){super("hex")}},oo=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,t]of oo)customElements.get(e)||customElements.define(e,class extends Ie{constructor(){super(t)}});var Po=We;export{We as ColorIsBoxElement,Ge as DEFAULT_EDGE_CONFIG,Se as DEFAULT_GUIDES,to as createBoxColorPicker,Ht as createColorPicker,Po as default,kt as getBoxDimensions,xt as getCameraAnglesDeg,Vt as getEdgeStyle,gt as getRotationDeg,Mt as getZoomMultiplier,Ct as setBoxDimensions,ft as setBoxInvert,yt as setCameraAnglesDeg,Rt as setEdgeStyle,pt as setRotationDeg,vt as setZoomMultiplier};
