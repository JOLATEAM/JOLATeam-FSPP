import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../Pages/OrderConfirmation";
import * as yup from "yup";
//import { NavItem } from "react-bootstrap";

const list = [
  { word: "zesty", menu: ["mediterranean", "mexican"] },
  { word: "rich", menu: ["french", "italian"] },
  { word: "creamy", menu: ["italian", "french"] },
  { word: "hearty", menu: ["spanish", "other"] },
  { word: "crunchy", menu: ["other", "korean"] },
  { word: "sweet", menu: ["newamerican", "thai"] },
  { word: "savory", menu: ["spanish", "korean"] },
  { word: "comfort", menu: ["american", "vietnamese"] },
  { word: "fresh", menu: ["mediterranean", "vietnamese"] },
];
function Choose() {
  const {
    activeStepIndex,
    setActiveStepIndex,
    formData,
    setFormData,
    apiData,
    setRestaurant,
  } = useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    choose: yup.array().min(2).of(yup.string().required()).required(),
    name: yup.string(),
  });
  const restaurantPicker = (list, apiObj, survey) => {
    if (!formData.choose && !formData.eliminate) {
    }
    //POST ELIMINATION IS LIST OF RESTAURANT OBJECTS REMAINING AFTER FIRST ELIMINATION ROUND
    let postElimination = apiObj.filter(
      (e) =>
        e.matchedcategory.type !== survey.eliminate[0] &&
        e.matchedcategory.type !== survey.eliminate[1]
    );
    let wordAssociationCuisines = list
      .filter((e) => survey.choose.includes(e.word))
      .map((e) => e.menu)
      .flat();

    let finalChoice = postElimination.filter((restaurant) =>
      wordAssociationCuisines.includes(restaurant.matchedcategory.type)
    );
    let chosenRestaurant = {};
    if (finalChoice.length === 1) {
      chosenRestaurant = finalChoice[0];
    } else if (finalChoice.length > 1) {
      chosenRestaurant =
        finalChoice[Math.floor(Math.random() * finalChoice.length)];
    } else {
      chosenRestaurant =
        postElimination[Math.floor(Math.random() * postElimination.length)];
    }
    return chosenRestaurant;
  };

  return (
    <Formik
      initialValues={{
        choose: [],
        notes: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setRestaurant(restaurantPicker(list, apiData, formData));
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form
        className="w-full p-10 rounded-xl shadow-lg bg-orange-200 max-w-xl mb-5 border-[0.5rem] border-orange-400"
        role="group"
        aria-labelledby="checkbox-group"
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-600 dark:text-white">
          Select at least 2 from the list:
        </h2>
        <div className="flex flex-wrap items-start mb-2">
          {list.map((item, i) => {
            return (
              <div className="w-1/2 my-1 flex-col">
              <label className="p-2 font-bold text-gray-600 text-xl " key={i}>
                <Field
                  name="choose"
                  type="checkbox"
                  value={item.word}
                  className="p-4 mr-2 rounded-full border-4 border-orange-400 text-orange-400 focus:ring-orange-400 focus:border-gray-500"
                />
                {item.word[0].toUpperCase() + item.word.substring(1)}
              </label>
              </div>
            );
          })}
        </div>
        <ErrorMessage name="choose" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="w-full mb-4 items-justify-center text-center text-xl font-bold text-gray-600">
            Order Notes
          </label>
          <Field
            name="notes"
            as="textarea"
            className="w-full rounded-xl border-4 border-gray-400 p-3"
            placeholder="Spicy, Allergies, Protein of Choice?"
          />
        </div>
        <ErrorMessage name="notes" render={renderError} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            className="rounded-xl bg-gray-600 hover:bg-gray-700 text-lg font-bold text-white my-2 p-3"
            type="button"
            onClick={() => {
              setActiveStepIndex(activeStepIndex - 1);
            }}
          >
            Back
          </button>
          <button
            className="rounded-xl bg-gray-800 hover:bg-gray-900 text-lg font-bold text-white my-2 p-3"
            type="submit"
          >
            Continue
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default Choose;
