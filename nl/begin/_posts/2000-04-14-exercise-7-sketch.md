---
author: jpliew
title: "Automatic Night Lamp"
layout: guide
lang: nl
hidden: true
contents:
---

### Write and Upload the Automatic Night Lamp Sketch

In order to execute the sketch for this exercise, launch Arduino IDE then 

Click ***File*** -> ***New***. 
{: .mouse }

A new sketch editing window will appear. Copy the whole block of code below and paste it into the new sketch window, overwriting the empty `setup()` and `loop()` that was pre-created. Ensure that the board selected is Arduino Uno and the right COM port is chosen according to "Board Selection" chapter.

```c
int brightness;
int lightLevel;
int ambient=120;
int totalDark=240;

void setup() {
    pinMode(9, OUTPUT);
    pinMode(A0, INPUT);
    Serial.begin(9600);
}

void loop() {
    lightLevel = analogRead(A0);
    brightness = map(lightLevel, ambient, totalDark, 0, 255);
    if (brightness<0) brightness=0;
    analogWrite(9, brightness);

    Serial.print("Light Level=");
    Serial.print(lightLevel);
    Serial.print(", ");
    Serial.print("Brightness=");
    Serial.println(brightness);
}
```

Click ![arduino_ide_upload button](img/arduino_ide_upload_icon.svg){: .sixteenth-w-w } Upload, and the Arduino IDE will prompt you to ***Save sketch folder as***. Enter `Excercise_7` into the filename field and click save. Once saved, the Arduino IDE will start to compile the sketch. After the compilation is completed, the Arduino IDE will start to upload the compiled sketch into the (STMB). During this stage both yellow LEDs on the (STMB) will start blinking indicating the Arduino IDE is uploading the sketch to the (STMB).
{: .mouse }

### Calibrating the Automatic Night Lamp

When we first execute the sketch, the (STMB) does not know the ambient light level, but this ambient light level is important because we need to tell the (STMB) the ambient light so that it will be able to turn the brightness of the LED according to the ambient lighting.

In order to find out the current ambient light level measured by the photoresistor, we need to open the serial monitor window. 

When the status bar of the Arduino IDE shows `Done uploading`, click  ![arduino_ide_monitor button](img/arduino_ide_monitor_icon.svg){: .sixteenth-w-w } serial monitor. A new serial monitor windows will be displayed. The serial monitor is a way for the (STMB) to communicate with the computer to send or receive data, most commonly the debugging messages.

On this windows, we can see a continuous stream of messages is being displayed. In this messages, we are interested in the `Light Level` and `Brightness`.  

Place the (STMB) at a place where you would like it to read the ambient light level from. Without anything blocking light to the photoresistor, write down the value of `Light Level` from the serial monitor. This value is the digital value of the corresponding voltage dropped on the photoresistor (see explanation below for details). Add about 10 to this value, for example, if the value is 115, then add 10 to become 125. Switch back to the Arduino IDE and edit the following line of code

`int ambient=120;`

change it to the value we have just calculated 

`int ambient=125;`

Now take a dark cloth or use your palm to cover the photoresistor, you will notice the `Light Level` value on the serial monitor changing to a larger value as you place the cover over the photoresistor. While maintaining the cover over the photoresistor, write down the `Light Level` value. This should be a larger value than the previous value. Switch back to the Arduino IDE and edit the following line of code

`int totaldark=240;`

if the value is 260, then change that line to 

`int totaldark=260;`

By changing these two lines of code, we are telling the (STMB) the ambient light and the total darkness light level in your environment.

Click ![arduino_ide_upload button](img/arduino_ide_upload_icon.svg){: .sixteenth-w-w } and upload your sketch again.
{: .mouse }

Move you palm over and then away from the photoresistor, you will see the brightness of the LED changing as you move your palm over the photoresistor.

### Understanding the Automatic Night Lamp Sketch

We first declare two integer variables to store the brightness and light level as below

    int brightness;
    int lightLevel;

Variable `lightLevel` is use to store the current light level and variable `brightness` is for storing the brightness of the LED. Another two variables are `ambient` and `totalDark` that were already explained in the calibration section.

In the `setup()` section PIN9 is setup as `OUTPUT` and `A0` as `INPUT`. In this exercise we will introduce a debugging or data transfer feature of the (STMB), the `Serial` object. 

`Serial.begin(9600);`

The line of code tells the (STMB) to initialize its serial port to 9600 baud rate and start using it. Baud rate is the rate at which data is transferred between serial devices. Serial devices need to set the same baud rate to talk to each other.

In the `loop()` function we first call

`lightLevel = analogRead(A0);`

to read the analogue value from pin A0 and then store into the variable `lightLevel`. Because the value of the light level (125 to 260 from our previous calibration) is different to the `analogueWrite()` function's 0 to 255 PWM value, we need to have them converted into a relative value that is corresponding to each other. By using the `map()` function

`brightness = map(lightLevel, ambient, totalDark, 0, 255);`

we are converting the ambient value 120 to PWM value of 0, to the max range of ambient value or 260 to a PWM value of 255. The `map()` function then return the converted value and stored into the variable `brightness`.

Because the ambient light is not always consistent, the `map()` function might sometimes return a negative value which is not a valid value for brightness when using `analogWrite()` function, we need to perform a conditional check using

`if (brightness<0) brightness=0;`

This means, if the `brightness` variable has a value that is less than zero, store zero to the variable `brightness`. By doing this, we can ensure that the variable `brightness` will not have a negative value. 

The following codes instruct the (STMB) to print out the variables message via the serial monitor window.

    Serial.print("Light Level=");
    Serial.print(lightLevel);
    Serial.print(", ");
    Serial.print("Brightness=");
    Serial.println(brightness);


When executed in a loop, the current ambient light level is continuously being converted into a relative brightness value and thus making the LED automatically controlled by the ambient light.
{: .success }

CHALLENGE! Connect another LED to the circuit and add codes into the currect sketch to do the reverse of the current LED's behavior.
{: .challenge }  
