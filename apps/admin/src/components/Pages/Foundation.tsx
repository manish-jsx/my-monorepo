

// import React, { useEffect, useState } from 'react';
// import { Container, Text } from '@mantine/core';
// import styles from './Foundation.module.css';

// const MOCK_DATA = [
//   {
//     id: 1,
//     title: "UPAY – The Solution",
//     paragraphs: [
//       "UPAY strives to make education for all increasingly accessible with its two major prongs – Footpathshaala and Reach and Teach. Children are taught through open classroom programs using various recreational and skill developmental activities with the vision of a world where education is no longer a distant dream for every child.",
//       "UPAY is the product of a passionate young IIT Kharagpur graduate and Engineer from NTPC Ltd, wishing to change the life of every Indian child through the most powerful tool – education. Intending to replace begging bowls with books, Varun Shrivastava, along with three equally driven young Engineers, laid the foundation for UPAY on 20th May 2010.",
//     ],
//     videoUrl: "https://www.youtube.com/embed/video-id1",
//     brochureUrl: "/path-to-brochure1.pdf",
//   },
//   {
//     id: 2,
//     title: "UPAY – Another Initiative",
//     paragraphs: [
//       "UPAY's programs also focus on vocational training for youth, ensuring that they gain skills to find sustainable employment.",
//       "The organization has launched several skill development initiatives in rural areas to empower young minds.",
//     ],
//     videoUrl: "https://www.youtube.com/embed/video-id2",
//     brochureUrl: "/path-to-brochure2.pdf",
//   },
// ];

// type FoundationItem = {
//   id: number;
//   title: string;
//   paragraphs: string[];
//   videoUrl: string;
//   brochureUrl: string;
// };

// export function Foundation() {
//   const [data, setData] = useState<FoundationItem[]>([]);
//   const [isLoading, setIsLoading] = useState(true); //Loading State
//   const [error, setError] = useState<Error | null>(null); 

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true); // Set loading state to true before fetch
//       try {
//         await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
//         setData(MOCK_DATA.slice(0, 6));
//       } catch (err) {
//         setError(err); // Handle errors
//       } finally {
//         setIsLoading(false); // Set loading state to false after fetch (success or failure)
//       }
//     };
//     fetchData();
//   }, []);

//   if (isLoading) {
//     return (
//       <Container className={styles.container}>
//         <Text>Loading Foundation data...</Text>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container className={styles.container}>
//         <Text color="red">Error loading data: {error.message}</Text>
//       </Container>
//     );
//   }

//   if (!data.length) {
//     return (
//       <Container className={styles.container}>
//         <Text>No Foundation data found.</Text>
//       </Container>
//     );
//   }

//   return (
//     <Container className={styles.container}>
//       {data.map((item) => (
//         <div key={item.id} className={styles.item}>
//           <div className={styles.row}>
//             <div className={styles.textSection}>
//               <Text className={styles.title}>{item.title}</Text>
//               {item.paragraphs.map((paragraph, index) => (
//                 <Text key={index} className={styles.paragraph}>
//                   {paragraph}
//                 </Text>
//               ))}
//             </div>
//             <div className={styles.videoSection}>
//               <iframe
//                 className={styles.videoFrame}
//                 src={item.videoUrl}
//                 title={`YouTube video player ${item.id}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Container>
//   );
// }
'use client';
import React, { useEffect, useState } from 'react';
import { Container, Text, Stack, Box } from '@mantine/core';
import styles from './Foundation.module.css';

const MOCK_DATA = [
  {
    id: 1,
    title: "UPAY – The Solution",
    paragraphs: [
      "UPAY strives to make education for all increasingly accessible with its two major prongs – Footpathshaala and Reach and Teach. Children are taught through open classroom programs using various recreational and skill developmental activities with the vision of a world where education is no longer a distant dream for every child.",
      "UPAY is the product of a passionate young IIT Kharagpur graduate and Engineer from NTPC Ltd, wishing to change the life of every Indian child through the most powerful tool – education. Intending to replace begging bowls with books, Varun Shrivastava, along with three equally driven young Engineers, laid the foundation for UPAY on 20th May 2010.",
    ],
    videoUrl: "https://www.youtube.com/embed/video-id1",
    brochureUrl: "/path-to-brochure1.pdf",
  },
  {
    id: 2,
    title: "UPAY – Another Initiative",
    paragraphs: [
      "UPAY's programs also focus on vocational training for youth, ensuring that they gain skills to find sustainable employment.",
      "The organization has launched several skill development initiatives in rural areas to empower young minds.",
    ],
    videoUrl: "https://www.youtube.com/embed/video-id2",
    brochureUrl: "/path-to-brochure2.pdf",
  },
];

type FoundationItem = {
  id: number;
  title: string;
  paragraphs: string[];
  videoUrl: string;
  brochureUrl: string;
};

export function Foundation() {
  const [data, setData] = useState<FoundationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(MOCK_DATA.slice(0, 6));
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unexpected error occurred"));
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Container className={styles.container}>
        <Text>Loading Foundation data...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className={styles.container}>
        <Text color="red">Error loading data: {error.message}</Text>
      </Container>
    );
  }

  if (!data.length) {
    return (
      <Container className={styles.container}>
        <Text>No Foundation data found.</Text>
      </Container>
    );
  }

  return (
    <Container className={styles.container}>
      <Stack>
        {data.map((item) => (
          <Box key={item.id} className={styles.item}>
            <div className={styles.row}>
              <div className={styles.textSection}>
                <Text className={styles.title}>{item.title}</Text>
                {item.paragraphs.map((paragraph, index) => (
                  <Text key={index} className={styles.paragraph}>
                    {paragraph}
                  </Text>
                ))}
              </div>
              <div className={styles.videoSection}>
                <iframe
                  className={styles.videoFrame}
                  src={item.videoUrl}
                  title={`YouTube video player ${item.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}