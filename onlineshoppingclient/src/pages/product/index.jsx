import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";
import { productService } from "../../services/productService";

function Product() {
  const [product, setProduct] = useState([]);
  //for delete pop up 
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  //use for datatable pagination
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const handleEdit = (id) => {
    navigate(`/product/edit/${id}`);
  };
  //function for deleting
  const handleDelete = async (id) => {
    await productService.delete(id);
    getAllProductegory();
  };

  const getAllProductegory = async () => {
    setProduct(await productService.getAll());
  };
  const columns = [
    {
      name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg ">Name</span>,
      selector: row => row.productName,
      sortable: true,
    },
    {
      name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg ">Category</span>,
      selector: row => row.categoryName,
      sortable: true,
    },
    {
      name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg ">Quantity</span>,
      selector: row => row.quantity,
      sortable: true,
    },
    {
      name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg ">Price</span>,
      selector: row => row.price,
      sortable: true,
    },
    {
      name: <span style={{ fontWeight: 'bold' }} className="font-bold text-lg ">Image</span>,
      
   cell: (row) => (
    row.productImage ? (
      <img
        src={`https://onlineshop-api-mfpv.onrender.com/productImages/${row.productImage}`}
        alt={row.productName}
        onError={(e) => {
          e.target.style.display = "none";
        }}
        style={{
          width: "80px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "5px",
          border: "1px solid #ddd"
        }}
      />
    ) : (
      <div
        style={{
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #ddd",
          borderRadius: "8px",
          fontSize: "12px",
          color: "#666"
        }}
      >
        No Image
      </div>
    )
  )
    },
   
    {
      name: '',
      cell: (row) => <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEdit(row.productId)}>Edit</button>,
      ignoreRowClick: true,
    },
    {
      name: '',
      cell: (row) => <button className="text-red-500 hover:text-red-700" onClick={() => {
        setSelectedId(row.productId);
        setShowDeleteModal(true);
      }}>Delete</button>,
      ignoreRowClick: true,
    },

  ];
    useEffect(() => {getAllProductegory();}, []);
  

  return (
<div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.08)] shadow-sm h-auto">
      <div className="p-5 w-full ">
        <div className="flex justify-between items-start ">
          <div>
            <h1 className="text-2xl font-bold mb-5">
                Product List
              </h1>
            </div>

            <div>
              <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/product/create")}>
                <Plus size={18} />
                Add product
              </button>
            </div>

          </div>
          <br></br>
          <hr></hr>
          <DataTable
            columns={columns}
            data={product}
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
              Delete product
            </h2>

            <p className="text-gray-500 mt-2">
              Are you sure you want to delete this product?
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
export default Product;