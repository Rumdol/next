import React, { useState } from 'react';

const AddBrandForm = () => {
  const [brandName, setBrandName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Brand submitted:', brandName);
  };

  const handleCancel = () => {
    setBrandName('');
    console.log('Form cancelled');
  };

  return (
    <div className="w-full bg-white">
      <h1 className="text-xl font-semibold mb-6">Add New Brand</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div className="space-y-4">
          <div>
            <label htmlFor="brandName" className="block text-sm mb-2">
              Brand Name <span className="text-red-500">*</span>
            </label>
            <input
              id="brandName"
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-teal-500"
              placeholder="Brand Name"
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrandForm;