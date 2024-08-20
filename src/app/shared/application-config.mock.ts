import { IArtical, IRegistration, IUser } from "./application.config.interface";

export const Users: IUser[] = [
  {
    nickname: 'Bob3',
    name: 'Bob',
    email: 'bob@mail.ru',
    password: 'Qwerty123*',
  },
  {
    nickname: 'Kate1',
    name: 'Kate',
    email: 'kate@mail.ru',
    password: 'Qwerty123*'
  },
  {
    nickname: 'Peter',
    email: 'peter@mail.ru',
    name: 'Peter',
    password: 'Qwerty123*'
  },
  {
    nickname: 'Peter2',
    email: 'pit@mail.ru',
    name: 'Peter',
    password: 'Qwerty123*'
  },

]

export const RegistrationData: IRegistration[] = [
  {
    name: 'name',
    description: 'Имя',
    regular: '^[а-яА-ЯёЁa-zA-Z]+$',
    error: 'Введите имя на английском или русском языке'
  },
  {
    name: 'email',
    description: 'Email',
    regular: '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)',
    error: 'Введите e-mail'

  },
  {
    name: 'password',
    description: 'Пароль',
    regular: '^[a-zA-Z][a-zA-Z0-9-_\.]{6,20}$',
    error: 'Необходимо использовать строчные и прописные латинские буквы, цифры'

  },
  {
    name: 'nickname',
    description: 'Никнейм',
    regular: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$',
    error: 'Возможно использовать только латинские буквы и цифры'

  },

]

export const Catigories: string[] = [
  'Финансы',
  'Здоровье',
  'Литература',
  'Кино',
  'Фотография',
  'Спорт',
];

export const Articals: IArtical[] = [
  {
    id: 'first-15-6-1',
    title: 'first',
    categories: ['Кино', 'Литература'],
    content: '<p><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Lorem ipsum dolor sit amet consectetur adipisicing elit.<em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Similique laudantium</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"><em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">voluptas minus quas quod eveniet voluptates sunt praesentium?</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"> </strong><span style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Tempore maiores aliquam voluptates sint dolorum obcaecati aliquid dignissimos laudantium blanditiis libero.</span></p>'
  },
  {
    id: 'state-15-6-2',
    title: 'state',
    categories: ['Фотография', 'Спорт'],
    content: '<p><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Lorem ipsum dolor sit amet consectetur adipisicing elit.<em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Similique laudantium</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"><em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">voluptas minus quas quod eveniet voluptates sunt praesentium?</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"> </strong><span style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Tempore maiores aliquam voluptates sint dolorum obcaecati aliquid dignissimos laudantium blanditiis libero.</span></p>'
  },
  {
    id: 'state-15-6-3',
    title: 'state',
    categories: ['Финансы'],
    content: '<p><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Lorem ipsum dolor sit amet consectetur adipisicing elit.<em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Similique laudantium</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"><em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">voluptas minus quas quod eveniet voluptates sunt praesentium?</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"> </strong><span style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Tempore maiores aliquam voluptates sint dolorum obcaecati aliquid dignissimos laudantium blanditiis libero.</span></p>'
  },
  {
    id: 'Information-15-6-4',
    title: 'Information',
    categories: ['Кино', 'Литература'],
    content: '<p><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Lorem ipsum dolor sit amet consectetur adipisicing elit.<em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Similique laudantium</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"><em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">voluptas minus quas quod eveniet voluptates sunt praesentium?</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"> </strong><span style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Tempore maiores aliquam voluptates sint dolorum obcaecati aliquid dignissimos laudantium blanditiis libero.</span></p>'
  },
  {
    id: 'text-15-6-5',
    title: 'text',
    categories: ['Здоровье', 'Спорт'],
    content: '<p><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Lorem ipsum dolor sit amet consectetur adipisicing elit.<em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Similique laudantium</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"><em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">voluptas minus quas quod eveniet voluptates sunt praesentium?</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"> </strong><span style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Tempore maiores aliquam voluptates sint dolorum obcaecati aliquid dignissimos laudantium blanditiis libero.</span></p>'
  },
  {
    id: 'publish-15-6-6',
    title: 'Publish',
    categories: ['Кино'],
    content: '<p><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Lorem ipsum dolor sit amet consectetur adipisicing elit.<em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Similique laudantium</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"><em> </em></strong><em style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">voluptas minus quas quod eveniet voluptates sunt praesentium?</em><strong style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);"> </strong><span style="background-color: rgb(255, 255, 255); color: rgb(102, 102, 102);">Tempore maiores aliquam voluptates sint dolorum obcaecati aliquid dignissimos laudantium blanditiis libero.</span></p>'
  },
];




