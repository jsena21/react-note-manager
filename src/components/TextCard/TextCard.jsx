import { useState } from "react";
import s from "./style.module.css";
import { Trash as TrashIcon } from "react-bootstrap-icons";

export function TextCard({ title, subtitle, content, onClickTrash, onClick }) {
  const [isCardHovered, setisCardHovered] = useState(false);
  const [isTrashHovered, setisTrashHovered] = useState(false);

  function onClick_Trash(e) {
    onClickTrash();
    e.stopPropagation();
  }

  return (
    <div
      onClick={onClick}
      className={`card ${s.container}`}
      onMouseEnter={() => setisCardHovered(true)}
      onMouseLeave={() => setisCardHovered(false)}
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
          <TrashIcon
            size={20}
            onMouseEnter={() => setisTrashHovered(true)}
            onMouseLeave={() => setisTrashHovered(false)}
            style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
            onClick={onClick_Trash}
          />
        </div>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
}
