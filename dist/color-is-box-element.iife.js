var ColorIsBoxElement=(()=>{var Be=Object.defineProperty;var $t=Object.getOwnPropertyDescriptor;var Zt=Object.getOwnPropertyNames;var Yt=Object.prototype.hasOwnProperty;var Nt=(e,t)=>{for(var n in t)Be(e,n,{get:t[n],enumerable:!0})},Ut=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Zt(t))!Yt.call(e,r)&&r!==n&&Be(e,r,{get:()=>t[r],enumerable:!(o=$t(t,r))||o.enumerable});return e};var Wt=e=>Ut(Be({},"__esModule",{value:!0}),e);var bo={};Nt(bo,{ColorIsBoxElement:()=>Ge,DEFAULT_EDGE_CONFIG:()=>Le,DEFAULT_GUIDES:()=>Ve,createBoxColorPicker:()=>_t,createColorPicker:()=>rt,default:()=>uo,getBoxDimensions:()=>et,getCameraAnglesDeg:()=>je,getEdgeStyle:()=>ot,getRotationDeg:()=>Ue,getZoomMultiplier:()=>Je,setBoxDimensions:()=>qe,setBoxInvert:()=>Ye,setCameraAnglesDeg:()=>Ke,setEdgeStyle:()=>tt,setRotationDeg:()=>We,setZoomMultiplier:()=>Qe});var Le={showVisible:!0,showHidden:!1,width:1.5,dashed:!1,color:"#ffffff",opacity:.45},Ve={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,yawArc:!0,pitchArc:!0},xt={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},yt={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function oe(e){let t=e.r/255,n=e.g/255,o=e.b/255,r=Math.max(t,n,o),a=Math.min(t,n,o),c=r-a,s=0;c!==0&&(r===t?s=((n-o)/c+6)%6:r===n?s=(o-t)/c+2:s=(t-n)/c+4,s*=60);let i=r===0?0:c/r*100,d=r*100;return{h:s,s:i,b:d}}function be(e){let t=e.h,n=e.s/100,o=e.b/100,r=o*n,a=r*(1-Math.abs(t/60%2-1)),c=o-r,s,i,d;return t<60?(s=r,i=a,d=0):t<120?(s=a,i=r,d=0):t<180?(s=0,i=r,d=a):t<240?(s=0,i=a,d=r):t<300?(s=a,i=0,d=r):(s=r,i=0,d=a),{r:Math.round((s+c)*255),g:Math.round((i+c)*255),b:Math.round((d+c)*255)}}function _e(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Xe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function jt(e){let t=_e(e.r/255),n=_e(e.g/255),o=_e(e.b/255),r=.4122214708*t+.5363325363*n+.0514459929*o,a=.2119034982*t+.6806995451*n+.1073969566*o,c=.0883024619*t+.2817188376*n+.6299787005*o,s=Math.cbrt(r),i=Math.cbrt(a),d=Math.cbrt(c);return{L:.2104542553*s+.793617785*i-.0040720468*d,a:1.9779984951*s-2.428592205*i+.4505937099*d,b:.0259040371*s+.7827717662*i-.808675766*d}}function Kt(e,t,n){let o=e+.3963377774*t+.2158037573*n,r=e-.1055613458*t-.0638541728*n,a=e-.0894841775*t-1.291485548*n,c=o*o*o,s=r*r*r,i=a*a*a,d=4.0767416621*c-3.3077115913*s+.2309699292*i,h=-1.2684380046*c+2.6097574011*s-.3413193965*i,b=-.0041960863*c-.7034186147*s+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,Xe(d)))*255),g:Math.round(Math.max(0,Math.min(1,Xe(h)))*255),b:Math.round(Math.max(0,Math.min(1,Xe(b)))*255)}}function ge(e){let t=jt(e),n=Math.sqrt(t.a*t.a+t.b*t.b),o=Math.atan2(t.b,t.a)*(180/Math.PI);return o<0&&(o+=360),{l:t.L,c:n,h:n<1e-4?0:o}}function Ee(e){let t=e.h*(Math.PI/180),n=e.c*Math.cos(t),o=e.c*Math.sin(t);return Kt(e.l,n,o)}function Qt(e,t,n){let o=Ee({l:e,c:t,h:n});if(vt(o))return{l:e,c:t,h:n};let r=0,a=t;for(let c=0;c<20;c++){let s=(r+a)/2;o=Ee({l:e,c:s,h:n}),vt(o)?r=s:a=s}return{l:e,c:r,h:n}}function vt(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function de(e){let t=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${t(e.r)}${t(e.g)}${t(e.b)}`}function pe(e){let t=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}var Mt=.4;function se(e,t){if(t==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(t==="hsb")return be({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,o=e.y*Mt,r=e.z*359,a=Qt(n,o,r);return Ee(a)}}function he(e,t){if(t==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(t==="hsb"){let n=oe(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ge(e);return{x:n.l,y:Math.min(n.c/Mt,1),z:n.h/359}}}function Ct(e,t){let n=yt[t];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function kt(e,t,n,o,r,a=!1){let c;e===0?c={x:o,y:t,z:n}:e===1?c={x:t,y:o,z:n}:c={x:t,y:n,z:o};let s=se(c,r);return a?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var At={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},wt={sizeX:1,sizeY:1,sizeZ:1};function Oe(e,t,n){let o=(e.x-.5)*n.sizeX,r=(e.y-.5)*n.sizeY,a=(e.z-.5)*n.sizeZ,c=Math.cos(t.rotZRad),s=Math.sin(t.rotZRad),i=o*c-r*s,d=o*s+r*c,h=a,b=Math.cos(t.rotYRad),M=Math.sin(t.rotYRad),k=i*b+h*M,w=d,x=-i*M+h*b,g=Math.cos(t.rotXRad),m=Math.sin(t.rotXRad),y=k,V=x*g-w*m,C=x*m+w*g;return{x:y,y:V,z:C}}function De(e,t,n,o,r){let a=Oe(e,o,r);return{x:n.x+a.x*t*1.6*o.zoom,y:n.y-a.y*t*1.6*o.zoom}}var xe=["#ef4444","#22c55e","#3b82f6"];function Rt(e,t,n,o,r,a){let c=g=>De(g,t,n,o,r),s=c({x:0,y:0,z:0});e.save();let i=1.28,d=[{p:{x:i,y:0,z:0},name:"X",color:xe[0],visible:a.vertexX},{p:{x:0,y:i,z:0},name:"Y",color:xe[1],visible:a.vertexY},{p:{x:0,y:0,z:i},name:"Z",color:xe[2],visible:a.vertexZ}];for(let g=0;g<d.length;g++){if(!d[g].visible)continue;let m=c(d[g].p),y=d[g].color;e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(m.x,m.y),e.strokeStyle=y,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(m.x,m.y,3.5,0,Math.PI*2),e.fillStyle=y,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let V=m.x-s.x,C=m.y-s.y,z=Math.hypot(V,C)||1,A=12,G=m.x+V/z*A,P=m.y+C/z*A;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=y,e.fillText(d[g].name,G,P)}(a.vertexX||a.vertexY||a.vertexZ)&&(e.beginPath(),e.arc(s.x,s.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let h=c({x:.5,y:.5,z:.5}),b=.35,M=[{from:{x:-b,y:.5,z:.5},to:{x:1+b,y:.5,z:.5},color:xe[0],name:"Cx",visible:a.centerX},{from:{x:.5,y:-b,z:.5},to:{x:.5,y:1+b,z:.5},color:xe[1],name:"Cy",visible:a.centerY},{from:{x:.5,y:.5,z:-b},to:{x:.5,y:.5,z:1+b},color:xe[2],name:"Cz",visible:a.centerZ}],k=!1;for(let g=0;g<M.length;g++){if(!M[g].visible)continue;k=!0;let m=c(M[g].from),y=c(M[g].to);e.beginPath(),e.moveTo(m.x,m.y),e.lineTo(y.x,y.y),e.strokeStyle=M[g].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(m.x,m.y,3,0,Math.PI*2),e.arc(y.x,y.y,3,0,Math.PI*2),e.fillStyle=M[g].color,e.fill()}k&&(e.beginPath(),e.arc(h.x,h.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let w=Math.round(o.rotZRad*180/Math.PI*10)/10,x=Math.round(o.rotXRad*180/Math.PI*10)/10;if(a.yawArc){e.beginPath();let g=36;for(let m=0;m<=g;m++){let y=m/g*Math.PI*2,V={x:.5+Math.cos(y)*.75,y:.5+Math.sin(y)*.75,z:0},C=c(V);m===0?e.moveTo(C.x,C.y):e.lineTo(C.x,C.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([])}if(a.pitchArc){e.beginPath();let g=20;for(let m=0;m<=g;m++){let y=-Math.PI/2+m/g*Math.PI,V={x:.5+Math.cos(y)*.75,y:.5,z:.5+Math.sin(y)*.75},C=c(V);m===0?e.moveTo(C.x,C.y):e.lineTo(C.x,C.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([])}(a.yawArc||a.pitchArc)&&(e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",a.yawArc&&(e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${w.toFixed(1)}\xB0`,12,n.y*2-(a.pitchArc?24:10))),a.pitchArc&&(e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${x.toFixed(1)}\xB0`,12,n.y*2-10))),e.restore()}var Ze=!1;function Ye(e){Ze=e}var F={...At},le={...wt};function Te(e,t){F.rotZRad=-30*(Math.PI/180)+e,F.rotXRad=20*(Math.PI/180)+t}function Ne(){return{yaw:F.rotZRad- -30*(Math.PI/180),pitch:F.rotXRad-20*(Math.PI/180)}}function Vt(){F.rotXRad=20*(Math.PI/180),F.rotYRad=0,F.rotZRad=-30*(Math.PI/180)}function Ue(){return{rotXDeg:Math.round(F.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(F.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(F.rotZRad*180/Math.PI*10)/10}}function We(e,t,n){F.rotXRad=e*Math.PI/180,F.rotYRad=t*Math.PI/180,F.rotZRad=n*Math.PI/180}function je(){return{yawDeg:Math.round(F.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(F.rotXRad*180/Math.PI*10)/10}}function Ke(e,t){F.rotZRad=e*Math.PI/180,F.rotXRad=t*Math.PI/180}function Qe(e){F.zoom=Math.max(.1,Math.min(3,e))}function Je(){return F.zoom}function qe(e,t,n){le.sizeX=Math.max(.1,Math.min(2.5,e)),le.sizeY=Math.max(.1,Math.min(2.5,t)),le.sizeZ=Math.max(.1,Math.min(2.5,n))}function et(){return{sizeX:le.sizeX,sizeY:le.sizeY,sizeZ:le.sizeZ}}function O(e,t,n){return De(e,t,n,F,le)}function $e(e){return Oe(e,F,le)}function Jt(e){let{x:t,y:n,z:o}=e;return[{x:0,y:0,z:0},{x:t,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:o},{x:t,y:n,z:0},{x:t,y:0,z:o},{x:0,y:n,z:o},{x:t,y:n,z:o}]}var J=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],qt=64,Et={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Tt(e,t){let n=window.devicePixelRatio||1;e.width=t*n,e.height=t*1*n,e.style.width=`${t}px`,e.style.height=`${t*1}px`;let o=e.getContext("2d");return o.scale(n,n),{ctx:o,scale:t*.26,center:{x:t/2,y:t*.5},width:t,height:t*1}}var Pe={...Le};function tt(e){Pe={...Pe,...e}}function ot(){return{...Pe}}var eo=[[0,1],[1,4],[4,2],[2,0],[3,5],[5,7],[7,6],[6,3],[0,3],[1,5],[4,7],[2,6]];function to(e,t,n,o){if(!(!o.showVisible&&!o.showHidden)){e.save(),e.lineWidth=o.width,o.dashed?e.setLineDash([4,3]):e.setLineDash([]);for(let[r,a]of eo){let c=t[r],s=t[a],i={x:(n[r].x+n[a].x)*.5,y:(n[r].y+n[a].y)*.5,z:(n[r].z+n[a].z)*.5},h=$e(i).z<=0;h&&o.showVisible?(e.strokeStyle=o.color,e.globalAlpha=o.opacity,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(s.x,s.y),e.stroke()):!h&&o.showHidden&&(e.strokeStyle=o.color,e.globalAlpha=o.opacity*.45,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(s.x,s.y),e.stroke())}e.restore()}}function zt(e,t,n,o,r,a,c=!0,s=null){let{ctx:i,scale:d,center:h,width:b,height:M}=e;i.save(),i.clearRect(0,0,b,M);let k=Jt(t),w=k.map(g=>O(g,d,h));if(i.save(),i.shadowColor="rgba(0,0,0,0.35)",i.shadowBlur=8,i.shadowOffsetX=0,i.shadowOffsetY=2,oo(i,w,k,t,r,a.viewRotating),i.restore(),to(i,w,k,Pe),Rt(i,d,h,F,le,typeof c=="boolean"?c?Ve:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:c),o>=0){let g=se(n,r),m=Ze?{r:255-g.r,g:255-g.g,b:255-g.b}:g,y=O(n,d,h);s&&s.active&&ro(i,y,s.rgb,s.alpha),io(i,y,m)}i.restore()}function oo(e,t,n,o,r,a){let c=[o.x,o.y,o.z],s=[];for(let i=0;i<J.length;i++){let d=J[i],h=d.fixedValue*c[d.fixedAxis],b=c[d.uAxis],M=c[d.vAxis];if(b<.002&&M<.002)continue;let k={x:0,y:0,z:0},w=["x","y","z"];k[w[d.fixedAxis]]=h,k[w[d.uAxis]]=b*.5,k[w[d.vAxis]]=M*.5;let x=$e(k),g={x:k.x+d.normal.x*.1,y:k.y+d.normal.y*.1,z:k.z+d.normal.z*.1};if($e(g).z-x.z<0){let V=d.quad.map(C=>t[C]);s.push({face:d,corners:V,fixedVal:h,uMax:b,vMax:M,depth:x.z})}}s.sort((i,d)=>d.depth-i.depth);for(let i of s)no(e,i.corners,i.face.fixedAxis,i.fixedVal,i.uMax,i.vMax,r)}function no(e,t,n,o,r,a,c){let s=qt,i=document.createElement("canvas");i.width=s,i.height=s;let d=i.getContext("2d"),h=d.createImageData(s,s),b=h.data;for(let q=0;q<s;q++)for(let K=0;K<s;K++){let U=K/(s-1)*r,re=q/(s-1)*a,Z=kt(n,U,re,o,c,Ze),W=(q*s+K)*4;b[W]=Z.r,b[W+1]=Z.g,b[W+2]=Z.b,b[W+3]=255}d.putImageData(h,0,0);let M=t[0],k=t[1],w=t[2],x=t[3],g=k.x-M.x,m=k.y-M.y,y=x.x-M.x,V=x.y-M.y;e.save(),e.beginPath(),e.moveTo(M.x,M.y),e.lineTo(k.x,k.y),e.lineTo(w.x,w.y),e.lineTo(x.x,x.y),e.closePath(),e.clip();let C=2/s,z=M.x-g*C-y*C,A=M.y-m*C-V*C,G=1+2*C,P=1+2*C;e.transform(g*G/s,m*G/s,y*P/s,V*P/s,z,A),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}var ne=30,ue=13;function ro(e,t,n,o){let r=(ne+ue)/2,a=5,c=Math.floor(t.x/a)*a,s=Math.floor(t.y/a)*a,i=ne*2+a*2,d=Math.max(0,Math.min(1,o));e.save(),e.beginPath(),e.arc(t.x,t.y,ne,0,Math.PI*2),e.arc(t.x,t.y,ue,0,Math.PI*2,!0),e.clip();for(let g=-1;g*a<=i;g++)for(let m=-1;m*a<=i;m++)e.fillStyle=(g+m)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+g*a,s+m*a,a,a);let h="rgba("+n.r+","+n.g+","+n.b+",0)",b="rgba("+n.r+","+n.g+","+n.b+",1)",M=e;if(typeof M.createConicGradient=="function"){let g=M.createConicGradient(-Math.PI/2,t.x,t.y);g.addColorStop(0,h),g.addColorStop(1,b),e.fillStyle=g,e.fillRect(c-ne,s-ne,i,i)}else for(let m=0;m<36;m++){let y=-Math.PI/2+m/36*Math.PI*2,V=-Math.PI/2+(m+1)/36*Math.PI*2,C=(m+.5)/36;e.beginPath(),e.moveTo(t.x+Math.cos(y)*ue,t.y+Math.sin(y)*ue),e.arc(t.x,t.y,ne,y,V),e.arc(t.x,t.y,ue,V,y,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+C.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(t.x,t.y,ne,0,Math.PI*2),e.arc(t.x,t.y,ue,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(t.x,t.y-ne-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=d*Math.PI*2,w=t.x+r*Math.sin(k),x=t.y-r*Math.cos(k);e.beginPath(),e.arc(w,x,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function io(e,t,n){e.beginPath(),e.arc(t.x,t.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(t.x,t.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function St(e,t,n,o){let r=[{x:t.x,y:0,z:0},{x:0,y:t.y,z:0},{x:0,y:0,z:t.z}];return O(r[e],n,o)}function nt(){let e={x:0,y:0};return[O({x:1,y:0,z:0},1,e),O({x:0,y:1,z:0},1,e),O({x:0,y:0,z:1},1,e)].map(n=>{let o=Math.sqrt(n.x*n.x+n.y*n.y);return o>0?{x:n.x/o,y:n.y/o}:{x:0,y:0}})}function ye(e,t,n,o,r){let a=J[e],c=[n.x,n.y,n.z],s=c[a.uAxis],i=c[a.vAxis];if(s<.002||i<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[a.fixedAxis]]=a.fixedValue*c[a.fixedAxis];let b={...d};b[h[a.uAxis]]=s;let M={...d};M[h[a.vAxis]]=i;let k=O(d,o,r),w=O(b,o,r),x=O(M,o,r),g=w.x-k.x,m=w.y-k.y,y=x.x-k.x,V=x.y-k.y,C=g*V-m*y;if(Math.abs(C)<1e-6)return null;let z=t.x-k.x,A=t.y-k.y,G=(z*V-A*y)/C,P=(A*g-z*m)/C;return G<-.05||G>1.05||P<-.05||P>1.05?null:{s:Math.max(0,Math.min(1,G)),t:Math.max(0,Math.min(1,P))}}function Lt(e,t,n,o,r){let a=J[e],c=[n.x,n.y,n.z],s=c[a.uAxis],i=c[a.vAxis];if(s<.002||i<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[a.fixedAxis]]=a.fixedValue*c[a.fixedAxis];let b={...d};b[h[a.uAxis]]=s;let M={...d};M[h[a.vAxis]]=i;let k=O(d,o,r),w=O(b,o,r),x=O(M,o,r),g=w.x-k.x,m=w.y-k.y,y=x.x-k.x,V=x.y-k.y,C=g*V-m*y;if(Math.abs(C)<1e-6)return null;let z=t.x-k.x,A=t.y-k.y,G=(z*V-A*y)/C,P=(A*g-z*m)/C;return{s:Math.max(0,Math.min(1,G)),t:Math.max(0,Math.min(1,P))}}var Dt=22;function Pt(e,t,n,o,r,a,c,s,i,d,h,b,M,k,w){let x={...Et};function g(u){let p=e.getBoundingClientRect();return{x:u.clientX-p.left,y:u.clientY-p.top}}let m=!1,y=!1,V=!1,C=!1,z=!1,A=null,G=600,P=null;function q(){K(),P=setTimeout(U,G)}function K(){P!==null&&(clearTimeout(P),P=null)}function U(){P=null,x.alphaMode=!1,ze(),l(),z=!0,x.viewRotating=!0,A=null,i()}let re=14,Z=800,W=null;function fe(){L(),W=setTimeout(ve,Z)}function L(){W!==null&&(clearTimeout(W),W=null),K()}function ve(){W=null,x.alphaMode=!0,l(),ze(),y=!1,i()}function ie(u){let p=M();return Math.hypot(u.x-p.x,u.y-p.y)}function Me(u){let p=M();return(Math.atan2(u.x-p.x,-(u.y-p.y))+Math.PI*2)%(Math.PI*2)}function ce(u){h(Me(u)/(Math.PI*2)),i()}function Ce(u){let p=ie(u);return p>=ue-4&&p<=ne+6}function Xt(u){let p=t(),R=c(),S=s();for(let T=0;T<3;T++){let I=St(T,p,R,S),B=u.x-I.x,$=u.y-I.y;if(B*B+$*$<=Dt*Dt)return T}return-1}function ae(u){let p=t(),R=c(),S=s();for(let T=J.length-1;T>=0;T--){let I=ye(T,u,p,R,S);if(I)return{faceIndex:T,...I}}return null}let _=-1,ke={x:0,y:0},ee=0;function lt(u,p){_=u,ke=p,ee=t()[["x","y","z"][u]],x.draggingAxisHandle=u,e.style.cursor="grabbing",i()}function Ae(u){if(L(),_<0)return;let p=u.x-ke.x,R=u.y-ke.y,T=nt()[_],I=c(),$=(p*T.x+R*T.y)/I,Q=Math.max(0,Math.min(1,ee+$)),N=t(),X=["x","y","z"],me={...N,[X[_]]:Q};n(me);let Re=o(),gt=a(),pt=gt>=0?J[gt]:null,He={...Re};pt&&_===pt.fixedAxis?He[X[_]]=Q:He[X[_]]=Math.min(Re[X[_]],Q),r(He,a()),i()}function l(){_=-1,x.draggingAxisHandle=-1}let f=-1,v=null,E=null,D=!1;function H(u,p,R,S){f=u,x.draggingFace=u,v=null,E=null,D=!1,S&&(D=!0,E={s:p,t:R}),te(u,p,R),e.style.cursor="crosshair",i()}function we(u,p,R){if(L(),f<0)return;let S=t(),T=c(),I=s(),B=ye(f,u,S,T,I),$=f;if(!B&&!R){for(let X=J.length-1;X>=0;X--)if(X!==f&&(B=ye(X,u,S,T,I),B)){$=X;break}}if(!B&&R&&(B=Lt(f,u,S,T,I),$=f),!B){i();return}$!==f&&(f=$,x.draggingFace=$,v=null,D=!1,E=null);let{s:Q,t:N}=B;if(p&&E){if(D){let X=Math.abs(Q-E.s),me=Math.abs(N-E.t),Re=.02;(X>Re||me>Re)&&(v=X>=me?"u":"v",D=!1)}v==="u"?N=E.t:v==="v"&&(Q=E.s)}else p||(v=null,D=!1,E=null);te($,Q,N),i()}function te(u,p,R){let S=J[u],T=t(),I=["x","y","z"],B={...o()};B[I[S.uAxis]]=p*T[I[S.uAxis]],B[I[S.vAxis]]=R*T[I[S.vAxis]],B[I[S.fixedAxis]]=S.fixedValue*T[I[S.fixedAxis]],r(B,u)}function ze(){f=-1,x.draggingFace=-1,v=null,D=!1,E=null}let Se=null,Y=!1,j=null;function ct(u){V=!0;let p=g(u);if(Se=p,Y=!1,j=null,d()&&x.alphaMode){if(ie(p)<=re){x.alphaMode=!1,i();return}if(Ce(p)){u.preventDefault(),m=!0,ce(p);return}x.alphaMode=!1,i();return}let R=ae(p);R&&(j={faceIndex:R.faceIndex,s:R.s,t:R.t}),u.preventDefault(),z=!0,A=p,x.viewRotating=!0,d()&&ie(p)<=re&&fe(),i()}function dt(u){let p=g(u);if(m){u.preventDefault(),ce(p);return}if(z){if(u.preventDefault(),!A){A=p;return}let R=p.x-A.x,S=p.y-A.y;Math.hypot(R,S)>2&&(Y=!0,L());let T=Ne();Te(T.yaw+R*.012,T.pitch+S*.012),A=p,i();return}if(V&&x.alphaMode&&Ce(p)){u.preventDefault(),m=!0,ce(p);return}e.style.cursor="grab"}function ut(u){L(),V=!1,m=!1,y=!1,!Y&&j&&te(j.faceIndex,j.s,j.t),z&&(z=!1,x.viewRotating=!1,A=null,i()),e.style.cursor="grab"}function bt(u){if(u.touches.length!==1)return;C=!0;let p=g(u.touches[0]);if(Y=!1,j=null,d()&&x.alphaMode){if(ie(p)<=re){x.alphaMode=!1,i();return}if(Ce(p)){u.preventDefault(),m=!0,ce(p);return}x.alphaMode=!1,i();return}let R=ae(p);R&&(j={faceIndex:R.faceIndex,s:R.s,t:R.t}),u.preventDefault(),z=!0,A=p,x.viewRotating=!0,d()&&ie(p)<=re&&fe(),i()}function ht(u){if(u.touches.length!==1)return;let p=g(u.touches[0]);if(m)u.preventDefault(),ce(p);else if(C&&x.alphaMode&&Ce(p))u.preventDefault(),m=!0,ce(p);else if(z){if(u.preventDefault(),!A){A=p;return}let R=p.x-A.x,S=p.y-A.y;Math.hypot(R,S)>2&&(Y=!0,L());let T=Ne();Te(T.yaw+R*.012,T.pitch+S*.012),A=p,i()}}function ft(u){L(),C=!1,m=!1,!Y&&j&&te(j.faceIndex,j.s,j.t),z&&(z=!1,x.viewRotating=!1,A=null,i())}function mt(u){if(u.key==="1"){Te(Math.PI/4,0),i();return}if(u.key==="0"){Vt(),i();return}if(u.key==="2"){Te(.95,-.54),i();return}if(x.alphaMode){if(u.key==="Escape"){x.alphaMode=!1,i();return}if(u.key==="ArrowUp"||u.key==="ArrowRight"){u.preventDefault(),h(Math.min(1,b()+(u.shiftKey?.08:.02))),i();return}if(u.key==="ArrowDown"||u.key==="ArrowLeft"){u.preventDefault(),h(Math.max(0,b()-(u.shiftKey?.08:.02))),i();return}}let p=u.shiftKey?.04:.004,R=o(),S=t(),T=nt(),I=0,B=0;switch(u.key){case"ArrowRight":I=1;break;case"ArrowLeft":I=-1;break;case"ArrowUp":B=-1;break;case"ArrowDown":B=1;break;default:return}u.preventDefault();let $={...R},Q=["x","y","z"];for(let N=0;N<3;N++){let X=I*T[N].x+B*T[N].y;if(Math.abs(X)>.3){let me=R[Q[N]]+p*Math.sign(X);$[Q[N]]=Math.max(0,Math.min(S[Q[N]],me))}}r($,a()),i()}e.addEventListener("mousedown",ct),window.addEventListener("mousemove",dt),window.addEventListener("mouseup",ut),e.addEventListener("touchstart",bt,{passive:!1}),e.addEventListener("touchmove",ht,{passive:!1}),e.addEventListener("touchend",ft),e.addEventListener("keydown",mt),e.setAttribute("tabindex","0");function Ot(){L(),e.removeEventListener("mousedown",ct),window.removeEventListener("mousemove",dt),window.removeEventListener("mouseup",ut),e.removeEventListener("touchstart",bt),e.removeEventListener("touchmove",ht),e.removeEventListener("touchend",ft),e.removeEventListener("keydown",mt)}return{state:x,destroy:Ot}}function It(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Ft(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Gt(e,t,n){if(n.showModeToggle){let o=document.createElement("div");o.className="box-picker-mode-toggle";let r=h=>{let b=document.createElement("button");return b.textContent=h.toUpperCase(),b.addEventListener("click",()=>t.switchMode(h)),o.appendChild(b),b},a=r("oklch"),c=r("rgb"),s=r("hsb"),i=()=>{let h=t.mode();c.classList.toggle("active",h==="rgb"),s.classList.toggle("active",h==="hsb"),a.classList.toggle("active",h==="oklch")};i();let d=t.switchMode;t._markActive=i,e.appendChild(o)}if(n.showInputs){let o=document.createElement("input");o.className="box-picker-hex",o.type="text",o.spellcheck=!1,o.addEventListener("change",()=>{let b=o.value;/^#?[0-9a-f]{6}$/i.test(b)?t.onHexInput(b):t.onHexInput("")}),o.addEventListener("click",()=>{It(t.getRgbForCopy()?"#"+ao(t.getRgbForCopy()):"#ffffff"),Ft(o)});let r=document.createElement("div");r.className="box-picker-channels";let a=[],c=[],s=["R","G","B"];for(let b=0;b<3;b++){let M=document.createElement("div");M.className="box-picker-channel";let k=document.createElement("label");k.textContent=s[b];let w=document.createElement("input");w.type="text",w.inputMode="numeric",M.appendChild(k),M.appendChild(w),r.appendChild(M),a.push(w),c.push(k),w.addEventListener("change",()=>{let x=parseFloat(w.value);isNaN(x)||t.onChannelInput(b,x,255)}),w.addEventListener("click",()=>{let x=t.getRgbForCopy();It(`${x.r}, ${x.g}, ${x.b}`),Ft(w)})}let i=document.createElement("div");i.className="box-picker-hexrow";let d=document.createElement("div");d.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",d.appendChild(h),d.appendChild(o),i.appendChild(r),i.appendChild(d),e.appendChild(i),e._inputs={hexInput:o,inputs:a,labels:c}}if(n.showCorners){let o=document.createElement("button");o.className="box-corner-btn box-corner-left",o.title="Random color",o.setAttribute("aria-label","Random color"),o.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',o.addEventListener("click",()=>{let a=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);t.onRandom({r:a,g:c,b:s})}),e.appendChild(o);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>t.onReset()),e.appendChild(r)}}function ao(e){let t=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return t(e.r)+t(e.g)+t(e.b)}var Ht=`.box-picker {\r
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
`;var rt=_t,Bt=!1;function lo(){if(Bt||typeof document>"u")return;Bt=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ht,document.head.appendChild(e)}function _t(e,t={}){let n=t.size??300,o=t.controls??!0,r=t.showInputs??!1,a=t.showModeToggle??!1,c=t.showCorners??!1,s={mode:()=>i,switchMode:l=>re(l),onHexInput:l=>{let f=pe(l);f?(b=he(U?{r:255-f.r,g:255-f.g,b:255-f.b}:f,i),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)},ee(),_(),L()):_()},onChannelInput:(l,f,v)=>{let E=Math.max(0,Math.min(v,f)),D=["x","y","z"],H=E/v;if(U){let we={...b,[D[l]]:H},te=se(we,i);b=he({r:255-te.r,g:255-te.g,b:255-te.b},i)}else b={...b,[D[l]]:H};H>h[D[l]]&&(h={...h,[D[l]]:H}),ee(),_(),L()},getRgbForCopy:()=>se(b,i),onRandom:l=>Ae(l),onReset:()=>Ae({r:0,g:0,b:0})},i=t.mode??"rgb",d=t.initialColor?he(t.initialColor,i):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},b={...d},M=0,k=()=>t.alpha!==void 0,w=Math.max(0,Math.min(1,t.alpha??1));function x(l){let f=Math.max(0,Math.min(1,l));f!==w&&(w=f,ee(),_(),L())}function g(l){let f=ae(),v=oe(f);v.s=Math.max(0,Math.min(100,l*100));let E=be(v);Ae(U?{r:255-E.r,g:255-E.g,b:255-E.b}:E)}let m=new Set;lo();let y=document.createElement("div");y.className="box-picker";let V=document.createElement("canvas");V.style.cursor="grab",y.appendChild(V);let C=Tt(V,n),z={...Ve},A=!0,G=document.createElement("button");G.className="box-axis-toggle-btn active",G.title="Toggle All Guides",G.setAttribute("aria-label","Toggle All Guides"),G.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 21V3"/><path d="M3 21l7-7"/><path d="M19 17l2 4-4-2"/><path d="M7 5l-4-2 2 4"/></svg>',G.addEventListener("click",l=>{l.stopPropagation(),A=!A,z={vertexX:A,vertexY:A,vertexZ:A,centerX:A,centerY:A,centerZ:A,yawArc:A,pitchArc:A},G.classList.toggle("active",A),L()}),y.appendChild(G);let P=null,q=document.createElement("div");q.className="box-picker-controls",P=document.createElement("div"),P.className="box-picker-swatch",q.appendChild(P),y.appendChild(q),(r||a||c)&&Gt(q,s,{showInputs:r,showModeToggle:a,showCorners:c}),e.appendChild(y);let K=Pt(V,()=>h,l=>{h=l},()=>b,(l,f)=>{b=l,M=f,ee(),_()},()=>M,()=>C.scale,()=>C.center,L,k,x,()=>w,()=>O(b,C.scale,C.center),g,()=>oe(ae()).s/100),U=!1;V.addEventListener("dblclick",()=>{U=!U,Ye(U),ee(),_(),L()});function re(l){if(l===i)return;let f=se(b,i),v={...b},E={...h};i=l;let D=he(f,i),H={x:1,y:1,z:1};b=D,h=H,W(v,D,E,H,300),_()}let Z=null;function W(l,f,v,E,D){Z!==null&&cancelAnimationFrame(Z);let H=performance.now();function we(te){let ze=te-H,Se=Math.min(1,ze/D),Y=1-Math.pow(1-Se,3);b={x:l.x+(f.x-l.x)*Y,y:l.y+(f.y-l.y)*Y,z:l.z+(f.z-l.z)*Y},h={x:v.x+(E.x-v.x)*Y,y:v.y+(E.y-v.y)*Y,z:v.z+(E.z-v.z)*Y},ve(),ee(),Se<1?Z=requestAnimationFrame(we):Z=null}Z=requestAnimationFrame(we)}let fe=!1;function L(){fe||(fe=!0,requestAnimationFrame(()=>{fe=!1,ve()}))}function ve(){zt(C,h,b,M,i,K.state,z,{active:K.state.alphaMode,alpha:w,rgb:ae()})}function ie(l,f,v){return Math.round(l+(f-l)*v)}function Me(l,f){let v=f>0?255:0,E=Math.abs(f);return de({r:ie(l.r,v,E),g:ie(l.g,v,E),b:ie(l.b,v,E)})}function ce(l,f){let v=pe(f)||{r:128,g:128,b:128},E=Me(v,.35),D=Me(v,0),H=Me(v,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${E}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${D}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${H}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function Ce(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function Xt(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function ae(){let l=se(b,i);return U?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function _(){if(!o)return;let l=ae(),f=de(l);P&&ce(P,f);let v=y.querySelector(".box-picker-hex");v&&(v.value=f),ke(),y._updateModeButtons&&y._updateModeButtons()}function ke(){if(!o)return;let l=xt[i],f=U?he(ae(),i):b,v=Ct(f,i),E=y.querySelectorAll(".box-picker-channel input"),D=y.querySelectorAll(".box-picker-channel label");for(let H=0;H<E.length;H++)D[H].textContent=l[H],D[H].style.color="",D[H].style.textShadow="none",E[H].value=String(v[H])}function ee(){let l=ae(),f={rgb:l,hsb:oe(l),oklch:ge(l),hex:de(l),alpha:w};for(let v of m)v(f)}function lt(){let l=se(b,i);return{rgb:l,hsb:oe(l),oklch:ge(l),hex:de(l)}}_(),ve();let Ae=l=>{b=he(l,i),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)};let f=O(b,C.scale,C.center);M=-1;for(let v=J.length-1;v>=0;v--)if(ye(v,f,h,C.scale,C.center)){M=v;break}ee(),_(),L()};return{getColor:lt,getMode:()=>i,setColor:Ae,setAlpha:x,getAlpha:()=>w,setMode(l){re(l)},getRotation:()=>je(),setRotation:(l,f)=>{Ke(l,f),L()},getAxisRotation:()=>Ue(),setAxisRotation:(l,f,v)=>{We(l,f,v),L()},getGuides:()=>({...z}),setGuides:l=>{z={...z,...l},L()},toggleAllGuides:l=>{let f=l!==void 0?l:!A;A=f,z={vertexX:f,vertexY:f,vertexZ:f,centerX:f,centerY:f,centerZ:f,yawArc:f,pitchArc:f},G.classList.toggle("active",f),L()},setZoom:l=>{Qe(l),L()},getZoom:()=>Je(),setDimensions:(l,f,v)=>{qe(l,f,v),L()},getDimensions:()=>et(),getEdgeStyle:()=>ot(),setEdgeStyle:l=>{tt(l),L()},on(l,f){m.add(f)},off(l,f){m.delete(f)},destroy(){K.destroy(),Z!==null&&cancelAnimationFrame(Z),e.removeChild(y)}}}function st(e,t){if(!e)return null;let n=e.trim();try{if(t==="hex")return{rgb:pe(n),alpha:1};if(t==="hex-alpha"){let o=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!o)return null;let r=pe(o[1]),a=o[2]?parseInt(o[2],16)/255:1;return{rgb:r,alpha:a}}if(t==="rgb"){let o=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return o?{r:+o[1],g:+o[2],b:+o[3]}:null}if(t==="rgba"){let o=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return o?{rgb:{r:+o[1],g:+o[2],b:+o[3]},alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsl"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return o?it(+o[1],+o[2],+o[3]):null}if(t==="hsla"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return o?{rgb:it(+o[1],+o[2],+o[3]),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsv"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return o?be({h:+o[1],s:+o[2],b:+o[3]}):null}if(t==="hsva"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return o?{rgb:be({h:+o[1],s:+o[2],b:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="oklch"||t==="oklcha"){let o=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return o?{rgb:Ee({l:+o[1],c:+o[2],h:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="rgba-string"){let o=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:{r:+o[1],g:+o[2],b:+o[3]},alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsla-string"){let o=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:it(+o[1],+o[2],+o[3]),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}if(t==="hsva-string"){let o=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return o?{rgb:be({h:+o[1],s:+o[2],b:+o[3]}),alpha:o[4]!==void 0?Math.min(1,+o[4]):1}:null}}catch{}return null}function Ie(e,t,n=1){if(t==="hex")return de(e);if(t==="hex-alpha")return de(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(t==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(t==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(t==="hsl"){let r=at(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(t==="hsla"){let r=at(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(t==="hsv"){let r=oe(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(t==="hsva"){let r=oe(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(t==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(t==="hsla-string"){let r=at(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(t==="hsva-string"){let r=oe(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let o=ge(e);return`${o.l.toFixed(3)}, ${o.c.toFixed(3)}, ${o.h.toFixed(1)}`}function it(e,t,n){let o=t/100,r=n/100,a=(1-Math.abs(2*r-1))*o,c=a*(1-Math.abs(e/60%2-1)),s=r-a/2,i=0,d=0,h=0;return e<60?(i=a,d=c):e<120?(i=c,d=a):e<180?(d=a,h=c):e<240?(d=c,h=a):e<300?(i=c,h=a):(i=a,h=c),{r:Math.round((i+s)*255),g:Math.round((d+s)*255),b:Math.round((h+s)*255)}}function at(e){let t=e.r/255,n=e.g/255,o=e.b/255,r=Math.max(t,n,o),a=Math.min(t,n,o),c=(r+a)/2;if(r===a)return{h:0,s:0,l:c*100};let s=r-a,i=c>.5?s/(2-r-a):s/(r+a),d=0;return r===t?d=((n-o)/s+(n<o?6:0))*60:r===n?d=((o-t)/s+2)*60:d=((t-n)/s+4)*60,{h:d,s:i*100,l:c*100}}var Fe=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(t){super(),this.model=t}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let t=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",o=this.getAttribute("value"),r=o?st(o,this.model):null;this.alpha=r?.alpha??1;let a=r?.rgb??{r:255,g:255,b:255},c=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=rt(this.holder,{initialColor:a,size:t,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...c.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",s=>{this.internal||(this.internal=!0,this.alpha=s.alpha,this.setAttribute("value",Ie(s.rgb,this.model,s.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:s})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Ie(s.rgb,this.model,s.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(t,n,o){if(!(!this.picker||!o||this.internal))if(t==="value"){let r=st(o,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else t==="mode"&&this.picker.setMode(o)}get value(){return this.getAttribute("value")||Ie({r:255,g:255,b:255},this.model,1)}set value(t){this.setAttribute("value",t)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(t){this.setAttribute("mode",t)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Ge=class extends Fe{constructor(){super("hex")}},co=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,t]of co)customElements.get(e)||customElements.define(e,class extends Fe{constructor(){super(t)}});var uo=Ge;return Wt(bo);})();
