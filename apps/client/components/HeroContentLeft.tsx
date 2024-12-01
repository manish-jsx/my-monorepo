import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

interface HeroContentLeftProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  defaultBackgroundImage?: string;
}

export function HeroContentLeft({
  title = "A fully featured React components library", // default title
  description = "Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation", // default description
  buttonText = "", // default is empty string, meaning no button
  buttonLink = "#", // default button link
  backgroundImage = "https://example.com/default-image.jpg", // default background image
  defaultBackgroundImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", // default fallback image
}: HeroContentLeftProps) {
  return (
    <div className={classes.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>{title}</Title>
        <Text className={classes.description} size="xl" mt="xl">
          {description}
        </Text>

        {/* Conditionally render the button if buttonText is provided */}
        {buttonText && (
          <Button
            variant="gradient"
            size="xl"
            radius="xl"
            className={classes.control}
            component="a"
            href={buttonLink}
          >
            {buttonText}
          </Button>
        )}
      </Container>
    </div>
  );
}