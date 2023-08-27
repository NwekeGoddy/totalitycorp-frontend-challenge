import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import * as Yup from "yup";
import axios from "axios";
import countries from "countries-list";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  country: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Invalid email"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postalCode: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});

const CheckoutForm: React.FC = () => {
  const [countryOptions, setCountryOptions] = useState<any[]>(
    Object.entries(countries.countries).map(([code, country]) => ({
      value: code,
      label: country.name,
    }))
  );

  const handleSubmit = async (values: FormData) => {
    try {
      // Simulate API call
      const response = await axios.post(
        "https://dummy-api.com/checkout",
        values
      );
      console.log(response.data); // Handle API response
    } catch (error) {
      console.error(error);
    }
  };

  const { total } = useContext(CartContext);

  return (
    <section className="mt-4 px-8 pt-6 max-w-4xl mx-auto ">
      <div className="flex flex-col items-center mt-[103px]">
        <h2 className="my-4 w-full text-;eft  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
          Express<span className="opacity-60">CHECKOUT</span>
        </h2>

        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            postalCode: "",
            phone: "",
            country: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="w-full ">
            <div className="w-full grid-cols-1 grid sm:grid-cols-2 gap-2 sm:gap-4">
              {/* Email */}
              <div>
                <label className="block mb-1">Email:</label>
                <Field
                  type="email"
                  name="email"
                  required
                  className="w-full border p-1 rounded"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* First Name */}
              <div>
                <label className="block mb-1">First Name:</label>
                <Field
                  type="text"
                  name="firstName"
                  required
                  className="w-full border p-1 rounded"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block mb-1">Last Name:</label>
                <Field
                  type="text"
                  name="lastName"
                  required
                  className="w-full border p-1 rounded"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

                {/* Country */}
                <div>
                <label className="block mb-1">Country:</label>
                <Field name="country">
                  {({ field, form }: any) => (
                    <Select
                      options={countryOptions}
                      value={countryOptions.find(
                        (option) => option.value === field.value
                      )}
                      onChange={(selectedOption: any) =>
                        form.setFieldValue(field.name, selectedOption.value)
                      }
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

               {/* City */}
               <div>
                <label className="block mb-1">City:</label>
                <Field
                  type="text"
                  name="city"
                  required
                  className="w-full border p-1 rounded"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block mb-1">Address:</label>
                <Field
                  type="text"
                  name="address"
                  required
                  className="w-full border p-1 rounded"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

             

              {/* Postal Code */}
              <div>
                <label className="block mb-1">Postal Code:</label>
                <Field
                  type="text"
                  name="postalCode"
                  required
                  className="w-full border p-1 rounded"
                />
                <ErrorMessage
                  name="postalCode"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1">Phone:</label>
                <Field
                  name="phone"
                  render={({ field, form }: any) => (
                    <PhoneInput
                      country={"us"}
                      value={field.value}
                      onChange={(phone: string) =>
                        form.setFieldValue(field.name, phone)
                      }
                      inputProps={{
                        required: true,
                        className: "w-full border p-1 rounded pl-12",
                      }}
                    />
                  )}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

            
            </div>

            {/* Subtotal and Total */}
            <div className="mt-8">
              <p>Subtotal: {total}</p>
              <p>Shipping(flat): ₦70</p>
              <p>Total: ₦{total}</p>
            </div>

            <div className="flex flex-row gap-2 justify-center mt-4">
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black hover:opacity-90 text-white py-1 px-4 rounded mb-4"
              >
                Complete Order
              </button>

              <Link to="/">
                <button className="bg-black hover:opacity-90 text-white py-1 px-4 rounded mb-4">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default CheckoutForm;