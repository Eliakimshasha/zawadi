'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import { facts } from '../json/facts';


function Page() {
    // State to hold the current count values for all the fact counters
  const [countValues, setCountValues] = useState(
    facts.map(() => 0), // Initialize all counters at 0
  );

  // Use state to track if counting should start (triggered by scroll)
  const [hasStartedCounting, setHasStartedCounting] = useState(
    facts.map(() => false), // Initialize as false to prevent immediate counting
  );

  // Define the function to start counting
  const startCounting = (index, endValue) => {
    if (hasStartedCounting[index]) return; // Prevent multiple counting triggers

    let startValue = 0;
    const interval = 2000; // Total duration of the animation
    const duration = Math.floor(interval / endValue); // Calculate step duration

    const counterInterval = setInterval(() => {
      startValue += 1;
      setCountValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index] = startValue;
        return newValues;
      });

      if (startValue === endValue) {
        clearInterval(counterInterval); // Stop animation when end value is reached
        setHasStartedCounting((prevState) => {
          const updatedState = [...prevState];
          updatedState[index] = true; // Mark that counting for this box has completed
          return updatedState;
        });
      }
    }, duration);
  };

  // Use IntersectionObserver to trigger counting when the element comes into view
  useEffect(() => {
    const observerOptions = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Start counting when 50% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && !hasStartedCounting[index]) {
          // Only start counting if the box has not started counting yet
          startCounting(index, facts[index].number);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    // Observing each fact box
    const factElements = document.querySelectorAll('.fact');
    factElements.forEach((element) => observer.observe(element));

    // Cleanup observer when component is unmounted
    return () => {
      factElements.forEach((element) => observer.unobserve(element));
    };
  }, [hasStartedCounting]); // Trigger the observer based on changes to hasStartedCounting state

  return (
    <div>
        <div className="bg-blue-50 p-4">
          <h1 className="font-title font-semibold text-black text-lg text-center">
            Zawadi Agrifood Company Ltd at a Glance
          </h1>
          <p className="text-center text-black">
            Key Facts and Figures about Our Soft-Commodity Trading Company
          </p>
          <div className="grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-3">
            {facts.map((fact, index) => (
              <div
                key={fact.id}
                className="fact  text-white bg-teal-800 py-4 px-1 text-center rounded-sm m-4 flex flex-col justify-center items-center"
              >
                <div>{fact.icon}</div>
                <h1 className="font-bold text-xl font-title">
                  {countValues[index]}+
                </h1>
                <p className="font-paragraph text-sm">{fact.para}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Page