import logo from './logo.svg';
import './App.css';
import GooglePayButton from "@google-pay/button-react";
import React from "react"
function App() {
  //   const allowedNetworks = ['VISA','MASTERCARD'];
  // const allowedAuthMethods = ['PAN_ONLY','CRYPTOGRAM_3DS'];
  const supportedInstruments = [
    {
      supportedMethods: ['https://tez.google.com/pay'],
      data: {
        pa: '8678912996@apl',
        pn: 'Nashat Enterprises',
        tr: '4444ABCF',  // your custom transaction reference ID
        url: 'https://www.alameenindia.com',
        mc: '5111', // your merchant category code
        tn: 'Purchase in Merchant',
      },
    }
  ];
  const details = {
    total: {
      label: 'Total',
      amount: {
        currency: 'INR',
        value: '10.01', // sample amount
      },
    },
    displayItems: [{
      label: 'Original Amount',
      amount: {
        currency: 'INR',
        value: '10.01',
      },
    }],
  };
  let request = null;
  try {
    request = new PaymentRequest(supportedInstruments, details);
  } catch (e) {
    console.log('Payment Request Error: ' + e.message);
    return;
  }
  if (!request) {
    console.log('Web payments are not supported in this browser.');
    return;
  }
  // Global key for canMakepayment cache.
  const canMakePaymentCache = 'canMakePaymentCache';

  /**
   * Check whether can make payment with Google Pay or not. It will check session storage
   * cache first and use the cache directly if it exists. Otherwise, it will call
   * canMakePayment method from PaymentRequest object and return the result, the
   * result will also be stored in the session storage cache for future usage.
   *
   * @private
   * @param {PaymentRequest} request The payment request object.
   * @return {Promise} a promise containing the result of whether can make payment.
   */
  function checkCanMakePayment(request) {
    // Check canMakePayment cache, use cache result directly if it exists.
    if (sessionStorage.hasOwnProperty(canMakePaymentCache)) {
      return Promise.resolve(JSON.parse(sessionStorage[canMakePaymentCache]));
    }

    // If canMakePayment() isn't available, default to assume the method is
    // supported.
    var canMakePaymentPromise = Promise.resolve(true);

    // Feature detect canMakePayment().
    if (request.canMakePayment) {
      canMakePaymentPromise = request.canMakePayment();
    }

    return canMakePaymentPromise
      .then((result) => {
        // Store the result in cache for future usage.
        sessionStorage[canMakePaymentCache] = result;
        return result;
      })
      .catch((err) => {
        console.log('Error calling canMakePayment: ' + err);
      });
  }
  function handleNotReadyToPay() {
    alert('Google Pay is not ready to pay.');
  }
  function showPaymentUI(request, canMakePayment) {
    if (!canMakePayment) {
      handleNotReadyToPay();
      return;
    }

    // Set payment timeout.
    let paymentTimeout = window.setTimeout(function () {
      window.clearTimeout(paymentTimeout);
      request.abort()
        .then(function () {
          console.log('Payment timed out after 20 minutes.');
        })
        .catch(function () {
          console.log('Unable to abort, user is in the process of paying.');
        });
    }, 20 * 60 * 1000); /* 20 minutes */

    request.show()
      .then(function (instrument) {

        window.clearTimeout(paymentTimeout);
        processResponse(instrument); // Handle response from browser.
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  /**
  * Process the response from browser.
  *
  * @private
  * @param {PaymentResponse} instrument The payment instrument that was authed.
  */
 function instrumentToJsonString(instrument) {
  if (instrument.toJSON) {
    return JSON.stringify(instrument, undefined, 2);
  } else {
    return JSON.stringify({
      methodName: instrument.methodName,
      details: instrument.details,
    }, undefined, 2);
  }
}
  function processResponse(instrument) {
    var instrumentString = instrumentToJsonString(instrument);
    console.log(instrumentString);
    // console.log(instrument);

    fetch('/buy', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: instrumentString,
    })
      .then(function (buyResult) {
        if (buyResult.ok) {
          return buyResult.json();
        }
        console.log('Error sending instrument to server.');
      })
      .then(function (buyResultJson) {
        completePayment(instrument, buyResultJson.status, buyResultJson.message);

      })
      .catch(function (err) {
        console.log('Unable to process payment. ' + err);
      });
  }

  /**
  * Notify browser that the instrument authorization has completed.
  *
  * @private
  * @param {PaymentResponse} instrument The payment instrument that was authed.
  * @param {string} result Whether the auth was successful. Should be either
  * 'success' or 'fail'.
  * @param {string} msg The message to log in console.
  */
  function completePayment(instrument, result, msg) {
    instrument.complete(result)
      .then(function () {
        console.log('Payment succeeds.');
        console.log(msg);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  var canMakePaymentPromise = checkCanMakePayment(request);
  canMakePaymentPromise
    .then((result) => {
      showPaymentUI(request, result);
    })
    .catch((err) => {
      console.log('Error calling checkCanMakePayment: ' + err);
    });

  return (
    <div className="App">
      <h1>google pay integration</h1>

      {/* <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedCardNetworks: allowedNetworks,
                allowedAuthMethods: allowedAuthMethods,
                // allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                // allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'allpayments',
                  gatewayMerchantId: 'BCR2DN6TSPJ7XKYY',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: 'BCR2DN6TSPJ7XKYY',
            merchantName: 'Nashat Enterprises',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'USD',
            countryCode: 'US',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
          console.log('Payment Authorised Success', paymentData)
          return { transactionState: 'SUCCESS' }
        }
        }
        onPaymentDataChanged={paymentData => {
          console.log('On Payment Data Changed', paymentData)
          return {}
        }
        }
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='Buy'
      /> */}
    </div>
  );
}

export default App;
