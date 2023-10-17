### 3. Observateurs (Watchers)

Les **observateurs** écoutent les changements sur les propriétés réactives et exécutent une fonction en réponse. Ils sont définis dans l'option `watch`.

**Exemple**:
```javascript
watch: {
  firstName: function(newValue, oldValue) {
    console.log('firstName changed from ' + oldValue + ' to ' + newValue);
  }
}
```

**Quand les utiliser**:
- Lorsque vous voulez exécuter une action en réponse à un changement de données, mais que cette action ne produit pas une nouvelle valeur (contrairement aux propriétés calculées).
- Pour des effets secondaires, comme la récupération de données depuis une API lorsque certaines données changent.
- Lorsque vous avez besoin de réagir à des changements sur plusieurs propriétés réactives.

- **Observateurs**: Utilisez-les pour des effets secondaires et pour réagir à des changements de données.
