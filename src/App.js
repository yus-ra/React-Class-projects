import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contact from "./directory/Contact";
import List from "./movie/List";
import MovieDetails from "./movie/MovieDetails";
import Books from "./library/Books";
import BookDetails from "./library/BookDetails";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/list" element={<List />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/book" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     telephone: "",
//     isEdit: false,
//   });
//   const [list, setList] = useState([]);
//   const handleChange = (event) => {
//     let { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleSave = () => {
//     let item = {
//         ...formData,
//         id: Number(list.length) + 1,
//       };

//       setList(list.concat(item));

//       setFormData({
//         name: "",
//         address: "",
//         telephone: "",
//       });
//   };

//   const handleUpdate = () => {
//     const nlist = list.filter((ls) => ls.id !== formData.id);
//     setList(nlist.concat(formData));
//     setFormData({ name: "", address: "", telephone: "", isEdit: false });
//   };
//   const handleDelete = (id) => {
//     const nlist = list.filter((ls) => ls.id !== id);
//     setList(nlist);
//   };
//   const handleEdit = (ls) => {
//     setFormData({
//       ...ls,

//       isEdit: true,
//     });
//   };

//   return (
//     <div className="container">
//       <div className="card mt-3">
//         <div className="card-body">
//           <h5>Add New Contact</h5>
//           <div className="border border-primary border-2 p-3">
//             <form action="">
//               {/*Contact name*/}
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="form-group">
//                     <label htmlFor="" className="mb-2 fw-bold">
//                       Contact name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-control"
//                       id=""
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/*station address*/}
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="form-group">
//                     <label htmlFor="" className="mb-2 fw-bold">
//                       Station Address
//                     </label>
//                     <input
//                       type="text"
//                       name="address"
//                       className="form-control"
//                       id=""
//                       value={formData.address}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/*telephone number*/}
//               <div className="row mt-2">
//                 <div className="col-md-12">
//                   <div className="form-group">
//                     <label htmlFor="" className="mb-2 fw-bold">
//                       Telephone
//                     </label>
//                     <input
//                       type="text"
//                       name="telephone"
//                       className="form-control"
//                       id=""
//                       value={formData.telephone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/*horinzontal rule */}
//               <hr />
//               {/*button */}
//               <button
//                 type="button"
//                 className={
//                   formData.isEdit ? "btn btn-success" : "btn btn-primary"
//                 }
//                 onClick={formData.isEdit ? handleUpdate : handleSave}
//               >
//                 {formData.isEdit ? "Update Contact" : "Save Contact"}
//               </button>
//             </form>
//           </div>
//           <div className="border border-2 mt-5 o-3">
//             <h5>Contact List</h5>
//             {list.map((ls, index) => (
//               <div className="text-wrapper" key={index}>
//                 <div>
//                   <h5>{ls.name}</h5>
//                   <p>
//                     {ls.address}:
//                     <span className="fw-bold text-danger">{ls.telephone}</span>
//                   </p>
//                 </div>
//                 <div className="btn-group">
//                   <button
//                     type="button"
//                     className="btn btn-warning"
//                     onClick={handleEdit(ls)}
//                   >
//                     Edit
//                   </button>{" "}
//                   &nbsp;
//                   <button
//                     type="button"
//                     className="btn btn-danger"
//                     onClick={() => handleDelete(ls.id)}
//                   >
//                     Delete
//                   </button>{" "}
//                   &nbsp;
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
