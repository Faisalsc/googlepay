(this.webpackJsonpnotification=this.webpackJsonpnotification||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var o=t(2),a=t(0),c=t.n(a),r=t(6),s=t.n(r);t(14),t.p,t(15),t(16);var i=function(){var e=null;try{e=new PaymentRequest([{supportedMethods:["https://tez.google.com/pay"],data:{pa:"8678912996@apl",pn:"Nashat Enterprises",tr:"1234ABCD",url:"https://www.google.com",mc:"5111",tn:"Purchase in Merchant"}}],{total:{label:"Total",amount:{currency:"INR",value:"1.01"}},displayItems:[{label:"Original Amount",amount:{currency:"INR",value:"1.01"}}]})}catch(a){return void console.log("Payment Request Error: "+a.message)}if(e){var n="canMakePaymentCache";return function(e){if(sessionStorage.hasOwnProperty(n))return Promise.resolve(JSON.parse(sessionStorage.canMakePaymentCache));var t=Promise.resolve(!0);return e.canMakePayment&&(t=e.canMakePayment()),t.then((function(e){return sessionStorage.canMakePaymentCache=e,e})).catch((function(e){console.log("Error calling canMakePayment: "+e)}))}(e).then((function(n){t(e,n)})).catch((function(e){console.log("Error calling checkCanMakePayment: "+e)})),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("h1",{children:"google pay integration"})})}function t(e,n){if(n){var t=window.setTimeout((function(){window.clearTimeout(t),e.abort().then((function(){console.log("Payment timed out after 20 minutes.")})).catch((function(){console.log("Unable to abort, user is in the process of paying.")}))}),12e5);e.show().then((function(e){window.clearTimeout(t),function(e){var n=function(e){return e.toJSON?JSON.stringify(e,void 0,2):JSON.stringify({methodName:e.methodName,details:e.details},void 0,2)}(e);console.log(n),fetch("/buy",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:n}).then((function(e){if(e.ok)return e.json();console.log("Error sending instrument to server.")})).then((function(n){!function(e,n,t){e.complete(n).then((function(){console.log("Payment succeeds."),console.log(t)})).catch((function(e){console.log(e)}))}(e,n.status,n.message)})).catch((function(e){console.log("Unable to process payment. "+e)}))}(e)})).catch((function(e){console.log(e)}))}else alert("Google Pay is not ready to pay.")}console.log("Web payments are not supported in this browser.")},l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),o(e),a(e),c(e),r(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(i,{})}),document.getElementById("root")),l()}},[[19,1,2]]]);
//# sourceMappingURL=main.aebd9b06.chunk.js.map