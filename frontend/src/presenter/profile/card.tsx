import { useDeleteFoodMutation } from "@/adapter/redux/vendor-slice";
import image from "../asserts/img/food.png";
import { Trash2 } from "lucide-react";

export interface cardProps {
  _id: string;
  name: string;
  price: number;
  category: string;
  readyTime: number;
  description: string;
}

const Card = (props: cardProps) => {
  const [deleteFood] = useDeleteFoodMutation();
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt="name" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          {props.name.toUpperCase()}
        </h3>
        <p className="text-gray-700 mb-2">{props.description}</p>
        <p className="text-lg font-bold mb-2">{props.price} MMK</p>
        {
          <p className="text-sm text-gray-500 mb-2">
            Category: {props.category}
          </p>
        }
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
            Ready in {props.readyTime} minutes
          </p>
        <div className="hover:bg-green-500 rounded-full h-8 w-8 flex items-center justify-center" onClick={async()=>await deleteFood(props._id).then((data)=>console.log(data)).catch(err=>console.log(err))}>
          <Trash2 className="w-4 h-4" />
        </div>
          </div>
      </div>
    </div>
  );
};

export default Card;
