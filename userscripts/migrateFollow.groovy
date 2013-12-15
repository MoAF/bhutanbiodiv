import species.participation.Follow
import species.participation.ActivityFeed

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
	species.Species.list().each{ s ->
		def tCon = s.taxonConcept
		if(tCon.group && (tCon.group.id == 6)){
		   def sources = s.classifications().collect { it.name }
		   println s.id + sep + tCon.canonicalForm + sep + tCon.binomialForm + sep + sources
		}
	}
}
exportTest()

