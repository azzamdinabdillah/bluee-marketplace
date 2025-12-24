import logo from "/icons/logo.svg";

export default function Navbar() {
  return (
    <div className="p-8 flex gap-6 border-b border-stroke-color">
      <div className="flex gap-3 items-center">
        <img src={logo} alt="" />
        <p className="font-extrabold text-2xl">BLUEE</p>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
