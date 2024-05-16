export default function ListStudents({
  listStudents,
  handleDelete,
  onClick,
  viewStudent,
}) {
  return (
    <>
      <div>
        <button className="buttonHeader" onClick={onClick}>
          Thêm Mới Sinh Viên
        </button>
        <input type="text" placeholder="SearchStudents" />
        <button className="buttonHeader">Tìm Kiếm</button>
        <input type="text" placeholder="Sắp xếp" />
      </div>
      <div>
        <span>Danh Sách Sinh Viên</span>
        <table>
          <th>ID</th>
          <th>Mã Sinh Viên</th>
          <th>Họ và Tên</th>
          <th>Tuổi</th>
          <th>Giới Tính</th>
          <th>Hành Động</th>
          {listStudents?.map((student, index) => (
            <tr key={student.id}>
              <th>{index + 1}</th>
              <th>{student.id}</th>
              <th>{student.name}</th>
              <th>{student.age}</th>
              <th>{student.gender}</th>
              <th>
                <button
                  className="buttonBody1"
                  onClick={() => viewStudent(student)}
                >
                  Xem
                </button>
                <button
                  className="buttonBody2"
                  onClick={() => editStudent(student)}
                >
                  Sửa
                </button>
                <button
                  className="buttonBody3"
                  onClick={() => handleDelete(student.id)}
                >
                  Xóa
                </button>
              </th>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
