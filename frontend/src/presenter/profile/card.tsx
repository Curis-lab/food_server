import image from "../asserts/img/food.png";

export interface cardProps{
    _id?:string;
    name:string;
    price:number;
    category:string;
    readyTime:number;
    description:string;
}

const Card = (props:cardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt="name" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{props.name}</h3>
        <p className="text-gray-700 mb-2">{props.description}</p>
        <p className="text-lg font-bold mb-2">{props.price} MMK</p>
        {<p className="text-sm text-gray-500 mb-2">Category: {props.category}</p>}
        {<p className="text-sm text-gray-500">Ready in {props.readyTime} minutes</p>}
      </div>
    </div>
  );
};

export default Card;
