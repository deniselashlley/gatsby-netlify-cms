import React from "react"
exports.onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<div 
        id="iframe-calendar"
        data-tockify-component="calendar" 
        data-tockify-calendar="denise.lashlley" 
        className="embed-calender"
      />)
}