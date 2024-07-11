import Link from "next/link";

export default function SignUpForm() {
  return (
    <div className="bg-[#D9D9D9] p-8 px-12 text-lg my-8 md:text-2xl flex rounded-lg mx-8">
      <form className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          className="form-input"
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="email">Email</label>
        <input className="form-input" type="text" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input
          className="form-input green-text"
          type="password"
          id="password"
          name="password"
        />
        <div className="flex justify-center items-center w-full">
          <button
            className="font-extrabold bg-[#037A68] p-2 text-white rounded-md flex w-fit justify-center mt-4"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="text-sm flex justify-center items-center font-semibold">
          <p className="mt-4">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-[#037A68]">Login</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
