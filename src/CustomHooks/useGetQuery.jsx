import { useQuery } from '@tanstack/react-query';
import queryString from 'query-string';
import useAxiosPublic from './useAxiosPublic';

const useGetQuery = (url, key, query) => {
  const axiosPublic = useAxiosPublic();
  const getData = async (url) => {
    try {
      const response = await axiosPublic.get(`/api${url}?${queryString.stringify(query)}`);
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
