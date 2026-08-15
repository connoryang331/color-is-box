var Ie={showFront:!0,showBack:!0,frontWidth:1.5,backWidth:1,frontDashed:!1,backDashed:!0,frontColor:"#ffffff",backColor:"#ffffff",frontOpacity:.65,backOpacity:.25},Ee={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,angleGuides:!0,yawArc:!0,pitchArc:!0},eo={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},oo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function pe(e){let o=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(o,n,r),s=Math.min(o,n,r),u=i-s,a=0;u!==0&&(i===o?a=((n-r)/u+6)%6:i===n?a=(r-o)/u+2:a=(o-n)/u+4,a*=60);let t=i===0?0:u/i*100,d=i*100;return{h:a,s:t,b:d}}function He(e){let o=e.h,n=e.s/100,r=e.b/100,i=r*n,s=i*(1-Math.abs(o/60%2-1)),u=r-i,a,t,d;return o<60?(a=i,t=s,d=0):o<120?(a=s,t=i,d=0):o<180?(a=0,t=i,d=s):o<240?(a=0,t=s,d=i):o<300?(a=s,t=0,d=i):(a=i,t=0,d=s),{r:Math.round((a+u)*255),g:Math.round((t+u)*255),b:Math.round((d+u)*255)}}function Fe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Be(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Go(e){let o=Fe(e.r/255),n=Fe(e.g/255),r=Fe(e.b/255),i=.4122214708*o+.5363325363*n+.0514459929*r,s=.2119034982*o+.6806995451*n+.1073969566*r,u=.0883024619*o+.2817188376*n+.6299787005*r,a=Math.cbrt(i),t=Math.cbrt(s),d=Math.cbrt(u);return{L:.2104542553*a+.793617785*t-.0040720468*d,a:1.9779984951*a-2.428592205*t+.4505937099*d,b:.0259040371*a+.7827717662*t-.808675766*d}}function Ho(e,o,n){let r=e+.3963377774*o+.2158037573*n,i=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,u=r*r*r,a=i*i*i,t=s*s*s,d=4.0767416621*u-3.3077115913*a+.2309699292*t,m=-1.2684380046*u+2.6097574011*a-.3413193965*t,c=-.0041960863*u-.7034186147*a+1.707614701*t;return{r:Math.round(Math.max(0,Math.min(1,Be(d)))*255),g:Math.round(Math.max(0,Math.min(1,Be(m)))*255),b:Math.round(Math.max(0,Math.min(1,Be(c)))*255)}}function Te(e){let o=Go(e),n=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:n,h:n<1e-4?0:r}}function Ge(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),r=e.c*Math.sin(o);return Ho(e.l,n,r)}function Oo(e,o,n){let r=Ge({l:e,c:o,h:n});if(to(r))return{l:e,c:o,h:n};let i=0,s=o;for(let u=0;u<20;u++){let a=(i+s)/2;r=Ge({l:e,c:a,h:n}),to(r)?i=a:s=a}return{l:e,c:i,h:n}}function to(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function Re(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Oe(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var no=.4;function ae(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return He({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,r=e.y*no,i=e.z*359,s=Oo(n,r,i);return Ge(s)}}function fe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=pe(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Te(e);return{x:n.l,y:Math.min(n.c/no,1),z:n.h/359}}}function ro(e,o){let n=oo[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function ao(e,o,n,r,i,s=!1){let u;e===0?u={x:r,y:o,z:n}:e===1?u={x:o,y:r,z:n}:u={x:o,y:n,z:r};let a=ae(u,i);return s?{r:255-a.r,g:255-a.g,b:255-a.b}:a}var io={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},so={sizeX:1,sizeY:1,sizeZ:1,radius:0};function _e(e,o,n){let r=(e.x-.5)*n.sizeX,i=(e.y-.5)*n.sizeY,s=(e.z-.5)*n.sizeZ,u=Math.cos(o.rotZRad),a=Math.sin(o.rotZRad),t=r*u-i*a,d=r*a+i*u,m=s,c=Math.cos(o.rotYRad),b=Math.sin(o.rotYRad),y=t*c+m*b,k=d,h=-t*b+m*c,A=Math.cos(o.rotXRad),x=Math.sin(o.rotXRad),v=y,M=h*A-k*x,w=h*x+k*A;return{x:v,y:M,z:w}}function De(e,o,n,r,i){let s=_e(e,r,i);return{x:n.x+s.x*o*1.6*r.zoom,y:n.y-s.y*o*1.6*r.zoom}}var ye=["#ef4444","#22c55e","#3b82f6"];function lo(e,o,n,r,i,s){let u=x=>De(x,o,n,r,i),a=u({x:0,y:0,z:0});e.save();let t=1.28,d=[{p:{x:t,y:0,z:0},name:"X",color:ye[0],visible:s.vertexX},{p:{x:0,y:t,z:0},name:"Y",color:ye[1],visible:s.vertexY},{p:{x:0,y:0,z:t},name:"Z",color:ye[2],visible:s.vertexZ}];for(let x=0;x<d.length;x++){if(!d[x].visible)continue;let v=u(d[x].p),M=d[x].color;e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(v.x,v.y),e.strokeStyle=M,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(v.x,v.y,3.5,0,Math.PI*2),e.fillStyle=M,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let w=v.x-a.x,V=v.y-a.y,R=Math.hypot(w,V)||1,_=12,G=v.x+w/R*_,re=v.y+V/R*_;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=M,e.fillText(d[x].name,G,re)}(s.vertexX||s.vertexY||s.vertexZ)&&(e.beginPath(),e.arc(a.x,a.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let m=u({x:.5,y:.5,z:.5}),c=.35,b=[{from:{x:-c,y:.5,z:.5},to:{x:1+c,y:.5,z:.5},color:ye[0],name:"Cx",visible:s.centerX},{from:{x:.5,y:-c,z:.5},to:{x:.5,y:1+c,z:.5},color:ye[1],name:"Cy",visible:s.centerY},{from:{x:.5,y:.5,z:-c},to:{x:.5,y:.5,z:1+c},color:ye[2],name:"Cz",visible:s.centerZ}],y=!1;for(let x=0;x<b.length;x++){if(!b[x].visible)continue;y=!0;let v=u(b[x].from),M=u(b[x].to);e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(M.x,M.y),e.strokeStyle=b[x].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(v.x,v.y,3,0,Math.PI*2),e.arc(M.x,M.y,3,0,Math.PI*2),e.fillStyle=b[x].color,e.fill()}y&&(e.beginPath(),e.arc(m.x,m.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let k=s.angleGuides!==void 0?s.angleGuides:s.yawArc||s.pitchArc||!1,h=Math.round(r.rotZRad*180/Math.PI*10)/10,A=Math.round(r.rotXRad*180/Math.PI*10)/10;if(k){e.beginPath();let x=36;for(let M=0;M<=x;M++){let w=M/x*Math.PI*2,V={x:.5+Math.cos(w)*.75,y:.5+Math.sin(w)*.75,z:0},R=u(V);M===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.beginPath();let v=20;for(let M=0;M<=v;M++){let w=-Math.PI/2+M/v*Math.PI,V={x:.5+Math.cos(w)*.75,y:.5,z:.5+Math.sin(w)*.75},R=u(V);M===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${h.toFixed(1)}\xB0`,12,n.y*2-24),e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${A.toFixed(1)}\xB0`,12,n.y*2-10)}e.restore()}var Xe=!1;function uo(e){Xe=e}var B={...io},q={...so};function Ve(e,o){B.rotZRad=-30*(Math.PI/180)+e,B.rotXRad=20*(Math.PI/180)+o}function Ze(){return{yaw:B.rotZRad- -30*(Math.PI/180),pitch:B.rotXRad-20*(Math.PI/180)}}function fo(){B.rotXRad=20*(Math.PI/180),B.rotYRad=0,B.rotZRad=-30*(Math.PI/180)}function bo(){return{rotXDeg:Math.round(B.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(B.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(B.rotZRad*180/Math.PI*10)/10}}function mo(e,o,n){B.rotXRad=e*Math.PI/180,B.rotYRad=o*Math.PI/180,B.rotZRad=n*Math.PI/180}function ho(){return{yawDeg:Math.round(B.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(B.rotXRad*180/Math.PI*10)/10}}function xo(e,o){B.rotZRad=e*Math.PI/180,B.rotXRad=o*Math.PI/180}function go(e){B.zoom=Math.max(.1,Math.min(3,e))}function po(){return B.zoom}function yo(e,o,n){q.sizeX=Math.max(.1,Math.min(2.5,e)),q.sizeY=Math.max(.1,Math.min(2.5,o)),q.sizeZ=Math.max(.1,Math.min(2.5,n))}function vo(){return{sizeX:q.sizeX,sizeY:q.sizeY,sizeZ:q.sizeZ}}function Co(e){q.radius=Math.max(0,Math.min(.25,e))}function Mo(){return q.radius||0}function U(e,o,n){return De(e,o,n,B,q)}function Se(e){return _e(e,B,q)}function _o(e){let{x:o,y:n,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:r},{x:o,y:n,z:0},{x:o,y:0,z:r},{x:0,y:n,z:r},{x:o,y:n,z:r}]}var $=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Xo=64,ko={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Ao(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*1*n,e.style.width=`${o}px`,e.style.height=`${o*1}px`;let r=e.getContext("2d");return r.scale(n,n),{ctx:r,scale:o*.26,center:{x:o/2,y:o*.5},width:o,height:o*1}}var Le={...Ie};function wo(e){Le={...Le,...e}}function Ro(){return{...Le}}var co=[{edge:[0,1],faces:[3,5]},{edge:[1,4],faces:[3,1]},{edge:[4,2],faces:[3,2]},{edge:[2,0],faces:[3,4]},{edge:[3,5],faces:[0,5]},{edge:[5,7],faces:[0,1]},{edge:[7,6],faces:[0,2]},{edge:[6,3],faces:[0,4]},{edge:[0,3],faces:[4,5]},{edge:[1,5],faces:[1,5]},{edge:[4,7],faces:[1,2]},{edge:[2,6],faces:[4,2]}];function Zo(e,o,n,r,i){if(!i.showFront&&!i.showBack)return;let s=[r.x,r.y,r.z],u=new Array($.length).fill(!1);for(let a=0;a<$.length;a++){let t=$[a],d=t.fixedValue*s[t.fixedAxis],m=s[t.uAxis],c=s[t.vAxis],b={x:0,y:0,z:0},y=["x","y","z"];b[y[t.fixedAxis]]=d,b[y[t.uAxis]]=m*.5,b[y[t.vAxis]]=c*.5;let k=Se(b),h={x:b.x+t.normal.x*.1,y:b.y+t.normal.y*.1,z:b.z+t.normal.z*.1};Se(h).z-k.z>0&&(u[a]=!0)}if(e.save(),i.showBack){e.lineWidth=i.backWidth,i.backDashed?e.setLineDash([4,3]):e.setLineDash([]),e.strokeStyle=i.backColor,e.globalAlpha=i.backOpacity;for(let a of co){let[t,d]=a.faces;if(!(u[t]||u[d])){let[c,b]=a.edge;e.beginPath(),e.moveTo(o[c].x,o[c].y),e.lineTo(o[b].x,o[b].y),e.stroke()}}}if(i.showFront){e.lineWidth=i.frontWidth,i.frontDashed?e.setLineDash([4,3]):e.setLineDash([]),e.strokeStyle=i.frontColor,e.globalAlpha=i.frontOpacity;for(let a of co){let[t,d]=a.faces;if(u[t]||u[d]){let[c,b]=a.edge;e.beginPath(),e.moveTo(o[c].x,o[c].y),e.lineTo(o[b].x,o[b].y),e.stroke()}}}e.restore()}function Vo(e,o,n,r,i,s,u=!0,a=null){let{ctx:t,scale:d,center:m,width:c,height:b}=e;t.save(),t.clearRect(0,0,c,b);let y=_o(o),k=y.map(A=>U(A,d,m));if(t.save(),t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=8,t.shadowOffsetX=0,t.shadowOffsetY=2,Yo(t,k,y,o,i,s.viewRotating),t.restore(),Zo(t,k,y,o,Le),lo(t,d,m,B,q,typeof u=="boolean"?u?Ee:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:u),r>=0){let A=ae(n,i),x=Xe?{r:255-A.r,g:255-A.g,b:255-A.b}:A,v=U(n,d,m);a&&a.active&&Uo(t,v,a.rgb,a.alpha),Wo(t,v,x)}t.restore()}function Yo(e,o,n,r,i,s){let u=[r.x,r.y,r.z],a=[];for(let t=0;t<$.length;t++){let d=$[t],m=d.fixedValue*u[d.fixedAxis],c=u[d.uAxis],b=u[d.vAxis];if(c<.002&&b<.002)continue;let y={x:0,y:0,z:0},k=["x","y","z"];y[k[d.fixedAxis]]=m,y[k[d.uAxis]]=c*.5,y[k[d.vAxis]]=b*.5;let h=Se(y),A={x:y.x+d.normal.x*.1,y:y.y+d.normal.y*.1,z:y.z+d.normal.z*.1};if(Se(A).z-h.z>0){let M=d.quad.map(w=>o[w]);a.push({face:d,corners:M,fixedVal:m,uMax:c,vMax:b,depth:h.z})}}a.sort((t,d)=>t.depth-d.depth);for(let t of a)No(e,t.corners,t.face.fixedAxis,t.fixedVal,t.uMax,t.vMax,i)}function No(e,o,n,r,i,s,u){let a=Xo,t=document.createElement("canvas");t.width=a,t.height=a;let d=t.getContext("2d"),m=d.createImageData(a,a),c=m.data;for(let P=0;P<a;P++)for(let X=0;X<a;X++){let O=X/(a-1)*i,ie=P/(a-1)*s,Z=ao(n,O,ie,r,u,Xe),I=(P*a+X)*4;c[I]=Z.r,c[I+1]=Z.g,c[I+2]=Z.b,c[I+3]=255}d.putImageData(m,0,0);let b=o[0],y=o[1],k=o[2],h=o[3],A=y.x-b.x,x=y.y-b.y,v=h.x-b.x,M=h.y-b.y;e.save();let w=q.radius||0;if(e.beginPath(),w>.005){let P=Math.min(w,.45),X=Math.min(w,.45),O={x:b.x+A*P,y:b.y+x*P},ie={x:y.x-A*P,y:y.y-x*P},Z={x:y.x+v*X,y:y.y+M*X},I={x:k.x-v*X,y:k.y-M*X},N={x:k.x-A*P,y:k.y-x*P},se={x:h.x+A*P,y:h.y+x*P},j={x:h.x-v*X,y:h.y-M*X},be={x:b.x+v*X,y:b.y+M*X};e.moveTo(O.x,O.y),e.lineTo(ie.x,ie.y),e.quadraticCurveTo(y.x,y.y,Z.x,Z.y),e.lineTo(I.x,I.y),e.quadraticCurveTo(k.x,k.y,N.x,N.y),e.lineTo(se.x,se.y),e.quadraticCurveTo(h.x,h.y,j.x,j.y),e.lineTo(be.x,be.y),e.quadraticCurveTo(b.x,b.y,O.x,O.y)}else e.moveTo(b.x,b.y),e.lineTo(y.x,y.y),e.lineTo(k.x,k.y),e.lineTo(h.x,h.y);e.closePath(),e.clip();let V=2/a,R=b.x-A*V-v*V,_=b.y-x*V-M*V,G=1+2*V,re=1+2*V;e.transform(A*G/a,x*G/a,v*re/a,M*re/a,R,_),e.imageSmoothingEnabled=!0,e.drawImage(t,0,0),e.restore()}var ne=30,ce=13;function Uo(e,o,n,r){let i=(ne+ce)/2,s=5,u=Math.floor(o.x/s)*s,a=Math.floor(o.y/s)*s,t=ne*2+s*2,d=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,ne,0,Math.PI*2),e.arc(o.x,o.y,ce,0,Math.PI*2,!0),e.clip();for(let A=-1;A*s<=t;A++)for(let x=-1;x*s<=t;x++)e.fillStyle=(A+x)%2===0?"#ffffff":"#d9d9d9",e.fillRect(u+A*s,a+x*s,s,s);let m="rgba("+n.r+","+n.g+","+n.b+",0)",c="rgba("+n.r+","+n.g+","+n.b+",1)",b=e;if(typeof b.createConicGradient=="function"){let A=b.createConicGradient(-Math.PI/2,o.x,o.y);A.addColorStop(0,m),A.addColorStop(1,c),e.fillStyle=A,e.fillRect(u-ne,a-ne,t,t)}else for(let x=0;x<36;x++){let v=-Math.PI/2+x/36*Math.PI*2,M=-Math.PI/2+(x+1)/36*Math.PI*2,w=(x+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(v)*ce,o.y+Math.sin(v)*ce),e.arc(o.x,o.y,ne,v,M),e.arc(o.x,o.y,ce,M,v,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+w.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,ne,0,Math.PI*2),e.arc(o.x,o.y,ce,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-ne-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let y=d*Math.PI*2,k=o.x+i*Math.sin(y),h=o.y-i*Math.cos(y);e.beginPath(),e.arc(k,h,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Wo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function zo(e,o,n,r){let i=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return U(i[e],n,r)}function Ye(){let e={x:0,y:0};return[U({x:1,y:0,z:0},1,e),U({x:0,y:1,z:0},1,e),U({x:0,y:0,z:1},1,e)].map(n=>{let r=Math.sqrt(n.x*n.x+n.y*n.y);return r>0?{x:n.x/r,y:n.y/r}:{x:0,y:0}})}function ve(e,o,n,r,i){let s=$[e],u=[n.x,n.y,n.z],a=u[s.uAxis],t=u[s.vAxis];if(a<.002||t<.002)return null;let d={x:0,y:0,z:0},m=["x","y","z"];d[m[s.fixedAxis]]=s.fixedValue*u[s.fixedAxis];let c={...d};c[m[s.uAxis]]=a;let b={...d};b[m[s.vAxis]]=t;let y=U(d,r,i),k=U(c,r,i),h=U(b,r,i),A=k.x-y.x,x=k.y-y.y,v=h.x-y.x,M=h.y-y.y,w=A*M-x*v;if(Math.abs(w)<1e-6)return null;let V=o.x-y.x,R=o.y-y.y,_=(V*M-R*v)/w,G=(R*A-V*x)/w;return _<-.05||_>1.05||G<-.05||G>1.05?null:{s:Math.max(0,Math.min(1,_)),t:Math.max(0,Math.min(1,G))}}function Eo(e,o,n,r,i){let s=$[e],u=[n.x,n.y,n.z],a=u[s.uAxis],t=u[s.vAxis];if(a<.002||t<.002)return null;let d={x:0,y:0,z:0},m=["x","y","z"];d[m[s.fixedAxis]]=s.fixedValue*u[s.fixedAxis];let c={...d};c[m[s.uAxis]]=a;let b={...d};b[m[s.vAxis]]=t;let y=U(d,r,i),k=U(c,r,i),h=U(b,r,i),A=k.x-y.x,x=k.y-y.y,v=h.x-y.x,M=h.y-y.y,w=A*M-x*v;if(Math.abs(w)<1e-6)return null;let V=o.x-y.x,R=o.y-y.y,_=(V*M-R*v)/w,G=(R*A-V*x)/w;return{s:Math.max(0,Math.min(1,_)),t:Math.max(0,Math.min(1,G))}}var To=22;function Do(e,o,n,r,i,s,u,a,t,d,m,c,b,y,k){let h={...ko};function A(f){let p=e.getBoundingClientRect();return{x:f.clientX-p.left,y:f.clientY-p.top}}let x=!1,v=!1,M=!1,w=!1,V=!1,R=null,_=600,G=null;function re(){P(),G=setTimeout(X,_)}function P(){G!==null&&(clearTimeout(G),G=null)}function X(){G=null,h.alphaMode=!1,Ae(),g(),V=!0,h.viewRotating=!0,R=null,t()}let O=14,ie=800,Z=null;function I(){N(),Z=setTimeout(se,ie)}function N(){Z!==null&&(clearTimeout(Z),Z=null),P()}function se(){Z=null,h.alphaMode=!0,g(),Ae(),v=!1,t()}function j(f){let p=b();return Math.hypot(f.x-p.x,f.y-p.y)}function be(f){let p=b();return(Math.atan2(f.x-p.x,-(f.y-p.y))+Math.PI*2)%(Math.PI*2)}function de(f){m(be(f)/(Math.PI*2)),t()}function Ce(f){let p=j(f);return p>=ce-4&&p<=ne+6}function ue(f){let p=o(),z=u(),S=a();for(let T=0;T<3;T++){let F=zo(T,p,z,S),H=f.x-F.x,W=f.y-F.y;if(H*H+W*W<=To*To)return T}return-1}function Q(f){let p=o(),z=u(),S=a();for(let T=$.length-1;T>=0;T--){let F=ve(T,f,p,z,S);if(F)return{faceIndex:T,...F}}return null}let ee=-1,oe={x:0,y:0},ze=0;function Me(f,p){ee=f,oe=p,ze=o()[["x","y","z"][f]],h.draggingAxisHandle=f,e.style.cursor="grabbing",t()}function l(f){if(N(),ee<0)return;let p=f.x-oe.x,z=f.y-oe.y,T=Ye()[ee],F=u(),W=(p*T.x+z*T.y)/F,te=Math.max(0,Math.min(1,ze+W)),K=o(),Y=["x","y","z"],ge={...K,[Y[ee]]:te};n(ge);let we=r(),Je=s(),qe=Je>=0?$[Je]:null,Pe={...we};qe&&ee===qe.fixedAxis?Pe[Y[ee]]=te:Pe[Y[ee]]=Math.min(we[Y[ee]],te),i(Pe,s()),t()}function g(){ee=-1,h.draggingAxisHandle=-1}let C=-1,E=null,L=null,D=!1;function ke(f,p,z,S){C=f,h.draggingFace=f,E=null,L=null,D=!1,S&&(D=!0,L={s:p,t:z}),he(f,p,z),e.style.cursor="crosshair",t()}function me(f,p,z){if(N(),C<0)return;let S=o(),T=u(),F=a(),H=ve(C,f,S,T,F),W=C;if(!H&&!z){for(let Y=$.length-1;Y>=0;Y--)if(Y!==C&&(H=ve(Y,f,S,T,F),H)){W=Y;break}}if(!H&&z&&(H=Eo(C,f,S,T,F),W=C),!H){t();return}W!==C&&(C=W,h.draggingFace=W,E=null,D=!1,L=null);let{s:te,t:K}=H;if(p&&L){if(D){let Y=Math.abs(te-L.s),ge=Math.abs(K-L.t),we=.02;(Y>we||ge>we)&&(E=Y>=ge?"u":"v",D=!1)}E==="u"?K=L.t:E==="v"&&(te=L.s)}else p||(E=null,D=!1,L=null);he(W,te,K),t()}function he(f,p,z){let S=$[f],T=o(),F=["x","y","z"],H={...r()};H[F[S.uAxis]]=p*T[F[S.uAxis]],H[F[S.vAxis]]=z*T[F[S.vAxis]],H[F[S.fixedAxis]]=S.fixedValue*T[F[S.fixedAxis]],i(H,f)}function Ae(){C=-1,h.draggingFace=-1,E=null,D=!1,L=null}let le=null,xe=!1,J=null;function Ne(f){M=!0;let p=A(f);if(le=p,xe=!1,J=null,d()&&h.alphaMode){if(j(p)<=O){h.alphaMode=!1,t();return}if(Ce(p)){f.preventDefault(),x=!0,de(p);return}h.alphaMode=!1,t();return}let z=Q(p);z&&(J={faceIndex:z.faceIndex,s:z.s,t:z.t}),f.preventDefault(),V=!0,R=p,h.viewRotating=!0,d()&&j(p)<=O&&I(),t()}function Ue(f){let p=A(f);if(x){f.preventDefault(),de(p);return}if(V){if(f.preventDefault(),!R){R=p;return}let z=p.x-R.x,S=p.y-R.y;Math.hypot(z,S)>2&&(xe=!0,N());let T=Ze();Ve(T.yaw+z*.012,T.pitch+S*.012),R=p,t();return}if(M&&h.alphaMode&&Ce(p)){f.preventDefault(),x=!0,de(p);return}e.style.cursor="grab"}function We(f){N(),M=!1,x=!1,v=!1,!xe&&J&&he(J.faceIndex,J.s,J.t),V&&(V=!1,h.viewRotating=!1,R=null,t()),e.style.cursor="grab"}function $e(f){if(f.touches.length!==1)return;w=!0;let p=A(f.touches[0]);if(xe=!1,J=null,d()&&h.alphaMode){if(j(p)<=O){h.alphaMode=!1,t();return}if(Ce(p)){f.preventDefault(),x=!0,de(p);return}h.alphaMode=!1,t();return}let z=Q(p);z&&(J={faceIndex:z.faceIndex,s:z.s,t:z.t}),f.preventDefault(),V=!0,R=p,h.viewRotating=!0,d()&&j(p)<=O&&I(),t()}function Ke(f){if(f.touches.length!==1)return;let p=A(f.touches[0]);if(x)f.preventDefault(),de(p);else if(w&&h.alphaMode&&Ce(p))f.preventDefault(),x=!0,de(p);else if(V){if(f.preventDefault(),!R){R=p;return}let z=p.x-R.x,S=p.y-R.y;Math.hypot(z,S)>2&&(xe=!0,N());let T=Ze();Ve(T.yaw+z*.012,T.pitch+S*.012),R=p,t()}}function je(f){N(),w=!1,x=!1,!xe&&J&&he(J.faceIndex,J.s,J.t),V&&(V=!1,h.viewRotating=!1,R=null,t())}function Qe(f){if(f.key==="1"){Ve(Math.PI/4,0),t();return}if(f.key==="0"){fo(),t();return}if(f.key==="2"){Ve(.95,-.54),t();return}if(h.alphaMode){if(f.key==="Escape"){h.alphaMode=!1,t();return}if(f.key==="ArrowUp"||f.key==="ArrowRight"){f.preventDefault(),m(Math.min(1,c()+(f.shiftKey?.08:.02))),t();return}if(f.key==="ArrowDown"||f.key==="ArrowLeft"){f.preventDefault(),m(Math.max(0,c()-(f.shiftKey?.08:.02))),t();return}}let p=f.shiftKey?.04:.004,z=r(),S=o(),T=Ye(),F=0,H=0;switch(f.key){case"ArrowRight":F=1;break;case"ArrowLeft":F=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}f.preventDefault();let W={...z},te=["x","y","z"];for(let K=0;K<3;K++){let Y=F*T[K].x+H*T[K].y;if(Math.abs(Y)>.3){let ge=z[te[K]]+p*Math.sign(Y);W[te[K]]=Math.max(0,Math.min(S[te[K]],ge))}}i(W,s()),t()}e.addEventListener("mousedown",Ne),window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",We),e.addEventListener("touchstart",$e,{passive:!1}),e.addEventListener("touchmove",Ke,{passive:!1}),e.addEventListener("touchend",je),e.addEventListener("keydown",Qe),e.setAttribute("tabindex","0");function Bo(){N(),e.removeEventListener("mousedown",Ne),window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",We),e.removeEventListener("touchstart",$e),e.removeEventListener("touchmove",Ke),e.removeEventListener("touchend",je),e.removeEventListener("keydown",Qe)}return{state:h,destroy:Bo}}function So(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Lo(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Po(e,o,n){if(n.showModeToggle){let r=document.createElement("div");r.className="box-picker-mode-toggle";let i=m=>{let c=document.createElement("button");return c.textContent=m.toUpperCase(),c.addEventListener("click",()=>o.switchMode(m)),r.appendChild(c),c},s=i("oklch"),u=i("rgb"),a=i("hsb"),t=()=>{let m=o.mode();u.classList.toggle("active",m==="rgb"),a.classList.toggle("active",m==="hsb"),s.classList.toggle("active",m==="oklch")};t();let d=o.switchMode;o._markActive=t,e.appendChild(r)}if(n.showInputs){let r=document.createElement("input");r.className="box-picker-hex",r.type="text",r.spellcheck=!1,r.addEventListener("change",()=>{let c=r.value;/^#?[0-9a-f]{6}$/i.test(c)?o.onHexInput(c):o.onHexInput("")}),r.addEventListener("click",()=>{So(o.getRgbForCopy()?"#"+$o(o.getRgbForCopy()):"#ffffff"),Lo(r)});let i=document.createElement("div");i.className="box-picker-channels";let s=[],u=[],a=["R","G","B"];for(let c=0;c<3;c++){let b=document.createElement("div");b.className="box-picker-channel";let y=document.createElement("label");y.textContent=a[c];let k=document.createElement("input");k.type="text",k.inputMode="numeric",b.appendChild(y),b.appendChild(k),i.appendChild(b),s.push(k),u.push(y),k.addEventListener("change",()=>{let h=parseFloat(k.value);isNaN(h)||o.onChannelInput(c,h,255)}),k.addEventListener("click",()=>{let h=o.getRgbForCopy();So(`${h.r}, ${h.g}, ${h.b}`),Lo(k)})}let t=document.createElement("div");t.className="box-picker-hexrow";let d=document.createElement("div");d.className="box-picker-hexwrap";let m=document.createElement("label");m.textContent="Hex",d.appendChild(m),d.appendChild(r),t.appendChild(i),t.appendChild(d),e.appendChild(t),e._inputs={hexInput:r,inputs:s,labels:u}}if(n.showCorners){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),u=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256);o.onRandom({r:s,g:u,b:a})}),e.appendChild(r);let i=document.createElement("button");i.className="box-corner-btn box-corner-right",i.title="Reset",i.setAttribute("aria-label","Reset"),i.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',i.addEventListener("click",()=>o.onReset()),e.appendChild(i)}}function $o(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Io=`.box-picker {\r
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
`;var kt=Qo,Fo=!1;function jo(){if(Fo||typeof document>"u")return;Fo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Io,document.head.appendChild(e)}function Qo(e,o={}){let n=o.size??300,r=o.controls??!0,i=o.showInputs??!1,s=o.showModeToggle??!1,u=o.showCorners??!1,a={mode:()=>t,switchMode:l=>X(l),onHexInput:l=>{let g=Oe(l);g?(c=fe(P?{r:255-g.r,g:255-g.g,b:255-g.b}:g,t),m={x:Math.max(m.x,c.x),y:Math.max(m.y,c.y),z:Math.max(m.z,c.z)},oe(),Q(),I()):Q()},onChannelInput:(l,g,C)=>{let E=Math.max(0,Math.min(C,g)),L=["x","y","z"],D=E/C;if(P){let ke={...c,[L[l]]:D},me=ae(ke,t);c=fe({r:255-me.r,g:255-me.g,b:255-me.b},t)}else c={...c,[L[l]]:D};D>m[L[l]]&&(m={...m,[L[l]]:D}),oe(),Q(),I()},getRgbForCopy:()=>ae(c,t),onRandom:l=>Me(l),onReset:()=>Me({r:0,g:0,b:0})},t=o.mode??"rgb",d=o.initialColor?fe(o.initialColor,t):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},c={...d},b=0,y=()=>o.alpha!==void 0,k=Math.max(0,Math.min(1,o.alpha??1));function h(l){let g=Math.max(0,Math.min(1,l));g!==k&&(k=g,oe(),Q(),I())}function A(l){let g=ue(),C=pe(g);C.s=Math.max(0,Math.min(100,l*100));let E=He(C);Me(P?{r:255-E.r,g:255-E.g,b:255-E.b}:E)}let x=new Set;jo();let v=document.createElement("div");v.className="box-picker";let M=document.createElement("canvas");M.style.cursor="grab",v.appendChild(M);let w=Ao(M,n),V={...Ee},R=!0,_=null,G=document.createElement("div");G.className="box-picker-controls",_=document.createElement("div"),_.className="box-picker-swatch",G.appendChild(_),v.appendChild(G),(i||s||u)&&Po(G,a,{showInputs:i,showModeToggle:s,showCorners:u}),e.appendChild(v);let re=Do(M,()=>m,l=>{m=l},()=>c,(l,g)=>{c=l,b=g,oe(),Q()},()=>b,()=>w.scale,()=>w.center,I,y,h,()=>k,()=>U(c,w.scale,w.center),A,()=>pe(ue()).s/100),P=!1;M.addEventListener("dblclick",()=>{P=!P,uo(P),oe(),Q(),I()});function X(l){if(l===t)return;let g=ae(c,t),C={...c},E={...m};t=l;let L=fe(g,t),D={x:1,y:1,z:1};c=L,m=D,ie(C,L,E,D,300),Q()}let O=null;function ie(l,g,C,E,L){O!==null&&cancelAnimationFrame(O);let D=performance.now();function ke(me){let he=me-D,Ae=Math.min(1,he/L),le=1-Math.pow(1-Ae,3);c={x:l.x+(g.x-l.x)*le,y:l.y+(g.y-l.y)*le,z:l.z+(g.z-l.z)*le},m={x:C.x+(E.x-C.x)*le,y:C.y+(E.y-C.y)*le,z:C.z+(E.z-C.z)*le},N(),oe(),Ae<1?O=requestAnimationFrame(ke):O=null}O=requestAnimationFrame(ke)}let Z=!1;function I(){Z||(Z=!0,requestAnimationFrame(()=>{Z=!1,N()}))}function N(){Vo(w,m,c,b,t,re.state,V,{active:re.state.alphaMode,alpha:k,rgb:ue()})}function se(l,g,C){return Math.round(l+(g-l)*C)}function j(l,g){let C=g>0?255:0,E=Math.abs(g);return Re({r:se(l.r,C,E),g:se(l.g,C,E),b:se(l.b,C,E)})}function be(l,g){let C=Oe(g)||{r:128,g:128,b:128},E=j(C,.35),L=j(C,0),D=j(C,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${E}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${D}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function de(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function Ce(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function ue(){let l=ae(c,t);return P?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function Q(){if(!r)return;let l=ue(),g=Re(l);_&&be(_,g);let C=v.querySelector(".box-picker-hex");C&&(C.value=g),ee(),v._updateModeButtons&&v._updateModeButtons()}function ee(){if(!r)return;let l=eo[t],g=P?fe(ue(),t):c,C=ro(g,t),E=v.querySelectorAll(".box-picker-channel input"),L=v.querySelectorAll(".box-picker-channel label");for(let D=0;D<E.length;D++)L[D].textContent=l[D],L[D].style.color="",L[D].style.textShadow="none",E[D].value=String(C[D])}function oe(){let l=ue(),g={rgb:l,hsb:pe(l),oklch:Te(l),hex:Re(l),alpha:k};for(let C of x)C(g)}function ze(){let l=ae(c,t);return{rgb:l,hsb:pe(l),oklch:Te(l),hex:Re(l)}}Q(),N();let Me=l=>{c=fe(l,t),m={x:Math.max(m.x,c.x),y:Math.max(m.y,c.y),z:Math.max(m.z,c.z)};let g=U(c,w.scale,w.center);b=-1;for(let C=$.length-1;C>=0;C--)if(ve(C,g,m,w.scale,w.center)){b=C;break}oe(),Q(),I()};return{getColor:ze,getMode:()=>t,setColor:Me,setAlpha:h,getAlpha:()=>k,setMode(l){X(l)},getRotation:()=>ho(),setRotation:(l,g)=>{xo(l,g),I()},getAxisRotation:()=>bo(),setAxisRotation:(l,g,C)=>{mo(l,g,C),I()},getGuides:()=>({...V}),setGuides:l=>{V={...V,...l},I()},toggleAllGuides:l=>{let g=l!==void 0?l:!R;R=g,V={vertexX:g,vertexY:g,vertexZ:g,centerX:g,centerY:g,centerZ:g,angleGuides:g,yawArc:g,pitchArc:g},I()},setZoom:l=>{go(l),I()},getZoom:()=>po(),setDimensions:(l,g,C)=>{yo(l,g,C),I()},getDimensions:()=>vo(),setRadius:l=>{Co(l),I()},getRadius:()=>Mo(),getEdgeStyle:()=>Ro(),setEdgeStyle:l=>{wo(l),I()},on(l,g){x.add(g)},off(l,g){x.delete(g)},destroy(){re.destroy(),O!==null&&cancelAnimationFrame(O),e.removeChild(v)}}}export{Ie as DEFAULT_EDGE_CONFIG,Ee as DEFAULT_GUIDES,Qo as createBoxColorPicker,kt as createColorPicker,vo as getBoxDimensions,Mo as getBoxRadius,ho as getCameraAnglesDeg,Ro as getEdgeStyle,bo as getRotationDeg,po as getZoomMultiplier,yo as setBoxDimensions,uo as setBoxInvert,Co as setBoxRadius,xo as setCameraAnglesDeg,wo as setEdgeStyle,mo as setRotationDeg,go as setZoomMultiplier};
