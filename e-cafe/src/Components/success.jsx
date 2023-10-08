import React from 'react'
import { useEffect } from 'react'
import '../my.css'

export default function Success() {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = '/'
        }
            , 3000)
    }, [])
    return (
        <div>
            <section class="login-main-wrapper">
                <div class="main-container">
                    <div class="login-process">
                        <div class="login-main-container">
                            <div class="thankyou-wrapper">
                                <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" /></h1>
                                <div class="clr"></div>
                            </div>
                            <div class="clr"></div>
                        </div>
                    </div>
                    <div class="clr"></div>
                </div>
            </section>
            <section class="main-container body html">
                <div class="check-container">
                    <div class="check-background">
                        <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="check-shadow"></div>
                </div>
            </section>
        </div>
    )
}
