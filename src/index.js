//#region -- begin::Prerequisites
require("dotenv").config();
//#endregion -- end::Prerequisites

const discord = require("discord.js");

const client = discord.Client();

const JSONR = [
   {
      "type":"directory",
      "name":"/var/www/html/webdnahub.com/citi/help/v2",
      "contents":[
         {
            "type":"directory",
            "name":"actions",
            "time":"Nov 13 14:52",
            "contents":[
               {
                  "type":"directory",
                  "name":"account",
                  "time":"Nov 13 14:52",
                  "contents":[
                     {
                        "type":"file",
                        "name":"logout.html",
                        "time":"Nov 13 14:54"
                     }
                  ]
               }
            ]
         },
         {
            "type":"directory",
            "name":"admin",
            "time":"Nov 12 15:45",
            "contents":[
               {
                  "type":"file",
                  "name":"ErrorLog.txt",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"directory",
                  "name":"faq",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"file",
                        "name":"add.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"edit.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"index.html",
                        "time":"Nov 12 14:15"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"faqcat",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"file",
                        "name":"add.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"edit.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"index.html",
                        "time":"Nov 12 14:15"
                     }
                  ]
               },
               {
                  "type":"file",
                  "name":"index.html",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"directory",
                  "name":"journals",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"file",
                        "name":"add.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"edit.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"index.html",
                        "time":"Nov 12 14:15"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"lessons",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"file",
                        "name":"add.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"edit.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"ErrorLog.txt",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"index.html",
                        "time":"Nov 12 14:15"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"resources",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"file",
                        "name":"add.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"edit.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"index.html",
                        "time":"Nov 12 14:15"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"resourcetypes",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"file",
                        "name":"add.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"edit.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"ErrorLog.txt",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"index.html",
                        "time":"Nov 12 14:15"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"students",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"file",
                        "name":"add.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"edit.html",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"ErrorLog.txt",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"index.html",
                        "time":"Nov 12 14:15"
                     }
                  ]
               }
            ]
         },
         {
            "type":"directory",
            "name":"assets",
            "time":"Nov 12 14:12",
            "contents":[
               {
                  "type":"directory",
                  "name":"account",
                  "time":"Nov 12 14:12",
                  "contents":[
                     {
                        "type":"directory",
                        "name":"scripts",
                        "time":"Nov 12 14:15",
                        "contents":[
                           {
                              "type":"file",
                              "name":"loginAccount.js",
                              "time":"Nov 12 14:15"
                           }
                        ]
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"chat",
                  "time":"Nov 12 14:12",
                  "contents":[
                     {
                        "type":"file",
                        "name":"chatFulfilment.js",
                        "time":"Oct 22 11:31"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"images",
                  "time":"Nov 12 14:12",
                  "contents":[
                     {
                        "type":"file",
                        "name":"CiTi Logos-02.svg",
                        "time":"Nov 5 14:22"
                     },
                     {
                        "type":"file",
                        "name":"oc.png",
                        "time":"Oct 16 17:31"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"journals",
                  "time":"Nov 12 14:12",
                  "contents":[
                     {
                        "type":"file",
                        "name":"dsfsdf",
                        "time":"Oct 18 13:31"
                     },
                     {
                        "type":"directory",
                        "name":"scripts",
                        "time":"Nov 12 14:12",
                        "contents":[
                           {
                              "type":"file",
                              "name":"journals.js",
                              "time":"Oct 18 13:31"
                           }
                        ]
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"scripts",
                  "time":"Nov 12 14:12",
                  "contents":[
                     
                  ]
               },
               {
                  "type":"directory",
                  "name":"shared",
                  "time":"Nov 12 14:12",
                  "contents":[
                     {
                        "type":"file",
                        "name":"fullcalendar.bundle.js",
                        "time":"Nov 5 14:10"
                     },
                     {
                        "type":"file",
                        "name":"humanizedTime.js",
                        "time":"Nov 12 10:56"
                     },
                     {
                        "type":"file",
                        "name":"InfiniteScroll.js",
                        "time":"Oct 23 13:31"
                     },
                     {
                        "type":"file",
                        "name":"scripts.bundle.js",
                        "time":"Oct 22 17:31"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"studentHealth",
                  "time":"Nov 12 14:12",
                  "contents":[
                     {
                        "type":"file",
                        "name":"index.js",
                        "time":"Oct 16 21:31"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"styling",
                  "time":"Nov 12 14:12",
                  "contents":[
                     {
                        "type":"file",
                        "name":"global.css",
                        "time":"Nov 12 9:58"
                     }
                  ]
               }
            ]
         },
         {
            "type":"directory",
            "name":"assignments",
            "time":"Nov 12 14:15",
            "contents":[
               {
                  "type":"file",
                  "name":"ErrorLog.txt",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"index.html",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"second.html",
                  "time":"Nov 12 14:15"
               }
            ]
         },
         {
            "type":"directory",
            "name":"authorize",
            "time":"Nov 12 14:15",
            "contents":[
               {
                  "type":"file",
                  "name":"index.html",
                  "time":"Nov 12 14:15"
               }
            ]
         },
         {
            "type":"file",
            "name":"chatframe.html",
            "time":"Nov 12 14:15"
         },
         {
            "type":"file",
            "name":"chatsearch.html",
            "time":"Nov 12 14:15"
         },
         {
            "type":"file",
            "name":"cmd.tpl",
            "time":"Nov 12 14:11"
         },
         {
            "type":"directory",
            "name":"dashboard",
            "time":"Nov 12 15:44",
            "contents":[
               {
                  "type":"file",
                  "name":"assistance.html",
                  "time":"Nov 13 15:08"
               },
               {
                  "type":"file",
                  "name":"ErrorLog.txt",
                  "time":"Nov 13 9:14"
               },
               {
                  "type":"file",
                  "name":"index.html",
                  "time":"Nov 13 15:01"
               },
               {
                  "type":"file",
                  "name":"journals.html",
                  "time":"Nov 13 9:24"
               },
               {
                  "type":"file",
                  "name":"lesson.html",
                  "time":"Nov 13 15:11"
               },
               {
                  "type":"file",
                  "name":"lessons.html",
                  "time":"Nov 12 15:59"
               }
            ]
         },
         {
            "type":"directory",
            "name":"databases",
            "time":"Nov 12 14:15",
            "contents":[
               {
                  "type":"file",
                  "name":"codingchat.db",
                  "time":"Oct 29 11:42"
               },
               {
                  "type":"file",
                  "name":"conversionJSONHTML.db",
                  "time":"Oct 22 13:31"
               },
               {
                  "type":"file",
                  "name":"conversions.db",
                  "time":"Oct 22 13:31"
               },
               {
                  "type":"file",
                  "name":"faqcat.db",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"file",
                  "name":"faq.db",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"file",
                  "name":"journal.db",
                  "time":"Nov 12 9:29"
               },
               {
                  "type":"file",
                  "name":"lesson.db",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"file",
                  "name":"owner.db",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"file",
                  "name":"random.db",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"file",
                  "name":"resource.db",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"resourcetype.db",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"file",
                  "name":"schooldates.db",
                  "time":"Nov 5 9:26"
               },
               {
                  "type":"file",
                  "name":"student.db",
                  "time":"Nov 12 12:31"
               },
               {
                  "type":"file",
                  "name":"studentgrade.db",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"file",
                  "name":"studenthelp.db",
                  "time":"Nov 12 12:51"
               },
               {
                  "type":"file",
                  "name":"student_lesson.db",
                  "time":"Nov 12 14:08"
               },
               {
                  "type":"file",
                  "name":"stufeel.db",
                  "time":"Nov 12 9:20"
               },
               {
                  "type":"file",
                  "name":"stulogin.db",
                  "time":"Nov 12 9:20"
               },
               {
                  "type":"file",
                  "name":"stusleep.db",
                  "time":"Nov 12 9:20"
               },
               {
                  "type":"file",
                  "name":"stuthanks.db",
                  "time":"Nov 12 9:20"
               }
            ]
         },
         {
            "type":"file",
            "name":"empty.html",
            "time":"Nov 13 17:00"
         },
         {
            "type":"file",
            "name":"ErrorLog.txt",
            "time":"Nov 12 14:15"
         },
         {
            "type":"file",
            "name":"faq.html",
            "time":"Nov 12 14:15"
         },
         {
            "type":"file",
            "name":"flush.html",
            "time":"Oct 23 9:31"
         },
         {
            "type":"directory",
            "name":"forms",
            "time":"Nov 12 14:15",
            "contents":[
               {
                  "type":"file",
                  "name":"index.html",
                  "time":"Nov 12 14:15"
               }
            ]
         },
         {
            "type":"file",
            "name":"helpmet.html",
            "time":"Nov 12 14:15"
         },
         {
            "type":"directory",
            "name":"images",
            "time":"Nov 12 14:12",
            "contents":[
               {
                  "type":"directory",
                  "name":"profile_images",
                  "time":"Nov 12 19:23",
                  "contents":[
                     {
                        "type":"file",
                        "name":"avatar.png",
                        "time":"Nov 12 19:21"
                     }
                  ]
               }
            ]
         },
         {
            "type":"directory",
            "name":"includes",
            "time":"Nov 12 14:15",
            "contents":[
               {
                  "type":"file",
                  "name":"chatlist.inc",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"file",
                  "name":"codj.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"foot.inc",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"directory",
                  "name":"globals",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"file",
                        "name":"initializer.inc",
                        "time":"Nov 13 9:31"
                     },
                     {
                        "type":"file",
                        "name":"initializer.min.inc",
                        "time":"Nov 12 14:16"
                     },
                     {
                        "type":"directory",
                        "name":"shared",
                        "time":"Nov 13 9:11",
                        "contents":[
                           {
                              "type":"file",
                              "name":"captchaProcessing.inc",
                              "time":"Oct 22 9:31"
                           },
                           {
                              "type":"directory",
                              "name":"components",
                              "time":"Nov 12 14:15",
                              "contents":[
                                 {
                                    "type":"file",
                                    "name":"chat.inc",
                                    "time":"Oct 22 17:31"
                                 },
                                 {
                                    "type":"file",
                                    "name":"helpPanel.inc",
                                    "time":"Nov 12 10:46"
                                 },
                                 {
                                    "type":"file",
                                    "name":"journals.inc",
                                    "time":"Nov 13 9:26"
                                 },
                                 {
                                    "type":"file",
                                    "name":"jump.inc",
                                    "time":"Oct 22 11:31"
                                 },
                                 {
                                    "type":"file",
                                    "name":"lessons.inc",
                                    "time":"Nov 12 15:43"
                                 },
                                 {
                                    "type":"file",
                                    "name":"sidepanel.inc",
                                    "time":"Oct 22 11:31"
                                 }
                              ]
                           },
                           {
                              "type":"file",
                              "name":"footer.inc",
                              "time":"Nov 13 15:15"
                           },
                           {
                              "type":"file",
                              "name":"head.inc",
                              "time":"Nov 12 14:15"
                           },
                           {
                              "type":"file",
                              "name":"mobileNavHeader.inc",
                              "time":"Nov 12 15:58"
                           },
                           {
                              "type":"file",
                              "name":"mp.inc",
                              "time":"Nov 13 9:14"
                           },
                           {
                              "type":"file",
                              "name":"navHeader.inc",
                              "time":"Nov 12 20:05"
                           },
                           {
                              "type":"file",
                              "name":"pageFinishedLoggedIn.inc",
                              "time":"Nov 12 10:51"
                           },
                           {
                              "type":"file",
                              "name":"pageFinish.inc",
                              "time":"Nov 5 13:49"
                           },
                           {
                              "type":"file",
                              "name":"profile.inc",
                              "time":"Nov 13 14:57"
                           },
                           {
                              "type":"file",
                              "name":"studentHealth.inc",
                              "time":"Oct 17 15:31"
                           },
                           {
                              "type":"file",
                              "name":"variables.inc",
                              "time":"Nov 5 9:21"
                           }
                        ]
                     }
                  ]
               },
               {
                  "type":"file",
                  "name":"head.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"journallist.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"journalrep.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"lessonlist.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"metfoot.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"metheader.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"methead.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"metnav.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"nav.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"newchat.inc",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"file",
                  "name":"resourcelist.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"sidebar.inc",
                  "time":"Oct 16 11:31"
               },
               {
                  "type":"file",
                  "name":"stujournalrep.inc",
                  "time":"Nov 12 14:15"
               }
            ]
         },
         {
            "type":"file",
            "name":"index.html",
            "time":"Nov 5 8:39"
         },
         {
            "type":"file",
            "name":"info.html",
            "time":"Oct 22 19:31"
         },
         {
            "type":"file",
            "name":"journalmet.html",
            "time":"Nov 12 14:15"
         },
         {
            "type":"file",
            "name":"lessons.html",
            "time":"Nov 12 14:15"
         },
         {
            "type":"directory",
            "name":"pages",
            "time":"Nov 12 14:12",
            "contents":[
               
            ]
         },
         {
            "type":"directory",
            "name":"resources",
            "time":"Nov 12 14:15",
            "contents":[
               {
                  "type":"file",
                  "name":"ErrorLog.txt",
                  "time":"Nov 12 16:01"
               },
               {
                  "type":"file",
                  "name":"index.html",
                  "time":"Nov 12 14:15"
               }
            ]
         },
         {
            "type":"file",
            "name":"studentjournal.html",
            "time":"Nov 12 14:15"
         },
         {
            "type":"file",
            "name":"sysinfo.php",
            "time":"Oct 28 11:03"
         },
         {
            "type":"file",
            "name":"test.tpl",
            "time":"Oct 28 12:08"
         },
         {
            "type":"directory",
            "name":"utilities",
            "time":"Nov 12 14:15",
            "contents":[
               {
                  "type":"file",
                  "name":"assistanceHandler.tpl",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"assistanceRetrieval.tpl",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"calendarJournals.tpl",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"chatDeletion.tpl",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"chatRetreival.tpl",
                  "time":"Nov 12 15:33"
               },
               {
                  "type":"file",
                  "name":"chatSubmission.tpl",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"ErrorLog.txt",
                  "time":"Nov 13 15:07"
               },
               {
                  "type":"file",
                  "name":"recaptcha.html",
                  "time":"Oct 22 11:31"
               },
               {
                  "type":"file",
                  "name":"status.html",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"status.inc",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"status.php",
                  "time":"Oct 16 13:31"
               }
            ]
         },
         {
            "type":"directory",
            "name":"versioncontrol",
            "time":"Nov 12 19:17",
            "contents":[
               {
                  "type":"file",
                  "name":"codeview.html",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"directory",
                  "name":"cron",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"file",
                        "name":"ErrorLog.txt",
                        "time":"Nov 13 16:12"
                     },
                     {
                        "type":"file",
                        "name":"index.html",
                        "time":"Nov 13 16:16"
                     },
                     {
                        "type":"directory",
                        "name":"returned2021",
                        "time":"Nov 12 14:15",
                        "contents":[
                           {
                              "type":"file",
                              "name":"index.html",
                              "time":"Nov 12 14:15"
                           }
                        ]
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"css",
                  "time":"Nov 12 14:12",
                  "contents":[
                     {
                        "type":"file",
                        "name":"main.css",
                        "time":"Nov 12 10:35"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"databases",
                  "time":"Nov 13 15:57",
                  "contents":[
                     {
                        "type":"file",
                        "name":"admins.db",
                        "time":"Nov 12 10:35"
                     },
                     {
                        "type":"file",
                        "name":"controls.db",
                        "time":"Nov 13 15:57"
                     },
                     {
                        "type":"file",
                        "name":"files.db",
                        "time":"Nov 13 16:13"
                     }
                  ]
               },
               {
                  "type":"file",
                  "name":"ErrorLog.txt",
                  "time":"Nov 13 16:07"
               },
               {
                  "type":"directory",
                  "name":"filecontroller",
                  "time":"Nov 13 16:12",
                  "contents":[
                     {
                        "type":"file",
                        "name":"1|info.php",
                        "time":"Nov 13 15:57"
                     },
                     {
                        "type":"file",
                        "name":"2|cmd.tpl",
                        "time":"Nov 13 15:57"
                     },
                     {
                        "type":"file",
                        "name":"3|io.py",
                        "time":"Nov 13 15:57"
                     },
                     {
                        "type":"file",
                        "name":"4|io.pl",
                        "time":"Nov 13 15:57"
                     },
                     {
                        "type":"file",
                        "name":"5|io.py",
                        "time":"Nov 13 16:12"
                     }
                  ]
               },
               {
                  "type":"file",
                  "name":"filelistmac.html",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"directory",
                  "name":"imgs",
                  "time":"Nov 12 14:12",
                  "contents":[
                     {
                        "type":"file",
                        "name":"file.png",
                        "time":"Nov 12 10:35"
                     },
                     {
                        "type":"file",
                        "name":"folder.png",
                        "time":"Nov 12 10:35"
                     }
                  ]
               },
               {
                  "type":"directory",
                  "name":"includes",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"file",
                        "name":"admin.inc",
                        "time":"Nov 12 20:13"
                     },
                     {
                        "type":"directory",
                        "name":"datatables",
                        "time":"Nov 13 16:01",
                        "contents":[
                           {
                              "type":"file",
                              "name":"files.inc",
                              "time":"Nov 13 16:00"
                           },
                           {
                              "type":"file",
                              "name":"stufiles.inc",
                              "time":"Nov 13 16:02"
                           }
                        ]
                     },
                     {
                        "type":"file",
                        "name":"file-dt.inc",
                        "time":"Nov 12 10:35"
                     },
                     {
                        "type":"file",
                        "name":"filelisting.inc",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"footer.inc",
                        "time":"Nov 12 10:35"
                     },
                     {
                        "type":"file",
                        "name":"header.inc",
                        "time":"Nov 13 15:51"
                     },
                     {
                        "type":"file",
                        "name":"initials.inc",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"login.inc",
                        "time":"Nov 12 10:35"
                     },
                     {
                        "type":"file",
                        "name":"nav.inc",
                        "time":"Nov 12 14:15"
                     },
                     {
                        "type":"file",
                        "name":"nav.inv",
                        "time":"Nov 12 10:35"
                     },
                     {
                        "type":"directory",
                        "name":"returned2021",
                        "time":"Nov 12 14:15",
                        "contents":[
                           {
                              "type":"file",
                              "name":"nav.inc",
                              "time":"Nov 12 14:15"
                           }
                        ]
                     }
                  ]
               },
               {
                  "type":"file",
                  "name":"index.html",
                  "time":"Nov 12 21:27"
               },
               {
                  "type":"directory",
                  "name":"login",
                  "time":"Nov 12 14:13",
                  "contents":[
                     {
                        "type":"file",
                        "name":"index.html",
                        "time":"Nov 12 10:35"
                     }
                  ]
               },
               {
                  "type":"file",
                  "name":"return.html",
                  "time":"Nov 12 14:15"
               },
               {
                  "type":"file",
                  "name":"studentviewer.html",
                  "time":"Nov 13 16:09"
               },
               {
                  "type":"file",
                  "name":"submit2.tpl",
                  "time":"Nov 12 19:17"
               },
               {
                  "type":"file",
                  "name":"submit.tpl",
                  "time":"Nov 12 20:19"
               },
               {
                  "type":"directory",
                  "name":"test",
                  "time":"Nov 12 14:15",
                  "contents":[
                     {
                        "type":"directory",
                        "name":"test2",
                        "time":"Nov 12 14:12",
                        "contents":[
                           
                        ]
                     },
                     {
                        "type":"file",
                        "name":"test.html",
                        "time":"Nov 12 14:15"
                     }
                  ]
               }
            ]
         }
      ]
   },
   {
      "type":"report",
      "directories":48,
      "files":170
   }
];

/**
 * [{
            "text": "Same but with checkboxes",
             "children": [{
                 "text": "initially selected",
                 "state": {
                     "selected": true
                 }
             }, {
                 "text": "custom icon",
                 "icon": "fa fa-warning text-danger"
             }, {
                 "text": "initially open",
                 "icon": "fa fa-folder text-default",
                 "state": {
                     "opened": true
                 },
                 "children": ["Another node"]
             }, {
                 "text": "custom icon",
                 "icon": "fa fa-warning text-waring"
             }, {
                 "text": "disabled node",
                 "icon": "fa fa-check text-success",
                 "state": {
                     "disabled": true
                 }
             }]
         },
         "And wholerow selection"
     ]
 */

(async () => {
    const JSONR = [ {"type":"directory","name":"/var/www/html/webdnahub.com/citi/help/v2","contents":[ {"type":"directory","name":"actions","time":"Nov 13 14:52","contents":[ {"type":"directory","name":"account","time":"Nov 13 14:52","contents":[ {"type":"file","name":"logout.html","time":"Nov 13 14:54"} ]} ]}, {"type":"directory","name":"admin","time":"Nov 12 15:45","contents":[ {"type":"file","name":"ErrorLog.txt","time":"Nov 12 14:15"}, {"type":"directory","name":"faq","time":"Nov 12 14:15","contents":[ {"type":"file","name":"add.html","time":"Nov 12 14:15"}, {"type":"file","name":"edit.html","time":"Nov 12 14:15"}, {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]}, {"type":"directory","name":"faqcat","time":"Nov 12 14:15","contents":[ {"type":"file","name":"add.html","time":"Nov 12 14:15"}, {"type":"file","name":"edit.html","time":"Nov 12 14:15"}, {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]}, {"type":"file","name":"index.html","time":"Nov 12 14:15"}, {"type":"directory","name":"journals","time":"Nov 12 14:15","contents":[ {"type":"file","name":"add.html","time":"Nov 12 14:15"}, {"type":"file","name":"edit.html","time":"Nov 12 14:15"}, {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]}, {"type":"directory","name":"lessons","time":"Nov 12 14:15","contents":[ {"type":"file","name":"add.html","time":"Nov 12 14:15"}, {"type":"file","name":"edit.html","time":"Nov 12 14:15"}, {"type":"file","name":"ErrorLog.txt","time":"Nov 12 14:15"}, {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]}, {"type":"directory","name":"resources","time":"Nov 12 14:15","contents":[ {"type":"file","name":"add.html","time":"Nov 12 14:15"}, {"type":"file","name":"edit.html","time":"Nov 12 14:15"}, {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]}, {"type":"directory","name":"resourcetypes","time":"Nov 12 14:15","contents":[ {"type":"file","name":"add.html","time":"Nov 12 14:15"}, {"type":"file","name":"edit.html","time":"Nov 12 14:15"}, {"type":"file","name":"ErrorLog.txt","time":"Nov 12 14:15"}, {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]}, {"type":"directory","name":"students","time":"Nov 12 14:15","contents":[ {"type":"file","name":"add.html","time":"Nov 12 14:15"}, {"type":"file","name":"edit.html","time":"Nov 12 14:15"}, {"type":"file","name":"ErrorLog.txt","time":"Nov 12 14:15"}, {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]} ]}, {"type":"directory","name":"assets","time":"Nov 12 14:12","contents":[ {"type":"directory","name":"account","time":"Nov 12 14:12","contents":[ {"type":"directory","name":"scripts","time":"Nov 12 14:15","contents":[ {"type":"file","name":"loginAccount.js","time":"Nov 12 14:15"} ]} ]}, {"type":"directory","name":"chat","time":"Nov 12 14:12","contents":[ {"type":"file","name":"chatFulfilment.js","time":"Oct 22 11:31"} ]}, {"type":"directory","name":"images","time":"Nov 12 14:12","contents":[ {"type":"file","name":"CiTi Logos-02.svg","time":"Nov 5 14:22"}, {"type":"file","name":"oc.png","time":"Oct 16 17:31"} ]}, {"type":"directory","name":"journals","time":"Nov 12 14:12","contents":[ {"type":"file","name":"dsfsdf","time":"Oct 18 13:31"}, {"type":"directory","name":"scripts","time":"Nov 12 14:12","contents":[ {"type":"file","name":"journals.js","time":"Oct 18 13:31"} ]} ]}, {"type":"directory","name":"scripts","time":"Nov 12 14:12","contents":[ ]}, {"type":"directory","name":"shared","time":"Nov 12 14:12","contents":[ {"type":"file","name":"fullcalendar.bundle.js","time":"Nov 5 14:10"}, {"type":"file","name":"humanizedTime.js","time":"Nov 12 10:56"}, {"type":"file","name":"InfiniteScroll.js","time":"Oct 23 13:31"}, {"type":"file","name":"scripts.bundle.js","time":"Oct 22 17:31"} ]}, {"type":"directory","name":"studentHealth","time":"Nov 12 14:12","contents":[ {"type":"file","name":"index.js","time":"Oct 16 21:31"} ]}, {"type":"directory","name":"styling","time":"Nov 12 14:12","contents":[ {"type":"file","name":"global.css","time":"Nov 12 9:58"} ]} ]}, {"type":"directory","name":"assignments","time":"Nov 12 14:15","contents":[ {"type":"file","name":"ErrorLog.txt","time":"Nov 12 14:15"}, {"type":"file","name":"index.html","time":"Nov 12 14:15"}, {"type":"file","name":"second.html","time":"Nov 12 14:15"} ]}, {"type":"directory","name":"authorize","time":"Nov 12 14:15","contents":[ {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]}, {"type":"file","name":"chatframe.html","time":"Nov 12 14:15"}, {"type":"file","name":"chatsearch.html","time":"Nov 12 14:15"}, {"type":"file","name":"cmd.tpl","time":"Nov 12 14:11"}, {"type":"directory","name":"dashboard","time":"Nov 12 15:44","contents":[ {"type":"file","name":"assistance.html","time":"Nov 13 15:08"}, {"type":"file","name":"ErrorLog.txt","time":"Nov 13 9:14"}, {"type":"file","name":"index.html","time":"Nov 13 15:01"}, {"type":"file","name":"journals.html","time":"Nov 13 9:24"}, {"type":"file","name":"lesson.html","time":"Nov 13 15:11"}, {"type":"file","name":"lessons.html","time":"Nov 12 15:59"} ]}, {"type":"directory","name":"databases","time":"Nov 12 14:15","contents":[ {"type":"file","name":"codingchat.db","time":"Oct 29 11:42"}, {"type":"file","name":"conversionJSONHTML.db","time":"Oct 22 13:31"}, {"type":"file","name":"conversions.db","time":"Oct 22 13:31"}, {"type":"file","name":"faqcat.db","time":"Oct 16 11:31"}, {"type":"file","name":"faq.db","time":"Oct 16 11:31"}, {"type":"file","name":"journal.db","time":"Nov 12 9:29"}, {"type":"file","name":"lesson.db","time":"Oct 16 11:31"}, {"type":"file","name":"owner.db","time":"Oct 16 11:31"}, {"type":"file","name":"random.db","time":"Oct 16 11:31"}, {"type":"file","name":"resource.db","time":"Nov 12 14:15"}, {"type":"file","name":"resourcetype.db","time":"Oct 16 11:31"}, {"type":"file","name":"schooldates.db","time":"Nov 5 9:26"}, {"type":"file","name":"student.db","time":"Nov 12 12:31"}, {"type":"file","name":"studentgrade.db","time":"Oct 16 11:31"}, {"type":"file","name":"studenthelp.db","time":"Nov 12 12:51"}, {"type":"file","name":"student_lesson.db","time":"Nov 12 14:08"}, {"type":"file","name":"stufeel.db","time":"Nov 12 9:20"}, {"type":"file","name":"stulogin.db","time":"Nov 12 9:20"}, {"type":"file","name":"stusleep.db","time":"Nov 12 9:20"}, {"type":"file","name":"stuthanks.db","time":"Nov 12 9:20"} ]}, {"type":"file","name":"empty.html","time":"Nov 13 17:00"}, {"type":"file","name":"ErrorLog.txt","time":"Nov 12 14:15"}, {"type":"file","name":"faq.html","time":"Nov 12 14:15"}, {"type":"file","name":"flush.html","time":"Oct 23 9:31"}, {"type":"directory","name":"forms","time":"Nov 12 14:15","contents":[ {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]}, {"type":"file","name":"helpmet.html","time":"Nov 12 14:15"}, {"type":"directory","name":"images","time":"Nov 12 14:12","contents":[ {"type":"directory","name":"profile_images","time":"Nov 12 19:23","contents":[ {"type":"file","name":"avatar.png","time":"Nov 12 19:21"} ]} ]}, {"type":"directory","name":"includes","time":"Nov 12 14:15","contents":[ {"type":"file","name":"chatlist.inc","time":"Oct 16 11:31"}, {"type":"file","name":"codj.inc","time":"Nov 12 14:15"}, {"type":"file","name":"foot.inc","time":"Oct 16 11:31"}, {"type":"directory","name":"globals","time":"Nov 12 14:15","contents":[ {"type":"file","name":"initializer.inc","time":"Nov 13 9:31"}, {"type":"file","name":"initializer.min.inc","time":"Nov 12 14:16"}, {"type":"directory","name":"shared","time":"Nov 13 9:11","contents":[ {"type":"file","name":"captchaProcessing.inc","time":"Oct 22 9:31"}, {"type":"directory","name":"components","time":"Nov 12 14:15","contents":[ {"type":"file","name":"chat.inc","time":"Oct 22 17:31"}, {"type":"file","name":"helpPanel.inc","time":"Nov 12 10:46"}, {"type":"file","name":"journals.inc","time":"Nov 13 9:26"}, {"type":"file","name":"jump.inc","time":"Oct 22 11:31"}, {"type":"file","name":"lessons.inc","time":"Nov 12 15:43"}, {"type":"file","name":"sidepanel.inc","time":"Oct 22 11:31"} ]}, {"type":"file","name":"footer.inc","time":"Nov 13 15:15"}, {"type":"file","name":"head.inc","time":"Nov 12 14:15"}, {"type":"file","name":"mobileNavHeader.inc","time":"Nov 12 15:58"}, {"type":"file","name":"mp.inc","time":"Nov 13 9:14"}, {"type":"file","name":"navHeader.inc","time":"Nov 12 20:05"}, {"type":"file","name":"pageFinishedLoggedIn.inc","time":"Nov 12 10:51"}, {"type":"file","name":"pageFinish.inc","time":"Nov 5 13:49"}, {"type":"file","name":"profile.inc","time":"Nov 13 14:57"}, {"type":"file","name":"studentHealth.inc","time":"Oct 17 15:31"}, {"type":"file","name":"variables.inc","time":"Nov 5 9:21"} ]} ]}, {"type":"file","name":"head.inc","time":"Nov 12 14:15"}, {"type":"file","name":"journallist.inc","time":"Nov 12 14:15"}, {"type":"file","name":"journalrep.inc","time":"Nov 12 14:15"}, {"type":"file","name":"lessonlist.inc","time":"Nov 12 14:15"}, {"type":"file","name":"metfoot.inc","time":"Nov 12 14:15"}, {"type":"file","name":"metheader.inc","time":"Nov 12 14:15"}, {"type":"file","name":"methead.inc","time":"Nov 12 14:15"}, {"type":"file","name":"metnav.inc","time":"Nov 12 14:15"}, {"type":"file","name":"nav.inc","time":"Nov 12 14:15"}, {"type":"file","name":"newchat.inc","time":"Oct 16 11:31"}, {"type":"file","name":"resourcelist.inc","time":"Nov 12 14:15"}, {"type":"file","name":"sidebar.inc","time":"Oct 16 11:31"}, {"type":"file","name":"stujournalrep.inc","time":"Nov 12 14:15"} ]}, {"type":"file","name":"index.html","time":"Nov 5 8:39"}, {"type":"file","name":"info.html","time":"Oct 22 19:31"}, {"type":"file","name":"journalmet.html","time":"Nov 12 14:15"}, {"type":"file","name":"lessons.html","time":"Nov 12 14:15"}, {"type":"directory","name":"pages","time":"Nov 12 14:12","contents":[ ]}, {"type":"directory","name":"resources","time":"Nov 12 14:15","contents":[ {"type":"file","name":"ErrorLog.txt","time":"Nov 12 16:01"}, {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]}, {"type":"file","name":"studentjournal.html","time":"Nov 12 14:15"}, {"type":"file","name":"sysinfo.php","time":"Oct 28 11:03"}, {"type":"file","name":"test.tpl","time":"Oct 28 12:08"}, {"type":"directory","name":"utilities","time":"Nov 12 14:15","contents":[ {"type":"file","name":"assistanceHandler.tpl","time":"Nov 12 14:15"}, {"type":"file","name":"assistanceRetrieval.tpl","time":"Nov 12 14:15"}, {"type":"file","name":"calendarJournals.tpl","time":"Nov 12 14:15"}, {"type":"file","name":"chatDeletion.tpl","time":"Nov 12 14:15"}, {"type":"file","name":"chatRetreival.tpl","time":"Nov 12 15:33"}, {"type":"file","name":"chatSubmission.tpl","time":"Nov 12 14:15"}, {"type":"file","name":"ErrorLog.txt","time":"Nov 13 15:07"}, {"type":"file","name":"recaptcha.html","time":"Oct 22 11:31"}, {"type":"file","name":"status.html","time":"Nov 12 14:15"}, {"type":"file","name":"status.inc","time":"Nov 12 14:15"}, {"type":"file","name":"status.php","time":"Oct 16 13:31"} ]}, {"type":"directory","name":"versioncontrol","time":"Nov 12 19:17","contents":[ {"type":"file","name":"codeview.html","time":"Nov 12 14:15"}, {"type":"directory","name":"cron","time":"Nov 12 14:15","contents":[ {"type":"file","name":"ErrorLog.txt","time":"Nov 13 16:12"}, {"type":"file","name":"index.html","time":"Nov 13 16:16"}, {"type":"directory","name":"returned2021","time":"Nov 12 14:15","contents":[ {"type":"file","name":"index.html","time":"Nov 12 14:15"} ]} ]}, {"type":"directory","name":"css","time":"Nov 12 14:12","contents":[ {"type":"file","name":"main.css","time":"Nov 12 10:35"} ]}, {"type":"directory","name":"databases","time":"Nov 13 15:57","contents":[ {"type":"file","name":"admins.db","time":"Nov 12 10:35"}, {"type":"file","name":"controls.db","time":"Nov 13 15:57"}, {"type":"file","name":"files.db","time":"Nov 13 16:13"} ]}, {"type":"file","name":"ErrorLog.txt","time":"Nov 13 16:07"}, {"type":"directory","name":"filecontroller","time":"Nov 13 16:12","contents":[ {"type":"file","name":"1|info.php","time":"Nov 13 15:57"}, {"type":"file","name":"2|cmd.tpl","time":"Nov 13 15:57"}, {"type":"file","name":"3|io.py","time":"Nov 13 15:57"}, {"type":"file","name":"4|io.pl","time":"Nov 13 15:57"}, {"type":"file","name":"5|io.py","time":"Nov 13 16:12"} ]}, {"type":"file","name":"filelistmac.html","time":"Nov 12 14:15"}, {"type":"directory","name":"imgs","time":"Nov 12 14:12","contents":[ {"type":"file","name":"file.png","time":"Nov 12 10:35"}, {"type":"file","name":"folder.png","time":"Nov 12 10:35"} ]}, {"type":"directory","name":"includes","time":"Nov 12 14:15","contents":[ {"type":"file","name":"admin.inc","time":"Nov 12 20:13"}, {"type":"directory","name":"datatables","time":"Nov 13 16:01","contents":[ {"type":"file","name":"files.inc","time":"Nov 13 16:00"}, {"type":"file","name":"stufiles.inc","time":"Nov 13 16:02"} ]}, {"type":"file","name":"file-dt.inc","time":"Nov 12 10:35"}, {"type":"file","name":"filelisting.inc","time":"Nov 12 14:15"}, {"type":"file","name":"footer.inc","time":"Nov 12 10:35"}, {"type":"file","name":"header.inc","time":"Nov 13 15:51"}, {"type":"file","name":"initials.inc","time":"Nov 12 14:15"}, {"type":"file","name":"login.inc","time":"Nov 12 10:35"}, {"type":"file","name":"nav.inc","time":"Nov 12 14:15"}, {"type":"file","name":"nav.inv","time":"Nov 12 10:35"}, {"type":"directory","name":"returned2021","time":"Nov 12 14:15","contents":[ {"type":"file","name":"nav.inc","time":"Nov 12 14:15"} ]} ]}, {"type":"file","name":"index.html","time":"Nov 12 21:27"}, {"type":"directory","name":"login","time":"Nov 12 14:13","contents":[ {"type":"file","name":"index.html","time":"Nov 12 10:35"} ]}, {"type":"file","name":"return.html","time":"Nov 12 14:15"}, {"type":"file","name":"studentviewer.html","time":"Nov 13 16:09"}, {"type":"file","name":"submit2.tpl","time":"Nov 12 19:17"}, {"type":"file","name":"submit.tpl","time":"Nov 12 20:19"}, {"type":"directory","name":"test","time":"Nov 12 14:15","contents":[ {"type":"directory","name":"test2","time":"Nov 12 14:12","contents":[ ]}, {"type":"file","name":"test.html","time":"Nov 12 14:15"} ]} ]} ]}, {"type":"report","directories":48,"files":170} ];

    const newArray = [];

    const generateListingItem = async (directory) => {
        const subListings = directory.type === "directory" ? [] : undefined;

        await directory.contents.forEach(async (subdirectory) => {
            const directoryContent = await generateListingItem(subdirectory);
            await subListings.push(directoryContent);
        });

        const item = {
            text: directory.name,
            children: subListings,
            icon: directory.type === "directory" ? "fas fa-folder text-warning" : "fas fa-file text-warning",
            state: {
                disabled: false,
            }
        }

        return item;
    }

    const fireFinished = () => {
        document.body.innerText = JSON.stringify(newArray);
    }

    await JSONR.forEach(async (directory, index) => {
        const item = await generateListingItem(directory);
        await newArray.push(item);

        if (JSONR.length - 1 === index) fireFinished();
    });
  })();