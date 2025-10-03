import React, { useContext, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { FaHeart, FaEye, FaShoppingCart, FaStar, FaRegHeart } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

function Card({name, image, id, price, bestseller}) {
    const {currency, addtoCart} = useContext(shopDataContext)
    const navigate = useNavigate()
    const [isLiked, setIsLiked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const handleAddToCart = (e) => {
        e.stopPropagation()
        addtoCart(id, 'M') // Default size M
        console.log('Added to cart:', id)
    }

    const handleQuickView = (e) => {
        e.stopPropagation()
        navigate(`/productdetail/${id}`)
    }

    const handleLike = (e) => {
        e.stopPropagation()
        setIsLiked(!isLiked)
    }

    return (
        <div 
            className='group relative w-[320px] max-w-[90%] bg-slate-800/80 backdrop-blur-xl rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800/90'
            onClick={() => navigate(`/productdetail/${id}`)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Bestseller Badge */}
            {bestseller && (
                <div className='absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse'>
                    <HiSparkles className='w-3 h-3' />
                    Bestseller
                </div>
            )}

            {/* Like Button */}
            <button
                onClick={handleLike}
                className='absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110'
            >
                {isLiked ? 
                    <FaHeart className='w-5 h-5 text-red-500' /> : 
                    <FaRegHeart className='w-5 h-5 text-white hover:text-red-400' />
                }
            </button>

            {/* Image Container */}
            <div className='relative overflow-hidden rounded-t-2xl'>
                <img 
                    src={image} 
                    alt={name} 
                    className='w-full h-64 object-cover transition-all duration-500 group-hover:scale-105' 
                />
                
                {/* Image Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Quick Action Buttons */}
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <button
                        onClick={handleQuickView}
                        className='w-11 h-11 bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-100 hover:scale-110 text-gray-700 shadow-lg'
                    >
                        <FaEye className='w-4 h-4' />
                    </button>
                    <button
                        onClick={handleAddToCart}
                        className='w-11 h-11 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 text-white shadow-lg'
                    >
                        <FaShoppingCart className='w-4 h-4' />
                    </button>
                </div>

                {/* Discount Badge */}
                <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    Save 20%
                </div>
            </div>

            {/* Content Section */}
            <div className='p-6 space-y-4'>
                {/* Product Name */}
                <h3 className='text-white text-lg font-semibold line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300'>
                    {name}
                </h3>

                {/* Rating */}
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`w-3 h-3 ${i < 4 ? 'text-yellow-400' : 'text-gray-600'}`} />
                        ))}
                    </div>
                    <span className='text-gray-400 text-sm'>(4.5)</span>
                    <span className='text-gray-500 text-sm'>• 128 reviews</span>
                </div>

                {/* Price Section */}
                <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                        <div className='flex items-center gap-3'>
                            <span className='text-2xl font-bold text-white'>
                                {currency} {price}
                            </span>
                            <span className='text-sm text-gray-400 line-through'>
                                {currency} {Math.round(price * 1.25)}
                            </span>
                        </div>
                        <p className='text-xs text-green-400 font-medium'>Free shipping included</p>
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={handleAddToCart}
                    className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95'
                >
                    Add to Cart
                </button>
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
    )
}

export default Card
