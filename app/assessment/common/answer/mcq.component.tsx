import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { memo } from "react";

export type OptionT = {
  value: string;
  faceValue: string;
};

export interface MCQProps {
  multiSelect: boolean;
  options: Array<OptionT>;
  defaultSelectedOption?: OptionT;
}

function MCQOption(){
    
}

function MCQComponent(props: MCQProps) {
  return (
    <div className="flex">
      <RadioGroup defaultValue={props.defaultSelectedOption?.value}>
        {props.options.map((opt, ind) => (
          <RadioGroupItem key={ind} value={opt.value}>
            {opt.faceValue}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  );
}

export default memo(MCQComponent);
