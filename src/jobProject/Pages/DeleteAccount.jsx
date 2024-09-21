import React from "react";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import UserInfoCard from '../Components/UserInfoCard';

function DeleteAccount() {
  return (
    <div>
      <Header page={"deleteAccount"} />
      <section className="clearfix job-bg delete-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Close account</li>
            </ol>
            <h2 className="title">Close Account</h2>
          </div>
          <UserInfoCard page={"closeAccount"} />
          <div className="close-account text-center">
            <div className="delete-account section">
              <h2>Delete Your Account</h2>
              <h4>Are you sure, you want to delete your account?</h4>
              <a href="#" className="btn">
                Delete Account
              </a>
              <a href="#" className="btn cancle">
                Cancle
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default DeleteAccount;