(this.webpackJsonpnotification=this.webpackJsonpnotification||[]).push([[0],{14:function(n,e,t){},15:function(n,e,t){},19:function(n,e,t){"use strict";t.r(e);var o=t(2),a=t(0),c=t.n(a),i=t(6),r=t.n(i);t(14),t.p,t(15),t(16);var s=function(){var n=[{supportedMethods:["https://tez.google.com/pay"],data:{pa:"8681821208@okbizaxis",pn:"Nashat Enterprises",tr:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(4,2),url:"https://www.google.com",mc:"5111",tn:"Purchase in Merchant"}}],e=null;try{e=new PaymentRequest(n,{total:{label:"Total",amount:{currency:"INR",value:"1.01"}},displayItems:[{label:"Original Amount",amount:{currency:"INR",value:"1.01"}}]})}catch(c){return void console.log("Payment Request Error: "+c.message)}if(e){var t="canMakePaymentCache";return function(n){if(sessionStorage.hasOwnProperty(t))return Promise.resolve(JSON.parse(sessionStorage.canMakePaymentCache));var e=Promise.resolve(!0);return n.canMakePayment&&(e=n.canMakePayment()),e.then((function(n){return sessionStorage.canMakePaymentCache=n,n})).catch((function(n){console.log("Error calling canMakePayment: "+n)}))}(e).then((function(n){a(e,n)})).catch((function(n){console.log("Error calling checkCanMakePayment: "+n)})),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("h1",{children:"google pay integration"})})}function a(n,e){if(e){var t=window.setTimeout((function(){window.clearTimeout(t),n.abort().then((function(){console.log("Payment timed out after 20 minutes.")})).catch((function(){console.log("Unable to abort, user is in the process of paying.")}))}),6e4);n.show().then((function(n){window.clearTimeout(t),function(n){var e=function(n){return n.toJSON?JSON.stringify(n,void 0,2):JSON.stringify({methodName:n.methodName,details:n.details},void 0,2)}(n);console.log(e),alert("137"+e),fetch("/buy",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:e}).then((function(n){if(n.ok)return n.json();console.log("Error sending instrument to server.")})).then((function(e){!function(n,e,t){n.complete(e).then((function(){console.log("Payment succeeds.")})).catch((function(n){console.log(n)}))}(n,e.status,e.message)})).catch((function(n){console.log("Unable to process payment. "+n)}))}(n)})).catch((function(n){console.log(n)})),n.abort().then((function(){console.log("Payment timed out after 20 minutes.")})).catch((function(){console.log("Unable to abort, user is in the process of paying.")}))}else alert("Google Pay is not ready to pay.")}console.log("Web payments are not supported in this browser.")},l=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(e){var t=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),o(n),a(n),c(n),i(n)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(s,{})}),document.getElementById("root")),l()}},[[19,1,2]]]);
//# sourceMappingURL=main.1091058f.chunk.js.map