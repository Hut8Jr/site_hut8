# Guia de Contribuição

Este guia define o **fluxo de trabalho com Git/GitHub** e as **boas práticas** do projeto.
Com várias pessoas mexendo no mesmo código, um combinado claro evita conflitos, retrabalho e bugs. Leia antes de começar a codar.

**Stack:** React + Vite + Tailwind CSS · **Gerenciador:** npm

[**Arquivo Referência Figma**](https://www.figma.com/design/Uost0d4JzXkOJKWBUtLQjz/Hut8-Redesign?node-id=0-1&p=f&t=LJ2ep6zVvH6o5fgG-0)

---

## 1. Rodando o projeto localmente

```bash
git clone https://github.com/Hut8Jr/site_hut8.git
cd site_hut8
npm install        # instala as dependências (faça sempre que o package.json mudar)
npm run dev        # sobe o servidor de desenvolvimento (ex: http://localhost:5173)
```

Outros scripts úteis:

```bash
npm run build      # gera a versão de produção na pasta /dist
npm run preview    # testa localmente o build de produção
npm run lint       # roda o ESLint para checar problemas no código
```

---

## 2. As regras

1. **Nunca commite direto na `main`.** Todo trabalho acontece em uma branch própria.
2. **`git pull` antes de começar** e **antes de dar push.** Trabalhar em cima de código desatualizado é a causa nº 1 de conflito.
3. **Uma tarefa = uma branch = um Pull Request.** Não misture correções diferentes na mesma branch.
4. **Todo código entra na `main` via Pull Request revisado.** Nada de merge sem revisão.
5. **Commits pequenos e frequentes** valem mais que um commitão gigante no fim do dia.

---

## 3. O fluxo do dia a dia

Sempre que for começar uma tarefa nova:

```bash
git checkout main                 # volta para a main
git pull                          # atualiza com o que já foi mergeado
git checkout -b fix/nome-da-task  # cria e entra na sua branch nova
```

Enquanto trabalha:

```bash
git add .                                  # adiciona as mudanças
git commit -m "fix: corrige animação do hero"
git push -u origin fix/nome-da-task        # 1ª vez que sobe a branch
# nos próximos pushes da mesma branch, basta:
git push
```

Depois é só **abrir o Pull Request no GitHub** (ver seção 6).

---

## 4. Nomenclatura de branches

Formato: `tipo/descricao-curta-em-kebab-case`

| Tipo        | Quando usar                                  | Exemplo                    |
| ----------- | -------------------------------------------- | -------------------------- |
| `feat/`     | Nova funcionalidade ou seção                 | `feat/footer-links`        |
| `fix/`      | Correção de bug                              | `fix/menu-mobile-nao-abre` |
| `style/`    | Ajuste visual, CSS, responsividade, animação | `style/projetos-mobile`    |
| `refactor/` | Reorganizar código sem mudar comportamento   | `refactor/componente-card` |
| `docs/`     | Documentação                                 | `docs/atualiza-readme`     |

Dica: use o nome da seção/página na descrição (`home`, `projetos`, `servicos`, `equipe`) para ficar claro onde você está mexendo.

---

## 5. Padrão de commits (Conventional Commits)

Formato: `tipo: descrição no imperativo e em minúsculo`

```
feat: adiciona botão de whatsapp flutuante
fix: corrige quebra do grid em telas pequenas
style: ajusta espaçamento da seção de serviços
refactor: separa card de projeto em componente próprio
docs: adiciona instruções de deploy no readme
```

**Boas práticas:**

- Descreva **o que a mudança faz**, não o que você fez ("adiciona X", não "mexi no arquivo").
- Um commit deve fazer **uma coisa só**. Se a mensagem tem "e", talvez sejam dois commits.
- Mensagem curta e clara. Se precisar explicar mais, use o corpo do commit.

---

## 6. Pull Requests (PR)

Ao terminar a tarefa, abra um PR da sua branch para a `main` no GitHub.

**Um bom PR tem:**

- **Título claro:** `fix: corrige animação de entrada do Hero`
- **Descrição:** o que foi feito, por quê, e como testar.
- **Link da Issue** relacionada (ex: `Closes #12`) — isso fecha a task automaticamente ao mergear.
- **Print ou GIF** quando a mudança for visual. Facilita muito a revisão.

**Modelo de descrição:**

```markdown
## O que foi feito

Corrigida a animação de entrada do Hero para bater com o Figma.

## Como testar

1. Rodar `npm run dev`
2. Abrir a Home e recarregar
3. O texto deve subir com fade em ~0.4s

## Referência

[Frame no Figma](link-aqui)

Closes #12
```

**Revisão:**

- Todo PR precisa de **pelo menos 1 aprovação** antes do merge.
- Cada PR gera automaticamente uma **URL de preview na Vercel** — use para revisar o resultado no navegador e no celular antes de aprovar.
- Comentários na revisão são sobre o código, não sobre a pessoa. Recebeu um comentário? É oportunidade de melhorar, não crítica pessoal. 🙂

---

## 7. Resolvendo conflitos

Conflito acontece quando duas pessoas mexem na mesma parte do arquivo. Não entre em pânico.

```bash
git checkout main
git pull                          # pega a versão mais recente
git checkout sua-branch
git merge main                    # traz as mudanças da main pra sua branch
# o Git vai apontar os arquivos em conflito
```

Abra os arquivos marcados e procure por:

```
<<<<<<< HEAD
seu código
=======
código que veio da main
>>>>>>> main
```

Edite deixando a versão correta (às vezes é juntar as duas), **apague as marcações** `<<<`, `===`, `>>>`, e finalize:

```bash
git add .
git commit -m "merge: resolve conflitos com a main"
git push
```

Na dúvida sobre qual versão manter, **chame quem escreveu a outra parte** antes de sobrescrever.

---

## 8. O que NÃO fazer ❌

- Não dê `git push --force` na `main` (nem em branch de outra pessoa).
- Não commite arquivos gerados: `node_modules/`, `dist/`, `.env`. (Já estão no `.gitignore` — confira antes.)
- Não commite arquivos "lixo" criados por engano no diretório.
- Não deixe a branch viver por semanas. Terminou a task? Abra o PR e mergeie.
- Não mergeie o próprio PR sem revisão.

---

## 9. Cola rápida de comandos

```bash
git status                    # o que mudou / em que branch estou
git branch                    # lista branches locais
git checkout nome-da-branch   # troca de branch
git pull                      # atualiza a branch atual
git log --oneline -10         # últimos 10 commits, resumidos
git diff                      # vê as mudanças ainda não commitadas
git stash                     # guarda mudanças temporariamente (sem commitar)
git stash pop                 # recupera o que estava guardado
git restore nome-do-arquivo   # descarta mudanças de um arquivo
```

---

Dúvida sobre o fluxo? Pergunte no grupo **antes** de mergear. Melhor perguntar do que quebrar a `main`. 💪
