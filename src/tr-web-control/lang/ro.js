// lang file
system.lang = {
	"name":"ro"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"Conectare în curs..."
			,"connected":"Conectat"
			,"queue":"Coadă:"
			,"queuefinish":"Lista este finalizată."
			,"notfinal":"Nefinalizat"
		}
	}
	,"error":{
		"data-error":"Eroare de date."
		,"data-post-error":"Eroare de postare date."
	}
	,"config":{
		"save-path":"Director pentru descărcare"
	}
	,"toolbar":{
		"start":"Start"
		,"pause":"Pauză"
		,"recheck":"Reverifică"
		,"start-all":"Porneşte toate"
		,"pause-all":"Pauză pentru toate"
		,"remove":"Şterge"
		,"remove-all":"Şterge toate"
		,"remove-data":"Şterge datele"
		,"add-torrent":"Adaugă fişier torrent"
		,"attribute":"Atribute"
		,"alt-speed":"Viteza alternativă"
		,"system-config":"Configurează"
		,"system-reload":"Reîncarcă"
		,"about":"Despre"
		,"reload-time":"Reîncărcare automată:"
		,"reload-time-unit":"secunde"
		,"autoreload-disabled":"Activat"
		,"autoreload-enabled":"Dezactivat"
		,"search-prompt":"Caută torrent local"
		,"tracker-replace":"Înlocuieşte tracker"
		,"tip":{
			"start":"Porneşte sarcinile bifate"
			,"pause":"Pauză pentru sarcinile bifate"
			,"recheck":"Reverifică sarcinile bifate"
			,"recheck-confirm":"Vrei să verifici sarcinile bifate ? Poate dura ceva timp ..."
			,"start-all":"Porneşte toate"
			,"pause-all":"Pauză toate"
			,"remove":"Şterge"
			,"delete-all":"Şterge toate"
			,"delete-data":"Şterge datele"
			,"add-torrent":"Adaugă fişiere torrent"
			,"attribute":"Atribut"
			,"alt-speed":"Viteza alternativă"
			,"system-config":"Configurează"
			,"system-reload":"Reîncarcă"
			,"about":"Despre aplicaţie"
			,"autoreload-disabled":"Dezactivează reîncarcarea automată"
			,"autoreload-enabled":"Activează reîncarcarea automată"
			,"tracker-replace":"Înlocuieşte tracker"
			,"change-download-dir":"Setează directorul de descărcare"
			,"ui-mobile":"Interfaţă mobile"
			,"ui-original":"Interfaţă originală"
			,"more-peers":"Interoghează pentru mai multe legături"
		}
	}
	,"title":{
		"left":"Navigare"
		,"list":"Torrente"
		,"attribute":"Atribut"
		,"status":"Status"
	}
	,"tree":{
		"all":"Toate"
		,"active":"Active"
		,"paused":"În pauză"
		,"downloading":"În descărcare"
		,"sending":"În transmitere"
		,"error":"Erori"
		,"warning":"Avertizări"
		,"actively":"Active"
		,"check":"În verificare"
		,"wait":"Aştept"
		,"search-result":"Rezultate căutare"
		,"status":{
			"loading":"Încărcare..."
		}
		,"statistics":"Statistici"
		,"statistics":{
			"title":"Statistici"
			,"cumulative":"Cumulat"
			,"current":"Actual"
			,"uploadedBytes":"Total octeţi( upload ): "
			,"downloadedBytes":"Total octeţi( download ): "
			,"filesAdded":"Fişiere adăugate: "   
			,"sessionCount":"Sesiuni: " 
			,"secondsActive":"Activ de: "
		}
		,"servers":"Trackere"
		,"folders":"Directoare"
		,"toolbar":{
			"nav":{
				"folders":"Directoare"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"Viteza de descărcare:"
		,"uploadspeed":"Vitza de încărcare:"
		,"version":"Versiune:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Directorul de descărcare:"
			,"torrent-url":"Torrent URL:"
			,"tip-torrent-url":"Sfat: Separate cu 'Enter'"
			,"autostart":"Auto Start:"
			,"tip-autostart":""
			,"set-default-download-dir":"Configurează ca director implicit"
			,"upload-file":"Fişiere Torrent :"
			,"nosource":"Niciun fişier torrent sau URL."
			,"tip-title":"Încarcărea fişierului torrent file este prioritară comparativ cu torrent URL"
		}
		,"system-config":{
			"title":"Configurează Serverul"
			,"tabs":{
				"base":"Principal"
				,"network":"Reţea"
				,"limit":"Limită"
				,"alt-speed":"Programate"
			}
			,"config-dir":"Locaţia fişierului de configurare al daemonului (settings.json):"
			,"download-dir":"Calea implicită către directorul de descărcare:"
			,"download-dir-free-space":"Spaţiu liber:"
			,"incomplete-dir-enabled":"Foloseşte directorul pentru descărcare nefinalizată"
			,"cache-size-mb":"Mărime cache:"
			,"rename-partial-files":"Ataşează extensia '.part' fişierelor nefinalizate"
			,"start-added-torrents":"Porneşte automat torrenții adăugaţi"
			,"download-queue-enabled":"Număr maxim descărcari simultane:"
			,"seed-queue-enabled":"Număr maxim încărcări simultane:"
			,"peer-port-random-on-start":"Folosește port aleator de conectare la pornire"
			,"port-forwarding-enabled":"Activează forwarding"
			,"test-port":"Testează port"
			,"port-is-open-true":"Portul este deschis"
			,"port-is-open-false":"Portul este închis"
			,"testing":"Testare..."
			,"encryption":"Encriptare:"
			,"encryption-type":{
				"required":"Obligatorie"
				,"preferred":"Preferată"
				,"tolerated":"Tolerată"
			}
			,"utp-enabled":"Activează µTP (UPnP)"
			,"dht-enabled":"Activează DHT"
			,"lpd-enabled":"Activează LPD"
			,"pex-enabled":"Activează PEX"
			,"peer-limit-global":"Număr maxim de legaturi (peers):"
			,"peer-limit-per-torrent":"Număr maxim de peers/torrent:"
			,"speed-limit-down-enabled":"Viteză maximă cumulată de descărcare:"
			,"speed-limit-up-enabled":"Viteză maximă cumulată de încărcare:"
			,"alt-speed-enabled":"Activează viteza alternativă"
			,"alt-speed-down":"Viteză maximă cumulată de descărcare:"
			,"alt-speed-up":"Viteză maximă cumulată de încărcare:"
			,"alt-speed-time-enabled":"Folosește programare"
			,"alt-speed-time":"Timp："
			,"weekday":{
				"1":"Luni"
				,"2":"Marți"
				,"3":"Miercuri"
				,"4":"Joi"
				,"5":"Vineri"
				,"6":"Sâmbătă"
				,"0":"Duminică"
			}
			,"blocklist-enabled":"Folosește blocklist"
			,"seedRatioLimited":"Rația implicită pentru încărcare:"
			,"queue-stalled-enabled":"Torentele inactive sunt considerete blocate după:"
			,"idle-seeding-limit-enabled":"Torentele la încărcare vor fi oprite dacă sunt inactive pentru:"
			,"minutes":"Minute"
			,"nochange":"Nicio schimbare"
			,"saving":"Salvez..."
		}
		,"public":{
			"button-ok":"OK"
			,"button-cancel":"Renunță"
			,"button-reload":"Reîncarcă"
			,"button-save":"Salvează"
			,"button-close":"Închide"
		}
		,"about":{
			"infos":"Autor：culturist<br/>Declarație：Dacă dețineți drepturi de autor pentru pictogramele folosite aici, vă rog, contactați-mă."
		}
		,"torrent-remove":{
			"title":"Confirmă ștergerea"
			,"confirm-text":"Confirmă ștergerea torrenților selectați?"
			,"remove-data":"Șterge datele salvate"
			,"remove-error":"Ștergere eșuată!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Confirmă noul director"
			,"old-download-dir":"Vechiul director:"
			,"new-download-dir":"Noul director:"
			,"move-data":"Dacă bifat se va muta din locația anterioară sau setează director nou pentru fișiere."
			,"set-error":"eroare !"
		}
		,"system-replaceTracker":{
			"title":"Înlocuiește trackerul"
			,"old-tracker":"Vechiul tracker："
			,"new-tracker":"Noul tracker："
			,"tip":"Această funcție va găsi <b>TOATE</b> trackerele."
			,"not-found":"Tracker nu poate fi găsit."
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Nume"
			,"hashString":"HASH"
			,"downloadDir":"Director descărcare"
			,"totalSize":"Mărime totală"
			,"status":"Status"
			,"percentDone":"Procent finalizat"
			,"remainingTime":"Timp rămas"
			,"addedDate":"Data adăugare"
			,"completeSize":"Marime descărcat"
			,"rateDownload":"Viteză descărcare"
			,"rateUpload":"Viteză încărcare"
			,"leecherCount":"Leecheri"
			,"seederCount":"Seederi"
			,"uploadedEver":"Total încărcat"
			,"uploadRatio":"Rația"
		}
		,"status-text":{
			"0":"Pauză"
			,"1":"Așteaptă pentru verificare"
			,"2":"Verificare"
			,"3":"Așteapta pentru descărcare"
			,"4":"Descarcă"
			,"5":"Așteaptă pentru încărcare"
			,"6":"Trimite date"
		}
		,"attribute":{
			"tabs":{
				"base":"Principal"
				,"servers":"Trackere"
				,"files":"Fișiere"
				,"users":"Peers"
				,"config":"Setări"
			}
			,"files-fields":{
				"name":"Nume"
				,"length":"Mărime"
				,"percentDone":"Procent finalizat"
				,"bytesCompleted":"Mărime finalizat"
				,"wanted":"Căutat"
				,"priority":"Prioritate"
			}
			,"servers-fields":{
				"announce":"Link tracker"
				,"announceState":"Status"
				,"lastAnnounceResult":"Info"
				,"lastAnnounceSucceeded":"Succes"
				,"lastAnnounceTime":"Timp pentru verificare tracker"
				,"lastAnnounceTimedOut":"Erori la conectare tracker ?"
				,"downloadCount":"Număr descărcări"
				,"nextAnnounceTime":"Următoarea verificare tracker"
			}
			,"peers-fields":{
				"address":"Adresa IP"
				,"clientName":"Client"
				,"flagStr":"Flag"
				,"progress":"Progres"
				,"rateToClient":"Viteza descărcare a conectatului"
				,"rateToPeer":"Viteza de transfer către conectat"
			}
			,"status":{
				"true":"Adevărat"
				,"false":"Fals"
			}
			,"priority":{
				"0":"Normală"
				,"1":"Mare"
				,"-1":"Mică"
			}
			,"label":{
				"name":"Nume:"
				,"addedDate":"Data adăugării:"
				,"totalSize":"Mărime totală:"
				,"completeSize":"Mărime descărcat:"
				,"leftUntilDone":"Rămas de finalizat:"
				,"hashString":"HASH:"
				,"downloadDir":"Director pentru descărcare:"
				,"status":"Status:"
				,"rateDownload":"Viteză descărcare:"
				,"rateUpload":"Viteză încărcare:"
				,"leecherCount":"Leecher:"
				,"seederCount":"Seeder:"
				,"uploadedEver":"Total încărcat:"
				,"uploadRatio":"Rația încărcat:"
				,"creator":"Creator:"
				,"dateCreated":"Data creării:"
				,"comment":"Comentariu:"
				,"errorString":"Eroare în șirȘ"
				,"downloadLimited":"Viteza maximă de descărcare："
				,"uploadLimited":"Viteza maximă de încărcare："
				,"peer-limit":"Număr maxim de peers/torrent："
				,"seedRatioMode":"Rația pentru încărcare："
				,"seedIdleMode":"Torrentele la încărcat vor fi oprite dacă sunt inactive pentru："
			}
			,"tip":{
				"button-allow":"Descărcarea fișierelor bifate"
				,"button-deny":"Nu descărca fișierele :"
				,"button-priority":"Prioritate"
			}
			,"other":{
				"tracker-remove-confim":"Confirmi ștergerea acestui tracker ?"
			}
		}
	}
	,"torrent-head":{
		"buttons":{
			"autoExpandAttribute":"Afișează automat atributele"
		}
	}
	,"public":{
		"text-unknown":"Necunoscut"
		,"text-drop-title":"Fă 'drag and drop' pentru adăugare în Transmission."
		,"text-saved":"Salvat"
		,"text-nochange":"Nicio schimbare"
		,"text-info":"Informții"
		,"text-confirm":"Ești sigur ?"
		,"text-browsers-not-support-features":"Browserul folosit nu suportă această funcție !"
		,"text-download-update":"Descarcă această actualizare"
		,"text-have-update":"O actualizare este disponibilă"
	}
};
