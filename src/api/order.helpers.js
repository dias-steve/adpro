export const handleCreateOrder = async () => {
  
    const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/shop",{
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify({
          "publickey": process.env.REACT_APP_WOO_PUBLIC_API,
          "order":{
            "payment_method": "bacs",
            "payment_method_title": "Direct Bank Transfer",
              "customer_note": "livraison au 6eme étage",
            "set_paid": false,
            "billing": {
              "first_name": "Steve",
              "last_name": "Doe",
              "address_1": "969 Market",
              "address_2": "",
              "city": "San Francisco",
              "state": "CA",
              "postcode": "94103",
              "country": "US",
              "email": "stevedachat@gmail.com",
              "phone": "(555) 555-5555"
            },
            "shipping": {
              "first_name": "John",
              "last_name": "Doe",
              "address_1": "969 Market",
              "address_2": "",
              "city": "San Francisco",
              "state": "CA",
              "postcode": "94103",
              "country": "US"
            },
            "line_items": [
          
              {
                "product_id": 19,
                "quantity": 3
              }
            ],
            "shipping_lines": [
              {
                "method_id": "flat_rate",
                "method_title": "Flat Rate",
                "total": "10.00"
              }
            ]
        }
        }
          ),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
     
    return res.json();

        

}

export const handleOrderValidate = async (orderId, paymentIntent) => {
    const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/shopvalidation",{
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify(
          {
            "publickey": process.env.REACT_APP_WOO_PUBLIC_API,
            orderId,
            paymentIntentId: paymentIntent.id

          }

        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    
    return res;
        

}