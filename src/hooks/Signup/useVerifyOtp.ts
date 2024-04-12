import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Token {
  token: string;
}

const useVerifyOtp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (token: Token) =>
      axios
        .patch<Token>(
          "https//digital-church.onrender.com/api/v1/users/verify-email",
          token
        )
        .then((res) => res.data),
    onSuccess: () => {
      navigate("/personalinfo");
    },
  });
};

export default useVerifyOtp;
