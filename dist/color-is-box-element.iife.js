var ColorIsBoxElement=(()=>{var Xe=Object.defineProperty;var Uo=Object.getOwnPropertyDescriptor;var Wo=Object.getOwnPropertyNames;var Ko=Object.prototype.hasOwnProperty;var jo=(e,o)=>{for(var n in o)Xe(e,n,{get:o[n],enumerable:!0})},Qo=(e,o,n,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of Wo(o))!Ko.call(e,a)&&a!==n&&Xe(e,a,{get:()=>o[a],enumerable:!(t=Uo(o,a))||t.enumerable});return e};var Jo=e=>Qo(Xe({},"__esModule",{value:!0}),e);var ht={};jo(ht,{ColorIsBoxElement:()=>Oe,DEFAULT_EDGE_CONFIG:()=>Pe,DEFAULT_GUIDES:()=>ze,createBoxColorPicker:()=>Yo,createColorPicker:()=>lo,default:()=>ft,getBoxDimensions:()=>to,getBoxRadius:()=>ro,getCameraAnglesDeg:()=>Qe,getEdgeStyle:()=>io,getRotationDeg:()=>Ke,getZoomMultiplier:()=>eo,setBoxDimensions:()=>oo,setBoxInvert:()=>Ue,setBoxRadius:()=>no,setCameraAnglesDeg:()=>Je,setEdgeStyle:()=>ao,setRotationDeg:()=>je,setZoomMultiplier:()=>qe});var Pe={showFront:!0,showBack:!0,frontWidth:1.5,backWidth:1,frontDashed:!1,backDashed:!0,frontColor:"#ffffff",backColor:"#ffffff",frontOpacity:.65,backOpacity:.25},ze={vertexX:!0,vertexY:!0,vertexZ:!0,centerX:!0,centerY:!0,centerZ:!0,angleGuides:!0,yawArc:!0,pitchArc:!0},Co={rgb:["R","G","B"],hsb:["H","S","B"],oklch:["L","C","H"]},ko={rgb:[255,255,255],hsb:[359,100,100],oklch:[100,40,359]};function ne(e){let o=e.r/255,n=e.g/255,t=e.b/255,a=Math.max(o,n,t),s=Math.min(o,n,t),l=a-s,i=0;l!==0&&(a===o?i=((n-t)/l+6)%6:a===n?i=(t-o)/l+2:i=(o-n)/l+4,i*=60);let r=a===0?0:l/a*100,d=a*100;return{h:i,s:r,b:d}}function he(e){let o=e.h,n=e.s/100,t=e.b/100,a=t*n,s=a*(1-Math.abs(o/60%2-1)),l=t-a,i,r,d;return o<60?(i=a,r=s,d=0):o<120?(i=s,r=a,d=0):o<180?(i=0,r=a,d=s):o<240?(i=0,r=s,d=a):o<300?(i=s,r=0,d=a):(i=a,r=0,d=s),{r:Math.round((i+l)*255),g:Math.round((r+l)*255),b:Math.round((d+l)*255)}}function Ze(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function $e(e){return e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055}function qo(e){let o=Ze(e.r/255),n=Ze(e.g/255),t=Ze(e.b/255),a=.4122214708*o+.5363325363*n+.0514459929*t,s=.2119034982*o+.6806995451*n+.1073969566*t,l=.0883024619*o+.2817188376*n+.6299787005*t,i=Math.cbrt(a),r=Math.cbrt(s),d=Math.cbrt(l);return{L:.2104542553*i+.793617785*r-.0040720468*d,a:1.9779984951*i-2.428592205*r+.4505937099*d,b:.0259040371*i+.7827717662*r-.808675766*d}}function et(e,o,n){let t=e+.3963377774*o+.2158037573*n,a=e-.1055613458*o-.0638541728*n,s=e-.0894841775*o-1.291485548*n,l=t*t*t,i=a*a*a,r=s*s*s,d=4.0767416621*l-3.3077115913*i+.2309699292*r,f=-1.2684380046*l+2.6097574011*i-.3413193965*r,u=-.0041960863*l-.7034186147*i+1.707614701*r;return{r:Math.round(Math.max(0,Math.min(1,$e(d)))*255),g:Math.round(Math.max(0,Math.min(1,$e(f)))*255),b:Math.round(Math.max(0,Math.min(1,$e(u)))*255)}}function Me(e){let o=qo(e),n=Math.sqrt(o.a*o.a+o.b*o.b),t=Math.atan2(o.b,o.a)*(180/Math.PI);return t<0&&(t+=360),{l:o.L,c:n,h:n<1e-4?0:t}}function Se(e){let o=e.h*(Math.PI/180),n=e.c*Math.cos(o),t=e.c*Math.sin(o);return et(e.l,n,t)}function ot(e,o,n){let t=Se({l:e,c:o,h:n});if(Ao(t))return{l:e,c:o,h:n};let a=0,s=o;for(let l=0;l<20;l++){let i=(a+s)/2;t=Se({l:e,c:i,h:n}),Ao(t)?a=i:s=i}return{l:e,c:a,h:n}}function Ao(e){return e.r>=0&&e.r<=255&&e.g>=0&&e.g<=255&&e.b>=0&&e.b<=255}function de(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return`#${o(e.r)}${o(e.g)}${o(e.b)}`}function Ce(e){let o=e.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null}var wo=.4;function ie(e,o){if(o==="rgb")return{r:Math.round(e.x*255),g:Math.round(e.y*255),b:Math.round(e.z*255)};if(o==="hsb")return he({h:e.x*359,s:e.y*100,b:e.z*100});{let n=e.x,t=e.y*wo,a=e.z*359,s=ot(n,t,a);return Se(s)}}function me(e,o){if(o==="rgb")return{x:e.r/255,y:e.g/255,z:e.b/255};if(o==="hsb"){let n=ne(e);return{x:n.h/359,y:n.s/100,z:n.b/100}}else{let n=Me(e);return{x:n.l,y:Math.min(n.c/wo,1),z:n.h/359}}}function Ro(e,o){let n=ko[o];return[Math.round(e.x*n[0]),Math.round(e.y*n[1]),Math.round(e.z*n[2])]}function Vo(e,o,n,t,a,s=!1){let l;e===0?l={x:t,y:o,z:n}:e===1?l={x:o,y:t,z:n}:l={x:o,y:n,z:t};let i=ie(l,a);return s?{r:255-i.r,g:255-i.g,b:255-i.b}:i}var To={rotXRad:20*(Math.PI/180),rotYRad:0,rotZRad:-30*(Math.PI/180),zoom:1},Eo={sizeX:1,sizeY:1,sizeZ:1,radius:0};function Ye(e,o,n){let t=(e.x-.5)*n.sizeX,a=(e.y-.5)*n.sizeY,s=(e.z-.5)*n.sizeZ,l=Math.cos(o.rotZRad),i=Math.sin(o.rotZRad),r=t*l-a*i,d=t*i+a*l,f=s,u=Math.cos(o.rotYRad),h=Math.sin(o.rotYRad),y=r*u+f*h,k=d,m=-r*h+f*u,A=Math.cos(o.rotXRad),g=Math.sin(o.rotXRad),v=y,C=m*A-k*g,w=m*g+k*A;return{x:v,y:C,z:w}}function Ie(e,o,n,t,a){let s=Ye(e,t,a);return{x:n.x+s.x*o*1.6*t.zoom,y:n.y-s.y*o*1.6*t.zoom}}var ke=["#ef4444","#22c55e","#3b82f6"];function zo(e,o,n,t,a,s){let l=g=>Ie(g,o,n,t,a),i=l({x:0,y:0,z:0});e.save();let r=1.28,d=[{p:{x:r,y:0,z:0},name:"X",color:ke[0],visible:s.vertexX},{p:{x:0,y:r,z:0},name:"Y",color:ke[1],visible:s.vertexY},{p:{x:0,y:0,z:r},name:"Z",color:ke[2],visible:s.vertexZ}];for(let g=0;g<d.length;g++){if(!d[g].visible)continue;let v=l(d[g].p),C=d[g].color;e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(v.x,v.y),e.strokeStyle=C,e.lineWidth=2,e.setLineDash([4,2]),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(v.x,v.y,3.5,0,Math.PI*2),e.fillStyle=C,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke();let w=v.x-i.x,V=v.y-i.y,R=Math.hypot(w,V)||1,_=12,B=v.x+w/R*_,ae=v.y+V/R*_;e.font='bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=C,e.fillText(d[g].name,B,ae)}(s.vertexX||s.vertexY||s.vertexZ)&&(e.beginPath(),e.arc(i.x,i.y,4,0,Math.PI*2),e.fillStyle="#000000",e.fill(),e.strokeStyle="rgba(255,255,255,0.85)",e.lineWidth=1.2,e.stroke());let f=l({x:.5,y:.5,z:.5}),u=.35,h=[{from:{x:-u,y:.5,z:.5},to:{x:1+u,y:.5,z:.5},color:ke[0],name:"Cx",visible:s.centerX},{from:{x:.5,y:-u,z:.5},to:{x:.5,y:1+u,z:.5},color:ke[1],name:"Cy",visible:s.centerY},{from:{x:.5,y:.5,z:-u},to:{x:.5,y:.5,z:1+u},color:ke[2],name:"Cz",visible:s.centerZ}],y=!1;for(let g=0;g<h.length;g++){if(!h[g].visible)continue;y=!0;let v=l(h[g].from),C=l(h[g].to);e.beginPath(),e.moveTo(v.x,v.y),e.lineTo(C.x,C.y),e.strokeStyle=h[g].color,e.lineWidth=2,e.setLineDash([]),e.stroke(),e.beginPath(),e.arc(v.x,v.y,3,0,Math.PI*2),e.arc(C.x,C.y,3,0,Math.PI*2),e.fillStyle=h[g].color,e.fill()}y&&(e.beginPath(),e.arc(f.x,f.y,3.5,0,Math.PI*2),e.fillStyle="#111827",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke());let k=s.angleGuides!==void 0?s.angleGuides:s.yawArc||s.pitchArc||!1,m=Math.round(t.rotZRad*180/Math.PI*10)/10,A=Math.round(t.rotXRad*180/Math.PI*10)/10;if(k){e.beginPath();let g=36;for(let C=0;C<=g;C++){let w=C/g*Math.PI*2,V={x:.5+Math.cos(w)*.75,y:.5+Math.sin(w)*.75,z:0},R=l(V);C===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(59, 130, 246, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.beginPath();let v=20;for(let C=0;C<=v;C++){let w=-Math.PI/2+C/v*Math.PI,V={x:.5+Math.cos(w)*.75,y:.5,z:.5+Math.sin(w)*.75},R=l(V);C===0?e.moveTo(R.x,R.y):e.lineTo(R.x,R.y)}e.strokeStyle="rgba(239, 68, 68, 0.35)",e.lineWidth=1.5,e.setLineDash([3,3]),e.stroke(),e.setLineDash([]),e.font='500 11px ui-monospace, "SF Mono", monospace',e.textAlign="left",e.textBaseline="bottom",e.fillStyle="rgba(59, 130, 246, 0.9)",e.fillText(`Yaw: ${m.toFixed(1)}\xB0`,12,n.y*2-24),e.fillStyle="rgba(239, 68, 68, 0.9)",e.fillText(`Pitch: ${A.toFixed(1)}\xB0`,12,n.y*2-10)}e.restore()}var Ne=!1;function Ue(e){Ne=e}var G={...To},q={...Eo};function De(e,o){G.rotZRad=-30*(Math.PI/180)+e,G.rotXRad=20*(Math.PI/180)+o}function We(){return{yaw:G.rotZRad- -30*(Math.PI/180),pitch:G.rotXRad-20*(Math.PI/180)}}function Do(){G.rotXRad=20*(Math.PI/180),G.rotYRad=0,G.rotZRad=-30*(Math.PI/180)}function Ke(){return{rotXDeg:Math.round(G.rotXRad*180/Math.PI*10)/10,rotYDeg:Math.round(G.rotYRad*180/Math.PI*10)/10,rotZDeg:Math.round(G.rotZRad*180/Math.PI*10)/10}}function je(e,o,n){G.rotXRad=e*Math.PI/180,G.rotYRad=o*Math.PI/180,G.rotZRad=n*Math.PI/180}function Qe(){return{yawDeg:Math.round(G.rotZRad*180/Math.PI*10)/10,pitchDeg:Math.round(G.rotXRad*180/Math.PI*10)/10}}function Je(e,o){G.rotZRad=e*Math.PI/180,G.rotXRad=o*Math.PI/180}function qe(e){G.zoom=Math.max(.1,Math.min(3,e))}function eo(){return G.zoom}function oo(e,o,n){q.sizeX=Math.max(.1,Math.min(2.5,e)),q.sizeY=Math.max(.1,Math.min(2.5,o)),q.sizeZ=Math.max(.1,Math.min(2.5,n))}function to(){return{sizeX:q.sizeX,sizeY:q.sizeY,sizeZ:q.sizeZ}}function no(e){q.radius=Math.max(0,Math.min(.25,e))}function ro(){return q.radius||0}function N(e,o,n){return Ie(e,o,n,G,q)}function Fe(e){return Ye(e,G,q)}function tt(e){let{x:o,y:n,z:t}=e;return[{x:0,y:0,z:0},{x:o,y:0,z:0},{x:0,y:n,z:0},{x:0,y:0,z:t},{x:o,y:n,z:0},{x:o,y:0,z:t},{x:0,y:n,z:t},{x:o,y:n,z:t}]}var W=[{quad:[3,5,7,6],fixedAxis:2,fixedValue:1,uAxis:0,vAxis:1,normal:{x:0,y:0,z:1}},{quad:[1,4,7,5],fixedAxis:0,fixedValue:1,uAxis:1,vAxis:2,normal:{x:1,y:0,z:0}},{quad:[2,4,7,6],fixedAxis:1,fixedValue:1,uAxis:0,vAxis:2,normal:{x:0,y:1,z:0}},{quad:[0,1,4,2],fixedAxis:2,fixedValue:0,uAxis:0,vAxis:1,normal:{x:0,y:0,z:-1}},{quad:[0,2,6,3],fixedAxis:0,fixedValue:0,uAxis:1,vAxis:2,normal:{x:-1,y:0,z:0}},{quad:[0,1,5,3],fixedAxis:1,fixedValue:0,uAxis:0,vAxis:2,normal:{x:0,y:-1,z:0}}],nt=64,Lo={alphaMode:!1,viewRotating:!1,hoveredAxisHandle:-1,draggingAxisHandle:-1,hoveredFace:-1,draggingFace:-1};function Po(e,o){let n=window.devicePixelRatio||1;e.width=o*n,e.height=o*1*n,e.style.width=`${o}px`,e.style.height=`${o*1}px`;let t=e.getContext("2d");return t.scale(n,n),{ctx:t,scale:o*.26,center:{x:o/2,y:o*.5},width:o,height:o*1}}var Ge={...Pe};function ao(e){Ge={...Ge,...e}}function io(){return{...Ge}}var So=[{edge:[0,1],faces:[3,5]},{edge:[1,4],faces:[3,1]},{edge:[4,2],faces:[3,2]},{edge:[2,0],faces:[3,4]},{edge:[3,5],faces:[0,5]},{edge:[5,7],faces:[0,1]},{edge:[7,6],faces:[0,2]},{edge:[6,3],faces:[0,4]},{edge:[0,3],faces:[4,5]},{edge:[1,5],faces:[1,5]},{edge:[4,7],faces:[1,2]},{edge:[2,6],faces:[4,2]}];function rt(e,o,n,t,a){if(!a.showFront&&!a.showBack)return;let s=[t.x,t.y,t.z],l=new Array(W.length).fill(!1);for(let i=0;i<W.length;i++){let r=W[i],d=r.fixedValue*s[r.fixedAxis],f=s[r.uAxis],u=s[r.vAxis],h={x:0,y:0,z:0},y=["x","y","z"];h[y[r.fixedAxis]]=d,h[y[r.uAxis]]=f*.5,h[y[r.vAxis]]=u*.5;let k=Fe(h),m={x:h.x+r.normal.x*.1,y:h.y+r.normal.y*.1,z:h.z+r.normal.z*.1};Fe(m).z-k.z>0&&(l[i]=!0)}if(e.save(),a.showBack){e.lineWidth=a.backWidth,a.backDashed?e.setLineDash([4,3]):e.setLineDash([]),e.strokeStyle=a.backColor,e.globalAlpha=a.backOpacity;for(let i of So){let[r,d]=i.faces;if(!(l[r]||l[d])){let[u,h]=i.edge;e.beginPath(),e.moveTo(o[u].x,o[u].y),e.lineTo(o[h].x,o[h].y),e.stroke()}}}if(a.showFront){e.lineWidth=a.frontWidth,a.frontDashed?e.setLineDash([4,3]):e.setLineDash([]),e.strokeStyle=a.frontColor,e.globalAlpha=a.frontOpacity;for(let i of So){let[r,d]=i.faces;if(l[r]||l[d]){let[u,h]=i.edge;e.beginPath(),e.moveTo(o[u].x,o[u].y),e.lineTo(o[h].x,o[h].y),e.stroke()}}}e.restore()}function Io(e,o,n,t,a,s,l=!0,i=null){let{ctx:r,scale:d,center:f,width:u,height:h}=e;r.save(),r.clearRect(0,0,u,h);let y=tt(o),k=y.map(A=>N(A,d,f));if(r.save(),r.shadowColor="rgba(0,0,0,0.35)",r.shadowBlur=8,r.shadowOffsetX=0,r.shadowOffsetY=2,at(r,k,y,o,a,s.viewRotating),r.restore(),rt(r,k,y,o,Ge),zo(r,d,f,G,q,typeof l=="boolean"?l?ze:{vertexX:!1,vertexY:!1,vertexZ:!1,centerX:!1,centerY:!1,centerZ:!1,yawArc:!1,pitchArc:!1}:l),t>=0){let A=ie(n,a),g=Ne?{r:255-A.r,g:255-A.g,b:255-A.b}:A,v=N(n,d,f);i&&i.active&&st(r,v,i.rgb,i.alpha),lt(r,v,g)}r.restore()}function at(e,o,n,t,a,s){let l=[t.x,t.y,t.z],i=[];for(let r=0;r<W.length;r++){let d=W[r],f=d.fixedValue*l[d.fixedAxis],u=l[d.uAxis],h=l[d.vAxis];if(u<.002&&h<.002)continue;let y={x:0,y:0,z:0},k=["x","y","z"];y[k[d.fixedAxis]]=f,y[k[d.uAxis]]=u*.5,y[k[d.vAxis]]=h*.5;let m=Fe(y),A={x:y.x+d.normal.x*.1,y:y.y+d.normal.y*.1,z:y.z+d.normal.z*.1};if(Fe(A).z-m.z>0){let C=d.quad.map(w=>o[w]);i.push({face:d,corners:C,fixedVal:f,uMax:u,vMax:h,depth:m.z})}}i.sort((r,d)=>r.depth-d.depth);for(let r of i)it(e,r.corners,r.face.fixedAxis,r.fixedVal,r.uMax,r.vMax,a)}function it(e,o,n,t,a,s,l){let i=nt,r=document.createElement("canvas");r.width=i,r.height=i;let d=r.getContext("2d"),f=d.createImageData(i,i),u=f.data;for(let P=0;P<i;P++)for(let X=0;X<i;X++){let O=X/(i-1)*a,se=P/(i-1)*s,Z=Vo(n,O,se,t,l,Ne),I=(P*i+X)*4;u[I]=Z.r,u[I+1]=Z.g,u[I+2]=Z.b,u[I+3]=255}d.putImageData(f,0,0);let h=o[0],y=o[1],k=o[2],m=o[3],A=y.x-h.x,g=y.y-h.y,v=m.x-h.x,C=m.y-h.y;e.save();let w=q.radius||0;if(e.beginPath(),w>.005){let P=Math.min(w,.45),X=Math.min(w,.45),O={x:h.x+A*P,y:h.y+g*P},se={x:y.x-A*P,y:y.y-g*P},Z={x:y.x+v*X,y:y.y+C*X},I={x:k.x-v*X,y:k.y-C*X},Y={x:k.x-A*P,y:k.y-g*P},le={x:m.x+A*P,y:m.y+g*P},j={x:m.x-v*X,y:m.y-C*X},ge={x:h.x+v*X,y:h.y+C*X};e.moveTo(O.x,O.y),e.lineTo(se.x,se.y),e.quadraticCurveTo(y.x,y.y,Z.x,Z.y),e.lineTo(I.x,I.y),e.quadraticCurveTo(k.x,k.y,Y.x,Y.y),e.lineTo(le.x,le.y),e.quadraticCurveTo(m.x,m.y,j.x,j.y),e.lineTo(ge.x,ge.y),e.quadraticCurveTo(h.x,h.y,O.x,O.y)}else e.moveTo(h.x,h.y),e.lineTo(y.x,y.y),e.lineTo(k.x,k.y),e.lineTo(m.x,m.y);e.closePath(),e.clip();let V=2/i,R=h.x-A*V-v*V,_=h.y-g*V-C*V,B=1+2*V,ae=1+2*V;e.transform(A*B/i,g*B/i,v*ae/i,C*ae/i,R,_),e.imageSmoothingEnabled=!0,e.drawImage(r,0,0),e.restore()}var re=30,ue=13;function st(e,o,n,t){let a=(re+ue)/2,s=5,l=Math.floor(o.x/s)*s,i=Math.floor(o.y/s)*s,r=re*2+s*2,d=Math.max(0,Math.min(1,t));e.save(),e.beginPath(),e.arc(o.x,o.y,re,0,Math.PI*2),e.arc(o.x,o.y,ue,0,Math.PI*2,!0),e.clip();for(let A=-1;A*s<=r;A++)for(let g=-1;g*s<=r;g++)e.fillStyle=(A+g)%2===0?"#ffffff":"#d9d9d9",e.fillRect(l+A*s,i+g*s,s,s);let f="rgba("+n.r+","+n.g+","+n.b+",0)",u="rgba("+n.r+","+n.g+","+n.b+",1)",h=e;if(typeof h.createConicGradient=="function"){let A=h.createConicGradient(-Math.PI/2,o.x,o.y);A.addColorStop(0,f),A.addColorStop(1,u),e.fillStyle=A,e.fillRect(l-re,i-re,r,r)}else for(let g=0;g<36;g++){let v=-Math.PI/2+g/36*Math.PI*2,C=-Math.PI/2+(g+1)/36*Math.PI*2,w=(g+.5)/36;e.beginPath(),e.moveTo(o.x+Math.cos(v)*ue,o.y+Math.sin(v)*ue),e.arc(o.x,o.y,re,v,C),e.arc(o.x,o.y,ue,C,v,!0),e.closePath(),e.fillStyle="rgba("+n.r+","+n.g+","+n.b+","+w.toFixed(3)+")",e.fill()}e.restore(),e.beginPath(),e.arc(o.x,o.y,re,0,Math.PI*2),e.arc(o.x,o.y,ue,0,Math.PI*2,!0),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(o.x,o.y-re-3,1.8,0,Math.PI*2),e.fillStyle="rgba(0,0,0,.28)",e.fill();let y=d*Math.PI*2,k=o.x+a*Math.sin(y),m=o.y-a*Math.cos(y);e.beginPath(),e.arc(k,m,5.5,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=1.2,e.stroke()}function lt(e,o,n){e.beginPath(),e.arc(o.x,o.y,8,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(o.x,o.y,6,0,Math.PI*2),e.fillStyle=`rgb(${n.r},${n.g},${n.b})`,e.fill()}function Fo(e,o,n,t){let a=[{x:o.x,y:0,z:0},{x:0,y:o.y,z:0},{x:0,y:0,z:o.z}];return N(a[e],n,t)}function so(){let e={x:0,y:0};return[N({x:1,y:0,z:0},1,e),N({x:0,y:1,z:0},1,e),N({x:0,y:0,z:1},1,e)].map(n=>{let t=Math.sqrt(n.x*n.x+n.y*n.y);return t>0?{x:n.x/t,y:n.y/t}:{x:0,y:0}})}function Ae(e,o,n,t,a){let s=W[e],l=[n.x,n.y,n.z],i=l[s.uAxis],r=l[s.vAxis];if(i<.002||r<.002)return null;let d={x:0,y:0,z:0},f=["x","y","z"];d[f[s.fixedAxis]]=s.fixedValue*l[s.fixedAxis];let u={...d};u[f[s.uAxis]]=i;let h={...d};h[f[s.vAxis]]=r;let y=N(d,t,a),k=N(u,t,a),m=N(h,t,a),A=k.x-y.x,g=k.y-y.y,v=m.x-y.x,C=m.y-y.y,w=A*C-g*v;if(Math.abs(w)<1e-6)return null;let V=o.x-y.x,R=o.y-y.y,_=(V*C-R*v)/w,B=(R*A-V*g)/w;return _<-.05||_>1.05||B<-.05||B>1.05?null:{s:Math.max(0,Math.min(1,_)),t:Math.max(0,Math.min(1,B))}}function Go(e,o,n,t,a){let s=W[e],l=[n.x,n.y,n.z],i=l[s.uAxis],r=l[s.vAxis];if(i<.002||r<.002)return null;let d={x:0,y:0,z:0},f=["x","y","z"];d[f[s.fixedAxis]]=s.fixedValue*l[s.fixedAxis];let u={...d};u[f[s.uAxis]]=i;let h={...d};h[f[s.vAxis]]=r;let y=N(d,t,a),k=N(u,t,a),m=N(h,t,a),A=k.x-y.x,g=k.y-y.y,v=m.x-y.x,C=m.y-y.y,w=A*C-g*v;if(Math.abs(w)<1e-6)return null;let V=o.x-y.x,R=o.y-y.y,_=(V*C-R*v)/w,B=(R*A-V*g)/w;return{s:Math.max(0,Math.min(1,_)),t:Math.max(0,Math.min(1,B))}}var Bo=22;function Ho(e,o,n,t,a,s,l,i,r,d,f,u,h,y,k){let m={...Lo};function A(b){let p=e.getBoundingClientRect();return{x:b.clientX-p.left,y:b.clientY-p.top}}let g=!1,v=!1,C=!1,w=!1,V=!1,R=null,_=600,B=null;function ae(){P(),B=setTimeout(X,_)}function P(){B!==null&&(clearTimeout(B),B=null)}function X(){B=null,m.alphaMode=!1,Te(),x(),V=!0,m.viewRotating=!0,R=null,r()}let O=14,se=800,Z=null;function I(){Y(),Z=setTimeout(le,se)}function Y(){Z!==null&&(clearTimeout(Z),Z=null),P()}function le(){Z=null,m.alphaMode=!0,x(),Te(),v=!1,r()}function j(b){let p=h();return Math.hypot(b.x-p.x,b.y-p.y)}function ge(b){let p=h();return(Math.atan2(b.x-p.x,-(b.y-p.y))+Math.PI*2)%(Math.PI*2)}function be(b){f(ge(b)/(Math.PI*2)),r()}function we(b){let p=j(b);return p>=ue-4&&p<=re+6}function fe(b){let p=o(),T=l(),D=i();for(let z=0;z<3;z++){let F=Fo(z,p,T,D),H=b.x-F.x,U=b.y-F.y;if(H*H+U*U<=Bo*Bo)return z}return-1}function Q(b){let p=o(),T=l(),D=i();for(let z=W.length-1;z>=0;z--){let F=Ae(z,b,p,T,D);if(F)return{faceIndex:z,...F}}return null}let ee=-1,oe={x:0,y:0},Le=0;function Re(b,p){ee=b,oe=p,Le=o()[["x","y","z"][b]],m.draggingAxisHandle=b,e.style.cursor="grabbing",r()}function c(b){if(Y(),ee<0)return;let p=b.x-oe.x,T=b.y-oe.y,z=so()[ee],F=l(),U=(p*z.x+T*z.y)/F,te=Math.max(0,Math.min(1,Le+U)),K=o(),$=["x","y","z"],ve={...K,[$[ee]]:te};n(ve);let Ee=t(),vo=s(),Mo=vo>=0?W[vo]:null,_e={...Ee};Mo&&ee===Mo.fixedAxis?_e[$[ee]]=te:_e[$[ee]]=Math.min(Ee[$[ee]],te),a(_e,s()),r()}function x(){ee=-1,m.draggingAxisHandle=-1}let M=-1,E=null,L=null,S=!1;function Ve(b,p,T,D){M=b,m.draggingFace=b,E=null,L=null,S=!1,D&&(S=!0,L={s:p,t:T}),pe(b,p,T),e.style.cursor="crosshair",r()}function xe(b,p,T){if(Y(),M<0)return;let D=o(),z=l(),F=i(),H=Ae(M,b,D,z,F),U=M;if(!H&&!T){for(let $=W.length-1;$>=0;$--)if($!==M&&(H=Ae($,b,D,z,F),H)){U=$;break}}if(!H&&T&&(H=Go(M,b,D,z,F),U=M),!H){r();return}U!==M&&(M=U,m.draggingFace=U,E=null,S=!1,L=null);let{s:te,t:K}=H;if(p&&L){if(S){let $=Math.abs(te-L.s),ve=Math.abs(K-L.t),Ee=.02;($>Ee||ve>Ee)&&(E=$>=ve?"u":"v",S=!1)}E==="u"?K=L.t:E==="v"&&(te=L.s)}else p||(E=null,S=!1,L=null);pe(U,te,K),r()}function pe(b,p,T){let D=W[b],z=o(),F=["x","y","z"],H={...t()};H[F[D.uAxis]]=p*z[F[D.uAxis]],H[F[D.vAxis]]=T*z[F[D.vAxis]],H[F[D.fixedAxis]]=D.fixedValue*z[F[D.fixedAxis]],a(H,b)}function Te(){M=-1,m.draggingFace=-1,E=null,S=!1,L=null}let ce=null,ye=!1,J=null;function fo(b){C=!0;let p=A(b);if(ce=p,ye=!1,J=null,d()&&m.alphaMode){if(j(p)<=O){m.alphaMode=!1,r();return}if(we(p)){b.preventDefault(),g=!0,be(p);return}m.alphaMode=!1,r();return}let T=Q(p);T&&(J={faceIndex:T.faceIndex,s:T.s,t:T.t}),b.preventDefault(),V=!0,R=p,m.viewRotating=!0,d()&&j(p)<=O&&I(),r()}function ho(b){let p=A(b);if(g){b.preventDefault(),be(p);return}if(V){if(b.preventDefault(),!R){R=p;return}let T=p.x-R.x,D=p.y-R.y;Math.hypot(T,D)>2&&(ye=!0,Y());let z=We();De(z.yaw+T*.012,z.pitch+D*.012),R=p,r();return}if(C&&m.alphaMode&&we(p)){b.preventDefault(),g=!0,be(p);return}e.style.cursor="grab"}function mo(b){Y(),C=!1,g=!1,v=!1,!ye&&J&&pe(J.faceIndex,J.s,J.t),V&&(V=!1,m.viewRotating=!1,R=null,r()),e.style.cursor="grab"}function go(b){if(b.touches.length!==1)return;w=!0;let p=A(b.touches[0]);if(ye=!1,J=null,d()&&m.alphaMode){if(j(p)<=O){m.alphaMode=!1,r();return}if(we(p)){b.preventDefault(),g=!0,be(p);return}m.alphaMode=!1,r();return}let T=Q(p);T&&(J={faceIndex:T.faceIndex,s:T.s,t:T.t}),b.preventDefault(),V=!0,R=p,m.viewRotating=!0,d()&&j(p)<=O&&I(),r()}function xo(b){if(b.touches.length!==1)return;let p=A(b.touches[0]);if(g)b.preventDefault(),be(p);else if(w&&m.alphaMode&&we(p))b.preventDefault(),g=!0,be(p);else if(V){if(b.preventDefault(),!R){R=p;return}let T=p.x-R.x,D=p.y-R.y;Math.hypot(T,D)>2&&(ye=!0,Y());let z=We();De(z.yaw+T*.012,z.pitch+D*.012),R=p,r()}}function po(b){Y(),w=!1,g=!1,!ye&&J&&pe(J.faceIndex,J.s,J.t),V&&(V=!1,m.viewRotating=!1,R=null,r())}function yo(b){if(b.key==="1"){De(Math.PI/4,0),r();return}if(b.key==="0"){Do(),r();return}if(b.key==="2"){De(.95,-.54),r();return}if(m.alphaMode){if(b.key==="Escape"){m.alphaMode=!1,r();return}if(b.key==="ArrowUp"||b.key==="ArrowRight"){b.preventDefault(),f(Math.min(1,u()+(b.shiftKey?.08:.02))),r();return}if(b.key==="ArrowDown"||b.key==="ArrowLeft"){b.preventDefault(),f(Math.max(0,u()-(b.shiftKey?.08:.02))),r();return}}let p=b.shiftKey?.04:.004,T=t(),D=o(),z=so(),F=0,H=0;switch(b.key){case"ArrowRight":F=1;break;case"ArrowLeft":F=-1;break;case"ArrowUp":H=-1;break;case"ArrowDown":H=1;break;default:return}b.preventDefault();let U={...T},te=["x","y","z"];for(let K=0;K<3;K++){let $=F*z[K].x+H*z[K].y;if(Math.abs($)>.3){let ve=T[te[K]]+p*Math.sign($);U[te[K]]=Math.max(0,Math.min(D[te[K]],ve))}}a(U,s()),r()}e.addEventListener("mousedown",fo),window.addEventListener("mousemove",ho),window.addEventListener("mouseup",mo),e.addEventListener("touchstart",go,{passive:!1}),e.addEventListener("touchmove",xo,{passive:!1}),e.addEventListener("touchend",po),e.addEventListener("keydown",yo),e.setAttribute("tabindex","0");function No(){Y(),e.removeEventListener("mousedown",fo),window.removeEventListener("mousemove",ho),window.removeEventListener("mouseup",mo),e.removeEventListener("touchstart",go),e.removeEventListener("touchmove",xo),e.removeEventListener("touchend",po),e.removeEventListener("keydown",yo)}return{state:m,destroy:No}}function Oo(e){try{navigator.clipboard.writeText(e).catch(()=>{})}catch{}}function _o(e){e&&(e.style.borderColor="#4ade80",e.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{e.style.borderColor="",e.style.boxShadow=""},500))}function Xo(e,o,n){if(n.showModeToggle){let t=document.createElement("div");t.className="box-picker-mode-toggle";let a=f=>{let u=document.createElement("button");return u.textContent=f.toUpperCase(),u.addEventListener("click",()=>o.switchMode(f)),t.appendChild(u),u},s=a("oklch"),l=a("rgb"),i=a("hsb"),r=()=>{let f=o.mode();l.classList.toggle("active",f==="rgb"),i.classList.toggle("active",f==="hsb"),s.classList.toggle("active",f==="oklch")};r();let d=o.switchMode;o._markActive=r,e.appendChild(t)}if(n.showInputs){let t=document.createElement("input");t.className="box-picker-hex",t.type="text",t.spellcheck=!1,t.addEventListener("change",()=>{let u=t.value;/^#?[0-9a-f]{6}$/i.test(u)?o.onHexInput(u):o.onHexInput("")}),t.addEventListener("click",()=>{Oo(o.getRgbForCopy()?"#"+ct(o.getRgbForCopy()):"#ffffff"),_o(t)});let a=document.createElement("div");a.className="box-picker-channels";let s=[],l=[],i=["R","G","B"];for(let u=0;u<3;u++){let h=document.createElement("div");h.className="box-picker-channel";let y=document.createElement("label");y.textContent=i[u];let k=document.createElement("input");k.type="text",k.inputMode="numeric",h.appendChild(y),h.appendChild(k),a.appendChild(h),s.push(k),l.push(y),k.addEventListener("change",()=>{let m=parseFloat(k.value);isNaN(m)||o.onChannelInput(u,m,255)}),k.addEventListener("click",()=>{let m=o.getRgbForCopy();Oo(`${m.r}, ${m.g}, ${m.b}`),_o(k)})}let r=document.createElement("div");r.className="box-picker-hexrow";let d=document.createElement("div");d.className="box-picker-hexwrap";let f=document.createElement("label");f.textContent="Hex",d.appendChild(f),d.appendChild(t),r.appendChild(a),r.appendChild(d),e.appendChild(r),e._inputs={hexInput:t,inputs:s,labels:l}}if(n.showCorners){let t=document.createElement("button");t.className="box-corner-btn box-corner-left",t.title="Random color",t.setAttribute("aria-label","Random color"),t.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M0 10.5 Q0 24 10.5 24 L22 24 L0 2 Z"/></svg>',t.addEventListener("click",()=>{let s=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256);o.onRandom({r:s,g:l,b:i})}),e.appendChild(t);let a=document.createElement("button");a.className="box-corner-btn box-corner-right",a.title="Reset",a.setAttribute("aria-label","Reset"),a.innerHTML='<svg viewBox="0 0 24 24" width="42" height="42"><path d="M24 10.5 Q24 24 13.5 24 L2 24 L24 2 Z"/></svg>',a.addEventListener("click",()=>o.onReset()),e.appendChild(a)}}function ct(e){let o=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,"0");return o(e.r)+o(e.g)+o(e.b)}var Zo=`.box-picker {\r
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
`;var lo=Yo,$o=!1;function ut(){if($o||typeof document>"u")return;$o=!0;let e=document.createElement("style");e.id="color-is-box-style",e.textContent=Zo,document.head.appendChild(e)}function Yo(e,o={}){let n=o.size??300,t=o.controls??!0,a=o.showInputs??!1,s=o.showModeToggle??!1,l=o.showCorners??!1,i={mode:()=>r,switchMode:c=>X(c),onHexInput:c=>{let x=Ce(c);x?(u=me(P?{r:255-x.r,g:255-x.g,b:255-x.b}:x,r),f={x:Math.max(f.x,u.x),y:Math.max(f.y,u.y),z:Math.max(f.z,u.z)},oe(),Q(),I()):Q()},onChannelInput:(c,x,M)=>{let E=Math.max(0,Math.min(M,x)),L=["x","y","z"],S=E/M;if(P){let Ve={...u,[L[c]]:S},xe=ie(Ve,r);u=me({r:255-xe.r,g:255-xe.g,b:255-xe.b},r)}else u={...u,[L[c]]:S};S>f[L[c]]&&(f={...f,[L[c]]:S}),oe(),Q(),I()},getRgbForCopy:()=>ie(u,r),onRandom:c=>Re(c),onReset:()=>Re({r:0,g:0,b:0})},r=o.mode??"rgb",d=o.initialColor?me(o.initialColor,r):{x:.7,y:.4,z:.85},f={x:1,y:1,z:1},u={...d},h=0,y=()=>o.alpha!==void 0,k=Math.max(0,Math.min(1,o.alpha??1));function m(c){let x=Math.max(0,Math.min(1,c));x!==k&&(k=x,oe(),Q(),I())}function A(c){let x=fe(),M=ne(x);M.s=Math.max(0,Math.min(100,c*100));let E=he(M);Re(P?{r:255-E.r,g:255-E.g,b:255-E.b}:E)}let g=new Set;ut();let v=document.createElement("div");v.className="box-picker";let C=document.createElement("canvas");C.style.cursor="grab",v.appendChild(C);let w=Po(C,n),V={...ze},R=!0,_=null,B=document.createElement("div");B.className="box-picker-controls",_=document.createElement("div"),_.className="box-picker-swatch",B.appendChild(_),v.appendChild(B),(a||s||l)&&Xo(B,i,{showInputs:a,showModeToggle:s,showCorners:l}),e.appendChild(v);let ae=Ho(C,()=>f,c=>{f=c},()=>u,(c,x)=>{u=c,h=x,oe(),Q()},()=>h,()=>w.scale,()=>w.center,I,y,m,()=>k,()=>N(u,w.scale,w.center),A,()=>ne(fe()).s/100),P=!1;C.addEventListener("dblclick",()=>{P=!P,Ue(P),oe(),Q(),I()});function X(c){if(c===r)return;let x=ie(u,r),M={...u},E={...f};r=c;let L=me(x,r),S={x:1,y:1,z:1};u=L,f=S,se(M,L,E,S,300),Q()}let O=null;function se(c,x,M,E,L){O!==null&&cancelAnimationFrame(O);let S=performance.now();function Ve(xe){let pe=xe-S,Te=Math.min(1,pe/L),ce=1-Math.pow(1-Te,3);u={x:c.x+(x.x-c.x)*ce,y:c.y+(x.y-c.y)*ce,z:c.z+(x.z-c.z)*ce},f={x:M.x+(E.x-M.x)*ce,y:M.y+(E.y-M.y)*ce,z:M.z+(E.z-M.z)*ce},Y(),oe(),Te<1?O=requestAnimationFrame(Ve):O=null}O=requestAnimationFrame(Ve)}let Z=!1;function I(){Z||(Z=!0,requestAnimationFrame(()=>{Z=!1,Y()}))}function Y(){Io(w,f,u,h,r,ae.state,V,{active:ae.state.alphaMode,alpha:k,rgb:fe()})}function le(c,x,M){return Math.round(c+(x-c)*M)}function j(c,x){let M=x>0?255:0,E=Math.abs(x);return de({r:le(c.r,M,E),g:le(c.g,M,E),b:le(c.b,M,E)})}function ge(c,x){let M=Ce(x)||{r:128,g:128,b:128},E=j(M,.35),L=j(M,0),S=j(M,-.35);c.innerHTML=`<svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true"><defs><filter id="sw-mssllzpn" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.32"/></filter></defs><g filter="url(#sw-mssllzpn)"><path d="M24 5 L42 14 L24 23 L6 14 Z" fill="${E}"/><path d="M6 14 L24 23 L24 45 L6 36 Z" fill="${L}"/><path d="M42 14 L24 23 L24 45 L42 36 Z" fill="${S}"/><path d="M24 23 L24 45 M6 14 L6 36 M42 14 L42 36" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/></g></svg>`,c.style.backgroundColor="transparent"}function be(c){try{navigator.clipboard.writeText(c).catch(()=>{})}catch{}}function we(c){c&&(c.style.borderColor="#4ade80",c.style.boxShadow="0 0 0 2px rgba(74,222,128,.35)",setTimeout(()=>{c.style.borderColor="",c.style.boxShadow=""},500))}function fe(){let c=ie(u,r);return P?{r:255-c.r,g:255-c.g,b:255-c.b}:c}function Q(){if(!t)return;let c=fe(),x=de(c);_&&ge(_,x);let M=v.querySelector(".box-picker-hex");M&&(M.value=x),ee(),v._updateModeButtons&&v._updateModeButtons()}function ee(){if(!t)return;let c=Co[r],x=P?me(fe(),r):u,M=Ro(x,r),E=v.querySelectorAll(".box-picker-channel input"),L=v.querySelectorAll(".box-picker-channel label");for(let S=0;S<E.length;S++)L[S].textContent=c[S],L[S].style.color="",L[S].style.textShadow="none",E[S].value=String(M[S])}function oe(){let c=fe(),x={rgb:c,hsb:ne(c),oklch:Me(c),hex:de(c),alpha:k};for(let M of g)M(x)}function Le(){let c=ie(u,r);return{rgb:c,hsb:ne(c),oklch:Me(c),hex:de(c)}}Q(),Y();let Re=c=>{u=me(c,r),f={x:Math.max(f.x,u.x),y:Math.max(f.y,u.y),z:Math.max(f.z,u.z)};let x=N(u,w.scale,w.center);h=-1;for(let M=W.length-1;M>=0;M--)if(Ae(M,x,f,w.scale,w.center)){h=M;break}oe(),Q(),I()};return{getColor:Le,getMode:()=>r,setColor:Re,setAlpha:m,getAlpha:()=>k,setMode(c){X(c)},getRotation:()=>Qe(),setRotation:(c,x)=>{Je(c,x),I()},getAxisRotation:()=>Ke(),setAxisRotation:(c,x,M)=>{je(c,x,M),I()},getGuides:()=>({...V}),setGuides:c=>{V={...V,...c},I()},toggleAllGuides:c=>{let x=c!==void 0?c:!R;R=x,V={vertexX:x,vertexY:x,vertexZ:x,centerX:x,centerY:x,centerZ:x,angleGuides:x,yawArc:x,pitchArc:x},I()},setZoom:c=>{qe(c),I()},getZoom:()=>eo(),setDimensions:(c,x,M)=>{oo(c,x,M),I()},getDimensions:()=>to(),setRadius:c=>{no(c),I()},getRadius:()=>ro(),getEdgeStyle:()=>io(),setEdgeStyle:c=>{ao(c),I()},on(c,x){g.add(x)},off(c,x){g.delete(x)},destroy(){ae.destroy(),O!==null&&cancelAnimationFrame(O),e.removeChild(v)}}}function bo(e,o){if(!e)return null;let n=e.trim();try{if(o==="hex")return{rgb:Ce(n),alpha:1};if(o==="hex-alpha"){let t=n.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i);if(!t)return null;let a=Ce(t[1]),s=t[2]?parseInt(t[2],16)/255:1;return{rgb:a,alpha:s}}if(o==="rgb"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);return t?{r:+t[1],g:+t[2],b:+t[3]}:null}if(o==="rgba"){let t=n.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s]+([\d.]+))?/);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsl"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?co(+t[1],+t[2],+t[3]):null}if(o==="hsla"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:co(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsv"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%/);return t?he({h:+t[1],s:+t[2],b:+t[3]}):null}if(o==="hsva"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%(?:[,\s]+([\d.]+))?/);return t?{rgb:he({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="oklch"||o==="oklcha"){let t=n.match(/([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s]+([\d.]+))?/);return t?{rgb:Se({l:+t[1],c:+t[2],h:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="rgba-string"){let t=n.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:{r:+t[1],g:+t[2],b:+t[3]},alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsla-string"){let t=n.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:co(+t[1],+t[2],+t[3]),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}if(o==="hsva-string"){let t=n.match(/hsva?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)/i);return t?{rgb:he({h:+t[1],s:+t[2],b:+t[3]}),alpha:t[4]!==void 0?Math.min(1,+t[4]):1}:null}}catch{}return null}function Be(e,o,n=1){if(o==="hex")return de(e);if(o==="hex-alpha")return de(e)+(n<1?Math.round(n*255).toString(16).padStart(2,"0"):"");if(o==="rgb")return`${e.r}, ${e.g}, ${e.b}`;if(o==="rgba")return`${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)}`;if(o==="hsl"){let a=uo(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%`}if(o==="hsla"){let a=uo(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+n.toFixed(3)}`}if(o==="hsv"){let a=ne(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%`}if(o==="hsva"){let a=ne(e);return`${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+n.toFixed(3)}`}if(o==="rgba-string")return`rgba(${e.r}, ${e.g}, ${e.b}, ${+n.toFixed(3)})`;if(o==="hsla-string"){let a=uo(e);return`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${+n.toFixed(3)})`}if(o==="hsva-string"){let a=ne(e);return`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.b)}%, ${+n.toFixed(3)})`}let t=Me(e);return`${t.l.toFixed(3)}, ${t.c.toFixed(3)}, ${t.h.toFixed(1)}`}function co(e,o,n){let t=o/100,a=n/100,s=(1-Math.abs(2*a-1))*t,l=s*(1-Math.abs(e/60%2-1)),i=a-s/2,r=0,d=0,f=0;return e<60?(r=s,d=l):e<120?(r=l,d=s):e<180?(d=s,f=l):e<240?(d=l,f=s):e<300?(r=l,f=s):(r=s,f=l),{r:Math.round((r+i)*255),g:Math.round((d+i)*255),b:Math.round((f+i)*255)}}function uo(e){let o=e.r/255,n=e.g/255,t=e.b/255,a=Math.max(o,n,t),s=Math.min(o,n,t),l=(a+s)/2;if(a===s)return{h:0,s:0,l:l*100};let i=a-s,r=l>.5?i/(2-a-s):i/(a+s),d=0;return a===o?d=((n-t)/i+(n<t?6:0))*60:a===n?d=((t-o)/i+2)*60:d=((o-n)/i+4)*60,{h:d,s:r*100,l:l*100}}var He=class extends HTMLElement{holder=null;picker=null;internal=!1;model;alpha=1;constructor(o){super(),this.model=o}static get observedAttributes(){return["value","mode","size"]}connectedCallback(){if(this.picker)return;this.holder=document.createElement("div"),this.appendChild(this.holder);let o=parseInt(this.getAttribute("size")||"280",10),n=this.getAttribute("mode")||"rgb",t=this.getAttribute("value"),a=t?bo(t,this.model):null;this.alpha=a?.alpha??1;let s=a?.rgb??{r:255,g:255,b:255},l=new Set(["hex-alpha","rgba","hsla","hsva","oklcha","rgba-string","hsla-string","hsva-string"]);this.picker=lo(this.holder,{initialColor:s,size:o,controls:!0,showInputs:this.getAttribute("show-inputs")==="true",showModeToggle:this.getAttribute("show-mode-toggle")==="true",showCorners:this.getAttribute("show-corners")==="true",...l.has(this.model)?{alpha:this.alpha}:{}}),this.picker.on("change",i=>{this.internal||(this.internal=!0,this.alpha=i.alpha,this.setAttribute("value",Be(i.rgb,this.model,i.alpha)),this.internal=!1,this.dispatchEvent(new CustomEvent("change",{detail:i})),this.dispatchEvent(new CustomEvent("color-changed",{detail:Be(i.rgb,this.model,i.alpha)})))}),n&&this.picker.setMode(n)}attributeChangedCallback(o,n,t){if(!(!this.picker||!t||this.internal))if(o==="value"){let a=bo(t,this.model);a&&(this.alpha=a.alpha,this.picker.setColor(a.rgb),this.picker.setAlpha(a.alpha))}else o==="mode"&&this.picker.setMode(t)}get value(){return this.getAttribute("value")||Be({r:255,g:255,b:255},this.model,1)}set value(o){this.setAttribute("value",o)}get mode(){return this.getAttribute("mode")||"rgb"}set mode(o){this.setAttribute("mode",o)}disconnectedCallback(){try{this.picker?.destroy()}catch{}if(this.picker=null,this.holder){try{this.holder.remove()}catch{}this.holder=null}}},Oe=class extends He{constructor(){super("hex")}},bt=[["color-is-box","hex"],["hex-color-is-box","hex"],["hex-alpha-color-is-box","hex-alpha"],["rgb-color-is-box","rgb"],["rgb-string-color-is-box","rgb-string"],["rgba-color-is-box","rgba"],["rgba-string-color-is-box","rgba-string"],["hsl-color-is-box","hsl"],["hsl-string-color-is-box","hsl-string"],["hsla-color-is-box","hsla"],["hsla-string-color-is-box","hsla-string"],["hsv-color-is-box","hsv"],["hsv-string-color-is-box","hsv-string"],["oklch-color-is-box","oklch"],["oklcha-color-is-box","oklcha"],["hsva-color-is-box","hsva"],["hsva-string-color-is-box","hsva-string"]];for(let[e,o]of bt)customElements.get(e)||customElements.define(e,class extends He{constructor(){super(o)}});var ft=Oe;return Jo(ht);})();
