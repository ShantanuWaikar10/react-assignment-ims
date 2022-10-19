import React, { useState, useEffect } from "react";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import CardIconText from "./CardIconText";
import CardActions from "./CardActions";
import FormModal from "../Form/FormModal";
import DeleteModal from "../Form/DeleteModal";
import scrollreveal from "scrollreveal";
import style from "./Card.module.css";

const PersonCard = (props) => {
  const [name, setName] = useState(props.person.name);
  const [email, setEmail] = useState(props.person.email);
  const [phone, setPhone] = useState(props.person.phone);
  const [website, setWebsite] = useState(props.person.website);

  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const onEditClicked = (value) => {
    setIsEditClicked(value);
  };

  const onDeleteClicked = (value) => {
    setIsDeleteClicked(value);
  };

  const onConfirmDeleteClicked = (id) => {
    setIsDeleteClicked(false);
    props.dropPerson(id);
  };

  const onOkClicked = (newData) => {
    const [newname, newemail, newphone, newwebsite] = [...newData];

    if (name !== newname) {
      setName(newname);
    }
    if (email !== newemail) {
      setEmail(newemail);
    }
    if (phone !== newphone) {
      setPhone(newphone);
    }
    if (website !== newwebsite) {
      setWebsite(newwebsite);
    }
    setIsEditClicked(false);
  };

  useEffect(() => {
      const sr = scrollreveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `.card`,
        {
          opacity: 0,
          interval: 300,
        }
      );
    }, []);

  return (
    <>
      {isDeleteClicked && (
        <DeleteModal
          id={props.person.id}
          onConfirmDeleteClicked={onConfirmDeleteClicked}
          onDeleteClicked={onDeleteClicked}
        />
      )}
      {isEditClicked && (
        <FormModal
          name={name}
          email={email}
          phone={phone}
          website={website}
          onEditClicked={onEditClicked}
          onOkClicked={onOkClicked}
        />
      )}
      <div className="card">

      
      <div className={style.card}>
        <div className={style["card-header"]}>
          <img
            src={props.person.image}
            alt="Avatar"
            width="200px"
            height="200px"
          ></img>
        </div>
        <div className={style["card-body"]}>
          <h3>{name}</h3>
          <CardIconText icon={<MailOutlined />} text={email} />
          <CardIconText icon={<PhoneOutlined />} text={phone} />
          <CardIconText icon={<GlobalOutlined />} text={website} />
        </div>
        <div className={style["card-actions"]}>
          <CardActions
            onEditClicked={onEditClicked}
            onDeleteClicked={onDeleteClicked}
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default PersonCard;