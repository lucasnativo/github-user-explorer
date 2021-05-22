import React, { createContext, useState } from "react"

export const DataContext = createContext()

const dataFixed = null

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(dataFixed)

    return (
        <DataContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </DataContext.Provider>
    )
}