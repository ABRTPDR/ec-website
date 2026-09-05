import axios from 'axios';

// Defining WordPress article shape
export interface Notice {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export const wpApi = axios.create({
  baseURL: 'https://public-api.wordpress.com/wp/v2/sites/bitselections.wordpress.com',
});

export const fetchArticlesByCategory = async (categoryId: number): Promise<Notice[]> => {
  const response = await wpApi.get(`/posts?categories=${categoryId}&per_page=50&_embed`);
  return response.data;
};