import React from 'react';
import { Card, Text } from '@mantine/core';
import classes from './ImageCard.module.css';

interface ImageCardProps {
  image: string;
  title: string;
}

export function ImageCard({ image, title }: ImageCardProps) {
  return (
    <Card p="lg" shadow="lg" className={classes.card} radius="md" component="a" href="#">
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={classes.overlay} />
      <div className={classes.content}>
        <Text size="lg" className={classes.title} fw={500}>
          {title}
        </Text>
      </div>
    </Card>
  );
}