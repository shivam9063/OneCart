import React, { useState } from 'react'
import { FaPaperPlane, FaGift, FaEnvelope, FaStar, FaCheck } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

function NewLetterBox() {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email) return

        setIsLoading(true)
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            setIsSubscribed(true)
            setEmail('')
            
            // Reset after 3 seconds
            setTimeout(() => {
                setIsSubscribed(false)
            }, 3000)
        }, 2000)
    }

    return (
        <div className='w-full min-h-[60vh] bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 flex items-center justify-center relative overflow-hidden py-20'>
            
            {/* Animated Background Elements */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
                <div className='absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-3xl animate-pulse delay-2000'></div>
            </div>

            {/* Floating Elements */}
            <div className='absolute inset-0 pointer-events-none'>
                <HiSparkles className='absolute top-20 left-20 text-yellow-400 text-2xl animate-bounce delay-300' />
                <HiSparkles className='absolute top-40 right-32 text-purple-400 text-xl animate-bounce delay-700' />
                <HiSparkles className='absolute bottom-32 left-32 text-cyan-400 text-lg animate-bounce delay-1000' />
                <FaStar className='absolute top-32 right-20 text-pink-400 text-sm animate-pulse delay-500' />
                <FaStar className='absolute bottom-20 right-40 text-blue-400 text-lg animate-pulse delay-1500' />
            </div>

            <div className='max-w-4xl mx-auto px-6 text-center z-10 relative'>
                
                {/* Success Message */}
                {isSubscribed && (
                    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300'>
                        <div className='bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-3xl shadow-2xl max-w-md mx-4 animate-in slide-in-from-bottom-4 duration-500'>
                            <div className='text-center'>
                                <FaCheck className='text-4xl mx-auto mb-4 animate-bounce' />
                                <h3 className='text-2xl font-bold mb-2'>Welcome to OneCart!</h3>
                                <p className='text-green-100'>Your 20% discount code has been sent to your email!</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Header Section */}
                <div className='mb-12'>
                    <div className='flex items-center justify-center gap-4 mb-6'>
                        <div className='relative'>
                            <FaGift className='text-4xl text-yellow-400 animate-bounce' />
                            <div className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping'></div>
                        </div>
                        <h1 className='text-4xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                            20% OFF
                        </h1>
                        <div className='relative'>
                            <FaGift className='text-4xl text-yellow-400 animate-bounce delay-300' />
                            <div className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping delay-300'></div>
                        </div>
                    </div>
                    
                    <h2 className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'>
                        Subscribe now & get 
                        <span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'>
                            Exclusive Deals!
                        </span>
                    </h2>
                    
                    <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
                        Join our community and enjoy <span className='text-yellow-400 font-semibold'>exclusive savings</span>, 
                        <span className='text-pink-400 font-semibold'> special deals</span>, and 
                        <span className='text-cyan-400 font-semibold'> early access</span> to new collections.
                    </p>
                </div>

                {/* Stats Section */}
                <div className='flex justify-center items-center gap-8 mb-12 flex-wrap'>
                    <div className='text-center group cursor-pointer'>
                        <div className='text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300'>50K+</div>
                        <div className='text-sm text-gray-400'>Subscribers</div>
                    </div>
                    <div className='text-center group cursor-pointer'>
                        <div className='text-2xl font-bold text-pink-400 group-hover:scale-110 transition-transform duration-300'>20%</div>
                        <div className='text-sm text-gray-400'>Average Savings</div>
                    </div>
                    <div className='text-center group cursor-pointer'>
                        <div className='text-2xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300'>Weekly</div>
                        <div className='text-sm text-gray-400'>New Deals</div>
                    </div>
                </div>

                {/* Newsletter Form */}
                <div className='relative max-w-2xl mx-auto'>
                    <form onSubmit={handleSubmit} className='relative'>
                        <div className='relative group'>
                            {/* Input Field */}
                            <div className='relative'>
                                <FaEnvelope className='absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl z-10' />
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your email address...' 
                                    className='w-full h-16 pl-16 pr-40 bg-white/10 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl text-white text-lg placeholder:text-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-purple-500/20' 
                                    required 
                                />
                                
                                {/* Submit Button */}
                                <button 
                                    type='submit' 
                                    disabled={isLoading}
                                    className='absolute right-2 top-2 bottom-2 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/25 flex items-center gap-3'
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    {isLoading ? (
                                        <div className='animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full'></div>
                                    ) : (
                                        <>
                                            <span className='hidden sm:block'>Subscribe</span>
                                            <FaPaperPlane className={`text-lg transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Glow Effect */}
                            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                        </div>
                    </form>

                    {/* Benefits List */}
                    <div className='mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300'>
                        <div className='flex items-center gap-2 group cursor-pointer'>
                            <FaCheck className='text-green-400 group-hover:scale-125 transition-transform duration-300' />
                            <span className='group-hover:text-white transition-colors duration-300'>Instant 20% discount</span>
                        </div>
                        <div className='flex items-center gap-2 group cursor-pointer'>
                            <FaCheck className='text-green-400 group-hover:scale-125 transition-transform duration-300' />
                            <span className='group-hover:text-white transition-colors duration-300'>Exclusive early access</span>
                        </div>
                        <div className='flex items-center gap-2 group cursor-pointer'>
                            <FaCheck className='text-green-400 group-hover:scale-125 transition-transform duration-300' />
                            <span className='group-hover:text-white transition-colors duration-300'>No spam, unsubscribe anytime</span>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className='mt-12 text-center'>
                    <p className='text-gray-400 text-sm mb-4'>Trusted by thousands of customers worldwide</p>
                    <div className='flex justify-center items-center gap-1'>
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className='text-yellow-400 text-lg animate-pulse' style={{animationDelay: `${i * 0.1}s`}} />
                        ))}
                        <span className='ml-2 text-gray-300 font-semibold'>4.9/5 Customer Rating</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewLetterBox
