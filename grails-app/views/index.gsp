<%@page import="species.utils.Utils"%>
<html>
    <head>
        <meta name="layout" content="main" />
        <title>${grailsApplication.config.speciesPortal.app.siteName}</title>
        <r:require modules="core" />
	<script type="text/javascript">
		$(document).ready(function() {
		$('.accordion ul').kwicks({max:400, duration: 300, easing: 'easeOutQuad'});
		});
	</script>	
    </head>

    <body>
		<div class="about-us">
			<h2>Welcome to the Bhutan Biodiversity Portal </h2>
			<p>
			<img src="/images/openquote.gif" style="height:25px;"/><blockquote><em>
			The Government shall ensure that, in order to conserve the country’s natural resources and to prevent degradation of the ecosystem, a minimum of sixty percent of Bhutan’s total land shall be maintained under forest cover for all time.
			</em></blockquote>
			<img src="/images/endquote.gif" style="height:25px; float:right;"/>
			<br />
			<a style="text-align:right;"><strong> -- Article 5:3, The Constitution of the Kingdom of Bhutan </strong></a>
			<br /> 
			<a href="theportal"> read more &raquo; </a>
			</p>
		</div>
        	<div class="accordion">
			<ul>
				<li id="species"><a href="species/index">Species</a></li>
				<li id="observations"><a href="observation/index">Observations</a></li>
				<li id="maps"><a href="map">Maps</a></li>
				<li id="documents"><a href="document/list">Documents</a></li>
				<li id="groups"><a href="group/list">Groups</a></li>
				<li id="about-us"><a href="theportal">About Us</a></li>
			</ul>
		</div>     	
    </body>
</html>
