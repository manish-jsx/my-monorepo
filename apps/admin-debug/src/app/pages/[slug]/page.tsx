

// "use client";
// import React, { useState, useMemo} from 'react';
// import { Grid, Container, Title, Text} from '@mantine/core';
// import { RichTextEditor, Link } from '@mantine/tiptap';
// import { useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import Placeholder from '@tiptap/extension-placeholder';
// import '@mantine/tiptap/styles.css';

// export default async function Page({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   const formattedSlug = slug.replace('/pages', '').replace(/^\//, '');
//   const initialContent = '<p>Start editing...</p>';
//   const previewBaseUrl = 'http://localhost:3000/';

//   return <PageContent slug={formattedSlug} initialContent={initialContent} previewBaseUrl={previewBaseUrl} />;
// }

// function PageContent({
//   slug,
//   initialContent = '<p>Start editing...</p>',
//   previewBaseUrl = 'http://localhost:3000/',
// }: {
//   slug: string;
//   initialContent?: string;
//   previewBaseUrl?: string;
// }) {
//   const [editorContent, setEditorContent] = useState(initialContent);

//   const editor = useEditor({
//     extensions: [
//       StarterKit.configure({
//         heading: {
//           levels: [1, 2, 3],
//         },
//       }),
//       Placeholder.configure({
//         placeholder: 'Start typing your content...',
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//       }),
//     ],
//     content: initialContent,
//     onUpdate: ({ editor }) => {
//       setEditorContent(editor.getHTML());
//     },
//   });

//   const iframeUrl = useMemo(() => {
//     try {
//       const url = new URL(`${previewBaseUrl}/${slug}`);
//       return url.toString();
//     } catch (error) {
//       console.error('Invalid URL construction:', error);
//       return '';
//     }
//   }, [previewBaseUrl, slug, editorContent]);

//   if (!editor) {
//     return null;
//   }

//   return (
//     <Container fluid  h={'100vh'} bg="var(--mantine-color-blue-light)">
//       <Grid justify="space-between" align="stretch" style={{ height: '100vh' }}>
//         <Grid.Col span={6} h={'100vh'}>
//           <Title order={3} mb="md">WYSIWYG Editor</Title>
//           <RichTextEditor editor={editor}>
//             <RichTextEditor.Toolbar sticky stickyOffset={60}>
//               <RichTextEditor.ControlsGroup>
//                 <RichTextEditor.Bold />
//                 <RichTextEditor.Italic />
//                 <RichTextEditor.Underline />
//                 <RichTextEditor.Strikethrough />
//                 <RichTextEditor.ClearFormatting />
//               </RichTextEditor.ControlsGroup>
//               <RichTextEditor.ControlsGroup>
//                 <RichTextEditor.H1 />
//                 <RichTextEditor.H2 />
//                 <RichTextEditor.H3 />
//               </RichTextEditor.ControlsGroup>
//               <RichTextEditor.ControlsGroup>
//                 <RichTextEditor.Link />
//                 <RichTextEditor.Unlink />
//               </RichTextEditor.ControlsGroup>
//             </RichTextEditor.Toolbar>
//             <RichTextEditor.Content />
//           </RichTextEditor>
//         </Grid.Col>
//         <Grid.Col span={6}>
//           <Title order={3} mb="md">Preview</Title>
//           {iframeUrl ? (
//             <iframe src={iframeUrl} title="Page Preview" sandbox="allow-scripts allow-same-origin" style={{width: '100%', height: '100%', border: 'none'}} />
//           ) : (
//             <Text color="red">Unable to generate preview URL</Text>
//           )}
//         </Grid.Col>
//       </Grid>
//     </Container>
//   );
// }

import React from 'react'

function UnderDeveleopment() {
  return (
    <div>Under Develeopment</div>
  )
}

export default UnderDeveleopment