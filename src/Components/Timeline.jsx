// components/TimelineComponent.js
import React, { useEffect } from "react";
import { Timeline, Typography, Space } from "antd";
import {
  AppstoreAddOutlined,
  HistoryOutlined,
  StarOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css"; // Ensure Ant Design styles are imported
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

const { Title, Paragraph } = Typography;

const events = [
  {
    year: "Indus Valley Civilization",
    description:
      "One of the world's oldest urban civilizations, known for its advanced urban planning and architecture.",
    icon: (
      <AppstoreAddOutlined
        style={{ fontSize: "24px", color: "#fff" }}
        className="p-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg"
      />
    ),
  },
  {
    year: "Maurya Empire",
    description:
      "Founded by Chandragupta Maurya, known for its political and military strength.",
    icon: (
      <HistoryOutlined
        style={{ fontSize: "24px", color: "#fff" }}
        className="p-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg"
      />
    ),
  },
  {
    year: "Gupta Empire",
    description:
      "Considered the Golden Age of India, with significant achievements in arts, science, and culture.",
    icon: (
      <StarOutlined
        style={{ fontSize: "24px", color: "#fff" }}
        className="p-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg"
      />
    ),
  },
  {
    year: "British East India Company",
    description:
      "Established its rule in India, leading to significant social and political changes.",
    icon: (
      <GlobalOutlined
        style={{ fontSize: "24px", color: "#fff" }}
        className="p-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 shadow-lg"
      />
    ),
  },
  {
    year: "Independence and Partition",
    description:
      "India gained independence from British rule and was partitioned into India and Pakistan in 1947.",
    icon: (
      <CheckCircleOutlined
        style={{ fontSize: "24px", color: "#fff" }}
        className="p-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg"
      />
    ),
  },
  {
    year: "Economic Liberalization",
    description:
      "India implemented economic reforms and liberalization policies in the early 1990s, boosting economic growth.",
    icon: (
      <AppstoreAddOutlined
        style={{ fontSize: "24px", color: "#fff" }}
        className="p-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg"
      />
    ),
  },
];

const TimelineComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div
      style={{
        padding: "20px 10px",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        borderRadius: "16px",
        maxWidth: "75%",
        margin: "auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: "50px",
          color: "#333",
        }}
        data-aos="fade-down"
        className=" font-Main text-5xl"
      >
        Historical Timeline of India
      </Title>
      <Timeline
        mode="alternate"
        style={{ padding: "0 10px", marginBottom: "0" }}
      >
        {events.map((event, index) => (
          <Timeline.Item
            key={index}
            dot={event.icon}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Staggered animation
            style={{
              textAlign: index % 2 === 0 ? "left" : "right",
              margin: "0 0 20px 0",
            }}
          >
            <Space
              direction="vertical"
              style={{
                background: "#fff",
                padding: "10px 15px",
                borderRadius: "12px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Title
                level={4}
                style={{
                  marginBottom: "8px",
                  color: "#1890ff",
                  fontFamily: "Georgia, serif",
                }}
                data-aos="fade-right" // Animation for the year
                data-aos-delay={`${index * 150 + 100}`} // Slightly more delay
              >
                {event.year}
              </Title>
              <Paragraph
                style={{
                  marginBottom: "0",
                  color: "#555",
                  fontFamily: "Arial, sans-serif",
                }}
                data-aos="fade-left" // Animation for the description
                data-aos-delay={`${index * 150 + 200}`} // More delay for description
                className=""
              >
                {event.description}
              </Paragraph>
            </Space>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default TimelineComponent;
