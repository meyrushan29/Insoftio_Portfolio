import { useState } from 'react';
import img from "../assets/d.png"; // Banner Image

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    subject: '',
    budget: '',
    projectDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
     <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px]">
             <img
               src={img}
               alt="Services Banner"
               className="w-full h-full object-cover"
             />
           </div>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-12 bg-white border-[#FF5A5F] border-2">
        {/* Section 1: Tell Us About Yourself */}
        <div className="mb-10 bg-white">
          <h3 className="text-gray-700 text-xl font-medium mb-6 border-b pb-2 ">
            01. Tell Us About Yourself
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#FF5A5F] focus:border-[#FF5A5F] outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#FF5A5F] focus:border-[#FF5A5F] outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#FF5A5F] focus:border-[#FF5A5F] outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#FF5A5F] focus:border-[#FF5A5F] outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#FF5A5F] focus:border-[#FF5A5F] outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role*</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#FF5A5F] focus:border-[#FF5A5F] outline-none"
                placeholder="e.g. CEO, Marketing Manager"
              />
            </div>
          </div>
        </div>
        
        {/* Section 2: What can we help you with? */}
        <div className="mb-10">
          <h3 className="text-gray-700 text-xl font-medium mb-6 border-b pb-2">
            02. What can We Help You With?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#FF5A5F] focus:border-[#FF5A5F] outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Project Budget*</label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#FF5A5F] focus:border-[#FF5A5F] outline-none"
                placeholder="e.g. $5,000 - $10,000"
              />
            </div>
          </div>
        </div>
        
        {/* Section 3: Tell Us About Your Project */}
        <div className="mb-10">
          <h3 className="text-gray-700 text-xl font-medium mb-6 border-b pb-2">
            03. Tell Us About Your Project
          </h3>
          
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">Project Overview</label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows={6}
              className="w-full p-3 border border-white rounded-md focus:ring-[#FF5A5F] focus:border-[#FF5A5F] outline-none"
              placeholder="Tell us about your project, goals, and timeline..."
            ></textarea>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#FF5A5F] hover:bg-[#e64a4f] text-white font-medium py-3 px-8 rounded-md transition duration-300 transform hover:scale-105"
          >
            Submit Your Request
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
