"use client";
import { ArticlesCardsGrid } from "../../components/ArticlesCardsGrid";
import { CardsCarousel } from "../../components/CardsCarousel";
import { Foundation } from "../../components/Foundation";
import { StatsGroup } from "../../components/StatsGroup";
import { SuccessStoriesContainer } from "../../components/SuccessStories";



const HomePage = () => {
  return (
    <>
     <CardsCarousel/>
     <Foundation/>
      <StatsGroup/>

     <ArticlesCardsGrid/>
     <SuccessStoriesContainer/>

    </>
   

  );
};

export default HomePage;