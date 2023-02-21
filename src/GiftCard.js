import { useState } from "react";

export default function GiftCard() {
  // Define a state variable called giftCard with an object value
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  // Define a function that updates giftCard state when button is clicked
  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState, // Spread operator to copy previous state values
        text: "Your coupon has been used.", // Change text value
        valid: false, // Change valid value to false
        instructions: "Please visit our restaurant to renew your gift card.", // Change instructions value
      };
    });
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}
