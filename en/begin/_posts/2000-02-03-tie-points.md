---
author: jpliew
title: "(STMB) Tie Points"
layout: guide
post-card-type: image
card-image: stemtera_breadboard_clip.svg
lang: en
description: There are a total of 634 tie points in the (STMB), divided into 3 major group. The first group is power rails. There are 2 power rails located on the left and 2 on the right of the (STMB) marked with orange color in the diagram. Each power rail has 30 (1x30) tie points internally connected together in a straight line. These power rails are normally used for distributing the power supply.
 
contents:
- Tie Points
---

## Tie Points

![Tie Points of (STMB)](img/stemtera_inner_connection.svg){: .full-h .center}

There are a total of 634 tie points in the (STMB), divided into 3 major group.

The first group is power rails. There are 2 power rails located on the left and 2 on the right of the (STMB) marked with orange color in the diagram. Each power rail has 30 (1x30) tie points internally connected together in a straight line. These power rails are normally used for distributing the power supply.

The second group is just normal tie points. These tie points marked with green color in the diagram are commonly used as joints. The formation of these tie points is 1x5, for example `1->ABCDE`{: .greenblock } is one group of 1x5 tie points internally connected together. `1->FGHIJ`{: .greenblock } is another group of 1x5 tie points.

The last group is a formation of 1x2 tie points connected to the micro-controllers' pins inside the (STMB). They can be seen marked with black color in the diagram.

![(STMB) clip](img/stemtera_breadboard_clip.svg){: .half-w .center }

Inside the holes of the tie points are spring clips. These spring clips manufactured in the formation of 1x2, 1x5 and 1x30. When you insert a component inside a tie point, a resistor for example, the leg of the resistor will be held by the two arms of the clip inside the tie point, thus making a mechanical connection as shown on the left diagram. Because the clips are made from copper or stainless steel, electricity can flow from the resistor to the clip.

By using mixtures of components connecting to the tie points, complex electronic circuits can be then formed.
