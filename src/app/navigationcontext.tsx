"use client"
import React, { createContext, ReactNode, useContext, useState } from "react";
type navcontext_type = {
    navlogo: string;
    setnavlogo: React.Dispatch<React.SetStateAction<any>> | null;
}


const navigationcontext = createContext<navcontext_type | null>(null)

export function NavigationContext({children}:{children: React.ReactElement})
{
    const [navlogo, setnavlogo] = useState("MG.")
    return <navigationcontext.Provider value={{navlogo, setnavlogo}}>
                    {children}
            </navigationcontext.Provider>
}

export function useNavInfo()
{
    return useContext(navigationcontext)
}