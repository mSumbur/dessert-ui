import React from 'react';
import "./index.scss";
type BaseIconProps = {
    className?: string;
    style?: React.CSSProperties;
    size?: string | string[];
    spin?: boolean;
};
export type IconProps = BaseIconProps & Omit<React.SVGAttributes<SVGElement>, keyof BaseIconProps>;
export declare const getSize: (size: IconProps['size']) => string[];
export declare const Icon: React.ForwardRefExoticComponent<BaseIconProps & Omit<React.SVGAttributes<SVGElement>, keyof BaseIconProps> & {
    children?: React.ReactNode;
} & React.RefAttributes<SVGSVGElement>>;
export * from './icons';
