# CleanTube – Stay Focused

**Versão:** 1
**Plataforma:** Extensão para navegador (Firefox)

## 📌 Sobre o projeto

O **CleanTube – Stay Focused** é uma extensão criada para ajudar você a reduzir distrações em plataformas de conteúdo, especialmente no YouTube.

O foco principal do projeto **não é bloquear completamente os conteúdos**, mas sim **diminuir o consumo excessivo**, removendo elementos que incentivam o uso impulsivo.

👉 Disponível na Firefox Add-ons:  
https://addons.mozilla.org/pt-BR/firefox/addon/cleantube-stay-focused/

---

## 🚀 Funcionalidades

### 🔴 YouTube
- Remove **Shorts da página inicial**
- Remove **Shorts do feed principal**
- Mantém Shorts nos resultados de busca  
  (útil quando você quer respostas rápidas)
- Não remove notificações de novos Shorts

### 📸 Instagram
- Remove o botão de **Reels**

### 🎵 TikTok
- Redireciona automaticamente para uma página limpa (`CleanTube.html`)

---

## 🎯 Objetivo

O objetivo do CleanTube não é eliminar totalmente os conteúdos curtos, mas sim:

- Reduzir distrações
- Diminuir o tempo gasto em conteúdo impulsivo
- Ajudar você a consumir conteúdo de forma mais consciente

💡 Ideia principal:
> Se os Shorts não aparecem o tempo todo na sua tela inicial, as chances de você consumir esse tipo de conteúdo diminuem drasticamente.

---

## 🧠 Filosofia

Hoje em dia, grande parte do consumo de conteúdo não vem de buscas, mas sim de recomendações.

O CleanTube atua exatamente nesse ponto:

- Remove estímulos constantes
- Mantém o conteúdo acessível quando necessário
- Evita o uso automático e sem intenção

---

## ⚙️ Como funciona

A extensão utiliza:

- `MutationObserver` para monitorar mudanças no DOM
- Remoção dinâmica de elementos relacionados a Shorts
- Execução contínua em páginas como YouTube e Instagram

---

## 📦 Código principal (resumo)

```js
const Main = new Engine()

if (location.hostname.includes("instagram")){
    setInterval(()=>{Main.Instagram()},1000)
}

if (location.hostname.includes("youtube")){
    Main.Youtube()
}

if (location.hostname.includes("tiktok")){
    location.href = runtime.getURL("/CleanTube.html")
}
```

---

## 🔮 Futuro do projeto

Possíveis melhorias:

- Suporte a mais plataformas
- Configurações personalizadas
- Ativar/desativar funcionalidades
- Estatísticas de uso

---

## 🤝 Contribuição

Sinta-se livre para contribuir com ideias, melhorias ou correções.

---

## 📄 Licença

Este projeto é open-source e pode ser usado livremente.

---

## 🧑‍💻 Autor

Desenvolvido com o objetivo de ajudar pessoas a manterem o foco e reduzirem distrações digitais.
