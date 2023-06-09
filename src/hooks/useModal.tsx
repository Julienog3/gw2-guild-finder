import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

const useModal = () => {
  const { modal, setModal } = useContext(ModalContext);


  return { modal, setModal }
}

export default useModal