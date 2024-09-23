import React from 'react'
const Profile = (props) => {
  return (
    <div className="profile-info">
                <h1>{props.name}</h1>
                <address>
                  <p>
                    Address: 123 West 12th Street, Suite 456 New York, NY 123456{" "}
                    <br /> Phone: {props.telephone} <br /> Email:
                    <a href="#">
                      {" "}
                      <span
                        className="__cf_email__"
                        data-cfemail="167f62657b73566563646c7f7a737173737d3875797b"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </p>
                </address>
              </div>
  )
}
export default Profile