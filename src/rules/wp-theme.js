function missingSelectorTest(parser, reporter, label, selectors, rule) {
	parser.addListener('startrule', function(event) {
		event.selectors.forEach(function(e) {
			var i = selectors.indexOf(e.text);
			if (i > -1) {
					selectors[i] = undefined;
			}
		});
	});

	parser.addListener('endstylesheet', function(event) {
		selectors.filter(function(e) {return e === 0 || e})
			.forEach(function(e) {
				reporter.report(
					label + ' | Missing selector: ' + e, 0,0, rule);
			});
	});
}


CSSLint.addRule({
	id:"wp-wysiwyg-styles",
	name: "Wordpress WYSIWYG Editor Styles",
	desc: "Selectors required for WP WYSIWYG editor",
	url: "",
	browsers: "All",
	init: function(parser, reporter) {
		var rule = this;

	missingSelectorTest(parser, reporter,
		'WP WYSIWYG Styles',
		[
			'.entry-content img',
			'.alignleft',
			'img.alignleft',
			'.alignright',
			'img.alignright',
			'.aligncenter',
			'img.aligncenter',
			'.alignnone',
			'img.alignnone',
			'.wp-caption',
			'.wp-caption img',
			'.wp-caption p.wp-caption-text',
			'blockquote.left'
		],
		rule);
	}
});

CSSLint.addRule({
	id: "wp-widget-styles",
	name: "Wordpress Widget Styles",
	desc: "Selectors required for builtin WP Widgets",
	url: "",
	browsers: "All",
	init: function(parser, reporter) {
		var rule = this;

	missingSelectorTest(parser, reporter,
		'WP WYSIWYG Styles',
		[
			'.widget',
			'.widget_links', //links
			'.widget_links ul',
			'.widget_links ul li',
			'.widget_links ul li a',
			'.widget_meta', //meta
			'.widget_meta ul',
			'.widget_meta ul li',
			'.widget_meta ul li a',
			'.widget_pages', //pages
			'.widget_pages ul',
			'.widget_pages ul li',
			'.widget_pages ul li a',
			'.widget_recent_entries', //recent posts
			'.widget_recent_entries ul',
			'.widget_recent_entries ul li',
			'.widget_recent entries ul li a',
			'.widget_archive', //archives
			'.widget_archive ul',
			'.widget_archive ul li',
			'.widget_archive ul li a',
			'.widget_archive select',
			'.widget_archive option',
			'.widget_links', //tag cloud
			'.widget_links li:after',
			'.widget_links li:before',
			'.widget_tag_cloud',
			'.widget_tag_cloud a',
			'.widget_tag_cloud a:after',
			'.widget_tag_cloud a:before',
			'.widget_calendar', //calendar
			'#calendar_wrap',
			'#calendar_wrap th',
			'#calendar_wrap td',
			'#wp-calendar tr td',
			'#wp-calendar caption',
			'#wp-calendar a',
			'#wp-calendar #today',
			'#wp-calendar #prev',
			'#wp-calendar #next',
			'#wp-calendar #next a',
			'#wp-calendar #prev a',
			'.widget_categories', //category
			'.widget_categories ul',
			'.widget_categories ul li',
			'.widget_categories ul ul.children',
			'.widget_categories a',
			'.widget_categories select',
			'.widget_categories select#cat',
			'.widget_categories select.postform',
			'.widget_categories option',
			'.widget_categories .level-0',
			'.widget_categories .level-1',
			'.widget_categories .level-2',
			'.widget_categories .level-3',
			'.recentcomments', //recent comments
			'#recentcomments',
			'#recentcomments li',
			'#recentcomments li a',
			'.widget_recent_comments',
			'#searchform', //search
			'.widget_search',
			'.screen-reader-text',
			'.textwidget', //text
			'widget_text',
			'textwidget p'
		],
		rule);
	}
});


