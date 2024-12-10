'use client';
import { Container, Text, Card } from '@mantine/core';
import { useParams } from 'next/navigation'; // Import useParams

// Define the type for your blog data
interface Blog {
  title: string;
  content: string;
}

export default function BlogPreviewPage() {
  // Use useParams to access the slug parameter.
  const { slug } = useParams();

  //Check if slug is defined
  if (!slug) {
    return (
      <Container>
        <Text>No blog found.</Text>
      </Container>
    );
  }

  // Example static blog preview data with types.  Replace this with fetching actual blog data.
  const blog: Blog = {
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