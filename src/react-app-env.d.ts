/// <reference types="react-scripts" />
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    'primary-color': string;
    'link-color': string;
    'success-color': string;
    'warning-color': string;
    'error-color': string;
    'font-size-base': string;
    'heading-color': string;
    'text-color': string;
    'text-color-secondary': string;
    'disabled-color': string;
    'border-radius-base': string;
    'border-color-base': string;
    'box-shadow-base': string;
    spacing: (num: number) => string;
  }
}
