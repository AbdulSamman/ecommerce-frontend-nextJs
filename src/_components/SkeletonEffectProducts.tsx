"use client";

const SkeletonEffectProducts = () => {
  return (
    <div className="wrap w-[full] gap-3 grid bg-blue grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[225px] w-[250px] bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[225px] w-[250px]] bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[225px] w-[250px] bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[225px] w-[250px] bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[225px] w-[250px] bg-slate-200 animate-pulse rounded-lg "></div>
    </div>
  );
};

export default SkeletonEffectProducts;
