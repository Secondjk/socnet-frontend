import { Mutation, GetterTree } from 'vuex';

export type MutationT<T extends string | number, S> = {
  [key in T]: Mutation<S>;
};

export type GetterT<S> = GetterTree<S, S>;
