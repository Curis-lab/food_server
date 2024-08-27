import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { adminApi } from "@/infrastructure/api/apiSlice";
import { useToast } from "./ui/use-toast";

export interface CreateVendor {
  name: string;
  ownerName: string;
  pinCode: string;
  address: string;
  phone: string;
  email: string;
  serviceAvailable: boolean;
  coverImage: string[]; // Array of image URLs
  rating: number;
  foodType: string[]; // Array of food types
}

const CreateVendorAccount = () => {
  const {toast} = useToast();
  const [formData, setFormData] = useState<CreateVendor>({
    name: "",
    ownerName: "",
    pinCode: "",
    address: "",
    phone: "",
    email: "",
    serviceAvailable: false,
    coverImage: [""],
    rating: 0,
    foodType: [""],
  });
  const [createVendor, { isSuccess}] = adminApi.useCreateVendorMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createVendor(formData);
    if(isSuccess){
      toast({
        title:"Vendor Account Created",
        description:"Vendor Account Created Successfully",
      })
    }
  };

  return (
    <div className="w-full">
      <h1 className="font-bold">Create Vendor Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mx-auto p-6">
        <div className="flex items-center justify-between w-full">
          <label className=" block text-sm font-medium text-gray-700">
            Vendor Name
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Vendor Name"
          />
        </div>

        {/* Owner Name */}
        <div className="flex">
          <label className="block text-sm font-medium text-gray-700">
            Owner Name
          </label>
          <Input
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="Owner Name"
          />
        </div>

        {/* Pin Code */}
        <div className="flex">
          <label className="block text-sm font-medium text-gray-700">
            Pin Code
          </label>
          <Input
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            placeholder="Pin Code"
          />
        </div>

        {/* Address */}
        <div className="flex">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <Textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </div>

        {/* Phone */}
        <div className="flex">
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>

        {/* Email */}
        <div className="flex">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
          />
        </div>

        {/* Service Available */}
        <div className="flex items-center">
          <Checkbox
            name="serviceAvailable"
            checked={formData.serviceAvailable}
            onChange={handleCheckboxChange}
          />
          <label className="ml-2 block text-sm font-medium text-gray-700">
            Service Available
          </label>
        </div>

        {/* Rating */}
        <div className="flex">
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <Input
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating"
            type="number"
          />
        </div>

        {/* Cover Image */}
        <div className="flex">
          <label className="block text-sm font-medium text-gray-700">
            Cover Image (URL)
          </label>
          <Input
            name="coverImage"
            value={formData.coverImage[0]}
            onChange={(e) =>
              setFormData({ ...formData, coverImage: [e.target.value] })
            }
            placeholder="Cover Image URL"
          />
        </div>

        {/* Food Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Type
          </label>
          <Input
            name="foodType"
            value={formData.foodType[0]}
            onChange={(e) =>
              setFormData({ ...formData, foodType: [e.target.value] })
            }
            placeholder="Food Type"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-blue-500 text-white">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateVendorAccount;
