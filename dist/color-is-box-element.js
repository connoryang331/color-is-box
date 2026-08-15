var Oe={showFront:!0,showBack:!0,frontWidth:1.5,backWidth:1,frontDashed:!1,backDashed:!0,frontColor:"#ffffff",backColor:"#ffffff",frontOpacity:.65,backOpacity:.25},De={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,angleGuides:!0,yawArc:!0,pitchArc:!0},io={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},so={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function oe(e){let o=e.r/255,n=e.g/255,t=e.b/255,a=Math.max(o,n,t),s=Math.min(o,n,t),l=a-s,i=0;l!==0&&(a===o?i=((n-t)/l+6)%6:a===n?i=(t-o)/l+2:i=(o-n)/l+4,i*=60);let r=a===0?0:l/a*100,c=a*100;return{h:i,s:r,b:c}}function be(e){let o=e.h,n=e.s/100,t=e.b/100,a=t*n,s=a*(1-Math.abs(o/60%2-1)),l=t-a,i,r,c;return o<60?(i=a,r=s,c=0):o<120?(i=s,r=a,c=0):o<180?(i=0,r=a,c=s):o<240?(i=0,r=s,c=a):o<300?(i=s,r=0,c=a):(i=a,r=0,c=s),{r:Math.round((i+l)*255),g:Math.round((r+l)*255),b:Math.round((c+l)*255)}}function _e(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Xe(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function $o(e){let o=_e(e.r/255),n=_e(e.g/255),t=_e(e.b/255),a=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,l=.0883024619*o+.2817188376*n+.6299787005*t,i=Math.cbrt(a),r=Math.cbrt(s),c=Math.cbrt(l);return{L:.2104542553*i+.793617785*r-.0040720468*c,a:1.9779984951*i-2.428592205*r+.4505937099*c,b:.0259040371*i+.7827717662*r-.808675766*c}}function Zo(e,o,n){let t=e+.3963377774*o+.2158037573*n,a=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,l=t*t*t,i=a*a*a,r=s*s*s,c=4.0767416621*l-3.3077115913*i+.2309699292*r,f=-1.2684380046*l+2.6097574011*i-.3413193965*r,u=-.0041960863*l-.7034186147*i+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,Xe(c)))*255),g:Math.round(Math.max(0,Math.min(1,Xe(f)))*255),b:Math.round(Math.max(0,Math.min(1,Xe(u)))*255)}}function ye(e){let o=$o(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Te(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return Zo(e.l,n,t)}function No(e,o,n){let t=Te({l:e,c:o,h:n});if(lo(t))return{l:e,c:o,h:n};let a=0,s=o;for(let l=0;l<20;l++){let i=(a+s)/2;t=Te({l:e,c:i,h:n}),lo(t)?a=i:s=i}return{l:e,c:a,h:n}}function lo(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function se(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function ve(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var co=.4;function re(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return be({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*co,a=e.z*359,s=No(n,t,a);return Te(s)}}function fe(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=oe(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=ye(e);return{x:n.l,y:Math.min(n.c/co,1),z:n.h/359}}}function uo(e,o){let n=so[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function bo(e,o,n,t,a,s=!1){let l;e===0?l={x:t,y:o,z:n}:e===1?l={x:o,y:t,z:n}:l={x:o,y:n,z:t};let i=re(l,a);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var fo={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},ho={sizeX:1,sizeY:1,sizeZ:1};function $e(e,o,n){let t=(e.x-.5)*n.sizeX,a=(e.y-.5)*n.sizeY,s=(e.z-.5)*n.sizeZ,l=Math.cos(o.rotZRad),i=Math.sin(o.rotZRad),r=t*l-a*i,c=t*i+a*l,f=s,u=Math.cos(o.rotYRad),h=Math.sin(o.rotYRad),M=r*u+f*h,A=c,p=-r*h+f*u,w=Math.cos(o.rotXRad),x=Math.sin(o.rotXRad),v=M,C=p*w-A*x,k=p*x+A*w;return{x:v,y:C,z:k}}function Le(e,o,n,t,a){let s=$e(e,t,a);return{x:n.x+s.x*o*1.6*t.zoom,y:n.y-s.y*o*1.6*t.zoom}}var Me=["#ef4444","#22c55e","#3b82f6"];function mo(e,o,n,t,a,s){let l=x=>Le(x,o,n,t,a),i=l({x:0,y:0,z:0});e.save();let r=1.28,c=[{p:{x:r,y:0,z:0},name:"X",color:Me[0],visible:s.vertexX},{p:{x:0,y:r,z:0},name:"Y",color:Me[1],visible:s.vertexY},{p:{x:0,y:0,z:r},name:"Z",color:Me[2],visible:s.vertexZ}];for(let x=0;x<c.length;x++){if(!c[x].visible)continue;let v=l(c[x].p),C=c[x].color;e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(v.x,v.y),e.strokeStyle=C,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(v.x,v.y,3.5,0,Math.PI*2),e.fillStyle=C,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let k=v.x-i.x,E=v.y-i.y,R=Math.hypot(k,E)||1,B=12,F=v.x+k/R*B,Q=v.y+E/R*B;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=C,e.fillText(c[x].name,F,Q)}(s.vertexX||s.vertexY||s.vertexZ)&&(e.beginPath(),e.arc(i.x,i.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let f=l({x:.5,y:.5,z:.5}),u=.35,h=[{from:{x:-u,y:.5,z:.5},to:{x:1+u,y:.5,z:.5},color:Me[0],name:"Cx",visible:s.centerX},{from:{x:.5,y:-u,z:.5},to:{x:.5,y:1+u,z:.5},color:Me[1],name:"Cy",visible:s.centerY},{from:{x:.5,y:.5,z:-u},to:{x:.5,y:.5,z:1+u},color:Me[2],name:"Cz",visible:s.centerZ}],M=!1;for(let x=0;x<h.length;x++){if(!h[x].visible)continue;M=!0;let v=l(h[x].from),C=l(h[x].to);e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(C.x,C.y),e.strokeStyle=h[x].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(v.x,v.y,3,0,Math.PI*2),e.arc(C.x,C.y,3,0,Math.PI*2),e.fillStyle=h[x].color,e.fill()}M&&(e.beginPath(),e.arc(f.x,f.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let A=s.angleGuides!==void 0?s.angleGuides:s.yawArc||s.pitchArc||!1,p=Math.round(t.rotZRad*180/Math.PI*10)/10,w=Math.round(t.rotXRad*180/Math.PI*10)/10;if(A){e.beginPath();let x=36;for(let C=0;C<=x;C++){let k=C/x*Math.PI*2,E={x:.5+Math.cos(k)*.75,y:.5+Math.sin(k)*.75,z:0},R=l(E);C===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.beginPath();let v=20;for(let C=0;C<=v;C++){let k=-Math.PI/2+C/v*Math.PI,E={x:.5+Math.cos(k)*.75,y:.5,z:.5+Math.sin(k)*.75},R=l(E);C===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${p.toFixed(1)}\xB0`,12,n.y*2-24),e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${w.toFixed(1)}\xB0`,12,n.y*2-10)}e.restore()}var Ze=!1;function xo(e){Ze=e}var I={...fo},ae={...ho};function ze(e,o){I.rotZRad=-30*(Math.PI/180)+e,I.rotXRad=20*(Math.PI/180)+o}function Ne(){return{yaw:I.rotZRad- -30*(Math.PI/180),pitch:I.rotXRad-20*(Math.PI/180)}}function po(){I.rotXRad=20*(Math.PI/180),I.rotYRad=0,I.rotZRad=-30*(Math.PI/180)}function yo(){return{rotXDeg:Math.round(I.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(I.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(I.rotZRad*180/Math.PI*10)/10}}function vo(e,o,n){I.rotXRad=e*Math.PI/180,I.rotYRad=o*Math.PI/180,I.rotZRad=n*Math.PI/180}function Mo(){return{yawDeg:Math.round(I.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(I.rotXRad*180/Math.PI*10)/10}}function Co(e,o){I.rotZRad=e*Math.PI/180,I.rotXRad=o*Math.PI/180}function ko(e){I.zoom=Math.max(.1,Math.min(3,e))}function Ao(){return I.zoom}function wo(e,o,n){ae.sizeX=Math.max(.1,Math.min(2.5,e)),ae.sizeY=Math.max(.1,Math.min(2.5,o)),ae.sizeZ=Math.max(.1,Math.min(2.5,n))}function Ro(){return{sizeX:ae.sizeX,sizeY:ae.sizeY,sizeZ:ae.sizeZ}}function X(e,o,n){return Le(e,o,n,I,ae)}function Pe(e){return $e(e,I,ae)}function Yo(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var Y=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],Uo=64,Vo={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Eo(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*1*n,e.style.width=`${o}px`,e.style.height=`${o*1}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.26,center:{x:o/2,y:o*.5},width:o,height:o*1}}var Ie={...Oe};function To(e){Ie={...Ie,...e}}function zo(){return{...Ie}}var go=[{edge:[0,1],faces:[3,5]},{edge:[1,4],faces:[3,1]},{edge:[4,2],faces:[3,2]},{edge:[2,0],faces:[3,4]},{edge:[3,5],faces:[0,5]},{edge:[5,7],faces:[0,1]},{edge:[7,6],faces:[0,2]},{edge:[6,3],faces:[0,4]},{edge:[0,3],faces:[4,5]},{edge:[1,5],faces:[1,5]},{edge:[4,7],faces:[1,2]},{edge:[2,6],faces:[4,2]}];function Wo(e,o,n,t,a){if(!a.showFront&&!a.showBack)return;let s=[t.x,t.y,t.z],l=new Array(Y.length).fill(!1);for(let i=0;i<Y.length;i++){let r=Y[i],c=r.fixedValue*s[r.fixedAxis],f=s[r.uAxis],u=s[r.vAxis],h={x:0,y:0,z:0},M=["x","y","z"];h[M[r.fixedAxis]]=c,h[M[r.uAxis]]=f*.5,h[M[r.vAxis]]=u*.5;let A=Pe(h),p={x:h.x+r.normal.x*.1,y:h.y+r.normal.y*.1,z:h.z+r.normal.z*.1};Pe(p).z-A.z<0&&(l[i]=!0)}if(e.save(),a.showBack){e.lineWidth=a.backWidth,a.backDashed?e.setLineDash([4,3]):e.setLineDash([]),e.strokeStyle=a.backColor,e.globalAlpha=a.backOpacity;for(let i of go){let[r,c]=i.faces;if(!(l[r]||l[c])){let[u,h]=i.edge;e.beginPath(),e.moveTo(o[u].x,o[u].y),e.lineTo(o[h].x,o[h].y),e.stroke()}}}if(a.showFront){e.lineWidth=a.frontWidth,a.frontDashed?e.setLineDash([4,3]):e.setLineDash([]),e.strokeStyle=a.frontColor,e.globalAlpha=a.frontOpacity;for(let i of go){let[r,c]=i.faces;if(l[r]||l[c]){let[u,h]=i.edge;e.beginPath(),e.moveTo(o[u].x,o[u].y),e.lineTo(o[h].x,o[h].y),e.stroke()}}}e.restore()}function So(e,o,n,t,a,s,l=!0,i=null){let{ctx:r,scale:c,center:f,width:u,height:h}=e;r.save(),r.clearRect(0,0,u,h);let M=Yo(o),A=M.map(w=>X(w,c,f));if(r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,Ko(r,A,M,o,a,s.viewRotating),r.restore(),Wo(r,A,M,o,Ie),mo(r,c,f,I,ae,typeof l=="boolean"?l?De:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:l),t>=0){let w=re(n,a),x=Ze?{r:255-w.r,g:255-w.g,b:255-w.b}:w,v=X(n,c,f);i&&i.active&&Qo(r,v,i.rgb,i.alpha),Jo(r,v,x)}r.restore()}function Ko(e,o,n,t,a,s){let l=[t.x,t.y,t.z],i=[];for(let r=0;r<Y.length;r++){let c=Y[r],f=c.fixedValue*l[c.fixedAxis],u=l[c.uAxis],h=l[c.vAxis];if(u<.002&&h<.002)continue;let M={x:0,y:0,z:0},A=["x","y","z"];M[A[c.fixedAxis]]=f,M[A[c.uAxis]]=u*.5,M[A[c.vAxis]]=h*.5;let p=Pe(M),w={x:M.x+c.normal.x*.1,y:M.y+c.normal.y*.1,z:M.z+c.normal.z*.1};if(Pe(w).z-p.z<0){let C=c.quad.map(k=>o[k]);i.push({face:c,corners:C,fixedVal:f,uMax:u,vMax:h,depth:p.z})}}i.sort((r,c)=>c.depth-r.depth);for(let r of i)jo(e,r.corners,r.face.fixedAxis,r.fixedVal,r.uMax,r.vMax,a)}function jo(e,o,n,t,a,s,l){let i=Uo,r=document.createElement("canvas");r.width=i,r.height=i;let c=r.getContext("2d"),f=c.createImageData(i,i),u=f.data;for(let Q=0;Q<i;Q++)for(let H=0;H<i;H++){let he=H/(i-1)*a,$=Q/(i-1)*s,ce=bo(n,he,$,t,l,Ze),Z=(Q*i+H)*4;u[Z]=ce.r,u[Z+1]=ce.g,u[Z+2]=ce.b,u[Z+3]=255}c.putImageData(f,0,0);let h=o[0],M=o[1],A=o[2],p=o[3],w=M.x-h.x,x=M.y-h.y,v=p.x-h.x,C=p.y-h.y;e.save(),e.beginPath(),e.moveTo(h.x,h.y),e.lineTo(M.x,M.y),e.lineTo(A.x,A.y),e.lineTo(p.x,p.y),e.closePath(),e.clip();let k=2/i,E=h.x-w*k-v*k,R=h.y-x*k-C*k,B=1+2*k,F=1+2*k;e.transform(w*B/i,x*B/i,v*F/i,C*F/i,E,R),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}var te=30,le=13;function Qo(e,o,n,t){let a=(te+le)/2,s=5,l=Math.floor(o.x/s)*s,i=Math.floor(o.y/s)*s,r=te*2+s*2,c=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,te,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.clip();for(let w=-1;w*s<=r;w++)for(let x=-1;x*s<=r;x++)e.fillStyle=(w+x)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+w*s,i+x*s,s,s);let f="rgba("+n.r+","+n.g+","+n.b+",0)",u="rgba("+n.r+","+n.g+","+n.b+",1)",h=e;if(typeof h.createConicGradient=="function"){let w=h.createConicGradient(-Math.PI/2,o.x,o.y);w.addColorStop(0,f),w.addColorStop(1,u),e.fillStyle=w,e.fillRect(l-te,i-te,r,r)}else for(let x=0;x<36;x++){let v=-Math.PI/2+x/36*Math.PI*2,C=-Math.PI/2+(x+1)/36*Math.PI*2,k=(x+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(v)*le,o.y+Math.sin(v)*le),e.arc(o.x,o.y,te,v,C),e.arc(o.x,o.y,le,C,v,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+k.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,te,0,Math.PI*2),e.arc(o.x,o.y,le,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-te-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let M=c*Math.PI*2,A=o.x+a*Math.sin(M),p=o.y-a*Math.cos(M);e.beginPath(),e.arc(A,p,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function Jo(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Do(e,o,n,t){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return X(a[e],n,t)}function Ye(){let e={x:0,y:0};return[X({x:1,y:0,z:0},1,e),X({x:0,y:1,z:0},1,e),X({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function Ce(e,o,n,t,a){let s=Y[e],l=[n.x,n.y,n.z],i=l[s.uAxis],r=l[s.vAxis];if(i<.002||r<.002)return null;let c={x:0,y:0,z:0},f=["x","y","z"];c[f[s.fixedAxis]]=s.fixedValue*l[s.fixedAxis];let u={...c};u[f[s.uAxis]]=i;let h={...c};h[f[s.vAxis]]=r;let M=X(c,t,a),A=X(u,t,a),p=X(h,t,a),w=A.x-M.x,x=A.y-M.y,v=p.x-M.x,C=p.y-M.y,k=w*C-x*v;if(Math.abs(k)<1e-6)return null;let E=o.x-M.x,R=o.y-M.y,B=(E*C-R*v)/k,F=(R*w-E*x)/k;return B<-.05||B>1.05||F<-.05||F>1.05?null:{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,F))}}function Lo(e,o,n,t,a){let s=Y[e],l=[n.x,n.y,n.z],i=l[s.uAxis],r=l[s.vAxis];if(i<.002||r<.002)return null;let c={x:0,y:0,z:0},f=["x","y","z"];c[f[s.fixedAxis]]=s.fixedValue*l[s.fixedAxis];let u={...c};u[f[s.uAxis]]=i;let h={...c};h[f[s.vAxis]]=r;let M=X(c,t,a),A=X(u,t,a),p=X(h,t,a),w=A.x-M.x,x=A.y-M.y,v=p.x-M.x,C=p.y-M.y,k=w*C-x*v;if(Math.abs(k)<1e-6)return null;let E=o.x-M.x,R=o.y-M.y,B=(E*C-R*v)/k,F=(R*w-E*x)/k;return{s:Math.max(0,Math.min(1,B)),t:Math.max(0,Math.min(1,F))}}var Po=22;function Io(e,o,n,t,a,s,l,i,r,c,f,u,h,M,A){let p={...Vo};function w(b){let g=e.getBoundingClientRect();return{x:b.clientX-g.left,y:b.clientY-g.top}}let x=!1,v=!1,C=!1,k=!1,E=!1,R=null,B=600,F=null;function Q(){H(),F=setTimeout(he,B)}function H(){F!==null&&(clearTimeout(F),F=null)}function he(){F=null,p.alphaMode=!1,Ve(),m(),E=!0,p.viewRotating=!0,R=null,r()}let $=14,ce=800,Z=null;function O(){W(),Z=setTimeout(ke,ce)}function W(){Z!==null&&(clearTimeout(Z),Z=null),H()}function ke(){Z=null,p.alphaMode=!0,m(),Ve(),v=!1,r()}function ne(b){let g=h();return Math.hypot(b.x-g.x,b.y-g.y)}function Be(b){let g=h();return(Math.atan2(b.x-g.x,-(b.y-g.y))+Math.PI*2)%(Math.PI*2)}function de(b){f(Be(b)/(Math.PI*2)),r()}function Ae(b){let g=ne(b);return g>=le-4&&g<=te+6}function ue(b){let g=o(),V=l(),D=i();for(let z=0;z<3;z++){let P=Do(z,g,V,D),G=b.x-P.x,N=b.y-P.y;if(G*G+N*N<=Po*Po)return z}return-1}function K(b){let g=o(),V=l(),D=i();for(let z=Y.length-1;z>=0;z--){let P=Ce(z,b,g,V,D);if(P)return{faceIndex:z,...P}}return null}let J=-1,q={x:0,y:0},Se=0;function we(b,g){J=b,q=g,Se=o()[["x","y","z"][b]],p.draggingAxisHandle=b,e.style.cursor="grabbing",r()}function d(b){if(W(),J<0)return;let g=b.x-q.x,V=b.y-q.y,z=Ye()[J],P=l(),N=(g*z.x+V*z.y)/P,ee=Math.max(0,Math.min(1,Se+N)),U=o(),_=["x","y","z"],pe={...U,[_[J]]:ee};n(pe);let Ee=t(),ro=s(),ao=ro>=0?Y[ro]:null,He={...Ee};ao&&J===ao.fixedAxis?He[_[J]]=ee:He[_[J]]=Math.min(Ee[_[J]],ee),a(He,s()),r()}function m(){J=-1,p.draggingAxisHandle=-1}let y=-1,T=null,L=null,S=!1;function Re(b,g,V,D){y=b,p.draggingFace=b,T=null,L=null,S=!1,D&&(S=!0,L={s:g,t:V}),ge(b,g,V),e.style.cursor="crosshair",r()}function me(b,g,V){if(W(),y<0)return;let D=o(),z=l(),P=i(),G=Ce(y,b,D,z,P),N=y;if(!G&&!V){for(let _=Y.length-1;_>=0;_--)if(_!==y&&(G=Ce(_,b,D,z,P),G)){N=_;break}}if(!G&&V&&(G=Lo(y,b,D,z,P),N=y),!G){r();return}N!==y&&(y=N,p.draggingFace=N,T=null,S=!1,L=null);let{s:ee,t:U}=G;if(g&&L){if(S){let _=Math.abs(ee-L.s),pe=Math.abs(U-L.t),Ee=.02;(_>Ee||pe>Ee)&&(T=_>=pe?"u":"v",S=!1)}T==="u"?U=L.t:T==="v"&&(ee=L.s)}else g||(T=null,S=!1,L=null);ge(N,ee,U),r()}function ge(b,g,V){let D=Y[b],z=o(),P=["x","y","z"],G={...t()};G[P[D.uAxis]]=g*z[P[D.uAxis]],G[P[D.vAxis]]=V*z[P[D.vAxis]],G[P[D.fixedAxis]]=D.fixedValue*z[P[D.fixedAxis]],a(G,b)}function Ve(){y=-1,p.draggingFace=-1,T=null,S=!1,L=null}let ie=null,xe=!1,j=null;function Qe(b){C=!0;let g=w(b);if(ie=g,xe=!1,j=null,c()&&p.alphaMode){if(ne(g)<=$){p.alphaMode=!1,r();return}if(Ae(g)){b.preventDefault(),x=!0,de(g);return}p.alphaMode=!1,r();return}let V=K(g);V&&(j={faceIndex:V.faceIndex,s:V.s,t:V.t}),b.preventDefault(),E=!0,R=g,p.viewRotating=!0,c()&&ne(g)<=$&&O(),r()}function Je(b){let g=w(b);if(x){b.preventDefault(),de(g);return}if(E){if(b.preventDefault(),!R){R=g;return}let V=g.x-R.x,D=g.y-R.y;Math.hypot(V,D)>2&&(xe=!0,W());let z=Ne();ze(z.yaw+V*.012,z.pitch+D*.012),R=g,r();return}if(C&&p.alphaMode&&Ae(g)){b.preventDefault(),x=!0,de(g);return}e.style.cursor="grab"}function qe(b){W(),C=!1,x=!1,v=!1,!xe&&j&&ge(j.faceIndex,j.s,j.t),E&&(E=!1,p.viewRotating=!1,R=null,r()),e.style.cursor="grab"}function eo(b){if(b.touches.length!==1)return;k=!0;let g=w(b.touches[0]);if(xe=!1,j=null,c()&&p.alphaMode){if(ne(g)<=$){p.alphaMode=!1,r();return}if(Ae(g)){b.preventDefault(),x=!0,de(g);return}p.alphaMode=!1,r();return}let V=K(g);V&&(j={faceIndex:V.faceIndex,s:V.s,t:V.t}),b.preventDefault(),E=!0,R=g,p.viewRotating=!0,c()&&ne(g)<=$&&O(),r()}function oo(b){if(b.touches.length!==1)return;let g=w(b.touches[0]);if(x)b.preventDefault(),de(g);else if(k&&p.alphaMode&&Ae(g))b.preventDefault(),x=!0,de(g);else if(E){if(b.preventDefault(),!R){R=g;return}let V=g.x-R.x,D=g.y-R.y;Math.hypot(V,D)>2&&(xe=!0,W());let z=Ne();ze(z.yaw+V*.012,z.pitch+D*.012),R=g,r()}}function to(b){W(),k=!1,x=!1,!xe&&j&&ge(j.faceIndex,j.s,j.t),E&&(E=!1,p.viewRotating=!1,R=null,r())}function no(b){if(b.key==="1"){ze(Math.PI/4,0),r();return}if(b.key==="0"){po(),r();return}if(b.key==="2"){ze(.95,-.54),r();return}if(p.alphaMode){if(b.key==="Escape"){p.alphaMode=!1,r();return}if(b.key==="ArrowUp"||b.key==="ArrowRight"){b.preventDefault(),f(Math.min(1,u()+(b.shiftKey?.08:.02))),r();return}if(b.key==="ArrowDown"||b.key==="ArrowLeft"){b.preventDefault(),f(Math.max(0,u()-(b.shiftKey?.08:.02))),r();return}}let g=b.shiftKey?.04:.004,V=t(),D=o(),z=Ye(),P=0,G=0;switch(b.key){case"ArrowRight":P=1;break;case"ArrowLeft":P=-1;break;case"ArrowUp":G=-1;break;case"ArrowDown":G=1;break;default:return}b.preventDefault();let N={...V},ee=["x","y","z"];for(let U=0;U<3;U++){let _=P*z[U].x+G*z[U].y;if(Math.abs(_)>.3){let pe=V[ee[U]]+g*Math.sign(_);N[ee[U]]=Math.max(0,Math.min(D[ee[U]],pe))}}a(N,s()),r()}e.addEventListener("mousedown",Qe),window.addEventListener("mousemove",Je),window.addEventListener("mouseup",qe),e.addEventListener("touchstart",eo,{passive:!1}),e.addEventListener("touchmove",oo,{passive:!1}),e.addEventListener("touchend",to),e.addEventListener("keydown",no),e.setAttribute("tabindex","0");function Xo(){W(),e.removeEventListener("mousedown",Qe),window.removeEventListener("mousemove",Je),window.removeEventListener("mouseup",qe),e.removeEventListener("touchstart",eo),e.removeEventListener("touchmove",oo),e.removeEventListener("touchend",to),e.removeEventListener("keydown",no)}return{state:p,destroy:Xo}}function Fo(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function Go(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Bo(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let a=f=>{let u=document.createElement("button");return u.textContent=f.toUpperCase(),u.addEventListener("click",()=>o.switchMode(f)),t.appendChild(u),u},s=a("oklch"),l=a("rgb"),i=a("hsb"),r=()=>{let f=o.mode();l.classList.toggle("active",f==="rgb"),i.classList.toggle("active",f==="hsb"),s.classList.toggle("active",f==="oklch")};r();let c=o.switchMode;o._markActive=r,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let u=t.value;/^#?[0-9a-f]{6}$/i.test(u)?o.onHexInput(u):o.onHexInput("")}),t.addEventListener("click",()=>{Fo(o.getRgbForCopy()?"#"+qo(o.getRgbForCopy()):"#ffffff"),Go(t)});let a=document.createElement("div");a.className="box-picker-channels";let s=[],l=[],i=["R","G","B"];for(let u=0;u<3;u++){let h=document.createElement("div");h.className="box-picker-channel";let M=document.createElement("label");M.textContent=i[u];let A=document.createElement("input");A.type="text",A.inputMode="numeric",h.appendChild(M),h.appendChild(A),a.appendChild(h),s.push(A),l.push(M),A.addEventListener("change",()=>{let p=parseFloat(A.value);isNaN(p)||o.onChannelInput(u,p,255)}),A.addEventListener("click",()=>{let p=o.getRgbForCopy();Fo(`${p.r}, ${p.g}, ${p.b}`),Go(A)})}let r=document.createElement("div");r.className="box-picker-hexrow";let c=document.createElement("div");c.className="box-picker-hexwrap";let f=document.createElement("label");f.textContent="Hex",c.appendChild(f),c.appendChild(t),r.appendChild(a),r.appendChild(c),e.appendChild(r),e._inputs={hexInput:t,inputs:s,labels:l}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);o.onRandom({r:s,g:l,b:i})}),e.appendChild(t);let a=document.createElement("button");a.className="box-corner-btn box-corner-right",a.title="Reset",a.setAttribute("aria-label","Reset"),a.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',a.addEventListener("click",()=>o.onReset()),e.appendChild(a)}}function qo(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Ho=`.box-picker {\r
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
`;var _o=tt,Oo=!1;function ot(){if(Oo||typeof document>"u")return;Oo=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Ho,document.head.appendChild(e)}function tt(e,o={}){let n=o.size??300,t=o.controls??!0,a=o.showInputs??!1,s=o.showModeToggle??!1,l=o.showCorners??!1,i={mode:()=>r,switchMode:d=>he(d),onHexInput:d=>{let m=ve(d);m?(u=fe(H?{r:255-m.r,g:255-m.g,b:255-m.b}:m,r),f={x:Math.max(f.x,u.x),y:Math.max(f.y,u.y),z:Math.max(f.z,u.z)},q(),K(),O()):K()},onChannelInput:(d,m,y)=>{let T=Math.max(0,Math.min(y,m)),L=["x","y","z"],S=T/y;if(H){let Re={...u,[L[d]]:S},me=re(Re,r);u=fe({r:255-me.r,g:255-me.g,b:255-me.b},r)}else u={...u,[L[d]]:S};S>f[L[d]]&&(f={...f,[L[d]]:S}),q(),K(),O()},getRgbForCopy:()=>re(u,r),onRandom:d=>we(d),onReset:()=>we({r:0,g:0,b:0})},r=o.mode??"rgb",c=o.initialColor?fe(o.initialColor,r):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},u={...c},h=0,M=()=>o.alpha!==void 0,A=Math.max(0,Math.min(1,o.alpha??1));function p(d){let m=Math.max(0,Math.min(1,d));m!==A&&(A=m,q(),K(),O())}function w(d){let m=ue(),y=oe(m);y.s=Math.max(0,Math.min(100,d*100));let T=be(y);we(H?{r:255-T.r,g:255-T.g,b:255-T.b}:T)}let x=new Set;ot();let v=document.createElement("div");v.className="box-picker";let C=document.createElement("canvas");C.style.cursor="grab",v.appendChild(C);let k=Eo(C,n),E={...De},R=!0,B=null,F=document.createElement("div");F.className="box-picker-controls",B=document.createElement("div"),B.className="box-picker-swatch",F.appendChild(B),v.appendChild(F),(a||s||l)&&Bo(F,i,{showInputs:a,showModeToggle:s,showCorners:l}),e.appendChild(v);let Q=Io(C,()=>f,d=>{f=d},()=>u,(d,m)=>{u=d,h=m,q(),K()},()=>h,()=>k.scale,()=>k.center,O,M,p,()=>A,()=>X(u,k.scale,k.center),w,()=>oe(ue()).s/100),H=!1;C.addEventListener("dblclick",()=>{H=!H,xo(H),q(),K(),O()});function he(d){if(d===r)return;let m=re(u,r),y={...u},T={...f};r=d;let L=fe(m,r),S={x:1,y:1,z:1};u=L,f=S,ce(y,L,T,S,300),K()}let $=null;function ce(d,m,y,T,L){$!==null&&cancelAnimationFrame($);let S=performance.now();function Re(me){let ge=me-S,Ve=Math.min(1,ge/L),ie=1-Math.pow(1-Ve,3);u={x:d.x+(m.x-d.x)*ie,y:d.y+(m.y-d.y)*ie,z:d.z+(m.z-d.z)*ie},f={x:y.x+(T.x-y.x)*ie,y:y.y+(T.y-y.y)*ie,z:y.z+(T.z-y.z)*ie},W(),q(),Ve<1?$=requestAnimationFrame(Re):$=null}$=requestAnimationFrame(Re)}let Z=!1;function O(){Z||(Z=!0,requestAnimationFrame(()=>{Z=!1,W()}))}function W(){So(k,f,u,h,r,Q.state,E,{active:Q.state.alphaMode,alpha:A,rgb:ue()})}function ke(d,m,y){return Math.round(d+(m-d)*y)}function ne(d,m){let y=m>0?255:0,T=Math.abs(m);return se({r:ke(d.r,y,T),g:ke(d.g,y,T),b:ke(d.b,y,T)})}function Be(d,m){let y=ve(m)||{r:128,g:128,b:128},T=ne(y,.35),L=ne(y,0),S=ne(y,-.35);d.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${T}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,d.style.backgroundColor="transparent"}function de(d){try{navigator.clipboard.writeText(d).catch(()=>{})}catch{}}function Ae(d){d&&(d.style.borderColor="#4ade80",d.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{d.style.borderColor="",d.style.boxShadow=""},500))}function ue(){let d=re(u,r);return H?{r:255-d.r,g:255-d.g,b:255-d.b}:d}function K(){if(!t)return;let d=ue(),m=se(d);B&&Be(B,m);let y=v.querySelector(".box-picker-hex");y&&(y.value=m),J(),v._updateModeButtons&&v._updateModeButtons()}function J(){if(!t)return;let d=io[r],m=H?fe(ue(),r):u,y=uo(m,r),T=v.querySelectorAll(".box-picker-channel input"),L=v.querySelectorAll(".box-picker-channel label");for(let S=0;S<T.length;S++)L[S].textContent=d[S],L[S].style.color="",L[S].style.textShadow="none",T[S].value=String(y[S])}function q(){let d=ue(),m={rgb:d,hsb:oe(d),oklch:ye(d),hex:se(d),alpha:A};for(let y of x)y(m)}function Se(){let d=re(u,r);return{rgb:d,hsb:oe(d),oklch:ye(d),hex:se(d)}}K(),W();let we=d=>{u=fe(d,r),f={x:Math.max(f.x,u.x),y:Math.max(f.y,u.y),z:Math.max(f.z,u.z)};let m=X(u,k.scale,k.center);h=-1;for(let y=Y.length-1;y>=0;y--)if(Ce(y,m,f,k.scale,k.center)){h=y;break}q(),K(),O()};return{getColor:Se,getMode:()=>r,setColor:we,setAlpha:p,getAlpha:()=>A,setMode(d){he(d)},getRotation:()=>Mo(),setRotation:(d,m)=>{Co(d,m),O()},getAxisRotation:()=>yo(),setAxisRotation:(d,m,y)=>{vo(d,m,y),O()},getGuides:()=>({...E}),setGuides:d=>{E={...E,...d},O()},toggleAllGuides:d=>{let m=d!==void 0?d:!R;R=m,E={vertexX:m,vertexY:m,vertexZ:m,centerX:m,centerY:m,centerZ:m,angleGuides:m,yawArc:m,pitchArc:m},O()},setZoom:d=>{ko(d),O()},getZoom:()=>Ao(),setDimensions:(d,m,y)=>{wo(d,m,y),O()},getDimensions:()=>Ro(),getEdgeStyle:()=>zo(),setEdgeStyle:d=>{To(d),O()},on(d,m){x.add(m)},off(d,m){x.delete(m)},destroy(){Q.destroy(),$!==null&&cancelAnimationFrame($),e.removeChild(v)}}}function Ke(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:ve(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let a=ve(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:a,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?Ue(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:Ue(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?be({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:be({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Te({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:Ue(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:be({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Fe(e,o,n=1){if(o==="hex")return se(e);if(o==="hex-alpha")return se(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let a=We(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%`}if(o==="hsla"){let a=We(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let a=oe(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%`}if(o==="hsva"){let a=oe(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let a=We(e);return`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let a=oe(e);return`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+n.toFixed(3)})`}let t=ye(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function Ue(e,o,n){let t=o/100,a=n/100,s=(1-Math.abs(2*a-1))*t,l=s*(1-Math.abs(e/60%2-1)),i=a-s/2,r=0,c=0,f=0;return e<60?(r=s,c=l):e<120?(r=l,c=s):e<180?(c=s,f=l):e<240?(c=l,f=s):e<300?(r=l,f=s):(r=s,f=l),{r:Math.round((r+i)*255),g:Math.round((c+i)*255),b:Math.round((f+i)*255)}}function We(e){let o=e.r/255,n=e.g/255,t=e.b/255,a=Math.max(o,n,t),s=Math.min(o,n,t),l=(a+s)/2;if(a===s)return{h:0,s:0,l:l*100};let i=a-s,r=l>.5?i/(2-a-s):i/(a+s),c=0;return a===o?c=((n-t)/i+(n<t?6:0))*60:a===n?c=((t-o)/i+2)*60:c=((o-n)/i+4)*60,{h:c,s:r*100,l:l*100}}var Ge=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),a=t?Ke(t,this.model):null;this.alpha=a?.alpha??1;let s=a?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=_o(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",Fe(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Fe(i.rgb,this.model,i.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let a=Ke(t,this.model);a&&(this.alpha=a.alpha,this.picker.setColor(a.rgb),this.picker.setAlpha(a.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Fe({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},je=class extends Ge{constructor(){super("hex")}},nt=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of nt)customElements.get(e)||customElements.define(e,class extends Ge{constructor(){super(o)}});var Pt=je;export{je as ColorIsBoxElement,Oe as DEFAULT_EDGE_CONFIG,De as DEFAULT_GUIDES,tt as createBoxColorPicker,_o as createColorPicker,Pt as default,Ro as getBoxDimensions,Mo as getCameraAnglesDeg,zo as getEdgeStyle,yo as getRotationDeg,Ao as getZoomMultiplier,wo as setBoxDimensions,xo as setBoxInvert,Co as setCameraAnglesDeg,To as setEdgeStyle,vo as setRotationDeg,ko as setZoomMultiplier};
