import data from "../../data.json";

export default function Spending() {
  let today = new Date().getDay();
  let maxHeight = data[0].amount;
  let barElements = {};

  let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
  today = days[today];

  for (let i=0; i<data.length; i++) {
    if (data[i].amount > maxHeight && i !== 0) {
      maxHeight = data[i].amount;
    }
  }

  for (let i=0; i<data.length; i++) {
    let scaledAmount = Math.round(data[i].amount / maxHeight * 100).toString() + "%";
    barElements[data[i].day] = scaledAmount;
  }

  return (
    <div className="w-full max-w-[343px] lg:max-w-[540px] font-dm-sans bg-neutral-pale-orange p-6 lg:px-10 lg:py-8 rounded-lg lg:rounded-2xl">
      <h2 className="font-bold text-2xl lg:text-3xl text-neutral-dark-brown pt-1 pb-5">Spending - Last 7 days</h2>
      <div className="flex justify-between">
        {data.map(day => (
          <div key={day.day} className="flex flex-col items-center mt-12">
            <div className="h-[150px] content-end">
              {today == day.day ?
                <div className="group relative bg-primary-cyan w-8 lg:w-12 rounded-sm lg:rounded-md cursor-pointer hover:bg-opacity-70" style={{height: barElements[day.day]}}>
                  <div className="invisible group-hover:visible absolute -top-12 left-[50%] translate-x-[-50%] bg-neutral-dark-brown rounded-sm lg:rounded-md">
                    <p className="font-bold text-center text-neutral-pale-orange p-2">${day.amount}</p>
                  </div>
                </div>
              :
                <div className="group relative bg-primary-soft-red w-8 lg:w-12 rounded-sm lg:rounded-md cursor-pointer hover:bg-opacity-70" style={{height: barElements[day.day]}}>
                  <div className="invisible group-hover:visible absolute -top-12 left-[50%] translate-x-[-50%] bg-neutral-dark-brown rounded-sm lg:rounded-md">
                    <p className="font-bold text-center text-neutral-pale-orange p-2">${day.amount}</p>
                  </div>
                </div>
              }
            </div>
            <p className="text-xs lg:text-sm text-neutral-med-brown mt-3 lg:mt-2">{day.day}</p>
          </div>
        ))}
      </div>
      <hr className="border-[1px] border-neutral-cream my-6 lg:my-8"/>
      <div className="flex justify-between lg:pb-4">
        <div>
          <h3 className="text-[15px] lg:text-[18px] text-neutral-med-brown lg:pb-2">Total this month</h3>
          <h4 className="font-bold text-3xl lg:text-5xl text-neutral-dark-brown">$478.33</h4>
        </div>
        <div className="flex flex-col justify-end">
          <h4 className="font-bold text-[15px] lg:text-[18px] text-right text-neutral-dark-brown leading-none">+2.4%</h4>
          <h3 className="text-neutral-med-brown">from last month</h3>
        </div>
      </div>
    </div>
  )
}