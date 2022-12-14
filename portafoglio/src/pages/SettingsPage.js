import React, { useState } from 'react';
import { Component } from 'react';
const options=[
    {
        header: "Personal Data",
        values: [
            {
                name: "Personal Information",
                description: "Manage your info",
                tags: [],
            }
        ],
    },

    {
        header:"Billing",

        values:[
            {
                name: "Billing Information",
                description: "Manage your biling information",
                tags: ["credit cards"],
            }
        ]
    }
];



export default function SettingsPage() {

    const [visibleOptions,setVisibleOptions]= useState(options);
    console.log(options);

        return(
        <div>
            <h1> 
            Settings
            </h1>
            <input type="text" className="Form-control" placeholder='Search...'/>

            <div>
                {visibleOptions.map((option)  =>{
                    return(
                <div key={option.header}>
                    <h3>{option.header}</h3>
                    </div>);
                })}
            </div>
        </div>
        );
}

