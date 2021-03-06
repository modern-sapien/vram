import React, { useEffect, useState } from "react";
import SoloMain from "./../../containers/SoloMain/SoloMain";
import { useHistory, useParams } from "react-router-dom";
import API from "../../utils/API";
import axios from "axios";

const ImageSearchObj = () => {
  const history = useHistory();

  const { id } = useParams();
  const [updateImgObj, setUpdateImgObj] = useState({
    title: "",
    created: "",
  });

  useEffect(() => {
    getImage();
  }, []);

  function getImage() {
    API.getImage(id)
      .then((res) => {
        console.log(res.data.data);
        let stringDate = res.data.data.createdAt;
        let date = stringDate.split("T");

        setUpdateImgObj({
          title: res.data.data.title,
          created: date[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateUserImage() {
    axios
      .put(`/api/v1/images/${id}`, updateImgObj)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  }

  function deleteUserImage() {
    axios
      .delete(`/api/v1/images/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    history.goBack();
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUpdateImgObj({ ...updateImgObj, [name]: value });
  }

  function goBack(event) {
    history.goBack();
  }

  return (
    <>
      <div className="user-form-modal row">
        <div className="user-form-modal-background">
          <form action="">
            title
            <input
              id="title"
              value={updateImgObj.title}
              type="text"
              className="validate"
              name="title"
              onChange={handleInputChange}
            />
            {updateImgObj.created}
            <div
              className="col s12 m12 l12 form-btn"
              value="update"
              onClick={updateUserImage}
            >
              Update User Image
            </div>
            <div
              className="col s12 m12 l12 form-btn"
              value="delete"
              onClick={deleteUserImage}
            >
              Delete Image
            </div>
            <div
              className="col s12 m12 l12 form-btn"
              value="cancel"
              onClick={goBack}
            >
              Back
            </div>
          </form>
        </div>
      </div>

      <SoloMain props={id} />
    </>
  );
};

export default ImageSearchObj;
