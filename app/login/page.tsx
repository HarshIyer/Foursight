import Navbar from "../components/navbar/Navbar";
import SideText from "./components/SideText";
import SignUpForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="mt-12 w-screen justify-between flex flex-col md:flex-row">
        <div className="md:mx-8 w-full">
          <SideText />
        </div>
        <div className="md:mx-16 flex items-center justify-center w-full">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
