import { Module } from 'vuex';
import { GetterT, MutationT } from '@/store/types';

export type Theme = 'white' | 'dark';

export interface ThemeState {
  theme: Theme;
}

const state: ThemeState = {
  theme: 'white'
};

export enum MutationsTypes {
  SET_THEME = '[theme] Change theme'
}

export enum GettersTypes {
  THEME = '[theme] Theme'
}

const mutations: MutationT<MutationsTypes, ThemeState> = {
  [MutationsTypes.SET_THEME]: (state, payload: Theme) => {
    state.theme = payload;
  }
};

const getters: GetterT<ThemeState> = {
  [GettersTypes.THEME]: (state) => state.theme
};

export const theme = {
  state,
  mutations,
  getters
} as Module<ThemeState, ThemeState>;
