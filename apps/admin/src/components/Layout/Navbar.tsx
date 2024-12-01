

import Link from 'next/link';
import {
  IconDashboard,
  IconFileText,
  IconSettings,
  IconPlus,
  IconEdit,
  IconList,
  IconHome,
  IconAward,
  IconUsers,
  IconNews,
  IconMessage,
} from '@tabler/icons-react';
import { Stack, Divider, Text } from '@mantine/core';
import { NavLink } from '@mantine/core';
import classes from './Navbar.module.css';

const pagesLinks = [
  { link: '/pages/home', label: 'HOME', icon: IconHome },
  {
    link: '#1',
    label: 'ABOUT US',
    icon: IconUsers,
    links: [
      { link: '/pages/the-need', label: 'THE NEED' },
      { link: '/pages/our-story', label: 'OUR STORY' },
      { link: '/pages/our-initiatives', label: 'OUR INITIATIVES' },
      { link: '/pages/success-stories', label: 'SUCCESS STORIES' },
    ],
  },
  { link: '/pages/awards', label: 'AWARDS', icon: IconAward },
  {
    link: '#2',
    label: 'MEDIA',
    icon: IconNews,
    links: [
      { link: '/pages/news-coverage', label: 'NEWS COVERAGE' },
      { link: '/pages/blog', label: 'BLOGS' },
      { link: '/pages/electronic-media', label: 'ELECTRONIC MEDIA' },
    ],
  },
  { link: '/pages/contact-us', label: 'CONTACT US', icon: IconMessage },
];

export function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.header}>
        <Text fw={700} size="lg">
          Admin Panel
        </Text>
      </div>
      <Divider my="sm" />
      <Stack gap="md" className={classes.navLinks}>
        {/* Dashboard */}
        <Link href="/" passHref legacyBehavior>
          <NavLink
            component="a"
            label="Dashboard"
            leftSection={<IconDashboard size={16} />}
            className={classes.navButton}
          />
        </Link>

        {/* Blogs with Nested Navigation */}
        <NavLink
          label="Blogs"
          leftSection={<IconFileText size={16} />}
          childrenOffset={28}
          className={classes.navButton}
        >
          <Link href="/blogs/create" passHref legacyBehavior>
            <NavLink
              component="a"
              label="Create Blog"
              leftSection={<IconPlus size={16} />}
            />
          </Link>
          <Link href="/blogs/drafts" passHref legacyBehavior>
            <NavLink
              component="a"
              label="Drafts"
              leftSection={<IconEdit size={16} />}
            />
          </Link>
          <Link href="/blogs" passHref legacyBehavior>
            <NavLink
              component="a"
              label="All Blogs"
              leftSection={<IconList size={16} />}
            />
          </Link>
        </NavLink>

        {/* Pages with Nested Navigation */}
        <NavLink
          label="Pages"
          leftSection={<IconFileText size={16} />}
          childrenOffset={28}
          className={classes.navButton}
        >
          {pagesLinks.map((item) => (
            <NavLinkWithChildren key={item.link} item={item} />
          ))}
        </NavLink>

        {/* Settings */}
        <Link href="/settings" passHref legacyBehavior>
          <NavLink
            component="a"
            label="Settings"
            leftSection={<IconSettings size={16} />}
            className={classes.navButton}
          />
        </Link>
      </Stack>
    </div>
  );
}

function NavLinkWithChildren({ item }) {
  const { link, label, icon: Icon, links } = item;

  if (links) {
    // Parent link with children
    return (
      <NavLink
        label={label}
        leftSection={Icon ? <Icon size={16} stroke={1.5} /> : null}
        childrenOffset={28}
      >
        {links.map((child) => (
          <Link href={child.link} key={child.link} passHref legacyBehavior>
            <NavLink component="a" label={child.label} />
          </Link>
        ))}
      </NavLink>
    );
  }

  // Standalone link
  return (
    <Link href={link} passHref legacyBehavior>
      <NavLink
        component="a"
        label={label}
        leftSection={Icon ? <Icon size={16} stroke={1.5} /> : null}
      />
    </Link>
  );
}