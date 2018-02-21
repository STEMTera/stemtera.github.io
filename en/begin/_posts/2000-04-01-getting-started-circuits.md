---
author: jpliew
title: "Arduino Exercises"
layout: guide
post-card-type: image
card-image: common_led.svg
lang: en
chapter : 4 
description: LEDs (light-emitting diodes) are small and energy efficient lights that are used in many applications. In this Arduino blinking LED exercise, we will start with one of the easiest LED blinking circuit and learn how to blink an LED using the (STMB).
contents:
- Exercise 1 - Blinking LED
parts:
 RES_220R: 1
 LED_RED: 1
 JUMPER_WIRE: 2
schematic:
 exercise_01_schematic.svg
breadboard:
 exercise_01_breadboard.svg
---
## Exercise 1 - Blinking LED

{% include schematic.html %}LEDs (light-emitting diodes) are small and energy efficient lights that are used in many applications. In this exercise we will start with one of the easiest LED blinking circuit. 

In this excercise, PIN3 is used to drive the LED on and off. The 220Ω resistor act as a current limiter to limit the current flowing through the LED. Depending on the specifications, LEDs need about 8mA to 20mA of current to light up.

<div style="clear:both; height:0;"></div>

{% include parts.html  %}

1. Connect a JUMPER WIRE to GND and 33J.
2. Connect a JUMPER WIRE to PIN3 and 38J.
3. Connect a 220Ω RESISTOR to 34H and 38H.
4. Connect the anode (longer) pin of the RED LED to 34G and cathode (shorter) pin to 33G.
{: .connections }

{% include breadboard.html %}

### Write and Upload the Blinking LED Sketch

In order to execute the sketch for this exercise, launch Arduino IDE then 

Click ***File*** -> ***New***. 
{: .mouse }

A new sketch editing window will appear. Copy the whole block of code below and paste it into the new sketch window, overwriting the empty `setup()` and `loop()` that was pre-created. Ensure that the board selected is Arduino Uno and the right COM port is chosen according to "Board Selection" chapter.

```c
void setup() {
    pinMode(3, OUTPUT);
}

void loop() {
    digitalWrite(3, HIGH);
    delay(1000);
    digitalWrite(3, LOW);
    delay(1000);
}
```

Click ![arduino_ide_upload button](img/arduino_ide_upload_icon.svg){: .sixteenth-w-w } Upload, and the Arduino IDE will prompt you to ***Save sketch folder as***. Enter `Excercise_1` into the filename field and click save. Once saved, the Arduino IDE will start to compile the sketch. After the compilation is completed, the Arduino IDE will start to upload the compiled sketch into the (STMB). During this stage both yellow LEDs on the (STMB) will start blinking indicating the Arduino IDE is uploading the sketch to the (STMB).
{: .mouse }

### Understanding the Blinking LED Sketch

From the circuit, we know that PIN3 of the (STMB) is connected to the 220Ω resistor and the Red LED. In order to turn on the LED, we need to instruct the (STMB) to set PIN3 to **OUTPUT** in the `setup()` function.

`pinMode(3, OUTPUT);`

The `pinMode()` function shown above takes two parameters. The first parameter is the pin number and the second parameter is the mode of the pin. The above code instructs the (STMB) to set PIN3 as **OUTPUT**.

Once PIN3 is configured as **OUTPUT**, we can then instruct the (STMB) to either set PIN3 **HIGH** or **LOW**. 

`digitalWrite(3, HIGH);`

The `digitalWrite()` function shown above takes two parameters. The first parameter is the pin number and the second parameter is **HIGH** or **LOW**. When a PIN is set to **HIGH**, the PIN will **OUTPUT** 5V. When a PIN is set to **LOW**, the PIN will **OUTPUT** 0V (no voltage and connected to GROUND).

In order to set an ON time or OFF time, we can add a delay in between ON and OFF using the following line of code after setting a PIN **HIGH** or **LOW**.

`delay(1000);`

This line of code instruct the (STMB) to delay for **1000** ms (milliseconds).

When ON, DELAY, OFF, DELAY are executed in a loop, the result of this exercise is the LED blinking in 1000ms ON and 1000ms OFF pattern. 
{: .success }
