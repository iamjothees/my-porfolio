import React, { useEffect, useState } from 'react'

function Button({onClick, variant = 'primary', className = '', children}) {

    const [ variantClassName, setVariantClassName ] = useState("");

    useEffect(() => {
        switch (variant) {
            case 'primary':
                setVariantClassName("bg-primary-500 hover:bg-primary-600 text-primary-50 hover:text-gray-100 ");
                break;
        
            case 'outline':
                setVariantClassName("border border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-gray-100 ");
                break;
            default:

            case 'gamified':
                setVariantClassName("bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-r hover:from-primary-600 hover:via-primary-600 hover:to-primary-600 text-primary-50 hover:text-gray-100 font-jersey text-xl ");
                break;
        }
    })
    return (
        <button 
            onClick={onClick}
            className={"font-bold py-3 px-6 rounded-full " + variantClassName + className}
            >
            {children}
        </button>
    )
}

export default Button