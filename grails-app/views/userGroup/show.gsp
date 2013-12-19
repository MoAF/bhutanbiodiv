<%@page import="org.springframework.security.acls.domain.BasePermission"%>
<%@page import="species.utils.ImageType"%>
<%@page import="species.utils.Utils"%>
<%@ page import="species.groups.UserGroup"%>
<html>
<head>
<g:set var="title" value="${userGroupInstance.name}"/>
<g:render template="/common/titleTemplate" model="['title':title]"/>

<r:require modules="userGroups_show,userGroups_list,comment" />
<style>
.comment-textbox {
	width: 100%;
}
.homepage-content .value.date {
	display:none;
}
</style>
</head>
<body>
	<div class="homepage-content" style="margin-left:20px;">
	</div>
	<g:javascript>
		$(document).ready(function() {
			window.params.tagsLink = "${g.createLink(action: 'tags')}";
		});
	</g:javascript>
	
	<r:script>
		$(document).ready(function(){
                	var url = "${userGroupInstance.homePage ?: uGroup.createLink(mapping:'userGroup', controller:'userGroup', action:'about', userGroup:userGroupInstance)}";
			$.get(url, function(data) {
			    $('.homepage-content').html($(data).find('.bodymarker'));

                            loadUserGroupLocation("${userGroupInstance.ne_latitude}","${userGroupInstance.ne_longitude}","${userGroupInstance.sw_latitude}","${userGroupInstance.sw_longitude}");
			});
		});
	</r:script>
</body>
</html>
