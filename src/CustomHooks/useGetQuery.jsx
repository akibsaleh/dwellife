import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import queryString from 'query-string';

const useGetQuery = (url, key, query, cred) => {
  const getData = async (url, query) => {
    try {
      const response = await axios.get(`${url}?${queryString.stringify(query)}`, { withCredentials: cred });
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [key, query],
    queryFn: () => getData(url, query, cred),
  });

  return { isLoading, error, data };
};

export default useGetQuery;
