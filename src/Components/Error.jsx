/* eslint-disable react/prop-types */
import { MdError } from "react-icons/md";

const ErrorElement = ({ message = "Something went wrong!" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 rounded-xl shadow-lg p-6 border border-red-300">
      <MdError className="w-12 h-12 text-red-600" />
      <h2 className="text-6xl font-bold text-red-700 mt-4">Error</h2>
      <p className="text-red-600 text-3xl text-center mt-2">{message}</p>
    </div>
  );
};

export default ErrorElement;