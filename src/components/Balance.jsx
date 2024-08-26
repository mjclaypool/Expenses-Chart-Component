import logo from "../../images/logo.svg"

export default function Balance() {
  return (
    <div className="flex justify-between items-center w-full max-w-[343px] lg:max-w-[540px] font-dm-sans bg-primary-soft-red p-6 lg:px-8 lg:py-7 rounded-lg lg:rounded-2xl">
      <div>
        <h1 className="text-[15px] lg:text-base text-neutral-pale-orange lg:pb-2">My balance</h1>
        <h2 className="font-bold text-2xl lg:text-3xl text-neutral-pale-orange">$921.48</h2>
      </div>
      <img src={logo} alt="Logo for expenses chart company" className="h-10 lg:h-12 object-contain" />
    </div>
  )
}