### 3. Composants Vue3

Les composants sont l'une des fonctionnalités les plus puissantes de Vue. Ils vous permettent de créer des éléments réutilisables avec leur propre état, logique et interface.

#### a. Introduction aux composants
- Un composant est une instance Vue indépendante avec sa propre logique, modèle et style.
- Les composants peuvent être imbriqués et réutilisés, permettant de construire des interfaces complexes à partir de pièces plus petites et gérables.

#### b. Passage de données avec les props
- Les `props` (ou propriétés) permettent de passer des données d'un composant parent à un composant enfant.
- Ils sont définis dans l'option `props` du composant enfant et sont passés dans le modèle du composant parent.

**Exemple**:
```javascript
// Composant enfant
Vue.createApp({
  props: ['message'],
  template: '<span>{{ message }}</span>'
});

// Utilisation dans le composant parent
<child-component message="Hello from parent!"></child-component>
```

#### c. Émission d'événements personnalisés
- Les composants enfants peuvent émettre des événements pour communiquer avec le composant parent.
- Utilisez la méthode `$emit` pour émettre un événement.

**Exemple**:
```javascript
// Composant enfant
Vue.createApp({
  methods: {
    notifyParent: function() {
      this.$emit('child-event', 'Data from child');
    }
  }
});

// Écoute de l'événement dans le composant parent
<child-component @child-event="handleChildEvent"></child-component>
```

#### d. Slots et slots nommés
- Les slots permettent d'insérer du contenu dans un composant depuis le composant parent.
- Les slots nommés offrent plus de flexibilité en permettant d'insérer du contenu à des emplacements spécifiques.

**Exemple**:
```javascript
// Composant enfant avec slot
Vue.createApp({
  template: `
    <div>
      <slot></slot>
    </div>
  `
});

// Utilisation dans le composant parent
<child-component>
  <p>Ce contenu sera affiché à l'emplacement du slot dans le composant enfant.</p>
</child-component>
```