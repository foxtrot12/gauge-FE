"use-client";

import { getRandomString } from "@/app/common/utils";
import { memo, useState, useMemo, useCallback, ChangeEvent } from "react";

export type OptionT = {
  value: string;
  faceValue: string;
};

export interface MCQProps {
  multiSelect: boolean;
  options: Array<OptionT>;
  defaultSelectedOption?: OptionT;
  legend?: string;
}

interface MCQOptionProps {
  multiSelect: boolean;
  id: string;
  name: string;
  option: OptionT;
  onOptionSelect: (opt: OptionT) => void;
  selection?: OptionT | Array<OptionT | undefined> | undefined;
}

function MCQOptionComp(props: MCQOptionProps) {
  const isSelected = useMemo(() => {
    if (Array.isArray(props.selection)) {
      return props.selection.includes(props.option);
    } else {
      return props.selection === props.option;
    }
  }, [props.selection]);

  const onOptChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.currentTarget.checked) {
      props.onOptionSelect(props.option);
    }
  };

  return (
    <div className="flex justify-center">
      <label
        tabIndex={0}
        className={`${
          isSelected ? "text-primary bg-tertiary" : "bg-primary text-secondary"
        } h-14 w-2/3 font-semibold rounded-lg text-center content-center`}
        id={`${props.id}Label`}
        htmlFor={props.id}
      >
        <input
          className="hidden"
          id={props.id}
          type={props.multiSelect ? "checkbox" : "radio"}
          value={props.option.value}
          name={props.name}
          checked={isSelected}
          onChange={onOptChange}
        ></input>
        {props.option.faceValue}
      </label>
    </div>
  );
}

const MCQOption = memo(MCQOptionComp);

function MCQComponent(props: MCQProps) {
  const id = getRandomString(6);
  const [selection, setSelection] = useState(
    props.multiSelect
      ? [props.defaultSelectedOption]
      : props.defaultSelectedOption
  );

  const onOptionSelect = useCallback((opt: OptionT) => {
    if (props.multiSelect) {
      let newSel = Array.isArray(selection) ? selection : [];
      if (newSel.includes(opt)) {
        newSel = newSel.filter((item) => item !== opt);
      } else {
        newSel.push(opt);
      }
      setSelection(newSel);
    } else {
      setSelection(opt);
    }
  }, []);

  // const onOptionChange

  return (
    <fieldset className="grid grid-cols-2 w-full gap-6 justify-between">
      <legend>{props.legend}</legend>{" "}
      {props.options.map((opt, ind) => (
        <MCQOption
          key={ind}
          id={`${id}Option${ind}`}
          multiSelect={props.multiSelect}
          name={id}
          selection={selection}
          onOptionSelect={onOptionSelect}
          option={opt}
        />
      ))}{" "}
    </fieldset>
  );
}

export default memo(MCQComponent);
