
// "use client";

// import { Title, Group, Container, rem, Stack, ActionIcon, Text } from '@mantine/core';
// import { IconHome, IconUsers, IconAward, IconNews, IconMessage } from '@tabler/icons-react';
// import Link from 'next/link';
// import React from 'react';

// interface NavigationLink {
//   link?: string;
//   label: string;
//   icon?: React.ComponentType;
//   children?: NavigationLink[];
// }

// const pagesLinks: NavigationLink[] = [
//   { link: '/pages/home', label: 'HOME', icon: IconHome },
//   {
//     label: 'ABOUT US',
//     icon: IconUsers,
//     children: [
//       { link: '/pages/the-need', label: 'THE NEED' },
//       { link: '/pages/our-story', label: 'OUR STORY' },
//       { link: '/pages/our-initiatives', label: 'OUR INITIATIVES' },
//       { link: '/pages/success-stories', label: 'SUCCESS STORIES' },
//     ],
//   },
//   { link: '/pages/awards', label: 'AWARDS', icon: IconAward },
//   {
//     label: 'MEDIA',
//     icon: IconNews,
//     children: [
//       { link: '/pages/news-coverage', label: 'NEWS COVERAGE' },
//       { link: '/pages/blog', label: 'BLOGS' },
//       { link: '/pages/electronic-media', label: 'ELECTRONIC MEDIA' },
//     ],
//   },
//   { link: '/pages/contact-us', label: 'CONTACT US', icon: IconMessage },
// ];

// const TreeItem = ({ item, level = 0 }: { item: NavigationLink; level?: number }) => {
//   return (
//     <div style={{ marginBottom: rem(0.5), marginLeft: level * rem(1) }}>
//       <ActionIcon
//         onClick={() => item.link && (window.location.href = item.link)}
//         size="lg"
//         style={{justifyContent: 'flex-start'}}
//       >
//         {item.icon && <item.icon size={18} />}
//         <Text size="sm">{item.label}</Text>
//       </ActionIcon>
//       {item.children && (
//         <div>
//           {item.children.map((child) => (
//             <TreeItem key={child.label} item={child} level={level + 1} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const Page = () => {
//   return (
//     <Container style={{ maxWidth: rem(600), margin: '0 auto', padding: rem(2) }}>
//       <Stack>
//         {pagesLinks.map((item) => (
//           <TreeItem key={item.label} item={item} />
//         ))}
//       </Stack>
//     </Container>
//   );
// };

// export default Page;


import React from 'react'

export default function Developing() {
  return (
    <div>Developing..</div>
  )
}
