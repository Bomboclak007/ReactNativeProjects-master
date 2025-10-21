export type ShapeType = 'rectangle' | 'circle' | 'quadratic';

export interface Dimensions {
    length: string;
    width: string;
    radius: string;
    a: string;
    b: string;
    c: string;
}

export interface ShapeConfig {
    name: string;
    inputs: InputField[];
    formula: string;
}

export interface InputField {
    key: keyof Dimensions;
    placeholder: string;
    label: string;
}

export interface CalculationHistory {
    shape: string;
    area: string;
    calculation: string;
    timestamp: string;
}

export interface QuadraticRoots {
    x1: string;
    x2: string;
    discriminant: string;
}