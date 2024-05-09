import React, { useState } from "react";
import "./BT08.css";
interface Props {
  job: Job;
  onJobStatusChange: (status: boolean) => void;
  onDelete: (id: number) => void;
}

interface Job {
  name: string;
  id: number;
  status: boolean;
}
export default function Job(props: Props) {
  const { job, onJobStatusChange,onDelete } = props;
  const [isChecked, setIsChecked] = useState(job.status);
  const [showModal, setShowModal] = useState(false);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onJobStatusChange(checked);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAgree = () => {
    handleCloseModal();
  };

  const handleDelete = () => {
    const confirm = window.confirm(`Bạn có chắc chắn muốn xóa công việc này không?`);
    if (confirm) {
      onDelete(job.id);
    }
  };
  const modelForm = () => {
    return (
      <div className="modal">
        <span>Cập nhật công việc</span>
        <span className="material-symbols-outlined" onClick={handleCloseModal}>
          close
        </span>
        <h5>Tên công việc</h5>
        <input type="text" />
        <div>
          <button onClick={handleCloseModal}>Hủy</button>
          <button onClick={handleAgree}>Đồng ý</button>
        </div>
      </div>
    );
  };
  return (
    <div id="manageJob">
      {showModal && modelForm()}
      <div className="inputJob">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <h4>{job.name}</h4>
      </div>
      <div className="inputJob">
        <button onClick={handleClick} id="edit">
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button onClick={handleDelete}>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
