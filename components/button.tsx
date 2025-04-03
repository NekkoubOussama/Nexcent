import React, { Children } from "react";
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "font-normal rounded-sm shadow-sm px-[2rem] w-fit gap-[0.5rem] disabled:bg-silver disabled:text-b_grey disabled:cursor-not-allowed cursor-pointer ",
  {
    variants: {
      intent: {
        primary:
          " bg-primary text-white  hover:bg-tint1 focus:border-d_grey focus:border active:bg-shade1",
        secondary:
          " bg-white text-primary border border-primary hover:bg-silver focus:border focus:border-l_grey active:border-none",
        tertiary:
          " bg-white/20 text-primary hover:bg-silver focus:border focus:border-d_grey active:bg-tint5",
      },
      size: {
        normal: "text-[1.125rem] py-[1rem] h-[3.5rem] ",
        medium: "text-[1rem] py-[0.875rem] h-[3rem]",
        small: "text-[0.875rem] py-[0.5rem] h-[2rem]",
      },
      iconmode: {
        normal: "py-[1.25rem] px-[1.25rem] h-[3.5rem] ",
        medium: "py-[0.75rem] px-[0.75rem] h-[3rem]",
        small: "py-[0.5rem] px-[0.5rem] h-[2rem]  ",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      intent: "primary",
      size: "normal",
      iconmode: "medium",
    },
  }
);

type IconProps = {
  intent?: string | null;
  disabled?: boolean;
  type?: "sun" | "arrow" | "plus" | "search";
};

export function Icon({ type, intent, disabled }: IconProps) {
  const strokeColor = disabled
    ? "#abbed1"
    : intent === "primary"
    ? "white"
    : "#4caf4f";

  if (type === "sun") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L12 5"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 19L12 22"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12L19 12"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12L2 12"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.071 4.92893L16.9497 7.05025"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.05003 16.95L4.92871 19.0713"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.92897 4.92893L7.05029 7.05025"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.9495 16.95L19.0708 19.0713"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "arrow") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "plus") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3.33331L8 12.6666"
          stroke={strokeColor}
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.6667 8L3.33341 8"
          stroke={strokeColor}
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "search") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 16.958L21.5 21.958"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return null;
}
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icontype?: "plus" | "arrow" | "search" | "sun";
  };

export default function Button({
  intent,
  size,
  iconmode,
  children,
  className,
  icontype,
  ...props
}: ButtonProps) {
  const computedIconMode = children ? size : iconmode;
  return (
    <button
      className={clsx(
        buttonVariants({
          intent,
          size,
          iconmode: computedIconMode,
        }),
        className,
        "flex items-center gap-[0.5rem]"
      )}
      {...props}
    >
      {icontype === "plus" && (
        <Icon type="plus" intent={intent} disabled={props.disabled} />
      )}
      {icontype === "search" && (
        <Icon type="search" intent={intent} disabled={props.disabled} />
      )}
      {children}
      {icontype === "sun" && (
        <Icon type="sun" intent={intent} disabled={props.disabled} />
      )}
      {icontype === "arrow" && (
        <Icon type="arrow" intent={intent} disabled={props.disabled} />
      )}
    </button>
  );
}
