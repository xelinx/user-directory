import React, {useState, createContext} from 'react';

export const searchContext = createContext();

export const SearchProvider = (props) => {
    const [search, setSearch] = useState([""])
    return(
       <searchContext.Provider value={[search, setSearch]}>
         {props.children}
       </searchContext.Provider>
    );
}