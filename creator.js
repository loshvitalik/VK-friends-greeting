// VK api query: VK.api("friends.get", {user_id: 51504079, order: 'random', name_case: 'acc', fields: 'bdate,sex,relation,city,education,personal'})
const friends = [
  {
    "id": 84049170,
    "first_name": "Дину",
    "last_name": "Долганову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "27.5",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 160246624,
    "first_name": "Машу",
    "last_name": "Есенину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "4.6.1999",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студентка (бакалавр)",
    "relation": 7,
    "personal": {
      "political": 4,
      "langs": ["Русский"],
      "inspired_by": "доброта, нежность, человеческие эмоции",
      "people_main": 1,
      "life_main": 1,
      "smoking": 4,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 44295822,
    "first_name": "Sergei",
    "last_name": "Khlebnikov",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "18.3.1998",
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 2,
    "relation_partner": {
      "id": 151951418,
      "first_name": "Кристина",
      "last_name": "Ефименко"
    },
    "personal": {
      "langs": ["Русский", "English"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 30312256,
    "first_name": "Валерию",
    "last_name": "Немычникову",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "11.7.1997",
    "city": {
      "id": 1,
      "title": "Москва"
    },
    "university": 297,
    "university_name": "МФТИ",
    "faculty": 27176,
    "faculty_name": "Факультет инноваций и высоких технологий",
    "graduation": 2019,
    "education_form": "Очное отделение",
    "education_status": "Студентка (бакалавр)",
    "relation": 2,
    "personal": {
      "langs": ["Русский", "English"],
      "religion": "Боконизм",
      "inspired_by": "любовь и математика, ординалы, немногие люди, многая музыка, кодить при свечах, Силаэдр, чай с лакрицей",
      "people_main": 0,
      "life_main": 5,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 95525542,
    "first_name": "Никиту",
    "last_name": "Аверьянова",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "7.7.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студент (бакалавр)",
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 2,
      "life_main": 0,
      "smoking": 4,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 44033746,
    "first_name": "Сергея",
    "last_name": "Матюхина",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "23.4.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 2020,
    "education_form": "Очное отделение",
    "education_status": "Студент (бакалавр)",
    "relation": 0,
    "personal": {
      "langs": ["Русский", "Deutsch", "English"],
      "inspired_by": "Дорогие для меня люди и музыка",
      "people_main": 6,
      "life_main": 3,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 38622253,
    "first_name": "Oleg",
    "last_name": "Lapshin",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "5.11.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 40904087,
    "first_name": "Евгения",
    "last_name": "Лощенко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "19.12",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 4,
    "personal": {
      "langs": ["Русский"],
      "smoking": 2,
      "alcohol": 2
    },
    "online": 0
  }, {
    "id": 97334212,
    "first_name": "Аду",
    "last_name": "Чурсину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "2.11",
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 2231176,
    "faculty_name": "Факультет международных отношений",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["English", "&#54620;&#44397;&#50612;"],
      "people_main": 0,
      "life_main": 5,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 97126488,
    "first_name": "Павла",
    "last_name": "Болдинова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "9.6",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 2020,
    "education_form": "Очное отделение",
    "education_status": "Студент (бакалавр)",
    "relation": 3,
    "relation_partner": {
      "id": 208519030,
      "first_name": "Анита",
      "last_name": "Шаймиева"
    },
    "personal": {
      "political": 3,
      "langs": ["Русский", "English"],
      "people_main": 2,
      "life_main": 1,
      "smoking": 2,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 92739830,
    "first_name": "Егора",
    "last_name": "Южакова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "12.5",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_status": "Студент (бакалавр)",
    "relation": 0,
    "personal": {
      "langs": ["Русский", "English", "Fran&#231;ais"],
      "religion": "Пастафарианство",
      "inspired_by": "Артур Blacksilver",
      "people_main": 6,
      "life_main": 1,
      "smoking": 1,
      "alcohol": 3
    },
    "online": 0
  }, {
    "id": 110132262,
    "first_name": "Владимира",
    "last_name": "Манна",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "8.9",
    "city": {
      "id": 1154288,
      "title": "Буланаш"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студент (бакалавр)",
    "relation": 2,
    "relation_partner": {
      "id": 86398935,
      "first_name": "Елена",
      "last_name": "Мотылёва"
    },
    "personal": {
      "langs": ["Русский"],
      "people_main": 1,
      "life_main": 6,
      "smoking": 1,
      "alcohol": 1
    },
    "online": 1
  }, {
    "id": 56643588,
    "first_name": "Анастасию",
    "last_name": "Кальченко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "8.10.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 10338,
    "university_name": "УГГУ (бывш. УГГГА)",
    "faculty": 36796,
    "faculty_name": "Горно-технологический факультет",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "people_main": 2,
      "life_main": 7,
      "smoking": 3,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 15903053,
    "first_name": "Артём",
    "last_name": "Попов",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "15.7",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский", "English", "Deutsch", "Fran&#231;ais"],
      "people_main": 1,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 51518425,
    "first_name": "Алину",
    "last_name": "Теплотанских",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "27.11",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "online": 0
  }, {
    "id": 56285947,
    "first_name": "Ларису",
    "last_name": "Лощенко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "online": 0,
    "lists": [29]
  }, {
    "id": 48536822,
    "first_name": "Светлану",
    "last_name": "Крючкову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "6.6.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 299731809,
    "first_name": "Киру",
    "last_name": "Ткаченко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "2.3.1993",
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"]
    },
    "online": 0
  }, {
    "id": 102919383,
    "first_name": "Анастасию",
    "last_name": "Козак",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "16.9",
    "city": {
      "id": 1573,
      "title": "Каменск-Уральский"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 2,
    "personal": {
      "langs": ["Русский"],
      "inspired_by": "Карандаш и Тетрадка с рисунками",
      "people_main": 2,
      "life_main": 1,
      "smoking": 2,
      "alcohol": 2
    },
    "online": 1
  }, {
    "id": 74416589,
    "first_name": "Алису",
    "last_name": "Сурову",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 1,
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 7,
    "personal": {
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 92191807,
    "first_name": "Евгения",
    "last_name": "Шакмаева",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "city": {
      "id": 9488,
      "title": "Рефтинский"
    },
    "online": 0
  }, {
    "id": 209503585,
    "first_name": "Василия",
    "last_name": "Савинкова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "24.3.1993",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 1189060,
    "university_name": "УГТУ-УПИ",
    "faculty": 2231205,
    "faculty_name": "Институт информатики, радиоэлектроники и связи (бывш. Радиотехнический институт, Радиотехнический факультет)",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студент (бакалавр)",
    "relation": 0,
    "online": 1
  }, {
    "id": 65731992,
    "first_name": "Веронику",
    "last_name": "Щукину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "30.8.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "relation": 7,
    "personal": {
      "political": 3,
      "langs": ["Русский"],
      "religion": "верю в бога"
    },
    "online": 0
  }, {
    "id": 39445946,
    "first_name": "Леру",
    "last_name": "Степанову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "13.5.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 1189058,
    "university_name": "УрГУ",
    "faculty": 2231176,
    "faculty_name": "Факультет международных отношений",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Абитуриентка",
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 251476542,
    "first_name": "Никиту",
    "last_name": "Ковалькова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "8.8",
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 7,
    "online": 0
  }, {
    "id": 127006466,
    "first_name": "Анастасию",
    "last_name": "Кравченко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "6.7.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 68600639,
    "first_name": "Анну",
    "last_name": "Лысенко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 2020,
    "education_form": "Очное отделение",
    "education_status": "Студентка (бакалавр)",
    "relation": 7,
    "relation_partner": {
      "id": 191226069,
      "first_name": "Андрей",
      "last_name": "Беспалов"
    },
    "personal": {
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 291045754,
    "first_name": "Марину",
    "last_name": "Быкову",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 1,
    "online": 0
  }, {
    "id": 24281715,
    "first_name": "Анну",
    "last_name": "Солдатову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "29.6",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 2,
      "life_main": 6,
      "smoking": 4,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 100171286,
    "first_name": "Владу",
    "last_name": "Петленко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "15.1",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 7,
    "relation_partner": {
      "id": 209205013,
      "first_name": "Макс",
      "last_name": "Русских"
    },
    "personal": {
      "langs": ["Русский", "English", "&#26085;&#26412;&#35486;", "&#54620;&#44397;&#50612;"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0,
    "lists": [26]
  }, {
    "id": 102775865,
    "first_name": "Дарью",
    "last_name": "Лукину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "27.5.1999",
    "city": {
      "id": 1780,
      "title": "Верхняя Салда"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 2,
      "life_main": 6,
      "smoking": 1,
      "alcohol": 1
    },
    "online": 0
  }, {
    "id": 143060554,
    "first_name": "Софью",
    "last_name": "Шевелёву",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "city": {
      "id": 2,
      "title": "Санкт-Петербург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 7,
    "personal": {
      "langs": ["Русский"],
      "religion": "Пастафарианство",
      "inspired_by": "Музыка",
      "people_main": 2,
      "life_main": 6,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 27296824,
    "first_name": "Машу",
    "last_name": "Цуканову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "14.3",
    "city": {
      "id": 2,
      "title": "Санкт-Петербург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"]
    },
    "online": 0
  }, {
    "id": 690014,
    "first_name": "Пашу",
    "last_name": "Лощенко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "7.11.1986",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "online": 0,
    "lists": [29]
  }, {
    "id": 53011454,
    "first_name": "Алену",
    "last_name": "Семейкину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "17.8",
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 16840145,
    "first_name": "Светлану",
    "last_name": "Теплотанских",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "14.11",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 2139043,
    "faculty_name": "Высшая школа экономики и менеджмента",
    "graduation": 1996,
    "education_form": "Очное отделение",
    "education_status": "Выпускница (специалист)",
    "relation": 0,
    "personal": {
      "langs": ["Русский"]
    },
    "online": 0
  }, {
    "id": 87696409,
    "first_name": "Дарью",
    "last_name": "Лачихину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "29.3.1999",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 2139051,
    "faculty_name": "Институт математики и компьютерных наук",
    "graduation": 2021,
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 1
  }, {
    "id": 116771540,
    "first_name": "Пашу",
    "last_name": "Семенихина",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "8.5",
    "city": {
      "id": 1573,
      "title": "Каменск-Уральский"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студент (бакалавр)",
    "relation": 0,
    "personal": {
      "political": 3,
      "langs": ["Русский"],
      "people_main": 2,
      "life_main": 1,
      "smoking": 1,
      "alcohol": 1
    },
    "online": 0
  }, {
    "id": 66321961,
    "first_name": "Никиту",
    "last_name": "Кетько",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "online": 0
  }, {
    "id": 68179138,
    "first_name": "Леру",
    "last_name": "Брагину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "26.9",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 2021,
    "education_form": "Очное отделение",
    "education_status": "Студентка (бакалавр)",
    "relation": 0,
    "personal": {
      "political": 3,
      "langs": ["Русский"],
      "inspired_by": "Путешествия, музыка",
      "people_main": 0,
      "life_main": 1,
      "smoking": 2,
      "alcohol": 2
    },
    "online": 0
  }, {
    "id": 127520286,
    "first_name": "Anya",
    "last_name": "Chigireva",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "5.5.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"]
    },
    "online": 1
  }, {
    "id": 70204193,
    "first_name": "Михаила",
    "last_name": "Петрова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "11.9",
    "city": {
      "id": 378,
      "title": "New York City"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский", "English"]
    },
    "online": 0
  }, {
    "id": 171328607,
    "first_name": "Валерию",
    "last_name": "Будевич",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "6.5.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "online": 0
  }, {
    "id": 364302798,
    "first_name": "Katerina",
    "last_name": "Salnikova",
    "deactivated": "deleted",
    "sex": 1,
    "online": 0
  }, {
    "id": 132197610,
    "first_name": "Елену",
    "last_name": "Шлегель",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "2.6.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 2020,
    "relation": 0,
    "personal": {
      "religion": "Православие",
      "inspired_by": "Литература",
      "people_main": 5,
      "life_main": 1,
      "smoking": 1,
      "alcohol": 3
    },
    "online": 0
  }, {
    "id": 65288656,
    "first_name": "Никиту",
    "last_name": "Поминова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "29.8",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "online": 0
  }, {
    "id": 208519030,
    "first_name": "Аниту",
    "last_name": "Шаймиеву",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "16.12.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студентка (бакалавр)",
    "relation": 3,
    "relation_partner": {
      "id": 97126488,
      "first_name": "Павел",
      "last_name": "Болдинов"
    },
    "personal": {
      "langs": ["Русский", "English", "&#54620;&#44397;&#50612;"],
      "people_main": 2,
      "life_main": 1,
      "smoking": 1,
      "alcohol": 1
    },
    "online": 0
  }, {
    "id": 100724845,
    "first_name": "Викторию",
    "last_name": "Куфтерину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "31.7.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 7,
    "personal": {
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 49440352,
    "first_name": "Анжелику",
    "last_name": "Якушевскую",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "12.2.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 2139044,
    "faculty_name": "Институт государственного управления и предпринимательства",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студентка (бакалавр)",
    "relation": 0,
    "personal": {
      "people_main": 2,
      "life_main": 0,
      "smoking": 3,
      "alcohol": 3
    },
    "online": 0
  }, {
    "id": 80691056,
    "first_name": "Анастасию",
    "last_name": "Осипову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "10.12.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "political": 3,
      "langs": ["Русский"],
      "religion": "Православие",
      "people_main": 0,
      "life_main": 6,
      "smoking": 4,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 63774469,
    "first_name": "Наталью",
    "last_name": "Филенкову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "17.6",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 8,
    "personal": {
      "political": 3,
      "langs": ["Русский", "English", "Lingua Latina"],
      "religion": "Православие",
      "inspired_by": "кофе!!!",
      "people_main": 2,
      "life_main": 1,
      "smoking": 1,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 372316044,
    "first_name": "Полину",
    "last_name": "Бессмертную",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "11.1.2000",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "online": 0
  }, {
    "id": 192257769,
    "first_name": "Михаила",
    "last_name": "Кислицына",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "19.9.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 2020,
    "relation": 0,
    "personal": {
      "people_main": 0,
      "life_main": 0,
      "smoking": 1,
      "alcohol": 1
    },
    "online": 0
  }, {
    "id": 215938825,
    "first_name": "Артёма",
    "last_name": "Молуянова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "political": 3,
      "langs": ["Русский", "Fran&#231;ais"],
      "people_main": 6,
      "life_main": 5,
      "smoking": 3,
      "alcohol": 3
    },
    "online": 0
  }, {
    "id": 119694614,
    "first_name": "Дмитрия",
    "last_name": "Суслова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "1.8.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["English"]
    },
    "online": 0
  }, {
    "id": 52208260,
    "first_name": "Дмитрия",
    "last_name": "Корепанова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "10.12.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 7,
    "relation_partner": {
      "id": 315460114,
      "first_name": "Ekaterina",
      "last_name": "Pershina"
    },
    "personal": {
      "political": 3,
      "langs": ["Русский"],
      "religion": "верю в бога",
      "inspired_by": "Музыка",
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 40834804,
    "first_name": "Дашу",
    "last_name": "Логинову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "5.11",
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский", "English", "Deutsch"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 291447387,
    "first_name": "Олега",
    "last_name": "Мухновского",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 2,
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "online": 0
  }, {
    "id": 74169866,
    "first_name": "Эдуарда",
    "last_name": "Яковлева",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "city": {
      "id": 151,
      "title": "Уфа"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "political": 3,
      "langs": ["Русский"],
      "religion": "Пастафарианство",
      "people_main": 6,
      "life_main": 3,
      "smoking": 4,
      "alcohol": 4
    },
    "online": 1
  }, {
    "id": 80910334,
    "first_name": "Евгению",
    "last_name": "Привалову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "9.5.1999",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "online": 0
  }, {
    "id": 154577189,
    "first_name": "Юлию",
    "last_name": "Корепанову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "11.9",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский", "English"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 157073777,
    "first_name": "Александра",
    "last_name": "Колпакова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "4.4.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "online": 0
  }, {
    "id": 230720856,
    "first_name": "Катю",
    "last_name": "Жукову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "5.11",
    "city": {
      "id": 2001,
      "title": "Первоуральск"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"]
    },
    "online": 0
  }, {
    "id": 131981168,
    "first_name": "Василису",
    "last_name": "Бубнову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "31.7",
    "city": {
      "id": 1,
      "title": "Москва"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 1,
    "personal": {
      "langs": ["Русский", "English"],
      "religion": "Православие",
      "people_main": 2,
      "life_main": 1,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 3461311,
    "first_name": "Яну",
    "last_name": "Макарову",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "23.8.1991",
    "university": 2241,
    "university_name": "НИУ ВШЭ - Пермь",
    "faculty": 2161679,
    "faculty_name": "Факультет экономики, менеджмента и бизнес-информатики",
    "graduation": 2012,
    "education_form": "Очное отделение",
    "education_status": "Студентка (специалист)",
    "relation": 0,
    "online": 0,
    "lists": [29]
  }, {
    "id": 8560541,
    "first_name": "Сергея",
    "last_name": "Снегирёва",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "5.4.1988",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 2188,
    "university_name": "УГЛТУ",
    "faculty": 12910,
    "faculty_name": "Институт леса и природопользования",
    "graduation": 2017,
    "education_form": "Очное отделение",
    "education_status": "Выпускник (бакалавр)",
    "relation": 4,
    "relation_partner": {
      "id": 3759063,
      "first_name": "Lera",
      "last_name": "Snegireva"
    },
    "personal": {
      "political": 6,
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0,
    "lists": [29]
  }, {
    "id": 78761235,
    "first_name": "Даниила",
    "last_name": "Вершинина",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "20.11.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 2470,
    "faculty_name": "Механико-машиностроительный институт",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студент (бакалавр)",
    "relation": 0,
    "personal": {
      "political": 3,
      "religion": "Православие"
    },
    "online": 0
  }, {
    "id": 57300388,
    "first_name": "Викторию",
    "last_name": "Зарубину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "17.7.1998",
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "relation": 2,
    "relation_partner": {
      "id": 172896192,
      "first_name": "Михаил",
      "last_name": "Беломоин"
    },
    "personal": {
      "political": 3,
      "langs": ["Русский"],
      "people_main": 6,
      "life_main": 6,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 54825328,
    "first_name": "Нину",
    "last_name": "Крыловскую",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "relation": 0,
    "online": 0
  }, {
    "id": 51887250,
    "first_name": "Ангелину",
    "last_name": "Олейникову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "8.10",
    "city": {
      "id": 5423367,
      "title": "Vaticano"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студентка (бакалавр)",
    "relation": 7,
    "personal": {
      "langs": ["Русский", "English"],
      "people_main": 5,
      "life_main": 6,
      "smoking": 2,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 225775698,
    "first_name": "Кристину",
    "last_name": "Куранду",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "9.3.2004",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 1,
    "personal": {
      "langs": ["Русский", "English"],
      "religion": "Православие",
      "people_main": 2,
      "life_main": 1,
      "smoking": 2,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 95168077,
    "first_name": "Диму",
    "last_name": "Комарицына",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "17.10",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 872,
    "university_name": "УИ ГА им. Главного маршала авиации Б. П. Бугаева (бывш. УВАУ ГА (И))",
    "faculty": 189506,
    "faculty_name": "Факультет летной эксплуатации и управления воздушным движением (Летно-технический) ",
    "graduation": 0,
    "relation": 1,
    "personal": {
      "political": 8,
      "langs": ["Русский"],
      "inspired_by": "музыка и авиация",
      "people_main": 6,
      "life_main": 1,
      "smoking": 1,
      "alcohol": 2
    },
    "online": 0,
    "lists": [26]
  }, {
    "id": 157358676,
    "first_name": "Анастасию",
    "last_name": "Муратову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "26.12",
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 1,
    "personal": {
      "political": 8,
      "inspired_by": "друзья, добрые цитатки, истории людей, мятный чай, стендап, новенькая, самураи",
      "people_main": 5,
      "life_main": 6,
      "smoking": 2,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 135898032,
    "first_name": "Ксюшу",
    "last_name": "Щипачёву",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "1.9.1998",
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 1
  }, {
    "id": 61739020,
    "first_name": "Anastasia",
    "last_name": "Vashentseva",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "15.7",
    "city": {
      "id": 1,
      "title": "Москва"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский", "English"]
    },
    "online": 1
  }, {
    "id": 53535039,
    "first_name": "Виталия",
    "last_name": "Котлярова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "5.5.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 2139051,
    "faculty_name": "Институт математики и компьютерных наук",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студент (бакалавр)",
    "relation": 2,
    "relation_partner": {
      "id": 39399830,
      "first_name": "Евгения",
      "last_name": "Ратнер"
    },
    "personal": {
      "langs": ["Русский"],
      "religion": "атеист",
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 1
  }, {
    "id": 20444094,
    "first_name": "Богдана",
    "last_name": "Шкляренко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "city": {
      "id": 314,
      "title": "Киев"
    },
    "university": 5616,
    "university_name": "НаУКМА",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 2015,
    "education_form": "Очное отделение",
    "education_status": "Студент (специалист)",
    "relation": 4,
    "relation_partner": {
      "id": 196003640,
      "first_name": "Geek",
      "last_name": "Geek"
    },
    "personal": {
      "political": 4,
      "langs": ["Русский", "Українська", "English"],
      "religion": "Пастафарианство",
      "inspired_by": "Собственный разум",
      "people_main": 2,
      "life_main": 4,
      "smoking": 1,
      "alcohol": 1
    },
    "online": 0
  }, {
    "id": 46445349,
    "first_name": "Соню",
    "last_name": "Копалову",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "10.6",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "relation": 0,
    "online": 0
  }, {
    "id": 197498614,
    "first_name": "Машу",
    "last_name": "Бубнову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "21.11.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 1,
    "personal": {
      "langs": ["Русский"]
    },
    "online": 0
  }, {
    "id": 152106452,
    "first_name": "Рустама",
    "last_name": "Муфазалова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "17.7",
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 4,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 168084606,
    "first_name": "Cat",
    "last_name": "Nyan",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "25.7",
    "city": {
      "id": 1,
      "title": "Москва"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "political": 3,
      "langs": ["Русский"],
      "inspired_by": "Pink Milk",
      "people_main": 2,
      "life_main": 5,
      "smoking": 4,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 190982491,
    "first_name": "Диану",
    "last_name": "Садыкову",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "13.9",
    "city": {
      "id": 2,
      "title": "Санкт-Петербург"
    },
    "university": 42,
    "university_name": "СПбГПМУ (бывш. СПбГПМА, ЛПМИ)",
    "faculty": 143,
    "faculty_name": "Факультет «Лечебное дело»",
    "graduation": 2023,
    "education_form": "Очное отделение",
    "education_status": "Студентка (специалист)",
    "relation": 1,
    "personal": {
      "langs": ["Русский", "English"],
      "religion": "Иудаизм",
      "inspired_by": "Шри Шри Рани Шанкар, Саи Баба",
      "people_main": 2,
      "life_main": 1,
      "smoking": 4,
      "alcohol": 4
    },
    "online": 0
  }, {
    "id": 175258254,
    "first_name": "Кристину",
    "last_name": "Казакевич",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "24.6.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_form": "Очное отделение",
    "relation": 7,
    "personal": {
      "langs": ["Русский"]
    },
    "online": 0
  }, {
    "id": 215016312,
    "first_name": "Светлану",
    "last_name": "Чусовитину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "21.1",
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 181936990,
    "first_name": "Алексея",
    "last_name": "Названова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "3.3.1999",
    "city": {
      "id": 1573,
      "title": "Каменск-Уральский"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "political": 8,
      "langs": ["Русский", "English"],
      "religion": "Итсизм.",
      "inspired_by": "Музыка, игры.",
      "people_main": 6,
      "life_main": 3,
      "smoking": 4,
      "alcohol": 2
    },
    "online": 1
  }, {
    "id": 72082684,
    "first_name": "Алёну",
    "last_name": "Снегирёву",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "14.7",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "online": 0
  }, {
    "id": 42309813,
    "first_name": "Александра",
    "last_name": "Дебелого",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "22.5",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_form": "Очное отделение",
    "relation": 0,
    "personal": {
      "langs": ["Русский", "English"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 1
  }, {
    "id": 9200196,
    "first_name": "Рената",
    "last_name": "Гришина",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "7.12.1979",
    "city": {
      "id": 1,
      "title": "Москва"
    },
    "university": 238,
    "university_name": "МИРЭА (до 2015)",
    "faculty": 949,
    "faculty_name": "Институт кибернетики",
    "graduation": 2001,
    "education_form": "Очное отделение",
    "education_status": "Студент (специалист)",
    "relation": 4,
    "personal": {
      "political": 8,
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 171959132,
    "first_name": "Машу",
    "last_name": "Зернову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "4.4",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "relation": 7,
    "relation_partner": {
      "id": 124745002,
      "first_name": "Ярослав",
      "last_name": "Глушков"
    },
    "personal": {
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 2,
      "alcohol": 2
    },
    "online": 0
  }, {
    "id": 30584840,
    "first_name": "Евгению",
    "last_name": "Лужбину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "6.12.1996",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 2959,
    "faculty_name": "Химико-технологический институт",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 1
  }, {
    "id": 618815,
    "first_name": "Ольгу",
    "last_name": "Лощенко",
    "is_closed": true,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "8.1.1985",
    "city": {
      "id": 1906450,
      "title": "Bangkok"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 2231185,
    "faculty_name": "Факультет политологии и социологии",
    "graduation": 2007,
    "education_form": "Очное отделение",
    "relation": 4,
    "personal": {
      "langs": ["Русский"],
      "religion": "Протестантизм",
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0,
    "lists": [29]
  }, {
    "id": 238082261,
    "first_name": "Ксюшу",
    "last_name": "Осинцеву",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "21.7",
    "city": {
      "id": 2001,
      "title": "Первоуральск"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "online": 0
  }, {
    "id": 248684720,
    "first_name": "Женьку",
    "last_name": "Жукову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "20.8",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 2231220,
    "faculty_name": "Электротехнический факультет",
    "graduation": 2003,
    "relation": 0,
    "personal": {
      "langs": ["Русский"]
    },
    "online": 0
  }, {
    "id": 373960119,
    "first_name": "Дарью",
    "last_name": "Шикину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "26.9",
    "city": {
      "id": 1154147,
      "title": "Березовский"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 2,
    "personal": {
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 91442888,
    "first_name": "Соню",
    "last_name": "Федотову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "25.5",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский", "English"],
      "inspired_by": "Jeydon Wale",
      "people_main": 6,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0,
    "lists": [26]
  }, {
    "id": 91148030,
    "first_name": "Артема",
    "last_name": "Лаптева",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "3.2.1998",
    "city": {
      "id": 2001,
      "title": "Первоуральск"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "smoking": 1,
      "alcohol": 1
    },
    "online": 0
  }, {
    "id": 424193898,
    "first_name": "Льва",
    "last_name": "Львова",
    "deactivated": "deleted",
    "sex": 2,
    "online": 0
  }, {
    "id": 384731255,
    "first_name": "Юлию",
    "last_name": "Быкову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "31.8.1969",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 2,
      "life_main": 6,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 320125643,
    "first_name": "Sagume",
    "last_name": "Kishin",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "1.10.1990",
    "city": {
      "id": 3840987,
      "title": "Ayabe"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "political": 6,
      "langs": ["English", "&#26085;&#26412;&#35486;"],
      "religion": "Buddhism",
      "inspired_by": "Amaterasu",
      "people_main": 2,
      "life_main": 3,
      "smoking": 1,
      "alcohol": 1
    },
    "online": 0
  }, {
    "id": 268461621,
    "first_name": "Софью",
    "last_name": "Шевелёву",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "28.3.2000",
    "city": {
      "id": 2,
      "title": "Санкт-Петербург"
    },
    "online": 0
  }, {
    "id": 3983782,
    "first_name": "Наталью",
    "last_name": "Лощенко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "9.6",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 469,
    "university_name": "УрГАХУ (бывш. УралГАХА)",
    "faculty": 183354,
    "faculty_name": "Архитектуры",
    "graduation": 2009,
    "education_form": "Очное отделение",
    "education_status": "Выпускница (специалист)",
    "relation": 0,
    "personal": {
      "langs": ["Русский", "Deutsch", "English"]
    },
    "online": 0,
    "lists": [29]
  }, {
    "id": 82188057,
    "first_name": "Юлию",
    "last_name": "Соломенникову",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "13.3.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студентка (бакалавр)",
    "relation": 0,
    "personal": {
      "langs": ["Русский", "English"]
    },
    "online": 0
  }, {
    "id": 7941450,
    "first_name": "Семёна",
    "last_name": "Русинова",
    "deactivated": "deleted",
    "sex": 2,
    "online": 0
  }, {
    "id": 137935891,
    "first_name": "Данила",
    "last_name": "Никифорова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "12.2",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 214401415,
    "first_name": "Данила",
    "last_name": "Лозбинева",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "22.7.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 7,
    "personal": {
      "political": 3,
      "langs": ["Русский", "English"],
      "inspired_by": "Друзья, сериалы, фильмы, игры, музыка",
      "people_main": 6,
      "life_main": 3,
      "smoking": 4,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 62350869,
    "first_name": "Александра",
    "last_name": "Крылосова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "14.11",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 469,
    "university_name": "УрГАХУ (бывш. УралГАХА)",
    "faculty": 183354,
    "faculty_name": "Архитектуры",
    "graduation": 2021,
    "education_form": "Очное отделение",
    "education_status": "Студент (бакалавр)",
    "relation": 2,
    "relation_partner": {
      "id": 307228540,
      "first_name": "Александра",
      "last_name": "Казакова"
    },
    "personal": {
      "langs": ["Русский", "Fran&#231;ais"],
      "religion": "Агностицизм",
      "inspired_by": "музыка",
      "people_main": 6,
      "life_main": 1,
      "smoking": 3,
      "alcohol": 5
    },
    "online": 0
  }, {
    "id": 54094040,
    "first_name": "Кирилла",
    "last_name": "Иванова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "17.9.1998",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студент (бакалавр)",
    "relation": 7,
    "personal": {
      "political": 3,
      "langs": ["Русский"],
      "religion": "Православие"
    },
    "online": 0
  }, {
    "id": 40619241,
    "first_name": "Никиту",
    "last_name": "Чернобрисова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "28.1.1997",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 20422,
    "faculty_name": "Институт радиоэлектроники и информационных технологий–РтФ",
    "graduation": 2020,
    "relation": 0,
    "personal": {
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 201116047,
    "first_name": "Настю",
    "last_name": "Кузьмину",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 1,
    "bdate": "6.10",
    "city": {
      "id": 2236,
      "title": "Березовский"
    },
    "university": 0,
    "university_name": "",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 0,
    "personal": {
      "langs": ["Русский", "English"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 100552905,
    "first_name": "Артёма",
    "last_name": "Плинера",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "15.7",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 479,
    "university_name": "УрГУПС",
    "faculty": 11800,
    "faculty_name": "Механический факультет",
    "graduation": 2021,
    "relation": 1,
    "personal": {
      "langs": ["Русский"]
    },
    "online": 0
  }, {
    "id": 50054370,
    "first_name": "Диму",
    "last_name": "Стёпина",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "10.2",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 466,
    "university_name": "ЕГТИ",
    "faculty": 36624,
    "faculty_name": "Актёрский факультет (Театральный)",
    "graduation": 0,
    "education_form": "Очное отделение",
    "education_status": "Студент (специалист)",
    "relation": 0,
    "personal": {
      "langs": ["Русский"],
      "people_main": 0,
      "life_main": 0,
      "smoking": 0,
      "alcohol": 0
    },
    "online": 0
  }, {
    "id": 120449994,
    "first_name": "Никиту",
    "last_name": "Маннапова",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "10.4",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "online": 0
  }, {
    "id": 9457083,
    "first_name": "Мишу",
    "last_name": "Снегирёва",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "24.10.1984",
    "city": {
      "id": 49,
      "title": "Екатеринбург"
    },
    "university": 477,
    "university_name": "УрФУ им. первого Президента России Б. Н. Ельцина",
    "faculty": 0,
    "faculty_name": "",
    "graduation": 0,
    "relation": 4,
    "online": 0
  }];

// emojis for random selection
const F_MODIFIERS = ['💕', '💙', '💚', '💜', '💛'];
const F_RELATION_MODIFIERS = ['❤', '💙', '💚', '💜', '💛'];
const ALCO_MODIFIERS = ['🍷', '🍸', '🍺'];

// people like my other accounts
const STOP_LNAMES = ['Nyan', 'Ткаченко', 'Гришина'];
// older friends and parents' friends not to apply hearts or check relation status
const F_STOP_LNAMES = ['Лощенко', 'Попов', 'Снегирёву', 'Kishin', 'Макарову'];
const F_STOP_NAMES = ['Светлану Теплотанских', 'Юлию Быкову', 'Женьку Жукову'];
const F_STOP_LNAMES_RELATION = ['Куранду'];

Array.prototype.contains = function (element) {
  return this.indexOf(element) !== -1;
};

Array.prototype.getRandomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
};

let post = createPost();
document.getElementById('post').textContent = post;

function createPost() {
  let post = 'Уже первое января! (По крайней мере, у нас, в Екатеринбурге.) Я, *id51504079 (Виталий Лощенко), поздравляю с Новым 2019 годом 🎄:\n\n';

  for (let user of friends) {
    if (user.deactivated || STOP_LNAMES.contains(user.last_name)) continue;
    post += '*id' + user.id + ' (' + user.first_name + ' ' + user.last_name + ') ' + addModifiers(user) + '\n';
  }

  post += '\nИ желаю, чтобы в Новом 2019 году (да и всегда) вам больше не встречались такие люди, которые упоминают по ' + friends.length + ' человек в одном посте!';
  return post;
}

function addModifiers(user) {
  let modifiers = '';

  if (user.last_name === 'Лощенко') modifiers += '👪';

  let isGirl = user.sex === 1 && !F_STOP_LNAMES.contains(user.last_name) &&
    !F_STOP_NAMES.contains(user.first_name + ' ' + user.last_name);

  if (isGirl) modifiers += F_MODIFIERS.getRandomElement();
  else modifiers += '💰';

  if (isGirl && user.relation === 1 && !F_STOP_LNAMES_RELATION.contains(user.last_name)) {
    modifiers += F_RELATION_MODIFIERS.getRandomElement();
    modifiers += F_RELATION_MODIFIERS.getRandomElement();
  }

  if (user.personal && (user.personal.alcohol === 4 || user.personal.alcohol === 5))
    modifiers += ALCO_MODIFIERS.getRandomElement();

  let isInUrFU = user.university === 477 && (user.graduation >= 2020 || (user.bdate && user.bdate.split('.')[2] >= 1997));
  if (isInUrFU && user.faculty === 20422) modifiers += '💻';
  if (isInUrFU) modifiers += '🏫';

  if (user.city && (user.city.id === 49 || user.city.id === 1154147)) modifiers += '🌆';
  return modifiers;
}