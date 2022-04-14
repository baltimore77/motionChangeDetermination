// leave this in
// starts counting of trials at 1 to display in output file as trial
let trialIterator = 1;


// define all language for experiment

// define all variables in listNumber1 : Anger
const anger = 'anger';
const hate = 'hate';
const temper = 'temper';
const ire = 'ire';
const happy = 'happy';
const hatred = 'hatred';
const calm ='calm';
const rage = 'rage';
const fury = 'fury';
const wrath = 'wrath';
const fight = 'fight';
const mean = 'mean';
const emotion  = 'emotion';
const mad = 'mad';
const fear = 'fear';
const enrage = 'enrage';

let Anger = {
    listNumber: 1,
    listA: [hate, temper, ire, happy, hatred, calm],
    listB: [rage, fury, wrath, fight, mean, emotion],
    prototype: anger,
    highestAssociates: [mad, fear],
    lowestAssociate: enrage,
};

// define all variables in listNumber2 : Army
const unitedStates = 'United States';
const airForce = 'Air Force';
const military = "military";
const march = 'march';
const captain = 'captain';
const uniform = 'uniform';
const rifle = 'rifle';
const draft = 'draft';
const marines = 'Mmrines';
const infantry = 'infantry';
const war = 'war';
const pilot = 'pilot';
const army = 'army';
const navy = 'navy';
const soldier = 'soldier';
const combat = 'combat';

let Army = {
    listNumber: 2,
    listA: [unitedStates, airForce, military, march, captain, uniform],
    listB: [rifle, draft, marines, infantry, war, pilot],
    prototype: army,
    highestAssociates: [navy, soldier],
    lowestAssociate: combat,
};

// define all variables in listNumber3 : Black
const black = 'black';
const cat = 'cat';
const night = 'night';
const color = 'color';
const blue = 'blue';
const ink = 'ink';
const coal = 'coal';
const charred = 'charred';
const funeral = 'funeral';
const grief = 'grief';
const death = 'death';
const bottom = 'bottom';
const brown = 'brown';
const white = 'white';
const dark = 'dark';
const gray = 'gray';

let Black = {
    listNumber: 3,
    listA: [cat, night, color, blue, ink, coal],
    listB: [charred, funeral, grief, death, bottom, brown],
    prototype: black,
    highestAssociates: [white, dark],
    lowestAssociate: gray,
};

//Define variables for list 4:Bread
const bread = 'bread';
const eat = 'eat';
const rye = 'rye';
const milk = 'milk';
const jelly = 'jelly';
const crust = 'crust';
const wine = 'wine';
const  sandwich = 'sandwich';
const jam = 'jam';
const flour = 'flour';
const dough = 'dough';
const slice = 'slice';
const loaf = 'loaf';
const  butter = 'butter';
const  food = 'food';
const  toast = 'toast';

let  Bread = {
    listNumber: 4,
    listA: [eat, rye, milk, jelly, crust, wine],
    listB: [sandwich, jam, flour, dough, slice, loaf],
    prototype: bread,
    highestAssociates: [butter, food],
    lowestAssociate: toast,
};

//Define all variables for list 5: Car
const car  = 'car';
const train = 'train';
const  vehicle = 'vehicle';
const jeep = 'jeep';
const race = 'race';
const garage = 'garage';
const sedan = 'sedan';
const  automobile = 'automobile';
const drive = 'drive';
const ford = 'ford';
const keys = 'keys';
const highway = 'highway';
const van = 'van';
const truck = 'truck';
const bus = 'bus';
const taxi = 'taxi';

let Car = {
    listNumber: 5,
    listA: [train, vehicle, jeep, race, garage, sedan],
    listB: [automobile, drive, ford, keys, highway, van],
    prototype: car,
    highestAssociates: [truck, bus],
    lowestAssociate: taxi ,
};

//Define all variables for list 6: Chair
const chair = 'chair';
const legs = 'legs';
const couch = 'couch';
const recliner = 'recliner';
const wood = 'wood';
const swivel = 'swivel';
const sitting = 'sitting';
const seat = 'seat';
const desk = 'desk';
const sofa = 'sofa';
const cushion = 'cushion';
const stool = 'stool';
const rocking = 'rocking';
const table = 'table';
const sit = 'sit';
const bench = 'bench';

