import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <section className="md:min-h-[90vh] h-max w-full flex flex-col justify-center items-center text-white bg-blue border-b-2 py-8 px-5">
      <h1 className="text-6xl md:text-9xl font-[gt-super-400] mb-8 text-center">
        Fuel great thinking.
      </h1>
      <p className="text-xl md:w-1/3 text-center mb-12">
        Become a Medium member to enjoy unlimited access and directly support
        the writers you read most.
      </p>
      <Link to="#">
        <button className="hvr-sweep-to-right btn bg-white text-black md:text-2xl ">
          Get unlimited access
        </button>
      </Link>
    </section>
  );
}
