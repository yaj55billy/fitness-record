(function(e){function t(t){for(var n,r,l=t[0],i=t[1],s=t[2],u=0,b=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var i=a[l];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},c={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c={class:"content"},o={class:"container"};function r(e,t,a,r,l,i){var s=Object(n["resolveComponent"])("Header"),d=Object(n["resolveComponent"])("router-view"),u=Object(n["resolveComponent"])("Footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(s),Object(n["createElementVNode"])("main",c,[Object(n["createElementVNode"])("div",o,[Object(n["createVNode"])(d)])]),Object(n["createVNode"])(u)],64)}var l={class:"header"},i=Object(n["createElementVNode"])("h1",{class:"header-brand"},"FitRecord",-1),s=Object(n["createElementVNode"])("i",{class:"fas fa-home"},null,-1);function d(e,t,a,c,o,r){var d=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("header",l,[i,Object(n["createVNode"])(d,{class:"header-link",to:{path:"/"}},{default:Object(n["withCtx"])((function(){return[s]})),_:1})])}var u={};u.render=d;var b=u,m={class:"footer"},p=Object(n["createTextVNode"])(" Copyright © 2021 FitRecord All Rights Reserved. "),f=Object(n["createElementVNode"])("br",null,null,-1),O=Object(n["createTextVNode"])(" 僅個人學習，無任何商業用途 "),j=[p,f,O];function v(e,t,a,c,o,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("footer",m,j)}var h={};h.render=v;var g=h,V={components:{Header:b,Footer:g},setup:function(){}};V.render=r;var N=V,E=a("6c02"),k=a("6e8c"),S=a.n(k),_=Object(n["createElementVNode"])("h2",{class:"page-title"},"選擇您的運動項目",-1),y={class:"exercise"},M={class:"exercise-list"},w={class:"exercise-list__pic"},C=Object(n["createElementVNode"])("img",{src:S.a,alt:"from unsplash Sergio Pedemonte"},null,-1),D=Object(n["createElementVNode"])("h4",{class:"exercise-list__text"},"深蹲",-1);function L(e,t,a,c,o,r){var l=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[_,Object(n["createElementVNode"])("ul",y,[Object(n["createElementVNode"])("li",M,[Object(n["createElementVNode"])("div",w,[C,D,Object(n["createVNode"])(l,{to:"/view",class:"exercise-list__link"})])])])],64)}var B={name:"Index",components:{}};B.render=L;var x=B,q=Object(n["createElementVNode"])("br",null,null,-1);function R(e,t,a,c,o,r){var l=Object(n["resolveComponent"])("ViewList"),i=Object(n["resolveComponent"])("ViewChart"),s=Object(n["resolveComponent"])("loading");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(l),q,Object(n["createVNode"])(i),Object(n["createVNode"])(s,{active:c.isLoading,"onUpdate:active":t[0]||(t[0]=function(e){return c.isLoading=e}),"is-full-page":!0},null,8,["active"])],64)}var T=a("9062"),F=a.n(T),U=(a("e40d"),{class:"page-title"}),H=Object(n["createTextVNode"])(" 列表紀錄 "),P={class:"page-topbtn"},z={class:"train"},I={class:"train-item"},J=Object(n["createElementVNode"])("h4",{class:"train-item__head"},"訓練日期:",-1),A={class:"train-item__body"},Y={class:"train-item"},G=Object(n["createElementVNode"])("h4",{class:"train-item__head"},"訓練細節:",-1),K={class:"train-item__body"},Q={class:"train-item"},W=Object(n["createElementVNode"])("h4",{class:"train-item__head"},"總訓練量:",-1),X={class:"train-item__body"},Z={class:"train-btnarea"},$=["onClick"],ee=["onClick"],te={class:"modal-container"},ae={class:"modal-body"},ne={class:"modal-body__head"},ce=Object(n["createElementVNode"])("hr",null,null,-1),oe={class:"modal-container"},re={class:"modal-body"},le=Object(n["createElementVNode"])("header",null,[Object(n["createElementVNode"])("h4",{class:"modal-body__head"},"刪除")],-1),ie=Object(n["createElementVNode"])("hr",null,null,-1),se=Object(n["createElementVNode"])("p",{class:"modal-body__text"},[Object(n["createTextVNode"])(" 您確定要刪除此筆紀錄嗎? "),Object(n["createElementVNode"])("br"),Object(n["createTextVNode"])(" 刪除後是無法回復紀錄的。 ")],-1),de={class:"modal-body__delete"};function ue(e,t,a,c,o,r){var l=Object(n["resolveComponent"])("UpdateForm");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("h2",U,[H,Object(n["createElementVNode"])("i",{class:Object(n["normalizeClass"])(["fas fa-chevron-up page-title__collapse",{active:!c.listStatus}]),onClick:t[0]||(t[0]=Object(n["withModifiers"])((function(){return c.changeListStatus&&c.changeListStatus.apply(c,arguments)}),["prevent"]))},null,2)]),Object(n["createElementVNode"])("div",P,[Object(n["createElementVNode"])("a",{class:"btn btn-sm",onClick:t[1]||(t[1]=Object(n["withModifiers"])((function(e){return c.changeUpdateModalStatus("new")}),["prevent"]))},"新增紀錄")]),Object(n["createVNode"])(n["Transition"],{name:"collapse"},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createElementVNode"])("ul",z,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.squatData,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id,class:"train-list"},[Object(n["createElementVNode"])("div",I,[J,Object(n["createElementVNode"])("div",A,Object(n["toDisplayString"])(e.date),1)]),Object(n["createElementVNode"])("div",Y,[G,Object(n["createElementVNode"])("ul",K,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.train,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e}," 重量: "+Object(n["toDisplayString"])(e.load)+" kg、次數: "+Object(n["toDisplayString"])(e.rep)+"、組數: "+Object(n["toDisplayString"])(e.set),1)})),128))])]),Object(n["createElementVNode"])("div",Q,[W,Object(n["createElementVNode"])("div",X,Object(n["toDisplayString"])(e.totalTrain),1)]),Object(n["createElementVNode"])("div",Z,[Object(n["createElementVNode"])("a",{onClick:Object(n["withModifiers"])((function(t){return c.changeUpdateModalStatus(e.id)}),["prevent"]),class:"btn btn-sm"},"編輯",8,$),Object(n["createElementVNode"])("a",{onClick:Object(n["withModifiers"])((function(t){return c.changeDeleteModalStatus(e.id)}),["prevent"]),class:"btn btn-sm"},"刪除",8,ee)])])})),128))],512),[[n["vShow"],c.listStatus]])]})),_:1}),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(["lightbox",{open:c.updateModalStatus}])},[Object(n["createElementVNode"])("div",{class:"modal-mask",onClick:t[3]||(t[3]=Object(n["withModifiers"])((function(e){return c.changeUpdateModalStatus("close")}),["self"]))},[Object(n["createElementVNode"])("div",te,[Object(n["createElementVNode"])("div",ae,[Object(n["createElementVNode"])("i",{class:"fas fa-times modal-close",onClick:t[2]||(t[2]=Object(n["withModifiers"])((function(e){return c.changeUpdateModalStatus("close")}),["self"]))}),Object(n["createElementVNode"])("header",null,[Object(n["createElementVNode"])("h4",ne,Object(n["toDisplayString"])(c.updateModalTitle),1)]),ce,Object(n["createElementVNode"])("main",null,[Object(n["createVNode"])(l,{getFormStatus:c.formStatus,onTriggerModalClose:c.updateModalClose},null,8,["getFormStatus","onTriggerModalClose"])])])])])],2),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(["lightbox",{open:c.deleteModalStatus}])},[Object(n["createElementVNode"])("div",{class:"modal-mask",onClick:t[6]||(t[6]=Object(n["withModifiers"])((function(e){return c.changeDeleteModalStatus()}),["self"]))},[Object(n["createElementVNode"])("div",oe,[Object(n["createElementVNode"])("div",re,[Object(n["createElementVNode"])("i",{class:"fas fa-times modal-close",onClick:t[4]||(t[4]=Object(n["withModifiers"])((function(e){return c.changeDeleteModalStatus()}),["self"]))}),le,ie,Object(n["createElementVNode"])("main",null,[se,Object(n["createElementVNode"])("div",de,[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-lg",onClick:t[5]||(t[5]=Object(n["withModifiers"])((function(e){return c.deleteRecord()}),["prevent"]))}," 刪除紀錄 ")])])])])])],2)],64)}var be={class:"form"},me={class:"form-group"},pe=Object(n["createElementVNode"])("label",{for:"trainDate",class:"form-group__label"},"訓練日期",-1),fe={class:"form-train"},Oe={class:"form-group"},je=["for"],ve=["id","name","onUpdate:modelValue"],he={class:"form-group"},ge=["for"],Ve=["name","id","onUpdate:modelValue"],Ne=["value"],Ee={class:"form-group"},ke=["for"],Se=["name","id","onUpdate:modelValue"],_e=["value"],ye={class:"form-conctrl"},Me=Object(n["createElementVNode"])("i",{class:"fas fa-plus"},null,-1),we=[Me],Ce=Object(n["createElementVNode"])("i",{class:"fas fa-times"},null,-1),De=[Ce];function Le(e,t,a,c,o,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("form",be,[Object(n["createElementVNode"])("div",me,[pe,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"date",id:"trainDate",name:"trainDate",class:"form-group__input","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.trainDate=e})},null,512),[[n["vModelText"],c.trainDate]])]),Object(n["createElementVNode"])("ul",fe,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.trainRecord,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e,class:"form-train__list"},[Object(n["createElementVNode"])("div",Oe,[Object(n["createElementVNode"])("label",{for:"trainLoad".concat(t),class:"form-group__label"},"訓練重量",8,je),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",id:"trainLoad".concat(t),name:"trainLoad".concat(t),class:"form-group__input",placeholder:"訓練重量(kg)","onUpdate:modelValue":function(t){return e.load=t}},null,8,ve),[[n["vModelText"],e.load,void 0,{number:!0}]])]),Object(n["createElementVNode"])("div",he,[Object(n["createElementVNode"])("label",{for:"trainRep".concat(t),class:"form-group__label"},"訓練次數",8,ge),Object(n["withDirectives"])(Object(n["createElementVNode"])("select",{name:"trainRep".concat(t),id:"trainRep".concat(t),class:"form-group__select","onUpdate:modelValue":function(t){return e.rep=t}},[(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(20,(function(e){return Object(n["createElementVNode"])("option",{key:e,value:e},Object(n["toDisplayString"])(e),9,Ne)})),64))],8,Ve),[[n["vModelSelect"],e.rep,void 0,{number:!0}]])]),Object(n["createElementVNode"])("div",Ee,[Object(n["createElementVNode"])("label",{for:"trainSet".concat(t),class:"form-group__label"},"訓練組數",8,ke),Object(n["withDirectives"])(Object(n["createElementVNode"])("select",{name:"trainSet".concat(t),id:"trainSet".concat(t),class:"form-group__select","onUpdate:modelValue":function(t){return e.set=t}},[(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(20,(function(e){return Object(n["createElementVNode"])("option",{key:e,value:e},Object(n["toDisplayString"])(e),9,_e)})),64))],8,Se),[[n["vModelSelect"],e.set,void 0,{number:!0}]])])])})),128))]),Object(n["createElementVNode"])("div",ye,[Object(n["createElementVNode"])("a",{onClick:t[1]||(t[1]=Object(n["withModifiers"])((function(){return c.addRecord&&c.addRecord.apply(c,arguments)}),["prevent"])),class:"form-conctrl__btn"},we),Object(n["createElementVNode"])("a",{onClick:t[2]||(t[2]=Object(n["withModifiers"])((function(){return c.removeRecord&&c.removeRecord.apply(c,arguments)}),["prevent"])),class:"form-conctrl__btn"},De)]),Object(n["createElementVNode"])("div",{class:"form-submit",style:Object(n["normalizeStyle"])({display:c.submitStatus})},[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-lg",onClick:t[3]||(t[3]=function(){return c.submitRecord&&c.submitRecord.apply(c,arguments)})}," 送出紀錄 ")],4)])}a("a9e3"),a("99af"),a("159b");var Be=a("5502"),xe=a("bc3a"),qe=a.n(xe),Re=qe.a.create({baseURL:"https://fitness-api-server.herokuapp.com/"}),Te=function(){return Re.get("/squatdata?_sort=date&_order=desc")},Fe=function(e){return Re.get("/squatdata/".concat(e))},Ue=function(e){return Re.post("/squatdata",e)},He=function(e){return Re.put("/squatdata/".concat(e.id),e)},Pe=function(e){return Re.delete("/squatdata/".concat(e))},ze={props:{getFormStatus:{type:[String,Number]}},emits:["triggerModalClose"],setup:function(e,t){var a=Object(Be["b"])(),c=Object(n["computed"])((function(){return a.getters.squatData.length})),o=Object(n["ref"])("block"),r={load:20,rep:1,set:1},l=Object(n["ref"])([r]),i=Object(n["ref"])(""),s=function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),c="".concat(t,"-").concat((a<10?"0":"")+a,"-").concat((n<10?"0":"")+n);i.value=c},d=function(e){a.dispatch("isLoadingHandler"),Fe(e).then((function(e){l.value=e.data.train,i.value=e.data.date,a.dispatch("isLoadingHandler")})).catch((function(e){console.log(e.response.data)}))};Object(n["watch"])((function(){return e.getFormStatus}),(function(e){switch(e){case"new":s();break;case"close":l.value=[r];break;default:d(e)}})),Object(n["watch"])((function(){return l.value.length}),(function(e){o.value=0===e?"none":"block"}));var u=function(){l.value.push({load:20,rep:1,set:1})},b=function(){l.value.pop()},m=function(){var n=e.getFormStatus,o={id:"new"===n?c.value+1:n,date:i.value,train:"new"===n?[]:l.value,totalTrain:0};l.value.forEach((function(e){"new"===n&&o.train.push(e),""===e.load&&(e.load=0),o.totalTrain+=e.load*e.rep*e.set})),a.dispatch("isLoadingHandler"),"new"===n?Ue(o).then((function(){a.dispatch("getSquatData").then((function(){a.dispatch("isLoadingHandler"),t.emit("triggerModalClose")}))})).catch((function(e){console.log(e),a.dispatch("isLoadingHandler")})):He(o).then((function(){a.dispatch("getSquatData").then((function(){a.dispatch("isLoadingHandler"),t.emit("triggerModalClose")}))})).catch((function(e){console.log(e),a.dispatch("isLoadingHandler")}))};return{submitStatus:o,trainRecord:l,trainDate:i,addRecord:u,removeRecord:b,submitRecord:m}}};ze.render=Le;var Ie=ze,Je=function(){var e=Object(n["ref"])(!0),t=function(){e.value=!e.value};return{listStatus:e,changeListStatus:t}},Ae=function(){var e=Object(n["ref"])(),t=Object(n["ref"])(!1),a=Object(n["ref"])(!1),c=Object(n["ref"])(""),o=Object(n["ref"])(),r=function(a){c.value="new"===a?"新增":"編輯",t.value=!t.value,e.value=a},l=function(e){a.value=!a.value,o.value=e},i=function(){t.value=!1};return{formStatus:e,updateModalStatus:t,deleteModalStatus:a,updateModalTitle:c,deleteIdTemp:o,changeUpdateModalStatus:r,changeDeleteModalStatus:l,updateModalClose:i}},Ye={components:{UpdateForm:Ie},setup:function(){var e=Object(Be["b"])(),t=Object(n["computed"])((function(){return e.getters.squatData})),a=Je(),c=a.listStatus,o=a.changeListStatus,r=Ae(),l=r.formStatus,i=r.updateModalStatus,s=r.deleteModalStatus,d=r.updateModalTitle,u=r.deleteIdTemp,b=r.changeUpdateModalStatus,m=r.changeDeleteModalStatus,p=r.updateModalClose,f=function(){u.value&&(e.dispatch("isLoadingHandler"),Pe(u.value).then((function(){e.dispatch("getSquatData").then((function(){e.dispatch("isLoadingHandler"),m()}))})).catch((function(t){console.log(t),e.dispatch("isLoadingHandler")})))};return{squatData:t,listStatus:c,changeListStatus:o,formStatus:l,updateModalStatus:i,deleteModalStatus:s,updateModalTitle:d,changeUpdateModalStatus:b,changeDeleteModalStatus:m,updateModalClose:p,deleteRecord:f}}};Ye.render=ue;var Ge=Ye,Ke=Object(n["createElementVNode"])("h2",{class:"page-title"},"圖表",-1),Qe={class:"chart-wrap"};function We(e,t,a,c,o,r){var l=Object(n["resolveComponent"])("Vue3ChartJs");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Ke,Object(n["createElementVNode"])("div",Qe,[Object(n["createVNode"])(l,{ref:"chart",id:c.lineChart.id,type:c.lineChart.type,data:c.lineChart.data},null,8,["id","type","data"])])],64)}var Xe=a("9c68"),Ze={components:{Vue3ChartJs:Xe["a"]},setup:function(){var e=Object(Be["b"])(),t=Object(n["ref"])(null),a=Object(n["computed"])((function(){return e.getters.dateData})),c=Object(n["computed"])((function(){return e.getters.trainData})),o=Object(n["reactive"])({id:"line",type:"line",data:{labels:[1,2,3,4],datasets:[{label:"健身紀錄",data:[1,2,3,4],fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]},options:{responsive:!0}});return e.dispatch("getSquatData").then((function(){o.data.labels=a.value,o.data.datasets[0].data=c.value,t.value.update(250)})),{lineChart:o,chart:t}}};Ze.render=We;var $e=Ze,et={components:{Loading:F.a,ViewList:Ge,ViewChart:$e},setup:function(){var e=Object(Be["b"])(),t=Object(n["computed"])((function(){return e.getters.isLoading}));return e.dispatch("isLoadingHandler"),e.dispatch("getSquatData").then((function(){e.dispatch("isLoadingHandler")})),{isLoading:t}}};et.render=R;var tt=et,at={class:"not-found"},nt={class:"not-found__content"},ct=Object(n["createElementVNode"])("h1",{class:"not-found__title"},"找不到此頁面",-1),ot=Object(n["createTextVNode"])("回首頁");function rt(e,t,a,c,o,r){var l=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",at,[Object(n["createElementVNode"])("div",nt,[ct,Object(n["createVNode"])(l,{to:"/",class:"not-found__link"},{default:Object(n["withCtx"])((function(){return[ot]})),_:1})])])}var lt={};lt.render=rt;var it=lt,st=[{path:"/",name:"Index",component:x},{path:"/view",name:"View",component:tt},{path:"/:pathMatch(.*)",component:it}],dt=Object(E["a"])({history:Object(E["b"])(),routes:st}),ut=dt,bt=a("1da1"),mt=(a("d81d"),a("96cf"),Object(Be["a"])({state:{squatData:[],isLoading:!1},mutations:{setSquatData:function(e,t){e.squatData=t},isLoadingChange:function(e){e.isLoading=!e.isLoading}},actions:{getSquatData:function(e){return Object(bt["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,Te();case 4:return n=t.sent,a("setSquatData",n.data),t.abrupt("return",n.data);case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0.response.data);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},isLoadingHandler:function(e){var t=e.commit;t("isLoadingChange")}},getters:{squatData:function(e){return e.squatData},isLoading:function(e){return e.isLoading},squatDataReverse:function(e){return e.squatData.reverse()},dateData:function(e,t){return t.squatDataReverse.map((function(e){return e.date}))},trainData:function(e,t){return t.squatDataReverse.map((function(e){return e.totalTrain}))}}}));a("c1c3");Object(n["createApp"])(N).use(mt).use(ut).mount("#app")},"6e8c":function(e,t,a){e.exports=a.p+"img/banner-squat.3becb96c.jpg"},c1c3:function(e,t,a){}});
//# sourceMappingURL=app.7a07f6dc.js.map