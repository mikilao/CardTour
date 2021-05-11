import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([])

// async fetch function
const fetchTour = async () => {
  setLoading(true);
  try{
  const response = await fetch(url);
  const tours = await response.json();
  setTours(tours)
  setLoading(false);
}
  catch(error){
    setLoading(false);
    console.log("Error, try again")
  }
//console.log(tours)

}
useEffect(() => {
  fetchTour();
}, [])
  if(loading){
  return( <section>
    <Loading/>
  </section>
  )}else{
  return <main><Tours tours={tours} /> </main>
}}

export default App
