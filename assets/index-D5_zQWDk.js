var vt=r=>{throw TypeError(r)};var ft=(r,e,t)=>e.has(r)||vt("Cannot "+t);var i=(r,e,t)=>(ft(r,e,"read from private field"),t?t.call(r):e.get(r)),s=(r,e,t)=>e.has(r)?vt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),n=(r,e,t,a)=>(ft(r,e,"write to private field"),a?a.call(r,t):e.set(r,t),t),o=(r,e,t)=>(ft(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))a(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const l of h.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(d){if(d.ep)return;d.ep=!0;const h=t(d);fetch(d.href,h)}})();const ei=(r=8)=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let a=0;a<r;a++)t+=e.charAt(Math.floor(Math.random()*e.length));return t};var u,U,E,S,k,X,$,wt,Ct,Lt,Et,xt;let c=(xt=class{constructor(e={}){s(this,$);s(this,u);s(this,U);s(this,E);s(this,S);s(this,k);s(this,X,(e,t)=>{let a=`
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
        height: ${e}px;
        left: ${this.element.scrollLeft}px;
        top: ${this.element.scrollTop}px;
      }
    `;return i(this,U)===!0&&(a+=`
      .${this.id}-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `),a});this.id=`wj-loading-${ei()}`,this.rendered=!1,this.element=o(this,$,Et).call(this,e.element),this.immediate=e.immediate,this.interval=e.interval,this.delayRemove=e.delayRemove,this.afterRemove=e.afterRemove,this.background=e.background||"rgba(0, 0, 0, 0.2)",this.zIndex=this.zIndex||2e3,this.style=document.createElement("style"),this.container=document.createElement("div")}setContainerFlexCenter(e=!0){n(this,U,e)}setChildrenStyle(e){i(this,u)?i(this,u).innerHTML=e.innerHTML:n(this,u,e)}addElement(e){typeof e=="string"?this.container.innerHTML+=e:this.container.appendChild(e)}finish(){o(this,$,wt).call(this),o(this,$,Lt).call(this),this.immediate&&this.loading(this.interval)}loading(e){this.rendered||(["relative","absolute","fixed"].includes(window.getComputedStyle(this.element).position)||this.element.classList.add(`${this.id}-relative`),this.element.classList.add(`${this.id}-lock`),document.getElementsByTagName("head")[0].appendChild(this.style),i(this,u)&&document.getElementsByTagName("head")[0].appendChild(i(this,u)),this.element.appendChild(this.container),o(this,$,Ct).call(this),this.rendered=!0,e&&e>0&&setTimeout(()=>{this.remove()},e),this.afterRendered&&this.afterRendered())}remove(e){if(!this.rendered)return;const t=()=>{i(this,k)&&i(this,k).disconnect(),this.container&&this.container.remove(),this.style&&this.style.remove(),i(this,u)&&i(this,u).remove(),this.element.classList.contains(`${this.id}-relative`)&&this.element.classList.remove(`${this.id}-relative`),this.element.classList.remove(`${this.id}-lock`),this.rendered=!1,this.afterRemove&&this.afterRemove()},a=e||this.delayRemove||0;a&&a>0?setTimeout(()=>{t()},a):t()}},u=new WeakMap,U=new WeakMap,E=new WeakMap,S=new WeakMap,k=new WeakMap,X=new WeakMap,$=new WeakSet,wt=function(){const e=this.element.getBoundingClientRect(),t=this.element===document.body?window.innerWidth:e.width,a=this.element===document.body?window.innerHeight:e.height;n(this,S,t),n(this,E,a),this.style.innerHTML=i(this,X).call(this,a,t)},Ct=function(){n(this,k,new ResizeObserver(()=>{const e=this.element.getBoundingClientRect(),t=this.element===document.body?window.innerWidth:e.width,a=this.element===document.body?window.innerHeight:e.height;(i(this,E)!==a||i(this,S)!==t)&&(n(this,S,t),n(this,E,a),this.style.innerHTML=i(this,X).call(this,a,t),this.handleElementChange&&this.handleElementChange())})),i(this,k).observe(this.element)},Lt=function(){this.container.classList.add(`${this.id}-container`)},Et=function(e){if(e)if(typeof e=="string"){const t=document.querySelector(e);if(!t)throw new Error(`未找到当前节点：${e}`);return t}else return e;else return document.body},xt);var x,Z,z,g,b,ut,$t,St;class si extends c{constructor(t={}){super(t);s(this,b);s(this,x);s(this,Z);s(this,z);s(this,g);n(this,Z,t.text||"Loading..."),n(this,z,t.fontColor||"rgba(128, 128, 128, .9)"),n(this,g,t.textVisible||3),n(this,x,t.maxSize),this.setChildrenStyle(o(this,b,$t).call(this)),this.addElement(o(this,b,St).call(this)),this.afterRendered=()=>{i(this,g)===3&&o(this,b,ut).call(this)},this.handleElementChange=()=>{this.setChildrenStyle(o(this,b,$t).call(this)),i(this,g)===3&&o(this,b,ut).call(this)},this.finish()}}x=new WeakMap,Z=new WeakMap,z=new WeakMap,g=new WeakMap,b=new WeakSet,ut=function(){const t=this.element.querySelector(`.${this.id}-text`);t&&(t.offsetWidth<t.scrollWidth?t.style.display="none":t.style.display="block")},$t=function(){const t=this.element.getBoundingClientRect(),a=this.element===document.body?window.innerWidth:t.width,d=this.element===document.body?window.innerHeight:t.height;let h=Math.min(a,d)/4;i(this,x)&&h>i(this,x)&&(h=i(this,x));const l=h/2,yt=document.createElement("style");return yt.innerHTML=`
        .${this.id}-text {
          width: 100%;
          position: absolute;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          ${i(this,z)?`color: ${i(this,z)};`:""}
          top: ${d/2+l+10}px;
          ${i(this,g)===1||i(this,g)===3?"":"display: none;"}
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
        `,yt},St=function(){return`
        <div class="${this.id}">
              <div class="${this.id}-item ${this.id}-item-1"></div>
              <div class="${this.id}-item ${this.id}-item-2"></div>
              <div class="${this.id}-item ${this.id}-item-3"></div>
              <div class="${this.id}-item ${this.id}-item-4"></div>
            </div>
            <div class="${this.id}-text">${i(this,Z)}</div>
        `};var tt,T,V,zt,Tt;class ri extends c{constructor(t={}){super(t);s(this,V);s(this,tt);s(this,T);n(this,tt,t.color||"#333"),n(this,T,t.size||"20px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,V,zt).call(this)),this.addElement(o(this,V,Tt).call(this)),this.finish()}}tt=new WeakMap,T=new WeakMap,V=new WeakSet,zt=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id}-bounce {
       text-align: center;
      }
      .${this.id}-bounce>div {
       width: ${i(this,T)};
       height: ${i(this,T)};
       background-color: ${i(this,tt)};
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
        `,t},Tt=function(){return`
        <div class="${this.id}-bounce">
          <div class="${this.id}-bounce1"></div>
          <div class="${this.id}-bounce2"></div>
          <div class="${this.id}-bounce3"></div>
        </div>
        `};var w,F,j,Ft,Mt;class ni extends c{constructor(t={}){super(t);s(this,j);s(this,w);s(this,F);n(this,w,t.color&&t.color.length>=3?t.color:["#FF5722","#FF9800","#FFC107"]),n(this,F,t.size||"100px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,j,Ft).call(this)),this.addElement(o(this,j,Mt).call(this)),this.finish()}}w=new WeakMap,F=new WeakMap,j=new WeakSet,Ft=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id} {
        display: block;
        position: relative;
        width: ${i(this,F)};
        height: ${i(this,F)};
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid ${i(this,w)[0]};
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
        border-top-color: ${i(this,w)[1]};
        -webkit-animation: ${this.id}-spin 3s linear infinite;
        animation: ${this.id}-spin 3.5s linear infinite;
      }
      .${this.id}::after {
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-top-color: ${i(this,w)[2]};
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
        `,t},Mt=function(){return`
        <div class="${this.id}"></div>
        `};var C,M,D,Ht,Wt;class ai extends c{constructor(t={}){super(t);s(this,D);s(this,C);s(this,M);n(this,C,t.color&&t.color.length>=3?t.color:["#F15E41","#BAD375","#26A9E0"]),n(this,M,t.size||"100px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,D,Ht).call(this)),this.addElement(o(this,D,Wt).call(this)),this.finish()}}C=new WeakMap,M=new WeakMap,D=new WeakSet,Ht=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            height: ${i(this,M)};
            width: ${i(this,M)};
            border: 3px solid transparent;
            border-radius: 50%;
            border-top: 4px solid ${i(this,C)[0]};
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
            border-top-color: ${i(this,C)[1]};
            -webkit-animation: 3s ${this.id}-spin linear infinite;
            animation: 3s ${this.id}-spin linear infinite;
          }
          
          .${this.id}::after {
            border-top-color: ${i(this,C)[2]};
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
        `,t},Wt=function(){return`
        <div class="${this.id}"></div>
        `};var it,Y,Rt,At;class oi extends c{constructor(t={}){super(t);s(this,Y);s(this,it);n(this,it,t.color||"#F44336"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,Y,Rt).call(this)),this.addElement(o(this,Y,At).call(this)),this.finish()}}it=new WeakMap,Y=new WeakSet,Rt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            overflow: hidden;
            height: inherit;
            width: inherit;
          }
          .${this.id} .${this.id}-circle {
            width: 30px;
            height: 30px;
            position: absolute;
            background: ${i(this,it)};
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
        `,t},At=function(){return`
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
        `};var et,_,It,Bt;class di extends c{constructor(t={}){super(t);s(this,_);s(this,et);n(this,et,t.color||"#F44336"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,_,It).call(this)),this.addElement(o(this,_,Bt).call(this)),this.finish()}}et=new WeakMap,_=new WeakSet,It=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            position: relative;
            width: auto;
            height: auto;
          }
          
          .${this.id} div {
            height: 10px;
            width: 10px;
            background-color: ${i(this,et)};
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
        `,t},Bt=function(){return`
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
        `};var st,H,N,Ot,qt;class li extends c{constructor(t={}){super(t);s(this,N);s(this,st);s(this,H);n(this,st,t.color||"#333"),n(this,H,t.size||"20px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,N,Ot).call(this)),this.addElement(o(this,N,qt).call(this)),this.finish()}}st=new WeakMap,H=new WeakMap,N=new WeakSet,Ot=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
          }
          
          .${this.id}-sk-cube {
           width: ${i(this,H)};
           height: ${i(this,H)};
           background-color: ${i(this,st)};
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
        `};var W,R,p,P,Vt,jt;class hi extends c{constructor(t={}){super(t);s(this,P);s(this,W);s(this,R);s(this,p);n(this,W,t.color||"#333"),n(this,R,t.size||"16px"),n(this,p,t.text||"Loading..."),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,P,Vt).call(this)),this.addElement(o(this,P,jt).call(this)),this.finish()}}W=new WeakMap,R=new WeakMap,p=new WeakMap,P=new WeakSet,Vt=function(){let t=.48;const a=document.createElement("style");a.innerHTML=`
          .${this.id} {
            display: flex;
          }
          .${this.id} div {
            animation-name: ${this.id}-loading;
            animation-duration: ${t+.05*(i(this,p).length-1)}s;
            animation-iteration-count: infinite;
            animation-direction: linear;
            ${i(this,R)?`font-size: ${i(this,R)};`:""}
            ${i(this,W)?`color: ${i(this,W)};`:""}
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
        `;for(let d=0;d<i(this,p).length;d++)a.innerHTML+=`
            .${this.id}-item-${d} {
              animation-delay: ${t+.05*d}s;
            }
      `;return a},jt=function(){const t=document.createElement("div");t.classList.add(this.id);for(let a=0;a<i(this,p).length;a++)t.innerHTML+=`<div class="${this.id}-item-${a}">${i(this,p).charAt(a)}</div>`;return t};var A,G,Dt,Yt;class ci extends c{constructor(t={}){super(t);s(this,G);s(this,A);n(this,A,t.color&&t.color.length>=2?t.color:["#000","#000"]),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,G,Dt).call(this)),this.addElement(o(this,G,Yt).call(this)),this.finish()}}A=new WeakMap,G=new WeakSet,Dt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  display: block;
  font-size: 0;
  color: ${i(this,A)[0]};
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
  background-color: ${i(this,A)[1]};
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
        `,t},Yt=function(){return`<div class="${this.id}"><div></div><div></div><div></div><div></div></div>`};var rt,nt,at,J,_t,Nt;class mi extends c{constructor(t={}){super(t);s(this,J);s(this,rt);s(this,nt);s(this,at);n(this,rt,t.color||"#fff"),n(this,nt,t.shadowColor||"#000"),n(this,at,t.shadowOpacity||.1),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,J,_t).call(this)),this.addElement(o(this,J,Nt).call(this)),this.finish()}}rt=new WeakMap,nt=new WeakMap,at=new WeakMap,J=new WeakSet,_t=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
.${this.id}-box {
  width: 50px;
  height: 50px;
  background: ${i(this,rt)};
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
  background: ${i(this,nt)};
  opacity: ${i(this,at)};
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
        `,t},Nt=function(){return`
        <div class="${this.id}">
          <div class="${this.id}-shadow"></div>
          <div class="${this.id}-box"></div>
        </div>
        `};var ot,K,Pt,Gt;class fi extends c{constructor(t={}){super(t);s(this,K);s(this,ot);n(this,ot,t.color||"#000"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,K,Pt).call(this)),this.addElement(o(this,K,Gt).call(this)),this.finish()}}ot=new WeakMap,K=new WeakSet,Pt=function(){const t=document.createElement("style");return t.innerHTML=`
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
  border: 2px solid ${i(this,ot)};
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
        `,t},Gt=function(){return`<div class="${this.id}"></div>`};var dt,Q,Jt,Kt;class ui extends c{constructor(t={}){super(t);s(this,Q);s(this,dt);n(this,dt,t.color||"#000"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,Q,Jt).call(this)),this.addElement(o(this,Q,Kt).call(this)),this.finish()}}dt=new WeakMap,Q=new WeakSet,Jt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${i(this,dt)};

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
        `,t},Kt=function(){return`<div class="${this.id}"></div>`};var I,m,y,lt,ht,ct,f,bt,Qt,gt,Ut;class $i extends c{constructor(t={}){super(t);s(this,f);s(this,I);s(this,m);s(this,y);s(this,lt);s(this,ht);s(this,ct);n(this,I,t.color||"#76DAFF"),n(this,m,t.size||100),n(this,y,o(this,f,bt).call(this,t.value||0)),n(this,lt,t.fontSize||"20px"),n(this,ht,t.fontColor||"#000"),n(this,ct,t.fontWeight||"normal"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,f,gt).call(this,i(this,y))),this.addElement(o(this,f,Ut).call(this)),this.finish()}setValue(t){n(this,y,o(this,f,bt).call(this,t)),this.setChildrenStyle(o(this,f,gt).call(this,i(this,y)));const a=document.querySelector(`.${this.id}-text`);a&&(a.innerHTML=`${t}%`)}}I=new WeakMap,m=new WeakMap,y=new WeakMap,lt=new WeakMap,ht=new WeakMap,ct=new WeakMap,f=new WeakSet,bt=function(t){return!t||t<=0?0:t>=100?100:t},Qt=function(t){const h=i(this,m)/2-10,l=-(i(this,m)/2)-10;return!t||t<=0?h:t>=100?l:h+(t-0)/100*(l-h)},gt=function(t){const a=o(this,f,Qt).call(this,t),d=document.createElement("style");return d.innerHTML=`
