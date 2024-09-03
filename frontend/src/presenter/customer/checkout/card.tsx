import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import images from "../../asserts/img/food.png";
import { Minus, Plus } from "lucide-react";
function CheckoutCard() {
  return (
    <Card className="w-full max-w-lg mx-auto flex flex-row items-center p-4">
      {/* Food Image */}
      <img
        src={images}
        alt="image"
        className="w-24 h-24 object-cover rounded-lg mr-4"
      />

      {/* Food Details */}
      <div className="flex-1">
        <CardHeader className="flex justify-between items-start p-0 mb-2">
          <h3 className="text-lg font-semibold">name</h3>
        </CardHeader>
        <CardContent className="p-0 mb-2">
          <p className="text-sm text-gray-600">{"description"}</p>
        </CardContent>
        {/* categories */}
        <div className="flex gap-2">
          <Badge>thai</Badge>
          <Badge>thai</Badge>
          <Badge>thai</Badge>
        </div>
      </div>

      {/* Actions (Price and Add to Cart) */}
      <CardFooter className="flex flex-col justify-center gap-2 items-center">
        <span className="text-lg font-semibold">${(2.3).toFixed(2)}</span>
        <div className="flex gap-2 justify-start items-center">
          <Minus className="w-4 h-4" />
          <div className="w-8 h-8 bg-gray-400 rounded-full text-white text-center flex items-center justify-center">
            3
          </div>
          <Plus className="w-4 h-4" />
        </div>
      </CardFooter>
    </Card>
  );
}

export default CheckoutCard;
