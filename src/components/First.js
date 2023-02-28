import { Formik, Field, Form } from "formik";

function First() {
  return (
    <div>
      <h1>First Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Agasef",
          lastName: "Amircanov",
          email: "agasefamircan@gmail.com",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" placeholder="Name" />
          <br />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" placeholder="SurName" />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="name@acme.com" type="email" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default First;
