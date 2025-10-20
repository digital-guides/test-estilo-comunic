import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo77.png";

interface FinalScreenProps {
  onRestart: () => void;
}

const FinalScreen = ({ onRestart }: FinalScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-[var(--shadow-card)] border-border">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="Desbloquea Tu Potencial Profesional" 
              className="h-16 md:h-20 w-auto"
            />
          </div>

          <div className="space-y-4">
            <div className="text-5xl mb-4">✨</div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              ¡Has completado el test!
            </h1>
            
            <p className="text-xl text-foreground/90 leading-relaxed pt-4">
              Ahora que conoces tu estilo comunicacional, recuerda:
            </p>
            
            <p className="text-2xl font-semibold text-accent">
              la asertividad no se nace, se entrena.
            </p>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 md:p-8 rounded-lg border-2 border-accent/20">
            <div className="text-4xl mb-4">💡</div>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Te invitamos a descargar la guía práctica
            </p>
            <p className="text-xl font-semibold text-primary mt-2">
              "Cómo entrenar tu asertividad en 5 pasos diarios"
            </p>
            <p className="text-base text-muted-foreground mt-3">
              para continuar fortaleciendo esta habilidad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              onClick={onRestart}
              size="lg"
              className="flex-1 bg-gradient-to-r from-accent to-accent/90 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
            >
              Volver a realizar el test
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FinalScreen;
