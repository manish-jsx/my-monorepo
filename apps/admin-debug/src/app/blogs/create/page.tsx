"use client";

import { useState } from 'react';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { Button, Container, TextInput, Grid,Stack, Paper, Textarea, Fieldset } from '@mantine/core';

// Define types for your data
interface BlogPost {
  title: string;
  category: string;
  tags: string[];
  slug: string;
  author: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  content: string;
}

const initialContent = `
  <h2 style="text-align: center;">Create Your Blog Post</h2>
  <p>Start writing your content here...</p>
`;

function BlogCreatePage() {
  const [blogPost, setBlogPost] = useState<BlogPost>({
    title: '',
    category: '',
    tags: [],
    slug: '',
    author: '',
    metaDescription: '',
    ogTitle: '',
    ogDescription: '',
    content: initialContent,
  });
  const [previewMode, setPreviewMode] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      setBlogPost((prev) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  const handleSave = () => {
    console.log('Saved blog post:', blogPost);
    // Implement save logic here
  };

  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0, maxWidth: '80vw' }}>
      <h1>Create Blog Post</h1>

      <Grid gutter="lg" style={{ width: '80vw' }}>
        {/* Left Grid.Column: Blog Form and Editor */}
        <Grid.Col span={previewMode ? 6 : 12}>
          <Fieldset legend="Blog Information">
            <Stack gap="md">
              {/* Title */}
              <TextInput
                label="Blog Title"
                placeholder="Enter the title of your blog"
                value={blogPost.title}
                onChange={(e) => setBlogPost((prev) => ({ ...prev, title: e.target.value }))}
              />

              {/* Slug */}
              <TextInput
                label="Slug"
                placeholder="Enter a slug for the blog"
                value={blogPost.slug}
                onChange={(e) => setBlogPost((prev) => ({ ...prev, slug: e.target.value }))}
              />

              {/* Category */}
              <TextInput
                label="Category"
                placeholder="Enter a category for your blog"
                value={blogPost.category}
                onChange={(e) => setBlogPost((prev) => ({ ...prev, category: e.target.value }))}
              />

              {/* Author */}
              <TextInput
                label="Author"
                placeholder="Enter the author's name"
                value={blogPost.author}
                onChange={(e) => setBlogPost((prev) => ({ ...prev, author: e.target.value }))}
              />


              {/* Rich Text Editor for content */}
              <div style={{ marginTop: '30px' }}>
              <RichTextEditor editor={editor}>
                  <RichTextEditor.Toolbar sticky stickyOffset={60}>
                    <RichTextEditor.ControlsGroup>
                      <RichTextEditor.Bold />
                      <RichTextEditor.Italic />
                      <RichTextEditor.Underline />
                      <RichTextEditor.Strikethrough />
                      <RichTextEditor.ClearFormatting />
                      <RichTextEditor.Highlight />
                      <RichTextEditor.Code />
                    </RichTextEditor.ControlsGroup>
                  {/* Toolbar contents */}
                </RichTextEditor.Toolbar>
                <RichTextEditor.Content /> {/* Content needs to be within RichTextEditor */}
                </RichTextEditor>
              </div>

              {/* Meta Description */}
              <Textarea
                label="Meta Description"
                placeholder="Enter meta description"
                value={blogPost.metaDescription}
                onChange={(e) => setBlogPost((prev) => ({ ...prev, metaDescription: e.target.value }))}
              />

              {/* Open Graph Title */}
              <TextInput
                label="Open Graph Title"
                placeholder="Enter Open Graph title"
                value={blogPost.ogTitle}
                onChange={(e) => setBlogPost((prev) => ({ ...prev, ogTitle: e.target.value }))}
              />

              {/* Open Graph Description */}
              <Textarea
                label="Open Graph Description"
                placeholder="Enter Open Graph description"
                value={blogPost.ogDescription}
                onChange={(e) => setBlogPost((prev) => ({ ...prev, ogDescription: e.target.value }))}
              />
              {/* Save Button */}
              <Button onClick={handleSave}>Save Post</Button>
            </Stack>
          </Fieldset>
        </Grid.Col>

        {/* Right Grid.Column: Preview Section */}
        {previewMode && (
          <Grid.Col span={6}>
            <Paper shadow="xs" style={{ height: '100%', padding: 'lg' }}>
              <h2>{blogPost.title || 'Blog Title'}</h2>
              <p><strong>Category:</strong> {blogPost.category}</p>
              <p><strong>Author:</strong> {blogPost.author}</p>
              <p><strong>Tags:</strong> {blogPost.tags.join(', ')}</p>
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              <p><strong>Meta Description:</strong> {blogPost.metaDescription}</p>
              <p><strong>Open Graph Title:</strong> {blogPost.ogTitle}</p>
              <p><strong>Open Graph Description:</strong> {blogPost.ogDescription}</p>
            </Paper>
          </Grid.Col>
        )}
      </Grid>

      <Button onClick={handleSave} mt="md">Save Post</Button>
      <Button onClick={() => setPreviewMode(!previewMode)} mt="md" style={{ marginLeft: '10px' }}>
        {previewMode ? 'Edit' : 'Preview'}
      </Button>
    </Container>
  );
}

export default BlogCreatePage;