"use client";

const SkeletonEffectProducts = () => {
  return (
    <div className="gap-2 grid bg-blue grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-content-center content-center ">
      <div className="h-[200px] flex justify-start items-center bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px]  bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px]   bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px]   bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px]   bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px]   bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px]  bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px]   bg-slate-200 animate-pulse rounded-lg"></div>
    </div>
  );
};

export default SkeletonEffectProducts;
