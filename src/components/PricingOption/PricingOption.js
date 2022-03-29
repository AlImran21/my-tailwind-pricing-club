import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const {name, price, benefits} = props.option;
    return (
        <div className='bg-white p-3 text-2xl rounded-lg'>
            <h2 className='bg-indigo-500 py-3 rounded font-extrabold'>{name}</h2>
            <p>
                <span className='text-4xl font-bold font-sans'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/month</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
                {
                    benefits.map (benefit => <Benefit
                    key={benefit.id}
                    benefit={benefit}
                    ></Benefit>)
                }
            </div>
            <button className='bg-indigo-700 flex justify-center items-center w-full py-2 rounded-lg mt-8 text-white hover:bg-indigo-600'>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;