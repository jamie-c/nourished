'use client'

import FullWidthColorBackground from '@/components/FullWidthColorBackground';
import type { NextPage } from 'next';
import { useState } from 'react';


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
        firstName: '',
        lastName: '',
        email: '',
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
            
            if (res.ok) {
                setResponse({
                    ...json.data,
                    type: 'success',
                    message: "We've received your message and will be in touch shortly.",
                })
            } else {
                setResponse({
                    type: 'error',
                    message: json.formData.message,
                    firstName: " ",
                    lastName: " ",
                    email: " ",
                })
            }
        } catch (error) {
            console.error('Error:', error)
            setResponse({
                type: 'error',
                message: 'An error occurred while submitting the form.',
                firstName: " ",
                lastName: " ",
                email: " ",
            })
        }
        setLoading(false)
    }
    
    if (!response?.message) {
    return (
        <form className="font-transat-bold" onSubmit={handleSubmit} method="POST">
            <div className="relative">
                <input 
                    id="first-name" 
                    type="text" 
                    name="firstName" 
                    className="peer h-10 p-4 w-full rounded-md border-3 border-nblg-500 text-bnlg-500 placeholder-transparent focus:outline-none focus:border-3" 
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
                    className="peer h-10 p-4 w-full rounded-md border-3 border-nblg-500 text-bnlg-500 placeholder-transparent focus:outline-none focus:border-3" 
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
                    className="peer h-10 p-4 w-full rounded-md border-3 border-nblg-500 text-bnlg-500 placeholder-transparent focus:outline-none focus:border-3" 
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
                    className="peer p-4 w-full rounded-md border-3 border-nblg-500 text-bnlg-500 placeholder-transparent focus:outline-none focus:border-3" 
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
                {loading ? (
                <span className="w-full flex flex-row items-center justify-center py-4">
                <div
                    className="text-nblg-500 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] cursor-not-allowed"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >
                        Loading...
                    </span>
                </div>
                </span>
                ) : (
                <input
                type="submit" 
                value='SEND'
                className="mt-10 mb-32 pb-2 pt-3 rounded-md bg-nblg-500 hover:bg-opacity-90 text-white font-transat-bold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer" />
                )}
        </form>
    )
    } 
    if (response?.message) {
        return (
            <FullWidthColorBackground variant="white" textColor="dark">
                <p className="text-center text-4xl">{`Hi ${response.firstName}. ${response.message}`}</p>
            </FullWidthColorBackground>
        )
    }
}



function Page() {

    return (
        <>
        <FullWidthColorBackground variant="dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-32 h-32 mx-auto mb-8">
                <title>Chat Icon</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            <p className="font-transat-bold uppercase text-4xl sm:text-6xl mb-6">Want to Chat?</p>
            <p>We&apos;ll respond as soon as possible.</p>
        </FullWidthColorBackground>
        <FullWidthColorBackground variant="white" textColor='dark'>
            <p className="uppercase font-transat">To get in touch with us, fill out the form.</p>
        </FullWidthColorBackground>
        <div className="px-4 mx-auto max-w-3xl">
            <Form />
        </div>
        </>
    )
}

export default Page