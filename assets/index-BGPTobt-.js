var $t=r=>{throw TypeError(r)};var ot=(r,i,t)=>i.has(r)||$t("Cannot "+t);var e=(r,i,t)=>(ot(r,i,"read from private field"),t?t.call(r):i.get(r)),s=(r,i,t)=>i.has(r)?$t("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(r):i.set(r,t),a=(r,i,t,n)=>(ot(r,i,"write to private field"),n?n.call(r,t):i.set(r,t),t),o=(r,i,t)=>(ot(r,i,"access private method"),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))n(d);new MutationObserver(d=>{for(const l of d)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function t(d){const l={};return d.integrity&&(l.integrity=d.integrity),d.referrerPolicy&&(l.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?l.credentials="include":d.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(d){if(d.ep)return;d.ep=!0;const l=t(d);fetch(d.href,l)}})();const Gt=(r=8)=>{const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let n=0;n<r;n++)t+=i.charAt(Math.floor(Math.random()*i.length));return t};var $,P,C,L,v,G,u,pt,gt,yt,vt,bt;let c=(bt=class{constructor(i={}){s(this,u);s(this,$);s(this,P);s(this,C);s(this,L);s(this,v);s(this,G,(i,t)=>{let n=`
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
    `;return e(this,P)===!0&&(n+=`
      .${this.id}-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `),n});this.id=`wj-loading-${Gt()}`,this.rendered=!1,this.element=o(this,u,vt).call(this,i.element),this.immediate=i.immediate,this.interval=i.interval,this.delayRemove=i.delayRemove,this.afterRemove=i.afterRemove,this.background=i.background||"rgba(0, 0, 0, 0.2)",this.zIndex=this.zIndex||2e3,this.style=document.createElement("style"),this.container=document.createElement("div")}setContainerFlexCenter(i=!0){a(this,P,i)}setChildrenStyle(i){e(this,$)?e(this,$).innerHTML=i.innerHTML:a(this,$,i)}addElement(i){typeof i=="string"?this.container.innerHTML+=i:this.container.appendChild(i)}finish(){o(this,u,pt).call(this),o(this,u,yt).call(this),this.immediate&&this.loading(this.interval)}loading(i){this.rendered||(["relative","absolute","fixed"].includes(window.getComputedStyle(this.element).position)||this.element.classList.add(`${this.id}-relative`),this.element.classList.add(`${this.id}-lock`),document.getElementsByTagName("head")[0].appendChild(this.style),e(this,$)&&document.getElementsByTagName("head")[0].appendChild(e(this,$)),this.element.appendChild(this.container),o(this,u,gt).call(this),this.rendered=!0,i&&i>0&&setTimeout(()=>{this.remove()},i),this.afterRendered&&this.afterRendered())}remove(i){if(!this.rendered)return;const t=()=>{e(this,v)&&e(this,v).disconnect(),this.container&&this.container.remove(),this.style&&this.style.remove(),e(this,$)&&e(this,$).remove(),this.element.classList.contains(`${this.id}-relative`)&&this.element.classList.remove(`${this.id}-relative`),this.element.classList.remove(`${this.id}-lock`),this.rendered=!1,this.afterRemove&&this.afterRemove()},n=i||this.delayRemove||0;n&&n>0?setTimeout(()=>{t()},n):t()}},$=new WeakMap,P=new WeakMap,C=new WeakMap,L=new WeakMap,v=new WeakMap,G=new WeakMap,u=new WeakSet,pt=function(){const i=this.element.getBoundingClientRect(),t=this.element===document.body?window.innerWidth:i.width,n=this.element===document.body?window.innerHeight:i.height;a(this,L,t),a(this,C,n),this.style.innerHTML=e(this,G).call(this,n,t)},gt=function(){a(this,v,new ResizeObserver(()=>{const i=this.element.getBoundingClientRect(),t=this.element===document.body?window.innerWidth:i.width,n=this.element===document.body?window.innerHeight:i.height;(e(this,C)!==n||e(this,L)!==t)&&(a(this,L,t),a(this,C,n),this.style.innerHTML=e(this,G).call(this,n,t),this.handleElementChange&&this.handleElementChange())})),e(this,v).observe(this.element)},yt=function(){this.container.classList.add(`${this.id}-container`)},vt=function(i){if(i)if(typeof i=="string"){const t=document.querySelector(i);if(!t)throw new Error(`未找到当前节点：${i}`);return t}else return i;else return document.body},bt);var k,J,E,p,b,dt,ht,kt;class Jt extends c{constructor(t={}){super(t);s(this,b);s(this,k);s(this,J);s(this,E);s(this,p);a(this,J,t.text||"Loading..."),a(this,E,t.fontColor||"rgba(128, 128, 128, .9)"),a(this,p,t.textVisible||3),a(this,k,t.maxSize),this.setChildrenStyle(o(this,b,ht).call(this)),this.addElement(o(this,b,kt).call(this)),this.afterRendered=()=>{e(this,p)===3&&o(this,b,dt).call(this)},this.handleElementChange=()=>{this.setChildrenStyle(o(this,b,ht).call(this)),e(this,p)===3&&o(this,b,dt).call(this)},this.finish()}}k=new WeakMap,J=new WeakMap,E=new WeakMap,p=new WeakMap,b=new WeakSet,dt=function(){const t=this.element.querySelector(`.${this.id}-text`);t&&(t.offsetWidth<t.scrollWidth?t.style.display="none":t.style.display="block")},ht=function(){const t=this.element.getBoundingClientRect(),n=this.element===document.body?window.innerWidth:t.width,d=this.element===document.body?window.innerHeight:t.height;let l=Math.min(n,d)/4;e(this,k)&&l>e(this,k)&&(l=e(this,k));const h=l/2,ft=document.createElement("style");return ft.innerHTML=`
        .${this.id}-text {
          width: 100%;
          position: absolute;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          ${e(this,E)?`color: ${e(this,E)};`:""}
          top: ${d/2+h+10}px;
          ${e(this,p)===1||e(this,p)===3?"":"display: none;"}
        }
        
        .${this.id} {
          position: absolute;
          width: ${l}px;
          height: ${l}px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
        
        .${this.id} .${this.id}-item {
          width: ${h}px;
          height: ${h}px;
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
          25% {transform: translate(0, ${h}px)} 
          50% {transform: translate(${h}px, ${h}px)} 
          75% {transform: translate(${h}px, 0)} 
        }
        
        @keyframes ${this.id}-item-2_move {
          0%, 100% {transform: translate(0, 0)}
          25% {transform: translate(-${h}px, 0)}
          50% {transform: translate(-${h}px, ${h}px)}
          75% {transform: translate(0, ${h}px)} 
        }
        
        @keyframes ${this.id}-item-3_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(0, -${h}px)} 
          50% {transform: translate(-${h}px, -${h}px)} 
          75% {transform: translate(-${h}px, 0)} 
        }
        
        @keyframes ${this.id}-item-4_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(${h}px, 0)} 
          50% {transform: translate(${h}px, -${h}px)} 
          75% {transform: translate(0, -${h}px)} 
        }
        `,ft},kt=function(){return`
        <div class="${this.id}">
              <div class="${this.id}-item ${this.id}-item-1"></div>
              <div class="${this.id}-item ${this.id}-item-2"></div>
              <div class="${this.id}-item ${this.id}-item-3"></div>
              <div class="${this.id}-item ${this.id}-item-4"></div>
            </div>
            <div class="${this.id}-text">${e(this,J)}</div>
        `};var K,S,I,xt,wt;class Kt extends c{constructor(t={}){super(t);s(this,I);s(this,K);s(this,S);a(this,K,t.color||"#333"),a(this,S,t.size||"20px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,I,xt).call(this)),this.addElement(o(this,I,wt).call(this)),this.finish()}}K=new WeakMap,S=new WeakMap,I=new WeakSet,xt=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id}-bounce {
       text-align: center;
      }
      .${this.id}-bounce>div {
       width: ${e(this,S)};
       height: ${e(this,S)};
       background-color: ${e(this,K)};
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
        `,t},wt=function(){return`
        <div class="${this.id}-bounce">
          <div class="${this.id}-bounce1"></div>
          <div class="${this.id}-bounce2"></div>
          <div class="${this.id}-bounce3"></div>
        </div>
        `};var x,z,A,Ct,Lt;class Qt extends c{constructor(t={}){super(t);s(this,A);s(this,x);s(this,z);a(this,x,t.color&&t.color.length>=3?t.color:["#FF5722","#FF9800","#FFC107"]),a(this,z,t.size||"100px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,A,Ct).call(this)),this.addElement(o(this,A,Lt).call(this)),this.finish()}}x=new WeakMap,z=new WeakMap,A=new WeakSet,Ct=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id} {
        display: block;
        position: relative;
        width: ${e(this,z)};
        height: ${e(this,z)};
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid ${e(this,x)[0]};
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
        border-top-color: ${e(this,x)[1]};
        -webkit-animation: ${this.id}-spin 3s linear infinite;
        animation: ${this.id}-spin 3.5s linear infinite;
      }
      .${this.id}::after {
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-top-color: ${e(this,x)[2]};
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
        `,t},Lt=function(){return`
        <div class="${this.id}"></div>
        `};var w,T,B,Et,St;class Ut extends c{constructor(t={}){super(t);s(this,B);s(this,w);s(this,T);a(this,w,t.color&&t.color.length>=3?t.color:["#F15E41","#BAD375","#26A9E0"]),a(this,T,t.size||"100px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,B,Et).call(this)),this.addElement(o(this,B,St).call(this)),this.finish()}}w=new WeakMap,T=new WeakMap,B=new WeakSet,Et=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            height: ${e(this,T)};
            width: ${e(this,T)};
            border: 3px solid transparent;
            border-radius: 50%;
            border-top: 4px solid ${e(this,w)[0]};
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
            border-top-color: ${e(this,w)[1]};
            -webkit-animation: 3s ${this.id}-spin linear infinite;
            animation: 3s ${this.id}-spin linear infinite;
          }
          
          .${this.id}::after {
            border-top-color: ${e(this,w)[2]};
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
        `,t},St=function(){return`
        <div class="${this.id}"></div>
        `};var Q,O,zt,Tt;class Xt extends c{constructor(t={}){super(t);s(this,O);s(this,Q);a(this,Q,t.color||"#F44336"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,O,zt).call(this)),this.addElement(o(this,O,Tt).call(this)),this.finish()}}Q=new WeakMap,O=new WeakSet,zt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            overflow: hidden;
            height: inherit;
            width: inherit;
          }
          .${this.id} .${this.id}-circle {
            width: 30px;
            height: 30px;
            position: absolute;
            background: ${e(this,Q)};
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
        `,t},Tt=function(){return`
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
        `};var U,q,Ft,Mt;class Zt extends c{constructor(t={}){super(t);s(this,q);s(this,U);a(this,U,t.color||"#F44336"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,q,Ft).call(this)),this.addElement(o(this,q,Mt).call(this)),this.finish()}}U=new WeakMap,q=new WeakSet,Ft=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            position: relative;
            width: auto;
            height: auto;
          }
          
          .${this.id} div {
            height: 10px;
            width: 10px;
            background-color: ${e(this,U)};
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
        `,t},Mt=function(){return`
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
        `};var X,F,V,Ht,Wt;class ti extends c{constructor(t={}){super(t);s(this,V);s(this,X);s(this,F);a(this,X,t.color||"#333"),a(this,F,t.size||"20px"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,V,Ht).call(this)),this.addElement(o(this,V,Wt).call(this)),this.finish()}}X=new WeakMap,F=new WeakMap,V=new WeakSet,Ht=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
          }
          
          .${this.id}-sk-cube {
           width: ${e(this,F)};
           height: ${e(this,F)};
           background-color: ${e(this,X)};
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
        `,t},Wt=function(){return`
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
        `};var M,H,g,j,Rt,It;class ii extends c{constructor(t={}){super(t);s(this,j);s(this,M);s(this,H);s(this,g);a(this,M,t.color||"#333"),a(this,H,t.size||"16px"),a(this,g,t.text||"Loading..."),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,j,Rt).call(this)),this.addElement(o(this,j,It).call(this)),this.finish()}}M=new WeakMap,H=new WeakMap,g=new WeakMap,j=new WeakSet,Rt=function(){let t=.48;const n=document.createElement("style");n.innerHTML=`
          .${this.id} {
            display: flex;
          }
          .${this.id} div {
            animation-name: ${this.id}-loading;
            animation-duration: ${t+.05*(e(this,g).length-1)}s;
            animation-iteration-count: infinite;
            animation-direction: linear;
            ${e(this,H)?`font-size: ${e(this,H)};`:""}
            ${e(this,M)?`color: ${e(this,M)};`:""}
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
        `;for(let d=0;d<e(this,g).length;d++)n.innerHTML+=`
            .${this.id}-item-${d} {
              animation-delay: ${t+.05*d}s;
            }
      `;return n},It=function(){const t=document.createElement("div");t.classList.add(this.id);for(let n=0;n<e(this,g).length;n++)t.innerHTML+=`<div class="${this.id}-item-${n}">${e(this,g).charAt(n)}</div>`;return t};var W,D,At,Bt;class ei extends c{constructor(t={}){super(t);s(this,D);s(this,W);a(this,W,t.color&&t.color.length>=2?t.color:["#000","#000"]),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,D,At).call(this)),this.addElement(o(this,D,Bt).call(this)),this.finish()}}W=new WeakMap,D=new WeakSet,At=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  display: block;
  font-size: 0;
  color: ${e(this,W)[0]};
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
  background-color: ${e(this,W)[1]};
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
        `,t},Bt=function(){return`<div class="${this.id}"><div></div><div></div><div></div><div></div></div>`};var Z,tt,it,Y,Ot,qt;class si extends c{constructor(t={}){super(t);s(this,Y);s(this,Z);s(this,tt);s(this,it);a(this,Z,t.color||"#fff"),a(this,tt,t.shadowColor||"#000"),a(this,it,t.shadowOpacity||.1),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,Y,Ot).call(this)),this.addElement(o(this,Y,qt).call(this)),this.finish()}}Z=new WeakMap,tt=new WeakMap,it=new WeakMap,Y=new WeakSet,Ot=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
