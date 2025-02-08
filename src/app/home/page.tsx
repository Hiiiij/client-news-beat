'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsButton from '../../components/NewsButton';
import SearchBar from '../../components/NewsSearchBar';
import NewsCarousel from '../../components/NewsCarousel';
import NewsSection from '../../components/NewsSection';
const categories = [
  'CULTURE',
  'LIFESTYLE',
  'ENTERTAINMENT',
  'TECH & AI',
  'FINANCES',
  'POLITICS',
];
const HomePage = () => {
  const [trendingNews, setTrendingNews] = useState([]);
  const [categoryNews, setCategoryNews] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchTrendingNews = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/news/latest?q=trending');
        setTrendingNews(response.data);
      } catch (error) {
        console.error('Failed to fetch trending news', error);
      }
    };
    fetchTrendingNews();
  }, []);
  useEffect(() => {
    const fetchCategoryNews = async () => {
      for (const category of categories) {
        try {
          const response = await axios.get(`http://localhost:4000/api/news/latest?q=${category}`);
          setCategoryNews((prevState) => ({
            ...prevState,
            [category]: response.data,
          }));
        } catch (error) {
          console.error(`Failed to fetch ${category} news`, error);
        }
      }
    };
    fetchCategoryNews();
  }, []);
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const filterNews = (news) => {
    if (!searchQuery) return news;
    return news.filter((article) => {
      const titleMatch = article.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const contentMatch = article.content
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return titleMatch || contentMatch;
    });
  };
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12 justify-items-center mx-auto max-w-5xl">
        {categories.map((category) => (
          <a href={`#${category}`} key={category}>
            <NewsButton>{category}</NewsButton>
          </a>
        ))}
      </div>
      <div className="p-4 mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>
      <h2 className="text-2xl font-bold mt-6">Breaking News</h2>
      <NewsCarousel articles={filterNews(trendingNews)} />
      {categories.map((category) => (
        <div key={category} id={category}>
          <NewsSection
            title={category}
            articles={categoryNews[category] || []}
          />
        </div>
      ))}
    </div>
  );
};
export default HomePage;