// 'use client';

// import { AppShell, Burger, Col } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import { Navbar } from '@/components/Layout/Navbar';
// import { Header } from '@/components/Layout/Header';

// export default function HomePage() {
//   const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
//   const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

//   return (
//     <AppShell
//       header={{ height: 60 }}
//       navbar={{
//         width: 250,
//         breakpoint: 'md',
//         Collapsed: {
//           mobile: !mobileOpened,
//           desktop: !desktopOpened
//         }
//       }}
//       padding="md"
//     >
//       <AppShell.Header>
//         <Col h="100%" px="md">
//           <Burger 
//             opened={mobileOpened} 
//             onClick={toggleMobile} 
//             hiddenFrom="md" 
//           />
//           <Burger
//             opened={desktopOpened}
//             onClick={toggleDesktop}
//             visibleFrom="md"
//           />
//           <Header />
//         </Col>
//       </AppShell.Header>

//       <AppShell.Navbar>
//         <Navbar />
//       </AppShell.Navbar>

//       <AppShell.Main>
//         <div>
//           <h1>Welcome to Your Dashboard</h1>
//           <p>This is the main content area of your application.</p>
//         </div>
//       </AppShell.Main>
//     </AppShell>
//   );
// }
'use client';
import { Container, Grid, Card, Text, Progress, Button, Title, Group, Badge } from '@mantine/core';
import { IconArticle, IconFileText, IconLink, IconChartBar, IconUser } from '@tabler/icons-react';
import { useState } from 'react';

export default function DashboardPage() {
  // State for mock data
  const [totalBlogs, setTotalBlogs] = useState(12);
  const [totalPages, setTotalPages] = useState(5);
  const [totalLinks, setTotalLinks] = useState(8);
  const [activeUsers, setActiveUsers] = useState(150);
  const [monthlyVisitors, setMonthlyVisitors] = useState(10234);
  const [progress, setProgress] = useState(65);

  return (
    <Container my="lg">
      {/* Dashboard Title */}
      <Title order={2} align="center" mb="xl">
        Admin Dashboard
      </Title>

      {/* Stats Grid */}
      <Grid gutter="xl">
        {/* Total Blogs Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Group position="apart" mb="md">
              <Text>Total Blogs</Text>
              <IconArticle size={40} />
            </Group>
            <Text size="xl" weight={700} align="center">{totalBlogs}</Text>
          </Card>
        </Grid.Col>

        {/* Total Pages Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Group position="apart" mb="md">
              <Text>Total Pages</Text>
              <IconFileText size={40} />
            </Group>
            <Text size="xl" weight={700} align="center">{totalPages}</Text>
          </Card>
        </Grid.Col>

        {/* Total Links Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Group position="apart" mb="md">
              <Text>Navigation Links</Text>
              <IconLink size={40} />
            </Group>
            <Text size="xl" weight={700} align="center">{totalLinks}</Text>
          </Card>
        </Grid.Col>

        {/* Active Users Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Group position="apart" mb="md">
              <Text>Active Users</Text>
              <IconUser size={40} />
            </Group>
            <Text size="xl" weight={700} align="center">{activeUsers}</Text>
          </Card>
        </Grid.Col>

        {/* Monthly Visitors Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Group position="apart" mb="md">
              <Text>Monthly Visitors</Text>
              <IconChartBar size={40} />
            </Group>
            <Text size="xl" weight={700} align="center">{monthlyVisitors}</Text>
          </Card>
        </Grid.Col>

        {/* Progress Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Text mb="sm">Progress towards Goal</Text>
            <Progress value={progress} size="lg" color="teal" mb="xs" />
            <Text align="center" weight={700}>{progress}% Completed</Text>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Analytics Overview */}
      <Title order={3} align="center" mt="xl" mb="sm">
        Analytics Overview
      </Title>
      <Grid gutter="xl">
        {/* Website Traffic Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 6 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Text size="lg" mb="sm">Website Traffic</Text>
            <Text size="xl" weight={700} color="blue">{monthlyVisitors} Total Visitors</Text>
            <Badge color="blue" size="lg">View Details</Badge>
          </Card>
        </Grid.Col>

        {/* User Engagement Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 6 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Text size="lg" mb="sm">User Engagement</Text>
            <Text size="xl" weight={700} color="green">{activeUsers} Active Users</Text>
            <Badge color="green" size="lg">View Details</Badge>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Call to Action */}
      <Grid justify="center" mt="xl">
        <Grid.Col span={12}>
          <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} size="lg">
            Update Website Content
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}