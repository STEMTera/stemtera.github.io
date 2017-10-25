---
author: jpliew
title: "Exercise 5 - Buzzer Music"
layout: guide
lang: en
contents:
---

### Write and Upload the Buzzer Music Sketch

In order to execute the sketch for this exercise, launch Arduino IDE then 

Click ***File*** -> ***New***. 
{: .mouse }

A new sketch editing window will appear. Copy the whole block of code below and paste it into the new sketch window, overwriting the empty `setup()` and `loop()` that was pre-created. Ensure that the board selected is Arduino Uno and the right COM port is chosen according to "Board Selection" chapter.

```c
#include "pitches.h"

// notes in the melody:
int melody[] = {
    NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {
    4, 8, 8, 4, 4, 4, 4, 4
};

void setup() {
    // iterate over the notes of the melody:
    for (int thisNote = 0; thisNote < 8; thisNote++) {

        // to calculate the note duration, take one second divided by the note type.
        // e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
        int noteDuration = 1000 / noteDurations[thisNote];
        tone(8, melody[thisNote], noteDuration);

        // to distinguish the notes, set a minimum time between them.
        // the note's duration + 30% seems to work well:
        int pauseBetweenNotes = noteDuration * 1.30;
        delay(pauseBetweenNotes);
        // stop the tone playing:
        noTone(8);
    }
}

void loop() {
    // no need to repeat the melody.
}
```

Click ![arduino_ide_upload button](img/arduino_ide_upload_icon.svg){: .sixteenth-w-w } Upload, and the Arduino IDE will prompt you to ***Save sketch folder as***. Enter `Excercise_5` into the filename field and click save. Once saved, the Arduino IDE will start to compile the sketch. After the compilation is completed, the Arduino IDE will start to upload the compiled sketch into the (STMB). During this stage both yellow LEDs on the (STMB) will start blinking indicating the Arduino IDE is uploading the sketch to the (STMB).
{: .mouse }

### Understanding the Buzzer Music Sketch

Arduino has a built-in function called `tone()` that is used in this sketch to produce musical note. The sketch starts by including a header file called `pitches.h`. In this file, there are constants defining the pitches of music notes, for example

`#define NOTE_C4  262`

This defines a middle C (C4) with a frequency of 262 Hz. In reality middle C is 261.625565 Hz. In the next block of codes,

    int melody[] = {
        NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4
    };

8 musical notes is being stored in an array called `melody[]`. The reason to store these notes in an array is because it will be easier to write a `for loop` to play all the notes in `melody[]`.

The second block of codes also uses an array, this time to store the note duration. 

    int noteDurations[] = {
        4, 8, 8, 4, 4, 4, 4, 4
    };

In the array `noteDurations[]`, a `4` represents quarter note and an `8` represents eighth note. In the `setup()` function, the notes are being played in a `for loop` that start from 0 to 7 (total 8 notes ) incrementing one at a time with function

`tone(8, melody[thisNote], noteDuration);`

This instructs the (STMB) to send digital pulse to PIN 8, with a frequency of `melody[thisNote]` and play for a duration for `noteDuration`. In order to distinguish the notes, a delay is required in between each note. The author of the Tone Library found out that the delay of 130% of `noteDuration` seems to work well.

    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);

After the required delay between notes, 

`noTone(8)`

is called to stop pulses being sent to PIN8 after playing the 8 notes store in the `melody[]` array. 

CHALLENGE! Write a sketch to play Tetris melody and blinks an LED at the same time.
{: .challenge }  
