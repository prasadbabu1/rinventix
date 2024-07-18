
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { PlaneIcon, UserIcon } from "../../constants";
import { useNavigate } from 'react-router-dom';
// import { json } from 'express';

function Footer() {
const nav =useNavigate()
  let arr=[]
  const [textareaValue, setTextareaValue] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const getLocal =JSON.parse(localStorage.getItem('data'))
  if(getLocal){
     arr=[...getLocal]
  }

  const handleSubmit = () => {

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      const base64Image = reader.result;

     
      let inputData={
              Image:base64Image,
              Message:textareaValue
      }

      arr.push(inputData)
      localStorage.setItem("data", JSON.stringify(arr))


      // Clear the form
      setImageFile(null);
      setTextareaValue('');
      
      alert('Data stored in local storage!');
      
    };



    // if (textareaValue && imageFile) {
    //   const obj = { text:textareaValue,image:imageFile.name,title:textareaValue.substring(0,30)}
    //   localStorage.setItem('chatHist', JSON.stringify([...arr,obj])); 
    //   alert('Values stored in localStorage');
    // } else {
    //   alert('Please enter a message and select an image file');
    // }
    nav("/popup")
  };

  return (
    <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-gray-800 md:!bg-transparent">
      <form className="mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6">
        <div className="relative flex h-full flex-1 md:flex-col">
          <div className="ml-1 mt-1.5 md:w-full md:m-auto md:flex md:mb-2 gap-2 justify-center">
            <div className="text-gray-100 p-1 md:hidden">
              <UserIcon />
            </div>
          </div>
    <div className="flex flex-col w-full py-2 pl-3 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white rounded-md bg-[rgba(64,65,79,var(--tw-bg-opacity))]">
      <textarea
        tabIndex="0"
        data-id="root"
        rows="1"
        style={{color:"white"}}
        className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent outline-none overflow-y-hidden h-[23px]"
        placeholder="Type Here..."
        value={textareaValue}
        onChange={handleTextareaChange}
      ></textarea>
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
        <div className="p-2 bg-gray-30 rounded-md cursor-pointer">
          <span>Upload Image</span>
        </div>
      </div>
      <button 
        className="absolute p-1 rounded-md text-gray-400 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-black"
        onClick={handleSubmit }
      >
        <FaPaperPlane />
      </button>
    </div>
    </div>
    </form>
    </div>
  );
}

export default Footer;






