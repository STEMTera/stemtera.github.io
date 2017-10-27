---
author: jpliew
title: "Exercise 1 - Blinking LED Sketch"
layout: guide
lang: en
description: In order to upload the Blinking LED sketch to the (STMB), launch Arduino IDE then click File -> New. A new sketch editing window will appear. Copy the whole block of code below and paste it into the new sketch window, overwriting the empty `setup()` and `loop()` that was pre-created. Ensure that the board selected is Arduino Uno and the right COM port is chosen according to "Board Selection" chapter.

contents:
---

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

From the circuit, we know that PIN3 of the (STMB) is connected to the 330Ω resistor and the Red LED. In order to turn on the LED, we need to instruct the (STMB) to set PIN3 to **OUTPUT** in the `setup()` function.

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
