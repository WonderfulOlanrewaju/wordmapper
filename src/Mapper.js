import React, { useState } from 'react';
import { words } from './utils/inputs';
import ReactWordcloud from 'react-wordcloud';
import LogoSrc from './assets/images/mapper.PNG'
import { SketchPicker } from 'react-color';

export const Mapper = () => {
    const [mapwords, setMapwords] = useState(words)
    // console.log(typeof (words))
    const handleSubmit = (e) => {
        // console.log(e)
        e.preventDefault();
        const newWord = {
            text: e.target.text.value,
            value: parseInt(e.target.value.value)
        };
        setMapwords([...mapwords, newWord]);
        e.target.reset();
    }
    return (
        <div className="h-screen">
            <div className='px-16'>
                <img className='h-20 w-20' src={LogoSrc} alt='Wordmap logo' />
            </div>
            <div>
                <div className='text-center'>Wordmap creation just got easier...</div>
                <div className='bg-gray-200 w-1/3 mx-auto my-8'>
                    <ReactWordcloud words={mapwords} className='w-full' />
                </div>
                <div className='w-1/3 mx-auto my-8 flex justify-end'>
                    <SketchPicker />
                    <i className="fas fa-toggle-on text-purple-700 text-3xl"></i>
                </div>
            </div>
            <div>
                <div className='mx-auto bg-white rounded-lg shadow-2xl w-1/4 p-8 m-4'>
                    <div className='text-center mb-4 text-xl'>Add Keywords</div>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='text'>Text</label>
                            <input type='text' name='text' placeholder='e.g Oil war' className='p-2 block w-full border border-gray-300' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='value'>Weight</label>
                            <input type='number' name='value' placeholder='In number 1-100 range' className=' border border-gray-300 p-2 block w-full' />
                        </div>
                        <div>
                            <button type='submit' className='text-white font-semibold bg-purple-800 focus:outline-none p-2  w-full shadow-lg rounded-full'>Add word</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
} 