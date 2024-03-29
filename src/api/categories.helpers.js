export const handleFetchAllCategories = async () => {

       
    ////"https://woocoreactplugin.local/wp-json/wc/v2/products/?consumer_key=ck_bc8bc21913c80284ef1bc3ff743dbf9c88b59622&consumer_secret=cs_00bcac954138822adfa82502bbab58b4c9d80c7f")//
  //const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products/categories?consumer_key="+process.env.REACT_APP_WOO_PUBLIC_API+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API)
    

  const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products/categories", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(
      {
        "publickey": process.env.REACT_APP_WOO_PUBLIC_API
      }
    ),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
return res.json();

}

export const handleFetchCategoryInfo = async ( categoryID ) => {
  //const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products/categories/"+idcategory+"?consumer_key="+process.env.REACT_APP_WOO_PUBLIC_API+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API)
  const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products/category", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(
      {
        "publickey": process.env.REACT_APP_WOO_PUBLIC_API,
        categoryID
      }
    ),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
  return res.json();
}