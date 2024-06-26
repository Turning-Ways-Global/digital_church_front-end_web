const GoogleButton = () => {
  return (
    <a
      className="border border-[#CBD5E0] rounded-[20px] py-3 px-6 flex space-x-3 items-center w-full lg:max-w-[550px] cursor-pointer mt-5"
      href="https://digital-church.onrender.com/api/v1/users/auth/google/admin"
    >
      <img src="/assets/images/Google.svg" alt="" />
      <p className=" text-center w-full text-[#67728A] text-lg font-medium">
        Continue with google
      </p>
    </a>
  );
};

export default GoogleButton;
