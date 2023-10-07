import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';

import { CustomTheme } from '../Styling/CustomStyling';
import IconSvg from './IconSvg.jsx';

const QuestionCard = ({
  item,
  page,
  selection,
  handleCountChange,
  disabled,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(selection[item.key]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    const temp = selection;
    for (const [key, value] of Object.entries(temp)) {
      if (item.key === key) {
        temp[item.key] = !value;
        break;
      }
    }
    window.sessionStorage.setItem(
      page === 'classes' ? 'classUserSelect' : 'skillUserSelect',
      JSON.stringify(temp),
    );
    setIsSelected(temp[item.key]);
    handleCountChange();
  };

  const sx = {
    alignItems: 'center',
    borderRadius: '36px',
    boxShadow: '6px 6px 16px rgba(0, 0, 0, 0.16)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    height: '152px',
    justifyContent: 'center',
    margin: '0.6rem',
    width: '240px',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    opacity: !selection[item.key] && !disabled[page] ? '50%' : '100%',
    pointerEvents: !selection[item.key] && !disabled[page] ? 'none' : 'auto',
  };

  const StyledBox = styled(Box)(({ ownerState: { isSelected } }) => ({
    background: isSelected
      ? CustomTheme.palette.ThaiTea.main
      : CustomTheme.palette.BobaHighlight.main,
    border: `12px solid ${
      isSelected
        ? CustomTheme.palette.ThaiTea.main
        : CustomTheme.palette.BobaHighlight.main
    }`,
    ...(!isSelected && {
      '&:hover': {
        border: `12px solid ${CustomTheme.palette.RedBean.main}`,
        background: 'white',
      },
    }),
  }));

  return (
    <StyledBox
      ownerState={{ isSelected }}
      key={item.name}
      sx={sx}
      onClick={handleClick}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      {isHovered && !isSelected ? (
        <>
          <Typography variant="CustomHeading3">{item.name}</Typography>
          <Typography variant="CustomBody">{item.desc}</Typography>
        </>
      ) : (
        <>
          <IconSvg topic={item.key} size="48" color="white" />
          <Typography variant="CustomHeading3" sx={{ color: 'white' }}>
            {item.name}
          </Typography>
        </>
      )}
    </StyledBox>
  );
};

export default QuestionCard;
