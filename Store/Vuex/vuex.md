### 7. Gestion de l'état avec Vuex

Vuex est une bibliothèque de gestion d'état pour Vue.js. Il sert de magasin centralisé pour tous les composants d'une application, avec des règles garantissant que l'état ne peut être modifié que de manière prévisible.

#### a. Introduction à Vuex
- Vuex est utilisé pour gérer et centraliser l'état d'une application Vue.
- Il est particulièrement utile pour les applications de grande taille ou pour celles qui nécessitent un état partagé entre plusieurs composants.

#### b. Concepts principaux

1. **State**:
   - Le `state` est l'objet de données de votre magasin.
   - Il contient toutes les données que vous souhaitez stocker dans Vuex.

2. **Getters**:
   - Les `getters` sont des fonctions qui reçoivent l'état et retournent des données dérivées ou calculées.
   - Ils peuvent être considérés comme des propriétés calculées pour les magasins.

3. **Mutations**:
   - Les `mutations` sont des fonctions qui modifient l'état.
   - Elles sont la seule façon de changer l'état dans Vuex.
   - Les mutations doivent être synchrones.

4. **Actions**:
   - Les `actions` sont des fonctions qui peuvent effectuer des opérations asynchrones.
   - Elles peuvent appeler plusieurs mutations et autres actions.
   - Une fois les opérations asynchrones terminées, elles commettent des mutations pour modifier l'état.

5. **Modules**:
   - Pour les applications plus grandes, le magasin peut être divisé en modules.
   - Chaque module peut avoir son propre état, mutations, actions, getters, et même des modules imbriqués.

#### c. Configuration de Vuex

1. **Installation**:
   ```bash
   npm install vuex@next --save
   ```

2. **Création du magasin**:
```javascript
import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  },
  getters: {
    doubleCount: state => {
      return state.count * 2;
    }
  }
});

export default store;
```

3. **Utilisation dans l'application**:
   - Intégrez le magasin dans votre application principale et accédez-y via `this.$store` dans vos composants.