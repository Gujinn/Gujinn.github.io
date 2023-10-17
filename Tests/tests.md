### 9. Tests dans Vue3

Tester votre application est crucial pour garantir sa fiabilité et sa robustesse. Vue3, avec l'écosystème Vue, fournit des outils pour faciliter le test de vos composants et de votre application.

#### a. Vue Test Utils
- **Vue Test Utils** est la bibliothèque officielle pour tester les composants Vue.
- Elle fournit des méthodes pour monter un composant, interagir avec lui, et vérifier son comportement.

#### b. Installation et configuration
Pour commencer avec Vue Test Utils et Jest (un cadre de test populaire), installez les dépendances nécessaires:
```bash
npm install --save-dev @vue/test-utils jest @vue/vue3-jest
```

#### c. Écrire un test de base
Supposons que vous ayez un composant simple `Greeting.vue`:
```vue
<template>
  <div>{{ greeting }}</div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello, Vue!'
    };
  }
}
</script>
```

Un test pour ce composant pourrait ressembler à ceci:
```javascript
import { mount } from '@vue/test-utils';
import Greeting from '@/components/Greeting.vue';

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    const wrapper = mount(Greeting);
    expect(wrapper.text()).toMatch('Hello, Vue!');
  });
});
```

#### d. Simuler des interactions utilisateur
Avec Vue Test Utils, vous pouvez simuler des interactions utilisateur comme des clics ou des entrées de formulaire.

**Exemple**:
Si vous avez un bouton dans votre composant qui, lorsqu'il est cliqué, change le message de salutation:
```vue
<template>
  <div>
    <button @click="changeGreeting">Click me</button>
    <div>{{ greeting }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello, Vue!'
    };
  },
  methods: {
    changeGreeting() {
      this.greeting = 'Hello, World!';
    }
  }
}
</script>
```

Le test pourrait ressembler à ceci:
```javascript
import { mount } from '@vue/test-utils';
import Greeting from '@/components/Greeting.vue';

describe('Greeting.vue', () => {
  it('changes greeting on button click', async () => {
    const wrapper = mount(Greeting);
    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toMatch('Hello, World!');
  });
});
```

#### e. Tester avec Vuex et Vue Router
Vue Test Utils offre également des moyens d'intégrer des tests avec Vuex (pour la gestion de l'état) et Vue Router (pour la navigation).