'use client';

import { useCallback } from 'react';
import { ActionIcon, useComputedColorScheme, useDirection } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useColorScheme } from '@mantine/hooks';

export function ColorSchemeToggle() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const { dir } = useDirection();

  const toggleColorScheme = useCallback(() => {
    const newScheme = computedColorScheme === 'dark' ? 'light' : 'dark';
    
    // Set cookie for persistent color scheme
    document.cookie = `mantine-color-scheme=${newScheme}; path=/; max-age=31536000; SameSite=Strict`;
    
    // Force page reload to ensure full color scheme application
    window.location.reload();
  }, [computedColorScheme, dir]);

  return (
    <ActionIcon
      onClick={toggleColorScheme}
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === 'dark' ? (
        <IconSun size={20} stroke={1.5} />
      ) : (
        <IconMoonStars size={20} stroke={1.5} />
      )}
    </ActionIcon>
  );
}