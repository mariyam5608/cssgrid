import Image from "next/image";

export default function Home() {
  return (
  <>
    <div className="grid-container text-slate-950 bg-orange-100">
      
<div className="text-center rounded-md row-start-1 row-end-12 col-start-1 col-end-3 pt-2 bg-[#40e0d0]"><h2 className="font-bold">AG1</h2><p>2 of 10</p></div>

<div className="flex flex-col justify-between leading-loose text-center rounded-md row-start-1 row-end-12 col-start-3 col-end-8 bg-yellow-100 pt-2 "><h2 className="font-bold">AG2</h2><p>6 of 10</p>
  <div className="flex justify-between h-1/5">
    <div className=" bg-[#F2A2B0] w-[48%] rounded-md pt-2"><h2 className="font-bold">AG4</h2><p>3 of 6</p></div>
    <div className=" bg-[#F2A2B0] w-[48%] gap-x-[2%] rounded-md pt-2"><h2 className="font-bold">AG5</h2><p>3 of 6 (omega)</p></div>
  </div>
  
  <div className="flex justify-between gap-x-[2%] row-start-5 row-end-12">
  <div className="text-center rounded-md w-1/2 col-start-3 col-end-5 pt-2 bg-[#f2826d]"><h2 className="font-bold">AG6</h2><p>2 of 6</p></div>
<div className=" text-center rounded-md col-start-5 col-end-8 w-full bg-[#ffde7e] pt-2"><h2 className="font-bold">AG7</h2><p>4 of 6 (omega)</p>
  <div className="flex justify-between">
  <div className="bg-[#F2A2B0] w-[48%] rounded-md pt-2"><h2 className="font-bold">AG8</h2><p>2 of 4</p></div>
  <div className="bg-[#F2A2B0] w-[48%] rounded-md pt-2"><h2 className="font-bold">AG9</h2><p>2 of 4 (omega)</p></div></div>
  <div className="text-center rounded-md col-start-4 col-end-8 pt-2 bg-[#dda0dd] w-full
  "><h2 className="font-bold">AG10</h2><p>auto</p></div>
  </div>
  </div>
  </div>
  <div className="text-center rounded-md row-start-1 row-end-12 col-start-8 col-end-10 pt-2 bg-[#40e0d0]">
    <h2 className="font-bold">AG3</h2><p>2 of 10 (omega)</p>
  </div>
  </div>
  </>
  );}