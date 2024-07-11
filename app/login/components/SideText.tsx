export default function SideText() {
  return (
    <div className="flex flex-col font-semibold text-xl md:text-3xl mx-8">
      <div className="text-6xl md:text-8xl font-semibold">
        Welcome back to <br></br>{" "}
        <span className="text-[#037A68]">Foursight</span>
      </div>
      <div className="flex flex-col">
        <div className="my-2 mt-4 md:mt-8 md:my-2">
          Practice with virtual money,{" "}
          <span className="text-[#037A68]">in the real market.</span>
        </div>
        <div className=" ">
          Get access to real-time data and graphical analysis for{" "}
          <span className="text-[#037A68]">2000+</span> stocks.
        </div>
      </div>
    </div>
  );
}
