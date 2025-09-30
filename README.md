# 🚀 AWS Portfolio Infrastructure — Thomas Le Flohic

Bienvenue dans mon projet **Portfolio AWS / DevOps**.  
L’objectif est simple : construire un **site portfolio complet**, tout en apprenant étape par étape les services AWS essentiels utilisés en entreprise.  

Chaque projet est une brique indépendante, mais tous sont intégrés pour former une **infrastructure cohérente** :  
hébergement, compute, sauvegardes, base de données, CDN, serverless et DNS.

---

## 📌 Objectifs
- Démontrer ma progression et mes compétences Cloud/DevOps.  
- Construire une infrastructure AWS **réaliste et documentée**.  
- Créer un portfolio en ligne utilisable dans ma recherche d’emploi.  

---

## 🪜 Roadmap des projets

### ✅ Projet 1 — Static Website on S3
- Site portfolio statique hébergé sur S3.  
- Découverte : bucket policies, CloudFront, sécurité des buckets publics.  

### ✅ Projet 2 — EC2 Web Server
- Déploiement d’une instance EC2 + Nginx servant une page web “Labs AWS”.  
- Découverte : security groups, SSH, importance des load balancers.  

### ✅ Projet 3 — File Backup System
- Mise en place d’un bucket S3 pour sauvegarder mes fichiers (CVTest, diagrammes).  
- Découverte : storage classes, lifecycle policies, versioning.  

### 🔄 Projet 4 — Simple Database App (RDS + Flask)
- Déploiement d’une mini app Flask connectée à une base RDS.  
- Découverte : connexion DB managée, sauvegardes, pooling, sécurité.  

### 🔄 Projet 5 — CloudFront Distribution Optimisation
- Optimisation du cache CloudFront pour accélérer le portfolio dans le monde entier.  
- Découverte : edge locations, cache invalidation, behaviors.  

### 🔄 Projet 6 — Serverless Function (Lambda)
- Fonction Lambda déclenchée lors d’événements (upload de fichier, formulaire contact).  
- Découverte : cold starts, IAM minimal, architecture event-driven.  

### 🔄 Projet 7 — Route 53 Domain Setup
- Nom de domaine personnalisé (`thomasleflohic.com`) pointant vers mon portfolio.  
- Découverte : DNS records, health checks, traffic routing.  

---

## 📂 Structure du repo
aws-portfolio-infra/
├─ project1-s3-static-site/
├─ project2-ec2-webserver/
├─ project3-s3-backup/
├─ project4-rds-flask/
├─ project5-cloudfront/
├─ project6-lambda/
├─ project7-route53/
└─ README.md <-- ce fichier

---

Chaque projet contient :
- **README spécifique** avec explications + captures.  
- **Code / configs / scripts** utilisés.  

---

## 🛠️ Compétences mises en pratique
- **AWS Core Services** : S3, EC2, RDS, Lambda, Route 53, CloudFront.  
- **Sécurité & IAM** : policies, roles, SSH, encryption, access control.  
- **DevOps** : versioning, automatisation, bonnes pratiques de déploiement.  
- **Infrastructure as Code (IaC)** *(prévu en extension avec Terraform)*.  
- **CI/CD** *(prévu : GitHub Actions pour déploiement automatique du portfolio)*.  

---

## 📸 Captures & démonstrations
*(à compléter au fur et à mesure avec des screenshots et/ou gifs)*

---

## 🔮 Prochaines étapes
- Fusionner tous les projets en une **infrastructure complète**.  
- Ajouter Terraform pour automatiser la création de l’infra.  
- Mettre en place un pipeline CI/CD GitHub Actions.  
- Ajouter des outils de monitoring (CloudWatch, Prometheus/Grafana).  

---

✍️ **Auteur : Thomas Le Flohic**  
🔗 [LinkedIn](#) — [GitHub](#) — [Portfolio](#)

