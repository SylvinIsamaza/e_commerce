import React, {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

import {toast} from 'react-toastify';

import {loadUserStart, loadUserSuccess} from '../../redux/reducer/reducer';
import styles from '../../styles/styles';
import {store} from '../../redux/store';
import {server} from '../../server';
import { RxAvatar } from 'react-icons/rx';


function ShopCreate() {
    const navigate = useNavigate()
    const notify = (message) => toast(message);
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [visible, setVisible] = useState(false)
    const [name, setname] = useState("")
    const [phoneNumber,setPhoneNumber]=useState("")
    const [zipCode,setZipCode]=useState("")
    const [password,setPassword] = useState("")
    const [avatar,setAvatar] = useState("")

    const handleFIleInputChange=(e)=>{
        const file=e.target.files[0]
        setAvatar(file)
    }
    const handleSubmit = async (e) => {

        e.preventDefault()
        store.dispatch(loadUserStart())
        axios.post(`${server}/api/v2/user/login`, {
            email,
            password
        }, {withCredentials: true}).then(async (data) => {
            console.log(data.data)
            await notify('successfully logged in')
            store.dispatch(loadUserSuccess(data.data))

            navigate('/')
            // window.location.reload()
        }).catch(async (err) => {
            console.log(err)
            await notify(err.message)
        })
    }

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>

            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 mb-6 text-center text-3xl font-extrabold text-gray-700'>
                   Register as seller
                </h2>
                <div className=" mx-auto sm:w-full sm:max-w-md:">
                    <div className='bg-white py-8 px-6 shadow rounded sm:rounded-lg'>
                        <form className="space-y-6"
                            onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                    Shop name
                                </label>
                                <div className='mt-1'>
                                    <input type="text" name='name' autoComplete='name' required className='px-3 w-full appearance-none border border-gray-300 rounded py-2 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                        onChange={
                                            (e) => {
                                                setname(e.target.value)
                                            }
                                        }/>
                                </div>
                        </div>

                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                Phone number
                            </label>
                            <div className='mt-1'>
                                <input type="number" name='phoneNumber'  required className='px-3 w-full appearance-none border border-gray-300 rounded py-2 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                    onChange={
                                        (e) => {
                                            setPhoneNumber(e.target.value)
                                        }
                                    }/>
                            </div>
                    </div>
                    <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                Email address
                            </label>
                            <div className='mt-1'>
                                <input type="email" name='email' autoComplete='email' required className='px-3 w-full appearance-none border border-gray-300 rounded py-2 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                    onChange={
                                        (e) => {
                                            setEmail(e.target.value)
                                        }
                                    }/>
                            </div>
                    </div>
                    <div>
                        <label htmlFor="" className='block text-sm font-medium text-gray-700'>
                            Address
                        </label>
                        <div className='mt-1 relative'>
                            <input type='text' name='address' autoComplete='address' required className='px-3 w-full appearance-none border border-gray-300 rounded py-2 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                onChange={
                                    (e) => {
                                        setAddress(e.target.value)
                                    }
                                }/> {} </div>
                    </div>
                    <div>
                    <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                zip code
                            </label>
                            <div className='mt-1'>
                                <input type="number" name='zipCode' autoComplete='zipCode'  required className='px-3 w-full appearance-none border border-gray-300 rounded py-2 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                    onChange={
                                        (e) => {
                                            setZipCode(e.target.value)
                                        }
                                    }/>
                            </div>
                    </div>
                            <label htmlFor="" className='block text-sm font-medium text-gray-700 mt-2'>
                                Password
                            </label>
                            <div className='mt-1 relative'>
                                <input type={
                                        visible ? 'text' : 'password'
                                    }
                                    name='password'
                                    autoComplete='current-password'
                                    required
                                    className='px-3 w-full appearance-none border border-gray-300 rounded py-2 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                    onChange={
                                        (e) => {
                                            setPassword(e.target.value)
                                        }
                                    }/> {
                                visible ? <AiOutlineEye className='absolute top-2 right-2'
                                    size={25}
                                    onClick={
                                        () => {
                                            setVisible(false)
                                        }
                                    }/> : <AiOutlineEyeInvisible className='absolute top-2 right-2'
                                    size={25}
                                    onClick={
                                        () => {
                                            setVisible(true)
                                        }
                                    }/>
                            } </div>
                                                        <div className='flex items-center my-4'>
                                <label htmlFor="img">
                                    {
                                    avatar !=="" ? <img src={
                                            URL.createObjectURL(avatar)
                                        }
                                        alt='profile'
                                        className='h-8 w-8 rounded-full object-cover'/> : <RxAvatar className='h-8 w-8'></RxAvatar>
                                } </label>
                                <input type="file" name="img" className='hidden' id='img'
                                    onChange={handleFIleInputChange}
                                    accept='.jpeg,.jpg,.png'/>
                                <label htmlFor='img'>
                                    <span className=' overflow-hidden py-2  px-5 border border-gray-300 shadow-sm mx-2 rounded-md font-medium text-gray-950 '>Upload a file</span>
                                </label>
                            </div>
                        </div>
                    <div className={
                        styles.normalFlex
                    }>
                        <div className={
                            `${
                                styles.normalFlex
                            } justify-between w-full`
                        }>
                            <div className='flex'><input type="checkbox" name="remember-me" className='h-4 w-4 text-blue-500 border-gray-300 rounded' id='remember-me'/>
                                <label htmlFor="remember-me" className='ml-2 block text-sm text-gray-900'>
                                    Remember me
                                </label>
                            </div>


                            <div className="text-sm">
                                <a href="#" className='text-blue-600 font-medium hover:text-blue-500'>Forgot password</a>
                            </div>
                        </div>


                    </div>
                    <div className={
                        styles.normalFlex
                    }>
                        <button type='submit' className='group mx-2 my-2 bg-blue-500 hover:bg-blue-600 flex w-full h-[40px] text-center items-center justify-center text-white rounded'>
                            Submit
                        </button>
                    </div>
                    <div className={
                        `${
                            styles.normalFlex
                        } w-ful`
                    }>
                        <h4>Already have account</h4>
                        <Link to="/shop-signin" className='text-blue-600 pl-2'>
                            Sigin</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    )
}

export default ShopCreate
