export default function Loader() {
  return (
    <div className="flex flex-col items-center mt-16 gap-6 text-gray-500 text-[1.4rem]">
      <div className="loader w-[50px] h-[24px] bg-[radial-gradient(circle_at_center,_currentColor_90%,_transparent)_0%_50%,_radial-gradient(circle_at_center,_currentColor_90%,_transparent)_50%_50%,_radial-gradient(circle_at_center,_currentColor_90%,_transparent)_100%_50%] bg-[length:calc(100%/3)_12px] bg-no-repeat animate-loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}
