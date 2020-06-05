# Launching the App
1. Clone this repository
2. run `npm install`
3. Open a terminal in the same folder where the repo exists, and type `npm start`

# Running Tests
1. In the terminal, type `npm test` and hit enter
2. If prompted, press 'a' and hit enter again

# Testing Strategy
Given enough time, I would have followed non-regression testing by testing components and HTML elements as they were added to make sure exisiting code would not be affected negatively by new code. 

# Using the App
## Columns
By default there will always be one column at the start. This is for demonstration purposes only (no need to add a new column to see how one looks like).

### Adding Columns
To add a new column, click on the 'Add Column' button

### Deleting Columns
To delete a column, click on the 'Delete Column' button in the desired column

### Modifying A Column's Name
To edit a column's namme, click on the 'Edit Column Name' button. Alternatively, you can click on the name directly to edit it.

## Cards
### Adding Cards
1. Inside your desired column, click on the 'Add Card' button to create a new card
2. When the new card appears, type immediately to enter its title
    - Clicking or tabbing after clicking 'Add Card' will cause an alert to appear, informing you that a card was not created

### Deleting Cards
Click on the 'Delete' button inside the card to delete it

### Editing Card Description
1. Click on the gray box
2. Start typing

# Structure
- components
    - card.js
    - column.js
- tests
    - index-html.test.js
- .eslintrc.js
- .gitignore
- index.html
- package-lock.json
- package.json
- README.md
- scripts.js
- styles.css