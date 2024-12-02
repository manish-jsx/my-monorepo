'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import classes from './ActionToggle.module.css';
import { useEffect, useState } from 'react';

export function ActionToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is fully mounted before rendering icons
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering until hydration is complete
  }

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
        className={classes.actionIcon}
      >
        {colorScheme === 'light' ? (
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        ) : (
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}