"use client";

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const View = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if (!res.ok) throw new Error("Failed to fetch data");
                const postData = await res.json();
                setData(postData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="container mx-auto p-5">
            {data ? (
                <div className="bg-white shadow-md rounded-lg p-6 mt-10">
                    <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                    <p className="text-gray-700">{data.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default View;
