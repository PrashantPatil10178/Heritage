import React from "react";
import { Card, Avatar, Carousel, Typography } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles

const { Title, Paragraph } = Typography;

const interviews = [
  {
    name: "James Smith",
    role: "Cultural Historian",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    content:
      "The historical richness of European cultures is truly astounding, with each region offering a unique glimpse into its past.",
  },
  {
    name: "Emma Johnson",
    role: "Art Historian",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    content:
      "European art history is a tapestry of creativity, with masterpieces that continue to inspire generations.",
  },
  {
    name: "Liam Brown",
    role: "Architectural Expert",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    content:
      "The architectural heritage of Europe is unmatched, with centuries-old structures that stand as a testament to human ingenuity.",
  },
  {
    name: "Sophia Garcia",
    role: "Folklore Specialist",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    content:
      "European folklore is a treasure trove of myths, legends, and traditions that have been passed down through generations.",
  },
  {
    name: "Lucas Miller",
    role: "Cultural Anthropologist",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    content:
      "Studying European cultures reveals a deep connection to the land, with customs and traditions that have evolved over millennia.",
  },
  {
    name: "Olivia Wilson",
    role: "Literary Historian",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    content:
      "The literary heritage of Europe is vast and diverse, with works that have shaped global literature and thought.",
  },
];

const testimonials = [
  {
    name: "Charlotte Davis",
    role: "Traveler",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    content:
      "Traveling through Europe was a journey through time, with each country offering a new chapter in history.",
  },
  {
    name: "Henry Martinez",
    role: "Cultural Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    content:
      "The cultural diversity of Europe is breathtaking, with every region boasting its own unique traditions and heritage.",
  },
  {
    name: "Mia Thompson",
    role: "Art Lover",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    content:
      "Exploring European art galleries was a dream come true, with each piece telling a story of its own.",
  },
  {
    name: "Noah Anderson",
    role: "History Buff",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    content:
      "The history of Europe is a complex tapestry, woven with events that have shaped the world as we know it.",
  },
  {
    name: "Ella Robinson",
    role: "Gastronomy Expert",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    content:
      "European cuisine is as diverse as its cultures, with each country offering unique and flavorful dishes.",
  },
  {
    name: "Jack Harris",
    role: "Music Aficionado",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    content:
      "The musical heritage of Europe is rich and varied, with each region contributing to a global symphony of sounds.",
  },
];

function CulturalInterviewsAndTestimonials() {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-b from-white via-gray-100 to-gray-200">
      <Title
        level={2}
        className="text-center text-6xl font-Main md:text-4xl font-bold text-gray-800 mb-8"
      >
        Cultural Interviews and Testimonials
      </Title>

      <section className="mb-12">
        <Title
          level={3}
          className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-6"
        >
          Cultural Interviews
        </Title>
        <div className="flex justify-center items-center">
          <Carousel
            autoplay
            dotPosition="bottom"
            className="max-w-md md:max-w-lg lg:max-w-xl w-full"
          >
            {interviews.map((interview, index) => (
              <div key={index} className="px-4">
                <Card
                  bordered={false}
                  className="bg-white shadow-lg rounded-lg p-6 text-center"
                >
                  <Avatar
                    src={interview.avatar}
                    size={96}
                    className="mx-auto mb-4"
                  />
                  <Title level={4} className="mb-2 text-lg font-medium">
                    {interview.name}
                  </Title>
                  <Typography.Text type="secondary" className="block mb-4">
                    {interview.role}
                  </Typography.Text>
                  <Paragraph className="text-gray-600">
                    {interview.content}
                  </Paragraph>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section>
        <Title
          level={3}
          className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-6"
        >
          Testimonials
        </Title>
        <div className="flex justify-center items-center">
          <Carousel
            autoplay
            dotPosition="bottom"
            className="max-w-md md:max-w-lg lg:max-w-xl w-full"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <Card
                  bordered={false}
                  className="bg-white shadow-lg rounded-lg p-6 text-center"
                >
                  <Avatar
                    src={testimonial.avatar}
                    size={96}
                    className="mx-auto mb-4"
                  />
                  <Title level={4} className="mb-2 text-lg font-medium">
                    {testimonial.name}
                  </Title>
                  <Typography.Text type="secondary" className="block mb-4">
                    {testimonial.role}
                  </Typography.Text>
                  <Paragraph className="text-gray-600">
                    {testimonial.content}
                  </Paragraph>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default CulturalInterviewsAndTestimonials;
