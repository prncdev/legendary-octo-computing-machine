import { useAppContext } from '../contexts/AppContext';
import { Button, TextField } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { CHAR_SCORES } from '../utils/constants';

export const Gameboard: FC = () => {
  const { setIsCollapsed } = useAppContext();
  const [input, setInput] = useState<string[]>(new Array(10).fill(''));
  const [focused, setFocused] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleValueChange = (val: string, index: number) => {
    const value = val.toUpperCase();
    if (value >= 'A' && value <= 'Z') {
      setInput((prev) => [
        ...prev.slice(0, index),
        value,
        ...prev.slice(index + 1),
      ]);
      if (value) {
        if (index < 9) {
          handleFocus(index + 1);
        }
      }
    }
  };

  const handleFocus = (index: number) => {
    setFocused(index);
    const inputRef = document.getElementById(
      `input-${index}`
    ) as HTMLInputElement | null;
    if (inputRef) {
      inputRef.focus();
      inputRef.setSelectionRange(0, inputRef.value.length);
    }
  };

  const handleResetTiles = () => {
    setInput(new Array(10).fill(''));
    handleFocus(0);
  };

  const handleKeyDown = (index: number, event: any) => {
    if (event.key === 'Backspace') {
      if (input[index]) {
        setInput((prev) => [
          ...prev.slice(0, index),
          '',
          ...prev.slice(index + 1),
        ]);
      }
      if (index > 0) {
        handleFocus(index - 1);
      }
    } else if (event.key === 'ArrowLeft') {
      handleFocus(index - 1);
    } else if (event.key === 'ArrowRight') {
      handleFocus(index + 1);
    }
  };

  useEffect(() => {
    const inputRef = document.getElementById(`input-${focused}`);
    if (inputRef) {
      inputRef.focus();
    }
  }, [focused]);

  useEffect(() => {
    const total = input
      .map((ch) => CHAR_SCORES[ch] || 0)
      .reduce((prev, curr) => prev + curr, 0);
    setTotalScore(total);
  }, [input]);

  return (
    <div className='flex flex-col gap-8'>
      <TextField label='Your Name' />
      <div className='flex gap-2'>
        {input.map((value, index) => (
          <TextField
            key={index}
            id={`input-${index}`}
            className='text-3xl text-center'
            InputProps={{
              className: 'w-10 h-10',
            }}
            value={value}
            focused={focused === index}
            inputProps={{
              maxLength: 1,
              style: { caretColor: 'transparent' },
            }}
            onChange={(e) => handleValueChange(e.target.value, index)}
            onFocus={() => handleFocus(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onClick={() => handleFocus(index)}
          />
        ))}
      </div>
      <div>Total score: {totalScore}</div>
      <div className='flex gap-5'>
        <Button
          variant='outlined'
          className='!normal-case !rounded-lg !py-2 !px-5'
          onClick={handleResetTiles}
        >
          Reset Tiles
        </Button>

        <Button
          variant='outlined'
          className='!normal-case !rounded-lg !py-2 !px-5'
        >
          Save Score
        </Button>

        <Button
          variant='outlined'
          className='!normal-case !rounded-lg !py-2 !px-5'
          onClick={() => setIsCollapsed(true)}
        >
          View Top Scores
        </Button>
      </div>
    </div>
  );
};
