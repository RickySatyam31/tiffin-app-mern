import React, { useState, useEffect  } from 'react';
import '../Styles/Counter.css';

const Counter = () => {
    const [customerCount, setCustomerCount] = useState(0);
    const [tiffinCount, setTiffinCount] = useState(0);
    const [daysCount, setDaysCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCustomerCount((prevCount) => {
          if (prevCount < 6) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 100);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTiffinCount((prevCount) => {
          if (prevCount < 90) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 100);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDaysCount((prevCount) => {
          if (prevCount < 30) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 100);
  
      return () => {
        clearInterval(interval);
      };
    }, []);

  return (
    <div className="counter">
      <div className="counter__section">
        <p className="counter__number">{customerCount}+</p>
        <p className="counter__label">Current Customers</p>
        <p className="counter__description">"Celebrate the launch of our new service with a special offer: The first 20 customers will enjoy absolutely <b>free delivery</b> for the first 3 months."</p>
      </div>
      <div className="counter__divider"></div>
      <div className="counter__section">
        <p className="counter__number">{tiffinCount}+</p>
        <p className="counter__label">Tiffins Delivered</p>
        <p className="counter__description">"Delivering smiles, join our growing family of satisfied customers as we bring delicious meals straight to your doorstep. Taste the joy of flavor with every delivery."</p>
      </div>
      <div className="counter__divider"></div>
      <div className="counter__section">
        <p className="counter__number">{daysCount}+</p>  
        <p className="counter__label">Days Worked</p>
        <p className="counter__description">"Our journey is defined by the dedication and hard work we put into every day, ensuring that you receive the best service with each passing day."</p>
      </div>
    </div>
  );
};

export default Counter;
