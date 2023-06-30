import "./index.css";
import Employee from "./Components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./Components/AddEmployee";
function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg",
    },
    {
      id: 3,
      name: "John",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg",
    },
    {
      id: 4,
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg",
    },
    {
      id: 5,
      name: "Corey",
      role: "The Devops Guy",
      img: "https://images.pexels.com/photos/3008355/pexels-photo-3008355.jpeg",
    },
    {
      id: 6,
      name: "Jake",
      role: "Senior",
      img: "https://images.pexels.com/photos/5704852/pexels-photo-5704852.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }
  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee ={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
