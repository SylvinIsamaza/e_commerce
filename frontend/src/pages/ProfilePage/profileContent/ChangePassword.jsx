import React, { useState } from "react";
import styles from "../../../styles/styles";
import { AiFillLock, AiFillSave, AiOutlineSave } from 'react-icons/ai'
import { store } from "../../../redux/store";
import { changePassword } from "../../../redux/action/user";
function ChangePassword() {
  const handleSubmit=(e)=>{
e.preventDefault();
store.dispatch(changePassword({oldPassword:oldPassword,newPassword:newPassword,confirmPassword:confirmPassword}))
  }
  const [oldPassword,setOldPassword]=useState("");
  const[newPassword,setNewPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  return (
    <div className="w-full  overflow-y-scroll">
      <form aria-required onSubmit={handleSubmit}>
        <div className="w-full flex items-center justify-center py-6 flex-col">
          <div className="w-[80%] max-w-[500px] 800px:w-[60%] bg-white rounded-lg shadow-sm flex flex-col gap-2 py-14 ">
            <h1 className="text-center text-[25px] font-[700]">
              {" "}
              Change your password
            </h1>
           
              
           
            <label htmlFor="oldPassword" className="mx-[5%]">
              Old password
            </label>

            <input
              type="password"
              name="oldPassword "
              id="oldPassword"
              value={oldPassword}
              onChange={(e)=>setOldPassword(e.target.value)}
              className="w-[90%] border border-gray-200 rounded-md 800px:mx-[5%] mx-[10px] h-[35px] px-2 "
              placeholder="enter your password"
            />
            <label htmlFor="newPassword" className="mx-[5%] ">
              New password
            </label>

            <input
              type="password"
              name="newPassword "
              id="newPassword"
              value={newPassword}
              onChange={(e)=>setNewPassword(e.target.value)}
              className="w-[90%] border border-gray-200 rounded-md 800px:mx-[5%] mx-[10px] h-[35px] px-2 "
              placeholder="enter your new  password"
            />
            <label htmlFor="confirmPassword" className="mx-[5%] ">
              Confirm your new password
            </label>

            <input
              type="password"
              name="confirmPassword "
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="w-[90%] border border-gray-200 rounded-md 800px:mx-[5%] mx-[10px] h-[35px] px-2 "
              placeholder="enter your password"
            />
            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
               
                className={`${styles.button} text-white !bg-blue-500 `}
              ><AiFillSave/> Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
