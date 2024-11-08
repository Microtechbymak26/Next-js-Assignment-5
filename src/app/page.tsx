import React from "react";

export default function Home() {
  return (
  <div className="w-full h-screen">
  
      <header className="w-full bg-[#a6a07b] h-[14%] ">
       
          <h1 className=" w-[439px] h-[94px] font-rye text-[75px] leading-[93.75px] top-[20px] left-[30px] py-4 px-4 text-white">MANZZARI</h1>
        
      </header>
        <div className="flex items-center justify-center w-full h-[86%]">

         <div className="flex w-[85%] items-center justify-center h-[70%]"> 

          <div className="flex flex-col justify-center h-[100%] w-[70%]">

           <h2 className="text-[33px] font-bold text-gray-900 w-[496px] h-[189px] ">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE     
           </h2>
          
           <p className="w-[670px] h-[147px] text-[24px] text-[#787054] "> An example of intricate workmanship and detail, elegant necklaces
             and long and short chains form a part of our desirable collection.
           </p>
            
            <button className="bg-[#a6a07b] text-white py-2 px-6 rounded hover:bg-[#8f8a6b] transition duration-200 w-[288px]">
             Explore Now
            </button>
 
            </div>

         
           <div className="w-[30%] h-[100%] flex items-center justify-center bg-[url('/image/Logo.jpg')] bg-no-repeat bg-center bg-contain">
           </div>

           </div>

        </div>
        </div>
  );
}
