# Wildlife Drones and Flight Plans
DR BAM

[![Build Status](https://travis-ci.com/cos301-2019-se/Wildlife-Drones-and-Flight-Plans.svg?branch=master)](https://travis-ci.com/cos301-2019-se/Wildlife-Drones-and-Flight-Plans)

To aid ERP rangers in anti-poaching monitoring, a system is being developed to automatically create and optimise drone flight plans based on animal tracking information and reserve features. The project aims to increase the probability of drones covering key areas with endangered wildlife, while being random enough to prevent poachers identifying patrol routes. Rangers and drone pilots will be empowered with useful information through this dynamic application.

SRS:  [Software Requirements Specification](Documentation/Demo4/Drone_Flight_Plans_SRS_Demo4.pdf)
Coding Standards: [Coding Standards](/Documentation/Demo4/CodingStandards_Demo4.pdf)
Testing Policy Document:  [Testing Policy](/Documentation/Demo4/Testing_policy_document_Demo4.pdf)
User Manual: [User Manual](Documentation/Demo4/userManual_Demo4.pdf)
Project Management: [Trello Board](https://trello.com/b/GWit5JXi/capstone)
## Group members
![image](https://lh4.googleusercontent.com/sYkeIXRCdnU5gPxCxJOXc_I6xD2D_OMxqu9-eRN1WwPWEg5bAW_7SZ86O5U863usmgKeCJeqAwN-Ay0bMkrIqJnZelcAtLnpRAeiHbHnukEjuPdsahIV_iJfkl8ATyYRKPP_e5_N)

### Matthew Evans (16262949) [GitHub Profile](https://github.com/EvansMatthew97), [CV](Documentation/CVS/Matthew.pdf), [LinkedIN](https://www.linkedin.com/in/matthew-evans-011a78191/)
- __Interests__: Technology, astronomy, music, film, history
- __Skills__: JavaScript, TypeScript, Angular 2+, Ionic Framework, PHP, SQL, NodeJS, React, 64-bit assemble, Android Play Store deployment, web development, Adobe After Effects, Blender 3D, GIMP, web scraping
- __Previous work experience__:
  - Teaching Assistant for the CS Department, 2016
  - Teaching Assistant for IMY department, 2017
- __Attitudes__: curious, passionate, positive towards the future of technology

<hr />

### Andreas Louw (15048366) [GitHub Profile](https://github.com/ASLouw), [CV](Documentation/CVS/Andreas.pdf), [LinkedIN](https://www.linkedin.com/in/andreas-louw-182a36175)
- __Interests__:Programming,App development,Metalwork and Woodwork
- __Skills__: Java, Kotlin, PHP, C++, C#, JavaScript, assembly language(x64), App development, Web development, Database Management.
- __Previous work experience__: None
- __Attitudes__:Diligent,Honest,Positive and  I&#39;m a Friendly person.

<hr />

### Bryan Janse van Vuuren (16217498) [GitHub Profile](https://github.com/Viidas96), [CV](Documentation/CVS/Bryan.pdf), [LinkedIN](https://www.linkedin.com/in/bryan-janse-van-vuuren-451b8a191)
- __Interests__:Gaming,Programming,Mobile application development,Music
- __Skills__:Angular,Java,C#,JavaScript,Mobile App Devlopment,Database management and design,Web Devlopment
- __Previous work experience__:Mobile application design for Rage Software,Mobile game development.
- __Attitudes__: Devoted,Trusting,Positive,Punctual,Work-oriented,Willingness

<hr />

### Deane Roos (17057966) [GitHub Profile](https://github.com/BCybercell), [CV](Documentation/CVS/Deane.pdf), [LinkedIN](https://www.linkedin.com/in/deane-roos-a7a896143)
- __Interests__: Virtual reality, gaming and artificial intelligence
- __Skills__: Java, C++, Assembly x64, Python
- __Previous work experience__:  ETA operations
- __Attitudes__: Hardworking and dedicated

<hr />

### Reinhardt Eiselen (14043302) [GitHub Profile](https://github.com/EiselenR), [CV](Documentation/CVS/Reinhardt.pdf), [LinkedIN](https://www.linkedin.com/in/reinhardt-eiselen-0071a685)
- __Interests__: Music ,the outdoors and Technology
- __Skills__:  Java, C++ , JavaScript, Assembler (x86) and 64 bit,PHP,SQL,Android,Nodejs, Angular,Web development and App development.
- __Previous work experience__: no formal work experience 
- __Attitudes__: Always Up for a challenge and Curious about the unkown and I&#39;m a hardwoker.

## Project Structure
### /client
Mobile application/website code. Uses Ionic Framework.

### /server
Server code. Uses Nest.js.



## Envirnoment Configuration
Development configuration can be made in the .env file.

Example:
```
APP_NAME=Wildlife Drones
SECRET=secretKey
RESERVE_NAME=Kruger National Park
CELL_SIZE=500
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USERNAME=drbam301@gmail.com
MAIL_PASSWORD=your top secret password
OTP_PATTERN=[A-Z\d]{3}\-[A-Z\d]{3}
OTP_EXPIRES=120
OTP_ATTEMPTS=3
```

- APP_NAME - the name of the application that will be shown to the user in emails
- SECRET - a random string used as a private key for jwt tokens. This should be sufficiently long (e.g 256 or 512 characters) and random.
- RESERVE_NAME - the name of the reserve as per OpenStreetMaps
- CELL_SIZE - the size (width and height) of a cell in metres
- MAIL_HOST - the SMTP mail host (e.g. smtp.gmail.com)
- MAIL_PORT - the mail server port (465 is recommended as TLS is always enabled)
- MAIL_USERNAME - the email address used to log into the mail server
- MAIL_PASSWORD - the password used to log into the mail server
- OTP_PATTERN - A regular expression pattern to generate a random one-time-pin from
- OTP_EXPIRES - How long (in seconds) an OTP lasts. This is also the time the user has to wait before login attempts reset.
- OTP_ATTEMPTS - The number of login attempts the user gets before being locked out until the one time pin expires.
