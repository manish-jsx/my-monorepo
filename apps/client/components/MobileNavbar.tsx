import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer, Group, Button, Collapse, CloseButton } from '@mantine/core';
import { IconX, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

const links = [
  { link: '/', label: 'Home' },
  {
    link: '#1',
    label: 'About Us',
    links: [
      { link: '/the-need', label: 'The Need' },
      { link: '/our-story', label: 'Our Story' },
      { link: '/our-initiatives', label: 'Our Initiatives' },
      { link: '/success-stories', label: 'Success Stories' },
    ],
  },
  { link: '/services', label: 'Services' },
  {
    link: '#2',
    label: 'Media',
    links: [
      { link: '/news-coverage', label: 'News Coverage' },
      { link: '/blog', label: 'Blogs' },
      { link: '/electronic-media', label: 'Electronic Media' },
    ],
  },
  { link: '/contact', label: 'Contact Us' },
];

export function MobileNavbar() {
  const [opened, { open, close }] = useDisclosure(false); // Control Drawer
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null); // Control submenu open state
  const isMobile = useMediaQuery('(max-width: 768px)'); // Check if it's a mobile screen

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label); // Toggle submenu visibility
  };

  if (!isMobile) return null; // Only render on mobile screens

  return (
    <div>
      {/* Burger Button for Mobile */}
      <Burger
        opened={opened}
        onClick={() => (opened ? close() : open())} // Toggle drawer open/close
        size="sm"
        style={{ position: 'absolute', top: 20, left: 20, zIndex: 1000 }}
      />

      {/* Drawer for Mobile Navbar */}
      <Drawer
        opened={opened}
        onClose={close} // Close drawer when clicking outside
        position="left"
        size="100%"
        padding="md"
        title="Navigation"
      >
        {/* Close button inside the Drawer */}
        <CloseButton onClick={close} style={{ position: 'absolute', top: 20, right: 20 }} />

        <Group direction="column" spacing="xs" style={{ width: '100%' }}>
          {links.map((link) => (
            <div key={link.label}>
              {/* Main link */}
              <Button
                variant="light"
                color="blue"
                fullWidth
                onClick={() => {
                  if (link.links) {
                    toggleSubmenu(link.label); // Toggle submenu if it exists
                  } else {
                    close(); // Close drawer if no submenu
                  }
                }}
                rightIcon={link.links ? (openSubmenu === link.label ? <IconChevronUp /> : <IconChevronDown />) : null} // Show arrow for submenu
                style={{ textAlign: 'left' }}
              >
                {link.label}
              </Button>

              {/* Collapsible Submenu */}
              {link.links && (
                <Collapse in={openSubmenu === link.label}>
                  <Group direction="column" spacing="xs" ml={20}>
                    {link.links.map((subLink) => (
                      <Button
                        key={subLink.link}
                        variant="light"
                        color="blue"
                        fullWidth
                        onClick={() => {
                          close(); // Close drawer after selecting a sublink
                        }}
                        style={{ textAlign: 'left' }}
                      >
                        {subLink.label}
                      </Button>
                    ))}
                  </Group>
                </Collapse>
              )}
            </div>
          ))}
        </Group>
      </Drawer>
    </div>
  );
}