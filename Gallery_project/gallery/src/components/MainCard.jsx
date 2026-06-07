import React from 'react'

const MainCard = (props) => {
  return (
    <div>
        <a href={props.elem.url} target="_blank" rel="noopener noreferrer">
            <div className="h-500px w-400px p-4 border-r-8 border-amber-950 border-2 rounded-lg overflow-hidden shadow-lg border-amber-200 border-5">       
                <img src={props.elem.image} alt={props.elem.title} />

            </div>
            <h2 className="text-xl font-bold mt-2 justify-between p-4">{props.elem.author}</h2>
            <p className="text-gray-600 bg-amber-300 ">{props.elem.title}</p>   
        </a>
    </div>
  )
}

export default MainCard
