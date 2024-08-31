import { useState } from "react";
import { Input, useToast, Button } from "./ui";
import { adminApi } from "@/infrastructure/api/apiSlice";

export interface CreateVendor {
  name: string;
  ownerName: string;
  pinCode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  serviceAvailable: boolean;
  coverImage: string[]; // Array of image URLs
  foodType: string[]; // Array of food types
}
const InputField = ({
  htmlFor,
  value,
  onChange,
  placeholder,
}: {
  htmlFor: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => {
  return (
    <div className="w-full flex">
      <label className="w-[200px] block text-sm font-medium text-gray-700">
        {placeholder}
      </label>
      <Input
        name={htmlFor}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
const CreateVendorAccount = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<CreateVendor>({
    name: "",
    ownerName: "",
    pinCode: "",
    address: "",
    phone: "",
    email: "",
    serviceAvailable: false,
    coverImage: [""],
    foodType: [""],
    password: "",
  });
  const [createVendor, { isSuccess }] = adminApi.useCreateVendorMutation();

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
    console.log(formData);
    createVendor(formData);
    if (isSuccess) {
      toast({
        title: "Vendor Account Created",
        description: "Vendor Account Created Successfully",
      });
    }
  };

  return (
    <div className="mx-10">
      <h1 className="font-bold text-2xl space-y-4 mx-auto px-6 py-4">
        Create Vendor Account
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 mx-auto p-6">
        <InputField
          value={formData.name}
          onChange={handleChange}
          placeholder="Vendor Name"
          htmlFor="name"
        />
        <InputField
          value={formData.ownerName}
          onChange={handleChange}
          placeholder="Owner Name"
          htmlFor="ownerName"
        />
        <InputField
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="Pin Code"
          htmlFor="pinCode"
        />

        <div className="flex">
          <label className="block text-sm font-medium text-gray-700 w-[200px]">
            Address
          </label>
          <input
          type="textarea"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </div>

        <InputField
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          htmlFor="phone"
        />
        <InputField
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          htmlFor="email"
        />
        <InputField
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          htmlFor="password"
        />

        {/* Service Available */}
        <div className="flex items-center pl-[170px]">
          <input
          type="checkbox"
            name="serviceAvailable"
            checked={formData.serviceAvailable}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleCheckboxChange(e)}
          />
          <label className="ml-2 block text-sm font-medium text-gray-700">
            Service Available
          </label>
        </div>

        {/* Rating */}

        {/* Cover Image */}
        <div className="flex">
          <label className="block text-sm font-medium text-gray-700 w-[200px]">
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
        <InputField
          value={formData.foodType[0]}
          onChange={(e) =>
            setFormData({ ...formData, foodType: [e.target.value] })
          }
          placeholder="Food Type"
          htmlFor="foodType"
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-blue-500 text-white">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateVendorAccount;
