const ContactForm =()=>{
    return(
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 relative overflow-hidden">
             {/* Decorative Background Elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#345C39]/10 to-transparent rounded-bl-full pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#6C9458]/10 to-transparent rounded-tr-full pointer-events-none"></div>

            <div className="relative z-10">
                <h2 className="text-3xl font-title font-bold text-[#142629] mb-2">
                  Send a Message
                </h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we will be in touch.</p>
    
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                       <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-[#345C39]">First Name</label>
                       <input type="text" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#345C39] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400" placeholder="Jane" />
                    </div>
                     <div className="group">
                       <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-[#345C39]">Last Name</label>
                       <input type="text" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#345C39] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400" placeholder="Doe" />
                    </div>
                  </div>
    
                   <div className="group">
                       <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-[#345C39]">Email Address</label>
                       <input type="email" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#345C39] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400" placeholder="jane@example.com" />
                   </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                       <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-[#345C39]">Phone Number</label>
                       <input type="tel" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#345C39] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400" placeholder="(555) 123-4567" />
                    </div>
                     <div className="group">
                       <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-[#345C39]">Service Type</label>
                       <select className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#345C39] focus:border-transparent outline-none transition-all duration-200 text-gray-600 cursor-pointer">
                          <option>Select a Service...</option>
                          <option>Landscaping Design</option>
                          <option>Hardscape Construction</option>
                          <option>Lawn Maintenance</option>
                          <option>Irrigation Systems</option>
                           <option>Other</option>
                       </select>
                    </div>
                  </div>
    
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-[#345C39]">How can we help?</label>
                    <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#345C39] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 resize-none" placeholder="Tell us a bit about your project goals..."></textarea>
                  </div>
    
                  <button type="submit" className="w-full bg-gradient-to-r from-[#345C39] to-[#4a7d32] hover:from-[#2a4a2e] hover:to-[#345C39] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-[#345C39]/20 transform hover:-translate-y-1 duration-200 flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </form>
            </div>
          </div>
    )
}
export default ContactForm