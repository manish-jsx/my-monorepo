'use client'
import { Container, Text, Card } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function BlogPreviewPage() {
  const { query } = useRouter();
  const { slug } = query;

  // Example static blog preview data
  const blog = {
    title: 'Sample Blog Title',
    content: 'This is the preview of the blog content...',
  };

  return (
    <Container>
      <h1>{blog.title}</h1>
      <Card shadow="sm" padding="lg" withBorder>
        <Text>{blog.content}</Text>
      </Card>
    </Container>
  );
}


