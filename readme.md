# ExtJS 6.2.0 GPL Demos

-	I'm using Sencha Cmd 6.2.1.29 for building these demo apps
-	The projects under located under the demos directory and are using the ExtJS 6.2.0 GPL framework

Note: Currently there are only 2 projects within this repo 

-  demos/mobiledemo - http://www.claudegauthier.net/demos/MobileDemo/
-  demos/hybrid     - http://www.claudegauthier.net/demos/Hybrid/

## demos/mobiledemo

Live Link: http://www.claudegauthier.net/demos/MobileDemo/

The purpose of this app is to demonstrate how to properly set a mobile application so that it can navigate with a combination of static and dymamic pages.

- Static pages are pages already loaded in Main.js (card layout)
- Dynamic pages will be created on-the-fly.

Each of these pages are based from an app-base class which provides a scaffolding allowing various parameters to be set such as:
-	personalized toolbar menu (each page has a potential for their unique configuration)
-	navigation (static and dynamic) (work in progress)
-	page type (static / dynamic) (currently only static, will soon change)
-	other configs are added to help with navigation and page construction and behavior logic

All of this is work in progress at the moment..

### What's done

-	fake login
-	home page scaffolding
-	context menu
-	return home
-	logout
-   dynamic pages (basic for now, to demonstrate navigation)
-	navigation going forward and backward is now working across a mix of static and dynamic pages
-	context menu items are visible/hidden via a menuCfg object and a setVisibleItems method in the Menu.js class

### To do

-	have some of these pages load content via an ajax call
-	have parameters involving adding callback to back button for extra code cleanup
-	reuse some of the pages like a search which can be chained dynamically
-	create a logo for the home page (minor detail)
-	create an about page and add it to the context menu.
-	enhance the layout and formatting, currently based on google's material design from ExtJS 6.2 theme
-	set entitlements based on login
-	create a system where each page/widget can subscribe on how they can refresh their data once they have been loaded
	pages which are created dynamically always have the latest data, but they may require polling or a refresh button, or the use of 'pull-down' to force a refresh
	pages which are static may have the same need
	when working with iPhone/Android, push notification can also lead to new data made available.
-	create a log page with steps and errors which can be viewed in the app and can be shown to those with developer entitlement	

### Later down the road
-	Use this base code to create an app (iPhone, Android)

This list is far from complete, more ideas will come to me as I go along.

#### Testing this app
 Obviously, this is a mobile application, so, it is best to test it with a mobile phone, however, you can use Chrome in developer/debugger mode and change your view to a mobile phone, which is what I mostly do for testing this app at this current stage of development.
 

## demos/mobiledemo

Live Link: http://www.claudegauthier.net/demos/Hybrid/

The purpose of this is app is to demonstrate the full power of ExtJS 6.2.0.

This app is a hybrid app, it will work on desktop and tablets (tablets with large resolutions) and will work with mobile phones (this is WIP, right now, there is a simple page)

The desktop app is WIP and I've got a lot of work to do, but the scaffolding is nice and the injection of modules is working for all menus on the left side.

The only real content is the 'Presentations' link.

The Presentations page has the following:
1.	grid
2.	form (available via the gear icon for each row)
3.	grid sorts by it's header
4.	filtering will be done using textfields in the header row (WIP)
5.	Double-Clicking a row invokes the Row Editing pluging
6.	You can press enter when typing data and it will update the row (when editing)
7.	In the form, the add button currently displays an alert
8.	the form does get some data from the row it was launched from (I don't have the full JSON for this yet...)
9.	the save presentation button will display an alert and bring back the grid (no data is saved at this point)
10. Faculty will require a special type of sort.. the sorting for this column is incorrect.


Once the desktop app is at a good stage, the mobile app will be next and much of how it will work will be based on the MobileDemo project.


