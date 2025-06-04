import type { Route } from "./+types/home";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Login" },
  ];
}

export default function Login() {
  return [
    <div className="form-container max-w-md mx-auto p-6">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form>
            <div className="form-control flex items-center px-3 py-2">
                <CiUser className="text-xl text-gray-500 mr-2"/>
                <input type="text" placeholder="Enter your email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="form-control flex items-center px-3 py-2">
                <RiLockPasswordLine className="text-xl text-gray-500 mr-2"/>
                <input type="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
            </div>
        
            <button className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition text-lg font-medium">Sign In</button>
        </form>
        <p className="text-center">Dont have an account? Sign Up here.</p>
    </div>
  ];
}
