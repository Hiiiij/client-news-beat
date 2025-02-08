'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface NewsCarouselProps {
  articles: {
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
  }[];
}
const NewsCarousel: React.FC<NewsCarouselProps> = ({ articles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <div className="slick-prev custom-arrow absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-black z-50 cursor-pointer">
        &#8592;
      </div>
    ),
    nextArrow: (
      <div className="slick-next custom-arrow absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-black z-50 cursor-pointer">
        &#8594;
      </div>
    ),
  };
  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index} className="p-4">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
            )}
            <h3 className="text-lg font-bold mt-2">{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} className="text-blue-500">
              Read more
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default NewsCarousel;