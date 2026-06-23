import type { ChangeEvent, ReactNode } from "react";

export interface FormFieldOption {
  label: string;
  value: string;
}

interface BaseProps {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
}

interface InputFieldProps extends BaseProps {
  as?: "input";
  type?: "text" | "email" | "tel";
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface TextareaFieldProps extends BaseProps {
  as: "textarea";
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface SelectFieldProps extends BaseProps {
  as: "select";
  options: FormFieldOption[];
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

function fieldId(name: string) {
  return `field-${name}`;
}

export function FormField(props: FormFieldProps) {
  const { label, name, required, className = "" } = props;
  const classes = ["field", className].filter(Boolean).join(" ");
  const id = fieldId(name);

  let control: ReactNode;

  if (props.as === "textarea") {
    control = (
      <textarea
        id={id}
        className="textarea"
        name={name}
        required={required}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    );
  } else if (props.as === "select") {
    control = (
      <select
        id={id}
        className="select"
        name={name}
        required={required}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  } else {
    control = (
      <input
        id={id}
        className="input"
        type={props.type ?? "text"}
        name={name}
        required={required}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    );
  }

  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      {control}
    </div>
  );
}
