var ColorIsBoxElement=(()=>{var Oe=Object.defineProperty;var Zo=Object.getOwnPropertyDescriptor;var Yo=Object.getOwnPropertyNames;var No=Object.prototype.hasOwnProperty;var Uo=(e,o)=>{for(var n in o)Oe(e,n,{get:o[n],enumerable:!0})},Wo=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of Yo(o))!No.call(e,r)&&r!==n&&Oe(e,r,{get:()=>o[r],enumerable:!(t=Zo(o,r))||t.enumerable});return e};var Ko=e=>Wo(Oe({},"__esModule",{value:!0}),e);var bt={};Uo(bt,{ColorIsBoxElement:()=>He,DEFAULT_EDGE_CONFIG:()=>De,DEFAULT_GUIDES:()=>Te,createBoxColorPicker:()=>Xo,createColorPicker:()=>ao,default:()=>ut,getBoxDimensions:()=>to,getCameraAnglesDeg:()=>Qe,getEdgeStyle:()=>ro,getRotationDeg:()=>Ke,getZoomMultiplier:()=>eo,setBoxDimensions:()=>oo,setBoxInvert:()=>Ue,setCameraAnglesDeg:()=>Je,setEdgeStyle:()=>no,setRotationDeg:()=>je,setZoomMultiplier:()=>qe});var De={showVisible:!0,showHidden:!1,width:1.5,dashed:!1,color:"#ffffff",opacity:.45},Te={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,angleGuides:!0,yawArc:!0,pitchArc:!0},vo={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},Mo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function oe(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),a=Math.min(o,n,t),l=r-a,s=0;l!==0&&(r===o?s=((n-t)/l+6)%6:r===n?s=(t-o)/l+2:s=(o-n)/l+4,s*=60);let i=r===0?0:l/r*100,d=r*100;return{h:s,s:i,b:d}}function be(e){let o=e.h,n=e.s/100,t=e.b/100,r=t*n,a=r*(1-Math.abs(o/60%2-1)),l=t-r,s,i,d;return o<60?(s=r,i=a,d=0):o<120?(s=a,i=r,d=0):o<180?(s=0,i=r,d=a):o<240?(s=0,i=a,d=r):o<300?(s=a,i=0,d=r):(s=r,i=0,d=a),{r:Math.round((s+l)*255),g:Math.round((i+l)*255),b:Math.round((d+l)*255)}}function Xe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function $e(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function jo(e){let o=Xe(e.r/255),n=Xe(e.g/255),t=Xe(e.b/255),r=.4122214708*o+.5363325363*n+.0514459929*t,a=.2119034982*o+.6806995451*n+.1073969566*t,l=.0883024619*o+.2817188376*n+.6299787005*t,s=Math.cbrt(r),i=Math.cbrt(a),d=Math.cbrt(l);return{L:.2104542553*s+.793617785*i-.0040720468*d,a:1.9779984951*s-2.428592205*i+.4505937099*d,b:.0259040371*s+.7827717662*i-.808675766*d}}function Qo(e,o,n){let t=e+.3963377774*o+.2158037573*n,r=e-.1055613458*o-.0638541728*n,a=e-.0894841775*o-1.291485548*n,l=t*t*t,s=r*r*r,i=a*a*a,d=4.0767416621*l-3.3077115913*s+.2309699292*i,h=-1.2684380046*l+2.6097574011*s-.3413193965*i,b=-.0041960863*l-.7034186147*s+1.707614701*i;return{r:Math.round(Math.max(0,Math.min(1,$e(d)))*255),g:Math.round(Math.max(0,Math.min(1,$e(h)))*255),b:Math.round(Math.max(0,Math.min(1,$e(b)))*255)}}function ye(e){let o=jo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function ze(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return Qo(e.l,n,t)}function Jo(e,o,n){let t=ze({l:e,c:o,h:n});if(Co(t))return{l:e,c:o,h:n};let r=0,a=o;for(let l=0;l<20;l++){let s=(r+a)/2;t=ze({l:e,c:s,h:n}),Co(t)?r=s:a=s}return{l:e,c:r,h:n}}function Co(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ve(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ko=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return be({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*ko,r=e.z*359,a=Jo(n,t,r);return ze(a)}}function he(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=oe(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ye(e);return{x:n.l,y:Math.min(n.c/ko,1),z:n.h/359}}}function Ao(e,o){let n=Mo[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function wo(e,o,n,t,r,a=!1){let l;e===0?l={x:t,y:o,z:n}:e===1?l={x:o,y:t,z:n}:l={x:o,y:n,z:t};let s=re(l,r);return a?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var Ro={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},Vo={sizeX:1,sizeY:1,sizeZ:1};function Ze(e,o,n){let t=(e.x-.5)*n.sizeX,r=(e.y-.5)*n.sizeY,a=(e.z-.5)*n.sizeZ,l=Math.cos(o.rotZRad),s=Math.sin(o.rotZRad),i=t*l-r*s,d=t*s+r*l,h=a,b=Math.cos(o.rotYRad),v=Math.sin(o.rotYRad),M=i*b+h*v,A=d,p=-i*v+h*b,w=Math.cos(o.rotXRad),g=Math.sin(o.rotXRad),y=M,C=p*w-A*g,k=p*g+A*w;return{x:y,y:C,z:k}}function Pe(e,o,n,t,r){let a=Ze(e,t,r);return{x:n.x+a.x*o*1.6*t.zoom,y:n.y-a.y*o*1.6*t.zoom}}var Me=["#ef4444","#22c55e","#3b82f6"];function Eo(e,o,n,t,r,a){let l=g=>Pe(g,o,n,t,r),s=l({x:0,y:0,z:0});e.save();let i=1.28,d=[{p:{x:i,y:0,z:0},name:"X",color:Me[0],visible:a.vertexX},{p:{x:0,y:i,z:0},name:"Y",color:Me[1],visible:a.vertexY},{p:{x:0,y:0,z:i},name:"Z",color:Me[2],visible:a.vertexZ}];for(let g=0;g<d.length;g++){if(!d[g].visible)continue;let y=l(d[g].p),C=d[g].color;e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(y.x,y.y),e.strokeStyle=C,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(y.x,y.y,3.5,0,Math.PI*2),e.fillStyle=C,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let k=y.x-s.x,E=y.y-s.y,R=Math.hypot(k,E)||1,H=12,F=y.x+k/R*H,j=y.y+E/R*H;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=C,e.fillText(d[g].name,F,j)}(a.vertexX||a.vertexY||a.vertexZ)&&(e.beginPath(),e.arc(s.x,s.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let h=l({x:.5,y:.5,z:.5}),b=.35,v=[{from:{x:-b,y:.5,z:.5},to:{x:1+b,y:.5,z:.5},color:Me[0],name:"Cx",visible:a.centerX},{from:{x:.5,y:-b,z:.5},to:{x:.5,y:1+b,z:.5},color:Me[1],name:"Cy",visible:a.centerY},{from:{x:.5,y:.5,z:-b},to:{x:.5,y:.5,z:1+b},color:Me[2],name:"Cz",visible:a.centerZ}],M=!1;for(let g=0;g<v.length;g++){if(!v[g].visible)continue;M=!0;let y=l(v[g].from),C=l(v[g].to);e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(C.x,C.y),e.strokeStyle=v[g].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(y.x,y.y,3,0,Math.PI*2),e.arc(C.x,C.y,3,0,Math.PI*2),e.fillStyle=v[g].color,e.fill()}M&&(e.beginPath(),e.arc(h.x,h.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let A=a.angleGuides!==void 0?a.angleGuides:a.yawArc||a.pitchArc||!1,p=Math.round(t.rotZRad*180/Math.PI*10)/10,w=Math.round(t.rotXRad*180/Math.PI*10)/10;if(A){e.beginPath();let g=36;for(let C=0;C<=g;C++){let k=C/g*Math.PI*2,E={x:.5+Math.cos(k)*.75,y:.5+Math.sin(k)*.75,z:0},R=l(E);C===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.beginPath();let y=20;for(let C=0;C<=y;C++){let k=-Math.PI/2+C/y*Math.PI,E={x:.5+Math.cos(k)*.75,y:.5,z:.5+Math.sin(k)*.75},R=l(E);C===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${p.toFixed(1)}\xB0`,12,n.y*2-24),e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${w.toFixed(1)}\xB0`,12,n.y*2-10)}e.restore()}var Ne=!1;function Ue(e){Ne=e}var I={...Ro},ie={...Vo};function Se(e,o){I.rotZRad=-30*(Math.PI/180)+e,I.rotXRad=20*(Math.PI/180)+o}function We(){return{yaw:I.rotZRad- -30*(Math.PI/180),pitch:I.rotXRad-20*(Math.PI/180)}}function To(){I.rotXRad=20*(Math.PI/180),I.rotYRad=0,I.rotZRad=-30*(Math.PI/180)}function Ke(){return{rotXDeg:Math.round(I.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(I.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(I.rotZRad*180/Math.PI*10)/10}}function je(e,o,n){I.rotXRad=e*Math.PI/180,I.rotYRad=o*Math.PI/180,I.rotZRad=n*Math.PI/180}function Qe(){return{yawDeg:Math.round(I.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(I.rotXRad*180/Math.PI*10)/10}}function Je(e,o){I.rotZRad=e*Math.PI/180,I.rotXRad=o*Math.PI/180}function qe(e){I.zoom=Math.max(.1,Math.min(3,e))}function eo(){return I.zoom}function oo(e,o,n){ie.sizeX=Math.max(.1,Math.min(2.5,e)),ie.sizeY=Math.max(.1,Math.min(2.5,o)),ie.sizeZ=Math.max(.1,Math.min(2.5,n))}function to(){return{sizeX:ie.sizeX,sizeY:ie.sizeY,sizeZ:ie.sizeZ}}function X(e,o,n){return Pe(e,o,n,I,ie)}function Ye(e){return Ze(e,I,ie)}function qo(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var ee=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],et=64,zo={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function So(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*1*n,e.style.width=`${o}px`,e.style.height=`${o*1}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.26,center:{x:o/2,y:o*.5},width:o,height:o*1}}var Ie={...De};function no(e){Ie={...Ie,...e}}function ro(){return{...Ie}}var ot=[[0,1],[1,4],[4,2],[2,0],[3,5],[5,7],[7,6],[6,3],[0,3],[1,5],[4,7],[2,6]];function tt(e,o,n,t){if(!(!t.showVisible&&!t.showHidden)){e.save(),e.lineWidth=t.width,t.dashed?e.setLineDash([4,3]):e.setLineDash([]);for(let[r,a]of ot){let l=o[r],s=o[a],i={x:(n[r].x+n[a].x)*.5,y:(n[r].y+n[a].y)*.5,z:(n[r].z+n[a].z)*.5},h=Ye(i).z<=0;h&&t.showVisible?(e.strokeStyle=t.color,e.globalAlpha=t.opacity,e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(s.x,s.y),e.stroke()):!h&&t.showHidden&&(e.strokeStyle=t.color,e.globalAlpha=t.opacity*.45,e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(s.x,s.y),e.stroke())}e.restore()}}function Lo(e,o,n,t,r,a,l=!0,s=null){let{ctx:i,scale:d,center:h,width:b,height:v}=e;i.save(),i.clearRect(0,0,b,v);let M=qo(o),A=M.map(w=>X(w,d,h));if(i.save(),i.shadowColor="rgba(0,0,0,0.35)",i.shadowBlur=8,i.shadowOffsetX=0,i.shadowOffsetY=2,nt(i,A,M,o,r,a.viewRotating),i.restore(),tt(i,A,M,Ie),Eo(i,d,h,I,ie,typeof l=="boolean"?l?Te:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:l),t>=0){let w=re(n,r),g=Ne?{r:255-w.r,g:255-w.g,b:255-w.b}:w,y=X(n,d,h);s&&s.active&&it(i,y,s.rgb,s.alpha),at(i,y,g)}i.restore()}function nt(e,o,n,t,r,a){let l=[t.x,t.y,t.z],s=[];for(let i=0;i<ee.length;i++){let d=ee[i],h=d.fixedValue*l[d.fixedAxis],b=l[d.uAxis],v=l[d.vAxis];if(b<.002&&v<.002)continue;let M={x:0,y:0,z:0},A=["x","y","z"];M[A[d.fixedAxis]]=h,M[A[d.uAxis]]=b*.5,M[A[d.vAxis]]=v*.5;let p=Ye(M),w={x:M.x+d.normal.x*.1,y:M.y+d.normal.y*.1,z:M.z+d.normal.z*.1};if(Ye(w).z-p.z<0){let C=d.quad.map(k=>o[k]);s.push({face:d,corners:C,fixedVal:h,uMax:b,vMax:v,depth:p.z})}}s.sort((i,d)=>d.depth-i.depth);for(let i of s)rt(e,i.corners,i.face.fixedAxis,i.fixedVal,i.uMax,i.vMax,r)}function rt(e,o,n,t,r,a,l){let s=et,i=document.createElement("canvas");i.width=s,i.height=s;let d=i.getContext("2d"),h=d.createImageData(s,s),b=h.data;for(let j=0;j<s;j++)for(let B=0;B<s;B++){let fe=B/(s-1)*r,$=j/(s-1)*a,ce=wo(n,fe,$,t,l,Ne),Z=(j*s+B)*4;b[Z]=ce.r,b[Z+1]=ce.g,b[Z+2]=ce.b,b[Z+3]=255}d.putImageData(h,0,0);let v=o[0],M=o[1],A=o[2],p=o[3],w=M.x-v.x,g=M.y-v.y,y=p.x-v.x,C=p.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(M.x,M.y),e.lineTo(A.x,A.y),e.lineTo(p.x,p.y),e.closePath(),e.clip();let k=2/s,E=v.x-w*k-y*k,R=v.y-g*k-C*k,H=1+2*k,F=1+2*k;e.transform(w*H/s,g*H/s,y*F/s,C*F/s,E,R),e.imageSmoothingEnabled=!0,e.drawImage(i,0,0),e.restore()}var te=30,le=13;function it(e,o,n,t){let r=(te+le)/2,a=5,l=Math.floor(o.x/a)*a,s=Math.floor(o.y/a)*a,i=te*2+a*2,d=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,te,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let w=-1;w*a<=i;w++)for(let g=-1;g*a<=i;g++)e.fillStyle=(w+g)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+w*a,s+g*a,a,a);let h="rgba("+n.r+","+n.g+","+n.b+",0)",b="rgba("+n.r+","+n.g+","+n.b+",1)",v=e;if(typeof v.createConicGradient=="function"){let w=v.createConicGradient(-Math.PI/2,o.x,o.y);w.addColorStop(0,h),w.addColorStop(1,b),e.fillStyle=w,e.fillRect(l-te,s-te,i,i)}else for(let g=0;g<36;g++){let y=-Math.PI/2+g/36*Math.PI*2,C=-Math.PI/2+(g+1)/36*Math.PI*2,k=(g+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(y)*le,o.y+Math.sin(y)*le),e.arc(o.x,o.y,te,y,C),e.arc(o.x,o.y,le,C,y,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+k.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,te,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-te-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let M=d*Math.PI*2,A=o.x+r*Math.sin(M),p=o.y-r*Math.cos(M);e.beginPath(),e.arc(A,p,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function at(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Do(e,o,n,t){let r=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return X(r[e],n,t)}function io(){let e={x:0,y:0};return[X({x:1,y:0,z:0},1,e),X({x:0,y:1,z:0},1,e),X({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function Ce(e,o,n,t,r){let a=ee[e],l=[n.x,n.y,n.z],s=l[a.uAxis],i=l[a.vAxis];if(s<.002||i<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[a.fixedAxis]]=a.fixedValue*l[a.fixedAxis];let b={...d};b[h[a.uAxis]]=s;let v={...d};v[h[a.vAxis]]=i;let M=X(d,t,r),A=X(b,t,r),p=X(v,t,r),w=A.x-M.x,g=A.y-M.y,y=p.x-M.x,C=p.y-M.y,k=w*C-g*y;if(Math.abs(k)<1e-6)return null;let E=o.x-M.x,R=o.y-M.y,H=(E*C-R*y)/k,F=(R*w-E*g)/k;return H<-.05||H>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,F))}}function Po(e,o,n,t,r){let a=ee[e],l=[n.x,n.y,n.z],s=l[a.uAxis],i=l[a.vAxis];if(s<.002||i<.002)return null;let d={x:0,y:0,z:0},h=["x","y","z"];d[h[a.fixedAxis]]=a.fixedValue*l[a.fixedAxis];let b={...d};b[h[a.uAxis]]=s;let v={...d};v[h[a.vAxis]]=i;let M=X(d,t,r),A=X(b,t,r),p=X(v,t,r),w=A.x-M.x,g=A.y-M.y,y=p.x-M.x,C=p.y-M.y,k=w*C-g*y;if(Math.abs(k)<1e-6)return null;let E=o.x-M.x,R=o.y-M.y,H=(E*C-R*y)/k,F=(R*w-E*g)/k;return{s:Math.max(0,Math.min(1,H)),t:Math.max(0,Math.min(1,F))}}var Io=22;function Fo(e,o,n,t,r,a,l,s,i,d,h,b,v,M,A){let p={...zo};function w(u){let m=e.getBoundingClientRect();return{x:u.clientX-m.left,y:u.clientY-m.top}}let g=!1,y=!1,C=!1,k=!1,E=!1,R=null,H=600,F=null;function j(){B(),F=setTimeout(fe,H)}function B(){F!==null&&(clearTimeout(F),F=null)}function fe(){F=null,p.alphaMode=!1,Ve(),f(),E=!0,p.viewRotating=!0,R=null,i()}let $=14,ce=800,Z=null;function _(){U(),Z=setTimeout(ke,ce)}function U(){Z!==null&&(clearTimeout(Z),Z=null),B()}function ke(){Z=null,p.alphaMode=!0,f(),Ve(),y=!1,i()}function ne(u){let m=v();return Math.hypot(u.x-m.x,u.y-m.y)}function Be(u){let m=v();return(Math.atan2(u.x-m.x,-(u.y-m.y))+Math.PI*2)%(Math.PI*2)}function de(u){h(Be(u)/(Math.PI*2)),i()}function Ae(u){let m=ne(u);return m>=le-4&&m<=te+6}function ue(u){let m=o(),V=l(),L=s();for(let z=0;z<3;z++){let P=Do(z,m,V,L),G=u.x-P.x,Y=u.y-P.y;if(G*G+Y*Y<=Io*Io)return z}return-1}function W(u){let m=o(),V=l(),L=s();for(let z=ee.length-1;z>=0;z--){let P=Ce(z,u,m,V,L);if(P)return{faceIndex:z,...P}}return null}let Q=-1,J={x:0,y:0},Le=0;function we(u,m){Q=u,J=m,Le=o()[["x","y","z"][u]],p.draggingAxisHandle=u,e.style.cursor="grabbing",i()}function c(u){if(U(),Q<0)return;let m=u.x-J.x,V=u.y-J.y,z=io()[Q],P=l(),Y=(m*z.x+V*z.y)/P,q=Math.max(0,Math.min(1,Le+Y)),N=o(),O=["x","y","z"],xe={...N,[O[Q]]:q};n(xe);let Ee=t(),xo=a(),yo=xo>=0?ee[xo]:null,_e={...Ee};yo&&Q===yo.fixedAxis?_e[O[Q]]=q:_e[O[Q]]=Math.min(Ee[O[Q]],q),r(_e,a()),i()}function f(){Q=-1,p.draggingAxisHandle=-1}let x=-1,T=null,D=null,S=!1;function Re(u,m,V,L){x=u,p.draggingFace=u,T=null,D=null,S=!1,L&&(S=!0,D={s:m,t:V}),ge(u,m,V),e.style.cursor="crosshair",i()}function me(u,m,V){if(U(),x<0)return;let L=o(),z=l(),P=s(),G=Ce(x,u,L,z,P),Y=x;if(!G&&!V){for(let O=ee.length-1;O>=0;O--)if(O!==x&&(G=Ce(O,u,L,z,P),G)){Y=O;break}}if(!G&&V&&(G=Po(x,u,L,z,P),Y=x),!G){i();return}Y!==x&&(x=Y,p.draggingFace=Y,T=null,S=!1,D=null);let{s:q,t:N}=G;if(m&&D){if(S){let O=Math.abs(q-D.s),xe=Math.abs(N-D.t),Ee=.02;(O>Ee||xe>Ee)&&(T=O>=xe?"u":"v",S=!1)}T==="u"?N=D.t:T==="v"&&(q=D.s)}else m||(T=null,S=!1,D=null);ge(Y,q,N),i()}function ge(u,m,V){let L=ee[u],z=o(),P=["x","y","z"],G={...t()};G[P[L.uAxis]]=m*z[P[L.uAxis]],G[P[L.vAxis]]=V*z[P[L.vAxis]],G[P[L.fixedAxis]]=L.fixedValue*z[P[L.fixedAxis]],r(G,u)}function Ve(){x=-1,p.draggingFace=-1,T=null,S=!1,D=null}let ae=null,pe=!1,K=null;function uo(u){C=!0;let m=w(u);if(ae=m,pe=!1,K=null,d()&&p.alphaMode){if(ne(m)<=$){p.alphaMode=!1,i();return}if(Ae(m)){u.preventDefault(),g=!0,de(m);return}p.alphaMode=!1,i();return}let V=W(m);V&&(K={faceIndex:V.faceIndex,s:V.s,t:V.t}),u.preventDefault(),E=!0,R=m,p.viewRotating=!0,d()&&ne(m)<=$&&_(),i()}function bo(u){let m=w(u);if(g){u.preventDefault(),de(m);return}if(E){if(u.preventDefault(),!R){R=m;return}let V=m.x-R.x,L=m.y-R.y;Math.hypot(V,L)>2&&(pe=!0,U());let z=We();Se(z.yaw+V*.012,z.pitch+L*.012),R=m,i();return}if(C&&p.alphaMode&&Ae(m)){u.preventDefault(),g=!0,de(m);return}e.style.cursor="grab"}function ho(u){U(),C=!1,g=!1,y=!1,!pe&&K&&ge(K.faceIndex,K.s,K.t),E&&(E=!1,p.viewRotating=!1,R=null,i()),e.style.cursor="grab"}function fo(u){if(u.touches.length!==1)return;k=!0;let m=w(u.touches[0]);if(pe=!1,K=null,d()&&p.alphaMode){if(ne(m)<=$){p.alphaMode=!1,i();return}if(Ae(m)){u.preventDefault(),g=!0,de(m);return}p.alphaMode=!1,i();return}let V=W(m);V&&(K={faceIndex:V.faceIndex,s:V.s,t:V.t}),u.preventDefault(),E=!0,R=m,p.viewRotating=!0,d()&&ne(m)<=$&&_(),i()}function mo(u){if(u.touches.length!==1)return;let m=w(u.touches[0]);if(g)u.preventDefault(),de(m);else if(k&&p.alphaMode&&Ae(m))u.preventDefault(),g=!0,de(m);else if(E){if(u.preventDefault(),!R){R=m;return}let V=m.x-R.x,L=m.y-R.y;Math.hypot(V,L)>2&&(pe=!0,U());let z=We();Se(z.yaw+V*.012,z.pitch+L*.012),R=m,i()}}function go(u){U(),k=!1,g=!1,!pe&&K&&ge(K.faceIndex,K.s,K.t),E&&(E=!1,p.viewRotating=!1,R=null,i())}function po(u){if(u.key==="1"){Se(Math.PI/4,0),i();return}if(u.key==="0"){To(),i();return}if(u.key==="2"){Se(.95,-.54),i();return}if(p.alphaMode){if(u.key==="Escape"){p.alphaMode=!1,i();return}if(u.key==="ArrowUp"||u.key==="ArrowRight"){u.preventDefault(),h(Math.min(1,b()+(u.shiftKey?.08:.02))),i();return}if(u.key==="ArrowDown"||u.key==="ArrowLeft"){u.preventDefault(),h(Math.max(0,b()-(u.shiftKey?.08:.02))),i();return}}let m=u.shiftKey?.04:.004,V=t(),L=o(),z=io(),P=0,G=0;switch(u.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":G=-1;break;case"ArrowDown":G=1;break;default:return}u.preventDefault();let Y={...V},q=["x","y","z"];for(let N=0;N<3;N++){let O=P*z[N].x+G*z[N].y;if(Math.abs(O)>.3){let xe=V[q[N]]+m*Math.sign(O);Y[q[N]]=Math.max(0,Math.min(L[q[N]],xe))}}r(Y,a()),i()}e.addEventListener("mousedown",uo),window.addEventListener("mousemove",bo),window.addEventListener("mouseup",ho),e.addEventListener("touchstart",fo,{passive:!1}),e.addEventListener("touchmove",mo,{passive:!1}),e.addEventListener("touchend",go),e.addEventListener("keydown",po),e.setAttribute("tabindex","0");function $o(){U(),e.removeEventListener("mousedown",uo),window.removeEventListener("mousemove",bo),window.removeEventListener("mouseup",ho),e.removeEventListener("touchstart",fo),e.removeEventListener("touchmove",mo),e.removeEventListener("touchend",go),e.removeEventListener("keydown",po)}return{state:p,destroy:$o}}function Go(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Ho(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Bo(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let r=h=>{let b=document.createElement("button");return b.textContent=h.toUpperCase(),b.addEventListener("click",()=>o.switchMode(h)),t.appendChild(b),b},a=r("oklch"),l=r("rgb"),s=r("hsb"),i=()=>{let h=o.mode();l.classList.toggle("active",h==="rgb"),s.classList.toggle("active",h==="hsb"),a.classList.toggle("active",h==="oklch")};i();let d=o.switchMode;o._markActive=i,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let b=t.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),t.addEventListener("click",()=>{Go(o.getRgbForCopy()?"#"+st(o.getRgbForCopy()):"#ffffff"),Ho(t)});let r=document.createElement("div");r.className="box-picker-channels";let a=[],l=[],s=["R","G","B"];for(let b=0;b<3;b++){let v=document.createElement("div");v.className="box-picker-channel";let M=document.createElement("label");M.textContent=s[b];let A=document.createElement("input");A.type="text",A.inputMode="numeric",v.appendChild(M),v.appendChild(A),r.appendChild(v),a.push(A),l.push(M),A.addEventListener("change",()=>{let p=parseFloat(A.value);isNaN(p)||o.onChannelInput(b,p,255)}),A.addEventListener("click",()=>{let p=o.getRgbForCopy();Go(`${p.r}, ${p.g}, ${p.b}`),Ho(A)})}let i=document.createElement("div");i.className="box-picker-hexrow";let d=document.createElement("div");d.className="box-picker-hexwrap";let h=document.createElement("label");h.textContent="Hex",d.appendChild(h),d.appendChild(t),i.appendChild(r),i.appendChild(d),e.appendChild(i),e._inputs={hexInput:t,inputs:a,labels:l}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let a=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);o.onRandom({r:a,g:l,b:s})}),e.appendChild(t);let r=document.createElement("button");r.className="box-corner-btn box-corner-right",r.title="Reset",r.setAttribute("aria-label","Reset"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',r.addEventListener("click",()=>o.onReset()),e.appendChild(r)}}function st(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var _o=`.box-picker {\r
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
`;var ao=Xo,Oo=!1;function ct(){if(Oo||typeof document>"u")return;Oo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=_o,document.head.appendChild(e)}function Xo(e,o={}){let n=o.size??300,t=o.controls??!0,r=o.showInputs??!1,a=o.showModeToggle??!1,l=o.showCorners??!1,s={mode:()=>i,switchMode:c=>fe(c),onHexInput:c=>{let f=ve(c);f?(b=he(B?{r:255-f.r,g:255-f.g,b:255-f.b}:f,i),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)},J(),W(),_()):W()},onChannelInput:(c,f,x)=>{let T=Math.max(0,Math.min(x,f)),D=["x","y","z"],S=T/x;if(B){let Re={...b,[D[c]]:S},me=re(Re,i);b=he({r:255-me.r,g:255-me.g,b:255-me.b},i)}else b={...b,[D[c]]:S};S>h[D[c]]&&(h={...h,[D[c]]:S}),J(),W(),_()},getRgbForCopy:()=>re(b,i),onRandom:c=>we(c),onReset:()=>we({r:0,g:0,b:0})},i=o.mode??"rgb",d=o.initialColor?he(o.initialColor,i):{x:.7,y:.4,z:.85},h={x:1,y:1,z:1},b={...d},v=0,M=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function p(c){let f=Math.max(0,Math.min(1,c));f!==A&&(A=f,J(),W(),_())}function w(c){let f=ue(),x=oe(f);x.s=Math.max(0,Math.min(100,c*100));let T=be(x);we(B?{r:255-T.r,g:255-T.g,b:255-T.b}:T)}let g=new Set;ct();let y=document.createElement("div");y.className="box-picker";let C=document.createElement("canvas");C.style.cursor="grab",y.appendChild(C);let k=So(C,n),E={...Te},R=!0,H=null,F=document.createElement("div");F.className="box-picker-controls",H=document.createElement("div"),H.className="box-picker-swatch",F.appendChild(H),y.appendChild(F),(r||a||l)&&Bo(F,s,{showInputs:r,showModeToggle:a,showCorners:l}),e.appendChild(y);let j=Fo(C,()=>h,c=>{h=c},()=>b,(c,f)=>{b=c,v=f,J(),W()},()=>v,()=>k.scale,()=>k.center,_,M,p,()=>A,()=>X(b,k.scale,k.center),w,()=>oe(ue()).s/100),B=!1;C.addEventListener("dblclick",()=>{B=!B,Ue(B),J(),W(),_()});function fe(c){if(c===i)return;let f=re(b,i),x={...b},T={...h};i=c;let D=he(f,i),S={x:1,y:1,z:1};b=D,h=S,ce(x,D,T,S,300),W()}let $=null;function ce(c,f,x,T,D){$!==null&&cancelAnimationFrame($);let S=performance.now();function Re(me){let ge=me-S,Ve=Math.min(1,ge/D),ae=1-Math.pow(1-Ve,3);b={x:c.x+(f.x-c.x)*ae,y:c.y+(f.y-c.y)*ae,z:c.z+(f.z-c.z)*ae},h={x:x.x+(T.x-x.x)*ae,y:x.y+(T.y-x.y)*ae,z:x.z+(T.z-x.z)*ae},U(),J(),Ve<1?$=requestAnimationFrame(Re):$=null}$=requestAnimationFrame(Re)}let Z=!1;function _(){Z||(Z=!0,requestAnimationFrame(()=>{Z=!1,U()}))}function U(){Lo(k,h,b,v,i,j.state,E,{active:j.state.alphaMode,alpha:A,rgb:ue()})}function ke(c,f,x){return Math.round(c+(f-c)*x)}function ne(c,f){let x=f>0?255:0,T=Math.abs(f);return se({r:ke(c.r,x,T),g:ke(c.g,x,T),b:ke(c.b,x,T)})}function Be(c,f){let x=ve(f)||{r:128,g:128,b:128},T=ne(x,.35),D=ne(x,0),S=ne(x,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${T}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${D}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function de(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function Ae(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function ue(){let c=re(b,i);return B?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function W(){if(!t)return;let c=ue(),f=se(c);H&&Be(H,f);let x=y.querySelector(".box-picker-hex");x&&(x.value=f),Q(),y._updateModeButtons&&y._updateModeButtons()}function Q(){if(!t)return;let c=vo[i],f=B?he(ue(),i):b,x=Ao(f,i),T=y.querySelectorAll(".box-picker-channel input"),D=y.querySelectorAll(".box-picker-channel label");for(let S=0;S<T.length;S++)D[S].textContent=c[S],D[S].style.color="",D[S].style.textShadow="none",T[S].value=String(x[S])}function J(){let c=ue(),f={rgb:c,hsb:oe(c),oklch:ye(c),hex:se(c),alpha:A};for(let x of g)x(f)}function Le(){let c=re(b,i);return{rgb:c,hsb:oe(c),oklch:ye(c),hex:se(c)}}W(),U();let we=c=>{b=he(c,i),h={x:Math.max(h.x,b.x),y:Math.max(h.y,b.y),z:Math.max(h.z,b.z)};let f=X(b,k.scale,k.center);v=-1;for(let x=ee.length-1;x>=0;x--)if(Ce(x,f,h,k.scale,k.center)){v=x;break}J(),W(),_()};return{getColor:Le,getMode:()=>i,setColor:we,setAlpha:p,getAlpha:()=>A,setMode(c){fe(c)},getRotation:()=>Qe(),setRotation:(c,f)=>{Je(c,f),_()},getAxisRotation:()=>Ke(),setAxisRotation:(c,f,x)=>{je(c,f,x),_()},getGuides:()=>({...E}),setGuides:c=>{E={...E,...c},_()},toggleAllGuides:c=>{let f=c!==void 0?c:!R;R=f,E={vertexX:f,vertexY:f,vertexZ:f,centerX:f,centerY:f,centerZ:f,angleGuides:f,yawArc:f,pitchArc:f},_()},setZoom:c=>{qe(c),_()},getZoom:()=>eo(),setDimensions:(c,f,x)=>{oo(c,f,x),_()},getDimensions:()=>to(),getEdgeStyle:()=>ro(),setEdgeStyle:c=>{no(c),_()},on(c,f){g.add(f)},off(c,f){g.delete(f)},destroy(){j.destroy(),$!==null&&cancelAnimationFrame($),e.removeChild(y)}}}function co(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:ve(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let r=ve(t[1]),a=t[2]?parseInt(t[2],16)/255:1;return{rgb:r,alpha:a}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?so(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:so(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?be({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:be({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:ze({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:so(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:be({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Fe(e,o,n=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let r=lo(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%`}if(o==="hsla"){let r=lo(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let r=oe(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%`}if(o==="hsva"){let r=oe(e);return`${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let r=lo(e);return`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let r=oe(e);return`hsva(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.b)}%, ${+n.toFixed(3)})`}let t=ye(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function so(e,o,n){let t=o/100,r=n/100,a=(1-Math.abs(2*r-1))*t,l=a*(1-Math.abs(e/60%2-1)),s=r-a/2,i=0,d=0,h=0;return e<60?(i=a,d=l):e<120?(i=l,d=a):e<180?(d=a,h=l):e<240?(d=l,h=a):e<300?(i=l,h=a):(i=a,h=l),{r:Math.round((i+s)*255),g:Math.round((d+s)*255),b:Math.round((h+s)*255)}}function lo(e){let o=e.r/255,n=e.g/255,t=e.b/255,r=Math.max(o,n,t),a=Math.min(o,n,t),l=(r+a)/2;if(r===a)return{h:0,s:0,l:l*100};let s=r-a,i=l>.5?s/(2-r-a):s/(r+a),d=0;return r===o?d=((n-t)/s+(n<t?6:0))*60:r===n?d=((t-o)/s+2)*60:d=((o-n)/s+4)*60,{h:d,s:i*100,l:l*100}}var Ge=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),r=t?co(t,this.model):null;this.alpha=r?.alpha??1;let a=r?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=ao(this.holder,{initialColor:a,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",s=>{this.internal||(this.internal=!0,this.alpha=s.alpha,this.setAttribute("value",Fe(s.rgb,this.model,s.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:s})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Fe(s.rgb,this.model,s.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let r=co(t,this.model);r&&(this.alpha=r.alpha,this.picker.setColor(r.rgb),this.picker.setAlpha(r.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Fe({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},He=class extends Ge{constructor(){super("hex")}},dt=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of dt)customElements.get(e)||customElements.define(e,class extends Ge{constructor(){super(o)}});var ut=He;return Ko(bt);})();
