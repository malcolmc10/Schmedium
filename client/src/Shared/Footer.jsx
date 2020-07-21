import React from 'react'


export default function Footer() {
    return (
        <div id="footer" className=" bg-gray-200 text-center mx-auto px-32 font-serif  py-4">
            <p>Created by Colin Malcolm in July 2020</p>

            <a href="https://www.linkedin.com/in/colinpmalcolm/"><button  className="bg-red-800 hover:bg-blue-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline m-4">LinkedIn</button></a>

            <a href="https://github.com/malcolmc10/Schmedium"><button  className="bg-red-800 hover:bg-black text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline m-4">GitHub</button></a>

            <a href="https://twitter.com/Themalcolmmind"><button className="bg-red-800 hover:bg-blue-300 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline m-4">Twitter</button></a>
            
        </div>



    )
}
