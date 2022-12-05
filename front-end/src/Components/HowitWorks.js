import React from 'react'
import {HiLocationMarker } from '@react-icons/all-files/hi/HiLocationMarker';
import {FaConciergeBell} from '@react-icons/all-files/fa/FaConciergeBell'
 import {GiTakeMyMoney} from '@react-icons/all-files/gi/GiTakeMyMoney'
import {GiFullPizza} from '@react-icons/all-files/gi/GiFullPizza'

export default function HowitWorks() {
  return (
    <div className="w-full py-10 px-0 md:mt-0 bg-white"> 
        <h3  className="py-8 text-smakorange text-7xl md:text-7xl font-extrabold font-[Fraunces] text-center">How Does It Work?</h3>
        <div className="flex flex-row p-2">
        <div className="grid grid-cols-4 grid-flow-row auto-rows-max gap-10">
          <div className="bg-smakorange border-0 py-6 rounded-3xl items-center text-center ">
            <HiLocationMarker className="w-full h-20  fill-white  " />
            <div className="flex-row">
              <h4 className="my-4 text-2xl text-white text-center font-extrabold font-[Fraunces]">
                Find Nearby<br/>Restaurants
              </h4>
              <p className=" text-xl text-white text-center font-[Fraunces] font-medium">
                Set your location</p>
            </div>
          </div>
          <div className="py-2 px-4  bg-smakorange border-0 py-4 px-4 rounded-3xl items-center text-center">
            <FaConciergeBell className="w-full h-20  fill-white " />
            <div className="flex-row">
              <h4 className="my-4 text-2xl text-white text-center font-extrabold font-[Fraunces]">
                Get <br/>Matched
              </h4>
              <p className=" text-xl text-white text-center font-[Fraunces]font-medium">
              Take our quiz so we can cater an order for you or     
 </p>
<b> <a href="/login" class="text-white dark:text-smakHiglight hover:underline  hover:text-smakHighlight">SKIP!</a></b>

            </div>
          </div>
          <div className="py-2 px-4 border-gray-400 bg-smakorange border-0 py-4 px-4 rounded-3xl items-center text-center ">
            <GiTakeMyMoney className="w-full h-20 fill-white  " />
            <div className="flex-row">
              <h4 className="my-4 text-2xl text-white text-center font-extrabold font-[Fraunces]">
               Pay In <br/> Advance  
              </h4>
              <p className=" text-xl text-white text-center font-[Fraunces] font-medium">
                It's quick. safe, and simple
              </p>
            </div>
          </div>
          <div className="py-2 px-4 border-gray-400 bg-smakorange border-0 py-4 px-4 rounded-3xl items-center text-center">
            <GiFullPizza className="w-full h-20  fill-white " />
            <div className="flex-row">
              <h4 className="my-4 text-2xl text-white text-center font-extrabold font-[Fraunces]">
                Enjoy Your<br/> Meal!
              </h4>
              <p className=" text-xl text-white text-center font-[Fraunces] font-medium">
                Food is made and delivered to your home.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
