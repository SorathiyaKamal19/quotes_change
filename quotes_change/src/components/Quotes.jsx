import axios from "axios"
import { useEffect, useState } from "react"
const Quotes = () => {
    const [quotes,setQuotes] = useState([])
    const [currentIndex,setCurrentIndex]=useState(0)
     
    useEffect ( ( ) =>{
        axios.get("https://dummyjson.com/quotes")
    .then(( response) => {
        setQuotes(response.data.quotes) 
    })
    .catch((error) =>{
        console.log(error)
    })
    },[])

    const quoteChange= () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }


  return (
    <>
        <div>
            {quotes.length > 0 && (
                <div>
                    <h1>{quotes[currentIndex].quote}</h1>
                    <p>{quotes[currentIndex].author}</p>
                    <button onClick={quoteChange}>Get Quote</button>
                </div>
            )}
        </div>

    </>
    
  )
}

export default Quotes