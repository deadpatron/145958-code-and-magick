'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('.hidden');

var firstName = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var nameWizadrSelector = function () {
  var actualyFirstName = firstName[Math.floor(Math.random() * firstName.length)];
  var actualySecondName = secondName[Math.floor(Math.random() * secondName.length)];
  return actualyFirstName + ' ' + actualySecondName;
}

var wizadrsSelector = [
  {name: nameWizadrSelector()},
  {coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']},
  {eyesColor: ['black', 'red', 'blue', 'yellow', 'green']}
];
