var Be={showVisible:!0,showHidden:!1,width:1.5,dashed:!1,color:"#ffffff",opacity:.45},Le={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,angleGuides:!0,yawArc:!0,pitchArc:!0},ao={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},so={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function oe(e){let o=e.r/255,n=e.g/255,t=e.b/255,i=Math.max(o,n,t),a=Math.min(o,n,t),l=i-a,s=0;l!==0&&(i===o?s=((n-t)/l+6)%6:i===n?s=(t-o)/l+2:s=(o-n)/l+4,s*=60);let r=i===0?0:l/i*100,d=i*100;return{h:s,s:r,b:d}}function be(e){let o=e.h,n=e.s/100,t=e.b/100,i=t*n,a=i*(1-Math.abs(o/60%2-1)),l=t-i,s,r,d;return o<60?(s=i,r=a,d=0):o<120?(s=a,r=i,d=0):o<180?(s=0,r=i,d=a):o<240?(s=0,r=a,d=i):o<300?(s=a,r=0,d=i):(s=i,r=0,d=a),{r:Math.round((s+l)*255),g:Math.round((r+l)*255),b:Math.round((d+l)*255)}}function _e(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Oe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Xo(e){let o=_e(e.r/255),n=_e(e.g/255),t=_e(e.b/255),i=.4122214708*o+.5363325363*n+.0514459929*t,a=.2119034982*o+.6806995451*n+.1073969566*t,l=.0883024619*o+.2817188376*n+.6299787005*t,s=Math.cbrt(i),r=Math.cbrt(a),d=Math.cbrt(l);return{L:.2104542553*s+.793617785*r-.0040720468*d,a:1.9779984951*s-2.428592205*r+.4505937099*d,b:.0259040371*s+.7827717662*r-.808675766*d}}function $o(e,o,n){let t=e+.3963377774*o+.2158037573*n,i=e-.1055613458*o-.0638541728*n,a=e-.0894841775*o-1.291485548*n,l=t*t*t,s=i*i*i,r=a*a*a,d=4.0767416621*l-3.3077115913*s+.2309699292*r,h=-1.2684380046*l+2.6097574011*s-.3413193965*r,b=-.0041960863*l-.7034186147*s+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Oe(d)))*255),g:Math.round(Math.max(0,Math.min(1,Oe(h)))*255),b:Math.round(Math.max(0,Math.min(1,Oe(b)))*255)}}function ye(e){let o=Xo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Te(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return $o(e.l,n,t)}function Zo(e,o,n){let t=Te({l:e,c:o,h:n});if(lo(t))return{l:e,c:o,h:n};let i=0,a=o;for(let l=0;l<20;l++){let s=(i+a)/2;t=Te({l:e,c:s,h:n}),lo(t)?i=s:a=s}return{l:e,c:i,h:n}}function lo(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ve(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var co=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return be({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*co,i=e.z*359,a=Zo(n,t,i);return Te(a)}}function he(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=oe(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ye(e);return{x:n.l,y:Math.min(n.c/co,1),z:n.h/359}}}function uo(e,o){let n=so[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function bo(e,o,n,t,i,a=!1){let l;e===0?l={x:t,y:o,z:n}:e===1?l={x:o,y:t,z:n}:l={x:o,y:n,z:t};let s=re(l,i);return a?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var ho={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},fo={sizeX:1,sizeY:1,sizeZ:1};function Xe(e,o,n){let t=(e.x-.5)*n.sizeX,i=(e.y-.5)*n.sizeY,a=(e.z-.5)*n.sizeZ,l=Math.cos(o.rotZRad),s=Math.sin(o.rotZRad),r=t*l-i*s,d=t*s+i*l,h=a,b=Math.cos(o.rotYRad),v=Math.sin(o.rotYRad),M=r*b+h*v,A=d,p=-r*v+h*b,w=Math.cos(o.rotXRad),g=Math.sin(o.rotXRad),y=M,C=p*w-A*g,k=p*g+A*w;return{x:y,y:C,z:k}}function De(e,o,n,t,i){let a=Xe(e,t,i);return{x:n.x+a.x*o*1.6*t.zoom,y:n.y-a.y*o*1.6*t.zoom}}var Me=["#ef4444","#22c55e","#3b82f6"];function mo(e,o,n,t,i,a){let l=g=>De(g,o,n,t,i),s=l({x:0,y:0,z:0});e.save();let r=1.28,d=[{p:{x:r,y:0,z:0},name:"X",color:Me[0],visible:a.vertexX},{p:{x:0,y:r,z:0},name:"Y",color:Me[1],visible:a.vertexY},{p:{x:0,y:0,z:r},name:"Z",color:Me[2],visible:a.vertexZ}];for(let g=0;g<d.length;g++){if(!d[g].visible)continue;let y=l(d[g].p),C=d[g].color;e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(y.x,y.y),e.strokeStyle=C,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(y.x,y.y,3.5,0,Math.PI*2),e.fillStyle=C,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let k=y.x-s.x,E=y.y-s.y,R=Math.hypot(k,E)||1,H=12,F=y.x+k/R*H,j=y.y+E/R*H;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=C,e.fillText(d[g].name,F,j)}(a.vertexX||a.vertexY||a.vertexZ)&&(e.beginPath(),e.arc(s.x,s.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let h=l({x:.5,y:.5,z:.5}),b=.35,v=[{from:{x:-b,y:.5,z:.5},to:{x:1+b,y:.5,z:.5},color:Me[0],name:"Cx",visible:a.centerX},{from:{x:.5,y:-b,z:.5},to:{x:.5,y:1+b,z:.5},color:Me[1],name:"Cy",visible:a.centerY},{from:{x:.5,y:.5,z:-b},to:{x:.5,y:.5,z:1+b},color:Me[2],name:"Cz",visible:a.centerZ}],M=!1;for(let g=0;g<v.length;g++){if(!v[g].visible)continue;M=!0;let y=l(v[g].from),C=l(v[g].to);e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(C.x,C.y),e.strokeStyle=v[g].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(y.x,y.y,3,0,Math.PI*2),e.arc(C.x,C.y,3,0,Math.PI*2),e.fillStyle=v[g].color,e.fill()}M&&(e.beginPath(),e.arc(h.x,h.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let A=a.angleGuides!==void 0?a.angleGuides:a.yawArc||a.pitchArc||!1,p=Math.round(t.rotZRad*180/Math.PI*10)/10,w=Math.round(t.rotXRad*180/Math.PI*10)/10;if(A){e.beginPath();let g=36;for(let C=0;C<=g;C++){let k=C/g*Math.PI*2,E={x:.5+Math.cos(k)*.75,y:.5+Math.sin(k)*.75,z:0},R=l(E);C===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.beginPath();let y=20;for(let C=0;C<=y;C++){let k=-Math.PI/2+C/y*Math.PI,E={x:.5+Math.cos(k)*.75,y:.5,z:.5+Math.sin(k)*.75},R=l(E);C===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${p.toFixed(1)}\xB0`,12,n.y*2-24),e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${w.toFixed(1)}\xB0`,12,n.y*2-10)}e.restore()}var Ze=!1;function go(e){Ze=e}var I={...ho},ie={...fo};function ze(e,o){I.rotZRad=-30*(Math.PI/180)+e,I.rotXRad=20*(Math.PI/180)+o}function Ye(){return{yaw:I.rotZRad- -30*(Math.PI/180),pitch:I.rotXRad-20*(Math.PI/180)}}function po(){I.rotXRad=20*(Math.PI/180),I.rotYRad=0,I.rotZRad=-30*(Math.PI/180)}function xo(){return{rotXDeg:Math.round(I.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(I.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(I.rotZRad*180/Math.PI*10)/10}}function yo(e,o,n){I.rotXRad=e*Math.PI/180,I.rotYRad=o*Math.PI/180,I.rotZRad=n*Math.PI/180}function vo(){return{yawDeg:Math.round(I.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(I.rotXRad*180/Math.PI*10)/10}}function Mo(e,o){I.rotZRad=e*Math.PI/180,I.rotXRad=o*Math.PI/180}function Co(e){I.zoom=Math.max(.1,Math.min(3,e))}function ko(){return I.zoom}function Ao(e,o,n){ie.sizeX=Math.max(.1,Math.min(2.5,e)),ie.sizeY=Math.max(.1,Math.min(2.5,o)),ie.sizeZ=Math.max(.1,Math.min(2.5,n))}function wo(){return{sizeX:ie.sizeX,sizeY:ie.sizeY,sizeZ:ie.sizeZ}}function X(e,o,n){return De(e,o,n,I,ie)}function $e(e){return Xe(e,I,ie)}function Yo(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var ee=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],No=64,Ro={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Vo(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*1*n,e.style.width=`${o}px`,e.style.height=`${o*1}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.26,center:{x:o/2,y:o*.5},width:o,height:o*1}}var Pe={...Be};function Eo(e){Pe={...Pe,...e}}function To(){return{...Pe}}var Uo=[[0,1],[1,4],[4,2],[2,0],[3,5],[5,7],[7,6],[6,3],[0,3],[1,5],[4,7],[2,6]];function Wo(e,o,n,t){if(!(!t.showVisible&&!t.showHidden)){e.save(),e.lineWidth=t.width,t.dashed?e.setLineDash([4,3]):e.setLineDash([]);for(let[i,a]of Uo){let l=o[i],s=o[a],r={x:(n[i].x+n[a].x)*.5,y:(n[i].y+n[a].y)*.5,z:(n[i].z+n[a].z)*.5},h=$e(r).z<=0;h&&t.showVisible?(e.strokeStyle=t.color,e.globalAlpha=t.opacity,e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(s.x,s.y),e.stroke()):!h&&t.showHidden&&(e.strokeStyle=t.color,e.globalAlpha=t.opacity*.45,e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(s.x,s.y),e.stroke())}e.restore()}}function zo(e,o,n,t,i,a,l=!0,s=null){let{ctx:r,scale:d,center:h,width:b,height:v}=e;r.save(),r.clearRect(0,0,b,v);let M=Yo(o),A=M.map(w=>X(w,d,h));if(r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,Ko(r,A,M,o,i,a.viewRotating),r.restore(),Wo(r,A,M,Pe),mo(r,d,h,I,ie,typeof l=="boolean"?l?Le:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:l),t>=0){let w=re(n,i),g=Ze?{r:255-w.r,g:255-w.g,b:255-w.b}:w,y=X(n,d,h);s&&s.active&&Qo(r,y,s.rgb,s.alpha),Jo(r,y,g)}r.restore()}function Ko(e,o,n,t,i,a){let l=[t.x,t.y,t.z],s=[];for(let r=0;r<ee.length;r++){let d=ee[r],h=d.fixedValue*l[d.fixedAxis],b=l[d.uAxis],v=l[d.vAxis];if(b<.002&&v<.002)continue;let M={x:0,y:0,z:0},A=["x","y","z"];M[A[d.fixedAxis]]=h,M[A[d.uAxis]]=b*.5,M[A[d.vAxis]]=v*.5;let p=$e(M),w={x:M.x+d.normal.x*.1,y:M.y+d.normal.y*.1,z:M.z+d.normal.z*.1};if($e(w).z-p.z<0){let C=d.quad.map(k=>o[k]);s.push({face:d,corners:C,fixedVal:h,uMax:b,vMax:v,depth:p.z})}}s.sort((r,d)=>d.depth-r.depth);for(let r of s)jo(e,r.corners,r.face.fixedAxis,r.fixedVal,r.uMax,r.vMax,i)}function jo(e,o,n,t,i,a,l){let s=No,r=document.createElement("canvas");r.width=s,r.height=s;let d=r.getContext("2d"),h=d.createImageData(s,s),b=h.data;for(let j=0;j<s;j++)for(let B=0;B<s;B++){let fe=B/(s-1)*i,$=j/(s-1)*a,ce=bo(n,fe,$,t,l,Ze),Z=(j*s+B)*4;b[Z]=ce.r,b[Z+1]=ce.g,b[Z+2]=ce.b,b[Z+3]=255}d.putImageData(h,0,0);let v=o[0],M=o[1],A=o[2],p=o[3],w=M.x-v.x,g=M.y-v.y,y=p.x-v.x,C=p.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(M.x,M.y),e.lineTo(A.x,A.y),e.lineTo(p.x,p.y),e.closePath(),e.clip();let k=2/s,E=v.x-w*k-y*k,R=v.y-g*k-C*k,H=1+2*k,F=1+2*k;e.transform(w*H/s,g*H/s,y*F/s,C*F/s,E,R),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}var te=30,le=13;function Qo(e,o,n,t){let i=(te+le)/2,a=5,l=Math.floor(o.x/a)*a,s=Math.floor(o.y/a)*a,r=te*2+a*2,d=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,te,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let w=-1;w*a<=r;w++)for(let g=-1;g*a<=r;g++)e.fillStyle=(w+g)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+w*a,s+g*a,a,a);let h="rgba("+n.r+","+n.g+","+n.b+",0)",b="rgba("+n.r+","+n.g+","+n.b+",1)",v=e;if(typeof v.createConicGradient=="function"){let w=v.createConicGradient(-Math.PI/2,o.x,o.y);w.addColorStop(0,h),w.addColorStop(1,b),e.fillStyle=w,e.fillRect(l-te,s-te,r,r)}else for(let g=0;g<36;g++){let y=-Math.PI/2+g/36*Math.PI*2,C=-Math.PI/2+(g+1)/36*Math.PI*2,k=(g+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(y)*le,o.y+Math.sin(y)*le),e.arc(o.x,o.y,te,y,C),e.arc(o.x,o.y,le,C,y,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+k.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,te,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-te-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let M=d*Math.PI*2,A=o.x+i*Math.sin(M),p=o.y-i*Math.cos(M);e.beginPath(),e.arc(A,p,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Jo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function So(e,o,n,t){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return X(i[e],n,t)}function Ne(){let e={x:0,y:0};return[X({x:1,y:0,z:0},1,e),X({x:0,y:1,z:0},1,e),X({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function Ce(e,o,n,t,i){let a=ee[e],l=[n.x,n.y,n.z],s=l[a.uAxis],r=l[a.vAxis];if(s<.002||r<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[a.fixedAxis]]=a.fixedValue*l[a.fixedAxis];let b={...d};b[h[a.uAxis]]=s;let v={...d};v[h[a.vAxis]]=r;let M=X(d,t,i),A=X(b,t,i),p=X(v,t,i),w=A.x-M.x,g=A.y-M.y,y=p.x-M.x,C=p.y-M.y,k=w*C-g*y;if(Math.abs(k)<1e-6)return null;let E=o.x-M.x,R=o.y-M.y,H=(E*C-R*y)/k,F=(R*w-E*g)/k;return H<-.05||H>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,F))}}function Lo(e,o,n,t,i){let a=ee[e],l=[n.x,n.y,n.z],s=l[a.uAxis],r=l[a.vAxis];if(s<.002||r<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[a.fixedAxis]]=a.fixedValue*l[a.fixedAxis];let b={...d};b[h[a.uAxis]]=s;let v={...d};v[h[a.vAxis]]=r;let M=X(d,t,i),A=X(b,t,i),p=X(v,t,i),w=A.x-M.x,g=A.y-M.y,y=p.x-M.x,C=p.y-M.y,k=w*C-g*y;if(Math.abs(k)<1e-6)return null;let E=o.x-M.x,R=o.y-M.y,H=(E*C-R*y)/k,F=(R*w-E*g)/k;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,F))}}var Do=22;function Po(e,o,n,t,i,a,l,s,r,d,h,b,v,M,A){let p={...Ro};function w(u){let m=e.getBoundingClientRect();return{x:u.clientX-m.left,y:u.clientY-m.top}}let g=!1,y=!1,C=!1,k=!1,E=!1,R=null,H=600,F=null;function j(){B(),F=setTimeout(fe,H)}function B(){F!==null&&(clearTimeout(F),F=null)}function fe(){F=null,p.alphaMode=!1,Ve(),f(),E=!0,p.viewRotating=!0,R=null,r()}let $=14,ce=800,Z=null;function _(){U(),Z=setTimeout(ke,ce)}function U(){Z!==null&&(clearTimeout(Z),Z=null),B()}function ke(){Z=null,p.alphaMode=!0,f(),Ve(),y=!1,r()}function ne(u){let m=v();return Math.hypot(u.x-m.x,u.y-m.y)}function Ge(u){let m=v();return(Math.atan2(u.x-m.x,-(u.y-m.y))+Math.PI*2)%(Math.PI*2)}function de(u){h(Ge(u)/(Math.PI*2)),r()}function Ae(u){let m=ne(u);return m>=le-4&&m<=te+6}function ue(u){let m=o(),V=l(),L=s();for(let z=0;z<3;z++){let P=So(z,m,V,L),G=u.x-P.x,Y=u.y-P.y;if(G*G+Y*Y<=Do*Do)return z}return-1}function W(u){let m=o(),V=l(),L=s();for(let z=ee.length-1;z>=0;z--){let P=Ce(z,u,m,V,L);if(P)return{faceIndex:z,...P}}return null}let Q=-1,J={x:0,y:0},Se=0;function we(u,m){Q=u,J=m,Se=o()[["x","y","z"][u]],p.draggingAxisHandle=u,e.style.cursor="grabbing",r()}function c(u){if(U(),Q<0)return;let m=u.x-J.x,V=u.y-J.y,z=Ne()[Q],P=l(),Y=(m*z.x+V*z.y)/P,q=Math.max(0,Math.min(1,Se+Y)),N=o(),O=["x","y","z"],xe={...N,[O[Q]]:q};n(xe);let Ee=t(),ro=a(),io=ro>=0?ee[ro]:null,He={...Ee};io&&Q===io.fixedAxis?He[O[Q]]=q:He[O[Q]]=Math.min(Ee[O[Q]],q),i(He,a()),r()}function f(){Q=-1,p.draggingAxisHandle=-1}let x=-1,T=null,D=null,S=!1;function Re(u,m,V,L){x=u,p.draggingFace=u,T=null,D=null,S=!1,L&&(S=!0,D={s:m,t:V}),ge(u,m,V),e.style.cursor="crosshair",r()}function me(u,m,V){if(U(),x<0)return;let L=o(),z=l(),P=s(),G=Ce(x,u,L,z,P),Y=x;if(!G&&!V){for(let O=ee.length-1;O>=0;O--)if(O!==x&&(G=Ce(O,u,L,z,P),G)){Y=O;break}}if(!G&&V&&(G=Lo(x,u,L,z,P),Y=x),!G){r();return}Y!==x&&(x=Y,p.draggingFace=Y,T=null,S=!1,D=null);let{s:q,t:N}=G;if(m&&D){if(S){let O=Math.abs(q-D.s),xe=Math.abs(N-D.t),Ee=.02;(O>Ee||xe>Ee)&&(T=O>=xe?"u":"v",S=!1)}T==="u"?N=D.t:T==="v"&&(q=D.s)}else m||(T=null,S=!1,D=null);ge(Y,q,N),r()}function ge(u,m,V){let L=ee[u],z=o(),P=["x","y","z"],G={...t()};G[P[L.uAxis]]=m*z[P[L.uAxis]],G[P[L.vAxis]]=V*z[P[L.vAxis]],G[P[L.fixedAxis]]=L.fixedValue*z[P[L.fixedAxis]],i(G,u)}function Ve(){x=-1,p.draggingFace=-1,T=null,S=!1,D=null}let ae=null,pe=!1,K=null;function Qe(u){C=!0;let m=w(u);if(ae=m,pe=!1,K=null,d()&&p.alphaMode){if(ne(m)<=$){p.alphaMode=!1,r();return}if(Ae(m)){u.preventDefault(),g=!0,de(m);return}p.alphaMode=!1,r();return}let V=W(m);V&&(K={faceIndex:V.faceIndex,s:V.s,t:V.t}),u.preventDefault(),E=!0,R=m,p.viewRotating=!0,d()&&ne(m)<=$&&_(),r()}function Je(u){let m=w(u);if(g){u.preventDefault(),de(m);return}if(E){if(u.preventDefault(),!R){R=m;return}let V=m.x-R.x,L=m.y-R.y;Math.hypot(V,L)>2&&(pe=!0,U());let z=Ye();ze(z.yaw+V*.012,z.pitch+L*.012),R=m,r();return}if(C&&p.alphaMode&&Ae(m)){u.preventDefault(),g=!0,de(m);return}e.style.cursor="grab"}function qe(u){U(),C=!1,g=!1,y=!1,!pe&&K&&ge(K.faceIndex,K.s,K.t),E&&(E=!1,p.viewRotating=!1,R=null,r()),e.style.cursor="grab"}function eo(u){if(u.touches.length!==1)return;k=!0;let m=w(u.touches[0]);if(pe=!1,K=null,d()&&p.alphaMode){if(ne(m)<=$){p.alphaMode=!1,r();return}if(Ae(m)){u.preventDefault(),g=!0,de(m);return}p.alphaMode=!1,r();return}let V=W(m);V&&(K={faceIndex:V.faceIndex,s:V.s,t:V.t}),u.preventDefault(),E=!0,R=m,p.viewRotating=!0,d()&&ne(m)<=$&&_(),r()}function oo(u){if(u.touches.length!==1)return;let m=w(u.touches[0]);if(g)u.preventDefault(),de(m);else if(k&&p.alphaMode&&Ae(m))u.preventDefault(),g=!0,de(m);else if(E){if(u.preventDefault(),!R){R=m;return}let V=m.x-R.x,L=m.y-R.y;Math.hypot(V,L)>2&&(pe=!0,U());let z=Ye();ze(z.yaw+V*.012,z.pitch+L*.012),R=m,r()}}function to(u){U(),k=!1,g=!1,!pe&&K&&ge(K.faceIndex,K.s,K.t),E&&(E=!1,p.viewRotating=!1,R=null,r())}function no(u){if(u.key==="1"){ze(Math.PI/4,0),r();return}if(u.key==="0"){po(),r();return}if(u.key==="2"){ze(.95,-.54),r();return}if(p.alphaMode){if(u.key==="Escape"){p.alphaMode=!1,r();return}if(u.key==="ArrowUp"||u.key==="ArrowRight"){u.preventDefault(),h(Math.min(1,b()+(u.shiftKey?.08:.02))),r();return}if(u.key==="ArrowDown"||u.key==="ArrowLeft"){u.preventDefault(),h(Math.max(0,b()-(u.shiftKey?.08:.02))),r();return}}let m=u.shiftKey?.04:.004,V=t(),L=o(),z=Ne(),P=0,G=0;switch(u.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":G=-1;break;case"ArrowDown":G=1;break;default:return}u.preventDefault();let Y={...V},q=["x","y","z"];for(let N=0;N<3;N++){let O=P*z[N].x+G*z[N].y;if(Math.abs(O)>.3){let xe=V[q[N]]+m*Math.sign(O);Y[q[N]]=Math.max(0,Math.min(L[q[N]],xe))}}i(Y,a()),r()}e.addEventListener("mousedown",Qe),window.addEventListener("mousemove",Je),window.addEventListener("mouseup",qe),e.addEventListener("touchstart",eo,{passive:!1}),e.addEventListener("touchmove",oo,{passive:!1}),e.addEventListener("touchend",to),e.addEventListener("keydown",no),e.setAttribute("tabindex","0");function Oo(){U(),e.removeEventListener("mousedown",Qe),window.removeEventListener("mousemove",Je),window.removeEventListener("mouseup",qe),e.removeEventListener("touchstart",eo),e.removeEventListener("touchmove",oo),e.removeEventListener("touchend",to),e.removeEventListener("keydown",no)}return{state:p,destroy:Oo}}function Io(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Fo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Go(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let i=h=>{let b=document.createElement("button");return b.textContent=h.toUpperCase(),b.addEventListener("click",()=>o.switchMode(h)),t.appendChild(b),b},a=i("oklch"),l=i("rgb"),s=i("hsb"),r=()=>{let h=o.mode();l.classList.toggle("active",h==="rgb"),s.classList.toggle("active",h==="hsb"),a.classList.toggle("active",h==="oklch")};r();let d=o.switchMode;o._markActive=r,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let b=t.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),t.addEventListener("click",()=>{Io(o.getRgbForCopy()?"#"+qo(o.getRgbForCopy()):"#ffffff"),Fo(t)});let i=document.createElement("div");i.className="box-picker-channels";let a=[],l=[],s=["R","G","B"];for(let b=0;b<3;b++){let v=document.createElement("div");v.className="box-picker-channel";let M=document.createElement("label");M.textContent=s[b];let A=document.createElement("input");A.type="text",A.inputMode="numeric",v.appendChild(M),v.appendChild(A),i.appendChild(v),a.push(A),l.push(M),A.addEventListener("change",()=>{let p=parseFloat(A.value);isNaN(p)||o.onChannelInput(b,p,255)}),A.addEventListener("click",()=>{let p=o.getRgbForCopy();Io(`${p.r}, ${p.g}, ${p.b}`),Fo(A)})}let r=document.createElement("div");r.className="box-picker-hexrow";let d=document.createElement("div");d.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",d.appendChild(h),d.appendChild(t),r.appendChild(i),r.appendChild(d),e.appendChild(r),e._inputs={hexInput:t,inputs:a,labels:l}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let a=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);o.onRandom({r:a,g:l,b:s})}),e.appendChild(t);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function qo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Ho=`.box-picker {\r
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
`;var _o=tt,Bo=!1;function ot(){if(Bo||typeof document>"u")return;Bo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ho,document.head.appendChild(e)}function tt(e,o={}){let n=o.size??300,t=o.controls??!0,i=o.showInputs??!1,a=o.showModeToggle??!1,l=o.showCorners??!1,s={mode:()=>r,switchMode:c=>fe(c),onHexInput:c=>{let f=ve(c);f?(b=he(B?{r:255-f.r,g:255-f.g,b:255-f.b}:f,r),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)},J(),W(),_()):W()},onChannelInput:(c,f,x)=>{let T=Math.max(0,Math.min(x,f)),D=["x","y","z"],S=T/x;if(B){let Re={...b,[D[c]]:S},me=re(Re,r);b=he({r:255-me.r,g:255-me.g,b:255-me.b},r)}else b={...b,[D[c]]:S};S>h[D[c]]&&(h={...h,[D[c]]:S}),J(),W(),_()},getRgbForCopy:()=>re(b,r),onRandom:c=>we(c),onReset:()=>we({r:0,g:0,b:0})},r=o.mode??"rgb",d=o.initialColor?he(o.initialColor,r):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},b={...d},v=0,M=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function p(c){let f=Math.max(0,Math.min(1,c));f!==A&&(A=f,J(),W(),_())}function w(c){let f=ue(),x=oe(f);x.s=Math.max(0,Math.min(100,c*100));let T=be(x);we(B?{r:255-T.r,g:255-T.g,b:255-T.b}:T)}let g=new Set;ot();let y=document.createElement("div");y.className="box-picker";let C=document.createElement("canvas");C.style.cursor="grab",y.appendChild(C);let k=Vo(C,n),E={...Le},R=!0,H=null,F=document.createElement("div");F.className="box-picker-controls",H=document.createElement("div"),H.className="box-picker-swatch",F.appendChild(H),y.appendChild(F),(i||a||l)&&Go(F,s,{showInputs:i,showModeToggle:a,showCorners:l}),e.appendChild(y);let j=Po(C,()=>h,c=>{h=c},()=>b,(c,f)=>{b=c,v=f,J(),W()},()=>v,()=>k.scale,()=>k.center,_,M,p,()=>A,()=>X(b,k.scale,k.center),w,()=>oe(ue()).s/100),B=!1;C.addEventListener("dblclick",()=>{B=!B,go(B),J(),W(),_()});function fe(c){if(c===r)return;let f=re(b,r),x={...b},T={...h};r=c;let D=he(f,r),S={x:1,y:1,z:1};b=D,h=S,ce(x,D,T,S,300),W()}let $=null;function ce(c,f,x,T,D){$!==null&&cancelAnimationFrame($);let S=performance.now();function Re(me){let ge=me-S,Ve=Math.min(1,ge/D),ae=1-Math.pow(1-Ve,3);b={x:c.x+(f.x-c.x)*ae,y:c.y+(f.y-c.y)*ae,z:c.z+(f.z-c.z)*ae},h={x:x.x+(T.x-x.x)*ae,y:x.y+(T.y-x.y)*ae,z:x.z+(T.z-x.z)*ae},U(),J(),Ve<1?$=requestAnimationFrame(Re):$=null}$=requestAnimationFrame(Re)}let Z=!1;function _(){Z||(Z=!0,requestAnimationFrame(()=>{Z=!1,U()}))}function U(){zo(k,h,b,v,r,j.state,E,{active:j.state.alphaMode,alpha:A,rgb:ue()})}function ke(c,f,x){return Math.round(c+(f-c)*x)}function ne(c,f){let x=f>0?255:0,T=Math.abs(f);return se({r:ke(c.r,x,T),g:ke(c.g,x,T),b:ke(c.b,x,T)})}function Ge(c,f){let x=ve(f)||{r:128,g:128,b:128},T=ne(x,.35),D=ne(x,0),S=ne(x,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${T}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${D}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function de(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function Ae(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function ue(){let c=re(b,r);return B?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function W(){if(!t)return;let c=ue(),f=se(c);H&&Ge(H,f);let x=y.querySelector(".box-picker-hex");x&&(x.value=f),Q(),y._updateModeButtons&&y._updateModeButtons()}function Q(){if(!t)return;let c=ao[r],f=B?he(ue(),r):b,x=uo(f,r),T=y.querySelectorAll(".box-picker-channel input"),D=y.querySelectorAll(".box-picker-channel label");for(let S=0;S<T.length;S++)D[S].textContent=c[S],D[S].style.color="",D[S].style.textShadow="none",T[S].value=String(x[S])}function J(){let c=ue(),f={rgb:c,hsb:oe(c),oklch:ye(c),hex:se(c),alpha:A};for(let x of g)x(f)}function Se(){let c=re(b,r);return{rgb:c,hsb:oe(c),oklch:ye(c),hex:se(c)}}W(),U();let we=c=>{b=he(c,r),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)};let f=X(b,k.scale,k.center);v=-1;for(let x=ee.length-1;x>=0;x--)if(Ce(x,f,h,k.scale,k.center)){v=x;break}J(),W(),_()};return{getColor:Se,getMode:()=>r,setColor:we,setAlpha:p,getAlpha:()=>A,setMode(c){fe(c)},getRotation:()=>vo(),setRotation:(c,f)=>{Mo(c,f),_()},getAxisRotation:()=>xo(),setAxisRotation:(c,f,x)=>{yo(c,f,x),_()},getGuides:()=>({...E}),setGuides:c=>{E={...E,...c},_()},toggleAllGuides:c=>{let f=c!==void 0?c:!R;R=f,E={vertexX:f,vertexY:f,vertexZ:f,centerX:f,centerY:f,centerZ:f,angleGuides:f,yawArc:f,pitchArc:f},_()},setZoom:c=>{Co(c),_()},getZoom:()=>ko(),setDimensions:(c,f,x)=>{Ao(c,f,x),_()},getDimensions:()=>wo(),getEdgeStyle:()=>To(),setEdgeStyle:c=>{Eo(c),_()},on(c,f){g.add(f)},off(c,f){g.delete(f)},destroy(){j.destroy(),$!==null&&cancelAnimationFrame($),e.removeChild(y)}}}function Ke(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:ve(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let i=ve(t[1]),a=t[2]?parseInt(t[2],16)/255:1;return{rgb:i,alpha:a}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ue(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ue(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?be({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:be({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Te({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ue(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:be({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Ie(e,o,n=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let i=We(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%`}if(o==="hsla"){let i=We(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let i=oe(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.b)}%`}if(o==="hsva"){let i=oe(e);return`${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let i=We(e);return`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let i=oe(e);return`hsva(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.b)}%, ${+n.toFixed(3)})`}let t=ye(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ue(e,o,n){let t=o/100,i=n/100,a=(1-Math.abs(2*i-1))*t,l=a*(1-Math.abs(e/60%2-1)),s=i-a/2,r=0,d=0,h=0;return e<60?(r=a,d=l):e<120?(r=l,d=a):e<180?(d=a,h=l):e<240?(d=l,h=a):e<300?(r=l,h=a):(r=a,h=l),{r:Math.round((r+s)*255),g:Math.round((d+s)*255),b:Math.round((h+s)*255)}}function We(e){let o=e.r/255,n=e.g/255,t=e.b/255,i=Math.max(o,n,t),a=Math.min(o,n,t),l=(i+a)/2;if(i===a)return{h:0,s:0,l:l*100};let s=i-a,r=l>.5?s/(2-i-a):s/(i+a),d=0;return i===o?d=((n-t)/s+(n<t?6:0))*60:i===n?d=((t-o)/s+2)*60:d=((o-n)/s+4)*60,{h:d,s:r*100,l:l*100}}var Fe=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),i=t?Ke(t,this.model):null;this.alpha=i?.alpha??1;let a=i?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=_o(this.holder,{initialColor:a,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",s=>{this.internal||(this.internal=!0,this.alpha=s.alpha,this.setAttribute("value",Ie(s.rgb,this.model,s.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:s})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Ie(s.rgb,this.model,s.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let i=Ke(t,this.model);i&&(this.alpha=i.alpha,this.picker.setColor(i.rgb),this.picker.setAlpha(i.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Ie({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},je=class extends Fe{constructor(){super("hex")}},nt=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of nt)customElements.get(e)||customElements.define(e,class extends Fe{constructor(){super(o)}});var Pt=je;export{je as ColorIsBoxElement,Be as DEFAULT_EDGE_CONFIG,Le as DEFAULT_GUIDES,tt as createBoxColorPicker,_o as createColorPicker,Pt as default,wo as getBoxDimensions,vo as getCameraAnglesDeg,To as getEdgeStyle,xo as getRotationDeg,ko as getZoomMultiplier,Ao as setBoxDimensions,go as setBoxInvert,Mo as setCameraAnglesDeg,Eo as setEdgeStyle,yo as setRotationDeg,Co as setZoomMultiplier};
