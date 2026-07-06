import { IoMdAdd } from "react-icons/io"

function DashboardHeader() {
    return (
        <div className="flex md:flex-col justify-between items-center md:items-start gap-6">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Welcome
                </h1>
                <h2 className="text-gray-500 md:text-lg font-semibold">
                    Ready to start your next project?
                </h2>
            </div>
            <button className="bg-black rounded-3xl px-4 py-2 flex justify-between items-center gap-2 text-white text-sm tracking-wid hover:scale-[1.03] shadow-md shadow-gray-400">
                <span><IoMdAdd size={22} /></span>
                Add project
            </button>
        </div>
    )
}

export default DashboardHeader