---
title: "Getting Started with Circuits"
style: two-col-page
lang: en
contents:
- Exercise 2 - Write and Upload the PWM Sketch
- Exercise 2 - Understanding the PWM Sketch
---

## Exercise 2 - Write and Upload the PWM Sketch

In order to execute the sketch for this exercise, launch Arduino IDE then 

Click ***File*** -> ***New***. 
{: .mouse }

A new sketch editing window will appear. Copy the whole block of code below and paste it into the new sketch window, overwriting the empty `setup()` and `loop()` that was pre-created. Ensure that the board selected is Arduino Uno and the right COM port is chosen according to "Board Selection" chapter.

{% highlight c  %}
{% endhighlight %}

Click ![arduino_ide_upload button](img/arduino_ide_upload_icon.svg){: .sixteenth-w-w } Upload, and the Arduino IDE will prompt you to ***Save sketch folder as***. Enter `Excercise_2` into the filename field and click save. Once saved, the Arduino IDE will start to compile the sketch. After the compilation is completed, the Arduino IDE will start to upload the compiled sketch into the (STMB). During this stage both yellow LEDs on the (STMB) will start blinking indicating the Arduino IDE is uploading the sketch to the (STMB).
{: .mouse }

## Exercise 2 - Understanding the PWM Sketch


When ON, DELAY, OFF, DELAY are executed in a loop, the result of this exercise is the LED blinking in 1000ms ON and 1000ms OFF pattern. 
{: .success }
