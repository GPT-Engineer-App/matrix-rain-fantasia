import React from 'react';
import MatrixRain from '../components/MatrixRain';

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <MatrixRain />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-400">Welcome to the Matrix</h1>
        <p className="text-xl text-green-300">Enter the digital realm</p>
      </div>
    </div>
  );
};

export default Index;
