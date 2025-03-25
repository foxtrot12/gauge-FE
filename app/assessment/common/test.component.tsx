"use-client"
import { memo } from "react";
import QuestionComponent from "./question/question.component";
import AnswerComponent from "./answer/answer.component";

export interface TestProps {}

function TestComponent(props: TestProps) {
  return (
    <main className="flex">
      <QuestionComponent />
      <AnswerComponent answerType={'SingleSelectMCQ'}/>
    </main>
  );
}

export default memo(TestComponent);
