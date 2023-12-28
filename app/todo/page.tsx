'use client'
import { useState } from "react";

export default function Todo(){
	const [input, setInput] = useState<string>('')
	const handleSunmit = ()=> {
		
		
	};
	return ( 
		<div className="h-screen flex justify-center items-center">
			<div className="flex">
				<input className="w-96 ">
					
				</input>
				<button className="border border-white border-solid ml-4 p-2 rounded">
					add
				</button>
			</div>
		</div>);
}