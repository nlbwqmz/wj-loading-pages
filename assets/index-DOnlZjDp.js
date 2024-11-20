var K=s=>{throw TypeError(s)};var J=(s,i,t)=>i.has(s)||K("Cannot "+t);var e=(s,i,t)=>(J(s,i,"read from private field"),t?t.call(s):i.get(s)),r=(s,i,t)=>i.has(s)?K("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(s):i.set(s,t),d=(s,i,t,l)=>(J(s,i,"write to private field"),l?l.call(s,t):i.set(s,t),t),n=(s,i,t)=>(J(s,i,"access private method"),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const zt=(s=8)=>{const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let l=0;l<s;l++)t+=i.charAt(Math.floor(Math.random()*i.length));return t};var m,X,Z,tt,U;let h=(U=class{constructor(i){r(this,m);this.id=`wj-loading-${zt()}`,console.log(this.id),this.rendered=!1,this.element=n(this,m,tt).call(this,i.element),this.immediate=i.immediate,this.interval=i.interval,this.afterRemove=i.afterRemove,this.background=i.background||"none",this.zIndex=this.zIndex||2e3,this.style=document.createElement("style"),this.container=document.createElement("div"),n(this,m,X).call(this),n(this,m,Z).call(this)}setContainerFlexCenter(){this.style.innerHTML+=`
      .${this.id}-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}addStyle(i){this.style.appendChild(i)}addElement(i){typeof i=="string"?this.container.innerHTML+=i:this.container.appendChild(i)}finish(){this.immediate&&this.loading()}loading(){this.rendered||(["relative","absolute","fixed"].includes(this.element.style.position)||this.element.classList.add(`${this.id}-relative`),this.element.classList.add(`${this.id}-lock`),document.getElementsByTagName("head")[0].appendChild(this.style),this.element.appendChild(this.container),this.rendered=!0,this.afterRendered&&this.afterRendered(),this.interval&&this.interval>0&&setTimeout(()=>{this.remove()},this.interval))}remove(){this.rendered&&(this.container&&this.container.remove(),this.style&&this.style.remove(),this.element.classList.contains(`${this.id}-relative`)&&this.element.classList.remove(`${this.id}-relative`),this.element.classList.remove(`${this.id}-lock`),this.rendered=!1,this.afterRemove&&this.afterRemove())}},m=new WeakSet,X=function(){const i=this.element===document.body?window.innerHeight:this.element.offsetHeight;this.style.innerHTML=`
      .${this.id}-relative {
        position: relative;
      }
      
      .${this.id}-lock {
          overflow: hidden !important;
      }
      
      .${this.id}-container {
        z-index: ${this.zIndex};
        background: ${this.background};
        position: absolute;
        width: 100%;
        height: ${i}px;
        left: ${this.element.scrollLeft}px;
        top: ${this.element.scrollTop}px;
      }
    `},Z=function(){this.container.classList.add(`${this.id}-container`)},tt=function(i){if(i)if(typeof i=="string"){const t=document.querySelector(i);if(!t)throw new Error(`未找到当前节点：${i}`);return t}else return i;else return document.body},U);var $,O,v,b,f,it,et,st;class Ft extends h{constructor(t){super(t);r(this,f);r(this,$);r(this,O);r(this,v);r(this,b);d(this,O,t.text||"Loading..."),d(this,v,t.fontColor||"rgba(128, 128, 128, .9)"),d(this,b,t.textVisible||3),d(this,$,t.maxSize),this.addStyle(n(this,f,et).call(this)),this.addElement(n(this,f,st).call(this)),this.afterRendered=()=>{e(this,b)===3&&n(this,f,it).call(this)},this.finish()}}$=new WeakMap,O=new WeakMap,v=new WeakMap,b=new WeakMap,f=new WeakSet,it=function(){const t=this.element.querySelector(`.${this.id}-text`);t&&(t.offsetWidth<t.scrollWidth?t.style.display="none":t.style.display="block")},et=function(){const t=this.element===document.body?window.innerWidth:this.element.offsetWidth,l=this.element===document.body?window.innerHeight:this.element.offsetHeight;let o=Math.min(t,l)/4;e(this,$)&&o>e(this,$)&&(o=e(this,$));const a=o/2,g=document.createElement("style");return g.innerHTML=`
        .${this.id}-text {
          width: 100%;
          position: absolute;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          ${e(this,v)?`color: ${e(this,v)};`:""}
          top: ${l/2+a+10}px;
          ${e(this,b)===1||e(this,b)===3?"":"display: none;"}
        }
        
        .${this.id} {
          position: absolute;
          width: ${o}px;
          height: ${o}px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
        
        .${this.id} .${this.id}-item {
          width: ${a}px;
          height: ${a}px;
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
          25% {transform: translate(0, ${a}px)} 
          50% {transform: translate(${a}px, ${a}px)} 
          75% {transform: translate(${a}px, 0)} 
        }
        
        @keyframes ${this.id}-item-2_move {
          0%, 100% {transform: translate(0, 0)}
          25% {transform: translate(-${a}px, 0)}
          50% {transform: translate(-${a}px, ${a}px)}
          75% {transform: translate(0, ${a}px)} 
        }
        
        @keyframes ${this.id}-item-3_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(0, -${a}px)} 
          50% {transform: translate(-${a}px, -${a}px)} 
          75% {transform: translate(-${a}px, 0)} 
        }
        
        @keyframes ${this.id}-item-4_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(${a}px, 0)} 
          50% {transform: translate(${a}px, -${a}px)} 
          75% {transform: translate(0, -${a}px)} 
        }
        `,g},st=function(){return`
        <div class="${this.id}">
              <div class="${this.id}-item ${this.id}-item-1"></div>
              <div class="${this.id}-item ${this.id}-item-2"></div>
              <div class="${this.id}-item ${this.id}-item-3"></div>
              <div class="${this.id}-item ${this.id}-item-4"></div>
            </div>
            <div class="${this.id}-text">${e(this,O)}</div>
        `};var D,y,S,rt,at;class Tt extends h{constructor(t){super(t);r(this,S);r(this,D);r(this,y);d(this,D,t.color||"#333"),d(this,y,t.size||"20px"),this.setContainerFlexCenter(),this.addStyle(n(this,S,rt).call(this)),this.addElement(n(this,S,at).call(this)),this.finish()}}D=new WeakMap,y=new WeakMap,S=new WeakSet,rt=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id}-bounce {
       text-align: center;
      }
      
      .${this.id}-bounce>div {
       width: ${e(this,y)};
       height: ${e(this,y)};
       background-color: ${e(this,D)};
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
        `,t},at=function(){return`
        <div class="${this.id}-bounce">
          <div class="${this.id}-bounce1"></div>
          <div class="${this.id}-bounce2"></div>
          <div class="${this.id}-bounce3"></div>
        </div>
        `};var p,k,z,nt,ot;class Mt extends h{constructor(t){super(t);r(this,z);r(this,p);r(this,k);d(this,p,t.color&&t.color.length>=3?t.color:["#FF5722","#FF9800","#FFC107"]),d(this,k,t.size||"100px"),this.setContainerFlexCenter(),this.addStyle(n(this,z,nt).call(this)),this.addElement(n(this,z,ot).call(this)),this.finish()}}p=new WeakMap,k=new WeakMap,z=new WeakSet,nt=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id} {
        display: block;
        position: relative;
        width: ${e(this,k)};
        height: ${e(this,k)};
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid ${e(this,p)[0]};
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
        border-top-color: ${e(this,p)[1]};
        -webkit-animation: ${this.id}-spin 3s linear infinite;
        animation: ${this.id}-spin 3.5s linear infinite;
      }
      .${this.id}::after {
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-top-color: ${e(this,p)[2]};
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
        `,t},ot=function(){return`
        <div class="${this.id}"></div>
        `};var u,x,F,dt,lt;class Ht extends h{constructor(t){super(t);r(this,F);r(this,u);r(this,x);d(this,u,t.color&&t.color.length>=3?t.color:["#F15E41","#BAD375","#26A9E0"]),d(this,x,t.size||"100px"),this.setContainerFlexCenter(),this.addStyle(n(this,F,dt).call(this)),this.addElement(n(this,F,lt).call(this)),this.finish()}}u=new WeakMap,x=new WeakMap,F=new WeakSet,dt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            height: ${e(this,x)};
            width: ${e(this,x)};
            border: 3px solid transparent;
            border-radius: 50%;
            border-top: 4px solid ${e(this,u)[0]};
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
            border-top-color: ${e(this,u)[1]};
            -webkit-animation: 3s ${this.id}-spin linear infinite;
            animation: 3s ${this.id}-spin linear infinite;
          }
          
          .${this.id}::after {
            border-top-color: ${e(this,u)[2]};
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
        `,t},lt=function(){return`
        <div class="${this.id}"></div>
        `};var R,T,ht,ct;class At extends h{constructor(t){super(t);r(this,T);r(this,R);d(this,R,t.color||"#F44336"),this.setContainerFlexCenter(),this.addStyle(n(this,T,ht).call(this)),this.addElement(n(this,T,ct).call(this)),this.finish()}}R=new WeakMap,T=new WeakSet,ht=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            overflow: hidden;
            height: inherit;
            width: inherit;
          }
          .${this.id} .${this.id}-circle {
            width: 30px;
            height: 30px;
            position: absolute;
            background: ${e(this,R)};
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
        `,t},ct=function(){return`
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
        `};var Y,M,mt,ft;class Wt extends h{constructor(t){super(t);r(this,M);r(this,Y);d(this,Y,t.color||"#F44336"),this.setContainerFlexCenter(),this.addStyle(n(this,M,mt).call(this)),this.addElement(n(this,M,ft).call(this)),this.finish()}}Y=new WeakMap,M=new WeakSet,mt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            position: relative;
            width: auto;
            height: auto;
          }
          
          .${this.id} div {
            height: 10px;
            width: 10px;
            background-color: ${e(this,Y)};
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
        `,t},ft=function(){return`
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
        `};var _,w,H,$t,bt;class qt extends h{constructor(t){super(t);r(this,H);r(this,_);r(this,w);d(this,_,t.color||"#333"),d(this,w,t.size||"20px"),this.setContainerFlexCenter(),this.addStyle(n(this,H,$t).call(this)),this.addElement(n(this,H,bt).call(this)),this.finish()}}_=new WeakMap,w=new WeakMap,H=new WeakSet,$t=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
          }
          
          .${this.id}-sk-cube {
           width: ${e(this,w)};
           height: ${e(this,w)};
           background-color: ${e(this,_)};
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
        `,t},bt=function(){return`
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
        `};var L,E,c,A,pt,ut;class jt extends h{constructor(t){super(t);r(this,A);r(this,L);r(this,E);r(this,c);d(this,L,t.color||"#333"),d(this,E,t.size||"16px"),d(this,c,t.text||"Loading..."),console.log(e(this,c).length),this.setContainerFlexCenter(),this.addStyle(n(this,A,pt).call(this)),this.addElement(n(this,A,ut).call(this)),this.finish()}}L=new WeakMap,E=new WeakMap,c=new WeakMap,A=new WeakSet,pt=function(){let t=.48;const l=document.createElement("style");l.innerHTML=`
          .${this.id} {
            display: flex;
          }
          .${this.id} div {
            animation-name: ${this.id}-loading;
            animation-duration: ${t+.05*(e(this,c).length-1)}s;
            animation-iteration-count: infinite;
            animation-direction: linear;
            ${e(this,E)?`font-size: ${e(this,E)};`:""}
            ${e(this,L)?`color: ${e(this,L)};`:""}
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
        `;for(let o=0;o<e(this,c).length;o++)l.innerHTML+=`
            .${this.id}-item-${o} {
              animation-delay: ${t+.05*o}s;
            }
      `;return l},ut=function(){const t=document.createElement("div");t.classList.add(this.id);for(let l=0;l<e(this,c).length;l++)t.innerHTML+=`<div class="${this.id}-item-${l}">${e(this,c).charAt(l)}</div>`;return t};var C,W,gt,vt;class Bt extends h{constructor(t){super(t);r(this,W);r(this,C);d(this,C,t.color&&t.color.length>=2?t.color:["#000","#000"]),this.setContainerFlexCenter(),this.addStyle(n(this,W,gt).call(this)),this.addElement(n(this,W,vt).call(this)),this.finish()}}C=new WeakMap,W=new WeakSet,gt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  display: block;
  font-size: 0;
  color: ${e(this,C)[0]};
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
  background-color: ${e(this,C)[1]};
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
        `,t},vt=function(){return`<div class="${this.id}"><div></div><div></div><div></div><div></div></div>`};var I,N,P,q,yt,kt;class Ot extends h{constructor(t){super(t);r(this,q);r(this,I);r(this,N);r(this,P);d(this,I,t.color||"#fff"),d(this,N,t.shadowColor||"#000"),d(this,P,t.shadowOpacity||.1),this.setContainerFlexCenter(),this.addStyle(n(this,q,yt).call(this)),this.addElement(n(this,q,kt).call(this)),this.finish()}}I=new WeakMap,N=new WeakMap,P=new WeakMap,q=new WeakSet,yt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
.${this.id}-box {
  width: 50px;
  height: 50px;
  background: ${e(this,I)};
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
  background: ${e(this,N)};
  opacity: ${e(this,P)};
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
        `,t},kt=function(){return`
        <div class="${this.id}">
          <div class="${this.id}-shadow"></div>
          <div class="${this.id}-box"></div>
        </div>
        `};var V,j,xt,wt;class Dt extends h{constructor(t){super(t);r(this,j);r(this,V);d(this,V,t.color||"#000"),this.setContainerFlexCenter(),this.addStyle(n(this,j,xt).call(this)),this.addElement(n(this,j,wt).call(this)),this.finish()}}V=new WeakMap,j=new WeakSet,xt=function(){const t=document.createElement("style");return t.innerHTML=`
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
  border: 2px solid ${e(this,V)};
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
        `,t},wt=function(){return`<div class="${this.id}"></div>`};var G,B,Lt,Et;class Rt extends h{constructor(t){super(t);r(this,B);r(this,G);d(this,G,t.color||"#000"),this.setContainerFlexCenter(),this.addStyle(n(this,B,Lt).call(this)),this.addElement(n(this,B,Et).call(this)),this.finish()}}G=new WeakMap,B=new WeakSet,Lt=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${e(this,G)};

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
        `,t},Et=function(){return`<div class="${this.id}"></div>`};const Ct={SquareLoading:Ft,CmSpinnerLoading:Ht,TripleSpinnerLoading:Mt,MeshLoaderLoading:At,BounceLoading:Tt,CircleLoaderLoading:Wt,CubesLoading:qt,TextLoading:jt,DotJumpLoading:Bt,JellyLoading:Ot,WaveLoading:Dt,DotExpandLoading:Rt},St=Object.keys(Ct),Yt=()=>{let s="";return St.forEach(i=>{s+=`
      <div class="card">
        <div class="card-header">${i}</div>
        <div class="card-body" id="${i}-loading"></div>
      </div>
    `}),s};document.querySelector("#app").innerHTML=`
  <div class="title">wj-loading</div>
  <div class="desc">
    <div class="bg">yarn add wj-loading</div>
    <div class="bg">npm install wj-loading</div>
    <div data-url="https://github.com/nlbwqmz/wj-loading" class="url">github</div>
  </div>
  <div class="grid-container">
    ${Yt()}
  </div>
`;St.forEach(s=>{new Ct[s]({element:document.getElementById(`${s}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0})});const Q=document.querySelectorAll(".url");for(let s=0;s<Q.length;s++)Q[s].addEventListener("click",i=>{var t;window.open((t=i.target)==null?void 0:t.dataset.url)});
