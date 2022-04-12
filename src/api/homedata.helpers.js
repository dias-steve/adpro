export const handleFetchHomeData = async () => {
    //const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products/categories/"+idcategory+"?consumer_key="+process.env.REACT_APP_WOO_PUBLIC_API+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API)
    const res = await fetch(process.env.REACT_APP_API_REST_DATA+"/homedata", {
       
      // Adding method type
      method: "GET",
       
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
    return res.json();
  }