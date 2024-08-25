import logo from "../../images/logo.svg"

export default function Balance() {
  return (
    <div className="flex justify-between items-center font-dm-sans bg-primary-soft-red p-6 mx-4 rounded-lg">
      <div>
        <h1 className="text-[15px] text-neutral-pale-orange">My balance</h1>
        <h2 className="font-bold text-2xl text-neutral-pale-orange">$921.48</h2>
      </div>
      <img src={logo} alt="Logo for expenses chart company" className="h-10 object-contain" />
    </div>
  )
}