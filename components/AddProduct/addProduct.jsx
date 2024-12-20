import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    brand: '',
    productFor: 'Men',
    productName: '',
    description: '',
    price: '',
    size: '',
    fragranceFamily: '',
    inventoryStatus: 'In Stock'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full bg-white">
      <h1 className="text-xl font-semibold mb-6">Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div className="space-y-4">
          <div>
            <label htmlFor="brand" className="block text-sm mb-2">Product Brand*</label>
            <select
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              onBlur={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select Brand</option>
              <option value="brand1">Brand 1</option>
              <option value="brand2">Brand 2</option>
            </select>
          </div>

          <div>
            <fieldset>
              <legend className="block text-sm mb-2">Product For</legend>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="productFor"
                    value="Men"
                    checked={formData.productFor === 'Men'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Men
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="productFor"
                    value="Women"
                    checked={formData.productFor === 'Women'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Women
                </label>
              </div>
            </fieldset>
          </div>

          <div>
            <label htmlFor="productName" className="block text-sm mb-2">Product Name*</label>
            <input
              id="productName"
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-teal-500"
              placeholder="Name"
            />
          </div>

          <div>
            <label htmlFor="productImage" className="block text-sm mb-2">Product Image*</label>
            <div 
              id="productImage"
              className="border-2 border-dashed rounded-md p-4"
            >
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-teal-500" />
                <span className="text-teal-500">Upload</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                png, jpg, svg or gif max size 10MB
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm mb-2">Product Description*</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-md p-2 h-32 focus:ring-2 focus:ring-teal-500"
              placeholder="Description"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm mb-2">Price*</label>
            <input
              id="price"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-teal-500"
              placeholder="$0.00"
            />
          </div>

          <div>
            <label htmlFor="size" className="block text-sm mb-2">Product Size*</label>
            <input
              id="size"
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-teal-500"
              placeholder="500 ml"
            />
          </div>

          <div>
            <label htmlFor="fragranceFamily" className="block text-sm mb-2">Fragrance Families*</label>
            <input
              id="fragranceFamily"
              type="text"
              name="fragranceFamily"
              value={formData.fragranceFamily}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <fieldset>
              <legend className="block text-sm mb-2">Inventory Status</legend>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="inventoryStatus"
                    value="In Stock"
                    checked={formData.inventoryStatus === 'In Stock'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  In Stock
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="inventoryStatus"
                    value="Out Of Stock"
                    checked={formData.inventoryStatus === 'Out Of Stock'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Out Of Stock
                </label>
              </div>
            </fieldset>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;