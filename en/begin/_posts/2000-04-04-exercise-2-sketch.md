---
author: jpliew
title: "Getting Started with Circuits"
layout: guide
post-card-type: article
lang: en
description: How to upload Arduino PWM sketch into the (STMB).
contents:
---

### Write and Upload the PWM Sketch

In order to execute the sketch for this exercise, launch Arduino IDE then 

Click ***File*** -> ***New***. 
{: .mouse }

A new sketch editing window will appear. Copy the whole block of code below and paste it into the new sketch window, overwriting the empty `setup()` and `loop()` that was pre-created. Ensure that the board selected is Arduino Uno and the right COM port is chosen according to "Board Selection" chapter.

```c
void setup() {
    pinMode(3, OUTPUT);  
}

void loop() {
    analogWrite(3, 255);  // 255 is 100% duty cycle
    delay(200);           // wait for 100ms
    analogWrite(3, 127);  // 127 is 50% duty cycle
    delay(200);           // wait for 100ms
    analogWrite(3, 64);   // 64 is 25% duty cycle
    delay(200);           // wait for 100ms
    analogWrite(3, 32);   // 32 is 12.5% duty cycle
    delay(200);           // wait for 100ms
    analogWrite(3, 16);   // 16 is 6.25% duty cycle
    delay(200);           // wait for 100ms
    analogWrite(3, 0);    // 0 is 0% duty cycle
    delay(200);           // wait for 100ms
}
```

Click ![arduino_ide_upload button](img/arduino_ide_upload_icon.svg){: .sixteenth-w-w } Upload, and the Arduino IDE will prompt you to ***Save sketch folder as***. Enter `Excercise_2` into the filename field and click save. Once saved, the Arduino IDE will start to compile the sketch. After the compilation is completed, the Arduino IDE will start to upload the compiled sketch into the (STMB). During this stage both yellow LEDs on the (STMB) will start blinking indicating the Arduino IDE is uploading the sketch to the (STMB).
{: .mouse }

### Understanding the PWM Sketch


From the circuit, we know that PIN3 of the (STMB) is connected to the 330Ω resistor and the Red LED. In order to turn on the LED, we need to instruct the (STMB) to set PIN3 to **OUTPUT** in the `setup()` function.

`pinMode(3, OUTPUT);`

The `pinMode()` function shown above takes two parameters. The first parameter is the pin number and the second parameter is the mode of the pin. The above code instructs the (STMB) to set PIN3 as **OUTPUT**.

Once PIN3 is configured as **OUTPUT**, we can then use `analogWrite()` as a PWM pin. For example

`analogWrite(3, 127);`

The `analogWrite()` function shown above takes two parameters. The first parameter is the pin number and the second parameter is the duty cycle from 0 to 255 representing 0% to 100% duty cycle. In the example, the value 127 translate to 50% duty cycle.

In the sketch, we set the PWM from 100% duty cycle to 0% duty cycle in half step with a 200ms delay between each step in a loop.

When PWM, DELAY, PWM, DELAY are executed in a loop, the result of this exercise is the brightness of the LED dimming from full brightness to off and repeat. 
{: .success }
