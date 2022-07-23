import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'


export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')


//* type - /images,/news,/search,/videos
const getResults = async (url) => {
  setLoading(true);
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'GET',
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'EU',
      'X-RapidAPI-Key':process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
  })
  const data = await res.json()

  setResults(data)
  setLoading(false)
}

return (
  <ResultContextProvider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
    {children}
  </ResultContextProvider>
);
}

export const useResultContext =()=>useContext(ResultContext)