import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  /**
   * Challenge: Add a textarea for "comments" to the form
   * Make sure to update state when it changes.
   */

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="text"
        placeholder="email@example.com"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        placeholder="Write Something"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
    </form>
  );
}
