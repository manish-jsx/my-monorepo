import React from 'react';
import { Card, Center, Group, Text, useMantineTheme } from '@mantine/core';
import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import classes from './ImageCard.module.css';

export function ImageCard({ image, title }) {
  const theme = useMantineTheme();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="#"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {title}
          </Text>

         
        </div>
      </div>
    </Card>
  );
}