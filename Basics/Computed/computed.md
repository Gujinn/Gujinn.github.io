### 2. Propriétés calculées (Computed properties)

Les **propriétés calculées** sont des fonctions qui retournent une valeur. Elles sont définies dans l'option `computed`. La principale différence avec les méthodes est que les propriétés calculées sont mises en cache. Si leurs dépendances ne changent pas, elles ne sont pas recalculées.

**Exemple**:
```javascript
computed: {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}
```

**Quand les utiliser**:
- Pour des valeurs dérivées des données qui nécessitent un calcul.
- Lorsque vous voulez éviter des recalculs inutiles (grâce à la mise en cache).
- Lorsque vous avez besoin d'une valeur qui dépend de plusieurs propriétés réactives.

- **Propriétés calculées**: Utilisez-les pour des valeurs dérivées qui nécessitent un calcul et qui doivent être mises en cache.
