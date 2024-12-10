

import Link from 'next/link';
import { IconLayoutBottombarFilled, IconLayoutNavbar, IconLayoutNavbarFilled, IconProps, IconPyramid } from '@tabler/icons-react';
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


// Define the PageLink type
export type PageLink = {
  link: string;
  label: string;
  icon?: React.ComponentType<IconProps>;
  links?: PageLink[];
};

const pagesLinks: PageLink[] = [
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
  { link: '/pages/contact-us', label: 'CONTACT US', icon: IconMessage }
  
  
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


        {/* Blogs with Nested Navigation */}
        <NavLink
          label="Global Components"
          leftSection={<IconNews size={16} />}
          childrenOffset={28}
          className={classes.navButton}
        >
           <Link href='/logo' passHref legacyBehavior>
            <NavLink
              component="a"
              label="Logo"
              leftSection={<IconPyramid size={16} />}
            />
          </Link>
          <Link href='/header' passHref legacyBehavior>
            <NavLink
              component="a"
              label="Header"
              leftSection={<IconLayoutNavbar size={16} />}
            />
          </Link>
          <Link href='/navbar' passHref legacyBehavior>
            <NavLink
              component="a"
              label="Navbar"
              leftSection={<IconLayoutNavbarFilled size={16} />}
            />
          </Link>
          <Link href='/footer' passHref legacyBehavior>
            <NavLink
              component="a"
              label="Footer"
              leftSection={<IconLayoutBottombarFilled size={16} />}
            />
          </Link>
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

function NavLinkWithChildren({ item }: { item: PageLink }) {
  const { link, label, icon: Icon, links } = item;

  if (links) {
    // Parent link with children
    return (
      <NavLink
        label={label}
        leftSection={Icon ? <Icon size={16} stroke={1.5} /> : null}
        childrenOffset={28}
      >
        {links.map((child :PageLink) => (
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

// import Link from 'next/link';
// import { useRouter } from 'next/router'; // Import useRouter
// import {
//   IconDashboard,
//   IconFileText,
//   IconSettings,
//   IconPlus,
//   IconEdit,
//   IconList,
//   IconHome,
//   IconAward,
//   IconUsers,
//   IconNews,
//   IconMessage,
// } from '@tabler/icons-react';
// import { Stack, Divider, Text, NavLink } from '@mantine/core';
// import classes from './Navbar.module.css';

// const pagesLinks = [
//   { link: '/pages/home', label: 'HOME', icon: IconHome },
//   {
//     link: '#1', // Consider a more descriptive identifier if possible
//     label: 'ABOUT US',
//     icon: IconUsers,
//     links: [
//       { link: '/pages/the-need', label: 'THE NEED' },
//       { link: '/pages/our-story', label: 'OUR STORY' },
//       { link: '/pages/our-initiatives', label: 'OUR INITIATIVES' },
//       { link: '/pages/success-stories', label: 'SUCCESS STORIES' },
//     ],
//   },
//   { link: '/pages/awards', label: 'AWARDS', icon: IconAward },
//   {
//     link: '#2', // Consider a more descriptive identifier if possible
//     label: 'MEDIA',
//     icon: IconNews,
//     links: [
//       { link: '/pages/news-coverage', label: 'NEWS COVERAGE' },
//       { link: '/pages/blog', label: 'BLOGS' },
//       { link: '/pages/electronic-media', label: 'ELECTRONIC MEDIA' },
//     ],
//   },
//   { link: '/pages/contact-us', label: 'CONTACT US', icon: IconMessage },
// ];

// export function Navbar() {
//   const router = useRouter(); // Get the router instance

//   return (
//     <div className={classes.navbar}>
//       <div className={classes.header}>
//         <Text fw={700} size="lg">
//           Admin Panel
//         </Text>
//       </div>
//       <Divider my="sm" />
//       <Stack gap="md" className={classes.navLinks}>
//         {/* Dashboard */}
//         <Link href="/" passHref legacyBehavior>
//           <NavLink
//             component="a"
//             label="Dashboard"
//             leftSection={<IconDashboard size={16} />}
//             className={classes.navButton}
//             active={router.pathname === '/'} // Check for active route
//             aria-current={router.pathname === '/' ? 'page' : undefined} // a11y
//           />
//         </Link>

//         {/* Blogs with Nested Navigation */}
//         <NavLink
//           label="Blogs"
//           leftSection={<IconFileText size={16} />}
//           childrenOffset={28}
//           className={classes.navButton}
//           active={router.pathname.startsWith('/blogs')} // Check for active route (parent)
//         >
//           <Link href="/blogs/create" passHref legacyBehavior>
//             <NavLink
//               component="a"
//               label="Create Blog"
//               leftSection={<IconPlus size={16} />}
//               active={router.pathname === '/blogs/create'}
//               aria-current={router.pathname === '/blogs/create' ? 'page' : undefined}
//             />
//           </Link>
//           <Link href="/blogs/drafts" passHref legacyBehavior>
//             <NavLink
//               component="a"
//               label="Drafts"
//               leftSection={<IconEdit size={16} />}
//               active={router.pathname === '/blogs/drafts'}
//               aria-current={router.pathname === '/blogs/drafts' ? 'page' : undefined}
//             />
//           </Link>
//           <Link href="/blogs" passHref legacyBehavior>
//             <NavLink
//               component="a"
//               label="All Blogs"
//               leftSection={<IconList size={16} />}
//               active={router.pathname === '/blogs'}
//               aria-current={router.pathname === '/blogs' ? 'page' : undefined}
//             />
//           </Link>
//         </NavLink>

//         {/* Pages with Nested Navigation */}
//         <NavLink
//           label="Pages"
//           leftSection={<IconFileText size={16} />}
//           childrenOffset={28}
//           className={classes.navButton}
//           active={pagesLinks.some(
//             (item) =>
//               router.pathname === item.link ||
//               item.links?.some((child) => router.pathname === child.link)
//           )}
//         >
//           {pagesLinks.map((item) => (
//             <NavLinkWithChildren key={item.link} item={item} router={router} />
//           ))}
//         </NavLink>

//         {/* Settings */}
//         <Link href="/settings" passHref legacyBehavior>
//           <NavLink
//             component="a"
//             label="Settings"
//             leftSection={<IconSettings size={16} />}
//             className={classes.navButton}
//             active={router.pathname === '/settings'}
//             aria-current={router.pathname === '/settings' ? 'page' : undefined}
//           />
//         </Link>
//       </Stack>
//     </div>
//   );
// }

// function NavLinkWithChildren({ item, router }) {
//   const { link, label, icon: Icon, links } = item;

//   if (links) {
//     // Parent link with children
//     return (
//       <NavLink
//         label={label}
//         leftSection={Icon ? <Icon size={16} stroke={1.5} /> : null}
//         childrenOffset={28}
//         active={links.some((child) => router.pathname === child.link)}
//       >
//         {links.map((child) => (
//           <Link href={child.link} key={child.link} passHref legacyBehavior>
//             <NavLink
//               component="a"
//               label={child.label}
//               active={router.pathname === child.link}
//               aria-current={router.pathname === child.link ? 'page' : undefined}
//             />
//           </Link>
//         ))}
//       </NavLink>
//     );
//   }

//   // Standalone link
//   return (
//     <Link href={link} passHref legacyBehavior>
//       <NavLink
//         component="a"
//         label={label}
//         leftSection={Icon ? <Icon size={16} stroke={1.5} /> : null}
//         active={router.pathname === link}
//         aria-current={router.pathname === link ? 'page' : undefined}
//       />
//     </Link>
//   );
// }