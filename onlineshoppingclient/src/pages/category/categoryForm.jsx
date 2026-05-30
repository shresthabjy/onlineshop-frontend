// CategoryLayout.jsx

function CategoryForm({
  title,
  description,
  breadcrumb,
  category,
  error,
  handleChange,
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
                  Category Information
                </h2>
                <p className="text-gray-500 mt-1">
                  Fill in the details below
                </p>
              </div>
              {/* Card Body */}
              <div className="p-8">

                <form onSubmit={handleSubmit}>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Category Name */}
                    <div>

                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Category Name
                      </label>

                      <input
                        type="text"
                        name="categoryName"
                        value={category.categoryName}
                        onChange={handleChange}
                        placeholder="Enter category name"
                        className="
                          w-full border border-gray-300 rounded-xl px-4 py-3
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition
                        "
                      />

                      {error && (
                        <p className="text-red-500 text-sm mt-2">
                          {error}
                        </p>
                      )}

                    </div>

                    {/* Status */}
                    <div>

                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Status
                      </label>

                      <select
                        className="
                          w-full border border-gray-300 rounded-xl px-4 py-3
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500 transition
                        "
                        name="isActive"
                        value={category.isActive}
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
export default CategoryForm;