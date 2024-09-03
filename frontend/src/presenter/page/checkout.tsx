import CheckoutCard from "../customer/checkout/card";

function CheckoutPage() {
  return (
    <div className="w-screen flex flex-row">
      <div className="w-1/2 p-5 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center">
          Order Summary
        </h1>
        <div className="flex flex-col gap-5 py-5">
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
        </div>
      </div>
      <div className="w-1/2 bg-blue-900">
      hello
      </div>
    </div>
  );
}

export default CheckoutPage;
