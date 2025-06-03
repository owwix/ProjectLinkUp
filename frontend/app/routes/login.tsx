import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Login" },
  ];
}

export default function Login() {
  return [
    <div>login</div>
  ];
}
