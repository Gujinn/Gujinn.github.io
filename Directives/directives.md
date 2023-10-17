### 4. Directives Vue3

Les directives sont des préfixes spéciaux qui indiquent à la bibliothèque Vue de faire quelque chose à l'élément DOM. Voici quelques-unes des directives les plus couramment utilisées dans Vue3:

#### a. `v-if`, `v-else-if`, `v-else`
- Ces directives sont utilisées pour conditionnellement rendre des éléments.
- Si l'expression de `v-if` est évaluée comme vraie, l'élément est rendu.

**Exemple**:
```html
<p v-if="seen">Maintenant vous me voyez</p>
```

#### b. Boucles `v-for`
- La directive `v-for` est utilisée pour rendre une liste d'éléments en les liant à un tableau.

**Exemple**:
```html
<ul>
  <li v-for="item in items">{{ item.text }}</li>
</ul>
```

#### c. `v-bind`
- La directive `v-bind` est utilisée pour lier un attribut à une expression.
- Par exemple, pour lier l'attribut `href` d'un lien à une variable `url`.

**Exemple**:
```html
<a v-bind:href="url">Lien</a>
```

#### d. `v-on`
- La directive `v-on` est utilisée pour écouter les événements DOM et exécuter du code lorsqu'ils sont déclenchés.
- Par exemple, pour écouter un événement de clic sur un bouton.

**Exemple**:
```html
<button v-on:click="doSomething">Cliquez-moi</button>
```

#### e. `v-model`
- La directive `v-model` crée une liaison sur un élément `input`, `textarea` ou `select`.
- Si vous utilisez `v-model` sur un `input`, par exemple, la valeur de cet input sera liée à la variable que vous avez spécifiée.

**Exemple**:
```html
<input v-model="message">
```