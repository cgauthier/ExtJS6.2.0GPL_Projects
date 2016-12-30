## demos/headerfields

Live Link: http://www.claudegauthier.net/demos/HeaderFields/

The purpose of this app is to develop a stable and flexible feature to inject widgets into column headers (ExtJS 6.2.x Classic)

Historically speaking, ExtJS has only provided the ability to inject widgets into columns starting with ExtJS 4.2.0.

I created a feature for ExtJS 4.0.7 several years ago, which injected form fields into headers.

HeaderFields was the name of the feature.

It's been through several iterations and was adapted for various versions of ExtJS including ExtJS 5.1.1.

Since ExtJS 4.2.0, to inject form fields into ExtJS, the config would look like the following code snippet:

```
{
	xtype: 'column',
	dataIndex: 'some_field',
	items: [{
		xtype: 'textfield
	}],
	layout: {
		type: 'vbox',
		align: 'stretch
	}
}

```

So, as you can see above, this looks like a nice and easy way to do it.

But it's not always worked correctly, the layout wasn't always supported and quite frankly, it's a pain to deal with this.

The headerFilters feature I wrote preceeds this the support of items in columns by Sencha with ExtJS.

But I kept it alive and well.

And I've upgraded it to work with ExtJS 6.2.0.

The core API and feature is working.

However, it's based on the old code I wrote.

So, in this project, I will evolve my code so that it uses the items/layout instead of me injecting directly into the DOM.

### Initial State

I have 2 grids up and running in the demo.

The first grid is using the updated HeaderFields feature from previous versions.  I need to get the toolbar up and running so that we can test various API.

The second grid at this point is only fields injected using items/layout in columns.  In ExtJS 6.2.0. This seems to work well.  My plans are to create a new version of HeaderFields which inject the items and provide an API to control them.

Note: I noticed a glitch in layout.  The 2 grids are in a tab panel layout.  Somehow, the tabbar doesn't initialize correctly.  Not sure why, no errors are thrown, but this seems a layout issue.  I may have to try this with a newer version of ExtJS to see if this is a bug with version 6.2.0.







