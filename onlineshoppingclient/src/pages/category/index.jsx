import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";
import { categoryService } from "../../services/categoryService";


function Category() {

  //for delete pop up 
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState("");
  //  
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  //use for datatable pagination
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const handleEdit = (id) => {
    navigate(`/category/edit/${id}`);
  };


  //function for deleting
  const handleDelete = async (id) => {
    await categoryService.delete(id);
    getCategory();
  };
  const getCategory = async () => {
    setCategory(await categoryService.getAll());
  };
  const columns = [
    {
      name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg ">Name</span>,
      selector: row => row.categoryName,
      sortable: true,

    },
    {
      name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg">Active</span>,
      //selector: row => row.isActive,
      cell: row => row.isActive ? "Yes" : "No",

      sortable: true,
    },
    {
      name: '',
      cell: (row) => <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEdit(row.categoryId)}>Edit</button>,
      ignoreRowClick: true,
    },
    {
      name: '',
      cell: (row) => <button className="text-red-500 hover:text-red-700" onClick={() => {
        setSelectedId(row.categoryId);
        setShowDeleteModal(true);
      }}>Delete</button>,
      ignoreRowClick: true,
    },

  ];
  useEffect(() => {getCategory();}, []);
  const filteredProducts = category.filter((item) =>
  item.categoryName
    .toLowerCase()
    .includes(search.toLowerCase())
);

  return (
    <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] p-6 shadow-sm h-auto">
      <div className="p-5 w-full ">
        <div className="flex justify-between items-start ">
          <div>
            <h1 className="text-2xl font-bold mb-5">
              Category List
            </h1>
          </div>
          <div>
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/category/create")}>
              <Plus size={18} />
              Add Category
            </button>
            
          </div>

        </div>
        <br></br>
        <div className="mb-4 items-center">
              <input
                type="text"
                placeholder="Search product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded w-64"
              />
            </div>
        <hr></hr>
        <DataTable
          columns={columns}
          data={filteredProducts}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 20]}
          highlightOnHover
          pointerOnHover
          striped
        />

      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl shadow-xl p-6 w-[400px]">

            <h2 className="text-xl font-semibold text-gray-800">
              Delete Category
            </h2>

            <p className="text-gray-500 mt-2">
              Are you sure you want to delete this category?
            </p>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-5 py-2 rounded-xl border border-gray-300 
          hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  handleDelete(selectedId);
                  setShowDeleteModal(false);
                }}
                className="px-5 py-2 rounded-xl bg-red-500 
          hover:bg-red-600 text-white transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;