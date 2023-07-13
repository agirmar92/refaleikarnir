import CoverPhoto from "@/components/CoverPhoto";
import YearSelector from "@/components/YearSelector";

const RefaleikarnirFrontPage = () => (
  <>
    <CoverPhoto>
      <YearSelector />
    </CoverPhoto>
    {/* Mock content */}
    <div className="flex flex-col space-y-3 p-3 bg-winter relative z-10">
      <div className="w-full h-40 bg-white rounded-[4px]" />
      <div className="w-full h-40 bg-white rounded-[4px]" />
      <div className="w-full h-40 bg-white rounded-[4px]" />
      <div className="w-full h-40 bg-white rounded-[4px]" />
      <div className="w-full h-40 bg-white rounded-[4px]" />
    </div>
  </>
);

export default RefaleikarnirFrontPage;
