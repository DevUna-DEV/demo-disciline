(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5491],{70636:function(e,a,t){Promise.resolve().then(t.bind(t,49628)),Promise.resolve().then(t.bind(t,26843)),Promise.resolve().then(t.bind(t,8862))},43272:function(e,a,t){"use strict";t.d(a,{Z:function(){return l}});var n=t(5862),s=t(61962);function r(e){let{strokeWidth:a,...t}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:null!=a?a:1.5,stroke:"currentColor",...t,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}var i=t(51537);function l(e){let{title:a,description:t,onDelete:l}=e;return(0,n.jsxs)(s.Popover,{placement:"left",children:[(0,n.jsx)(s.Popover.Trigger,{children:(0,n.jsx)(s.ActionIcon,{size:"sm",variant:"outline","aria-label":"Delete Item",className:"cursor-pointer hover:!border-gray-900 hover:text-gray-700",children:(0,n.jsx)(r,{className:"h-4 w-4"})})}),(0,n.jsx)(s.Popover.Content,{className:"z-0 ",children:e=>{let{setOpen:r}=e;return(0,n.jsxs)("div",{className:"w-56 pb-2 pt-1 text-left rtl:text-right",children:[(0,n.jsxs)(s.Title,{as:"h6",className:"mb-0.5 flex items-start text-sm text-gray-700 sm:items-center",children:[(0,n.jsx)(i.VeE,{className:"me-1 h-[17px] w-[17px]"})," ",a]}),(0,n.jsx)(s.Text,{className:"mb-2 leading-relaxed text-gray-500",children:t}),(0,n.jsxs)("div",{className:"flex items-center justify-end",children:[(0,n.jsx)(s.Button,{size:"sm",className:"me-1.5 h-7 bg-red-500 hover:bg-red-700",onClick:()=>{l(),r(!1)},children:"Hapus"}),(0,n.jsx)(s.Button,{size:"sm",variant:"outline",className:"h-7",onClick:()=>r(!1),children:"Batal"})]})]})}})]})}},8862:function(e,a,t){"use strict";t.d(a,{default:function(){return T}});var n=t(5862),s=t(97931),r=t(86349),i=t(61917),l=t(20465),c=t(51537),o=t(94231),d=t(92830),m=t(43272),h=t(11897),u=t(61962);let x=e=>{let{onDeleteItem:a}=e;return[{title:(0,n.jsx)(h.qN,{title:"No"}),width:50,dataIndex:"index",key:"index",render:(e,a,t)=>(0,n.jsx)(u.Text,{className:"text-sm",children:t+1})},{title:(0,n.jsx)(h.qN,{title:"Nama Tipe Pelanggaran"}),dataIndex:"nama_tipe_pelanggaran",key:"nama_tipe_pelanggaran",render:e=>(0,n.jsx)(u.Text,{className:"text-sm",children:e})},{title:(0,n.jsx)(h.qN,{title:"Aksi"}),dataIndex:"id",width:20,key:"id",render:e=>(0,n.jsxs)("div",{className:"flex items-center justify-end gap-3 pe-4",children:[(0,n.jsx)(u.Tooltip,{size:"sm",content:"Edit Tipe Pelanggaran",placement:"top",color:"invert",children:(0,n.jsx)(o.default,{href:"/admin/master/tipe-pelanggaran/edit/".concat(e),children:(0,n.jsx)(u.ActionIcon,{size:"sm",variant:"outline","aria-label":"Edit Tipe Pelanggaran",children:(0,n.jsx)(d.Z,{className:"h-4 w-4"})})})}),(0,n.jsx)(m.Z,{title:"Hapus Tipe Pelanggaran",description:"Apakah kamu yakin ingin mengapus tipe pelanggaran ini? ",onDelete:()=>a(e)})]})}]},g=[{href:"/admin/dashboard",name:"Dashboard"},{name:"Tipe Pelanggaran"}];function p(e){let{data:a,onDeleteData:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Z,{title:"Tipe Pelanggaran",breadcrumb:g,data:a,urlButton:"/admin/master/tipe-pelanggaran/tambah",buttonText:"Tambah Tipe Pelanggaran",iconText:(0,n.jsx)(c.$eR,{className:"me-1.5 h-[17px] w-[17px]"}),children:(0,n.jsx)(l.Z,{title:"Data Tipe Pelanggaran",variant:"modern",data:a,getColumns:x,onDelete:t,enablePagination:!0,searchPlaceholder:"Cari tipe pelanggaran...",className:"min-h-[480px] [&_.widget-card-header]:items-center [&_.widget-card-header_h5]:font-medium"})})})}var j=t(7516),f=t(57026),v=t(67058),N=t(65042);function T(){let e=(0,j.useRouter)(),[a]=(0,f.fP)(["accessToken"]),[t,i]=(0,v.useState)([]),[l,c]=(0,v.useState)(!1),[o,d]=(0,v.useState)(!1);(0,v.useEffect)(()=>{(async()=>{c(!0);try{var e;let t=a.accessToken,n=await s.Z.get("".concat(N.env.API_URL,"/api/master/tipe-pelanggaran"),{headers:{Authorization:"Bearer ".concat(t)}});i(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.data),c(!1)}catch(e){console.log(e)}finally{c(!1)}})()},[a.accessToken]);let m=async t=>{c(!0);try{let n=a.accessToken,l=await s.Z.delete("".concat(N.env.API_URL,"/api/master/tipe-pelanggaran/").concat(t),{headers:{Authorization:"Bearer ".concat(n)}});200===l.status&&(r.ZP.success("Tipe pelanggaran berhasil dihapus!"),i(e=>e.filter(e=>e.id!==t)),e.refresh(),d(!0))}catch(e){console.log(e),r.ZP.error("Terjadi kesalahan saat menghapus data, silahkan coba lagi!")}finally{c(!1)}};return l?(0,n.jsx)("div",{className:"mx-auto flex justify-center ",children:(0,n.jsx)(u.Title,{as:"h6",className:"-me-2 mt-4 font-medium text-gray-500",children:"Loading..."})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p,{data:t,onDeleteData:m})})}}},function(e){e.O(0,[5472,6782,1209,3547,177,7026,733,522,5079,158,660,1744],function(){return e(e.s=70636)}),_N_E=e.O()}]);