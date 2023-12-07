'use client'
import Image from 'next/image'
import React, { useState } from "react";


export default function Home() {
	const [active1, setActive1] = useState(true);
	const [active2, setActive2] = useState(false);
	const [active3, setActive3] = useState(false);
	const [active4, setActive4] = useState(false);
	

  return (

    <div className="flex flex-col justify-center items-center w-full h-full relative">
	  <div className=' justify-center xl:w-1/3  bg-white absolute rounded-lg p-5  sm:w-2/3'>
		<div className='flex flex-row'>
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41"><path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/></svg>
			<div className='ml-5 text-5xl font-extrabold'>FAQs</div>
		</div>
		<div >
			<div className='flex flex-row justify-between m-5'>
				<div className=' font-extrabold'>
					What is Frontend Mentor, and how will it help me?
				</div>
				{active1 && (

				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"
					onClick={()=>{setActive1(!active1)}} className=' cursor-pointer'><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
				</div>
				)}
				{!active1 && (
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"
					onClick={()=>{setActive1(!active1)}} className=' cursor-pointer'><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
				</div>
				)}
			</div>
			{active1 && (
			<div className='m-5 text-sm'>
				Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
			</div>

			)}
		</div>

		
		<hr />
		<div >
			<div className='flex flex-row justify-between m-5'>
				<div className=' font-extrabold'>
					Is Frontend Mentor free?
				</div>
				{active2 && (

					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"
						onClick={()=>{setActive2(!active2)}} className=' cursor-pointer'><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
					</div>
					)}
				{!active2 && (
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"
						onClick={()=>{setActive2(!active2)}} className=' cursor-pointer'><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
					</div>
					)}
			</div>
			{active2 && (
			<div className='m-5 text-sm'>
			Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.
			</div>

			)}
		</div>
		<hr />
		<div >
			<div className='flex flex-row justify-between m-5'>
				<div className=' font-extrabold'>
				Can I use Frontend Mentor projects in my portfolio? 
				</div>
				{active3 && (

				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"
					onClick={()=>{setActive3(!active3)}} className=' cursor-pointer'><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
				</div>
				)}
				{!active3 && (
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"
					onClick={()=>{setActive3(!active3)}} className=' cursor-pointer'><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
				</div>
				)}
			</div>
			{active3 && (

			<div className='m-5 text-sm'>
			Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!
			</div>
			)}
		</div>
		<hr />
		<div >
			<div className='flex flex-row justify-between m-5'>
				<div className=' font-extrabold'>
				How can I get help if I'm stuck on a Frontend Mentor challenge?
				</div>
				{active4 && (

					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"
						onClick={()=>{setActive4(!active4)}} className=' cursor-pointer'><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
					</div>
				)}
				{!active4 && (
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"
						onClick={()=>{setActive4(!active4)}} className=' cursor-pointer'><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
					</div>
					)}

			</div>
			{active4 && (

			<div className='m-5 text-sm'>
				The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.
			</div>
			)}
		</div>
		
	  </div>
    </div>


  )
}
