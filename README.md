# Portfólio acadêmico

Site pessoal em HTML, CSS e JavaScript, pronto para o GitHub Pages.

## Como personalizar
1. Abra `index.html` e troque os textos de exemplo (Seu Nome, curso, instituição, atividades, projetos, eventos, sites, e-mail, GitHub e LinkedIn).
2. Coloque suas imagens na pasta `img/`: `foto.jpg` (já incluída) e `site1.jpg`, `site2.jpg` (capturas dos sites). Se o arquivo não existir, o espaço fica reservado.
3. Para mudar as cores, edite as variáveis no início de `css/style.css`.
4. Para ver no computador, abra `index.html` no navegador.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub chamado `portfolio` (ou `seu-usuario.github.io` para usar o endereço principal).
2. No terminal, dentro da pasta do projeto:
```bash
git init
git add .
git commit -m "Primeira versão do portfólio"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portfolio.git
git push -u origin main
```
3. No GitHub: **Settings > Pages > Build and deployment**. Em *Source*, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**, e salve.
4. Em 1 a 2 minutos o site estará em `https://SEU-USUARIO.github.io/portfolio/`.

## Atualizar depois
```bash
git add .
git commit -m "Descreva a mudança"
git push
```
