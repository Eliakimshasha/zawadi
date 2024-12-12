'use client';
import React, { useState } from 'react';

function Accordition({ title, desc }) {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-green-100 my-3 py-2 px-2 rounded-sm">
      <div
        className="flex justify-between items-start mb-2 gap-4"
        onClick={() => setShow(!show)}
      >
        <p>{title}</p>
        {show ? (
          <p className="text-xl bg-green-300  w-7 flex justify-center items-center">
            -
          </p>
        ) : (
          <p className="text-sm bg-green-300  w-7 flex justify-center items-center">
            +
          </p>
        )}
      </div>
      {show && <p>{desc}</p>}
    </div>
  );
}

export default Accordition;
