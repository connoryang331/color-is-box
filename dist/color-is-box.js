var Ie={showFront:!0,showBack:!0,frontWidth:1.5,backWidth:1,frontDashed:!1,backDashed:!0,frontColor:"#ffffff",backColor:"#ffffff",frontOpacity:.65,backOpacity:.25},ze={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,angleGuides:!0,yawArc:!0,pitchArc:!0},eo={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},oo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ge(e){let o=e.r/255,n=e.g/255,r=e.b/255,s=Math.max(o,n,r),i=Math.min(o,n,r),u=s-i,a=0;u!==0&&(s===o?a=((n-r)/u+6)%6:s===n?a=(r-o)/u+2:a=(o-n)/u+4,a*=60);let t=s===0?0:u/s*100,d=s*100;return{h:a,s:t,b:d}}function He(e){let o=e.h,n=e.s/100,r=e.b/100,s=r*n,i=s*(1-Math.abs(o/60%2-1)),u=r-s,a,t,d;return o<60?(a=s,t=i,d=0):o<120?(a=i,t=s,d=0):o<180?(a=0,t=s,d=i):o<240?(a=0,t=i,d=s):o<300?(a=i,t=0,d=s):(a=s,t=0,d=i),{r:Math.round((a+u)*255),g:Math.round((t+u)*255),b:Math.round((d+u)*255)}}function Fe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Be(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Go(e){let o=Fe(e.r/255),n=Fe(e.g/255),r=Fe(e.b/255),s=.4122214708*o+.5363325363*n+.0514459929*r,i=.2119034982*o+.6806995451*n+.1073969566*r,u=.0883024619*o+.2817188376*n+.6299787005*r,a=Math.cbrt(s),t=Math.cbrt(i),d=Math.cbrt(u);return{L:.2104542553*a+.793617785*t-.0040720468*d,a:1.9779984951*a-2.428592205*t+.4505937099*d,b:.0259040371*a+.7827717662*t-.808675766*d}}function Ho(e,o,n){let r=e+.3963377774*o+.2158037573*n,s=e-.1055613458*o-.0638541728*n,i=e-.0894841775*o-1.291485548*n,u=r*r*r,a=s*s*s,t=i*i*i,d=4.0767416621*u-3.3077115913*a+.2309699292*t,b=-1.2684380046*u+2.6097574011*a-.3413193965*t,c=-.0041960863*u-.7034186147*a+1.707614701*t;return{r:Math.round(Math.max(0,Math.min(1,Be(d)))*255),g:Math.round(Math.max(0,Math.min(1,Be(b)))*255),b:Math.round(Math.max(0,Math.min(1,Be(c)))*255)}}function Ee(e){let o=Go(e),n=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:n,h:n<1e-4?0:r}}function Ge(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),r=e.c*Math.sin(o);return Ho(e.l,n,r)}function Oo(e,o,n){let r=Ge({l:e,c:o,h:n});if(to(r))return{l:e,c:o,h:n};let s=0,i=o;for(let u=0;u<20;u++){let a=(s+i)/2;r=Ge({l:e,c:a,h:n}),to(r)?s=a:i=a}return{l:e,c:s,h:n}}function to(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function we(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Oe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var no=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return He({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,r=e.y*no,s=e.z*359,i=Oo(n,r,s);return Ge(i)}}function de(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ge(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Ee(e);return{x:n.l,y:Math.min(n.c/no,1),z:n.h/359}}}function ro(e,o){let n=oo[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ao(e,o,n,r,s,i=!1){let u;e===0?u={x:r,y:o,z:n}:e===1?u={x:o,y:r,z:n}:u={x:o,y:n,z:r};let a=re(u,s);return i?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var io={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},so={sizeX:1,sizeY:1,sizeZ:1,radius:0};function _e(e,o,n){let r=(e.x-.5)*n.sizeX,s=(e.y-.5)*n.sizeY,i=(e.z-.5)*n.sizeZ,u=Math.cos(o.rotXRad),a=Math.sin(o.rotXRad),t=r,d=s*u-i*a,b=s*a+i*u,c=Math.cos(o.rotYRad),m=Math.sin(o.rotYRad),v=t*c-b*m,A=d,p=t*m+b*c,w=Math.cos(o.rotZRad),x=Math.sin(o.rotZRad),C=v*w-A*x,M=v*x+A*w;return{x:C,y:M,z:p}}function De(e,o,n,r,s){let i=_e(e,r,s);return{x:n.x+i.x*o*1.6*r.zoom,y:n.y-i.y*o*1.6*r.zoom}}var xe=["#ef4444","#22c55e","#3b82f6"];function lo(e,o,n,r,s,i){let u=x=>De(x,o,n,r,s),a=u({x:0,y:0,z:0});e.save();let t=1.28,d=[{p:{x:t,y:0,z:0},name:"X",color:xe[0],visible:i.vertexX},{p:{x:0,y:t,z:0},name:"Y",color:xe[1],visible:i.vertexY},{p:{x:0,y:0,z:t},name:"Z",color:xe[2],visible:i.vertexZ}];for(let x=0;x<d.length;x++){if(!d[x].visible)continue;let C=u(d[x].p),M=d[x].color;e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(C.x,C.y),e.strokeStyle=M,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(C.x,C.y,3.5,0,Math.PI*2),e.fillStyle=M,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let k=C.x-a.x,z=C.y-a.y,R=Math.hypot(k,z)||1,G=12,F=C.x+k/R*G,Q=C.y+z/R*G;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=M,e.fillText(d[x].name,F,Q)}(i.vertexX||i.vertexY||i.vertexZ)&&(e.beginPath(),e.arc(a.x,a.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let b=u({x:.5,y:.5,z:.5}),c=.35,m=[{from:{x:-c,y:.5,z:.5},to:{x:1+c,y:.5,z:.5},color:xe[0],name:"Cx",visible:i.centerX},{from:{x:.5,y:-c,z:.5},to:{x:.5,y:1+c,z:.5},color:xe[1],name:"Cy",visible:i.centerY},{from:{x:.5,y:.5,z:-c},to:{x:.5,y:.5,z:1+c},color:xe[2],name:"Cz",visible:i.centerZ}],v=!1;for(let x=0;x<m.length;x++){if(!m[x].visible)continue;v=!0;let C=u(m[x].from),M=u(m[x].to);e.beginPath(),e.moveTo(C.x,C.y),e.lineTo(M.x,M.y),e.strokeStyle=m[x].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(C.x,C.y,3,0,Math.PI*2),e.arc(M.x,M.y,3,0,Math.PI*2),e.fillStyle=m[x].color,e.fill()}v&&(e.beginPath(),e.arc(b.x,b.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let A=i.angleGuides!==void 0?i.angleGuides:i.yawArc||i.pitchArc||!1,p=Math.round(r.rotZRad*180/Math.PI*10)/10,w=Math.round(r.rotXRad*180/Math.PI*10)/10;if(A){e.beginPath();let x=36;for(let M=0;M<=x;M++){let k=M/x*Math.PI*2,z={x:.5+Math.cos(k)*.75,y:.5+Math.sin(k)*.75,z:0},R=u(z);M===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.beginPath();let C=20;for(let M=0;M<=C;M++){let k=-Math.PI/2+M/C*Math.PI,z={x:.5+Math.cos(k)*.75,y:.5,z:.5+Math.sin(k)*.75},R=u(z);M===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${p.toFixed(1)}\xB0`,12,n.y*2-24),e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${w.toFixed(1)}\xB0`,12,n.y*2-10)}e.restore()}var Xe=!1;function uo(e){Xe=e}var I={...io},oe={...so};function Re(e,o){I.rotZRad=-30*(Math.PI/180)+e,I.rotXRad=20*(Math.PI/180)+o}function Ze(){return{yaw:I.rotZRad- -30*(Math.PI/180),pitch:I.rotXRad-20*(Math.PI/180)}}function fo(){I.rotXRad=20*(Math.PI/180),I.rotYRad=0,I.rotZRad=-30*(Math.PI/180)}function bo(){return{rotXDeg:Math.round(I.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(I.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(I.rotZRad*180/Math.PI*10)/10}}function mo(e,o,n){I.rotXRad=e*Math.PI/180,I.rotYRad=o*Math.PI/180,I.rotZRad=n*Math.PI/180}function ho(){return{yawDeg:Math.round(I.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(I.rotXRad*180/Math.PI*10)/10}}function go(e,o){I.rotZRad=e*Math.PI/180,I.rotXRad=o*Math.PI/180}function xo(e){I.zoom=Math.max(.1,Math.min(3,e))}function po(){return I.zoom}function yo(e,o,n){oe.sizeX=Math.max(.1,Math.min(2.5,e)),oe.sizeY=Math.max(.1,Math.min(2.5,o)),oe.sizeZ=Math.max(.1,Math.min(2.5,n))}function vo(){return{sizeX:oe.sizeX,sizeY:oe.sizeY,sizeZ:oe.sizeZ}}function Co(e){oe.radius=Math.max(0,Math.min(.25,e))}function Mo(){return oe.radius||0}function X(e,o,n){return De(e,o,n,I,oe)}function Te(e){return _e(e,I,oe)}function _o(e){let{x:o,y:n,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:r},{x:o,y:n,z:0},{x:o,y:0,z:r},{x:0,y:n,z:r},{x:o,y:n,z:r}]}var U=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Xo=64,ko={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Ao(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*1*n,e.style.width=`${o}px`,e.style.height=`${o*1}px`;let r=e.getContext("2d");return r.scale(n,n),{ctx:r,scale:o*.26,center:{x:o/2,y:o*.5},width:o,height:o*1}}var Se={...Ie};function wo(e){Se={...Se,...e}}function Ro(){return{...Se}}var co=[{edge:[0,1],faces:[3,5]},{edge:[1,4],faces:[3,1]},{edge:[4,2],faces:[3,2]},{edge:[2,0],faces:[3,4]},{edge:[3,5],faces:[0,5]},{edge:[5,7],faces:[0,1]},{edge:[7,6],faces:[0,2]},{edge:[6,3],faces:[0,4]},{edge:[0,3],faces:[4,5]},{edge:[1,5],faces:[1,5]},{edge:[4,7],faces:[1,2]},{edge:[2,6],faces:[4,2]}];function Zo(e,o,n,r,s){if(!s.showFront&&!s.showBack)return;let i=[r.x,r.y,r.z],u=new Array(U.length).fill(!1);for(let a=0;a<U.length;a++){let t=U[a],d=t.fixedValue*i[t.fixedAxis],b=i[t.uAxis],c=i[t.vAxis],m={x:0,y:0,z:0},v=["x","y","z"];m[v[t.fixedAxis]]=d,m[v[t.uAxis]]=b*.5,m[v[t.vAxis]]=c*.5;let A=Te(m),p={x:m.x+t.normal.x*.1,y:m.y+t.normal.y*.1,z:m.z+t.normal.z*.1};Te(p).z-A.z>0&&(u[a]=!0)}if(e.save(),s.showBack){e.lineWidth=s.backWidth,s.backDashed?e.setLineDash([4,3]):e.setLineDash([]),e.strokeStyle=s.backColor,e.globalAlpha=s.backOpacity;for(let a of co){let[t,d]=a.faces;if(!(u[t]||u[d])){let[c,m]=a.edge;e.beginPath(),e.moveTo(o[c].x,o[c].y),e.lineTo(o[m].x,o[m].y),e.stroke()}}}if(s.showFront){e.lineWidth=s.frontWidth,s.frontDashed?e.setLineDash([4,3]):e.setLineDash([]),e.strokeStyle=s.frontColor,e.globalAlpha=s.frontOpacity;for(let a of co){let[t,d]=a.faces;if(u[t]||u[d]){let[c,m]=a.edge;e.beginPath(),e.moveTo(o[c].x,o[c].y),e.lineTo(o[m].x,o[m].y),e.stroke()}}}e.restore()}function Vo(e,o,n,r,s,i,u=!0,a=null){let{ctx:t,scale:d,center:b,width:c,height:m}=e;t.save(),t.clearRect(0,0,c,m);let v=_o(o),A=v.map(w=>X(w,d,b));if(t.save(),t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=8,t.shadowOffsetX=0,t.shadowOffsetY=2,Yo(t,A,v,o,s,i.viewRotating),t.restore(),Zo(t,A,v,o,Se),lo(t,d,b,I,oe,typeof u=="boolean"?u?ze:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:u),r>=0){let w=re(n,s),x=Xe?{r:255-w.r,g:255-w.g,b:255-w.b}:w,C=X(n,d,b);a&&a.active&&Uo(t,C,a.rgb,a.alpha),Wo(t,C,x)}t.restore()}function Yo(e,o,n,r,s,i){let u=[r.x,r.y,r.z],a=[];for(let t=0;t<U.length;t++){let d=U[t],b=d.fixedValue*u[d.fixedAxis],c=u[d.uAxis],m=u[d.vAxis];if(c<.002&&m<.002)continue;let v={x:0,y:0,z:0},A=["x","y","z"];v[A[d.fixedAxis]]=b,v[A[d.uAxis]]=c*.5,v[A[d.vAxis]]=m*.5;let p=Te(v),w={x:v.x+d.normal.x*.1,y:v.y+d.normal.y*.1,z:v.z+d.normal.z*.1};if(Te(w).z-p.z>0){let M=d.quad.map(k=>o[k]);a.push({face:d,corners:M,fixedVal:b,uMax:c,vMax:m,depth:p.z})}}a.sort((t,d)=>t.depth-d.depth);for(let t of a)No(e,t.corners,t.face.fixedAxis,t.fixedVal,t.uMax,t.vMax,s)}function No(e,o,n,r,s,i,u){let a=Xo,t=document.createElement("canvas");t.width=a,t.height=a;let d=t.getContext("2d"),b=d.createImageData(a,a),c=b.data;for(let Q=0;Q<a;Q++)for(let O=0;O<a;O++){let ue=O/(a-1)*s,Z=Q/(a-1)*i,se=ao(n,ue,Z,r,u,Xe),Y=(Q*a+O)*4;c[Y]=se.r,c[Y+1]=se.g,c[Y+2]=se.b,c[Y+3]=255}d.putImageData(b,0,0);let m=o[0],v=o[1],A=o[2],p=o[3],w=v.x-m.x,x=v.y-m.y,C=p.x-m.x,M=p.y-m.y;e.save(),e.beginPath(),e.moveTo(m.x,m.y),e.lineTo(v.x,v.y),e.lineTo(A.x,A.y),e.lineTo(p.x,p.y),e.closePath(),e.clip();let k=2/a,z=m.x-w*k-C*k,R=m.y-x*k-M*k,G=1+2*k,F=1+2*k;e.transform(w*G/a,x*G/a,C*F/a,M*F/a,z,R),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}var te=30,ie=13;function Uo(e,o,n,r){let s=(te+ie)/2,i=5,u=Math.floor(o.x/i)*i,a=Math.floor(o.y/i)*i,t=te*2+i*2,d=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,te,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let w=-1;w*i<=t;w++)for(let x=-1;x*i<=t;x++)e.fillStyle=(w+x)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+w*i,a+x*i,i,i);let b="rgba("+n.r+","+n.g+","+n.b+",0)",c="rgba("+n.r+","+n.g+","+n.b+",1)",m=e;if(typeof m.createConicGradient=="function"){let w=m.createConicGradient(-Math.PI/2,o.x,o.y);w.addColorStop(0,b),w.addColorStop(1,c),e.fillStyle=w,e.fillRect(u-te,a-te,t,t)}else for(let x=0;x<36;x++){let C=-Math.PI/2+x/36*Math.PI*2,M=-Math.PI/2+(x+1)/36*Math.PI*2,k=(x+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(C)*ie,o.y+Math.sin(C)*ie),e.arc(o.x,o.y,te,C,M),e.arc(o.x,o.y,ie,M,C,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+k.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,te,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-te-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let v=d*Math.PI*2,A=o.x+s*Math.sin(v),p=o.y-s*Math.cos(v);e.beginPath(),e.arc(A,p,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Wo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function zo(e,o,n,r){let s=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return X(s[e],n,r)}function Ye(){let e={x:0,y:0};return[X({x:1,y:0,z:0},1,e),X({x:0,y:1,z:0},1,e),X({x:0,y:0,z:1},1,e)].map(n=>{let r=Math.sqrt(n.x*n.x+n.y*n.y);return r>0?{x:n.x/r,y:n.y/r}:{x:0,y:0}})}function pe(e,o,n,r,s){let i=U[e],u=[n.x,n.y,n.z],a=u[i.uAxis],t=u[i.vAxis];if(a<.002||t<.002)return null;let d={x:0,y:0,z:0},b=["x","y","z"];d[b[i.fixedAxis]]=i.fixedValue*u[i.fixedAxis];let c={...d};c[b[i.uAxis]]=a;let m={...d};m[b[i.vAxis]]=t;let v=X(d,r,s),A=X(c,r,s),p=X(m,r,s),w=A.x-v.x,x=A.y-v.y,C=p.x-v.x,M=p.y-v.y,k=w*M-x*C;if(Math.abs(k)<1e-6)return null;let z=o.x-v.x,R=o.y-v.y,G=(z*M-R*C)/k,F=(R*w-z*x)/k;return G<-.05||G>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,G)),t:Math.max(0,Math.min(1,F))}}function Eo(e,o,n,r,s){let i=U[e],u=[n.x,n.y,n.z],a=u[i.uAxis],t=u[i.vAxis];if(a<.002||t<.002)return null;let d={x:0,y:0,z:0},b=["x","y","z"];d[b[i.fixedAxis]]=i.fixedValue*u[i.fixedAxis];let c={...d};c[b[i.uAxis]]=a;let m={...d};m[b[i.vAxis]]=t;let v=X(d,r,s),A=X(c,r,s),p=X(m,r,s),w=A.x-v.x,x=A.y-v.y,C=p.x-v.x,M=p.y-v.y,k=w*M-x*C;if(Math.abs(k)<1e-6)return null;let z=o.x-v.x,R=o.y-v.y,G=(z*M-R*C)/k,F=(R*w-z*x)/k;return{s:Math.max(0,Math.min(1,G)),t:Math.max(0,Math.min(1,F))}}var Do=22;function To(e,o,n,r,s,i,u,a,t,d,b,c,m,v,A){let p={...ko};function w(f){let g=e.getBoundingClientRect();return{x:f.clientX-g.left,y:f.clientY-g.top}}let x=!1,C=!1,M=!1,k=!1,z=!1,R=null,G=600,F=null;function Q(){O(),F=setTimeout(ue,G)}function O(){F!==null&&(clearTimeout(F),F=null)}function ue(){F=null,p.alphaMode=!1,ke(),h(),z=!0,p.viewRotating=!0,R=null,t()}let Z=14,se=800,Y=null;function H(){$(),Y=setTimeout(ye,se)}function $(){Y!==null&&(clearTimeout(Y),Y=null),O()}function ye(){Y=null,p.alphaMode=!0,h(),ke(),C=!1,t()}function ne(f){let g=m();return Math.hypot(f.x-g.x,f.y-g.y)}function Le(f){let g=m();return(Math.atan2(f.x-g.x,-(f.y-g.y))+Math.PI*2)%(Math.PI*2)}function le(f){b(Le(f)/(Math.PI*2)),t()}function ve(f){let g=ne(f);return g>=ie-4&&g<=te+6}function ce(f){let g=o(),V=u(),S=a();for(let D=0;D<3;D++){let P=zo(D,g,V,S),B=f.x-P.x,N=f.y-P.y;if(B*B+N*N<=Do*Do)return D}return-1}function K(f){let g=o(),V=u(),S=a();for(let D=U.length-1;D>=0;D--){let P=pe(D,f,g,V,S);if(P)return{faceIndex:D,...P}}return null}let J=-1,q={x:0,y:0},Ve=0;function Ce(f,g){J=f,q=g,Ve=o()[["x","y","z"][f]],p.draggingAxisHandle=f,e.style.cursor="grabbing",t()}function l(f){if($(),J<0)return;let g=f.x-q.x,V=f.y-q.y,D=Ye()[J],P=u(),N=(g*D.x+V*D.y)/P,ee=Math.max(0,Math.min(1,Ve+N)),W=o(),_=["x","y","z"],he={...W,[_[J]]:ee};n(he);let Ae=r(),Je=i(),qe=Je>=0?U[Je]:null,Pe={...Ae};qe&&J===qe.fixedAxis?Pe[_[J]]=ee:Pe[_[J]]=Math.min(Ae[_[J]],ee),s(Pe,i()),t()}function h(){J=-1,p.draggingAxisHandle=-1}let y=-1,E=null,L=null,T=!1;function Me(f,g,V,S){y=f,p.draggingFace=f,E=null,L=null,T=!1,S&&(T=!0,L={s:g,t:V}),be(f,g,V),e.style.cursor="crosshair",t()}function fe(f,g,V){if($(),y<0)return;let S=o(),D=u(),P=a(),B=pe(y,f,S,D,P),N=y;if(!B&&!V){for(let _=U.length-1;_>=0;_--)if(_!==y&&(B=pe(_,f,S,D,P),B)){N=_;break}}if(!B&&V&&(B=Eo(y,f,S,D,P),N=y),!B){t();return}N!==y&&(y=N,p.draggingFace=N,E=null,T=!1,L=null);let{s:ee,t:W}=B;if(g&&L){if(T){let _=Math.abs(ee-L.s),he=Math.abs(W-L.t),Ae=.02;(_>Ae||he>Ae)&&(E=_>=he?"u":"v",T=!1)}E==="u"?W=L.t:E==="v"&&(ee=L.s)}else g||(E=null,T=!1,L=null);be(N,ee,W),t()}function be(f,g,V){let S=U[f],D=o(),P=["x","y","z"],B={...r()};B[P[S.uAxis]]=g*D[P[S.uAxis]],B[P[S.vAxis]]=V*D[P[S.vAxis]],B[P[S.fixedAxis]]=S.fixedValue*D[P[S.fixedAxis]],s(B,f)}function ke(){y=-1,p.draggingFace=-1,E=null,T=!1,L=null}let ae=null,me=!1,j=null;function Ne(f){M=!0;let g=w(f);if(ae=g,me=!1,j=null,d()&&p.alphaMode){if(ne(g)<=Z){p.alphaMode=!1,t();return}if(ve(g)){f.preventDefault(),x=!0,le(g);return}p.alphaMode=!1,t();return}let V=K(g);V&&(j={faceIndex:V.faceIndex,s:V.s,t:V.t}),f.preventDefault(),z=!0,R=g,p.viewRotating=!0,d()&&ne(g)<=Z&&H(),t()}function Ue(f){let g=w(f);if(x){f.preventDefault(),le(g);return}if(z){if(f.preventDefault(),!R){R=g;return}let V=g.x-R.x,S=g.y-R.y;Math.hypot(V,S)>2&&(me=!0,$());let D=Ze();Re(D.yaw+V*.012,D.pitch+S*.012),R=g,t();return}if(M&&p.alphaMode&&ve(g)){f.preventDefault(),x=!0,le(g);return}e.style.cursor="grab"}function We(f){$(),M=!1,x=!1,C=!1,!me&&j&&be(j.faceIndex,j.s,j.t),z&&(z=!1,p.viewRotating=!1,R=null,t()),e.style.cursor="grab"}function $e(f){if(f.touches.length!==1)return;k=!0;let g=w(f.touches[0]);if(me=!1,j=null,d()&&p.alphaMode){if(ne(g)<=Z){p.alphaMode=!1,t();return}if(ve(g)){f.preventDefault(),x=!0,le(g);return}p.alphaMode=!1,t();return}let V=K(g);V&&(j={faceIndex:V.faceIndex,s:V.s,t:V.t}),f.preventDefault(),z=!0,R=g,p.viewRotating=!0,d()&&ne(g)<=Z&&H(),t()}function Ke(f){if(f.touches.length!==1)return;let g=w(f.touches[0]);if(x)f.preventDefault(),le(g);else if(k&&p.alphaMode&&ve(g))f.preventDefault(),x=!0,le(g);else if(z){if(f.preventDefault(),!R){R=g;return}let V=g.x-R.x,S=g.y-R.y;Math.hypot(V,S)>2&&(me=!0,$());let D=Ze();Re(D.yaw+V*.012,D.pitch+S*.012),R=g,t()}}function je(f){$(),k=!1,x=!1,!me&&j&&be(j.faceIndex,j.s,j.t),z&&(z=!1,p.viewRotating=!1,R=null,t())}function Qe(f){if(f.key==="1"){Re(Math.PI/4,0),t();return}if(f.key==="0"){fo(),t();return}if(f.key==="2"){Re(.95,-.54),t();return}if(p.alphaMode){if(f.key==="Escape"){p.alphaMode=!1,t();return}if(f.key==="ArrowUp"||f.key==="ArrowRight"){f.preventDefault(),b(Math.min(1,c()+(f.shiftKey?.08:.02))),t();return}if(f.key==="ArrowDown"||f.key==="ArrowLeft"){f.preventDefault(),b(Math.max(0,c()-(f.shiftKey?.08:.02))),t();return}}let g=f.shiftKey?.04:.004,V=r(),S=o(),D=Ye(),P=0,B=0;switch(f.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":B=-1;break;case"ArrowDown":B=1;break;default:return}f.preventDefault();let N={...V},ee=["x","y","z"];for(let W=0;W<3;W++){let _=P*D[W].x+B*D[W].y;if(Math.abs(_)>.3){let he=V[ee[W]]+g*Math.sign(_);N[ee[W]]=Math.max(0,Math.min(S[ee[W]],he))}}s(N,i()),t()}e.addEventListener("mousedown",Ne),window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",We),e.addEventListener("touchstart",$e,{passive:!1}),e.addEventListener("touchmove",Ke,{passive:!1}),e.addEventListener("touchend",je),e.addEventListener("keydown",Qe),e.setAttribute("tabindex","0");function Bo(){$(),e.removeEventListener("mousedown",Ne),window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",We),e.removeEventListener("touchstart",$e),e.removeEventListener("touchmove",Ke),e.removeEventListener("touchend",je),e.removeEventListener("keydown",Qe)}return{state:p,destroy:Bo}}function So(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Lo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Po(e,o,n){if(n.showModeToggle){let r=document.createElement("div");r.className="box-picker-mode-toggle";let s=b=>{let c=document.createElement("button");return c.textContent=b.toUpperCase(),c.addEventListener("click",()=>o.switchMode(b)),r.appendChild(c),c},i=s("oklch"),u=s("rgb"),a=s("hsb"),t=()=>{let b=o.mode();u.classList.toggle("active",b==="rgb"),a.classList.toggle("active",b==="hsb"),i.classList.toggle("active",b==="oklch")};t();let d=o.switchMode;o._markActive=t,e.appendChild(r)}if(n.showInputs){let r=document.createElement("input");r.className="box-picker-hex",r.type="text",r.spellcheck=!1,r.addEventListener("change",()=>{let c=r.value;/^#?[0-9a-f]{6}$/i.test(c)?o.onHexInput(c):o.onHexInput("")}),r.addEventListener("click",()=>{So(o.getRgbForCopy()?"#"+$o(o.getRgbForCopy()):"#ffffff"),Lo(r)});let s=document.createElement("div");s.className="box-picker-channels";let i=[],u=[],a=["R","G","B"];for(let c=0;c<3;c++){let m=document.createElement("div");m.className="box-picker-channel";let v=document.createElement("label");v.textContent=a[c];let A=document.createElement("input");A.type="text",A.inputMode="numeric",m.appendChild(v),m.appendChild(A),s.appendChild(m),i.push(A),u.push(v),A.addEventListener("change",()=>{let p=parseFloat(A.value);isNaN(p)||o.onChannelInput(c,p,255)}),A.addEventListener("click",()=>{let p=o.getRgbForCopy();So(`${p.r}, ${p.g}, ${p.b}`),Lo(A)})}let t=document.createElement("div");t.className="box-picker-hexrow";let d=document.createElement("div");d.className="box-picker-hexwrap";let b=document.createElement("label");b.textContent="Hex",d.appendChild(b),d.appendChild(r),t.appendChild(s),t.appendChild(d),e.appendChild(t),e._inputs={hexInput:r,inputs:i,labels:u}}if(n.showCorners){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let i=Math.floor(Math.random()*256),u=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:i,g:u,b:a})}),e.appendChild(r);let s=document.createElement("button");s.className="box-corner-btn box-corner-right",s.title="Reset",s.setAttribute("aria-label","Reset"),s.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',s.addEventListener("click",()=>o.onReset()),e.appendChild(s)}}function $o(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Io=`.box-picker {\r
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
`;var kt=Qo,Fo=!1;function jo(){if(Fo||typeof document>"u")return;Fo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Io,document.head.appendChild(e)}function Qo(e,o={}){let n=o.size??300,r=o.controls??!0,s=o.showInputs??!1,i=o.showModeToggle??!1,u=o.showCorners??!1,a={mode:()=>t,switchMode:l=>ue(l),onHexInput:l=>{let h=Oe(l);h?(c=de(O?{r:255-h.r,g:255-h.g,b:255-h.b}:h,t),b={x:Math.max(b.x,c.x),y:Math.max(b.y,c.y),z:Math.max(b.z,c.z)},q(),K(),H()):K()},onChannelInput:(l,h,y)=>{let E=Math.max(0,Math.min(y,h)),L=["x","y","z"],T=E/y;if(O){let Me={...c,[L[l]]:T},fe=re(Me,t);c=de({r:255-fe.r,g:255-fe.g,b:255-fe.b},t)}else c={...c,[L[l]]:T};T>b[L[l]]&&(b={...b,[L[l]]:T}),q(),K(),H()},getRgbForCopy:()=>re(c,t),onRandom:l=>Ce(l),onReset:()=>Ce({r:0,g:0,b:0})},t=o.mode??"rgb",d=o.initialColor?de(o.initialColor,t):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},c={...d},m=0,v=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function p(l){let h=Math.max(0,Math.min(1,l));h!==A&&(A=h,q(),K(),H())}function w(l){let h=ce(),y=ge(h);y.s=Math.max(0,Math.min(100,l*100));let E=He(y);Ce(O?{r:255-E.r,g:255-E.g,b:255-E.b}:E)}let x=new Set;jo();let C=document.createElement("div");C.className="box-picker";let M=document.createElement("canvas");M.style.cursor="grab",C.appendChild(M);let k=Ao(M,n),z={...ze},R=!0,G=null,F=document.createElement("div");F.className="box-picker-controls",G=document.createElement("div"),G.className="box-picker-swatch",F.appendChild(G),C.appendChild(F),(s||i||u)&&Po(F,a,{showInputs:s,showModeToggle:i,showCorners:u}),e.appendChild(C);let Q=To(M,()=>b,l=>{b=l},()=>c,(l,h)=>{c=l,m=h,q(),K()},()=>m,()=>k.scale,()=>k.center,H,v,p,()=>A,()=>X(c,k.scale,k.center),w,()=>ge(ce()).s/100),O=!1;M.addEventListener("dblclick",()=>{O=!O,uo(O),q(),K(),H()});function ue(l){if(l===t)return;let h=re(c,t),y={...c},E={...b};t=l;let L=de(h,t),T={x:1,y:1,z:1};c=L,b=T,se(y,L,E,T,300),K()}let Z=null;function se(l,h,y,E,L){Z!==null&&cancelAnimationFrame(Z);let T=performance.now();function Me(fe){let be=fe-T,ke=Math.min(1,be/L),ae=1-Math.pow(1-ke,3);c={x:l.x+(h.x-l.x)*ae,y:l.y+(h.y-l.y)*ae,z:l.z+(h.z-l.z)*ae},b={x:y.x+(E.x-y.x)*ae,y:y.y+(E.y-y.y)*ae,z:y.z+(E.z-y.z)*ae},$(),q(),ke<1?Z=requestAnimationFrame(Me):Z=null}Z=requestAnimationFrame(Me)}let Y=!1;function H(){Y||(Y=!0,requestAnimationFrame(()=>{Y=!1,$()}))}function $(){Vo(k,b,c,m,t,Q.state,z,{active:Q.state.alphaMode,alpha:A,rgb:ce()})}function ye(l,h,y){return Math.round(l+(h-l)*y)}function ne(l,h){let y=h>0?255:0,E=Math.abs(h);return we({r:ye(l.r,y,E),g:ye(l.g,y,E),b:ye(l.b,y,E)})}function Le(l,h){let y=Oe(h)||{r:128,g:128,b:128},E=ne(y,.35),L=ne(y,0),T=ne(y,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${E}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${T}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function le(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function ve(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function ce(){let l=re(c,t);return O?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function K(){if(!r)return;let l=ce(),h=we(l);G&&Le(G,h);let y=C.querySelector(".box-picker-hex");y&&(y.value=h),J(),C._updateModeButtons&&C._updateModeButtons()}function J(){if(!r)return;let l=eo[t],h=O?de(ce(),t):c,y=ro(h,t),E=C.querySelectorAll(".box-picker-channel input"),L=C.querySelectorAll(".box-picker-channel label");for(let T=0;T<E.length;T++)L[T].textContent=l[T],L[T].style.color="",L[T].style.textShadow="none",E[T].value=String(y[T])}function q(){let l=ce(),h={rgb:l,hsb:ge(l),oklch:Ee(l),hex:we(l),alpha:A};for(let y of x)y(h)}function Ve(){let l=re(c,t);return{rgb:l,hsb:ge(l),oklch:Ee(l),hex:we(l)}}K(),$();let Ce=l=>{c=de(l,t),b={x:Math.max(b.x,c.x),y:Math.max(b.y,c.y),z:Math.max(b.z,c.z)};let h=X(c,k.scale,k.center);m=-1;for(let y=U.length-1;y>=0;y--)if(pe(y,h,b,k.scale,k.center)){m=y;break}q(),K(),H()};return{getColor:Ve,getMode:()=>t,setColor:Ce,setAlpha:p,getAlpha:()=>A,setMode(l){ue(l)},getRotation:()=>ho(),setRotation:(l,h)=>{go(l,h),H()},getAxisRotation:()=>bo(),setAxisRotation:(l,h,y)=>{mo(l,h,y),H()},getGuides:()=>({...z}),setGuides:l=>{z={...z,...l},H()},toggleAllGuides:l=>{let h=l!==void 0?l:!R;R=h,z={vertexX:h,vertexY:h,vertexZ:h,centerX:h,centerY:h,centerZ:h,angleGuides:h,yawArc:h,pitchArc:h},H()},setZoom:l=>{xo(l),H()},getZoom:()=>po(),setDimensions:(l,h,y)=>{yo(l,h,y),H()},getDimensions:()=>vo(),setRadius:l=>{Co(l),H()},getRadius:()=>Mo(),getEdgeStyle:()=>Ro(),setEdgeStyle:l=>{wo(l),H()},on(l,h){x.add(h)},off(l,h){x.delete(h)},destroy(){Q.destroy(),Z!==null&&cancelAnimationFrame(Z),e.removeChild(C)}}}export{Ie as DEFAULT_EDGE_CONFIG,ze as DEFAULT_GUIDES,Qo as createBoxColorPicker,kt as createColorPicker,vo as getBoxDimensions,Mo as getBoxRadius,ho as getCameraAnglesDeg,Ro as getEdgeStyle,bo as getRotationDeg,po as getZoomMultiplier,yo as setBoxDimensions,uo as setBoxInvert,Co as setBoxRadius,go as setCameraAnglesDeg,wo as setEdgeStyle,mo as setRotationDeg,xo as setZoomMultiplier};
