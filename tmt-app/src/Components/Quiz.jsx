import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { CustomTheme } from '../Styling/CustomStyling';
import { CLASS_SUBJECT_LIST, SOFT_SKILL_LIST } from '../utils/constants';
import BobaBot from './BobaBot';
import QuestionCard from './QuestionCard';
import QuizButtonContainer from './QuizButtonContainer';
import QuizStepper from './QuizStepper';
import Receipt from './Receipt';

function Quiz() {
  const { step } = useParams();
  const routes = ['home', 'classes', 'skills', 'receipt'];
  let count = { classes: 0, skills: 0 };
  const [disabled, setDisabled] = useState({ classes: true, skills: true });
  const max = { classes: 3, skills: 3 };

  let userSelection =
    step === 'classes'
      ? JSON.parse(window.sessionStorage.getItem('classUserSelect'))
      : JSON.parse(window.sessionStorage.getItem('skillUserSelect'));

  const dataSets = {
    classes: CLASS_SUBJECT_LIST,
    skills: SOFT_SKILL_LIST,
  };
  const data = dataSets[step] || dataSets['classes'];

  //Check to see if user selected the max amount of card yet
  const checkMax = () => {
    if (step === 'classes') {
      if (count.classes === max.classes) {
        setDisabled({ ...disabled, classes: false });
      } else if (count.classes < max.classes || count.classes > max.classes) {
        setDisabled({ ...disabled, classes: true });
      }
    } else {
      if (count.skills === max.skills) {
        setDisabled({ ...disabled, skills: false });
      } else if (count.skills < max.skills || count.skills > max.skills) {
        setDisabled({ ...disabled, skills: true });
      }
    }
  };

  //Check for amount of cards user already selected
  const handleCountChange = () => {
    let tempCount = 0;
    for (const value of Object.values(userSelection)) {
      if (value === true) {
        tempCount += 1;
      }
    }

    count = { ...count, [step]: tempCount };
    checkMax();
  };

  return (
    <Container sx={{ width: '100%' }}>
      <QuizStepper />
      <Text step={step} />
      {step !== 'receipt' && (
        <>
          <Grid container justifyContent={{ xs: 'center', lg: 'flex-start' }}>
            {data.map((item) => (
              <Grid item key={item.key}>
                <QuestionCard
                  item={item}
                  page={step}
                  selection={userSelection}
                  handleCountChange={handleCountChange}
                  disabled={disabled}
                />
              </Grid>
            ))}
          </Grid>
          <QuizButtonContainer step={step} route={routes} disable={disabled} />
        </>
      )}
      {step === 'receipt' && <Receipt />}
    </Container>
  );
}

function Text({ step }) {
  const textContent = {
    classes: {
      title1: "Let's order some boba! Pick your base(s).",
      title2: 'What university classes sound interesting to you?',
      subtitle: 'Select more than 3.',
      bobaBot: '5 is the maximum.',
    },
    skills: {
      title1: 'Pick your toppings and add-ons.',
      title2: 'What skills would you like to use in a career?',
      subtitle: 'Select more than one.',
      bobaBot: '6 is the maximum.',
    },
    receipt: {
      title1: 'Thank you for your order! Below are your results.',
      title2: '',
      subtitle: '',
      bobaBot: 'Screenshot your result',
    },
  };

  const content = textContent[step] || textContent['classes'];

  return (
    <Grid
      container
      direction="row"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX={5}
      sx={{
        '@media (max-width: 1000px)': {
          justifyContent: 'center',
          textAlign: 'center',
        },
      }}
    >
      <Grid item>
        <Grid container direction="column" display="flex">
          <Typography variant="h3" mb={3}>
            {content.title1}
          </Typography>
          <Typography variant="h3">{content.title2}</Typography>
          <Typography variant="h5" color={CustomTheme.palette.ThaiTea.main}>
            {content.subtitle}
          </Typography>
          <div style={{ height: 40 }} />
        </Grid>
      </Grid>
      <Grid item>
        <BobaBot text={content.bobaBot} />
      </Grid>
    </Grid>
  );
}

export default Quiz;
