import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import style from "./FormModal.module.css";

const DeleteModal = (props) => {
  const onDeleteHandler = (e) => {
    e.preventDefault();
    props.onConfirmDeleteClicked(props.id);
  };

  const onCancelHandler = () => {
    props.onDeleteClicked(false);
  };

  return (
    <>
      <div className={style["modal-backdrop"]}>
        <div className={style["modal-form"]}>
          <div className={style.container}>
            <div className={style["modal-header"]}>
              <span className={style["modal-title"]}>Delete Profile</span>
              <span className={style.close} onClick={onCancelHandler}>
                <CloseOutlined style={{cursor:'pointer'}}/>
              </span>
            </div>
            <hr />
            <div className={style["modal-content"]}>
              <h3>Are you sure to delete this profile? </h3>
            </div>
            <hr />
            <div className={style.row}>
              <button
                type="button"
                onClick={onDeleteHandler}
                className={`${style.btn} ${style["btn-danger"]} ${style["btn-right"]}`}
              >
                <span>Delete</span>
              </button>
              <button
                type="button"
                onClick={onCancelHandler}
                className={`${style.btn} ${style["btn-right"]} ${style["on-hover-red"]}`}
              >
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;