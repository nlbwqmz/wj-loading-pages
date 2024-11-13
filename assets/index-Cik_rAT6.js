var B=e=>{throw TypeError(e)};var I=(e,i,t)=>i.has(e)||B("Cannot "+t);var s=(e,i,t)=>(I(e,i,"read from private field"),t?t.call(e):i.get(e)),n=(e,i,t)=>i.has(e)?B("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,t),l=(e,i,t,d)=>(I(e,i,"write to private field"),d?d.call(e,t):i.set(e,t),t),o=(e,i,t)=>(I(e,i,"access private method"),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const $t=(e=8)=>{const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let d=0;d<e;d++)t+=i.charAt(Math.floor(Math.random()*i.length));return t};var m,W,V,Y,P;let c=(P=class{constructor(i){n(this,m);this.id=`wj-loading-${$t()}`,console.log(this.id),this.rendered=!1,this.element=o(this,m,Y).call(this,i.element),this.immediate=i.immediate,this.interval=i.interval,this.afterRemove=i.afterRemove,this.background=i.background||"none",this.zIndex=this.zIndex||2e3,this.style=document.createElement("style"),this.container=document.createElement("div"),o(this,m,W).call(this),o(this,m,V).call(this)}setContainerFlexCenter(){this.style.innerHTML+=`
      .${this.id}-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}addStyle(i){this.style.appendChild(i)}addElement(i){typeof i=="string"?this.container.innerHTML+=i:this.container.appendChild(i)}finish(){this.immediate&&this.loading()}loading(){this.rendered||(["relative","absolute","fixed"].includes(this.element.style.position)||this.element.classList.add(`${this.id}-relative`),this.element.classList.add(`${this.id}-lock`),document.getElementsByTagName("head")[0].appendChild(this.style),this.element.appendChild(this.container),this.rendered=!0,this.afterRendered&&this.afterRendered(),this.interval&&this.interval>0&&setTimeout(()=>{this.remove()},this.interval))}remove(){this.rendered&&(this.container&&this.container.remove(),this.style&&this.style.remove(),this.element.classList.contains(`${this.id}-relative`)&&this.element.classList.remove(`${this.id}-relative`),this.element.classList.remove(`${this.id}-lock`),this.rendered=!1,this.afterRemove&&this.afterRemove())}},m=new WeakSet,W=function(){const i=this.element===document.body?window.innerHeight:this.element.offsetHeight;this.style.innerHTML=`
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
    `},V=function(){this.container.classList.add(`${this.id}-container`)},Y=function(i){if(i)if(typeof i=="string"){const t=document.querySelector(i);if(!t)throw new Error(`未找到当前节点：${i}`);return t}else return i;else return document.body},P);var $,A,v,b,f,G,J,K;class bt extends c{constructor(t){super(t);n(this,f);n(this,$);n(this,A);n(this,v);n(this,b);l(this,A,t.text||"Loading..."),l(this,v,t.fontColor||"rgba(128, 128, 128, .9)"),l(this,b,t.textVisible||3),l(this,$,t.maxSize),this.addStyle(o(this,f,J).call(this)),this.addElement(o(this,f,K).call(this)),this.afterRendered=()=>{s(this,b)===3&&o(this,f,G).call(this)},this.finish()}}$=new WeakMap,A=new WeakMap,v=new WeakMap,b=new WeakMap,f=new WeakSet,G=function(){const t=this.element.querySelector(`.${this.id}-text`);t&&(t.offsetWidth<t.scrollWidth?t.style.display="none":t.style.display="block")},J=function(){const t=this.element===document.body?window.innerWidth:this.element.offsetWidth,d=this.element===document.body?window.innerHeight:this.element.offsetHeight;let a=Math.min(t,d)/4;s(this,$)&&a>s(this,$)&&(a=s(this,$));const r=a/2,p=document.createElement("style");return p.innerHTML=`
        .${this.id}-text {
          width: 100%;
          position: absolute;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          ${s(this,v)?`color: ${s(this,v)};`:""}
          top: ${d/2+r+10}px;
          ${s(this,b)===1||s(this,b)===3?"":"display: none;"}
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
          width: ${r}px;
          height: ${r}px;
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
          25% {transform: translate(0, ${r}px)} 
          50% {transform: translate(${r}px, ${r}px)} 
          75% {transform: translate(${r}px, 0)} 
        }
        
        @keyframes ${this.id}-item-2_move {
          0%, 100% {transform: translate(0, 0)}
          25% {transform: translate(-${r}px, 0)}
          50% {transform: translate(-${r}px, ${r}px)}
          75% {transform: translate(0, ${r}px)} 
        }
        
        @keyframes ${this.id}-item-3_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(0, -${r}px)} 
          50% {transform: translate(-${r}px, -${r}px)} 
          75% {transform: translate(-${r}px, 0)} 
        }
        
        @keyframes ${this.id}-item-4_move {
          0%, 100% {transform: translate(0, 0)} 
          25% {transform: translate(${r}px, 0)} 
          50% {transform: translate(${r}px, -${r}px)} 
          75% {transform: translate(0, -${r}px)} 
        }
        `,p},K=function(){return`
        <div class="${this.id}">
              <div class="${this.id}-item ${this.id}-item-1"></div>
              <div class="${this.id}-item ${this.id}-item-2"></div>
              <div class="${this.id}-item ${this.id}-item-3"></div>
              <div class="${this.id}-item ${this.id}-item-4"></div>
            </div>
            <div class="${this.id}-text">${s(this,A)}</div>
        `};var O,y,S,Q,U;class ut extends c{constructor(t){super(t);n(this,S);n(this,O);n(this,y);l(this,O,t.color||"#333"),l(this,y,t.size||"20px"),this.setContainerFlexCenter(),this.addStyle(o(this,S,Q).call(this)),this.addElement(o(this,S,U).call(this)),this.finish()}}O=new WeakMap,y=new WeakMap,S=new WeakSet,Q=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id}-bounce {
       text-align: center;
      }
      
      .${this.id}-bounce>div {
       width: ${s(this,y)};
       height: ${s(this,y)};
       background-color: ${s(this,O)};
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
        `,t},U=function(){return`
        <div class="${this.id}-bounce">
          <div class="${this.id}-bounce1"></div>
          <div class="${this.id}-bounce2"></div>
          <div class="${this.id}-bounce3"></div>
        </div>
        `};var u,k,z,X,Z;class gt extends c{constructor(t){super(t);n(this,z);n(this,u);n(this,k);l(this,u,t.color&&t.color.length>=3?t.color:["#FF5722","#FF9800","#FFC107"]),l(this,k,t.size||"100px"),this.setContainerFlexCenter(),this.addStyle(o(this,z,X).call(this)),this.addElement(o(this,z,Z).call(this)),this.finish()}}u=new WeakMap,k=new WeakMap,z=new WeakSet,X=function(){const t=document.createElement("style");return t.innerHTML=`
      .${this.id} {
        display: block;
        position: relative;
        width: ${s(this,k)};
        height: ${s(this,k)};
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid ${s(this,u)[0]};
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
        border-top-color: ${s(this,u)[1]};
        -webkit-animation: ${this.id}-spin 3s linear infinite;
        animation: ${this.id}-spin 3.5s linear infinite;
      }
      .${this.id}::after {
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-top-color: ${s(this,u)[2]};
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
        `,t},Z=function(){return`
        <div class="${this.id}"></div>
        `};var g,x,F,tt,it;class pt extends c{constructor(t){super(t);n(this,F);n(this,g);n(this,x);l(this,g,t.color&&t.color.length>=3?t.color:["#F15E41","#BAD375","#26A9E0"]),l(this,x,t.size||"100px"),this.setContainerFlexCenter(),this.addStyle(o(this,F,tt).call(this)),this.addElement(o(this,F,it).call(this)),this.finish()}}g=new WeakMap,x=new WeakMap,F=new WeakSet,tt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            height: ${s(this,x)};
            width: ${s(this,x)};
            border: 3px solid transparent;
            border-radius: 50%;
            border-top: 4px solid ${s(this,g)[0]};
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
            border-top-color: ${s(this,g)[1]};
            -webkit-animation: 3s ${this.id}-spin linear infinite;
            animation: 3s ${this.id}-spin linear infinite;
          }
          
          .${this.id}::after {
            border-top-color: ${s(this,g)[2]};
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
        `,t},it=function(){return`
        <div class="${this.id}"></div>
        `};var R,T,et,st;class vt extends c{constructor(t){super(t);n(this,T);n(this,R);l(this,R,t.color||"#F44336"),this.setContainerFlexCenter(),this.addStyle(o(this,T,et).call(this)),this.addElement(o(this,T,st).call(this)),this.finish()}}R=new WeakMap,T=new WeakSet,et=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            overflow: hidden;
            height: inherit;
            width: inherit;
          }
          .${this.id} .${this.id}-circle {
            width: 30px;
            height: 30px;
            position: absolute;
            background: ${s(this,R)};
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
        `,t},st=function(){return`
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
        `};var _,M,rt,nt;class yt extends c{constructor(t){super(t);n(this,M);n(this,_);l(this,_,t.color||"#F44336"),this.setContainerFlexCenter(),this.addStyle(o(this,M,rt).call(this)),this.addElement(o(this,M,nt).call(this)),this.finish()}}_=new WeakMap,M=new WeakSet,rt=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
            position: relative;
            width: auto;
            height: auto;
          }
          
          .${this.id} div {
            height: 10px;
            width: 10px;
            background-color: ${s(this,_)};
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
        `,t},nt=function(){return`
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
        `};var D,w,H,at,ot;class kt extends c{constructor(t){super(t);n(this,H);n(this,D);n(this,w);l(this,D,t.color||"#333"),l(this,w,t.size||"20px"),this.setContainerFlexCenter(),this.addStyle(o(this,H,at).call(this)),this.addElement(o(this,H,ot).call(this)),this.finish()}}D=new WeakMap,w=new WeakMap,H=new WeakSet,at=function(){const t=document.createElement("style");return t.innerHTML=`
          .${this.id} {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
          }
          
          .${this.id}-sk-cube {
           width: ${s(this,w)};
           height: ${s(this,w)};
           background-color: ${s(this,D)};
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
        `,t},ot=function(){return`
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
        `};var L,E,h,q,dt,lt;class xt extends c{constructor(t){super(t);n(this,q);n(this,L);n(this,E);n(this,h);l(this,L,t.color||"#333"),l(this,E,t.size||"16px"),l(this,h,t.text||"Loading..."),console.log(s(this,h).length),this.setContainerFlexCenter(),this.addStyle(o(this,q,dt).call(this)),this.addElement(o(this,q,lt).call(this)),this.finish()}}L=new WeakMap,E=new WeakMap,h=new WeakMap,q=new WeakSet,dt=function(){let t=.48;const d=document.createElement("style");d.innerHTML=`
          .${this.id} {
            display: flex;
          }
          .${this.id} div {
            animation-name: ${this.id}-loading;
            animation-duration: ${t+.05*(s(this,h).length-1)}s;
            animation-iteration-count: infinite;
            animation-direction: linear;
            ${s(this,E)?`font-size: ${s(this,E)};`:""}
            ${s(this,L)?`color: ${s(this,L)};`:""}
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
        `;for(let a=0;a<s(this,h).length;a++)d.innerHTML+=`
            .${this.id}-item-${a} {
              animation-delay: ${t+.05*a}s;
            }
      `;return d},lt=function(){const t=document.createElement("div");t.classList.add(this.id);for(let d=0;d<s(this,h).length;d++)t.innerHTML+=`<div class="${this.id}-item-${d}">${s(this,h).charAt(d)}</div>`;return t};var C,j,ht,ct;class wt extends c{constructor(t){super(t);n(this,j);n(this,C);l(this,C,t.color&&t.color.length>=2?t.color:["#000","#000"]),this.setContainerFlexCenter(),this.addStyle(o(this,j,ht).call(this)),this.addElement(o(this,j,ct).call(this)),this.finish()}}C=new WeakMap,j=new WeakSet,ht=function(){const t=document.createElement("style");return t.innerHTML=`
.${this.id} {
  display: block;
  font-size: 0;
  color: ${s(this,C)[0]};
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
  background-color: ${s(this,C)[1]};
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
        `,t},ct=function(){return`<div class="${this.id}"><div></div><div></div><div></div><div></div></div>`};const mt={SquareLoading:bt,CmSpinnerLoading:pt,TripleSpinnerLoading:gt,MeshLoaderLoading:vt,BounceLoading:ut,CircleLoaderLoading:yt,CubesLoading:kt,TextLoading:xt,DotJumpLoading:wt},ft=Object.keys(mt),Lt=()=>{let e="";return ft.forEach(i=>{e+=`
      <div class="card">
        <div class="card-header">${i}</div>
        <div class="card-body" id="${i}-loading"></div>
      </div>
    `}),e};document.querySelector("#app").innerHTML=`
  <div class="title">wj-loading</div>
  <div class="desc">
    <div>
      <div>
        <span>安装：</span>
        <span>yarn add wj-loading | npm install wj-loading</span>
      </div>
      <div>
        <span>文档：</span>
        <span data-url="https://github.com/nlbwqmz/wj-loading" class="url">github</span>
      </div>
    </div>
  </div>
  <div class="grid-container">
    ${Lt()}
  </div>
`;ft.forEach(e=>{new mt[e]({element:document.getElementById(`${e}-loading`),background:"rgba(255, 255, 255, .8)",immediate:!0})});const N=document.querySelectorAll(".url");for(let e=0;e<N.length;e++)N[e].addEventListener("click",i=>{var t;window.open((t=i.target)==null?void 0:t.dataset.url)});
