import React from 'react';

import { CardsCarousel } from '@/components/CardsCarousel';
import { Foundation } from '@/components/Foundation';
import { StatsGroup } from '@/components/StatsGroup';
import { ArticlesCardsGrid } from '@/components/ArticlesCardsGrid';
import { SuccessStoriesContainer } from '@/components/SuccessStories';

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