import org.apache.log4j.Priority

appName = grails.util.Metadata.current.getApplicationName()
userHome = System.getProperty('user.home')

grails.mail.default.from="notification@biodiversity.bt"
emailConfirmation.from="notification@biodiversity.bt"
grails.plugins.springsecurity.ui.notification.emailFrom = 'notification@biodiversity.bt'
grails.plugins.springsecurity.ui.notification.emailReplyTo = "kxt5258@gmail.com";
grails.plugins.springsecurity.ui.newuser.emailFrom = 'notification@biodiversity.bt'
grails.plugins.springsecurity.ui.userdeleted.emailFrom = 'notification@biodiversity.bt'
grails.plugins.springsecurity.ui.forgotPassword.emailFrom = 'notification@biodiversity.bt'

speciesPortal {
    app{
        siteName = "Bhutan Biodiversity Portal <i><sup>alpha</sup></i>"
        siteName2 = "Bhutan Biodiversity Portal ALPHA"
        siteCode = "${appName}"

        twitterUrl = "https://twitter.com/bhutanbiodiversity"
        facebookUrl = "https://www.facebook.com/pages/Bhutan-Biodiversity-Portal"
        feedbackFormUrl = "${grails.serverURL}/feedback_form"

        logo = "images/demo.png"
        favicon = "images/favicon.ico"
        siteDescription = "Welcome to the Bhutan Biodiversity Portal (BBP) - A repository of information designed to harness and disseminate collective intelligence on the biodiversity of Bhutan."
        notifiers_bcc = ["kxt5258@gmail.com", "moafbhutan@gmail.com", "cd.drukpa@gmail.com"]
    }

	app.rootDir = "${userHome}/git/bhutanbiodiv/app-conf"
	data.rootDir = "${app.rootDir}/data"
	download.rootDir = "${data.rootDir}/datarep/downloads"

	observations {
		rootDir = "${app.rootDir}/observations"
		observationDownloadDir = "${download.rootDir}/observations"
		serverURL = "http://bhutanbiodiversity.localhost.org/${appName}/observations"
		filePicker.key = 'ASme8oTdcTSqSi3cTFIWkz'
	}

	species {
		speciesDownloadDir = "${download.rootDir}/species"
	}

	nameSearch {
		serverURL = "http://localhost:8081/solr/names"
		indexStore = "${app.rootDir}/data/names"
	}
	
	resources {
		rootDir = "${app.rootDir}/simg"
		serverURL = "http://bhutanbiodiversity.localhost.org/${appName}/simg"
	}

	userGroups {
		rootDir = "${app.rootDir}/userGroups"
		serverURL = "http://bhutanbiodiversity.localhost.org/${appName}/userGroups"
		serverURL = "http://localhost/${appName}/userGroups"
		logo {
			MAX_IMAGE_SIZE = 51200
		}
	}

	users {
		rootDir = "${app.rootDir}/users"
		serverURL = "http://localhost/${appName}/users"
	}
	
	checklist{
		rootDir = "${app.rootDir}/checklist"
		serverURL = "http://localhost/${appName}/checklist"
		checklistDownloadDir = "${download.rootDir}/checklist"
	}

	content{
		rootDir = "${app.rootDir}/content"
		serverURL = "http://localhost/${appName}/content"
	}

	search {
		serverURL = "http://localhost:8081/solr"
	}
}
speciesPortal.validCrossDomainOrigins = [
	"localhost",
	"bhutanbiodiversity.localhost.org",
	"biodiversity.bt",
	"bhutanbiodiversity.bt"
]

//jpegOptimProg = "/usr/sbin/jpegoptim";

