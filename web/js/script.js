var Site={
	init:function(){
		this.tabs();
	},

	tabs: function(){
		
		var tabs= $('#secondary > .tabs');
		uls= tabs.find('> ul');
		tabHeadings= tabs.prev('#tabHeadings');
		//hide all content but 1st
		//uls.not(':first').hide();

		//listen for heading clicks
		tabHeadings
			.delegate('li', 'click', function(e){
				var li= $(this);
				var hash;

		li
			.siblings()
				.removeClass('selected')
				.end()
				.addClass('selected');

				//grab the hash of anchor
				hash=li.children('a').attr('href');

				//show corres sec
				uls.hide().filter(hash).fadeIn(500);

				e.preventDefault(); //stop default beghaviour of anchor tagn i.e. scrolling down
		});
	}
}

Site.init();