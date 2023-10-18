import { useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = ({endpoint, query}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  console.log(endpoint, query)
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: 'Python developer in Texas, USA',
      page: '1',
      num_pages: '1'
    },
    headers: {
      'X-RapidAPI-Key': 'cd3f9bebc1msh7e8accecf406fc3p1fb39ajsn27f8a6ce950f',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try{
      const response = await axios.request(options);
      setData(response.data.data)
      console.log(response.data)
      setIsLoading(false)
    } catch (error) {
      setError(error);
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(()=> {
    fetchData();
  }, []);

  const refetch = ( ) => {
    setIsLoading(true);
    fetchData();
  }

  return {data, isLoading, error, refetch}

}

export default useFetch