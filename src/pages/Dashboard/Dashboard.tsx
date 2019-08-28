import React from 'react';
import UserService from "../../users/UserService";

const Dashboard = () => {
    
    {
        let userService = new UserService();
        userService.toString();
    }
    
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
                </div>
            </div>
        </div>
    </>
)};

export default Dashboard;
