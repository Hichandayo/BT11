export default function AddStudent({ student, addStudent }) {
  return (
    <>
      <form className="bodyDiv" onSubmit={addStudent}>
        <span>Thông Tin Sinh Viên</span>
        <div className="inputDiv">
          <label htmlFor="code">Mã Sinh Viên</label>
          <input type="text" id="code" />
        </div>
        <div className="inputDiv">
          <label htmlFor="name">Tên Sinh Viên</label>
          <input type="text" id="name" />
        </div>
        <div className="inputDiv">
          <label htmlFor="age">Tuổi</label>
          <input type="text" id="age" />
        </div>
        <div className="inputDiv">
          <label htmlFor="gender">Giới Tính</label>
          <input type="text" id="gender" />
        </div>
        <div className="inputDiv">
          <label htmlFor="date">Ngày Sinh</label>
          <input type="date" id="date" />
        </div>
        <div className="inputDiv">
          <label htmlFor="location">Nơi Sinh</label>
          <input type="text" id="location" />
        </div>
        <div className="inputDiv">
          <label htmlFor="address">Địa chỉ</label>
          <input type="text" id="address" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
