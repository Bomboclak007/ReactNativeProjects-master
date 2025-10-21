import {ShapeType, ShapeConfig} from "./types";

export const shapeConfigs: Record<ShapeType, ShapeConfig> = {
    rectangle: {
        name: "Прямоугольник",
        inputs: [
            {key: "length", placeholder: "Длина", label: "Длина"},
            {key: "width", placeholder: "Ширина", label: "Ширина"}
        ],
        formula: 'Длина × Ширина'
    },
    circle: {
        name: "Круг",
        inputs: [
            {key: "radius", placeholder: "Радиус", label: "Радиус"},
        ],
        formula: 'π × Радиус²'
    },
    quadratic: {
        name: "Квадратное уравнение",
        inputs: [
            {key: "a", placeholder: "Коэффициент a", label: "Коэффициент a (≠ 0)"},
            {key: "b", placeholder: "Коэффициент b", label: "Коэффициент b"},
            {key: "c", placeholder: "Коэффициент c", label: "Коэффициент c"}
        ],
        formula: 'a·x² + b·x + c = 0'
    }
}