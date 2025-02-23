"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{1910:(e,t,l)=>{l.d(t,{EarlyAccessButton:()=>M,default:()=>A});var s=l(5155);function n(e){let{size:t,tabletSize:l,mobileSize:n,style:c,enabled:u,children:d}=e,x=["button",u?"primary"===c?r.primary:r.secondary:r.disabled,function(e){let t=a[e];if(!t)throw Error("Invalid desktop size: ".concat(e));return t}(l),function(e){let t=o[e];if(!t)throw Error("Invalid mobile size: ".concat(e));return t}(n),function(e){let t=i[e];if(!t)throw Error("Invalid desktop size: ".concat(e));return t}(t)].join(" ");return(0,s.jsx)("span",{className:x,children:d})}let r={primary:"button-primary",secondary:"button-secondary",disabled:"button-disabled"},o={S:"text-sm/[20px] px-6 py-2.5",M:"text-sm/[20px] px-7 py-3.5",L:"text-base/[24px] px-8 py-4.5"},a={S:"md:text-sm/[20px] md:px-6 md:py-2.5",M:"md:text-sm/[20px] md:px-7 md:py-3.5",L:"md:text-base/[24px] md:px-8 md:py-4.5"},i={S:"xl:text-sm/[20px] xl:px-6 xl:py-2.5",M:"xl:text-sm/[20px] xl:px-7 xl:py-3.5",L:"xl:text-base/[24px] xl:px-8 xl:py-4.5"};var c=l(2115),u=l(8173),d=l.n(u);function x(e){let{type:t="button",onAction:l=()=>!0,href:r,size:o="M",tabletSize:a=o,mobileSize:i=a,style:u="primary",disabled:x=!1,className:m="",children:f}=e,h=r?d():p;if("button"!==t&&r)throw Error('Button with href must be of type="button"; got "'.concat(t,'"'));let b=(0,c.useCallback)(e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),l(e))},[l]);return(0,s.jsx)("button",{type:t,disabled:x,className:"button-container ".concat(m),onKeyDown:b,children:(0,s.jsx)(h,{href:r,onClick:l,children:(0,s.jsx)(n,{size:o,tabletSize:a,mobileSize:i,style:u,enabled:!x,children:f})})})}function p(e){let{children:t,onClick:l}=e;return(0,s.jsx)("span",{onClick:l,children:t})}var m=l(8026),f=l(6485),h=l(4790),b=l(7543),y=l(6743);let v=(0,c.createContext)(null);function w(){let e=(0,c.useContext)(v);if(null===e)throw Error("useFormContext must be used within a Form component");return e}function j(e){let{name:t,className:l="",onSubmit:n=g,children:r}=e,o=(0,c.useRef)(null),[a,i]=(0,c.useState)({}),[u,d]=(0,c.useState)(!1),x=(0,c.useMemo)(()=>({values:a,valid:u,setValues:e=>{var t;i(e),d((null===(t=o.current)||void 0===t?void 0:t.checkValidity())||!1)},submit:()=>n(a)}),[a,u,i,n]),p=(0,c.useCallback)(e=>{let t=o.current;if(t)return(e.preventDefault(),t.checkValidity())?n(a):t.reportValidity(),!1},[n,a]);return(0,s.jsx)("form",{ref:o,name:t,className:l,onSubmit:p,children:(0,s.jsx)(v.Provider,{value:x,children:r})})}function g(){}let k=function(e){let{className:t="",focused:l,children:n}=e,r=["p-5.5 xl:p-6 border-box rounded-lg inset-shadow-sm border bg-white text-violet text-lg xl:text-xl font-regular",l?"border-blue-300/60 outline outline-4 outline-blue-200/70 inset-shadow-violet/10":"border-slate-400 inset-shadow-violet/20",t].join(" ");return(0,s.jsx)("div",{className:r,children:n})},N=()=>{};function C(e){let{name:t,className:l="",submitOnEnter:n=!1,children:r,onFocus:o=N,onKeyDown:a=N,...i}=e,u=w(),d=(0,c.useRef)(null),x=u.values[t]||"",[p,m]=function(e,t){let[l,s]=(0,c.useState)(t);return(0,c.useEffect)(()=>{document.hasFocus()&&e.current===document.activeElement&&s(!0)},[e]),[l,s]}(d,i.autoFocus||!1);!function(e,t,l){let s=t.current;(0,c.useEffect)(()=>{e&&s&&l&&s.focus()},[e,t,l,s])}(x,d,i.autoFocus||!1);let f=(0,c.useCallback)(e=>{u.setValues({...u.values,[t]:e.target.value})},[t,u]),h=(0,c.useCallback)(e=>{a(e),n&&"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),u.submit())},[n,a,u]),b=(0,c.useCallback)(()=>{m(!0),o()},[o,m]);return(0,s.jsx)(k,{className:"flex flex-row overflow-auto ".concat(l),focused:p,children:(0,s.jsx)("input",{...i,value:x,onChange:f,onKeyDown:h,onFocus:b,onBlur:()=>m(!1),ref:d,className:"w-full h-full resize-none overflow-hidden placeholder:text-contrast/30",suppressHydrationWarning:!0})})}function E(){let e=(0,m.d_)(),[t,l]=(0,c.useState)("init"),[n,r]=(0,c.useState)(null),o=(0,c.useCallback)(e=>{"init"===t&&(l("submitted"),Promise.resolve().then(()=>fetch("https://magic.djinni.ai/early-access/subscribe",{method:"POST",body:JSON.stringify({email:e.email})})).then(e=>e.json()).then(e=>{if(e.success)l("success");else{var t;throw Error(null!==(t=e.error)&&void 0!==t?t:"Unknown error")}}).catch(e=>{console.error(e),l("error"),r(e.message)}))},[t,l]);return(0,c.useEffect)(()=>{if("success"===t){let t=setTimeout(e.close,2e3);return()=>clearTimeout(t)}},[t,e]),(0,s.jsxs)(j,{name:"early-access",onSubmit:o,className:"mx-1",children:[(0,s.jsx)("h2",{children:"Early Access Program"}),(0,s.jsx)("p",{className:"hidden xl:block",children:"Enter your email below to be among the first to try djinni.ai. As\xa0an early adopter, you'll receive priority access to new features, exclusive updates, and the opportunity to shape the\xa0future of the platform."}),(0,s.jsx)("p",{className:"block xl:hidden",children:"Be among the first to try djinni.ai, get exclusive updates, priority access to new features, and an opportunity to shape the\xa0future of the platform."}),(0,s.jsxs)("div",{className:"relative my-2 xl:my-3",children:[(0,s.jsx)(S,{className:"pr-14",disabled:"init"!==t,onEscapePressed:e.close}),(0,s.jsx)(P,{className:"absolute right-[14px] xl:right-[16px] top-[14px] xl:top-[18px]",status:t}),(0,s.jsxs)("div",{className:"mt-5 -mb-10 text-sm text-red-400 text-center",children:[n,"\xa0"]})]}),(0,s.jsxs)("p",{className:"hidden xl:block",children:["By participating in the program you are agreeing to\xa0our ",(0,s.jsx)(d(),{href:"/terms-of-service",children:"Terms of Service"})," and ",(0,s.jsx)(d(),{href:"/privacy-policy",children:"Privacy Policy"}),"."]}),(0,s.jsxs)("p",{className:"block xl:hidden",children:["You are agreeing to djinni.ai's ",(0,s.jsx)(d(),{href:"/terms-of-service",children:"Terms of Service"})," and ",(0,s.jsx)(d(),{href:"/privacy-policy",children:"Privacy Policy"}),"."]})]})}function S(e){let{className:t,disabled:l,onEscapePressed:n}=e,r=(0,c.useCallback)(e=>{"Escape"===e.key&&n()},[n]);return(0,s.jsx)(C,{name:"email",type:"email",placeholder:"Leave us your email...",autoComplete:"off",disabled:l,autoFocus:!0,required:!0,className:t,onKeyDown:r})}function P(e){let{className:t,status:l}=e,{valid:n}=w();return(0,s.jsx)("div",{className:t,children:(0,s.jsxs)("button",{type:"submit",disabled:"init"!==l||!n,className:"w-10 h-10",children:["init"===l&&!n&&(0,s.jsx)(f.A,{className:"w-5 h-5 m-2.5 text-slate-600/40"}),"init"===l&&n&&(0,s.jsx)(h.A,{className:"w-10 h-10 text-violet/50 cursor-pointer"}),"submitted"===l&&(0,s.jsx)("div",{className:"w-8 h-8 m-1 loader"}),"success"===l&&(0,s.jsx)(b.A,{className:"w-10 h-10 text-green-500/70"}),"error"===l&&(0,s.jsx)(y.A,{className:"w-6 h-6 m-2 text-red-400/90"})]})})}function M(e){let{size:t="S",mobileSize:l=t,className:n,style:r}=e,o=(0,m.d_)(),a=(0,c.useCallback)(()=>(o.open((0,s.jsx)(E,{})),!1),[o]);return(0,s.jsx)(x,{size:t,mobileSize:l,style:r,className:n,onAction:a,children:"Get Early Access"})}let A=M},8026:(e,t,l)=>{l.d(t,{ModalWindowProvider:()=>c,d_:()=>i});var s=l(5155),n=l(2115),r=l(6743);function o(e){let{children:t,close:l,onClosed:o}=e,[a,i]=(0,n.useState)("init"),[c,u]=(0,n.useState)(!1),[d,x]=(0,n.useState)([-1e3,-1e3]),p=(0,n.useRef)(null),{documentElement:m}=document,f=(0,n.useMemo)(()=>({overlay:["modal fixed top-0 left-0 w-full h-full z-100","flex items-center justify-center bg-violet/15",..."init"===a?["will-change-[backdrop-filter]"]:[],..."opening"===a?["will-change-[backdrop-filter] backdrop-blur-in"]:[],..."open"===a?["backdrop-blur-in","cursor-grab"]:[],...c?["will-change-[backdrop-filter]"]:[],..."closing"===a?["backdrop-blur-out"]:[],..."closed"===a?["backdrop-blur-out"]:[]].join(" "),window:["relative w-full xl:w-xl h-fit bg-linear-to-tl from-violet to-purple shadow-2xl","xl:rounded-lg xl:px-10 py-17 xl:py-14 cursor-default flex items-center","transition-all ease-out",..."init"===a?["will-change-transform will-change-opacity -translate-y-full opacity-0"]:[],..."opening"===a?["will-change-transform will-change-opacity duration-500 xl:delay-200 translate-none opacity-100"]:[],..."open"===a?["translate-none opacity-100"]:[],...c?["will-change-transform will-change-opacity"]:[],..."closing"===a?["duration-400 translate-y-full opacity-0"]:[],..."closed"===a?["translate-y-full opacity-0"]:[]].join(" "),content:"flex flex-col justify-center max-w-mobile h-full xl:h-fit mx-auto px-6 xl:px-0 xl:max-w-full",closeButton:["absolute top-0 right-0 w-16 h-16","flex items-center justify-center","text-primary",..."open"===a?["cursor-pointer"]:[]].join(" ")}),[a,c]);(0,n.useEffect)(()=>{"init"===a&&(i("opening"),m.classList.add("noscroll"))},[a,m]),(0,n.useEffect)(()=>{"open"===a&&l&&u(!0)},[a,l]);let h=(0,n.useCallback)(e=>{e.stopPropagation(),"open"===a&&u(!0)},[a]);(0,n.useEffect)(()=>{c&&i("closing")},[c]);let b=(0,n.useCallback)(()=>{"opening"===a&&i("open"),"closing"===a&&(i("closed"),m.classList.remove("noscroll"))},[a,m]);(0,n.useEffect)(()=>{"closed"===a&&o()},[a,o]);let y=(0,n.useCallback)(e=>{e.stopPropagation(),"A"===e.target.nodeName&&h(e)},[h]),v=(0,n.useCallback)(e=>{x([e.clientX,e.clientY])},[x]),w=(0,n.useCallback)(e=>{let[t,l]=d,[s,n]=[e.clientX,e.clientY],r=s-t,o=n-l;10>Math.sqrt(r*r+o*o)&&e.target===p.current&&h(e),x([-1e3,-1e3])},[d,h]);return(0,s.jsx)("div",{ref:p,className:f.overlay,onMouseDown:v,onMouseUp:w,children:(0,s.jsxs)("div",{className:f.window,onClick:y,onTransitionEnd:b,children:[(0,s.jsx)("button",{className:f.closeButton,onClick:h,children:(0,s.jsx)(r.A,{className:"w-7 h-7"})}),(0,s.jsx)("div",{className:f.content,children:t})]})})}let a=(0,n.createContext)({open:()=>{},close:()=>{}});function i(){let e=(0,n.useContext)(a);if(null===e)throw Error("useModalWindow must be used within a ModalWindowProvider");return e}function c(e){let{children:t}=e,[l,r]=(0,n.useState)(null),[i,c]=(0,n.useState)(!1),u=(0,n.useCallback)(e=>{r(e)},[r]),d=(0,n.useCallback)(()=>{c(!0)},[c]),x=(0,n.useCallback)(()=>{r(null),c(!1)},[r,c]),p=(0,n.useMemo)(()=>({open:u,close:d}),[u,d]);return(0,s.jsxs)(a.Provider,{value:p,children:[t,l&&(0,s.jsx)(o,{onClosed:x,close:i,children:l})]})}}}]);