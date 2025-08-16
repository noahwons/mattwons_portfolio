import React from 'react'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

const Contact = () => {
    return (
        <section className="mt-6">
            <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8 grid gap-8">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
                    <p className="text-gray-600">
                        I love collaborating on new ideas and meeting new people. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <Mail className="w-6 h-6 text-blue-600 mr-3" />
                            <a href="mailto:noahwons@gmail.com" className="text-gray-700 hover:text-blue-500 transition">
                                mattwons@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center">
                            <Linkedin className="w-6 h-6 text-blue-500 mr-3" />
                            <a href="https://www.linkedin.com/in/matthewwons" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 transition">
                                linkedin.com/in/matthewwons
                            </a>
                        </li>
                        <li className="flex items-center">
                            <Phone className="w-6 h-6 text-blue-500 mr-3" />
                            <span className="text-gray-700">(815) 529-6005</span>
                        </li>
                    </ul>
                </div>

                {/* <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Send Message
                    </button>
                </form> */}
            </div>
        </section>
    )
}

export default Contact
