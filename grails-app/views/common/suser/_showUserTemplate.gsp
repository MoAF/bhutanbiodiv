<%@page import="species.groups.UserGroup"%>
<%@page import="species.utils.ImageType"%>
<%@page import="species.participation.Observation"%>
<div class="signature clearfix thumbnail">
		<div class="figure user-icon pull-left" style="display:table;height:32px;">
			<a href="${uGroup.createLink( 'controller':'SUser', action:'show', id:userInstance.id, userGroup:userGroup, 'userGroupWebaddress':userGroupWebaddress)}"> <img
				src="${userInstance.profilePicture(ImageType.SMALL)}"
				class="small_profile_pic pull-left" title="${userInstance.name}" /></a>
		</div>
                <g:if test="${!hideDetails}">
		<div class="story" style="margin-left:35px">

		<a title="${userInstance.name}"
			href="${uGroup.createLink('controller':'SUser', action:'show', id:userInstance.id,  userGroup:userGroup, 'userGroupWebaddress':userGroupWebaddress)}">
			<span class="ellipsis" style="display:block;"> ${userInstance.name}
		</span>
			 </a>

			<div class="story-footer" style="position:static;">
				<div class="footer-item" title="Observations">
					<i class="icon-screenshot"></i>
					<obv:showNoOfObservationsOfUser model="['user':userInstance]"/>
				</div>

<%--				<div class="footer-item" title="Tags">--%>
<%--					<i class="icon-tags"></i>--%>
<%--					<obv:showNoOfTagsOfUser model="['userId':userInstance.id]" />--%>
<%--				</div>--%>
				
				<div class="footer-item" title="Identifications">
					<i class="icon-check"></i>
					<obv:showNoOfRecommendationsOfUser model="['user':userInstance]" />
				</div>
				<div class="footer-item" title="Comments">
					<i class="icon-comment"></i>
					${userInstance.fetchCommentCount()}
				</div>
				
			</div>

		</div>
                </g:if>
	</div>