let Chair = {
    listNumber: 6,
    listA: [legs, couch, recliner, wood, swivel, sitting],
    listB: [seat, desk, sofa, cushion, stool, rocking],
    prototype: chair,
    highestAssociates: [table, sit],
    lowestAssociate: bench,
};

//Define all variables for list 7: City
const city = 'city';
const state = 'state';
const streets = 'streets';
const country = 'country';
const village = 'village';
const big = 'big';
const suburb = 'suburb';
const capital = 'capital';
const subway = 'subway';
const newYork = "New York";
const metropolis = 'metropolis';
const chicago = 'chicago';
const county = 'county';
const town = 'town';
const crowded = 'crowded';
const urban = 'urban';

let City = {
    listNumber: 7,
    listA: [state, streets, country, village, big, suburb],
    listB: [capital, subway, newYork, metropolis, chicago, county],
    prototype: city,
    highestAssociates: [town, crowded],
    lowestAssociate: urban,
};

const cold = 'cold';
const warm = "warm";
const ice = 'ice';
const frigid = "frigid";
const heat = ' heat';
const freeze = ' freeze';
const shiver = 'shiver';
const winter = 'winter';
const wet = 'wet';
const chilly = "chilly";
const weather = 'weather';
const air = 'air';
const arctic = 'arctic';
const hot = "hot";
const snow = 'snow';
const frost = 'frost';

let Cold = {
    listNumber: 8,
    listA: [warm, ice, frigid, heat, freeze, shiver],
    listB: [winter, wet, chilly, weather, air, arctic],
    prototype: cold,
    highestAssociates: [hot, snow],
    lowestAssociate: frost,
};
//Define all variables for list 9: Cup
const cup  = 'cup';
const tea = 'tea';
const coaster = 'coaster';
const handle = 'handle';
const straw = 'straw';
const soup = 'soup';
const drink = 'drink';
const measuring = 'measuring';
const lid = 'lid';
const coffee = 'coffee';
const goblet = 'goblet';
const stein = 'stein';
const plastic = 'plastic';
const mug = 'mug';
const saucer = 'saucer';
const sip = 'sip';

let Cup = {
    listNumber: 9,
    listA: [tea, coaster, handle, straw, soup, drink],
    listB: [measuring, lid, coffee, goblet, stein, plastic],
    prototype: cup,
    highestAssociates: [mug, saucer],
    lowestAssociate: sip,
};

//Define all variables for list 10: Doctor
const doctor  = 'doctor';
const lawyer = 'lawyer';
const health = 'health';
const dentist = 'dentist';
const ill = 'ill';
const office = 'office';
const surgeon = 'surgeon';
const medicine = 'medicine';
const hospital = 'hospital';
const physician = 'physician';
const patient = 'patient';
const stethoscope = 'stethoscope';
const clinic = 'clinic';
const nurse = 'nurse';
const sick = 'sick';
const cure = 'cure';

let Doctor = {
    listNumber: 10,
    listA: [lawyer, health, dentist, ill, office, surgeon],
    listB: [medicine, hospital, physician, patient, stethoscope, clinic],
    prototype: doctor,
    highestAssociates: [nurse, sick],
    lowestAssociate: cure,
};

//Define all variables for list 11: Flag
const flag  = 'flag';
const symbol = 'symbol';
const anthem = 'anthem';
const pole = 'pole';
const raised = 'raised';
const checkered = 'checkered';
const sign = 'sign';
const stars = 'stars';
const stripes = 'stripes';
const wave = 'wave';
const national = 'national';
const emblem = 'emblem';
const freedom = 'freedom';
const banner = 'banner';
const american = 'american';
const pendant = 'pendant';

let Flag = {
    listNumber: 11,
    listA: [symbol, anthem, pole, raised, checkered, sign],
    listB: [stars, stripes, wave, national, emblem, freedom],
    prototype: flag,
    highestAssociates: [banner, american],
    lowestAssociate: pendant,
};

