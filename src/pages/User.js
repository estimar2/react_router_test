import React from "react";

const User = ({ match }) => {
  return (
    <div>
      <h2> User page / {match.params.name}</h2>
    </div>
  );
};

export default User;
