import { NavLink } from "react-router-dom";
import { signupFields } from "../../../static data/formFields";
import InputBox from "../../components/common/inputBox/InputBox";
const Registration = () => {
    return (
        <section className="mx-auto my-5 mb-10 w-[90%] rounded bg-white pt-10 pb-20 shadow-md sm:w-[70%] md:w-[55%] lg:w-[45%]">
            <div className="text-center font-serif">
                <h2>Wellcome To Our Shop</h2>
                <h4>Create An Acount</h4>
            </div>
            <form className="mx-auto mt-8 w-[90%] space-y-6 sm:w-[85%]">
                {signupFields.map((field) => (
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
                <button
                    type="submit"
                    className="relative top-5 left-1/2 inline-block -translate-x-1/2 rounded bg-[#d0611e] px-10 py-3 text-white"
                >
                    Sign Up
                </button>
            </form>
            <div className="mt-16 text-center text-xs">
                <p>
                    Alredy Have An Acount
                    <NavLink
                        to="/signin"
                        className="ml-2 text-blue-500 underline"
                    >
                        Sign In
                    </NavLink>
                </p>
            </div>
        </section>
    );
};

export default Registration;
