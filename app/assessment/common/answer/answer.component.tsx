import { memo } from "react";
import McqComponent from "./mcq.component";

export type AnswerType = "SingleSelectMCQ" | "MultipleSelectMCQ";

export interface AnswerProps {
  answerType: AnswerType;
}
function AnswerComponent(props: AnswerProps) {
  return (
    <div className="flex">
      {(() => {
        switch (props.answerType) {
          case "SingleSelectMCQ":
            return <McqComponent multiSelect={false} options={[
                {value : 'op1', faceValue:'option 1'},
                {value : 'op2', faceValue:'option 2'},
                {value : 'op3', faceValue:'option 3'},
                {value : 'op4', faceValue:'option 4'}
            ]} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default memo(AnswerComponent);
