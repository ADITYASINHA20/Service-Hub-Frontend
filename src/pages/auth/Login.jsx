import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = (e) => {

    e.preventDefault();

    if (!formData.email || !formData.password) {

      toast.error("Please fill all fields");
      return;

    }

    // CUSTOMER DATA
    const customer = {
      email: formData.email,
      role: "CUSTOMER",
    };

    localStorage.setItem(
      "user",
      JSON.stringify(customer)
    );

    localStorage.setItem(
      "role",
      "CUSTOMER"
    );

    toast.success("Customer Login Successful");

    navigate("/");

  };

  return (
    <div
      className="
      min-h-screen
      grid
      grid-cols-1
      lg:grid-cols-2
      "
    >

      {/* LEFT */}
      <div
        className="
        hidden
        lg:flex
        items-center
        justify-center
        bg-cover
        bg-center
        relative
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1920&auto=format&fit=crop')",
        }}
      >

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-10">

          <h1
            className="
            text-white
            text-6xl
            font-extrabold
            "
          >
            Welcome Back
          </h1>

          <p
            className="
            text-gray-200
            text-xl
            mt-6
            "
          >
            Login and continue booking trusted services
          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div
        className="
        flex
        items-center
        justify-center
        bg-white
        px-5
        "
      >

        <div className="w-full max-w-md">

          <div className="text-center">

            <h1
              className="
              text-4xl
              font-bold
              text-gray-800
              "
            >
              Customer Login
            </h1>

          </div>

          <form
            onSubmit={handleLogin}
            className="mt-10"
          >

            {/* EMAIL */}
            <div className="mb-6">

              <label className="font-medium">
                Email
              </label>

              <div
                className="
                flex
                items-center
                border
                rounded-xl
                mt-2
                px-4
                "
              >

                <Mail className="text-gray-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                  w-full
                  py-4
                  px-3
                  outline-none
                  "
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="mb-6">

              <label className="font-medium">
                Password
              </label>

              <div
                className="
                flex
                items-center
                border
                rounded-xl
                mt-2
                px-4
                "
              >

                <Lock className="text-gray-400" />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="
                  w-full
                  py-4
                  px-3
                  outline-none
                  "
                />

              </div>

            </div>

            <button
              type="submit"
              className="
              w-full
              bg-blue-500
              hover:bg-blue-600
              text-white
              py-4
              rounded-xl
              text-lg
              font-semibold
              transition
              "
            >
              Login
            </button>

          </form>

          <p
            className="
            text-center
            text-gray-500
            mt-8
            "
          >
            Don't have an account?

            <Link
              to="/signup"
              className="
              text-blue-500
              font-semibold
              ml-2
              "
            >
              Signup
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;