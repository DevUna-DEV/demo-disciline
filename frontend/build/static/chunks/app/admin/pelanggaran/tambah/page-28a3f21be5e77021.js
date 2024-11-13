(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{51155:function(e,a,n){Promise.resolve().then(n.bind(n,49628)),Promise.resolve().then(n.bind(n,26843)),Promise.resolve().then(n.bind(n,89042))},59155:function(e,a,n){"use strict";n.d(a,{l:function(){return i}});var t=n(5862),r=n(67058),l=n(19628),s=n(23891);let i=e=>{let{onSubmit:a,children:n,useFormProps:i,validationSchema:o,fieldErrors:c,formError:d,resetValues:u,className:g,...m}=e,h=(0,l.cI)({...i,...o&&{resolver:(0,s.F)(o)}});return(0,r.useEffect)(()=>{u&&h.reset(u)},[u,h]),(0,t.jsx)("form",{noValidate:!0,onSubmit:h.handleSubmit(a),...m,className:g,children:n(h)})}},95700:function(e,a,n){"use strict";n.d(a,{Z:function(){return c}});var t=n(5862),r=n(61962),l=n(66389),s=n(67058),i=n(94231);let o=e=>{let{separator:a="/",disableCurrent:n=!0,children:r,className:i,separatorClassName:o,separatorVariant:c="default"}=e,d=s.Children.count(r);return(0,t.jsx)("div",{className:(0,l.Z)("inline-flex items-center gap-2.5",i),children:s.Children.map(r,(e,r)=>s.isValidElement(e)?(0,t.jsxs)(t.Fragment,{children:[s.cloneElement(e,{className:(0,l.Z)("text-gray-700 last:text-gray-500 font-medium",n&&"last:pointer-events-none")}),r<d-1&&("default"===c?(0,t.jsx)("span",{className:(0,l.Z)("text-sm text-gray-500",o),children:a}):(0,t.jsx)("span",{className:"h-1 w-1 rounded-full bg-gray-300"}))]}):e)})};function c(e){let{title:a,breadcrumb:n,children:s,className:i}=e;return(0,t.jsx)("header",{className:(0,l.Z)("mb-6 @container xs:-mt-2 lg:mb-7",i),children:(0,t.jsxs)("div",{className:"flex flex-col @lg:flex-row @lg:items-center @lg:justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(r.Title,{as:"h2",className:"mb-2 text-[22px] lg:text-2xl 4xl:text-[26px]",children:a}),(0,t.jsx)(o,{separator:"/",separatorVariant:"default",className:"flex-wrap",children:n.map(e=>(0,t.jsx)(o.Item,{...(null==e?void 0:e.href)&&{href:null==e?void 0:e.href},children:e.name},e.name))})]}),s]})})}o.Item=e=>{let{href:a="#",className:n,children:r}=e;return(0,t.jsx)(i.default,{href:a,role:"button",className:(0,l.Z)("inline-flex items-center gap-2 text-sm",n),children:r})},o.displayName="Breadcrumb"},66389:function(e,a,n){"use strict";n.d(a,{Z:function(){return l}});var t=n(73635),r=n(20757);function l(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return(0,r.m6)((0,t.W)(a))}},52671:function(e,a,n){"use strict";n.d(a,{Z:function(){return m}});var t=n(5862),r=n(97931),l=n(61962),s=n(57026),i=n(67058),o=n(19628),c=n(65042);function d(e){let{control:a,error:n}=e,[d]=(0,s.fP)(["accessToken"]),[u,g]=(0,i.useState)([]),[m,h]=(0,i.useState)(!1);(0,i.useEffect)(()=>{h(!0),(async()=>{try{var e;let a=d.accessToken,n=await r.Z.get("".concat(c.env.API_URL,"/api/siswa"),{headers:{Authorization:"Bearer ".concat(a)}}),t=null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.data.map(e=>({id:e.id,nama_lengkap:e.nama_lengkap}));g(t)}catch(e){console.log(e)}finally{h(!1)}})()},[d.accessToken]);let f=u.map(e=>({value:e.id,label:e.nama_lengkap})),p=e=>f.find(a=>a.value===e)||null;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.Qr,{name:"siswaId",control:a,render:e=>{let{field:{onChange:a,value:r}}=e,s=p(r);return(0,t.jsx)(l.Select,{size:"lg",label:"Siswa",value:s||null,error:"string"==typeof n?n:void 0,placeholder:"Pilih Siswa...",dropdownClassName:"!z-0",options:f,onChange:a,getOptionValue:e=>e.value})}})})}var u=n(65042);function g(e){let{control:a,error:n}=e,[c]=(0,s.fP)(["accessToken"]),[d,g]=(0,i.useState)([]),[m,h]=(0,i.useState)(!1);(0,i.useEffect)(()=>{h(!0),(async()=>{try{var e;let a=c.accessToken,n=await r.Z.get("".concat(u.env.API_URL,"/api/master/tipe-pelanggaran"),{headers:{Authorization:"Bearer ".concat(a)}}),t=null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.data.map(e=>({id:e.id,nama_tipe_pelanggaran:e.nama_tipe_pelanggaran}));g(t)}catch(e){console.log(e)}finally{h(!1)}})()},[c.accessToken]);let f=d.map(e=>({value:e.id,label:e.nama_tipe_pelanggaran})),p=e=>f.find(a=>a.value===e)||null;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.Qr,{name:"tipePelanggaranId",control:a,render:e=>{let{field:{onChange:a,value:r}}=e,s=p(r);return(0,t.jsx)(l.Select,{size:"lg",label:"Tipe Pelanggaran",value:s||null,error:"string"==typeof n?n:void 0,placeholder:"Pilih Tipe Pelanggaran...",dropdownClassName:"!z-0",options:f,onChange:a,getOptionValue:e=>e.value})}})})}function m(e){var a,n,r;let{register:s,errors:i,control:o}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"grid gap-5 md:grid-cols-2",children:[(0,t.jsx)(g,{control:o,error:null===(a=i.tipePelanggaranId)||void 0===a?void 0:a.message}),(0,t.jsx)(d,{control:o,error:null===(n=i.siswaId)||void 0===n?void 0:n.message})]}),(0,t.jsx)(l.Textarea,{label:"Keterangan",...s("keterangan"),error:null===(r=i.keterangan)||void 0===r?void 0:r.message})]})}},89042:function(e,a,n){"use strict";n.d(a,{default:function(){return p}});var t=n(5862),r=n(94231),l=n(97931),s=n(86349),i=n(52671),o=n(95700),c=n(59155),d=n(61962),u=n(7516),g=n(57026),m=n(88871),h=n(65042);let f=[{href:"/admin/dashboard",name:"Dashboard"},{href:"/admin/pelanggaran",name:"Pelanggaran Siswa"},{name:"Tambah Pelanggaran Siswa"}];function p(){let e=(0,u.useRouter)(),[a]=(0,g.fP)(["accessToken"]),n=async n=>{try{let t=a.accessToken,r=await l.Z.post("".concat(h.env.API_URL,"/api/pelanggaran"),n,{headers:{Authorization:"Bearer ".concat(t)}});console.log(r),201===r.status&&(s.ZP.success("Pelanggaran berhasil ditambahkan!"),e.refresh(),e.push("/admin/pelanggaran"))}catch(e){console.log(e),s.ZP.error("Terjadi kesalahan saat menambahkan data, silahkan coba lagi!")}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Z,{title:"Tambah Pelanggaran Siswa",breadcrumb:f}),(0,t.jsx)(c.l,{validationSchema:m.p,onSubmit:n,children:e=>{let{register:a,control:n,formState:{errors:l}}=e;return(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)(i.Z,{control:n,register:a,errors:l}),(0,t.jsxs)("div",{className:"flex items-center justify-end gap-3",children:[(0,t.jsx)(d.Button,{type:"submit",size:"lg",children:"Tambah Pelanggaran Siswa"}),(0,t.jsx)(r.default,{href:"/admin/pelanggaran",children:(0,t.jsx)(d.Button,{size:"lg",className:" cursor-pointer bg-red-500 hover:bg-red-700 ",children:"Batalkan"})})]})]})}})]})}},88871:function(e,a,n){"use strict";n.d(a,{p:function(){return r}});var t=n(97992);let r=t.z.object({tipePelanggaranId:t.z.string().min(2,"Form tipe pelanggaran harus dipilih!"),siswaId:t.z.string().min(2,"Form siswa harus dipilih!"),keterangan:t.z.string().min(2,"Form keterangan harus diisi!")})},49628:function(e,a,n){"use strict";n.r(a),a.default={src:"/_next/static/media/logo-short.18ca02a8.svg",height:38,width:61,blurWidth:0,blurHeight:0}},26843:function(e,a,n){"use strict";n.r(a),a.default={src:"/_next/static/media/logo.a795e14a.svg",height:28,width:155,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[5472,1209,3547,177,7026,733,1309,158,660,1744],function(){return e(e.s=51155)}),_N_E=e.O()}]);