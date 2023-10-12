import React, { useRef, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Profile = () => {
  const inputRef = useRef();

  const [editEmail, setEditEmail] = useState(false);
  const [editUsername, setEditUsername] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleUpdate = () => {
    const data = {};

    if (email) {
      data.email = email;
    }
    if (password) {
      data.password = password;
    }
  };
  return (
    <section className="flex  min-h-[80vh] justify-center items-center">
      <section className="p-3 flex flex-col rounded shadow-sm max-w-[400px] w-[96%] border  ">
        <input type="file" ref={inputRef} className="hidden" />
        <img
          onClick={() => inputRef.current.click()}
          src="data:image/jpeg;base64,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"
          className="h-[150px] w-[150px] rounded-full self-center mb-5"
        />

        <section className="flex flex-row items-center space-x-2 mb-6">
          <span className="font-[600] flex-1">
            Username :{" "}
            {editUsername ? (
              <input
                className="outline-none border rounded p-2"
                multiple
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span className="font-[400]">Zain Raza</span>
            )}
          </span>
          {!editUsername && (
            <BsPencil
              className="cursor-pointer"
              onClick={(e) => setEditUsername(true)}
            />
          )}
        </section>
        <section className="flex flex-row items-center space-x-2 mb-6">
          <span className="font-[600] flex-1">
            Email :{" "}
            {editEmail ? (
              <input
                className="outline-none border rounded p-2"
                multiple
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <span className="font-[400]">zainrazahere987@gmail.com</span>
            )}
          </span>
          {!editEmail && (
            <BsPencil
              className="cursor-pointer"
              onClick={(e) => setEditEmail(true)}
            />
          )}
        </section>
        <button
          onClick={HandleUpdate}
          className="bg-blue-500 rounded p-2 text-white my-3"
        >
          Update Account{" "}
        </button>
        <h5 className="text-red-500 font-semibold text-[18px] cursor-pointer">
          Delete Account{" "}
        </h5>
      </section>
    </section>
  );
};

export default Profile;
