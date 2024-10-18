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
    <Card className="w-full max-w-md bg-gray-900 text-gray-100 shadow-2xl rounded-lg transform transition-transform duration-300 hover:scale-105">
      <CardHeader className="flex flex-row items-center gap-4 p-6 border-b border-gray-700">
        <Avatar className="w-24 h-24 border-2 border-blue-400 rounded-full shadow-lg">
          <AvatarImage src="/Eltury.png" alt="Gabriel Arturo Felix Paez" />
          <AvatarFallback>GAF</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-3xl font-bold text-white">Gabriel Arturo Felix Paez</h2>
          <p className="text-blue-500 text-lg">Desarrollador de Software</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6 p-6">
        <div className="flex justify-between items-center">
          <div className="grid gap-3">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Gabrielarturo0221@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="text-sm">809-919-0625</span>
            </div>
          </div>
          <div className="p-2 bg-gray-800 rounded-lg shadow-lg">
            <QRCode value={portfolioUrl} size={90} />
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:shadow-lg">
              <Linkedin className="w-5 h-5 text-blue-400" />
            </Button>
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:shadow-lg">
              <Github className="w-5 h-5 text-blue-400" />
            </Button>
          </a>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2 p-6 bg-gray-800 rounded-b-lg border-t border-gray-700">
        <a href={portfolioUrl} className="text-blue-400 hover:underline hover:text-blue-500 transition-colors duration-300">
          Ver Portafolio
        </a>
        <p className="text-sm text-gray-400">Disponible para proyectos freelance</p>
      </CardFooter>
    </Card>
  );
}
