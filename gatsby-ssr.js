import React from "react"
exports.onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<script 
        data-cfasync="false" 
        data-tockify-script="embed" 
        src="https://public.tockify.com/browser/embed.js"
      />)
}