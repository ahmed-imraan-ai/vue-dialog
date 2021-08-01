import{computed as e,ref as t,watch as l,nextTick as a,defineComponent as n,openBlock as i,createBlock as o,Transition as r,withCtx as d,createCommentVNode as c,renderSlot as s,onBeforeUnmount as u,resolveComponent as v,Teleport as p,createVNode as g,withDirectives as m,vShow as h}from"vue";const y=(e,t="px")=>null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`,f=e=>{if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;const t=parseInt(window.getComputedStyle(e).getPropertyValue("z-index"));return t||f(e.parentNode)},x=({activeElSelector:t,stackMinZIndex:l=0,isActive:a,content:n})=>({activeZIndex:e((()=>{if(!n.value)return 0;const e=a.value?((e=[])=>{const a=[l],n=document.querySelectorAll(t);for(let t=0;t<n.length;t++)e.includes(n[t])||a.push(f(n[t]));return Math.max(...a)})([n.value])+2:f(n.value);return null===e?0:e}))}),w=e=>{if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},b=(e,t)=>0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0,S=(e,t)=>{const l=(e=>{if(e.composedPath)return e.composedPath();const t=[];let l=e.target;for(;l;){if(t.push(l),"HTML"===l.tagName)return t.push(document),t.push(window),t;l=l.parentElement}return t})(e),a=e.deltaY;for(let n=0;n<l.length;n++){const e=l[n];if(e===document)return!0;if(e===document.documentElement)return!0;if(e===t)return!0;if(w(e))return b(e,a)}return!0};var N=n({name:"GDialogOverlay",props:{active:{type:Boolean,required:!0},deactivating:{type:Boolean,required:!0},activeZIndex:{type:Number,required:!0}},emits:["click"],setup:(t,{emit:l})=>({styles:e((()=>({zIndex:t.activeZIndex-1}))),classes:e((()=>["q-dialog-overlay",{"q-dialog-overlay--active":t.active&&!t.deactivating}])),onClick:()=>{l("click")}})});N.render=function(e,t,l,a,n,s){return i(),o(r,{name:"fade"},{default:d((()=>[e.active?(i(),o("div",{key:0,class:e.classes,style:e.styles,onClick:t[1]||(t[1]=(...t)=>e.onClick&&e.onClick(...t))},null,6)):c("",!0)])),_:1})};var k=n({name:"GDialogContent",props:{maxWidth:{type:[String,Number],default:"none"},width:{type:[String,Number],default:"auto"},height:{type:[String,Number],default:"auto"},scrollable:{type:Boolean,default:!1},depressed:{type:Boolean,default:!1}},setup(t){const{sizeStyles:l}=(t=>({sizeStyles:e((()=>({maxWidth:"none"===t.maxWidth?void 0:y(t.maxWidth),width:"auto"===t.width?void 0:y(t.width),height:"auto"===t.height?void 0:y(t.height)})))}))(t);return{styles:l,classes:e((()=>["q-dialog-content",{"q-dialog-content--scrollable":t.scrollable,"q-dialog-content--depressed":t.depressed}]))}}});k.render=function(e,t,l,a,n,r){return i(),o("div",{class:e.classes,style:e.styles},[s(e.$slots,"default")],6)};var E=n({name:"GDialog",components:{GDialogOverlay:N,GDialogContent:k},props:{modelValue:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},lockScrollPadding:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},maxWidth:{type:[String,Number],default:"none"},width:{type:[String,Number],default:"auto"},height:{type:[String,Number],default:"auto"},scrollable:{type:Boolean,default:!1},depressed:{type:Boolean,default:!1},hideScrollbar:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:i}){const o=t(),r=t(),d=e((()=>{var e;return null==(e=r.value)?void 0:e.$el})),{activatedOnce:c,active:s,deactivating:v}=(e=>{const n=t(e.value),i=t(e.value),o=t(!1);return l((()=>e.value),(e=>{if(!e)return o.value=!0,void a((()=>{i.value=e,o.value=!1}));n.value?i.value=e:(n.value=!0,a((()=>{i.value=e})))})),{activatedOnce:n,active:i,deactivating:o}})(e((()=>n.modelValue))),{activeZIndex:p}=x({activeElSelector:".q-dialog-frame--active",stackMinZIndex:200,isActive:s,content:o}),g=e((()=>["q-dialog-frame",{"q-dialog-frame--active":s.value}])),m=e((()=>({zIndex:p.value}))),{enableScroll:h,disableScroll:y}=(({overlay:e,content:t})=>{let l=!1;const a=l=>{(l.target===e.value||l.target===document.body||S(l,t.value))&&l.preventDefault()};return{disableScroll:()=>{l||(window.addEventListener("wheel",a,{passive:!1}),l=!0)},enableScroll:()=>{l&&(window.removeEventListener("wheel",a),l=!1)}}})({overlay:d,content:o});return l(s,(e=>{e?y():h()})),u((()=>{h()})),{onClickOutside:()=>{n.persistent||i("update:modelValue",!1)},activatedOnce:c,activeZIndex:p,isActive:s,deactivating:v,classes:g,styles:m,contentFrame:o,overlay:r}}});E.render=function(e,t,l,a,n,u){const y=v("GDialogOverlay"),f=v("GDialogContent");return e.activatedOnce?(i(),o(p,{key:0,to:"body"},[g(y,{ref:"overlay",active:e.isActive,deactivating:e.deactivating,"active-z-index":e.activeZIndex,onClick:e.onClickOutside},null,8,["active","deactivating","active-z-index","onClick"]),g(r,{name:"dialog-transition"},{default:d((()=>[m(g("div",{ref:"contentFrame",class:e.classes,style:e.styles},[g(f,{"max-width":e.maxWidth,width:e.width,height:e.height,scrollable:e.scrollable,depressed:e.depressed},{default:d((()=>[s(e.$slots,"default")])),_:3},8,["max-width","width","height","scrollable","depressed"])],6),[[h,e.isActive]])])),_:1})])):c("",!0)};const C=E;var q={GDialog:E};export{C as GDialog,q as default};
