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
import AppliedJob from "./jobProject/Pages/AppliedJob";
import BookMark from "./jobProject/Pages/BookMark";
import DeleteAccount from "./jobProject/Pages/DeleteAccount";
import EditResume from "./jobProject/Pages/EditResume";
import Home from "./jobProject/Pages/Home.jsx";
import JobDetails from "./jobProject/Pages/JobDetails.jsx";
import JobList from "./jobProject/Pages/JobList.jsx";
import JobPost from "./jobProject/Pages/JobPost";
import PostResume from "./jobProject/Pages/PostResume";
import Profile from "./jobProject/Pages/Profile.jsx";
import ProfileDetails from "./jobProject/Pages/ProfileDetails";
import Resume from "./jobProject/Pages/Resume.jsx";
import Signup from "./jobProject/Pages/Signup";
import Signin from "./jobProject/Pages/Signin";
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/job-home" element={<Home />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post-resume" element={<PostResume />} />
          <Route path="/job-post" element={<JobPost />} />
          <Route path="/edit-resume" element={<EditResume />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/applied-job" element={<AppliedJob />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
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