CSSLint.addRule({
	id: "wp-comment-styles",
	name: "Wordpress Comment Styles",
	desc: "Selectors required for WP comments",
	url: "",
	browsers: "All",
	init: function(parser, reporter) {
		var rule = this;

		missingSelectorTest(parser, reporter,
			'WP Comment Styles',
			[
				'.commentlist .reply',
				'.commentlist .reply a',
				'.commentlist .alt',
				'.commentlist .odd',
				'.commentlist .even',
				'.commentlist .thread-alt',
				'.commentlist .thread-odd',
				'.commentlist .thread-even',
				'.commentlist li ul.children .alt',
				'.commentlist li ul.children .odd',
				'.commentlist li ul.children .even',
				'.commentlist .vcard',
				'.commentlist .vcard cite.fn',
				'.commentlist .vcard span.says',
				'.commentlist .vcard img.photo',
				'.commentlist .vcard img.avatar',
				'.commentlist .vcard cite.fn a.url',
				'.commentlist .comment-meta',
				'.commentlist .comment-meta a',
				'.commentlist .commentmetadata',
				'.commentlist .commentmetadata a',
				'.commentlist .parent',
				'.commentlist .comment',
				'.commentlist .children',
				'.commentlist .pingback',
				'.commentlist .bypostauthor',
				'.commentlist .comment-author',
				'.commentlist .comment-author-admin',
				'.commentlist',
				'.commentlist li',
				'.commentlist li p',
				'.commentlist li p',
				'.commentlist li ul',
				'.commentlist li ul.children li',
				'.commentlist li ul.children li.alt',
				'.commentlist li ul.children li.byuser',
				'.commentlist li ul.children li.comment',
				'.commentlist li ul.children li.depth-1',
				'.commentlist li ul.children li.depth-2',
				'.commentlist li ul.children li.depth-3',
				'.commentlist li ul.children li.depth-4',
				'.commentlist li ul.children li.depth-5',
				'.commentlist li ul.children li.depth-6',
				'.commentlist li ul.children li.depth-7',
				'.commentlist li ul.children li.depth-8',
				'.commentlist li ul.children li.depth-9',
				'.commentlist li ul.children li.depth-10',
				'.commentlist li ul.children li.bypostauthor',
				'.commentlist li ul.children li.comment-author-admin',
				'#cancel-comment-reply',
				'#cancel-comment-reply a',
			],
			rule);
	}
});


CSSLint.addRule({
	id: "wp-misc-styles", 
	name: "Wordpress Misc Styles",
	desc: "Other wordpress styles",
	url: "",
	browsers: "All",
	init: function(parser, reporter) {
		var rule = this;

		missingSelectorTest(parser, reporter,
			'WP Misc Styles',
			[
				'li.categories', //category links
				'li.cat-item',
				'li.current-cat',
				'li.current-cat-parent',
				'ul.children',
				'.linkcat', //blogroll
				'.blogroll',
				'.more-link' //read-more links
			],
			rule);
	}
});

CSSLint.addRule({
	id: "wp-page-listings", 
	name: "Wordpress Page Listings Styles",
	desc: "Optional selectors required for WP page listings",
	url: "",
	browsers: "All",
	init: function(parser, reporter) {
		var rule = this;

		missingSelectorTest(parser, reporter,
			'WP Page Listings Styles',
			[
				'.pagenav',          /* outermost list item */
				'.page_item',             /* any page item */
				'.current_page_item',     /* current page */
				'.current_page_parent',  /* parent of current page */
				'.current_page_ancestor', /* any ancestor of current page */
				'.pagenav ul',
				'.pagenav .current_page_item ul',
				'.pagenav .current_page_ancestor ul',
				'.pagenav .current_page_ancestor .current_page_item ul',
				'.pagenav .current_page_ancestor .current_page_ancestor ul',
				'.pagenav .current_page_ancestor .current_page_ancestor .current_page_item ul',
				'.pagenav .current_page_ancestor .current_page_ancestor .current_page_ancestor ul',

				'.pagenav  ul ul',
				'.pagenav .current_page_item ul ul',
				'.pagenav .current_page_ancestor ul ul',
				'.pagenav .current_page_ancestor .current_page_item ul ul',
				'.pagenav .current_page_ancestor .current_page_ancestor ul ul',
				'.pagenav .current_page_ancestor .current_page_ancestor .current_page_item ul ul', 
				'.pagenav .current_page_ancestor .current_page_ancestor .current_page_ancestor ul ul'
			],
			rule);
	}
});

CSSLint.addRule({
	id: "wp-body-class", 
	name: "Wordpress body_class() styles",
	desc: "Optional selectors generated by body_class()",
	url: "",
	browsers: "All",
	init: function(parser, reporter) {
		var rule = this;

		missingSelectorTest(parser, reporter,
			'WP body_class() Styles',
			[
				'.rtl',
				'.home',
				'.blog',
				'.archive',
				'.date',
				'.search',
				'.paged',
				'.attachment', 
				'.error404',
				'.author',
				'.category',
				'.tag',
				'.page-parent',
				'.search-results',
				'.search-no-results',
				'.logged-in',
			],
			rule);
	}
});

CSSLint.addRule({
	id: "wp-post-class", 
	name: "Wordpress post_class() styles",
	desc: "Optional selectors generated by post_class()",
	url: "",
	browsers: "All",
	init: function(parser, reporter) {
		var rule = this;

		missingSelectorTest(parser, reporter,
			'WP post_class() Styles',
			[
				'.post-id',
				'.post',
				'.page',
				'.attachment',
				'.sticky',
				'.category-misc',
				'.category-example',
				'.tag-news',
				'.tag-wordpress',
				'.tag-markup'
			],
			rule);
	}
});