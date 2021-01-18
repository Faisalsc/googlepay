import logo from './logo.svg';
import './App.css';
import GooglePayButton from "@google-pay/button-react";
import React from "react"
function App() {
  const allowedNetworks = ['VISA','MASTERCARD'];
const allowedAuthMethods = ['PAN_ONLY','CRYPTOGRAM_3DS'];
  return (
    <div className="App">
      <h1>google pay integration</h1>
      <GooglePayButton
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
      />
    </div>
  );
}

export default App;
