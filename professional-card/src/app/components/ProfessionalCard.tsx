import QRCode from "react-qr-code";
import { Card, CardContent, CardFooter, CardHeader } from "@/app/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function ProfessionalCard() {
  const portfolioUrl = "https://portafolio-phi-ruddy-34.vercel.app/";
  const githubUrl = "https://github.com/gfelix01"; 
  const linkedinUrl = "https://www.linkedin.com/in/arturo-felix/"; 

  return (
    <Card className="w-full max-w-md bg-gray-900 text-gray-100 shadow-lg rounded-lg">
      <CardHeader className="flex flex-row items-center gap-4 p-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/Eltury.png" alt="Gabriel Arturo Felix Paez" />
          <AvatarFallback>GAF</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">Gabriel Arturo Felix Paez</h2>
          <p className="text-blue-400">Desarrollador de Software</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 p-6">
        <div className="flex justify-between items-center">
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Gabrielarturo0221@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="text-sm">809-919-0625</span>
            </div>
          </div>
          <QRCode value={portfolioUrl} size={100} />
        </div>
        <div className="flex justify-center gap-4">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700">
              <Linkedin className="w-4 h-4 text-blue-400" />
            </Button>
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700">
              <Github className="w-4 h-4 text-blue-400" />
            </Button>
          </a>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2 p-6 bg-gray-800 rounded-b-lg">
        <a href={portfolioUrl} className="text-blue-400 hover:underline">
          Ver Portafolio
        </a>
        <p className="text-sm text-gray-400">Disponible para proyectos freelance</p>
      </CardFooter>
    </Card>
  );
}
