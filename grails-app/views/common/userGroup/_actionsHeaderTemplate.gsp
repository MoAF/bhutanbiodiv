<div class="pull-right" style="position: absolute;top:0px;right: 0px;">
	<g:if test="${canEditUserGroup}">
		<uGroup:inviteExpert model="['userGroupInstance':userGroupInstance, 'isExpertOrFounder':isExpertOrFounder, 'experts_autofillUsersId':experts_autofillUsersId]"/>
					
		<a id="inviteMembers" class="btn btn-primary" href="#inviteMembersDialog" role="button" data-toggle="modal"><i
			class="icon-envelope"></i> <g:message code="userGroup.members.label"
				default="Invite Friends" /> </a>
		<div class="modal hide fade" id="inviteMembersDialog" tabindex='-1'
			role="dialog" aria-labelledby="inviteMembersModalLabel"
			aria-hidden="true">
			<div class="modal-header">
			    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h3 id="inviteMembersModalLabel">Invite friends</h3>
			</div>
			<div class="modal-body">
				<p>Send an invitation to your friends to join and contribute in this group</p>
				<div>
					<div id="invite_memberMsg"></div>
					<form id="inviteMembersForm" method="post"
						style="background-color: #F2F2F2;">
						<sUser:selectUsers model="['id':members_autofillUsersId]" />
						<input type="hidden" name="memberUserIds" id="memberUserIds" />
						<textarea id="inviteMemberMsg" class="comment-textbox" placeholder="Please write a note to invite member."></textarea>
					</form>
				</div>
			</div>
			<div class="modal-footer">
				<a href="#" class="btn" data-dismiss="modal" aria-hidden="true">Close</a>
				<a href="#" id="inviteMemberButton" class="btn btn-primary">Invite</a>
			</div>
		</div>
		
		
	</g:if>
	<uGroup:joinLeaveGroupTemplate model="['showLeave':false, 'showJoin':true, 'userGroupInstance':userGroupInstance]" />
	<div class="modal hide fade in" id="leaveUsModalDialog" tabindex="-1" role="dialog" aria-labelledby="leaveUsModalDialogLabel" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
			<h3 id="leaveUsModalDialogLabel">Do you want to leave this group???</h3>
		</div>
		<div class="modal-body">
			<p>We would like to know your feedback and any ideas on making
				this group a more interesting and a happening place. We are thankful
				for your wonderful contribution to this group and would like to hear
				from you soon.</p>
		</div>
		<div class="modal-footer">
			<a href="#" class="btn" data-dismiss="modal">Close</a> <a href="#"
				id="leave" class="btn btn-primary"
				data-group-id="${userGroupInstance.id}">Leave</a>
		</div>
	</div>
</div>
<g:javascript>
//IMP:Header is loaded in drupal pages as well. Any code in this block is not run when loaded by ajax
	//So please don't put any code here. Put it in init_header function in membership.js
</g:javascript>
