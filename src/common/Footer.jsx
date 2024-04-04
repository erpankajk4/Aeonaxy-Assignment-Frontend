import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="p-10 w-full flex gap-y-5 flex-col sm:flex-row flex-wrap justify-between items-center ">
      <Logo fillColor="fill-black" />
      <p className="text-xl">Every idea needs a Medium</p>
      <ul className="flex gap-5 text-xs underline">
        <li className="hover:text-blue"><a href="#">About</a></li>
        <li className="hover:text-blue"><a href="#">Terms</a></li>
        <li className="hover:text-blue"><a href="#">Privacy</a></li>
        <li className="hover:text-blue"><a href="#">Help</a></li>
      </ul>
    </footer>
  );
}
