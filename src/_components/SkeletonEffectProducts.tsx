"use client";

const SkeletonEffectProducts = () => {
  return (
    <div className="gap-3 grid bg-blue grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center">
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>{" "}
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>{" "}
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>{" "}
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>{" "}
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>{" "}
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>{" "}
      <div className="h-[225px] w-[250px]  bg-slate-200 animate-pulse rounded-lg "></div>
    </div>
  );
};

export default SkeletonEffectProducts;
