# Recipe-project-with-angular
Through the course of Angular - the complete guide from Schwarzmüller I learned some more fundamentals of the new language. So far I added some kind of navigation with eventbinding and ngIf. The app is able to select a recipe to add new items to the shopping list with event and property binding. Later on the behaviors will get overwritten but for now that's a good start. 


![Shopping list](https://user-images.githubusercontent.com/90517309/192259429-e18f8454-3b7f-4958-bd44-ae87426618a8.png)
![Navigation - none recipe selected](https://user-images.githubusercontent.com/90517309/192259418-5cbdedae-ad8e-44e5-b037-9e4b40abc493.png)
![Navigation - recipe selected](https://user-images.githubusercontent.com/90517309/192259424-83846070-7056-455d-aa03-5a13288cc7c3.png)

--- 
With dropdown

In other branch called 'with dropdown' I added the logic for the dropdown in dropdown.directive in the shared file with directive and exported that class. With HostBinding binded to a class 'open' (because of usage from bootstrap) to a boolean. Then with HostListener waited for the click event to execute the 'toggleOpen' function that changes the boolean to the opposite. Like that the class 'open' gets added or removed from the element where I added (appDropdown) it to show the dropdown (recipes-detail.component.html and header html). Afterwards I refactored the code to hide the dropdown whenever a click happens also outside it the dropdown, not only on the arrow.

![header](https://user-images.githubusercontent.com/90517309/192964673-19358a01-10c5-4d36-8e2e-5edc74eedd05.png)
![recipe](https://user-images.githubusercontent.com/90517309/192964689-693ec36b-52ce-48c4-89e0-f4faa17d35da.png)

![1](https://user-images.githubusercontent.com/90517309/192965046-baa6153e-7ebd-4e8d-9300-6544fa2a462d.png)
![2](https://user-images.githubusercontent.com/90517309/192965061-9b92d2c5-ebc3-4298-85e2-eb40bbf4d4bf.png)
![3](https://user-images.githubusercontent.com/90517309/192965077-632d2d26-92f0-4608-ad8d-06b7a4a22355.png)
