import Link from 'next/link';
import React from 'react';

const Home = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return (
    <div>
      <h1 className="container mx-auto text-3xl font-bold text-center mt-10">Blogs</h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {data.map((item) => (
          <div className="bg-white shadow-md rounded-lg p-6 border border-black" key={item.id}>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <Link href={`/blog/${item.id}`}>
              <button className='btn btn-ghost'>View</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
