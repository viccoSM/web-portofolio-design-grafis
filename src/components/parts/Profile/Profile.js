import React from "react";

const Profile = ({
  userName,
  firstName,
  lastName,
  university,
  major,
  email,
}) => {
  return (
    <>
      <div className="profile container">
        <div className="row">
          <div className="col-md-4">
            <img src="" alt="" />
          </div>
          <div className="col-md-auto align-self-center">
            <blockquote>
              <h5>{userName}</h5>
              <h5>
                {firstName} {lastName} {}
              </h5>
              <p>
                <i>
                  {university},
                  <br />
                  {major}
                </i>
              </p>
            </blockquote>
            <p>
              {email}
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
