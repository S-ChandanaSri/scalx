// use client
"use client";


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link';

function Home() {
  const [data, setData] = useState([]);  // Initialize data as an empty array
  const [page, setPage] = useState(1);   // Initialize page state
  const [loading, setLoading] = useState(false);  // Loading state

  const fetchData = async () => {
    const url = `https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=${page}&country=US&sort_by=RELEVANCE&product_condition=ALL`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '6b657d12c2mshe15590b5318b569p15c9dcjsn8ecb9ff1890b',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.get(url, options);
      console.log('Response:', response); // Log entire response for detailed inspection
      
      // Adjust data access based on nested structure
      const newData = response.data.data.products || []; // Ensure correct access to products array
  
      console.log('Fetched data:', newData); // Log fetched data
      setData(prevData => [...prevData, ...newData]);  // Append new data to existing data
    } catch (error) {
      console.error('Error fetching data:', error); // Log any errors that occur
    }
  };

  // Function to fetch more data when scrolling reaches the bottom
  const fetchMoreData = () => {
    setLoading(true);  // Set loading to true before fetching data
    setPage(prevPage => prevPage + 1);  // Increment page number
    fetchData();  // Fetch more data
    setLoading(false);  // Set loading to false after fetching data
  };

  useEffect(() => {
    fetchData();  // Fetch initial data on component mount
  }, []);  // Empty dependency array ensures it runs only once


  



  return (
    <div className="h-screen flex flex-col">
      <header className="h-[191px]">
        <div className="h-[710px]">
          <img src="/images/cover.png" className="w-full h-full object-cover" alt="Cover Image" />
        </div>
      </header>
      <main style={{display:"flex",paddingTop:"540px"}}>
        <div style={{width:"300px",height:"1501px"}}>
          <div className="w-1269px h-1501px border-[1px] border-[0px] border-[0px] border-[0px] border-[1px] border-[solid] border-[#231F201A] ml-[20px]">
            <div className='w-[250px] h-[177px] top-[880px] left-[49px] gap-0 border-[1px] border-[0px] border-[0px] border-[0px] border-[1px] border-[solid] border-[#231F201A]'>
              <div className='w-[250px] h-[43px] top-[880px] left-[49px] gap-0 border-[1px] border-[0px] border-[0px] border-[0px] border-[1px] border-[solid] border-[#231F201A]'>
                <p className='w-[86px] h-[15px] top-[880px] left-[49px] font-[Gotham] text-[16px] font-normal leading-[15.31px] text-left pl-20 pt-2.5'>COMPANY</p>
               
              </div>
              <div className='w-[250px] h-[43px] top-[947px] left-[49px] gap-0 border-[1px] border-[0px] border-[0px] border-[0px] border-[1px] border-[solid] border-[#231F201A]'>
                <p className='w-[86px] h-[15px] top-[880px] left-[49px] font-[Gotham] text-[16px] font-normal leading-[15.31px] text-left  pl-20 pt-2.5'>PRICE</p>
              </div>
              <div className='w-[250px] h-[43px] top-[1014px] left-[49px] gap-0 border-[1px] border-[0px] border-[0px] border-[0px] border-[1px] border-[solid] border-[#231F201A]'>
                <p className='w-[86px] h-[15px] top-[880px] left-[49px] font-[Gotham] text-[16px] font-normal leading-[15.31px] text-left  pl-20 pt-2.5'>CATEGORIES</p>
              </div>
            </div>       
          </div>
        </div>


          <div className="flex-1 ml-8" style={{ width: '1100px', height: '1501px' }}>
            <InfiniteScroll
              dataLength={data.length}  // This is important field to render the next data
              next={fetchMoreData}
              hasMore={true}
              loader={<p className="text-center my-4">Loading...</p>}
              endMessage={
                <p className="text-center my-4"><b>Yay! You have seen it all</b></p>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((product, index) => (
  <div key={index} className="p-4 border border-gray-200 rounded-md shadow-md flex flex-col">
    <div className="flex items-center justify-center mb-2">
      <img src={product.product_photo} alt={product.product_title} className="w-36 h-36 object-cover rounded-md" />
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-medium">{product.product_title}</h3>
        <p className="text-gray-600">${product.product_price}</p>
      </div>
     <Link href={`/productdetails/${product.asin}`}>
     <button  className="mt-auto pl-4 pr-4 pt-1 pb-2 bg-red-700 ml-10">Add to cart</button>

     </Link>

    </div>
  </div>
))}
              </div>
            </InfiniteScroll>
          </div>
      </main>
    </div>
  );
}

export default Home;