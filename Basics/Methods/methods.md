### 1. Méthodes

Les **méthodes** sont des fonctions définies dans l'option `methods` d'une instance Vue. Elles sont utilisées pour:

- Réagir à des événements, comme des clics de bouton.
- Réaliser des calculs basés sur les données de l'instance.
- Manipuler les données.

**Exemple**:
```javascript
methods: {
  sayHello: function() {
    alert('Hello!');
  },
  incrementCount: function() {
    this.count += 1;
  }
}
```

**Quand les utiliser**:
- Pour des actions déclenchées par des événements.
- Pour des opérations qui ne nécessitent pas de mise en cache (contrairement aux propriétés calculées).

- **Méthodes**: Utilisez-les pour des actions et des calculs simples.
