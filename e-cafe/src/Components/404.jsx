import React from 'react'
import { useEffect } from 'react'
import '../404.css'

export default function Error() {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = '/'
        }
            , 3000)
    }, [])
    return (
        <div>
            <section className='body111'>
            <h1 className='h1111'>404</h1>
            <p className='p111'>Oops! Something is wrong.</p>
            </section>
        </div>
    )
}
