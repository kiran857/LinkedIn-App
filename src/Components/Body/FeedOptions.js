import React from 'react';
import "./FeedOptions.css";

function FeedOptions({Icon,title}) {
  return <div className='feedoptions'>
        {Icon && <Icon className="Iconoptions"/>}
        <h3>{title}</h3>

      
  </div>;
}

export default FeedOptions;
