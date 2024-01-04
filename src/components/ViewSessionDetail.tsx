import { Button, FormLabel } from "@mui/material";
import { BiteSession } from "../services/session-service";

interface Props {
  session: BiteSession;
  onEditClick: () => void;
}

export const ViewSessionDetail = ({ session, onEditClick }: Props) => {
  return (
    <div>
      <FormLabel>Name</FormLabel>
      <FormLabel>{session.name}</FormLabel>
      <FormLabel>Description</FormLabel>
      <FormLabel>{session.description}</FormLabel>
      <FormLabel>Start at</FormLabel>
      <FormLabel>
        {session.startsAt ? session.startsAt.toDateString() : "Yet to decide"}
      </FormLabel>
      <FormLabel>Initiated By</FormLabel>
      <FormLabel>{session.initiatedBy.name}</FormLabel>
      <FormLabel>Created on</FormLabel>
      <FormLabel>{session.createdAt.toDateString()}</FormLabel>
      <Button variant="outlined" onClick={onEditClick}>
        Edit
      </Button>
    </div>
  );
};
