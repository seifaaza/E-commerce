
import MieuxItem from "./MieuxItem";
import MieuxData from "./MieuxData";

export default function Raisons() {
  const MieuxItems = () => {
    return MieuxData.map((item, index) => {
      return (
        <MieuxItem
          key={index}
          icon={item.icon}
          content={item.content}
          delay={index * 100}
        />
      );
    });
  };
  return (
    <div className="font-main py-10 px-3 flex flex-col justify-center tablet:px-8 tablet:justify-start items-center gap-8 laptop:px-0 ">
      <h1 className="h-fit text-title text-center tablet:text-large bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 laptop:mb-5">
        Ce qui est mieux pour <span className="whitespace-nowrap">vous !</span>
      </h1>
      <div className="flex flex-col w-full justify-between tablet:flex-row-reverse items-center gap-10">
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-5">
          <MieuxItems />
        </div>
        <img src="/assets/images/design.png" alt="" className="image-size" />
      </div>
    </div>
  );
}
