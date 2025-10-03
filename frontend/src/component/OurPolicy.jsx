import React, { useState } from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { FaArrowRight, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";

function OurPolicy() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const policies = [
    {
      id: 1,
      icon: <RiExchangeFundsLine className='w-[50px] h-[50px] group-hover:scale-125 transition-all duration-500' />,
      title: "Easy Exchange Policy",
      subtitle: "Hassle-Free Returns",
      description: "Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.",
      details: "No questions asked exchange within 30 days. Free pickup and delivery service available.",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      icon: <TbRosetteDiscountCheckFilled className='w-[50px] h-[50px] group-hover:scale-125 transition-all duration-500' />,
      title: "7 Days Return Policy",
      subtitle: "Money Back Guarantee",
      description: "Shop with Confidence – 7 Days Easy Return Guarantee.",
      details: "Full refund within 7 days. Original packaging not required. Instant refund processing.",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      id: 3,
      icon: <BiSupport className='w-[50px] h-[50px] group-hover:scale-125 transition-all duration-500' />,
      title: "24/7 Customer Support",
      subtitle: "Always Here for You",
      description: "Trusted Customer Support – Your Satisfaction Is Our Priority.",
      details: "Round-the-clock support via chat, email, and phone. Expert team ready to help.",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-start flex-col bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 relative overflow-hidden'>
      
      {/* Background Effects */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl'></div>
      </div>

      {/* Header Section */}
      <div className='text-center mb-16 z-10 relative'>
        <div className='mb-6'>
          <Title text1={"OUR"} text2={"POLICY"}/>
        </div>
        <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-6 leading-relaxed'>
          Customer-Friendly Policies – Committed to Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold'>Satisfaction</span> and <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold'>Safety</span>
        </p>
        
        {/* Stats Section */}
        <div className='flex justify-center items-center gap-8 mt-12 flex-wrap'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-400'>99%</div>
            <div className='text-sm text-gray-400'>Customer Satisfaction</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-purple-400'>24/7</div>
            <div className='text-sm text-gray-400'>Support Available</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-cyan-400'>1M+</div>
            <div className='text-sm text-gray-400'>Happy Customers</div>
          </div>
        </div>
      </div>

      {/* Interactive Policy Cards */}
      <div className='w-full max-w-7xl mx-auto px-6 z-10 relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {policies.map((policy, index) => (
            <div
              key={policy.id}
              className={`group relative bg-gradient-to-br ${policy.bgGradient} backdrop-blur-xl border ${policy.borderColor} rounded-3xl p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${hoveredCard === policy.id ? 'ring-2 ring-purple-400/50' : ''}`}
              onMouseEnter={() => setHoveredCard(policy.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${policy.color} rounded-3xl transition-opacity duration-500 blur-xl -z-10`}></div>
              
              {/* Icon Section */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${policy.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                <div className='text-white'>
                  {policy.icon}
                </div>
              </div>

              {/* Content */}
              <div className='space-y-4'>
                <div>
                  <h3 className='text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300'>
                    {policy.title}
                  </h3>
                  <p className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${policy.color} mt-1`}>
                    {policy.subtitle}
                  </p>
                </div>
                
                <p className='text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300'>
                  {policy.description}
                </p>

                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-500 ${hoveredCard === policy.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className='pt-4 border-t border-gray-600/50'>
                    <p className='text-sm text-gray-400'>
                      {policy.details}
                    </p>
                  </div>
                </div>

                {/* Interactive Arrow */}
                <div className='flex items-center justify-between mt-6'>
                  <span className='text-sm text-gray-400 group-hover:text-white transition-colors duration-300'>
                    Learn More
                  </span>
                  <FaArrowRight className={`w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300`} />
                </div>
              </div>

              {/* Hover Effect Particles */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <div className='absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping'></div>
                <div className='absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse'></div>
                <div className='absolute top-1/2 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce'></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className='mt-20 text-center z-10 relative'>
        <div className='bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto'>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Still Have Questions?
          </h3>
          <p className='text-gray-300 mb-6'>
            Our customer support team is always ready to help you with any queries.
          </p>
          <button className='bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25'>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
