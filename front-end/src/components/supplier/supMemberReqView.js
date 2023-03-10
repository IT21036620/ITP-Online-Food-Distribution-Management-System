import { Link } from 'react-router-dom'

// import SupplierDetails from "./supplierDetails";

const SuppMemberReqViews = ({ supplier }) => {
  return (
    <div className="supplier-details">
      <h4>{supplier.business_name}</h4>
      <p>
        <strong>Rating : </strong>
        {supplier.rating}
      </p>
      <Link to={`/memberReqDetails/${supplier._id}`}>
        <button
          className="hover:bg-red-600 text-white p-2 rounded cursor-pointer mt-1 bg-green-400 text-white p-2 rounded cursor-pointer m-auto"
          value={supplier._id}
          // onClick={(e) => {
          //   console.log(e.target.value);
          //   // <SupplierDetails key={supplier._id} supplier={supplier} />;
          // }}
        >
          View Details
        </button>
      </Link>
    </div>
  )
}

export default SuppMemberReqViews
