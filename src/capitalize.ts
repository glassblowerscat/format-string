export function capitalize(str: string) {
  const strArr = Array.from(str);
  return (
    strArr.slice(0, 1).join("").toLocaleUpperCase() +
    strArr.join("").toLocaleLowerCase().slice(1)
  );
}
