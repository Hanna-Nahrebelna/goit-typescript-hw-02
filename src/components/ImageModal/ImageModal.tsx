import React from 'react';
import Modal from "react-modal";

const myStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    overflow: "visible",
    height: "500px",
    width: "auto",
  },
};

Modal.setAppElement("#root");

interface PhotoModalProps {
  open: boolean;
  close: () => void;
  photoUrl: string;
}

export default function ImageModal({ open, close, photoUrl }: PhotoModalProps) {
  return (
    <Modal isOpen={open} onRequestClose={close} style={myStyles}>
      <img src={photoUrl} alt="Large" />
    </Modal>
  );
}

