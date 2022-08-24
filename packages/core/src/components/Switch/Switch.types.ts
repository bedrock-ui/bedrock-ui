import { Input } from "types/elements";

export interface Props extends Omit<Input, "type" | "onChange" | "size"> {
    checked: boolean
    onChange: (checked: boolean) => void;
    size: "small" | "medium" | "large"
}

