import { useEffect, useState } from 'react';
import { BiteSession, getActiveSessions } from '../services/session-service';
import Loader from './Loader';
import SessionPreviewCard from './SessionPreviewCard';
import { SessionDetail } from './SessionDetail';

export const Dashboard = () => {
  const [activeSessions, setActiveSessions] = useState<BiteSession[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedId, setSelectedId] = useState(Number);

  useEffect(() => {
    loadActiveSessions();
  }, []);

  useEffect(() => {
    console.log('activeSessions: ', activeSessions);
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
      {activeSessions.length && (
        <div className='flex gap-5 px-14 pt-6'>
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
      )}
    </>
  );
};
