import React from 'react'

const CluesCategory = ({ level, turn }) => {
  return (
    <section className='w-4/5'>
      <h2 className='text-adivinaGreen font-extrabold text-2xl'>
        Pistas:
      </h2>
      <ol className='p-8 font-semibold flex flex-col gap-2'>
        {
                    level.clues.slice(1, turn + 1).map((lv, idx) => (
                      <li key={idx} className='list-disc'>{lv.clue}</li>

                    ))
                    }
      </ol>
    </section>
  )
}

export default CluesCategory
