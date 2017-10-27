---
author: jpliew
title: "Board Selection"
layout: guide
post-card-type: image
card-image: arduino_board_selection.svg
lang: en
description: Learn how to select board and port of the (STMB) in Arduino IDE. After connecting the (STMB) into the computer, you need to configure the Arduino IDE to know the type of board that you intend to use.
contents:
- Board Selection
- Port Selection
---

## Board Selection

After connecting the (STMB) into the computer, you need to configure the Arduino IDE to know the type of board that you intend to use. This configuration is located at the **`Tools`** menu.

Move the mouse over to the **`Tools`** menu and click the **`Tools`** menu once. When the **`Tools`** menu appears, move the mouse to the **`Board`** sub menu and another sub menu with a list of boards will appear. Click the **Arduino/Genuino Uno** selection. Arduino IDE is now configured to use the (STMB) as the choice of development board.

The (STMB) is 100% compatible with Arduino UNO but it is not listed in the Arduino Software's Tools menu. Select "Arduino/Genuino Uno" instead.
{: .info }

## Port Selection

The Arduino IDE also need to know the communication port of your (STMB). At the **`Tools -> Port`** sub menu, select the appropriate port of your (STMB). Different Operating Systems will show different **`Port`** names.

![Windows Logo](img/windows_logo.svg){: .sixteenth-w .left }On a Windows Operating System, the Arduino IDE will show the (STMB) as **`Port: "COMx (Arduino/Genuino Uno)"`**

![Mac Logo](img/mac_logo.svg){: .sixteenth-w .left }On a Mac OS, the Arduino IDE will show the (STMB) as **`Port: "/dev/tty.usbmodem"`**

![Linux Logo](img/linux_logo.svg){: .sixteenth-w .left }On a Linux Operating System, the Arduino IDE will show the (STMB) as **`Port: "/dev/ttyACM0"`**

Once the port has been configured, you can proceed to upload your first sketch.

![STEMTera Breadboard selection in Arduino IDE](img/arduino_board_selection.svg){: .full-h .center }
