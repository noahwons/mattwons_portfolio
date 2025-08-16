import React from 'react'

const Project = ({
    title,
    imageSrc,
    description,
    link,
}) => {

    const isVideoDemo =
        link.includes('youtube.com') ||
        link.includes('youtu.be') ||
        link.includes('vimeo.com') ||
        link.match(/\.(mp4|webm|ogg)$/)

    const linkLabel = isVideoDemo ? 'Watch demo' : 'View on GitHub'

    const hasImage = imageSrc && imageSrc.trim() !== ''

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-screen mx-auto">

            {hasImage ? (
                <div className="flex items-start">
                    <div className="w-1/4 pr-4">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="rounded-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-3/4">
                        <h2 className="text-xl font-bold mb-2">{title}</h2>
                        <p className="text-gray-700 mb-4">{description}</p>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-blue-500 hover:text-black transition"
                        >
                            {linkLabel}
                        </a>
                    </div>
                </div>

            ) : <div className="flex items-start">
                <div className="w-3/4">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-500 hover:text-black transition"
                    >
                        {linkLabel}
                    </a>
                </div>
            </div>}

        </div>
    )
}

export default Project
