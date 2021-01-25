function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,c=function(){};return{s:c,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){a=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw r}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"x9+2":function(t,e,n){"use strict";n.r(e),n.d(e,"PaymentModule",(function(){return z}));var i=n("ofXK"),c=n("tyNb"),r=n("fXoL"),o=n("SiJz"),a=n("rvnR"),s=n("DaGL"),b=n("1LjI");function l(t,e){if(1&t){var n=r.ac();r.Zb(0,"tr"),r.Zb(1,"td"),r.Zb(2,"div"),r.Hc(3),r.kc(4,"date"),r.Yb(),r.Yb(),r.Zb(5,"td"),r.Zb(6,"div"),r.Hc(7),r.Yb(),r.Yb(),r.Zb(8,"td"),r.Zb(9,"div"),r.Hc(10),r.Yb(),r.Yb(),r.Zb(11,"td",10),r.Zb(12,"button",13),r.hc("click",(function(){r.yc(n);var t=e.$implicit;return r.jc().setDocument(t)})),r.Hc(13,"View Receipt"),r.Yb(),r.Yb(),r.Yb()}if(2&t){var i=e.$implicit;r.Hb(3),r.Ic(r.mc(4,3,i.dateCreated,"mediumDate")),r.Hb(4),r.Jc(" ",i.referenceNum," "),r.Hb(3),r.Jc(" ",i.type||"Description not available"," ")}}function u(t,e){1&t&&(r.Zb(0,"div",14),r.Zb(1,"span"),r.Hc(2,"No payments made yet, you can view and download your receipt here after payments."),r.Yb(),r.Yb())}var p,d=((p=function(){function t(e,n,i,c,r){_classCallCheck(this,t),this.crudService=e,this.utilService=n,this.swalService=i,this.companyService=c,this.router=r,this.loading=!1,this.receipts=[]}return _createClass(t,[{key:"ngOnInit",value:function(){this.getReceipts()}},{key:"getReceipts",value:function(){var t=this;this.loading=!0;var e=Number(this.utilService.getUser());this.crudService.getRequest("api/paymentrecept/allByUserId/"+e).subscribe((function(e){console.log(e),t.receipts=e,t.loading=!1}),(function(e){console.log(e),t.swalService.error("There was an error fetching the documents."),t.loading=!1}))}},{key:"setDocument",value:function(t){this.companyService.setDocument(t),this.router.navigate(["/billing/receipt"])}}]),t}()).\u0275fac=function(t){return new(t||p)(r.Tb(o.a),r.Tb(a.a),r.Tb(s.a),r.Tb(b.a),r.Tb(c.c))},p.\u0275cmp=r.Nb({type:p,selectors:[["app-payment"]],decls:26,vars:2,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","d-flex","justify-content-between"],[1,"card-body"],["summary","List of projects","aria-role","table",1,"table","stripped","table-responsive-sm","table-xs-responsive","table-hover","table-outline","mb-0"],["span","1",2,"width","15%"],["span","1",2,"width","20%"],["span","1",2,"width","50%"],[1,"thead-light"],[1,"text-center"],[4,"ngFor","ngForOf"],["class","my-5 text-center",4,"ngIf"],[1,"btn","btn-theme-primary",3,"click"],[1,"my-5","text-center"]],template:function(t,e){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"div",2),r.Zb(3,"div",3),r.Zb(4,"h2"),r.Hc(5,"Payments"),r.Yb(),r.Yb(),r.Zb(6,"div",4),r.Zb(7,"table",5),r.Zb(8,"colgroup"),r.Ub(9,"col",6),r.Ub(10,"col",7),r.Ub(11,"col",8),r.Ub(12,"col",6),r.Yb(),r.Zb(13,"thead",9),r.Zb(14,"tr"),r.Zb(15,"th"),r.Hc(16,"Date"),r.Yb(),r.Zb(17,"th"),r.Hc(18,"Reference"),r.Yb(),r.Zb(19,"th"),r.Hc(20,"Description"),r.Yb(),r.Zb(21,"th",10),r.Hc(22,"Action"),r.Yb(),r.Yb(),r.Yb(),r.Zb(23,"tbody"),r.Fc(24,l,14,6,"tr",11),r.Yb(),r.Yb(),r.Fc(25,u,3,0,"div",12),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Hb(24),r.qc("ngForOf",e.receipts),r.Hb(1),r.qc("ngIf",!e.loading&&0===e.receipts.length))},directives:[i.s,i.t],pipes:[i.f],styles:[""]}),p),f=n("K3ix"),g=n("AiYy"),h=n("3Pt+"),m=function(){return["/billing/add-subscription"]};function y(t,e){1&t&&(r.Zb(0,"button",13),r.Hc(1," Add Subscription "),r.Yb()),2&t&&r.qc("routerLink",r.sc(1,m))}function v(t,e){if(1&t){var n=r.ac();r.Zb(0,"tr"),r.Zb(1,"td"),r.Zb(2,"div"),r.Hc(3),r.Yb(),r.Yb(),r.Zb(4,"td"),r.Zb(5,"div",14),r.Hc(6),r.Yb(),r.Yb(),r.Zb(7,"td"),r.Zb(8,"div"),r.Hc(9),r.Yb(),r.Yb(),r.Zb(10,"td"),r.Zb(11,"div"),r.Hc(12),r.Yb(),r.Yb(),r.Zb(13,"td",8),r.Zb(14,"button",15),r.hc("click",(function(){r.yc(n);var t=e.$implicit,i=r.jc(),c=r.wc(26);return i.setSub(t,c)})),r.Hc(15,"Upgrade"),r.Yb(),r.Yb(),r.Yb()}if(2&t){var i=e.$implicit,c=r.jc();r.Hb(3),r.Ic(i.category||"-"),r.Hb(2),r.rc("ngClass",c.isActive(i.endDate)?"badge-success":"badge-light"),r.Hb(1),r.Jc(" ",c.isActive(i.endDate)?"active":"expired"," "),r.Hb(3),r.Jc(" ",i.startDate||"-"," "),r.Hb(3),r.Jc(" ",i.endDate||"-"," ")}}function Y(t,e){1&t&&(r.Zb(0,"div",16),r.Ub(1,"i",17),r.Hc(2," fetching... "),r.Yb())}function Z(t,e){1&t&&(r.Zb(0,"div",18),r.Zb(1,"span"),r.Hc(2,"You have not subscribed to any plan yet, you can view your subscriptions here when you subscribe."),r.Yb(),r.Yb())}function C(t,e){if(1&t&&(r.Zb(0,"option",31),r.Hc(1),r.kc(2,"number"),r.Yb()),2&t){var n=e.$implicit;r.qc("value",n.id),r.Hb(1),r.Kc(" ",n.category," (\u20a6 ",r.lc(2,3,n.amount),")")}}var H=function(){return["card","bank"]};function _(t,e){if(1&t){var n=r.ac();r.Zb(0,"div",19),r.Zb(1,"h4",20),r.Hc(2,"Select Plan"),r.Yb(),r.Zb(3,"button",21),r.hc("click",(function(){return r.yc(n),r.jc().modalRef.hide()})),r.Zb(4,"span",22),r.Hc(5,"\xd7"),r.Yb(),r.Yb(),r.Yb(),r.Zb(6,"div",23),r.Zb(7,"div",24),r.Zb(8,"label",25),r.Hc(9,"Plans"),r.Yb(),r.Zb(10,"div",26),r.Zb(11,"select",27),r.hc("change",(function(t){return r.yc(n),r.jc().setnewSub(t.target.value)})),r.Fc(12,C,3,5,"option",28),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(13,"div",29),r.Zb(14,"angular4-paystack",30),r.hc("paymentInit",(function(t){return r.yc(n),r.jc().paymentInit(t)}))("close",(function(t){return r.yc(n),r.jc().paymentFailure(t)}))("callback",(function(t){return r.yc(n),r.jc().paymentSuccess(t)})),r.Hc(15," Upgrade "),r.Yb(),r.Yb()}if(2&t){var i=r.jc();r.Hb(12),r.qc("ngForOf",i.subscriptions),r.Hb(2),r.qc("email",i.email)("amount",100*i.amount)("ref",i.ref)("channels",r.sc(5,H))}}var P,S,k,O=((k=function(){function t(e,n,i,c){_classCallCheck(this,t),this.crudService=e,this.utilService=n,this.swal=i,this.modalService=c,this.userSubscriptions=[],this.loading=!1,this.subscriptions=[],this.email=this.utilService.getEmail(),this.ref=this.generateReference(),this.amount=0,this.paymentOptions={PBFPubKey:"FLWPUBK_TEST-a95caf78b6504bde29af398c56b5eeab-X",customer_email:this.utilService.getEmail(),customer_firstname:"Manasseh",customer_lastname:"Omachonu",custom_description:"Payment for goods",amount:5e3,currency:"NGN",customer_phone:"09024878207",txref:this.generateReference()},this.update={newSubscriptionId:0,currentSubscriptionId:0,months:0,userId:0,userSubscriptionId:0}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.utilService.getUser();this.getUserSubscriptions(t),this.getSubscriptionPriviledges()}},{key:"setSub",value:function(t,e){var n=Number(this.utilService.getUser());this.update.userId=n,this.update.currentSubscriptionId=t.subscriptionId,this.update.userSubscriptionId=t.userSubscriptionId,this.update.months=t.months,this.amount=t.amount,this.modalRef=this.modalService.show(e,Object.assign({},{class:"gray modal-lg"}))}},{key:"setnewSub",value:function(t){this.update.newSubscriptionId=Number(t)}},{key:"getUserSubscriptions",value:function(t){var e=this;this.loading=!0,this.crudService.getRequest("api/usersubscription/findValidSubscribedUserByUserId/"+t).subscribe((function(t){console.log(t),e.loading=!1,e.userSubscriptions=t}),(function(t){console.log(t),e.loading=!1}))}},{key:"getSubscriptionPriviledges",value:function(){var t=this;this.loading=!0,this.crudService.getRequest("api/subscription/findAll").subscribe((function(e){console.log(e),t.loading=!1,t.subscriptions=e}),(function(e){console.log(e),t.loading=!1}))}},{key:"isActive",value:function(t){return new Date(t)>=new Date}},{key:"upgradeSubscription",value:function(){var t=this;this.crudService.postRequest("api/usersubscription/upgradeSubscription",this.update).subscribe((function(e){console.log(e),t.swal.success(e.message),t.getUserSubscriptions(t.update.userId)}),(function(e){console.log(e);var n=e.error;t.swal.error((null==n?void 0:n.message)||"An error occured, please try again.")}))}},{key:"generateReference",value:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<15;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return"CA-"+t}},{key:"paymentFailure",value:function(t){console.log("Payment Failed",t)}},{key:"paymentSuccess",value:function(t){console.log("Payment complete",t),this.upgradeSubscription(),this.modalRef.hide()}},{key:"paymentInit",value:function(t){this.paymentInstance=t,console.log("Payment about to begin",this.paymentInstance)}}]),t}()).\u0275fac=function(t){return new(t||k)(r.Tb(o.a),r.Tb(a.a),r.Tb(s.a),r.Tb(f.a))},k.\u0275cmp=r.Nb({type:k,selectors:[["app-subscription"]],decls:27,vars:4,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","d-flex","justify-content-between"],["class","btn bg-theme-primary text-white my-sm-0 col-sm-12 col-md-4",3,"routerLink",4,"ngIf"],[1,"card-body"],["summary","List of projects","aria-role","table",1,"table","stripped","table-responsive-sm","table-xs-responsive","table-hover","table-outline","mb-0"],[1,"thead-light"],[1,"text-center"],[4,"ngFor","ngForOf"],["class","text-center my-5",4,"ngIf"],["class","my-5 text-center",4,"ngIf"],["template",""],[1,"btn","bg-theme-primary","text-white","my-sm-0","col-sm-12","col-md-4",3,"routerLink"],[1,"badge",3,"ngClass"],[1,"btn","btn-theme-primary",3,"click"],[1,"text-center","my-5"],[1,"fa","fa-spinner","fa-spin","mr-2"],[1,"my-5","text-center"],[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group","row"],["for","months",1,"col-md-3","col-form-label"],[1,"col-md-9"],["id","months","name","months",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],[1,"btn","ca-btn-primary",3,"email","amount","ref","channels","paymentInit","close","callback"],[3,"value"]],template:function(t,e){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"div",2),r.Zb(3,"div",3),r.Zb(4,"h2"),r.Hc(5,"Subscriptions"),r.Yb(),r.Fc(6,y,2,2,"button",4),r.Yb(),r.Zb(7,"div",5),r.Zb(8,"table",6),r.Zb(9,"thead",7),r.Zb(10,"tr"),r.Zb(11,"th"),r.Hc(12,"Subscription"),r.Yb(),r.Zb(13,"th"),r.Hc(14,"Status"),r.Yb(),r.Zb(15,"th"),r.Hc(16,"Registration Date"),r.Yb(),r.Zb(17,"th"),r.Hc(18,"Expiry Date"),r.Yb(),r.Zb(19,"th",8),r.Hc(20,"Action"),r.Yb(),r.Yb(),r.Yb(),r.Zb(21,"tbody"),r.Fc(22,v,16,5,"tr",9),r.Yb(),r.Yb(),r.Fc(23,Y,3,0,"div",10),r.Fc(24,Z,3,0,"div",11),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Fc(25,_,16,6,"ng-template",null,12,r.Gc)),2&t&&(r.Hb(6),r.qc("ngIf",!e.loading&&0===e.userSubscriptions.length),r.Hb(16),r.qc("ngForOf",e.userSubscriptions),r.Hb(1),r.qc("ngIf",e.loading),r.Hb(1),r.qc("ngIf",!e.loading&&0===e.userSubscriptions.length))},directives:[i.t,i.s,c.d,i.q,g.a,h.t,h.D],pipes:[i.g],styles:[".pricing-list[_ngcontent-%COMP%]{margin:15px 0}.plan-title[_ngcontent-%COMP%]{font-size:1.8rem}.plan-focus[_ngcontent-%COMP%]{transform:scale(1.1)}.plan-focus[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#007770!important;color:#fff}.plan-focus[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon-alt[_ngcontent-%COMP%]{color:#fff}.plan-price[_ngcontent-%COMP%]{text-align:center;color:#007770;padding:2rem}.plan-price[_ngcontent-%COMP%]   .post-price[_ngcontent-%COMP%], .plan-price[_ngcontent-%COMP%]   .pre-price[_ngcontent-%COMP%]{font-size:.9rem}.plan-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-weight:700;font-size:25px}"]}),k),w=((S=function(){function t(){_classCallCheck(this,t),this._printStyle=[],this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}return _createClass(t,[{key:"returnStyleValues",value:function(){return"<style> ".concat(this._printStyle.join(" ").replace(/,/g,";")," </style>")}},{key:"returnStyleSheetLinkTags",value:function(){return this._styleSheetFile}},{key:"getElementTag",value:function(t){for(var e=[],n=document.getElementsByTagName(t),i=0;i<n.length;i++)e.push(n[i].outerHTML);return e.join("\r\n")}},{key:"getHtmlContents",value:function(){for(var t=document.getElementById(this.printSectionId),e=t.getElementsByTagName("input"),n=0;n<e.length;n++)e[n].defaultValue=e[n].value;return t.innerHTML}},{key:"print",value:function(){var t,e,n="",i="";this.useExistingCss&&(n=this.getElementTag("style"),i=this.getElementTag("link")),t=this.getHtmlContents(),(e=window.open("","_blank","top=0,left=0,height=auto,width=auto")).document.open(),e.document.write("\n      <html>\n        <head>\n          <title>".concat(this.printTitle?this.printTitle:"","</title>\n          ").concat(this.returnStyleValues(),"\n          ").concat(this.returnStyleSheetLinkTags(),"\n          ").concat(n,"\n          ").concat(i,"\n        </head>\n        <body>\n          ").concat(t,"\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(function() {\n                window.print();\n                setTimeout(function() { window.close(); }, 0);\n              }, ").concat(this.printDelay,");\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>")),e.document.close()}},{key:"printStyle",set:function(t){for(var e in t)t.hasOwnProperty(e)&&this._printStyle.push((e+JSON.stringify(t[e])).replace(/['"]+/g,""));this.returnStyleValues()}},{key:"styleSheetFile",set:function(t){var e=function(t){return'<link rel="stylesheet" type="text/css" href="'.concat(t,'">')};if(-1!==t.indexOf(",")){var n,i=_createForOfIteratorHelper(t.split(","));try{for(i.s();!(n=i.n()).done;){var c=n.value;this._styleSheetFile=this._styleSheetFile+e(c)}}catch(r){i.e(r)}finally{i.f()}}else this._styleSheetFile=e(t)}}]),t}()).\u0275fac=function(t){return new(t||S)},S.\u0275dir=r.Ob({type:S,selectors:[["button","ngxPrint",""]],hostBindings:function(t,e){1&t&&r.hc("click",(function(){return e.print()}))},inputs:{useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile",printSectionId:"printSectionId",printTitle:"printTitle"}}),S),M=((P=function t(){_classCallCheck(this,t)}).\u0275mod=r.Rb({type:P}),P.\u0275inj=r.Qb({factory:function(t){return new(t||P)},imports:[[]]}),P);function x(t,e){if(1&t&&(r.Zb(0,"div",18),r.Ub(1,"i",19),r.Hc(2),r.Yb()),2&t){var n=e.$implicit;r.Hb(2),r.Jc(" ",n," ")}}var I=function(t){return{"plan-focus":t}},T=function(t){return{"ca-text-primary":t}};function F(t,e){if(1&t){var n=r.ac();r.Zb(0,"div",6),r.Zb(1,"div",7),r.Zb(2,"div",8),r.Zb(3,"div",9),r.Hc(4),r.Yb(),r.Zb(5,"div",10),r.Fc(6,x,3,1,"div",11),r.Yb(),r.Yb(),r.Zb(7,"div",12),r.Zb(8,"div",13),r.Zb(9,"div",14),r.Hc(10,"Starting at"),r.Yb(),r.Zb(11,"div",15),r.Hc(12),r.Yb(),r.Zb(13,"div",16),r.Hc(14,"a month"),r.Yb(),r.Yb(),r.Zb(15,"button",17),r.hc("click",(function(){r.yc(n);var t=e.$implicit;return r.jc().setSubsription(t)})),r.Hc(16," Purchase Plan "),r.Yb(),r.Yb(),r.Yb(),r.Yb()}if(2&t){var i=e.$implicit,c=e.index;r.qc("ngClass",r.tc(5,I,c%2==1)),r.Hb(3),r.qc("ngClass",r.tc(7,T,c%2==0)),r.Hb(1),r.Jc(" ",i.category," "),r.Hb(2),r.qc("ngForOf",i.privileges),r.Hb(6),r.Jc("\u20a6",i.amount,"")}}function U(t,e){1&t&&(r.Zb(0,"div",20),r.Ub(1,"i",21),r.Hc(2," fetching...\n"),r.Yb())}var R,A,D,j,q,E=function(){return["card","bank"]},N=[{path:"",component:d},{path:"receipt",component:(D=function(){function t(e,n){_classCallCheck(this,t),this.companyService=e,this.util=n,this.receipt=this.companyService.getDocument(),this.company=this.util.getCompany(),this.user=this.util.getUserObj(),this.today=new Date,console.log(this.company),console.log(this.user)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),D.\u0275fac=function(t){return new(t||D)(r.Tb(b.a),r.Tb(a.a))},D.\u0275cmp=r.Nb({type:D,selectors:[["app-receipt"]],decls:114,vars:30,consts:[["id","receiptholder",1,"my-5"],[1,"receipt-wrapper"],["id","receipt",1,"effect"],["id","receipt-top"],[1,"logo"],["src","../../../../assets/img/logo/logo-primary.svg","alt","logo","srcset",""],[1,"info"],[1,"mt-2"],[1,"title"],["id","receipt-mid"],[1,"client-info"],[1,"mb-2","py-1","client"],[1,"p-2"],[1,"info","p-2"],[1,"cust"],["id","receipt-bot",1,"py-5"],[1,"payment-info"],[1,"mb-2","py-1","payment-detail"],["id","table",1,"mb-5"],["span","1",2,"width","15%"],["span","1",2,"width","20%"],["span","1",2,"width","45%"],[1,"thead-light"],[1,"tabletitle"],[1,""],[1,"service"],[1,"payment"],[1,"py-3","w-50","mx-auto"],[1,"d-flex","justify-content-center"],["type","button","printTitle","Contraccess Receipt","printSectionId","receipt","ngxPrint","",1,"btn","btn-theme-primary",3,"useExistingCss"]],template:function(t,e){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"div",2),r.Zb(3,"div",3),r.Zb(4,"div",4),r.Ub(5,"img",5),r.Yb(),r.Zb(6,"div",6),r.Zb(7,"p",7),r.Hc(8,"Plot 112, Maitama Zone 2,"),r.Ub(9,"br"),r.Hc(10,"Abuja, Nigeria"),r.Yb(),r.Zb(11,"p"),r.Hc(12,"sales@contraccess.com"),r.Yb(),r.Zb(13,"p"),r.Hc(14,"09024878207"),r.Yb(),r.Yb(),r.Zb(15,"div",8),r.Zb(16,"h1"),r.Hc(17,"Payment Receipt"),r.Yb(),r.Zb(18,"h2"),r.Hc(19),r.Yb(),r.Zb(20,"p",7),r.Hc(21),r.kc(22,"date"),r.Yb(),r.Yb(),r.Yb(),r.Zb(23,"div",9),r.Zb(24,"div",10),r.Zb(25,"div",11),r.Hc(26,"Customer Information"),r.Yb(),r.Zb(27,"div",12),r.Zb(28,"div",13),r.Zb(29,"div",14),r.Zb(30,"h2"),r.Hc(31," Name "),r.Yb(),r.Zb(32,"h2"),r.Zb(33,"strong"),r.Hc(34),r.Yb(),r.Yb(),r.Yb(),r.Zb(35,"div",14),r.Zb(36,"div"),r.Hc(37," Email "),r.Yb(),r.Zb(38,"div"),r.Hc(39),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(40,"div",15),r.Zb(41,"div",16),r.Zb(42,"div",17),r.Hc(43,"Payment Details"),r.Yb(),r.Yb(),r.Zb(44,"div",18),r.Zb(45,"table"),r.Zb(46,"colgroup"),r.Ub(47,"col",19),r.Ub(48,"col",20),r.Ub(49,"col",21),r.Ub(50,"col",20),r.Yb(),r.Zb(51,"thead",22),r.Zb(52,"tr",23),r.Zb(53,"th",24),r.Zb(54,"h2"),r.Hc(55,"Date"),r.Yb(),r.Yb(),r.Zb(56,"th",24),r.Zb(57,"h2"),r.Hc(58,"Reference"),r.Yb(),r.Yb(),r.Zb(59,"th",24),r.Zb(60,"h2"),r.Hc(61,"Description"),r.Yb(),r.Yb(),r.Zb(62,"th",24),r.Zb(63,"h2"),r.Hc(64,"Amount"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(65,"tr",25),r.Zb(66,"td"),r.Zb(67,"p"),r.Hc(68),r.kc(69,"date"),r.Yb(),r.Yb(),r.Zb(70,"td"),r.Zb(71,"p"),r.Hc(72),r.Yb(),r.Yb(),r.Zb(73,"td"),r.Zb(74,"p"),r.Hc(75),r.Yb(),r.Yb(),r.Zb(76,"td"),r.Zb(77,"p"),r.Hc(78),r.kc(79,"number"),r.Yb(),r.Yb(),r.Yb(),r.Zb(80,"tr",25),r.Ub(81,"td"),r.Ub(82,"td"),r.Zb(83,"td",24),r.Zb(84,"p"),r.Hc(85,"Charges"),r.Yb(),r.Yb(),r.Zb(86,"td",26),r.Zb(87,"p"),r.Hc(88),r.kc(89,"number"),r.Yb(),r.Yb(),r.Yb(),r.Zb(90,"tr",25),r.Ub(91,"td"),r.Ub(92,"td"),r.Zb(93,"td",24),r.Zb(94,"p"),r.Hc(95,"VAT"),r.Yb(),r.Yb(),r.Zb(96,"td",26),r.Zb(97,"p"),r.Hc(98),r.kc(99,"number"),r.Yb(),r.Yb(),r.Yb(),r.Zb(100,"tr",23),r.Ub(101,"td"),r.Ub(102,"td"),r.Zb(103,"td",24),r.Zb(104,"h2"),r.Hc(105,"Total"),r.Yb(),r.Yb(),r.Zb(106,"td",26),r.Zb(107,"h2"),r.Hc(108),r.kc(109,"number"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(110,"div",27),r.Zb(111,"div",28),r.Zb(112,"button",29),r.Hc(113," Print Receipt "),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Hb(19),r.Jc("#",e.receipt.referenceNum,""),r.Hb(2),r.Jc("Date issued: ",r.mc(22,12,e.today,"medium"),""),r.Hb(13),r.Ic(e.company.companyName),r.Hb(5),r.Jc(" ",e.user.email||""," "),r.Hb(29),r.Ic(r.mc(69,15,e.receipt.dateCreated,"mediumDate")),r.Hb(4),r.Ic(e.receipt.referenceNum),r.Hb(3),r.Ic(e.receipt.type),r.Hb(3),r.Jc("\u20a6 ",r.mc(79,18,e.receipt.amount-3e3,"1.2-2"),""),r.Hb(10),r.Jc("\u20a6 ",r.mc(89,21,2250,"1.2-2"),""),r.Hb(10),r.Jc("\u20a6 ",r.mc(99,24,750,"1.2-2"),""),r.Hb(10),r.Jc("\u20a6 ",r.mc(109,27,e.receipt.amount,"1.2-2"),""),r.Hb(4),r.qc("useExistingCss",!0))},directives:[w],pipes:[i.f,i.g],styles:['*[_ngcontent-%COMP%]{margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background:#e0e0e0;font-family:Roboto,sans-serif;background-repeat:repeat-y;background-size:100%}h1[_ngcontent-%COMP%]{font-size:1.5em;color:#222}h2[_ngcontent-%COMP%]{font-size:1em}h3[_ngcontent-%COMP%]{font-size:1.2em;font-weight:300;line-height:2em}p[_ngcontent-%COMP%]{font-size:.7em;color:#666;line-height:1.2em}#receiptholder[_ngcontent-%COMP%]{width:100%;height:100%}.receipt-wrapper[_ngcontent-%COMP%]{position:relative;margin:0 auto;width:650px;background:#fff;border:none;border-radius:10px;background-color:#fff;box-shadow:0 4px 20px rgba(0,0,0,.1)}#receipt[_ngcontent-%COMP%]{background:#fff}#receipt-top[_ngcontent-%COMP%]{min-height:120px;padding:40px}#receipt-mid[_ngcontent-%COMP%]{min-height:120px;margin-top:3 0}#receipt-bot[_ngcontent-%COMP%]{min-height:250px;padding:30px}.logo[_ngcontent-%COMP%]{width:200px}.client-info[_ngcontent-%COMP%]{padding:30px}.client[_ngcontent-%COMP%]{color:#212529;background:#eee;padding-left:10px;font-size:1.2rem}.clientlogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{float:left;height:40px;width:40px;background-size:40px 40px;border-radius:40px}.title[_ngcontent-%COMP%]{float:right}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:right}.info[_ngcontent-%COMP%]{float:left}.cust[_ngcontent-%COMP%]{color:#666;display:flex}.cust[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child, .cust[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child{padding-right:5rem}.payment-detail[_ngcontent-%COMP%]{color:#212529;background:#eee;padding-left:10px;font-size:1.2rem}#description[_ngcontent-%COMP%]{margin-left:52%}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:5px 0 5px 15px;border:1px solid #eee}.tabletitle[_ngcontent-%COMP%]{padding:10px;background:#eee}.effect[_ngcontent-%COMP%]{position:relative}.effect[_ngcontent-%COMP%]:after, .effect[_ngcontent-%COMP%]:before{z-index:-1;position:absolute;content:"";bottom:15px;left:10px;width:50%;top:80%;max-width:300px;background:#777;box-shadow:0 15px 10px #777;transform:rotate(-3deg)}.effect[_ngcontent-%COMP%]:after{transform:rotate(3deg);right:10px;left:auto}']}),D)},{path:"subscription",component:O},{path:"add-subscription",component:(A=function(){function t(e,n,i){_classCallCheck(this,t),this.crudService=e,this.utilSevice=n,this.router=i,this.subscriptions=[],this.loading=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.getSubscriptionPriviledges()}},{key:"getSubscriptionPriviledges",value:function(){var t=this;this.loading=!0,this.crudService.getRequest("api/subscription/findAll").subscribe((function(e){console.log(e),t.loading=!1,t.subscriptions=e}),(function(e){console.log(e),t.loading=!1}))}},{key:"getUserSubscriptions",value:function(t){var e=this;this.crudService.getRequest("/api/usersubscription/findValidSubscribedUserByUserId/"+t).subscribe((function(t){console.log(t),e.userSubscriptions=t}),(function(t){console.log(t)}))}},{key:"setSubsription",value:function(t){this.utilSevice.setSubscription(t),this.router.navigate(["/billing/purchase-subscription"])}}]),t}(),A.\u0275fac=function(t){return new(t||A)(r.Tb(o.a),r.Tb(a.a),r.Tb(c.c))},A.\u0275cmp=r.Nb({type:A,selectors:[["app-add-subsctription"]],decls:6,vars:2,consts:[[1,"animated","fadeIn","my-5"],[1,"row","dashboard","dashboard__artisan"],[1,"col-md-12"],[1,"row","my-5"],["class","col-md-4",3,"ngClass",4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],[1,"col-md-4",3,"ngClass"],[1,"card"],[1,"p-3"],[1,"plan-title","text-uppercase","text-center","my-5","font-weight-bold",3,"ngClass"],[1,"pricing"],["class","pricing-list",4,"ngFor","ngForOf"],[1,"card-footer","p-5"],[1,"plan-price"],[1,"pre-price"],[1,"price"],[1,"post-price"],[1,"btn","ca-btn-primary","btn-block",3,"click"],[1,"pricing-list"],[1,"icon-alt","icon-check","mr-2"],[1,"text-center"],[1,"fa","fa-spinner","fa-spin","mr-2"]],template:function(t,e){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"div",2),r.Zb(3,"div",3),r.Fc(4,F,17,9,"div",4),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Fc(5,U,3,0,"div",5)),2&t&&(r.Hb(4),r.qc("ngForOf",e.subscriptions),r.Hb(1),r.qc("ngIf",e.loading))},directives:[i.s,i.t,i.q],styles:[".pricing-list[_ngcontent-%COMP%]{margin:15px 0}.plan-title[_ngcontent-%COMP%]{font-size:1.8rem}.plan-focus[_ngcontent-%COMP%]{transform:scale(1.1)}.plan-focus[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#007770!important;color:#fff}.plan-focus[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon-alt[_ngcontent-%COMP%]{color:#fff}.plan-price[_ngcontent-%COMP%]{text-align:center;color:#007770;padding:2rem}.plan-price[_ngcontent-%COMP%]   .post-price[_ngcontent-%COMP%], .plan-price[_ngcontent-%COMP%]   .pre-price[_ngcontent-%COMP%]{font-size:.9rem}.plan-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-weight:700;font-size:25px}"]}),A)},{path:"purchase-subscription",component:(R=function(){function t(e,n,i,c){_classCallCheck(this,t),this.util=e,this.crud=n,this.swal=i,this.router=c,this.amount=0,this.email=this.util.getEmail(),this.ref=this.generateReference(),this.sub=this.util.getSubscription(),this.paymentOptions={PBFPubKey:"FLWPUBK_TEST-a95caf78b6504bde29af398c56b5eeab-X",customer_email:this.util.getEmail(),customer_firstname:"Manasseh",customer_lastname:"Omachonu",custom_description:"Payment for goods",amount:5e3,currency:"NGN",customer_phone:"09024878207",txref:this.generateReference()},this.subInfo={months:1,subscriptionId:0,userId:0}}return _createClass(t,[{key:"ngOnInit",value:function(){this.subInfo.subscriptionId=this.sub.id,this.amount=this.sub.amount,this.subInfo.userId=Number(this.util.getUser())}},{key:"onChange",value:function(t){console.log(t),this.amount=this.sub.amount*t}},{key:"addSubscription",value:function(){var t=this;this.crud.postRequest("api/usersubscription/add",this.subInfo).subscribe((function(e){console.log(e),t.swal.success(e.message),t.router.navigate(["/billing/subscription"])}),(function(e){console.log(e);var n=e.error;t.swal.error((null==n?void 0:n.message)||"An error occured, please try again.")}))}},{key:"generateReference",value:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<15;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return"CA-"+t}},{key:"paymentFailure",value:function(t){console.log("Payment Failed",t)}},{key:"paymentSuccess",value:function(t){console.log("Payment complete",t),this.addSubscription()}},{key:"paymentInit",value:function(t){this.paymentInstance=t,console.log("Payment about to begin",this.paymentInstance)}}]),t}(),R.\u0275fac=function(t){return new(t||R)(r.Tb(a.a),r.Tb(o.a),r.Tb(s.a),r.Tb(c.c))},R.\u0275cmp=r.Nb({type:R,selectors:[["app-purchase-subscription"]],decls:37,vars:10,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","d-flex","justify-content-between"],[1,"card-body"],[1,"form-horizontal"],[1,"form-group","row"],["for","months",1,"col-md-3","col-form-label"],[1,"col-md-9"],["id","months","name","months",1,"form-control",3,"ngModel","ngModelChange","change"],["value","1"],["value","3"],["value","6"],["value","12"],[1,"card-footer","mb-3"],[1,"btn","ca-btn-primary",3,"email","amount","ref","channels","paymentInit","close","callback"]],template:function(t,e){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"div",2),r.Zb(3,"div",3),r.Zb(4,"h2"),r.Hc(5,"Purchase Subscription"),r.Yb(),r.Yb(),r.Zb(6,"div",4),r.Zb(7,"form",5),r.Zb(8,"div",6),r.Zb(9,"label",7),r.Hc(10,"Plan"),r.Yb(),r.Zb(11,"div",8),r.Zb(12,"div"),r.Hc(13),r.Yb(),r.Yb(),r.Yb(),r.Zb(14,"div",6),r.Zb(15,"label",7),r.Hc(16,"Duration"),r.Yb(),r.Zb(17,"div",8),r.Zb(18,"select",9),r.hc("ngModelChange",(function(t){return e.subInfo.months=t}))("change",(function(t){return e.onChange(t.target.value)})),r.Zb(19,"option",10),r.Hc(20,"1 Month"),r.Yb(),r.Zb(21,"option",11),r.Hc(22,"3 Months"),r.Yb(),r.Zb(23,"option",12),r.Hc(24,"6 Months"),r.Yb(),r.Zb(25,"option",13),r.Hc(26,"1 Year"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(27,"div",6),r.Zb(28,"label",7),r.Hc(29,"Amount"),r.Yb(),r.Zb(30,"div",8),r.Zb(31,"div"),r.Hc(32),r.kc(33,"number"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(34,"div",14),r.Zb(35,"angular4-paystack",15),r.hc("paymentInit",(function(t){return e.paymentInit(t)}))("close",(function(t){return e.paymentFailure(t)}))("callback",(function(t){return e.paymentSuccess(t)})),r.Hc(36," Make Payment "),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Hb(13),r.Ic(e.sub.category),r.Hb(5),r.qc("ngModel",e.subInfo.months),r.Hb(14),r.Jc(" \u20a6 ",r.lc(33,7,e.amount),""),r.Hb(3),r.qc("email",e.email)("amount",100*e.amount)("ref",e.ref)("channels",r.sc(9,E)))},directives:[h.E,h.p,h.q,h.A,h.o,h.r,h.t,h.D,g.a],pipes:[i.g],styles:[""]}),R)}],J=((j=function t(){_classCallCheck(this,t)}).\u0275mod=r.Rb({type:j}),j.\u0275inj=r.Qb({factory:function(t){return new(t||j)},imports:[[c.g.forChild(N)],c.g]}),j),L=n("RFI8"),z=((q=function t(){_classCallCheck(this,t)}).\u0275mod=r.Rb({type:q}),q.\u0275inj=r.Qb({factory:function(t){return new(t||q)},imports:[[i.c,J,M,h.k,h.y,f.b.forRoot(),g.b.forRoot("pk_test_961f74cc9467b58c13450983fff659a6bb8a52d3"),L.a.forRoot({key:"FLWPUBK_TEST-a95caf78b6504bde29af398c56b5eeab-X",isTest:!0})]]}),q)}}]);