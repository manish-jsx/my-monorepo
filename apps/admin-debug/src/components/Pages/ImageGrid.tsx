// components/ImageGrid.tsx
import React from 'react';
import Image from 'next/image';
import styles from './ImageGrid.module.css'; // Import the CSS module

interface ImageData {
  src: string;
  alt: string;
  name: string;
  description: string;
}

interface ImageGridProps {
  images: ImageData[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className={styles.gridContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.gridItem}>
          <div className={styles.imageWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={800}
              className={styles.image}
            />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.imageName}>{image.name}</h3>
            <p className={styles.imageDescription}>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};