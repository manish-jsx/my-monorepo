// const [drafts, setDrafts] = useState(initialDrafts);
// const [searchTerm, setSearchTerm] = useState('');
// const [filterStatus, setFilterStatus] = useState('');
// const [itemsPerPage, setItemsPerPage] = useState(5); // Default number of items per page
// const [currentPage, setCurrentPage] = useState(1);

// // Filtering logic
// const filteredDrafts = drafts.filter((draft) => {
//   const matchesSearch = draft.title.toLowerCase().includes(searchTerm.toLowerCase());
//   const matchesStatus = filterStatus ? draft.status === filterStatus : true;
//   return matchesSearch && matchesStatus;
// });

// // Paginate the filtered drafts
// const totalItems = filteredDrafts.length;
// const startIndex = (currentPage - 1) * itemsPerPage;
// const currentPageDrafts = filteredDrafts.slice(startIndex, startIndex + itemsPerPage);

// const handleEdit = (slug: string) => {
//   alert(`Editing draft: ${slug}`);
//   // Navigate to the edit page or open an edit modal
// };

// const handleDelete = (slug: string) => {
//   const updatedDrafts = drafts.filter((draft) => draft.slug !== slug);
//   setDrafts(updatedDrafts);
//   alert(`Deleted draft: ${slug}`);
// };

// const handleView = (slug: string) => {
//   alert(`Viewing draft: ${slug}`);
//   // Navigate to the full draft or view the details
// };

// // Define icons for the buttons
// const editIcon = <IconEdit size={14} />;
// const deleteIcon = <IconTrash size={14} />;
// const viewIcon = <IconEye size={14} />;

// return (
//   <Container size="lg">
//     <Text size="xl" fw={700} mb="md">
//       Blog Drafts
//     </Text>

//     {/* Search and Filter Section */}
//     <Group mb="lg" gap="md" justify="space-between" grow>
//     <TextInput
//         placeholder="Search drafts..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ flexGrow: 1 }}
//         icon={<IconSearch size={18} />} {/* Correct placement of icon prop */}
//       />

//       <Select
//         placeholder="Filter by status"
//         icon={<IconFilter size={18} />}
//         value={filterStatus}
//         onChange={setFilterStatus}
//         data={[
//           { value: '', label: 'All' },
//           { value: 'Ready to Publish', label: 'Ready to Publish' },
//           { value: 'Not Approved', label: 'Not Approved' },
//           { value: 'Draft', label: 'Draft' },
//         ]}
//         style={{ width: 200 }}
//       />

//       {/* Select items per page */}
//       <Select
//         placeholder="Items per page"
//         value={itemsPerPage.toString()}
//         onChange={(value) => setItemsPerPage(Number(value))}
//         data={[
//           { value: '5', label: '5' },
//           { value: '10', label: '10' },
//           { value: '15', label: '15' },
//         ]}
//         style={{ width: 100 }}
//       />
//     </Group>

//     {/* Drafts Grid */}
//     <Grid>
//       {currentPageDrafts.length > 0 ? (
//         currentPageDrafts.map((draft) => (
//           <Grid.Col key={draft.slug} span={12} md={6}>
//             <Card shadow="sm" radius="md" padding={0} withBorder>
//               <Group wrap="nowrap" gap={0}>
//                 <Image
//                   src={draft.image}
//                   height={160}
//                   width={160}
//                   alt={draft.title}
//                   onClick={() => handleView(draft.slug)}
//                   style={{ cursor: 'pointer' }}
//                 />

//                 <div style={{ padding: '1rem' }}>
//                   <Text tt="uppercase" color="dimmed" fw={700} size="xs" mb="xs">
//                     {draft.tags.join(', ')}
//                   </Text>
//                   <Text fw={700} size="lg" mb="xs" lineClamp={2}>
//                     {draft.title}
//                   </Text>
//                   <Text size="sm" color="dimmed" mb="sm" lineClamp={2}>
//                     {draft.preview}
//                   </Text>

//                   <Group gap="xs" wrap="nowrap">
//                     <Avatar src={draft.avatar} size="sm" />
//                     <Text size="xs">{draft.author}</Text>
//                     <Text size="xs" color="dimmed">
//                       •
//                     </Text>
//                     <Text size="xs" color="dimmed">
//                       {draft.date}
//                     </Text>
//                   </Group>

