import React from 'react'
import { Routes as Way, Route, Navigate } from 'react-router-dom'
import Results from './Results'
function Routes() {
    return (
        <div className='p-4'>
            <Way>
                <Route exact path='/' element={<Navigate to="/search" replace={true} />} />
                <Route exact path='/search' element={<Results/>}/>
                <Route exact path='/image' element={<Results/>}/>
                <Route exact path='/news' element={<Results/>}/>
                <Route exact path='/videos' element={<Results/>}/>
            </Way>
        </div>
    )
}

export default Routes