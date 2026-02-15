import React from 'react'

const MapSection = () => {
  return (
    <section className="h-96 w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51161.58372651469!2d-119.47953686885338!3d36.59827984880579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809462e2666a7071%3A0xc6c7d750d03b070!2sReedley%2C%20CA!5e0!3m2!1sen!2sus!4v1707945600000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="JAL Landscaping Service Area"
        ></iframe>
      </section>
  )
}

export default MapSection