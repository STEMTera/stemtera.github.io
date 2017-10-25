---
author: jpliew
title: "Exercise 4 - Push Button Controlled LED"
layout: guide
lang: en
contents:
---

### Write and Upload the Push Button Controlled LED Sketch

In order to execute the sketch for this exercise, launch Arduino IDE then 

Click ***File*** -> ***New***. 
{: .mouse }

A new sketch editing window will appear. Copy the whole block of code below and paste it into the new sketch window, overwriting the empty `setup()` and `loop()` that was pre-created. Ensure that the board selected is Arduino Uno and the right COM port is chosen according to "Board Selection" chapter.

```c
boolean LEDState=false;
int LED = 2;
int BUTTON = 6;

void setup() {
    pinMode(LED, OUTPUT);
    // set BUTTON pin as INPUT with an Internal PULLUP
    pinMode(BUTTON, INPUT_PULLUP);
}

void loop() {
    // wait for BUTTON Pin LOW
    if (digitalRead(BUTTON)==LOW){
        delay(50); // wait for 50 ms
        // if BUTTON Pin still low, then it is a solid press
        if (digitalRead(BUTTON)==LOW) {
            LEDState = !LEDState;   // toggle the LED state
            digitalWrite(LED, LEDState);    
        }
        // NOTE: this is a bad way to debounce a button
        // if the BUTTON is stuck at LOW the sketch will 
        // forever stays in the while
        while(digitalRead(BUTTON)==LOW) {
            // wait until BUTTON is read HIGH
        };  
    }
}
```

Click ![arduino_ide_upload button](img/arduino_ide_upload_icon.svg){: .sixteenth-w-w } Upload, and the Arduino IDE will prompt you to ***Save sketch folder as***. Enter `Excercise_4` into the filename field and click save. Once saved, the Arduino IDE will start to compile the sketch. After the compilation is completed, the Arduino IDE will start to upload the compiled sketch into the (STMB). During this stage both yellow LEDs on the (STMB) will start blinking indicating the Arduino IDE is uploading the sketch to the (STMB).
{: .mouse }

### Understanding the Push Button Controlled Sketch

In order for the sketch to keep track of the state of the LED, we need to first declare a `boolean` variable with a default as `false`.

`boolean LEDState=false;`

Each time the LED changes its state, we will store the state in this variable. We then declare two more variables, one for the LED pin and the other one for BUTTON pin, which are 2 and 6 respectively.

`int LED = 2;`
`int BUTTON = 6;`

The pin where the LED is connected to will be set as `OUTPUT` using `pinMode(LED, OUTPUT)` function and the pin where the push button is connected to will be set as `INPUT_PULLUP` using `pinMode(BUTTON, INPUT_PULLUP)` function. The constant

`INPUT_PULLUP`

means, other than making the pin as `INPUT`, it also enable the internal pull-up resistor of that pin, so that the pin will be connected to the 5V via the internal pull-up resistor and always in a `HIGH` state. When the push button that is connected to the `BUTTON` pin is pressed, it connects the `BUTTON` pin to ground (GND) thus making the `BUTTON` pin reads `LOW`.

When in the `loop()`, the code

`if (digitalRead(BUTTON)==LOW)`

is waiting for the `BUTTON` pin to go `LOW`, once it is low, it wait for 50ms and read the `BUTTON` pin again for low. This act as a simple `debounce` to eliminate any noise when the push button first make a contact. If the `BUTTON` pin is still low after 50ms, then the contact is solid and therefore the state of the LED is being toggled (`false` to `true`, or `true` to `false`) using this code. 

`LEDState = !LEDState;`

After toggling the `LEDState`, we can now write the state to the `LED` pin. In order to prevent the toggling repeatedly fired while the push button is being depressed, we add another line of code to wait for the `BUTTON` pin to go HIGH when the push button is released.

`while(digitalRead(BUTTON)==LOW)`

This code is a lazy hack and a bad coding practice because if the push button is shorted, the sketch will forever stays in the `while` loop and will never execute any other code.
{: .warning }

CHALLENGE! Write a sketch to perform the same task with button debounce, LED toggling and will never locks up even when the push button is shorted.
{: .challenge }  
