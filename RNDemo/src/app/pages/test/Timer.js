import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const timerValue = 10;
const delay = 1000; // 1 second delay

const Timer = () => {
  const [timer, setTimer] = useState(timerValue);
  const [startTimer, setStartTimer] = useState(false);
  console.log('timer: ', timer);
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setStartTimer(true);
    }, 1 * delay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    var intervalId;
    console.log('inside useEffect: ', intervalId);
    if (timer > 0 && startTimer) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => {
          const newValue = prevTimer - 1;
          if (newValue == 0) {
            clearInterval(intervalId);
          }
          return newValue;
        });
      }, delay);
    }

    return () => {
      console.log('--------- :inside clean up: ------------', intervalId);
      clearInterval(intervalId);
    };
  }, [timer, startTimer]);

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{timer}</Text>
      </View>
      {!startTimer && (
        <Text style={styles.timer}>Timer is starting in 1sec...</Text>
      )}
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  timer: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  timerContainer: {
    paddingVertical: '20%',
    paddingHorizontal: '10%',
    backgroundColor: 'blue',
    borderRadius: 50,
  },
});
