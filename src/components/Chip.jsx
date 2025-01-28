import React from 'react'

function Chip({variant = 'blue', children}) {

    let variantStyle = "bg-blue-400/50 border-blue-300";

    switch (variant) {
        case 'blue':
            variantStyle = " bg-blue-400/50 border-blue-300";
            break;
        case 'green':
            variantStyle = " bg-green-400/50 border-green-300";
            break;
    }
    return (
        <div className={`rounded-full px-4 py-0.5 sm:py-0 border text-xs md:text-sm ${variantStyle}`}>
            {children}
        </div>
    )
}

export default Chip