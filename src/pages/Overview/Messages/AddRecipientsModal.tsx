import Modal from "../../../components/Modal/Modal";
import { IoFilter } from "react-icons/io5";

interface AddRecipientsModalProps {
    onClose: () => void;
}

const AddRecipientsModal: React.FC<AddRecipientsModalProps> = ({onClose}) => {
  return (
    <Modal>
      <div className="bg-white p-6 rounded-xl m-10 max-h-screen overflow-y-scroll">
        <div className="p-4 flex justify-between items-center">
          <div className="flex space-x-2 text-[#7F7F7F]">
            <input type="checkbox" />
            <p>40 Persons</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer text-[#AAAAAA]">
            <p>
              <IoFilter />
            </p>
            <p>Filter</p>
          </div>
        </div>
        <div className="border rounded-xl">
          <div className="grid grid-cols-[100px,210px,280px,150px,150px,auto] gap-4 border-b p-4 ">
            <div className="flex space-x-1 items-center">
              <input type="checkbox" />
              <p>Profile</p>
            </div>
            <div className="">Name</div>
            <div className="">Email</div>
            <div className="">Phone Number</div>
            <div className="">Gender</div>
          </div>
          <div className="grid grid-cols-[100px,210px,280px,150px,150px,auto] gap-4 border-b p-4  ">
            <div className="flex space-x-1 items-center">
              <input type="checkbox" />
              <p>Profile</p>
            </div>
            <div className="">Temidire Owoeye</div>
            <div className="">temidireowoeye</div>
            <div className="">09073210998</div>
            <div className="">male</div>
          </div>
          <div className="grid grid-cols-[100px,210px,280px,150px,150px,auto] gap-4 p-4  ">
            <div className="flex space-x-1 items-center">
              <input type="checkbox" />
              <p>Profile</p>
            </div>
            <div className="">Ikeokwu Somtochi</div>
            <div className="">somtoikeokwu@gmail.com</div>
            <div className="">07067893303</div>
            <div className="">female</div>
          </div>
        </div>
        <div className="flex justify-center space-x-8 mt-6">
          <button className="text-[#4C4C4C] bg-[#F4F4F4] rounded-lg w-64 py-2 text-lg">
            Add Recipients
          </button>
          <button
            className="text-[#4E4E4E] bg-white rounded-lg w-64 py-2 text-lg border border-[#AAAAAA]"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddRecipientsModal;
