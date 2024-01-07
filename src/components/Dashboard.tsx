import { useEffect, useState } from "react";
import { BiteSession, getActiveSessions } from "../services/session-service";
import Loader from "./Loader";
import SessionPreviewCard from "./SessionPreviewCard";
import { SessionDetail } from "./SessionDetail";

export const Dashboard = () => {
  const [activeSessions, setActiveSessions] = useState<BiteSession[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [selectedSession, setSelectedSession] = useState(-1);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

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

  const handleShowDetails = function (id: number) {
    setSelectedId(id);
    setShowDetail(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="flex gap-10 py-5 px-2">
        <div>
          {activeSessions.length && (
            <div className="flex flex-col gap-5">
              {activeSessions.map((session: BiteSession, index: number) => (
                <SessionPreviewCard
                  key={index}
                  session={session}
                  selected={selectedId === session.id}
                  onDetailClick={handleShowDetails}
                />
              ))}
            </div>
          )}
        </div>
        <div>
          {selectedId ? (
            <SessionDetail
              // open={showDetail}
              id={selectedId}
              // onClose={() => setShowDetail(false)}
            />
          ) : (
            <div>Select a session to see details</div>
          )}
        </div>
      </div>
      {/* {activeSessions.length && (
        <div className="flex gap-5 px-14 pt-6">
          {activeSessions.map((session: BiteSession, index: number) => (
            <SessionPreviewCard
              session={session}
              key={index}
              onDetailClick={handleShowDetails}
            />
          ))}
        </div>
      )}
      {showDetail && (
        <SessionDetail
          open={showDetail}
          onClose={() => setShowDetail(false)}
          id={selectedId}
        />
      )} */}
    </>
  );
};
