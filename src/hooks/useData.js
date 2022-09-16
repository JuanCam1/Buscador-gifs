/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const useData = (key) => {
  const [dataResp, setDataResp] = useState([]);
  const [loading, setLoading] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [search, setSearch] = useState('futbol');

  const [storedValue, setStoredValue] = useState();
    
    
    // try {
    //   const item = localStorage.getItem(key);
    //   return item ? JSON.parse(item) : search;
    // } catch (error) {
    //   console.error(error);
    //   return search;
    // }
 


  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=48&api_key=pFSytEZM2kPQ3Q43n34WSsdOHmbambJB`;
  
  useEffect(() => {

    try {
      const item = localStorage.getItem(key);
      setSearch(JSON.parse(item) || search)
    } catch (error) {
      console.error(error);
      setSearch(search);
    }

    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((resp) => resp.json())
      .then(({ data }) => {
        console.log(data);
        setDataResp(data);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [search]);

  function handleOnClick() {
    setSearch(valueInput);
    setValue(valueInput);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    setValueInput(value);
  }  

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loading,
    dataResp,
    valueInput,
    handleOnClick,
    handleOnChange,
  };
};

export default useData;
