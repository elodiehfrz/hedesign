/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

var masonry = null;
window.addEventListener('load', function() {
	if (window.Masonry) {
		masonry = new Masonry('[data-masonry]', {
			itemSelector: '.grid__col',
			columnWidth: '[data-masonry-size]',
		});
	}
});

window.addEventListener('hashchange', function(e) {
	var category = window.location.hash.replace('#', '');
	var selector = category ==='all' ? '[data-category]' : '[data-category="' + category + '"]';
	document.querySelectorAll('[data-category]').forEach(function(element) {
		element.style.display = 'none';
	})
	document.querySelectorAll(selector).forEach(function(element) {
		element.style.display = '';
	});

	if (masonry) {
		masonry.layout();
	}
})