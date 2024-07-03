import { useState, useEffect } from 'react';

const useFetch = (url) => {
 
  const[books , setBooks] = useState([])
  const[error , setError] = useState("")
  const [loading , setLoading] = useState(true)
  
  useEffect(() => {
    
    setTimeout(()=>{
      fetch(url)
    .then((res) =>{
      if(res.ok != true){
        throw Error("An error fetching the data")
      }
      console.log(res)
      return res.json()

    })
    .then((value) =>
    {
      console.log(value)
      setBooks(value.items)
      setLoading(false)
    })
    .catch((err)=>{
      setError(err.message)
    })
    } , 3500)

    clearTimeout()
  }, [url])

  return {  books, loading , error };
};

export default useFetch;