.${this.id} {
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  width: ${i(this,m)}px;
  height: ${i(this,m)}px;
  padding: 5px;
  border: 5px solid ${i(this,I)};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
}

.${this.id}-wave {
  position: relative;
  width: ${i(this,m)}px;
  height: ${i(this,m)}px;
  background-color: ${i(this,I)};
  border-radius: 50%;
}
.${this.id}-wave::before, .${this.id}-wave::after {
  content: "";
  position: absolute;
  width: ${i(this,m)*2}px;
  height: ${i(this,m)*2}px;
  top: ${a}px;
  left: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 45%;
  transition: top 0.5s ease;
  transform: translate(-50%, -70%) rotate(0);
  -webkit-animation: ${this.id}-rotate 6s linear infinite;
          animation: ${this.id}-rotate 6s linear infinite;
  z-index: 1;
}
.${this.id}-wave::after {
  border-radius: 47%;
  background-color: rgba(255, 255, 255, 0.9);
  transform: translate(-50%, -70%) rotate(0);
  -webkit-animation: ${this.id}-rotate 10s linear -5s infinite;
          animation: ${this.id}-rotate 10s linear -5s infinite;
  z-index: 2;
}

.${this.id}-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${i(this,lt)};
  color: ${i(this,ht)};
  font-weight: ${i(this,ct)};
  z-index: 10;
}

