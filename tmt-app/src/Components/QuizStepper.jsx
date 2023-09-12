import {
  Box,
  Container,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

import HomeIcon from '../Images/icons/boba_progress/Home.svg';
import OrderUpIcon from '../Images/icons/boba_progress/OrderUp.svg';
import SoftSkillsIcon from '../Images/icons/boba_progress/SoftSkills.svg';
import SubjectsIcon from '../Images/icons/boba_progress/Subjects.svg';

const ProgressConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.Text.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.Text.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    backgroundColor: theme.palette.BobaHighlight.main,
    border: 0,
    borderRadius: 0,
    height: 12,
  },
}));

function ProgressIcon(props) {
  const icons = [
    {
      icon: <img width="64px" src={HomeIcon} alt="Home" />,
      smallText: 'Leave the Shop',
      largeText: 'Home',
    },
    {
      icon: <img width="64px" src={SubjectsIcon} alt="Subjects" />,
      smallText: 'Pick a Base',
      largeText: 'Subjects',
    },
    {
      icon: <img width="64px" src={SoftSkillsIcon} alt="Soft Skills" />,
      smallText: 'Pick Tapioca',
      largeText: 'Soft Skills',
    },
    {
      icon: <img width="64px" src={OrderUpIcon} alt="Order Up" />,
      smallText: 'Sealed the drink',
      largeText: 'Order Up!',
    },
  ];

  const { icon, smallText, largeText } = icons[props.icon - 1];

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 50,
        justifyContent: 'center',
        overflow: 'visible',
        zIndex: 1,
      }}
    >
      {isSmallScreen ? (
        <div>{icon}</div>
      ) : (
        <>
          <Typography variant="caption" sx={{ textAlign: 'center' }}>
            {smallText}
          </Typography>
          <div>{icon}</div>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            {largeText}
          </Typography>
        </>
      )}
    </Container>
  );
}

export default function QuizStepper() {
  const location = useLocation();
  const routes = {
    '/': 0,
    '/quiz/classes': 1,
    '/quiz/skills': 2,
    '/receipt': 3,
  };

  return (
    <Box sx={{ my: '3rem' }}>
      <Stepper
        alternativeLabel
        activeStep={routes[location.pathname]}
        connector={<ProgressConnector />}
      >
        {Object.keys(routes).map((route, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={ProgressIcon} />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
