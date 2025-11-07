import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submit hone par ye chalega
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          {...register("firstName", { required: "First Name is required" })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Middle Name:</label>
        <input
          type="text"
          {...register("middleName")}
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          {...register("lastName", { required: "Last Name is required" })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;