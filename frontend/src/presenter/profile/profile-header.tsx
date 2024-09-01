import { MapPin } from "lucide-react";

function ProfileHeader() {
  return (
    <div className="w-full flex px-[200px] fixed top-0 left-0 z-10">
    {/* stablize the component*/}
    <div className={`relative w-full h-[130px] bg-slate-600 flex`}>
      <div className="absolute flex justify-between items-center bottom-0 h-1/2 w-full py-[50px]">
        {/* image */}
        <div className="flex items-center gap-4 text-white">
          <div className="shadow-md mt-[20px] ml-[100px] w-[100px] h-[100px] bg-green-400 rounded-full flex items-center justify-center">
            <p className="font-bold text-[50px]">NL</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Nyan Lin</p>
            <p className="text-gray-50 flex">
              <MapPin className="w-5 h-5" />
              Yangon, Myanmar
            </p>
          </div>
        </div>
        {/* todo*/}
        <div className="flex px-10">
          <div className="flex flex-col border-r-2 text-white items-center px-3">
            <p className="font-bold text-[25px]">142</p>
            <p>Reviews</p>
          </div>
          <div className="flex flex-col border-r-2 text-white items-center px-3">
            <p className="font-bold text-[25px]">201</p>
            <p>Products</p>
          </div>
          <div className="flex flex-col text-white items-center px-3">
            <p className="font-bold text-[25px]">3.2k</p>
            <p>Follower</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileHeader
