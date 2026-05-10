import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-8xl font-bold text-blue-500">
        404
      </h1>

      <h2 className="text-4xl font-bold mt-4">
        Page Not Found
      </h2>

      <button
        onClick={() => navigate("/")}
        className="
        mt-8
        px-8
        py-4
        bg-blue-500
        hover:bg-blue-600
        text-white
        rounded-2xl
        "
      >
        Go Home
      </button>

    </div>
  );
}

export default NotFound;