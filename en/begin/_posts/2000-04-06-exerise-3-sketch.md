---
title: "Exercise 3 - Knight Rider LED"
style: two-col-page
lang: en
contents:
---

### Write and Upload the Knight Rider Sketch

In order to execute the sketch for this exercise, launch Arduino IDE then 

Click ***File*** -> ***New***. 
{: .mouse }

A new sketch editing window will appear. Copy the whole block of code below and paste it into the new sketch window, overwriting the empty `setup()` and `loop()` that was pre-created. Ensure that the board selected is Arduino Uno and the right COM port is chosen according to "Board Selection" chapter.

{% highlight c  %}
int pin2 = 2;
int pin3 = 3;
int pin4 = 4;
int pin5 = 5;
int pin6 = 6;
int pin7 = 7;
int timer = 100;

void setup(){
    // Configure PIN2 - PIN 6 as OUTPUT
    pinMode(pin2, OUTPUT);
    pinMode(pin3, OUTPUT);
    pinMode(pin4, OUTPUT);
    pinMode(pin5, OUTPUT);
    pinMode(pin6, OUTPUT);
}

void loop() {
    digitalWrite(pin2, HIGH);   // Turn ON LED on PIN2
    delay(timer);               // delay
    digitalWrite(pin2, LOW);    // Turn OFF LED on PIN2
    delay(timer);

    digitalWrite(pin3, HIGH);
    delay(timer);
    digitalWrite(pin3, LOW);
    delay(timer);

    digitalWrite(pin4, HIGH);
    delay(timer);
    digitalWrite(pin4, LOW);
    delay(timer);

    digitalWrite(pin5, HIGH);
    delay(timer);
    digitalWrite(pin5, LOW);
    delay(timer);

    digitalWrite(pin6, HIGH);
    delay(timer);
    digitalWrite(pin6, LOW);
    delay(timer);

    digitalWrite(pin5, HIGH);
    delay(timer);
    digitalWrite(pin5, LOW);
    delay(timer);

    digitalWrite(pin4, HIGH);
    delay(timer);
    digitalWrite(pin4, LOW);
    delay(timer);

    digitalWrite(pin3, HIGH);
    delay(timer);
    digitalWrite(pin3, LOW);
    delay(timer);
}
{% endhighlight %}

Click ![arduino_ide_upload button](img/arduino_ide_upload_icon.svg){: .sixteenth-w-w } Upload, and the Arduino IDE will prompt you to ***Save sketch folder as***. Enter `Excercise_3` into the filename field and click save. Once saved, the Arduino IDE will start to compile the sketch. After the compilation is completed, the Arduino IDE will start to upload the compiled sketch into the (STMB). During this stage both yellow LEDs on the (STMB) will start blinking indicating the Arduino IDE is uploading the sketch to the (STMB).
{: .mouse }

### Understanding the Knight Rider Sketch

The sketch start by making PIN2 to PIN6 as OUTPUT so that they can drive the LED ON or OFF. The concept of Knight Rider LED is to turn ON and OFF each LED in sequence from right to left. PIN2 ON, delay, PIN2 OFF then PIN3 ON, delay, PIN3 OFF,.....PIN6 ON, delay, PIN6 OFF. As soon as the last LED on PIN6 is turned OFF, the ON and OFF sequence is preformed in a reverse sequence from PIN6 to PIN2. 

When the right to left and left to right sequence is performed in a loop, the LEDs will look like the Knight Rider's scanner light.  
{: .success }
