import { Box, Button, Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function QuizButtonContainer({ step, route, disable }) {
  const navigate = useNavigate();
  const goBackward = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        margin: '4.5rem 2rem',
      }}
    >
      <Link
        sx={{ color: 'Boba.main' }}
        underline="none"
        aria-label="quiz-backward"
        component={RouterLink}
        onClick={goBackward}
      >
        <Button variant="quizButton" color="secondary">
          Back
        </Button>
      </Link>
      <Link
        sx={{ color: 'Boba.main', padding: '0' }}
        underline="none"
        aria-label="quiz-forward"
        component={disable[step] ? Button : RouterLink}
        to={`/quiz/${route[route.indexOf(step) + 1]}`}
        disabled={disable[step]}
      >
        <Button variant="quizButton" color="primary" disabled={disable[step]}>
          {route.indexOf(step) === route.length - 2
            ? "I'm Finished"
            : 'Next Question'}
        </Button>
      </Link>
    </Box>
  );
}

export default QuizButtonContainer;
