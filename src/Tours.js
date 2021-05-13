import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return(
       <main className="containerflex justify-center">
      <div >
          <h2 className=" px-4 my-4 text-5xl">Tours to take</h2>
         <span />
      </div>
      <div className="">
          {tours.map((tour) => {
              return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
      </div>
      </main>
  )};

export default Tours;
  