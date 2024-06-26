import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/Input/PasswordInput";
import { useNavigate } from "react-router-dom";
import NextButton from "../../components/Button/NextButton";
import GoogleButton from "../../components/Button/GoogleButton";
import useLogin from "../../hooks/useLogin";

const LandingPage = () => {
  const schema = z.object({
    inputKey: z.string(),
    password: z
      .string()
      .min(5, { message: "Password should be atleast 5 characters long" }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();
  return (
    <div className="flex justify-center">
      <div className="px-20 py-6 max-w-[1440px]">
        <nav className="flex justify-between items-center">
          <img src="/assets/images/turningwayslogo.svg" alt="" />
          <ul className="flex text-[#6181E7] space-x-10 items-center font-azo text-xl">
            <li>
              <button onClick={() => navigate("/register")}>Sign up</button>
            </li>
            <li>
              <button
                className="border rounded-[22px] py-2 px-8 border-[#3A62E1]"
                onClick={() => navigate("/login/email")}
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
        <main className="grid grid-cols-[550px,1fr]  mt-5  gap-x-20">
          <form
            onSubmit={handleSubmit((data) => {
              const { inputKey, password } = data;
              mutate({ inputKey, password });
            })}
          >
            <h1 className="text-[#555454] text-[46px] font-azoBold leading-[60px] mb-4">
              Your one-stop digital church platform
            </h1>
            <p className="font-azo text=[#7F7E7E] mb-4">
              TurningWays is an AI-powered digital tool designed to help
              churches efficiently organize their membership, manage giving,
              events and soul-winning all in one place.
            </p>
            <Input
              heading={"Email or Phone number"}
              name={"inputKey"}
              register={register}
              placeholder={"email or phone"}
              formError={errors.inputKey?.message}
            />
            <PasswordInput
              name="password"
              heading="Password"
              register={register}
              placeholder="********"
              formError={errors.password?.message}
            />
            <div className="flex justify-between items-center my-10 text-sm lg:text-base">
              <div className="text-[#718096] flex items-center space-x-2">
                <input type="checkbox" />
                <p>remember me</p>
              </div>
              <div
                className="text-[#61BD74] underline underline-offset-[3px] cursor-pointer "
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </div>
            </div>
            <NextButton text="Sign In" isPending={isPending} />
            <div className="flex items-center mt-3 text-[#718096] w-full lg:max-w-[550px]">
              <div className="w-full h-[1px] bg-[#A0AEC0]" />
              <h2 className="mx-5 text-[#718096] text-xs">OR</h2>
              <div className="w-full h-[1px] bg-[#A0AEC0]" />
            </div>
            <GoogleButton />
            <div
              className="border border-[#CBD5E0] py-3 rounded-[20px] space-x-1 flex  px-6 items-center w-full lg:max-w-[550px] cursor-pointer mt-5"
              onClick={() => navigate("/register")}
            >
              <img src="/assets/images/twsymbol.svg" className="" alt="" />
              <p className=" text-center text-[#67728A] text-lg lg:text-md font-medium w-full ">
                New to TurningWays, Join Now
              </p>
            </div>
          </form>
          <div className="place-self-center justify-self-center pr-10 relative">
            <img src="/assets/images/Dashboard.svg" alt="" />
            <img
              src="/assets/images/DashboardMobile.svg"
              className="absolute top-24 right-[-30px] "
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
