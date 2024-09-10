type Reactions = {
  like: number[];
  love: number[];
  wow: number[];
  sad: number[];
  angry: number[];
};

export function calculateTotalReactionsLength(reactions: Reactions): number {
  return (
    reactions.like.length +
    reactions.love.length +
    reactions.wow.length +
    reactions.sad.length +
    reactions.angry.length
  );
}
