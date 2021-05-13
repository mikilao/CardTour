//import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "tailwindcss/tailwind.css";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour= (id) =>{ // passed id from destructured state in tours
    const newTours = tours.filter((tour) => tour.id !== id) 
      setTours(newTours);
  }

  
  // async fetch function
  const fetchTour = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error, try again");
    }
    //console.log(tours)
  };
  useEffect(() => {
    fetchTour();
  }, []);
  if (loading) {
    return (
      <section>
        <Loading />
      </section>
    );
       }   if(tours.length === 0){
      return <div>
        <h2 className="inset-x-4 px-4">No more tours</h2>
        <button onClick={fetchTour } className="bg-blue-200 outline py-2  text-md">Refresh?</button>
        </div> 
    }
  else {
    return (
      <main className="container flex  text-center justify-center">
        <Tours removeTour={removeTour} tours={tours} />{" "}
      </main>
    );
  }
}

export default App;
