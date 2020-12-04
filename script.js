
$(document).ready(function () {
	$(document).on('mouseenter', '#blog-section', function () {
			$(this).find("#blog-section_image").show();
	}).on('mouseleave', '#blog-section', function () {
			$(this).find("#blog-section_image").hide();
	});
});

