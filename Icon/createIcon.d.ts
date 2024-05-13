import React from 'react';
import { IconProps } from '.';
interface CreateIconOptions {
    content: React.ReactNode;
    iconProps?: IconProps;
    viewBox?: string;
}
export declare function createIcon(options: CreateIconOptions): React.ForwardRefExoticComponent<{
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    size?: string | string[] | undefined;
    spin?: boolean | undefined;
} & Omit<React.SVGAttributes<SVGElement>, keyof {
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    size?: string | string[] | undefined;
    spin?: boolean | undefined;
}> & React.RefAttributes<SVGSVGElement>>;
export {};
