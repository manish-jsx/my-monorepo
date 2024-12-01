"use client";

import { Title } from '@mantine/core';
import { IconHome, IconUsers, IconAward, IconNews, IconMessage } from '@tabler/icons-react';
import Link from 'next/link';

const pagesLinks = [
  { link: '/pages/home', label: 'HOME', icon: IconHome },
  {
    label: 'ABOUT US',
    icon: IconUsers,
    children: [
      { link: '/pages/the-need', label: 'THE NEED' },
      { link: '/pages/our-story', label: 'OUR STORY' },
      { link: '/pages/our-initiatives', label: 'OUR INITIATIVES' },
      { link: '/pages/success-stories', label: 'SUCCESS STORIES' },
    ],
  },
  { link: '/pages/awards', label: 'AWARDS', icon: IconAward },
  {
    label: 'MEDIA',
    icon: IconNews,
    children: [
      { link: '/pages/news-coverage', label: 'NEWS COVERAGE' },
      { link: '/pages/blog', label: 'BLOGS' },
      { link: '/pages/electronic-media', label: 'ELECTRONIC MEDIA' },
    ],
  },
  { link: '/pages/contact-us', label: 'CONTACT US', icon: IconMessage },
];

function TreeItem({ item }: { item: any }) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <Title
        order={2}
        sx={{
          fontWeight: 500,
          lineHeight: 1.6,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'color 0.3s ease, transform 0.3s ease',
          '&:hover': {
            color: '#1a73e8',
            transform: 'scale(1.05)',
          },
        }}
      >
        {item.icon && <item.icon size={18} />}
        {item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          item.label
        )}
      </Title>
      {item.children && (
        <div style={{ marginLeft: '20px' }}>
          {item.children.map((child: any, index: number) => (
            <TreeItem key={child.link || `${child.label}-${index}`} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
      {pagesLinks.map((item, index) => (
        <TreeItem key={item.link || `${item.label}-${index}`} item={item} />
      ))}
    </div>
  );
}