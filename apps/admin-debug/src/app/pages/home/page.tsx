import React from 'react';

import { CardsCarousel } from '@/components/Pages/CardsCarousel';
import { Foundation } from '@/components/Pages/Foundation';
import { StatsGroup } from '@/components/Pages/StatsGroup';
import { ArticlesCardsGrid } from '@/components/Pages/ArticlesCardsGrid';
import { SuccessStoriesContainer } from '@/components/Pages/SuccessStories';

function App() {
  console.log('App rendered.');
  return (
    <div className="app-container"> 
      <CardsCarousel />
      <Foundation />
      <StatsGroup />
      <ArticlesCardsGrid />
      <SuccessStoriesContainer />
    </div>
  );
}

export default App;