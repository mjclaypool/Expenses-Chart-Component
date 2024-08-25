import data from "../../data.json";

export default function Spending() {
  let today = new Date().getDay();
  if (today == 0) {
    today = "sun";
  } else if (today == 1) {
    today = "mon";
  } else if (today == 2) {
    today = "tue";
  } else if (today == 3) {
    today = "wed";
  } else if (today == 4) {
    today = "thu";
  } else if (today == 5) {
    today = "fri";
  } else if (today == 6) {
    today = "sat";
  }

  // for (let i=0; i<data.length; i++) {

  // }

  return (
    <div className="font-dm-sans bg-neutral-pale-orange p-6 mx-4 rounded-lg">
      <h2 className="font-bold text-2xl text-neutral-dark-brown">Spending - Last 7 days</h2>
      <div className="flex justify-between">
        {data.map(day => (
          <div key={day.day} className="flex flex-col items-center mt-12">
            {today == day.day ?
              <div className="bg-primary-cyan h-4 w-8 rounded-sm" />
            :
              <div className="bg-primary-soft-red h-4 w-8 rounded-sm" />
            }
            <p className="text-xs text-neutral-med-brown">{day.day}</p>
          </div>
        ))}
      </div>
      <hr className="border-[1px] border-neutral-cream my-6"/>
      <div className="flex justify-between">
        <div>
          <h3 className="text-[15px] text-neutral-med-brown">Total this month</h3>
          <h4 className="font-bold text-3xl text-neutral-dark-brown">$478.33</h4>
        </div>
        <div className="flex flex-col justify-end">
          <h4 className="font-bold text-[15px] text-right text-neutral-dark-brown leading-none">+2.4%</h4>
          <h3 className="text-neutral-med-brown">from last month</h3>
        </div>
      </div>
    </div>
  )
}