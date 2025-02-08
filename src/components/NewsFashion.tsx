‘use client’;
import React, { useEffect, useState } from ‘react’;
import axios from ‘axios’;
interface Article {
  source: { name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}
const FashionNews: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(‘’);
  useEffect(() => {
    axios
      .get(‘http://localhost:4000/api/news/latest?q=fashion’)
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Failed to fetch news. ${err}`);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading breaking news...</p>;
  if (error) return <p style={{ color: ‘red’ }}>{error}</p>;
  return (
    <div>
      <h2>Latest Breaking News</h2>
      {articles.map((article, index) => (
        <div
          key={index}
          style={{ borderBottom: ‘1px solid #ddd’, padding: ‘10px 0’ }}>
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{ width: ’100%’, maxHeight: ‘200px’, objectFit: ‘cover’ }}
            />
          )}
          <h3>
            <a href={article.url} target=“_blank” rel=“noopener noreferrer”>
              {article.title}
            </a>
          </h3>
          <p>{article.description}</p>
          <small>
            {article.source.name} -{' ’}
            {new Date(article.publishedAt).toLocaleDateString()}
          </small>
        </div>
      ))}
    </div>
  );
};
export default FashionNews;