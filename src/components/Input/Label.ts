import label from "./Label.ts";

interface LabelProps {
    text: string;
}

const Label = ({ text }: LabelProps) => {
    return <label>{text}</label>;
};

export default Label;