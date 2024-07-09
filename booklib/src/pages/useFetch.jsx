import { useState, useEffect } from 'react';

const useFetch = (url) => {
 
  const[books , setBooks] = useState([])
  const[error , setError] = useState("")
  const [loading , setLoading] = useState(true)
  
  
  
  useEffect(() => {
    
     setTimeout(()=>{
      

      fetch(url)
      .then((response) =>{
        setLoading(true)
        if(response.ok!=true){
          throw Error("An error occured")
        }
        console.log(response)
        return response.json()
      })
      .then((value)=>{
        setBooks(value.items)
        setLoading(false)
        setError(false)
      })
      .catch((err)=>{
        setLoading(false)
        setError(err.message)
        setBooks([])
      })
      } , 1000
    )
  }, [url])

  return {  books, loading , error  };
};

export default useFetch;
