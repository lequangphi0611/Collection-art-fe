import { ReactNode } from "react";

export type ButtonProps = {
    onClick: (event: MouseEvent) => void;
    children: ReactNode;
}