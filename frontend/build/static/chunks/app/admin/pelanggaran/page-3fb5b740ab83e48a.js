(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8814],{24863:function(){},82963:function(){},41343:function(e,a,t){Promise.resolve().then(t.bind(t,49628)),Promise.resolve().then(t.bind(t,26843)),Promise.resolve().then(t.bind(t,98059))},99699:function(e,a,t){var n,i,s;i=[],void 0!==(s="function"==typeof(n=function(){"use strict";function a(e,a,t){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){o(n.response,a,t)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var a=new XMLHttpRequest;a.open("HEAD",e,!1);try{a.send()}catch(e){}return 200<=a.status&&299>=a.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof t.g&&t.g.global===t.g?t.g:void 0,r=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,t,r){var o=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):n(l.href)?a(e,t,r):i(l,l.target="_blank")):(l.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(l.href)},4e4),setTimeout(function(){i(l)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,s){if(t=t||e.name||"download","string"!=typeof e){var r;navigator.msSaveOrOpenBlob((void 0===(r=s)?r={autoBom:!1}:"object"!=typeof r&&(console.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),t)}else if(n(e))a(e,t,s);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){i(o)})}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var o="application/octet-stream"===e.type,l=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&l||r)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},d.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,m=u.createObjectURL(e);i?i.location=m:location.href=m,i=null,setTimeout(function(){u.revokeObjectURL(m)},4e4)}});s.saveAs=o.saveAs=o,e.exports=o})?n.apply(a,i):n)&&(e.exports=s)},59889:function(e,a){"use strict";a.Z=e=>{let a;if(null==e)return"";let t=new Date(e),n=t.getFullYear(),i=t.getDate();switch(t.getMonth()){case 0:a="Januari";break;case 1:a="Februari";break;case 2:a="Maret";break;case 3:a="April";break;case 4:a="Mei";break;case 5:a="Juni";break;case 6:a="Juli";break;case 7:a="Agustus";break;case 8:a="September";break;case 9:a="Oktober";break;case 10:a="November";break;case 11:a="Desember"}return void 0===a?"":"".concat(i," ").concat(a," ").concat(n)}},98059:function(e,a,t){"use strict";t.d(a,{default:function(){return j}});var n=t(5862),i=t(73664),s=t(97931),r=t(61917),o=t(20465),l=t(51537),c=t(94231),d=t(92830),u=t(11897),m=t(61962);let p=()=>[{title:(0,n.jsx)(u.qN,{title:"No"}),width:50,dataIndex:"index",key:"index",render:(e,a,t)=>(0,n.jsx)(m.Text,{className:"text-sm",children:t+1})},{title:(0,n.jsx)(u.qN,{title:"Pelanggaran Yang Dilakukan"}),dataIndex:"tipe_pelanggaran",key:"tipe_pelanggaran",render:e=>(0,n.jsx)(m.Text,{className:"text-sm",children:null==e?void 0:e.nama_tipe_pelanggaran})},{title:(0,n.jsx)(u.qN,{title:"Siswa"}),dataIndex:"siswa",key:"siswa",render:e=>(0,n.jsx)(m.Text,{className:"text-sm",children:null==e?void 0:e.nama_lengkap})},{title:(0,n.jsx)(u.qN,{title:"Kelas"}),dataIndex:"siswa",key:"siswa",render:e=>{var a;return(0,n.jsx)(m.Text,{className:"text-sm",children:null==e?void 0:null===(a=e.kelas)||void 0===a?void 0:a.nama_kelas})}},{title:(0,n.jsx)(u.qN,{title:"Nama Wali"}),dataIndex:"siswa",key:"siswa",render:e=>(0,n.jsx)(m.Text,{className:"text-sm",children:null==e?void 0:e.nama_wali})},{title:(0,n.jsx)(u.qN,{title:"No Telp Wali"}),dataIndex:"siswa",key:"siswa",render:e=>(0,n.jsx)(m.Text,{className:"text-sm",children:null==e?void 0:e.no_telp_wali})},{title:(0,n.jsx)(u.qN,{title:"Alamat"}),dataIndex:"siswa",key:"siswa",render:e=>(0,n.jsx)(m.Text,{className:"text-sm",children:null==e?void 0:e.alamat})},{title:(0,n.jsx)(u.qN,{title:"Keterangan"}),dataIndex:"keterangan",key:"keterangan",render:e=>(0,n.jsx)(m.Text,{className:"text-sm",children:e||"-"})},{title:(0,n.jsx)(u.qN,{title:"Aksi"}),dataIndex:"id",width:20,key:"id",render:e=>(0,n.jsx)("div",{className:"flex items-center justify-end gap-3 pe-4",children:(0,n.jsx)(m.Tooltip,{size:"sm",content:"Edit Pelanggaran",placement:"top",color:"invert",children:(0,n.jsx)(c.default,{href:"/admin/pelanggaran/edit/".concat(e),children:(0,n.jsx)(m.ActionIcon,{size:"sm",variant:"outline","aria-label":"Edit Pelanggaran",children:(0,n.jsx)(d.Z,{className:"h-4 w-4"})})})})})}];var g=t(6521);let x=[{href:"/admin/dashboard",name:"Dashboard"},{name:"Pelanggaran Siswa"}];function v(e){let{data:a,handleExport:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z,{title:"Pelanggaran Siswa",breadcrumb:x,data:a,urlButton:"/admin/pelanggaran/tambah",buttonText:"Tambah Pelanggaran",iconText:(0,n.jsx)(l.$eR,{className:"me-1.5 h-[17px] w-[17px]"}),buttonExport:"Export Data",iconExport:(0,n.jsx)(g.GzT,{className:"me-1.5 h-[17px] w-[17px]"}),variantExport:"bg-green-500 hover:bg-green-600",handleExport:t,children:(0,n.jsx)(o.Z,{title:"Data Pelanggaran Siswa",variant:"modern",data:a,getColumns:p,enablePagination:!0,searchPlaceholder:"Cari siswa...",className:"min-h-[480px] [&_.widget-card-header]:items-center [&_.widget-card-header_h5]:font-medium"})})})}var f=t(59889),w=t(99699),h=t(57026),b=t(67058),k=t(65042);function j(){let[e]=(0,h.fP)(["accessToken"]),[a,t]=(0,b.useState)(!1),[r,o]=(0,b.useState)([]);(0,b.useEffect)(()=>{(async()=>{t(!0);try{var a;let n=e.accessToken,i=await s.Z.get("".concat(k.env.API_URL,"/api/pelanggaran"),{headers:{Authorization:"Bearer ".concat(n)}});o(null==i?void 0:null===(a=i.data)||void 0===a?void 0:a.data),t(!1)}catch(e){console.error(e)}finally{t(!1)}})()},[e.accessToken]);let l=e=>e.map(e=>{var a,t,n,i,s,r,o;return{nama_tipe_pelanggaran:null===(a=e.tipe_pelanggaran)||void 0===a?void 0:a.nama_tipe_pelanggaran,nama_siswa:null===(t=e.siswa)||void 0===t?void 0:t.nama_lengkap,nama_kelas:null===(i=e.siswa)||void 0===i?void 0:null===(n=i.kelas)||void 0===n?void 0:n.nama_kelas,nama_wali:null===(s=e.siswa)||void 0===s?void 0:s.nama_wali,no_telp_wali:null===(r=e.siswa)||void 0===r?void 0:r.no_telp_wali,alamat:null===(o=e.siswa)||void 0===o?void 0:o.alamat,keterangan:e.keterangan}});return a?(0,n.jsx)("div",{className:"mx-auto flex justify-center ",children:(0,n.jsx)(m.Title,{as:"h6",className:"-me-2 mt-4 font-medium text-gray-500",children:"Loading..."})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(v,{data:r,handleExport:()=>{let e=l(r),a=i.P6.aoa_to_sheet([["Pelanggaran Yang Dilakukan","Nama Lengkap Siswa","Kelas","Nama Wali Kelas","No Telp Wali","Alamat Siswa","Keterangan"]]);i.P6.sheet_add_json(a,e,{origin:"A2",skipHeader:!0});let t=i.P6.book_new();i.P6.book_append_sheet(t,a,"Data Pelanggaran");let n=new Blob([i.cW(t,{bookType:"xlsx",type:"array"})],{type:"application/octet-stream"});(0,w.saveAs)(n,"Data Pelanggaran Siswa ".concat((0,f.Z)(new Date().toISOString()),".xlsx"))}})})}}},function(e){e.O(0,[5472,6782,2156,7531,1209,3547,177,7026,522,5079,158,660,1744],function(){return e(e.s=41343)}),_N_E=e.O()}]);