export const yn = {
  Y: "Y" as Yn,
  N: "N" as Yn,

  list: (): Yn[] => {
    return ["Y", "N"];
  },

  listWithNull: (): string[] => {
    const list: string[] = yn.list();
    list.push(null);
    return list;
  },
};

export type Yn = "Y" | "N";
