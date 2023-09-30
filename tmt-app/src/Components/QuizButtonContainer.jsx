import { Box, Button, Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function QuizButtonContainer({ step, route }) {
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
        sx={{ color: 'Boba.main' }}
        underline="none"
        aria-label="quiz-forward"
        component={RouterLink}
        to={`/quiz/${route[step + 1]}`}
      >
        <Button variant="quizButton" color="primary">
          {step === route.length - 2 ? "I'm Finished" : 'Next Question'}
        </Button>
      </Link>
    </Box>
  );
}

export default QuizButtonContainer;
