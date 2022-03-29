import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'lifetime free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'everything on free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'everything on regular',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ]
        }
    ]
    return (
        <div className='bg-indigo-500 p-4 m-8 font-serif'>
            <h1 className='text-5xl text-white'>Best deals of the town</h1>
            <p className='text-2xl p-2 font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias aut molestias voluptas sint commodi ipsa, eum unde eaque saepe?</p>
            <div className='grid md:grid-cols-3 gap-3 mt-5'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;