import React, {useState, useEffect} from 'react';
import UserService from "../../users/UserService";

let userService = new UserService();
userService.toString();

const Dashboard = () => {

    // Input field onChnage event definition
    const onChange = event => setValue(event.target.value);
    
    // Reads the existing value from local storage
    const [valueEntered, setValue] = useState(
        localStorage.getItem('localStorageKey') || ''
    );
    
    // Setting the new value into the local storage
    useEffect(() => {
        localStorage.setItem('localStorageKey', valueEntered);
    }, [valueEntered]);
    
    return (
    <>
        <div className="flex">
            {/*Header section*/}
            <div className="w-full">
            </div>
        </div>
        <div className="flex mb-4 h-full pt-2">
            {/*Sidebar section*/}
            <div className="w-64">
            </div>
            
            <div className="w-full">
                <div className="flex mb-4 h-full">
                    <main className="ml-2 w-full">
                        <div>Welcome to the Test React App</div>
                    </main>
    
                    <div>
                        <h4>Enter value to store into the Local Storage</h4>
                        <input value={valueEntered} type="text" onChange={onChange} />
                        <p>{valueEntered}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)};

export default Dashboard;
