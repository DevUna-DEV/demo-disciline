(()=>{var e={};e.id=1022,e.ids=[1022],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},32816:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>l,pages:()=>u,routeModule:()=>p,tree:()=>c}),r(22631),r(6447),r(93423),r(20767);var s=r(56126),i=r(51947),n=r(98952),a=r.n(n),d=r(16971),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);r.d(t,o);let c=["",{children:["admin",{children:["master",{children:["pendidikan",{children:["edit",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,22631)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/admin/master/pendidikan/edit/[id]/page.tsx"]}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,6447)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/admin/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,93423)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,20767)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/not-found.tsx"]}],u=["/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/admin/master/pendidikan/edit/[id]/page.tsx"],l="/admin/master/pendidikan/edit/[id]/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/admin/master/pendidikan/edit/[id]/page",pathname:"/admin/master/pendidikan/edit/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},30170:(e,t,r)=>{Promise.resolve().then(r.bind(r,80863)),Promise.resolve().then(r.bind(r,42617)),Promise.resolve().then(r.bind(r,30331))},16466:(e,t,r)=>{"use strict";r.d(t,{l:()=>d});var s=r(46496),i=r(47364),n=r(26274),a=r(17066);let d=({onSubmit:e,children:t,useFormProps:r,validationSchema:d,fieldErrors:o,formError:c,resetValues:u,className:l,...m})=>{let p=(0,n.cI)({...r,...d&&{resolver:(0,a.F)(d)}});return(0,i.useEffect)(()=>{u&&p.reset(u)},[u,p]),s.jsx("form",{noValidate:!0,onSubmit:p.handleSubmit(e),...m,className:l,children:t(p)})}},30331:(e,t,r)=>{"use strict";r.d(t,{default:()=>P});var s=r(46496),i=r(88925),n=r(4407),a=r(20056),d=r(72177),o=r(50960),c=r(16466),u=r(13159),l=r(47364),m=r(97347),p=r(82480),x=r(23645);let h={title:"Edit Pendidikan",breadcrumb:[{href:"/admin/dashboard",name:"Dashboard"},{href:"/admin/master/pendidikan",name:"Pendidikan"},{name:"Edit Pendidikan"}]};function P(){let e=(0,p.useRouter)(),t=(0,p.usePathname)().split("/").pop(),[r]=(0,m.fP)(["accessToken"]),[P,f]=(0,l.useState)({nama_pendidikan:""}),k=async s=>{try{let i=r.accessToken,d={Authorization:`Bearer ${i}`},o=await n.Z.put(`${process.env.API_URL}/api/master/pendidikan/${t}`,s,{headers:d});200===o.status&&(a.ZP.success("Pendidikan berhasil diedit!"),e.refresh(),e.push("/admin/master/pendidikan"))}catch(e){409===e.response.status?a.ZP.error("Pendidikan sudah ada"):a.ZP.error("Terjadi kesalahan saat mengubah data, silahkan coba lagi!")}};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(o.Z,{title:h.title,breadcrumb:h.breadcrumb}),s.jsx(c.l,{onSubmit:k,resetValues:!1,validationSchema:x.p,useFormProps:{values:{nama_pendidikan:P?.nama_pendidikan},mode:"onChange"},children:({register:e,formState:{errors:t}})=>(0,s.jsxs)("div",{className:"space-y-3",children:[s.jsx(d.Z,{register:e,errors:t}),(0,s.jsxs)("div",{className:"flex items-center justify-end gap-3",children:[s.jsx(u.Button,{type:"submit",size:"lg",children:"Edit Pendidikan"}),s.jsx(i.default,{href:"/admin/master/pendidikan",children:s.jsx(u.Button,{size:"lg",className:" cursor-pointer bg-red-500 hover:bg-red-700 ",children:"Batalkan"})})]})]})})]})}},72177:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(46496),i=r(13159);function n(e){let{register:t,errors:r}=e;return s.jsx(s.Fragment,{children:s.jsx(i.II,{type:"text",size:"lg",label:"Nama Pendidikan",placeholder:"Masukkan pendidikan...",className:"[&>label>span]:font-medium",inputClassName:"text-sm",...t("nama_pendidikan"),error:r.nama_pendidikan?.message})})}},23645:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var s=r(85457);let i=s.z.object({nama_pendidikan:s.z.string().min(2,"Form pendidikan harus diisi!")})},22631:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>u});var s=r(43859),i=r(73112),n=r(23215);let a=(0,n.createProxy)(String.raw`/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/views/admin/master/pendidikan/form/edit/index.tsx`),{__esModule:d,$$typeof:o}=a;a.default;let c=(0,n.createProxy)(String.raw`/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/views/admin/master/pendidikan/form/edit/index.tsx#default`),u={...(0,i.B)("Edit Pendidikan")};function l(){return s.jsx(s.Fragment,{children:s.jsx(c,{})})}}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[2192,2,9e3,4587,1438,9800],()=>r(32816));module.exports=s})();