//                   <Badge
//                     color={
//                       draft.status === 'Ready to Publish'
//                         ? 'green'
//                         : draft.status === 'Not Approved'
//                         ? 'red'
//                         : 'gray'
//                     }
//                     variant="filled"
//                     mt="xs"
//                   >
//                     {draft.status}
//                   </Badge>

//                   {/* Buttons with Icons */}
//                   <Group gap="xs" mt="md">
//                     <Button
//                       size="xs"
//                       justify="center"
//                       leftSection={editIcon}
//                       onClick={(e) => { e.stopPropagation(); handleEdit(draft.slug); }}
//                       variant="default"
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       size="xs"
//                       color="red"
//                       justify="center"
//                       leftSection={deleteIcon}
//                       onClick={(e) => { e.stopPropagation(); handleDelete(draft.slug); }}
//                       variant="default"
//                     >
//                       Delete
//                     </Button>
//                     <Button
//                       size="xs"
//                       justify="center"
//                       leftSection={viewIcon}
//                       onClick={(e) => { e.stopPropagation(); handleView(draft.slug); }}
//                       variant="default"
//                     >
//                       View
//                     </Button>
//                   </Group>
//                 </div>
//               </Group>
//             </Card>
//           </Grid.Col>
//         ))
//       ) : (
//         <Text size="md" color="dimmed">
//           No drafts found.
//         </Text>
//       )}
//     </Grid>

//     {/* Pagination */}
//     <Group justify="center" mt="lg">
//       <Pagination
//         page={currentPage}
//         onChange={setCurrentPage}
//         total={Math.ceil(totalItems / itemsPerPage)}
//       />
//     </Group>
//   </Container>
// )
// };



"use client";
import { useState } from 'react';
import {
  Container,
  Card,
  Text,
  Grid,
  TextInput,
  Select,
  Badge,
  Group,
  Avatar,
  Image,
  Pagination,
  Button,
} from '@mantine/core';
import {  IconFilter, IconEdit, IconTrash, IconEye } from '@tabler/icons-react';

// Define the type for a blog draft
interface BlogDraft {
  slug: string;
  title: string;
  preview: string;
  tags: string[];
  status: string;
  author: string;
  date: string;
  image: string;
  avatar: string;
}


