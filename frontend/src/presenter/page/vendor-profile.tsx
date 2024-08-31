import { Button } from "@/components/ui/button";
import Card, { cardProps } from "../profile/card";
import { useGetFoodsQuery } from "@/adapter/redux/main-slice";
import { Plus } from "lucide-react";
import ProfileSideBar from "../profile/profile-sidebar";

const VendorProfile = () => {
  const { data: foods = { data: [] } } = useGetFoodsQuery();

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="w-full h-[200px] bg-blue-400 px-10">hello</div>
      <div className="flex">
        <ProfileSideBar />
        <div className="flex flex-col gap-2 px-10">
          <div className="flex justify-between items-center">
            <div>Search Box</div>
            <Button variant="outline" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="w-[700px] grid grid-cols-2 gap-4">
            {foods["data"].map(
              ({
                _id,
                name,
                price,
                category,
                readyTime,
                description,
              }: cardProps) => (
                <Card
                  key={_id}
                  {...{
                    name,
                    readyTime,
                    category,
                    price,
                    description,
                  }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
