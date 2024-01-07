import React from "react";
import ResturantCard from "./ResturantCard";
import { FaHotel } from "react-icons/fa6";

function SessionResturant() {
  return (
    <section className="flex flex-col gap-2 w-full justify-center">
      <div className="flex gap-3">
        <FaHotel size={40} className="text-orange-600" />
        <h2 className="text-2xl">Suggested resturants</h2>
      </div>
      <div className="flex gap-6 overflow-x-auto">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </section>
  );
}

export default SessionResturant;
