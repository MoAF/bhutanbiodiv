import species.participation.Follow
import species.participation.ActivityFeed
import species.formatReader.SpreadsheetReader;
import species.*
import species.groups.SpeciesGroup

def migrate(){
	def activityFeedService = ctx.getBean("activityFeedService");
	//ActivityFeed.withTransaction(){
		ActivityFeed.listOrderById().each{ ActivityFeed af ->
			//println " starting $af "
			def domainObj = activityFeedService.getDomainObject(af.rootHolderType, af.rootHolderId)
			//if(! domainObj instanceof Map){
				Follow.addFollower(domainObj, af.author)
				println "added $af"
			//}
		}
	//}
}

//migrate()


def exportTest(){
        def sep = "|"
	println 'species_id' + sep + 'canonicalForm' + sep + 'bionomialForm' + sep + 'source'
	Species.list().each{ s ->
		def tCon = s.taxonConcept
		if(tCon.group && (tCon.group.id == 6)){
		   def sources = s.classifications().collect { it.name }
		   println s.id + sep + tCon.canonicalForm + sep + tCon.binomialForm + sep + sources
		}
	}
}
//exportTest()






def correctSpeGroup(){
	Species.withTransaction(){  
			SpreadsheetReader.readSpreadSheet("/home/strand/sandeep/Others.xlsx").get(0).each{ m ->
					def id = m.get("id")
							def speciesInstance = species.Species.get(id.toLong())
								
										println "id   "  + id
												if (speciesInstance) {
															def tCon = speciesInstance.taxonConcept
																		tCon.group = SpeciesGroup.findByName(m.get("sgroup").trim())
																					println "=========== " + tCon.group
																								tCon.save(flush: true)
																											println "after save"
																													}
																															}
																																}
																																}

correctSpeGroup()

def deleteSpecies(){
	def ids = []
		SpreadsheetReader.readSpreadSheet("/tmp/birdstodelete.xlsx").get(0).each{ m ->
				ids << m.get("id")
					}

						println "ids   "  + ids
							Species.withTransaction(){  
								ids.each{ id ->
									def speciesInstance = species.Species.get(id.toLong())
										if (speciesInstance) {
												def uGroups = speciesInstance.userGroups
														uGroups.each { ug ->
																	ug.removeFromSpecies(speciesInstance)
																				ug.save(flush:true)
																							println "removed from group" + ug
																									}	
																											speciesInstance.delete(flush: true)
																													println "after delete"
																														}
																															}
																																}
																																}




