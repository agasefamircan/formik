import { Formik } from "formik";

function Second() {
  return (
    <div>
      <h1>Second Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Agasef",
          lastName: "Amircanov",
          email: "agasefamircan@gmail.com",
          gender: "male",
          hobbies: [],
          country: "Azerbaijan",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
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
              placeholder="SurName"
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
            <select
              name="country"
              value={values.country}
              onChange={handleChange}
            >
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
        )}
      </Formik>
    </div>
  );
}

export default Second;
