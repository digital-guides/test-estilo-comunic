import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { results } from "@/data/testData";

interface ResultScreenProps {
  resultType: "aggressive" | "passive" | "assertive";
  onContinue: () => void;
  onRestart: () => void;
}

const ResultScreen = ({ resultType, onContinue, onRestart }: ResultScreenProps) => {
  const result = results[resultType];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <Card className="max-w-3xl w-full p-8 md:p-12 shadow-[var(--shadow-card)] border-border">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              {result.title}
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {result.description}
            </p>
          </div>

          <div className="space-y-6 bg-muted/30 p-6 rounded-lg">
            <div>
              <h3 className="text-lg font-semibold text-accent mb-2">✅ Fortalezas:</h3>
              <p className="text-foreground/80">{result.strengths}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-destructive mb-2">⚠️ Riesgos:</h3>
              <p className="text-foreground/80">{result.risks}</p>
            </div>

            <div className="pt-2">
              <h3 className="text-lg font-semibold text-primary mb-3">💡 Recomendación:</h3>
              <p className="text-foreground/90 leading-relaxed bg-card p-4 rounded-md border-l-4 border-accent">
                {result.recommendation}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={onContinue}
              size="lg"
              className="flex-1 bg-gradient-to-r from-accent to-accent/90 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
            >
              Continuar
            </Button>
            <Button
              onClick={onRestart}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              Reiniciar Test
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultScreen;
