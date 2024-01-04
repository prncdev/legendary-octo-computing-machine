import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BiteSession } from "../services/session-service";
import { Button } from "@mui/material";

interface Props {
  session: BiteSession;
  onDetailClick: () => void;
}

export const SessionPreviewCard = ({ session, onDetailClick }: Props) => {
  return (
    <>
      <Card className="w-[100px]">
        <CardContent>
          <Typography variant="h5" component="div">
            {session.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {session.description}
          </Typography>
        </CardContent>
      </Card>
      <Button onClick={onDetailClick} variant="contained">
        View Detail
      </Button>
    </>
  );
};

export default SessionPreviewCard;
