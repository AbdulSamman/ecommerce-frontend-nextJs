"use client";

const SkeletonEffectProducts = () => {
  return (
    <div className="gap-2 grid bg-blue grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center">
      <div className="h-[200px] lg:w-[230px] sm:w-[190px]   animate-pulse rounded-lg"></div>
      <div className="h-[200px] lg:w-[230px]  sm:w-[190px] bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px] lg:w-[230px] sm:w-[190px]  bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px] lg:w-[230px] sm:w-[190px]  bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px] lg:w-[230px] sm:w-[190px]  bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px] lg:w-[230px] sm:w-[190px]   bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px] lg:w-[230px] sm:w-[190px]  bg-slate-200 animate-pulse rounded-lg"></div>
      <div className="h-[200px] lg:w-[230px] sm:w-[190px]  bg-slate-200 animate-pulse rounded-lg"></div>
    </div>
  );
};

export default SkeletonEffectProducts;
