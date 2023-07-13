import Image from "next/image";

const RefaleikarnirFrontPage = () => (
  <>
    <div className="w-[100vw] h-[100vw] relative z-0">
      <div className="w-full h-full bg-winter opacity-50 absolute z-10" />
      <div className="w-full h-full bg-coverPhoto opacity-50 bg-fixed bg-contain" />
    </div>
    <div className="flex flex-col space-y-3 p-3">
      <div className="w-full h-40 bg-white rounded-[4px]" />
      <div className="w-full h-40 bg-white rounded-[4px]" />
      <div className="w-full h-40 bg-white rounded-[4px]" />
      <div className="w-full h-40 bg-white rounded-[4px]" />
      <div className="w-full h-40 bg-white rounded-[4px]" />
    </div>
  </>
);

export default RefaleikarnirFrontPage;
