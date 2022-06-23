import React, { useState } from "react";
import "../styles/Form.css";
import { Button } from "./Button";
import { Card } from "./Card";
import validateInfo from "../helper-functions/ValidateInfo";

const CardForm = ({ cards, preferredCard }) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const formatedMonth = month < 10 ? `0${month}` : month;
  const year = date.getFullYear();
  const [cardValues, setCardValues] = useState({
    cardNumber: "4324543393821030",
    expiryDate: `${year}-${formatedMonth}`,
    securityCode: "420",
    postalCode: "10119",
  });
  const [cardType, setCardType] = useState("mastercard");
  const { cardNumber, expiryDate, securityCode, postalCode } = cardValues;

  const [rememberCard, setRememberCard] = useState(false);
  const [errors, setErrors] = useState({});
  const { cardNumber: car} = errors;
  console.log(car)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardValues((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleCardChange = (e) => {
    setCardType(e.target.name);
  };
  const handleRememberCard = (e) => {
    setRememberCard((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validateInfo(cardValues, preferredCard[cardType]["type"]);
    setErrors(errors);
  };
  return (
    <div className="cardForm">
      <hr />
      <div className="cardForm__header">
        <div className="cardForm__header__title">
          <h2>Payment Information</h2>
          <p>Enter your payment information</p>
        </div>
        <div className="cardForm__header__icons">
          {cards &&
            cards.map((card, index) => (
              <img
                src={card.url}
                name={card.cardTitle}
                key={index}
                className="cardForm__header__icon"
                onClick={handleCardChange}
              />
            ))}
        </div>
      </div>
      <div className="cardForm__body">
        <Card
          cardNumber={cardNumber}
          expiryDate={expiryDate}
          name="John Doe"
          cardType={preferredCard[cardType].url}
        />
        <form className="cardForm__form" onSubmit={handleSubmit}>
          <div>
            <label className="cardForm__form__item" htmlFor="cardNumber">
              Credit card number
            </label>
            <input
              className={`cardForm__form__item ${errors.cardNumber ? "cardForm__errors__border" : ""}`}
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={handleChange}
            />
            {errors.cardNumber && <p className="cardForm__errors">{errors.cardNumber}</p>}
          </div>
          <div>
            <label className="cardForm__form__item" htmlFor="expiryDate">
              Expiration date
            </label>
            <input
              type="month"
              min={`${year}-${formatedMonth}`}
              className={`cardForm__form__item ${errors.expiryDate ? "cardForm__errors__border" : ""}`}
              id="expiryDate"
              name="expiryDate"
              onChange={handleChange}
              value={expiryDate}
            />
            {errors.expiryDate && <p className="cardForm__errors">{errors.expiryDate}</p>}
          </div>
          <div>
            <label className="cardForm__form__item" htmlFor="securityCode">
              Security code
            </label>
            <input
              type="text"
              maxLength="3"
              minLength="3"
              className={`cardForm__form__item ${errors.securityCode ? "cardForm__errors__border" : ""}`}
              id="securityCode"
              name="securityCode"
              onChange={handleChange}
              value={securityCode}
            />
            {errors.securityCode && <p className="cardForm__errors">{errors.securityCode}</p>}
          </div>
          <div>
            <label className="cardForm__form__item" htmlFor="postalCode">
              Postal code
            </label>
            <input
              className={`cardForm__form__item ${errors.postalCode ? "cardForm__errors__border" : ""}`}
              id="postalCode"
              name="postalCode"
              onChange={handleChange}
              value={postalCode}
            />
            {errors.postalCode && <p className="cardForm__errors">{errors.postalCode}</p>}
          </div>
          <div id="submitButton" className="cardForm__form__item">
            <input
              type="radio"
              name="useCard"
              onChange={handleRememberCard}
              checked={rememberCard}
            />
            <label>Use this card for next time purchase</label>
            <div className="cardForm__form__button">
              <Button title={"Add card"} width={"100%"} height={"40px"} />
            </div>
          </div>
        </form>
      </div>
      <hr />
    </div>
  );
};

export default CardForm;
