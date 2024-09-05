import { Button } from "@/components/ui/button";
import Card, { cardProps } from "../profile/card";
import { useGetFoodsQuery } from "@/adapter/redux/vendor-slice";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const { data: foods = { data: [] } } = useGetFoodsQuery();
  const naviagte = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center">
        <div>Search Box</div>
        <Button onClick={()=>naviagte('/vendor/create')} variant="outline" size="icon">
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
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
                _id,
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
    </>
  );
}

export default ProductList;
