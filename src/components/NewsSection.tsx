import React from 'react';
// import NewsCarousel from './NewsCarousel';
interface NewsSectionProps {
  title: string;
  articles: {
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
  }[];
}
const NewsSection: React.FC<NewsSectionProps> = ({ title, articles }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {/* <NewsCarousel articles={articles} /> */}
    </div>
  );
};
export default NewsSection;