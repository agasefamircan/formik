import { useFormik } from "formik";

function Useformik() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "Agasef",
      lastName: "Amircanov",
      email: "agasefamircan@gmail.com",
      gender: "male",
      hobbies: [],
      country: "Azerbaijan",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>UseFormik Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          onChange={handleChange}
          placeholder="Name"
          value={values.firstName}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          onChange={handleChange}
          placeholder="Doe"
          value={values.lastName}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          onChange={handleChange}
          placeholder="name@acme.com"
          type="email"
          value={values.email}
        />
        <br />
        <br />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />
        <br />
        <br />
        <div>
          <input
            type="checkbox"
            name="hobbies"
            value="Football"
            onChange={handleChange}
          />
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobbies"
            value="Cinema"
            onChange={handleChange}
          />
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobbies"
            value="Photography"
            onChange={handleChange}
          />
          Photography
        </div>
        <br />
        <br />
        <select name="country" value={values.country} onChange={handleChange}>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Azerbaijan">Azerbaijan</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default Useformik;
