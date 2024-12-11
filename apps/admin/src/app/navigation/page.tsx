"use client";
import { Button, Container, Group, TextInput, Title } from '@mantine/core';

export default function NavigationPage() {
  const handleSave = () => {
    // Save navigation logic
  };

  return (
    <Container>
      <Title order={2} mb="md">
        Manage Navigation
      </Title>
      <TextInput label="Link Label" placeholder="Enter label" required mb="sm" />
      <TextInput label="Link URL" placeholder="Enter URL" required mb="lg" />
      <Group justify='flex-end'>
        <Button onClick={handleSave}>Save</Button>
      </Group>
    </Container>
  );
}