//Define all variables for list 12: Foot
const foot  = 'foot';
const toe = 'toe';
const sandals = 'sandals';
const yard = 'yard';
const ankle = 'ankle';
const boot = 'boot';
const sock = 'sock';
const kick = 'kick';
const soccer = 'soccer';
const walk = 'walk';
const arm = 'arm';
const inch = 'inch';
const knee = 'knee';
const shoe = 'shoe';
const hand = 'hand';
const mouth = 'mouth';

let Foot = {
    listNumber: 12,
    listA: [toe, sandals, yard, ankle, boot, sock],
    listB: [kick, soccer, walk, arm, inch, knee],
    prototype: foot,
    highestAssociates: [shoe, hand],
    lowestAssociate: mouth,
};

//Define all variables for list 13: Fruit
const fruit  = 'fruit';
const orange = 'orange';
const citrus = 'citrus';
const pear = 'pear';
const berry = 'berry';
const basket = 'basket';
const salad = 'salad';
const kiwi = 'kiwi';
const ripe = 'ripe';
const banana = 'banana';
const cherry = 'cherry';
const juice = 'juice';
const bowl = 'bowl';
const apple = 'apple';
const vegetable = 'vegetable';
const cocktail = 'cocktail';

let Fruit = {
    listNumber: 13,
    listA: [orange, citrus, pear, berry, basket, salad],
    listB: [kiwi, ripe, banana, cherry, juice, bowl],
    prototype: fruit,
    highestAssociates: [apple, vegetable],
    lowestAssociate: cocktail,
};

//Define all variables for list 14: Girl
const girl  = 'girl';
const female = 'female';
const dress = 'dress';
const hair = 'hair';
const dance = 'dance';
const cute = 'cute';
const aunt = 'aunt';
const young = 'young';
const pretty = 'pretty';
const niece = 'niece';
const beautiful = 'beautiful';
const date = 'date';
const daughter = 'daughter';
const boy = 'boy';
const dolls = 'dolls';
const sister = 'sister';

let Girl = {
    listNumber: 14,
    listA: [female, dress, hair, dance, cute, aunt],
    listB: [young, pretty, niece, beautiful, date, daughter],
    prototype: girl,
    highestAssociates: [boy, dolls],
    lowestAssociate: sister,
};

//Define all variables for list 15: High
const high  = 'high';
const up = 'up';
const tower = 'tower';
const above = 'above';
const noon = 'noon';
const sky = 'sky';
const airplane = 'airplane';
const tall = 'tall';
const jump = 'jump';
const building = 'building';
const cliff = 'cliff';
const over = 'over';
const dive = 'dive';
const low = 'low';
const clouds = 'clouds';
const elevate = 'elevate';

let High = {
    listNumber: 15,
    listA: [up, tower, above, noon, sky, airplane],
    listB: [tall, jump, building, cliff, over, dive],
    prototype: high,
    highestAssociates: [low, clouds],
    lowestAssociate: elevate,
};

//Define all variables for list 16: King
const king  = 'king';
const crown = 'crown';
const george = 'george';
const palace = 'palace';
const chess = 'chess';
const subjects = 'subjects';
const royal = 'royal';
const  prince = 'prince';
const dictator = 'dictator';
const throne = 'throne';
const rule = 'rule';
const monarch = 'monarch';
const leader = 'leader';
const queen = 'queen';
const england = 'england';
const reign = 'reign';

let King = {
    listNumber: 16,
    listA: [crown, george, palace, chess, subjects, royal],
    listB: [prince, dictator, throne, rule, monarch, leader],
    prototype: king,
    highestAssociates: [queen, england],
    lowestAssociate: reign,
};

//Define all variables for list 17: Lion
const lion  = 'lion';
const jungle = 'jungle';
const den = 'den';
const africa = 'africa';
const cage = 'cage';
const roar = 'roar';
const bears = 'bears';
const tamer = 'tamer';
const cub = 'cub';
const mane = 'mane';
const feline = 'feline';
const fierce = 'fierce';
const hunt = 'hunt';
const tiger = 'tiger';
const circus = 'circus';
const pride = 'pride';

let Lion = {
    listNumber: 17,
    listA: [jungle, den, africa, cage, roar, bears],
    listB: [tamer, cub, mane, feline, fierce, hunt],
    prototype: lion,
    highestAssociates: [tiger, circus],
    lowestAssociate: pride,
};

//Define all variables for list 18: Man
const man  = 'man';
const uncle = 'uncle';
const mouse = 'mouse';
const father = 'father';
const friend = 'friend';
const person = 'person';
const muscle = 'muscle';
const lady = 'lady';
const male = 'male';
const strong = 'strong';
const beard = 'beard';
const handsome = 'handsome';
const suit = 'suit';
const woman = 'woman';
const husband = 'husband';
const old = 'old';

let Man = {
    listNumber: 18,
    listA: [uncle, mouse, father, friend, person, muscle],
    listB: [lady, male, strong, beard, handsome, suit],
    prototype: man,
    highestAssociates: [woman, husband],
    lowestAssociate: old,
};

//Define all variables for list 19: Mountain
const mountain  = 'mountain';
const climb = 'climb';
const top2 = 'top2';
const peak = 'peak';
const glacier = 'glacier';
const bike = 'bike';
const range = 'range';
const summit = 'summit';
const molehill = 'molehill';
const plain = 'plain';
const goat = 'goat';
const climber = 'climber';
const steep = 'steep';
const hill = 'hill';
const valley = 'valley';
const ski = 'ski';

let Mountain = {
    listNumber: 19,
    listA: [climb, top2, peak, glacier, bike, range],
    listB: [summit, molehill, plain, goat, climber, steep],
    prototype: mountain,
    highestAssociates: [hill, valley],
    lowestAssociate: ski,
};

//Define all variables for list 20: Music
const music  = 'music';
const piano = 'piano';
const radio = 'radio';
const melody = 'melody';
const concert = 'concert';
const symphony = 'symphony';
const orchestra = 'orchestra';
const sing = 'sing';
const band = 'band';
const horn = 'horn';
const instrument = 'instrument';
const jazz = 'jazz';
const art = 'art';
const note = 'note';
const sound = 'sound';
const rhythm = 'rhythm';

let Music = {
    listNumber: 20,
    listA: [piano, radio, melody, concert, symphony, orchestra],
    listB: [sing, band, horn, instrument, jazz, art],
    prototype: music,
    highestAssociates: [note, sound],
    lowestAssociate: rhythm,
};

//Define all variables for list 21: Needle
const needle  = 'needle';
const eye = 'eye';
const sharp = 'sharp';
const prick = 'prick';
const haystack = 'haystack';
const hurt = 'hurt';
const syringe = 'syringe';
const sewing = 'sewing';
const point = 'point';
const thimble = 'thimble';
const thorn = 'thorn';
const injection = 'injection';
const cloth = 'cloth';
const thread = 'thread';
const pin = 'pin';
const knitting = 'knitting';

let Needle = {
    listNumber: 21,
    listA: [eye, sharp, prick, haystack, hurt, syringe],
    listB: [sewing, point, thimble, thorn, injection, cloth],
    prototype: needle,
    highestAssociates: [thread, pin],
    lowestAssociate: knitting,
};

//Define all variables for list 22: Pen
const pen  = 'pen';
const fountain = 'fountain';
const quill = 'quill';
const bic = 'bic';
const crayon = 'crayon';
const tip = 'tip';
const red = 'red';
const leak = 'leak';
const felt = 'felt';
const scribble = 'scribble';
const cross = 'cross';
const marker = 'marker';
const cap = 'cap';
const pencil = 'pencil';
const write = 'write';
const letter = 'letter';

let Pen = {
    listNumber: 22,
    listA: [fountain, quill, bic, crayon, tip, red],
    listB: [leak, felt, scribble, cross, marker, cap],
    prototype: pen,
    highestAssociates: [pencil, write],
    lowestAssociate: letter,
};

//Define all variables for list 23: River
const river  = 'river';
const lake = 'lake';
const boat = 'boat';
const swim = 'swim';
const run = 'run';
const creek = 'creek';
const fish = 'fish';
const mississippi = 'mississippi';
const tide = 'tide';
const flow = 'flow';
const barge = 'barge';
const brook = 'brook';
const bridge = 'bridge';
const water = 'water';
const stream = 'stream';
const winding = 'winding';

let River = {
    listNumber: 23,
    listA: [lake, boat, swim, run, creek, fish],
    listB: [mississippi, tide, flow, barge, brook, bridge],
    prototype: river,
    highestAssociates: [water, stream],
    lowestAssociate: winding,
};

//Define all variables for list 24: Rough
const rough  = 'rough';
const road = 'road';
const sandpaper = 'sandpaper';
const ready = 'ready';
const uneven = 'uneven';
const rugged = 'rugged';
const boards = 'boards';
const tough = 'tough';
const jagged = 'jagged';
const coarse = 'coarse';
const riders = 'riders';
const sand = 'sand';
const ground = 'ground';
const smooth = 'smooth';
const bumpy = 'bumpy';
const gravel = 'gravel';

let Rough = {
    listNumber: 24,
    listA: [road, sandpaper, ready, uneven, rugged, boards],
    listB: [tough, jagged, coarse, riders, sand, ground],
    prototype: rough,
    highestAssociates: [smooth, bumpy],
    lowestAssociate: gravel,
};

//Define all variables for list 25: Rubber
const rubber  = 'rubber';
const gloves = 'gloves';
const ball = 'ball';
const springy = 'springy';
const galoshes = 'galoshes';
const latex = 'latex';
const flexible = 'flexible';
const tire = 'tire';
const eraser = 'eraser';
const foam = 'foam';
const soles = 'soles';
const glue = 'glue';
const resilient = 'resilient';
const elastic = 'elastic';
const bounce = 'bounce';
const stretch = 'stretch';

let Rubber = {
    listNumber: 25,
    listA: [gloves, ball, springy, galoshes, latex, flexible],
    listB: [tire, eraser, foam, soles, glue, resilient],
    prototype: rubber,
    highestAssociates: [elastic, bounce],
    lowestAssociate: stretch,
};

//Define all variables for list 26: Shirt
const shirt  = 'shirt';
const pants = 'pants';
const button = 'button';
const iron = 'iron';
const collar = 'collar';
const pocket = 'pocket';
const belt = 'belt';
const tie = 'tie';
const shorts = 'shorts';
const polo = 'polo';
const vest = 'vest';
const jersey = 'jersey';
const linen = 'linen';
const blouse = 'blouse';
const sleeves = 'sleeves';
const cuffs = 'cuffs';

let Shirt = {
    listNumber: 26,
    listA: [pants, button, iron ,collar, pocket, belt],
    listB: [tie, shorts, polo, vest, jersey, linen],
    prototype: shirt,
    highestAssociates: [blouse,sleeves],
    lowestAssociate: cuffs,
};

//Define all variables for list 27: Sleep
const sleep  = 'sleep';
const awake = 'awake';
const dream = 'dream';
const snooze = 'snooze';
const doze = 'doze';
const snore = 'snore';
const peace = 'peace';
const tired = 'tired';
const wake = 'wake';
const blanket = 'blanket';
const slumber = 'slumber';
const nap = 'nap';
const yawn = 'yawn';
const bed = 'bed';
const rest = 'rest';
const drowsy = 'drowsy';

let Sleep = {
    listNumber: 27,
    listA: [awake, dream, snooze, doze, snore, peace],
    listB: [tired, wake, blanket, slumber, nap, yawn],
    prototype: sleep,
    highestAssociates: [bed, rest],
    lowestAssociate: drowsy,
};

//Define all variables for list 28: Slow
const slow  = 'slow';
const stop = 'stop';
const snail = 'snail';
const delay = 'delay';
const turtle = 'turtle';
const speed = 'speed';
const sluggish = 'sluggish';
const listless = 'listless';
const cautious = 'cautious';
const traffic = 'traffic';
const hesitant = 'hesitant';
const quick = 'quick';
const wait = 'wait';
const fast = 'fast';
const lethargic = 'lethargic';
const molasses = 'molasses';

let Slow = {
    listNumber: 28,
    listA: [stop, snail, delay, turtle, speed, sluggish],
    listB: [listless, cautious, traffic, hesitant, quick, wait],
    prototype: slow,
    highestAssociates: [fast, lethargic],
    lowestAssociate: molasses,
};

//Define all variables for list 29: Smell
const smell  = 'smell';
const sniff = 'sniff';
const hear = 'hear';
const nostril = 'nostril';
const scent = 'scent';
const stench = 'stench';
const perfume = 'perfume';
const aroma = 'aroma';
const see = 'see';
const whiff = 'whiff';
const reek = 'reek';
const fragrance = 'fragrance';
const salts = 'salts';
const nose = 'nose';
const breathe = 'breathe';
const rose = 'rose';

let Smell = {
    listNumber: 29,
    listA: [sniff, hear, nostril, scent, stench, perfume],
    listB: [aroma, see, whiff, reek, fragrance, salts],
    prototype: smell,
    highestAssociates: [nose, breathe],
    lowestAssociate: rose,
};

//Define all variables for list 30: Smoke
const smoke  = 'smoke';
const blaze = 'blaze';
const pollution = 'pollution';
const cigar = 'cigar';
const fire = 'fire';
const stink = 'stink';
const lungs = 'lungs';
const billows = 'billows';
const ashes = 'ashes';
const chimney = 'chimney';
const tobacco = 'tobacco';
const pipe = 'pipe';
const flames = 'flames';
const cigarette = 'cigarette';
const puff = 'puff';
const stain = 'stain';

let Smoke = {
    listNumber: 30,
    listA: [blaze, pollution, cigar, fire, stink, lungs],
    listB: [billows, ashes, chimney, tobacco, pipe, flames],
    prototype: smoke,
    highestAssociates: [cigarette, puff],
    lowestAssociate: stain,
};

//Define all variables for list 31: Soft
const soft  = 'soft';
const pillow = 'pillow';
const loud = 'loud';
const fur = 'fur';
const fluffy = 'fluffy';
const furry = 'furry';
const kitten = 'kitten';
const plush = 'plush';
const cotton = 'cotton';
const touch = 'touch';
const feather = 'feather';
const downy = 'downy';
const skin = 'skin';
const hard = 'hard';
const light = 'light';
const tender = 'tender';

let Soft = {
    listNumber: 31,
    listA: [pillow, loud, fur, fluffy, furry, kitten],
    listB: [plush, cotton, touch, feather, downy, skin],
    prototype: soft,
    highestAssociates: [hard, light],
    lowestAssociate: tender,
};

//Define all variables for list 32: Spider
const spider  = 'spider';
const big2 = 'big2';
const fly = 'fly';
const crawl = 'crawl';
const poison = 'poison';
const creepy = 'creepy';
const ugly = 'ugly';
const fright = 'fright';
const arachnid = 'arachnid';
const tarantula = 'tarantula';
const bite = 'bite';
const animal = 'animal';
const feelers = 'feelers';
const web = 'web';
const insect = 'insect';
const small = 'small';

let Spider = {
    listNumber: 32,
    listA: [big2, fly, crawl, poison, creepy, ugly],
    listB: [fright, arachnid, tarantula, bite, animal, feelers],
    prototype: spider,
    highestAssociates: [web, insect],
    lowestAssociate: small,
};

//Define all variables for list 33: Sweet
const sweet  = 'sweet';
const sugar = 'sugar';
const good = 'good';
const tooth = 'tooth';
const honey = 'honey';
const chocolate = 'chocolate';
const cake = 'cake';
const bitter = 'bitter';
const taste = 'taste';
const nice = 'nice';
const soda = 'soda';
const heart = 'heart';
const tart = 'tart';
const sour = 'sour';
const candy = 'candy';
const pie = 'pie';

let Sweet = {
    listNumber: 33,
    listA: [sugar, good, tooth, honey, chocolate, cake],
    listB: [bitter, taste, nice, soda, heart, tart],
    prototype: sweet,
    highestAssociates: [sour, candy],
    lowestAssociate: pie,
};

//Define all variables for list 34: Thief
const thief  = 'thief';
const crook = 'crook';
const money = 'money';
const bad = 'bad';
const jail = 'jail';
const villain = 'villain';
const bank = 'bank';
const burglar = 'burglar';
const cop = 'cop';
const rob = 'rob';
const gun = 'gun';
const crime = 'crime';
const bandit = 'bandit';
const steal = 'steal';
const robber = 'robber';
const criminal = 'criminal';

