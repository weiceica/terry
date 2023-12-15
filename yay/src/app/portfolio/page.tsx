'use client'

import React from 'react'
import Image from 'next/image'
import '../globals.css';
import Navbar from '../components/navbar';

function projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 pl-20 pr-20">
        <Navbar />
    </main>
  )
}

export default projects