import React from 'react'
import Project from './Project'

// NOTE: This repurposes the Projects grid into case‑study style "Initiatives"
// to align with Matthew Wons' PMP/Service Program Management background.
// Replace imageSrc with real thumbnails (e.g., dashboards, network diagrams, or brand-safe stock)

const Projects = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-6">Featured Initiatives</h1>
            <p className="text-gray-700 mb-8 max-w-3xl">
                A selection of delivery programs and transformations I’ve led across network, voice, and service delivery—
                emphasizing stakeholder alignment, risk control, on-time execution, and measurable business outcomes.
            </p>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <Project
                    title={"Global Network Device Migration (Clarios)"}
                    imageSrc={""}
                    description={
                        "Transitioned ~4,000 network devices from Verizon to NTT with zero unplanned downtime. Coordinated orders, cutovers, and vendor resources; maintained executive reporting and daily standups to drive schedule adherence."
                    }
                    link={"#"}
                />

                <Project
                    title={"Global Voice Modernization: Avaya → Microsoft Teams"}
                    imageSrc={""}
                    description={
                        "Managed end‑to‑end voice migration including procurement, number porting, change windows, and comms. Established repeatable implementation process and delivered by region with clear stakeholder updates."
                    }
                    link={"#"}
                />

                <Project
                    title={"Americas Service Delivery & Governance"}
                    imageSrc={""}
                    description={
                        "Owned SLA oversight, reporting cadence, and customer advocacy across the Americas. Drove incident reviews, ensured corrective actions, and produced executive dashboards for accountability and transparency."
                    }
                    link={"#"}
                />

                <Project
                    title={"Program Planning, Budget & Risk Management"}
                    imageSrc={""}
                    description={
                        "Built project plans, managed budgets, and tracked risks/issues to closure. Partnered with cross‑functional teams to sequence work, remove blockers, and keep delivery within scope and approved financials."
                    }
                    link={"#"}
                />

                <Project
                    title={"Implementation Playbooks & PMO Process"}
                    imageSrc={""}
                    description={
                        "Authored implementation guides and runbooks covering intake → delivery → handoff. Standardized status reporting and change control to improve predictability and knowledge transfer."
                    }
                    link={"#"}
                />

                <Project
                    title={"Stakeholder Communications & Executive Reporting"}
                    imageSrc={""}
                    description={
                        "Led daily standups and customer calls; produced concise status readouts for leadership. Ensured clear escalation paths and timely decisions across partners and vendors."
                    }
                    link={"#"}
                />
            </div>
        </div>
    )
}

export default Projects
