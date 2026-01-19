import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import InputInteractive from "@src/components/InputInteractive";
import SelectInteractive from "@src/components/SelectInteractive";
import bag3Icon from "/icons/bag-4-gray.svg";
import { useState } from "react";

export default function CreateProduct() {
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");

  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("IDR");
  const [category, setCategory] = useState("");

  return (
    <TemplateLayoutBackoffice
      role="seller"
      title="Add New Product"
      subtitle="Manage My Products"
      showBackButton
    >
        <div className="flex flex-col gap-4 max-w-xl p-4 bg-white">
            <h2 className="text-lg font-bold">Product Details</h2>

            {/* Example 3: Category Selection */}
            <SelectInteractive
              label="Select Category"
              value={category}
              onChange={setCategory}
              icon={bag3Icon}
              options={[
                { value: "electronics", label: "Electronics" },
                { value: "fashion", label: "Fashion" },
                { value: "home_living", label: "Home & Living" },
                { value: "books", label: "Books" },
              ]}
            />
            
            {/* Example 1: Weight Input with Unit Selection */}
            <InputInteractive
              label="Product Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              unitOptions={["kg", "g", "lbs"]}
              selectedUnit={weightUnit}
              onUnitChange={setWeightUnit}
            />

            {/* Example 2: Price Input with Currency Selection */}
            <InputInteractive
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              unitOptions={["IDR", "USD", "SGD"]}
              selectedUnit={currency}
              onUnitChange={setCurrency}
            />
        </div>
    </TemplateLayoutBackoffice>
  );
}