"use client";

import { Container, Grid, Card, Text, Progress, Button, Title, Group, Badge } from '@mantine/core';
import { IconArticle, IconFileText, IconLink, IconChartBar, IconUser } from '@tabler/icons-react';



// Define an interface for your dashboard data
interface DashboardData {
  totalBlogs: number;
  totalPages: number;
  totalLinks: number;
  activeUsers: number;
  monthlyVisitors: number;
  progress: number;
}

export default function DashboardPage() {

  const dashboardData: DashboardData = { 
    totalBlogs: 12,
    totalPages: 5,
    totalLinks: 8,
    activeUsers: 150,
    monthlyVisitors: 10234,
    progress: 65,
  };

  return (
    <Container my="lg">
      {/* Dashboard Title */}
      <Title order={2} ta="center" mb="xl">
        Admin Dashboard
      </Title>

      {/* Stats Grid */}
      <Grid gutter="xl">
        {/* Total Blogs Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Text>Total Blogs</Text>
              <IconArticle size={40} />
            </Group>
            <Text size="xl" fw={700} ta="center">{dashboardData.totalBlogs}</Text>
          </Card>
        </Grid.Col>

        {/* Total Pages Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Text>Total Pages</Text>
              <IconFileText size={40} />
            </Group>
            <Text size="xl" fw={700} ta="center">{dashboardData.totalPages}</Text>
          </Card>
        </Grid.Col>

        {/* Total Links Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Text>Navigation Links</Text>
              <IconLink size={40} />
            </Group>
            <Text size="xl" fw={700} ta="center">{dashboardData.totalLinks}</Text>
          </Card>
        </Grid.Col>

        {/* Active Users Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Group justify="space-between"mb="md">
              <Text>Active Users</Text>
              <IconUser size={40} />
            </Group>
            <Text size="xl" fw={700} ta="center">{dashboardData.activeUsers}</Text>
          </Card>
        </Grid.Col>

        {/* Monthly Visitors Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Group justify="space-between"mb="md">
              <Text>Monthly Visitors</Text>
              <IconChartBar size={40} />
            </Group>
            <Text size="xl" fw={700} ta="center">{dashboardData.monthlyVisitors}</Text>
          </Card>
        </Grid.Col>

        {/* Progress Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Text mb="sm">Progress towards Goal</Text>
            <Progress value={dashboardData.progress} size="lg" color="teal" mb="xs" />
            <Text ta="center" fw={700}>{dashboardData.progress}% Completed</Text>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Analytics Overview */}
      <Title order={3} ta="center" mt="xl" mb="sm">
        Analytics Overview
      </Title>
      <Grid gutter="xl">
        {/* Website Traffic Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 6 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Text size="lg" mb="sm">Website Traffic</Text>
            <Text size="xl" fw={700} color="blue">{dashboardData.monthlyVisitors} Total Visitors</Text>
            <Badge color="blue" size="lg">View Details</Badge>
          </Card>
        </Grid.Col>

        {/* User Engagement Card */}
        <Grid.Col span={{ base: 12, sm: 6, md: 6 }}>
          <Card shadow="md" padding="lg" radius="md" withBorder>
            <Text size="lg" mb="sm">User Engagement</Text>
            <Text size="xl" fw={700} color="green">{dashboardData.activeUsers} Active Users</Text>
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