.${this.id}-box {
  width: 50px;
  height: 50px;
  background: ${e(this,Z)};
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
  background: ${e(this,tt)};
  opacity: ${e(this,it)};
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
        `,t},qt=function(){return`
        <div class="${this.id}">
          <div class="${this.id}-shadow"></div>
          <div class="${this.id}-box"></div>
        </div>
        `};var et,_,Vt,jt;class ri extends c{constructor(t={}){super(t);s(this,_);s(this,et);a(this,et,t.color||"#000"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,_,Vt).call(this)),this.addElement(o(this,_,jt).call(this)),this.finish()}}et=new WeakMap,_=new WeakSet,Vt=function(){const t=document.createElement("style");return t.innerHTML=`
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
  border: 2px solid ${e(this,et)};
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
        `,t},jt=function(){return`<div class="${this.id}"></div>`};var st,N,Dt,Yt;class ni extends c{constructor(t={}){super(t);s(this,N);s(this,st);a(this,st,t.color||"#000"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,N,Dt).call(this)),this.addElement(o(this,N,Yt).call(this)),this.finish()}}st=new WeakMap,N=new WeakSet,Dt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${e(this,st)};

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
        `,t},Yt=function(){return`<div class="${this.id}"></div>`};var R,m,y,rt,nt,at,f,lt,_t,ct,Nt;class ai extends c{constructor(t={}){super(t);s(this,f);s(this,R);s(this,m);s(this,y);s(this,rt);s(this,nt);s(this,at);a(this,R,t.color||"#76DAFF"),a(this,m,t.size||100),a(this,y,o(this,f,lt).call(this,t.value||0)),a(this,rt,t.fontSize||"20px"),a(this,nt,t.fontColor||"#000"),a(this,at,t.fontWeight||"normal"),this.setContainerFlexCenter(),this.setChildrenStyle(o(this,f,ct).call(this,e(this,y))),this.addElement(o(this,f,Nt).call(this)),this.finish()}setValue(t){a(this,y,o(this,f,lt).call(this,t)),this.setChildrenStyle(o(this,f,ct).call(this,e(this,y)));const n=document.querySelector(`.${this.id}-text`);n&&(n.innerHTML=`${t}%`)}}R=new WeakMap,m=new WeakMap,y=new WeakMap,rt=new WeakMap,nt=new WeakMap,at=new WeakMap,f=new WeakSet,lt=function(t){return!t||t<=0?0:t>=100?100:t},_t=function(t){const l=e(this,m)/2-10,h=-(e(this,m)/2)-10;return!t||t<=0?l:t>=100?h:l+(t-0)/100*(h-l)},ct=function(t){const n=o(this,f,_t).call(this,t),d=document.createElement("style");return d.innerHTML=`
.${this.id} {
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  width: ${e(this,m)}px;
  height: ${e(this,m)}px;
  padding: 5px;
  border: 5px solid ${e(this,R)};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
}

.${this.id}-wave {
  position: relative;
  width: ${e(this,m)}px;
  height: ${e(this,m)}px;
  background-color: ${e(this,R)};
  border-radius: 50%;
}
.${this.id}-wave::before, .${this.id}-wave::after {
  content: "";
  position: absolute;
  width: ${e(this,m)*2}px;
  height: ${e(this,m)*2}px;
  top: ${n}px;
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
  font-size: ${e(this,rt)};
  color: ${e(this,nt)};
  font-weight: ${e(this,at)};
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
        `,d},Nt=function(){return`<div class="${this.id}"><div class="${this.id}-wave"></div><div class="${this.id}-text">${e(this,y)}%</div></div>`};const mt={SquareLoading:Jt,CmSpinnerLoading:Ut,TripleSpinnerLoading:Qt,MeshLoaderLoading:Xt,BounceLoading:Kt,CircleLoaderLoading:Zt,CubesLoading:ti,TextLoading:ii,DotJumpLoading:ei,JellyLoading:si,WaveLoading:ri,DotExpandLoading:ni,WaveValueLoading:ai},Pt=Object.keys(mt),oi=()=>{let r="";return Pt.forEach(i=>{r+=`
      <div class="card">
        <div class="card-header">${i}</div>
        <div class="card-body" id="${i}-loading"></div>
      </div>
    `}),r};document.querySelector("#app").innerHTML=`
  <div class="title">wj-loading</div>
  <div class="desc">
    <div class="bg">yarn add wj-loading</div>
    <div class="bg">npm install wj-loading</div>
    <div data-url="https://github.com/nlbwqmz/wj-loading" class="url">github</div>
  </div>
  <div class="grid-container">
    ${oi()}
  </div>
`;Pt.forEach(r=>{if(r!=="WaveValueLoading")new mt[r]({element:document.getElementById(`${r}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0});else{let i=0;const t=new mt.WaveValueLoading({element:document.getElementById(`${r}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0,value:i});setInterval(()=>{i<100?i++:i=0,t.setValue(i)},200)}});const ut=document.querySelectorAll(".url");for(let r=0;r<ut.length;r++)ut[r].addEventListener("click",i=>{var t;window.open((t=i.target)==null?void 0:t.dataset.url)});
