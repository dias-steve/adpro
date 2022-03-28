// api requests

export const handleFetchProducts = async () => {
  
    const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products/?status=publish&per_page=100&consumer_key="+process.env.REACT_APP_WOO_PUBLIC_API+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API)
    return res.json();

        

}


export const handleFetchProductsbyCategory = async (idcategory) => {
  
  const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products?category="+idcategory+"&status=publish&per_page=100&consumer_key="+process.env.REACT_APP_WOO_PUBLIC_API+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API)
  return res.json();

      

}
//fetch product detail
export const handleFetchProduct = async (idproduct) => {

       
        ////"https://woocoreactplugin.local/wp-json/wc/v2/products/?consumer_key=ck_bc8bc21913c80284ef1bc3ff743dbf9c88b59622&consumer_secret=cs_00bcac954138822adfa82502bbab58b4c9d80c7f")//
      const res = await fetch(process.env.REACT_APP_WOO_URL_API+"/products/"+idproduct+"?status=publish&per_page=100&consumer_key="+process.env.REACT_APP_WOO_PUBLIC_API+"&consumer_secret="+process.env.REACT_APP_WOO_SECRET_API)
        return res.json();


        

    
}


