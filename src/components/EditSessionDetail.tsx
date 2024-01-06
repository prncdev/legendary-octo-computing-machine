import { Button } from "@mui/material";
import { BiteSession } from "../services/session-service";
import { useState } from "react";

interface Props {
  session: BiteSession;
  onSaveClick: (details: BiteSession) => void;
}

export const EditSessionDetail = ({ session, onSaveClick }: Props) => {
  const [editedSession, setEditedSession] = useState<BiteSession>(session);

  return (
    <div>
      EditSessionDetail
      <Button variant="contained" onClick={() => onSaveClick(editedSession)}>
        Save
      </Button>
    </div>
  );
};
