(()=>{var e={};e.id=1638,e.ids=[1638],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},819:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>i.a,__next_app__:()=>l,originalPathname:()=>m,pages:()=>u,routeModule:()=>p,tree:()=>d}),a(2738),a(6447),a(93423),a(20767);var r=a(56126),s=a(51947),n=a(98952),i=a.n(n),o=a(16971),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);a.d(t,c);let d=["",{children:["admin",{children:["master",{children:["jabatan",{children:["tambah",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,2738)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/admin/master/jabatan/tambah/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,6447)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/admin/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,93423)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,20767)),"/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/not-found.tsx"]}],u=["/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/app/admin/master/jabatan/tambah/page.tsx"],m="/admin/master/jabatan/tambah/page",l={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin/master/jabatan/tambah/page",pathname:"/admin/master/jabatan/tambah",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},73010:(e,t,a)=>{Promise.resolve().then(a.bind(a,80863)),Promise.resolve().then(a.bind(a,42617)),Promise.resolve().then(a.bind(a,18455))},16466:(e,t,a)=>{"use strict";a.d(t,{l:()=>o});var r=a(46496),s=a(47364),n=a(26274),i=a(17066);let o=({onSubmit:e,children:t,useFormProps:a,validationSchema:o,fieldErrors:c,formError:d,resetValues:u,className:m,...l})=>{let p=(0,n.cI)({...a,...o&&{resolver:(0,i.F)(o)}});return(0,s.useEffect)(()=>{u&&p.reset(u)},[u,p]),r.jsx("form",{noValidate:!0,onSubmit:p.handleSubmit(e),...l,className:m,children:t(p)})}},54009:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(46496),s=a(13159);function n(e){let{register:t,errors:a}=e;return r.jsx(r.Fragment,{children:r.jsx(s.II,{type:"text",size:"lg",label:"Nama Jabatan",placeholder:"Masukkan jabatan...",className:"[&>label>span]:font-medium",inputClassName:"text-sm",...t("nama_jabatan"),error:a.nama_jabatan?.message})})}},18455:(e,t,a)=>{"use strict";a.d(t,{default:()=>b});var r=a(46496),s=a(88925),n=a(4407),i=a(20056),o=a(54009),c=a(50960),d=a(16466),u=a(13159),m=a(82480),l=a(97347),p=a(82918);let x={title:"Tambah Jabatan",breadcrumb:[{href:"/admin/dashboard",name:"Dashboard"},{href:"/admin/master/jabatan",name:"Jabatan"},{name:"Tambah Jabatan"}]};function b(){let e=(0,m.useRouter)(),[t]=(0,l.fP)(["accessToken"]),a=async a=>{try{let r=t.accessToken,s={Authorization:`Bearer ${r}`},o=await n.Z.post(`${process.env.API_URL}/api/master/jabatan`,a,{headers:s});201===o.status&&(i.ZP.success("Jabatan berhasil ditambahkan!"),e.refresh(),e.push("/admin/master/jabatan"))}catch(e){409===e.response.status?i.ZP.error("Jabatan sudah ada"):i.ZP.error("Terjadi kesalahan saat menambahkan data, silahkan coba lagi!")}};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(c.Z,{title:x.title,breadcrumb:x.breadcrumb}),r.jsx(d.l,{validationSchema:p.p,onSubmit:a,children:({register:e,formState:{errors:t}})=>(0,r.jsxs)("div",{className:"space-y-3",children:[r.jsx(o.Z,{register:e,errors:t}),(0,r.jsxs)("div",{className:"flex items-center justify-end gap-3",children:[r.jsx(u.Button,{type:"submit",size:"lg",children:"Tambah Jabatan"}),r.jsx(s.default,{href:"/admin/master/jabatan",children:r.jsx(u.Button,{size:"lg",className:" cursor-pointer bg-red-500 hover:bg-red-700 ",children:"Batalkan"})})]})]})})]})}},82918:(e,t,a)=>{"use strict";a.d(t,{p:()=>s});var r=a(85457);let s=r.z.object({nama_jabatan:r.z.string().min(2,"Form jabatan harus diisi!")})},2738:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m,metadata:()=>u});var r=a(43859),s=a(73112),n=a(23215);let i=(0,n.createProxy)(String.raw`/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/views/admin/master/jabatan/form/tambah/index.tsx`),{__esModule:o,$$typeof:c}=i;i.default;let d=(0,n.createProxy)(String.raw`/home/xriot/Projects/DevUna/source-code-demo-discline/frontend/src/views/admin/master/jabatan/form/tambah/index.tsx#default`),u={...(0,s.B)("Tambah Jabatan")};function m(){return r.jsx(r.Fragment,{children:r.jsx(d,{})})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[2192,2,9e3,4587,1438,9800],()=>a(819));module.exports=r})();