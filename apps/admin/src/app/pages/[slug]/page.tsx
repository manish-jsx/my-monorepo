"use client";

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, Grid } from '@mantine/core';
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Pages_slug = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug'); // Get 'slug' from the URL query parameter
  console.log(slug)
  // Remove "/pages" from the slug
  const formattedSlug = slug ? slug.replace('/pages', '') : '';
  console.log(formattedSlug)
  const [editorContent, setEditorContent] = useState('');

  // Initialize TipTap editor
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start editing...</p>',
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });

  // Prepare the iframe URL for the preview (based on the content or slug)
  const iframeUrl = `http://localhost:3001/${formattedSlug}?content=${encodeURIComponent(
    editorContent
  )}`;

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Grid style={{ height: '100%' }}>
        <Grid.Col span={6} style={{ padding: '20px', height: '100vh' }}>
          <h2>WYSIWYG Editor</h2>
          <RichTextEditor editor={editor} style={{ height: '100%', width: '100%' }} />
        </Grid.Col>
        <Grid.Col span={6} style={{ padding: '20px' }}>
          <h2>Preview</h2>
          <iframe
            src={iframeUrl}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '8px',
            }}
            title="Page Preview"
          ></iframe>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Pages_slug;