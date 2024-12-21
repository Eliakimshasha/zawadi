'use client';
import React, { useState } from 'react';

function Accordition({ title, desc }) {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-teal-200 my-3 py-2 px-2 rounded-sm">
      <div
        className="flex justify-between items-start mb-2 gap-4 "
        onClick={() => setShow(!show)}
      >
        <p>{title}</p>
        {show ? (
          <p className="text-xl bg-teal-800  w-7 flex justify-center items-center text-white">
            -
          </p>
        ) : (
          <p className="text-sm bg-teal-800  w-7 flex justify-center items-center text-white">
            +
          </p>
        )}
      </div>
      {show && <p>{desc}</p>}
    </div>
  );
}

export default Accordition;
