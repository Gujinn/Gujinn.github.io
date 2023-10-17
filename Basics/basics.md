### 2. Les bases de Vue3

#### a. Instance Vue3 et cycle de vie
- Chaque application Vue commence par la création d'une nouvelle instance de Vue avec la fonction `Vue.createApp()`.
- Vue3 a plusieurs hooks de cycle de vie tels que `beforeCreate`, `created`, `beforeMount`, `mounted`, `beforeUpdate`, `updated`, `beforeUnmount`, et `unmounted`.

#### b. Syntaxe de modèle et liaison de données
- **Liaison de texte**: Utilisez `{{ variableName }}` pour afficher la valeur d'une variable dans le template.
- **Liaison d'attribut**: Utilisez `v-bind:attribut="variableName"` pour lier une variable à un attribut HTML.
- **Liaison d'événement**: Utilisez `v-on:eventName="methodName"` pour lier une méthode à un événement DOM, comme `v-on:click`.

#### c. Méthodes, propriétés calculées et observateurs
- **Méthodes**: Ce sont des fonctions que vous pouvez appeler depuis le template ou d'autres méthodes de l'instance Vue.
- **Propriétés calculées (Computed properties)**: Ce sont des fonctions qui retournent une valeur. Elles sont mises en cache et ne sont recalculées que lorsque les dépendances changent.
  ```javascript
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  ```
- **Observateurs (Watchers)**: Ils écoutent les changements sur les propriétés réactives et exécutent une fonction lorsque la valeur change.
  ```javascript
  watch: {
    firstName: function(newValue, oldValue) {
      // Do something when firstName changes
    }
  }
  ```