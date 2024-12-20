var dt=o=>{throw TypeError(o)};var rt=(o,s,t)=>s.has(o)||dt("Cannot "+t);var e=(o,s,t)=>(rt(o,s,"read from private field"),t?t.call(o):s.get(o)),l=(o,s,t)=>s.has(o)?dt("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(o):s.set(o,t),d=(o,s,t,r)=>(rt(o,s,"write to private field"),r?r.call(o,t):s.set(o,t),t),a=(o,s,t)=>(rt(o,s,"access private method"),t);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const Kt=(o=8)=>{const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=s.length;let r="";const n=new Uint32Array(Math.ceil(o/4));window.crypto.getRandomValues(n);for(let i=0;i<o;i++){const c=n[Math.floor(i/4)]>>>i%4*8&255;r+=s[c%t]}return r};var W,A,q,V,h,m,ht,ot,gt,ut,mt,ft;class w{constructor(s={}){l(this,m);l(this,W,!0);l(this,A);l(this,q);l(this,V);l(this,h);d(this,h,new Proxy({afterRemove:this.getOrDefault(s.afterRemove,()=>{}),background:this.getOrDefault(s.background,"rgba(0, 0, 0, 0.2)"),zIndex:this.getOrDefault(s.zIndex,"2000"),interval:this.getOrDefault(s.interval,0),delayRemove:this.getOrDefault(s.delayRemove,0),tipText:this.getOrDefault(s.tipText,""),tipTextClass:this.getOrDefault(s.tipTextClass,""),gaussianBlur:this.getOrDefault(s.gaussianBlur,!1)},{set:(t,r,n)=>(n!=null&&(t[r]=n,["background","zIndex"].includes(r)&&this.container.style.setProperty(this.convertToCssVariableName(r),n),r==="gaussianBlur"&&n?typeof n=="boolean"?this.container.style.setProperty("--backdrop-filter","5px"):typeof n=="string"&&this.container.style.setProperty("--backdrop-filter",n):this.container.style.setProperty("--backdrop-filter","0px"),e(this,W)&&(r==="tipText"?this.textContainer.innerHTML=n:r==="tipTextClass"&&(this.textContainer.setAttribute("class","wj-loading-text-container"),this.textContainer.classList.add(n)))),!0)})),this.id=`wj-loading-${Kt()}`,this.rendered=!1,this.element=a(this,m,ft).call(this,s.element),this.immediate=s.immediate,this.container=document.createElement("div"),this.animationContainer=document.createElement("div"),this.textContainer=document.createElement("div")}getOrDefault(s,t){return s!==void 0&&s!=null?s:t}convertToCssVariableName(s){return"--"+s.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}setSupportText(s){d(this,W,s)}setOption(s){s&&Object.assign(e(this,h),s)}addElement(s){this.animationContainer.appendChild(s)}finish(){a(this,m,gt).call(this),a(this,m,mt).call(this),this.immediate&&this.loading(e(this,h).interval)}loading(s){if(this.rendered)return;["relative","absolute","fixed"].includes(window.getComputedStyle(this.element).position)||this.element.classList.add("wj-loading-relative"),this.element.classList.add("wj-loading-lock"),this.element.appendChild(this.container),a(this,m,ut).call(this),this.rendered=!0;let t;s==null?t=e(this,h).interval||0:t=s,t>0&&setTimeout(()=>{this.remove().then(()=>{})},t),this.afterRendered&&this.afterRendered()}remove(s){return new Promise((t,r)=>{if(!this.rendered){t();return}const n=()=>{e(this,V)&&e(this,V).disconnect(),this.container&&this.container.classList.add("wj-loading-smooth-remove"),setTimeout(()=>{try{this.container&&(this.container.remove(),this.container.classList.remove("wj-loading-smooth-remove")),this.element.classList.contains("wj-loading-relative")&&this.element.classList.remove("wj-loading-relative"),this.element.classList.remove("wj-loading-lock"),this.rendered=!1,e(this,h).afterRemove&&e(this,h).afterRemove(),t()}catch(c){r(c)}},200)};let i;s==null?i=e(this,h).delayRemove||0:i=s,i>0?setTimeout(()=>{n()},i):n()})}get[Symbol.toStringTag](){return"Loading"}}W=new WeakMap,A=new WeakMap,q=new WeakMap,V=new WeakMap,h=new WeakMap,m=new WeakSet,ht=function(s,t){this.container.style.setProperty("--background",e(this,h).background),this.container.style.setProperty("--z-index",e(this,h).zIndex),a(this,m,ot).call(this,s,t)},ot=function(s,t){this.container.style.setProperty("--left",this.element.scrollLeft+"px"),this.container.style.setProperty("--top",this.element.scrollTop+"px"),this.container.style.setProperty("--width",s+"px"),this.container.style.setProperty("--height",t+"px"),e(this,h).gaussianBlur?typeof e(this,h).gaussianBlur=="boolean"?this.container.style.setProperty("--backdrop-filter","5px"):this.container.style.setProperty("--backdrop-filter",e(this,h).gaussianBlur):this.container.style.setProperty("--backdrop-filter","0px")},gt=function(){const s=this.element.getBoundingClientRect(),t=this.element===document.body?window.innerWidth:s.width,r=this.element===document.body?window.innerHeight:s.height;d(this,q,t),d(this,A,r),a(this,m,ht).call(this,t,r)},ut=function(){d(this,V,new ResizeObserver(()=>{const s=this.element.getBoundingClientRect(),t=this.element===document.body?window.innerWidth:s.width,r=this.element===document.body?window.innerHeight:s.height;(e(this,A)!==r||e(this,q)!==t)&&(d(this,q,t),d(this,A,r),a(this,m,ot).call(this,t,r),this.handleElementChange&&this.handleElementChange())})),e(this,V).observe(this.element)},mt=function(){this.container.classList.add("wj-loading-container"),this.animationContainer.classList.add("wj-loading-animation-container"),this.container.append(this.animationContainer),e(this,W)&&(e(this,h).tipText&&(this.textContainer.innerHTML=e(this,h).tipText),e(this,h).tipTextClass&&this.textContainer.classList.add("wj-loading-text-container",e(this,h).tipTextClass),this.container.append(this.textContainer))},ft=function(s){if(s)if(typeof s=="string"){const t=document.querySelector(s);if(!t)throw new Error(`未找到当前节点：${s}`);return t}else return s;else return document.body};var T,M,Z,yt,pt;class Ut extends w{constructor(t={}){super(t);l(this,Z);l(this,T);l(this,M);d(this,M,new Proxy({color:this.getOrDefault(t.color,"#333"),size:this.getOrDefault(t.size,"20px")},{set:(r,n,i)=>(r[n]=i,["color","size"].includes(n)&&e(this,T).style.setProperty(this.convertToCssVariableName(n),i),!0)})),d(this,T,a(this,Z,pt).call(this)),a(this,Z,yt).call(this),this.addElement(e(this,T)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,M),t))}get[Symbol.toStringTag](){return"BounceLoading"}}T=new WeakMap,M=new WeakMap,Z=new WeakSet,yt=function(){e(this,T).style.setProperty("--color",e(this,M).color),e(this,T).style.setProperty("--size",e(this,M).size)},pt=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-bounce"),t.innerHTML='<div class="wj-loading-animation-bounce1"></div><div class="wj-loading-animation-bounce2"></div><div class="wj-loading-animation-bounce3"></div>',t};var f,j,G,bt,wt;class Zt extends w{constructor(t={}){super(t);l(this,G);l(this,f);l(this,j);d(this,j,new Proxy({color:t.color&&t.color.length>=3?t.color:["#FF5722","#FF9800","#FFC107"],size:this.getOrDefault(t.size,"100px")},{set:(r,n,i)=>(i!=null&&(r[n]=i,n==="color"?i&&i>=3&&(e(this,f).style.setProperty("--color-0",i[0]),e(this,f).style.setProperty("--color-1",i[1]),e(this,f).style.setProperty("--color-2",i[2])):["size"].includes(n)&&e(this,f).style.setProperty(this.convertToCssVariableName(n),i)),!0)})),d(this,f,a(this,G,wt).call(this)),a(this,G,bt).call(this),this.addElement(e(this,f)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,j),t))}get[Symbol.toStringTag](){return"TripleSpinnerLoading"}}f=new WeakMap,j=new WeakMap,G=new WeakSet,bt=function(){e(this,f).style.setProperty("--color-0",e(this,j).color[0]),e(this,f).style.setProperty("--color-1",e(this,j).color[1]),e(this,f).style.setProperty("--color-2",e(this,j).color[2]),e(this,f).style.setProperty("--size",e(this,j).size)},wt=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-triple-spinner"),t};var y,P,Q,vt,Lt;class Gt extends w{constructor(t={}){super(t);l(this,Q);l(this,y);l(this,P);d(this,P,new Proxy({color:t.color&&t.color.length>=3?t.color:["#F15E41","#BAD375","#26A9E0"],size:this.getOrDefault(t.size,"100px")},{set:(r,n,i)=>(i!=null&&(r[n]=i,["color","size"].includes(n)&&(n==="color"?i&&i.length>=3&&(e(this,y).style.setProperty("--color-0",i[0]),e(this,y).style.setProperty("--color-1",i[1]),e(this,y).style.setProperty("--color-2",i[2])):e(this,y).style.setProperty(this.convertToCssVariableName(n),i))),!0)})),d(this,y,a(this,Q,Lt).call(this)),a(this,Q,vt).call(this),this.addElement(e(this,y)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,P),t))}get[Symbol.toStringTag](){return"CmSpinnerLoading"}}y=new WeakMap,P=new WeakMap,Q=new WeakSet,vt=function(){e(this,y).style.setProperty("--color-0",e(this,P).color[0]),e(this,y).style.setProperty("--color-1",e(this,P).color[1]),e(this,y).style.setProperty("--color-2",e(this,P).color[2]),e(this,y).style.setProperty("--size",e(this,P).size)},Lt=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-cm-spinner"),t};var F,k,X,xt,Ot;class Qt extends w{constructor(t={}){super(t);l(this,X);l(this,F);l(this,k);d(this,k,new Proxy({color:this.getOrDefault(t.color,"#F44336")},{set:(r,n,i)=>(i!=null&&(r[n]=i,["color"].includes(n)&&e(this,F).style.setProperty(this.convertToCssVariableName(n),i)),!0)})),d(this,F,a(this,X,Ot).call(this)),a(this,X,xt).call(this),this.addElement(e(this,F)),this.setSupportText(!1),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,k),t))}get[Symbol.toStringTag](){return"MeshLoaderLoading"}}F=new WeakMap,k=new WeakMap,X=new WeakSet,xt=function(){e(this,F).style.setProperty("--color",e(this,k).color)},Ot=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-mesh-loader"),t.innerHTML=`
          <div class="wj-loading-animation-mesh-loader-set-one">
            <div class="wj-loading-animation-mesh-loader-circle"></div>
            <div class="wj-loading-animation-mesh-loader-circle"></div>
          </div>
          <div class="wj-loading-animation-mesh-loader-set-two">
            <div class="wj-loading-animation-mesh-loader-circle"></div>
            <div class="wj-loading-animation-mesh-loader-circle"></div>
          </div>
    `,t};var N,J,Y,jt,Pt;class Xt extends w{constructor(t={}){super(t);l(this,Y);l(this,N);l(this,J);d(this,J,new Proxy({color:this.getOrDefault(t.color,"#F44336")},{set:(r,n,i)=>(i!=null&&(r[n]=i,["color"].includes(n)&&e(this,N).style.setProperty(this.convertToCssVariableName(n),i)),!0)})),d(this,N,a(this,Y,Pt).call(this)),a(this,Y,jt).call(this),this.addElement(e(this,N)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,J),t))}get[Symbol.toStringTag](){return"CircleLoaderLoading"}}N=new WeakMap,J=new WeakMap,Y=new WeakSet,jt=function(){e(this,N).style.setProperty("--color",e(this,J).color)},Pt=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-circle-loader"),t.innerHTML="<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>",t};var z,H,_,Ct,Et;class Yt extends w{constructor(t={}){super(t);l(this,_);l(this,z);l(this,H);d(this,H,new Proxy({color:this.getOrDefault(t.color,"#333"),size:this.getOrDefault(t.size,"20px")},{set:(r,n,i)=>(i!=null&&["color","size"].includes(n)&&e(this,z).style.setProperty(this.convertToCssVariableName(n),i),!0)})),d(this,z,a(this,_,Et).call(this)),a(this,_,Ct).call(this),this.addElement(e(this,z)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,H),t))}get[Symbol.toStringTag](){return"CubesLoading"}}z=new WeakMap,H=new WeakMap,_=new WeakSet,Ct=function(){e(this,z).style.setProperty("--color",e(this,H).color),e(this,z).style.setProperty("--size",e(this,H).size)},Et=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-cubes"),t.innerHTML=`
      <div class="wj-loading-animation-cubes-sk-cube wj-loading-animation-cubes-sk-cube1"></div>
      <div class="wj-loading-animation-cubes-sk-cube wj-loading-animation-cubes-sk-cube2"></div>
      <div class="wj-loading-animation-cubes-sk-cube wj-loading-animation-cubes-sk-cube3"></div>
      <div class="wj-loading-animation-cubes-sk-cube wj-loading-animation-cubes-sk-cube4"></div>
      <div class="wj-loading-animation-cubes-sk-cube wj-loading-animation-cubes-sk-cube5"></div>
      <div class="wj-loading-animation-cubes-sk-cube wj-loading-animation-cubes-sk-cube6"></div>
      <div class="wj-loading-animation-cubes-sk-cube wj-loading-animation-cubes-sk-cube7"></div>
      <div class="wj-loading-animation-cubes-sk-cube wj-loading-animation-cubes-sk-cube8"></div>
      <div class="wj-loading-animation-cubes-sk-cube wj-loading-animation-cubes-sk-cube9"></div>
    `,t};var x,p,$,D,Tt,zt,St;class _t extends w{constructor(t={}){super(t);l(this,D);l(this,x);l(this,p);l(this,$,.48);d(this,p,new Proxy({color:this.getOrDefault(t.color,"#333"),size:this.getOrDefault(t.size,"16px"),text:this.getOrDefault(t.text,"Loading...")},{set:(r,n,i)=>(i!=null&&(r[n]=i,["color","size"].includes(n)?e(this,x).style.setProperty(this.convertToCssVariableName(n),i):n==="text"&&(e(this,x).style.setProperty("--animation-duration",`${e(this,$)+.05*(e(this,p).text.length-1)}s`),a(this,D,St).call(this))),!0)})),d(this,x,a(this,D,zt).call(this)),a(this,D,Tt).call(this),this.addElement(e(this,x)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,p),t))}get[Symbol.toStringTag](){return"TextLoading"}}x=new WeakMap,p=new WeakMap,$=new WeakMap,D=new WeakSet,Tt=function(){e(this,x).style.setProperty("--color",e(this,p).color),e(this,x).style.setProperty("--size",e(this,p).size),e(this,x).style.setProperty("--animation-duration",`${e(this,$)+.05*(e(this,p).text.length-1)}s`)},zt=function(){const t=document.createElement("div");t.classList.add("wj-loading-animation-text");for(let r=0;r<e(this,p).text.length;r++)t.innerHTML+=`<div style="animation-delay: ${e(this,$)+.05*r}s">${e(this,p).text.charAt(r)}</div>`;return t},St=function(){let t="";for(let r=0;r<e(this,p).text.length;r++)t+=`<div style="animation-delay: ${e(this,$)+.05*r}s">${e(this,p).text.charAt(r)}</div>`;e(this,x).innerHTML=t};var C,I,tt,Dt,Vt;class te extends w{constructor(t={}){super(t);l(this,tt);l(this,C);l(this,I);d(this,I,new Proxy({color:t.color&&t.color.length>=2?t.color:["#000","#000"]},{set:(r,n,i)=>(i!=null&&(r[n]=i,["color"].includes(n)&&n==="color"&&i&&i.length>=2&&(e(this,C).style.setProperty("--color-0",i[0]),e(this,C).style.setProperty("--color-1",i[1]))),!0)})),d(this,C,a(this,tt,Vt).call(this)),a(this,tt,Dt).call(this),this.addElement(e(this,C)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,I),t))}}C=new WeakMap,I=new WeakMap,tt=new WeakSet,Dt=function(){e(this,C).style.setProperty("--color-0",e(this,I).color[0]),e(this,C).style.setProperty("--color-1",e(this,I).color[1])},Vt=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-dot-jump"),t.innerHTML="<div></div><div></div><div></div><div></div>",t};var E,S,et,Mt,Ft;class ee extends w{constructor(t={}){super(t);l(this,et);l(this,E);l(this,S);d(this,S,new Proxy({color:this.getOrDefault(t.color,"#fff"),shadowColor:this.getOrDefault(t.shadowColor,"#000"),shadowOpacity:this.getOrDefault(t.shadowOpacity,"0.1")},{set:(r,n,i)=>(i!=null&&(r[n]=i,["color","shadowColor","shadowOpacity"].includes(n)&&e(this,E).style.setProperty(this.convertToCssVariableName(n),i)),!0)})),d(this,E,a(this,et,Ft).call(this)),a(this,et,Mt).call(this),this.addElement(e(this,E)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,S),t))}get[Symbol.toStringTag](){return"JellyLoading"}}E=new WeakMap,S=new WeakMap,et=new WeakSet,Mt=function(){e(this,E).style.setProperty("--color",e(this,S).color),e(this,E).style.setProperty("--shadow-color",e(this,S).shadowColor),e(this,E).style.setProperty("--shadow-opacity",e(this,S).shadowOpacity)},Ft=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-jelly"),t.innerHTML=`
      <div class="wj-loading-animation-jelly-box"></div>
      <div class="wj-loading-animation-jelly-shadow"></div>
    `,t};var R,K,it,Nt,Ht;class ie extends w{constructor(t={}){super(t);l(this,it);l(this,R);l(this,K);d(this,K,new Proxy({color:this.getOrDefault(t.color,"#000")},{set:(r,n,i)=>(i!=null&&(r[n]=i,["color"].includes(n)&&e(this,R).style.setProperty(this.convertToCssVariableName(n),i)),!0)})),d(this,R,a(this,it,Ht).call(this)),a(this,it,Nt).call(this),this.addElement(e(this,R)),this.setSupportText(!1),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,K),t))}get[Symbol.toStringTag](){return"WaveLoading"}}R=new WeakMap,K=new WeakMap,it=new WeakSet,Nt=function(){e(this,R).style.setProperty("--color",e(this,K).color)},Ht=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-wave"),t};var B,U,st,$t,It;class se extends w{constructor(t={}){super(t);l(this,st);l(this,B);l(this,U);d(this,U,new Proxy({color:this.getOrDefault(t.color,"#000")},{set:(r,n,i)=>(i!=null&&(r[n]=i,["color"].includes(n)&&e(this,B).style.setProperty(this.convertToCssVariableName(n),i)),!0)})),d(this,B,a(this,st,It).call(this)),a(this,st,$t).call(this),this.addElement(e(this,B)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,U),t))}get[Symbol.toStringTag](){return"DotExpandLoading"}}B=new WeakMap,U=new WeakMap,st=new WeakSet,$t=function(){e(this,B).style.setProperty("--color",e(this,U).color)},It=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-dot-expand"),t};var g,u,L,Rt,Bt,nt,Wt;class ne extends w{constructor(t={}){super(t);l(this,L);l(this,g);l(this,u);d(this,u,new Proxy({color:this.getOrDefault(t.color,"#76DAFF"),size:this.getOrDefault(t.size,100),borderSize:this.getOrDefault(t.borderSize,"2px"),paddingSize:this.getOrDefault(t.paddingSize,"2px"),value:a(this,L,Bt).call(this,t.value||0),fontSize:this.getOrDefault(t.fontSize,"20px"),fontColor:this.getOrDefault(t.fontColor,"#000"),fontWeight:this.getOrDefault(t.fontWeight,"normal")},{set:(r,n,i)=>{if(i!=null)if(r[n]=i,n==="value"){const c=e(this,g).querySelector(".wj-loading-animation-wave-value-text");c&&(c.innerHTML=i+"%"),e(this,g).style.setProperty("--top",a(this,L,nt).call(this,i)+"px")}else n==="size"?(e(this,g).style.setProperty("--size",i+"px"),e(this,g).style.setProperty("--top",a(this,L,nt).call(this,r.value)+"px")):["color","borderSize","paddingSize","fontSize","fontColor","fontWeight"].includes(n)&&e(this,g).style.setProperty(this.convertToCssVariableName(n),i);return!0}})),d(this,g,a(this,L,Wt).call(this)),a(this,L,Rt).call(this),this.addElement(e(this,g)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,u),t))}setValue(t){e(this,u).value=t}get[Symbol.toStringTag](){return"WaveValueLoading"}}g=new WeakMap,u=new WeakMap,L=new WeakSet,Rt=function(){e(this,g).style.setProperty("--top",a(this,L,nt).call(this,e(this,u).value)+"px"),e(this,g).style.setProperty("--size",e(this,u).size+"px"),e(this,g).style.setProperty("--color",e(this,u).color),e(this,g).style.setProperty("--border-size",e(this,u).borderSize),e(this,g).style.setProperty("--padding-size",e(this,u).paddingSize),e(this,g).style.setProperty("--font-size",e(this,u).fontSize),e(this,g).style.setProperty("--font-color",e(this,u).fontColor),e(this,g).style.setProperty("--font-weight",e(this,u).fontWeight)},Bt=function(t){return!t||t<=0?0:t>=100?100:t},nt=function(t){const c=-e(this,u).size;return!t||t<=0?0:t>=100?c:0+(t-0)/100*(c-0)},Wt=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-wave-value"),t.innerHTML=`<div class="wj-loading-animation-wave-value-wave"></div><div class="wj-loading-animation-wave-value-text">${e(this,u).value}%</div>`,t};var v,b,O,At,lt,qt,kt;class re extends w{constructor(t={}){super(t);l(this,O);l(this,v);l(this,b);let r;t.direction!=="horizontal"&&t.direction!=="vertical"?r="vertical":r=t.direction,d(this,b,new Proxy({color:this.getOrDefault(t.color,"#FFF"),fillColor:this.getOrDefault(t.fillColor,"#76DAFF"),size:this.getOrDefault(t.size,"40px"),text:this.getOrDefault(t.text,"Loading"),direction:r},{set:(n,i,c)=>(c!=null&&(n[i]=c,["color","fillColor","size","direction"].includes(i)?a(this,O,lt).call(this):i==="text"&&(e(this,v).style.setProperty("--text",`'${c}'`),e(this,v).innerHTML=c)),!0)})),d(this,v,a(this,O,kt).call(this)),a(this,O,At).call(this),this.addElement(e(this,v)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,b),t))}get[Symbol.toStringTag](){return"TextFillLoading"}}v=new WeakMap,b=new WeakMap,O=new WeakSet,At=function(){e(this,v).style.setProperty("--size",e(this,b).size),e(this,v).style.setProperty("--text",`'${e(this,b).text}'`),a(this,O,lt).call(this)},lt=function(){const t=a(this,O,qt).call(this);e(this,v).style.setProperty("--background-color",t.backgroundColor),e(this,v).style.setProperty("--fill-color",t.fillColor),e(this,v).style.setProperty("--wj-loading-animation-text-fill-direction",t.keyframes)},qt=function(){return e(this,b).direction==="horizontal"?{backgroundColor:e(this,b).color,fillColor:e(this,b).fillColor,keyframes:"wj-loading-animation-text-fill-horizontal"}:{backgroundColor:e(this,b).fillColor,fillColor:e(this,b).color,keyframes:"wj-loading-animation-text-fill-vertical"}},kt=function(){const t=document.createElement("div");return t.classList.add("wj-loading-animation-text-fill"),t.innerHTML=e(this,b).text,t};const at={CmSpinnerLoading:Gt,TripleSpinnerLoading:Zt,MeshLoaderLoading:Qt,BounceLoading:Ut,CircleLoaderLoading:Xt,CubesLoading:Yt,TextLoading:_t,DotJumpLoading:te,JellyLoading:ee,WaveLoading:ie,DotExpandLoading:se,WaveValueLoading:ne,TextFillLoading:re},Jt=Object.keys(at),oe=()=>{let o="";return Jt.forEach(s=>{o+=`
      <div class="card">
        <div class="card-header">${s}</div>
        <div class="card-body" id="${s}-loading"></div>
      </div>
    `}),o};document.querySelector("#app").innerHTML=`
  <div class="title">wj-loading</div>
  <div class="tag-container">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/wj-loading">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/wj-loading">
    <img alt="NPM License" src="https://img.shields.io/npm/l/wj-loading">
  </div>
  <div class="desc">
    <div class="bg">yarn add wj-loading</div>
    <div class="bg">npm install wj-loading</div>
    <div style="display: flex; justify-content: center; align-items: center; gap: 20px">
      <div data-url="https://github.com/nlbwqmz/wj-loading" class="url">github</div>
      <div data-url="https://github.com/nlbwqmz/wj-loading-vue" class="url">vue指令版</div>
    </div>
  </div>
  <div class="grid-container">
    ${oe()}
  </div>
`;Jt.forEach(o=>{if(o==="WaveValueLoading"){let s=0;const t=new at.WaveValueLoading({element:document.getElementById(`${o}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0,value:s});setInterval(()=>{s<100?s++:s=0,t.setValue(s)},500)}else new at[o]({element:document.getElementById(`${o}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0})});const ct=document.querySelectorAll(".url");for(let o=0;o<ct.length;o++)ct[o].addEventListener("click",s=>{var t;window.open((t=s.target)==null?void 0:t.dataset.url)});
