var xt=r=>{throw TypeError(r)};var $t=(r,i,t)=>i.has(r)||xt("Cannot "+t);var e=(r,i,t)=>($t(r,i,"read from private field"),t?t.call(r):i.get(r)),s=(r,i,t)=>i.has(r)?xt("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(r):i.set(r,t),n=(r,i,t,a)=>($t(r,i,"write to private field"),a?a.call(r,t):i.set(r,t),t),o=(r,i,t)=>($t(r,i,"access private method"),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))a(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const l of h.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(d){if(d.ep)return;d.ep=!0;const h=t(d);fetch(d.href,h)}})();const ri=(r=8)=>{const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let a=0;a<r;a++)t+=i.charAt(Math.floor(Math.random()*i.length));return t};var f,U,E,S,k,X,u,Lt,Et,St,zt,Ct;let c=(Ct=class{constructor(i={}){s(this,u);s(this,f);s(this,U);s(this,E);s(this,S);s(this,k);s(this,X,(i,t)=>{let a=`
      .${this.id}-relative {
        position: relative;
      }
      .${this.id}-lock {
        overflow: hidden !important;
      }
      .${this.id}-container {
        user-select: none !important;
        z-index: ${this.zIndex};
        background: ${this.background};
        position: absolute;
        width: ${t}px;
        height: ${i}px;
        left: ${this.element.scrollLeft}px;
        top: ${this.element.scrollTop}px;
      }
    `;return e(this,U)===!0&&(a+=`
      .${this.id}-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `),a});this.id=`wj-loading-${ri()}`,this.rendered=!1,this.element=o(this,u,zt).call(this,i.element),this.immediate=i.immediate,this.interval=i.interval,this.delayRemove=i.delayRemove,this.afterRemove=i.afterRemove,this.background=i.background||"rgba(0, 0, 0, 0.2)",this.zIndex=this.zIndex||2e3,this.style=document.createElement("style"),this.container=document.createElement("div")}setContainerFlexCenter(i=!0){n(this,U,i)}setChildrenStyle(i){e(this,f)?e(this,f).innerHTML=i.innerHTML:n(this,f,i)}addElement(i){typeof i=="string"?this.container.innerHTML+=i:this.container.appendChild(i)}finish(){o(this,u,Lt).call(this),o(this,u,St).call(this),this.immediate&&this.loading(this.interval)}loading(i){this.rendered||(["relative","absolute","fixed"].includes(window.getComputedStyle(this.element).position)||this.element.classList.add(`${this.id}-relative`),this.element.classList.add(`${this.id}-lock`),document.getElementsByTagName("head")[0].appendChild(this.style),e(this,f)&&document.getElementsByTagName("head")[0].appendChild(e(this,f)),this.element.appendChild(this.container),o(this,u,Et).call(this),this.rendered=!0,i&&i>0&&setTimeout(()=>{this.remove()},i),this.afterRendered&&this.afterRendered())}remove(i){if(!this.rendered)return;const t=()=>{e(this,k)&&e(this,k).disconnect(),this.container&&(this.container.style.transition="opacity 0.2s linear",this.container.style.opacity="0"),setTimeout(()=>{this.container&&this.container.remove(),this.style&&this.style.remove(),e(this,f)&&e(this,f).remove(),this.element.classList.contains(`${this.id}-relative`)&&this.element.classList.remove(`${this.id}-relative`),this.element.classList.remove(`${this.id}-lock`),this.rendered=!1,this.afterRemove&&this.afterRemove()},200)},a=i||this.delayRemove||0;a&&a>0?setTimeout(()=>{t()},a):t()}},f=new WeakMap,U=new WeakMap,E=new WeakMap,S=new WeakMap,k=new WeakMap,X=new WeakMap,u=new WeakSet,Lt=function(){const i=this.element.getBoundingClientRect(),t=this.element===document.body?window.innerWidth:i.width,a=this.element===document.body?window.innerHeight:i.height;n(this,S,t),n(this,E,a),this.style.innerHTML=e(this,X).call(this,a,t)},Et=function(){n(this,k,new ResizeObserver(()=>{const i=this.element.getBoundingClientRect(),t=this.element===document.body?window.innerWidth:i.width,a=this.element===document.body?window.innerHeight:i.height;(e(this,E)!==a||e(this,S)!==t)&&(n(this,S,t),n(this,E,a),this.style.innerHTML=e(this,X).call(this,a,t),this.handleElementChange&&this.handleElementChange())})),e(this,k).observe(this.element)},St=function(){this.container.classList.add(`${this.id}-container`)},zt=function(i){if(i)if(typeof i=="string"){const t=document.querySelector(i);if(!t)throw new Error(`未找到当前节点：${i}`);return t}else return i;else return document.body},Ct);var x,Z,z,g,$,bt,gt,Tt;class ni extends c{constructor(t={}){super(t);s(this,$);s(this,x);s(this,Z);s(this,z);s(this,g);n(this,Z,t.text||"Loading..."),n(this,z,t.fontColor||"rgba(128, 128, 128, .9)"),n(this,g,t.textVisible||3),n(this,x,t.maxSize),this.setChildrenStyle(o(this,$,gt).call(this)),this.addElement(o(this,$,Tt).call(this)),this.afterRendered=()=>{e(this,g)===3&&o(this,$,bt).call(this)},this.handleElementChange=()=>{this.setChildrenStyle(o(this,$,gt).call(this)),e(this,g)===3&&o(this,$,bt).call(this)},this.finish()}}x=new WeakMap,Z=new WeakMap,z=new WeakMap,g=new WeakMap,$=new WeakSet,bt=function(){const t=this.element.querySelector(`.${this.id}-text`);t&&(t.offsetWidth<t.scrollWidth?t.style.display="none":t.style.display="block")},gt=function(){const t=this.element.getBoundingClientRect(),a=this.element===document.body?window.innerWidth:t.width,d=this.element===document.body?window.innerHeight:t.height;let h=Math.min(a,d)/4;e(this,x)&&h>e(this,x)&&(h=e(this,x));const l=h/2,kt=document.createElement("style");return kt.innerHTML=`
        .${this.id}-text {
          width: 100%;
          position: absolute;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          ${e(this,z)?`color: ${e(this,z)};`:""}
          top: ${d/2+l+10}px;
          ${e(this,g)===1||e(this,g)===3?"":"display: none;"}
        }
        
        .${this.id} {
          position: absolute;
          width: ${h}px;
          height: ${h}px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
        
        .${this.id} .${this.id}-item {
          width: ${l}px;
          height: ${l}px;
          position: absolute;
        }
        
        .${this.id} .${this.id}-item-1 {
          background-color: #FA5667;
          top: 0;
          left: 0;
          z-index: 1;
          animation: ${this.id}-item-1_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
        }
        
        .${this.id} .${this.id}-item-2 {
          background-color: #7A45E5;
          top: 0;
          right: 0;
          animation: ${this.id}-item-2_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
        }
        
        .${this.id} .${this.id}-item-3 {
          background-color: #1B91F7;
          bottom: 0;
          right: 0;
          z-index: 1;
          animation: ${this.id}-item-3_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
        }
        
        .${this.id} .${this.id}-item-4 {
          background-color: #FAC24C;
          bottom: 0;
          left: 0;
          animation: ${this.id}-item-4_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
        }
        
        @keyframes ${this.id}-item-1_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(0, ${l}px)} 
          50% {transform: translate(${l}px, ${l}px)} 
          75% {transform: translate(${l}px, 0)} 
        }
        
        @keyframes ${this.id}-item-2_move {
          0%, 100% {transform: translate(0, 0)}
          25% {transform: translate(-${l}px, 0)}
          50% {transform: translate(-${l}px, ${l}px)}
          75% {transform: translate(0, ${l}px)} 
        }
        
        @keyframes ${this.id}-item-3_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(0, -${l}px)} 
          50% {transform: translate(-${l}px, -${l}px)} 
          75% {transform: translate(-${l}px, 0)} 
        }
        
        @keyframes ${this.id}-item-4_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(${l}px, 0)} 
          50% {transform: translate(${l}px, -${l}px)} 
          75% {transform: translate(0, -${l}px)} 
        }
        `,kt},Tt=function(){return`
        <div class="${this.id}">
              <div class="${this.id}-item ${this.id}-item-1"></div>
              <div class="${this.id}-item ${this.id}-item-2"></div>
              <div class="${this.id}-item ${this.id}-item-3"></div>
              <div class="${this.id}-item ${this.id}-item-4"></div>
            </div>
            <div class="${this.id}-text">${e(this,Z)}</div>
        `};var tt,T,V,Ft,Mt;class ai extends c{constructor(t={}){super(t);s(this,V);s(this,tt);s(this,T);n(this,tt,t.color||"#333"),n(this,T,t.size||"20px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,V,Ft).call(this)),this.addElement(o(this,V,Mt).call(this)),this.finish()}}tt=new WeakMap,T=new WeakMap,V=new WeakSet,Ft=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id}-bounce {
       text-align: center;
      }
      .${this.id}-bounce>div {
       width: ${e(this,T)};
       height: ${e(this,T)};
       background-color: ${e(this,tt)};
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
        `,t},Mt=function(){return`
        <div class="${this.id}-bounce">
          <div class="${this.id}-bounce1"></div>
          <div class="${this.id}-bounce2"></div>
          <div class="${this.id}-bounce3"></div>
        </div>
        `};var w,F,q,Ht,Wt;class oi extends c{constructor(t={}){super(t);s(this,q);s(this,w);s(this,F);n(this,w,t.color&&t.color.length>=3?t.color:["#FF5722","#FF9800","#FFC107"]),n(this,F,t.size||"100px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,q,Ht).call(this)),this.addElement(o(this,q,Wt).call(this)),this.finish()}}w=new WeakMap,F=new WeakMap,q=new WeakSet,Ht=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id} {
        display: block;
        position: relative;
        width: ${e(this,F)};
        height: ${e(this,F)};
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid ${e(this,w)[0]};
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
        border-top-color: ${e(this,w)[1]};
        -webkit-animation: ${this.id}-spin 3s linear infinite;
        animation: ${this.id}-spin 3.5s linear infinite;
      }
      .${this.id}::after {
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-top-color: ${e(this,w)[2]};
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
        `,t},Wt=function(){return`
        <div class="${this.id}"></div>
        `};var C,M,D,Rt,Ot;class di extends c{constructor(t={}){super(t);s(this,D);s(this,C);s(this,M);n(this,C,t.color&&t.color.length>=3?t.color:["#F15E41","#BAD375","#26A9E0"]),n(this,M,t.size||"100px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,D,Rt).call(this)),this.addElement(o(this,D,Ot).call(this)),this.finish()}}C=new WeakMap,M=new WeakMap,D=new WeakSet,Rt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            height: ${e(this,M)};
            width: ${e(this,M)};
            border: 3px solid transparent;
            border-radius: 50%;
            border-top: 4px solid ${e(this,C)[0]};
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
            border-top-color: ${e(this,C)[1]};
            -webkit-animation: 3s ${this.id}-spin linear infinite;
            animation: 3s ${this.id}-spin linear infinite;
          }
          
          .${this.id}::after {
            border-top-color: ${e(this,C)[2]};
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
        `,t},Ot=function(){return`
        <div class="${this.id}"></div>
        `};var it,N,At,It;class li extends c{constructor(t={}){super(t);s(this,N);s(this,it);n(this,it,t.color||"#F44336"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,N,At).call(this)),this.addElement(o(this,N,It).call(this)),this.finish()}}it=new WeakMap,N=new WeakSet,At=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            overflow: hidden;
            height: inherit;
            width: inherit;
          }
          .${this.id} .${this.id}-circle {
            width: 30px;
            height: 30px;
            position: absolute;
            background: ${e(this,it)};
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
        `,t},It=function(){return`
        <div class="${this.id}">
          <div class="${this.id}-set-one">
            <div class="${this.id}-circle"></div>
            <div class="${this.id}-circle"></div>
          </div>
          <div class="${this.id}-set-two">
            <div class="${this.id}-circle"></div>
            <div class="${this.id}-circle"></div>
          </div>
        </div>
        `};var et,P,Bt,jt;class hi extends c{constructor(t={}){super(t);s(this,P);s(this,et);n(this,et,t.color||"#F44336"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,P,Bt).call(this)),this.addElement(o(this,P,jt).call(this)),this.finish()}}et=new WeakMap,P=new WeakSet,Bt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            position: relative;
            width: auto;
            height: auto;
          }
          
          .${this.id} div {
            height: 10px;
            width: 10px;
            background-color: ${e(this,et)};
            border-radius: 50%;
            position: absolute;
            -webkit-animation: 0.8s ${this.id}-opaque ease-in-out infinite both;
            animation: 0.8s ${this.id}-opaque ease-in-out infinite both;
          }
          
          .${this.id} > div:nth-child(1) {
            top: -25px;
            left: 0;
          }
          .${this.id} > div:nth-child(2) {
            top: -17px;
            left: 17px;
            -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
          }
          .${this.id} > div:nth-child(3) {
            top: 0;
            left: 25px;
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
          }
          .${this.id} > div:nth-child(4) {
            top: 17px;
            left: 17px;
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
          }
          .${this.id} > div:nth-child(5) {
            top: 25px;
            left: 0;
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
          }
          .${this.id} > div:nth-child(6) {
            top: 17px;
            left: -17px;
            -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
          }
          .${this.id} > div:nth-child(7) {
            top: 0;
            left: -25px;
            -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
          }
          .${this.id} > div:nth-child(8) {
            top: -17px;
            left: -17px;
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
        `,t},jt=function(){return`
        <div class="${this.id}">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        `};var st,H,Y,Vt,qt;class ci extends c{constructor(t={}){super(t);s(this,Y);s(this,st);s(this,H);n(this,st,t.color||"#333"),n(this,H,t.size||"20px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,Y,Vt).call(this)),this.addElement(o(this,Y,qt).call(this)),this.finish()}}st=new WeakMap,H=new WeakMap,Y=new WeakSet,Vt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
          }
          
          .${this.id}-sk-cube {
           width: ${e(this,H)};
           height: ${e(this,H)};
           background-color: ${e(this,st)};
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
        `,t},qt=function(){return`
         <div class="${this.id}">
          <div class="${this.id}-sk-cube ${this.id}-sk-cube1"></div>
          <div class="${this.id}-sk-cube ${this.id}-sk-cube2"></div>
          <div class="${this.id}-sk-cube ${this.id}-sk-cube3"></div>
          <div class="${this.id}-sk-cube ${this.id}-sk-cube4"></div>
          <div class="${this.id}-sk-cube ${this.id}-sk-cube5"></div>
          <div class="${this.id}-sk-cube ${this.id}-sk-cube6"></div>
          <div class="${this.id}-sk-cube ${this.id}-sk-cube7"></div>
          <div class="${this.id}-sk-cube ${this.id}-sk-cube8"></div>
          <div class="${this.id}-sk-cube ${this.id}-sk-cube9"></div>
         </div>
        `};var W,R,p,_,Dt,Nt;class mi extends c{constructor(t={}){super(t);s(this,_);s(this,W);s(this,R);s(this,p);n(this,W,t.color||"#333"),n(this,R,t.size||"16px"),n(this,p,t.text||"Loading..."),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,_,Dt).call(this)),this.addElement(o(this,_,Nt).call(this)),this.finish()}}W=new WeakMap,R=new WeakMap,p=new WeakMap,_=new WeakSet,Dt=function(){let t=.48;const a=document.createElement("style");a.innerHTML=`
          .${this.id} {
            display: flex;
          }
          .${this.id} div {
            animation-name: ${this.id}-loading;
            animation-duration: ${t+.05*(e(this,p).length-1)}s;
            animation-iteration-count: infinite;
            animation-direction: linear;
            ${e(this,R)?`font-size: ${e(this,R)};`:""}
            ${e(this,W)?`color: ${e(this,W)};`:""}
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
        `;for(let d=0;d<e(this,p).length;d++)a.innerHTML+=`
            .${this.id}-item-${d} {
              animation-delay: ${t+.05*d}s;
            }
      `;return a},Nt=function(){const t=document.createElement("div");t.classList.add(this.id);for(let a=0;a<e(this,p).length;a++)t.innerHTML+=`<div class="${this.id}-item-${a}">${e(this,p).charAt(a)}</div>`;return t};var O,G,Pt,Yt;class fi extends c{constructor(t={}){super(t);s(this,G);s(this,O);n(this,O,t.color&&t.color.length>=2?t.color:["#000","#000"]),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,G,Pt).call(this)),this.addElement(o(this,G,Yt).call(this)),this.finish()}}O=new WeakMap,G=new WeakSet,Pt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  display: block;
  font-size: 0;
  color: ${e(this,O)[0]};
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
  background-color: ${e(this,O)[1]};
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
        `,t},Yt=function(){return`<div class="${this.id}"><div></div><div></div><div></div><div></div></div>`};var rt,nt,at,J,_t,Gt;class ui extends c{constructor(t={}){super(t);s(this,J);s(this,rt);s(this,nt);s(this,at);n(this,rt,t.color||"#fff"),n(this,nt,t.shadowColor||"#000"),n(this,at,t.shadowOpacity||.1),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,J,_t).call(this)),this.addElement(o(this,J,Gt).call(this)),this.finish()}}rt=new WeakMap,nt=new WeakMap,at=new WeakMap,J=new WeakSet,_t=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
.${this.id}-box {
  width: 50px;
  height: 50px;
  background: ${e(this,rt)};
  animation: ${this.id}-animate .5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
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
  background: ${e(this,nt)};
  opacity: ${e(this,at)};
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: ${this.id}-shadow .5s linear infinite;
}
@keyframes ${this.id}-shadow {
  50% {
    transform: scale(1.2,1);
  }
}
        `,t},Gt=function(){return`
        <div class="${this.id}">
          <div class="${this.id}-shadow"></div>
          <div class="${this.id}-box"></div>
        </div>
        `};var ot,K,Jt,Kt;class $i extends c{constructor(t={}){super(t);s(this,K);s(this,ot);n(this,ot,t.color||"#000"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,K,Jt).call(this)),this.addElement(o(this,K,Kt).call(this)),this.finish()}}ot=new WeakMap,K=new WeakSet,Jt=function(){const t=document.createElement("style");return t.innerHTML=`
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
  border: 2px solid ${e(this,ot)};
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
        `,t},Kt=function(){return`<div class="${this.id}"></div>`};var dt,Q,Qt,Ut;class bi extends c{constructor(t={}){super(t);s(this,Q);s(this,dt);n(this,dt,t.color||"#000"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,Q,Qt).call(this)),this.addElement(o(this,Q,Ut).call(this)),this.finish()}}dt=new WeakMap,Q=new WeakSet,Qt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${e(this,dt)};

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
        `,t},Ut=function(){return`<div class="${this.id}"></div>`};var A,b,lt,ht,y,ct,mt,ft,m,pt,Xt,yt,Zt;class gi extends c{constructor(t={}){super(t);s(this,m);s(this,A);s(this,b);s(this,lt);s(this,ht);s(this,y);s(this,ct);s(this,mt);s(this,ft);n(this,A,t.color||"#76DAFF"),n(this,b,t.size||100),n(this,lt,t.borderSize||2),n(this,ht,t.paddingSize||2),n(this,y,o(this,m,pt).call(this,t.value||0)),n(this,ct,t.fontSize||"20px"),n(this,mt,t.fontColor||"#000"),n(this,ft,t.fontWeight||"normal"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,m,yt).call(this,e(this,y))),this.addElement(o(this,m,Zt).call(this)),this.finish()}setValue(t){n(this,y,o(this,m,pt).call(this,t)),this.setChildrenStyle(o(this,m,yt).call(this,e(this,y)));const a=document.querySelector(`.${this.id}-text`);a&&(a.innerHTML=`${t}%`)}}A=new WeakMap,b=new WeakMap,lt=new WeakMap,ht=new WeakMap,y=new WeakMap,ct=new WeakMap,mt=new WeakMap,ft=new WeakMap,m=new WeakSet,pt=function(t){return!t||t<=0?0:t>=100?100:t},Xt=function(t){const l=-e(this,b);return!t||t<=0?0:t>=100?l:0+(t-0)/100*(l-0)},yt=function(t){const a=o(this,m,Xt).call(this,t),d=document.createElement("style");return d.innerHTML=`
.${this.id} {
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${e(this,ht)}px;
  border: ${e(this,lt)}px solid ${e(this,A)};
  border-radius: 50%;
  overflow: hidden;
}

.${this.id}-wave {
  position: relative;
  width: ${e(this,b)}px;
  height: ${e(this,b)}px;
  background-color: ${e(this,A)};
  border-radius: 50%;
}
.${this.id}-wave::before, .${this.id}-wave::after {
  content: "";
  position: absolute;
  width: ${e(this,b)*2}px;
  height: ${e(this,b)*2}px;
  top: ${a}px;
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
  font-size: ${e(this,ct)};
  color: ${e(this,mt)};
  font-weight: ${e(this,ft)};
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
        `,d},Zt=function(){return`<div class="${this.id}"><div class="${this.id}-wave"></div><div class="${this.id}-text">${e(this,y)}%</div></div>`};var I,B,ut,j,L,v,ti,ii,ei;class pi extends c{constructor(t={}){super(t);s(this,v);s(this,I);s(this,B);s(this,ut);s(this,j);s(this,L);n(this,I,t.color||"#FFF"),n(this,B,t.color||"#76DAFF"),t.direction!=="horizontal"&&t.direction!=="vertical"?n(this,L,"vertical"):n(this,L,t.direction),n(this,ut,t.size||"40px"),n(this,j,t.text||"Loading"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,v,ti).call(this)),this.addElement(o(this,v,ei).call(this)),this.finish()}}I=new WeakMap,B=new WeakMap,ut=new WeakMap,j=new WeakMap,L=new WeakMap,v=new WeakSet,ti=function(){const t=document.createElement("style"),a=o(this,v,ii).call(this);return t.innerHTML=`
.${this.id} {
  font-size: ${e(this,ut)};
  font-weight: bold;
  display: inline-block;
  letter-spacing: 2px;
  position: relative;
  color: ${a.backgroundColor};
  box-sizing: border-box;
}
.${this.id}::after {
  content: '${e(this,j)}';
  position: absolute;
  left: 0;
  top: 0;
  color: ${a.fillColor};
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: ${this.id}-animloader 2s linear infinite;
}
${a.keyframes}
        `,t},ii=function(){const t={};return e(this,L)==="horizontal"?(t.backgroundColor=e(this,I),t.fillColor=e(this,B),t.keyframes=`
          @keyframes ${this.id}-animloader {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
        `):e(this,L)==="vertical"&&(t.backgroundColor=e(this,B),t.fillColor=e(this,I),t.keyframes=`
          @keyframes ${this.id}-animloader {
            0% {
              height: 100%;
            }
            100% {
              height: 0%;
            }
          }
        `),t},ei=function(){const t=document.createElement("div");return t.classList.add(this.id),t.innerHTML=e(this,j),t};const vt={SquareLoading:ni,CmSpinnerLoading:di,TripleSpinnerLoading:oi,MeshLoaderLoading:li,BounceLoading:ai,CircleLoaderLoading:hi,CubesLoading:ci,TextLoading:mi,DotJumpLoading:fi,JellyLoading:ui,WaveLoading:$i,DotExpandLoading:bi,WaveValueLoading:gi,TextFillLoading:pi},si=Object.keys(vt),yi=()=>{let r="";return si.forEach(i=>{r+=`
      <div class="card">
        <div class="card-header">${i}</div>
        <div class="card-body" id="${i}-loading"></div>
      </div>
    `}),r};document.querySelector("#app").innerHTML=`
  <div class="title">wj-loading</div>
  <div class="tag-container">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/wj-loading">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/wj-loading">
    <img alt="NPM License" src="https://img.shields.io/npm/l/wj-loading">
  </div>
  <div class="desc">
    <div class="bg">yarn add wj-loading</div>
    <div class="bg">npm install wj-loading</div>
    <div data-url="https://github.com/nlbwqmz/wj-loading" class="url">github</div>
  </div>
  <div class="grid-container">
    ${yi()}
  </div>
`;si.forEach(r=>{if(r!=="WaveValueLoading")new vt[r]({element:document.getElementById(`${r}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0});else{let i=0;const t=new vt.WaveValueLoading({element:document.getElementById(`${r}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0,value:i});setInterval(()=>{i<100?i++:i=0,t.setValue(i)},200)}});const wt=document.querySelectorAll(".url");for(let r=0;r<wt.length;r++)wt[r].addEventListener("click",i=>{var t;window.open((t=i.target)==null?void 0:t.dataset.url)});
