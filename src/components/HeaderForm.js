import React, { useState } from "react";

const HeaderForm = () => {
  /*form*/
  const login = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(["", ""]);

  const onSubmit = e => {
    e.preventDefault();

    const credentials = {
      login: login.value,
      password: password.value
    };

    const signIn = async () => {
      const res = await fetch("/api/sign_in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      });

      const data = await res.json();
      console.log(data);
    };

    signIn();
  };

  return (
    <form className="pt-6" onSubmit={onSubmit}>
      <label>Login</label>
      <input
        type="text"
        className="w-full outline-none border-gray-300 border-2 rounded-full mt-1 py-2 px-4 mb-4 focus:border-gray-500 transition duration-150"
        required
        {...login}
      />
      <label>Hasło</label>
      <input
        type="password"
        className="w-full outline-none border-gray-300 border-2 rounded-full mt-1 py-2 px-4 focus:border-gray-500 transition duration-150"
        required
        {...password}
      />
      <button
        type="submit"
        className="bg-purple-500 text-white py-2 px-8 rounded-full mt-4 hover:bg-purple-600 transition duration-150 focus:outline-none"
      >
        Zaloguj
      </button>
    </form>
  );
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
};

export default HeaderForm;
