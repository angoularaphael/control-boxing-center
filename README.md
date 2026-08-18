# Control Boxing Center

Hub central des outils **Boxing Center** — liens vers les consoles et sites.

**Domaine :** [control.boxingcenter.fr](https://control.boxingcenter.fr)  
**Repo :** [github.com/angoularaphael/control-boxing-center](https://github.com/angoularaphael/control-boxing-center)

`control-boxing-center.vercel.app` redirige en **301** vers `https://control.boxingcenter.fr`.

## Apps

| Carte | URL |
|-------|-----|
| Gestion Manager | https://manager-com.boxingcenter.fr/ |
| Fiches IK | https://fiche-ik.boxingcenter.fr/ |
| Compta Boxing | https://compta.boxingcenter.fr |
| Clients | https://manager-com.boxingcenter.fr/admin/clients |
| Boutique | https://boutique.boxingcenter.fr |
| Boutique admin | https://boutique.boxingcenter.fr/admin |

Modifier les liens dans [`lib/apps.js`](lib/apps.js).

## DNS

CNAME `control` → `cname.vercel-dns.com` (projet Vercel Control Boxing Center), puis ajouter le domaine `control.boxingcenter.fr` dans Vercel → Settings → Domains.

## Local

```bash
npm install
npm run dev
```

## Vercel

Importer le repo, déployer. Aucune variable d'environnement requise.
