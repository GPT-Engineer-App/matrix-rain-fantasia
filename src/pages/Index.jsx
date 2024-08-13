import React from 'react';
import MagicalWaves from '../components/MatrixRain';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-indigo-900 overflow-hidden">
      <MagicalWaves />
      <Card className="relative z-10 w-[350px] bg-indigo-800 bg-opacity-50 border-indigo-600">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-yellow-300 flex items-center">
            <Sparkles className="mr-2" /> Grimoire
          </CardTitle>
          <CardDescription className="text-indigo-200">The Code Wizard</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-indigo-100">Welcome to the magical realm of coding! Let Grimoire guide you through the arcane arts of programming.</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-indigo-900">Begin Your Journey</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
