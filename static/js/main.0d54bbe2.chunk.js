(this.webpackJsonpnotification=this.webpackJsonpnotification||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(2),o=n(0),i=n.n(o),c=n(6),r=n.n(c),s=(n(15),n.p,n(16),n(7));var l=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"google pay integration"}),Object(a.jsx)(s.a,{environment:"TEST",paymentRequest:{apiVersion:2,apiVersionMinor:0,allowedPaymentMethods:[{type:"CARD",parameters:{allowedCardNetworks:["VISA","MASTERCARD"],allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"]},tokenizationSpecification:{type:"PAYMENT_GATEWAY",parameters:{gateway:"allpayments",gatewayMerchantId:"BCR2DN6TSPJ7XKYY"}}}],merchantInfo:{merchantId:"BCR2DN6TSPJ7XKYY",merchantName:"Nashat Enterprises"},transactionInfo:{totalPriceStatus:"FINAL",totalPriceLabel:"Total",totalPrice:"1",currencyCode:"USD",countryCode:"US"},shippingAddressRequired:!0,callbackIntents:["SHIPPING_ADDRESS","PAYMENT_AUTHORIZATION"]},onLoadPaymentData:function(t){console.log("Success",t)},onPaymentAuthorized:function(t){return console.log("Payment Authorised Success",t),{transactionState:"SUCCESS"}},onPaymentDataChanged:function(t){return console.log("On Payment Data Changed",t),{}},existingPaymentMethodRequired:"false",buttonColor:"black",buttonType:"Buy"})]})},u=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),o(t),i(t),c(t)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),u()}},[[19,1,2]]]);
//# sourceMappingURL=main.0d54bbe2.chunk.js.map