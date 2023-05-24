import{E as e,a as n,r as t,o as a,g as l,u as o,b as s,c as r,d as i,e as u,f as c,h as d,i as p,w as m,j as h,t as f,k as g,l as v,p as M,m as b,n as y,q as I,F as _,s as k,v as w,x,y as U,z as T,A as D,B as L,K as E,C,D as S,O as N,G as P,H as W,I as V,J as O,L as R}from"./vendor.72bc6815.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();var F=new Date,A=F.getMonth()+1,H=F.getDate();const J={Year:F.getFullYear(),Month:A<10?"0"+A:A,Day:H<10?"0"+H:H,Week:(()=>{let e="";switch(F.getDay()){case 0:e="星期天";break;case 1:e="星期一";break;case 2:e="星期二";break;case 3:e="星期三";break;case 4:e="星期四";break;case 5:e="星期五";break;case 6:e="星期六"}return e})(),YearWeek:(e=>{let n=new Date(e.getFullYear(),0,1),t=e.getDay();0==t&&(t=7);let a=n.getDay();0==a&&(a=7);let l=e.getTime()-n.getTime(),o=Math.floor((l+864e5*(a-t))/864e5);return Math.ceil(o/7)})(F),loadding:null,showLoadding(n){if(!J.loadding)return J.loadding=e.service({fullscreen:!0,body:!0,text:n||"Loading..."}),J.loadding},hideLoadding(){J.loadding&&J.loadding.close(),J.loadding=null},showSuccess:e=>n({grouping:!0,message:e,type:"success"}),showError:e=>n({grouping:!0,message:e,type:"error"}),showWarning:e=>n({grouping:!0,message:e,type:"warning"}),showDefault:e=>n({grouping:!0,message:e,type:"info"}),saveData(e,n){localStorage.setItem(e,JSON.stringify(n))},removeData(e){localStorage.removeItem(e)},getData(e){let n=localStorage.getItem(e);return null!=n&&"undefined"!=n&&null!=n?JSON.parse(n):null}};const Y={class:"LoginContainer"},j={class:"Login"},z=d("div",{class:"L-left-Logo"},[d("img",{src:"./assets/System-Logo.8a764cac.png",alt:"我是个logo"})],-1),q={class:"L-right-Form"},B=d("div",{class:"LoginTitle"}," 妖怪系统登录 ",-1),$={class:"Logincontent"},K=d("br",null,null,-1),G=d("br",null,null,-1),Q=g("记住账户密码"),X=g("登录"),Z={class:"footer"},ee={setup(e){const n=t("");a((()=>{n.value="妖怪得懒癌管理系统",J.getData("MonsterUserID")&&(I.UserName=J.getData("MonsterUserID"),I.PassWord=l.decode(J.getData("MonsterUserPassWord")))}));const g=t("large"),M=t("right"),b=o(),y=s(),I=r({UserName:"",PassWord:"",rememberSysUser:!0}),_=()=>{v.post("api/Login",I).then((e=>{200==e.data.code?(k(),y.commit("setUserInfo",e.data.userInfo),b.push("Index"),J.showSuccess("登陆成功,欢迎使用!")):J.showWarning("账户或密码错误!")})).catch((e=>{console.log(JSON.stringify(e))}))},k=()=>{if(I.rememberSysUser){let e=l.encode(I.PassWord);J.saveData("MonsterUserID",I.UserName),J.saveData("MonsterUserPassWord",e)}else J.removeData("MonsterUserID"),J.removeData("MonsterUserPassWord")};return(e,t)=>{const a=i("el-input"),l=i("el-checkbox"),o=i("el-button"),s=i("el-form-item"),r=i("el-form");return u(),c("div",Y,[d("div",j,[z,d("div",q,[B,d("div",$,[p(r,{ref:(e,n)=>{n.form=e},model:h(I),"label-width":"auto","label-position":M.value,size:g.value},{default:m((()=>[p(a,{modelValue:h(I).UserName,"onUpdate:modelValue":t[0]||(t[0]=e=>h(I).UserName=e),"prefix-icon":"User",placeholder:"请输入账户名"},null,8,["modelValue"]),K,G,p(a,{type:"password",modelValue:h(I).PassWord,"onUpdate:modelValue":t[1]||(t[1]=e=>h(I).PassWord=e),"prefix-icon":"Lock",placeholder:"请输入密码"},null,8,["modelValue"]),p(l,{modelValue:h(I).rememberSysUser,"onUpdate:modelValue":t[2]||(t[2]=e=>h(I).rememberSysUser=e)},{default:m((()=>[Q])),_:1},8,["modelValue"]),p(s,null,{default:m((()=>[p(o,{type:"primary",class:"LoginSubmit",onClick:_},{default:m((()=>[X])),_:1})])),_:1})])),_:1},8,["model","label-position","size"])])])]),d("div",Z," © "+f(n.value)+"  "+f(h(J).Year),1)])}}},ne={},te=function(e,n){return n&&0!==n.length?Promise.all(n.map((e=>{if((e=`./${e}`)in ne)return;ne[e]=!0;const n=e.endsWith(".css"),t=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const a=document.createElement("link");return a.rel=n?"stylesheet":"modulepreload",n||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),n?new Promise(((e,n)=>{a.addEventListener("load",e),a.addEventListener("error",n)})):void 0}))).then((()=>e())):e()};M("data-v-1c5c0721");const ae={class:"MenuContainer"},le=d("div",{class:"LogTitle"}," 妖怪 ",-1),oe={class:"Menucontent"};b();const se={emits:["openPage"],setup(e,{expose:n,emit:l}){y((e=>({"509f7deb":M.value})));const M=t("180px"),b=I("isCollapse"),U=s(),T=o(),D=t(""),L=r([]);a((()=>{let e=U.getters.getRoles,n=J.getData("MonsterUserInfo");!e&&n?(U.commit("setUserInfo",n),e=U.getters.getRoles,E(e)):e||n?e&&E(e):(J.showWarning("请登录!"),T.push("/"))}));const E=async e=>{await v.post("api/getMenu",e).then((e=>{e.data.forEach((e=>{L.push(e)}))})).catch((e=>{console.log(JSON.stringify(e))})),C(L)},C=e=>{let n=[];e.forEach(((e,t)=>{if(e.ChildrenMenu.length>0)e.ChildrenMenu.forEach((e=>{let t={name:e.MenuTitle,path:e.path,meta:{keepalive:e.keepalive},component:async()=>{let n=await te((()=>import(e.component)),[]);return n.default.name=e.path,n}};n.push(t)}));else{let t={name:e.MenuTitle,path:e.path,meta:{keepalive:e.keepalive},component:async()=>{let n=await te((()=>import(e.component)),[]);return n.default.name=e.path,n}};n.push(t)}})),T.addRoute({name:"系统主页",path:"/Index",component:fe,children:n}),console.log(),D.value=T.currentRoute.value.path,S(D.value),T.push(D.value)},S=e=>{l("openPage",N(e))};n({ExposeMenuTab:e=>{D.value=e,T.push(e)}});const N=e=>{let n=null;return L.forEach((t=>{t.ChildrenMenu.length>0?t.ChildrenMenu.forEach((t=>{t.path==e&&(n=t)})):t.path==e&&(n=t)})),n};return(e,n)=>{const t=i("el-icon"),a=i("el-menu-item"),l=i("el-sub-menu"),o=i("el-menu"),s=i("el-scrollbar");return u(),c("div",ae,[p(s,{height:"100%"},{default:m((()=>[le,d("div",oe,[p(o,{class:"el-menu-monster","default-active":D.value,collapse:h(b),onSelect:S,router:""},{default:m((()=>[(u(!0),c(_,null,k(h(L),(e=>(u(),c(_,null,[e.ChildrenMenu<=0?(u(),w(a,{key:0,index:e.path},{title:m((()=>[g(f(e.MenuTitle),1)])),default:m((()=>[p(t,null,{default:m((()=>[(u(),w(x(e.icon),{class:"MenuIcon"}))])),_:2},1024)])),_:2},1032,["index"])):(u(),w(l,{key:1,index:e.path},{title:m((()=>[p(t,null,{default:m((()=>[(u(),w(x(e.icon),{class:"MenuIcon"}))])),_:2},1024),d("span",null,f(e.MenuTitle),1)])),default:m((()=>[(u(!0),c(_,null,k(e.ChildrenMenu,(e=>(u(),w(a,{index:e.path},{default:m((()=>[p(t,null,{default:m((()=>[(u(),w(x(e.icon),{class:"MenuIcon"}))])),_:2},1024),d("span",null,f(e.MenuTitle),1)])),_:2},1032,["index"])))),256))])),_:2},1032,["index"]))],64)))),256))])),_:1},8,["default-active","collapse"])])])),_:1})])}},__scopeId:"data-v-1c5c0721"};M("data-v-64c1dbc1");const re={class:"headerContainer"},ie={class:"toolbar"},ue={class:"toolbtn"},ce={class:"vertical"},de={class:"toolbtn"},pe={class:"vertical"};b();const me={setup(e){const n=o(),t=s(),a=I("isCollapse"),l=()=>{a.value=!a.value},r=()=>{t.commit("setUserInfo",null),J.removeData("MonsterUserInfo"),n.push("/Login")};return(e,n)=>{const t=i("Expand"),o=i("Fold"),s=i("FullScreen"),f=i("el-tooltip"),g=i("el-divider"),v=i("UserFilled"),M=i("SwitchButton");return u(),c("div",re,[d("div",{class:"toggleMenu",onClick:l},[U(p(t,{class:"ExpandFold"},null,512),[[T,h(a)]]),U(p(o,{class:"ExpandFold"},null,512),[[T,!h(a)]])]),d("div",ie,[p(f,{content:"全屏",effect:"light"},{default:m((()=>[d("div",ue,[p(s)])])),_:1}),d("div",ce,[p(g,{direction:"vertical",style:{height:"80%"}})]),p(f,{content:"用户中心",effect:"light"},{default:m((()=>[d("div",de,[p(v)])])),_:1}),d("div",pe,[p(g,{direction:"vertical",style:{height:"80%"}})]),p(f,{content:"退出登录",effect:"light"},{default:m((()=>[d("div",{class:"toolbtn signout",onClick:r},[p(M)])])),_:1})])])}},__scopeId:"data-v-64c1dbc1"};M("data-v-5786772f");const he={class:"IndexContainer"};b();const fe={setup(e){s();const n=o(),l=t(!1),v=t(null);D("isCollapse",l);const M=t(0),b=t(0),y=()=>{b.value=window.innerHeight,M.value=window.innerWidth},I=t("");a((()=>{C.value=n.currentRoute.value.path,y(),window.addEventListener("resize",y),I.value="妖怪得懒癌管理系统"})),L((()=>[M.value,b.value]),(([e,n],[t,a])=>{l.value=n<800||e<1e3}));const U=t("/Index/Home"),T=r([]),C=t(""),S=r([]),N=e=>{let n=!1;S.forEach((t=>{t.name==e.path&&(n=!0)})),n||S.push({title:e.MenuTitle,name:e.path,icon:e.icon,component:e.component}),C.value=e.path;let t=null;T.forEach(((n,a)=>{n==e.path&&(t=a)})),null!=T&&T.splice(t,1)},P=e=>{let t=null;S.forEach(((n,a)=>{if(n.name==e){const e=S[a+1]||S[a-1];e&&(C.value=e.name),t=a}})),null!=t&&(S.splice(t,1),T.push(e)),v.value.ExposeMenuTab(C.value),n.push(C.value)},W=e=>{v.value.ExposeMenuTab(e.props.name)};return(e,n)=>{const t=i("el-aside"),a=i("el-header"),l=i("el-icon"),o=i("el-tab-pane"),s=i("router-view"),r=i("el-tabs"),M=i("el-main"),b=i("el-footer"),y=i("el-container");return u(),c("div",he,[p(y,null,{default:m((()=>[p(t,{width:"none"},{default:m((()=>[p(se,{onOpenPage:N,ref:(e,n)=>{n.objMenu=e,v.value=e}},null,512)])),_:1}),p(y,null,{default:m((()=>[p(a,null,{default:m((()=>[p(me)])),_:1}),p(M,null,{default:m((()=>[p(r,{modelValue:C.value,"onUpdate:modelValue":n[0]||(n[0]=e=>C.value=e),type:"border-card",onTabRemove:P,onTabAdd:N,onTabClick:W},{default:m((()=>[(u(!0),c(_,null,k(h(S),(e=>(u(),w(o,{key:e.name,label:e.title,name:e.name,closable:!(e.name==U.value)},{label:m((()=>[d("span",null,[p(l,null,{default:m((()=>[(u(),w(x(e.icon)))])),_:2},1024),d("span",null,f(e.title),1)])])),_:2},1032,["label","name","closable"])))),128)),p(s,null,{default:m((({Component:e,route:n})=>[(u(),w(E,{exclude:h(T)},[(u(),w(x(e)))],1032,["exclude"]))])),_:1})])),_:1},8,["modelValue"])])),_:1}),p(b,null,{default:m((()=>[g("© "+f(I.value)+"  "+f(h(J).Year),1)])),_:1})])),_:1})])),_:1})])}},__scopeId:"data-v-5786772f"},ge=[{path:"/",redirect:"/Login"},{name:"登录",path:"/Login",component:ee},{path:"/Index",redirect:"/Index/Home"},{name:"系统主页",path:"/Index/:path+",component:fe,children:[]}],ve=C({history:S(),routes:ge});N.mock("api/Login","post",(e=>{let n=null,t=JSON.parse(e.body);return n="admin"==t.UserName&&"admin"==t.PassWord?{code:200,userInfo:{UserName:t.UserName,RoleName:"管理员"}}:{code:400,userRole:null},n})),N.mock("api/getMenu","post",(e=>[{id:"1",MenuTitle:"工作台",icon:"Monitor",path:"/Index/Home",keepalive:!0,component:"/src/views/Test/Home.vue",ChildrenMenu:[]},{id:"2",MenuTitle:"业务菜单",icon:"DataAnalysis",path:"/Index/BusinessMenu",component:"",ChildrenMenu:[{id:"4",MenuTitle:"数据图表",icon:"Monitor",path:"/Index/Echarts",keepalive:!0,name:"Echarts",component:"/src/views/Test/Echarts.vue",ChildrenMenu:[]},{id:"5",MenuTitle:"通用表格",icon:"Monitor",path:"/Index/Tables",keepalive:!0,component:"/src/views/Test/Tables.vue",ChildrenMenu:[]}]},{id:"3",MenuTitle:"系统管理",icon:"Setting",path:"/Index/SysAdmin",keepalive:!0,component:"/src/views/Test/SysAdmin.vue",ChildrenMenu:[]}]));const Me=P({state:()=>({userInfo:null,token:null}),getters:{getUserInfo:e=>null!=e.userInfo?e.userInfo:null,getRoles:e=>null!=e.userInfo?e.userInfo.RoleName:null},mutations:{setUserInfo(e,n){e.userInfo=n,J.saveData("MonsterUserInfo",n)},setToken(e,n){e.token=n}}}),be=W({setup:e=>(e,n)=>{const t=i("router-view");return u(),w(t)}});be.use(V,{locale:O});for(const[ye,Ie]of Object.entries(R))be.component(ye,Ie);be.use(ve),be.use(Me),be.mount("#app");