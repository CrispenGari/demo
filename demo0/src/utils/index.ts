export const shuffle = <Type>(array: Array<Type>): Array<Type> => {
  return array.sort((_) => Math.random() - 0.5);
};
