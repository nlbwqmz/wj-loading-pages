var ct=l=>{throw TypeError(l)};var at=(l,i,t)=>i.has(l)||ct("Cannot "+t);var e=(l,i,t)=>(at(l,i,"read from private field"),t?t.call(l):i.get(l)),a=(l,i,t)=>i.has(l)?ct("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(l):i.set(l,t),d=(l,i,t,n)=>(at(l,i,"write to private field"),n?n.call(l,t):i.set(l,t),t),o=(l,i,t)=>(at(l,i,"access private method"),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ne=(l=8)=>{const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=i.length;let n="";const r=new Uint32Array(Math.ceil(l/4));window.crypto.getRandomValues(r);for(let s=0;s<l;s++){const h=r[Math.floor(s/4)]>>>s%4*8&255;n+=i[h%t]}return n};var $,Q,X,_,A,c,p,pt,lt,ot,ut,gt,yt,bt,ft;let v=(ft=class{constructor(i={}){a(this,p);a(this,$);a(this,Q,!0);a(this,X);a(this,_);a(this,A);a(this,c);a(this,ot,()=>`
      .${this.id}-relative {
        position: relative;
      }
      .${this.id}-lock {
        overflow: hidden !important;
      }
      .${this.id}-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-direction: column;
        user-select: none !important;
        z-index: var(--z-index);
        background: var(--background);
        position: absolute;
        width: var(--width);
        height: var(--height);
        left: var(--left);
        top: var(--top);
        transition: background 0.2s linear;
        backdrop-filter: blur(var(--backdrop-filter));
      }
      .${this.id}-smooth-remove {
        transition: opacity 0.2s linear;
        opacity: 0
      }
      
      .${this.id}-animation-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .${this.id}-text-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `);d(this,c,new Proxy({afterRemove:this.getOrDefault(i.afterRemove,()=>{}),background:this.getOrDefault(i.background,"rgba(0, 0, 0, 0.2)"),zIndex:this.getOrDefault(i.zIndex,"2000"),interval:this.getOrDefault(i.interval,0),delayRemove:this.getOrDefault(i.delayRemove,0),tipText:this.getOrDefault(i.tipText,""),tipTextClass:this.getOrDefault(i.tipTextClass,""),gaussianBlur:this.getOrDefault(i.gaussianBlur,!1)},{set:(t,n,r)=>(r!=null&&(t[n]=r,["background","zIndex"].includes(n)&&this.container.style.setProperty(this.convertToCssVariableName(n),r),n==="gaussianBlur"&&r?typeof r=="boolean"?this.container.style.setProperty("--backdrop-filter","5px"):typeof r=="string"&&this.container.style.setProperty("--backdrop-filter",r):this.container.style.setProperty("--backdrop-filter","0px"),e(this,Q)&&(n==="tipText"?this.textContainer.innerHTML=r:n==="tipTextClass"&&(this.textContainer.setAttribute("class",`${this.id}-text-container`),this.textContainer.classList.add(r)))),!0)})),this.id=`wj-loading-${ne()}`,this.rendered=!1,this.element=o(this,p,bt).call(this,i.element),this.immediate=i.immediate,this.style=document.createElement("style"),this.container=document.createElement("div"),this.animationContainer=document.createElement("div"),this.textContainer=document.createElement("div")}getOrDefault(i,t){return i!==void 0&&i!=null?i:t}convertToCssVariableName(i){return"--"+i.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}setSupportText(i){d(this,Q,i)}setOption(i){i&&Object.assign(e(this,c),i)}setChildrenStyle(i){e(this,$)?e(this,$).innerHTML=i.innerHTML:d(this,$,i)}addElement(i){this.animationContainer.appendChild(i)}finish(){o(this,p,ut).call(this),o(this,p,yt).call(this),this.immediate&&this.loading(e(this,c).interval)}loading(i){if(this.rendered)return;["relative","absolute","fixed"].includes(window.getComputedStyle(this.element).position)||this.element.classList.add(`${this.id}-relative`),this.element.classList.add(`${this.id}-lock`),document.getElementsByTagName("head")[0].appendChild(this.style),e(this,$)&&document.getElementsByTagName("head")[0].appendChild(e(this,$)),this.element.appendChild(this.container),o(this,p,gt).call(this),this.rendered=!0;let t;i==null?t=e(this,c).interval||0:t=i,t>0&&setTimeout(()=>{this.remove()},t),this.afterRendered&&this.afterRendered()}remove(i){if(!this.rendered)return;const t=()=>{e(this,A)&&e(this,A).disconnect(),this.container&&this.container.classList.add(`${this.id}-smooth-remove`),setTimeout(()=>{this.container&&(this.container.remove(),this.container.classList.remove(`${this.id}-smooth-remove`)),this.style&&this.style.remove(),e(this,$)&&e(this,$).remove(),this.element.classList.contains(`${this.id}-relative`)&&this.element.classList.remove(`${this.id}-relative`),this.element.classList.remove(`${this.id}-lock`),this.rendered=!1,e(this,c).afterRemove&&e(this,c).afterRemove()},200)};let n;i==null?n=e(this,c).delayRemove||0:n=i,n>0?setTimeout(()=>{t()},n):t()}},$=new WeakMap,Q=new WeakMap,X=new WeakMap,_=new WeakMap,A=new WeakMap,c=new WeakMap,p=new WeakSet,pt=function(i,t){this.container.style.setProperty("--background",e(this,c).background),this.container.style.setProperty("--z-index",e(this,c).zIndex),o(this,p,lt).call(this,i,t)},lt=function(i,t){this.container.style.setProperty("--left",this.element.scrollLeft+"px"),this.container.style.setProperty("--top",this.element.scrollTop+"px"),this.container.style.setProperty("--width",i+"px"),this.container.style.setProperty("--height",t+"px"),e(this,c).gaussianBlur?typeof e(this,c).gaussianBlur=="boolean"?this.container.style.setProperty("--backdrop-filter","5px"):this.container.style.setProperty("--backdrop-filter",e(this,c).gaussianBlur):this.container.style.setProperty("--backdrop-filter","0px")},ot=new WeakMap,ut=function(){const i=this.element.getBoundingClientRect(),t=this.element===document.body?window.innerWidth:i.width,n=this.element===document.body?window.innerHeight:i.height;d(this,_,t),d(this,X,n),o(this,p,pt).call(this,t,n),this.style.innerHTML=e(this,ot).call(this)},gt=function(){d(this,A,new ResizeObserver(()=>{const i=this.element.getBoundingClientRect(),t=this.element===document.body?window.innerWidth:i.width,n=this.element===document.body?window.innerHeight:i.height;(e(this,X)!==n||e(this,_)!==t)&&(d(this,_,t),d(this,X,n),o(this,p,lt).call(this,t,n),this.handleElementChange&&this.handleElementChange())})),e(this,A).observe(this.element)},yt=function(){this.container.classList.add(`${this.id}-container`),this.animationContainer.classList.add(`${this.id}-animation-container`),this.container.append(this.animationContainer),e(this,Q)&&(e(this,c).tipText&&(this.textContainer.innerHTML=e(this,c).tipText),e(this,c).tipTextClass&&this.textContainer.classList.add(`${this.id}-text-container`,e(this,c).tipTextClass),this.container.append(this.textContainer))},bt=function(i){if(i)if(typeof i=="string"){const t=document.querySelector(i);if(!t)throw new Error(`未找到当前节点：${i}`);return t}else return i;else return document.body},ft);var E,R,S,vt,$t,wt;class oe extends v{constructor(t={}){super(t);a(this,S);a(this,E);a(this,R);d(this,R,new Proxy({color:this.getOrDefault(t.color,"#333"),size:this.getOrDefault(t.size,"20px")},{set:(n,r,s)=>(n[r]=s,["color","size"].includes(r)&&e(this,E).style.setProperty(this.convertToCssVariableName(r),s),!0)})),d(this,E,o(this,S,wt).call(this)),o(this,S,vt).call(this),this.addElement(e(this,E)),this.setChildrenStyle(o(this,S,$t).call(this)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,R),t))}}E=new WeakMap,R=new WeakMap,S=new WeakSet,vt=function(){e(this,E).style.setProperty("--color",e(this,R).color),e(this,E).style.setProperty("--size",e(this,R).size)},$t=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id}-bounce {
       text-align: center;
      }
      .${this.id}-bounce>div {
       width: var(--size);
       height: var(--size);
       background-color: var(--color);
       border-radius: 100%;
       display: inline-block;
       animation: ${this.id}-sk-bouncedelay 1.4s infinite ease-in-out both;
      }
      .${this.id}-bounce .${this.id}-bounce1 {
       animation-delay: -0.32s;
      }
      .${this.id}-bounce .${this.id}-bounce2 {
       animation-delay: -0.16s;
      }
      @keyframes ${this.id}-sk-bouncedelay {
       0%,
       80%,
       100% {
        transform: scale(0);
       }
       40% {
        transform: scale(1.0);
       }
      }
        `,t},wt=function(){const t=document.createElement("div");return t.classList.add(`${this.id}-bounce`),t.innerHTML=`<div class="${this.id}-bounce1"></div><div class="${this.id}-bounce2"></div><div class="${this.id}-bounce3"></div>`,t};var y,w,j,xt,kt,Lt;class ae extends v{constructor(t={}){super(t);a(this,j);a(this,y);a(this,w);d(this,w,new Proxy({color:t.color&&t.color.length>=3?t.color:["#FF5722","#FF9800","#FFC107"],size:this.getOrDefault(t.size,"100px")},{set:(n,r,s)=>(s!=null&&(n[r]=s,r==="color"?s&&s>=3&&(e(this,y).style.setProperty("--color-0",s[0]),e(this,y).style.setProperty("--color-1",s[1]),e(this,y).style.setProperty("--color-2",s[2])):["size"].includes(r)&&e(this,y).style.setProperty(this.convertToCssVariableName(r),s)),!0)})),this.setChildrenStyle(o(this,j,kt).call(this)),d(this,y,o(this,j,Lt).call(this)),o(this,j,xt).call(this),this.addElement(e(this,y)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,w),t))}}y=new WeakMap,w=new WeakMap,j=new WeakSet,xt=function(){e(this,y).style.setProperty("--color-0",e(this,w).color[0]),e(this,y).style.setProperty("--color-1",e(this,w).color[1]),e(this,y).style.setProperty("--color-2",e(this,w).color[2]),e(this,y).style.setProperty("--size",e(this,w).size)},kt=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id} {
        display: block;
        position: relative;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid var(--color-0);
        -webkit-animation: ${this.id}-spin 2s linear infinite;
        animation: ${this.id}-spin 2s linear infinite;
      }
      
      .${this.id}::before,
      .${this.id}::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        border: 4px solid transparent;
      }
      .${this.id}::before {
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-top-color: var(--color-1);
        -webkit-animation: ${this.id}-spin 3s linear infinite;
        animation: ${this.id}-spin 3.5s linear infinite;
      }
      .${this.id}::after {
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-top-color: var(--color-2);
        -webkit-animation: ${this.id}-spin 1.5s linear infinite;
        animation: ${this.id}-spin 1.75s linear infinite;
      }
      -webkit-@keyframes ${this.id}-spin {
        -webkit-from {
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        -webkit-to {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      
      @-webkit-keyframes ${this.id}-spin {
        from {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      
      @keyframes ${this.id}-spin {
        from {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
        `,t},Lt=function(){const t=document.createElement("div");return t.classList.add(this.id),t};var b,x,D,Ot,Et,Ct;class le extends v{constructor(t={}){super(t);a(this,D);a(this,b);a(this,x);d(this,x,new Proxy({color:t.color&&t.color.length>=3?t.color:["#F15E41","#BAD375","#26A9E0"],size:this.getOrDefault(t.size,"100px")},{set:(n,r,s)=>(s!=null&&(n[r]=s,["color","size"].includes(r)&&(r==="color"?s&&s.length>=3&&(e(this,b).style.setProperty("--color-0",s[0]),e(this,b).style.setProperty("--color-1",s[1]),e(this,b).style.setProperty("--color-2",s[2])):e(this,b).style.setProperty(this.convertToCssVariableName(r),s))),!0)})),this.setChildrenStyle(o(this,D,Et).call(this)),d(this,b,o(this,D,Ct).call(this)),o(this,D,Ot).call(this),this.addElement(e(this,b)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,x),t))}}b=new WeakMap,x=new WeakMap,D=new WeakSet,Ot=function(){e(this,b).style.setProperty("--color-0",e(this,x).color[0]),e(this,b).style.setProperty("--color-1",e(this,x).color[1]),e(this,b).style.setProperty("--color-2",e(this,x).color[2]),e(this,b).style.setProperty("--size",e(this,x).size)},Et=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            height: var(--size);
            width: var(--size);
            border: 3px solid transparent;
            border-radius: 50%;
            border-top: 4px solid var(--color-0);
            -webkit-animation: ${this.id}-spin 4s linear infinite;
            animation: ${this.id}-spin 4s linear infinite;
            position: relative;
          }
          
          .${this.id}::before,
          .${this.id}::after {
            content: "";
            position: absolute;
            top: 6px;
            bottom: 6px;
            left: 6px;
            right: 6px;
            border-radius: 50%;
            border: 4px solid transparent;
          }
          
          .${this.id}::before {
            border-top-color: var(--color-1);
            -webkit-animation: 3s ${this.id}-spin linear infinite;
            animation: 3s ${this.id}-spin linear infinite;
          }
          
          .${this.id}::after {
            border-top-color: var(--color-2);
            -webkit-animation: ${this.id}-spin 1.5s linear infinite;
            animation: ${this.id}-spin 1.5s linear infinite;
          }
          
          -webkit-@keyframes ${this.id}-spin {
            -webkit-from {
              -webkit-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            -webkit-to {
              -webkit-transform: rotate(360deg);
              -ms-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          
          @-webkit-keyframes ${this.id}-spin {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          
          @keyframes ${this.id}-spin {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          
          -webkit-@keyframes ${this.id}-spin {
            -webkit-from {
              -webkit-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            -webkit-to {
              -webkit-transform: rotate(360deg);
              -ms-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          
          @-webkit-keyframes ${this.id}-spin {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          
          @keyframes ${this.id}-spin {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
        `,t},Ct=function(){const t=document.createElement("div");return t.classList.add(this.id),t};var q,tt,M,zt,Pt,Tt;class de extends v{constructor(t={}){super(t);a(this,M);a(this,q);a(this,tt);d(this,tt,new Proxy({color:this.getOrDefault(t.color,"#F44336")},{set:(n,r,s)=>(s!=null&&(n[r]=s,["color"].includes(r)&&e(this,q).style.setProperty(this.convertToCssVariableName(r),s)),!0)})),this.setChildrenStyle(o(this,M,Pt).call(this)),d(this,q,o(this,M,Tt).call(this)),o(this,M,zt).call(this),this.addElement(e(this,q)),this.setSupportText(!1),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,tt),t))}}q=new WeakMap,tt=new WeakMap,M=new WeakSet,zt=function(){e(this,q).style.setProperty("--color",e(this,tt).color)},Pt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            overflow: hidden;
            height: inherit;
            width: inherit;
          }
          .${this.id} .${this.id}-circle {
            width: 30px;
            height: 30px;
            position: absolute;
            background: var(--color);
            border-radius: 50%;
            margin: -15px;
            -webkit-animation: ${this.id}-mesh 3s ease-in-out infinite -1.5s;
            animation: ${this.id}-mesh 3s ease-in-out infinite -1.5s;
          }
          
          .${this.id} > div .${this.id}-circle:last-child {
            -webkit-animation-delay: 0s;
            animation-delay: 0s;
          }
          
          .${this.id} > div {
            position: absolute;
            top: 50%;
            left: 50%;
          }
          
          .${this.id} > div:last-child {
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg);
          }
          
          @-webkit-keyframes ${this.id}-mesh {
            0% {
              -webkit-transform-origin: 50% -100%;
              transform-origin: 50% -100%;
              -webkit-transform: rotate(0);
              transform: rotate(0);
            }
            50% {
              -webkit-transform-origin: 50% -100%;
              transform-origin: 50% -100%;
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
            50.1% {
              -webkit-transform-origin: 50% 200%;
              transform-origin: 50% 200%;
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            100% {
              -webkit-transform-origin: 50% 200%;
              transform-origin: 50% 200%;
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          
          @keyframes ${this.id}-mesh {
            0% {
              -webkit-transform-origin: 50% -100%;
              transform-origin: 50% -100%;
              -webkit-transform: rotate(0);
              transform: rotate(0);
            }
            50% {
              -webkit-transform-origin: 50% -100%;
              transform-origin: 50% -100%;
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
            50.1% {
              -webkit-transform-origin: 50% 200%;
              transform-origin: 50% 200%;
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            100% {
              -webkit-transform-origin: 50% 200%;
              transform-origin: 50% 200%;
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
        `,t},Tt=function(){const t=document.createElement("div");return t.classList.add(this.id),t.innerHTML=`
          <div class="${this.id}-set-one">
            <div class="${this.id}-circle"></div>
            <div class="${this.id}-circle"></div>
          </div>
          <div class="${this.id}-set-two">
            <div class="${this.id}-circle"></div>
            <div class="${this.id}-circle"></div>
          </div>
    `,t};var Y,et,V,St,jt,Dt;class he extends v{constructor(t={}){super(t);a(this,V);a(this,Y);a(this,et);d(this,et,new Proxy({color:this.getOrDefault(t.color,"#F44336")},{set:(n,r,s)=>(s!=null&&(n[r]=s,["color"].includes(r)&&e(this,Y).style.setProperty(this.convertToCssVariableName(r),s)),!0)})),d(this,Y,o(this,V,Dt).call(this)),o(this,V,St).call(this),this.addElement(e(this,Y)),this.setChildrenStyle(o(this,V,jt).call(this)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,et),t))}}Y=new WeakMap,et=new WeakMap,V=new WeakSet,St=function(){e(this,Y).style.setProperty("--color",e(this,et).color)},jt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            position: relative;
            width: 60px;
            height: 60px;
          }
          
          .${this.id} div {
            height: 10px;
            width: 10px;
            background-color: var(--color);
            border-radius: 50%;
            position: absolute;
            -webkit-animation: 0.8s ${this.id}-opaque ease-in-out infinite both;
            animation: 0.8s ${this.id}-opaque ease-in-out infinite both;
          }
          
          .${this.id} > div:nth-child(1) {
            top: 0px;
            left: 25px;
          }
          .${this.id} > div:nth-child(2) {
            top: 8px;
            left: 43px;
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
          }
          .${this.id} > div:nth-child(3) {
            top: 25px;
            left: 50px;
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
          }
          .${this.id} > div:nth-child(4) {
            top: 43px;
            left: 43px;
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
          }
          .${this.id} > div:nth-child(5) {
            top: 50px;
            left: 25px;
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
          }
          .${this.id} > div:nth-child(6) {
            top: 43px;
            left: 8px;
            -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
          }
          .${this.id} > div:nth-child(7) {
            top: 25px;
            left: 0px;
            -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
          }
          .${this.id} > div:nth-child(8) {
            top: 8px;
            left: 8px;
            -webkit-animation-delay: 0.7s;
            animation-delay: 0.7s;
          }
          @keyframes ${this.id}-opaque {
            0% {
              opacity: 0.1;
            }
            40% {
              opacity: 1;
            }
            80% {
              opacity: 0.1;
            }
            100% {
              opacity: 0.1;
            }
          }
        `,t},Dt=function(){const t=document.createElement("div");return t.classList.add(this.id),t.innerHTML="<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>",t};var C,G,H,Mt,Vt,Ht;class ce extends v{constructor(t={}){super(t);a(this,H);a(this,C);a(this,G);d(this,G,new Proxy({color:this.getOrDefault(t.color,"#333"),size:this.getOrDefault(t.size,"20px")},{set:(n,r,s)=>(s!=null&&["color","size"].includes(r)&&e(this,C).style.setProperty(this.convertToCssVariableName(r),s),!0)})),d(this,C,o(this,H,Ht).call(this)),o(this,H,Mt).call(this),this.addElement(e(this,C)),this.setChildrenStyle(o(this,H,Vt).call(this)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,G),t))}}C=new WeakMap,G=new WeakMap,H=new WeakSet,Mt=function(){e(this,C).style.setProperty("--color",e(this,G).color),e(this,C).style.setProperty("--size",e(this,G).size)},Vt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
          }
          .${this.id}-sk-cube {
           width: var(--size);
           height: var(--size);
           background-color: var(--color);
           animation: ${this.id}-sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
          }
          .${this.id}-sk-cube1 {
           animation-delay: 0.2s;
          }
          .${this.id}-sk-cube2 {
           animation-delay: 0.3s;
          }
          .${this.id}-sk-cube3 {
           animation-delay: 0.4s;
          }
          .${this.id}-sk-cube4 {
           animation-delay: 0.1s;
          }
          .${this.id}-sk-cube5 {
           animation-delay: 0.2s;
          }
          .${this.id}-sk-cube6 {
           animation-delay: 0.3s;
          }
          .${this.id}-sk-cube7 {
           animation-delay: 0s;
          }
          .${this.id}-sk-cube8 {
           animation-delay: 0.1s;
          }
          .${this.id}-sk-cube9 {
           animation-delay: 0.2s;
          }
          @keyframes ${this.id}-sk-cubeGridScaleDelay {
           0%,
           70%,
           100% {
            transform: scale3D(1, 1, 1);
           }
           35% {
            transform: scale3D(0, 0, 1);
           }
          }
        `,t},Ht=function(){const t=document.createElement("div");return t.classList.add(this.id),t.innerHTML=`
      <div class="${this.id}-sk-cube ${this.id}-sk-cube1"></div>
      <div class="${this.id}-sk-cube ${this.id}-sk-cube2"></div>
      <div class="${this.id}-sk-cube ${this.id}-sk-cube3"></div>
      <div class="${this.id}-sk-cube ${this.id}-sk-cube4"></div>
      <div class="${this.id}-sk-cube ${this.id}-sk-cube5"></div>
      <div class="${this.id}-sk-cube ${this.id}-sk-cube6"></div>
      <div class="${this.id}-sk-cube ${this.id}-sk-cube7"></div>
      <div class="${this.id}-sk-cube ${this.id}-sk-cube8"></div>
      <div class="${this.id}-sk-cube ${this.id}-sk-cube9"></div>
    `,t};var z,P,J,N,Nt,Wt,Bt;class me extends v{constructor(t={}){super(t);a(this,N);a(this,z);a(this,P);a(this,J);d(this,J,new Proxy({color:this.getOrDefault(t.color,"#333"),size:this.getOrDefault(t.size,"16px")},{set:(n,r,s)=>(s!=null&&(n[r]=s,["color","size"].includes(r)&&e(this,P).style.setProperty(this.convertToCssVariableName(r),s)),!0)})),d(this,z,this.getOrDefault(t.text,"Loading...")),this.setChildrenStyle(o(this,N,Wt).call(this)),d(this,P,o(this,N,Bt).call(this)),o(this,N,Nt).call(this),this.addElement(e(this,P)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,J),t))}}z=new WeakMap,P=new WeakMap,J=new WeakMap,N=new WeakSet,Nt=function(){e(this,P).style.setProperty("--color",e(this,J).color),e(this,P).style.setProperty("--size",e(this,J).size)},Wt=function(){let t=.48;const n=document.createElement("style");n.innerHTML=`
          .${this.id} {
            display: flex;
          }
          .${this.id} div {
            animation-name: ${this.id}-loading;
            animation-duration: ${t+.05*(e(this,z).length-1)}s;
            animation-iteration-count: infinite;
            animation-direction: linear;
            font-size: var(--size);
            color: var(--color);
          }
          @keyframes ${this.id}-loading {
            0% {
              opacity: 0.2;
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `;for(let r=0;r<e(this,z).length;r++)n.innerHTML+=`
            .${this.id}-item-${r} {
              animation-delay: ${t+.05*r}s;
            }
      `;return n},Bt=function(){const t=document.createElement("div");t.classList.add(this.id);for(let n=0;n<e(this,z).length;n++)t.innerHTML+=`<div class="${this.id}-item-${n}">${e(this,z).charAt(n)}</div>`;return t};var k,K,W,Ft,It,At;class fe extends v{constructor(t={}){super(t);a(this,W);a(this,k);a(this,K);d(this,K,new Proxy({color:t.color&&t.color.length>=2?t.color:["#000","#000"]},{set:(n,r,s)=>(s!=null&&(n[r]=s,["color"].includes(r)&&r==="color"&&s&&s.length>=2&&(e(this,k).style.setProperty("--color-0",s[0]),e(this,k).style.setProperty("--color-1",s[1]))),!0)})),this.setChildrenStyle(o(this,W,It).call(this)),d(this,k,o(this,W,At).call(this)),o(this,W,Ft).call(this),this.addElement(e(this,k)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,K),t))}}k=new WeakMap,K=new WeakMap,W=new WeakSet,Ft=function(){e(this,k).style.setProperty("--color-0",e(this,K).color[0]),e(this,k).style.setProperty("--color-1",e(this,K).color[1])},It=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  display: block;
  font-size: 0;
  color: var(--color-0);
}
.${this.id},
.${this.id} > div {
  position: relative;
  box-sizing: border-box;
}
.${this.id} > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}
.${this.id} {
  width: 42px;
  height: 32px;
}
.${this.id} > div:nth-child(1) {
  position: absolute;
  bottom: 32%;
  left: 18%;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  transform-origin: center bottom;
  animation: ${this.id}-ball-climbing-dot-jump 0.6s ease-in-out infinite;
}
.${this.id} > div:not(:nth-child(1)) {
  position: absolute;
  top: 0;
  right: 0;
  width: 14px;
  height: 2px;
  border-radius: 0;
  background-color: var(--color-1);
  transform: translate(60%, 0);
  animation: ${this.id}-ball-climbing-dot-steps 1.8s linear infinite;
}
.${this.id} > div:not(:nth-child(1)):nth-child(2) {
  animation-delay: 0ms;
}
.${this.id} > div:not(:nth-child(1)):nth-child(3) {
  animation-delay: -600ms;
}
.${this.id} > div:not(:nth-child(1)):nth-child(4) {
  animation-delay: -1200ms;
}
@keyframes ${this.id}-ball-climbing-dot-jump {
  0% {
    transform: scale(1, 0.7);
  }
  20% {
    transform: scale(0.7, 1.2);
  }
  40% {
    transform: scale(1, 1);
  }
  50% {
    bottom: 125%;
  }
  46% {
    transform: scale(1, 1);
  }
  80% {
    transform: scale(0.7, 1.2);
  }
  90% {
    transform: scale(0.7, 1.2);
  }
  100% {
    transform: scale(1, 0.7);
  }
}
@keyframes ${this.id}-ball-climbing-dot-steps {
  0% {
    top: 0;
    right: 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 100%;
    right: 100%;
    opacity: 0;
  }
}
        `,t},At=function(){const t=document.createElement("div");return t.classList.add(this.id),t.innerHTML="<div></div><div></div><div></div><div></div>",t};var L,T,B,Rt,qt,Yt;class pe extends v{constructor(t={}){super(t);a(this,B);a(this,L);a(this,T);d(this,T,new Proxy({color:this.getOrDefault(t.color,"#fff"),shadowColor:this.getOrDefault(t.shadowColor,"#000"),shadowOpacity:this.getOrDefault(t.shadowOpacity,"0.1")},{set:(n,r,s)=>(s!=null&&(n[r]=s,["color","shadowColor","shadowOpacity"].includes(r)&&e(this,L).style.setProperty(this.convertToCssVariableName(r),s)),!0)})),this.setChildrenStyle(o(this,B,qt).call(this)),d(this,L,o(this,B,Yt).call(this)),o(this,B,Rt).call(this),this.addElement(e(this,L)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,T),t))}}L=new WeakMap,T=new WeakMap,B=new WeakSet,Rt=function(){e(this,L).style.setProperty("--color",e(this,T).color),e(this,L).style.setProperty("--shadow-color",e(this,T).shadowColor),e(this,L).style.setProperty("--shadow-opacity",e(this,T).shadowOpacity)},qt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.${this.id}-box {
  width: 50px;
  height: 50px;
  background: var(--color);
  animation: ${this.id}-animate .5s linear infinite;
  border-radius: 3px;
}
@keyframes ${this.id}-animate {
  17% { border-bottom-right-radius: 3px; }
  25% { transform: translateY(9px) rotate(22.5deg); }
  50% {
    transform: translateY(18px) scale(1,.9) rotate(45deg) ;
    border-bottom-right-radius: 40px;
  }
  75% { transform: translateY(9px) rotate(67.5deg); }
  100% { transform: translateY(0) rotate(90deg); }
} 
.${this.id}-shadow { 
  width: 50px;
  height: 5px;
  background: var(--shadow-color);
  opacity: var(--shadow-opacity);
  border-radius: 50%;
  animation: ${this.id}-shadow .5s linear infinite;
}
@keyframes ${this.id}-shadow {
  50% {
    transform: scale(1.2,1);
  }
}
        `,t},Yt=function(){const t=document.createElement("div");return t.classList.add(this.id),t.innerHTML=`
      <div class="${this.id}-box"></div>
      <div class="${this.id}-shadow"></div>
    `,t};var U,it,F,Gt,Jt,Kt;class ue extends v{constructor(t={}){super(t);a(this,F);a(this,U);a(this,it);d(this,it,new Proxy({color:this.getOrDefault(t.color,"#000")},{set:(n,r,s)=>(s!=null&&(n[r]=s,["color"].includes(r)&&e(this,U).style.setProperty(this.convertToCssVariableName(r),s)),!0)})),this.setChildrenStyle(o(this,F,Jt).call(this)),d(this,U,o(this,F,Kt).call(this)),o(this,F,Gt).call(this),this.addElement(e(this,U)),this.setSupportText(!1),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,it),t))}}U=new WeakMap,it=new WeakMap,F=new WeakSet,Gt=function(){e(this,U).style.setProperty("--color",e(this,it).color)},Jt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50px;
  width: 50px;
  margin: -25px 0 0 -25px;
  border-radius: 50%;
}

.${this.id}:before, .${this.id}:after {
  content: '';
  border: 2px solid var(--color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 0px;
}

.${this.id}:before {
  -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
          transform: scale(1, 1);
  opacity: 1;
  -webkit-animation: ${this.id}-spWaveBe 0.6s infinite linear;
          animation: ${this.id}-spWaveBe 0.6s infinite linear;
}

.${this.id}:after {
  -webkit-transform: scale(0, 0);
      -ms-transform: scale(0, 0);
          transform: scale(0, 0);
  opacity: 0;
  -webkit-animation: ${this.id}-spWaveAf 0.6s infinite linear;
          animation: ${this.id}-spWaveAf 0.6s infinite linear;
}

@-webkit-keyframes ${this.id}-spWaveAf {
  from {
    -webkit-transform: scale(0.5, 0.5);
            transform: scale(0.5, 0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes ${this.id}-spWaveAf {
  from {
    -webkit-transform: scale(0.5, 0.5);
            transform: scale(0.5, 0.5);
    -webkit-transform: scale(0.5, 0.5);
            transform: scale(0.5, 0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes ${this.id}-spWaveBe {
  from {
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
    opacity: 1;
  }
  to {
    -webkit-transform: scale(1.5, 1.5);
            transform: scale(1.5, 1.5);
    opacity: 0;
  }
}
@keyframes ${this.id}-spWaveBe {
  from {
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
    opacity: 1;
  }
  to {
    -webkit-transform: scale(1.5, 1.5);
            transform: scale(1.5, 1.5);
    opacity: 0;
  }
}
        `,t},Kt=function(){const t=document.createElement("div");return t.classList.add(this.id),t};var Z,st,I,Ut,Zt,Qt;class ge extends v{constructor(t={}){super(t);a(this,I);a(this,Z);a(this,st);d(this,st,new Proxy({color:this.getOrDefault(t.color,"#000")},{set:(n,r,s)=>(s!=null&&(n[r]=s,["color"].includes(r)&&e(this,Z).style.setProperty(this.convertToCssVariableName(r),s)),!0)})),this.setChildrenStyle(o(this,I,Zt).call(this)),d(this,Z,o(this,I,Qt).call(this)),o(this,I,Ut).call(this),this.addElement(e(this,Z)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,st),t))}}Z=new WeakMap,st=new WeakMap,I=new WeakSet,Ut=function(){e(this,Z).style.setProperty("--color",e(this,st).color)},Zt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color);

  animation: ${this.id}-ball-scale infinite linear 0.75s;
}

