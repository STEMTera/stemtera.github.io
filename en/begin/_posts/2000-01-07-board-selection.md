---
title: "Introduction - Board Selection"
style: two-col-page
lang: en
contents:
- Board Selection
- Port Selection
---

## Board Selection

After getting used to the user interface of the Arduino IDE, you need to configure the Arduino IDE to be aware of the board that you intend to use. This configuration is located at the **`Tools`** menu.

Move the mouse over to the **`Tools`** menu and left click the **`Tools`** menu once. When the **`Tools`** menu appears, move the mouse to the **`Board`** sub menu and another sub menu with a list of boards will appear. Left click the **Arduino/Genuino Uno** selection. Arduino IDE is now configured to use the (STMB) as the choice of development board.

The (STMB) is 100% compatible with Arduino UNO but it is not listed in the Arduino Software's Tools menu. Select "Arduino/Genuino Uno" instead.
{: .info }

## Port Selection

The Arduino IDE also need to know the communication port of your (STMB). At the **`Tools -> Port`** sub menu, select the appropriate port of your (STMB). Different Operating System will show different **`Port`** name.

![Windows Logo](img/windows_logo.svg){: .sixteenth-h .left }On a Windows Operating System, the Arduino IDE will show the (STMB) as **`Port: "COMx (Arduino/Genuino Uno)"`**

![Mac Logo](img/mac_logo.svg){: .sixteenth-h .left }On a Mac OS, the Arduino IDE will show the (STMB) as **`Port: "/dev/tty.usbmodem"`**

![Linux Logo](img/linux_logo.svg){: .sixteenth-h .left }On a Linux Operating System, the Arduino IDE will show the (STMB) as **`Port: "/dev/ttyACM0"`**

![STEMTera Breadboard selection in Arduino IDE](img/board_selection.svg){: .half-w .center }
