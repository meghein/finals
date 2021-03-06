import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
  return (
    <>
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="static" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.loading
          )}%`}</Typography> */}
        </Box>
      </Box>
      <CircularStatic/>
      
    </>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {
  const [progress, setProgress] = useState(30);
  let numberImage = 30
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 360 ? 30 : prevProgress + 30));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* {!props.loading && <CircularProgressWithLabel value={progress} />} */}
      
    </>
  );
}