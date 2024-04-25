
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Newslist from './components/Newslist';
import  Typewriter  from 'typewriter-effect';


function App() {
  const [news, setNews] = useState([]);
  
  const getarticle =async() =>{
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-03-25&sortBy=publishedAt&apiKey=f3326d5dbace4836997e644d9b7cf784');
      console.log(response);
      setNews(response.data.articles)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getarticle()
  },[])

  
  return (
    <div className="App">
      <div className="writer" style={{color:'white'}}>
      <Typewriter
      options={{
      strings: ['Technology News'],
      autoStart: true,
      loop: true,
      }}
      />
      </div>
      <Newslist  list={news}  />
    
    </div>

  );
}

export default App;
