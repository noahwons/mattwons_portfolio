import React from 'react'
import noahImg from '../assets/matt.jpg' // TODO: replace with Matthew's headshot when available

const Home = ({ setView }) => {
    return (
        <div className="mt-6">
            {/* HERO */}
            <section className="flex flex-col-reverse lg:flex-row items-center max-w-6xl mx-auto py-16 px-6 lg:px-0">
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                        Hi, I’m <span className="text-blue-600">Matthew Wons</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-800">
                        Experienced Technology Professional — PMP-certified Project & Service Program Manager specializing in
                        network & voice transformations, service delivery, and cross‑functional execution.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
                            onClick={() => setView && setView('projects')} // rename to 'experience' in router when ready
                        >
                            View Experience
                        </button>
                        <button
                            type="button"
                            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-50 transition"
                            onClick={() => setView && setView('contact')}
                        >
                            Get in Touch
                        </button>
                    </div>
                    {/* Credentials chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">PMP</span>
                        <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">ITIL v3 (OSA, CSI, PPO, Foundations)</span>
                        <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Service Delivery & Governance</span>
                        <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Telecom / Unified Comms</span>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
                    <img
                        src={noahImg}
                        alt="Matthew Wons"
                        className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl"
                    />
                </div>
            </section>

            {/* QUICK STATS */}
            <section className="bg-white py-12 mt-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-0 text-center">
                    <div className="p-6 rounded-2xl border shadow-sm">
                        <h3 className="text-2xl font-bold">Project Management</h3>
                        <p className="text-gray-600 mt-1">PMP • PMO governance • Budget control</p>
                    </div>
                    <div className="p-6 rounded-2xl border shadow-sm">
                        <h3 className="text-2xl font-bold">Service Delivery</h3>
                        <p className="text-gray-600 mt-1">Client advocacy • SLA oversight • Reporting</p>
                    </div>
                    <div className="p-6 rounded-2xl border shadow-sm">
                        <h3 className="text-2xl font-bold">Network & Voice</h3>
                        <p className="text-gray-600 mt-1">Global voice to MS Teams • 4k+ device mgmt migration</p>
                    </div>
                    <div className="p-6 rounded-2xl border shadow-sm">
                        <h3 className="text-2xl font-bold">Leadership</h3>
                        <p className="text-gray-600 mt-1">Cross‑functional teams • Vendor coordination</p>
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="py-8">
                <div className="max-w-6xl mx-auto px-6 lg:px-0">
                    <h2 className="text-2xl font-semibold mb-4">Recent Highlights</h2>
                    <ul className="space-y-3 text-gray-800">
                        <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600 inline-block" />Moved management of ~4,000 Clarios network devices from Verizon to NTT with zero unplanned downtime.</li>
                        <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600 inline-block" />Led global voice migration from Avaya to Microsoft Teams, coordinating orders, procurement, and change windows.</li>
                        <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600 inline-block" />Ran daily standups and stakeholder calls; delivered on schedule and within approved budgets.</li>
                        <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600 inline-block" />Defined implementation processes and produced executive reports across Americas region delivery.</li>
                    </ul>
                    <div className="mt-6">
                        <button
                            type="button"
                            className="px-5 py-3 rounded-2xl border hover:bg-gray-50"
                            onClick={() => setView && setView('projects')}
                        >
                            See full experience →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
