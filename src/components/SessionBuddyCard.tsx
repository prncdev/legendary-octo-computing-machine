import { Button } from '@mui/material';

type Props = {
  id?: number;
  name?: string;
  status?: string;
};

const SessionBuddyCard = function ({ id, name, status = 'Invited' }: Props) {
  return (
    <aside className='h-44 rounded-lg border border-solid border-orange-600 shadow-lg flex-grow-0 flex-shrink-0 flex-[150px] my-2 flex flex-col justify-between'>
      <section>
        <div className='image-container w-full py-1 h-20 bg-orange-600 rounded-lg flex justify-center'>
          <img src='/default-user.svg' alt='default' className='rounded-lg' />
        </div>
        <h4 className='text-center'>Buddy name</h4>
      </section>

      <div className='flex justify-between items-center p-1'>
        <p className='text-sm '>Status</p>

        {status === 'Joined' ? (
          <Button
            variant='contained'
            sx={{
              px: '.5rem',
            }}
            disabled
          >
            Joined
          </Button>
        ) : (
          <Button
            variant='contained'
            sx={{
              px: '.5rem',
              fontSize: '13px',
              bgcolor: '#ea580c',
              ':hover': {
                bgcolor: '#d05211',
              },
            }}
          >
            Invited
          </Button>
        )}
      </div>
    </aside>
  );
};

export default SessionBuddyCard;
