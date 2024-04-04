import Pattern1 from "../../../common/Pattern1";
import Pattern2 from "../../../common/Pattern2";

export default function Section2() {
  return (
    <section className="w-full flex-center flex-col md:flex-row bg-blue text-white py-10">
      <div className="w-full flex flex-col flex-1 p-5 lg:p-20 md:border-r-2 border-white">
        <h2 className="w-full text-4xl md:text-5xl font-[gt-super-400] mb-8">
          Get unlimited access to every story.
        </h2>
        <Pattern1 />
        <p className="w-full text-xl mt-8">
          Read any article in our entire library across all your devices — with
          no paywalls, story limits or ads.
        </p>
      </div>
      <div className="md:w-0 md:h-[max-content] w-[100%] h-0 border border-white"></div>
      <div className="w-full flex flex-col flex-1 p-5 lg:p-20 md:border-r-2 border-white">
        <h2 className="w-full text-4xl md:text-5xl font-[gt-super-400] mb-8">
          Support the voices you want to hear more from.
        </h2>
        <Pattern2 />
        <p className="w-full text-xl mt-8">
          A portion of your membership will directly support the writers and
          thinkers you read the most.
        </p>
      </div>
    </section>
  );
}
