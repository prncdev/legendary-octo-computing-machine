import { useEffect, useState } from "react";
import { BiteSession, getActiveSessions } from "../services/session-service";
import Loader from "./Loader";
import SessionPreviewCard from "./SessionPreviewCard";

export const Dashboard = () => {
  const [activeSessions, setActiveSessions] = useState<BiteSession[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    loadActiveSessions();
  }, []);

  useEffect(() => {
    console.log("activeSessions: ", activeSessions);
  }, [activeSessions]);

  const loadActiveSessions = async () => {
    setIsLoading(true);
    await getActiveSessions(setActiveSessions, console.log);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      {activeSessions.length && (
        <div className="flex gap-100">
          {activeSessions.map((session: BiteSession, index: number) => (
            <SessionPreviewCard
              session={session}
              key={index}
              onDetailClick={() => setShowDetail(true)}
            />
          ))}
        </div>
      )}
      {showDetail && <div>Show Details</div>}
    </>
  );
};
