import { Identifiable } from "../identify";

export const CONFIG_FEATURE_KEY = 'config';

export interface ConfigModel {
    theme: 'kb-light-theme' | 'kb-dark-theme';
}

export type ConfigEntity = ConfigModel & Identifiable;