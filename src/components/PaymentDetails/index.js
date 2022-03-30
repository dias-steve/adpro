import React, { useState } from "react";
import FormInput from "../forms/FormInput";
import Button from "./../forms/Button";
import { CountryDropdown } from "react-country-region-selector";

import "./styles.scss";

const initialAddressSate = {
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
};

const PaymentDetails = () => {
  const [billingAddress, setBillingAddress] = useState({
    ...initialAddressSate,
  });
  const [shippingAddress, setShippingAdress] = useState({
    ...initialAddressSate,
  });
  const [recipientName, setRecipientName] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  // met à jour l'objet adresse de la section Shipping
  const handleShipping = (evt) => {
    const { name, value } = evt.target;
    setShippingAdress({
      ...shippingAddress,
      [name]: value, // [attribut] -> dynamique
    });
  };

  // mets à jour l'objet Adress de la section billing
  const handleBilling = (evt) => {
    const { name, value } = evt.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value, // [attribut] -> dynamique
    });
  };

  const handleFormSubmit = async (evt) => {
    // pour bloquer le rechargement de la page lorsque nous cliquons sur le bouton
    evt.preventDefault();

    //recupperation de l'élément card
    //const cardElement = elements.getElement('card');

    //validation des données du formulaire

    if (
      !shippingAddress.line1 ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.postal_code ||
      !shippingAddress.country ||
      !billingAddress.line1 ||
      !billingAddress.city ||
      !billingAddress.state ||
      !billingAddress.postal_code ||
      !billingAddress.country ||
      !recipientName ||
      !nameOnCard
    ) {
      //s'il nous manque des infos on sort de la fonction
      console.log("maque un champs")
      console.log("shipping")
      console.log(shippingAddress)
      console.log("billing")
      console.log(billingAddress)
      return;
    }
    console.log("tout bon")
    console.log("shipping")
    console.log(shippingAddress)
    console.log("billing")
    console.log(billingAddress)
  };
  return (
    <div className="paymentDetails">
      <form onSubmit={handleFormSubmit}>
        <div className="group">
          <h2>Shipping</h2>
          <FormInput
            required
            placeholder="Recipient Name"
            name="recipientName"
            handleChange={(evt) => setRecipientName(evt.target.value)}
            value={recipientName}
            type="text"
          />

          <FormInput
            required
            placeholder="Line 1"
            name="line1"
            handleChange={(evt) => handleShipping(evt)}
            value={shippingAddress.line1}
            type="text"
          />

          <FormInput
            placeholder="Line 2"
            name="line2"
            handleChange={(evt) => handleShipping(evt)}
            value={shippingAddress.line2}
            type="text"
          />

          <FormInput
            required
            placeholder="City"
            handleChange={(evt) => handleShipping(evt)}
            name="city"
            value={shippingAddress.city}
            type="text"
          />

          <FormInput
            required
            placeholder="State"
            handleChange={(evt) => handleShipping(evt)}
            name="state"
            value={shippingAddress.state}
            type="text"
          />

          <FormInput
            required
            placeholder="PostalCode"
            handleChange={(evt) => handleShipping(evt)}
            name="postal_code" // il faut que le nom match avec le nom de la variable
            value={shippingAddress.postal_code}
            type="text"
          />
          <div className="formRow ckeckoutInput">
            <CountryDropdown
              required
              onChange={(val) =>
                handleShipping({
                  target: {
                    name: "country",
                    value: val,
                  },
                })
              }
              value={shippingAddress.country}
              valueType="short"
            />
          </div>
        </div>

        <div className="group">
          <h2>Billing Address</h2>
          <FormInput
            required
            placeholder="Name on Card"
            value={nameOnCard}
            handleChange={(evt) => setNameOnCard(evt.target.value)} // repération de la donnée entrée dans le champs
            name="nameOnCard"
            type="text"
          />

          <FormInput
            required
            placeholder="Line 1"
            name="line1"
            handleChange={(evt) => handleBilling(evt)}
            value={billingAddress.line1}
            type="text"
          />

          <FormInput
            placeholder="Line 2"
            name="line2"
            handleChange={(evt) => handleBilling(evt)}
            value={billingAddress.line2}
            type="text"
          />

          <FormInput
            required
            placeholder="City"
            name="city"
            handleChange={(evt) => handleBilling(evt)}
            value={billingAddress.city}
            type="text"
          />

          <FormInput
            required
            placeholder="State"
            name="state"
            handleChange={(evt) => handleBilling(evt)}
            value={billingAddress.state}
            type="text"
          />

          <FormInput
            required
            placeholder="PostalCode"
            name="postal_code"
            handleChange={(evt) => handleBilling(evt)}
            value={billingAddress.postal_code}
            type="text"
          />

          <div className="formRow ckeckoutInput">
            <CountryDropdown
              required
              onChange={(val) =>
                handleBilling({
                  target: {
                    name: "country",
                    value: val,
                  },
                })
              }
              value={billingAddress.country}
              valueType="short"
            />
          </div>
        </div>

     
        <Button type="submit">Pay Now</Button>
      </form>
    </div>
  );
};

export default PaymentDetails;
