import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Tacos', '#f5428d'),
  new Category('c2', 'Enchiladas', '#f54242'),
  new Category('c3', 'Tamales', '#f5a442'),
  new Category('c4', 'Quesadillas', '#f5d142'),
  new Category('c5', 'Pozole', '#368dff'),
  new Category('c6', 'Chiles en Nogada', '#41d95d'),
  new Category('c7', 'Mole', '#9eecff'),
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Tacos al Pastor',
    'Baratos',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tacos-al-Pastor.jpg/800px-Tacos-al-Pastor.jpg',
    20,
    [
      'Carne de puerco',
      'Piña',
      'Cebollas',
      'Cilantro',
      'Tortillas',
      'Especias'
    ],
    [
      'Marina las tortillas con la grasa de la carne y con especias.',
      'Sirve en servilletas con piña, cebolla, cilantro y especias.'
    ],
    true,
    false,
    false,
    false
  ),
  new Meal(
    'm2',
    ['c2'],
    'Enchiladas Verdes',
    'Costoso',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/1/14/EnchiladasVerdes.jpg',
    20,
    [
      'tortillas',
      'Pollo',
      'Salsa Verde',
      'Queso',
      'Crema',
      'Cebollas'
    ],
    [
      'Coce el pollo y despues tenemos que deshebrarlo',
      'LLena las tortillas con pollo, enrollalo, y arriba pones salsa verde, cebollas, crema y queso.',
      'Cocinalo hasta que se derrita'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm3',
    ['c3'],
    'Tamales',
    'Caro',
    'Dificil',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Tamales_Mexicanos_sweet_corn_tamales_01.jpg/800px-Tamales_Mexicanos_sweet_corn_tamales_01.jpg',
    20,
    [
      'Masa',
      'Hojas de maíz',
      'Relleno (Pollo, carne, elote, etc.)',
      'Especias'
    ],
    [
      'Aplasta la masa en la hoja de maíz',
      'Mete el relleno y enrolla la hoja de maíz',
      'Cocina a vapor por 2 horas'
    ],
    true,
    false,
    false,
    true
  ),
  new Meal(
    'm4',
    ['c4'],
    'Quesadillas',
    'Barato',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Quesadilla_2.jpg/1920px-Quesadilla_2.jpg',
    20,
    [
      'Tortillas',
      'Queso',
      'Relleno Opcional (Hongos, carne, pollo, etc.)'
    ],
    [
      'Calienta la tortilla en la estufa.',
      'Agrega el queso y el relleno',
      'Doblalo a la mitad y dejalo hasta que se derrita el queso.'
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm5',
    ['c5'],
    'Pozole',
    'Caro',
    'Dificil',
    'https://upload.wikimedia.org/wikipedia/commons/5/5b/Pozole.jpg',
    20,
    [
      'Granos de maíz',
      'Carne de puerco',
      'Salsa roja o verde',
      'Lechuga',
      'Rabanos',
      'Cebollas',
      'Limón'
    ],
    [
      'Cocina la carne de puerco y los granos de maíz en un recipiente grande',
      'Agrega la salsa y cocina a fuego lento.',
      'Sirve con lechuga, cebolla, rabanos y limón'
    ],
    true,
    false,
    false,
    false
  ),
  new Meal(
    'm6',
    ['c6'],
    'Chiles en Nogada',
    'Caro',
    'Dificil',
    'https://upload.wikimedia.org/wikipedia/commons/d/d6/Chile_relleno_en_nogada_con_granada.jpg',
    90,
    [
      'Chiles poblanos',
      'Carne molida',
      'Fruta',
      'Especias',
      'Semillas de granada'
    ],
    [
      'Tatema el chile poblano',
      'Prepara el relleno de carne molida, frutas, y especias',
      'Llena el chile poblano y pon las semillas de granada encima, especias y salsa.'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm7',
    ['c7'],
    'Mole Poblano',
    'Caro',
    'Dificil',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Comida_en_la_Feria_del_Mole_2014_10.JPG/273px-Comida_en_la_Feria_del_Mole_2014_10.JPG',
    20,
    [
      'Pollo',
      'Mole (Chocolate, especias, etc.)',
      'Arroz'
    ],
    [
      'Cocina el pollo.',
      'Prepara el mole.',
      'Sirve el pollo con arroz y le pones el mole encima del pollo.'
    ],
    false,
    false,
    false,
    false
  )
];