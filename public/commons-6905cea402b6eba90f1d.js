"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{6385:function(t,e,r){r.d(e,{Z:function(){return Ct}});var n,i,s,a,o,l,c,h,p=r(7294),u=r(5317),f={},g=180/Math.PI,d=Math.PI/180,m=Math.atan2,y=/([A-Z])/g,v=/(left|right|width|margin|padding|x)/i,x=/[\s,\(]\S/,w={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},b=function(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},E=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},_=function(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)},M=function(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)},O=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},P=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},k=function(t,e,r){return t.style[e]=r},C=function(t,e,r){return t.style.setProperty(e,r)},F=function(t,e,r){return t._gsap[e]=r},S=function(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r},B=function(t,e,r,n,i){var s=t._gsap;s.scaleX=s.scaleY=r,s.renderTransform(i,s)},A=function(t,e,r,n,i){var s=t._gsap;s[e]=r,s.renderTransform(i,s)},L="transform",Y=L+"Origin",T=function t(e,r){var n=this,i=this.target,s=i.style;if(e in f&&s){if(this.tfm=this.tfm||{},"transform"===e)return w.transform.split(",").forEach((function(e){return t.call(n,e,r)}));if(~(e=w[e]||e).indexOf(",")?e.split(",").forEach((function(t){return n.tfm[t]=Q(i,t)})):this.tfm[e]=i._gsap.x?i._gsap[e]:Q(i,e),this.props.indexOf(L)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Y,r,"")),e=L}(s||r)&&this.props.push(e,r,s[e])},X=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},V=function(){var t,e,r=this.props,n=this.target,i=n.style,s=n._gsap;for(t=0;t<r.length;t+=3)r[t+1]?n[r[t]]=r[t+2]:r[t+2]?i[r[t]]=r[t+2]:i.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(y,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)s[e]=this.tfm[e];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),(t=c())&&t.isStart||i[L]||(X(i),s.uncache=1)}},H=function(t,e){var r={target:t,props:[],revert:V,save:T};return t._gsap||u.p8.core.getCache(t),e&&e.split(",").forEach((function(t){return r.save(t)})),r},z=function(t,e){var r=i.createElementNS?i.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):i.createElement(t);return r.style?r:i.createElement(t)},N=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(y,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,I(r)||r,1)||""},W="O,Moz,ms,Ms,Webkit".split(","),I=function(t,e,r){var n=(e||o).style,i=5;if(t in n&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);i--&&!(W[i]+t in n););return i<0?null:(3===i?"ms":i>=0?W[i]:"")+t},j=function(){"undefined"!=typeof window&&window.document&&(n=window,i=n.document,s=i.documentElement,o=z("div")||{style:{}},z("div"),L=I(L),Y=L+"Origin",o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",h=!!I("perspective"),c=u.p8.core.reverting,a=1)},q=function t(e){var r,n=z("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,a=this.nextSibling,o=this.style.cssText;if(s.appendChild(n),n.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(l){}else this._gsapBBox&&(r=this._gsapBBox());return i&&(a?i.insertBefore(this,a):i.appendChild(this)),s.removeChild(n),this.style.cssText=o,r},D=function(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])},Z=function(t){var e;try{e=t.getBBox()}catch(r){e=q.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===q||(e=q.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+D(t,["x","cx","x1"])||0,y:+D(t,["y","cy","y1"])||0,width:0,height:0}},G=function(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Z(t))},K=function(t,e){if(e){var r=t.style;e in f&&e!==Y&&(e=L),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(y,"-$1").toLowerCase())):r.removeAttribute(e)}},R=function(t,e,r,n,i,s){var a=new u.Fo(t._pt,e,r,0,1,s?P:O);return t._pt=a,a.b=n,a.e=i,t._props.push(r),a},$={deg:1,rad:1,turn:1},U={grid:1,flex:1},J=function t(e,r,n,s){var a,l,c,h,p=parseFloat(n)||0,g=(n+"").trim().substr((p+"").length)||"px",d=o.style,m=v.test(r),y="svg"===e.tagName.toLowerCase(),x=(y?"client":"offset")+(m?"Width":"Height"),w=100,b="px"===s,E="%"===s;return s===g||!p||$[s]||$[g]?p:("px"!==g&&!b&&(p=t(e,r,n,"px")),h=e.getCTM&&G(e),!E&&"%"!==g||!f[r]&&!~r.indexOf("adius")?(d[m?"width":"height"]=w+(b?g:s),l=~r.indexOf("adius")||"em"===s&&e.appendChild&&!y?e:e.parentNode,h&&(l=(e.ownerSVGElement||{}).parentNode),l&&l!==i&&l.appendChild||(l=i.body),(c=l._gsap)&&E&&c.width&&m&&c.time===u.xr.time&&!c.uncache?(0,u.Pr)(p/c.width*w):((E||"%"===g)&&!U[N(l,"display")]&&(d.position=N(e,"position")),l===e&&(d.position="static"),l.appendChild(o),a=o[x],l.removeChild(o),d.position="absolute",m&&E&&((c=(0,u.DY)(l)).time=u.xr.time,c.width=l[x]),(0,u.Pr)(b?a*p/w:a&&p?w/a*p:0))):(a=h?e.getBBox()[m?"width":"height"]:e[x],(0,u.Pr)(E?p/a*w:p/100*a)))},Q=function(t,e,r,n){var i;return a||j(),e in w&&"transform"!==e&&~(e=w[e]).indexOf(",")&&(e=e.split(",")[0]),f[e]&&"transform"!==e?(i=ht(t,n),i="transformOrigin"!==e?i[e]:i.svg?i.origin:pt(N(t,Y))+" "+i.zOrigin+"px"):(!(i=t.style[e])||"auto"===i||n||~(i+"").indexOf("calc("))&&(i=nt[e]&&nt[e](t,e,r)||N(t,e)||(0,u.Ok)(t,e)||("opacity"===e?1:0)),r&&!~(i+"").trim().indexOf(" ")?J(t,e,i,r)+r:i},tt=function(t,e,r,n){if(!r||"none"===r){var i=I(e,t,1),s=i&&N(t,i,1);s&&s!==r?(e=i,r=s):"borderColor"===e&&(r=N(t,"borderTopColor"))}var a,o,l,c,h,p,f,g,d,m,y,v=new u.Fo(this._pt,t.style,e,0,1,u.Ks),x=0,w=0;if(v.b=r,v.e=n,r+="","auto"===(n+="")&&(t.style[e]=n,n=N(t,e)||n,t.style[e]=r),a=[r,n],(0,u.kr)(a),n=a[1],l=(r=a[0]).match(u.d4)||[],(n.match(u.d4)||[]).length){for(;o=u.d4.exec(n);)f=o[0],d=n.substring(x,o.index),h?h=(h+1)%5:"rgba("!==d.substr(-5)&&"hsla("!==d.substr(-5)||(h=1),f!==(p=l[w++]||"")&&(c=parseFloat(p)||0,y=p.substr((c+"").length),"="===f.charAt(1)&&(f=(0,u.cy)(c,f)+y),g=parseFloat(f),m=f.substr((g+"").length),x=u.d4.lastIndex-m.length,m||(m=m||u.Fc.units[e]||y,x===n.length&&(n+=m,v.e+=m)),y!==m&&(c=J(t,e,p,m)||0),v._pt={_next:v._pt,p:d||1===w?d:",",s:c,c:g-c,m:h&&h<4||"zIndex"===e?Math.round:0});v.c=x<n.length?n.substring(x,n.length):""}else v.r="display"===e&&"none"===n?P:O;return u.bQ.test(n)&&(v.e=0),this._pt=v,v},et={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rt=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,n,i,s=e.t,a=s.style,o=e.u,l=s._gsap;if("all"===o||!0===o)a.cssText="",n=1;else for(i=(o=o.split(",")).length;--i>-1;)r=o[i],f[r]&&(n=1,r="transformOrigin"===r?Y:L),K(s,r);n&&(K(s,L),l&&(l.svg&&s.removeAttribute("transform"),ht(s,1),l.uncache=1,X(a)))}},nt={clearProps:function(t,e,r,n,i){if("isFromStart"!==i.data){var s=t._pt=new u.Fo(t._pt,e,r,0,0,rt);return s.u=n,s.pr=-10,s.tween=i,t._props.push(r),1}}},it=[1,0,0,1,0,0],st={},at=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},ot=function(t){var e=N(t,L);return at(e)?it:e.substr(7).match(u.SI).map(u.Pr)},lt=function(t,e){var r,n,i,a,o=t._gsap||(0,u.DY)(t),l=t.style,c=ot(t);return o.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(c=[(i=t.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?it:c:(c!==it||t.offsetParent||t===s||o.svg||(i=l.display,l.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,n=t.nextElementSibling,s.appendChild(t)),c=ot(t),i?l.display=i:K(t,"display"),a&&(n?r.insertBefore(t,n):r?r.appendChild(t):s.removeChild(t))),e&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},ct=function(t,e,r,n,i,s){var a,o,l,c=t._gsap,h=i||lt(t,!0),p=c.xOrigin||0,u=c.yOrigin||0,f=c.xOffset||0,g=c.yOffset||0,d=h[0],m=h[1],y=h[2],v=h[3],x=h[4],w=h[5],b=e.split(" "),E=parseFloat(b[0])||0,_=parseFloat(b[1])||0;r?h!==it&&(o=d*v-m*y)&&(l=E*(-m/o)+_*(d/o)-(d*w-m*x)/o,E=E*(v/o)+_*(-y/o)+(y*w-v*x)/o,_=l):(E=(a=Z(t)).x+(~b[0].indexOf("%")?E/100*a.width:E),_=a.y+(~(b[1]||b[0]).indexOf("%")?_/100*a.height:_)),n||!1!==n&&c.smooth?(x=E-p,w=_-u,c.xOffset=f+(x*d+w*y)-x,c.yOffset=g+(x*m+w*v)-w):c.xOffset=c.yOffset=0,c.xOrigin=E,c.yOrigin=_,c.smooth=!!n,c.origin=e,c.originIsAbsolute=!!r,t.style[Y]="0px 0px",s&&(R(s,c,"xOrigin",p,E),R(s,c,"yOrigin",u,_),R(s,c,"xOffset",f,c.xOffset),R(s,c,"yOffset",g,c.yOffset)),t.setAttribute("data-svg-origin",E+" "+_)},ht=function(t,e){var r=t._gsap||new u.l1(t);if("x"in r&&!e&&!r.uncache)return r;var n,i,s,a,o,l,c,p,f,y,v,x,w,b,E,_,M,O,P,k,C,F,S,B,A,T,X,V,H,z,W,I,j=t.style,q=r.scaleX<0,D="px",Z="deg",K=getComputedStyle(t),R=N(t,Y)||"0";return n=i=s=l=c=p=f=y=v=0,a=o=1,r.svg=!(!t.getCTM||!G(t)),K.translate&&("none"===K.translate&&"none"===K.scale&&"none"===K.rotate||(j[L]=("none"!==K.translate?"translate3d("+(K.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==K.rotate?"rotate("+K.rotate+") ":"")+("none"!==K.scale?"scale("+K.scale.split(" ").join(",")+") ":"")+("none"!==K[L]?K[L]:"")),j.scale=j.rotate=j.translate="none"),b=lt(t,r.svg),r.svg&&(r.uncache?(A=t.getBBox(),R=r.xOrigin-A.x+"px "+(r.yOrigin-A.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),ct(t,B||R,!!B||r.originIsAbsolute,!1!==r.smooth,b)),x=r.xOrigin||0,w=r.yOrigin||0,b!==it&&(O=b[0],P=b[1],k=b[2],C=b[3],n=F=b[4],i=S=b[5],6===b.length?(a=Math.sqrt(O*O+P*P),o=Math.sqrt(C*C+k*k),l=O||P?m(P,O)*g:0,(f=k||C?m(k,C)*g+l:0)&&(o*=Math.abs(Math.cos(f*d))),r.svg&&(n-=x-(x*O+w*k),i-=w-(x*P+w*C))):(I=b[6],z=b[7],X=b[8],V=b[9],H=b[10],W=b[11],n=b[12],i=b[13],s=b[14],c=(E=m(I,H))*g,E&&(B=F*(_=Math.cos(-E))+X*(M=Math.sin(-E)),A=S*_+V*M,T=I*_+H*M,X=F*-M+X*_,V=S*-M+V*_,H=I*-M+H*_,W=z*-M+W*_,F=B,S=A,I=T),p=(E=m(-k,H))*g,E&&(_=Math.cos(-E),W=C*(M=Math.sin(-E))+W*_,O=B=O*_-X*M,P=A=P*_-V*M,k=T=k*_-H*M),l=(E=m(P,O))*g,E&&(B=O*(_=Math.cos(E))+P*(M=Math.sin(E)),A=F*_+S*M,P=P*_-O*M,S=S*_-F*M,O=B,F=A),c&&Math.abs(c)+Math.abs(l)>359.9&&(c=l=0,p=180-p),a=(0,u.Pr)(Math.sqrt(O*O+P*P+k*k)),o=(0,u.Pr)(Math.sqrt(S*S+I*I)),E=m(F,S),f=Math.abs(E)>2e-4?E*g:0,v=W?1/(W<0?-W:W):0),r.svg&&(B=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!at(N(t,L)),B&&t.setAttribute("transform",B))),Math.abs(f)>90&&Math.abs(f)<270&&(q?(a*=-1,f+=l<=0?180:-180,l+=l<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=n-((r.xPercent=n&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-n)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+D,r.y=i-((r.yPercent=i&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+D,r.z=s+D,r.scaleX=(0,u.Pr)(a),r.scaleY=(0,u.Pr)(o),r.rotation=(0,u.Pr)(l)+Z,r.rotationX=(0,u.Pr)(c)+Z,r.rotationY=(0,u.Pr)(p)+Z,r.skewX=f+Z,r.skewY=y+Z,r.transformPerspective=v+D,(r.zOrigin=parseFloat(R.split(" ")[2])||0)&&(j[Y]=pt(R)),r.xOffset=r.yOffset=0,r.force3D=u.Fc.force3D,r.renderTransform=r.svg?vt:h?yt:ft,r.uncache=0,r},pt=function(t){return(t=t.split(" "))[0]+" "+t[1]},ut=function(t,e,r){var n=(0,u.Wy)(e);return(0,u.Pr)(parseFloat(e)+parseFloat(J(t,"x",r+"px",n)))+n},ft=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,yt(t,e)},gt="0deg",dt="0px",mt=") ",yt=function(t,e){var r=e||this,n=r.xPercent,i=r.yPercent,s=r.x,a=r.y,o=r.z,l=r.rotation,c=r.rotationY,h=r.rotationX,p=r.skewX,u=r.skewY,f=r.scaleX,g=r.scaleY,m=r.transformPerspective,y=r.force3D,v=r.target,x=r.zOrigin,w="",b="auto"===y&&t&&1!==t||!0===y;if(x&&(h!==gt||c!==gt)){var E,_=parseFloat(c)*d,M=Math.sin(_),O=Math.cos(_);_=parseFloat(h)*d,E=Math.cos(_),s=ut(v,s,M*E*-x),a=ut(v,a,-Math.sin(_)*-x),o=ut(v,o,O*E*-x+x)}m!==dt&&(w+="perspective("+m+mt),(n||i)&&(w+="translate("+n+"%, "+i+"%) "),(b||s!==dt||a!==dt||o!==dt)&&(w+=o!==dt||b?"translate3d("+s+", "+a+", "+o+") ":"translate("+s+", "+a+mt),l!==gt&&(w+="rotate("+l+mt),c!==gt&&(w+="rotateY("+c+mt),h!==gt&&(w+="rotateX("+h+mt),p===gt&&u===gt||(w+="skew("+p+", "+u+mt),1===f&&1===g||(w+="scale("+f+", "+g+mt),v.style[L]=w||"translate(0, 0)"},vt=function(t,e){var r,n,i,s,a,o=e||this,l=o.xPercent,c=o.yPercent,h=o.x,p=o.y,f=o.rotation,g=o.skewX,m=o.skewY,y=o.scaleX,v=o.scaleY,x=o.target,w=o.xOrigin,b=o.yOrigin,E=o.xOffset,_=o.yOffset,M=o.forceCSS,O=parseFloat(h),P=parseFloat(p);f=parseFloat(f),g=parseFloat(g),(m=parseFloat(m))&&(g+=m=parseFloat(m),f+=m),f||g?(f*=d,g*=d,r=Math.cos(f)*y,n=Math.sin(f)*y,i=Math.sin(f-g)*-v,s=Math.cos(f-g)*v,g&&(m*=d,a=Math.tan(g-m),i*=a=Math.sqrt(1+a*a),s*=a,m&&(a=Math.tan(m),r*=a=Math.sqrt(1+a*a),n*=a)),r=(0,u.Pr)(r),n=(0,u.Pr)(n),i=(0,u.Pr)(i),s=(0,u.Pr)(s)):(r=y,s=v,n=i=0),(O&&!~(h+"").indexOf("px")||P&&!~(p+"").indexOf("px"))&&(O=J(x,"x",h,"px"),P=J(x,"y",p,"px")),(w||b||E||_)&&(O=(0,u.Pr)(O+w-(w*r+b*i)+E),P=(0,u.Pr)(P+b-(w*n+b*s)+_)),(l||c)&&(a=x.getBBox(),O=(0,u.Pr)(O+l/100*a.width),P=(0,u.Pr)(P+c/100*a.height)),a="matrix("+r+","+n+","+i+","+s+","+O+","+P+")",x.setAttribute("transform",a),M&&(x.style[L]=a)},xt=function(t,e,r,n,i){var s,a,o=360,l=(0,u.r9)(i),c=parseFloat(i)*(l&&~i.indexOf("rad")?g:1)-n,h=n+c+"deg";return l&&("short"===(s=i.split("_")[1])&&(c%=o)!==c%180&&(c+=c<0?o:-360),"cw"===s&&c<0?c=(c+36e9)%o-~~(c/o)*o:"ccw"===s&&c>0&&(c=(c-36e9)%o-~~(c/o)*o)),t._pt=a=new u.Fo(t._pt,e,r,n,c,E),a.e=h,a.u="deg",t._props.push(r),a},wt=function(t,e){for(var r in e)t[r]=e[r];return t},bt=function(t,e,r){var n,i,s,a,o,l,c,h=wt({},r._gsap),p=r.style;for(i in h.svg?(s=r.getAttribute("transform"),r.setAttribute("transform",""),p[L]=e,n=ht(r,1),K(r,L),r.setAttribute("transform",s)):(s=getComputedStyle(r)[L],p[L]=e,n=ht(r,1),p[L]=s),f)(s=h[i])!==(a=n[i])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(i)<0&&(o=(0,u.Wy)(s)!==(c=(0,u.Wy)(a))?J(r,i,s,c):parseFloat(s),l=parseFloat(a),t._pt=new u.Fo(t._pt,n,i,o,l-o,b),t._pt.u=c||0,t._props.push(i));wt(n,h)};(0,u.fS)("padding,margin,Width,Radius",(function(t,e){var r="Top",n="Right",i="Bottom",s="Left",a=(e<3?[r,n,i,s]:[r+s,r+n,i+n,i+s]).map((function(r){return e<2?t+r:"border"+r+t}));nt[e>1?"border"+t:t]=function(t,e,r,n,i){var s,o;if(arguments.length<4)return s=a.map((function(e){return Q(t,e,r)})),5===(o=s.join(" ")).split(s[0]).length?s[0]:o;s=(n+"").split(" "),o={},a.forEach((function(t,e){return o[t]=s[e]=s[e]||s[(e-1)/2|0]})),t.init(e,o,i)}}));var Et,_t,Mt,Ot={name:"css",register:j,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,r,n,i){var s,o,l,c,h,p,g,d,m,y,v,E,O,P,k,C,F,S,B,A,T=this._props,X=t.style,V=r.vars.startAt;for(g in a||j(),this.styles=this.styles||H(t),C=this.styles.props,this.tween=r,e)if("autoRound"!==g&&(o=e[g],!u.$i[g]||!(0,u.if)(g,e,r,n,t,i)))if(h=typeof o,p=nt[g],"function"===h&&(h=typeof(o=o.call(r,n,t,i))),"string"===h&&~o.indexOf("random(")&&(o=(0,u.UI)(o)),p)p(this,t,g,o,r)&&(k=1);else if("--"===g.substr(0,2))s=(getComputedStyle(t).getPropertyValue(g)+"").trim(),o+="",u.GN.lastIndex=0,u.GN.test(s)||(d=(0,u.Wy)(s),m=(0,u.Wy)(o)),m?d!==m&&(s=J(t,g,s,m)+m):d&&(o+=d),this.add(X,"setProperty",s,o,n,i,0,0,g),T.push(g),C.push(g,0,X[g]);else if("undefined"!==h){if(V&&g in V?(s="function"==typeof V[g]?V[g].call(r,n,t,i):V[g],(0,u.r9)(s)&&~s.indexOf("random(")&&(s=(0,u.UI)(s)),(0,u.Wy)(s+"")||(s+=u.Fc.units[g]||(0,u.Wy)(Q(t,g))||""),"="===(s+"").charAt(1)&&(s=Q(t,g))):s=Q(t,g),c=parseFloat(s),(y="string"===h&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),l=parseFloat(o),g in w&&("autoAlpha"===g&&(1===c&&"hidden"===Q(t,"visibility")&&l&&(c=0),C.push("visibility",0,X.visibility),R(this,X,"visibility",c?"inherit":"hidden",l?"inherit":"hidden",!l)),"scale"!==g&&"transform"!==g&&~(g=w[g]).indexOf(",")&&(g=g.split(",")[0])),v=g in f)if(this.styles.save(g),E||((O=t._gsap).renderTransform&&!e.parseTransform||ht(t,e.parseTransform),P=!1!==e.smoothOrigin&&O.smooth,(E=this._pt=new u.Fo(this._pt,X,L,0,1,O.renderTransform,O,0,-1)).dep=1),"scale"===g)this._pt=new u.Fo(this._pt,O,"scaleY",O.scaleY,(y?(0,u.cy)(O.scaleY,y+l):l)-O.scaleY||0,b),this._pt.u=0,T.push("scaleY",g),g+="X";else{if("transformOrigin"===g){C.push(Y,0,X[Y]),S=void 0,B=void 0,A=void 0,S=(F=o).split(" "),B=S[0],A=S[1]||"50%","top"!==B&&"bottom"!==B&&"left"!==A&&"right"!==A||(F=B,B=A,A=F),S[0]=et[B]||B,S[1]=et[A]||A,o=S.join(" "),O.svg?ct(t,o,0,P,0,this):((m=parseFloat(o.split(" ")[2])||0)!==O.zOrigin&&R(this,O,"zOrigin",O.zOrigin,m),R(this,X,g,pt(s),pt(o)));continue}if("svgOrigin"===g){ct(t,o,1,P,0,this);continue}if(g in st){xt(this,O,g,c,y?(0,u.cy)(c,y+o):o);continue}if("smoothOrigin"===g){R(this,O,"smooth",O.smooth,o);continue}if("force3D"===g){O[g]=o;continue}if("transform"===g){bt(this,o,t);continue}}else g in X||(g=I(g)||g);if(v||(l||0===l)&&(c||0===c)&&!x.test(o)&&g in X)l||(l=0),(d=(s+"").substr((c+"").length))!==(m=(0,u.Wy)(o)||(g in u.Fc.units?u.Fc.units[g]:d))&&(c=J(t,g,s,m)),this._pt=new u.Fo(this._pt,v?O:X,g,c,(y?(0,u.cy)(c,y+l):l)-c,v||"px"!==m&&"zIndex"!==g||!1===e.autoRound?b:M),this._pt.u=m||0,d!==m&&"%"!==m&&(this._pt.b=s,this._pt.r=_);else if(g in X)tt.call(this,t,g,s,y?y+o:o);else if(g in t)this.add(t,g,s||t[g],y?y+o:o,n,i);else if("parseTransform"!==g){(0,u.lC)(g,o);continue}v||(g in X?C.push(g,0,X[g]):C.push(g,1,s||t[g])),T.push(g)}k&&(0,u.JV)(this)},render:function(t,e){if(e.tween._time||!c())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:Q,aliases:w,getSetter:function(t,e,r){var n=w[e];return n&&n.indexOf(",")<0&&(e=n),e in f&&e!==Y&&(t._gsap.x||Q(t,"x"))?r&&l===r?"scale"===e?S:F:(l=r||{})&&("scale"===e?B:A):t.style&&!(0,u.m2)(t.style[e])?k:~e.indexOf("-")?C:(0,u.S5)(t,e)},core:{_removeProperty:K,_getMatrix:lt}};u.p8.utils.checkPrefix=I,u.p8.core.getStyleSaver=H,Et="x,y,z,scale,scaleX,scaleY,xPercent,yPercent",_t="rotation,rotationX,rotationY,skewX,skewY",Mt=(0,u.fS)(Et+","+_t+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",(function(t){f[t]=1})),(0,u.fS)(_t,(function(t){u.Fc.units[t]="deg",st[t]=1})),w[Mt[13]]=Et+","+_t,(0,u.fS)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",(function(t){var e=t.split(":");w[e[1]]=Mt[e[0]]})),(0,u.fS)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(t){u.Fc.units[t]="px"})),u.p8.registerPlugin(Ot);var Pt=u.p8.registerPlugin(Ot)||u.p8,kt=(Pt.core.Tween,r(1883));var Ct=()=>{const{0:t,1:e}=(0,p.useState)(!1);return(0,p.useEffect)((()=>{document.querySelector(".theme-change");const t=document.querySelector(".menu-btn"),e=Pt.utils.toArray(".header-nav__menu ul"),r=Pt.utils.toArray(".top-menu li"),n=Pt.utils.toArray(".bottom-menu div"),i=document.querySelector(".menu-btn svg"),s=document.querySelector(".menu-btn path");Pt.set(e,{opacity:0,y:75}),Pt.set(r,{opacity:0,y:75}),Pt.set(n,{opacity:0,y:75});const a=Pt.timeline();a.to(i,{attr:{viewBox:"0 0 16 4",height:"4"}}).to(s,{attr:{d:"M1.30275 3.30275C0.583262 3.30275 0 2.71949 0 2V2C0 1.28051 0.583262 0.69725 1.30275 0.69725H6.68709H9.31291H14.6972C15.4167 0.69725 16 1.28051 16 2V2C16 2.71949 15.4167 3.30275 14.6972 3.30275H9.31291H6.68709H1.30275Z"}},"<").to(e,{y:0,opacity:1,duration:.5,stagger:.25}).to(r,{y:0,opacity:1,duration:.5,stagger:.15}).to(n,{y:0,opacity:1,duration:.5,stagger:.1},"-=.5"),a.pause();let o=!1;t.addEventListener("click",(()=>{o?a.reverse():a.play(),o=!o}))}),[]),p.createElement("div",{class:"home"},p.createElement("header",{className:"header"},p.createElement("div",{className:"header-logo"},p.createElement("img",{src:"/icons/CERAMIKAlogo.png"})),p.createElement("div",{className:"desktop-links"},p.createElement(kt.Link,{href:""},"Oferta"),p.createElement(kt.Link,{href:""},"Materiały"),p.createElement(kt.Link,{href:""},"Producenci"),p.createElement(kt.Link,{href:""},"Partnerzy"),p.createElement(kt.Link,{href:""},"Kontakt"),p.createElement(kt.Link,{href:""},"SKLEP")),p.createElement("div",{className:"header-nav"},p.createElement("div",{class:"header-nav__btns"},p.createElement("button",{class:"menu-btn"},p.createElement("span",null,"Menu"),p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},p.createElement("path",{d:"M1.30275 9.28441C0.583262 9.28441 0 8.70114 0 7.98165V7.98165C0 7.26216 0.583262 6.6789 1.30275 6.6789H6.68709V1.31291C6.68709 0.587812 7.2749 0 8 0V0C8.7251 0 9.31291 0.58781 9.31291 1.31291V6.6789H14.6972C15.4167 6.6789 16 7.26216 16 7.98165V7.98165C16 8.70114 15.4167 9.28441 14.6972 9.28441H9.31291V14.6871C9.31291 15.4122 8.7251 16 8 16V16C7.2749 16 6.68709 15.4122 6.68709 14.6871V9.28441H1.30275Z",fill:"#999a9c"})))),p.createElement("nav",{class:"header-nav__menu"},p.createElement("ul",{class:"top-menu"},p.createElement("li",{class:"active"},p.createElement(kt.Link,{href:"/"},p.createElement("span",null,"Oferta"),p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9",height:"8",viewBox:"0 0 9 8",fill:"none"},p.createElement("ellipse",{cx:"4.1469",cy:"4",rx:"3.86565",ry:"4",fill:"#001431"})))),p.createElement("li",null,p.createElement(kt.Link,{href:"/"},p.createElement("span",null,"Materiały"),p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"10",viewBox:"0 0 12 10",fill:"#001431"},p.createElement("path",{d:"M7 0.999969L11 5.00003M11 5.00003L7 9.00003M11 5.00003H1",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"#001431"})))),p.createElement("li",null,p.createElement(kt.Link,{href:"/"},p.createElement("span",null,"Producenci"),p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"10",viewBox:"0 0 12 10",fill:"#001431"},p.createElement("path",{d:"M7 0.999969L11 5.00003M11 5.00003L7 9.00003M11 5.00003H1",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"#001431"})))),p.createElement("li",null,p.createElement(kt.Link,{href:"/"},p.createElement("span",null,"Partnerzy"),p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"10",viewBox:"0 0 12 10",fill:"#001431"},p.createElement("path",{d:"M7 0.999969L11 5.00003M11 5.00003L7 9.00003M11 5.00003H1",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"#001431"})))),p.createElement("li",null,p.createElement(kt.Link,{href:"/"},p.createElement("span",null,"Kontakt"),p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"10",viewBox:"0 0 12 10",fill:"#001431"},p.createElement("path",{d:"M7 0.999969L11 5.00003M11 5.00003L7 9.00003M11 5.00003H1",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"#001431"})))),p.createElement("li",null,p.createElement(kt.Link,{href:"/"},p.createElement("span",null,"SKLEP"),p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"10",viewBox:"0 0 12 10",fill:"#001431"},p.createElement("path",{d:"M7 0.999969L11 5.00003M11 5.00003L7 9.00003M11 5.00003H1",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"#001431"})))))))))}}}]);
//# sourceMappingURL=commons-6905cea402b6eba90f1d.js.map