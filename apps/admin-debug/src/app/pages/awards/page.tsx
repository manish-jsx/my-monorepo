import React from 'react';
import { HeroContentLeft } from '@/components/Pages/HeroContentLeft'
import { ImageGrid } from '@/components/Pages/ImageGrid'; // Assuming the ImageGrid is in this location

const images = [
  {
    src: 'https://via.placeholder.com/800',
    alt: 'Image 1',
    name: 'Image One',
    description: 'This is the description for image one.',
  },
  {
    src: 'https://via.placeholder.com/800',
    alt: 'Image 2',
    name: 'Image Two',
    description: 'This is the description for image two.',
  },
  {
    src: 'https://via.placeholder.com/800',
    alt: 'Image 3',
    name: 'Image Three',
    description: 'This is the description for image three.',
  },
  {
    src: 'https://via.placeholder.com/800',
    alt: 'Image 4',
    name: 'Image Four',
    description: 'This is the description for image four.',
  },
];

export default function AwardsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroContentLeft
        title="Awards"
        description="We provide the best solutions for your business needs. Explore our services and get started today."
        backgroundImage="https://example.com/path/to/your/image.jpg"
        defaultBackgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />

      {/* Image Grid Section */}
      <ImageGrid images={images} />
    </>
  );
}