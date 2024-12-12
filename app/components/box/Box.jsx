import React from 'react';
import styles from './Box.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Box({ icon, title, para }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="px-3 py-6 my-2 "
      id={styles.box}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flex gap-3 items-center mb-2">
        <p>{icon}</p>
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
      <p style={{ color: 'rgba(45, 46, 1, 0.597)' }}>{para}</p>
    </div>
  );
}

export default Box;