//log4j
def log4jConsoleLogLevel = Priority.WARN
def log4jAppFileLogLevel = Priority.DEBUG
def logFile = "${userHome}/logs/bbp-stacktrace.log".toString() 
environments {
	development {
		grails.serverURL = "http://bhutanbiodiversity.localhost.org/${appName}"
		speciesPortal {
			search.serverURL = "http://localhost:8090/solr"
			names.parser.serverURL = "saturn.strandls.com"
			wgp {
				facebook {
					appId= "385215858271364"
					secret= "1c6bc3dc373abb08d2b7f9f913f09785"
				}
				supportEmail = "support(at)biodiversity(dot)bt"
			}
			ibp {
				facebook {
					appId= "385215858271364"
					secret= "1c6bc3dc373abb08d2b7f9f913f09785"
				}
				supportEmail = "support(at)biodiversity(dot)bt"
			}
		}
		google.analytics.enabled = false
		grails.resources.debug = false
		
		grails {
			mail {
			 host = "smtp.gmail.com"
			 port = 465
			 username = "kinleygrails@gmail.com"
			 password = "Fl0w3rs123"
			 props = ["mail.smtp.auth":"true", 					   
			          "mail.smtp.socketFactory.port":"465",
			          "mail.smtp.socketFactory.class":"javax.net.ssl.SSLSocketFactory",
			          "mail.smtp.socketFactory.fallback":"false"]
			}
		}

        	ibp.domain='bhutanbiodiversity.localhost.org'
       		wgp.domain='thewesternghats.bhutanbiodiversity.localhost.org'
		//grails.resources.debug=true
		grails.resources.mappers.hashandcache.excludes = ['**']
		//grails.resources.flatten = false
		grails.resources.mappers.yuijsminify.disable=true

                ckeditor {
                    upload {
              		    basedir = "/newsletters/"
                	    image.browser = true
        	            image.upload = true    
	                    image.allowed = ['jpg', 'gif', 'jpeg', 'png']
        		    image.denied = []
                    }
		}
		
		//log4j logger config
       		log4jConsoleLogLevel = Priority.DEBUG
       		log4jAppFileLogLevel = Priority.DEBUG
	}
	production {
		grails.serverURL = "http://biodiversity.bt/${appName}"
		speciesPortal {
			search.serverURL = "http://localhost:8080/solr"
			names.parser.serverURL = "127.0.0.1"
			ibp {
				facebook {
					appId= "385215858271364"
					secret= "1c6bc3dc373abb08d2b7f9f913f09785"
				}
				supportEmail = "support(at)bhutanbiodiversity(dot)org"
			}
		}
		google.analytics.enabled = false

		
		grails {
			mail {
				 host = "127.0.0.1"
				 port = 25
			}
		}

        	ibp.domain='biodiversity.bt'
       		wgp.domain='wgp.biodiversity.bt'
		//grails.resources.debug=true
		grails.resources.mappers.hashandcache.excludes = ['**']
		//grails.resources.flatten = false
		grails.resources.mappers.yuijsminify.disable=true
	}


	pamba {
		grails.serverURL = "http://biodiversity.bt/${appName}"
		jpegOptimProg = "/usr/sbin/jpegoptim"
		
		speciesPortal {
			app.rootDir = "/data/bbp/species"
			data.rootDir = "${app.rootDir}/data"
			search.serverURL = "http://localhost:8080/solr"
			names.parser.serverURL = "localhost"
			
			resources {
				rootDir = "${app.rootDir}/simg"
				serverURL = "http://biodiversity.bt/${appName}/simg"
			}
			nameSearch.indexStore = "${app.rootDir}/data/names"
			observations {
				rootDir = "${app.rootDir}/observations"
				serverURL = "http://biodiversity.bt/${appName}/observations"
			}
			userGroups {
				rootDir = "${app.rootDir}/userGroups"
				serverURL = "http://biodiversity.bt/${appName}/userGroups"
			}
			users {
				rootDir = "${app.rootDir}/users"
				serverURL = "http://biodiversity.bt/${appName}/users"
			}

			content{
				rootDir = "${app.rootDir}/content"
				serverURL = "http://biodiversity.bt/${appName}/content"
			}	

			grails {
				mail {
					 host = "127.0.0.1"
					 port = 25
				}
			}
			ibp {
				facebook {
					appId= "385215858271364"
					secret= "1c6bc3dc373abb08d2b7f9f913f09785"
				}
				supportEmail = "support(at)biodiversity(dot)bt"
			}
		}
		
        	ibp.domain='biodiversity.bt'
        	wgp.domain='westernbiodiversity.bt'
		
		grails.plugins.springsecurity.successHandler.defaultTargetUrl = "/"
		grails.plugins.springsecurity.logout.afterLogoutUrl = '/'

                ckeditor {
                	upload {
        	            baseurl = "/newsletters"
	                    basedir = "/data/bbp/species/newsletters/"
                	    image.browser = true
        	            image.upload = true    
	                    image.allowed = ['jpg', 'gif', 'jpeg', 'png']
                	    image.denied = []
                	}
		}
		logFile = "/data/bbp/logs/bbp-stacktrace.log".toString()	
	}
}


//log4j configuration
log4j = {
	error  	'org.codehaus.groovy.grails.web.pages', //  GSP
            'org.codehaus.groovy.grails.web.sitemesh', //  layouts
            'org.codehaus.groovy.grails.web.mapping.filter', // URL mapping
            'org.codehaus.groovy.grails.web.mapping', // URL mapping
            'org.codehaus.groovy.grails.commons', // core / classloading
            'org.codehaus.groovy.grails.plugins', // plugins
            'org.codehaus.groovy.grails.orm.hibernate', // hibernate integration
            'org.hibernate',
            'net.sf.ehcache.hibernate',
            'org.springframework.security',
            'org.codehaus.groovy.grails.web.servlet',  //  controllers
            'grails.plugin',
            'org.springframework.security.web',
            'grails.app.tagLib.org.grails.plugin.resource'

	warn   'org.mortbay.log'

	debug	'species',
		'speciespage',
		'grails.app'
    	
	debug    'species.auth'	
	debug	'org.openid4java'

	appenders {
		console name:'stdout', layout:pattern(conversionPattern: '%d [%t] %-5p %c - %m%n'), threshold: log4jConsoleLogLevel
		rollingFile name: "bbplog", maxFileSize: '10MB', maxBackupIndex: 4, file: logFile, layout:pattern(conversionPattern: '%d [%t] %-5p %c - %m%n'), threshold:log4jAppFileLogLevel 
	}

	root {
		error 'stdout', 'bbplog'
	}
}

grails.plugins.springsecurity.ui.register.postRegisterUrl  = "${grails.serverURL}/user/myprofile" // use defaultTargetUrl if not set
