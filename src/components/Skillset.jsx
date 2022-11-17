import React from 'react'
import ctlogo from "./images/cicons8-twitter.png"
import TagsCanvas from 'react-tags-canvas'
 
function Skillset(){
    return (
      <TagsCanvas
        className="m-auto mt-36"
        textColour='white'
        maxSpeed={0.3}
        freezeActive
        shuffleTags
        shape='sphere'
        zoom={1}
        noSelect
        textFont={null}
        pinchZoom
        tags={[
          { value: 'Javascript', weight: 30 },
          { value: 'React', weight: 30 },
          { value: 'HTML5', weight: 20 },
          { value: 'CSS3', weight: 20 },
          { value: 'PHP', weight: 30 },
          { value: 'Git', weight: 20 },
          { value: ctlogo, weight: 20 },
          { value: 'NodeJS', weight: 20 }
        ]}
      />
    )
}
 export default Skillset;