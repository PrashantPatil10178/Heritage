// components/IndianArtGalleryComponent.js
import React from "react";
import { Carousel, Typography } from "antd";
import { StarOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Ensure Ant Design styles are imported

const { Title } = Typography;

// Example data for Indian artworks
const artworks = [
  {
    title: "Kalamkari Painting",
    description:
      "A traditional Indian art form using natural dyes, depicting mythological and religious themes.",
    imageUrl:
      "https://i.pinimg.com/originals/dd/3f/3c/dd3f3cd5710a294d4f03ba720765992f.jpg",
  },
  {
    title: "Madhubani Art",
    description:
      "A folk art from Bihar, known for its intricate patterns and vibrant colors.",
    imageUrl:
      "https://i.pinimg.com/originals/e9/a8/ab/e9a8abe56f7888f068c084acc4668d2f.jpg",
  },
  {
    title: "Warli Painting",
    description:
      "A tribal art form from Maharashtra, characterized by simple geometric shapes.",
    imageUrl:
      "https://roomfruit.com/wp-content/uploads/2020/04/warli-painting-on-canvas-amazon.jpg",
  },
  {
    title: "Tanjore Painting",
    description:
      "A classical South Indian art form known for its rich surface texture and embellishments.",
    imageUrl:
      "https://cdn1.byjus.com/wp-content/uploads/2023/04/tanjore-painting-krishna-radha-face-700x700.jpeg",
  },
  {
    title: "Pattachitra Art",
    description:
      "Traditional scroll painting from Odisha, known for its intricate details and mythological themes.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.ebMHXeNdpx_Yms2c4FTRrAHaHc?rs=1&pid=ImgDetMain",
  },
];

const IndianArtGalleryComponent = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-white rounded-lg shadow-md m-7">
      <Title
        level={2}
        className="text-center text-gray-800 mb-4 font-Main"
        style={{ fontSize: 40 }}
      >
        Indian Art Gallery
      </Title>
      <Carousel autoplay className="rounded-lg overflow-hidden mb-6">
        {artworks.map((artwork, index) => (
          <div key={index}>
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </Carousel>
      <div>
        <Title
          level={3}
          className="text-center text-gray-800 mb-4 font-Main"
          style={{ fontSize: 25 }}
        >
          Featured Artworks
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {artworks.map((artwork, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg text-gray-800">{artwork.title}</h4>
                <p className="text-sm text-gray-600">{artwork.description}</p>
                <div className="flex justify-end mt-4 space-x-2">
                  <StarOutlined className="text-yellow-500 cursor-pointer" />
                  <AppstoreAddOutlined className="text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndianArtGalleryComponent;
