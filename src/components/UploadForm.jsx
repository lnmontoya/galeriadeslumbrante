import React from "react";

const UploadForm = () => {

  const changeHander = (e) => {
    console.log(e.tarjet);
  }

  return (
    <form>
      <input type="file" onChange={changeHander} />
    </form>
  );
};

export default UploadForm;
