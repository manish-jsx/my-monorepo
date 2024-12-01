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
import { Button, Container, TextInput, Select, TagsInput, Group, Grid,Stack, Paper, Textarea, Fieldset } from '@mantine/core';

const initialContent = `
  <h2 style="text-align: center;">Create Your Blog Post</h2>
  <p>Start writing your content here...</p>
`;

function BlogCreatePage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [slug, setSlug] = useState('');
  const [author, setAuthor] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [ogTitle, setOgTitle] = useState('');
  const [ogDescription, setOgDescription] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [content, setContent] = useState(initialContent);

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
      // Capture the updated content in real-time
      setContent(editor.getHTML());
    },
  });

  const handleSave = () => {
    console.log('Saved blog post:', {
      title,
      category,
      tags,
      slug,
      author,
      metaDescription,
      ogTitle,
      ogDescription,
      content,
    });
    // Implement save logic (e.g., save to a server or local state)
  };

  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0, maxWidth: '80vw' }}>
      <h1>Create Blog Post</h1>

      <Grid gutter="lg" style={{ width: '80vw' }}>
        {/* Left Grid.Column: Blog Form and Editor */}
        <Grid.Col span={previewMode ? 6 : 12}>
          
        <Fieldset legend="Blog Information">
        <Stack spacing="md">
          {/* Title */}
          <TextInput
            label="Blog Title"
            placeholder="Enter the title of your blog"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
     
          />

          {/* Slug */}
          <TextInput
            label="Slug"
            placeholder="Enter a slug for the blog"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
        
          />

          {/* Category */}
          <TextInput
            label="Category"
            placeholder="Enter a category for your blog"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
      
          />

          {/* Author */}
          <TextInput
            label="Author"
            placeholder="Enter the author's name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        
          />

          {/* Content */}
          <TextInput
            label="Content"
            placeholder="Write your content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
           
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

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.H1 />
                  <RichTextEditor.H2 />
                  <RichTextEditor.H3 />
                  <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Blockquote />
                  <RichTextEditor.Hr />
                  <RichTextEditor.BulletList />
                  <RichTextEditor.OrderedList />
                  <RichTextEditor.Subscript />
                  <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Link />
                  <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.AlignLeft />
                  <RichTextEditor.AlignCenter />
                  <RichTextEditor.AlignJustify />
                  <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Undo />
                  <RichTextEditor.Redo />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.Toolbar>

              <RichTextEditor.Content />
            </RichTextEditor>
          </div>

              {/* Save Button */}
              <Button onClick={handleSave}>Save Post</Button>
        </Stack>
      </Fieldset>
        </Grid.Col>

        {/* Right Grid.Column: Preview Section */}
        {previewMode && (
          <Grid.Col span={6}>
            <Paper padding="lg" shadow="xs" style={{ height: '100%' }}>
              <h2>{title || 'Blog Title'}</h2>
              <p><strong>Category:</strong> {category}</p>
              <p><strong>Author:</strong> {author}</p>
              <p><strong>Tags:</strong> {tags.join(', ')}</p>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <p><strong>Meta Description:</strong> {metaDescription}</p>
              <p><strong>Open Graph Title:</strong> {ogTitle}</p>
              <p><strong>Open Graph Description:</strong> {ogDescription}</p>
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