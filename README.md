
# Vue PayStack Payment form
Straight forward (and good looking) credit-card form built using vue and vue-paystack pluigin

<p align="center">
<img src="https://github.com/sbycrosz/react-native-credit-card-input/blob/master/preview-ios.gif?raw=true" width=200/>
<img src="https://github.com/sbycrosz/react-native-credit-card-input/blob/master/preview-ios-lite.gif?raw=true" width=200/>
<img src="https://github.com/sbycrosz/react-native-credit-card-input/blob/master/preview-android.gif?raw=true" width=200/>
<img src="https://github.com/sbycrosz/react-native-credit-card-input/blob/master/preview-android-lite.gif?raw=true" width=200/>
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
* Form design   (inspired by: [card](https://bbbootstrap.com/snippets/bootstrap-5-payment-form-gradient-button-91213875#), [Bootstrap 5 Payment Form])
* Form is fully responsive and scalable
* Works on both Android and iOS


#### NOTES
LiteCreditCardInput does not support `requiresName`, `requiresCVC`, and `requiresPostalCode` at the moment, PRs are welcome :party:


## paystack Input
| Property | Type | Description |
| --- | --- | --- |
|autoFocus | PropTypes.bool | Automatically focus Card Number field on render|
|onChange | PropTypes.func | Receives a `formData` object every time the form changes |
|onFocus | PropTypes.func | Receives the name of currently focused field |
|labels | PropTypes.object | Defaults to <br/>`{ number: "CARD NUMBER", expiry: "EXPIRY", cvc: "CVC/CCV" }` |
|placeholders | PropTypes.object | Defaults to <br/>`{ number: "1234 5678 1234 5678", expiry: "MM/YY", cvc: "CVC" }` |
|cardScale | PropTypes.number | Scales the credit-card view.<br/>Defaults to `1`, which translates to `{ width: 300, height: 190 }` |
|cardFontFamily | PropTypes.string | Font family for the CreditCardView, works best with monospace fonts. Defaults to Courier (iOS) or monospace (android) |
|cardImageFront | PropTypes.number | Image for the credit-card view `e.g. require("./card.png")` |
|cardImageBack | PropTypes.number | Image for the credit-card view `e.g. require("./card.png")` |
|labelStyle | Text.propTypes.style | Style for credit-card form's labels |
|inputStyle | Text.propTypes.style | Style for credit-card form's textInput |
|inputContainerStyle | ViewPropTypes.style | Style for textInput's container<br/> Defaults to: `{ borderBottomWidth: 1, borderBottomColor: "black" }` |
|validColor | PropTypes.string | Color that will be applied for valid text input. Defaults to: "{inputStyle.color}" |
|invalidColor | PropTypes.string | Color that will be applied for invalid text input. Defaults to: "red" |
|placeholderColor | PropTypes.string | Color that will be applied for text input placeholder. Defaults to: "gray" |
|requiresName | PropTypes.bool | Shows cardholder's name field<br/> Default to `false` |
|requiresCVC | PropTypes.bool | Shows CVC field<br/> Default to `true` |
|requiresPostalCode | PropTypes.bool | Shows postalCode field<br/> Default to `false` |
|validatePostalCode | PropTypes.func | Function to validate postalCode, expects `incomplete`, `valid`, or `invalid` as return values|
|allowScroll | PropTypes.bool | enables horizontal scrolling on CreditCardInput <br/> Defaults to `false` |
|cardBrandIcons | PropTypes.object | brand icons for CardView. see `./src/Icons.js` for details |
| additionalInputsProps | PropTypes.objectOf(TextInput.propTypes) | An object with Each key of the object corresponding to the name of the field. Allows you to change all props documented in [RN TextInput](https://facebook.github.io/react-native/docs/textinput.html).

##CardView

| Property | Type | Description |
| --- | --- | --- |
|focused | PropTypes.string | Determines the front face of the card|
|brand | PropTypes.string | Brand of the credit card|
|name | PropTypes.string | Cardholder's name (Use empty string if you need to hide the placeholder) |
|number | PropTypes.string | Credit card number (you'll need to the formatting yourself) |
|expiry | PropTypes.string | Credit card expiry (should be in MM/YY format)|
|cvc | PropTypes.string | Credit card CVC |
|placeholder | PropTypes.object | Placeholder texts|
|scale | PropTypes.number | Scales the card|
|fontFamily | PropTypes.string | Defaults to `Courier` and `monospace` in iOS and Android respectively|
|imageFront | PropTypes.number | Image for the credit-card |
|imageBack | PropTypes.number | Image for the credit-card |
|customIcons | PropTypes.object | brand icons for CardView. see `./src/Icons.js` for details |

#### Note on additionalInputsProps

additionalInputsProps gives you more control over the inputs in LiteCreditCardInput and CreditCardInput. An example object is as follows:
```javascript
addtionalInputsProps = {
  name: {
    defaultValue: 'my name',
    maxLength: 40,
  },
  postalCode: {
    returnKeyType: 'go',
  },
};
```

The above would set the default value of the name field to `my name` and limit the input to a maximum of 40 character. In addition, it would set the returnKeyType of the postalcode field to `go`.

# Methods
## setValues
Set values into credit card form


```js
	// sets 4242 on credit card number field
	// other fields will stay unchanged
	this.refs.CCInput.setValues({ number: "4242" });
```

**Known issues:** clearing a field e.g. `setValues({ expiry: "" })` will trigger the logic to `move to previous field` and trigger other kind of weird side effects. **PR plz**


## focus
focus on to specified field

```js
	// focus to expiry field
	this.refs.CCInput.focus("expiry");
```

# Example

[Expo Snack](https://snack.expo.io/@sbycrosz/react-native-credit-card-example)

In the `example` directory, run:

```bash
npm install

react-native run-ios
# or
react-native run-android
```

# Missing Something? Something is not working?
* Open a GitHub issue, or
* Send a pull request :D
* Make sure `npm run lint` passed

# Future Improvement
* Add unit tests
* Create example with [react-native-awesome-card-io](https://github.com/Kerumen/react-native-awesome-card-io)

# Breaking Changes from 0.2.*
* `cardViewSize` prop are removed from `CreditCardInput`, use `cardScale` instead (because changing the size will break most of the texts)
* `bgColor` prop are removed from `CreditCardInput`, ask your designer friend to make a credit card image instead (or use the prebundled image)
* `imageFront` and `imageBack` props are renamed to `cardImageFront` and `cardImageBack` respectively,
* Android `monospace` fonts doesn't looks as nice as iOS `Courier`, bundle custom fonts into your app and override the default using `cardFontFamily` instead

# Production App using react-native-credit-card-input
* Grain.com.sg ([iOS](https://grain.com.sg/mobile/ios/download), [Android](https://grain.com.sg/mobile/android/download)) – Gourmet food delivery in Singapore
