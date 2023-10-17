### 5. Vue3 Composition API

La Composition API est une nouvelle fonctionnalité introduite dans Vue3 qui offre une alternative à l'API basée sur les options pour organiser la logique des composants.

#### a. Introduction à la Composition API
- La Composition API est conçue pour gérer la logique des composants de manière plus flexible, en particulier pour les composants plus complexes.
- Elle utilise des fonctions et des valeurs réactives pour créer et gérer l'état et la logique du composant.

#### b. `ref` et `reactive`
- `ref` est utilisé pour créer une valeur réactive.
- `reactive` est utilisé pour créer un objet réactif.

**Exemple**:
```javascript
import { ref, reactive } from 'vue';

const count = ref(0);
const state = reactive({
  firstName: 'John',
  lastName: 'Doe'
});
```

#### c. `computed` et `watch`
- `computed` est utilisé pour créer des propriétés calculées.
- `watch` est utilisé pour réagir aux changements de valeurs réactives ou de propriétés calculées.

**Exemple**:
```javascript
import { ref, computed, watch } from 'vue';

const count = ref(0);
const doubled = computed(() => count.value * 2);

watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
});
```

#### d. La méthode `setup`
- La méthode `setup` est le point d'entrée pour utiliser la Composition API dans un composant.
- Elle est exécutée avant que le composant ne soit créé et est le lieu où vous définissez l'état réactif, les fonctions et la logique du composant.

**Exemple**:
```javascript
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    return {
      count,
      increment
    };
  }
};
```