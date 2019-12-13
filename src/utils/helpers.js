// Add client-side email validation for paypal form
// add client-side isRequired validation for paypal form

// creates a paypal purchase unit for our paypal component
// TODO refactor
export const createPurchaseUnit = cart => {
  let total = 0;
  let itemArray = [];
  const orderID = Date.now();
  const purchase_units = [
    {
      reference_id: "Light My Fire of Puget Sound",
      invoice_id: orderID,
      amount: {
        value: 0,
        currency_code: "USD",
        breakdown: {
          item_total: {
            value: 0,
            currency_code: "USD"
          }
        }
      },

      description: "Light My Fire 2020 Charity Dinner Auction",
      soft_descriptor: "Light My Fire",
      items: []
    }
  ];

  // loop through our cart object
  for (let [key, value] of Object.entries(cart)) {
    const { sku, name, unit_amount, quantity, description } = value;
    // update our total
    const itemTotalCost = unit_amount * quantity;
    total += itemTotalCost;

    // convert items to Strings for API
    const unit_amountString = unit_amount.toString(10);
    const quantityString = quantity.toString(10);

    // update our items array
    if (quantity > 0) {
      itemArray.push({
        sku,
        name,
        unit_amount: {
          value: unit_amountString,
          currency_code: "USD"
        },
        quantity: quantityString,
        description
      });
    }
  }

  //apply the changes to our purchase_units
  purchase_units[0].amount.value = total.toString(10);
  purchase_units[0].amount.breakdown.item_total.value = total.toString(10);
  purchase_units[0].items = itemArray;
  console.log(purchase_units);

  // return our finalized purchase unit object
  return purchase_units;
};

// combine paypal response with form data(state) into one payload that will be sent off to netlify forms
// TODO test multiple item use case
export const buildNetlifyFormPayload = (details, state) => {
  // let purchaseItems = details.purchase_units.items.map(item)
  console.log(details.purchase_units.items);
  let payload = {
    captain: state.captain,
    company: state.company,
    contactEmail: state.contactEmail,
    payerName: details.payer.name.given_name + " " + details.payer.name.surname,
    payerEmail: details.payer.email_address,
    itemPurchased: details.purchase_units.items,
    purchaseStatus: details.status,
    purchaseTime: details.create_time
  };

  return payload;
};
