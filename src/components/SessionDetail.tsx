import { useEffect, useState } from 'react';
import { BiteSession, getSessionDetail } from '../services/session-service';
import { EditSessionDetail } from './EditSessionDetail';
import Loader from './Loader';
import { ViewSessionDetail } from './ViewSessionDetail';
import {
  Modal,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from '@mui/material';

type Props = {
  id: number;
  open: boolean;
  onClose: () => void;
};

const style = {
  position: 'absolute' as 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowX: 'auto',
};

export const SessionDetail = ({ id, open, onClose }: Props) => {
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
    console.log('handleSave: ', details);
  };

  return (
    <>
      <Modal open={open} onClose={onClose} className='flex justify-center items-center font-mono'>
        <Box sx={style} >
          {sessionDetail ? (
            isEdit ? (
              <EditSessionDetail
                session={sessionDetail}
                onSaveClick={handleSave}
              />
            ) : (
              <ViewSessionDetail
                session={sessionDetail}
                onEditClick={() => setIsEdit(true)}
              />
            )
          ) : (
            <div>Select a bite seesion to see detail </div>
          )}
        </Box>
      </Modal>
      {/* {isLoading && <Loader />}
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
        ))} */}
    </>
  );
};
