import { AiOutlineMessage } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin4Line } from "react-icons/ri";
import useDeleteMember from "../../hooks/Member/useDeleteMember";
import useGetMemberDetails from "../../hooks/Member/useGetMemberDetails";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useSmsRecepientStore } from "../../stores/smsRecepient";

interface SubHeaderProps {
  onNoteClick: () => void;
}

const SubHeader: React.FC<SubHeaderProps> = ({onNoteClick}) => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const memberId = queryParams.get("id");
  const { data } = useGetMemberDetails();

  const { mutate } = useDeleteMember();

  const handleDeleteMember = () => {
    mutate(memberId ? memberId : "");
  };

  const [open, setOpen] = useState<boolean>(false);

  const [openNote, setOpenNote] = useState<boolean>(false);

  const {addRecepients} = useSmsRecepientStore();

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

  return (
    <div className="flex justify-between mt-10 items-center relative">
      <div
        className="bg-[#F1F0F3] rounded-lg p-2 w-fit cursor-pointer h-fit absolute top-1/3 left-0"
        onClick={() => navigate("/admin/directory")}
      >
        <IoIosArrowBack className=" text-2xl w-auto text-[#6C6C6D]" />
      </div>
      <div className="flex space-x-5 items-center ml-20">
        <div className="h-24 relative">
          {data?.member.photo ? (<img src={data.member.photo} className="w-24 h-full rounded-full" alt="profile picture"/>) : <div className="bg-red-100 w-24 h-full rounded-full " />} 
          <MdVerified className="absolute bottom-1 left-[70px] text-2xl text-[#61BD74]" />
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-3 items-center">
            <p className="text-[32px] text-[#5B5A5A] ">
              {data && capitalizeFirstLetter(data.member.first_name) + " " + capitalizeFirstLetter(data.member.last_name)}
            </p>
            <div className="bg-[#E7E6E6] p-2 rounded-[8px]">Member</div>
          </div>
          <ul className="flex justify-between text-[#727171] gap-x-4">
            <li className="flex items-center space-x-1 cursor-pointer">
              <IoCallOutline className="text-xl" />
              <p>Call</p>
            </li>
            <li className="flex items-center space-x-1 cursor-pointer" onClick={() => {navigate('/admin/directory/sms'); addRecepients(data?.member ? [data?.member] : [])}}>
              <AiOutlineMessage className="text-xl"/>
              <p>Text</p>
            </li>
            <li className="flex items-center space-x-1 cursor-pointer">
              <FaRegEnvelope className="text-xl" />
              <p>Email</p>
            </li>
            <li
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => {
                setOpenNote(!openNote);
                onNoteClick();
              }}
            >
              <SlNote className="text-xl" />
              <p>Note</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="bg-white text-[#898888] border border-[#BFBFBF] px-6 py-3 rounded-[8px] font-medium h-fit"
          onClick={() =>
            navigate(
              `/admin/directory/update-member/personal-information?id=${memberId}`
            )
          }
        >
          Edit Profile
        </button>
        <RiDeleteBin4Line
          className="text-[#F24E1E] text-xl cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <Modal>
          <div className="bg-white p-5 max-w-64 rounded-lg space-y-6">
            <p className="text-center">
              Are you sure you'd like to delete this profile?
            </p>
            <div className="flex justify-between space-x-4">
              <button
                className="text-[#4C4C4C] bg-[#F4F4F4] w-1/2 rounded-lg py-2 px-2"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="text-[#4C4C4C] bg-[#F4F4F4] w-1/2 rounded-lg py-2 px-2"
                onClick={() => handleDeleteMember()}
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SubHeader;
