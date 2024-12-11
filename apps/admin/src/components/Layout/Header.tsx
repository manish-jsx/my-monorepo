// 'use client';

// import { 
//   Group, 
//   Text, 
//   Avatar, 
//   Menu, 
//   ActionIcon, 
//   useMantineColorScheme 
// } from '@mantine/core';
// import { 
//   IconLogout, 
//   IconUser, 
//   IconSettings,
//   IconMoonStars,
//   IconSun 
// } from '@tabler/icons-react';
// import Link from 'next/link';
// import { MantineLogo } from '../Logo';

// export function Header() {
//   const { colorScheme, toggleColorScheme } = useMantineColorScheme();

//   return (
//     <Group h="100%" px="md" justify="space-between" align="center">
//       <Group>
//         <MantineLogo size={30} />
//         <Text size="xl" fw={700}>
//           Admin Dashboard
//         </Text>
//       </Group>

//       <Group>
//         {/* Color Scheme Toggle */}
//         <ActionIcon
//           onClick={() => toggleColorScheme()}
//           variant="default"
//           size="lg"
//         >
//           {colorScheme === 'dark' ? (
//             <IconSun size={20} stroke={1.5} />
//           ) : (
//             <IconMoonStars size={20} stroke={1.5} />
//           )}
//         </ActionIcon>

//         {/* User Menu */}
//         <Menu shadow="md" width={200}>
//           <Menu.Target>
//             <Avatar 
//               src="/path/to/avatar.jpg" 
//               alt="User Avatar" 
//               style={{ cursor: 'pointer' }}
//             />
//           </Menu.Target>

//           <Menu.Dropdown>
//             <Menu.Label>Account</Menu.Label>
//             <Menu.Item 
//               leftSection={<IconUser size={14} />}
//               component={Link}
//               href="/profile"
//             >
//               Profile
//             </Menu.Item>
//             <Menu.Item 
//               leftSection={<IconSettings size={14} />}
//               component={Link}
//               href="/account-settings"
//             >
//               Account Settings
//             </Menu.Item>
//             <Menu.Divider />
//             <Menu.Item
//               color="red"
//               leftSection={<IconLogout size={14} />}
//             >
//               Logout
//             </Menu.Item>
//           </Menu.Dropdown>
//         </Menu>
//       </Group>
//     </Group>
//   );
// }

'use client';

import { 
  Group, 
  Text, 
  Avatar, 
  Menu,

} from '@mantine/core';
import { 
  IconLogout, 
  IconUser, 
  IconSettings
} from '@tabler/icons-react';
import Link from 'next/link';
import { MantineLogo } from '@/components/Logo';
import { ActionToggle } from '@/components/ActionToggle';
import { useRouter } from 'next/navigation';


export function Header() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; HttpOnly; SameSite=Strict'; //Remove the authToken cookie
    router.push('/auth/login'); // Redirect to login
  };

  return (
    <Group h="100%" px="md" justify="space-between" align="center">
      <Group>
        <MantineLogo size={30} />
        <Text size="xl" fw={700}>
         Ragiji Foundation
        </Text>
      </Group>

      <Group justify="space-between">
        {/* Color Scheme Toggle */}
        <ActionToggle />

        {/* User Menu */}
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Avatar 
              src="/path/to/avatar.jpg" 
              alt="User Avatar" 
              style={{ cursor: 'pointer' }}
            />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item leftSection={<IconUser size={14} />} component={Link} href="/profile">
              Profile
            </Menu.Item>
            <Menu.Item leftSection={<IconSettings size={14} />} component={Link} href="/account-settings">
              Account Settings
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item color="red" leftSection={<IconLogout size={14} />} onClick={handleLogout}>
              Logout
            </Menu.Item>
          </Menu.Dropdown>

        </Menu>
      </Group>
    </Group>
  );
}