import "./index.css";
import Employee from "./Components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg",
    },
    {
      name: "John",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg",
    },
    {
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg",
    },
    {
      name: "Corey",
      role: "The Devops Guy",
      img: "https://images.pexels.com/photos/3008355/pexels-photo-3008355.jpeg",
    },
    {
      name: "Jake",
      role: "Senior",
      img: "https://images.pexels.com/photos/5704852/pexels-photo-5704852.jpeg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());
              return(<Employee
              key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                alt={employee.name}
              />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
