// example
const friends = [
  {
    "id": 51504079,
    "first_name": "Виталия",
    "last_name": "Лощенко",
    "is_closed": false,
    "can_access_closed": true,
    "sex": 2,
    "bdate": "16.3.1998",
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
      "political": 4,
      "langs": ["Русский"],
      "inspired_by": "доброта, нежность, человеческие эмоции",
      "people_main": 1,
      "life_main": 1,
      "smoking": 4,
      "alcohol": 4
    },
    "online": 0
  }];

// emojis for random selection
const F_MODIFIERS = ['💕', '💙', '💚', '💜', '💛'];
const F_RELATION_MODIFIERS = ['❤', '💙', '💚', '💜', '💛'];
const ALCO_MODIFIERS = ['🍷', '🍸', '🍺'];

// people like my other accounts
const STOP_LNAMES = [];
// older friends and parents' friends not to apply hearts or check relation status
const F_STOP_LNAMES = [];
const F_STOP_NAMES = [];
const F_STOP_LNAMES_RELATION = [];

Array.prototype.contains = function (element) {
  return this.indexOf(element) !== -1;
};

Array.prototype.getRandomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
};

let post = createPost();
document.getElementById('post').textContent = post;

function createPost() {
  let post = 'Заголовок поста:\n\n';

  for (let user of friends) {
    if (user.deactivated || STOP_LNAMES.contains(user.last_name)) continue;
    post += '*id' + user.id + ' (' + user.first_name + ' ' + user.last_name + ') ' + addModifiers(user) + '\n';
  }

  post += '\nЗаключение';
  return post;
}

function addModifiers(user) {
  let modifiers = '';

  if (user.last_name === 'Лощенко') modifiers += '👪'; // family modifier

  let isGirl = user.sex === 1 && !F_STOP_LNAMES.contains(user.last_name) &&
    !F_STOP_NAMES.contains(user.first_name + ' ' + user.last_name);

  if (isGirl) modifiers += F_MODIFIERS.getRandomElement(); // girls' modifier
  else modifiers += '💰'; // boys' modifier

  if (isGirl && user.relation === 1 && !F_STOP_LNAMES_RELATION.contains(user.last_name)) {
    modifiers += F_RELATION_MODIFIERS.getRandomElement();
    modifiers += F_RELATION_MODIFIERS.getRandomElement(); // relation modifiers
  }

  if (user.personal && (user.personal.alcohol === 4 || user.personal.alcohol === 5))
    modifiers += ALCO_MODIFIERS.getRandomElement(); // alcohol modifier

  let isInUrFU = user.university === 477 && (user.graduation >= 2020 || (user.bdate && user.bdate.split('.')[2] >= 1997));
  if (isInUrFU && user.faculty === 20422) modifiers += '💻'; // faculty modifier
  if (isInUrFU) modifiers += '🏫'; // university modifier

  if (user.city && (user.city.id === 49 || user.city.id === 1154147)) modifiers += '🌆'; // city modifier
  return modifiers;
}