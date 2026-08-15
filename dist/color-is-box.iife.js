var ColorIsBox=(()=>{var Ie=Object.defineProperty;var Go=Object.getOwnPropertyDescriptor;var Bo=Object.getOwnPropertyNames;var Ho=Object.prototype.hasOwnProperty;var _o=(e,o)=>{for(var t in o)Ie(e,t,{get:o[t],enumerable:!0})},Xo=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of Bo(o))!Ho.call(e,s)&&s!==t&&Ie(e,s,{get:()=>o[s],enumerable:!(r=Go(o,s))||r.enumerable});return e};var Oo=e=>Xo(Ie({},"__esModule",{value:!0}),e);var rt={};_o(rt,{DEFAULT_EDGE_CONFIG:()=>ze,DEFAULT_GUIDES:()=>we,createBoxColorPicker:()=>Io,createColorPicker:()=>tt,getBoxDimensions:()=>qe,getCameraAnglesDeg:()=>We,getEdgeStyle:()=>oo,getRotationDeg:()=>Ue,getZoomMultiplier:()=>Qe,setBoxDimensions:()=>Je,setBoxInvert:()=>Ye,setCameraAnglesDeg:()=>Ke,setEdgeStyle:()=>eo,setRotationDeg:()=>$e,setZoomMultiplier:()=>je});var ze={showVisible:!0,showHidden:!1,width:1.5,dashed:!1,color:"#ffffff",opacity:.45},we={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,angleGuides:!0,yawArc:!0,pitchArc:!0},fo={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},mo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ge(e){let o=e.r/255,t=e.g/255,r=e.b/255,s=Math.max(o,t,r),a=Math.min(o,t,r),c=s-a,i=0;c!==0&&(s===o?i=((t-r)/c+6)%6:s===t?i=(r-o)/c+2:i=(o-t)/c+4,i*=60);let n=s===0?0:c/s*100,u=s*100;return{h:i,s:n,b:u}}function He(e){let o=e.h,t=e.s/100,r=e.b/100,s=r*t,a=s*(1-Math.abs(o/60%2-1)),c=r-s,i,n,u;return o<60?(i=s,n=a,u=0):o<120?(i=a,n=s,u=0):o<180?(i=0,n=s,u=a):o<240?(i=0,n=a,u=s):o<300?(i=a,n=0,u=s):(i=s,n=0,u=a),{r:Math.round((i+c)*255),g:Math.round((n+c)*255),b:Math.round((u+c)*255)}}function Fe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ge(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Zo(e){let o=Fe(e.r/255),t=Fe(e.g/255),r=Fe(e.b/255),s=.4122214708*o+.5363325363*t+.0514459929*r,a=.2119034982*o+.6806995451*t+.1073969566*r,c=.0883024619*o+.2817188376*t+.6299787005*r,i=Math.cbrt(s),n=Math.cbrt(a),u=Math.cbrt(c);return{L:.2104542553*i+.793617785*n-.0040720468*u,a:1.9779984951*i-2.428592205*n+.4505937099*u,b:.0259040371*i+.7827717662*n-.808675766*u}}function Yo(e,o,t){let r=e+.3963377774*o+.2158037573*t,s=e-.1055613458*o-.0638541728*t,a=e-.0894841775*o-1.291485548*t,c=r*r*r,i=s*s*s,n=a*a*a,u=4.0767416621*c-3.3077115913*i+.2309699292*n,f=-1.2684380046*c+2.6097574011*i-.3413193965*n,b=-.0041960863*c-.7034186147*i+1.707614701*n;return{r:Math.round(Math.max(0,Math.min(1,Ge(u)))*255),g:Math.round(Math.max(0,Math.min(1,Ge(f)))*255),b:Math.round(Math.max(0,Math.min(1,Ge(b)))*255)}}function Se(e){let o=Zo(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function Be(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return Yo(e.l,t,r)}function No(e,o,t){let r=Be({l:e,c:o,h:t});if(ho(r))return{l:e,c:o,h:t};let s=0,a=o;for(let c=0;c<20;c++){let i=(s+a)/2;r=Be({l:e,c:i,h:t}),ho(r)?s=i:a=i}return{l:e,c:s,h:t}}function ho(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function Re(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function _e(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var go=.4;function ne(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return He({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*go,s=e.z*359,a=No(t,r,s);return Be(a)}}function de(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=ge(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=Se(e);return{x:t.l,y:Math.min(t.c/go,1),z:t.h/359}}}function xo(e,o){let t=mo[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function po(e,o,t,r,s,a=!1){let c;e===0?c={x:r,y:o,z:t}:e===1?c={x:o,y:r,z:t}:c={x:o,y:t,z:r};let i=ne(c,s);return a?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var yo={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},vo={sizeX:1,sizeY:1,sizeZ:1};function Xe(e,o,t){let r=(e.x-.5)*t.sizeX,s=(e.y-.5)*t.sizeY,a=(e.z-.5)*t.sizeZ,c=Math.cos(o.rotZRad),i=Math.sin(o.rotZRad),n=r*c-s*i,u=r*i+s*c,f=a,b=Math.cos(o.rotYRad),v=Math.sin(o.rotYRad),M=n*b+f*v,A=u,x=-n*v+f*b,w=Math.cos(o.rotXRad),g=Math.sin(o.rotXRad),y=M,C=x*w-A*g,k=x*g+A*w;return{x:y,y:C,z:k}}function Te(e,o,t,r,s){let a=Xe(e,r,s);return{x:t.x+a.x*o*1.6*r.zoom,y:t.y-a.y*o*1.6*r.zoom}}var xe=["#ef4444","#22c55e","#3b82f6"];function Mo(e,o,t,r,s,a){let c=g=>Te(g,o,t,r,s),i=c({x:0,y:0,z:0});e.save();let n=1.28,u=[{p:{x:n,y:0,z:0},name:"X",color:xe[0],visible:a.vertexX},{p:{x:0,y:n,z:0},name:"Y",color:xe[1],visible:a.vertexY},{p:{x:0,y:0,z:n},name:"Z",color:xe[2],visible:a.vertexZ}];for(let g=0;g<u.length;g++){if(!u[g].visible)continue;let y=c(u[g].p),C=u[g].color;e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(y.x,y.y),e.strokeStyle=C,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(y.x,y.y,3.5,0,Math.PI*2),e.fillStyle=C,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let k=y.x-i.x,E=y.y-i.y,R=Math.hypot(k,E)||1,B=12,F=y.x+k/R*B,j=y.y+E/R*B;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=C,e.fillText(u[g].name,F,j)}(a.vertexX||a.vertexY||a.vertexZ)&&(e.beginPath(),e.arc(i.x,i.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let f=c({x:.5,y:.5,z:.5}),b=.35,v=[{from:{x:-b,y:.5,z:.5},to:{x:1+b,y:.5,z:.5},color:xe[0],name:"Cx",visible:a.centerX},{from:{x:.5,y:-b,z:.5},to:{x:.5,y:1+b,z:.5},color:xe[1],name:"Cy",visible:a.centerY},{from:{x:.5,y:.5,z:-b},to:{x:.5,y:.5,z:1+b},color:xe[2],name:"Cz",visible:a.centerZ}],M=!1;for(let g=0;g<v.length;g++){if(!v[g].visible)continue;M=!0;let y=c(v[g].from),C=c(v[g].to);e.beginPath(),e.moveTo(y.x,y.y),e.lineTo(C.x,C.y),e.strokeStyle=v[g].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(y.x,y.y,3,0,Math.PI*2),e.arc(C.x,C.y,3,0,Math.PI*2),e.fillStyle=v[g].color,e.fill()}M&&(e.beginPath(),e.arc(f.x,f.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let A=a.angleGuides!==void 0?a.angleGuides:a.yawArc||a.pitchArc||!1,x=Math.round(r.rotZRad*180/Math.PI*10)/10,w=Math.round(r.rotXRad*180/Math.PI*10)/10;if(A){e.beginPath();let g=36;for(let C=0;C<=g;C++){let k=C/g*Math.PI*2,E={x:.5+Math.cos(k)*.75,y:.5+Math.sin(k)*.75,z:0},R=c(E);C===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.beginPath();let y=20;for(let C=0;C<=y;C++){let k=-Math.PI/2+C/y*Math.PI,E={x:.5+Math.cos(k)*.75,y:.5,z:.5+Math.sin(k)*.75},R=c(E);C===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${x.toFixed(1)}\xB0`,12,t.y*2-24),e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${w.toFixed(1)}\xB0`,12,t.y*2-10)}e.restore()}var Ze=!1;function Ye(e){Ze=e}var I={...yo},re={...vo};function Ve(e,o){I.rotZRad=-30*(Math.PI/180)+e,I.rotXRad=20*(Math.PI/180)+o}function Ne(){return{yaw:I.rotZRad- -30*(Math.PI/180),pitch:I.rotXRad-20*(Math.PI/180)}}function Co(){I.rotXRad=20*(Math.PI/180),I.rotYRad=0,I.rotZRad=-30*(Math.PI/180)}function Ue(){return{rotXDeg:Math.round(I.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(I.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(I.rotZRad*180/Math.PI*10)/10}}function $e(e,o,t){I.rotXRad=e*Math.PI/180,I.rotYRad=o*Math.PI/180,I.rotZRad=t*Math.PI/180}function We(){return{yawDeg:Math.round(I.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(I.rotXRad*180/Math.PI*10)/10}}function Ke(e,o){I.rotZRad=e*Math.PI/180,I.rotXRad=o*Math.PI/180}function je(e){I.zoom=Math.max(.1,Math.min(3,e))}function Qe(){return I.zoom}function Je(e,o,t){re.sizeX=Math.max(.1,Math.min(2.5,e)),re.sizeY=Math.max(.1,Math.min(2.5,o)),re.sizeZ=Math.max(.1,Math.min(2.5,t))}function qe(){return{sizeX:re.sizeX,sizeY:re.sizeY,sizeZ:re.sizeZ}}function O(e,o,t){return Te(e,o,t,I,re)}function Oe(e){return Xe(e,I,re)}function Uo(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var ee=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],$o=64,ko={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Ao(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*1*t,e.style.width=`${o}px`,e.style.height=`${o*1}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.26,center:{x:o/2,y:o*.5},width:o,height:o*1}}var De={...ze};function eo(e){De={...De,...e}}function oo(){return{...De}}var Wo=[[0,1],[1,4],[4,2],[2,0],[3,5],[5,7],[7,6],[6,3],[0,3],[1,5],[4,7],[2,6]];function Ko(e,o,t,r){if(!(!r.showVisible&&!r.showHidden)){e.save(),e.lineWidth=r.width,r.dashed?e.setLineDash([4,3]):e.setLineDash([]);for(let[s,a]of Wo){let c=o[s],i=o[a],n={x:(t[s].x+t[a].x)*.5,y:(t[s].y+t[a].y)*.5,z:(t[s].z+t[a].z)*.5},f=Oe(n).z<=0;f&&r.showVisible?(e.strokeStyle=r.color,e.globalAlpha=r.opacity,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(i.x,i.y),e.stroke()):!f&&r.showHidden&&(e.strokeStyle=r.color,e.globalAlpha=r.opacity*.45,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(i.x,i.y),e.stroke())}e.restore()}}function wo(e,o,t,r,s,a,c=!0,i=null){let{ctx:n,scale:u,center:f,width:b,height:v}=e;n.save(),n.clearRect(0,0,b,v);let M=Uo(o),A=M.map(w=>O(w,u,f));if(n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,jo(n,A,M,o,s,a.viewRotating),n.restore(),Ko(n,A,M,De),Mo(n,u,f,I,re,typeof c=="boolean"?c?we:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:c),r>=0){let w=ne(t,s),g=Ze?{r:255-w.r,g:255-w.g,b:255-w.b}:w,y=O(t,u,f);i&&i.active&&Jo(n,y,i.rgb,i.alpha),qo(n,y,g)}n.restore()}function jo(e,o,t,r,s,a){let c=[r.x,r.y,r.z],i=[];for(let n=0;n<ee.length;n++){let u=ee[n],f=u.fixedValue*c[u.fixedAxis],b=c[u.uAxis],v=c[u.vAxis];if(b<.002&&v<.002)continue;let M={x:0,y:0,z:0},A=["x","y","z"];M[A[u.fixedAxis]]=f,M[A[u.uAxis]]=b*.5,M[A[u.vAxis]]=v*.5;let x=Oe(M),w={x:M.x+u.normal.x*.1,y:M.y+u.normal.y*.1,z:M.z+u.normal.z*.1};if(Oe(w).z-x.z<0){let C=u.quad.map(k=>o[k]);i.push({face:u,corners:C,fixedVal:f,uMax:b,vMax:v,depth:x.z})}}i.sort((n,u)=>u.depth-n.depth);for(let n of i)Qo(e,n.corners,n.face.fixedAxis,n.fixedVal,n.uMax,n.vMax,s)}function Qo(e,o,t,r,s,a,c){let i=$o,n=document.createElement("canvas");n.width=i,n.height=i;let u=n.getContext("2d"),f=u.createImageData(i,i),b=f.data;for(let j=0;j<i;j++)for(let H=0;H<i;H++){let ue=H/(i-1)*s,Z=j/(i-1)*a,se=po(t,ue,Z,r,c,Ze),Y=(j*i+H)*4;b[Y]=se.r,b[Y+1]=se.g,b[Y+2]=se.b,b[Y+3]=255}u.putImageData(f,0,0);let v=o[0],M=o[1],A=o[2],x=o[3],w=M.x-v.x,g=M.y-v.y,y=x.x-v.x,C=x.y-v.y;e.save(),e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(M.x,M.y),e.lineTo(A.x,A.y),e.lineTo(x.x,x.y),e.closePath(),e.clip();let k=2/i,E=v.x-w*k-y*k,R=v.y-g*k-C*k,B=1+2*k,F=1+2*k;e.transform(w*B/i,g*B/i,y*F/i,C*F/i,E,R),e.imageSmoothingEnabled=!0,e.drawImage(n,0,0),e.restore()}var oe=30,ie=13;function Jo(e,o,t,r){let s=(oe+ie)/2,a=5,c=Math.floor(o.x/a)*a,i=Math.floor(o.y/a)*a,n=oe*2+a*2,u=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,oe,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.clip();for(let w=-1;w*a<=n;w++)for(let g=-1;g*a<=n;g++)e.fillStyle=(w+g)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+w*a,i+g*a,a,a);let f="rgba("+t.r+","+t.g+","+t.b+",0)",b="rgba("+t.r+","+t.g+","+t.b+",1)",v=e;if(typeof v.createConicGradient=="function"){let w=v.createConicGradient(-Math.PI/2,o.x,o.y);w.addColorStop(0,f),w.addColorStop(1,b),e.fillStyle=w,e.fillRect(c-oe,i-oe,n,n)}else for(let g=0;g<36;g++){let y=-Math.PI/2+g/36*Math.PI*2,C=-Math.PI/2+(g+1)/36*Math.PI*2,k=(g+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(y)*ie,o.y+Math.sin(y)*ie),e.arc(o.x,o.y,oe,y,C),e.arc(o.x,o.y,ie,C,y,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+k.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,oe,0,Math.PI*2),e.arc(o.x,o.y,ie,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-oe-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let M=u*Math.PI*2,A=o.x+s*Math.sin(M),x=o.y-s*Math.cos(M);e.beginPath(),e.arc(A,x,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function qo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function Ro(e,o,t,r){let s=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return O(s[e],t,r)}function to(){let e={x:0,y:0};return[O({x:1,y:0,z:0},1,e),O({x:0,y:1,z:0},1,e),O({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function pe(e,o,t,r,s){let a=ee[e],c=[t.x,t.y,t.z],i=c[a.uAxis],n=c[a.vAxis];if(i<.002||n<.002)return null;let u={x:0,y:0,z:0},f=["x","y","z"];u[f[a.fixedAxis]]=a.fixedValue*c[a.fixedAxis];let b={...u};b[f[a.uAxis]]=i;let v={...u};v[f[a.vAxis]]=n;let M=O(u,r,s),A=O(b,r,s),x=O(v,r,s),w=A.x-M.x,g=A.y-M.y,y=x.x-M.x,C=x.y-M.y,k=w*C-g*y;if(Math.abs(k)<1e-6)return null;let E=o.x-M.x,R=o.y-M.y,B=(E*C-R*y)/k,F=(R*w-E*g)/k;return B<-.05||B>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,F))}}function Vo(e,o,t,r,s){let a=ee[e],c=[t.x,t.y,t.z],i=c[a.uAxis],n=c[a.vAxis];if(i<.002||n<.002)return null;let u={x:0,y:0,z:0},f=["x","y","z"];u[f[a.fixedAxis]]=a.fixedValue*c[a.fixedAxis];let b={...u};b[f[a.uAxis]]=i;let v={...u};v[f[a.vAxis]]=n;let M=O(u,r,s),A=O(b,r,s),x=O(v,r,s),w=A.x-M.x,g=A.y-M.y,y=x.x-M.x,C=x.y-M.y,k=w*C-g*y;if(Math.abs(k)<1e-6)return null;let E=o.x-M.x,R=o.y-M.y,B=(E*C-R*y)/k,F=(R*w-E*g)/k;return{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,F))}}var Eo=22;function zo(e,o,t,r,s,a,c,i,n,u,f,b,v,M,A){let x={...ko};function w(d){let h=e.getBoundingClientRect();return{x:d.clientX-h.left,y:d.clientY-h.top}}let g=!1,y=!1,C=!1,k=!1,E=!1,R=null,B=600,F=null;function j(){H(),F=setTimeout(ue,B)}function H(){F!==null&&(clearTimeout(F),F=null)}function ue(){F=null,x.alphaMode=!1,ke(),m(),E=!0,x.viewRotating=!0,R=null,n()}let Z=14,se=800,Y=null;function _(){$(),Y=setTimeout(ye,se)}function $(){Y!==null&&(clearTimeout(Y),Y=null),H()}function ye(){Y=null,x.alphaMode=!0,m(),ke(),y=!1,n()}function te(d){let h=v();return Math.hypot(d.x-h.x,d.y-h.y)}function Le(d){let h=v();return(Math.atan2(d.x-h.x,-(d.y-h.y))+Math.PI*2)%(Math.PI*2)}function le(d){f(Le(d)/(Math.PI*2)),n()}function ve(d){let h=te(d);return h>=ie-4&&h<=oe+6}function ce(d){let h=o(),V=c(),D=i();for(let S=0;S<3;S++){let P=Ro(S,h,V,D),G=d.x-P.x,N=d.y-P.y;if(G*G+N*N<=Eo*Eo)return S}return-1}function W(d){let h=o(),V=c(),D=i();for(let S=ee.length-1;S>=0;S--){let P=pe(S,d,h,V,D);if(P)return{faceIndex:S,...P}}return null}let Q=-1,J={x:0,y:0},Ee=0;function Me(d,h){Q=d,J=h,Ee=o()[["x","y","z"][d]],x.draggingAxisHandle=d,e.style.cursor="grabbing",n()}function l(d){if($(),Q<0)return;let h=d.x-J.x,V=d.y-J.y,S=to()[Q],P=c(),N=(h*S.x+V*S.y)/P,q=Math.max(0,Math.min(1,Ee+N)),U=o(),X=["x","y","z"],he={...U,[X[Q]]:q};t(he);let Ae=r(),uo=a(),bo=uo>=0?ee[uo]:null,Pe={...Ae};bo&&Q===bo.fixedAxis?Pe[X[Q]]=q:Pe[X[Q]]=Math.min(Ae[X[Q]],q),s(Pe,a()),n()}function m(){Q=-1,x.draggingAxisHandle=-1}let p=-1,z=null,L=null,T=!1;function Ce(d,h,V,D){p=d,x.draggingFace=d,z=null,L=null,T=!1,D&&(T=!0,L={s:h,t:V}),fe(d,h,V),e.style.cursor="crosshair",n()}function be(d,h,V){if($(),p<0)return;let D=o(),S=c(),P=i(),G=pe(p,d,D,S,P),N=p;if(!G&&!V){for(let X=ee.length-1;X>=0;X--)if(X!==p&&(G=pe(X,d,D,S,P),G)){N=X;break}}if(!G&&V&&(G=Vo(p,d,D,S,P),N=p),!G){n();return}N!==p&&(p=N,x.draggingFace=N,z=null,T=!1,L=null);let{s:q,t:U}=G;if(h&&L){if(T){let X=Math.abs(q-L.s),he=Math.abs(U-L.t),Ae=.02;(X>Ae||he>Ae)&&(z=X>=he?"u":"v",T=!1)}z==="u"?U=L.t:z==="v"&&(q=L.s)}else h||(z=null,T=!1,L=null);fe(N,q,U),n()}function fe(d,h,V){let D=ee[d],S=o(),P=["x","y","z"],G={...r()};G[P[D.uAxis]]=h*S[P[D.uAxis]],G[P[D.vAxis]]=V*S[P[D.vAxis]],G[P[D.fixedAxis]]=D.fixedValue*S[P[D.fixedAxis]],s(G,d)}function ke(){p=-1,x.draggingFace=-1,z=null,T=!1,L=null}let ae=null,me=!1,K=null;function no(d){C=!0;let h=w(d);if(ae=h,me=!1,K=null,u()&&x.alphaMode){if(te(h)<=Z){x.alphaMode=!1,n();return}if(ve(h)){d.preventDefault(),g=!0,le(h);return}x.alphaMode=!1,n();return}let V=W(h);V&&(K={faceIndex:V.faceIndex,s:V.s,t:V.t}),d.preventDefault(),E=!0,R=h,x.viewRotating=!0,u()&&te(h)<=Z&&_(),n()}function ro(d){let h=w(d);if(g){d.preventDefault(),le(h);return}if(E){if(d.preventDefault(),!R){R=h;return}let V=h.x-R.x,D=h.y-R.y;Math.hypot(V,D)>2&&(me=!0,$());let S=Ne();Ve(S.yaw+V*.012,S.pitch+D*.012),R=h,n();return}if(C&&x.alphaMode&&ve(h)){d.preventDefault(),g=!0,le(h);return}e.style.cursor="grab"}function ao(d){$(),C=!1,g=!1,y=!1,!me&&K&&fe(K.faceIndex,K.s,K.t),E&&(E=!1,x.viewRotating=!1,R=null,n()),e.style.cursor="grab"}function io(d){if(d.touches.length!==1)return;k=!0;let h=w(d.touches[0]);if(me=!1,K=null,u()&&x.alphaMode){if(te(h)<=Z){x.alphaMode=!1,n();return}if(ve(h)){d.preventDefault(),g=!0,le(h);return}x.alphaMode=!1,n();return}let V=W(h);V&&(K={faceIndex:V.faceIndex,s:V.s,t:V.t}),d.preventDefault(),E=!0,R=h,x.viewRotating=!0,u()&&te(h)<=Z&&_(),n()}function so(d){if(d.touches.length!==1)return;let h=w(d.touches[0]);if(g)d.preventDefault(),le(h);else if(k&&x.alphaMode&&ve(h))d.preventDefault(),g=!0,le(h);else if(E){if(d.preventDefault(),!R){R=h;return}let V=h.x-R.x,D=h.y-R.y;Math.hypot(V,D)>2&&(me=!0,$());let S=Ne();Ve(S.yaw+V*.012,S.pitch+D*.012),R=h,n()}}function lo(d){$(),k=!1,g=!1,!me&&K&&fe(K.faceIndex,K.s,K.t),E&&(E=!1,x.viewRotating=!1,R=null,n())}function co(d){if(d.key==="1"){Ve(Math.PI/4,0),n();return}if(d.key==="0"){Co(),n();return}if(d.key==="2"){Ve(.95,-.54),n();return}if(x.alphaMode){if(d.key==="Escape"){x.alphaMode=!1,n();return}if(d.key==="ArrowUp"||d.key==="ArrowRight"){d.preventDefault(),f(Math.min(1,b()+(d.shiftKey?.08:.02))),n();return}if(d.key==="ArrowDown"||d.key==="ArrowLeft"){d.preventDefault(),f(Math.max(0,b()-(d.shiftKey?.08:.02))),n();return}}let h=d.shiftKey?.04:.004,V=r(),D=o(),S=to(),P=0,G=0;switch(d.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":G=-1;break;case"ArrowDown":G=1;break;default:return}d.preventDefault();let N={...V},q=["x","y","z"];for(let U=0;U<3;U++){let X=P*S[U].x+G*S[U].y;if(Math.abs(X)>.3){let he=V[q[U]]+h*Math.sign(X);N[q[U]]=Math.max(0,Math.min(D[q[U]],he))}}s(N,a()),n()}e.addEventListener("mousedown",no),window.addEventListener("mousemove",ro),window.addEventListener("mouseup",ao),e.addEventListener("touchstart",io,{passive:!1}),e.addEventListener("touchmove",so,{passive:!1}),e.addEventListener("touchend",lo),e.addEventListener("keydown",co),e.setAttribute("tabindex","0");function Fo(){$(),e.removeEventListener("mousedown",no),window.removeEventListener("mousemove",ro),window.removeEventListener("mouseup",ao),e.removeEventListener("touchstart",io),e.removeEventListener("touchmove",so),e.removeEventListener("touchend",lo),e.removeEventListener("keydown",co)}return{state:x,destroy:Fo}}function So(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function To(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Do(e,o,t){if(t.showModeToggle){let r=document.createElement("div");r.className="box-picker-mode-toggle";let s=f=>{let b=document.createElement("button");return b.textContent=f.toUpperCase(),b.addEventListener("click",()=>o.switchMode(f)),r.appendChild(b),b},a=s("oklch"),c=s("rgb"),i=s("hsb"),n=()=>{let f=o.mode();c.classList.toggle("active",f==="rgb"),i.classList.toggle("active",f==="hsb"),a.classList.toggle("active",f==="oklch")};n();let u=o.switchMode;o._markActive=n,e.appendChild(r)}if(t.showInputs){let r=document.createElement("input");r.className="box-picker-hex",r.type="text",r.spellcheck=!1,r.addEventListener("change",()=>{let b=r.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),r.addEventListener("click",()=>{So(o.getRgbForCopy()?"#"+et(o.getRgbForCopy()):"#ffffff"),To(r)});let s=document.createElement("div");s.className="box-picker-channels";let a=[],c=[],i=["R","G","B"];for(let b=0;b<3;b++){let v=document.createElement("div");v.className="box-picker-channel";let M=document.createElement("label");M.textContent=i[b];let A=document.createElement("input");A.type="text",A.inputMode="numeric",v.appendChild(M),v.appendChild(A),s.appendChild(v),a.push(A),c.push(M),A.addEventListener("change",()=>{let x=parseFloat(A.value);isNaN(x)||o.onChannelInput(b,x,255)}),A.addEventListener("click",()=>{let x=o.getRgbForCopy();So(`${x.r}, ${x.g}, ${x.b}`),To(A)})}let n=document.createElement("div");n.className="box-picker-hexrow";let u=document.createElement("div");u.className="box-picker-hexwrap";let f=document.createElement("label");f.textContent="Hex",u.appendChild(f),u.appendChild(r),n.appendChild(s),n.appendChild(u),e.appendChild(n),e._inputs={hexInput:r,inputs:a,labels:c}}if(t.showCorners){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let a=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);o.onRandom({r:a,g:c,b:i})}),e.appendChild(r);let s=document.createElement("button");s.className="box-corner-btn box-corner-right",s.title="Reset",s.setAttribute("aria-label","Reset"),s.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',s.addEventListener("click",()=>o.onReset()),e.appendChild(s)}}function et(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Lo=`.box-picker {\r
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
`;var tt=Io,Po=!1;function nt(){if(Po||typeof document>"u")return;Po=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Lo,document.head.appendChild(e)}function Io(e,o={}){let t=o.size??300,r=o.controls??!0,s=o.showInputs??!1,a=o.showModeToggle??!1,c=o.showCorners??!1,i={mode:()=>n,switchMode:l=>ue(l),onHexInput:l=>{let m=_e(l);m?(b=de(H?{r:255-m.r,g:255-m.g,b:255-m.b}:m,n),f={x:Math.max(f.x,b.x),y:Math.max(f.y,b.y),z:Math.max(f.z,b.z)},J(),W(),_()):W()},onChannelInput:(l,m,p)=>{let z=Math.max(0,Math.min(p,m)),L=["x","y","z"],T=z/p;if(H){let Ce={...b,[L[l]]:T},be=ne(Ce,n);b=de({r:255-be.r,g:255-be.g,b:255-be.b},n)}else b={...b,[L[l]]:T};T>f[L[l]]&&(f={...f,[L[l]]:T}),J(),W(),_()},getRgbForCopy:()=>ne(b,n),onRandom:l=>Me(l),onReset:()=>Me({r:0,g:0,b:0})},n=o.mode??"rgb",u=o.initialColor?de(o.initialColor,n):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},b={...u},v=0,M=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function x(l){let m=Math.max(0,Math.min(1,l));m!==A&&(A=m,J(),W(),_())}function w(l){let m=ce(),p=ge(m);p.s=Math.max(0,Math.min(100,l*100));let z=He(p);Me(H?{r:255-z.r,g:255-z.g,b:255-z.b}:z)}let g=new Set;nt();let y=document.createElement("div");y.className="box-picker";let C=document.createElement("canvas");C.style.cursor="grab",y.appendChild(C);let k=Ao(C,t),E={...we},R=!0,B=null,F=document.createElement("div");F.className="box-picker-controls",B=document.createElement("div"),B.className="box-picker-swatch",F.appendChild(B),y.appendChild(F),(s||a||c)&&Do(F,i,{showInputs:s,showModeToggle:a,showCorners:c}),e.appendChild(y);let j=zo(C,()=>f,l=>{f=l},()=>b,(l,m)=>{b=l,v=m,J(),W()},()=>v,()=>k.scale,()=>k.center,_,M,x,()=>A,()=>O(b,k.scale,k.center),w,()=>ge(ce()).s/100),H=!1;C.addEventListener("dblclick",()=>{H=!H,Ye(H),J(),W(),_()});function ue(l){if(l===n)return;let m=ne(b,n),p={...b},z={...f};n=l;let L=de(m,n),T={x:1,y:1,z:1};b=L,f=T,se(p,L,z,T,300),W()}let Z=null;function se(l,m,p,z,L){Z!==null&&cancelAnimationFrame(Z);let T=performance.now();function Ce(be){let fe=be-T,ke=Math.min(1,fe/L),ae=1-Math.pow(1-ke,3);b={x:l.x+(m.x-l.x)*ae,y:l.y+(m.y-l.y)*ae,z:l.z+(m.z-l.z)*ae},f={x:p.x+(z.x-p.x)*ae,y:p.y+(z.y-p.y)*ae,z:p.z+(z.z-p.z)*ae},$(),J(),ke<1?Z=requestAnimationFrame(Ce):Z=null}Z=requestAnimationFrame(Ce)}let Y=!1;function _(){Y||(Y=!0,requestAnimationFrame(()=>{Y=!1,$()}))}function $(){wo(k,f,b,v,n,j.state,E,{active:j.state.alphaMode,alpha:A,rgb:ce()})}function ye(l,m,p){return Math.round(l+(m-l)*p)}function te(l,m){let p=m>0?255:0,z=Math.abs(m);return Re({r:ye(l.r,p,z),g:ye(l.g,p,z),b:ye(l.b,p,z)})}function Le(l,m){let p=_e(m)||{r:128,g:128,b:128},z=te(p,.35),L=te(p,0),T=te(p,-.35);l.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${z}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${T}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,l.style.backgroundColor="transparent"}function le(l){try{navigator.clipboard.writeText(l).catch(()=>{})}catch{}}function ve(l){l&&(l.style.borderColor="#4ade80",l.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{l.style.borderColor="",l.style.boxShadow=""},500))}function ce(){let l=ne(b,n);return H?{r:255-l.r,g:255-l.g,b:255-l.b}:l}function W(){if(!r)return;let l=ce(),m=Re(l);B&&Le(B,m);let p=y.querySelector(".box-picker-hex");p&&(p.value=m),Q(),y._updateModeButtons&&y._updateModeButtons()}function Q(){if(!r)return;let l=fo[n],m=H?de(ce(),n):b,p=xo(m,n),z=y.querySelectorAll(".box-picker-channel input"),L=y.querySelectorAll(".box-picker-channel label");for(let T=0;T<z.length;T++)L[T].textContent=l[T],L[T].style.color="",L[T].style.textShadow="none",z[T].value=String(p[T])}function J(){let l=ce(),m={rgb:l,hsb:ge(l),oklch:Se(l),hex:Re(l),alpha:A};for(let p of g)p(m)}function Ee(){let l=ne(b,n);return{rgb:l,hsb:ge(l),oklch:Se(l),hex:Re(l)}}W(),$();let Me=l=>{b=de(l,n),f={x:Math.max(f.x,b.x),y:Math.max(f.y,b.y),z:Math.max(f.z,b.z)};let m=O(b,k.scale,k.center);v=-1;for(let p=ee.length-1;p>=0;p--)if(pe(p,m,f,k.scale,k.center)){v=p;break}J(),W(),_()};return{getColor:Ee,getMode:()=>n,setColor:Me,setAlpha:x,getAlpha:()=>A,setMode(l){ue(l)},getRotation:()=>We(),setRotation:(l,m)=>{Ke(l,m),_()},getAxisRotation:()=>Ue(),setAxisRotation:(l,m,p)=>{$e(l,m,p),_()},getGuides:()=>({...E}),setGuides:l=>{E={...E,...l},_()},toggleAllGuides:l=>{let m=l!==void 0?l:!R;R=m,E={vertexX:m,vertexY:m,vertexZ:m,centerX:m,centerY:m,centerZ:m,angleGuides:m,yawArc:m,pitchArc:m},_()},setZoom:l=>{je(l),_()},getZoom:()=>Qe(),setDimensions:(l,m,p)=>{Je(l,m,p),_()},getDimensions:()=>qe(),getEdgeStyle:()=>oo(),setEdgeStyle:l=>{eo(l),_()},on(l,m){g.add(m)},off(l,m){g.delete(m)},destroy(){j.destroy(),Z!==null&&cancelAnimationFrame(Z),e.removeChild(y)}}}return Oo(rt);})();
