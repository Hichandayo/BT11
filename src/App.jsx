import { useEffect, useState } from "react";
import "./App.css";
import AddStudent from "./component/AddStudent";
import ListStudents from "./component/ListStudents";
import EditStudent from "./component/EditStudent";

export default function App() {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  useEffect(() => {
    document.title = "Quản Lý Sinh Viên";
  }, []);
  const [showAdd, setShowAdd] = useState(false);

  const showAddStudent = () => {
    setShowAdd(!showAdd);
  };
  const addStudent = (event) => {
    event.preventDefault();
    console.dir(event.target);
    const codeStudents = event.target[0].value;
    if (codeStudents === "") {
      alert("Mã Sinh Viên Không Được Bỏ Trống!!");
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        code: codeStudents,
        name: event.target[1].value,
        age: event.target[2].value,
        gender: event.target[3].value,
        date: event.target[4].value,
        location: event.target[5].value,
        address: event.target[6].value,
      };
      setStudents([...students, newStudent]);
      localStorage.setItem(
        "students",
        JSON.stringify([...students, newStudent])
      );
      setShowAdd(!showAdd);
      alert("Thêm Học Sinh Thành Công!!!");
      event.target.reset();
    }
  };
  const handleDelete = (id) => {
    const student = students.find((ele) => ele.id == id);
    if (
      window.confirm(`Bạn Có Chắc Là Muốn Xóa Sinh Viên ${student.name} không`)
    ) {
      const index = students.findIndex((ele) => ele.id == id);
      students.splice(index, 1);
      setStudents([...students]);
      setStudents(students.filter((ele) => ele.id != id));
      localStorage.setItem("students", JSON.stringify([...students]));
    }
  };
  const [isToggle, setIsToggle] = useState(false);
  //ViewStudent
  const viewStudent = (student) => {
    console.log(student, "aSDS");
    alert(`Xem Thông Tin Sinh Viên:
      Mã Sinh Viên: ${student.code}
      Tên Sinh Viên :${student.name}
      Tuổi:${student.age}
      Giới Tính:${student.gender}`);
  };

  //Edit Student
  const [showEdit, setShowEdit] = useState(false);
  const editStudent = (students) => {
    console.log(students);
    setShowEdit(!showEdit);
  };

  return (
    <>
      <ListStudents
        listStudents={students}
        handleDelete={handleDelete}
        onClick={showAddStudent}
        viewStudent={viewStudent}
        editStudent={editStudent}
      />
      {showAdd && <AddStudent addStudent={addStudent} />}
      {showEdit && <EditStudent />}
    </>
  );
}
