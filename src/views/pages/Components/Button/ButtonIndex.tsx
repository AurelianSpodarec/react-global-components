import React, { useState } from 'react';
import Preview from './../../_components/Preview/Preview';
import Button from '../../../atoms/Button/Button';
import RadioButton from './../../../atoms/Forms/Radio/RadioButton/RadioButton';

const tabs = [
    { name: 'Overview', href: '#', current: false },
    { name: 'Examples', href: '#', current: false },
    { name: 'API', href: '#', current: true }
]

function ButtonIndex() {

    const [variant, setVariant] = useState("primary")
    const [kind, setKind] = useState("solid")
    const [disabled, setDisabled] = useState(false)

    function handleChangeVariant(value:any) {
        setVariant(value.target.value)
    }

    function handleChangeKind(value:any) {
        setKind(value.target.value)
    }

    function handleChangeDisabled() {
        setDisabled(!disabled)
    }



    return (
        <main className="overflow-hidden h-full">

            <div className="sticky top-0 z-10 flex items-center p-4 h-16 flex-shrink-0 bg-white shadow">
                <h1 className="font-bold text-4xl">Button</h1>

                <nav className="-mb-px px-12  flex space-x-8">
                    <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Overview</button>
                    <button className="border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 border-indigo-600 text-indigo-600 font-medium text-sm">Playground</button>
                    <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">API</button>
                </nav>
            </div>

          
            <Preview>


                <div className="absolute bg-white border border-gray-200 px-4 py-2 right-1/2 translate-x-2/4 rounded-2xl">
                    Zoom Outzoom
                </div>

                <div className="flex items-center justify-center h-full">
                <Button 
                    variant={variant} 
                    kind={kind}
                    disabled={disabled}
                >
                    Hello
                </Button>
             
                {/* <img className="w-full h-auto absolute top-0 bottom-0 right-0" src="https://i.imgur.com/kkxgLfu.png" /> */}
                </div>

            </Preview>

            <div className="">
                


                <div>
                     
                    <div className="flex items-center border-b border-gray-200">
                    <div className="flex items-center px-8 py-6">
                    

                        <h3 className="text-2xl mr-10">Variant</h3>
                        <div className="space-x-6">
                            <RadioButton 
                                className={`p-2 border border-gray-100 rounded-md ${variant === "primary" ? "bg-pink-400" : ""}`} 
                                label="Primary" 
                                onChange={(e:any) => handleChangeVariant(e)} 
                                name="kind" 
                                value="primary"
                            />
                            <RadioButton 
                                className={`p-2 border border-gray-100 rounded-md ${variant === "secondary" ? "bg-pink-400" : ""}`} 
                                label="Secondary" 
                                onChange={(e:any) => handleChangeVariant(e)} 
                                name="kind" 
                                value="secondary"
                            />
                        </div>
                    

                    </div>
                    </div>


                    
                    <div className="flex items-center">
                    <div className="flex items-center px-8 py-6">

                        <h3 className="text-2xl mr-10">Kind:</h3>

                        <div className="space-x-6">
                            <RadioButton 
                                className={`p-2 border border-gray-100 rounded-md ${kind === "solid" ? "bg-pink-400" : ""}`} 
                                label="Solid" 
                                onChange={(e:any) => handleChangeKind(e)} 
                                name="kind" 
                                value="solid"
                            />
                            <RadioButton 
                                className={`p-2 border border-gray-100 rounded-md ${kind === "outline" ? "bg-pink-400" : ""}`} 
                                label="Outline" 
                                onChange={(e:any) => handleChangeKind(e)} 
                                name="kind" 
                                value="outline"
                            />
                            <RadioButton 
                                className={`p-2 border border-gray-100 rounded-md ${kind === "ghost" ? "bg-pink-400" : ""}`} 
                                label="Ghost" 
                                onChange={(e:any) => handleChangeKind(e)} 
                                name="kind" 
                                value="ghost"
                            />
                        </div>

                    </div>
                    </div>




                    <div className="flex items-center">
                        <h3 className="text-2xl">Disabled:</h3>
                        <RadioButton 
                            className={disabled === false ? "bg-pink-400" : ""} 
                            label="Active" 
                            onChange={(e:any) => handleChangeDisabled()} 
                            name="disabled" 
                            value="outline"
                        />
                         <RadioButton 
                            className={disabled === true ? "bg-pink-400" : ""} 
                            label="Disabled" 
                            onChange={(e:any) => handleChangeDisabled()} 
                            name="disabled" 
                            value="solid"
                        />
                    </div>
                
                </div>
                
                
            </div>
           
        </main>
    )
}

export default ButtonIndex;