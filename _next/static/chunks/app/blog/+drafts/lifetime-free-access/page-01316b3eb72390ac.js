(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507],{1649:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Image:()=>s,default:()=>c});var r=n(5155),a=n(2115),l=n(6766);function s(e){let{placeholder:t,src:n,width:s,height:c,alt:i,className:o="",onLoad:u=()=>{},onVisible:d=()=>{}}=e,[f,h]=(0,a.useState)("init"),x=(0,a.useRef)(null),m={container:"image relative top-0 left-0 overflow-hidden ".concat(o),dimentions:"absolute inset-0 w-full h-full block",image:"transition-all duration-300 ease-in-out ".concat(["loaded","visible"].includes(f)?"opacity-100 blur-none":"opacity-0 blur-xl"),placeholder:"blur-xl"};(0,a.useEffect)(()=>{if("init"!==f||!x.current)return;let e=new IntersectionObserver(t=>{let[n]=t;n.isIntersecting&&(h("in-view"),e.disconnect())});return e.observe(x.current),()=>e.disconnect()},[f,h]);let p=(0,a.useCallback)(()=>{h("loaded")},[h]),v=(0,a.useCallback)(()=>{h("visible"),d()},[h,d]),b=s/c;return(0,r.jsxs)("div",{ref:x,className:m.container,style:{width:"".concat(s,"px"),maxWidth:"100%",aspectRatio:b,backgroundImage:"url(".concat(t,")"),backgroundSize:"cover"},children:[(0,r.jsx)(l.default,{src:t,alt:i,width:s,height:c,className:"".concat(m.dimentions," ").concat(m.placeholder)}),"init"!==f&&(0,r.jsx)(l.default,{src:n,alt:i,width:s,height:c,className:"".concat(m.dimentions," ").concat(m.image),onLoad:p,onTransitionStart:u,onTransitionEnd:v})]})}let c=s},3086:(e,t,n)=>{"use strict";n.d(t,{default:()=>c});var r=n(5155),a=n(2115),l=n(4918),s=n(3855);function c(e){let{user:t,domain:n,className:c}=e,i=(0,s.A)(),o="email-link-".concat(t,"@").concat(n),u=i.get(o),[d,f]=(0,a.useState)(null),h=(0,a.useCallback)(()=>(i.set(o),!0),[i,o]);(0,a.useEffect)(()=>{u&&null===d&&f("first-half")},[d,u]);let x=(0,a.useCallback)(()=>{f("second-half")},[]),m={container:"inline-block relative align-top text-center overflow-hidden h-6 xl:h-7 text-nowrap ".concat(c),rotor:"block relative h-full transition-transform duration-500 transform-gpu transform-3d origin-center backface-visible ".concat(u?"rotate-x-180":"rotate-x-0"),email:"inline-block transform-3d transition-transform duration-200 origin-center ".concat("second-half"===d?"rotate-x-0 opacity-100":"-rotate-x-90 opacity-0"),revealButton:"block absolute top-0 left-0 w-full cursor-pointer transform-3d transition-transform duration-200 origin-center ".concat(null===d?"rotate-x-0":"rotate-x-90"," ").concat("second-half"===d?"opacity-0":"opacity-100"),revealText:"reveal-text text-red uppercase text-sm/[24px] xl:text-sm/[32px] font-normal",icon:"text-lg/[18px] relative top-px"},p=u?"".concat(t,"@").concat(n):function(e){let t=e.split("");for(let e=t.length-1;e>0;e--){let n=e*t.length%(e+1);[t[e],t[n]]=[t[n],t[e]]}return t.join("")}("".concat(t,"@").concat(n));return(0,r.jsxs)("span",{className:m.container,children:[(0,r.jsx)("span",{className:m.email,children:(0,r.jsx)(l.default,{href:"mailto:".concat(p),children:p})}),(0,r.jsxs)("span",{className:m.revealButton,onClick:h,onTransitionEnd:x,children:[(0,r.jsx)("span",{className:m.icon,children:"\uD83D\uDC40"})," ",(0,r.jsx)("span",{className:m.revealText,children:"Reveal"})]})]})}},3855:(e,t,n)=>{"use strict";n.d(t,{A:()=>c,OneShotProvider:()=>s});var r=n(5155),a=n(2115);let l=(0,a.createContext)({get:()=>!1,set:()=>{}});function s(e){let{children:t}=e,[n,s]=(0,a.useState)({}),c=(0,a.useMemo)(()=>({get:e=>n[e],set:e=>s({...n,[e]:!0})}),[n,s]);return(0,r.jsx)(l.Provider,{value:c,children:t})}function c(){return(0,a.useContext)(l)}},4060:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});var r=n(5155),a=n(2115),l=n(3855);let s=function(e){let{id:t,start:n,value:s,className:c}=e,i=(0,a.useRef)(null),o=(0,l.A)(),u="fomo-countdown-".concat(t),d=o.get(u);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(t=>{let[n]=t;n.isIntersecting&&(o.set(u),e.disconnect())},{threshold:.1});return i.current&&e.observe(i.current),()=>e.disconnect()},[o,u]),(0,r.jsx)("span",{ref:i,className:"inline-block font-black h-[1em] leading-none align-[-17%] overflow-hidden",children:(0,r.jsxs)("span",{className:"block transition-transform duration-1400 delay-600 transform-gpu ".concat(d?"translate-y-[-100%]":"translate-y-0"),children:[Array(n-s).fill(null).map((e,t)=>(0,r.jsx)("span",{className:"block h-[1em]",children:(0,r.jsx)("span",{className:c,children:n-t})},n-t)),(0,r.jsx)("span",{className:"block h-0 overflow-visible",children:(0,r.jsx)("span",{className:c,children:s})},s)]})})}},4918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Link:()=>i,default:()=>o});var r=n(5155),a=n(6874),l=n.n(a),s=n(2115),c=n(9416);function i(e){var t;let{href:n,children:a,eventId:i,...o}=e,u=(0,s.useRef)(null),d=(t=n.toString()).startsWith("http")||t.startsWith("//"),[f,h]=(0,s.useState)(!1);(0,s.useEffect)(()=>{h(!0)},[]);let x=(0,s.useCallback)(()=>{u.current&&u.current.blur()},[u]),m=(0,s.useCallback)(()=>{(i||d)&&(0,c.sx)("[link]".concat(d?"[external]":"").concat(i?"[".concat(i,"]"):"",": ").concat(n))},[i,d]);return d&&f&&!o.target&&(o.target="_blank"),(0,r.jsx)(l(),{ref:u,href:n,...o,onMouseOut:x,onClick:m,children:a})}let o=i},7056:(e,t,n)=>{"use strict";n.r(t),n.d(t,{HeroImage:()=>i,default:()=>o});var r=n(5155),a=n(2115),l=n(4060);function s(e){let{className:t="text-gradient text-gradient-pink opacity-60"}=e;return(0,r.jsx)(l.default,{id:"design-partners",start:7,value:7,className:t})}var c=n(1649);function i(){let[e,t]=(0,a.useState)(!1),n=(0,a.useCallback)(()=>{t(!0)},[t]);return(0,r.jsxs)("div",{className:"relative col-span-full grid grid-cols-subgrid",children:[(0,r.jsx)(c.default,{src:"/img/design-partners.webp",placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAA2klEQVQI1wXBTUrDQACA0S+TaZKmqQRsLMSiG3HlwhO46hU8gOfyOCK4EXThH6IICtq6aNM0Y2Ymk/G94Pzy1SfvP2yEp7aW2mm0Ujir8b6ndw7vPbKc7NDmI8RaMdCO2DjkesWZcbwtv7kOoe8t8jQUdFFEJSL81lKYIV02Jmo1qUu4e7rHTHNkvmgI+oCRgYNpyodryIzlZlawebjl8OQIJWKC+cWVL6KEiR/QqZ7dIfxlhq/PijruKPdKXn6XCCkF1hkWXrPC8rhViEZwvD8jTMc8Vw2tl/wDHZNp20akwIAAAAAASUVORK5CYII=",alt:"A photo of a dreamy sky with a portal to a digital world floating above clouds. Ones and zeroes flying around the portal.",width:1072,height:647,className:"wide",onLoad:n}),(0,r.jsx)("div",{className:"relative h-0 overflow-visible col-span-full xl:col-span-4 xl:col-start-3",children:(0,r.jsx)(u,{visible:e})})]})}let o=i;function u(e){let{visible:t}=e,n=t?"opacity-100":"opacity-0";return(0,r.jsx)(r.Fragment,{children:[{key:"desktop",CLASSNAMES:{container:"-mt-122 h-[181px] hidden xl:flex",counter:"text-[220px]/[220px] -ml-4",text:"text-5xl ml-2.5"},shadowOpacity:{counter:.3,text:.4}},{key:"mobile",CLASSNAMES:{container:"-mt-39 h-[64px] flex xl:hidden",counter:"text-[80px]/[80px] ml-9",text:"text-lg/[20px] ml-2"},shadowOpacity:{counter:.5,text:1}}].map(e=>{let{key:t,CLASSNAMES:a,shadowOpacity:l}=e;return(0,r.jsxs)("div",{className:"items-start transition-opacity duration-400 ".concat(n," ").concat(a.container),children:[(0,r.jsx)("span",{className:a.counter,style:{textShadow:"0 0 8px rgba(0, 0, 255, ".concat(l.counter,")")},children:(0,r.jsx)(s,{className:"text-primary/60"})}),(0,r.jsxs)("span",{className:"text-primary/60 font-bold tracking-tight self-end ".concat(a.text),style:{textShadow:"0 0 8px rgba(0, 0, 255, ".concat(l.text,")")},children:["SEATS",(0,r.jsx)("br",{}),"LEFT"]})]},t)})})}},8060:(e,t,n)=>{Promise.resolve().then(n.bind(n,7056)),Promise.resolve().then(n.bind(n,3086)),Promise.resolve().then(n.bind(n,4060)),Promise.resolve().then(n.bind(n,1649)),Promise.resolve().then(n.bind(n,4918)),Promise.resolve().then(n.bind(n,8734))},8734:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(5155),a=n(2115);let l=function(e){let{children:t,scrollPxPerSecond:n=50,pauseSeconds:l=2.5,gapPx:s=8}=e,[c,i]=(0,a.useState)(0),[o,u]=(0,a.useState)("init"),[d,f]=(0,a.useState)(0),[h,x]=(0,a.useState)(0),m=h+s,p=h/n,v=1e3*l,b=(0,a.useRef)(null),g=(0,a.useRef)(null),k=(0,a.useRef)(null);(0,a.useEffect)(()=>()=>{k.current&&(clearTimeout(k.current),k.current=null)},[]),(0,a.useEffect)(()=>{if(b.current&&g.current){f(b.current.offsetWidth),x(g.current.offsetWidth);let e=new ResizeObserver(e=>{for(let t of e)f(t.contentRect.width)});return e.observe(b.current),()=>{e.disconnect()}}},[b,g]),(0,a.useEffect)(()=>{k.current&&(clearTimeout(k.current),k.current=null),h>d?u("scroll-needed"):(u("init"),i(0))},[h,d,k]),(0,a.useEffect)(()=>{"scroll-needed"===o&&(u("scrolling"),i(m))},[o,h,m]);let w=(0,a.useCallback)(()=>{"scrolling"===o&&u("normalizing")},[o]);(0,a.useEffect)(()=>{"normalizing"===o&&0!==c&&(i(0),k.current=setTimeout(()=>u("normalized"),v))},[o,c,v]),(0,a.useEffect)(()=>{"normalized"===o&&u("scroll-needed")},[o]);let j={container:"w-full h-full overflow-hidden",scroller:"flex transition-transform ease-linear",children:"w-fit h-fit"};return(0,r.jsx)("div",{ref:b,className:j.container,children:(0,r.jsxs)("div",{className:j.scroller,onTransitionEnd:w,style:{gap:"".concat(s,"px"),transitionDuration:"".concat(o.startsWith("scroll")?p:0,"s"),transform:"translateX(-".concat(c,"px)")},children:[(0,r.jsx)("div",{ref:g,className:j.children,children:t}),"init"!==o&&(0,r.jsx)("div",{className:j.children,children:t})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[4909,6766,8441,1684,7358],()=>t(8060)),_N_E=e.O()}]);