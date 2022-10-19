import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import style from "./FormModal.module.css";

const FormModal = (props) => {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const [website, setWebsite] = useState(props.website);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onOkClicked([name, email, phone, website]);
  };

  const onCancelHandler = () => {
    props.onEditClicked(false);
  };

  return (
    <>
      <div className={style["modal-backdrop"]}>
        <div
          className={style["modal-form"]}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={style.container}>
            <div className={style["modal-header"]}>
              <span className={style["modal-title"]}>Edit Profile</span>
              <span className={style.close} onClick={onCancelHandler}>
                <CloseOutlined style={{cursor:'pointer'}}/>
              </span>
            </div>
            <hr />
            <form onSubmit={submitHandler}>
              <div className={style["modal-content"]}>
                <div className={style.row}>
                  <div className={style["col-25"]}>
                    <label htmlFor="name">
                      Name:
                    </label>
                  </div>
                  <div className={style["col-75"]}>
                    <input
                      type="text"
                      id="name"
                      title="Name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className={style.row}>
                  <div className={style["col-25"]}>
                    <label htmlFor="email">
                      Email:
                    </label>
                  </div>
                  <div className={style["col-75"]}>
                    <input
                      type="email"
                      id="email"
                      title="Email"
                      value={email}
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className={style.row}>
                  <div className={style["col-25"]}>
                    <label htmlFor="phone">
                      Phone:
                    </label>
                  </div>
                  <div className={style["col-75"]}>
                    <input
                      type="text"
                      id="phone"
                      title="Phone"
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className={style.row}>
                  <div className={style["col-25"]}>
                    <label htmlFor="website">
                      Website:
                    </label>
                  </div>
                  <div className={style["col-75"]}>
                    <input
                      type="text"
                      id="website"
                      title="Website"
                      value={website}
                      pattern="http(s?)(:\/\/)((www.)?)(([^.]+)\.)?([a-zA-z0-9\-_]+)([a-zA-Z])(\/[^\s]*)?"
                      required
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className={style.row}>
                <button
                  type="submit"
                  className={`${style.btn} ${style["btn-primary"]} ${style["btn-right"]} ${style["on-hover-ok"]}`}
                >
                  <span>OK</span>
                </button>
                <button
                  type="button"
                  onClick={onCancelHandler}
                  className={`${style.btn} ${style["btn-right"]} ${style["on-hover-blue"]}`}
                >
                  <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormModal;