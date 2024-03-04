---
title: 'Sunflower Solar Tracker System'
date: 2024-02-07
permalink: /posts/2024/02/sunflower-solar-tracker
# excerpt: "<img src='/images/blogs/obj-dect-fruit-edge-impulse/obj-dect-fruit-edge-impulse-real-world.jpeg'>"
tags:
  - class project
  - arduino
  - electronics
  - 3D modelling
  - 3D printing
---

### Description
I captained a team of four Mechatronics Engineering undergraduate colleagues to build a single-axis solar tracker system that maximizes solar energy generation, leveraging Arduino and accessible electronic components. This was a class project.

### Skills 
* C++ using Arduino IDE
* 3D modelling using Solid Works
* 3D model slicing and optimisation using UltiMaker Cura
* 3D printing using Creality Ender-3 3D printer

### Task
> "Come up with multiple mini project ideas, from which you will be assigned only one, the best, to build. For this course we'll be grouping you all in groups of fives <br/>...There are no restrictions to your imagination, only cost and time feasibility." <br/>&#8211; Dr. Segun Adebayo

My group agreed on and was tasked with building a sunflower solar tracker, courtsey of Awani Toritseju.

### Steps
* Gathered as a group
* Assigned individual tasks
* Ran simulations of the project
* Purchased needed electronics components
* Started building the first prototype with a carton frame
* Started building the second and final prototype with a 3D printed frame
<br/>

![Functional block diagram](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/func-blk-drgm.jpeg){: .align-center}

![Schematic diagram of electric circuit](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/lcd-wiring.jpeg){: .align-right width="350px" height="350px"}

![Schematic diagram of electric circuit](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/schematic-wokwi.jpeg){: .align-left width="350px" height="350px"}

<br/>
<br/>

### Code
```python
#include <Servo.h>
#include <LiquidCrystal.h>

// Servo
#define error 250
Servo servo;
int servoPosition =  7.5;

// LCD
const int rs = 9, en = 8, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7); 

// Main code
void setup() {
  Serial.begin(9600); // Debugging code

  // Servo
  servo.attach(12);
  servo.write(servoPosition);
  delay(1000);

  // LCD
  lcd.begin(16, 2);
  delay(1000);
  lcd.print("Group X");
  lcd.setCursor(0, 2);
  lcd.print("MCE 417");

}

void loop() {
  int R1 = analogRead(A0);
  int R2 = analogRead(A1);
  int diff = abs(R1 - R2);

  Serial.print(R1); // Debugging code
  Serial.print(", "); // Debugging code
  Serial.println(R2); // Debugging code

  if (diff > error) {
    if (R1 > R2) {
      servoPosition = --servoPosition;
      Serial.println("R1 >>>"); // Debugging code
      lcd.print("R1 >>>"); // Debugging code
    }
    if (R1 < R2) {
      servoPosition = ++servoPosition;
      Serial.println("R2 >>>"); // Debugging code
      lcd.print("R2 >>>"); // Debugging code
    }

  } else {
      Serial.println("R1 = R2"); // Debugging code
      lcd.println("R1 = R2"); // Debugging code
  }

  servoPosition = constrain(servoPosition, 0, 10); // Control code 
  servo.write(servoPosition); 
  Serial.print("servoPosition: "); // Debugging code
  Serial.println(servoPosition); // Debugging code
  delay(50);

}
```

### Challenges Faced
* Hardware issues with Arduino Nano
* Prolonged duration for 3D printed final case
* Assembly
* Financial constraints
* Availability of electronics components
<br/>

<!-- ![Arduino Code](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/arduino-code-1.jpeg){: .align-left width="350px"} -->
<!-- ![Arduino Code](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/arduino-code-2.jpeg){: .align-left width="350px"} -->
<!-- <i>Arduino code</i> -->


### Results
* Successful single-axis solar tracker
* Up to 25% increase in solar energy generation

### Acknowledgements
* Instructors:
  * Dr. Segun Adebayo
  * Mrs. Kehinde
* My group members: 
  * Toritseju Regina Awani
  * Subuola Emmanuel Ilori 
  * Temitayo Jesimiel Adenuga
* Other contributors:
  * Etuk Ifiok
  * Engr. Ogar
  * Lab Technician 

![Testing Phase Results](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/testing-phase.jpg){: .align-left width="350px"}

![3D Printed Enclosure](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/3D-printed-enclosure.jpeg){: .align-right width="350px"}