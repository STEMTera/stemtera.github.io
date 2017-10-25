---
author: jpliew
title: "Potentiometer"
layout: guide
lang: nl
contents:
---

### Write and Upload the Potentiometer Sketch

In order to execute the sketch for this exercise, launch Arduino IDE then 

Click ***File*** -> ***New***. 
{: .mouse }

A new sketch editing window will appear. Copy the whole block of code below and paste it into the new sketch window, overwriting the empty `setup()` and `loop()` that was pre-created. Ensure that the board selected is Arduino Uno and the right COM port is chosen according to "Board Selection" chapter.

```c
int sensorValue;

void setup() {
    pinMode(A0, INPUT);
    pinMode(13, OUTPUT);
}

void loop() {
    sensorValue=analogRead(A0);
    digitalWrite(13, HIGH);
    delay(sensorValue);
    digitalWrite(13, LOW);
    delay(sensorValue);
}
```

Click ![arduino_ide_upload button](img/arduino_ide_upload_icon.svg){: .sixteenth-w-w } Upload, and the Arduino IDE will prompt you to ***Save sketch folder as***. Enter `Excercise_6` into the filename field and click save. Once saved, the Arduino IDE will start to compile the sketch. After the compilation is completed, the Arduino IDE will start to upload the compiled sketch into the (STMB). During this stage both yellow LEDs on the (STMB) will start blinking indicating the Arduino IDE is uploading the sketch to the (STMB).
{: .mouse }

Turn the knob on the potentiometer and notice the RED L LED on the (STMB) blinks corresponding to the knob. 

### Understanding the Potentiometer Sketch

The first line of the sketch

`int sensorValue;`

declares an integer variable called `sensorValue`. This variable will be used to store the value of the voltage read from the middle terminal of the potentiometer.

In the `setup()` function, PIN A0 is configured as `INPUT` and PIN13 is configured as `OUTPUT`. 

    void setup() {
        pinMode(A0, INPUT);
        pinMode(13, OUTPUT);
    }

The (STMB) has 6 exposed analogue to digital converter (ADC). The ADC is commonly used to convert analogue voltage to digital value. In this example

`sensorValue=analogRead(A0);`

the analogue voltage of PIN A0 is being read using `analogRead()` function and stored into the variable `sensorValue`. The code then proceed to turn PIN 13 `HIGH` by executing

`digitalWrite(13, HIGH);`

after that a delay of a digital value (`sensorValue`) which corresponds to the analogue voltage read, will be executed. This delay demonstrates the blinking period of the LED as the knob of the potentiometer is being turned.

`delay(sensorValue);`

With the potentiometer's both left and right terminals connected to 5V and GND respectively, the middle terminal of the potentiometer will have a voltage swing between 5V and 0V when the knob is being turned from one side to the other side. When the voltage of the middle terminal is read by an ADC, the corresponding digital value of the ADC in this case is 0 to 1023, where 0 is 0V and 1023 is 5V. This digital value when is passed to the `delay()` function, it represents time in a unit of milliseconds. After the delay, PIN 13 is turned `LOW` followed by a delay with a value of `sensorValue` again.

When these instructions are executed in a loop, the RED LED on the (STMB) will turn ON and OFF in a period corresponding to the position of the potentiometer's knob. 
{: .success }

CHALLENGE! Write a sketch to read the potentiometer value and play a pitch relative to the value.
{: .challenge }  
