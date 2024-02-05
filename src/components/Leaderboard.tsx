import { useAppContext } from '../contexts/AppContext';
import { RefreshRounded } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  IconButton,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getScore } from '../services/score-service';
import { getTimeDifference } from '../utils/date-time';

export const Leaderboard: FC = () => {
  const [scores, setScores] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isCollapsed, setIsCollapsed } = useAppContext();

  useEffect(() => {
    loadScores();
  }, []);

  const loadScores = () => {
    setIsLoading(true);
    getScore(
      (data) => {
        setScores(data);
      },
      (error) => {
        toast.error('Unable to load scores at the moment.');
      },
      () => {
        setIsLoading(false);
      }
    );
  };

  return (
    <div className='flex items-end flex-wrap'>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Accordion
          className='!border !rounded-lg'
          expanded={isCollapsed}
          onClick={() => setIsCollapsed(false)}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon className='text-white' />}
            className='!text-white !bg-orange-400 !rounded-t-lg'
          >
            <div className='flex w-full gap-5 items-center px-4'>
              <div className='text-lg font-semibold'>Leaderboard</div>
              <IconButton onClick={loadScores} title='Reload'>
                <RefreshRounded className='text-white' />
              </IconButton>
            </div>
          </AccordionSummary>
          <AccordionDetails
            className='!bg-orange-50 !pb-2 !max-h-80 !overflow-y-auto flex flex-col gap-2'>
            {scores && scores.length ? (
              scores.map((s, index) => (
                <div
                  key={index}
                  className='flex gap-2 justify-between items-center border border-solid border-orange-500 bg-orange-100 rounded-lg px-4 py-2'
                >
                  <div className='text-gray-500'>{index + 1}</div>
                  <div className='text-lg font-semibold flex relative'>
                    {index === 0 && (
                      <div className='absolute -top-3.5 -left-2 transform rotate-[-20deg]'>
                        👑
                      </div>
                    )}
                    <div>{s.name}</div>
                  </div>
                  <div className='text-lg text-white bg-orange-400 px-2 rounded-lg'>
                    {s.score}
                  </div>
                  <div className='text-sm text-gray-500'>
                    {getTimeDifference(s.createdAt)}
                  </div>
                </div>
              ))
            ) : (
              <div className='py-2 px-[3.2rem]'>No data available</div>
            )}
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};
