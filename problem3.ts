const countWordOccurrences = (sentence: string, word: string): number => {
  let count: number = 0;

  sentence.split(" ").forEach((w) => {
    if (w.toLocaleLowerCase() === word.toLocaleLowerCase()) {
      count++;
    }
  });

  return count;
};
