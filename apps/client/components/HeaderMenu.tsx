// import { IconChevronDown, IconSearch } from '@tabler/icons-react';
// import { Autocomplete, Burger, Group, Menu, Center } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
// import classes from './HeaderSearch.module.css';

// const links = [
//   { link: '/', label: 'HOME' },
//   {
//     link: '#1',
//     label: 'ABOUT US',
//     links: [
//       { link: '/the-need', label: 'THE NEED' },
//       { link: '/our-story', label: 'OUR STORY' },
//       { link: '/our-initiatives', label: 'OUR INITIATIVES' },
//       { link: '/success-stories', label: 'SUCCESS STORIES' },
//     ],
//   },
//   { link: '/awards', label: 'AWARDS' },
//   {
//     link: '#2',
//     label: 'MEDIA',
//     links: [
//       { link: '/news-coverage', label: 'NEWS COVERAGE' },
//       { link: '/blog', label: 'BLOGS' },
//       { link: '/electronic-media', label: 'ELECTRONIC MEDIA' },
//     ],
//   },
//   { link: '/contact-us', label: 'CONTACT US' },
// ];

// export function HeaderMenu() {
//   const [opened, { toggle }] = useDisclosure(false);

//   const navItems = links.map((link) => {
//     if (link.links) {
//       // Dropdown Menu for links with sub-items
//       const menuItems = link.links.map((item) => (
//         <Menu.Item key={item.link}>
//           <a href={item.link} className={classes.dropdownLink}>
//             {item.label}
//           </a>
//         </Menu.Item>
//       ));

//       return (
//         <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
//           <Menu.Target>
//             <a href={link.link} className={classes.link}>
//               <Center>
//                 <span>{link.label}</span>
//                 <IconChevronDown size={14} stroke={1.5} />
//               </Center>
//             </a>
//           </Menu.Target>
//           <Menu.Dropdown>{menuItems}</Menu.Dropdown>
//         </Menu>
//       );
//     }

//     // Simple link for items without sub-links
//     return (
//       <a key={link.label} href={link.link} className={classes.link}>
//         {link.label}
//       </a>
//     );
//   });

//   return (
//     <header className={classes.header}>
//       <div className={classes.inner}>
//         {/* Logo and Burger Menu */}
//         <Group>
//           <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
//           <MantineLogo size={28} />
//         </Group>

//         {/* Navigation Links and Search */}
//         <Group>
//           <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
//             {navItems}
//           </Group>
//           <Autocomplete
//             className={classes.search}
//             placeholder="Search"
//             leftSection={<IconSearch size={16} stroke={1.5} />}
//             data={[
//               'The Need',
//               'Our Story',
//               'Our Initiatives',
//               'Success Stories',
//               'News Coverage',
//               'Blogs',
//               'Electronic Media',
//               'Awards',
//             ]}
//             visibleFrom="xs"
//           />
//         </Group>
//       </div>
//     </header>
//   );
// }

import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import { Autocomplete, Burger, Group, Menu, Center, Drawer,Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSearch.module.css';

const links = [
  { link: '/', label: 'HOME' },
  {
    link: '#1',
    label: 'ABOUT US',
    links: [
      { link: '/the-need', label: 'THE NEED' },
      { link: '/our-story', label: 'OUR STORY' },
      { link: '/our-initiatives', label: 'OUR INITIATIVES' },
      { link: '/success-stories', label: 'SUCCESS STORIES' },
    ],
  },
  { link: '/awards', label: 'AWARDS' },
  {
    link: '#2',
    label: 'MEDIA',
    links: [
      { link: '/news-coverage', label: 'NEWS COVERAGE' },
      { link: '/blog', label: 'BLOGS' },
      { link: '/electronic-media', label: 'ELECTRONIC MEDIA' },
    ],
  },
  { link: '/contact-us', label: 'CONTACT US' },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const [drawerOpened, { open, close }] = useDisclosure(false); // For Drawer on mobile

  const navItems = links.map((link) => {
    if (link.links) {
      // Dropdown Menu for links with sub-items
      const menuItems = link.links.map((item) => (
        <Menu.Item key={item.link}>
          <a href={item.link} className={classes.dropdownLink}>
            {item.label}
          </a>
        </Menu.Item>
      ));

      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a href={link.link} className={classes.link}>
              <Center>
                <span>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    // Simple link for items without sub-links
    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        {/* Logo and Burger Menu */}
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <MantineLogo size={28} />
        </Group>

        {/* Desktop Navigation Links */}
        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {navItems}
          </Group>

          {/* Search Input */}
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            data={[
              'The Need',
              'Our Story',
              'Our Initiatives',
              'Success Stories',
              'News Coverage',
              'Blogs',
              'Electronic Media',
              'Awards',
            ]}
            visibleFrom="xs"
          />
        </Group>
      </div>

      {/* Mobile Navigation Drawer */}
      <Drawer
  opened={drawerOpened}
  onClose={close}
  position="left"
  size="100%"
  padding="md"
  title="Navigation"
>
  <Stack spacing="xs">
    {links.map((link) => (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(e) => {
          e.preventDefault();
          close();
        }}
      >
        {link.label}
      </a>
    ))}
  </Stack>
</Drawer>

      {/* Mobile Drawer Toggle */}
     
    </header>
  );
}