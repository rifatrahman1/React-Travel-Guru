
const Calender = () => {
    return (
        <div className="bg-white p-7 rounded-lg w-[450px]">
           <div>
            <p className="text-[#818181] font-medium">Origin</p>
            <input className="text-black w-full border-none bg-[#F2F2F2] rounded-lg font-bold mt-4 p-5" type="text" name="text"  id="" defaultValue="Dhaka" />
           </div>
           <div className="mt-4">
            <p className="text-[#818181] font-medium">Origin</p>
            <input className="text-black w-full border-none bg-[#F2F2F2] rounded-lg font-bold mt-4 p-5" type="text" name="text"  id="" defaultValue="Cox's Bazar" />
           </div>
           <div className="flex items-center gap-8">
           <div className="mt-4">
            <p className="text-[#818181] font-medium">From</p>
            <input className="text-black w-full border-none bg-[#F2F2F2] rounded-lg font-bold mt-4 p-5" type="date" name="date"  id="" />
           </div>
           <div className="mt-4">
            <p className="text-[#818181] font-medium">To</p>
            <input className="text-black w-full border-none bg-[#F2F2F2] rounded-lg font-bold mt-4 p-5" type="date" name="date"  id=""  />
           </div>
           </div>
           <button className="rounded-lg bg-[#F9A51A] py-2 w-full text-black font-medium mt-8 cursor-pointer">Start Booking</button>
        </div>
    );
};

export default Calender;