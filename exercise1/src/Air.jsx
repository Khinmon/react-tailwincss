import Footer from "./Footer";
import "./main.css";

const Air = ({ name, age, address }) => {
  return (
    <div>
      <h1 style={{ color: "#fff", backgroundColor: "#007bff" }}>
        My name is {name} and my age is {age} my address is {address}.
      </h1>
      <h1 className="h1">Welcome</h1>
      <Footer />
    </div>
  );
};

export default Air;
