import { DiscoverPattern, ExplorePattern } from "../../../common/Pattern3";
import { Link } from "react-router-dom";

export default function Section4() {
  return (
    <section className="w-full bg-bgSky border-y-2 border-black">
      <div className="w-full flex flex-col items-center px-5">
        <h1 className="text-5xl md:text-7xl lg:text-9xl  font-[gt-super-400] pt-20 pb-10 text-center">
          Take your mind <br /> in new directions.
        </h1>
        <Link to="#">
          <button className="hvr-sweep-to-right-black btn bg-black text-white md:text-2xl border border-black mb-16">
            Get unlimited access
          </button>
        </Link>
      </div>
      <div className="hidden w-full lg:flex lg:justify-center xl:justify-between text-xl leading-[1.35rem] -mt-[8rem] overflow-x-hidden">
        <DiscoverPattern />
        <ExplorePattern />
      </div>
    </section>
  );
}
