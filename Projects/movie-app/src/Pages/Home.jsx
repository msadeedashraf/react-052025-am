import React, { useState } from 'react'
import MovieCard from '../components/MovieCard';
const Home = () => {

    const [searchQuery, setSearchQuery] = useState();

    const movies = [ 
        {id:1, title:"Matrix", release_date:"1999"},
        {id:2, title:"Spiderman", release_date:"2000"},
        {id:3, title:"Speed", release_date:"1990"},
    ]
    const handleSearch = (e) => { 
        e.preventDefault();

        alert(searchQuery);

        //setSearchQuery("----")


    };
  return (
    <div className='home'>

        <form onSubmit={handleSearch} className='search-form'>
            <input 
            
            type="text" 
            placeholder='Search for movies...' 
            className='search-input' 
            value={searchQuery}
            onChange={(e) =>  setSearchQuery(e.target.value)}
            
            />
            <button type='submit' className='search-button'>Search</button>
        </form>
        <div className="movie-grid">
            { movies.map( (m) =>  m.title.toLowerCase().startsWith(searchQuery) && ( 
                                    <MovieCard movie={m} key={m.id}/>   
                                    )  
                        ) 
            }
        </div>
      
    </div>
  )
}

export default Home
