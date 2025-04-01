import React from 'react'
import Section from './Section'
import { roadmap } from '../constants'
import Heading from './Heading'
import { check2, grid, loading1 } from '../assets'
import Tagline from './Tagline'
import { Gradient } from './design/Roadmap'
import Button from './Button'

const Roadmap = () => {
  return (
    <Section className='overflow-x-hidden' id='roadmap'>
      <div className='container md:pb-10'>
        <Heading tag='Ready to get started' title="What we're working on" />
        
        <div className='relative grid gap-6 md:grid-cols-2 md:gap-8 md:pb-[7rem]'>
          {roadmap.map((item, index) => {
            const status = item.status === 'done' ? "✅ Done" : "🚀 In Progress";
            const isDone = item.status === 'done';
            const isFirstDone = isDone && index === 0; 

            return (
              <div key={item.id} 
                className={`md:flex p-0.25 rounded-[2.5rem] border-4 transition-all duration-300 hover:scale-105 ${
                  isFirstDone ? 'border-gradient bg-conic-gradient' : isDone ? 'border-green-500 bg-n-6' : 'border-gray-400 bg-n-6'
                } ${index % 2 !== 0 ? 'md:mt-[3.5rem]' : ''}`}>
                <div className='relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15'>
                  <div className='absolute top-0 left-0 max-w-full opacity-50'>
                    <img 
                      src={grid} 
                      className="w-full" 
                      width={550} 
                      height={550} 
                      alt="Grid" 
                    />
                  </div>
                  <div className='relative z-1'>
                    <div className='flex items-center justify-between max-w-[27rem] mb-8 md:mb-20'>
                      <Tagline>{item.date}</Tagline> 
                      <div className='flex items-center px-4 py-1 bg-n-1 rounded text-n-8 shadow-md'>
                        <img src={isDone ? check2 : loading1}
                        className='mr-2.5' height={16} width={16} alt="status" />
                        <div className='tagline font-semibold'>{status}</div>
                      </div>
                    </div>
                    <div className='mb-10 -my-10 -mx-15'>
                        <img src={item.imageUrl} 
                        className='w-full rounded-lg shadow-lg' width={630} height={420} alt={item.title} />
                    </div>
                    <h4 className='h4 mb-4 text-white'>{item.title}</h4>
                    <p className='body-2 text-gray-300'>{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient/>
        </div>
        <div className='flex justify-center mt-12 md:mt-15 xl:mt-20'>
          <Button href='/roadmap'>Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
