'use client'

import FullWidthColorBackground from '@/components/FullWidthColorBackground';
import type { NextPage } from 'next';
import localFont from 'next/font/local';
import { useState } from 'react';
import { PacmanLoader } from 'react-spinners';

const transatBold = localFont({
    src: '../../../app/fonts/transat/TransatBold.ttf',
    display: 'swap',
})

const Form: NextPage = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    })

    const [response, setResponse] = useState({
        type: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
    
        const JSONdata = JSON.stringify(formData)
        const endpoint = '/api/contact'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        try {
            const res = await fetch(endpoint, options)
            const json = await res.json()
            setResponse(json.formData)
            
            if (res.ok) {
                setResponse({
                    type: 'success',
                    message: "We've received your message and will be in touch shortly.",
                })
            } else {
                setResponse({
                    type: 'error',
                    message: json.formData.message,
                })
            }
        } catch (error) {
            console.error('Error:', error)
            setResponse({
                type: 'error',
                message: 'An error occurred while submitting the form.',
            })
        }
        setLoading(false)
    }
    
    if (!response?.message) {
    return (
        <form className={`${transatBold.className}`} onSubmit={handleSubmit} method="POST">
            <div className="relative">
                <input 
                    id="first-name" 
                    type="text" 
                    name="firstName" 
                    className="peer h-10 p-4 w-full rounded-md
                        border-3 
                        border-nblg-500 
                        text-bnlg-500 placeholder-transparent 
                        focus:outline-none focus:border-3" 
                    placeholder="First Name:" 
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
                <label 
                    htmlFor="first-name" 
                    className="absolute capitalize left-1 -top-5 
                        text-npag-500 text-sm 
                        transition-all 
                        peer-placeholder-shown:left-4
                        peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-nblg-500 
                        peer-placeholder-shown:top-2.5 
                        peer-placeholder-shown:uppercase
                        peer-focus:-top-5 
                        peer-focus:left-1 
                        peer-focus:text-npag-500 
                        peer-focus:text-sm 
                        peer-focus:capitalize">First Name:
                </label>
            </div>
            <div className="mt-10 relative">
                <input 
                    id="last-name" 
                    type="text" 
                    name="lastName" 
                    className="peer h-10 p-4 w-full rounded-md
                        border-3 
                        border-nblg-500 
                        text-bnlg-500 placeholder-transparent 
                        focus:outline-none focus:border-3" 
                    placeholder="Last Name:" 
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
                <label 
                    htmlFor="last-name" 
                    className="absolute capitalize left-1 -top-5 
                        text-npag-500 text-sm 
                        transition-all 
                        peer-placeholder-shown:left-4
                        peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-nblg-500 
                        peer-placeholder-shown:top-2.5
                        peer-placeholder-shown:uppercase
                        peer-focus:-top-5 
                        peer-focus:left-1 
                        peer-focus:text-npag-500 
                        peer-focus:text-sm 
                        peer-focus:capitalize">Last Name:
                </label>
            </div>
            <div className="mt-10 relative">
                <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    className="peer h-10 p-4 w-full rounded-md
                        border-3 
                        border-nblg-500 
                        text-bnlg-500 placeholder-transparent 
                        focus:outline-none focus:border-3" 
                    placeholder="Email:" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <label 
                    htmlFor="email" 
                    className="absolute capitalize left-1 -top-5 
                        text-npag-500 text-sm 
                        transition-all 
                        peer-placeholder-shown:left-4
                        peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-nblg-500 
                        peer-placeholder-shown:top-2.5 
                        peer-placeholder-shown:uppercase
                        peer-focus:-top-5 
                        peer-focus:left-1 
                        peer-focus:text-npag-500 
                        peer-focus:text-sm 
                        peer-focus:capitalize">Email:
                </label>
            </div>
            <div className="mt-10 relative">
                <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    cols={30}
                    className="peer p-4 w-full rounded-md
                        border-3 
                        border-nblg-500 
                        text-bnlg-500 placeholder-transparent 
                        focus:outline-none focus:border-3" 
                    placeholder="Your Questions or Comments:"
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <label 
                    htmlFor="message" 
                    className="absolute capitalize left-1 -top-5 
                        text-npag-500 text-sm 
                        transition-all 
                        peer-placeholder-shown:left-4
                        peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-nblg-500 
                        peer-placeholder-shown:top-2.5 
                        peer-placeholder-shown:uppercase
                        peer-focus:-top-5 
                        peer-focus:left-1 
                        peer-focus:text-npag-500 
                        peer-focus:text-sm 
                        peer-focus:capitalize">Your Questions or Comments:
                </label>
            </div>
                <PacmanLoader color="#009681" size={15} cssOverride={{marginLeft:'auto', marginRight:'auto', marginTop:'20px'}} loading={loading}/>
                <input
                type="submit" 
                value='SEND'
                className="mt-10 mb-32 pb-2 pt-3 rounded-md bg-nblg-500 hover:bg-opacity-90 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer" />
        </form>
    )
    } 
    if (response?.message) {
        return (
            <FullWidthColorBackground variant="white" textColor="dark">
                <p className="text-center text-4xl">{response.message}</p>
            </FullWidthColorBackground>
        )
    }
}



function Page() {

    return (
        <>
        <FullWidthColorBackground variant="dark">
            <p className={`${transatBold.className} uppercase text-4xl sm:text-6xl mb-6`}>Want to Chat?</p>
            <p>We&apos;ll respond as soon as possible.</p>
        </FullWidthColorBackground>
        <FullWidthColorBackground variant="white" textColor='dark'>
            <p className="uppercase font-extralight">To get in touch with us, fill out the form.</p>
        </FullWidthColorBackground>
        <div className="px-4 mx-auto max-w-3xl">
            <Form />
        </div>
        </>
    )
}

export default Page