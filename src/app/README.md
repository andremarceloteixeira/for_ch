Frontend Developer Exercise 2.2  
 
Introduction  
The purpose of this exercise is for the developer to exhibit his familiarity with frontend 
technologies, programming patterns and to provide with a sample of what clean and reusable 
code means to the candidate. 
 
Please put your comment about the decisions you have made inline, and give a summary 
about the architectural choices that you considered. Please don’t use ES6. 
 
Exercise  
We will use Open Weather Data to create a single page application that presents a list of 5 
European cities (you can choose the ones you prefer). Your goal is to get the the current 
weather situation displaying the city name plus average temperature and the wind strength. 
Clicking on an item shows the forecast in the next hours. You can adjust the UI how you see 
fit for the best result, but sticking to a single page application is mandatory. We would prefer 
if you will delivery the code using BitBucket (private repo) but also a zip file is fine. 
 
Open Weather Data API 
To complete the proposed exercise two different kind of APIs are needed. 
 
For example to get the current weather data in London: 
 
http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca
9337e1e96b00e0 
 
More details here ?
http://openweathermap.org/current  
 
For example to get the 5 day forecast in London: 
 
http://api.openweathermap.org/data/2.5/forecast?q=London,uk&mode=json&appid=2de1434
94c0b295cca9337e1e96b00e0  
 
More details here ?
http://openweathermap.org/forecast5#call 
 
It is possible to find more information here ?
http://openweathermap.org/api 
 
 
UI/UX  
In Backbase we take pride that we have created a lean portal, with focus on UX. Your UI 
should reflect the same principles. Try creating something simple, user friendly and eye 
appealing. Feel free to use any UI resources you’d like to achieve that. For example you 
could use Twitter Bootstrap, or any other UI library.  
 
Architecture
Here there is no limitation. Design your application anyway you want. Focus on clean, 
reusable code. Focus on frontend best practices. Show us that you know how to produce 
high quality modern web applications. 
 
Libraries  
You can use any libraries you think are best but we would love to see your skills with 
AngularJS. 
 
Backend  
No Backend required. We should be able to run the exercise, just by opening your index.html 
file. 
 
Extra points  
Delivery the exercise with a readme file that explains what you have done. 
Adding a chart will be an extra point. 