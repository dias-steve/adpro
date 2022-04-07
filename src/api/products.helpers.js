// api requests

export const handleFetchProducts = async () => {
  
    const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products/?status=publish&per_page=100&consumer_key="+process.env.REACT_APP_WOO_PUBLIC_API+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API)
    return res.json();

        

}


export const handleFetchProductsbyCategory = async (categoryId) => {
  
  
  const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products/bycategory", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(
      {
        "publickey": process.env.REACT_APP_WOO_PUBLIC_API,
        categoryId
      }
    ),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  })
  return res.json();

      

}
//fetch product detail
export const handleFetchProduct = async (productId) => {

       
        const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products/detail", {
     
          // Adding method type
          method: "POST",
           
          // Adding body or contents to send
          body: JSON.stringify(
            {
              "publickey": process.env.REACT_APP_WOO_PUBLIC_API,
              productId
            }
          ),
           
          // Adding headers to the request
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
        })
        return res.json();
      
            
      
      
        

    
}