@-webkit-keyframes ${this.id}-rotate {
  50% {
    transform: translate(-50%, -73%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}

@keyframes ${this.id}-rotate {
  50% {
    transform: translate(-50%, -73%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}
        `,d},Ut=function(){return`<div class="${this.id}"><div class="${this.id}-wave"></div><div class="${this.id}-text">${i(this,y)}%</div></div>`};var B,O,mt,q,L,v,Xt,Zt,ti;class bi extends c{constructor(t={}){super(t);s(this,v);s(this,B);s(this,O);s(this,mt);s(this,q);s(this,L);n(this,B,t.color||"#FFF"),n(this,O,t.color||"#76DAFF"),t.direction!=="horizontal"&&t.direction!=="vertical"?n(this,L,"vertical"):n(this,L,t.direction),n(this,mt,t.size||"40px"),n(this,q,t.text||"Loading"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,v,Xt).call(this)),this.addElement(o(this,v,ti).call(this)),this.finish()}}B=new WeakMap,O=new WeakMap,mt=new WeakMap,q=new WeakMap,L=new WeakMap,v=new WeakSet,Xt=function(){const t=document.createElement("style"),a=o(this,v,Zt).call(this);return t.innerHTML=`
.${this.id} {
  font-size: ${i(this,mt)};
  font-weight: bold;
  display: inline-block;
  letter-spacing: 2px;
  position: relative;
  color: ${a.backgroundColor};
  box-sizing: border-box;
}
.${this.id}::after {
  content: '${i(this,q)}';
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
        `,t},Zt=function(){const t={};return i(this,L)==="horizontal"?(t.backgroundColor=i(this,B),t.fillColor=i(this,O),t.keyframes=`
          @keyframes ${this.id}-animloader {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
        `):i(this,L)==="vertical"&&(t.backgroundColor=i(this,O),t.fillColor=i(this,B),t.keyframes=`
          @keyframes ${this.id}-animloader {
            0% {
              height: 100%;
            }
            100% {
              height: 0%;
            }
          }
        `),t},ti=function(){const t=document.createElement("div");return t.classList.add(this.id),t.innerHTML=i(this,q),t};const pt={SquareLoading:si,CmSpinnerLoading:ai,TripleSpinnerLoading:ni,MeshLoaderLoading:oi,BounceLoading:ri,CircleLoaderLoading:di,CubesLoading:li,TextLoading:hi,DotJumpLoading:ci,JellyLoading:mi,WaveLoading:fi,DotExpandLoading:ui,WaveValueLoading:$i,TextFillLoading:bi},ii=Object.keys(pt),gi=()=>{let r="";return ii.forEach(e=>{r+=`
      <div class="card">
        <div class="card-header">${e}</div>
        <div class="card-body" id="${e}-loading"></div>
      </div>
    `}),r};document.querySelector("#app").innerHTML=`
  <div class="title">wj-loading</div>
  <div class="desc">
    <div class="bg">yarn add wj-loading</div>
    <div class="bg">npm install wj-loading</div>
    <div data-url="https://github.com/nlbwqmz/wj-loading" class="url">github</div>
  </div>
  <div class="grid-container">
    ${gi()}
  </div>
`;ii.forEach(r=>{if(r!=="WaveValueLoading")new pt[r]({element:document.getElementById(`${r}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0});else{let e=0;const t=new pt.WaveValueLoading({element:document.getElementById(`${r}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0,value:e});setInterval(()=>{e<100?e++:e=0,t.setValue(e)},200)}});const kt=document.querySelectorAll(".url");for(let r=0;r<kt.length;r++)kt[r].addEventListener("click",e=>{var t;window.open((t=e.target)==null?void 0:t.dataset.url)});
