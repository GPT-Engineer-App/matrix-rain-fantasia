import React from 'react';
import MatrixRain from '../components/MatrixRain';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <MatrixRain />
      <Card className="relative z-10 w-[350px] bg-black bg-opacity-80 border-green-500">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-500 flex items-center">
            <Terminal className="mr-2" /> CodeMatrix
          </CardTitle>
          <CardDescription className="text-green-300">The Digital Realm</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-green-100">Welcome to the digital realm of coding! Let CodeMatrix guide you through the binary arts of programming.</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-black">Enter the Matrix</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
