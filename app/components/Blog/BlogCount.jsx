// 'use client';
// import React, { useEffect, useState } from 'react';
// import { FaXTwitter } from 'react-icons/fa6';
// import { SlSocialFacebook } from 'react-icons/sl';
// import { FaInstagram } from 'react-icons/fa';
// import { SlSocialLinkedin } from 'react-icons/sl';
// import { IoCaretBackSharp } from 'react-icons/io5';

// function BlogCount() {

//   const [elapsedTime, setElapsedTime] = useState(0);

//   useEffect(() => {
//     // Set up an interval to count every second
//     const interval = setInterval(() => {
//       setElapsedTime((prevTime) => prevTime + 1);
//     }, 1000); // Update every second

//     // Cleanup interval when component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   // Convert seconds to minutes, seconds, and hours for the clock display
//   const minutes = Math.floor(elapsedTime / 60);
//   const seconds = elapsedTime % 60;
//   const hours = Math.floor(minutes / 60);
//   const remainingMinutes = minutes % 60;

//   // Decide the time format (min or hrs)
//   let timeDisplay;

//   if (hours > 0) {
//     // Display time in hours with minutes and seconds
//     timeDisplay = `${hours} : ${remainingMinutes} : ${seconds} sec`;
//   } else {
//     // Display time in minutes and seconds
//     timeDisplay = `${remainingMinutes} : ${seconds} sec`;
//   }
//   return (
//     <div>
//       <div className="mt-4 flex flex-col items-center py-4 bg-green-200">
//         <p>
//           Hi 👋, you have Read our blog for:{' '}
//           <span className="bg-green-400 px-2 rounded-sm">{timeDisplay}</span>
//         </p>
//         <p className="text-green-600 text-sm">
//           Please visit Our Social media for more updates
//         </p>
//         <div className="flex gap-2 py-4">
//           <p
//             className="rounded-full p-2"
//             style={{ border: '1px dotted black' }}
//           >
//             <FaXTwitter />
//           </p>
//           <p
//             className="rounded-full p-2"
//             style={{ border: '1px dotted black' }}
//           >
//             <SlSocialFacebook />
//           </p>
//           <p
//             className="rounded-full p-2"
//             style={{ border: '1px dotted black' }}
//           >
//             <FaInstagram />
//           </p>
//           <p
//             className="rounded-full p-2"
//             style={{ border: '1px dotted black' }}
//           >
//             <SlSocialLinkedin />
//           </p>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default BlogCount;
