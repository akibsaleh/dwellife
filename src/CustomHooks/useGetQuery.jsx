import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import queryString from 'query-string';

const useGetQuery = (url, key, query) => {
  const getData = async (url) => {
    try {
      const response = await axios.get(`http://localhost:5000/api${url}?${queryString.stringify(query)}`);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [key, query],
    queryFn: () => getData(url, query),
  });

  return { isLoading, error, data };
};

export default useGetQuery;
