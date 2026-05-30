// CategoryLayout.jsx
function ProductForm({
  title,
  description,
  breadcrumb,
  product,
  category,
  productFeature,
  error,
  handleChange,
  handleImageChange,
  handleSubmit,
  submitText,
  cancelAction
}) {

  return (
    <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] p-6 shadow-sm h-full  w-full overflow-auto">
      <div className="flex justify-between items-start ">
        <div className="flex-1 p-2 overflow-auto">
          {/* Breadcrumb */}
          <div
            className="
                bg-gray-100
                text-gray-700
                px-3 py-3
                rounded-lg
                text-sm
                mb-6
              "
          >
            {breadcrumb}
          </div>
          {/* Page Title */}
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full overflow-auto">
            {/* Card Header */}
            <div className="border-b border-gray-200 px-8 py-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Product Information
              </h2>
              <p className="text-gray-500 mt-1">
                Fill in the details below
              </p>
            </div>
            {/* Card Body */}
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                  {/* Product Name */}
                  <div className="flex items-start gap-4 mb-4">
                    <label className="w-30 text-sm font-semibold text-gray-700 pt-3">
                      Product Name
                    </label>
                    <div className="flex-1">
                      <input
                        type="text"
                        name="productName"
                        value={product.productName || ""}
                        onChange={handleChange}
                        placeholder="Enter Product name"
                        className="
                        w-full border border-gray-300 rounded-xl px-4 py-3
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                        focus:border-blue-500 transition
                      "
                      />

                      {error?.productName && (
                        <p className="text-red-500 text-sm mt-1">
                          {error.productName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-start gap-4 mb-4">
                    <label className="w-30 text-sm font-semibold text-gray-700 pt-3">
                      Category
                    </label>
                    <div className="flex-1">
                    <select
                      name="categoryId"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      value={product.categoryId || ""}
                      onChange={handleChange}
                    >
                      <option value="">Select Category</option>
                      {category.map((item) => (
                        <option
                          key={item.categoryId}
                          value={item.categoryId}
                        >
                          {item.categoryName}
                        </option>
                      ))}
                    </select>
                    {error?.categoryId && (
                      <p className="text-red-500 text-sm mt-1">
                        {error.categoryId}
                      </p>
                    )}
                    </div>
                  </div>
                </div>

                <br></br>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Product Quantity */}
                  <div className="flex items-start gap-4 mb-4">
                    <label className="w-30 text-sm font-semibold text-gray-700 pt-3">
                      Quantity
                    </label>
<div className="flex-1">

                    <input
                      type="number"
                      name="quantity"
                      value={product.quantity || ""}
                      onChange={handleChange}
                      placeholder="Enter Product quantity"
                      className="
                      w-full border border-gray-300 rounded-xl px-4 py-3
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      focus:border-blue-500 transition
                      "
                      step="1"
                      inputMode="numeric"
                      />
                    {error?.quantity && (
                      <p className="text-red-500 text-sm mt-1">
                        {error.quantity}
                      </p>
                    )}
                    </div>
                  </div>
                  {/* Status */}
                  <div className="flex items-start gap-4 mb-4">
                    <label className="w-30 text-sm font-semibold text-gray-700 pt-3">
                      Price
                    </label>
                    <div className="flex-1">
                    <input
                      type="number"
                      name="price"
                      value={product.price || ""}
                      onChange={handleChange}
                      placeholder="Enter Product price"
                      className="
                      w-full border border-gray-300 rounded-xl px-4 py-3
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      focus:border-blue-500 transition
                      "
                      />
                    {error.price && (
                      <p className="text-red-500 text-sm mt-1">
                        {error.price}
                      </p>
                    )}
                    </div>
                  </div>
                </div>

                <br></br>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Product Feature */}
                 <div className="flex items-start gap-4 mb-4">
                    <label className="w-30 text-sm font-semibold text-gray-700 pt-3">
                      Product Feature
                    </label>
                    <div className="flex-1">
                    <select
                      name="productFeatureId"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      value={product.productFeatureId || ""}
                      onChange={handleChange}
                      >
                      <option value="">Select Product Feature</option>
                      {productFeature.map((item) => (
                        <option
                        key={item.productFeatureId}
                        value={item.productFeatureId}
                        >
                          {item.productFeatureName}
                        </option>
                      ))}
                    </select>
                      </div>

                  </div>
                  {/* Status */}
                  <div className="flex items-start gap-4 mb-4">
                    <label className="w-30 text-sm font-semibold text-gray-700 pt-3">
                      Status
                    </label>
<div className="flex-1">
                    <select
                      className="
                      w-full border border-gray-300 rounded-xl px-4 py-3
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      focus:border-blue-500 transition
                      "
                      name="isActive"
                      value={product.isActive}
                      onChange={(e) =>
                        handleChange({
                          target: {
                            name: "isActive",
                            value: e.target.value === "true"
                          }
                        })
                      }
                      >
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>

                      </div>
                  </div>
                </div>

                <br></br>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="flex items-start gap-4 mb-4">
                    <label className="w-30 text-sm font-semibold text-gray-700 pt-3">
                      Product Image
                    </label>
<div className="flex-1">
                    <input
                      className="
                      w-full border border-gray-300 rounded-xl px-4 py-3
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      focus:border-blue-500 transition
                      "
                      type="file"
                      name="productImage"
                      onChange={handleImageChange}
                      />
                    {error?.productImage && (
                      <p className="text-red-500 text-sm mt-1">
                        {error.productImage}
                      </p>
                    )}

                  </div>
                  <div>
                    {product.productImage && typeof product.productImage === "string" && (
                      <img
                      src={`https://onlineshop-api-mfpv.onrender.com/productImages/${product.productImage}`}
                      alt="Product"
                      style={{
                        width: "300px",
                        height: "300px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          marginBottom: "10px"
                        }}
                        />)}

                    {error?.productImage && (
                      <p className="text-red-500 text-sm mt-1">
                        {error.productImage}
                      </p>
                    )}
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="flex items-start gap-4 mb-4">
                    <label className="w-30 text-sm font-semibold text-gray-700 pt-3">
                    Product Description
                  </label>
                  <div className="flex-1">
                  <textarea
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Enter Product Description"
                    className="
                    w-full border border-gray-300 rounded-xl px-4 py-3
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500 transition
                    "
                    />
                  {error?.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.description}
                    </p>
                  )}
                  </div>
                </div>
                {/* Buttons */}
                <div className="mt-10 flex gap-4">
                  <button
                    className="
                        bg-blue-500 hover:bg-blue-600 text-white
                        px-6 py-3 rounded-xl font-medium transition
                      "
                    type="submit"
                  >
                    {submitText}
                  </button>
                  <button
                    type="button"
                    onClick={cancelAction}
                    className="
                        bg-red-500 hover:bg-red-600 text-white
                        px-6 py-3 rounded-xl font-medium transition
                      "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductForm;