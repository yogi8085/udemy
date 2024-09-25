import 'bootstrap/dist/css/bootstrap.min.css'; // If not already imported
import 'bootstrap-icons/font/bootstrap-icons.css'; // Use Bootstrap Icons from CDN
import { useState } from 'react';

function StarRating() {
  let star = 10;
  let [hover, setHover] = useState(0); // State to track the hover effect

  function handleChange(n) {
    setHover(n); // Update state correctly
  }

  return (
    <>
      <div className="container mt-5">
        <h1>React Stars</h1>
        {/* Display stars and change color based on hover */}
        {[...Array(star)].map((_, i) => {
          return (
            <span 
              key={i} 
              className={i < hover ? 'text-warning' : null} // Apply 'text-warning' class for hover effect
              onMouseOver={() => handleChange(i + 1)} // Set hover state
            >
              <i className="bi bi-star-fill"></i> {/* Star icon */}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default StarRating;
