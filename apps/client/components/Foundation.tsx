import React, { useEffect, useState } from 'react';
import { Container, Text, Button } from '@mantine/core';
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

export function Foundation() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(MOCK_DATA.slice(0, 6)); // Limit to 6 items
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className={styles.container}>
        <Text>Loading...</Text>
      </Container>
    );
  }

  if (!data.length) {
    return (
      <Container className={styles.container}>
        <Text>No data found. Please try again later.</Text>
      </Container>
    );
  }

  return (
    <Container className={styles.container}>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          {/* Text and Video Row */}
          <div className={styles.row}>
            {/* Left: Text Section */}
            <div className={styles.textSection}>
              <Text className={styles.title}>{item.title}</Text>
              {item.paragraphs.map((paragraph, index) => (
                <Text key={index} className={styles.paragraph}>
                  {paragraph}
                </Text>
              ))}
            </div>

            {/* Right: Video Section */}
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

    
        </div>
      ))}
    </Container>
  );
}