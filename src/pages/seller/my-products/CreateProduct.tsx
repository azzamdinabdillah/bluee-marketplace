import { useState } from "react";
import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import InputInteractive from "@src/components/InputInteractive";
import InputRadioInteractive from "@src/components/InputRadioInteractive";
import SelectInteractive from "@src/components/SelectInteractive";
import { Box } from "@src/components/icons/Box";
import StickyNote from "@src/components/icons/StickyNote";
import { Note } from "@src/components/icons/Note";
import ProductItemLine from "@src/components/icons/ProductItemLine";
import PlusIcon from "@src/components/icons/PlusIcon";
import { EditIcon } from "@src/components/icons/EditIcon";
import MoneyIcon from "@src/components/icons/MoneyIcon";
import ShoppingCart from "@src/components/icons/ShoppingCart";
import Box2 from "@src/components/icons/Box2";
import GiftIcon from "@src/components/icons/GiftIcon";
import Box4 from "@src/components/icons/Box4";
import Box3Icon from "@src/components/icons/Box3Icon";
import Button from "@src/components/Button";
import imagePlaceholder from "/images/image-placeholder-2.png";

export default function CreateProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    unit: "",
    weight: "",
    weightUnit: "Kg",
    description: "",
    condition: "",
    price: "",
    stock: "",
  });

  const categories = [
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "food", label: "Food & Beverage" },
  ];

  const weightUnits = ["Kg", "Gram", "Mg"];

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const rowClass =
    "flex flex-col lg:grid lg:grid-cols-[45fr_55fr] gap-2 lg:flex-row lg:items-start lg:gap-10";
  const labelClass =
    "font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base";
  const labelClassStart = `${labelClass} lg:pt-4`;

  return (
    <TemplateLayoutBackoffice
      role="seller"
      title="Add New Product"
      subtitle="Manage My Products"
      showBackButton
    >
      <div className="flex w-full flex-col gap-3 rounded-[20px] bg-white p-3 md:gap-5 md:p-5">
        <h2 className="text-responsive-18 text-black-color font-bold">
          Complete the Form
        </h2>

        <div className="flex flex-col gap-3 md:gap-5">
          {/* Store Image Section */}
          <div className={rowClass}>
            <label className={labelClassStart}>Store Image</label>
            <div className="flex scrollbar-hide flex-row gap-4 overflow-x-auto lg:gap-5">
              {[1, 2, 3, 4].map((i) => (
                <img src={imagePlaceholder} alt="" key={i} className="size-[80px] md:size-[100px]" />
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div className={rowClass}>
            <label className={labelClass}>Product Name</label>
            <div className="w-full">
              <InputInteractive
                label="Enter Product Name"
                icon={ShoppingCart}
                value={form.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
          </div>

          {/* Weight */}
          <div className={rowClass}>
            <label className={labelClass}>Product Weight</label>
            <div className="w-full">
              <InputInteractive
                label="Enter Product Weight"
                icon={Box2}
                value={form.weight}
                onChange={(e) => handleInputChange("weight", e.target.value)}
                unitOptions={weightUnits}
                selectedUnit={form.weightUnit}
                onUnitChange={(unit) => handleInputChange("weightUnit", unit)}
              />
            </div>
          </div>

          {/* Product Condition */}
          <div className={rowClass}>
            <label className={labelClass}>Product Type</label>
            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <InputRadioInteractive
                label="New Item"
                value="new"
                selectedValue={form.condition}
                onChange={(val) => handleInputChange("condition", val)}
                icon={GiftIcon}
              />
              <InputRadioInteractive
                label="Used Item"
                value="used"
                selectedValue={form.condition}
                onChange={(val) => handleInputChange("condition", val)}
                icon={Box}
              />
            </div>
          </div>

          {/* Product Description */}
          <div className={rowClass}>
            <label className={labelClassStart}>Product Description</label>
            <div className="w-full">
              <InputInteractive
                as="textarea"
                label="Enter Description"
                icon={StickyNote}
                value={form.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
              />
            </div>
          </div>

          {/* Product Category */}
          <div className={rowClass}>
            <label className={labelClass}>Product Category</label>
            <div className="w-full">
              <SelectInteractive
                label="Select Category"
                icon={Box4}
                options={categories}
                value={form.category}
                onChange={(val) => handleInputChange("category", val)}
              />
            </div>
          </div>

          {/* Product Price */}
          <div className={rowClass}>
            <label className={labelClass}>Product Price</label>
            <div className="w-full">
              <InputInteractive
                label="Enter Product Price"
                icon={MoneyIcon}
                type="number"
                value={form.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
              />
            </div>
          </div>

          {/* Product Stock */}
          <div className={rowClass}>
            <label className={labelClass}>Product Stock</label>
            <div className="w-full">
              <InputInteractive
                label="Enter Product Stock"
                icon={Box3Icon}
                type="number"
                value={form.stock}
                onChange={(e) => handleInputChange("stock", e.target.value)}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex mt-3 md:mt-0 gap-3 md:justify-end">
            <Button variant="red" className="w-full rounded-full! md:w-fit">
              Cancel
            </Button>
            <Button variant="blue" className="w-full rounded-full! md:w-fit">
              Create Now
            </Button>
          </div>
        </div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
