import React from 'react'

const TestimonialCard = ({ testimonial, position, rating, quote }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
        <div className='flex'>

      <div className="flex items-center mb-4">
        <img src="https://via.placeholder.com/50" alt={testimonial} className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <h3 className="text-lg font-semibold">{testimonial}</h3>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2.5a.75.75 0 0 1 .594.288l1.918 2.48 3.947.595a.75.75 0 0 1 .415 1.279l-2.87 2.794.678 3.93a.75.75 0 0 1-1.088.791L10 12.347l-3.557 1.87a.75.75 0 0 1-1.088-.79l.679-3.93-2.87-2.795a.75.75 0 0 1 .415-1.279l3.948-.595 1.918-2.48A.75.75 0 0 1 10 2.5z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-gray-600">{rating}</span>
      </div>
      </div>

      <blockquote className="text-gray-700">{quote}</blockquote>
    </div>
  )
}

export default TestimonialCard