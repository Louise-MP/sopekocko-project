# sopekocko-project
Projet 6 - Openclassrooms - Développeur web 
<em><strong>"Construisez une API sécurisée pour une application d'avis gastronomiques"</strong></em>
  [Voir le projet sur OpenClassrooms](https://openclassrooms.com/fr/projects/676/assignment)
<hr>

<h2>📌 Présentation du projet</h2>

<p>So Pekocko est une entreprise familiale de 10 salariés.
Son activité principale est la création de sauces piquantes dont la composition est tenue secrète.
Forte de son succès, l’entreprise souhaite se développer et créer une application web, dans laquelle les utilisateurs pourront ajouter leurs sauces préférées et liker ou disliker les sauces proposées par les autres.

  <strong>Objectif</strong> : permettre à l'internaute de s'inscrire sur le site et de pouvoir:

 <pre>
- consulter toutes les sauces enregistrées,
- créer des sauces,
- modifier les sauces qu'il a créé,
- supprimer les sauces qu'il a crée,
- liker ou disliker les sauces enregistrées sur le site.
</pre>

<h2>🏅 Objectif et compétences évaluées</h2>

<p><em><strong>Le but est de créer le backend de l'application, le frontend étant déjà codé et fourni</strong></em></p>

<ul>
  <li>Implémenter un modèle logique de données conformément à la réglementation</li>
  <li>Stocker des données de manière sécurisée</li>
  <li>Mettre en œuvre des opérations CRUD de manière sécurisée</li>
  <li>Sécurité <strong>OWASP</strong> et <strong>RGPD</strong></li>
</ul>

<h2>Instructions relatives à l'API</h2>

[Note de cadrage](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/P6_Note%20de%20cadrage%20So%20Pekocko_V3.pdf)<br>
[Guidelines](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Guidelines+API.pdf)


<h2>Contenu du repository</h2>

Pour récupérer le frontend séparément sur GitHub, [cliquez ici](https://github.com/OpenClassrooms-Student-Center/dwj-projet6).


<ul>
  <li>Contient le dossier <code>frontend</code> et le dossier <code>backend</code>. Possibilité de cloner ce repository pour récupérer en local, les parties frontend et backend de l'application.</li>
</ul>

<h2>🔨 Insctructions de lancement</h2>

<h4>💡 Lancer le frontend</h4>

Précision : il faut installer node-sass a part.

Avec le terminal, aller dans le dossier <code>frontend</code> puis :

<pre>
- taper: "npm install",
- puis: "npm start",
- enfin: dans votre navigateur se rendre à l'adresse: http://localhost:4200 
</pre>

<h4>💡 Lancer le backend</h4>

Avec le terminal, aller dans le dossier <code>backend</code> puis :

<pre>
 - chargez le package nodemon : npm install -g nodemon.
 - lancez le serveur: nodemon server.
</pre>

Si les packages sont déjà installés, ces commandes suffisent à démarrer les serveurs :

<pre>
 - npm start via le terminal dans le dossier frontend.
 - nodemon server via le terminal dans le dossier backend.
 - Se connecter à l'url : http://localhost:4200.
</pre>

<h2>🖥 Connexion</h2>

Ouvrir [localhost:4200](https://localhost:4200) dans votre naviguateur.

Pour s'inscrire sur l'application, l'utilisateur doit fournir un email et un mot de passe.

<hr>

<p><strong>Hébergement sur MongDB Atlas. Toutes les opérations de la base de données utilisent le pack Mongoose, avec des schémas de données strictes</strong>.</p>

