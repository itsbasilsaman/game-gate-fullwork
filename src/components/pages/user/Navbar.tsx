
import React, { useEffect, useState } from 'react';
import Icon from '../../../assets/Images/chevron-down.png';
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

export const Navbar = React.memo(()=>{
  const [scrollY, setScrollY] = useState<number>(0);

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [selectedBoxItem, setSelectedBoxItem] = useState<string>("");

  const toggleModal = (): void => setIsModalOpen(!isModalOpen);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedBoxItem(event.target.value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedItem(event.target.value);
  };
  const items: string[] = ["English", "Arabic"];
  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the background color based on scroll position
  const background: string = scrollY > 0 
    ? `linear-gradient(to bottom left, #030535, rgb(22, 26, 73))` 
    : 'transparent';

  return (
    <>
      <div className='flex justify-center items-center text-white   md:px-[90px] px-[30px]     h-[90px] lg:gap-[20px] gap-[18px] header fixed top-0 left-0 w-full ' style={{ background , zIndex:'10000' }}>
        <div className='text-[19px] font-semibold'>LOGO</div>
        <div className='relative'>
          <input type="text" placeholder='Search for' className='  h-[48px]    rounded-[1000px] header-inputbox '/>
          <img src={Icon} alt="" className='absolute right-[16px] top-[12px]' />
        </div>
       <div className='flex justify-center items-center lg:gap-[20px] hidden  lg:flex'>
          <button className='lg:w-[100px] lg:h-[56px] country-button modal-country-button rounded-[1000px] lg:text-[19px]'    onClick={toggleModal}>IN</button>
          <button className='lg:w-[228px] lg:h-[56px] country-button rounded-[1000px] lg:text-[19px] '>Become a Seller</button>
          <button className='lg:w-[228px] lg:h-[56px] login-signup-button rounded-[1000px] lg:text-[19px]'>Login / Signup</button>
       </div>
       <div
        className={`w-[27px] h-[27px] lg:hidden block flex justify-center items-center 
          transition-all duration-300 ease-in-out ${
            isClicked ? 'w-[35px] h-[35px] scale-110' : ''
          }`}
        onClick={() => setIsClicked(!isClicked)}
      >
        <HiMiniBars3 className="text-[29px]" />
      </div>
     
      </div>
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
          transition-all duration-300 ease-in-out ${
            isModalOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
          }`}
      >
        <div className='px-[29px] py-[25px] bg-white w-[550px]   modal-main '>
           <section className='w-full flex justify-between items-center pb-[15px]'>
            <p className='text-[20px] font-semibold' style={{fontFamily:'Unbounded'}} >Localization setting</p>
            <IoClose className='text-[23px] cursor-pointer' onClick={toggleModal} />
           </section>
           <section className='header-modal-section gap-[25px]'>
             <div>Country / Region</div>
             <div>
              <p>India</p>
              <p>To change the country, you need a valid mobile number for the new country.</p>
             </div>
             <div>
             <p>Language</p>
             </div>
             <div>
             <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((item) => (
          <label
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="items"
              value={item}
              checked={selectedItem === item}
              onChange={handleChange}
              style={{
                width: "20px",
                height: "20px",
                accentColor: "blue", // Modern browsers allow customizing the color
              }}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
      {selectedItem && <p>You selected: {selectedItem}</p>}
             </div>
             <div>
              <p>Currency</p>
             </div>
             <div>
               <select id="items" value={selectedBoxItem} onChange={handleSelectChange} className='text-black'>
        <option value="">Japanese Yen (JPY)
        </option>
        <option value="Item 1">United States Dollar (USD)</option>
        <option value="Item 2">Indian Rupee (INR)</option>
        <option value="Item 3">Canadian Dollar (CAD)</option>
      </select>
      {selectedBoxItem && <p>You selected: {selectedBoxItem}</p>}
             </div>
           </section>
           <section className='w-full h-auto flex  justify-end my-[25px] gap-[8px]'>
             <button className='bg-white text-black px-[15px] py-[7px] rounded-[10px] font-medium'  onClick={toggleModal} >Cancel</button>
             <button className='bg-white text-black px-[15px] py-[7px] rounded-[10px] font-medium'>Save</button>
           </section>
            
        </div>
      </div>
    </>
  );
})

