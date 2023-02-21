# ToDoList

develop
mar. 21 févr. 2023 15:18:17 CET
feature-screen1
mar. 21 févr. 2023 15:19:52 CET

## Demarche :

1. découper en composant (1 composant = 1 screen) (7+ APP) . on commence par la connexion
2. faire le wire-frame pour chaque composant
3. pour chaque composant faire le schéma reactif
   1. etat
   2. action
   3. effet
   4. ui
4. developper chaque partie
5. placer les styles

![image](./image/todolist%20conexion.png)

## in a nuttshell

store : contient les informations

1. un evenement déclenche l'action
2. l'action modife le information du store
3. le store répercute le changement sur l'interface

## screen 1

1. déclaration d'un store SubscribeStore dans src/store/Subscribe.store.tsx
   ce store contient 2 champs username et password.
2. déclaration de 2 fonction action checkmail et checkpass

3. creation d'un ecran de test OutputTest.tsx pour tester les valeurs du store SubscribeStore
