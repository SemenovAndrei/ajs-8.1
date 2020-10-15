/* eslint-disable no-unused-vars */

class Team {
  constructor() {
    this.members = new Set();
  }
  // TODO:
  //   Метод add должен добавлять выбранного персонажа в команду (объект класса Character).
  // При этом такой объект уже существует в команде -
  // дублирования происходить не должно, должна генерироваться ошибка.

  // Метод addAll должен иметь возможность добавлять произвольное количество персонажей
  // (используйте rest-parameters) в команду.
  // При этом задвоения быть не должно, ошибка генерироваться не должна.

  // Метод toArray должен производить конвертацию Set в массив.

  // Не забудьте написать unit-тесты, которые обеспечивают
  // 100% покрытие функций и классов, которые вы тестируете.

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен');
    }
    this.members.add(character);
  }

  addAll(characters) {
    this.members.add(...characters);
  }

  toArray() {
    Array.from(this.members);
  }
}
