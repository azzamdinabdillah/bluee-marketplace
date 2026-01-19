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
import WalletIcon from "@src/components/icons/WalletIcon";
import ShoppingCart from "@src/components/icons/ShoppingCart";
import Box2 from "@src/components/icons/Box2";
import GiftIcon from "@src/components/icons/GiftIcon";

export default function CreateProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    unit: "",
    weight: "",
    weightUnit: "Kg",
    description: "",
    condition: "new",
    price: "",
    stock: "",
  });

  const categories = [
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "food", label: "Food & Beverage" },
  ];

  const units = [
    { value: "pcs", label: "Pcs" },
    { value: "box", label: "Box" },
    { value: "pack", label: "Pack" },
  ];

  const weightUnits = ["Kg", "Gram", "Mg"];

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

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
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-10">
            <label className="font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base lg:w-[400px] lg:pt-4">
              Store Image
            </label>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:gap-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  className="group border-stroke-color hover:border-primary-color relative flex aspect-square w-full items-center justify-center rounded-2xl border-2 border-dashed bg-[#F9FAFB] transition-all md:w-[100px] lg:h-[100px] lg:w-[100px]"
                >
                  <div className="text-sec-color group-hover:text-primary-color flex flex-col items-center gap-1.5 transition-colors">
                    <PlusIcon className="h-6 w-6" />
                    <span className="text-[10px] font-bold md:text-xs">
                      Add Photo
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
            <label className="font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base lg:w-[400px]">
              Product Name
            </label>
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
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
            <label className="font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base lg:w-[400px]">
              Weight
            </label>
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
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
            <label className="font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base lg:w-[400px]">
              Product Type
            </label>
            <div className="flex w-full flex-col gap-4 sm:flex-row lg:max-w-[500px]">
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

          {/* Product Category */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
            <label className="font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base lg:w-[400px]">
              Product Category
            </label>
            <div className="w-full">
              <SelectInteractive
                label="Select Category"
                icon={EditIcon}
                options={categories}
                value={form.category}
                onChange={(val) => handleInputChange("category", val)}
              />
            </div>
          </div>

          {/* Product Unit */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
            <label className="font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base lg:w-[400px]">
              Product Unit
            </label>
            <div className="w-full">
              <SelectInteractive
                label="Select Unit"
                icon={Note}
                options={units}
                value={form.unit}
                onChange={(val) => handleInputChange("unit", val)}
              />
            </div>
          </div>

          {/* Product Description */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-10">
            <label className="font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base lg:w-[400px] lg:pt-4">
              Product Description
            </label>
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

          {/* Product Price */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
            <label className="font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base lg:w-[400px]">
              Product Price
            </label>
            <div className="w-full">
              <InputInteractive
                label="Enter Product Price"
                icon={WalletIcon}
                type="number"
                value={form.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
              />
            </div>
          </div>

          {/* Product Stock */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
            <label className="font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base lg:w-[400px]">
              Product Stock
            </label>
            <div className="w-full">
              <InputInteractive
                label="Enter Product Stock"
                icon={Box}
                type="number"
                value={form.stock}
                onChange={(e) => handleInputChange("stock", e.target.value)}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col-reverse justify-end gap-4 sm:flex-row md:mt-6 lg:mt-8">
            <button
              type="button"
              className="font-lexend text-sec-color hover:bg-light-blue-color flex h-12 w-full items-center justify-center rounded-xl text-sm font-bold transition-colors sm:h-14 sm:w-auto sm:px-10 md:text-base lg:px-12"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary-color font-lexend shadow-primary-color/20 hover:bg-primary-color/90 flex h-12 w-full items-center justify-center rounded-xl text-sm font-bold text-white shadow-lg transition-all sm:h-14 sm:w-auto sm:px-8 md:text-base lg:px-10"
            >
              Create Now
            </button>
          </div>
        </div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
