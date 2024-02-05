import { Playzone } from "./Playzone";
import { Leaderboard } from "./Leaderboard";

export const Home = () => {
  return (
    <div className="p-10 h-[50vh]">
      <div
        className="flex h-full justify-between flex-wrap gap-4"
      >
        <Playzone />
        <Leaderboard />
      </div>
    </div>
  );
};
