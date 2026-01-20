import { useRef, useState } from "react";
import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import InputInteractive from "@src/components/InputInteractive";
import InputRadioInteractive from "@src/components/InputRadioInteractive";
import SelectInteractive from "@src/components/SelectInteractive";
import { Box } from "@src/components/icons/Box";
import StickyNote from "@src/components/icons/StickyNote";
import editIcon from "/icons/edit-black.svg";
import MoneyIcon from "@src/components/icons/MoneyIcon";
import ShoppingCart from "@src/components/icons/ShoppingCart";
import Box2 from "@src/components/icons/Box2";
import GiftIcon from "@src/components/icons/GiftIcon";
import Box4 from "@src/components/icons/Box4";
import Box3Icon from "@src/components/icons/Box3Icon";
import trashIcon from "/icons/trash-white.svg";
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

  const [images, setImages] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeImageIndex !== null) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImages = [...images];
        newImages[activeImageIndex] = reader.result as string;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = "";
  };

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
            <div className="scrollbar-hide flex flex-row gap-4 overflow-x-auto lg:gap-5">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
              {images.map((img, i) => (
                <div key={i} className="group relative shrink-0">
                  <div
                    onClick={() => !img && handleImageClick(i)}
                    className="group hover:border-primary-color relative size-[80px] cursor-pointer overflow-hidden rounded-xl border-gray-200 transition-all md:size-[100px]"
                  >
                    <img
                      src={img || imagePlaceholder}
                      alt=""
                      className={`h-full w-full object-cover`}
                    />
                    {img && (
                      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 transition-opacity group-hover:opacity-100 lg:opacity-0">
                        <div className="flex p-1.5 md:p-2.5 items-center justify-center rounded-full bg-white transition-colors">
                          <img src={editIcon} alt="" className="w-full h-full" />
                        </div>
                        <div className="flex p-1.5 md:p-2.5 items-center justify-center rounded-full bg-red-color transition-colors">
                          <img src={trashIcon} alt="" className="w-full h-full" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
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
          <div className="mt-3 flex gap-3 md:mt-0 md:justify-end">
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
