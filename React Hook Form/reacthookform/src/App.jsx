import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
  } = useForm();

  // Form submit hone par chalega
  async function onSubmit(data) {
    //Api call ko samulate krte hain
    await new Promise((resolve)=>setTimeout(resolve,5000))
      console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      {/* First Name */}
      <div>
        <label>First Name:</label>
        <input
          className={errors.firstName ? 'input-error' : ''}
          type="text"
          {...register("firstName", {
            required: "First name is required",
            minLength: {
              value: 3,
              message: "Min length at least 3",
            },
            maxLength: {
              value: 10,
              message: "Max length at most 10",
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Only letters are allowed",
            },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>

      {/* Middle Name */}
      <div>
        <label>Middle Name:</label>
        <input
          className={errors.middleName ? 'input-error' : ''}
          type="text"
          {...register("middleName", {
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Only letters are allowed",
            },
          })}
        />
        {errors.middleName && (
          <p className="error-msg">{errors.middleName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label>Last Name:</label>
        <input
          className={errors.lastName ? 'input-error' : ''}
          type="text"
          {...register("lastName", {
            required: "Last name is required",
            minLength: {
              value: 3,
              message: "Minimum length is 3",
            },
            maxLength: {
              value: 12,
              message: "Maximum length is 12",
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Only letters are allowed",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-msg">{errors.lastName.message}</p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
  {isSubmitting ? "Submitting..." : "Submit"}
</button>

    </form>
  );
}

export default App;
