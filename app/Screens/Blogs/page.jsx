'use client';
import Blogs from '@/app/components/Blog/Blogs';
import Footer from '@/app/components/Footer/Footer';
import Header from '@/app/components/Header/Header';
import { blogs } from '@/app/components/json/blogs';
import React, { useState, useEffect } from 'react';
import styles from './blogs.module.css';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';

export default function Page() {
  const [sort, setSort] = useState(false); // false = Sorted by Latest, true = Sorted by Oldest
  const [sortedBlogs, setSortedBlogs] = useState(blogs);

  // Handle sorting when the user toggles the sort button
  const handleSort = () => {
    setSort(!sort);
    
  };

  // Update the sorted blogs whenever the `sort` state changes
  useEffect(() => {
    const sorted = [...blogs]; // Create a shallow copy of the blogs array
    if (sort) {
      // Sort blogs by Oldest (ascending date)
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
      // Sort blogs by Latest (descending date)
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setSortedBlogs(sorted); // Update the state with the sorted blogs
  }, [sort]); // Re-run the effect whenever `sort` changes

  return (
    <div>
      <Header />
      <div
        className="h-[27vh] pt-28 flex flex-col justify-center items-center"
        id={styles.blogs}
      >
        <h1 className="text-white font-bold text-lg">Blogs</h1>
        <p className="text-white">Read Our Latest Blogs and Stay Updated</p>
      </div>
      <div className="p-4">
        <div className="justify-between flex sticky top-24 pt-7 bg-white z-20 px-2 items-center pb-6">
          <p className="bg-green-100 px-2">
            {sort ? 'Sorted By Oldest' : 'Sorted By Latest'}
          </p>
          <div
            className="flex items-center gap-1 bg-green-100 rounded-sm px-2 cursor-pointer"
            onClick={handleSort}
          >
            <div className="bg-green-500 rounded-sm">
              <HiOutlineAdjustmentsVertical className="text-white" />
            </div>
            Sort
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {sortedBlogs.map((blog) => (
            <div key={blog.id}>
              <Blogs
                image={blog.image}
                desc={blog.desc}
                title={blog.title}
                date={blog.date}
                path={blog.path}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
