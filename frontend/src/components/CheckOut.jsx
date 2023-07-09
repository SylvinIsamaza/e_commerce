import { City, Country } from "country-state-city";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function CheckOut() {
  const [active, setActive] = useState(1);
  const {user}=useSelector((state)=>state.user)
  const paymentOrder = [
    {
      name: "Shipping",
    },
    {
      name: "Payment",
    },
    {
      name: "Success",
    },
  ];
  const[zipCode,setZipCode]=useState("")
  const [country,setCountry]=useState("")
  const [city,setCity]=useState("")
  const [name,setName]=useState("")
  const [address1,setAddress1]=useState("")
  const [address2,setAddress2]=useState("")
  const [email,setEmail]=useState("")
  return (
    <div className="w-full flex items-center flex-col px-[8%] 600px:gap-[5%] py-6">
              <div className="w-full items-center py-[5%] 350px:flex  ">
          {paymentOrder.map((item, i) => (
            <>
              {i + 1 == active ? (
                <div className="w-full items-center 350px:hidden flex justify-center">
                  <div className=" 350px:hidden bg-red-500 w-[50%] h-[35px] flex items-center rounded-full">
                    <h1
                      className={`${
                        i + 1 == active ? "text-white" : "text-red-500"
                      } font-[800] text-center  w-full`}
                    >
                      {i + 1}.{item.name}
                    </h1>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div
                className={`${
                  i + 1 == active ? "bg-red-500" : "bg-red-100"
                } w-[25%] max-w-[120px] min-w-[80px] rounded-full f items-center justify-center h-[35px] 350px:flex hidden`}
              >
                <h1
                  className={`${
                    i + 1 == active ? "text-white" : "text-red-500"
                  } font-[800]`}
                >
                  {i + 1}.{item.name}
                </h1>
              </div>
              {i + 1 < paymentOrder.length ? (
                <div className="bg-red-200 h-[3px] w-[10%] 350px:block hidden"></div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      <div className="w-full py-4 flex gap-[3%] 800px:flex-row flex-col ">

        <div className=" 800px:w-[63%] bg-white w-full 800px:my-0 my-4 py-6 px-3 rounded-md">
          <h1 className="font-[600] text-[25px]">Shipping address</h1>
          <div className="flex gap-3 w-full py-2">
          <div className="w-full">
              <label htmlFor="name">
                Full name
              </label>
              <br />
              <input type="text" placeholder="enter your full name" className="w-full rounded-[4px] border border-gray-300 px-3 h-[35px]" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>

            </div>
            <div  className="w-full">
              <label htmlFor="email">
                Email address
              </label>
              <br />
              <input type="email" placeholder="enter your email" className="w-full rounded-[4px] border border-gray-300 px-3 h-[35px]"  id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            </div>
             </div>
             <div className="flex gap-3 w-full py-2">
          <div className="w-full">
              <label htmlFor="phoneNumber">
                Phone number
              </label>
              <br />
              <input type="text" placeholder="enter your phone number" className="w-full rounded-[4px] border border-gray-300 px-3  h-[35px]"  id="phoneNumber"/>

            </div>
            <div  className="w-full">
              <label htmlFor="zipCode">
                Zip code
              </label>
              <br />
              <input type="text" placeholder="enter your zip code" className="w-full rounded-[4px] border border-gray-300 px-3 h-[35px]" id="zipCode" value={zipCode} onChange={(e)=>setZipCode(e.target.value)}/>

            </div>
             </div>

             <div className="flex gap-3 w-full py-2">
          <div className="w-full">
              <label htmlFor="country">
               Country
              </label>
              <br />
              <select  className="w-full rounded-[4px] border border-gray-300 px-3  h-[35px] bg-transparent"  id="country" value={country} onChange={(e)=>setCountry(e.target.value)}>
                <option value="">Choose your country</option>
                {Country.getAllCountries().map((country)=><option value={country.isoCode} key={country.isoCode}>{country.name}</option>)}
              </select>

            </div>
            <div className="w-full">
              <label htmlFor="city">
               City
              </label>
              <br />
              <select  className="w-full rounded-[4px] border border-gray-300 px-3  h-[35px] bg-transparent"  id="city" value={city} onChange={(e)=>setCity(e.target.value)}>
                <option value="">Choose your city</option>
                {City.getCitiesOfCountry(country).map((city)=><option value={city.isoCode} key={city.isoCode}>{city.name}</option>)}
              </select>

            </div>
            
             </div>
             <div className="flex gap-3 w-full py-2">
          <div className="w-full">
              <label htmlFor="address1">
                address 1
              </label>
              <br />
              <input type="address" placeholder="enter your phone number" className="w-full rounded-[4px] border border-gray-300 px-3  h-[35px]"  id="address1" value={address1} onChange={(e)=>setAddress1(e.target.value)}/>

            </div>
            <div  className="w-full">
              <label htmlFor="address2">
                address 2
              </label>
              <br />
              <input type="address" placeholder="enter your zip code" className="w-full rounded-[4px] border border-gray-300 px-3 h-[35px]" id="address2" value={address2} onChange={(e)=>setAddress2(e.target.value)}/>

            </div>
             </div>
             <label>
              Choose from your address
             </label>
             <br />
{
user&&user.addressess.map((addresss)=>
<>
<input type="checkbox" name="address" id={addresss.addressType}  className="mr-2" onChange={(e)=>{
  setAddress1(addresss.address1)
  setAddress2(addresss.address2)
  setCountry(addresss.country)
  setCity(addresss.city)
}}/>
<label htmlFor={addresss.addressType}>{addresss.addressType}</label>
</>
  
)
}
             <div>

             </div>
        </div>
        <div className="800px:w-[42%] w-full bg-white rounded-sm shadow-sm 800px:my-0 my-4">
        hey
      </div>
      </div>
 
    </div>
  );
}

export default CheckOut;
