import React from "react";
import CategoriesList from "../../components/CategoriesList";
import "./styles.scss";
import { useQuery } from "react-query";
import { handleFetchHomeData } from "../../api/homedata.helpers";
import Hero from "../../components/HomeComponents/Hero";
import CollectionComputer from "../../components/HomeComponents/CollectionsHome/CollectionComputer";
import CollectionDigital from "../../components/HomeComponents/CollectionsHome/CollectionDigital";
import CollectionCaroussel from "../../components/HomeComponents/CollectionsHome/CollectionCaroussel";
import { Helmet } from "react-helmet";
const HomePage = (props) => {
  const { isLoading, isFetching, error, data, status } = useQuery(
    "homeData",
    handleFetchHomeData
  );
  
  if (data) {
    console.log(data);
  }

  return (
    <> 
      <Helmet>
        <title>UNADN</title>
      </Helmet>
      <div className="homepage">
        {isLoading && <p>loading...</p>}
        {error && <p>error.message</p>}
        {data && (
          <div>
           <Hero image={data.image_accueil} logo={data.logo_fond} />
            <CollectionDigital collectionData={data.collection_1} />
            <CollectionComputer />
            <CollectionCaroussel />
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
