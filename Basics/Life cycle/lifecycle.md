Le cycle de vie d'une instance Vue est une série d'étapes par lesquelles elle passe depuis sa création jusqu'à sa destruction. À chaque étape du cycle de vie, Vue fournit des "hooks" qui vous permettent d'exécuter du code à des moments spécifiques.

Voici un aperçu des hooks de cycle de vie de Vue3 et des actions couramment effectuées à chaque étape:

#### 1. `beforeCreate`
- **Quand**: Juste avant que l'initialisation de l'instance Vue ne commence.
- **Utilisation courante**: Rarement utilisé car les propriétés réactives (comme `data` ou `methods`) ne sont pas encore définies.

#### 2. `created`
- **Quand**: Après la création de l'instance Vue, lorsque les propriétés réactives sont configurées.
- **Utilisation courante**: Pour exécuter du code juste après que l'instance ait été initialisée. Par exemple, pour récupérer des données depuis une API.

#### 3. `beforeMount`
- **Quand**: Juste avant que l'instance Vue ne soit montée sur le DOM.
- **Utilisation courante**: Rarement utilisé, car il est généralement préférable d'éviter de manipuler le DOM directement avec Vue.

#### 4. `mounted`
- **Quand**: Après que l'instance Vue ait été montée sur le DOM.
- **Utilisation courante**: Pour exécuter du code qui nécessite que le composant soit monté dans le DOM, comme l'utilisation de bibliothèques qui nécessitent un élément DOM.

#### 5. `beforeUpdate`
- **Quand**: Juste avant que les modifications apportées aux données ne soient reflétées dans le DOM.
- **Utilisation courante**: Pour exécuter du code avant que les modifications ne soient appliquées, par exemple pour sauvegarder l'état avant une mise à jour.

#### 6. `updated`
- **Quand**: Après que les modifications apportées aux données aient été reflétées dans le DOM.
- **Utilisation courante**: Pour exécuter du code après une mise à jour du DOM, comme l'interaction avec une bibliothèque qui a besoin d'être informée des changements du DOM.

#### 7. `beforeUnmount`
- **Quand**: Juste avant que l'instance Vue ne soit détruite et retirée du DOM.
- **Utilisation courante**: Pour nettoyer les écouteurs d'événements, les timers ou d'autres ressources avant que le composant ne soit détruit.

#### 8. `unmounted`
- **Quand**: Après que l'instance Vue ait été détruite et retirée du DOM.
- **Utilisation courante**: Pour exécuter du code après que le composant ait été complètement détruit, bien que ce soit rarement nécessaire.