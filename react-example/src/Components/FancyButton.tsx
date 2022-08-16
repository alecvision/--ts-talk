import { CSSProperties } from "react";

type CSSUnit =
  | "px"
  | "%"
  | "rem"
  | "em"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "ex"
  | "ch"
  | "cm"
  | "mm"
  | "in"
  | "pt"
  | "pc"
  | "deg"
  | "rad"
  | "grad"
  | "turn"
  | "s"
  | "ms"
  | "Hz"
  | "kHz"
  | "dpi"
  | "dpcm"
  | "dppx";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: "primary" | "secondary" | "tertiary";
  size: "xs" | "sm" | "md" | "lg" | "xl" | `${number}${CSSUnit | undefined}`;
};

const primaryButtonStyles: CSSProperties = {
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "1px solid #0070f3",
  borderRadius: "4px",
  padding: "8px 16px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  outline: "none",
  transition: "all 0.2s ease-in-out",
};

const secondaryButtonStyles: CSSProperties = {
  backgroundColor: "#fff",
  color: "#0070f3",
  border: "1px solid #0070f3",
  borderRadius: "4px",
  padding: "8px 16px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  outline: "none",
};

const tertiaryButtonStyles: CSSProperties = {
  backgroundColor: "#fff",
  color: "#0070f3",
  border: "1px solid #0070f3",
  borderRadius: "4px",
  padding: "8px 16px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  outline: "none",
};

const FancyButton = (props: Props) => {
  const { variant, ...rest } = props;
  let baseStyles: CSSProperties;

  switch (variant) {
    case "secondary":
      baseStyles = secondaryButtonStyles;
      break;
    case "tertiary":
      baseStyles = tertiaryButtonStyles;
      break;
    default:
      baseStyles = primaryButtonStyles;
      break;
  }

  return <button style={{ ...baseStyles, ...props.style }} {...rest}></button>;
};

export default FancyButton;
