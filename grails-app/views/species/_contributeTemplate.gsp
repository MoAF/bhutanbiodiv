<%@page import="species.utils.Utils"%>
<%
String supportEmail = "";
String domain = Utils.getDomain(request);
if(domain.equals(grailsApplication.config.wgp.domain)) {
	supportEmail = grailsApplication.config.speciesPortal.wgp.supportEmail;
} else if(domain.equals(grailsApplication.config.ibp.domain)) {
	supportEmail =  grailsApplication.config.speciesPortal.ibp.supportEmail;
}
%>
		<div class="">
				<div class="section">
				<p>We request you to contribute to the species pages of this portal to build rich and reliable information on the biodiversity of Bhutan.</p>

				<p>All information published on the Portal will be on public access and under the Creative Commons License of your choice.</p>

				<p>You can contribute to species pages in following ways:</p>

				<ol>
					<li>
						<p>Multiple Species in one spread sheet: Download the xlsx spreadsheet <a href="${createLinkTo(dir: '/../static/templates/spreadsheet/', file:'Multiple_species_template.xlsx' , base:grailsApplication.config.speciesPortal.resources.serverURL)}">here</a>, fill in as many relevant fields as possible in the multiple species descriptions in the spreadsheet, have a directory of images, zip the directory and send it to us <span
						                                                class="mailme">${supportEmail}</span> .</p>
													</li>
														<li>
															<p>You may also send any information in word document or Excel file or pictures in JPEG/PNG or any other, with correct caption and name of the contributor and associated information such as date, place (preferably with coordinates), etc.</p>
																</li>
																	<li>
																		<p><strong>On-line creation of species pages</strong>: We are still working on the facility of creating on-line species pages on the portal. Please let us know your interest and we will inform you once the feature is available. Please email <span
																		                                                class="mailme">${supportEmail}</span></p>
																									</li>
																									</ol>

																									<p><strong>Downloads</strong></p>

																									<ol>
																										<li>
																											<p><a href="${createLinkTo(dir: '/../static/templates/spreadsheet/', file:'Multiple_species_template.xlsx' , base:grailsApplication.config.speciesPortal.resources.serverURL)}">Multiple species template</a></p>
																												</li>
																												</ol>

																												<p>If you have any question please provide feedback and email us at <span class="mailme">${supportEmail}</span></p>

																												<p>&nbsp;</p>

				</div>
	
			</div>
	</div>

