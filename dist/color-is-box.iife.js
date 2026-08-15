var ColorIsBox=(()=>{var De=Object.defineProperty;var Bo=Object.getOwnPropertyDescriptor;var Go=Object.getOwnPropertyNames;var Ho=Object.prototype.hasOwnProperty;var _o=(e,o)=>{for(var t in o)De(e,t,{get:o[t],enumerable:!0})},Xo=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of Go(o))!Ho.call(e,l)&&l!==t&&De(e,l,{get:()=>o[l],enumerable:!(r=Bo(o,l))||r.enumerable});return e};var Zo=e=>Xo(De({},"__esModule",{value:!0}),e);var rt={};_o(rt,{DEFAULT_EDGE_CONFIG:()=>Ee,DEFAULT_GUIDES:()=>ke,createBoxColorPicker:()=>Po,createColorPicker:()=>tt,getBoxDimensions:()=>Qe,getCameraAnglesDeg:()=>Ue,getEdgeStyle:()=>qe,getRotationDeg:()=>Ye,getZoomMultiplier:()=>je,setBoxDimensions:()=>Ke,setBoxInvert:()=>Ze,setCameraAnglesDeg:()=>$e,setEdgeStyle:()=>Je,setRotationDeg:()=>Ne,setZoomMultiplier:()=>We});var Ee={showVisible:!0,showHidden:!1,width:1.5,dashed:!1,color:"#ffffff",opacity:.45},ke={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,yawArc:!0,pitchArc:!0},bo={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},fo={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function fe(e){let o=e.r/255,t=e.g/255,r=e.b/255,l=Math.max(o,t,r),a=Math.min(o,t,r),c=l-a,s=0;c!==0&&(l===o?s=((t-r)/c+6)%6:l===t?s=(r-o)/c+2:s=(o-t)/c+4,s*=60);let n=l===0?0:c/l*100,u=l*100;return{h:s,s:n,b:u}}function Be(e){let o=e.h,t=e.s/100,r=e.b/100,l=r*t,a=l*(1-Math.abs(o/60%2-1)),c=r-l,s,n,u;return o<60?(s=l,n=a,u=0):o<120?(s=a,n=l,u=0):o<180?(s=0,n=l,u=a):o<240?(s=0,n=a,u=l):o<300?(s=a,n=0,u=l):(s=l,n=0,u=a),{r:Math.round((s+c)*255),g:Math.round((n+c)*255),b:Math.round((u+c)*255)}}function Pe(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ie(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function Oo(e){let o=Pe(e.r/255),t=Pe(e.g/255),r=Pe(e.b/255),l=.4122214708*o+.5363325363*t+.0514459929*r,a=.2119034982*o+.6806995451*t+.1073969566*r,c=.0883024619*o+.2817188376*t+.6299787005*r,s=Math.cbrt(l),n=Math.cbrt(a),u=Math.cbrt(c);return{L:.2104542553*s+.793617785*n-.0040720468*u,a:1.9779984951*s-2.428592205*n+.4505937099*u,b:.0259040371*s+.7827717662*n-.808675766*u}}function Yo(e,o,t){let r=e+.3963377774*o+.2158037573*t,l=e-.1055613458*o-.0638541728*t,a=e-.0894841775*o-1.291485548*t,c=r*r*r,s=l*l*l,n=a*a*a,u=4.0767416621*c-3.3077115913*s+.2309699292*n,m=-1.2684380046*c+2.6097574011*s-.3413193965*n,b=-.0041960863*c-.7034186147*s+1.707614701*n;return{r:Math.round(Math.max(0,Math.min(1,Ie(u)))*255),g:Math.round(Math.max(0,Math.min(1,Ie(m)))*255),b:Math.round(Math.max(0,Math.min(1,Ie(b)))*255)}}function ze(e){let o=Oo(e),t=Math.sqrt(o.a*o.a+o.b*o.b),r=Math.atan2(o.b,o.a)*(180/Math.PI);return r<0&&(r+=360),{l:o.L,c:t,h:t<1e-4?0:r}}function Fe(e){let o=e.h*(Math.PI/180),t=e.c*Math.cos(o),r=e.c*Math.sin(o);return Yo(e.l,t,r)}function No(e,o,t){let r=Fe({l:e,c:o,h:t});if(mo(r))return{l:e,c:o,h:t};let l=0,a=o;for(let c=0;c<20;c++){let s=(l+a)/2;r=Fe({l:e,c:s,h:t}),mo(r)?l=s:a=s}return{l:e,c:l,h:t}}function mo(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function Ae(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Ge(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var ho=.4;function ie(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return Be({h:e.x*359,s:e.y*100,b:e.z*100});{let t=e.x,r=e.y*ho,l=e.z*359,a=No(t,r,l);return Fe(a)}}function de(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let t=fe(e);return{x:t.h/359,y:t.s/100,z:t.b/100}}else{let t=ze(e);return{x:t.l,y:Math.min(t.c/ho,1),z:t.h/359}}}function go(e,o){let t=fo[o];return[Math.round(e.x*t[0]),Math.round(e.y*t[1]),Math.round(e.z*t[2])]}function xo(e,o,t,r,l,a=!1){let c;e===0?c={x:r,y:o,z:t}:e===1?c={x:o,y:r,z:t}:c={x:o,y:t,z:r};let s=ie(c,l);return a?{r:255-s.r,g:255-s.g,b:255-s.b}:s}var po={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},yo={sizeX:1,sizeY:1,sizeZ:1};function He(e,o,t){let r=(e.x-.5)*t.sizeX,l=(e.y-.5)*t.sizeY,a=(e.z-.5)*t.sizeZ,c=Math.cos(o.rotZRad),s=Math.sin(o.rotZRad),n=r*c-l*s,u=r*s+l*c,m=a,b=Math.cos(o.rotYRad),M=Math.sin(o.rotYRad),k=n*b+m*M,w=u,p=-n*M+m*b,g=Math.cos(o.rotXRad),h=Math.sin(o.rotXRad),y=k,V=p*g-w*h,C=p*h+w*g;return{x:y,y:V,z:C}}function Te(e,o,t,r,l){let a=He(e,r,l);return{x:t.x+a.x*o*1.6*r.zoom,y:t.y-a.y*o*1.6*r.zoom}}var me=["#ef4444","#22c55e","#3b82f6"];function vo(e,o,t,r,l,a){let c=g=>Te(g,o,t,r,l),s=c({x:0,y:0,z:0});e.save();let n=1.28,u=[{p:{x:n,y:0,z:0},name:"X",color:me[0],visible:a.vertexX},{p:{x:0,y:n,z:0},name:"Y",color:me[1],visible:a.vertexY},{p:{x:0,y:0,z:n},name:"Z",color:me[2],visible:a.vertexZ}];for(let g=0;g<u.length;g++){if(!u[g].visible)continue;let h=c(u[g].p),y=u[g].color;e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(h.x,h.y),e.strokeStyle=y,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(h.x,h.y,3.5,0,Math.PI*2),e.fillStyle=y,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let V=h.x-s.x,C=h.y-s.y,T=Math.hypot(V,C)||1,A=12,B=h.x+V/T*A,P=h.y+C/T*A;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=y,e.fillText(u[g].name,B,P)}(a.vertexX||a.vertexY||a.vertexZ)&&(e.beginPath(),e.arc(s.x,s.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let m=c({x:.5,y:.5,z:.5}),b=.35,M=[{from:{x:-b,y:.5,z:.5},to:{x:1+b,y:.5,z:.5},color:me[0],name:"Cx",visible:a.centerX},{from:{x:.5,y:-b,z:.5},to:{x:.5,y:1+b,z:.5},color:me[1],name:"Cy",visible:a.centerY},{from:{x:.5,y:.5,z:-b},to:{x:.5,y:.5,z:1+b},color:me[2],name:"Cz",visible:a.centerZ}],k=!1;for(let g=0;g<M.length;g++){if(!M[g].visible)continue;k=!0;let h=c(M[g].from),y=c(M[g].to);e.beginPath(),e.moveTo(h.x,h.y),e.lineTo(y.x,y.y),e.strokeStyle=M[g].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(h.x,h.y,3,0,Math.PI*2),e.arc(y.x,y.y,3,0,Math.PI*2),e.fillStyle=M[g].color,e.fill()}k&&(e.beginPath(),e.arc(m.x,m.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let w=Math.round(r.rotZRad*180/Math.PI*10)/10,p=Math.round(r.rotXRad*180/Math.PI*10)/10;if(a.yawArc){e.beginPath();let g=36;for(let h=0;h<=g;h++){let y=h/g*Math.PI*2,V={x:.5+Math.cos(y)*.75,y:.5+Math.sin(y)*.75,z:0},C=c(V);h===0?e.moveTo(C.x,C.y):e.lineTo(C.x,C.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([])}if(a.pitchArc){e.beginPath();let g=20;for(let h=0;h<=g;h++){let y=-Math.PI/2+h/g*Math.PI,V={x:.5+Math.cos(y)*.75,y:.5,z:.5+Math.sin(y)*.75},C=c(V);h===0?e.moveTo(C.x,C.y):e.lineTo(C.x,C.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([])}(a.yawArc||a.pitchArc)&&(e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",a.yawArc&&(e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${w.toFixed(1)}\xB0`,12,t.y*2-(a.pitchArc?24:10))),a.pitchArc&&(e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${p.toFixed(1)}\xB0`,12,t.y*2-10))),e.restore()}var Xe=!1;function Ze(e){Xe=e}var F={...po},se={...yo};function we(e,o){F.rotZRad=-30*(Math.PI/180)+e,F.rotXRad=20*(Math.PI/180)+o}function Oe(){return{yaw:F.rotZRad- -30*(Math.PI/180),pitch:F.rotXRad-20*(Math.PI/180)}}function Mo(){F.rotXRad=20*(Math.PI/180),F.rotYRad=0,F.rotZRad=-30*(Math.PI/180)}function Ye(){return{rotXDeg:Math.round(F.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(F.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(F.rotZRad*180/Math.PI*10)/10}}function Ne(e,o,t){F.rotXRad=e*Math.PI/180,F.rotYRad=o*Math.PI/180,F.rotZRad=t*Math.PI/180}function Ue(){return{yawDeg:Math.round(F.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(F.rotXRad*180/Math.PI*10)/10}}function $e(e,o){F.rotZRad=e*Math.PI/180,F.rotXRad=o*Math.PI/180}function We(e){F.zoom=Math.max(.1,Math.min(3,e))}function je(){return F.zoom}function Ke(e,o,t){se.sizeX=Math.max(.1,Math.min(2.5,e)),se.sizeY=Math.max(.1,Math.min(2.5,o)),se.sizeZ=Math.max(.1,Math.min(2.5,t))}function Qe(){return{sizeX:se.sizeX,sizeY:se.sizeY,sizeZ:se.sizeZ}}function Z(e,o,t){return Te(e,o,t,F,se)}function _e(e){return He(e,F,se)}function Uo(e){let{x:o,y:t,z:r}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:t,z:0},{x:0,y:0,z:r},{x:o,y:t,z:0},{x:o,y:0,z:r},{x:0,y:t,z:r},{x:o,y:t,z:r}]}var J=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],$o=64,Co={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function ko(e,o){let t=window.devicePixelRatio||1;e.width=o*t,e.height=o*1*t,e.style.width=`${o}px`,e.style.height=`${o*1}px`;let r=e.getContext("2d");return r.scale(t,t),{ctx:r,scale:o*.26,center:{x:o/2,y:o*.5},width:o,height:o*1}}var Se={...Ee};function Je(e){Se={...Se,...e}}function qe(){return{...Se}}var Wo=[[0,1],[1,4],[4,2],[2,0],[3,5],[5,7],[7,6],[6,3],[0,3],[1,5],[4,7],[2,6]];function jo(e,o,t,r){if(!(!r.showVisible&&!r.showHidden)){e.save(),e.lineWidth=r.width,r.dashed?e.setLineDash([4,3]):e.setLineDash([]);for(let[l,a]of Wo){let c=o[l],s=o[a],n={x:(t[l].x+t[a].x)*.5,y:(t[l].y+t[a].y)*.5,z:(t[l].z+t[a].z)*.5},m=_e(n).z<=0;m&&r.showVisible?(e.strokeStyle=r.color,e.globalAlpha=r.opacity,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(s.x,s.y),e.stroke()):!m&&r.showHidden&&(e.strokeStyle=r.color,e.globalAlpha=r.opacity*.45,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(s.x,s.y),e.stroke())}e.restore()}}function Ao(e,o,t,r,l,a,c=!0,s=null){let{ctx:n,scale:u,center:m,width:b,height:M}=e;n.save(),n.clearRect(0,0,b,M);let k=Uo(o),w=k.map(g=>Z(g,u,m));if(n.save(),n.shadowColor="rgba(0,0,0,0.35)",n.shadowBlur=8,n.shadowOffsetX=0,n.shadowOffsetY=2,Ko(n,w,k,o,l,a.viewRotating),n.restore(),jo(n,w,k,Se),vo(n,u,m,F,se,typeof c=="boolean"?c?ke:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:c),r>=0){let g=ie(t,l),h=Xe?{r:255-g.r,g:255-g.g,b:255-g.b}:g,y=Z(t,u,m);s&&s.active&&Jo(n,y,s.rgb,s.alpha),qo(n,y,h)}n.restore()}function Ko(e,o,t,r,l,a){let c=[r.x,r.y,r.z],s=[];for(let n=0;n<J.length;n++){let u=J[n],m=u.fixedValue*c[u.fixedAxis],b=c[u.uAxis],M=c[u.vAxis];if(b<.002&&M<.002)continue;let k={x:0,y:0,z:0},w=["x","y","z"];k[w[u.fixedAxis]]=m,k[w[u.uAxis]]=b*.5,k[w[u.vAxis]]=M*.5;let p=_e(k),g={x:k.x+u.normal.x*.1,y:k.y+u.normal.y*.1,z:k.z+u.normal.z*.1};if(_e(g).z-p.z<0){let V=u.quad.map(C=>o[C]);s.push({face:u,corners:V,fixedVal:m,uMax:b,vMax:M,depth:p.z})}}s.sort((n,u)=>u.depth-n.depth);for(let n of s)Qo(e,n.corners,n.face.fixedAxis,n.fixedVal,n.uMax,n.vMax,l)}function Qo(e,o,t,r,l,a,c){let s=$o,n=document.createElement("canvas");n.width=s,n.height=s;let u=n.getContext("2d"),m=u.createImageData(s,s),b=m.data;for(let q=0;q<s;q++)for(let K=0;K<s;K++){let $=K/(s-1)*l,ne=q/(s-1)*a,Y=xo(t,$,ne,r,c,Xe),W=(q*s+K)*4;b[W]=Y.r,b[W+1]=Y.g,b[W+2]=Y.b,b[W+3]=255}u.putImageData(m,0,0);let M=o[0],k=o[1],w=o[2],p=o[3],g=k.x-M.x,h=k.y-M.y,y=p.x-M.x,V=p.y-M.y;e.save(),e.beginPath(),e.moveTo(M.x,M.y),e.lineTo(k.x,k.y),e.lineTo(w.x,w.y),e.lineTo(p.x,p.y),e.closePath(),e.clip();let C=2/s,T=M.x-g*C-y*C,A=M.y-h*C-V*C,B=1+2*C,P=1+2*C;e.transform(g*B/s,h*B/s,y*P/s,V*P/s,T,A),e.imageSmoothingEnabled=!0,e.drawImage(n,0,0),e.restore()}var te=30,ce=13;function Jo(e,o,t,r){let l=(te+ce)/2,a=5,c=Math.floor(o.x/a)*a,s=Math.floor(o.y/a)*a,n=te*2+a*2,u=Math.max(0,Math.min(1,r));e.save(),e.beginPath(),e.arc(o.x,o.y,te,0,Math.PI*2),e.arc(o.x,o.y,ce,0,Math.PI*2,!0),e.clip();for(let g=-1;g*a<=n;g++)for(let h=-1;h*a<=n;h++)e.fillStyle=(g+h)%2===0?"#ffffff":"#d9d9d9",e.fillRect(c+g*a,s+h*a,a,a);let m="rgba("+t.r+","+t.g+","+t.b+",0)",b="rgba("+t.r+","+t.g+","+t.b+",1)",M=e;if(typeof M.createConicGradient=="function"){let g=M.createConicGradient(-Math.PI/2,o.x,o.y);g.addColorStop(0,m),g.addColorStop(1,b),e.fillStyle=g,e.fillRect(c-te,s-te,n,n)}else for(let h=0;h<36;h++){let y=-Math.PI/2+h/36*Math.PI*2,V=-Math.PI/2+(h+1)/36*Math.PI*2,C=(h+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(y)*ce,o.y+Math.sin(y)*ce),e.arc(o.x,o.y,te,y,V),e.arc(o.x,o.y,ce,V,y,!0),e.closePath(),e.fillStyle="rgba("+t.r+","+t.g+","+t.b+","+C.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,te,0,Math.PI*2),e.arc(o.x,o.y,ce,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-te-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let k=u*Math.PI*2,w=o.x+l*Math.sin(k),p=o.y-l*Math.cos(k);e.beginPath(),e.arc(w,p,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function qo(e,o,t){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${t.r},${t.g},${t.b})`,e.fill()}function wo(e,o,t,r){let l=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return Z(l[e],t,r)}function eo(){let e={x:0,y:0};return[Z({x:1,y:0,z:0},1,e),Z({x:0,y:1,z:0},1,e),Z({x:0,y:0,z:1},1,e)].map(t=>{let r=Math.sqrt(t.x*t.x+t.y*t.y);return r>0?{x:t.x/r,y:t.y/r}:{x:0,y:0}})}function he(e,o,t,r,l){let a=J[e],c=[t.x,t.y,t.z],s=c[a.uAxis],n=c[a.vAxis];if(s<.002||n<.002)return null;let u={x:0,y:0,z:0},m=["x","y","z"];u[m[a.fixedAxis]]=a.fixedValue*c[a.fixedAxis];let b={...u};b[m[a.uAxis]]=s;let M={...u};M[m[a.vAxis]]=n;let k=Z(u,r,l),w=Z(b,r,l),p=Z(M,r,l),g=w.x-k.x,h=w.y-k.y,y=p.x-k.x,V=p.y-k.y,C=g*V-h*y;if(Math.abs(C)<1e-6)return null;let T=o.x-k.x,A=o.y-k.y,B=(T*V-A*y)/C,P=(A*g-T*h)/C;return B<-.05||B>1.05||P<-.05||P>1.05?null:{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,P))}}function Ro(e,o,t,r,l){let a=J[e],c=[t.x,t.y,t.z],s=c[a.uAxis],n=c[a.vAxis];if(s<.002||n<.002)return null;let u={x:0,y:0,z:0},m=["x","y","z"];u[m[a.fixedAxis]]=a.fixedValue*c[a.fixedAxis];let b={...u};b[m[a.uAxis]]=s;let M={...u};M[m[a.vAxis]]=n;let k=Z(u,r,l),w=Z(b,r,l),p=Z(M,r,l),g=w.x-k.x,h=w.y-k.y,y=p.x-k.x,V=p.y-k.y,C=g*V-h*y;if(Math.abs(C)<1e-6)return null;let T=o.x-k.x,A=o.y-k.y,B=(T*V-A*y)/C,P=(A*g-T*h)/C;return{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,P))}}var Vo=22;function Eo(e,o,t,r,l,a,c,s,n,u,m,b,M,k,w){let p={...Co};function g(d){let x=e.getBoundingClientRect();return{x:d.clientX-x.left,y:d.clientY-x.top}}let h=!1,y=!1,V=!1,C=!1,T=!1,A=null,B=600,P=null;function q(){K(),P=setTimeout($,B)}function K(){P!==null&&(clearTimeout(P),P=null)}function $(){P=null,p.alphaMode=!1,Re(),i(),T=!0,p.viewRotating=!0,A=null,n()}let ne=14,Y=800,W=null;function ue(){L(),W=setTimeout(ge,Y)}function L(){W!==null&&(clearTimeout(W),W=null),K()}function ge(){W=null,p.alphaMode=!0,i(),Re(),y=!1,n()}function re(d){let x=M();return Math.hypot(d.x-x.x,d.y-x.y)}function xe(d){let x=M();return(Math.atan2(d.x-x.x,-(d.y-x.y))+Math.PI*2)%(Math.PI*2)}function le(d){m(xe(d)/(Math.PI*2)),n()}function pe(d){let x=re(d);return x>=ce-4&&x<=te+6}function Io(d){let x=o(),R=c(),S=s();for(let z=0;z<3;z++){let I=wo(z,x,R,S),H=d.x-I.x,O=d.y-I.y;if(H*H+O*O<=Vo*Vo)return z}return-1}function ae(d){let x=o(),R=c(),S=s();for(let z=J.length-1;z>=0;z--){let I=he(z,d,x,R,S);if(I)return{faceIndex:z,...I}}return null}let _=-1,ye={x:0,y:0},ee=0;function oo(d,x){_=d,ye=x,ee=o()[["x","y","z"][d]],p.draggingAxisHandle=d,e.style.cursor="grabbing",n()}function ve(d){if(L(),_<0)return;let x=d.x-ye.x,R=d.y-ye.y,z=eo()[_],I=c(),O=(x*z.x+R*z.y)/I,Q=Math.max(0,Math.min(1,ee+O)),U=o(),X=["x","y","z"],be={...U,[X[_]]:Q};t(be);let Ce=r(),co=a(),uo=co>=0?J[co]:null,Le={...Ce};uo&&_===uo.fixedAxis?Le[X[_]]=Q:Le[X[_]]=Math.min(Ce[X[_]],Q),l(Le,a()),n()}function i(){_=-1,p.draggingAxisHandle=-1}let f=-1,v=null,E=null,D=!1;function G(d,x,R,S){f=d,p.draggingFace=d,v=null,E=null,D=!1,S&&(D=!0,E={s:x,t:R}),oe(d,x,R),e.style.cursor="crosshair",n()}function Me(d,x,R){if(L(),f<0)return;let S=o(),z=c(),I=s(),H=he(f,d,S,z,I),O=f;if(!H&&!R){for(let X=J.length-1;X>=0;X--)if(X!==f&&(H=he(X,d,S,z,I),H)){O=X;break}}if(!H&&R&&(H=Ro(f,d,S,z,I),O=f),!H){n();return}O!==f&&(f=O,p.draggingFace=O,v=null,D=!1,E=null);let{s:Q,t:U}=H;if(x&&E){if(D){let X=Math.abs(Q-E.s),be=Math.abs(U-E.t),Ce=.02;(X>Ce||be>Ce)&&(v=X>=be?"u":"v",D=!1)}v==="u"?U=E.t:v==="v"&&(Q=E.s)}else x||(v=null,D=!1,E=null);oe(O,Q,U),n()}function oe(d,x,R){let S=J[d],z=o(),I=["x","y","z"],H={...r()};H[I[S.uAxis]]=x*z[I[S.uAxis]],H[I[S.vAxis]]=R*z[I[S.vAxis]],H[I[S.fixedAxis]]=S.fixedValue*z[I[S.fixedAxis]],l(H,d)}function Re(){f=-1,p.draggingFace=-1,v=null,D=!1,E=null}let Ve=null,N=!1,j=null;function to(d){V=!0;let x=g(d);if(Ve=x,N=!1,j=null,u()&&p.alphaMode){if(re(x)<=ne){p.alphaMode=!1,n();return}if(pe(x)){d.preventDefault(),h=!0,le(x);return}p.alphaMode=!1,n();return}let R=ae(x);R&&(j={faceIndex:R.faceIndex,s:R.s,t:R.t}),d.preventDefault(),T=!0,A=x,p.viewRotating=!0,u()&&re(x)<=ne&&ue(),n()}function no(d){let x=g(d);if(h){d.preventDefault(),le(x);return}if(T){if(d.preventDefault(),!A){A=x;return}let R=x.x-A.x,S=x.y-A.y;Math.hypot(R,S)>2&&(N=!0,L());let z=Oe();we(z.yaw+R*.012,z.pitch+S*.012),A=x,n();return}if(V&&p.alphaMode&&pe(x)){d.preventDefault(),h=!0,le(x);return}e.style.cursor="grab"}function ro(d){L(),V=!1,h=!1,y=!1,!N&&j&&oe(j.faceIndex,j.s,j.t),T&&(T=!1,p.viewRotating=!1,A=null,n()),e.style.cursor="grab"}function ao(d){if(d.touches.length!==1)return;C=!0;let x=g(d.touches[0]);if(N=!1,j=null,u()&&p.alphaMode){if(re(x)<=ne){p.alphaMode=!1,n();return}if(pe(x)){d.preventDefault(),h=!0,le(x);return}p.alphaMode=!1,n();return}let R=ae(x);R&&(j={faceIndex:R.faceIndex,s:R.s,t:R.t}),d.preventDefault(),T=!0,A=x,p.viewRotating=!0,u()&&re(x)<=ne&&ue(),n()}function io(d){if(d.touches.length!==1)return;let x=g(d.touches[0]);if(h)d.preventDefault(),le(x);else if(C&&p.alphaMode&&pe(x))d.preventDefault(),h=!0,le(x);else if(T){if(d.preventDefault(),!A){A=x;return}let R=x.x-A.x,S=x.y-A.y;Math.hypot(R,S)>2&&(N=!0,L());let z=Oe();we(z.yaw+R*.012,z.pitch+S*.012),A=x,n()}}function so(d){L(),C=!1,h=!1,!N&&j&&oe(j.faceIndex,j.s,j.t),T&&(T=!1,p.viewRotating=!1,A=null,n())}function lo(d){if(d.key==="1"){we(Math.PI/4,0),n();return}if(d.key==="0"){Mo(),n();return}if(d.key==="2"){we(.95,-.54),n();return}if(p.alphaMode){if(d.key==="Escape"){p.alphaMode=!1,n();return}if(d.key==="ArrowUp"||d.key==="ArrowRight"){d.preventDefault(),m(Math.min(1,b()+(d.shiftKey?.08:.02))),n();return}if(d.key==="ArrowDown"||d.key==="ArrowLeft"){d.preventDefault(),m(Math.max(0,b()-(d.shiftKey?.08:.02))),n();return}}let x=d.shiftKey?.04:.004,R=r(),S=o(),z=eo(),I=0,H=0;switch(d.key){case"ArrowRight":I=1;break;case"ArrowLeft":I=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}d.preventDefault();let O={...R},Q=["x","y","z"];for(let U=0;U<3;U++){let X=I*z[U].x+H*z[U].y;if(Math.abs(X)>.3){let be=R[Q[U]]+x*Math.sign(X);O[Q[U]]=Math.max(0,Math.min(S[Q[U]],be))}}l(O,a()),n()}e.addEventListener("mousedown",to),window.addEventListener("mousemove",no),window.addEventListener("mouseup",ro),e.addEventListener("touchstart",ao,{passive:!1}),e.addEventListener("touchmove",io,{passive:!1}),e.addEventListener("touchend",so),e.addEventListener("keydown",lo),e.setAttribute("tabindex","0");function Fo(){L(),e.removeEventListener("mousedown",to),window.removeEventListener("mousemove",no),window.removeEventListener("mouseup",ro),e.removeEventListener("touchstart",ao),e.removeEventListener("touchmove",io),e.removeEventListener("touchend",so),e.removeEventListener("keydown",lo)}return{state:p,destroy:Fo}}function zo(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function To(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function So(e,o,t){if(t.showModeToggle){let r=document.createElement("div");r.className="box-picker-mode-toggle";let l=m=>{let b=document.createElement("button");return b.textContent=m.toUpperCase(),b.addEventListener("click",()=>o.switchMode(m)),r.appendChild(b),b},a=l("oklch"),c=l("rgb"),s=l("hsb"),n=()=>{let m=o.mode();c.classList.toggle("active",m==="rgb"),s.classList.toggle("active",m==="hsb"),a.classList.toggle("active",m==="oklch")};n();let u=o.switchMode;o._markActive=n,e.appendChild(r)}if(t.showInputs){let r=document.createElement("input");r.className="box-picker-hex",r.type="text",r.spellcheck=!1,r.addEventListener("change",()=>{let b=r.value;/^#?[0-9a-f]{6}$/i.test(b)?o.onHexInput(b):o.onHexInput("")}),r.addEventListener("click",()=>{zo(o.getRgbForCopy()?"#"+et(o.getRgbForCopy()):"#ffffff"),To(r)});let l=document.createElement("div");l.className="box-picker-channels";let a=[],c=[],s=["R","G","B"];for(let b=0;b<3;b++){let M=document.createElement("div");M.className="box-picker-channel";let k=document.createElement("label");k.textContent=s[b];let w=document.createElement("input");w.type="text",w.inputMode="numeric",M.appendChild(k),M.appendChild(w),l.appendChild(M),a.push(w),c.push(k),w.addEventListener("change",()=>{let p=parseFloat(w.value);isNaN(p)||o.onChannelInput(b,p,255)}),w.addEventListener("click",()=>{let p=o.getRgbForCopy();zo(`${p.r}, ${p.g}, ${p.b}`),To(w)})}let n=document.createElement("div");n.className="box-picker-hexrow";let u=document.createElement("div");u.className="box-picker-hexwrap";let m=document.createElement("label");m.textContent="Hex",u.appendChild(m),u.appendChild(r),n.appendChild(l),n.appendChild(u),e.appendChild(n),e._inputs={hexInput:r,inputs:a,labels:c}}if(t.showCorners){let r=document.createElement("button");r.className="box-corner-btn box-corner-left",r.title="Random color",r.setAttribute("aria-label","Random color"),r.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',r.addEventListener("click",()=>{let a=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256),s=Math.floor(Math.random()*256);o.onRandom({r:a,g:c,b:s})}),e.appendChild(r);let l=document.createElement("button");l.className="box-corner-btn box-corner-right",l.title="Reset",l.setAttribute("aria-label","Reset"),l.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',l.addEventListener("click",()=>o.onReset()),e.appendChild(l)}}function et(e){let o=t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Lo=`.box-picker {\r
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
`;var tt=Po,Do=!1;function nt(){if(Do||typeof document>"u")return;Do=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Lo,document.head.appendChild(e)}function Po(e,o={}){let t=o.size??300,r=o.controls??!0,l=o.showInputs??!1,a=o.showModeToggle??!1,c=o.showCorners??!1,s={mode:()=>n,switchMode:i=>ne(i),onHexInput:i=>{let f=Ge(i);f?(b=de($?{r:255-f.r,g:255-f.g,b:255-f.b}:f,n),m={x:Math.max(m.x,b.x),y:Math.max(m.y,b.y),z:Math.max(m.z,b.z)},ee(),_(),L()):_()},onChannelInput:(i,f,v)=>{let E=Math.max(0,Math.min(v,f)),D=["x","y","z"],G=E/v;if($){let Me={...b,[D[i]]:G},oe=ie(Me,n);b=de({r:255-oe.r,g:255-oe.g,b:255-oe.b},n)}else b={...b,[D[i]]:G};G>m[D[i]]&&(m={...m,[D[i]]:G}),ee(),_(),L()},getRgbForCopy:()=>ie(b,n),onRandom:i=>ve(i),onReset:()=>ve({r:0,g:0,b:0})},n=o.mode??"rgb",u=o.initialColor?de(o.initialColor,n):{x:.7,y:.4,z:.85},m={x:1,y:1,z:1},b={...u},M=0,k=()=>o.alpha!==void 0,w=Math.max(0,Math.min(1,o.alpha??1));function p(i){let f=Math.max(0,Math.min(1,i));f!==w&&(w=f,ee(),_(),L())}function g(i){let f=ae(),v=fe(f);v.s=Math.max(0,Math.min(100,i*100));let E=Be(v);ve($?{r:255-E.r,g:255-E.g,b:255-E.b}:E)}let h=new Set;nt();let y=document.createElement("div");y.className="box-picker";let V=document.createElement("canvas");V.style.cursor="grab",y.appendChild(V);let C=ko(V,t),T={...ke},A=!0,B=document.createElement("button");B.className="box-axis-toggle-btn active",B.title="Toggle All Guides",B.setAttribute("aria-label","Toggle All Guides"),B.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 21V3"/><path d="M3 21l7-7"/><path d="M19 17l2 4-4-2"/><path d="M7 5l-4-2 2 4"/></svg>',B.addEventListener("click",i=>{i.stopPropagation(),A=!A,T={vertexX:A,vertexY:A,vertexZ:A,centerX:A,centerY:A,centerZ:A,yawArc:A,pitchArc:A},B.classList.toggle("active",A),L()}),y.appendChild(B);let P=null,q=document.createElement("div");q.className="box-picker-controls",P=document.createElement("div"),P.className="box-picker-swatch",q.appendChild(P),y.appendChild(q),(l||a||c)&&So(q,s,{showInputs:l,showModeToggle:a,showCorners:c}),e.appendChild(y);let K=Eo(V,()=>m,i=>{m=i},()=>b,(i,f)=>{b=i,M=f,ee(),_()},()=>M,()=>C.scale,()=>C.center,L,k,p,()=>w,()=>Z(b,C.scale,C.center),g,()=>fe(ae()).s/100),$=!1;V.addEventListener("dblclick",()=>{$=!$,Ze($),ee(),_(),L()});function ne(i){if(i===n)return;let f=ie(b,n),v={...b},E={...m};n=i;let D=de(f,n),G={x:1,y:1,z:1};b=D,m=G,W(v,D,E,G,300),_()}let Y=null;function W(i,f,v,E,D){Y!==null&&cancelAnimationFrame(Y);let G=performance.now();function Me(oe){let Re=oe-G,Ve=Math.min(1,Re/D),N=1-Math.pow(1-Ve,3);b={x:i.x+(f.x-i.x)*N,y:i.y+(f.y-i.y)*N,z:i.z+(f.z-i.z)*N},m={x:v.x+(E.x-v.x)*N,y:v.y+(E.y-v.y)*N,z:v.z+(E.z-v.z)*N},ge(),ee(),Ve<1?Y=requestAnimationFrame(Me):Y=null}Y=requestAnimationFrame(Me)}let ue=!1;function L(){ue||(ue=!0,requestAnimationFrame(()=>{ue=!1,ge()}))}function ge(){Ao(C,m,b,M,n,K.state,T,{active:K.state.alphaMode,alpha:w,rgb:ae()})}function re(i,f,v){return Math.round(i+(f-i)*v)}function xe(i,f){let v=f>0?255:0,E=Math.abs(f);return Ae({r:re(i.r,v,E),g:re(i.g,v,E),b:re(i.b,v,E)})}function le(i,f){let v=Ge(f)||{r:128,g:128,b:128},E=xe(v,.35),D=xe(v,0),G=xe(v,-.35);i.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${E}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${D}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${G}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,i.style.backgroundColor="transparent"}function pe(i){try{navigator.clipboard.writeText(i).catch(()=>{})}catch{}}function Io(i){i&&(i.style.borderColor="#4ade80",i.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{i.style.borderColor="",i.style.boxShadow=""},500))}function ae(){let i=ie(b,n);return $?{r:255-i.r,g:255-i.g,b:255-i.b}:i}function _(){if(!r)return;let i=ae(),f=Ae(i);P&&le(P,f);let v=y.querySelector(".box-picker-hex");v&&(v.value=f),ye(),y._updateModeButtons&&y._updateModeButtons()}function ye(){if(!r)return;let i=bo[n],f=$?de(ae(),n):b,v=go(f,n),E=y.querySelectorAll(".box-picker-channel input"),D=y.querySelectorAll(".box-picker-channel label");for(let G=0;G<E.length;G++)D[G].textContent=i[G],D[G].style.color="",D[G].style.textShadow="none",E[G].value=String(v[G])}function ee(){let i=ae(),f={rgb:i,hsb:fe(i),oklch:ze(i),hex:Ae(i),alpha:w};for(let v of h)v(f)}function oo(){let i=ie(b,n);return{rgb:i,hsb:fe(i),oklch:ze(i),hex:Ae(i)}}_(),ge();let ve=i=>{b=de(i,n),m={x:Math.max(m.x,b.x),y:Math.max(m.y,b.y),z:Math.max(m.z,b.z)};let f=Z(b,C.scale,C.center);M=-1;for(let v=J.length-1;v>=0;v--)if(he(v,f,m,C.scale,C.center)){M=v;break}ee(),_(),L()};return{getColor:oo,getMode:()=>n,setColor:ve,setAlpha:p,getAlpha:()=>w,setMode(i){ne(i)},getRotation:()=>Ue(),setRotation:(i,f)=>{$e(i,f),L()},getAxisRotation:()=>Ye(),setAxisRotation:(i,f,v)=>{Ne(i,f,v),L()},getGuides:()=>({...T}),setGuides:i=>{T={...T,...i},L()},toggleAllGuides:i=>{let f=i!==void 0?i:!A;A=f,T={vertexX:f,vertexY:f,vertexZ:f,centerX:f,centerY:f,centerZ:f,yawArc:f,pitchArc:f},B.classList.toggle("active",f),L()},setZoom:i=>{We(i),L()},getZoom:()=>je(),setDimensions:(i,f,v)=>{Ke(i,f,v),L()},getDimensions:()=>Qe(),getEdgeStyle:()=>qe(),setEdgeStyle:i=>{Je(i),L()},on(i,f){h.add(f)},off(i,f){h.delete(f)},destroy(){K.destroy(),Y!==null&&cancelAnimationFrame(Y),e.removeChild(y)}}}return Zo(rt);})();
