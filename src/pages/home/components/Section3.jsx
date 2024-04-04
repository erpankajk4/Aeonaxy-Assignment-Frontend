import img from "../../../assets/img/1.jpg";
export default function Section3() {
  return (
    <section className="w-full flex-center">
      <div className="max-w-[730px] p-5">
        <h2 className="w-full text-4xl md:text-5xl font-[gt-super-400] mb-8 text-center pt-20">
          "Why I'm a Medium Member..."
        </h2>
        <div className="w-full flex justify-center max-md:flex-wrap gap-10">
          {/* Avatar Image  */}
          <div className="flex gap-3">
            <div className="rounded-full w-[10rem] h-[10rem] overflow-hidden">
              <img
                src={img}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="w-[5rem] h-[10rem] bg-[#F55081]"
              style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }}
            ></div>
            <div
              className="w-[2rem] h-[10rem] bg-[#36A243]"
              style={{ clipPath: "ellipse(50% 45% at 50% 50%)" }}
            ></div>
          </div>
          {/* Text  */}
          <div>
            <p className="text-2xl mb-8">
              "I love Medium’s membership — it gives me access to the stories I
              love by the writers I love, and it allows me to help support those
              writers financially."
            </p>
            <p className="font-[gt-super-400] text-2xl text-center pb-10 w-max max-md:w-full">
              Kayt Molina <br /> &#8594;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