@keyframes ${this.id}-ball-scale {
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
        `,t},Qt=function(){const t=document.createElement("div");return t.classList.add(this.id),t};var m,f,g,Xt,_t,nt,te,ee;class ye extends v{constructor(t={}){super(t);a(this,g);a(this,m);a(this,f);d(this,f,new Proxy({color:this.getOrDefault(t.color,"#76DAFF"),size:this.getOrDefault(t.size,100),borderSize:this.getOrDefault(t.borderSize,"2px"),paddingSize:this.getOrDefault(t.paddingSize,"2px"),value:o(this,g,_t).call(this,t.value||0),fontSize:this.getOrDefault(t.fontSize,"20px"),fontColor:this.getOrDefault(t.fontColor,"#000"),fontWeight:this.getOrDefault(t.fontWeight,"normal")},{set:(n,r,s)=>{if(s!=null)if(n[r]=s,r==="value"){const h=document.querySelector(`.${this.id}-text`);h&&(h.innerHTML=s+"%"),e(this,m).style.setProperty("--top",o(this,g,nt).call(this,s)+"px")}else r==="size"?(e(this,m).style.setProperty("--size",s+"px"),e(this,m).style.setProperty("--top",o(this,g,nt).call(this,n.value)+"px")):["color","borderSize","paddingSize","fontSize","fontColor","fontWeight"].includes(r)&&e(this,m).style.setProperty(this.convertToCssVariableName(r),s);return!0}})),this.setChildrenStyle(o(this,g,te).call(this)),d(this,m,o(this,g,ee).call(this)),o(this,g,Xt).call(this),this.addElement(e(this,m)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,f),t))}setValue(t){e(this,f).value=t}}m=new WeakMap,f=new WeakMap,g=new WeakSet,Xt=function(){e(this,m).style.setProperty("--top",o(this,g,nt).call(this,e(this,f).value)+"px"),e(this,m).style.setProperty("--size",e(this,f).size+"px"),e(this,m).style.setProperty("--color",e(this,f).color),e(this,m).style.setProperty("--border-size",e(this,f).borderSize),e(this,m).style.setProperty("--padding-size",e(this,f).paddingSize),e(this,m).style.setProperty("--font-size",e(this,f).fontSize),e(this,m).style.setProperty("--font-color",e(this,f).fontColor),e(this,m).style.setProperty("--font-weight",e(this,f).fontWeight)},_t=function(t){return!t||t<=0?0:t>=100?100:t},nt=function(t){const h=-e(this,f).size;return!t||t<=0?0:t>=100?h:0+(t-0)/100*(h-0)},te=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  background-color: rgba(255, 255, 255, 0.9);
  padding: var(--padding-size);
  border: var(--border-size) solid var(--color);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.${this.id}-wave {
  position: relative;
  width: var(--size);
  height: var(--size);
  background-color: var(--color);
  border-radius: 50%;
}
.${this.id}-wave::before, .${this.id}-wave::after {
  content: "";
  position: absolute;
  width: calc(var(--size) * 2);
  height: calc(var(--size) * 2);
  top: var(--top);
  left: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 45%;
  transition: top 0.5s ease;
  transform: translate(-50%, -50%) rotate(0);
  -webkit-animation: ${this.id}-rotate 6s linear infinite;
          animation: ${this.id}-rotate 6s linear infinite;
  z-index: 1;
}
.${this.id}-wave::after {
  border-radius: 47%;
  background-color: rgba(255, 255, 255, 0.9);
  transform: translate(-50%, -50%) rotate(0);
  -webkit-animation: ${this.id}-rotate 10s linear -5s infinite;
          animation: ${this.id}-rotate 10s linear -5s infinite;
  z-index: 2;
}

.${this.id}-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font-size);
  color: var(--font-color);
  font-weight: var(--font-weight);
  z-index: 10;
}

@-webkit-keyframes ${this.id}-rotate {
  50% {
    transform: translate(-50%, -53%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes ${this.id}-rotate {
  50% {
    transform: translate(-50%, -53%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
        `,t},ee=function(){const t=document.createElement("div");return t.classList.add(this.id),t.innerHTML=`<div class="${this.id}-wave"></div><div class="${this.id}-text">${e(this,f).value}%</div>`,t};var rt,u,O,dt,ie,se;class be extends v{constructor(t={}){super(t);a(this,O);a(this,rt);a(this,u);let n;t.direction!=="horizontal"&&t.direction!=="vertical"?n="vertical":n=t.direction,d(this,u,new Proxy({color:this.getOrDefault(t.color,"#FFF"),fillColor:this.getOrDefault(t.fillColor,"#76DAFF"),size:this.getOrDefault(t.size,"40px"),text:this.getOrDefault(t.text,"Loading"),direction:n},{set:(r,s,h)=>(h!=null&&(r[s]=h,["color","fillColor","size"].includes(s)?this.setChildrenStyle(o(this,O,dt).call(this)):s==="text"&&(e(this,rt).innerHTML=h)),!0)})),this.setChildrenStyle(o(this,O,dt).call(this)),d(this,rt,o(this,O,se).call(this)),this.addElement(e(this,rt)),this.finish()}setOption(t){t&&(super.setOption(t),Object.assign(e(this,u),t))}}rt=new WeakMap,u=new WeakMap,O=new WeakSet,dt=function(){const t=document.createElement("style"),n=o(this,O,ie).call(this);return t.innerHTML=`
.${this.id} {
  font-size: ${e(this,u).size};
  font-weight: bold;
  display: inline-block;
  letter-spacing: 2px;
  position: relative;
  color: ${n.backgroundColor};
  box-sizing: border-box;
}
.${this.id}::after {
  content: '${e(this,u).text}';
  position: absolute;
  left: 0;
  top: 0;
  color: ${n.fillColor};
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: ${this.id}-animloader 2s linear infinite;
}
${n.keyframes}
        `,t},ie=function(){const t={};return e(this,u).direction==="horizontal"?(t.backgroundColor=e(this,u).color,t.fillColor=e(this,u).fillColor,t.keyframes=`
          @keyframes ${this.id}-animloader {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
        `):e(this,u).direction==="vertical"&&(t.backgroundColor=e(this,u).fillColor,t.fillColor=e(this,u).color,t.keyframes=`
          @keyframes ${this.id}-animloader {
            0% {
              height: 100%;
            }
            100% {
              height: 0%;
            }
          }
        `),t},se=function(){const t=document.createElement("div");return t.classList.add(this.id),t.innerHTML=e(this,u).text,t};const ht={CmSpinnerLoading:le,TripleSpinnerLoading:ae,MeshLoaderLoading:de,BounceLoading:oe,CircleLoaderLoading:he,CubesLoading:ce,TextLoading:me,DotJumpLoading:fe,JellyLoading:pe,WaveLoading:ue,DotExpandLoading:ge,WaveValueLoading:ye,TextFillLoading:be},re=Object.keys(ht),ve=()=>{let l="";return re.forEach(i=>{l+=`
      <div class="card">
        <div class="card-header">${i}</div>
        <div class="card-body" id="${i}-loading"></div>
      </div>
    `}),l};document.querySelector("#app").innerHTML=`
  <div class="title">wj-loading</div>
  <div class="tag-container">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/wj-loading">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/wj-loading">
    <img alt="NPM License" src="https://img.shields.io/npm/l/wj-loading">
  </div>
  <div class="desc">
    <div class="bg">yarn add wj-loading</div>
    <div class="bg">npm install wj-loading</div>
    <div class="bg">&lt;script src="https://cdn.jsdelivr.net/npm/wj-loading@:version/dist/wj-loading.umd.min.js"&gt;&lt;/script&gt;</div>
    <div class="bg">&lt;script src="https://unpkg.com/wj-loading@:version/wj-loading.umd.js"&gt;&lt;/script&gt;</div>
    <div style="display: flex; justify-content: center; align-items: center; gap: 20px">
      <div data-url="https://github.com/nlbwqmz/wj-loading" class="url">github</div>
      <div data-url="https://github.com/nlbwqmz/wj-loading-vue" class="url">vue指令版</div>
    </div>
  </div>
  <div class="grid-container">
    ${ve()}
  </div>
`;re.forEach(l=>{if(l!=="WaveValueLoading")new ht[l]({element:document.getElementById(`${l}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0});else{let i=0;const t=new ht.WaveValueLoading({element:document.getElementById(`${l}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0,value:i});setInterval(()=>{i<100?i++:i=0,t.setValue(i)},500)}});const mt=document.querySelectorAll(".url");for(let l=0;l<mt.length;l++)mt[l].addEventListener("click",i=>{var t;window.open((t=i.target)==null?void 0:t.dataset.url)});
