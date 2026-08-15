var Ie={showFront:!0,showBack:!0,frontWidth:1.5,backWidth:1,frontDashed:!1,backDashed:!0,frontColor:"#ffffff",backColor:"#ffffff",frontOpacity:.65,backOpacity:.25},Ee={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,angleGuides:!0,yawArc:!0,pitchArc:!0},eo={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},oo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ge(e){let o=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(o,n,r),s=Math.min(o,n,r),u=i-s,a=0;u!==0&&(i===o?a=((n-r)/u+6)%6:i===n?a=(r-o)/u+2:a=(o-n)/u+4,a*=60);let t=i===0?0:u/i*100,d=i*100;return{h:a,s:t,b:d}}function He(e){let o=e.h,n=e.s/100,r=e.b/100,i=r*n,s=i*(1-Math.abs(o/60%2-1)),u=r-i,a,t,d;return o<60?(a=i,t=s,d=0):o<120?(a=s,t=i,d=0):o<180?(a=0,t=i,d=s):o<240?(a=0,t=s,d=i):o<300?(a=s,t=0,d=i):(a=i,t=0,d=s),{r:Math.round((a+u)*255),g:Math.round((t+u)*255),b:Math.round((d+u)*255)}}function Fe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ge(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Fo(e){let o=Fe(e.r/255),n=Fe(e.g/255),r=Fe(e.b/255),i=.4122214708*o+.5363325363*n+.0514459929*r,s=.2119034982*o+.6806995451*n+.1073969566*r,u=.0883024619*o+.2817188376*n+.6299787005*r,a=Math.cbrt(i),t=Math.cbrt(s),d=Math.cbrt(u);return{L:.2104542553*a+.793617785*t-.0040720468*d,a:1.9779984951*a-2.428592205*t+.4505937099*d,b:.0259040371*a+.7827717662*t-.808675766*d}}function Go(e,o,n){let r=e+.3963377774*o+.2158037573*n,i=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,u=r*r*r,a=i*i*i,t=s*s*s,d=4.0767416621*u-3.3077115913*a+.2309699292*t,b=-1.2684380046*u+2.6097574011*a-.3413193965*t,c=-.0041960863*u-.7034186147*a+1.707614701*t;return{r:Math.round(Math.max(0,Math.min(1,Ge(d)))*255),g:Math.round(Math.max(0,Math.min(1,Ge(b)))*255),b:Math.round(Math.max(0,Math.min(1,Ge(c)))*255)}}function ze(e){let o=Fo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:n,h:n<1e-4?0:r}}function Be(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),r=e.c*Math.sin(o);return Go(e.l,n,r)}function Bo(e,o,n){let r=Be({l:e,c:o,h:n});if(to(r))return{l:e,c:o,h:n};let i=0,s=o;for(let u=0;u<20;u++){let a=(i+s)/2;r=Be({l:e,c:a,h:n}),to(r)?i=a:s=a}return{l:e,c:i,h:n}}function to(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function we(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Oe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var no=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return He({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,r=e.y*no,i=e.z*359,s=Bo(n,r,i);return Be(s)}}function de(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ge(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ze(e);return{x:n.l,y:Math.min(n.c/no,1),z:n.h/359}}}function ro(e,o){let n=oo[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ao(e,o,n,r,i,s=!1){let u;e===0?u={x:r,y:o,z:n}:e===1?u={x:o,y:r,z:n}:u={x:o,y:n,z:r};let a=ne(u,i);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var io={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},so={sizeX:1,sizeY:1,sizeZ:1};function _e(e,o,n){let r=(e.x-.5)*n.sizeX,i=(e.y-.5)*n.sizeY,s=(e.z-.5)*n.sizeZ,u=Math.cos(o.rotZRad),a=Math.sin(o.rotZRad),t=r*u-i*a,d=r*a+i*u,b=s,c=Math.cos(o.rotYRad),m=Math.sin(o.rotYRad),C=t*c+b*m,A=d,p=-t*m+b*c,w=Math.cos(o.rotXRad),x=Math.sin(o.rotXRad),v=C,M=p*w-A*x,k=p*x+A*w;return{x:v,y:M,z:k}}function Te(e,o,n,r,i){let s=_e(e,r,i);return{x:n.x+s.x*o*1.6*r.zoom,y:n.y-s.y*o*1.6*r.zoom}}var xe=["#ef4444","#22c55e","#3b82f6"];function lo(e,o,n,r,i,s){let u=x=>Te(x,o,n,r,i),a=u({x:0,y:0,z:0});e.save();let t=1.28,d=[{p:{x:t,y:0,z:0},name:"X",color:xe[0],visible:s.vertexX},{p:{x:0,y:t,z:0},name:"Y",color:xe[1],visible:s.vertexY},{p:{x:0,y:0,z:t},name:"Z",color:xe[2],visible:s.vertexZ}];for(let x=0;x<d.length;x++){if(!d[x].visible)continue;let v=u(d[x].p),M=d[x].color;e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(v.x,v.y),e.strokeStyle=M,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(v.x,v.y,3.5,0,Math.PI*2),e.fillStyle=M,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let k=v.x-a.x,E=v.y-a.y,R=Math.hypot(k,E)||1,B=12,F=v.x+k/R*B,Q=v.y+E/R*B;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=M,e.fillText(d[x].name,F,Q)}(s.vertexX||s.vertexY||s.vertexZ)&&(e.beginPath(),e.arc(a.x,a.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let b=u({x:.5,y:.5,z:.5}),c=.35,m=[{from:{x:-c,y:.5,z:.5},to:{x:1+c,y:.5,z:.5},color:xe[0],name:"Cx",visible:s.centerX},{from:{x:.5,y:-c,z:.5},to:{x:.5,y:1+c,z:.5},color:xe[1],name:"Cy",visible:s.centerY},{from:{x:.5,y:.5,z:-c},to:{x:.5,y:.5,z:1+c},color:xe[2],name:"Cz",visible:s.centerZ}],C=!1;for(let x=0;x<m.length;x++){if(!m[x].visible)continue;C=!0;let v=u(m[x].from),M=u(m[x].to);e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(M.x,M.y),e.strokeStyle=m[x].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(v.x,v.y,3,0,Math.PI*2),e.arc(M.x,M.y,3,0,Math.PI*2),e.fillStyle=m[x].color,e.fill()}C&&(e.beginPath(),e.arc(b.x,b.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let A=s.angleGuides!==void 0?s.angleGuides:s.yawArc||s.pitchArc||!1,p=Math.round(r.rotZRad*180/Math.PI*10)/10,w=Math.round(r.rotXRad*180/Math.PI*10)/10;if(A){e.beginPath();let x=36;for(let M=0;M<=x;M++){let k=M/x*Math.PI*2,E={x:.5+Math.cos(k)*.75,y:.5+Math.sin(k)*.75,z:0},R=u(E);M===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.beginPath();let v=20;for(let M=0;M<=v;M++){let k=-Math.PI/2+M/v*Math.PI,E={x:.5+Math.cos(k)*.75,y:.5,z:.5+Math.sin(k)*.75},R=u(E);M===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${p.toFixed(1)}\xB0`,12,n.y*2-24),e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${w.toFixed(1)}\xB0`,12,n.y*2-10)}e.restore()}var Xe=!1;function uo(e){Xe=e}var I={...io},re={...so};function Re(e,o){I.rotZRad=-30*(Math.PI/180)+e,I.rotXRad=20*(Math.PI/180)+o}function Ze(){return{yaw:I.rotZRad- -30*(Math.PI/180),pitch:I.rotXRad-20*(Math.PI/180)}}function fo(){I.rotXRad=20*(Math.PI/180),I.rotYRad=0,I.rotZRad=-30*(Math.PI/180)}function bo(){return{rotXDeg:Math.round(I.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(I.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(I.rotZRad*180/Math.PI*10)/10}}function mo(e,o,n){I.rotXRad=e*Math.PI/180,I.rotYRad=o*Math.PI/180,I.rotZRad=n*Math.PI/180}function ho(){return{yawDeg:Math.round(I.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(I.rotXRad*180/Math.PI*10)/10}}function go(e,o){I.rotZRad=e*Math.PI/180,I.rotXRad=o*Math.PI/180}function xo(e){I.zoom=Math.max(.1,Math.min(3,e))}function po(){return I.zoom}function yo(e,o,n){re.sizeX=Math.max(.1,Math.min(2.5,e)),re.sizeY=Math.max(.1,Math.min(2.5,o)),re.sizeZ=Math.max(.1,Math.min(2.5,n))}function vo(){return{sizeX:re.sizeX,sizeY:re.sizeY,sizeZ:re.sizeZ}}function X(e,o,n){return Te(e,o,n,I,re)}function De(e){return _e(e,I,re)}function Ho(e){let{x:o,y:n,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:r},{x:o,y:n,z:0},{x:o,y:0,z:r},{x:0,y:n,z:r},{x:o,y:n,z:r}]}var U=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Oo=64,Co={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Mo(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*1*n,e.style.width=`${o}px`,e.style.height=`${o*1}px`;let r=e.getContext("2d");return r.scale(n,n),{ctx:r,scale:o*.26,center:{x:o/2,y:o*.5},width:o,height:o*1}}var Se={...Ie};function ko(e){Se={...Se,...e}}function Ao(){return{...Se}}var co=[{edge:[0,1],faces:[3,5]},{edge:[1,4],faces:[3,1]},{edge:[4,2],faces:[3,2]},{edge:[2,0],faces:[3,4]},{edge:[3,5],faces:[0,5]},{edge:[5,7],faces:[0,1]},{edge:[7,6],faces:[0,2]},{edge:[6,3],faces:[0,4]},{edge:[0,3],faces:[4,5]},{edge:[1,5],faces:[1,5]},{edge:[4,7],faces:[1,2]},{edge:[2,6],faces:[4,2]}];function _o(e,o,n,r,i){if(!i.showFront&&!i.showBack)return;let s=[r.x,r.y,r.z],u=new Array(U.length).fill(!1);for(let a=0;a<U.length;a++){let t=U[a],d=t.fixedValue*s[t.fixedAxis],b=s[t.uAxis],c=s[t.vAxis],m={x:0,y:0,z:0},C=["x","y","z"];m[C[t.fixedAxis]]=d,m[C[t.uAxis]]=b*.5,m[C[t.vAxis]]=c*.5;let A=De(m),p={x:m.x+t.normal.x*.1,y:m.y+t.normal.y*.1,z:m.z+t.normal.z*.1};De(p).z-A.z<0&&(u[a]=!0)}if(e.save(),i.showBack){e.lineWidth=i.backWidth,i.backDashed?e.setLineDash([4,3]):e.setLineDash([]),e.strokeStyle=i.backColor,e.globalAlpha=i.backOpacity;for(let a of co){let[t,d]=a.faces;if(!(u[t]||u[d])){let[c,m]=a.edge;e.beginPath(),e.moveTo(o[c].x,o[c].y),e.lineTo(o[m].x,o[m].y),e.stroke()}}}if(i.showFront){e.lineWidth=i.frontWidth,i.frontDashed?e.setLineDash([4,3]):e.setLineDash([]),e.strokeStyle=i.frontColor,e.globalAlpha=i.frontOpacity;for(let a of co){let[t,d]=a.faces;if(u[t]||u[d]){let[c,m]=a.edge;e.beginPath(),e.moveTo(o[c].x,o[c].y),e.lineTo(o[m].x,o[m].y),e.stroke()}}}e.restore()}function wo(e,o,n,r,i,s,u=!0,a=null){let{ctx:t,scale:d,center:b,width:c,height:m}=e;t.save(),t.clearRect(0,0,c,m);let C=Ho(o),A=C.map(w=>X(w,d,b));if(t.save(),t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=8,t.shadowOffsetX=0,t.shadowOffsetY=2,Xo(t,A,C,o,i,s.viewRotating),t.restore(),_o(t,A,C,o,Se),lo(t,d,b,I,re,typeof u=="boolean"?u?Ee:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:u),r>=0){let w=ne(n,i),x=Xe?{r:255-w.r,g:255-w.g,b:255-w.b}:w,v=X(n,d,b);a&&a.active&&No(t,v,a.rgb,a.alpha),Yo(t,v,x)}t.restore()}function Xo(e,o,n,r,i,s){let u=[r.x,r.y,r.z],a=[];for(let t=0;t<U.length;t++){let d=U[t],b=d.fixedValue*u[d.fixedAxis],c=u[d.uAxis],m=u[d.vAxis];if(c<.002&&m<.002)continue;let C={x:0,y:0,z:0},A=["x","y","z"];C[A[d.fixedAxis]]=b,C[A[d.uAxis]]=c*.5,C[A[d.vAxis]]=m*.5;let p=De(C),w={x:C.x+d.normal.x*.1,y:C.y+d.normal.y*.1,z:C.z+d.normal.z*.1};if(De(w).z-p.z<0){let M=d.quad.map(k=>o[k]);a.push({face:d,corners:M,fixedVal:b,uMax:c,vMax:m,depth:p.z})}}a.sort((t,d)=>d.depth-t.depth);for(let t of a)Zo(e,t.corners,t.face.fixedAxis,t.fixedVal,t.uMax,t.vMax,i)}function Zo(e,o,n,r,i,s,u){let a=Oo,t=document.createElement("canvas");t.width=a,t.height=a;let d=t.getContext("2d"),b=d.createImageData(a,a),c=b.data;for(let Q=0;Q<a;Q++)for(let H=0;H<a;H++){let ue=H/(a-1)*i,Z=Q/(a-1)*s,se=ao(n,ue,Z,r,u,Xe),N=(Q*a+H)*4;c[N]=se.r,c[N+1]=se.g,c[N+2]=se.b,c[N+3]=255}d.putImageData(b,0,0);let m=o[0],C=o[1],A=o[2],p=o[3],w=C.x-m.x,x=C.y-m.y,v=p.x-m.x,M=p.y-m.y;e.save(),e.beginPath(),e.moveTo(m.x,m.y),e.lineTo(C.x,C.y),e.lineTo(A.x,A.y),e.lineTo(p.x,p.y),e.closePath(),e.clip();let k=2/a,E=m.x-w*k-v*k,R=m.y-x*k-M*k,B=1+2*k,F=1+2*k;e.transform(w*B/a,x*B/a,v*F/a,M*F/a,E,R),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}var oe=30,ie=13;function No(e,o,n,r){let i=(oe+ie)/2,s=5,u=Math.floor(o.x/s)*s,a=Math.floor(o.y/s)*s,t=oe*2+s*2,d=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,oe,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let w=-1;w*s<=t;w++)for(let x=-1;x*s<=t;x++)e.fillStyle=(w+x)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+w*s,a+x*s,s,s);let b="rgba("+n.r+","+n.g+","+n.b+",0)",c="rgba("+n.r+","+n.g+","+n.b+",1)",m=e;if(typeof m.createConicGradient=="function"){let w=m.createConicGradient(-Math.PI/2,o.x,o.y);w.addColorStop(0,b),w.addColorStop(1,c),e.fillStyle=w,e.fillRect(u-oe,a-oe,t,t)}else for(let x=0;x<36;x++){let v=-Math.PI/2+x/36*Math.PI*2,M=-Math.PI/2+(x+1)/36*Math.PI*2,k=(x+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(v)*ie,o.y+Math.sin(v)*ie),e.arc(o.x,o.y,oe,v,M),e.arc(o.x,o.y,ie,M,v,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+k.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,oe,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-oe-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let C=d*Math.PI*2,A=o.x+i*Math.sin(C),p=o.y-i*Math.cos(C);e.beginPath(),e.arc(A,p,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Yo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Ro(e,o,n,r){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return X(i[e],n,r)}function Ne(){let e={x:0,y:0};return[X({x:1,y:0,z:0},1,e),X({x:0,y:1,z:0},1,e),X({x:0,y:0,z:1},1,e)].map(n=>{let r=Math.sqrt(n.x*n.x+n.y*n.y);return r>0?{x:n.x/r,y:n.y/r}:{x:0,y:0}})}function pe(e,o,n,r,i){let s=U[e],u=[n.x,n.y,n.z],a=u[s.uAxis],t=u[s.vAxis];if(a<.002||t<.002)return null;let d={x:0,y:0,z:0},b=["x","y","z"];d[b[s.fixedAxis]]=s.fixedValue*u[s.fixedAxis];let c={...d};c[b[s.uAxis]]=a;let m={...d};m[b[s.vAxis]]=t;let C=X(d,r,i),A=X(c,r,i),p=X(m,r,i),w=A.x-C.x,x=A.y-C.y,v=p.x-C.x,M=p.y-C.y,k=w*M-x*v;if(Math.abs(k)<1e-6)return null;let E=o.x-C.x,R=o.y-C.y,B=(E*M-R*v)/k,F=(R*w-E*x)/k;return B<-.05||B>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,F))}}function Vo(e,o,n,r,i){let s=U[e],u=[n.x,n.y,n.z],a=u[s.uAxis],t=u[s.vAxis];if(a<.002||t<.002)return null;let d={x:0,y:0,z:0},b=["x","y","z"];d[b[s.fixedAxis]]=s.fixedValue*u[s.fixedAxis];let c={...d};c[b[s.uAxis]]=a;let m={...d};m[b[s.vAxis]]=t;let C=X(d,r,i),A=X(c,r,i),p=X(m,r,i),w=A.x-C.x,x=A.y-C.y,v=p.x-C.x,M=p.y-C.y,k=w*M-x*v;if(Math.abs(k)<1e-6)return null;let E=o.x-C.x,R=o.y-C.y,B=(E*M-R*v)/k,F=(R*w-E*x)/k;return{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,F))}}var Eo=22;function zo(e,o,n,r,i,s,u,a,t,d,b,c,m,C,A){let p={...Co};function w(f){let g=e.getBoundingClientRect();return{x:f.clientX-g.left,y:f.clientY-g.top}}let x=!1,v=!1,M=!1,k=!1,E=!1,R=null,B=600,F=null;function Q(){H(),F=setTimeout(ue,B)}function H(){F!==null&&(clearTimeout(F),F=null)}function ue(){F=null,p.alphaMode=!1,ke(),h(),E=!0,p.viewRotating=!0,R=null,t()}let Z=14,se=800,N=null;function O(){$(),N=setTimeout(ye,se)}function $(){N!==null&&(clearTimeout(N),N=null),H()}function ye(){N=null,p.alphaMode=!0,h(),ke(),v=!1,t()}function te(f){let g=m();return Math.hypot(f.x-g.x,f.y-g.y)}function Le(f){let g=m();return(Math.atan2(f.x-g.x,-(f.y-g.y))+Math.PI*2)%(Math.PI*2)}function le(f){b(Le(f)/(Math.PI*2)),t()}function ve(f){let g=te(f);return g>=ie-4&&g<=oe+6}function ce(f){let g=o(),V=u(),S=a();for(let T=0;T<3;T++){let P=Ro(T,g,V,S),G=f.x-P.x,Y=f.y-P.y;if(G*G+Y*Y<=Eo*Eo)return T}return-1}function K(f){let g=o(),V=u(),S=a();for(let T=U.length-1;T>=0;T--){let P=pe(T,f,g,V,S);if(P)return{faceIndex:T,...P}}return null}let J=-1,q={x:0,y:0},Ve=0;function Ce(f,g){J=f,q=g,Ve=o()[["x","y","z"][f]],p.draggingAxisHandle=f,e.style.cursor="grabbing",t()}function l(f){if($(),J<0)return;let g=f.x-q.x,V=f.y-q.y,T=Ne()[J],P=u(),Y=(g*T.x+V*T.y)/P,ee=Math.max(0,Math.min(1,Ve+Y)),W=o(),_=["x","y","z"],he={...W,[_[J]]:ee};n(he);let Ae=r(),Je=s(),qe=Je>=0?U[Je]:null,Pe={...Ae};qe&&J===qe.fixedAxis?Pe[_[J]]=ee:Pe[_[J]]=Math.min(Ae[_[J]],ee),i(Pe,s()),t()}function h(){J=-1,p.draggingAxisHandle=-1}let y=-1,z=null,L=null,D=!1;function Me(f,g,V,S){y=f,p.draggingFace=f,z=null,L=null,D=!1,S&&(D=!0,L={s:g,t:V}),be(f,g,V),e.style.cursor="crosshair",t()}function fe(f,g,V){if($(),y<0)return;let S=o(),T=u(),P=a(),G=pe(y,f,S,T,P),Y=y;if(!G&&!V){for(let _=U.length-1;_>=0;_--)if(_!==y&&(G=pe(_,f,S,T,P),G)){Y=_;break}}if(!G&&V&&(G=Vo(y,f,S,T,P),Y=y),!G){t();return}Y!==y&&(y=Y,p.draggingFace=Y,z=null,D=!1,L=null);let{s:ee,t:W}=G;if(g&&L){if(D){let _=Math.abs(ee-L.s),he=Math.abs(W-L.t),Ae=.02;(_>Ae||he>Ae)&&(z=_>=he?"u":"v",D=!1)}z==="u"?W=L.t:z==="v"&&(ee=L.s)}else g||(z=null,D=!1,L=null);be(Y,ee,W),t()}function be(f,g,V){let S=U[f],T=o(),P=["x","y","z"],G={...r()};G[P[S.uAxis]]=g*T[P[S.uAxis]],G[P[S.vAxis]]=V*T[P[S.vAxis]],G[P[S.fixedAxis]]=S.fixedValue*T[P[S.fixedAxis]],i(G,f)}function ke(){y=-1,p.draggingFace=-1,z=null,D=!1,L=null}let ae=null,me=!1,j=null;function Ye(f){M=!0;let g=w(f);if(ae=g,me=!1,j=null,d()&&p.alphaMode){if(te(g)<=Z){p.alphaMode=!1,t();return}if(ve(g)){f.preventDefault(),x=!0,le(g);return}p.alphaMode=!1,t();return}let V=K(g);V&&(j={faceIndex:V.faceIndex,s:V.s,t:V.t}),f.preventDefault(),E=!0,R=g,p.viewRotating=!0,d()&&te(g)<=Z&&O(),t()}function Ue(f){let g=w(f);if(x){f.preventDefault(),le(g);return}if(E){if(f.preventDefault(),!R){R=g;return}let V=g.x-R.x,S=g.y-R.y;Math.hypot(V,S)>2&&(me=!0,$());let T=Ze();Re(T.yaw+V*.012,T.pitch+S*.012),R=g,t();return}if(M&&p.alphaMode&&ve(g)){f.preventDefault(),x=!0,le(g);return}e.style.cursor="grab"}function We(f){$(),M=!1,x=!1,v=!1,!me&&j&&be(j.faceIndex,j.s,j.t),E&&(E=!1,p.viewRotating=!1,R=null,t()),e.style.cursor="grab"}function $e(f){if(f.touches.length!==1)return;k=!0;let g=w(f.touches[0]);if(me=!1,j=null,d()&&p.alphaMode){if(te(g)<=Z){p.alphaMode=!1,t();return}if(ve(g)){f.preventDefault(),x=!0,le(g);return}p.alphaMode=!1,t();return}let V=K(g);V&&(j={faceIndex:V.faceIndex,s:V.s,t:V.t}),f.preventDefault(),E=!0,R=g,p.viewRotating=!0,d()&&te(g)<=Z&&O(),t()}function Ke(f){if(f.touches.length!==1)return;let g=w(f.touches[0]);if(x)f.preventDefault(),le(g);else if(k&&p.alphaMode&&ve(g))f.preventDefault(),x=!0,le(g);else if(E){if(f.preventDefault(),!R){R=g;return}let V=g.x-R.x,S=g.y-R.y;Math.hypot(V,S)>2&&(me=!0,$());let T=Ze();Re(T.yaw+V*.012,T.pitch+S*.012),R=g,t()}}function je(f){$(),k=!1,x=!1,!me&&j&&be(j.faceIndex,j.s,j.t),E&&(E=!1,p.viewRotating=!1,R=null,t())}function Qe(f){if(f.key==="1"){Re(Math.PI/4,0),t();return}if(f.key==="0"){fo(),t();return}if(f.key==="2"){Re(.95,-.54),t();return}if(p.alphaMode){if(f.key==="Escape"){p.alphaMode=!1,t();return}if(f.key==="ArrowUp"||f.key==="ArrowRight"){f.preventDefault(),b(Math.min(1,c()+(f.shiftKey?.08:.02))),t();return}if(f.key==="ArrowDown"||f.key==="ArrowLeft"){f.preventDefault(),b(Math.max(0,c()-(f.shiftKey?.08:.02))),t();return}}let g=f.shiftKey?.04:.004,V=r(),S=o(),T=Ne(),P=0,G=0;switch(f.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":G=-1;break;case"ArrowDown":G=1;break;default:return}f.preventDefault();let Y={...V},ee=["x","y","z"];for(let W=0;W<3;W++){let _=P*T[W].x+G*T[W].y;if(Math.abs(_)>.3){let he=V[ee[W]]+g*Math.sign(_);Y[ee[W]]=Math.max(0,Math.min(S[ee[W]],he))}}i(Y,s()),t()}e.addEventListener("mousedown",Ye),window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",We),e.addEventListener("touchstart",$e,{passive:!1}),e.addEventListener("touchmove",Ke,{passive:!1}),e.addEventListener("touchend",je),e.addEventListener("keydown",Qe),e.setAttribute("tabindex","0");function Io(){$(),e.removeEventListener("mousedown",Ye),window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",We),e.removeEventListener("touchstart",$e),e.removeEventListener("touchmove",Ke),e.removeEventListener("touchend",je),e.removeEventListener("keydown",Qe)}return{state:p,destroy:Io}}function To(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Do(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function So(e,o,n){if(n.showModeToggle){let r=document.createElement("div");r.className="box-picker-mode-toggle";let i=b=>{let c=document.createElement("button");return c.textContent=b.toUpperCase(),c.addEventListener("click",()=>o.switchMode(b)),r.appendChild(c),c},s=i("oklch"),u=i("rgb"),a=i("hsb"),t=()=>{let b=o.mode();u.classList.toggle("active",b==="rgb"),a.classList.toggle("active",b==="hsb"),s.classList.toggle("active",b==="oklch")};t();let d=o.switchMode;o._markActive=t,e.appendChild(r)}if(n.showInputs){let r=document.createElement("input");r.className="box-picker-hex",r.type="text",r.spellcheck=!1,r.addEventListener("change",()=>{let c=r.value;/^#?[0-9a-f]{6}$/i.test(c)?o.onHexInput(c):o.onHexInput("")}),r.addEventListener("click",()=>{To(o.getRgbForCopy()?"#"+Uo(o.getRgbForCopy()):"#ffffff"),Do(r)});let i=document.createElement("div");i.className="box-picker-channels";let s=[],u=[],a=["R","G","B"];for(let c=0;c<3;c++){let m=document.createElement("div");m.className="box-picker-channel";let C=document.createElement("label");C.textContent=a[c];let A=document.createElement("input");A.type="text",A.inputMode="numeric",m.appendChild(C),m.appendChild(A),i.appendChild(m),s.push(A),u.push(C),A.addEventListener("change",()=>{let p=parseFloat(A.value);isNaN(p)||o.onChannelInput(c,p,255)}),A.addEventListener("click",()=>{let p=o.getRgbForCopy();To(`${p.r}, ${p.g}, ${p.b}`),Do(A)})}let t=document.createElement("div");t.className="box-picker-hexrow";let d=document.createElement("div");d.className="box-picker-hexwrap";let b=document.createElement("label");b.textContent="Hex",d.appendChild(b),d.appendChild(r),t.appendChild(i),t.appendChild(d),e.appendChild(t),e._inputs={hexInput:r,inputs:s,labels:u}}if(n.showCorners){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),u=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:s,g:u,b:a})}),e.appendChild(r);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function Uo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Lo=`.box-picker {\r
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
`;var Ct=Ko,Po=!1;function $o(){if(Po||typeof document>"u")return;Po=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Lo,document.head.appendChild(e)}function Ko(e,o={}){let n=o.size??300,r=o.controls??!0,i=o.showInputs??!1,s=o.showModeToggle??!1,u=o.showCorners??!1,a={mode:()=>t,switchMode:l=>ue(l),onHexInput:l=>{let h=Oe(l);h?(c=de(H?{r:255-h.r,g:255-h.g,b:255-h.b}:h,t),b={x:Math.max(b.x,c.x),y:Math.max(b.y,c.y),z:Math.max(b.z,c.z)},q(),K(),O()):K()},onChannelInput:(l,h,y)=>{let z=Math.max(0,Math.min(y,h)),L=["x","y","z"],D=z/y;if(H){let Me={...c,[L[l]]:D},fe=ne(Me,t);c=de({r:255-fe.r,g:255-fe.g,b:255-fe.b},t)}else c={...c,[L[l]]:D};D>b[L[l]]&&(b={...b,[L[l]]:D}),q(),K(),O()},getRgbForCopy:()=>ne(c,t),onRandom:l=>Ce(l),onReset:()=>Ce({r:0,g:0,b:0})},t=o.mode??"rgb",d=o.initialColor?de(o.initialColor,t):{x:.7,y:.4,z:.85},b={x:1,y:1,z:1},c={...d},m=0,C=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function p(l){let h=Math.max(0,Math.min(1,l));h!==A&&(A=h,q(),K(),O())}function w(l){let h=ce(),y=ge(h);y.s=Math.max(0,Math.min(100,l*100));let z=He(y);Ce(H?{r:255-z.r,g:255-z.g,b:255-z.b}:z)}let x=new Set;$o();let v=document.createElement("div");v.className="box-picker";let M=document.createElement("canvas");M.style.cursor="grab",v.appendChild(M);let k=Mo(M,n),E={...Ee},R=!0,B=null,F=document.createElement("div");F.className="box-picker-controls",B=document.createElement("div"),B.className="box-picker-swatch",F.appendChild(B),v.appendChild(F),(i||s||u)&&So(F,a,{showInputs:i,showModeToggle:s,showCorners:u}),e.appendChild(v);let Q=zo(M,()=>b,l=>{b=l},()=>c,(l,h)=>{c=l,m=h,q(),K()},()=>m,()=>k.scale,()=>k.center,O,C,p,()=>A,()=>X(c,k.scale,k.center),w,()=>ge(ce()).s/100),H=!1;M.addEventListener("dblclick",()=>{H=!H,uo(H),q(),K(),O()});function ue(l){if(l===t)return;let h=ne(c,t),y={...c},z={...b};t=l;let L=de(h,t),D={x:1,y:1,z:1};c=L,b=D,se(y,L,z,D,300),K()}let Z=null;function se(l,h,y,z,L){Z!==null&&cancelAnimationFrame(Z);let D=performance.now();function Me(fe){let be=fe-D,ke=Math.min(1,be/L),ae=1-Math.pow(1-ke,3);c={x:l.x+(h.x-l.x)*ae,y:l.y+(h.y-l.y)*ae,z:l.z+(h.z-l.z)*ae},b={x:y.x+(z.x-y.x)*ae,y:y.y+(z.y-y.y)*ae,z:y.z+(z.z-y.z)*ae},$(),q(),ke<1?Z=requestAnimationFrame(Me):Z=null}Z=requestAnimationFrame(Me)}let N=!1;function O(){N||(N=!0,requestAnimationFrame(()=>{N=!1,$()}))}function $(){wo(k,b,c,m,t,Q.state,E,{active:Q.state.alphaMode,alpha:A,rgb:ce()})}function ye(l,h,y){return Math.round(l+(h-l)*y)}function te(l,h){let y=h>0?255:0,z=Math.abs(h);return we({r:ye(l.r,y,z),g:ye(l.g,y,z),b:ye(l.b,y,z)})}function Le(l,h){let y=Oe(h)||{r:128,g:128,b:128},z=te(y,.35),L=te(y,0),D=te(y,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${z}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${D}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function le(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function ve(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function ce(){let l=ne(c,t);return H?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function K(){if(!r)return;let l=ce(),h=we(l);B&&Le(B,h);let y=v.querySelector(".box-picker-hex");y&&(y.value=h),J(),v._updateModeButtons&&v._updateModeButtons()}function J(){if(!r)return;let l=eo[t],h=H?de(ce(),t):c,y=ro(h,t),z=v.querySelectorAll(".box-picker-channel input"),L=v.querySelectorAll(".box-picker-channel label");for(let D=0;D<z.length;D++)L[D].textContent=l[D],L[D].style.color="",L[D].style.textShadow="none",z[D].value=String(y[D])}function q(){let l=ce(),h={rgb:l,hsb:ge(l),oklch:ze(l),hex:we(l),alpha:A};for(let y of x)y(h)}function Ve(){let l=ne(c,t);return{rgb:l,hsb:ge(l),oklch:ze(l),hex:we(l)}}K(),$();let Ce=l=>{c=de(l,t),b={x:Math.max(b.x,c.x),y:Math.max(b.y,c.y),z:Math.max(b.z,c.z)};let h=X(c,k.scale,k.center);m=-1;for(let y=U.length-1;y>=0;y--)if(pe(y,h,b,k.scale,k.center)){m=y;break}q(),K(),O()};return{getColor:Ve,getMode:()=>t,setColor:Ce,setAlpha:p,getAlpha:()=>A,setMode(l){ue(l)},getRotation:()=>ho(),setRotation:(l,h)=>{go(l,h),O()},getAxisRotation:()=>bo(),setAxisRotation:(l,h,y)=>{mo(l,h,y),O()},getGuides:()=>({...E}),setGuides:l=>{E={...E,...l},O()},toggleAllGuides:l=>{let h=l!==void 0?l:!R;R=h,E={vertexX:h,vertexY:h,vertexZ:h,centerX:h,centerY:h,centerZ:h,angleGuides:h,yawArc:h,pitchArc:h},O()},setZoom:l=>{xo(l),O()},getZoom:()=>po(),setDimensions:(l,h,y)=>{yo(l,h,y),O()},getDimensions:()=>vo(),getEdgeStyle:()=>Ao(),setEdgeStyle:l=>{ko(l),O()},on(l,h){x.add(h)},off(l,h){x.delete(h)},destroy(){Q.destroy(),Z!==null&&cancelAnimationFrame(Z),e.removeChild(v)}}}export{Ie as DEFAULT_EDGE_CONFIG,Ee as DEFAULT_GUIDES,Ko as createBoxColorPicker,Ct as createColorPicker,vo as getBoxDimensions,ho as getCameraAnglesDeg,Ao as getEdgeStyle,bo as getRotationDeg,po as getZoomMultiplier,yo as setBoxDimensions,uo as setBoxInvert,go as setCameraAnglesDeg,ko as setEdgeStyle,mo as setRotationDeg,xo as setZoomMultiplier};