let Thief = {
    listNumber: 34,
    listA: [crook, money, bad, jail, villain, bank],
    listB: [burglar, cop, rob, gun, crime, bandit],
    prototype: thief,
    highestAssociates: [steal, robber],
    lowestAssociate: criminal,
};

//Define all variables for list 35: Trash
const trash  = 'trash';
const can = 'can';
const sewage = 'sewage';
const junk = 'junk';
const sweep = 'sweep';
const pile = 'pile';
const landfill = 'landfill';
const refuse = 'refuse';
const bag = 'bag';
const rubbish = 'rubbish';
const scraps = 'scraps';
const dump = 'dump';
const debris = 'debris';
const garbage = 'garbage';
const waster = 'waster';
const litter = 'litter';

let Trash = {
    listNumber: 35,
    listA: [can, sewage, junk, sweep, pile, landfill],
    listB: [refuse, bag, rubbish, scraps, dump, debris],
    prototype: trash,
    highestAssociates: [garbage, waster],
    lowestAssociate: litter,
};

//Define all variables for list 36: Window
const window2  = 'window2';
const pane = 'pane';
const ledge = 'ledge';
const house = 'house';
const curtain = 'curtain';
const view = 'view';
const sash = 'sash';
const shade = 'shade';
const sill = 'sill';
const open = 'open';
const frame = 'frame';
const breeze = 'breeze';
const screen = 'screen';
const door = 'door';
const glass = 'glass';
const shutter = 'shutter';

let Window = {
    listNumber: 36,
    listA: [pane, ledge, house, curtain, view, sash],
    listB: [shade, sill, open, frame, breeze, screen],
    prototype: window2,
    highestAssociates: [door, glass],
    lowestAssociate: shutter,
};
 
// ... after you have defined all of your lists

let allLists = [Anger, Army, Black, Bread, Car, Chair, City, Cold, Cup, Doctor, Flag, Foot, Fruit, Girl, High, King, Lion, Man, Mountain, Music, Needle, Pen, River, Rough, Rubber, Shirt, Sleep, Slow, Smell, Smoke, Soft, Spider, Sweet, Thief, Trash, Window]; // need to add all other lists to

// and randomize
let randomizedLists = jsPsych.randomization.repeat(allLists, 1);

// let listA = [];
//pause
//tone
// some prototype or a list1A higher associate

// congruent items
let congruentPrototype = Anger.prototype;
let congruentHighestAssociate1 = Anger.highestAssociates[0];
let congruentHighestAssociate2 = Anger.highestAssociates[1];

// incongruent items

// keep looping through the randmoized list until there is no match between prototypes, leading to a truly incongruent prototype
// i=0;
// while (i < randomizedLists.length) {

    // i++;
// }
let incongruentPrototype = randomizedLists[0].prototype;


// // keep looping through the randmoized list until there is no match between prototypes, leading to a truly incongruent prototype
// while (randomizedLists[0].prototype === Anger.highestAssociates[0]) {
//     randomizedLists.push(randomizedLists[0].shift)
// }
// let incongruentHighestAssociate2 = randomizedLists[0].highestAssociates[0];

// // keep looping through the randmoized list until there is no match between prototypes, leading to a truly incongruent prototype
// while (randomizedLists[0].prototype === Anger.highestAssociates[1]) {
//     randomizedLists.push(randomizedLists[0].shift)
// }
// let incongruentHighestAssociate5 = randomizedLists[0].highestAssociates[1];



// re-randomize list to keep things as random as possible
randomizedLists = jsPsych.randomization.repeat(randomizedLists, 1);

let testTrial = [];
// pushes 6 items from listA
for (let i=0; i<Anger.listA.length; i++) {
    testTrial.push({stimulus: Anger.listA[i], data: {test_part:"test", stim: Anger.listA[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
    //use underscores for data fields and headers and camel case for script
}
testTrial.push({stimulus: "TONE1"}); // pushes 7th item
testTrial.push("prototypeDummy"); // pushes 8th item placeholder for prototype
testTrial.push("placeholder"); // pushes 9th item placeholder for TONE2
