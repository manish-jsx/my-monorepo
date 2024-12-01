"use client"

import React, { useState } from 'react';
import { Container, Group, TextInput, Select, Button, Pagination, Title, Card, Text, Avatar, Image, Badge, Switch, Grid } from '@mantine/core';
import { IconSearch, IconEdit, IconEyeOff, IconTrash } from '@tabler/icons-react';
const blogs = [
  {
    slug: 'first-blog',
    title: 'Norway Fjord Adventures',
    preview: 'With Fjord Tours you can explore more of the magical fjord landscapes...',
    tags: ['Technology', 'Innovation'],
    status: 'Ready to Publish',
    author: 'Alice Johnson',
    date: 'Dec 1st',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    slug: 'second-blog',
    title: 'Alpine Hiking Trails',
    preview: 'Experience the best hiking trails in the Alps with stunning mountain views...',
    tags: ['Adventure', 'Nature'],
    status: 'Ready to Publish',
    author: 'John Doe',
    date: 'Dec 2nd',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
  {
    slug: 'third-blog',
    title: 'The Future of Artificial Intelligence',
    preview: 'AI continues to evolve and reshape industries in unexpected ways...',
    tags: ['Technology', 'AI'],
    status: 'Draft',
    author: 'Jane Smith',
    date: 'Dec 3rd',
    image: 'https://images.unsplash.com/photo-1517262011756-80b94d5010c2?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
  {
    slug: 'fourth-blog',
    title: 'Exploring the Depths of the Ocean',
    preview: 'Discover the wonders and mysteries of ocean life through our expeditions...',
    tags: ['Science', 'Oceanography'],
    status: 'Ready to Publish',
    author: 'Robert Brown',
    date: 'Dec 4th',
    image: 'https://images.unsplash.com/photo-1593065874249-e2f6d3e2b46b?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    slug: 'fifth-blog',
    title: 'Building a Sustainable Future',
    preview: 'Explore ways to build a greener, more sustainable planet through eco-friendly practices...',
    tags: ['Environment', 'Sustainability'],
    status: 'Ready to Publish',
    author: 'Alice Johnson',
    date: 'Dec 5th',
    image: 'https://images.unsplash.com/photo-1532634891-48769ba46874?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    slug: 'sixth-blog',
    title: 'Top Tech Innovations of 2024',
    preview: 'The most exciting tech breakthroughs to look out for in the coming year...',
    tags: ['Technology', 'Innovation'],
    status: 'Ready to Publish',
    author: 'John Doe',
    date: 'Dec 6th',
    image: 'https://images.unsplash.com/photo-1603770718597-55d3494650fd?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    slug: 'seventh-blog',
    title: 'Photography Tips for Beginners',
    preview: 'Learn essential photography tips and techniques to improve your shots...',
    tags: ['Photography', 'Art'],
    status: 'Ready to Publish',
    author: 'Samantha Lee',
    date: 'Dec 7th',
    image: 'https://images.unsplash.com/photo-1592837099615-e9fa9e3cbde3?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
  {
    slug: 'eighth-blog',
    title: 'Exploring New York City',
    preview: 'Discover the hidden gems and iconic spots in the bustling metropolis...',
    tags: ['Travel', 'City Guide'],
    status: 'Draft',
    author: 'Mark Taylor',
    date: 'Dec 8th',
    image: 'https://images.unsplash.com/photo-1532204870-1119d8f4fd1d?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    slug: 'ninth-blog',
    title: 'Mastering Digital Marketing',
    preview: 'Effective strategies for growing your business in the digital world...',
    tags: ['Business', 'Marketing'],
    status: 'Ready to Publish',
    author: 'Sophia Brown',
    date: 'Dec 9th',
    image: 'https://images.unsplash.com/photo-1542621349-140a80b7d6b8?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
  },
  {
    slug: 'tenth-blog',
    title: 'Healthy Eating Habits',
    preview: 'Tips for maintaining a balanced diet and living a healthy lifestyle...',
    tags: ['Health', 'Lifestyle'],
    status: 'Ready to Publish',
    author: 'David Lee',
    date: 'Dec 10th',
    image: 'https://images.unsplash.com/photo-1582559916042-cd4728d9d2fc?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
  },
];
const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [tagsFilter, setTagsFilter] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [view, setView] = useState('card');
  const [blogsPerPage, setBlogsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter blogs based on dynamic search and selected criteria
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.preview.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = filter ? blog.tags.includes(filter) : true;
    const matchesTags =
      tagsFilter.length > 0 ? tagsFilter.every(tag => blog.tags.includes(tag)) : true;
    const matchesStatus = statusFilter ? blog.status === statusFilter : true;
    const matchesAuthor = authorFilter ? blog.author === authorFilter : true;
    const matchesDate = dateFilter ? blog.date === dateFilter : true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesTags &&
      matchesStatus &&
      matchesAuthor &&
      matchesDate
    );
  });

  // Paginate blogs
  const totalBlogs = filteredBlogs.length;
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <Container size="lg" py="xl">
      <Group position="apart" mb="lg">
        <Title order={1}>Blog List</Title>
        <Switch
          label="Toggle View"
          checked={view === 'card'}
          onChange={(event) => setView(event.currentTarget.checked ? 'card' : 'list')}
        />
      </Group>

      {/* Search and Filter Section */}
      <Group
        mb="lg"
        spacing="md"
        position="apart"
        align="center"
        style={{ flexWrap: 'wrap' }}
      >
        {/* Search input */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <TextInput
            label="Search Blogs"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<IconSearch size={18} />}
            style={{ flexGrow: 1 }}
            aria-label="Search Blogs"
          />
        </div>

        {/* Category filter */}
        <div style={{ minWidth: '200px' }}>
          <Select
            label="Filter by Category"
            placeholder="Select Category"
            value={filter}
            onChange={setFilter}
            data={[
              { value: '', label: 'All' },
              { value: 'Technology', label: 'Technology' },
              { value: 'Innovation', label: 'Innovation' },
              { value: 'Adventure', label: 'Adventure' },
              { value: 'Nature', label: 'Nature' },
            ]}
            aria-label="Filter by Category"
          />
        </div>

        {/* Tags filter */}
        <div style={{ minWidth: '200px' }}>
          <Select
            label="Select Tags"
            placeholder="Choose Tags"
            value={tagsFilter}
            onChange={setTagsFilter}
            data={[
              { value: 'Adventure', label: 'Adventure' },
              { value: 'Nature', label: 'Nature' },
              { value: 'Technology', label: 'Technology' },
              { value: 'Innovation', label: 'Innovation' },
            ]}
            style={{ width: '200px' }}
            multiple
            aria-label="Filter by Tags"
          />
        </div>

        {/* Status filter */}
        <div style={{ minWidth: '200px' }}>
          <Select
            label="Filter by Status"
            placeholder="Select Status"
            value={statusFilter}
            onChange={setStatusFilter}
            data={[
              { value: '', label: 'All' },
              { value: 'Ready to Publish', label: 'Ready to Publish' },
              { value: 'Draft', label: 'Draft' },
              { value: 'Published', label: 'Published' },
            ]}
            aria-label="Filter by Status"
          />
        </div>

        {/* Author filter */}
        <div style={{ minWidth: '200px' }}>
          <Select
            label="Filter by Author"
            placeholder="Select Author"
            value={authorFilter}
            onChange={setAuthorFilter}
            data={[
              { value: '', label: 'All' },
              { value: 'John Doe', label: 'John Doe' },
              { value: 'Jane Smith', label: 'Jane Smith' },
              { value: 'Alice Johnson', label: 'Alice Johnson' },
            ]}
            aria-label="Filter by Author"
          />
        </div>

        {/* Date filter */}
        <div style={{ minWidth: '200px' }}>
          <Select
            label="Filter by Date"
            placeholder="Select Date"
            value={dateFilter}
            onChange={setDateFilter}
            data={[
              { value: '', label: 'All Dates' },
              { value: 'Dec 1st', label: 'Dec 1st' },
              { value: 'Dec 2nd', label: 'Dec 2nd' },
              { value: 'Dec 3rd', label: 'Dec 3rd' },
              { value: 'Dec 4th', label: 'Dec 4th' },
            ]}
            aria-label="Filter by Date"
          />
        </div>

        {/* Blogs per page */}
        <div style={{ minWidth: '120px' }}>
          <Select
            label="Blogs per Page"
            placeholder="Choose Count"
            value={blogsPerPage.toString()}
            onChange={(value) => setBlogsPerPage(Number(value))}
            data={[
              { value: '5', label: '5' },
              { value: '10', label: '10' },
              { value: '15', label: '15' },
            ]}
            aria-label="Number of Blogs per Page"
          />
        </div>
      </Group>

      {/* Display Blogs */}
      {view === 'card' ? (
        <Grid gutter="lg">
          {currentBlogs.map((blog) => (
            <Grid.Col key={blog.slug} span={12} md={6}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image src={blog.image} height={160} alt={blog.title} />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text fw={500}>{blog.title}</Text>
                  <Text size="sm" c="dimmed">{blog.status}</Text>
                </Group>

                <Text size="sm" c="dimmed">{blog.preview}</Text>

                {/* Author and Date */}
                <Group position="left" spacing="xs" mt="md">
                  <Avatar size={24} src={blog.avatar} alt={blog.author} />
                  <Text size="sm" c="dimmed">{blog.author} - {blog.date}</Text>
                </Group>

                {/* Buttons */}
                <Group position="apart" mt="md">
                  <Button
                    color="blue"
                    leftSection={<IconEdit size={14} />}
                    radius="md"
                    variant="outline"
                  >
                    Edit
                  </Button>

                  <Button
                    color="red"
                    leftSection={<IconEyeOff size={14} />}
                    radius="md"
                    variant="outline"
                  >
                    Unpublish
                  </Button>

                  <Button
                    color="red"
                    leftSection={<IconTrash size={14} />}
                    radius="md"
                    variant="outline"
                  >
                    Delete
                  </Button>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        <div>
          {currentBlogs.map((blog) => (
            <Card key={blog.slug} shadow="sm" padding="lg" radius="md" withBorder mb="lg">
              <Group>
                <Image src={blog.image} height={120} width={120} alt={blog.title} radius="sm" />
                <div>
                  <Text fw={500} size="lg">{blog.title}</Text>
                  <Text size="sm" c="dimmed" mb="xs">{blog.preview}</Text>
                  <Text size="sm" c="dimmed">{blog.status}</Text>
                  <Group position="left" spacing="xs" mt="md">
                    <Avatar size={24} src={blog.avatar} alt={blog.author} />
                    <Text size="sm" c="dimmed">{blog.author} - {blog.date}</Text>
                  </Group>

                  {/* Tags */}
                  <Group position="left" spacing="xs" mt="md">
                    {blog.tags.map((tag, index) => (
                      <Badge key={index} color="gray">{tag}</Badge>
                    ))}
                  </Group>

                  {/* Buttons */}
                  <Group position="apart" mt="md">
                    <Button
                      color="blue"
                      leftSection={<IconEdit size={14} />}
                      radius="md"
                      variant="outline"
                    >
                      Edit
                    </Button>

                    <Button
                      color="red"
                      leftSection={<IconEyeOff size={14} />}
                      radius="md"
                      variant="outline"
                    >
                      Unpublish
                    </Button>

                    <Button
                      color="red"
                      leftSection={<IconTrash size={14} />}
                      radius="md"
                      variant="outline"
                    >
                      Delete
                    </Button>
                  </Group>
                </div>
              </Group>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      <Group position="center" mt="lg">
        <Pagination
          total={Math.ceil(totalBlogs / blogsPerPage)}
          page={currentPage}
          onChange={setCurrentPage}
        />
      </Group>
    </Container>
  );
};

export default BlogList;