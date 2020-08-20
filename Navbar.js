$ (document).ready (function () {
    insertNavbar();

    var page=location.pathname.replace('/'+contextPath+'/', '');
    page=page.replace('page/','');//replace子目錄
    page=page.replace('.','');//replace附檔名的點
	//console.log(page);
	if(page!=null && page.length>0) $('#'+page).addClass('active');//不在首頁
});

function insertNavbar(){
    var navber=$('<nav/>').addClass('navbar sticky-top navbar-expand-lg navbar-dark bg-primary')
	.append('<span class="navbar-brand mb-0 h1">Navbar</span>')
	.append(
		$('<button/>').addClass('navbar-toggler').attr('data-toggle','collapse').attr('data-target','#navbarSupportedContent')
		.append('<span class="navbar-toggler-icon"></span>')
	)
	.append(
		$('<div/>').addClass('collapse navbar-collapse').attr('id','navbarSupportedContent')
		.append(
			$('<ul/>').addClass('navbar-nav mr-auto')
			.append(
				$('<li/>').addClass('nav-item').attr('id','buttonshtml').append('<a class="nav-link" href="./buttons.html">Buttons</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','combinedhtml').append('<a class="nav-link" href="./combined.html">Combined items</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','formshtml').append('<a class="nav-link" href="./forms.html">Forms</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','tableshtml').append('<a class="nav-link" href="./tables.html">Tables</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','typographyhtml').append('<a class="nav-link" href="./typography.html">Typography</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','taghtml').append('<a class="nav-link" href="./tag.html">Tag</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','paginationhtml').append('<a class="nav-link" href="./pagination.html">Pagination</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','navigationhtml').append('<a class="nav-link" href="./navigation.html">Navigation</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','headerhtml').append('<a class="nav-link" href="./header.html">Header</a>')
			)
			// .append(
			// 	$('<li/>').addClass('nav-item').attr('id','layouthtml').append('<a class="nav-link" href="./layout.html">Layout</a>')
			// )
			.append(
				$('<li/>').addClass('nav-item').attr('id','tabshtml').append('<a class="nav-link" href="./tabs.html">Tabs</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','dialogshtml').append('<a class="nav-link" href="./dialogs.html">Dialogs</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','loadinghtml').append('<a class="nav-link" href="./loading.html">Loading</a>')
			)
			.append(
				$('<li/>').addClass('nav-item').attr('id','spacinghtml').append('<a class="nav-link" href="./spacing.html">Spacing</a>')
			)
		)
    );
    $('body').prepend(navber);
}