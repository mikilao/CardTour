
import React, { useState } from 'react';

const Tour = ({id, image,info,name, price}) => {
    
  return <main><article>
      <img src={image} alt={name}/>
      <footer>
          <div className='tour'>
              <h4>{name}</h4>
              <h4 className="price">${price} USD</h4>

          </div>
      </footer>
      <div>
          <p>{info}</p>
      </div>
      </article></main>

};

export default Tour;