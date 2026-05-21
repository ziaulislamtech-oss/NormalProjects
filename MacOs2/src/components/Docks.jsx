import React, { useContext, useState } from 'react'
import { Context } from '../WindowContext';

/* MACOS DOCK: Bottom bar with app icons featuring:
   - Tooltip labels that appear above icons on hover (like real macOS)
   - Open app indicator dots below icons that are currently active
   - Magnification effect: hovered icon scales up, neighbors scale slightly
   - Removed console.log that was left in from debugging */
const Docks = () => {
    const {toggleWindow, windowState}=useContext(Context)
    
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const icons = [
        { name: 'github', path: '/docicon/github.svg', bg: 'bg-[#000000]', label: 'GitHub' },
        { name: 'note', path: '/docicon/note.svg', bg: 'bg-[#F0AD4A]', label: 'Notes' },
        { name: 'pdf', path: '/docicon/pdf.svg', bg: 'bg-[#E62E3D]', label: 'Resume' },
        { name: 'calendar', path: '/docicon/calender.svg', bg: 'bg-[#6055FF]', label: 'Calendar' },
        { name: 'spotify', path: '/docicon/spotify.svg', bg: 'bg-[#4EA61A]', label: 'Spotify' },
        { name: 'mail', path: '/docicon/mail.svg', bg: 'bg-[#6256FF]', label: 'Mail' },
        { name: 'link', path: '/docicon/linkedIn.svg', bg: 'bg-[#5E84F9]', label: 'LinkedIn' },
        { name: 'cli', path: '/docicon/cli.svg', bg: 'bg-black', label: 'Terminal' },
    ];

    /* DOCK MAGNIFICATION: Hovered icon scales to 1.45x,
       immediate neighbors scale to 1.15x — mimics macOS dock magnification */
    const getTransformClass = (index) => {
        if (index === hoveredIndex) {
            return 'scale-[1.45] -translate-y-3 shadow-2xl'
        }

        if (index === hoveredIndex - 1 || index === hoveredIndex + 1) {
            return 'scale-[1.15] -translate-y-1'
        }

        return ''
    }

    /* OPEN APP CHECK: For dock items that map to our windows (github, note, pdf->resume, spotify, cli),
       check if the window is currently open so we can show the indicator dot */
    const isOpen = (iconName) => {
        if (iconName === 'pdf') return windowState.resume
        return windowState[iconName] || false
    }

    return (
        <footer className='absolute bottom-6 left-1/2 -translate-x-1/2 border border-white/20 backdrop-blur-xl bg-white/10 flex items-end px-4 py-3 rounded-2xl transition-all duration-500 ease-in-out'>
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
                            /* DOCK-TO-WINDOW MAPPING: The dock 'pdf' icon should toggle
                               the 'resume' window since that's its key in windowState */
                            const windowName = icon.name === 'pdf' ? 'resume' : icon.name;
                            toggleWindow(windowName);
                        }
                    }}
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className='relative'
                >
                    {/* TOOLTIP LABEL: Shows app name above the icon on hover.
                        - absolute + -top-10 positions it clearly ABOVE the icon
                        - z-50 ensures it paints in front of neighboring scaled icons.
                          CSS transforms (scale) create a new stacking context, so
                          without z-50 the scaled icons would cover the tooltip.
                        - left-1/2 -translate-x-1/2 centers it horizontally over the icon */}
                    {hoveredIndex === index && (
                        <div className='dock-tooltip absolute z-50 -top-10 left-1/2 -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md whitespace-nowrap pointer-events-none text-center'>
                            {icon.label}
                        </div>
                    )}
                    {/* ICON CONTAINER: The transform/scale only applies to this div,
                        NOT the tooltip, so scaling doesn't squish the label text */}
                    <div className={`${icon.bg} p-3 mx-1 rounded-xl cursor-pointer origin-bottom shadow-lg transform-gpu will-change-transform transition-transform duration-300 ease-out scale-100 translate-y-0 ${getTransformClass(index)}`}>
                        <img
                            className='w-8 h-8 select-none pointer-events-none'
                            src={icon.path}
                            alt={icon.name}
                        />
                    </div>
                    {/* OPEN APP INDICATOR DOT: Small white dot below the icon
                        shown when the app's window is currently open — just like macOS dock */}
                    {isOpen(icon.name) && (
                        <div className='w-1 h-1 bg-white rounded-full mx-auto mt-1'></div>
                    )}
                </div>
            ))}
        </footer>
    )
}

export default Docks