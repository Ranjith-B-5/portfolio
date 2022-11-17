import React from "react"
import ctlogo from "./images/cicons8-twitter.png"
import cghlogo from "./images/cicons8-github.png"
import cgmlogo from "./images/cicons8-gmail-logo.png"
import { useState } from "react"
import LogoRender from "./LogoRender"
import logodata from "./logodata"



function Footer()
{
    const [isColored1, colorShown1]= useState(false);
    const [isColored2, colorShown2]= useState(false);
    const [isColored3, colorShown3]= useState(false);

    return(
        <div className="flex flex-row justify-between h-12 w-64 m-auto -pt-4 mt-32">
            {!(isColored1)?(<button onMouseOver={() => colorShown1(true)} onMouseLeave={() => colorShown1(false)}><LogoRender imgsource ={logodata[0].source}  /></button>):(<button onMouseOver={() => colorShown1(true)} onMouseLeave={() => colorShown1(false)}><LogoRender imgsource ={logodata[0].csource}/></button>)}
            {!(isColored2)?(<button onMouseOver={() => colorShown2(true)} onMouseLeave={() => colorShown2(false)}><LogoRender imgsource ={logodata[1].source} /></button>):(<button onMouseOver={() => colorShown2(true)} onMouseLeave={() => colorShown2(false)}><LogoRender imgsource ={logodata[1].csource} /></button>)}
            {!(isColored3)?(<button onMouseOver={() => colorShown3(true)} onMouseLeave={() => colorShown3(false)}><LogoRender imgsource ={logodata[2].source} /></button>):(<button onMouseOver={() => colorShown3(true)} onMouseLeave={() => colorShown3(false)}><LogoRender imgsource ={logodata[2].csource} /></button>)}
        </div>
    )
    }

export default Footer;