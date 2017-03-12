---
title: "Getting Started with Circuits"
style: two-col-page
lang: en
chapter : 4 
contents:
- Exercise 1 - Blinking LED
parts:
 RES_330R: 1
 LED_RED: 1
 JUMPER_WIRE: 2
schematic:
 exercise_01_schematic.svg
breadboard:
 exercise_01_breadboard.svg

---

## Exercise 1 - Blinking LED


{% include schematic.html %}LEDs (light-emitting diodes) are small and energy efficient lights that are used in many applications. In this exercise we will start with one of the easiest LED blinking circuit. 

In this excercise, PIN3 is used to drive the LED on and off. The 330Ω resistor act as a current limiter to limit the current flowing through the LED. Depending on the specifications, LEDs need about 8mA to 20mA of current to light up.

<div style="clear:both; height:0;"></div>

{% include parts.html  %}

1. Connect a JUMPER WIRE to GND and 33J.
2. Connect a JUMPER WIRE to PIN3 and 38J.
3. Connect a 330Ω RESISTOR to 34H and 38H.
4. Connect the anode (longer) pin of the RED LED to 34G and cathode (shorter) pin to 33G.
{: .connections }

{% include breadboard.html %}
