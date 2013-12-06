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
			<p>Natural diversity in ecosystems provides many benefits to human life. And yet biological diversity, or biodiversity, faces threats in many places. Chevron recognizes the importance of conserving biodiversity. In all our operations, we strive to avoid or reduce the potential for significant damage to sensitive species, habitats or ecosystems. <br /> 
			<a href="theportal"> read more &raquo; </a>
			</p>
		</div>
        	<div class="accordion">
			<ul>
				<li id="species"><a href="species/index">Species</a></li>
				<li id="observations"><a href="observation/index">Observations</a></li>
				<li id="maps"><a href="maps">Maps</a></li>
				<li id="documents"><a href="document/list">Documents</a></li>
				<li id="groups"><a href="group/list">Groups</a></li>
				<li id="about-us"><a href="theportal">About Us</a></li>
			</ul>
		</div>     	
    </body>
</html>
