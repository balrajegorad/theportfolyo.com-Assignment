const { createContext, useState } = require("react");



export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [userData, setUserData] = useState(null);


    async function fetchApiData() {
        try {
            const result = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
            const data = await result.json();
            console.log("DAta",data)
            

            setUserData(data)
        } catch (err) {
            console.log("Error in Fetching Data");
            console.log(err);
        }
    }

    const value = {
        userData,
        setUserData,
        fetchApiData
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}