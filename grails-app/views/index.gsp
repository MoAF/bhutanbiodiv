<%@page import="species.utils.Utils"%>
<html>
    <head>
        <meta name="layout" content="main" />
        <title>${grailsApplication.config.speciesPortal.app.siteName}</title>
        <r:require modules="core" />
	<link type="image/x-icon" href="http://biodiversity.bt/images/favicon.ico" rel="shortcut icon"></link>
	<script type="text/javascript">
		$(document).ready(function() {
		$('.accordion ul').kwicks({max:400, duration: 300, easing: 'easeOutQuad'});
		});
	</script>	
    </head>

    <body>
		<div class="about-us">
			<h2 style="text-align:center;">Welcome to the Bhutan Biodiversity Portal </h2>
			
			<blockquote><em>
			<img src="/images/openquote.gif" class="quote" />
			<strong>The Government shall ensure that, in order to conserve the country’s natural resources and to prevent degradation of the ecosystem, a minimum of sixty percent of Bhutan’s total land shall be maintained under forest cover for all time.
			</strong><img src="/images/endquote.gif" class="quote" />
			</em></blockquote>
			<a style="text-align:right;"><strong> -- Article 5:3, The Constitution of the Kingdom of Bhutan </strong></a>
			<br /> 
			<br />
			<p>Bhutan is a small, landlocked country with an area of 38,394 km<sup>2</sup> situated on the southern slope of the Eastern Himalayas. Straddling the two major Indo-Malayan and Palearctic biogeographic realms, Bhutan is part of the Eastern Himalayan biodiversity hotspot and contains 23 Important Bird Areas (IBA), 8 ecoregions, a number of Important Plant Areas (IPA) and wetlands, including two Ramsar Sites. The diverse ecosystems and eco-floristic zones have made Bhutan home to a wide array of flora and fauna.</p>

			<a href="theportal"> read more &raquo; </a>
			<br />
		</div>
        	<div class="accordion">
			<ul>
				<li id="species"><a href="species/index">Species</a></li>
				<li id="observations"><a href="observation/index">Observations</a></li>
				<li id="maps"><a href="map">Maps</a></li>
				<li id="documents"><a href="document/list">Documents</a></li>
				<li id="groups"><a href="group/list">Groups</a></li>
				<li id="about-us"><a href="aboutus">About Us</a></li>
			</ul>
		</div>     	
    </body>
</html>
