### 6. Vue3 Router

Le Vue Router est le routeur officiel pour Vue.js. Il permet de créer des applications monopages (SPA) en associant des composants Vue à des routes.

#### a. Configuration du Vue Router
- Pour commencer, il faut installer le Vue Router via npm ou yarn.
  ```bash
  npm install vue-router@next
  ```

#### b. Définition des routes
- Les routes sont définies en associant un chemin à un composant.
  
**Exemple**:
```javascript
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
```

#### c. Ajout du router-view et du router-link
- Le composant `<router-view>` est l'endroit où le composant actuel de la route sera rendu.
- Le composant `<router-link>` est utilisé pour naviguer entre les pages.

**Exemple**:
```html
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>

<router-view></router-view>
```

#### d. Navigation guards et chargement paresseux
- Les guards de navigation permettent de définir des comportements spécifiques lors de la navigation entre les routes, par exemple pour vérifier si un utilisateur est authentifié.
- Le chargement paresseux permet de charger les composants à la demande, ce qui peut améliorer les performances de l'application.

**Exemple de chargement paresseux**:
```javascript
const AboutComponent = () => import('./components/AboutComponent.vue');

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent }
];
```