export default function validateInfo(values, cardInfo) {
  let errors = {};
  function validateCardNumber(inputtxt) {
    const visacardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardno = /^(?:5[1-5][0-9]{14})$/;
    let cardRegex;
    if (cardInfo === "visa") {
      cardRegex = visacardno;
    } else if (cardInfo === "mastercard") {
      cardRegex = mastercardno;
    }
    if (inputtxt.trim().match(cardRegex)) {
      return true;
    } else return false;
  }

  if (!values.cardNumber.trim()) {
    errors.cardNumber = "Card number required";
  }
  if (!validateCardNumber(values.cardNumber)) {
    errors.cardNumber = `Not a valid ${cardInfo} number`;
  }

  if (!values.expiryDate.trim()) {
    errors.expiryDate = "Expiry date required";
  }
  if (!values.securityCode.trim()) {
    errors.securityCode = "Security code required";
  } else if (isNaN(values.securityCode.trim())) {
      errors.securityCode= "Security code should be a number"
  }
  if (!values.postalCode.trim()) {
    errors.postalCode = "Postal code required";
  }
  
  return errors;
}
