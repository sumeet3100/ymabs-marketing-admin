"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[940],{1738:(w,T,c)=>{c.d(T,{Z:()=>t});const t=(i,l=document.body)=>{let r;return r=(i=>i.match(/^--.*/i))(i)&&Boolean(document.documentMode)&&document.documentMode>=10?(()=>{const i={},l=document.styleSheets;let r="";for(let p=l.length-1;p>-1;p--){const d=l[p].cssRules;for(let u=d.length-1;u>-1;u--)if(".ie-custom-properties"===d[u].selectorText){r=d[u].cssText;break}if(r)break}return r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}")),r.split(";").forEach(p=>{if(p){const d=p.split(": ")[0],u=p.split(": ")[1];d&&u&&(i[`--${d.trim()}`]=u.trim())}}),i})()[i]:window.getComputedStyle(l,null).getPropertyValue(i).replace(/^\s/,""),r}},3485:(w,T,c)=>{c.d(T,{c:()=>h});var g=c(1738),s=c(1514);let h=(()=>{class f{constructor(i){this.changeDetectorRef=i,this.data=[],this.options=[],this.labels=["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],this.datasets=[[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,g.Z)("--cui-primary"),pointHoverBorderColor:(0,g.Z)("--cui-primary"),data:[65,59,84,84,51,55,40]}],[{label:"My Second dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,g.Z)("--cui-info"),pointHoverBorderColor:(0,g.Z)("--cui-info"),data:[1,18,9,17,34,22,11]}],[{label:"My Third dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,g.Z)("--cui-warning"),pointHoverBorderColor:(0,g.Z)("--cui-warning"),data:[78,81,80,45,34,12,40],fill:!0}],[{label:"My Fourth dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.7}]],this.optionsDefault={plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}}ngOnInit(){this.setData()}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}setData(){for(let i=0;i<4;i++)this.data[i]={labels:i<3?this.labels.slice(0,7):this.labels,datasets:this.datasets[i]};this.setOptions()}setOptions(){for(let i=0;i<4;i++){const l=JSON.parse(JSON.stringify(this.optionsDefault));switch(i){case 0:this.options.push(l);break;case 1:l.scales.y.min=-9,l.scales.y.max=39,this.options.push(l);break;case 2:l.scales.x={display:!1},l.scales.y={display:!1},l.elements.line.borderWidth=2,l.elements.point.radius=0,this.options.push(l);break;case 3:l.scales.x.grid={display:!1,drawTicks:!1},l.scales.x.grid={display:!1,drawTicks:!1,drawBorder:!1},l.scales.y.min=void 0,l.scales.y.max=void 0,l.elements={},this.options.push(l)}}}}return f.\u0275fac=function(i){return new(i||f)(s.Y36(s.sBO))},f.\u0275cmp=s.Xpm({type:f,selectors:[["app-widgets-dropdown"]],decls:0,vars:0,template:function(i,l){},styles:[""]}),f})()},3940:(w,T,c)=>{c.r(T),c.d(T,{WidgetsModule:()=>Ct});var g=c(6019),s=c(3007),m=c(8063),h=c(8365),b=c(726),f=c(2874),t=c(1514),i=c(4201),l=c(3485),r=c(1738);let p=(()=>{class e{constructor(n){this.changeDetectorRef=n,this.datasets=[],this.labels=[],this.data=[],this.barOptions={maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.lineOptions={maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.prepareLabels(),this.prepareDatasets(),this.prepareData()}get random(){return Math.floor(61*Math.random()+40)}get randomData(){const n=[];for(let o=0;o<15;o++)n.push(this.random);return n}get baseDatasets(){return[{data:this.randomData,barThickness:"flex",borderColor:"transparent",backgroundColor:"transparent",borderWidth:1}]}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}prepareData(){for(let n=0;n<6;n++)this.data.push({labels:this.labels,datasets:this.datasets[n]})}prepareLabels(){for(let n=0;n<15;n++)this.labels.push(this.getDayName(n))}prepareDatasets(){const n=[{backgroundColor:"danger"},{backgroundColor:"primary"},{backgroundColor:"dark"},{borderColor:"danger",borderWidth:2},{borderColor:"success",borderWidth:2},{borderColor:"info",borderWidth:2}];for(let o=0;o<6;o++)this.datasets.push(this.getDataset(n[o]))}getDataset({backgroundColor:n="transparent",borderColor:o="transparent",borderWidth:_=1}){const Z=this.baseDatasets;return Z[0].backgroundColor="transparent"!==n?(0,r.Z)(`--cui-${n}`):n,Z[0].borderColor="transparent"!==o?(0,r.Z)(`--cui-${o}`):o,Z[0].borderWidth=_,Z}getDayName(n=0){var o,_,Z,x;const q=null!==(x=null!==(Z=null!==(_=null!==(o=navigator.language)&&void 0!==o?o:navigator.userLanguage)&&void 0!==_?_:navigator.systemLanguage)&&void 0!==Z?Z:navigator.browserLanguage)&&void 0!==x?x:"en-US",y=new Date(Date.UTC(2e3,1,0));return y.setDate(y.getDate()+n),y.toLocaleDateString(q,{weekday:"short"})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-widgets-e"]],decls:19,vars:24,consts:[["lg","2","md","4"],[1,"mb-4",3,"title","value"],["height","40","width","80",1,"mx-auto",3,"data","options"],["height","40","type","line","width","80",1,"mx-auto",3,"data","options"]],template:function(n,o){1&n&&(t.TgZ(0,"c-row"),t.TgZ(1,"c-col",0),t.TgZ(2,"c-widget-stat-e",1),t._UZ(3,"c-chart",2),t.qZA(),t.qZA(),t.TgZ(4,"c-col",0),t.TgZ(5,"c-widget-stat-e",1),t._UZ(6,"c-chart",2),t.qZA(),t.qZA(),t.TgZ(7,"c-col",0),t.TgZ(8,"c-widget-stat-e",1),t._UZ(9,"c-chart",2),t.qZA(),t.qZA(),t.TgZ(10,"c-col",0),t.TgZ(11,"c-widget-stat-e",1),t._UZ(12,"c-chart",3),t.qZA(),t.qZA(),t.TgZ(13,"c-col",0),t.TgZ(14,"c-widget-stat-e",1),t._UZ(15,"c-chart",3),t.qZA(),t.qZA(),t.TgZ(16,"c-col",0),t.TgZ(17,"c-widget-stat-e",1),t._UZ(18,"c-chart",3),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",o.data[0])("options",o.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",o.data[1])("options",o.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",o.data[2])("options",o.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",o.data[3])("options",o.lineOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",o.data[4])("options",o.lineOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",o.data[5])("options",o.lineOptions))},directives:[s.iok,s.Yp0,s.gDu,h.d],styles:[""]}),e})();function d(e,a){if(1&e&&(t.O4$(),t.kcU(),t.ynx(0),t.TgZ(1,"c-chart",5,6),t._uU(3),t.qZA(),t.BQk()),2&e){const n=t.MAs(2),o=t.oxw().$implicit,_=t.oxw();t.xp6(1),t.Q6J("data",o.data)("options",_.chartOptions),t.xp6(2),t.Oqu(n.id)}}function u(e,a){if(1&e&&(t.TgZ(0,"c-col",1),t.TgZ(1,"c-widget-stat-d",2),t.O4$(),t._UZ(2,"svg",3),t.YNc(3,d,4,3,"ng-container",4),t.qZA(),t.qZA()),2&e){const n=a.$implicit,o=t.oxw();let _,Z;t.xp6(1),t.Akn(null!==(_=n.capBg)&&void 0!==_?_:null),t.Q6J("color",null!==(Z=n.color)&&void 0!==Z?Z:"")("values",n.values),t.xp6(1),t.Q6J("name",n.icon),t.xp6(1),t.Q6J("ngIf",o.withCharts)}}let v=(()=>{class e{constructor(n){this.changeDetectorRef=n,this.chartOptions={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.labels=["January","February","March","April","May","June","July"],this.datasets={borderWidth:2,fill:!0},this.colors={backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff"},this.brandData=[{icon:"cibFacebook",values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],capBg:{"--cui-card-cap-bg":"#3b5998"},labels:[...this.labels],data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[65,59,84,84,51,55,40],label:"Facebook"}),this.colors)]}},{icon:"cibTwitter",values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],capBg:{"--cui-card-cap-bg":"#00aced"},data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[1,13,9,17,34,41,38],label:"Twitter"}),this.colors)]}},{icon:"cib-linkedin",values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],capBg:{"--cui-card-cap-bg":"#4875b4"},data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[78,81,80,45,34,12,40],label:"LinkedIn"}),this.colors)]}},{icon:"cilCalendar",values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}],color:"warning",data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[35,23,56,22,97,23,64],label:"Events"}),this.colors)]}}]}capStyle(n){return n?{"--cui-card-cap-bg":n}:{}}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-widgets-brand"]],inputs:{withCharts:"withCharts"},decls:2,vars:1,consts:[["sm","6","xl","3",4,"ngFor","ngForOf"],["sm","6","xl","3"],[1,"mb-4",3,"color","values"],["cIcon","","height","52",1,"my-4","text-white",3,"name"],[4,"ngIf"],["type","line",1,"position-absolute","w-100","h-100",3,"data","options"],["chart","cChart"]],template:function(n,o){1&n&&(t.TgZ(0,"c-row"),t.YNc(1,u,4,6,"c-col",0),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",o.brandData))},directives:[s.iok,g.sg,s.Yp0,s.efQ,m.ar,g.O5,h.d],styles:[""]}),e})();function A(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",58))}function C(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",59))}function W(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",60))}function O(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",61))}function J(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",58))}function Q(e,a){1&e&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function U(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",59))}function N(e,a){1&e&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function D(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",60))}function Y(e,a){1&e&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function $(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",61))}function I(e,a){1&e&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function B(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",58))}function M(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",59))}function k(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",60))}function R(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",61))}function S(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",64))}function E(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",8),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function P(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",66))}function j(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",6),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function L(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",67))}function F(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",10),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function V(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",68))}function K(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",12),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function z(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",69))}function H(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",70),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function X(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",64))}function G(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",8),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function tt(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",66))}function et(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",6),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function at(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",67))}function st(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",10),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function nt(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",68))}function ot(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",12),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function it(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",69))}function lt(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",70),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function ct(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",71))}function rt(e,a){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",72),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function gt(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",64))}function pt(e,a){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function dt(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",66))}function mt(e,a){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function ut(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",67))}function Zt(e,a){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function _t(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",68))}function ft(e,a){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function ht(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",69))}function Tt(e,a){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function bt(e,a){1&e&&(t.O4$(),t._UZ(0,"svg",71))}function vt(e,a){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}const xt=[{path:"",component:(()=>{class e{constructor(n){this.changeDetectorRef=n}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-widgets"]],decls:167,vars:50,consts:[[1,"mb-4"],["href","components/"],["href","components/widgets/#cwidgetstatsb"],["lg","3","md","6","xs","12"],["text","Lorem ipsum dolor sit amet enim.","value","89.9%",1,"mb-4",3,"title"],["thin","",1,"my-2"],["color","success",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","12.124",1,"mb-4",3,"title"],["color","info",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","$98,111.00",1,"mb-4",3,"title"],["color","warning",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","2 TB",1,"mb-4",3,"title"],["color","primary",3,"value"],["color","success","inverse","","text","Lorem ipsum dolor sit amet enim.","value","89.9%",1,"mb-4",3,"title"],["widgetStatB1inv","cWidgetStatB"],["thin","",1,"my-2",3,"white"],[3,"value"],["color","info","inverse","","text","Lorem ipsum dolor sit amet enim.","value","12.124",1,"mb-4",3,"title"],["widgetStatB2inv","cWidgetStatB"],["color","warning","inverse","","text","Lorem ipsum dolor sit amet enim.","value","$98,111.00",1,"mb-4",3,"title"],["widgetStatB3inv","cWidgetStatB"],["color","primary","inverse","","text","Lorem ipsum dolor sit amet enim.","value","2 TB",1,"mb-4",3,"title"],["widgetStatB4inv","cWidgetStatB"],["href","components/widgets/#cwidgetstatse"],["href","components/widgets/#cwidgetstatsf"],["lg","3","sm","6","xs","12"],["color","primary","padding","","value","$1,999.50",1,"mb-3",3,"title"],["cTemplateId","widgetIconTemplate"],["color","info","padding","","value","$1,999.50",1,"mb-3",3,"title"],["color","warning","padding","","value","$1,999.50",1,"mb-3",3,"title"],["color","danger","padding","","value","$1,999.50",1,"mb-3",3,"title"],["cTemplateId","widgetFooterTemplate"],["color","primary","value","$1,999.50",1,"mb-3",3,"title"],["color","info","value","$1,999.50",1,"mb-3",3,"title"],["color","warning","value","$1,999.50",1,"mb-3",3,"title"],["color","danger","value","$1,999.50",1,"mb-3",3,"title"],["href","components/widgets/#cwidgetstatsd"],[3,"withCharts"],["href","components/widgets/#cwidgetstatsc"],["value","87,500",3,"title"],["cTemplateId","widgetProgressTemplate"],["value","385",3,"title"],["value","1238",3,"title"],["value","28%",3,"title"],["value","5:34:11",3,"title"],["md","2","sm","6"],["value","87,500",1,"mb-4",3,"title"],["value","385",1,"mb-4",3,"title"],["value","1238",1,"mb-4",3,"title"],["value","28%",1,"mb-4",3,"title"],["value","5:34:11",1,"mb-4",3,"title"],["value","972",1,"mb-4",3,"title"],["color","info","inverse","","value","87,500",1,"mb-4",3,"title"],["color","success","inverse","","value","385",1,"mb-4",3,"title"],["color","warning","inverse","","value","1238",1,"mb-4",3,"title"],["color","primary","inverse","","value","28%",1,"mb-4",3,"title"],["color","danger","inverse","","value","5:34:11",1,"mb-4",3,"title"],["color","dark","inverse","","value","972",1,"mb-4",3,"title"],["cIcon","","name","cilSettings","size","xl","width","24"],["cIcon","","name","cilUser","size","xl","width","24"],["cIcon","","name","cilMoon","size","xl","width","24"],["cIcon","","name","cilBell","size","xl","width","24"],["href","https://coreui.io/","rel","noopener norefferer","target","_blank",1,"font-weight-bold","font-xs","text-medium-emphasis"],["cIcon","","name","cilArrowRight","width","16",1,"float-end"],["cIcon","","height","36","name","cilPeople"],["thin","",1,"mt-3","mb-0"],["cIcon","","height","36","name","cilUserFollow"],["cIcon","","height","36","name","cilBasket"],["cIcon","","height","36","name","cilChartPie"],["cIcon","","height","36","name","cilSpeedometer"],["color","danger",3,"value"],["cIcon","","height","36","name","cilSpeech"],["color","dark",3,"value"],["thin","","white","",1,"mt-3","mb-0"]],template:function(n,o){if(1&n&&(t.TgZ(0,"c-card",0),t.TgZ(1,"c-card-header"),t._uU(2,"Widgets"),t.qZA(),t.TgZ(3,"c-card-body"),t.TgZ(4,"app-docs-example",1),t._UZ(5,"app-widgets-dropdown"),t.qZA(),t.TgZ(6,"app-docs-example",2),t.TgZ(7,"c-row"),t.TgZ(8,"c-col",3),t.TgZ(9,"c-widget-stat-b",4),t.TgZ(10,"c-progress",5),t._UZ(11,"c-progress-bar",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"c-col",3),t.TgZ(13,"c-widget-stat-b",7),t.TgZ(14,"c-progress",5),t._UZ(15,"c-progress-bar",8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"c-col",3),t.TgZ(17,"c-widget-stat-b",9),t.TgZ(18,"c-progress",5),t._UZ(19,"c-progress-bar",10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"c-col",3),t.TgZ(21,"c-widget-stat-b",11),t.TgZ(22,"c-progress",5),t._UZ(23,"c-progress-bar",12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"app-docs-example",2),t.TgZ(25,"c-row"),t.TgZ(26,"c-col",3),t.TgZ(27,"c-widget-stat-b",13,14),t.TgZ(29,"c-progress",15),t._UZ(30,"c-progress-bar",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"c-col",3),t.TgZ(32,"c-widget-stat-b",17,18),t.TgZ(34,"c-progress",15),t._UZ(35,"c-progress-bar",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"c-col",3),t.TgZ(37,"c-widget-stat-b",19,20),t.TgZ(39,"c-progress",15),t._UZ(40,"c-progress-bar",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(41,"c-col",3),t.TgZ(42,"c-widget-stat-b",21,22),t.TgZ(44,"c-progress",15),t._UZ(45,"c-progress-bar",16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(46,"app-docs-example",23),t._UZ(47,"app-widgets-e"),t.qZA(),t.TgZ(48,"app-docs-example",24),t.TgZ(49,"c-row"),t.TgZ(50,"c-col",25),t.TgZ(51,"c-widget-stat-f",26),t.YNc(52,A,1,0,"ng-template",27),t.qZA(),t.qZA(),t.TgZ(53,"c-col",25),t.TgZ(54,"c-widget-stat-f",28),t.YNc(55,C,1,0,"ng-template",27),t.qZA(),t.qZA(),t.TgZ(56,"c-col",25),t.TgZ(57,"c-widget-stat-f",29),t.YNc(58,W,1,0,"ng-template",27),t.qZA(),t.qZA(),t.TgZ(59,"c-col",25),t.TgZ(60,"c-widget-stat-f",30),t.YNc(61,O,1,0,"ng-template",27),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(62,"app-docs-example",24),t.TgZ(63,"c-row"),t.TgZ(64,"c-col",25),t.TgZ(65,"c-widget-stat-f",26),t.YNc(66,J,1,0,"ng-template",27),t.YNc(67,Q,3,0,"ng-template",31),t.qZA(),t.qZA(),t.TgZ(68,"c-col",25),t.TgZ(69,"c-widget-stat-f",28),t.YNc(70,U,1,0,"ng-template",27),t.YNc(71,N,3,0,"ng-template",31),t.qZA(),t.qZA(),t.TgZ(72,"c-col",25),t.TgZ(73,"c-widget-stat-f",29),t.YNc(74,D,1,0,"ng-template",27),t.YNc(75,Y,3,0,"ng-template",31),t.qZA(),t.qZA(),t.TgZ(76,"c-col",25),t.TgZ(77,"c-widget-stat-f",30),t.YNc(78,$,1,0,"ng-template",27),t.YNc(79,I,3,0,"ng-template",31),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(80,"app-docs-example",24),t.TgZ(81,"c-row"),t.TgZ(82,"c-col",25),t.TgZ(83,"c-widget-stat-f",32),t.YNc(84,B,1,0,"ng-template",27),t.qZA(),t.qZA(),t.TgZ(85,"c-col",25),t.TgZ(86,"c-widget-stat-f",33),t.YNc(87,M,1,0,"ng-template",27),t.qZA(),t.qZA(),t.TgZ(88,"c-col",25),t.TgZ(89,"c-widget-stat-f",34),t.YNc(90,k,1,0,"ng-template",27),t.qZA(),t.qZA(),t.TgZ(91,"c-col",25),t.TgZ(92,"c-widget-stat-f",35),t.YNc(93,R,1,0,"ng-template",27),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(94,"app-docs-example",36),t._UZ(95,"app-widgets-brand"),t.qZA(),t.TgZ(96,"app-docs-example",36),t._UZ(97,"app-widgets-brand",37),t.qZA(),t.TgZ(98,"app-docs-example",38),t.TgZ(99,"c-card-group",0),t.TgZ(100,"c-widget-stat-c",39),t.YNc(101,S,1,0,"ng-template",27),t.YNc(102,E,2,1,"ng-template",40),t.qZA(),t.TgZ(103,"c-widget-stat-c",41),t.YNc(104,P,1,0,"ng-template",27),t.YNc(105,j,2,1,"ng-template",40),t.qZA(),t.TgZ(106,"c-widget-stat-c",42),t.YNc(107,L,1,0,"ng-template",27),t.YNc(108,F,2,1,"ng-template",40),t.qZA(),t.TgZ(109,"c-widget-stat-c",43),t.YNc(110,V,1,0,"ng-template",27),t.YNc(111,K,2,1,"ng-template",40),t.qZA(),t.TgZ(112,"c-widget-stat-c",44),t.YNc(113,z,1,0,"ng-template",27),t.YNc(114,H,2,1,"ng-template",40),t.qZA(),t.qZA(),t.qZA(),t.TgZ(115,"app-docs-example",38),t.TgZ(116,"c-row"),t.TgZ(117,"c-col",45),t.TgZ(118,"c-widget-stat-c",46),t.YNc(119,X,1,0,"ng-template",27),t.YNc(120,G,2,1,"ng-template",40),t.qZA(),t.qZA(),t.TgZ(121,"c-col",45),t.TgZ(122,"c-widget-stat-c",47),t.YNc(123,tt,1,0,"ng-template",27),t.YNc(124,et,2,1,"ng-template",40),t.qZA(),t.qZA(),t.TgZ(125,"c-col",45),t.TgZ(126,"c-widget-stat-c",48),t.YNc(127,at,1,0,"ng-template",27),t.YNc(128,st,2,1,"ng-template",40),t.qZA(),t.qZA(),t.TgZ(129,"c-col",45),t.TgZ(130,"c-widget-stat-c",49),t.YNc(131,nt,1,0,"ng-template",27),t.YNc(132,ot,2,1,"ng-template",40),t.qZA(),t.qZA(),t.TgZ(133,"c-col",45),t.TgZ(134,"c-widget-stat-c",50),t.YNc(135,it,1,0,"ng-template",27),t.YNc(136,lt,2,1,"ng-template",40),t.qZA(),t.qZA(),t.TgZ(137,"c-col",45),t.TgZ(138,"c-widget-stat-c",51),t.YNc(139,ct,1,0,"ng-template",27),t.YNc(140,rt,2,1,"ng-template",40),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(141,"app-docs-example",38),t.TgZ(142,"c-row"),t.TgZ(143,"c-col",45),t.TgZ(144,"c-widget-stat-c",52),t.YNc(145,gt,1,0,"ng-template",27),t.YNc(146,pt,2,1,"ng-template",40),t.qZA(),t.qZA(),t.TgZ(147,"c-col",45),t.TgZ(148,"c-widget-stat-c",53),t.YNc(149,dt,1,0,"ng-template",27),t.YNc(150,mt,2,1,"ng-template",40),t.qZA(),t.qZA(),t.TgZ(151,"c-col",45),t.TgZ(152,"c-widget-stat-c",54),t.YNc(153,ut,1,0,"ng-template",27),t.YNc(154,Zt,2,1,"ng-template",40),t.qZA(),t.qZA(),t.TgZ(155,"c-col",45),t.TgZ(156,"c-widget-stat-c",55),t.YNc(157,_t,1,0,"ng-template",27),t.YNc(158,ft,2,1,"ng-template",40),t.qZA(),t.qZA(),t.TgZ(159,"c-col",45),t.TgZ(160,"c-widget-stat-c",56),t.YNc(161,ht,1,0,"ng-template",27),t.YNc(162,Tt,2,1,"ng-template",40),t.qZA(),t.qZA(),t.TgZ(163,"c-col",45),t.TgZ(164,"c-widget-stat-c",57),t.YNc(165,bt,1,0,"ng-template",27),t.YNc(166,vt,2,1,"ng-template",40),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const _=t.MAs(28),Z=t.MAs(33),x=t.MAs(38),q=t.MAs(43);t.xp6(9),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(4),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",_.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",Z.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",x.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",q.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(6),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(5),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(6),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(5),t.Q6J("withCharts",!0),t.xp6(3),t.Q6J("title","Visitors"),t.xp6(3),t.Q6J("title","New Clients"),t.xp6(3),t.Q6J("title","Products sold"),t.xp6(3),t.Q6J("title","Returning Visitors"),t.xp6(3),t.Q6J("title","Avg. Time"),t.xp6(6),t.Q6J("title","Visitors"),t.xp6(4),t.Q6J("title","New Clients"),t.xp6(4),t.Q6J("title","Products sold"),t.xp6(4),t.Q6J("title","Returning Visitors"),t.xp6(4),t.Q6J("title","Avg. Time"),t.xp6(4),t.Q6J("title","Comments"),t.xp6(6),t.Q6J("title","Visitors"),t.xp6(4),t.Q6J("title","New Clients"),t.xp6(4),t.Q6J("title","Products sold"),t.xp6(4),t.Q6J("title","Returning Visitors"),t.xp6(4),t.Q6J("title","Avg. Time"),t.xp6(4),t.Q6J("title","Comments")}},directives:[s.AkF,s.nkx,s.yue,i.U,l.c,s.iok,s.Yp0,s.Pvw,s.t15,s.RIQ,p,s.bvG,s.y1J,v,s.RMw,s.S0f,m.ar],styles:[""]}),e})(),data:{title:"Widgets"}}];let At=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[f.Bz.forChild(xt)],f.Bz]}),e})(),Ct=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.ez,At,s.zE6,s.yF7,m.QX,s.kWm,s.m81,s.hJ1,s.dTQ,b.K,s.qek,h.N]]}),e})()},4201:(w,T,c)=>{c.d(T,{U:()=>t});var g=c(4147),s=c(1514),m=c(3007),h=c(2874),b=c(8063);const f=["*"];let t=(()=>{class i{constructor(r){this.changeDetectorRef=r,this._href="https://coreui.io/angular/docs/"}get href(){return this._href}set href(r){var p,d,u;const v=null===(p=null==g?void 0:g.config)||void 0===p?void 0:p.coreui_library_short_version,A=null!==(u=null===(d=null==g?void 0:g.config)||void 0===d?void 0:d.coreui_library_docs_url)&&void 0!==u?u:"https://coreui.io/angular/";this._href=`${A}${v?`${v}/${r}`:""}`}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}ngAfterViewInit(){this.changeDetectorRef.markForCheck()}}return i.\u0275fac=function(r){return new(r||i)(s.Y36(s.sBO))},i.\u0275cmp=s.Xpm({type:i,selectors:[["app-docs-example"]],inputs:{fragment:"fragment",href:"href"},ngContentSelectors:f,decls:14,vars:5,consts:[[1,"example","mb-3"],["variant","tabs"],["routerLink","./","cNavLink","",3,"active","cTabContent","fragment","tabPaneIdx"],["name","cilMediaPlay",1,"me-2"],["cNavLink","","target","_blank",3,"href"],["name","cilCode",1,"me-2"],["cRounded","bottom"],["tabContent","cTabContent"],["aria-labelledby","docs-code-preview","role","tabpanel",1,"p-3","preview"]],template:function(r,p){if(1&r&&(s.F$t(),s.TgZ(0,"div",0),s.TgZ(1,"c-nav",1),s.TgZ(2,"c-nav-item"),s.TgZ(3,"a",2),s._UZ(4,"c-icon",3),s._uU(5," Preview "),s.qZA(),s.qZA(),s.TgZ(6,"c-nav-item"),s.TgZ(7,"a",4),s._UZ(8,"c-icon",5),s._uU(9," Code "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"c-tab-content",6,7),s.TgZ(12,"c-tab-pane",8),s.Hsn(13),s.qZA(),s.qZA(),s.qZA()),2&r){const d=s.MAs(11);s.xp6(3),s.Q6J("active",!0)("cTabContent",d)("fragment",p.fragment)("tabPaneIdx",0),s.xp6(4),s.Q6J("href",p.href,s.LSH)}},directives:[m.rZi,m.HOP,h.yS,m.Vh3,m.hL0,b.oJ,m.C$2,m.IRg,m.Eug],styles:[""],changeDetection:0}),i})()}}]);