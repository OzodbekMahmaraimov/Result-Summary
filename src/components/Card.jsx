import React from 'react'
import Summary from './Summary'
import reactionImg from './images/icon-reaction.svg'
import memoryImg from './images/icon-memory.svg'
import verbalImg from './images/icon-verbal.svg'
import visualImg from './images/icon-visual.svg'

const Card = () => {
    return (
        <div className={`max-w-[1200px] mx-auto h-screen flex flex-col sm:flex-row items-center sm:justify-center`}>
            <div className='flex flex-col sm:flex-row rounded-l-box1 shadow-boxShadow w-full sm:max-w-2xl'>
                <div className="w-full sm:w-1/2 h-boxHeight rounded-box1 bg-gradient-to-b from-boxTop to-boxBottom flex flex-col items-center justify-evenly">
                    <h1 className='text-center text-textColor font-bold text-2xl'>Your result</h1>
                    <div className='rounded-[50%] h-[200px] w-[200px] flex justify-center flex-col bg-gradient-to-b from-circleTop to-circleBottom'>
                        <h1 className='text-7xl text-center text-white'>76</h1>
                        <p className='text-center text-textColor'>of 100</p>
                    </div>
                    <div className='px-6'>
                        <h1 className='text-center text-3xl pb-3 text-white'>Great</h1>
                        <p className='text-center text-textColor'>You scored higher than 65% of the people who have taken these tests</p>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 h-boxHeight shadow-lg">
                    <h1 className='text-2xl font-semibold py-5 px-9'>Summary</h1>
                    <div className='w-full flex flex-col items-center gap-3 justify-center'>
                        <Summary image={reactionImg} title={'Reaction'} number1={'80'} number2={'/ 100'} bgcolor={'bg-reaction'} />
                        <Summary image={memoryImg} title={'Memory'} number1={'92'} number2={'/ 100'} bgcolor={'bg-memory'} />
                        <Summary image={verbalImg} title={'Verbal'} number1={'61'} number2={'/ 100'} bgcolor={'bg-verbal'} />
                        <Summary image={visualImg} title={'Visual'} number1={'72'} number2={'/ 100'} bgcolor={'bg-visual'} />
                        <button className='bg-tugma text-white w-[80%] my-2 py-3 rounded-box1 active:bg-gradient-to-b from-boxTop to-boxBottom'>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card