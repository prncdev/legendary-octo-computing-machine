import { Button } from '@mui/material';
import { FaClock } from 'react-icons/fa';

import { BiteSession } from '../services/session-service';
import SessionResturant from './SessionResturant';
import SessionBuddies from './SessionBuddies';

interface Props {
  session: BiteSession;
  onEditClick: () => void;
}

export const ViewSessionDetail = ({ session, onEditClick }: Props) => {
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <h1 className='text-3xl'>{session.name}</h1>
        <p className='text-orange-600 text-lg'>Description</p>
        {session.description}
      </div>

      <div className='flex items-center gap-3' title='Started at'>
        <small className='text-orange-600'>
          <FaClock />
        </small>
        {session.startsAt
          ? new Date(session.startsAt).toUTCString().slice(0, 16)
          : 'Yet to decide'}
      </div>

      <div className='flex items-center gap-3' title='Create by'>
        <span className='text-orange-600'>Initiated By</span>
        {session.initiatedBy.name}
      </div>

      <div className='flex items-center gap-3' title='Create by'>
        <span className='text-orange-600'>Created on</span>
        {session.createdAt &&
          new Date(session.createdAt).toUTCString().slice(0, 16)}
      </div>

      <SessionResturant />
      <SessionBuddies />
      <Button variant='outlined' onClick={onEditClick}>
        Edit
      </Button>
    </div>
  );
};
