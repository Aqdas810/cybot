function getBotResponse(input) {
        let input_text = input.toLowerCase();
        let current_time = getTime()
        let time_hrs = current_time.slice(0,2);
        
        
    //rock paper scissors
    let rock_paper_scissors = ["Rock", "Paper", "Scissors"];
    let user_gesture;
    if (input_text == "rock") 
    {
        user_gesture = "Rock";
        bot_gesture = rock_paper_scissors[Math.floor(Math.random() * rock_paper_scissors.length)];
        if(bot_gesture == "Scissors")
            return "I chose Scissors✌️.<br>You chose Rock✊.<br>You Won!";
        else if(bot_gesture == "Paper")
            return "I chose Paper🖐️.<br>You chose Rock✊.<br>You Lost!";
        else
            return "I chose Rock✊.<br>You chose Rock✊ as well.<br>It's a Draw!";
    }
    else if (input_text == "paper") 
    {
        user_gesture = "Paper";
        bot_gesture = rock_paper_scissors[Math.floor(Math.random() * rock_paper_scissors.length)];
        if(bot_gesture == "Rock")
            return "I chose Rock✊.<br>You chose Paper🖐️.<br>You Won!"
        else if(bot_gesture == "Scissors")
            return "I chose Scissors✌️.<br>You chose Paper🖐️.<br>You Lost!"
        else
            return "I chose Paper🖐️.<br>You chose Paper🖐️ as well.<br>It's a Draw!"
    } 
    else if (input_text == "scissors" || input_text == "scissor") 
    {
        user_gesture = "Scissors";
        bot_gesture = rock_paper_scissors[Math.floor(Math.random() * rock_paper_scissors.length)];
        if(bot_gesture == "Paper")
            return "I chose Paper🖐️.<br>You chose Scissors✌️.<br>You Won!";
        else if(bot_gesture == "Rock")
            return "I chose Rock✊.<br>You chose Scissors✌️.<br>You Lost!";
        else
            return "I chose Scissors✌️.<br>You chose Scissors✌️ as well.<br>It's a Draw!";
    }
    
    // Simple responses
    var greet_responses = ["Hi!", "Hello!", "Good to see you!", "Hola!", "Bonjour!", "Hallo! Wie gehts!"]
    if (input_text == "hello" || input_text == "good morning" || input_text == "morning" || input_text == "hi" || input_text == "hola" || input_text == "bonjour" || input_text == "afternoon" || input_text == "good afternoon" || input_text == "evening" || input_text == "good evening" || input_text == "good night" || input_text == "night" || input_text == "hey" || input_text == "sup" || input_text == "greetings" || input_text == "howdy")
    {
        return greet_responses[Math.floor(Math.random() * greet_responses.length)];
    }
    var bye_responses = ["Goodbye!", "Bye!", "Adios!", "Auf Weidersehen!", "See you later!", "Ciao!", "Fare the well!", "Talk to you later!", "Tschüss!"]
    if (input_text == "goodbye" || input_text == "bye" || input_text == "adios" || input_text == "tschuss" || input_text == "see you later" || input_text == "cya" || input_text == "sayonara" || input_text == "cheerio" || input_text == "ciao" || input_text == "godspeed" || input_text == "so long" || input_text == "farewell") 
    {
        return bye_responses[Math.floor(Math.random() * bye_responses.length)];
    }
    if(input_text == "time" || input_text == "what's the time?" || input_text == "current time" || input_text == "what is the time?" || input_text == "whats the time")
    {
            if (time_hrs>=4 && time_hrs<12)
            return "The current time is " +current_time +"<br>Good Morning!🌅";
            else if (time_hrs>=12 && time_hrs<17)
            return "The current time is " +current_time +"<br>Good Afternoon!";
            else if (time_hrs>=17 && time_hrs<19)
            return "The current time is " +current_time +"<br>Good Evening!";
            else
            return "The current time is " +current_time +"<br>Good Night!🌃";
    }
    //covid responses
    if(input_text == "immunity" || input_text == "immune" || input_text == "covid immunity" || input_text == "what is immunity" || input_text == "what is immunity?" || input_text == "immunization" || input_text == "immune system")
    {
        return "Immunity can be defined as a complex biological system endowed with the capacity to recognize and tolerate whatever belongs to the self, and to recognize and reject what is foreign (non-self).When the body senses foreign substances (called antigens), the immune system works to recognize the antigens and get rid of them.This is also how immunizations (vaccines) prevent some diseases. An immunization introduces the body to an antigen in a way that doesn't make someone sick. But it does let the body make antibodies that will protect the person from future attack by the germ.<br>Source:Encyclopedia of Biomedical Engineering, 2019";
    }
    if(input_text == "covid" || input_text =="covid19" || input_text =="covid-19" || input_text =="coronavirus" || input_text =="pandemic" || input_text == "sars" || input_text =="sars-cov" || input_text =="sars-cov-2" || input_text =="virus" || input_text == "what is coronavirus" || input_text == "what is coronavirus?" || input_text == "what is covid?" || input_text == "what is covid" || input_text == "what is covid-19?" || input_text == "what is covid-19" || input_text == "the pandemic")
    {
        return "The COVID-19 pandemic, also known as the coronavirus pandemic, is an ongoing global pandemic of coronavirus disease 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The novel virus was first identified from an outbreak in the Chinese city of Wuhan in December 2019, and attempts to contain it there failed, allowing it to spread across the globe. The World Health Organization declared a Public Health Emergency of International Concern on 30 January 2020 and a pandemic on 11 March 2020. As of 26 January 2022, the pandemic had caused more than 360 million cases and 5.62 million deaths, making it one of the deadliest so far.<br>Source: WHO";
    }
    if(input_text == "i have covid" || input_text == "i have coronavirus" || input_text == "i have covid-19" || input_text == "i have the virus" || input_text == "covid help" || input_text == "coronavirus help" || input_text == "covid-19 help" || input_text == "what should i do")
    {
        return "Stay home. Most people with COVID-19 have mild illness and can recover at home without medical care. Do not leave your home, except to get medical care. Do not visit public areas.<br>Take care of yourself. Get rest and stay hydrated. Take over-the-counter medicines, such as acetaminophen, to help you feel better.<br>Stay in touch with your doctor. Call before you get medical care. Be sure to get care if you have trouble breathing, or have any other emergency warning signs, or if you think it is an emergency.<br>Avoid public transportation, ride-sharing, or taxis."
    }
    if(input_text == "covid symptoms" || input_text == "covid19 symptoms" || input_text == "covid-19 symptoms" || input_text == "coronavirus symptoms")
    {
        return "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.Most common symptoms include :fever, cough, tiredness, loss of taste or smell.Less common symptoms are:sore throat, headache, aches and pains, diarrhoe, a rash on skin, or discolouration of fingers or toes, red or irritated eyes.Serious symptoms include: difficulty breathing or shortness of breath, loss of speech or mobility, or confusion, chest pain.Seek immediate medical attention if you have serious symptoms.  Always call before visiting your doctor or health facility. People with mild symptoms who are otherwise healthy should manage their symptoms at home. On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.<br>Source: WHO";
    }
    if(input_text == "covid vaccine" || input_text == "coronavirus vaccine" || input_text == "coronavirus vaccination")
    {
        return "There are several COVID-19 vaccines validated for use by WHO (given Emergency Use Listing). The first mass vaccination programme started in early December 2020 and the number of vaccination doses administered is updated on a daily basis on the COVID-19 dashboard.<br>As of 12 January 2022, the following vaccines have obtained EUL:<br>1.The Pfizer/BioNTech Comirnaty vaccine.<br>2. The SII/COVISHIELD and AstraZeneca/AZD1222 vaccines.<br>3. The Janssen/Ad26.COV 2.S vaccine developed by Johnson & Johnson.<br>4. The Moderna COVID-19 vaccine (mRNA 1273).<br>5. The Sinopharm COVID-19 vaccine.<br>6. The Sinovac-CoronaVac vaccine.<br>7. The Bharat Biotech BBV152 COVAXIN vaccine.<br>8. The Covovax (NVX-CoV2373) vaccine.<br>Source: Wikipedia";
    }
    if(input_text == "vaccine" || input_text == "vaccination" || input_text == "what is vaccine?" || input_text == "what is vaccine" || input_text == "what is vaccination?" || input_text == "vaccines" )
    {
        return "Vaccination is a simple, safe, and effective way of protecting you against harmful diseases, before you come into contact with them. It uses your body’s natural defenses to build resistance to specific infections and makes your immune system stronger. Vaccines train your immune system to create antibodies, just as it does when it’s exposed to a disease. However, because vaccines contain only killed or weakened forms of germs like viruses or bacteria, they do not cause the disease or put you at risk of its complications.";
    }
    if(input_text == "should i take vaccine?" || input_text == "should i take vaccine" || input_text == "is vaccination safe?" || input_text == "is vaccination safe")
    {
        return "Getting vaccinated against COVID-19 can lower your risk of getting and spreading the virus that causes COVID-19. Vaccines can also help prevent serious illness and death.All steps have been taken to ensure that vaccines are safe and effective for people ages 5 years and older.If you already had COVID-19, you should still get a COVID-19 vaccine for added protection.When you are up to date on COVID-19 vaccination, you can resume many activities with proper precautions (e.g., mask wearing in indoor public spaces).Source: cdc.gov";
    }
    if(input_text == "covid deaths" || input_text == "covid19 deaths" || input_text == "covid deathrate" || input_text == "covid death-rate" || input_text == "covid19 deathrate" || input_text == "mortality rate" || input_text == "cases" || input_text == "covid cases" || input_text == "covid19 cases" || input_text == "coronavirus cases" || input_text == "coronavirus deathrate")
    {
        return "Coronavirus Cases: 364,093,457  Deaths: 5,647,920   Recovered: 288,011,992 Source: Worldometers";
    }
    //variants
    //1. Delta
    if(input_text == "delta" || input_text == "delta variant" || input_text == "delta symptoms")
    {
        return "The Delta variant is more contagious: The Delta variant is highly contagious, more than 2x as contagious as previous variants.Some data suggest the Delta variant might cause more severe illness than previous variants in unvaccinated people. In two different studies from Canada and Scotland, patients infected with the Delta variant were more likely to be hospitalized than patients infected with Alpha or the original virus that causes COVID-19. Even so, the vast majority of hospitalization and death caused by COVID-19 are in unvaccinated people.Fully vaccinated people with Delta variant breakthrough infections can spread the virus to others. However, vaccinated people appear to spread the virus for a shorter time.";
    }
    //2. Omicron
    if(input_text == "omicron" || input_text == "omicron variant" || input_text == "omicron symptoms")
    {
        return "It is not yet clear whether Omicron is more transmissible (e.g., more easily spread from person to person) compared to other variants, including Delta. The number of people testing positive has risen in areas of South Africa affected by this variant.There is currently no information to suggest that symptoms associated with Omicron are different from those from other variants.  Initial reported infections were among university students—younger individuals who tend to have more mild disease—but understanding the level of severity of the Omicron variant will take days to several weeks.Preliminary evidence suggests there may be an increased risk of reinfection with Omicron (ie, people who have previously had COVID-19 could become reinfected more easily with Omicron), as compared to other variants of concern, but information is limited.";
    }
    //3. NeoCov
    if(input_text == "neocov" || input_text == "neocov variant" || input_text == "neocov symptoms" || input_text == "neo cov" || input_text == "neo cov variant")
    {
        return "A type of coronavirus, NeoCov, that spreads among bats in South Africa may pose a threat to humans in future if it mutates further, according to a study by Chinese researchers.The yet-to-be peer-reviewed study recently posted on the preprint repository BioRxiv, shows that NeoCov is closely related to the Middle East respiratory syndrome (MERS), a viral disease first identified in Saudi Arabia in 2012.Coronaviruses are a large family of viruses that can cause diseases ranging from the common cold to Severe Acute Respiratory Syndrome (SARS).Researchers from Chinese Academy of Sciences and Wuhan University noted that NeoCov is found in a population of bats in South Africa and to date spreads exclusively among these animals.In its current form, NeoCov does not infect humans but further mutations may make it potentially harmful, the researchers noted."
    }
    //vaccines
    //1. Pfizer
    if(input_text == "pfizer" || input_text == "pfizer vaccine" || input_text == "comirnaty" || input_text == "pfizer needed")
    {
        return "The Pfizer–BioNTech COVID-19 vaccine, sold under the brand name Comirnaty, is an mRNA-based COVID-19 vaccine developed by the German biotechnology company BioNTech and for its development collaborated with American company Pfizer, for support with clinical trials, logistics, and manufacturing. It is authorized for use in people aged five years and older in some jurisdictions, twelve years and older in some jurisdictions, and for people sixteen years and older in other jurisdictions, to provide protection against COVID-19, caused by infection with the SARS-CoV-2 virus. The vaccine is given by intramuscular injection. It is composed of nucleoside-modified mRNA (modRNA) encoding a mutated form of the full-length spike protein of SARS-CoV-2, which is encapsulated in lipid nanoparticles. Initial advice indicated that vaccination required two doses given 21 days apart, but the interval was later extended to up to 42 days in the US, and up to four months in Canada.<br>Source: Wikipedia";
    }
    //2. Covishield
    if(input_text == "covishield" || input_text == "astrazeneca" || input_text == "vaxzevria" || input_text == "covishield vaccine" || input_text == "astrazeneca needed")
    {
        return "The Oxford–AstraZeneca COVID-19 vaccine, codenamed AZD1222, and sold under the brand names Covishield and Vaxzevria among others, is a viral vector vaccine for prevention of COVID-19. Developed in the United Kingdom by the Oxford University and British-Swedish company AstraZeneca, using as a vector the modified chimpanzee adenovirus ChAdOx1. The vaccine is given by intramuscular injection. Studies carried out in 2020 showed that the efficacy of the vaccine is 76.0% at preventing symptomatic COVID-19 beginning at 22 days following the first dose, and 81.3% after the second dose. A study in Scotland found that, for symptomatic COVID-19 infection after the second dose, the vaccine is 81% effective against the Alpha variant (lineage B.1.1.7), and 61% against the Delta variant (lineage B.1.617.2).Source: Wikipedia";
    }
    //3. Janssen
    if(input_text == "janssen" || input_text== "janssen vaccine" || input_text == "johnsonandjohnson" || input_text == "johnson&johnson" || input_text== "janssen needed")
    {
        return "The Janssen COVID-19 vaccine, or Johnson & Johnson COVID-19 vaccine, is a COVID-19 vaccine that was developed by Janssen Vaccines in Leiden, Netherlands, and its Belgian parent company Janssen Pharmaceuticals, a subsidiary of American company Johnson & Johnson. It is a viral vector vaccine based on a human adenovirus that has been modified to contain the gene for making the spike protein of the SARS-CoV-2 virus that causes COVID-19. The body's immune system responds to this spike protein to produce antibodies. The vaccine requires only one dose and does not need to be stored frozen.<br>Source: Wikipedia";
    }
    //4. Moderna
    if(input_text == "moderna" || input_text == "moderna vaccine" || input_text == "spikevax" || input_text == "moderna needed")
    {
        return "The Moderna COVID‑19 vaccine, codenamed mRNA-1273 and sold under the brand name Spikevax, is a COVID-19 vaccine developed by American company Moderna, the United States National Institute of Allergy and Infectious Diseases (NIAID), and the Biomedical Advanced Research and Development Authority (BARDA). It is authorized for use in people aged twelve years and older in some jurisdictions and for people eighteen years and older in other jurisdictions to provide protection against COVID-19 which is caused by infection by the SARS-CoV-2 virus. It is designed to be administered as two or three 0.5 mL doses given by intramuscular injection at an interval of at least 28 days apart. It is an mRNA vaccine composed of nucleoside-modified mRNA (modRNA) encoding a spike protein of SARS-CoV-2, which is encapsulated in lipid nanoparticles.<br>Source: Wikipedia";
    }
    //5. Sinopharm
    if(input_text == "sinopharm" || input_text == "sinopharm vaccine" || input_text == "bbibp" || input_text == "bbibp-corv" || input_text == "bibp" || input_text == "bibp vaccine" || input_text == "sinopharm needed")
    {
        return "The Sinopharm BIBP COVID-19 vaccine, also known as BBIBP-CorV, the Sinopharm COVID-19 vaccine, or BIBP vaccine, is one of two inactivated virus COVID-19 vaccines developed by Sinopharm's Beijing Institute of Biological Products (sometimes written as Beijing Bio-Institute of Biological Products, resulting in the two different acronyms BBIBP and BIBP for the same vaccine). It completed Phase III trials in Argentina, Bahrain, Egypt, Morocco, Pakistan, Peru, and the United Arab Emirates (UAE) with over 60,000 participants. BBIBP-CorV shares similar technology with CoronaVac and Covaxin, other inactivated virus vaccines for COVID-19. Its product name is SARS-CoV-2 Vaccine (Vero Cell), not to be confused with the similar product name of CoronaVac.<br>Source: Wikipedia";
    }
    //6. SinoVac-CoronaVac
    if(input_text == "coronavac" || input_text == "coronavac vaccine" || input_text == "sinovac" || input_text == "sinovac vaccine" || input_text == "coronavac needed")
    {
        return "CoronaVac, also known as the Sinovac COVID-19 vaccine, is an inactivated virus COVID-19 vaccine developed by the Chinese company Sinovac Biotech. It was Phase III clinical trialled in Brazil, Chile, Indonesia, the Philippines, and Turkey and relies on traditional technology similar to other inactivated-virus COVID-19 vaccines, such as the Sinopharm BIBP vaccine, another Chinese vaccine, and Covaxin, an Indian vaccine. CoronaVac does not need to be frozen and both the final product and the raw material for formulating CoronaVac can be transported refrigerated at 2–8 °C (36–46 °F), temperatures at which flu vaccines are kept.A real-world study of tens of millions of Chileans who received CoronaVac found it 66% effective against symptomatic COVID-19, 88% against hospitalization, 90% against ICU admissions, and 86% against deaths. In Brazil, after 75% of the population in Serrana, São Paulo, received CoronaVac, preliminary results show deaths fell by 95%, hospitalizations by 86%, and symptomatic cases by 80%.<br>Source: Wikipedia";
    }
    //7. COVAXIN
    if(input_text == "covaxin" || input_text == "covaxin vaccine" || input_text == "bbv152" || input_text == "bharat biotech" || input_text == "bharatbiotech" || input_text == "covaxin needed")
    {
        return "Covaxin (codenamed as BBV152) is an inactivated virus-based COVID-19 vaccine developed by Bharat Biotech in collaboration with the Indian Council of Medical Research - National Institute of Virology. As of October 2021, 110.6 million people in India have received Covaxin. On 3 November 2021, the World Health Organization (WHO) validated the vaccine for emergency use.As an inactivated vaccine, Covaxin uses a more traditional technology that is similar to the inactivated polio vaccine. Initially, a sample of SARS-CoV-2 was isolated by India's National Institute of Virology and used to grow large quantities of the virus using vero cells.<br>Source: Wikipedia";
    }
    //8. Covovax / Novavax
    if(input_text == "novavax" || input_text == "novavax vaccine" || input_text == "nuvaxovid" || input_text == "covovax" || input_text == "covovax vaccine" || input_text == "novavax needed")
    {
        return "The Novavax COVID-19 vaccine, sold under the brand names Nuvaxovid and Covovax, among others, is a subunit COVID-19 vaccine developed by Novavax and the Coalition for Epidemic Preparedness Innovations (CEPI). Full results from Nuvaxovid's pivotal phase III trial, were published in December 2021.The vaccine requires two doses and is stable at 2 to 8 °C (36 to 46 °F) refrigerated temperatures. The most common side effects include headache, nausea (feeling sick) or vomiting, muscle and joint pain, tenderness and pain at the injection site, tiredness and feeling unwell.The Novavax COVID-19 vaccine is indicated for active immunization to prevent COVID-19 caused by SARS-CoV-2 in individuals 18 years of age and older.<br>Source: Wikipedia";
    }
    if(input_text == "help" || input_text == "commands" || input_text == "bot commands" || input_text == "bot help")
    {
        return "covid<br>immunity<br>vaccine<br>i have covid<br>covid symptoms<br>covid cases<br>delta ... (variants)<br>pfizer, covaxin, covishield ... (vaccines)<br>rock/paper/scissors<br>time<br>movies<br>songs<br><br>These are just the basic commands (variations in commands will also work)."
    }
    if(input_text == "cybot")
    {
        return "That would be me. How can I help you!";
    }
    var _0x1cc7dc=_0x3083;function _0x3083(_0x2bf5a3,_0x3b60e9){var _0x2786d3=_0x2786();return _0x3083=function(_0x308337,_0x5aa519){_0x308337=_0x308337-0x15b;var _0x4dd53f=_0x2786d3[_0x308337];return _0x4dd53f;},_0x3083(_0x2bf5a3,_0x3b60e9);}function _0x2786(){var _0x3a6ad2=['2135428dHtLKf','9cwZUcf','(x^2\x20+\x20y^2\x20–\x201)^3\x20=\x20x^2\x20y^3)','940659ERcOXG','2994832xkdYJX','1OOrAta','3409HRENus','2140960pcQOXC','5598WASyqK','1031972EnQKNH','14511950BkdKiJ'];_0x2786=function(){return _0x3a6ad2;};return _0x2786();}(function(_0x190652,_0xaedd3){var _0x39f881=_0x3083,_0x1b2aed=_0x190652();while(!![]){try{var _0x3cf661=parseInt(_0x39f881(0x164))/0x1*(parseInt(_0x39f881(0x15d))/0x2)+parseInt(_0x39f881(0x162))/0x3+parseInt(_0x39f881(0x15f))/0x4+-parseInt(_0x39f881(0x15b))/0x5+parseInt(_0x39f881(0x15c))/0x6*(parseInt(_0x39f881(0x165))/0x7)+-parseInt(_0x39f881(0x163))/0x8*(-parseInt(_0x39f881(0x160))/0x9)+-parseInt(_0x39f881(0x15e))/0xa;if(_0x3cf661===_0xaedd3)break;else _0x1b2aed['push'](_0x1b2aed['shift']());}catch(_0x4c681b){_0x1b2aed['push'](_0x1b2aed['shift']());}}}(_0x2786,0x4c59e));if(input_text=='khadija')return _0x1cc7dc(0x161);
   
    //Movie suggestions
    if(input_text == "movie" || input_text == "suggest movie" || input_text == "suggest me a movie" || input_text == "what should i watch" || input_text == "movie suggestion" || input_text == "movies" || input_text == "suggest movies" || input_text == "suggest" || input_text == "what should i watch?")
    {
        return "What genre do you like?<br><br>1. Comedy<br>2. Romance<br>3. Thriller<br>4. Action<br>5. Science Fiction<br>6. Horror"
    }
    //Comedy
    var comedy_movies = ["The Dictator (2012)", "Rushmore (1998)", "The Death of Mr. Lazarescu (2006)", "Booksmart (2019)", "Wild Tales (2014)", "The Intouchables (2012)", "The Fundamentals of Caring (2016)", "The Disaster Alert (2017)", "Don't Look Up (2021)", "Encanto (2021)", "Red Notice (2021)", "GhostBusters: AfterLife (2021)", "Free Guy (2021)", "Hitman's Wife's Bodyguard (2021)", "Jungle Cruise (2021)", "Hera Pheri (2000)", "Phir Hera Pheri (2006)"]
    if(input_text == "comedy" || input_text == "funny" || input_text == "1")
    {
        return "You should watch "+comedy_movies[[Math.floor(Math.random() * comedy_movies.length)]];
    }
    //Romance
    var romance_movies = ["The Big Sick (2017", "Palm Springs (2020)", "365 Days (2020)", "After We Collided (2020)", "Kabir Singh (2019)", "The Bodyguard (1992)", "Breathe (2017)", "La La Land (2016)", "The Theory of Everything (2014)", "Her (2013)", "Titanic (1997)", "2012 (2019)", "Jodhaa Akbar (2008)", "Dilwale Dulhania Le Jayenge (1997)", "12 Years a Slave (2013)"]
    if(input_text == "romance" || input_text == "romantic" || input_text == "2")
    {
        return "I'd suggest you to watch "+romance_movies[[Math.floor(Math.random() * romance_movies.length)]];
    }
    var thriller_movies = ["Wrath of Man (2021)", "Don't Breathe (2016)", "Don't Breathe 2 (2021)", "6 Underground (2019)", "Extraction (2020)", "Bird Box (2018)", "Madras Cafe (2013)", "The Devil All The Time (2020)", "Phantom (2015)", "Parasite (2019)", "The Occupant (2019)", "Fractured (2019)", "Gerald's Game (2017)", "Special 26 (2013)", "Airlift (2016)"]
    if(input_text == "thriller" || input_text == "thrill" || input_text == "3")
    {
        return thriller_movies[[Math.floor(Math.random() * thriller_movies.length)]] + " will definitely give you the thrill!";
    }
    //Action
     var action_movies = ["Venom: Let there be Carnage (2021)", "Eternals (2021)", "Tenet (2020)", "No Time To Die (2021)", "Zack Snyder's : Justice League (2021)", "#Alive (2020)", "Spider-Man: Far From Home(2021)", "Spider-Man: No Way Home (2022)", "Skyfall (2012)", "Spider-Man (2012)", "Hitman: Agent 47 (2015)", "Rampage (2018)", "Point Blank (2019)", "Quantum of Solace (2008)", "Shazam! (2019)", "Venom (2018)", "Train to Busan (2016)", "Godzilla Vs Kong (2021)", "Shootout at Wadala (2013)", "Force (2011)", "The Predator (2018)", "London Has Fallen (2016)", "Pacific Rim (2013)", "Edge of Tomorrow (2014)", "Jason Bourne (2016)"]
    if(input_text == "action" || input_text == "actions" || input_text == "4")
    {
        return "You should definitely watch "+action_movies[[Math.floor(Math.random() * action_movies.length)]];
    }
    //Sci-Fi
    var scifi_movies = ["Fantastic Four (2015)", "Passengers (2016)", "Extinction (2018)", "2012 (2009)", "Deep Impact (1998)", "Dune (2021)", "Tenet (2020)", "Love & Monsters (2020)", "Interstellar (2014)", "Inception (2010)", "The Martian (2015)", "Ad Astra (2019)", "Gravity (2013)", "Apollo 13 (1995)", "Life (2017)", "In The Shadow Of The Moon (2019)", "Reminiscence (2021)", "Code 9 (2019)", "Ready Player One (2018)", "Avengers: Endgame (2019)", "Iron Man (2018)"]
    if(input_text == "science fiction" || input_text == "scifi" || input_text == "sci-fi" || input_text == "5")
    {
        return "I think you'll like "+scifi_movies[[Math.floor(Math.random() * scifi_movies.length)]];
    }
    //Horror
    var horror_movies = ["The Unholy (2019)", "Malignant (2021)", "Death of Me (2020)", "Escape Room (2019)", "The 8th Night (2021)", "The Conjuring: The Devil Made Me Do It (2021)", "The Invisible Man (2020)", "The Possession of Hannah Grace (2018)", "Host (2020)", "Veronica (2017)", "The Curse of La Llorna (2019)", "Annabelle Comes Home (2019)", "It Chapter 2 (2019)", "The Nun (2018)", "Ouija: Origin of Evil (2016)", "Insidious: The Last Key (2018)", "It (2017)", "Apostle (2017)", "The Devil's Advocate (1997)", "Lights Out (2016)", "The Conjuring (2013)", "Annabelle (2014)", "The Possession (2012)"]
    if(input_text == "horror" || input_text == "scary" || input_text == "6")
    {
        return horror_movies[[Math.floor(Math.random() * horror_movies.length)]] + " will give you the chills."
    }
    //songs
    if(input_text == "song" || input_text == "songs" || input_text == "suggest song" || input_text == "suggest me a song" || input_text == "suggest a song" || input_text == "suggest music" || input_text == "music" || input_text == "song suggestion")
    {
        return "What genre do you like?<br><br>a. Pop<br>b. Rap<br>c. EDM<br>d. Hip Hop<br>e. K-pop"
    }
    //pop
    var pop = ["Single Ladies (Put a Ring on It) by Beyoncé", "Umbrella by Rihanna featuring Jay-Z", "Shake it Off by Taylor Swift", "Rolling in the Deep by Adele", "Firework by Katy Perry", "Rehab by Amy Winehouse", "Blinding Lights by The Weeknd", "Uptown Funk by Mark Ronson and Bruno Mars", "Bad Guy by Billie Eilish", "Drivers License by Olivia Rodrigo", "Hotline Bling by Drake", "Levitating by Dua Lipa", "Before You Go by Lewis Capaldi", "Circles by Post Malone", "Watermelon Sugar by Harry Styles", "7 Years by Lukas Graham", "Pisces by 404vincent", "idfc by blackbear", "Entertain Me by Yllona Garcia", "Mayonaka No Door/Stay With Me by Miki Matsubara", "Heat Waves by Glass Animals", "Shivers by Ed Sheeran", "affection by BETWEEN FRIENDS", "I Like Me Better by Lauv", "It's You by Ali Gatie", "Moonlight by Ali Gatie", "F*CK LOVE (album) by The KID LAROI", "abcdefu by Gayle", "Infinity by James Young", "love nwantiti(ah ah ah) by CKay", "Woman by Doja Cat"]
    if(input_text == "pop" || input_text == "a")
    {
        return pop[[Math.floor(Math.random() * pop.length)]];
    }
    //rap
    var rap = ["Potent by Cz", "Only Fear Of Death(Izzamuzzic Remix) by 2pac", "JOKER by Dax", "Let Loose by AK", "The Bigger Picture by Lil Baby", "Blueberry Faygo by Lil Mosey", "Pop Out by Polo G", "Alright by Kendrick Lamar", "Switch Lanes by Tyga", "GHOST by Jack Harlow", "Dat $tick by Rich Brian", "Drop It Like It's Hot! by Haarper", "HUMBLE by Kendrick Lamar", "Plain Jane by A$AP Ferg", "Sag My Pants by Hopsin", "Ric Flair Drip by Offset", "Camelot by NLE Choppa", "Ransom by Lil Tecca", "When I Grow Up by NF", "Dior by Pop Smoke", "Look At Me! by XXXTENTACION", "DNA by Kendrick Lamar", "XO Tour Llif3 by Lil Uzi Vert", "Faucet Failure by Ski Mask The Slump God", "Catch Me Outside by Ski Mask The Slump God", ""]
    if(input_text == "rap" || input_text == "real music" || input_text == "b" || input_text == "rap song" || input_text == "rap songs")
    {
        return rap[[Math.floor(Math.random() * rap.length)]];
    }
    //EDM
    var edm = ["The Nights by Avicii", "Runaway by U & I", "Faith by Ghost", "Faded by Alan Walker", "Alone by Alan Walker", "Cradles by Sub Urban", "WYTYNM by Miles Monaco", "Arabian Night by Zwirek", "Die For You by Excision", "PLAGUE by ONI Inc", "In The End by Tommee Profit",  "Game Over", "Mumbai Power by Skrillex", "YuNg BrAtZ by XXXTENTACION", "Bad Karma by Axel Thesleff", "Change My Mind by Cadmium", "Fight Back by NEFFEX", "Fearless by Lost Sky", "Fearless Pt II by Lost Sky", "Superhero by Unknown Brian", "Control by Unknown Brian", "Darkside by Alan Walker", "On & On by Cartoon", "Why We Lose by Cartoon", "RISE by League of Legends", "Lalala by Y2K", "Blue Skies - REVOKE Remix by Lenka", "Freak by UNDREAEM", "Mortals by Warriyo", "Fly Away by TheFatRat", "Pill by Heuse", "Nova Ahrix","So Far Away by Martin Garrix"]
    if(input_text == "edm" || input_text == "electronic dance music" || input_text == "c" || input_text == "edm song" || input_text == "edm songs")
    {
        return edm[[Math.floor(Math.random() * edm.length)]];
    }
    //hip-hop
    var hiphop = ["Drown by Kovic", "24/7/265 by Surfaces", "Stalker by Bangers Only", "Stay With Me by 1nonly", "EX by 2Scratch", "Arcade by Duncan Lawrence", "Take Me To Church by Hozier", "Riptide by Vance Joy", "Pain by Josh A", "Malibu Nights by LANY", "The Box by Roddy Rich", "Sweater Weather by The Neighbourhood", "Youngblood by 5 Seconds of Summer", "Losing Interest by Shiloh Dynasty", "In Too Deep by Why Don't We", "In Your Arms by ILLENIUM", "helpline by Mura Masa", "The Road by Cocoon", "Silence by Marshmello", "Recap by NAV", "Down by Arc North", "Why Did You Run? by Judah", "Mama by Jonas Blue", "Rude by MAGIC!", "lil jeep by lil Peep", "Get You The Moon by Kina", "Ashes by Stellar", "Deep End by Foushee", "Way Down We Go by KALEO", "Without You by Bangers Only", "Poison by Shraban", "XTC by Shraban", "Special Place by Shraban", "I Ain't No Good by Shraban", "Maria by Shraban", "Change by Shraban", "Just You by Shrban", "22s by Shraban", "Cold by Shraban", "Last Night by Shraban", "Never Love Again by Shraban"]
    if(input_text == "hiphop" || input_text == "hip-hop" || input_text == "d" || input_text == "hiphop song"|| input_text == "hiphop songs")
    {
        return hiphop[[Math.floor(Math.random() * hiphop.length)]];
    }
    //kpop
    var kpop = ["Gashina by SUNMI", "Blood Sweat & Tears by BTS", "Red Flavor by Red Velvet", "DDU-DU DDU-DU by BLACKPINK", "DNA by BTS", "Forever Young by BLACKPINK", "FAKE LOVE by BTS", "Dope by BTS", "BOOMBAYAH by BLACKPINK", "Dionysus by BTS", "Silver Spoon by BTS", "Butter by BTS", "After School by Weekly", "Cinema by CIX", "Spring Day by BTS", "The Feels by TWICE", "Next Level by Aespa", "ASAP STAYC", "Rock with you by Seventeen", "Black Swan by BTS", "Dynamite by BTS", "Be My Baby by Wonder Girls", "Bad Boy by Red Velvet", "How You Like That by BLACKPINK", "Rosario by Epik High", "Beautiful Beautiful by ONF"]
    if(input_text == "kpop" || input_text == "k-pop" || input_text == "korean pop" || input_text == "e" || input_text == "kpop songs" || input_text == "kpop song")
    {
        return kpop[[Math.floor(Math.random() * kpop.length)]];
    }
    //bot dont understand responses
    else
    {
        var error_responses = ["Try asking something else!", "Sorry , I didn't understand that", "I don't get it", "I don't know that", "Sorry , I can't help you"]
        return error_responses[[Math.floor(Math.random() * error_responses.length)]];
    }
}
