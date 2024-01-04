import { useEffect, useState } from "react";
import { BiteSession, getSessionDetail } from "../services/session-service";
import { EditSessionDetail } from "./EditSessionDetail";
import Loader from "./Loader";
import { ViewSessionDetail } from "./ViewSessionDetail";

export const SessionDetail = ({ id }: any) => {
  const [sessionDetail, setSessionDetail] = useState<BiteSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    loadSessionDetail(id);
  }, [id]);

  const loadSessionDetail = (id: number) => {
    setIsLoading(true);
    getSessionDetail(id, setSessionDetail, console.log);
    setIsLoading(false);
  };

  const handleSave = (details: BiteSession) => {
    console.log("handleSave: ", details);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!!sessionDetail &&
        (!isEdit ? (
          <>
            <ViewSessionDetail
              session={sessionDetail}
              onEditClick={() => setIsEdit(true)}
            />
          </>
        ) : (
          <EditSessionDetail session={sessionDetail} onSaveClick={handleSave} />
        ))}
    </>
  );
};