export default function BlogDraftsPage() {
 



  const initialDrafts: BlogDraft[]= [
  {
    slug: 'draft-one',
    title: 'The Future of Technology',
    preview: 'Exploring the next big advancements in the tech world.',
    tags: ['Technology', 'Innovation'],
    status: 'Ready to Publish',
    author: 'Alice Johnson',
    date: 'Dec 1st',
    image: 'https://images.unsplash.com/photo-1517262011756-80b94d5010c2?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjk2MHx8MHx8c2VhcmNofDE5fHx0ZWNobm9sb2d5fGVufDB8fHx8fDE2Njk3NzgxNzg&ixlib=rb-1.2.1&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    slug: 'draft-two',
    title: 'Health Benefits of Mindfulness',
    preview: 'Understanding how mindfulness can improve mental and physical well-being.',
    tags: ['Health', 'Wellness'],
    status: 'Draft',
    author: 'Bob Smith',
    date: 'Nov 25th',
    image: 'https://images.unsplash.com/photo-1604010303699-05b48d86d8bc?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjk2MHx8MHx8c2VhcmNofDF8fGhvbGElMjBsaWZlfGVufDB8fHx8fDE2Njk3NzgxNzg&ixlib=rb-1.2.1&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    slug: 'draft-three',
    title: 'Exploring Ancient Civilizations',
    preview: 'A deep dive into the rise and fall of ancient empires.',
    tags: ['History', 'Culture'],
    status: 'Not Approved',
    author: 'Sara Green',
    date: 'Nov 20th',
    image: 'https://images.unsplash.com/photo-1573484761394-6d129f18c693?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjk2MHx8MHx8c2VhcmNofDJ8fGhpc3Rvcnl8ZW58MHx8fHwxNjY5Nzc4MTg4&ixlib=rb-1.2.1&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
  },
  {
    slug: 'draft-four',
    title: 'Sustainable Living: Small Steps for Big Change',
    preview: 'How small lifestyle changes can have a huge environmental impact.',
    tags: ['Environment', 'Sustainability'],
    status: 'Ready to Publish',
    author: 'John Miller',
    date: 'Nov 15th',
    image: 'https://images.unsplash.com/photo-1597645589652-1e8d3f8afc81?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjk2MHx8MHx8c2VhcmNofDEzfHxzdXN0YWluYWJpbGl0eXxlbnwwfHx8fDE2Njk3NzgxNjA&ixlib=rb-1.2.1&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
  {
    slug: 'draft-five',
    title: 'Mastering the Art of Cooking',
    preview: 'A beginner’s guide to cooking delicious meals at home.',
    tags: ['Food', 'Cooking'],
    status: 'Draft',
    author: 'Emily White',
    date: 'Nov 10th',
    image: 'https://images.unsplash.com/photo-1603052873893-23a5f9b030e4?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjk2MHx8MHx8c2VhcmNofDJ8fGZvb2R8ZW58MHx8fHx8fDE2Njk3NzgxNTQ&ixlib=rb-1.2.1&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
  },
  {
    slug: 'draft-six',
    title: 'The Rise of Electric Vehicles',
    preview: 'A look into the growing trend of electric cars and their environmental impact.',
    tags: ['Technology', 'Transportation'],
    status: 'Ready to Publish',
    author: 'Steve Clark',
    date: 'Nov 5th',
    image: 'https://images.unsplash.com/photo-1593145750315-4c4f0b8da5da?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjk2MHx8MHx8c2VhcmNofDExfHxldmVjdHJpY2FsdXxlbnwwfHx8fDE2Njk3NzgxNjQ&ixlib=rb-1.2.1&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
  },
  {
    slug: 'draft-seven',
    title: 'Photography Tips for Beginners',
    preview: 'Learn how to capture stunning photos with just a few simple tips.',
    tags: ['Photography', 'Art'],
    status: 'Not Approved',
    author: 'Tom Harris',
    date: 'Oct 30th',
    image: 'https://images.unsplash.com/photo-1577736872192-9a1491f625fa?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjk2MHx8MHx8c2VhcmNofDExfHxwaG90b3Nob3BoeXxlbnwwfHx8fDE2Njk3NzgxNjY&ixlib=rb-1.2.1&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/men/53.jpg',
  },
  {
    slug: 'draft-eight',
    title: 'The Art of Meditation and Mindfulness',
    preview: 'How meditation and mindfulness practices can help you live a better life.',
    tags: ['Mental Health', 'Wellness'],
    status: 'Ready to Publish',
    author: 'Linda Adams',
    date: 'Oct 25th',
    image: 'https://images.unsplash.com/photo-1518040592299-f5b8c97b2870?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjk2MHx8MHx8c2VhcmNofDExfHxtaW5kZnVsbnVlc3N8ZW58MHx8fHx8fDE2Njk3NzgxNjc&ixlib=rb-1.2.1&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
  {
    slug: 'draft-nine',
    title: 'Exploring New Frontiers in Space Exploration',
    preview: 'An overview of the latest advancements in space exploration technology.',
    tags: ['Space', 'Technology'],
    status: 'Draft',
    author: 'Martin King',
    date: 'Oct 20th',
    image: 'https://images.unsplash.com/photo-1523920460996-19a5d6ed3bfa?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjk2MHx8MHx8c2VhcmNofDExfHxzcGFjZXxlbnwwfHx8fDE2Njk3NzgxNzg&ixlib=rb-1.2.1&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
  },
  {
    slug: 'draft-ten',
    title: 'Building Your Own Sustainable Garden',
    preview: 'Step-by-step guide to growing your own organic garden at home.',
    tags: ['Gardening', 'Sustainability'],
    status: 'Ready to Publish',
    author: 'Sophia Lee',
    date: 'Oct 15th',
    image: 'https://images.unsplash.com/photo-1561469510-763a39e82a43?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjk2MHx8MHx8c2VhcmNofDEwfHxvcmcuY29vc3xlbnwwfHx8fDE2Njk3NzgxODI&ixlib=rb-1.2.1&q=80&w=1080',
    avatar: 'https://randomuser.me/api/portraits/women/38.jpg',
  },
];



const [drafts, setDrafts] = useState(initialDrafts);
const [searchTerm, setSearchTerm] = useState<string>("");
const [filterStatus, setFilterStatus] = useState<string>('');

const [itemsPerPage, setItemsPerPage] = useState(5);
const [currentPage, setCurrentPage] = useState(1);

// Filtering logic
const filteredDrafts = drafts.filter((draft) => {
  const matchesSearch = draft.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
  const matchesStatus = filterStatus
    ? draft.status === filterStatus
    : true;
  return matchesSearch && matchesStatus;
});

// Paginate the filtered drafts
const totalItems = filteredDrafts.length;
const startIndex = (currentPage - 1) * itemsPerPage;
const currentPageDrafts = filteredDrafts.slice(
  startIndex,
  startIndex + itemsPerPage
);

const handleEdit = (slug: string) => {
  alert(`Editing draft: ${slug}`);
  // Navigate to the edit page or open an edit modal
};

const handleDelete = (slug: string) => {
  const updatedDrafts = drafts.filter((draft) => draft.slug !== slug);
  setDrafts(updatedDrafts);
  alert(`Deleted draft: ${slug}`);
};

const handleView = (slug: string) => {
  alert(`Viewing draft: ${slug}`);
  // Navigate to the full draft or view the details
};

return (
  <Container size="lg">
    <Text size="xl" fw={700} mb="md">
      Blog Drafts
    </Text>

    {/* Search and Filter Section */}
    <Group mb="lg" gap="md" justify="space-between" grow>
      <TextInput
        placeholder="Search drafts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
       
      />

      <Select
        placeholder="Filter by status"
        leftSection={<IconFilter size={18} />}
        value={filterStatus}
        onChange={(value) => setFilterStatus(value ?? '')}
        data={[
          { value: "", label: "All" },
          { value: "Ready to Publish", label: "Ready to Publish" },
          { value: "Not Approved", label: "Not Approved" },
          { value: "Draft", label: "Draft" },
        ]}
      />

      <Select
        placeholder="Items per page"
        value={itemsPerPage.toString()}
        onChange={(value) => setItemsPerPage(Number(value))}
        data={[
          { value: "5", label: "5" },
          { value: "10", label: "10" },
          { value: "15", label: "15" },
        ]}
      />
    </Group>

    {/* Drafts Grid */}
    <Grid>
      {currentPageDrafts.length > 0 ? (
        currentPageDrafts.map((draft) => (
          <Grid.Col key={draft.slug} span={{ base: 12, xs: 6 }}>
            <Card shadow="sm" radius="md" padding={0} withBorder>
              <Group wrap="nowrap" gap={0}>
                <Image
                  src={draft.image}
                  height={160}
                  width={160}
                  alt={draft.title}
                  onClick={() => handleView(draft.slug)}
                  style={{ cursor: "pointer" }}
                />

                <div style={{ padding: "1rem" }}>
                  <Text tt="uppercase" color="dimmed" fw={700} size="xs" mb="xs">
                    {draft.tags.join(", ")}
                  </Text>
                  <Text fw={700} size="lg" mb="xs" lineClamp={2}>
                    {draft.title}
                  </Text>
                  <Text size="sm" color="dimmed" mb="sm" lineClamp={2}>
                    {draft.preview}
                  </Text>

                  <Group gap="xs" wrap="nowrap">
                    <Avatar src={draft.avatar} size="sm" />
                    <Text size="xs">{draft.author}</Text>
                    <Text size="xs" color="dimmed">
                      •
                    </Text>
                    <Text size="xs" color="dimmed">
                      {draft.date}
                    </Text>
                  </Group>

                  <Badge
                    color={
                      draft.status === "Ready to Publish"
                        ? "green"
                        : draft.status === "Not Approved"
                        ? "red"
                        : "gray"
                    }
                  >
                    {draft.status}
                  </Badge>

                  <Group mt="md" gap="xs">
                    <Button
                      size="xs"
                      variant="light"
                      color="blue"
                      onClick={() => handleEdit(draft.slug)}
                    >
                      <IconEdit size={14} />
                      Edit
                    </Button>
                    <Button
                      size="xs"
                      variant="light"
                      color="red"
                      onClick={() => handleDelete(draft.slug)}
                    >
                      <IconTrash size={14} />
                      Delete
                    </Button>
                    <Button
                      size="xs"
                      variant="light"
                      color="gray"
                      onClick={() => handleView(draft.slug)}
                    >
                      <IconEye size={14} />
                      View
                    </Button>
                  </Group>
                </div>
              </Group>
            </Card>
          </Grid.Col>
        ))
      ) : (
        <Text>No drafts found.</Text>
      )}
    </Grid>

    {/* Pagination */}
    <Pagination
      total={Math.ceil(totalItems / itemsPerPage)}
      value={currentPage}
      onChange={setCurrentPage}
      mt="lg"
    />
  </Container>
);
}
