"use strict";(()=>{var t={};t.id=703,t.ids=[703],t.modules={517:t=>{t.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7214:(t,e,o)=>{o.r(e),o.d(e,{headerHooks:()=>b,originalPathname:()=>w,patchFetch:()=>v,requestAsyncStorage:()=>m,routeModule:()=>d,serverHooks:()=>g,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>x});var a={};o.r(a),o.d(a,{GET:()=>p});var r=o(5419),s=o(9108),i=o(9678),n=o(9647),l=o(8983),c=o.n(l),u=o(7252);async function p(){let t=await {rules:{userAgent:"*",allow:"/"},sitemap:`${c().siteUrl}/sitemap.xml`,host:c().siteUrl},e=(0,u.resolveRouteData)(t,"robots");return new n.NextResponse(e,{headers:{"Content-Type":"text/plain","Cache-Control":"public, max-age=0, must-revalidate"}})}let d=new r.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/robots.txt/route",pathname:"/robots.txt",filename:"robots",bundlePath:"app/robots.txt/route"},resolvedPagePath:"next-metadata-route-loader?page=%2Frobots.txt%2Froute&isDynamic=1!/home/scottlee/Code/scottlee/app/robots.ts?__next_metadata_route__",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:h,serverHooks:g,headerHooks:b,staticGenerationBailout:x}=d,w="/robots.txt/route";function v(){return(0,i.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:h})}},8983:t=>{let e={title:"Scottlee Blog",author:"Scottlee",headerTitle:"Scottlee",description:"A blog created with Next.js and Tailwind.css",language:"en-us",theme:"system",siteUrl:"https://scottlee0191.github.io/scottlee",siteRepo:"https://github.com/scottlee0191/scottlee",siteLogo:"/static/images/logo.png",socialBanner:"/static/images/twitter-card.png",email:"scottlee0191@gmail.com",github:"https://github.com/scottlee0191",twitter:"https://twitter.com/ScottLee0191",linkedin:"https://www.linkedin.com/in/le-son-85a08999/",locale:"en-US",analytics:{umamiAnalytics:{umamiWebsiteId:process.env.NEXT_UMAMI_ID}},newsletter:{provider:"buttondown"},comments:{provider:"giscus",giscusConfig:{repo:"",repositoryId:"",category:"",categoryId:"",mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:"",lang:"en"}},search:{provider:"kbar",kbarConfig:{searchDocumentsPath:"search.json"}}};t.exports=e}};var e=require("../../webpack-runtime.js");e.C(t);var o=t=>e(e.s=t),a=e.X(0,[638,224],()=>o(7214));module.exports=a})();