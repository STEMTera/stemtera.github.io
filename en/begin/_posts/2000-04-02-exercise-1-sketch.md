---
title: "Getting Started with Circuits"
style: two-col-page
lang: en
contents:
- Exercise 1 - Sketch
---

## Exercise 1 - Sketch

{% highlight c  %}
/*
Blink
Turns on an LED on for one second, then off for one second, repeatedly.

*/

// the setup function runs once when you press reset or power the board
void setup() {
    // initialize digital pin LED_BUILTIN as an output.
    pinMode(3, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
    digitalWrite(3, HIGH);  // turn the LED on (HIGH is the voltage level)
    delay(1000);            // wait for a second
    digitalWrite(3, LOW);   // turn the LED off by making the voltage LOW
    delay(1000);            // wait for a second
}
{% endhighlight %}

