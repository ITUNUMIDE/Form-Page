import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DisplayPage = () => {
  const Container = styled.div`
    display: flex;
    width: 40%;
    margin: auto;
    justify-contents: center;
    flex-direction: column;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 25);
    transition: 0.5s;
    border-radius: 20px;
    border: 3px;
    padding: 0 20px 20px;

    h1 {
      font-size: 3rem;
    }
    .div {
      width: 90%;
      height: 50%;
      margin: auto;
      margin-top: 0px;
    }

    strong {
      font-size: 1.2rem;
    }
    .btn {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    button {
      width: 40%;
      border: none;
      border-radius: 10px;
      height: 35px;
      background: rgba(77, 96, 96, 255);
      color: rgb(220, 225, 230);
      cursor: pointer;
    }
    button:hover {
      background: rgb(220, 225, 230);
      color: rgba(77, 96, 96, 255);
      height: 40px;
    }
    @media (max-width: 700px) {
      width: 90%;
      height: 75vh;
      justify-content: start;
      padding-top: 5%;
      h1 {
        font-size: 2.3rem;
      }
      .btn {
        margin-top: 20%;
      }
    }
  `;
  const navigate = useNavigate();
  const handlePrevious = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    window.location.href = "https://waitbutwhy.com";
  };
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No data available</p>;
  }

  return (
    <Container>
      <h1>Submitted Data</h1>
      <div className="div">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Address:</strong> {formData.address}
        </p>
        <div className="btn">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </Container>
  );
};

export default DisplayPage;
