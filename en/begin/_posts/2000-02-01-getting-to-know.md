---
author: jpliew
title: "Getting to Know the (STMB)"
layout: guide
lang: en
chapter : 2
contents:
- Hello (STMB)
---

## Hello (STMB)

The functions of the (STMB) can be easily divided into different sections below.

`USB`{: .blackblock } - This port is used to receive power and communicate with the computer.

`7-12VDC Power In`{: .redblock} - The (STMB) can also be powered from this DC jack.

`Port B, Port C & Port D`{: .blueblock} - These are the digital input/output pins of the ATmega32U2 micro-controller.

`Status LED`{: .greenblock } - The green LED indicates power on, both yellow LED indicate communication and red LED is controlled by D13 of the Arduino.

`Power`{: .redblock } - This section provides external components with 3.3V and 5V DC power.

`Power Rails`{: .redblock } - When connected to 3.3V or 5V DC, these rails can be used to supply power to external devices.

`Digital & Analog Pins`{: .blueblock } - These pins are input/output used for interfacing with external passive or active components.

`Tie Points`{: .blackblock } - These tie points are used for joining components. 5 tie points (ABCDE) are joined in a group. (FGHIJ) is another group.

![Get to Know (STMB)](img/get_to_know_stemtera.svg){: .full-w }
