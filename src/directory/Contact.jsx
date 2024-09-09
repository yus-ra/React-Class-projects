
import React,{ useState } from 'react';



const Contact=()=>{
  const[formDate, setFormdate] = useState({
    name: '',
    address: '',
    telephone: ''

  });

  const [list, setList] = useState([]);

  const handleChange=(event)=>{
    let {name, value} = event.target;
    setFormdate({ ...formDate, [name]:value,
    });
  }

  const handleSave=()=>{

    let  item={
    ...formDate,
    id:Number(list.length) +1
    }

    setList(list.concat(item));
    setFormdate({
      name: '',
      address: '',
      telephone: ''
    });
  }

  const handleDelete=(id)=>{
    const nlist = list.filter((ls) => ls.id !== id);
    setList(nlist);
  }

  const handleEdit = (ls) => {
    setFormdate({...ls, isEdit:true});
  }

  const handleUpdate = () => {
    const nlist = list.filter((ls) => ls.id !==formDate.id)
    setList(nlist.concat(formDate));
    setFormdate({
      name: '',
      address: '',
      telephone: '',
      isEdit:false
    });
    }
  
  return (

      <div className='container'>
        <div className='card mt-3'>
          <div className='card-body'>
            <h5>App New Contact</h5>
            <div className="border border-primary border-2 rounded p-3">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                    <label className="md-2 fw-bold">Contact Name</label>
                    <input type="text" className="form-control" onChange={handleChange} name='name' value={formDate.name} placeholder="Enter station address" />
                  </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                    <label className="md-2 fw-bold"> Address</label>
                    <input type="text" className="form-control" onChange={handleChange} name='address' value={formDate.address} placeholder="Enter station address" />
                  </div>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-md-12">
                    <div className="form-group">
                    <label className="md-2 fw-bold">Telephone Number</label>
                    <input type="text" className="form-control" onChange={handleChange} name='telephone' value={formDate.telephone} placeholder="Enter telephone number" />
                  </div>
                  </div> 
                </div>
                <hr/>
                <button type="button" onClick={formDate.isEdit ? handleUpdate : handleSave} className={formDate.isEdit ? 'btn btn-success' : 'btn btn-primary'}> {formDate.isEdit ? 'Update Contact' : 'Save Contact'}</button>
              </form>
            </div>

            <div className="border border-2 rounded mt-5 p-3">
              <h5>Contact List</h5>

              {list.map((ls, index) => (
              <div className='text-wrapper'>
                <div>
                  <h5>{ls.name}</h5>
                <p>{ls.address} <span className='fw-bold text-danger'>{ls.telephone}</span></p>
                </div>
                <div className='btn-group'>
                  <button type='button' onClick={()=>handleEdit(ls)} className='btn btn-warning'>Edit</button>
                  &nbsp;
                  <button type='button' onClick={()=>handleDelete(ls.id)} className='btn btn-danger'> Remove</button>
                </div>
              </div>
              ))} 
            </div>
            
            

          </div>
        </div>
      </div>
  );
}

export default Contact;



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
