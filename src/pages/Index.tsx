import { useState } from "react";
import WelcomeScreen from "@/components/test/WelcomeScreen";
import QuestionScreen from "@/components/test/QuestionScreen";
import ResultScreen from "@/components/test/ResultScreen";
import FinalScreen from "@/components/test/FinalScreen";
import { questions } from "@/data/testData";

export type AnswerType = "A" | "B" | "C";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "question" | "result" | "final">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  const handleStart = () => {
    setCurrentScreen("question");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (answer: AnswerType) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentScreen("result");
    }
  };

  const handleViewFinal = () => {
    setCurrentScreen("final");
  };

  const handleRestart = () => {
    setCurrentScreen("welcome");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const calculateResult = () => {
    const counts = { A: 0, B: 0, C: 0 };
    answers.forEach(answer => counts[answer]++);
    
    const max = Math.max(counts.A, counts.B, counts.C);
    if (counts.A === max) return "aggressive";
    if (counts.B === max) return "passive";
    return "assertive";
  };

  return (
    <div className="min-h-screen bg-background">
      {currentScreen === "welcome" && <WelcomeScreen onStart={handleStart} />}
      
      {currentScreen === "question" && (
        <QuestionScreen
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      
      {currentScreen === "result" && (
        <ResultScreen
          resultType={calculateResult()}
          onContinue={handleViewFinal}
          onRestart={handleRestart}
        />
      )}
      
      {currentScreen === "final" && (
        <FinalScreen onRestart={handleRestart} />
      )}
    </div>
  );
};

export default Index;
