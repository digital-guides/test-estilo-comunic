import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo77.png";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-[var(--shadow-card)] border-border">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Desbloquea Tu Potencial Profesional" 
              className="h-20 md:h-24 w-auto"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            🗣️ ¿Cuál es tu estilo comunicacional predominante?
          </h1>
          
          <div className="space-y-4 text-left bg-muted/30 p-6 rounded-lg">
            <p className="text-foreground/90 leading-relaxed">
              Descubre si tu forma de comunicarte tiende a ser agresiva, pasiva o asertiva.
              Este test te ayudará a reconocer tu estilo principal y te dará claves prácticas 
              para mejorar tu comunicación en el entorno laboral y personal.
            </p>
            
            <div className="space-y-2 pt-4">
              <p className="flex items-start gap-2 text-foreground/80">
                <span className="text-accent font-semibold">✅</span>
                <span>Responde con sinceridad.</span>
              </p>
              <p className="flex items-start gap-2 text-foreground/80">
                <span className="text-accent font-semibold">✅</span>
                <span>No hay respuestas "buenas" o "malas".</span>
              </p>
              <p className="flex items-start gap-2 text-foreground/80">
                <span className="text-accent font-semibold">✅</span>
                <span>Al final recibirás un resultado con interpretación y recomendaciones.</span>
              </p>
            </div>
          </div>
          
          <Button 
            onClick={onStart}
            size="lg"
            className="w-full md:w-auto px-12 py-6 text-lg font-semibold bg-gradient-to-r from-accent to-accent/90 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
          >
            Comenzar Test
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
