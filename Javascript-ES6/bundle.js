"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var usuario2 = {
  nome: 'Victor',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sudeste',
    estado: 'SC'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
} // REST(... "Resto") + desestruração


var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto);
var arr = [1, 2, 3, 4, 5];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4));
console.log(soma(1, 2)); // SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6]; // juntar os arrays

var arr3 = [].concat(arr1, arr2); // substituição

var usuario3 = _objectSpread(_objectSpread({}, usuario2), {}, {
  nome: 'Eu mesmo'
});

console.log(usuario3); //Template literals

var nome5 = 'Denys';
var idade = 18;
console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos")); // Object short syntax

var usuario5 = {
  nome: nome,
  idade: idade,
  empresa: 'Rocketseat'
};
