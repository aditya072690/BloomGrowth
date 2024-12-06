jQuery(document).ready(function($) {
	/* Nav mobile dropdown functionality */
	$('.mobile_nav .mobile_menu_bar').click(function (e) {
    	setTimeout(function () {
      		$('body').toggleClass('nav-opened');
    	}, 100);
  	});

  	function setup_collapsible_submenus() {
		/*var parentOfDropdown = $('.et_mobile_menu .menu-item-has-children > a');*/
		var FirstLevel = $('.slide-in-menu-container .menu-item-has-children > a');
		FirstLevel.off('click').on('click touchstart', function() {
			$(this).attr('href', '#'); 
			$(this).toggleClass('reveal-items');
		});
	}
	       
	$(window).load(function() {
		setTimeout(function() {
			setup_collapsible_submenus();
		}, 700);
	});
	

	$('#slide-in-open').click(function(){
		$(this).toggleClass('open');
		$('.slide-in-menu-container').toggleClass('slide-in-menu');
		$('.mobile-slideout-menu').toggleClass('mobile-menu-open');
	});

	/* END */
	
	/* Replace event "Add to Calendar" text */
    $(".evo_sin_event_list .evo_metarow_ICS .evcal_evdata_cell p a").html(function () {
        return $(this).html().replace('Calendar', 'Add to calendar');
    });
	/* END */
	
	/* Limit characters in Blog breadcrumbs */
	$('.widget_breadcrumb_navxt .breadcrumbs .current-item').each(function (f) {
		var newstr = $(this).text().substring(0,30);
		$(this).text(newstr + '...');

	});
	/* END */
	
	/* Add an ID to the search field for the label, since Divi is ridiculous */
	$('input[type="text"].et_pb_s').attr('id', 's');
	/* END */
});


jQuery(window).on('resize', function(){
	$this = jQuery(this);
	
	if(jQuery('ul.et_mobile_menu li.divimegapro-4917')[0] || jQuery('.slide-in-menu-container ul.menu li.divimegapro-4917')[0]) {
		//add Solutions, remove Mega Menu
		jQuery('ul.et_mobile_menu li.divimegapro-4917').addClass('solutions-mega-menu-item');
		jQuery('ul.et_mobile_menu li.solutions-mega-menu-item').removeClass('divimegapro-4917');
		jQuery('.slide-in-menu-container ul.menu li.solutions-mega-menu-item').removeClass('divimegapro-4917');
	}

	if(jQuery('ul[id*=menu-main-menu].et-menu li.solutions-mega-menu-item')[0]) {
		//add Mega Menu, add Solutions
		jQuery('ul[id*=menu-main-menu].et-menu li.solutions-mega-menu-item').addClass('divimegapro-4917');
		jQuery('ul[id*=menu-main-menu].et-menu li.divimegapro-4917').removeClass('solutions-mega-menu-item');
	}
});

jQuery(document).on('ready ajaxComplete', function () {
    /* Replace blog pagination text */
    jQuery(".et_pb_ajax_pagination_container .pagination a, .archive .pagination a, .search .pagination a").html(function () {
        return jQuery(this).html().replace('«', '').replace('»', '').replace('Older Entries', 'Older Posts').replace('Next Entries', 'Newer Posts');
    });
	/* END */
});