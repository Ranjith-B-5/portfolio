import React from "react";


function Logo(props)
{
    return(
      <img src={props.source} alt="logo"  className = 'drop-shadow-2xl h-12 w-12 shadow-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300'></img>
    )
}

export default Logo;