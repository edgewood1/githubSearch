# githubSearch

This app searches the github api, using user keywords, and user search types (repos, commits, issues, topics, and users) 

To develop: npm run dev

To build: npm run build

See the app here: 

https://merry-parfait-883a1b.netlify.app/

Q & A

○ Highlight something in your project that you thought was especially interesting or significant to your overall implementation.

- I didn't realize that the objects being returned from the api woudl vary so much between types (commits, users, etc) and, at times, within each type.

○ Tell us about what you are most pleased or proud of with your implementation.

- Beyond searching by users, this app allows you to search by repo, commits, etc.  

○ Given more time, what would the next feature or improvement you would like to add to your project?

- The results cards display the data retrieved from the api.  With more time , I'd add labels, icons, etc to these cards and think about the best values to display on each. 
- I would update the logic use for displaying the card values (responseHandler.js).  The current logic can lead to errors if the data retrieved is not structured in a particular way.

