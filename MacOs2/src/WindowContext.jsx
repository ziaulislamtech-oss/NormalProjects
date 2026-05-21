import React, {createContext, useState, useCallback } from 'react'

export const Context = createContext()
const WindowContext = ({children}) => {

    const [windowState, setWindowState] = useState({
        github: false,
        note: false,
        resume: false,
        spotify: false,
        cli: false,
    })

    /* Z-INDEX MANAGEMENT: Tracks which window is on top.
       Each time a window is clicked/opened, its z-index goes to the top.
       This mimics macOS window stacking behavior. */
    const [zOrder, setZOrder] = useState([])
    const [topZ, setTopZ] = useState(10)

    const bringToFront = useCallback((windowName) => {
        setTopZ(prev => prev + 1)
        setZOrder(prev => {
            const filtered = prev.filter(name => name !== windowName)
            return [...filtered, windowName]
        })
    }, [])

    const getZIndex = useCallback((windowName) => {
        const idx = zOrder.indexOf(windowName)
        if (idx === -1) return 10
        return 10 + idx + 1
    }, [zOrder])

    const toggleWindow = (windowName) => {
        setWindowState((prev) => ({
            ...prev,
            [windowName]: !prev[windowName],
        }));
        /* Bring window to front when toggled open */
        bringToFront(windowName)
    };

    const closeWindow = (windowName) => {
        setWindowState((prev) => ({
            ...prev,
            [windowName]: false,
        }));
        /* Remove from z-order stack when closed */
        setZOrder(prev => prev.filter(name => name !== windowName))
    };

    return (
        <Context.Provider value={{
            windowState,
            setWindowState,
            toggleWindow,
            closeWindow,
            bringToFront,
            getZIndex
        }}>
            {children}
        </Context.Provider>
        
    )
}

export default WindowContext
