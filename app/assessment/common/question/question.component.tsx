import { memo } from "react";

export interface QuestionProps {}
function QuestionComponent(props: QuestionProps) {
  return <div></div>;
}

export default memo(QuestionComponent);
