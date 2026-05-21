import React, {createContext, useState } from 'react'

export const Context = createContext()
const WindowContext = ({children}) => {

    const [windowState, setWindowState] = useState({
        github: false,
        note: false,
        resume: false,
        spotify: false,
        cli: false,
    })

    const toggleWindow = (windowName) => {
        setWindowState((prev) => ({
            ...prev,
            [windowName]: !prev[windowName],
        }));
    };

    const closeWindow = (windowName) => {
        setWindowState((prev) => ({
            ...prev,
            [windowName]: false,
        }));
    };
    return (
        <Context.Provider value={{
            windowState,
            setWindowState,
            toggleWindow,
            closeWindow
        }}>
            {children}
        </Context.Provider>
        
    )
}

export default WindowContext
