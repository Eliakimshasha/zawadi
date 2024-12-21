import React from 'react';

function Quote() {
  return (
    <div>
      {' '}
      <div className="bg-gradient-to-t from-teal-900 rounded-t-md to-teal-500 py-4 pb-7 px-4">
        <form action="" method="post" className="w-full px-5">
          <div>
            <p className="text-white font-title font-bold mb-2">Product</p>
            <input
              type="text"
              className="bg-teal-50 rounded-sm w-full py-1 px-2 placeholder-teal-700 text-teal-700 outline-none text-sm"
              placeholder="Quantity"
            />
          </div>

          <div>
            <p className="text-white font-title font-bold mb-2">
              Order Quantity(Metric Tons-MT)
            </p>
            <input
              type="text"
              className="bg-teal-50 rounded-sm w-full py-1 px-2 placeholder-teal-700 text-teal-700 outline-none text-sm"
              placeholder="Quantity"
            />
          </div>

          <div>
            <p className="text-white font-title font-bold mb-2">
              Estimated Price (USD$) for CNF/FOB starting from:
            </p>
            <input
              type="text"
              className="bg-teal-50 rounded-sm w-full py-1 px-2 placeholder-teal-700 text-teal-700 outline-none text-sm"
              placeholder="Quantity"
            />
          </div>

          <div>
            <p className="text-white font-title font-bold mb-2">Name*</p>
            <input
              type="text"
              className="bg-teal-50 rounded-sm w-full py-1 px-2 placeholder-teal-700 text-teal-700 outline-none text-sm"
              placeholder="E.g jane Doe"
            />
          </div>

          <div>
            <p className="text-white font-title font-bold mb-2">Company*</p>
            <input
              type="text"
              className="bg-teal-50 rounded-sm w-full py-1 px-2 placeholder-teal-700 text-teal-700 outline-none text-sm"
              placeholder="E.g text placeholder"
            />
          </div>

          <div>
            <p className="text-white font-title font-bold mb-2">
              Email Address*
            </p>
            <input
              type="text"
              className="bg-teal-50 rounded-sm w-full py-1 px-2 placeholder-teal-700 text-teal-700 outline-none text-sm"
              placeholder="E.g jane@doe.com"
            />
          </div>
          <div>
            <p className="w-full text-center py-2 my-3 bg-teal-950 text-white rounded-full">
              REQUEST FOR PRICING
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Quote;
