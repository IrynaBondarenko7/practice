function e(e){return e&&e.__esModule?e.default:e}const i={recepiesList:document.querySelector(".recepies-list"),openModalButton:document.querySelector(".modal__btn-open"),closeModalButton:document.querySelector(".modal__btn-close"),backdrop:document.querySelector(".backdrop")};var n,t,c;n=JSON.parse('[{"id":"XWaQXcbk0","name":"Картофель, запеченный в мундире","description":"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.","image":"https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg","price":100,"ingredients":["Картофель","Чеснок","Сметана","Бекон","Твердый сыр","Зеленый лук"]},{"id":"pkXzyRp1P","name":"Томатный магрибский суп","description":"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.","image":"https://cdn.pixabay.com/photo/2016/11/13/22/03/tomatoes-1822185_1280.jpg","price":150,"ingredients":["Помидоры","Куриный бульон","Мед","Петрушка","Кинза","Паприка"]},{"id":"QMom9q4Ku","name":"Крем-суп из тыквы","description":"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.","image":"https://cdn.pixabay.com/photo/2022/05/16/20/25/soup-7201145_1280.jpg","price":100,"ingredients":["Тыква","Петрушка","Сливки","Бренди","Куриный бульон"]},{"id":"k2k0UrjZG","name":"Салат из красной фасоли с творожным сыром","description":"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.","image":"https://cdn.pixabay.com/photo/2015/10/20/09/57/healthy-997541_1280.jpg","price":150,"ingredients":["Фасоль","Соль","Чеснок","Оливковое масло","Творожный сыр","Красный лук"]},{"id":"j2k8U1jZd","name":"Классический греческий салат ","description":"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.","image":"https://cdn.pixabay.com/photo/2018/04/21/03/47/food-3337621_1280.jpg","price":350,"ingredients":["Оливковое масло","Лимонный сок","Чеснок","Помидоры","Красный лук","Сыр фета","Маслины"]}]'),console.log(e(n)),t=i.recepiesList,c=e(n),t.insertAdjacentHTML("beforeend",function(e){return e.map((({id:e,name:i,description:n,image:t,price:c,ingredients:o})=>`<li class="recepies-list__item">\n        <article class="card">\n          <img src="${t}" alt="${i}" />\n          <div class="card__content">\n            <h2 class="card__name">${i}</h2>\n            <p class="card__price">${c}</p>\n            <p class="card__description">${n}</p>\n            <ul class="tag-list">${o.map((e=>`<li>${e}</li>`)).join("")}</ul>\n          </div>\n        </article>\n      </li> `)).join("")}(c)),i.openModalButton.addEventListener("click",(function(e){i.backdrop.classList.remove("is-hidden")})),i.closeModalButton.addEventListener("click",(function(e){i.backdrop.classList.add("is-hidden")}));
//# sourceMappingURL=index.21b42a9e.js.map
