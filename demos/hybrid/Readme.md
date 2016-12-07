## demos/hybrid

Live Link: http://www.claudegauthier.net/demos/HybridApp/

The purpose of this is app is to demonstrate the full power of ExtJS 6.2.0.

This app is a hybrid app, it will work on desktop and tablets (tablets with large resolutions) and will work with mobile phones (this is WIP, right now, there is a simple page)

The desktop app is WIP and I've got a lot of work to do, but the scaffolding is nice and the injection of modules is working for all menus on the left side.

The only real content is the 'Grid' link.

The Grid page has the following:
1.	grid
2.	form (available via the edit icon for each row)
3.	grid sorts by it's header
4.	filtering will be done using textfields in the header row (WIP)
5.	Double-Clicking a row invokes the Row Editing pluging
6.	You can press enter when typing data and it will update the row (when editing)
7.	In the form, the add button currently displays an alert
8.	the form does get some data from the row it was launched from (I don't have the full JSON for this yet...)
9.	the save form button will navigate back the grid (no data is saved at this point)
10. 	The participants column will require a special type of sort.. the sorting for this column is incorrect.


Once the desktop app is at a good stage, the mobile app will be next and much of how it will work will be based on the MobileDemo project.


## 12/04/2016 - demos/hybrid

Live Link: http://www.claudegauthier.net/demos/HybridApp/

-  Removed all menu items and have Home and Grid
-  CSS font-changes
-  Scrolling added to Form
-  Removed alert on Save

### To-do
-  Sassify the styles that I shoved in all.scss
-  write some services to make this a live demo
-  Ability to reset all data
-  get all widgets to correctly work
-  add some more fields


Note: More will come as I think about it, of course, design the mobile version, right now, it's nothing but a single panel with text.

#### added this
removed annoying outline from buttons
fixed a bug in grid, the day column wasn't rendering.

more css fixes, now the outline in grid cell's doesn't appear any longer when clicked.

flexing columns and forceFit the grid to help with resizing and allowing resizing to work correctly.

changes to colors of buttons in form, moved ID field, modified footer class

The fields which are meant to do filtering are injected practically manually, this has to change, I will dig up my ExtJS 5 filter fields plugin and make it work in 6.2
