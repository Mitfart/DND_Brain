let graphData={graphOptions:{attractionForce:1,linkLength:10,repulsionForce:150,centralForce:3,edgePruning:100,minNodeRadius:3,maxNodeRadius:7},isInitialized:!0,paths:["правила/0_для-мастера/добыча/добыча_готовка.html","правила/0_для-мастера/добыча/добыча_сбор.html","правила/0_для-мастера/путешествие/путешествие-tes.html","правила/0_для-мастера/создание-предметов/доспехи_свойства.html","правила/0_для-мастера/создание-предметов/оружия_приемы.html","правила/0_для-мастера/создание-предметов/оружия_сборка.html","правила/0_для-мастера/создание-предметов/оружия_свойства.html","правила/0_для-мастера/создание-предметов/щиты_свойства.html","правила/0_для-мастера/создание-расы/днд-расы.html","правила/0_для-мастера/создание-расы/создание-расы.html","правила/0_для-мастера/создание-расы/способности.html","правила/0_для-мастера/0_для-мастера.html","правила/0_для-мастера/состояние-здоровья.html","правила/1_homebrew/1_homebrew.html","правила/1_homebrew/зелья-бонусным-действием.html","правила/1_homebrew/инвентарь.html","правила/1_homebrew/истощение.html","правила/1_homebrew/контрзаклинание-дуэль-заклинаний.html","правила/1_homebrew/криты.html","правила/1_homebrew/настойчивый-бросок.html","правила/1_homebrew/окружение-флангирование.html","правила/1_homebrew/оружие-метание-и-атака.html","правила/1_homebrew/перегрузка.html","правила/заклинания/1/вызов-страха.html","правила/заклинания/1/дрожь-земли.html","правила/заклинания/1/искусная-острóта.html","правила/заклинания/1/катапульта.html","правила/заклинания/1/луч-болезни.html","правила/заклинания/1/направленный-снаряд.html","правила/заклинания/1/поглощение-стихий.html","правила/заклинания/1/псевдожизнь.html","правила/заклинания/1/силок.html","правила/заклинания/1/щит.html","правила/заклинания/1/щит-веры.html","правила/заклинания/2/дребезги.html","правила/заклинания/2/защитный-ветер.html","правила/заклинания/2/исцеляющий-дух.html","правила/заклинания/2/молебен-лечения.html","правила/заклинания/2/небесные-письмена.html","правила/заклинания/2/охраняющая-связь.html","правила/заклинания/2/палящий-луч.html","правила/заклинания/2/поиск-ловушек.html","правила/заклинания/2/снежный-шквал-сниллока.html","правила/заклинания/2/теневой-клинок.html","правила/заклинания/2/шипастая-поросль.html","правила/заклинания/3/аура-живучести.html","правила/заклинания/3/духовные-стражи.html","правила/заклинания/3/защита-от-энергии.html","правила/заклинания/3/молния.html","правила/заклинания/3/огненный-шар.html","правила/заклинания/3/передача-жизни.html","правила/заклинания/3/призыв-духа-нежити.html","правила/заклинания/3/прикосновение-вампира.html","правила/заклинания/3/пылающие-стрелы.html","правила/заклинания/3/ускорение.html","правила/заклинания/4/болезненное-сияние.html","правила/заклинания/4/верный-пёс-морденкайнена.html","правила/заклинания/4/каменная-кожа.html","правила/заклинания/4/огненный-щит.html","правила/заклинания/4/проклятье-стихий.html","правила/заклинания/4/страж-веры.html","правила/заклинания/5/водоворот.html","правила/заклинания/5/вызов-залпа.html","правила/заклинания/5/конус-холода.html","правила/заклинания/5/обессиливание.html","правила/заклинания/5/обет.html","правила/заклинания/5/разрушительная-волна.html","правила/заклинания/5/священное-оружие.html","правила/заклинания/5/удар-стального-ветра.html","правила/заклинания/6/облачение.html","правила/заклинания/6/отилюков-ледяной-шар.html","правила/заклинания/6/первородный-страж.html","правила/заклинания/6/поражение.html","правила/заклинания/6/раскидывание.html","правила/заклинания/6/стена-клинков.html","правила/заклинания/6/трансформация-тензера.html","правила/заклинания/7/меч-морденкайнена.html","правила/заклинания/7/огненная-буря.html","правила/заклинания/8/аура-святости.html","правила/заклинания/8/двойник.html","правила/заклинания/8/цунами.html","правила/заклинания/9/метеоритный-дождь.html","правила/заклинания/9/слово-силы-смерть.html","правила/заклинания/заклинания.html","правила/предметы/доспехи-и-щиты.html","правила/предметы/оружия.html","правила/правила.html","предметы/драгоценные-камни/драгоценные-камни.html","создание-персонажа/0_вид/вастайи.html","создание-персонажа/0_вид/голем.html","создание-персонажа/0_вид/флоран.html","создание-персонажа/0_вид/хенко.html","создание-персонажа/0_вид/человек.html","создание-персонажа/предыстория/предыстория.html","создание-персонажа/предыстория/создание-истории.html","создание-персонажа/предыстория/шаблон-предыстории-персонажа.html","создание-персонажа/создание-листа.html","черты/1_происхождения/акана.html","черты/1_происхождения/затронутый-магией.html","черты/1_происхождения/ускоренные-рефлексы.html","черты/2_общие/дженази.html","черты/2_общие/измененный-магией.html","черты/3_-эпические/элементаль.html","черты/4_уникальные/аура-страха.html","черты/5_измененные/боевой-заклинатель.html","черты/9_на-рассмотрении/адепт-мастер-магистр-перевоплощения.html","черты/черты.html","index.html"],nodeCount:108,linkSources:[5,5,8,9,10,10,11,11,11,11,11,11,11,11,11,11,13,13,13,13,13,13,13,13,13,13,13,19,22,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,85,85,86,86,86,86,86,88,89,90,91,92,93,93,96,96,98,100,100,100,100,101,101,102,102,103,103,105,106,106,106,106,106,106,106,106,106,107],linkTargets:[6,4,10,10,13,16,0,1,2,3,4,5,6,7,9,12,16,83,40,14,15,17,18,19,20,21,22,18,16,23,24,25,26,27,28,29,30,31,33,32,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,6,4,11,13,83,84,85,10,10,10,10,10,94,95,100,93,10,101,98,40,10,98,10,100,101,98,97,91,97,98,99,100,101,102,103,104,105,86],labels:["Добыча_Готовка","Добыча_Сбор","Путешествие TES","Доспехи_Свойства","Оружия_Приемы","Оружия_Сборка","Оружия_Свойства","Щиты_Свойства","ДНД Расы","Создание Расы","Способности","0_Для мастера","Состояние Здоровья","1_Homebrew","Зелья Бонусным Действием","Инвентарь","Истощение","Контрзаклинание - Дуэль Заклинаний","Криты","Настойчивый бросок","Окружение - Флангирование","Оружие - Метание и Атака","Перегрузка","Вызов страха","Дрожь земли","Искусная острóта","Катапульта","Луч болезни","Направленный снаряд","Поглощение стихий","Псевдожизнь","Силок","Щит","Щит веры","Дребезги","Защитный ветер","Исцеляющий дух","Молебен лечения","Небесные письмена","Охраняющая связь","Палящий луч","Поиск ловушек","Снежный шквал Сниллока","Теневой клинок","Шипастая поросль","Аура живучести","Духовные стражи","Защита от энергии","Молния","Огненный шар","Передача жизни","Призыв духа нежити","Прикосновение вампира","Пылающие стрелы","Ускорение","Болезненное сияние","Верный пёс Морденкайнена","Каменная кожа","Огненный щит","Проклятье стихий","Страж веры","Водоворот","Вызов залпа","Конус холода","Обессиливание","Обет","Разрушительная волна","Священное оружие","Удар стального ветра","Облачение","Отилюков ледяной шар","Первородный страж","Поражение","Раскидывание","Стена клинков","Трансформация Тензера","Меч Морденкайнена","Огненная буря","Аура святости","Двойник","Цунами","Метеоритный дождь","Слово силы Смерть","Заклинания","Доспехи и Щиты","Оружия","Правила","Драгоценные камни","Вастайи","Голем","Флоран","Хенко","Человек","Предыстория","Создание Истории","Шаблон предыстории персонажа","Создание Листа","Акана","Затронутый магией","Ускоренные рефлексы","Дженази","Измененный магией","Элементаль","Аура страха","Боевой заклинатель","Адепт-Мастер-Магистр перевоплощения","Черты","index"],radii:[3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.4692377731529653,3.4692377731529653,3.4692377731529653,3.15966441207076,3.15966441207076,3.316077003121748,4.701352757544225,4.577458376690947,3.15966441207076,4.8219953173777315,3.15966441207076,3.15966441207076,3.4692377731529653,3.15966441207076,3.316077003121748,3.316077003121748,3.15966441207076,3.15966441207076,3.316077003121748,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.4692377731529653,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,3.15966441207076,7,3.15966441207076,3.4692377731529653,3.909209157127991,3,3.15966441207076,3.15966441207076,3.15966441207076,3.316077003121748,3.15966441207076,3.4692377731529653,3.15966441207076,3.15966441207076,3.316077003121748,3.316077003121748,3.7658038501560878,3.15966441207076,4.049362643080125,3.7658038501560878,3.4692377731529653,3.4692377731529653,3.15966441207076,3.316077003121748,4.319914151925078,3.15966441207076],linkCount:127}