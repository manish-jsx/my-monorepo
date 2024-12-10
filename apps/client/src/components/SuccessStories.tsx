import React from 'react';
import { Container, SimpleGrid} from '@mantine/core';
import { ImageCard } from './ImageCard';


const PRIMARY_COL_HEIGHT = '300px';

const successStories = [
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Achieving Greatness',

  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Success at Scale',
    
    
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'From Zero to Hero',
   
  
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Making a Difference',

   
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: 'Making a Change',
   
  },
];

export function SuccessStoriesContainer() {
  return (
    <Container my="xl">
      <div style={{ marginTop: '2rem', height: PRIMARY_COL_HEIGHT }}> {/* Use the constant here */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 5 }} spacing="lg">
          {successStories.map((story, index) => (
            <ImageCard key={index} image={story.image} title={story.title} />
          ))}
        </SimpleGrid>
      </div>
    </Container>
  );
}
