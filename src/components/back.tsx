'use client';
 import React from 'react'; 
 import Confetti from 'react-confetti';
 import Image from '../app/assets/xmark.svg'; // Import using relative path TODO fix the svg position

 import '../app/styles/play.css';
 import '../app/globals.css';


export default function Back() {


  return (  
    <div className="btn"> 
    <img src='../components/back.tsx'></img> 
  </div>
  );
}