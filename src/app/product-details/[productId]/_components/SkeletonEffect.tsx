"use client";

const SekeletonEffect = () => {
  return (
    <div className="px-2 flex flex-col gap-y-4">
      <div className="h-[30px] w-[200px]  bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[20px] w-[100px] bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[20px] w-[200px] mt-5 bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[40px] flex items-center gap-x-3 bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[25px] w-[300px] bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[30px] w-[200px] bg-slate-200 animate-pulse rounded-lg "></div>
    </div>
  );
};

export default SekeletonEffect;
