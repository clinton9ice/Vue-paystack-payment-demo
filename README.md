
# Vue PayStack Payment form
Straight forward and good looking credit-card form built using vue-paystack pluigin

<p align="center">
<img src="https://github.com/clinton9ice/Vue-paystack-payment-demo/blob/385e7d43d978af7b45140785c9705d43d3924a86/src/assets/img/20220905_180240.gif?raw=true"/>

<img src="https://github.com/clinton9ice/Vue-paystack-payment-demo/blob/385e7d43d978af7b45140785c9705d43d3924a86/src/assets/img/demo.jpeg?raw=true"/>

</p>

Code:

```js
   <paystack
              :amount="amount"
              :email="email"
              :paystackkey="paystackkey"
              :reference="reference"
              :callback="callback"
              :close="close"
              :currency="'NGN'"
              :embed="false"
              class="btn btn-primary mb-3 active"
              v-else
            >
              <span class="ps-3"> Make Payment </span>
              <span class="fas fa-arrow-right ms-3"></span>
            </paystack>
```


# Features
* Form design   (inspired by: [Bootstrap 5 Payment Form](https://bbbootstrap.com/snippets/bootstrap-5-payment-form-gradient-button-91213875#), [Bootstrap])
* Form is fully responsive and scalable
* Works on both Android and iOS



## Paystack Props
<br />

| Property | Type | Description |
| --- | --- | --- |
|amount | String | Amount (in the lowest currency value - kobo, pesewas or cent) you are debiting customer 
|email | String | email
|paystackkey | Number | Your public key from Paystack. Use test key for test mode and live key for live mode
|reference | String | Unique case sensitive transaction reference. Only -,., =and alphanumeric characters allowed. If you do not pass this parameter, Paystack will generate a unique reference for you.
|callback | Function | Function that runs when payment is successful. This should ideally be a script that uses the verify endpoint on the Paystack API to check the status of the transaction.
|close | Function | Javascript function that is called if the customer closes the payment window instead of making a payment.
|currency | String | Currency charge should be performed in. Allowed values are: ```NGN```, ```GHS```, ```ZAR``` or ```USD``` It defaults to your integration currency.
|embed | Boolean | Determines if it should be embeded within your template or should be a pop up. Default is ```true```
|


<br />


## Production App using Vue.js and Vue-paystack