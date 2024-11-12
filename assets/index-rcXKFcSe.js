var B=s=>{throw TypeError(s)};var j=(s,i,t)=>i.has(s)||B("Cannot "+t);var r=(s,i,t)=>(j(s,i,"read from private field"),t?t.call(s):i.get(s)),n=(s,i,t)=>i.has(s)?B("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(s):i.set(s,t),d=(s,i,t,a)=>(j(s,i,"write to private field"),a?a.call(s,t):i.set(s,t),t),o=(s,i,t)=>(j(s,i,"access private method"),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const h of e)if(h.type==="childList")for(const _ of h.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&a(_)}).observe(document,{childList:!0,subtree:!0});function t(e){const h={};return e.integrity&&(h.integrity=e.integrity),e.referrerPolicy&&(h.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?h.credentials="include":e.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(e){if(e.ep)return;e.ep=!0;const h=t(e);fetch(e.href,h)}})();const lt=(s=8)=>{const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let a=0;a<s;a++)t+=i.charAt(Math.floor(Math.random()*i.length));return t};var c,P,I,V,N;let f=(N=class{constructor(i){n(this,c);this.id=`wj-loading-${lt()}`,console.log(this.id),this.rendered=!1,this.element=o(this,c,V).call(this,i.element),this.immediate=i.immediate,this.interval=i.interval,this.afterRemove=i.afterRemove,this.background=i.background||"none",this.style=document.createElement("style"),this.container=document.createElement("div"),o(this,c,P).call(this),o(this,c,I).call(this)}setContainerFlexCenter(){this.style.innerHTML+=`
      .${this.id}-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}addStyle(i){this.style.appendChild(i)}addElement(i){typeof i=="string"?this.container.innerHTML+=i:this.container.appendChild(i)}finish(){this.immediate&&this.loading()}loading(){this.rendered||(["relative","absolute","fixed"].includes(this.element.style.position)||this.element.classList.add(`${this.id}-relative`),this.element.classList.add(`${this.id}-lock`),document.getElementsByTagName("head")[0].appendChild(this.style),this.element.appendChild(this.container),this.rendered=!0,this.afterRendered&&this.afterRendered(),this.interval&&this.interval>0&&setTimeout(()=>{this.remove()},this.interval))}remove(){this.rendered&&(this.container&&this.container.remove(),this.style&&this.style.remove(),this.element.classList.contains(`${this.id}-relative`)&&this.element.classList.remove(`${this.id}-relative`),this.element.classList.remove(`${this.id}-lock`),this.rendered=!1,this.afterRemove&&this.afterRemove())}},c=new WeakSet,P=function(){const i=this.element===document.body?window.innerHeight:this.element.offsetHeight;this.style.innerHTML=`
      .${this.id}-relative {
        position: relative;
      }
      
      .${this.id}-lock {
          overflow: hidden !important;
      }
      
      .${this.id}-container {
        background: ${this.background};
        position: absolute;
        width: 100%;
        height: ${i}px;
        left: ${this.element.scrollLeft}px;
        top: ${this.element.scrollTop}px;
      }
    `},I=function(){this.container.classList.add(`${this.id}-container`)},V=function(i){if(i)if(typeof i=="string"){const t=document.querySelector(i);if(!t)throw new Error(`未找到当前节点：${i}`);return t}else return i;else return document.body},N);var $,M,p,u,m,W,Y,G;class ct extends f{constructor(t){super(t);n(this,m);n(this,$);n(this,M);n(this,p);n(this,u);d(this,M,t.text||"Loading..."),d(this,p,t.fontColor||"rgba(128, 128, 128, .9)"),d(this,u,t.textVisible||3),d(this,$,t.maxSize),this.addStyle(o(this,m,Y).call(this)),this.addElement(o(this,m,G).call(this)),this.afterRendered=()=>{r(this,u)===3&&o(this,m,W).call(this)},this.finish()}}$=new WeakMap,M=new WeakMap,p=new WeakMap,u=new WeakMap,m=new WeakSet,W=function(){const t=this.element.querySelector(`.${this.id}-text`);t&&(t.offsetWidth<t.scrollWidth?t.style.display="none":t.style.display="block")},Y=function(){const t=this.element===document.body?window.innerHeight:this.element.offsetHeight;let a=Math.min(this.element.offsetWidth,this.element.offsetHeight)/4;r(this,$)&&a>r(this,$)&&(a=r(this,$));const e=a/2,h=document.createElement("style");return h.innerHTML=`
        .${this.id}-text {
          width: 100%;
          position: absolute;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          ${r(this,p)?`color: ${r(this,p)};`:""}
          top: ${t/2+e+10}px;
          ${r(this,u)===1||r(this,u)===3?"":"display: none;"}
        }
        
        .${this.id} {
          position: absolute;
          width: ${a}px;
          height: ${a}px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
        
        .${this.id} .${this.id}-item {
          width: ${e}px;
          height: ${e}px;
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
          25% {transform: translate(0, ${e}px)} 
          50% {transform: translate(${e}px, ${e}px)} 
          75% {transform: translate(${e}px, 0)} 
        }
        
        @keyframes ${this.id}-item-2_move {
          0%, 100% {transform: translate(0, 0)}
          25% {transform: translate(-${e}px, 0)}
          50% {transform: translate(-${e}px, ${e}px)}
          75% {transform: translate(0, ${e}px)} 
        }
        
        @keyframes ${this.id}-item-3_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(0, -${e}px)} 
          50% {transform: translate(-${e}px, -${e}px)} 
          75% {transform: translate(-${e}px, 0)} 
        }
        
        @keyframes ${this.id}-item-4_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(${e}px, 0)} 
          50% {transform: translate(${e}px, -${e}px)} 
          75% {transform: translate(0, -${e}px)} 
        }
        `,h},G=function(){return`
        <div class="${this.id}">
              <div class="${this.id}-item ${this.id}-item-1"></div>
              <div class="${this.id}-item ${this.id}-item-2"></div>
              <div class="${this.id}-item ${this.id}-item-3"></div>
              <div class="${this.id}-item ${this.id}-item-4"></div>
            </div>
            <div class="${this.id}-text">${r(this,M)}</div>
        `};var q,v,E,K,J;class mt extends f{constructor(t){super(t);n(this,E);n(this,q);n(this,v);d(this,q,t.color||"#333"),d(this,v,t.size||"20px"),this.setContainerFlexCenter(),this.addStyle(o(this,E,K).call(this)),this.addElement(o(this,E,J).call(this)),this.finish()}}q=new WeakMap,v=new WeakMap,E=new WeakSet,K=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id}-bounce {
       text-align: center;
      }
      
      .${this.id}-bounce>div {
       width: ${r(this,v)};
       height: ${r(this,v)};
       background-color: ${r(this,q)};
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
        `,t},J=function(){return`
        <div class="${this.id}-bounce">
          <div class="${this.id}-bounce1"></div>
          <div class="${this.id}-bounce2"></div>
          <div class="${this.id}-bounce3"></div>
        </div>
        `};var b,y,C,Q,U;class ft extends f{constructor(t){super(t);n(this,C);n(this,b);n(this,y);d(this,b,t.color&&t.color.length>=3?t.color:["#FF5722","#FF9800","#FFC107"]),d(this,y,t.size||"100px"),this.setContainerFlexCenter(),this.addStyle(o(this,C,Q).call(this)),this.addElement(o(this,C,U).call(this)),this.finish()}}b=new WeakMap,y=new WeakMap,C=new WeakSet,Q=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id} {
        display: block;
        position: relative;
        width: ${r(this,y)};
        height: ${r(this,y)};
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid ${r(this,b)[0]};
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
        border-top-color: ${r(this,b)[1]};
        -webkit-animation: ${this.id}-spin 3s linear infinite;
        animation: ${this.id}-spin 3.5s linear infinite;
      }
      .${this.id}::after {
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-top-color: ${r(this,b)[2]};
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
        `,t},U=function(){return`
        <div class="${this.id}"></div>
        `};var g,k,S,X,Z;class $t extends f{constructor(t){super(t);n(this,S);n(this,g);n(this,k);d(this,g,t.color&&t.color.length>=3?t.color:["#F15E41","#BAD375","#26A9E0"]),d(this,k,t.size||"100px"),this.setContainerFlexCenter(),this.addStyle(o(this,S,X).call(this)),this.addElement(o(this,S,Z).call(this)),this.finish()}}g=new WeakMap,k=new WeakMap,S=new WeakSet,X=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            height: ${r(this,k)};
            width: ${r(this,k)};
            border: 3px solid transparent;
            border-radius: 50%;
            border-top: 4px solid ${r(this,g)[0]};
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
            border-top-color: ${r(this,g)[1]};
            -webkit-animation: 3s ${this.id}-spin linear infinite;
            animation: 3s ${this.id}-spin linear infinite;
          }
          
          .${this.id}::after {
            border-top-color: ${r(this,g)[2]};
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
        `,t},Z=function(){return`
        <div class="${this.id}"></div>
        `};var A,z,tt,it;class ut extends f{constructor(t){super(t);n(this,z);n(this,A);d(this,A,t.color||"#F44336"),this.setContainerFlexCenter(),this.addStyle(o(this,z,tt).call(this)),this.addElement(o(this,z,it).call(this)),this.finish()}}A=new WeakMap,z=new WeakSet,tt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            overflow: hidden;
            height: inherit;
            width: inherit;
          }
          .${this.id} .${this.id}-circle {
            width: 30px;
            height: 30px;
            position: absolute;
            background: ${r(this,A)};
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
        `,t},it=function(){return`
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
        `};var O,F,et,st;class bt extends f{constructor(t){super(t);n(this,F);n(this,O);d(this,O,t.color||"#F44336"),this.setContainerFlexCenter(),this.addStyle(o(this,F,et).call(this)),this.addElement(o(this,F,st).call(this)),this.finish()}}O=new WeakMap,F=new WeakSet,et=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            position: relative;
            width: auto;
            height: auto;
          }
          
          .${this.id} div {
            height: 10px;
            width: 10px;
            background-color: ${r(this,O)};
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
        `,t},st=function(){return`
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
        `};var R,x,T,rt,nt;class gt extends f{constructor(t){super(t);n(this,T);n(this,R);n(this,x);d(this,R,t.color||"#333"),d(this,x,t.size||"20px"),this.setContainerFlexCenter(),this.addStyle(o(this,T,rt).call(this)),this.addElement(o(this,T,nt).call(this)),this.finish()}}R=new WeakMap,x=new WeakMap,T=new WeakSet,rt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
          }
          
          .${this.id}-sk-cube {
           width: ${r(this,x)};
           height: ${r(this,x)};
           background-color: ${r(this,R)};
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
        `,t},nt=function(){return`
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
        `};var w,L,l,H,at,ot;class pt extends f{constructor(t){super(t);n(this,H);n(this,w);n(this,L);n(this,l);d(this,w,t.color||"#333"),d(this,L,t.size||"16px"),d(this,l,t.text||"Loading..."),console.log(r(this,l).length),this.setContainerFlexCenter(),this.addStyle(o(this,H,at).call(this)),this.addElement(o(this,H,ot).call(this)),this.finish()}}w=new WeakMap,L=new WeakMap,l=new WeakMap,H=new WeakSet,at=function(){let t=.48;const a=document.createElement("style");a.innerHTML=`
          .${this.id} {
            display: flex;
          }
          .${this.id} div {
            animation-name: ${this.id}-loading;
            animation-duration: ${t+.05*(r(this,l).length-1)}s;
            animation-iteration-count: infinite;
            animation-direction: linear;
            ${r(this,L)?`font-size: ${r(this,L)};`:""}
            ${r(this,w)?`color: ${r(this,w)};`:""}
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
        `;for(let e=0;e<r(this,l).length;e++)a.innerHTML+=`
            .${this.id}-item-${e} {
              animation-delay: ${t+.05*e}s;
            }
      `;return a},ot=function(){const t=document.createElement("div");t.classList.add(this.id);for(let a=0;a<r(this,l).length;a++)t.innerHTML+=`<div class="${this.id}-item-${a}">${r(this,l).charAt(a)}</div>`;return t};const dt={SquareLoading:ct,CmSpinnerLoading:$t,TripleSpinnerLoading:ft,MeshLoaderLoading:ut,BounceLoading:mt,CircleLoaderLoading:bt,CubesLoading:gt,TextLoading:pt},ht=Object.keys(dt),vt=()=>{let s="";return ht.forEach(i=>{s+=`
      <div class="card">
        <div class="card-header">${i}</div>
        <div class="card-body" id="${i}-loading"></div>
      </div>
    `}),s};document.querySelector("#app").innerHTML=`
  <div class="title">wj-loading</div>
  <div class="tag">
    <span data-url="https://github.com/nlbwqmz/wj-loading">github</span>
  </div>
  <div class="grid-container">
    ${vt()}
  </div>
`;ht.forEach(s=>{new dt[s]({element:document.getElementById(`${s}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0})});const D=document.querySelectorAll(".tag")[0].children;for(let s=0;s<D.length;s++)D[s].addEventListener("click",i=>{var t;window.open((t=i.target)==null?void 0:t.dataset.url)});
