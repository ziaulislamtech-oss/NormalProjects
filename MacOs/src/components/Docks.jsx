import React, { useContext, useState } from 'react'
import { Context } from '../WindowContext';

const Docks = () => {
    const {toggleWindow}=useContext(Context)
    console.log(toggleWindow)
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const icons = [
        { name: 'github', path: '/docicon/github.svg', bg: 'bg-[#000000]' },
        { name: 'note', path: '/docicon/note.svg', bg: 'bg-[#F0AD4A]' },
        { name: 'pdf', path: '/docicon/pdf.svg', bg: 'bg-[#E62E3D]' },
        { name: 'calendar', path: '/docicon/calender.svg', bg: 'bg-[#6055FF]' },
        { name: 'spotify', path: '/docicon/spotify.svg', bg: 'bg-[#4EA61A]' },
        { name: 'mail', path: '/docicon/mail.svg', bg: 'bg-[#6256FF]' },
        { name: 'link', path: '/docicon/linkedIn.svg', bg: 'bg-[#5E84F9]' },
        { name: 'cli', path: '/docicon/cli.svg', bg: 'bg-black' },
    ];

    const getTransformClass = (index) => {
        if (index === hoveredIndex) {
            return 'scale-[1.45] -translate-y-3 shadow-2xl'
        }

        if (index === hoveredIndex - 1 || index === hoveredIndex + 1) {
            return 'scale-[1.15] -translate-y-1'
        }

        return ''
    }

    return (
        <footer className='absolute bottom-6 left-1/2 -translate-x-1/2 border-2 border-white/20 backdrop-blur-md flex items-end px-4 py-3 rounded-2xl transition-all duration-500 ease-in-out'>
            {icons.map((icon, index) => (
                <div
                    onClick={() => {
                        if (icon.name === 'calendar') {
                            window.open("https://calendar.google.com/", "_blank");
                        } else if (icon.name === 'mail') {
                            window.open("mailto:ziaulislam.tech@gmail.com", "_blank");
                        } else if (icon.name === 'link') {
                            window.open("https://www.linkedin.com/in/ziaulislam-", "_blank");
                        } else {
                            // Baki sab ke liye humari normal window toggle hogi
                            toggleWindow(icon.name);
                        }
                    }}
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`${icon.bg} p-3 mx-1 rounded-xl cursor-pointer origin-bottom shadow-lg transform-gpu will-change-transform transition-transform duration-300 ease-out scale-100 translate-y-0 ${getTransformClass(index)}`}
                >
                    <img
                        className='w-8 h-8 select-none  pointer-events-none'
                        src={icon.path}
                        alt={icon.name}
                    
                    />
                </div>
            ))}
        </footer>
    )
}

export default Docks