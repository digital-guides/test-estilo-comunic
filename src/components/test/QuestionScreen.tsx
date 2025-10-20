import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Question } from "@/data/testData";
import { AnswerType } from "@/pages/Index";

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: AnswerType) => void;
}

const QuestionScreen = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuestionScreenProps) => {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <Card className="max-w-3xl w-full p-6 md:p-10 shadow-[var(--shadow-card)] border-border">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span className="font-medium">
                Pregunta {questionNumber} de {totalQuestions}
              </span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="pt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              {question.question}
            </h2>

            <div className="space-y-4">
              {(Object.keys(question.options) as AnswerType[]).map((key) => (
                <Button
                  key={key}
                  onClick={() => onAnswer(key)}
                  variant="outline"
                  className="w-full p-6 h-auto text-left justify-start hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
                >
                  <span className="flex items-start gap-4 w-full">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold group-hover:bg-accent group-hover:scale-110 transition-all duration-200">
                      {key}
                    </span>
                    <span className="flex-1 text-base md:text-lg leading-relaxed text-foreground/90">
                      {question.options[key]}
                    </span>
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuestionScreen;
