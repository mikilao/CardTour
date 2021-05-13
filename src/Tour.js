import React, { useState } from "react";



const Tour = ({ id, image, info, name, price, removeTour }) => {
  // setting a read more state
  const [readMore, setReadMore] = useState(false);
  
  return (
    <main>
      <article className="max-w-xl px-6 rounded overflow-hidden mt-5 shadow-lg"> 
        <img 
        src={image} 
        alt={name} 
        className="w-full object-cover rounded-t"
        style={{ height: "400px" }} />
        <footer>
          <div className="flex items-center pl-3 text-2xl">
            <h4>{name}</h4>
            <h4 className="px-2">${price} USD</h4>
          </div>
        </footer>
        
        <div>
          <p className="mx-auto display-inline pt-2"> 
            {
              readMore ? info : `${info.substring(0, 300)}...` // setting how many characters toe display before 'read more'
            }
                <button
                class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2"
                onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "read more"}
            </button>
          </p>

          <button 
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" 
          onClick={() => removeTour(id)}>Delete Tour</button> 
        </div>
      </article>
    </main>
  );
};

export default Tour;
