(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7125],{14908:function(e,a,t){Promise.resolve().then(t.bind(t,49628)),Promise.resolve().then(t.bind(t,26843)),Promise.resolve().then(t.bind(t,21711))},59155:function(e,a,t){"use strict";t.d(a,{l:function(){return l}});var r=t(5862),n=t(67058),s=t(19628),i=t(23891);let l=e=>{let{onSubmit:a,children:t,useFormProps:l,validationSchema:u,fieldErrors:c,formError:o,resetValues:d,className:m,...h}=e,f=(0,s.cI)({...l,...u&&{resolver:(0,i.F)(u)}});return(0,n.useEffect)(()=>{d&&f.reset(d)},[d,f]),(0,r.jsx)("form",{noValidate:!0,onSubmit:f.handleSubmit(a),...h,className:m,children:t(f)})}},95700:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var r=t(5862),n=t(61962),s=t(66389),i=t(67058),l=t(94231);let u=e=>{let{separator:a="/",disableCurrent:t=!0,children:n,className:l,separatorClassName:u,separatorVariant:c="default"}=e,o=i.Children.count(n);return(0,r.jsx)("div",{className:(0,s.Z)("inline-flex items-center gap-2.5",l),children:i.Children.map(n,(e,n)=>i.isValidElement(e)?(0,r.jsxs)(r.Fragment,{children:[i.cloneElement(e,{className:(0,s.Z)("text-gray-700 last:text-gray-500 font-medium",t&&"last:pointer-events-none")}),n<o-1&&("default"===c?(0,r.jsx)("span",{className:(0,s.Z)("text-sm text-gray-500",u),children:a}):(0,r.jsx)("span",{className:"h-1 w-1 rounded-full bg-gray-300"}))]}):e)})};function c(e){let{title:a,breadcrumb:t,children:i,className:l}=e;return(0,r.jsx)("header",{className:(0,s.Z)("mb-6 @container xs:-mt-2 lg:mb-7",l),children:(0,r.jsxs)("div",{className:"flex flex-col @lg:flex-row @lg:items-center @lg:justify-between",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(n.Title,{as:"h2",className:"mb-2 text-[22px] lg:text-2xl 4xl:text-[26px]",children:a}),(0,r.jsx)(u,{separator:"/",separatorVariant:"default",className:"flex-wrap",children:t.map(e=>(0,r.jsx)(u.Item,{...(null==e?void 0:e.href)&&{href:null==e?void 0:e.href},children:e.name},e.name))})]}),i]})})}u.Item=e=>{let{href:a="#",className:t,children:n}=e;return(0,r.jsx)(l.default,{href:a,role:"button",className:(0,s.Z)("inline-flex items-center gap-2 text-sm",t),children:n})},u.displayName="Breadcrumb"},66389:function(e,a,t){"use strict";t.d(a,{Z:function(){return s}});var r=t(73635),n=t(20757);function s(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,n.m6)((0,r.W)(a))}},33852:function(e,a,t){"use strict";t.d(a,{Z:function(){return s}});var r=t(5862),n=t(61962);function s(e){var a;let{register:t,errors:s}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.Input,{type:"text",size:"lg",label:"Nama Jurusan",placeholder:"Masukkan jurusan...",className:"[&>label>span]:font-medium",inputClassName:"text-sm",...t("nama_jurusan"),error:null===(a=s.nama_jurusan)||void 0===a?void 0:a.message})})}},21711:function(e,a,t){"use strict";t.d(a,{default:function(){return b}});var r=t(5862),n=t(94231),s=t(97931),i=t(86349),l=t(33852),u=t(95700),c=t(59155),o=t(61962),d=t(7516),m=t(57026),h=t(19444),f=t(65042);let x=[{href:"/admin/dashboard",name:"Dashboard"},{href:"/admin/master/jurusan",name:"Jurusan"},{name:"Tambah Jurusan"}];function b(){let e=(0,d.useRouter)(),[a]=(0,m.fP)(["accessToken"]),t=async t=>{try{let r=a.accessToken,n=await s.Z.post("".concat(f.env.API_URL,"/api/master/jurusan"),t,{headers:{Authorization:"Bearer ".concat(r)}});201===n.status&&(i.ZP.success("Jurusan berhasil ditambahkan!"),e.refresh(),e.push("/admin/master/jurusan"))}catch(e){409===e.response.status?(console.log(e),i.ZP.error("Jurusan sudah ada")):(console.log(e),i.ZP.error("Terjadi kesalahan saat menambahkan data, silahkan coba lagi!"))}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{title:"Tambah Jurusan",breadcrumb:x}),(0,r.jsx)(c.l,{validationSchema:h.p,onSubmit:t,children:e=>{let{register:a,formState:{errors:t}}=e;return(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsx)(l.Z,{register:a,errors:t}),(0,r.jsxs)("div",{className:"flex items-center justify-end gap-3",children:[(0,r.jsx)(o.Button,{type:"submit",size:"lg",children:"Tambah Jurusan"}),(0,r.jsx)(n.default,{href:"/admin/master/jurusan",children:(0,r.jsx)(o.Button,{size:"lg",className:" cursor-pointer bg-red-500 hover:bg-red-700 ",children:"Batalkan"})})]})]})}})]})}},19444:function(e,a,t){"use strict";t.d(a,{p:function(){return n}});var r=t(97992);let n=r.z.object({nama_jurusan:r.z.string().min(2,"Form jurusan harus diisi!")})},49628:function(e,a,t){"use strict";t.r(a),a.default={src:"/_next/static/media/logo-short.18ca02a8.svg",height:38,width:61,blurWidth:0,blurHeight:0}},26843:function(e,a,t){"use strict";t.r(a),a.default={src:"/_next/static/media/logo.a795e14a.svg",height:28,width:155,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[5472,1209,3547,177,7026,733,1309,158,660,1744],function(){return e(e.s=14908)}),_N_E=e.O()}]);