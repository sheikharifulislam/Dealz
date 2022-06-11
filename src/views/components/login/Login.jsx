import { NavLink } from "react-router-dom";
import google from "../../../assets/images/google.png";
import login from "../../../assets/images/login.jpg";
import { sininFields } from "../../../static data/formFields";
import InputBox from "../common/inputBox/InputBox";
const Login = () => {
    return (
        <section className="mx-auto my-5 mb-10 w-[90%] rounded bg-white pb-10 shadow-md sm:w-[95%] sm:pb-3 md:w-[90%] md:pb-0 lg:w-[80%] xl:w-[60%]">
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="sm:w-1/2">
                    <img src={login} alt="login" className="h-[400px] w-full" />
                </div>
                <div className="mr-4 px-3 sm:w-[45%] sm:px-0">
                    <div className="mt-2">
                        <h2 className="text-center font-serif">
                            Login To Dealz
                        </h2>
                    </div>
                    <form>
                        {sininFields.map((field) => (
                            <InputBox
                                key={field.id}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />
                        ))}
                    </form>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                id="remember-me"
                                className="foucs:border-0 scale-75"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-1 text-xs"
                            >
                                Remember Me
                            </label>
                        </div>
                        <div>
                            <NavLink
                                to="/forgate-password"
                                className="text-xs underline decoration-wavy"
                            >
                                Forgate Fassword
                            </NavLink>
                        </div>
                    </div>
                    <div className="mx-auto mt-5 flex w-[60%] items-center justify-between sm:w-[95%] lg:w-[70%] xl:w-[80%]">
                        <button className="flex items-center rounded bg-gray-50 px-3 py-3 font-mono text-sm shadow-md">
                            <img src={google} className="mr-1 h-4 w-4" alt="" />
                            Sign In With Google
                        </button>
                        <buttton className="cursor-pointer rounded bg-emerald-300  py-[11px] px-6 text-center font-mono text-sm text-white shadow-md">
                            Sign In
                        </buttton>
                    </div>
                    <div className="mt-5 text-center text-xs">
                        <p>
                            Don't have an acount?
                            <NavLink to="/signup" className="ml-2 underline">
                                Sign Up
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
