import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";
import sohoAPI from "../data/data";

let apiCategories = [...new Set(sohoAPI.map((e) => e.matchedcategory))];
function Eliminate() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    eliminate: yup.array().max(2).of(yup.string().required()).required(),
  });

  return (
    <Formik
      initialValues={{
        eliminate: [],
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form
        className="block p-6 rounded-lg shadow-lg bg-white max-w-md mb-5"
        role="group"
        aria-labelledby="checkbox-group"
      >
        Elimite two from the list below:
        <div className="flex flex-col items-start mb-2">
          {apiCategories.map((category, i) => {
            return (
              <label className="font-medium text-gray-900" key={i}>
                <Field name="eliminate" type="checkbox" value={category} />
                {category}
              </label>
            );
          })}
        </div>
        <ErrorMessage name="eliminate" render={renderError} />
        <button
          className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
          type="button"
          onClick={() => {
            setActiveStepIndex(activeStepIndex - 1);
          }}
        >
          BACK
        </button>
        <button
          className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
          type="submit"
        >
          Continue
        </button>
      </Form>
    </Formik>
  );
}

export default Eliminate;