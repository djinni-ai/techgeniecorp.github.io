(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4188,6718],{1278:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FAQ:()=>s,FAQItem:()=>c,default:()=>i});var r=n(5155),l=n(2115);let a=l.forwardRef(function(e,t){let{title:n,titleId:r,...a}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),n?l.createElement("title",{id:r},n):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))});function s(e){let{title:t,children:n}=e;return(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)("h2",{className:"text-base! xl:text-xl! text-contrast! font-bold! xl:font-semibold!",children:t}),n]})}let i=s;(s||(s={})).Item=function(e){let{title:t,children:n,className:s}=e,[i,c]=(0,l.useState)(!1),o=(0,l.useCallback)(()=>{c(!i)},[i,c]),u={container:"faq-item pl-8 xl:pl-15 border-t-1 border-slate-200 mt-5 pt-5 xl:pt-6 xl:mt-6",chevron:"text-contrast/70 inline-block w-4 h-4 -ml-7 mr-3 xl:-ml-10 xl:mr-6 align-baseline transition-transform origin-center ease-in-out ".concat(i?"duration-300 rotate-90":"duration-600 rotate-0"),header:"block xl:text-[24px]/[32px] ".concat(i?"text-contrast/82":"text-contrast/50"),content:"overflow-hidden transition-all ".concat(i?"max-h-[200vh] duration-1000 ease-in-":"max-h-[0vh] duration-400 ease-out")};return(0,r.jsxs)("section",{className:"".concat(u.container," ").concat(s),children:[(0,r.jsx)("h4",{onClick:o,className:"cursor-pointer mt-0!",children:(0,r.jsxs)("span",{className:u.header,children:[(0,r.jsx)(a,{className:u.chevron}),t]})}),(0,r.jsx)("div",{className:u.content,children:n})]})};let c=s.Item},1649:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Image:()=>s,default:()=>i});var r=n(5155),l=n(2115),a=n(6766);function s(e){let{placeholder:t,src:n,width:s,height:i,alt:c,className:o="",onLoad:u=()=>{},onVisible:d=()=>{}}=e,[f,h]=(0,l.useState)("init"),m=(0,l.useRef)(null),x={container:"image relative top-0 left-0 overflow-hidden ".concat(o),dimentions:"absolute inset-0 w-full h-full block",image:"transition-all duration-300 ease-in-out ".concat(["loaded","visible"].includes(f)?"opacity-100 blur-none":"opacity-0 blur-xl"),placeholder:"blur-xl"};(0,l.useEffect)(()=>{if("init"!==f||!m.current)return;let e=new IntersectionObserver(t=>{let[n]=t;n.isIntersecting&&(h("in-view"),e.disconnect())});return e.observe(m.current),()=>e.disconnect()},[f,h]);let b=(0,l.useCallback)(()=>{h("loaded")},[h]),v=(0,l.useCallback)(()=>{h("visible"),d()},[h,d]),p=s/i;return(0,r.jsxs)("div",{ref:m,className:x.container,style:{width:"".concat(s,"px"),maxWidth:"100%",aspectRatio:p,backgroundImage:"url(".concat(t,")"),backgroundSize:"cover"},children:[(0,r.jsx)(a.default,{src:t,alt:c,width:s,height:i,className:"".concat(x.dimentions," ").concat(x.placeholder)}),"init"!==f&&(0,r.jsx)(a.default,{src:n,alt:c,width:s,height:i,className:"".concat(x.dimentions," ").concat(x.image),onLoad:b,onTransitionStart:u,onTransitionEnd:v})]})}let i=s},2660:(e,t,n)=>{Promise.resolve().then(n.bind(n,1278)),Promise.resolve().then(n.bind(n,1649)),Promise.resolve().then(n.bind(n,4918)),Promise.resolve().then(n.bind(n,8734))},4918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Link:()=>c,default:()=>o});var r=n(5155),l=n(6874),a=n.n(l),s=n(2115),i=n(9416);function c(e){let{href:t,children:n,eventId:l,...c}=e,o=(0,s.useRef)(null),u=(0,s.useCallback)(()=>{o.current&&o.current.blur()},[o]),d=(0,s.useCallback)(()=>{var e;let n=(e=t.toString()).startsWith("http")||e.startsWith("//");(l||n)&&(0,i.sx)("[link]".concat(n?"[external]":"").concat(l?"[".concat(l,"]"):"",": ").concat(t))},[l,t]);return(0,r.jsx)(a(),{ref:o,href:t,...c,onMouseOut:u,onClick:d,children:n})}let o=c},8734:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});var r=n(5155),l=n(2115);let a=function(e){let{children:t,scrollPxPerSecond:n=50,pauseSeconds:a=2.5,gapPx:s=8}=e,[i,c]=(0,l.useState)(0),[o,u]=(0,l.useState)("init"),[d,f]=(0,l.useState)(0),[h,m]=(0,l.useState)(0),x=h+s,b=h/n,v=1e3*a,p=(0,l.useRef)(null),g=(0,l.useRef)(null),k=(0,l.useRef)(null);(0,l.useEffect)(()=>()=>{k.current&&(clearTimeout(k.current),k.current=null)},[]),(0,l.useEffect)(()=>{if(p.current&&g.current){f(p.current.offsetWidth),m(g.current.offsetWidth);let e=new ResizeObserver(e=>{for(let t of e)f(t.contentRect.width)});return e.observe(p.current),()=>{e.disconnect()}}},[p,g]),(0,l.useEffect)(()=>{k.current&&(clearTimeout(k.current),k.current=null),h>d?u("scroll-needed"):(u("init"),c(0))},[h,d,k]),(0,l.useEffect)(()=>{"scroll-needed"===o&&(u("scrolling"),c(x))},[o,h,x]);let w=(0,l.useCallback)(()=>{"scrolling"===o&&u("normalizing")},[o]);(0,l.useEffect)(()=>{"normalizing"===o&&0!==i&&(c(0),k.current=setTimeout(()=>u("normalized"),v))},[o,i,v]),(0,l.useEffect)(()=>{"normalized"===o&&u("scroll-needed")},[o]);let j={container:"w-full h-full overflow-hidden",scroller:"flex transition-transform ease-linear",children:"w-fit h-fit"};return(0,r.jsx)("div",{ref:p,className:j.container,children:(0,r.jsxs)("div",{className:j.scroller,onTransitionEnd:w,style:{gap:"".concat(s,"px"),transitionDuration:"".concat(o.startsWith("scroll")?b:0,"s"),transform:"translateX(-".concat(i,"px)")},children:[(0,r.jsx)("div",{ref:g,className:j.children,children:t}),"init"!==o&&(0,r.jsx)("div",{className:j.children,children:t})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[4909,6766,8441,1684,7358],()=>t(2660)),_N_E=e.O()}]);